export const id = 12;
export const ids = [12];
export const modules = {
  38473: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => mq
    });
    var Yq = gq(38477);
    const lq = [0, 0, 0];
    class Oq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq;
        this.pool = qq, this.origin = Eq, this.count = 0, this.free = []
      }
      take() {
        var qq;
        const Eq = null !== (qq = this.free.pop()) && void 0 !== qq ? qq : this.count++;
        return Eq >= this.pool.WB && this.pool.grow(Math.max(2 * this.pool.WB, Eq + 1)), this.hide(Eq), Eq
      }
      release(qq) {
        this.hide(qq), this.free.push(qq)
      }
      write(qq, Eq, gq, lq) {
        const {
          records: Oq
        } = this.pool, {
          origin: mq
        } = this, xq = qq * Yq.e;
        Oq[xq] = Eq - mq[0], Oq[xq + 1] = gq - mq[1], Oq[xq + 2] = lq - mq[2], Oq[xq + Yq.g] = 0, this.pool.markDirty(qq)
      }
      hide(qq) {
        this.pool.records[qq * Yq.e + Yq.g] = 1, this.pool.markDirty(qq)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class mq {
      constructor(qq, Eq, gq) {
        this.api = qq, this.model = Eq, this.initialCapacity = gq, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(qq) {
        let Eq = this.kinds.get(qq);
        if (void 0 === Eq) {
          const gq = this.api.createInstancePool({
            ...this.model,
            item: qq
          }, this.initialCapacity);
          null === gq || void 0 === gq || gq.setOrigin(this.origin[0], this.origin[1], this.origin[2]), Eq = gq && new Oq(gq, this.origin), this.kinds.set(qq, Eq)
        }
        return Eq
      }
      follow(qq) {
        const {
          origin: Eq
        } = this;
        if (Math.abs(qq[0] - Eq[0]) <= 512 && Math.abs(qq[1] - Eq[1]) <= 512 && Math.abs(qq[2] - Eq[2]) <= 512) return !1;
        Eq[0] = Math.floor(qq[0]), Eq[1] = Math.floor(qq[1]), Eq[2] = Math.floor(qq[2]);
        for (const gq of this.kinds.values()) null === gq || void 0 === gq || gq.pool.setOrigin(Eq[0], Eq[1], Eq[2]);
        return !0
      }
      commit() {
        for (const qq of this.kinds.values()) null === qq || void 0 === qq || qq.commit()
      }
      dispose() {
        for (const qq of this.kinds.values()) null === qq || void 0 === qq || qq.dispose();
        this.kinds.clear()
      }
    }
  },
  39221: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Bq
    });
    const Yq = "Pipe",
      lq = "Extractor Pipe",
      Oq = (new Set([Yq, lq]), new Set([Yq, lq, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var mq = gq(38473);
    class xq {
      constructor(qq) {
        this.api = qq, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new mq.b(qq, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(qq) {
        if (qq.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${qq.id} with < 2 waypoints`);
        const Eq = this.kinds.kindOf(qq.itemName);
        if (!Eq) return void(this.unshown.has(qq.itemName) || (this.unshown.add(qq.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${qq.itemName}"`)));
        this.remove(qq.id);
        const gq = function(qq) {
          return (qq.waypoints.length - 1) / 2 * 1e3
        }(qq);
        if (Date.now() - qq.startTimeMs > gq + 2e3) return;
        const Yq = Eq.take();
        this.items.set(qq.id, {
          kind: Eq,
          slot: Yq,
          waypoints: qq.waypoints,
          startTimeMs: qq.startTimeMs,
          durationMs: gq
        })
      }
      onEnd(qq) {
        this.remove(qq.id)
      }
      Wy() {
        if (0 === this.items.size) return void this.kinds.commit();
        const qq = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [Eq, gq] of this.items) qq - gq.startTimeMs > gq.durationMs + 2e3 ? this.remove(Eq) : this.write(gq, qq);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(qq) {
        const Eq = this.items.get(qq);
        Eq && (Eq.kind.release(Eq.slot), this.items.delete(qq))
      }
      write(qq, Eq) {
        const gq = qq.waypoints.length - 1;
        let Yq = (Eq - qq.startTimeMs) / qq.durationMs;
        Yq < 0 ? Yq = 0 : Yq > 1 && (Yq = 1);
        const lq = Yq * gq;
        let Oq = Math.floor(lq);
        Oq >= gq && (Oq = gq - 1);
        const mq = lq - Oq,
          [xq, Aq, cq] = qq.waypoints[Oq],
          [uq, Bq, Wq] = qq.waypoints[Oq + 1];
        qq.kind.write(qq.slot, xq + (uq - xq) * mq + .5, Aq + (Bq - Aq) * mq + .5, cq + (Wq - cq) * mq + .5)
      }
    }
    const Aq = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      cq = new Set(Aq);
    class uq {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(qq) {
        this.api = qq, this.pipeVisualizer = new xq(qq)
      }
      onClose() {
        var qq;
        null === (qq = this.pipeVisualizer) || void 0 === qq || qq.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(qq, Eq) {
        const {
          pipeVisualizer: gq
        } = this;
        if (gq)
          if ("pipeItemSpawnBatch" === qq)
            for (const Yq of Eq.items) gq.onSpawn(Yq);
          else if ("pipeItemEndBatch" === qq)
          for (const Yq of Eq.items) gq.onEnd(Yq)
      }
      Wy() {
        var qq;
        null === (qq = this.pipeVisualizer) || void 0 === qq || qq.Wy()
      }
      onPlayerAttemptAltAction(qq, Eq, gq, Yq, lq, mq) {
        var xq;
        if (!cq.has(this.api.getMetaInfo(lq).rootName)) return;
        const Aq = null === (xq = this.api.Ngq(qq)) || void 0 === xq ? void 0 : xq.name;
        return void 0 !== Aq && Oq.has(Aq) ? "preventAction" : void 0
      }
    }
    const Bq = function(qq, Eq, gq) {
      if ("survivalFactory" !== gq && "survivalFactoryPersistent" !== gq) {
        return {}
      }
      const Yq = new uq;
      return {
        onCreate: qq => {
          Yq.onCreate(qq)
        },
        onClose: () => {
          Yq.onClose()
        },
        onReceivedMessageFromServer: (qq, Eq) => {
          Yq.onReceivedMessageFromServer(qq, Eq)
        },
        SB: () => {
          Yq.Wy()
        },
        altVetoBlocks: Aq,
        onPlayerAttemptAltAction: (qq, Eq, gq, lq, Oq, mq) => Yq.onPlayerAttemptAltAction(qq, Eq, gq, lq, Oq, mq)
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);