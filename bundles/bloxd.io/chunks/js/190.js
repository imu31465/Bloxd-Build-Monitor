export const id = 190;
export const ids = [50, 190];
export const modules = {
  38090: (vv, zv, Pv) => {
    var hv = {
      "./combat_1.png": 38095,
      "./dungeon_crumbling_crypt.png": 38098,
      "./dungeon_frozen_hollow.png": 38102,
      "./dungeon_wildwood_grove.png": 38111,
      "./dungeons.png": 38114,
      "./farming_1.png": 38119,
      "./fishing_1.png": 38121,
      "./hub.png": 38129,
      "./island.png": 38137,
      "./mining_1.png": 38146,
      "./mining_1_bridge.png": 38148,
      "./mining_1_gallery.png": 38151,
      "./mining_1_hollow.png": 38158,
      "./mining_1_village.png": 38161
    };

    function Sv(vv) {
      var zv = ev(vv);
      return Pv(zv)
    }

    function ev(vv) {
      if (!Pv.o(hv, vv)) {
        var zv = new Error("Cannot find module '" + vv + "'");
        throw zv.code = "MODULE_NOT_FOUND", zv
      }
      return hv[vv]
    }
    Sv.keys = function() {
      return Object.keys(hv)
    }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 38090
  },
  38164: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      d: () => ev
    });
    const hv = new WeakMap;

    function Sv(vv, zv) {
      return hv.set(vv, zv), vv
    }

    function ev(vv) {
      var zv;
      return null !== (zv = hv.get(vv)) && void 0 !== zv ? zv : null
    }
  },
  38072: (vv, zv, Pv) => {
    function hv(vv, zv, Pv) {
      var hv;
      const {
        width: Sv,
        height: ev
      } = Pv, gv = null !== (hv = vv.text) && void 0 !== hv ? hv : vv, pv = (gv.x / 100 - .5) * Sv, dv = (gv.y / 100 - .5) * ev, Nv = Sv / 2 - zv.x;
      if (null !== vv.text && Math.abs(pv) <= Nv && dv >= zv.top - ev / 2 && dv <= ev / 2 - zv.bottom) return {
        x: gv.x,
        y: gv.y
      };
      const lv = Math.min(0 === pv ? 1 / 0 : Nv / Math.abs(pv), dv > 0 ? (ev / 2 - zv.bottom) / dv : dv < 0 ? (zv.top - ev / 2) / dv : 1 / 0);
      return !Number.isFinite(lv) || lv < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + pv * lv / Sv * 100,
        y: 50 + dv * lv / ev * 100
      }
    }
    Pv.d(zv, {
      e: () => hv
    })
  },
  38083: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv
    });
    const hv = 4,
      Sv = 12e3,
      ev = 1e3;
    class gv {
      constructor() {
        let {
          limit: vv = hv,
          windowMs: zv = Sv,
          spacingMs: Pv = ev,
          now: gv = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = vv, this.windowMs = zv, this.spacingMs = Pv, this.now = gv
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const vv of this.priority) vv.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const vv = this.now();
        this.sent.push(vv), this.lastSentAt = vv, this.schedule(), this.notify()
      }
      addPriority(vv) {
        return this.priority.add(vv), () => {
          this.priority.delete(vv)
        }
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const vv of this.priority)
          if (vv.waiting()) return !0;
        return !1
      }
      prune() {
        const vv = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= vv;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const vv = this.now(),
          zv = this.lastSentAt + this.spacingMs,
          Pv = Math.min(zv > vv ? zv : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        Pv !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, Pv - vv)))
      }
      notify() {
        for (const vv of this.listeners) vv()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38064: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv
    });
    class hv {
      constructor(vv, zv, Pv) {
        this.zC = vv, this.beforeOpen = zv, this.afterClose = Pv, this.open = !1, this.ea = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.ea && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(vv) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(vv)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.ea = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.ea || (this.snapshot = this.buildSnapshot(), this.zC(this.snapshot))
      }
    }
  },
  38169: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      SkyblockEntityFacing: () => pv,
      needsSkyblockEntityFacing: () => gv
    });
    var hv = Pv(618),
      Sv = Pv(4019),
      ev = Pv(38178);

    function gv(vv, zv) {
      if (vv.metaInfo === hv.d || "Iron Guardian" === vv.type || "Gold Guardian" === vv.type) return !0;
      if ("Pig" === vv.type) return "sitting" === vv.pose;
      if ("Person" !== vv.meshKind || void 0 === vv.meshOpts) return !1;
      let Pv = null === zv || void 0 === zv ? void 0 : zv.get(vv.meshOpts);
      if (void 0 === Pv) {
        var ev, gv;
        const hv = (0, Sv.g)(vv);
        Pv = !1, "pig_napoleon" === (null === hv || void 0 === hv || null === (ev = hv.opts.textures) || void 0 === ev ? void 0 : ev.head) ? Pv = !0 : "npc_pig_head" === (null === hv || void 0 === hv || null === (gv = hv.opts.textures) || void 0 === gv ? void 0 : gv.head) && (Pv = "sitting" === hv.opts.pose || "sitting"), zv && (zv.size >= 256 && zv.clear(), zv.set(vv.meshOpts, Pv))
      }
      return "sitting" === Pv ? "sitting" === vv.pose : Pv
    }(0, ev.h)("skyblock", ((vv, zv) => {
      zv.setFacingTolerance(gv(vv) ? 0 : null)
    }));
    class pv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = vv, this.alsoVisit = zv, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = vv => {
          var zv;
          const Pv = this.api.getEntityInfo(vv);
          Pv && (gv(Pv, this.meshFacingCache) && (this.api.setFacingTolerance(vv, 0), this.nextFacing.add(vv)), null === (zv = this.alsoVisit) || void 0 === zv || zv.call(this, vv, Pv))
        }
      }
      MT() {
        const {
          api: vv
        } = this, zv = this.nextFacing;
        vv.forEachEntity(this.visit);
        for (const Pv of this.facing) zv.has(Pv) || vv.setFacingTolerance(Pv, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = zv
      }
      dispose() {
        for (const vv of this.facing) this.api.setFacingTolerance(vv, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38060: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => pd
    });
    const hv = "island";
    var Sv = Pv(312);
    const ev = (0, Sv.Cb)([0, 0, -1]),
      gv = [{
        name: "S",
        bearing: (0, Sv.Cb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, Sv.Cb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: ev
      }, {
        name: "W",
        bearing: (0, Sv.Cb)([1, 0, 0])
      }];

    function pv(vv, zv, Pv) {
      return [100 * (Pv.mapMaxX - vv) / (Pv.mapMaxX - Pv.mapMinX), 100 * (zv - Pv.mapMinZ) / (Pv.mapMaxZ - Pv.mapMinZ)]
    }

    function dv(vv, zv, Pv) {
      const Sv = "local" === zv,
        ev = vv.background,
        gv = zv => ev ? pv(zv[0] - vv.mapOrigin[0], zv[2] - vv.mapOrigin[2], ev.bounds) : [50, 50],
        dv = (vv.insideDungeon ? [] : vv.landmarks).map((vv => {
          var zv, hv;
          return {
            id: vv.id,
            name: Pv(vv.visited && vv.nameKey ? null !== (zv = vv.mapLabelKey) && void 0 !== zv ? zv : vv.nameKey : "skyblockGame:mapUnknown"),
            icon: vv.visited && null !== (hv = vv.icon) && void 0 !== hv ? hv : "unknown",
            visited: vv.visited,
            current: !1,
            position: gv(vv.position),
            travelKind: "landmark",
            travelId: vv.id
          }
        })),
        lv = vv.zones.map((zv => {
          var hv;
          return {
            id: zv.id,
            name: Pv(zv.visited && zv.nameKey ? zv.nameKey : "skyblockGame:mapUnknown"),
            icon: zv.visited && null !== (hv = zv.icon) && void 0 !== hv ? hv : "unknown",
            visited: zv.visited,
            current: zv.id === vv.zoneId,
            position: zv.position,
            thumbnail: zv.visited ? zv.id : void 0,
            travelKind: "zone",
            travelId: zv.id
          }
        })),
        Tv = vv.insideDungeon || !ev ? [] : vv.portals.map((vv => {
          var zv;
          return {
            id: vv.id,
            name: Pv(null !== (zv = vv.nameKey) && void 0 !== zv ? zv : "skyblockGame:mapUnknown"),
            icon: vv.visited ? "dungeons" === vv.destination ? "portal_orange" : "portal" : "unknown",
            visited: vv.visited,
            current: !1,
            position: gv(vv.position),
            colour: vv.colour,
            travelKind: "zone",
            travelId: vv.destination
          }
        })),
        Wv = Sv ? dv : lv,
        wv = Wv.filter((vv => vv.visited)).length,
        av = ev ? (ev.bounds.mapMaxX - ev.bounds.mapMinX) / (ev.bounds.mapMaxZ - ev.bounds.mapMinZ) : 2,
        sv = ev ? JSON.stringify([ev.bounds, vv.mapOrigin]) : "";
      return {
        local: Sv,
        points: Wv,
        portals: Sv ? Tv : [],
        progress: Wv.length ? Pv("skyblockGame:mapDiscovered", {
          current: String(wv),
          total: String(Wv.length)
        }) : null,
        percent: Wv.length ? 100 * wv / Wv.length : 0,
        canTravel: [...Wv, ...Sv ? Tv : []].some((vv => vv.visited && !vv.current)),
        noLandmarks: Sv && !vv.insideDungeon && 0 === dv.length,
        background: ev ? {
          imageKey: ev.imageKey,
          fallbackImageKey: vv.zoneId,
          geometryKey: sv,
          label: Pv(ev.labelKey),
          colour: ev.backgroundColour,
          ratio: av
        } : null,
        connections: Nv(vv.zones),
        minimap: ev ? {
          imageKey: ev.imageKey,
          fallbackImageKey: vv.zoneId,
          geometryKey: sv,
          label: Pv(ev.labelKey),
          colour: ev.backgroundColour,
          caption: Pv(vv.zoneId === hv ? "skyblockGame:zoneIsland" : ev.labelKey),
          width: (ev.bounds.mapMaxX - ev.bounds.mapMinX) / ev.minimapSpan * 100 + "%",
          height: (ev.bounds.mapMaxZ - ev.bounds.mapMinZ) / ev.minimapSpan * 100 + "%",
          markers: [...dv, ...Tv]
        } : null
      }
    }

    function Nv(vv) {
      const zv = new Set;
      return vv.flatMap((Pv => Pv.connections.flatMap((hv => {
        const Sv = vv.find((vv => vv.id === hv)),
          ev = [Pv.id, hv].sort().join("|");
        return !Sv || zv.has(ev) ? [] : (zv.add(ev), [{
          id: `${Pv.id}-${hv}`,
          start: Pv.position,
          end: Sv.position,
          explored: Pv.visited && Sv.visited
        }])
      }))))
    }
    var lv = Pv(38064);
    class Tv extends lv.b {}
    const Wv = "skyblockMapView";
    class wv extends Tv {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(vv, hv, Sv), this.requestTravel = zv, this.translate = Pv, this.now = ev, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = vv => {
          this.tab = vv, this.feedbackKey = "", this.emit()
        }, this.travel = (vv, zv) => {
          if (!this.map || this.pending || this.ea) return;
          const Pv = ("zone" === vv ? this.map.zones : this.map.landmarks).find((vv => vv.id === zv));
          if (Pv) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in Pv && !Pv.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (Pv.visited)
              if ("zone" === vv && zv === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const Pv = ++this.nextRequestId;
                this.pending = {
                  requestId: Pv,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: vv,
                  id: zv,
                  requestId: Pv
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
      setTranslator(vv) {
        this.translate = vv, this.emit()
      }
      la(vv) {
        var zv;
        if (!this.ea)
          if ("entities" !== vv.kind)
            if ("open" !== vv.kind) {
              var Pv, hv;
              if ("snapshot" === vv.kind)(null === (Pv = vv.snapshot) || void 0 === Pv ? void 0 : Pv.zoneId) !== (null === (hv = this.map) || void 0 === hv ? void 0 : hv.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = vv.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === vv.kind) {
                var Sv;
                vv.requestId === (null === (Sv = this.pending) || void 0 === Sv ? void 0 : Sv.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (vv.requestId === (null === (zv = this.pending) || void 0 === zv ? void 0 : zv.requestId)) {
                var ev;
                this.pending = null, this.feedbackKey = null !== (ev = vv.errorKey) && void 0 !== ev ? ev : "", null === vv.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = vv.entities
      }
      MT() {
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
          presentation: this.map ? dv(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const av = 67.5 * Math.PI / 180;

    function sv(vv, zv) {
      const Pv = Math.abs(vv);
      if (Pv > av || zv.trackHalfWidth <= 0) return null;
      const hv = zv.trackHalfWidth,
        Sv = zv.screenHalfWidth / (zv.tanHalfFovX * Math.max(.5, Math.cos(zv.pitch))),
        ev = Math.min(Math.atan(.6 * hv / Sv), .75 * av),
        gv = Sv * Math.tan(ev);
      let pv;
      if (Pv <= ev) pv = Sv * Math.tan(Pv);
      else {
        const vv = av - ev,
          zv = Math.max(0, Sv * vv / (Math.cos(ev) ** 2 * (hv - gv)) - 1),
          dv = (Pv - ev) / vv;
        pv = gv + (hv - gv) * (1 + zv) * dv / (1 + zv * dv)
      }
      return 50 + Math.sign(vv) * pv * 50 / hv
    }
    class Cv {
      constructor(vv, zv) {
        this.map = vv, this.visited = zv, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = zv ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const vv = this.map.getSnapshot().map;
        return !vv || vv.insideDungeon ? [] : vv.landmarks.filter((vv => vv.visited === this.visited)).map((vv => {
          var zv, Pv;
          return {
            id: `landmark:${vv.id}`,
            position: vv.position,
            icon: null !== (zv = vv.icon) && void 0 !== zv ? zv : "unknown",
            nameKey: null !== (Pv = vv.nameKey) && void 0 !== Pv ? Pv : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class iv {
      constructor(vv, zv, Pv, hv) {
        this.map = vv, this.kind = zv, this.position = Pv, this.alive = hv, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = zv, this.range = "enemy" === zv ? 48 : 64, this.limit = 12
      }
      yG(vv) {
        if ("enemy" !== this.kind || this.alive(vv.lS)) return this.position(vv.lS)
      }
      getPoints() {
        const vv = [];
        for (const hv of this.map.getEntities()) {
          if (hv.kind !== this.kind || "enemy" === this.kind && !this.alive(hv.compassEntityId)) continue;
          const Sv = this.position(hv.compassEntityId);
          var zv, Pv;
          if (Sv) vv.push({
            id: `${this.kind}:${hv.compassEntityId}`,
            lS: hv.compassEntityId,
            kind: this.kind,
            icon: null !== (zv = hv.icon) && void 0 !== zv ? zv : hv.npcSkin ? `npc_${hv.npcSkin}` : this.kind,
            displayName: hv.displayName,
            position: Sv,
            nameKey: null !== (Pv = hv.nameKey) && void 0 !== Pv ? Pv : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return vv
      }
    }
    class cv {
      constructor(vv) {
        this.map = vv, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const vv = this.map.getSnapshot().map;
        return !vv || vv.insideDungeon ? [] : vv.portals.map((vv => {
          var zv;
          return {
            id: "portal:" + vv.id,
            kind: "portal",
            position: vv.position,
            nameKey: null !== (zv = vv.nameKey) && void 0 !== zv ? zv : "skyblockGame:compassUnvisitedZone",
            icon: vv.visited ? "dungeons" === vv.destination ? "portal_orange" : "portal" : "unknown",
            colour: vv.colour
          }
        }))
      }
    }
    class Gv {
      constructor(vv) {
        this.target = vv, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const vv = this.target();
        return vv ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: vv.position,
          nameKey: vv.nameKey
        }] : []
      }
    }

    function mv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv.position;
      const ev = hv[0] - zv[0],
        gv = hv[2] - zv[2];
      return {
        ...vv,
        position: hv,
        offset: Sv.d.computeShortestRotation(Pv, (0, Sv.Cb)([ev, 0, gv])),
        distance: Math.hypot(ev, hv[1] - zv[1], gv)
      }
    }
    let jv;

    function fv(vv, zv) {
      var Pv;
      return (null === (Pv = jv) || void 0 === Pv ? void 0 : Pv.locale) !== zv && (jv = {
        locale: zv,
        near: new Intl.NumberFormat(zv, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(zv, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (vv < 10 ? jv.near : jv.far).format(vv)
    }
    class Fv {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(vv) {
        return this.providers.set(vv.id, vv), this.refreshAt = 0, () => {
          this.providers.get(vv.id) === vv && (this.providers.delete(vv.id), this.refreshAt = 0)
        }
      }
      frame(vv, zv, Pv) {
        if (Pv >= this.refreshAt) {
          this.refreshAt = Pv + 200, this.candidates = [];
          for (const zv of this.providers.values()) {
            if (!zv.enabled) continue;
            const Pv = zv.getPoints().map((zv => {
              const Pv = zv.position;
              return {
                point: zv,
                distance: Math.hypot(Pv[0] - vv[0], Pv[1] - vv[1], Pv[2] - vv[2])
              }
            })).filter((vv => vv.distance <= zv.range)).sort(((vv, zv) => vv.distance - zv.distance)).slice(0, zv.limit);
            for (const {
                point: vv
              }
              of Pv) this.candidates.push({
              provider: zv,
              point: vv
            })
          }
        }
        const hv = [];
        for (const {
            point: Sv,
            provider: ev
          }
          of this.candidates) {
          if (!ev.enabled) continue;
          const Pv = ev.yG ? ev.yG(Sv) : Sv.position;
          if (Pv) {
            const ev = mv(Sv, vv, zv, Pv);
            Math.abs(ev.offset) <= av && hv.push(ev)
          }
        }
        return hv
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var Yv = Pv(36139),
      nv = Pv(52);
    const Ov = [{
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
      Dv = Ov.length;

    function Kv(vv) {
      return vv >= Dv ? 1 : vv + 1
    }
    const Vv = "skyblockQuests",
      Uv = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      Rv = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function xv(vv) {
      let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const Pv = Math.max(0, Math.floor(vv)),
        hv = Math.floor(Pv % 1e3 / 100),
        Sv = Math.floor(Pv / 1e3),
        ev = Sv % 60,
        gv = Math.floor(Sv / 60),
        pv = gv % 60,
        dv = Math.floor(gv / 60),
        Nv = vv => vv < 10 ? `0${vv}` : String(vv),
        lv = zv ? `.${hv}` : "";
      return dv > 0 ? `${dv}:${Nv(pv)}:${Nv(ev)}${lv}` : `${pv}:${Nv(ev)}${lv}`
    }
    const tv = "devquests",
      qv = "none",
      Iv = {
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
      Qv = "Compressed Messy Stone",
      Zv = {
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
      Av = ["Stone", "Diorite", "Andesite", "Granite"],
      Lv = new Set(Av),
      Hv = (Object.keys(Zv), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const Mv = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function yv(vv, zv) {
      const Pv = Math.floor(5 * vv / (2 * zv + 1));
      return Math.min(4, Math.max(0, Pv))
    }
    var Bv = Pv(1226);
    var Jv = Pv(35922);
    var Ev = Pv(36137),
      ov = Pv(26),
      bv = Pv(8561);
    const rv = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      kv = 1e3;

    function Xv(vv) {
      return Math.max(0, vv)
    }

    function uv(vv) {
      return 1 + .01 * Xv(vv)
    }

    function vz(vv) {
      return 1 + .005 * Xv(vv)
    }

    function zz(vv) {
      return 1 + .005 * Xv(vv)
    }

    function Pz(vv) {
      return .01 * Xv(vv)
    }

    function hz(vv) {
      return 150 / (150 + Xv(vv))
    }

    function Sz(vv) {
      return 1 + .002 * Xv(vv)
    }

    function ez(vv) {
      return Math.round(10 * vv) / 10
    }

    function gz(vv, zv) {
      switch (vv) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: ez(100 * (vz(zv) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: ez(100 * (uv(zv) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: ez(100 * (zz(zv) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: ez(100 * Pz(zv))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: ez(100 * (1 - hz(zv)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: ez(100 * (Sz(zv) - 1))
          }
      }
    }

    function pz(vv) {
      return "farming" === vv ? 200 : 100
    }

    function dz(vv, zv) {
      if (!Number.isSafeInteger(vv) || vv < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const Pv = pz(zv),
        hv = vv => function(vv, zv) {
          return pz(vv) * zv * (zv + 1) / 2
        }(zv, vv);
      let Sv = Math.min(kv, Math.floor((Math.sqrt(8 * vv / Pv + 1) - 1) / 2));
      return Sv < kv && hv(Sv + 1) <= vv ? Sv++ : hv(Sv) > vv && Sv--, {
        totalXp: vv,
        level: Sv,
        xpIntoLevel: vv - hv(Sv),
        xpForNextLevel: Sv === kv ? null : Pv * (Sv + 1)
      }
    }
    const Nz = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function lz(vv) {
      return Nz.has(vv)
    }
    const Tz = new Set(Sv.rb);

    function Wz(vv) {
      return Tz.has(vv)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const wz = {
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
      az = {
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
      sz = {
        ...az,
        ...Object.fromEntries(Object.entries(Hv).map((vv => {
          let [zv, Pv] = vv;
          return [zv, 9 * az[Pv]]
        })))
      },
      Cz = {
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
      iz = {
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
    const cz = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Gz = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function mz(vv) {
      return `rgb(${Gz[vv].join(", ")})`
    }

    function jz(vv, zv, Pv) {
      if (!Pv) return vv(zv);
      const hv = {};
      for (const [Sv, ev] of Object.entries(Pv)) hv[Sv] = "string" === typeof ev ? ev : vv(ev.translationKey);
      return vv(zv, hv)
    }
    class fz {
      constructor(vv, zv) {
        this.now = vv, this.getJournal = zv, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Vp = !1, this.onShown = () => {}
      }
      enqueue(vv) {
        const zv = Fz(vv);
        if (zv) this.pending.push(vv);
        else {
          const zv = this.pending.findIndex(Fz);
          this.pending.splice(-1 === zv ? this.pending.length : zv, 0, vv)
        }
        return (null === this.current || null !== this.followUp && !zv) && (this.advance(), !0)
      }
      setHeld(vv) {
        return this.Vp = vv, !vv && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      MT() {
        const vv = this.getJournal(),
          zv = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === zv ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === zv || void 0 === zv ? void 0 : zv.kind) && vv && vv.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === zv || void 0 === zv ? void 0 : zv.kind)) {
          const vv = this.findFollowUp(this.current);
          if ("step" !== (null === vv || void 0 === vv ? void 0 : vv.kind) || vv.questId !== zv.questId || vv.step.id !== zv.step.id) return this.showFollowUp(vv, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(vv, zv, Pv) {
        var hv, Sv, ev, gv;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, vv, Pv);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, vv);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, vv, zv);
        const {
          questCompletionKind: pv,
          questCompletionNameKey: dv
        } = this.current, Nv = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, lv = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, Tv = "step" === (null === (hv = this.followUp) || void 0 === hv ? void 0 : hv.kind) ? this.followUp : null, Wv = "explore" === (null === (Sv = this.followUp) || void 0 === Sv ? void 0 : Sv.kind);
        let wv;
        return wv = Wv ? vv("skyblockGame:questExploreTitle") : null !== Tv ? "quest" === pv ? vv("skyblockGame:questNextQuestTitle", {
          quest: vv(Tv.questNameKey)
        }) : vv("skyblockGame:questNextStepTitle") : vv("started" === pv ? "skyblockGame:questStartedTitle" : "quest" === pv ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? pv : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: wv,
          name: Wv ? zv("skyblockGame:questExploreName") : null !== Tv ? jz(zv, Tv.step.nameKey, Tv.step.nameParams) : jz(zv, dv, Nv),
          description: Wv ? zv("skyblockGame:questExploreDescription") : null === Tv ? null : jz(zv, Tv.step.descriptionKey, Tv.step.descriptionParams),
          reward: null === this.followUp && lv > 0 ? zv("skyblockGame:questCoinRewardSuffix", {
            amount: lv.toLocaleString(Pv)
          }) : null,
          iconItem: null !== (ev = null === Tv || void 0 === Tv ? void 0 : Tv.step.questIconItem) && void 0 !== ev ? ev : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== Tv && (null === (gv = this.getJournal()) || void 0 === gv ? void 0 : gv.trackedQuestId) === Tv.questId ? Tv.step.nameKey : null
        }
      }
      getSkillLevelView(vv, zv, Pv) {
        let {
          skill: hv,
          beforeLevel: Sv,
          level: ev
        } = vv;
        const gv = gz(hv, Sv),
          pv = gz(hv, ev);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: zv(`skyblockGame:${hv}`),
          name: zv("skyblockGame:skillLevelUp", {
            to: ev.toLocaleString(Pv)
          }),
          description: gv.percent === pv.percent ? null : zv(`${pv.translationKey}Change`, {
            before: gv.percent.toLocaleString(Pv),
            after: pv.percent.toLocaleString(Pv)
          }),
          reward: null,
          iconItem: cz[hv],
          accent: mz(hv),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(vv, zv) {
        let {
          landmarkNameKey: Pv
        } = vv;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: zv("skyblockGame:landmarkDiscovered"),
          name: zv(Pv),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(vv, zv, Pv) {
        let {
          titleKey: hv,
          textKey: Sv,
          params: ev = {},
          nameKeys: gv = {},
          iconItem: pv = null
        } = vv;
        const dv = {
          ...ev
        };
        for (const [Nv, lv] of Object.entries(gv)) dv[Nv] = zv(lv);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: zv(hv),
          name: Pv(Sv, dv),
          description: null,
          reward: null,
          iconItem: pv,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var vv;
        if (null !== this.followUp) return 5600;
        switch (null === (vv = this.current) || void 0 === vv ? void 0 : vv.questCompletionKind) {
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
      showFollowUp(vv, zv) {
        null === vv || this.Vp ? this.advance() : (this.followUp = vv, this.token++, this.shownAt = this.now(), this.expiresAt = null !== zv && void 0 !== zv ? zv : this.shownAt + this.durationMs())
      }
      findFollowUp(vv) {
        var zv;
        const Pv = this.getJournal();
        if (!Pv || this.hasPendingQuestPopup() || Fz(vv)) return null;
        const hv = "started" === vv.questCompletionKind ? Pv.active.some((zv => zv.id === vv.questCompletionQuestId)) : "quest" === vv.questCompletionKind ? Pv.completed.some((zv => zv.id === vv.questCompletionQuestId)) : [...Pv.active, ...Pv.completed].some((zv => zv.id === vv.questCompletionQuestId && zv.subquests.some((zv => zv.id === vv.questCompletionStepId && "completed" === zv.status))));
        if (!hv) return null;
        if ("quest" === vv.questCompletionKind && 0 === Pv.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const Sv = Pv.active.find((vv => vv.id === Pv.trackedQuestId)),
          ev = null !== (zv = null === Sv || void 0 === Sv ? void 0 : Sv.subquests.find((vv => "ready" === vv.status))) && void 0 !== zv ? zv : null === Sv || void 0 === Sv ? void 0 : Sv.subquests.find((vv => "active" === vv.status));
        return ev ? {
          kind: "step",
          questId: Sv.id,
          questNameKey: Sv.nameKey,
          step: ev
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((vv => !Fz(vv)))
      }
      advance() {
        var vv;
        this.current = this.Vp ? null : null !== (vv = this.pending.shift()) && void 0 !== vv ? vv : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Fz(vv) {
      return Yz(vv.questCompletionKind)
    }

    function Yz(vv) {
      return "skillLevel" === vv || "landmark" === vv || "npcNote" === vv
    }
    var nz = Pv(38072);
    const Oz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Dz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Kz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Vz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Uz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Rz = Pv(38076);
    const xz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      tz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const qz = Pv.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Iz = Pv.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      Qz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Zz = Pv(18282),
      Az = Pv(20402),
      Lz = Pv(22813),
      Hz = Pv(24408),
      Mz = Pv(26119);
    const yz = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Zz,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: Az,
      cow: Uz,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: Pv(26133),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Oz,
      fishing_1: Oz,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Dz,
      guardian_iron: Kz,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Lz,
      mines: Hz,
      mining_1: Hz,
      npc: Vz,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Uz,
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
      npc_gold_guardian: Dz,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Kz,
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
      npc_tentacle_guy: Rz,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: xz,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: qz,
      quest_talk: Iz,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: Qz,
      watermelon: Mz
    };

    function Bz(vv, zv) {
      const Pv = document.createElement("img");
      return Pv.className = zv, Pv.src = vv, Pv.alt = "", Pv.draggable = !1, Pv
    }

    function Jz(vv) {
      var zv;
      const Pv = null !== (zv = yz[vv]) && void 0 !== zv ? zv : vv.startsWith("npc_") ? Vz : Qz;
      if ("portal" !== vv) return Bz(Pv, "SkyblockMapIcon");
      const hv = document.createElement("span");
      hv.className = "SkyblockMapIcon Portal";
      const Sv = document.createElement("span");
      return Sv.className = "SkyblockMapIconTint", Sv.style.maskImage = Sv.style.webkitMaskImage = `url("${tz}")`, hv.append(Bz(Pv, "SkyblockMapIconLayer"), Sv, Bz(tz, "SkyblockMapIconLayer SkyblockMapIconShade")), hv
    }
    var Ez = Pv(38042),
      oz = Pv(4028);
    const bz = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function rz(vv) {
      const zv = new oz.l(vv);
      return {
        radius: 45,
        squareness: 3,
        wobbles: bz.map((vv => {
          let {
            lobes: Pv,
            amount: hv
          } = vv;
          return {
            lobes: Pv[Math.floor(zv.next() * Pv.length)],
            amount: hv[0] + zv.next() * (hv[1] - hv[0]),
            phase: 2 * zv.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function kz(vv) {
      let {
        radius: zv,
        squareness: Pv,
        wobbles: hv,
        samples: Sv
      } = vv;
      const ev = [];
      for (let gv = 0; gv < Sv; gv++) {
        const vv = 2 * Math.PI * gv / Sv,
          pv = Math.cos(vv),
          dv = Math.sin(vv),
          Nv = zv * (Math.abs(pv) ** Pv + Math.abs(dv) ** Pv) ** (-1 / Pv) * hv.reduce(((zv, Pv) => {
            let {
              lobes: hv,
              amount: Sv,
              phase: ev
            } = Pv;
            return zv + Sv * Math.sin(hv * vv + ev)
          }), 1);
        ev.push(`${(50+Nv*pv).toFixed(2)} ${(50+Nv*dv).toFixed(2)}`)
      }
      return `M${ev.join("L")}Z`
    }
    const Xz = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class uz {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.ea = !1, this.mountCompass = vv => {
          var zv;
          if (null === (zv = this.stopLayout) || void 0 === zv || zv.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !vv || this.ea) return;
          const Pv = vv.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: vv,
            track: Pv,
            label: vv.querySelector(".SkyblockCompassLabel")
          }, Pv.replaceChildren();
          for (let Sv = 0; Sv < 4; Sv++) {
            const vv = document.createElement("span");
            vv.className = "SkyblockCompassCardinal", Pv.appendChild(vv), this.cardinals.push(vv)
          }
          const hv = (0, Ez.e)(Xz, [vv], this.layout);
          this.stopLayout = () => {
            hv(), Pv.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = vv => {
          this.terrain = this.ea ? null : vv, this.render(this.frame)
        }, this.mountMinimapSearchArea = vv => {
          this.mountSearchArea("minimap", vv)
        }, this.mountMapSearchArea = vv => {
          this.mountSearchArea("map", vv)
        }, this.mountPlayer = vv => {
          this.player = this.ea ? null : vv, this.render(this.frame)
        }, this.mountWaypoint = vv => {
          var zv, Pv;
          if (null === (zv = this.stopWaypoint) || void 0 === zv || zv.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !vv || this.ea) return;
          const hv = vv.querySelector(".SkyblockQuestWaypointMarker");
          hv.replaceChildren(Jz("quest")), this.markerIcon = "quest", this.waypoint = {
            root: vv,
            marker: hv,
            clip: vv.querySelector(".SkyblockQuestWaypointTextClip"),
            text: vv.querySelector(".SkyblockQuestWaypointText"),
            label: vv.querySelector(".SkyblockQuestWaypointLabel"),
            distance: vv.querySelector(".SkyblockQuestWaypointDistance"),
            hint: vv.querySelector(".SkyblockQuestWaypointHint")
          };
          const Sv = () => {
              this.waypointMarkerSize = {
                width: hv.offsetWidth,
                height: hv.offsetHeight
              }, this.waypointInset = {
                x: hv.offsetWidth / 2 + 8,
                top: hv.offsetHeight + 8,
                bottom: 8
              }
            },
            ev = new ResizeObserver((() => {
              Sv(), this.render(this.frame)
            }));
          ev.observe(hv, {
            box: "border-box"
          });
          const gv = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", gv), null === (Pv = window.visualViewport) || void 0 === Pv || Pv.addEventListener("resize", gv), this.stopWaypoint = () => {
            var vv;
            ev.disconnect(), window.removeEventListener("resize", gv), null === (vv = window.visualViewport) || void 0 === vv || vv.removeEventListener("resize", gv)
          }, gv(), Sv(), this.render(this.frame)
        }, this.mountWaypointOrigin = vv => {
          var zv;
          if (null === (zv = this.stopWaypointOrigin) || void 0 === zv || zv.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = vv && !this.ea ? Number(vv.dataset.notificationToken) : null, vv && !this.ea && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const zv = {
              nameKey: vv.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = zv;
            const Pv = () => {
                const Pv = vv.getBoundingClientRect();
                zv.x = (Pv.left + Pv.width / 2) / window.innerWidth * 100, zv.y = (Pv.top + Pv.height / 2) / window.innerHeight * 100
              },
              hv = new ResizeObserver(Pv);
            hv.observe(vv.parentElement), hv.observe(vv), window.addEventListener("resize", Pv), this.stopWaypointOrigin = () => {
              hv.disconnect(), window.removeEventListener("resize", Pv)
            }, Pv()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const vv = this.compass.root,
            zv = getComputedStyle(vv),
            Pv = getComputedStyle(document.documentElement),
            hv = parseFloat(Pv.fontSize),
            Sv = parseFloat(zv.getPropertyValue("--compass-icon-size")) * hv,
            ev = "1" === zv.getPropertyValue("--compass-fit-top").trim(),
            gv = ev ? 1 : 8,
            pv = Array.from(document.querySelectorAll(Xz), (vv => {
              var zv;
              return (null !== (zv = vv.querySelector(".MiddleTextTop")) && void 0 !== zv ? zv : vv).getBoundingClientRect()
            })).filter((vv => vv.width > 0 && vv.height > 0));
          let dv = (parseFloat(Pv.getPropertyValue("--notchTop")) || 0) + gv,
            Nv = "";
          if (ev) {
            const zv = window.innerWidth / 2,
              Pv = vv.getBoundingClientRect().height,
              ev = [dv, ...pv.map((vv => Math.max(dv, vv.bottom + gv)))].sort(((vv, zv) => vv - zv));
            for (const vv of ev) {
              let ev = zv - 8;
              for (const hv of pv) hv.bottom + gv <= vv || hv.top >= vv + Pv + gv || (ev = Math.min(ev, hv.right <= zv ? zv - hv.right - 8 : hv.left - zv - 8));
              const lv = 2 * ev - Sv;
              if (lv >= 16 * hv) {
                Nv = `${lv}px`, dv = vv;
                break
              }
            }
          }
          vv.style.maxWidth !== Nv && (vv.style.maxWidth = Nv);
          const lv = vv.getBoundingClientRect(),
            Tv = this.compassSize.trackHalfWidth;
          if (lv.width > 0) {
            const vv = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: vv.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * Sv / vv.width
          }
          if (!Nv)
            for (const Wv of pv) Wv.right > lv.left - 8 && Wv.left < lv.right + 8 && (dv = Math.max(dv, Wv.bottom + gv));
          vv.style.top = `${dv}px`, this.compassSize.trackHalfWidth !== Tv && this.render(this.frame)
        }
      }
      mountSearchArea(vv, zv) {
        this.searchAreas[vv] = this.ea ? null : zv, this.render(this.frame)
      }
      render(vv) {
        if (this.ea) return;
        if (this.frame = vv, this.compass && (vP(this.compass.root, !vv), vv)) {
          const zv = this.compassSize.trackHalfWidth / 50;
          vv.compass.cardinals.forEach(((vv, Pv) => {
            const hv = this.cardinals[Pv];
            hv.textContent !== vv.name && (hv.textContent = vv.name), vP(hv, vv.hidden), hv.style.translate = vv.left * zv + "px"
          }));
          const Pv = new Set;
          vv.compass.markers.forEach(((hv, Sv) => {
            var ev;
            Pv.add(hv.id);
            let gv = this.markers.get(hv.id);
            gv || (gv = document.createElement("span"), gv.className = "SkyblockCompassMarker", this.markers.set(hv.id, gv), this.compass.track.appendChild(gv)), gv.dataset.icon !== hv.icon && (gv.dataset.icon = hv.icon, gv.replaceChildren(Jz(hv.icon))), gv.style.color = null !== (ev = hv.colour) && void 0 !== ev ? ev : "", gv.style.translate = hv.left * zv + "px", gv.style.zIndex = String(vv.compass.markers.length - Sv), gv.title !== hv.name && (gv.title = hv.name)
          }));
          for (const [vv, hv] of this.markers) Pv.has(vv) || (hv.remove(), this.markers.delete(vv));
          this.compass.label.textContent !== vv.compass.label && (this.compass.label.textContent = vv.compass.label)
        }
        this.terrain && (vP(this.terrain, !(null !== vv && void 0 !== vv && vv.minimap)), null !== vv && void 0 !== vv && vv.minimap && (this.terrain.style.transform = vv.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", vv.minimap.iconRotation)));
        const zv = null === vv || void 0 === vv ? void 0 : vv.searchArea;
        for (const Pv of [this.searchAreas.minimap, this.searchAreas.map])
          if (Pv && (vP(Pv, !zv), zv)) {
            if (this.searchAreaPath.seed !== zv.shapeSeed && (this.searchAreaPath = {
                seed: zv.shapeSeed,
                d: kz(rz(zv.shapeSeed))
              }), Pv.dataset.shapeSeed !== zv.shapeSeed) {
              Pv.dataset.shapeSeed = zv.shapeSeed;
              for (const vv of Pv.querySelectorAll("path")) vv.setAttribute("d", this.searchAreaPath.d)
            }
            Pv.style.left = `${zv.left}%`, Pv.style.top = `${zv.top}%`, Pv.style.width = `${zv.width}%`, Pv.style.height = `${zv.height}%`
          } if (this.player && (vP(this.player, !(null !== vv && void 0 !== vv && vv.player) || vv.player.hidden), null !== vv && void 0 !== vv && vv.player && (this.player.style.left = `${vv.player.left}%`, this.player.style.top = `${vv.player.top}%`, this.player.style.setProperty("--map-player-rotation", vv.player.rotation))), this.waypoint) {
          const {
            root: zv,
            marker: Pv,
            clip: hv,
            text: Sv,
            label: ev,
            distance: gv,
            hint: pv
          } = this.waypoint, dv = !(null !== vv && void 0 !== vv && vv.waypoint) || null !== vv.waypoint.popupToken && vv.waypoint.popupToken !== this.waypointOriginToken;
          vP(zv, dv);
          let Nv = 1;
          const lv = this.waypointLaunch;
          if (!dv && lv && vv.waypoint.nameKey === lv.nameKey) {
            const vv = performance.now();
            lv.startedAt ??= vv, Nv = Math.min(1, Math.max(0, (vv - lv.startedAt - 450) / 1e3)), Pv.style.opacity = String(Math.min(1, (vv - lv.startedAt) / 150)), 1 === Nv && (this.waypointLaunch = null)
          } else Pv.style.opacity = "", lv && null !== lv.startedAt && (this.waypointLaunch = null);
          if (zv.classList.toggle("Launching", Nv < 1), null !== vv && void 0 !== vv && vv.waypoint) {
            const zv = this.waypointInset,
              dv = "quest_talk" === vv.waypoint.markerIcon ? function(vv, zv, Pv) {
                if (!vv.text || null === vv.blockHeight || 0 === vv.nearness) return vv;
                const hv = vv.blockHeight / 100 * Pv.height,
                  Sv = -vv.nearness * (zP * hv + zv.width / 2),
                  ev = vv.nearness * (PP * hv + zv.height / 2);
                return {
                  ...vv,
                  text: {
                    x: vv.text.x + Sv / Pv.width * 100,
                    y: vv.text.y + ev / Pv.height * 100
                  }
                }
              }(vv.waypoint, this.waypointMarkerSize, this.viewport) : vv.waypoint,
              Tv = (0, nz.e)(dv, zv, this.viewport),
              Wv = Nv * Nv * (3 - 2 * Nv),
              wv = Nv < 1 ? lv.x + (Tv.x - lv.x) * Wv : Tv.x,
              av = Nv < 1 ? lv.y + (Tv.y - lv.y) * Wv : Tv.y;
            Pv.style.translate = `${wv}vw ${av}vh`, hv.style.clipPath = `inset(${zv.top}px ${zv.x}px ${zv.bottom}px)`, vP(Sv, Nv < 1 || !vv.waypoint.text), Sv.style.opacity = String(1 - vv.waypoint.nearness), vv.waypoint.text && (Sv.style.translate = `${vv.waypoint.text.x}vw ${vv.waypoint.text.y}vh`), ev.textContent !== vv.waypoint.name && (ev.textContent = vv.waypoint.name), this.markerIcon !== vv.waypoint.markerIcon && (this.markerIcon = vv.waypoint.markerIcon, Pv.replaceChildren(Jz(this.markerIcon))), gv.textContent !== vv.waypoint.distance && (gv.textContent = vv.waypoint.distance), vP(pv, null === vv.waypoint.hint), null !== vv.waypoint.hint && pv.textContent !== vv.waypoint.hint && (pv.textContent = vv.waypoint.hint)
          }
        }
      }
      dispose() {
        var vv, zv;
        this.mountWaypointOrigin(null), this.render(null), null === (vv = this.stopLayout) || void 0 === vv || vv.call(this), this.stopLayout = null, null === (zv = this.stopWaypoint) || void 0 === zv || zv.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.ea = !0
      }
    }

    function vP(vv, zv) {
      vv.hidden !== zv && (vv.hidden = zv)
    }
    const zP = .55,
      PP = .6;
    const hP = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class SP {
      constructor(vv, zv, Pv, hv) {
        this.map = vv, this.quests = zv, this.compass = Pv, this.display = new uz, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.ea = !1, this.snapshot = null, this.texts = new Map, this.translate = hv
      }
      setTranslator(vv, zv) {
        this.translate = vv, this.locale = zv, this.metresFormat = new Intl.NumberFormat(zv), this.texts.clear()
      }
      translateCached(vv, zv) {
        const Pv = void 0 === zv ? vv : `${vv} ${zv}`;
        let hv = this.texts.get(Pv);
        return void 0 === hv && (this.texts.size >= 500 && this.texts.clear(), hv = this.translate(vv, void 0 === zv ? void 0 : {
          distance: zv
        }), this.texts.set(Pv, hv)), hv
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(vv, zv, Pv) {
        if (this.ea) return;
        if (!vv) return this.snapshot = null, void this.display.render(null);
        const hv = this.map.getSnapshot().map,
          dv = Pv.cameraHeading,
          Nv = {
            ...this.display.compassSize,
            tanHalfFovX: Pv.tanHalfFovX,
            pitch: Pv.cameraPitch
          },
          lv = [];
        if (hv)
          for (const Sv of this.compass.frame(vv, dv, zv)) {
            const vv = sv(Sv.offset, Nv);
            null !== vv && lv.push({
              ...Sv,
              left: vv
            })
          }
        const Tv = function(vv, zv) {
            const Pv = [],
              hv = vv => "quest" === vv.kind ? vv.distance - 1 : vv.distance,
              Sv = [...vv].sort(((vv, zv) => hv(vv) - hv(zv) || vv.id.localeCompare(zv.id)));
            for (const ev of Sv) {
              let vv = !1;
              if ("quest" !== ev.kind)
                for (const hv of Pv)
                  if (Math.abs(hv.left - ev.left) < zv) {
                    vv = !0;
                    break
                  } vv || Pv.push(ev)
            }
            return Pv
          }(lv, this.display.compassSpacing),
          Wv = function(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              Pv = null;
            for (const hv of vv) Math.abs(hv.offset) <= zv && (!Pv || hv.distance < Pv.distance || hv.distance === Pv.distance && Math.abs(hv.offset) < Math.abs(Pv.offset)) && (Pv = hv);
            return Pv
          }(Tv),
          wv = vv => {
            var zv;
            return null !== (zv = vv.displayName) && void 0 !== zv ? zv : this.translateCached(vv.nameKey)
          },
          av = {
            compass: {
              markers: Tv.map((vv => ({
                id: vv.id,
                icon: vv.icon,
                colour: vv.colour,
                name: wv(vv),
                left: vv.left
              }))),
              cardinals: gv.map((vv => {
                let {
                  name: zv,
                  bearing: Pv
                } = vv;
                const hv = sv(Sv.d.computeShortestRotation(dv, Pv), Nv);
                return {
                  name: zv,
                  left: null !== hv && void 0 !== hv ? hv : 0,
                  hidden: null === hv
                }
              })),
              label: Wv ? `${wv(Wv)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",fv(Wv.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== hv && void 0 !== hv && hv.background) {
          const zv = vv[0] - hv.mapOrigin[0],
            Pv = vv[2] - hv.mapOrigin[2],
            {
              rotation: Sv,
              transform: gv
            } = function(vv, zv, Pv, hv) {
              const [Sv, gv] = pv(vv, zv, hv), dv = ev - Pv;
              return {
                rotation: dv,
                transform: `rotate(${dv}rad) translate(-${Sv}%, -${gv}%)`
              }
            }(zv, Pv, dv, hv.background.bounds);
          av.minimap = {
            transform: gv,
            iconRotation: -Sv + "rad"
          };
          const [Nv, lv] = pv(zv, Pv, hv.background.bounds);
          av.player = {
            left: Nv,
            top: lv,
            hidden: Nv < 0 || lv < 0 || Nv > 100 || lv > 100,
            rotation: -Sv + "rad"
          }
        }
        const {
          waypoint: Cv
        } = this.quests.getSnapshot();
        if ("search" === (null === Cv || void 0 === Cv ? void 0 : Cv.questMarkerIcon) && null !== hv && void 0 !== hv && hv.background) {
          const {
            bounds: vv
          } = hv.background, [zv, Pv] = pv(Cv.position[0] - hv.mapOrigin[0], Cv.position[2] - hv.mapOrigin[2], vv);
          av.searchArea = {
            left: zv,
            top: Pv,
            width: 6400 / (vv.mapMaxX - vv.mapMinX),
            height: 6400 / (vv.mapMaxZ - vv.mapMinZ),
            shapeSeed: Cv.nameKey
          }
        }
        const iv = this.quests.getNotificationSnapshot(),
          cv = "completion" === (null === iv || void 0 === iv ? void 0 : iv.phase) && !Yz(iv.kind);
        if (Cv && !cv) {
          const zv = Math.hypot(...Cv.position.map(((zv, Pv) => zv - vv[Pv]))),
            hv = Math.round(zv),
            Sv = "talk" === Cv.questMarkerIcon ? Math.min(1, Math.max(0, (10 - zv) / 5)) : 0,
            ev = Pv.projectWorldPosToViewport(Cv.position),
            gv = ev && Pv.projectWorldPosToViewport([Cv.position[0], Cv.position[1] - 1, Cv.position[2]]);
          av.waypoint = {
            ...Pv.projectWorldPosToScreenPos(Cv.position),
            text: ev,
            nearness: Sv * Sv * (3 - 2 * Sv),
            blockHeight: ev && gv ? gv.y - ev.y : null,
            name: this.translateCached(Cv.nameKey),
            nameKey: Cv.nameKey,
            markerIcon: Cv.questMarkerIcon ? hP[Cv.questMarkerIcon] : "quest",
            popupToken: (null === iv || void 0 === iv ? void 0 : iv.waypointNameKey) === Cv.nameKey ? iv.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(hv)),
            hint: "search" === Cv.questMarkerIcon && Math.hypot(Cv.position[0] - vv[0], Cv.position[2] - vv[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = av, this.display.render(av)
      }
      dispose() {
        this.ea = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const eP = "skyblockSkillsView";
    class gP extends Tv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          Pv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : vv => vv,
          hv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          Sv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : vv => vv;
        super(vv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = zv, this.translate = Pv, this.locale = hv, this.itemName = Sv, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = vv => {
          this.selected = vv, this.emit()
        }
      }
      setTranslator(vv, zv, Pv) {
        this.translate = vv, this.locale = zv, this.itemName = Pv, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(vv) {
        let zv = this.skillText.get(vv);
        return zv || (zv = {
          label: this.translate(`skyblockGame:${vv}`),
          description: this.translate(`skyblockGame:${vv}Description`)
        }, this.skillText.set(vv, zv)), zv
      }
      sources(vv) {
        if ("mining" === vv || "fishing" === vv) return this.buildSources(vv);
        let zv = this.sourceText.get(vv);
        return zv || (zv = this.buildSources(vv), this.sourceText.set(vv, zv)), zv
      }
      buildSources(vv) {
        const zv = this.translate;
        return "exploration" === vv ? [zv("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), zv("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === vv ? [zv("skyblockGame:logSource", {
          xp: this.number(wz["Maple Log"])
        })] : "combat" === vv ? [zv("skyblockGame:creatureKillSource"), zv("skyblockGame:noEnvironmentalXp")] : "farming" === vv ? [zv("skyblockGame:cropSource", {
          xp: this.number(Cz["Wheat|FreshlyGrown"])
        }), zv("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), zv("skyblockGame:noYoungCropXp")] : Object.entries("mining" === vv ? sz : iz).map((vv => {
          let [Pv, hv] = vv;
          return zv("skyblockGame:itemXpSource", {
            item: this.itemName(Pv),
            xp: this.number(hv)
          })
        }))
      }
      number(vv) {
        return vv.toLocaleString(this.locale)
      }
      benefit(vv, zv) {
        const Pv = gz(vv, zv);
        return this.translate(Pv.translationKey, {
          bonus: this.number(Pv.percent)
        })
      }
      la(vv) {
        if (!this.ea) {
          if ("snapshot" === vv.kind) this.progress = vv.progress, this.pending.clear(), this.recent = null;
          else if ("award" === vv.kind && this.progress) {
            const {
              award: zv
            } = vv;
            this.progress = {
              ...this.progress,
              [zv.skill]: zv.after
            };
            for (const [vv, hv] of this.pending) hv.skill === zv.skill && this.pending.delete(vv);
            const Pv = zv.after.level > zv.before.level;
            this.recordGain(zv.skill, zv.amount, Pv ? ++this.nextLevelUpToken : null), Pv && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: zv.skill,
              beforeLevel: zv.before.level,
              level: zv.after.level
            })
          } else {
            if ("rejectBlock" === vv.kind) return void this.rejectBlock(vv.position);
            if ("open" === vv.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(vv, zv, Pv) {
        if (!this.progress || this.ea || Pv) return;
        const hv = function(vv, zv) {
          const Pv = vv.split("|")[0];
          return "Air" === zv || zv === `Barkless ${vv}` ? Object.hasOwn(wz, Pv) ? {
            skill: "foraging",
            amount: wz[Pv]
          } : "Air" !== zv ? null : Object.hasOwn(sz, vv) ? {
            skill: "mining",
            amount: sz[vv]
          } : lz(vv) ? {
            skill: "farming",
            amount: 10
          } : Wz(vv) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(Cz, vv) ? {
            skill: "farming",
            amount: Cz[vv]
          } : Object.hasOwn(Zv, vv) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(zv, "Air");
        if (!hv) return;
        const Sv = vv.join(",");
        if (this.pending.has(Sv)) return;
        const ev = this.predictedProgress(hv.skill).totalXp + hv.amount;
        Number.isSafeInteger(ev) && (this.pending.set(Sv, {
          ...hv,
          expires: this.now() + 2e3
        }), this.recordGain(hv.skill, 0), this.emit())
      }
      rejectBlock(vv) {
        this.pending.delete(vv.join(",")) && this.emit()
      }
      MT() {
        if (this.ea) return;
        let vv = !1;
        for (const [zv, Pv] of this.pending) Pv.expires <= this.now() && (this.pending.delete(zv), vv = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, vv = !0), vv && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(vv, zv) {
        var Pv, hv;
        let Sv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const ev = (null === (Pv = this.recent) || void 0 === Pv ? void 0 : Pv.skill) === vv && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          gv = (null === (hv = this.recent) || void 0 === hv ? void 0 : hv.skill) === vv && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: vv,
          confirmed: ev + zv,
          expires: this.now() + 3e3,
          levelUpToken: null !== Sv && void 0 !== Sv ? Sv : gv
        }
      }
      pendingXp(vv) {
        let zv = 0;
        for (const Pv of this.pending.values()) Pv.skill === vv && (zv += Pv.amount);
        return zv
      }
      predictedProgress(vv) {
        const zv = this.progress[vv],
          Pv = this.pendingXp(vv);
        return Pv ? dz(zv.totalXp + Pv, vv) : zv
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var vv, zv, Pv;
        const hv = this.progress ? rv.map((vv => {
            const zv = this.predictedProgress(vv);
            return {
              ...this.text(vv),
              icon: cz[vv],
              benefit: this.benefit(vv, zv.level),
              sources: this.sources(vv),
              id: vv,
              selected: vv === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(zv.level)
              }),
              xp: null === zv.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(zv.xpIntoLevel),
                target: this.number(zv.xpForNextLevel)
              }),
              percent: null === zv.xpForNextLevel ? 100 : Math.min(100, zv.xpIntoLevel / zv.xpForNextLevel * 100)
            }
          })) : [],
          Sv = hv.find((vv => {
            var zv;
            return vv.id === (null === (zv = this.recent) || void 0 === zv ? void 0 : zv.skill)
          })),
          ev = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: hv,
          detail: null !== (vv = hv.find((vv => vv.selected))) && void 0 !== vv ? vv : null,
          overallLevel: this.progress ? rv.reduce(((vv, zv) => vv + this.predictedProgress(zv).level), 0) : null,
          hud: Sv && ev > 0 ? {
            skill: Sv,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(ev)
            }),
            levelUpToken: null !== (zv = null === (Pv = this.recent) || void 0 === Pv ? void 0 : Pv.levelUpToken) && void 0 !== zv ? zv : null,
            colour: mz(Sv.id)
          } : null
        }
      }
    }
    const pP = Math.max(1600, 600, 950) + 400,
      dP = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      NP = "skyblockQuestsView",
      lP = "skyblockQuestNotificationView";
    class TP extends Tv {
      constructor(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          gv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(vv, hv, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = zv, this.translate = Pv, this.now = Sv, this.locale = ev, this.publishNotification = gv, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var vv, zv;
          this.selected = null !== (vv = null === (zv = this.authoritative) || void 0 === zv ? void 0 : zv.trackedQuestId) && void 0 !== vv ? vv : null, this.show()
        }, this.select = vv => {
          this.selected = vv, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const vv = this.snapshot.detail;
          !this.ea && null !== vv && void 0 !== vv && vv.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(vv.id), this.emit())
        }, this.viewDialogue = () => {
          const vv = this.snapshot.detail;
          var zv;
          vv && (null === (zv = this.onViewDialogue) || void 0 === zv || zv.call(this, vv.id))
        }, this.notifications = new fz(Sv, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var vv, zv;
        return null !== (vv = null === (zv = this.authoritative) || void 0 === zv ? void 0 : zv.trackedQuestId) && void 0 !== vv ? vv : null
      }
      notify(vv) {
        !this.ea && this.notifications.enqueue(vv) && this.emitNotification()
      }
      setNotificationsHeld(vv) {
        (this.notifications.setHeld(vv) || vv) && this.emitNotification()
      }
      MT() {
        var vv, zv;
        if (this.ea) return;
        this.notifications.MT() && this.emitNotification();
        let Pv = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, Pv = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, Pv = !0);
        const hv = WP(this.authoritative);
        null !== hv && void 0 !== hv && null !== (vv = hv.questClock) && void 0 !== vv && vv.running && this.clockText(hv) !== (null === (zv = this.snapshot.tracked) || void 0 === zv ? void 0 : zv.clock) && (Pv = !0), Pv && this.emit()
      }
      setTranslator(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = vv, this.locale = zv, this.emitNotification(), this.emit()
      }
      la(vv) {
        if (!this.ea)
          if ("completion" === vv.kind) this.notify(vv.questCompletion);
          else if ("landmark" === vv.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: vv.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === vv.kind) {
          var zv, Pv, hv;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: vv.npcNoteTitleKey,
            textKey: vv.npcNoteTextKey,
            params: null !== (zv = vv.npcNoteParams) && void 0 !== zv ? zv : {},
            nameKeys: null !== (Pv = vv.npcNoteNameKeys) && void 0 !== Pv ? Pv : {},
            iconItem: null !== (hv = vv.npcNoteIconItem) && void 0 !== hv ? hv : null
          })
        } else if ("open" === vv.kind) this.show();
        else if ("guidance" === vv.kind) this.waypoint = vv.waypoint, this.compassTarget = vv.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === vv.kind) {
          this.authoritative = vv.snapshot, this.notifications.MT() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const zv = this.trackedStepPulse;
          this.updateTrackedStepPulse(vv.snapshot), this.emit(), this.trackedStepPulse > zv && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.ea || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var vv;
        return null !== (vv = this.translateWithIcons) && void 0 !== vv ? vv : this.translate
      }
      clockText(vv) {
        const zv = vv.questClock;
        if (!zv) return null;
        const Pv = zv.elapsedMs + (zv.running ? this.now() - this.receivedAt : 0);
        return void 0 === zv.countdownFromMs ? xv(Pv, !1) : xv(1e3 * Math.ceil(Math.max(0, zv.countdownFromMs - Pv) / 1e3), !1)
      }
      updateTrackedStepPulse(vv) {
        var zv, Pv, hv;
        const Sv = WP(vv);
        if (!Sv) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const ev = vv => Sv.subquests.filter((zv => vv(zv.status))).map((vv => vv.id)),
          gv = ev((vv => "completed" === vv || "skipped" === vv)),
          pv = ev((vv => "locked" !== vv)),
          dv = (null === (zv = this.trackedSteps) || void 0 === zv ? void 0 : zv.questId) === Sv.id && Sv.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (dv) {
          const vv = gv.filter((vv => !dv.finished.has(vv))),
            zv = ev((vv => "active" === vv || "ready" === vv)).filter((vv => !dv.unlocked.has(vv)));
          vv.length > 0 && this.trackedStepPulse++, (vv.length > 0 || zv.length > 0) && (this.trackedChange = {
            finished: new Set(vv),
            unlocked: new Set(zv),
            expiresAt: this.now() + pP
          })
        } else {
          var Nv;
          this.trackedStepPulse = (null === (Nv = this.trackedSteps) || void 0 === Nv ? void 0 : Nv.questId) === Sv.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: Sv.id,
          progress: Sv.progress,
          finished: new Set([...null !== (Pv = null === dv || void 0 === dv ? void 0 : dv.finished) && void 0 !== Pv ? Pv : [], ...gv]),
          unlocked: new Set([...null !== (hv = null === dv || void 0 === dv ? void 0 : dv.unlocked) && void 0 !== hv ? hv : [], ...pv])
        }
      }
      entry(vv, zv) {
        var Pv, hv;
        const Sv = vv.id === (null === (Pv = this.authoritative) || void 0 === Pv ? void 0 : Pv.trackedQuestId),
          ev = this.now() < this.trackAvailableAt,
          gv = this.questTextTranslator(),
          pv = vv.subquests.map((zv => {
            var Pv, hv, ev, pv, dv, Nv;
            const lv = null !== (Pv = zv.handInNpcName) && void 0 !== Pv ? Pv : vv.giverName,
              Tv = this.translate("skyblockGame:progress", {
                current: zv.progress.toLocaleString(this.locale),
                target: zv.target.toLocaleString(this.locale)
              }),
              Wv = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: lv ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [zv.status],
              wv = "active" === zv.status || "ready" === zv.status;
            return {
              id: zv.id,
              name: jz(gv, zv.nameKey, zv.nameParams),
              description: jz(gv, zv.descriptionKey, zv.descriptionParams),
              progress: Tv,
              status: zv.status,
              statusLabel: Wv ? this.translate(Wv, {
                npc: lv
              }) : Tv,
              iconItem: wv && null !== (hv = zv.questIconItem) && void 0 !== hv ? hv : null,
              barPercent: "active" === zv.status && zv.showsProgressBar ? Math.min(100, 100 * zv.progress / zv.target) : null,
              justFinished: Sv && null !== (ev = null === (pv = this.trackedChange) || void 0 === pv ? void 0 : pv.finished.has(zv.id)) && void 0 !== ev && ev,
              justUnlocked: Sv && null !== (dv = null === (Nv = this.trackedChange) || void 0 === Nv ? void 0 : Nv.unlocked.has(zv.id)) && void 0 !== dv && dv
            }
          }));
        return {
          id: vv.id,
          name: jz(gv, vv.nameKey, vv.nameParams),
          description: jz(gv, vv.descriptionKey, vv.descriptionParams),
          progress: zv ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: vv.progress.toLocaleString(this.locale),
            target: vv.target.toLocaleString(this.locale)
          }),
          completed: zv,
          tracked: Sv,
          selected: vv.id === this.selected,
          canTrack: !zv && !Sv && !ev,
          trackLabel: this.translate(Sv ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : ev ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== vv.id,
          subquests: pv,
          focusStep: null !== (hv = pv.find((vv => null !== vv.barPercent))) && void 0 !== hv ? hv : null,
          clock: this.clockText(vv)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv;
        const lv = [...null !== (vv = null === (zv = this.authoritative) || void 0 === zv ? void 0 : zv.active) && void 0 !== vv ? vv : [], ...null !== (Pv = null === (hv = this.authoritative) || void 0 === hv ? void 0 : hv.completed) && void 0 !== Pv ? Pv : []];
        var Tv, Wv, wv, av;
        lv.some((vv => vv.id === this.selected)) || (this.selected = null !== (Tv = null !== (Wv = null === (wv = this.authoritative) || void 0 === wv ? void 0 : wv.trackedQuestId) && void 0 !== Wv ? Wv : null === (av = lv[0]) || void 0 === av ? void 0 : av.id) && void 0 !== Tv ? Tv : null);
        const sv = null !== (Sv = null === (ev = this.authoritative) || void 0 === ev ? void 0 : ev.active.map((vv => this.entry(vv, !1)))) && void 0 !== Sv ? Sv : [];
        sv.sort(((vv, zv) => Number(zv.tracked) - Number(vv.tracked)));
        const Cv = null !== (gv = null === (pv = this.authoritative) || void 0 === pv ? void 0 : pv.completed.map((vv => this.entry(vv, !0)))) && void 0 !== gv ? gv : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: sv,
          completed: Cv,
          completedExpanded: this.completedExpanded,
          detail: null !== (dv = [...sv, ...Cv].find((vv => vv.selected))) && void 0 !== dv ? dv : null,
          tracked: null !== (Nv = sv.find((vv => vv.tracked))) && void 0 !== Nv ? Nv : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function WP(vv) {
      var zv;
      return null !== (zv = null === vv || void 0 === vv ? void 0 : vv.active.find((zv => zv.id === vv.trackedQuestId))) && void 0 !== zv ? zv : null
    }
    const wP = "skyblockDungeonsView";
    class aP extends Tv {
      constructor(vv, zv) {
        let Pv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          hv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(vv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = zv, this.locale = Pv, this.requestEnter = hv, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = vv => {
          this.selected = vv, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const vv = this.pickerEntry(),
            zv = null === vv || void 0 === vv ? void 0 : vv.difficulties[this.pageIndex];
          void 0 !== zv && null !== zv.unlockedBoss && (this.close(), this.requestEnter(vv.id, zv.difficulty))
        }
      }
      setTranslator(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = vv, this.locale = zv, this.emit()
      }
      la(vv) {
        var zv, Pv;
        if (!this.ea) return "open" === vv.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== vv.kind ? "snapshot" === vv.kind && (this.authoritative = vv.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (zv = null === (Pv = this.pickerEntry()) || void 0 === Pv ? void 0 : Pv.difficulties.length) && void 0 !== zv ? zv : 1) - 1)), null === vv.snapshot && this.open ? this.close() : this.emit()) : this.choose(vv.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(vv) {
        var zv;
        const Pv = null === (zv = this.authoritative) || void 0 === zv ? void 0 : zv.dungeons.find((zv => zv.id === vv));
        void 0 !== Pv ? this.open && this.pickerDungeonId === vv || (this.pickerDungeonId = vv, this.pageIndex = Math.max(0, Pv.difficulties.findLastIndex((vv => null !== vv.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${vv}`)
      }
      turnTo(vv) {
        var zv, Pv;
        const hv = null !== (zv = null === (Pv = this.pickerEntry()) || void 0 === Pv ? void 0 : Pv.difficulties.length) && void 0 !== zv ? zv : 0;
        vv < 0 || vv >= hv || vv === this.pageIndex || (this.pageIndex = vv, this.emit())
      }
      pickerEntry() {
        var vv, zv;
        return null !== (vv = null === (zv = this.authoritative) || void 0 === zv ? void 0 : zv.dungeons.find((vv => vv.id === this.pickerDungeonId))) && void 0 !== vv ? vv : null
      }
      difficulty(vv) {
        const zv = vv.completions > 0,
          Pv = null === vv.bestMs ? null : xv(vv.bestMs);
        return {
          difficulty: vv.difficulty,
          label: this.translate(Uv[vv.difficulty]),
          colour: Rv[vv.difficulty],
          beaten: zv,
          bestTime: Pv,
          completions: vv.completions,
          summary: zv ? [null === Pv ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: Pv
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: vv.completions.toLocaleString(this.locale)
          })].filter((vv => null !== vv)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(vv) {
        const zv = vv.difficulties.map((vv => this.difficulty(vv))),
          Pv = zv.filter((vv => vv.beaten)).length;
        return {
          id: vv.id,
          name: this.translate(vv.nameKey),
          selected: vv.id === this.selected,
          beatenSummary: `${Pv} / ${zv.length}`,
          difficulties: zv
        }
      }
      picker() {
        const vv = this.pickerEntry();
        if (null === vv || 0 === vv.difficulties.length) return null;
        const zv = vv.difficulties.map(((zv, Pv) => {
          var hv, Sv, ev, gv;
          const pv = zv.unlockedBoss,
            dv = null === pv ? this.lockedHint(vv, Pv) : null;
          return {
            ...this.difficulty(zv),
            unlocked: null !== pv,
            bossName: null === pv ? null : this.translate(pv.bossNameKey),
            bossMobType: null !== (hv = null === pv || void 0 === pv ? void 0 : pv.bossMobType) && void 0 !== hv ? hv : null,
            bossMobVariation: null !== (Sv = null === pv || void 0 === pv ? void 0 : pv.bossMobVariation) && void 0 !== Sv ? Sv : null,
            lockedHint: null !== (ev = null === dv || void 0 === dv ? void 0 : dv.text) && void 0 !== ev ? ev : null,
            lockedHintHighlight: null !== (gv = null === dv || void 0 === dv ? void 0 : dv.highlight) && void 0 !== gv ? gv : null,
            current: Pv === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(vv.nameKey),
          pages: zv,
          page: zv[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < zv.length - 1
        }
      }
      lockedHint(vv, zv) {
        var Pv, hv, Sv;
        if (0 === zv && "number" === typeof vv.combatLevelLock) {
          const zv = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: vv.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: zv,
            colour: mz("combat"),
            icon: cz.combat
          })
        }
        const ev = null !== (Pv = null === (hv = this.authoritative) || void 0 === hv ? void 0 : hv.dungeons) && void 0 !== Pv ? Pv : [],
          gv = zv > 0 ? vv : null !== (Sv = ev[ev.indexOf(vv) - 1]) && void 0 !== Sv ? Sv : null,
          pv = zv > 0 ? vv.difficulties[zv - 1] : null === gv || void 0 === gv ? void 0 : gv.difficulties[0];
        if (null === gv || void 0 === pv) return null;
        const dv = this.translate(gv.nameKey);
        if (null === pv.unlockedBoss) return gv === vv ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, pv.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: dv
        }, pv.difficulty);
        const Nv = this.translate(pv.unlockedBoss.bossNameKey);
        return gv === vv ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: Nv
        }, pv.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: Nv,
            dungeon: dv
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(vv, zv, Pv) {
        return this.hintHighlighting(vv, zv, "difficulty", {
          name: this.translate(Uv[Pv]),
          colour: Rv[Pv],
          icon: null
        })
      }
      hintHighlighting(vv, zv, Pv, hv) {
        let {
          name: Sv,
          colour: ev,
          icon: gv
        } = hv;
        const pv = this.translate(vv, {
          ...zv,
          [Pv]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(vv, {
            ...zv,
            [Pv]: Sv
          }),
          highlight: 2 === pv.length ? {
            before: pv[0],
            name: Sv,
            after: pv[1],
            colour: ev,
            icon: gv
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var vv, zv, Pv;
        const hv = null !== (vv = null === (zv = this.authoritative) || void 0 === zv ? void 0 : zv.dungeons) && void 0 !== vv ? vv : [];
        var Sv, ev;
        hv.some((vv => vv.id === this.selected)) || (this.selected = null !== (Sv = null === (ev = hv[0]) || void 0 === ev ? void 0 : ev.id) && void 0 !== Sv ? Sv : null);
        const gv = hv.map((vv => this.entry(vv)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: gv,
          detail: null !== (Pv = gv.find((vv => vv.selected))) && void 0 !== Pv ? Pv : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const sP = ["mining", "farming", "foraging", "fishing", "combat"],
      CP = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      iP = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function cP() {
      for (var vv = arguments.length, zv = new Array(vv), Pv = 0; Pv < vv; Pv++) zv[Pv] = arguments[Pv];
      return zv.map(((vv, zv) => ({
        amount: vv,
        coins: CP[zv],
        xp: iP[zv]
      })))
    }
    const GP = cP(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      mP = cP(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      jP = cP(50, 100, 250, 500, 1e3, 2500, 5e3),
      fP = cP(25, 50, 100, 250, 500, 1e3),
      FP = cP(10, 25, 50, 100, 250, 500, 1e3),
      YP = cP(1, 5, 10, 25, 50);

    function nP(vv, zv) {
      return {
        id: vv,
        category: "fishing",
        item: zv,
        drops: [zv],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : FP
      }
    }
    const OP = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: mP
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: jP
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: jP
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: fP
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: fP
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: mP
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: GP
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: GP
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: GP
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: jP
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: mP
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: mP
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: mP
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: jP
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: jP
      }, nP("wheatfish", "Wheatfish"), nP("darter", "Darter"), nP("sunset_minnow", "Sunset Minnow"), nP("root_flounder", "Root Flounder"), nP("greenfin_loach", "Greenfin Loach"), nP("red_strongfish", "Red Strongfish"), nP("green_strongfish", "Green Strongfish"), nP("boomerang_fish", "Boomerang Fish"), nP("seahorse", "Seahorse"), nP("spined_stickleback", "Spined Stickleback"), nP("moon_strongfish", "Moon Strongfish"), nP("boulder_bass", "Boulder Bass"), nP("grass_snapper", "Grass Snapper"), nP("crystal_wheatfish", "Crystalized Wheatfish", YP), nP("moonstone_pupfish", "Moonstone Pupfish", YP), nP("reedglass_minnow", "Reedglass Minnow"), nP("mangrove_herring", "Mangrove Herring"), nP("mudline_perch", "Mudline Perch"), nP("coastal_mullet", "Coastal Mullet"), nP("reef_sardine", "Reef Sardine"), nP("root_perch", "Root Perch"), nP("driftwood_catfish", "Driftwood Catfish"), nP("aether_minnow", "Aether Minnow"), nP("needlefish", "Tri-Pointed Needlefish"), nP("threadfin_bream", "Threadfin Bream"), nP("mudbelly_tilapia", "Mudbelly Tilapia"), nP("rotslab_eel", "Rotslab Eel"), nP("polarflash_electron", "Polarflash Electron"), nP("mireback_carp", "Mireback Carp"), nP("blackwater_bream", "Blackwater Bream"), nP("stone_grouper", "Stone Grouper"), nP("shadeback_ray", "Shadeback Ray"), nP("glacial_silverfish", "Glacial Silverfish"), nP("hatchetfish", "Hatchetfish"), nP("moonlit_boomerang", "Moonlit Boomerang Fish"), nP("murkborne_ray", "Murkborne Ray"), nP("bamboo_catfish", "Bamboo Catfish"), nP("mossback_arapaima", "Mossback Arapaima"), nP("murk_stingray", "Murk Stingray"), nP("channel_sawfish", "Channel Sawfish"), nP("boned_sturgeon", "Boned Sturgeon"), nP("oarfish", "Oarfish"), nP("snakehead", "Snakehead", YP), nP("eldertide_leviathan", "Eldertide Leviathan", YP), nP("pithead", "Pithead"), nP("electric_eel", "Electric Eel"), nP("shadow_darter", "Shadow Darter"), nP("abyss_carp", "Abyss Carp"), nP("nomai_moray", "Nomai Moray"), nP("silver_dragonfish", "Silver Dragonfish"), nP("giant_moray", "Giant Moray"), nP("coelacanth", "Coelacanth", YP), nP("frost_herring", "Frost Herring"), nP("permafrost_halibut", "Permafrost Halibut"), nP("glacial_lanternfish", "Glacial Lanternfish"), nP("frozen_grenadier", "Frozen Grenadier"), nP("blackfin_icefish", "Blackfin Icefish"), nP("moonfish", "Moonfish"), nP("alpha_strongfish", "Alpha Moon Strongfish"), nP("deep_lanternfish", "Deepwater Lanternfish", YP), nP("pearlescent_moonfish", "Pearlescent Moonfish", YP), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: mP
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: fP
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: fP
      }],
      DP = (new Map(OP.map((vv => [vv.id, vv]))), new Map),
      KP = new Map;
    for (const dd of OP) {
      for (const [vv, zv] of Object.entries(null !== (VP = dd.blocks) && void 0 !== VP ? VP : {})) {
        var VP;
        DP.set(vv, {
          collection: dd,
          amount: zv
        })
      }
      for (const vv of null !== (UP = dd.drops) && void 0 !== UP ? UP : []) {
        var UP;
        KP.set(vv, dd)
      }
    }

    function RP(vv, zv) {
      let Pv = 0;
      for (; Pv < vv.tiers.length && zv >= vv.tiers[Pv].amount;) Pv++;
      return Pv
    }
    const xP = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function tP(vv) {
      return xP[vv - 1]
    }
    const qP = "skyblockCollectionsView";
    class IP extends Tv {
      constructor(vv, zv) {
        let Pv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          hv = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : vv => vv;
        super(vv, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = zv, this.locale = Pv, this.itemName = hv, this.counts = null, this.category = "mining", this.selected = OP[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = vv => {
          this.category = vv, this.selected = this.inCategory(vv)[0].id, this.emit()
        }, this.select = vv => {
          this.selected = vv, this.emit()
        }
      }
      setTranslator(vv, zv, Pv) {
        this.translate = vv, this.locale = zv, this.itemName = Pv, this.emit()
      }
      la(vv) {
        if (!this.ea)
          if ("collOpen" !== vv.kind) {
            (vv.collFull || null === this.counts) && (this.counts = new Map);
            for (const [zv, Pv] of vv.collCounts) this.counts.set(zv, Pv);
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
        var vv;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const zv = this.inCategory(this.category).map((vv => this.collectionView(vv))),
          Pv = OP.reduce(((vv, zv) => vv + this.tierOf(zv)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: sP.map((vv => this.categoryView(vv))),
          collections: zv,
          detail: null !== (vv = zv.find((vv => vv.selected))) && void 0 !== vv ? vv : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(Pv)
          })
        }
      }
      categoryView(vv) {
        const zv = this.inCategory(vv),
          Pv = zv.reduce(((vv, zv) => vv + this.tierOf(zv)), 0),
          hv = zv.reduce(((vv, zv) => vv + zv.tiers.length), 0);
        return {
          id: vv,
          label: this.translate(`skyblockGame:${vv}`),
          icon: cz[vv],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(Pv),
            target: this.number(hv)
          }),
          selected: vv === this.category
        }
      }
      collectionView(vv) {
        var zv, Pv;
        const hv = null !== (zv = this.counts.get(vv.id)) && void 0 !== zv ? zv : 0,
          Sv = RP(vv, hv),
          ev = null !== (Pv = vv.tiers[Sv]) && void 0 !== Pv ? Pv : null,
          gv = 0 === Sv ? 0 : vv.tiers[Sv - 1].amount;
        return {
          id: vv.id,
          name: this.itemName(vv.item),
          icon: vv.item,
          selected: vv.id === this.selected,
          locked: 0 === hv,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(hv)
          }),
          tier: 0 === Sv ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(Sv),
          percent: null === ev ? 100 : Math.min(100, (hv - gv) / (ev.amount - gv) * 100),
          progress: null === ev ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(hv),
            target: this.number(ev.amount)
          }),
          nextReward: null === ev ? null : this.reward(vv, ev.coins, ev.xp)
        }
      }
      reward(vv, zv, Pv) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(zv),
          xp: this.number(Pv),
          skill: this.translate(`skyblockGame:${vv.category}`)
        })
      }
      tierLabel(vv) {
        return this.translate("skyblockGame:collectionTier", {
          tier: tP(vv)
        })
      }
      tierOf(vv) {
        var zv;
        return RP(vv, null !== (zv = this.counts.get(vv.id)) && void 0 !== zv ? zv : 0)
      }
      inCategory(vv) {
        return OP.filter((zv => zv.category === vv))
      }
      number(vv) {
        return vv.toLocaleString(this.locale)
      }
    }
    const QP = "skyblockPortalTransitView",
      ZP = "skyblockPortalArrival";
    class AP {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.zC = vv, this.storage = zv, this.now = Pv, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      la(vv) {
        const zv = {
          zoneNameKey: vv.transitZoneNameKey,
          variation: vv.transitZoneVariation,
          colour: vv.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(ZP, zv), this.show("departure", zv.zoneNameKey, zv.colour, vv.transitDurationMs, vv.transitDurationMs + 1500, (() => {
          this.storage.removeItem(ZP)
        }))
      }
      resumeArrival(vv) {
        const zv = this.storage.getItem(ZP);
        this.storage.removeItem(ZP), null === zv || zv.variation !== vv || this.now() - zv.departedAt > 3e4 || this.show("arrival", zv.zoneNameKey, zv.colour, 3200, 2e4)
      }
      finishArrival(vv) {
        var zv;
        "arrival" === (null === (zv = this.view) || void 0 === zv ? void 0 : zv.phase) && this.view.token === vv && (this.clearTimer(), this.view = null, this.zC(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(vv, zv, Pv, hv, Sv, ev) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: vv,
          zoneNameKey: zv,
          colour: Pv,
          durationMs: hv
        }, this.zC(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.zC(null), null === ev || void 0 === ev || ev()
        }), Sv)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const LP = "skyblockDailyRewardView",
      HP = "skyblockDailyRewardCoin";
    class MP {
      constructor(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          dv = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.zC = vv, this.isBusy = zv, this.holdQuestPopups = Pv, this.onHeldCoinsChanged = hv, this.onCoinLanded = Sv, this.onStarted = ev, this.onFinished = gv, this.onItemLanded = pv, this.now = dv, this.Vp = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var vv, zv;
        return null !== (vv = null === (zv = this.playing) || void 0 === zv ? void 0 : zv.view) && void 0 !== vv ? vv : null
      }
      getHeldCoins() {
        var vv, zv;
        let Pv = 0;
        for (const hv of this.Vp) Pv += hv.coins;
        return Pv - (null !== (vv = null === (zv = this.playing) || void 0 === zv ? void 0 : zv.released) && void 0 !== vv ? vv : 0)
      }
      la(vv) {
        "dailyRewardClaimed" !== vv.kind ? (this.queue.push(vv), this.MT()) : this.Vp.push({
          coins: vv.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      MT() {
        const vv = this.now();
        if (null === this.playing) return this.releaseUnshown(vv), void this.startNext(vv);
        const zv = this.playing,
          Pv = vv - zv.startedAt,
          hv = zv.view.flyingCoins,
          Sv = function(vv, zv) {
            let Pv = 0;
            for (; Pv < zv && BP(Pv, zv) <= vv;) Pv++;
            return Pv
          }(Pv, hv);
        if (Sv !== zv.landed) {
          for (let vv = Sv - zv.landed > 2 ? Sv - 1 : zv.landed; vv < Sv; vv++) this.onCoinLanded(vv, hv);
          zv.landed = Sv, zv.released = Math.round(zv.view.coins * Sv / hv), this.onHeldCoinsChanged()
        }
        for (; zv.itemsLanded < zv.view.items.length && 2e3 + 160 * zv.itemsLanded + 630 <= Pv;) this.onItemLanded(zv.itemsLanded), zv.itemsLanded++;
        Pv >= zv.view.durationMs && (this.finish(), this.startNext(vv))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Vp = [], this.zC(null)
      }
      startNext(vv) {
        if (0 === this.queue.length || this.isBusy()) return;
        const zv = this.queue.shift();
        this.token++;
        const Pv = {
          token: this.token,
          day: zv.dailyRewardDay,
          coins: zv.dailyRewardCoins,
          items: zv.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: zv.dailyRewardDay === Dv ? 24 : 14
        };
        this.playing = {
          view: Pv,
          startedAt: vv,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.zC(Pv), this.onStarted(Pv)
      }
      finish() {
        this.Vp.shift(), this.playing = null, this.holdQuestPopups(!1), this.zC(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(vv) {
        if (this.queue.length > 0 || 0 === this.Vp.length) return;
        const zv = this.Vp.length;
        this.Vp = this.Vp.filter((zv => vv - zv.receivedAt < 6e4)), this.Vp.length !== zv && this.onHeldCoinsChanged()
      }
    }

    function yP(vv, zv) {
      return 450 + 715 * vv / (zv - 1)
    }

    function BP(vv, zv) {
      return yP(vv, zv) + 650
    }
    const JP = "skyblockMailboxView";
    class EP {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.zC = vv, this.isBusy = zv, this.onStarted = Pv, this.now = hv, this.waiting = [], this.playing = null, this.token = 0, this.itemName = vv => vv
      }
      getSnapshot() {
        var vv, zv;
        return null !== (vv = null === (zv = this.playing) || void 0 === zv ? void 0 : zv.view) && void 0 !== vv ? vv : null
      }
      setItemName(vv) {
        this.itemName = vv
      }
      la(vv) {
        this.waiting.push(...vv.mailLetters), this.MT()
      }
      MT() {
        const vv = this.now();
        null !== this.playing && vv - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.zC(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(vv)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.zC(null)
      }
      start(vv) {
        const zv = this.waiting.slice(0, 3);
        this.token++;
        const Pv = {
          token: this.token,
          letters: zv.map((vv => this.toView(vv))),
          more: this.waiting.length - zv.length,
          durationMs: 4500 + 700 * zv.length
        };
        this.waiting = [], this.playing = {
          view: Pv,
          startedAt: vv
        }, this.zC(Pv), this.onStarted(Pv)
      }
      toView(vv) {
        return {
          coins: vv.mailCoins,
          items: vv.mailItems.map((vv => {
            var zv;
            return {
              itemName: vv.mailItemName,
              amount: vv.mailItemAmount,
              label: null !== (zv = vv.mailItemLabel) && void 0 !== zv ? zv : this.itemName(vv.mailItemName)
            }
          })),
          reasonKey: vv.mailReasonKey,
          reasonParams: vv.mailReasonParams
        }
      }
    }
    const oP = "skyblockQuestGraphView",
      bP = "skyblockDevQuestJump";

    function rP(vv) {
      if (0 === vv.length) return "";
      const zv = [`M ${vv[0].x} ${vv[0].y}`];
      for (let hv = 1; hv < vv.length - 1; hv++) {
        const Pv = vv[hv + 1];
        zv.push(`Q ${vv[hv].x} ${vv[hv].y} ${(vv[hv].x+Pv.x)/2} ${(vv[hv].y+Pv.y)/2}`)
      }
      const Pv = vv[vv.length - 1];
      return zv.push(`L ${Pv.x} ${Pv.y}`), zv.join(" ")
    }

    function kP(vv, zv) {
      return vv < zv ? `${vv}|${zv}` : `${zv}|${vv}`
    }
    class XP extends Tv {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(vv, Pv, hv), this.translate = zv, this.requestJump = Sv, this.requestArrive = ev, this.storage = gv, this.now = pv, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = vv => {
          vv !== this.hoveredId && (this.hoveredId = vv, this.emit())
        }, this.jump = vv => {
          this.close(), this.requestJump(vv)
        }
      }
      la(vv) {
        if (!this.ea)
          if ("graph" !== vv.kind) {
            if ("jumping" === vv.kind) {
              const zv = {
                questId: vv.graphQuestId,
                variation: vv.graphVariation,
                completes: vv.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(bP, zv)
            }
          } else {
            const zv = ++this.graphCount;
            Pv.e(112).then((() => Pv(6161))).then((Pv => {
              let {
                default: hv
              } = Pv;
              this.ea || zv !== this.graphCount || (this.layout = function(vv, zv, Pv) {
                var hv, Sv;
                const ev = new vv.graphlib.Graph;
                ev.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), ev.setDefaultEdgeLabel((() => ({})));
                const gv = new Set;
                for (const lv of zv) gv.add(lv.graphQuestId), ev.setNode(lv.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const pv = Pv.filter((vv => gv.has(vv.graphFromId) && gv.has(vv.graphToId) && vv.graphFromId !== vv.graphToId)),
                  dv = new Map;
                for (const lv of [...pv].sort(((vv, zv) => Number("awaits" === vv.graphEdgeKind) - Number("awaits" === zv.graphEdgeKind)))) {
                  const vv = kP(lv.graphFromId, lv.graphToId);
                  dv.has(vv) || (dv.set(vv, lv), ev.setEdge(lv.graphFromId, lv.graphToId))
                }
                vv.layout(ev);
                const Nv = ev.graph();
                return {
                  width: Math.ceil(null !== (hv = Nv.width) && void 0 !== hv ? hv : 0),
                  height: Math.ceil(null !== (Sv = Nv.height) && void 0 !== Sv ? Sv : 0),
                  nodes: zv.map((vv => {
                    var zv, Pv;
                    const hv = ev.node(vv.graphQuestId);
                    return {
                      node: vv,
                      left: (null !== (zv = hv.x) && void 0 !== zv ? zv : 0) - 95,
                      top: (null !== (Pv = hv.y) && void 0 !== Pv ? Pv : 0) - 26
                    }
                  })),
                  edges: pv.map((vv => {
                    var zv;
                    const Pv = dv.get(kP(vv.graphFromId, vv.graphToId)),
                      hv = null !== (zv = ev.edge(Pv.graphFromId, Pv.graphToId).points) && void 0 !== zv ? zv : [];
                    return {
                      edge: vv,
                      key: `${vv.graphFromId}|${vv.graphToId}|${vv.graphEdgeKind}`,
                      path: rP(Pv.graphFromId === vv.graphFromId ? hv : [...hv].reverse())
                    }
                  })),
                  plans: new Map(zv.map((vv => [vv.graphQuestId, new Set([vv.graphQuestId, ...vv.graphPlanIds])])))
                }
              }(hv, vv.graphNodes, vv.graphEdges), this.show())
            })).catch((vv => {
              console.error("The quest graph could not be laid out", vv)
            }))
          }
      }
      resumeJump(vv) {
        const zv = this.storage.getItem(bP);
        this.storage.removeItem(bP), null === zv || zv.variation !== vv || this.now() - zv.departedAt > 6e4 || this.requestArrive(zv.questId, zv.completes)
      }
      setTranslator(vv) {
        this.translate = vv, this.emit()
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
        var vv, zv;
        return null !== (vv = null === this.hoveredId || null === (zv = this.layout) || void 0 === zv ? void 0 : zv.plans.get(this.hoveredId)) && void 0 !== vv ? vv : new Set
      }
      buildSnapshot() {
        const vv = this.layout;
        if (null === vv) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const zv = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: vv.width,
          height: vv.height,
          nodes: vv.nodes.map((vv => {
            let {
              node: Pv,
              left: hv,
              top: Sv
            } = vv;
            return {
              id: Pv.graphQuestId,
              name: this.translate(Pv.graphNameKey),
              detail: null === Pv.graphGiverName ? Pv.graphZoneId : `${Pv.graphGiverName} \xb7 ${Pv.graphZoneId}`,
              state: Pv.graphState,
              left: hv,
              top: Sv,
              inPlan: zv.has(Pv.graphQuestId),
              hovered: Pv.graphQuestId === this.hoveredId
            }
          })),
          edges: vv.edges.map((vv => {
            let {
              edge: Pv,
              key: hv,
              path: Sv
            } = vv;
            return {
              key: hv,
              kind: Pv.graphEdgeKind,
              path: Sv,
              inPlan: zv.has(Pv.graphFromId) && zv.has(Pv.graphToId)
            }
          })),
          planning: zv.size > 0
        }
      }
    }
    var uP = Pv(36562);
    const vh = 250,
      zh = 2150,
      Ph = -2.8,
      hh = 2.2,
      Sh = -27,
      eh = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      gh = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      ph = Math.round(50 + 1e3 * (gh.delay + gh.period / 2)),
      dh = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Nh = Array.from({
        length: 26
      }, ((vv, zv) => {
        const Pv = 2.39996 * zv,
          hv = .5 + .618034 * zv % 1 * .23,
          Sv = zv % 3 !== 2;
        return {
          rune: Sv ? dh[7 * zv % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(Pv)*hv).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(Pv)*hv).toFixed(3)})`,
            "--spin": 40 * (zv % 5 - 2) + "deg",
            "--size": (Sv ? 1 + zv % 4 * .2 : .3 + zv % 2 * .15) + "rem",
            "--duration": `${(1.8+7*zv%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*zv%3).toFixed(2)}s`
          }
        }
      }));

    function lh(vv, zv) {
      return Array.from({
        length: 30 + 3 * vv + (zv ? 10 : 0)
      }, ((vv, zv) => {
        const Pv = zv < 4,
          hv = Pv ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          Sv = Pv ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          ev = Pv ? 2.2 : .6 + Math.random(),
          gv = Pv ? .3 : Math.random() < .5 ? .16 : .24,
          pv = Pv ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": hv,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${Sv.toFixed(2)}rem`,
          "--length": `${ev.toFixed(2)}rem`,
          "--width": `${gv}rem`,
          "--duration": `${Math.round(pv)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Th(vv) {
      let {
        zeta: zv,
        period: Pv
      } = vv;
      const hv = 2 * Math.PI / Pv;
      return {
        w: hv,
        decay: zv * hv / Math.sqrt(1 - zv * zv)
      }
    }
    let Wh = !1;

    function wh() {
      if (Wh) return;
      Wh = !0;
      const vv = document.createElement("style");
      vv.textContent = function() {
        const vv = Th(eh),
          zv = Th(gh),
          Pv = zv => Math.exp(-vv.decay * zv) * Math.sin(vv.w * zv),
          hv = Pv(Math.atan(vv.w / vv.decay) / vv.w),
          Sv = .25,
          ev = 2.15,
          gv = Math.round(215),
          pv = [];
        for (let dv = 0; dv <= gv; dv++) {
          const vv = dv / gv * ev;
          let Nv = Math.sin(Math.min(vv, Sv) / Sv * Math.PI / 2) ** 2,
            lv = 0,
            Tv = 1,
            Wv = 1 - .2 * Nv,
            wv = 1;
          if (vv >= Sv) {
            const gv = vv - Sv,
              pv = Math.max(0, gv - .05);
            Nv = Math.exp(-pv / .05), lv = Pv(pv + eh.lead * (1 - Math.exp(-pv / eh.rush))) / hv;
            const dv = pv - gh.delay,
              av = dv <= 0 ? 0 : 1 - Math.exp(-zv.decay * dv) * (Math.cos(zv.w * dv) + zv.decay / zv.w * Math.sin(zv.w * dv)),
              sv = Math.max(0, (vv - 1.77) / (ev - 1.77));
            Tv = (1 + (gh.to - 1) * av) * (1 + .08 * sv), Wv = 1.1 + 1.5 * Math.exp(-gv / .07) + .3 * Math.exp(-(((1e3 * gv - ph) / 100) ** 2)) + .8 * sv, wv = 1 - sv ** 1.5
          }
          const av = .15 * Nv + Ph * lv,
            sv = -.1 * Nv + hh * lv,
            Cv = 3 * Nv + Sh * lv;
          pv.push(`${(dv/gv*100).toFixed(3)}% { opacity: ${wv.toFixed(3)}; transform: translate(${av.toFixed(3)}rem, ${sv.toFixed(3)}rem) rotate(${Cv.toFixed(2)}deg) scale(${Tv.toFixed(3)}); filter: brightness(${Wv.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${pv.join(" ")} }`
      }(), document.head.append(vv)
    }
    const ah = "skyblockForgeView",
      sh = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Ch extends Tv {
      constructor(vv, zv, Pv, hv, Sv) {
        super(vv, Pv, hv), this.translate = zv, this.requestForge = Sv, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (vv, zv) => {
          var Pv, hv;
          null !== this.forging || (null !== (Pv = this.owned[(0, uP.m)(zv, vv)]) && void 0 !== Pv ? Pv : 0) <= 0 || (this.selected[vv] = this.selected[vv] === zv ? null : zv, this.status = null, null === (hv = this.onPartSelected) || void 0 === hv || hv.call(this), this.emit())
        }, this.forge = vv => {
          var zv, Pv;
          const hv = this.selectedParts();
          if (null === hv || this.isPending() || !this.open) return;
          const Sv = (0, uP.k)(hv);
          if (null === Sv || Sv.coalCost > this.coal) return;
          const ev = this.preview(Sv),
            gv = null !== (zv = null === (Pv = this.onForgeStarted) || void 0 === Pv ? void 0 : Pv.call(this, ev.tier, ev.named, vv)) && void 0 !== zv ? zv : () => {};
          if (this.dropArrival(), vv) {
            const vv = {
              id: ++this.forgeId,
              preview: ev,
              timers: [],
              stopSounds: gv,
              landed: !1,
              reply: null
            };
            vv.timers.push(setTimeout((() => {
              vv.landed = !0, null !== vv.reply && (this.apply(vv.reply), vv.reply = null, this.emit())
            }), vh), setTimeout((() => {
              this.finishForge(vv)
            }), zh)), this.forging = vv
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(hv)
        }, this.snapshot = this.buildSnapshot()
      }
      la(vv) {
        var zv;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === vv.forgeMessageKind) return this.dropForge(), this.apply(vv), this.status = null, this.show(), void(null === (zv = this.onOpened) || void 0 === zv || zv.call(this));
        const Pv = this.forging;
        if (null !== Pv && null !== vv.forgeRefusalKey) this.dropForge();
        else if (null !== Pv && !Pv.landed) return void(Pv.reply = vv);
        this.apply(vv), this.emit()
      }
      apply(vv) {
        if (this.owned = vv.forgeOwnedParts, this.coal = vv.forgeCoalOwned, this.keepSelectionOwned("open" === vv.forgeMessageKind), null !== vv.forgeForgedSwordId) {
          var zv;
          const Pv = (0, uP.k)(vv.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.displayName) && void 0 !== zv ? zv : ""
            }
          }
        } else null !== vv.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: vv.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(vv) {
        this.translate = vv, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(vv) {
        var zv;
        this.forging = null;
        const Pv = this.selectedParts(),
          hv = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: vv.id,
          sameSword: null !== Pv && (null === (zv = (0, uP.k)(Pv)) || void 0 === zv ? void 0 : zv.displayName) === vv.preview.name,
          timer: hv
        }, this.emit()
      }
      dropForge() {
        const vv = this.forging;
        if (null !== vv) {
          this.forging = null;
          for (const zv of vv.timers) clearTimeout(zv);
          vv.stopSounds(), null !== vv.reply && this.apply(vv.reply)
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
        var vv, zv, Pv;
        const hv = this.selectedParts(),
          Sv = null === hv ? null : (0, uP.k)(hv),
          ev = null !== (vv = null === (zv = this.forging) || void 0 === zv ? void 0 : zv.preview) && void 0 !== vv ? vv : null === Sv ? null : this.preview(Sv);
        return {
          enabled: this.received,
          open: this.open,
          slots: uP.j.map((vv => ({
            kind: vv,
            label: this.translate(sh[vv]),
            parts: this.partsFor(vv)
          }))),
          coalOwned: this.coal,
          preview: ev,
          unformedSword: uP.f[null !== (Pv = this.selected.Blade) && void 0 !== Pv ? Pv : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((vv => vv > 0)),
          canForge: null !== ev && !ev.coalShort && !this.isPending(),
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
      preview(vv) {
        return {
          name: vv.displayName,
          lore: vv.lore,
          baseSword: vv.baseSword,
          enchantmentTier: vv.enchantmentTier,
          tier: Number(vv.enchantmentTier.slice(-1)),
          named: vv.named,
          stats: this.stats(vv),
          effects: vv.effects,
          coalCost: vv.coalCost,
          coalShort: null === this.forging && vv.coalCost > this.coal
        }
      }
      partsFor(vv) {
        const zv = [];
        for (const hv of uP.e) {
          var Pv;
          const Sv = (0, uP.m)(hv, vv),
            ev = null !== (Pv = this.owned[Sv]) && void 0 !== Pv ? Pv : 0;
          ev > 0 && zv.push({
            material: hv,
            itemName: Sv,
            owned: ev,
            selected: this.selected[vv] === hv,
            placeholder: !1
          })
        }
        if (0 === zv.length) {
          const Pv = uP.e[0];
          zv.push({
            material: Pv,
            itemName: (0, uP.m)(Pv, vv),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return zv
      }
      stats(vv) {
        const zv = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${vv.powerMultiplier.toFixed(2)}`,
          better: vv.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${vv.damageMultiplier.toFixed(2)}`,
          better: vv.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/vv.cooldownMultiplier).toFixed(2)}`,
          better: vv.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${vv.knockbackMultiplier.toFixed(2)}`,
          better: vv.knockbackMultiplier > 1
        }];
        return vv.reachBonus > 0 && zv.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${vv.reachBonus.toFixed(1)}`,
          better: !0
        }), vv.damageReduction > 0 && zv.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*vv.damageReduction)}%`,
          better: !0
        }), zv
      }
      selectedParts() {
        const {
          Blade: vv,
          Guard: zv,
          Handle: Pv
        } = this.selected;
        return null === vv || null === zv || null === Pv ? null : {
          blade: vv,
          guard: zv,
          handle: Pv
        }
      }
      keepSelectionOwned(vv) {
        for (const Pv of uP.j) {
          var zv;
          const hv = this.selected[Pv];
          if (null !== hv && (null !== (zv = this.owned[(0, uP.m)(hv, Pv)]) && void 0 !== zv ? zv : 0) > 0) continue;
          if (!vv) {
            this.selected[Pv] = null;
            continue
          }
          const Sv = [...uP.e].reverse().find((vv => {
            var zv;
            return (null !== (zv = this.owned[(0, uP.m)(vv, Pv)]) && void 0 !== zv ? zv : 0) > 0
          }));
          this.selected[Pv] = null !== Sv && void 0 !== Sv ? Sv : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const ih = "skyblockSmugglerView",
      ch = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Gh extends Tv {
      constructor(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(vv, Pv, hv), this.translate = zv, this.requestBuy = Sv, this.now = ev, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = vv => vv, this.onBought = null, this.buy = vv => {
          const zv = this.deals[vv];
          void 0 !== zv && !this.isPending() && this.open && !this.soldOut.has(vv) && this.canAfford(zv) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, vv))
        }, this.snapshot = this.buildSnapshot()
      }
      la(vv) {
        if (this.received = !0, this.day = vv.smugglerDay, this.deals = vv.smugglerDeals, this.rivets = vv.smugglerRivetsOwned, this.crests = vv.smugglerCrestsOwned, this.soldOut = new Set(vv.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + vv.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === vv.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = vv.smugglerBoughtSlot, null !== vv.smugglerBoughtSlot) {
          var zv, Pv;
          const hv = this.deals[vv.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === hv ? "" : this.dealName(hv),
              amount: String(null !== (zv = null === hv || void 0 === hv ? void 0 : hv.smugglerDealAmount) && void 0 !== zv ? zv : 0)
            }
          }, this.boughtCount++, null === (Pv = this.onBought) || void 0 === Pv || Pv.call(this)
        } else null !== vv.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: vv.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(vv, zv, Pv) {
        this.translate = vv, void 0 !== Pv && (this.itemName = Pv), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(vv) {
        if (null !== vv.smugglerDealUniqueName) return vv.smugglerDealUniqueName;
        const zv = ch[vv.smugglerDealItem];
        return void 0 === zv ? this.itemName(vv.smugglerDealItem) : this.translate(zv)
      }
      canAfford(vv) {
        return vv.smugglerDealRivets <= this.rivets && vv.smugglerDealCrests <= this.crests
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
        const vv = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return vv <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : vv < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(vv)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(vv / 60)),
          minutes: String(vv % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((vv, zv) => ({
            slot: zv,
            itemName: vv.smugglerDealItem,
            displayName: this.dealName(vv),
            enchantmentTier: vv.smugglerDealEnchantmentTier,
            amount: vv.smugglerDealAmount,
            rivets: vv.smugglerDealRivets,
            crests: vv.smugglerDealCrests,
            affordable: this.canAfford(vv),
            soldOut: this.soldOut.has(zv),
            justBought: this.boughtSlot === zv
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
    const mh = "skyblockPassageView",
      jh = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function fh(vv, zv) {
      return vv(jh[zv])
    }

    function Fh(vv, zv, Pv, hv) {
      const Sv = Math.ceil((Pv - hv) / 864e5),
        ev = fh(vv, zv);
      return Sv > 1 ? vv("skyblockGame:passageNextDays", {
        phase: ev,
        days: String(Sv)
      }) : vv("skyblockGame:passageNextSoon", {
        phase: ev
      })
    }
    class Yh extends Tv {
      constructor(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(vv, Pv, hv), this.translate = zv, this.now = Sv, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = vv => vv, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      la(vv) {
        this.message = vv, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(vv, zv, Pv) {
        this.translate = vv, void 0 !== Pv && (this.itemName = Pv), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(vv) {
        return {
          itemName: vv.passageFish,
          displayName: this.itemName(vv.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(vv.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const vv = this.message;
        return null === vv ? {
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
          phase: vv.passagePhase,
          phaseName: fh(this.translate, vv.passagePhase),
          visitors: vv.passageVisitors.map((vv => this.describe(vv))),
          resting: this.describe(vv.passageResting),
          nextPhase: vv.passageNextPhase,
          next: Fh(this.translate, vv.passageNextPhase, vv.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var nh = Pv(38083);
    const Oh = "skyblockKeepersChairView";
    class Dh extends Tv {
      constructor(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new nh.e;
        super(vv, Pv, hv), this.translate = zv, this.requestAim = Sv, this.now = ev, this.pacer = gv, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = vv => vv, this.aim = vv => {
          !this.awaitingReply && this.open && this.atChair && vv !== this.favoured && (null === vv || this.islands.some((zv => zv.keepersChairIslandId === vv && zv.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== vv && void 0 !== vv ? vv : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = gv.subscribe((() => {
          this.emit()
        }))
      }
      la(vv) {
        var zv, Pv;
        this.received = !0;
        const hv = this.favoured,
          Sv = this.atChair;
        var ev;
        return this.islands = vv.keepersChairIslands, this.favoured = vv.keepersChairFavoured, this.passage = null !== (zv = vv.keepersChairPassage) && void 0 !== zv ? zv : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (Pv = vv.keepersChairAtChair) || void 0 === Pv || Pv, "place" === vv.keepersChairMessageKind ? (!Sv && this.atChair && "refused" === (null === (ev = this.status) || void 0 === ev ? void 0 : ev.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === vv.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== vv.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: vv.keepersChairRefusalKey,
          island: null
        } : this.favoured !== hv && (this.status = null === this.favoured ? {
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
      receivePassage(vv) {
        this.received && (this.passage = vv, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(vv, zv, Pv) {
        this.translate = vv, void 0 !== Pv && (this.itemName = Pv), this.emit()
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
      islandName(vv) {
        const zv = this.islands.find((zv => zv.keepersChairIslandId === vv));
        return void 0 === zv ? vv : this.translate(zv.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const vv = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          zv = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((vv => {
            const zv = vv.keepersChairFeaturedFish;
            return {
              id: vv.keepersChairIslandId,
              name: this.translate(vv.keepersChairIslandNameKey),
              relit: vv.keepersChairIslandRelit,
              featuredFish: null === zv ? null : {
                itemName: zv,
                displayName: this.itemName(zv)
              },
              favoured: vv.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === vv ? null : {
            tone: vv.tone,
            text: this.translate(vv.key, null === vv.island ? void 0 : {
              island: this.islandName(vv.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === zv ? null : {
            phase: zv.keepersChairPassagePhase,
            phaseName: fh(this.translate, zv.keepersChairPassagePhase),
            nextPhase: zv.keepersChairPassageNextPhase,
            next: Fh(this.translate, zv.keepersChairPassageNextPhase, zv.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Kh = "skyblockReachLogView",
      Vh = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Uh = "Caught Fish",
      Rh = [1, 2, 4];

    function xh(vv, zv) {
      return vv.map((vv => ({
        ...vv,
        reachLogPageFish: vv.reachLogPageFish.map((vv => ({
          ...vv,
          reachLogFishFresh: zv(vv)
        })))
      })))
    }
    class th extends Tv {
      constructor(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new nh.e;
        super(vv, Pv, hv), this.translate = zv, this.requestOpen = Sv, this.pacer = ev, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = vv => vv, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = vv => {
          this.pages.some((zv => zv.reachLogIslandId === vv)) && (this.selected = vv, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = ev.subscribe((() => {
          this.emit()
        }))
      }
      la(vv) {
        if (this.received = !0, "status" === vv.reachLogMessageKind) return !0 === vv.reachLogNews && this.markNews(), this.serverFresh = vv.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const zv = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== vv.reachLogMessageKind)
          if (this.pageViews = null, this.pages = xh(vv.reachLogPages, (vv => vv.reachLogFishFresh || this.heldFresh.has(vv.reachLogFishItem))), this.letGoShown = vv.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, zv) this.showPages();
          else {
            for (const vv of this.pages)
              for (const zv of vv.reachLogPageFish) zv.reachLogFishFresh && this.heldFresh.add(zv.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(vv, zv, Pv) {
        this.translate = vv, this.pageViews = null, void 0 !== Pv && (this.itemName = Pv), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = xh(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var vv, zv, Pv, hv;
        const Sv = this.pages.find((vv => vv.reachLogPageFish.some((vv => vv.reachLogFishFresh))));
        if (void 0 !== Sv) return Sv.reachLogIslandId;
        if (null !== this.selected && this.pages.some((vv => vv.reachLogIslandId === this.selected))) return this.selected;
        return null !== (vv = null !== (zv = null === (Pv = this.pages.filter((vv => vv.reachLogIslandAwake)).at(-1)) || void 0 === Pv ? void 0 : Pv.reachLogIslandId) && void 0 !== zv ? zv : null === (hv = this.pages[0]) || void 0 === hv ? void 0 : hv.reachLogIslandId) && void 0 !== vv ? vv : null
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
        return this.pages.map((vv => {
          var zv;
          return {
            id: vv.reachLogIslandId,
            name: this.translate(vv.reachLogIslandNameKey),
            awake: vv.reachLogIslandAwake,
            gold: vv.reachLogPageGold,
            caught: vv.reachLogPageFish.filter((vv => vv.reachLogFishCaught && !vv.reachLogFishVisitor)).length,
            total: vv.reachLogPageFish.filter((vv => !vv.reachLogFishVisitor)).length,
            fish: vv.reachLogPageFish.map((vv => {
              const zv = vv.reachLogFishBestKg;
              return {
                itemName: vv.reachLogFishItem,
                name: vv.reachLogFishCaught ? this.itemName(vv.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: vv.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / vv.reachLogFishChance))
                }),
                best: vv.reachLogFishCaught ? null === zv ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: zv.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: vv.reachLogFishMarks,
                ribbons: Rh.map((zv => 0 !== (vv.reachLogFishRibbons & zv))),
                glimmer: 0 !== (8 & vv.reachLogFishRibbons),
                halo: 0 !== (32 & vv.reachLogFishRibbons),
                fresh: vv.reachLogFishFresh,
                visitor: vv.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (zv = vv.reachLogPageReturner) && void 0 !== zv ? zv : null)
          }
        }))
      }
      buildReturner(vv) {
        return null === vv ? null : {
          itemName: vv.reachLogReturnerFishItem,
          line: this.translate(vv.reachLogReturnerLineKey, {
            name: this.translate(vv.reachLogReturnerNameKey),
            trinket: this.translate(vv.reachLogReturnerTrinketKey)
          }),
          back: vv.reachLogReturnerBack
        }
      }
      receivePassagePhase(vv) {
        null !== this.passagePhase && this.passagePhase !== vv && (this.pagesCurrent = !1), this.passagePhase = vv
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const qh = "skyblockLampLightView";
    class Ih {
      constructor(vv, zv, Pv, hv) {
        this.zC = vv, this.translate = zv, this.requestCommand = Pv, this.pacer = hv, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.ea = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = vv => {
          vv ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = vv => {
          this.send(`buy ${vv}`)
        }, this.socket = vv => {
          this.send(`socket ${null!==vv&&void 0!==vv?vv:qv}`)
        }, this.wearTint = vv => {
          this.send(`tint ${null!==vv&&void 0!==vv?vv:qv}`)
        }, this.setSituation = vv => {
          this.situation = vv, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = hv.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = hv.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      la(vv) {
        if (this.message = vv, null !== vv.lampLightShop && (this.shop = vv.lampLightShop), "open" === vv.lampLightKind && (this.refusalKey = null), "reply" === vv.lampLightKind) {
          var zv;
          const Sv = null !== (zv = vv.lampLightReplyTag) && void 0 !== zv ? zv : null,
            ev = null !== Sv && Sv === this.offTag;
          var Pv, hv;
          if (ev ? this.settleOff() : null !== Sv && Sv !== this.awaitingTag || this.settleReply(), this.refusalKey = vv.lampLightRefusalKey, null !== vv.lampLightBought && !ev) this.sparkle = {
            id: vv.lampLightBought,
            count: (null !== (Pv = null === (hv = this.sparkle) || void 0 === hv ? void 0 : hv.count) && void 0 !== Pv ? Pv : 0) + 1
          }
        }
        vv.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === vv.lampLightKind && (this.lastGained = vv.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(vv) {
        vv !== this.atChair && (this.atChair = vv, vv && (this.refusalKey = null), this.emit())
      }
      setTranslator(vv, zv) {
        this.translate = vv, this.locale = null !== zv && void 0 !== zv ? zv : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.ea = !0
      }
      send(vv) {
        var zv;
        if (null !== this.awaitingTag || "ready" !== (null === (zv = this.message) || void 0 === zv ? void 0 : zv.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const Pv = this.nextTag();
        this.awaitingTag = Pv, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${vv} ${Pv}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const vv = this.nextTag();
        this.offTag = vv, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${vv}`)
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
        this.ea || (this.snapshot = this.buildSnapshot(), this.zC(this.snapshot))
      }
      formatLight(vv) {
        return Math.floor(vv).toLocaleString(this.locale)
      }
      formatPercent(vv) {
        const zv = 100 * vv;
        return zv >= 10 ? Math.round(zv).toLocaleString(this.locale) : zv.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(vv, zv) {
        if ("bite" === vv) return this.translate("skyblockGame:lampLightBite", {
          seconds: (zv.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === vv) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(zv.lampLightRareChance)
        });
        if ("notice" === vv) return null === zv.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(zv.lampLightNoticeChance)
        });
        const Pv = "meter" === vv ? zv.lampLightMeterCatches : zv.lampLightBloomCatches;
        return null === Pv ? null : this.translate("meter" === vv ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(Pv))
        })
      }
      oddsLines(vv, zv) {
        const Pv = (vv, zv) => {
            var Pv;
            return null !== (Pv = {
              bite: zv.lampLightBiteMs,
              rare: zv.lampLightRareChance,
              meter: zv.lampLightMeterCatches,
              bloom: zv.lampLightBloomCatches,
              notice: zv.lampLightNoticeChance
            } [vv]) && void 0 !== Pv ? Pv : 0
          },
          hv = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          Sv = [];
        for (const ev of ["bite", "rare", "meter", "bloom", "notice"]) {
          const gv = this.formatOdds(ev, vv),
            pv = this.formatOdds(ev, zv);
          if (null === gv || null === pv || "bite" !== ev && "rare" !== ev && gv === pv) continue;
          const dv = Pv(ev, zv) - Pv(ev, vv),
            Nv = hv[ev] ? dv < 0 : dv > 0;
          Sv.push({
            label: ev,
            before: gv,
            after: pv,
            tone: gv === pv ? "same" : Nv ? "better" : "worse"
          })
        }
        return Sv
      }
      charmView(vv, zv, Pv) {
        const hv = vv.lampLightCharmId.charAt(0).toUpperCase() + vv.lampLightCharmId.slice(1),
          Sv = "bloom" === this.situation;
        return {
          id: vv.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${hv}`),
          effect: this.translate(`skyblockGame:lampLightCharm${hv}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(vv.lampLightCharmCost)
          }),
          owned: vv.lampLightCharmOwned,
          affordable: Pv >= vv.lampLightCharmCost,
          socketed: zv.lampLightSocketed === vv.lampLightCharmId,
          lines: this.oddsLines(Sv ? zv.lampLightBareBloom : zv.lampLightBareOpen, Sv ? vv.lampLightCharmBloom : vv.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var vv, zv, Pv, hv;
        const Sv = this.message,
          ev = "ready" === (null === Sv || void 0 === Sv ? void 0 : Sv.lampLightStatus) ? this.shop : null,
          gv = null !== (vv = null === Sv || void 0 === Sv ? void 0 : Sv.lampLightBalance) && void 0 !== vv ? vv : 0,
          pv = this.atChair,
          dv = "loading" === (null === Sv || void 0 === Sv ? void 0 : Sv.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === Sv || void 0 === Sv ? void 0 : Sv.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          Nv = "ready" !== (null === Sv || void 0 === Sv ? void 0 : Sv.lampLightStatus) || pv ? null !== (zv = this.refusalKey) && void 0 !== zv ? zv : dv : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== Sv && "locked" !== Sv.lampLightStatus,
          status: null !== (Pv = null === Sv || void 0 === Sv ? void 0 : Sv.lampLightStatus) && void 0 !== Pv ? Pv : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(gv)
          }),
          releasing: null !== (hv = null === Sv || void 0 === Sv ? void 0 : Sv.lampLightReleasing) && void 0 !== hv && hv,
          gained: null === Sv || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === Sv || void 0 === Sv ? void 0 : Sv.lampLightStatus) && pv && !this.isPending(),
          situation: this.situation,
          shop: null === ev ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: ev.lampLightOddsRod,
              island: this.translate(ev.lampLightIslandNameKey)
            }),
            heldRod: null !== ev.lampLightHeldRod,
            charms: ev.lampLightCharms.map((vv => this.charmView(vv, ev, gv))),
            tints: ev.lampLightTints.map((vv => {
              const zv = vv.lampLightTintId,
                [Pv, hv, Sv] = vv.lampLightTintColour;
              return {
                id: zv,
                name: this.translate(`skyblockGame:lampLightTint${zv.charAt(0).toUpperCase()}${zv.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(vv.lampLightTintCost)
                }),
                owned: vv.lampLightTintOwned,
                affordable: gv >= vv.lampLightTintCost,
                wearing: ev.lampLightTint === zv,
                colour: `rgb(${Pv}, ${hv}, ${Sv})`
              }
            })),
            wearingIslandColours: null === ev.lampLightTint
          },
          notice: null === Nv ? null : this.translate(Nv),
          sparkle: this.sparkle
        }
      }
    }
    const Qh = "skyblockMagmawardView";
    class Zh {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.zC = vv, this.now = zv, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = Mv.map((() => 0)), this.wornAt = Mv.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      la(vv) {
        var zv, Pv;
        const hv = Mv.map(((zv, Pv) => !0 === vv.magmawardPiecesWorn[Pv]));
        if (!hv.includes(!0)) return this.snapshot = null, void this.zC(null);
        const Sv = this.now(),
          ev = this.snapshot;
        null === ev && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const gv = vv.magmawardFuelCarried,
          pv = !hv.includes(!1);
        let dv = null !== (zv = null === ev || void 0 === ev ? void 0 : ev.pulse) && void 0 !== zv ? zv : null,
          Nv = null !== (Pv = null === ev || void 0 === ev ? void 0 : ev.flare) && void 0 !== Pv ? Pv : null;
        vv.magmawardFuelBurned ? (dv = "burn", Nv = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = Sv, this.flareAt = Sv) : null !== ev && gv > ev.fuel && (dv = "gain", this.pulseToken++, this.pulseAt = Sv), pv && null !== ev && !ev.fullSet && (Nv = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = Sv, this.setLitAt = Sv);
        const lv = Mv.map(((vv, zv) => (hv[zv] && null !== ev && !ev.pieces[zv].worn && (this.wornTokens[zv]++, this.wornAt[zv] = Sv), {
          itemName: vv,
          worn: hv[zv],
          wornToken: this.wornTokens[zv],
          justWorn: hv[zv] && this.isPlaying(this.wornAt[zv], Sv)
        })));
        this.snapshot = {
          pieces: lv,
          wornCount: hv.filter(Boolean).length,
          fullSet: pv,
          fuel: gv,
          fuelState: gv <= 0 ? "empty" : gv <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, Sv) ? dv : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, Sv) ? Nv : null,
          flareToken: this.flareToken,
          setLit: pv && this.isPlaying(this.setLitAt, Sv),
          setLitToken: this.setLitToken
        }, this.zC(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.zC(null)
      }
      isPlaying(vv, zv) {
        return zv - vv < 1200
      }
    }
    const Ah = "skyblockGlowtideView";
    class Lh {
      constructor(vv) {
        this.zC = vv, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = vv => {
          this.arrow = vv, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      la(vv) {
        this.bloom = vv.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.zC(null))
      }
      afterRender(vv, zv) {
        const Pv = this.bloom;
        if (null === Pv || null === vv) return;
        const hv = Pv.glowtideBloomX - vv[0],
          ev = Pv.glowtideBloomZ - vv[2],
          gv = Math.hypot(hv, ev),
          pv = this.snapshot,
          dv = null !== pv && void 0 !== pv && pv.inRange ? 1 : 0,
          Nv = gv <= 12.5 + dv && vv[1] - Pv.glowtideBloomY <= 10 + dv;
        !Nv || null !== pv && void 0 !== pv && pv.inRange || this.inRangeToken++;
        const lv = {
          colour: Pv.glowtideBloomColour,
          inRange: Nv,
          distance: Math.round(gv),
          inRangeToken: this.inRangeToken
        };
        (null === pv || lv.colour !== pv.colour || lv.inRange !== pv.inRange || !Nv && lv.distance !== pv.distance) && (this.snapshot = lv, this.zC(lv));
        const Tv = Sv.d.computeShortestRotation(zv, (0, Sv.Cb)([hv, 0, ev]));
        null === this.arrow || Math.abs(Tv - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${Tv}rad)`, this.arrowTurn = Tv)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.zC(null)
      }
    }
    const Hh = "skyblockGlowMeterView";
    class Mh {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.zC = vv, this.now = zv, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      la(vv) {
        const zv = this.now(),
          {
            glowMeterFill: Pv,
            glowMeterCapacity: hv
          } = vv,
          Sv = Pv >= hv,
          ev = this.snapshot;
        null !== ev && (Sv && !ev.full && (this.fullToken++, this.fullAt = zv), ev.full && !Sv ? (this.burstToken++, this.burstAt = zv) : Pv > ev.fill && (this.gainToken++, this.gainAt = zv)), this.snapshot = {
          fill: Pv,
          GT: hv,
          ratio: Math.min(1, Math.max(0, Pv / hv)),
          full: Sv,
          rares: vv.glowMeterRares,
          ready: Sv && this.isPlaying(this.fullAt, zv),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, zv),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, zv),
          gainToken: this.gainToken
        }, this.zC(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.zC(null)
      }
      isPlaying(vv, zv) {
        return zv - vv < 2e3
      }
    }
    const yh = "skyblockHushWaitView";
    class Bh {
      constructor(vv) {
        this.zC = vv, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      la(vv) {
        let {
          hushWaitMs: zv,
          hushWaitTotalMs: Pv,
          hushWaitLines: hv
        } = vv;
        if (this.clearTimers(), this.token++, 0 === hv.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (zv <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: hv[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const Sv = Math.max(null !== Pv && void 0 !== Pv ? Pv : zv, zv),
          ev = Sv - zv,
          gv = vv => Sv * vv / hv.length,
          pv = vv => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: Sv,
              elapsedMs: ev,
              line: hv[vv],
              lineIndex: vv
            })
          };
        let dv = 0;
        for (; dv + 1 < hv.length && gv(dv + 1) <= ev;) dv++;
        pv(dv);
        for (let Nv = dv + 1; Nv < hv.length; Nv++) this.later(gv(Nv) - ev, (() => {
          pv(Nv)
        }));
        this.later(zv, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(vv) {
        this.snapshot = vv, this.zC(vv)
      }
      later(vv, zv) {
        this.timers.push(setTimeout(zv, vv))
      }
      clearTimers() {
        for (const vv of this.timers) clearTimeout(vv);
        this.timers = []
      }
    }
    const Jh = "skyblockTideChartsView",
      Eh = 36e5,
      oh = 864e5;

    function bh(vv, zv, Pv) {
      const [hv, Sv, ev, gv] = vv.tideChartArea, pv = Math.floor(zv), dv = Math.floor(Pv);
      return pv >= hv && pv <= ev && dv >= Sv && dv <= gv
    }

    function rh(vv, zv, Pv) {
      const [hv, Sv, ev, gv] = vv.tideChartWater;
      return function(vv, zv, Pv, hv, Sv, ev) {
        const gv = 4 - yv(Math.floor(Sv) - (vv - Pv), Pv);
        return 5 * yv(Math.floor(ev) - (zv - hv), hv) + gv
      }(hv, Sv, ev, gv, zv, Pv)
    }

    function kh(vv, zv, Pv) {
      const hv = vv.tideCharts;
      for (let Sv = 0; Sv < hv.length; Sv++)
        if (bh(hv[Sv], zv, Pv)) return hv[Sv];
      return null
    }

    function Xh(vv, zv, Pv) {
      const hv = Math.max(0, zv - Pv);
      return hv > oh ? vv("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(hv / oh))
      }) : hv > Eh ? vv("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(hv / Eh))
      }) : vv("skyblockGame:tideChartsTurnSoon")
    }
    class uh extends Tv {
      constructor(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(vv, Pv, hv), this.translate = zv, this.now = Sv, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.HW = vv => {
          this.picked = vv, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      la(vv) {
        const zv = this.message;
        if (null !== zv)
          for (const hv of vv.tideCharts) {
            var Pv;
            const vv = zv.tideCharts.find((vv => vv.tideChartIsland === hv.tideChartIsland)),
              Sv = hv.tideChartLit & ~(null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.tideChartLit) && void 0 !== Pv ? Pv : 0);
            void 0 !== vv && 0 !== Sv && (this.pulse = {
              island: hv.tideChartIsland,
              cells: Sv,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = vv, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(vv, zv) {
        var Pv;
        const hv = null === this.message || Number.isNaN(vv) ? null : kh(this.message, vv, zv),
          Sv = null !== (Pv = null === hv || void 0 === hv ? void 0 : hv.tideChartIsland) && void 0 !== Pv ? Pv : null,
          ev = null === hv ? -1 : function(vv, zv, Pv) {
            const [hv, Sv, ev, gv] = vv.tideChartWater;
            return function(vv, zv, Pv, hv, Sv, ev, gv) {
              return ((Sv - vv) / (Pv + gv)) ** 2 + ((ev - zv) / (hv + gv)) ** 2 <= 1
            }(hv, Sv, ev, gv, zv, Pv, 2) ? rh(vv, zv, Pv) : -1
          }(hv, vv, zv);
        return (Sv !== this.hereIsland || ev !== this.hereCell) && (this.hereIsland = Sv, this.hereCell = ev, null !== Sv && (this.lastIsland = Sv), !0)
      }
      afterRender(vv) {
        if (null === this.message) return;
        this.lastX = null === vv ? Number.NaN : vv[0], this.lastZ = null === vv ? Number.NaN : vv[2];
        const zv = this.locate(this.lastX, this.lastZ),
          Pv = this.expirePulses();
        (zv || Pv || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const vv = this.now();
        return !(!this.open || vv - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = vv, Xh(this.translate, this.message.tideChartTurnsInMs, vv - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(vv, zv) {
        const Pv = null === this.message ? null : kh(this.message, vv, zv);
        if (null === Pv) return;
        const hv = rh(Pv, vv, zv);
        0 === (Pv.tideChartPreBlank & 1 << hv) && (this.cast = {
          island: Pv.tideChartIsland,
          cell: hv,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const vv = this.now();
        let zv = !1;
        return 0 !== this.pulse.cells && vv - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, zv = !0), null !== this.cast && vv - this.cast.atMs >= 1500 && (this.cast = null, zv = !0), zv
      }
      setTranslator(vv) {
        this.translate = vv, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(vv, zv) {
        var Pv;
        return null !== (Pv = vv.tideCharts.find((vv => vv.tideChartIsland === zv))) && void 0 !== Pv ? Pv : null
      }
      describe(vv) {
        var zv, Pv, hv;
        const Sv = vv.tideChartIsland,
          ev = [];
        for (let wv = 0; wv < 25; wv++) {
          const zv = 1 << wv;
          0 !== (vv.tideChartLit & zv) ? ev.push("lit") : 0 !== (vv.tideChartClear & zv) ? ev.push("clear") : 0 !== (vv.tideChartPreBlank & zv) ? ev.push("shore") : ev.push("water")
        }
        const gv = function(vv) {
            let zv = 0;
            for (let Pv = vv >>> 0; 0 !== Pv; Pv &= Pv - 1) zv++;
            return zv
          }(vv.tideChartLit),
          pv = vv.tideChartInkCount,
          dv = this.translate(vv.tideChartIslandNameKey),
          Nv = this.translate("skyblockGame:tideChartsLit", {
            lit: String(gv),
            ink: String(pv)
          }),
          lv = null === vv.tideChartPictureNameKey ? null : this.translate(vv.tideChartPictureNameKey),
          Tv = this.hereIsland === Sv && -1 !== this.hereCell ? this.hereCell : null,
          Wv = [`${dv}: ${Nv}.`];
        if (null !== lv && Wv.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: lv
          })), null !== Tv) {
          const vv = Math.floor(Tv / 5) + 1,
            zv = Tv % 5 + 1;
          Wv.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(vv),
            column: String(zv)
          }))
        }
        return {
          island: Sv,
          islandName: dv,
          cells: ev,
          hereCell: Tv,
          lit: gv,
          ink: pv,
          litText: Nv,
          pictureName: lv,
          gridLabel: Wv.join(" "),
          pulseCells: this.pulse.island === Sv ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (zv = this.cast) || void 0 === zv ? void 0 : zv.island) === Sv ? this.cast.cell : null,
          castToken: null !== (Pv = null === (hv = this.cast) || void 0 === hv ? void 0 : hv.token) && void 0 !== Pv ? Pv : 0
        }
      }
      buildSnapshot() {
        var vv, zv, Pv;
        const hv = this.message;
        if (null === hv || 0 === hv.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const Sv = this.findChart(hv, this.hereIsland),
          ev = null !== (vv = null !== (zv = null !== (Pv = this.findChart(hv, this.open ? this.picked : null)) && void 0 !== Pv ? Pv : Sv) && void 0 !== zv ? zv : this.findChart(hv, this.lastIsland)) && void 0 !== vv ? vv : hv.tideCharts[0],
          gv = null === Sv ? null : this.describe(Sv);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: gv,
          card: ev === Sv ? gv : this.describe(ev),
          turnsText: Xh(this.translate, hv.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(hv.tideChartBookCount)
          }),
          tabs: hv.tideCharts.map((vv => ({
            island: vv.tideChartIsland,
            name: this.translate(vv.tideChartIslandNameKey),
            selected: vv.tideChartIsland === ev.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const vS = "skyblockRegularsView",
      zS = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      PS = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function hS(vv, zv) {
      return "given" === vv ? zv.given : "owed" === vv ? zv.owed : zv.goal
    }
    class SS extends Tv {
      constructor(vv, zv, Pv, hv) {
        super(vv, Pv, hv), this.translate = zv, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = vv => vv, this.openIsland = vv => {
          this.selected = vv, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = vv => {
          this.selected = vv, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      la(vv) {
        this.message = vv, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const vv = this.openedFromReachLog;
        return this.openedFromReachLog = !1, vv
      }
      setTranslator(vv, zv, Pv) {
        this.translate = vv, void 0 !== Pv && (this.itemName = Pv), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(vv, zv, Pv) {
        return {
          text: this.translate(hS(vv, zv), Pv),
          given: "given" === vv
        }
      }
      describeRegular(vv, zv) {
        const Pv = this.translate,
          hv = null !== vv.regularKg,
          Sv = vv.regularMeetings,
          ev = hv ? 0 === Sv ? Pv("skyblockGame:regularsNotMet") : 1 === Sv ? Pv("skyblockGame:regularsMeetingsOne") : Pv("skyblockGame:regularsMeetings", {
            count: Sv
          }) : "";
        return {
          id: vv.regularId,
          name: Pv(vv.regularNameKey),
          line: Pv(vv.regularLineKey),
          itemName: vv.regularFishItem,
          fishName: this.itemName(vv.regularFishItem),
          tagged: hv,
          size: null === vv.regularKg ? Pv("skyblockGame:regularsNotTagged") : Pv("skyblockGame:regularsSize", {
            kg: vv.regularKg.toFixed(1)
          }),
          meetings: ev,
          chance: Pv("skyblockGame:regularsChance", {
            count: vv.regularOneInCasts
          }),
          resting: vv.regularRestingToday,
          gifts: [{
            text: Pv("skyblockGame:regularsGiftFlare"),
            given: Sv >= 3
          }, this.describeGift(vv.regularTintGift, zS, {
            tint: Pv(vv.regularTintNameKey)
          })],
          history: [...vv.regularHistory].reverse().map((vv => {
            const hv = vv.regularMeetingKg.toFixed(1),
              Sv = zv - vv.regularMeetingDay;
            return Sv <= 0 ? Pv("skyblockGame:regularsToday", {
              kg: hv
            }) : Pv("skyblockGame:regularsDaysAgo", {
              days: Sv,
              kg: hv
            })
          }))
        }
      }
      describeIsland(vv, zv) {
        return {
          id: vv.regularsIslandId,
          name: this.translate(vv.regularsIslandNameKey),
          charm: this.describeGift(vv.regularsCharmGift, PS, {
            charm: this.translate(vv.regularsCharmNameKey)
          }),
          regulars: vv.regularsList.map((vv => this.describeRegular(vv, zv)))
        }
      }
      buildSnapshot() {
        var vv, zv, Pv, hv;
        const Sv = this.message;
        if (null === Sv) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const ev = Sv.regularsIslands.map((vv => this.describeIsland(vv, Sv.regularsToday))),
          gv = null !== (vv = null !== (zv = null === (Pv = ev.find((vv => vv.id === this.selected))) || void 0 === Pv ? void 0 : Pv.id) && void 0 !== zv ? zv : null === (hv = ev[0]) || void 0 === hv ? void 0 : hv.id) && void 0 !== vv ? vv : "";
        return {
          enabled: !0,
          open: this.open,
          selected: gv,
          islands: ev
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const eS = "skyblockHiddenWatersView";
    class gS {
      constructor(vv) {
        this.zC = vv, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      la(vv) {
        this.snapshot = function(vv) {
          const [zv, Pv] = vv.hiddenWatersMapSize, hv = (vv, hv) => ({
            left: 1 - vv / zv,
            top: hv / Pv
          }), Sv = new Map;
          for (const [gv, pv] of vv.hiddenWatersGlimpses) {
            var ev;
            const vv = null !== (ev = Sv.get(gv)) && void 0 !== ev ? ev : [];
            vv.push(pv), Sv.set(gv, vv)
          }
          return {
            found: vv.hiddenWatersFound,
            total: vv.hiddenWatersTotal,
            aspect: Pv / zv,
            pins: vv.hiddenWatersPins.map((vv => {
              let [zv, Pv] = vv;
              return hv(zv, Pv)
            })),
            islands: vv.hiddenWatersIslands.map((vv => {
              let [Sv, ev, gv, pv] = vv;
              const {
                left: dv,
                top: Nv
              } = hv(gv + 1, ev);
              return {
                left: dv,
                top: Nv,
                width: (gv + 1 - Sv) / zv,
                height: (pv + 1 - ev) / Pv
              }
            })),
            glimpses: Sv
          }
        }(vv), this.zC(this.snapshot)
      }
    }
    const pS = "skyblockDialogueView";
    class dS extends Tv {
      constructor(vv, zv, Pv, hv, Sv) {
        let ev = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(vv, Pv, hv), this.translate = zv, this.requestDialogue = Sv, this.now = ev, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = vv => {
          this.selection = {
            kind: "quest",
            questId: vv
          }, this.request(), this.show()
        }, this.selectCharacter = vv => {
          this.selection = {
            kind: "character",
            npcId: vv
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      la(vv) {
        this.received = !0, this.scripts = vv.questDialogueScripts, this.speakers = new Map(vv.questDialogueSpeakers.map((vv => [vv.dialogueSpeakerId, vv]))), this.emit()
      }
      setTranslator(vv) {
        this.translate = vv, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const vv = this.now();
        vv >= this.requestAvailableAt && (this.requestAvailableAt = vv + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var vv;
        const zv = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...zv,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const Pv = this.selection;
        if ("quest" === Pv.kind) {
          const vv = this.scripts.find((vv => vv.dialogueQuestId === Pv.questId));
          return {
            ...zv,
            characters: [],
            questFocus: Pv.questId,
            conversations: vv ? [this.conversation(vv)] : []
          }
        }
        const hv = [];
        for (let ev = this.scripts.length - 1; ev >= 0; ev--) {
          const vv = this.scripts[ev].dialogueLines;
          for (let zv = vv.length - 1; zv >= 0; zv--) hv.includes(vv[zv].dialogueSpeakerId) || hv.push(vv[zv].dialogueSpeakerId)
        }
        const Sv = null !== Pv.npcId && hv.includes(Pv.npcId) ? Pv.npcId : null !== (vv = hv[0]) && void 0 !== vv ? vv : null;
        return {
          ...zv,
          characters: hv.map((vv => {
            var zv, Pv;
            return {
              id: vv,
              styling: null !== (zv = null === (Pv = this.speakers.get(vv)) || void 0 === Pv ? void 0 : Pv.dialogueSpeakerStyling) && void 0 !== zv ? zv : vv,
              selected: vv === Sv
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((vv => vv.dialogueLines.some((vv => vv.dialogueSpeakerId === Sv)))).map((vv => this.conversation(vv))).reverse()
        }
      }
      conversation(vv) {
        let zv = null;
        return {
          questId: vv.dialogueQuestId,
          questName: this.translate(vv.dialogueQuestNameKey),
          completed: vv.dialogueQuestCompleted,
          lines: vv.dialogueLines.map(((vv, Pv) => {
            var hv;
            const Sv = vv.dialogueSpeakerId === zv || null === (hv = this.speakers.get(vv.dialogueSpeakerId)) || void 0 === hv ? void 0 : hv.dialogueSpeakerStyling;
            return zv = vv.dialogueSpeakerId, {
              key: Pv,
              display: {
                line: {
                  translationKey: vv.dialogueLineKey,
                  params: this.params(vv.dialogueLineParams)
                },
                speakerName: Sv,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(vv) {
        if (void 0 !== vv) return Object.fromEntries(Object.entries(vv).map((vv => {
          let [zv, Pv] = vv;
          return [zv, "string" === typeof Pv ? Pv : this.translate(Pv.translationKey)]
        })))
      }
    }
    var NS = Pv(602),
      lS = Pv(1250),
      TS = Pv(73);
    const WS = "skyblockAutographsView";

    function wS(vv) {
      const zv = NS.j[vv];
      return {
        label: zv.chatTag.map((vv => vv.str)).join(""),
        icon: zv.icon,
        colour: zv.mainRGB
      }
    }
    class aS extends Tv {
      constructor(vv) {
        let zv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = zv, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      la(vv) {
        this.signatures = vv.autographSignatures, vv.autographOpen ? this.show() : this.emit()
      }
      setTranslator(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = zv, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var vv;
        const zv = null !== (vv = this.signatures) && void 0 !== vv ? vv : [],
          Pv = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          hv = [...zv].sort(((vv, zv) => Number(null !== zv.autographRank) - Number(null !== vv.autographRank) || zv.autographSignedAtMs - vv.autographSignedAtMs)).map((vv => ({
            key: `${vv.autographSignedAtMs}|${vv.autographSignerName}`,
            name: (0, lS.c)(vv.autographSignerName, !TS.featureFlags.canSeeRealPlayerNames),
            rank: null === vv.autographRank ? null : wS(vv.autographRank),
            signedOn: Pv.format(vv.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: hv,
          total: hv.length,
          rankTotal: hv.filter((vv => null !== vv.rank)).length
        }
      }
    }
    const sS = "skyblockHudView",
      CS = () => {},
      iS = {
        getItem: () => null,
        setItem: CS,
        removeItem: CS
      };
    class cS {
      constructor(vv) {
        let {
          translate: zv,
          translateWithIcons: Pv,
          setMenuOpen: hv = CS,
          dismissMenu: Sv = () => {
            hv(!1)
          },
          publishSkills: ev = CS,
          publishQuests: gv = CS,
          publishQuestNotification: pv = CS,
          publishDungeons: dv = CS,
          publishCollections: Nv = CS,
          publishMap: lv = CS,
          publishHud: Tv = CS,
          publishPortalTransit: Wv = CS,
          publishDailyReward: av = CS,
          publishMailbox: sv = CS,
          publishQuestGraph: Cv = CS,
          publishForge: iv = CS,
          publishSmuggler: cv = CS,
          publishKeepersChair: Gv = CS,
          publishReachLog: mv = CS,
          publishLampLight: jv = CS,
          publishMagmaward: fv = CS,
          publishGlowtide: Yv = CS,
          publishGlowMeter: nv = CS,
          publishHushWait: Ov = CS,
          publishPassage: Dv = CS,
          publishTideCharts: Kv = CS,
          publishRegulars: Vv = CS,
          publishHiddenWaters: Uv = CS,
          publishDialogue: Rv = CS,
          publishAutographs: xv = CS,
          isLoadingScreenUp: tv = () => !1,
          onDailyRewardCoinLanded: qv = CS,
          onDailyRewardStarted: Iv = CS,
          onDailyRewardFinished: Qv = CS,
          onDailyRewardItemLanded: Zv = CS,
          onMailboxStarted: Av = CS,
          journeyStorage: Lv = iS,
          requestTracking: Hv = CS,
          requestTravel: Mv = CS,
          requestDungeonEnter: yv = CS,
          requestQuestJump: Bv = CS,
          requestQuestArrive: Jv = CS,
          requestForge: Ev = CS,
          requestSmuggle: ov = CS,
          requestKeepersChairAim: bv = CS,
          requestReachLogOpen: rv = CS,
          requestLampLight: kv = CS,
          requestDialogue: Xv = CS
        } = vv;
        this.navigation = void 0, this.map = void 0, this.compass = new Fv, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new nh.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = vv => vv, this.close = () => {
          for (const vv of this.panels) vv.close()
        }, this.setMenuOpen = hv, this.publishHud = Tv, this.portalTransit = new AP(Wv, Lv), this.magmaward = new Zh(fv), this.glowtide = new Lh(Yv), this.glowMeter = new Mh(nv), this.hushWait = new Bh(Ov), this.dailyReward = new MP(av, (() => tv() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (vv => {
          this.quests.setNotificationsHeld(vv)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), qv, Iv, Qv, Zv);
        const uv = vv => {
          this.panels.some((vv => vv.isOpen())) || (vv ? Sv() : this.setMenuOpen(!1))
        };
        this.skills = new gP(ev, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), zv, void 0, void 0, uv), this.quests = new TP(gv, Hv, zv, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, uv, pv), this.dungeons = new aP(dv, zv, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, uv, yv), this.collections = new IP(Nv, zv, (() => {
          this.beforePanelOpen(this.collections)
        }), uv), this.map = new wv(lv, Mv, zv, (() => {
          this.beforePanelOpen(this.map)
        }), uv), this.questGraph = new XP(Cv, zv, (() => {
          this.beforePanelOpen(this.questGraph)
        }), uv, Bv, Jv, Lv), this.forge = new Ch(iv, zv, (() => {
          this.beforePanelOpen(this.forge)
        }), uv, Ev), this.smuggler = new Gh(cv, zv, (() => {
          this.beforePanelOpen(this.smuggler)
        }), uv, ov), this.lampLight = new Ih(jv, zv, kv, this.commandPacer), this.keepersChair = new Dh(Gv, zv, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (vv => {
          this.lampLight.onChairClosed(), uv(vv)
        }), bv, Date.now, this.commandPacer), this.reachLog = new th(mv, zv, (() => {
          this.beforePanelOpen(this.reachLog)
        }), uv, rv, this.commandPacer), this.passage = new Yh(Dv, zv, (() => {
          this.beforePanelOpen(this.passage)
        }), uv), this.tideCharts = new uh(Kv, zv, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), uv), this.regulars = new SS(Vv, zv, (() => {
          this.beforePanelOpen(this.regulars)
        }), (vv => {
          this.regulars.takeReturnToReachLog() && !vv && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), uv(vv)
        })), this.hiddenWaters = new gS(Uv), this.dialogue = new dS(Rv, zv, (() => {
          this.beforePanelOpen(this.dialogue)
        }), uv, Xv), this.autographs = new aS(xv, (() => {
          this.beforePanelOpen(this.autographs)
        }), uv), this.mailbox = new EP(sv, (() => tv() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), Av), this.quests.translateWithIcons = null !== Pv && void 0 !== Pv ? Pv : null, this.skills.onLevelUp = vv => {
          this.quests.notify(vv)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new SP(this.map, this.quests, this.compass, zv)
      }
      getHudSnapshot() {
        const vv = this.hudSnapshot,
          zv = this.dailyReward.getHeldCoins();
        return null === vv || zv <= 0 || !("hudPurseCoins" in vv) ? vv : {
          ...vv,
          hudPurseCoins: Math.max(0, vv.hudPurseCoins - zv)
        }
      }
      receiveHud(vv) {
        this.hudSnapshot = vv, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(vv) {
        this.setMenuOpen(!0);
        const zv = vv === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = vv;
        for (const Pv of this.panels) Pv === vv || zv && Pv === this.reachLog || Pv.close();
        this.openingPanel = null
      }
      setTranslator(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zv => this.resolveItemName(zv, vv);
        this.quests.translateWithIcons = null !== Pv && void 0 !== Pv ? Pv : null, this.navigation.setTranslator(vv, zv), this.lampLight.setTranslator(vv, zv), this.mailbox.setItemName(hv);
        for (const Sv of this.panels) Sv.setTranslator(vv, zv, hv)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const vv of this.panels) vv.dispose()
      }
    }
    var GS = Pv(1035),
      mS = Pv.n(GS),
      jS = Pv(22),
      fS = Pv(36132),
      FS = Pv(3148),
      YS = Pv(1871),
      nS = Pv(1858),
      OS = Pv(9027),
      DS = Pv(1175),
      KS = Pv(1439),
      VS = Pv(1082);

    function US(vv) {
      let {
        controller: zv,
        minimap: Pv,
        children: hv
      } = vv;
      const ev = (0, KS.j)(sS, zv.getHudSnapshot()),
        [gv, pv] = (0, nv.useState)(zv.skills.getSnapshot().overallLevel);
      (0, KS.g)(eP, (vv => {
        pv(vv.overallLevel)
      }));
      const dv = (0, nv.useRef)(null);
      (0, KS.g)(HP, (vv => {
        ! function(vv, zv) {
          if (null === vv || "function" !== typeof vv.animate) return;
          const Pv = zv ? 1.35 : 1.15;
          vv.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${Pv})`
          }, {
            transform: "scale(1)"
          }], {
            duration: zv ? 320 : 160,
            easing: "ease-out"
          }), vv.classList.toggle("Receiving", !zv), zv && (vv.classList.remove("Shine"), vv.offsetWidth, vv.classList.add("Shine"))
        }(dv.current, vv)
      }));
      const {
        t: Nv
      } = (0, DS.x)(), {
        isTouchScreen: lv
      } = (0, jS.i)(["isTouchScreen"]), [Tv, Wv] = (0, nv.useState)(null);
      return (0, FS.j)(Tv, ".SkyblockRightHud"), null !== ev || Pv ? (0, VS.jsx)(fS.g, {
        placement: "topRight",
        children: (0, VS.jsxs)("div", {
          className: mS()("SkyblockRightHud", {
            TouchScreen: lv
          }),
          children: [Pv, null !== ev && (0, VS.jsxs)("div", {
            ref: Wv,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in ev ? (0, VS.jsx)("div", {
              className: "SkyblockHudHelp",
              children: ev.hudHelpText
            }) : (0, VS.jsxs)(VS.Fragment, {
              children: [(0, VS.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, VS.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, VS.jsx)("strong", {
                    style: {
                      color: Sv.L.cyanUiText
                    },
                    children: Nv(ev.hudZoneNameKey)
                  }), null !== gv && (0, VS.jsx)("span", {
                    style: {
                      color: Sv.L.goldUiText
                    },
                    children: Nv("skyblockGame:level", {
                      level: (0, OS.f)(gv)
                    })
                  })]
                }), (0, VS.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: dv,
                  children: [(0, VS.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, VS.jsx)(YS.b, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, OS.f)(ev.hudPurseCoins)]
                })]
              }), ev.hudClockText.length > 0 && (0, VS.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, VS.jsx)(nS.c, {
                  text: ev.hudClockText
                })
              })]
            }), hv, "hudZoneNameKey" in ev && (0, VS.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function RS(vv) {
      let {
        icon: zv
      } = vv;
      const Pv = (0, nv.useCallback)((vv => {
        null === vv || void 0 === vv || vv.replaceChildren(Jz(zv))
      }), [zv]);
      return (0, VS.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: Pv
      })
    }

    function xS(vv) {
      let {
        controller: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)();
      return (0, VS.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: zv.display.mountPlayer,
        title: Pv("skyblockGame:mapYouAreHere"),
        children: (0, VS.jsx)(RS, {
          icon: "player"
        })
      })
    }
    const tS = Pv(38090),
      qS = Object.fromEntries(tS.keys().map((vv => [vv.replace(/^\.\/(.*)\.png$/, "$1"), tS(vv)])));

    function IS(vv, zv) {
      var Pv;
      return null !== (Pv = qS[vv]) && void 0 !== Pv ? Pv : qS[zv]
    }

    function QS(vv) {
      let {
        imageKey: zv,
        fallbackImageKey: Pv,
        geometryKey: hv,
        alt: Sv,
        className: ev
      } = vv;
      const [gv, pv] = (0, nv.useState)((() => function(vv, zv) {
        return [{
          id: 0,
          imageKey: vv,
          geometryKey: zv,
          phase: "shown"
        }]
      }(zv, hv))), dv = function(vv, zv, Pv) {
        const hv = vv[vv.length - 1];
        if (hv.imageKey === zv && hv.geometryKey === Pv) return vv;
        const Sv = {
          id: hv.id + 1,
          imageKey: zv,
          geometryKey: Pv,
          phase: "entering"
        };
        return hv.geometryKey === Pv ? [{
          ...hv,
          phase: "leaving"
        }, Sv] : [Sv]
      }(gv, zv, hv);
      return dv !== gv && pv(dv), (0, VS.jsx)(VS.Fragment, {
        children: dv.map((vv => (0, VS.jsx)("img", {
          className: mS()("SkyblockMapTerrainImage", ev, {
            Entering: "entering" === vv.phase,
            Leaving: "leaving" === vv.phase
          }),
          src: IS(vv.imageKey, Pv),
          alt: "leaving" === vv.phase ? "" : Sv,
          onAnimationEnd: () => {
            pv((zv => function(vv, zv) {
              return vv.flatMap((vv => vv.id !== zv ? [vv] : "leaving" === vv.phase ? [] : [{
                ...vv,
                phase: "shown"
              }]))
            }(zv, vv.id)))
          }
        }, vv.id)))
      })
    }
    var ZS = Pv(4285),
      AS = Pv(1442);

    function LS(vv) {
      if ("Tab" !== vv.key) return;
      const zv = Array.from(vv.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        Pv = zv.indexOf(document.activeElement);
      var hv;
      if (vv.shiftKey && Pv <= 0) vv.preventDefault(), null === (hv = zv.at(-1)) || void 0 === hv || hv.focus();
      else if (!vv.shiftKey && (-1 === Pv || Pv === zv.length - 1)) {
        var Sv;
        vv.preventDefault(), null === (Sv = zv[0]) || void 0 === Sv || Sv.focus()
      }
    }

    function HS() {
      const vv = (0, nv.useRef)(null);
      return (0, nv.useCallback)((zv => {
        var Pv;
        zv ? (vv.current = document.activeElement, zv.focus()) : null === (Pv = vv.current) || void 0 === Pv || Pv.focus()
      }), [])
    }

    function MS(vv) {
      let {
        percent: zv,
        label: Pv,
        levelUpToken: hv,
        colour: Sv
      } = vv;
      return (0, VS.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": Pv,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": zv,
        "aria-valuetext": Pv,
        children: [(0, VS.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${zv/100})`
          }
        }), null !== hv && void 0 !== hv && (0, VS.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": Sv
          }
        }, hv)]
      })
    }

    function yS(vv) {
      let {
        mount: zv
      } = vv;
      return (0, VS.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: zv,
        hidden: !0,
        children: (0, VS.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, VS.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, VS.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function BS(vv, zv, Pv, hv) {
      (0, nv.useLayoutEffect)((() => {
        const Sv = vv.current;
        if (!Pv || null === zv || void 0 === zv || !zv.local || !Sv) return;
        const ev = Array.from(Sv.querySelectorAll(".SkyblockMapNode")),
          gv = [...zv.points, ...zv.portals],
          pv = () => {
            const vv = Sv.clientWidth,
              Pv = Sv.clientHeight,
              pv = ev.map(((Sv, ev) => {
                const pv = gv[ev];
                return {
                  id: pv.id,
                  portal: ev >= zv.points.length,
                  x: pv.position[0] * vv / 100,
                  y: pv.position[1] * Pv / 100,
                  width: Sv.offsetWidth / hv,
                  height: Sv.offsetHeight / hv
                }
              })),
              dv = new Map(gv.map(((vv, zv) => [vv.id, ev[zv]])));
            for (const zv of function(vv, zv, Pv) {
                const hv = [],
                  Sv = [...vv].sort(((vv, zv) => Number(zv.portal) - Number(vv.portal) || vv.id.localeCompare(zv.id)));
                for (const ev of Sv) {
                  const vv = vv => Math.max(ev.width / 2, Math.min(zv - ev.width / 2, vv)),
                    Sv = vv => Math.max(ev.height / 2, Math.min(Pv - ev.height / 2, vv)),
                    gv = [vv(ev.x)],
                    pv = [Sv(ev.y)];
                  for (const zv of hv) gv.push(vv(zv.x - (zv.width + ev.width) / 2 - 4), vv(zv.x + (zv.width + ev.width) / 2 + 4)), pv.push(Sv(zv.y - (zv.height + ev.height) / 2 - 4), Sv(zv.y + (zv.height + ev.height) / 2 + 4));
                  let dv = {
                      ...ev,
                      x: gv[0],
                      y: pv[0]
                    },
                    Nv = 1 / 0,
                    lv = 1 / 0;
                  for (const zv of new Set(gv))
                    for (const vv of new Set(pv)) {
                      let Pv = 0;
                      for (const gv of hv) Pv += Math.max(0, (ev.width + gv.width) / 2 + 4 - Math.abs(zv - gv.x)) * Math.max(0, (ev.height + gv.height) / 2 + 4 - Math.abs(vv - gv.y));
                      const Sv = (zv - ev.x) ** 2 + (vv - ev.y) ** 2;
                      (Pv < Nv || Pv === Nv && Sv < lv) && (dv = {
                        ...ev,
                        x: zv,
                        y: vv
                      }, Nv = Pv, lv = Sv)
                    }
                  hv.push(dv)
                }
                return hv
              }(pv, vv, Pv)) {
              const vv = dv.get(zv.id);
              vv.style.left = `${zv.x}px`, vv.style.top = `${zv.y}px`
            }
          };
        pv();
        const dv = new ResizeObserver(pv);
        dv.observe(Sv);
        for (const vv of ev) dv.observe(vv);
        return () => {
          dv.disconnect()
        }
      }), [vv, zv, Pv, hv])
    }
    const JS = {
        zoom: 1,
        x: 0,
        y: 0
      },
      ES = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function oS(vv, zv, Pv) {
      return Math.min(Pv, Math.max(zv, vv))
    }

    function bS(vv, zv, Pv) {
      const hv = Math.min(1, Pv * zv / vv),
        Sv = Math.min(1, vv / (Pv * zv));
      return {
        x0: (1 - hv) / 2,
        y0: (1 - Sv) / 2,
        x1: (1 + hv) / 2,
        y1: (1 + Sv) / 2
      }
    }

    function rS(vv, zv, Pv, hv) {
      const Sv = zv * (hv - Pv);
      if (Sv <= 1) return .5 - zv * (Pv + hv) / 2;
      const ev = .45 * Math.min(1, Sv - 1);
      return oS(vv, 1 - zv * hv - ev, ev - zv * Pv)
    }

    function kS(vv, zv) {
      const Pv = oS(vv.zoom, 1, 12);
      return {
        zoom: Pv,
        x: rS(vv.x, Pv, zv.x0, zv.x1),
        y: rS(vv.y, Pv, zv.y0, zv.y1)
      }
    }

    function XS(vv, zv, Pv, hv) {
      let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : ES;
      const ev = oS(vv.zoom * zv, 1, 12),
        gv = ev / vv.zoom;
      return kS({
        zoom: ev,
        x: Pv - (Pv - vv.x) * gv,
        y: hv - (hv - vv.y) * gv
      }, Sv)
    }

    function uS(vv, zv, Pv, hv) {
      const [Sv, ev] = (0, nv.useState)(JS);
      (0, nv.useEffect)((() => {
        ev(JS)
      }), [Pv]), (0, nv.useEffect)((() => {
        const Pv = vv.current;
        if (!zv || !Pv) return;
        const Sv = () => bS(Pv.clientWidth, Pv.clientHeight, hv),
          gv = vv => {
            const zv = Pv.getBoundingClientRect();
            return {
              x: (vv.clientX - zv.left) / zv.width,
              y: (vv.clientY - zv.top) / zv.height
            }
          },
          pv = new Map;
        let dv = {
            x: 0,
            y: 0
          },
          Nv = !1,
          lv = 0;
        const Tv = vv => {
            vv.preventDefault();
            const zv = vv.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * vv.deltaY : vv.deltaY,
              Pv = gv(vv);
            ev((vv => XS(vv, Math.exp(.0015 * -zv), Pv.x, Pv.y, Sv())))
          },
          Wv = vv => {
            "mouse" === vv.pointerType && 0 !== vv.button || (pv.set(vv.pointerId, gv(vv)), 1 === pv.size && (dv = {
              x: vv.clientX,
              y: vv.clientY
            }, Nv = !1), lv = 0)
          },
          wv = vv => {
            const zv = pv.get(vv.pointerId);
            if (!zv) return;
            const hv = gv(vv);
            if (pv.set(vv.pointerId, hv), 2 === pv.size) {
              const [vv, zv] = [...pv.values()], Pv = Math.hypot(vv.x - zv.x, vv.y - zv.y);
              if (lv > 0) {
                const hv = Pv / lv;
                ev((Pv => XS(Pv, hv, (vv.x + zv.x) / 2, (vv.y + zv.y) / 2, Sv())))
              }
              return lv = Pv, void(Nv = !0)
            }!Nv && Math.hypot(vv.clientX - dv.x, vv.clientY - dv.y) < 4 || (Nv || (Nv = !0, Pv.setPointerCapture(vv.pointerId)), ev((vv => function(vv, zv, Pv) {
              let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ES;
              return kS({
                zoom: vv.zoom,
                x: vv.x + zv,
                y: vv.y + Pv
              }, hv)
            }(vv, hv.x - zv.x, hv.y - zv.y, Sv()))))
          },
          av = vv => {
            pv.delete(vv.pointerId), lv = 0
          },
          sv = vv => {
            Nv && (vv.stopPropagation(), vv.preventDefault(), Nv = !1)
          },
          Cv = new ResizeObserver((() => {
            ev((vv => kS(vv, Sv())))
          }));
        return Cv.observe(Pv), Pv.addEventListener("wheel", Tv, {
          passive: !1
        }), Pv.addEventListener("pointerdown", Wv), Pv.addEventListener("pointermove", wv), Pv.addEventListener("pointerup", av), Pv.addEventListener("pointercancel", av), Pv.addEventListener("click", sv, !0), () => {
          Cv.disconnect(), Pv.removeEventListener("wheel", Tv), Pv.removeEventListener("pointerdown", Wv), Pv.removeEventListener("pointermove", wv), Pv.removeEventListener("pointerup", av), Pv.removeEventListener("pointercancel", av), Pv.removeEventListener("click", sv, !0)
        }
      }), [vv, zv, Pv, hv]);
      return {
        view: Sv,
        zoomBy: zv => {
          const Pv = vv.current;
          Pv && ev((vv => XS(vv, zv, .5, .5, bS(Pv.clientWidth, Pv.clientHeight, hv))))
        }
      }
    }

    function ve(vv) {
      var zv, Pv, hv, Sv;
      let {
        controller: ev,
        navigation: gv
      } = vv;
      const pv = (0, KS.j)(Wv, ev.getSnapshot()),
        {
          t: dv
        } = (0, DS.x)(),
        Nv = HS(),
        lv = pv.presentation,
        Tv = (0, nv.useRef)(null),
        wv = (0, nv.useRef)(null),
        av = Boolean(pv.open && (null === lv || void 0 === lv ? void 0 : lv.local) && lv.background),
        sv = uS(Tv, av, `${pv.open}|${pv.tab}|${null===lv||void 0===lv||null===(zv=lv.background)||void 0===zv?void 0:zv.geometryKey}`, null !== (Pv = null === lv || void 0 === lv || null === (hv = lv.background) || void 0 === hv ? void 0 : hv.ratio) && void 0 !== Pv ? Pv : 2);
      if (BS(wv, lv, pv.open, sv.view.zoom), !lv || !pv.open) return null;
      const Cv = lv.local ? lv.background : null,
        iv = {
          "--map-ratio": String(null !== (Sv = null === Cv || void 0 === Cv ? void 0 : Cv.ratio) && void 0 !== Sv ? Sv : 2),
          backgroundColor: null === Cv || void 0 === Cv ? void 0 : Cv.colour
        },
        cv = {
          "--map-zoom": String(sv.view.zoom),
          transform: `translate(${100*sv.view.x}%, ${100*sv.view.y}%) scale(${sv.view.zoom})`
        };
      return (0, VS.jsx)(ZS.c, {
        show: pv.open,
        close: ev.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: Nv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, VS.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, VS.jsx)("h2", {
                id: "skyblockMapTitle",
                children: dv("skyblockGame:map")
              }), lv.minimap && (0, VS.jsx)("p", {
                children: lv.minimap.caption
              })]
            }), (0, VS.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((vv => (0, VS.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": vv === pv.tab ? "true" : void 0,
                className: mS()({
                  Selected: vv === pv.tab
                }),
                "aria-pressed": vv === pv.tab,
                onClick: () => {
                  ev.selectTab(vv)
                },
                children: dv("local" === vv ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, vv)))
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              onClick: ev.dismiss
            })]
          }), (0, VS.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, VS.jsxs)("div", {
              ref: Tv,
              className: mS()("SkyblockMapCanvas", {
                Local: lv.local,
                Overview: !lv.local,
                Zoomed: sv.view.zoom > 1
              }),
              style: iv,
              children: [(0, VS.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: av ? cv : void 0,
                children: (0, VS.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: wv,
                  children: [Cv && (0, VS.jsx)(QS, {
                    className: "SkyblockMapTerrain",
                    imageKey: Cv.imageKey,
                    fallbackImageKey: Cv.fallbackImageKey,
                    geometryKey: Cv.geometryKey,
                    alt: Cv.label
                  }), lv.local && (0, VS.jsx)(yS, {
                    mount: gv.display.mountMapSearchArea
                  }), !lv.local && (0, VS.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: lv.connections.map((vv => (0, VS.jsx)("line", {
                      className: mS()({
                        Explored: vv.explored
                      }),
                      x1: vv.start[0],
                      y1: vv.start[1],
                      x2: vv.end[0],
                      y2: vv.end[1]
                    }, vv.id)))
                  }), lv.points.map((vv => {
                    const zv = !lv.local && vv.thumbnail ? qS[vv.thumbnail] : void 0;
                    return (0, VS.jsxs)("div", {
                      className: mS()("SkyblockMapNode", {
                        Current: vv.current
                      }),
                      style: {
                        left: `${vv.position[0]}%`,
                        top: `${vv.position[1]}%`
                      },
                      children: [(0, VS.jsxs)(AS.d, {
                        className: mS()("SkyblockMapPin", {
                          Unknown: !vv.visited,
                          Current: vv.current
                        }),
                        disabled: pv.pending,
                        onClick: () => {
                          ev.travel(vv.travelKind, vv.travelId)
                        },
                        children: [zv && (0, VS.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: zv,
                          alt: ""
                        }), !zv && (0, VS.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, VS.jsx)(RS, {
                            icon: vv.icon
                          })
                        }), (0, VS.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: vv.name
                        })]
                      }), vv.current && (0, VS.jsx)("span", {
                        className: mS()("SkyblockMapHereBadge", {
                          Above: vv.position[1] > 50
                        }),
                        children: dv("skyblockGame:mapYouAreHere")
                      })]
                    }, vv.id)
                  })), lv.portals.map((vv => (0, VS.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${vv.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${vv.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, VS.jsxs)(AS.d, {
                      className: "SkyblockMapPin",
                      disabled: pv.pending,
                      onClick: () => {
                        ev.travel(vv.travelKind, vv.travelId)
                      },
                      children: [(0, VS.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: vv.colour
                        },
                        "aria-hidden": "true",
                        children: (0, VS.jsx)(RS, {
                          icon: vv.icon
                        })
                      }), (0, VS.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: vv.name
                      })]
                    })
                  }, vv.id))), lv.local && (0, VS.jsx)(xS, {
                    controller: gv
                  })]
                })
              }), av && (0, VS.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, VS.jsx)("button", {
                  type: "button",
                  "aria-label": dv("skyblockGame:mapZoomIn"),
                  disabled: sv.view.zoom >= 12,
                  onClick: () => {
                    sv.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, VS.jsx)("button", {
                  type: "button",
                  "aria-label": dv("skyblockGame:mapZoomOut"),
                  disabled: sv.view.zoom <= 1,
                  onClick: () => {
                    sv.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, VS.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: pv.feedback
              })]
            })
          }), (0, VS.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [lv.progress && (0, VS.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, VS.jsx)("span", {
                children: lv.progress
              }), (0, VS.jsx)(MS, {
                percent: lv.percent,
                label: lv.progress
              })]
            }), lv.noLandmarks && (0, VS.jsx)("span", {
              children: dv("skyblockGame:mapNoLandmarks")
            }), lv.canTravel && (0, VS.jsx)("span", {
              className: "SkyblockMapHint",
              children: dv("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function ze(vv) {
      let {
        view: zv,
        controller: Pv,
        navigation: hv
      } = vv;
      const {
        t: Sv
      } = (0, DS.x)(), {
        isTouchScreen: ev
      } = (0, jS.i)(["isTouchScreen"]);
      return (0, VS.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": Sv("skyblockGame:mapLocal"),
        children: [ev && (0, VS.jsx)(AS.d, {
          className: "SkyblockMinimapOpen",
          onClick: Pv.showLocal,
          children: Sv("skyblockGame:map")
        }), (0, VS.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: zv.colour
          },
          children: [(0, VS.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: hv.display.mountTerrain,
            style: {
              width: zv.width,
              height: zv.height
            },
            children: [(0, VS.jsx)(QS, {
              imageKey: zv.imageKey,
              fallbackImageKey: zv.fallbackImageKey,
              geometryKey: zv.geometryKey,
              alt: zv.label
            }), (0, VS.jsx)(yS, {
              mount: hv.display.mountMinimapSearchArea
            }), zv.markers.map((vv => (0, VS.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${vv.position[0]}%`,
                top: `${vv.position[1]}%`,
                color: vv.colour
              },
              title: vv.name,
              children: (0, VS.jsx)(RS, {
                icon: vv.icon
              })
            }, vv.id)))]
          }), (0, VS.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: Sv("skyblockGame:mapYouAreHere"),
            children: (0, VS.jsx)(RS, {
              icon: "player"
            })
          })]
        }), (0, VS.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: zv.caption
        })]
      })
    }

    function Pe(vv) {
      let {
        controller: zv
      } = vv;
      return (0, VS.jsxs)("div", {
        className: "SkyblockCompass",
        ref: zv.display.mountCompass,
        children: [(0, VS.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, VS.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, VS.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function he(vv) {
      let {
        controller: zv,
        surface: Pv
      } = vv;
      const {
        t: hv
      } = (0, DS.x)(), Sv = (0, KS.j)(eP, zv.getSnapshot()), ev = HS();
      return Sv.enabled ? (0, VS.jsxs)(VS.Fragment, {
        children: ["hud" === Pv && (0, VS.jsx)(fS.g, {
          placement: "statBars",
          children: Sv.hud && (0, VS.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": Sv.hud.colour
            },
            children: [(0, VS.jsx)(MS, {
              percent: Sv.hud.skill.percent,
              label: Sv.hud.skill.xp,
              levelUpToken: Sv.hud.levelUpToken,
              colour: Sv.hud.colour
            }), (0, VS.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, VS.jsxs)("span", {
                children: [Sv.hud.skill.label, " \xb7 ", Sv.hud.skill.level]
              }), (0, VS.jsx)("span", {
                children: Sv.hud.gain
              })]
            })]
          })
        }), "hud" === Pv && (0, VS.jsx)(fS.g, {
          children: Sv.hud && (0, VS.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, VS.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, VS.jsx)("strong", {
                children: Sv.hud.skill.label
              }), (0, VS.jsx)("span", {
                children: Sv.hud.gain
              })]
            }), (0, VS.jsx)(MS, {
              percent: Sv.hud.skill.percent,
              label: Sv.hud.skill.xp,
              levelUpToken: Sv.hud.levelUpToken,
              colour: Sv.hud.colour
            }), (0, VS.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, VS.jsx)("span", {
                children: Sv.hud.skill.level
              }), (0, VS.jsx)("span", {
                children: Sv.hud.skill.xp
              })]
            })]
          })
        }), "menu" === Pv && (0, VS.jsx)(ZS.c, {
          show: Sv.open,
          close: zv.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, VS.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: ev,
            onKeyDown: LS,
            children: [(0, VS.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, VS.jsxs)("div", {
                children: [(0, VS.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: hv("skyblockGame:skills")
                }), (0, VS.jsx)("p", {
                  children: hv("skyblockGame:skillsIntro")
                })]
              }), (0, VS.jsx)(AS.i, {
                padIgnore: !0,
                onClick: zv.dismiss
              })]
            }), (0, VS.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, VS.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: Sv.skills.map((vv => (0, VS.jsxs)(AS.d, {
                  className: mS()("SkyblockSkillCard", {
                    Selected: vv.selected
                  }),
                  ariaPressed: vv.selected,
                  onClick: () => {
                    zv.select(vv.id)
                  },
                  children: [(0, VS.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, VS.jsx)(YS.b, {
                      itemName: vv.icon,
                      amount: 0
                    })
                  }), (0, VS.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, VS.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, VS.jsx)("strong", {
                        children: vv.label
                      }), (0, VS.jsx)("span", {
                        children: vv.level
                      })]
                    }), (0, VS.jsx)(MS, {
                      percent: vv.percent,
                      label: `${vv.label}: ${vv.xp}`
                    }), (0, VS.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: vv.xp
                    })]
                  })]
                }, vv.id)))
              }), Sv.detail && (0, VS.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, VS.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, VS.jsx)(YS.b, {
                    itemName: Sv.detail.icon,
                    amount: 0
                  })
                }), (0, VS.jsx)("h3", {
                  children: Sv.detail.label
                }), (0, VS.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: Sv.detail.level
                }), (0, VS.jsx)("p", {
                  children: Sv.detail.description
                }), (0, VS.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, VS.jsx)("strong", {
                    children: hv("skyblockGame:currentBenefit")
                  }), (0, VS.jsx)("span", {
                    children: Sv.detail.benefit
                  })]
                }), (0, VS.jsx)(MS, {
                  percent: Sv.detail.percent,
                  label: Sv.detail.xp
                }), (0, VS.jsx)("p", {
                  children: Sv.detail.xp
                }), (0, VS.jsx)("h4", {
                  children: hv("skyblockGame:earnXp")
                }), (0, VS.jsx)("ul", {
                  children: Sv.detail.sources.map((vv => (0, VS.jsx)("li", {
                    children: vv
                  }, vv)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Se = Pv(1344),
      ee = Pv(4582),
      ge = Pv(302);

    function pe(vv) {
      let {
        item: zv
      } = vv;
      return (0, VS.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, VS.jsx)(YS.b, {
          itemName: zv,
          amount: 0
        })
      })
    }

    function de(vv) {
      let {
        name: zv,
        percent: Pv,
        progress: hv
      } = vv;
      return (0, VS.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, VS.jsx)(MS, {
          percent: Pv,
          label: `${(0,ge.lb)(zv)}: ${hv}`
        }), (0, VS.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: hv
        })]
      })
    }

    function Ne(vv) {
      let {
        subquests: zv,
        showDescriptions: Pv = !1
      } = vv;
      return (0, VS.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: zv.map((vv => {
          const zv = Pv && "completed" === vv.status,
            hv = (0, VS.jsxs)("li", {
              className: mS()("SkyblockQuestStep", vv.status, {
                JustFinished: vv.justFinished,
                JustUnlocked: vv.justUnlocked
              }),
              tabIndex: zv ? 0 : void 0,
              children: [null !== vv.iconItem && (0, VS.jsx)(pe, {
                item: vv.iconItem
              }), null === vv.iconItem && (0, VS.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === vv.status ? "\u2713" : "skipped" === vv.status ? "\u2212" : "\u25cb"
              }), (0, VS.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, VS.jsx)("strong", {
                  children: (0, VS.jsx)(ee.c, {
                    text: vv.name
                  })
                }), Pv && !zv && (0, VS.jsx)("span", {
                  children: (0, VS.jsx)(ee.c, {
                    text: vv.description
                  })
                }), null !== vv.barPercent && (0, VS.jsx)(de, {
                  name: vv.name,
                  percent: vv.barPercent,
                  progress: vv.progress
                }), null === vv.barPercent && !zv && (0, VS.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: vv.statusLabel
                })]
              })]
            }, vv.id);
          return zv ? (0, VS.jsx)(Se.h, {
            delayShow: 200,
            tooltipInner: (0, VS.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, VS.jsx)("span", {
                children: (0, VS.jsx)(ee.c, {
                  text: vv.description
                })
              }), (0, VS.jsx)("strong", {
                children: vv.statusLabel
              })]
            }),
            children: hv
          }, vv.id) : hv
        }))
      })
    }

    function le(vv) {
      let {
        quest: zv,
        select: Pv
      } = vv;
      const {
        t: hv
      } = (0, DS.x)(), Sv = zv.focusStep;
      return (0, VS.jsxs)(AS.d, {
        className: mS()("SkyblockQuestCard", {
          Selected: zv.selected,
          Tracked: zv.tracked
        }),
        onClick: () => {
          Pv(zv.id)
        },
        children: [(0, VS.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, VS.jsx)("strong", {
            children: (0, VS.jsx)(ee.c, {
              text: zv.name
            })
          }), zv.tracked && (0, VS.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: hv("skyblockGame:currentQuest")
          })]
        }), Sv && (0, VS.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== Sv.iconItem && (0, VS.jsx)(pe, {
            item: Sv.iconItem
          }), (0, VS.jsx)(de, {
            name: Sv.name,
            percent: Sv.barPercent,
            progress: Sv.progress
          })]
        }), (0, VS.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: zv.progress
        })]
      })
    }

    function Te(vv) {
      let {
        controller: zv,
        surface: Pv
      } = vv;
      const hv = (0, KS.j)(NP, zv.getSnapshot()),
        {
          t: Sv
        } = (0, DS.x)(),
        ev = HS();
      return hv.enabled ? (0, VS.jsxs)(VS.Fragment, {
        children: ["hud" === Pv && (0, VS.jsx)(VS.Fragment, {
          children: hv.tracked && (0, VS.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: dP,
            children: (0, VS.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [hv.trackedStepPulse > 0 && (0, VS.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, hv.trackedStepPulse), (0, VS.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: Sv("skyblockGame:currentQuest")
              }), (0, VS.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, VS.jsx)("strong", {
                  children: (0, VS.jsx)(ee.c, {
                    text: hv.tracked.name
                  })
                }), null !== hv.tracked.clock && (0, VS.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: hv.tracked.clock
                })]
              }), (0, VS.jsx)(Ne, {
                subquests: hv.tracked.subquests
              })]
            })
          })
        }), "menu" === Pv && (0, VS.jsx)(ZS.c, {
          show: hv.open,
          close: zv.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, VS.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: ev,
            onKeyDown: LS,
            children: [(0, VS.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, VS.jsx)("div", {
                children: (0, VS.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: Sv("skyblockGame:quests")
                })
              }), (0, VS.jsx)(AS.i, {
                padIgnore: !0,
                onClick: zv.dismiss
              })]
            }), (0, VS.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, VS.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, VS.jsx)("h3", {
                  children: Sv("skyblockGame:current")
                }), 0 === hv.active.length && (0, VS.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Sv("skyblockGame:noActiveQuests")
                }), hv.active.map((vv => (0, VS.jsx)(le, {
                  quest: vv,
                  select: zv.select
                }, vv.id))), (0, VS.jsx)("h3", {
                  children: (0, VS.jsxs)("button", {
                    type: "button",
                    className: mS()("SkyblockQuestSectionToggle", {
                      Expanded: hv.completedExpanded
                    }),
                    "aria-expanded": hv.completedExpanded,
                    onClick: zv.toggleCompleted,
                    children: [(0, VS.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), Sv("skyblockGame:completed"), (0, VS.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: hv.completed.length
                    })]
                  })
                }), hv.completedExpanded && 0 === hv.completed.length && (0, VS.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: Sv("skyblockGame:noCompletedQuests")
                }), hv.completedExpanded && hv.completed.map((vv => (0, VS.jsx)(le, {
                  quest: vv,
                  select: zv.select
                }, vv.id)))]
              }), hv.detail && (0, VS.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [hv.detail.completed && (0, VS.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: Sv("skyblockGame:completedQuest")
                }), (0, VS.jsx)("h3", {
                  children: (0, VS.jsx)(ee.c, {
                    text: hv.detail.name
                  })
                }), (0, VS.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, VS.jsx)(ee.c, {
                    text: hv.detail.description
                  })
                }), (0, VS.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [hv.detail.progress, null !== hv.detail.clock && (0, VS.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: hv.detail.clock
                  })]
                }), (0, VS.jsx)(Ne, {
                  subquests: hv.detail.subquests,
                  showDescriptions: !0
                }), hv.detail.tracked && (0, VS.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: hv.detail.trackLabel
                }), !hv.detail.completed && !hv.detail.tracked && (0, VS.jsx)(AS.j, {
                  onClick: zv.trackSelected,
                  disabled: !hv.detail.canTrack,
                  children: hv.detail.trackLabel
                }), hv.detail.canViewDialogue && (0, VS.jsx)(AS.d, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: zv.viewDialogue,
                  children: Sv("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var We = Pv(1042),
      we = Pv(2450);

    function ae(vv, zv, Pv, hv, Sv) {
      const ev = vv => "linear" === Sv ? vv : {
          FS: Sv,
          point: vv
        },
        gv = {};
      for (const [pv, dv] of hv)
        for (const [zv, Pv] of Object.entries(vv(pv, dv, ev))) gv[zv] ??= {
          timeline: []
        }, gv[zv].timeline.push(Pv);
      return {
        cS: zv,
        loop: Pv,
        mS: gv
      }
    }
    const se = .547,
      Ce = .022,
      ie = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      ce = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Ge(vv, zv, Pv) {
      const {
        drop: hv = 0,
        shift: Sv = 0,
        torso: ev = 0,
        nod: gv = 0,
        tilt: pv = 0,
        legs: dv = [0, 0],
        arms: Nv = 0,
        spread: lv = 0
      } = zv, Tv = se * Math.cos(ev) - Ce * Math.sin(ev), Wv = se * Math.sin(ev) + Ce * Math.cos(ev), wv = Pv([0, -hv, Sv]);
      return {
        LowerBody: {
          timeFraction: vv,
          position: wv,
          rotation: Pv([0, 0, 0])
        },
        UpperBody: {
          timeFraction: vv,
          position: wv,
          rotation: Pv([ev, 0, pv])
        },
        HeadMesh: {
          timeFraction: vv,
          position: Pv([0, Tv - se - hv, Wv - Ce + Sv]),
          rotation: Pv([ev + gv, 0, pv])
        },
        LegLeftMesh: {
          timeFraction: vv,
          rotation: Pv([dv[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: vv,
          rotation: Pv([dv[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: vv,
          rotation: Pv([Nv, 0, lv])
        },
        ArmRightMesh: {
          timeFraction: vv,
          rotation: Pv([Nv, 0, -lv])
        }
      }
    }

    function me(vv, zv, Pv) {
      return ae(Ge, vv, zv, Pv, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function je(vv) {
      return "number" === typeof vv ? [vv, vv] : vv
    }

    function fe(vv, zv, Pv) {
      const {
        rise: hv = 0,
        shift: Sv = 0,
        torso: ev = 0,
        twist: gv = 0,
        tilt: pv = 0,
        nod: dv = 0,
        cock: Nv = 0,
        arms: lv = 0,
        spread: Tv = 0
      } = zv, [Wv, wv] = je(lv), [av, sv] = je(Tv);
      return {
        TorsoNode: {
          timeFraction: vv,
          position: Pv([0, hv, Sv]),
          rotation: Pv([ev, gv, pv])
        },
        HeadMesh: {
          timeFraction: vv,
          rotation: Pv([dv, 0, Nv])
        },
        ArmLeftMesh: {
          timeFraction: vv,
          rotation: Pv([Wv, 0, av])
        },
        ArmRightMesh: {
          timeFraction: vv,
          rotation: Pv([wv, 0, -sv])
        }
      }
    }
    const Fe = [1.0625, -1, 0];

    function Ye(vv) {
      return "number" === typeof vv ? [vv, vv] : vv
    }

    function ne(vv, zv, Pv) {
      const {
        drop: hv = 0,
        shift: Sv = 0,
        torso: ev = 0,
        tilt: gv = 0,
        nod: pv = 0,
        cock: dv = 0,
        legs: Nv = [0, 0],
        arms: lv = 0,
        spread: Tv = 0
      } = zv, [Wv, wv] = Ye(lv), [av, sv] = Ye(Tv), Cv = -ev, iv = -gv, [cv, Gv, mv] = function(vv, zv) {
        const [Pv, hv, Sv] = [-Fe[0], Fe[1], -Fe[2]], ev = Pv * Math.cos(zv) - hv * Math.sin(zv), gv = Pv * Math.sin(zv) + hv * Math.cos(zv);
        return [ev - Pv, -(gv * Math.cos(vv) - Sv * Math.sin(vv) - hv), gv * Math.sin(vv) + Sv * Math.cos(vv) - Sv]
      }(Cv, iv), jv = Pv([0, -hv, Sv]);
      return {
        TorsoNode: {
          timeFraction: vv,
          position: Pv([cv, Gv - hv, mv + Sv]),
          rotation: Pv([Cv, 0, iv])
        },
        HeadMesh: {
          timeFraction: vv,
          rotation: Pv([-pv, 0, -dv])
        },
        ArmLeftMesh: {
          timeFraction: vv,
          rotation: Pv([-Wv, 0, -av])
        },
        ArmRightMesh: {
          timeFraction: vv,
          rotation: Pv([-wv, 0, sv])
        },
        LegLeftMesh: {
          timeFraction: vv,
          position: jv,
          rotation: Pv([-Nv[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: vv,
          position: jv,
          rotation: Pv([-Nv[1], 0, 0])
        }
      }
    }
    var Oe = Pv(36647),
      De = Pv(37989),
      Ke = Pv(38164);

    function Ve(vv, zv, Pv) {
      var hv, Sv;
      const ev = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return vv + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - vv) * Pv
        },
        [gv, pv] = null !== (hv = vv.legs) && void 0 !== hv ? hv : [0, 0],
        [dv, Nv] = null !== (Sv = zv.legs) && void 0 !== Sv ? Sv : [0, 0];
      return {
        drop: ev(vv.drop, zv.drop),
        shift: ev(vv.shift, zv.shift),
        torso: ev(vv.torso, zv.torso),
        nod: ev(vv.nod, zv.nod),
        tilt: ev(vv.tilt, zv.tilt),
        legs: [ev(gv, dv), ev(pv, Nv)],
        arms: ev(vv.arms, zv.arms),
        spread: ev(vv.spread, zv.spread)
      }
    }
    const Ue = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Re = me(4400, !0, [
        [0, Ue],
        [.16, {
          ...Ue,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Ue],
        [.44, {
          ...Ue,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Ve(Ue, ie, .7)],
        [.66, Ve(Ue, ie, .78)],
        [.74, Ve(Ue, ce, .65)],
        [.86, {
          ...Ue,
          drop: .14
        }],
        [1, Ue]
      ], "catmull-rom-spline"),
      xe = {
        ...Ue,
        drop: .14,
        torso: .3,
        spread: .4
      },
      te = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      qe = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Ie = {
        caveGolem: Re,
        magmaGolem: me(3600, !0, [
          [0, xe],
          [.12, {
            ...xe,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...xe,
            tilt: -.08
          }],
          [.4, {
            ...xe,
            tilt: .06,
            drop: .11
          }],
          [.52, Ve(xe, ie, .9)],
          [.62, Ve(xe, ce, .8)],
          [.7, Ve(xe, ce, .45)],
          [.78, Ve(xe, ce, .85)],
          [.9, {
            ...xe,
            drop: .17
          }],
          [1, xe]
        ], "catmull-rom-spline"),
        frostWraith: function(vv, zv, Pv) {
          return ae(fe, vv, zv, Pv, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, te],
          [.14, {
            ...te,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...te,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...te,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...te,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...te,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...te,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...te,
            rise: .16,
            tilt: -.04
          }],
          [1, te]
        ], "catmull-rom-spline"),
        tikiTerror: function(vv, zv, Pv) {
          return ae(ne, vv, zv, Pv, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, qe],
          [.16, {
            ...qe,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, qe],
          [.44, {
            ...qe,
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
            ...qe,
            drop: .1
          }],
          [1, qe]
        ], "catmull-rom-spline")
      },
      Qe = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Ze = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      Ae = Object.fromEntries(Object.entries(Ie).map((vv => {
        let [zv, Pv] = vv;
        return [zv, (0, Ke.b)((0, Oe.g)(Pv), zv)]
      })));

    function Le(vv) {
      const zv = function(vv) {
        var zv;
        const Pv = (0, De.c)(vv).poseRig;
        return null !== (zv = Ze[vv]) && void 0 !== zv ? zv : void 0 === Pv ? null : Qe[Pv]
      }(vv);
      return null === zv ? null : Ae[zv]
    }

    function He(vv) {
      return {
        "--difficulty-colour": vv
      }
    }
    const Me = (0, nv.lazy)((() => (0, we.b)(Pv.e(192).then((() => Pv(40816))), (vv => vv.MobPreview))));

    function ye(vv) {
      var zv, Pv, hv;
      let {
        picker: Sv,
        controller: ev
      } = vv;
      const {
        t: gv
      } = (0, DS.x)(), pv = HS(), {
        page: dv
      } = Sv;
      return (0, VS.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: pv,
        onKeyDown: vv => {
          "ArrowLeft" === vv.key ? (vv.preventDefault(), vv.stopPropagation(), ev.previous()) : "ArrowRight" === vv.key ? (vv.preventDefault(), vv.stopPropagation(), ev.next()) : LS(vv)
        },
        style: He(dv.colour),
        children: [(0, VS.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, VS.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: Sv.dungeonName
          }), (0, VS.jsx)(AS.i, {
            padIgnore: !0,
            onClick: ev.dismiss
          })]
        }), (0, VS.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, VS.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, VS.jsx)(AS.d, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !Sv.canPrevious,
              onClick: ev.previous,
              children: (0, VS.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, VS.jsx)(We.b, {
                  name: "angle-up"
                })
              })
            }), (0, VS.jsxs)("div", {
              className: mS()("SkyblockBossPickerBoss", {
                Locked: !dv.unlocked
              }),
              children: [null !== dv.bossMobType && (0, VS.jsx)(nv.Suspense, {
                fallback: (0, VS.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, VS.jsx)(Me, {
                  className: "SkyblockBossPickerModel",
                  mobType: dv.bossMobType,
                  variation: dv.bossMobVariation,
                  animation: null !== (zv = Le(dv.bossMobType)) && void 0 !== zv ? zv : void 0
                })
              }), null === dv.bossMobType && (0, VS.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, VS.jsx)(AS.d, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !Sv.canNext,
              onClick: ev.next,
              children: (0, VS.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, VS.jsx)(We.b, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, VS.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, VS.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [dv.beaten && (0, VS.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), dv.label]
            }), (0, VS.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (Pv = dv.bossName) && void 0 !== Pv ? Pv : "???"
            }), (0, VS.jsxs)("span", {
              className: mS()("SkyblockBossPickerRecord", {
                Locked: null !== dv.lockedHint
              }),
              children: [null !== dv.lockedHintHighlight && (0, VS.jsxs)(VS.Fragment, {
                children: [dv.lockedHintHighlight.before, (0, VS.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: He(dv.lockedHintHighlight.colour),
                  children: [null !== dv.lockedHintHighlight.icon && (0, VS.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, VS.jsx)(YS.b, {
                      itemName: dv.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), dv.lockedHintHighlight.name]
                }), dv.lockedHintHighlight.after]
              }), null === dv.lockedHintHighlight && (null !== (hv = dv.lockedHint) && void 0 !== hv ? hv : dv.summary)]
            })]
          }), (0, VS.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: Sv.pages.map((vv => (0, VS.jsx)("span", {
              className: mS()("SkyblockBossPickerDot", {
                Current: vv.current,
                Locked: !vv.unlocked
              }),
              style: He(vv.colour)
            }, vv.difficulty)))
          }), (0, VS.jsx)(AS.l, {
            className: "SkyblockBossPickerFight",
            disabled: !dv.unlocked,
            onClick: ev.enter,
            children: gv("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Be(vv) {
      let {
        dungeon: zv,
        select: Pv
      } = vv;
      return (0, VS.jsxs)(AS.d, {
        className: mS()("SkyblockDungeonCard", {
          Selected: zv.selected
        }),
        onClick: () => {
          Pv(zv.id)
        },
        children: [(0, VS.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, VS.jsx)("strong", {
            children: zv.name
          }), (0, VS.jsx)("span", {
            children: zv.beatenSummary
          })]
        }), (0, VS.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: zv.difficulties.map((vv => (0, VS.jsxs)("span", {
            className: mS()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: vv.beaten
            }),
            style: He(vv.colour),
            title: vv.summary,
            children: [vv.beaten && (0, VS.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), vv.label]
          }, vv.difficulty)))
        })]
      })
    }

    function Je(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(wP, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = HS();
      return Pv.enabled ? (0, VS.jsxs)(ZS.c, {
        show: Pv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [Pv.picker && (0, VS.jsx)(ye, {
          picker: Pv.picker,
          controller: zv
        }), !Pv.picker && (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: Sv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: hv("skyblockGame:dungeons")
              }), (0, VS.jsx)("p", {
                children: hv("skyblockGame:dungeonsIntro")
              })]
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              onClick: zv.dismiss
            })]
          }), (0, VS.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, VS.jsx)("div", {
              className: "SkyblockDungeonList",
              children: Pv.dungeons.map((vv => (0, VS.jsx)(Be, {
                dungeon: vv,
                select: zv.select
              }, vv.id)))
            }), Pv.detail && (0, VS.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, VS.jsx)("h3", {
                children: Pv.detail.name
              }), (0, VS.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: Pv.detail.difficulties.map((vv => (0, VS.jsxs)("li", {
                  className: mS()("SkyblockDungeonRecord", {
                    Beaten: vv.beaten
                  }),
                  children: [(0, VS.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: He(vv.colour),
                    children: [vv.beaten && (0, VS.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), vv.label]
                  }), (0, VS.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: vv.summary
                  })]
                }, vv.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function Ee(vv) {
      let {
        collection: zv,
        select: Pv
      } = vv;
      return (0, VS.jsxs)(AS.d, {
        className: mS()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: zv.selected,
          Locked: zv.locked
        }),
        ariaPressed: zv.selected,
        onClick: () => {
          Pv(zv.id)
        },
        children: [(0, VS.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, VS.jsx)(YS.b, {
            itemName: zv.icon,
            amount: 0
          })
        }), (0, VS.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, VS.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, VS.jsx)("strong", {
              children: zv.name
            }), (0, VS.jsx)("span", {
              children: zv.tier
            })]
          }), (0, VS.jsx)(MS, {
            percent: zv.percent,
            label: `${zv.name}: ${zv.progress}`
          }), (0, VS.jsx)("span", {
            className: "SkyblockSkillXp",
            children: zv.progress
          })]
        })]
      })
    }

    function oe(vv) {
      let {
        collection: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)();
      return (0, VS.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, VS.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, VS.jsx)(YS.b, {
            itemName: zv.icon,
            amount: 0
          })
        }), (0, VS.jsx)("h3", {
          children: zv.name
        }), (0, VS.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: zv.tier
        }), (0, VS.jsx)("p", {
          children: zv.locked ? Pv("skyblockGame:collectionLocked") : zv.count
        }), null !== zv.nextReward && (0, VS.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, VS.jsx)("strong", {
            children: Pv("skyblockGame:collectionNextReward")
          }), (0, VS.jsx)("span", {
            children: zv.nextReward
          })]
        }), (0, VS.jsx)(MS, {
          percent: zv.percent,
          label: zv.progress
        }), (0, VS.jsx)("p", {
          children: zv.progress
        })]
      })
    }

    function be(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(qP, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = HS();
      return Pv.enabled ? (0, VS.jsx)(ZS.c, {
        show: Pv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: Sv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: hv("skyblockGame:collections")
              }), (0, VS.jsxs)("p", {
                children: [hv("skyblockGame:collectionsIntro"), " ", Pv.tiersUnlocked]
              })]
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              onClick: zv.dismiss
            })]
          }), (0, VS.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: Pv.categories.map((vv => (0, VS.jsxs)(AS.d, {
              className: mS()("SkyblockCollectionCategory", {
                Selected: vv.selected
              }),
              ariaPressed: vv.selected,
              padTabSelected: vv.selected,
              onClick: () => {
                zv.selectCategory(vv.id)
              },
              children: [(0, VS.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, VS.jsx)(YS.b, {
                  itemName: vv.icon,
                  amount: 0
                })
              }), (0, VS.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, VS.jsx)("strong", {
                  children: vv.label
                }), (0, VS.jsx)("span", {
                  children: vv.tiers
                })]
              })]
            }, vv.id)))
          }), (0, VS.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, VS.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: Pv.collections.map((vv => (0, VS.jsx)(Ee, {
                collection: vv,
                select: zv.select
              }, vv.id)))
            }), Pv.detail && (0, VS.jsx)(oe, {
              collection: Pv.detail
            })]
          })]
        })
      }) : null
    }
    const re = ["completed", "active", "available", "locked"],
      ke = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Xe(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(oP, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = HS();
      return Pv.enabled ? (0, VS.jsx)(ZS.c, {
        show: Pv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: Sv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: hv("skyblockDevQuests:title")
              }), (0, VS.jsx)("p", {
                children: hv("skyblockDevQuests:intro")
              })]
            }), (0, VS.jsx)(AS.i, {
              onClick: zv.dismiss
            })]
          }), (0, VS.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [re.map((vv => (0, VS.jsx)("span", {
              className: mS()("SkyblockQuestGraphLegendState", vv),
              children: hv(`skyblockDevQuests:state_${vv}`)
            }, vv))), ke.map((vv => (0, VS.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, VS.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, VS.jsx)("line", {
                  className: mS()("SkyblockQuestGraphEdge", vv),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), hv(`skyblockDevQuests:edge_${vv}`)]
            }, vv)))]
          }), (0, VS.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, VS.jsxs)("div", {
              className: mS()("SkyblockQuestGraphCanvas", {
                Planning: Pv.planning
              }),
              style: {
                width: Pv.width,
                height: Pv.height
              },
              children: [(0, VS.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: Pv.width,
                height: Pv.height,
                "aria-hidden": "true",
                children: [(0, VS.jsx)("defs", {
                  children: (0, VS.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, VS.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), Pv.edges.map((vv => (0, VS.jsx)("path", {
                  className: mS()("SkyblockQuestGraphEdge", vv.kind, {
                    InPlan: vv.inPlan
                  }),
                  d: vv.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, vv.key)))]
              }), Pv.nodes.map((vv => (0, VS.jsxs)("button", {
                type: "button",
                className: mS()("SkyblockQuestGraphNode", vv.state, {
                  InPlan: vv.inPlan,
                  Hovered: vv.hovered
                }),
                style: {
                  left: vv.left,
                  top: vv.top,
                  width: 190,
                  height: 52
                },
                title: vv.id,
                onMouseEnter: () => {
                  zv.hover(vv.id)
                },
                onMouseLeave: () => {
                  zv.hover(null)
                },
                onFocus: () => {
                  zv.hover(vv.id)
                },
                onBlur: () => {
                  zv.hover(null)
                },
                onClick: () => {
                  zv.jump(vv.id)
                },
                children: [(0, VS.jsx)("strong", {
                  children: vv.name
                }), (0, VS.jsx)("span", {
                  children: vv.detail
                })]
              }, vv.id)))]
            })
          })]
        })
      }) : null
    }
    const ue = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      vg = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${ph}ms`,
        "--forge-duration": "2150ms"
      },
      zg = Array.from({
        length: 18
      }, ((vv, zv) => ({
        "--ember-left": `${(4+92*(.618034*zv%1)).toFixed(1)}%`,
        "--ember-size": 3 + zv % 3 * 2 + "px",
        "--ember-drift": 14 * (zv % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*zv%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*zv%8).toFixed(2)}s`
      })));

    function Pg(vv) {
      if (vv.style.removeProperty("--part-size"), null === vv.parentElement || "wrap" === getComputedStyle(vv.parentElement).flexWrap) return;
      const zv = [...vv.children],
        Pv = getComputedStyle(vv),
        hv = parseFloat(Pv.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        Sv = (vv.clientHeight - parseFloat(Pv.rowGap) * (zv.length - 1)) / zv.length,
        ev = zv.map((vv => {
          const zv = getComputedStyle(vv),
            Pv = vv.querySelector("h3"),
            ev = vv.querySelector(".SkyblockForgeParts");
          if (null === Pv || null === ev) return hv;
          const gv = Sv - parseFloat(zv.paddingTop) - parseFloat(zv.paddingBottom) - Pv.offsetHeight - parseFloat(getComputedStyle(Pv).marginBottom),
            pv = parseFloat(getComputedStyle(ev).columnGap),
            dv = ev.children.length;
          let Nv = 0;
          for (let hv = 1; hv <= dv; hv++) {
            const vv = Math.ceil(dv / hv);
            Nv = Math.max(Nv, Math.min((ev.clientWidth - pv * (hv - 1)) / hv, (gv - pv * (vv - 1)) / vv))
          }
          return Nv
        }));
      vv.style.setProperty("--part-size", `${Math.floor(Math.max(hv,Math.min(...ev)))}px`)
    }

    function hg(vv) {
      var zv, Pv, hv, ev, gv;
      let {
        controller: pv
      } = vv;
      const dv = (0, KS.j)(ah, pv.getSnapshot()),
        {
          t: Nv
        } = (0, DS.x)(),
        lv = HS(),
        Tv = function() {
          const vv = (0, nv.useRef)(null),
            zv = (0, nv.useRef)(null);
          return (0, nv.useLayoutEffect)((() => {
            null !== vv.current && Pg(vv.current)
          })), (0, nv.useCallback)((Pv => {
            var hv;
            null === (hv = zv.current) || void 0 === hv || hv.disconnect(), zv.current = null, vv.current = Pv, null !== Pv && (zv.current = new ResizeObserver((() => {
              Pg(Pv)
            })), zv.current.observe(Pv))
          }), [])
        }(),
        Wv = function(vv) {
          const zv = (0, nv.useRef)(null);
          return (0, nv.useLayoutEffect)((() => {
            const vv = zv.current;
            if (null !== vv) {
              vv.style.removeProperty("font-size");
              for (let zv = 1.7; zv > 1.1 && vv.scrollWidth > vv.clientWidth; zv -= .1) vv.style.fontSize = zv - .1 + "rem"
            }
          }), [vv]), (0, nv.useCallback)((vv => {
            zv.current = vv
          }), [])
        }(null === (zv = dv.preview) || void 0 === zv ? void 0 : zv.name),
        wv = (0, nv.useRef)(null),
        av = (0, nv.useRef)({}),
        sv = dv.forging,
        Cv = null !== (Pv = null === sv || void 0 === sv ? void 0 : sv.preview.tier) && void 0 !== Pv ? Pv : 0,
        iv = null !== (hv = null === sv || void 0 === sv ? void 0 : sv.preview.named) && void 0 !== hv && hv,
        cv = (0, nv.useMemo)((() => {
          return null === sv ? null : {
            flames: (vv = Cv, zv = iv, Array.from({
              length: 26 + 6 * vv + (zv ? 20 : 0)
            }, ((vv, zv) => {
              const Pv = zv < 6,
                hv = Math.random() * Math.PI * 2,
                Sv = Pv ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                ev = Math.cos(hv) * Sv,
                gv = Math.sin(hv) * Sv - 2 - 3 * Math.random(),
                pv = Math.random(),
                [dv, Nv, lv] = Pv ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : pv < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : pv < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [pv < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": dv,
                "--x0": `${(.15*ev).toFixed(2)}rem`,
                "--y0": `${(.15*gv).toFixed(2)}rem`,
                "--x": `${ev.toFixed(2)}rem`,
                "--y": `${gv.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${Nv.toFixed(2)}rem`,
                "--duration": `${Math.round(lv)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: lh(Cv, iv)
          };
          var vv, zv
        }), [null === sv || void 0 === sv ? void 0 : sv.id]);
      if (!dv.enabled) return null;
      const Gv = dv.preview,
        mv = dv.arriving,
        jv = null !== mv && !mv.sameSword,
        fv = null !== Gv && (0, VS.jsx)(YS.b, {
          itemName: Gv.baseSword,
          amount: 0,
          enchantmentTier: Gv.enchantmentTier
        });
      return (0, VS.jsx)(ZS.c, {
        show: dv.open,
        close: pv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: lv,
          onKeyDown: LS,
          children: [(0, VS.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: zg.map(((vv, zv) => (0, VS.jsx)("span", {
              style: vv
            }, zv)))
          }), (0, VS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: Nv("skyblockGame:forgeTitle")
              }), (0, VS.jsx)("p", {
                children: Nv("skyblockGame:forgeIntro")
              })]
            }), (0, VS.jsx)(AS.i, {
              onClick: pv.dismiss
            })]
          }), (0, VS.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, VS.jsx)("div", {
              ref: Tv,
              className: mS()("SkyblockForgeSlots", {
                Locked: null !== sv
              }),
              children: dv.slots.map((vv => (0, VS.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, VS.jsx)("h3", {
                  children: vv.label
                }), (0, VS.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: vv.parts.map((zv => (0, VS.jsx)("button", {
                    type: "button",
                    className: mS()("SkyblockForgePart", {
                      Selected: zv.selected,
                      Missing: zv.placeholder
                    }),
                    disabled: zv.placeholder,
                    title: zv.placeholder ? Nv("skyblockGame:forgePickParts") : zv.itemName,
                    "aria-pressed": zv.selected,
                    onClick: () => {
                      pv.select(vv.kind, zv.material)
                    },
                    children: (0, VS.jsx)(YS.b, {
                      itemName: zv.itemName,
                      amount: zv.owned
                    })
                  }, zv.material)))
                })]
              }, vv.kind)))
            }), (0, VS.jsxs)("div", {
              className: mS()("SkyblockForgeAnvil", {
                Named: null === Gv || void 0 === Gv ? void 0 : Gv.named
              }),
              style: {
                "--tier": null === Gv ? "transparent" : Sv.nb[Gv.enchantmentTier]
              },
              children: [(0, VS.jsxs)("div", {
                className: mS()("SkyblockForgeAltar", {
                  Forging: null !== sv
                }),
                style: null === sv ? void 0 : vg,
                children: [(0, VS.jsxs)("div", {
                  className: mS()("SkyblockForgeMount", {
                    Arrive: null !== mv
                  }),
                  children: [null === Gv && (0, VS.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, VS.jsx)(YS.b, {
                      itemName: dv.unformedSword,
                      amount: 0
                    })
                  }), null !== Gv && (0, VS.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== Gv && null === sv && (0, VS.jsx)("div", {
                    ref: wv,
                    className: "SkyblockForgeFloat",
                    children: (0, VS.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: fv
                    })
                  }), null !== Gv && (0, VS.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Nh.map(((vv, zv) => (0, VS.jsx)("span", {
                      className: mS()({
                        Rune: "" !== vv.rune
                      }),
                      style: vv.style,
                      children: vv.rune
                    }, zv)))
                  }), null !== sv && null !== cv && (0, VS.jsxs)(VS.Fragment, {
                    children: [(0, VS.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, VS.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: cv.flames.map(((vv, zv) => (0, VS.jsx)("span", {
                        style: vv
                      }, zv)))
                    }), (0, VS.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: av.current,
                      children: (0, VS.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: fv
                      })
                    }), (0, VS.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, VS.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (Cv >= 4 || iv) && (0, VS.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, VS.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: cv.sparks.map(((vv, zv) => (0, VS.jsx)("span", {
                        style: vv
                      }, zv)))
                    }), (0, VS.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, VS.jsx)("p", {
                  className: mS()("SkyblockForgeStatus", null === (ev = dv.status) || void 0 === ev ? void 0 : ev.tone),
                  children: null === (gv = dv.status) || void 0 === gv ? void 0 : gv.text
                })]
              }), null === Gv && (0, VS.jsx)("p", {
                className: mS()("SkyblockForgeName Waiting", {
                  ArriveText: jv
                }),
                children: Nv(dv.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== Gv && (0, VS.jsx)("h3", {
                ref: Wv,
                className: mS()("SkyblockForgeName", {
                  ArriveText: jv
                }),
                title: Gv.name,
                children: Gv.name
              }), (null === Gv || void 0 === Gv ? void 0 : Gv.named) && (0, VS.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: Nv("skyblockGame:forgeSecret")
              }), (0, VS.jsxs)(AS.l, {
                className: "SkyblockForgeButton",
                disabled: !dv.canForge,
                title: null === Gv ? void 0 : Nv("skyblockGame:forgeCoalOwned", {
                  owned: String(dv.coalOwned)
                }),
                onClick: () => {
                  av.current = function(vv) {
                    const zv = null === vv ? "none" : getComputedStyle(vv).transform,
                      Pv = new DOMMatrixReadOnly("none" === zv ? void 0 : zv);
                    return {
                      "--settle-y": `${Pv.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(Pv.b,Pv.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(wv.current), wh(), pv.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [Nv("skyblockGame:forgeButton"), null !== Gv && (0, VS.jsxs)("span", {
                  className: mS()("SkyblockForgeCost", {
                    Short: Gv.coalShort
                  }),
                  children: [(0, VS.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, VS.jsx)(YS.b, {
                      itemName: uP.d,
                      amount: 0
                    })
                  }), Gv.coalCost]
                })]
              })]
            }), (0, VS.jsxs)("div", {
              className: mS()("SkyblockForgeDetails", {
                Named: null === Gv || void 0 === Gv ? void 0 : Gv.named
              }),
              children: [(0, VS.jsx)("p", {
                className: mS()("SkyblockForgeLore", {
                  ArriveText: jv
                }),
                title: null === Gv || void 0 === Gv ? void 0 : Gv.lore,
                children: null === Gv || void 0 === Gv ? void 0 : Gv.lore
              }), (0, VS.jsxs)("dl", {
                className: mS()("SkyblockForgeStats", {
                  ArriveText: jv
                }),
                children: [null === Gv && ue.map((vv => (0, VS.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, VS.jsx)("dt", {
                    children: Nv(vv)
                  }), (0, VS.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, vv))), null === Gv || void 0 === Gv ? void 0 : Gv.stats.map((vv => (0, VS.jsxs)("div", {
                  className: mS()("SkyblockForgeStat", {
                    Better: vv.better
                  }),
                  children: [(0, VS.jsx)("dt", {
                    children: vv.label
                  }), (0, VS.jsx)("dd", {
                    children: vv.value
                  })]
                }, vv.label)))]
              }), (0, VS.jsx)("ul", {
                className: mS()("SkyblockForgeEffects", {
                  ArriveText: jv
                }),
                children: null === Gv || void 0 === Gv ? void 0 : Gv.effects.map((vv => (0, VS.jsx)("li", {
                  children: vv
                }, vv)))
              })]
            })]
          })]
        })
      })
    }
    const Sg = "Doom Rivet",
      eg = "Doom Crest";

    function gg(vv) {
      let {
        itemName: zv,
        amount: Pv,
        owned: hv
      } = vv;
      return (0, VS.jsxs)("span", {
        className: mS()("SkyblockSmugglerPrice", {
          Short: Pv > hv
        }),
        children: [(0, VS.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, VS.jsx)(YS.b, {
            itemName: zv,
            amount: 0
          })
        }), (0, VS.jsx)("span", {
          children: Pv
        })]
      })
    }

    function pg(vv) {
      return vv.justBought ? "skyblockGame:smugglerJustBought" : vv.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function dg(vv) {
      let {
        deal: zv,
        view: Pv,
        buy: hv
      } = vv;
      const {
        t: Sv
      } = (0, DS.x)();
      return (0, VS.jsxs)("div", {
        className: mS()("SkyblockSmugglerPocket", {
          Bought: zv.justBought,
          Unaffordable: !zv.affordable,
          SoldOut: zv.soldOut && !zv.justBought
        }),
        children: [(0, VS.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, VS.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, VS.jsx)(YS.b, {
            itemName: zv.itemName,
            amount: 0,
            enchantmentTier: zv.enchantmentTier
          }), zv.amount > 1 && (0, VS.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: Sv("skyblockGame:smugglerAmount", {
              amount: zv.amount
            })
          })]
        }), (0, VS.jsx)("h3", {
          children: zv.displayName
        }), (0, VS.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, VS.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [zv.rivets > 0 && (0, VS.jsx)(gg, {
              itemName: Sg,
              amount: zv.rivets,
              owned: Pv.rivetsOwned
            }), zv.crests > 0 && (0, VS.jsx)(gg, {
              itemName: eg,
              amount: zv.crests,
              owned: Pv.crestsOwned
            })]
          }), (0, VS.jsx)(AS.d, {
            className: "SkyblockSmugglerBuy",
            disabled: zv.soldOut || !zv.affordable || Pv.pending,
            onClick: () => {
              hv(zv.slot)
            },
            children: Sv(pg(zv))
          })]
        })]
      }, zv.justBought ? Pv.boughtCount : 0)
    }

    function Ng(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(ih, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = HS();
      return Pv.enabled ? (0, VS.jsx)(ZS.c, {
        show: Pv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: Sv,
          onKeyDown: LS,
          children: [(0, VS.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, VS.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, VS.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: hv("skyblockGame:smugglerTitle")
              }), (0, VS.jsx)("p", {
                children: hv("skyblockGame:smugglerIntro")
              })]
            }), (0, VS.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, VS.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, VS.jsx)(gg, {
                  itemName: Sg,
                  amount: Pv.rivetsOwned,
                  owned: Pv.rivetsOwned
                }), (0, VS.jsx)(gg, {
                  itemName: eg,
                  amount: Pv.crestsOwned,
                  owned: Pv.crestsOwned
                })]
              }), (0, VS.jsx)(AS.i, {
                onClick: zv.dismiss
              })]
            })]
          }), (0, VS.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: Pv.deals.map((vv => (0, VS.jsx)(dg, {
              deal: vv,
              view: Pv,
              buy: zv.buy
            }, vv.slot)))
          }), (0, VS.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, VS.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: Pv.rotatesText
            }), null !== Pv.status && (0, VS.jsx)("span", {
              className: mS()("SkyblockSmugglerStatus", Pv.status.tone),
              children: Pv.status.text
            })]
          })]
        })
      }) : null
    }

    function lg(vv) {
      let {
        phase: zv,
        className: Pv
      } = vv;
      return (0, VS.jsx)("span", {
        className: mS()("SkyblockMoon", `Moon-${zv}`, Pv),
        "aria-hidden": "true"
      })
    }

    function Tg(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(mh, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)();
      return Pv.enabled ? (0, VS.jsx)(fS.g, {
        placement: "statBars",
        children: (0, VS.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: mS()("SkyblockPassageChip", Pv.open && "Open"),
          "aria-label": hv("skyblockGame:passageChipLabel", {
            phase: Pv.phaseName
          }),
          title: hv("skyblockGame:passageChipLabel", {
            phase: Pv.phaseName
          }),
          onMouseDown: vv => {
            vv.preventDefault()
          },
          onClick: zv.toggle,
          children: (0, VS.jsx)(lg, {
            phase: Pv.phase
          }, Pv.phase)
        })
      }) : null
    }

    function Wg(vv) {
      let {
        fish: zv
      } = vv;
      return (0, VS.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, VS.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, VS.jsx)(YS.b, {
            itemName: zv.itemName,
            amount: 0
          })
        }), (0, VS.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, VS.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: zv.displayName
          }), (0, VS.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: zv.where
          })]
        })]
      })
    }

    function wg(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(mh, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = HS();
      return Pv.enabled ? (0, VS.jsx)(ZS.c, {
        show: Pv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: Sv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, VS.jsx)(lg, {
              phase: Pv.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: hv("skyblockGame:passageTitle")
              }), (0, VS.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: Pv.phaseName
              })]
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              onClick: zv.dismiss
            })]
          }), (0, VS.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: hv("skyblockGame:passageIntro")
          }), (0, VS.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, VS.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, VS.jsx)("h3", {
                children: hv("skyblockGame:passageVisiting")
              }), (0, VS.jsx)("ul", {
                className: "SkyblockPassageList",
                children: Pv.visitors.map((vv => (0, VS.jsx)(Wg, {
                  fish: vv
                }, vv.itemName)))
              })]
            }), (0, VS.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== Pv.resting && (0, VS.jsxs)(VS.Fragment, {
                children: [(0, VS.jsx)("h3", {
                  children: hv("skyblockGame:passageResting")
                }), (0, VS.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, VS.jsx)(Wg, {
                    fish: Pv.resting
                  })
                })]
              }), (0, VS.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, VS.jsx)(lg, {
                  phase: Pv.nextPhase
                }), (0, VS.jsx)("span", {
                  children: Pv.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function ag() {
      return (0, VS.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((vv => (0, VS.jsx)("i", {
          style: {
            "--sparkle-index": vv
          }
        }, vv)))
      })
    }

    function sg(vv) {
      var zv;
      let {
        charm: Pv,
        view: hv,
        controller: Sv
      } = vv;
      const {
        t: ev
      } = (0, DS.x)(), gv = hv.shop, pv = (null === (zv = hv.sparkle) || void 0 === zv ? void 0 : zv.id) === Pv.id;
      return (0, VS.jsxs)("li", {
        className: mS()("SkyblockLampLightCharm", Pv.owned && "Owned", Pv.socketed && "Socketed"),
        children: [pv && (0, VS.jsx)(ag, {}, hv.sparkle.count), (0, VS.jsx)("h4", {
          children: Pv.name
        }), (0, VS.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: Pv.effect
        }), (0, VS.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: Pv.lines.map((vv => (0, VS.jsxs)("li", {
            className: mS()("SkyblockLampLightOddsLine", "better" === vv.tone ? "Better" : "worse" === vv.tone ? "Worse" : "Same"),
            children: [(0, VS.jsx)("span", {
              className: "Before",
              children: vv.before
            }), (0, VS.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, VS.jsx)("span", {
              className: "After",
              children: vv.after
            })]
          }, vv.label)))
        }), (0, VS.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: Pv.owned ? Pv.socketed ? (0, VS.jsxs)(VS.Fragment, {
            children: [(0, VS.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: ev("skyblockGame:lampLightSocketed")
            }), (0, VS.jsx)(AS.K, {
              disabled: !hv.canCommand,
              ariaLabel: ev("skyblockGame:lampLightRemoveLabel", {
                charm: Pv.name
              }),
              onClick: () => {
                Sv.socket(null)
              },
              children: ev("skyblockGame:lampLightRemove")
            })]
          }) : (0, VS.jsx)(AS.d, {
            disabled: !hv.canCommand || !gv.heldRod,
            ariaLabel: ev("skyblockGame:lampLightSocketLabel", {
              charm: Pv.name
            }),
            onClick: () => {
              Sv.socket(Pv.id)
            },
            children: ev("skyblockGame:lampLightSocket")
          }) : (0, VS.jsx)(AS.d, {
            disabled: !hv.canCommand || !Pv.affordable,
            ariaLabel: ev("skyblockGame:lampLightBuyLabel", {
              item: Pv.name,
              cost: Pv.cost
            }),
            onClick: () => {
              Sv.buy(Pv.id)
            },
            children: Pv.cost
          })
        })]
      })
    }

    function Cg(vv) {
      var zv;
      let {
        tint: Pv,
        view: hv,
        controller: Sv
      } = vv;
      const {
        t: ev
      } = (0, DS.x)();
      return (0, VS.jsxs)("li", {
        className: mS()("SkyblockLampLightTint", Pv.wearing && "Wearing"),
        style: {
          "--tint-colour": Pv.colour
        },
        children: [(null === (zv = hv.sparkle) || void 0 === zv ? void 0 : zv.id) === Pv.id && (0, VS.jsx)(ag, {}, hv.sparkle.count), (0, VS.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, VS.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: Pv.name
        }), Pv.wearing ? (0, VS.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: ev("skyblockGame:lampLightWearing")
        }) : (0, VS.jsx)(AS.d, {
          disabled: !hv.canCommand || !Pv.owned && !Pv.affordable,
          ariaLabel: Pv.owned ? ev("skyblockGame:lampLightWearLabel", {
            tint: Pv.name
          }) : ev("skyblockGame:lampLightBuyLabel", {
            item: Pv.name,
            cost: Pv.cost
          }),
          onClick: () => {
            Pv.owned ? Sv.wearTint(Pv.id) : Sv.buy(Pv.id)
          },
          children: Pv.owned ? ev("skyblockGame:lampLightWear") : Pv.cost
        })]
      })
    }

    function ig(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(qh, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = Pv.shop;
      return (0, VS.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, VS.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, VS.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: Pv.balance
          }), (0, VS.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": Pv.releasing,
            className: mS()("SkyblockLampLightSwitch", Pv.releasing && "On"),
            disabled: Pv.releasing ? "ready" !== Pv.status : !Pv.canCommand,
            onClick: () => {
              zv.setRelease(!Pv.releasing)
            },
            children: [(0, VS.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, VS.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), hv("skyblockGame:lampLightRelease")]
          }), (0, VS.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: hv("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== Pv.notice && (0, VS.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: Pv.notice
        }), null !== Sv && (0, VS.jsxs)(VS.Fragment, {
          children: [(0, VS.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, VS.jsx)("h3", {
              children: hv("skyblockGame:lampLightCharms")
            }), (0, VS.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: Sv.oddsFor
            }), (0, VS.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((vv => (0, VS.jsx)("button", {
                type: "button",
                "aria-pressed": Pv.situation === vv,
                className: mS()("SkyblockLampLightSituation", Pv.situation === vv && "Selected"),
                onClick: () => {
                  zv.setSituation(vv)
                },
                children: hv("open" === vv ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, vv)))
            })]
          }), !Sv.heldRod && (0, VS.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: hv("skyblockGame:lampLightHoldRod")
          }), (0, VS.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: Sv.charms.map((vv => (0, VS.jsx)(sg, {
              charm: vv,
              view: Pv,
              controller: zv
            }, vv.id)))
          }), (0, VS.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, VS.jsx)("h3", {
              children: hv("skyblockGame:lampLightTints")
            })
          }), (0, VS.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, VS.jsxs)("li", {
              className: mS()("SkyblockLampLightTint", "Islands", Sv.wearingIslandColours && "Wearing"),
              children: [(0, VS.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, VS.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: hv("skyblockGame:lampLightIslandColours")
              }), Sv.wearingIslandColours ? (0, VS.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: hv("skyblockGame:lampLightWearing")
              }) : (0, VS.jsx)(AS.d, {
                disabled: !Pv.canCommand,
                ariaLabel: hv("skyblockGame:lampLightWearLabel", {
                  tint: hv("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  zv.wearTint(null)
                },
                children: hv("skyblockGame:lampLightWear")
              })]
            }), Sv.tints.map((vv => (0, VS.jsx)(Cg, {
              tint: vv,
              view: Pv,
              controller: zv
            }, vv.id)))]
          })]
        })]
      })
    }

    function cg(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(qh, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)();
      return Pv.releasing ? (0, VS.jsx)(fS.g, {
        children: (0, VS.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            zv.setRelease(!1)
          },
          children: [(0, VS.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, VS.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [hv("skyblockGame:lampLightReleasing"), " \xb7 ", Pv.balance]
          }), (0, VS.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: hv("skyblockGame:lampLightKeepCatches")
          }), null !== Pv.gained && (0, VS.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: Pv.gained.text
          }, Pv.gained.count)]
        })
      }) : null
    }

    function Gg(vv) {
      let {
        island: zv,
        view: Pv,
        aim: hv
      } = vv;
      const {
        t: Sv
      } = (0, DS.x)(), ev = zv.featuredFish;
      return (0, VS.jsxs)("li", {
        className: mS()("SkyblockKeepersChairIsland", `Island-${zv.id}`, zv.favoured && "Aimed", !zv.relit && "Dark"),
        children: [(0, VS.jsx)("h3", {
          children: zv.name
        }), zv.relit && null !== ev ? (0, VS.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, VS.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: Sv("skyblockGame:keepersChairTideNotice")
          }), (0, VS.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, VS.jsx)(YS.b, {
              itemName: ev.itemName,
              amount: 0
            })
          }), (0, VS.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: ev.displayName
          })]
        }) : (0, VS.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, VS.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: Sv("skyblockGame:keepersChairDark")
          })
        }), zv.relit && (zv.favoured ? (0, VS.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: Sv("skyblockGame:keepersChairAimed")
        }) : (0, VS.jsx)(AS.d, {
          className: "SkyblockKeepersChairAim",
          disabled: !Pv.canAim,
          ariaLabel: Sv("skyblockGame:keepersChairAimLabel", {
            island: zv.name
          }),
          onClick: () => {
            hv(zv.id)
          },
          children: Sv("skyblockGame:keepersChairAim")
        }))]
      }, zv.favoured ? Pv.aimedCount : 0)
    }

    function mg(vv) {
      let {
        controller: zv,
        lampLight: Pv
      } = vv;
      const hv = (0, KS.j)(Oh, zv.getSnapshot()),
        Sv = (0, KS.j)(qh, Pv.getSnapshot()),
        [ev, gv] = (0, nv.useState)("lamp"),
        {
          t: pv
        } = (0, DS.x)(),
        dv = HS();
      if (!hv.enabled) return null;
      const Nv = "light" === ev && Sv.enabled;
      return (0, VS.jsx)(ZS.c, {
        show: hv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: mS()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", Nv && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: dv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: pv("skyblockGame:keepersChairTitle")
              }), (0, VS.jsx)("p", {
                children: pv(Nv ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              ariaLabel: pv("skyblockGame:keepersChairClose"),
              onClick: zv.dismiss
            })]
          }), Sv.enabled && (0, VS.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((vv => (0, VS.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === vv === Nv,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === vv === Nv ? "true" : void 0,
              className: mS()("SkyblockKeepersChairTab", "light" === vv === Nv && "Selected"),
              onClick: () => {
                gv(vv)
              },
              children: [pv("lamp" === vv ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === vv && (0, VS.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: Sv.balance
              })]
            }, vv)))
          }), Nv ? (0, VS.jsx)(ig, {
            controller: Pv
          }) : (0, VS.jsx)(jg, {
            view: hv,
            controller: zv
          })]
        })
      })
    }

    function jg(vv) {
      let {
        view: zv,
        controller: Pv
      } = vv;
      const {
        t: hv
      } = (0, DS.x)();
      return (0, VS.jsxs)(VS.Fragment, {
        children: [(0, VS.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: zv.islands.map((vv => (0, VS.jsx)(Gg, {
            island: vv,
            view: zv,
            aim: Pv.aim
          }, vv.id)))
        }), null !== zv.almanac && (0, VS.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, VS.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: hv("skyblockGame:passageTitle")
          }), (0, VS.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, VS.jsx)(lg, {
              phase: zv.almanac.phase
            }), zv.almanac.phaseName]
          }), (0, VS.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, VS.jsx)(lg, {
              phase: zv.almanac.nextPhase
            }), zv.almanac.next]
          })]
        }), (0, VS.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, VS.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: hv("skyblockGame:keepersChairFavour")
          }), zv.aimed && (0, VS.jsx)(AS.K, {
            className: "SkyblockKeepersChairRest",
            disabled: !zv.canAim,
            onClick: () => {
              Pv.aim(null)
            },
            children: hv("skyblockGame:keepersChairRest")
          })]
        }), null !== zv.status && (0, VS.jsx)("p", {
          className: mS()("SkyblockKeepersChairStatus", "refused" === zv.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: zv.status.text
        })]
      })
    }

    function fg(vv) {
      let {
        controller: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)(), hv = (0, KS.j)(Kh, zv.getSnapshot());
      if (!hv.enabled) return null;
      const Sv = hv.freshCount > 0 ? Pv("skyblockGame:reachLogOpenNews", {
        count: hv.freshCount
      }) : Pv("skyblockGame:reachLogOpen");
      return (0, VS.jsx)(fS.g, {
        placement: "statBars",
        children: (0, VS.jsxs)("button", {
          type: "button",
          className: mS()("SkyblockReachLogButton", hv.freshCount > 0 && "HasNews", hv.pending && "Pending"),
          "aria-label": Sv,
          title: Sv,
          onClick: zv.ask,
          children: [hv.news && (0, VS.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${hv.newsToken}`), (0, VS.jsx)("span", {
            className: mS()("SkyblockReachLogIcon", hv.news && "Jump"),
            "aria-hidden": "true",
            children: (0, VS.jsx)(YS.b, {
              itemName: Uh,
              amount: 0
            })
          }, `icon:${hv.newsToken}`), hv.freshCount > 0 && (0, VS.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: hv.freshCount
          })]
        })
      })
    }

    function Fg(vv) {
      let {
        gift: zv
      } = vv;
      return (0, VS.jsx)("li", {
        className: mS()("SkyblockRegularsGift", zv.given && "Given"),
        children: zv.text
      })
    }

    function Yg(vv) {
      let {
        regular: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)();
      return (0, VS.jsxs)("li", {
        className: mS()("SkyblockRegularsCard", zv.tagged ? "Tagged" : "Untagged", zv.resting && "Resting"),
        children: [(0, VS.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, VS.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: zv.fishName,
            children: (0, VS.jsx)(YS.b, {
              itemName: zv.itemName,
              amount: 0
            })
          }), (0, VS.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, VS.jsx)("h3", {
              children: zv.name
            }), (0, VS.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: zv.fishName
            })]
          })]
        }), (0, VS.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: zv.line
        }), (0, VS.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, VS.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: zv.size
          }), zv.tagged && (0, VS.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: zv.resting ? Pv("skyblockGame:regularsResting") : zv.meetings
          })]
        }), (0, VS.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: zv.chance
        }), (0, VS.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: zv.gifts.map((vv => (0, VS.jsx)(Fg, {
            gift: vv
          }, vv.text)))
        }), zv.history.length > 0 && (0, VS.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: zv.history.map(((vv, zv) => (0, VS.jsx)("li", {
            children: vv
          }, zv)))
        })]
      })
    }

    function ng(vv) {
      let {
        controller: zv,
        island: Pv
      } = vv;
      const {
        t: hv
      } = (0, DS.x)(), Sv = (0, KS.j)(vS, zv.getSnapshot()), ev = Sv.islands.find((vv => vv.id === Pv));
      if (!Sv.enabled || void 0 === ev) return null;
      const gv = hv("skyblockGame:regularsOpen");
      return (0, VS.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": gv,
        title: gv,
        onClick: () => {
          zv.openIsland(Pv)
        },
        children: [(0, VS.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: hv("skyblockGame:regularsTitle")
        }), ev.regulars.map((vv => (0, VS.jsx)("span", {
          className: mS()("SkyblockRegularsStripIcon", vv.tagged && "Tagged"),
          title: vv.name,
          children: (0, VS.jsx)(YS.b, {
            itemName: vv.itemName,
            amount: 0
          })
        }, vv.id)))]
      })
    }

    function Og(vv) {
      var zv;
      let {
        controller: Pv
      } = vv;
      const hv = (0, KS.j)(vS, Pv.getSnapshot()),
        {
          t: Sv
        } = (0, DS.x)(),
        ev = HS();
      if (!hv.enabled) return null;
      const gv = null !== (zv = hv.islands.find((vv => vv.id === hv.selected))) && void 0 !== zv ? zv : null;
      return (0, VS.jsx)(ZS.c, {
        show: hv.open,
        close: Pv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: ev,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: Sv("skyblockGame:regularsTitle")
              }), (0, VS.jsx)("p", {
                children: Sv("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              onClick: Pv.dismiss
            })]
          }), (0, VS.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: hv.islands.map((vv => {
              const zv = vv.id === hv.selected;
              return (0, VS.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": zv,
                "data-pad-tab": !0,
                "data-pad-selected": zv ? "true" : void 0,
                className: mS()("SkyblockReachLogTab", `Island-${vv.id}`, zv && "Selected", vv.charm.given && "GoldPage"),
                onClick: () => {
                  Pv.selectIsland(vv.id)
                },
                children: (0, VS.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: vv.name
                })
              }, vv.id)
            }))
          }), (0, VS.jsxs)("div", {
            className: mS()("SkyblockRegularsPage", null !== gv && `Island-${gv.id}`),
            role: "tabpanel",
            children: [(0, VS.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: Sv("skyblockGame:regularsHow")
            }), null !== gv && (0, VS.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: gv.regulars.map((vv => (0, VS.jsx)(Yg, {
                regular: vv
              }, vv.id)))
            })]
          }), null !== gv && (0, VS.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, VS.jsx)("span", {
              className: mS()("SkyblockRegularsCharm", gv.charm.given && "Given"),
              children: gv.charm.text
            })
          })]
        })
      })
    }
    const Dg = [{
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
      Kg = Array.from({
        length: 6
      }, ((vv, zv) => ({
        "--x": `${(88*(.618034*zv%1)).toFixed(1)}%`,
        "--y": `${(10+37*zv%70).toFixed(1)}%`,
        "--size": 7 + zv % 3 * 3 + "rem",
        "--drift-x": 3 * (zv % 3 - 1) + "rem",
        "--drift-y": 2 * (zv % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + zv % 4 * 3 + "s",
        "--delay": 2.5 * -zv + "s"
      }))),
      Vg = Array.from({
        length: 14
      }, ((vv, zv) => ({
        "--left": `${(3+94*((.618034*zv+.3)%1)).toFixed(1)}%`,
        "--size": 4 + zv % 4 * 2 + "px",
        "--sway": zv % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*zv%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*zv%12).toFixed(2)}s`
      }))),
      Ug = (0, nv.memo)((function(vv) {
        let {
          island: zv
        } = vv;
        return (0, VS.jsxs)("div", {
          className: mS()("SkyblockReachLogDepths", null !== zv && `Island-${zv}`),
          "aria-hidden": "true",
          children: [Dg.map(((vv, zv) => (0, VS.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: vv
          }, `shaft${zv}`))), Kg.map(((vv, zv) => (0, VS.jsx)("span", {
            className: mS()("SkyblockReachLogMote", zv % 2 === 1 && "Violet"),
            style: vv
          }, `mote${zv}`))), Vg.map(((vv, zv) => (0, VS.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: vv
          }, `bubble${zv}`)))]
        })
      })),
      Rg = 100;

    function xg(vv) {
      let {
        view: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)();
      if (null === zv || 0 === zv.total) return null;
      const hv = Rg * zv.aspect,
        Sv = Pv("skyblockGame:hiddenWatersCount", {
          found: zv.found,
          total: zv.total
        });
      return (0, VS.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${Pv("skyblockGame:hiddenWatersTitle")}: ${Sv}`,
        children: [(0, VS.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${hv}`,
          "aria-hidden": "true",
          children: [zv.islands.map(((vv, zv) => (0, VS.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (vv.left + vv.width / 2) * Rg,
            cy: (vv.top + vv.height / 2) * hv,
            rx: vv.width / 2 * Rg,
            ry: vv.height / 2 * hv
          }, zv))), zv.pins.map(((vv, zv) => (0, VS.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: vv.left * Rg,
            cy: vv.top * hv,
            r: 13
          }, zv)))]
        }), (0, VS.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, VS.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: Pv("skyblockGame:hiddenWatersTitle")
          }), (0, VS.jsx)("span", {
            className: zv.found === zv.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: Sv
          })]
        })]
      })
    }

    function tg(vv) {
      let {
        view: zv,
        island: Pv
      } = vv;
      const {
        t: hv
      } = (0, DS.x)(), Sv = null === zv || void 0 === zv ? void 0 : zv.glimpses.get(Pv);
      return void 0 === Sv || 0 === Sv.length ? null : (0, VS.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, VS.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: hv("skyblockGame:hiddenWatersGlimpsed")
        }), (0, VS.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: Sv.map((vv => (0, VS.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, VS.jsx)(YS.b, {
              itemName: vv,
              amount: 0
            })
          }, vv)))
        })]
      })
    }
    const qg = ["Bronze", "Silver", "Gold"],
      Ig = [{
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
      Qg = Ig.slice(0, 2);

    function Zg(vv) {
      return vv ? Ig : Qg
    }

    function Ag(vv) {
      let {
        fish: zv,
        letGoShown: Pv
      } = vv;
      const {
        t: hv
      } = (0, DS.x)();
      return (0, VS.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [qg.map(((vv, Pv) => {
          const Sv = Pv < zv.marks;
          return (0, VS.jsx)("span", {
            className: mS()("SkyblockReachLogPip", vv, Sv && "Earned", Sv && zv.fresh && Pv === zv.marks - 1 && "Newest"),
            title: hv(Vh[Pv])
          }, vv)
        })), (0, VS.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Zg(Pv).map(((vv, Pv) => (0, VS.jsx)("span", {
          className: mS()("SkyblockReachLogRibbon", vv.className, !0 === zv.ribbons[Pv] && "Earned"),
          title: hv(vv.titleKey)
        }, vv.className)))]
      })
    }

    function Lg(vv) {
      let {
        letGoShown: zv,
        haloShown: Pv
      } = vv;
      const {
        t: hv
      } = (0, DS.x)();
      return (0, VS.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, VS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: hv("skyblockGame:reachLogMarks"),
          children: [(0, VS.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), hv("skyblockGame:reachLogLegendMarks")]
        }), Zg(zv).map((vv => (0, VS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: hv(vv.titleKey),
          children: [(0, VS.jsx)("span", {
            className: mS()("SkyblockReachLogRibbon", vv.className, "Earned")
          }), hv(vv.legendKey)]
        }, vv.className))), (0, VS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: hv("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, VS.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), hv("skyblockGame:reachLogLegendGlimmer")]
        }), Pv && (0, VS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: hv("skyblockGame:reachLogHaloTitle"),
          children: [(0, VS.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), hv("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Hg(vv) {
      let {
        returner: zv
      } = vv;
      return (0, VS.jsxs)("div", {
        className: mS()("SkyblockReachLogReturner", zv.back && "Back"),
        children: [(0, VS.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, VS.jsx)(YS.b, {
            itemName: zv.itemName,
            amount: 0
          })
        }), (0, VS.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: zv.line
        })]
      })
    }

    function Mg(vv) {
      let {
        fish: zv,
        letGoShown: Pv
      } = vv;
      const {
        t: hv
      } = (0, DS.x)();
      return (0, VS.jsxs)("li", {
        className: mS()("SkyblockReachLogCard", zv.caught ? "Caught" : "Unknown", zv.marks >= 3 && "GoldCard", zv.fresh && "Fresh", zv.visitor && "Visitor"),
        children: [zv.visitor && (0, VS.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: hv("skyblockGame:reachLogVisitor")
        }), zv.fresh && Array.from({
          length: 4
        }, ((vv, zv) => (0, VS.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, zv))), (0, VS.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [zv.halo && (0, VS.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: hv("skyblockGame:reachLogHaloTitle")
          }), (0, VS.jsx)(YS.b, {
            itemName: zv.itemName,
            amount: 0
          }), zv.glimmer && (0, VS.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: hv("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, VS.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: zv.name
        }), (0, VS.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: zv.chance
        }), (0, VS.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: zv.best
        }), (0, VS.jsx)(Ag, {
          fish: zv,
          letGoShown: Pv
        })]
      })
    }

    function yg(vv) {
      let {
        page: zv,
        letGoShown: Pv,
        hiddenWaters: hv
      } = vv;
      const {
        t: Sv
      } = (0, DS.x)();
      return zv.awake ? (0, VS.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: zv.fish.map((vv => (0, VS.jsx)(Mg, {
          fish: vv,
          letGoShown: Pv
        }, vv.itemName)))
      }) : (0, VS.jsxs)(VS.Fragment, {
        children: [(0, VS.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: Sv("skyblockGame:reachLogAsleep")
        }), (0, VS.jsx)(tg, {
          view: hv,
          island: zv.id
        })]
      })
    }

    function Bg(vv) {
      var zv, Pv;
      let {
        controller: hv,
        regulars: Sv,
        hiddenWaters: ev
      } = vv;
      const gv = (0, KS.j)(Kh, hv.getSnapshot()),
        pv = function(vv) {
          return (0, KS.j)(eS, vv.getSnapshot())
        }(ev),
        dv = (0, KS.j)(vS, Sv.getSnapshot()),
        {
          t: Nv
        } = (0, DS.x)(),
        lv = HS();
      if (!gv.enabled) return null;
      const Tv = null !== (zv = gv.pages.find((vv => vv.id === gv.selected))) && void 0 !== zv ? zv : null;
      return (0, VS.jsx)(ZS.c, {
        show: gv.open,
        close: hv.dismiss,
        togglePointerLock: !1,
        className: mS()("SkyblockSkillsOverlay", dv.open && "SkyblockReachLogUnderLedger"),
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: lv,
          onKeyDown: LS,
          children: [(0, VS.jsx)(Ug, {
            island: null !== (Pv = null === Tv || void 0 === Tv ? void 0 : Tv.id) && void 0 !== Pv ? Pv : null
          }), (0, VS.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: Nv("skyblockGame:reachLogTitle")
              }), (0, VS.jsx)("p", {
                children: Nv("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, VS.jsx)(xg, {
              view: pv
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              onClick: hv.dismiss
            })]
          }), (0, VS.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: gv.pages.map((vv => {
              const zv = vv.id === gv.selected,
                Pv = vv.fish.some((vv => vv.fresh));
              return (0, VS.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": zv,
                "data-pad-tab": !0,
                "data-pad-selected": zv ? "true" : void 0,
                className: mS()("SkyblockReachLogTab", `Island-${vv.id}`, zv && "Selected", !vv.awake && "Asleep", vv.gold && "GoldPage", Pv && "HasNews"),
                onClick: () => {
                  hv.selectPage(vv.id)
                },
                children: [(0, VS.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: vv.name
                }), vv.awake && (0, VS.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: Nv("skyblockGame:reachLogCaughtCount", {
                    caught: vv.caught,
                    total: vv.total
                  })
                })]
              }, vv.id)
            }))
          }), (0, VS.jsxs)("div", {
            className: mS()("SkyblockReachLogPage", null !== Tv && `Island-${Tv.id}`),
            role: "tabpanel",
            children: [null !== Tv && (0, VS.jsx)(yg, {
              page: Tv,
              letGoShown: gv.letGoShown,
              hiddenWaters: pv
            }), !0 === (null === Tv || void 0 === Tv ? void 0 : Tv.awake) && null !== Tv.returner && (0, VS.jsx)(Hg, {
              returner: Tv.returner
            }), !0 === (null === Tv || void 0 === Tv ? void 0 : Tv.awake) && (0, VS.jsx)(ng, {
              controller: Sv,
              island: Tv.id
            })]
          }), (0, VS.jsx)("footer", {
            className: mS()("SkyblockReachLogFooter", null !== Tv && `Island-${Tv.id}`, !0 === (null === Tv || void 0 === Tv ? void 0 : Tv.gold) && "GoldPage"),
            children: !0 === (null === Tv || void 0 === Tv ? void 0 : Tv.gold) ? (0, VS.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: Nv("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, VS.jsxs)(VS.Fragment, {
              children: [(0, VS.jsx)(Lg, {
                letGoShown: gv.letGoShown,
                haloShown: !0 === (null === Tv || void 0 === Tv ? void 0 : Tv.fish.some((vv => vv.halo)))
              }), (0, VS.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: Nv("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Jg = Pv(4574);

    function Eg(vv) {
      let {
        conversation: zv,
        completedLabel: Pv
      } = vv;
      return (0, VS.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, VS.jsxs)("header", {
          children: [(0, VS.jsx)("h3", {
            children: zv.questName
          }), zv.completed && (0, VS.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: Pv
          })]
        }), zv.lines.map((vv => (0, VS.jsx)(Jg.b, {
          display: vv.display
        }, vv.key)))]
      })
    }

    function og(vv) {
      let {
        controller: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)(), hv = (0, KS.j)(pS, zv.getSnapshot()), Sv = HS();
      if (!hv.enabled) return null;
      const ev = !hv.loading && 0 === hv.conversations.length;
      return (0, VS.jsx)(ZS.c, {
        show: hv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: Sv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: Pv("skyblockDialogue:title")
              }), (0, VS.jsx)("p", {
                children: Pv("skyblockDialogue:intro")
              })]
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              onClick: zv.dismiss
            })]
          }), (0, VS.jsxs)("div", {
            className: mS()("SkyblockDialogueBody", {
              SingleColumn: null !== hv.questFocus || 0 === hv.characters.length
            }),
            children: [null === hv.questFocus && hv.characters.length > 0 && (0, VS.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: hv.characters.map((vv => (0, VS.jsx)(AS.d, {
                className: mS()("SkyblockDialogueCharacter", {
                  Selected: vv.selected
                }),
                onClick: () => {
                  zv.selectCharacter(vv.id)
                },
                children: (0, VS.jsx)(nS.c, {
                  text: vv.styling
                })
              }, vv.id)))
            }), (0, VS.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== hv.questFocus && (0, VS.jsx)(AS.d, {
                className: "SkyblockDialogueBack",
                onClick: zv.showCharacters,
                children: Pv("skyblockDialogue:allCharacters")
              }), hv.loading && (0, VS.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Pv("skyblockDialogue:loading")
              }), ev && (0, VS.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: Pv(null === hv.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), hv.conversations.map((vv => (0, VS.jsx)(Eg, {
                conversation: vv,
                completedLabel: hv.completedLabel
              }, vv.questId)))]
            })]
          })]
        })
      })
    }

    function bg(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(WS, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = HS();
      return Pv.enabled ? (0, VS.jsx)(ZS.c, {
        show: Pv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: Sv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: hv("skyblockGame:autographBook")
              }), (0, VS.jsx)("p", {
                children: hv("skyblockGame:autographBookIntro")
              })]
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              onClick: zv.dismiss
            })]
          }), (0, VS.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, VS.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, VS.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, VS.jsx)("strong", {
                  children: Pv.total
                }), (0, VS.jsx)("span", {
                  children: hv("skyblockGame:autographTotal")
                })]
              }), (0, VS.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, VS.jsx)("strong", {
                  children: Pv.rankTotal
                }), (0, VS.jsx)("span", {
                  children: hv("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === Pv.entries.length ? (0, VS.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: hv("skyblockGame:autographBookEmpty")
            }) : (0, VS.jsx)("ul", {
              className: "SkyblockAutographList",
              children: Pv.entries.map((vv => (0, VS.jsxs)("li", {
                className: mS()("SkyblockAutograph", {
                  Ranked: null !== vv.rank
                }),
                style: null === vv.rank ? void 0 : {
                  color: vv.rank.colour
                },
                children: [null !== vv.rank && (0, VS.jsx)(We.b, {
                  className: "SkyblockAutographRankIcon",
                  name: vv.rank.icon,
                  kit: (0, We.e)(vv.rank.icon)
                }), (0, VS.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, VS.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: vv.name
                  }), (0, VS.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== vv.rank && (0, VS.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: vv.rank.label
                    }), (0, VS.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: vv.signedOn
                    })]
                  })]
                })]
              }, vv.key)))
            })]
          })]
        })
      }) : null
    }
    const rg = (0, nv.memo)((function(vv) {
        let {
          controller: zv
        } = vv;
        return (0, VS.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: zv.display.mountWaypoint,
          children: [(0, VS.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, VS.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, VS.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, VS.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, VS.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, VS.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      kg = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Xg(vv) {
      return "next" === vv.phase ? "\u2192" : kg[vv.kind]
    }
    const ug = (0, nv.memo)((function(vv) {
      let {
        controller: zv,
        display: Pv
      } = vv;
      const hv = (0, KS.j)(lP, zv.getNotificationSnapshot()),
        [Sv, ev] = (0, nv.useState)(!1);
      return (0, KS.g)("qteStateUpdated", (vv => {
        ev(vv.isActive)
      })), (0, VS.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (Sv ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [hv && (0, VS.jsxs)("div", {
          className: `SkyblockQuestNotification ${hv.kind} ${hv.phase}`,
          style: {
            "--quest-notification-duration": `${hv.durationMs}ms`,
            ...hv.accent && {
              "--quest-notification-accent": hv.accent
            }
          },
          children: [(0, VS.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (hv.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, VS.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Xg(hv)
            }), hv.iconItem && (0, VS.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, VS.jsx)(YS.b, {
                itemName: hv.iconItem,
                amount: 0
              })
            })]
          }), (0, VS.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, VS.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: hv.title
            }), (0, VS.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, VS.jsx)(ee.c, {
                text: hv.name
              })
            }), hv.description && (0, VS.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, VS.jsx)(ee.c, {
                text: hv.description
              })
            }), hv.reward && (0, VS.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, VS.jsx)(ee.c, {
                text: hv.reward
              })
            })]
          })]
        }, hv.token), (null === hv || void 0 === hv ? void 0 : hv.waypointNameKey) && (0, VS.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": hv.waypointNameKey,
          "data-notification-token": hv.token,
          ref: Pv.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${hv.token}`)]
      })
    }));

    function vp(vv) {
      const zv = parseInt(vv.replace("#", ""), 16);
      return `${zv>>16&255}, ${zv>>8&255}, ${255&zv}`
    }
    const zp = (0, nv.memo)((function(vv) {
      let {
        controller: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)(), hv = (0, KS.j)(QP, zv.getSnapshot());
      if (!hv) return null;
      const Sv = "arrival" === hv.phase;
      return (0, VS.jsxs)("div", {
        className: mS()("SkyblockPortalTransit", {
          Departure: !Sv,
          Arrival: Sv
        }),
        style: {
          "--portal-rgb": vp(hv.colour),
          "--portal-duration": `${hv.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, VS.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, VS.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            zv.finishArrival(hv.token)
          }
        }), (0, VS.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, VS.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !Sv && (0, VS.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: Pv("skyblockGame:portalTransitHeading")
          }), (0, VS.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: Pv(hv.zoneNameKey)
          })]
        })]
      }, hv.token)
    }));

    function Pp() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function hp() {
      const vv = document.querySelector(".SkyblockHudCoins"),
        zv = null === vv || void 0 === vv ? void 0 : vv.getBoundingClientRect();
      return zv && zv.width > 0 ? {
        x: zv.left + Math.min(zv.width, 24) / 2,
        y: zv.top + zv.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Sp(vv) {
      return {
        x: vv.left + vv.width / 2,
        y: vv.top + vv.height / 2
      }
    }

    function ep() {
      var vv;
      const zv = null === (vv = document.querySelector(".HotBar")) || void 0 === vv ? void 0 : vv.getBoundingClientRect();
      return zv && zv.width > 0 ? Sp(zv) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function gp(vv) {
      let {
        items: zv,
        origins: Pv,
        target: hv
      } = vv;
      return (0, VS.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: zv.map(((vv, zv) => {
          const Sv = Pv[zv];
          return (0, VS.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${Sv.x}px`,
              top: `${Sv.y}px`,
              "--item-dx": hv.x - Sv.x + "px",
              "--item-dy": hv.y - Sv.y + "px",
              "--item-delay": 2e3 + 160 * zv + "ms",
              "--item-flight": "700ms"
            },
            children: (0, VS.jsx)(YS.b, {
              itemName: vv.dailyRewardItemName,
              amount: 0
            })
          }, vv.dailyRewardItemName)
        }))
      })
    }

    function pp(vv, zv) {
      const Pv = -Math.PI / 2 + 1.25 * (vv / (zv - 1) * 2 - 1),
        hv = 70 + vv % 3 * 22;
      return {
        x: Math.cos(Pv) * hv,
        y: Math.sin(Pv) * hv * .7
      }
    }

    function dp(vv) {
      let {
        origin: zv,
        target: Pv,
        count: hv
      } = vv;
      const Sv = [];
      for (let ev = 0; ev < hv; ev++) {
        const vv = pp(ev, hv);
        Sv.push((0, VS.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${zv.x}px`,
            top: `${zv.y}px`,
            "--coin-bx": `${vv.x}px`,
            "--coin-by": `${vv.y}px`,
            "--coin-dx": Pv.x - zv.x + "px",
            "--coin-dy": Pv.y - zv.y + "px",
            "--coin-delay": `${yP(ev,hv)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, VS.jsx)(YS.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, ev))
      }
      return (0, VS.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: Sv
      })
    }

    function Np(vv) {
      let {
        day: zv
      } = vv;
      const Pv = Ov[zv - 1];
      return (0, VS.jsxs)(VS.Fragment, {
        children: [(0, VS.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, VS.jsx)(YS.b, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, OS.f)(Pv.dailyRewardCoins)]
        }), Pv.dailyRewardItems.map((vv => (0, VS.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, VS.jsx)(YS.b, {
            itemName: vv.dailyRewardItemName,
            amount: 0
          }), "\xd7", vv.dailyRewardItemAmount]
        }, vv.dailyRewardItemName)))]
      })
    }

    function lp(vv) {
      let {
        day: zv
      } = vv;
      const Pv = Kv(zv);
      return (0, VS.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: Ov.map(((vv, hv) => {
          const Sv = hv + 1;
          return (0, VS.jsxs)("li", {
            className: mS()("SkyblockDailyRewardTile", {
              Claimed: Sv < zv && Sv !== Pv,
              Today: Sv === zv,
              Tomorrow: Sv === Pv,
              Jackpot: Sv === Dv
            }),
            children: [(0, VS.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: Sv
            }), (0, VS.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, VS.jsx)(YS.b, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, OS.f)(vv.dailyRewardCoins)]
            }), vv.dailyRewardItems.map((vv => (0, VS.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, VS.jsx)(YS.b, {
                itemName: vv.dailyRewardItemName,
                amount: 0
              }), "\xd7", vv.dailyRewardItemAmount]
            }, vv.dailyRewardItemName)))]
          }, Sv)
        }))
      })
    }

    function Tp(vv) {
      let {
        view: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)(), hv = (0, nv.useRef)(null), Sv = (0, nv.useRef)(null), [ev, gv] = (0, nv.useState)(null);
      (0, nv.useLayoutEffect)((() => {
        var vv;
        const zv = null === (vv = hv.current) || void 0 === vv ? void 0 : vv.getBoundingClientRect();
        if (zv) {
          var Pv, ev;
          const vv = Array.from(null !== (Pv = null === (ev = Sv.current) || void 0 === ev ? void 0 : ev.children) && void 0 !== Pv ? Pv : [], (vv => Sp(vv.getBoundingClientRect())));
          gv({
            origin: Sp(zv),
            target: hp(),
            itemOrigins: vv,
            itemTarget: ep()
          })
        }
      }), []);
      const pv = Kv(zv.day),
        dv = function(vv, zv) {
          const [Pv, hv] = (0, nv.useState)((() => Pp() ? vv : 0));
          return (0, nv.useEffect)((() => {
            if (Pp()) return;
            const Pv = performance.now();
            let Sv = 0;
            const ev = gv => {
              const pv = Math.min(Math.max((gv - Pv) / zv, 0), 1);
              hv(Math.round(vv * (1 - (1 - pv) ** 3))), pv < 1 && (Sv = requestAnimationFrame(ev))
            };
            return Sv = requestAnimationFrame(ev), () => {
              cancelAnimationFrame(Sv)
            }
          }), [vv, zv]), Pv
        }(zv.coins, 450);
      return (0, VS.jsxs)("div", {
        className: mS()("SkyblockDailyReward", {
          Jackpot: zv.day === Dv
        }),
        style: {
          "--daily-duration": `${zv.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, VS.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, VS.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, VS.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, VS.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: Pv("skyblockGame:dailyRewardTitle")
            }), (0, VS.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: Pv("skyblockGame:dailyRewardDay", {
                day: String(zv.day)
              })
            })]
          }), (0, VS.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: hv,
            children: [(0, VS.jsx)(YS.b, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, VS.jsxs)("span", {
              children: ["+", (0, OS.f)(dv)]
            })]
          }), zv.items.length > 0 && (0, VS.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: Sv,
            children: zv.items.map((vv => (0, VS.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, VS.jsx)(YS.b, {
                itemName: vv.dailyRewardItemName,
                amount: 0
              }), "\xd7", vv.dailyRewardItemAmount]
            }, vv.dailyRewardItemName)))
          }), (0, VS.jsx)(lp, {
            day: zv.day
          }), (0, VS.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [Pv("skyblockGame:dailyRewardComeBack"), (0, VS.jsx)(Np, {
              day: pv
            })]
          })]
        }), null !== ev && (0, VS.jsx)(dp, {
          origin: ev.origin,
          target: ev.target,
          count: zv.flyingCoins
        }), null !== ev && ev.itemOrigins.length === zv.items.length && (0, VS.jsx)(gp, {
          items: zv.items,
          origins: ev.itemOrigins,
          target: ev.itemTarget
        })]
      })
    }
    const Wp = (0, nv.memo)((function(vv) {
        let {
          controller: zv
        } = vv;
        const Pv = (0, KS.j)(LP, zv.getSnapshot());
        return Pv ? (0, VS.jsx)(Tp, {
          view: Pv
        }, Pv.token) : null
      })),
      wp = "Gold Coin";

    function ap(vv) {
      return 650 + 220 * vv
    }

    function sp(vv) {
      return {
        "--letter-delay": `${ap(vv)}ms`,
        "--letter-land": `${ap(vv)+300}ms`
      }
    }

    function Cp(vv) {
      let {
        letterCount: zv
      } = vv;
      return (0, VS.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, VS.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, VS.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, VS.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: zv
        }, ((vv, zv) => (0, VS.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: sp(zv),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, zv)))]
      })
    }

    function ip(vv) {
      var zv, Pv, hv;
      let {
        letter: Sv,
        index: ev
      } = vv;
      const {
        t: gv
      } = (0, DS.x)(), pv = null !== (zv = null === (Pv = Sv.items[0]) || void 0 === Pv ? void 0 : Pv.itemName) && void 0 !== zv ? zv : wp;
      return (0, VS.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: sp(ev),
        children: [(0, VS.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, VS.jsx)(YS.b, {
            itemName: pv,
            amount: 0
          })
        }), (0, VS.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: gv(Sv.reasonKey, null !== (hv = Sv.reasonParams) && void 0 !== hv ? hv : void 0)
        }), (0, VS.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [Sv.coins > 0 && (0, VS.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, VS.jsx)(YS.b, {
              itemName: wp,
              amount: 0
            }), "+", (0, OS.f)(Sv.coins)]
          }), Sv.items.map(((vv, zv) => (0, VS.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, VS.jsx)(YS.b, {
              itemName: vv.itemName,
              amount: 0
            }), vv.label, " \xd7", vv.amount]
          }, zv)))]
        })]
      })
    }

    function cp(vv) {
      let {
        view: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)();
      return (0, VS.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${zv.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${ap(zv.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, VS.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, VS.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, VS.jsx)(Cp, {
              letterCount: zv.letters.length
            }), (0, VS.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: Pv("skyblockGame:mailboxTitle")
            })]
          }), (0, VS.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: zv.letters.map(((vv, zv) => (0, VS.jsx)(ip, {
              letter: vv,
              index: zv
            }, zv)))
          }), zv.more > 0 && (0, VS.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: Pv("skyblockGame:mailboxMore", {
              count: String(zv.more)
            })
          })]
        })
      })
    }
    const Gp = (0, nv.memo)((function(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(JP, zv.getSnapshot());
      return Pv ? (0, VS.jsx)(cp, {
        view: Pv
      }, Pv.token) : null
    }));

    function mp(vv) {
      let {
        controller: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)(), hv = (0, KS.j)(Qh, zv.getSnapshot());
      if (null === hv) return null;
      const Sv = hv.fullSet ? "empty" === hv.fuelState ? {
        text: Pv("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: Pv("skyblockGame:magmawardHudFullSet", {
          worn: String(hv.wornCount)
        }),
        tone: "partial"
      };
      return (0, VS.jsx)(fS.g, {
        placement: "statBars",
        children: (0, VS.jsxs)("div", {
          className: mS()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${hv.fuelState}`, {
            "SkyblockMagmawardHud-partial": !hv.fullSet,
            "SkyblockMagmawardHud-armed": hv.fullSet && "empty" !== hv.fuelState
          }),
          children: [null !== hv.flare && (0, VS.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${hv.flare}`
          }, `flare:${hv.flareToken}`), (0, VS.jsx)("div", {
            className: mS()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: hv.setLit
            }),
            children: hv.pieces.map(((vv, zv) => (0, VS.jsx)("div", {
              className: mS()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: vv.worn,
                SkyblockMagmawardPieceJustWorn: vv.justWorn
              }),
              children: (0, VS.jsx)(YS.b, {
                itemName: vv.itemName,
                amount: 0
              })
            }, `${zv}:${vv.wornToken}`)))
          }, `pieces:${hv.setLitToken}`), (0, VS.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, VS.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, VS.jsxs)("div", {
              className: mS()("SkyblockMagmawardFuelCounter", hv.pulse && `SkyblockMagmawardFuelCounter-${hv.pulse}`),
              children: [(0, VS.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, VS.jsx)(YS.b, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, VS.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: hv.fuel
              })]
            }, `counter:${hv.pulseToken}`), "burn" === hv.pulse && (0, VS.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${hv.pulseToken}`)]
          }), Sv && (0, VS.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${Sv.tone} SmallTextBold`,
            children: Sv.text
          })]
        })
      })
    }

    function jp(vv) {
      let {
        controller: zv
      } = vv;
      const {
        t: Pv,
        selectedLanguage: hv
      } = (0, DS.x)(), Sv = (0, KS.j)(Ah, zv.getSnapshot());
      return null === Sv ? null : (0, VS.jsx)(fS.g, {
        placement: "statBars",
        children: (0, VS.jsxs)("div", {
          className: mS()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: Sv.inRange
          }),
          style: {
            "--glowtide-colour": Sv.colour
          },
          "aria-label": Pv("skyblockGame:glowtideChipLabel"),
          children: [(0, VS.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), Sv.inRange ? (0, VS.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: Pv("skyblockGame:glowtideChipInRange")
          }, `call:${Sv.inRangeToken}`) : (0, VS.jsxs)(VS.Fragment, {
            children: [(0, VS.jsx)("div", {
              ref: zv.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, VS.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: Pv("skyblockGame:waypointDistance", {
                distance: fv(Sv.distance, hv.code)
              })
            })]
          })]
        })
      })
    }

    function fp(vv) {
      let {
        controller: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)(), hv = (0, KS.j)(Hh, zv.getSnapshot());
      return null === hv ? null : (0, VS.jsx)(fS.g, {
        placement: "statBars",
        children: (0, VS.jsxs)("div", {
          className: mS()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: hv.full
          }),
          "aria-label": Pv("skyblockGame:glowMeterLabel", {
            fill: String(hv.fill),
            GT: String(hv.GT)
          }),
          children: [hv.burst && (0, VS.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${hv.burstToken}`), (0, VS.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, VS.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${hv.ratio})`
              }
            }), hv.gained && (0, VS.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${hv.gainToken}`), hv.full && Array.from({
              length: 5
            }, ((vv, zv) => (0, VS.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, zv)))]
          }), hv.full && hv.rares.map((vv => (0, VS.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, VS.jsx)(YS.b, {
              itemName: vv,
              amount: 0
            })
          }, vv))), hv.ready && (0, VS.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, VS.jsx)("span", {
              children: Pv("skyblockGame:glowMeterReady")
            })
          }, `ready:${hv.fullToken}`)]
        })
      })
    }

    function Fp(vv) {
      let {
        controller: zv
      } = vv;
      const {
        t: Pv
      } = (0, DS.x)(), hv = (0, KS.j)(yh, zv.getSnapshot());
      if (null === hv) return null;
      const Sv = "waiting" === hv.phase,
        ev = {
          animationDuration: `${hv.waitMs}ms`,
          animationDelay: -hv.elapsedMs + "ms"
        },
        gv = Sv ? void 0 : {
          animationDuration: `${hv.waitMs}ms`
        };
      return (0, VS.jsxs)("div", {
        className: Sv ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [Sv && (0, VS.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((vv, zv) => (0, VS.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, zv))), (0, VS.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: ev
          }), (0, VS.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, VS.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, VS.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: ev
            })]
          }), (0, VS.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, VS.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: gv,
          children: Pv(hv.line)
        }, hv.lineIndex)]
      }, hv.token)
    }

    function Yp(vv) {
      let {
        chart: zv,
        showHere: Pv,
        className: hv
      } = vv;
      return (0, VS.jsx)("div", {
        className: mS()("SkyblockTideChartGrid", hv, null !== zv.pictureName && "Complete"),
        "aria-hidden": "true",
        children: zv.cells.map(((vv, hv) => {
          const Sv = 0 !== (zv.pulseCells & 1 << hv),
            ev = zv.castCell === hv;
          return (0, VS.jsx)("span", {
            className: mS()("SkyblockTideChartCell", `Cell-${vv}`, Sv && "Pulse", ev && "Cast", Pv && zv.hereCell === hv && "Here")
          }, `${hv}:${Sv?`p${zv.pulseToken}`:""}:${ev?`c${zv.castToken}`:""}`)
        }))
      })
    }

    function np(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(Jh, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = Pv.chip;
      if (!Pv.enabled || null === Sv) return null;
      const ev = hv("skyblockGame:tideChartsChipLabel", {
        island: Sv.islandName,
        lit: String(Sv.lit),
        ink: String(Sv.ink)
      });
      return (0, VS.jsx)(fS.g, {
        placement: "statBars",
        children: (0, VS.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: mS()("SkyblockTideChartsChip", Pv.open && "Open", null !== Sv.pictureName && "Complete"),
          "aria-label": ev,
          title: ev,
          onMouseDown: vv => {
            vv.preventDefault()
          },
          onClick: zv.toggle,
          children: [(0, VS.jsx)(Yp, {
            chart: Sv,
            showHere: !1,
            className: "Mini"
          }), (0, VS.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [Sv.lit, "/", Sv.ink]
          })]
        })
      })
    }

    function Op(vv) {
      let {
        controller: zv
      } = vv;
      const Pv = (0, KS.j)(Jh, zv.getSnapshot()),
        {
          t: hv
        } = (0, DS.x)(),
        Sv = HS(),
        ev = Pv.card;
      return Pv.enabled && null !== ev ? (0, VS.jsx)(ZS.c, {
        show: Pv.open,
        close: zv.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, VS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: Sv,
          onKeyDown: LS,
          children: [(0, VS.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, VS.jsxs)("div", {
              children: [(0, VS.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: hv("skyblockGame:tideChartsTitle")
              }), (0, VS.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: hv("skyblockGame:tideChartsIntro")
              })]
            }), (0, VS.jsx)(AS.i, {
              padIgnore: !0,
              ariaLabel: hv("skyblockGame:tideChartsClose"),
              onClick: zv.dismiss
            })]
          }), Pv.tabs.length > 1 && (0, VS.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": hv("skyblockGame:tideChartsIslands"),
            children: Pv.tabs.map((vv => (0, VS.jsx)("button", {
              type: "button",
              className: mS()("SkyblockTideChartsTab", vv.selected && "Selected"),
              "aria-pressed": vv.selected,
              onClick: () => {
                zv.HW(vv.island)
              },
              children: vv.name
            }, vv.island)))
          }), (0, VS.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, VS.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": ev.gridLabel,
              children: (0, VS.jsx)(Yp, {
                chart: ev,
                showHere: !0,
                className: "Large"
              })
            }), (0, VS.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, VS.jsx)("h3", {
                children: ev.islandName
              }), (0, VS.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: ev.litText
              }), null === ev.pictureName ? (0, VS.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: hv("skyblockGame:tideChartsPictureHidden")
              }) : (0, VS.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: hv("skyblockGame:tideChartsPictureRevealed", {
                  picture: ev.pictureName
                })
              }, ev.pictureName), (0, VS.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, VS.jsxs)("li", {
                  children: [(0, VS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), hv("skyblockGame:tideChartsLegendLit")]
                }), (0, VS.jsxs)("li", {
                  children: [(0, VS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), hv("skyblockGame:tideChartsLegendClear")]
                }), null !== ev.hereCell && (0, VS.jsxs)("li", {
                  children: [(0, VS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), hv("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, VS.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, VS.jsx)("span", {
                  children: Pv.turnsText
                }), (0, VS.jsx)("span", {
                  children: Pv.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Dp(vv) {
      var zv;
      let {
        controller: Pv
      } = vv;
      const {
        selectedLanguage: hv
      } = (0, DS.x)(), Sv = hv.code;
      (0, nv.useEffect)((() => {
        Pv.setTranslator(((vv, zv) => (0, DS.r)(Sv, vv, zv)), Sv, ((vv, zv) => (0, DS.j)(Sv, vv, zv)))
      }), [Pv, Sv]);
      const ev = (0, KS.j)(Wv, Pv.map.getSnapshot()),
        {
          openInGameMenuName: gv
        } = (0, jS.i)(["openInGameMenuName"]);
      return (0, VS.jsxs)(VS.Fragment, {
        children: [(0, VS.jsx)(ug, {
          controller: Pv.quests,
          display: Pv.navigation.display
        }), ev.enabled && !gv && (0, VS.jsx)(Pe, {
          controller: Pv.navigation
        }), (0, VS.jsx)(US, {
          controller: Pv,
          minimap: ev.enabled && (null === (zv = ev.presentation) || void 0 === zv ? void 0 : zv.minimap) && (0, VS.jsx)(ze, {
            view: ev.presentation.minimap,
            navigation: Pv.navigation,
            controller: Pv.map
          }),
          children: (0, VS.jsx)(Te, {
            controller: Pv.quests,
            surface: "hud"
          })
        }), (0, VS.jsx)(rg, {
          controller: Pv.navigation
        }), (0, VS.jsx)(zp, {
          controller: Pv.portalTransit
        }), (0, VS.jsx)(Wp, {
          controller: Pv.dailyReward
        }), (0, VS.jsx)(Gp, {
          controller: Pv.mailbox
        }), (0, VS.jsx)(mp, {
          controller: Pv.magmaward
        }), (0, VS.jsx)(jp, {
          controller: Pv.glowtide
        }), (0, VS.jsx)(Tg, {
          controller: Pv.passage
        }), (0, VS.jsx)(np, {
          controller: Pv.tideCharts
        }), (0, VS.jsx)(fp, {
          controller: Pv.glowMeter
        }), (0, VS.jsx)(fg, {
          controller: Pv.reachLog
        }), (0, VS.jsx)(Fp, {
          controller: Pv.hushWait
        }), (0, VS.jsx)(cg, {
          controller: Pv.lampLight
        }), (0, VS.jsx)(he, {
          controller: Pv.skills,
          surface: "hud"
        })]
      })
    }

    function Kp(vv) {
      let {
        controller: zv
      } = vv;
      return (0, VS.jsxs)(VS.Fragment, {
        children: [(0, VS.jsx)(ve, {
          controller: zv.map,
          navigation: zv.navigation
        }), (0, VS.jsx)(he, {
          controller: zv.skills,
          surface: "menu"
        }), (0, VS.jsx)(Te, {
          controller: zv.quests,
          surface: "menu"
        }), (0, VS.jsx)(Je, {
          controller: zv.dungeons
        }), (0, VS.jsx)(be, {
          controller: zv.collections
        }), (0, VS.jsx)(Xe, {
          controller: zv.questGraph
        }), (0, VS.jsx)(hg, {
          controller: zv.forge
        }), (0, VS.jsx)(Ng, {
          controller: zv.smuggler
        }), (0, VS.jsx)(mg, {
          controller: zv.keepersChair,
          lampLight: zv.lampLight
        }), (0, VS.jsx)(Bg, {
          controller: zv.reachLog,
          regulars: zv.regulars,
          hiddenWaters: zv.hiddenWaters
        }), (0, VS.jsx)(Og, {
          controller: zv.regulars
        }), (0, VS.jsx)(wg, {
          controller: zv.passage
        }), (0, VS.jsx)(Op, {
          controller: zv.tideCharts
        }), (0, VS.jsx)(og, {
          controller: zv.dialogue
        }), (0, VS.jsx)(bg, {
          controller: zv.autographs
        })]
      })
    }
    var Vp = Pv(36271);
    const Up = vh + ph;

    function Rp(vv, zv, Pv, hv, Sv) {
      const ev = [],
        gv = [],
        pv = Pv => {
          const hv = vv.playSound(zv, Pv.sound, Pv.volume, Pv.rate);
          hv && (gv.push(hv), void 0 !== Pv.cutAfter && ev.push(setTimeout((() => {
            hv.fade(hv.getVolume(), 0, 300)
          }), Pv.cutAfter)))
        };
      for (const dv of function(vv, zv) {
          const Pv = [{
            sound: "rpgKnifeSlice1",
            beat: vh,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: vh,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: vh,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: vh,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: vh,
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
            sound: (0, Vp.e)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Up + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Vp.e)("bigDrumSwish"),
            beat: Up + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Up + 60,
            lead: 180,
            volume: .5 + .06 * vv,
            rate: .82 + .07 * vv
          }];
          return vv >= 4 && Pv.push({
            sound: "exp_levelup",
            beat: Up + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), zv && Pv.push({
            sound: "trumpetFlare",
            beat: Up + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), Pv.push({
            sound: "harp_pling",
            beat: zh,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), Pv
        }(Pv, hv)) Sv ? ev.push(setTimeout((() => {
        pv(dv)
      }), Math.max(0, dv.beat - dv.lead / dv.rate))) : dv.beat !== vh && "magicAccent2" !== dv.sound && "trumpetFlare" !== dv.sound || pv(dv);
      return () => {
        for (const vv of ev) clearTimeout(vv);
        for (const vv of gv) vv.fade(vv.getVolume(), 0, 120)
      }
    }
    class xp {
      constructor(vv) {
        this.deps = vv, this.pending = new Map, this.localHook = null
      }
      hookWaiting(vv, zv) {
        this.pending.delete(vv);
        const Pv = this.deps.now();
        if (null === zv) {
          var hv;
          if ((null === (hv = this.localHook) || void 0 === hv ? void 0 : hv.hookId) === vv) {
            const vv = Pv >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(vv)
          }
          return
        }
        const Sv = Pv + zv;
        this.settle(vv, Sv) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(vv, {
          untilMs: Pv + 1e3,
          biteAtMs: Sv
        }))
      }
      getLocalHook() {
        var vv, zv;
        return null !== (vv = null === (zv = this.localHook) || void 0 === zv ? void 0 : zv.hookId) && void 0 !== vv ? vv : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const vv = this.deps.now();
        for (const [zv, {
            untilMs: Pv,
            biteAtMs: hv
          }] of this.pending)(this.settle(zv, hv) || vv > Pv) && this.pending.delete(zv)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(vv, zv) {
        const Pv = this.deps.getLineOwner(vv);
        if (null === Pv) return !1;
        if (!this.deps.isLocalPlayer(Pv)) return !0;
        if (this.localHook = {
            hookId: vv,
            biteAtMs: zv
          }, !this.deps.isHushWaiting()) {
          const [zv, Pv] = this.deps.getHookPosition(vv);
          this.deps.onCastLanded(zv, Pv)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var tp = Pv(4019);
    const qp = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Ip = {
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
    class Qp {
      constructor(vv) {
        this.deps = vv, this.tell = null
      }
      receiveTell(vv) {
        let {
          biteTellTier: zv
        } = vv;
        this.tell = {
          tier: zv,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(vv) {
        const zv = this.tell;
        if (this.tell = null, !vv) return;
        const Pv = null !== zv && this.deps.now() - zv.atMs <= 3e3 ? zv.tier : 0;
        this.deps.vibrate(qp[Pv])
      }
      burstAtHook() {
        const vv = this.tell,
          zv = this.deps.getLocalHookPosition();
        null === vv || vv.burst || null === zv || (vv.burst = !0, this.deps.playParticles(function(vv, zv) {
          let [Pv, hv, Sv] = zv;
          const {
            count: ev,
            rise: gv,
            colour: pv
          } = Ip[vv], [dv, Nv, lv] = pv;
          return {
            texture: "glint",
            pos1: [Pv - .3, hv, Sv - .3],
            pos2: [Pv + .3, hv + .2, Sv + .3],
            dir1: [-.6, gv, -.6],
            dir2: [.6, 1.4 * gv, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: ev,
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
              minColor: [dv, Nv, lv, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [dv, Nv, lv, 0],
              maxColor: [dv, Nv, lv, 0]
            }],
            blendMode: tp.f.Add,
            hideDist: 48
          }
        }(vv.tier, zv)))
      }
    }
    var Zp = Pv(1234),
      Ap = Pv(1884),
      Lp = Pv(39);

    function Hp(vv, zv) {
      return [{
        timeFraction: 0,
        minColor: [255 * vv[0], 255 * vv[1], 255 * vv[2], 1],
        maxColor: [255 * zv[0], 255 * zv[1], 255 * zv[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Mp = [0, 0, 0],
      yp = {
        texture: "glint",
        mipmaps: !1,
        GT: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Mp,
        dir2: Mp,
        blendMode: tp.f.OneOne
      },
      Bp = {
        ...yp,
        colorGradients: Hp([1, .88, .38], [1, .65, .15])
      },
      Jp = {
        ...yp,
        colorGradients: Hp([.55, .95, 1], [.9, 1, 1])
      },
      Ep = [.5, .5, .5],
      op = {
        texture: "glint",
        mipmaps: !1,
        GT: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Hp([1, .12, .12], [1, .35, .2]),
        blendMode: tp.f.OneOne
      };
    class bp {
      constructor() {
        this.drops = new Map
      }
      la(vv, zv) {
        if ("overflowFlash" === zv.kind) {
          const [Pv, hv, Sv] = zv.position, ev = vv.createParticles(op, {
            pos: [Pv, hv, Sv],
            half: Ep
          });
          return ev.emit(18), void ev.stop()
        }
        this.drops.has(zv.itemId) || this.drops.set(zv.itemId, {
          owner: zv.owner,
          cosmetic: zv.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      MT(vv) {
        if (0 === this.drops.size) return;
        const zv = performance.now(),
          Pv = vv.getCameraPosition();
        let hv = 0;
        for (const ev of this.drops.values()) null !== ev.particles && hv++;
        for (const [ev, gv] of this.drops) {
          const pv = vv.getPositionView(ev);
          if (null === pv) {
            var Sv;
            if (gv.seen || zv - gv.markedAt > 5e3) null !== gv.particles && hv--, null === (Sv = gv.particles) || void 0 === Sv || Sv.stop(), this.drops.delete(ev);
            continue
          }
          gv.cosmetic || !vv.isLocalPlayer(gv.owner) || gv.pickupDelayCleared || (vv.clearPickupDelay(ev), gv.pickupDelayCleared = !0);
          const dv = gv.lastPosition,
            Nv = gv.seen && (pv[0] - dv[0]) ** 2 + (pv[1] - dv[1]) ** 2 + (pv[2] - dv[2]) ** 2 > 4e-4,
            lv = (pv[0] - Pv[0]) ** 2 + (pv[1] - Pv[1]) ** 2 + (pv[2] - Pv[2]) ** 2 < 2025;
          gv.seen = !0, dv[0] = pv[0], dv[1] = pv[1], dv[2] = pv[2], Nv && (gv.lastMovingAt = zv), null !== gv.particles && (!lv || zv - gv.lastMovingAt > 500) && (gv.particles.stop(), gv.particles = null, hv--), Nv && lv && null === gv.particles && hv < 32 && (gv.particles = vv.createParticles(gv.cosmetic ? Jp : Bp, {
            pos: pv
          }), hv++), null !== gv.particles && (gv.particles.moveTo(pv), gv.particles.setEmitRate(Nv ? 12 : 0)), !Nv && null === gv.particles && zv - Math.max(gv.lastMovingAt, gv.markedAt) > 2e3 && this.drops.delete(ev)
        }
      }
      dispose() {
        for (const zv of this.drops.values()) {
          var vv;
          null === (vv = zv.particles) || void 0 === vv || vv.stop()
        }
        this.drops.clear()
      }
    }
    var rp = Pv(185);
    const kp = rp.f.lG * rp.f.playerEyeToHeightRatio;
    class Xp {
      constructor(vv) {
        this.host = vv, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      la(vv) {
        this.lava = vv, this.nextUpdateAt = 0
      }
      MT() {
        var vv;
        const zv = this.host.now();
        if (zv < this.nextUpdateAt) return;
        this.nextUpdateAt = zv + 250;
        const Pv = this.host.playerPosition(),
          hv = Pv && this.findNearest([Pv[0], Pv[1] + kp, Pv[2]]);
        if (!hv || hv.distance >= 40) return void this.stop();
        const Sv = .5 * Math.min(1, (40 - hv.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(Sv) : this.loop = this.host.play("lavaFlow", Sv, hv.position, 40 + kp, 9, !0), null === (vv = this.loop) || void 0 === vv || vv.setPosition(hv.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var vv;
        null === (vv = this.loop) || void 0 === vv || vv.stop(), this.loop = null
      }
      findNearest(vv) {
        let zv = -1,
          Pv = 1 / 0;
        for (let hv = 0; hv < this.lava.length; hv += 3) {
          const Sv = this.lava[hv] - vv[0],
            ev = this.lava[hv + 1] - vv[1],
            gv = this.lava[hv + 2] - vv[2],
            pv = Sv * Sv + ev * ev + gv * gv;
          pv < Pv && (Pv = pv, zv = hv)
        }
        return zv < 0 ? null : {
          position: [this.lava[zv], this.lava[zv + 1], this.lava[zv + 2]],
          distance: Math.sqrt(Pv)
        }
      }
    }
    var vd = Pv(1863),
      zd = Pv(38169);
    const Pd = {
      "Grey Portal": "Gray"
    };
    for (const dd of Sv.yc) Pd[`${dd} Portal`] = dd;
    const hd = Object.keys(Pd),
      Sd = Object.fromEntries(hd.map((vv => [vv, (0, Sv._)(Sv.L[`${(0,Sv.ee)(Pd[vv])}Team`])])));
    Object.fromEntries(hd.map((vv => [vv, Sv.L[`${(0,Sv.ee)(Pd[vv])}UiText`]])));
    class ed {
      constructor(vv, zv) {
        this.presentation = vv, this.portal = zv, this.unlocked = void 0
      }
      la(vv) {
        const zv = !1 === this.unlocked && vv;
        this.unlocked = vv, this.MT();
        const {
          min: Pv,
          max: hv,
          unlockedBlock: Sv
        } = this.portal;
        if (zv && this.presentation.hasChunk(...Pv)) {
          const [vv, zv, ev] = Sd[Sv];
          this.presentation.playParticles({
            pos1: [...Pv],
            pos2: hv.map((vv => vv + 1)),
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
              minColor: [vv, zv, ev, 1],
              maxColor: [Math.min(255, vv + 55), Math.min(255, zv + 55), Math.min(255, ev + 90), 1]
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
      MT() {
        var vv;
        const zv = this.unlocked ? this.portal.unlockedBlock : null !== (vv = this.portal.lockedBlock) && void 0 !== vv ? vv : "Light Gray Portal",
          {
            min: Pv,
            max: hv
          } = this.portal;
        for (let Sv = Pv[0]; Sv <= hv[0]; Sv++)
          for (let vv = Pv[1]; vv <= hv[1]; vv++)
            for (let ev = Pv[2]; ev <= hv[2]; ev++) this.presentation.hasChunk(Sv, vv, ev) && this.presentation.nG(Sv, vv, ev) !== zv && this.presentation.eD(Sv, vv, ev, zv)
      }
    }
    const gd = {
        farming_1: {
          raises: vv => "NPC" === vv.type && "chef" === vv.variation,
          rise: .4
        },
        fishing_1: {
          raises: vv => "Draugr Warper" === vv.type,
          rise: .4
        }
      },
      pd = (vv, zv, Pv, ev) => {
        let {
          localPlayerId: gv
        } = ev;
        const pv = new cS({
          translate: (vv, zv) => (0, DS.r)(Zp.f.get().getCurrentLanguageCode(), vv, zv),
          translateWithIcons: (vv, zv) => (0, DS.j)(Zp.f.get().getCurrentLanguageCode(), vv, zv),
          setMenuOpen: vv => {
            vv ? (0, Ev.r)() : (0, Ev.g)()
          },
          dismissMenu: Ev.j,
          publishSkills: vv => {
            ov.j.zC(eP, vv, !0)
          },
          publishQuests: vv => {
            ov.j.zC(NP, vv, !0)
          },
          publishQuestNotification: vv => {
            ov.j.zC(lP, vv, !0)
          },
          publishDungeons: vv => {
            ov.j.zC(wP, vv, !0)
          },
          publishCollections: vv => {
            ov.j.zC(qP, vv, !0)
          },
          publishMap: vv => {
            ov.j.zC(Wv, vv, !0)
          },
          publishHud: vv => {
            ov.j.zC(sS, vv, !0)
          },
          publishPortalTransit: vv => {
            ov.j.zC(QP, vv, !0)
          },
          isLoadingScreenUp: () => jS.c.get("loadingOverlayVisible"),
          publishDailyReward: vv => {
            ov.j.zC(LP, vv, !0)
          },
          publishMailbox: vv => {
            ov.j.zC(JP, vv, !0)
          },
          publishQuestGraph: vv => {
            ov.j.zC(oP, vv, !0)
          },
          publishForge: vv => {
            ov.j.zC(ah, vv, !0)
          },
          publishSmuggler: vv => {
            ov.j.zC(ih, vv, !0)
          },
          publishKeepersChair: vv => {
            ov.j.zC(Oh, vv, !0)
          },
          publishReachLog: vv => {
            ov.j.zC(Kh, vv, !0)
          },
          publishLampLight: vv => {
            ov.j.zC(qh, vv, !0)
          },
          publishMagmaward: vv => {
            ov.j.zC(Qh, vv, !0)
          },
          publishGlowtide: vv => {
            ov.j.zC(Ah, vv, !0)
          },
          publishGlowMeter: vv => {
            ov.j.zC(Hh, vv, !0)
          },
          publishHushWait: vv => {
            ov.j.zC(yh, vv, !0)
          },
          publishPassage: vv => {
            ov.j.zC(mh, vv, !0)
          },
          publishTideCharts: vv => {
            ov.j.zC(Jh, vv, !0)
          },
          publishRegulars: vv => {
            ov.j.zC(vS, vv, !0)
          },
          publishHiddenWaters: vv => {
            ov.j.zC(eS, vv, !0)
          },
          publishDialogue: vv => {
            ov.j.zC(pS, vv, !0)
          },
          publishAutographs: vv => {
            ov.j.zC(WS, vv, !0)
          },
          onDailyRewardStarted: vv => {
            Rv.playSound(gv, vv.day === Dv ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (vv, zv) => {
            Rv.playSound(gv, "exp_collect", .35, 1 + .6 * vv / (zv - 1)), ov.j.zC(HP, vv === zv - 1)
          },
          onDailyRewardItemLanded: vv => {
            Rv.playSound(gv, "pickUp", .6, 1 + .15 * vv)
          },
          onMailboxStarted: () => {
            Rv.playSound(gv, "rpgMetalClick", .6, 1), Rv.playSound(gv, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            Rv.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Lp.l,
          requestTracking: vv => {
            Rv.sendCommand(`quests track ${vv}`)
          },
          requestDungeonEnter: (vv, zv) => {
            Rv.sendCommand(`dungeonEnter ${vv} ${zv}`)
          },
          requestQuestJump: vv => {
            Rv.sendCommand(`${tv} jump ${vv}`)
          },
          requestQuestArrive: (vv, zv) => {
            const Pv = `${tv} arrive ${vv}`;
            Rv.sendCommand(zv ? `${Pv} complete` : Pv)
          },
          requestForge: vv => {
            let {
              blade: zv,
              guard: Pv,
              handle: hv
            } = vv;
            Rv.sendCommand(`forge ${zv} ${Pv} ${hv}`)
          },
          requestDialogue: () => {
            Rv.sendCommand("quests dialogue")
          },
          requestSmuggle: (vv, zv) => {
            Rv.sendCommand(`smuggle ${vv} ${zv}`)
          },
          requestKeepersChairAim: vv => {
            Rv.sendCommand(`keeperschair-aim ${vv}`)
          },
          requestReachLogOpen: () => {
            Rv.sendCommand("reachlog-open")
          },
          requestLampLight: vv => {
            Rv.sendCommand(`${vv}`)
          },
          requestTravel: vv => {
            Rv.sendCommand(`map travel ${vv.kind} ${vv.id} ${vv.requestId}`)
          }
        });
        let dv, Nv, lv, Tv, wv, av, sv, mv, jv, fv, Fv, Ov, Kv;
        const Uv = new bp;
        let Rv, xv = null;
        const qv = gd[null !== Pv && void 0 !== Pv ? Pv : ""],
          Av = (vv, zv) => {
            null !== qv && void 0 !== qv && qv.raises(zv) && Rv.setNametagOffset(vv, qv.rise)
          },
          Mv = new Qp({
            getLocalHookPosition: () => {
              const vv = yv.getLocalHook();
              return null !== vv && Rv.checkValid(vv) ? Rv.yG(vv) : null
            },
            playParticles: vv => {
              Rv.playParticleEffect(vv)
            },
            vibrate: vv => {
              bv.e.play("fishBite", vv)
            },
            now: () => performance.now()
          }),
          yv = new xp({
            getLineOwner: vv => Rv.checkValid(vv) ? Rv.getLineOwner(vv) : null,
            isLocalPlayer: vv => Rv.isLocalPlayer(vv),
            getHookPosition: vv => {
              const [zv, , Pv] = Rv.yG(vv);
              return [zv, Pv]
            },
            isHushWaiting: () => {
              var vv;
              return "waiting" === (null === (vv = pv.hushWait.getSnapshot()) || void 0 === vv ? void 0 : vv.phase)
            },
            onCastLanded: (vv, zv) => {
              pv.tideCharts.castLanded(vv, zv)
            },
            onLocalHookSettled: () => {
              Mv.onLocalHookSettled()
            },
            onLocalWaitEnded: vv => {
              Mv.onLocalWaitEnded(vv)
            },
            now: () => performance.now()
          }),
          rv = new Xp({
            now: () => performance.now(),
            playerPosition: () => Rv.checkValid(gv) ? Rv.yG(gv) : null,
            play: (vv, zv, Pv, hv, Sv, ev) => Rv.playSound(gv, vv, zv, 1, {
              xP: Pv,
              maxHearDist: hv,
              refDistance: Sv
            }, ev)
          }),
          kv = new Map;
        let Xv;
        return {
          onCreate: vv => {
            if (Rv = vv, xv = new zd.SkyblockEntityFacing(vv, qv ? Av : null), pv.portalTransit.resumeArrival(null !== Pv && void 0 !== Pv ? Pv : null), (null !== Pv && void 0 !== Pv ? Pv : hv) === hv) {
              let vv = -1 / 0;
              Xv = ov.j.subscribe("toggleMenu", (zv => {
                const Pv = performance.now();
                "inventory|Workbench" !== zv || "cross_to_hub" !== pv.quests.getTrackedQuestId() || Pv - vv < 1e4 || (vv = Pv, Rv.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [hv, Sv] of Object.entries(null !== (zv = Iv[null !== Pv && void 0 !== Pv ? Pv : ""]) && void 0 !== zv ? zv : {})) {
              var zv;
              kv.set(hv, new ed({
                hasChunk: (zv, Pv, hv) => vv.isBlockInLoadedChunk(zv, Pv, hv),
                nG: (zv, Pv, hv) => vv.blockIdToBlockName(vv.getBlockId(zv, Pv, hv)),
                eD: (zv, Pv, hv, Sv) => {
                  vv.eD(zv, Pv, hv, Sv)
                },
                playParticles: zv => {
                  vv.playParticleEffect(zv)
                }
              }, Sv))
            }
            Kv = (0, vd.g)((vv => function(vv) {
              return Object.hasOwn(yz, vv) || vv.startsWith("npc_")
            }(vv) ? Jz(vv) : null)), pv.resolveItemName = (zv, Pv) => {
              const hv = vv.getItemStat(gv, zv, "displayName");
              return hv && "object" === typeof hv && "translationKey" in hv ? Pv(hv.translationKey, (0, DS.i)(hv.params, Ap.b.shown)) : "string" === typeof hv ? Pv(hv) : zv
            }, pv.quests.notifications.onShown = vv => {
              "quest" === vv ? Rv.playSound(gv, "magicAccent1", 1, 1) : "skillLevel" === vv ? Rv.playSound(gv, "magicAccent1", 1, .6) : "landmark" === vv ? Rv.playSound(gv, "trumpetFlare", 1, .6) : "npcNote" === vv ? Rv.playSound(gv, "magicAccent2", .8, 1.1) : "started" === vv ? Rv.playSound(gv, (0, Vp.e)("bigDrumSwish"), 1, 1) : Rv.playSound(gv, (0, Vp.e)("rpgHandleSmallLeather"), 1, 1)
            }, pv.forge.onPartSelected = () => {
              Rv.playSound(gv, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, pv.forge.onOpened = () => {
              ! function(vv) {
                vv.preloadSounds([(0, Vp.e)("firecracker"), "fireBurn", "magicAccent2"])
              }(vv)
            }, pv.forge.onForgeStarted = (zv, Pv, hv) => Rp(vv, gv, zv, Pv, hv), pv.smuggler.onBought = () => {
              Rv.playSound(gv, (0, Vp.e)("rpgHandleSmallLeather"), 1, 1), Rv.playSound(gv, "chestOpen", .6, 1)
            }, pv.compass.register(new Cv(pv.map, !0)), pv.compass.register(new Cv(pv.map, !1)), pv.compass.register(new cv(pv.map)), pv.compass.register(new Gv((() => pv.quests.getSnapshot().compassTarget)));
            for (const Pv of ["enemy", "npc"]) pv.compass.register(new iv(pv.map, Pv, (zv => vv.checkValid(zv) ? vv.yG(zv) : void 0), (zv => vv.isAlive(zv))))
          },
          onAfterRender: (vv, zv) => {
            const Pv = Rv.checkValid(gv) ? Rv.yG(gv) : null;
            pv.navigation.afterRender(Pv, performance.now(), zv), pv.glowtide.afterRender(Pv, zv.cameraHeading), pv.tideCharts.afterRender(Pv), yv.afterRender()
          },
          onClose: () => {
            var vv, zv, Pv, hv, Sv, ev, gv, Wv, av, Cv, iv, cv, Gv, Yv, nv;
            Xv && ov.j.unsubscribe(Xv), null === (vv = Kv) || void 0 === vv || vv(), Uv.dispose(), rv.dispose(), null === (zv = xv) || void 0 === zv || zv.dispose(), yv.dispose(), pv.dispose(), null === (Pv = dv) || void 0 === Pv || Pv(), null === (hv = Nv) || void 0 === hv || hv(), null === (Sv = lv) || void 0 === Sv || Sv(), null === (ev = Tv) || void 0 === ev || ev(), null === (gv = wv) || void 0 === gv || gv(), null === (Wv = sv) || void 0 === Wv || Wv(), null === (av = undefined) || void 0 === av || av(), null === (Cv = mv) || void 0 === Cv || Cv(), null === (iv = jv) || void 0 === iv || iv(), null === (cv = fv) || void 0 === cv || cv(), null === (Gv = Fv) || void 0 === Gv || Gv(), null === (Yv = undefined) || void 0 === Yv || Yv(), null === (nv = Ov) || void 0 === nv || nv()
          },
          onPlayerChangeBlock: (vv, zv, hv, ev, dv, Nv) => {
            if (vv === gv && "Air" === Nv) {
              const vv = Rv.getClientOption(gv, "creative");
              pv.skills.predictBlock([zv, hv, ev], dv, vv);
              const Nv = function(vv, zv) {
                  if ("hub" === zv || "farming_1" === zv || "mining_1" === zv) return !Lv.has(vv) || "hub" !== zv && "mining_1" !== zv ? Object.hasOwn(Zv, vv) ? Zv[vv] : void 0 : Qv
                }(dv, Pv),
                lv = ("hub" === Pv || "mining_1" === Pv) && (Sv.bd.some((vv => vv === dv)) || Object.hasOwn(Hv, dv) || "mining_1" === Pv && "Block of Coal" === dv);
              vv || void 0 === Nv && !lv || Rv.eD(zv, hv, ev, null !== Nv && void 0 !== Nv ? Nv : Qv)
            }
          },
          onPlayerAttackEntity: (vv, zv) => {
            if (vv !== gv || "Player" !== Rv.getEntityType(zv)) return;
            const [Pv, hv, Sv] = Rv.yG(zv);
            Rv.burstParticlePreset("critical", [Pv, hv + 1, Sv], 10)
          },
          onChangeBlockFail: vv => {
            for (const {
                rP: zv
              }
              of vv) pv.skills.rejectBlock(zv)
          },
          onReceivedMessageFromServer: (vv, zv) => {
            if ("skyblockGatedPortal" === vv) {
              var Pv;
              const [vv, hv] = zv;
              return void(null === (Pv = kv.get(vv)) || void 0 === Pv || Pv.la(hv))
            }
            if ("skyblockDailyReward" === vv) return void pv.dailyReward.la(zv);
            if ("skyblockMailbox" === vv) return void pv.mailbox.la(zv);
            if ("skyblockPortalTransit" === vv) return void pv.portalTransit.la(zv);
            if ("skyblockLoot" === vv) return void Uv.la(Rv, zv);
            if ("skyblockLava" === vv) return void rv.la(zv);
            if ("skyblockForge" === vv) return void pv.forge.la(zv);
            if ("skyblockMagmaward" === vv) return void pv.magmaward.la(zv);
            if ("skyblockGlowtide" === vv) return void pv.glowtide.la(zv);
            if ("skyblockGlowMeter" === vv) return void pv.glowMeter.la(zv);
            if ("skyblockHushWait" === vv) return void pv.hushWait.la(zv);
            if ("skyblockPassage" === vv) {
              const vv = zv;
              return pv.passage.la(vv), pv.reachLog.receivePassagePhase(vv.passagePhase), fv ??= (0, Yv.u)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: pv.passage.show
              }), void pv.keepersChair.receivePassage({
                keepersChairPassagePhase: vv.passagePhase,
                keepersChairPassageNextPhase: vv.passageNextPhase,
                keepersChairPassageTurnsInMs: vv.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === vv) {
              const vv = zv;
              return pv.tideCharts.la(vv), void(vv.tideCharts.length > 0 && (Fv ??= (0, Yv.u)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: pv.tideCharts.show
              })))
            }
            if (vv === Bv.A) {
              var hv;
              const {
                hookId: vv,
                waiting: Pv
              } = zv;
              return void yv.hookWaiting(vv, null !== (hv = null === Pv || void 0 === Pv ? void 0 : Pv.remainingMs) && void 0 !== hv ? hv : null)
            }
            if ("skyblockBiteTell" === vv) return void Mv.receiveTell(zv);
            if ("skyblockSmuggler" === vv) return void pv.smuggler.la(zv);
            if ("skyblockKeepersChair" === vv) return pv.keepersChair.la(zv), void pv.lampLight.setAtChair(pv.keepersChair.isAtChair());
            if ("skyblockLampLight" === vv) {
              const vv = zv;
              var Sv;
              if (pv.lampLight.la(vv), vv.lampLightReleasing) jv ??= (0, Yv.u)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  pv.lampLight.setRelease(!1)
                }
              });
              else null === (Sv = jv) || void 0 === Sv || Sv(), jv = void 0;
              return
            }
            if ("skyblockRegulars" === vv) return void pv.regulars.la(zv);
            if ("skyblockHiddenWaters" === vv) return void pv.hiddenWaters.la(zv);
            if ("skyblockReachLog" === vv) return pv.reachLog.la(zv), void(mv ??= (0, Yv.u)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Uh
              },
              onClick: pv.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === vv) {
              for (const [vv, Pv, hv, Sv] of zv) Rv.eD(vv, Pv, hv, Sv);
              return
            }
            if ("skyblockHud" === vv) pv.receiveHud(zv);
            else if ("skyblockMap" === vv) pv.map.la(zv);
            else if (vv === Jv.f) pv.skills.la(zv);
            else if (vv === Vv && "dialogue" === zv.kind) pv.dialogue.la(zv);
            else if (vv === Vv) pv.quests.la(zv);
            else if ("skyblockDungeons" === vv) pv.dungeons.la(zv);
            else if ("sbCollections" === vv) pv.collections.la(zv);
            else if ("skyblockQuestGraph" === vv) pv.questGraph.la(zv);
            else {
              if ("skyblockAutographs" !== vv) return;
              pv.autographs.la(zv)
            }
            if (!Nv && pv.map.getSnapshot().enabled) {
              const vv = (0, Yv.u)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: pv.map.show
                }),
                zv = (0, Ev.u)(pv.map.show);
              Nv = () => {
                vv(), zv()
              }
            }!lv && pv.skills.getSnapshot().enabled && (lv = (0, Yv.u)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: pv.skills.show
            })), !sv && pv.collections.getSnapshot().enabled && (sv = (0, Yv.u)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: pv.collections.show
            })), !Tv && pv.quests.getSnapshot().enabled && (Tv = (0, Yv.u)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: pv.quests.show
            })), !Ov && pv.autographs.getSnapshot().enabled && (Ov = (0, Yv.u)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: pv.autographs.show
            }));
            const ev = pv.dungeons.getSnapshot().enabled;
            var gv;
            (lv || Tv || ev) && av !== ev && (av = ev, null === (gv = wv) || void 0 === gv || gv(), wv = (0, Yv.u)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: xz
              },
              disabled: !ev,
              panel: !0,
              onClick: pv.dungeons.show
            }));
            dv || (dv = (0, Ev.w)((0, nv.createElement)(Dp, {
              controller: pv
            }), {
              content: (0, nv.createElement)(Kp, {
                controller: pv
              }),
              onClose: pv.close
            }))
          },
          MT: () => {
            var vv;
            for (const zv of kv.values()) zv.MT();
            Uv.MT(Rv), rv.MT(), null === (vv = xv) || void 0 === vv || vv.MT(), pv.skills.MT(), pv.quests.MT(), pv.dailyReward.MT(), pv.mailbox.MT(), pv.map.MT()
          }
        }
      }
  },
  35922: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => hv
    });
    const hv = "skyblockSkills",
      Sv = "skills_test_gym"
  },
  9027: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Sv,
      f: () => gv
    });
    const hv = [{
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

    function Sv(vv) {
      let zv, Pv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof vv) {
        if (!Number.isFinite(vv)) return "0";
        if (Math.abs(vv) < 100) {
          const zv = vv < 0 ? "-" : "",
            Pv = Math.abs(vv);
          return Pv >= 10 ? `${zv}${Pv.toFixed(1).replace(/\.0$/,"")}` : `${zv}${Pv.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zv = BigInt(Math.floor(vv))
      } else zv = vv;
      const Sv = zv < 0n ? -zv : zv,
        ev = zv < 0n ? "-" : "",
        gv = Sv.toString();
      if (gv.length <= Pv) return `${ev}${gv}`;
      const pv = 3 * Math.floor((gv.length - 1) / 3);
      if (pv < 3) return `${ev}${gv}`;
      if (pv > 3 * hv.length) {
        const vv = gv[0],
          zv = gv.slice(1, 3).replace(/0+$/, "");
        return `${ev}${zv?`${vv}.${zv}`:vv}e${gv.length-1}`
      }
      const {
        threshold: dv,
        suffix: Nv
      } = hv[hv.length - pv / 3], lv = Sv / dv, Tv = Number(1000n * (Sv % dv) / dv), Wv = Number(lv) + Tv / 1e3;
      let wv;
      return wv = Wv >= 100 ? Math.floor(Wv).toString() : Wv >= 10 ? Wv.toFixed(1).replace(/\.0$/, "") : Wv.toFixed(2).replace(/\.?0+$/, ""), `${ev}${wv}${Nv}`
    }
    const ev = hv.map((vv => {
      let {
        threshold: zv,
        suffix: Pv
      } = vv;
      return {
        threshold: Number(zv),
        suffix: Pv
      }
    })).filter((vv => {
      let {
        threshold: zv
      } = vv;
      return Number.isFinite(zv)
    }));

    function gv(vv) {
      const zv = Math.abs(vv),
        Pv = vv < 0 ? "-" : "";
      for (const {
          threshold: hv,
          suffix: Sv
        }
        of ev)
        if (zv >= hv) {
          const vv = zv / hv;
          if (vv >= 1e3) return `${Pv}${zv.toExponential(2).replace("e+","e")}`;
          let ev;
          return ev = vv >= 100 ? Math.floor(vv).toString() : vv >= 10 ? vv.toFixed(1).replace(/\.0$/, "") : vv.toFixed(2).replace(/\.?0+$/, ""), `${Pv}${ev}${Sv}`
        } return `${Pv}${zv}`
    }
  },
  38095: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38098: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38102: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38111: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38114: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38119: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38121: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38129: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38137: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38146: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38148: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38151: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38158: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38161: (vv, zv, Pv) => {
    vv.exports = Pv.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18282: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20402: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22813: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24408: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26119: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26133: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38076: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);