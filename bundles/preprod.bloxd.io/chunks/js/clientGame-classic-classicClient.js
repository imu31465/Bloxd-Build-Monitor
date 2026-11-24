export const id = 12;
export const ids = [12];
export const modules = {
  38724: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp
    });
    var Op = cp(38726);
    const op = [0, 0, 0];
    class Ip {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op;
        this.pool = pp, this.origin = ip, this.count = 0, this.free = []
      }
      take() {
        var pp;
        const ip = null !== (pp = this.free.pop()) && void 0 !== pp ? pp : this.count++;
        return ip >= this.pool.TA && this.pool.grow(Math.max(2 * this.pool.TA, ip + 1)), this.hide(ip), ip
      }
      release(pp) {
        this.hide(pp), this.free.push(pp)
      }
      write(pp, ip, cp, op) {
        const {
          records: Ip
        } = this.pool, {
          origin: Sp
        } = this, xp = pp * Op.e;
        Ip[xp] = ip - Sp[0], Ip[xp + 1] = cp - Sp[1], Ip[xp + 2] = op - Sp[2], Ip[xp + Op.h] = 0, this.pool.markDirty(pp)
      }
      hide(pp) {
        this.pool.records[pp * Op.e + Op.h] = 1, this.pool.markDirty(pp)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Sp {
      constructor(pp, ip, cp) {
        this.api = pp, this.model = ip, this.initialCapacity = cp, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(pp) {
        let ip = this.kinds.get(pp);
        if (void 0 === ip) {
          const cp = this.api.createInstancePool({
            ...this.model,
            item: pp
          }, this.initialCapacity);
          null === cp || void 0 === cp || cp.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ip = cp && new Ip(cp, this.origin), this.kinds.set(pp, ip)
        }
        return ip
      }
      follow(pp) {
        const {
          origin: ip
        } = this;
        if (Math.abs(pp[0] - ip[0]) <= 512 && Math.abs(pp[1] - ip[1]) <= 512 && Math.abs(pp[2] - ip[2]) <= 512) return !1;
        ip[0] = Math.floor(pp[0]), ip[1] = Math.floor(pp[1]), ip[2] = Math.floor(pp[2]);
        for (const cp of this.kinds.values()) null === cp || void 0 === cp || cp.pool.setOrigin(ip[0], ip[1], ip[2]);
        return !0
      }
      commit() {
        for (const pp of this.kinds.values()) null === pp || void 0 === pp || pp.commit()
      }
      dispose() {
        for (const pp of this.kinds.values()) null === pp || void 0 === pp || pp.dispose();
        this.kinds.clear()
      }
    }
  },
  39464: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Ap
    });
    const Op = "Pipe",
      op = "Extractor Pipe",
      Ip = (new Set([Op, op]), new Set([Op, op, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Sp = cp(38724);
    class xp {
      constructor(pp) {
        this.api = pp, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Sp.b(pp, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(pp) {
        if (pp.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${pp.id} with < 2 waypoints`);
        const ip = this.kinds.kindOf(pp.itemName);
        if (!ip) return void(this.unshown.has(pp.itemName) || (this.unshown.add(pp.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${pp.itemName}"`)));
        this.remove(pp.id);
        const cp = function(pp) {
          return (pp.waypoints.length - 1) / 2 * 1e3
        }(pp);
        if (Date.now() - pp.startTimeMs > cp + 2e3) return;
        const Op = ip.take();
        this.items.set(pp.id, {
          kind: ip,
          slot: Op,
          waypoints: pp.waypoints,
          startTimeMs: pp.startTimeMs,
          durationMs: cp
        })
      }
      onEnd(pp) {
        this.remove(pp.id)
      }
      gH() {
        if (0 === this.items.size) return void this.kinds.commit();
        const pp = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [ip, cp] of this.items) pp - cp.startTimeMs > cp.durationMs + 2e3 ? this.remove(ip) : this.write(cp, pp);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(pp) {
        const ip = this.items.get(pp);
        ip && (ip.kind.release(ip.slot), this.items.delete(pp))
      }
      write(pp, ip) {
        const cp = pp.waypoints.length - 1;
        let Op = (ip - pp.startTimeMs) / pp.durationMs;
        Op < 0 ? Op = 0 : Op > 1 && (Op = 1);
        const op = Op * cp;
        let Ip = Math.floor(op);
        Ip >= cp && (Ip = cp - 1);
        const Sp = op - Ip,
          [xp, Lp, Yp] = pp.waypoints[Ip],
          [Dp, Ap, Pp] = pp.waypoints[Ip + 1];
        pp.kind.write(pp.slot, xp + (Dp - xp) * Sp + .5, Lp + (Ap - Lp) * Sp + .5, Yp + (Pp - Yp) * Sp + .5)
      }
    }
    const Lp = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Yp = new Set(Lp);
    class Dp {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(pp) {
        this.api = pp, this.pipeVisualizer = new xp(pp)
      }
      onClose() {
        var pp;
        null === (pp = this.pipeVisualizer) || void 0 === pp || pp.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(pp, ip) {
        const {
          pipeVisualizer: cp
        } = this;
        if (cp)
          if ("pipeItemSpawnBatch" === pp)
            for (const Op of ip.items) cp.onSpawn(Op);
          else if ("pipeItemEndBatch" === pp)
          for (const Op of ip.items) cp.onEnd(Op)
      }
      gH() {
        var pp;
        null === (pp = this.pipeVisualizer) || void 0 === pp || pp.gH()
      }
      onPlayerAttemptAltAction(pp, ip, cp, Op, op, Sp) {
        var xp;
        if (!Yp.has(this.api.getMetaInfo(op).rootName)) return;
        const Lp = null === (xp = this.api.Acp(pp)) || void 0 === xp ? void 0 : xp.name;
        return void 0 !== Lp && Ip.has(Lp) ? "preventAction" : void 0
      }
    }
    const Ap = function(pp, ip, cp) {
      if ("survivalFactory" !== cp && "survivalFactoryPersistent" !== cp) {
        return {}
      }
      const Op = new Dp;
      return {
        onCreate: pp => {
          Op.onCreate(pp)
        },
        onClose: () => {
          Op.onClose()
        },
        onReceivedMessageFromServer: (pp, ip) => {
          Op.onReceivedMessageFromServer(pp, ip)
        },
        LP: () => {
          Op.gH()
        },
        altVetoBlocks: Lp,
        onPlayerAttemptAltAction: (pp, ip, cp, op, Ip, Sp) => Op.onPlayerAttemptAltAction(pp, ip, cp, op, Ip, Sp)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);