export const id = 12;
export const ids = [12, 13];
export const modules = {
  39301: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke
    });
    var ye = He(39305);
    const be = [0, 0, 0];
    class Me {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be;
        this.pool = ee, this.origin = ie, this.count = 0, this.free = []
      }
      take() {
        var ee;
        const ie = null !== (ee = this.free.pop()) && void 0 !== ee ? ee : this.count++;
        return ie >= this.pool.bk && this.pool.grow(Math.max(2 * this.pool.bk, ie + 1)), this.hide(ie), ie
      }
      release(ee) {
        this.hide(ee), this.free.push(ee)
      }
      write(ee, ie, He, be) {
        const {
          records: Me
        } = this.pool, {
          origin: Ke
        } = this, Ue = ee * ye.e;
        Me[Ue] = ie - Ke[0], Me[Ue + 1] = He - Ke[1], Me[Ue + 2] = be - Ke[2], Me[Ue + ye.i] = 0, this.pool.markDirty(ee)
      }
      hide(ee) {
        this.pool.records[ee * ye.e + ye.i] = 1, this.pool.markDirty(ee)
      }
      commit() {
        this.pool.commit(this.count)
      }
      dispose() {
        this.pool.dispose()
      }
    }
    class Ke {
      constructor(ee, ie, He) {
        this.api = ee, this.model = ie, this.initialCapacity = He, this.kinds = new Map, this.origin = [0, 0, 0]
      }
      kindOf(ee) {
        let ie = this.kinds.get(ee);
        if (void 0 === ie) {
          const He = this.api.createInstancePool({
            ...this.model,
            item: ee
          }, this.initialCapacity);
          null === He || void 0 === He || He.setOrigin(this.origin[0], this.origin[1], this.origin[2]), ie = He && new Me(He, this.origin), this.kinds.set(ee, ie)
        }
        return ie
      }
      follow(ee) {
        const {
          origin: ie
        } = this;
        if (Math.abs(ee[0] - ie[0]) <= 512 && Math.abs(ee[1] - ie[1]) <= 512 && Math.abs(ee[2] - ie[2]) <= 512) return !1;
        ie[0] = Math.floor(ee[0]), ie[1] = Math.floor(ee[1]), ie[2] = Math.floor(ee[2]);
        for (const He of this.kinds.values()) null === He || void 0 === He || He.pool.setOrigin(ie[0], ie[1], ie[2]);
        return !0
      }
      commit() {
        for (const ee of this.kinds.values()) null === ee || void 0 === ee || ee.commit()
      }
      dispose() {
        for (const ee of this.kinds.values()) null === ee || void 0 === ee || ee.dispose();
        this.kinds.clear()
      }
    }
  },
  40123: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => ke
    });
    const ye = "Pipe",
      be = "Extractor Pipe",
      Me = (new Set([ye, be]), new Set([ye, be, "Splitter Pipe", "Filter Pipe", "Merger Pipe", "Wire"]));
    var Ke = He(39301);
    class Ue {
      constructor(ee) {
        this.api = ee, this.items = new Map, this.unshown = new Set, this.kinds = void 0, this.kinds = new Ke.c(ee, {
          scale: .3,
          yaw: 0
        }, 16)
      }
      onSpawn(ee) {
        if (ee.waypoints.length < 2) return void console.warn(`[PipeItemVisualizer] Ignoring pipe item ${ee.id} with < 2 waypoints`);
        const ie = this.kinds.kindOf(ee.itemName);
        if (!ie) return void(this.unshown.has(ee.itemName) || (this.unshown.add(ee.itemName), console.warn(`[PipeItemVisualizer] No model for pipe item "${ee.itemName}"`)));
        this.remove(ee.id);
        const He = function(ee) {
          return (ee.waypoints.length - 1) / 2 * 1e3
        }(ee);
        if (Date.now() - ee.startTimeMs > He + 2e3) return;
        const ye = ie.take();
        this.items.set(ee.id, {
          kind: ie,
          slot: ye,
          waypoints: ee.waypoints,
          startTimeMs: ee.startTimeMs,
          durationMs: He
        })
      }
      onEnd(ee) {
        this.remove(ee.id)
      }
      qE() {
        if (0 === this.items.size) return void this.kinds.commit();
        const ee = Date.now();
        this.kinds.follow(this.api.getCameraPosition());
        for (const [ie, He] of this.items) ee - He.startTimeMs > He.durationMs + 2e3 ? this.remove(ie) : this.write(He, ee);
        this.kinds.commit()
      }
      dispose() {
        this.kinds.dispose(), this.items.clear()
      }
      remove(ee) {
        const ie = this.items.get(ee);
        ie && (ie.kind.release(ie.slot), this.items.delete(ee))
      }
      write(ee, ie) {
        const He = ee.waypoints.length - 1;
        let ye = (ie - ee.startTimeMs) / ee.durationMs;
        ye < 0 ? ye = 0 : ye > 1 && (ye = 1);
        const be = ye * He;
        let Me = Math.floor(be);
        Me >= He && (Me = He - 1);
        const Ke = be - Me,
          [Ue, Fe, Je] = ee.waypoints[Me],
          [oe, Re, ke] = ee.waypoints[Me + 1];
        ee.kind.write(ee.slot, Ue + (oe - Ue) * Ke + .5, Fe + (Re - Fe) * Ke + .5, Je + (ke - Je) * Ke + .5)
      }
    }
    const Fe = ["Auto Crafter", "Lunite Auto Crafter", "Auto Harvester", "Lunite Auto Harvester", "Filter Pipe", "Merger Pipe", "Auto Miner", "_Auto Miner Body", "_Auto Miner Drill Front", "_Auto Miner Drill Back", "_Auto Miner Foot Front", "Lunite Auto Miner", "_Lunite Auto Miner Body", "_Lunite Auto Miner Drill Front", "_Lunite Auto Miner Drill Back", "_Lunite Auto Miner Foot Front"],
      Je = new Set(Fe);
    class oe {
      constructor() {
        this.pipeVisualizer = null, this.api = void 0
      }
      onCreate(ee) {
        this.api = ee, this.pipeVisualizer = new Ue(ee)
      }
      onClose() {
        var ee;
        null === (ee = this.pipeVisualizer) || void 0 === ee || ee.dispose(), this.pipeVisualizer = null
      }
      onReceivedMessageFromServer(ee, ie) {
        const {
          pipeVisualizer: He
        } = this;
        if (He)
          if ("pipeItemSpawnBatch" === ee)
            for (const ye of ie.items) He.onSpawn(ye);
          else if ("pipeItemEndBatch" === ee)
          for (const ye of ie.items) He.onEnd(ye)
      }
      qE() {
        var ee;
        null === (ee = this.pipeVisualizer) || void 0 === ee || ee.qE()
      }
      onPlayerAttemptAltAction(ee, ie, He, ye, be, Ke) {
        var Ue;
        if (!Je.has(this.api.getMetaInfo(be).rootName)) return;
        const Fe = null === (Ue = this.api.Vye(ee)) || void 0 === Ue ? void 0 : Ue.name;
        return void 0 !== Fe && Me.has(Fe) ? "preventAction" : void 0
      }
    }
    var Re = He(40128);
    const ke = function(ee, ie, He) {
      if ("smp2" === He) return (0, Re.makeSmp2ClientGame)();
      if ("survivalFactory" !== He && "survivalFactoryPersistent" !== He) {
        return {}
      }
      const ye = new oe;
      return {
        onCreate: ee => {
          ye.onCreate(ee)
        },
        onClose: () => {
          ye.onClose()
        },
        onReceivedMessageFromServer: (ee, ie) => {
          ye.onReceivedMessageFromServer(ee, ie)
        },
        YR: () => {
          ye.qE()
        },
        altVetoBlocks: Fe,
        onPlayerAttemptAltAction: (ee, ie, He, be, Me, Ke) => ye.onPlayerAttemptAltAction(ee, ie, He, be, Me, Ke)
      }
    }
  },
  40128: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      makeSmp2ClientGame: () => Me
    });
    const ye = "smp2FirstSpawn";
    var be = He(1653);

    function Me() {
      let ee = !1;
      return {
        onReceivedMessageFromServer: ie => {
          ie !== ye || ee || (ee = !0, (0, be.h)({
            id: "smp2.first_spawn"
          }))
        }
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);