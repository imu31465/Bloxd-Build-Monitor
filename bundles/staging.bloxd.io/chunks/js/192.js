export const id = 192;
export const ids = [52, 192];
export const modules = {
  38654: (BB, jB, zB) => {
    var QB = {
      "./combat_1.png": 38659,
      "./dungeon_crumbling_crypt.png": 38664,
      "./dungeon_frozen_hollow.png": 38672,
      "./dungeon_wildwood_grove.png": 38674,
      "./dungeons.png": 38681,
      "./farming_1.png": 38685,
      "./fishing_1.png": 38689,
      "./hub.png": 38697,
      "./island.png": 38699,
      "./mining_1.png": 38707,
      "./mining_1_bridge.png": 38711,
      "./mining_1_gallery.png": 38720,
      "./mining_1_hollow.png": 38723,
      "./mining_1_village.png": 38732
    };

    function nB(BB) {
      var jB = dB(BB);
      return zB(jB)
    }

    function dB(BB) {
      if (!zB.o(QB, BB)) {
        var jB = new Error("Cannot find module '" + BB + "'");
        throw jB.code = "MODULE_NOT_FOUND", jB
      }
      return QB[BB]
    }
    nB.keys = function() {
      return Object.keys(QB)
    }, nB.resolve = dB, BB.exports = nB, nB.id = 38654
  },
  38738: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      e: () => dB
    });
    const QB = new WeakMap;

    function nB(BB, jB) {
      return QB.set(BB, jB), BB
    }

    function dB(BB) {
      var jB;
      return null !== (jB = QB.get(BB)) && void 0 !== jB ? jB : null
    }
  },
  38627: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      var QB;
      const {
        width: nB,
        height: dB
      } = zB, IB = null !== (QB = BB.text) && void 0 !== QB ? QB : BB, NB = (IB.x / 100 - .5) * nB, uB = (IB.y / 100 - .5) * dB, UB = nB / 2 - jB.x;
      if (null !== BB.text && Math.abs(NB) <= UB && uB >= jB.top - dB / 2 && uB <= dB / 2 - jB.bottom) return {
        x: IB.x,
        y: IB.y
      };
      const aB = Math.min(0 === NB ? 1 / 0 : UB / Math.abs(NB), uB > 0 ? (dB / 2 - jB.bottom) / uB : uB < 0 ? (jB.top - dB / 2) / uB : 1 / 0);
      return !Number.isFinite(aB) || aB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + NB * aB / nB * 100,
        y: 50 + uB * aB / dB * 100
      }
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  38645: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    const QB = 4,
      nB = 12e3,
      dB = 1e3;
    class IB {
      constructor() {
        let {
          limit: BB = QB,
          windowMs: jB = nB,
          spacingMs: zB = dB,
          now: IB = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = BB, this.windowMs = jB, this.spacingMs = zB, this.now = IB
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const BB of this.priority) BB.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const BB = this.now();
        this.sent.push(BB), this.lastSentAt = BB, this.schedule(), this.notify()
      }
      addPriority(BB) {
        return this.priority.add(BB), () => {
          this.priority.delete(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const BB of this.priority)
          if (BB.waiting()) return !0;
        return !1
      }
      prune() {
        const BB = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= BB;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const BB = this.now(),
          jB = this.lastSentAt + this.spacingMs,
          zB = Math.min(jB > BB ? jB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        zB !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, zB - BB)))
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38618: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor(BB, jB, zB) {
        this.Ly = BB, this.beforeOpen = jB, this.afterClose = zB, this.open = !1, this.HJ = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.HJ && (this.open = !0, this.beforeOpen(this), this.emit())
        }, this.close = () => {
          this.closePanel(!1)
        }, this.dismiss = () => {
          this.closePanel(!0)
        }
      }
      isOpen() {
        return this.open
      }
      showOrRefresh() {
        this.open ? this.emit() : this.show()
      }
      closePanel(BB) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(BB)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.HJ = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.HJ || (this.snapshot = this.buildSnapshot(), this.Ly(this.snapshot))
      }
    }
  },
  38742: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      SkyblockEntityFacing: () => NB,
      needsSkyblockEntityFacing: () => IB
    });
    var QB = zB(652),
      nB = zB(4334),
      dB = zB(38748);

    function IB(BB, jB) {
      if (BB.metaInfo === QB.c || "Iron Guardian" === BB.type || "Gold Guardian" === BB.type) return !0;
      if ("Pig" === BB.type) return "sitting" === BB.pose;
      if ("Person" !== BB.meshKind || void 0 === BB.meshOpts) return !1;
      let zB = null === jB || void 0 === jB ? void 0 : jB.get(BB.meshOpts);
      if (void 0 === zB) {
        var dB, IB;
        const QB = (0, nB.g)(BB);
        zB = !1, "pig_napoleon" === (null === QB || void 0 === QB || null === (dB = QB.opts.textures) || void 0 === dB ? void 0 : dB.head) ? zB = !0 : "npc_pig_head" === (null === QB || void 0 === QB || null === (IB = QB.opts.textures) || void 0 === IB ? void 0 : IB.head) && (zB = "sitting" === QB.opts.pose || "sitting"), jB && (jB.size >= 256 && jB.clear(), jB.set(BB.meshOpts, zB))
      }
      return "sitting" === zB ? "sitting" === BB.pose : zB
    }(0, dB.h)("skyblock", ((BB, jB) => {
      jB.setFacingTolerance(IB(BB) ? 0 : null)
    }));
    class NB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = BB, this.alsoVisit = jB, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = BB => {
          var jB;
          const zB = this.api.getEntityInfo(BB);
          zB && (IB(zB, this.meshFacingCache) && (this.api.setFacingTolerance(BB, 0), this.nextFacing.add(BB)), null === (jB = this.alsoVisit) || void 0 === jB || jB.call(this, BB, zB))
        }
      }
      vp() {
        const {
          api: BB
        } = this, jB = this.nextFacing;
        BB.forEachEntity(this.visit);
        for (const zB of this.facing) jB.has(zB) || BB.setFacingTolerance(zB, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = jB
      }
      dispose() {
        for (const BB of this.facing) this.api.setFacingTolerance(BB, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38610: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => ru
    });
    const QB = "island";
    var nB = zB(376);
    const dB = (0, nB.Bb)([0, 0, -1]),
      IB = [{
        name: "S",
        bearing: (0, nB.Bb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, nB.Bb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: dB
      }, {
        name: "W",
        bearing: (0, nB.Bb)([1, 0, 0])
      }];

    function NB(BB, jB, zB) {
      return [100 * (zB.mapMaxX - BB) / (zB.mapMaxX - zB.mapMinX), 100 * (jB - zB.mapMinZ) / (zB.mapMaxZ - zB.mapMinZ)]
    }

    function uB(BB, jB, zB) {
      const nB = "local" === jB,
        dB = BB.background,
        IB = jB => dB ? NB(jB[0] - BB.mapOrigin[0], jB[2] - BB.mapOrigin[2], dB.bounds) : [50, 50],
        uB = (BB.insideDungeon ? [] : BB.landmarks).map((BB => {
          var jB, QB;
          return {
            id: BB.id,
            name: zB(BB.visited && BB.nameKey ? null !== (jB = BB.mapLabelKey) && void 0 !== jB ? jB : BB.nameKey : "skyblockGame:mapUnknown"),
            icon: BB.visited && null !== (QB = BB.icon) && void 0 !== QB ? QB : "unknown",
            visited: BB.visited,
            current: !1,
            position: IB(BB.position),
            travelKind: "landmark",
            travelId: BB.id
          }
        })),
        aB = BB.zones.map((jB => {
          var QB;
          return {
            id: jB.id,
            name: zB(jB.visited && jB.nameKey ? jB.nameKey : "skyblockGame:mapUnknown"),
            icon: jB.visited && null !== (QB = jB.icon) && void 0 !== QB ? QB : "unknown",
            visited: jB.visited,
            current: jB.id === BB.zoneId,
            position: jB.position,
            thumbnail: jB.visited ? jB.id : void 0,
            travelKind: "zone",
            travelId: jB.id
          }
        })),
        pB = BB.insideDungeon || !dB ? [] : BB.portals.map((BB => {
          var jB;
          return {
            id: BB.id,
            name: zB(null !== (jB = BB.nameKey) && void 0 !== jB ? jB : "skyblockGame:mapUnknown"),
            icon: BB.visited ? "dungeons" === BB.destination ? "portal_orange" : "portal" : "unknown",
            visited: BB.visited,
            current: !1,
            position: IB(BB.position),
            colour: BB.colour,
            travelKind: "zone",
            travelId: BB.destination
          }
        })),
        rB = nB ? uB : aB,
        sB = rB.filter((BB => BB.visited)).length,
        JB = dB ? (dB.bounds.mapMaxX - dB.bounds.mapMinX) / (dB.bounds.mapMaxZ - dB.bounds.mapMinZ) : 2,
        mB = dB ? JSON.stringify([dB.bounds, BB.mapOrigin]) : "";
      return {
        local: nB,
        points: rB,
        portals: nB ? pB : [],
        progress: rB.length ? zB("skyblockGame:mapDiscovered", {
          current: String(sB),
          total: String(rB.length)
        }) : null,
        percent: rB.length ? 100 * sB / rB.length : 0,
        canTravel: [...rB, ...nB ? pB : []].some((BB => BB.visited && !BB.current)),
        noLandmarks: nB && !BB.insideDungeon && 0 === uB.length,
        background: dB ? {
          imageKey: dB.imageKey,
          fallbackImageKey: BB.zoneId,
          geometryKey: mB,
          label: zB(dB.labelKey),
          colour: dB.backgroundColour,
          ratio: JB
        } : null,
        connections: UB(BB.zones),
        minimap: dB ? {
          imageKey: dB.imageKey,
          fallbackImageKey: BB.zoneId,
          geometryKey: mB,
          label: zB(dB.labelKey),
          colour: dB.backgroundColour,
          caption: zB(BB.zoneId === QB ? "skyblockGame:zoneIsland" : dB.labelKey),
          width: (dB.bounds.mapMaxX - dB.bounds.mapMinX) / dB.minimapSpan * 100 + "%",
          height: (dB.bounds.mapMaxZ - dB.bounds.mapMinZ) / dB.minimapSpan * 100 + "%",
          markers: [...uB, ...pB]
        } : null
      }
    }

    function UB(BB) {
      const jB = new Set;
      return BB.flatMap((zB => zB.connections.flatMap((QB => {
        const nB = BB.find((BB => BB.id === QB)),
          dB = [zB.id, QB].sort().join("|");
        return !nB || jB.has(dB) ? [] : (jB.add(dB), [{
          id: `${zB.id}-${QB}`,
          start: zB.position,
          end: nB.position,
          explored: zB.visited && nB.visited
        }])
      }))))
    }
    var aB = zB(38618);
    class pB extends aB.c {}
    const rB = "skyblockMapView";
    class sB extends pB {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, QB, nB), this.requestTravel = jB, this.translate = zB, this.now = dB, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = BB => {
          this.tab = BB, this.feedbackKey = "", this.emit()
        }, this.travel = (BB, jB) => {
          if (!this.map || this.pending || this.HJ) return;
          const zB = ("zone" === BB ? this.map.zones : this.map.landmarks).find((BB => BB.id === jB));
          if (zB) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in zB && !zB.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (zB.visited)
              if ("zone" === BB && jB === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const zB = ++this.nextRequestId;
                this.pending = {
                  requestId: zB,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: BB,
                  id: jB,
                  requestId: zB
                })
              }
            else this.feedbackKey = "skyblockGame:mapVisitFirst";
            this.emit()
          }
        }
      }
      getEntities() {
        return this.entities
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      VJ(BB) {
        var jB;
        if (!this.HJ)
          if ("entities" !== BB.kind)
            if ("open" !== BB.kind) {
              var zB, QB;
              if ("snapshot" === BB.kind)(null === (zB = BB.snapshot) || void 0 === zB ? void 0 : zB.zoneId) !== (null === (QB = this.map) || void 0 === QB ? void 0 : QB.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = BB.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === BB.kind) {
                var nB;
                BB.requestId === (null === (nB = this.pending) || void 0 === nB ? void 0 : nB.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (BB.requestId === (null === (jB = this.pending) || void 0 === jB ? void 0 : jB.requestId)) {
                var dB;
                this.pending = null, this.feedbackKey = null !== (dB = BB.errorKey) && void 0 !== dB ? dB : "", null === BB.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = BB.entities
      }
      vp() {
        this.pending && this.now() >= this.pending.expiresAt && (this.pending = null, this.feedbackKey = "skyblockGame:mapTravelTimeout", this.emit())
      }
      dispose() {
        this.map = null, this.pending = null, super.dispose()
      }
      isEnabled() {
        return null !== this.map
      }
      buildSnapshot() {
        return {
          presentation: this.map ? uB(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const JB = 67.5 * Math.PI / 180;

    function mB(BB, jB) {
      const zB = Math.abs(BB);
      if (zB > JB || jB.trackHalfWidth <= 0) return null;
      const QB = jB.trackHalfWidth,
        nB = jB.screenHalfWidth / (jB.tanHalfFovX * Math.max(.5, Math.cos(jB.pitch))),
        dB = Math.min(Math.atan(.6 * QB / nB), .75 * JB),
        IB = nB * Math.tan(dB);
      let NB;
      if (zB <= dB) NB = nB * Math.tan(zB);
      else {
        const BB = JB - dB,
          jB = Math.max(0, nB * BB / (Math.cos(dB) ** 2 * (QB - IB)) - 1),
          uB = (zB - dB) / BB;
        NB = IB + (QB - IB) * (1 + jB) * uB / (1 + jB * uB)
      }
      return 50 + Math.sign(BB) * NB * 50 / QB
    }
    class yB {
      constructor(BB, jB) {
        this.map = BB, this.visited = jB, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = jB ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const BB = this.map.getSnapshot().map;
        return !BB || BB.insideDungeon ? [] : BB.landmarks.filter((BB => BB.visited === this.visited)).map((BB => {
          var jB, zB;
          return {
            id: `landmark:${BB.id}`,
            position: BB.position,
            icon: null !== (jB = BB.icon) && void 0 !== jB ? jB : "unknown",
            nameKey: null !== (zB = BB.nameKey) && void 0 !== zB ? zB : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class kB {
      constructor(BB, jB, zB, QB) {
        this.map = BB, this.kind = jB, this.position = zB, this.alive = QB, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = jB, this.range = "enemy" === jB ? 48 : 64, this.limit = 12
      }
      iG(BB) {
        if ("enemy" !== this.kind || this.alive(BB.PQ)) return this.position(BB.PQ)
      }
      getPoints() {
        const BB = [];
        for (const QB of this.map.getEntities()) {
          if (QB.kind !== this.kind || "enemy" === this.kind && !this.alive(QB.compassEntityId)) continue;
          const nB = this.position(QB.compassEntityId);
          var jB, zB;
          if (nB) BB.push({
            id: `${this.kind}:${QB.compassEntityId}`,
            PQ: QB.compassEntityId,
            kind: this.kind,
            icon: null !== (jB = QB.icon) && void 0 !== jB ? jB : QB.npcSkin ? `npc_${QB.npcSkin}` : this.kind,
            displayName: QB.displayName,
            position: nB,
            nameKey: null !== (zB = QB.nameKey) && void 0 !== zB ? zB : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return BB
      }
    }
    class GB {
      constructor(BB) {
        this.map = BB, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const BB = this.map.getSnapshot().map;
        return !BB || BB.insideDungeon ? [] : BB.portals.map((BB => {
          var jB;
          return {
            id: "portal:" + BB.id,
            kind: "portal",
            position: BB.position,
            nameKey: null !== (jB = BB.nameKey) && void 0 !== jB ? jB : "skyblockGame:compassUnvisitedZone",
            icon: BB.visited ? "dungeons" === BB.destination ? "portal_orange" : "portal" : "unknown",
            colour: BB.colour
          }
        }))
      }
    }
    class LB {
      constructor(BB) {
        this.target = BB, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const BB = this.target();
        return BB ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: BB.position,
          nameKey: BB.nameKey
        }] : []
      }
    }

    function gB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.position;
      const dB = QB[0] - jB[0],
        IB = QB[2] - jB[2];
      return {
        ...BB,
        position: QB,
        offset: nB.b.computeShortestRotation(zB, (0, nB.Bb)([dB, 0, IB])),
        distance: Math.hypot(dB, QB[1] - jB[1], IB)
      }
    }
    let tB;

    function SB(BB, jB) {
      var zB;
      return (null === (zB = tB) || void 0 === zB ? void 0 : zB.locale) !== jB && (tB = {
        locale: jB,
        near: new Intl.NumberFormat(jB, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(jB, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (BB < 10 ? tB.near : tB.far).format(BB)
    }
    class MB {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(BB) {
        return this.providers.set(BB.id, BB), this.refreshAt = 0, () => {
          this.providers.get(BB.id) === BB && (this.providers.delete(BB.id), this.refreshAt = 0)
        }
      }
      frame(BB, jB, zB) {
        if (zB >= this.refreshAt) {
          this.refreshAt = zB + 200, this.candidates = [];
          for (const jB of this.providers.values()) {
            if (!jB.enabled) continue;
            const zB = jB.getPoints().map((jB => {
              const zB = jB.position;
              return {
                point: jB,
                distance: Math.hypot(zB[0] - BB[0], zB[1] - BB[1], zB[2] - BB[2])
              }
            })).filter((BB => BB.distance <= jB.range)).sort(((BB, jB) => BB.distance - jB.distance)).slice(0, jB.limit);
            for (const {
                point: BB
              }
              of zB) this.candidates.push({
              provider: jB,
              point: BB
            })
          }
        }
        const QB = [];
        for (const {
            point: nB,
            provider: dB
          }
          of this.candidates) {
          if (!dB.enabled) continue;
          const zB = dB.iG ? dB.iG(nB) : nB.position;
          if (zB) {
            const dB = gB(nB, BB, jB, zB);
            Math.abs(dB.offset) <= JB && QB.push(dB)
          }
        }
        return QB
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var EB = zB(36687),
      iB = zB(62);
    const qB = [{
        dailyRewardCoins: 1e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 3e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 4e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 5500,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 7e3,
        dailyRewardItems: []
      }, {
        dailyRewardCoins: 9e3,
        dailyRewardItems: [{
          dailyRewardItemName: "Gold Bar",
          dailyRewardItemAmount: 2
        }]
      }, {
        dailyRewardCoins: 25e3,
        dailyRewardItems: [{
          dailyRewardItemName: "Gold Bar",
          dailyRewardItemAmount: 3
        }, {
          dailyRewardItemName: "Diamond",
          dailyRewardItemAmount: 1
        }]
      }],
      fB = qB.length;

    function oB(BB) {
      return BB >= fB ? 1 : BB + 1
    }
    const HB = "skyblockQuests",
      DB = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      FB = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function YB(BB) {
      let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const zB = Math.max(0, Math.floor(BB)),
        QB = Math.floor(zB % 1e3 / 100),
        nB = Math.floor(zB / 1e3),
        dB = nB % 60,
        IB = Math.floor(nB / 60),
        NB = IB % 60,
        uB = Math.floor(IB / 60),
        UB = BB => BB < 10 ? `0${BB}` : String(BB),
        aB = jB ? `.${QB}` : "";
      return uB > 0 ? `${uB}:${UB(NB)}:${UB(dB)}${aB}` : `${NB}:${UB(dB)}${aB}`
    }
    const VB = "devquests",
      hB = "none",
      XB = {
        hub: {
          farming_1: {
            min: [4, 16, 90],
            max: [4, 18, 91],
            unlockedBlock: "Yellow Portal"
          },
          mining_1: {
            min: [95, 16, 2],
            max: [97, 18, 2],
            unlockedBlock: "Cyan Portal"
          },
          combat_1: {
            min: [207, 36, 49],
            max: [208, 38, 49],
            unlockedBlock: "Red Portal"
          },
          fishing_1: {
            min: [6, 20, 149],
            max: [6, 22, 150],
            unlockedBlock: "Blue Portal"
          }
        },
        combat_1: {
          tower_roof: {
            min: [202, 69, 151],
            max: [203, 71, 151],
            unlockedBlock: "Red Portal",
            lockedBlock: "Grey Portal"
          },
          tower_exit: {
            min: [202, 80, 133],
            max: [203, 82, 133],
            unlockedBlock: "Red Portal",
            lockedBlock: "Grey Portal"
          }
        }
      },
      ZB = "Compressed Messy Stone",
      AB = {
        "Grass Block": "Useless Soil",
        "Pine Grass Block": "Useless Soil",
        "Jungle Grass Block": "Useless Soil",
        "Dry Grass Block": "Useless Soil",
        "Overgrown Grass Block": "Useless Soil",
        "Overgrown Pine Grass Block": "Useless Soil",
        "Overgrown Jungle Grass Block": "Useless Soil",
        "Overgrown Dry Grass Block": "Useless Soil",
        Dirt: "Messy Dirt",
        Sand: "Sandstone",
        Gravel: "Smooth Andesite"
      },
      TB = ["Stone", "Diorite", "Andesite", "Granite"],
      PB = new Set(TB),
      WB = (Object.keys(AB), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const eB = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function lB(BB, jB) {
      const zB = Math.floor(5 * BB / (2 * jB + 1));
      return Math.min(4, Math.max(0, zB))
    }
    var wB = zB(1270);
    var xB = zB(36439);
    var KB = zB(36682),
      CB = zB(31),
      cB = zB(8888);
    const bB = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      vB = 1e3;

    function RB(BB) {
      return Math.max(0, BB)
    }

    function OB(BB) {
      return 1 + .01 * RB(BB)
    }

    function Bj(BB) {
      return 1 + .005 * RB(BB)
    }

    function jj(BB) {
      return 1 + .005 * RB(BB)
    }

    function zj(BB) {
      return .01 * RB(BB)
    }

    function Qj(BB) {
      return 150 / (150 + RB(BB))
    }

    function nj(BB) {
      return 1 + .002 * RB(BB)
    }

    function dj(BB) {
      return Math.round(10 * BB) / 10
    }

    function Ij(BB, jB) {
      switch (BB) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: dj(100 * (Bj(jB) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: dj(100 * (OB(jB) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: dj(100 * (jj(jB) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: dj(100 * zj(jB))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: dj(100 * (1 - Qj(jB)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: dj(100 * (nj(jB) - 1))
          }
      }
    }

    function Nj(BB) {
      return "farming" === BB ? 200 : 100
    }

    function uj(BB, jB) {
      if (!Number.isSafeInteger(BB) || BB < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const zB = Nj(jB),
        QB = BB => function(BB, jB) {
          return Nj(BB) * jB * (jB + 1) / 2
        }(jB, BB);
      let nB = Math.min(vB, Math.floor((Math.sqrt(8 * BB / zB + 1) - 1) / 2));
      return nB < vB && QB(nB + 1) <= BB ? nB++ : QB(nB) > BB && nB--, {
        totalXp: BB,
        level: nB,
        xpIntoLevel: BB - QB(nB),
        xpForNextLevel: nB === vB ? null : zB * (nB + 1)
      }
    }
    const Uj = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function aj(BB) {
      return Uj.has(BB)
    }
    const pj = new Set(nB.kb);

    function rj(BB) {
      return pj.has(BB)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const sj = {
        "Maple Log": 10,
        "Pine Log": 10,
        "Plum Log": 10,
        "Cedar Log": 10,
        "Aspen Log": 10,
        "Jungle Log": 10,
        "Palm Log": 10,
        "Pear Log": 10,
        "Cherry Log": 10,
        "Spectral Log": 10,
        "Mango Log": 10
      },
      Jj = {
        Stone: 2,
        Diorite: 18,
        Granite: 18,
        Andesite: 18,
        "Coal Ore": 10,
        "Iron Ore": 15,
        "Gold Ore": 20,
        "Diamond Ore": 30,
        "Moonstone Ore": 40,
        "Block of Coal": 15,
        "Block of Gold": 30
      },
      mj = {
        ...Jj,
        ...Object.fromEntries(Object.entries(WB).map((BB => {
          let [jB, zB] = BB;
          return [jB, 9 * Jj[zB]]
        })))
      },
      yj = {
        Watermelon: 10,
        Melon: 10,
        "Wheat|FreshlyGrown": 10,
        "Rice|FreshlyGrown": 10,
        "Corn Plant|FreshlyGrown": 10,
        "Chili Pepper Plant|FreshlyGrown": 10,
        "Chili Pepper Plant|Lava|FreshlyGrown": 10,
        "Tomato Plant|FreshlyGrown": 10,
        "Tomato Plant|Top|FreshlyGrown": 10,
        "Carrot Plant|FreshlyGrown": 10,
        "Potato Plant|FreshlyGrown": 10,
        "Sugar Cane Plant|FreshlyGrown": 10,
        "Sugar Cane Plant|Top|FreshlyGrown": 10,
        "Coffee Plant|FreshlyGrown": 10,
        "Lettuce Plant|FreshlyGrown": 10,
        "Cauliflower Plant|FreshlyGrown": 10,
        "Parsnip Plant|FreshlyGrown": 10,
        "Red Cabbage Plant|FreshlyGrown": 10,
        "Beetroot Plant|FreshlyGrown": 10
      },
      kj = {
        Wheatfish: 25,
        Darter: 25,
        "Sunset Minnow": 25,
        "Root Flounder": 25,
        "Greenfin Loach": 25,
        "Red Strongfish": 30,
        "Green Strongfish": 30,
        "Boomerang Fish": 30,
        Seahorse: 30,
        "Spined Stickleback": 30,
        "Moon Strongfish": 40,
        "Boulder Bass": 40,
        "Grass Snapper": 40,
        "Crystalized Wheatfish": 55,
        "Moonstone Pupfish": 55,
        "Reedglass Minnow": 35,
        "Mangrove Herring": 35,
        "Mudline Perch": 35,
        "Coastal Mullet": 35,
        "Reef Sardine": 35,
        "Root Perch": 40,
        "Aether Minnow": 40,
        "Driftwood Catfish": 45,
        "Tri-Pointed Needlefish": 70,
        "Threadfin Bream": 40,
        "Mudbelly Tilapia": 40,
        "Rotslab Eel": 40,
        "Polarflash Electron": 45,
        Hatchetfish: 45,
        "Mireback Carp": 50,
        "Blackwater Bream": 50,
        "Stone Grouper": 55,
        "Shadeback Ray": 60,
        "Glacial Silverfish": 60,
        "Moonlit Boomerang Fish": 90,
        "Murkborne Ray": 90,
        "Bamboo Catfish": 50,
        "Mossback Arapaima": 60,
        "Murk Stingray": 65,
        "Channel Sawfish": 70,
        "Boned Sturgeon": 75,
        Oarfish: 90,
        Snakehead: 160,
        "Eldertide Leviathan": 250,
        Pithead: 50,
        "Electric Eel": 60,
        "Shadow Darter": 60,
        "Abyss Carp": 65,
        "Nomai Moray": 75,
        "Silver Dragonfish": 80,
        "Giant Moray": 100,
        Coelacanth: 250,
        "Frost Herring": 60,
        "Permafrost Halibut": 70,
        "Glacial Lanternfish": 80,
        "Frozen Grenadier": 85,
        "Blackfin Icefish": 100,
        Moonfish: 120,
        "Alpha Moon Strongfish": 140,
        "Deepwater Lanternfish": 300,
        "Pearlescent Moonfish": 300,
        "Game Dev Fish": 50
      };
    const Gj = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Lj = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function gj(BB) {
      return `rgb(${Lj[BB].join(", ")})`
    }

    function tj(BB, jB, zB) {
      if (!zB) return BB(jB);
      const QB = {};
      for (const [nB, dB] of Object.entries(zB)) QB[nB] = "string" === typeof dB ? dB : BB(dB.translationKey);
      return BB(jB, QB)
    }
    class Sj {
      constructor(BB, jB) {
        this.now = BB, this.getJournal = jB, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.DN = !1, this.onShown = () => {}
      }
      enqueue(BB) {
        const jB = Mj(BB);
        if (jB) this.pending.push(BB);
        else {
          const jB = this.pending.findIndex(Mj);
          this.pending.splice(-1 === jB ? this.pending.length : jB, 0, BB)
        }
        return (null === this.current || null !== this.followUp && !jB) && (this.advance(), !0)
      }
      setHeld(BB) {
        return this.DN = BB, !BB && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      vp() {
        const BB = this.getJournal(),
          jB = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === jB ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === jB || void 0 === jB ? void 0 : jB.kind) && BB && BB.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === jB || void 0 === jB ? void 0 : jB.kind)) {
          const BB = this.findFollowUp(this.current);
          if ("step" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || BB.questId !== jB.questId || BB.step.id !== jB.step.id) return this.showFollowUp(BB, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(BB, jB, zB) {
        var QB, nB, dB, IB;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, BB, zB);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, BB);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, BB, jB);
        const {
          questCompletionKind: NB,
          questCompletionNameKey: uB
        } = this.current, UB = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, aB = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, pB = "step" === (null === (QB = this.followUp) || void 0 === QB ? void 0 : QB.kind) ? this.followUp : null, rB = "explore" === (null === (nB = this.followUp) || void 0 === nB ? void 0 : nB.kind);
        let sB;
        return sB = rB ? BB("skyblockGame:questExploreTitle") : null !== pB ? "quest" === NB ? BB("skyblockGame:questNextQuestTitle", {
          quest: BB(pB.questNameKey)
        }) : BB("skyblockGame:questNextStepTitle") : BB("started" === NB ? "skyblockGame:questStartedTitle" : "quest" === NB ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? NB : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: sB,
          name: rB ? jB("skyblockGame:questExploreName") : null !== pB ? tj(jB, pB.step.nameKey, pB.step.nameParams) : tj(jB, uB, UB),
          description: rB ? jB("skyblockGame:questExploreDescription") : null === pB ? null : tj(jB, pB.step.descriptionKey, pB.step.descriptionParams),
          reward: null === this.followUp && aB > 0 ? jB("skyblockGame:questCoinRewardSuffix", {
            amount: aB.toLocaleString(zB)
          }) : null,
          iconItem: null !== (dB = null === pB || void 0 === pB ? void 0 : pB.step.questIconItem) && void 0 !== dB ? dB : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== pB && (null === (IB = this.getJournal()) || void 0 === IB ? void 0 : IB.trackedQuestId) === pB.questId ? pB.step.nameKey : null
        }
      }
      getSkillLevelView(BB, jB, zB) {
        let {
          skill: QB,
          beforeLevel: nB,
          level: dB
        } = BB;
        const IB = Ij(QB, nB),
          NB = Ij(QB, dB);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: jB(`skyblockGame:${QB}`),
          name: jB("skyblockGame:skillLevelUp", {
            to: dB.toLocaleString(zB)
          }),
          description: IB.percent === NB.percent ? null : jB(`${NB.translationKey}Change`, {
            before: IB.percent.toLocaleString(zB),
            after: NB.percent.toLocaleString(zB)
          }),
          reward: null,
          iconItem: Gj[QB],
          accent: gj(QB),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(BB, jB) {
        let {
          landmarkNameKey: zB
        } = BB;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: jB("skyblockGame:landmarkDiscovered"),
          name: jB(zB),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(BB, jB, zB) {
        let {
          titleKey: QB,
          textKey: nB,
          params: dB = {},
          nameKeys: IB = {},
          iconItem: NB = null
        } = BB;
        const uB = {
          ...dB
        };
        for (const [UB, aB] of Object.entries(IB)) uB[UB] = jB(aB);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: jB(QB),
          name: zB(nB, uB),
          description: null,
          reward: null,
          iconItem: NB,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var BB;
        if (null !== this.followUp) return 5600;
        switch (null === (BB = this.current) || void 0 === BB ? void 0 : BB.questCompletionKind) {
          case "quest":
            return 4800;
          case "started":
            return 4e3;
          case "skillLevel":
            return 3e3;
          case "landmark":
            return 3500;
          case "npcNote":
            return 8e3;
          default:
            return 2400
        }
      }
      showFollowUp(BB, jB) {
        null === BB || this.DN ? this.advance() : (this.followUp = BB, this.token++, this.shownAt = this.now(), this.expiresAt = null !== jB && void 0 !== jB ? jB : this.shownAt + this.durationMs())
      }
      findFollowUp(BB) {
        var jB;
        const zB = this.getJournal();
        if (!zB || this.hasPendingQuestPopup() || Mj(BB)) return null;
        const QB = "started" === BB.questCompletionKind ? zB.active.some((jB => jB.id === BB.questCompletionQuestId)) : "quest" === BB.questCompletionKind ? zB.completed.some((jB => jB.id === BB.questCompletionQuestId)) : [...zB.active, ...zB.completed].some((jB => jB.id === BB.questCompletionQuestId && jB.subquests.some((jB => jB.id === BB.questCompletionStepId && "completed" === jB.status))));
        if (!QB) return null;
        if ("quest" === BB.questCompletionKind && 0 === zB.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const nB = zB.active.find((BB => BB.id === zB.trackedQuestId)),
          dB = null !== (jB = null === nB || void 0 === nB ? void 0 : nB.subquests.find((BB => "ready" === BB.status))) && void 0 !== jB ? jB : null === nB || void 0 === nB ? void 0 : nB.subquests.find((BB => "active" === BB.status));
        return dB ? {
          kind: "step",
          questId: nB.id,
          questNameKey: nB.nameKey,
          step: dB
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((BB => !Mj(BB)))
      }
      advance() {
        var BB;
        this.current = this.DN ? null : null !== (BB = this.pending.shift()) && void 0 !== BB ? BB : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Mj(BB) {
      return Ej(BB.questCompletionKind)
    }

    function Ej(BB) {
      return "skillLevel" === BB || "landmark" === BB || "npcNote" === BB
    }
    var ij = zB(38627);
    const qj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      fj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      oj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Hj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Dj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Fj = zB(38635);
    var Yj = zB(38640);
    const Vj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      hj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Xj = zB.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Zj = zB.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      Aj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Tj = zB(18464),
      Pj = zB(20506),
      Wj = zB(22905),
      ej = zB(24451),
      lj = zB(26117);
    const wj = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Tj,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: Pj,
      cow: Dj,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: zB(26137),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: qj,
      fishing_1: qj,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: fj,
      guardian_iron: oj,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Wj,
      mines: ej,
      mining_1: ej,
      npc: Hj,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Dj,
      npc_draugr_warper: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAb0lEQVR4nGNgIBIwIrH/41PDCFPU+/IzVlXF4rxgdSwwgUV33oFpXh42MP35yy+sVv///x9is8GxR2D6gpUcRAEjxGYmZF2nvv/BygYBuNUwk0BASoKHIe38M+wKQZLIAMa/iOZGsDuxehtVDWEAAHwCHXf9ctZjAAAAAElFTkSuQmCC",
      npc_dwarf_blue_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwf//51lRMAMWxf/TM0r+/z/AjoLTM0owFENMeSCBirGY+l+r/SpY8OGmBjBGFkNR6DD9FVwRDIPEyFYIVowDkwYAEBZzAwnUgyIAAAAASUVORK5CYII=",
      npc_dwarf_braided_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwX9deRUUzIBFMYYiXIr/h5rqYMUYCr9+/wUWjLE2AGNkMRSF6Q6mcEUwDBLDUIiuCNlkDA/hwKQBAPnYUUW1+JaKAAAAAElFTkSuQmCC",
      npc_dwarf_child: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATklEQVR4nGNgIBP8R8NYwX8lZeX/6hoaYAxiY1P8f1trHlbMgKb4/5qGDKwYQ+HX77/+q0jKwxWA2CAxDIVEW32gqwRDEUgMq4dwYNIAAP19arcJQ+nsAAAAAElFTkSuQmCC",
      npc_dwarf_forked_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwX91DQ0UzIBFMVhick4EXBGMja74f1tKAFaMofDr91//VSTlwSaBMIgNEsOqEN2NWBWCTFFSVkbBIDGsHsKBSQMAnGRas5Ev2yIAAAAASUVORK5CYII=",
      npc_dwarf_ginger_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgIBP8R8NYwf//B9hRMAMWxf//n2f9//+BBCo+z4qh+P/dFd0YGKvCr99//WfQ8/z/dNMUMAaxwWLoCt/umPn/ZaMLCgaJYSgEmfK4wgEFg03G5iEcmDQAAGl2d4woNRHRAAAAAElFTkSuQmCC",
      npc_dwarf_grey_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQklEQVR4nGNgIBP8R8NYwX8vUxsUzIBFMYYiXIr/O+mbYcUYCr9+//VfRVIebhKIDRLDUJiSkoIVk60QrBgHJg0AAIrsWQuZyZ2qAAAAAElFTkSuQmCC",
      npc_dwarf_hair_buns: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVklEQVR4nGNgIBP8R8NYwX8tRXkUzIBF8X81OZn/ilKSYBqZzYCmGCw4JTsarhDGxlD49fsvsOC8omQwRhZDUbisLBOuCIZBYhgK0RUhm4zhIRyYNAAAK2NaB/Me8/sAAAAASUVORK5CYII=",
      npc_dwarf_purple_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8bw8D/LqYRYAxiY1P8/+TEQqyYAU3x/z2tWVgxhsKv33+BBZFNgomhKIS5DR2TrRCsGAcmDQAAxtNi2UvD/ZAAAAAASUVORK5CYII=",
      npc_dwarf_red_hair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXUlEQVR4nGNgIBP8R8NYwf//DyT+/3cqhOAHElgV/y8urv///zwrCi4ursdQDJEEmYiMz7NiKpxiZvXfUEnr/7npBWAMYoPEsCqEKQLhDdUR/5uNTchXCFaMA5MGAHoVbT+3iic1AAAAAElFTkSuQmCC",
      npc_dwarf_short_beard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATklEQVR4nGNgIBP8R8NYwX91DQ0UzIBF8f9trXlYMQOa4v9rGjKwYgyFX7//AgsimwQTQ1F4oKsEw40gMQyFIFOUlJVRMDY3ghXjwKQBAAoPYHs6ybo9AAAAAElFTkSuQmCC",
      npc_farmer_gill: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWUlEQVR4nGNgIBP8R8NYwf+bW0v+b53gD8cMOBT/X2cfgYIZsChEMQmfqf/PXrr1X0Je///rLS1gDGKDxLAq/LS/E67wZF/G/2XrdmFXCFOETyFYMQ5MGgAAx9NujhmsqqEAAAAASUVORK5CYII=",
      npc_fire_mage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIBP8R8NYwf8jtqZwvNJMH6tiFEX4FP//v5EDK8ZQ+PX7r/8WQuz/1+YFgjGIDRLDULi9LAKuCIZBYhgKJ+nJYcVYPYQDkwYAY/ZlGR1JAIkAAAAASUVORK5CYII=",
      npc_forge_mother: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8x4FRwP+vzy+AJSKd7MEYWQxF4avbJ8EYphDGx1D49fsvTBOhYigKfS0s/l9dPAsFg8SwKpyYkAVXBGLjVPj/POv//x+0Ifg8K1aFYMXEBA9BAACWKnGnkFHGrQAAAABJRU5ErkJggg==",
      npc_goblin_goggles: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNkQAX/0fiMGAyQIhMPGxRVZ3YcgathwqUIBKBi/2Gq//tMzWDw4HBkwAZ2/NjPsCV7Btzq/1+//2LQ1dFkSMgoBQssmNHNcPnKdQZuTjawgXCFTd0zsJpYV5oBVsgCEzj+7wRWhTAA8wwcPNt2A4zRAUrw4DAMWQ1hAADlHCXxWLGl2AAAAABJRU5ErkJggg==",
      npc_goblin_mad_scientist: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAV0lEQVR4nGNgIBP8R8NYwX/PzoT/qpZGYAxiY1P8//8DCayYAU3x/7OXboEFkRXAxFAUfv3+67+SsvL//+dZwRjEBolhKIQpQMcYCkGOx4axeggHJg0AAFKzbFf/ov6kAAAAAElFTkSuQmCC",
      npc_gold_guardian: fj,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: oj,
      npc_jackal_priest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdklEQVR4nGNgQID/UIyVzwQT1NTUZBAWFoYrALFBYjDFjDCF/zdyMGADjP4/wBQLTODVVXkGh8UwCyDgQOw/BgaGmyhWg8GZcxexsjEUmhjpM3z79g2MQWxkALcaBP79/cvAwc4OZyO8gGYiPoDQghqGuNQQBgAoCCX1U3QMRQAAAABJRU5ErkJggg==",
      npc_minotaur: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAaklEQVR4nGNgIAP8R6KR2Sjg/9fnF8AKMgJ8wBhZDEXhq9snwRimEMbHUPj1+6//DBYBCBMtAiBi6ApBkhMTsv5fXTwLjEHsODc37Ar/n2eFKwSxcSp8sGHO//8ftMEYxMamEKwYByYNAABmXHNFjN9ucgAAAABJRU5ErkJggg==",
      npc_minotaur_elder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAg0lEQVR4nGNgIBIwIrH/41PDBFP09fkFMKMuJxWMQQAq9h9ZIcPXLz8ZXt0+CTcGxAaJwQBcIbeMIYOYqjlcAsQGiaG78X9ZajxDvJ01iuMWHjrK0DV7IVgd3EQQ2LMX4k50NgiwIHPy8mczMCiqgdlaOrcYyqdFYVgN9x0WgKyGMAAArq0oYNR0jFIAAAAASUVORK5CYII=",
      npc_minotaur_warrior: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAjUlEQVR4nGNkQAX/0fiMGAyQooWVjiiq4tv3o6th+P/q9sn//z9oo+BXt0/+h9nCgmLE/VuoFvMgmHCF3DKGDIycvxmq3XzA/G137jHwcediKuwLDme4ungWXCKKgYFh3fLtDAcvQ/hMyDbt2XsBKxtF4Y8/vxn8A4wYuHmZwBjEBolhDR5Un2BVQxgAAJW+Nj/Gsfy4AAAAAElFTkSuQmCC",
      npc_monster_hunter_lorenzo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH9NLa3/ru5eYBoZM6AphkvsrU0BY5wKv37/9d/awAauEMQGiWEoPNmaDVcEw7PigjAVIlsHw3gVIrsRm0KwYmKChyAAAIfVZAdaM2LxAAAAAElFTkSuQmCC",
      npc_npc_pig_head: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4/3Lyjv9fe3bCJMHsl5N3YCj+/3/HfQjecAWOX2JVuOHKfwZ1U7giEBunQpB1yBinwkJta7giEBurwrOXbv3/+v0XCgaJYfU5DkwaAADzDIUDTIstKgAAAABJRU5ErkJggg==",
      npc_painter_spencer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR42mNgIBIwovH/45JHVvj/XZc7w+/vfxme3GViYGBgYDBetAuuBqbw/+MKB6xWynYcYGBgYGCEK/z6/ReDsoYpg5OsMAMDAwPDvsdvGe7eOM3AzcmGqjDFyZPh26+fKKZ9+/mDYcPpYwwMDAyMTMT6Gq4Q3TR8wfOfyCDEDwAFFSX0ZxYXtAAAAABJRU5ErkJggg==",
      npc_pig: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAARklEQVR4nGNgIAP8x4FRwP/3x87A8ds9R+CYAU0xiiQMP1y0FlOhu7YJhkKQGFYTQSYgY5xWg0yAKYKxyXYjWDExwUMQAABoKIoUBfmEPAAAAABJRU5ErkJggg==",
      npc_pig_napoleon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgoAD8h2K84L++ofF/V3dvvIr/gxRtszH9//X7LzCbAYvi///Ps/6Xk5dHwSAxdMX//2+48p9B3RRMw9gvJ+/ArvBrz04UjFNhobY1XBGIjU0hWDEOTBoAAIrnYG/Xae9eAAAAAElFTkSuQmCC",
      npc_pig_worker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYElEQVR4nGNgIAP8R8NYwf/YhDQ4dnb1xKnhP0gSHesbGmMo/v9/w5X/DOqmYBrGfjl5B3aFhdrW/7/27ARjEBunQpAEOsZQGGLn+L8oKvD/1++/wBjEBolh9RAOTBoAAGcEbivle0KRAAAAAElFTkSuQmCC",
      npc_piggy_banker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXElEQVR4nGNgIBP8R8NYwX9Xd+//2jq6cMyAQ/F/OXn5//8fSPz/f54VzGbAohAsgQ2jK/7/f8OV/wzqpmAaxn45eQd2hV97dqJgnAoLta3hikBsbArBinFg0gAAgophxWZsQvAAAAAASUVORK5CYII=",
      npc_portal_mage: Fj,
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: Yj,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: Vj,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Xj,
      quest_talk: Zj,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: Aj,
      watermelon: lj
    };

    function xj(BB, jB) {
      const zB = document.createElement("img");
      return zB.className = jB, zB.src = BB, zB.alt = "", zB.draggable = !1, zB
    }

    function Kj(BB) {
      var jB;
      const zB = null !== (jB = wj[BB]) && void 0 !== jB ? jB : BB.startsWith("npc_") ? Hj : Aj;
      if ("portal" !== BB) return xj(zB, "SkyblockMapIcon");
      const QB = document.createElement("span");
      QB.className = "SkyblockMapIcon Portal";
      const nB = document.createElement("span");
      return nB.className = "SkyblockMapIconTint", nB.style.maskImage = nB.style.webkitMaskImage = `url("${hj}")`, QB.append(xj(zB, "SkyblockMapIconLayer"), nB, xj(hj, "SkyblockMapIconLayer SkyblockMapIconShade")), QB
    }
    var Cj = zB(38599),
      cj = zB(4347);
    const bj = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function vj(BB) {
      const jB = new cj.i(BB);
      return {
        radius: 45,
        squareness: 3,
        wobbles: bj.map((BB => {
          let {
            lobes: zB,
            amount: QB
          } = BB;
          return {
            lobes: zB[Math.floor(jB.next() * zB.length)],
            amount: QB[0] + jB.next() * (QB[1] - QB[0]),
            phase: 2 * jB.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function Rj(BB) {
      let {
        radius: jB,
        squareness: zB,
        wobbles: QB,
        samples: nB
      } = BB;
      const dB = [];
      for (let IB = 0; IB < nB; IB++) {
        const BB = 2 * Math.PI * IB / nB,
          NB = Math.cos(BB),
          uB = Math.sin(BB),
          UB = jB * (Math.abs(NB) ** zB + Math.abs(uB) ** zB) ** (-1 / zB) * QB.reduce(((jB, zB) => {
            let {
              lobes: QB,
              amount: nB,
              phase: dB
            } = zB;
            return jB + nB * Math.sin(QB * BB + dB)
          }), 1);
        dB.push(`${(50+UB*NB).toFixed(2)} ${(50+UB*uB).toFixed(2)}`)
      }
      return `M${dB.join("L")}Z`
    }
    const Oj = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Bz {
      constructor() {
        this.compassSpacing = 1, this.compassSize = {
          trackHalfWidth: 0,
          screenHalfWidth: 0
        }, this.compass = null, this.terrain = null, this.searchAreaPath = {
          seed: "",
          d: ""
        }, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markerIcon = null, this.waypointMarkerSize = {
          width: 0,
          height: 0
        }, this.waypointInset = {
          x: 8,
          top: 8,
          bottom: 8
        }, this.viewport = {
          width: 0,
          height: 0
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.HJ = !1, this.mountCompass = BB => {
          var jB;
          if (null === (jB = this.stopLayout) || void 0 === jB || jB.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !BB || this.HJ) return;
          const zB = BB.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: BB,
            track: zB,
            label: BB.querySelector(".SkyblockCompassLabel")
          }, zB.replaceChildren();
          for (let nB = 0; nB < 4; nB++) {
            const BB = document.createElement("span");
            BB.className = "SkyblockCompassCardinal", zB.appendChild(BB), this.cardinals.push(BB)
          }
          const QB = (0, Cj.b)(Oj, [BB], this.layout);
          this.stopLayout = () => {
            QB(), zB.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = BB => {
          this.terrain = this.HJ ? null : BB, this.render(this.frame)
        }, this.mountMinimapSearchArea = BB => {
          this.mountSearchArea("minimap", BB)
        }, this.mountMapSearchArea = BB => {
          this.mountSearchArea("map", BB)
        }, this.mountPlayer = BB => {
          this.player = this.HJ ? null : BB, this.render(this.frame)
        }, this.mountWaypoint = BB => {
          var jB, zB;
          if (null === (jB = this.stopWaypoint) || void 0 === jB || jB.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !BB || this.HJ) return;
          const QB = BB.querySelector(".SkyblockQuestWaypointMarker");
          QB.replaceChildren(Kj("quest")), this.markerIcon = "quest", this.waypoint = {
            root: BB,
            marker: QB,
            clip: BB.querySelector(".SkyblockQuestWaypointTextClip"),
            text: BB.querySelector(".SkyblockQuestWaypointText"),
            label: BB.querySelector(".SkyblockQuestWaypointLabel"),
            distance: BB.querySelector(".SkyblockQuestWaypointDistance"),
            hint: BB.querySelector(".SkyblockQuestWaypointHint")
          };
          const nB = () => {
              this.waypointMarkerSize = {
                width: QB.offsetWidth,
                height: QB.offsetHeight
              }, this.waypointInset = {
                x: QB.offsetWidth / 2 + 8,
                top: QB.offsetHeight + 8,
                bottom: 8
              }
            },
            dB = new ResizeObserver((() => {
              nB(), this.render(this.frame)
            }));
          dB.observe(QB, {
            box: "border-box"
          });
          const IB = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", IB), null === (zB = window.visualViewport) || void 0 === zB || zB.addEventListener("resize", IB), this.stopWaypoint = () => {
            var BB;
            dB.disconnect(), window.removeEventListener("resize", IB), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", IB)
          }, IB(), nB(), this.render(this.frame)
        }, this.mountWaypointOrigin = BB => {
          var jB;
          if (null === (jB = this.stopWaypointOrigin) || void 0 === jB || jB.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = BB && !this.HJ ? Number(BB.dataset.notificationToken) : null, BB && !this.HJ && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const jB = {
              nameKey: BB.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = jB;
            const zB = () => {
                const zB = BB.getBoundingClientRect();
                jB.x = (zB.left + zB.width / 2) / window.innerWidth * 100, jB.y = (zB.top + zB.height / 2) / window.innerHeight * 100
              },
              QB = new ResizeObserver(zB);
            QB.observe(BB.parentElement), QB.observe(BB), window.addEventListener("resize", zB), this.stopWaypointOrigin = () => {
              QB.disconnect(), window.removeEventListener("resize", zB)
            }, zB()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const BB = this.compass.root,
            jB = getComputedStyle(BB),
            zB = getComputedStyle(document.documentElement),
            QB = parseFloat(zB.fontSize),
            nB = parseFloat(jB.getPropertyValue("--compass-icon-size")) * QB,
            dB = "1" === jB.getPropertyValue("--compass-fit-top").trim(),
            IB = dB ? 1 : 8,
            NB = Array.from(document.querySelectorAll(Oj), (BB => {
              var jB;
              return (null !== (jB = BB.querySelector(".MiddleTextTop")) && void 0 !== jB ? jB : BB).getBoundingClientRect()
            })).filter((BB => BB.width > 0 && BB.height > 0));
          let uB = (parseFloat(zB.getPropertyValue("--notchTop")) || 0) + IB,
            UB = "";
          if (dB) {
            const jB = window.innerWidth / 2,
              zB = BB.getBoundingClientRect().height,
              dB = [uB, ...NB.map((BB => Math.max(uB, BB.bottom + IB)))].sort(((BB, jB) => BB - jB));
            for (const BB of dB) {
              let dB = jB - 8;
              for (const QB of NB) QB.bottom + IB <= BB || QB.top >= BB + zB + IB || (dB = Math.min(dB, QB.right <= jB ? jB - QB.right - 8 : QB.left - jB - 8));
              const aB = 2 * dB - nB;
              if (aB >= 16 * QB) {
                UB = `${aB}px`, uB = BB;
                break
              }
            }
          }
          BB.style.maxWidth !== UB && (BB.style.maxWidth = UB);
          const aB = BB.getBoundingClientRect(),
            pB = this.compassSize.trackHalfWidth;
          if (aB.width > 0) {
            const BB = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: BB.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * nB / BB.width
          }
          if (!UB)
            for (const rB of NB) rB.right > aB.left - 8 && rB.left < aB.right + 8 && (uB = Math.max(uB, rB.bottom + IB));
          BB.style.top = `${uB}px`, this.compassSize.trackHalfWidth !== pB && this.render(this.frame)
        }
      }
      mountSearchArea(BB, jB) {
        this.searchAreas[BB] = this.HJ ? null : jB, this.render(this.frame)
      }
      render(BB) {
        if (this.HJ) return;
        if (this.frame = BB, this.compass && (jz(this.compass.root, !BB), BB)) {
          const jB = this.compassSize.trackHalfWidth / 50;
          BB.compass.cardinals.forEach(((BB, zB) => {
            const QB = this.cardinals[zB];
            QB.textContent !== BB.name && (QB.textContent = BB.name), jz(QB, BB.hidden), QB.style.translate = BB.left * jB + "px"
          }));
          const zB = new Set;
          BB.compass.markers.forEach(((QB, nB) => {
            var dB;
            zB.add(QB.id);
            let IB = this.markers.get(QB.id);
            IB || (IB = document.createElement("span"), IB.className = "SkyblockCompassMarker", this.markers.set(QB.id, IB), this.compass.track.appendChild(IB)), IB.dataset.icon !== QB.icon && (IB.dataset.icon = QB.icon, IB.replaceChildren(Kj(QB.icon))), IB.style.color = null !== (dB = QB.colour) && void 0 !== dB ? dB : "", IB.style.translate = QB.left * jB + "px", IB.style.zIndex = String(BB.compass.markers.length - nB), IB.title !== QB.name && (IB.title = QB.name)
          }));
          for (const [BB, QB] of this.markers) zB.has(BB) || (QB.remove(), this.markers.delete(BB));
          this.compass.label.textContent !== BB.compass.label && (this.compass.label.textContent = BB.compass.label)
        }
        this.terrain && (jz(this.terrain, !(null !== BB && void 0 !== BB && BB.minimap)), null !== BB && void 0 !== BB && BB.minimap && (this.terrain.style.transform = BB.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", BB.minimap.iconRotation)));
        const jB = null === BB || void 0 === BB ? void 0 : BB.searchArea;
        for (const zB of [this.searchAreas.minimap, this.searchAreas.map])
          if (zB && (jz(zB, !jB), jB)) {
            if (this.searchAreaPath.seed !== jB.shapeSeed && (this.searchAreaPath = {
                seed: jB.shapeSeed,
                d: Rj(vj(jB.shapeSeed))
              }), zB.dataset.shapeSeed !== jB.shapeSeed) {
              zB.dataset.shapeSeed = jB.shapeSeed;
              for (const BB of zB.querySelectorAll("path")) BB.setAttribute("d", this.searchAreaPath.d)
            }
            zB.style.left = `${jB.left}%`, zB.style.top = `${jB.top}%`, zB.style.width = `${jB.width}%`, zB.style.height = `${jB.height}%`
          } if (this.player && (jz(this.player, !(null !== BB && void 0 !== BB && BB.player) || BB.player.hidden), null !== BB && void 0 !== BB && BB.player && (this.player.style.left = `${BB.player.left}%`, this.player.style.top = `${BB.player.top}%`, this.player.style.setProperty("--map-player-rotation", BB.player.rotation))), this.waypoint) {
          const {
            root: jB,
            marker: zB,
            clip: QB,
            text: nB,
            label: dB,
            distance: IB,
            hint: NB
          } = this.waypoint, uB = !(null !== BB && void 0 !== BB && BB.waypoint) || null !== BB.waypoint.popupToken && BB.waypoint.popupToken !== this.waypointOriginToken;
          jz(jB, uB);
          let UB = 1;
          const aB = this.waypointLaunch;
          if (!uB && aB && BB.waypoint.nameKey === aB.nameKey) {
            const BB = performance.now();
            aB.startedAt ??= BB, UB = Math.min(1, Math.max(0, (BB - aB.startedAt - 450) / 1e3)), zB.style.opacity = String(Math.min(1, (BB - aB.startedAt) / 150)), 1 === UB && (this.waypointLaunch = null)
          } else zB.style.opacity = "", aB && null !== aB.startedAt && (this.waypointLaunch = null);
          if (jB.classList.toggle("Launching", UB < 1), null !== BB && void 0 !== BB && BB.waypoint) {
            const jB = this.waypointInset,
              uB = "quest_talk" === BB.waypoint.markerIcon ? function(BB, jB, zB) {
                if (!BB.text || null === BB.blockHeight || 0 === BB.nearness) return BB;
                const QB = BB.blockHeight / 100 * zB.height,
                  nB = -BB.nearness * (zz * QB + jB.width / 2),
                  dB = BB.nearness * (Qz * QB + jB.height / 2);
                return {
                  ...BB,
                  text: {
                    x: BB.text.x + nB / zB.width * 100,
                    y: BB.text.y + dB / zB.height * 100
                  }
                }
              }(BB.waypoint, this.waypointMarkerSize, this.viewport) : BB.waypoint,
              pB = (0, ij.d)(uB, jB, this.viewport),
              rB = UB * UB * (3 - 2 * UB),
              sB = UB < 1 ? aB.x + (pB.x - aB.x) * rB : pB.x,
              JB = UB < 1 ? aB.y + (pB.y - aB.y) * rB : pB.y;
            zB.style.translate = `${sB}vw ${JB}vh`, QB.style.clipPath = `inset(${jB.top}px ${jB.x}px ${jB.bottom}px)`, jz(nB, UB < 1 || !BB.waypoint.text), nB.style.opacity = String(1 - BB.waypoint.nearness), BB.waypoint.text && (nB.style.translate = `${BB.waypoint.text.x}vw ${BB.waypoint.text.y}vh`), dB.textContent !== BB.waypoint.name && (dB.textContent = BB.waypoint.name), this.markerIcon !== BB.waypoint.markerIcon && (this.markerIcon = BB.waypoint.markerIcon, zB.replaceChildren(Kj(this.markerIcon))), IB.textContent !== BB.waypoint.distance && (IB.textContent = BB.waypoint.distance), jz(NB, null === BB.waypoint.hint), null !== BB.waypoint.hint && NB.textContent !== BB.waypoint.hint && (NB.textContent = BB.waypoint.hint)
          }
        }
      }
      dispose() {
        var BB, jB;
        this.mountWaypointOrigin(null), this.render(null), null === (BB = this.stopLayout) || void 0 === BB || BB.call(this), this.stopLayout = null, null === (jB = this.stopWaypoint) || void 0 === jB || jB.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.HJ = !0
      }
    }

    function jz(BB, jB) {
      BB.hidden !== jB && (BB.hidden = jB)
    }
    const zz = .55,
      Qz = .6;
    const nz = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class dz {
      constructor(BB, jB, zB, QB) {
        this.map = BB, this.quests = jB, this.compass = zB, this.display = new Bz, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.HJ = !1, this.snapshot = null, this.texts = new Map, this.translate = QB
      }
      setTranslator(BB, jB) {
        this.translate = BB, this.locale = jB, this.metresFormat = new Intl.NumberFormat(jB), this.texts.clear()
      }
      translateCached(BB, jB) {
        const zB = void 0 === jB ? BB : `${BB} ${jB}`;
        let QB = this.texts.get(zB);
        return void 0 === QB && (this.texts.size >= 500 && this.texts.clear(), QB = this.translate(BB, void 0 === jB ? void 0 : {
          distance: jB
        }), this.texts.set(zB, QB)), QB
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(BB, jB, zB) {
        if (this.HJ) return;
        if (!BB) return this.snapshot = null, void this.display.render(null);
        const QB = this.map.getSnapshot().map,
          uB = zB.cameraHeading,
          UB = {
            ...this.display.compassSize,
            tanHalfFovX: zB.tanHalfFovX,
            pitch: zB.cameraPitch
          },
          aB = [];
        if (QB)
          for (const nB of this.compass.frame(BB, uB, jB)) {
            const BB = mB(nB.offset, UB);
            null !== BB && aB.push({
              ...nB,
              left: BB
            })
          }
        const pB = function(BB, jB) {
            const zB = [],
              QB = BB => "quest" === BB.kind ? BB.distance - 1 : BB.distance,
              nB = [...BB].sort(((BB, jB) => QB(BB) - QB(jB) || BB.id.localeCompare(jB.id)));
            for (const dB of nB) {
              let BB = !1;
              if ("quest" !== dB.kind)
                for (const QB of zB)
                  if (Math.abs(QB.left - dB.left) < jB) {
                    BB = !0;
                    break
                  } BB || zB.push(dB)
            }
            return zB
          }(aB, this.display.compassSpacing),
          rB = function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              zB = null;
            for (const QB of BB) Math.abs(QB.offset) <= jB && (!zB || QB.distance < zB.distance || QB.distance === zB.distance && Math.abs(QB.offset) < Math.abs(zB.offset)) && (zB = QB);
            return zB
          }(pB),
          sB = BB => {
            var jB;
            return null !== (jB = BB.displayName) && void 0 !== jB ? jB : this.translateCached(BB.nameKey)
          },
          JB = {
            compass: {
              markers: pB.map((BB => ({
                id: BB.id,
                icon: BB.icon,
                colour: BB.colour,
                name: sB(BB),
                left: BB.left
              }))),
              cardinals: IB.map((BB => {
                let {
                  name: jB,
                  bearing: zB
                } = BB;
                const QB = mB(nB.b.computeShortestRotation(uB, zB), UB);
                return {
                  name: jB,
                  left: null !== QB && void 0 !== QB ? QB : 0,
                  hidden: null === QB
                }
              })),
              label: rB ? `${sB(rB)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",SB(rB.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== QB && void 0 !== QB && QB.background) {
          const jB = BB[0] - QB.mapOrigin[0],
            zB = BB[2] - QB.mapOrigin[2],
            {
              rotation: nB,
              transform: IB
            } = function(BB, jB, zB, QB) {
              const [nB, IB] = NB(BB, jB, QB), uB = dB - zB;
              return {
                rotation: uB,
                transform: `rotate(${uB}rad) translate(-${nB}%, -${IB}%)`
              }
            }(jB, zB, uB, QB.background.bounds);
          JB.minimap = {
            transform: IB,
            iconRotation: -nB + "rad"
          };
          const [UB, aB] = NB(jB, zB, QB.background.bounds);
          JB.player = {
            left: UB,
            top: aB,
            hidden: UB < 0 || aB < 0 || UB > 100 || aB > 100,
            rotation: -nB + "rad"
          }
        }
        const {
          waypoint: yB
        } = this.quests.getSnapshot();
        if ("search" === (null === yB || void 0 === yB ? void 0 : yB.questMarkerIcon) && null !== QB && void 0 !== QB && QB.background) {
          const {
            bounds: BB
          } = QB.background, [jB, zB] = NB(yB.position[0] - QB.mapOrigin[0], yB.position[2] - QB.mapOrigin[2], BB);
          JB.searchArea = {
            left: jB,
            top: zB,
            width: 6400 / (BB.mapMaxX - BB.mapMinX),
            height: 6400 / (BB.mapMaxZ - BB.mapMinZ),
            shapeSeed: yB.nameKey
          }
        }
        const kB = this.quests.getNotificationSnapshot(),
          GB = "completion" === (null === kB || void 0 === kB ? void 0 : kB.phase) && !Ej(kB.kind);
        if (yB && !GB) {
          const jB = Math.hypot(...yB.position.map(((jB, zB) => jB - BB[zB]))),
            QB = Math.round(jB),
            nB = "talk" === yB.questMarkerIcon ? Math.min(1, Math.max(0, (10 - jB) / 5)) : 0,
            dB = zB.projectWorldPosToViewport(yB.position),
            IB = dB && zB.projectWorldPosToViewport([yB.position[0], yB.position[1] - 1, yB.position[2]]);
          JB.waypoint = {
            ...zB.projectWorldPosToScreenPos(yB.position),
            text: dB,
            nearness: nB * nB * (3 - 2 * nB),
            blockHeight: dB && IB ? IB.y - dB.y : null,
            name: this.translateCached(yB.nameKey),
            nameKey: yB.nameKey,
            markerIcon: yB.questMarkerIcon ? nz[yB.questMarkerIcon] : "quest",
            popupToken: (null === kB || void 0 === kB ? void 0 : kB.waypointNameKey) === yB.nameKey ? kB.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(QB)),
            hint: "search" === yB.questMarkerIcon && Math.hypot(yB.position[0] - BB[0], yB.position[2] - BB[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = JB, this.display.render(JB)
      }
      dispose() {
        this.HJ = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Iz = "skyblockSkillsView";
    class Nz extends pB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          zB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => BB,
          QB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          nB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => BB;
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = jB, this.translate = zB, this.locale = QB, this.itemName = nB, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }
      }
      setTranslator(BB, jB, zB) {
        this.translate = BB, this.locale = jB, this.itemName = zB, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(BB) {
        let jB = this.skillText.get(BB);
        return jB || (jB = {
          label: this.translate(`skyblockGame:${BB}`),
          description: this.translate(`skyblockGame:${BB}Description`)
        }, this.skillText.set(BB, jB)), jB
      }
      sources(BB) {
        if ("mining" === BB || "fishing" === BB) return this.buildSources(BB);
        let jB = this.sourceText.get(BB);
        return jB || (jB = this.buildSources(BB), this.sourceText.set(BB, jB)), jB
      }
      buildSources(BB) {
        const jB = this.translate;
        return "exploration" === BB ? [jB("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), jB("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === BB ? [jB("skyblockGame:logSource", {
          xp: this.number(sj["Maple Log"])
        })] : "combat" === BB ? [jB("skyblockGame:creatureKillSource"), jB("skyblockGame:noEnvironmentalXp")] : "farming" === BB ? [jB("skyblockGame:cropSource", {
          xp: this.number(yj["Wheat|FreshlyGrown"])
        }), jB("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), jB("skyblockGame:noYoungCropXp")] : Object.entries("mining" === BB ? mj : kj).map((BB => {
          let [zB, QB] = BB;
          return jB("skyblockGame:itemXpSource", {
            item: this.itemName(zB),
            xp: this.number(QB)
          })
        }))
      }
      number(BB) {
        return BB.toLocaleString(this.locale)
      }
      benefit(BB, jB) {
        const zB = Ij(BB, jB);
        return this.translate(zB.translationKey, {
          bonus: this.number(zB.percent)
        })
      }
      VJ(BB) {
        if (!this.HJ) {
          if ("snapshot" === BB.kind) this.progress = BB.progress, this.pending.clear(), this.recent = null;
          else if ("award" === BB.kind && this.progress) {
            const {
              award: jB
            } = BB;
            this.progress = {
              ...this.progress,
              [jB.skill]: jB.after
            };
            for (const [BB, QB] of this.pending) QB.skill === jB.skill && this.pending.delete(BB);
            const zB = jB.after.level > jB.before.level;
            this.recordGain(jB.skill, jB.amount, zB ? ++this.nextLevelUpToken : null), zB && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: jB.skill,
              beforeLevel: jB.before.level,
              level: jB.after.level
            })
          } else {
            if ("rejectBlock" === BB.kind) return void this.rejectBlock(BB.position);
            if ("open" === BB.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(BB, jB, zB) {
        if (!this.progress || this.HJ || zB) return;
        const QB = function(BB, jB) {
          const zB = BB.split("|")[0];
          return "Air" === jB || jB === `Barkless ${BB}` ? Object.hasOwn(sj, zB) ? {
            skill: "foraging",
            amount: sj[zB]
          } : "Air" !== jB ? null : Object.hasOwn(mj, BB) ? {
            skill: "mining",
            amount: mj[BB]
          } : aj(BB) ? {
            skill: "farming",
            amount: 10
          } : rj(BB) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(yj, BB) ? {
            skill: "farming",
            amount: yj[BB]
          } : Object.hasOwn(AB, BB) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(jB, "Air");
        if (!QB) return;
        const nB = BB.join(",");
        if (this.pending.has(nB)) return;
        const dB = this.predictedProgress(QB.skill).totalXp + QB.amount;
        Number.isSafeInteger(dB) && (this.pending.set(nB, {
          ...QB,
          expires: this.now() + 2e3
        }), this.recordGain(QB.skill, 0), this.emit())
      }
      rejectBlock(BB) {
        this.pending.delete(BB.join(",")) && this.emit()
      }
      vp() {
        if (this.HJ) return;
        let BB = !1;
        for (const [jB, zB] of this.pending) zB.expires <= this.now() && (this.pending.delete(jB), BB = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, BB = !0), BB && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(BB, jB) {
        var zB, QB;
        let nB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const dB = (null === (zB = this.recent) || void 0 === zB ? void 0 : zB.skill) === BB && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          IB = (null === (QB = this.recent) || void 0 === QB ? void 0 : QB.skill) === BB && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: BB,
          confirmed: dB + jB,
          expires: this.now() + 3e3,
          levelUpToken: null !== nB && void 0 !== nB ? nB : IB
        }
      }
      pendingXp(BB) {
        let jB = 0;
        for (const zB of this.pending.values()) zB.skill === BB && (jB += zB.amount);
        return jB
      }
      predictedProgress(BB) {
        const jB = this.progress[BB],
          zB = this.pendingXp(BB);
        return zB ? uj(jB.totalXp + zB, BB) : jB
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var BB, jB, zB;
        const QB = this.progress ? bB.map((BB => {
            const jB = this.predictedProgress(BB);
            return {
              ...this.text(BB),
              icon: Gj[BB],
              benefit: this.benefit(BB, jB.level),
              sources: this.sources(BB),
              id: BB,
              selected: BB === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(jB.level)
              }),
              xp: null === jB.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(jB.xpIntoLevel),
                target: this.number(jB.xpForNextLevel)
              }),
              percent: null === jB.xpForNextLevel ? 100 : Math.min(100, jB.xpIntoLevel / jB.xpForNextLevel * 100)
            }
          })) : [],
          nB = QB.find((BB => {
            var jB;
            return BB.id === (null === (jB = this.recent) || void 0 === jB ? void 0 : jB.skill)
          })),
          dB = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: QB,
          detail: null !== (BB = QB.find((BB => BB.selected))) && void 0 !== BB ? BB : null,
          overallLevel: this.progress ? bB.reduce(((BB, jB) => BB + this.predictedProgress(jB).level), 0) : null,
          hud: nB && dB > 0 ? {
            skill: nB,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(dB)
            }),
            levelUpToken: null !== (jB = null === (zB = this.recent) || void 0 === zB ? void 0 : zB.levelUpToken) && void 0 !== jB ? jB : null,
            colour: gj(nB.id)
          } : null
        }
      }
    }
    const uz = Math.max(1600, 600, 950) + 400,
      Uz = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      az = "skyblockQuestsView",
      pz = "skyblockQuestNotificationView";
    class rz extends pB {
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          IB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(BB, QB, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = jB, this.translate = zB, this.now = nB, this.locale = dB, this.publishNotification = IB, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
          enabled: !1,
          open: !1,
          active: [],
          completed: [],
          completedExpanded: !1,
          detail: null,
          tracked: null,
          trackedStepPulse: 0,
          waypoint: null,
          compassTarget: null
        }, this.getNotificationSnapshot = () => this.notificationSnapshot, this.showTracked = () => {
          var BB, jB;
          this.selected = null !== (BB = null === (jB = this.authoritative) || void 0 === jB ? void 0 : jB.trackedQuestId) && void 0 !== BB ? BB : null, this.show()
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const BB = this.snapshot.detail;
          !this.HJ && null !== BB && void 0 !== BB && BB.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(BB.id), this.emit())
        }, this.viewDialogue = () => {
          const BB = this.snapshot.detail;
          var jB;
          BB && (null === (jB = this.onViewDialogue) || void 0 === jB || jB.call(this, BB.id))
        }, this.notifications = new Sj(nB, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var BB, jB;
        return null !== (BB = null === (jB = this.authoritative) || void 0 === jB ? void 0 : jB.trackedQuestId) && void 0 !== BB ? BB : null
      }
      notify(BB) {
        !this.HJ && this.notifications.enqueue(BB) && this.emitNotification()
      }
      setNotificationsHeld(BB) {
        (this.notifications.setHeld(BB) || BB) && this.emitNotification()
      }
      vp() {
        var BB, jB;
        if (this.HJ) return;
        this.notifications.vp() && this.emitNotification();
        let zB = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, zB = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, zB = !0);
        const QB = sz(this.authoritative);
        null !== QB && void 0 !== QB && null !== (BB = QB.questClock) && void 0 !== BB && BB.running && this.clockText(QB) !== (null === (jB = this.snapshot.tracked) || void 0 === jB ? void 0 : jB.clock) && (zB = !0), zB && this.emit()
      }
      setTranslator(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = BB, this.locale = jB, this.emitNotification(), this.emit()
      }
      VJ(BB) {
        if (!this.HJ)
          if ("completion" === BB.kind) this.notify(BB.questCompletion);
          else if ("landmark" === BB.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: BB.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === BB.kind) {
          var jB, zB, QB;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: BB.npcNoteTitleKey,
            textKey: BB.npcNoteTextKey,
            params: null !== (jB = BB.npcNoteParams) && void 0 !== jB ? jB : {},
            nameKeys: null !== (zB = BB.npcNoteNameKeys) && void 0 !== zB ? zB : {},
            iconItem: null !== (QB = BB.npcNoteIconItem) && void 0 !== QB ? QB : null
          })
        } else if ("open" === BB.kind) this.show();
        else if ("guidance" === BB.kind) this.waypoint = BB.waypoint, this.compassTarget = BB.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === BB.kind) {
          this.authoritative = BB.snapshot, this.notifications.vp() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const jB = this.trackedStepPulse;
          this.updateTrackedStepPulse(BB.snapshot), this.emit(), this.trackedStepPulse > jB && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.HJ || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var BB;
        return null !== (BB = this.translateWithIcons) && void 0 !== BB ? BB : this.translate
      }
      clockText(BB) {
        const jB = BB.questClock;
        if (!jB) return null;
        const zB = jB.elapsedMs + (jB.running ? this.now() - this.receivedAt : 0);
        return void 0 === jB.countdownFromMs ? YB(zB, !1) : YB(1e3 * Math.ceil(Math.max(0, jB.countdownFromMs - zB) / 1e3), !1)
      }
      updateTrackedStepPulse(BB) {
        var jB, zB, QB;
        const nB = sz(BB);
        if (!nB) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const dB = BB => nB.subquests.filter((jB => BB(jB.status))).map((BB => BB.id)),
          IB = dB((BB => "completed" === BB || "skipped" === BB)),
          NB = dB((BB => "locked" !== BB)),
          uB = (null === (jB = this.trackedSteps) || void 0 === jB ? void 0 : jB.questId) === nB.id && nB.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (uB) {
          const BB = IB.filter((BB => !uB.finished.has(BB))),
            jB = dB((BB => "active" === BB || "ready" === BB)).filter((BB => !uB.unlocked.has(BB)));
          BB.length > 0 && this.trackedStepPulse++, (BB.length > 0 || jB.length > 0) && (this.trackedChange = {
            finished: new Set(BB),
            unlocked: new Set(jB),
            expiresAt: this.now() + uz
          })
        } else {
          var UB;
          this.trackedStepPulse = (null === (UB = this.trackedSteps) || void 0 === UB ? void 0 : UB.questId) === nB.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: nB.id,
          progress: nB.progress,
          finished: new Set([...null !== (zB = null === uB || void 0 === uB ? void 0 : uB.finished) && void 0 !== zB ? zB : [], ...IB]),
          unlocked: new Set([...null !== (QB = null === uB || void 0 === uB ? void 0 : uB.unlocked) && void 0 !== QB ? QB : [], ...NB])
        }
      }
      entry(BB, jB) {
        var zB, QB;
        const nB = BB.id === (null === (zB = this.authoritative) || void 0 === zB ? void 0 : zB.trackedQuestId),
          dB = this.now() < this.trackAvailableAt,
          IB = this.questTextTranslator(),
          NB = BB.subquests.map((jB => {
            var zB, QB, dB, NB, uB, UB;
            const aB = null !== (zB = jB.handInNpcName) && void 0 !== zB ? zB : BB.giverName,
              pB = this.translate("skyblockGame:progress", {
                current: jB.progress.toLocaleString(this.locale),
                target: jB.target.toLocaleString(this.locale)
              }),
              rB = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: aB ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [jB.status],
              sB = "active" === jB.status || "ready" === jB.status;
            return {
              id: jB.id,
              name: tj(IB, jB.nameKey, jB.nameParams),
              description: tj(IB, jB.descriptionKey, jB.descriptionParams),
              progress: pB,
              status: jB.status,
              statusLabel: rB ? this.translate(rB, {
                npc: aB
              }) : pB,
              iconItem: sB && null !== (QB = jB.questIconItem) && void 0 !== QB ? QB : null,
              barPercent: "active" === jB.status && jB.showsProgressBar ? Math.min(100, 100 * jB.progress / jB.target) : null,
              justFinished: nB && null !== (dB = null === (NB = this.trackedChange) || void 0 === NB ? void 0 : NB.finished.has(jB.id)) && void 0 !== dB && dB,
              justUnlocked: nB && null !== (uB = null === (UB = this.trackedChange) || void 0 === UB ? void 0 : UB.unlocked.has(jB.id)) && void 0 !== uB && uB
            }
          }));
        return {
          id: BB.id,
          name: tj(IB, BB.nameKey, BB.nameParams),
          description: tj(IB, BB.descriptionKey, BB.descriptionParams),
          progress: jB ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: BB.progress.toLocaleString(this.locale),
            target: BB.target.toLocaleString(this.locale)
          }),
          completed: jB,
          tracked: nB,
          selected: BB.id === this.selected,
          canTrack: !jB && !nB && !dB,
          trackLabel: this.translate(nB ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : dB ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== BB.id,
          subquests: NB,
          focusStep: null !== (QB = NB.find((BB => null !== BB.barPercent))) && void 0 !== QB ? QB : null,
          clock: this.clockText(BB)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var BB, jB, zB, QB, nB, dB, IB, NB, uB, UB;
        const aB = [...null !== (BB = null === (jB = this.authoritative) || void 0 === jB ? void 0 : jB.active) && void 0 !== BB ? BB : [], ...null !== (zB = null === (QB = this.authoritative) || void 0 === QB ? void 0 : QB.completed) && void 0 !== zB ? zB : []];
        var pB, rB, sB, JB;
        aB.some((BB => BB.id === this.selected)) || (this.selected = null !== (pB = null !== (rB = null === (sB = this.authoritative) || void 0 === sB ? void 0 : sB.trackedQuestId) && void 0 !== rB ? rB : null === (JB = aB[0]) || void 0 === JB ? void 0 : JB.id) && void 0 !== pB ? pB : null);
        const mB = null !== (nB = null === (dB = this.authoritative) || void 0 === dB ? void 0 : dB.active.map((BB => this.entry(BB, !1)))) && void 0 !== nB ? nB : [];
        mB.sort(((BB, jB) => Number(jB.tracked) - Number(BB.tracked)));
        const yB = null !== (IB = null === (NB = this.authoritative) || void 0 === NB ? void 0 : NB.completed.map((BB => this.entry(BB, !0)))) && void 0 !== IB ? IB : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: mB,
          completed: yB,
          completedExpanded: this.completedExpanded,
          detail: null !== (uB = [...mB, ...yB].find((BB => BB.selected))) && void 0 !== uB ? uB : null,
          tracked: null !== (UB = mB.find((BB => BB.tracked))) && void 0 !== UB ? UB : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function sz(BB) {
      var jB;
      return null !== (jB = null === BB || void 0 === BB ? void 0 : BB.active.find((jB => jB.id === BB.trackedQuestId))) && void 0 !== jB ? jB : null
    }
    const Jz = "skyblockDungeonsView";
    class mz extends pB {
      constructor(BB, jB) {
        let zB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = jB, this.locale = zB, this.requestEnter = QB, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const BB = this.pickerEntry(),
            jB = null === BB || void 0 === BB ? void 0 : BB.difficulties[this.pageIndex];
          void 0 !== jB && null !== jB.unlockedBoss && (this.close(), this.requestEnter(BB.id, jB.difficulty))
        }
      }
      setTranslator(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = BB, this.locale = jB, this.emit()
      }
      VJ(BB) {
        var jB, zB;
        if (!this.HJ) return "open" === BB.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== BB.kind ? "snapshot" === BB.kind && (this.authoritative = BB.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (jB = null === (zB = this.pickerEntry()) || void 0 === zB ? void 0 : zB.difficulties.length) && void 0 !== jB ? jB : 1) - 1)), null === BB.snapshot && this.open ? this.close() : this.emit()) : this.choose(BB.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(BB) {
        var jB;
        const zB = null === (jB = this.authoritative) || void 0 === jB ? void 0 : jB.dungeons.find((jB => jB.id === BB));
        void 0 !== zB ? this.open && this.pickerDungeonId === BB || (this.pickerDungeonId = BB, this.pageIndex = Math.max(0, zB.difficulties.findLastIndex((BB => null !== BB.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${BB}`)
      }
      turnTo(BB) {
        var jB, zB;
        const QB = null !== (jB = null === (zB = this.pickerEntry()) || void 0 === zB ? void 0 : zB.difficulties.length) && void 0 !== jB ? jB : 0;
        BB < 0 || BB >= QB || BB === this.pageIndex || (this.pageIndex = BB, this.emit())
      }
      pickerEntry() {
        var BB, jB;
        return null !== (BB = null === (jB = this.authoritative) || void 0 === jB ? void 0 : jB.dungeons.find((BB => BB.id === this.pickerDungeonId))) && void 0 !== BB ? BB : null
      }
      difficulty(BB) {
        const jB = BB.completions > 0,
          zB = null === BB.bestMs ? null : YB(BB.bestMs);
        return {
          difficulty: BB.difficulty,
          label: this.translate(DB[BB.difficulty]),
          colour: FB[BB.difficulty],
          beaten: jB,
          bestTime: zB,
          completions: BB.completions,
          summary: jB ? [null === zB ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: zB
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: BB.completions.toLocaleString(this.locale)
          })].filter((BB => null !== BB)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(BB) {
        const jB = BB.difficulties.map((BB => this.difficulty(BB))),
          zB = jB.filter((BB => BB.beaten)).length;
        return {
          id: BB.id,
          name: this.translate(BB.nameKey),
          selected: BB.id === this.selected,
          beatenSummary: `${zB} / ${jB.length}`,
          difficulties: jB
        }
      }
      picker() {
        const BB = this.pickerEntry();
        if (null === BB || 0 === BB.difficulties.length) return null;
        const jB = BB.difficulties.map(((jB, zB) => {
          var QB, nB, dB, IB;
          const NB = jB.unlockedBoss,
            uB = null === NB ? this.lockedHint(BB, zB) : null;
          return {
            ...this.difficulty(jB),
            unlocked: null !== NB,
            bossName: null === NB ? null : this.translate(NB.bossNameKey),
            bossMobType: null !== (QB = null === NB || void 0 === NB ? void 0 : NB.bossMobType) && void 0 !== QB ? QB : null,
            bossMobVariation: null !== (nB = null === NB || void 0 === NB ? void 0 : NB.bossMobVariation) && void 0 !== nB ? nB : null,
            lockedHint: null !== (dB = null === uB || void 0 === uB ? void 0 : uB.text) && void 0 !== dB ? dB : null,
            lockedHintHighlight: null !== (IB = null === uB || void 0 === uB ? void 0 : uB.highlight) && void 0 !== IB ? IB : null,
            current: zB === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(BB.nameKey),
          pages: jB,
          page: jB[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < jB.length - 1
        }
      }
      lockedHint(BB, jB) {
        var zB, QB, nB;
        if (0 === jB && "number" === typeof BB.combatLevelLock) {
          const jB = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: BB.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: jB,
            colour: gj("combat"),
            icon: Gj.combat
          })
        }
        const dB = null !== (zB = null === (QB = this.authoritative) || void 0 === QB ? void 0 : QB.dungeons) && void 0 !== zB ? zB : [],
          IB = jB > 0 ? BB : null !== (nB = dB[dB.indexOf(BB) - 1]) && void 0 !== nB ? nB : null,
          NB = jB > 0 ? BB.difficulties[jB - 1] : null === IB || void 0 === IB ? void 0 : IB.difficulties[0];
        if (null === IB || void 0 === NB) return null;
        const uB = this.translate(IB.nameKey);
        if (null === NB.unlockedBoss) return IB === BB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, NB.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: uB
        }, NB.difficulty);
        const UB = this.translate(NB.unlockedBoss.bossNameKey);
        return IB === BB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: UB
        }, NB.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: UB,
            dungeon: uB
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(BB, jB, zB) {
        return this.hintHighlighting(BB, jB, "difficulty", {
          name: this.translate(DB[zB]),
          colour: FB[zB],
          icon: null
        })
      }
      hintHighlighting(BB, jB, zB, QB) {
        let {
          name: nB,
          colour: dB,
          icon: IB
        } = QB;
        const NB = this.translate(BB, {
          ...jB,
          [zB]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(BB, {
            ...jB,
            [zB]: nB
          }),
          highlight: 2 === NB.length ? {
            before: NB[0],
            name: nB,
            after: NB[1],
            colour: dB,
            icon: IB
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var BB, jB, zB;
        const QB = null !== (BB = null === (jB = this.authoritative) || void 0 === jB ? void 0 : jB.dungeons) && void 0 !== BB ? BB : [];
        var nB, dB;
        QB.some((BB => BB.id === this.selected)) || (this.selected = null !== (nB = null === (dB = QB[0]) || void 0 === dB ? void 0 : dB.id) && void 0 !== nB ? nB : null);
        const IB = QB.map((BB => this.entry(BB)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: IB,
          detail: null !== (zB = IB.find((BB => BB.selected))) && void 0 !== zB ? zB : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const yz = ["mining", "farming", "foraging", "fishing", "combat"],
      kz = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      Gz = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Lz() {
      for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
      return jB.map(((BB, jB) => ({
        amount: BB,
        coins: kz[jB],
        xp: Gz[jB]
      })))
    }
    const gz = Lz(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      tz = Lz(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Sz = Lz(50, 100, 250, 500, 1e3, 2500, 5e3),
      Mz = Lz(25, 50, 100, 250, 500, 1e3),
      Ez = Lz(10, 25, 50, 100, 250, 500, 1e3),
      iz = Lz(1, 5, 10, 25, 50);

    function qz(BB, jB) {
      return {
        id: BB,
        category: "fishing",
        item: jB,
        drops: [jB],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ez
      }
    }
    const fz = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: tz
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Sz
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Sz
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Mz
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Mz
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: tz
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: gz
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: gz
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: gz
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Sz
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: tz
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: tz
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: tz
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Sz
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Sz
      }, qz("wheatfish", "Wheatfish"), qz("darter", "Darter"), qz("sunset_minnow", "Sunset Minnow"), qz("root_flounder", "Root Flounder"), qz("greenfin_loach", "Greenfin Loach"), qz("red_strongfish", "Red Strongfish"), qz("green_strongfish", "Green Strongfish"), qz("boomerang_fish", "Boomerang Fish"), qz("seahorse", "Seahorse"), qz("spined_stickleback", "Spined Stickleback"), qz("moon_strongfish", "Moon Strongfish"), qz("boulder_bass", "Boulder Bass"), qz("grass_snapper", "Grass Snapper"), qz("crystal_wheatfish", "Crystalized Wheatfish", iz), qz("moonstone_pupfish", "Moonstone Pupfish", iz), qz("reedglass_minnow", "Reedglass Minnow"), qz("mangrove_herring", "Mangrove Herring"), qz("mudline_perch", "Mudline Perch"), qz("coastal_mullet", "Coastal Mullet"), qz("reef_sardine", "Reef Sardine"), qz("root_perch", "Root Perch"), qz("driftwood_catfish", "Driftwood Catfish"), qz("aether_minnow", "Aether Minnow"), qz("needlefish", "Tri-Pointed Needlefish"), qz("threadfin_bream", "Threadfin Bream"), qz("mudbelly_tilapia", "Mudbelly Tilapia"), qz("rotslab_eel", "Rotslab Eel"), qz("polarflash_electron", "Polarflash Electron"), qz("mireback_carp", "Mireback Carp"), qz("blackwater_bream", "Blackwater Bream"), qz("stone_grouper", "Stone Grouper"), qz("shadeback_ray", "Shadeback Ray"), qz("glacial_silverfish", "Glacial Silverfish"), qz("hatchetfish", "Hatchetfish"), qz("moonlit_boomerang", "Moonlit Boomerang Fish"), qz("murkborne_ray", "Murkborne Ray"), qz("bamboo_catfish", "Bamboo Catfish"), qz("mossback_arapaima", "Mossback Arapaima"), qz("murk_stingray", "Murk Stingray"), qz("channel_sawfish", "Channel Sawfish"), qz("boned_sturgeon", "Boned Sturgeon"), qz("oarfish", "Oarfish"), qz("snakehead", "Snakehead", iz), qz("eldertide_leviathan", "Eldertide Leviathan", iz), qz("pithead", "Pithead"), qz("electric_eel", "Electric Eel"), qz("shadow_darter", "Shadow Darter"), qz("abyss_carp", "Abyss Carp"), qz("nomai_moray", "Nomai Moray"), qz("silver_dragonfish", "Silver Dragonfish"), qz("giant_moray", "Giant Moray"), qz("coelacanth", "Coelacanth", iz), qz("frost_herring", "Frost Herring"), qz("permafrost_halibut", "Permafrost Halibut"), qz("glacial_lanternfish", "Glacial Lanternfish"), qz("frozen_grenadier", "Frozen Grenadier"), qz("blackfin_icefish", "Blackfin Icefish"), qz("moonfish", "Moonfish"), qz("alpha_strongfish", "Alpha Moon Strongfish"), qz("deep_lanternfish", "Deepwater Lanternfish", iz), qz("pearlescent_moonfish", "Pearlescent Moonfish", iz), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: tz
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Mz
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Mz
      }],
      oz = (new Map(fz.map((BB => [BB.id, BB]))), new Map),
      Hz = new Map;
    for (const su of fz) {
      for (const [BB, jB] of Object.entries(null !== (Dz = su.blocks) && void 0 !== Dz ? Dz : {})) {
        var Dz;
        oz.set(BB, {
          collection: su,
          amount: jB
        })
      }
      for (const BB of null !== (Fz = su.drops) && void 0 !== Fz ? Fz : []) {
        var Fz;
        Hz.set(BB, su)
      }
    }

    function Yz(BB, jB) {
      let zB = 0;
      for (; zB < BB.tiers.length && jB >= BB.tiers[zB].amount;) zB++;
      return zB
    }
    const Vz = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function hz(BB) {
      return Vz[BB - 1]
    }
    const Xz = "skyblockCollectionsView";
    class Zz extends pB {
      constructor(BB, jB) {
        let zB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => BB;
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = jB, this.locale = zB, this.itemName = QB, this.counts = null, this.category = "mining", this.selected = fz[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = BB => {
          this.category = BB, this.selected = this.inCategory(BB)[0].id, this.emit()
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }
      }
      setTranslator(BB, jB, zB) {
        this.translate = BB, this.locale = jB, this.itemName = zB, this.emit()
      }
      VJ(BB) {
        if (!this.HJ)
          if ("collOpen" !== BB.kind) {
            (BB.collFull || null === this.counts) && (this.counts = new Map);
            for (const [jB, zB] of BB.collCounts) this.counts.set(jB, zB);
            this.emit()
          } else this.show()
      }
      dispose() {
        this.counts = null, super.dispose()
      }
      isEnabled() {
        return null !== this.counts
      }
      buildSnapshot() {
        var BB;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const jB = this.inCategory(this.category).map((BB => this.collectionView(BB))),
          zB = fz.reduce(((BB, jB) => BB + this.tierOf(jB)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: yz.map((BB => this.categoryView(BB))),
          collections: jB,
          detail: null !== (BB = jB.find((BB => BB.selected))) && void 0 !== BB ? BB : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(zB)
          })
        }
      }
      categoryView(BB) {
        const jB = this.inCategory(BB),
          zB = jB.reduce(((BB, jB) => BB + this.tierOf(jB)), 0),
          QB = jB.reduce(((BB, jB) => BB + jB.tiers.length), 0);
        return {
          id: BB,
          label: this.translate(`skyblockGame:${BB}`),
          icon: Gj[BB],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(zB),
            target: this.number(QB)
          }),
          selected: BB === this.category
        }
      }
      collectionView(BB) {
        var jB, zB;
        const QB = null !== (jB = this.counts.get(BB.id)) && void 0 !== jB ? jB : 0,
          nB = Yz(BB, QB),
          dB = null !== (zB = BB.tiers[nB]) && void 0 !== zB ? zB : null,
          IB = 0 === nB ? 0 : BB.tiers[nB - 1].amount;
        return {
          id: BB.id,
          name: this.itemName(BB.item),
          icon: BB.item,
          selected: BB.id === this.selected,
          locked: 0 === QB,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(QB)
          }),
          tier: 0 === nB ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(nB),
          percent: null === dB ? 100 : Math.min(100, (QB - IB) / (dB.amount - IB) * 100),
          progress: null === dB ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(QB),
            target: this.number(dB.amount)
          }),
          nextReward: null === dB ? null : this.reward(BB, dB.coins, dB.xp)
        }
      }
      reward(BB, jB, zB) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(jB),
          xp: this.number(zB),
          skill: this.translate(`skyblockGame:${BB.category}`)
        })
      }
      tierLabel(BB) {
        return this.translate("skyblockGame:collectionTier", {
          tier: hz(BB)
        })
      }
      tierOf(BB) {
        var jB;
        return Yz(BB, null !== (jB = this.counts.get(BB.id)) && void 0 !== jB ? jB : 0)
      }
      inCategory(BB) {
        return fz.filter((jB => jB.category === BB))
      }
      number(BB) {
        return BB.toLocaleString(this.locale)
      }
    }
    const Az = "skyblockPortalTransitView",
      Tz = "skyblockPortalArrival";
    class Pz {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Ly = BB, this.storage = jB, this.now = zB, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      VJ(BB) {
        const jB = {
          zoneNameKey: BB.transitZoneNameKey,
          variation: BB.transitZoneVariation,
          colour: BB.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Tz, jB), this.show("departure", jB.zoneNameKey, jB.colour, BB.transitDurationMs, BB.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Tz)
        }))
      }
      resumeArrival(BB) {
        const jB = this.storage.getItem(Tz);
        this.storage.removeItem(Tz), null === jB || jB.variation !== BB || this.now() - jB.departedAt > 3e4 || this.show("arrival", jB.zoneNameKey, jB.colour, 3200, 2e4)
      }
      finishArrival(BB) {
        var jB;
        "arrival" === (null === (jB = this.view) || void 0 === jB ? void 0 : jB.phase) && this.view.token === BB && (this.clearTimer(), this.view = null, this.Ly(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(BB, jB, zB, QB, nB, dB) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: BB,
          zoneNameKey: jB,
          colour: zB,
          durationMs: QB
        }, this.Ly(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Ly(null), null === dB || void 0 === dB || dB()
        }), nB)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Wz = "skyblockDailyRewardView",
      ez = "skyblockDailyRewardCoin";
    class lz {
      constructor(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          uB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Ly = BB, this.isBusy = jB, this.holdQuestPopups = zB, this.onHeldCoinsChanged = QB, this.onCoinLanded = nB, this.onStarted = dB, this.onFinished = IB, this.onItemLanded = NB, this.now = uB, this.DN = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var BB, jB;
        return null !== (BB = null === (jB = this.playing) || void 0 === jB ? void 0 : jB.view) && void 0 !== BB ? BB : null
      }
      getHeldCoins() {
        var BB, jB;
        let zB = 0;
        for (const QB of this.DN) zB += QB.coins;
        return zB - (null !== (BB = null === (jB = this.playing) || void 0 === jB ? void 0 : jB.released) && void 0 !== BB ? BB : 0)
      }
      VJ(BB) {
        "dailyRewardClaimed" !== BB.kind ? (this.queue.push(BB), this.vp()) : this.DN.push({
          coins: BB.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      vp() {
        const BB = this.now();
        if (null === this.playing) return this.releaseUnshown(BB), void this.startNext(BB);
        const jB = this.playing,
          zB = BB - jB.startedAt,
          QB = jB.view.flyingCoins,
          nB = function(BB, jB) {
            let zB = 0;
            for (; zB < jB && xz(zB, jB) <= BB;) zB++;
            return zB
          }(zB, QB);
        if (nB !== jB.landed) {
          for (let BB = nB - jB.landed > 2 ? nB - 1 : jB.landed; BB < nB; BB++) this.onCoinLanded(BB, QB);
          jB.landed = nB, jB.released = Math.round(jB.view.coins * nB / QB), this.onHeldCoinsChanged()
        }
        for (; jB.itemsLanded < jB.view.items.length && 2e3 + 160 * jB.itemsLanded + 630 <= zB;) this.onItemLanded(jB.itemsLanded), jB.itemsLanded++;
        zB >= jB.view.durationMs && (this.finish(), this.startNext(BB))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.DN = [], this.Ly(null)
      }
      startNext(BB) {
        if (0 === this.queue.length || this.isBusy()) return;
        const jB = this.queue.shift();
        this.token++;
        const zB = {
          token: this.token,
          day: jB.dailyRewardDay,
          coins: jB.dailyRewardCoins,
          items: jB.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: jB.dailyRewardDay === fB ? 24 : 14
        };
        this.playing = {
          view: zB,
          startedAt: BB,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Ly(zB), this.onStarted(zB)
      }
      finish() {
        this.DN.shift(), this.playing = null, this.holdQuestPopups(!1), this.Ly(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(BB) {
        if (this.queue.length > 0 || 0 === this.DN.length) return;
        const jB = this.DN.length;
        this.DN = this.DN.filter((jB => BB - jB.receivedAt < 6e4)), this.DN.length !== jB && this.onHeldCoinsChanged()
      }
    }

    function wz(BB, jB) {
      return 450 + 715 * BB / (jB - 1)
    }

    function xz(BB, jB) {
      return wz(BB, jB) + 650
    }
    const Kz = "skyblockMailboxView";
    class Cz {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Ly = BB, this.isBusy = jB, this.onStarted = zB, this.now = QB, this.waiting = [], this.playing = null, this.token = 0, this.itemName = BB => BB
      }
      getSnapshot() {
        var BB, jB;
        return null !== (BB = null === (jB = this.playing) || void 0 === jB ? void 0 : jB.view) && void 0 !== BB ? BB : null
      }
      setItemName(BB) {
        this.itemName = BB
      }
      VJ(BB) {
        this.waiting.push(...BB.mailLetters), this.vp()
      }
      vp() {
        const BB = this.now();
        null !== this.playing && BB - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Ly(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(BB)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Ly(null)
      }
      start(BB) {
        const jB = this.waiting.slice(0, 3);
        this.token++;
        const zB = {
          token: this.token,
          letters: jB.map((BB => this.toView(BB))),
          more: this.waiting.length - jB.length,
          durationMs: 4500 + 700 * jB.length
        };
        this.waiting = [], this.playing = {
          view: zB,
          startedAt: BB
        }, this.Ly(zB), this.onStarted(zB)
      }
      toView(BB) {
        return {
          coins: BB.mailCoins,
          items: BB.mailItems.map((BB => {
            var jB;
            return {
              itemName: BB.mailItemName,
              amount: BB.mailItemAmount,
              label: null !== (jB = BB.mailItemLabel) && void 0 !== jB ? jB : this.itemName(BB.mailItemName)
            }
          })),
          reasonKey: BB.mailReasonKey,
          reasonParams: BB.mailReasonParams
        }
      }
    }
    const cz = "skyblockQuestGraphView",
      bz = "skyblockDevQuestJump";

    function vz(BB) {
      if (0 === BB.length) return "";
      const jB = [`M ${BB[0].x} ${BB[0].y}`];
      for (let QB = 1; QB < BB.length - 1; QB++) {
        const zB = BB[QB + 1];
        jB.push(`Q ${BB[QB].x} ${BB[QB].y} ${(BB[QB].x+zB.x)/2} ${(BB[QB].y+zB.y)/2}`)
      }
      const zB = BB[BB.length - 1];
      return jB.push(`L ${zB.x} ${zB.y}`), jB.join(" ")
    }

    function Rz(BB, jB) {
      return BB < jB ? `${BB}|${jB}` : `${jB}|${BB}`
    }
    class Oz extends pB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(BB, zB, QB), this.translate = jB, this.requestJump = nB, this.requestArrive = dB, this.storage = IB, this.now = NB, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = BB => {
          BB !== this.hoveredId && (this.hoveredId = BB, this.emit())
        }, this.jump = BB => {
          this.close(), this.requestJump(BB)
        }
      }
      VJ(BB) {
        if (!this.HJ)
          if ("graph" !== BB.kind) {
            if ("jumping" === BB.kind) {
              const jB = {
                questId: BB.graphQuestId,
                variation: BB.graphVariation,
                completes: BB.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(bz, jB)
            }
          } else {
            const jB = ++this.graphCount;
            zB.e(120).then((() => zB(6396))).then((zB => {
              let {
                default: QB
              } = zB;
              this.HJ || jB !== this.graphCount || (this.layout = function(BB, jB, zB) {
                var QB, nB;
                const dB = new BB.graphlib.Graph;
                dB.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), dB.setDefaultEdgeLabel((() => ({})));
                const IB = new Set;
                for (const aB of jB) IB.add(aB.graphQuestId), dB.setNode(aB.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const NB = zB.filter((BB => IB.has(BB.graphFromId) && IB.has(BB.graphToId) && BB.graphFromId !== BB.graphToId)),
                  uB = new Map;
                for (const aB of [...NB].sort(((BB, jB) => Number("awaits" === BB.graphEdgeKind) - Number("awaits" === jB.graphEdgeKind)))) {
                  const BB = Rz(aB.graphFromId, aB.graphToId);
                  uB.has(BB) || (uB.set(BB, aB), dB.setEdge(aB.graphFromId, aB.graphToId))
                }
                BB.layout(dB);
                const UB = dB.graph();
                return {
                  width: Math.ceil(null !== (QB = UB.width) && void 0 !== QB ? QB : 0),
                  height: Math.ceil(null !== (nB = UB.height) && void 0 !== nB ? nB : 0),
                  nodes: jB.map((BB => {
                    var jB, zB;
                    const QB = dB.node(BB.graphQuestId);
                    return {
                      node: BB,
                      left: (null !== (jB = QB.x) && void 0 !== jB ? jB : 0) - 95,
                      top: (null !== (zB = QB.y) && void 0 !== zB ? zB : 0) - 26
                    }
                  })),
                  edges: NB.map((BB => {
                    var jB;
                    const zB = uB.get(Rz(BB.graphFromId, BB.graphToId)),
                      QB = null !== (jB = dB.edge(zB.graphFromId, zB.graphToId).points) && void 0 !== jB ? jB : [];
                    return {
                      edge: BB,
                      key: `${BB.graphFromId}|${BB.graphToId}|${BB.graphEdgeKind}`,
                      path: vz(zB.graphFromId === BB.graphFromId ? QB : [...QB].reverse())
                    }
                  })),
                  plans: new Map(jB.map((BB => [BB.graphQuestId, new Set([BB.graphQuestId, ...BB.graphPlanIds])])))
                }
              }(QB, BB.graphNodes, BB.graphEdges), this.show())
            })).catch((BB => {
              console.error("The quest graph could not be laid out", BB)
            }))
          }
      }
      resumeJump(BB) {
        const jB = this.storage.getItem(bz);
        this.storage.removeItem(bz), null === jB || jB.variation !== BB || this.now() - jB.departedAt > 6e4 || this.requestArrive(jB.questId, jB.completes)
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      dispose() {
        this.layout = null, this.hoveredId = null, super.dispose()
      }
      onClosed() {
        this.hoveredId = null
      }
      isEnabled() {
        return null !== this.layout
      }
      getPlan() {
        var BB, jB;
        return null !== (BB = null === this.hoveredId || null === (jB = this.layout) || void 0 === jB ? void 0 : jB.plans.get(this.hoveredId)) && void 0 !== BB ? BB : new Set
      }
      buildSnapshot() {
        const BB = this.layout;
        if (null === BB) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const jB = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: BB.width,
          height: BB.height,
          nodes: BB.nodes.map((BB => {
            let {
              node: zB,
              left: QB,
              top: nB
            } = BB;
            return {
              id: zB.graphQuestId,
              name: this.translate(zB.graphNameKey),
              detail: null === zB.graphGiverName ? zB.graphZoneId : `${zB.graphGiverName} \xb7 ${zB.graphZoneId}`,
              state: zB.graphState,
              left: QB,
              top: nB,
              inPlan: jB.has(zB.graphQuestId),
              hovered: zB.graphQuestId === this.hoveredId
            }
          })),
          edges: BB.edges.map((BB => {
            let {
              edge: zB,
              key: QB,
              path: nB
            } = BB;
            return {
              key: QB,
              kind: zB.graphEdgeKind,
              path: nB,
              inPlan: jB.has(zB.graphFromId) && jB.has(zB.graphToId)
            }
          })),
          planning: jB.size > 0
        }
      }
    }
    var BQ = zB(37139);
    const jQ = 250,
      zQ = 2150,
      QQ = -2.8,
      nQ = 2.2,
      dQ = -27,
      IQ = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      NQ = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      uQ = Math.round(50 + 1e3 * (NQ.delay + NQ.period / 2)),
      UQ = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      aQ = Array.from({
        length: 26
      }, ((BB, jB) => {
        const zB = 2.39996 * jB,
          QB = .5 + .618034 * jB % 1 * .23,
          nB = jB % 3 !== 2;
        return {
          rune: nB ? UQ[7 * jB % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(zB)*QB).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(zB)*QB).toFixed(3)})`,
            "--spin": 40 * (jB % 5 - 2) + "deg",
            "--size": (nB ? 1 + jB % 4 * .2 : .3 + jB % 2 * .15) + "rem",
            "--duration": `${(1.8+7*jB%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*jB%3).toFixed(2)}s`
          }
        }
      }));

    function pQ(BB, jB) {
      return Array.from({
        length: 30 + 3 * BB + (jB ? 10 : 0)
      }, ((BB, jB) => {
        const zB = jB < 4,
          QB = zB ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          nB = zB ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          dB = zB ? 2.2 : .6 + Math.random(),
          IB = zB ? .3 : Math.random() < .5 ? .16 : .24,
          NB = zB ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": QB,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${nB.toFixed(2)}rem`,
          "--length": `${dB.toFixed(2)}rem`,
          "--width": `${IB}rem`,
          "--duration": `${Math.round(NB)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function rQ(BB) {
      let {
        zeta: jB,
        period: zB
      } = BB;
      const QB = 2 * Math.PI / zB;
      return {
        w: QB,
        decay: jB * QB / Math.sqrt(1 - jB * jB)
      }
    }
    let sQ = !1;

    function JQ() {
      if (sQ) return;
      sQ = !0;
      const BB = document.createElement("style");
      BB.textContent = function() {
        const BB = rQ(IQ),
          jB = rQ(NQ),
          zB = jB => Math.exp(-BB.decay * jB) * Math.sin(BB.w * jB),
          QB = zB(Math.atan(BB.w / BB.decay) / BB.w),
          nB = .25,
          dB = 2.15,
          IB = Math.round(215),
          NB = [];
        for (let uB = 0; uB <= IB; uB++) {
          const BB = uB / IB * dB;
          let UB = Math.sin(Math.min(BB, nB) / nB * Math.PI / 2) ** 2,
            aB = 0,
            pB = 1,
            rB = 1 - .2 * UB,
            sB = 1;
          if (BB >= nB) {
            const IB = BB - nB,
              NB = Math.max(0, IB - .05);
            UB = Math.exp(-NB / .05), aB = zB(NB + IQ.lead * (1 - Math.exp(-NB / IQ.rush))) / QB;
            const uB = NB - NQ.delay,
              JB = uB <= 0 ? 0 : 1 - Math.exp(-jB.decay * uB) * (Math.cos(jB.w * uB) + jB.decay / jB.w * Math.sin(jB.w * uB)),
              mB = Math.max(0, (BB - 1.77) / (dB - 1.77));
            pB = (1 + (NQ.to - 1) * JB) * (1 + .08 * mB), rB = 1.1 + 1.5 * Math.exp(-IB / .07) + .3 * Math.exp(-(((1e3 * IB - uQ) / 100) ** 2)) + .8 * mB, sB = 1 - mB ** 1.5
          }
          const JB = .15 * UB + QQ * aB,
            mB = -.1 * UB + nQ * aB,
            yB = 3 * UB + dQ * aB;
          NB.push(`${(uB/IB*100).toFixed(3)}% { opacity: ${sB.toFixed(3)}; transform: translate(${JB.toFixed(3)}rem, ${mB.toFixed(3)}rem) rotate(${yB.toFixed(2)}deg) scale(${pB.toFixed(3)}); filter: brightness(${rB.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${NB.join(" ")} }`
      }(), document.head.append(BB)
    }
    const mQ = "skyblockForgeView",
      yQ = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class kQ extends pB {
      constructor(BB, jB, zB, QB, nB) {
        super(BB, zB, QB), this.translate = jB, this.requestForge = nB, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (BB, jB) => {
          var zB, QB;
          null !== this.forging || (null !== (zB = this.owned[(0, BQ.r)(jB, BB)]) && void 0 !== zB ? zB : 0) <= 0 || (this.selected[BB] = this.selected[BB] === jB ? null : jB, this.status = null, null === (QB = this.onPartSelected) || void 0 === QB || QB.call(this), this.emit())
        }, this.forge = BB => {
          var jB, zB;
          const QB = this.selectedParts();
          if (null === QB || this.isPending() || !this.open) return;
          const nB = (0, BQ.n)(QB);
          if (null === nB || nB.coalCost > this.coal) return;
          const dB = this.preview(nB),
            IB = null !== (jB = null === (zB = this.onForgeStarted) || void 0 === zB ? void 0 : zB.call(this, dB.tier, dB.named, BB)) && void 0 !== jB ? jB : () => {};
          if (this.dropArrival(), BB) {
            const BB = {
              id: ++this.forgeId,
              preview: dB,
              timers: [],
              stopSounds: IB,
              landed: !1,
              reply: null
            };
            BB.timers.push(setTimeout((() => {
              BB.landed = !0, null !== BB.reply && (this.apply(BB.reply), BB.reply = null, this.emit())
            }), jQ), setTimeout((() => {
              this.finishForge(BB)
            }), zQ)), this.forging = BB
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(QB)
        }, this.snapshot = this.buildSnapshot()
      }
      VJ(BB) {
        var jB;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.forgeMessageKind) return this.dropForge(), this.apply(BB), this.status = null, this.show(), void(null === (jB = this.onOpened) || void 0 === jB || jB.call(this));
        const zB = this.forging;
        if (null !== zB && null !== BB.forgeRefusalKey) this.dropForge();
        else if (null !== zB && !zB.landed) return void(zB.reply = BB);
        this.apply(BB), this.emit()
      }
      apply(BB) {
        if (this.owned = BB.forgeOwnedParts, this.coal = BB.forgeCoalOwned, this.keepSelectionOwned("open" === BB.forgeMessageKind), null !== BB.forgeForgedSwordId) {
          var jB;
          const zB = (0, BQ.n)(BB.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (jB = null === zB || void 0 === zB ? void 0 : zB.displayName) && void 0 !== jB ? jB : ""
            }
          }
        } else null !== BB.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: BB.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(BB) {
        var jB;
        this.forging = null;
        const zB = this.selectedParts(),
          QB = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: BB.id,
          sameSword: null !== zB && (null === (jB = (0, BQ.n)(zB)) || void 0 === jB ? void 0 : jB.displayName) === BB.preview.name,
          timer: QB
        }, this.emit()
      }
      dropForge() {
        const BB = this.forging;
        if (null !== BB) {
          this.forging = null;
          for (const jB of BB.timers) clearTimeout(jB);
          BB.stopSounds(), null !== BB.reply && this.apply(BB.reply)
        }
      }
      dropArrival() {
        null !== this.arriving && (clearTimeout(this.arriving.timer), this.arriving = null)
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        var BB, jB, zB;
        const QB = this.selectedParts(),
          nB = null === QB ? null : (0, BQ.n)(QB),
          dB = null !== (BB = null === (jB = this.forging) || void 0 === jB ? void 0 : jB.preview) && void 0 !== BB ? BB : null === nB ? null : this.preview(nB);
        return {
          enabled: this.received,
          open: this.open,
          slots: BQ.k.map((BB => ({
            kind: BB,
            label: this.translate(yQ[BB]),
            parts: this.partsFor(BB)
          }))),
          coalOwned: this.coal,
          preview: dB,
          unformedSword: BQ.j[null !== (zB = this.selected.Blade) && void 0 !== zB ? zB : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((BB => BB > 0)),
          canForge: null !== dB && !dB.coalShort && !this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          forging: null === this.forging ? null : {
            id: this.forging.id,
            preview: this.forging.preview
          },
          arriving: null === this.arriving ? null : {
            id: this.arriving.id,
            sameSword: this.arriving.sameSword
          }
        }
      }
      preview(BB) {
        return {
          name: BB.displayName,
          lore: BB.lore,
          baseSword: BB.baseSword,
          enchantmentTier: BB.enchantmentTier,
          tier: Number(BB.enchantmentTier.slice(-1)),
          named: BB.named,
          stats: this.stats(BB),
          effects: BB.effects,
          coalCost: BB.coalCost,
          coalShort: null === this.forging && BB.coalCost > this.coal
        }
      }
      partsFor(BB) {
        const jB = [];
        for (const QB of BQ.f) {
          var zB;
          const nB = (0, BQ.r)(QB, BB),
            dB = null !== (zB = this.owned[nB]) && void 0 !== zB ? zB : 0;
          dB > 0 && jB.push({
            material: QB,
            itemName: nB,
            owned: dB,
            selected: this.selected[BB] === QB,
            placeholder: !1
          })
        }
        if (0 === jB.length) {
          const zB = BQ.f[0];
          jB.push({
            material: zB,
            itemName: (0, BQ.r)(zB, BB),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return jB
      }
      stats(BB) {
        const jB = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${BB.powerMultiplier.toFixed(2)}`,
          better: BB.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${BB.damageMultiplier.toFixed(2)}`,
          better: BB.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/BB.cooldownMultiplier).toFixed(2)}`,
          better: BB.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${BB.knockbackMultiplier.toFixed(2)}`,
          better: BB.knockbackMultiplier > 1
        }];
        return BB.reachBonus > 0 && jB.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${BB.reachBonus.toFixed(1)}`,
          better: !0
        }), BB.damageReduction > 0 && jB.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*BB.damageReduction)}%`,
          better: !0
        }), jB
      }
      selectedParts() {
        const {
          Blade: BB,
          Guard: jB,
          Handle: zB
        } = this.selected;
        return null === BB || null === jB || null === zB ? null : {
          blade: BB,
          guard: jB,
          handle: zB
        }
      }
      keepSelectionOwned(BB) {
        for (const zB of BQ.k) {
          var jB;
          const QB = this.selected[zB];
          if (null !== QB && (null !== (jB = this.owned[(0, BQ.r)(QB, zB)]) && void 0 !== jB ? jB : 0) > 0) continue;
          if (!BB) {
            this.selected[zB] = null;
            continue
          }
          const nB = [...BQ.f].reverse().find((BB => {
            var jB;
            return (null !== (jB = this.owned[(0, BQ.r)(BB, zB)]) && void 0 !== jB ? jB : 0) > 0
          }));
          this.selected[zB] = null !== nB && void 0 !== nB ? nB : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const GQ = "skyblockSmugglerView",
      LQ = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class gQ extends pB {
      constructor(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, zB, QB), this.translate = jB, this.requestBuy = nB, this.now = dB, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = BB => BB, this.onBought = null, this.buy = BB => {
          const jB = this.deals[BB];
          void 0 !== jB && !this.isPending() && this.open && !this.soldOut.has(BB) && this.canAfford(jB) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, BB))
        }, this.snapshot = this.buildSnapshot()
      }
      VJ(BB) {
        if (this.received = !0, this.day = BB.smugglerDay, this.deals = BB.smugglerDeals, this.rivets = BB.smugglerRivetsOwned, this.crests = BB.smugglerCrestsOwned, this.soldOut = new Set(BB.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + BB.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = BB.smugglerBoughtSlot, null !== BB.smugglerBoughtSlot) {
          var jB, zB;
          const QB = this.deals[BB.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === QB ? "" : this.dealName(QB),
              amount: String(null !== (jB = null === QB || void 0 === QB ? void 0 : QB.smugglerDealAmount) && void 0 !== jB ? jB : 0)
            }
          }, this.boughtCount++, null === (zB = this.onBought) || void 0 === zB || zB.call(this)
        } else null !== BB.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: BB.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(BB, jB, zB) {
        this.translate = BB, void 0 !== zB && (this.itemName = zB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(BB) {
        if (null !== BB.smugglerDealUniqueName) return BB.smugglerDealUniqueName;
        const jB = LQ[BB.smugglerDealItem];
        return void 0 === jB ? this.itemName(BB.smugglerDealItem) : this.translate(jB)
      }
      canAfford(BB) {
        return BB.smugglerDealRivets <= this.rivets && BB.smugglerDealCrests <= this.crests
      }
      isPending() {
        return this.awaitingReply || null !== this.pacing
      }
      startCountdown() {
        this.stopCountdown(), this.countdown = setInterval((() => {
          this.emit()
        }), 15e3)
      }
      stopCountdown() {
        null !== this.countdown && (clearInterval(this.countdown), this.countdown = null)
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      rotatesText() {
        const BB = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return BB <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : BB < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(BB)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(BB / 60)),
          minutes: String(BB % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((BB, jB) => ({
            slot: jB,
            itemName: BB.smugglerDealItem,
            displayName: this.dealName(BB),
            enchantmentTier: BB.smugglerDealEnchantmentTier,
            amount: BB.smugglerDealAmount,
            rivets: BB.smugglerDealRivets,
            crests: BB.smugglerDealCrests,
            affordable: this.canAfford(BB),
            soldOut: this.soldOut.has(jB),
            justBought: this.boughtSlot === jB
          }))),
          rivetsOwned: this.rivets,
          crestsOwned: this.crests,
          rotatesText: this.received ? this.rotatesText() : "",
          pending: this.isPending(),
          status: null === this.status ? null : {
            tone: this.status.tone,
            text: this.translate(this.status.key, this.status.params)
          },
          boughtCount: this.boughtCount
        }
      }
      dispose() {
        this.received = !1, this.clearReplyTimeout(), this.stopCountdown(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const tQ = "skyblockPassageView",
      SQ = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function MQ(BB, jB) {
      return BB(SQ[jB])
    }

    function EQ(BB, jB, zB, QB) {
      const nB = Math.ceil((zB - QB) / 864e5),
        dB = MQ(BB, jB);
      return nB > 1 ? BB("skyblockGame:passageNextDays", {
        phase: dB,
        days: String(nB)
      }) : BB("skyblockGame:passageNextSoon", {
        phase: dB
      })
    }
    class iQ extends pB {
      constructor(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(BB, zB, QB), this.translate = jB, this.now = nB, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = BB => BB, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      VJ(BB) {
        this.message = BB, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(BB, jB, zB) {
        this.translate = BB, void 0 !== zB && (this.itemName = zB), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(BB) {
        return {
          itemName: BB.passageFish,
          displayName: this.itemName(BB.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(BB.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const BB = this.message;
        return null === BB ? {
          enabled: !1,
          open: !1,
          phase: "new",
          phaseName: "",
          visitors: [],
          resting: null,
          nextPhase: "waxing",
          next: ""
        } : {
          enabled: !0,
          open: this.open,
          phase: BB.passagePhase,
          phaseName: MQ(this.translate, BB.passagePhase),
          visitors: BB.passageVisitors.map((BB => this.describe(BB))),
          resting: this.describe(BB.passageResting),
          nextPhase: BB.passageNextPhase,
          next: EQ(this.translate, BB.passageNextPhase, BB.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var qQ = zB(38645);
    const fQ = "skyblockKeepersChairView";
    class oQ extends pB {
      constructor(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new qQ.b;
        super(BB, zB, QB), this.translate = jB, this.requestAim = nB, this.now = dB, this.pacer = IB, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = BB => BB, this.aim = BB => {
          !this.awaitingReply && this.open && this.atChair && BB !== this.favoured && (null === BB || this.islands.some((jB => jB.keepersChairIslandId === BB && jB.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== BB && void 0 !== BB ? BB : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = IB.subscribe((() => {
          this.emit()
        }))
      }
      VJ(BB) {
        var jB, zB;
        this.received = !0;
        const QB = this.favoured,
          nB = this.atChair;
        var dB;
        return this.islands = BB.keepersChairIslands, this.favoured = BB.keepersChairFavoured, this.passage = null !== (jB = BB.keepersChairPassage) && void 0 !== jB ? jB : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (zB = BB.keepersChairAtChair) || void 0 === zB || zB, "place" === BB.keepersChairMessageKind ? (!nB && this.atChair && "refused" === (null === (dB = this.status) || void 0 === dB ? void 0 : dB.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== BB.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: BB.keepersChairRefusalKey,
          island: null
        } : this.favoured !== QB && (this.status = null === this.favoured ? {
          tone: "aimed",
          key: "skyblockGame:keepersChairRestedStatus",
          island: null
        } : {
          tone: "aimed",
          key: "skyblockGame:keepersChairAimedStatus",
          island: this.favoured
        }, this.aimedCount++), this.emit()) : this.emit()))
      }
      isAtChair() {
        return this.atChair
      }
      receivePassage(BB) {
        this.received && (this.passage = BB, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(BB, jB, zB) {
        this.translate = BB, void 0 !== zB && (this.itemName = zB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.aimedCount = 0
      }
      isPending() {
        return this.awaitingReply || this.pacer.isPacing()
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      islandName(BB) {
        const jB = this.islands.find((jB => jB.keepersChairIslandId === BB));
        return void 0 === jB ? BB : this.translate(jB.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const BB = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          jB = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((BB => {
            const jB = BB.keepersChairFeaturedFish;
            return {
              id: BB.keepersChairIslandId,
              name: this.translate(BB.keepersChairIslandNameKey),
              relit: BB.keepersChairIslandRelit,
              featuredFish: null === jB ? null : {
                itemName: jB,
                displayName: this.itemName(jB)
              },
              favoured: BB.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === BB ? null : {
            tone: BB.tone,
            text: this.translate(BB.key, null === BB.island ? void 0 : {
              island: this.islandName(BB.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === jB ? null : {
            phase: jB.keepersChairPassagePhase,
            phaseName: MQ(this.translate, jB.keepersChairPassagePhase),
            nextPhase: jB.keepersChairPassageNextPhase,
            next: EQ(this.translate, jB.keepersChairPassageNextPhase, jB.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const HQ = "skyblockReachLogView",
      DQ = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      FQ = "Caught Fish",
      YQ = [1, 2, 4];

    function VQ(BB, jB) {
      return BB.map((BB => ({
        ...BB,
        reachLogPageFish: BB.reachLogPageFish.map((BB => ({
          ...BB,
          reachLogFishFresh: jB(BB)
        })))
      })))
    }
    class hQ extends pB {
      constructor(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new qQ.b;
        super(BB, zB, QB), this.translate = jB, this.requestOpen = nB, this.pacer = dB, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = BB => BB, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = BB => {
          this.pages.some((jB => jB.reachLogIslandId === BB)) && (this.selected = BB, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = dB.subscribe((() => {
          this.emit()
        }))
      }
      VJ(BB) {
        if (this.received = !0, "status" === BB.reachLogMessageKind) return !0 === BB.reachLogNews && this.markNews(), this.serverFresh = BB.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const jB = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== BB.reachLogMessageKind)
          if (this.pageViews = null, this.pages = VQ(BB.reachLogPages, (BB => BB.reachLogFishFresh || this.heldFresh.has(BB.reachLogFishItem))), this.letGoShown = BB.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, jB) this.showPages();
          else {
            for (const BB of this.pages)
              for (const jB of BB.reachLogPageFish) jB.reachLogFishFresh && this.heldFresh.add(jB.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(BB, jB, zB) {
        this.translate = BB, this.pageViews = null, void 0 !== zB && (this.itemName = zB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = VQ(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var BB, jB, zB, QB;
        const nB = this.pages.find((BB => BB.reachLogPageFish.some((BB => BB.reachLogFishFresh))));
        if (void 0 !== nB) return nB.reachLogIslandId;
        if (null !== this.selected && this.pages.some((BB => BB.reachLogIslandId === this.selected))) return this.selected;
        return null !== (BB = null !== (jB = null === (zB = this.pages.filter((BB => BB.reachLogIslandAwake)).at(-1)) || void 0 === zB ? void 0 : zB.reachLogIslandId) && void 0 !== jB ? jB : null === (QB = this.pages[0]) || void 0 === QB ? void 0 : QB.reachLogIslandId) && void 0 !== BB ? BB : null
      }
      markNews() {
        this.newsToken++, this.news = !0, this.clearNewsTimeout(), this.newsTimeout = setTimeout((() => {
          this.newsTimeout = null, this.news = !1, this.emit()
        }), 1200)
      }
      clearNewsTimeout() {
        null !== this.newsTimeout && (clearTimeout(this.newsTimeout), this.newsTimeout = null)
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          pending: this.awaitingReply || this.pacer.isPacing(),
          freshCount: this.serverFresh + this.heldFresh.size,
          news: this.news,
          newsToken: this.newsToken,
          selected: this.selected,
          letGoShown: this.letGoShown,
          pages: this.pageViews ??= this.buildPages()
        }
      }
      buildPages() {
        return this.pages.map((BB => {
          var jB;
          return {
            id: BB.reachLogIslandId,
            name: this.translate(BB.reachLogIslandNameKey),
            awake: BB.reachLogIslandAwake,
            gold: BB.reachLogPageGold,
            caught: BB.reachLogPageFish.filter((BB => BB.reachLogFishCaught && !BB.reachLogFishVisitor)).length,
            total: BB.reachLogPageFish.filter((BB => !BB.reachLogFishVisitor)).length,
            fish: BB.reachLogPageFish.map((BB => {
              const jB = BB.reachLogFishBestKg;
              return {
                itemName: BB.reachLogFishItem,
                name: BB.reachLogFishCaught ? this.itemName(BB.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: BB.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / BB.reachLogFishChance))
                }),
                best: BB.reachLogFishCaught ? null === jB ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: jB.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: BB.reachLogFishMarks,
                ribbons: YQ.map((jB => 0 !== (BB.reachLogFishRibbons & jB))),
                glimmer: 0 !== (8 & BB.reachLogFishRibbons),
                halo: 0 !== (32 & BB.reachLogFishRibbons),
                fresh: BB.reachLogFishFresh,
                visitor: BB.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (jB = BB.reachLogPageReturner) && void 0 !== jB ? jB : null)
          }
        }))
      }
      buildReturner(BB) {
        return null === BB ? null : {
          itemName: BB.reachLogReturnerFishItem,
          line: this.translate(BB.reachLogReturnerLineKey, {
            name: this.translate(BB.reachLogReturnerNameKey),
            trinket: this.translate(BB.reachLogReturnerTrinketKey)
          }),
          back: BB.reachLogReturnerBack
        }
      }
      receivePassagePhase(BB) {
        null !== this.passagePhase && this.passagePhase !== BB && (this.pagesCurrent = !1), this.passagePhase = BB
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const XQ = "skyblockLampLightView";
    class ZQ {
      constructor(BB, jB, zB, QB) {
        this.Ly = BB, this.translate = jB, this.requestCommand = zB, this.pacer = QB, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.HJ = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = BB => {
          BB ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = BB => {
          this.send(`buy ${BB}`)
        }, this.socket = BB => {
          this.send(`socket ${null!==BB&&void 0!==BB?BB:hB}`)
        }, this.wearTint = BB => {
          this.send(`tint ${null!==BB&&void 0!==BB?BB:hB}`)
        }, this.setSituation = BB => {
          this.situation = BB, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = QB.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = QB.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      VJ(BB) {
        if (this.message = BB, null !== BB.lampLightShop && (this.shop = BB.lampLightShop), "open" === BB.lampLightKind && (this.refusalKey = null), "reply" === BB.lampLightKind) {
          var jB;
          const nB = null !== (jB = BB.lampLightReplyTag) && void 0 !== jB ? jB : null,
            dB = null !== nB && nB === this.offTag;
          var zB, QB;
          if (dB ? this.settleOff() : null !== nB && nB !== this.awaitingTag || this.settleReply(), this.refusalKey = BB.lampLightRefusalKey, null !== BB.lampLightBought && !dB) this.sparkle = {
            id: BB.lampLightBought,
            count: (null !== (zB = null === (QB = this.sparkle) || void 0 === QB ? void 0 : QB.count) && void 0 !== zB ? zB : 0) + 1
          }
        }
        BB.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === BB.lampLightKind && (this.lastGained = BB.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(BB) {
        BB !== this.atChair && (this.atChair = BB, BB && (this.refusalKey = null), this.emit())
      }
      setTranslator(BB, jB) {
        this.translate = BB, this.locale = null !== jB && void 0 !== jB ? jB : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.HJ = !0
      }
      send(BB) {
        var jB;
        if (null !== this.awaitingTag || "ready" !== (null === (jB = this.message) || void 0 === jB ? void 0 : jB.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const zB = this.nextTag();
        this.awaitingTag = zB, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${BB} ${zB}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const BB = this.nextTag();
        this.offTag = BB, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${BB}`)
      }
      nextTag() {
        return this.lastTag = this.lastTag % 999999 + 1, this.lastTag
      }
      settleOff() {
        this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, null !== this.offTimeout && (clearTimeout(this.offTimeout), this.offTimeout = null)
      }
      settleReply() {
        this.awaitingTag = null, this.clearReplyTimeout()
      }
      isPending() {
        return null !== this.awaitingTag || this.offQueued || this.pacer.isPacing()
      }
      clearReplyTimeout() {
        null !== this.replyTimeout && (clearTimeout(this.replyTimeout), this.replyTimeout = null)
      }
      emit() {
        this.HJ || (this.snapshot = this.buildSnapshot(), this.Ly(this.snapshot))
      }
      formatLight(BB) {
        return Math.floor(BB).toLocaleString(this.locale)
      }
      formatPercent(BB) {
        const jB = 100 * BB;
        return jB >= 10 ? Math.round(jB).toLocaleString(this.locale) : jB.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(BB, jB) {
        if ("bite" === BB) return this.translate("skyblockGame:lampLightBite", {
          seconds: (jB.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === BB) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(jB.lampLightRareChance)
        });
        if ("notice" === BB) return null === jB.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(jB.lampLightNoticeChance)
        });
        const zB = "meter" === BB ? jB.lampLightMeterCatches : jB.lampLightBloomCatches;
        return null === zB ? null : this.translate("meter" === BB ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(zB))
        })
      }
      oddsLines(BB, jB) {
        const zB = (BB, jB) => {
            var zB;
            return null !== (zB = {
              bite: jB.lampLightBiteMs,
              rare: jB.lampLightRareChance,
              meter: jB.lampLightMeterCatches,
              bloom: jB.lampLightBloomCatches,
              notice: jB.lampLightNoticeChance
            } [BB]) && void 0 !== zB ? zB : 0
          },
          QB = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          nB = [];
        for (const dB of ["bite", "rare", "meter", "bloom", "notice"]) {
          const IB = this.formatOdds(dB, BB),
            NB = this.formatOdds(dB, jB);
          if (null === IB || null === NB || "bite" !== dB && "rare" !== dB && IB === NB) continue;
          const uB = zB(dB, jB) - zB(dB, BB),
            UB = QB[dB] ? uB < 0 : uB > 0;
          nB.push({
            label: dB,
            before: IB,
            after: NB,
            tone: IB === NB ? "same" : UB ? "better" : "worse"
          })
        }
        return nB
      }
      charmView(BB, jB, zB) {
        const QB = BB.lampLightCharmId.charAt(0).toUpperCase() + BB.lampLightCharmId.slice(1),
          nB = "bloom" === this.situation;
        return {
          id: BB.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${QB}`),
          effect: this.translate(`skyblockGame:lampLightCharm${QB}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(BB.lampLightCharmCost)
          }),
          owned: BB.lampLightCharmOwned,
          affordable: zB >= BB.lampLightCharmCost,
          socketed: jB.lampLightSocketed === BB.lampLightCharmId,
          lines: this.oddsLines(nB ? jB.lampLightBareBloom : jB.lampLightBareOpen, nB ? BB.lampLightCharmBloom : BB.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var BB, jB, zB, QB;
        const nB = this.message,
          dB = "ready" === (null === nB || void 0 === nB ? void 0 : nB.lampLightStatus) ? this.shop : null,
          IB = null !== (BB = null === nB || void 0 === nB ? void 0 : nB.lampLightBalance) && void 0 !== BB ? BB : 0,
          NB = this.atChair,
          uB = "loading" === (null === nB || void 0 === nB ? void 0 : nB.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === nB || void 0 === nB ? void 0 : nB.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          UB = "ready" !== (null === nB || void 0 === nB ? void 0 : nB.lampLightStatus) || NB ? null !== (jB = this.refusalKey) && void 0 !== jB ? jB : uB : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== nB && "locked" !== nB.lampLightStatus,
          status: null !== (zB = null === nB || void 0 === nB ? void 0 : nB.lampLightStatus) && void 0 !== zB ? zB : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(IB)
          }),
          releasing: null !== (QB = null === nB || void 0 === nB ? void 0 : nB.lampLightReleasing) && void 0 !== QB && QB,
          gained: null === nB || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === nB || void 0 === nB ? void 0 : nB.lampLightStatus) && NB && !this.isPending(),
          situation: this.situation,
          shop: null === dB ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: dB.lampLightOddsRod,
              island: this.translate(dB.lampLightIslandNameKey)
            }),
            heldRod: null !== dB.lampLightHeldRod,
            charms: dB.lampLightCharms.map((BB => this.charmView(BB, dB, IB))),
            tints: dB.lampLightTints.map((BB => {
              const jB = BB.lampLightTintId,
                [zB, QB, nB] = BB.lampLightTintColour;
              return {
                id: jB,
                name: this.translate(`skyblockGame:lampLightTint${jB.charAt(0).toUpperCase()}${jB.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(BB.lampLightTintCost)
                }),
                owned: BB.lampLightTintOwned,
                affordable: IB >= BB.lampLightTintCost,
                wearing: dB.lampLightTint === jB,
                colour: `rgb(${zB}, ${QB}, ${nB})`
              }
            })),
            wearingIslandColours: null === dB.lampLightTint
          },
          notice: null === UB ? null : this.translate(UB),
          sparkle: this.sparkle
        }
      }
    }
    const AQ = "skyblockMagmawardView";
    class TQ {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Ly = BB, this.now = jB, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = eB.map((() => 0)), this.wornAt = eB.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      VJ(BB) {
        var jB, zB;
        const QB = eB.map(((jB, zB) => !0 === BB.magmawardPiecesWorn[zB]));
        if (!QB.includes(!0)) return this.snapshot = null, void this.Ly(null);
        const nB = this.now(),
          dB = this.snapshot;
        null === dB && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const IB = BB.magmawardFuelCarried,
          NB = !QB.includes(!1);
        let uB = null !== (jB = null === dB || void 0 === dB ? void 0 : dB.pulse) && void 0 !== jB ? jB : null,
          UB = null !== (zB = null === dB || void 0 === dB ? void 0 : dB.flare) && void 0 !== zB ? zB : null;
        BB.magmawardFuelBurned ? (uB = "burn", UB = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = nB, this.flareAt = nB) : null !== dB && IB > dB.fuel && (uB = "gain", this.pulseToken++, this.pulseAt = nB), NB && null !== dB && !dB.fullSet && (UB = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = nB, this.setLitAt = nB);
        const aB = eB.map(((BB, jB) => (QB[jB] && null !== dB && !dB.pieces[jB].worn && (this.wornTokens[jB]++, this.wornAt[jB] = nB), {
          itemName: BB,
          worn: QB[jB],
          wornToken: this.wornTokens[jB],
          justWorn: QB[jB] && this.isPlaying(this.wornAt[jB], nB)
        })));
        this.snapshot = {
          pieces: aB,
          wornCount: QB.filter(Boolean).length,
          fullSet: NB,
          fuel: IB,
          fuelState: IB <= 0 ? "empty" : IB <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, nB) ? uB : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, nB) ? UB : null,
          flareToken: this.flareToken,
          setLit: NB && this.isPlaying(this.setLitAt, nB),
          setLitToken: this.setLitToken
        }, this.Ly(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Ly(null)
      }
      isPlaying(BB, jB) {
        return jB - BB < 1200
      }
    }
    const PQ = "skyblockGlowtideView";
    class WQ {
      constructor(BB) {
        this.Ly = BB, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = BB => {
          this.arrow = BB, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      VJ(BB) {
        this.bloom = BB.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Ly(null))
      }
      afterRender(BB, jB) {
        const zB = this.bloom;
        if (null === zB || null === BB) return;
        const QB = zB.glowtideBloomX - BB[0],
          dB = zB.glowtideBloomZ - BB[2],
          IB = Math.hypot(QB, dB),
          NB = this.snapshot,
          uB = null !== NB && void 0 !== NB && NB.inRange ? 1 : 0,
          UB = IB <= 12.5 + uB && BB[1] - zB.glowtideBloomY <= 10 + uB;
        !UB || null !== NB && void 0 !== NB && NB.inRange || this.inRangeToken++;
        const aB = {
          colour: zB.glowtideBloomColour,
          inRange: UB,
          distance: Math.round(IB),
          inRangeToken: this.inRangeToken
        };
        (null === NB || aB.colour !== NB.colour || aB.inRange !== NB.inRange || !UB && aB.distance !== NB.distance) && (this.snapshot = aB, this.Ly(aB));
        const pB = nB.b.computeShortestRotation(jB, (0, nB.Bb)([QB, 0, dB]));
        null === this.arrow || Math.abs(pB - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${pB}rad)`, this.arrowTurn = pB)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Ly(null)
      }
    }
    const eQ = "skyblockGlowMeterView";
    class lQ {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Ly = BB, this.now = jB, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      VJ(BB) {
        const jB = this.now(),
          {
            glowMeterFill: zB,
            glowMeterCapacity: QB
          } = BB,
          nB = zB >= QB,
          dB = this.snapshot;
        null !== dB && (nB && !dB.full && (this.fullToken++, this.fullAt = jB), dB.full && !nB ? (this.burstToken++, this.burstAt = jB) : zB > dB.fill && (this.gainToken++, this.gainAt = jB)), this.snapshot = {
          fill: zB,
          Ep: QB,
          ratio: Math.min(1, Math.max(0, zB / QB)),
          full: nB,
          rares: BB.glowMeterRares,
          ready: nB && this.isPlaying(this.fullAt, jB),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, jB),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, jB),
          gainToken: this.gainToken
        }, this.Ly(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Ly(null)
      }
      isPlaying(BB, jB) {
        return jB - BB < 2e3
      }
    }
    const wQ = "skyblockHushWaitView";
    class xQ {
      constructor(BB) {
        this.Ly = BB, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      VJ(BB) {
        let {
          hushWaitMs: jB,
          hushWaitTotalMs: zB,
          hushWaitLines: QB
        } = BB;
        if (this.clearTimers(), this.token++, 0 === QB.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (jB <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: QB[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const nB = Math.max(null !== zB && void 0 !== zB ? zB : jB, jB),
          dB = nB - jB,
          IB = BB => nB * BB / QB.length,
          NB = BB => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: nB,
              elapsedMs: dB,
              line: QB[BB],
              lineIndex: BB
            })
          };
        let uB = 0;
        for (; uB + 1 < QB.length && IB(uB + 1) <= dB;) uB++;
        NB(uB);
        for (let UB = uB + 1; UB < QB.length; UB++) this.later(IB(UB) - dB, (() => {
          NB(UB)
        }));
        this.later(jB, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(BB) {
        this.snapshot = BB, this.Ly(BB)
      }
      later(BB, jB) {
        this.timers.push(setTimeout(jB, BB))
      }
      clearTimers() {
        for (const BB of this.timers) clearTimeout(BB);
        this.timers = []
      }
    }
    const KQ = "skyblockTideChartsView",
      CQ = 36e5,
      cQ = 864e5;

    function bQ(BB, jB, zB) {
      const [QB, nB, dB, IB] = BB.tideChartArea, NB = Math.floor(jB), uB = Math.floor(zB);
      return NB >= QB && NB <= dB && uB >= nB && uB <= IB
    }

    function vQ(BB, jB, zB) {
      const [QB, nB, dB, IB] = BB.tideChartWater;
      return function(BB, jB, zB, QB, nB, dB) {
        const IB = 4 - lB(Math.floor(nB) - (BB - zB), zB);
        return 5 * lB(Math.floor(dB) - (jB - QB), QB) + IB
      }(QB, nB, dB, IB, jB, zB)
    }

    function RQ(BB, jB, zB) {
      const QB = BB.tideCharts;
      for (let nB = 0; nB < QB.length; nB++)
        if (bQ(QB[nB], jB, zB)) return QB[nB];
      return null
    }

    function OQ(BB, jB, zB) {
      const QB = Math.max(0, jB - zB);
      return QB > cQ ? BB("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(QB / cQ))
      }) : QB > CQ ? BB("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(QB / CQ))
      }) : BB("skyblockGame:tideChartsTurnSoon")
    }
    class Bn extends pB {
      constructor(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(BB, zB, QB), this.translate = jB, this.now = nB, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.zs = BB => {
          this.picked = BB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      VJ(BB) {
        const jB = this.message;
        if (null !== jB)
          for (const QB of BB.tideCharts) {
            var zB;
            const BB = jB.tideCharts.find((BB => BB.tideChartIsland === QB.tideChartIsland)),
              nB = QB.tideChartLit & ~(null !== (zB = null === BB || void 0 === BB ? void 0 : BB.tideChartLit) && void 0 !== zB ? zB : 0);
            void 0 !== BB && 0 !== nB && (this.pulse = {
              island: QB.tideChartIsland,
              cells: nB,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = BB, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(BB, jB) {
        var zB;
        const QB = null === this.message || Number.isNaN(BB) ? null : RQ(this.message, BB, jB),
          nB = null !== (zB = null === QB || void 0 === QB ? void 0 : QB.tideChartIsland) && void 0 !== zB ? zB : null,
          dB = null === QB ? -1 : function(BB, jB, zB) {
            const [QB, nB, dB, IB] = BB.tideChartWater;
            return function(BB, jB, zB, QB, nB, dB, IB) {
              return ((nB - BB) / (zB + IB)) ** 2 + ((dB - jB) / (QB + IB)) ** 2 <= 1
            }(QB, nB, dB, IB, jB, zB, 2) ? vQ(BB, jB, zB) : -1
          }(QB, BB, jB);
        return (nB !== this.hereIsland || dB !== this.hereCell) && (this.hereIsland = nB, this.hereCell = dB, null !== nB && (this.lastIsland = nB), !0)
      }
      afterRender(BB) {
        if (null === this.message) return;
        this.lastX = null === BB ? Number.NaN : BB[0], this.lastZ = null === BB ? Number.NaN : BB[2];
        const jB = this.locate(this.lastX, this.lastZ),
          zB = this.expirePulses();
        (jB || zB || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const BB = this.now();
        return !(!this.open || BB - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = BB, OQ(this.translate, this.message.tideChartTurnsInMs, BB - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(BB, jB) {
        const zB = null === this.message ? null : RQ(this.message, BB, jB);
        if (null === zB) return;
        const QB = vQ(zB, BB, jB);
        0 === (zB.tideChartPreBlank & 1 << QB) && (this.cast = {
          island: zB.tideChartIsland,
          cell: QB,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const BB = this.now();
        let jB = !1;
        return 0 !== this.pulse.cells && BB - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, jB = !0), null !== this.cast && BB - this.cast.atMs >= 1500 && (this.cast = null, jB = !0), jB
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(BB, jB) {
        var zB;
        return null !== (zB = BB.tideCharts.find((BB => BB.tideChartIsland === jB))) && void 0 !== zB ? zB : null
      }
      describe(BB) {
        var jB, zB, QB;
        const nB = BB.tideChartIsland,
          dB = [];
        for (let sB = 0; sB < 25; sB++) {
          const jB = 1 << sB;
          0 !== (BB.tideChartLit & jB) ? dB.push("lit") : 0 !== (BB.tideChartClear & jB) ? dB.push("clear") : 0 !== (BB.tideChartPreBlank & jB) ? dB.push("shore") : dB.push("water")
        }
        const IB = function(BB) {
            let jB = 0;
            for (let zB = BB >>> 0; 0 !== zB; zB &= zB - 1) jB++;
            return jB
          }(BB.tideChartLit),
          NB = BB.tideChartInkCount,
          uB = this.translate(BB.tideChartIslandNameKey),
          UB = this.translate("skyblockGame:tideChartsLit", {
            lit: String(IB),
            ink: String(NB)
          }),
          aB = null === BB.tideChartPictureNameKey ? null : this.translate(BB.tideChartPictureNameKey),
          pB = this.hereIsland === nB && -1 !== this.hereCell ? this.hereCell : null,
          rB = [`${uB}: ${UB}.`];
        if (null !== aB && rB.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: aB
          })), null !== pB) {
          const BB = Math.floor(pB / 5) + 1,
            jB = pB % 5 + 1;
          rB.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(BB),
            column: String(jB)
          }))
        }
        return {
          island: nB,
          islandName: uB,
          cells: dB,
          hereCell: pB,
          lit: IB,
          ink: NB,
          litText: UB,
          pictureName: aB,
          gridLabel: rB.join(" "),
          pulseCells: this.pulse.island === nB ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (jB = this.cast) || void 0 === jB ? void 0 : jB.island) === nB ? this.cast.cell : null,
          castToken: null !== (zB = null === (QB = this.cast) || void 0 === QB ? void 0 : QB.token) && void 0 !== zB ? zB : 0
        }
      }
      buildSnapshot() {
        var BB, jB, zB;
        const QB = this.message;
        if (null === QB || 0 === QB.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const nB = this.findChart(QB, this.hereIsland),
          dB = null !== (BB = null !== (jB = null !== (zB = this.findChart(QB, this.open ? this.picked : null)) && void 0 !== zB ? zB : nB) && void 0 !== jB ? jB : this.findChart(QB, this.lastIsland)) && void 0 !== BB ? BB : QB.tideCharts[0],
          IB = null === nB ? null : this.describe(nB);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: IB,
          card: dB === nB ? IB : this.describe(dB),
          turnsText: OQ(this.translate, QB.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(QB.tideChartBookCount)
          }),
          tabs: QB.tideCharts.map((BB => ({
            island: BB.tideChartIsland,
            name: this.translate(BB.tideChartIslandNameKey),
            selected: BB.tideChartIsland === dB.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const jn = "skyblockRegularsView",
      zn = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Qn = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function nn(BB, jB) {
      return "given" === BB ? jB.given : "owed" === BB ? jB.owed : jB.goal
    }
    class dn extends pB {
      constructor(BB, jB, zB, QB) {
        super(BB, zB, QB), this.translate = jB, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = BB => BB, this.openIsland = BB => {
          this.selected = BB, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = BB => {
          this.selected = BB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      VJ(BB) {
        this.message = BB, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const BB = this.openedFromReachLog;
        return this.openedFromReachLog = !1, BB
      }
      setTranslator(BB, jB, zB) {
        this.translate = BB, void 0 !== zB && (this.itemName = zB), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(BB, jB, zB) {
        return {
          text: this.translate(nn(BB, jB), zB),
          given: "given" === BB
        }
      }
      describeRegular(BB, jB) {
        const zB = this.translate,
          QB = null !== BB.regularKg,
          nB = BB.regularMeetings,
          dB = QB ? 0 === nB ? zB("skyblockGame:regularsNotMet") : 1 === nB ? zB("skyblockGame:regularsMeetingsOne") : zB("skyblockGame:regularsMeetings", {
            count: nB
          }) : "";
        return {
          id: BB.regularId,
          name: zB(BB.regularNameKey),
          line: zB(BB.regularLineKey),
          itemName: BB.regularFishItem,
          fishName: this.itemName(BB.regularFishItem),
          tagged: QB,
          size: null === BB.regularKg ? zB("skyblockGame:regularsNotTagged") : zB("skyblockGame:regularsSize", {
            kg: BB.regularKg.toFixed(1)
          }),
          meetings: dB,
          chance: zB("skyblockGame:regularsChance", {
            count: BB.regularOneInCasts
          }),
          resting: BB.regularRestingToday,
          gifts: [{
            text: zB("skyblockGame:regularsGiftFlare"),
            given: nB >= 3
          }, this.describeGift(BB.regularTintGift, zn, {
            tint: zB(BB.regularTintNameKey)
          })],
          history: [...BB.regularHistory].reverse().map((BB => {
            const QB = BB.regularMeetingKg.toFixed(1),
              nB = jB - BB.regularMeetingDay;
            return nB <= 0 ? zB("skyblockGame:regularsToday", {
              kg: QB
            }) : zB("skyblockGame:regularsDaysAgo", {
              days: nB,
              kg: QB
            })
          }))
        }
      }
      describeIsland(BB, jB) {
        return {
          id: BB.regularsIslandId,
          name: this.translate(BB.regularsIslandNameKey),
          charm: this.describeGift(BB.regularsCharmGift, Qn, {
            charm: this.translate(BB.regularsCharmNameKey)
          }),
          regulars: BB.regularsList.map((BB => this.describeRegular(BB, jB)))
        }
      }
      buildSnapshot() {
        var BB, jB, zB, QB;
        const nB = this.message;
        if (null === nB) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const dB = nB.regularsIslands.map((BB => this.describeIsland(BB, nB.regularsToday))),
          IB = null !== (BB = null !== (jB = null === (zB = dB.find((BB => BB.id === this.selected))) || void 0 === zB ? void 0 : zB.id) && void 0 !== jB ? jB : null === (QB = dB[0]) || void 0 === QB ? void 0 : QB.id) && void 0 !== BB ? BB : "";
        return {
          enabled: !0,
          open: this.open,
          selected: IB,
          islands: dB
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const In = "skyblockHiddenWatersView";
    class Nn {
      constructor(BB) {
        this.Ly = BB, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      VJ(BB) {
        this.snapshot = function(BB) {
          const [jB, zB] = BB.hiddenWatersMapSize, QB = (BB, QB) => ({
            left: 1 - BB / jB,
            top: QB / zB
          }), nB = new Map;
          for (const [IB, NB] of BB.hiddenWatersGlimpses) {
            var dB;
            const BB = null !== (dB = nB.get(IB)) && void 0 !== dB ? dB : [];
            BB.push(NB), nB.set(IB, BB)
          }
          return {
            found: BB.hiddenWatersFound,
            total: BB.hiddenWatersTotal,
            aspect: zB / jB,
            pins: BB.hiddenWatersPins.map((BB => {
              let [jB, zB] = BB;
              return QB(jB, zB)
            })),
            islands: BB.hiddenWatersIslands.map((BB => {
              let [nB, dB, IB, NB] = BB;
              const {
                left: uB,
                top: UB
              } = QB(IB + 1, dB);
              return {
                left: uB,
                top: UB,
                width: (IB + 1 - nB) / jB,
                height: (NB + 1 - dB) / zB
              }
            })),
            glimpses: nB
          }
        }(BB), this.Ly(this.snapshot)
      }
    }
    const un = "skyblockDialogueView";
    class Un extends pB {
      constructor(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, zB, QB), this.translate = jB, this.requestDialogue = nB, this.now = dB, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = BB => {
          this.selection = {
            kind: "quest",
            questId: BB
          }, this.request(), this.show()
        }, this.selectCharacter = BB => {
          this.selection = {
            kind: "character",
            npcId: BB
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      VJ(BB) {
        this.received = !0, this.scripts = BB.questDialogueScripts, this.speakers = new Map(BB.questDialogueSpeakers.map((BB => [BB.dialogueSpeakerId, BB]))), this.emit()
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const BB = this.now();
        BB >= this.requestAvailableAt && (this.requestAvailableAt = BB + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var BB;
        const jB = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...jB,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const zB = this.selection;
        if ("quest" === zB.kind) {
          const BB = this.scripts.find((BB => BB.dialogueQuestId === zB.questId));
          return {
            ...jB,
            characters: [],
            questFocus: zB.questId,
            conversations: BB ? [this.conversation(BB)] : []
          }
        }
        const QB = [];
        for (let dB = this.scripts.length - 1; dB >= 0; dB--) {
          const BB = this.scripts[dB].dialogueLines;
          for (let jB = BB.length - 1; jB >= 0; jB--) QB.includes(BB[jB].dialogueSpeakerId) || QB.push(BB[jB].dialogueSpeakerId)
        }
        const nB = null !== zB.npcId && QB.includes(zB.npcId) ? zB.npcId : null !== (BB = QB[0]) && void 0 !== BB ? BB : null;
        return {
          ...jB,
          characters: QB.map((BB => {
            var jB, zB;
            return {
              id: BB,
              styling: null !== (jB = null === (zB = this.speakers.get(BB)) || void 0 === zB ? void 0 : zB.dialogueSpeakerStyling) && void 0 !== jB ? jB : BB,
              selected: BB === nB
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((BB => BB.dialogueLines.some((BB => BB.dialogueSpeakerId === nB)))).map((BB => this.conversation(BB))).reverse()
        }
      }
      conversation(BB) {
        let jB = null;
        return {
          questId: BB.dialogueQuestId,
          questName: this.translate(BB.dialogueQuestNameKey),
          completed: BB.dialogueQuestCompleted,
          lines: BB.dialogueLines.map(((BB, zB) => {
            var QB;
            const nB = BB.dialogueSpeakerId === jB || null === (QB = this.speakers.get(BB.dialogueSpeakerId)) || void 0 === QB ? void 0 : QB.dialogueSpeakerStyling;
            return jB = BB.dialogueSpeakerId, {
              key: zB,
              display: {
                line: {
                  translationKey: BB.dialogueLineKey,
                  params: this.params(BB.dialogueLineParams)
                },
                speakerName: nB,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(BB) {
        if (void 0 !== BB) return Object.fromEntries(Object.entries(BB).map((BB => {
          let [jB, zB] = BB;
          return [jB, "string" === typeof zB ? zB : this.translate(zB.translationKey)]
        })))
      }
    }
    var an = zB(635),
      pn = zB(1297),
      rn = zB(106);
    const sn = "skyblockAutographsView";

    function Jn(BB) {
      const jB = an.h[BB];
      return {
        label: jB.chatTag.map((BB => BB.str)).join(""),
        icon: jB.icon,
        colour: jB.mainRGB
      }
    }
    class mn extends pB {
      constructor(BB) {
        let jB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = jB, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      VJ(BB) {
        this.signatures = BB.autographSignatures, BB.autographOpen ? this.show() : this.emit()
      }
      setTranslator(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = jB, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var BB;
        const jB = null !== (BB = this.signatures) && void 0 !== BB ? BB : [],
          zB = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          QB = [...jB].sort(((BB, jB) => Number(null !== jB.autographRank) - Number(null !== BB.autographRank) || jB.autographSignedAtMs - BB.autographSignedAtMs)).map((BB => ({
            key: `${BB.autographSignedAtMs}|${BB.autographSignerName}`,
            name: (0, pn.d)(BB.autographSignerName, !rn.featureFlags.canSeeRealPlayerNames),
            rank: null === BB.autographRank ? null : Jn(BB.autographRank),
            signedOn: zB.format(BB.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: QB,
          total: QB.length,
          rankTotal: QB.filter((BB => null !== BB.rank)).length
        }
      }
    }
    const yn = "skyblockHudView",
      kn = () => {},
      Gn = {
        getItem: () => null,
        setItem: kn,
        removeItem: kn
      };
    class Ln {
      constructor(BB) {
        let {
          translate: jB,
          translateWithIcons: zB,
          setMenuOpen: QB = kn,
          dismissMenu: nB = () => {
            QB(!1)
          },
          publishSkills: dB = kn,
          publishQuests: IB = kn,
          publishQuestNotification: NB = kn,
          publishDungeons: uB = kn,
          publishCollections: UB = kn,
          publishMap: aB = kn,
          publishHud: pB = kn,
          publishPortalTransit: rB = kn,
          publishDailyReward: JB = kn,
          publishMailbox: mB = kn,
          publishQuestGraph: yB = kn,
          publishForge: kB = kn,
          publishSmuggler: GB = kn,
          publishKeepersChair: LB = kn,
          publishReachLog: gB = kn,
          publishLampLight: tB = kn,
          publishMagmaward: SB = kn,
          publishGlowtide: EB = kn,
          publishGlowMeter: iB = kn,
          publishHushWait: qB = kn,
          publishPassage: fB = kn,
          publishTideCharts: oB = kn,
          publishRegulars: HB = kn,
          publishHiddenWaters: DB = kn,
          publishDialogue: FB = kn,
          publishAutographs: YB = kn,
          isLoadingScreenUp: VB = () => !1,
          onDailyRewardCoinLanded: hB = kn,
          onDailyRewardStarted: XB = kn,
          onDailyRewardFinished: ZB = kn,
          onDailyRewardItemLanded: AB = kn,
          onMailboxStarted: TB = kn,
          journeyStorage: PB = Gn,
          requestTracking: WB = kn,
          requestTravel: eB = kn,
          requestDungeonEnter: lB = kn,
          requestQuestJump: wB = kn,
          requestQuestArrive: xB = kn,
          requestForge: KB = kn,
          requestSmuggle: CB = kn,
          requestKeepersChairAim: cB = kn,
          requestReachLogOpen: bB = kn,
          requestLampLight: vB = kn,
          requestDialogue: RB = kn
        } = BB;
        this.navigation = void 0, this.map = void 0, this.compass = new MB, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new qQ.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = BB => BB, this.close = () => {
          for (const BB of this.panels) BB.close()
        }, this.setMenuOpen = QB, this.publishHud = pB, this.portalTransit = new Pz(rB, PB), this.magmaward = new TQ(SB), this.glowtide = new WQ(EB), this.glowMeter = new lQ(iB), this.hushWait = new xQ(qB), this.dailyReward = new lz(JB, (() => VB() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (BB => {
          this.quests.setNotificationsHeld(BB)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), hB, XB, ZB, AB);
        const OB = BB => {
          this.panels.some((BB => BB.isOpen())) || (BB ? nB() : this.setMenuOpen(!1))
        };
        this.skills = new Nz(dB, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), jB, void 0, void 0, OB), this.quests = new rz(IB, WB, jB, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, OB, NB), this.dungeons = new mz(uB, jB, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, OB, lB), this.collections = new Zz(UB, jB, (() => {
          this.beforePanelOpen(this.collections)
        }), OB), this.map = new sB(aB, eB, jB, (() => {
          this.beforePanelOpen(this.map)
        }), OB), this.questGraph = new Oz(yB, jB, (() => {
          this.beforePanelOpen(this.questGraph)
        }), OB, wB, xB, PB), this.forge = new kQ(kB, jB, (() => {
          this.beforePanelOpen(this.forge)
        }), OB, KB), this.smuggler = new gQ(GB, jB, (() => {
          this.beforePanelOpen(this.smuggler)
        }), OB, CB), this.lampLight = new ZQ(tB, jB, vB, this.commandPacer), this.keepersChair = new oQ(LB, jB, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (BB => {
          this.lampLight.onChairClosed(), OB(BB)
        }), cB, Date.now, this.commandPacer), this.reachLog = new hQ(gB, jB, (() => {
          this.beforePanelOpen(this.reachLog)
        }), OB, bB, this.commandPacer), this.passage = new iQ(fB, jB, (() => {
          this.beforePanelOpen(this.passage)
        }), OB), this.tideCharts = new Bn(oB, jB, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), OB), this.regulars = new dn(HB, jB, (() => {
          this.beforePanelOpen(this.regulars)
        }), (BB => {
          this.regulars.takeReturnToReachLog() && !BB && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), OB(BB)
        })), this.hiddenWaters = new Nn(DB), this.dialogue = new Un(FB, jB, (() => {
          this.beforePanelOpen(this.dialogue)
        }), OB, RB), this.autographs = new mn(YB, (() => {
          this.beforePanelOpen(this.autographs)
        }), OB), this.mailbox = new Cz(mB, (() => VB() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), TB), this.quests.translateWithIcons = null !== zB && void 0 !== zB ? zB : null, this.skills.onLevelUp = BB => {
          this.quests.notify(BB)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new dz(this.map, this.quests, this.compass, jB)
      }
      getHudSnapshot() {
        const BB = this.hudSnapshot,
          jB = this.dailyReward.getHeldCoins();
        return null === BB || jB <= 0 || !("hudPurseCoins" in BB) ? BB : {
          ...BB,
          hudPurseCoins: Math.max(0, BB.hudPurseCoins - jB)
        }
      }
      receiveHud(BB) {
        this.hudSnapshot = BB, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(BB) {
        this.setMenuOpen(!0);
        const jB = BB === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = BB;
        for (const zB of this.panels) zB === BB || jB && zB === this.reachLog || zB.close();
        this.openingPanel = null
      }
      setTranslator(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : jB => this.resolveItemName(jB, BB);
        this.quests.translateWithIcons = null !== zB && void 0 !== zB ? zB : null, this.navigation.setTranslator(BB, jB), this.lampLight.setTranslator(BB, jB), this.mailbox.setItemName(QB);
        for (const nB of this.panels) nB.setTranslator(BB, jB, QB)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const BB of this.panels) BB.dispose()
      }
    }
    var gn = zB(1091),
      tn = zB.n(gn),
      Sn = zB(28),
      Mn = zB(36677),
      En = zB(3517),
      qn = zB(1971),
      fn = zB(1952),
      Hn = zB(34270),
      Dn = zB(1240),
      Fn = zB(1471),
      Yn = zB(1148);

    function Vn(BB) {
      let {
        controller: jB,
        minimap: zB,
        children: QB
      } = BB;
      const dB = (0, Fn.h)(yn, jB.getHudSnapshot()),
        [IB, NB] = (0, iB.useState)(jB.skills.getSnapshot().overallLevel);
      (0, Fn.f)(Iz, (BB => {
        NB(BB.overallLevel)
      }));
      const uB = (0, iB.useRef)(null);
      (0, Fn.f)(ez, (BB => {
        ! function(BB, jB) {
          if (null === BB || "function" !== typeof BB.animate) return;
          const zB = jB ? 1.35 : 1.15;
          BB.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${zB})`
          }, {
            transform: "scale(1)"
          }], {
            duration: jB ? 320 : 160,
            easing: "ease-out"
          }), BB.classList.toggle("Receiving", !jB), jB && (BB.classList.remove("Shine"), BB.offsetWidth, BB.classList.add("Shine"))
        }(uB.current, BB)
      }));
      const {
        t: UB
      } = (0, Dn.D)(), {
        isTouchScreen: aB
      } = (0, Sn.m)(["isTouchScreen"]), [pB, rB] = (0, iB.useState)(null);
      return (0, En.e)(pB, ".SkyblockRightHud"), null !== dB || zB ? (0, Yn.jsx)(Mn.e, {
        placement: "topRight",
        children: (0, Yn.jsxs)("div", {
          className: tn()("SkyblockRightHud", {
            TouchScreen: aB
          }),
          children: [zB, null !== dB && (0, Yn.jsxs)("div", {
            ref: rB,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in dB ? (0, Yn.jsx)("div", {
              className: "SkyblockHudHelp",
              children: dB.hudHelpText
            }) : (0, Yn.jsxs)(Yn.Fragment, {
              children: [(0, Yn.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Yn.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Yn.jsx)("strong", {
                    style: {
                      color: nB.E.cyanUiText
                    },
                    children: UB(dB.hudZoneNameKey)
                  }), null !== IB && (0, Yn.jsx)("span", {
                    style: {
                      color: nB.E.goldUiText
                    },
                    children: UB("skyblockGame:level", {
                      level: (0, Hn.g)(IB)
                    })
                  })]
                }), (0, Yn.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: uB,
                  children: [(0, Yn.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Yn.jsx)(qn.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Hn.g)(dB.hudPurseCoins)]
                })]
              }), dB.hudClockText.length > 0 && (0, Yn.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Yn.jsx)(fn.e, {
                  text: dB.hudClockText
                })
              })]
            }), QB, "hudZoneNameKey" in dB && (0, Yn.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function hn(BB) {
      let {
        icon: jB
      } = BB;
      const zB = (0, iB.useCallback)((BB => {
        null === BB || void 0 === BB || BB.replaceChildren(Kj(jB))
      }), [jB]);
      return (0, Yn.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: zB
      })
    }

    function Xn(BB) {
      let {
        controller: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)();
      return (0, Yn.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: jB.display.mountPlayer,
        title: zB("skyblockGame:mapYouAreHere"),
        children: (0, Yn.jsx)(hn, {
          icon: "player"
        })
      })
    }
    const Zn = zB(38654),
      An = Object.fromEntries(Zn.keys().map((BB => [BB.replace(/^\.\/(.*)\.png$/, "$1"), Zn(BB)])));

    function Tn(BB, jB) {
      var zB;
      return null !== (zB = An[BB]) && void 0 !== zB ? zB : An[jB]
    }

    function Pn(BB) {
      let {
        imageKey: jB,
        fallbackImageKey: zB,
        geometryKey: QB,
        alt: nB,
        className: dB
      } = BB;
      const [IB, NB] = (0, iB.useState)((() => function(BB, jB) {
        return [{
          id: 0,
          imageKey: BB,
          geometryKey: jB,
          phase: "shown"
        }]
      }(jB, QB))), uB = function(BB, jB, zB) {
        const QB = BB[BB.length - 1];
        if (QB.imageKey === jB && QB.geometryKey === zB) return BB;
        const nB = {
          id: QB.id + 1,
          imageKey: jB,
          geometryKey: zB,
          phase: "entering"
        };
        return QB.geometryKey === zB ? [{
          ...QB,
          phase: "leaving"
        }, nB] : [nB]
      }(IB, jB, QB);
      return uB !== IB && NB(uB), (0, Yn.jsx)(Yn.Fragment, {
        children: uB.map((BB => (0, Yn.jsx)("img", {
          className: tn()("SkyblockMapTerrainImage", dB, {
            Entering: "entering" === BB.phase,
            Leaving: "leaving" === BB.phase
          }),
          src: Tn(BB.imageKey, zB),
          alt: "leaving" === BB.phase ? "" : nB,
          onAnimationEnd: () => {
            NB((jB => function(BB, jB) {
              return BB.flatMap((BB => BB.id !== jB ? [BB] : "leaving" === BB.phase ? [] : [{
                ...BB,
                phase: "shown"
              }]))
            }(jB, BB.id)))
          }
        }, BB.id)))
      })
    }
    var Wn = zB(4653),
      en = zB(1478);

    function wn(BB) {
      if ("Tab" !== BB.key) return;
      const jB = Array.from(BB.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        zB = jB.indexOf(document.activeElement);
      var QB;
      if (BB.shiftKey && zB <= 0) BB.preventDefault(), null === (QB = jB.at(-1)) || void 0 === QB || QB.focus();
      else if (!BB.shiftKey && (-1 === zB || zB === jB.length - 1)) {
        var nB;
        BB.preventDefault(), null === (nB = jB[0]) || void 0 === nB || nB.focus()
      }
    }

    function xn() {
      const BB = (0, iB.useRef)(null);
      return (0, iB.useCallback)((jB => {
        var zB;
        jB ? (BB.current = document.activeElement, jB.focus()) : null === (zB = BB.current) || void 0 === zB || zB.focus()
      }), [])
    }

    function Kn(BB) {
      let {
        percent: jB,
        label: zB,
        levelUpToken: QB,
        colour: nB
      } = BB;
      return (0, Yn.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": zB,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": jB,
        "aria-valuetext": zB,
        children: [(0, Yn.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${jB/100})`
          }
        }), null !== QB && void 0 !== QB && (0, Yn.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": nB
          }
        }, QB)]
      })
    }

    function Cn(BB) {
      let {
        mount: jB
      } = BB;
      return (0, Yn.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: jB,
        hidden: !0,
        children: (0, Yn.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Yn.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Yn.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function cn(BB, jB, zB, QB) {
      (0, iB.useLayoutEffect)((() => {
        const nB = BB.current;
        if (!zB || null === jB || void 0 === jB || !jB.local || !nB) return;
        const dB = Array.from(nB.querySelectorAll(".SkyblockMapNode")),
          IB = [...jB.points, ...jB.portals],
          NB = () => {
            const BB = nB.clientWidth,
              zB = nB.clientHeight,
              NB = dB.map(((nB, dB) => {
                const NB = IB[dB];
                return {
                  id: NB.id,
                  portal: dB >= jB.points.length,
                  x: NB.position[0] * BB / 100,
                  y: NB.position[1] * zB / 100,
                  width: nB.offsetWidth / QB,
                  height: nB.offsetHeight / QB
                }
              })),
              uB = new Map(IB.map(((BB, jB) => [BB.id, dB[jB]])));
            for (const jB of function(BB, jB, zB) {
                const QB = [],
                  nB = [...BB].sort(((BB, jB) => Number(jB.portal) - Number(BB.portal) || BB.id.localeCompare(jB.id)));
                for (const dB of nB) {
                  const BB = BB => Math.max(dB.width / 2, Math.min(jB - dB.width / 2, BB)),
                    nB = BB => Math.max(dB.height / 2, Math.min(zB - dB.height / 2, BB)),
                    IB = [BB(dB.x)],
                    NB = [nB(dB.y)];
                  for (const jB of QB) IB.push(BB(jB.x - (jB.width + dB.width) / 2 - 4), BB(jB.x + (jB.width + dB.width) / 2 + 4)), NB.push(nB(jB.y - (jB.height + dB.height) / 2 - 4), nB(jB.y + (jB.height + dB.height) / 2 + 4));
                  let uB = {
                      ...dB,
                      x: IB[0],
                      y: NB[0]
                    },
                    UB = 1 / 0,
                    aB = 1 / 0;
                  for (const jB of new Set(IB))
                    for (const BB of new Set(NB)) {
                      let zB = 0;
                      for (const IB of QB) zB += Math.max(0, (dB.width + IB.width) / 2 + 4 - Math.abs(jB - IB.x)) * Math.max(0, (dB.height + IB.height) / 2 + 4 - Math.abs(BB - IB.y));
                      const nB = (jB - dB.x) ** 2 + (BB - dB.y) ** 2;
                      (zB < UB || zB === UB && nB < aB) && (uB = {
                        ...dB,
                        x: jB,
                        y: BB
                      }, UB = zB, aB = nB)
                    }
                  QB.push(uB)
                }
                return QB
              }(NB, BB, zB)) {
              const BB = uB.get(jB.id);
              BB.style.left = `${jB.x}px`, BB.style.top = `${jB.y}px`
            }
          };
        NB();
        const uB = new ResizeObserver(NB);
        uB.observe(nB);
        for (const BB of dB) uB.observe(BB);
        return () => {
          uB.disconnect()
        }
      }), [BB, jB, zB, QB])
    }
    const bn = {
        zoom: 1,
        x: 0,
        y: 0
      },
      vn = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Rn(BB, jB, zB) {
      return Math.min(zB, Math.max(jB, BB))
    }

    function On(BB, jB, zB) {
      const QB = Math.min(1, zB * jB / BB),
        nB = Math.min(1, BB / (zB * jB));
      return {
        x0: (1 - QB) / 2,
        y0: (1 - nB) / 2,
        x1: (1 + QB) / 2,
        y1: (1 + nB) / 2
      }
    }

    function Bd(BB, jB, zB, QB) {
      const nB = jB * (QB - zB);
      if (nB <= 1) return .5 - jB * (zB + QB) / 2;
      const dB = .45 * Math.min(1, nB - 1);
      return Rn(BB, 1 - jB * QB - dB, dB - jB * zB)
    }

    function jd(BB, jB) {
      const zB = Rn(BB.zoom, 1, 12);
      return {
        zoom: zB,
        x: Bd(BB.x, zB, jB.x0, jB.x1),
        y: Bd(BB.y, zB, jB.y0, jB.y1)
      }
    }

    function zd(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : vn;
      const dB = Rn(BB.zoom * jB, 1, 12),
        IB = dB / BB.zoom;
      return jd({
        zoom: dB,
        x: zB - (zB - BB.x) * IB,
        y: QB - (QB - BB.y) * IB
      }, nB)
    }

    function Qd(BB, jB, zB, QB) {
      const [nB, dB] = (0, iB.useState)(bn);
      (0, iB.useEffect)((() => {
        dB(bn)
      }), [zB]), (0, iB.useEffect)((() => {
        const zB = BB.current;
        if (!jB || !zB) return;
        const nB = () => On(zB.clientWidth, zB.clientHeight, QB),
          IB = BB => {
            const jB = zB.getBoundingClientRect();
            return {
              x: (BB.clientX - jB.left) / jB.width,
              y: (BB.clientY - jB.top) / jB.height
            }
          },
          NB = new Map;
        let uB = {
            x: 0,
            y: 0
          },
          UB = !1,
          aB = 0;
        const pB = BB => {
            BB.preventDefault();
            const jB = BB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * BB.deltaY : BB.deltaY,
              zB = IB(BB);
            dB((BB => zd(BB, Math.exp(.0015 * -jB), zB.x, zB.y, nB())))
          },
          rB = BB => {
            "mouse" === BB.pointerType && 0 !== BB.button || (NB.set(BB.pointerId, IB(BB)), 1 === NB.size && (uB = {
              x: BB.clientX,
              y: BB.clientY
            }, UB = !1), aB = 0)
          },
          sB = BB => {
            const jB = NB.get(BB.pointerId);
            if (!jB) return;
            const QB = IB(BB);
            if (NB.set(BB.pointerId, QB), 2 === NB.size) {
              const [BB, jB] = [...NB.values()], zB = Math.hypot(BB.x - jB.x, BB.y - jB.y);
              if (aB > 0) {
                const QB = zB / aB;
                dB((zB => zd(zB, QB, (BB.x + jB.x) / 2, (BB.y + jB.y) / 2, nB())))
              }
              return aB = zB, void(UB = !0)
            }!UB && Math.hypot(BB.clientX - uB.x, BB.clientY - uB.y) < 4 || (UB || (UB = !0, zB.setPointerCapture(BB.pointerId)), dB((BB => function(BB, jB, zB) {
              let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vn;
              return jd({
                zoom: BB.zoom,
                x: BB.x + jB,
                y: BB.y + zB
              }, QB)
            }(BB, QB.x - jB.x, QB.y - jB.y, nB()))))
          },
          JB = BB => {
            NB.delete(BB.pointerId), aB = 0
          },
          mB = BB => {
            UB && (BB.stopPropagation(), BB.preventDefault(), UB = !1)
          },
          yB = new ResizeObserver((() => {
            dB((BB => jd(BB, nB())))
          }));
        return yB.observe(zB), zB.addEventListener("wheel", pB, {
          passive: !1
        }), zB.addEventListener("pointerdown", rB), zB.addEventListener("pointermove", sB), zB.addEventListener("pointerup", JB), zB.addEventListener("pointercancel", JB), zB.addEventListener("click", mB, !0), () => {
          yB.disconnect(), zB.removeEventListener("wheel", pB), zB.removeEventListener("pointerdown", rB), zB.removeEventListener("pointermove", sB), zB.removeEventListener("pointerup", JB), zB.removeEventListener("pointercancel", JB), zB.removeEventListener("click", mB, !0)
        }
      }), [BB, jB, zB, QB]);
      return {
        view: nB,
        zoomBy: jB => {
          const zB = BB.current;
          zB && dB((BB => zd(BB, jB, .5, .5, On(zB.clientWidth, zB.clientHeight, QB))))
        }
      }
    }

    function nd(BB) {
      var jB, zB, QB, nB;
      let {
        controller: dB,
        navigation: IB
      } = BB;
      const NB = (0, Fn.h)(rB, dB.getSnapshot()),
        {
          t: uB
        } = (0, Dn.D)(),
        UB = xn(),
        aB = NB.presentation,
        pB = (0, iB.useRef)(null),
        sB = (0, iB.useRef)(null),
        JB = Boolean(NB.open && (null === aB || void 0 === aB ? void 0 : aB.local) && aB.background),
        mB = Qd(pB, JB, `${NB.open}|${NB.tab}|${null===aB||void 0===aB||null===(jB=aB.background)||void 0===jB?void 0:jB.geometryKey}`, null !== (zB = null === aB || void 0 === aB || null === (QB = aB.background) || void 0 === QB ? void 0 : QB.ratio) && void 0 !== zB ? zB : 2);
      if (cn(sB, aB, NB.open, mB.view.zoom), !aB || !NB.open) return null;
      const yB = aB.local ? aB.background : null,
        kB = {
          "--map-ratio": String(null !== (nB = null === yB || void 0 === yB ? void 0 : yB.ratio) && void 0 !== nB ? nB : 2),
          backgroundColor: null === yB || void 0 === yB ? void 0 : yB.colour
        },
        GB = {
          "--map-zoom": String(mB.view.zoom),
          transform: `translate(${100*mB.view.x}%, ${100*mB.view.y}%) scale(${mB.view.zoom})`
        };
      return (0, Yn.jsx)(Wn.d, {
        show: NB.open,
        close: dB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: UB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yn.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockMapTitle",
                children: uB("skyblockGame:map")
              }), aB.minimap && (0, Yn.jsx)("p", {
                children: aB.minimap.caption
              })]
            }), (0, Yn.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((BB => (0, Yn.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": BB === NB.tab ? "true" : void 0,
                className: tn()({
                  Selected: BB === NB.tab
                }),
                "aria-pressed": BB === NB.tab,
                onClick: () => {
                  dB.selectTab(BB)
                },
                children: uB("local" === BB ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, BB)))
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              onClick: dB.dismiss
            })]
          }), (0, Yn.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Yn.jsxs)("div", {
              ref: pB,
              className: tn()("SkyblockMapCanvas", {
                Local: aB.local,
                Overview: !aB.local,
                Zoomed: mB.view.zoom > 1
              }),
              style: kB,
              children: [(0, Yn.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: JB ? GB : void 0,
                children: (0, Yn.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: sB,
                  children: [yB && (0, Yn.jsx)(Pn, {
                    className: "SkyblockMapTerrain",
                    imageKey: yB.imageKey,
                    fallbackImageKey: yB.fallbackImageKey,
                    geometryKey: yB.geometryKey,
                    alt: yB.label
                  }), aB.local && (0, Yn.jsx)(Cn, {
                    mount: IB.display.mountMapSearchArea
                  }), !aB.local && (0, Yn.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: aB.connections.map((BB => (0, Yn.jsx)("line", {
                      className: tn()({
                        Explored: BB.explored
                      }),
                      x1: BB.start[0],
                      y1: BB.start[1],
                      x2: BB.end[0],
                      y2: BB.end[1]
                    }, BB.id)))
                  }), aB.points.map((BB => {
                    const jB = !aB.local && BB.thumbnail ? An[BB.thumbnail] : void 0;
                    return (0, Yn.jsxs)("div", {
                      className: tn()("SkyblockMapNode", {
                        Current: BB.current
                      }),
                      style: {
                        left: `${BB.position[0]}%`,
                        top: `${BB.position[1]}%`
                      },
                      children: [(0, Yn.jsxs)(en.f, {
                        className: tn()("SkyblockMapPin", {
                          Unknown: !BB.visited,
                          Current: BB.current
                        }),
                        disabled: NB.pending,
                        onClick: () => {
                          dB.travel(BB.travelKind, BB.travelId)
                        },
                        children: [jB && (0, Yn.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: jB,
                          alt: ""
                        }), !jB && (0, Yn.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Yn.jsx)(hn, {
                            icon: BB.icon
                          })
                        }), (0, Yn.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: BB.name
                        })]
                      }), BB.current && (0, Yn.jsx)("span", {
                        className: tn()("SkyblockMapHereBadge", {
                          Above: BB.position[1] > 50
                        }),
                        children: uB("skyblockGame:mapYouAreHere")
                      })]
                    }, BB.id)
                  })), aB.portals.map((BB => (0, Yn.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${BB.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${BB.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Yn.jsxs)(en.f, {
                      className: "SkyblockMapPin",
                      disabled: NB.pending,
                      onClick: () => {
                        dB.travel(BB.travelKind, BB.travelId)
                      },
                      children: [(0, Yn.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: BB.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Yn.jsx)(hn, {
                          icon: BB.icon
                        })
                      }), (0, Yn.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: BB.name
                      })]
                    })
                  }, BB.id))), aB.local && (0, Yn.jsx)(Xn, {
                    controller: IB
                  })]
                })
              }), JB && (0, Yn.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Yn.jsx)("button", {
                  type: "button",
                  "aria-label": uB("skyblockGame:mapZoomIn"),
                  disabled: mB.view.zoom >= 12,
                  onClick: () => {
                    mB.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Yn.jsx)("button", {
                  type: "button",
                  "aria-label": uB("skyblockGame:mapZoomOut"),
                  disabled: mB.view.zoom <= 1,
                  onClick: () => {
                    mB.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Yn.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: NB.feedback
              })]
            })
          }), (0, Yn.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [aB.progress && (0, Yn.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Yn.jsx)("span", {
                children: aB.progress
              }), (0, Yn.jsx)(Kn, {
                percent: aB.percent,
                label: aB.progress
              })]
            }), aB.noLandmarks && (0, Yn.jsx)("span", {
              children: uB("skyblockGame:mapNoLandmarks")
            }), aB.canTravel && (0, Yn.jsx)("span", {
              className: "SkyblockMapHint",
              children: uB("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function dd(BB) {
      let {
        view: jB,
        controller: zB,
        navigation: QB
      } = BB;
      const {
        t: nB
      } = (0, Dn.D)(), {
        isTouchScreen: dB
      } = (0, Sn.m)(["isTouchScreen"]);
      return (0, Yn.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": nB("skyblockGame:mapLocal"),
        children: [dB && (0, Yn.jsx)(en.f, {
          className: "SkyblockMinimapOpen",
          onClick: zB.showLocal,
          children: nB("skyblockGame:map")
        }), (0, Yn.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: jB.colour
          },
          children: [(0, Yn.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: QB.display.mountTerrain,
            style: {
              width: jB.width,
              height: jB.height
            },
            children: [(0, Yn.jsx)(Pn, {
              imageKey: jB.imageKey,
              fallbackImageKey: jB.fallbackImageKey,
              geometryKey: jB.geometryKey,
              alt: jB.label
            }), (0, Yn.jsx)(Cn, {
              mount: QB.display.mountMinimapSearchArea
            }), jB.markers.map((BB => (0, Yn.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${BB.position[0]}%`,
                top: `${BB.position[1]}%`,
                color: BB.colour
              },
              title: BB.name,
              children: (0, Yn.jsx)(hn, {
                icon: BB.icon
              })
            }, BB.id)))]
          }), (0, Yn.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: nB("skyblockGame:mapYouAreHere"),
            children: (0, Yn.jsx)(hn, {
              icon: "player"
            })
          })]
        }), (0, Yn.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: jB.caption
        })]
      })
    }

    function Id(BB) {
      let {
        controller: jB
      } = BB;
      return (0, Yn.jsxs)("div", {
        className: "SkyblockCompass",
        ref: jB.display.mountCompass,
        children: [(0, Yn.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Yn.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Yn.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function Nd(BB) {
      let {
        controller: jB,
        surface: zB
      } = BB;
      const {
        t: QB
      } = (0, Dn.D)(), nB = (0, Fn.h)(Iz, jB.getSnapshot()), dB = xn();
      return nB.enabled ? (0, Yn.jsxs)(Yn.Fragment, {
        children: ["hud" === zB && (0, Yn.jsx)(Mn.e, {
          placement: "statBars",
          children: nB.hud && (0, Yn.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": nB.hud.colour
            },
            children: [(0, Yn.jsx)(Kn, {
              percent: nB.hud.skill.percent,
              label: nB.hud.skill.xp,
              levelUpToken: nB.hud.levelUpToken,
              colour: nB.hud.colour
            }), (0, Yn.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Yn.jsxs)("span", {
                children: [nB.hud.skill.label, " \xb7 ", nB.hud.skill.level]
              }), (0, Yn.jsx)("span", {
                children: nB.hud.gain
              })]
            })]
          })
        }), "hud" === zB && (0, Yn.jsx)(Mn.e, {
          children: nB.hud && (0, Yn.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Yn.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Yn.jsx)("strong", {
                children: nB.hud.skill.label
              }), (0, Yn.jsx)("span", {
                children: nB.hud.gain
              })]
            }), (0, Yn.jsx)(Kn, {
              percent: nB.hud.skill.percent,
              label: nB.hud.skill.xp,
              levelUpToken: nB.hud.levelUpToken,
              colour: nB.hud.colour
            }), (0, Yn.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Yn.jsx)("span", {
                children: nB.hud.skill.level
              }), (0, Yn.jsx)("span", {
                children: nB.hud.skill.xp
              })]
            })]
          })
        }), "menu" === zB && (0, Yn.jsx)(Wn.d, {
          show: nB.open,
          close: jB.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Yn.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: dB,
            onKeyDown: wn,
            children: [(0, Yn.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Yn.jsxs)("div", {
                children: [(0, Yn.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: QB("skyblockGame:skills")
                }), (0, Yn.jsx)("p", {
                  children: QB("skyblockGame:skillsIntro")
                })]
              }), (0, Yn.jsx)(en.j, {
                padIgnore: !0,
                onClick: jB.dismiss
              })]
            }), (0, Yn.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Yn.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: nB.skills.map((BB => (0, Yn.jsxs)(en.f, {
                  className: tn()("SkyblockSkillCard", {
                    Selected: BB.selected
                  }),
                  ariaPressed: BB.selected,
                  onClick: () => {
                    jB.select(BB.id)
                  },
                  children: [(0, Yn.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Yn.jsx)(qn.c, {
                      itemName: BB.icon,
                      amount: 0
                    })
                  }), (0, Yn.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Yn.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Yn.jsx)("strong", {
                        children: BB.label
                      }), (0, Yn.jsx)("span", {
                        children: BB.level
                      })]
                    }), (0, Yn.jsx)(Kn, {
                      percent: BB.percent,
                      label: `${BB.label}: ${BB.xp}`
                    }), (0, Yn.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: BB.xp
                    })]
                  })]
                }, BB.id)))
              }), nB.detail && (0, Yn.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Yn.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Yn.jsx)(qn.c, {
                    itemName: nB.detail.icon,
                    amount: 0
                  })
                }), (0, Yn.jsx)("h3", {
                  children: nB.detail.label
                }), (0, Yn.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: nB.detail.level
                }), (0, Yn.jsx)("p", {
                  children: nB.detail.description
                }), (0, Yn.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Yn.jsx)("strong", {
                    children: QB("skyblockGame:currentBenefit")
                  }), (0, Yn.jsx)("span", {
                    children: nB.detail.benefit
                  })]
                }), (0, Yn.jsx)(Kn, {
                  percent: nB.detail.percent,
                  label: nB.detail.xp
                }), (0, Yn.jsx)("p", {
                  children: nB.detail.xp
                }), (0, Yn.jsx)("h4", {
                  children: QB("skyblockGame:earnXp")
                }), (0, Yn.jsx)("ul", {
                  children: nB.detail.sources.map((BB => (0, Yn.jsx)("li", {
                    children: BB
                  }, BB)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var ud = zB(1388),
      Ud = zB(4928),
      pd = zB(363);

    function rd(BB) {
      let {
        item: jB
      } = BB;
      return (0, Yn.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Yn.jsx)(qn.c, {
          itemName: jB,
          amount: 0
        })
      })
    }

    function sd(BB) {
      let {
        name: jB,
        percent: zB,
        progress: QB
      } = BB;
      return (0, Yn.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Yn.jsx)(Kn, {
          percent: zB,
          label: `${(0,pd.lb)(jB)}: ${QB}`
        }), (0, Yn.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: QB
        })]
      })
    }

    function Jd(BB) {
      let {
        subquests: jB,
        showDescriptions: zB = !1
      } = BB;
      return (0, Yn.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: jB.map((BB => {
          const jB = zB && "completed" === BB.status,
            QB = (0, Yn.jsxs)("li", {
              className: tn()("SkyblockQuestStep", BB.status, {
                JustFinished: BB.justFinished,
                JustUnlocked: BB.justUnlocked
              }),
              tabIndex: jB ? 0 : void 0,
              children: [null !== BB.iconItem && (0, Yn.jsx)(rd, {
                item: BB.iconItem
              }), null === BB.iconItem && (0, Yn.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === BB.status ? "\u2713" : "skipped" === BB.status ? "\u2212" : "\u25cb"
              }), (0, Yn.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Yn.jsx)("strong", {
                  children: (0, Yn.jsx)(Ud.e, {
                    text: BB.name
                  })
                }), zB && !jB && (0, Yn.jsx)("span", {
                  children: (0, Yn.jsx)(Ud.e, {
                    text: BB.description
                  })
                }), null !== BB.barPercent && (0, Yn.jsx)(sd, {
                  name: BB.name,
                  percent: BB.barPercent,
                  progress: BB.progress
                }), null === BB.barPercent && !jB && (0, Yn.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: BB.statusLabel
                })]
              })]
            }, BB.id);
          return jB ? (0, Yn.jsx)(ud.g, {
            delayShow: 200,
            tooltipInner: (0, Yn.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Yn.jsx)("span", {
                children: (0, Yn.jsx)(Ud.e, {
                  text: BB.description
                })
              }), (0, Yn.jsx)("strong", {
                children: BB.statusLabel
              })]
            }),
            children: QB
          }, BB.id) : QB
        }))
      })
    }

    function md(BB) {
      let {
        quest: jB,
        select: zB
      } = BB;
      const {
        t: QB
      } = (0, Dn.D)(), nB = jB.focusStep;
      return (0, Yn.jsxs)(en.f, {
        className: tn()("SkyblockQuestCard", {
          Selected: jB.selected,
          Tracked: jB.tracked
        }),
        onClick: () => {
          zB(jB.id)
        },
        children: [(0, Yn.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Yn.jsx)("strong", {
            children: (0, Yn.jsx)(Ud.e, {
              text: jB.name
            })
          }), jB.tracked && (0, Yn.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: QB("skyblockGame:currentQuest")
          })]
        }), nB && (0, Yn.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== nB.iconItem && (0, Yn.jsx)(rd, {
            item: nB.iconItem
          }), (0, Yn.jsx)(sd, {
            name: nB.name,
            percent: nB.barPercent,
            progress: nB.progress
          })]
        }), (0, Yn.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: jB.progress
        })]
      })
    }

    function yd(BB) {
      let {
        controller: jB,
        surface: zB
      } = BB;
      const QB = (0, Fn.h)(az, jB.getSnapshot()),
        {
          t: nB
        } = (0, Dn.D)(),
        dB = xn();
      return QB.enabled ? (0, Yn.jsxs)(Yn.Fragment, {
        children: ["hud" === zB && (0, Yn.jsx)(Yn.Fragment, {
          children: QB.tracked && (0, Yn.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Uz,
            children: (0, Yn.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [QB.trackedStepPulse > 0 && (0, Yn.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, QB.trackedStepPulse), (0, Yn.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: nB("skyblockGame:currentQuest")
              }), (0, Yn.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Yn.jsx)("strong", {
                  children: (0, Yn.jsx)(Ud.e, {
                    text: QB.tracked.name
                  })
                }), null !== QB.tracked.clock && (0, Yn.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: QB.tracked.clock
                })]
              }), (0, Yn.jsx)(Jd, {
                subquests: QB.tracked.subquests
              })]
            })
          })
        }), "menu" === zB && (0, Yn.jsx)(Wn.d, {
          show: QB.open,
          close: jB.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Yn.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: dB,
            onKeyDown: wn,
            children: [(0, Yn.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Yn.jsx)("div", {
                children: (0, Yn.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: nB("skyblockGame:quests")
                })
              }), (0, Yn.jsx)(en.j, {
                padIgnore: !0,
                onClick: jB.dismiss
              })]
            }), (0, Yn.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Yn.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Yn.jsx)("h3", {
                  children: nB("skyblockGame:current")
                }), 0 === QB.active.length && (0, Yn.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: nB("skyblockGame:noActiveQuests")
                }), QB.active.map((BB => (0, Yn.jsx)(md, {
                  quest: BB,
                  select: jB.select
                }, BB.id))), (0, Yn.jsx)("h3", {
                  children: (0, Yn.jsxs)("button", {
                    type: "button",
                    className: tn()("SkyblockQuestSectionToggle", {
                      Expanded: QB.completedExpanded
                    }),
                    "aria-expanded": QB.completedExpanded,
                    onClick: jB.toggleCompleted,
                    children: [(0, Yn.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), nB("skyblockGame:completed"), (0, Yn.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: QB.completed.length
                    })]
                  })
                }), QB.completedExpanded && 0 === QB.completed.length && (0, Yn.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: nB("skyblockGame:noCompletedQuests")
                }), QB.completedExpanded && QB.completed.map((BB => (0, Yn.jsx)(md, {
                  quest: BB,
                  select: jB.select
                }, BB.id)))]
              }), QB.detail && (0, Yn.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [QB.detail.completed && (0, Yn.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: nB("skyblockGame:completedQuest")
                }), (0, Yn.jsx)("h3", {
                  children: (0, Yn.jsx)(Ud.e, {
                    text: QB.detail.name
                  })
                }), (0, Yn.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Yn.jsx)(Ud.e, {
                    text: QB.detail.description
                  })
                }), (0, Yn.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [QB.detail.progress, null !== QB.detail.clock && (0, Yn.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: QB.detail.clock
                  })]
                }), (0, Yn.jsx)(Jd, {
                  subquests: QB.detail.subquests,
                  showDescriptions: !0
                }), QB.detail.tracked && (0, Yn.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: QB.detail.trackLabel
                }), !QB.detail.completed && !QB.detail.tracked && (0, Yn.jsx)(en.m, {
                  onClick: jB.trackSelected,
                  disabled: !QB.detail.canTrack,
                  children: QB.detail.trackLabel
                }), QB.detail.canViewDialogue && (0, Yn.jsx)(en.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: jB.viewDialogue,
                  children: nB("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var kd = zB(1108),
      Gd = zB(2733);

    function Ld(BB, jB, zB, QB, nB) {
      const dB = BB => "linear" === nB ? BB : {
          OQ: nB,
          point: BB
        },
        IB = {};
      for (const [NB, uB] of QB)
        for (const [jB, zB] of Object.entries(BB(NB, uB, dB))) IB[jB] ??= {
          timeline: []
        }, IB[jB].timeline.push(zB);
      return {
        CQ: jB,
        loop: zB,
        bQ: IB
      }
    }
    const gd = .547,
      td = .022,
      Sd = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Md = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Ed(BB, jB, zB) {
      const {
        drop: QB = 0,
        shift: nB = 0,
        torso: dB = 0,
        nod: IB = 0,
        tilt: NB = 0,
        legs: uB = [0, 0],
        arms: UB = 0,
        spread: aB = 0
      } = jB, pB = gd * Math.cos(dB) - td * Math.sin(dB), rB = gd * Math.sin(dB) + td * Math.cos(dB), sB = zB([0, -QB, nB]);
      return {
        LowerBody: {
          timeFraction: BB,
          position: sB,
          rotation: zB([0, 0, 0])
        },
        UpperBody: {
          timeFraction: BB,
          position: sB,
          rotation: zB([dB, 0, NB])
        },
        HeadMesh: {
          timeFraction: BB,
          position: zB([0, pB - gd - QB, rB - td + nB]),
          rotation: zB([dB + IB, 0, NB])
        },
        LegLeftMesh: {
          timeFraction: BB,
          rotation: zB([uB[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: BB,
          rotation: zB([uB[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: zB([UB, 0, aB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: zB([UB, 0, -aB])
        }
      }
    }

    function qd(BB, jB, zB) {
      return Ld(Ed, BB, jB, zB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function fd(BB) {
      return "number" === typeof BB ? [BB, BB] : BB
    }

    function od(BB, jB, zB) {
      const {
        rise: QB = 0,
        shift: nB = 0,
        torso: dB = 0,
        twist: IB = 0,
        tilt: NB = 0,
        nod: uB = 0,
        cock: UB = 0,
        arms: aB = 0,
        spread: pB = 0
      } = jB, [rB, sB] = fd(aB), [JB, mB] = fd(pB);
      return {
        TorsoNode: {
          timeFraction: BB,
          position: zB([0, QB, nB]),
          rotation: zB([dB, IB, NB])
        },
        HeadMesh: {
          timeFraction: BB,
          rotation: zB([uB, 0, UB])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: zB([rB, 0, JB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: zB([sB, 0, -mB])
        }
      }
    }
    const Hd = [1.0625, -1, 0];

    function Dd(BB) {
      return "number" === typeof BB ? [BB, BB] : BB
    }

    function Fd(BB, jB, zB) {
      const {
        drop: QB = 0,
        shift: nB = 0,
        torso: dB = 0,
        tilt: IB = 0,
        nod: NB = 0,
        cock: uB = 0,
        legs: UB = [0, 0],
        arms: aB = 0,
        spread: pB = 0
      } = jB, [rB, sB] = Dd(aB), [JB, mB] = Dd(pB), yB = -dB, kB = -IB, [GB, LB, gB] = function(BB, jB) {
        const [zB, QB, nB] = [-Hd[0], Hd[1], -Hd[2]], dB = zB * Math.cos(jB) - QB * Math.sin(jB), IB = zB * Math.sin(jB) + QB * Math.cos(jB);
        return [dB - zB, -(IB * Math.cos(BB) - nB * Math.sin(BB) - QB), IB * Math.sin(BB) + nB * Math.cos(BB) - nB]
      }(yB, kB), tB = zB([0, -QB, nB]);
      return {
        TorsoNode: {
          timeFraction: BB,
          position: zB([GB, LB - QB, gB + nB]),
          rotation: zB([yB, 0, kB])
        },
        HeadMesh: {
          timeFraction: BB,
          rotation: zB([-NB, 0, -uB])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: zB([-rB, 0, -JB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: zB([-sB, 0, mB])
        },
        LegLeftMesh: {
          timeFraction: BB,
          position: tB,
          rotation: zB([-UB[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: BB,
          position: tB,
          rotation: zB([-UB[1], 0, 0])
        }
      }
    }
    var Yd = zB(37252),
      Vd = zB(38554),
      hd = zB(38738);

    function Xd(BB, jB, zB) {
      var QB, nB;
      const dB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return BB + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - BB) * zB
        },
        [IB, NB] = null !== (QB = BB.legs) && void 0 !== QB ? QB : [0, 0],
        [uB, UB] = null !== (nB = jB.legs) && void 0 !== nB ? nB : [0, 0];
      return {
        drop: dB(BB.drop, jB.drop),
        shift: dB(BB.shift, jB.shift),
        torso: dB(BB.torso, jB.torso),
        nod: dB(BB.nod, jB.nod),
        tilt: dB(BB.tilt, jB.tilt),
        legs: [dB(IB, uB), dB(NB, UB)],
        arms: dB(BB.arms, jB.arms),
        spread: dB(BB.spread, jB.spread)
      }
    }
    const Zd = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Ad = qd(4400, !0, [
        [0, Zd],
        [.16, {
          ...Zd,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Zd],
        [.44, {
          ...Zd,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Xd(Zd, Sd, .7)],
        [.66, Xd(Zd, Sd, .78)],
        [.74, Xd(Zd, Md, .65)],
        [.86, {
          ...Zd,
          drop: .14
        }],
        [1, Zd]
      ], "catmull-rom-spline"),
      Td = {
        ...Zd,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Pd = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Wd = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      ed = {
        caveGolem: Ad,
        magmaGolem: qd(3600, !0, [
          [0, Td],
          [.12, {
            ...Td,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Td,
            tilt: -.08
          }],
          [.4, {
            ...Td,
            tilt: .06,
            drop: .11
          }],
          [.52, Xd(Td, Sd, .9)],
          [.62, Xd(Td, Md, .8)],
          [.7, Xd(Td, Md, .45)],
          [.78, Xd(Td, Md, .85)],
          [.9, {
            ...Td,
            drop: .17
          }],
          [1, Td]
        ], "catmull-rom-spline"),
        frostWraith: function(BB, jB, zB) {
          return Ld(od, BB, jB, zB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Pd],
          [.14, {
            ...Pd,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Pd,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Pd,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Pd,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Pd,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Pd,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Pd,
            rise: .16,
            tilt: -.04
          }],
          [1, Pd]
        ], "catmull-rom-spline"),
        tikiTerror: function(BB, jB, zB) {
          return Ld(Fd, BB, jB, zB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Wd],
          [.16, {
            ...Wd,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Wd],
          [.44, {
            ...Wd,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.56, {
            drop: -.03,
            torso: -.28,
            nod: -.48,
            legs: [-.12, .12],
            arms: -1.45,
            spread: 1.1
          }],
          [.64, {
            drop: -.03,
            torso: -.32,
            tilt: .05,
            nod: -.52,
            legs: [-.12, .12],
            arms: -1.5,
            spread: 1.2
          }],
          [.72, {
            drop: -.03,
            torso: -.28,
            tilt: -.05,
            nod: -.48,
            legs: [-.12, .12],
            arms: -1.45,
            spread: 1.1
          }],
          [.86, {
            ...Wd,
            drop: .1
          }],
          [1, Wd]
        ], "catmull-rom-spline")
      },
      ld = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      wd = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      xd = Object.fromEntries(Object.entries(ed).map((BB => {
        let [jB, zB] = BB;
        return [jB, (0, hd.b)((0, Yd.e)(zB), jB)]
      })));

    function Kd(BB) {
      const jB = function(BB) {
        var jB;
        const zB = (0, Vd.c)(BB).poseRig;
        return null !== (jB = wd[BB]) && void 0 !== jB ? jB : void 0 === zB ? null : ld[zB]
      }(BB);
      return null === jB ? null : xd[jB]
    }

    function Cd(BB) {
      return {
        "--difficulty-colour": BB
      }
    }
    const cd = (0, iB.lazy)((() => (0, Gd.d)(zB.e(203).then((() => zB(41615))), (BB => BB.MobPreview))));

    function bd(BB) {
      var jB, zB, QB;
      let {
        picker: nB,
        controller: dB
      } = BB;
      const {
        t: IB
      } = (0, Dn.D)(), NB = xn(), {
        page: uB
      } = nB;
      return (0, Yn.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: NB,
        onKeyDown: BB => {
          "ArrowLeft" === BB.key ? (BB.preventDefault(), BB.stopPropagation(), dB.previous()) : "ArrowRight" === BB.key ? (BB.preventDefault(), BB.stopPropagation(), dB.next()) : wn(BB)
        },
        style: Cd(uB.colour),
        children: [(0, Yn.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Yn.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: nB.dungeonName
          }), (0, Yn.jsx)(en.j, {
            padIgnore: !0,
            onClick: dB.dismiss
          })]
        }), (0, Yn.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Yn.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Yn.jsx)(en.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !nB.canPrevious,
              onClick: dB.previous,
              children: (0, Yn.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Yn.jsx)(kd.c, {
                  name: "angle-up"
                })
              })
            }), (0, Yn.jsxs)("div", {
              className: tn()("SkyblockBossPickerBoss", {
                Locked: !uB.unlocked
              }),
              children: [null !== uB.bossMobType && (0, Yn.jsx)(iB.Suspense, {
                fallback: (0, Yn.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Yn.jsx)(cd, {
                  className: "SkyblockBossPickerModel",
                  mobType: uB.bossMobType,
                  variation: uB.bossMobVariation,
                  animation: null !== (jB = Kd(uB.bossMobType)) && void 0 !== jB ? jB : void 0
                })
              }), null === uB.bossMobType && (0, Yn.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Yn.jsx)(en.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !nB.canNext,
              onClick: dB.next,
              children: (0, Yn.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Yn.jsx)(kd.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Yn.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [uB.beaten && (0, Yn.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), uB.label]
            }), (0, Yn.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (zB = uB.bossName) && void 0 !== zB ? zB : "???"
            }), (0, Yn.jsxs)("span", {
              className: tn()("SkyblockBossPickerRecord", {
                Locked: null !== uB.lockedHint
              }),
              children: [null !== uB.lockedHintHighlight && (0, Yn.jsxs)(Yn.Fragment, {
                children: [uB.lockedHintHighlight.before, (0, Yn.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Cd(uB.lockedHintHighlight.colour),
                  children: [null !== uB.lockedHintHighlight.icon && (0, Yn.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Yn.jsx)(qn.c, {
                      itemName: uB.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), uB.lockedHintHighlight.name]
                }), uB.lockedHintHighlight.after]
              }), null === uB.lockedHintHighlight && (null !== (QB = uB.lockedHint) && void 0 !== QB ? QB : uB.summary)]
            })]
          }), (0, Yn.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: nB.pages.map((BB => (0, Yn.jsx)("span", {
              className: tn()("SkyblockBossPickerDot", {
                Current: BB.current,
                Locked: !BB.unlocked
              }),
              style: Cd(BB.colour)
            }, BB.difficulty)))
          }), (0, Yn.jsx)(en.r, {
            className: "SkyblockBossPickerFight",
            disabled: !uB.unlocked,
            onClick: dB.enter,
            children: IB("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function vd(BB) {
      let {
        dungeon: jB,
        select: zB
      } = BB;
      return (0, Yn.jsxs)(en.f, {
        className: tn()("SkyblockDungeonCard", {
          Selected: jB.selected
        }),
        onClick: () => {
          zB(jB.id)
        },
        children: [(0, Yn.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Yn.jsx)("strong", {
            children: jB.name
          }), (0, Yn.jsx)("span", {
            children: jB.beatenSummary
          })]
        }), (0, Yn.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: jB.difficulties.map((BB => (0, Yn.jsxs)("span", {
            className: tn()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: BB.beaten
            }),
            style: Cd(BB.colour),
            title: BB.summary,
            children: [BB.beaten && (0, Yn.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), BB.label]
          }, BB.difficulty)))
        })]
      })
    }

    function Rd(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(Jz, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = xn();
      return zB.enabled ? (0, Yn.jsxs)(Wn.d, {
        show: zB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [zB.picker && (0, Yn.jsx)(bd, {
          picker: zB.picker,
          controller: jB
        }), !zB.picker && (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: QB("skyblockGame:dungeons")
              }), (0, Yn.jsx)("p", {
                children: QB("skyblockGame:dungeonsIntro")
              })]
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              onClick: jB.dismiss
            })]
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Yn.jsx)("div", {
              className: "SkyblockDungeonList",
              children: zB.dungeons.map((BB => (0, Yn.jsx)(vd, {
                dungeon: BB,
                select: jB.select
              }, BB.id)))
            }), zB.detail && (0, Yn.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Yn.jsx)("h3", {
                children: zB.detail.name
              }), (0, Yn.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: zB.detail.difficulties.map((BB => (0, Yn.jsxs)("li", {
                  className: tn()("SkyblockDungeonRecord", {
                    Beaten: BB.beaten
                  }),
                  children: [(0, Yn.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Cd(BB.colour),
                    children: [BB.beaten && (0, Yn.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), BB.label]
                  }), (0, Yn.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: BB.summary
                  })]
                }, BB.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function Od(BB) {
      let {
        collection: jB,
        select: zB
      } = BB;
      return (0, Yn.jsxs)(en.f, {
        className: tn()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: jB.selected,
          Locked: jB.locked
        }),
        ariaPressed: jB.selected,
        onClick: () => {
          zB(jB.id)
        },
        children: [(0, Yn.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Yn.jsx)(qn.c, {
            itemName: jB.icon,
            amount: 0
          })
        }), (0, Yn.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Yn.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Yn.jsx)("strong", {
              children: jB.name
            }), (0, Yn.jsx)("span", {
              children: jB.tier
            })]
          }), (0, Yn.jsx)(Kn, {
            percent: jB.percent,
            label: `${jB.name}: ${jB.progress}`
          }), (0, Yn.jsx)("span", {
            className: "SkyblockSkillXp",
            children: jB.progress
          })]
        })]
      })
    }

    function BI(BB) {
      let {
        collection: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)();
      return (0, Yn.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Yn.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Yn.jsx)(qn.c, {
            itemName: jB.icon,
            amount: 0
          })
        }), (0, Yn.jsx)("h3", {
          children: jB.name
        }), (0, Yn.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: jB.tier
        }), (0, Yn.jsx)("p", {
          children: jB.locked ? zB("skyblockGame:collectionLocked") : jB.count
        }), null !== jB.nextReward && (0, Yn.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Yn.jsx)("strong", {
            children: zB("skyblockGame:collectionNextReward")
          }), (0, Yn.jsx)("span", {
            children: jB.nextReward
          })]
        }), (0, Yn.jsx)(Kn, {
          percent: jB.percent,
          label: jB.progress
        }), (0, Yn.jsx)("p", {
          children: jB.progress
        })]
      })
    }

    function jI(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(Xz, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = xn();
      return zB.enabled ? (0, Yn.jsx)(Wn.d, {
        show: zB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: QB("skyblockGame:collections")
              }), (0, Yn.jsxs)("p", {
                children: [QB("skyblockGame:collectionsIntro"), " ", zB.tiersUnlocked]
              })]
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              onClick: jB.dismiss
            })]
          }), (0, Yn.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: zB.categories.map((BB => (0, Yn.jsxs)(en.f, {
              className: tn()("SkyblockCollectionCategory", {
                Selected: BB.selected
              }),
              ariaPressed: BB.selected,
              padTabSelected: BB.selected,
              onClick: () => {
                jB.selectCategory(BB.id)
              },
              children: [(0, Yn.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Yn.jsx)(qn.c, {
                  itemName: BB.icon,
                  amount: 0
                })
              }), (0, Yn.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Yn.jsx)("strong", {
                  children: BB.label
                }), (0, Yn.jsx)("span", {
                  children: BB.tiers
                })]
              })]
            }, BB.id)))
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Yn.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: zB.collections.map((BB => (0, Yn.jsx)(Od, {
                collection: BB,
                select: jB.select
              }, BB.id)))
            }), zB.detail && (0, Yn.jsx)(BI, {
              collection: zB.detail
            })]
          })]
        })
      }) : null
    }
    const zI = ["completed", "active", "available", "locked"],
      QI = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function nI(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(cz, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = xn();
      return zB.enabled ? (0, Yn.jsx)(Wn.d, {
        show: zB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: QB("skyblockDevQuests:title")
              }), (0, Yn.jsx)("p", {
                children: QB("skyblockDevQuests:intro")
              })]
            }), (0, Yn.jsx)(en.j, {
              onClick: jB.dismiss
            })]
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [zI.map((BB => (0, Yn.jsx)("span", {
              className: tn()("SkyblockQuestGraphLegendState", BB),
              children: QB(`skyblockDevQuests:state_${BB}`)
            }, BB))), QI.map((BB => (0, Yn.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Yn.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Yn.jsx)("line", {
                  className: tn()("SkyblockQuestGraphEdge", BB),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), QB(`skyblockDevQuests:edge_${BB}`)]
            }, BB)))]
          }), (0, Yn.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Yn.jsxs)("div", {
              className: tn()("SkyblockQuestGraphCanvas", {
                Planning: zB.planning
              }),
              style: {
                width: zB.width,
                height: zB.height
              },
              children: [(0, Yn.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: zB.width,
                height: zB.height,
                "aria-hidden": "true",
                children: [(0, Yn.jsx)("defs", {
                  children: (0, Yn.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Yn.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), zB.edges.map((BB => (0, Yn.jsx)("path", {
                  className: tn()("SkyblockQuestGraphEdge", BB.kind, {
                    InPlan: BB.inPlan
                  }),
                  d: BB.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, BB.key)))]
              }), zB.nodes.map((BB => (0, Yn.jsxs)("button", {
                type: "button",
                className: tn()("SkyblockQuestGraphNode", BB.state, {
                  InPlan: BB.inPlan,
                  Hovered: BB.hovered
                }),
                style: {
                  left: BB.left,
                  top: BB.top,
                  width: 190,
                  height: 52
                },
                title: BB.id,
                onMouseEnter: () => {
                  jB.hover(BB.id)
                },
                onMouseLeave: () => {
                  jB.hover(null)
                },
                onFocus: () => {
                  jB.hover(BB.id)
                },
                onBlur: () => {
                  jB.hover(null)
                },
                onClick: () => {
                  jB.jump(BB.id)
                },
                children: [(0, Yn.jsx)("strong", {
                  children: BB.name
                }), (0, Yn.jsx)("span", {
                  children: BB.detail
                })]
              }, BB.id)))]
            })
          })]
        })
      }) : null
    }
    const dI = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      II = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${uQ}ms`,
        "--forge-duration": "2150ms"
      },
      NI = Array.from({
        length: 18
      }, ((BB, jB) => ({
        "--ember-left": `${(4+92*(.618034*jB%1)).toFixed(1)}%`,
        "--ember-size": 3 + jB % 3 * 2 + "px",
        "--ember-drift": 14 * (jB % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*jB%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*jB%8).toFixed(2)}s`
      })));

    function uI(BB) {
      if (BB.style.removeProperty("--part-size"), null === BB.parentElement || "wrap" === getComputedStyle(BB.parentElement).flexWrap) return;
      const jB = [...BB.children],
        zB = getComputedStyle(BB),
        QB = parseFloat(zB.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        nB = (BB.clientHeight - parseFloat(zB.rowGap) * (jB.length - 1)) / jB.length,
        dB = jB.map((BB => {
          const jB = getComputedStyle(BB),
            zB = BB.querySelector("h3"),
            dB = BB.querySelector(".SkyblockForgeParts");
          if (null === zB || null === dB) return QB;
          const IB = nB - parseFloat(jB.paddingTop) - parseFloat(jB.paddingBottom) - zB.offsetHeight - parseFloat(getComputedStyle(zB).marginBottom),
            NB = parseFloat(getComputedStyle(dB).columnGap),
            uB = dB.children.length;
          let UB = 0;
          for (let QB = 1; QB <= uB; QB++) {
            const BB = Math.ceil(uB / QB);
            UB = Math.max(UB, Math.min((dB.clientWidth - NB * (QB - 1)) / QB, (IB - NB * (BB - 1)) / BB))
          }
          return UB
        }));
      BB.style.setProperty("--part-size", `${Math.floor(Math.max(QB,Math.min(...dB)))}px`)
    }

    function UI(BB) {
      var jB, zB, QB, dB, IB;
      let {
        controller: NB
      } = BB;
      const uB = (0, Fn.h)(mQ, NB.getSnapshot()),
        {
          t: UB
        } = (0, Dn.D)(),
        aB = xn(),
        pB = function() {
          const BB = (0, iB.useRef)(null),
            jB = (0, iB.useRef)(null);
          return (0, iB.useLayoutEffect)((() => {
            null !== BB.current && uI(BB.current)
          })), (0, iB.useCallback)((zB => {
            var QB;
            null === (QB = jB.current) || void 0 === QB || QB.disconnect(), jB.current = null, BB.current = zB, null !== zB && (jB.current = new ResizeObserver((() => {
              uI(zB)
            })), jB.current.observe(zB))
          }), [])
        }(),
        rB = function(BB) {
          const jB = (0, iB.useRef)(null);
          return (0, iB.useLayoutEffect)((() => {
            const BB = jB.current;
            if (null !== BB) {
              BB.style.removeProperty("font-size");
              for (let jB = 1.7; jB > 1.1 && BB.scrollWidth > BB.clientWidth; jB -= .1) BB.style.fontSize = jB - .1 + "rem"
            }
          }), [BB]), (0, iB.useCallback)((BB => {
            jB.current = BB
          }), [])
        }(null === (jB = uB.preview) || void 0 === jB ? void 0 : jB.name),
        sB = (0, iB.useRef)(null),
        JB = (0, iB.useRef)({}),
        mB = uB.forging,
        yB = null !== (zB = null === mB || void 0 === mB ? void 0 : mB.preview.tier) && void 0 !== zB ? zB : 0,
        kB = null !== (QB = null === mB || void 0 === mB ? void 0 : mB.preview.named) && void 0 !== QB && QB,
        GB = (0, iB.useMemo)((() => {
          return null === mB ? null : {
            flames: (BB = yB, jB = kB, Array.from({
              length: 26 + 6 * BB + (jB ? 20 : 0)
            }, ((BB, jB) => {
              const zB = jB < 6,
                QB = Math.random() * Math.PI * 2,
                nB = zB ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                dB = Math.cos(QB) * nB,
                IB = Math.sin(QB) * nB - 2 - 3 * Math.random(),
                NB = Math.random(),
                [uB, UB, aB] = zB ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : NB < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : NB < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [NB < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": uB,
                "--x0": `${(.15*dB).toFixed(2)}rem`,
                "--y0": `${(.15*IB).toFixed(2)}rem`,
                "--x": `${dB.toFixed(2)}rem`,
                "--y": `${IB.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${UB.toFixed(2)}rem`,
                "--duration": `${Math.round(aB)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: pQ(yB, kB)
          };
          var BB, jB
        }), [null === mB || void 0 === mB ? void 0 : mB.id]);
      if (!uB.enabled) return null;
      const LB = uB.preview,
        gB = uB.arriving,
        tB = null !== gB && !gB.sameSword,
        SB = null !== LB && (0, Yn.jsx)(qn.c, {
          itemName: LB.baseSword,
          amount: 0,
          enchantmentTier: LB.enchantmentTier
        });
      return (0, Yn.jsx)(Wn.d, {
        show: uB.open,
        close: NB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: aB,
          onKeyDown: wn,
          children: [(0, Yn.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: NI.map(((BB, jB) => (0, Yn.jsx)("span", {
              style: BB
            }, jB)))
          }), (0, Yn.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: UB("skyblockGame:forgeTitle")
              }), (0, Yn.jsx)("p", {
                children: UB("skyblockGame:forgeIntro")
              })]
            }), (0, Yn.jsx)(en.j, {
              onClick: NB.dismiss
            })]
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Yn.jsx)("div", {
              ref: pB,
              className: tn()("SkyblockForgeSlots", {
                Locked: null !== mB
              }),
              children: uB.slots.map((BB => (0, Yn.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Yn.jsx)("h3", {
                  children: BB.label
                }), (0, Yn.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: BB.parts.map((jB => (0, Yn.jsx)("button", {
                    type: "button",
                    className: tn()("SkyblockForgePart", {
                      Selected: jB.selected,
                      Missing: jB.placeholder
                    }),
                    disabled: jB.placeholder,
                    title: jB.placeholder ? UB("skyblockGame:forgePickParts") : jB.itemName,
                    "aria-pressed": jB.selected,
                    onClick: () => {
                      NB.select(BB.kind, jB.material)
                    },
                    children: (0, Yn.jsx)(qn.c, {
                      itemName: jB.itemName,
                      amount: jB.owned
                    })
                  }, jB.material)))
                })]
              }, BB.kind)))
            }), (0, Yn.jsxs)("div", {
              className: tn()("SkyblockForgeAnvil", {
                Named: null === LB || void 0 === LB ? void 0 : LB.named
              }),
              style: {
                "--tier": null === LB ? "transparent" : nB.hb[LB.enchantmentTier]
              },
              children: [(0, Yn.jsxs)("div", {
                className: tn()("SkyblockForgeAltar", {
                  Forging: null !== mB
                }),
                style: null === mB ? void 0 : II,
                children: [(0, Yn.jsxs)("div", {
                  className: tn()("SkyblockForgeMount", {
                    Arrive: null !== gB
                  }),
                  children: [null === LB && (0, Yn.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Yn.jsx)(qn.c, {
                      itemName: uB.unformedSword,
                      amount: 0
                    })
                  }), null !== LB && (0, Yn.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== LB && null === mB && (0, Yn.jsx)("div", {
                    ref: sB,
                    className: "SkyblockForgeFloat",
                    children: (0, Yn.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: SB
                    })
                  }), null !== LB && (0, Yn.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: aQ.map(((BB, jB) => (0, Yn.jsx)("span", {
                      className: tn()({
                        Rune: "" !== BB.rune
                      }),
                      style: BB.style,
                      children: BB.rune
                    }, jB)))
                  }), null !== mB && null !== GB && (0, Yn.jsxs)(Yn.Fragment, {
                    children: [(0, Yn.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Yn.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: GB.flames.map(((BB, jB) => (0, Yn.jsx)("span", {
                        style: BB
                      }, jB)))
                    }), (0, Yn.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: JB.current,
                      children: (0, Yn.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: SB
                      })
                    }), (0, Yn.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Yn.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (yB >= 4 || kB) && (0, Yn.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Yn.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: GB.sparks.map(((BB, jB) => (0, Yn.jsx)("span", {
                        style: BB
                      }, jB)))
                    }), (0, Yn.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Yn.jsx)("p", {
                  className: tn()("SkyblockForgeStatus", null === (dB = uB.status) || void 0 === dB ? void 0 : dB.tone),
                  children: null === (IB = uB.status) || void 0 === IB ? void 0 : IB.text
                })]
              }), null === LB && (0, Yn.jsx)("p", {
                className: tn()("SkyblockForgeName Waiting", {
                  ArriveText: tB
                }),
                children: UB(uB.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== LB && (0, Yn.jsx)("h3", {
                ref: rB,
                className: tn()("SkyblockForgeName", {
                  ArriveText: tB
                }),
                title: LB.name,
                children: LB.name
              }), (null === LB || void 0 === LB ? void 0 : LB.named) && (0, Yn.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: UB("skyblockGame:forgeSecret")
              }), (0, Yn.jsxs)(en.r, {
                className: "SkyblockForgeButton",
                disabled: !uB.canForge,
                title: null === LB ? void 0 : UB("skyblockGame:forgeCoalOwned", {
                  owned: String(uB.coalOwned)
                }),
                onClick: () => {
                  JB.current = function(BB) {
                    const jB = null === BB ? "none" : getComputedStyle(BB).transform,
                      zB = new DOMMatrixReadOnly("none" === jB ? void 0 : jB);
                    return {
                      "--settle-y": `${zB.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(zB.b,zB.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(sB.current), JQ(), NB.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [UB("skyblockGame:forgeButton"), null !== LB && (0, Yn.jsxs)("span", {
                  className: tn()("SkyblockForgeCost", {
                    Short: LB.coalShort
                  }),
                  children: [(0, Yn.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Yn.jsx)(qn.c, {
                      itemName: BQ.b,
                      amount: 0
                    })
                  }), LB.coalCost]
                })]
              })]
            }), (0, Yn.jsxs)("div", {
              className: tn()("SkyblockForgeDetails", {
                Named: null === LB || void 0 === LB ? void 0 : LB.named
              }),
              children: [(0, Yn.jsx)("p", {
                className: tn()("SkyblockForgeLore", {
                  ArriveText: tB
                }),
                title: null === LB || void 0 === LB ? void 0 : LB.lore,
                children: null === LB || void 0 === LB ? void 0 : LB.lore
              }), (0, Yn.jsxs)("dl", {
                className: tn()("SkyblockForgeStats", {
                  ArriveText: tB
                }),
                children: [null === LB && dI.map((BB => (0, Yn.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Yn.jsx)("dt", {
                    children: UB(BB)
                  }), (0, Yn.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, BB))), null === LB || void 0 === LB ? void 0 : LB.stats.map((BB => (0, Yn.jsxs)("div", {
                  className: tn()("SkyblockForgeStat", {
                    Better: BB.better
                  }),
                  children: [(0, Yn.jsx)("dt", {
                    children: BB.label
                  }), (0, Yn.jsx)("dd", {
                    children: BB.value
                  })]
                }, BB.label)))]
              }), (0, Yn.jsx)("ul", {
                className: tn()("SkyblockForgeEffects", {
                  ArriveText: tB
                }),
                children: null === LB || void 0 === LB ? void 0 : LB.effects.map((BB => (0, Yn.jsx)("li", {
                  children: BB
                }, BB)))
              })]
            })]
          })]
        })
      })
    }
    const aI = "Doom Rivet",
      pI = "Doom Crest";

    function rI(BB) {
      let {
        itemName: jB,
        amount: zB,
        owned: QB
      } = BB;
      return (0, Yn.jsxs)("span", {
        className: tn()("SkyblockSmugglerPrice", {
          Short: zB > QB
        }),
        children: [(0, Yn.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Yn.jsx)(qn.c, {
            itemName: jB,
            amount: 0
          })
        }), (0, Yn.jsx)("span", {
          children: zB
        })]
      })
    }

    function sI(BB) {
      return BB.justBought ? "skyblockGame:smugglerJustBought" : BB.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function JI(BB) {
      let {
        deal: jB,
        view: zB,
        buy: QB
      } = BB;
      const {
        t: nB
      } = (0, Dn.D)();
      return (0, Yn.jsxs)("div", {
        className: tn()("SkyblockSmugglerPocket", {
          Bought: jB.justBought,
          Unaffordable: !jB.affordable,
          SoldOut: jB.soldOut && !jB.justBought
        }),
        children: [(0, Yn.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Yn.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Yn.jsx)(qn.c, {
            itemName: jB.itemName,
            amount: 0,
            enchantmentTier: jB.enchantmentTier
          }), jB.amount > 1 && (0, Yn.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: nB("skyblockGame:smugglerAmount", {
              amount: jB.amount
            })
          })]
        }), (0, Yn.jsx)("h3", {
          children: jB.displayName
        }), (0, Yn.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Yn.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [jB.rivets > 0 && (0, Yn.jsx)(rI, {
              itemName: aI,
              amount: jB.rivets,
              owned: zB.rivetsOwned
            }), jB.crests > 0 && (0, Yn.jsx)(rI, {
              itemName: pI,
              amount: jB.crests,
              owned: zB.crestsOwned
            })]
          }), (0, Yn.jsx)(en.f, {
            className: "SkyblockSmugglerBuy",
            disabled: jB.soldOut || !jB.affordable || zB.pending,
            onClick: () => {
              QB(jB.slot)
            },
            children: nB(sI(jB))
          })]
        })]
      }, jB.justBought ? zB.boughtCount : 0)
    }

    function mI(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(GQ, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = xn();
      return zB.enabled ? (0, Yn.jsx)(Wn.d, {
        show: zB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: wn,
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Yn.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Yn.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: QB("skyblockGame:smugglerTitle")
              }), (0, Yn.jsx)("p", {
                children: QB("skyblockGame:smugglerIntro")
              })]
            }), (0, Yn.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Yn.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Yn.jsx)(rI, {
                  itemName: aI,
                  amount: zB.rivetsOwned,
                  owned: zB.rivetsOwned
                }), (0, Yn.jsx)(rI, {
                  itemName: pI,
                  amount: zB.crestsOwned,
                  owned: zB.crestsOwned
                })]
              }), (0, Yn.jsx)(en.j, {
                onClick: jB.dismiss
              })]
            })]
          }), (0, Yn.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: zB.deals.map((BB => (0, Yn.jsx)(JI, {
              deal: BB,
              view: zB,
              buy: jB.buy
            }, BB.slot)))
          }), (0, Yn.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Yn.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: zB.rotatesText
            }), null !== zB.status && (0, Yn.jsx)("span", {
              className: tn()("SkyblockSmugglerStatus", zB.status.tone),
              children: zB.status.text
            })]
          })]
        })
      }) : null
    }

    function yI(BB) {
      let {
        phase: jB,
        className: zB
      } = BB;
      return (0, Yn.jsx)("span", {
        className: tn()("SkyblockMoon", `Moon-${jB}`, zB),
        "aria-hidden": "true"
      })
    }

    function kI(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(tQ, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)();
      return zB.enabled ? (0, Yn.jsx)(Mn.e, {
        placement: "statBars",
        children: (0, Yn.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: tn()("SkyblockPassageChip", zB.open && "Open"),
          "aria-label": QB("skyblockGame:passageChipLabel", {
            phase: zB.phaseName
          }),
          title: QB("skyblockGame:passageChipLabel", {
            phase: zB.phaseName
          }),
          onMouseDown: BB => {
            BB.preventDefault()
          },
          onClick: jB.toggle,
          children: (0, Yn.jsx)(yI, {
            phase: zB.phase
          }, zB.phase)
        })
      }) : null
    }

    function GI(BB) {
      let {
        fish: jB
      } = BB;
      return (0, Yn.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Yn.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Yn.jsx)(qn.c, {
            itemName: jB.itemName,
            amount: 0
          })
        }), (0, Yn.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: jB.displayName
          }), (0, Yn.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: jB.where
          })]
        })]
      })
    }

    function LI(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(tQ, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = xn();
      return zB.enabled ? (0, Yn.jsx)(Wn.d, {
        show: zB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Yn.jsx)(yI, {
              phase: zB.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: QB("skyblockGame:passageTitle")
              }), (0, Yn.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: zB.phaseName
              })]
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              onClick: jB.dismiss
            })]
          }), (0, Yn.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: QB("skyblockGame:passageIntro")
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Yn.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Yn.jsx)("h3", {
                children: QB("skyblockGame:passageVisiting")
              }), (0, Yn.jsx)("ul", {
                className: "SkyblockPassageList",
                children: zB.visitors.map((BB => (0, Yn.jsx)(GI, {
                  fish: BB
                }, BB.itemName)))
              })]
            }), (0, Yn.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== zB.resting && (0, Yn.jsxs)(Yn.Fragment, {
                children: [(0, Yn.jsx)("h3", {
                  children: QB("skyblockGame:passageResting")
                }), (0, Yn.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Yn.jsx)(GI, {
                    fish: zB.resting
                  })
                })]
              }), (0, Yn.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Yn.jsx)(yI, {
                  phase: zB.nextPhase
                }), (0, Yn.jsx)("span", {
                  children: zB.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function gI() {
      return (0, Yn.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((BB => (0, Yn.jsx)("i", {
          style: {
            "--sparkle-index": BB
          }
        }, BB)))
      })
    }

    function tI(BB) {
      var jB;
      let {
        charm: zB,
        view: QB,
        controller: nB
      } = BB;
      const {
        t: dB
      } = (0, Dn.D)(), IB = QB.shop, NB = (null === (jB = QB.sparkle) || void 0 === jB ? void 0 : jB.id) === zB.id;
      return (0, Yn.jsxs)("li", {
        className: tn()("SkyblockLampLightCharm", zB.owned && "Owned", zB.socketed && "Socketed"),
        children: [NB && (0, Yn.jsx)(gI, {}, QB.sparkle.count), (0, Yn.jsx)("h4", {
          children: zB.name
        }), (0, Yn.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: zB.effect
        }), (0, Yn.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: zB.lines.map((BB => (0, Yn.jsxs)("li", {
            className: tn()("SkyblockLampLightOddsLine", "better" === BB.tone ? "Better" : "worse" === BB.tone ? "Worse" : "Same"),
            children: [(0, Yn.jsx)("span", {
              className: "Before",
              children: BB.before
            }), (0, Yn.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Yn.jsx)("span", {
              className: "After",
              children: BB.after
            })]
          }, BB.label)))
        }), (0, Yn.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: zB.owned ? zB.socketed ? (0, Yn.jsxs)(Yn.Fragment, {
            children: [(0, Yn.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: dB("skyblockGame:lampLightSocketed")
            }), (0, Yn.jsx)(en.M, {
              disabled: !QB.canCommand,
              ariaLabel: dB("skyblockGame:lampLightRemoveLabel", {
                charm: zB.name
              }),
              onClick: () => {
                nB.socket(null)
              },
              children: dB("skyblockGame:lampLightRemove")
            })]
          }) : (0, Yn.jsx)(en.f, {
            disabled: !QB.canCommand || !IB.heldRod,
            ariaLabel: dB("skyblockGame:lampLightSocketLabel", {
              charm: zB.name
            }),
            onClick: () => {
              nB.socket(zB.id)
            },
            children: dB("skyblockGame:lampLightSocket")
          }) : (0, Yn.jsx)(en.f, {
            disabled: !QB.canCommand || !zB.affordable,
            ariaLabel: dB("skyblockGame:lampLightBuyLabel", {
              item: zB.name,
              cost: zB.cost
            }),
            onClick: () => {
              nB.buy(zB.id)
            },
            children: zB.cost
          })
        })]
      })
    }

    function SI(BB) {
      var jB;
      let {
        tint: zB,
        view: QB,
        controller: nB
      } = BB;
      const {
        t: dB
      } = (0, Dn.D)();
      return (0, Yn.jsxs)("li", {
        className: tn()("SkyblockLampLightTint", zB.wearing && "Wearing"),
        style: {
          "--tint-colour": zB.colour
        },
        children: [(null === (jB = QB.sparkle) || void 0 === jB ? void 0 : jB.id) === zB.id && (0, Yn.jsx)(gI, {}, QB.sparkle.count), (0, Yn.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Yn.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: zB.name
        }), zB.wearing ? (0, Yn.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: dB("skyblockGame:lampLightWearing")
        }) : (0, Yn.jsx)(en.f, {
          disabled: !QB.canCommand || !zB.owned && !zB.affordable,
          ariaLabel: zB.owned ? dB("skyblockGame:lampLightWearLabel", {
            tint: zB.name
          }) : dB("skyblockGame:lampLightBuyLabel", {
            item: zB.name,
            cost: zB.cost
          }),
          onClick: () => {
            zB.owned ? nB.wearTint(zB.id) : nB.buy(zB.id)
          },
          children: zB.owned ? dB("skyblockGame:lampLightWear") : zB.cost
        })]
      })
    }

    function MI(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(XQ, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = zB.shop;
      return (0, Yn.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Yn.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: zB.balance
          }), (0, Yn.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": zB.releasing,
            className: tn()("SkyblockLampLightSwitch", zB.releasing && "On"),
            disabled: zB.releasing ? "ready" !== zB.status : !zB.canCommand,
            onClick: () => {
              jB.setRelease(!zB.releasing)
            },
            children: [(0, Yn.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Yn.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), QB("skyblockGame:lampLightRelease")]
          }), (0, Yn.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: QB("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== zB.notice && (0, Yn.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: zB.notice
        }), null !== nB && (0, Yn.jsxs)(Yn.Fragment, {
          children: [(0, Yn.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Yn.jsx)("h3", {
              children: QB("skyblockGame:lampLightCharms")
            }), (0, Yn.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: nB.oddsFor
            }), (0, Yn.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((BB => (0, Yn.jsx)("button", {
                type: "button",
                "aria-pressed": zB.situation === BB,
                className: tn()("SkyblockLampLightSituation", zB.situation === BB && "Selected"),
                onClick: () => {
                  jB.setSituation(BB)
                },
                children: QB("open" === BB ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, BB)))
            })]
          }), !nB.heldRod && (0, Yn.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: QB("skyblockGame:lampLightHoldRod")
          }), (0, Yn.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: nB.charms.map((BB => (0, Yn.jsx)(tI, {
              charm: BB,
              view: zB,
              controller: jB
            }, BB.id)))
          }), (0, Yn.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Yn.jsx)("h3", {
              children: QB("skyblockGame:lampLightTints")
            })
          }), (0, Yn.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Yn.jsxs)("li", {
              className: tn()("SkyblockLampLightTint", "Islands", nB.wearingIslandColours && "Wearing"),
              children: [(0, Yn.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Yn.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: QB("skyblockGame:lampLightIslandColours")
              }), nB.wearingIslandColours ? (0, Yn.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: QB("skyblockGame:lampLightWearing")
              }) : (0, Yn.jsx)(en.f, {
                disabled: !zB.canCommand,
                ariaLabel: QB("skyblockGame:lampLightWearLabel", {
                  tint: QB("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  jB.wearTint(null)
                },
                children: QB("skyblockGame:lampLightWear")
              })]
            }), nB.tints.map((BB => (0, Yn.jsx)(SI, {
              tint: BB,
              view: zB,
              controller: jB
            }, BB.id)))]
          })]
        })]
      })
    }

    function EI(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(XQ, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)();
      return zB.releasing ? (0, Yn.jsx)(Mn.e, {
        children: (0, Yn.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            jB.setRelease(!1)
          },
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Yn.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [QB("skyblockGame:lampLightReleasing"), " \xb7 ", zB.balance]
          }), (0, Yn.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: QB("skyblockGame:lampLightKeepCatches")
          }), null !== zB.gained && (0, Yn.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: zB.gained.text
          }, zB.gained.count)]
        })
      }) : null
    }

    function iI(BB) {
      let {
        island: jB,
        view: zB,
        aim: QB
      } = BB;
      const {
        t: nB
      } = (0, Dn.D)(), dB = jB.featuredFish;
      return (0, Yn.jsxs)("li", {
        className: tn()("SkyblockKeepersChairIsland", `Island-${jB.id}`, jB.favoured && "Aimed", !jB.relit && "Dark"),
        children: [(0, Yn.jsx)("h3", {
          children: jB.name
        }), jB.relit && null !== dB ? (0, Yn.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: nB("skyblockGame:keepersChairTideNotice")
          }), (0, Yn.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Yn.jsx)(qn.c, {
              itemName: dB.itemName,
              amount: 0
            })
          }), (0, Yn.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: dB.displayName
          })]
        }) : (0, Yn.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Yn.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: nB("skyblockGame:keepersChairDark")
          })
        }), jB.relit && (jB.favoured ? (0, Yn.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: nB("skyblockGame:keepersChairAimed")
        }) : (0, Yn.jsx)(en.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !zB.canAim,
          ariaLabel: nB("skyblockGame:keepersChairAimLabel", {
            island: jB.name
          }),
          onClick: () => {
            QB(jB.id)
          },
          children: nB("skyblockGame:keepersChairAim")
        }))]
      }, jB.favoured ? zB.aimedCount : 0)
    }

    function qI(BB) {
      let {
        controller: jB,
        lampLight: zB
      } = BB;
      const QB = (0, Fn.h)(fQ, jB.getSnapshot()),
        nB = (0, Fn.h)(XQ, zB.getSnapshot()),
        [dB, IB] = (0, iB.useState)("lamp"),
        {
          t: NB
        } = (0, Dn.D)(),
        uB = xn();
      if (!QB.enabled) return null;
      const UB = "light" === dB && nB.enabled;
      return (0, Yn.jsx)(Wn.d, {
        show: QB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: tn()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", UB && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: uB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: NB("skyblockGame:keepersChairTitle")
              }), (0, Yn.jsx)("p", {
                children: NB(UB ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              ariaLabel: NB("skyblockGame:keepersChairClose"),
              onClick: jB.dismiss
            })]
          }), nB.enabled && (0, Yn.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((BB => (0, Yn.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === BB === UB,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === BB === UB ? "true" : void 0,
              className: tn()("SkyblockKeepersChairTab", "light" === BB === UB && "Selected"),
              onClick: () => {
                IB(BB)
              },
              children: [NB("lamp" === BB ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === BB && (0, Yn.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: nB.balance
              })]
            }, BB)))
          }), UB ? (0, Yn.jsx)(MI, {
            controller: zB
          }) : (0, Yn.jsx)(fI, {
            view: QB,
            controller: jB
          })]
        })
      })
    }

    function fI(BB) {
      let {
        view: jB,
        controller: zB
      } = BB;
      const {
        t: QB
      } = (0, Dn.D)();
      return (0, Yn.jsxs)(Yn.Fragment, {
        children: [(0, Yn.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: jB.islands.map((BB => (0, Yn.jsx)(iI, {
            island: BB,
            view: jB,
            aim: zB.aim
          }, BB.id)))
        }), null !== jB.almanac && (0, Yn.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: QB("skyblockGame:passageTitle")
          }), (0, Yn.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Yn.jsx)(yI, {
              phase: jB.almanac.phase
            }), jB.almanac.phaseName]
          }), (0, Yn.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Yn.jsx)(yI, {
              phase: jB.almanac.nextPhase
            }), jB.almanac.next]
          })]
        }), (0, Yn.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: QB("skyblockGame:keepersChairFavour")
          }), jB.aimed && (0, Yn.jsx)(en.M, {
            className: "SkyblockKeepersChairRest",
            disabled: !jB.canAim,
            onClick: () => {
              zB.aim(null)
            },
            children: QB("skyblockGame:keepersChairRest")
          })]
        }), null !== jB.status && (0, Yn.jsx)("p", {
          className: tn()("SkyblockKeepersChairStatus", "refused" === jB.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: jB.status.text
        })]
      })
    }

    function oI(BB) {
      let {
        controller: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)(), QB = (0, Fn.h)(HQ, jB.getSnapshot());
      if (!QB.enabled) return null;
      const nB = QB.freshCount > 0 ? zB("skyblockGame:reachLogOpenNews", {
        count: QB.freshCount
      }) : zB("skyblockGame:reachLogOpen");
      return (0, Yn.jsx)(Mn.e, {
        placement: "statBars",
        children: (0, Yn.jsxs)("button", {
          type: "button",
          className: tn()("SkyblockReachLogButton", QB.freshCount > 0 && "HasNews", QB.pending && "Pending"),
          "aria-label": nB,
          title: nB,
          onClick: jB.ask,
          children: [QB.news && (0, Yn.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${QB.newsToken}`), (0, Yn.jsx)("span", {
            className: tn()("SkyblockReachLogIcon", QB.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Yn.jsx)(qn.c, {
              itemName: FQ,
              amount: 0
            })
          }, `icon:${QB.newsToken}`), QB.freshCount > 0 && (0, Yn.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: QB.freshCount
          })]
        })
      })
    }

    function HI(BB) {
      let {
        gift: jB
      } = BB;
      return (0, Yn.jsx)("li", {
        className: tn()("SkyblockRegularsGift", jB.given && "Given"),
        children: jB.text
      })
    }

    function DI(BB) {
      let {
        regular: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)();
      return (0, Yn.jsxs)("li", {
        className: tn()("SkyblockRegularsCard", jB.tagged ? "Tagged" : "Untagged", jB.resting && "Resting"),
        children: [(0, Yn.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: jB.fishName,
            children: (0, Yn.jsx)(qn.c, {
              itemName: jB.itemName,
              amount: 0
            })
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Yn.jsx)("h3", {
              children: jB.name
            }), (0, Yn.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: jB.fishName
            })]
          })]
        }), (0, Yn.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: jB.line
        }), (0, Yn.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: jB.size
          }), jB.tagged && (0, Yn.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: jB.resting ? zB("skyblockGame:regularsResting") : jB.meetings
          })]
        }), (0, Yn.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: jB.chance
        }), (0, Yn.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: jB.gifts.map((BB => (0, Yn.jsx)(HI, {
            gift: BB
          }, BB.text)))
        }), jB.history.length > 0 && (0, Yn.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: jB.history.map(((BB, jB) => (0, Yn.jsx)("li", {
            children: BB
          }, jB)))
        })]
      })
    }

    function FI(BB) {
      let {
        controller: jB,
        island: zB
      } = BB;
      const {
        t: QB
      } = (0, Dn.D)(), nB = (0, Fn.h)(jn, jB.getSnapshot()), dB = nB.islands.find((BB => BB.id === zB));
      if (!nB.enabled || void 0 === dB) return null;
      const IB = QB("skyblockGame:regularsOpen");
      return (0, Yn.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": IB,
        title: IB,
        onClick: () => {
          jB.openIsland(zB)
        },
        children: [(0, Yn.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: QB("skyblockGame:regularsTitle")
        }), dB.regulars.map((BB => (0, Yn.jsx)("span", {
          className: tn()("SkyblockRegularsStripIcon", BB.tagged && "Tagged"),
          title: BB.name,
          children: (0, Yn.jsx)(qn.c, {
            itemName: BB.itemName,
            amount: 0
          })
        }, BB.id)))]
      })
    }

    function YI(BB) {
      var jB;
      let {
        controller: zB
      } = BB;
      const QB = (0, Fn.h)(jn, zB.getSnapshot()),
        {
          t: nB
        } = (0, Dn.D)(),
        dB = xn();
      if (!QB.enabled) return null;
      const IB = null !== (jB = QB.islands.find((BB => BB.id === QB.selected))) && void 0 !== jB ? jB : null;
      return (0, Yn.jsx)(Wn.d, {
        show: QB.open,
        close: zB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: dB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: nB("skyblockGame:regularsTitle")
              }), (0, Yn.jsx)("p", {
                children: nB("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              onClick: zB.dismiss
            })]
          }), (0, Yn.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: QB.islands.map((BB => {
              const jB = BB.id === QB.selected;
              return (0, Yn.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": jB,
                "data-pad-tab": !0,
                "data-pad-selected": jB ? "true" : void 0,
                className: tn()("SkyblockReachLogTab", `Island-${BB.id}`, jB && "Selected", BB.charm.given && "GoldPage"),
                onClick: () => {
                  zB.selectIsland(BB.id)
                },
                children: (0, Yn.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: BB.name
                })
              }, BB.id)
            }))
          }), (0, Yn.jsxs)("div", {
            className: tn()("SkyblockRegularsPage", null !== IB && `Island-${IB.id}`),
            role: "tabpanel",
            children: [(0, Yn.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: nB("skyblockGame:regularsHow")
            }), null !== IB && (0, Yn.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: IB.regulars.map((BB => (0, Yn.jsx)(DI, {
                regular: BB
              }, BB.id)))
            })]
          }), null !== IB && (0, Yn.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Yn.jsx)("span", {
              className: tn()("SkyblockRegularsCharm", IB.charm.given && "Given"),
              children: IB.charm.text
            })
          })]
        })
      })
    }
    const VI = [{
        "--left": "12%",
        "--tilt": "14deg",
        "--duration": "11s",
        "--delay": "-3s"
      }, {
        "--left": "62%",
        "--tilt": "-10deg",
        "--duration": "14s",
        "--delay": "-9s"
      }],
      hI = Array.from({
        length: 6
      }, ((BB, jB) => ({
        "--x": `${(88*(.618034*jB%1)).toFixed(1)}%`,
        "--y": `${(10+37*jB%70).toFixed(1)}%`,
        "--size": 7 + jB % 3 * 3 + "rem",
        "--drift-x": 3 * (jB % 3 - 1) + "rem",
        "--drift-y": 2 * (jB % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + jB % 4 * 3 + "s",
        "--delay": 2.5 * -jB + "s"
      }))),
      XI = Array.from({
        length: 14
      }, ((BB, jB) => ({
        "--left": `${(3+94*((.618034*jB+.3)%1)).toFixed(1)}%`,
        "--size": 4 + jB % 4 * 2 + "px",
        "--sway": jB % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*jB%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*jB%12).toFixed(2)}s`
      }))),
      ZI = (0, iB.memo)((function(BB) {
        let {
          island: jB
        } = BB;
        return (0, Yn.jsxs)("div", {
          className: tn()("SkyblockReachLogDepths", null !== jB && `Island-${jB}`),
          "aria-hidden": "true",
          children: [VI.map(((BB, jB) => (0, Yn.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: BB
          }, `shaft${jB}`))), hI.map(((BB, jB) => (0, Yn.jsx)("span", {
            className: tn()("SkyblockReachLogMote", jB % 2 === 1 && "Violet"),
            style: BB
          }, `mote${jB}`))), XI.map(((BB, jB) => (0, Yn.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: BB
          }, `bubble${jB}`)))]
        })
      })),
      AI = 100;

    function TI(BB) {
      let {
        view: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)();
      if (null === jB || 0 === jB.total) return null;
      const QB = AI * jB.aspect,
        nB = zB("skyblockGame:hiddenWatersCount", {
          found: jB.found,
          total: jB.total
        });
      return (0, Yn.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${zB("skyblockGame:hiddenWatersTitle")}: ${nB}`,
        children: [(0, Yn.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${QB}`,
          "aria-hidden": "true",
          children: [jB.islands.map(((BB, jB) => (0, Yn.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (BB.left + BB.width / 2) * AI,
            cy: (BB.top + BB.height / 2) * QB,
            rx: BB.width / 2 * AI,
            ry: BB.height / 2 * QB
          }, jB))), jB.pins.map(((BB, jB) => (0, Yn.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: BB.left * AI,
            cy: BB.top * QB,
            r: 13
          }, jB)))]
        }), (0, Yn.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: zB("skyblockGame:hiddenWatersTitle")
          }), (0, Yn.jsx)("span", {
            className: jB.found === jB.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: nB
          })]
        })]
      })
    }

    function PI(BB) {
      let {
        view: jB,
        island: zB
      } = BB;
      const {
        t: QB
      } = (0, Dn.D)(), nB = null === jB || void 0 === jB ? void 0 : jB.glimpses.get(zB);
      return void 0 === nB || 0 === nB.length ? null : (0, Yn.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Yn.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: QB("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Yn.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: nB.map((BB => (0, Yn.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Yn.jsx)(qn.c, {
              itemName: BB,
              amount: 0
            })
          }, BB)))
        })]
      })
    }
    const WI = ["Bronze", "Silver", "Gold"],
      eI = [{
        className: "Bloom",
        titleKey: "skyblockGame:reachLogRibbonBloomTitle",
        legendKey: "skyblockGame:reachLogLegendBloom"
      }, {
        className: "Chart",
        titleKey: "skyblockGame:reachLogRibbonChartTitle",
        legendKey: "skyblockGame:reachLogLegendChart"
      }, {
        className: "LetGo",
        titleKey: "skyblockGame:reachLogRibbonLetGoTitle",
        legendKey: "skyblockGame:reachLogLegendLetGo"
      }],
      lI = eI.slice(0, 2);

    function wI(BB) {
      return BB ? eI : lI
    }

    function xI(BB) {
      let {
        fish: jB,
        letGoShown: zB
      } = BB;
      const {
        t: QB
      } = (0, Dn.D)();
      return (0, Yn.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [WI.map(((BB, zB) => {
          const nB = zB < jB.marks;
          return (0, Yn.jsx)("span", {
            className: tn()("SkyblockReachLogPip", BB, nB && "Earned", nB && jB.fresh && zB === jB.marks - 1 && "Newest"),
            title: QB(DQ[zB])
          }, BB)
        })), (0, Yn.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), wI(zB).map(((BB, zB) => (0, Yn.jsx)("span", {
          className: tn()("SkyblockReachLogRibbon", BB.className, !0 === jB.ribbons[zB] && "Earned"),
          title: QB(BB.titleKey)
        }, BB.className)))]
      })
    }

    function KI(BB) {
      let {
        letGoShown: jB,
        haloShown: zB
      } = BB;
      const {
        t: QB
      } = (0, Dn.D)();
      return (0, Yn.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Yn.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: QB("skyblockGame:reachLogMarks"),
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), QB("skyblockGame:reachLogLegendMarks")]
        }), wI(jB).map((BB => (0, Yn.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: QB(BB.titleKey),
          children: [(0, Yn.jsx)("span", {
            className: tn()("SkyblockReachLogRibbon", BB.className, "Earned")
          }), QB(BB.legendKey)]
        }, BB.className))), (0, Yn.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: QB("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), QB("skyblockGame:reachLogLegendGlimmer")]
        }), zB && (0, Yn.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: QB("skyblockGame:reachLogHaloTitle"),
          children: [(0, Yn.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), QB("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function CI(BB) {
      let {
        returner: jB
      } = BB;
      return (0, Yn.jsxs)("div", {
        className: tn()("SkyblockReachLogReturner", jB.back && "Back"),
        children: [(0, Yn.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Yn.jsx)(qn.c, {
            itemName: jB.itemName,
            amount: 0
          })
        }), (0, Yn.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: jB.line
        })]
      })
    }

    function cI(BB) {
      let {
        fish: jB,
        letGoShown: zB
      } = BB;
      const {
        t: QB
      } = (0, Dn.D)();
      return (0, Yn.jsxs)("li", {
        className: tn()("SkyblockReachLogCard", jB.caught ? "Caught" : "Unknown", jB.marks >= 3 && "GoldCard", jB.fresh && "Fresh", jB.visitor && "Visitor"),
        children: [jB.visitor && (0, Yn.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: QB("skyblockGame:reachLogVisitor")
        }), jB.fresh && Array.from({
          length: 4
        }, ((BB, jB) => (0, Yn.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, jB))), (0, Yn.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [jB.halo && (0, Yn.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: QB("skyblockGame:reachLogHaloTitle")
          }), (0, Yn.jsx)(qn.c, {
            itemName: jB.itemName,
            amount: 0
          }), jB.glimmer && (0, Yn.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: QB("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Yn.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: jB.name
        }), (0, Yn.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: jB.chance
        }), (0, Yn.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: jB.best
        }), (0, Yn.jsx)(xI, {
          fish: jB,
          letGoShown: zB
        })]
      })
    }

    function bI(BB) {
      let {
        page: jB,
        letGoShown: zB,
        hiddenWaters: QB
      } = BB;
      const {
        t: nB
      } = (0, Dn.D)();
      return jB.awake ? (0, Yn.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: jB.fish.map((BB => (0, Yn.jsx)(cI, {
          fish: BB,
          letGoShown: zB
        }, BB.itemName)))
      }) : (0, Yn.jsxs)(Yn.Fragment, {
        children: [(0, Yn.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: nB("skyblockGame:reachLogAsleep")
        }), (0, Yn.jsx)(PI, {
          view: QB,
          island: jB.id
        })]
      })
    }

    function vI(BB) {
      var jB, zB;
      let {
        controller: QB,
        regulars: nB,
        hiddenWaters: dB
      } = BB;
      const IB = (0, Fn.h)(HQ, QB.getSnapshot()),
        NB = function(BB) {
          return (0, Fn.h)(In, BB.getSnapshot())
        }(dB),
        uB = (0, Fn.h)(jn, nB.getSnapshot()),
        {
          t: UB
        } = (0, Dn.D)(),
        aB = xn();
      if (!IB.enabled) return null;
      const pB = null !== (jB = IB.pages.find((BB => BB.id === IB.selected))) && void 0 !== jB ? jB : null;
      return (0, Yn.jsx)(Wn.d, {
        show: IB.open,
        close: QB.dismiss,
        togglePointerLock: !1,
        className: tn()("SkyblockSkillsOverlay", uB.open && "SkyblockReachLogUnderLedger"),
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: aB,
          onKeyDown: wn,
          children: [(0, Yn.jsx)(ZI, {
            island: null !== (zB = null === pB || void 0 === pB ? void 0 : pB.id) && void 0 !== zB ? zB : null
          }), (0, Yn.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: UB("skyblockGame:reachLogTitle")
              }), (0, Yn.jsx)("p", {
                children: UB("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Yn.jsx)(TI, {
              view: NB
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              onClick: QB.dismiss
            })]
          }), (0, Yn.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: IB.pages.map((BB => {
              const jB = BB.id === IB.selected,
                zB = BB.fish.some((BB => BB.fresh));
              return (0, Yn.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": jB,
                "data-pad-tab": !0,
                "data-pad-selected": jB ? "true" : void 0,
                className: tn()("SkyblockReachLogTab", `Island-${BB.id}`, jB && "Selected", !BB.awake && "Asleep", BB.gold && "GoldPage", zB && "HasNews"),
                onClick: () => {
                  QB.selectPage(BB.id)
                },
                children: [(0, Yn.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: BB.name
                }), BB.awake && (0, Yn.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: UB("skyblockGame:reachLogCaughtCount", {
                    caught: BB.caught,
                    total: BB.total
                  })
                })]
              }, BB.id)
            }))
          }), (0, Yn.jsxs)("div", {
            className: tn()("SkyblockReachLogPage", null !== pB && `Island-${pB.id}`),
            role: "tabpanel",
            children: [null !== pB && (0, Yn.jsx)(bI, {
              page: pB,
              letGoShown: IB.letGoShown,
              hiddenWaters: NB
            }), !0 === (null === pB || void 0 === pB ? void 0 : pB.awake) && null !== pB.returner && (0, Yn.jsx)(CI, {
              returner: pB.returner
            }), !0 === (null === pB || void 0 === pB ? void 0 : pB.awake) && (0, Yn.jsx)(FI, {
              controller: nB,
              island: pB.id
            })]
          }), (0, Yn.jsx)("footer", {
            className: tn()("SkyblockReachLogFooter", null !== pB && `Island-${pB.id}`, !0 === (null === pB || void 0 === pB ? void 0 : pB.gold) && "GoldPage"),
            children: !0 === (null === pB || void 0 === pB ? void 0 : pB.gold) ? (0, Yn.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: UB("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Yn.jsxs)(Yn.Fragment, {
              children: [(0, Yn.jsx)(KI, {
                letGoShown: IB.letGoShown,
                haloShown: !0 === (null === pB || void 0 === pB ? void 0 : pB.fish.some((BB => BB.halo)))
              }), (0, Yn.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: UB("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var RI = zB(4925);

    function OI(BB) {
      let {
        conversation: jB,
        completedLabel: zB
      } = BB;
      return (0, Yn.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Yn.jsxs)("header", {
          children: [(0, Yn.jsx)("h3", {
            children: jB.questName
          }), jB.completed && (0, Yn.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: zB
          })]
        }), jB.lines.map((BB => (0, Yn.jsx)(RI.e, {
          display: BB.display
        }, BB.key)))]
      })
    }

    function BN(BB) {
      let {
        controller: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)(), QB = (0, Fn.h)(un, jB.getSnapshot()), nB = xn();
      if (!QB.enabled) return null;
      const dB = !QB.loading && 0 === QB.conversations.length;
      return (0, Yn.jsx)(Wn.d, {
        show: QB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: zB("skyblockDialogue:title")
              }), (0, Yn.jsx)("p", {
                children: zB("skyblockDialogue:intro")
              })]
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              onClick: jB.dismiss
            })]
          }), (0, Yn.jsxs)("div", {
            className: tn()("SkyblockDialogueBody", {
              SingleColumn: null !== QB.questFocus || 0 === QB.characters.length
            }),
            children: [null === QB.questFocus && QB.characters.length > 0 && (0, Yn.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: QB.characters.map((BB => (0, Yn.jsx)(en.f, {
                className: tn()("SkyblockDialogueCharacter", {
                  Selected: BB.selected
                }),
                onClick: () => {
                  jB.selectCharacter(BB.id)
                },
                children: (0, Yn.jsx)(fn.e, {
                  text: BB.styling
                })
              }, BB.id)))
            }), (0, Yn.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== QB.questFocus && (0, Yn.jsx)(en.f, {
                className: "SkyblockDialogueBack",
                onClick: jB.showCharacters,
                children: zB("skyblockDialogue:allCharacters")
              }), QB.loading && (0, Yn.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: zB("skyblockDialogue:loading")
              }), dB && (0, Yn.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: zB(null === QB.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), QB.conversations.map((BB => (0, Yn.jsx)(OI, {
                conversation: BB,
                completedLabel: QB.completedLabel
              }, BB.questId)))]
            })]
          })]
        })
      })
    }

    function jN(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(sn, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = xn();
      return zB.enabled ? (0, Yn.jsx)(Wn.d, {
        show: zB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: QB("skyblockGame:autographBook")
              }), (0, Yn.jsx)("p", {
                children: QB("skyblockGame:autographBookIntro")
              })]
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              onClick: jB.dismiss
            })]
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Yn.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Yn.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Yn.jsx)("strong", {
                  children: zB.total
                }), (0, Yn.jsx)("span", {
                  children: QB("skyblockGame:autographTotal")
                })]
              }), (0, Yn.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Yn.jsx)("strong", {
                  children: zB.rankTotal
                }), (0, Yn.jsx)("span", {
                  children: QB("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === zB.entries.length ? (0, Yn.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: QB("skyblockGame:autographBookEmpty")
            }) : (0, Yn.jsx)("ul", {
              className: "SkyblockAutographList",
              children: zB.entries.map((BB => (0, Yn.jsxs)("li", {
                className: tn()("SkyblockAutograph", {
                  Ranked: null !== BB.rank
                }),
                style: null === BB.rank ? void 0 : {
                  color: BB.rank.colour
                },
                children: [null !== BB.rank && (0, Yn.jsx)(kd.c, {
                  className: "SkyblockAutographRankIcon",
                  name: BB.rank.icon,
                  kit: (0, kd.g)(BB.rank.icon)
                }), (0, Yn.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Yn.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: BB.name
                  }), (0, Yn.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== BB.rank && (0, Yn.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: BB.rank.label
                    }), (0, Yn.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: BB.signedOn
                    })]
                  })]
                })]
              }, BB.key)))
            })]
          })]
        })
      }) : null
    }
    const zN = (0, iB.memo)((function(BB) {
        let {
          controller: jB
        } = BB;
        return (0, Yn.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: jB.display.mountWaypoint,
          children: [(0, Yn.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Yn.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Yn.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Yn.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Yn.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Yn.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      QN = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function nN(BB) {
      return "next" === BB.phase ? "\u2192" : QN[BB.kind]
    }
    const dN = (0, iB.memo)((function(BB) {
      let {
        controller: jB,
        display: zB
      } = BB;
      const QB = (0, Fn.h)(pz, jB.getNotificationSnapshot()),
        [nB, dB] = (0, iB.useState)(!1);
      return (0, Fn.f)("qteStateUpdated", (BB => {
        dB(BB.isActive)
      })), (0, Yn.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (nB ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [QB && (0, Yn.jsxs)("div", {
          className: `SkyblockQuestNotification ${QB.kind} ${QB.phase}`,
          style: {
            "--quest-notification-duration": `${QB.durationMs}ms`,
            ...QB.accent && {
              "--quest-notification-accent": QB.accent
            }
          },
          children: [(0, Yn.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (QB.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Yn.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: nN(QB)
            }), QB.iconItem && (0, Yn.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Yn.jsx)(qn.c, {
                itemName: QB.iconItem,
                amount: 0
              })
            })]
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Yn.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: QB.title
            }), (0, Yn.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Yn.jsx)(Ud.e, {
                text: QB.name
              })
            }), QB.description && (0, Yn.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Yn.jsx)(Ud.e, {
                text: QB.description
              })
            }), QB.reward && (0, Yn.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Yn.jsx)(Ud.e, {
                text: QB.reward
              })
            })]
          })]
        }, QB.token), (null === QB || void 0 === QB ? void 0 : QB.waypointNameKey) && (0, Yn.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": QB.waypointNameKey,
          "data-notification-token": QB.token,
          ref: zB.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${QB.token}`)]
      })
    }));

    function IN(BB) {
      const jB = parseInt(BB.replace("#", ""), 16);
      return `${jB>>16&255}, ${jB>>8&255}, ${255&jB}`
    }
    const NN = (0, iB.memo)((function(BB) {
      let {
        controller: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)(), QB = (0, Fn.h)(Az, jB.getSnapshot());
      if (!QB) return null;
      const nB = "arrival" === QB.phase;
      return (0, Yn.jsxs)("div", {
        className: tn()("SkyblockPortalTransit", {
          Departure: !nB,
          Arrival: nB
        }),
        style: {
          "--portal-rgb": IN(QB.colour),
          "--portal-duration": `${QB.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Yn.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Yn.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            jB.finishArrival(QB.token)
          }
        }), (0, Yn.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Yn.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !nB && (0, Yn.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: zB("skyblockGame:portalTransitHeading")
          }), (0, Yn.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: zB(QB.zoneNameKey)
          })]
        })]
      }, QB.token)
    }));

    function uN() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function UN() {
      const BB = document.querySelector(".SkyblockHudCoins"),
        jB = null === BB || void 0 === BB ? void 0 : BB.getBoundingClientRect();
      return jB && jB.width > 0 ? {
        x: jB.left + Math.min(jB.width, 24) / 2,
        y: jB.top + jB.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function aN(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2
      }
    }

    function pN() {
      var BB;
      const jB = null === (BB = document.querySelector(".HotBar")) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
      return jB && jB.width > 0 ? aN(jB) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function rN(BB) {
      let {
        items: jB,
        origins: zB,
        target: QB
      } = BB;
      return (0, Yn.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: jB.map(((BB, jB) => {
          const nB = zB[jB];
          return (0, Yn.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${nB.x}px`,
              top: `${nB.y}px`,
              "--item-dx": QB.x - nB.x + "px",
              "--item-dy": QB.y - nB.y + "px",
              "--item-delay": 2e3 + 160 * jB + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Yn.jsx)(qn.c, {
              itemName: BB.dailyRewardItemName,
              amount: 0
            })
          }, BB.dailyRewardItemName)
        }))
      })
    }

    function sN(BB, jB) {
      const zB = -Math.PI / 2 + 1.25 * (BB / (jB - 1) * 2 - 1),
        QB = 70 + BB % 3 * 22;
      return {
        x: Math.cos(zB) * QB,
        y: Math.sin(zB) * QB * .7
      }
    }

    function JN(BB) {
      let {
        origin: jB,
        target: zB,
        count: QB
      } = BB;
      const nB = [];
      for (let dB = 0; dB < QB; dB++) {
        const BB = sN(dB, QB);
        nB.push((0, Yn.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${jB.x}px`,
            top: `${jB.y}px`,
            "--coin-bx": `${BB.x}px`,
            "--coin-by": `${BB.y}px`,
            "--coin-dx": zB.x - jB.x + "px",
            "--coin-dy": zB.y - jB.y + "px",
            "--coin-delay": `${wz(dB,QB)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Yn.jsx)(qn.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, dB))
      }
      return (0, Yn.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: nB
      })
    }

    function mN(BB) {
      let {
        day: jB
      } = BB;
      const zB = qB[jB - 1];
      return (0, Yn.jsxs)(Yn.Fragment, {
        children: [(0, Yn.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Yn.jsx)(qn.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Hn.g)(zB.dailyRewardCoins)]
        }), zB.dailyRewardItems.map((BB => (0, Yn.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Yn.jsx)(qn.c, {
            itemName: BB.dailyRewardItemName,
            amount: 0
          }), "\xd7", BB.dailyRewardItemAmount]
        }, BB.dailyRewardItemName)))]
      })
    }

    function yN(BB) {
      let {
        day: jB
      } = BB;
      const zB = oB(jB);
      return (0, Yn.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: qB.map(((BB, QB) => {
          const nB = QB + 1;
          return (0, Yn.jsxs)("li", {
            className: tn()("SkyblockDailyRewardTile", {
              Claimed: nB < jB && nB !== zB,
              Today: nB === jB,
              Tomorrow: nB === zB,
              Jackpot: nB === fB
            }),
            children: [(0, Yn.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: nB
            }), (0, Yn.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Yn.jsx)(qn.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Hn.g)(BB.dailyRewardCoins)]
            }), BB.dailyRewardItems.map((BB => (0, Yn.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Yn.jsx)(qn.c, {
                itemName: BB.dailyRewardItemName,
                amount: 0
              }), "\xd7", BB.dailyRewardItemAmount]
            }, BB.dailyRewardItemName)))]
          }, nB)
        }))
      })
    }

    function kN(BB) {
      let {
        view: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)(), QB = (0, iB.useRef)(null), nB = (0, iB.useRef)(null), [dB, IB] = (0, iB.useState)(null);
      (0, iB.useLayoutEffect)((() => {
        var BB;
        const jB = null === (BB = QB.current) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
        if (jB) {
          var zB, dB;
          const BB = Array.from(null !== (zB = null === (dB = nB.current) || void 0 === dB ? void 0 : dB.children) && void 0 !== zB ? zB : [], (BB => aN(BB.getBoundingClientRect())));
          IB({
            origin: aN(jB),
            target: UN(),
            itemOrigins: BB,
            itemTarget: pN()
          })
        }
      }), []);
      const NB = oB(jB.day),
        uB = function(BB, jB) {
          const [zB, QB] = (0, iB.useState)((() => uN() ? BB : 0));
          return (0, iB.useEffect)((() => {
            if (uN()) return;
            const zB = performance.now();
            let nB = 0;
            const dB = IB => {
              const NB = Math.min(Math.max((IB - zB) / jB, 0), 1);
              QB(Math.round(BB * (1 - (1 - NB) ** 3))), NB < 1 && (nB = requestAnimationFrame(dB))
            };
            return nB = requestAnimationFrame(dB), () => {
              cancelAnimationFrame(nB)
            }
          }), [BB, jB]), zB
        }(jB.coins, 450);
      return (0, Yn.jsxs)("div", {
        className: tn()("SkyblockDailyReward", {
          Jackpot: jB.day === fB
        }),
        style: {
          "--daily-duration": `${jB.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Yn.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Yn.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Yn.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Yn.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: zB("skyblockGame:dailyRewardTitle")
            }), (0, Yn.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: zB("skyblockGame:dailyRewardDay", {
                day: String(jB.day)
              })
            })]
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: QB,
            children: [(0, Yn.jsx)(qn.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Yn.jsxs)("span", {
              children: ["+", (0, Hn.g)(uB)]
            })]
          }), jB.items.length > 0 && (0, Yn.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: nB,
            children: jB.items.map((BB => (0, Yn.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Yn.jsx)(qn.c, {
                itemName: BB.dailyRewardItemName,
                amount: 0
              }), "\xd7", BB.dailyRewardItemAmount]
            }, BB.dailyRewardItemName)))
          }), (0, Yn.jsx)(yN, {
            day: jB.day
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [zB("skyblockGame:dailyRewardComeBack"), (0, Yn.jsx)(mN, {
              day: NB
            })]
          })]
        }), null !== dB && (0, Yn.jsx)(JN, {
          origin: dB.origin,
          target: dB.target,
          count: jB.flyingCoins
        }), null !== dB && dB.itemOrigins.length === jB.items.length && (0, Yn.jsx)(rN, {
          items: jB.items,
          origins: dB.itemOrigins,
          target: dB.itemTarget
        })]
      })
    }
    const GN = (0, iB.memo)((function(BB) {
        let {
          controller: jB
        } = BB;
        const zB = (0, Fn.h)(Wz, jB.getSnapshot());
        return zB ? (0, Yn.jsx)(kN, {
          view: zB
        }, zB.token) : null
      })),
      LN = "Gold Coin";

    function gN(BB) {
      return 650 + 220 * BB
    }

    function tN(BB) {
      return {
        "--letter-delay": `${gN(BB)}ms`,
        "--letter-land": `${gN(BB)+300}ms`
      }
    }

    function SN(BB) {
      let {
        letterCount: jB
      } = BB;
      return (0, Yn.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Yn.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Yn.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Yn.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: jB
        }, ((BB, jB) => (0, Yn.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: tN(jB),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, jB)))]
      })
    }

    function MN(BB) {
      var jB, zB, QB;
      let {
        letter: nB,
        index: dB
      } = BB;
      const {
        t: IB
      } = (0, Dn.D)(), NB = null !== (jB = null === (zB = nB.items[0]) || void 0 === zB ? void 0 : zB.itemName) && void 0 !== jB ? jB : LN;
      return (0, Yn.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: tN(dB),
        children: [(0, Yn.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Yn.jsx)(qn.c, {
            itemName: NB,
            amount: 0
          })
        }), (0, Yn.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: IB(nB.reasonKey, null !== (QB = nB.reasonParams) && void 0 !== QB ? QB : void 0)
        }), (0, Yn.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [nB.coins > 0 && (0, Yn.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Yn.jsx)(qn.c, {
              itemName: LN,
              amount: 0
            }), "+", (0, Hn.g)(nB.coins)]
          }), nB.items.map(((BB, jB) => (0, Yn.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Yn.jsx)(qn.c, {
              itemName: BB.itemName,
              amount: 0
            }), BB.label, " \xd7", BB.amount]
          }, jB)))]
        })]
      })
    }

    function EN(BB) {
      let {
        view: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)();
      return (0, Yn.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${jB.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${gN(jB.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Yn.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Yn.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Yn.jsx)(SN, {
              letterCount: jB.letters.length
            }), (0, Yn.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: zB("skyblockGame:mailboxTitle")
            })]
          }), (0, Yn.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: jB.letters.map(((BB, jB) => (0, Yn.jsx)(MN, {
              letter: BB,
              index: jB
            }, jB)))
          }), jB.more > 0 && (0, Yn.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: zB("skyblockGame:mailboxMore", {
              count: String(jB.more)
            })
          })]
        })
      })
    }
    const iN = (0, iB.memo)((function(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(Kz, jB.getSnapshot());
      return zB ? (0, Yn.jsx)(EN, {
        view: zB
      }, zB.token) : null
    }));

    function qN(BB) {
      let {
        controller: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)(), QB = (0, Fn.h)(AQ, jB.getSnapshot());
      if (null === QB) return null;
      const nB = QB.fullSet ? "empty" === QB.fuelState ? {
        text: zB("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: zB("skyblockGame:magmawardHudFullSet", {
          worn: String(QB.wornCount)
        }),
        tone: "partial"
      };
      return (0, Yn.jsx)(Mn.e, {
        placement: "statBars",
        children: (0, Yn.jsxs)("div", {
          className: tn()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${QB.fuelState}`, {
            "SkyblockMagmawardHud-partial": !QB.fullSet,
            "SkyblockMagmawardHud-armed": QB.fullSet && "empty" !== QB.fuelState
          }),
          children: [null !== QB.flare && (0, Yn.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${QB.flare}`
          }, `flare:${QB.flareToken}`), (0, Yn.jsx)("div", {
            className: tn()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: QB.setLit
            }),
            children: QB.pieces.map(((BB, jB) => (0, Yn.jsx)("div", {
              className: tn()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: BB.worn,
                SkyblockMagmawardPieceJustWorn: BB.justWorn
              }),
              children: (0, Yn.jsx)(qn.c, {
                itemName: BB.itemName,
                amount: 0
              })
            }, `${jB}:${BB.wornToken}`)))
          }, `pieces:${QB.setLitToken}`), (0, Yn.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Yn.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Yn.jsxs)("div", {
              className: tn()("SkyblockMagmawardFuelCounter", QB.pulse && `SkyblockMagmawardFuelCounter-${QB.pulse}`),
              children: [(0, Yn.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Yn.jsx)(qn.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Yn.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: QB.fuel
              })]
            }, `counter:${QB.pulseToken}`), "burn" === QB.pulse && (0, Yn.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${QB.pulseToken}`)]
          }), nB && (0, Yn.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${nB.tone} SmallTextBold`,
            children: nB.text
          })]
        })
      })
    }

    function fN(BB) {
      let {
        controller: jB
      } = BB;
      const {
        t: zB,
        selectedLanguage: QB
      } = (0, Dn.D)(), nB = (0, Fn.h)(PQ, jB.getSnapshot());
      return null === nB ? null : (0, Yn.jsx)(Mn.e, {
        placement: "statBars",
        children: (0, Yn.jsxs)("div", {
          className: tn()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: nB.inRange
          }),
          style: {
            "--glowtide-colour": nB.colour
          },
          "aria-label": zB("skyblockGame:glowtideChipLabel"),
          children: [(0, Yn.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), nB.inRange ? (0, Yn.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: zB("skyblockGame:glowtideChipInRange")
          }, `call:${nB.inRangeToken}`) : (0, Yn.jsxs)(Yn.Fragment, {
            children: [(0, Yn.jsx)("div", {
              ref: jB.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Yn.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: zB("skyblockGame:waypointDistance", {
                distance: SB(nB.distance, QB.code)
              })
            })]
          })]
        })
      })
    }

    function oN(BB) {
      let {
        controller: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)(), QB = (0, Fn.h)(eQ, jB.getSnapshot());
      return null === QB ? null : (0, Yn.jsx)(Mn.e, {
        placement: "statBars",
        children: (0, Yn.jsxs)("div", {
          className: tn()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: QB.full
          }),
          "aria-label": zB("skyblockGame:glowMeterLabel", {
            fill: String(QB.fill),
            Ep: String(QB.Ep)
          }),
          children: [QB.burst && (0, Yn.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${QB.burstToken}`), (0, Yn.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Yn.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${QB.ratio})`
              }
            }), QB.gained && (0, Yn.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${QB.gainToken}`), QB.full && Array.from({
              length: 5
            }, ((BB, jB) => (0, Yn.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, jB)))]
          }), QB.full && QB.rares.map((BB => (0, Yn.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Yn.jsx)(qn.c, {
              itemName: BB,
              amount: 0
            })
          }, BB))), QB.ready && (0, Yn.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Yn.jsx)("span", {
              children: zB("skyblockGame:glowMeterReady")
            })
          }, `ready:${QB.fullToken}`)]
        })
      })
    }

    function HN(BB) {
      let {
        controller: jB
      } = BB;
      const {
        t: zB
      } = (0, Dn.D)(), QB = (0, Fn.h)(wQ, jB.getSnapshot());
      if (null === QB) return null;
      const nB = "waiting" === QB.phase,
        dB = {
          animationDuration: `${QB.waitMs}ms`,
          animationDelay: -QB.elapsedMs + "ms"
        },
        IB = nB ? void 0 : {
          animationDuration: `${QB.waitMs}ms`
        };
      return (0, Yn.jsxs)("div", {
        className: nB ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [nB && (0, Yn.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((BB, jB) => (0, Yn.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, jB))), (0, Yn.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: dB
          }), (0, Yn.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Yn.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Yn.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: dB
            })]
          }), (0, Yn.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Yn.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: IB,
          children: zB(QB.line)
        }, QB.lineIndex)]
      }, QB.token)
    }

    function DN(BB) {
      let {
        chart: jB,
        showHere: zB,
        className: QB
      } = BB;
      return (0, Yn.jsx)("div", {
        className: tn()("SkyblockTideChartGrid", QB, null !== jB.pictureName && "Complete"),
        "aria-hidden": "true",
        children: jB.cells.map(((BB, QB) => {
          const nB = 0 !== (jB.pulseCells & 1 << QB),
            dB = jB.castCell === QB;
          return (0, Yn.jsx)("span", {
            className: tn()("SkyblockTideChartCell", `Cell-${BB}`, nB && "Pulse", dB && "Cast", zB && jB.hereCell === QB && "Here")
          }, `${QB}:${nB?`p${jB.pulseToken}`:""}:${dB?`c${jB.castToken}`:""}`)
        }))
      })
    }

    function FN(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(KQ, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = zB.chip;
      if (!zB.enabled || null === nB) return null;
      const dB = QB("skyblockGame:tideChartsChipLabel", {
        island: nB.islandName,
        lit: String(nB.lit),
        ink: String(nB.ink)
      });
      return (0, Yn.jsx)(Mn.e, {
        placement: "statBars",
        children: (0, Yn.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: tn()("SkyblockTideChartsChip", zB.open && "Open", null !== nB.pictureName && "Complete"),
          "aria-label": dB,
          title: dB,
          onMouseDown: BB => {
            BB.preventDefault()
          },
          onClick: jB.toggle,
          children: [(0, Yn.jsx)(DN, {
            chart: nB,
            showHere: !1,
            className: "Mini"
          }), (0, Yn.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [nB.lit, "/", nB.ink]
          })]
        })
      })
    }

    function YN(BB) {
      let {
        controller: jB
      } = BB;
      const zB = (0, Fn.h)(KQ, jB.getSnapshot()),
        {
          t: QB
        } = (0, Dn.D)(),
        nB = xn(),
        dB = zB.card;
      return zB.enabled && null !== dB ? (0, Yn.jsx)(Wn.d, {
        show: zB.open,
        close: jB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yn.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: wn,
          children: [(0, Yn.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Yn.jsxs)("div", {
              children: [(0, Yn.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: QB("skyblockGame:tideChartsTitle")
              }), (0, Yn.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: QB("skyblockGame:tideChartsIntro")
              })]
            }), (0, Yn.jsx)(en.j, {
              padIgnore: !0,
              ariaLabel: QB("skyblockGame:tideChartsClose"),
              onClick: jB.dismiss
            })]
          }), zB.tabs.length > 1 && (0, Yn.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": QB("skyblockGame:tideChartsIslands"),
            children: zB.tabs.map((BB => (0, Yn.jsx)("button", {
              type: "button",
              className: tn()("SkyblockTideChartsTab", BB.selected && "Selected"),
              "aria-pressed": BB.selected,
              onClick: () => {
                jB.zs(BB.island)
              },
              children: BB.name
            }, BB.island)))
          }), (0, Yn.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Yn.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": dB.gridLabel,
              children: (0, Yn.jsx)(DN, {
                chart: dB,
                showHere: !0,
                className: "Large"
              })
            }), (0, Yn.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Yn.jsx)("h3", {
                children: dB.islandName
              }), (0, Yn.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: dB.litText
              }), null === dB.pictureName ? (0, Yn.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: QB("skyblockGame:tideChartsPictureHidden")
              }) : (0, Yn.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: QB("skyblockGame:tideChartsPictureRevealed", {
                  picture: dB.pictureName
                })
              }, dB.pictureName), (0, Yn.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Yn.jsxs)("li", {
                  children: [(0, Yn.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), QB("skyblockGame:tideChartsLegendLit")]
                }), (0, Yn.jsxs)("li", {
                  children: [(0, Yn.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), QB("skyblockGame:tideChartsLegendClear")]
                }), null !== dB.hereCell && (0, Yn.jsxs)("li", {
                  children: [(0, Yn.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), QB("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Yn.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Yn.jsx)("span", {
                  children: zB.turnsText
                }), (0, Yn.jsx)("span", {
                  children: zB.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function VN(BB) {
      var jB;
      let {
        controller: zB
      } = BB;
      const {
        selectedLanguage: QB
      } = (0, Dn.D)(), nB = QB.code;
      (0, iB.useEffect)((() => {
        zB.setTranslator(((BB, jB) => (0, Dn.z)(nB, BB, jB)), nB, ((BB, jB) => (0, Dn.t)(nB, BB, jB)))
      }), [zB, nB]);
      const dB = (0, Fn.h)(rB, zB.map.getSnapshot()),
        {
          openInGameMenuName: IB
        } = (0, Sn.m)(["openInGameMenuName"]);
      return (0, Yn.jsxs)(Yn.Fragment, {
        children: [(0, Yn.jsx)(dN, {
          controller: zB.quests,
          display: zB.navigation.display
        }), dB.enabled && !IB && (0, Yn.jsx)(Id, {
          controller: zB.navigation
        }), (0, Yn.jsx)(Vn, {
          controller: zB,
          minimap: dB.enabled && (null === (jB = dB.presentation) || void 0 === jB ? void 0 : jB.minimap) && (0, Yn.jsx)(dd, {
            view: dB.presentation.minimap,
            navigation: zB.navigation,
            controller: zB.map
          }),
          children: (0, Yn.jsx)(yd, {
            controller: zB.quests,
            surface: "hud"
          })
        }), (0, Yn.jsx)(zN, {
          controller: zB.navigation
        }), (0, Yn.jsx)(NN, {
          controller: zB.portalTransit
        }), (0, Yn.jsx)(GN, {
          controller: zB.dailyReward
        }), (0, Yn.jsx)(iN, {
          controller: zB.mailbox
        }), (0, Yn.jsx)(qN, {
          controller: zB.magmaward
        }), (0, Yn.jsx)(fN, {
          controller: zB.glowtide
        }), (0, Yn.jsx)(kI, {
          controller: zB.passage
        }), (0, Yn.jsx)(FN, {
          controller: zB.tideCharts
        }), (0, Yn.jsx)(oN, {
          controller: zB.glowMeter
        }), (0, Yn.jsx)(oI, {
          controller: zB.reachLog
        }), (0, Yn.jsx)(HN, {
          controller: zB.hushWait
        }), (0, Yn.jsx)(EI, {
          controller: zB.lampLight
        }), (0, Yn.jsx)(Nd, {
          controller: zB.skills,
          surface: "hud"
        })]
      })
    }

    function hN(BB) {
      let {
        controller: jB
      } = BB;
      return (0, Yn.jsxs)(Yn.Fragment, {
        children: [(0, Yn.jsx)(nd, {
          controller: jB.map,
          navigation: jB.navigation
        }), (0, Yn.jsx)(Nd, {
          controller: jB.skills,
          surface: "menu"
        }), (0, Yn.jsx)(yd, {
          controller: jB.quests,
          surface: "menu"
        }), (0, Yn.jsx)(Rd, {
          controller: jB.dungeons
        }), (0, Yn.jsx)(jI, {
          controller: jB.collections
        }), (0, Yn.jsx)(nI, {
          controller: jB.questGraph
        }), (0, Yn.jsx)(UI, {
          controller: jB.forge
        }), (0, Yn.jsx)(mI, {
          controller: jB.smuggler
        }), (0, Yn.jsx)(qI, {
          controller: jB.keepersChair,
          lampLight: jB.lampLight
        }), (0, Yn.jsx)(vI, {
          controller: jB.reachLog,
          regulars: jB.regulars,
          hiddenWaters: jB.hiddenWaters
        }), (0, Yn.jsx)(YI, {
          controller: jB.regulars
        }), (0, Yn.jsx)(LI, {
          controller: jB.passage
        }), (0, Yn.jsx)(YN, {
          controller: jB.tideCharts
        }), (0, Yn.jsx)(BN, {
          controller: jB.dialogue
        }), (0, Yn.jsx)(jN, {
          controller: jB.autographs
        })]
      })
    }
    var XN = zB(36830);
    const ZN = jQ + uQ;

    function AN(BB, jB, zB, QB, nB) {
      const dB = [],
        IB = [],
        NB = zB => {
          const QB = BB.playSound(jB, zB.sound, zB.volume, zB.rate);
          QB && (IB.push(QB), void 0 !== zB.cutAfter && dB.push(setTimeout((() => {
            QB.fade(QB.getVolume(), 0, 300)
          }), zB.cutAfter)))
        };
      for (const uB of function(BB, jB) {
          const zB = [{
            sound: "rpgKnifeSlice1",
            beat: jQ,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: jQ,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: jQ,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: jQ,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: jQ,
            lead: 60,
            volume: .6,
            rate: 1
          }, {
            sound: "zapAccent1",
            beat: 360,
            lead: 60,
            volume: .3,
            rate: 1.3
          }, {
            sound: (0, XN.f)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: ZN + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, XN.f)("bigDrumSwish"),
            beat: ZN + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: ZN + 60,
            lead: 180,
            volume: .5 + .06 * BB,
            rate: .82 + .07 * BB
          }];
          return BB >= 4 && zB.push({
            sound: "exp_levelup",
            beat: ZN + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), jB && zB.push({
            sound: "trumpetFlare",
            beat: ZN + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), zB.push({
            sound: "harp_pling",
            beat: zQ,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), zB
        }(zB, QB)) nB ? dB.push(setTimeout((() => {
        NB(uB)
      }), Math.max(0, uB.beat - uB.lead / uB.rate))) : uB.beat !== jQ && "magicAccent2" !== uB.sound && "trumpetFlare" !== uB.sound || NB(uB);
      return () => {
        for (const BB of dB) clearTimeout(BB);
        for (const BB of IB) BB.fade(BB.getVolume(), 0, 120)
      }
    }
    class TN {
      constructor(BB) {
        this.deps = BB, this.pending = new Map, this.localHook = null
      }
      hookWaiting(BB, jB) {
        this.pending.delete(BB);
        const zB = this.deps.now();
        if (null === jB) {
          var QB;
          if ((null === (QB = this.localHook) || void 0 === QB ? void 0 : QB.hookId) === BB) {
            const BB = zB >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(BB)
          }
          return
        }
        const nB = zB + jB;
        this.settle(BB, nB) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(BB, {
          untilMs: zB + 1e3,
          biteAtMs: nB
        }))
      }
      getLocalHook() {
        var BB, jB;
        return null !== (BB = null === (jB = this.localHook) || void 0 === jB ? void 0 : jB.hookId) && void 0 !== BB ? BB : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const BB = this.deps.now();
        for (const [jB, {
            untilMs: zB,
            biteAtMs: QB
          }] of this.pending)(this.settle(jB, QB) || BB > zB) && this.pending.delete(jB)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(BB, jB) {
        const zB = this.deps.getLineOwner(BB);
        if (null === zB) return !1;
        if (!this.deps.isLocalPlayer(zB)) return !0;
        if (this.localHook = {
            hookId: BB,
            biteAtMs: jB
          }, !this.deps.isHushWaiting()) {
          const [jB, zB] = this.deps.getHookPosition(BB);
          this.deps.onCastLanded(jB, zB)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var PN = zB(4334);
    const WN = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      eN = {
        1: {
          count: 24,
          rise: 2.5,
          colour: [79, 237, 237]
        },
        2: {
          count: 40,
          rise: 3.5,
          colour: [245, 209, 66]
        },
        3: {
          count: 64,
          rise: 5,
          colour: [206, 145, 206]
        }
      };
    class lN {
      constructor(BB) {
        this.deps = BB, this.tell = null
      }
      receiveTell(BB) {
        let {
          biteTellTier: jB
        } = BB;
        this.tell = {
          tier: jB,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(BB) {
        const jB = this.tell;
        if (this.tell = null, !BB) return;
        const zB = null !== jB && this.deps.now() - jB.atMs <= 3e3 ? jB.tier : 0;
        this.deps.vibrate(WN[zB])
      }
      burstAtHook() {
        const BB = this.tell,
          jB = this.deps.getLocalHookPosition();
        null === BB || BB.burst || null === jB || (BB.burst = !0, this.deps.playParticles(function(BB, jB) {
          let [zB, QB, nB] = jB;
          const {
            count: dB,
            rise: IB,
            colour: NB
          } = eN[BB], [uB, UB, aB] = NB;
          return {
            texture: "glint",
            pos1: [zB - .3, QB, nB - .3],
            pos2: [zB + .3, QB + .2, nB + .3],
            dir1: [-.6, IB, -.6],
            dir2: [.6, 1.4 * IB, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: dB,
            gravity: [0, -4, 0],
            velocityGradients: [{
              timeFraction: 0,
              factor: 1,
              factor2: 1
            }, {
              timeFraction: 1,
              factor: .2,
              factor2: .2
            }],
            colorGradients: [{
              timeFraction: 0,
              minColor: [uB, UB, aB, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [uB, UB, aB, 0],
              maxColor: [uB, UB, aB, 0]
            }],
            blendMode: PN.d.Add,
            hideDist: 48
          }
        }(BB.tier, jB)))
      }
    }
    var wN = zB(1284),
      xN = zB(1991),
      KN = zB(41);

    function CN(BB, jB) {
      return [{
        timeFraction: 0,
        minColor: [255 * BB[0], 255 * BB[1], 255 * BB[2], 1],
        maxColor: [255 * jB[0], 255 * jB[1], 255 * jB[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const cN = [0, 0, 0],
      bN = {
        texture: "glint",
        mipmaps: !1,
        Ep: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: cN,
        dir2: cN,
        blendMode: PN.d.OneOne
      },
      vN = {
        ...bN,
        colorGradients: CN([1, .88, .38], [1, .65, .15])
      },
      RN = {
        ...bN,
        colorGradients: CN([.55, .95, 1], [.9, 1, 1])
      },
      ON = [.5, .5, .5],
      Bu = {
        texture: "glint",
        mipmaps: !1,
        Ep: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: CN([1, .12, .12], [1, .35, .2]),
        blendMode: PN.d.OneOne
      };
    class ju {
      constructor() {
        this.drops = new Map
      }
      VJ(BB, jB) {
        if ("overflowFlash" === jB.kind) {
          const [zB, QB, nB] = jB.position, dB = BB.createParticles(Bu, {
            pos: [zB, QB, nB],
            half: ON
          });
          return dB.emit(18), void dB.stop()
        }
        this.drops.has(jB.itemId) || this.drops.set(jB.itemId, {
          owner: jB.owner,
          cosmetic: jB.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      vp(BB) {
        if (0 === this.drops.size) return;
        const jB = performance.now(),
          zB = BB.getCameraPosition();
        let QB = 0;
        for (const dB of this.drops.values()) null !== dB.particles && QB++;
        for (const [dB, IB] of this.drops) {
          const NB = BB.getPositionView(dB);
          if (null === NB) {
            var nB;
            if (IB.seen || jB - IB.markedAt > 5e3) null !== IB.particles && QB--, null === (nB = IB.particles) || void 0 === nB || nB.stop(), this.drops.delete(dB);
            continue
          }
          IB.cosmetic || !BB.isLocalPlayer(IB.owner) || IB.pickupDelayCleared || (BB.clearPickupDelay(dB), IB.pickupDelayCleared = !0);
          const uB = IB.lastPosition,
            UB = IB.seen && (NB[0] - uB[0]) ** 2 + (NB[1] - uB[1]) ** 2 + (NB[2] - uB[2]) ** 2 > 4e-4,
            aB = (NB[0] - zB[0]) ** 2 + (NB[1] - zB[1]) ** 2 + (NB[2] - zB[2]) ** 2 < 2025;
          IB.seen = !0, uB[0] = NB[0], uB[1] = NB[1], uB[2] = NB[2], UB && (IB.lastMovingAt = jB), null !== IB.particles && (!aB || jB - IB.lastMovingAt > 500) && (IB.particles.stop(), IB.particles = null, QB--), UB && aB && null === IB.particles && QB < 32 && (IB.particles = BB.createParticles(IB.cosmetic ? RN : vN, {
            pos: NB
          }), QB++), null !== IB.particles && (IB.particles.moveTo(NB), IB.particles.setEmitRate(UB ? 12 : 0)), !UB && null === IB.particles && jB - Math.max(IB.lastMovingAt, IB.markedAt) > 2e3 && this.drops.delete(dB)
        }
      }
      dispose() {
        for (const jB of this.drops.values()) {
          var BB;
          null === (BB = jB.particles) || void 0 === BB || BB.stop()
        }
        this.drops.clear()
      }
    }
    var zu = zB(214);
    const Qu = zu.e.Bk * zu.e.playerEyeToHeightRatio;
    class nu {
      constructor(BB) {
        this.host = BB, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      VJ(BB) {
        this.lava = BB, this.nextUpdateAt = 0
      }
      vp() {
        var BB;
        const jB = this.host.now();
        if (jB < this.nextUpdateAt) return;
        this.nextUpdateAt = jB + 250;
        const zB = this.host.playerPosition(),
          QB = zB && this.findNearest([zB[0], zB[1] + Qu, zB[2]]);
        if (!QB || QB.distance >= 40) return void this.stop();
        const nB = .5 * Math.min(1, (40 - QB.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(nB) : this.loop = this.host.play("lavaFlow", nB, QB.position, 40 + Qu, 9, !0), null === (BB = this.loop) || void 0 === BB || BB.setPosition(QB.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var BB;
        null === (BB = this.loop) || void 0 === BB || BB.stop(), this.loop = null
      }
      findNearest(BB) {
        let jB = -1,
          zB = 1 / 0;
        for (let QB = 0; QB < this.lava.length; QB += 3) {
          const nB = this.lava[QB] - BB[0],
            dB = this.lava[QB + 1] - BB[1],
            IB = this.lava[QB + 2] - BB[2],
            NB = nB * nB + dB * dB + IB * IB;
          NB < zB && (zB = NB, jB = QB)
        }
        return jB < 0 ? null : {
          position: [this.lava[jB], this.lava[jB + 1], this.lava[jB + 2]],
          distance: Math.sqrt(zB)
        }
      }
    }
    var du = zB(1964),
      Iu = zB(38742);
    const Nu = {
      "Grey Portal": "Gray"
    };
    for (const su of nB.Kc) Nu[`${su} Portal`] = su;
    const uu = Object.keys(Nu),
      Uu = Object.fromEntries(uu.map((BB => [BB, (0, nB.W)(nB.E[`${(0,nB.He)(Nu[BB])}Team`])])));
    Object.fromEntries(uu.map((BB => [BB, nB.E[`${(0,nB.He)(Nu[BB])}UiText`]])));
    class au {
      constructor(BB, jB) {
        this.presentation = BB, this.portal = jB, this.unlocked = void 0
      }
      VJ(BB) {
        const jB = !1 === this.unlocked && BB;
        this.unlocked = BB, this.vp();
        const {
          min: zB,
          max: QB,
          unlockedBlock: nB
        } = this.portal;
        if (jB && this.presentation.hasChunk(...zB)) {
          const [BB, jB, dB] = Uu[nB];
          this.presentation.playParticles({
            pos1: [...zB],
            pos2: QB.map((BB => BB + 1)),
            dir1: [-1, 0, -1],
            dir2: [1, 1, 1],
            texture: "glint",
            minLifeTime: .4,
            maxLifeTime: 1.2,
            minEmitPower: .5,
            maxEmitPower: 1.5,
            minSize: .12,
            maxSize: .25,
            manualEmitCount: 80,
            hideDist: 64,
            gravity: [0, .5, 0],
            colorGradients: [{
              timeFraction: 0,
              minColor: [BB, jB, dB, 1],
              maxColor: [Math.min(255, BB + 55), Math.min(255, jB + 55), Math.min(255, dB + 90), 1]
            }],
            velocityGradients: [{
              timeFraction: 0,
              factor: 1,
              factor2: 1
            }],
            blendMode: 1
          })
        }
      }
      vp() {
        var BB;
        const jB = this.unlocked ? this.portal.unlockedBlock : null !== (BB = this.portal.lockedBlock) && void 0 !== BB ? BB : "Light Gray Portal",
          {
            min: zB,
            max: QB
          } = this.portal;
        for (let nB = zB[0]; nB <= QB[0]; nB++)
          for (let BB = zB[1]; BB <= QB[1]; BB++)
            for (let dB = zB[2]; dB <= QB[2]; dB++) this.presentation.hasChunk(nB, BB, dB) && this.presentation.JG(nB, BB, dB) !== jB && this.presentation.eD(nB, BB, dB, jB)
      }
    }
    const pu = {
        farming_1: {
          raises: BB => "NPC" === BB.type && "chef" === BB.variation,
          rise: .4
        },
        fishing_1: {
          raises: BB => "Draugr Warper" === BB.type,
          rise: .4
        }
      },
      ru = (BB, jB, zB, dB) => {
        let {
          localPlayerId: IB
        } = dB;
        const NB = new Ln({
          translate: (BB, jB) => (0, Dn.z)(wN.c.get().getCurrentLanguageCode(), BB, jB),
          translateWithIcons: (BB, jB) => (0, Dn.t)(wN.c.get().getCurrentLanguageCode(), BB, jB),
          setMenuOpen: BB => {
            BB ? (0, KB.o)() : (0, KB.d)()
          },
          dismissMenu: KB.f,
          publishSkills: BB => {
            CB.n.Ly(Iz, BB, !0)
          },
          publishQuests: BB => {
            CB.n.Ly(az, BB, !0)
          },
          publishQuestNotification: BB => {
            CB.n.Ly(pz, BB, !0)
          },
          publishDungeons: BB => {
            CB.n.Ly(Jz, BB, !0)
          },
          publishCollections: BB => {
            CB.n.Ly(Xz, BB, !0)
          },
          publishMap: BB => {
            CB.n.Ly(rB, BB, !0)
          },
          publishHud: BB => {
            CB.n.Ly(yn, BB, !0)
          },
          publishPortalTransit: BB => {
            CB.n.Ly(Az, BB, !0)
          },
          isLoadingScreenUp: () => Sn.c.get("loadingOverlayVisible"),
          publishDailyReward: BB => {
            CB.n.Ly(Wz, BB, !0)
          },
          publishMailbox: BB => {
            CB.n.Ly(Kz, BB, !0)
          },
          publishQuestGraph: BB => {
            CB.n.Ly(cz, BB, !0)
          },
          publishForge: BB => {
            CB.n.Ly(mQ, BB, !0)
          },
          publishSmuggler: BB => {
            CB.n.Ly(GQ, BB, !0)
          },
          publishKeepersChair: BB => {
            CB.n.Ly(fQ, BB, !0)
          },
          publishReachLog: BB => {
            CB.n.Ly(HQ, BB, !0)
          },
          publishLampLight: BB => {
            CB.n.Ly(XQ, BB, !0)
          },
          publishMagmaward: BB => {
            CB.n.Ly(AQ, BB, !0)
          },
          publishGlowtide: BB => {
            CB.n.Ly(PQ, BB, !0)
          },
          publishGlowMeter: BB => {
            CB.n.Ly(eQ, BB, !0)
          },
          publishHushWait: BB => {
            CB.n.Ly(wQ, BB, !0)
          },
          publishPassage: BB => {
            CB.n.Ly(tQ, BB, !0)
          },
          publishTideCharts: BB => {
            CB.n.Ly(KQ, BB, !0)
          },
          publishRegulars: BB => {
            CB.n.Ly(jn, BB, !0)
          },
          publishHiddenWaters: BB => {
            CB.n.Ly(In, BB, !0)
          },
          publishDialogue: BB => {
            CB.n.Ly(un, BB, !0)
          },
          publishAutographs: BB => {
            CB.n.Ly(sn, BB, !0)
          },
          onDailyRewardStarted: BB => {
            FB.playSound(IB, BB.day === fB ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (BB, jB) => {
            FB.playSound(IB, "exp_collect", .35, 1 + .6 * BB / (jB - 1)), CB.n.Ly(ez, BB === jB - 1)
          },
          onDailyRewardItemLanded: BB => {
            FB.playSound(IB, "pickUp", .6, 1 + .15 * BB)
          },
          onMailboxStarted: () => {
            FB.playSound(IB, "rpgMetalClick", .6, 1), FB.playSound(IB, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            FB.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: KN.k,
          requestTracking: BB => {
            FB.sendCommand(`quests track ${BB}`)
          },
          requestDungeonEnter: (BB, jB) => {
            FB.sendCommand(`dungeonEnter ${BB} ${jB}`)
          },
          requestQuestJump: BB => {
            FB.sendCommand(`${VB} jump ${BB}`)
          },
          requestQuestArrive: (BB, jB) => {
            const zB = `${VB} arrive ${BB}`;
            FB.sendCommand(jB ? `${zB} complete` : zB)
          },
          requestForge: BB => {
            let {
              blade: jB,
              guard: zB,
              handle: QB
            } = BB;
            FB.sendCommand(`forge ${jB} ${zB} ${QB}`)
          },
          requestDialogue: () => {
            FB.sendCommand("quests dialogue")
          },
          requestSmuggle: (BB, jB) => {
            FB.sendCommand(`smuggle ${BB} ${jB}`)
          },
          requestKeepersChairAim: BB => {
            FB.sendCommand(`keeperschair-aim ${BB}`)
          },
          requestReachLogOpen: () => {
            FB.sendCommand("reachlog-open")
          },
          requestLampLight: BB => {
            FB.sendCommand(`${BB}`)
          },
          requestTravel: BB => {
            FB.sendCommand(`map travel ${BB.kind} ${BB.id} ${BB.requestId}`)
          }
        });
        let uB, UB, aB, pB, sB, JB, mB, gB, tB, SB, MB, qB, oB;
        const DB = new ju;
        let FB, YB = null;
        const hB = pu[null !== zB && void 0 !== zB ? zB : ""],
          TB = (BB, jB) => {
            null !== hB && void 0 !== hB && hB.raises(jB) && FB.setNametagOffset(BB, hB.rise)
          },
          eB = new lN({
            getLocalHookPosition: () => {
              const BB = lB.getLocalHook();
              return null !== BB && FB.checkValid(BB) ? FB.iG(BB) : null
            },
            playParticles: BB => {
              FB.playParticleEffect(BB)
            },
            vibrate: BB => {
              cB.h.play("fishBite", BB)
            },
            now: () => performance.now()
          }),
          lB = new TN({
            getLineOwner: BB => FB.checkValid(BB) ? FB.getLineOwner(BB) : null,
            isLocalPlayer: BB => FB.isLocalPlayer(BB),
            getHookPosition: BB => {
              const [jB, , zB] = FB.iG(BB);
              return [jB, zB]
            },
            isHushWaiting: () => {
              var BB;
              return "waiting" === (null === (BB = NB.hushWait.getSnapshot()) || void 0 === BB ? void 0 : BB.phase)
            },
            onCastLanded: (BB, jB) => {
              NB.tideCharts.castLanded(BB, jB)
            },
            onLocalHookSettled: () => {
              eB.onLocalHookSettled()
            },
            onLocalWaitEnded: BB => {
              eB.onLocalWaitEnded(BB)
            },
            now: () => performance.now()
          }),
          bB = new nu({
            now: () => performance.now(),
            playerPosition: () => FB.checkValid(IB) ? FB.iG(IB) : null,
            play: (BB, jB, zB, QB, nB, dB) => FB.playSound(IB, BB, jB, 1, {
              nB: zB,
              maxHearDist: QB,
              refDistance: nB
            }, dB)
          }),
          vB = new Map;
        let RB;
        return {
          onCreate: BB => {
            if (FB = BB, YB = new Iu.SkyblockEntityFacing(BB, hB ? TB : null), NB.portalTransit.resumeArrival(null !== zB && void 0 !== zB ? zB : null), (null !== zB && void 0 !== zB ? zB : QB) === QB) {
              let BB = -1 / 0;
              RB = CB.n.subscribe("toggleMenu", (jB => {
                const zB = performance.now();
                "inventory|Workbench" !== jB || "cross_to_hub" !== NB.quests.getTrackedQuestId() || zB - BB < 1e4 || (BB = zB, FB.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [QB, nB] of Object.entries(null !== (jB = XB[null !== zB && void 0 !== zB ? zB : ""]) && void 0 !== jB ? jB : {})) {
              var jB;
              vB.set(QB, new au({
                hasChunk: (jB, zB, QB) => BB.isBlockInLoadedChunk(jB, zB, QB),
                JG: (jB, zB, QB) => BB.blockIdToBlockName(BB.getBlockId(jB, zB, QB)),
                eD: (jB, zB, QB, nB) => {
                  BB.eD(jB, zB, QB, nB)
                },
                playParticles: jB => {
                  BB.playParticleEffect(jB)
                }
              }, nB))
            }
            oB = (0, du.g)((BB => function(BB) {
              return Object.hasOwn(wj, BB) || BB.startsWith("npc_")
            }(BB) ? Kj(BB) : null)), NB.resolveItemName = (jB, zB) => {
              const QB = BB.getItemStat(IB, jB, "displayName");
              return QB && "object" === typeof QB && "translationKey" in QB ? zB(QB.translationKey, (0, Dn.p)(QB.params, xN.b.shown)) : "string" === typeof QB ? zB(QB) : jB
            }, NB.quests.notifications.onShown = BB => {
              "quest" === BB ? FB.playSound(IB, "magicAccent1", 1, 1) : "skillLevel" === BB ? FB.playSound(IB, "magicAccent1", 1, .6) : "landmark" === BB ? FB.playSound(IB, "trumpetFlare", 1, .6) : "npcNote" === BB ? FB.playSound(IB, "magicAccent2", .8, 1.1) : "started" === BB ? FB.playSound(IB, (0, XN.f)("bigDrumSwish"), 1, 1) : FB.playSound(IB, (0, XN.f)("rpgHandleSmallLeather"), 1, 1)
            }, NB.forge.onPartSelected = () => {
              FB.playSound(IB, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, NB.forge.onOpened = () => {
              ! function(BB) {
                BB.preloadSounds([(0, XN.f)("firecracker"), "fireBurn", "magicAccent2"])
              }(BB)
            }, NB.forge.onForgeStarted = (jB, zB, QB) => AN(BB, IB, jB, zB, QB), NB.smuggler.onBought = () => {
              FB.playSound(IB, (0, XN.f)("rpgHandleSmallLeather"), 1, 1), FB.playSound(IB, "chestOpen", .6, 1)
            }, NB.compass.register(new yB(NB.map, !0)), NB.compass.register(new yB(NB.map, !1)), NB.compass.register(new GB(NB.map)), NB.compass.register(new LB((() => NB.quests.getSnapshot().compassTarget)));
            for (const zB of ["enemy", "npc"]) NB.compass.register(new kB(NB.map, zB, (jB => BB.checkValid(jB) ? BB.iG(jB) : void 0), (jB => BB.isAlive(jB))))
          },
          onAfterRender: (BB, jB) => {
            const zB = FB.checkValid(IB) ? FB.iG(IB) : null;
            NB.navigation.afterRender(zB, performance.now(), jB), NB.glowtide.afterRender(zB, jB.cameraHeading), NB.tideCharts.afterRender(zB), lB.afterRender()
          },
          onClose: () => {
            var BB, jB, zB, QB, nB, dB, IB, rB, JB, yB, kB, GB, LB, EB, iB;
            RB && CB.n.unsubscribe(RB), null === (BB = oB) || void 0 === BB || BB(), DB.dispose(), bB.dispose(), null === (jB = YB) || void 0 === jB || jB.dispose(), lB.dispose(), NB.dispose(), null === (zB = uB) || void 0 === zB || zB(), null === (QB = UB) || void 0 === QB || QB(), null === (nB = aB) || void 0 === nB || nB(), null === (dB = pB) || void 0 === dB || dB(), null === (IB = sB) || void 0 === IB || IB(), null === (rB = mB) || void 0 === rB || rB(), null === (JB = undefined) || void 0 === JB || JB(), null === (yB = gB) || void 0 === yB || yB(), null === (kB = tB) || void 0 === kB || kB(), null === (GB = SB) || void 0 === GB || GB(), null === (LB = MB) || void 0 === LB || LB(), null === (EB = undefined) || void 0 === EB || EB(), null === (iB = qB) || void 0 === iB || iB()
          },
          onPlayerChangeBlock: (BB, jB, QB, dB, uB, UB) => {
            if (BB === IB && "Air" === UB) {
              const BB = FB.getClientOption(IB, "creative");
              NB.skills.predictBlock([jB, QB, dB], uB, BB);
              const UB = function(BB, jB) {
                  if ("hub" === jB || "farming_1" === jB || "mining_1" === jB) return !PB.has(BB) || "hub" !== jB && "mining_1" !== jB ? Object.hasOwn(AB, BB) ? AB[BB] : void 0 : ZB
                }(uB, zB),
                aB = ("hub" === zB || "mining_1" === zB) && (nB.wd.some((BB => BB === uB)) || Object.hasOwn(WB, uB) || "mining_1" === zB && "Block of Coal" === uB);
              BB || void 0 === UB && !aB || FB.eD(jB, QB, dB, null !== UB && void 0 !== UB ? UB : ZB)
            }
          },
          onPlayerAttackEntity: (BB, jB) => {
            if (BB !== IB || "Player" !== FB.getEntityType(jB)) return;
            const [zB, QB, nB] = FB.iG(jB);
            FB.burstParticlePreset("critical", [zB, QB + 1, nB], 10)
          },
          onChangeBlockFail: BB => {
            for (const {
                GB: jB
              }
              of BB) NB.skills.rejectBlock(jB)
          },
          onReceivedMessageFromServer: (BB, jB) => {
            if ("skyblockGatedPortal" === BB) {
              var zB;
              const [BB, QB] = jB;
              return void(null === (zB = vB.get(BB)) || void 0 === zB || zB.VJ(QB))
            }
            if ("skyblockDailyReward" === BB) return void NB.dailyReward.VJ(jB);
            if ("skyblockMailbox" === BB) return void NB.mailbox.VJ(jB);
            if ("skyblockPortalTransit" === BB) return void NB.portalTransit.VJ(jB);
            if ("skyblockLoot" === BB) return void DB.VJ(FB, jB);
            if ("skyblockLava" === BB) return void bB.VJ(jB);
            if ("skyblockForge" === BB) return void NB.forge.VJ(jB);
            if ("skyblockMagmaward" === BB) return void NB.magmaward.VJ(jB);
            if ("skyblockGlowtide" === BB) return void NB.glowtide.VJ(jB);
            if ("skyblockGlowMeter" === BB) return void NB.glowMeter.VJ(jB);
            if ("skyblockHushWait" === BB) return void NB.hushWait.VJ(jB);
            if ("skyblockPassage" === BB) {
              const BB = jB;
              return NB.passage.VJ(BB), NB.reachLog.receivePassagePhase(BB.passagePhase), SB ??= (0, EB.t)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: NB.passage.show
              }), void NB.keepersChair.receivePassage({
                keepersChairPassagePhase: BB.passagePhase,
                keepersChairPassageNextPhase: BB.passageNextPhase,
                keepersChairPassageTurnsInMs: BB.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === BB) {
              const BB = jB;
              return NB.tideCharts.VJ(BB), void(BB.tideCharts.length > 0 && (MB ??= (0, EB.t)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: NB.tideCharts.show
              })))
            }
            if (BB === wB.A) {
              var QB;
              const {
                hookId: BB,
                waiting: zB
              } = jB;
              return void lB.hookWaiting(BB, null !== (QB = null === zB || void 0 === zB ? void 0 : zB.remainingMs) && void 0 !== QB ? QB : null)
            }
            if ("skyblockBiteTell" === BB) return void eB.receiveTell(jB);
            if ("skyblockSmuggler" === BB) return void NB.smuggler.VJ(jB);
            if ("skyblockKeepersChair" === BB) return NB.keepersChair.VJ(jB), void NB.lampLight.setAtChair(NB.keepersChair.isAtChair());
            if ("skyblockLampLight" === BB) {
              const BB = jB;
              var nB;
              if (NB.lampLight.VJ(BB), BB.lampLightReleasing) tB ??= (0, EB.t)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  NB.lampLight.setRelease(!1)
                }
              });
              else null === (nB = tB) || void 0 === nB || nB(), tB = void 0;
              return
            }
            if ("skyblockRegulars" === BB) return void NB.regulars.VJ(jB);
            if ("skyblockHiddenWaters" === BB) return void NB.hiddenWaters.VJ(jB);
            if ("skyblockReachLog" === BB) return NB.reachLog.VJ(jB), void(gB ??= (0, EB.t)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: FQ
              },
              onClick: NB.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === BB) {
              for (const [BB, zB, QB, nB] of jB) FB.eD(BB, zB, QB, nB);
              return
            }
            if ("skyblockHud" === BB) NB.receiveHud(jB);
            else if ("skyblockMap" === BB) NB.map.VJ(jB);
            else if (BB === xB.e) NB.skills.VJ(jB);
            else if (BB === HB && "dialogue" === jB.kind) NB.dialogue.VJ(jB);
            else if (BB === HB) NB.quests.VJ(jB);
            else if ("skyblockDungeons" === BB) NB.dungeons.VJ(jB);
            else if ("sbCollections" === BB) NB.collections.VJ(jB);
            else if ("skyblockQuestGraph" === BB) NB.questGraph.VJ(jB);
            else {
              if ("skyblockAutographs" !== BB) return;
              NB.autographs.VJ(jB)
            }
            if (!UB && NB.map.getSnapshot().enabled) {
              const BB = (0, EB.t)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: NB.map.show
                }),
                jB = (0, KB.r)(NB.map.show);
              UB = () => {
                BB(), jB()
              }
            }!aB && NB.skills.getSnapshot().enabled && (aB = (0, EB.t)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: NB.skills.show
            })), !mB && NB.collections.getSnapshot().enabled && (mB = (0, EB.t)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: NB.collections.show
            })), !pB && NB.quests.getSnapshot().enabled && (pB = (0, EB.t)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: NB.quests.show
            })), !qB && NB.autographs.getSnapshot().enabled && (qB = (0, EB.t)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: NB.autographs.show
            }));
            const dB = NB.dungeons.getSnapshot().enabled;
            var IB;
            (aB || pB || dB) && JB !== dB && (JB = dB, null === (IB = sB) || void 0 === IB || IB(), sB = (0, EB.t)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Vj
              },
              disabled: !dB,
              panel: !0,
              onClick: NB.dungeons.show
            }));
            uB || (uB = (0, KB.t)((0, iB.createElement)(VN, {
              controller: NB
            }), {
              content: (0, iB.createElement)(hN, {
                controller: NB
              }),
              onClose: NB.close
            }))
          },
          vp: () => {
            var BB;
            for (const jB of vB.values()) jB.vp();
            DB.vp(FB), bB.vp(), null === (BB = YB) || void 0 === BB || BB.vp(), NB.skills.vp(), NB.quests.vp(), NB.dailyReward.vp(), NB.mailbox.vp(), NB.map.vp()
          }
        }
      }
  },
  36439: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      e: () => QB
    });
    const QB = "skyblockSkills",
      nB = "skills_test_gym"
  },
  34270: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      g: () => IB
    });
    const QB = [{
      threshold: 10n ** 180n,
      suffix: "NoQig"
    }, {
      threshold: 10n ** 177n,
      suffix: "OcQig"
    }, {
      threshold: 10n ** 174n,
      suffix: "SpQig"
    }, {
      threshold: 10n ** 171n,
      suffix: "SQig"
    }, {
      threshold: 10n ** 168n,
      suffix: "QiQig"
    }, {
      threshold: 10n ** 165n,
      suffix: "QaQig"
    }, {
      threshold: 10n ** 162n,
      suffix: "TQig"
    }, {
      threshold: 10n ** 159n,
      suffix: "DQig"
    }, {
      threshold: 10n ** 156n,
      suffix: "UQig"
    }, {
      threshold: 10n ** 153n,
      suffix: "Qig"
    }, {
      threshold: 10n ** 150n,
      suffix: "NoQag"
    }, {
      threshold: 10n ** 147n,
      suffix: "OcQag"
    }, {
      threshold: 10n ** 144n,
      suffix: "SpQag"
    }, {
      threshold: 10n ** 141n,
      suffix: "SQag"
    }, {
      threshold: 10n ** 138n,
      suffix: "QiQag"
    }, {
      threshold: 10n ** 135n,
      suffix: "QaQag"
    }, {
      threshold: 10n ** 132n,
      suffix: "TQag"
    }, {
      threshold: 10n ** 129n,
      suffix: "DQag"
    }, {
      threshold: 10n ** 126n,
      suffix: "UQag"
    }, {
      threshold: 10n ** 123n,
      suffix: "Qag"
    }, {
      threshold: 10n ** 120n,
      suffix: "NoTg"
    }, {
      threshold: 10n ** 117n,
      suffix: "OcTg"
    }, {
      threshold: 10n ** 114n,
      suffix: "SpTg"
    }, {
      threshold: 10n ** 111n,
      suffix: "STg"
    }, {
      threshold: 10n ** 108n,
      suffix: "QiTg"
    }, {
      threshold: 10n ** 105n,
      suffix: "QaTg"
    }, {
      threshold: 10n ** 102n,
      suffix: "TTg"
    }, {
      threshold: 10n ** 99n,
      suffix: "DTg"
    }, {
      threshold: 10n ** 96n,
      suffix: "UTg"
    }, {
      threshold: 10n ** 93n,
      suffix: "Tg"
    }, {
      threshold: 10n ** 90n,
      suffix: "NoVg"
    }, {
      threshold: 10n ** 87n,
      suffix: "OcVg"
    }, {
      threshold: 10n ** 84n,
      suffix: "SpVg"
    }, {
      threshold: 10n ** 81n,
      suffix: "SVg"
    }, {
      threshold: 10n ** 78n,
      suffix: "QiVg"
    }, {
      threshold: 10n ** 75n,
      suffix: "QaVg"
    }, {
      threshold: 10n ** 72n,
      suffix: "TVg"
    }, {
      threshold: 10n ** 69n,
      suffix: "DVg"
    }, {
      threshold: 10n ** 66n,
      suffix: "UVg"
    }, {
      threshold: 10n ** 63n,
      suffix: "Vg"
    }, {
      threshold: 10n ** 60n,
      suffix: "NoD"
    }, {
      threshold: 10n ** 57n,
      suffix: "OcD"
    }, {
      threshold: 10n ** 54n,
      suffix: "SpD"
    }, {
      threshold: 10n ** 51n,
      suffix: "SD"
    }, {
      threshold: 10n ** 48n,
      suffix: "QiD"
    }, {
      threshold: 10n ** 45n,
      suffix: "QaD"
    }, {
      threshold: 10n ** 42n,
      suffix: "TD"
    }, {
      threshold: 10n ** 39n,
      suffix: "DD"
    }, {
      threshold: 10n ** 36n,
      suffix: "UD"
    }, {
      threshold: 10n ** 33n,
      suffix: "D"
    }, {
      threshold: 10n ** 30n,
      suffix: "No"
    }, {
      threshold: 10n ** 27n,
      suffix: "Oc"
    }, {
      threshold: 10n ** 24n,
      suffix: "Sep"
    }, {
      threshold: 10n ** 21n,
      suffix: "S"
    }, {
      threshold: 10n ** 18n,
      suffix: "Qi"
    }, {
      threshold: 10n ** 15n,
      suffix: "Qa"
    }, {
      threshold: 10n ** 12n,
      suffix: "T"
    }, {
      threshold: 10n ** 9n,
      suffix: "B"
    }, {
      threshold: 10n ** 6n,
      suffix: "M"
    }, {
      threshold: 1000n,
      suffix: "K"
    }];

    function nB(BB) {
      let jB, zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const jB = BB < 0 ? "-" : "",
            zB = Math.abs(BB);
          return zB >= 10 ? `${jB}${zB.toFixed(1).replace(/\.0$/,"")}` : `${jB}${zB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        jB = BigInt(Math.floor(BB))
      } else jB = BB;
      const nB = jB < 0n ? -jB : jB,
        dB = jB < 0n ? "-" : "",
        IB = nB.toString();
      if (IB.length <= zB) return `${dB}${IB}`;
      const NB = 3 * Math.floor((IB.length - 1) / 3);
      if (NB < 3) return `${dB}${IB}`;
      if (NB > 3 * QB.length) {
        const BB = IB[0],
          jB = IB.slice(1, 3).replace(/0+$/, "");
        return `${dB}${jB?`${BB}.${jB}`:BB}e${IB.length-1}`
      }
      const {
        threshold: uB,
        suffix: UB
      } = QB[QB.length - NB / 3], aB = nB / uB, pB = Number(1000n * (nB % uB) / uB), rB = Number(aB) + pB / 1e3;
      let sB;
      return sB = rB >= 100 ? Math.floor(rB).toString() : rB >= 10 ? rB.toFixed(1).replace(/\.0$/, "") : rB.toFixed(2).replace(/\.?0+$/, ""), `${dB}${sB}${UB}`
    }
    const dB = QB.map((BB => {
      let {
        threshold: jB,
        suffix: zB
      } = BB;
      return {
        threshold: Number(jB),
        suffix: zB
      }
    })).filter((BB => {
      let {
        threshold: jB
      } = BB;
      return Number.isFinite(jB)
    }));

    function IB(BB) {
      const jB = Math.abs(BB),
        zB = BB < 0 ? "-" : "";
      for (const {
          threshold: QB,
          suffix: nB
        }
        of dB)
        if (jB >= QB) {
          const BB = jB / QB;
          if (BB >= 1e3) return `${zB}${jB.toExponential(2).replace("e+","e")}`;
          let dB;
          return dB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${zB}${dB}${nB}`
        } return `${zB}${jB}`
    }
  },
  38659: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38664: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38672: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38674: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38681: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38685: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  38689: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38697: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  38699: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  38707: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  38711: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  38720: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  38723: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38732: (BB, jB, zB) => {
    BB.exports = zB.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  },
  18464: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20506: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22905: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24451: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26117: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26137: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38635: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  },
  38640: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);