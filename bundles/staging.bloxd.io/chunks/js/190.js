export const id = 190;
export const ids = [49, 190];
export const modules = {
  37935: (zz, uz, bz) => {
    var Ez = {
      "./combat_1.png": 37937,
      "./dungeon_crumbling_crypt.png": 37941,
      "./dungeon_frozen_hollow.png": 37946,
      "./dungeon_wildwood_grove.png": 37953,
      "./dungeons.png": 37959,
      "./farming_1.png": 37966,
      "./fishing_1.png": 37974,
      "./hub.png": 37977,
      "./island.png": 37981,
      "./mining_1.png": 37986,
      "./mining_1_bridge.png": 37995,
      "./mining_1_gallery.png": 38e3,
      "./mining_1_hollow.png": 38008,
      "./mining_1_village.png": 38011
    };

    function nz(zz) {
      var uz = iz(zz);
      return bz(uz)
    }

    function iz(zz) {
      if (!bz.o(Ez, zz)) {
        var uz = new Error("Cannot find module '" + zz + "'");
        throw uz.code = "MODULE_NOT_FOUND", uz
      }
      return Ez[zz]
    }
    nz.keys = function() {
      return Object.keys(Ez)
    }, nz.resolve = iz, zz.exports = nz, nz.id = 37935
  },
  38017: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      d: () => iz
    });
    const Ez = new WeakMap;

    function nz(zz, uz) {
      return Ez.set(zz, uz), zz
    }

    function iz(zz) {
      var uz;
      return null !== (uz = Ez.get(zz)) && void 0 !== uz ? uz : null
    }
  },
  37920: (zz, uz, bz) => {
    function Ez(zz, uz, bz) {
      var Ez;
      const {
        width: nz,
        height: iz
      } = bz, lz = null !== (Ez = zz.text) && void 0 !== Ez ? Ez : zz, Mz = (lz.x / 100 - .5) * nz, tz = (lz.y / 100 - .5) * iz, Hz = nz / 2 - uz.x;
      if (null !== zz.text && Math.abs(Mz) <= Hz && tz >= uz.top - iz / 2 && tz <= iz / 2 - uz.bottom) return {
        x: lz.x,
        y: lz.y
      };
      const Oz = Math.min(0 === Mz ? 1 / 0 : Hz / Math.abs(Mz), tz > 0 ? (iz / 2 - uz.bottom) / tz : tz < 0 ? (uz.top - iz / 2) / tz : 1 / 0);
      return !Number.isFinite(Oz) || Oz < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + Mz * Oz / nz * 100,
        y: 50 + tz * Oz / iz * 100
      }
    }
    bz.d(uz, {
      d: () => Ez
    })
  },
  37929: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz
    });
    const Ez = 4,
      nz = 12e3,
      iz = 1e3;
    class lz {
      constructor() {
        let {
          limit: zz = Ez,
          windowMs: uz = nz,
          spacingMs: bz = iz,
          now: lz = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = zz, this.windowMs = uz, this.spacingMs = bz, this.now = lz
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const zz of this.priority) zz.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const zz = this.now();
        this.sent.push(zz), this.lastSentAt = zz, this.schedule(), this.notify()
      }
      addPriority(zz) {
        return this.priority.add(zz), () => {
          this.priority.delete(zz)
        }
      }
      subscribe(zz) {
        return this.listeners.add(zz), () => {
          this.listeners.delete(zz)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const zz of this.priority)
          if (zz.waiting()) return !0;
        return !1
      }
      prune() {
        const zz = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= zz;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const zz = this.now(),
          uz = this.lastSentAt + this.spacingMs,
          bz = Math.min(uz > zz ? uz : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        bz !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, bz - zz)))
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37917: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      constructor(zz, uz, bz) {
        this.sK = zz, this.beforeOpen = uz, this.afterClose = bz, this.open = !1, this.SZ = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.SZ && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(zz) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(zz)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.SZ = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.SZ || (this.snapshot = this.buildSnapshot(), this.sK(this.snapshot))
      }
    }
  },
  38020: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      SkyblockEntityFacing: () => Mz,
      needsSkyblockEntityFacing: () => lz
    });
    var Ez = bz(586),
      nz = bz(4035),
      iz = bz(38026);

    function lz(zz, uz) {
      if (zz.metaInfo === Ez.b || "Iron Guardian" === zz.type || "Gold Guardian" === zz.type) return !0;
      if ("Pig" === zz.type) return "sitting" === zz.pose;
      if ("Person" !== zz.meshKind || void 0 === zz.meshOpts) return !1;
      let bz = null === uz || void 0 === uz ? void 0 : uz.get(zz.meshOpts);
      if (void 0 === bz) {
        var iz, lz;
        const Ez = (0, nz.h)(zz);
        bz = !1, "pig_napoleon" === (null === Ez || void 0 === Ez || null === (iz = Ez.opts.textures) || void 0 === iz ? void 0 : iz.head) ? bz = !0 : "npc_pig_head" === (null === Ez || void 0 === Ez || null === (lz = Ez.opts.textures) || void 0 === lz ? void 0 : lz.head) && (bz = "sitting" === Ez.opts.pose || "sitting"), uz && (uz.size >= 256 && uz.clear(), uz.set(zz.meshOpts, bz))
      }
      return "sitting" === bz ? "sitting" === zz.pose : bz
    }(0, iz.h)("skyblock", ((zz, uz) => {
      uz.setFacingTolerance(lz(zz) ? 0 : null)
    }));
    class Mz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = zz, this.alsoVisit = uz, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = zz => {
          var uz;
          const bz = this.api.getEntityInfo(zz);
          bz && (lz(bz, this.meshFacingCache) && (this.api.setFacingTolerance(zz, 0), this.nextFacing.add(zz)), null === (uz = this.alsoVisit) || void 0 === uz || uz.call(this, zz, bz))
        }
      }
      sd() {
        const {
          api: zz
        } = this, uz = this.nextFacing;
        zz.forEachEntity(this.visit);
        for (const bz of this.facing) uz.has(bz) || zz.setFacingTolerance(bz, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = uz
      }
      dispose() {
        for (const zz of this.facing) this.api.setFacingTolerance(zz, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37910: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => pt
    });
    const Ez = "island";
    var nz = bz(328);
    const iz = (0, nz.Db)([0, 0, -1]),
      lz = [{
        name: "S",
        bearing: (0, nz.Db)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, nz.Db)([-1, 0, 0])
      }, {
        name: "N",
        bearing: iz
      }, {
        name: "W",
        bearing: (0, nz.Db)([1, 0, 0])
      }];

    function Mz(zz, uz, bz) {
      return [100 * (bz.mapMaxX - zz) / (bz.mapMaxX - bz.mapMinX), 100 * (uz - bz.mapMinZ) / (bz.mapMaxZ - bz.mapMinZ)]
    }

    function tz(zz, uz, bz) {
      const nz = "local" === uz,
        iz = zz.background,
        lz = uz => iz ? Mz(uz[0] - zz.mapOrigin[0], uz[2] - zz.mapOrigin[2], iz.bounds) : [50, 50],
        tz = (zz.insideDungeon ? [] : zz.landmarks).map((zz => {
          var uz, Ez;
          return {
            id: zz.id,
            name: bz(zz.visited && zz.nameKey ? null !== (uz = zz.mapLabelKey) && void 0 !== uz ? uz : zz.nameKey : "skyblockGame:mapUnknown"),
            icon: zz.visited && null !== (Ez = zz.icon) && void 0 !== Ez ? Ez : "unknown",
            visited: zz.visited,
            current: !1,
            position: lz(zz.position),
            travelKind: "landmark",
            travelId: zz.id
          }
        })),
        Oz = zz.zones.map((uz => {
          var Ez;
          return {
            id: uz.id,
            name: bz(uz.visited && uz.nameKey ? uz.nameKey : "skyblockGame:mapUnknown"),
            icon: uz.visited && null !== (Ez = uz.icon) && void 0 !== Ez ? Ez : "unknown",
            visited: uz.visited,
            current: uz.id === zz.zoneId,
            position: uz.position,
            thumbnail: uz.visited ? uz.id : void 0,
            travelKind: "zone",
            travelId: uz.id
          }
        })),
        pz = zz.insideDungeon || !iz ? [] : zz.portals.map((zz => {
          var uz;
          return {
            id: zz.id,
            name: bz(null !== (uz = zz.nameKey) && void 0 !== uz ? uz : "skyblockGame:mapUnknown"),
            icon: zz.visited ? "dungeons" === zz.destination ? "portal_orange" : "portal" : "unknown",
            visited: zz.visited,
            current: !1,
            position: lz(zz.position),
            colour: zz.colour,
            travelKind: "zone",
            travelId: zz.destination
          }
        })),
        dz = nz ? tz : Oz,
        Fz = dz.filter((zz => zz.visited)).length,
        Zz = iz ? (iz.bounds.mapMaxX - iz.bounds.mapMinX) / (iz.bounds.mapMaxZ - iz.bounds.mapMinZ) : 2,
        Rz = iz ? JSON.stringify([iz.bounds, zz.mapOrigin]) : "";
      return {
        local: nz,
        points: dz,
        portals: nz ? pz : [],
        progress: dz.length ? bz("skyblockGame:mapDiscovered", {
          current: String(Fz),
          total: String(dz.length)
        }) : null,
        percent: dz.length ? 100 * Fz / dz.length : 0,
        canTravel: [...dz, ...nz ? pz : []].some((zz => zz.visited && !zz.current)),
        noLandmarks: nz && !zz.insideDungeon && 0 === tz.length,
        background: iz ? {
          imageKey: iz.imageKey,
          fallbackImageKey: zz.zoneId,
          geometryKey: Rz,
          label: bz(iz.labelKey),
          colour: iz.backgroundColour,
          ratio: Zz
        } : null,
        connections: Hz(zz.zones),
        minimap: iz ? {
          imageKey: iz.imageKey,
          fallbackImageKey: zz.zoneId,
          geometryKey: Rz,
          label: bz(iz.labelKey),
          colour: iz.backgroundColour,
          caption: bz(zz.zoneId === Ez ? "skyblockGame:zoneIsland" : iz.labelKey),
          width: (iz.bounds.mapMaxX - iz.bounds.mapMinX) / iz.minimapSpan * 100 + "%",
          height: (iz.bounds.mapMaxZ - iz.bounds.mapMinZ) / iz.minimapSpan * 100 + "%",
          markers: [...tz, ...pz]
        } : null
      }
    }

    function Hz(zz) {
      const uz = new Set;
      return zz.flatMap((bz => bz.connections.flatMap((Ez => {
        const nz = zz.find((zz => zz.id === Ez)),
          iz = [bz.id, Ez].sort().join("|");
        return !nz || uz.has(iz) ? [] : (uz.add(iz), [{
          id: `${bz.id}-${Ez}`,
          start: bz.position,
          end: nz.position,
          explored: bz.visited && nz.visited
        }])
      }))))
    }
    var Oz = bz(37917);
    class pz extends Oz.e {}
    const dz = "skyblockMapView";
    class Fz extends pz {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(zz, Ez, nz), this.requestTravel = uz, this.translate = bz, this.now = iz, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = zz => {
          this.tab = zz, this.feedbackKey = "", this.emit()
        }, this.travel = (zz, uz) => {
          if (!this.map || this.pending || this.SZ) return;
          const bz = ("zone" === zz ? this.map.zones : this.map.landmarks).find((zz => zz.id === uz));
          if (bz) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in bz && !bz.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (bz.visited)
              if ("zone" === zz && uz === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const bz = ++this.nextRequestId;
                this.pending = {
                  requestId: bz,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: zz,
                  id: uz,
                  requestId: bz
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
      setTranslator(zz) {
        this.translate = zz, this.emit()
      }
      WZ(zz) {
        var uz;
        if (!this.SZ)
          if ("entities" !== zz.kind)
            if ("open" !== zz.kind) {
              var bz, Ez;
              if ("snapshot" === zz.kind)(null === (bz = zz.snapshot) || void 0 === bz ? void 0 : bz.zoneId) !== (null === (Ez = this.map) || void 0 === Ez ? void 0 : Ez.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = zz.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === zz.kind) {
                var nz;
                zz.requestId === (null === (nz = this.pending) || void 0 === nz ? void 0 : nz.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (zz.requestId === (null === (uz = this.pending) || void 0 === uz ? void 0 : uz.requestId)) {
                var iz;
                this.pending = null, this.feedbackKey = null !== (iz = zz.errorKey) && void 0 !== iz ? iz : "", null === zz.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = zz.entities
      }
      sd() {
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
          presentation: this.map ? tz(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const Zz = 67.5 * Math.PI / 180;

    function Rz(zz, uz) {
      const bz = Math.abs(zz);
      if (bz > Zz || uz.trackHalfWidth <= 0) return null;
      const Ez = uz.trackHalfWidth,
        nz = uz.screenHalfWidth / (uz.tanHalfFovX * Math.max(.5, Math.cos(uz.pitch))),
        iz = Math.min(Math.atan(.6 * Ez / nz), .75 * Zz),
        lz = nz * Math.tan(iz);
      let Mz;
      if (bz <= iz) Mz = nz * Math.tan(bz);
      else {
        const zz = Zz - iz,
          uz = Math.max(0, nz * zz / (Math.cos(iz) ** 2 * (Ez - lz)) - 1),
          tz = (bz - iz) / zz;
        Mz = lz + (Ez - lz) * (1 + uz) * tz / (1 + uz * tz)
      }
      return 50 + Math.sign(zz) * Mz * 50 / Ez
    }
    class Kz {
      constructor(zz, uz) {
        this.map = zz, this.visited = uz, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = uz ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const zz = this.map.getSnapshot().map;
        return !zz || zz.insideDungeon ? [] : zz.landmarks.filter((zz => zz.visited === this.visited)).map((zz => {
          var uz, bz;
          return {
            id: `landmark:${zz.id}`,
            position: zz.position,
            icon: null !== (uz = zz.icon) && void 0 !== uz ? uz : "unknown",
            nameKey: null !== (bz = zz.nameKey) && void 0 !== bz ? bz : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class wz {
      constructor(zz, uz, bz, Ez) {
        this.map = zz, this.kind = uz, this.position = bz, this.alive = Ez, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = uz, this.range = "enemy" === uz ? 48 : 64, this.limit = 12
      }
      Gs(zz) {
        if ("enemy" !== this.kind || this.alive(zz.Li)) return this.position(zz.Li)
      }
      getPoints() {
        const zz = [];
        for (const Ez of this.map.getEntities()) {
          if (Ez.kind !== this.kind || "enemy" === this.kind && !this.alive(Ez.compassEntityId)) continue;
          const nz = this.position(Ez.compassEntityId);
          var uz, bz;
          if (nz) zz.push({
            id: `${this.kind}:${Ez.compassEntityId}`,
            Li: Ez.compassEntityId,
            kind: this.kind,
            icon: null !== (uz = Ez.icon) && void 0 !== uz ? uz : Ez.npcSkin ? `npc_${Ez.npcSkin}` : this.kind,
            displayName: Ez.displayName,
            position: nz,
            nameKey: null !== (bz = Ez.nameKey) && void 0 !== bz ? bz : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return zz
      }
    }
    class Xz {
      constructor(zz) {
        this.map = zz, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const zz = this.map.getSnapshot().map;
        return !zz || zz.insideDungeon ? [] : zz.portals.map((zz => {
          var uz;
          return {
            id: "portal:" + zz.id,
            kind: "portal",
            position: zz.position,
            nameKey: null !== (uz = zz.nameKey) && void 0 !== uz ? uz : "skyblockGame:compassUnvisitedZone",
            icon: zz.visited ? "dungeons" === zz.destination ? "portal_orange" : "portal" : "unknown",
            colour: zz.colour
          }
        }))
      }
    }
    class fz {
      constructor(zz) {
        this.target = zz, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const zz = this.target();
        return zz ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: zz.position,
          nameKey: zz.nameKey
        }] : []
      }
    }

    function sz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.position;
      const iz = Ez[0] - uz[0],
        lz = Ez[2] - uz[2];
      return {
        ...zz,
        position: Ez,
        offset: nz.d.computeShortestRotation(bz, (0, nz.Db)([iz, 0, lz])),
        distance: Math.hypot(iz, Ez[1] - uz[1], lz)
      }
    }
    let rz;

    function oz(zz, uz) {
      var bz;
      return (null === (bz = rz) || void 0 === bz ? void 0 : bz.locale) !== uz && (rz = {
        locale: uz,
        near: new Intl.NumberFormat(uz, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(uz, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (zz < 10 ? rz.near : rz.far).format(zz)
    }
    class Nz {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(zz) {
        return this.providers.set(zz.id, zz), this.refreshAt = 0, () => {
          this.providers.get(zz.id) === zz && (this.providers.delete(zz.id), this.refreshAt = 0)
        }
      }
      frame(zz, uz, bz) {
        if (bz >= this.refreshAt) {
          this.refreshAt = bz + 200, this.candidates = [];
          for (const uz of this.providers.values()) {
            if (!uz.enabled) continue;
            const bz = uz.getPoints().map((uz => {
              const bz = uz.position;
              return {
                point: uz,
                distance: Math.hypot(bz[0] - zz[0], bz[1] - zz[1], bz[2] - zz[2])
              }
            })).filter((zz => zz.distance <= uz.range)).sort(((zz, uz) => zz.distance - uz.distance)).slice(0, uz.limit);
            for (const {
                point: zz
              }
              of bz) this.candidates.push({
              provider: uz,
              point: zz
            })
          }
        }
        const Ez = [];
        for (const {
            point: nz,
            provider: iz
          }
          of this.candidates) {
          if (!iz.enabled) continue;
          const bz = iz.Gs ? iz.Gs(nz) : nz.position;
          if (bz) {
            const iz = sz(nz, zz, uz, bz);
            Math.abs(iz.offset) <= Zz && Ez.push(iz)
          }
        }
        return Ez
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var vz = bz(36080),
      xz = bz(56);
    const Jz = [{
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
      Az = Jz.length;

    function Tz(zz) {
      return zz >= Az ? 1 : zz + 1
    }
    const Lz = "skyblockQuests",
      Pz = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Gz = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function az(zz) {
      let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const bz = Math.max(0, Math.floor(zz)),
        Ez = Math.floor(bz % 1e3 / 100),
        nz = Math.floor(bz / 1e3),
        iz = nz % 60,
        lz = Math.floor(nz / 60),
        Mz = lz % 60,
        tz = Math.floor(lz / 60),
        Hz = zz => zz < 10 ? `0${zz}` : String(zz),
        Oz = uz ? `.${Ez}` : "";
      return tz > 0 ? `${tz}:${Hz(Mz)}:${Hz(iz)}${Oz}` : `${Mz}:${Hz(iz)}${Oz}`
    }
    const Vz = "devquests",
      mz = "none",
      qz = {
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
      hz = "Compressed Messy Stone",
      Uz = {
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
      cz = ["Stone", "Diorite", "Andesite", "Granite"],
      gz = new Set(cz),
      Sz = (Object.keys(Uz), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const yz = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function Dz(zz, uz) {
      const bz = Math.floor(5 * zz / (2 * uz + 1));
      return Math.min(4, Math.max(0, bz))
    }
    var Qz = bz(1226);
    var Wz = bz(35861);
    var ez = bz(36071),
      jz = bz(22),
      Iz = bz(8554);
    const Bz = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      Cz = 1e3;

    function Yz(zz) {
      return Math.max(0, zz)
    }

    function kz(zz) {
      return 1 + .01 * Yz(zz)
    }

    function zu(zz) {
      return 1 + .005 * Yz(zz)
    }

    function uu(zz) {
      return 1 + .005 * Yz(zz)
    }

    function bu(zz) {
      return .01 * Yz(zz)
    }

    function Eu(zz) {
      return 150 / (150 + Yz(zz))
    }

    function nu(zz) {
      return 1 + .002 * Yz(zz)
    }

    function iu(zz) {
      return Math.round(10 * zz) / 10
    }

    function lu(zz, uz) {
      switch (zz) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: iu(100 * (zu(uz) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: iu(100 * (kz(uz) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: iu(100 * (uu(uz) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: iu(100 * bu(uz))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: iu(100 * (1 - Eu(uz)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: iu(100 * (nu(uz) - 1))
          }
      }
    }

    function Mu(zz) {
      return "farming" === zz ? 200 : 100
    }

    function tu(zz, uz) {
      if (!Number.isSafeInteger(zz) || zz < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const bz = Mu(uz),
        Ez = zz => function(zz, uz) {
          return Mu(zz) * uz * (uz + 1) / 2
        }(uz, zz);
      let nz = Math.min(Cz, Math.floor((Math.sqrt(8 * zz / bz + 1) - 1) / 2));
      return nz < Cz && Ez(nz + 1) <= zz ? nz++ : Ez(nz) > zz && nz--, {
        totalXp: zz,
        level: nz,
        xpIntoLevel: zz - Ez(nz),
        xpForNextLevel: nz === Cz ? null : bz * (nz + 1)
      }
    }
    const Hu = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Ou(zz) {
      return Hu.has(zz)
    }
    const pu = new Set(nz.tb);

    function du(zz) {
      return pu.has(zz)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Fu = {
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
      Zu = {
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
      Ru = {
        ...Zu,
        ...Object.fromEntries(Object.entries(Sz).map((zz => {
          let [uz, bz] = zz;
          return [uz, 9 * Zu[bz]]
        })))
      },
      Ku = {
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
      wu = {
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
    const Xu = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      fu = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function su(zz) {
      return `rgb(${fu[zz].join(", ")})`
    }

    function ru(zz, uz, bz) {
      if (!bz) return zz(uz);
      const Ez = {};
      for (const [nz, iz] of Object.entries(bz)) Ez[nz] = "string" === typeof iz ? iz : zz(iz.translationKey);
      return zz(uz, Ez)
    }
    class ou {
      constructor(zz, uz) {
        this.now = zz, this.getJournal = uz, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.yM = !1, this.onShown = () => {}
      }
      enqueue(zz) {
        const uz = Nu(zz);
        if (uz) this.pending.push(zz);
        else {
          const uz = this.pending.findIndex(Nu);
          this.pending.splice(-1 === uz ? this.pending.length : uz, 0, zz)
        }
        return (null === this.current || null !== this.followUp && !uz) && (this.advance(), !0)
      }
      setHeld(zz) {
        return this.yM = zz, !zz && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      sd() {
        const zz = this.getJournal(),
          uz = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === uz ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === uz || void 0 === uz ? void 0 : uz.kind) && zz && zz.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === uz || void 0 === uz ? void 0 : uz.kind)) {
          const zz = this.findFollowUp(this.current);
          if ("step" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || zz.questId !== uz.questId || zz.step.id !== uz.step.id) return this.showFollowUp(zz, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(zz, uz, bz) {
        var Ez, nz, iz, lz;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, zz, bz);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, zz);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, zz, uz);
        const {
          questCompletionKind: Mz,
          questCompletionNameKey: tz
        } = this.current, Hz = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Oz = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, pz = "step" === (null === (Ez = this.followUp) || void 0 === Ez ? void 0 : Ez.kind) ? this.followUp : null, dz = "explore" === (null === (nz = this.followUp) || void 0 === nz ? void 0 : nz.kind);
        let Fz;
        return Fz = dz ? zz("skyblockGame:questExploreTitle") : null !== pz ? "quest" === Mz ? zz("skyblockGame:questNextQuestTitle", {
          quest: zz(pz.questNameKey)
        }) : zz("skyblockGame:questNextStepTitle") : zz("started" === Mz ? "skyblockGame:questStartedTitle" : "quest" === Mz ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? Mz : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: Fz,
          name: dz ? uz("skyblockGame:questExploreName") : null !== pz ? ru(uz, pz.step.nameKey, pz.step.nameParams) : ru(uz, tz, Hz),
          description: dz ? uz("skyblockGame:questExploreDescription") : null === pz ? null : ru(uz, pz.step.descriptionKey, pz.step.descriptionParams),
          reward: null === this.followUp && Oz > 0 ? uz("skyblockGame:questCoinRewardSuffix", {
            amount: Oz.toLocaleString(bz)
          }) : null,
          iconItem: null !== (iz = null === pz || void 0 === pz ? void 0 : pz.step.questIconItem) && void 0 !== iz ? iz : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== pz && (null === (lz = this.getJournal()) || void 0 === lz ? void 0 : lz.trackedQuestId) === pz.questId ? pz.step.nameKey : null
        }
      }
      getSkillLevelView(zz, uz, bz) {
        let {
          skill: Ez,
          beforeLevel: nz,
          level: iz
        } = zz;
        const lz = lu(Ez, nz),
          Mz = lu(Ez, iz);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: uz(`skyblockGame:${Ez}`),
          name: uz("skyblockGame:skillLevelUp", {
            to: iz.toLocaleString(bz)
          }),
          description: lz.percent === Mz.percent ? null : uz(`${Mz.translationKey}Change`, {
            before: lz.percent.toLocaleString(bz),
            after: Mz.percent.toLocaleString(bz)
          }),
          reward: null,
          iconItem: Xu[Ez],
          accent: su(Ez),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(zz, uz) {
        let {
          landmarkNameKey: bz
        } = zz;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: uz("skyblockGame:landmarkDiscovered"),
          name: uz(bz),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(zz, uz, bz) {
        let {
          titleKey: Ez,
          textKey: nz,
          params: iz = {},
          nameKeys: lz = {},
          iconItem: Mz = null
        } = zz;
        const tz = {
          ...iz
        };
        for (const [Hz, Oz] of Object.entries(lz)) tz[Hz] = uz(Oz);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: uz(Ez),
          name: bz(nz, tz),
          description: null,
          reward: null,
          iconItem: Mz,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var zz;
        if (null !== this.followUp) return 5600;
        switch (null === (zz = this.current) || void 0 === zz ? void 0 : zz.questCompletionKind) {
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
      showFollowUp(zz, uz) {
        null === zz || this.yM ? this.advance() : (this.followUp = zz, this.token++, this.shownAt = this.now(), this.expiresAt = null !== uz && void 0 !== uz ? uz : this.shownAt + this.durationMs())
      }
      findFollowUp(zz) {
        var uz;
        const bz = this.getJournal();
        if (!bz || this.hasPendingQuestPopup() || Nu(zz)) return null;
        const Ez = "started" === zz.questCompletionKind ? bz.active.some((uz => uz.id === zz.questCompletionQuestId)) : "quest" === zz.questCompletionKind ? bz.completed.some((uz => uz.id === zz.questCompletionQuestId)) : [...bz.active, ...bz.completed].some((uz => uz.id === zz.questCompletionQuestId && uz.subquests.some((uz => uz.id === zz.questCompletionStepId && "completed" === uz.status))));
        if (!Ez) return null;
        if ("quest" === zz.questCompletionKind && 0 === bz.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const nz = bz.active.find((zz => zz.id === bz.trackedQuestId)),
          iz = null !== (uz = null === nz || void 0 === nz ? void 0 : nz.subquests.find((zz => "ready" === zz.status))) && void 0 !== uz ? uz : null === nz || void 0 === nz ? void 0 : nz.subquests.find((zz => "active" === zz.status));
        return iz ? {
          kind: "step",
          questId: nz.id,
          questNameKey: nz.nameKey,
          step: iz
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((zz => !Nu(zz)))
      }
      advance() {
        var zz;
        this.current = this.yM ? null : null !== (zz = this.pending.shift()) && void 0 !== zz ? zz : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Nu(zz) {
      return vu(zz.questCompletionKind)
    }

    function vu(zz) {
      return "skillLevel" === zz || "landmark" === zz || "npcNote" === zz
    }
    var xu = bz(37920);
    const Ju = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Au = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Tu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Lu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Pu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Gu = bz(37926);
    const au = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Vu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const mu = bz.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const qu = bz.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      hu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Uu = bz(18381),
      cu = bz(20458),
      gu = bz(22706),
      Su = bz(24214),
      yu = bz(25900);
    const Du = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Uu,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: cu,
      cow: Pu,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: bz(25918),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Ju,
      fishing_1: Ju,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Au,
      guardian_iron: Tu,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: gu,
      mines: Su,
      mining_1: Su,
      npc: Lu,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Pu,
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
      npc_gold_guardian: Au,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Tu,
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
      npc_portal_mage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg==",
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: Gu,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: au,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: mu,
      quest_talk: qu,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: hu,
      watermelon: yu
    };

    function Qu(zz, uz) {
      const bz = document.createElement("img");
      return bz.className = uz, bz.src = zz, bz.alt = "", bz.draggable = !1, bz
    }

    function Wu(zz) {
      var uz;
      const bz = null !== (uz = Du[zz]) && void 0 !== uz ? uz : zz.startsWith("npc_") ? Lu : hu;
      if ("portal" !== zz) return Qu(bz, "SkyblockMapIcon");
      const Ez = document.createElement("span");
      Ez.className = "SkyblockMapIcon Portal";
      const nz = document.createElement("span");
      return nz.className = "SkyblockMapIconTint", nz.style.maskImage = nz.style.webkitMaskImage = `url("${Vu}")`, Ez.append(Qu(bz, "SkyblockMapIconLayer"), nz, Qu(Vu, "SkyblockMapIconLayer SkyblockMapIconShade")), Ez
    }
    var eu = bz(37896),
      ju = bz(4048);
    const Iu = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Bu(zz) {
      const uz = new ju.l(zz);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Iu.map((zz => {
          let {
            lobes: bz,
            amount: Ez
          } = zz;
          return {
            lobes: bz[Math.floor(uz.next() * bz.length)],
            amount: Ez[0] + uz.next() * (Ez[1] - Ez[0]),
            phase: 2 * uz.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function Cu(zz) {
      let {
        radius: uz,
        squareness: bz,
        wobbles: Ez,
        samples: nz
      } = zz;
      const iz = [];
      for (let lz = 0; lz < nz; lz++) {
        const zz = 2 * Math.PI * lz / nz,
          Mz = Math.cos(zz),
          tz = Math.sin(zz),
          Hz = uz * (Math.abs(Mz) ** bz + Math.abs(tz) ** bz) ** (-1 / bz) * Ez.reduce(((uz, bz) => {
            let {
              lobes: Ez,
              amount: nz,
              phase: iz
            } = bz;
            return uz + nz * Math.sin(Ez * zz + iz)
          }), 1);
        iz.push(`${(50+Hz*Mz).toFixed(2)} ${(50+Hz*tz).toFixed(2)}`)
      }
      return `M${iz.join("L")}Z`
    }
    const Yu = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class ku {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.SZ = !1, this.mountCompass = zz => {
          var uz;
          if (null === (uz = this.stopLayout) || void 0 === uz || uz.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !zz || this.SZ) return;
          const bz = zz.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: zz,
            track: bz,
            label: zz.querySelector(".SkyblockCompassLabel")
          }, bz.replaceChildren();
          for (let nz = 0; nz < 4; nz++) {
            const zz = document.createElement("span");
            zz.className = "SkyblockCompassCardinal", bz.appendChild(zz), this.cardinals.push(zz)
          }
          const Ez = (0, eu.e)(Yu, [zz], this.layout);
          this.stopLayout = () => {
            Ez(), bz.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = zz => {
          this.terrain = this.SZ ? null : zz, this.render(this.frame)
        }, this.mountMinimapSearchArea = zz => {
          this.mountSearchArea("minimap", zz)
        }, this.mountMapSearchArea = zz => {
          this.mountSearchArea("map", zz)
        }, this.mountPlayer = zz => {
          this.player = this.SZ ? null : zz, this.render(this.frame)
        }, this.mountWaypoint = zz => {
          var uz, bz;
          if (null === (uz = this.stopWaypoint) || void 0 === uz || uz.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !zz || this.SZ) return;
          const Ez = zz.querySelector(".SkyblockQuestWaypointMarker");
          Ez.replaceChildren(Wu("quest")), this.markerIcon = "quest", this.waypoint = {
            root: zz,
            marker: Ez,
            clip: zz.querySelector(".SkyblockQuestWaypointTextClip"),
            text: zz.querySelector(".SkyblockQuestWaypointText"),
            label: zz.querySelector(".SkyblockQuestWaypointLabel"),
            distance: zz.querySelector(".SkyblockQuestWaypointDistance"),
            hint: zz.querySelector(".SkyblockQuestWaypointHint")
          };
          const nz = () => {
              this.waypointMarkerSize = {
                width: Ez.offsetWidth,
                height: Ez.offsetHeight
              }, this.waypointInset = {
                x: Ez.offsetWidth / 2 + 8,
                top: Ez.offsetHeight + 8,
                bottom: 8
              }
            },
            iz = new ResizeObserver((() => {
              nz(), this.render(this.frame)
            }));
          iz.observe(Ez, {
            box: "border-box"
          });
          const lz = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", lz), null === (bz = window.visualViewport) || void 0 === bz || bz.addEventListener("resize", lz), this.stopWaypoint = () => {
            var zz;
            iz.disconnect(), window.removeEventListener("resize", lz), null === (zz = window.visualViewport) || void 0 === zz || zz.removeEventListener("resize", lz)
          }, lz(), nz(), this.render(this.frame)
        }, this.mountWaypointOrigin = zz => {
          var uz;
          if (null === (uz = this.stopWaypointOrigin) || void 0 === uz || uz.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = zz && !this.SZ ? Number(zz.dataset.notificationToken) : null, zz && !this.SZ && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const uz = {
              nameKey: zz.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = uz;
            const bz = () => {
                const bz = zz.getBoundingClientRect();
                uz.x = (bz.left + bz.width / 2) / window.innerWidth * 100, uz.y = (bz.top + bz.height / 2) / window.innerHeight * 100
              },
              Ez = new ResizeObserver(bz);
            Ez.observe(zz.parentElement), Ez.observe(zz), window.addEventListener("resize", bz), this.stopWaypointOrigin = () => {
              Ez.disconnect(), window.removeEventListener("resize", bz)
            }, bz()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const zz = this.compass.root,
            uz = getComputedStyle(zz),
            bz = getComputedStyle(document.documentElement),
            Ez = parseFloat(bz.fontSize),
            nz = parseFloat(uz.getPropertyValue("--compass-icon-size")) * Ez,
            iz = "1" === uz.getPropertyValue("--compass-fit-top").trim(),
            lz = iz ? 1 : 8,
            Mz = Array.from(document.querySelectorAll(Yu), (zz => {
              var uz;
              return (null !== (uz = zz.querySelector(".MiddleTextTop")) && void 0 !== uz ? uz : zz).getBoundingClientRect()
            })).filter((zz => zz.width > 0 && zz.height > 0));
          let tz = (parseFloat(bz.getPropertyValue("--notchTop")) || 0) + lz,
            Hz = "";
          if (iz) {
            const uz = window.innerWidth / 2,
              bz = zz.getBoundingClientRect().height,
              iz = [tz, ...Mz.map((zz => Math.max(tz, zz.bottom + lz)))].sort(((zz, uz) => zz - uz));
            for (const zz of iz) {
              let iz = uz - 8;
              for (const Ez of Mz) Ez.bottom + lz <= zz || Ez.top >= zz + bz + lz || (iz = Math.min(iz, Ez.right <= uz ? uz - Ez.right - 8 : Ez.left - uz - 8));
              const Oz = 2 * iz - nz;
              if (Oz >= 16 * Ez) {
                Hz = `${Oz}px`, tz = zz;
                break
              }
            }
          }
          zz.style.maxWidth !== Hz && (zz.style.maxWidth = Hz);
          const Oz = zz.getBoundingClientRect(),
            pz = this.compassSize.trackHalfWidth;
          if (Oz.width > 0) {
            const zz = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: zz.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * nz / zz.width
          }
          if (!Hz)
            for (const dz of Mz) dz.right > Oz.left - 8 && dz.left < Oz.right + 8 && (tz = Math.max(tz, dz.bottom + lz));
          zz.style.top = `${tz}px`, this.compassSize.trackHalfWidth !== pz && this.render(this.frame)
        }
      }
      mountSearchArea(zz, uz) {
        this.searchAreas[zz] = this.SZ ? null : uz, this.render(this.frame)
      }
      render(zz) {
        if (this.SZ) return;
        if (this.frame = zz, this.compass && (zb(this.compass.root, !zz), zz)) {
          const uz = this.compassSize.trackHalfWidth / 50;
          zz.compass.cardinals.forEach(((zz, bz) => {
            const Ez = this.cardinals[bz];
            Ez.textContent !== zz.name && (Ez.textContent = zz.name), zb(Ez, zz.hidden), Ez.style.translate = zz.left * uz + "px"
          }));
          const bz = new Set;
          zz.compass.markers.forEach(((Ez, nz) => {
            var iz;
            bz.add(Ez.id);
            let lz = this.markers.get(Ez.id);
            lz || (lz = document.createElement("span"), lz.className = "SkyblockCompassMarker", this.markers.set(Ez.id, lz), this.compass.track.appendChild(lz)), lz.dataset.icon !== Ez.icon && (lz.dataset.icon = Ez.icon, lz.replaceChildren(Wu(Ez.icon))), lz.style.color = null !== (iz = Ez.colour) && void 0 !== iz ? iz : "", lz.style.translate = Ez.left * uz + "px", lz.style.zIndex = String(zz.compass.markers.length - nz), lz.title !== Ez.name && (lz.title = Ez.name)
          }));
          for (const [zz, Ez] of this.markers) bz.has(zz) || (Ez.remove(), this.markers.delete(zz));
          this.compass.label.textContent !== zz.compass.label && (this.compass.label.textContent = zz.compass.label)
        }
        this.terrain && (zb(this.terrain, !(null !== zz && void 0 !== zz && zz.minimap)), null !== zz && void 0 !== zz && zz.minimap && (this.terrain.style.transform = zz.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", zz.minimap.iconRotation)));
        const uz = null === zz || void 0 === zz ? void 0 : zz.searchArea;
        for (const bz of [this.searchAreas.minimap, this.searchAreas.map])
          if (bz && (zb(bz, !uz), uz)) {
            if (this.searchAreaPath.seed !== uz.shapeSeed && (this.searchAreaPath = {
                seed: uz.shapeSeed,
                d: Cu(Bu(uz.shapeSeed))
              }), bz.dataset.shapeSeed !== uz.shapeSeed) {
              bz.dataset.shapeSeed = uz.shapeSeed;
              for (const zz of bz.querySelectorAll("path")) zz.setAttribute("d", this.searchAreaPath.d)
            }
            bz.style.left = `${uz.left}%`, bz.style.top = `${uz.top}%`, bz.style.width = `${uz.width}%`, bz.style.height = `${uz.height}%`
          } if (this.player && (zb(this.player, !(null !== zz && void 0 !== zz && zz.player) || zz.player.hidden), null !== zz && void 0 !== zz && zz.player && (this.player.style.left = `${zz.player.left}%`, this.player.style.top = `${zz.player.top}%`, this.player.style.setProperty("--map-player-rotation", zz.player.rotation))), this.waypoint) {
          const {
            root: uz,
            marker: bz,
            clip: Ez,
            text: nz,
            label: iz,
            distance: lz,
            hint: Mz
          } = this.waypoint, tz = !(null !== zz && void 0 !== zz && zz.waypoint) || null !== zz.waypoint.popupToken && zz.waypoint.popupToken !== this.waypointOriginToken;
          zb(uz, tz);
          let Hz = 1;
          const Oz = this.waypointLaunch;
          if (!tz && Oz && zz.waypoint.nameKey === Oz.nameKey) {
            const zz = performance.now();
            Oz.startedAt ??= zz, Hz = Math.min(1, Math.max(0, (zz - Oz.startedAt - 450) / 1e3)), bz.style.opacity = String(Math.min(1, (zz - Oz.startedAt) / 150)), 1 === Hz && (this.waypointLaunch = null)
          } else bz.style.opacity = "", Oz && null !== Oz.startedAt && (this.waypointLaunch = null);
          if (uz.classList.toggle("Launching", Hz < 1), null !== zz && void 0 !== zz && zz.waypoint) {
            const uz = this.waypointInset,
              tz = "quest_talk" === zz.waypoint.markerIcon ? function(zz, uz, bz) {
                if (!zz.text || null === zz.blockHeight || 0 === zz.nearness) return zz;
                const Ez = zz.blockHeight / 100 * bz.height,
                  nz = -zz.nearness * (ub * Ez + uz.width / 2),
                  iz = zz.nearness * (bb * Ez + uz.height / 2);
                return {
                  ...zz,
                  text: {
                    x: zz.text.x + nz / bz.width * 100,
                    y: zz.text.y + iz / bz.height * 100
                  }
                }
              }(zz.waypoint, this.waypointMarkerSize, this.viewport) : zz.waypoint,
              pz = (0, xu.d)(tz, uz, this.viewport),
              dz = Hz * Hz * (3 - 2 * Hz),
              Fz = Hz < 1 ? Oz.x + (pz.x - Oz.x) * dz : pz.x,
              Zz = Hz < 1 ? Oz.y + (pz.y - Oz.y) * dz : pz.y;
            bz.style.translate = `${Fz}vw ${Zz}vh`, Ez.style.clipPath = `inset(${uz.top}px ${uz.x}px ${uz.bottom}px)`, zb(nz, Hz < 1 || !zz.waypoint.text), nz.style.opacity = String(1 - zz.waypoint.nearness), zz.waypoint.text && (nz.style.translate = `${zz.waypoint.text.x}vw ${zz.waypoint.text.y}vh`), iz.textContent !== zz.waypoint.name && (iz.textContent = zz.waypoint.name), this.markerIcon !== zz.waypoint.markerIcon && (this.markerIcon = zz.waypoint.markerIcon, bz.replaceChildren(Wu(this.markerIcon))), lz.textContent !== zz.waypoint.distance && (lz.textContent = zz.waypoint.distance), zb(Mz, null === zz.waypoint.hint), null !== zz.waypoint.hint && Mz.textContent !== zz.waypoint.hint && (Mz.textContent = zz.waypoint.hint)
          }
        }
      }
      dispose() {
        var zz, uz;
        this.mountWaypointOrigin(null), this.render(null), null === (zz = this.stopLayout) || void 0 === zz || zz.call(this), this.stopLayout = null, null === (uz = this.stopWaypoint) || void 0 === uz || uz.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.SZ = !0
      }
    }

    function zb(zz, uz) {
      zz.hidden !== uz && (zz.hidden = uz)
    }
    const ub = .55,
      bb = .6;
    const Eb = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class nb {
      constructor(zz, uz, bz, Ez) {
        this.map = zz, this.quests = uz, this.compass = bz, this.display = new ku, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.SZ = !1, this.snapshot = null, this.texts = new Map, this.translate = Ez
      }
      setTranslator(zz, uz) {
        this.translate = zz, this.locale = uz, this.metresFormat = new Intl.NumberFormat(uz), this.texts.clear()
      }
      translateCached(zz, uz) {
        const bz = void 0 === uz ? zz : `${zz} ${uz}`;
        let Ez = this.texts.get(bz);
        return void 0 === Ez && (this.texts.size >= 500 && this.texts.clear(), Ez = this.translate(zz, void 0 === uz ? void 0 : {
          distance: uz
        }), this.texts.set(bz, Ez)), Ez
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(zz, uz, bz) {
        if (this.SZ) return;
        if (!zz) return this.snapshot = null, void this.display.render(null);
        const Ez = this.map.getSnapshot().map,
          tz = bz.cameraHeading,
          Hz = {
            ...this.display.compassSize,
            tanHalfFovX: bz.tanHalfFovX,
            pitch: bz.cameraPitch
          },
          Oz = [];
        if (Ez)
          for (const nz of this.compass.frame(zz, tz, uz)) {
            const zz = Rz(nz.offset, Hz);
            null !== zz && Oz.push({
              ...nz,
              left: zz
            })
          }
        const pz = function(zz, uz) {
            const bz = [],
              Ez = zz => "quest" === zz.kind ? zz.distance - 1 : zz.distance,
              nz = [...zz].sort(((zz, uz) => Ez(zz) - Ez(uz) || zz.id.localeCompare(uz.id)));
            for (const iz of nz) {
              let zz = !1;
              if ("quest" !== iz.kind)
                for (const Ez of bz)
                  if (Math.abs(Ez.left - iz.left) < uz) {
                    zz = !0;
                    break
                  } zz || bz.push(iz)
            }
            return bz
          }(Oz, this.display.compassSpacing),
          dz = function(zz) {
            let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              bz = null;
            for (const Ez of zz) Math.abs(Ez.offset) <= uz && (!bz || Ez.distance < bz.distance || Ez.distance === bz.distance && Math.abs(Ez.offset) < Math.abs(bz.offset)) && (bz = Ez);
            return bz
          }(pz),
          Fz = zz => {
            var uz;
            return null !== (uz = zz.displayName) && void 0 !== uz ? uz : this.translateCached(zz.nameKey)
          },
          Zz = {
            compass: {
              markers: pz.map((zz => ({
                id: zz.id,
                icon: zz.icon,
                colour: zz.colour,
                name: Fz(zz),
                left: zz.left
              }))),
              cardinals: lz.map((zz => {
                let {
                  name: uz,
                  bearing: bz
                } = zz;
                const Ez = Rz(nz.d.computeShortestRotation(tz, bz), Hz);
                return {
                  name: uz,
                  left: null !== Ez && void 0 !== Ez ? Ez : 0,
                  hidden: null === Ez
                }
              })),
              label: dz ? `${Fz(dz)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",oz(dz.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Ez && void 0 !== Ez && Ez.background) {
          const uz = zz[0] - Ez.mapOrigin[0],
            bz = zz[2] - Ez.mapOrigin[2],
            {
              rotation: nz,
              transform: lz
            } = function(zz, uz, bz, Ez) {
              const [nz, lz] = Mz(zz, uz, Ez), tz = iz - bz;
              return {
                rotation: tz,
                transform: `rotate(${tz}rad) translate(-${nz}%, -${lz}%)`
              }
            }(uz, bz, tz, Ez.background.bounds);
          Zz.minimap = {
            transform: lz,
            iconRotation: -nz + "rad"
          };
          const [Hz, Oz] = Mz(uz, bz, Ez.background.bounds);
          Zz.player = {
            left: Hz,
            top: Oz,
            hidden: Hz < 0 || Oz < 0 || Hz > 100 || Oz > 100,
            rotation: -nz + "rad"
          }
        }
        const {
          waypoint: Kz
        } = this.quests.getSnapshot();
        if ("search" === (null === Kz || void 0 === Kz ? void 0 : Kz.questMarkerIcon) && null !== Ez && void 0 !== Ez && Ez.background) {
          const {
            bounds: zz
          } = Ez.background, [uz, bz] = Mz(Kz.position[0] - Ez.mapOrigin[0], Kz.position[2] - Ez.mapOrigin[2], zz);
          Zz.searchArea = {
            left: uz,
            top: bz,
            width: 6400 / (zz.mapMaxX - zz.mapMinX),
            height: 6400 / (zz.mapMaxZ - zz.mapMinZ),
            shapeSeed: Kz.nameKey
          }
        }
        const wz = this.quests.getNotificationSnapshot(),
          Xz = "completion" === (null === wz || void 0 === wz ? void 0 : wz.phase) && !vu(wz.kind);
        if (Kz && !Xz) {
          const uz = Math.hypot(...Kz.position.map(((uz, bz) => uz - zz[bz]))),
            Ez = Math.round(uz),
            nz = "talk" === Kz.questMarkerIcon ? Math.min(1, Math.max(0, (10 - uz) / 5)) : 0,
            iz = bz.projectWorldPosToViewport(Kz.position),
            lz = iz && bz.projectWorldPosToViewport([Kz.position[0], Kz.position[1] - 1, Kz.position[2]]);
          Zz.waypoint = {
            ...bz.projectWorldPosToScreenPos(Kz.position),
            text: iz,
            nearness: nz * nz * (3 - 2 * nz),
            blockHeight: iz && lz ? lz.y - iz.y : null,
            name: this.translateCached(Kz.nameKey),
            nameKey: Kz.nameKey,
            markerIcon: Kz.questMarkerIcon ? Eb[Kz.questMarkerIcon] : "quest",
            popupToken: (null === wz || void 0 === wz ? void 0 : wz.waypointNameKey) === Kz.nameKey ? wz.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Ez)),
            hint: "search" === Kz.questMarkerIcon && Math.hypot(Kz.position[0] - zz[0], Kz.position[2] - zz[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = Zz, this.display.render(Zz)
      }
      dispose() {
        this.SZ = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const ib = "skyblockSkillsView";
    class lb extends pz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          bz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz => zz,
          Ez = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          nz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz => zz;
        super(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = uz, this.translate = bz, this.locale = Ez, this.itemName = nz, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = zz => {
          this.selected = zz, this.emit()
        }
      }
      setTranslator(zz, uz, bz) {
        this.translate = zz, this.locale = uz, this.itemName = bz, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(zz) {
        let uz = this.skillText.get(zz);
        return uz || (uz = {
          label: this.translate(`skyblockGame:${zz}`),
          description: this.translate(`skyblockGame:${zz}Description`)
        }, this.skillText.set(zz, uz)), uz
      }
      sources(zz) {
        if ("mining" === zz || "fishing" === zz) return this.buildSources(zz);
        let uz = this.sourceText.get(zz);
        return uz || (uz = this.buildSources(zz), this.sourceText.set(zz, uz)), uz
      }
      buildSources(zz) {
        const uz = this.translate;
        return "exploration" === zz ? [uz("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), uz("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === zz ? [uz("skyblockGame:logSource", {
          xp: this.number(Fu["Maple Log"])
        })] : "combat" === zz ? [uz("skyblockGame:creatureKillSource"), uz("skyblockGame:noEnvironmentalXp")] : "farming" === zz ? [uz("skyblockGame:cropSource", {
          xp: this.number(Ku["Wheat|FreshlyGrown"])
        }), uz("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), uz("skyblockGame:noYoungCropXp")] : Object.entries("mining" === zz ? Ru : wu).map((zz => {
          let [bz, Ez] = zz;
          return uz("skyblockGame:itemXpSource", {
            item: this.itemName(bz),
            xp: this.number(Ez)
          })
        }))
      }
      number(zz) {
        return zz.toLocaleString(this.locale)
      }
      benefit(zz, uz) {
        const bz = lu(zz, uz);
        return this.translate(bz.translationKey, {
          bonus: this.number(bz.percent)
        })
      }
      WZ(zz) {
        if (!this.SZ) {
          if ("snapshot" === zz.kind) this.progress = zz.progress, this.pending.clear(), this.recent = null;
          else if ("award" === zz.kind && this.progress) {
            const {
              award: uz
            } = zz;
            this.progress = {
              ...this.progress,
              [uz.skill]: uz.after
            };
            for (const [zz, Ez] of this.pending) Ez.skill === uz.skill && this.pending.delete(zz);
            const bz = uz.after.level > uz.before.level;
            this.recordGain(uz.skill, uz.amount, bz ? ++this.nextLevelUpToken : null), bz && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: uz.skill,
              beforeLevel: uz.before.level,
              level: uz.after.level
            })
          } else {
            if ("rejectBlock" === zz.kind) return void this.rejectBlock(zz.position);
            if ("open" === zz.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(zz, uz, bz) {
        if (!this.progress || this.SZ || bz) return;
        const Ez = function(zz, uz) {
          const bz = zz.split("|")[0];
          return "Air" === uz || uz === `Barkless ${zz}` ? Object.hasOwn(Fu, bz) ? {
            skill: "foraging",
            amount: Fu[bz]
          } : "Air" !== uz ? null : Object.hasOwn(Ru, zz) ? {
            skill: "mining",
            amount: Ru[zz]
          } : Ou(zz) ? {
            skill: "farming",
            amount: 10
          } : du(zz) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(Ku, zz) ? {
            skill: "farming",
            amount: Ku[zz]
          } : Object.hasOwn(Uz, zz) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(uz, "Air");
        if (!Ez) return;
        const nz = zz.join(",");
        if (this.pending.has(nz)) return;
        const iz = this.predictedProgress(Ez.skill).totalXp + Ez.amount;
        Number.isSafeInteger(iz) && (this.pending.set(nz, {
          ...Ez,
          expires: this.now() + 2e3
        }), this.recordGain(Ez.skill, 0), this.emit())
      }
      rejectBlock(zz) {
        this.pending.delete(zz.join(",")) && this.emit()
      }
      sd() {
        if (this.SZ) return;
        let zz = !1;
        for (const [uz, bz] of this.pending) bz.expires <= this.now() && (this.pending.delete(uz), zz = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, zz = !0), zz && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(zz, uz) {
        var bz, Ez;
        let nz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const iz = (null === (bz = this.recent) || void 0 === bz ? void 0 : bz.skill) === zz && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          lz = (null === (Ez = this.recent) || void 0 === Ez ? void 0 : Ez.skill) === zz && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: zz,
          confirmed: iz + uz,
          expires: this.now() + 3e3,
          levelUpToken: null !== nz && void 0 !== nz ? nz : lz
        }
      }
      pendingXp(zz) {
        let uz = 0;
        for (const bz of this.pending.values()) bz.skill === zz && (uz += bz.amount);
        return uz
      }
      predictedProgress(zz) {
        const uz = this.progress[zz],
          bz = this.pendingXp(zz);
        return bz ? tu(uz.totalXp + bz, zz) : uz
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var zz, uz, bz;
        const Ez = this.progress ? Bz.map((zz => {
            const uz = this.predictedProgress(zz);
            return {
              ...this.text(zz),
              icon: Xu[zz],
              benefit: this.benefit(zz, uz.level),
              sources: this.sources(zz),
              id: zz,
              selected: zz === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(uz.level)
              }),
              xp: null === uz.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(uz.xpIntoLevel),
                target: this.number(uz.xpForNextLevel)
              }),
              percent: null === uz.xpForNextLevel ? 100 : Math.min(100, uz.xpIntoLevel / uz.xpForNextLevel * 100)
            }
          })) : [],
          nz = Ez.find((zz => {
            var uz;
            return zz.id === (null === (uz = this.recent) || void 0 === uz ? void 0 : uz.skill)
          })),
          iz = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Ez,
          detail: null !== (zz = Ez.find((zz => zz.selected))) && void 0 !== zz ? zz : null,
          overallLevel: this.progress ? Bz.reduce(((zz, uz) => zz + this.predictedProgress(uz).level), 0) : null,
          hud: nz && iz > 0 ? {
            skill: nz,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(iz)
            }),
            levelUpToken: null !== (uz = null === (bz = this.recent) || void 0 === bz ? void 0 : bz.levelUpToken) && void 0 !== uz ? uz : null,
            colour: su(nz.id)
          } : null
        }
      }
    }
    const Mb = Math.max(1600, 600, 950) + 400,
      tb = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Hb = "skyblockQuestsView",
      Ob = "skyblockQuestNotificationView";
    class pb extends pz {
      constructor(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          lz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(zz, Ez, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = uz, this.translate = bz, this.now = nz, this.locale = iz, this.publishNotification = lz, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var zz, uz;
          this.selected = null !== (zz = null === (uz = this.authoritative) || void 0 === uz ? void 0 : uz.trackedQuestId) && void 0 !== zz ? zz : null, this.show()
        }, this.select = zz => {
          this.selected = zz, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const zz = this.snapshot.detail;
          !this.SZ && null !== zz && void 0 !== zz && zz.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(zz.id), this.emit())
        }, this.viewDialogue = () => {
          const zz = this.snapshot.detail;
          var uz;
          zz && (null === (uz = this.onViewDialogue) || void 0 === uz || uz.call(this, zz.id))
        }, this.notifications = new ou(nz, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var zz, uz;
        return null !== (zz = null === (uz = this.authoritative) || void 0 === uz ? void 0 : uz.trackedQuestId) && void 0 !== zz ? zz : null
      }
      notify(zz) {
        !this.SZ && this.notifications.enqueue(zz) && this.emitNotification()
      }
      setNotificationsHeld(zz) {
        (this.notifications.setHeld(zz) || zz) && this.emitNotification()
      }
      sd() {
        var zz, uz;
        if (this.SZ) return;
        this.notifications.sd() && this.emitNotification();
        let bz = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, bz = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, bz = !0);
        const Ez = db(this.authoritative);
        null !== Ez && void 0 !== Ez && null !== (zz = Ez.questClock) && void 0 !== zz && zz.running && this.clockText(Ez) !== (null === (uz = this.snapshot.tracked) || void 0 === uz ? void 0 : uz.clock) && (bz = !0), bz && this.emit()
      }
      setTranslator(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = zz, this.locale = uz, this.emitNotification(), this.emit()
      }
      WZ(zz) {
        if (!this.SZ)
          if ("completion" === zz.kind) this.notify(zz.questCompletion);
          else if ("landmark" === zz.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: zz.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === zz.kind) {
          var uz, bz, Ez;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: zz.npcNoteTitleKey,
            textKey: zz.npcNoteTextKey,
            params: null !== (uz = zz.npcNoteParams) && void 0 !== uz ? uz : {},
            nameKeys: null !== (bz = zz.npcNoteNameKeys) && void 0 !== bz ? bz : {},
            iconItem: null !== (Ez = zz.npcNoteIconItem) && void 0 !== Ez ? Ez : null
          })
        } else if ("open" === zz.kind) this.show();
        else if ("guidance" === zz.kind) this.waypoint = zz.waypoint, this.compassTarget = zz.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === zz.kind) {
          this.authoritative = zz.snapshot, this.notifications.sd() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const uz = this.trackedStepPulse;
          this.updateTrackedStepPulse(zz.snapshot), this.emit(), this.trackedStepPulse > uz && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.SZ || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var zz;
        return null !== (zz = this.translateWithIcons) && void 0 !== zz ? zz : this.translate
      }
      clockText(zz) {
        const uz = zz.questClock;
        if (!uz) return null;
        const bz = uz.elapsedMs + (uz.running ? this.now() - this.receivedAt : 0);
        return void 0 === uz.countdownFromMs ? az(bz, !1) : az(1e3 * Math.ceil(Math.max(0, uz.countdownFromMs - bz) / 1e3), !1)
      }
      updateTrackedStepPulse(zz) {
        var uz, bz, Ez;
        const nz = db(zz);
        if (!nz) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const iz = zz => nz.subquests.filter((uz => zz(uz.status))).map((zz => zz.id)),
          lz = iz((zz => "completed" === zz || "skipped" === zz)),
          Mz = iz((zz => "locked" !== zz)),
          tz = (null === (uz = this.trackedSteps) || void 0 === uz ? void 0 : uz.questId) === nz.id && nz.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (tz) {
          const zz = lz.filter((zz => !tz.finished.has(zz))),
            uz = iz((zz => "active" === zz || "ready" === zz)).filter((zz => !tz.unlocked.has(zz)));
          zz.length > 0 && this.trackedStepPulse++, (zz.length > 0 || uz.length > 0) && (this.trackedChange = {
            finished: new Set(zz),
            unlocked: new Set(uz),
            expiresAt: this.now() + Mb
          })
        } else {
          var Hz;
          this.trackedStepPulse = (null === (Hz = this.trackedSteps) || void 0 === Hz ? void 0 : Hz.questId) === nz.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: nz.id,
          progress: nz.progress,
          finished: new Set([...null !== (bz = null === tz || void 0 === tz ? void 0 : tz.finished) && void 0 !== bz ? bz : [], ...lz]),
          unlocked: new Set([...null !== (Ez = null === tz || void 0 === tz ? void 0 : tz.unlocked) && void 0 !== Ez ? Ez : [], ...Mz])
        }
      }
      entry(zz, uz) {
        var bz, Ez;
        const nz = zz.id === (null === (bz = this.authoritative) || void 0 === bz ? void 0 : bz.trackedQuestId),
          iz = this.now() < this.trackAvailableAt,
          lz = this.questTextTranslator(),
          Mz = zz.subquests.map((uz => {
            var bz, Ez, iz, Mz, tz, Hz;
            const Oz = null !== (bz = uz.handInNpcName) && void 0 !== bz ? bz : zz.giverName,
              pz = this.translate("skyblockGame:progress", {
                current: uz.progress.toLocaleString(this.locale),
                target: uz.target.toLocaleString(this.locale)
              }),
              dz = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Oz ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [uz.status],
              Fz = "active" === uz.status || "ready" === uz.status;
            return {
              id: uz.id,
              name: ru(lz, uz.nameKey, uz.nameParams),
              description: ru(lz, uz.descriptionKey, uz.descriptionParams),
              progress: pz,
              status: uz.status,
              statusLabel: dz ? this.translate(dz, {
                npc: Oz
              }) : pz,
              iconItem: Fz && null !== (Ez = uz.questIconItem) && void 0 !== Ez ? Ez : null,
              barPercent: "active" === uz.status && uz.showsProgressBar ? Math.min(100, 100 * uz.progress / uz.target) : null,
              justFinished: nz && null !== (iz = null === (Mz = this.trackedChange) || void 0 === Mz ? void 0 : Mz.finished.has(uz.id)) && void 0 !== iz && iz,
              justUnlocked: nz && null !== (tz = null === (Hz = this.trackedChange) || void 0 === Hz ? void 0 : Hz.unlocked.has(uz.id)) && void 0 !== tz && tz
            }
          }));
        return {
          id: zz.id,
          name: ru(lz, zz.nameKey, zz.nameParams),
          description: ru(lz, zz.descriptionKey, zz.descriptionParams),
          progress: uz ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: zz.progress.toLocaleString(this.locale),
            target: zz.target.toLocaleString(this.locale)
          }),
          completed: uz,
          tracked: nz,
          selected: zz.id === this.selected,
          canTrack: !uz && !nz && !iz,
          trackLabel: this.translate(nz ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : iz ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== zz.id,
          subquests: Mz,
          focusStep: null !== (Ez = Mz.find((zz => null !== zz.barPercent))) && void 0 !== Ez ? Ez : null,
          clock: this.clockText(zz)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz;
        const Oz = [...null !== (zz = null === (uz = this.authoritative) || void 0 === uz ? void 0 : uz.active) && void 0 !== zz ? zz : [], ...null !== (bz = null === (Ez = this.authoritative) || void 0 === Ez ? void 0 : Ez.completed) && void 0 !== bz ? bz : []];
        var pz, dz, Fz, Zz;
        Oz.some((zz => zz.id === this.selected)) || (this.selected = null !== (pz = null !== (dz = null === (Fz = this.authoritative) || void 0 === Fz ? void 0 : Fz.trackedQuestId) && void 0 !== dz ? dz : null === (Zz = Oz[0]) || void 0 === Zz ? void 0 : Zz.id) && void 0 !== pz ? pz : null);
        const Rz = null !== (nz = null === (iz = this.authoritative) || void 0 === iz ? void 0 : iz.active.map((zz => this.entry(zz, !1)))) && void 0 !== nz ? nz : [];
        Rz.sort(((zz, uz) => Number(uz.tracked) - Number(zz.tracked)));
        const Kz = null !== (lz = null === (Mz = this.authoritative) || void 0 === Mz ? void 0 : Mz.completed.map((zz => this.entry(zz, !0)))) && void 0 !== lz ? lz : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Rz,
          completed: Kz,
          completedExpanded: this.completedExpanded,
          detail: null !== (tz = [...Rz, ...Kz].find((zz => zz.selected))) && void 0 !== tz ? tz : null,
          tracked: null !== (Hz = Rz.find((zz => zz.tracked))) && void 0 !== Hz ? Hz : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function db(zz) {
      var uz;
      return null !== (uz = null === zz || void 0 === zz ? void 0 : zz.active.find((uz => uz.id === zz.trackedQuestId))) && void 0 !== uz ? uz : null
    }
    const Fb = "skyblockDungeonsView";
    class Zb extends pz {
      constructor(zz, uz) {
        let bz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Ez = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = uz, this.locale = bz, this.requestEnter = Ez, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = zz => {
          this.selected = zz, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const zz = this.pickerEntry(),
            uz = null === zz || void 0 === zz ? void 0 : zz.difficulties[this.pageIndex];
          void 0 !== uz && null !== uz.unlockedBoss && (this.close(), this.requestEnter(zz.id, uz.difficulty))
        }
      }
      setTranslator(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = zz, this.locale = uz, this.emit()
      }
      WZ(zz) {
        var uz, bz;
        if (!this.SZ) return "open" === zz.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== zz.kind ? "snapshot" === zz.kind && (this.authoritative = zz.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (uz = null === (bz = this.pickerEntry()) || void 0 === bz ? void 0 : bz.difficulties.length) && void 0 !== uz ? uz : 1) - 1)), null === zz.snapshot && this.open ? this.close() : this.emit()) : this.choose(zz.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(zz) {
        var uz;
        const bz = null === (uz = this.authoritative) || void 0 === uz ? void 0 : uz.dungeons.find((uz => uz.id === zz));
        void 0 !== bz ? this.open && this.pickerDungeonId === zz || (this.pickerDungeonId = zz, this.pageIndex = Math.max(0, bz.difficulties.findLastIndex((zz => null !== zz.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${zz}`)
      }
      turnTo(zz) {
        var uz, bz;
        const Ez = null !== (uz = null === (bz = this.pickerEntry()) || void 0 === bz ? void 0 : bz.difficulties.length) && void 0 !== uz ? uz : 0;
        zz < 0 || zz >= Ez || zz === this.pageIndex || (this.pageIndex = zz, this.emit())
      }
      pickerEntry() {
        var zz, uz;
        return null !== (zz = null === (uz = this.authoritative) || void 0 === uz ? void 0 : uz.dungeons.find((zz => zz.id === this.pickerDungeonId))) && void 0 !== zz ? zz : null
      }
      difficulty(zz) {
        const uz = zz.completions > 0,
          bz = null === zz.bestMs ? null : az(zz.bestMs);
        return {
          difficulty: zz.difficulty,
          label: this.translate(Pz[zz.difficulty]),
          colour: Gz[zz.difficulty],
          beaten: uz,
          bestTime: bz,
          completions: zz.completions,
          summary: uz ? [null === bz ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: bz
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: zz.completions.toLocaleString(this.locale)
          })].filter((zz => null !== zz)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(zz) {
        const uz = zz.difficulties.map((zz => this.difficulty(zz))),
          bz = uz.filter((zz => zz.beaten)).length;
        return {
          id: zz.id,
          name: this.translate(zz.nameKey),
          selected: zz.id === this.selected,
          beatenSummary: `${bz} / ${uz.length}`,
          difficulties: uz
        }
      }
      picker() {
        const zz = this.pickerEntry();
        if (null === zz || 0 === zz.difficulties.length) return null;
        const uz = zz.difficulties.map(((uz, bz) => {
          var Ez, nz, iz, lz;
          const Mz = uz.unlockedBoss,
            tz = null === Mz ? this.lockedHint(zz, bz) : null;
          return {
            ...this.difficulty(uz),
            unlocked: null !== Mz,
            bossName: null === Mz ? null : this.translate(Mz.bossNameKey),
            bossMobType: null !== (Ez = null === Mz || void 0 === Mz ? void 0 : Mz.bossMobType) && void 0 !== Ez ? Ez : null,
            bossMobVariation: null !== (nz = null === Mz || void 0 === Mz ? void 0 : Mz.bossMobVariation) && void 0 !== nz ? nz : null,
            lockedHint: null !== (iz = null === tz || void 0 === tz ? void 0 : tz.text) && void 0 !== iz ? iz : null,
            lockedHintHighlight: null !== (lz = null === tz || void 0 === tz ? void 0 : tz.highlight) && void 0 !== lz ? lz : null,
            current: bz === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(zz.nameKey),
          pages: uz,
          page: uz[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < uz.length - 1
        }
      }
      lockedHint(zz, uz) {
        var bz, Ez, nz;
        if (0 === uz && "number" === typeof zz.combatLevelLock) {
          const uz = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: zz.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: uz,
            colour: su("combat"),
            icon: Xu.combat
          })
        }
        const iz = null !== (bz = null === (Ez = this.authoritative) || void 0 === Ez ? void 0 : Ez.dungeons) && void 0 !== bz ? bz : [],
          lz = uz > 0 ? zz : null !== (nz = iz[iz.indexOf(zz) - 1]) && void 0 !== nz ? nz : null,
          Mz = uz > 0 ? zz.difficulties[uz - 1] : null === lz || void 0 === lz ? void 0 : lz.difficulties[0];
        if (null === lz || void 0 === Mz) return null;
        const tz = this.translate(lz.nameKey);
        if (null === Mz.unlockedBoss) return lz === zz ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, Mz.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: tz
        }, Mz.difficulty);
        const Hz = this.translate(Mz.unlockedBoss.bossNameKey);
        return lz === zz ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Hz
        }, Mz.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Hz,
            dungeon: tz
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(zz, uz, bz) {
        return this.hintHighlighting(zz, uz, "difficulty", {
          name: this.translate(Pz[bz]),
          colour: Gz[bz],
          icon: null
        })
      }
      hintHighlighting(zz, uz, bz, Ez) {
        let {
          name: nz,
          colour: iz,
          icon: lz
        } = Ez;
        const Mz = this.translate(zz, {
          ...uz,
          [bz]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(zz, {
            ...uz,
            [bz]: nz
          }),
          highlight: 2 === Mz.length ? {
            before: Mz[0],
            name: nz,
            after: Mz[1],
            colour: iz,
            icon: lz
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var zz, uz, bz;
        const Ez = null !== (zz = null === (uz = this.authoritative) || void 0 === uz ? void 0 : uz.dungeons) && void 0 !== zz ? zz : [];
        var nz, iz;
        Ez.some((zz => zz.id === this.selected)) || (this.selected = null !== (nz = null === (iz = Ez[0]) || void 0 === iz ? void 0 : iz.id) && void 0 !== nz ? nz : null);
        const lz = Ez.map((zz => this.entry(zz)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: lz,
          detail: null !== (bz = lz.find((zz => zz.selected))) && void 0 !== bz ? bz : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Rb = ["mining", "farming", "foraging", "fishing", "combat"],
      Kb = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      wb = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Xb() {
      for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
      return uz.map(((zz, uz) => ({
        amount: zz,
        coins: Kb[uz],
        xp: wb[uz]
      })))
    }
    const fb = Xb(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      sb = Xb(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      rb = Xb(50, 100, 250, 500, 1e3, 2500, 5e3),
      ob = Xb(25, 50, 100, 250, 500, 1e3),
      Nb = Xb(10, 25, 50, 100, 250, 500, 1e3),
      vb = Xb(1, 5, 10, 25, 50);

    function xb(zz, uz) {
      return {
        id: zz,
        category: "fishing",
        item: uz,
        drops: [uz],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Nb
      }
    }
    const Jb = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: sb
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: rb
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: rb
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: ob
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: ob
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: sb
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: fb
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: fb
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: fb
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: rb
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: sb
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: sb
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: sb
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: rb
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: rb
      }, xb("wheatfish", "Wheatfish"), xb("darter", "Darter"), xb("sunset_minnow", "Sunset Minnow"), xb("root_flounder", "Root Flounder"), xb("greenfin_loach", "Greenfin Loach"), xb("red_strongfish", "Red Strongfish"), xb("green_strongfish", "Green Strongfish"), xb("boomerang_fish", "Boomerang Fish"), xb("seahorse", "Seahorse"), xb("spined_stickleback", "Spined Stickleback"), xb("moon_strongfish", "Moon Strongfish"), xb("boulder_bass", "Boulder Bass"), xb("grass_snapper", "Grass Snapper"), xb("crystal_wheatfish", "Crystalized Wheatfish", vb), xb("moonstone_pupfish", "Moonstone Pupfish", vb), xb("reedglass_minnow", "Reedglass Minnow"), xb("mangrove_herring", "Mangrove Herring"), xb("mudline_perch", "Mudline Perch"), xb("coastal_mullet", "Coastal Mullet"), xb("reef_sardine", "Reef Sardine"), xb("root_perch", "Root Perch"), xb("driftwood_catfish", "Driftwood Catfish"), xb("aether_minnow", "Aether Minnow"), xb("needlefish", "Tri-Pointed Needlefish"), xb("threadfin_bream", "Threadfin Bream"), xb("mudbelly_tilapia", "Mudbelly Tilapia"), xb("rotslab_eel", "Rotslab Eel"), xb("polarflash_electron", "Polarflash Electron"), xb("mireback_carp", "Mireback Carp"), xb("blackwater_bream", "Blackwater Bream"), xb("stone_grouper", "Stone Grouper"), xb("shadeback_ray", "Shadeback Ray"), xb("glacial_silverfish", "Glacial Silverfish"), xb("hatchetfish", "Hatchetfish"), xb("moonlit_boomerang", "Moonlit Boomerang Fish"), xb("murkborne_ray", "Murkborne Ray"), xb("bamboo_catfish", "Bamboo Catfish"), xb("mossback_arapaima", "Mossback Arapaima"), xb("murk_stingray", "Murk Stingray"), xb("channel_sawfish", "Channel Sawfish"), xb("boned_sturgeon", "Boned Sturgeon"), xb("oarfish", "Oarfish"), xb("snakehead", "Snakehead", vb), xb("eldertide_leviathan", "Eldertide Leviathan", vb), xb("pithead", "Pithead"), xb("electric_eel", "Electric Eel"), xb("shadow_darter", "Shadow Darter"), xb("abyss_carp", "Abyss Carp"), xb("nomai_moray", "Nomai Moray"), xb("silver_dragonfish", "Silver Dragonfish"), xb("giant_moray", "Giant Moray"), xb("coelacanth", "Coelacanth", vb), xb("frost_herring", "Frost Herring"), xb("permafrost_halibut", "Permafrost Halibut"), xb("glacial_lanternfish", "Glacial Lanternfish"), xb("frozen_grenadier", "Frozen Grenadier"), xb("blackfin_icefish", "Blackfin Icefish"), xb("moonfish", "Moonfish"), xb("alpha_strongfish", "Alpha Moon Strongfish"), xb("deep_lanternfish", "Deepwater Lanternfish", vb), xb("pearlescent_moonfish", "Pearlescent Moonfish", vb), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: sb
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: ob
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: ob
      }],
      Ab = (new Map(Jb.map((zz => [zz.id, zz]))), new Map),
      Tb = new Map;
    for (const dt of Jb) {
      for (const [zz, uz] of Object.entries(null !== (Lb = dt.blocks) && void 0 !== Lb ? Lb : {})) {
        var Lb;
        Ab.set(zz, {
          collection: dt,
          amount: uz
        })
      }
      for (const zz of null !== (Pb = dt.drops) && void 0 !== Pb ? Pb : []) {
        var Pb;
        Tb.set(zz, dt)
      }
    }

    function Gb(zz, uz) {
      let bz = 0;
      for (; bz < zz.tiers.length && uz >= zz.tiers[bz].amount;) bz++;
      return bz
    }
    const ab = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Vb(zz) {
      return ab[zz - 1]
    }
    const mb = "skyblockCollectionsView";
    class qb extends pz {
      constructor(zz, uz) {
        let bz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Ez = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz => zz;
        super(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = uz, this.locale = bz, this.itemName = Ez, this.counts = null, this.category = "mining", this.selected = Jb[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = zz => {
          this.category = zz, this.selected = this.inCategory(zz)[0].id, this.emit()
        }, this.select = zz => {
          this.selected = zz, this.emit()
        }
      }
      setTranslator(zz, uz, bz) {
        this.translate = zz, this.locale = uz, this.itemName = bz, this.emit()
      }
      WZ(zz) {
        if (!this.SZ)
          if ("collOpen" !== zz.kind) {
            (zz.collFull || null === this.counts) && (this.counts = new Map);
            for (const [uz, bz] of zz.collCounts) this.counts.set(uz, bz);
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
        var zz;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const uz = this.inCategory(this.category).map((zz => this.collectionView(zz))),
          bz = Jb.reduce(((zz, uz) => zz + this.tierOf(uz)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Rb.map((zz => this.categoryView(zz))),
          collections: uz,
          detail: null !== (zz = uz.find((zz => zz.selected))) && void 0 !== zz ? zz : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(bz)
          })
        }
      }
      categoryView(zz) {
        const uz = this.inCategory(zz),
          bz = uz.reduce(((zz, uz) => zz + this.tierOf(uz)), 0),
          Ez = uz.reduce(((zz, uz) => zz + uz.tiers.length), 0);
        return {
          id: zz,
          label: this.translate(`skyblockGame:${zz}`),
          icon: Xu[zz],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(bz),
            target: this.number(Ez)
          }),
          selected: zz === this.category
        }
      }
      collectionView(zz) {
        var uz, bz;
        const Ez = null !== (uz = this.counts.get(zz.id)) && void 0 !== uz ? uz : 0,
          nz = Gb(zz, Ez),
          iz = null !== (bz = zz.tiers[nz]) && void 0 !== bz ? bz : null,
          lz = 0 === nz ? 0 : zz.tiers[nz - 1].amount;
        return {
          id: zz.id,
          name: this.itemName(zz.item),
          icon: zz.item,
          selected: zz.id === this.selected,
          locked: 0 === Ez,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Ez)
          }),
          tier: 0 === nz ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(nz),
          percent: null === iz ? 100 : Math.min(100, (Ez - lz) / (iz.amount - lz) * 100),
          progress: null === iz ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Ez),
            target: this.number(iz.amount)
          }),
          nextReward: null === iz ? null : this.reward(zz, iz.coins, iz.xp)
        }
      }
      reward(zz, uz, bz) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(uz),
          xp: this.number(bz),
          skill: this.translate(`skyblockGame:${zz.category}`)
        })
      }
      tierLabel(zz) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Vb(zz)
        })
      }
      tierOf(zz) {
        var uz;
        return Gb(zz, null !== (uz = this.counts.get(zz.id)) && void 0 !== uz ? uz : 0)
      }
      inCategory(zz) {
        return Jb.filter((uz => uz.category === zz))
      }
      number(zz) {
        return zz.toLocaleString(this.locale)
      }
    }
    const hb = "skyblockPortalTransitView",
      Ub = "skyblockPortalArrival";
    class cb {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.sK = zz, this.storage = uz, this.now = bz, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      WZ(zz) {
        const uz = {
          zoneNameKey: zz.transitZoneNameKey,
          variation: zz.transitZoneVariation,
          colour: zz.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Ub, uz), this.show("departure", uz.zoneNameKey, uz.colour, zz.transitDurationMs, zz.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Ub)
        }))
      }
      resumeArrival(zz) {
        const uz = this.storage.getItem(Ub);
        this.storage.removeItem(Ub), null === uz || uz.variation !== zz || this.now() - uz.departedAt > 3e4 || this.show("arrival", uz.zoneNameKey, uz.colour, 3200, 2e4)
      }
      finishArrival(zz) {
        var uz;
        "arrival" === (null === (uz = this.view) || void 0 === uz ? void 0 : uz.phase) && this.view.token === zz && (this.clearTimer(), this.view = null, this.sK(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(zz, uz, bz, Ez, nz, iz) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: zz,
          zoneNameKey: uz,
          colour: bz,
          durationMs: Ez
        }, this.sK(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.sK(null), null === iz || void 0 === iz || iz()
        }), nz)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const gb = "skyblockDailyRewardView",
      Sb = "skyblockDailyRewardCoin";
    class yb {
      constructor(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          tz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.sK = zz, this.isBusy = uz, this.holdQuestPopups = bz, this.onHeldCoinsChanged = Ez, this.onCoinLanded = nz, this.onStarted = iz, this.onFinished = lz, this.onItemLanded = Mz, this.now = tz, this.yM = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var zz, uz;
        return null !== (zz = null === (uz = this.playing) || void 0 === uz ? void 0 : uz.view) && void 0 !== zz ? zz : null
      }
      getHeldCoins() {
        var zz, uz;
        let bz = 0;
        for (const Ez of this.yM) bz += Ez.coins;
        return bz - (null !== (zz = null === (uz = this.playing) || void 0 === uz ? void 0 : uz.released) && void 0 !== zz ? zz : 0)
      }
      WZ(zz) {
        "dailyRewardClaimed" !== zz.kind ? (this.queue.push(zz), this.sd()) : this.yM.push({
          coins: zz.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      sd() {
        const zz = this.now();
        if (null === this.playing) return this.releaseUnshown(zz), void this.startNext(zz);
        const uz = this.playing,
          bz = zz - uz.startedAt,
          Ez = uz.view.flyingCoins,
          nz = function(zz, uz) {
            let bz = 0;
            for (; bz < uz && Qb(bz, uz) <= zz;) bz++;
            return bz
          }(bz, Ez);
        if (nz !== uz.landed) {
          for (let zz = nz - uz.landed > 2 ? nz - 1 : uz.landed; zz < nz; zz++) this.onCoinLanded(zz, Ez);
          uz.landed = nz, uz.released = Math.round(uz.view.coins * nz / Ez), this.onHeldCoinsChanged()
        }
        for (; uz.itemsLanded < uz.view.items.length && 2e3 + 160 * uz.itemsLanded + 630 <= bz;) this.onItemLanded(uz.itemsLanded), uz.itemsLanded++;
        bz >= uz.view.durationMs && (this.finish(), this.startNext(zz))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.yM = [], this.sK(null)
      }
      startNext(zz) {
        if (0 === this.queue.length || this.isBusy()) return;
        const uz = this.queue.shift();
        this.token++;
        const bz = {
          token: this.token,
          day: uz.dailyRewardDay,
          coins: uz.dailyRewardCoins,
          items: uz.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: uz.dailyRewardDay === Az ? 24 : 14
        };
        this.playing = {
          view: bz,
          startedAt: zz,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.sK(bz), this.onStarted(bz)
      }
      finish() {
        this.yM.shift(), this.playing = null, this.holdQuestPopups(!1), this.sK(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(zz) {
        if (this.queue.length > 0 || 0 === this.yM.length) return;
        const uz = this.yM.length;
        this.yM = this.yM.filter((uz => zz - uz.receivedAt < 6e4)), this.yM.length !== uz && this.onHeldCoinsChanged()
      }
    }

    function Db(zz, uz) {
      return 450 + 715 * zz / (uz - 1)
    }

    function Qb(zz, uz) {
      return Db(zz, uz) + 650
    }
    const Wb = "skyblockMailboxView";
    class eb {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.sK = zz, this.isBusy = uz, this.onStarted = bz, this.now = Ez, this.waiting = [], this.playing = null, this.token = 0, this.itemName = zz => zz
      }
      getSnapshot() {
        var zz, uz;
        return null !== (zz = null === (uz = this.playing) || void 0 === uz ? void 0 : uz.view) && void 0 !== zz ? zz : null
      }
      setItemName(zz) {
        this.itemName = zz
      }
      WZ(zz) {
        this.waiting.push(...zz.mailLetters), this.sd()
      }
      sd() {
        const zz = this.now();
        null !== this.playing && zz - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.sK(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(zz)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.sK(null)
      }
      start(zz) {
        const uz = this.waiting.slice(0, 3);
        this.token++;
        const bz = {
          token: this.token,
          letters: uz.map((zz => this.toView(zz))),
          more: this.waiting.length - uz.length,
          durationMs: 4500 + 700 * uz.length
        };
        this.waiting = [], this.playing = {
          view: bz,
          startedAt: zz
        }, this.sK(bz), this.onStarted(bz)
      }
      toView(zz) {
        return {
          coins: zz.mailCoins,
          items: zz.mailItems.map((zz => {
            var uz;
            return {
              itemName: zz.mailItemName,
              amount: zz.mailItemAmount,
              label: null !== (uz = zz.mailItemLabel) && void 0 !== uz ? uz : this.itemName(zz.mailItemName)
            }
          })),
          reasonKey: zz.mailReasonKey,
          reasonParams: zz.mailReasonParams
        }
      }
    }
    const jb = "skyblockQuestGraphView",
      Ib = "skyblockDevQuestJump";

    function Bb(zz) {
      if (0 === zz.length) return "";
      const uz = [`M ${zz[0].x} ${zz[0].y}`];
      for (let Ez = 1; Ez < zz.length - 1; Ez++) {
        const bz = zz[Ez + 1];
        uz.push(`Q ${zz[Ez].x} ${zz[Ez].y} ${(zz[Ez].x+bz.x)/2} ${(zz[Ez].y+bz.y)/2}`)
      }
      const bz = zz[zz.length - 1];
      return uz.push(`L ${bz.x} ${bz.y}`), uz.join(" ")
    }

    function Cb(zz, uz) {
      return zz < uz ? `${zz}|${uz}` : `${uz}|${zz}`
    }
    class Yb extends pz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(zz, bz, Ez), this.translate = uz, this.requestJump = nz, this.requestArrive = iz, this.storage = lz, this.now = Mz, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = zz => {
          zz !== this.hoveredId && (this.hoveredId = zz, this.emit())
        }, this.jump = zz => {
          this.close(), this.requestJump(zz)
        }
      }
      WZ(zz) {
        if (!this.SZ)
          if ("graph" !== zz.kind) {
            if ("jumping" === zz.kind) {
              const uz = {
                questId: zz.graphQuestId,
                variation: zz.graphVariation,
                completes: zz.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Ib, uz)
            }
          } else {
            const uz = ++this.graphCount;
            bz.e(111).then((() => bz(6167))).then((bz => {
              let {
                default: Ez
              } = bz;
              this.SZ || uz !== this.graphCount || (this.layout = function(zz, uz, bz) {
                var Ez, nz;
                const iz = new zz.graphlib.Graph;
                iz.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), iz.setDefaultEdgeLabel((() => ({})));
                const lz = new Set;
                for (const Oz of uz) lz.add(Oz.graphQuestId), iz.setNode(Oz.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const Mz = bz.filter((zz => lz.has(zz.graphFromId) && lz.has(zz.graphToId) && zz.graphFromId !== zz.graphToId)),
                  tz = new Map;
                for (const Oz of [...Mz].sort(((zz, uz) => Number("awaits" === zz.graphEdgeKind) - Number("awaits" === uz.graphEdgeKind)))) {
                  const zz = Cb(Oz.graphFromId, Oz.graphToId);
                  tz.has(zz) || (tz.set(zz, Oz), iz.setEdge(Oz.graphFromId, Oz.graphToId))
                }
                zz.layout(iz);
                const Hz = iz.graph();
                return {
                  width: Math.ceil(null !== (Ez = Hz.width) && void 0 !== Ez ? Ez : 0),
                  height: Math.ceil(null !== (nz = Hz.height) && void 0 !== nz ? nz : 0),
                  nodes: uz.map((zz => {
                    var uz, bz;
                    const Ez = iz.node(zz.graphQuestId);
                    return {
                      node: zz,
                      left: (null !== (uz = Ez.x) && void 0 !== uz ? uz : 0) - 95,
                      top: (null !== (bz = Ez.y) && void 0 !== bz ? bz : 0) - 26
                    }
                  })),
                  edges: Mz.map((zz => {
                    var uz;
                    const bz = tz.get(Cb(zz.graphFromId, zz.graphToId)),
                      Ez = null !== (uz = iz.edge(bz.graphFromId, bz.graphToId).points) && void 0 !== uz ? uz : [];
                    return {
                      edge: zz,
                      key: `${zz.graphFromId}|${zz.graphToId}|${zz.graphEdgeKind}`,
                      path: Bb(bz.graphFromId === zz.graphFromId ? Ez : [...Ez].reverse())
                    }
                  })),
                  plans: new Map(uz.map((zz => [zz.graphQuestId, new Set([zz.graphQuestId, ...zz.graphPlanIds])])))
                }
              }(Ez, zz.graphNodes, zz.graphEdges), this.show())
            })).catch((zz => {
              console.error("The quest graph could not be laid out", zz)
            }))
          }
      }
      resumeJump(zz) {
        const uz = this.storage.getItem(Ib);
        this.storage.removeItem(Ib), null === uz || uz.variation !== zz || this.now() - uz.departedAt > 6e4 || this.requestArrive(uz.questId, uz.completes)
      }
      setTranslator(zz) {
        this.translate = zz, this.emit()
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
        var zz, uz;
        return null !== (zz = null === this.hoveredId || null === (uz = this.layout) || void 0 === uz ? void 0 : uz.plans.get(this.hoveredId)) && void 0 !== zz ? zz : new Set
      }
      buildSnapshot() {
        const zz = this.layout;
        if (null === zz) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const uz = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: zz.width,
          height: zz.height,
          nodes: zz.nodes.map((zz => {
            let {
              node: bz,
              left: Ez,
              top: nz
            } = zz;
            return {
              id: bz.graphQuestId,
              name: this.translate(bz.graphNameKey),
              detail: null === bz.graphGiverName ? bz.graphZoneId : `${bz.graphGiverName} \xb7 ${bz.graphZoneId}`,
              state: bz.graphState,
              left: Ez,
              top: nz,
              inPlan: uz.has(bz.graphQuestId),
              hovered: bz.graphQuestId === this.hoveredId
            }
          })),
          edges: zz.edges.map((zz => {
            let {
              edge: bz,
              key: Ez,
              path: nz
            } = zz;
            return {
              key: Ez,
              kind: bz.graphEdgeKind,
              path: nz,
              inPlan: uz.has(bz.graphFromId) && uz.has(bz.graphToId)
            }
          })),
          planning: uz.size > 0
        }
      }
    }
    var kb = bz(36486);
    const zE = 250,
      uE = 2150,
      bE = -2.8,
      EE = 2.2,
      nE = -27,
      iE = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      lE = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      ME = Math.round(50 + 1e3 * (lE.delay + lE.period / 2)),
      tE = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      HE = Array.from({
        length: 26
      }, ((zz, uz) => {
        const bz = 2.39996 * uz,
          Ez = .5 + .618034 * uz % 1 * .23,
          nz = uz % 3 !== 2;
        return {
          rune: nz ? tE[7 * uz % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(bz)*Ez).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(bz)*Ez).toFixed(3)})`,
            "--spin": 40 * (uz % 5 - 2) + "deg",
            "--size": (nz ? 1 + uz % 4 * .2 : .3 + uz % 2 * .15) + "rem",
            "--duration": `${(1.8+7*uz%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*uz%3).toFixed(2)}s`
          }
        }
      }));

    function OE(zz, uz) {
      return Array.from({
        length: 30 + 3 * zz + (uz ? 10 : 0)
      }, ((zz, uz) => {
        const bz = uz < 4,
          Ez = bz ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          nz = bz ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          iz = bz ? 2.2 : .6 + Math.random(),
          lz = bz ? .3 : Math.random() < .5 ? .16 : .24,
          Mz = bz ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Ez,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${nz.toFixed(2)}rem`,
          "--length": `${iz.toFixed(2)}rem`,
          "--width": `${lz}rem`,
          "--duration": `${Math.round(Mz)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function pE(zz) {
      let {
        zeta: uz,
        period: bz
      } = zz;
      const Ez = 2 * Math.PI / bz;
      return {
        w: Ez,
        decay: uz * Ez / Math.sqrt(1 - uz * uz)
      }
    }
    let dE = !1;

    function FE() {
      if (dE) return;
      dE = !0;
      const zz = document.createElement("style");
      zz.textContent = function() {
        const zz = pE(iE),
          uz = pE(lE),
          bz = uz => Math.exp(-zz.decay * uz) * Math.sin(zz.w * uz),
          Ez = bz(Math.atan(zz.w / zz.decay) / zz.w),
          nz = .25,
          iz = 2.15,
          lz = Math.round(215),
          Mz = [];
        for (let tz = 0; tz <= lz; tz++) {
          const zz = tz / lz * iz;
          let Hz = Math.sin(Math.min(zz, nz) / nz * Math.PI / 2) ** 2,
            Oz = 0,
            pz = 1,
            dz = 1 - .2 * Hz,
            Fz = 1;
          if (zz >= nz) {
            const lz = zz - nz,
              Mz = Math.max(0, lz - .05);
            Hz = Math.exp(-Mz / .05), Oz = bz(Mz + iE.lead * (1 - Math.exp(-Mz / iE.rush))) / Ez;
            const tz = Mz - lE.delay,
              Zz = tz <= 0 ? 0 : 1 - Math.exp(-uz.decay * tz) * (Math.cos(uz.w * tz) + uz.decay / uz.w * Math.sin(uz.w * tz)),
              Rz = Math.max(0, (zz - 1.77) / (iz - 1.77));
            pz = (1 + (lE.to - 1) * Zz) * (1 + .08 * Rz), dz = 1.1 + 1.5 * Math.exp(-lz / .07) + .3 * Math.exp(-(((1e3 * lz - ME) / 100) ** 2)) + .8 * Rz, Fz = 1 - Rz ** 1.5
          }
          const Zz = .15 * Hz + bE * Oz,
            Rz = -.1 * Hz + EE * Oz,
            Kz = 3 * Hz + nE * Oz;
          Mz.push(`${(tz/lz*100).toFixed(3)}% { opacity: ${Fz.toFixed(3)}; transform: translate(${Zz.toFixed(3)}rem, ${Rz.toFixed(3)}rem) rotate(${Kz.toFixed(2)}deg) scale(${pz.toFixed(3)}); filter: brightness(${dz.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${Mz.join(" ")} }`
      }(), document.head.append(zz)
    }
    const ZE = "skyblockForgeView",
      RE = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class KE extends pz {
      constructor(zz, uz, bz, Ez, nz) {
        super(zz, bz, Ez), this.translate = uz, this.requestForge = nz, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (zz, uz) => {
          var bz, Ez;
          null !== this.forging || (null !== (bz = this.owned[(0, kb.m)(uz, zz)]) && void 0 !== bz ? bz : 0) <= 0 || (this.selected[zz] = this.selected[zz] === uz ? null : uz, this.status = null, null === (Ez = this.onPartSelected) || void 0 === Ez || Ez.call(this), this.emit())
        }, this.forge = zz => {
          var uz, bz;
          const Ez = this.selectedParts();
          if (null === Ez || this.isPending() || !this.open) return;
          const nz = (0, kb.k)(Ez);
          if (null === nz || nz.coalCost > this.coal) return;
          const iz = this.preview(nz),
            lz = null !== (uz = null === (bz = this.onForgeStarted) || void 0 === bz ? void 0 : bz.call(this, iz.tier, iz.named, zz)) && void 0 !== uz ? uz : () => {};
          if (this.dropArrival(), zz) {
            const zz = {
              id: ++this.forgeId,
              preview: iz,
              timers: [],
              stopSounds: lz,
              landed: !1,
              reply: null
            };
            zz.timers.push(setTimeout((() => {
              zz.landed = !0, null !== zz.reply && (this.apply(zz.reply), zz.reply = null, this.emit())
            }), zE), setTimeout((() => {
              this.finishForge(zz)
            }), uE)), this.forging = zz
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Ez)
        }, this.snapshot = this.buildSnapshot()
      }
      WZ(zz) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === zz.forgeMessageKind) return this.dropForge(), this.apply(zz), this.status = null, void this.show();
        const uz = this.forging;
        if (null !== uz && null !== zz.forgeRefusalKey) this.dropForge();
        else if (null !== uz && !uz.landed) return void(uz.reply = zz);
        this.apply(zz), this.emit()
      }
      apply(zz) {
        if (this.owned = zz.forgeOwnedParts, this.coal = zz.forgeCoalOwned, this.keepSelectionOwned("open" === zz.forgeMessageKind), null !== zz.forgeForgedSwordId) {
          var uz;
          const bz = (0, kb.k)(zz.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (uz = null === bz || void 0 === bz ? void 0 : bz.displayName) && void 0 !== uz ? uz : ""
            }
          }
        } else null !== zz.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: zz.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(zz) {
        this.translate = zz, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(zz) {
        var uz;
        this.forging = null;
        const bz = this.selectedParts(),
          Ez = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: zz.id,
          sameSword: null !== bz && (null === (uz = (0, kb.k)(bz)) || void 0 === uz ? void 0 : uz.displayName) === zz.preview.name,
          timer: Ez
        }, this.emit()
      }
      dropForge() {
        const zz = this.forging;
        if (null !== zz) {
          this.forging = null;
          for (const uz of zz.timers) clearTimeout(uz);
          zz.stopSounds(), null !== zz.reply && this.apply(zz.reply)
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
        var zz, uz, bz;
        const Ez = this.selectedParts(),
          nz = null === Ez ? null : (0, kb.k)(Ez),
          iz = null !== (zz = null === (uz = this.forging) || void 0 === uz ? void 0 : uz.preview) && void 0 !== zz ? zz : null === nz ? null : this.preview(nz);
        return {
          enabled: this.received,
          open: this.open,
          slots: kb.i.map((zz => ({
            kind: zz,
            label: this.translate(RE[zz]),
            parts: this.partsFor(zz)
          }))),
          coalOwned: this.coal,
          preview: iz,
          unformedSword: kb.h[null !== (bz = this.selected.Blade) && void 0 !== bz ? bz : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((zz => zz > 0)),
          canForge: null !== iz && !iz.coalShort && !this.isPending(),
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
      preview(zz) {
        return {
          name: zz.displayName,
          lore: zz.lore,
          baseSword: zz.baseSword,
          enchantmentTier: zz.enchantmentTier,
          tier: Number(zz.enchantmentTier.slice(-1)),
          named: zz.named,
          stats: this.stats(zz),
          effects: zz.effects,
          coalCost: zz.coalCost,
          coalShort: null === this.forging && zz.coalCost > this.coal
        }
      }
      partsFor(zz) {
        const uz = [];
        for (const Ez of kb.g) {
          var bz;
          const nz = (0, kb.m)(Ez, zz),
            iz = null !== (bz = this.owned[nz]) && void 0 !== bz ? bz : 0;
          iz > 0 && uz.push({
            material: Ez,
            itemName: nz,
            owned: iz,
            selected: this.selected[zz] === Ez,
            placeholder: !1
          })
        }
        if (0 === uz.length) {
          const bz = kb.g[0];
          uz.push({
            material: bz,
            itemName: (0, kb.m)(bz, zz),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return uz
      }
      stats(zz) {
        const uz = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${zz.powerMultiplier.toFixed(2)}`,
          better: zz.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${zz.damageMultiplier.toFixed(2)}`,
          better: zz.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/zz.cooldownMultiplier).toFixed(2)}`,
          better: zz.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${zz.knockbackMultiplier.toFixed(2)}`,
          better: zz.knockbackMultiplier > 1
        }];
        return zz.reachBonus > 0 && uz.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${zz.reachBonus.toFixed(1)}`,
          better: !0
        }), zz.damageReduction > 0 && uz.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*zz.damageReduction)}%`,
          better: !0
        }), uz
      }
      selectedParts() {
        const {
          Blade: zz,
          Guard: uz,
          Handle: bz
        } = this.selected;
        return null === zz || null === uz || null === bz ? null : {
          blade: zz,
          guard: uz,
          handle: bz
        }
      }
      keepSelectionOwned(zz) {
        for (const bz of kb.i) {
          var uz;
          const Ez = this.selected[bz];
          if (null !== Ez && (null !== (uz = this.owned[(0, kb.m)(Ez, bz)]) && void 0 !== uz ? uz : 0) > 0) continue;
          if (!zz) {
            this.selected[bz] = null;
            continue
          }
          const nz = [...kb.g].reverse().find((zz => {
            var uz;
            return (null !== (uz = this.owned[(0, kb.m)(zz, bz)]) && void 0 !== uz ? uz : 0) > 0
          }));
          this.selected[bz] = null !== nz && void 0 !== nz ? nz : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const wE = "skyblockSmugglerView",
      XE = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class fE extends pz {
      constructor(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(zz, bz, Ez), this.translate = uz, this.requestBuy = nz, this.now = iz, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = zz => zz, this.onBought = null, this.buy = zz => {
          const uz = this.deals[zz];
          void 0 !== uz && !this.isPending() && this.open && !this.soldOut.has(zz) && this.canAfford(uz) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, zz))
        }, this.snapshot = this.buildSnapshot()
      }
      WZ(zz) {
        if (this.received = !0, this.day = zz.smugglerDay, this.deals = zz.smugglerDeals, this.rivets = zz.smugglerRivetsOwned, this.crests = zz.smugglerCrestsOwned, this.soldOut = new Set(zz.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + zz.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === zz.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = zz.smugglerBoughtSlot, null !== zz.smugglerBoughtSlot) {
          var uz, bz;
          const Ez = this.deals[zz.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Ez ? "" : this.dealName(Ez),
              amount: String(null !== (uz = null === Ez || void 0 === Ez ? void 0 : Ez.smugglerDealAmount) && void 0 !== uz ? uz : 0)
            }
          }, this.boughtCount++, null === (bz = this.onBought) || void 0 === bz || bz.call(this)
        } else null !== zz.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: zz.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(zz, uz, bz) {
        this.translate = zz, void 0 !== bz && (this.itemName = bz), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(zz) {
        if (null !== zz.smugglerDealUniqueName) return zz.smugglerDealUniqueName;
        const uz = XE[zz.smugglerDealItem];
        return void 0 === uz ? this.itemName(zz.smugglerDealItem) : this.translate(uz)
      }
      canAfford(zz) {
        return zz.smugglerDealRivets <= this.rivets && zz.smugglerDealCrests <= this.crests
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
        const zz = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return zz <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : zz < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(zz)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(zz / 60)),
          minutes: String(zz % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((zz, uz) => ({
            slot: uz,
            itemName: zz.smugglerDealItem,
            displayName: this.dealName(zz),
            enchantmentTier: zz.smugglerDealEnchantmentTier,
            amount: zz.smugglerDealAmount,
            rivets: zz.smugglerDealRivets,
            crests: zz.smugglerDealCrests,
            affordable: this.canAfford(zz),
            soldOut: this.soldOut.has(uz),
            justBought: this.boughtSlot === uz
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
    const sE = "skyblockPassageView",
      rE = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function oE(zz, uz) {
      return zz(rE[uz])
    }

    function NE(zz, uz, bz, Ez) {
      const nz = Math.ceil((bz - Ez) / 864e5),
        iz = oE(zz, uz);
      return nz > 1 ? zz("skyblockGame:passageNextDays", {
        phase: iz,
        days: String(nz)
      }) : zz("skyblockGame:passageNextSoon", {
        phase: iz
      })
    }
    class vE extends pz {
      constructor(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(zz, bz, Ez), this.translate = uz, this.now = nz, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = zz => zz, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      WZ(zz) {
        this.message = zz, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(zz, uz, bz) {
        this.translate = zz, void 0 !== bz && (this.itemName = bz), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(zz) {
        return {
          itemName: zz.passageFish,
          displayName: this.itemName(zz.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(zz.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const zz = this.message;
        return null === zz ? {
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
          phase: zz.passagePhase,
          phaseName: oE(this.translate, zz.passagePhase),
          visitors: zz.passageVisitors.map((zz => this.describe(zz))),
          resting: this.describe(zz.passageResting),
          nextPhase: zz.passageNextPhase,
          next: NE(this.translate, zz.passageNextPhase, zz.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var xE = bz(37929);
    const JE = "skyblockKeepersChairView";
    class AE extends pz {
      constructor(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new xE.e;
        super(zz, bz, Ez), this.translate = uz, this.requestAim = nz, this.now = iz, this.pacer = lz, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = zz => zz, this.aim = zz => {
          !this.awaitingReply && this.open && this.atChair && zz !== this.favoured && (null === zz || this.islands.some((uz => uz.keepersChairIslandId === zz && uz.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== zz && void 0 !== zz ? zz : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = lz.subscribe((() => {
          this.emit()
        }))
      }
      WZ(zz) {
        var uz, bz;
        this.received = !0;
        const Ez = this.favoured,
          nz = this.atChair;
        var iz;
        return this.islands = zz.keepersChairIslands, this.favoured = zz.keepersChairFavoured, this.passage = null !== (uz = zz.keepersChairPassage) && void 0 !== uz ? uz : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (bz = zz.keepersChairAtChair) || void 0 === bz || bz, "place" === zz.keepersChairMessageKind ? (!nz && this.atChair && "refused" === (null === (iz = this.status) || void 0 === iz ? void 0 : iz.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === zz.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== zz.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: zz.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Ez && (this.status = null === this.favoured ? {
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
      receivePassage(zz) {
        this.received && (this.passage = zz, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(zz, uz, bz) {
        this.translate = zz, void 0 !== bz && (this.itemName = bz), this.emit()
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
      islandName(zz) {
        const uz = this.islands.find((uz => uz.keepersChairIslandId === zz));
        return void 0 === uz ? zz : this.translate(uz.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const zz = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          uz = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((zz => {
            const uz = zz.keepersChairFeaturedFish;
            return {
              id: zz.keepersChairIslandId,
              name: this.translate(zz.keepersChairIslandNameKey),
              relit: zz.keepersChairIslandRelit,
              featuredFish: null === uz ? null : {
                itemName: uz,
                displayName: this.itemName(uz)
              },
              favoured: zz.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === zz ? null : {
            tone: zz.tone,
            text: this.translate(zz.key, null === zz.island ? void 0 : {
              island: this.islandName(zz.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === uz ? null : {
            phase: uz.keepersChairPassagePhase,
            phaseName: oE(this.translate, uz.keepersChairPassagePhase),
            nextPhase: uz.keepersChairPassageNextPhase,
            next: NE(this.translate, uz.keepersChairPassageNextPhase, uz.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const TE = "skyblockReachLogView",
      LE = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      PE = "Caught Fish",
      GE = [1, 2, 4];

    function aE(zz, uz) {
      return zz.map((zz => ({
        ...zz,
        reachLogPageFish: zz.reachLogPageFish.map((zz => ({
          ...zz,
          reachLogFishFresh: uz(zz)
        })))
      })))
    }
    class VE extends pz {
      constructor(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new xE.e;
        super(zz, bz, Ez), this.translate = uz, this.requestOpen = nz, this.pacer = iz, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = zz => zz, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = zz => {
          this.pages.some((uz => uz.reachLogIslandId === zz)) && (this.selected = zz, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = iz.subscribe((() => {
          this.emit()
        }))
      }
      WZ(zz) {
        if (this.received = !0, "status" === zz.reachLogMessageKind) return !0 === zz.reachLogNews && this.markNews(), this.serverFresh = zz.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const uz = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== zz.reachLogMessageKind)
          if (this.pageViews = null, this.pages = aE(zz.reachLogPages, (zz => zz.reachLogFishFresh || this.heldFresh.has(zz.reachLogFishItem))), this.letGoShown = zz.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, uz) this.showPages();
          else {
            for (const zz of this.pages)
              for (const uz of zz.reachLogPageFish) uz.reachLogFishFresh && this.heldFresh.add(uz.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(zz, uz, bz) {
        this.translate = zz, this.pageViews = null, void 0 !== bz && (this.itemName = bz), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = aE(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var zz, uz, bz, Ez;
        const nz = this.pages.find((zz => zz.reachLogPageFish.some((zz => zz.reachLogFishFresh))));
        if (void 0 !== nz) return nz.reachLogIslandId;
        if (null !== this.selected && this.pages.some((zz => zz.reachLogIslandId === this.selected))) return this.selected;
        return null !== (zz = null !== (uz = null === (bz = this.pages.filter((zz => zz.reachLogIslandAwake)).at(-1)) || void 0 === bz ? void 0 : bz.reachLogIslandId) && void 0 !== uz ? uz : null === (Ez = this.pages[0]) || void 0 === Ez ? void 0 : Ez.reachLogIslandId) && void 0 !== zz ? zz : null
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
        return this.pages.map((zz => {
          var uz;
          return {
            id: zz.reachLogIslandId,
            name: this.translate(zz.reachLogIslandNameKey),
            awake: zz.reachLogIslandAwake,
            gold: zz.reachLogPageGold,
            caught: zz.reachLogPageFish.filter((zz => zz.reachLogFishCaught && !zz.reachLogFishVisitor)).length,
            total: zz.reachLogPageFish.filter((zz => !zz.reachLogFishVisitor)).length,
            fish: zz.reachLogPageFish.map((zz => {
              const uz = zz.reachLogFishBestKg;
              return {
                itemName: zz.reachLogFishItem,
                name: zz.reachLogFishCaught ? this.itemName(zz.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: zz.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / zz.reachLogFishChance))
                }),
                best: zz.reachLogFishCaught ? null === uz ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: uz.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: zz.reachLogFishMarks,
                ribbons: GE.map((uz => 0 !== (zz.reachLogFishRibbons & uz))),
                glimmer: 0 !== (8 & zz.reachLogFishRibbons),
                halo: 0 !== (32 & zz.reachLogFishRibbons),
                fresh: zz.reachLogFishFresh,
                visitor: zz.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (uz = zz.reachLogPageReturner) && void 0 !== uz ? uz : null)
          }
        }))
      }
      buildReturner(zz) {
        return null === zz ? null : {
          itemName: zz.reachLogReturnerFishItem,
          line: this.translate(zz.reachLogReturnerLineKey, {
            name: this.translate(zz.reachLogReturnerNameKey),
            trinket: this.translate(zz.reachLogReturnerTrinketKey)
          }),
          back: zz.reachLogReturnerBack
        }
      }
      receivePassagePhase(zz) {
        null !== this.passagePhase && this.passagePhase !== zz && (this.pagesCurrent = !1), this.passagePhase = zz
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const mE = "skyblockLampLightView";
    class qE {
      constructor(zz, uz, bz, Ez) {
        this.sK = zz, this.translate = uz, this.requestCommand = bz, this.pacer = Ez, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.SZ = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = zz => {
          zz ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = zz => {
          this.send(`buy ${zz}`)
        }, this.socket = zz => {
          this.send(`socket ${null!==zz&&void 0!==zz?zz:mz}`)
        }, this.wearTint = zz => {
          this.send(`tint ${null!==zz&&void 0!==zz?zz:mz}`)
        }, this.setSituation = zz => {
          this.situation = zz, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Ez.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Ez.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      WZ(zz) {
        if (this.message = zz, null !== zz.lampLightShop && (this.shop = zz.lampLightShop), "open" === zz.lampLightKind && (this.refusalKey = null), "reply" === zz.lampLightKind) {
          var uz;
          const nz = null !== (uz = zz.lampLightReplyTag) && void 0 !== uz ? uz : null,
            iz = null !== nz && nz === this.offTag;
          var bz, Ez;
          if (iz ? this.settleOff() : null !== nz && nz !== this.awaitingTag || this.settleReply(), this.refusalKey = zz.lampLightRefusalKey, null !== zz.lampLightBought && !iz) this.sparkle = {
            id: zz.lampLightBought,
            count: (null !== (bz = null === (Ez = this.sparkle) || void 0 === Ez ? void 0 : Ez.count) && void 0 !== bz ? bz : 0) + 1
          }
        }
        zz.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === zz.lampLightKind && (this.lastGained = zz.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(zz) {
        zz !== this.atChair && (this.atChair = zz, zz && (this.refusalKey = null), this.emit())
      }
      setTranslator(zz, uz) {
        this.translate = zz, this.locale = null !== uz && void 0 !== uz ? uz : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.SZ = !0
      }
      send(zz) {
        var uz;
        if (null !== this.awaitingTag || "ready" !== (null === (uz = this.message) || void 0 === uz ? void 0 : uz.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const bz = this.nextTag();
        this.awaitingTag = bz, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${zz} ${bz}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const zz = this.nextTag();
        this.offTag = zz, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${zz}`)
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
        this.SZ || (this.snapshot = this.buildSnapshot(), this.sK(this.snapshot))
      }
      formatLight(zz) {
        return Math.floor(zz).toLocaleString(this.locale)
      }
      formatPercent(zz) {
        const uz = 100 * zz;
        return uz >= 10 ? Math.round(uz).toLocaleString(this.locale) : uz.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(zz, uz) {
        if ("bite" === zz) return this.translate("skyblockGame:lampLightBite", {
          seconds: (uz.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === zz) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(uz.lampLightRareChance)
        });
        if ("notice" === zz) return null === uz.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(uz.lampLightNoticeChance)
        });
        const bz = "meter" === zz ? uz.lampLightMeterCatches : uz.lampLightBloomCatches;
        return null === bz ? null : this.translate("meter" === zz ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(bz))
        })
      }
      oddsLines(zz, uz) {
        const bz = (zz, uz) => {
            var bz;
            return null !== (bz = {
              bite: uz.lampLightBiteMs,
              rare: uz.lampLightRareChance,
              meter: uz.lampLightMeterCatches,
              bloom: uz.lampLightBloomCatches,
              notice: uz.lampLightNoticeChance
            } [zz]) && void 0 !== bz ? bz : 0
          },
          Ez = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          nz = [];
        for (const iz of ["bite", "rare", "meter", "bloom", "notice"]) {
          const lz = this.formatOdds(iz, zz),
            Mz = this.formatOdds(iz, uz);
          if (null === lz || null === Mz || "bite" !== iz && "rare" !== iz && lz === Mz) continue;
          const tz = bz(iz, uz) - bz(iz, zz),
            Hz = Ez[iz] ? tz < 0 : tz > 0;
          nz.push({
            label: iz,
            before: lz,
            after: Mz,
            tone: lz === Mz ? "same" : Hz ? "better" : "worse"
          })
        }
        return nz
      }
      charmView(zz, uz, bz) {
        const Ez = zz.lampLightCharmId.charAt(0).toUpperCase() + zz.lampLightCharmId.slice(1),
          nz = "bloom" === this.situation;
        return {
          id: zz.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Ez}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Ez}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(zz.lampLightCharmCost)
          }),
          owned: zz.lampLightCharmOwned,
          affordable: bz >= zz.lampLightCharmCost,
          socketed: uz.lampLightSocketed === zz.lampLightCharmId,
          lines: this.oddsLines(nz ? uz.lampLightBareBloom : uz.lampLightBareOpen, nz ? zz.lampLightCharmBloom : zz.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var zz, uz, bz, Ez;
        const nz = this.message,
          iz = "ready" === (null === nz || void 0 === nz ? void 0 : nz.lampLightStatus) ? this.shop : null,
          lz = null !== (zz = null === nz || void 0 === nz ? void 0 : nz.lampLightBalance) && void 0 !== zz ? zz : 0,
          Mz = this.atChair,
          tz = "loading" === (null === nz || void 0 === nz ? void 0 : nz.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === nz || void 0 === nz ? void 0 : nz.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Hz = "ready" !== (null === nz || void 0 === nz ? void 0 : nz.lampLightStatus) || Mz ? null !== (uz = this.refusalKey) && void 0 !== uz ? uz : tz : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== nz && "locked" !== nz.lampLightStatus,
          status: null !== (bz = null === nz || void 0 === nz ? void 0 : nz.lampLightStatus) && void 0 !== bz ? bz : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(lz)
          }),
          releasing: null !== (Ez = null === nz || void 0 === nz ? void 0 : nz.lampLightReleasing) && void 0 !== Ez && Ez,
          gained: null === nz || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === nz || void 0 === nz ? void 0 : nz.lampLightStatus) && Mz && !this.isPending(),
          situation: this.situation,
          shop: null === iz ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: iz.lampLightOddsRod,
              island: this.translate(iz.lampLightIslandNameKey)
            }),
            heldRod: null !== iz.lampLightHeldRod,
            charms: iz.lampLightCharms.map((zz => this.charmView(zz, iz, lz))),
            tints: iz.lampLightTints.map((zz => {
              const uz = zz.lampLightTintId,
                [bz, Ez, nz] = zz.lampLightTintColour;
              return {
                id: uz,
                name: this.translate(`skyblockGame:lampLightTint${uz.charAt(0).toUpperCase()}${uz.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(zz.lampLightTintCost)
                }),
                owned: zz.lampLightTintOwned,
                affordable: lz >= zz.lampLightTintCost,
                wearing: iz.lampLightTint === uz,
                colour: `rgb(${bz}, ${Ez}, ${nz})`
              }
            })),
            wearingIslandColours: null === iz.lampLightTint
          },
          notice: null === Hz ? null : this.translate(Hz),
          sparkle: this.sparkle
        }
      }
    }
    const hE = "skyblockMagmawardView";
    class UE {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sK = zz, this.now = uz, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = yz.map((() => 0)), this.wornAt = yz.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      WZ(zz) {
        var uz, bz;
        const Ez = yz.map(((uz, bz) => !0 === zz.magmawardPiecesWorn[bz]));
        if (!Ez.includes(!0)) return this.snapshot = null, void this.sK(null);
        const nz = this.now(),
          iz = this.snapshot;
        null === iz && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const lz = zz.magmawardFuelCarried,
          Mz = !Ez.includes(!1);
        let tz = null !== (uz = null === iz || void 0 === iz ? void 0 : iz.pulse) && void 0 !== uz ? uz : null,
          Hz = null !== (bz = null === iz || void 0 === iz ? void 0 : iz.flare) && void 0 !== bz ? bz : null;
        zz.magmawardFuelBurned ? (tz = "burn", Hz = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = nz, this.flareAt = nz) : null !== iz && lz > iz.fuel && (tz = "gain", this.pulseToken++, this.pulseAt = nz), Mz && null !== iz && !iz.fullSet && (Hz = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = nz, this.setLitAt = nz);
        const Oz = yz.map(((zz, uz) => (Ez[uz] && null !== iz && !iz.pieces[uz].worn && (this.wornTokens[uz]++, this.wornAt[uz] = nz), {
          itemName: zz,
          worn: Ez[uz],
          wornToken: this.wornTokens[uz],
          justWorn: Ez[uz] && this.isPlaying(this.wornAt[uz], nz)
        })));
        this.snapshot = {
          pieces: Oz,
          wornCount: Ez.filter(Boolean).length,
          fullSet: Mz,
          fuel: lz,
          fuelState: lz <= 0 ? "empty" : lz <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, nz) ? tz : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, nz) ? Hz : null,
          flareToken: this.flareToken,
          setLit: Mz && this.isPlaying(this.setLitAt, nz),
          setLitToken: this.setLitToken
        }, this.sK(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.sK(null)
      }
      isPlaying(zz, uz) {
        return uz - zz < 1200
      }
    }
    const cE = "skyblockGlowtideView";
    class gE {
      constructor(zz) {
        this.sK = zz, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = zz => {
          this.arrow = zz, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      WZ(zz) {
        this.bloom = zz.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.sK(null))
      }
      afterRender(zz, uz) {
        const bz = this.bloom;
        if (null === bz || null === zz) return;
        const Ez = bz.glowtideBloomX - zz[0],
          iz = bz.glowtideBloomZ - zz[2],
          lz = Math.hypot(Ez, iz),
          Mz = this.snapshot,
          tz = null !== Mz && void 0 !== Mz && Mz.inRange ? 1 : 0,
          Hz = lz <= 12.5 + tz && zz[1] - bz.glowtideBloomY <= 10 + tz;
        !Hz || null !== Mz && void 0 !== Mz && Mz.inRange || this.inRangeToken++;
        const Oz = {
          colour: bz.glowtideBloomColour,
          inRange: Hz,
          distance: Math.round(lz),
          inRangeToken: this.inRangeToken
        };
        (null === Mz || Oz.colour !== Mz.colour || Oz.inRange !== Mz.inRange || !Hz && Oz.distance !== Mz.distance) && (this.snapshot = Oz, this.sK(Oz));
        const pz = nz.d.computeShortestRotation(uz, (0, nz.Db)([Ez, 0, iz]));
        null === this.arrow || Math.abs(pz - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${pz}rad)`, this.arrowTurn = pz)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.sK(null)
      }
    }
    const SE = "skyblockGlowMeterView";
    class yE {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.sK = zz, this.now = uz, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      WZ(zz) {
        const uz = this.now(),
          {
            glowMeterFill: bz,
            glowMeterCapacity: Ez
          } = zz,
          nz = bz >= Ez,
          iz = this.snapshot;
        null !== iz && (nz && !iz.full && (this.fullToken++, this.fullAt = uz), iz.full && !nz ? (this.burstToken++, this.burstAt = uz) : bz > iz.fill && (this.gainToken++, this.gainAt = uz)), this.snapshot = {
          fill: bz,
          Bp: Ez,
          ratio: Math.min(1, Math.max(0, bz / Ez)),
          full: nz,
          rares: zz.glowMeterRares,
          ready: nz && this.isPlaying(this.fullAt, uz),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, uz),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, uz),
          gainToken: this.gainToken
        }, this.sK(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.sK(null)
      }
      isPlaying(zz, uz) {
        return uz - zz < 2e3
      }
    }
    const DE = "skyblockHushWaitView";
    class QE {
      constructor(zz) {
        this.sK = zz, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      WZ(zz) {
        let {
          hushWaitMs: uz,
          hushWaitTotalMs: bz,
          hushWaitLines: Ez
        } = zz;
        if (this.clearTimers(), this.token++, 0 === Ez.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (uz <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Ez[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const nz = Math.max(null !== bz && void 0 !== bz ? bz : uz, uz),
          iz = nz - uz,
          lz = zz => nz * zz / Ez.length,
          Mz = zz => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: nz,
              elapsedMs: iz,
              line: Ez[zz],
              lineIndex: zz
            })
          };
        let tz = 0;
        for (; tz + 1 < Ez.length && lz(tz + 1) <= iz;) tz++;
        Mz(tz);
        for (let Hz = tz + 1; Hz < Ez.length; Hz++) this.later(lz(Hz) - iz, (() => {
          Mz(Hz)
        }));
        this.later(uz, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(zz) {
        this.snapshot = zz, this.sK(zz)
      }
      later(zz, uz) {
        this.timers.push(setTimeout(uz, zz))
      }
      clearTimers() {
        for (const zz of this.timers) clearTimeout(zz);
        this.timers = []
      }
    }
    const WE = "skyblockTideChartsView",
      eE = 36e5,
      jE = 864e5;

    function IE(zz, uz, bz) {
      const [Ez, nz, iz, lz] = zz.tideChartArea, Mz = Math.floor(uz), tz = Math.floor(bz);
      return Mz >= Ez && Mz <= iz && tz >= nz && tz <= lz
    }

    function BE(zz, uz, bz) {
      const [Ez, nz, iz, lz] = zz.tideChartWater;
      return function(zz, uz, bz, Ez, nz, iz) {
        const lz = 4 - Dz(Math.floor(nz) - (zz - bz), bz);
        return 5 * Dz(Math.floor(iz) - (uz - Ez), Ez) + lz
      }(Ez, nz, iz, lz, uz, bz)
    }

    function CE(zz, uz, bz) {
      const Ez = zz.tideCharts;
      for (let nz = 0; nz < Ez.length; nz++)
        if (IE(Ez[nz], uz, bz)) return Ez[nz];
      return null
    }

    function YE(zz, uz, bz) {
      const Ez = Math.max(0, uz - bz);
      return Ez > jE ? zz("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Ez / jE))
      }) : Ez > eE ? zz("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Ez / eE))
      }) : zz("skyblockGame:tideChartsTurnSoon")
    }
    class kE extends pz {
      constructor(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(zz, bz, Ez), this.translate = uz, this.now = nz, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.NF = zz => {
          this.picked = zz, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      WZ(zz) {
        const uz = this.message;
        if (null !== uz)
          for (const Ez of zz.tideCharts) {
            var bz;
            const zz = uz.tideCharts.find((zz => zz.tideChartIsland === Ez.tideChartIsland)),
              nz = Ez.tideChartLit & ~(null !== (bz = null === zz || void 0 === zz ? void 0 : zz.tideChartLit) && void 0 !== bz ? bz : 0);
            void 0 !== zz && 0 !== nz && (this.pulse = {
              island: Ez.tideChartIsland,
              cells: nz,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = zz, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(zz, uz) {
        var bz;
        const Ez = null === this.message || Number.isNaN(zz) ? null : CE(this.message, zz, uz),
          nz = null !== (bz = null === Ez || void 0 === Ez ? void 0 : Ez.tideChartIsland) && void 0 !== bz ? bz : null,
          iz = null === Ez ? -1 : function(zz, uz, bz) {
            const [Ez, nz, iz, lz] = zz.tideChartWater;
            return function(zz, uz, bz, Ez, nz, iz, lz) {
              return ((nz - zz) / (bz + lz)) ** 2 + ((iz - uz) / (Ez + lz)) ** 2 <= 1
            }(Ez, nz, iz, lz, uz, bz, 2) ? BE(zz, uz, bz) : -1
          }(Ez, zz, uz);
        return (nz !== this.hereIsland || iz !== this.hereCell) && (this.hereIsland = nz, this.hereCell = iz, null !== nz && (this.lastIsland = nz), !0)
      }
      afterRender(zz) {
        if (null === this.message) return;
        this.lastX = null === zz ? Number.NaN : zz[0], this.lastZ = null === zz ? Number.NaN : zz[2];
        const uz = this.locate(this.lastX, this.lastZ),
          bz = this.expirePulses();
        (uz || bz || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const zz = this.now();
        return !(!this.open || zz - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = zz, YE(this.translate, this.message.tideChartTurnsInMs, zz - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(zz, uz) {
        const bz = null === this.message ? null : CE(this.message, zz, uz);
        if (null === bz) return;
        const Ez = BE(bz, zz, uz);
        0 === (bz.tideChartPreBlank & 1 << Ez) && (this.cast = {
          island: bz.tideChartIsland,
          cell: Ez,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const zz = this.now();
        let uz = !1;
        return 0 !== this.pulse.cells && zz - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, uz = !0), null !== this.cast && zz - this.cast.atMs >= 1500 && (this.cast = null, uz = !0), uz
      }
      setTranslator(zz) {
        this.translate = zz, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(zz, uz) {
        var bz;
        return null !== (bz = zz.tideCharts.find((zz => zz.tideChartIsland === uz))) && void 0 !== bz ? bz : null
      }
      describe(zz) {
        var uz, bz, Ez;
        const nz = zz.tideChartIsland,
          iz = [];
        for (let Fz = 0; Fz < 25; Fz++) {
          const uz = 1 << Fz;
          0 !== (zz.tideChartLit & uz) ? iz.push("lit") : 0 !== (zz.tideChartClear & uz) ? iz.push("clear") : 0 !== (zz.tideChartPreBlank & uz) ? iz.push("shore") : iz.push("water")
        }
        const lz = function(zz) {
            let uz = 0;
            for (let bz = zz >>> 0; 0 !== bz; bz &= bz - 1) uz++;
            return uz
          }(zz.tideChartLit),
          Mz = zz.tideChartInkCount,
          tz = this.translate(zz.tideChartIslandNameKey),
          Hz = this.translate("skyblockGame:tideChartsLit", {
            lit: String(lz),
            ink: String(Mz)
          }),
          Oz = null === zz.tideChartPictureNameKey ? null : this.translate(zz.tideChartPictureNameKey),
          pz = this.hereIsland === nz && -1 !== this.hereCell ? this.hereCell : null,
          dz = [`${tz}: ${Hz}.`];
        if (null !== Oz && dz.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Oz
          })), null !== pz) {
          const zz = Math.floor(pz / 5) + 1,
            uz = pz % 5 + 1;
          dz.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(zz),
            column: String(uz)
          }))
        }
        return {
          island: nz,
          islandName: tz,
          cells: iz,
          hereCell: pz,
          lit: lz,
          ink: Mz,
          litText: Hz,
          pictureName: Oz,
          gridLabel: dz.join(" "),
          pulseCells: this.pulse.island === nz ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (uz = this.cast) || void 0 === uz ? void 0 : uz.island) === nz ? this.cast.cell : null,
          castToken: null !== (bz = null === (Ez = this.cast) || void 0 === Ez ? void 0 : Ez.token) && void 0 !== bz ? bz : 0
        }
      }
      buildSnapshot() {
        var zz, uz, bz;
        const Ez = this.message;
        if (null === Ez || 0 === Ez.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const nz = this.findChart(Ez, this.hereIsland),
          iz = null !== (zz = null !== (uz = null !== (bz = this.findChart(Ez, this.open ? this.picked : null)) && void 0 !== bz ? bz : nz) && void 0 !== uz ? uz : this.findChart(Ez, this.lastIsland)) && void 0 !== zz ? zz : Ez.tideCharts[0],
          lz = null === nz ? null : this.describe(nz);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: lz,
          card: iz === nz ? lz : this.describe(iz),
          turnsText: YE(this.translate, Ez.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Ez.tideChartBookCount)
          }),
          tabs: Ez.tideCharts.map((zz => ({
            island: zz.tideChartIsland,
            name: this.translate(zz.tideChartIslandNameKey),
            selected: zz.tideChartIsland === iz.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const zn = "skyblockRegularsView",
      un = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      bn = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function En(zz, uz) {
      return "given" === zz ? uz.given : "owed" === zz ? uz.owed : uz.goal
    }
    class nn extends pz {
      constructor(zz, uz, bz, Ez) {
        super(zz, bz, Ez), this.translate = uz, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = zz => zz, this.openIsland = zz => {
          this.selected = zz, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = zz => {
          this.selected = zz, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      WZ(zz) {
        this.message = zz, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const zz = this.openedFromReachLog;
        return this.openedFromReachLog = !1, zz
      }
      setTranslator(zz, uz, bz) {
        this.translate = zz, void 0 !== bz && (this.itemName = bz), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(zz, uz, bz) {
        return {
          text: this.translate(En(zz, uz), bz),
          given: "given" === zz
        }
      }
      describeRegular(zz, uz) {
        const bz = this.translate,
          Ez = null !== zz.regularKg,
          nz = zz.regularMeetings,
          iz = Ez ? 0 === nz ? bz("skyblockGame:regularsNotMet") : 1 === nz ? bz("skyblockGame:regularsMeetingsOne") : bz("skyblockGame:regularsMeetings", {
            count: nz
          }) : "";
        return {
          id: zz.regularId,
          name: bz(zz.regularNameKey),
          line: bz(zz.regularLineKey),
          itemName: zz.regularFishItem,
          fishName: this.itemName(zz.regularFishItem),
          tagged: Ez,
          size: null === zz.regularKg ? bz("skyblockGame:regularsNotTagged") : bz("skyblockGame:regularsSize", {
            kg: zz.regularKg.toFixed(1)
          }),
          meetings: iz,
          chance: bz("skyblockGame:regularsChance", {
            count: zz.regularOneInCasts
          }),
          resting: zz.regularRestingToday,
          gifts: [{
            text: bz("skyblockGame:regularsGiftFlare"),
            given: nz >= 3
          }, this.describeGift(zz.regularTintGift, un, {
            tint: bz(zz.regularTintNameKey)
          })],
          history: [...zz.regularHistory].reverse().map((zz => {
            const Ez = zz.regularMeetingKg.toFixed(1),
              nz = uz - zz.regularMeetingDay;
            return nz <= 0 ? bz("skyblockGame:regularsToday", {
              kg: Ez
            }) : bz("skyblockGame:regularsDaysAgo", {
              days: nz,
              kg: Ez
            })
          }))
        }
      }
      describeIsland(zz, uz) {
        return {
          id: zz.regularsIslandId,
          name: this.translate(zz.regularsIslandNameKey),
          charm: this.describeGift(zz.regularsCharmGift, bn, {
            charm: this.translate(zz.regularsCharmNameKey)
          }),
          regulars: zz.regularsList.map((zz => this.describeRegular(zz, uz)))
        }
      }
      buildSnapshot() {
        var zz, uz, bz, Ez;
        const nz = this.message;
        if (null === nz) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const iz = nz.regularsIslands.map((zz => this.describeIsland(zz, nz.regularsToday))),
          lz = null !== (zz = null !== (uz = null === (bz = iz.find((zz => zz.id === this.selected))) || void 0 === bz ? void 0 : bz.id) && void 0 !== uz ? uz : null === (Ez = iz[0]) || void 0 === Ez ? void 0 : Ez.id) && void 0 !== zz ? zz : "";
        return {
          enabled: !0,
          open: this.open,
          selected: lz,
          islands: iz
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Mn = "skyblockHiddenWatersView";
    class tn {
      constructor(zz) {
        this.sK = zz, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      WZ(zz) {
        this.snapshot = function(zz) {
          const [uz, bz] = zz.hiddenWatersMapSize, Ez = (zz, Ez) => ({
            left: 1 - zz / uz,
            top: Ez / bz
          }), nz = new Map;
          for (const [lz, Mz] of zz.hiddenWatersGlimpses) {
            var iz;
            const zz = null !== (iz = nz.get(lz)) && void 0 !== iz ? iz : [];
            zz.push(Mz), nz.set(lz, zz)
          }
          return {
            found: zz.hiddenWatersFound,
            total: zz.hiddenWatersTotal,
            aspect: bz / uz,
            pins: zz.hiddenWatersPins.map((zz => {
              let [uz, bz] = zz;
              return Ez(uz, bz)
            })),
            islands: zz.hiddenWatersIslands.map((zz => {
              let [nz, iz, lz, Mz] = zz;
              const {
                left: tz,
                top: Hz
              } = Ez(lz + 1, iz);
              return {
                left: tz,
                top: Hz,
                width: (lz + 1 - nz) / uz,
                height: (Mz + 1 - iz) / bz
              }
            })),
            glimpses: nz
          }
        }(zz), this.sK(this.snapshot)
      }
    }
    const Hn = "skyblockDialogueView";
    class On extends pz {
      constructor(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(zz, bz, Ez), this.translate = uz, this.requestDialogue = nz, this.now = iz, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = zz => {
          this.selection = {
            kind: "quest",
            questId: zz
          }, this.request(), this.show()
        }, this.selectCharacter = zz => {
          this.selection = {
            kind: "character",
            npcId: zz
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      WZ(zz) {
        this.received = !0, this.scripts = zz.questDialogueScripts, this.speakers = new Map(zz.questDialogueSpeakers.map((zz => [zz.dialogueSpeakerId, zz]))), this.emit()
      }
      setTranslator(zz) {
        this.translate = zz, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const zz = this.now();
        zz >= this.requestAvailableAt && (this.requestAvailableAt = zz + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var zz;
        const uz = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...uz,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const bz = this.selection;
        if ("quest" === bz.kind) {
          const zz = this.scripts.find((zz => zz.dialogueQuestId === bz.questId));
          return {
            ...uz,
            characters: [],
            questFocus: bz.questId,
            conversations: zz ? [this.conversation(zz)] : []
          }
        }
        const Ez = [];
        for (let iz = this.scripts.length - 1; iz >= 0; iz--) {
          const zz = this.scripts[iz].dialogueLines;
          for (let uz = zz.length - 1; uz >= 0; uz--) Ez.includes(zz[uz].dialogueSpeakerId) || Ez.push(zz[uz].dialogueSpeakerId)
        }
        const nz = null !== bz.npcId && Ez.includes(bz.npcId) ? bz.npcId : null !== (zz = Ez[0]) && void 0 !== zz ? zz : null;
        return {
          ...uz,
          characters: Ez.map((zz => {
            var uz, bz;
            return {
              id: zz,
              styling: null !== (uz = null === (bz = this.speakers.get(zz)) || void 0 === bz ? void 0 : bz.dialogueSpeakerStyling) && void 0 !== uz ? uz : zz,
              selected: zz === nz
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((zz => zz.dialogueLines.some((zz => zz.dialogueSpeakerId === nz)))).map((zz => this.conversation(zz))).reverse()
        }
      }
      conversation(zz) {
        let uz = null;
        return {
          questId: zz.dialogueQuestId,
          questName: this.translate(zz.dialogueQuestNameKey),
          completed: zz.dialogueQuestCompleted,
          lines: zz.dialogueLines.map(((zz, bz) => {
            var Ez;
            const nz = zz.dialogueSpeakerId === uz || null === (Ez = this.speakers.get(zz.dialogueSpeakerId)) || void 0 === Ez ? void 0 : Ez.dialogueSpeakerStyling;
            return uz = zz.dialogueSpeakerId, {
              key: bz,
              display: {
                line: {
                  translationKey: zz.dialogueLineKey,
                  params: this.params(zz.dialogueLineParams)
                },
                speakerName: nz,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(zz) {
        if (void 0 !== zz) return Object.fromEntries(Object.entries(zz).map((zz => {
          let [uz, bz] = zz;
          return [uz, "string" === typeof bz ? bz : this.translate(bz.translationKey)]
        })))
      }
    }
    var pn = bz(577),
      dn = bz(1256),
      Fn = bz(96);
    const Zn = "skyblockAutographsView";

    function Rn(zz) {
      const uz = pn.g[zz];
      return {
        label: uz.chatTag.map((zz => zz.str)).join(""),
        icon: uz.icon,
        colour: uz.mainRGB
      }
    }
    class Kn extends pz {
      constructor(zz) {
        let uz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = uz, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      WZ(zz) {
        this.signatures = zz.autographSignatures, zz.autographOpen ? this.show() : this.emit()
      }
      setTranslator(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = uz, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var zz;
        const uz = null !== (zz = this.signatures) && void 0 !== zz ? zz : [],
          bz = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Ez = [...uz].sort(((zz, uz) => Number(null !== uz.autographRank) - Number(null !== zz.autographRank) || uz.autographSignedAtMs - zz.autographSignedAtMs)).map((zz => ({
            key: `${zz.autographSignedAtMs}|${zz.autographSignerName}`,
            name: (0, dn.b)(zz.autographSignerName, !Fn.featureFlags.canSeeRealPlayerNames),
            rank: null === zz.autographRank ? null : Rn(zz.autographRank),
            signedOn: bz.format(zz.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Ez,
          total: Ez.length,
          rankTotal: Ez.filter((zz => null !== zz.rank)).length
        }
      }
    }
    const wn = "skyblockHudView",
      Xn = () => {},
      fn = {
        getItem: () => null,
        setItem: Xn,
        removeItem: Xn
      };
    class sn {
      constructor(zz) {
        let {
          translate: uz,
          translateWithIcons: bz,
          setMenuOpen: Ez = Xn,
          dismissMenu: nz = () => {
            Ez(!1)
          },
          publishSkills: iz = Xn,
          publishQuests: lz = Xn,
          publishQuestNotification: Mz = Xn,
          publishDungeons: tz = Xn,
          publishCollections: Hz = Xn,
          publishMap: Oz = Xn,
          publishHud: pz = Xn,
          publishPortalTransit: dz = Xn,
          publishDailyReward: Zz = Xn,
          publishMailbox: Rz = Xn,
          publishQuestGraph: Kz = Xn,
          publishForge: wz = Xn,
          publishSmuggler: Xz = Xn,
          publishKeepersChair: fz = Xn,
          publishReachLog: sz = Xn,
          publishLampLight: rz = Xn,
          publishMagmaward: oz = Xn,
          publishGlowtide: vz = Xn,
          publishGlowMeter: xz = Xn,
          publishHushWait: Jz = Xn,
          publishPassage: Az = Xn,
          publishTideCharts: Tz = Xn,
          publishRegulars: Lz = Xn,
          publishHiddenWaters: Pz = Xn,
          publishDialogue: Gz = Xn,
          publishAutographs: az = Xn,
          isLoadingScreenUp: Vz = () => !1,
          onDailyRewardCoinLanded: mz = Xn,
          onDailyRewardStarted: qz = Xn,
          onDailyRewardFinished: hz = Xn,
          onDailyRewardItemLanded: Uz = Xn,
          onMailboxStarted: cz = Xn,
          journeyStorage: gz = fn,
          requestTracking: Sz = Xn,
          requestTravel: yz = Xn,
          requestDungeonEnter: Dz = Xn,
          requestQuestJump: Qz = Xn,
          requestQuestArrive: Wz = Xn,
          requestForge: ez = Xn,
          requestSmuggle: jz = Xn,
          requestKeepersChairAim: Iz = Xn,
          requestReachLogOpen: Bz = Xn,
          requestLampLight: Cz = Xn,
          requestDialogue: Yz = Xn
        } = zz;
        this.navigation = void 0, this.map = void 0, this.compass = new Nz, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new xE.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = zz => zz, this.close = () => {
          for (const zz of this.panels) zz.close()
        }, this.setMenuOpen = Ez, this.publishHud = pz, this.portalTransit = new cb(dz, gz), this.magmaward = new UE(oz), this.glowtide = new gE(vz), this.glowMeter = new yE(xz), this.hushWait = new QE(Jz), this.dailyReward = new yb(Zz, (() => Vz() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (zz => {
          this.quests.setNotificationsHeld(zz)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), mz, qz, hz, Uz);
        const kz = zz => {
          this.panels.some((zz => zz.isOpen())) || (zz ? nz() : this.setMenuOpen(!1))
        };
        this.skills = new lb(iz, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), uz, void 0, void 0, kz), this.quests = new pb(lz, Sz, uz, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, kz, Mz), this.dungeons = new Zb(tz, uz, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, kz, Dz), this.collections = new qb(Hz, uz, (() => {
          this.beforePanelOpen(this.collections)
        }), kz), this.map = new Fz(Oz, yz, uz, (() => {
          this.beforePanelOpen(this.map)
        }), kz), this.questGraph = new Yb(Kz, uz, (() => {
          this.beforePanelOpen(this.questGraph)
        }), kz, Qz, Wz, gz), this.forge = new KE(wz, uz, (() => {
          this.beforePanelOpen(this.forge)
        }), kz, ez), this.smuggler = new fE(Xz, uz, (() => {
          this.beforePanelOpen(this.smuggler)
        }), kz, jz), this.lampLight = new qE(rz, uz, Cz, this.commandPacer), this.keepersChair = new AE(fz, uz, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (zz => {
          this.lampLight.onChairClosed(), kz(zz)
        }), Iz, Date.now, this.commandPacer), this.reachLog = new VE(sz, uz, (() => {
          this.beforePanelOpen(this.reachLog)
        }), kz, Bz, this.commandPacer), this.passage = new vE(Az, uz, (() => {
          this.beforePanelOpen(this.passage)
        }), kz), this.tideCharts = new kE(Tz, uz, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), kz), this.regulars = new nn(Lz, uz, (() => {
          this.beforePanelOpen(this.regulars)
        }), (zz => {
          this.regulars.takeReturnToReachLog() && !zz && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), kz(zz)
        })), this.hiddenWaters = new tn(Pz), this.dialogue = new On(Gz, uz, (() => {
          this.beforePanelOpen(this.dialogue)
        }), kz, Yz), this.autographs = new Kn(az, (() => {
          this.beforePanelOpen(this.autographs)
        }), kz), this.mailbox = new eb(Rz, (() => Vz() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), cz), this.quests.translateWithIcons = null !== bz && void 0 !== bz ? bz : null, this.skills.onLevelUp = zz => {
          this.quests.notify(zz)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new nb(this.map, this.quests, this.compass, uz)
      }
      getHudSnapshot() {
        const zz = this.hudSnapshot,
          uz = this.dailyReward.getHeldCoins();
        return null === zz || uz <= 0 || !("hudPurseCoins" in zz) ? zz : {
          ...zz,
          hudPurseCoins: Math.max(0, zz.hudPurseCoins - uz)
        }
      }
      receiveHud(zz) {
        this.hudSnapshot = zz, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(zz) {
        this.setMenuOpen(!0);
        const uz = zz === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = zz;
        for (const bz of this.panels) bz === zz || uz && bz === this.reachLog || bz.close();
        this.openingPanel = null
      }
      setTranslator(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uz => this.resolveItemName(uz, zz);
        this.quests.translateWithIcons = null !== bz && void 0 !== bz ? bz : null, this.navigation.setTranslator(zz, uz), this.lampLight.setTranslator(zz, uz), this.mailbox.setItemName(Ez);
        for (const nz of this.panels) nz.setTranslator(zz, uz, Ez)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const zz of this.panels) zz.dispose()
      }
    }
    var rn = bz(1038),
      Nn = bz.n(rn),
      vn = bz(20),
      xn = bz(36066),
      Jn = bz(3163),
      An = bz(1856),
      Tn = bz(1846),
      Ln = bz(9013),
      Pn = bz(1181),
      Gn = bz(1417),
      an = bz(1089);

    function Vn(zz) {
      let {
        controller: uz,
        minimap: bz,
        children: Ez
      } = zz;
      const iz = (0, Gn.h)(wn, uz.getHudSnapshot()),
        [lz, Mz] = (0, xz.useState)(uz.skills.getSnapshot().overallLevel);
      (0, Gn.g)(ib, (zz => {
        Mz(zz.overallLevel)
      }));
      const tz = (0, xz.useRef)(null);
      (0, Gn.g)(Sb, (zz => {
        ! function(zz, uz) {
          if (null === zz || "function" !== typeof zz.animate) return;
          const bz = uz ? 1.35 : 1.15;
          zz.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${bz})`
          }, {
            transform: "scale(1)"
          }], {
            duration: uz ? 320 : 160,
            easing: "ease-out"
          }), zz.classList.toggle("Receiving", !uz), uz && (zz.classList.remove("Shine"), zz.offsetWidth, zz.classList.add("Shine"))
        }(tz.current, zz)
      }));
      const {
        t: Hz
      } = (0, Pn.F)(), {
        isTouchScreen: Oz
      } = (0, vn.m)(["isTouchScreen"]), [pz, dz] = (0, xz.useState)(null);
      return (0, Jn.h)(pz, ".SkyblockRightHud"), null !== iz || bz ? (0, an.jsx)(xn.d, {
        placement: "topRight",
        children: (0, an.jsxs)("div", {
          className: Nn()("SkyblockRightHud", {
            TouchScreen: Oz
          }),
          children: [bz, null !== iz && (0, an.jsxs)("div", {
            ref: dz,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in iz ? (0, an.jsx)("div", {
              className: "SkyblockHudHelp",
              children: iz.hudHelpText
            }) : (0, an.jsxs)(an.Fragment, {
              children: [(0, an.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, an.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, an.jsx)("strong", {
                    style: {
                      color: nz.N.cyanUiText
                    },
                    children: Hz(iz.hudZoneNameKey)
                  }), null !== lz && (0, an.jsx)("span", {
                    style: {
                      color: nz.N.goldUiText
                    },
                    children: Hz("skyblockGame:level", {
                      level: (0, Ln.d)(lz)
                    })
                  })]
                }), (0, an.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: tz,
                  children: [(0, an.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, an.jsx)(An.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Ln.d)(iz.hudPurseCoins)]
                })]
              }), iz.hudClockText.length > 0 && (0, an.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, an.jsx)(Tn.b, {
                  text: iz.hudClockText
                })
              })]
            }), Ez, "hudZoneNameKey" in iz && (0, an.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function mn(zz) {
      let {
        icon: uz
      } = zz;
      const bz = (0, xz.useCallback)((zz => {
        null === zz || void 0 === zz || zz.replaceChildren(Wu(uz))
      }), [uz]);
      return (0, an.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: bz
      })
    }

    function qn(zz) {
      let {
        controller: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)();
      return (0, an.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: uz.display.mountPlayer,
        title: bz("skyblockGame:mapYouAreHere"),
        children: (0, an.jsx)(mn, {
          icon: "player"
        })
      })
    }
    const hn = bz(37935),
      Un = Object.fromEntries(hn.keys().map((zz => [zz.replace(/^\.\/(.*)\.png$/, "$1"), hn(zz)])));

    function cn(zz, uz) {
      var bz;
      return null !== (bz = Un[zz]) && void 0 !== bz ? bz : Un[uz]
    }

    function gn(zz) {
      let {
        imageKey: uz,
        fallbackImageKey: bz,
        geometryKey: Ez,
        alt: nz,
        className: iz
      } = zz;
      const [lz, Mz] = (0, xz.useState)((() => function(zz, uz) {
        return [{
          id: 0,
          imageKey: zz,
          geometryKey: uz,
          phase: "shown"
        }]
      }(uz, Ez))), tz = function(zz, uz, bz) {
        const Ez = zz[zz.length - 1];
        if (Ez.imageKey === uz && Ez.geometryKey === bz) return zz;
        const nz = {
          id: Ez.id + 1,
          imageKey: uz,
          geometryKey: bz,
          phase: "entering"
        };
        return Ez.geometryKey === bz ? [{
          ...Ez,
          phase: "leaving"
        }, nz] : [nz]
      }(lz, uz, Ez);
      return tz !== lz && Mz(tz), (0, an.jsx)(an.Fragment, {
        children: tz.map((zz => (0, an.jsx)("img", {
          className: Nn()("SkyblockMapTerrainImage", iz, {
            Entering: "entering" === zz.phase,
            Leaving: "leaving" === zz.phase
          }),
          src: cn(zz.imageKey, bz),
          alt: "leaving" === zz.phase ? "" : nz,
          onAnimationEnd: () => {
            Mz((uz => function(zz, uz) {
              return zz.flatMap((zz => zz.id !== uz ? [zz] : "leaving" === zz.phase ? [] : [{
                ...zz,
                phase: "shown"
              }]))
            }(uz, zz.id)))
          }
        }, zz.id)))
      })
    }
    var Sn = bz(4292),
      yn = bz(1419);

    function Dn(zz) {
      if ("Tab" !== zz.key) return;
      const uz = Array.from(zz.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        bz = uz.indexOf(document.activeElement);
      var Ez;
      if (zz.shiftKey && bz <= 0) zz.preventDefault(), null === (Ez = uz.at(-1)) || void 0 === Ez || Ez.focus();
      else if (!zz.shiftKey && (-1 === bz || bz === uz.length - 1)) {
        var nz;
        zz.preventDefault(), null === (nz = uz[0]) || void 0 === nz || nz.focus()
      }
    }

    function Qn() {
      const zz = (0, xz.useRef)(null);
      return (0, xz.useCallback)((uz => {
        var bz;
        uz ? (zz.current = document.activeElement, uz.focus()) : null === (bz = zz.current) || void 0 === bz || bz.focus()
      }), [])
    }

    function Wn(zz) {
      let {
        percent: uz,
        label: bz,
        levelUpToken: Ez,
        colour: nz
      } = zz;
      return (0, an.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": bz,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": uz,
        "aria-valuetext": bz,
        children: [(0, an.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${uz/100})`
          }
        }), null !== Ez && void 0 !== Ez && (0, an.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": nz
          }
        }, Ez)]
      })
    }

    function en(zz) {
      let {
        mount: uz
      } = zz;
      return (0, an.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: uz,
        hidden: !0,
        children: (0, an.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, an.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, an.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function jn(zz, uz, bz, Ez) {
      (0, xz.useLayoutEffect)((() => {
        const nz = zz.current;
        if (!bz || null === uz || void 0 === uz || !uz.local || !nz) return;
        const iz = Array.from(nz.querySelectorAll(".SkyblockMapNode")),
          lz = [...uz.points, ...uz.portals],
          Mz = () => {
            const zz = nz.clientWidth,
              bz = nz.clientHeight,
              Mz = iz.map(((nz, iz) => {
                const Mz = lz[iz];
                return {
                  id: Mz.id,
                  portal: iz >= uz.points.length,
                  x: Mz.position[0] * zz / 100,
                  y: Mz.position[1] * bz / 100,
                  width: nz.offsetWidth / Ez,
                  height: nz.offsetHeight / Ez
                }
              })),
              tz = new Map(lz.map(((zz, uz) => [zz.id, iz[uz]])));
            for (const uz of function(zz, uz, bz) {
                const Ez = [],
                  nz = [...zz].sort(((zz, uz) => Number(uz.portal) - Number(zz.portal) || zz.id.localeCompare(uz.id)));
                for (const iz of nz) {
                  const zz = zz => Math.max(iz.width / 2, Math.min(uz - iz.width / 2, zz)),
                    nz = zz => Math.max(iz.height / 2, Math.min(bz - iz.height / 2, zz)),
                    lz = [zz(iz.x)],
                    Mz = [nz(iz.y)];
                  for (const uz of Ez) lz.push(zz(uz.x - (uz.width + iz.width) / 2 - 4), zz(uz.x + (uz.width + iz.width) / 2 + 4)), Mz.push(nz(uz.y - (uz.height + iz.height) / 2 - 4), nz(uz.y + (uz.height + iz.height) / 2 + 4));
                  let tz = {
                      ...iz,
                      x: lz[0],
                      y: Mz[0]
                    },
                    Hz = 1 / 0,
                    Oz = 1 / 0;
                  for (const uz of new Set(lz))
                    for (const zz of new Set(Mz)) {
                      let bz = 0;
                      for (const lz of Ez) bz += Math.max(0, (iz.width + lz.width) / 2 + 4 - Math.abs(uz - lz.x)) * Math.max(0, (iz.height + lz.height) / 2 + 4 - Math.abs(zz - lz.y));
                      const nz = (uz - iz.x) ** 2 + (zz - iz.y) ** 2;
                      (bz < Hz || bz === Hz && nz < Oz) && (tz = {
                        ...iz,
                        x: uz,
                        y: zz
                      }, Hz = bz, Oz = nz)
                    }
                  Ez.push(tz)
                }
                return Ez
              }(Mz, zz, bz)) {
              const zz = tz.get(uz.id);
              zz.style.left = `${uz.x}px`, zz.style.top = `${uz.y}px`
            }
          };
        Mz();
        const tz = new ResizeObserver(Mz);
        tz.observe(nz);
        for (const zz of iz) tz.observe(zz);
        return () => {
          tz.disconnect()
        }
      }), [zz, uz, bz, Ez])
    }
    const In = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Bn = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Cn(zz, uz, bz) {
      return Math.min(bz, Math.max(uz, zz))
    }

    function Yn(zz, uz, bz) {
      const Ez = Math.min(1, bz * uz / zz),
        nz = Math.min(1, zz / (bz * uz));
      return {
        x0: (1 - Ez) / 2,
        y0: (1 - nz) / 2,
        x1: (1 + Ez) / 2,
        y1: (1 + nz) / 2
      }
    }

    function kn(zz, uz, bz, Ez) {
      const nz = uz * (Ez - bz);
      if (nz <= 1) return .5 - uz * (bz + Ez) / 2;
      const iz = .45 * Math.min(1, nz - 1);
      return Cn(zz, 1 - uz * Ez - iz, iz - uz * bz)
    }

    function zi(zz, uz) {
      const bz = Cn(zz.zoom, 1, 12);
      return {
        zoom: bz,
        x: kn(zz.x, bz, uz.x0, uz.x1),
        y: kn(zz.y, bz, uz.y0, uz.y1)
      }
    }

    function ui(zz, uz, bz, Ez) {
      let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Bn;
      const iz = Cn(zz.zoom * uz, 1, 12),
        lz = iz / zz.zoom;
      return zi({
        zoom: iz,
        x: bz - (bz - zz.x) * lz,
        y: Ez - (Ez - zz.y) * lz
      }, nz)
    }

    function bi(zz, uz, bz, Ez) {
      const [nz, iz] = (0, xz.useState)(In);
      (0, xz.useEffect)((() => {
        iz(In)
      }), [bz]), (0, xz.useEffect)((() => {
        const bz = zz.current;
        if (!uz || !bz) return;
        const nz = () => Yn(bz.clientWidth, bz.clientHeight, Ez),
          lz = zz => {
            const uz = bz.getBoundingClientRect();
            return {
              x: (zz.clientX - uz.left) / uz.width,
              y: (zz.clientY - uz.top) / uz.height
            }
          },
          Mz = new Map;
        let tz = {
            x: 0,
            y: 0
          },
          Hz = !1,
          Oz = 0;
        const pz = zz => {
            zz.preventDefault();
            const uz = zz.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * zz.deltaY : zz.deltaY,
              bz = lz(zz);
            iz((zz => ui(zz, Math.exp(.0015 * -uz), bz.x, bz.y, nz())))
          },
          dz = zz => {
            "mouse" === zz.pointerType && 0 !== zz.button || (Mz.set(zz.pointerId, lz(zz)), 1 === Mz.size && (tz = {
              x: zz.clientX,
              y: zz.clientY
            }, Hz = !1), Oz = 0)
          },
          Fz = zz => {
            const uz = Mz.get(zz.pointerId);
            if (!uz) return;
            const Ez = lz(zz);
            if (Mz.set(zz.pointerId, Ez), 2 === Mz.size) {
              const [zz, uz] = [...Mz.values()], bz = Math.hypot(zz.x - uz.x, zz.y - uz.y);
              if (Oz > 0) {
                const Ez = bz / Oz;
                iz((bz => ui(bz, Ez, (zz.x + uz.x) / 2, (zz.y + uz.y) / 2, nz())))
              }
              return Oz = bz, void(Hz = !0)
            }!Hz && Math.hypot(zz.clientX - tz.x, zz.clientY - tz.y) < 4 || (Hz || (Hz = !0, bz.setPointerCapture(zz.pointerId)), iz((zz => function(zz, uz, bz) {
              let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bn;
              return zi({
                zoom: zz.zoom,
                x: zz.x + uz,
                y: zz.y + bz
              }, Ez)
            }(zz, Ez.x - uz.x, Ez.y - uz.y, nz()))))
          },
          Zz = zz => {
            Mz.delete(zz.pointerId), Oz = 0
          },
          Rz = zz => {
            Hz && (zz.stopPropagation(), zz.preventDefault(), Hz = !1)
          },
          Kz = new ResizeObserver((() => {
            iz((zz => zi(zz, nz())))
          }));
        return Kz.observe(bz), bz.addEventListener("wheel", pz, {
          passive: !1
        }), bz.addEventListener("pointerdown", dz), bz.addEventListener("pointermove", Fz), bz.addEventListener("pointerup", Zz), bz.addEventListener("pointercancel", Zz), bz.addEventListener("click", Rz, !0), () => {
          Kz.disconnect(), bz.removeEventListener("wheel", pz), bz.removeEventListener("pointerdown", dz), bz.removeEventListener("pointermove", Fz), bz.removeEventListener("pointerup", Zz), bz.removeEventListener("pointercancel", Zz), bz.removeEventListener("click", Rz, !0)
        }
      }), [zz, uz, bz, Ez]);
      return {
        view: nz,
        zoomBy: uz => {
          const bz = zz.current;
          bz && iz((zz => ui(zz, uz, .5, .5, Yn(bz.clientWidth, bz.clientHeight, Ez))))
        }
      }
    }

    function Ei(zz) {
      var uz, bz, Ez, nz;
      let {
        controller: iz,
        navigation: lz
      } = zz;
      const Mz = (0, Gn.h)(dz, iz.getSnapshot()),
        {
          t: tz
        } = (0, Pn.F)(),
        Hz = Qn(),
        Oz = Mz.presentation,
        pz = (0, xz.useRef)(null),
        Fz = (0, xz.useRef)(null),
        Zz = Boolean(Mz.open && (null === Oz || void 0 === Oz ? void 0 : Oz.local) && Oz.background),
        Rz = bi(pz, Zz, `${Mz.open}|${Mz.tab}|${null===Oz||void 0===Oz||null===(uz=Oz.background)||void 0===uz?void 0:uz.geometryKey}`, null !== (bz = null === Oz || void 0 === Oz || null === (Ez = Oz.background) || void 0 === Ez ? void 0 : Ez.ratio) && void 0 !== bz ? bz : 2);
      if (jn(Fz, Oz, Mz.open, Rz.view.zoom), !Oz || !Mz.open) return null;
      const Kz = Oz.local ? Oz.background : null,
        wz = {
          "--map-ratio": String(null !== (nz = null === Kz || void 0 === Kz ? void 0 : Kz.ratio) && void 0 !== nz ? nz : 2),
          backgroundColor: null === Kz || void 0 === Kz ? void 0 : Kz.colour
        },
        Xz = {
          "--map-zoom": String(Rz.view.zoom),
          transform: `translate(${100*Rz.view.x}%, ${100*Rz.view.y}%) scale(${Rz.view.zoom})`
        };
      return (0, an.jsx)(Sn.d, {
        show: Mz.open,
        close: iz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Hz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, an.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, an.jsx)("h2", {
                id: "skyblockMapTitle",
                children: tz("skyblockGame:map")
              }), Oz.minimap && (0, an.jsx)("p", {
                children: Oz.minimap.caption
              })]
            }), (0, an.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((zz => (0, an.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": zz === Mz.tab ? "true" : void 0,
                className: Nn()({
                  Selected: zz === Mz.tab
                }),
                "aria-pressed": zz === Mz.tab,
                onClick: () => {
                  iz.selectTab(zz)
                },
                children: tz("local" === zz ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, zz)))
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              onClick: iz.dismiss
            })]
          }), (0, an.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, an.jsxs)("div", {
              ref: pz,
              className: Nn()("SkyblockMapCanvas", {
                Local: Oz.local,
                Overview: !Oz.local,
                Zoomed: Rz.view.zoom > 1
              }),
              style: wz,
              children: [(0, an.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: Zz ? Xz : void 0,
                children: (0, an.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: Fz,
                  children: [Kz && (0, an.jsx)(gn, {
                    className: "SkyblockMapTerrain",
                    imageKey: Kz.imageKey,
                    fallbackImageKey: Kz.fallbackImageKey,
                    geometryKey: Kz.geometryKey,
                    alt: Kz.label
                  }), Oz.local && (0, an.jsx)(en, {
                    mount: lz.display.mountMapSearchArea
                  }), !Oz.local && (0, an.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Oz.connections.map((zz => (0, an.jsx)("line", {
                      className: Nn()({
                        Explored: zz.explored
                      }),
                      x1: zz.start[0],
                      y1: zz.start[1],
                      x2: zz.end[0],
                      y2: zz.end[1]
                    }, zz.id)))
                  }), Oz.points.map((zz => {
                    const uz = !Oz.local && zz.thumbnail ? Un[zz.thumbnail] : void 0;
                    return (0, an.jsxs)("div", {
                      className: Nn()("SkyblockMapNode", {
                        Current: zz.current
                      }),
                      style: {
                        left: `${zz.position[0]}%`,
                        top: `${zz.position[1]}%`
                      },
                      children: [(0, an.jsxs)(yn.f, {
                        className: Nn()("SkyblockMapPin", {
                          Unknown: !zz.visited,
                          Current: zz.current
                        }),
                        disabled: Mz.pending,
                        onClick: () => {
                          iz.travel(zz.travelKind, zz.travelId)
                        },
                        children: [uz && (0, an.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: uz,
                          alt: ""
                        }), !uz && (0, an.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, an.jsx)(mn, {
                            icon: zz.icon
                          })
                        }), (0, an.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: zz.name
                        })]
                      }), zz.current && (0, an.jsx)("span", {
                        className: Nn()("SkyblockMapHereBadge", {
                          Above: zz.position[1] > 50
                        }),
                        children: tz("skyblockGame:mapYouAreHere")
                      })]
                    }, zz.id)
                  })), Oz.portals.map((zz => (0, an.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${zz.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${zz.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, an.jsxs)(yn.f, {
                      className: "SkyblockMapPin",
                      disabled: Mz.pending,
                      onClick: () => {
                        iz.travel(zz.travelKind, zz.travelId)
                      },
                      children: [(0, an.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: zz.colour
                        },
                        "aria-hidden": "true",
                        children: (0, an.jsx)(mn, {
                          icon: zz.icon
                        })
                      }), (0, an.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: zz.name
                      })]
                    })
                  }, zz.id))), Oz.local && (0, an.jsx)(qn, {
                    controller: lz
                  })]
                })
              }), Zz && (0, an.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, an.jsx)("button", {
                  type: "button",
                  "aria-label": tz("skyblockGame:mapZoomIn"),
                  disabled: Rz.view.zoom >= 12,
                  onClick: () => {
                    Rz.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, an.jsx)("button", {
                  type: "button",
                  "aria-label": tz("skyblockGame:mapZoomOut"),
                  disabled: Rz.view.zoom <= 1,
                  onClick: () => {
                    Rz.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, an.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: Mz.feedback
              })]
            })
          }), (0, an.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Oz.progress && (0, an.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, an.jsx)("span", {
                children: Oz.progress
              }), (0, an.jsx)(Wn, {
                percent: Oz.percent,
                label: Oz.progress
              })]
            }), Oz.noLandmarks && (0, an.jsx)("span", {
              children: tz("skyblockGame:mapNoLandmarks")
            }), Oz.canTravel && (0, an.jsx)("span", {
              className: "SkyblockMapHint",
              children: tz("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function ni(zz) {
      let {
        view: uz,
        controller: bz,
        navigation: Ez
      } = zz;
      const {
        t: nz
      } = (0, Pn.F)(), {
        isTouchScreen: iz
      } = (0, vn.m)(["isTouchScreen"]);
      return (0, an.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": nz("skyblockGame:mapLocal"),
        children: [iz && (0, an.jsx)(yn.f, {
          className: "SkyblockMinimapOpen",
          onClick: bz.showLocal,
          children: nz("skyblockGame:map")
        }), (0, an.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: uz.colour
          },
          children: [(0, an.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Ez.display.mountTerrain,
            style: {
              width: uz.width,
              height: uz.height
            },
            children: [(0, an.jsx)(gn, {
              imageKey: uz.imageKey,
              fallbackImageKey: uz.fallbackImageKey,
              geometryKey: uz.geometryKey,
              alt: uz.label
            }), (0, an.jsx)(en, {
              mount: Ez.display.mountMinimapSearchArea
            }), uz.markers.map((zz => (0, an.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${zz.position[0]}%`,
                top: `${zz.position[1]}%`,
                color: zz.colour
              },
              title: zz.name,
              children: (0, an.jsx)(mn, {
                icon: zz.icon
              })
            }, zz.id)))]
          }), (0, an.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: nz("skyblockGame:mapYouAreHere"),
            children: (0, an.jsx)(mn, {
              icon: "player"
            })
          })]
        }), (0, an.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: uz.caption
        })]
      })
    }

    function ii(zz) {
      let {
        controller: uz
      } = zz;
      return (0, an.jsxs)("div", {
        className: "SkyblockCompass",
        ref: uz.display.mountCompass,
        children: [(0, an.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, an.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, an.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function li(zz) {
      let {
        controller: uz,
        surface: bz
      } = zz;
      const {
        t: Ez
      } = (0, Pn.F)(), nz = (0, Gn.h)(ib, uz.getSnapshot()), iz = Qn();
      return nz.enabled ? (0, an.jsxs)(an.Fragment, {
        children: ["hud" === bz && (0, an.jsx)(xn.d, {
          placement: "statBars",
          children: nz.hud && (0, an.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": nz.hud.colour
            },
            children: [(0, an.jsx)(Wn, {
              percent: nz.hud.skill.percent,
              label: nz.hud.skill.xp,
              levelUpToken: nz.hud.levelUpToken,
              colour: nz.hud.colour
            }), (0, an.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, an.jsxs)("span", {
                children: [nz.hud.skill.label, " \xb7 ", nz.hud.skill.level]
              }), (0, an.jsx)("span", {
                children: nz.hud.gain
              })]
            })]
          })
        }), "hud" === bz && (0, an.jsx)(xn.d, {
          children: nz.hud && (0, an.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, an.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, an.jsx)("strong", {
                children: nz.hud.skill.label
              }), (0, an.jsx)("span", {
                children: nz.hud.gain
              })]
            }), (0, an.jsx)(Wn, {
              percent: nz.hud.skill.percent,
              label: nz.hud.skill.xp,
              levelUpToken: nz.hud.levelUpToken,
              colour: nz.hud.colour
            }), (0, an.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, an.jsx)("span", {
                children: nz.hud.skill.level
              }), (0, an.jsx)("span", {
                children: nz.hud.skill.xp
              })]
            })]
          })
        }), "menu" === bz && (0, an.jsx)(Sn.d, {
          show: nz.open,
          close: uz.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, an.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: iz,
            onKeyDown: Dn,
            children: [(0, an.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, an.jsxs)("div", {
                children: [(0, an.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Ez("skyblockGame:skills")
                }), (0, an.jsx)("p", {
                  children: Ez("skyblockGame:skillsIntro")
                })]
              }), (0, an.jsx)(yn.m, {
                padIgnore: !0,
                onClick: uz.dismiss
              })]
            }), (0, an.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, an.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: nz.skills.map((zz => (0, an.jsxs)(yn.f, {
                  className: Nn()("SkyblockSkillCard", {
                    Selected: zz.selected
                  }),
                  ariaPressed: zz.selected,
                  onClick: () => {
                    uz.select(zz.id)
                  },
                  children: [(0, an.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, an.jsx)(An.c, {
                      itemName: zz.icon,
                      amount: 0
                    })
                  }), (0, an.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, an.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, an.jsx)("strong", {
                        children: zz.label
                      }), (0, an.jsx)("span", {
                        children: zz.level
                      })]
                    }), (0, an.jsx)(Wn, {
                      percent: zz.percent,
                      label: `${zz.label}: ${zz.xp}`
                    }), (0, an.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: zz.xp
                    })]
                  })]
                }, zz.id)))
              }), nz.detail && (0, an.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, an.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, an.jsx)(An.c, {
                    itemName: nz.detail.icon,
                    amount: 0
                  })
                }), (0, an.jsx)("h3", {
                  children: nz.detail.label
                }), (0, an.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: nz.detail.level
                }), (0, an.jsx)("p", {
                  children: nz.detail.description
                }), (0, an.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, an.jsx)("strong", {
                    children: Ez("skyblockGame:currentBenefit")
                  }), (0, an.jsx)("span", {
                    children: nz.detail.benefit
                  })]
                }), (0, an.jsx)(Wn, {
                  percent: nz.detail.percent,
                  label: nz.detail.xp
                }), (0, an.jsx)("p", {
                  children: nz.detail.xp
                }), (0, an.jsx)("h4", {
                  children: Ez("skyblockGame:earnXp")
                }), (0, an.jsx)("ul", {
                  children: nz.detail.sources.map((zz => (0, an.jsx)("li", {
                    children: zz
                  }, zz)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Mi = bz(1332),
      ti = bz(4598),
      Hi = bz(316);

    function Oi(zz) {
      let {
        item: uz
      } = zz;
      return (0, an.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, an.jsx)(An.c, {
          itemName: uz,
          amount: 0
        })
      })
    }

    function di(zz) {
      let {
        name: uz,
        percent: bz,
        progress: Ez
      } = zz;
      return (0, an.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, an.jsx)(Wn, {
          percent: bz,
          label: `${(0,Hi.Db)(uz)}: ${Ez}`
        }), (0, an.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Ez
        })]
      })
    }

    function Fi(zz) {
      let {
        subquests: uz,
        showDescriptions: bz = !1
      } = zz;
      return (0, an.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: uz.map((zz => {
          const uz = bz && "completed" === zz.status,
            Ez = (0, an.jsxs)("li", {
              className: Nn()("SkyblockQuestStep", zz.status, {
                JustFinished: zz.justFinished,
                JustUnlocked: zz.justUnlocked
              }),
              tabIndex: uz ? 0 : void 0,
              children: [null !== zz.iconItem && (0, an.jsx)(Oi, {
                item: zz.iconItem
              }), null === zz.iconItem && (0, an.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === zz.status ? "\u2713" : "skipped" === zz.status ? "\u2212" : "\u25cb"
              }), (0, an.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, an.jsx)("strong", {
                  children: (0, an.jsx)(ti.b, {
                    text: zz.name
                  })
                }), bz && !uz && (0, an.jsx)("span", {
                  children: (0, an.jsx)(ti.b, {
                    text: zz.description
                  })
                }), null !== zz.barPercent && (0, an.jsx)(di, {
                  name: zz.name,
                  percent: zz.barPercent,
                  progress: zz.progress
                }), null === zz.barPercent && !uz && (0, an.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: zz.statusLabel
                })]
              })]
            }, zz.id);
          return uz ? (0, an.jsx)(Mi.f, {
            delayShow: 200,
            tooltipInner: (0, an.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, an.jsx)("span", {
                children: (0, an.jsx)(ti.b, {
                  text: zz.description
                })
              }), (0, an.jsx)("strong", {
                children: zz.statusLabel
              })]
            }),
            children: Ez
          }, zz.id) : Ez
        }))
      })
    }

    function Zi(zz) {
      let {
        quest: uz,
        select: bz
      } = zz;
      const {
        t: Ez
      } = (0, Pn.F)(), nz = uz.focusStep;
      return (0, an.jsxs)(yn.f, {
        className: Nn()("SkyblockQuestCard", {
          Selected: uz.selected,
          Tracked: uz.tracked
        }),
        onClick: () => {
          bz(uz.id)
        },
        children: [(0, an.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, an.jsx)("strong", {
            children: (0, an.jsx)(ti.b, {
              text: uz.name
            })
          }), uz.tracked && (0, an.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Ez("skyblockGame:currentQuest")
          })]
        }), nz && (0, an.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== nz.iconItem && (0, an.jsx)(Oi, {
            item: nz.iconItem
          }), (0, an.jsx)(di, {
            name: nz.name,
            percent: nz.barPercent,
            progress: nz.progress
          })]
        }), (0, an.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: uz.progress
        })]
      })
    }

    function Ri(zz) {
      let {
        controller: uz,
        surface: bz
      } = zz;
      const Ez = (0, Gn.h)(Hb, uz.getSnapshot()),
        {
          t: nz
        } = (0, Pn.F)(),
        iz = Qn();
      return Ez.enabled ? (0, an.jsxs)(an.Fragment, {
        children: ["hud" === bz && (0, an.jsx)(an.Fragment, {
          children: Ez.tracked && (0, an.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: tb,
            children: (0, an.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Ez.trackedStepPulse > 0 && (0, an.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Ez.trackedStepPulse), (0, an.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: nz("skyblockGame:currentQuest")
              }), (0, an.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, an.jsx)("strong", {
                  children: (0, an.jsx)(ti.b, {
                    text: Ez.tracked.name
                  })
                }), null !== Ez.tracked.clock && (0, an.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Ez.tracked.clock
                })]
              }), (0, an.jsx)(Fi, {
                subquests: Ez.tracked.subquests
              })]
            })
          })
        }), "menu" === bz && (0, an.jsx)(Sn.d, {
          show: Ez.open,
          close: uz.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, an.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: iz,
            onKeyDown: Dn,
            children: [(0, an.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, an.jsx)("div", {
                children: (0, an.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: nz("skyblockGame:quests")
                })
              }), (0, an.jsx)(yn.m, {
                padIgnore: !0,
                onClick: uz.dismiss
              })]
            }), (0, an.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, an.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, an.jsx)("h3", {
                  children: nz("skyblockGame:current")
                }), 0 === Ez.active.length && (0, an.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: nz("skyblockGame:noActiveQuests")
                }), Ez.active.map((zz => (0, an.jsx)(Zi, {
                  quest: zz,
                  select: uz.select
                }, zz.id))), (0, an.jsx)("h3", {
                  children: (0, an.jsxs)("button", {
                    type: "button",
                    className: Nn()("SkyblockQuestSectionToggle", {
                      Expanded: Ez.completedExpanded
                    }),
                    "aria-expanded": Ez.completedExpanded,
                    onClick: uz.toggleCompleted,
                    children: [(0, an.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), nz("skyblockGame:completed"), (0, an.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Ez.completed.length
                    })]
                  })
                }), Ez.completedExpanded && 0 === Ez.completed.length && (0, an.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: nz("skyblockGame:noCompletedQuests")
                }), Ez.completedExpanded && Ez.completed.map((zz => (0, an.jsx)(Zi, {
                  quest: zz,
                  select: uz.select
                }, zz.id)))]
              }), Ez.detail && (0, an.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Ez.detail.completed && (0, an.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: nz("skyblockGame:completedQuest")
                }), (0, an.jsx)("h3", {
                  children: (0, an.jsx)(ti.b, {
                    text: Ez.detail.name
                  })
                }), (0, an.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, an.jsx)(ti.b, {
                    text: Ez.detail.description
                  })
                }), (0, an.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Ez.detail.progress, null !== Ez.detail.clock && (0, an.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Ez.detail.clock
                  })]
                }), (0, an.jsx)(Fi, {
                  subquests: Ez.detail.subquests,
                  showDescriptions: !0
                }), Ez.detail.tracked && (0, an.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Ez.detail.trackLabel
                }), !Ez.detail.completed && !Ez.detail.tracked && (0, an.jsx)(yn.q, {
                  onClick: uz.trackSelected,
                  disabled: !Ez.detail.canTrack,
                  children: Ez.detail.trackLabel
                }), Ez.detail.canViewDialogue && (0, an.jsx)(yn.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: uz.viewDialogue,
                  children: nz("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Ki = bz(1047),
      wi = bz(2471);

    function Xi(zz, uz, bz, Ez, nz) {
      const iz = zz => "linear" === nz ? zz : {
          Qi: nz,
          point: zz
        },
        lz = {};
      for (const [Mz, tz] of Ez)
        for (const [uz, bz] of Object.entries(zz(Mz, tz, iz))) lz[uz] ??= {
          timeline: []
        }, lz[uz].timeline.push(bz);
      return {
        Ui: uz,
        loop: bz,
        Si: lz
      }
    }
    const fi = .547,
      si = .022,
      ri = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      oi = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Ni(zz, uz, bz) {
      const {
        drop: Ez = 0,
        shift: nz = 0,
        torso: iz = 0,
        nod: lz = 0,
        tilt: Mz = 0,
        legs: tz = [0, 0],
        arms: Hz = 0,
        spread: Oz = 0
      } = uz, pz = fi * Math.cos(iz) - si * Math.sin(iz), dz = fi * Math.sin(iz) + si * Math.cos(iz), Fz = bz([0, -Ez, nz]);
      return {
        LowerBody: {
          timeFraction: zz,
          position: Fz,
          rotation: bz([0, 0, 0])
        },
        UpperBody: {
          timeFraction: zz,
          position: Fz,
          rotation: bz([iz, 0, Mz])
        },
        HeadMesh: {
          timeFraction: zz,
          position: bz([0, pz - fi - Ez, dz - si + nz]),
          rotation: bz([iz + lz, 0, Mz])
        },
        LegLeftMesh: {
          timeFraction: zz,
          rotation: bz([tz[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: zz,
          rotation: bz([tz[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: zz,
          rotation: bz([Hz, 0, Oz])
        },
        ArmRightMesh: {
          timeFraction: zz,
          rotation: bz([Hz, 0, -Oz])
        }
      }
    }

    function vi(zz, uz, bz) {
      return Xi(Ni, zz, uz, bz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function xi(zz) {
      return "number" === typeof zz ? [zz, zz] : zz
    }

    function Ji(zz, uz, bz) {
      const {
        rise: Ez = 0,
        shift: nz = 0,
        torso: iz = 0,
        twist: lz = 0,
        tilt: Mz = 0,
        nod: tz = 0,
        cock: Hz = 0,
        arms: Oz = 0,
        spread: pz = 0
      } = uz, [dz, Fz] = xi(Oz), [Zz, Rz] = xi(pz);
      return {
        TorsoNode: {
          timeFraction: zz,
          position: bz([0, Ez, nz]),
          rotation: bz([iz, lz, Mz])
        },
        HeadMesh: {
          timeFraction: zz,
          rotation: bz([tz, 0, Hz])
        },
        ArmLeftMesh: {
          timeFraction: zz,
          rotation: bz([dz, 0, Zz])
        },
        ArmRightMesh: {
          timeFraction: zz,
          rotation: bz([Fz, 0, -Rz])
        }
      }
    }
    const Ai = [1.0625, -1, 0];

    function Ti(zz) {
      return "number" === typeof zz ? [zz, zz] : zz
    }

    function Li(zz, uz, bz) {
      const {
        drop: Ez = 0,
        shift: nz = 0,
        torso: iz = 0,
        tilt: lz = 0,
        nod: Mz = 0,
        cock: tz = 0,
        legs: Hz = [0, 0],
        arms: Oz = 0,
        spread: pz = 0
      } = uz, [dz, Fz] = Ti(Oz), [Zz, Rz] = Ti(pz), Kz = -iz, wz = -lz, [Xz, fz, sz] = function(zz, uz) {
        const [bz, Ez, nz] = [-Ai[0], Ai[1], -Ai[2]], iz = bz * Math.cos(uz) - Ez * Math.sin(uz), lz = bz * Math.sin(uz) + Ez * Math.cos(uz);
        return [iz - bz, -(lz * Math.cos(zz) - nz * Math.sin(zz) - Ez), lz * Math.sin(zz) + nz * Math.cos(zz) - nz]
      }(Kz, wz), rz = bz([0, -Ez, nz]);
      return {
        TorsoNode: {
          timeFraction: zz,
          position: bz([Xz, fz - Ez, sz + nz]),
          rotation: bz([Kz, 0, wz])
        },
        HeadMesh: {
          timeFraction: zz,
          rotation: bz([-Mz, 0, -tz])
        },
        ArmLeftMesh: {
          timeFraction: zz,
          rotation: bz([-dz, 0, -Zz])
        },
        ArmRightMesh: {
          timeFraction: zz,
          rotation: bz([-Fz, 0, Rz])
        },
        LegLeftMesh: {
          timeFraction: zz,
          position: rz,
          rotation: bz([-Hz[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: zz,
          position: rz,
          rotation: bz([-Hz[1], 0, 0])
        }
      }
    }
    var Pi = bz(36588),
      Gi = bz(37859),
      ai = bz(38017);

    function Vi(zz, uz, bz) {
      var Ez, nz;
      const iz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return zz + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - zz) * bz
        },
        [lz, Mz] = null !== (Ez = zz.legs) && void 0 !== Ez ? Ez : [0, 0],
        [tz, Hz] = null !== (nz = uz.legs) && void 0 !== nz ? nz : [0, 0];
      return {
        drop: iz(zz.drop, uz.drop),
        shift: iz(zz.shift, uz.shift),
        torso: iz(zz.torso, uz.torso),
        nod: iz(zz.nod, uz.nod),
        tilt: iz(zz.tilt, uz.tilt),
        legs: [iz(lz, tz), iz(Mz, Hz)],
        arms: iz(zz.arms, uz.arms),
        spread: iz(zz.spread, uz.spread)
      }
    }
    const mi = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      qi = vi(4400, !0, [
        [0, mi],
        [.16, {
          ...mi,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, mi],
        [.44, {
          ...mi,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Vi(mi, ri, .7)],
        [.66, Vi(mi, ri, .78)],
        [.74, Vi(mi, oi, .65)],
        [.86, {
          ...mi,
          drop: .14
        }],
        [1, mi]
      ], "catmull-rom-spline"),
      Ui = {
        ...mi,
        drop: .14,
        torso: .3,
        spread: .4
      },
      ci = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      gi = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Si = {
        caveGolem: qi,
        magmaGolem: vi(3600, !0, [
          [0, Ui],
          [.12, {
            ...Ui,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Ui,
            tilt: -.08
          }],
          [.4, {
            ...Ui,
            tilt: .06,
            drop: .11
          }],
          [.52, Vi(Ui, ri, .9)],
          [.62, Vi(Ui, oi, .8)],
          [.7, Vi(Ui, oi, .45)],
          [.78, Vi(Ui, oi, .85)],
          [.9, {
            ...Ui,
            drop: .17
          }],
          [1, Ui]
        ], "catmull-rom-spline"),
        frostWraith: function(zz, uz, bz) {
          return Xi(Ji, zz, uz, bz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, ci],
          [.14, {
            ...ci,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...ci,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...ci,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...ci,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...ci,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...ci,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...ci,
            rise: .16,
            tilt: -.04
          }],
          [1, ci]
        ], "catmull-rom-spline"),
        tikiTerror: function(zz, uz, bz) {
          return Xi(Li, zz, uz, bz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, gi],
          [.16, {
            ...gi,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, gi],
          [.44, {
            ...gi,
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
            ...gi,
            drop: .1
          }],
          [1, gi]
        ], "catmull-rom-spline")
      },
      yi = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Di = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Qi = Object.fromEntries(Object.entries(Si).map((zz => {
        let [uz, bz] = zz;
        return [uz, (0, ai.c)((0, Pi.f)(bz), uz)]
      })));

    function Wi(zz) {
      const uz = function(zz) {
        var uz;
        const bz = (0, Gi.d)(zz).poseRig;
        return null !== (uz = Di[zz]) && void 0 !== uz ? uz : void 0 === bz ? null : yi[bz]
      }(zz);
      return null === uz ? null : Qi[uz]
    }

    function ei(zz) {
      return {
        "--difficulty-colour": zz
      }
    }
    const ji = (0, xz.lazy)((() => (0, wi.d)(bz.e(192).then((() => bz(40739))), (zz => zz.MobPreview))));

    function Ii(zz) {
      var uz, bz, Ez;
      let {
        picker: nz,
        controller: iz
      } = zz;
      const {
        t: lz
      } = (0, Pn.F)(), Mz = Qn(), {
        page: tz
      } = nz;
      return (0, an.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: Mz,
        onKeyDown: zz => {
          "ArrowLeft" === zz.key ? (zz.preventDefault(), zz.stopPropagation(), iz.previous()) : "ArrowRight" === zz.key ? (zz.preventDefault(), zz.stopPropagation(), iz.next()) : Dn(zz)
        },
        style: ei(tz.colour),
        children: [(0, an.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, an.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: nz.dungeonName
          }), (0, an.jsx)(yn.m, {
            padIgnore: !0,
            onClick: iz.dismiss
          })]
        }), (0, an.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, an.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, an.jsx)(yn.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !nz.canPrevious,
              onClick: iz.previous,
              children: (0, an.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, an.jsx)(Ki.c, {
                  name: "angle-up"
                })
              })
            }), (0, an.jsxs)("div", {
              className: Nn()("SkyblockBossPickerBoss", {
                Locked: !tz.unlocked
              }),
              children: [null !== tz.bossMobType && (0, an.jsx)(xz.Suspense, {
                fallback: (0, an.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, an.jsx)(ji, {
                  className: "SkyblockBossPickerModel",
                  mobType: tz.bossMobType,
                  variation: tz.bossMobVariation,
                  animation: null !== (uz = Wi(tz.bossMobType)) && void 0 !== uz ? uz : void 0
                })
              }), null === tz.bossMobType && (0, an.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, an.jsx)(yn.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !nz.canNext,
              onClick: iz.next,
              children: (0, an.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, an.jsx)(Ki.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, an.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, an.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [tz.beaten && (0, an.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), tz.label]
            }), (0, an.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (bz = tz.bossName) && void 0 !== bz ? bz : "???"
            }), (0, an.jsxs)("span", {
              className: Nn()("SkyblockBossPickerRecord", {
                Locked: null !== tz.lockedHint
              }),
              children: [null !== tz.lockedHintHighlight && (0, an.jsxs)(an.Fragment, {
                children: [tz.lockedHintHighlight.before, (0, an.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: ei(tz.lockedHintHighlight.colour),
                  children: [null !== tz.lockedHintHighlight.icon && (0, an.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, an.jsx)(An.c, {
                      itemName: tz.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), tz.lockedHintHighlight.name]
                }), tz.lockedHintHighlight.after]
              }), null === tz.lockedHintHighlight && (null !== (Ez = tz.lockedHint) && void 0 !== Ez ? Ez : tz.summary)]
            })]
          }), (0, an.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: nz.pages.map((zz => (0, an.jsx)("span", {
              className: Nn()("SkyblockBossPickerDot", {
                Current: zz.current,
                Locked: !zz.unlocked
              }),
              style: ei(zz.colour)
            }, zz.difficulty)))
          }), (0, an.jsx)(yn.v, {
            className: "SkyblockBossPickerFight",
            disabled: !tz.unlocked,
            onClick: iz.enter,
            children: lz("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Bi(zz) {
      let {
        dungeon: uz,
        select: bz
      } = zz;
      return (0, an.jsxs)(yn.f, {
        className: Nn()("SkyblockDungeonCard", {
          Selected: uz.selected
        }),
        onClick: () => {
          bz(uz.id)
        },
        children: [(0, an.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, an.jsx)("strong", {
            children: uz.name
          }), (0, an.jsx)("span", {
            children: uz.beatenSummary
          })]
        }), (0, an.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: uz.difficulties.map((zz => (0, an.jsxs)("span", {
            className: Nn()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: zz.beaten
            }),
            style: ei(zz.colour),
            title: zz.summary,
            children: [zz.beaten && (0, an.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), zz.label]
          }, zz.difficulty)))
        })]
      })
    }

    function Ci(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(Fb, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = Qn();
      return bz.enabled ? (0, an.jsxs)(Sn.d, {
        show: bz.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [bz.picker && (0, an.jsx)(Ii, {
          picker: bz.picker,
          controller: uz
        }), !bz.picker && (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: nz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Ez("skyblockGame:dungeons")
              }), (0, an.jsx)("p", {
                children: Ez("skyblockGame:dungeonsIntro")
              })]
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              onClick: uz.dismiss
            })]
          }), (0, an.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, an.jsx)("div", {
              className: "SkyblockDungeonList",
              children: bz.dungeons.map((zz => (0, an.jsx)(Bi, {
                dungeon: zz,
                select: uz.select
              }, zz.id)))
            }), bz.detail && (0, an.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, an.jsx)("h3", {
                children: bz.detail.name
              }), (0, an.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: bz.detail.difficulties.map((zz => (0, an.jsxs)("li", {
                  className: Nn()("SkyblockDungeonRecord", {
                    Beaten: zz.beaten
                  }),
                  children: [(0, an.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: ei(zz.colour),
                    children: [zz.beaten && (0, an.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), zz.label]
                  }), (0, an.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: zz.summary
                  })]
                }, zz.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function Yi(zz) {
      let {
        collection: uz,
        select: bz
      } = zz;
      return (0, an.jsxs)(yn.f, {
        className: Nn()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: uz.selected,
          Locked: uz.locked
        }),
        ariaPressed: uz.selected,
        onClick: () => {
          bz(uz.id)
        },
        children: [(0, an.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, an.jsx)(An.c, {
            itemName: uz.icon,
            amount: 0
          })
        }), (0, an.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, an.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, an.jsx)("strong", {
              children: uz.name
            }), (0, an.jsx)("span", {
              children: uz.tier
            })]
          }), (0, an.jsx)(Wn, {
            percent: uz.percent,
            label: `${uz.name}: ${uz.progress}`
          }), (0, an.jsx)("span", {
            className: "SkyblockSkillXp",
            children: uz.progress
          })]
        })]
      })
    }

    function ki(zz) {
      let {
        collection: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)();
      return (0, an.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, an.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, an.jsx)(An.c, {
            itemName: uz.icon,
            amount: 0
          })
        }), (0, an.jsx)("h3", {
          children: uz.name
        }), (0, an.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: uz.tier
        }), (0, an.jsx)("p", {
          children: uz.locked ? bz("skyblockGame:collectionLocked") : uz.count
        }), null !== uz.nextReward && (0, an.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, an.jsx)("strong", {
            children: bz("skyblockGame:collectionNextReward")
          }), (0, an.jsx)("span", {
            children: uz.nextReward
          })]
        }), (0, an.jsx)(Wn, {
          percent: uz.percent,
          label: uz.progress
        }), (0, an.jsx)("p", {
          children: uz.progress
        })]
      })
    }

    function zl(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(mb, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = Qn();
      return bz.enabled ? (0, an.jsx)(Sn.d, {
        show: bz.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: nz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Ez("skyblockGame:collections")
              }), (0, an.jsxs)("p", {
                children: [Ez("skyblockGame:collectionsIntro"), " ", bz.tiersUnlocked]
              })]
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              onClick: uz.dismiss
            })]
          }), (0, an.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: bz.categories.map((zz => (0, an.jsxs)(yn.f, {
              className: Nn()("SkyblockCollectionCategory", {
                Selected: zz.selected
              }),
              ariaPressed: zz.selected,
              padTabSelected: zz.selected,
              onClick: () => {
                uz.selectCategory(zz.id)
              },
              children: [(0, an.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, an.jsx)(An.c, {
                  itemName: zz.icon,
                  amount: 0
                })
              }), (0, an.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, an.jsx)("strong", {
                  children: zz.label
                }), (0, an.jsx)("span", {
                  children: zz.tiers
                })]
              })]
            }, zz.id)))
          }), (0, an.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, an.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: bz.collections.map((zz => (0, an.jsx)(Yi, {
                collection: zz,
                select: uz.select
              }, zz.id)))
            }), bz.detail && (0, an.jsx)(ki, {
              collection: bz.detail
            })]
          })]
        })
      }) : null
    }
    const ul = ["completed", "active", "available", "locked"],
      bl = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function El(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(jb, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = Qn();
      return bz.enabled ? (0, an.jsx)(Sn.d, {
        show: bz.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: nz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Ez("skyblockDevQuests:title")
              }), (0, an.jsx)("p", {
                children: Ez("skyblockDevQuests:intro")
              })]
            }), (0, an.jsx)(yn.m, {
              onClick: uz.dismiss
            })]
          }), (0, an.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [ul.map((zz => (0, an.jsx)("span", {
              className: Nn()("SkyblockQuestGraphLegendState", zz),
              children: Ez(`skyblockDevQuests:state_${zz}`)
            }, zz))), bl.map((zz => (0, an.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, an.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, an.jsx)("line", {
                  className: Nn()("SkyblockQuestGraphEdge", zz),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Ez(`skyblockDevQuests:edge_${zz}`)]
            }, zz)))]
          }), (0, an.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, an.jsxs)("div", {
              className: Nn()("SkyblockQuestGraphCanvas", {
                Planning: bz.planning
              }),
              style: {
                width: bz.width,
                height: bz.height
              },
              children: [(0, an.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: bz.width,
                height: bz.height,
                "aria-hidden": "true",
                children: [(0, an.jsx)("defs", {
                  children: (0, an.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, an.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), bz.edges.map((zz => (0, an.jsx)("path", {
                  className: Nn()("SkyblockQuestGraphEdge", zz.kind, {
                    InPlan: zz.inPlan
                  }),
                  d: zz.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, zz.key)))]
              }), bz.nodes.map((zz => (0, an.jsxs)("button", {
                type: "button",
                className: Nn()("SkyblockQuestGraphNode", zz.state, {
                  InPlan: zz.inPlan,
                  Hovered: zz.hovered
                }),
                style: {
                  left: zz.left,
                  top: zz.top,
                  width: 190,
                  height: 52
                },
                title: zz.id,
                onMouseEnter: () => {
                  uz.hover(zz.id)
                },
                onMouseLeave: () => {
                  uz.hover(null)
                },
                onFocus: () => {
                  uz.hover(zz.id)
                },
                onBlur: () => {
                  uz.hover(null)
                },
                onClick: () => {
                  uz.jump(zz.id)
                },
                children: [(0, an.jsx)("strong", {
                  children: zz.name
                }), (0, an.jsx)("span", {
                  children: zz.detail
                })]
              }, zz.id)))]
            })
          })]
        })
      }) : null
    }
    const nl = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      il = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${ME}ms`,
        "--forge-duration": "2150ms"
      },
      ll = Array.from({
        length: 18
      }, ((zz, uz) => ({
        "--ember-left": `${(4+92*(.618034*uz%1)).toFixed(1)}%`,
        "--ember-size": 3 + uz % 3 * 2 + "px",
        "--ember-drift": 14 * (uz % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*uz%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*uz%8).toFixed(2)}s`
      })));

    function Ml(zz) {
      if (zz.style.removeProperty("--part-size"), null === zz.parentElement || "wrap" === getComputedStyle(zz.parentElement).flexWrap) return;
      const uz = [...zz.children],
        bz = getComputedStyle(zz),
        Ez = parseFloat(bz.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        nz = (zz.clientHeight - parseFloat(bz.rowGap) * (uz.length - 1)) / uz.length,
        iz = uz.map((zz => {
          const uz = getComputedStyle(zz),
            bz = zz.querySelector("h3"),
            iz = zz.querySelector(".SkyblockForgeParts");
          if (null === bz || null === iz) return Ez;
          const lz = nz - parseFloat(uz.paddingTop) - parseFloat(uz.paddingBottom) - bz.offsetHeight - parseFloat(getComputedStyle(bz).marginBottom),
            Mz = parseFloat(getComputedStyle(iz).columnGap),
            tz = iz.children.length;
          let Hz = 0;
          for (let Ez = 1; Ez <= tz; Ez++) {
            const zz = Math.ceil(tz / Ez);
            Hz = Math.max(Hz, Math.min((iz.clientWidth - Mz * (Ez - 1)) / Ez, (lz - Mz * (zz - 1)) / zz))
          }
          return Hz
        }));
      zz.style.setProperty("--part-size", `${Math.floor(Math.max(Ez,Math.min(...iz)))}px`)
    }

    function tl(zz) {
      var uz, bz, Ez, iz, lz;
      let {
        controller: Mz
      } = zz;
      const tz = (0, Gn.h)(ZE, Mz.getSnapshot()),
        {
          t: Hz
        } = (0, Pn.F)(),
        Oz = Qn(),
        pz = function() {
          const zz = (0, xz.useRef)(null),
            uz = (0, xz.useRef)(null);
          return (0, xz.useLayoutEffect)((() => {
            null !== zz.current && Ml(zz.current)
          })), (0, xz.useCallback)((bz => {
            var Ez;
            null === (Ez = uz.current) || void 0 === Ez || Ez.disconnect(), uz.current = null, zz.current = bz, null !== bz && (uz.current = new ResizeObserver((() => {
              Ml(bz)
            })), uz.current.observe(bz))
          }), [])
        }(),
        dz = function(zz) {
          const uz = (0, xz.useRef)(null);
          return (0, xz.useLayoutEffect)((() => {
            const zz = uz.current;
            if (null !== zz) {
              zz.style.removeProperty("font-size");
              for (let uz = 1.7; uz > 1.1 && zz.scrollWidth > zz.clientWidth; uz -= .1) zz.style.fontSize = uz - .1 + "rem"
            }
          }), [zz]), (0, xz.useCallback)((zz => {
            uz.current = zz
          }), [])
        }(null === (uz = tz.preview) || void 0 === uz ? void 0 : uz.name),
        Fz = (0, xz.useRef)(null),
        Zz = (0, xz.useRef)({}),
        Rz = tz.forging,
        Kz = null !== (bz = null === Rz || void 0 === Rz ? void 0 : Rz.preview.tier) && void 0 !== bz ? bz : 0,
        wz = null !== (Ez = null === Rz || void 0 === Rz ? void 0 : Rz.preview.named) && void 0 !== Ez && Ez,
        Xz = (0, xz.useMemo)((() => {
          return null === Rz ? null : {
            flames: (zz = Kz, uz = wz, Array.from({
              length: 26 + 6 * zz + (uz ? 20 : 0)
            }, ((zz, uz) => {
              const bz = uz < 6,
                Ez = Math.random() * Math.PI * 2,
                nz = bz ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                iz = Math.cos(Ez) * nz,
                lz = Math.sin(Ez) * nz - 2 - 3 * Math.random(),
                Mz = Math.random(),
                [tz, Hz, Oz] = bz ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : Mz < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : Mz < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [Mz < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": tz,
                "--x0": `${(.15*iz).toFixed(2)}rem`,
                "--y0": `${(.15*lz).toFixed(2)}rem`,
                "--x": `${iz.toFixed(2)}rem`,
                "--y": `${lz.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Hz.toFixed(2)}rem`,
                "--duration": `${Math.round(Oz)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: OE(Kz, wz)
          };
          var zz, uz
        }), [null === Rz || void 0 === Rz ? void 0 : Rz.id]);
      if (!tz.enabled) return null;
      const fz = tz.preview,
        sz = tz.arriving,
        rz = null !== sz && !sz.sameSword,
        oz = null !== fz && (0, an.jsx)(An.c, {
          itemName: fz.baseSword,
          amount: 0,
          enchantmentTier: fz.enchantmentTier
        });
      return (0, an.jsx)(Sn.d, {
        show: tz.open,
        close: Mz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Oz,
          onKeyDown: Dn,
          children: [(0, an.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: ll.map(((zz, uz) => (0, an.jsx)("span", {
              style: zz
            }, uz)))
          }), (0, an.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Hz("skyblockGame:forgeTitle")
              }), (0, an.jsx)("p", {
                children: Hz("skyblockGame:forgeIntro")
              })]
            }), (0, an.jsx)(yn.m, {
              onClick: Mz.dismiss
            })]
          }), (0, an.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, an.jsx)("div", {
              ref: pz,
              className: Nn()("SkyblockForgeSlots", {
                Locked: null !== Rz
              }),
              children: tz.slots.map((zz => (0, an.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, an.jsx)("h3", {
                  children: zz.label
                }), (0, an.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: zz.parts.map((uz => (0, an.jsx)("button", {
                    type: "button",
                    className: Nn()("SkyblockForgePart", {
                      Selected: uz.selected,
                      Missing: uz.placeholder
                    }),
                    disabled: uz.placeholder,
                    title: uz.placeholder ? Hz("skyblockGame:forgePickParts") : uz.itemName,
                    "aria-pressed": uz.selected,
                    onClick: () => {
                      Mz.select(zz.kind, uz.material)
                    },
                    children: (0, an.jsx)(An.c, {
                      itemName: uz.itemName,
                      amount: uz.owned
                    })
                  }, uz.material)))
                })]
              }, zz.kind)))
            }), (0, an.jsxs)("div", {
              className: Nn()("SkyblockForgeAnvil", {
                Named: null === fz || void 0 === fz ? void 0 : fz.named
              }),
              style: {
                "--tier": null === fz ? "transparent" : nz.rb[fz.enchantmentTier]
              },
              children: [(0, an.jsxs)("div", {
                className: Nn()("SkyblockForgeAltar", {
                  Forging: null !== Rz
                }),
                style: null === Rz ? void 0 : il,
                children: [(0, an.jsxs)("div", {
                  className: Nn()("SkyblockForgeMount", {
                    Arrive: null !== sz
                  }),
                  children: [null === fz && (0, an.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, an.jsx)(An.c, {
                      itemName: tz.unformedSword,
                      amount: 0
                    })
                  }), null !== fz && (0, an.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== fz && null === Rz && (0, an.jsx)("div", {
                    ref: Fz,
                    className: "SkyblockForgeFloat",
                    children: (0, an.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: oz
                    })
                  }), null !== fz && (0, an.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: HE.map(((zz, uz) => (0, an.jsx)("span", {
                      className: Nn()({
                        Rune: "" !== zz.rune
                      }),
                      style: zz.style,
                      children: zz.rune
                    }, uz)))
                  }), null !== Rz && null !== Xz && (0, an.jsxs)(an.Fragment, {
                    children: [(0, an.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, an.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Xz.flames.map(((zz, uz) => (0, an.jsx)("span", {
                        style: zz
                      }, uz)))
                    }), (0, an.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: Zz.current,
                      children: (0, an.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: oz
                      })
                    }), (0, an.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, an.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (Kz >= 4 || wz) && (0, an.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, an.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Xz.sparks.map(((zz, uz) => (0, an.jsx)("span", {
                        style: zz
                      }, uz)))
                    }), (0, an.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, an.jsx)("p", {
                  className: Nn()("SkyblockForgeStatus", null === (iz = tz.status) || void 0 === iz ? void 0 : iz.tone),
                  children: null === (lz = tz.status) || void 0 === lz ? void 0 : lz.text
                })]
              }), null === fz && (0, an.jsx)("p", {
                className: Nn()("SkyblockForgeName Waiting", {
                  ArriveText: rz
                }),
                children: Hz(tz.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== fz && (0, an.jsx)("h3", {
                ref: dz,
                className: Nn()("SkyblockForgeName", {
                  ArriveText: rz
                }),
                title: fz.name,
                children: fz.name
              }), (null === fz || void 0 === fz ? void 0 : fz.named) && (0, an.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Hz("skyblockGame:forgeSecret")
              }), (0, an.jsxs)(yn.v, {
                className: "SkyblockForgeButton",
                disabled: !tz.canForge,
                title: null === fz ? void 0 : Hz("skyblockGame:forgeCoalOwned", {
                  owned: String(tz.coalOwned)
                }),
                onClick: () => {
                  Zz.current = function(zz) {
                    const uz = null === zz ? "none" : getComputedStyle(zz).transform,
                      bz = new DOMMatrixReadOnly("none" === uz ? void 0 : uz);
                    return {
                      "--settle-y": `${bz.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(bz.b,bz.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(Fz.current), FE(), Mz.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Hz("skyblockGame:forgeButton"), null !== fz && (0, an.jsxs)("span", {
                  className: Nn()("SkyblockForgeCost", {
                    Short: fz.coalShort
                  }),
                  children: [(0, an.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, an.jsx)(An.c, {
                      itemName: kb.d,
                      amount: 0
                    })
                  }), fz.coalCost]
                })]
              })]
            }), (0, an.jsxs)("div", {
              className: Nn()("SkyblockForgeDetails", {
                Named: null === fz || void 0 === fz ? void 0 : fz.named
              }),
              children: [(0, an.jsx)("p", {
                className: Nn()("SkyblockForgeLore", {
                  ArriveText: rz
                }),
                title: null === fz || void 0 === fz ? void 0 : fz.lore,
                children: null === fz || void 0 === fz ? void 0 : fz.lore
              }), (0, an.jsxs)("dl", {
                className: Nn()("SkyblockForgeStats", {
                  ArriveText: rz
                }),
                children: [null === fz && nl.map((zz => (0, an.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, an.jsx)("dt", {
                    children: Hz(zz)
                  }), (0, an.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, zz))), null === fz || void 0 === fz ? void 0 : fz.stats.map((zz => (0, an.jsxs)("div", {
                  className: Nn()("SkyblockForgeStat", {
                    Better: zz.better
                  }),
                  children: [(0, an.jsx)("dt", {
                    children: zz.label
                  }), (0, an.jsx)("dd", {
                    children: zz.value
                  })]
                }, zz.label)))]
              }), (0, an.jsx)("ul", {
                className: Nn()("SkyblockForgeEffects", {
                  ArriveText: rz
                }),
                children: null === fz || void 0 === fz ? void 0 : fz.effects.map((zz => (0, an.jsx)("li", {
                  children: zz
                }, zz)))
              })]
            })]
          })]
        })
      })
    }
    const Hl = "Doom Rivet",
      Ol = "Doom Crest";

    function pl(zz) {
      let {
        itemName: uz,
        amount: bz,
        owned: Ez
      } = zz;
      return (0, an.jsxs)("span", {
        className: Nn()("SkyblockSmugglerPrice", {
          Short: bz > Ez
        }),
        children: [(0, an.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, an.jsx)(An.c, {
            itemName: uz,
            amount: 0
          })
        }), (0, an.jsx)("span", {
          children: bz
        })]
      })
    }

    function dl(zz) {
      return zz.justBought ? "skyblockGame:smugglerJustBought" : zz.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Fl(zz) {
      let {
        deal: uz,
        view: bz,
        buy: Ez
      } = zz;
      const {
        t: nz
      } = (0, Pn.F)();
      return (0, an.jsxs)("div", {
        className: Nn()("SkyblockSmugglerPocket", {
          Bought: uz.justBought,
          Unaffordable: !uz.affordable,
          SoldOut: uz.soldOut && !uz.justBought
        }),
        children: [(0, an.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, an.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, an.jsx)(An.c, {
            itemName: uz.itemName,
            amount: 0,
            enchantmentTier: uz.enchantmentTier
          }), uz.amount > 1 && (0, an.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: nz("skyblockGame:smugglerAmount", {
              amount: uz.amount
            })
          })]
        }), (0, an.jsx)("h3", {
          children: uz.displayName
        }), (0, an.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, an.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [uz.rivets > 0 && (0, an.jsx)(pl, {
              itemName: Hl,
              amount: uz.rivets,
              owned: bz.rivetsOwned
            }), uz.crests > 0 && (0, an.jsx)(pl, {
              itemName: Ol,
              amount: uz.crests,
              owned: bz.crestsOwned
            })]
          }), (0, an.jsx)(yn.f, {
            className: "SkyblockSmugglerBuy",
            disabled: uz.soldOut || !uz.affordable || bz.pending,
            onClick: () => {
              Ez(uz.slot)
            },
            children: nz(dl(uz))
          })]
        })]
      }, uz.justBought ? bz.boughtCount : 0)
    }

    function Zl(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(wE, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = Qn();
      return bz.enabled ? (0, an.jsx)(Sn.d, {
        show: bz.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: nz,
          onKeyDown: Dn,
          children: [(0, an.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, an.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, an.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Ez("skyblockGame:smugglerTitle")
              }), (0, an.jsx)("p", {
                children: Ez("skyblockGame:smugglerIntro")
              })]
            }), (0, an.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, an.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, an.jsx)(pl, {
                  itemName: Hl,
                  amount: bz.rivetsOwned,
                  owned: bz.rivetsOwned
                }), (0, an.jsx)(pl, {
                  itemName: Ol,
                  amount: bz.crestsOwned,
                  owned: bz.crestsOwned
                })]
              }), (0, an.jsx)(yn.m, {
                onClick: uz.dismiss
              })]
            })]
          }), (0, an.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: bz.deals.map((zz => (0, an.jsx)(Fl, {
              deal: zz,
              view: bz,
              buy: uz.buy
            }, zz.slot)))
          }), (0, an.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, an.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: bz.rotatesText
            }), null !== bz.status && (0, an.jsx)("span", {
              className: Nn()("SkyblockSmugglerStatus", bz.status.tone),
              children: bz.status.text
            })]
          })]
        })
      }) : null
    }

    function Rl(zz) {
      let {
        phase: uz,
        className: bz
      } = zz;
      return (0, an.jsx)("span", {
        className: Nn()("SkyblockMoon", `Moon-${uz}`, bz),
        "aria-hidden": "true"
      })
    }

    function Kl(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(sE, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)();
      return bz.enabled ? (0, an.jsx)(xn.d, {
        placement: "statBars",
        children: (0, an.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Nn()("SkyblockPassageChip", bz.open && "Open"),
          "aria-label": Ez("skyblockGame:passageChipLabel", {
            phase: bz.phaseName
          }),
          title: Ez("skyblockGame:passageChipLabel", {
            phase: bz.phaseName
          }),
          onMouseDown: zz => {
            zz.preventDefault()
          },
          onClick: uz.toggle,
          children: (0, an.jsx)(Rl, {
            phase: bz.phase
          }, bz.phase)
        })
      }) : null
    }

    function wl(zz) {
      let {
        fish: uz
      } = zz;
      return (0, an.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, an.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, an.jsx)(An.c, {
            itemName: uz.itemName,
            amount: 0
          })
        }), (0, an.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, an.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: uz.displayName
          }), (0, an.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: uz.where
          })]
        })]
      })
    }

    function Xl(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(sE, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = Qn();
      return bz.enabled ? (0, an.jsx)(Sn.d, {
        show: bz.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: nz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, an.jsx)(Rl, {
              phase: bz.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Ez("skyblockGame:passageTitle")
              }), (0, an.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: bz.phaseName
              })]
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              onClick: uz.dismiss
            })]
          }), (0, an.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Ez("skyblockGame:passageIntro")
          }), (0, an.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, an.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, an.jsx)("h3", {
                children: Ez("skyblockGame:passageVisiting")
              }), (0, an.jsx)("ul", {
                className: "SkyblockPassageList",
                children: bz.visitors.map((zz => (0, an.jsx)(wl, {
                  fish: zz
                }, zz.itemName)))
              })]
            }), (0, an.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== bz.resting && (0, an.jsxs)(an.Fragment, {
                children: [(0, an.jsx)("h3", {
                  children: Ez("skyblockGame:passageResting")
                }), (0, an.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, an.jsx)(wl, {
                    fish: bz.resting
                  })
                })]
              }), (0, an.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, an.jsx)(Rl, {
                  phase: bz.nextPhase
                }), (0, an.jsx)("span", {
                  children: bz.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function fl() {
      return (0, an.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((zz => (0, an.jsx)("i", {
          style: {
            "--sparkle-index": zz
          }
        }, zz)))
      })
    }

    function sl(zz) {
      var uz;
      let {
        charm: bz,
        view: Ez,
        controller: nz
      } = zz;
      const {
        t: iz
      } = (0, Pn.F)(), lz = Ez.shop, Mz = (null === (uz = Ez.sparkle) || void 0 === uz ? void 0 : uz.id) === bz.id;
      return (0, an.jsxs)("li", {
        className: Nn()("SkyblockLampLightCharm", bz.owned && "Owned", bz.socketed && "Socketed"),
        children: [Mz && (0, an.jsx)(fl, {}, Ez.sparkle.count), (0, an.jsx)("h4", {
          children: bz.name
        }), (0, an.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: bz.effect
        }), (0, an.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: bz.lines.map((zz => (0, an.jsxs)("li", {
            className: Nn()("SkyblockLampLightOddsLine", "better" === zz.tone ? "Better" : "worse" === zz.tone ? "Worse" : "Same"),
            children: [(0, an.jsx)("span", {
              className: "Before",
              children: zz.before
            }), (0, an.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, an.jsx)("span", {
              className: "After",
              children: zz.after
            })]
          }, zz.label)))
        }), (0, an.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: bz.owned ? bz.socketed ? (0, an.jsxs)(an.Fragment, {
            children: [(0, an.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: iz("skyblockGame:lampLightSocketed")
            }), (0, an.jsx)(yn.V, {
              disabled: !Ez.canCommand,
              ariaLabel: iz("skyblockGame:lampLightRemoveLabel", {
                charm: bz.name
              }),
              onClick: () => {
                nz.socket(null)
              },
              children: iz("skyblockGame:lampLightRemove")
            })]
          }) : (0, an.jsx)(yn.f, {
            disabled: !Ez.canCommand || !lz.heldRod,
            ariaLabel: iz("skyblockGame:lampLightSocketLabel", {
              charm: bz.name
            }),
            onClick: () => {
              nz.socket(bz.id)
            },
            children: iz("skyblockGame:lampLightSocket")
          }) : (0, an.jsx)(yn.f, {
            disabled: !Ez.canCommand || !bz.affordable,
            ariaLabel: iz("skyblockGame:lampLightBuyLabel", {
              item: bz.name,
              cost: bz.cost
            }),
            onClick: () => {
              nz.buy(bz.id)
            },
            children: bz.cost
          })
        })]
      })
    }

    function rl(zz) {
      var uz;
      let {
        tint: bz,
        view: Ez,
        controller: nz
      } = zz;
      const {
        t: iz
      } = (0, Pn.F)();
      return (0, an.jsxs)("li", {
        className: Nn()("SkyblockLampLightTint", bz.wearing && "Wearing"),
        style: {
          "--tint-colour": bz.colour
        },
        children: [(null === (uz = Ez.sparkle) || void 0 === uz ? void 0 : uz.id) === bz.id && (0, an.jsx)(fl, {}, Ez.sparkle.count), (0, an.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, an.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: bz.name
        }), bz.wearing ? (0, an.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: iz("skyblockGame:lampLightWearing")
        }) : (0, an.jsx)(yn.f, {
          disabled: !Ez.canCommand || !bz.owned && !bz.affordable,
          ariaLabel: bz.owned ? iz("skyblockGame:lampLightWearLabel", {
            tint: bz.name
          }) : iz("skyblockGame:lampLightBuyLabel", {
            item: bz.name,
            cost: bz.cost
          }),
          onClick: () => {
            bz.owned ? nz.wearTint(bz.id) : nz.buy(bz.id)
          },
          children: bz.owned ? iz("skyblockGame:lampLightWear") : bz.cost
        })]
      })
    }

    function ol(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(mE, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = bz.shop;
      return (0, an.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, an.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, an.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: bz.balance
          }), (0, an.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": bz.releasing,
            className: Nn()("SkyblockLampLightSwitch", bz.releasing && "On"),
            disabled: bz.releasing ? "ready" !== bz.status : !bz.canCommand,
            onClick: () => {
              uz.setRelease(!bz.releasing)
            },
            children: [(0, an.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, an.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Ez("skyblockGame:lampLightRelease")]
          }), (0, an.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Ez("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== bz.notice && (0, an.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: bz.notice
        }), null !== nz && (0, an.jsxs)(an.Fragment, {
          children: [(0, an.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, an.jsx)("h3", {
              children: Ez("skyblockGame:lampLightCharms")
            }), (0, an.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: nz.oddsFor
            }), (0, an.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((zz => (0, an.jsx)("button", {
                type: "button",
                "aria-pressed": bz.situation === zz,
                className: Nn()("SkyblockLampLightSituation", bz.situation === zz && "Selected"),
                onClick: () => {
                  uz.setSituation(zz)
                },
                children: Ez("open" === zz ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, zz)))
            })]
          }), !nz.heldRod && (0, an.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Ez("skyblockGame:lampLightHoldRod")
          }), (0, an.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: nz.charms.map((zz => (0, an.jsx)(sl, {
              charm: zz,
              view: bz,
              controller: uz
            }, zz.id)))
          }), (0, an.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, an.jsx)("h3", {
              children: Ez("skyblockGame:lampLightTints")
            })
          }), (0, an.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, an.jsxs)("li", {
              className: Nn()("SkyblockLampLightTint", "Islands", nz.wearingIslandColours && "Wearing"),
              children: [(0, an.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, an.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Ez("skyblockGame:lampLightIslandColours")
              }), nz.wearingIslandColours ? (0, an.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Ez("skyblockGame:lampLightWearing")
              }) : (0, an.jsx)(yn.f, {
                disabled: !bz.canCommand,
                ariaLabel: Ez("skyblockGame:lampLightWearLabel", {
                  tint: Ez("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  uz.wearTint(null)
                },
                children: Ez("skyblockGame:lampLightWear")
              })]
            }), nz.tints.map((zz => (0, an.jsx)(rl, {
              tint: zz,
              view: bz,
              controller: uz
            }, zz.id)))]
          })]
        })]
      })
    }

    function Nl(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(mE, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)();
      return bz.releasing ? (0, an.jsx)(xn.d, {
        children: (0, an.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            uz.setRelease(!1)
          },
          children: [(0, an.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, an.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Ez("skyblockGame:lampLightReleasing"), " \xb7 ", bz.balance]
          }), (0, an.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Ez("skyblockGame:lampLightKeepCatches")
          }), null !== bz.gained && (0, an.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: bz.gained.text
          }, bz.gained.count)]
        })
      }) : null
    }

    function vl(zz) {
      let {
        island: uz,
        view: bz,
        aim: Ez
      } = zz;
      const {
        t: nz
      } = (0, Pn.F)(), iz = uz.featuredFish;
      return (0, an.jsxs)("li", {
        className: Nn()("SkyblockKeepersChairIsland", `Island-${uz.id}`, uz.favoured && "Aimed", !uz.relit && "Dark"),
        children: [(0, an.jsx)("h3", {
          children: uz.name
        }), uz.relit && null !== iz ? (0, an.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, an.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: nz("skyblockGame:keepersChairTideNotice")
          }), (0, an.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, an.jsx)(An.c, {
              itemName: iz.itemName,
              amount: 0
            })
          }), (0, an.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: iz.displayName
          })]
        }) : (0, an.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, an.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: nz("skyblockGame:keepersChairDark")
          })
        }), uz.relit && (uz.favoured ? (0, an.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: nz("skyblockGame:keepersChairAimed")
        }) : (0, an.jsx)(yn.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !bz.canAim,
          ariaLabel: nz("skyblockGame:keepersChairAimLabel", {
            island: uz.name
          }),
          onClick: () => {
            Ez(uz.id)
          },
          children: nz("skyblockGame:keepersChairAim")
        }))]
      }, uz.favoured ? bz.aimedCount : 0)
    }

    function xl(zz) {
      let {
        controller: uz,
        lampLight: bz
      } = zz;
      const Ez = (0, Gn.h)(JE, uz.getSnapshot()),
        nz = (0, Gn.h)(mE, bz.getSnapshot()),
        [iz, lz] = (0, xz.useState)("lamp"),
        {
          t: Mz
        } = (0, Pn.F)(),
        tz = Qn();
      if (!Ez.enabled) return null;
      const Hz = "light" === iz && nz.enabled;
      return (0, an.jsx)(Sn.d, {
        show: Ez.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: Nn()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Hz && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: tz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: Mz("skyblockGame:keepersChairTitle")
              }), (0, an.jsx)("p", {
                children: Mz(Hz ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              ariaLabel: Mz("skyblockGame:keepersChairClose"),
              onClick: uz.dismiss
            })]
          }), nz.enabled && (0, an.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((zz => (0, an.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === zz === Hz,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === zz === Hz ? "true" : void 0,
              className: Nn()("SkyblockKeepersChairTab", "light" === zz === Hz && "Selected"),
              onClick: () => {
                lz(zz)
              },
              children: [Mz("lamp" === zz ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === zz && (0, an.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: nz.balance
              })]
            }, zz)))
          }), Hz ? (0, an.jsx)(ol, {
            controller: bz
          }) : (0, an.jsx)(Jl, {
            view: Ez,
            controller: uz
          })]
        })
      })
    }

    function Jl(zz) {
      let {
        view: uz,
        controller: bz
      } = zz;
      const {
        t: Ez
      } = (0, Pn.F)();
      return (0, an.jsxs)(an.Fragment, {
        children: [(0, an.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: uz.islands.map((zz => (0, an.jsx)(vl, {
            island: zz,
            view: uz,
            aim: bz.aim
          }, zz.id)))
        }), null !== uz.almanac && (0, an.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, an.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Ez("skyblockGame:passageTitle")
          }), (0, an.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, an.jsx)(Rl, {
              phase: uz.almanac.phase
            }), uz.almanac.phaseName]
          }), (0, an.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, an.jsx)(Rl, {
              phase: uz.almanac.nextPhase
            }), uz.almanac.next]
          })]
        }), (0, an.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, an.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Ez("skyblockGame:keepersChairFavour")
          }), uz.aimed && (0, an.jsx)(yn.V, {
            className: "SkyblockKeepersChairRest",
            disabled: !uz.canAim,
            onClick: () => {
              bz.aim(null)
            },
            children: Ez("skyblockGame:keepersChairRest")
          })]
        }), null !== uz.status && (0, an.jsx)("p", {
          className: Nn()("SkyblockKeepersChairStatus", "refused" === uz.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: uz.status.text
        })]
      })
    }

    function Al(zz) {
      let {
        controller: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)(), Ez = (0, Gn.h)(TE, uz.getSnapshot());
      if (!Ez.enabled) return null;
      const nz = Ez.freshCount > 0 ? bz("skyblockGame:reachLogOpenNews", {
        count: Ez.freshCount
      }) : bz("skyblockGame:reachLogOpen");
      return (0, an.jsx)(xn.d, {
        placement: "statBars",
        children: (0, an.jsxs)("button", {
          type: "button",
          className: Nn()("SkyblockReachLogButton", Ez.freshCount > 0 && "HasNews", Ez.pending && "Pending"),
          "aria-label": nz,
          title: nz,
          onClick: uz.ask,
          children: [Ez.news && (0, an.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Ez.newsToken}`), (0, an.jsx)("span", {
            className: Nn()("SkyblockReachLogIcon", Ez.news && "Jump"),
            "aria-hidden": "true",
            children: (0, an.jsx)(An.c, {
              itemName: PE,
              amount: 0
            })
          }, `icon:${Ez.newsToken}`), Ez.freshCount > 0 && (0, an.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Ez.freshCount
          })]
        })
      })
    }

    function Tl(zz) {
      let {
        gift: uz
      } = zz;
      return (0, an.jsx)("li", {
        className: Nn()("SkyblockRegularsGift", uz.given && "Given"),
        children: uz.text
      })
    }

    function Ll(zz) {
      let {
        regular: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)();
      return (0, an.jsxs)("li", {
        className: Nn()("SkyblockRegularsCard", uz.tagged ? "Tagged" : "Untagged", uz.resting && "Resting"),
        children: [(0, an.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, an.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: uz.fishName,
            children: (0, an.jsx)(An.c, {
              itemName: uz.itemName,
              amount: 0
            })
          }), (0, an.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, an.jsx)("h3", {
              children: uz.name
            }), (0, an.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: uz.fishName
            })]
          })]
        }), (0, an.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: uz.line
        }), (0, an.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, an.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: uz.size
          }), uz.tagged && (0, an.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: uz.resting ? bz("skyblockGame:regularsResting") : uz.meetings
          })]
        }), (0, an.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: uz.chance
        }), (0, an.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: uz.gifts.map((zz => (0, an.jsx)(Tl, {
            gift: zz
          }, zz.text)))
        }), uz.history.length > 0 && (0, an.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: uz.history.map(((zz, uz) => (0, an.jsx)("li", {
            children: zz
          }, uz)))
        })]
      })
    }

    function Pl(zz) {
      let {
        controller: uz,
        island: bz
      } = zz;
      const {
        t: Ez
      } = (0, Pn.F)(), nz = (0, Gn.h)(zn, uz.getSnapshot()), iz = nz.islands.find((zz => zz.id === bz));
      if (!nz.enabled || void 0 === iz) return null;
      const lz = Ez("skyblockGame:regularsOpen");
      return (0, an.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": lz,
        title: lz,
        onClick: () => {
          uz.openIsland(bz)
        },
        children: [(0, an.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Ez("skyblockGame:regularsTitle")
        }), iz.regulars.map((zz => (0, an.jsx)("span", {
          className: Nn()("SkyblockRegularsStripIcon", zz.tagged && "Tagged"),
          title: zz.name,
          children: (0, an.jsx)(An.c, {
            itemName: zz.itemName,
            amount: 0
          })
        }, zz.id)))]
      })
    }

    function Gl(zz) {
      var uz;
      let {
        controller: bz
      } = zz;
      const Ez = (0, Gn.h)(zn, bz.getSnapshot()),
        {
          t: nz
        } = (0, Pn.F)(),
        iz = Qn();
      if (!Ez.enabled) return null;
      const lz = null !== (uz = Ez.islands.find((zz => zz.id === Ez.selected))) && void 0 !== uz ? uz : null;
      return (0, an.jsx)(Sn.d, {
        show: Ez.open,
        close: bz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: iz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: nz("skyblockGame:regularsTitle")
              }), (0, an.jsx)("p", {
                children: nz("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              onClick: bz.dismiss
            })]
          }), (0, an.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Ez.islands.map((zz => {
              const uz = zz.id === Ez.selected;
              return (0, an.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": uz,
                "data-pad-tab": !0,
                "data-pad-selected": uz ? "true" : void 0,
                className: Nn()("SkyblockReachLogTab", `Island-${zz.id}`, uz && "Selected", zz.charm.given && "GoldPage"),
                onClick: () => {
                  bz.selectIsland(zz.id)
                },
                children: (0, an.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: zz.name
                })
              }, zz.id)
            }))
          }), (0, an.jsxs)("div", {
            className: Nn()("SkyblockRegularsPage", null !== lz && `Island-${lz.id}`),
            role: "tabpanel",
            children: [(0, an.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: nz("skyblockGame:regularsHow")
            }), null !== lz && (0, an.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: lz.regulars.map((zz => (0, an.jsx)(Ll, {
                regular: zz
              }, zz.id)))
            })]
          }), null !== lz && (0, an.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, an.jsx)("span", {
              className: Nn()("SkyblockRegularsCharm", lz.charm.given && "Given"),
              children: lz.charm.text
            })
          })]
        })
      })
    }
    const al = [{
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
      Vl = Array.from({
        length: 6
      }, ((zz, uz) => ({
        "--x": `${(88*(.618034*uz%1)).toFixed(1)}%`,
        "--y": `${(10+37*uz%70).toFixed(1)}%`,
        "--size": 7 + uz % 3 * 3 + "rem",
        "--drift-x": 3 * (uz % 3 - 1) + "rem",
        "--drift-y": 2 * (uz % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + uz % 4 * 3 + "s",
        "--delay": 2.5 * -uz + "s"
      }))),
      ml = Array.from({
        length: 14
      }, ((zz, uz) => ({
        "--left": `${(3+94*((.618034*uz+.3)%1)).toFixed(1)}%`,
        "--size": 4 + uz % 4 * 2 + "px",
        "--sway": uz % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*uz%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*uz%12).toFixed(2)}s`
      }))),
      ql = (0, xz.memo)((function(zz) {
        let {
          island: uz
        } = zz;
        return (0, an.jsxs)("div", {
          className: Nn()("SkyblockReachLogDepths", null !== uz && `Island-${uz}`),
          "aria-hidden": "true",
          children: [al.map(((zz, uz) => (0, an.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: zz
          }, `shaft${uz}`))), Vl.map(((zz, uz) => (0, an.jsx)("span", {
            className: Nn()("SkyblockReachLogMote", uz % 2 === 1 && "Violet"),
            style: zz
          }, `mote${uz}`))), ml.map(((zz, uz) => (0, an.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: zz
          }, `bubble${uz}`)))]
        })
      })),
      hl = 100;

    function Ul(zz) {
      let {
        view: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)();
      if (null === uz || 0 === uz.total) return null;
      const Ez = hl * uz.aspect,
        nz = bz("skyblockGame:hiddenWatersCount", {
          found: uz.found,
          total: uz.total
        });
      return (0, an.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${bz("skyblockGame:hiddenWatersTitle")}: ${nz}`,
        children: [(0, an.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Ez}`,
          "aria-hidden": "true",
          children: [uz.islands.map(((zz, uz) => (0, an.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (zz.left + zz.width / 2) * hl,
            cy: (zz.top + zz.height / 2) * Ez,
            rx: zz.width / 2 * hl,
            ry: zz.height / 2 * Ez
          }, uz))), uz.pins.map(((zz, uz) => (0, an.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: zz.left * hl,
            cy: zz.top * Ez,
            r: 13
          }, uz)))]
        }), (0, an.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, an.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: bz("skyblockGame:hiddenWatersTitle")
          }), (0, an.jsx)("span", {
            className: uz.found === uz.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: nz
          })]
        })]
      })
    }

    function cl(zz) {
      let {
        view: uz,
        island: bz
      } = zz;
      const {
        t: Ez
      } = (0, Pn.F)(), nz = null === uz || void 0 === uz ? void 0 : uz.glimpses.get(bz);
      return void 0 === nz || 0 === nz.length ? null : (0, an.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, an.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Ez("skyblockGame:hiddenWatersGlimpsed")
        }), (0, an.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: nz.map((zz => (0, an.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, an.jsx)(An.c, {
              itemName: zz,
              amount: 0
            })
          }, zz)))
        })]
      })
    }
    const gl = ["Bronze", "Silver", "Gold"],
      Sl = [{
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
      yl = Sl.slice(0, 2);

    function Dl(zz) {
      return zz ? Sl : yl
    }

    function Ql(zz) {
      let {
        fish: uz,
        letGoShown: bz
      } = zz;
      const {
        t: Ez
      } = (0, Pn.F)();
      return (0, an.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [gl.map(((zz, bz) => {
          const nz = bz < uz.marks;
          return (0, an.jsx)("span", {
            className: Nn()("SkyblockReachLogPip", zz, nz && "Earned", nz && uz.fresh && bz === uz.marks - 1 && "Newest"),
            title: Ez(LE[bz])
          }, zz)
        })), (0, an.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Dl(bz).map(((zz, bz) => (0, an.jsx)("span", {
          className: Nn()("SkyblockReachLogRibbon", zz.className, !0 === uz.ribbons[bz] && "Earned"),
          title: Ez(zz.titleKey)
        }, zz.className)))]
      })
    }

    function Wl(zz) {
      let {
        letGoShown: uz,
        haloShown: bz
      } = zz;
      const {
        t: Ez
      } = (0, Pn.F)();
      return (0, an.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, an.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ez("skyblockGame:reachLogMarks"),
          children: [(0, an.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Ez("skyblockGame:reachLogLegendMarks")]
        }), Dl(uz).map((zz => (0, an.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ez(zz.titleKey),
          children: [(0, an.jsx)("span", {
            className: Nn()("SkyblockReachLogRibbon", zz.className, "Earned")
          }), Ez(zz.legendKey)]
        }, zz.className))), (0, an.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ez("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, an.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Ez("skyblockGame:reachLogLegendGlimmer")]
        }), bz && (0, an.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Ez("skyblockGame:reachLogHaloTitle"),
          children: [(0, an.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Ez("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function el(zz) {
      let {
        returner: uz
      } = zz;
      return (0, an.jsxs)("div", {
        className: Nn()("SkyblockReachLogReturner", uz.back && "Back"),
        children: [(0, an.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, an.jsx)(An.c, {
            itemName: uz.itemName,
            amount: 0
          })
        }), (0, an.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: uz.line
        })]
      })
    }

    function jl(zz) {
      let {
        fish: uz,
        letGoShown: bz
      } = zz;
      const {
        t: Ez
      } = (0, Pn.F)();
      return (0, an.jsxs)("li", {
        className: Nn()("SkyblockReachLogCard", uz.caught ? "Caught" : "Unknown", uz.marks >= 3 && "GoldCard", uz.fresh && "Fresh", uz.visitor && "Visitor"),
        children: [uz.visitor && (0, an.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Ez("skyblockGame:reachLogVisitor")
        }), uz.fresh && Array.from({
          length: 4
        }, ((zz, uz) => (0, an.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, uz))), (0, an.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [uz.halo && (0, an.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Ez("skyblockGame:reachLogHaloTitle")
          }), (0, an.jsx)(An.c, {
            itemName: uz.itemName,
            amount: 0
          }), uz.glimmer && (0, an.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Ez("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, an.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: uz.name
        }), (0, an.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: uz.chance
        }), (0, an.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: uz.best
        }), (0, an.jsx)(Ql, {
          fish: uz,
          letGoShown: bz
        })]
      })
    }

    function Il(zz) {
      let {
        page: uz,
        letGoShown: bz,
        hiddenWaters: Ez
      } = zz;
      const {
        t: nz
      } = (0, Pn.F)();
      return uz.awake ? (0, an.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: uz.fish.map((zz => (0, an.jsx)(jl, {
          fish: zz,
          letGoShown: bz
        }, zz.itemName)))
      }) : (0, an.jsxs)(an.Fragment, {
        children: [(0, an.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: nz("skyblockGame:reachLogAsleep")
        }), (0, an.jsx)(cl, {
          view: Ez,
          island: uz.id
        })]
      })
    }

    function Bl(zz) {
      var uz, bz;
      let {
        controller: Ez,
        regulars: nz,
        hiddenWaters: iz
      } = zz;
      const lz = (0, Gn.h)(TE, Ez.getSnapshot()),
        Mz = function(zz) {
          return (0, Gn.h)(Mn, zz.getSnapshot())
        }(iz),
        tz = (0, Gn.h)(zn, nz.getSnapshot()),
        {
          t: Hz
        } = (0, Pn.F)(),
        Oz = Qn();
      if (!lz.enabled) return null;
      const pz = null !== (uz = lz.pages.find((zz => zz.id === lz.selected))) && void 0 !== uz ? uz : null;
      return (0, an.jsx)(Sn.d, {
        show: lz.open,
        close: Ez.dismiss,
        togglePointerLock: !1,
        className: Nn()("SkyblockSkillsOverlay", tz.open && "SkyblockReachLogUnderLedger"),
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Oz,
          onKeyDown: Dn,
          children: [(0, an.jsx)(ql, {
            island: null !== (bz = null === pz || void 0 === pz ? void 0 : pz.id) && void 0 !== bz ? bz : null
          }), (0, an.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Hz("skyblockGame:reachLogTitle")
              }), (0, an.jsx)("p", {
                children: Hz("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, an.jsx)(Ul, {
              view: Mz
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              onClick: Ez.dismiss
            })]
          }), (0, an.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: lz.pages.map((zz => {
              const uz = zz.id === lz.selected,
                bz = zz.fish.some((zz => zz.fresh));
              return (0, an.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": uz,
                "data-pad-tab": !0,
                "data-pad-selected": uz ? "true" : void 0,
                className: Nn()("SkyblockReachLogTab", `Island-${zz.id}`, uz && "Selected", !zz.awake && "Asleep", zz.gold && "GoldPage", bz && "HasNews"),
                onClick: () => {
                  Ez.selectPage(zz.id)
                },
                children: [(0, an.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: zz.name
                }), zz.awake && (0, an.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Hz("skyblockGame:reachLogCaughtCount", {
                    caught: zz.caught,
                    total: zz.total
                  })
                })]
              }, zz.id)
            }))
          }), (0, an.jsxs)("div", {
            className: Nn()("SkyblockReachLogPage", null !== pz && `Island-${pz.id}`),
            role: "tabpanel",
            children: [null !== pz && (0, an.jsx)(Il, {
              page: pz,
              letGoShown: lz.letGoShown,
              hiddenWaters: Mz
            }), !0 === (null === pz || void 0 === pz ? void 0 : pz.awake) && null !== pz.returner && (0, an.jsx)(el, {
              returner: pz.returner
            }), !0 === (null === pz || void 0 === pz ? void 0 : pz.awake) && (0, an.jsx)(Pl, {
              controller: nz,
              island: pz.id
            })]
          }), (0, an.jsx)("footer", {
            className: Nn()("SkyblockReachLogFooter", null !== pz && `Island-${pz.id}`, !0 === (null === pz || void 0 === pz ? void 0 : pz.gold) && "GoldPage"),
            children: !0 === (null === pz || void 0 === pz ? void 0 : pz.gold) ? (0, an.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Hz("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, an.jsxs)(an.Fragment, {
              children: [(0, an.jsx)(Wl, {
                letGoShown: lz.letGoShown,
                haloShown: !0 === (null === pz || void 0 === pz ? void 0 : pz.fish.some((zz => zz.halo)))
              }), (0, an.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Hz("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Cl = bz(4590);

    function Yl(zz) {
      let {
        conversation: uz,
        completedLabel: bz
      } = zz;
      return (0, an.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, an.jsxs)("header", {
          children: [(0, an.jsx)("h3", {
            children: uz.questName
          }), uz.completed && (0, an.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: bz
          })]
        }), uz.lines.map((zz => (0, an.jsx)(Cl.b, {
          display: zz.display
        }, zz.key)))]
      })
    }

    function kl(zz) {
      let {
        controller: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)(), Ez = (0, Gn.h)(Hn, uz.getSnapshot()), nz = Qn();
      if (!Ez.enabled) return null;
      const iz = !Ez.loading && 0 === Ez.conversations.length;
      return (0, an.jsx)(Sn.d, {
        show: Ez.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: nz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: bz("skyblockDialogue:title")
              }), (0, an.jsx)("p", {
                children: bz("skyblockDialogue:intro")
              })]
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              onClick: uz.dismiss
            })]
          }), (0, an.jsxs)("div", {
            className: Nn()("SkyblockDialogueBody", {
              SingleColumn: null !== Ez.questFocus || 0 === Ez.characters.length
            }),
            children: [null === Ez.questFocus && Ez.characters.length > 0 && (0, an.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Ez.characters.map((zz => (0, an.jsx)(yn.f, {
                className: Nn()("SkyblockDialogueCharacter", {
                  Selected: zz.selected
                }),
                onClick: () => {
                  uz.selectCharacter(zz.id)
                },
                children: (0, an.jsx)(Tn.b, {
                  text: zz.styling
                })
              }, zz.id)))
            }), (0, an.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Ez.questFocus && (0, an.jsx)(yn.f, {
                className: "SkyblockDialogueBack",
                onClick: uz.showCharacters,
                children: bz("skyblockDialogue:allCharacters")
              }), Ez.loading && (0, an.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: bz("skyblockDialogue:loading")
              }), iz && (0, an.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: bz(null === Ez.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Ez.conversations.map((zz => (0, an.jsx)(Yl, {
                conversation: zz,
                completedLabel: Ez.completedLabel
              }, zz.questId)))]
            })]
          })]
        })
      })
    }

    function zM(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(Zn, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = Qn();
      return bz.enabled ? (0, an.jsx)(Sn.d, {
        show: bz.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: nz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Ez("skyblockGame:autographBook")
              }), (0, an.jsx)("p", {
                children: Ez("skyblockGame:autographBookIntro")
              })]
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              onClick: uz.dismiss
            })]
          }), (0, an.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, an.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, an.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, an.jsx)("strong", {
                  children: bz.total
                }), (0, an.jsx)("span", {
                  children: Ez("skyblockGame:autographTotal")
                })]
              }), (0, an.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, an.jsx)("strong", {
                  children: bz.rankTotal
                }), (0, an.jsx)("span", {
                  children: Ez("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === bz.entries.length ? (0, an.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Ez("skyblockGame:autographBookEmpty")
            }) : (0, an.jsx)("ul", {
              className: "SkyblockAutographList",
              children: bz.entries.map((zz => (0, an.jsxs)("li", {
                className: Nn()("SkyblockAutograph", {
                  Ranked: null !== zz.rank
                }),
                style: null === zz.rank ? void 0 : {
                  color: zz.rank.colour
                },
                children: [null !== zz.rank && (0, an.jsx)(Ki.c, {
                  className: "SkyblockAutographRankIcon",
                  name: zz.rank.icon,
                  kit: (0, Ki.e)(zz.rank.icon)
                }), (0, an.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, an.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: zz.name
                  }), (0, an.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== zz.rank && (0, an.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: zz.rank.label
                    }), (0, an.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: zz.signedOn
                    })]
                  })]
                })]
              }, zz.key)))
            })]
          })]
        })
      }) : null
    }
    const uM = (0, xz.memo)((function(zz) {
        let {
          controller: uz
        } = zz;
        return (0, an.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: uz.display.mountWaypoint,
          children: [(0, an.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, an.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, an.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, an.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, an.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, an.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      bM = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function EM(zz) {
      return "next" === zz.phase ? "\u2192" : bM[zz.kind]
    }
    const nM = (0, xz.memo)((function(zz) {
      let {
        controller: uz,
        display: bz
      } = zz;
      const Ez = (0, Gn.h)(Ob, uz.getNotificationSnapshot()),
        [nz, iz] = (0, xz.useState)(!1);
      return (0, Gn.g)("qteStateUpdated", (zz => {
        iz(zz.isActive)
      })), (0, an.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (nz ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Ez && (0, an.jsxs)("div", {
          className: `SkyblockQuestNotification ${Ez.kind} ${Ez.phase}`,
          style: {
            "--quest-notification-duration": `${Ez.durationMs}ms`,
            ...Ez.accent && {
              "--quest-notification-accent": Ez.accent
            }
          },
          children: [(0, an.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Ez.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, an.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: EM(Ez)
            }), Ez.iconItem && (0, an.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, an.jsx)(An.c, {
                itemName: Ez.iconItem,
                amount: 0
              })
            })]
          }), (0, an.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, an.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Ez.title
            }), (0, an.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, an.jsx)(ti.b, {
                text: Ez.name
              })
            }), Ez.description && (0, an.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, an.jsx)(ti.b, {
                text: Ez.description
              })
            }), Ez.reward && (0, an.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, an.jsx)(ti.b, {
                text: Ez.reward
              })
            })]
          })]
        }, Ez.token), (null === Ez || void 0 === Ez ? void 0 : Ez.waypointNameKey) && (0, an.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Ez.waypointNameKey,
          "data-notification-token": Ez.token,
          ref: bz.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Ez.token}`)]
      })
    }));

    function iM(zz) {
      const uz = parseInt(zz.replace("#", ""), 16);
      return `${uz>>16&255}, ${uz>>8&255}, ${255&uz}`
    }
    const lM = (0, xz.memo)((function(zz) {
      let {
        controller: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)(), Ez = (0, Gn.h)(hb, uz.getSnapshot());
      if (!Ez) return null;
      const nz = "arrival" === Ez.phase;
      return (0, an.jsxs)("div", {
        className: Nn()("SkyblockPortalTransit", {
          Departure: !nz,
          Arrival: nz
        }),
        style: {
          "--portal-rgb": iM(Ez.colour),
          "--portal-duration": `${Ez.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, an.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, an.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            uz.finishArrival(Ez.token)
          }
        }), (0, an.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, an.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !nz && (0, an.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: bz("skyblockGame:portalTransitHeading")
          }), (0, an.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: bz(Ez.zoneNameKey)
          })]
        })]
      }, Ez.token)
    }));

    function MM() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function tM() {
      const zz = document.querySelector(".SkyblockHudCoins"),
        uz = null === zz || void 0 === zz ? void 0 : zz.getBoundingClientRect();
      return uz && uz.width > 0 ? {
        x: uz.left + Math.min(uz.width, 24) / 2,
        y: uz.top + uz.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function HM(zz) {
      return {
        x: zz.left + zz.width / 2,
        y: zz.top + zz.height / 2
      }
    }

    function OM() {
      var zz;
      const uz = null === (zz = document.querySelector(".HotBar")) || void 0 === zz ? void 0 : zz.getBoundingClientRect();
      return uz && uz.width > 0 ? HM(uz) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function pM(zz) {
      let {
        items: uz,
        origins: bz,
        target: Ez
      } = zz;
      return (0, an.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: uz.map(((zz, uz) => {
          const nz = bz[uz];
          return (0, an.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${nz.x}px`,
              top: `${nz.y}px`,
              "--item-dx": Ez.x - nz.x + "px",
              "--item-dy": Ez.y - nz.y + "px",
              "--item-delay": 2e3 + 160 * uz + "ms",
              "--item-flight": "700ms"
            },
            children: (0, an.jsx)(An.c, {
              itemName: zz.dailyRewardItemName,
              amount: 0
            })
          }, zz.dailyRewardItemName)
        }))
      })
    }

    function dM(zz, uz) {
      const bz = -Math.PI / 2 + 1.25 * (zz / (uz - 1) * 2 - 1),
        Ez = 70 + zz % 3 * 22;
      return {
        x: Math.cos(bz) * Ez,
        y: Math.sin(bz) * Ez * .7
      }
    }

    function FM(zz) {
      let {
        origin: uz,
        target: bz,
        count: Ez
      } = zz;
      const nz = [];
      for (let iz = 0; iz < Ez; iz++) {
        const zz = dM(iz, Ez);
        nz.push((0, an.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${uz.x}px`,
            top: `${uz.y}px`,
            "--coin-bx": `${zz.x}px`,
            "--coin-by": `${zz.y}px`,
            "--coin-dx": bz.x - uz.x + "px",
            "--coin-dy": bz.y - uz.y + "px",
            "--coin-delay": `${Db(iz,Ez)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, an.jsx)(An.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, iz))
      }
      return (0, an.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: nz
      })
    }

    function ZM(zz) {
      let {
        day: uz
      } = zz;
      const bz = Jz[uz - 1];
      return (0, an.jsxs)(an.Fragment, {
        children: [(0, an.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, an.jsx)(An.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Ln.d)(bz.dailyRewardCoins)]
        }), bz.dailyRewardItems.map((zz => (0, an.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, an.jsx)(An.c, {
            itemName: zz.dailyRewardItemName,
            amount: 0
          }), "\xd7", zz.dailyRewardItemAmount]
        }, zz.dailyRewardItemName)))]
      })
    }

    function RM(zz) {
      let {
        day: uz
      } = zz;
      const bz = Tz(uz);
      return (0, an.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Jz.map(((zz, Ez) => {
          const nz = Ez + 1;
          return (0, an.jsxs)("li", {
            className: Nn()("SkyblockDailyRewardTile", {
              Claimed: nz < uz && nz !== bz,
              Today: nz === uz,
              Tomorrow: nz === bz,
              Jackpot: nz === Az
            }),
            children: [(0, an.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: nz
            }), (0, an.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, an.jsx)(An.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Ln.d)(zz.dailyRewardCoins)]
            }), zz.dailyRewardItems.map((zz => (0, an.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, an.jsx)(An.c, {
                itemName: zz.dailyRewardItemName,
                amount: 0
              }), "\xd7", zz.dailyRewardItemAmount]
            }, zz.dailyRewardItemName)))]
          }, nz)
        }))
      })
    }

    function KM(zz) {
      let {
        view: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)(), Ez = (0, xz.useRef)(null), nz = (0, xz.useRef)(null), [iz, lz] = (0, xz.useState)(null);
      (0, xz.useLayoutEffect)((() => {
        var zz;
        const uz = null === (zz = Ez.current) || void 0 === zz ? void 0 : zz.getBoundingClientRect();
        if (uz) {
          var bz, iz;
          const zz = Array.from(null !== (bz = null === (iz = nz.current) || void 0 === iz ? void 0 : iz.children) && void 0 !== bz ? bz : [], (zz => HM(zz.getBoundingClientRect())));
          lz({
            origin: HM(uz),
            target: tM(),
            itemOrigins: zz,
            itemTarget: OM()
          })
        }
      }), []);
      const Mz = Tz(uz.day),
        tz = function(zz, uz) {
          const [bz, Ez] = (0, xz.useState)((() => MM() ? zz : 0));
          return (0, xz.useEffect)((() => {
            if (MM()) return;
            const bz = performance.now();
            let nz = 0;
            const iz = lz => {
              const Mz = Math.min(Math.max((lz - bz) / uz, 0), 1);
              Ez(Math.round(zz * (1 - (1 - Mz) ** 3))), Mz < 1 && (nz = requestAnimationFrame(iz))
            };
            return nz = requestAnimationFrame(iz), () => {
              cancelAnimationFrame(nz)
            }
          }), [zz, uz]), bz
        }(uz.coins, 450);
      return (0, an.jsxs)("div", {
        className: Nn()("SkyblockDailyReward", {
          Jackpot: uz.day === Az
        }),
        style: {
          "--daily-duration": `${uz.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, an.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, an.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, an.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, an.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: bz("skyblockGame:dailyRewardTitle")
            }), (0, an.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: bz("skyblockGame:dailyRewardDay", {
                day: String(uz.day)
              })
            })]
          }), (0, an.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Ez,
            children: [(0, an.jsx)(An.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, an.jsxs)("span", {
              children: ["+", (0, Ln.d)(tz)]
            })]
          }), uz.items.length > 0 && (0, an.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: nz,
            children: uz.items.map((zz => (0, an.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, an.jsx)(An.c, {
                itemName: zz.dailyRewardItemName,
                amount: 0
              }), "\xd7", zz.dailyRewardItemAmount]
            }, zz.dailyRewardItemName)))
          }), (0, an.jsx)(RM, {
            day: uz.day
          }), (0, an.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [bz("skyblockGame:dailyRewardComeBack"), (0, an.jsx)(ZM, {
              day: Mz
            })]
          })]
        }), null !== iz && (0, an.jsx)(FM, {
          origin: iz.origin,
          target: iz.target,
          count: uz.flyingCoins
        }), null !== iz && iz.itemOrigins.length === uz.items.length && (0, an.jsx)(pM, {
          items: uz.items,
          origins: iz.itemOrigins,
          target: iz.itemTarget
        })]
      })
    }
    const wM = (0, xz.memo)((function(zz) {
        let {
          controller: uz
        } = zz;
        const bz = (0, Gn.h)(gb, uz.getSnapshot());
        return bz ? (0, an.jsx)(KM, {
          view: bz
        }, bz.token) : null
      })),
      XM = "Gold Coin";

    function fM(zz) {
      return 650 + 220 * zz
    }

    function sM(zz) {
      return {
        "--letter-delay": `${fM(zz)}ms`,
        "--letter-land": `${fM(zz)+300}ms`
      }
    }

    function rM(zz) {
      let {
        letterCount: uz
      } = zz;
      return (0, an.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, an.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, an.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, an.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: uz
        }, ((zz, uz) => (0, an.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: sM(uz),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, uz)))]
      })
    }

    function oM(zz) {
      var uz, bz, Ez;
      let {
        letter: nz,
        index: iz
      } = zz;
      const {
        t: lz
      } = (0, Pn.F)(), Mz = null !== (uz = null === (bz = nz.items[0]) || void 0 === bz ? void 0 : bz.itemName) && void 0 !== uz ? uz : XM;
      return (0, an.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: sM(iz),
        children: [(0, an.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, an.jsx)(An.c, {
            itemName: Mz,
            amount: 0
          })
        }), (0, an.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: lz(nz.reasonKey, null !== (Ez = nz.reasonParams) && void 0 !== Ez ? Ez : void 0)
        }), (0, an.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [nz.coins > 0 && (0, an.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, an.jsx)(An.c, {
              itemName: XM,
              amount: 0
            }), "+", (0, Ln.d)(nz.coins)]
          }), nz.items.map(((zz, uz) => (0, an.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, an.jsx)(An.c, {
              itemName: zz.itemName,
              amount: 0
            }), zz.label, " \xd7", zz.amount]
          }, uz)))]
        })]
      })
    }

    function NM(zz) {
      let {
        view: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)();
      return (0, an.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${uz.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${fM(uz.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, an.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, an.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, an.jsx)(rM, {
              letterCount: uz.letters.length
            }), (0, an.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: bz("skyblockGame:mailboxTitle")
            })]
          }), (0, an.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: uz.letters.map(((zz, uz) => (0, an.jsx)(oM, {
              letter: zz,
              index: uz
            }, uz)))
          }), uz.more > 0 && (0, an.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: bz("skyblockGame:mailboxMore", {
              count: String(uz.more)
            })
          })]
        })
      })
    }
    const vM = (0, xz.memo)((function(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(Wb, uz.getSnapshot());
      return bz ? (0, an.jsx)(NM, {
        view: bz
      }, bz.token) : null
    }));

    function xM(zz) {
      let {
        controller: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)(), Ez = (0, Gn.h)(hE, uz.getSnapshot());
      if (null === Ez) return null;
      const nz = Ez.fullSet ? "empty" === Ez.fuelState ? {
        text: bz("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: bz("skyblockGame:magmawardHudFullSet", {
          worn: String(Ez.wornCount)
        }),
        tone: "partial"
      };
      return (0, an.jsx)(xn.d, {
        placement: "statBars",
        children: (0, an.jsxs)("div", {
          className: Nn()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Ez.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Ez.fullSet,
            "SkyblockMagmawardHud-armed": Ez.fullSet && "empty" !== Ez.fuelState
          }),
          children: [null !== Ez.flare && (0, an.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Ez.flare}`
          }, `flare:${Ez.flareToken}`), (0, an.jsx)("div", {
            className: Nn()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Ez.setLit
            }),
            children: Ez.pieces.map(((zz, uz) => (0, an.jsx)("div", {
              className: Nn()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: zz.worn,
                SkyblockMagmawardPieceJustWorn: zz.justWorn
              }),
              children: (0, an.jsx)(An.c, {
                itemName: zz.itemName,
                amount: 0
              })
            }, `${uz}:${zz.wornToken}`)))
          }, `pieces:${Ez.setLitToken}`), (0, an.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, an.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, an.jsxs)("div", {
              className: Nn()("SkyblockMagmawardFuelCounter", Ez.pulse && `SkyblockMagmawardFuelCounter-${Ez.pulse}`),
              children: [(0, an.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, an.jsx)(An.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, an.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Ez.fuel
              })]
            }, `counter:${Ez.pulseToken}`), "burn" === Ez.pulse && (0, an.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Ez.pulseToken}`)]
          }), nz && (0, an.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${nz.tone} SmallTextBold`,
            children: nz.text
          })]
        })
      })
    }

    function JM(zz) {
      let {
        controller: uz
      } = zz;
      const {
        t: bz,
        selectedLanguage: Ez
      } = (0, Pn.F)(), nz = (0, Gn.h)(cE, uz.getSnapshot());
      return null === nz ? null : (0, an.jsx)(xn.d, {
        placement: "statBars",
        children: (0, an.jsxs)("div", {
          className: Nn()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: nz.inRange
          }),
          style: {
            "--glowtide-colour": nz.colour
          },
          "aria-label": bz("skyblockGame:glowtideChipLabel"),
          children: [(0, an.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), nz.inRange ? (0, an.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: bz("skyblockGame:glowtideChipInRange")
          }, `call:${nz.inRangeToken}`) : (0, an.jsxs)(an.Fragment, {
            children: [(0, an.jsx)("div", {
              ref: uz.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, an.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: bz("skyblockGame:waypointDistance", {
                distance: oz(nz.distance, Ez.code)
              })
            })]
          })]
        })
      })
    }

    function AM(zz) {
      let {
        controller: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)(), Ez = (0, Gn.h)(SE, uz.getSnapshot());
      return null === Ez ? null : (0, an.jsx)(xn.d, {
        placement: "statBars",
        children: (0, an.jsxs)("div", {
          className: Nn()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Ez.full
          }),
          "aria-label": bz("skyblockGame:glowMeterLabel", {
            fill: String(Ez.fill),
            Bp: String(Ez.Bp)
          }),
          children: [Ez.burst && (0, an.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Ez.burstToken}`), (0, an.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, an.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Ez.ratio})`
              }
            }), Ez.gained && (0, an.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Ez.gainToken}`), Ez.full && Array.from({
              length: 5
            }, ((zz, uz) => (0, an.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, uz)))]
          }), Ez.full && Ez.rares.map((zz => (0, an.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, an.jsx)(An.c, {
              itemName: zz,
              amount: 0
            })
          }, zz))), Ez.ready && (0, an.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, an.jsx)("span", {
              children: bz("skyblockGame:glowMeterReady")
            })
          }, `ready:${Ez.fullToken}`)]
        })
      })
    }

    function TM(zz) {
      let {
        controller: uz
      } = zz;
      const {
        t: bz
      } = (0, Pn.F)(), Ez = (0, Gn.h)(DE, uz.getSnapshot());
      if (null === Ez) return null;
      const nz = "waiting" === Ez.phase,
        iz = {
          animationDuration: `${Ez.waitMs}ms`,
          animationDelay: -Ez.elapsedMs + "ms"
        },
        lz = nz ? void 0 : {
          animationDuration: `${Ez.waitMs}ms`
        };
      return (0, an.jsxs)("div", {
        className: nz ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [nz && (0, an.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((zz, uz) => (0, an.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, uz))), (0, an.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: iz
          }), (0, an.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, an.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, an.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: iz
            })]
          }), (0, an.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, an.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: lz,
          children: bz(Ez.line)
        }, Ez.lineIndex)]
      }, Ez.token)
    }

    function LM(zz) {
      let {
        chart: uz,
        showHere: bz,
        className: Ez
      } = zz;
      return (0, an.jsx)("div", {
        className: Nn()("SkyblockTideChartGrid", Ez, null !== uz.pictureName && "Complete"),
        "aria-hidden": "true",
        children: uz.cells.map(((zz, Ez) => {
          const nz = 0 !== (uz.pulseCells & 1 << Ez),
            iz = uz.castCell === Ez;
          return (0, an.jsx)("span", {
            className: Nn()("SkyblockTideChartCell", `Cell-${zz}`, nz && "Pulse", iz && "Cast", bz && uz.hereCell === Ez && "Here")
          }, `${Ez}:${nz?`p${uz.pulseToken}`:""}:${iz?`c${uz.castToken}`:""}`)
        }))
      })
    }

    function PM(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(WE, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = bz.chip;
      if (!bz.enabled || null === nz) return null;
      const iz = Ez("skyblockGame:tideChartsChipLabel", {
        island: nz.islandName,
        lit: String(nz.lit),
        ink: String(nz.ink)
      });
      return (0, an.jsx)(xn.d, {
        placement: "statBars",
        children: (0, an.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Nn()("SkyblockTideChartsChip", bz.open && "Open", null !== nz.pictureName && "Complete"),
          "aria-label": iz,
          title: iz,
          onMouseDown: zz => {
            zz.preventDefault()
          },
          onClick: uz.toggle,
          children: [(0, an.jsx)(LM, {
            chart: nz,
            showHere: !1,
            className: "Mini"
          }), (0, an.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [nz.lit, "/", nz.ink]
          })]
        })
      })
    }

    function GM(zz) {
      let {
        controller: uz
      } = zz;
      const bz = (0, Gn.h)(WE, uz.getSnapshot()),
        {
          t: Ez
        } = (0, Pn.F)(),
        nz = Qn(),
        iz = bz.card;
      return bz.enabled && null !== iz ? (0, an.jsx)(Sn.d, {
        show: bz.open,
        close: uz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, an.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: nz,
          onKeyDown: Dn,
          children: [(0, an.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, an.jsxs)("div", {
              children: [(0, an.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Ez("skyblockGame:tideChartsTitle")
              }), (0, an.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Ez("skyblockGame:tideChartsIntro")
              })]
            }), (0, an.jsx)(yn.m, {
              padIgnore: !0,
              ariaLabel: Ez("skyblockGame:tideChartsClose"),
              onClick: uz.dismiss
            })]
          }), bz.tabs.length > 1 && (0, an.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Ez("skyblockGame:tideChartsIslands"),
            children: bz.tabs.map((zz => (0, an.jsx)("button", {
              type: "button",
              className: Nn()("SkyblockTideChartsTab", zz.selected && "Selected"),
              "aria-pressed": zz.selected,
              onClick: () => {
                uz.NF(zz.island)
              },
              children: zz.name
            }, zz.island)))
          }), (0, an.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, an.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": iz.gridLabel,
              children: (0, an.jsx)(LM, {
                chart: iz,
                showHere: !0,
                className: "Large"
              })
            }), (0, an.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, an.jsx)("h3", {
                children: iz.islandName
              }), (0, an.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: iz.litText
              }), null === iz.pictureName ? (0, an.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Ez("skyblockGame:tideChartsPictureHidden")
              }) : (0, an.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Ez("skyblockGame:tideChartsPictureRevealed", {
                  picture: iz.pictureName
                })
              }, iz.pictureName), (0, an.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, an.jsxs)("li", {
                  children: [(0, an.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Ez("skyblockGame:tideChartsLegendLit")]
                }), (0, an.jsxs)("li", {
                  children: [(0, an.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Ez("skyblockGame:tideChartsLegendClear")]
                }), null !== iz.hereCell && (0, an.jsxs)("li", {
                  children: [(0, an.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Ez("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, an.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, an.jsx)("span", {
                  children: bz.turnsText
                }), (0, an.jsx)("span", {
                  children: bz.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function aM(zz) {
      var uz;
      let {
        controller: bz
      } = zz;
      const {
        selectedLanguage: Ez
      } = (0, Pn.F)(), nz = Ez.code;
      (0, xz.useEffect)((() => {
        bz.setTranslator(((zz, uz) => (0, Pn.x)(nz, zz, uz)), nz, ((zz, uz) => (0, Pn.s)(nz, zz, uz)))
      }), [bz, nz]);
      const iz = (0, Gn.h)(dz, bz.map.getSnapshot()),
        {
          openInGameMenuName: lz
        } = (0, vn.m)(["openInGameMenuName"]);
      return (0, an.jsxs)(an.Fragment, {
        children: [(0, an.jsx)(nM, {
          controller: bz.quests,
          display: bz.navigation.display
        }), iz.enabled && !lz && (0, an.jsx)(ii, {
          controller: bz.navigation
        }), (0, an.jsx)(Vn, {
          controller: bz,
          minimap: iz.enabled && (null === (uz = iz.presentation) || void 0 === uz ? void 0 : uz.minimap) && (0, an.jsx)(ni, {
            view: iz.presentation.minimap,
            navigation: bz.navigation,
            controller: bz.map
          }),
          children: (0, an.jsx)(Ri, {
            controller: bz.quests,
            surface: "hud"
          })
        }), (0, an.jsx)(uM, {
          controller: bz.navigation
        }), (0, an.jsx)(lM, {
          controller: bz.portalTransit
        }), (0, an.jsx)(wM, {
          controller: bz.dailyReward
        }), (0, an.jsx)(vM, {
          controller: bz.mailbox
        }), (0, an.jsx)(xM, {
          controller: bz.magmaward
        }), (0, an.jsx)(JM, {
          controller: bz.glowtide
        }), (0, an.jsx)(Kl, {
          controller: bz.passage
        }), (0, an.jsx)(PM, {
          controller: bz.tideCharts
        }), (0, an.jsx)(AM, {
          controller: bz.glowMeter
        }), (0, an.jsx)(Al, {
          controller: bz.reachLog
        }), (0, an.jsx)(TM, {
          controller: bz.hushWait
        }), (0, an.jsx)(Nl, {
          controller: bz.lampLight
        }), (0, an.jsx)(li, {
          controller: bz.skills,
          surface: "hud"
        })]
      })
    }

    function VM(zz) {
      let {
        controller: uz
      } = zz;
      return (0, an.jsxs)(an.Fragment, {
        children: [(0, an.jsx)(Ei, {
          controller: uz.map,
          navigation: uz.navigation
        }), (0, an.jsx)(li, {
          controller: uz.skills,
          surface: "menu"
        }), (0, an.jsx)(Ri, {
          controller: uz.quests,
          surface: "menu"
        }), (0, an.jsx)(Ci, {
          controller: uz.dungeons
        }), (0, an.jsx)(zl, {
          controller: uz.collections
        }), (0, an.jsx)(El, {
          controller: uz.questGraph
        }), (0, an.jsx)(tl, {
          controller: uz.forge
        }), (0, an.jsx)(Zl, {
          controller: uz.smuggler
        }), (0, an.jsx)(xl, {
          controller: uz.keepersChair,
          lampLight: uz.lampLight
        }), (0, an.jsx)(Bl, {
          controller: uz.reachLog,
          regulars: uz.regulars,
          hiddenWaters: uz.hiddenWaters
        }), (0, an.jsx)(Gl, {
          controller: uz.regulars
        }), (0, an.jsx)(Xl, {
          controller: uz.passage
        }), (0, an.jsx)(GM, {
          controller: uz.tideCharts
        }), (0, an.jsx)(kl, {
          controller: uz.dialogue
        }), (0, an.jsx)(zM, {
          controller: uz.autographs
        })]
      })
    }
    var mM = bz(36191);
    const qM = zE + ME;

    function hM(zz, uz, bz, Ez, nz) {
      const iz = [],
        lz = [],
        Mz = bz => {
          const Ez = zz.playSound(uz, bz.sound, bz.volume, bz.rate);
          Ez && (lz.push(Ez), void 0 !== bz.cutAfter && iz.push(setTimeout((() => {
            Ez.fade(Ez.getVolume(), 0, 300)
          }), bz.cutAfter)))
        };
      for (const tz of function(zz, uz) {
          const bz = [{
            sound: "rpgKnifeSlice1",
            beat: zE,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: zE,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: zE,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: zE,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: zE,
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
            sound: (0, mM.d)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: qM + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, mM.d)("bigDrumSwish"),
            beat: qM + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: qM + 60,
            lead: 180,
            volume: .5 + .06 * zz,
            rate: .82 + .07 * zz
          }];
          return zz >= 4 && bz.push({
            sound: "exp_levelup",
            beat: qM + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), uz && bz.push({
            sound: "trumpetFlare",
            beat: qM + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), bz.push({
            sound: "harp_pling",
            beat: uE,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), bz
        }(bz, Ez)) nz ? iz.push(setTimeout((() => {
        Mz(tz)
      }), Math.max(0, tz.beat - tz.lead / tz.rate))) : tz.beat !== zE && "magicAccent2" !== tz.sound && "trumpetFlare" !== tz.sound || Mz(tz);
      return () => {
        for (const zz of iz) clearTimeout(zz);
        for (const zz of lz) zz.fade(zz.getVolume(), 0, 120)
      }
    }
    class UM {
      constructor(zz) {
        this.deps = zz, this.pending = new Map, this.localHook = null
      }
      hookWaiting(zz, uz) {
        this.pending.delete(zz);
        const bz = this.deps.now();
        if (null === uz) {
          var Ez;
          if ((null === (Ez = this.localHook) || void 0 === Ez ? void 0 : Ez.hookId) === zz) {
            const zz = bz >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(zz)
          }
          return
        }
        const nz = bz + uz;
        this.settle(zz, nz) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(zz, {
          untilMs: bz + 1e3,
          biteAtMs: nz
        }))
      }
      getLocalHook() {
        var zz, uz;
        return null !== (zz = null === (uz = this.localHook) || void 0 === uz ? void 0 : uz.hookId) && void 0 !== zz ? zz : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const zz = this.deps.now();
        for (const [uz, {
            untilMs: bz,
            biteAtMs: Ez
          }] of this.pending)(this.settle(uz, Ez) || zz > bz) && this.pending.delete(uz)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(zz, uz) {
        const bz = this.deps.getLineOwner(zz);
        if (null === bz) return !1;
        if (!this.deps.isLocalPlayer(bz)) return !0;
        if (this.localHook = {
            hookId: zz,
            biteAtMs: uz
          }, !this.deps.isHushWaiting()) {
          const [uz, bz] = this.deps.getHookPosition(zz);
          this.deps.onCastLanded(uz, bz)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var cM = bz(4035);
    const gM = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      SM = {
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
    class yM {
      constructor(zz) {
        this.deps = zz, this.tell = null
      }
      receiveTell(zz) {
        let {
          biteTellTier: uz
        } = zz;
        this.tell = {
          tier: uz,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(zz) {
        const uz = this.tell;
        if (this.tell = null, !zz) return;
        const bz = null !== uz && this.deps.now() - uz.atMs <= 3e3 ? uz.tier : 0;
        this.deps.vibrate(gM[bz])
      }
      burstAtHook() {
        const zz = this.tell,
          uz = this.deps.getLocalHookPosition();
        null === zz || zz.burst || null === uz || (zz.burst = !0, this.deps.playParticles(function(zz, uz) {
          let [bz, Ez, nz] = uz;
          const {
            count: iz,
            rise: lz,
            colour: Mz
          } = SM[zz], [tz, Hz, Oz] = Mz;
          return {
            texture: "glint",
            pos1: [bz - .3, Ez, nz - .3],
            pos2: [bz + .3, Ez + .2, nz + .3],
            dir1: [-.6, lz, -.6],
            dir2: [.6, 1.4 * lz, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: iz,
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
              minColor: [tz, Hz, Oz, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [tz, Hz, Oz, 0],
              maxColor: [tz, Hz, Oz, 0]
            }],
            blendMode: cM.d.Add,
            hideDist: 48
          }
        }(zz.tier, uz)))
      }
    }
    var DM = bz(1241),
      QM = bz(1873),
      WM = bz(33);

    function eM(zz, uz) {
      return [{
        timeFraction: 0,
        minColor: [255 * zz[0], 255 * zz[1], 255 * zz[2], 1],
        maxColor: [255 * uz[0], 255 * uz[1], 255 * uz[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const jM = [0, 0, 0],
      IM = {
        texture: "glint",
        mipmaps: !1,
        Bp: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: jM,
        dir2: jM,
        blendMode: cM.d.OneOne
      },
      BM = {
        ...IM,
        colorGradients: eM([1, .88, .38], [1, .65, .15])
      },
      CM = {
        ...IM,
        colorGradients: eM([.55, .95, 1], [.9, 1, 1])
      },
      YM = [.5, .5, .5],
      kM = {
        texture: "glint",
        mipmaps: !1,
        Bp: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: eM([1, .12, .12], [1, .35, .2]),
        blendMode: cM.d.OneOne
      };
    class zt {
      constructor() {
        this.drops = new Map
      }
      WZ(zz, uz) {
        if ("overflowFlash" === uz.kind) {
          const [bz, Ez, nz] = uz.position, iz = zz.createParticles(kM, {
            pos: [bz, Ez, nz],
            half: YM
          });
          return iz.emit(18), void iz.stop()
        }
        this.drops.has(uz.itemId) || this.drops.set(uz.itemId, {
          owner: uz.owner,
          cosmetic: uz.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      sd(zz) {
        if (0 === this.drops.size) return;
        const uz = performance.now(),
          bz = zz.getCameraPosition();
        let Ez = 0;
        for (const iz of this.drops.values()) null !== iz.particles && Ez++;
        for (const [iz, lz] of this.drops) {
          const Mz = zz.getPositionView(iz);
          if (null === Mz) {
            var nz;
            if (lz.seen || uz - lz.markedAt > 5e3) null !== lz.particles && Ez--, null === (nz = lz.particles) || void 0 === nz || nz.stop(), this.drops.delete(iz);
            continue
          }
          lz.cosmetic || !zz.isLocalPlayer(lz.owner) || lz.pickupDelayCleared || (zz.clearPickupDelay(iz), lz.pickupDelayCleared = !0);
          const tz = lz.lastPosition,
            Hz = lz.seen && (Mz[0] - tz[0]) ** 2 + (Mz[1] - tz[1]) ** 2 + (Mz[2] - tz[2]) ** 2 > 4e-4,
            Oz = (Mz[0] - bz[0]) ** 2 + (Mz[1] - bz[1]) ** 2 + (Mz[2] - bz[2]) ** 2 < 2025;
          lz.seen = !0, tz[0] = Mz[0], tz[1] = Mz[1], tz[2] = Mz[2], Hz && (lz.lastMovingAt = uz), null !== lz.particles && (!Oz || uz - lz.lastMovingAt > 500) && (lz.particles.stop(), lz.particles = null, Ez--), Hz && Oz && null === lz.particles && Ez < 32 && (lz.particles = zz.createParticles(lz.cosmetic ? CM : BM, {
            pos: Mz
          }), Ez++), null !== lz.particles && (lz.particles.moveTo(Mz), lz.particles.setEmitRate(Hz ? 12 : 0)), !Hz && null === lz.particles && uz - Math.max(lz.lastMovingAt, lz.markedAt) > 2e3 && this.drops.delete(iz)
        }
      }
      dispose() {
        for (const uz of this.drops.values()) {
          var zz;
          null === (zz = uz.particles) || void 0 === zz || zz.stop()
        }
        this.drops.clear()
      }
    }
    var ut = bz(195);
    const bt = ut.e.mw * ut.e.playerEyeToHeightRatio;
    class Et {
      constructor(zz) {
        this.host = zz, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      WZ(zz) {
        this.lava = zz, this.nextUpdateAt = 0
      }
      sd() {
        var zz;
        const uz = this.host.now();
        if (uz < this.nextUpdateAt) return;
        this.nextUpdateAt = uz + 250;
        const bz = this.host.playerPosition(),
          Ez = bz && this.findNearest([bz[0], bz[1] + bt, bz[2]]);
        if (!Ez || Ez.distance >= 40) return void this.stop();
        const nz = .5 * Math.min(1, (40 - Ez.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(nz) : this.loop = this.host.play("lavaFlow", nz, Ez.position, 40 + bt, 9, !0), null === (zz = this.loop) || void 0 === zz || zz.setPosition(Ez.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var zz;
        null === (zz = this.loop) || void 0 === zz || zz.stop(), this.loop = null
      }
      findNearest(zz) {
        let uz = -1,
          bz = 1 / 0;
        for (let Ez = 0; Ez < this.lava.length; Ez += 3) {
          const nz = this.lava[Ez] - zz[0],
            iz = this.lava[Ez + 1] - zz[1],
            lz = this.lava[Ez + 2] - zz[2],
            Mz = nz * nz + iz * iz + lz * lz;
          Mz < bz && (bz = Mz, uz = Ez)
        }
        return uz < 0 ? null : {
          position: [this.lava[uz], this.lava[uz + 1], this.lava[uz + 2]],
          distance: Math.sqrt(bz)
        }
      }
    }
    var nt = bz(1854),
      it = bz(38020);
    const lt = {
      "Grey Portal": "Gray"
    };
    for (const dt of nz.Jc) lt[`${dt} Portal`] = dt;
    const Mt = Object.keys(lt),
      tt = Object.fromEntries(Mt.map((zz => [zz, (0, nz.ab)(nz.N[`${(0,nz.ze)(lt[zz])}Team`])])));
    Object.fromEntries(Mt.map((zz => [zz, nz.N[`${(0,nz.ze)(lt[zz])}UiText`]])));
    class Ht {
      constructor(zz, uz) {
        this.presentation = zz, this.portal = uz, this.unlocked = void 0
      }
      WZ(zz) {
        const uz = !1 === this.unlocked && zz;
        this.unlocked = zz, this.sd();
        const {
          min: bz,
          max: Ez,
          unlockedBlock: nz
        } = this.portal;
        if (uz && this.presentation.hasChunk(...bz)) {
          const [zz, uz, iz] = tt[nz];
          this.presentation.playParticles({
            pos1: [...bz],
            pos2: Ez.map((zz => zz + 1)),
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
              minColor: [zz, uz, iz, 1],
              maxColor: [Math.min(255, zz + 55), Math.min(255, uz + 55), Math.min(255, iz + 90), 1]
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
      sd() {
        var zz;
        const uz = this.unlocked ? this.portal.unlockedBlock : null !== (zz = this.portal.lockedBlock) && void 0 !== zz ? zz : "Light Gray Portal",
          {
            min: bz,
            max: Ez
          } = this.portal;
        for (let nz = bz[0]; nz <= Ez[0]; nz++)
          for (let zz = bz[1]; zz <= Ez[1]; zz++)
            for (let iz = bz[2]; iz <= Ez[2]; iz++) this.presentation.hasChunk(nz, zz, iz) && this.presentation.BX(nz, zz, iz) !== uz && this.presentation.qJ(nz, zz, iz, uz)
      }
    }
    const Ot = {
        farming_1: {
          raises: zz => "NPC" === zz.type && "chef" === zz.variation,
          rise: .4
        },
        fishing_1: {
          raises: zz => "Draugr Warper" === zz.type,
          rise: .4
        }
      },
      pt = (zz, uz, bz, iz) => {
        let {
          localPlayerId: lz
        } = iz;
        const Mz = new sn({
          translate: (zz, uz) => (0, Pn.x)(DM.h.get().getCurrentLanguageCode(), zz, uz),
          translateWithIcons: (zz, uz) => (0, Pn.s)(DM.h.get().getCurrentLanguageCode(), zz, uz),
          setMenuOpen: zz => {
            zz ? (0, ez.p)() : (0, ez.i)()
          },
          dismissMenu: ez.l,
          publishSkills: zz => {
            jz.k.sK(ib, zz, !0)
          },
          publishQuests: zz => {
            jz.k.sK(Hb, zz, !0)
          },
          publishQuestNotification: zz => {
            jz.k.sK(Ob, zz, !0)
          },
          publishDungeons: zz => {
            jz.k.sK(Fb, zz, !0)
          },
          publishCollections: zz => {
            jz.k.sK(mb, zz, !0)
          },
          publishMap: zz => {
            jz.k.sK(dz, zz, !0)
          },
          publishHud: zz => {
            jz.k.sK(wn, zz, !0)
          },
          publishPortalTransit: zz => {
            jz.k.sK(hb, zz, !0)
          },
          isLoadingScreenUp: () => vn.e.get("loadingOverlayVisible"),
          publishDailyReward: zz => {
            jz.k.sK(gb, zz, !0)
          },
          publishMailbox: zz => {
            jz.k.sK(Wb, zz, !0)
          },
          publishQuestGraph: zz => {
            jz.k.sK(jb, zz, !0)
          },
          publishForge: zz => {
            jz.k.sK(ZE, zz, !0)
          },
          publishSmuggler: zz => {
            jz.k.sK(wE, zz, !0)
          },
          publishKeepersChair: zz => {
            jz.k.sK(JE, zz, !0)
          },
          publishReachLog: zz => {
            jz.k.sK(TE, zz, !0)
          },
          publishLampLight: zz => {
            jz.k.sK(mE, zz, !0)
          },
          publishMagmaward: zz => {
            jz.k.sK(hE, zz, !0)
          },
          publishGlowtide: zz => {
            jz.k.sK(cE, zz, !0)
          },
          publishGlowMeter: zz => {
            jz.k.sK(SE, zz, !0)
          },
          publishHushWait: zz => {
            jz.k.sK(DE, zz, !0)
          },
          publishPassage: zz => {
            jz.k.sK(sE, zz, !0)
          },
          publishTideCharts: zz => {
            jz.k.sK(WE, zz, !0)
          },
          publishRegulars: zz => {
            jz.k.sK(zn, zz, !0)
          },
          publishHiddenWaters: zz => {
            jz.k.sK(Mn, zz, !0)
          },
          publishDialogue: zz => {
            jz.k.sK(Hn, zz, !0)
          },
          publishAutographs: zz => {
            jz.k.sK(Zn, zz, !0)
          },
          onDailyRewardStarted: zz => {
            Gz.playSound(lz, zz.day === Az ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (zz, uz) => {
            Gz.playSound(lz, "exp_collect", .35, 1 + .6 * zz / (uz - 1)), jz.k.sK(Sb, zz === uz - 1)
          },
          onDailyRewardItemLanded: zz => {
            Gz.playSound(lz, "pickUp", .6, 1 + .15 * zz)
          },
          onMailboxStarted: () => {
            Gz.playSound(lz, "rpgMetalClick", .6, 1), Gz.playSound(lz, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Gz.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: WM.h,
          requestTracking: zz => {
            Gz.sendCommand(`quests track ${zz}`)
          },
          requestDungeonEnter: (zz, uz) => {
            Gz.sendCommand(`dungeonEnter ${zz} ${uz}`)
          },
          requestQuestJump: zz => {
            Gz.sendCommand(`${Vz} jump ${zz}`)
          },
          requestQuestArrive: (zz, uz) => {
            const bz = `${Vz} arrive ${zz}`;
            Gz.sendCommand(uz ? `${bz} complete` : bz)
          },
          requestForge: zz => {
            let {
              blade: uz,
              guard: bz,
              handle: Ez
            } = zz;
            Gz.sendCommand(`forge ${uz} ${bz} ${Ez}`)
          },
          requestDialogue: () => {
            Gz.sendCommand("quests dialogue")
          },
          requestSmuggle: (zz, uz) => {
            Gz.sendCommand(`smuggle ${zz} ${uz}`)
          },
          requestKeepersChairAim: zz => {
            Gz.sendCommand(`keeperschair-aim ${zz}`)
          },
          requestReachLogOpen: () => {
            Gz.sendCommand("reachlog-open")
          },
          requestLampLight: zz => {
            Gz.sendCommand(`${zz}`)
          },
          requestTravel: zz => {
            Gz.sendCommand(`map travel ${zz.kind} ${zz.id} ${zz.requestId}`)
          }
        });
        let tz, Hz, Oz, pz, Fz, Zz, Rz, sz, rz, oz, Nz, Jz, Tz;
        const Pz = new zt;
        let Gz, az = null;
        const mz = Ot[null !== bz && void 0 !== bz ? bz : ""],
          cz = (zz, uz) => {
            null !== mz && void 0 !== mz && mz.raises(uz) && Gz.setNametagOffset(zz, mz.rise)
          },
          yz = new yM({
            getLocalHookPosition: () => {
              const zz = Dz.getLocalHook();
              return null !== zz && Gz.checkValid(zz) ? Gz.Gs(zz) : null
            },
            playParticles: zz => {
              Gz.playParticleEffect(zz)
            },
            vibrate: zz => {
              Iz.e.play("fishBite", zz)
            },
            now: () => performance.now()
          }),
          Dz = new UM({
            getLineOwner: zz => Gz.checkValid(zz) ? Gz.getLineOwner(zz) : null,
            isLocalPlayer: zz => Gz.isLocalPlayer(zz),
            getHookPosition: zz => {
              const [uz, , bz] = Gz.Gs(zz);
              return [uz, bz]
            },
            isHushWaiting: () => {
              var zz;
              return "waiting" === (null === (zz = Mz.hushWait.getSnapshot()) || void 0 === zz ? void 0 : zz.phase)
            },
            onCastLanded: (zz, uz) => {
              Mz.tideCharts.castLanded(zz, uz)
            },
            onLocalHookSettled: () => {
              yz.onLocalHookSettled()
            },
            onLocalWaitEnded: zz => {
              yz.onLocalWaitEnded(zz)
            },
            now: () => performance.now()
          }),
          Bz = new Et({
            now: () => performance.now(),
            playerPosition: () => Gz.checkValid(lz) ? Gz.Gs(lz) : null,
            play: (zz, uz, bz, Ez, nz, iz) => Gz.playSound(lz, zz, uz, 1, {
              Dn: bz,
              maxHearDist: Ez,
              refDistance: nz
            }, iz)
          }),
          Cz = new Map;
        let Yz;
        return {
          onCreate: zz => {
            if (Gz = zz, az = new it.SkyblockEntityFacing(zz, mz ? cz : null), Mz.portalTransit.resumeArrival(null !== bz && void 0 !== bz ? bz : null), (null !== bz && void 0 !== bz ? bz : Ez) === Ez) {
              let zz = -1 / 0;
              Yz = jz.k.subscribe("toggleMenu", (uz => {
                const bz = performance.now();
                "inventory|Workbench" !== uz || "cross_to_hub" !== Mz.quests.getTrackedQuestId() || bz - zz < 1e4 || (zz = bz, Gz.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Ez, nz] of Object.entries(null !== (uz = qz[null !== bz && void 0 !== bz ? bz : ""]) && void 0 !== uz ? uz : {})) {
              var uz;
              Cz.set(Ez, new Ht({
                hasChunk: (uz, bz, Ez) => zz.isBlockInLoadedChunk(uz, bz, Ez),
                BX: (uz, bz, Ez) => zz.blockIdToBlockName(zz.getBlockId(uz, bz, Ez)),
                qJ: (uz, bz, Ez, nz) => {
                  zz.qJ(uz, bz, Ez, nz)
                },
                playParticles: uz => {
                  zz.playParticleEffect(uz)
                }
              }, nz))
            }
            Tz = (0, nt.f)((zz => function(zz) {
              return Object.hasOwn(Du, zz) || zz.startsWith("npc_")
            }(zz) ? Wu(zz) : null)), Mz.resolveItemName = (uz, bz) => {
              const Ez = zz.getItemStat(lz, uz, "displayName");
              return Ez && "object" === typeof Ez && "translationKey" in Ez ? bz(Ez.translationKey, (0, Pn.q)(Ez.params, QM.b.shown)) : "string" === typeof Ez ? bz(Ez) : uz
            }, Mz.quests.notifications.onShown = zz => {
              "quest" === zz ? Gz.playSound(lz, "magicAccent1", 1, 1) : "skillLevel" === zz ? Gz.playSound(lz, "magicAccent1", 1, .6) : "landmark" === zz ? Gz.playSound(lz, "trumpetFlare", 1, .6) : "npcNote" === zz ? Gz.playSound(lz, "magicAccent2", .8, 1.1) : "started" === zz ? Gz.playSound(lz, (0, mM.d)("bigDrumSwish"), 1, 1) : Gz.playSound(lz, (0, mM.d)("rpgHandleSmallLeather"), 1, 1)
            }, Mz.forge.onPartSelected = () => {
              Gz.playSound(lz, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, Mz.forge.onForgeStarted = (uz, bz, Ez) => hM(zz, lz, uz, bz, Ez), Mz.smuggler.onBought = () => {
              Gz.playSound(lz, (0, mM.d)("rpgHandleSmallLeather"), 1, 1), Gz.playSound(lz, "chestOpen", .6, 1)
            }, Mz.compass.register(new Kz(Mz.map, !0)), Mz.compass.register(new Kz(Mz.map, !1)), Mz.compass.register(new Xz(Mz.map)), Mz.compass.register(new fz((() => Mz.quests.getSnapshot().compassTarget)));
            for (const bz of ["enemy", "npc"]) Mz.compass.register(new wz(Mz.map, bz, (uz => zz.checkValid(uz) ? zz.Gs(uz) : void 0), (uz => zz.isAlive(uz))))
          },
          onAfterRender: (zz, uz) => {
            const bz = Gz.checkValid(lz) ? Gz.Gs(lz) : null;
            Mz.navigation.afterRender(bz, performance.now(), uz), Mz.glowtide.afterRender(bz, uz.cameraHeading), Mz.tideCharts.afterRender(bz), Dz.afterRender()
          },
          onClose: () => {
            var zz, uz, bz, Ez, nz, iz, lz, dz, Zz, Kz, wz, Xz, fz, vz, xz;
            Yz && jz.k.unsubscribe(Yz), null === (zz = Tz) || void 0 === zz || zz(), Pz.dispose(), Bz.dispose(), null === (uz = az) || void 0 === uz || uz.dispose(), Dz.dispose(), Mz.dispose(), null === (bz = tz) || void 0 === bz || bz(), null === (Ez = Hz) || void 0 === Ez || Ez(), null === (nz = Oz) || void 0 === nz || nz(), null === (iz = pz) || void 0 === iz || iz(), null === (lz = Fz) || void 0 === lz || lz(), null === (dz = Rz) || void 0 === dz || dz(), null === (Zz = undefined) || void 0 === Zz || Zz(), null === (Kz = sz) || void 0 === Kz || Kz(), null === (wz = rz) || void 0 === wz || wz(), null === (Xz = oz) || void 0 === Xz || Xz(), null === (fz = Nz) || void 0 === fz || fz(), null === (vz = undefined) || void 0 === vz || vz(), null === (xz = Jz) || void 0 === xz || xz()
          },
          onPlayerChangeBlock: (zz, uz, Ez, iz, tz, Hz) => {
            if (zz === lz && "Air" === Hz) {
              const zz = Gz.getClientOption(lz, "creative");
              Mz.skills.predictBlock([uz, Ez, iz], tz, zz);
              const Hz = function(zz, uz) {
                  if ("hub" === uz || "farming_1" === uz || "mining_1" === uz) return !gz.has(zz) || "hub" !== uz && "mining_1" !== uz ? Object.hasOwn(Uz, zz) ? Uz[zz] : void 0 : hz
                }(tz, bz),
                Oz = ("hub" === bz || "mining_1" === bz) && (nz.yd.some((zz => zz === tz)) || Object.hasOwn(Sz, tz) || "mining_1" === bz && "Block of Coal" === tz);
              zz || void 0 === Hz && !Oz || Gz.qJ(uz, Ez, iz, null !== Hz && void 0 !== Hz ? Hz : hz)
            }
          },
          onPlayerAttackEntity: (zz, uz) => {
            if (zz !== lz || "Player" !== Gz.getEntityType(uz)) return;
            const [bz, Ez, nz] = Gz.Gs(uz);
            Gz.burstParticlePreset("critical", [bz, Ez + 1, nz], 10)
          },
          onChangeBlockFail: zz => {
            for (const {
                nl: uz
              }
              of zz) Mz.skills.rejectBlock(uz)
          },
          onReceivedMessageFromServer: (zz, uz) => {
            if ("skyblockGatedPortal" === zz) {
              var bz;
              const [zz, Ez] = uz;
              return void(null === (bz = Cz.get(zz)) || void 0 === bz || bz.WZ(Ez))
            }
            if ("skyblockDailyReward" === zz) return void Mz.dailyReward.WZ(uz);
            if ("skyblockMailbox" === zz) return void Mz.mailbox.WZ(uz);
            if ("skyblockPortalTransit" === zz) return void Mz.portalTransit.WZ(uz);
            if ("skyblockLoot" === zz) return void Pz.WZ(Gz, uz);
            if ("skyblockLava" === zz) return void Bz.WZ(uz);
            if ("skyblockForge" === zz) return void Mz.forge.WZ(uz);
            if ("skyblockMagmaward" === zz) return void Mz.magmaward.WZ(uz);
            if ("skyblockGlowtide" === zz) return void Mz.glowtide.WZ(uz);
            if ("skyblockGlowMeter" === zz) return void Mz.glowMeter.WZ(uz);
            if ("skyblockHushWait" === zz) return void Mz.hushWait.WZ(uz);
            if ("skyblockPassage" === zz) {
              const zz = uz;
              return Mz.passage.WZ(zz), Mz.reachLog.receivePassagePhase(zz.passagePhase), oz ??= (0, vz.q)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: Mz.passage.show
              }), void Mz.keepersChair.receivePassage({
                keepersChairPassagePhase: zz.passagePhase,
                keepersChairPassageNextPhase: zz.passageNextPhase,
                keepersChairPassageTurnsInMs: zz.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === zz) {
              const zz = uz;
              return Mz.tideCharts.WZ(zz), void(zz.tideCharts.length > 0 && (Nz ??= (0, vz.q)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: Mz.tideCharts.show
              })))
            }
            if (zz === Qz.y) {
              var Ez;
              const {
                hookId: zz,
                waiting: bz
              } = uz;
              return void Dz.hookWaiting(zz, null !== (Ez = null === bz || void 0 === bz ? void 0 : bz.remainingMs) && void 0 !== Ez ? Ez : null)
            }
            if ("skyblockBiteTell" === zz) return void yz.receiveTell(uz);
            if ("skyblockSmuggler" === zz) return void Mz.smuggler.WZ(uz);
            if ("skyblockKeepersChair" === zz) return Mz.keepersChair.WZ(uz), void Mz.lampLight.setAtChair(Mz.keepersChair.isAtChair());
            if ("skyblockLampLight" === zz) {
              const zz = uz;
              var nz;
              if (Mz.lampLight.WZ(zz), zz.lampLightReleasing) rz ??= (0, vz.q)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  Mz.lampLight.setRelease(!1)
                }
              });
              else null === (nz = rz) || void 0 === nz || nz(), rz = void 0;
              return
            }
            if ("skyblockRegulars" === zz) return void Mz.regulars.WZ(uz);
            if ("skyblockHiddenWaters" === zz) return void Mz.hiddenWaters.WZ(uz);
            if ("skyblockReachLog" === zz) return Mz.reachLog.WZ(uz), void(sz ??= (0, vz.q)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: PE
              },
              onClick: Mz.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === zz) {
              for (const [zz, bz, Ez, nz] of uz) Gz.qJ(zz, bz, Ez, nz);
              return
            }
            if ("skyblockHud" === zz) Mz.receiveHud(uz);
            else if ("skyblockMap" === zz) Mz.map.WZ(uz);
            else if (zz === Wz.e) Mz.skills.WZ(uz);
            else if (zz === Lz && "dialogue" === uz.kind) Mz.dialogue.WZ(uz);
            else if (zz === Lz) Mz.quests.WZ(uz);
            else if ("skyblockDungeons" === zz) Mz.dungeons.WZ(uz);
            else if ("sbCollections" === zz) Mz.collections.WZ(uz);
            else if ("skyblockQuestGraph" === zz) Mz.questGraph.WZ(uz);
            else {
              if ("skyblockAutographs" !== zz) return;
              Mz.autographs.WZ(uz)
            }
            if (!Hz && Mz.map.getSnapshot().enabled) {
              const zz = (0, vz.q)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: Mz.map.show
                }),
                uz = (0, ez.t)(Mz.map.show);
              Hz = () => {
                zz(), uz()
              }
            }!Oz && Mz.skills.getSnapshot().enabled && (Oz = (0, vz.q)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: Mz.skills.show
            })), !Rz && Mz.collections.getSnapshot().enabled && (Rz = (0, vz.q)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: Mz.collections.show
            })), !pz && Mz.quests.getSnapshot().enabled && (pz = (0, vz.q)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: Mz.quests.show
            })), !Jz && Mz.autographs.getSnapshot().enabled && (Jz = (0, vz.q)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: Mz.autographs.show
            }));
            const iz = Mz.dungeons.getSnapshot().enabled;
            var lz;
            (Oz || pz || iz) && Zz !== iz && (Zz = iz, null === (lz = Fz) || void 0 === lz || lz(), Fz = (0, vz.q)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: au
              },
              disabled: !iz,
              panel: !0,
              onClick: Mz.dungeons.show
            }));
            tz || (tz = (0, ez.x)((0, xz.createElement)(aM, {
              controller: Mz
            }), {
              content: (0, xz.createElement)(VM, {
                controller: Mz
              }),
              onClose: Mz.close
            }))
          },
          sd: () => {
            var zz;
            for (const uz of Cz.values()) uz.sd();
            Pz.sd(Gz), Bz.sd(), null === (zz = az) || void 0 === zz || zz.sd(), Mz.skills.sd(), Mz.quests.sd(), Mz.dailyReward.sd(), Mz.mailbox.sd(), Mz.map.sd()
          }
        }
      }
  },
  35861: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      e: () => Ez
    });
    const Ez = "skyblockSkills",
      nz = "skills_test_gym"
  },
  9013: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      d: () => lz
    });
    const Ez = [{
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

    function nz(zz) {
      let uz, bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof zz) {
        if (!Number.isFinite(zz)) return "0";
        if (Math.abs(zz) < 100) {
          const uz = zz < 0 ? "-" : "",
            bz = Math.abs(zz);
          return bz >= 10 ? `${uz}${bz.toFixed(1).replace(/\.0$/,"")}` : `${uz}${bz.toFixed(2).replace(/\.?0+$/,"")}`
        }
        uz = BigInt(Math.floor(zz))
      } else uz = zz;
      const nz = uz < 0n ? -uz : uz,
        iz = uz < 0n ? "-" : "",
        lz = nz.toString();
      if (lz.length <= bz) return `${iz}${lz}`;
      const Mz = 3 * Math.floor((lz.length - 1) / 3);
      if (Mz < 3) return `${iz}${lz}`;
      if (Mz > 3 * Ez.length) {
        const zz = lz[0],
          uz = lz.slice(1, 3).replace(/0+$/, "");
        return `${iz}${uz?`${zz}.${uz}`:zz}e${lz.length-1}`
      }
      const {
        threshold: tz,
        suffix: Hz
      } = Ez[Ez.length - Mz / 3], Oz = nz / tz, pz = Number(1000n * (nz % tz) / tz), dz = Number(Oz) + pz / 1e3;
      let Fz;
      return Fz = dz >= 100 ? Math.floor(dz).toString() : dz >= 10 ? dz.toFixed(1).replace(/\.0$/, "") : dz.toFixed(2).replace(/\.?0+$/, ""), `${iz}${Fz}${Hz}`
    }
    const iz = Ez.map((zz => {
      let {
        threshold: uz,
        suffix: bz
      } = zz;
      return {
        threshold: Number(uz),
        suffix: bz
      }
    })).filter((zz => {
      let {
        threshold: uz
      } = zz;
      return Number.isFinite(uz)
    }));

    function lz(zz) {
      const uz = Math.abs(zz),
        bz = zz < 0 ? "-" : "";
      for (const {
          threshold: Ez,
          suffix: nz
        }
        of iz)
        if (uz >= Ez) {
          const zz = uz / Ez;
          if (zz >= 1e3) return `${bz}${uz.toExponential(2).replace("e+","e")}`;
          let iz;
          return iz = zz >= 100 ? Math.floor(zz).toString() : zz >= 10 ? zz.toFixed(1).replace(/\.0$/, "") : zz.toFixed(2).replace(/\.?0+$/, ""), `${bz}${iz}${nz}`
        } return `${bz}${uz}`
    }
  },
  37937: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37941: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37946: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37953: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37959: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37966: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  37974: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37977: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37981: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37986: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37995: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38e3: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38008: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38011: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18381: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20458: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22706: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24214: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25900: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25918: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37926: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);