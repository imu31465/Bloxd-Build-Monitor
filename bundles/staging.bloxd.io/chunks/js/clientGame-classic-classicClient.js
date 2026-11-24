export const id = 12;
export const ids = [12];
export const modules = {
  38522: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    var tS = gS(38526);
    const bS = [0, 0, 0];
    class XS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS;
        this.pool = SS, this.origin = HS, this.count = 0, this.free = []
      }
      take() {
        var SS;
        const HS = null !== (SS = this.free.pop()) && void 0 !== SS ? SS : this.count++;
        return HS >= this.pool.hf && this.pool.grow(Math.max(2 * this.pool.hf, HS + 1)), this.hide(HS), HS
      }
      release(SS) {
        this.hide(SS), this.free.push(SS)
      }
      write(SS, HS, gS, bS) {
        const {
          records: XS
        } = this.pool, {
          origin: xS
        } = this, NS = SS * tS.b;
        XS[NS] = HS - xS[0], XS[NS + 1] = gS - xS[1], XS[NS + 2] = bS - xS[2], XS[NS + tS.f] = 0, this.pool.markDirty(SS)
      }
      hide(SS) {
        this.pool.records[SS * tS.b + tS.f] = 1, this.pool.markDirty(SS)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class xS {
      constructor(SS, HS, gS) {
        this.api = SS, this.model = HS, this.initialCapacity = gS, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(SS) {
        let HS = this.kinds.get(SS);
        if (void 0 === HS) {
          const gS = this.api.createInstancePool({
            ...this.model,
            item: SS
          }, this.initialCapacity);
          null === gS || void 0 === gS || gS.setOrigin(this.origin[0], this.origin[1], this.origin[2]), HS = gS && new XS(gS, this.origin), this.kinds.set(SS, HS)
        }
        return HS
      }
      follow(SS) {
        const {
          origin: HS
        } = this;
        if (Math.abs(SS[0] - HS[0]) <= 512 && Math.abs(SS[1] - HS[1]) <= 512 && Math.abs(SS[2] - HS[2]) <= 512) return !1;
        HS[0] = Math.floor(SS[0]), HS[1] = Math.floor(SS[1]), HS[2] = Math.floor(SS[2]);
        for (const gS of this.kinds.values()) null === gS || void 0 === gS || gS.pool.setOrigin(HS[0], HS[1], HS[2]);
        return !0
      }
      commit() {
        for (const SS of this.kinds.values()) null === SS || void 0 === SS || SS.commit()
      }
      dispose() {
        for (const SS of this.kinds.values()) null === SS || void 0 === SS || SS.dispose();
        this.kinds.clear()
      }
    }
  },
  39290: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => fS
    });
    const tS = "Pipe",
      bS = "Extractor Pipe",
      XS = (new Set([tS, bS]), new Set([tS, bS, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var xS = gS(38522);
    class NS {
      constructor(SS) {
        this.api = SS, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new xS.e(SS, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(SS) {
        if (SS.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${SS.id} with < 2 waypoints`);
        const HS = this.kinds.kindOf(SS.itemName);
        if (!HS) return void(this.unshown.has(SS.itemName) || (this.unshown.add(SS.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${SS.itemName}"`)));
        this.remove(SS.id);
        const gS = function(SS) {
          return (SS.waypoints.length - 1) / 2 * 1e3
        }(SS);
        if (Date.now() - SS.startTimeMs > gS + 2e3) return;
        const tS = HS.take();
        this.items.set(SS.id, {
          kind: HS,
          slot: tS,
          waypoints: SS.waypoints,
          startTimeMs: SS.startTimeMs,
          durationMs: gS
        })
      }
      onEnd(SS) {
        this.remove(SS.id)
      }
      sC() {
        if (0 === this.items.size) return void this.kinds.commit();
        const SS = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [HS, gS] of this.items) SS - gS.startTimeMs > gS.durationMs + 2e3 ? this.remove(HS) : this.write(gS, SS);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(SS) {
        const HS = this.items.get(SS);
        HS && (HS.kind.release(HS.slot), this.items.delete(SS))
      }
      write(SS, HS) {
        const gS = SS.waypoints.length - 1;
        let tS = (HS - SS.startTimeMs) / SS.durationMs;
        tS < 0 ? tS = 0 : tS > 1 && (tS = 1);
        const bS = tS * gS;
        let XS = Math.floor(bS);
        XS >= gS && (XS = gS - 1);
        const xS = bS - XS,
          [NS, qS, uS] = SS.waypoints[XS],
          [IS, fS, kS] = SS.waypoints[XS + 1];
        SS.kind.write(SS.slot, NS + (IS - NS) * xS + .5, qS + (fS - qS) * xS + .5, uS + (kS - uS) * xS + .5)
      }
    }
    const qS = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      uS = new Set(qS);
    class IS {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(SS) {
        this.api = SS, this.pipeVisualizer = new NS(SS)
      }
      onClose() {
        var SS;
        null === (SS = this.pipeVisualizer) || void 0 === SS || SS.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(SS, HS) {
        const {
          pipeVisualizer: gS
        } = this;
        if (gS)
          if ("pipeItemSpawnBatch" === SS)
            for (const tS of HS.items) gS.onSpawn(tS);
          else if ("pipeItemEndBatch" === SS)
          for (const tS of HS.items) gS.onEnd(tS)
      }
      sC() {
        var SS;
        null === (SS = this.pipeVisualizer) || void 0 === SS || SS.sC()
      }
      onPlayerAttemptAltAction(SS, HS, gS, tS, bS, xS) {
        var NS;
        if (!uS.has(this.api.getMetaInfo(bS).rootName)) return;
        const qS = null === (NS = this.api.AHS(SS)) || void 0 === NS ? void 0 : NS.name;
        return void 0 !== qS && XS.has(qS) ? "preventAction" : void 0
      }
    }
    const fS = function(SS, HS, gS) {
      if ("survivalFactory" !== gS && "survivalFactoryPersistent" !== gS) {
        return {}
      }
      const tS = new IS;
      return {
        onCreate: SS => {
          tS.onCreate(SS)
        },
        onClose: () => {
          tS.onClose()
        },
        onReceivedMessageFromServer: (SS, HS) => {
          tS.onReceivedMessageFromServer(SS, HS)
        },
        mf: () => {
          tS.sC()
        },
        altVetoBlocks: qS,
        onPlayerAttemptAltAction: (SS, HS, gS, bS, XS, xS) => tS.onPlayerAttemptAltAction(SS, HS, gS, bS, XS, xS)
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);