export const id = 190;
export const ids = [49, 190];
export const modules = {
  38046: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      c: () => Xz
    });
    const Fz = new WeakMap;

    function Wz(zz, tz) {
      return Fz.set(zz, tz), zz
    }

    function Xz(zz) {
      var tz;
      return null !== (tz = Fz.get(zz)) && void 0 !== tz ? tz : null
    }
  },
  37961: (zz, tz, sz) => {
    function Fz(zz, tz, sz) {
      var Fz;
      const {
        width: Wz,
        height: Xz
      } = sz, Oz = null !== (Fz = zz.text) && void 0 !== Fz ? Fz : zz, oz = (Oz.x / 100 - .5) * Wz, vz = (Oz.y / 100 - .5) * Xz, Uz = Wz / 2 - tz.x;
      if (null !== zz.text && Math.abs(oz) <= Uz && vz >= tz.top - Xz / 2 && vz <= Xz / 2 - tz.bottom) return {
        x: Oz.x,
        y: Oz.y
      };
      const Kz = Math.min(0 === oz ? 1 / 0 : Uz / Math.abs(oz), vz > 0 ? (Xz / 2 - tz.bottom) / vz : vz < 0 ? (tz.top - Xz / 2) / vz : 1 / 0);
      return !Number.isFinite(Kz) || Kz < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + oz * Kz / Wz * 100,
        y: 50 + vz * Kz / Xz * 100
      }
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  37967: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    const Fz = 4,
      Wz = 12e3,
      Xz = 1e3;
    class Oz {
      constructor() {
        let {
          limit: zz = Fz,
          windowMs: tz = Wz,
          spacingMs: sz = Xz,
          now: Oz = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = zz, this.windowMs = tz, this.spacingMs = sz, this.now = Oz
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
          tz = this.lastSentAt + this.spacingMs,
          sz = Math.min(tz > zz ? tz : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        sz !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, sz - zz)))
      }
      notify() {
        for (const zz of this.listeners) zz()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37953: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Fz
    });
    class Fz {
      constructor(zz, tz, sz) {
        this.Yg = zz, this.beforeOpen = tz, this.afterClose = sz, this.open = !1, this.lw = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.lw && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.lw = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.lw || (this.snapshot = this.buildSnapshot(), this.Yg(this.snapshot))
      }
    }
  },
  38053: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      SkyblockEntityFacing: () => oz,
      needsSkyblockEntityFacing: () => Oz
    });
    var Fz = sz(577),
      Wz = sz(3926),
      Xz = sz(38057);

    function Oz(zz, tz) {
      if (zz.metaInfo === Fz.d || "Iron Guardian" === zz.type || "Gold Guardian" === zz.type) return !0;
      if ("Pig" === zz.type) return "sitting" === zz.pose;
      if ("Person" !== zz.meshKind || void 0 === zz.meshOpts) return !1;
      let sz = null === tz || void 0 === tz ? void 0 : tz.get(zz.meshOpts);
      if (void 0 === sz) {
        var Xz, Oz;
        const Fz = (0, Wz.j)(zz);
        sz = !1, "pig_napoleon" === (null === Fz || void 0 === Fz || null === (Xz = Fz.opts.textures) || void 0 === Xz ? void 0 : Xz.head) ? sz = !0 : "npc_pig_head" === (null === Fz || void 0 === Fz || null === (Oz = Fz.opts.textures) || void 0 === Oz ? void 0 : Oz.head) && (sz = "sitting" === Fz.opts.pose || "sitting"), tz && (tz.size >= 256 && tz.clear(), tz.set(zz.meshOpts, sz))
      }
      return "sitting" === sz ? "sitting" === zz.pose : sz
    }(0, Xz.f)("skyblock", ((zz, tz) => {
      tz.setFacingTolerance(Oz(zz) ? 0 : null)
    }));
    class oz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = zz, this.alsoVisit = tz, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = zz => {
          var tz;
          const sz = this.api.getEntityInfo(zz);
          sz && (Oz(sz, this.meshFacingCache) && (this.api.setFacingTolerance(zz, 0), this.nextFacing.add(zz)), null === (tz = this.alsoVisit) || void 0 === tz || tz.call(this, zz, sz))
        }
      }
      wN() {
        const {
          api: zz
        } = this, tz = this.nextFacing;
        zz.forEachEntity(this.visit);
        for (const sz of this.facing) tz.has(sz) || zz.setFacingTolerance(sz, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = tz
      }
      dispose() {
        for (const zz of this.facing) this.api.setFacingTolerance(zz, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37948: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => uv
    });
    const Fz = "island";
    var Wz = sz(321);
    const Xz = (0, Wz.Db)([0, 0, -1]),
      Oz = [{
        name: "S",
        bearing: (0, Wz.Db)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Wz.Db)([-1, 0, 0])
      }, {
        name: "N",
        bearing: Xz
      }, {
        name: "W",
        bearing: (0, Wz.Db)([1, 0, 0])
      }];

    function oz(zz, tz, sz) {
      return [100 * (sz.mapMaxX - zz) / (sz.mapMaxX - sz.mapMinX), 100 * (tz - sz.mapMinZ) / (sz.mapMaxZ - sz.mapMinZ)]
    }

    function vz(zz, tz, sz) {
      const Wz = "local" === tz,
        Xz = zz.background,
        Oz = tz => Xz ? oz(tz[0] - zz.mapOrigin[0], tz[2] - zz.mapOrigin[2], Xz.bounds) : [50, 50],
        vz = (zz.insideDungeon ? [] : zz.landmarks).map((zz => {
          var tz, Fz;
          return {
            id: zz.id,
            name: sz(zz.visited && zz.nameKey ? null !== (tz = zz.mapLabelKey) && void 0 !== tz ? tz : zz.nameKey : "skyblockGame:mapUnknown"),
            icon: zz.visited && null !== (Fz = zz.icon) && void 0 !== Fz ? Fz : "unknown",
            visited: zz.visited,
            current: !1,
            position: Oz(zz.position),
            travelKind: "landmark",
            travelId: zz.id
          }
        })),
        Kz = zz.zones.map((tz => {
          var Fz;
          return {
            id: tz.id,
            name: sz(tz.visited && tz.nameKey ? tz.nameKey : "skyblockGame:mapUnknown"),
            icon: tz.visited && null !== (Fz = tz.icon) && void 0 !== Fz ? Fz : "unknown",
            visited: tz.visited,
            current: tz.id === zz.zoneId,
            position: tz.position,
            thumbnail: tz.visited ? tz.id : void 0,
            travelKind: "zone",
            travelId: tz.id
          }
        })),
        uz = zz.insideDungeon || !Xz ? [] : zz.portals.map((zz => {
          var tz;
          return {
            id: zz.id,
            name: sz(null !== (tz = zz.nameKey) && void 0 !== tz ? tz : "skyblockGame:mapUnknown"),
            icon: zz.visited ? "dungeons" === zz.destination ? "portal_orange" : "portal" : "unknown",
            visited: zz.visited,
            current: !1,
            position: Oz(zz.position),
            colour: zz.colour,
            travelKind: "zone",
            travelId: zz.destination
          }
        })),
        Nz = Wz ? vz : Kz,
        bz = Nz.filter((zz => zz.visited)).length,
        wz = Xz ? (Xz.bounds.mapMaxX - Xz.bounds.mapMinX) / (Xz.bounds.mapMaxZ - Xz.bounds.mapMinZ) : 2,
        Dz = Xz ? JSON.stringify([Xz.bounds, zz.mapOrigin]) : "";
      return {
        local: Wz,
        points: Nz,
        portals: Wz ? uz : [],
        progress: Nz.length ? sz("skyblockGame:mapDiscovered", {
          current: String(bz),
          total: String(Nz.length)
        }) : null,
        percent: Nz.length ? 100 * bz / Nz.length : 0,
        canTravel: [...Nz, ...Wz ? uz : []].some((zz => zz.visited && !zz.current)),
        noLandmarks: Wz && !zz.insideDungeon && 0 === vz.length,
        background: Xz ? {
          imageKey: Xz.imageKey,
          fallbackImageKey: zz.zoneId,
          geometryKey: Dz,
          label: sz(Xz.labelKey),
          colour: Xz.backgroundColour,
          ratio: wz
        } : null,
        connections: Uz(zz.zones),
        minimap: Xz ? {
          imageKey: Xz.imageKey,
          fallbackImageKey: zz.zoneId,
          geometryKey: Dz,
          label: sz(Xz.labelKey),
          colour: Xz.backgroundColour,
          caption: sz(zz.zoneId === Fz ? "skyblockGame:zoneIsland" : Xz.labelKey),
          width: (Xz.bounds.mapMaxX - Xz.bounds.mapMinX) / Xz.minimapSpan * 100 + "%",
          height: (Xz.bounds.mapMaxZ - Xz.bounds.mapMinZ) / Xz.minimapSpan * 100 + "%",
          markers: [...vz, ...uz]
        } : null
      }
    }

    function Uz(zz) {
      const tz = new Set;
      return zz.flatMap((sz => sz.connections.flatMap((Fz => {
        const Wz = zz.find((zz => zz.id === Fz)),
          Xz = [sz.id, Fz].sort().join("|");
        return !Wz || tz.has(Xz) ? [] : (tz.add(Xz), [{
          id: `${sz.id}-${Fz}`,
          start: sz.position,
          end: Wz.position,
          explored: sz.visited && Wz.visited
        }])
      }))))
    }
    var Kz = sz(37953);
    class uz extends Kz.d {}
    const Nz = "skyblockMapView";
    class bz extends uz {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(zz, Fz, Wz), this.requestTravel = tz, this.translate = sz, this.now = Xz, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (zz, tz) => {
          if (!this.map || this.pending || this.lw) return;
          const sz = ("zone" === zz ? this.map.zones : this.map.landmarks).find((zz => zz.id === tz));
          if (sz) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in sz && !sz.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (sz.visited)
              if ("zone" === zz && tz === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const sz = ++this.nextRequestId;
                this.pending = {
                  requestId: sz,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: zz,
                  id: tz,
                  requestId: sz
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
      Sw(zz) {
        var tz;
        if (!this.lw)
          if ("entities" !== zz.kind)
            if ("open" !== zz.kind) {
              var sz, Fz;
              if ("snapshot" === zz.kind)(null === (sz = zz.snapshot) || void 0 === sz ? void 0 : sz.zoneId) !== (null === (Fz = this.map) || void 0 === Fz ? void 0 : Fz.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = zz.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === zz.kind) {
                var Wz;
                zz.requestId === (null === (Wz = this.pending) || void 0 === Wz ? void 0 : Wz.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (zz.requestId === (null === (tz = this.pending) || void 0 === tz ? void 0 : tz.requestId)) {
                var Xz;
                this.pending = null, this.feedbackKey = null !== (Xz = zz.errorKey) && void 0 !== Xz ? Xz : "", null === zz.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = zz.entities
      }
      wN() {
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
          presentation: this.map ? vz(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const wz = 67.5 * Math.PI / 180;

    function Dz(zz, tz) {
      const sz = Math.abs(zz);
      if (sz > wz || tz.trackHalfWidth <= 0) return null;
      const Fz = tz.trackHalfWidth,
        Wz = tz.screenHalfWidth / (tz.tanHalfFovX * Math.max(.5, Math.cos(tz.pitch))),
        Xz = Math.min(Math.atan(.6 * Fz / Wz), .75 * wz),
        Oz = Wz * Math.tan(Xz);
      let oz;
      if (sz <= Xz) oz = Wz * Math.tan(sz);
      else {
        const zz = wz - Xz,
          tz = Math.max(0, Wz * zz / (Math.cos(Xz) ** 2 * (Fz - Oz)) - 1),
          vz = (sz - Xz) / zz;
        oz = Oz + (Fz - Oz) * (1 + tz) * vz / (1 + tz * vz)
      }
      return 50 + Math.sign(zz) * oz * 50 / Fz
    }
    class gz {
      constructor(zz, tz) {
        this.map = zz, this.visited = tz, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = tz ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const zz = this.map.getSnapshot().map;
        return !zz || zz.insideDungeon ? [] : zz.landmarks.filter((zz => zz.visited === this.visited)).map((zz => {
          var tz, sz;
          return {
            id: `landmark:${zz.id}`,
            position: zz.position,
            icon: null !== (tz = zz.icon) && void 0 !== tz ? tz : "unknown",
            nameKey: null !== (sz = zz.nameKey) && void 0 !== sz ? sz : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class Hz {
      constructor(zz, tz, sz, Fz) {
        this.map = zz, this.kind = tz, this.position = sz, this.alive = Fz, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = tz, this.range = "enemy" === tz ? 48 : 64, this.limit = 12
      }
      yB(zz) {
        if ("enemy" !== this.kind || this.alive(zz.GX)) return this.position(zz.GX)
      }
      getPoints() {
        const zz = [];
        for (const Fz of this.map.getEntities()) {
          if (Fz.kind !== this.kind || "enemy" === this.kind && !this.alive(Fz.compassEntityId)) continue;
          const Wz = this.position(Fz.compassEntityId);
          var tz, sz;
          if (Wz) zz.push({
            id: `${this.kind}:${Fz.compassEntityId}`,
            GX: Fz.compassEntityId,
            kind: this.kind,
            icon: null !== (tz = Fz.icon) && void 0 !== tz ? tz : Fz.npcSkin ? `npc_${Fz.npcSkin}` : this.kind,
            displayName: Fz.displayName,
            position: Wz,
            nameKey: null !== (sz = Fz.nameKey) && void 0 !== sz ? sz : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return zz
      }
    }
    class Bz {
      constructor(zz) {
        this.map = zz, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const zz = this.map.getSnapshot().map;
        return !zz || zz.insideDungeon ? [] : zz.portals.map((zz => {
          var tz;
          return {
            id: "portal:" + zz.id,
            kind: "portal",
            position: zz.position,
            nameKey: null !== (tz = zz.nameKey) && void 0 !== tz ? tz : "skyblockGame:compassUnvisitedZone",
            icon: zz.visited ? "dungeons" === zz.destination ? "portal_orange" : "portal" : "unknown",
            colour: zz.colour
          }
        }))
      }
    }
    class Pz {
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

    function rz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz.position;
      const Xz = Fz[0] - tz[0],
        Oz = Fz[2] - tz[2];
      return {
        ...zz,
        position: Fz,
        offset: Wz.c.computeShortestRotation(sz, (0, Wz.Db)([Xz, 0, Oz])),
        distance: Math.hypot(Xz, Fz[1] - tz[1], Oz)
      }
    }
    let Yz;

    function xz(zz, tz) {
      var sz;
      return (null === (sz = Yz) || void 0 === sz ? void 0 : sz.locale) !== tz && (Yz = {
        locale: tz,
        near: new Intl.NumberFormat(tz, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(tz, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (zz < 10 ? Yz.near : Yz.far).format(zz)
    }
    class mz {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(zz) {
        return this.providers.set(zz.id, zz), this.refreshAt = 0, () => {
          this.providers.get(zz.id) === zz && (this.providers.delete(zz.id), this.refreshAt = 0)
        }
      }
      frame(zz, tz, sz) {
        if (sz >= this.refreshAt) {
          this.refreshAt = sz + 200, this.candidates = [];
          for (const tz of this.providers.values()) {
            if (!tz.enabled) continue;
            const sz = tz.getPoints().map((tz => {
              const sz = tz.position;
              return {
                point: tz,
                distance: Math.hypot(sz[0] - zz[0], sz[1] - zz[1], sz[2] - zz[2])
              }
            })).filter((zz => zz.distance <= tz.range)).sort(((zz, tz) => zz.distance - tz.distance)).slice(0, tz.limit);
            for (const {
                point: zz
              }
              of sz) this.candidates.push({
              provider: tz,
              point: zz
            })
          }
        }
        const Fz = [];
        for (const {
            point: Wz,
            provider: Xz
          }
          of this.candidates) {
          if (!Xz.enabled) continue;
          const sz = Xz.yB ? Xz.yB(Wz) : Wz.position;
          if (sz) {
            const Xz = rz(Wz, zz, tz, sz);
            Math.abs(Xz.offset) <= wz && Fz.push(Xz)
          }
        }
        return Fz
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var Jz = sz(36090),
      Iz = sz(65);
    const Cz = [{
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
      ez = Cz.length;

    function Zz(zz) {
      return zz >= ez ? 1 : zz + 1
    }
    const Gz = "skyblockQuests",
      Tz = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      cz = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function jz(zz) {
      let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const sz = Math.max(0, Math.floor(zz)),
        Fz = Math.floor(sz % 1e3 / 100),
        Wz = Math.floor(sz / 1e3),
        Xz = Wz % 60,
        Oz = Math.floor(Wz / 60),
        oz = Oz % 60,
        vz = Math.floor(Oz / 60),
        Uz = zz => zz < 10 ? `0${zz}` : String(zz),
        Kz = tz ? `.${Fz}` : "";
      return vz > 0 ? `${vz}:${Uz(oz)}:${Uz(Xz)}${Kz}` : `${oz}:${Uz(Xz)}${Kz}`
    }
    const Az = "devquests",
      yz = "none",
      Mz = {
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
      dz = "Compressed Messy Stone",
      hz = {
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
      Qz = ["Stone", "Diorite", "Andesite", "Granite"],
      kz = new Set(Qz),
      iz = (Object.keys(hz), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Lz = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function lz(zz, tz) {
      const sz = Math.floor(5 * zz / (2 * tz + 1));
      return Math.min(4, Math.max(0, sz))
    }
    var nz = sz(1223);
    var az = sz(35887);
    var qz = sz(36086),
      Sz = sz(34),
      Vz = sz(8376);
    const Rz = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      pz = 1e3;

    function fz(zz) {
      return Math.max(0, zz)
    }

    function Ez(zz) {
      return 1 + .01 * fz(zz)
    }

    function zt(zz) {
      return 1 + .005 * fz(zz)
    }

    function tt(zz) {
      return 1 + .005 * fz(zz)
    }

    function st(zz) {
      return .01 * fz(zz)
    }

    function Ft(zz) {
      return 150 / (150 + fz(zz))
    }

    function Wt(zz) {
      return 1 + .002 * fz(zz)
    }

    function Xt(zz) {
      return Math.round(10 * zz) / 10
    }

    function Ot(zz, tz) {
      switch (zz) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Xt(100 * (zt(tz) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Xt(100 * (Ez(tz) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Xt(100 * (tt(tz) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Xt(100 * st(tz))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Xt(100 * (1 - Ft(tz)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Xt(100 * (Wt(tz) - 1))
          }
      }
    }

    function ot(zz) {
      return "farming" === zz ? 200 : 100
    }

    function vt(zz, tz) {
      if (!Number.isSafeInteger(zz) || zz < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const sz = ot(tz),
        Fz = zz => function(zz, tz) {
          return ot(zz) * tz * (tz + 1) / 2
        }(tz, zz);
      let Wz = Math.min(pz, Math.floor((Math.sqrt(8 * zz / sz + 1) - 1) / 2));
      return Wz < pz && Fz(Wz + 1) <= zz ? Wz++ : Fz(Wz) > zz && Wz--, {
        totalXp: zz,
        level: Wz,
        xpIntoLevel: zz - Fz(Wz),
        xpForNextLevel: Wz === pz ? null : sz * (Wz + 1)
      }
    }
    const Ut = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Kt(zz) {
      return Ut.has(zz)
    }
    const ut = new Set(Wz.pb);

    function Nt(zz) {
      return ut.has(zz)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const bt = {
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
      wt = {
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
      Dt = {
        ...wt,
        ...Object.fromEntries(Object.entries(iz).map((zz => {
          let [tz, sz] = zz;
          return [tz, 9 * wt[sz]]
        })))
      },
      gt = {
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
      Ht = {
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
    const Bt = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Pt = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function rt(zz) {
      return `rgb(${Pt[zz].join(", ")})`
    }

    function Yt(zz, tz, sz) {
      if (!sz) return zz(tz);
      const Fz = {};
      for (const [Wz, Xz] of Object.entries(sz)) Fz[Wz] = "string" === typeof Xz ? Xz : zz(Xz.translationKey);
      return zz(tz, Fz)
    }
    class xt {
      constructor(zz, tz) {
        this.now = zz, this.getJournal = tz, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.po = !1, this.onShown = () => {}
      }
      enqueue(zz) {
        const tz = mt(zz);
        if (tz) this.pending.push(zz);
        else {
          const tz = this.pending.findIndex(mt);
          this.pending.splice(-1 === tz ? this.pending.length : tz, 0, zz)
        }
        return (null === this.current || null !== this.followUp && !tz) && (this.advance(), !0)
      }
      setHeld(zz) {
        return this.po = zz, !zz && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      wN() {
        const zz = this.getJournal(),
          tz = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === tz ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === tz || void 0 === tz ? void 0 : tz.kind) && zz && zz.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === tz || void 0 === tz ? void 0 : tz.kind)) {
          const zz = this.findFollowUp(this.current);
          if ("step" !== (null === zz || void 0 === zz ? void 0 : zz.kind) || zz.questId !== tz.questId || zz.step.id !== tz.step.id) return this.showFollowUp(zz, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(zz, tz, sz) {
        var Fz, Wz, Xz, Oz;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, zz, sz);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, zz);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, zz, tz);
        const {
          questCompletionKind: oz,
          questCompletionNameKey: vz
        } = this.current, Uz = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, Kz = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, uz = "step" === (null === (Fz = this.followUp) || void 0 === Fz ? void 0 : Fz.kind) ? this.followUp : null, Nz = "explore" === (null === (Wz = this.followUp) || void 0 === Wz ? void 0 : Wz.kind);
        let bz;
        return bz = Nz ? zz("skyblockGame:questExploreTitle") : null !== uz ? "quest" === oz ? zz("skyblockGame:questNextQuestTitle", {
          quest: zz(uz.questNameKey)
        }) : zz("skyblockGame:questNextStepTitle") : zz("started" === oz ? "skyblockGame:questStartedTitle" : "quest" === oz ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? oz : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: bz,
          name: Nz ? tz("skyblockGame:questExploreName") : null !== uz ? Yt(tz, uz.step.nameKey, uz.step.nameParams) : Yt(tz, vz, Uz),
          description: Nz ? tz("skyblockGame:questExploreDescription") : null === uz ? null : Yt(tz, uz.step.descriptionKey, uz.step.descriptionParams),
          reward: null === this.followUp && Kz > 0 ? tz("skyblockGame:questCoinRewardSuffix", {
            amount: Kz.toLocaleString(sz)
          }) : null,
          iconItem: null !== (Xz = null === uz || void 0 === uz ? void 0 : uz.step.questIconItem) && void 0 !== Xz ? Xz : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== uz && (null === (Oz = this.getJournal()) || void 0 === Oz ? void 0 : Oz.trackedQuestId) === uz.questId ? uz.step.nameKey : null
        }
      }
      getSkillLevelView(zz, tz, sz) {
        let {
          skill: Fz,
          beforeLevel: Wz,
          level: Xz
        } = zz;
        const Oz = Ot(Fz, Wz),
          oz = Ot(Fz, Xz);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: tz(`skyblockGame:${Fz}`),
          name: tz("skyblockGame:skillLevelUp", {
            to: Xz.toLocaleString(sz)
          }),
          description: Oz.percent === oz.percent ? null : tz(`${oz.translationKey}Change`, {
            before: Oz.percent.toLocaleString(sz),
            after: oz.percent.toLocaleString(sz)
          }),
          reward: null,
          iconItem: Bt[Fz],
          accent: rt(Fz),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(zz, tz) {
        let {
          landmarkNameKey: sz
        } = zz;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: tz("skyblockGame:landmarkDiscovered"),
          name: tz(sz),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(zz, tz, sz) {
        let {
          titleKey: Fz,
          textKey: Wz,
          params: Xz = {},
          nameKeys: Oz = {},
          iconItem: oz = null
        } = zz;
        const vz = {
          ...Xz
        };
        for (const [Uz, Kz] of Object.entries(Oz)) vz[Uz] = tz(Kz);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: tz(Fz),
          name: sz(Wz, vz),
          description: null,
          reward: null,
          iconItem: oz,
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
      showFollowUp(zz, tz) {
        null === zz || this.po ? this.advance() : (this.followUp = zz, this.token++, this.shownAt = this.now(), this.expiresAt = null !== tz && void 0 !== tz ? tz : this.shownAt + this.durationMs())
      }
      findFollowUp(zz) {
        var tz;
        const sz = this.getJournal();
        if (!sz || this.hasPendingQuestPopup() || mt(zz)) return null;
        const Fz = "started" === zz.questCompletionKind ? sz.active.some((tz => tz.id === zz.questCompletionQuestId)) : "quest" === zz.questCompletionKind ? sz.completed.some((tz => tz.id === zz.questCompletionQuestId)) : [...sz.active, ...sz.completed].some((tz => tz.id === zz.questCompletionQuestId && tz.subquests.some((tz => tz.id === zz.questCompletionStepId && "completed" === tz.status))));
        if (!Fz) return null;
        if ("quest" === zz.questCompletionKind && 0 === sz.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Wz = sz.active.find((zz => zz.id === sz.trackedQuestId)),
          Xz = null !== (tz = null === Wz || void 0 === Wz ? void 0 : Wz.subquests.find((zz => "ready" === zz.status))) && void 0 !== tz ? tz : null === Wz || void 0 === Wz ? void 0 : Wz.subquests.find((zz => "active" === zz.status));
        return Xz ? {
          kind: "step",
          questId: Wz.id,
          questNameKey: Wz.nameKey,
          step: Xz
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((zz => !mt(zz)))
      }
      advance() {
        var zz;
        this.current = this.po ? null : null !== (zz = this.pending.shift()) && void 0 !== zz ? zz : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function mt(zz) {
      return Jt(zz.questCompletionKind)
    }

    function Jt(zz) {
      return "skillLevel" === zz || "landmark" === zz || "npcNote" === zz
    }
    var It = sz(37961);
    const Ct = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      et = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Zt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Gt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Tt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var ct = sz(37964);
    const jt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      At = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const yt = sz.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Mt = sz.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      dt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var ht = sz(18216),
      Qt = sz(20227),
      kt = sz(22615),
      it = sz(24200),
      Lt = sz(25919);
    const lt = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: ht,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: Qt,
      cow: Tt,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: sz(25937),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Ct,
      fishing_1: Ct,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: et,
      guardian_iron: Zt,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: kt,
      mines: it,
      mining_1: it,
      npc: Gt,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Tt,
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
      npc_gold_guardian: et,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Zt,
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
      npc_tentacle_guy: ct,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: jt,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: yt,
      quest_talk: Mt,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: dt,
      watermelon: Lt
    };

    function nt(zz, tz) {
      const sz = document.createElement("img");
      return sz.className = tz, sz.src = zz, sz.alt = "", sz.draggable = !1, sz
    }

    function qt(zz) {
      var tz;
      const sz = null !== (tz = lt[zz]) && void 0 !== tz ? tz : zz.startsWith("npc_") ? Gt : dt;
      if ("portal" !== zz) return nt(sz, "SkyblockMapIcon");
      const Fz = document.createElement("span");
      Fz.className = "SkyblockMapIcon Portal";
      const Wz = document.createElement("span");
      return Wz.className = "SkyblockMapIconTint", Wz.style.maskImage = Wz.style.webkitMaskImage = `url("${At}")`, Fz.append(nt(sz, "SkyblockMapIconLayer"), Wz, nt(At, "SkyblockMapIconLayer SkyblockMapIconShade")), Fz
    }
    var St = sz(37934),
      Vt = sz(3939);
    const Rt = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function pt(zz) {
      const tz = new Vt.k(zz);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Rt.map((zz => {
          let {
            lobes: sz,
            amount: Fz
          } = zz;
          return {
            lobes: sz[Math.floor(tz.next() * sz.length)],
            amount: Fz[0] + tz.next() * (Fz[1] - Fz[0]),
            phase: 2 * tz.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function ft(zz) {
      let {
        radius: tz,
        squareness: sz,
        wobbles: Fz,
        samples: Wz
      } = zz;
      const Xz = [];
      for (let Oz = 0; Oz < Wz; Oz++) {
        const zz = 2 * Math.PI * Oz / Wz,
          oz = Math.cos(zz),
          vz = Math.sin(zz),
          Uz = tz * (Math.abs(oz) ** sz + Math.abs(vz) ** sz) ** (-1 / sz) * Fz.reduce(((tz, sz) => {
            let {
              lobes: Fz,
              amount: Wz,
              phase: Xz
            } = sz;
            return tz + Wz * Math.sin(Fz * zz + Xz)
          }), 1);
        Xz.push(`${(50+Uz*oz).toFixed(2)} ${(50+Uz*vz).toFixed(2)}`)
      }
      return `M${Xz.join("L")}Z`
    }
    const Et = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class zs {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.lw = !1, this.mountCompass = zz => {
          var tz;
          if (null === (tz = this.stopLayout) || void 0 === tz || tz.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !zz || this.lw) return;
          const sz = zz.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: zz,
            track: sz,
            label: zz.querySelector(".SkyblockCompassLabel")
          }, sz.replaceChildren();
          for (let Wz = 0; Wz < 4; Wz++) {
            const zz = document.createElement("span");
            zz.className = "SkyblockCompassCardinal", sz.appendChild(zz), this.cardinals.push(zz)
          }
          const Fz = (0, St.c)(Et, [zz], this.layout);
          this.stopLayout = () => {
            Fz(), sz.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = zz => {
          this.terrain = this.lw ? null : zz, this.render(this.frame)
        }, this.mountMinimapSearchArea = zz => {
          this.mountSearchArea("minimap", zz)
        }, this.mountMapSearchArea = zz => {
          this.mountSearchArea("map", zz)
        }, this.mountPlayer = zz => {
          this.player = this.lw ? null : zz, this.render(this.frame)
        }, this.mountWaypoint = zz => {
          var tz, sz;
          if (null === (tz = this.stopWaypoint) || void 0 === tz || tz.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !zz || this.lw) return;
          const Fz = zz.querySelector(".SkyblockQuestWaypointMarker");
          Fz.replaceChildren(qt("quest")), this.markerIcon = "quest", this.waypoint = {
            root: zz,
            marker: Fz,
            clip: zz.querySelector(".SkyblockQuestWaypointTextClip"),
            text: zz.querySelector(".SkyblockQuestWaypointText"),
            label: zz.querySelector(".SkyblockQuestWaypointLabel"),
            distance: zz.querySelector(".SkyblockQuestWaypointDistance"),
            hint: zz.querySelector(".SkyblockQuestWaypointHint")
          };
          const Wz = () => {
              this.waypointMarkerSize = {
                width: Fz.offsetWidth,
                height: Fz.offsetHeight
              }, this.waypointInset = {
                x: Fz.offsetWidth / 2 + 8,
                top: Fz.offsetHeight + 8,
                bottom: 8
              }
            },
            Xz = new ResizeObserver((() => {
              Wz(), this.render(this.frame)
            }));
          Xz.observe(Fz, {
            box: "border-box"
          });
          const Oz = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", Oz), null === (sz = window.visualViewport) || void 0 === sz || sz.addEventListener("resize", Oz), this.stopWaypoint = () => {
            var zz;
            Xz.disconnect(), window.removeEventListener("resize", Oz), null === (zz = window.visualViewport) || void 0 === zz || zz.removeEventListener("resize", Oz)
          }, Oz(), Wz(), this.render(this.frame)
        }, this.mountWaypointOrigin = zz => {
          var tz;
          if (null === (tz = this.stopWaypointOrigin) || void 0 === tz || tz.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = zz && !this.lw ? Number(zz.dataset.notificationToken) : null, zz && !this.lw && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const tz = {
              nameKey: zz.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = tz;
            const sz = () => {
                const sz = zz.getBoundingClientRect();
                tz.x = (sz.left + sz.width / 2) / window.innerWidth * 100, tz.y = (sz.top + sz.height / 2) / window.innerHeight * 100
              },
              Fz = new ResizeObserver(sz);
            Fz.observe(zz.parentElement), Fz.observe(zz), window.addEventListener("resize", sz), this.stopWaypointOrigin = () => {
              Fz.disconnect(), window.removeEventListener("resize", sz)
            }, sz()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const zz = this.compass.root,
            tz = getComputedStyle(zz),
            sz = getComputedStyle(document.documentElement),
            Fz = parseFloat(sz.fontSize),
            Wz = parseFloat(tz.getPropertyValue("--compass-icon-size")) * Fz,
            Xz = "1" === tz.getPropertyValue("--compass-fit-top").trim(),
            Oz = Xz ? 1 : 8,
            oz = Array.from(document.querySelectorAll(Et), (zz => {
              var tz;
              return (null !== (tz = zz.querySelector(".MiddleTextTop")) && void 0 !== tz ? tz : zz).getBoundingClientRect()
            })).filter((zz => zz.width > 0 && zz.height > 0));
          let vz = (parseFloat(sz.getPropertyValue("--notchTop")) || 0) + Oz,
            Uz = "";
          if (Xz) {
            const tz = window.innerWidth / 2,
              sz = zz.getBoundingClientRect().height,
              Xz = [vz, ...oz.map((zz => Math.max(vz, zz.bottom + Oz)))].sort(((zz, tz) => zz - tz));
            for (const zz of Xz) {
              let Xz = tz - 8;
              for (const Fz of oz) Fz.bottom + Oz <= zz || Fz.top >= zz + sz + Oz || (Xz = Math.min(Xz, Fz.right <= tz ? tz - Fz.right - 8 : Fz.left - tz - 8));
              const Kz = 2 * Xz - Wz;
              if (Kz >= 16 * Fz) {
                Uz = `${Kz}px`, vz = zz;
                break
              }
            }
          }
          zz.style.maxWidth !== Uz && (zz.style.maxWidth = Uz);
          const Kz = zz.getBoundingClientRect(),
            uz = this.compassSize.trackHalfWidth;
          if (Kz.width > 0) {
            const zz = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: zz.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Wz / zz.width
          }
          if (!Uz)
            for (const Nz of oz) Nz.right > Kz.left - 8 && Nz.left < Kz.right + 8 && (vz = Math.max(vz, Nz.bottom + Oz));
          zz.style.top = `${vz}px`, this.compassSize.trackHalfWidth !== uz && this.render(this.frame)
        }
      }
      mountSearchArea(zz, tz) {
        this.searchAreas[zz] = this.lw ? null : tz, this.render(this.frame)
      }
      render(zz) {
        if (this.lw) return;
        if (this.frame = zz, this.compass && (ts(this.compass.root, !zz), zz)) {
          const tz = this.compassSize.trackHalfWidth / 50;
          zz.compass.cardinals.forEach(((zz, sz) => {
            const Fz = this.cardinals[sz];
            Fz.textContent !== zz.name && (Fz.textContent = zz.name), ts(Fz, zz.hidden), Fz.style.translate = zz.left * tz + "px"
          }));
          const sz = new Set;
          zz.compass.markers.forEach(((Fz, Wz) => {
            var Xz;
            sz.add(Fz.id);
            let Oz = this.markers.get(Fz.id);
            Oz || (Oz = document.createElement("span"), Oz.className = "SkyblockCompassMarker", this.markers.set(Fz.id, Oz), this.compass.track.appendChild(Oz)), Oz.dataset.icon !== Fz.icon && (Oz.dataset.icon = Fz.icon, Oz.replaceChildren(qt(Fz.icon))), Oz.style.color = null !== (Xz = Fz.colour) && void 0 !== Xz ? Xz : "", Oz.style.translate = Fz.left * tz + "px", Oz.style.zIndex = String(zz.compass.markers.length - Wz), Oz.title !== Fz.name && (Oz.title = Fz.name)
          }));
          for (const [zz, Fz] of this.markers) sz.has(zz) || (Fz.remove(), this.markers.delete(zz));
          this.compass.label.textContent !== zz.compass.label && (this.compass.label.textContent = zz.compass.label)
        }
        this.terrain && (ts(this.terrain, !(null !== zz && void 0 !== zz && zz.minimap)), null !== zz && void 0 !== zz && zz.minimap && (this.terrain.style.transform = zz.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", zz.minimap.iconRotation)));
        const tz = null === zz || void 0 === zz ? void 0 : zz.searchArea;
        for (const sz of [this.searchAreas.minimap, this.searchAreas.map])
          if (sz && (ts(sz, !tz), tz)) {
            if (this.searchAreaPath.seed !== tz.shapeSeed && (this.searchAreaPath = {
                seed: tz.shapeSeed,
                d: ft(pt(tz.shapeSeed))
              }), sz.dataset.shapeSeed !== tz.shapeSeed) {
              sz.dataset.shapeSeed = tz.shapeSeed;
              for (const zz of sz.querySelectorAll("path")) zz.setAttribute("d", this.searchAreaPath.d)
            }
            sz.style.left = `${tz.left}%`, sz.style.top = `${tz.top}%`, sz.style.width = `${tz.width}%`, sz.style.height = `${tz.height}%`
          } if (this.player && (ts(this.player, !(null !== zz && void 0 !== zz && zz.player) || zz.player.hidden), null !== zz && void 0 !== zz && zz.player && (this.player.style.left = `${zz.player.left}%`, this.player.style.top = `${zz.player.top}%`, this.player.style.setProperty("--map-player-rotation", zz.player.rotation))), this.waypoint) {
          const {
            root: tz,
            marker: sz,
            clip: Fz,
            text: Wz,
            label: Xz,
            distance: Oz,
            hint: oz
          } = this.waypoint, vz = !(null !== zz && void 0 !== zz && zz.waypoint) || null !== zz.waypoint.popupToken && zz.waypoint.popupToken !== this.waypointOriginToken;
          ts(tz, vz);
          let Uz = 1;
          const Kz = this.waypointLaunch;
          if (!vz && Kz && zz.waypoint.nameKey === Kz.nameKey) {
            const zz = performance.now();
            Kz.startedAt ??= zz, Uz = Math.min(1, Math.max(0, (zz - Kz.startedAt - 450) / 1e3)), sz.style.opacity = String(Math.min(1, (zz - Kz.startedAt) / 150)), 1 === Uz && (this.waypointLaunch = null)
          } else sz.style.opacity = "", Kz && null !== Kz.startedAt && (this.waypointLaunch = null);
          if (tz.classList.toggle("Launching", Uz < 1), null !== zz && void 0 !== zz && zz.waypoint) {
            const tz = this.waypointInset,
              vz = "quest_talk" === zz.waypoint.markerIcon ? function(zz, tz, sz) {
                if (!zz.text || null === zz.blockHeight || 0 === zz.nearness) return zz;
                const Fz = zz.blockHeight / 100 * sz.height,
                  Wz = -zz.nearness * (ss * Fz + tz.width / 2),
                  Xz = zz.nearness * (Fs * Fz + tz.height / 2);
                return {
                  ...zz,
                  text: {
                    x: zz.text.x + Wz / sz.width * 100,
                    y: zz.text.y + Xz / sz.height * 100
                  }
                }
              }(zz.waypoint, this.waypointMarkerSize, this.viewport) : zz.waypoint,
              uz = (0, It.d)(vz, tz, this.viewport),
              Nz = Uz * Uz * (3 - 2 * Uz),
              bz = Uz < 1 ? Kz.x + (uz.x - Kz.x) * Nz : uz.x,
              wz = Uz < 1 ? Kz.y + (uz.y - Kz.y) * Nz : uz.y;
            sz.style.translate = `${bz}vw ${wz}vh`, Fz.style.clipPath = `inset(${tz.top}px ${tz.x}px ${tz.bottom}px)`, ts(Wz, Uz < 1 || !zz.waypoint.text), Wz.style.opacity = String(1 - zz.waypoint.nearness), zz.waypoint.text && (Wz.style.translate = `${zz.waypoint.text.x}vw ${zz.waypoint.text.y}vh`), Xz.textContent !== zz.waypoint.name && (Xz.textContent = zz.waypoint.name), this.markerIcon !== zz.waypoint.markerIcon && (this.markerIcon = zz.waypoint.markerIcon, sz.replaceChildren(qt(this.markerIcon))), Oz.textContent !== zz.waypoint.distance && (Oz.textContent = zz.waypoint.distance), ts(oz, null === zz.waypoint.hint), null !== zz.waypoint.hint && oz.textContent !== zz.waypoint.hint && (oz.textContent = zz.waypoint.hint)
          }
        }
      }
      dispose() {
        var zz, tz;
        this.mountWaypointOrigin(null), this.render(null), null === (zz = this.stopLayout) || void 0 === zz || zz.call(this), this.stopLayout = null, null === (tz = this.stopWaypoint) || void 0 === tz || tz.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.lw = !0
      }
    }

    function ts(zz, tz) {
      zz.hidden !== tz && (zz.hidden = tz)
    }
    const ss = .55,
      Fs = .6;
    const Ws = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Xs {
      constructor(zz, tz, sz, Fz) {
        this.map = zz, this.quests = tz, this.compass = sz, this.display = new zs, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.lw = !1, this.snapshot = null, this.texts = new Map, this.translate = Fz
      }
      setTranslator(zz, tz) {
        this.translate = zz, this.locale = tz, this.metresFormat = new Intl.NumberFormat(tz), this.texts.clear()
      }
      translateCached(zz, tz) {
        const sz = void 0 === tz ? zz : `${zz} ${tz}`;
        let Fz = this.texts.get(sz);
        return void 0 === Fz && (this.texts.size >= 500 && this.texts.clear(), Fz = this.translate(zz, void 0 === tz ? void 0 : {
          distance: tz
        }), this.texts.set(sz, Fz)), Fz
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(zz, tz, sz) {
        if (this.lw) return;
        if (!zz) return this.snapshot = null, void this.display.render(null);
        const Fz = this.map.getSnapshot().map,
          vz = sz.cameraHeading,
          Uz = {
            ...this.display.compassSize,
            tanHalfFovX: sz.tanHalfFovX,
            pitch: sz.cameraPitch
          },
          Kz = [];
        if (Fz)
          for (const Wz of this.compass.frame(zz, vz, tz)) {
            const zz = Dz(Wz.offset, Uz);
            null !== zz && Kz.push({
              ...Wz,
              left: zz
            })
          }
        const uz = function(zz, tz) {
            const sz = [],
              Fz = zz => "quest" === zz.kind ? zz.distance - 1 : zz.distance,
              Wz = [...zz].sort(((zz, tz) => Fz(zz) - Fz(tz) || zz.id.localeCompare(tz.id)));
            for (const Xz of Wz) {
              let zz = !1;
              if ("quest" !== Xz.kind)
                for (const Fz of sz)
                  if (Math.abs(Fz.left - Xz.left) < tz) {
                    zz = !0;
                    break
                  } zz || sz.push(Xz)
            }
            return sz
          }(Kz, this.display.compassSpacing),
          Nz = function(zz) {
            let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              sz = null;
            for (const Fz of zz) Math.abs(Fz.offset) <= tz && (!sz || Fz.distance < sz.distance || Fz.distance === sz.distance && Math.abs(Fz.offset) < Math.abs(sz.offset)) && (sz = Fz);
            return sz
          }(uz),
          bz = zz => {
            var tz;
            return null !== (tz = zz.displayName) && void 0 !== tz ? tz : this.translateCached(zz.nameKey)
          },
          wz = {
            compass: {
              markers: uz.map((zz => ({
                id: zz.id,
                icon: zz.icon,
                colour: zz.colour,
                name: bz(zz),
                left: zz.left
              }))),
              cardinals: Oz.map((zz => {
                let {
                  name: tz,
                  bearing: sz
                } = zz;
                const Fz = Dz(Wz.c.computeShortestRotation(vz, sz), Uz);
                return {
                  name: tz,
                  left: null !== Fz && void 0 !== Fz ? Fz : 0,
                  hidden: null === Fz
                }
              })),
              label: Nz ? `${bz(Nz)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",xz(Nz.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== Fz && void 0 !== Fz && Fz.background) {
          const tz = zz[0] - Fz.mapOrigin[0],
            sz = zz[2] - Fz.mapOrigin[2],
            {
              rotation: Wz,
              transform: Oz
            } = function(zz, tz, sz, Fz) {
              const [Wz, Oz] = oz(zz, tz, Fz), vz = Xz - sz;
              return {
                rotation: vz,
                transform: `rotate(${vz}rad) translate(-${Wz}%, -${Oz}%)`
              }
            }(tz, sz, vz, Fz.background.bounds);
          wz.minimap = {
            transform: Oz,
            iconRotation: -Wz + "rad"
          };
          const [Uz, Kz] = oz(tz, sz, Fz.background.bounds);
          wz.player = {
            left: Uz,
            top: Kz,
            hidden: Uz < 0 || Kz < 0 || Uz > 100 || Kz > 100,
            rotation: -Wz + "rad"
          }
        }
        const {
          waypoint: gz
        } = this.quests.getSnapshot();
        if ("search" === (null === gz || void 0 === gz ? void 0 : gz.questMarkerIcon) && null !== Fz && void 0 !== Fz && Fz.background) {
          const {
            bounds: zz
          } = Fz.background, [tz, sz] = oz(gz.position[0] - Fz.mapOrigin[0], gz.position[2] - Fz.mapOrigin[2], zz);
          wz.searchArea = {
            left: tz,
            top: sz,
            width: 6400 / (zz.mapMaxX - zz.mapMinX),
            height: 6400 / (zz.mapMaxZ - zz.mapMinZ),
            shapeSeed: gz.nameKey
          }
        }
        const Hz = this.quests.getNotificationSnapshot(),
          Bz = "completion" === (null === Hz || void 0 === Hz ? void 0 : Hz.phase) && !Jt(Hz.kind);
        if (gz && !Bz) {
          const tz = Math.hypot(...gz.position.map(((tz, sz) => tz - zz[sz]))),
            Fz = Math.round(tz),
            Wz = "talk" === gz.questMarkerIcon ? Math.min(1, Math.max(0, (10 - tz) / 5)) : 0,
            Xz = sz.projectWorldPosToViewport(gz.position),
            Oz = Xz && sz.projectWorldPosToViewport([gz.position[0], gz.position[1] - 1, gz.position[2]]);
          wz.waypoint = {
            ...sz.projectWorldPosToScreenPos(gz.position),
            text: Xz,
            nearness: Wz * Wz * (3 - 2 * Wz),
            blockHeight: Xz && Oz ? Oz.y - Xz.y : null,
            name: this.translateCached(gz.nameKey),
            nameKey: gz.nameKey,
            markerIcon: gz.questMarkerIcon ? Ws[gz.questMarkerIcon] : "quest",
            popupToken: (null === Hz || void 0 === Hz ? void 0 : Hz.waypointNameKey) === gz.nameKey ? Hz.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(Fz)),
            hint: "search" === gz.questMarkerIcon && Math.hypot(gz.position[0] - zz[0], gz.position[2] - zz[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = wz, this.display.render(wz)
      }
      dispose() {
        this.lw = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Os = "skyblockSkillsView";
    class os extends uz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          sz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zz => zz,
          Fz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Wz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz => zz;
        super(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = tz, this.translate = sz, this.locale = Fz, this.itemName = Wz, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(zz, tz, sz) {
        this.translate = zz, this.locale = tz, this.itemName = sz, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(zz) {
        let tz = this.skillText.get(zz);
        return tz || (tz = {
          label: this.translate(`skyblockGame:${zz}`),
          description: this.translate(`skyblockGame:${zz}Description`)
        }, this.skillText.set(zz, tz)), tz
      }
      sources(zz) {
        if ("mining" === zz || "fishing" === zz) return this.buildSources(zz);
        let tz = this.sourceText.get(zz);
        return tz || (tz = this.buildSources(zz), this.sourceText.set(zz, tz)), tz
      }
      buildSources(zz) {
        const tz = this.translate;
        return "exploration" === zz ? [tz("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), tz("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === zz ? [tz("skyblockGame:logSource", {
          xp: this.number(bt["Maple Log"])
        })] : "combat" === zz ? [tz("skyblockGame:creatureKillSource"), tz("skyblockGame:noEnvironmentalXp")] : "farming" === zz ? [tz("skyblockGame:cropSource", {
          xp: this.number(gt["Wheat|FreshlyGrown"])
        }), tz("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), tz("skyblockGame:noYoungCropXp")] : Object.entries("mining" === zz ? Dt : Ht).map((zz => {
          let [sz, Fz] = zz;
          return tz("skyblockGame:itemXpSource", {
            item: this.itemName(sz),
            xp: this.number(Fz)
          })
        }))
      }
      number(zz) {
        return zz.toLocaleString(this.locale)
      }
      benefit(zz, tz) {
        const sz = Ot(zz, tz);
        return this.translate(sz.translationKey, {
          bonus: this.number(sz.percent)
        })
      }
      Sw(zz) {
        if (!this.lw) {
          if ("snapshot" === zz.kind) this.progress = zz.progress, this.pending.clear(), this.recent = null;
          else if ("award" === zz.kind && this.progress) {
            const {
              award: tz
            } = zz;
            this.progress = {
              ...this.progress,
              [tz.skill]: tz.after
            };
            for (const [zz, Fz] of this.pending) Fz.skill === tz.skill && this.pending.delete(zz);
            const sz = tz.after.level > tz.before.level;
            this.recordGain(tz.skill, tz.amount, sz ? ++this.nextLevelUpToken : null), sz && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: tz.skill,
              beforeLevel: tz.before.level,
              level: tz.after.level
            })
          } else {
            if ("rejectBlock" === zz.kind) return void this.rejectBlock(zz.position);
            if ("open" === zz.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(zz, tz, sz) {
        if (!this.progress || this.lw || sz) return;
        const Fz = function(zz, tz) {
          const sz = zz.split("|")[0];
          return "Air" === tz || tz === `Barkless ${zz}` ? Object.hasOwn(bt, sz) ? {
            skill: "foraging",
            amount: bt[sz]
          } : "Air" !== tz ? null : Object.hasOwn(Dt, zz) ? {
            skill: "mining",
            amount: Dt[zz]
          } : Kt(zz) ? {
            skill: "farming",
            amount: 10
          } : Nt(zz) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(gt, zz) ? {
            skill: "farming",
            amount: gt[zz]
          } : Object.hasOwn(hz, zz) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(tz, "Air");
        if (!Fz) return;
        const Wz = zz.join(",");
        if (this.pending.has(Wz)) return;
        const Xz = this.predictedProgress(Fz.skill).totalXp + Fz.amount;
        Number.isSafeInteger(Xz) && (this.pending.set(Wz, {
          ...Fz,
          expires: this.now() + 2e3
        }), this.recordGain(Fz.skill, 0), this.emit())
      }
      rejectBlock(zz) {
        this.pending.delete(zz.join(",")) && this.emit()
      }
      wN() {
        if (this.lw) return;
        let zz = !1;
        for (const [tz, sz] of this.pending) sz.expires <= this.now() && (this.pending.delete(tz), zz = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, zz = !0), zz && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(zz, tz) {
        var sz, Fz;
        let Wz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const Xz = (null === (sz = this.recent) || void 0 === sz ? void 0 : sz.skill) === zz && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          Oz = (null === (Fz = this.recent) || void 0 === Fz ? void 0 : Fz.skill) === zz && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: zz,
          confirmed: Xz + tz,
          expires: this.now() + 3e3,
          levelUpToken: null !== Wz && void 0 !== Wz ? Wz : Oz
        }
      }
      pendingXp(zz) {
        let tz = 0;
        for (const sz of this.pending.values()) sz.skill === zz && (tz += sz.amount);
        return tz
      }
      predictedProgress(zz) {
        const tz = this.progress[zz],
          sz = this.pendingXp(zz);
        return sz ? vt(tz.totalXp + sz, zz) : tz
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var zz, tz, sz;
        const Fz = this.progress ? Rz.map((zz => {
            const tz = this.predictedProgress(zz);
            return {
              ...this.text(zz),
              icon: Bt[zz],
              benefit: this.benefit(zz, tz.level),
              sources: this.sources(zz),
              id: zz,
              selected: zz === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(tz.level)
              }),
              xp: null === tz.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(tz.xpIntoLevel),
                target: this.number(tz.xpForNextLevel)
              }),
              percent: null === tz.xpForNextLevel ? 100 : Math.min(100, tz.xpIntoLevel / tz.xpForNextLevel * 100)
            }
          })) : [],
          Wz = Fz.find((zz => {
            var tz;
            return zz.id === (null === (tz = this.recent) || void 0 === tz ? void 0 : tz.skill)
          })),
          Xz = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: Fz,
          detail: null !== (zz = Fz.find((zz => zz.selected))) && void 0 !== zz ? zz : null,
          overallLevel: this.progress ? Rz.reduce(((zz, tz) => zz + this.predictedProgress(tz).level), 0) : null,
          hud: Wz && Xz > 0 ? {
            skill: Wz,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(Xz)
            }),
            levelUpToken: null !== (tz = null === (sz = this.recent) || void 0 === sz ? void 0 : sz.levelUpToken) && void 0 !== tz ? tz : null,
            colour: rt(Wz.id)
          } : null
        }
      }
    }
    const vs = Math.max(1600, 600, 950) + 400,
      Us = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Ks = "skyblockQuestsView",
      us = "skyblockQuestNotificationView";
    class Ns extends uz {
      constructor(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          Oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(zz, Fz, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = tz, this.translate = sz, this.now = Wz, this.locale = Xz, this.publishNotification = Oz, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var zz, tz;
          this.selected = null !== (zz = null === (tz = this.authoritative) || void 0 === tz ? void 0 : tz.trackedQuestId) && void 0 !== zz ? zz : null, this.show()
        }, this.select = zz => {
          this.selected = zz, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const zz = this.snapshot.detail;
          !this.lw && null !== zz && void 0 !== zz && zz.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(zz.id), this.emit())
        }, this.viewDialogue = () => {
          const zz = this.snapshot.detail;
          var tz;
          zz && (null === (tz = this.onViewDialogue) || void 0 === tz || tz.call(this, zz.id))
        }, this.notifications = new xt(Wz, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var zz, tz;
        return null !== (zz = null === (tz = this.authoritative) || void 0 === tz ? void 0 : tz.trackedQuestId) && void 0 !== zz ? zz : null
      }
      notify(zz) {
        !this.lw && this.notifications.enqueue(zz) && this.emitNotification()
      }
      setNotificationsHeld(zz) {
        (this.notifications.setHeld(zz) || zz) && this.emitNotification()
      }
      wN() {
        var zz, tz;
        if (this.lw) return;
        this.notifications.wN() && this.emitNotification();
        let sz = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, sz = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, sz = !0);
        const Fz = bs(this.authoritative);
        null !== Fz && void 0 !== Fz && null !== (zz = Fz.questClock) && void 0 !== zz && zz.running && this.clockText(Fz) !== (null === (tz = this.snapshot.tracked) || void 0 === tz ? void 0 : tz.clock) && (sz = !0), sz && this.emit()
      }
      setTranslator(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = zz, this.locale = tz, this.emitNotification(), this.emit()
      }
      Sw(zz) {
        if (!this.lw)
          if ("completion" === zz.kind) this.notify(zz.questCompletion);
          else if ("landmark" === zz.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: zz.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === zz.kind) {
          var tz, sz, Fz;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: zz.npcNoteTitleKey,
            textKey: zz.npcNoteTextKey,
            params: null !== (tz = zz.npcNoteParams) && void 0 !== tz ? tz : {},
            nameKeys: null !== (sz = zz.npcNoteNameKeys) && void 0 !== sz ? sz : {},
            iconItem: null !== (Fz = zz.npcNoteIconItem) && void 0 !== Fz ? Fz : null
          })
        } else if ("open" === zz.kind) this.show();
        else if ("guidance" === zz.kind) this.waypoint = zz.waypoint, this.compassTarget = zz.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === zz.kind) {
          this.authoritative = zz.snapshot, this.notifications.wN() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const tz = this.trackedStepPulse;
          this.updateTrackedStepPulse(zz.snapshot), this.emit(), this.trackedStepPulse > tz && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.lw || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var zz;
        return null !== (zz = this.translateWithIcons) && void 0 !== zz ? zz : this.translate
      }
      clockText(zz) {
        const tz = zz.questClock;
        if (!tz) return null;
        const sz = tz.elapsedMs + (tz.running ? this.now() - this.receivedAt : 0);
        return void 0 === tz.countdownFromMs ? jz(sz, !1) : jz(1e3 * Math.ceil(Math.max(0, tz.countdownFromMs - sz) / 1e3), !1)
      }
      updateTrackedStepPulse(zz) {
        var tz, sz, Fz;
        const Wz = bs(zz);
        if (!Wz) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const Xz = zz => Wz.subquests.filter((tz => zz(tz.status))).map((zz => zz.id)),
          Oz = Xz((zz => "completed" === zz || "skipped" === zz)),
          oz = Xz((zz => "locked" !== zz)),
          vz = (null === (tz = this.trackedSteps) || void 0 === tz ? void 0 : tz.questId) === Wz.id && Wz.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (vz) {
          const zz = Oz.filter((zz => !vz.finished.has(zz))),
            tz = Xz((zz => "active" === zz || "ready" === zz)).filter((zz => !vz.unlocked.has(zz)));
          zz.length > 0 && this.trackedStepPulse++, (zz.length > 0 || tz.length > 0) && (this.trackedChange = {
            finished: new Set(zz),
            unlocked: new Set(tz),
            expiresAt: this.now() + vs
          })
        } else {
          var Uz;
          this.trackedStepPulse = (null === (Uz = this.trackedSteps) || void 0 === Uz ? void 0 : Uz.questId) === Wz.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Wz.id,
          progress: Wz.progress,
          finished: new Set([...null !== (sz = null === vz || void 0 === vz ? void 0 : vz.finished) && void 0 !== sz ? sz : [], ...Oz]),
          unlocked: new Set([...null !== (Fz = null === vz || void 0 === vz ? void 0 : vz.unlocked) && void 0 !== Fz ? Fz : [], ...oz])
        }
      }
      entry(zz, tz) {
        var sz, Fz;
        const Wz = zz.id === (null === (sz = this.authoritative) || void 0 === sz ? void 0 : sz.trackedQuestId),
          Xz = this.now() < this.trackAvailableAt,
          Oz = this.questTextTranslator(),
          oz = zz.subquests.map((tz => {
            var sz, Fz, Xz, oz, vz, Uz;
            const Kz = null !== (sz = tz.handInNpcName) && void 0 !== sz ? sz : zz.giverName,
              uz = this.translate("skyblockGame:progress", {
                current: tz.progress.toLocaleString(this.locale),
                target: tz.target.toLocaleString(this.locale)
              }),
              Nz = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: Kz ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [tz.status],
              bz = "active" === tz.status || "ready" === tz.status;
            return {
              id: tz.id,
              name: Yt(Oz, tz.nameKey, tz.nameParams),
              description: Yt(Oz, tz.descriptionKey, tz.descriptionParams),
              progress: uz,
              status: tz.status,
              statusLabel: Nz ? this.translate(Nz, {
                npc: Kz
              }) : uz,
              iconItem: bz && null !== (Fz = tz.questIconItem) && void 0 !== Fz ? Fz : null,
              barPercent: "active" === tz.status && tz.showsProgressBar ? Math.min(100, 100 * tz.progress / tz.target) : null,
              justFinished: Wz && null !== (Xz = null === (oz = this.trackedChange) || void 0 === oz ? void 0 : oz.finished.has(tz.id)) && void 0 !== Xz && Xz,
              justUnlocked: Wz && null !== (vz = null === (Uz = this.trackedChange) || void 0 === Uz ? void 0 : Uz.unlocked.has(tz.id)) && void 0 !== vz && vz
            }
          }));
        return {
          id: zz.id,
          name: Yt(Oz, zz.nameKey, zz.nameParams),
          description: Yt(Oz, zz.descriptionKey, zz.descriptionParams),
          progress: tz ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: zz.progress.toLocaleString(this.locale),
            target: zz.target.toLocaleString(this.locale)
          }),
          completed: tz,
          tracked: Wz,
          selected: zz.id === this.selected,
          canTrack: !tz && !Wz && !Xz,
          trackLabel: this.translate(Wz ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : Xz ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== zz.id,
          subquests: oz,
          focusStep: null !== (Fz = oz.find((zz => null !== zz.barPercent))) && void 0 !== Fz ? Fz : null,
          clock: this.clockText(zz)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz;
        const Kz = [...null !== (zz = null === (tz = this.authoritative) || void 0 === tz ? void 0 : tz.active) && void 0 !== zz ? zz : [], ...null !== (sz = null === (Fz = this.authoritative) || void 0 === Fz ? void 0 : Fz.completed) && void 0 !== sz ? sz : []];
        var uz, Nz, bz, wz;
        Kz.some((zz => zz.id === this.selected)) || (this.selected = null !== (uz = null !== (Nz = null === (bz = this.authoritative) || void 0 === bz ? void 0 : bz.trackedQuestId) && void 0 !== Nz ? Nz : null === (wz = Kz[0]) || void 0 === wz ? void 0 : wz.id) && void 0 !== uz ? uz : null);
        const Dz = null !== (Wz = null === (Xz = this.authoritative) || void 0 === Xz ? void 0 : Xz.active.map((zz => this.entry(zz, !1)))) && void 0 !== Wz ? Wz : [];
        Dz.sort(((zz, tz) => Number(tz.tracked) - Number(zz.tracked)));
        const gz = null !== (Oz = null === (oz = this.authoritative) || void 0 === oz ? void 0 : oz.completed.map((zz => this.entry(zz, !0)))) && void 0 !== Oz ? Oz : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: Dz,
          completed: gz,
          completedExpanded: this.completedExpanded,
          detail: null !== (vz = [...Dz, ...gz].find((zz => zz.selected))) && void 0 !== vz ? vz : null,
          tracked: null !== (Uz = Dz.find((zz => zz.tracked))) && void 0 !== Uz ? Uz : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function bs(zz) {
      var tz;
      return null !== (tz = null === zz || void 0 === zz ? void 0 : zz.active.find((tz => tz.id === zz.trackedQuestId))) && void 0 !== tz ? tz : null
    }
    const ws = "skyblockDungeonsView";
    class Ds extends uz {
      constructor(zz, tz) {
        let sz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          Fz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = tz, this.locale = sz, this.requestEnter = Fz, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            tz = null === zz || void 0 === zz ? void 0 : zz.difficulties[this.pageIndex];
          void 0 !== tz && null !== tz.unlockedBoss && (this.close(), this.requestEnter(zz.id, tz.difficulty))
        }
      }
      setTranslator(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = zz, this.locale = tz, this.emit()
      }
      Sw(zz) {
        var tz, sz;
        if (!this.lw) return "open" === zz.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== zz.kind ? "snapshot" === zz.kind && (this.authoritative = zz.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (tz = null === (sz = this.pickerEntry()) || void 0 === sz ? void 0 : sz.difficulties.length) && void 0 !== tz ? tz : 1) - 1)), null === zz.snapshot && this.open ? this.close() : this.emit()) : this.choose(zz.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(zz) {
        var tz;
        const sz = null === (tz = this.authoritative) || void 0 === tz ? void 0 : tz.dungeons.find((tz => tz.id === zz));
        void 0 !== sz ? this.open && this.pickerDungeonId === zz || (this.pickerDungeonId = zz, this.pageIndex = Math.max(0, sz.difficulties.findLastIndex((zz => null !== zz.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${zz}`)
      }
      turnTo(zz) {
        var tz, sz;
        const Fz = null !== (tz = null === (sz = this.pickerEntry()) || void 0 === sz ? void 0 : sz.difficulties.length) && void 0 !== tz ? tz : 0;
        zz < 0 || zz >= Fz || zz === this.pageIndex || (this.pageIndex = zz, this.emit())
      }
      pickerEntry() {
        var zz, tz;
        return null !== (zz = null === (tz = this.authoritative) || void 0 === tz ? void 0 : tz.dungeons.find((zz => zz.id === this.pickerDungeonId))) && void 0 !== zz ? zz : null
      }
      difficulty(zz) {
        const tz = zz.completions > 0,
          sz = null === zz.bestMs ? null : jz(zz.bestMs);
        return {
          difficulty: zz.difficulty,
          label: this.translate(Tz[zz.difficulty]),
          colour: cz[zz.difficulty],
          beaten: tz,
          bestTime: sz,
          completions: zz.completions,
          summary: tz ? [null === sz ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: sz
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: zz.completions.toLocaleString(this.locale)
          })].filter((zz => null !== zz)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(zz) {
        const tz = zz.difficulties.map((zz => this.difficulty(zz))),
          sz = tz.filter((zz => zz.beaten)).length;
        return {
          id: zz.id,
          name: this.translate(zz.nameKey),
          selected: zz.id === this.selected,
          beatenSummary: `${sz} / ${tz.length}`,
          difficulties: tz
        }
      }
      picker() {
        const zz = this.pickerEntry();
        if (null === zz || 0 === zz.difficulties.length) return null;
        const tz = zz.difficulties.map(((tz, sz) => {
          var Fz, Wz, Xz, Oz;
          const oz = tz.unlockedBoss,
            vz = null === oz ? this.lockedHint(zz, sz) : null;
          return {
            ...this.difficulty(tz),
            unlocked: null !== oz,
            bossName: null === oz ? null : this.translate(oz.bossNameKey),
            bossMobType: null !== (Fz = null === oz || void 0 === oz ? void 0 : oz.bossMobType) && void 0 !== Fz ? Fz : null,
            bossMobVariation: null !== (Wz = null === oz || void 0 === oz ? void 0 : oz.bossMobVariation) && void 0 !== Wz ? Wz : null,
            lockedHint: null !== (Xz = null === vz || void 0 === vz ? void 0 : vz.text) && void 0 !== Xz ? Xz : null,
            lockedHintHighlight: null !== (Oz = null === vz || void 0 === vz ? void 0 : vz.highlight) && void 0 !== Oz ? Oz : null,
            current: sz === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(zz.nameKey),
          pages: tz,
          page: tz[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < tz.length - 1
        }
      }
      lockedHint(zz, tz) {
        var sz, Fz, Wz;
        if (0 === tz && "number" === typeof zz.combatLevelLock) {
          const tz = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: zz.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: tz,
            colour: rt("combat"),
            icon: Bt.combat
          })
        }
        const Xz = null !== (sz = null === (Fz = this.authoritative) || void 0 === Fz ? void 0 : Fz.dungeons) && void 0 !== sz ? sz : [],
          Oz = tz > 0 ? zz : null !== (Wz = Xz[Xz.indexOf(zz) - 1]) && void 0 !== Wz ? Wz : null,
          oz = tz > 0 ? zz.difficulties[tz - 1] : null === Oz || void 0 === Oz ? void 0 : Oz.difficulties[0];
        if (null === Oz || void 0 === oz) return null;
        const vz = this.translate(Oz.nameKey);
        if (null === oz.unlockedBoss) return Oz === zz ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, oz.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: vz
        }, oz.difficulty);
        const Uz = this.translate(oz.unlockedBoss.bossNameKey);
        return Oz === zz ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Uz
        }, oz.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Uz,
            dungeon: vz
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(zz, tz, sz) {
        return this.hintHighlighting(zz, tz, "difficulty", {
          name: this.translate(Tz[sz]),
          colour: cz[sz],
          icon: null
        })
      }
      hintHighlighting(zz, tz, sz, Fz) {
        let {
          name: Wz,
          colour: Xz,
          icon: Oz
        } = Fz;
        const oz = this.translate(zz, {
          ...tz,
          [sz]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(zz, {
            ...tz,
            [sz]: Wz
          }),
          highlight: 2 === oz.length ? {
            before: oz[0],
            name: Wz,
            after: oz[1],
            colour: Xz,
            icon: Oz
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var zz, tz, sz;
        const Fz = null !== (zz = null === (tz = this.authoritative) || void 0 === tz ? void 0 : tz.dungeons) && void 0 !== zz ? zz : [];
        var Wz, Xz;
        Fz.some((zz => zz.id === this.selected)) || (this.selected = null !== (Wz = null === (Xz = Fz[0]) || void 0 === Xz ? void 0 : Xz.id) && void 0 !== Wz ? Wz : null);
        const Oz = Fz.map((zz => this.entry(zz)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: Oz,
          detail: null !== (sz = Oz.find((zz => zz.selected))) && void 0 !== sz ? sz : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const gs = ["mining", "farming", "foraging", "fishing", "combat"],
      Hs = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      Bs = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Ps() {
      for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
      return tz.map(((zz, tz) => ({
        amount: zz,
        coins: Hs[tz],
        xp: Bs[tz]
      })))
    }
    const rs = Ps(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Ys = Ps(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      xs = Ps(50, 100, 250, 500, 1e3, 2500, 5e3),
      ms = Ps(25, 50, 100, 250, 500, 1e3),
      Is = Ps(10, 25, 50, 100, 250, 500, 1e3),
      Cs = Ps(1, 5, 10, 25, 50);

    function es(zz, tz) {
      return {
        id: zz,
        category: "fishing",
        item: tz,
        drops: [tz],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Is
      }
    }
    const Zs = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Ys
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: xs
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: xs
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: ms
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: ms
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Ys
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: rs
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: rs
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: rs
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: xs
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Ys
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Ys
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Ys
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: xs
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: xs
      }, es("wheatfish", "Wheatfish"), es("darter", "Darter"), es("sunset_minnow", "Sunset Minnow"), es("root_flounder", "Root Flounder"), es("greenfin_loach", "Greenfin Loach"), es("red_strongfish", "Red Strongfish"), es("green_strongfish", "Green Strongfish"), es("boomerang_fish", "Boomerang Fish"), es("seahorse", "Seahorse"), es("spined_stickleback", "Spined Stickleback"), es("moon_strongfish", "Moon Strongfish"), es("boulder_bass", "Boulder Bass"), es("grass_snapper", "Grass Snapper"), es("crystal_wheatfish", "Crystalized Wheatfish", Cs), es("moonstone_pupfish", "Moonstone Pupfish", Cs), es("reedglass_minnow", "Reedglass Minnow"), es("mangrove_herring", "Mangrove Herring"), es("mudline_perch", "Mudline Perch"), es("coastal_mullet", "Coastal Mullet"), es("reef_sardine", "Reef Sardine"), es("root_perch", "Root Perch"), es("driftwood_catfish", "Driftwood Catfish"), es("aether_minnow", "Aether Minnow"), es("needlefish", "Tri-Pointed Needlefish"), es("threadfin_bream", "Threadfin Bream"), es("mudbelly_tilapia", "Mudbelly Tilapia"), es("rotslab_eel", "Rotslab Eel"), es("polarflash_electron", "Polarflash Electron"), es("mireback_carp", "Mireback Carp"), es("blackwater_bream", "Blackwater Bream"), es("stone_grouper", "Stone Grouper"), es("shadeback_ray", "Shadeback Ray"), es("glacial_silverfish", "Glacial Silverfish"), es("hatchetfish", "Hatchetfish"), es("moonlit_boomerang", "Moonlit Boomerang Fish"), es("murkborne_ray", "Murkborne Ray"), es("bamboo_catfish", "Bamboo Catfish"), es("mossback_arapaima", "Mossback Arapaima"), es("murk_stingray", "Murk Stingray"), es("channel_sawfish", "Channel Sawfish"), es("boned_sturgeon", "Boned Sturgeon"), es("oarfish", "Oarfish"), es("snakehead", "Snakehead", Cs), es("eldertide_leviathan", "Eldertide Leviathan", Cs), es("pithead", "Pithead"), es("electric_eel", "Electric Eel"), es("shadow_darter", "Shadow Darter"), es("abyss_carp", "Abyss Carp"), es("nomai_moray", "Nomai Moray"), es("silver_dragonfish", "Silver Dragonfish"), es("giant_moray", "Giant Moray"), es("coelacanth", "Coelacanth", Cs), es("frost_herring", "Frost Herring"), es("permafrost_halibut", "Permafrost Halibut"), es("glacial_lanternfish", "Glacial Lanternfish"), es("frozen_grenadier", "Frozen Grenadier"), es("blackfin_icefish", "Blackfin Icefish"), es("moonfish", "Moonfish"), es("alpha_strongfish", "Alpha Moon Strongfish"), es("deep_lanternfish", "Deepwater Lanternfish", Cs), es("pearlescent_moonfish", "Pearlescent Moonfish", Cs), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Ys
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: ms
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: ms
      }],
      Gs = (new Map(Zs.map((zz => [zz.id, zz]))), new Map),
      Ts = new Map;
    for (const Nv of Zs) {
      for (const [zz, tz] of Object.entries(null !== (cs = Nv.blocks) && void 0 !== cs ? cs : {})) {
        var cs;
        Gs.set(zz, {
          collection: Nv,
          amount: tz
        })
      }
      for (const zz of null !== (As = Nv.drops) && void 0 !== As ? As : []) {
        var As;
        Ts.set(zz, Nv)
      }
    }

    function ys(zz, tz) {
      let sz = 0;
      for (; sz < zz.tiers.length && tz >= zz.tiers[sz].amount;) sz++;
      return sz
    }
    const Ms = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function ds(zz) {
      return Ms[zz - 1]
    }
    const hs = "skyblockCollectionsView";
    class Qs extends uz {
      constructor(zz, tz) {
        let sz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Fz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz => zz;
        super(zz, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = tz, this.locale = sz, this.itemName = Fz, this.counts = null, this.category = "mining", this.selected = Zs[0].id, this.snapshot = {
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
      setTranslator(zz, tz, sz) {
        this.translate = zz, this.locale = tz, this.itemName = sz, this.emit()
      }
      Sw(zz) {
        if (!this.lw)
          if ("collOpen" !== zz.kind) {
            (zz.collFull || null === this.counts) && (this.counts = new Map);
            for (const [tz, sz] of zz.collCounts) this.counts.set(tz, sz);
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
        const tz = this.inCategory(this.category).map((zz => this.collectionView(zz))),
          sz = Zs.reduce(((zz, tz) => zz + this.tierOf(tz)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: gs.map((zz => this.categoryView(zz))),
          collections: tz,
          detail: null !== (zz = tz.find((zz => zz.selected))) && void 0 !== zz ? zz : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(sz)
          })
        }
      }
      categoryView(zz) {
        const tz = this.inCategory(zz),
          sz = tz.reduce(((zz, tz) => zz + this.tierOf(tz)), 0),
          Fz = tz.reduce(((zz, tz) => zz + tz.tiers.length), 0);
        return {
          id: zz,
          label: this.translate(`skyblockGame:${zz}`),
          icon: Bt[zz],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(sz),
            target: this.number(Fz)
          }),
          selected: zz === this.category
        }
      }
      collectionView(zz) {
        var tz, sz;
        const Fz = null !== (tz = this.counts.get(zz.id)) && void 0 !== tz ? tz : 0,
          Wz = ys(zz, Fz),
          Xz = null !== (sz = zz.tiers[Wz]) && void 0 !== sz ? sz : null,
          Oz = 0 === Wz ? 0 : zz.tiers[Wz - 1].amount;
        return {
          id: zz.id,
          name: this.itemName(zz.item),
          icon: zz.item,
          selected: zz.id === this.selected,
          locked: 0 === Fz,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(Fz)
          }),
          tier: 0 === Wz ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Wz),
          percent: null === Xz ? 100 : Math.min(100, (Fz - Oz) / (Xz.amount - Oz) * 100),
          progress: null === Xz ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(Fz),
            target: this.number(Xz.amount)
          }),
          nextReward: null === Xz ? null : this.reward(zz, Xz.coins, Xz.xp)
        }
      }
      reward(zz, tz, sz) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(tz),
          xp: this.number(sz),
          skill: this.translate(`skyblockGame:${zz.category}`)
        })
      }
      tierLabel(zz) {
        return this.translate("skyblockGame:collectionTier", {
          tier: ds(zz)
        })
      }
      tierOf(zz) {
        var tz;
        return ys(zz, null !== (tz = this.counts.get(zz.id)) && void 0 !== tz ? tz : 0)
      }
      inCategory(zz) {
        return Zs.filter((tz => tz.category === zz))
      }
      number(zz) {
        return zz.toLocaleString(this.locale)
      }
    }
    const ks = "skyblockPortalTransitView",
      is = "skyblockPortalArrival";
    class Ls {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Yg = zz, this.storage = tz, this.now = sz, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Sw(zz) {
        const tz = {
          zoneNameKey: zz.transitZoneNameKey,
          variation: zz.transitZoneVariation,
          colour: zz.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(is, tz), this.show("departure", tz.zoneNameKey, tz.colour, zz.transitDurationMs, zz.transitDurationMs + 1500, (() => {
          this.storage.removeItem(is)
        }))
      }
      resumeArrival(zz) {
        const tz = this.storage.getItem(is);
        this.storage.removeItem(is), null === tz || tz.variation !== zz || this.now() - tz.departedAt > 3e4 || this.show("arrival", tz.zoneNameKey, tz.colour, 3200, 2e4)
      }
      finishArrival(zz) {
        var tz;
        "arrival" === (null === (tz = this.view) || void 0 === tz ? void 0 : tz.phase) && this.view.token === zz && (this.clearTimer(), this.view = null, this.Yg(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(zz, tz, sz, Fz, Wz, Xz) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: zz,
          zoneNameKey: tz,
          colour: sz,
          durationMs: Fz
        }, this.Yg(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Yg(null), null === Xz || void 0 === Xz || Xz()
        }), Wz)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const ls = "skyblockDailyRewardView",
      ns = "skyblockDailyRewardCoin";
    class as {
      constructor(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          vz = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Yg = zz, this.isBusy = tz, this.holdQuestPopups = sz, this.onHeldCoinsChanged = Fz, this.onCoinLanded = Wz, this.onStarted = Xz, this.onFinished = Oz, this.onItemLanded = oz, this.now = vz, this.po = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var zz, tz;
        return null !== (zz = null === (tz = this.playing) || void 0 === tz ? void 0 : tz.view) && void 0 !== zz ? zz : null
      }
      getHeldCoins() {
        var zz, tz;
        let sz = 0;
        for (const Fz of this.po) sz += Fz.coins;
        return sz - (null !== (zz = null === (tz = this.playing) || void 0 === tz ? void 0 : tz.released) && void 0 !== zz ? zz : 0)
      }
      Sw(zz) {
        "dailyRewardClaimed" !== zz.kind ? (this.queue.push(zz), this.wN()) : this.po.push({
          coins: zz.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      wN() {
        const zz = this.now();
        if (null === this.playing) return this.releaseUnshown(zz), void this.startNext(zz);
        const tz = this.playing,
          sz = zz - tz.startedAt,
          Fz = tz.view.flyingCoins,
          Wz = function(zz, tz) {
            let sz = 0;
            for (; sz < tz && Ss(sz, tz) <= zz;) sz++;
            return sz
          }(sz, Fz);
        if (Wz !== tz.landed) {
          for (let zz = Wz - tz.landed > 2 ? Wz - 1 : tz.landed; zz < Wz; zz++) this.onCoinLanded(zz, Fz);
          tz.landed = Wz, tz.released = Math.round(tz.view.coins * Wz / Fz), this.onHeldCoinsChanged()
        }
        for (; tz.itemsLanded < tz.view.items.length && 2e3 + 160 * tz.itemsLanded + 630 <= sz;) this.onItemLanded(tz.itemsLanded), tz.itemsLanded++;
        sz >= tz.view.durationMs && (this.finish(), this.startNext(zz))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.po = [], this.Yg(null)
      }
      startNext(zz) {
        if (0 === this.queue.length || this.isBusy()) return;
        const tz = this.queue.shift();
        this.token++;
        const sz = {
          token: this.token,
          day: tz.dailyRewardDay,
          coins: tz.dailyRewardCoins,
          items: tz.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: tz.dailyRewardDay === ez ? 24 : 14
        };
        this.playing = {
          view: sz,
          startedAt: zz,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Yg(sz), this.onStarted(sz)
      }
      finish() {
        this.po.shift(), this.playing = null, this.holdQuestPopups(!1), this.Yg(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(zz) {
        if (this.queue.length > 0 || 0 === this.po.length) return;
        const tz = this.po.length;
        this.po = this.po.filter((tz => zz - tz.receivedAt < 6e4)), this.po.length !== tz && this.onHeldCoinsChanged()
      }
    }

    function qs(zz, tz) {
      return 450 + 715 * zz / (tz - 1)
    }

    function Ss(zz, tz) {
      return qs(zz, tz) + 650
    }
    const Vs = "skyblockMailboxView";
    class Rs {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Yg = zz, this.isBusy = tz, this.onStarted = sz, this.now = Fz, this.waiting = [], this.playing = null, this.token = 0, this.itemName = zz => zz
      }
      getSnapshot() {
        var zz, tz;
        return null !== (zz = null === (tz = this.playing) || void 0 === tz ? void 0 : tz.view) && void 0 !== zz ? zz : null
      }
      setItemName(zz) {
        this.itemName = zz
      }
      Sw(zz) {
        this.waiting.push(...zz.mailLetters), this.wN()
      }
      wN() {
        const zz = this.now();
        null !== this.playing && zz - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Yg(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(zz)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Yg(null)
      }
      start(zz) {
        const tz = this.waiting.slice(0, 3);
        this.token++;
        const sz = {
          token: this.token,
          letters: tz.map((zz => this.toView(zz))),
          more: this.waiting.length - tz.length,
          durationMs: 4500 + 700 * tz.length
        };
        this.waiting = [], this.playing = {
          view: sz,
          startedAt: zz
        }, this.Yg(sz), this.onStarted(sz)
      }
      toView(zz) {
        return {
          coins: zz.mailCoins,
          items: zz.mailItems.map((zz => {
            var tz;
            return {
              itemName: zz.mailItemName,
              amount: zz.mailItemAmount,
              label: null !== (tz = zz.mailItemLabel) && void 0 !== tz ? tz : this.itemName(zz.mailItemName)
            }
          })),
          reasonKey: zz.mailReasonKey,
          reasonParams: zz.mailReasonParams
        }
      }
    }
    const ps = "skyblockQuestGraphView",
      fs = "skyblockDevQuestJump";

    function Es(zz) {
      if (0 === zz.length) return "";
      const tz = [`M ${zz[0].x} ${zz[0].y}`];
      for (let Fz = 1; Fz < zz.length - 1; Fz++) {
        const sz = zz[Fz + 1];
        tz.push(`Q ${zz[Fz].x} ${zz[Fz].y} ${(zz[Fz].x+sz.x)/2} ${(zz[Fz].y+sz.y)/2}`)
      }
      const sz = zz[zz.length - 1];
      return tz.push(`L ${sz.x} ${sz.y}`), tz.join(" ")
    }

    function zF(zz, tz) {
      return zz < tz ? `${zz}|${tz}` : `${tz}|${zz}`
    }
    class tF extends uz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(zz, sz, Fz), this.translate = tz, this.requestJump = Wz, this.requestArrive = Xz, this.storage = Oz, this.now = oz, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      Sw(zz) {
        if (!this.lw)
          if ("graph" !== zz.kind) {
            if ("jumping" === zz.kind) {
              const tz = {
                questId: zz.graphQuestId,
                variation: zz.graphVariation,
                completes: zz.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(fs, tz)
            }
          } else {
            const tz = ++this.graphCount;
            sz.e(111).then((() => sz(6028))).then((sz => {
              let {
                default: Fz
              } = sz;
              this.lw || tz !== this.graphCount || (this.layout = function(zz, tz, sz) {
                var Fz, Wz;
                const Xz = new zz.graphlib.Graph;
                Xz.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), Xz.setDefaultEdgeLabel((() => ({})));
                const Oz = new Set;
                for (const Kz of tz) Oz.add(Kz.graphQuestId), Xz.setNode(Kz.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const oz = sz.filter((zz => Oz.has(zz.graphFromId) && Oz.has(zz.graphToId) && zz.graphFromId !== zz.graphToId)),
                  vz = new Map;
                for (const Kz of [...oz].sort(((zz, tz) => Number("awaits" === zz.graphEdgeKind) - Number("awaits" === tz.graphEdgeKind)))) {
                  const zz = zF(Kz.graphFromId, Kz.graphToId);
                  vz.has(zz) || (vz.set(zz, Kz), Xz.setEdge(Kz.graphFromId, Kz.graphToId))
                }
                zz.layout(Xz);
                const Uz = Xz.graph();
                return {
                  width: Math.ceil(null !== (Fz = Uz.width) && void 0 !== Fz ? Fz : 0),
                  height: Math.ceil(null !== (Wz = Uz.height) && void 0 !== Wz ? Wz : 0),
                  nodes: tz.map((zz => {
                    var tz, sz;
                    const Fz = Xz.node(zz.graphQuestId);
                    return {
                      node: zz,
                      left: (null !== (tz = Fz.x) && void 0 !== tz ? tz : 0) - 95,
                      top: (null !== (sz = Fz.y) && void 0 !== sz ? sz : 0) - 26
                    }
                  })),
                  edges: oz.map((zz => {
                    var tz;
                    const sz = vz.get(zF(zz.graphFromId, zz.graphToId)),
                      Fz = null !== (tz = Xz.edge(sz.graphFromId, sz.graphToId).points) && void 0 !== tz ? tz : [];
                    return {
                      edge: zz,
                      key: `${zz.graphFromId}|${zz.graphToId}|${zz.graphEdgeKind}`,
                      path: Es(sz.graphFromId === zz.graphFromId ? Fz : [...Fz].reverse())
                    }
                  })),
                  plans: new Map(tz.map((zz => [zz.graphQuestId, new Set([zz.graphQuestId, ...zz.graphPlanIds])])))
                }
              }(Fz, zz.graphNodes, zz.graphEdges), this.show())
            })).catch((zz => {
              console.error("The quest graph could not be laid out", zz)
            }))
          }
      }
      resumeJump(zz) {
        const tz = this.storage.getItem(fs);
        this.storage.removeItem(fs), null === tz || tz.variation !== zz || this.now() - tz.departedAt > 6e4 || this.requestArrive(tz.questId, tz.completes)
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
        var zz, tz;
        return null !== (zz = null === this.hoveredId || null === (tz = this.layout) || void 0 === tz ? void 0 : tz.plans.get(this.hoveredId)) && void 0 !== zz ? zz : new Set
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
        const tz = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: zz.width,
          height: zz.height,
          nodes: zz.nodes.map((zz => {
            let {
              node: sz,
              left: Fz,
              top: Wz
            } = zz;
            return {
              id: sz.graphQuestId,
              name: this.translate(sz.graphNameKey),
              detail: null === sz.graphGiverName ? sz.graphZoneId : `${sz.graphGiverName} \xb7 ${sz.graphZoneId}`,
              state: sz.graphState,
              left: Fz,
              top: Wz,
              inPlan: tz.has(sz.graphQuestId),
              hovered: sz.graphQuestId === this.hoveredId
            }
          })),
          edges: zz.edges.map((zz => {
            let {
              edge: sz,
              key: Fz,
              path: Wz
            } = zz;
            return {
              key: Fz,
              kind: sz.graphEdgeKind,
              path: Wz,
              inPlan: tz.has(sz.graphFromId) && tz.has(sz.graphToId)
            }
          })),
          planning: tz.size > 0
        }
      }
    }
    var sF = sz(36451);
    const FF = 250,
      WF = 2150,
      XF = -2.8,
      OF = 2.2,
      oF = -27,
      vF = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      UF = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      KF = Math.round(50 + 1e3 * (UF.delay + UF.period / 2)),
      uF = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      NF = Array.from({
        length: 26
      }, ((zz, tz) => {
        const sz = 2.39996 * tz,
          Fz = .5 + .618034 * tz % 1 * .23,
          Wz = tz % 3 !== 2;
        return {
          rune: Wz ? uF[7 * tz % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(sz)*Fz).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(sz)*Fz).toFixed(3)})`,
            "--spin": 40 * (tz % 5 - 2) + "deg",
            "--size": (Wz ? 1 + tz % 4 * .2 : .3 + tz % 2 * .15) + "rem",
            "--duration": `${(1.8+7*tz%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*tz%3).toFixed(2)}s`
          }
        }
      }));

    function bF(zz, tz) {
      return Array.from({
        length: 30 + 3 * zz + (tz ? 10 : 0)
      }, ((zz, tz) => {
        const sz = tz < 4,
          Fz = sz ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Wz = sz ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          Xz = sz ? 2.2 : .6 + Math.random(),
          Oz = sz ? .3 : Math.random() < .5 ? .16 : .24,
          oz = sz ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": Fz,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Wz.toFixed(2)}rem`,
          "--length": `${Xz.toFixed(2)}rem`,
          "--width": `${Oz}rem`,
          "--duration": `${Math.round(oz)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function wF(zz) {
      let {
        zeta: tz,
        period: sz
      } = zz;
      const Fz = 2 * Math.PI / sz;
      return {
        w: Fz,
        decay: tz * Fz / Math.sqrt(1 - tz * tz)
      }
    }
    let DF = !1;

    function gF() {
      if (DF) return;
      DF = !0;
      const zz = document.createElement("style");
      zz.textContent = function() {
        const zz = wF(vF),
          tz = wF(UF),
          sz = tz => Math.exp(-zz.decay * tz) * Math.sin(zz.w * tz),
          Fz = sz(Math.atan(zz.w / zz.decay) / zz.w),
          Wz = .25,
          Xz = 2.15,
          Oz = Math.round(215),
          oz = [];
        for (let vz = 0; vz <= Oz; vz++) {
          const zz = vz / Oz * Xz;
          let Uz = Math.sin(Math.min(zz, Wz) / Wz * Math.PI / 2) ** 2,
            Kz = 0,
            uz = 1,
            Nz = 1 - .2 * Uz,
            bz = 1;
          if (zz >= Wz) {
            const Oz = zz - Wz,
              oz = Math.max(0, Oz - .05);
            Uz = Math.exp(-oz / .05), Kz = sz(oz + vF.lead * (1 - Math.exp(-oz / vF.rush))) / Fz;
            const vz = oz - UF.delay,
              wz = vz <= 0 ? 0 : 1 - Math.exp(-tz.decay * vz) * (Math.cos(tz.w * vz) + tz.decay / tz.w * Math.sin(tz.w * vz)),
              Dz = Math.max(0, (zz - 1.77) / (Xz - 1.77));
            uz = (1 + (UF.to - 1) * wz) * (1 + .08 * Dz), Nz = 1.1 + 1.5 * Math.exp(-Oz / .07) + .3 * Math.exp(-(((1e3 * Oz - KF) / 100) ** 2)) + .8 * Dz, bz = 1 - Dz ** 1.5
          }
          const wz = .15 * Uz + XF * Kz,
            Dz = -.1 * Uz + OF * Kz,
            gz = 3 * Uz + oF * Kz;
          oz.push(`${(vz/Oz*100).toFixed(3)}% { opacity: ${bz.toFixed(3)}; transform: translate(${wz.toFixed(3)}rem, ${Dz.toFixed(3)}rem) rotate(${gz.toFixed(2)}deg) scale(${uz.toFixed(3)}); filter: brightness(${Nz.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${oz.join(" ")} }`
      }(), document.head.append(zz)
    }
    const HF = "skyblockForgeView",
      BF = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class PF extends uz {
      constructor(zz, tz, sz, Fz, Wz) {
        super(zz, sz, Fz), this.translate = tz, this.requestForge = Wz, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (zz, tz) => {
          var sz, Fz;
          null !== this.forging || (null !== (sz = this.owned[(0, sF.s)(tz, zz)]) && void 0 !== sz ? sz : 0) <= 0 || (this.selected[zz] = this.selected[zz] === tz ? null : tz, this.status = null, null === (Fz = this.onPartSelected) || void 0 === Fz || Fz.call(this), this.emit())
        }, this.forge = zz => {
          var tz, sz;
          const Fz = this.selectedParts();
          if (null === Fz || this.isPending() || !this.open) return;
          const Wz = (0, sF.p)(Fz);
          if (null === Wz || Wz.coalCost > this.coal) return;
          const Xz = this.preview(Wz),
            Oz = null !== (tz = null === (sz = this.onForgeStarted) || void 0 === sz ? void 0 : sz.call(this, Xz.tier, Xz.named, zz)) && void 0 !== tz ? tz : () => {};
          if (this.dropArrival(), zz) {
            const zz = {
              id: ++this.forgeId,
              preview: Xz,
              timers: [],
              stopSounds: Oz,
              landed: !1,
              reply: null
            };
            zz.timers.push(setTimeout((() => {
              zz.landed = !0, null !== zz.reply && (this.apply(zz.reply), zz.reply = null, this.emit())
            }), FF), setTimeout((() => {
              this.finishForge(zz)
            }), WF)), this.forging = zz
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(Fz)
        }, this.snapshot = this.buildSnapshot()
      }
      Sw(zz) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === zz.forgeMessageKind) return this.dropForge(), this.apply(zz), this.status = null, void this.show();
        const tz = this.forging;
        if (null !== tz && null !== zz.forgeRefusalKey) this.dropForge();
        else if (null !== tz && !tz.landed) return void(tz.reply = zz);
        this.apply(zz), this.emit()
      }
      apply(zz) {
        if (this.owned = zz.forgeOwnedParts, this.coal = zz.forgeCoalOwned, this.keepSelectionOwned("open" === zz.forgeMessageKind), null !== zz.forgeForgedSwordId) {
          var tz;
          const sz = (0, sF.p)(zz.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (tz = null === sz || void 0 === sz ? void 0 : sz.displayName) && void 0 !== tz ? tz : ""
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
        var tz;
        this.forging = null;
        const sz = this.selectedParts(),
          Fz = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: zz.id,
          sameSword: null !== sz && (null === (tz = (0, sF.p)(sz)) || void 0 === tz ? void 0 : tz.displayName) === zz.preview.name,
          timer: Fz
        }, this.emit()
      }
      dropForge() {
        const zz = this.forging;
        if (null !== zz) {
          this.forging = null;
          for (const tz of zz.timers) clearTimeout(tz);
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
        var zz, tz, sz;
        const Fz = this.selectedParts(),
          Wz = null === Fz ? null : (0, sF.p)(Fz),
          Xz = null !== (zz = null === (tz = this.forging) || void 0 === tz ? void 0 : tz.preview) && void 0 !== zz ? zz : null === Wz ? null : this.preview(Wz);
        return {
          enabled: this.received,
          open: this.open,
          slots: sF.l.map((zz => ({
            kind: zz,
            label: this.translate(BF[zz]),
            parts: this.partsFor(zz)
          }))),
          coalOwned: this.coal,
          preview: Xz,
          unformedSword: sF.k[null !== (sz = this.selected.Blade) && void 0 !== sz ? sz : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((zz => zz > 0)),
          canForge: null !== Xz && !Xz.coalShort && !this.isPending(),
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
        const tz = [];
        for (const Fz of sF.g) {
          var sz;
          const Wz = (0, sF.s)(Fz, zz),
            Xz = null !== (sz = this.owned[Wz]) && void 0 !== sz ? sz : 0;
          Xz > 0 && tz.push({
            material: Fz,
            itemName: Wz,
            owned: Xz,
            selected: this.selected[zz] === Fz,
            placeholder: !1
          })
        }
        if (0 === tz.length) {
          const sz = sF.g[0];
          tz.push({
            material: sz,
            itemName: (0, sF.s)(sz, zz),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return tz
      }
      stats(zz) {
        const tz = [{
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
        return zz.reachBonus > 0 && tz.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${zz.reachBonus.toFixed(1)}`,
          better: !0
        }), zz.damageReduction > 0 && tz.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*zz.damageReduction)}%`,
          better: !0
        }), tz
      }
      selectedParts() {
        const {
          Blade: zz,
          Guard: tz,
          Handle: sz
        } = this.selected;
        return null === zz || null === tz || null === sz ? null : {
          blade: zz,
          guard: tz,
          handle: sz
        }
      }
      keepSelectionOwned(zz) {
        for (const sz of sF.l) {
          var tz;
          const Fz = this.selected[sz];
          if (null !== Fz && (null !== (tz = this.owned[(0, sF.s)(Fz, sz)]) && void 0 !== tz ? tz : 0) > 0) continue;
          if (!zz) {
            this.selected[sz] = null;
            continue
          }
          const Wz = [...sF.g].reverse().find((zz => {
            var tz;
            return (null !== (tz = this.owned[(0, sF.s)(zz, sz)]) && void 0 !== tz ? tz : 0) > 0
          }));
          this.selected[sz] = null !== Wz && void 0 !== Wz ? Wz : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const rF = "skyblockSmugglerView",
      YF = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class xF extends uz {
      constructor(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(zz, sz, Fz), this.translate = tz, this.requestBuy = Wz, this.now = Xz, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = zz => zz, this.onBought = null, this.buy = zz => {
          const tz = this.deals[zz];
          void 0 !== tz && !this.isPending() && this.open && !this.soldOut.has(zz) && this.canAfford(tz) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, zz))
        }, this.snapshot = this.buildSnapshot()
      }
      Sw(zz) {
        if (this.received = !0, this.day = zz.smugglerDay, this.deals = zz.smugglerDeals, this.rivets = zz.smugglerRivetsOwned, this.crests = zz.smugglerCrestsOwned, this.soldOut = new Set(zz.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + zz.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === zz.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = zz.smugglerBoughtSlot, null !== zz.smugglerBoughtSlot) {
          var tz, sz;
          const Fz = this.deals[zz.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === Fz ? "" : this.dealName(Fz),
              amount: String(null !== (tz = null === Fz || void 0 === Fz ? void 0 : Fz.smugglerDealAmount) && void 0 !== tz ? tz : 0)
            }
          }, this.boughtCount++, null === (sz = this.onBought) || void 0 === sz || sz.call(this)
        } else null !== zz.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: zz.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(zz, tz, sz) {
        this.translate = zz, void 0 !== sz && (this.itemName = sz), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(zz) {
        if (null !== zz.smugglerDealUniqueName) return zz.smugglerDealUniqueName;
        const tz = YF[zz.smugglerDealItem];
        return void 0 === tz ? this.itemName(zz.smugglerDealItem) : this.translate(tz)
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
          deals: this.deals.map(((zz, tz) => ({
            slot: tz,
            itemName: zz.smugglerDealItem,
            displayName: this.dealName(zz),
            enchantmentTier: zz.smugglerDealEnchantmentTier,
            amount: zz.smugglerDealAmount,
            rivets: zz.smugglerDealRivets,
            crests: zz.smugglerDealCrests,
            affordable: this.canAfford(zz),
            soldOut: this.soldOut.has(tz),
            justBought: this.boughtSlot === tz
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
    const mF = "skyblockPassageView",
      JF = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function IF(zz, tz) {
      return zz(JF[tz])
    }

    function CF(zz, tz, sz, Fz) {
      const Wz = Math.ceil((sz - Fz) / 864e5),
        Xz = IF(zz, tz);
      return Wz > 1 ? zz("skyblockGame:passageNextDays", {
        phase: Xz,
        days: String(Wz)
      }) : zz("skyblockGame:passageNextSoon", {
        phase: Xz
      })
    }
    class eF extends uz {
      constructor(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(zz, sz, Fz), this.translate = tz, this.now = Wz, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = zz => zz, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Sw(zz) {
        this.message = zz, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(zz, tz, sz) {
        this.translate = zz, void 0 !== sz && (this.itemName = sz), this.emit()
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
          phaseName: IF(this.translate, zz.passagePhase),
          visitors: zz.passageVisitors.map((zz => this.describe(zz))),
          resting: this.describe(zz.passageResting),
          nextPhase: zz.passageNextPhase,
          next: CF(this.translate, zz.passageNextPhase, zz.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var ZF = sz(37967);
    const GF = "skyblockKeepersChairView";
    class TF extends uz {
      constructor(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new ZF.c;
        super(zz, sz, Fz), this.translate = tz, this.requestAim = Wz, this.now = Xz, this.pacer = Oz, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = zz => zz, this.aim = zz => {
          !this.awaitingReply && this.open && this.atChair && zz !== this.favoured && (null === zz || this.islands.some((tz => tz.keepersChairIslandId === zz && tz.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== zz && void 0 !== zz ? zz : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Oz.subscribe((() => {
          this.emit()
        }))
      }
      Sw(zz) {
        var tz, sz;
        this.received = !0;
        const Fz = this.favoured,
          Wz = this.atChair;
        var Xz;
        return this.islands = zz.keepersChairIslands, this.favoured = zz.keepersChairFavoured, this.passage = null !== (tz = zz.keepersChairPassage) && void 0 !== tz ? tz : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (sz = zz.keepersChairAtChair) || void 0 === sz || sz, "place" === zz.keepersChairMessageKind ? (!Wz && this.atChair && "refused" === (null === (Xz = this.status) || void 0 === Xz ? void 0 : Xz.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === zz.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== zz.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: zz.keepersChairRefusalKey,
          island: null
        } : this.favoured !== Fz && (this.status = null === this.favoured ? {
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
      setTranslator(zz, tz, sz) {
        this.translate = zz, void 0 !== sz && (this.itemName = sz), this.emit()
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
        const tz = this.islands.find((tz => tz.keepersChairIslandId === zz));
        return void 0 === tz ? zz : this.translate(tz.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const zz = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          tz = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((zz => {
            const tz = zz.keepersChairFeaturedFish;
            return {
              id: zz.keepersChairIslandId,
              name: this.translate(zz.keepersChairIslandNameKey),
              relit: zz.keepersChairIslandRelit,
              featuredFish: null === tz ? null : {
                itemName: tz,
                displayName: this.itemName(tz)
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
          almanac: null === tz ? null : {
            phase: tz.keepersChairPassagePhase,
            phaseName: IF(this.translate, tz.keepersChairPassagePhase),
            nextPhase: tz.keepersChairPassageNextPhase,
            next: CF(this.translate, tz.keepersChairPassageNextPhase, tz.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const cF = "skyblockReachLogView",
      jF = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      AF = "Caught Fish",
      yF = [1, 2, 4];

    function MF(zz, tz) {
      return zz.map((zz => ({
        ...zz,
        reachLogPageFish: zz.reachLogPageFish.map((zz => ({
          ...zz,
          reachLogFishFresh: tz(zz)
        })))
      })))
    }
    class dF extends uz {
      constructor(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new ZF.c;
        super(zz, sz, Fz), this.translate = tz, this.requestOpen = Wz, this.pacer = Xz, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = zz => zz, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = zz => {
          this.pages.some((tz => tz.reachLogIslandId === zz)) && (this.selected = zz, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Xz.subscribe((() => {
          this.emit()
        }))
      }
      Sw(zz) {
        if (this.received = !0, "status" === zz.reachLogMessageKind) return !0 === zz.reachLogNews && this.markNews(), this.serverFresh = zz.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const tz = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== zz.reachLogMessageKind)
          if (this.pageViews = null, this.pages = MF(zz.reachLogPages, (zz => zz.reachLogFishFresh || this.heldFresh.has(zz.reachLogFishItem))), this.letGoShown = zz.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, tz) this.showPages();
          else {
            for (const zz of this.pages)
              for (const tz of zz.reachLogPageFish) tz.reachLogFishFresh && this.heldFresh.add(tz.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(zz, tz, sz) {
        this.translate = zz, this.pageViews = null, void 0 !== sz && (this.itemName = sz), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = MF(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var zz, tz, sz, Fz;
        const Wz = this.pages.find((zz => zz.reachLogPageFish.some((zz => zz.reachLogFishFresh))));
        if (void 0 !== Wz) return Wz.reachLogIslandId;
        if (null !== this.selected && this.pages.some((zz => zz.reachLogIslandId === this.selected))) return this.selected;
        return null !== (zz = null !== (tz = null === (sz = this.pages.filter((zz => zz.reachLogIslandAwake)).at(-1)) || void 0 === sz ? void 0 : sz.reachLogIslandId) && void 0 !== tz ? tz : null === (Fz = this.pages[0]) || void 0 === Fz ? void 0 : Fz.reachLogIslandId) && void 0 !== zz ? zz : null
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
          var tz;
          return {
            id: zz.reachLogIslandId,
            name: this.translate(zz.reachLogIslandNameKey),
            awake: zz.reachLogIslandAwake,
            gold: zz.reachLogPageGold,
            caught: zz.reachLogPageFish.filter((zz => zz.reachLogFishCaught && !zz.reachLogFishVisitor)).length,
            total: zz.reachLogPageFish.filter((zz => !zz.reachLogFishVisitor)).length,
            fish: zz.reachLogPageFish.map((zz => {
              const tz = zz.reachLogFishBestKg;
              return {
                itemName: zz.reachLogFishItem,
                name: zz.reachLogFishCaught ? this.itemName(zz.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: zz.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / zz.reachLogFishChance))
                }),
                best: zz.reachLogFishCaught ? null === tz ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: tz.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: zz.reachLogFishMarks,
                ribbons: yF.map((tz => 0 !== (zz.reachLogFishRibbons & tz))),
                glimmer: 0 !== (8 & zz.reachLogFishRibbons),
                halo: 0 !== (32 & zz.reachLogFishRibbons),
                fresh: zz.reachLogFishFresh,
                visitor: zz.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (tz = zz.reachLogPageReturner) && void 0 !== tz ? tz : null)
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
    const hF = "skyblockLampLightView";
    class QF {
      constructor(zz, tz, sz, Fz) {
        this.Yg = zz, this.translate = tz, this.requestCommand = sz, this.pacer = Fz, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.lw = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = zz => {
          zz ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = zz => {
          this.send(`buy ${zz}`)
        }, this.socket = zz => {
          this.send(`socket ${null!==zz&&void 0!==zz?zz:yz}`)
        }, this.wearTint = zz => {
          this.send(`tint ${null!==zz&&void 0!==zz?zz:yz}`)
        }, this.setSituation = zz => {
          this.situation = zz, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = Fz.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = Fz.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Sw(zz) {
        if (this.message = zz, null !== zz.lampLightShop && (this.shop = zz.lampLightShop), "open" === zz.lampLightKind && (this.refusalKey = null), "reply" === zz.lampLightKind) {
          var tz;
          const Wz = null !== (tz = zz.lampLightReplyTag) && void 0 !== tz ? tz : null,
            Xz = null !== Wz && Wz === this.offTag;
          var sz, Fz;
          if (Xz ? this.settleOff() : null !== Wz && Wz !== this.awaitingTag || this.settleReply(), this.refusalKey = zz.lampLightRefusalKey, null !== zz.lampLightBought && !Xz) this.sparkle = {
            id: zz.lampLightBought,
            count: (null !== (sz = null === (Fz = this.sparkle) || void 0 === Fz ? void 0 : Fz.count) && void 0 !== sz ? sz : 0) + 1
          }
        }
        zz.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === zz.lampLightKind && (this.lastGained = zz.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(zz) {
        zz !== this.atChair && (this.atChair = zz, zz && (this.refusalKey = null), this.emit())
      }
      setTranslator(zz, tz) {
        this.translate = zz, this.locale = null !== tz && void 0 !== tz ? tz : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.lw = !0
      }
      send(zz) {
        var tz;
        if (null !== this.awaitingTag || "ready" !== (null === (tz = this.message) || void 0 === tz ? void 0 : tz.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const sz = this.nextTag();
        this.awaitingTag = sz, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${zz} ${sz}`), this.emit()
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
        this.lw || (this.snapshot = this.buildSnapshot(), this.Yg(this.snapshot))
      }
      formatLight(zz) {
        return Math.floor(zz).toLocaleString(this.locale)
      }
      formatPercent(zz) {
        const tz = 100 * zz;
        return tz >= 10 ? Math.round(tz).toLocaleString(this.locale) : tz.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(zz, tz) {
        if ("bite" === zz) return this.translate("skyblockGame:lampLightBite", {
          seconds: (tz.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === zz) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(tz.lampLightRareChance)
        });
        if ("notice" === zz) return null === tz.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(tz.lampLightNoticeChance)
        });
        const sz = "meter" === zz ? tz.lampLightMeterCatches : tz.lampLightBloomCatches;
        return null === sz ? null : this.translate("meter" === zz ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(sz))
        })
      }
      oddsLines(zz, tz) {
        const sz = (zz, tz) => {
            var sz;
            return null !== (sz = {
              bite: tz.lampLightBiteMs,
              rare: tz.lampLightRareChance,
              meter: tz.lampLightMeterCatches,
              bloom: tz.lampLightBloomCatches,
              notice: tz.lampLightNoticeChance
            } [zz]) && void 0 !== sz ? sz : 0
          },
          Fz = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Wz = [];
        for (const Xz of ["bite", "rare", "meter", "bloom", "notice"]) {
          const Oz = this.formatOdds(Xz, zz),
            oz = this.formatOdds(Xz, tz);
          if (null === Oz || null === oz || "bite" !== Xz && "rare" !== Xz && Oz === oz) continue;
          const vz = sz(Xz, tz) - sz(Xz, zz),
            Uz = Fz[Xz] ? vz < 0 : vz > 0;
          Wz.push({
            label: Xz,
            before: Oz,
            after: oz,
            tone: Oz === oz ? "same" : Uz ? "better" : "worse"
          })
        }
        return Wz
      }
      charmView(zz, tz, sz) {
        const Fz = zz.lampLightCharmId.charAt(0).toUpperCase() + zz.lampLightCharmId.slice(1),
          Wz = "bloom" === this.situation;
        return {
          id: zz.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${Fz}`),
          effect: this.translate(`skyblockGame:lampLightCharm${Fz}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(zz.lampLightCharmCost)
          }),
          owned: zz.lampLightCharmOwned,
          affordable: sz >= zz.lampLightCharmCost,
          socketed: tz.lampLightSocketed === zz.lampLightCharmId,
          lines: this.oddsLines(Wz ? tz.lampLightBareBloom : tz.lampLightBareOpen, Wz ? zz.lampLightCharmBloom : zz.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var zz, tz, sz, Fz;
        const Wz = this.message,
          Xz = "ready" === (null === Wz || void 0 === Wz ? void 0 : Wz.lampLightStatus) ? this.shop : null,
          Oz = null !== (zz = null === Wz || void 0 === Wz ? void 0 : Wz.lampLightBalance) && void 0 !== zz ? zz : 0,
          oz = this.atChair,
          vz = "loading" === (null === Wz || void 0 === Wz ? void 0 : Wz.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Wz || void 0 === Wz ? void 0 : Wz.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Uz = "ready" !== (null === Wz || void 0 === Wz ? void 0 : Wz.lampLightStatus) || oz ? null !== (tz = this.refusalKey) && void 0 !== tz ? tz : vz : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Wz && "locked" !== Wz.lampLightStatus,
          status: null !== (sz = null === Wz || void 0 === Wz ? void 0 : Wz.lampLightStatus) && void 0 !== sz ? sz : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(Oz)
          }),
          releasing: null !== (Fz = null === Wz || void 0 === Wz ? void 0 : Wz.lampLightReleasing) && void 0 !== Fz && Fz,
          gained: null === Wz || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Wz || void 0 === Wz ? void 0 : Wz.lampLightStatus) && oz && !this.isPending(),
          situation: this.situation,
          shop: null === Xz ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: Xz.lampLightOddsRod,
              island: this.translate(Xz.lampLightIslandNameKey)
            }),
            heldRod: null !== Xz.lampLightHeldRod,
            charms: Xz.lampLightCharms.map((zz => this.charmView(zz, Xz, Oz))),
            tints: Xz.lampLightTints.map((zz => {
              const tz = zz.lampLightTintId,
                [sz, Fz, Wz] = zz.lampLightTintColour;
              return {
                id: tz,
                name: this.translate(`skyblockGame:lampLightTint${tz.charAt(0).toUpperCase()}${tz.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(zz.lampLightTintCost)
                }),
                owned: zz.lampLightTintOwned,
                affordable: Oz >= zz.lampLightTintCost,
                wearing: Xz.lampLightTint === tz,
                colour: `rgb(${sz}, ${Fz}, ${Wz})`
              }
            })),
            wearingIslandColours: null === Xz.lampLightTint
          },
          notice: null === Uz ? null : this.translate(Uz),
          sparkle: this.sparkle
        }
      }
    }
    const kF = "skyblockMagmawardView";
    class iF {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Yg = zz, this.now = tz, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Lz.map((() => 0)), this.wornAt = Lz.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Sw(zz) {
        var tz, sz;
        const Fz = Lz.map(((tz, sz) => !0 === zz.magmawardPiecesWorn[sz]));
        if (!Fz.includes(!0)) return this.snapshot = null, void this.Yg(null);
        const Wz = this.now(),
          Xz = this.snapshot;
        null === Xz && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const Oz = zz.magmawardFuelCarried,
          oz = !Fz.includes(!1);
        let vz = null !== (tz = null === Xz || void 0 === Xz ? void 0 : Xz.pulse) && void 0 !== tz ? tz : null,
          Uz = null !== (sz = null === Xz || void 0 === Xz ? void 0 : Xz.flare) && void 0 !== sz ? sz : null;
        zz.magmawardFuelBurned ? (vz = "burn", Uz = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Wz, this.flareAt = Wz) : null !== Xz && Oz > Xz.fuel && (vz = "gain", this.pulseToken++, this.pulseAt = Wz), oz && null !== Xz && !Xz.fullSet && (Uz = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Wz, this.setLitAt = Wz);
        const Kz = Lz.map(((zz, tz) => (Fz[tz] && null !== Xz && !Xz.pieces[tz].worn && (this.wornTokens[tz]++, this.wornAt[tz] = Wz), {
          itemName: zz,
          worn: Fz[tz],
          wornToken: this.wornTokens[tz],
          justWorn: Fz[tz] && this.isPlaying(this.wornAt[tz], Wz)
        })));
        this.snapshot = {
          pieces: Kz,
          wornCount: Fz.filter(Boolean).length,
          fullSet: oz,
          fuel: Oz,
          fuelState: Oz <= 0 ? "empty" : Oz <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Wz) ? vz : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Wz) ? Uz : null,
          flareToken: this.flareToken,
          setLit: oz && this.isPlaying(this.setLitAt, Wz),
          setLitToken: this.setLitToken
        }, this.Yg(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Yg(null)
      }
      isPlaying(zz, tz) {
        return tz - zz < 1200
      }
    }
    const LF = "skyblockGlowtideView";
    class lF {
      constructor(zz) {
        this.Yg = zz, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = zz => {
          this.arrow = zz, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Sw(zz) {
        this.bloom = zz.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Yg(null))
      }
      afterRender(zz, tz) {
        const sz = this.bloom;
        if (null === sz || null === zz) return;
        const Fz = sz.glowtideBloomX - zz[0],
          Xz = sz.glowtideBloomZ - zz[2],
          Oz = Math.hypot(Fz, Xz),
          oz = this.snapshot,
          vz = null !== oz && void 0 !== oz && oz.inRange ? 1 : 0,
          Uz = Oz <= 12.5 + vz && zz[1] - sz.glowtideBloomY <= 10 + vz;
        !Uz || null !== oz && void 0 !== oz && oz.inRange || this.inRangeToken++;
        const Kz = {
          colour: sz.glowtideBloomColour,
          inRange: Uz,
          distance: Math.round(Oz),
          inRangeToken: this.inRangeToken
        };
        (null === oz || Kz.colour !== oz.colour || Kz.inRange !== oz.inRange || !Uz && Kz.distance !== oz.distance) && (this.snapshot = Kz, this.Yg(Kz));
        const uz = Wz.c.computeShortestRotation(tz, (0, Wz.Db)([Fz, 0, Xz]));
        null === this.arrow || Math.abs(uz - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${uz}rad)`, this.arrowTurn = uz)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Yg(null)
      }
    }
    const nF = "skyblockGlowMeterView";
    class aF {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Yg = zz, this.now = tz, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Sw(zz) {
        const tz = this.now(),
          {
            glowMeterFill: sz,
            glowMeterCapacity: Fz
          } = zz,
          Wz = sz >= Fz,
          Xz = this.snapshot;
        null !== Xz && (Wz && !Xz.full && (this.fullToken++, this.fullAt = tz), Xz.full && !Wz ? (this.burstToken++, this.burstAt = tz) : sz > Xz.fill && (this.gainToken++, this.gainAt = tz)), this.snapshot = {
          fill: sz,
          au: Fz,
          ratio: Math.min(1, Math.max(0, sz / Fz)),
          full: Wz,
          rares: zz.glowMeterRares,
          ready: Wz && this.isPlaying(this.fullAt, tz),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, tz),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, tz),
          gainToken: this.gainToken
        }, this.Yg(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Yg(null)
      }
      isPlaying(zz, tz) {
        return tz - zz < 2e3
      }
    }
    const qF = "skyblockHushWaitView";
    class SF {
      constructor(zz) {
        this.Yg = zz, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Sw(zz) {
        let {
          hushWaitMs: tz,
          hushWaitTotalMs: sz,
          hushWaitLines: Fz
        } = zz;
        if (this.clearTimers(), this.token++, 0 === Fz.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (tz <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: Fz[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Wz = Math.max(null !== sz && void 0 !== sz ? sz : tz, tz),
          Xz = Wz - tz,
          Oz = zz => Wz * zz / Fz.length,
          oz = zz => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Wz,
              elapsedMs: Xz,
              line: Fz[zz],
              lineIndex: zz
            })
          };
        let vz = 0;
        for (; vz + 1 < Fz.length && Oz(vz + 1) <= Xz;) vz++;
        oz(vz);
        for (let Uz = vz + 1; Uz < Fz.length; Uz++) this.later(Oz(Uz) - Xz, (() => {
          oz(Uz)
        }));
        this.later(tz, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(zz) {
        this.snapshot = zz, this.Yg(zz)
      }
      later(zz, tz) {
        this.timers.push(setTimeout(tz, zz))
      }
      clearTimers() {
        for (const zz of this.timers) clearTimeout(zz);
        this.timers = []
      }
    }
    const VF = "skyblockTideChartsView",
      RF = 36e5,
      pF = 864e5;

    function fF(zz, tz, sz) {
      const [Fz, Wz, Xz, Oz] = zz.tideChartArea, oz = Math.floor(tz), vz = Math.floor(sz);
      return oz >= Fz && oz <= Xz && vz >= Wz && vz <= Oz
    }

    function EF(zz, tz, sz) {
      const [Fz, Wz, Xz, Oz] = zz.tideChartWater;
      return function(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = 4 - lz(Math.floor(Wz) - (zz - sz), sz);
        return 5 * lz(Math.floor(Xz) - (tz - Fz), Fz) + Oz
      }(Fz, Wz, Xz, Oz, tz, sz)
    }

    function zW(zz, tz, sz) {
      const Fz = zz.tideCharts;
      for (let Wz = 0; Wz < Fz.length; Wz++)
        if (fF(Fz[Wz], tz, sz)) return Fz[Wz];
      return null
    }

    function tW(zz, tz, sz) {
      const Fz = Math.max(0, tz - sz);
      return Fz > pF ? zz("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(Fz / pF))
      }) : Fz > RF ? zz("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(Fz / RF))
      }) : zz("skyblockGame:tideChartsTurnSoon")
    }
    class sW extends uz {
      constructor(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(zz, sz, Fz), this.translate = tz, this.now = Wz, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.gb = zz => {
          this.picked = zz, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Sw(zz) {
        const tz = this.message;
        if (null !== tz)
          for (const Fz of zz.tideCharts) {
            var sz;
            const zz = tz.tideCharts.find((zz => zz.tideChartIsland === Fz.tideChartIsland)),
              Wz = Fz.tideChartLit & ~(null !== (sz = null === zz || void 0 === zz ? void 0 : zz.tideChartLit) && void 0 !== sz ? sz : 0);
            void 0 !== zz && 0 !== Wz && (this.pulse = {
              island: Fz.tideChartIsland,
              cells: Wz,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = zz, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(zz, tz) {
        var sz;
        const Fz = null === this.message || Number.isNaN(zz) ? null : zW(this.message, zz, tz),
          Wz = null !== (sz = null === Fz || void 0 === Fz ? void 0 : Fz.tideChartIsland) && void 0 !== sz ? sz : null,
          Xz = null === Fz ? -1 : function(zz, tz, sz) {
            const [Fz, Wz, Xz, Oz] = zz.tideChartWater;
            return function(zz, tz, sz, Fz, Wz, Xz, Oz) {
              return ((Wz - zz) / (sz + Oz)) ** 2 + ((Xz - tz) / (Fz + Oz)) ** 2 <= 1
            }(Fz, Wz, Xz, Oz, tz, sz, 2) ? EF(zz, tz, sz) : -1
          }(Fz, zz, tz);
        return (Wz !== this.hereIsland || Xz !== this.hereCell) && (this.hereIsland = Wz, this.hereCell = Xz, null !== Wz && (this.lastIsland = Wz), !0)
      }
      afterRender(zz) {
        if (null === this.message) return;
        this.lastX = null === zz ? Number.NaN : zz[0], this.lastZ = null === zz ? Number.NaN : zz[2];
        const tz = this.locate(this.lastX, this.lastZ),
          sz = this.expirePulses();
        (tz || sz || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const zz = this.now();
        return !(!this.open || zz - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = zz, tW(this.translate, this.message.tideChartTurnsInMs, zz - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(zz, tz) {
        const sz = null === this.message ? null : zW(this.message, zz, tz);
        if (null === sz) return;
        const Fz = EF(sz, zz, tz);
        0 === (sz.tideChartPreBlank & 1 << Fz) && (this.cast = {
          island: sz.tideChartIsland,
          cell: Fz,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const zz = this.now();
        let tz = !1;
        return 0 !== this.pulse.cells && zz - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, tz = !0), null !== this.cast && zz - this.cast.atMs >= 1500 && (this.cast = null, tz = !0), tz
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
      findChart(zz, tz) {
        var sz;
        return null !== (sz = zz.tideCharts.find((zz => zz.tideChartIsland === tz))) && void 0 !== sz ? sz : null
      }
      describe(zz) {
        var tz, sz, Fz;
        const Wz = zz.tideChartIsland,
          Xz = [];
        for (let bz = 0; bz < 25; bz++) {
          const tz = 1 << bz;
          0 !== (zz.tideChartLit & tz) ? Xz.push("lit") : 0 !== (zz.tideChartClear & tz) ? Xz.push("clear") : 0 !== (zz.tideChartPreBlank & tz) ? Xz.push("shore") : Xz.push("water")
        }
        const Oz = function(zz) {
            let tz = 0;
            for (let sz = zz >>> 0; 0 !== sz; sz &= sz - 1) tz++;
            return tz
          }(zz.tideChartLit),
          oz = zz.tideChartInkCount,
          vz = this.translate(zz.tideChartIslandNameKey),
          Uz = this.translate("skyblockGame:tideChartsLit", {
            lit: String(Oz),
            ink: String(oz)
          }),
          Kz = null === zz.tideChartPictureNameKey ? null : this.translate(zz.tideChartPictureNameKey),
          uz = this.hereIsland === Wz && -1 !== this.hereCell ? this.hereCell : null,
          Nz = [`${vz}: ${Uz}.`];
        if (null !== Kz && Nz.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: Kz
          })), null !== uz) {
          const zz = Math.floor(uz / 5) + 1,
            tz = uz % 5 + 1;
          Nz.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(zz),
            column: String(tz)
          }))
        }
        return {
          island: Wz,
          islandName: vz,
          cells: Xz,
          hereCell: uz,
          lit: Oz,
          ink: oz,
          litText: Uz,
          pictureName: Kz,
          gridLabel: Nz.join(" "),
          pulseCells: this.pulse.island === Wz ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (tz = this.cast) || void 0 === tz ? void 0 : tz.island) === Wz ? this.cast.cell : null,
          castToken: null !== (sz = null === (Fz = this.cast) || void 0 === Fz ? void 0 : Fz.token) && void 0 !== sz ? sz : 0
        }
      }
      buildSnapshot() {
        var zz, tz, sz;
        const Fz = this.message;
        if (null === Fz || 0 === Fz.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Wz = this.findChart(Fz, this.hereIsland),
          Xz = null !== (zz = null !== (tz = null !== (sz = this.findChart(Fz, this.open ? this.picked : null)) && void 0 !== sz ? sz : Wz) && void 0 !== tz ? tz : this.findChart(Fz, this.lastIsland)) && void 0 !== zz ? zz : Fz.tideCharts[0],
          Oz = null === Wz ? null : this.describe(Wz);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: Oz,
          card: Xz === Wz ? Oz : this.describe(Xz),
          turnsText: tW(this.translate, Fz.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(Fz.tideChartBookCount)
          }),
          tabs: Fz.tideCharts.map((zz => ({
            island: zz.tideChartIsland,
            name: this.translate(zz.tideChartIslandNameKey),
            selected: zz.tideChartIsland === Xz.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const FW = "skyblockRegularsView",
      WW = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      XW = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function OW(zz, tz) {
      return "given" === zz ? tz.given : "owed" === zz ? tz.owed : tz.goal
    }
    class oW extends uz {
      constructor(zz, tz, sz, Fz) {
        super(zz, sz, Fz), this.translate = tz, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = zz => zz, this.openIsland = zz => {
          this.selected = zz, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = zz => {
          this.selected = zz, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Sw(zz) {
        this.message = zz, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const zz = this.openedFromReachLog;
        return this.openedFromReachLog = !1, zz
      }
      setTranslator(zz, tz, sz) {
        this.translate = zz, void 0 !== sz && (this.itemName = sz), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(zz, tz, sz) {
        return {
          text: this.translate(OW(zz, tz), sz),
          given: "given" === zz
        }
      }
      describeRegular(zz, tz) {
        const sz = this.translate,
          Fz = null !== zz.regularKg,
          Wz = zz.regularMeetings,
          Xz = Fz ? 0 === Wz ? sz("skyblockGame:regularsNotMet") : 1 === Wz ? sz("skyblockGame:regularsMeetingsOne") : sz("skyblockGame:regularsMeetings", {
            count: Wz
          }) : "";
        return {
          id: zz.regularId,
          name: sz(zz.regularNameKey),
          line: sz(zz.regularLineKey),
          itemName: zz.regularFishItem,
          fishName: this.itemName(zz.regularFishItem),
          tagged: Fz,
          size: null === zz.regularKg ? sz("skyblockGame:regularsNotTagged") : sz("skyblockGame:regularsSize", {
            kg: zz.regularKg.toFixed(1)
          }),
          meetings: Xz,
          chance: sz("skyblockGame:regularsChance", {
            count: zz.regularOneInCasts
          }),
          resting: zz.regularRestingToday,
          gifts: [{
            text: sz("skyblockGame:regularsGiftFlare"),
            given: Wz >= 3
          }, this.describeGift(zz.regularTintGift, WW, {
            tint: sz(zz.regularTintNameKey)
          })],
          history: [...zz.regularHistory].reverse().map((zz => {
            const Fz = zz.regularMeetingKg.toFixed(1),
              Wz = tz - zz.regularMeetingDay;
            return Wz <= 0 ? sz("skyblockGame:regularsToday", {
              kg: Fz
            }) : sz("skyblockGame:regularsDaysAgo", {
              days: Wz,
              kg: Fz
            })
          }))
        }
      }
      describeIsland(zz, tz) {
        return {
          id: zz.regularsIslandId,
          name: this.translate(zz.regularsIslandNameKey),
          charm: this.describeGift(zz.regularsCharmGift, XW, {
            charm: this.translate(zz.regularsCharmNameKey)
          }),
          regulars: zz.regularsList.map((zz => this.describeRegular(zz, tz)))
        }
      }
      buildSnapshot() {
        var zz, tz, sz, Fz;
        const Wz = this.message;
        if (null === Wz) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const Xz = Wz.regularsIslands.map((zz => this.describeIsland(zz, Wz.regularsToday))),
          Oz = null !== (zz = null !== (tz = null === (sz = Xz.find((zz => zz.id === this.selected))) || void 0 === sz ? void 0 : sz.id) && void 0 !== tz ? tz : null === (Fz = Xz[0]) || void 0 === Fz ? void 0 : Fz.id) && void 0 !== zz ? zz : "";
        return {
          enabled: !0,
          open: this.open,
          selected: Oz,
          islands: Xz
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const vW = "skyblockHiddenWatersView";
    class UW {
      constructor(zz) {
        this.Yg = zz, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Sw(zz) {
        this.snapshot = function(zz) {
          const [tz, sz] = zz.hiddenWatersMapSize, Fz = (zz, Fz) => ({
            left: 1 - zz / tz,
            top: Fz / sz
          }), Wz = new Map;
          for (const [Oz, oz] of zz.hiddenWatersGlimpses) {
            var Xz;
            const zz = null !== (Xz = Wz.get(Oz)) && void 0 !== Xz ? Xz : [];
            zz.push(oz), Wz.set(Oz, zz)
          }
          return {
            found: zz.hiddenWatersFound,
            total: zz.hiddenWatersTotal,
            aspect: sz / tz,
            pins: zz.hiddenWatersPins.map((zz => {
              let [tz, sz] = zz;
              return Fz(tz, sz)
            })),
            islands: zz.hiddenWatersIslands.map((zz => {
              let [Wz, Xz, Oz, oz] = zz;
              const {
                left: vz,
                top: Uz
              } = Fz(Oz + 1, Xz);
              return {
                left: vz,
                top: Uz,
                width: (Oz + 1 - Wz) / tz,
                height: (oz + 1 - Xz) / sz
              }
            })),
            glimpses: Wz
          }
        }(zz), this.Yg(this.snapshot)
      }
    }
    const KW = "skyblockDialogueView";
    class uW extends uz {
      constructor(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(zz, sz, Fz), this.translate = tz, this.requestDialogue = Wz, this.now = Xz, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      Sw(zz) {
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
        const tz = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...tz,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const sz = this.selection;
        if ("quest" === sz.kind) {
          const zz = this.scripts.find((zz => zz.dialogueQuestId === sz.questId));
          return {
            ...tz,
            characters: [],
            questFocus: sz.questId,
            conversations: zz ? [this.conversation(zz)] : []
          }
        }
        const Fz = [];
        for (let Xz = this.scripts.length - 1; Xz >= 0; Xz--) {
          const zz = this.scripts[Xz].dialogueLines;
          for (let tz = zz.length - 1; tz >= 0; tz--) Fz.includes(zz[tz].dialogueSpeakerId) || Fz.push(zz[tz].dialogueSpeakerId)
        }
        const Wz = null !== sz.npcId && Fz.includes(sz.npcId) ? sz.npcId : null !== (zz = Fz[0]) && void 0 !== zz ? zz : null;
        return {
          ...tz,
          characters: Fz.map((zz => {
            var tz, sz;
            return {
              id: zz,
              styling: null !== (tz = null === (sz = this.speakers.get(zz)) || void 0 === sz ? void 0 : sz.dialogueSpeakerStyling) && void 0 !== tz ? tz : zz,
              selected: zz === Wz
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((zz => zz.dialogueLines.some((zz => zz.dialogueSpeakerId === Wz)))).map((zz => this.conversation(zz))).reverse()
        }
      }
      conversation(zz) {
        let tz = null;
        return {
          questId: zz.dialogueQuestId,
          questName: this.translate(zz.dialogueQuestNameKey),
          completed: zz.dialogueQuestCompleted,
          lines: zz.dialogueLines.map(((zz, sz) => {
            var Fz;
            const Wz = zz.dialogueSpeakerId === tz || null === (Fz = this.speakers.get(zz.dialogueSpeakerId)) || void 0 === Fz ? void 0 : Fz.dialogueSpeakerStyling;
            return tz = zz.dialogueSpeakerId, {
              key: sz,
              display: {
                line: {
                  translationKey: zz.dialogueLineKey,
                  params: this.params(zz.dialogueLineParams)
                },
                speakerName: Wz,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(zz) {
        if (void 0 !== zz) return Object.fromEntries(Object.entries(zz).map((zz => {
          let [tz, sz] = zz;
          return [tz, "string" === typeof sz ? sz : this.translate(sz.translationKey)]
        })))
      }
    }
    var NW = sz(571),
      bW = sz(1253),
      wW = sz(106);
    const DW = "skyblockAutographsView";

    function gW(zz) {
      const tz = NW.m[zz];
      return {
        label: tz.chatTag.map((zz => zz.str)).join(""),
        icon: tz.icon,
        colour: tz.mainRGB
      }
    }
    class HW extends uz {
      constructor(zz) {
        let tz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = tz, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Sw(zz) {
        this.signatures = zz.autographSignatures, zz.autographOpen ? this.show() : this.emit()
      }
      setTranslator(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = tz, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var zz;
        const tz = null !== (zz = this.signatures) && void 0 !== zz ? zz : [],
          sz = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          Fz = [...tz].sort(((zz, tz) => Number(null !== tz.autographRank) - Number(null !== zz.autographRank) || tz.autographSignedAtMs - zz.autographSignedAtMs)).map((zz => ({
            key: `${zz.autographSignedAtMs}|${zz.autographSignerName}`,
            name: (0, bW.c)(zz.autographSignerName, !wW.featureFlags.canSeeRealPlayerNames),
            rank: null === zz.autographRank ? null : gW(zz.autographRank),
            signedOn: sz.format(zz.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: Fz,
          total: Fz.length,
          rankTotal: Fz.filter((zz => null !== zz.rank)).length
        }
      }
    }
    const BW = "skyblockHudView",
      PW = () => {},
      rW = {
        getItem: () => null,
        setItem: PW,
        removeItem: PW
      };
    class YW {
      constructor(zz) {
        let {
          translate: tz,
          translateWithIcons: sz,
          setMenuOpen: Fz = PW,
          dismissMenu: Wz = () => {
            Fz(!1)
          },
          publishSkills: Xz = PW,
          publishQuests: Oz = PW,
          publishQuestNotification: oz = PW,
          publishDungeons: vz = PW,
          publishCollections: Uz = PW,
          publishMap: Kz = PW,
          publishHud: uz = PW,
          publishPortalTransit: Nz = PW,
          publishDailyReward: wz = PW,
          publishMailbox: Dz = PW,
          publishQuestGraph: gz = PW,
          publishForge: Hz = PW,
          publishSmuggler: Bz = PW,
          publishKeepersChair: Pz = PW,
          publishReachLog: rz = PW,
          publishLampLight: Yz = PW,
          publishMagmaward: xz = PW,
          publishGlowtide: Jz = PW,
          publishGlowMeter: Iz = PW,
          publishHushWait: Cz = PW,
          publishPassage: ez = PW,
          publishTideCharts: Zz = PW,
          publishRegulars: Gz = PW,
          publishHiddenWaters: Tz = PW,
          publishDialogue: cz = PW,
          publishAutographs: jz = PW,
          isLoadingScreenUp: Az = () => !1,
          onDailyRewardCoinLanded: yz = PW,
          onDailyRewardStarted: Mz = PW,
          onDailyRewardFinished: dz = PW,
          onDailyRewardItemLanded: hz = PW,
          onMailboxStarted: Qz = PW,
          journeyStorage: kz = rW,
          requestTracking: iz = PW,
          requestTravel: Lz = PW,
          requestDungeonEnter: lz = PW,
          requestQuestJump: nz = PW,
          requestQuestArrive: az = PW,
          requestForge: qz = PW,
          requestSmuggle: Sz = PW,
          requestKeepersChairAim: Vz = PW,
          requestReachLogOpen: Rz = PW,
          requestLampLight: pz = PW,
          requestDialogue: fz = PW
        } = zz;
        this.navigation = void 0, this.map = void 0, this.compass = new mz, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new ZF.c, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = zz => zz, this.close = () => {
          for (const zz of this.panels) zz.close()
        }, this.setMenuOpen = Fz, this.publishHud = uz, this.portalTransit = new Ls(Nz, kz), this.magmaward = new iF(xz), this.glowtide = new lF(Jz), this.glowMeter = new aF(Iz), this.hushWait = new SF(Cz), this.dailyReward = new as(wz, (() => Az() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (zz => {
          this.quests.setNotificationsHeld(zz)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), yz, Mz, dz, hz);
        const Ez = zz => {
          this.panels.some((zz => zz.isOpen())) || (zz ? Wz() : this.setMenuOpen(!1))
        };
        this.skills = new os(Xz, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), tz, void 0, void 0, Ez), this.quests = new Ns(Oz, iz, tz, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, Ez, oz), this.dungeons = new Ds(vz, tz, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, Ez, lz), this.collections = new Qs(Uz, tz, (() => {
          this.beforePanelOpen(this.collections)
        }), Ez), this.map = new bz(Kz, Lz, tz, (() => {
          this.beforePanelOpen(this.map)
        }), Ez), this.questGraph = new tF(gz, tz, (() => {
          this.beforePanelOpen(this.questGraph)
        }), Ez, nz, az, kz), this.forge = new PF(Hz, tz, (() => {
          this.beforePanelOpen(this.forge)
        }), Ez, qz), this.smuggler = new xF(Bz, tz, (() => {
          this.beforePanelOpen(this.smuggler)
        }), Ez, Sz), this.lampLight = new QF(Yz, tz, pz, this.commandPacer), this.keepersChair = new TF(Pz, tz, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (zz => {
          this.lampLight.onChairClosed(), Ez(zz)
        }), Vz, Date.now, this.commandPacer), this.reachLog = new dF(rz, tz, (() => {
          this.beforePanelOpen(this.reachLog)
        }), Ez, Rz, this.commandPacer), this.passage = new eF(ez, tz, (() => {
          this.beforePanelOpen(this.passage)
        }), Ez), this.tideCharts = new sW(Zz, tz, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), Ez), this.regulars = new oW(Gz, tz, (() => {
          this.beforePanelOpen(this.regulars)
        }), (zz => {
          this.regulars.takeReturnToReachLog() && !zz && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), Ez(zz)
        })), this.hiddenWaters = new UW(Tz), this.dialogue = new uW(cz, tz, (() => {
          this.beforePanelOpen(this.dialogue)
        }), Ez, fz), this.autographs = new HW(jz, (() => {
          this.beforePanelOpen(this.autographs)
        }), Ez), this.mailbox = new Rs(Dz, (() => Az() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), Qz), this.quests.translateWithIcons = null !== sz && void 0 !== sz ? sz : null, this.skills.onLevelUp = zz => {
          this.quests.notify(zz)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Xs(this.map, this.quests, this.compass, tz)
      }
      getHudSnapshot() {
        const zz = this.hudSnapshot,
          tz = this.dailyReward.getHeldCoins();
        return null === zz || tz <= 0 || !("hudPurseCoins" in zz) ? zz : {
          ...zz,
          hudPurseCoins: Math.max(0, zz.hudPurseCoins - tz)
        }
      }
      receiveHud(zz) {
        this.hudSnapshot = zz, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(zz) {
        this.setMenuOpen(!0);
        const tz = zz === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = zz;
        for (const sz of this.panels) sz === zz || tz && sz === this.reachLog || sz.close();
        this.openingPanel = null
      }
      setTranslator(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tz => this.resolveItemName(tz, zz);
        this.quests.translateWithIcons = null !== sz && void 0 !== sz ? sz : null, this.navigation.setTranslator(zz, tz), this.lampLight.setTranslator(zz, tz), this.mailbox.setItemName(Fz);
        for (const Wz of this.panels) Wz.setTranslator(zz, tz, Fz)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const zz of this.panels) zz.dispose()
      }
    }
    var xW = sz(1020),
      mW = sz.n(xW),
      JW = sz(30),
      IW = sz(36078),
      CW = sz(3068),
      eW = sz(1845),
      ZW = sz(1831),
      GW = sz(8874),
      TW = sz(1173),
      cW = sz(1416),
      jW = sz(1087);

    function AW(zz) {
      let {
        controller: tz,
        minimap: sz,
        children: Fz
      } = zz;
      const Xz = (0, cW.h)(BW, tz.getHudSnapshot()),
        [Oz, oz] = (0, Iz.useState)(tz.skills.getSnapshot().overallLevel);
      (0, cW.g)(Os, (zz => {
        oz(zz.overallLevel)
      }));
      const vz = (0, Iz.useRef)(null);
      (0, cW.g)(ns, (zz => {
        ! function(zz, tz) {
          if (null === zz || "function" !== typeof zz.animate) return;
          const sz = tz ? 1.35 : 1.15;
          zz.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${sz})`
          }, {
            transform: "scale(1)"
          }], {
            duration: tz ? 320 : 160,
            easing: "ease-out"
          }), zz.classList.toggle("Receiving", !tz), tz && (zz.classList.remove("Shine"), zz.offsetWidth, zz.classList.add("Shine"))
        }(vz.current, zz)
      }));
      const {
        t: Uz
      } = (0, TW.B)(), {
        isTouchScreen: Kz
      } = (0, JW.h)(["isTouchScreen"]), [uz, Nz] = (0, Iz.useState)(null);
      return (0, CW.f)(uz, ".SkyblockRightHud"), null !== Xz || sz ? (0, jW.jsx)(IW.e, {
        placement: "topRight",
        children: (0, jW.jsxs)("div", {
          className: mW()("SkyblockRightHud", {
            TouchScreen: Kz
          }),
          children: [sz, null !== Xz && (0, jW.jsxs)("div", {
            ref: Nz,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in Xz ? (0, jW.jsx)("div", {
              className: "SkyblockHudHelp",
              children: Xz.hudHelpText
            }) : (0, jW.jsxs)(jW.Fragment, {
              children: [(0, jW.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, jW.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, jW.jsx)("strong", {
                    style: {
                      color: Wz.N.cyanUiText
                    },
                    children: Uz(Xz.hudZoneNameKey)
                  }), null !== Oz && (0, jW.jsx)("span", {
                    style: {
                      color: Wz.N.goldUiText
                    },
                    children: Uz("skyblockGame:level", {
                      level: (0, GW.f)(Oz)
                    })
                  })]
                }), (0, jW.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: vz,
                  children: [(0, jW.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, jW.jsx)(eW.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, GW.f)(Xz.hudPurseCoins)]
                })]
              }), Xz.hudClockText.length > 0 && (0, jW.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, jW.jsx)(ZW.c, {
                  text: Xz.hudClockText
                })
              })]
            }), Fz, "hudZoneNameKey" in Xz && (0, jW.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function yW(zz) {
      let {
        icon: tz
      } = zz;
      const sz = (0, Iz.useCallback)((zz => {
        null === zz || void 0 === zz || zz.replaceChildren(qt(tz))
      }), [tz]);
      return (0, jW.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: sz
      })
    }

    function MW(zz) {
      let {
        controller: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)();
      return (0, jW.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: tz.display.mountPlayer,
        title: sz("skyblockGame:mapYouAreHere"),
        children: (0, jW.jsx)(yW, {
          icon: "player"
        })
      })
    }
    const dW = sz(37976),
      hW = Object.fromEntries(dW.keys().map((zz => [zz.replace(/^\.\/(.*)\.png$/, "$1"), dW(zz)])));

    function QW(zz, tz) {
      var sz;
      return null !== (sz = hW[zz]) && void 0 !== sz ? sz : hW[tz]
    }

    function kW(zz) {
      let {
        imageKey: tz,
        fallbackImageKey: sz,
        geometryKey: Fz,
        alt: Wz,
        className: Xz
      } = zz;
      const [Oz, oz] = (0, Iz.useState)((() => function(zz, tz) {
        return [{
          id: 0,
          imageKey: zz,
          geometryKey: tz,
          phase: "shown"
        }]
      }(tz, Fz))), vz = function(zz, tz, sz) {
        const Fz = zz[zz.length - 1];
        if (Fz.imageKey === tz && Fz.geometryKey === sz) return zz;
        const Wz = {
          id: Fz.id + 1,
          imageKey: tz,
          geometryKey: sz,
          phase: "entering"
        };
        return Fz.geometryKey === sz ? [{
          ...Fz,
          phase: "leaving"
        }, Wz] : [Wz]
      }(Oz, tz, Fz);
      return vz !== Oz && oz(vz), (0, jW.jsx)(jW.Fragment, {
        children: vz.map((zz => (0, jW.jsx)("img", {
          className: mW()("SkyblockMapTerrainImage", Xz, {
            Entering: "entering" === zz.phase,
            Leaving: "leaving" === zz.phase
          }),
          src: QW(zz.imageKey, sz),
          alt: "leaving" === zz.phase ? "" : Wz,
          onAnimationEnd: () => {
            oz((tz => function(zz, tz) {
              return zz.flatMap((zz => zz.id !== tz ? [zz] : "leaving" === zz.phase ? [] : [{
                ...zz,
                phase: "shown"
              }]))
            }(tz, zz.id)))
          }
        }, zz.id)))
      })
    }
    var iW = sz(4175),
      LW = sz(1419);

    function lW(zz) {
      if ("Tab" !== zz.key) return;
      const tz = Array.from(zz.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        sz = tz.indexOf(document.activeElement);
      var Fz;
      if (zz.shiftKey && sz <= 0) zz.preventDefault(), null === (Fz = tz.at(-1)) || void 0 === Fz || Fz.focus();
      else if (!zz.shiftKey && (-1 === sz || sz === tz.length - 1)) {
        var Wz;
        zz.preventDefault(), null === (Wz = tz[0]) || void 0 === Wz || Wz.focus()
      }
    }

    function nW() {
      const zz = (0, Iz.useRef)(null);
      return (0, Iz.useCallback)((tz => {
        var sz;
        tz ? (zz.current = document.activeElement, tz.focus()) : null === (sz = zz.current) || void 0 === sz || sz.focus()
      }), [])
    }

    function aW(zz) {
      let {
        percent: tz,
        label: sz,
        levelUpToken: Fz,
        colour: Wz
      } = zz;
      return (0, jW.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": sz,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": tz,
        "aria-valuetext": sz,
        children: [(0, jW.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${tz/100})`
          }
        }), null !== Fz && void 0 !== Fz && (0, jW.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Wz
          }
        }, Fz)]
      })
    }

    function qW(zz) {
      let {
        mount: tz
      } = zz;
      return (0, jW.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: tz,
        hidden: !0,
        children: (0, jW.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, jW.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, jW.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function SW(zz, tz, sz, Fz) {
      (0, Iz.useLayoutEffect)((() => {
        const Wz = zz.current;
        if (!sz || null === tz || void 0 === tz || !tz.local || !Wz) return;
        const Xz = Array.from(Wz.querySelectorAll(".SkyblockMapNode")),
          Oz = [...tz.points, ...tz.portals],
          oz = () => {
            const zz = Wz.clientWidth,
              sz = Wz.clientHeight,
              oz = Xz.map(((Wz, Xz) => {
                const oz = Oz[Xz];
                return {
                  id: oz.id,
                  portal: Xz >= tz.points.length,
                  x: oz.position[0] * zz / 100,
                  y: oz.position[1] * sz / 100,
                  width: Wz.offsetWidth / Fz,
                  height: Wz.offsetHeight / Fz
                }
              })),
              vz = new Map(Oz.map(((zz, tz) => [zz.id, Xz[tz]])));
            for (const tz of function(zz, tz, sz) {
                const Fz = [],
                  Wz = [...zz].sort(((zz, tz) => Number(tz.portal) - Number(zz.portal) || zz.id.localeCompare(tz.id)));
                for (const Xz of Wz) {
                  const zz = zz => Math.max(Xz.width / 2, Math.min(tz - Xz.width / 2, zz)),
                    Wz = zz => Math.max(Xz.height / 2, Math.min(sz - Xz.height / 2, zz)),
                    Oz = [zz(Xz.x)],
                    oz = [Wz(Xz.y)];
                  for (const tz of Fz) Oz.push(zz(tz.x - (tz.width + Xz.width) / 2 - 4), zz(tz.x + (tz.width + Xz.width) / 2 + 4)), oz.push(Wz(tz.y - (tz.height + Xz.height) / 2 - 4), Wz(tz.y + (tz.height + Xz.height) / 2 + 4));
                  let vz = {
                      ...Xz,
                      x: Oz[0],
                      y: oz[0]
                    },
                    Uz = 1 / 0,
                    Kz = 1 / 0;
                  for (const tz of new Set(Oz))
                    for (const zz of new Set(oz)) {
                      let sz = 0;
                      for (const Oz of Fz) sz += Math.max(0, (Xz.width + Oz.width) / 2 + 4 - Math.abs(tz - Oz.x)) * Math.max(0, (Xz.height + Oz.height) / 2 + 4 - Math.abs(zz - Oz.y));
                      const Wz = (tz - Xz.x) ** 2 + (zz - Xz.y) ** 2;
                      (sz < Uz || sz === Uz && Wz < Kz) && (vz = {
                        ...Xz,
                        x: tz,
                        y: zz
                      }, Uz = sz, Kz = Wz)
                    }
                  Fz.push(vz)
                }
                return Fz
              }(oz, zz, sz)) {
              const zz = vz.get(tz.id);
              zz.style.left = `${tz.x}px`, zz.style.top = `${tz.y}px`
            }
          };
        oz();
        const vz = new ResizeObserver(oz);
        vz.observe(Wz);
        for (const zz of Xz) vz.observe(zz);
        return () => {
          vz.disconnect()
        }
      }), [zz, tz, sz, Fz])
    }
    const VW = {
        zoom: 1,
        x: 0,
        y: 0
      },
      RW = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function pW(zz, tz, sz) {
      return Math.min(sz, Math.max(tz, zz))
    }

    function fW(zz, tz, sz) {
      const Fz = Math.min(1, sz * tz / zz),
        Wz = Math.min(1, zz / (sz * tz));
      return {
        x0: (1 - Fz) / 2,
        y0: (1 - Wz) / 2,
        x1: (1 + Fz) / 2,
        y1: (1 + Wz) / 2
      }
    }

    function EW(zz, tz, sz, Fz) {
      const Wz = tz * (Fz - sz);
      if (Wz <= 1) return .5 - tz * (sz + Fz) / 2;
      const Xz = .45 * Math.min(1, Wz - 1);
      return pW(zz, 1 - tz * Fz - Xz, Xz - tz * sz)
    }

    function zX(zz, tz) {
      const sz = pW(zz.zoom, 1, 12);
      return {
        zoom: sz,
        x: EW(zz.x, sz, tz.x0, tz.x1),
        y: EW(zz.y, sz, tz.y0, tz.y1)
      }
    }

    function tX(zz, tz, sz, Fz) {
      let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : RW;
      const Xz = pW(zz.zoom * tz, 1, 12),
        Oz = Xz / zz.zoom;
      return zX({
        zoom: Xz,
        x: sz - (sz - zz.x) * Oz,
        y: Fz - (Fz - zz.y) * Oz
      }, Wz)
    }

    function sX(zz, tz, sz, Fz) {
      const [Wz, Xz] = (0, Iz.useState)(VW);
      (0, Iz.useEffect)((() => {
        Xz(VW)
      }), [sz]), (0, Iz.useEffect)((() => {
        const sz = zz.current;
        if (!tz || !sz) return;
        const Wz = () => fW(sz.clientWidth, sz.clientHeight, Fz),
          Oz = zz => {
            const tz = sz.getBoundingClientRect();
            return {
              x: (zz.clientX - tz.left) / tz.width,
              y: (zz.clientY - tz.top) / tz.height
            }
          },
          oz = new Map;
        let vz = {
            x: 0,
            y: 0
          },
          Uz = !1,
          Kz = 0;
        const uz = zz => {
            zz.preventDefault();
            const tz = zz.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * zz.deltaY : zz.deltaY,
              sz = Oz(zz);
            Xz((zz => tX(zz, Math.exp(.0015 * -tz), sz.x, sz.y, Wz())))
          },
          Nz = zz => {
            "mouse" === zz.pointerType && 0 !== zz.button || (oz.set(zz.pointerId, Oz(zz)), 1 === oz.size && (vz = {
              x: zz.clientX,
              y: zz.clientY
            }, Uz = !1), Kz = 0)
          },
          bz = zz => {
            const tz = oz.get(zz.pointerId);
            if (!tz) return;
            const Fz = Oz(zz);
            if (oz.set(zz.pointerId, Fz), 2 === oz.size) {
              const [zz, tz] = [...oz.values()], sz = Math.hypot(zz.x - tz.x, zz.y - tz.y);
              if (Kz > 0) {
                const Fz = sz / Kz;
                Xz((sz => tX(sz, Fz, (zz.x + tz.x) / 2, (zz.y + tz.y) / 2, Wz())))
              }
              return Kz = sz, void(Uz = !0)
            }!Uz && Math.hypot(zz.clientX - vz.x, zz.clientY - vz.y) < 4 || (Uz || (Uz = !0, sz.setPointerCapture(zz.pointerId)), Xz((zz => function(zz, tz, sz) {
              let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RW;
              return zX({
                zoom: zz.zoom,
                x: zz.x + tz,
                y: zz.y + sz
              }, Fz)
            }(zz, Fz.x - tz.x, Fz.y - tz.y, Wz()))))
          },
          wz = zz => {
            oz.delete(zz.pointerId), Kz = 0
          },
          Dz = zz => {
            Uz && (zz.stopPropagation(), zz.preventDefault(), Uz = !1)
          },
          gz = new ResizeObserver((() => {
            Xz((zz => zX(zz, Wz())))
          }));
        return gz.observe(sz), sz.addEventListener("wheel", uz, {
          passive: !1
        }), sz.addEventListener("pointerdown", Nz), sz.addEventListener("pointermove", bz), sz.addEventListener("pointerup", wz), sz.addEventListener("pointercancel", wz), sz.addEventListener("click", Dz, !0), () => {
          gz.disconnect(), sz.removeEventListener("wheel", uz), sz.removeEventListener("pointerdown", Nz), sz.removeEventListener("pointermove", bz), sz.removeEventListener("pointerup", wz), sz.removeEventListener("pointercancel", wz), sz.removeEventListener("click", Dz, !0)
        }
      }), [zz, tz, sz, Fz]);
      return {
        view: Wz,
        zoomBy: tz => {
          const sz = zz.current;
          sz && Xz((zz => tX(zz, tz, .5, .5, fW(sz.clientWidth, sz.clientHeight, Fz))))
        }
      }
    }

    function FX(zz) {
      var tz, sz, Fz, Wz;
      let {
        controller: Xz,
        navigation: Oz
      } = zz;
      const oz = (0, cW.h)(Nz, Xz.getSnapshot()),
        {
          t: vz
        } = (0, TW.B)(),
        Uz = nW(),
        Kz = oz.presentation,
        uz = (0, Iz.useRef)(null),
        bz = (0, Iz.useRef)(null),
        wz = Boolean(oz.open && (null === Kz || void 0 === Kz ? void 0 : Kz.local) && Kz.background),
        Dz = sX(uz, wz, `${oz.open}|${oz.tab}|${null===Kz||void 0===Kz||null===(tz=Kz.background)||void 0===tz?void 0:tz.geometryKey}`, null !== (sz = null === Kz || void 0 === Kz || null === (Fz = Kz.background) || void 0 === Fz ? void 0 : Fz.ratio) && void 0 !== sz ? sz : 2);
      if (SW(bz, Kz, oz.open, Dz.view.zoom), !Kz || !oz.open) return null;
      const gz = Kz.local ? Kz.background : null,
        Hz = {
          "--map-ratio": String(null !== (Wz = null === gz || void 0 === gz ? void 0 : gz.ratio) && void 0 !== Wz ? Wz : 2),
          backgroundColor: null === gz || void 0 === gz ? void 0 : gz.colour
        },
        Bz = {
          "--map-zoom": String(Dz.view.zoom),
          transform: `translate(${100*Dz.view.x}%, ${100*Dz.view.y}%) scale(${Dz.view.zoom})`
        };
      return (0, jW.jsx)(iW.b, {
        show: oz.open,
        close: Xz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Uz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, jW.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, jW.jsx)("h2", {
                id: "skyblockMapTitle",
                children: vz("skyblockGame:map")
              }), Kz.minimap && (0, jW.jsx)("p", {
                children: Kz.minimap.caption
              })]
            }), (0, jW.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((zz => (0, jW.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": zz === oz.tab ? "true" : void 0,
                className: mW()({
                  Selected: zz === oz.tab
                }),
                "aria-pressed": zz === oz.tab,
                onClick: () => {
                  Xz.selectTab(zz)
                },
                children: vz("local" === zz ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, zz)))
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              onClick: Xz.dismiss
            })]
          }), (0, jW.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, jW.jsxs)("div", {
              ref: uz,
              className: mW()("SkyblockMapCanvas", {
                Local: Kz.local,
                Overview: !Kz.local,
                Zoomed: Dz.view.zoom > 1
              }),
              style: Hz,
              children: [(0, jW.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: wz ? Bz : void 0,
                children: (0, jW.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: bz,
                  children: [gz && (0, jW.jsx)(kW, {
                    className: "SkyblockMapTerrain",
                    imageKey: gz.imageKey,
                    fallbackImageKey: gz.fallbackImageKey,
                    geometryKey: gz.geometryKey,
                    alt: gz.label
                  }), Kz.local && (0, jW.jsx)(qW, {
                    mount: Oz.display.mountMapSearchArea
                  }), !Kz.local && (0, jW.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: Kz.connections.map((zz => (0, jW.jsx)("line", {
                      className: mW()({
                        Explored: zz.explored
                      }),
                      x1: zz.start[0],
                      y1: zz.start[1],
                      x2: zz.end[0],
                      y2: zz.end[1]
                    }, zz.id)))
                  }), Kz.points.map((zz => {
                    const tz = !Kz.local && zz.thumbnail ? hW[zz.thumbnail] : void 0;
                    return (0, jW.jsxs)("div", {
                      className: mW()("SkyblockMapNode", {
                        Current: zz.current
                      }),
                      style: {
                        left: `${zz.position[0]}%`,
                        top: `${zz.position[1]}%`
                      },
                      children: [(0, jW.jsxs)(LW.h, {
                        className: mW()("SkyblockMapPin", {
                          Unknown: !zz.visited,
                          Current: zz.current
                        }),
                        disabled: oz.pending,
                        onClick: () => {
                          Xz.travel(zz.travelKind, zz.travelId)
                        },
                        children: [tz && (0, jW.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: tz,
                          alt: ""
                        }), !tz && (0, jW.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, jW.jsx)(yW, {
                            icon: zz.icon
                          })
                        }), (0, jW.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: zz.name
                        })]
                      }), zz.current && (0, jW.jsx)("span", {
                        className: mW()("SkyblockMapHereBadge", {
                          Above: zz.position[1] > 50
                        }),
                        children: vz("skyblockGame:mapYouAreHere")
                      })]
                    }, zz.id)
                  })), Kz.portals.map((zz => (0, jW.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${zz.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${zz.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, jW.jsxs)(LW.h, {
                      className: "SkyblockMapPin",
                      disabled: oz.pending,
                      onClick: () => {
                        Xz.travel(zz.travelKind, zz.travelId)
                      },
                      children: [(0, jW.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: zz.colour
                        },
                        "aria-hidden": "true",
                        children: (0, jW.jsx)(yW, {
                          icon: zz.icon
                        })
                      }), (0, jW.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: zz.name
                      })]
                    })
                  }, zz.id))), Kz.local && (0, jW.jsx)(MW, {
                    controller: Oz
                  })]
                })
              }), wz && (0, jW.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, jW.jsx)("button", {
                  type: "button",
                  "aria-label": vz("skyblockGame:mapZoomIn"),
                  disabled: Dz.view.zoom >= 12,
                  onClick: () => {
                    Dz.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, jW.jsx)("button", {
                  type: "button",
                  "aria-label": vz("skyblockGame:mapZoomOut"),
                  disabled: Dz.view.zoom <= 1,
                  onClick: () => {
                    Dz.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, jW.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: oz.feedback
              })]
            })
          }), (0, jW.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [Kz.progress && (0, jW.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, jW.jsx)("span", {
                children: Kz.progress
              }), (0, jW.jsx)(aW, {
                percent: Kz.percent,
                label: Kz.progress
              })]
            }), Kz.noLandmarks && (0, jW.jsx)("span", {
              children: vz("skyblockGame:mapNoLandmarks")
            }), Kz.canTravel && (0, jW.jsx)("span", {
              className: "SkyblockMapHint",
              children: vz("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function WX(zz) {
      let {
        view: tz,
        controller: sz,
        navigation: Fz
      } = zz;
      const {
        t: Wz
      } = (0, TW.B)(), {
        isTouchScreen: Xz
      } = (0, JW.h)(["isTouchScreen"]);
      return (0, jW.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Wz("skyblockGame:mapLocal"),
        children: [Xz && (0, jW.jsx)(LW.h, {
          className: "SkyblockMinimapOpen",
          onClick: sz.showLocal,
          children: Wz("skyblockGame:map")
        }), (0, jW.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: tz.colour
          },
          children: [(0, jW.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: Fz.display.mountTerrain,
            style: {
              width: tz.width,
              height: tz.height
            },
            children: [(0, jW.jsx)(kW, {
              imageKey: tz.imageKey,
              fallbackImageKey: tz.fallbackImageKey,
              geometryKey: tz.geometryKey,
              alt: tz.label
            }), (0, jW.jsx)(qW, {
              mount: Fz.display.mountMinimapSearchArea
            }), tz.markers.map((zz => (0, jW.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${zz.position[0]}%`,
                top: `${zz.position[1]}%`,
                color: zz.colour
              },
              title: zz.name,
              children: (0, jW.jsx)(yW, {
                icon: zz.icon
              })
            }, zz.id)))]
          }), (0, jW.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Wz("skyblockGame:mapYouAreHere"),
            children: (0, jW.jsx)(yW, {
              icon: "player"
            })
          })]
        }), (0, jW.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: tz.caption
        })]
      })
    }

    function XX(zz) {
      let {
        controller: tz
      } = zz;
      return (0, jW.jsxs)("div", {
        className: "SkyblockCompass",
        ref: tz.display.mountCompass,
        children: [(0, jW.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, jW.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, jW.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function OX(zz) {
      let {
        controller: tz,
        surface: sz
      } = zz;
      const {
        t: Fz
      } = (0, TW.B)(), Wz = (0, cW.h)(Os, tz.getSnapshot()), Xz = nW();
      return Wz.enabled ? (0, jW.jsxs)(jW.Fragment, {
        children: ["hud" === sz && (0, jW.jsx)(IW.e, {
          placement: "statBars",
          children: Wz.hud && (0, jW.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Wz.hud.colour
            },
            children: [(0, jW.jsx)(aW, {
              percent: Wz.hud.skill.percent,
              label: Wz.hud.skill.xp,
              levelUpToken: Wz.hud.levelUpToken,
              colour: Wz.hud.colour
            }), (0, jW.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, jW.jsxs)("span", {
                children: [Wz.hud.skill.label, " \xb7 ", Wz.hud.skill.level]
              }), (0, jW.jsx)("span", {
                children: Wz.hud.gain
              })]
            })]
          })
        }), "hud" === sz && (0, jW.jsx)(IW.e, {
          children: Wz.hud && (0, jW.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, jW.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, jW.jsx)("strong", {
                children: Wz.hud.skill.label
              }), (0, jW.jsx)("span", {
                children: Wz.hud.gain
              })]
            }), (0, jW.jsx)(aW, {
              percent: Wz.hud.skill.percent,
              label: Wz.hud.skill.xp,
              levelUpToken: Wz.hud.levelUpToken,
              colour: Wz.hud.colour
            }), (0, jW.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, jW.jsx)("span", {
                children: Wz.hud.skill.level
              }), (0, jW.jsx)("span", {
                children: Wz.hud.skill.xp
              })]
            })]
          })
        }), "menu" === sz && (0, jW.jsx)(iW.b, {
          show: Wz.open,
          close: tz.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, jW.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: Xz,
            onKeyDown: lW,
            children: [(0, jW.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, jW.jsxs)("div", {
                children: [(0, jW.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: Fz("skyblockGame:skills")
                }), (0, jW.jsx)("p", {
                  children: Fz("skyblockGame:skillsIntro")
                })]
              }), (0, jW.jsx)(LW.n, {
                padIgnore: !0,
                onClick: tz.dismiss
              })]
            }), (0, jW.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, jW.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Wz.skills.map((zz => (0, jW.jsxs)(LW.h, {
                  className: mW()("SkyblockSkillCard", {
                    Selected: zz.selected
                  }),
                  ariaPressed: zz.selected,
                  onClick: () => {
                    tz.select(zz.id)
                  },
                  children: [(0, jW.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, jW.jsx)(eW.c, {
                      itemName: zz.icon,
                      amount: 0
                    })
                  }), (0, jW.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, jW.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, jW.jsx)("strong", {
                        children: zz.label
                      }), (0, jW.jsx)("span", {
                        children: zz.level
                      })]
                    }), (0, jW.jsx)(aW, {
                      percent: zz.percent,
                      label: `${zz.label}: ${zz.xp}`
                    }), (0, jW.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: zz.xp
                    })]
                  })]
                }, zz.id)))
              }), Wz.detail && (0, jW.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, jW.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, jW.jsx)(eW.c, {
                    itemName: Wz.detail.icon,
                    amount: 0
                  })
                }), (0, jW.jsx)("h3", {
                  children: Wz.detail.label
                }), (0, jW.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Wz.detail.level
                }), (0, jW.jsx)("p", {
                  children: Wz.detail.description
                }), (0, jW.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, jW.jsx)("strong", {
                    children: Fz("skyblockGame:currentBenefit")
                  }), (0, jW.jsx)("span", {
                    children: Wz.detail.benefit
                  })]
                }), (0, jW.jsx)(aW, {
                  percent: Wz.detail.percent,
                  label: Wz.detail.xp
                }), (0, jW.jsx)("p", {
                  children: Wz.detail.xp
                }), (0, jW.jsx)("h4", {
                  children: Fz("skyblockGame:earnXp")
                }), (0, jW.jsx)("ul", {
                  children: Wz.detail.sources.map((zz => (0, jW.jsx)("li", {
                    children: zz
                  }, zz)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var oX = sz(1333),
      vX = sz(4467),
      UX = sz(308);

    function KX(zz) {
      let {
        item: tz
      } = zz;
      return (0, jW.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, jW.jsx)(eW.c, {
          itemName: tz,
          amount: 0
        })
      })
    }

    function uX(zz) {
      let {
        name: tz,
        percent: sz,
        progress: Fz
      } = zz;
      return (0, jW.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, jW.jsx)(aW, {
          percent: sz,
          label: `${(0,UX.sb)(tz)}: ${Fz}`
        }), (0, jW.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: Fz
        })]
      })
    }

    function NX(zz) {
      let {
        subquests: tz,
        showDescriptions: sz = !1
      } = zz;
      return (0, jW.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: tz.map((zz => {
          const tz = sz && "completed" === zz.status,
            Fz = (0, jW.jsxs)("li", {
              className: mW()("SkyblockQuestStep", zz.status, {
                JustFinished: zz.justFinished,
                JustUnlocked: zz.justUnlocked
              }),
              tabIndex: tz ? 0 : void 0,
              children: [null !== zz.iconItem && (0, jW.jsx)(KX, {
                item: zz.iconItem
              }), null === zz.iconItem && (0, jW.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === zz.status ? "\u2713" : "skipped" === zz.status ? "\u2212" : "\u25cb"
              }), (0, jW.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, jW.jsx)("strong", {
                  children: (0, jW.jsx)(vX.b, {
                    text: zz.name
                  })
                }), sz && !tz && (0, jW.jsx)("span", {
                  children: (0, jW.jsx)(vX.b, {
                    text: zz.description
                  })
                }), null !== zz.barPercent && (0, jW.jsx)(uX, {
                  name: zz.name,
                  percent: zz.barPercent,
                  progress: zz.progress
                }), null === zz.barPercent && !tz && (0, jW.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: zz.statusLabel
                })]
              })]
            }, zz.id);
          return tz ? (0, jW.jsx)(oX.h, {
            delayShow: 200,
            tooltipInner: (0, jW.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, jW.jsx)("span", {
                children: (0, jW.jsx)(vX.b, {
                  text: zz.description
                })
              }), (0, jW.jsx)("strong", {
                children: zz.statusLabel
              })]
            }),
            children: Fz
          }, zz.id) : Fz
        }))
      })
    }

    function bX(zz) {
      let {
        quest: tz,
        select: sz
      } = zz;
      const {
        t: Fz
      } = (0, TW.B)(), Wz = tz.focusStep;
      return (0, jW.jsxs)(LW.h, {
        className: mW()("SkyblockQuestCard", {
          Selected: tz.selected,
          Tracked: tz.tracked
        }),
        onClick: () => {
          sz(tz.id)
        },
        children: [(0, jW.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, jW.jsx)("strong", {
            children: (0, jW.jsx)(vX.b, {
              text: tz.name
            })
          }), tz.tracked && (0, jW.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: Fz("skyblockGame:currentQuest")
          })]
        }), Wz && (0, jW.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Wz.iconItem && (0, jW.jsx)(KX, {
            item: Wz.iconItem
          }), (0, jW.jsx)(uX, {
            name: Wz.name,
            percent: Wz.barPercent,
            progress: Wz.progress
          })]
        }), (0, jW.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: tz.progress
        })]
      })
    }

    function wX(zz) {
      let {
        controller: tz,
        surface: sz
      } = zz;
      const Fz = (0, cW.h)(Ks, tz.getSnapshot()),
        {
          t: Wz
        } = (0, TW.B)(),
        Xz = nW();
      return Fz.enabled ? (0, jW.jsxs)(jW.Fragment, {
        children: ["hud" === sz && (0, jW.jsx)(jW.Fragment, {
          children: Fz.tracked && (0, jW.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: Us,
            children: (0, jW.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [Fz.trackedStepPulse > 0 && (0, jW.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, Fz.trackedStepPulse), (0, jW.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Wz("skyblockGame:currentQuest")
              }), (0, jW.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, jW.jsx)("strong", {
                  children: (0, jW.jsx)(vX.b, {
                    text: Fz.tracked.name
                  })
                }), null !== Fz.tracked.clock && (0, jW.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: Fz.tracked.clock
                })]
              }), (0, jW.jsx)(NX, {
                subquests: Fz.tracked.subquests
              })]
            })
          })
        }), "menu" === sz && (0, jW.jsx)(iW.b, {
          show: Fz.open,
          close: tz.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, jW.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: Xz,
            onKeyDown: lW,
            children: [(0, jW.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, jW.jsx)("div", {
                children: (0, jW.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Wz("skyblockGame:quests")
                })
              }), (0, jW.jsx)(LW.n, {
                padIgnore: !0,
                onClick: tz.dismiss
              })]
            }), (0, jW.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, jW.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, jW.jsx)("h3", {
                  children: Wz("skyblockGame:current")
                }), 0 === Fz.active.length && (0, jW.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Wz("skyblockGame:noActiveQuests")
                }), Fz.active.map((zz => (0, jW.jsx)(bX, {
                  quest: zz,
                  select: tz.select
                }, zz.id))), (0, jW.jsx)("h3", {
                  children: (0, jW.jsxs)("button", {
                    type: "button",
                    className: mW()("SkyblockQuestSectionToggle", {
                      Expanded: Fz.completedExpanded
                    }),
                    "aria-expanded": Fz.completedExpanded,
                    onClick: tz.toggleCompleted,
                    children: [(0, jW.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Wz("skyblockGame:completed"), (0, jW.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: Fz.completed.length
                    })]
                  })
                }), Fz.completedExpanded && 0 === Fz.completed.length && (0, jW.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Wz("skyblockGame:noCompletedQuests")
                }), Fz.completedExpanded && Fz.completed.map((zz => (0, jW.jsx)(bX, {
                  quest: zz,
                  select: tz.select
                }, zz.id)))]
              }), Fz.detail && (0, jW.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [Fz.detail.completed && (0, jW.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Wz("skyblockGame:completedQuest")
                }), (0, jW.jsx)("h3", {
                  children: (0, jW.jsx)(vX.b, {
                    text: Fz.detail.name
                  })
                }), (0, jW.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, jW.jsx)(vX.b, {
                    text: Fz.detail.description
                  })
                }), (0, jW.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [Fz.detail.progress, null !== Fz.detail.clock && (0, jW.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: Fz.detail.clock
                  })]
                }), (0, jW.jsx)(NX, {
                  subquests: Fz.detail.subquests,
                  showDescriptions: !0
                }), Fz.detail.tracked && (0, jW.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: Fz.detail.trackLabel
                }), !Fz.detail.completed && !Fz.detail.tracked && (0, jW.jsx)(LW.p, {
                  onClick: tz.trackSelected,
                  disabled: !Fz.detail.canTrack,
                  children: Fz.detail.trackLabel
                }), Fz.detail.canViewDialogue && (0, jW.jsx)(LW.h, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: tz.viewDialogue,
                  children: Wz("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var DX = sz(1036),
      gX = sz(2414);

    function HX(zz, tz, sz, Fz, Wz) {
      const Xz = zz => "linear" === Wz ? zz : {
          LX: Wz,
          point: zz
        },
        Oz = {};
      for (const [oz, vz] of Fz)
        for (const [tz, sz] of Object.entries(zz(oz, vz, Xz))) Oz[tz] ??= {
          timeline: []
        }, Oz[tz].timeline.push(sz);
      return {
        dX: tz,
        loop: sz,
        QX: Oz
      }
    }
    const BX = .547,
      PX = .022,
      rX = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      YX = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function xX(zz, tz, sz) {
      const {
        drop: Fz = 0,
        shift: Wz = 0,
        torso: Xz = 0,
        nod: Oz = 0,
        tilt: oz = 0,
        legs: vz = [0, 0],
        arms: Uz = 0,
        spread: Kz = 0
      } = tz, uz = BX * Math.cos(Xz) - PX * Math.sin(Xz), Nz = BX * Math.sin(Xz) + PX * Math.cos(Xz), bz = sz([0, -Fz, Wz]);
      return {
        LowerBody: {
          timeFraction: zz,
          position: bz,
          rotation: sz([0, 0, 0])
        },
        UpperBody: {
          timeFraction: zz,
          position: bz,
          rotation: sz([Xz, 0, oz])
        },
        HeadMesh: {
          timeFraction: zz,
          position: sz([0, uz - BX - Fz, Nz - PX + Wz]),
          rotation: sz([Xz + Oz, 0, oz])
        },
        LegLeftMesh: {
          timeFraction: zz,
          rotation: sz([vz[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: zz,
          rotation: sz([vz[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: zz,
          rotation: sz([Uz, 0, Kz])
        },
        ArmRightMesh: {
          timeFraction: zz,
          rotation: sz([Uz, 0, -Kz])
        }
      }
    }

    function mX(zz, tz, sz) {
      return HX(xX, zz, tz, sz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function JX(zz) {
      return "number" === typeof zz ? [zz, zz] : zz
    }

    function IX(zz, tz, sz) {
      const {
        rise: Fz = 0,
        shift: Wz = 0,
        torso: Xz = 0,
        twist: Oz = 0,
        tilt: oz = 0,
        nod: vz = 0,
        cock: Uz = 0,
        arms: Kz = 0,
        spread: uz = 0
      } = tz, [Nz, bz] = JX(Kz), [wz, Dz] = JX(uz);
      return {
        TorsoNode: {
          timeFraction: zz,
          position: sz([0, Fz, Wz]),
          rotation: sz([Xz, Oz, oz])
        },
        HeadMesh: {
          timeFraction: zz,
          rotation: sz([vz, 0, Uz])
        },
        ArmLeftMesh: {
          timeFraction: zz,
          rotation: sz([Nz, 0, wz])
        },
        ArmRightMesh: {
          timeFraction: zz,
          rotation: sz([bz, 0, -Dz])
        }
      }
    }
    const CX = [1.0625, -1, 0];

    function eX(zz) {
      return "number" === typeof zz ? [zz, zz] : zz
    }

    function ZX(zz, tz, sz) {
      const {
        drop: Fz = 0,
        shift: Wz = 0,
        torso: Xz = 0,
        tilt: Oz = 0,
        nod: oz = 0,
        cock: vz = 0,
        legs: Uz = [0, 0],
        arms: Kz = 0,
        spread: uz = 0
      } = tz, [Nz, bz] = eX(Kz), [wz, Dz] = eX(uz), gz = -Xz, Hz = -Oz, [Bz, Pz, rz] = function(zz, tz) {
        const [sz, Fz, Wz] = [-CX[0], CX[1], -CX[2]], Xz = sz * Math.cos(tz) - Fz * Math.sin(tz), Oz = sz * Math.sin(tz) + Fz * Math.cos(tz);
        return [Xz - sz, -(Oz * Math.cos(zz) - Wz * Math.sin(zz) - Fz), Oz * Math.sin(zz) + Wz * Math.cos(zz) - Wz]
      }(gz, Hz), Yz = sz([0, -Fz, Wz]);
      return {
        TorsoNode: {
          timeFraction: zz,
          position: sz([Bz, Pz - Fz, rz + Wz]),
          rotation: sz([gz, 0, Hz])
        },
        HeadMesh: {
          timeFraction: zz,
          rotation: sz([-oz, 0, -vz])
        },
        ArmLeftMesh: {
          timeFraction: zz,
          rotation: sz([-Nz, 0, -wz])
        },
        ArmRightMesh: {
          timeFraction: zz,
          rotation: sz([-bz, 0, Dz])
        },
        LegLeftMesh: {
          timeFraction: zz,
          position: Yz,
          rotation: sz([-Uz[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: zz,
          position: Yz,
          rotation: sz([-Uz[1], 0, 0])
        }
      }
    }
    var GX = sz(36547),
      TX = sz(37894),
      cX = sz(38046);

    function jX(zz, tz, sz) {
      var Fz, Wz;
      const Xz = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return zz + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - zz) * sz
        },
        [Oz, oz] = null !== (Fz = zz.legs) && void 0 !== Fz ? Fz : [0, 0],
        [vz, Uz] = null !== (Wz = tz.legs) && void 0 !== Wz ? Wz : [0, 0];
      return {
        drop: Xz(zz.drop, tz.drop),
        shift: Xz(zz.shift, tz.shift),
        torso: Xz(zz.torso, tz.torso),
        nod: Xz(zz.nod, tz.nod),
        tilt: Xz(zz.tilt, tz.tilt),
        legs: [Xz(Oz, vz), Xz(oz, Uz)],
        arms: Xz(zz.arms, tz.arms),
        spread: Xz(zz.spread, tz.spread)
      }
    }
    const AX = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      yX = mX(4400, !0, [
        [0, AX],
        [.16, {
          ...AX,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, AX],
        [.44, {
          ...AX,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, jX(AX, rX, .7)],
        [.66, jX(AX, rX, .78)],
        [.74, jX(AX, YX, .65)],
        [.86, {
          ...AX,
          drop: .14
        }],
        [1, AX]
      ], "catmull-rom-spline"),
      MX = {
        ...AX,
        drop: .14,
        torso: .3,
        spread: .4
      },
      dX = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      hX = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      QX = {
        caveGolem: yX,
        magmaGolem: mX(3600, !0, [
          [0, MX],
          [.12, {
            ...MX,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...MX,
            tilt: -.08
          }],
          [.4, {
            ...MX,
            tilt: .06,
            drop: .11
          }],
          [.52, jX(MX, rX, .9)],
          [.62, jX(MX, YX, .8)],
          [.7, jX(MX, YX, .45)],
          [.78, jX(MX, YX, .85)],
          [.9, {
            ...MX,
            drop: .17
          }],
          [1, MX]
        ], "catmull-rom-spline"),
        frostWraith: function(zz, tz, sz) {
          return HX(IX, zz, tz, sz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, dX],
          [.14, {
            ...dX,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...dX,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...dX,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...dX,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...dX,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...dX,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...dX,
            rise: .16,
            tilt: -.04
          }],
          [1, dX]
        ], "catmull-rom-spline"),
        tikiTerror: function(zz, tz, sz) {
          return HX(ZX, zz, tz, sz, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, hX],
          [.16, {
            ...hX,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, hX],
          [.44, {
            ...hX,
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
            ...hX,
            drop: .1
          }],
          [1, hX]
        ], "catmull-rom-spline")
      },
      kX = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      iX = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      LX = Object.fromEntries(Object.entries(QX).map((zz => {
        let [tz, sz] = zz;
        return [tz, (0, cX.b)((0, GX.f)(sz), tz)]
      })));

    function lX(zz) {
      const tz = function(zz) {
        var tz;
        const sz = (0, TX.e)(zz).poseRig;
        return null !== (tz = iX[zz]) && void 0 !== tz ? tz : void 0 === sz ? null : kX[sz]
      }(zz);
      return null === tz ? null : LX[tz]
    }

    function nX(zz) {
      return {
        "--difficulty-colour": zz
      }
    }
    const aX = (0, Iz.lazy)((() => (0, gX.d)(sz.e(192).then((() => sz(40630))), (zz => zz.MobPreview))));

    function qX(zz) {
      var tz, sz, Fz;
      let {
        picker: Wz,
        controller: Xz
      } = zz;
      const {
        t: Oz
      } = (0, TW.B)(), oz = nW(), {
        page: vz
      } = Wz;
      return (0, jW.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: oz,
        onKeyDown: zz => {
          "ArrowLeft" === zz.key ? (zz.preventDefault(), zz.stopPropagation(), Xz.previous()) : "ArrowRight" === zz.key ? (zz.preventDefault(), zz.stopPropagation(), Xz.next()) : lW(zz)
        },
        style: nX(vz.colour),
        children: [(0, jW.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, jW.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Wz.dungeonName
          }), (0, jW.jsx)(LW.n, {
            padIgnore: !0,
            onClick: Xz.dismiss
          })]
        }), (0, jW.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, jW.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, jW.jsx)(LW.h, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Wz.canPrevious,
              onClick: Xz.previous,
              children: (0, jW.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, jW.jsx)(DX.c, {
                  name: "angle-up"
                })
              })
            }), (0, jW.jsxs)("div", {
              className: mW()("SkyblockBossPickerBoss", {
                Locked: !vz.unlocked
              }),
              children: [null !== vz.bossMobType && (0, jW.jsx)(Iz.Suspense, {
                fallback: (0, jW.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, jW.jsx)(aX, {
                  className: "SkyblockBossPickerModel",
                  mobType: vz.bossMobType,
                  variation: vz.bossMobVariation,
                  animation: null !== (tz = lX(vz.bossMobType)) && void 0 !== tz ? tz : void 0
                })
              }), null === vz.bossMobType && (0, jW.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, jW.jsx)(LW.h, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Wz.canNext,
              onClick: Xz.next,
              children: (0, jW.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, jW.jsx)(DX.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, jW.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, jW.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [vz.beaten && (0, jW.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), vz.label]
            }), (0, jW.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (sz = vz.bossName) && void 0 !== sz ? sz : "???"
            }), (0, jW.jsxs)("span", {
              className: mW()("SkyblockBossPickerRecord", {
                Locked: null !== vz.lockedHint
              }),
              children: [null !== vz.lockedHintHighlight && (0, jW.jsxs)(jW.Fragment, {
                children: [vz.lockedHintHighlight.before, (0, jW.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: nX(vz.lockedHintHighlight.colour),
                  children: [null !== vz.lockedHintHighlight.icon && (0, jW.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, jW.jsx)(eW.c, {
                      itemName: vz.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), vz.lockedHintHighlight.name]
                }), vz.lockedHintHighlight.after]
              }), null === vz.lockedHintHighlight && (null !== (Fz = vz.lockedHint) && void 0 !== Fz ? Fz : vz.summary)]
            })]
          }), (0, jW.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Wz.pages.map((zz => (0, jW.jsx)("span", {
              className: mW()("SkyblockBossPickerDot", {
                Current: zz.current,
                Locked: !zz.unlocked
              }),
              style: nX(zz.colour)
            }, zz.difficulty)))
          }), (0, jW.jsx)(LW.t, {
            className: "SkyblockBossPickerFight",
            disabled: !vz.unlocked,
            onClick: Xz.enter,
            children: Oz("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function SX(zz) {
      let {
        dungeon: tz,
        select: sz
      } = zz;
      return (0, jW.jsxs)(LW.h, {
        className: mW()("SkyblockDungeonCard", {
          Selected: tz.selected
        }),
        onClick: () => {
          sz(tz.id)
        },
        children: [(0, jW.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, jW.jsx)("strong", {
            children: tz.name
          }), (0, jW.jsx)("span", {
            children: tz.beatenSummary
          })]
        }), (0, jW.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: tz.difficulties.map((zz => (0, jW.jsxs)("span", {
            className: mW()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: zz.beaten
            }),
            style: nX(zz.colour),
            title: zz.summary,
            children: [zz.beaten && (0, jW.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), zz.label]
          }, zz.difficulty)))
        })]
      })
    }

    function VX(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(ws, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = nW();
      return sz.enabled ? (0, jW.jsxs)(iW.b, {
        show: sz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [sz.picker && (0, jW.jsx)(qX, {
          picker: sz.picker,
          controller: tz
        }), !sz.picker && (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Wz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: Fz("skyblockGame:dungeons")
              }), (0, jW.jsx)("p", {
                children: Fz("skyblockGame:dungeonsIntro")
              })]
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              onClick: tz.dismiss
            })]
          }), (0, jW.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, jW.jsx)("div", {
              className: "SkyblockDungeonList",
              children: sz.dungeons.map((zz => (0, jW.jsx)(SX, {
                dungeon: zz,
                select: tz.select
              }, zz.id)))
            }), sz.detail && (0, jW.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, jW.jsx)("h3", {
                children: sz.detail.name
              }), (0, jW.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: sz.detail.difficulties.map((zz => (0, jW.jsxs)("li", {
                  className: mW()("SkyblockDungeonRecord", {
                    Beaten: zz.beaten
                  }),
                  children: [(0, jW.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: nX(zz.colour),
                    children: [zz.beaten && (0, jW.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), zz.label]
                  }), (0, jW.jsx)("span", {
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

    function RX(zz) {
      let {
        collection: tz,
        select: sz
      } = zz;
      return (0, jW.jsxs)(LW.h, {
        className: mW()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: tz.selected,
          Locked: tz.locked
        }),
        ariaPressed: tz.selected,
        onClick: () => {
          sz(tz.id)
        },
        children: [(0, jW.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, jW.jsx)(eW.c, {
            itemName: tz.icon,
            amount: 0
          })
        }), (0, jW.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, jW.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, jW.jsx)("strong", {
              children: tz.name
            }), (0, jW.jsx)("span", {
              children: tz.tier
            })]
          }), (0, jW.jsx)(aW, {
            percent: tz.percent,
            label: `${tz.name}: ${tz.progress}`
          }), (0, jW.jsx)("span", {
            className: "SkyblockSkillXp",
            children: tz.progress
          })]
        })]
      })
    }

    function pX(zz) {
      let {
        collection: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)();
      return (0, jW.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, jW.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, jW.jsx)(eW.c, {
            itemName: tz.icon,
            amount: 0
          })
        }), (0, jW.jsx)("h3", {
          children: tz.name
        }), (0, jW.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: tz.tier
        }), (0, jW.jsx)("p", {
          children: tz.locked ? sz("skyblockGame:collectionLocked") : tz.count
        }), null !== tz.nextReward && (0, jW.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, jW.jsx)("strong", {
            children: sz("skyblockGame:collectionNextReward")
          }), (0, jW.jsx)("span", {
            children: tz.nextReward
          })]
        }), (0, jW.jsx)(aW, {
          percent: tz.percent,
          label: tz.progress
        }), (0, jW.jsx)("p", {
          children: tz.progress
        })]
      })
    }

    function fX(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(hs, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = nW();
      return sz.enabled ? (0, jW.jsx)(iW.b, {
        show: sz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Wz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: Fz("skyblockGame:collections")
              }), (0, jW.jsxs)("p", {
                children: [Fz("skyblockGame:collectionsIntro"), " ", sz.tiersUnlocked]
              })]
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              onClick: tz.dismiss
            })]
          }), (0, jW.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: sz.categories.map((zz => (0, jW.jsxs)(LW.h, {
              className: mW()("SkyblockCollectionCategory", {
                Selected: zz.selected
              }),
              ariaPressed: zz.selected,
              padTabSelected: zz.selected,
              onClick: () => {
                tz.selectCategory(zz.id)
              },
              children: [(0, jW.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, jW.jsx)(eW.c, {
                  itemName: zz.icon,
                  amount: 0
                })
              }), (0, jW.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, jW.jsx)("strong", {
                  children: zz.label
                }), (0, jW.jsx)("span", {
                  children: zz.tiers
                })]
              })]
            }, zz.id)))
          }), (0, jW.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, jW.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: sz.collections.map((zz => (0, jW.jsx)(RX, {
                collection: zz,
                select: tz.select
              }, zz.id)))
            }), sz.detail && (0, jW.jsx)(pX, {
              collection: sz.detail
            })]
          })]
        })
      }) : null
    }
    const EX = ["completed", "active", "available", "locked"],
      zO = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function tO(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(ps, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = nW();
      return sz.enabled ? (0, jW.jsx)(iW.b, {
        show: sz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Wz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: Fz("skyblockDevQuests:title")
              }), (0, jW.jsx)("p", {
                children: Fz("skyblockDevQuests:intro")
              })]
            }), (0, jW.jsx)(LW.n, {
              onClick: tz.dismiss
            })]
          }), (0, jW.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [EX.map((zz => (0, jW.jsx)("span", {
              className: mW()("SkyblockQuestGraphLegendState", zz),
              children: Fz(`skyblockDevQuests:state_${zz}`)
            }, zz))), zO.map((zz => (0, jW.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, jW.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, jW.jsx)("line", {
                  className: mW()("SkyblockQuestGraphEdge", zz),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), Fz(`skyblockDevQuests:edge_${zz}`)]
            }, zz)))]
          }), (0, jW.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, jW.jsxs)("div", {
              className: mW()("SkyblockQuestGraphCanvas", {
                Planning: sz.planning
              }),
              style: {
                width: sz.width,
                height: sz.height
              },
              children: [(0, jW.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: sz.width,
                height: sz.height,
                "aria-hidden": "true",
                children: [(0, jW.jsx)("defs", {
                  children: (0, jW.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, jW.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), sz.edges.map((zz => (0, jW.jsx)("path", {
                  className: mW()("SkyblockQuestGraphEdge", zz.kind, {
                    InPlan: zz.inPlan
                  }),
                  d: zz.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, zz.key)))]
              }), sz.nodes.map((zz => (0, jW.jsxs)("button", {
                type: "button",
                className: mW()("SkyblockQuestGraphNode", zz.state, {
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
                  tz.hover(zz.id)
                },
                onMouseLeave: () => {
                  tz.hover(null)
                },
                onFocus: () => {
                  tz.hover(zz.id)
                },
                onBlur: () => {
                  tz.hover(null)
                },
                onClick: () => {
                  tz.jump(zz.id)
                },
                children: [(0, jW.jsx)("strong", {
                  children: zz.name
                }), (0, jW.jsx)("span", {
                  children: zz.detail
                })]
              }, zz.id)))]
            })
          })]
        })
      }) : null
    }
    const sO = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      FO = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${KF}ms`,
        "--forge-duration": "2150ms"
      },
      WO = Array.from({
        length: 18
      }, ((zz, tz) => ({
        "--ember-left": `${(4+92*(.618034*tz%1)).toFixed(1)}%`,
        "--ember-size": 3 + tz % 3 * 2 + "px",
        "--ember-drift": 14 * (tz % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*tz%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*tz%8).toFixed(2)}s`
      })));

    function XO(zz) {
      if (zz.style.removeProperty("--part-size"), null === zz.parentElement || "wrap" === getComputedStyle(zz.parentElement).flexWrap) return;
      const tz = [...zz.children],
        sz = getComputedStyle(zz),
        Fz = parseFloat(sz.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Wz = (zz.clientHeight - parseFloat(sz.rowGap) * (tz.length - 1)) / tz.length,
        Xz = tz.map((zz => {
          const tz = getComputedStyle(zz),
            sz = zz.querySelector("h3"),
            Xz = zz.querySelector(".SkyblockForgeParts");
          if (null === sz || null === Xz) return Fz;
          const Oz = Wz - parseFloat(tz.paddingTop) - parseFloat(tz.paddingBottom) - sz.offsetHeight - parseFloat(getComputedStyle(sz).marginBottom),
            oz = parseFloat(getComputedStyle(Xz).columnGap),
            vz = Xz.children.length;
          let Uz = 0;
          for (let Fz = 1; Fz <= vz; Fz++) {
            const zz = Math.ceil(vz / Fz);
            Uz = Math.max(Uz, Math.min((Xz.clientWidth - oz * (Fz - 1)) / Fz, (Oz - oz * (zz - 1)) / zz))
          }
          return Uz
        }));
      zz.style.setProperty("--part-size", `${Math.floor(Math.max(Fz,Math.min(...Xz)))}px`)
    }

    function OO(zz) {
      var tz, sz, Fz, Xz, Oz;
      let {
        controller: oz
      } = zz;
      const vz = (0, cW.h)(HF, oz.getSnapshot()),
        {
          t: Uz
        } = (0, TW.B)(),
        Kz = nW(),
        uz = function() {
          const zz = (0, Iz.useRef)(null),
            tz = (0, Iz.useRef)(null);
          return (0, Iz.useLayoutEffect)((() => {
            null !== zz.current && XO(zz.current)
          })), (0, Iz.useCallback)((sz => {
            var Fz;
            null === (Fz = tz.current) || void 0 === Fz || Fz.disconnect(), tz.current = null, zz.current = sz, null !== sz && (tz.current = new ResizeObserver((() => {
              XO(sz)
            })), tz.current.observe(sz))
          }), [])
        }(),
        Nz = function(zz) {
          const tz = (0, Iz.useRef)(null);
          return (0, Iz.useLayoutEffect)((() => {
            const zz = tz.current;
            if (null !== zz) {
              zz.style.removeProperty("font-size");
              for (let tz = 1.7; tz > 1.1 && zz.scrollWidth > zz.clientWidth; tz -= .1) zz.style.fontSize = tz - .1 + "rem"
            }
          }), [zz]), (0, Iz.useCallback)((zz => {
            tz.current = zz
          }), [])
        }(null === (tz = vz.preview) || void 0 === tz ? void 0 : tz.name),
        bz = (0, Iz.useRef)(null),
        wz = (0, Iz.useRef)({}),
        Dz = vz.forging,
        gz = null !== (sz = null === Dz || void 0 === Dz ? void 0 : Dz.preview.tier) && void 0 !== sz ? sz : 0,
        Hz = null !== (Fz = null === Dz || void 0 === Dz ? void 0 : Dz.preview.named) && void 0 !== Fz && Fz,
        Bz = (0, Iz.useMemo)((() => {
          return null === Dz ? null : {
            flames: (zz = gz, tz = Hz, Array.from({
              length: 26 + 6 * zz + (tz ? 20 : 0)
            }, ((zz, tz) => {
              const sz = tz < 6,
                Fz = Math.random() * Math.PI * 2,
                Wz = sz ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                Xz = Math.cos(Fz) * Wz,
                Oz = Math.sin(Fz) * Wz - 2 - 3 * Math.random(),
                oz = Math.random(),
                [vz, Uz, Kz] = sz ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : oz < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : oz < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [oz < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": vz,
                "--x0": `${(.15*Xz).toFixed(2)}rem`,
                "--y0": `${(.15*Oz).toFixed(2)}rem`,
                "--x": `${Xz.toFixed(2)}rem`,
                "--y": `${Oz.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Uz.toFixed(2)}rem`,
                "--duration": `${Math.round(Kz)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: bF(gz, Hz)
          };
          var zz, tz
        }), [null === Dz || void 0 === Dz ? void 0 : Dz.id]);
      if (!vz.enabled) return null;
      const Pz = vz.preview,
        rz = vz.arriving,
        Yz = null !== rz && !rz.sameSword,
        xz = null !== Pz && (0, jW.jsx)(eW.c, {
          itemName: Pz.baseSword,
          amount: 0,
          enchantmentTier: Pz.enchantmentTier
        });
      return (0, jW.jsx)(iW.b, {
        show: vz.open,
        close: oz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: Kz,
          onKeyDown: lW,
          children: [(0, jW.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: WO.map(((zz, tz) => (0, jW.jsx)("span", {
              style: zz
            }, tz)))
          }), (0, jW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Uz("skyblockGame:forgeTitle")
              }), (0, jW.jsx)("p", {
                children: Uz("skyblockGame:forgeIntro")
              })]
            }), (0, jW.jsx)(LW.n, {
              onClick: oz.dismiss
            })]
          }), (0, jW.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, jW.jsx)("div", {
              ref: uz,
              className: mW()("SkyblockForgeSlots", {
                Locked: null !== Dz
              }),
              children: vz.slots.map((zz => (0, jW.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, jW.jsx)("h3", {
                  children: zz.label
                }), (0, jW.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: zz.parts.map((tz => (0, jW.jsx)("button", {
                    type: "button",
                    className: mW()("SkyblockForgePart", {
                      Selected: tz.selected,
                      Missing: tz.placeholder
                    }),
                    disabled: tz.placeholder,
                    title: tz.placeholder ? Uz("skyblockGame:forgePickParts") : tz.itemName,
                    "aria-pressed": tz.selected,
                    onClick: () => {
                      oz.select(zz.kind, tz.material)
                    },
                    children: (0, jW.jsx)(eW.c, {
                      itemName: tz.itemName,
                      amount: tz.owned
                    })
                  }, tz.material)))
                })]
              }, zz.kind)))
            }), (0, jW.jsxs)("div", {
              className: mW()("SkyblockForgeAnvil", {
                Named: null === Pz || void 0 === Pz ? void 0 : Pz.named
              }),
              style: {
                "--tier": null === Pz ? "transparent" : Wz.lb[Pz.enchantmentTier]
              },
              children: [(0, jW.jsxs)("div", {
                className: mW()("SkyblockForgeAltar", {
                  Forging: null !== Dz
                }),
                style: null === Dz ? void 0 : FO,
                children: [(0, jW.jsxs)("div", {
                  className: mW()("SkyblockForgeMount", {
                    Arrive: null !== rz
                  }),
                  children: [null === Pz && (0, jW.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, jW.jsx)(eW.c, {
                      itemName: vz.unformedSword,
                      amount: 0
                    })
                  }), null !== Pz && (0, jW.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Pz && null === Dz && (0, jW.jsx)("div", {
                    ref: bz,
                    className: "SkyblockForgeFloat",
                    children: (0, jW.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: xz
                    })
                  }), null !== Pz && (0, jW.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: NF.map(((zz, tz) => (0, jW.jsx)("span", {
                      className: mW()({
                        Rune: "" !== zz.rune
                      }),
                      style: zz.style,
                      children: zz.rune
                    }, tz)))
                  }), null !== Dz && null !== Bz && (0, jW.jsxs)(jW.Fragment, {
                    children: [(0, jW.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, jW.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: Bz.flames.map(((zz, tz) => (0, jW.jsx)("span", {
                        style: zz
                      }, tz)))
                    }), (0, jW.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: wz.current,
                      children: (0, jW.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: xz
                      })
                    }), (0, jW.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, jW.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (gz >= 4 || Hz) && (0, jW.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, jW.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: Bz.sparks.map(((zz, tz) => (0, jW.jsx)("span", {
                        style: zz
                      }, tz)))
                    }), (0, jW.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, jW.jsx)("p", {
                  className: mW()("SkyblockForgeStatus", null === (Xz = vz.status) || void 0 === Xz ? void 0 : Xz.tone),
                  children: null === (Oz = vz.status) || void 0 === Oz ? void 0 : Oz.text
                })]
              }), null === Pz && (0, jW.jsx)("p", {
                className: mW()("SkyblockForgeName Waiting", {
                  ArriveText: Yz
                }),
                children: Uz(vz.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Pz && (0, jW.jsx)("h3", {
                ref: Nz,
                className: mW()("SkyblockForgeName", {
                  ArriveText: Yz
                }),
                title: Pz.name,
                children: Pz.name
              }), (null === Pz || void 0 === Pz ? void 0 : Pz.named) && (0, jW.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Uz("skyblockGame:forgeSecret")
              }), (0, jW.jsxs)(LW.t, {
                className: "SkyblockForgeButton",
                disabled: !vz.canForge,
                title: null === Pz ? void 0 : Uz("skyblockGame:forgeCoalOwned", {
                  owned: String(vz.coalOwned)
                }),
                onClick: () => {
                  wz.current = function(zz) {
                    const tz = null === zz ? "none" : getComputedStyle(zz).transform,
                      sz = new DOMMatrixReadOnly("none" === tz ? void 0 : tz);
                    return {
                      "--settle-y": `${sz.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(sz.b,sz.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(bz.current), gF(), oz.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Uz("skyblockGame:forgeButton"), null !== Pz && (0, jW.jsxs)("span", {
                  className: mW()("SkyblockForgeCost", {
                    Short: Pz.coalShort
                  }),
                  children: [(0, jW.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, jW.jsx)(eW.c, {
                      itemName: sF.e,
                      amount: 0
                    })
                  }), Pz.coalCost]
                })]
              })]
            }), (0, jW.jsxs)("div", {
              className: mW()("SkyblockForgeDetails", {
                Named: null === Pz || void 0 === Pz ? void 0 : Pz.named
              }),
              children: [(0, jW.jsx)("p", {
                className: mW()("SkyblockForgeLore", {
                  ArriveText: Yz
                }),
                title: null === Pz || void 0 === Pz ? void 0 : Pz.lore,
                children: null === Pz || void 0 === Pz ? void 0 : Pz.lore
              }), (0, jW.jsxs)("dl", {
                className: mW()("SkyblockForgeStats", {
                  ArriveText: Yz
                }),
                children: [null === Pz && sO.map((zz => (0, jW.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, jW.jsx)("dt", {
                    children: Uz(zz)
                  }), (0, jW.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, zz))), null === Pz || void 0 === Pz ? void 0 : Pz.stats.map((zz => (0, jW.jsxs)("div", {
                  className: mW()("SkyblockForgeStat", {
                    Better: zz.better
                  }),
                  children: [(0, jW.jsx)("dt", {
                    children: zz.label
                  }), (0, jW.jsx)("dd", {
                    children: zz.value
                  })]
                }, zz.label)))]
              }), (0, jW.jsx)("ul", {
                className: mW()("SkyblockForgeEffects", {
                  ArriveText: Yz
                }),
                children: null === Pz || void 0 === Pz ? void 0 : Pz.effects.map((zz => (0, jW.jsx)("li", {
                  children: zz
                }, zz)))
              })]
            })]
          })]
        })
      })
    }
    const oO = "Doom Rivet",
      vO = "Doom Crest";

    function UO(zz) {
      let {
        itemName: tz,
        amount: sz,
        owned: Fz
      } = zz;
      return (0, jW.jsxs)("span", {
        className: mW()("SkyblockSmugglerPrice", {
          Short: sz > Fz
        }),
        children: [(0, jW.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, jW.jsx)(eW.c, {
            itemName: tz,
            amount: 0
          })
        }), (0, jW.jsx)("span", {
          children: sz
        })]
      })
    }

    function KO(zz) {
      return zz.justBought ? "skyblockGame:smugglerJustBought" : zz.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function uO(zz) {
      let {
        deal: tz,
        view: sz,
        buy: Fz
      } = zz;
      const {
        t: Wz
      } = (0, TW.B)();
      return (0, jW.jsxs)("div", {
        className: mW()("SkyblockSmugglerPocket", {
          Bought: tz.justBought,
          Unaffordable: !tz.affordable,
          SoldOut: tz.soldOut && !tz.justBought
        }),
        children: [(0, jW.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, jW.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, jW.jsx)(eW.c, {
            itemName: tz.itemName,
            amount: 0,
            enchantmentTier: tz.enchantmentTier
          }), tz.amount > 1 && (0, jW.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Wz("skyblockGame:smugglerAmount", {
              amount: tz.amount
            })
          })]
        }), (0, jW.jsx)("h3", {
          children: tz.displayName
        }), (0, jW.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, jW.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [tz.rivets > 0 && (0, jW.jsx)(UO, {
              itemName: oO,
              amount: tz.rivets,
              owned: sz.rivetsOwned
            }), tz.crests > 0 && (0, jW.jsx)(UO, {
              itemName: vO,
              amount: tz.crests,
              owned: sz.crestsOwned
            })]
          }), (0, jW.jsx)(LW.h, {
            className: "SkyblockSmugglerBuy",
            disabled: tz.soldOut || !tz.affordable || sz.pending,
            onClick: () => {
              Fz(tz.slot)
            },
            children: Wz(KO(tz))
          })]
        })]
      }, tz.justBought ? sz.boughtCount : 0)
    }

    function NO(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(rF, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = nW();
      return sz.enabled ? (0, jW.jsx)(iW.b, {
        show: sz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Wz,
          onKeyDown: lW,
          children: [(0, jW.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, jW.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, jW.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: Fz("skyblockGame:smugglerTitle")
              }), (0, jW.jsx)("p", {
                children: Fz("skyblockGame:smugglerIntro")
              })]
            }), (0, jW.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, jW.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, jW.jsx)(UO, {
                  itemName: oO,
                  amount: sz.rivetsOwned,
                  owned: sz.rivetsOwned
                }), (0, jW.jsx)(UO, {
                  itemName: vO,
                  amount: sz.crestsOwned,
                  owned: sz.crestsOwned
                })]
              }), (0, jW.jsx)(LW.n, {
                onClick: tz.dismiss
              })]
            })]
          }), (0, jW.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: sz.deals.map((zz => (0, jW.jsx)(uO, {
              deal: zz,
              view: sz,
              buy: tz.buy
            }, zz.slot)))
          }), (0, jW.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, jW.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: sz.rotatesText
            }), null !== sz.status && (0, jW.jsx)("span", {
              className: mW()("SkyblockSmugglerStatus", sz.status.tone),
              children: sz.status.text
            })]
          })]
        })
      }) : null
    }

    function bO(zz) {
      let {
        phase: tz,
        className: sz
      } = zz;
      return (0, jW.jsx)("span", {
        className: mW()("SkyblockMoon", `Moon-${tz}`, sz),
        "aria-hidden": "true"
      })
    }

    function wO(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(mF, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)();
      return sz.enabled ? (0, jW.jsx)(IW.e, {
        placement: "statBars",
        children: (0, jW.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: mW()("SkyblockPassageChip", sz.open && "Open"),
          "aria-label": Fz("skyblockGame:passageChipLabel", {
            phase: sz.phaseName
          }),
          title: Fz("skyblockGame:passageChipLabel", {
            phase: sz.phaseName
          }),
          onMouseDown: zz => {
            zz.preventDefault()
          },
          onClick: tz.toggle,
          children: (0, jW.jsx)(bO, {
            phase: sz.phase
          }, sz.phase)
        })
      }) : null
    }

    function DO(zz) {
      let {
        fish: tz
      } = zz;
      return (0, jW.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, jW.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, jW.jsx)(eW.c, {
            itemName: tz.itemName,
            amount: 0
          })
        }), (0, jW.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, jW.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: tz.displayName
          }), (0, jW.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: tz.where
          })]
        })]
      })
    }

    function gO(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(mF, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = nW();
      return sz.enabled ? (0, jW.jsx)(iW.b, {
        show: sz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Wz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, jW.jsx)(bO, {
              phase: sz.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: Fz("skyblockGame:passageTitle")
              }), (0, jW.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: sz.phaseName
              })]
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              onClick: tz.dismiss
            })]
          }), (0, jW.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: Fz("skyblockGame:passageIntro")
          }), (0, jW.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, jW.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, jW.jsx)("h3", {
                children: Fz("skyblockGame:passageVisiting")
              }), (0, jW.jsx)("ul", {
                className: "SkyblockPassageList",
                children: sz.visitors.map((zz => (0, jW.jsx)(DO, {
                  fish: zz
                }, zz.itemName)))
              })]
            }), (0, jW.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== sz.resting && (0, jW.jsxs)(jW.Fragment, {
                children: [(0, jW.jsx)("h3", {
                  children: Fz("skyblockGame:passageResting")
                }), (0, jW.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, jW.jsx)(DO, {
                    fish: sz.resting
                  })
                })]
              }), (0, jW.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, jW.jsx)(bO, {
                  phase: sz.nextPhase
                }), (0, jW.jsx)("span", {
                  children: sz.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function HO() {
      return (0, jW.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((zz => (0, jW.jsx)("i", {
          style: {
            "--sparkle-index": zz
          }
        }, zz)))
      })
    }

    function BO(zz) {
      var tz;
      let {
        charm: sz,
        view: Fz,
        controller: Wz
      } = zz;
      const {
        t: Xz
      } = (0, TW.B)(), Oz = Fz.shop, oz = (null === (tz = Fz.sparkle) || void 0 === tz ? void 0 : tz.id) === sz.id;
      return (0, jW.jsxs)("li", {
        className: mW()("SkyblockLampLightCharm", sz.owned && "Owned", sz.socketed && "Socketed"),
        children: [oz && (0, jW.jsx)(HO, {}, Fz.sparkle.count), (0, jW.jsx)("h4", {
          children: sz.name
        }), (0, jW.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: sz.effect
        }), (0, jW.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: sz.lines.map((zz => (0, jW.jsxs)("li", {
            className: mW()("SkyblockLampLightOddsLine", "better" === zz.tone ? "Better" : "worse" === zz.tone ? "Worse" : "Same"),
            children: [(0, jW.jsx)("span", {
              className: "Before",
              children: zz.before
            }), (0, jW.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, jW.jsx)("span", {
              className: "After",
              children: zz.after
            })]
          }, zz.label)))
        }), (0, jW.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: sz.owned ? sz.socketed ? (0, jW.jsxs)(jW.Fragment, {
            children: [(0, jW.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: Xz("skyblockGame:lampLightSocketed")
            }), (0, jW.jsx)(LW.Q, {
              disabled: !Fz.canCommand,
              ariaLabel: Xz("skyblockGame:lampLightRemoveLabel", {
                charm: sz.name
              }),
              onClick: () => {
                Wz.socket(null)
              },
              children: Xz("skyblockGame:lampLightRemove")
            })]
          }) : (0, jW.jsx)(LW.h, {
            disabled: !Fz.canCommand || !Oz.heldRod,
            ariaLabel: Xz("skyblockGame:lampLightSocketLabel", {
              charm: sz.name
            }),
            onClick: () => {
              Wz.socket(sz.id)
            },
            children: Xz("skyblockGame:lampLightSocket")
          }) : (0, jW.jsx)(LW.h, {
            disabled: !Fz.canCommand || !sz.affordable,
            ariaLabel: Xz("skyblockGame:lampLightBuyLabel", {
              item: sz.name,
              cost: sz.cost
            }),
            onClick: () => {
              Wz.buy(sz.id)
            },
            children: sz.cost
          })
        })]
      })
    }

    function PO(zz) {
      var tz;
      let {
        tint: sz,
        view: Fz,
        controller: Wz
      } = zz;
      const {
        t: Xz
      } = (0, TW.B)();
      return (0, jW.jsxs)("li", {
        className: mW()("SkyblockLampLightTint", sz.wearing && "Wearing"),
        style: {
          "--tint-colour": sz.colour
        },
        children: [(null === (tz = Fz.sparkle) || void 0 === tz ? void 0 : tz.id) === sz.id && (0, jW.jsx)(HO, {}, Fz.sparkle.count), (0, jW.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, jW.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: sz.name
        }), sz.wearing ? (0, jW.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: Xz("skyblockGame:lampLightWearing")
        }) : (0, jW.jsx)(LW.h, {
          disabled: !Fz.canCommand || !sz.owned && !sz.affordable,
          ariaLabel: sz.owned ? Xz("skyblockGame:lampLightWearLabel", {
            tint: sz.name
          }) : Xz("skyblockGame:lampLightBuyLabel", {
            item: sz.name,
            cost: sz.cost
          }),
          onClick: () => {
            sz.owned ? Wz.wearTint(sz.id) : Wz.buy(sz.id)
          },
          children: sz.owned ? Xz("skyblockGame:lampLightWear") : sz.cost
        })]
      })
    }

    function rO(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(hF, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = sz.shop;
      return (0, jW.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, jW.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, jW.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: sz.balance
          }), (0, jW.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": sz.releasing,
            className: mW()("SkyblockLampLightSwitch", sz.releasing && "On"),
            disabled: sz.releasing ? "ready" !== sz.status : !sz.canCommand,
            onClick: () => {
              tz.setRelease(!sz.releasing)
            },
            children: [(0, jW.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, jW.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), Fz("skyblockGame:lampLightRelease")]
          }), (0, jW.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: Fz("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== sz.notice && (0, jW.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: sz.notice
        }), null !== Wz && (0, jW.jsxs)(jW.Fragment, {
          children: [(0, jW.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, jW.jsx)("h3", {
              children: Fz("skyblockGame:lampLightCharms")
            }), (0, jW.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Wz.oddsFor
            }), (0, jW.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((zz => (0, jW.jsx)("button", {
                type: "button",
                "aria-pressed": sz.situation === zz,
                className: mW()("SkyblockLampLightSituation", sz.situation === zz && "Selected"),
                onClick: () => {
                  tz.setSituation(zz)
                },
                children: Fz("open" === zz ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, zz)))
            })]
          }), !Wz.heldRod && (0, jW.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: Fz("skyblockGame:lampLightHoldRod")
          }), (0, jW.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Wz.charms.map((zz => (0, jW.jsx)(BO, {
              charm: zz,
              view: sz,
              controller: tz
            }, zz.id)))
          }), (0, jW.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, jW.jsx)("h3", {
              children: Fz("skyblockGame:lampLightTints")
            })
          }), (0, jW.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, jW.jsxs)("li", {
              className: mW()("SkyblockLampLightTint", "Islands", Wz.wearingIslandColours && "Wearing"),
              children: [(0, jW.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, jW.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: Fz("skyblockGame:lampLightIslandColours")
              }), Wz.wearingIslandColours ? (0, jW.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: Fz("skyblockGame:lampLightWearing")
              }) : (0, jW.jsx)(LW.h, {
                disabled: !sz.canCommand,
                ariaLabel: Fz("skyblockGame:lampLightWearLabel", {
                  tint: Fz("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  tz.wearTint(null)
                },
                children: Fz("skyblockGame:lampLightWear")
              })]
            }), Wz.tints.map((zz => (0, jW.jsx)(PO, {
              tint: zz,
              view: sz,
              controller: tz
            }, zz.id)))]
          })]
        })]
      })
    }

    function YO(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(hF, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)();
      return sz.releasing ? (0, jW.jsx)(IW.e, {
        children: (0, jW.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            tz.setRelease(!1)
          },
          children: [(0, jW.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, jW.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [Fz("skyblockGame:lampLightReleasing"), " \xb7 ", sz.balance]
          }), (0, jW.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: Fz("skyblockGame:lampLightKeepCatches")
          }), null !== sz.gained && (0, jW.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: sz.gained.text
          }, sz.gained.count)]
        })
      }) : null
    }

    function xO(zz) {
      let {
        island: tz,
        view: sz,
        aim: Fz
      } = zz;
      const {
        t: Wz
      } = (0, TW.B)(), Xz = tz.featuredFish;
      return (0, jW.jsxs)("li", {
        className: mW()("SkyblockKeepersChairIsland", `Island-${tz.id}`, tz.favoured && "Aimed", !tz.relit && "Dark"),
        children: [(0, jW.jsx)("h3", {
          children: tz.name
        }), tz.relit && null !== Xz ? (0, jW.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, jW.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Wz("skyblockGame:keepersChairTideNotice")
          }), (0, jW.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, jW.jsx)(eW.c, {
              itemName: Xz.itemName,
              amount: 0
            })
          }), (0, jW.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: Xz.displayName
          })]
        }) : (0, jW.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, jW.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Wz("skyblockGame:keepersChairDark")
          })
        }), tz.relit && (tz.favoured ? (0, jW.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Wz("skyblockGame:keepersChairAimed")
        }) : (0, jW.jsx)(LW.h, {
          className: "SkyblockKeepersChairAim",
          disabled: !sz.canAim,
          ariaLabel: Wz("skyblockGame:keepersChairAimLabel", {
            island: tz.name
          }),
          onClick: () => {
            Fz(tz.id)
          },
          children: Wz("skyblockGame:keepersChairAim")
        }))]
      }, tz.favoured ? sz.aimedCount : 0)
    }

    function mO(zz) {
      let {
        controller: tz,
        lampLight: sz
      } = zz;
      const Fz = (0, cW.h)(GF, tz.getSnapshot()),
        Wz = (0, cW.h)(hF, sz.getSnapshot()),
        [Xz, Oz] = (0, Iz.useState)("lamp"),
        {
          t: oz
        } = (0, TW.B)(),
        vz = nW();
      if (!Fz.enabled) return null;
      const Uz = "light" === Xz && Wz.enabled;
      return (0, jW.jsx)(iW.b, {
        show: Fz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: mW()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Uz && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: vz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: oz("skyblockGame:keepersChairTitle")
              }), (0, jW.jsx)("p", {
                children: oz(Uz ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              ariaLabel: oz("skyblockGame:keepersChairClose"),
              onClick: tz.dismiss
            })]
          }), Wz.enabled && (0, jW.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((zz => (0, jW.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === zz === Uz,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === zz === Uz ? "true" : void 0,
              className: mW()("SkyblockKeepersChairTab", "light" === zz === Uz && "Selected"),
              onClick: () => {
                Oz(zz)
              },
              children: [oz("lamp" === zz ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === zz && (0, jW.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Wz.balance
              })]
            }, zz)))
          }), Uz ? (0, jW.jsx)(rO, {
            controller: sz
          }) : (0, jW.jsx)(JO, {
            view: Fz,
            controller: tz
          })]
        })
      })
    }

    function JO(zz) {
      let {
        view: tz,
        controller: sz
      } = zz;
      const {
        t: Fz
      } = (0, TW.B)();
      return (0, jW.jsxs)(jW.Fragment, {
        children: [(0, jW.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: tz.islands.map((zz => (0, jW.jsx)(xO, {
            island: zz,
            view: tz,
            aim: sz.aim
          }, zz.id)))
        }), null !== tz.almanac && (0, jW.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, jW.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: Fz("skyblockGame:passageTitle")
          }), (0, jW.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, jW.jsx)(bO, {
              phase: tz.almanac.phase
            }), tz.almanac.phaseName]
          }), (0, jW.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, jW.jsx)(bO, {
              phase: tz.almanac.nextPhase
            }), tz.almanac.next]
          })]
        }), (0, jW.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, jW.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: Fz("skyblockGame:keepersChairFavour")
          }), tz.aimed && (0, jW.jsx)(LW.Q, {
            className: "SkyblockKeepersChairRest",
            disabled: !tz.canAim,
            onClick: () => {
              sz.aim(null)
            },
            children: Fz("skyblockGame:keepersChairRest")
          })]
        }), null !== tz.status && (0, jW.jsx)("p", {
          className: mW()("SkyblockKeepersChairStatus", "refused" === tz.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: tz.status.text
        })]
      })
    }

    function IO(zz) {
      let {
        controller: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)(), Fz = (0, cW.h)(cF, tz.getSnapshot());
      if (!Fz.enabled) return null;
      const Wz = Fz.freshCount > 0 ? sz("skyblockGame:reachLogOpenNews", {
        count: Fz.freshCount
      }) : sz("skyblockGame:reachLogOpen");
      return (0, jW.jsx)(IW.e, {
        placement: "statBars",
        children: (0, jW.jsxs)("button", {
          type: "button",
          className: mW()("SkyblockReachLogButton", Fz.freshCount > 0 && "HasNews", Fz.pending && "Pending"),
          "aria-label": Wz,
          title: Wz,
          onClick: tz.ask,
          children: [Fz.news && (0, jW.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${Fz.newsToken}`), (0, jW.jsx)("span", {
            className: mW()("SkyblockReachLogIcon", Fz.news && "Jump"),
            "aria-hidden": "true",
            children: (0, jW.jsx)(eW.c, {
              itemName: AF,
              amount: 0
            })
          }, `icon:${Fz.newsToken}`), Fz.freshCount > 0 && (0, jW.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: Fz.freshCount
          })]
        })
      })
    }

    function CO(zz) {
      let {
        gift: tz
      } = zz;
      return (0, jW.jsx)("li", {
        className: mW()("SkyblockRegularsGift", tz.given && "Given"),
        children: tz.text
      })
    }

    function eO(zz) {
      let {
        regular: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)();
      return (0, jW.jsxs)("li", {
        className: mW()("SkyblockRegularsCard", tz.tagged ? "Tagged" : "Untagged", tz.resting && "Resting"),
        children: [(0, jW.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, jW.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: tz.fishName,
            children: (0, jW.jsx)(eW.c, {
              itemName: tz.itemName,
              amount: 0
            })
          }), (0, jW.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, jW.jsx)("h3", {
              children: tz.name
            }), (0, jW.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: tz.fishName
            })]
          })]
        }), (0, jW.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: tz.line
        }), (0, jW.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, jW.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: tz.size
          }), tz.tagged && (0, jW.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: tz.resting ? sz("skyblockGame:regularsResting") : tz.meetings
          })]
        }), (0, jW.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: tz.chance
        }), (0, jW.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: tz.gifts.map((zz => (0, jW.jsx)(CO, {
            gift: zz
          }, zz.text)))
        }), tz.history.length > 0 && (0, jW.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: tz.history.map(((zz, tz) => (0, jW.jsx)("li", {
            children: zz
          }, tz)))
        })]
      })
    }

    function ZO(zz) {
      let {
        controller: tz,
        island: sz
      } = zz;
      const {
        t: Fz
      } = (0, TW.B)(), Wz = (0, cW.h)(FW, tz.getSnapshot()), Xz = Wz.islands.find((zz => zz.id === sz));
      if (!Wz.enabled || void 0 === Xz) return null;
      const Oz = Fz("skyblockGame:regularsOpen");
      return (0, jW.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": Oz,
        title: Oz,
        onClick: () => {
          tz.openIsland(sz)
        },
        children: [(0, jW.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: Fz("skyblockGame:regularsTitle")
        }), Xz.regulars.map((zz => (0, jW.jsx)("span", {
          className: mW()("SkyblockRegularsStripIcon", zz.tagged && "Tagged"),
          title: zz.name,
          children: (0, jW.jsx)(eW.c, {
            itemName: zz.itemName,
            amount: 0
          })
        }, zz.id)))]
      })
    }

    function GO(zz) {
      var tz;
      let {
        controller: sz
      } = zz;
      const Fz = (0, cW.h)(FW, sz.getSnapshot()),
        {
          t: Wz
        } = (0, TW.B)(),
        Xz = nW();
      if (!Fz.enabled) return null;
      const Oz = null !== (tz = Fz.islands.find((zz => zz.id === Fz.selected))) && void 0 !== tz ? tz : null;
      return (0, jW.jsx)(iW.b, {
        show: Fz.open,
        close: sz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: Xz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Wz("skyblockGame:regularsTitle")
              }), (0, jW.jsx)("p", {
                children: Wz("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              onClick: sz.dismiss
            })]
          }), (0, jW.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Fz.islands.map((zz => {
              const tz = zz.id === Fz.selected;
              return (0, jW.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": tz,
                "data-pad-tab": !0,
                "data-pad-selected": tz ? "true" : void 0,
                className: mW()("SkyblockReachLogTab", `Island-${zz.id}`, tz && "Selected", zz.charm.given && "GoldPage"),
                onClick: () => {
                  sz.selectIsland(zz.id)
                },
                children: (0, jW.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: zz.name
                })
              }, zz.id)
            }))
          }), (0, jW.jsxs)("div", {
            className: mW()("SkyblockRegularsPage", null !== Oz && `Island-${Oz.id}`),
            role: "tabpanel",
            children: [(0, jW.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Wz("skyblockGame:regularsHow")
            }), null !== Oz && (0, jW.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: Oz.regulars.map((zz => (0, jW.jsx)(eO, {
                regular: zz
              }, zz.id)))
            })]
          }), null !== Oz && (0, jW.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, jW.jsx)("span", {
              className: mW()("SkyblockRegularsCharm", Oz.charm.given && "Given"),
              children: Oz.charm.text
            })
          })]
        })
      })
    }
    const TO = [{
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
      cO = Array.from({
        length: 6
      }, ((zz, tz) => ({
        "--x": `${(88*(.618034*tz%1)).toFixed(1)}%`,
        "--y": `${(10+37*tz%70).toFixed(1)}%`,
        "--size": 7 + tz % 3 * 3 + "rem",
        "--drift-x": 3 * (tz % 3 - 1) + "rem",
        "--drift-y": 2 * (tz % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + tz % 4 * 3 + "s",
        "--delay": 2.5 * -tz + "s"
      }))),
      jO = Array.from({
        length: 14
      }, ((zz, tz) => ({
        "--left": `${(3+94*((.618034*tz+.3)%1)).toFixed(1)}%`,
        "--size": 4 + tz % 4 * 2 + "px",
        "--sway": tz % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*tz%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*tz%12).toFixed(2)}s`
      }))),
      AO = (0, Iz.memo)((function(zz) {
        let {
          island: tz
        } = zz;
        return (0, jW.jsxs)("div", {
          className: mW()("SkyblockReachLogDepths", null !== tz && `Island-${tz}`),
          "aria-hidden": "true",
          children: [TO.map(((zz, tz) => (0, jW.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: zz
          }, `shaft${tz}`))), cO.map(((zz, tz) => (0, jW.jsx)("span", {
            className: mW()("SkyblockReachLogMote", tz % 2 === 1 && "Violet"),
            style: zz
          }, `mote${tz}`))), jO.map(((zz, tz) => (0, jW.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: zz
          }, `bubble${tz}`)))]
        })
      })),
      yO = 100;

    function MO(zz) {
      let {
        view: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)();
      if (null === tz || 0 === tz.total) return null;
      const Fz = yO * tz.aspect,
        Wz = sz("skyblockGame:hiddenWatersCount", {
          found: tz.found,
          total: tz.total
        });
      return (0, jW.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${sz("skyblockGame:hiddenWatersTitle")}: ${Wz}`,
        children: [(0, jW.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${Fz}`,
          "aria-hidden": "true",
          children: [tz.islands.map(((zz, tz) => (0, jW.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (zz.left + zz.width / 2) * yO,
            cy: (zz.top + zz.height / 2) * Fz,
            rx: zz.width / 2 * yO,
            ry: zz.height / 2 * Fz
          }, tz))), tz.pins.map(((zz, tz) => (0, jW.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: zz.left * yO,
            cy: zz.top * Fz,
            r: 13
          }, tz)))]
        }), (0, jW.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, jW.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: sz("skyblockGame:hiddenWatersTitle")
          }), (0, jW.jsx)("span", {
            className: tz.found === tz.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Wz
          })]
        })]
      })
    }

    function dO(zz) {
      let {
        view: tz,
        island: sz
      } = zz;
      const {
        t: Fz
      } = (0, TW.B)(), Wz = null === tz || void 0 === tz ? void 0 : tz.glimpses.get(sz);
      return void 0 === Wz || 0 === Wz.length ? null : (0, jW.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, jW.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: Fz("skyblockGame:hiddenWatersGlimpsed")
        }), (0, jW.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Wz.map((zz => (0, jW.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, jW.jsx)(eW.c, {
              itemName: zz,
              amount: 0
            })
          }, zz)))
        })]
      })
    }
    const hO = ["Bronze", "Silver", "Gold"],
      QO = [{
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
      kO = QO.slice(0, 2);

    function iO(zz) {
      return zz ? QO : kO
    }

    function LO(zz) {
      let {
        fish: tz,
        letGoShown: sz
      } = zz;
      const {
        t: Fz
      } = (0, TW.B)();
      return (0, jW.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [hO.map(((zz, sz) => {
          const Wz = sz < tz.marks;
          return (0, jW.jsx)("span", {
            className: mW()("SkyblockReachLogPip", zz, Wz && "Earned", Wz && tz.fresh && sz === tz.marks - 1 && "Newest"),
            title: Fz(jF[sz])
          }, zz)
        })), (0, jW.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), iO(sz).map(((zz, sz) => (0, jW.jsx)("span", {
          className: mW()("SkyblockReachLogRibbon", zz.className, !0 === tz.ribbons[sz] && "Earned"),
          title: Fz(zz.titleKey)
        }, zz.className)))]
      })
    }

    function lO(zz) {
      let {
        letGoShown: tz,
        haloShown: sz
      } = zz;
      const {
        t: Fz
      } = (0, TW.B)();
      return (0, jW.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, jW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Fz("skyblockGame:reachLogMarks"),
          children: [(0, jW.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), Fz("skyblockGame:reachLogLegendMarks")]
        }), iO(tz).map((zz => (0, jW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Fz(zz.titleKey),
          children: [(0, jW.jsx)("span", {
            className: mW()("SkyblockReachLogRibbon", zz.className, "Earned")
          }), Fz(zz.legendKey)]
        }, zz.className))), (0, jW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Fz("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, jW.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), Fz("skyblockGame:reachLogLegendGlimmer")]
        }), sz && (0, jW.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: Fz("skyblockGame:reachLogHaloTitle"),
          children: [(0, jW.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), Fz("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function nO(zz) {
      let {
        returner: tz
      } = zz;
      return (0, jW.jsxs)("div", {
        className: mW()("SkyblockReachLogReturner", tz.back && "Back"),
        children: [(0, jW.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, jW.jsx)(eW.c, {
            itemName: tz.itemName,
            amount: 0
          })
        }), (0, jW.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: tz.line
        })]
      })
    }

    function aO(zz) {
      let {
        fish: tz,
        letGoShown: sz
      } = zz;
      const {
        t: Fz
      } = (0, TW.B)();
      return (0, jW.jsxs)("li", {
        className: mW()("SkyblockReachLogCard", tz.caught ? "Caught" : "Unknown", tz.marks >= 3 && "GoldCard", tz.fresh && "Fresh", tz.visitor && "Visitor"),
        children: [tz.visitor && (0, jW.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: Fz("skyblockGame:reachLogVisitor")
        }), tz.fresh && Array.from({
          length: 4
        }, ((zz, tz) => (0, jW.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, tz))), (0, jW.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [tz.halo && (0, jW.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: Fz("skyblockGame:reachLogHaloTitle")
          }), (0, jW.jsx)(eW.c, {
            itemName: tz.itemName,
            amount: 0
          }), tz.glimmer && (0, jW.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: Fz("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, jW.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: tz.name
        }), (0, jW.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: tz.chance
        }), (0, jW.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: tz.best
        }), (0, jW.jsx)(LO, {
          fish: tz,
          letGoShown: sz
        })]
      })
    }

    function qO(zz) {
      let {
        page: tz,
        letGoShown: sz,
        hiddenWaters: Fz
      } = zz;
      const {
        t: Wz
      } = (0, TW.B)();
      return tz.awake ? (0, jW.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: tz.fish.map((zz => (0, jW.jsx)(aO, {
          fish: zz,
          letGoShown: sz
        }, zz.itemName)))
      }) : (0, jW.jsxs)(jW.Fragment, {
        children: [(0, jW.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Wz("skyblockGame:reachLogAsleep")
        }), (0, jW.jsx)(dO, {
          view: Fz,
          island: tz.id
        })]
      })
    }

    function SO(zz) {
      var tz, sz;
      let {
        controller: Fz,
        regulars: Wz,
        hiddenWaters: Xz
      } = zz;
      const Oz = (0, cW.h)(cF, Fz.getSnapshot()),
        oz = function(zz) {
          return (0, cW.h)(vW, zz.getSnapshot())
        }(Xz),
        vz = (0, cW.h)(FW, Wz.getSnapshot()),
        {
          t: Uz
        } = (0, TW.B)(),
        Kz = nW();
      if (!Oz.enabled) return null;
      const uz = null !== (tz = Oz.pages.find((zz => zz.id === Oz.selected))) && void 0 !== tz ? tz : null;
      return (0, jW.jsx)(iW.b, {
        show: Oz.open,
        close: Fz.dismiss,
        togglePointerLock: !1,
        className: mW()("SkyblockSkillsOverlay", vz.open && "SkyblockReachLogUnderLedger"),
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: Kz,
          onKeyDown: lW,
          children: [(0, jW.jsx)(AO, {
            island: null !== (sz = null === uz || void 0 === uz ? void 0 : uz.id) && void 0 !== sz ? sz : null
          }), (0, jW.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Uz("skyblockGame:reachLogTitle")
              }), (0, jW.jsx)("p", {
                children: Uz("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, jW.jsx)(MO, {
              view: oz
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              onClick: Fz.dismiss
            })]
          }), (0, jW.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: Oz.pages.map((zz => {
              const tz = zz.id === Oz.selected,
                sz = zz.fish.some((zz => zz.fresh));
              return (0, jW.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": tz,
                "data-pad-tab": !0,
                "data-pad-selected": tz ? "true" : void 0,
                className: mW()("SkyblockReachLogTab", `Island-${zz.id}`, tz && "Selected", !zz.awake && "Asleep", zz.gold && "GoldPage", sz && "HasNews"),
                onClick: () => {
                  Fz.selectPage(zz.id)
                },
                children: [(0, jW.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: zz.name
                }), zz.awake && (0, jW.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Uz("skyblockGame:reachLogCaughtCount", {
                    caught: zz.caught,
                    total: zz.total
                  })
                })]
              }, zz.id)
            }))
          }), (0, jW.jsxs)("div", {
            className: mW()("SkyblockReachLogPage", null !== uz && `Island-${uz.id}`),
            role: "tabpanel",
            children: [null !== uz && (0, jW.jsx)(qO, {
              page: uz,
              letGoShown: Oz.letGoShown,
              hiddenWaters: oz
            }), !0 === (null === uz || void 0 === uz ? void 0 : uz.awake) && null !== uz.returner && (0, jW.jsx)(nO, {
              returner: uz.returner
            }), !0 === (null === uz || void 0 === uz ? void 0 : uz.awake) && (0, jW.jsx)(ZO, {
              controller: Wz,
              island: uz.id
            })]
          }), (0, jW.jsx)("footer", {
            className: mW()("SkyblockReachLogFooter", null !== uz && `Island-${uz.id}`, !0 === (null === uz || void 0 === uz ? void 0 : uz.gold) && "GoldPage"),
            children: !0 === (null === uz || void 0 === uz ? void 0 : uz.gold) ? (0, jW.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Uz("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, jW.jsxs)(jW.Fragment, {
              children: [(0, jW.jsx)(lO, {
                letGoShown: Oz.letGoShown,
                haloShown: !0 === (null === uz || void 0 === uz ? void 0 : uz.fish.some((zz => zz.halo)))
              }), (0, jW.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Uz("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var VO = sz(4464);

    function RO(zz) {
      let {
        conversation: tz,
        completedLabel: sz
      } = zz;
      return (0, jW.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, jW.jsxs)("header", {
          children: [(0, jW.jsx)("h3", {
            children: tz.questName
          }), tz.completed && (0, jW.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: sz
          })]
        }), tz.lines.map((zz => (0, jW.jsx)(VO.c, {
          display: zz.display
        }, zz.key)))]
      })
    }

    function pO(zz) {
      let {
        controller: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)(), Fz = (0, cW.h)(KW, tz.getSnapshot()), Wz = nW();
      if (!Fz.enabled) return null;
      const Xz = !Fz.loading && 0 === Fz.conversations.length;
      return (0, jW.jsx)(iW.b, {
        show: Fz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Wz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: sz("skyblockDialogue:title")
              }), (0, jW.jsx)("p", {
                children: sz("skyblockDialogue:intro")
              })]
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              onClick: tz.dismiss
            })]
          }), (0, jW.jsxs)("div", {
            className: mW()("SkyblockDialogueBody", {
              SingleColumn: null !== Fz.questFocus || 0 === Fz.characters.length
            }),
            children: [null === Fz.questFocus && Fz.characters.length > 0 && (0, jW.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: Fz.characters.map((zz => (0, jW.jsx)(LW.h, {
                className: mW()("SkyblockDialogueCharacter", {
                  Selected: zz.selected
                }),
                onClick: () => {
                  tz.selectCharacter(zz.id)
                },
                children: (0, jW.jsx)(ZW.c, {
                  text: zz.styling
                })
              }, zz.id)))
            }), (0, jW.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== Fz.questFocus && (0, jW.jsx)(LW.h, {
                className: "SkyblockDialogueBack",
                onClick: tz.showCharacters,
                children: sz("skyblockDialogue:allCharacters")
              }), Fz.loading && (0, jW.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: sz("skyblockDialogue:loading")
              }), Xz && (0, jW.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: sz(null === Fz.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), Fz.conversations.map((zz => (0, jW.jsx)(RO, {
                conversation: zz,
                completedLabel: Fz.completedLabel
              }, zz.questId)))]
            })]
          })]
        })
      })
    }

    function fO(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(DW, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = nW();
      return sz.enabled ? (0, jW.jsx)(iW.b, {
        show: sz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Wz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: Fz("skyblockGame:autographBook")
              }), (0, jW.jsx)("p", {
                children: Fz("skyblockGame:autographBookIntro")
              })]
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              onClick: tz.dismiss
            })]
          }), (0, jW.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, jW.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, jW.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, jW.jsx)("strong", {
                  children: sz.total
                }), (0, jW.jsx)("span", {
                  children: Fz("skyblockGame:autographTotal")
                })]
              }), (0, jW.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, jW.jsx)("strong", {
                  children: sz.rankTotal
                }), (0, jW.jsx)("span", {
                  children: Fz("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === sz.entries.length ? (0, jW.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: Fz("skyblockGame:autographBookEmpty")
            }) : (0, jW.jsx)("ul", {
              className: "SkyblockAutographList",
              children: sz.entries.map((zz => (0, jW.jsxs)("li", {
                className: mW()("SkyblockAutograph", {
                  Ranked: null !== zz.rank
                }),
                style: null === zz.rank ? void 0 : {
                  color: zz.rank.colour
                },
                children: [null !== zz.rank && (0, jW.jsx)(DX.c, {
                  className: "SkyblockAutographRankIcon",
                  name: zz.rank.icon,
                  kit: (0, DX.e)(zz.rank.icon)
                }), (0, jW.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, jW.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: zz.name
                  }), (0, jW.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== zz.rank && (0, jW.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: zz.rank.label
                    }), (0, jW.jsx)("span", {
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
    const EO = (0, Iz.memo)((function(zz) {
        let {
          controller: tz
        } = zz;
        return (0, jW.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: tz.display.mountWaypoint,
          children: [(0, jW.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, jW.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, jW.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, jW.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, jW.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, jW.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      zo = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function to(zz) {
      return "next" === zz.phase ? "\u2192" : zo[zz.kind]
    }
    const so = (0, Iz.memo)((function(zz) {
      let {
        controller: tz,
        display: sz
      } = zz;
      const Fz = (0, cW.h)(us, tz.getNotificationSnapshot()),
        [Wz, Xz] = (0, Iz.useState)(!1);
      return (0, cW.g)("qteStateUpdated", (zz => {
        Xz(zz.isActive)
      })), (0, jW.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Wz ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [Fz && (0, jW.jsxs)("div", {
          className: `SkyblockQuestNotification ${Fz.kind} ${Fz.phase}`,
          style: {
            "--quest-notification-duration": `${Fz.durationMs}ms`,
            ...Fz.accent && {
              "--quest-notification-accent": Fz.accent
            }
          },
          children: [(0, jW.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (Fz.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, jW.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: to(Fz)
            }), Fz.iconItem && (0, jW.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, jW.jsx)(eW.c, {
                itemName: Fz.iconItem,
                amount: 0
              })
            })]
          }), (0, jW.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, jW.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: Fz.title
            }), (0, jW.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, jW.jsx)(vX.b, {
                text: Fz.name
              })
            }), Fz.description && (0, jW.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, jW.jsx)(vX.b, {
                text: Fz.description
              })
            }), Fz.reward && (0, jW.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, jW.jsx)(vX.b, {
                text: Fz.reward
              })
            })]
          })]
        }, Fz.token), (null === Fz || void 0 === Fz ? void 0 : Fz.waypointNameKey) && (0, jW.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": Fz.waypointNameKey,
          "data-notification-token": Fz.token,
          ref: sz.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${Fz.token}`)]
      })
    }));

    function Fo(zz) {
      const tz = parseInt(zz.replace("#", ""), 16);
      return `${tz>>16&255}, ${tz>>8&255}, ${255&tz}`
    }
    const Wo = (0, Iz.memo)((function(zz) {
      let {
        controller: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)(), Fz = (0, cW.h)(ks, tz.getSnapshot());
      if (!Fz) return null;
      const Wz = "arrival" === Fz.phase;
      return (0, jW.jsxs)("div", {
        className: mW()("SkyblockPortalTransit", {
          Departure: !Wz,
          Arrival: Wz
        }),
        style: {
          "--portal-rgb": Fo(Fz.colour),
          "--portal-duration": `${Fz.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, jW.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, jW.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            tz.finishArrival(Fz.token)
          }
        }), (0, jW.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, jW.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Wz && (0, jW.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: sz("skyblockGame:portalTransitHeading")
          }), (0, jW.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: sz(Fz.zoneNameKey)
          })]
        })]
      }, Fz.token)
    }));

    function Xo() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Oo() {
      const zz = document.querySelector(".SkyblockHudCoins"),
        tz = null === zz || void 0 === zz ? void 0 : zz.getBoundingClientRect();
      return tz && tz.width > 0 ? {
        x: tz.left + Math.min(tz.width, 24) / 2,
        y: tz.top + tz.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function oo(zz) {
      return {
        x: zz.left + zz.width / 2,
        y: zz.top + zz.height / 2
      }
    }

    function vo() {
      var zz;
      const tz = null === (zz = document.querySelector(".HotBar")) || void 0 === zz ? void 0 : zz.getBoundingClientRect();
      return tz && tz.width > 0 ? oo(tz) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Uo(zz) {
      let {
        items: tz,
        origins: sz,
        target: Fz
      } = zz;
      return (0, jW.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: tz.map(((zz, tz) => {
          const Wz = sz[tz];
          return (0, jW.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Wz.x}px`,
              top: `${Wz.y}px`,
              "--item-dx": Fz.x - Wz.x + "px",
              "--item-dy": Fz.y - Wz.y + "px",
              "--item-delay": 2e3 + 160 * tz + "ms",
              "--item-flight": "700ms"
            },
            children: (0, jW.jsx)(eW.c, {
              itemName: zz.dailyRewardItemName,
              amount: 0
            })
          }, zz.dailyRewardItemName)
        }))
      })
    }

    function Ko(zz, tz) {
      const sz = -Math.PI / 2 + 1.25 * (zz / (tz - 1) * 2 - 1),
        Fz = 70 + zz % 3 * 22;
      return {
        x: Math.cos(sz) * Fz,
        y: Math.sin(sz) * Fz * .7
      }
    }

    function uo(zz) {
      let {
        origin: tz,
        target: sz,
        count: Fz
      } = zz;
      const Wz = [];
      for (let Xz = 0; Xz < Fz; Xz++) {
        const zz = Ko(Xz, Fz);
        Wz.push((0, jW.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${tz.x}px`,
            top: `${tz.y}px`,
            "--coin-bx": `${zz.x}px`,
            "--coin-by": `${zz.y}px`,
            "--coin-dx": sz.x - tz.x + "px",
            "--coin-dy": sz.y - tz.y + "px",
            "--coin-delay": `${qs(Xz,Fz)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, jW.jsx)(eW.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, Xz))
      }
      return (0, jW.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Wz
      })
    }

    function No(zz) {
      let {
        day: tz
      } = zz;
      const sz = Cz[tz - 1];
      return (0, jW.jsxs)(jW.Fragment, {
        children: [(0, jW.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, jW.jsx)(eW.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, GW.f)(sz.dailyRewardCoins)]
        }), sz.dailyRewardItems.map((zz => (0, jW.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, jW.jsx)(eW.c, {
            itemName: zz.dailyRewardItemName,
            amount: 0
          }), "\xd7", zz.dailyRewardItemAmount]
        }, zz.dailyRewardItemName)))]
      })
    }

    function bo(zz) {
      let {
        day: tz
      } = zz;
      const sz = Zz(tz);
      return (0, jW.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Cz.map(((zz, Fz) => {
          const Wz = Fz + 1;
          return (0, jW.jsxs)("li", {
            className: mW()("SkyblockDailyRewardTile", {
              Claimed: Wz < tz && Wz !== sz,
              Today: Wz === tz,
              Tomorrow: Wz === sz,
              Jackpot: Wz === ez
            }),
            children: [(0, jW.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Wz
            }), (0, jW.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, jW.jsx)(eW.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, GW.f)(zz.dailyRewardCoins)]
            }), zz.dailyRewardItems.map((zz => (0, jW.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, jW.jsx)(eW.c, {
                itemName: zz.dailyRewardItemName,
                amount: 0
              }), "\xd7", zz.dailyRewardItemAmount]
            }, zz.dailyRewardItemName)))]
          }, Wz)
        }))
      })
    }

    function wo(zz) {
      let {
        view: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)(), Fz = (0, Iz.useRef)(null), Wz = (0, Iz.useRef)(null), [Xz, Oz] = (0, Iz.useState)(null);
      (0, Iz.useLayoutEffect)((() => {
        var zz;
        const tz = null === (zz = Fz.current) || void 0 === zz ? void 0 : zz.getBoundingClientRect();
        if (tz) {
          var sz, Xz;
          const zz = Array.from(null !== (sz = null === (Xz = Wz.current) || void 0 === Xz ? void 0 : Xz.children) && void 0 !== sz ? sz : [], (zz => oo(zz.getBoundingClientRect())));
          Oz({
            origin: oo(tz),
            target: Oo(),
            itemOrigins: zz,
            itemTarget: vo()
          })
        }
      }), []);
      const oz = Zz(tz.day),
        vz = function(zz, tz) {
          const [sz, Fz] = (0, Iz.useState)((() => Xo() ? zz : 0));
          return (0, Iz.useEffect)((() => {
            if (Xo()) return;
            const sz = performance.now();
            let Wz = 0;
            const Xz = Oz => {
              const oz = Math.min(Math.max((Oz - sz) / tz, 0), 1);
              Fz(Math.round(zz * (1 - (1 - oz) ** 3))), oz < 1 && (Wz = requestAnimationFrame(Xz))
            };
            return Wz = requestAnimationFrame(Xz), () => {
              cancelAnimationFrame(Wz)
            }
          }), [zz, tz]), sz
        }(tz.coins, 450);
      return (0, jW.jsxs)("div", {
        className: mW()("SkyblockDailyReward", {
          Jackpot: tz.day === ez
        }),
        style: {
          "--daily-duration": `${tz.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, jW.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, jW.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, jW.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, jW.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: sz("skyblockGame:dailyRewardTitle")
            }), (0, jW.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: sz("skyblockGame:dailyRewardDay", {
                day: String(tz.day)
              })
            })]
          }), (0, jW.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: Fz,
            children: [(0, jW.jsx)(eW.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, jW.jsxs)("span", {
              children: ["+", (0, GW.f)(vz)]
            })]
          }), tz.items.length > 0 && (0, jW.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Wz,
            children: tz.items.map((zz => (0, jW.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, jW.jsx)(eW.c, {
                itemName: zz.dailyRewardItemName,
                amount: 0
              }), "\xd7", zz.dailyRewardItemAmount]
            }, zz.dailyRewardItemName)))
          }), (0, jW.jsx)(bo, {
            day: tz.day
          }), (0, jW.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [sz("skyblockGame:dailyRewardComeBack"), (0, jW.jsx)(No, {
              day: oz
            })]
          })]
        }), null !== Xz && (0, jW.jsx)(uo, {
          origin: Xz.origin,
          target: Xz.target,
          count: tz.flyingCoins
        }), null !== Xz && Xz.itemOrigins.length === tz.items.length && (0, jW.jsx)(Uo, {
          items: tz.items,
          origins: Xz.itemOrigins,
          target: Xz.itemTarget
        })]
      })
    }
    const Do = (0, Iz.memo)((function(zz) {
        let {
          controller: tz
        } = zz;
        const sz = (0, cW.h)(ls, tz.getSnapshot());
        return sz ? (0, jW.jsx)(wo, {
          view: sz
        }, sz.token) : null
      })),
      go = "Gold Coin";

    function Ho(zz) {
      return 650 + 220 * zz
    }

    function Bo(zz) {
      return {
        "--letter-delay": `${Ho(zz)}ms`,
        "--letter-land": `${Ho(zz)+300}ms`
      }
    }

    function Po(zz) {
      let {
        letterCount: tz
      } = zz;
      return (0, jW.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, jW.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, jW.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, jW.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: tz
        }, ((zz, tz) => (0, jW.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Bo(tz),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, tz)))]
      })
    }

    function ro(zz) {
      var tz, sz, Fz;
      let {
        letter: Wz,
        index: Xz
      } = zz;
      const {
        t: Oz
      } = (0, TW.B)(), oz = null !== (tz = null === (sz = Wz.items[0]) || void 0 === sz ? void 0 : sz.itemName) && void 0 !== tz ? tz : go;
      return (0, jW.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Bo(Xz),
        children: [(0, jW.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, jW.jsx)(eW.c, {
            itemName: oz,
            amount: 0
          })
        }), (0, jW.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: Oz(Wz.reasonKey, null !== (Fz = Wz.reasonParams) && void 0 !== Fz ? Fz : void 0)
        }), (0, jW.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Wz.coins > 0 && (0, jW.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, jW.jsx)(eW.c, {
              itemName: go,
              amount: 0
            }), "+", (0, GW.f)(Wz.coins)]
          }), Wz.items.map(((zz, tz) => (0, jW.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, jW.jsx)(eW.c, {
              itemName: zz.itemName,
              amount: 0
            }), zz.label, " \xd7", zz.amount]
          }, tz)))]
        })]
      })
    }

    function Yo(zz) {
      let {
        view: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)();
      return (0, jW.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${tz.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Ho(tz.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, jW.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, jW.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, jW.jsx)(Po, {
              letterCount: tz.letters.length
            }), (0, jW.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: sz("skyblockGame:mailboxTitle")
            })]
          }), (0, jW.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: tz.letters.map(((zz, tz) => (0, jW.jsx)(ro, {
              letter: zz,
              index: tz
            }, tz)))
          }), tz.more > 0 && (0, jW.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: sz("skyblockGame:mailboxMore", {
              count: String(tz.more)
            })
          })]
        })
      })
    }
    const xo = (0, Iz.memo)((function(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(Vs, tz.getSnapshot());
      return sz ? (0, jW.jsx)(Yo, {
        view: sz
      }, sz.token) : null
    }));

    function mo(zz) {
      let {
        controller: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)(), Fz = (0, cW.h)(kF, tz.getSnapshot());
      if (null === Fz) return null;
      const Wz = Fz.fullSet ? "empty" === Fz.fuelState ? {
        text: sz("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: sz("skyblockGame:magmawardHudFullSet", {
          worn: String(Fz.wornCount)
        }),
        tone: "partial"
      };
      return (0, jW.jsx)(IW.e, {
        placement: "statBars",
        children: (0, jW.jsxs)("div", {
          className: mW()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${Fz.fuelState}`, {
            "SkyblockMagmawardHud-partial": !Fz.fullSet,
            "SkyblockMagmawardHud-armed": Fz.fullSet && "empty" !== Fz.fuelState
          }),
          children: [null !== Fz.flare && (0, jW.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${Fz.flare}`
          }, `flare:${Fz.flareToken}`), (0, jW.jsx)("div", {
            className: mW()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: Fz.setLit
            }),
            children: Fz.pieces.map(((zz, tz) => (0, jW.jsx)("div", {
              className: mW()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: zz.worn,
                SkyblockMagmawardPieceJustWorn: zz.justWorn
              }),
              children: (0, jW.jsx)(eW.c, {
                itemName: zz.itemName,
                amount: 0
              })
            }, `${tz}:${zz.wornToken}`)))
          }, `pieces:${Fz.setLitToken}`), (0, jW.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, jW.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, jW.jsxs)("div", {
              className: mW()("SkyblockMagmawardFuelCounter", Fz.pulse && `SkyblockMagmawardFuelCounter-${Fz.pulse}`),
              children: [(0, jW.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, jW.jsx)(eW.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, jW.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: Fz.fuel
              })]
            }, `counter:${Fz.pulseToken}`), "burn" === Fz.pulse && (0, jW.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${Fz.pulseToken}`)]
          }), Wz && (0, jW.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Wz.tone} SmallTextBold`,
            children: Wz.text
          })]
        })
      })
    }

    function Jo(zz) {
      let {
        controller: tz
      } = zz;
      const {
        t: sz,
        selectedLanguage: Fz
      } = (0, TW.B)(), Wz = (0, cW.h)(LF, tz.getSnapshot());
      return null === Wz ? null : (0, jW.jsx)(IW.e, {
        placement: "statBars",
        children: (0, jW.jsxs)("div", {
          className: mW()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Wz.inRange
          }),
          style: {
            "--glowtide-colour": Wz.colour
          },
          "aria-label": sz("skyblockGame:glowtideChipLabel"),
          children: [(0, jW.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Wz.inRange ? (0, jW.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: sz("skyblockGame:glowtideChipInRange")
          }, `call:${Wz.inRangeToken}`) : (0, jW.jsxs)(jW.Fragment, {
            children: [(0, jW.jsx)("div", {
              ref: tz.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, jW.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: sz("skyblockGame:waypointDistance", {
                distance: xz(Wz.distance, Fz.code)
              })
            })]
          })]
        })
      })
    }

    function Io(zz) {
      let {
        controller: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)(), Fz = (0, cW.h)(nF, tz.getSnapshot());
      return null === Fz ? null : (0, jW.jsx)(IW.e, {
        placement: "statBars",
        children: (0, jW.jsxs)("div", {
          className: mW()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: Fz.full
          }),
          "aria-label": sz("skyblockGame:glowMeterLabel", {
            fill: String(Fz.fill),
            au: String(Fz.au)
          }),
          children: [Fz.burst && (0, jW.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${Fz.burstToken}`), (0, jW.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, jW.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${Fz.ratio})`
              }
            }), Fz.gained && (0, jW.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${Fz.gainToken}`), Fz.full && Array.from({
              length: 5
            }, ((zz, tz) => (0, jW.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, tz)))]
          }), Fz.full && Fz.rares.map((zz => (0, jW.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, jW.jsx)(eW.c, {
              itemName: zz,
              amount: 0
            })
          }, zz))), Fz.ready && (0, jW.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, jW.jsx)("span", {
              children: sz("skyblockGame:glowMeterReady")
            })
          }, `ready:${Fz.fullToken}`)]
        })
      })
    }

    function Co(zz) {
      let {
        controller: tz
      } = zz;
      const {
        t: sz
      } = (0, TW.B)(), Fz = (0, cW.h)(qF, tz.getSnapshot());
      if (null === Fz) return null;
      const Wz = "waiting" === Fz.phase,
        Xz = {
          animationDuration: `${Fz.waitMs}ms`,
          animationDelay: -Fz.elapsedMs + "ms"
        },
        Oz = Wz ? void 0 : {
          animationDuration: `${Fz.waitMs}ms`
        };
      return (0, jW.jsxs)("div", {
        className: Wz ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Wz && (0, jW.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((zz, tz) => (0, jW.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, tz))), (0, jW.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: Xz
          }), (0, jW.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, jW.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, jW.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: Xz
            })]
          }), (0, jW.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, jW.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: Oz,
          children: sz(Fz.line)
        }, Fz.lineIndex)]
      }, Fz.token)
    }

    function eo(zz) {
      let {
        chart: tz,
        showHere: sz,
        className: Fz
      } = zz;
      return (0, jW.jsx)("div", {
        className: mW()("SkyblockTideChartGrid", Fz, null !== tz.pictureName && "Complete"),
        "aria-hidden": "true",
        children: tz.cells.map(((zz, Fz) => {
          const Wz = 0 !== (tz.pulseCells & 1 << Fz),
            Xz = tz.castCell === Fz;
          return (0, jW.jsx)("span", {
            className: mW()("SkyblockTideChartCell", `Cell-${zz}`, Wz && "Pulse", Xz && "Cast", sz && tz.hereCell === Fz && "Here")
          }, `${Fz}:${Wz?`p${tz.pulseToken}`:""}:${Xz?`c${tz.castToken}`:""}`)
        }))
      })
    }

    function Zo(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(VF, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = sz.chip;
      if (!sz.enabled || null === Wz) return null;
      const Xz = Fz("skyblockGame:tideChartsChipLabel", {
        island: Wz.islandName,
        lit: String(Wz.lit),
        ink: String(Wz.ink)
      });
      return (0, jW.jsx)(IW.e, {
        placement: "statBars",
        children: (0, jW.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: mW()("SkyblockTideChartsChip", sz.open && "Open", null !== Wz.pictureName && "Complete"),
          "aria-label": Xz,
          title: Xz,
          onMouseDown: zz => {
            zz.preventDefault()
          },
          onClick: tz.toggle,
          children: [(0, jW.jsx)(eo, {
            chart: Wz,
            showHere: !1,
            className: "Mini"
          }), (0, jW.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Wz.lit, "/", Wz.ink]
          })]
        })
      })
    }

    function Go(zz) {
      let {
        controller: tz
      } = zz;
      const sz = (0, cW.h)(VF, tz.getSnapshot()),
        {
          t: Fz
        } = (0, TW.B)(),
        Wz = nW(),
        Xz = sz.card;
      return sz.enabled && null !== Xz ? (0, jW.jsx)(iW.b, {
        show: sz.open,
        close: tz.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, jW.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Wz,
          onKeyDown: lW,
          children: [(0, jW.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, jW.jsxs)("div", {
              children: [(0, jW.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: Fz("skyblockGame:tideChartsTitle")
              }), (0, jW.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: Fz("skyblockGame:tideChartsIntro")
              })]
            }), (0, jW.jsx)(LW.n, {
              padIgnore: !0,
              ariaLabel: Fz("skyblockGame:tideChartsClose"),
              onClick: tz.dismiss
            })]
          }), sz.tabs.length > 1 && (0, jW.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": Fz("skyblockGame:tideChartsIslands"),
            children: sz.tabs.map((zz => (0, jW.jsx)("button", {
              type: "button",
              className: mW()("SkyblockTideChartsTab", zz.selected && "Selected"),
              "aria-pressed": zz.selected,
              onClick: () => {
                tz.gb(zz.island)
              },
              children: zz.name
            }, zz.island)))
          }), (0, jW.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, jW.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": Xz.gridLabel,
              children: (0, jW.jsx)(eo, {
                chart: Xz,
                showHere: !0,
                className: "Large"
              })
            }), (0, jW.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, jW.jsx)("h3", {
                children: Xz.islandName
              }), (0, jW.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: Xz.litText
              }), null === Xz.pictureName ? (0, jW.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: Fz("skyblockGame:tideChartsPictureHidden")
              }) : (0, jW.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: Fz("skyblockGame:tideChartsPictureRevealed", {
                  picture: Xz.pictureName
                })
              }, Xz.pictureName), (0, jW.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, jW.jsxs)("li", {
                  children: [(0, jW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), Fz("skyblockGame:tideChartsLegendLit")]
                }), (0, jW.jsxs)("li", {
                  children: [(0, jW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), Fz("skyblockGame:tideChartsLegendClear")]
                }), null !== Xz.hereCell && (0, jW.jsxs)("li", {
                  children: [(0, jW.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), Fz("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, jW.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, jW.jsx)("span", {
                  children: sz.turnsText
                }), (0, jW.jsx)("span", {
                  children: sz.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function To(zz) {
      var tz;
      let {
        controller: sz
      } = zz;
      const {
        selectedLanguage: Fz
      } = (0, TW.B)(), Wz = Fz.code;
      (0, Iz.useEffect)((() => {
        sz.setTranslator(((zz, tz) => (0, TW.v)(Wz, zz, tz)), Wz, ((zz, tz) => (0, TW.s)(Wz, zz, tz)))
      }), [sz, Wz]);
      const Xz = (0, cW.h)(Nz, sz.map.getSnapshot()),
        {
          openInGameMenuName: Oz
        } = (0, JW.h)(["openInGameMenuName"]);
      return (0, jW.jsxs)(jW.Fragment, {
        children: [(0, jW.jsx)(so, {
          controller: sz.quests,
          display: sz.navigation.display
        }), Xz.enabled && !Oz && (0, jW.jsx)(XX, {
          controller: sz.navigation
        }), (0, jW.jsx)(AW, {
          controller: sz,
          minimap: Xz.enabled && (null === (tz = Xz.presentation) || void 0 === tz ? void 0 : tz.minimap) && (0, jW.jsx)(WX, {
            view: Xz.presentation.minimap,
            navigation: sz.navigation,
            controller: sz.map
          }),
          children: (0, jW.jsx)(wX, {
            controller: sz.quests,
            surface: "hud"
          })
        }), (0, jW.jsx)(EO, {
          controller: sz.navigation
        }), (0, jW.jsx)(Wo, {
          controller: sz.portalTransit
        }), (0, jW.jsx)(Do, {
          controller: sz.dailyReward
        }), (0, jW.jsx)(xo, {
          controller: sz.mailbox
        }), (0, jW.jsx)(mo, {
          controller: sz.magmaward
        }), (0, jW.jsx)(Jo, {
          controller: sz.glowtide
        }), (0, jW.jsx)(wO, {
          controller: sz.passage
        }), (0, jW.jsx)(Zo, {
          controller: sz.tideCharts
        }), (0, jW.jsx)(Io, {
          controller: sz.glowMeter
        }), (0, jW.jsx)(IO, {
          controller: sz.reachLog
        }), (0, jW.jsx)(Co, {
          controller: sz.hushWait
        }), (0, jW.jsx)(YO, {
          controller: sz.lampLight
        }), (0, jW.jsx)(OX, {
          controller: sz.skills,
          surface: "hud"
        })]
      })
    }

    function co(zz) {
      let {
        controller: tz
      } = zz;
      return (0, jW.jsxs)(jW.Fragment, {
        children: [(0, jW.jsx)(FX, {
          controller: tz.map,
          navigation: tz.navigation
        }), (0, jW.jsx)(OX, {
          controller: tz.skills,
          surface: "menu"
        }), (0, jW.jsx)(wX, {
          controller: tz.quests,
          surface: "menu"
        }), (0, jW.jsx)(VX, {
          controller: tz.dungeons
        }), (0, jW.jsx)(fX, {
          controller: tz.collections
        }), (0, jW.jsx)(tO, {
          controller: tz.questGraph
        }), (0, jW.jsx)(OO, {
          controller: tz.forge
        }), (0, jW.jsx)(NO, {
          controller: tz.smuggler
        }), (0, jW.jsx)(mO, {
          controller: tz.keepersChair,
          lampLight: tz.lampLight
        }), (0, jW.jsx)(SO, {
          controller: tz.reachLog,
          regulars: tz.regulars,
          hiddenWaters: tz.hiddenWaters
        }), (0, jW.jsx)(GO, {
          controller: tz.regulars
        }), (0, jW.jsx)(gO, {
          controller: tz.passage
        }), (0, jW.jsx)(Go, {
          controller: tz.tideCharts
        }), (0, jW.jsx)(pO, {
          controller: tz.dialogue
        }), (0, jW.jsx)(fO, {
          controller: tz.autographs
        })]
      })
    }
    var jo = sz(36199);
    const Ao = FF + KF;

    function yo(zz, tz, sz, Fz, Wz) {
      const Xz = [],
        Oz = [],
        oz = sz => {
          const Fz = zz.playSound(tz, sz.sound, sz.volume, sz.rate);
          Fz && (Oz.push(Fz), void 0 !== sz.cutAfter && Xz.push(setTimeout((() => {
            Fz.fade(Fz.getVolume(), 0, 300)
          }), sz.cutAfter)))
        };
      for (const vz of function(zz, tz) {
          const sz = [{
            sound: "rpgKnifeSlice1",
            beat: FF,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: FF,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: FF,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: FF,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: FF,
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
            sound: (0, jo.b)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Ao + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, jo.b)("bigDrumSwish"),
            beat: Ao + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Ao + 60,
            lead: 180,
            volume: .5 + .06 * zz,
            rate: .82 + .07 * zz
          }];
          return zz >= 4 && sz.push({
            sound: "exp_levelup",
            beat: Ao + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), tz && sz.push({
            sound: "trumpetFlare",
            beat: Ao + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), sz.push({
            sound: "harp_pling",
            beat: WF,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), sz
        }(sz, Fz)) Wz ? Xz.push(setTimeout((() => {
        oz(vz)
      }), Math.max(0, vz.beat - vz.lead / vz.rate))) : vz.beat !== FF && "magicAccent2" !== vz.sound && "trumpetFlare" !== vz.sound || oz(vz);
      return () => {
        for (const zz of Xz) clearTimeout(zz);
        for (const zz of Oz) zz.fade(zz.getVolume(), 0, 120)
      }
    }
    class Mo {
      constructor(zz) {
        this.deps = zz, this.pending = new Map, this.localHook = null
      }
      hookWaiting(zz, tz) {
        this.pending.delete(zz);
        const sz = this.deps.now();
        if (null === tz) {
          var Fz;
          if ((null === (Fz = this.localHook) || void 0 === Fz ? void 0 : Fz.hookId) === zz) {
            const zz = sz >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(zz)
          }
          return
        }
        const Wz = sz + tz;
        this.settle(zz, Wz) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(zz, {
          untilMs: sz + 1e3,
          biteAtMs: Wz
        }))
      }
      getLocalHook() {
        var zz, tz;
        return null !== (zz = null === (tz = this.localHook) || void 0 === tz ? void 0 : tz.hookId) && void 0 !== zz ? zz : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const zz = this.deps.now();
        for (const [tz, {
            untilMs: sz,
            biteAtMs: Fz
          }] of this.pending)(this.settle(tz, Fz) || zz > sz) && this.pending.delete(tz)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(zz, tz) {
        const sz = this.deps.getLineOwner(zz);
        if (null === sz) return !1;
        if (!this.deps.isLocalPlayer(sz)) return !0;
        if (this.localHook = {
            hookId: zz,
            biteAtMs: tz
          }, !this.deps.isHushWaiting()) {
          const [tz, sz] = this.deps.getHookPosition(zz);
          this.deps.onCastLanded(tz, sz)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var ho = sz(3926);
    const Qo = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      ko = {
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
    class io {
      constructor(zz) {
        this.deps = zz, this.tell = null
      }
      receiveTell(zz) {
        let {
          biteTellTier: tz
        } = zz;
        this.tell = {
          tier: tz,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(zz) {
        const tz = this.tell;
        if (this.tell = null, !zz) return;
        const sz = null !== tz && this.deps.now() - tz.atMs <= 3e3 ? tz.tier : 0;
        this.deps.vibrate(Qo[sz])
      }
      burstAtHook() {
        const zz = this.tell,
          tz = this.deps.getLocalHookPosition();
        null === zz || zz.burst || null === tz || (zz.burst = !0, this.deps.playParticles(function(zz, tz) {
          let [sz, Fz, Wz] = tz;
          const {
            count: Xz,
            rise: Oz,
            colour: oz
          } = ko[zz], [vz, Uz, Kz] = oz;
          return {
            texture: "glint",
            pos1: [sz - .3, Fz, Wz - .3],
            pos2: [sz + .3, Fz + .2, Wz + .3],
            dir1: [-.6, Oz, -.6],
            dir2: [.6, 1.4 * Oz, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: Xz,
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
              minColor: [vz, Uz, Kz, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [vz, Uz, Kz, 0],
              maxColor: [vz, Uz, Kz, 0]
            }],
            blendMode: ho.f.Add,
            hideDist: 48
          }
        }(zz.tier, tz)))
      }
    }
    var Lo = sz(1237),
      no = sz(1862),
      ao = sz(44);

    function qo(zz, tz) {
      return [{
        timeFraction: 0,
        minColor: [255 * zz[0], 255 * zz[1], 255 * zz[2], 1],
        maxColor: [255 * tz[0], 255 * tz[1], 255 * tz[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const So = [0, 0, 0],
      Vo = {
        texture: "glint",
        mipmaps: !1,
        au: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: So,
        dir2: So,
        blendMode: ho.f.OneOne
      },
      Ro = {
        ...Vo,
        colorGradients: qo([1, .88, .38], [1, .65, .15])
      },
      po = {
        ...Vo,
        colorGradients: qo([.55, .95, 1], [.9, 1, 1])
      },
      fo = [.5, .5, .5],
      Eo = {
        texture: "glint",
        mipmaps: !1,
        au: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: qo([1, .12, .12], [1, .35, .2]),
        blendMode: ho.f.OneOne
      };
    class zv {
      constructor() {
        this.drops = new Map
      }
      Sw(zz, tz) {
        if ("overflowFlash" === tz.kind) {
          const [sz, Fz, Wz] = tz.position, Xz = zz.createParticles(Eo, {
            pos: [sz, Fz, Wz],
            half: fo
          });
          return Xz.emit(18), void Xz.stop()
        }
        this.drops.has(tz.itemId) || this.drops.set(tz.itemId, {
          owner: tz.owner,
          cosmetic: tz.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      wN(zz) {
        if (0 === this.drops.size) return;
        const tz = performance.now(),
          sz = zz.getCameraPosition();
        let Fz = 0;
        for (const Xz of this.drops.values()) null !== Xz.particles && Fz++;
        for (const [Xz, Oz] of this.drops) {
          const oz = zz.getPositionView(Xz);
          if (null === oz) {
            var Wz;
            if (Oz.seen || tz - Oz.markedAt > 5e3) null !== Oz.particles && Fz--, null === (Wz = Oz.particles) || void 0 === Wz || Wz.stop(), this.drops.delete(Xz);
            continue
          }
          Oz.cosmetic || !zz.isLocalPlayer(Oz.owner) || Oz.pickupDelayCleared || (zz.clearPickupDelay(Xz), Oz.pickupDelayCleared = !0);
          const vz = Oz.lastPosition,
            Uz = Oz.seen && (oz[0] - vz[0]) ** 2 + (oz[1] - vz[1]) ** 2 + (oz[2] - vz[2]) ** 2 > 4e-4,
            Kz = (oz[0] - sz[0]) ** 2 + (oz[1] - sz[1]) ** 2 + (oz[2] - sz[2]) ** 2 < 2025;
          Oz.seen = !0, vz[0] = oz[0], vz[1] = oz[1], vz[2] = oz[2], Uz && (Oz.lastMovingAt = tz), null !== Oz.particles && (!Kz || tz - Oz.lastMovingAt > 500) && (Oz.particles.stop(), Oz.particles = null, Fz--), Uz && Kz && null === Oz.particles && Fz < 32 && (Oz.particles = zz.createParticles(Oz.cosmetic ? po : Ro, {
            pos: oz
          }), Fz++), null !== Oz.particles && (Oz.particles.moveTo(oz), Oz.particles.setEmitRate(Uz ? 12 : 0)), !Uz && null === Oz.particles && tz - Math.max(Oz.lastMovingAt, Oz.markedAt) > 2e3 && this.drops.delete(Xz)
        }
      }
      dispose() {
        for (const tz of this.drops.values()) {
          var zz;
          null === (zz = tz.particles) || void 0 === zz || zz.stop()
        }
        this.drops.clear()
      }
    }
    var tv = sz(201);
    const sv = tv.d.jH * tv.d.playerEyeToHeightRatio;
    class Fv {
      constructor(zz) {
        this.host = zz, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Sw(zz) {
        this.lava = zz, this.nextUpdateAt = 0
      }
      wN() {
        var zz;
        const tz = this.host.now();
        if (tz < this.nextUpdateAt) return;
        this.nextUpdateAt = tz + 250;
        const sz = this.host.playerPosition(),
          Fz = sz && this.findNearest([sz[0], sz[1] + sv, sz[2]]);
        if (!Fz || Fz.distance >= 40) return void this.stop();
        const Wz = .5 * Math.min(1, (40 - Fz.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Wz) : this.loop = this.host.play("lavaFlow", Wz, Fz.position, 40 + sv, 9, !0), null === (zz = this.loop) || void 0 === zz || zz.setPosition(Fz.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var zz;
        null === (zz = this.loop) || void 0 === zz || zz.stop(), this.loop = null
      }
      findNearest(zz) {
        let tz = -1,
          sz = 1 / 0;
        for (let Fz = 0; Fz < this.lava.length; Fz += 3) {
          const Wz = this.lava[Fz] - zz[0],
            Xz = this.lava[Fz + 1] - zz[1],
            Oz = this.lava[Fz + 2] - zz[2],
            oz = Wz * Wz + Xz * Xz + Oz * Oz;
          oz < sz && (sz = oz, tz = Fz)
        }
        return tz < 0 ? null : {
          position: [this.lava[tz], this.lava[tz + 1], this.lava[tz + 2]],
          distance: Math.sqrt(sz)
        }
      }
    }
    var Wv = sz(1842),
      Xv = sz(38053);
    const Ov = {
      "Grey Portal": "Gray"
    };
    for (const Nv of Wz.Cc) Ov[`${Nv} Portal`] = Nv;
    const ov = Object.keys(Ov),
      vv = Object.fromEntries(ov.map((zz => [zz, (0, Wz.W)(Wz.N[`${(0,Wz.ue)(Ov[zz])}Team`])])));
    Object.fromEntries(ov.map((zz => [zz, Wz.N[`${(0,Wz.ue)(Ov[zz])}UiText`]])));
    class Uv {
      constructor(zz, tz) {
        this.presentation = zz, this.portal = tz, this.unlocked = void 0
      }
      Sw(zz) {
        const tz = !1 === this.unlocked && zz;
        this.unlocked = zz, this.wN();
        const {
          min: sz,
          max: Fz,
          unlockedBlock: Wz
        } = this.portal;
        if (tz && this.presentation.hasChunk(...sz)) {
          const [zz, tz, Xz] = vv[Wz];
          this.presentation.playParticles({
            pos1: [...sz],
            pos2: Fz.map((zz => zz + 1)),
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
              minColor: [zz, tz, Xz, 1],
              maxColor: [Math.min(255, zz + 55), Math.min(255, tz + 55), Math.min(255, Xz + 90), 1]
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
      wN() {
        var zz;
        const tz = this.unlocked ? this.portal.unlockedBlock : null !== (zz = this.portal.lockedBlock) && void 0 !== zz ? zz : "Light Gray Portal",
          {
            min: sz,
            max: Fz
          } = this.portal;
        for (let Wz = sz[0]; Wz <= Fz[0]; Wz++)
          for (let zz = sz[1]; zz <= Fz[1]; zz++)
            for (let Xz = sz[2]; Xz <= Fz[2]; Xz++) this.presentation.hasChunk(Wz, zz, Xz) && this.presentation.oB(Wz, zz, Xz) !== tz && this.presentation.HJ(Wz, zz, Xz, tz)
      }
    }
    const Kv = {
        farming_1: {
          raises: zz => "NPC" === zz.type && "chef" === zz.variation,
          rise: .4
        },
        fishing_1: {
          raises: zz => "Draugr Warper" === zz.type,
          rise: .4
        }
      },
      uv = (zz, tz, sz, Xz) => {
        let {
          localPlayerId: Oz
        } = Xz;
        const oz = new YW({
          translate: (zz, tz) => (0, TW.v)(Lo.g.get().getCurrentLanguageCode(), zz, tz),
          translateWithIcons: (zz, tz) => (0, TW.s)(Lo.g.get().getCurrentLanguageCode(), zz, tz),
          setMenuOpen: zz => {
            zz ? (0, qz.s)() : (0, qz.h)()
          },
          dismissMenu: qz.j,
          publishSkills: zz => {
            Sz.o.Yg(Os, zz, !0)
          },
          publishQuests: zz => {
            Sz.o.Yg(Ks, zz, !0)
          },
          publishQuestNotification: zz => {
            Sz.o.Yg(us, zz, !0)
          },
          publishDungeons: zz => {
            Sz.o.Yg(ws, zz, !0)
          },
          publishCollections: zz => {
            Sz.o.Yg(hs, zz, !0)
          },
          publishMap: zz => {
            Sz.o.Yg(Nz, zz, !0)
          },
          publishHud: zz => {
            Sz.o.Yg(BW, zz, !0)
          },
          publishPortalTransit: zz => {
            Sz.o.Yg(ks, zz, !0)
          },
          isLoadingScreenUp: () => JW.b.get("loadingOverlayVisible"),
          publishDailyReward: zz => {
            Sz.o.Yg(ls, zz, !0)
          },
          publishMailbox: zz => {
            Sz.o.Yg(Vs, zz, !0)
          },
          publishQuestGraph: zz => {
            Sz.o.Yg(ps, zz, !0)
          },
          publishForge: zz => {
            Sz.o.Yg(HF, zz, !0)
          },
          publishSmuggler: zz => {
            Sz.o.Yg(rF, zz, !0)
          },
          publishKeepersChair: zz => {
            Sz.o.Yg(GF, zz, !0)
          },
          publishReachLog: zz => {
            Sz.o.Yg(cF, zz, !0)
          },
          publishLampLight: zz => {
            Sz.o.Yg(hF, zz, !0)
          },
          publishMagmaward: zz => {
            Sz.o.Yg(kF, zz, !0)
          },
          publishGlowtide: zz => {
            Sz.o.Yg(LF, zz, !0)
          },
          publishGlowMeter: zz => {
            Sz.o.Yg(nF, zz, !0)
          },
          publishHushWait: zz => {
            Sz.o.Yg(qF, zz, !0)
          },
          publishPassage: zz => {
            Sz.o.Yg(mF, zz, !0)
          },
          publishTideCharts: zz => {
            Sz.o.Yg(VF, zz, !0)
          },
          publishRegulars: zz => {
            Sz.o.Yg(FW, zz, !0)
          },
          publishHiddenWaters: zz => {
            Sz.o.Yg(vW, zz, !0)
          },
          publishDialogue: zz => {
            Sz.o.Yg(KW, zz, !0)
          },
          publishAutographs: zz => {
            Sz.o.Yg(DW, zz, !0)
          },
          onDailyRewardStarted: zz => {
            cz.playSound(Oz, zz.day === ez ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (zz, tz) => {
            cz.playSound(Oz, "exp_collect", .35, 1 + .6 * zz / (tz - 1)), Sz.o.Yg(ns, zz === tz - 1)
          },
          onDailyRewardItemLanded: zz => {
            cz.playSound(Oz, "pickUp", .6, 1 + .15 * zz)
          },
          onMailboxStarted: () => {
            cz.playSound(Oz, "rpgMetalClick", .6, 1), cz.playSound(Oz, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            cz.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: ao.j,
          requestTracking: zz => {
            cz.sendCommand(`quests track ${zz}`)
          },
          requestDungeonEnter: (zz, tz) => {
            cz.sendCommand(`dungeonEnter ${zz} ${tz}`)
          },
          requestQuestJump: zz => {
            cz.sendCommand(`${Az} jump ${zz}`)
          },
          requestQuestArrive: (zz, tz) => {
            const sz = `${Az} arrive ${zz}`;
            cz.sendCommand(tz ? `${sz} complete` : sz)
          },
          requestForge: zz => {
            let {
              blade: tz,
              guard: sz,
              handle: Fz
            } = zz;
            cz.sendCommand(`forge ${tz} ${sz} ${Fz}`)
          },
          requestDialogue: () => {
            cz.sendCommand("quests dialogue")
          },
          requestSmuggle: (zz, tz) => {
            cz.sendCommand(`smuggle ${zz} ${tz}`)
          },
          requestKeepersChairAim: zz => {
            cz.sendCommand(`keeperschair-aim ${zz}`)
          },
          requestReachLogOpen: () => {
            cz.sendCommand("reachlog-open")
          },
          requestLampLight: zz => {
            cz.sendCommand(`${zz}`)
          },
          requestTravel: zz => {
            cz.sendCommand(`map travel ${zz.kind} ${zz.id} ${zz.requestId}`)
          }
        });
        let vz, Uz, Kz, uz, bz, wz, Dz, rz, Yz, xz, mz, Cz, Zz;
        const Tz = new zv;
        let cz, jz = null;
        const yz = Kv[null !== sz && void 0 !== sz ? sz : ""],
          Qz = (zz, tz) => {
            null !== yz && void 0 !== yz && yz.raises(tz) && cz.setNametagOffset(zz, yz.rise)
          },
          Lz = new io({
            getLocalHookPosition: () => {
              const zz = lz.getLocalHook();
              return null !== zz && cz.checkValid(zz) ? cz.yB(zz) : null
            },
            playParticles: zz => {
              cz.playParticleEffect(zz)
            },
            vibrate: zz => {
              Vz.e.play("fishBite", zz)
            },
            now: () => performance.now()
          }),
          lz = new Mo({
            getLineOwner: zz => cz.checkValid(zz) ? cz.getLineOwner(zz) : null,
            isLocalPlayer: zz => cz.isLocalPlayer(zz),
            getHookPosition: zz => {
              const [tz, , sz] = cz.yB(zz);
              return [tz, sz]
            },
            isHushWaiting: () => {
              var zz;
              return "waiting" === (null === (zz = oz.hushWait.getSnapshot()) || void 0 === zz ? void 0 : zz.phase)
            },
            onCastLanded: (zz, tz) => {
              oz.tideCharts.castLanded(zz, tz)
            },
            onLocalHookSettled: () => {
              Lz.onLocalHookSettled()
            },
            onLocalWaitEnded: zz => {
              Lz.onLocalWaitEnded(zz)
            },
            now: () => performance.now()
          }),
          Rz = new Fv({
            now: () => performance.now(),
            playerPosition: () => cz.checkValid(Oz) ? cz.yB(Oz) : null,
            play: (zz, tz, sz, Fz, Wz, Xz) => cz.playSound(Oz, zz, tz, 1, {
              fW: sz,
              maxHearDist: Fz,
              refDistance: Wz
            }, Xz)
          }),
          pz = new Map;
        let fz;
        return {
          onCreate: zz => {
            if (cz = zz, jz = new Xv.SkyblockEntityFacing(zz, yz ? Qz : null), oz.portalTransit.resumeArrival(null !== sz && void 0 !== sz ? sz : null), (null !== sz && void 0 !== sz ? sz : Fz) === Fz) {
              let zz = -1 / 0;
              fz = Sz.o.subscribe("toggleMenu", (tz => {
                const sz = performance.now();
                "inventory|Workbench" !== tz || "cross_to_hub" !== oz.quests.getTrackedQuestId() || sz - zz < 1e4 || (zz = sz, cz.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [Fz, Wz] of Object.entries(null !== (tz = Mz[null !== sz && void 0 !== sz ? sz : ""]) && void 0 !== tz ? tz : {})) {
              var tz;
              pz.set(Fz, new Uv({
                hasChunk: (tz, sz, Fz) => zz.isBlockInLoadedChunk(tz, sz, Fz),
                oB: (tz, sz, Fz) => zz.blockIdToBlockName(zz.getBlockId(tz, sz, Fz)),
                HJ: (tz, sz, Fz, Wz) => {
                  zz.HJ(tz, sz, Fz, Wz)
                },
                playParticles: tz => {
                  zz.playParticleEffect(tz)
                }
              }, Wz))
            }
            Zz = (0, Wv.f)((zz => function(zz) {
              return Object.hasOwn(lt, zz) || zz.startsWith("npc_")
            }(zz) ? qt(zz) : null)), oz.resolveItemName = (tz, sz) => {
              const Fz = zz.getItemStat(Oz, tz, "displayName");
              return Fz && "object" === typeof Fz && "translationKey" in Fz ? sz(Fz.translationKey, (0, TW.r)(Fz.params, no.d.shown)) : "string" === typeof Fz ? sz(Fz) : tz
            }, oz.quests.notifications.onShown = zz => {
              "quest" === zz ? cz.playSound(Oz, "magicAccent1", 1, 1) : "skillLevel" === zz ? cz.playSound(Oz, "magicAccent1", 1, .6) : "landmark" === zz ? cz.playSound(Oz, "trumpetFlare", 1, .6) : "npcNote" === zz ? cz.playSound(Oz, "magicAccent2", .8, 1.1) : "started" === zz ? cz.playSound(Oz, (0, jo.b)("bigDrumSwish"), 1, 1) : cz.playSound(Oz, (0, jo.b)("rpgHandleSmallLeather"), 1, 1)
            }, oz.forge.onPartSelected = () => {
              cz.playSound(Oz, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, oz.forge.onForgeStarted = (tz, sz, Fz) => yo(zz, Oz, tz, sz, Fz), oz.smuggler.onBought = () => {
              cz.playSound(Oz, (0, jo.b)("rpgHandleSmallLeather"), 1, 1), cz.playSound(Oz, "chestOpen", .6, 1)
            }, oz.compass.register(new gz(oz.map, !0)), oz.compass.register(new gz(oz.map, !1)), oz.compass.register(new Bz(oz.map)), oz.compass.register(new Pz((() => oz.quests.getSnapshot().compassTarget)));
            for (const sz of ["enemy", "npc"]) oz.compass.register(new Hz(oz.map, sz, (tz => zz.checkValid(tz) ? zz.yB(tz) : void 0), (tz => zz.isAlive(tz))))
          },
          onAfterRender: (zz, tz) => {
            const sz = cz.checkValid(Oz) ? cz.yB(Oz) : null;
            oz.navigation.afterRender(sz, performance.now(), tz), oz.glowtide.afterRender(sz, tz.cameraHeading), oz.tideCharts.afterRender(sz), lz.afterRender()
          },
          onClose: () => {
            var zz, tz, sz, Fz, Wz, Xz, Oz, Nz, wz, gz, Hz, Bz, Pz, Jz, Iz;
            fz && Sz.o.unsubscribe(fz), null === (zz = Zz) || void 0 === zz || zz(), Tz.dispose(), Rz.dispose(), null === (tz = jz) || void 0 === tz || tz.dispose(), lz.dispose(), oz.dispose(), null === (sz = vz) || void 0 === sz || sz(), null === (Fz = Uz) || void 0 === Fz || Fz(), null === (Wz = Kz) || void 0 === Wz || Wz(), null === (Xz = uz) || void 0 === Xz || Xz(), null === (Oz = bz) || void 0 === Oz || Oz(), null === (Nz = Dz) || void 0 === Nz || Nz(), null === (wz = undefined) || void 0 === wz || wz(), null === (gz = rz) || void 0 === gz || gz(), null === (Hz = Yz) || void 0 === Hz || Hz(), null === (Bz = xz) || void 0 === Bz || Bz(), null === (Pz = mz) || void 0 === Pz || Pz(), null === (Jz = undefined) || void 0 === Jz || Jz(), null === (Iz = Cz) || void 0 === Iz || Iz()
          },
          onPlayerChangeBlock: (zz, tz, Fz, Xz, vz, Uz) => {
            if (zz === Oz && "Air" === Uz) {
              const zz = cz.getClientOption(Oz, "creative");
              oz.skills.predictBlock([tz, Fz, Xz], vz, zz);
              const Uz = function(zz, tz) {
                  if ("hub" === tz || "farming_1" === tz || "mining_1" === tz) return !kz.has(zz) || "hub" !== tz && "mining_1" !== tz ? Object.hasOwn(hz, zz) ? hz[zz] : void 0 : dz
                }(vz, sz),
                Kz = ("hub" === sz || "mining_1" === sz) && (Wz.hd.some((zz => zz === vz)) || Object.hasOwn(iz, vz) || "mining_1" === sz && "Block of Coal" === vz);
              zz || void 0 === Uz && !Kz || cz.HJ(tz, Fz, Xz, null !== Uz && void 0 !== Uz ? Uz : dz)
            }
          },
          onPlayerAttackEntity: (zz, tz) => {
            if (zz !== Oz || "Player" !== cz.getEntityType(tz)) return;
            const [sz, Fz, Wz] = cz.yB(tz);
            cz.burstParticlePreset("critical", [sz, Fz + 1, Wz], 10)
          },
          onChangeBlockFail: zz => {
            for (const {
                tO: tz
              }
              of zz) oz.skills.rejectBlock(tz)
          },
          onReceivedMessageFromServer: (zz, tz) => {
            if ("skyblockGatedPortal" === zz) {
              var sz;
              const [zz, Fz] = tz;
              return void(null === (sz = pz.get(zz)) || void 0 === sz || sz.Sw(Fz))
            }
            if ("skyblockDailyReward" === zz) return void oz.dailyReward.Sw(tz);
            if ("skyblockMailbox" === zz) return void oz.mailbox.Sw(tz);
            if ("skyblockPortalTransit" === zz) return void oz.portalTransit.Sw(tz);
            if ("skyblockLoot" === zz) return void Tz.Sw(cz, tz);
            if ("skyblockLava" === zz) return void Rz.Sw(tz);
            if ("skyblockForge" === zz) return void oz.forge.Sw(tz);
            if ("skyblockMagmaward" === zz) return void oz.magmaward.Sw(tz);
            if ("skyblockGlowtide" === zz) return void oz.glowtide.Sw(tz);
            if ("skyblockGlowMeter" === zz) return void oz.glowMeter.Sw(tz);
            if ("skyblockHushWait" === zz) return void oz.hushWait.Sw(tz);
            if ("skyblockPassage" === zz) {
              const zz = tz;
              return oz.passage.Sw(zz), oz.reachLog.receivePassagePhase(zz.passagePhase), xz ??= (0, Jz.t)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: oz.passage.show
              }), void oz.keepersChair.receivePassage({
                keepersChairPassagePhase: zz.passagePhase,
                keepersChairPassageNextPhase: zz.passageNextPhase,
                keepersChairPassageTurnsInMs: zz.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === zz) {
              const zz = tz;
              return oz.tideCharts.Sw(zz), void(zz.tideCharts.length > 0 && (mz ??= (0, Jz.t)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: oz.tideCharts.show
              })))
            }
            if (zz === nz.z) {
              var Fz;
              const {
                hookId: zz,
                waiting: sz
              } = tz;
              return void lz.hookWaiting(zz, null !== (Fz = null === sz || void 0 === sz ? void 0 : sz.remainingMs) && void 0 !== Fz ? Fz : null)
            }
            if ("skyblockBiteTell" === zz) return void Lz.receiveTell(tz);
            if ("skyblockSmuggler" === zz) return void oz.smuggler.Sw(tz);
            if ("skyblockKeepersChair" === zz) return oz.keepersChair.Sw(tz), void oz.lampLight.setAtChair(oz.keepersChair.isAtChair());
            if ("skyblockLampLight" === zz) {
              const zz = tz;
              var Wz;
              if (oz.lampLight.Sw(zz), zz.lampLightReleasing) Yz ??= (0, Jz.t)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  oz.lampLight.setRelease(!1)
                }
              });
              else null === (Wz = Yz) || void 0 === Wz || Wz(), Yz = void 0;
              return
            }
            if ("skyblockRegulars" === zz) return void oz.regulars.Sw(tz);
            if ("skyblockHiddenWaters" === zz) return void oz.hiddenWaters.Sw(tz);
            if ("skyblockReachLog" === zz) return oz.reachLog.Sw(tz), void(rz ??= (0, Jz.t)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: AF
              },
              onClick: oz.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === zz) {
              for (const [zz, sz, Fz, Wz] of tz) cz.HJ(zz, sz, Fz, Wz);
              return
            }
            if ("skyblockHud" === zz) oz.receiveHud(tz);
            else if ("skyblockMap" === zz) oz.map.Sw(tz);
            else if (zz === az.h) oz.skills.Sw(tz);
            else if (zz === Gz && "dialogue" === tz.kind) oz.dialogue.Sw(tz);
            else if (zz === Gz) oz.quests.Sw(tz);
            else if ("skyblockDungeons" === zz) oz.dungeons.Sw(tz);
            else if ("sbCollections" === zz) oz.collections.Sw(tz);
            else if ("skyblockQuestGraph" === zz) oz.questGraph.Sw(tz);
            else {
              if ("skyblockAutographs" !== zz) return;
              oz.autographs.Sw(tz)
            }
            if (!Uz && oz.map.getSnapshot().enabled) {
              const zz = (0, Jz.t)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: oz.map.show
                }),
                tz = (0, qz.w)(oz.map.show);
              Uz = () => {
                zz(), tz()
              }
            }!Kz && oz.skills.getSnapshot().enabled && (Kz = (0, Jz.t)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: oz.skills.show
            })), !Dz && oz.collections.getSnapshot().enabled && (Dz = (0, Jz.t)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: oz.collections.show
            })), !uz && oz.quests.getSnapshot().enabled && (uz = (0, Jz.t)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: oz.quests.show
            })), !Cz && oz.autographs.getSnapshot().enabled && (Cz = (0, Jz.t)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: oz.autographs.show
            }));
            const Xz = oz.dungeons.getSnapshot().enabled;
            var Oz;
            (Kz || uz || Xz) && wz !== Xz && (wz = Xz, null === (Oz = bz) || void 0 === Oz || Oz(), bz = (0, Jz.t)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: jt
              },
              disabled: !Xz,
              panel: !0,
              onClick: oz.dungeons.show
            }));
            vz || (vz = (0, qz.x)((0, Iz.createElement)(To, {
              controller: oz
            }), {
              content: (0, Iz.createElement)(co, {
                controller: oz
              }),
              onClose: oz.close
            }))
          },
          wN: () => {
            var zz;
            for (const tz of pz.values()) tz.wN();
            Tz.wN(cz), Rz.wN(), null === (zz = jz) || void 0 === zz || zz.wN(), oz.skills.wN(), oz.quests.wN(), oz.dailyReward.wN(), oz.mailbox.wN(), oz.map.wN()
          }
        }
      }
  },
  35887: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Wz,
      h: () => Fz
    });
    const Fz = "skyblockSkills",
      Wz = "skills_test_gym"
  },
  8874: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz,
      f: () => Oz
    });
    const Fz = [{
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

    function Wz(zz) {
      let tz, sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof zz) {
        if (!Number.isFinite(zz)) return "0";
        if (Math.abs(zz) < 100) {
          const tz = zz < 0 ? "-" : "",
            sz = Math.abs(zz);
          return sz >= 10 ? `${tz}${sz.toFixed(1).replace(/\.0$/,"")}` : `${tz}${sz.toFixed(2).replace(/\.?0+$/,"")}`
        }
        tz = BigInt(Math.floor(zz))
      } else tz = zz;
      const Wz = tz < 0n ? -tz : tz,
        Xz = tz < 0n ? "-" : "",
        Oz = Wz.toString();
      if (Oz.length <= sz) return `${Xz}${Oz}`;
      const oz = 3 * Math.floor((Oz.length - 1) / 3);
      if (oz < 3) return `${Xz}${Oz}`;
      if (oz > 3 * Fz.length) {
        const zz = Oz[0],
          tz = Oz.slice(1, 3).replace(/0+$/, "");
        return `${Xz}${tz?`${zz}.${tz}`:zz}e${Oz.length-1}`
      }
      const {
        threshold: vz,
        suffix: Uz
      } = Fz[Fz.length - oz / 3], Kz = Wz / vz, uz = Number(1000n * (Wz % vz) / vz), Nz = Number(Kz) + uz / 1e3;
      let bz;
      return bz = Nz >= 100 ? Math.floor(Nz).toString() : Nz >= 10 ? Nz.toFixed(1).replace(/\.0$/, "") : Nz.toFixed(2).replace(/\.?0+$/, ""), `${Xz}${bz}${Uz}`
    }
    const Xz = Fz.map((zz => {
      let {
        threshold: tz,
        suffix: sz
      } = zz;
      return {
        threshold: Number(tz),
        suffix: sz
      }
    })).filter((zz => {
      let {
        threshold: tz
      } = zz;
      return Number.isFinite(tz)
    }));

    function Oz(zz) {
      const tz = Math.abs(zz),
        sz = zz < 0 ? "-" : "";
      for (const {
          threshold: Fz,
          suffix: Wz
        }
        of Xz)
        if (tz >= Fz) {
          const zz = tz / Fz;
          if (zz >= 1e3) return `${sz}${tz.toExponential(2).replace("e+","e")}`;
          let Xz;
          return Xz = zz >= 100 ? Math.floor(zz).toString() : zz >= 10 ? zz.toFixed(1).replace(/\.0$/, "") : zz.toFixed(2).replace(/\.?0+$/, ""), `${sz}${Xz}${Wz}`
        } return `${sz}${tz}`
    }
  },
  37976: (zz, tz, sz) => {
    var Fz = {
      "./combat_1.png": 37978,
      "./dungeon_crumbling_crypt.png": 37982,
      "./dungeon_frozen_hollow.png": 37986,
      "./dungeon_wildwood_grove.png": 37993,
      "./dungeons.png": 37997,
      "./farming_1.png": 38e3,
      "./fishing_1.png": 38007,
      "./hub.png": 38012,
      "./island.png": 38016,
      "./mining_1.png": 38018,
      "./mining_1_bridge.png": 38023,
      "./mining_1_gallery.png": 38031,
      "./mining_1_hollow.png": 38039,
      "./mining_1_village.png": 38041
    };

    function Wz(zz) {
      var tz = Xz(zz);
      return sz(tz)
    }

    function Xz(zz) {
      if (!sz.o(Fz, zz)) {
        var tz = new Error("Cannot find module '" + zz + "'");
        throw tz.code = "MODULE_NOT_FOUND", tz
      }
      return Fz[zz]
    }
    Wz.keys = function() {
      return Object.keys(Fz)
    }, Wz.resolve = Xz, zz.exports = Wz, Wz.id = 37976
  },
  37978: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37982: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37986: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37993: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37997: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38e3: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38007: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38012: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38016: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38018: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38023: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38031: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38039: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38041: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18216: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20227: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22615: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24200: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25919: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25937: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37964: zz => {
    zz.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);