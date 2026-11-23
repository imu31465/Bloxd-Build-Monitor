export const id = 190;
export const ids = [51, 190];
export const modules = {
  38381: (CC, zC, ZC) => {
    var QC = {
      "./combat_1.png": 38389,
      "./dungeon_crumbling_crypt.png": 38394,
      "./dungeon_frozen_hollow.png": 38398,
      "./dungeon_wildwood_grove.png": 38401,
      "./dungeons.png": 38403,
      "./farming_1.png": 38406,
      "./fishing_1.png": 38413,
      "./hub.png": 38420,
      "./island.png": 38428,
      "./mining_1.png": 38430,
      "./mining_1_bridge.png": 38435,
      "./mining_1_gallery.png": 38440,
      "./mining_1_hollow.png": 38447,
      "./mining_1_village.png": 38450
    };

    function wC(CC) {
      var zC = bC(CC);
      return ZC(zC)
    }

    function bC(CC) {
      if (!ZC.o(QC, CC)) {
        var zC = new Error("Cannot find module '" + CC + "'");
        throw zC.code = "MODULE_NOT_FOUND", zC
      }
      return QC[CC]
    }
    wC.keys = function() {
      return Object.keys(QC)
    }, wC.resolve = bC, CC.exports = wC, wC.id = 38381
  },
  38454: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      c: () => bC
    });
    const QC = new WeakMap;

    function wC(CC, zC) {
      return QC.set(CC, zC), CC
    }

    function bC(CC) {
      var zC;
      return null !== (zC = QC.get(CC)) && void 0 !== zC ? zC : null
    }
  },
  38369: (CC, zC, ZC) => {
    function QC(CC, zC, ZC) {
      var QC;
      const {
        width: wC,
        height: bC
      } = ZC, nC = null !== (QC = CC.text) && void 0 !== QC ? QC : CC, fC = (nC.x / 100 - .5) * wC, oC = (nC.y / 100 - .5) * bC, qC = wC / 2 - zC.x;
      if (null !== CC.text && Math.abs(fC) <= qC && oC >= zC.top - bC / 2 && oC <= bC / 2 - zC.bottom) return {
        x: nC.x,
        y: nC.y
      };
      const FC = Math.min(0 === fC ? 1 / 0 : qC / Math.abs(fC), oC > 0 ? (bC / 2 - zC.bottom) / oC : oC < 0 ? (zC.top - bC / 2) / oC : 1 / 0);
      return !Number.isFinite(FC) || FC < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + fC * FC / wC * 100,
        y: 50 + oC * FC / bC * 100
      }
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  38375: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => nC
    });
    const QC = 4,
      wC = 12e3,
      bC = 1e3;
    class nC {
      constructor() {
        let {
          limit: CC = QC,
          windowMs: zC = wC,
          spacingMs: ZC = bC,
          now: nC = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = CC, this.windowMs = zC, this.spacingMs = ZC, this.now = nC
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const CC of this.priority) CC.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const CC = this.now();
        this.sent.push(CC), this.lastSentAt = CC, this.schedule(), this.notify()
      }
      addPriority(CC) {
        return this.priority.add(CC), () => {
          this.priority.delete(CC)
        }
      }
      subscribe(CC) {
        return this.listeners.add(CC), () => {
          this.listeners.delete(CC)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const CC of this.priority)
          if (CC.waiting()) return !0;
        return !1
      }
      prune() {
        const CC = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= CC;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const CC = this.now(),
          zC = this.lastSentAt + this.spacingMs,
          ZC = Math.min(zC > CC ? zC : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ZC !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ZC - CC)))
      }
      notify() {
        for (const CC of this.listeners) CC()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38360: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => QC
    });
    class QC {
      constructor(CC, zC, ZC) {
        this.bp = CC, this.beforeOpen = zC, this.afterClose = ZC, this.open = !1, this.Sg = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Sg && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(CC) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(CC)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Sg = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Sg || (this.snapshot = this.buildSnapshot(), this.bp(this.snapshot))
      }
    }
  },
  38463: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      SkyblockEntityFacing: () => fC,
      needsSkyblockEntityFacing: () => nC
    });
    var QC = ZC(597),
      wC = ZC(4179),
      bC = ZC(38471);

    function nC(CC, zC) {
      if (CC.metaInfo === QC.d || "Iron Guardian" === CC.type || "Gold Guardian" === CC.type) return !0;
      if ("Pig" === CC.type) return "sitting" === CC.pose;
      if ("Person" !== CC.meshKind || void 0 === CC.meshOpts) return !1;
      let ZC = null === zC || void 0 === zC ? void 0 : zC.get(CC.meshOpts);
      if (void 0 === ZC) {
        var bC, nC;
        const QC = (0, wC.g)(CC);
        ZC = !1, "pig_napoleon" === (null === QC || void 0 === QC || null === (bC = QC.opts.textures) || void 0 === bC ? void 0 : bC.head) ? ZC = !0 : "npc_pig_head" === (null === QC || void 0 === QC || null === (nC = QC.opts.textures) || void 0 === nC ? void 0 : nC.head) && (ZC = "sitting" === QC.opts.pose || "sitting"), zC && (zC.size >= 256 && zC.clear(), zC.set(CC.meshOpts, ZC))
      }
      return "sitting" === ZC ? "sitting" === CC.pose : ZC
    }(0, bC.e)("skyblock", ((CC, zC) => {
      zC.setFacingTolerance(nC(CC) ? 0 : null)
    }));
    class fC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = CC, this.alsoVisit = zC, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = CC => {
          var zC;
          const ZC = this.api.getEntityInfo(CC);
          ZC && (nC(ZC, this.meshFacingCache) && (this.api.setFacingTolerance(CC, 0), this.nextFacing.add(CC)), null === (zC = this.alsoVisit) || void 0 === zC || zC.call(this, CC, ZC))
        }
      }
      ZN() {
        const {
          api: CC
        } = this, zC = this.nextFacing;
        CC.forEachEntity(this.visit);
        for (const ZC of this.facing) zC.has(ZC) || CC.setFacingTolerance(ZC, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = zC
      }
      dispose() {
        for (const CC of this.facing) this.api.setFacingTolerance(CC, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38353: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => No
    });
    const QC = "island";
    var wC = ZC(326);
    const bC = (0, wC.lb)([0, 0, -1]),
      nC = [{
        name: "S",
        bearing: (0, wC.lb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, wC.lb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: bC
      }, {
        name: "W",
        bearing: (0, wC.lb)([1, 0, 0])
      }];

    function fC(CC, zC, ZC) {
      return [100 * (ZC.mapMaxX - CC) / (ZC.mapMaxX - ZC.mapMinX), 100 * (zC - ZC.mapMinZ) / (ZC.mapMaxZ - ZC.mapMinZ)]
    }

    function oC(CC, zC, ZC) {
      const wC = "local" === zC,
        bC = CC.background,
        nC = zC => bC ? fC(zC[0] - CC.mapOrigin[0], zC[2] - CC.mapOrigin[2], bC.bounds) : [50, 50],
        oC = (CC.insideDungeon ? [] : CC.landmarks).map((CC => {
          var zC, QC;
          return {
            id: CC.id,
            name: ZC(CC.visited && CC.nameKey ? null !== (zC = CC.mapLabelKey) && void 0 !== zC ? zC : CC.nameKey : "skyblockGame:mapUnknown"),
            icon: CC.visited && null !== (QC = CC.icon) && void 0 !== QC ? QC : "unknown",
            visited: CC.visited,
            current: !1,
            position: nC(CC.position),
            travelKind: "landmark",
            travelId: CC.id
          }
        })),
        FC = CC.zones.map((zC => {
          var QC;
          return {
            id: zC.id,
            name: ZC(zC.visited && zC.nameKey ? zC.nameKey : "skyblockGame:mapUnknown"),
            icon: zC.visited && null !== (QC = zC.icon) && void 0 !== QC ? QC : "unknown",
            visited: zC.visited,
            current: zC.id === CC.zoneId,
            position: zC.position,
            thumbnail: zC.visited ? zC.id : void 0,
            travelKind: "zone",
            travelId: zC.id
          }
        })),
        WC = CC.insideDungeon || !bC ? [] : CC.portals.map((CC => {
          var zC;
          return {
            id: CC.id,
            name: ZC(null !== (zC = CC.nameKey) && void 0 !== zC ? zC : "skyblockGame:mapUnknown"),
            icon: CC.visited ? "dungeons" === CC.destination ? "portal_orange" : "portal" : "unknown",
            visited: CC.visited,
            current: !1,
            position: nC(CC.position),
            colour: CC.colour,
            travelKind: "zone",
            travelId: CC.destination
          }
        })),
        NC = wC ? oC : FC,
        MC = NC.filter((CC => CC.visited)).length,
        gC = bC ? (bC.bounds.mapMaxX - bC.bounds.mapMinX) / (bC.bounds.mapMaxZ - bC.bounds.mapMinZ) : 2,
        SC = bC ? JSON.stringify([bC.bounds, CC.mapOrigin]) : "";
      return {
        local: wC,
        points: NC,
        portals: wC ? WC : [],
        progress: NC.length ? ZC("skyblockGame:mapDiscovered", {
          current: String(MC),
          total: String(NC.length)
        }) : null,
        percent: NC.length ? 100 * MC / NC.length : 0,
        canTravel: [...NC, ...wC ? WC : []].some((CC => CC.visited && !CC.current)),
        noLandmarks: wC && !CC.insideDungeon && 0 === oC.length,
        background: bC ? {
          imageKey: bC.imageKey,
          fallbackImageKey: CC.zoneId,
          geometryKey: SC,
          label: ZC(bC.labelKey),
          colour: bC.backgroundColour,
          ratio: gC
        } : null,
        connections: qC(CC.zones),
        minimap: bC ? {
          imageKey: bC.imageKey,
          fallbackImageKey: CC.zoneId,
          geometryKey: SC,
          label: ZC(bC.labelKey),
          colour: bC.backgroundColour,
          caption: ZC(CC.zoneId === QC ? "skyblockGame:zoneIsland" : bC.labelKey),
          width: (bC.bounds.mapMaxX - bC.bounds.mapMinX) / bC.minimapSpan * 100 + "%",
          height: (bC.bounds.mapMaxZ - bC.bounds.mapMinZ) / bC.minimapSpan * 100 + "%",
          markers: [...oC, ...WC]
        } : null
      }
    }

    function qC(CC) {
      const zC = new Set;
      return CC.flatMap((ZC => ZC.connections.flatMap((QC => {
        const wC = CC.find((CC => CC.id === QC)),
          bC = [ZC.id, QC].sort().join("|");
        return !wC || zC.has(bC) ? [] : (zC.add(bC), [{
          id: `${ZC.id}-${QC}`,
          start: ZC.position,
          end: wC.position,
          explored: ZC.visited && wC.visited
        }])
      }))))
    }
    var FC = ZC(38360);
    class WC extends FC.e {}
    const NC = "skyblockMapView";
    class MC extends WC {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(CC, QC, wC), this.requestTravel = zC, this.translate = ZC, this.now = bC, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = CC => {
          this.tab = CC, this.feedbackKey = "", this.emit()
        }, this.travel = (CC, zC) => {
          if (!this.map || this.pending || this.Sg) return;
          const ZC = ("zone" === CC ? this.map.zones : this.map.landmarks).find((CC => CC.id === zC));
          if (ZC) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in ZC && !ZC.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (ZC.visited)
              if ("zone" === CC && zC === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const ZC = ++this.nextRequestId;
                this.pending = {
                  requestId: ZC,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: CC,
                  id: zC,
                  requestId: ZC
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
      setTranslator(CC) {
        this.translate = CC, this.emit()
      }
      Ag(CC) {
        var zC;
        if (!this.Sg)
          if ("entities" !== CC.kind)
            if ("open" !== CC.kind) {
              var ZC, QC;
              if ("snapshot" === CC.kind)(null === (ZC = CC.snapshot) || void 0 === ZC ? void 0 : ZC.zoneId) !== (null === (QC = this.map) || void 0 === QC ? void 0 : QC.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = CC.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === CC.kind) {
                var wC;
                CC.requestId === (null === (wC = this.pending) || void 0 === wC ? void 0 : wC.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (CC.requestId === (null === (zC = this.pending) || void 0 === zC ? void 0 : zC.requestId)) {
                var bC;
                this.pending = null, this.feedbackKey = null !== (bC = CC.errorKey) && void 0 !== bC ? bC : "", null === CC.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = CC.entities
      }
      ZN() {
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
          presentation: this.map ? oC(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const gC = 67.5 * Math.PI / 180;

    function SC(CC, zC) {
      const ZC = Math.abs(CC);
      if (ZC > gC || zC.trackHalfWidth <= 0) return null;
      const QC = zC.trackHalfWidth,
        wC = zC.screenHalfWidth / (zC.tanHalfFovX * Math.max(.5, Math.cos(zC.pitch))),
        bC = Math.min(Math.atan(.6 * QC / wC), .75 * gC),
        nC = wC * Math.tan(bC);
      let fC;
      if (ZC <= bC) fC = wC * Math.tan(ZC);
      else {
        const CC = gC - bC,
          zC = Math.max(0, wC * CC / (Math.cos(bC) ** 2 * (QC - nC)) - 1),
          oC = (ZC - bC) / CC;
        fC = nC + (QC - nC) * (1 + zC) * oC / (1 + zC * oC)
      }
      return 50 + Math.sign(CC) * fC * 50 / QC
    }
    class pC {
      constructor(CC, zC) {
        this.map = CC, this.visited = zC, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = zC ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const CC = this.map.getSnapshot().map;
        return !CC || CC.insideDungeon ? [] : CC.landmarks.filter((CC => CC.visited === this.visited)).map((CC => {
          var zC, ZC;
          return {
            id: `landmark:${CC.id}`,
            position: CC.position,
            icon: null !== (zC = CC.icon) && void 0 !== zC ? zC : "unknown",
            nameKey: null !== (ZC = CC.nameKey) && void 0 !== ZC ? ZC : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class PC {
      constructor(CC, zC, ZC, QC) {
        this.map = CC, this.kind = zC, this.position = ZC, this.alive = QC, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = zC, this.range = "enemy" === zC ? 48 : 64, this.limit = 12
      }
      yG(CC) {
        if ("enemy" !== this.kind || this.alive(CC.yw)) return this.position(CC.yw)
      }
      getPoints() {
        const CC = [];
        for (const QC of this.map.getEntities()) {
          if (QC.kind !== this.kind || "enemy" === this.kind && !this.alive(QC.compassEntityId)) continue;
          const wC = this.position(QC.compassEntityId);
          var zC, ZC;
          if (wC) CC.push({
            id: `${this.kind}:${QC.compassEntityId}`,
            yw: QC.compassEntityId,
            kind: this.kind,
            icon: null !== (zC = QC.icon) && void 0 !== zC ? zC : QC.npcSkin ? `npc_${QC.npcSkin}` : this.kind,
            displayName: QC.displayName,
            position: wC,
            nameKey: null !== (ZC = QC.nameKey) && void 0 !== ZC ? ZC : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return CC
      }
    }
    class GC {
      constructor(CC) {
        this.map = CC, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const CC = this.map.getSnapshot().map;
        return !CC || CC.insideDungeon ? [] : CC.portals.map((CC => {
          var zC;
          return {
            id: "portal:" + CC.id,
            kind: "portal",
            position: CC.position,
            nameKey: null !== (zC = CC.nameKey) && void 0 !== zC ? zC : "skyblockGame:compassUnvisitedZone",
            icon: CC.visited ? "dungeons" === CC.destination ? "portal_orange" : "portal" : "unknown",
            colour: CC.colour
          }
        }))
      }
    }
    class RC {
      constructor(CC) {
        this.target = CC, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const CC = this.target();
        return CC ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: CC.position,
          nameKey: CC.nameKey
        }] : []
      }
    }

    function AC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC.position;
      const bC = QC[0] - zC[0],
        nC = QC[2] - zC[2];
      return {
        ...CC,
        position: QC,
        offset: wC.c.computeShortestRotation(ZC, (0, wC.lb)([bC, 0, nC])),
        distance: Math.hypot(bC, QC[1] - zC[1], nC)
      }
    }
    let xC;

    function JC(CC, zC) {
      var ZC;
      return (null === (ZC = xC) || void 0 === ZC ? void 0 : ZC.locale) !== zC && (xC = {
        locale: zC,
        near: new Intl.NumberFormat(zC, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(zC, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (CC < 10 ? xC.near : xC.far).format(CC)
    }
    class IC {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(CC) {
        return this.providers.set(CC.id, CC), this.refreshAt = 0, () => {
          this.providers.get(CC.id) === CC && (this.providers.delete(CC.id), this.refreshAt = 0)
        }
      }
      frame(CC, zC, ZC) {
        if (ZC >= this.refreshAt) {
          this.refreshAt = ZC + 200, this.candidates = [];
          for (const zC of this.providers.values()) {
            if (!zC.enabled) continue;
            const ZC = zC.getPoints().map((zC => {
              const ZC = zC.position;
              return {
                point: zC,
                distance: Math.hypot(ZC[0] - CC[0], ZC[1] - CC[1], ZC[2] - CC[2])
              }
            })).filter((CC => CC.distance <= zC.range)).sort(((CC, zC) => CC.distance - zC.distance)).slice(0, zC.limit);
            for (const {
                point: CC
              }
              of ZC) this.candidates.push({
              provider: zC,
              point: CC
            })
          }
        }
        const QC = [];
        for (const {
            point: wC,
            provider: bC
          }
          of this.candidates) {
          if (!bC.enabled) continue;
          const ZC = bC.yG ? bC.yG(wC) : wC.position;
          if (ZC) {
            const bC = AC(wC, CC, zC, ZC);
            Math.abs(bC.offset) <= gC && QC.push(bC)
          }
        }
        return QC
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var iC = ZC(36490),
      vC = ZC(48);
    const eC = [{
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
      hC = eC.length;

    function KC(CC) {
      return CC >= hC ? 1 : CC + 1
    }
    const YC = "skyblockQuests",
      dC = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      mC = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function HC(CC) {
      let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const ZC = Math.max(0, Math.floor(CC)),
        QC = Math.floor(ZC % 1e3 / 100),
        wC = Math.floor(ZC / 1e3),
        bC = wC % 60,
        nC = Math.floor(wC / 60),
        fC = nC % 60,
        oC = Math.floor(nC / 60),
        qC = CC => CC < 10 ? `0${CC}` : String(CC),
        FC = zC ? `.${QC}` : "";
      return oC > 0 ? `${oC}:${qC(fC)}:${qC(bC)}${FC}` : `${fC}:${qC(bC)}${FC}`
    }
    const EC = "devquests",
      lC = "none",
      XC = {
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
      cC = "Compressed Messy Stone",
      uC = {
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
      rC = ["Stone", "Diorite", "Andesite", "Granite"],
      sC = new Set(rC),
      TC = (Object.keys(uC), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const aC = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function tC(CC, zC) {
      const ZC = Math.floor(5 * CC / (2 * zC + 1));
      return Math.min(4, Math.max(0, ZC))
    }
    var DC = ZC(1183);
    var jC = ZC(36247);
    var yC = ZC(36488),
      LC = ZC(28),
      UC = ZC(8876);
    const BC = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      OC = 1e3;

    function kC(CC) {
      return Math.max(0, CC)
    }

    function VC(CC) {
      return 1 + .01 * kC(CC)
    }

    function Cz(CC) {
      return 1 + .005 * kC(CC)
    }

    function zz(CC) {
      return 1 + .005 * kC(CC)
    }

    function Zz(CC) {
      return .01 * kC(CC)
    }

    function Qz(CC) {
      return 150 / (150 + kC(CC))
    }

    function wz(CC) {
      return 1 + .002 * kC(CC)
    }

    function bz(CC) {
      return Math.round(10 * CC) / 10
    }

    function nz(CC, zC) {
      switch (CC) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: bz(100 * (Cz(zC) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: bz(100 * (VC(zC) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: bz(100 * (zz(zC) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: bz(100 * Zz(zC))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: bz(100 * (1 - Qz(zC)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: bz(100 * (wz(zC) - 1))
          }
      }
    }

    function fz(CC) {
      return "farming" === CC ? 200 : 100
    }

    function oz(CC, zC) {
      if (!Number.isSafeInteger(CC) || CC < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const ZC = fz(zC),
        QC = CC => function(CC, zC) {
          return fz(CC) * zC * (zC + 1) / 2
        }(zC, CC);
      let wC = Math.min(OC, Math.floor((Math.sqrt(8 * CC / ZC + 1) - 1) / 2));
      return wC < OC && QC(wC + 1) <= CC ? wC++ : QC(wC) > CC && wC--, {
        totalXp: CC,
        level: wC,
        xpIntoLevel: CC - QC(wC),
        xpForNextLevel: wC === OC ? null : ZC * (wC + 1)
      }
    }
    const qz = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Fz(CC) {
      return qz.has(CC)
    }
    const Wz = new Set(wC.cb);

    function Nz(CC) {
      return Wz.has(CC)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Mz = {
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
      gz = {
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
      Sz = {
        ...gz,
        ...Object.fromEntries(Object.entries(TC).map((CC => {
          let [zC, ZC] = CC;
          return [zC, 9 * gz[ZC]]
        })))
      },
      pz = {
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
      Pz = {
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
    const Gz = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Rz = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Az(CC) {
      return `rgb(${Rz[CC].join(", ")})`
    }

    function xz(CC, zC, ZC) {
      if (!ZC) return CC(zC);
      const QC = {};
      for (const [wC, bC] of Object.entries(ZC)) QC[wC] = "string" === typeof bC ? bC : CC(bC.translationKey);
      return CC(zC, QC)
    }
    class Jz {
      constructor(CC, zC) {
        this.now = CC, this.getJournal = zC, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.vq = !1, this.onShown = () => {}
      }
      enqueue(CC) {
        const zC = Iz(CC);
        if (zC) this.pending.push(CC);
        else {
          const zC = this.pending.findIndex(Iz);
          this.pending.splice(-1 === zC ? this.pending.length : zC, 0, CC)
        }
        return (null === this.current || null !== this.followUp && !zC) && (this.advance(), !0)
      }
      setHeld(CC) {
        return this.vq = CC, !CC && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      ZN() {
        const CC = this.getJournal(),
          zC = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === zC ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === zC || void 0 === zC ? void 0 : zC.kind) && CC && CC.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === zC || void 0 === zC ? void 0 : zC.kind)) {
          const CC = this.findFollowUp(this.current);
          if ("step" !== (null === CC || void 0 === CC ? void 0 : CC.kind) || CC.questId !== zC.questId || CC.step.id !== zC.step.id) return this.showFollowUp(CC, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(CC, zC, ZC) {
        var QC, wC, bC, nC;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, CC, ZC);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, CC);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, CC, zC);
        const {
          questCompletionKind: fC,
          questCompletionNameKey: oC
        } = this.current, qC = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, FC = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, WC = "step" === (null === (QC = this.followUp) || void 0 === QC ? void 0 : QC.kind) ? this.followUp : null, NC = "explore" === (null === (wC = this.followUp) || void 0 === wC ? void 0 : wC.kind);
        let MC;
        return MC = NC ? CC("skyblockGame:questExploreTitle") : null !== WC ? "quest" === fC ? CC("skyblockGame:questNextQuestTitle", {
          quest: CC(WC.questNameKey)
        }) : CC("skyblockGame:questNextStepTitle") : CC("started" === fC ? "skyblockGame:questStartedTitle" : "quest" === fC ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? fC : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: MC,
          name: NC ? zC("skyblockGame:questExploreName") : null !== WC ? xz(zC, WC.step.nameKey, WC.step.nameParams) : xz(zC, oC, qC),
          description: NC ? zC("skyblockGame:questExploreDescription") : null === WC ? null : xz(zC, WC.step.descriptionKey, WC.step.descriptionParams),
          reward: null === this.followUp && FC > 0 ? zC("skyblockGame:questCoinRewardSuffix", {
            amount: FC.toLocaleString(ZC)
          }) : null,
          iconItem: null !== (bC = null === WC || void 0 === WC ? void 0 : WC.step.questIconItem) && void 0 !== bC ? bC : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== WC && (null === (nC = this.getJournal()) || void 0 === nC ? void 0 : nC.trackedQuestId) === WC.questId ? WC.step.nameKey : null
        }
      }
      getSkillLevelView(CC, zC, ZC) {
        let {
          skill: QC,
          beforeLevel: wC,
          level: bC
        } = CC;
        const nC = nz(QC, wC),
          fC = nz(QC, bC);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: zC(`skyblockGame:${QC}`),
          name: zC("skyblockGame:skillLevelUp", {
            to: bC.toLocaleString(ZC)
          }),
          description: nC.percent === fC.percent ? null : zC(`${fC.translationKey}Change`, {
            before: nC.percent.toLocaleString(ZC),
            after: fC.percent.toLocaleString(ZC)
          }),
          reward: null,
          iconItem: Gz[QC],
          accent: Az(QC),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(CC, zC) {
        let {
          landmarkNameKey: ZC
        } = CC;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: zC("skyblockGame:landmarkDiscovered"),
          name: zC(ZC),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(CC, zC, ZC) {
        let {
          titleKey: QC,
          textKey: wC,
          params: bC = {},
          nameKeys: nC = {},
          iconItem: fC = null
        } = CC;
        const oC = {
          ...bC
        };
        for (const [qC, FC] of Object.entries(nC)) oC[qC] = zC(FC);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: zC(QC),
          name: ZC(wC, oC),
          description: null,
          reward: null,
          iconItem: fC,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var CC;
        if (null !== this.followUp) return 5600;
        switch (null === (CC = this.current) || void 0 === CC ? void 0 : CC.questCompletionKind) {
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
      showFollowUp(CC, zC) {
        null === CC || this.vq ? this.advance() : (this.followUp = CC, this.token++, this.shownAt = this.now(), this.expiresAt = null !== zC && void 0 !== zC ? zC : this.shownAt + this.durationMs())
      }
      findFollowUp(CC) {
        var zC;
        const ZC = this.getJournal();
        if (!ZC || this.hasPendingQuestPopup() || Iz(CC)) return null;
        const QC = "started" === CC.questCompletionKind ? ZC.active.some((zC => zC.id === CC.questCompletionQuestId)) : "quest" === CC.questCompletionKind ? ZC.completed.some((zC => zC.id === CC.questCompletionQuestId)) : [...ZC.active, ...ZC.completed].some((zC => zC.id === CC.questCompletionQuestId && zC.subquests.some((zC => zC.id === CC.questCompletionStepId && "completed" === zC.status))));
        if (!QC) return null;
        if ("quest" === CC.questCompletionKind && 0 === ZC.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const wC = ZC.active.find((CC => CC.id === ZC.trackedQuestId)),
          bC = null !== (zC = null === wC || void 0 === wC ? void 0 : wC.subquests.find((CC => "ready" === CC.status))) && void 0 !== zC ? zC : null === wC || void 0 === wC ? void 0 : wC.subquests.find((CC => "active" === CC.status));
        return bC ? {
          kind: "step",
          questId: wC.id,
          questNameKey: wC.nameKey,
          step: bC
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((CC => !Iz(CC)))
      }
      advance() {
        var CC;
        this.current = this.vq ? null : null !== (CC = this.pending.shift()) && void 0 !== CC ? CC : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Iz(CC) {
      return iz(CC.questCompletionKind)
    }

    function iz(CC) {
      return "skillLevel" === CC || "landmark" === CC || "npcNote" === CC
    }
    var vz = ZC(38369);
    const ez = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      hz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Kz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Yz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      dz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var mz = ZC(38373);
    const Hz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Ez = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const lz = ZC.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Xz = ZC.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      cz = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var uz = ZC(18475),
      rz = ZC(20522),
      sz = ZC(22876),
      Tz = ZC(24475),
      az = ZC(26191);
    const tz = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: uz,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: rz,
      cow: dz,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: ZC(26209),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: ez,
      fishing_1: ez,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: hz,
      guardian_iron: Kz,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: sz,
      mines: Tz,
      mining_1: Tz,
      npc: Yz,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: dz,
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
      npc_gold_guardian: hz,
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
      npc_tentacle_guy: mz,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: Hz,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: lz,
      quest_talk: Xz,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: cz,
      watermelon: az
    };

    function Dz(CC, zC) {
      const ZC = document.createElement("img");
      return ZC.className = zC, ZC.src = CC, ZC.alt = "", ZC.draggable = !1, ZC
    }

    function jz(CC) {
      var zC;
      const ZC = null !== (zC = tz[CC]) && void 0 !== zC ? zC : CC.startsWith("npc_") ? Yz : cz;
      if ("portal" !== CC) return Dz(ZC, "SkyblockMapIcon");
      const QC = document.createElement("span");
      QC.className = "SkyblockMapIcon Portal";
      const wC = document.createElement("span");
      return wC.className = "SkyblockMapIconTint", wC.style.maskImage = wC.style.webkitMaskImage = `url("${Ez}")`, QC.append(Dz(ZC, "SkyblockMapIconLayer"), wC, Dz(Ez, "SkyblockMapIconLayer SkyblockMapIconShade")), QC
    }
    var yz = ZC(38341),
      Lz = ZC(4189);
    const Uz = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Bz(CC) {
      const zC = new Lz.j(CC);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Uz.map((CC => {
          let {
            lobes: ZC,
            amount: QC
          } = CC;
          return {
            lobes: ZC[Math.floor(zC.next() * ZC.length)],
            amount: QC[0] + zC.next() * (QC[1] - QC[0]),
            phase: 2 * zC.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function Oz(CC) {
      let {
        radius: zC,
        squareness: ZC,
        wobbles: QC,
        samples: wC
      } = CC;
      const bC = [];
      for (let nC = 0; nC < wC; nC++) {
        const CC = 2 * Math.PI * nC / wC,
          fC = Math.cos(CC),
          oC = Math.sin(CC),
          qC = zC * (Math.abs(fC) ** ZC + Math.abs(oC) ** ZC) ** (-1 / ZC) * QC.reduce(((zC, ZC) => {
            let {
              lobes: QC,
              amount: wC,
              phase: bC
            } = ZC;
            return zC + wC * Math.sin(QC * CC + bC)
          }), 1);
        bC.push(`${(50+qC*fC).toFixed(2)} ${(50+qC*oC).toFixed(2)}`)
      }
      return `M${bC.join("L")}Z`
    }
    const kz = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Vz {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Sg = !1, this.mountCompass = CC => {
          var zC;
          if (null === (zC = this.stopLayout) || void 0 === zC || zC.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !CC || this.Sg) return;
          const ZC = CC.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: CC,
            track: ZC,
            label: CC.querySelector(".SkyblockCompassLabel")
          }, ZC.replaceChildren();
          for (let wC = 0; wC < 4; wC++) {
            const CC = document.createElement("span");
            CC.className = "SkyblockCompassCardinal", ZC.appendChild(CC), this.cardinals.push(CC)
          }
          const QC = (0, yz.b)(kz, [CC], this.layout);
          this.stopLayout = () => {
            QC(), ZC.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = CC => {
          this.terrain = this.Sg ? null : CC, this.render(this.frame)
        }, this.mountMinimapSearchArea = CC => {
          this.mountSearchArea("minimap", CC)
        }, this.mountMapSearchArea = CC => {
          this.mountSearchArea("map", CC)
        }, this.mountPlayer = CC => {
          this.player = this.Sg ? null : CC, this.render(this.frame)
        }, this.mountWaypoint = CC => {
          var zC, ZC;
          if (null === (zC = this.stopWaypoint) || void 0 === zC || zC.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !CC || this.Sg) return;
          const QC = CC.querySelector(".SkyblockQuestWaypointMarker");
          QC.replaceChildren(jz("quest")), this.markerIcon = "quest", this.waypoint = {
            root: CC,
            marker: QC,
            clip: CC.querySelector(".SkyblockQuestWaypointTextClip"),
            text: CC.querySelector(".SkyblockQuestWaypointText"),
            label: CC.querySelector(".SkyblockQuestWaypointLabel"),
            distance: CC.querySelector(".SkyblockQuestWaypointDistance"),
            hint: CC.querySelector(".SkyblockQuestWaypointHint")
          };
          const wC = () => {
              this.waypointMarkerSize = {
                width: QC.offsetWidth,
                height: QC.offsetHeight
              }, this.waypointInset = {
                x: QC.offsetWidth / 2 + 8,
                top: QC.offsetHeight + 8,
                bottom: 8
              }
            },
            bC = new ResizeObserver((() => {
              wC(), this.render(this.frame)
            }));
          bC.observe(QC, {
            box: "border-box"
          });
          const nC = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", nC), null === (ZC = window.visualViewport) || void 0 === ZC || ZC.addEventListener("resize", nC), this.stopWaypoint = () => {
            var CC;
            bC.disconnect(), window.removeEventListener("resize", nC), null === (CC = window.visualViewport) || void 0 === CC || CC.removeEventListener("resize", nC)
          }, nC(), wC(), this.render(this.frame)
        }, this.mountWaypointOrigin = CC => {
          var zC;
          if (null === (zC = this.stopWaypointOrigin) || void 0 === zC || zC.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = CC && !this.Sg ? Number(CC.dataset.notificationToken) : null, CC && !this.Sg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const zC = {
              nameKey: CC.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = zC;
            const ZC = () => {
                const ZC = CC.getBoundingClientRect();
                zC.x = (ZC.left + ZC.width / 2) / window.innerWidth * 100, zC.y = (ZC.top + ZC.height / 2) / window.innerHeight * 100
              },
              QC = new ResizeObserver(ZC);
            QC.observe(CC.parentElement), QC.observe(CC), window.addEventListener("resize", ZC), this.stopWaypointOrigin = () => {
              QC.disconnect(), window.removeEventListener("resize", ZC)
            }, ZC()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const CC = this.compass.root,
            zC = getComputedStyle(CC),
            ZC = getComputedStyle(document.documentElement),
            QC = parseFloat(ZC.fontSize),
            wC = parseFloat(zC.getPropertyValue("--compass-icon-size")) * QC,
            bC = "1" === zC.getPropertyValue("--compass-fit-top").trim(),
            nC = bC ? 1 : 8,
            fC = Array.from(document.querySelectorAll(kz), (CC => {
              var zC;
              return (null !== (zC = CC.querySelector(".MiddleTextTop")) && void 0 !== zC ? zC : CC).getBoundingClientRect()
            })).filter((CC => CC.width > 0 && CC.height > 0));
          let oC = (parseFloat(ZC.getPropertyValue("--notchTop")) || 0) + nC,
            qC = "";
          if (bC) {
            const zC = window.innerWidth / 2,
              ZC = CC.getBoundingClientRect().height,
              bC = [oC, ...fC.map((CC => Math.max(oC, CC.bottom + nC)))].sort(((CC, zC) => CC - zC));
            for (const CC of bC) {
              let bC = zC - 8;
              for (const QC of fC) QC.bottom + nC <= CC || QC.top >= CC + ZC + nC || (bC = Math.min(bC, QC.right <= zC ? zC - QC.right - 8 : QC.left - zC - 8));
              const FC = 2 * bC - wC;
              if (FC >= 16 * QC) {
                qC = `${FC}px`, oC = CC;
                break
              }
            }
          }
          CC.style.maxWidth !== qC && (CC.style.maxWidth = qC);
          const FC = CC.getBoundingClientRect(),
            WC = this.compassSize.trackHalfWidth;
          if (FC.width > 0) {
            const CC = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: CC.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * wC / CC.width
          }
          if (!qC)
            for (const NC of fC) NC.right > FC.left - 8 && NC.left < FC.right + 8 && (oC = Math.max(oC, NC.bottom + nC));
          CC.style.top = `${oC}px`, this.compassSize.trackHalfWidth !== WC && this.render(this.frame)
        }
      }
      mountSearchArea(CC, zC) {
        this.searchAreas[CC] = this.Sg ? null : zC, this.render(this.frame)
      }
      render(CC) {
        if (this.Sg) return;
        if (this.frame = CC, this.compass && (CZ(this.compass.root, !CC), CC)) {
          const zC = this.compassSize.trackHalfWidth / 50;
          CC.compass.cardinals.forEach(((CC, ZC) => {
            const QC = this.cardinals[ZC];
            QC.textContent !== CC.name && (QC.textContent = CC.name), CZ(QC, CC.hidden), QC.style.translate = CC.left * zC + "px"
          }));
          const ZC = new Set;
          CC.compass.markers.forEach(((QC, wC) => {
            var bC;
            ZC.add(QC.id);
            let nC = this.markers.get(QC.id);
            nC || (nC = document.createElement("span"), nC.className = "SkyblockCompassMarker", this.markers.set(QC.id, nC), this.compass.track.appendChild(nC)), nC.dataset.icon !== QC.icon && (nC.dataset.icon = QC.icon, nC.replaceChildren(jz(QC.icon))), nC.style.color = null !== (bC = QC.colour) && void 0 !== bC ? bC : "", nC.style.translate = QC.left * zC + "px", nC.style.zIndex = String(CC.compass.markers.length - wC), nC.title !== QC.name && (nC.title = QC.name)
          }));
          for (const [CC, QC] of this.markers) ZC.has(CC) || (QC.remove(), this.markers.delete(CC));
          this.compass.label.textContent !== CC.compass.label && (this.compass.label.textContent = CC.compass.label)
        }
        this.terrain && (CZ(this.terrain, !(null !== CC && void 0 !== CC && CC.minimap)), null !== CC && void 0 !== CC && CC.minimap && (this.terrain.style.transform = CC.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", CC.minimap.iconRotation)));
        const zC = null === CC || void 0 === CC ? void 0 : CC.searchArea;
        for (const ZC of [this.searchAreas.minimap, this.searchAreas.map])
          if (ZC && (CZ(ZC, !zC), zC)) {
            if (this.searchAreaPath.seed !== zC.shapeSeed && (this.searchAreaPath = {
                seed: zC.shapeSeed,
                d: Oz(Bz(zC.shapeSeed))
              }), ZC.dataset.shapeSeed !== zC.shapeSeed) {
              ZC.dataset.shapeSeed = zC.shapeSeed;
              for (const CC of ZC.querySelectorAll("path")) CC.setAttribute("d", this.searchAreaPath.d)
            }
            ZC.style.left = `${zC.left}%`, ZC.style.top = `${zC.top}%`, ZC.style.width = `${zC.width}%`, ZC.style.height = `${zC.height}%`
          } if (this.player && (CZ(this.player, !(null !== CC && void 0 !== CC && CC.player) || CC.player.hidden), null !== CC && void 0 !== CC && CC.player && (this.player.style.left = `${CC.player.left}%`, this.player.style.top = `${CC.player.top}%`, this.player.style.setProperty("--map-player-rotation", CC.player.rotation))), this.waypoint) {
          const {
            root: zC,
            marker: ZC,
            clip: QC,
            text: wC,
            label: bC,
            distance: nC,
            hint: fC
          } = this.waypoint, oC = !(null !== CC && void 0 !== CC && CC.waypoint) || null !== CC.waypoint.popupToken && CC.waypoint.popupToken !== this.waypointOriginToken;
          CZ(zC, oC);
          let qC = 1;
          const FC = this.waypointLaunch;
          if (!oC && FC && CC.waypoint.nameKey === FC.nameKey) {
            const CC = performance.now();
            FC.startedAt ??= CC, qC = Math.min(1, Math.max(0, (CC - FC.startedAt - 450) / 1e3)), ZC.style.opacity = String(Math.min(1, (CC - FC.startedAt) / 150)), 1 === qC && (this.waypointLaunch = null)
          } else ZC.style.opacity = "", FC && null !== FC.startedAt && (this.waypointLaunch = null);
          if (zC.classList.toggle("Launching", qC < 1), null !== CC && void 0 !== CC && CC.waypoint) {
            const zC = this.waypointInset,
              oC = "quest_talk" === CC.waypoint.markerIcon ? function(CC, zC, ZC) {
                if (!CC.text || null === CC.blockHeight || 0 === CC.nearness) return CC;
                const QC = CC.blockHeight / 100 * ZC.height,
                  wC = -CC.nearness * (zZ * QC + zC.width / 2),
                  bC = CC.nearness * (ZZ * QC + zC.height / 2);
                return {
                  ...CC,
                  text: {
                    x: CC.text.x + wC / ZC.width * 100,
                    y: CC.text.y + bC / ZC.height * 100
                  }
                }
              }(CC.waypoint, this.waypointMarkerSize, this.viewport) : CC.waypoint,
              WC = (0, vz.b)(oC, zC, this.viewport),
              NC = qC * qC * (3 - 2 * qC),
              MC = qC < 1 ? FC.x + (WC.x - FC.x) * NC : WC.x,
              gC = qC < 1 ? FC.y + (WC.y - FC.y) * NC : WC.y;
            ZC.style.translate = `${MC}vw ${gC}vh`, QC.style.clipPath = `inset(${zC.top}px ${zC.x}px ${zC.bottom}px)`, CZ(wC, qC < 1 || !CC.waypoint.text), wC.style.opacity = String(1 - CC.waypoint.nearness), CC.waypoint.text && (wC.style.translate = `${CC.waypoint.text.x}vw ${CC.waypoint.text.y}vh`), bC.textContent !== CC.waypoint.name && (bC.textContent = CC.waypoint.name), this.markerIcon !== CC.waypoint.markerIcon && (this.markerIcon = CC.waypoint.markerIcon, ZC.replaceChildren(jz(this.markerIcon))), nC.textContent !== CC.waypoint.distance && (nC.textContent = CC.waypoint.distance), CZ(fC, null === CC.waypoint.hint), null !== CC.waypoint.hint && fC.textContent !== CC.waypoint.hint && (fC.textContent = CC.waypoint.hint)
          }
        }
      }
      dispose() {
        var CC, zC;
        this.mountWaypointOrigin(null), this.render(null), null === (CC = this.stopLayout) || void 0 === CC || CC.call(this), this.stopLayout = null, null === (zC = this.stopWaypoint) || void 0 === zC || zC.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Sg = !0
      }
    }

    function CZ(CC, zC) {
      CC.hidden !== zC && (CC.hidden = zC)
    }
    const zZ = .55,
      ZZ = .6;
    const QZ = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class wZ {
      constructor(CC, zC, ZC, QC) {
        this.map = CC, this.quests = zC, this.compass = ZC, this.display = new Vz, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Sg = !1, this.snapshot = null, this.texts = new Map, this.translate = QC
      }
      setTranslator(CC, zC) {
        this.translate = CC, this.locale = zC, this.metresFormat = new Intl.NumberFormat(zC), this.texts.clear()
      }
      translateCached(CC, zC) {
        const ZC = void 0 === zC ? CC : `${CC} ${zC}`;
        let QC = this.texts.get(ZC);
        return void 0 === QC && (this.texts.size >= 500 && this.texts.clear(), QC = this.translate(CC, void 0 === zC ? void 0 : {
          distance: zC
        }), this.texts.set(ZC, QC)), QC
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(CC, zC, ZC) {
        if (this.Sg) return;
        if (!CC) return this.snapshot = null, void this.display.render(null);
        const QC = this.map.getSnapshot().map,
          oC = ZC.cameraHeading,
          qC = {
            ...this.display.compassSize,
            tanHalfFovX: ZC.tanHalfFovX,
            pitch: ZC.cameraPitch
          },
          FC = [];
        if (QC)
          for (const wC of this.compass.frame(CC, oC, zC)) {
            const CC = SC(wC.offset, qC);
            null !== CC && FC.push({
              ...wC,
              left: CC
            })
          }
        const WC = function(CC, zC) {
            const ZC = [],
              QC = CC => "quest" === CC.kind ? CC.distance - 1 : CC.distance,
              wC = [...CC].sort(((CC, zC) => QC(CC) - QC(zC) || CC.id.localeCompare(zC.id)));
            for (const bC of wC) {
              let CC = !1;
              if ("quest" !== bC.kind)
                for (const QC of ZC)
                  if (Math.abs(QC.left - bC.left) < zC) {
                    CC = !0;
                    break
                  } CC || ZC.push(bC)
            }
            return ZC
          }(FC, this.display.compassSpacing),
          NC = function(CC) {
            let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              ZC = null;
            for (const QC of CC) Math.abs(QC.offset) <= zC && (!ZC || QC.distance < ZC.distance || QC.distance === ZC.distance && Math.abs(QC.offset) < Math.abs(ZC.offset)) && (ZC = QC);
            return ZC
          }(WC),
          MC = CC => {
            var zC;
            return null !== (zC = CC.displayName) && void 0 !== zC ? zC : this.translateCached(CC.nameKey)
          },
          gC = {
            compass: {
              markers: WC.map((CC => ({
                id: CC.id,
                icon: CC.icon,
                colour: CC.colour,
                name: MC(CC),
                left: CC.left
              }))),
              cardinals: nC.map((CC => {
                let {
                  name: zC,
                  bearing: ZC
                } = CC;
                const QC = SC(wC.c.computeShortestRotation(oC, ZC), qC);
                return {
                  name: zC,
                  left: null !== QC && void 0 !== QC ? QC : 0,
                  hidden: null === QC
                }
              })),
              label: NC ? `${MC(NC)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",JC(NC.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== QC && void 0 !== QC && QC.background) {
          const zC = CC[0] - QC.mapOrigin[0],
            ZC = CC[2] - QC.mapOrigin[2],
            {
              rotation: wC,
              transform: nC
            } = function(CC, zC, ZC, QC) {
              const [wC, nC] = fC(CC, zC, QC), oC = bC - ZC;
              return {
                rotation: oC,
                transform: `rotate(${oC}rad) translate(-${wC}%, -${nC}%)`
              }
            }(zC, ZC, oC, QC.background.bounds);
          gC.minimap = {
            transform: nC,
            iconRotation: -wC + "rad"
          };
          const [qC, FC] = fC(zC, ZC, QC.background.bounds);
          gC.player = {
            left: qC,
            top: FC,
            hidden: qC < 0 || FC < 0 || qC > 100 || FC > 100,
            rotation: -wC + "rad"
          }
        }
        const {
          waypoint: pC
        } = this.quests.getSnapshot();
        if ("search" === (null === pC || void 0 === pC ? void 0 : pC.questMarkerIcon) && null !== QC && void 0 !== QC && QC.background) {
          const {
            bounds: CC
          } = QC.background, [zC, ZC] = fC(pC.position[0] - QC.mapOrigin[0], pC.position[2] - QC.mapOrigin[2], CC);
          gC.searchArea = {
            left: zC,
            top: ZC,
            width: 6400 / (CC.mapMaxX - CC.mapMinX),
            height: 6400 / (CC.mapMaxZ - CC.mapMinZ),
            shapeSeed: pC.nameKey
          }
        }
        const PC = this.quests.getNotificationSnapshot(),
          GC = "completion" === (null === PC || void 0 === PC ? void 0 : PC.phase) && !iz(PC.kind);
        if (pC && !GC) {
          const zC = Math.hypot(...pC.position.map(((zC, ZC) => zC - CC[ZC]))),
            QC = Math.round(zC),
            wC = "talk" === pC.questMarkerIcon ? Math.min(1, Math.max(0, (10 - zC) / 5)) : 0,
            bC = ZC.projectWorldPosToViewport(pC.position),
            nC = bC && ZC.projectWorldPosToViewport([pC.position[0], pC.position[1] - 1, pC.position[2]]);
          gC.waypoint = {
            ...ZC.projectWorldPosToScreenPos(pC.position),
            text: bC,
            nearness: wC * wC * (3 - 2 * wC),
            blockHeight: bC && nC ? nC.y - bC.y : null,
            name: this.translateCached(pC.nameKey),
            nameKey: pC.nameKey,
            markerIcon: pC.questMarkerIcon ? QZ[pC.questMarkerIcon] : "quest",
            popupToken: (null === PC || void 0 === PC ? void 0 : PC.waypointNameKey) === pC.nameKey ? PC.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(QC)),
            hint: "search" === pC.questMarkerIcon && Math.hypot(pC.position[0] - CC[0], pC.position[2] - CC[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = gC, this.display.render(gC)
      }
      dispose() {
        this.Sg = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const bZ = "skyblockSkillsView";
    class nZ extends WC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          ZC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CC => CC,
          QC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          wC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CC => CC;
        super(CC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = zC, this.translate = ZC, this.locale = QC, this.itemName = wC, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = CC => {
          this.selected = CC, this.emit()
        }
      }
      setTranslator(CC, zC, ZC) {
        this.translate = CC, this.locale = zC, this.itemName = ZC, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(CC) {
        let zC = this.skillText.get(CC);
        return zC || (zC = {
          label: this.translate(`skyblockGame:${CC}`),
          description: this.translate(`skyblockGame:${CC}Description`)
        }, this.skillText.set(CC, zC)), zC
      }
      sources(CC) {
        if ("mining" === CC || "fishing" === CC) return this.buildSources(CC);
        let zC = this.sourceText.get(CC);
        return zC || (zC = this.buildSources(CC), this.sourceText.set(CC, zC)), zC
      }
      buildSources(CC) {
        const zC = this.translate;
        return "exploration" === CC ? [zC("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), zC("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === CC ? [zC("skyblockGame:logSource", {
          xp: this.number(Mz["Maple Log"])
        })] : "combat" === CC ? [zC("skyblockGame:creatureKillSource"), zC("skyblockGame:noEnvironmentalXp")] : "farming" === CC ? [zC("skyblockGame:cropSource", {
          xp: this.number(pz["Wheat|FreshlyGrown"])
        }), zC("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), zC("skyblockGame:noYoungCropXp")] : Object.entries("mining" === CC ? Sz : Pz).map((CC => {
          let [ZC, QC] = CC;
          return zC("skyblockGame:itemXpSource", {
            item: this.itemName(ZC),
            xp: this.number(QC)
          })
        }))
      }
      number(CC) {
        return CC.toLocaleString(this.locale)
      }
      benefit(CC, zC) {
        const ZC = nz(CC, zC);
        return this.translate(ZC.translationKey, {
          bonus: this.number(ZC.percent)
        })
      }
      Ag(CC) {
        if (!this.Sg) {
          if ("snapshot" === CC.kind) this.progress = CC.progress, this.pending.clear(), this.recent = null;
          else if ("award" === CC.kind && this.progress) {
            const {
              award: zC
            } = CC;
            this.progress = {
              ...this.progress,
              [zC.skill]: zC.after
            };
            for (const [CC, QC] of this.pending) QC.skill === zC.skill && this.pending.delete(CC);
            const ZC = zC.after.level > zC.before.level;
            this.recordGain(zC.skill, zC.amount, ZC ? ++this.nextLevelUpToken : null), ZC && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: zC.skill,
              beforeLevel: zC.before.level,
              level: zC.after.level
            })
          } else {
            if ("rejectBlock" === CC.kind) return void this.rejectBlock(CC.position);
            if ("open" === CC.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(CC, zC, ZC) {
        if (!this.progress || this.Sg || ZC) return;
        const QC = function(CC, zC) {
          const ZC = CC.split("|")[0];
          return "Air" === zC || zC === `Barkless ${CC}` ? Object.hasOwn(Mz, ZC) ? {
            skill: "foraging",
            amount: Mz[ZC]
          } : "Air" !== zC ? null : Object.hasOwn(Sz, CC) ? {
            skill: "mining",
            amount: Sz[CC]
          } : Fz(CC) ? {
            skill: "farming",
            amount: 10
          } : Nz(CC) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(pz, CC) ? {
            skill: "farming",
            amount: pz[CC]
          } : Object.hasOwn(uC, CC) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(zC, "Air");
        if (!QC) return;
        const wC = CC.join(",");
        if (this.pending.has(wC)) return;
        const bC = this.predictedProgress(QC.skill).totalXp + QC.amount;
        Number.isSafeInteger(bC) && (this.pending.set(wC, {
          ...QC,
          expires: this.now() + 2e3
        }), this.recordGain(QC.skill, 0), this.emit())
      }
      rejectBlock(CC) {
        this.pending.delete(CC.join(",")) && this.emit()
      }
      ZN() {
        if (this.Sg) return;
        let CC = !1;
        for (const [zC, ZC] of this.pending) ZC.expires <= this.now() && (this.pending.delete(zC), CC = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, CC = !0), CC && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(CC, zC) {
        var ZC, QC;
        let wC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const bC = (null === (ZC = this.recent) || void 0 === ZC ? void 0 : ZC.skill) === CC && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          nC = (null === (QC = this.recent) || void 0 === QC ? void 0 : QC.skill) === CC && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: CC,
          confirmed: bC + zC,
          expires: this.now() + 3e3,
          levelUpToken: null !== wC && void 0 !== wC ? wC : nC
        }
      }
      pendingXp(CC) {
        let zC = 0;
        for (const ZC of this.pending.values()) ZC.skill === CC && (zC += ZC.amount);
        return zC
      }
      predictedProgress(CC) {
        const zC = this.progress[CC],
          ZC = this.pendingXp(CC);
        return ZC ? oz(zC.totalXp + ZC, CC) : zC
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var CC, zC, ZC;
        const QC = this.progress ? BC.map((CC => {
            const zC = this.predictedProgress(CC);
            return {
              ...this.text(CC),
              icon: Gz[CC],
              benefit: this.benefit(CC, zC.level),
              sources: this.sources(CC),
              id: CC,
              selected: CC === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(zC.level)
              }),
              xp: null === zC.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(zC.xpIntoLevel),
                target: this.number(zC.xpForNextLevel)
              }),
              percent: null === zC.xpForNextLevel ? 100 : Math.min(100, zC.xpIntoLevel / zC.xpForNextLevel * 100)
            }
          })) : [],
          wC = QC.find((CC => {
            var zC;
            return CC.id === (null === (zC = this.recent) || void 0 === zC ? void 0 : zC.skill)
          })),
          bC = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: QC,
          detail: null !== (CC = QC.find((CC => CC.selected))) && void 0 !== CC ? CC : null,
          overallLevel: this.progress ? BC.reduce(((CC, zC) => CC + this.predictedProgress(zC).level), 0) : null,
          hud: wC && bC > 0 ? {
            skill: wC,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(bC)
            }),
            levelUpToken: null !== (zC = null === (ZC = this.recent) || void 0 === ZC ? void 0 : ZC.levelUpToken) && void 0 !== zC ? zC : null,
            colour: Az(wC.id)
          } : null
        }
      }
    }
    const fZ = Math.max(1600, 600, 950) + 400,
      oZ = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      qZ = "skyblockQuestsView",
      FZ = "skyblockQuestNotificationView";
    class WZ extends WC {
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          nC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(CC, QC, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = zC, this.translate = ZC, this.now = wC, this.locale = bC, this.publishNotification = nC, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var CC, zC;
          this.selected = null !== (CC = null === (zC = this.authoritative) || void 0 === zC ? void 0 : zC.trackedQuestId) && void 0 !== CC ? CC : null, this.show()
        }, this.select = CC => {
          this.selected = CC, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const CC = this.snapshot.detail;
          !this.Sg && null !== CC && void 0 !== CC && CC.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(CC.id), this.emit())
        }, this.viewDialogue = () => {
          const CC = this.snapshot.detail;
          var zC;
          CC && (null === (zC = this.onViewDialogue) || void 0 === zC || zC.call(this, CC.id))
        }, this.notifications = new Jz(wC, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var CC, zC;
        return null !== (CC = null === (zC = this.authoritative) || void 0 === zC ? void 0 : zC.trackedQuestId) && void 0 !== CC ? CC : null
      }
      notify(CC) {
        !this.Sg && this.notifications.enqueue(CC) && this.emitNotification()
      }
      setNotificationsHeld(CC) {
        (this.notifications.setHeld(CC) || CC) && this.emitNotification()
      }
      ZN() {
        var CC, zC;
        if (this.Sg) return;
        this.notifications.ZN() && this.emitNotification();
        let ZC = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, ZC = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, ZC = !0);
        const QC = NZ(this.authoritative);
        null !== QC && void 0 !== QC && null !== (CC = QC.questClock) && void 0 !== CC && CC.running && this.clockText(QC) !== (null === (zC = this.snapshot.tracked) || void 0 === zC ? void 0 : zC.clock) && (ZC = !0), ZC && this.emit()
      }
      setTranslator(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = CC, this.locale = zC, this.emitNotification(), this.emit()
      }
      Ag(CC) {
        if (!this.Sg)
          if ("completion" === CC.kind) this.notify(CC.questCompletion);
          else if ("landmark" === CC.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: CC.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === CC.kind) {
          var zC, ZC, QC;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: CC.npcNoteTitleKey,
            textKey: CC.npcNoteTextKey,
            params: null !== (zC = CC.npcNoteParams) && void 0 !== zC ? zC : {},
            nameKeys: null !== (ZC = CC.npcNoteNameKeys) && void 0 !== ZC ? ZC : {},
            iconItem: null !== (QC = CC.npcNoteIconItem) && void 0 !== QC ? QC : null
          })
        } else if ("open" === CC.kind) this.show();
        else if ("guidance" === CC.kind) this.waypoint = CC.waypoint, this.compassTarget = CC.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === CC.kind) {
          this.authoritative = CC.snapshot, this.notifications.ZN() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const zC = this.trackedStepPulse;
          this.updateTrackedStepPulse(CC.snapshot), this.emit(), this.trackedStepPulse > zC && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Sg || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var CC;
        return null !== (CC = this.translateWithIcons) && void 0 !== CC ? CC : this.translate
      }
      clockText(CC) {
        const zC = CC.questClock;
        if (!zC) return null;
        const ZC = zC.elapsedMs + (zC.running ? this.now() - this.receivedAt : 0);
        return void 0 === zC.countdownFromMs ? HC(ZC, !1) : HC(1e3 * Math.ceil(Math.max(0, zC.countdownFromMs - ZC) / 1e3), !1)
      }
      updateTrackedStepPulse(CC) {
        var zC, ZC, QC;
        const wC = NZ(CC);
        if (!wC) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const bC = CC => wC.subquests.filter((zC => CC(zC.status))).map((CC => CC.id)),
          nC = bC((CC => "completed" === CC || "skipped" === CC)),
          fC = bC((CC => "locked" !== CC)),
          oC = (null === (zC = this.trackedSteps) || void 0 === zC ? void 0 : zC.questId) === wC.id && wC.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (oC) {
          const CC = nC.filter((CC => !oC.finished.has(CC))),
            zC = bC((CC => "active" === CC || "ready" === CC)).filter((CC => !oC.unlocked.has(CC)));
          CC.length > 0 && this.trackedStepPulse++, (CC.length > 0 || zC.length > 0) && (this.trackedChange = {
            finished: new Set(CC),
            unlocked: new Set(zC),
            expiresAt: this.now() + fZ
          })
        } else {
          var qC;
          this.trackedStepPulse = (null === (qC = this.trackedSteps) || void 0 === qC ? void 0 : qC.questId) === wC.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: wC.id,
          progress: wC.progress,
          finished: new Set([...null !== (ZC = null === oC || void 0 === oC ? void 0 : oC.finished) && void 0 !== ZC ? ZC : [], ...nC]),
          unlocked: new Set([...null !== (QC = null === oC || void 0 === oC ? void 0 : oC.unlocked) && void 0 !== QC ? QC : [], ...fC])
        }
      }
      entry(CC, zC) {
        var ZC, QC;
        const wC = CC.id === (null === (ZC = this.authoritative) || void 0 === ZC ? void 0 : ZC.trackedQuestId),
          bC = this.now() < this.trackAvailableAt,
          nC = this.questTextTranslator(),
          fC = CC.subquests.map((zC => {
            var ZC, QC, bC, fC, oC, qC;
            const FC = null !== (ZC = zC.handInNpcName) && void 0 !== ZC ? ZC : CC.giverName,
              WC = this.translate("skyblockGame:progress", {
                current: zC.progress.toLocaleString(this.locale),
                target: zC.target.toLocaleString(this.locale)
              }),
              NC = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: FC ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [zC.status],
              MC = "active" === zC.status || "ready" === zC.status;
            return {
              id: zC.id,
              name: xz(nC, zC.nameKey, zC.nameParams),
              description: xz(nC, zC.descriptionKey, zC.descriptionParams),
              progress: WC,
              status: zC.status,
              statusLabel: NC ? this.translate(NC, {
                npc: FC
              }) : WC,
              iconItem: MC && null !== (QC = zC.questIconItem) && void 0 !== QC ? QC : null,
              barPercent: "active" === zC.status && zC.showsProgressBar ? Math.min(100, 100 * zC.progress / zC.target) : null,
              justFinished: wC && null !== (bC = null === (fC = this.trackedChange) || void 0 === fC ? void 0 : fC.finished.has(zC.id)) && void 0 !== bC && bC,
              justUnlocked: wC && null !== (oC = null === (qC = this.trackedChange) || void 0 === qC ? void 0 : qC.unlocked.has(zC.id)) && void 0 !== oC && oC
            }
          }));
        return {
          id: CC.id,
          name: xz(nC, CC.nameKey, CC.nameParams),
          description: xz(nC, CC.descriptionKey, CC.descriptionParams),
          progress: zC ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: CC.progress.toLocaleString(this.locale),
            target: CC.target.toLocaleString(this.locale)
          }),
          completed: zC,
          tracked: wC,
          selected: CC.id === this.selected,
          canTrack: !zC && !wC && !bC,
          trackLabel: this.translate(wC ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : bC ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== CC.id,
          subquests: fC,
          focusStep: null !== (QC = fC.find((CC => null !== CC.barPercent))) && void 0 !== QC ? QC : null,
          clock: this.clockText(CC)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC;
        const FC = [...null !== (CC = null === (zC = this.authoritative) || void 0 === zC ? void 0 : zC.active) && void 0 !== CC ? CC : [], ...null !== (ZC = null === (QC = this.authoritative) || void 0 === QC ? void 0 : QC.completed) && void 0 !== ZC ? ZC : []];
        var WC, NC, MC, gC;
        FC.some((CC => CC.id === this.selected)) || (this.selected = null !== (WC = null !== (NC = null === (MC = this.authoritative) || void 0 === MC ? void 0 : MC.trackedQuestId) && void 0 !== NC ? NC : null === (gC = FC[0]) || void 0 === gC ? void 0 : gC.id) && void 0 !== WC ? WC : null);
        const SC = null !== (wC = null === (bC = this.authoritative) || void 0 === bC ? void 0 : bC.active.map((CC => this.entry(CC, !1)))) && void 0 !== wC ? wC : [];
        SC.sort(((CC, zC) => Number(zC.tracked) - Number(CC.tracked)));
        const pC = null !== (nC = null === (fC = this.authoritative) || void 0 === fC ? void 0 : fC.completed.map((CC => this.entry(CC, !0)))) && void 0 !== nC ? nC : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: SC,
          completed: pC,
          completedExpanded: this.completedExpanded,
          detail: null !== (oC = [...SC, ...pC].find((CC => CC.selected))) && void 0 !== oC ? oC : null,
          tracked: null !== (qC = SC.find((CC => CC.tracked))) && void 0 !== qC ? qC : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function NZ(CC) {
      var zC;
      return null !== (zC = null === CC || void 0 === CC ? void 0 : CC.active.find((zC => zC.id === CC.trackedQuestId))) && void 0 !== zC ? zC : null
    }
    const MZ = "skyblockDungeonsView";
    class gZ extends WC {
      constructor(CC, zC) {
        let ZC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          QC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(CC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = zC, this.locale = ZC, this.requestEnter = QC, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = CC => {
          this.selected = CC, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const CC = this.pickerEntry(),
            zC = null === CC || void 0 === CC ? void 0 : CC.difficulties[this.pageIndex];
          void 0 !== zC && null !== zC.unlockedBoss && (this.close(), this.requestEnter(CC.id, zC.difficulty))
        }
      }
      setTranslator(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = CC, this.locale = zC, this.emit()
      }
      Ag(CC) {
        var zC, ZC;
        if (!this.Sg) return "open" === CC.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== CC.kind ? "snapshot" === CC.kind && (this.authoritative = CC.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (zC = null === (ZC = this.pickerEntry()) || void 0 === ZC ? void 0 : ZC.difficulties.length) && void 0 !== zC ? zC : 1) - 1)), null === CC.snapshot && this.open ? this.close() : this.emit()) : this.choose(CC.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(CC) {
        var zC;
        const ZC = null === (zC = this.authoritative) || void 0 === zC ? void 0 : zC.dungeons.find((zC => zC.id === CC));
        void 0 !== ZC ? this.open && this.pickerDungeonId === CC || (this.pickerDungeonId = CC, this.pageIndex = Math.max(0, ZC.difficulties.findLastIndex((CC => null !== CC.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${CC}`)
      }
      turnTo(CC) {
        var zC, ZC;
        const QC = null !== (zC = null === (ZC = this.pickerEntry()) || void 0 === ZC ? void 0 : ZC.difficulties.length) && void 0 !== zC ? zC : 0;
        CC < 0 || CC >= QC || CC === this.pageIndex || (this.pageIndex = CC, this.emit())
      }
      pickerEntry() {
        var CC, zC;
        return null !== (CC = null === (zC = this.authoritative) || void 0 === zC ? void 0 : zC.dungeons.find((CC => CC.id === this.pickerDungeonId))) && void 0 !== CC ? CC : null
      }
      difficulty(CC) {
        const zC = CC.completions > 0,
          ZC = null === CC.bestMs ? null : HC(CC.bestMs);
        return {
          difficulty: CC.difficulty,
          label: this.translate(dC[CC.difficulty]),
          colour: mC[CC.difficulty],
          beaten: zC,
          bestTime: ZC,
          completions: CC.completions,
          summary: zC ? [null === ZC ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: ZC
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: CC.completions.toLocaleString(this.locale)
          })].filter((CC => null !== CC)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(CC) {
        const zC = CC.difficulties.map((CC => this.difficulty(CC))),
          ZC = zC.filter((CC => CC.beaten)).length;
        return {
          id: CC.id,
          name: this.translate(CC.nameKey),
          selected: CC.id === this.selected,
          beatenSummary: `${ZC} / ${zC.length}`,
          difficulties: zC
        }
      }
      picker() {
        const CC = this.pickerEntry();
        if (null === CC || 0 === CC.difficulties.length) return null;
        const zC = CC.difficulties.map(((zC, ZC) => {
          var QC, wC, bC, nC;
          const fC = zC.unlockedBoss,
            oC = null === fC ? this.lockedHint(CC, ZC) : null;
          return {
            ...this.difficulty(zC),
            unlocked: null !== fC,
            bossName: null === fC ? null : this.translate(fC.bossNameKey),
            bossMobType: null !== (QC = null === fC || void 0 === fC ? void 0 : fC.bossMobType) && void 0 !== QC ? QC : null,
            bossMobVariation: null !== (wC = null === fC || void 0 === fC ? void 0 : fC.bossMobVariation) && void 0 !== wC ? wC : null,
            lockedHint: null !== (bC = null === oC || void 0 === oC ? void 0 : oC.text) && void 0 !== bC ? bC : null,
            lockedHintHighlight: null !== (nC = null === oC || void 0 === oC ? void 0 : oC.highlight) && void 0 !== nC ? nC : null,
            current: ZC === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(CC.nameKey),
          pages: zC,
          page: zC[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < zC.length - 1
        }
      }
      lockedHint(CC, zC) {
        var ZC, QC, wC;
        if (0 === zC && "number" === typeof CC.combatLevelLock) {
          const zC = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: CC.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: zC,
            colour: Az("combat"),
            icon: Gz.combat
          })
        }
        const bC = null !== (ZC = null === (QC = this.authoritative) || void 0 === QC ? void 0 : QC.dungeons) && void 0 !== ZC ? ZC : [],
          nC = zC > 0 ? CC : null !== (wC = bC[bC.indexOf(CC) - 1]) && void 0 !== wC ? wC : null,
          fC = zC > 0 ? CC.difficulties[zC - 1] : null === nC || void 0 === nC ? void 0 : nC.difficulties[0];
        if (null === nC || void 0 === fC) return null;
        const oC = this.translate(nC.nameKey);
        if (null === fC.unlockedBoss) return nC === CC ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, fC.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: oC
        }, fC.difficulty);
        const qC = this.translate(fC.unlockedBoss.bossNameKey);
        return nC === CC ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: qC
        }, fC.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: qC,
            dungeon: oC
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(CC, zC, ZC) {
        return this.hintHighlighting(CC, zC, "difficulty", {
          name: this.translate(dC[ZC]),
          colour: mC[ZC],
          icon: null
        })
      }
      hintHighlighting(CC, zC, ZC, QC) {
        let {
          name: wC,
          colour: bC,
          icon: nC
        } = QC;
        const fC = this.translate(CC, {
          ...zC,
          [ZC]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(CC, {
            ...zC,
            [ZC]: wC
          }),
          highlight: 2 === fC.length ? {
            before: fC[0],
            name: wC,
            after: fC[1],
            colour: bC,
            icon: nC
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var CC, zC, ZC;
        const QC = null !== (CC = null === (zC = this.authoritative) || void 0 === zC ? void 0 : zC.dungeons) && void 0 !== CC ? CC : [];
        var wC, bC;
        QC.some((CC => CC.id === this.selected)) || (this.selected = null !== (wC = null === (bC = QC[0]) || void 0 === bC ? void 0 : bC.id) && void 0 !== wC ? wC : null);
        const nC = QC.map((CC => this.entry(CC)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: nC,
          detail: null !== (ZC = nC.find((CC => CC.selected))) && void 0 !== ZC ? ZC : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const SZ = ["mining", "farming", "foraging", "fishing", "combat"],
      pZ = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      PZ = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function GZ() {
      for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
      return zC.map(((CC, zC) => ({
        amount: CC,
        coins: pZ[zC],
        xp: PZ[zC]
      })))
    }
    const RZ = GZ(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      AZ = GZ(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      xZ = GZ(50, 100, 250, 500, 1e3, 2500, 5e3),
      JZ = GZ(25, 50, 100, 250, 500, 1e3),
      IZ = GZ(10, 25, 50, 100, 250, 500, 1e3),
      iZ = GZ(1, 5, 10, 25, 50);

    function vZ(CC, zC) {
      return {
        id: CC,
        category: "fishing",
        item: zC,
        drops: [zC],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IZ
      }
    }
    const eZ = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: AZ
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: xZ
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: xZ
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: JZ
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: JZ
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: AZ
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: RZ
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: RZ
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: RZ
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: xZ
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: AZ
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: AZ
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: AZ
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: xZ
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: xZ
      }, vZ("wheatfish", "Wheatfish"), vZ("darter", "Darter"), vZ("sunset_minnow", "Sunset Minnow"), vZ("root_flounder", "Root Flounder"), vZ("greenfin_loach", "Greenfin Loach"), vZ("red_strongfish", "Red Strongfish"), vZ("green_strongfish", "Green Strongfish"), vZ("boomerang_fish", "Boomerang Fish"), vZ("seahorse", "Seahorse"), vZ("spined_stickleback", "Spined Stickleback"), vZ("moon_strongfish", "Moon Strongfish"), vZ("boulder_bass", "Boulder Bass"), vZ("grass_snapper", "Grass Snapper"), vZ("crystal_wheatfish", "Crystalized Wheatfish", iZ), vZ("moonstone_pupfish", "Moonstone Pupfish", iZ), vZ("reedglass_minnow", "Reedglass Minnow"), vZ("mangrove_herring", "Mangrove Herring"), vZ("mudline_perch", "Mudline Perch"), vZ("coastal_mullet", "Coastal Mullet"), vZ("reef_sardine", "Reef Sardine"), vZ("root_perch", "Root Perch"), vZ("driftwood_catfish", "Driftwood Catfish"), vZ("aether_minnow", "Aether Minnow"), vZ("needlefish", "Tri-Pointed Needlefish"), vZ("threadfin_bream", "Threadfin Bream"), vZ("mudbelly_tilapia", "Mudbelly Tilapia"), vZ("rotslab_eel", "Rotslab Eel"), vZ("polarflash_electron", "Polarflash Electron"), vZ("mireback_carp", "Mireback Carp"), vZ("blackwater_bream", "Blackwater Bream"), vZ("stone_grouper", "Stone Grouper"), vZ("shadeback_ray", "Shadeback Ray"), vZ("glacial_silverfish", "Glacial Silverfish"), vZ("hatchetfish", "Hatchetfish"), vZ("moonlit_boomerang", "Moonlit Boomerang Fish"), vZ("murkborne_ray", "Murkborne Ray"), vZ("bamboo_catfish", "Bamboo Catfish"), vZ("mossback_arapaima", "Mossback Arapaima"), vZ("murk_stingray", "Murk Stingray"), vZ("channel_sawfish", "Channel Sawfish"), vZ("boned_sturgeon", "Boned Sturgeon"), vZ("oarfish", "Oarfish"), vZ("snakehead", "Snakehead", iZ), vZ("eldertide_leviathan", "Eldertide Leviathan", iZ), vZ("pithead", "Pithead"), vZ("electric_eel", "Electric Eel"), vZ("shadow_darter", "Shadow Darter"), vZ("abyss_carp", "Abyss Carp"), vZ("nomai_moray", "Nomai Moray"), vZ("silver_dragonfish", "Silver Dragonfish"), vZ("giant_moray", "Giant Moray"), vZ("coelacanth", "Coelacanth", iZ), vZ("frost_herring", "Frost Herring"), vZ("permafrost_halibut", "Permafrost Halibut"), vZ("glacial_lanternfish", "Glacial Lanternfish"), vZ("frozen_grenadier", "Frozen Grenadier"), vZ("blackfin_icefish", "Blackfin Icefish"), vZ("moonfish", "Moonfish"), vZ("alpha_strongfish", "Alpha Moon Strongfish"), vZ("deep_lanternfish", "Deepwater Lanternfish", iZ), vZ("pearlescent_moonfish", "Pearlescent Moonfish", iZ), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: AZ
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: JZ
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: JZ
      }],
      hZ = (new Map(eZ.map((CC => [CC.id, CC]))), new Map),
      KZ = new Map;
    for (const Mo of eZ) {
      for (const [CC, zC] of Object.entries(null !== (YZ = Mo.blocks) && void 0 !== YZ ? YZ : {})) {
        var YZ;
        hZ.set(CC, {
          collection: Mo,
          amount: zC
        })
      }
      for (const CC of null !== (dZ = Mo.drops) && void 0 !== dZ ? dZ : []) {
        var dZ;
        KZ.set(CC, Mo)
      }
    }

    function mZ(CC, zC) {
      let ZC = 0;
      for (; ZC < CC.tiers.length && zC >= CC.tiers[ZC].amount;) ZC++;
      return ZC
    }
    const HZ = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function EZ(CC) {
      return HZ[CC - 1]
    }
    const lZ = "skyblockCollectionsView";
    class XZ extends WC {
      constructor(CC, zC) {
        let ZC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          QC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : CC => CC;
        super(CC, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = zC, this.locale = ZC, this.itemName = QC, this.counts = null, this.category = "mining", this.selected = eZ[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = CC => {
          this.category = CC, this.selected = this.inCategory(CC)[0].id, this.emit()
        }, this.select = CC => {
          this.selected = CC, this.emit()
        }
      }
      setTranslator(CC, zC, ZC) {
        this.translate = CC, this.locale = zC, this.itemName = ZC, this.emit()
      }
      Ag(CC) {
        if (!this.Sg)
          if ("collOpen" !== CC.kind) {
            (CC.collFull || null === this.counts) && (this.counts = new Map);
            for (const [zC, ZC] of CC.collCounts) this.counts.set(zC, ZC);
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
        var CC;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const zC = this.inCategory(this.category).map((CC => this.collectionView(CC))),
          ZC = eZ.reduce(((CC, zC) => CC + this.tierOf(zC)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: SZ.map((CC => this.categoryView(CC))),
          collections: zC,
          detail: null !== (CC = zC.find((CC => CC.selected))) && void 0 !== CC ? CC : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(ZC)
          })
        }
      }
      categoryView(CC) {
        const zC = this.inCategory(CC),
          ZC = zC.reduce(((CC, zC) => CC + this.tierOf(zC)), 0),
          QC = zC.reduce(((CC, zC) => CC + zC.tiers.length), 0);
        return {
          id: CC,
          label: this.translate(`skyblockGame:${CC}`),
          icon: Gz[CC],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(ZC),
            target: this.number(QC)
          }),
          selected: CC === this.category
        }
      }
      collectionView(CC) {
        var zC, ZC;
        const QC = null !== (zC = this.counts.get(CC.id)) && void 0 !== zC ? zC : 0,
          wC = mZ(CC, QC),
          bC = null !== (ZC = CC.tiers[wC]) && void 0 !== ZC ? ZC : null,
          nC = 0 === wC ? 0 : CC.tiers[wC - 1].amount;
        return {
          id: CC.id,
          name: this.itemName(CC.item),
          icon: CC.item,
          selected: CC.id === this.selected,
          locked: 0 === QC,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(QC)
          }),
          tier: 0 === wC ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(wC),
          percent: null === bC ? 100 : Math.min(100, (QC - nC) / (bC.amount - nC) * 100),
          progress: null === bC ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(QC),
            target: this.number(bC.amount)
          }),
          nextReward: null === bC ? null : this.reward(CC, bC.coins, bC.xp)
        }
      }
      reward(CC, zC, ZC) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(zC),
          xp: this.number(ZC),
          skill: this.translate(`skyblockGame:${CC.category}`)
        })
      }
      tierLabel(CC) {
        return this.translate("skyblockGame:collectionTier", {
          tier: EZ(CC)
        })
      }
      tierOf(CC) {
        var zC;
        return mZ(CC, null !== (zC = this.counts.get(CC.id)) && void 0 !== zC ? zC : 0)
      }
      inCategory(CC) {
        return eZ.filter((zC => zC.category === CC))
      }
      number(CC) {
        return CC.toLocaleString(this.locale)
      }
    }
    const cZ = "skyblockPortalTransitView",
      uZ = "skyblockPortalArrival";
    class rZ {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.bp = CC, this.storage = zC, this.now = ZC, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Ag(CC) {
        const zC = {
          zoneNameKey: CC.transitZoneNameKey,
          variation: CC.transitZoneVariation,
          colour: CC.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(uZ, zC), this.show("departure", zC.zoneNameKey, zC.colour, CC.transitDurationMs, CC.transitDurationMs + 1500, (() => {
          this.storage.removeItem(uZ)
        }))
      }
      resumeArrival(CC) {
        const zC = this.storage.getItem(uZ);
        this.storage.removeItem(uZ), null === zC || zC.variation !== CC || this.now() - zC.departedAt > 3e4 || this.show("arrival", zC.zoneNameKey, zC.colour, 3200, 2e4)
      }
      finishArrival(CC) {
        var zC;
        "arrival" === (null === (zC = this.view) || void 0 === zC ? void 0 : zC.phase) && this.view.token === CC && (this.clearTimer(), this.view = null, this.bp(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(CC, zC, ZC, QC, wC, bC) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: CC,
          zoneNameKey: zC,
          colour: ZC,
          durationMs: QC
        }, this.bp(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.bp(null), null === bC || void 0 === bC || bC()
        }), wC)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const sZ = "skyblockDailyRewardView",
      TZ = "skyblockDailyRewardCoin";
    class aZ {
      constructor(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          oC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.bp = CC, this.isBusy = zC, this.holdQuestPopups = ZC, this.onHeldCoinsChanged = QC, this.onCoinLanded = wC, this.onStarted = bC, this.onFinished = nC, this.onItemLanded = fC, this.now = oC, this.vq = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var CC, zC;
        return null !== (CC = null === (zC = this.playing) || void 0 === zC ? void 0 : zC.view) && void 0 !== CC ? CC : null
      }
      getHeldCoins() {
        var CC, zC;
        let ZC = 0;
        for (const QC of this.vq) ZC += QC.coins;
        return ZC - (null !== (CC = null === (zC = this.playing) || void 0 === zC ? void 0 : zC.released) && void 0 !== CC ? CC : 0)
      }
      Ag(CC) {
        "dailyRewardClaimed" !== CC.kind ? (this.queue.push(CC), this.ZN()) : this.vq.push({
          coins: CC.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      ZN() {
        const CC = this.now();
        if (null === this.playing) return this.releaseUnshown(CC), void this.startNext(CC);
        const zC = this.playing,
          ZC = CC - zC.startedAt,
          QC = zC.view.flyingCoins,
          wC = function(CC, zC) {
            let ZC = 0;
            for (; ZC < zC && DZ(ZC, zC) <= CC;) ZC++;
            return ZC
          }(ZC, QC);
        if (wC !== zC.landed) {
          for (let CC = wC - zC.landed > 2 ? wC - 1 : zC.landed; CC < wC; CC++) this.onCoinLanded(CC, QC);
          zC.landed = wC, zC.released = Math.round(zC.view.coins * wC / QC), this.onHeldCoinsChanged()
        }
        for (; zC.itemsLanded < zC.view.items.length && 2e3 + 160 * zC.itemsLanded + 630 <= ZC;) this.onItemLanded(zC.itemsLanded), zC.itemsLanded++;
        ZC >= zC.view.durationMs && (this.finish(), this.startNext(CC))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.vq = [], this.bp(null)
      }
      startNext(CC) {
        if (0 === this.queue.length || this.isBusy()) return;
        const zC = this.queue.shift();
        this.token++;
        const ZC = {
          token: this.token,
          day: zC.dailyRewardDay,
          coins: zC.dailyRewardCoins,
          items: zC.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: zC.dailyRewardDay === hC ? 24 : 14
        };
        this.playing = {
          view: ZC,
          startedAt: CC,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.bp(ZC), this.onStarted(ZC)
      }
      finish() {
        this.vq.shift(), this.playing = null, this.holdQuestPopups(!1), this.bp(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(CC) {
        if (this.queue.length > 0 || 0 === this.vq.length) return;
        const zC = this.vq.length;
        this.vq = this.vq.filter((zC => CC - zC.receivedAt < 6e4)), this.vq.length !== zC && this.onHeldCoinsChanged()
      }
    }

    function tZ(CC, zC) {
      return 450 + 715 * CC / (zC - 1)
    }

    function DZ(CC, zC) {
      return tZ(CC, zC) + 650
    }
    const jZ = "skyblockMailboxView";
    class yZ {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.bp = CC, this.isBusy = zC, this.onStarted = ZC, this.now = QC, this.waiting = [], this.playing = null, this.token = 0, this.itemName = CC => CC
      }
      getSnapshot() {
        var CC, zC;
        return null !== (CC = null === (zC = this.playing) || void 0 === zC ? void 0 : zC.view) && void 0 !== CC ? CC : null
      }
      setItemName(CC) {
        this.itemName = CC
      }
      Ag(CC) {
        this.waiting.push(...CC.mailLetters), this.ZN()
      }
      ZN() {
        const CC = this.now();
        null !== this.playing && CC - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.bp(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(CC)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.bp(null)
      }
      start(CC) {
        const zC = this.waiting.slice(0, 3);
        this.token++;
        const ZC = {
          token: this.token,
          letters: zC.map((CC => this.toView(CC))),
          more: this.waiting.length - zC.length,
          durationMs: 4500 + 700 * zC.length
        };
        this.waiting = [], this.playing = {
          view: ZC,
          startedAt: CC
        }, this.bp(ZC), this.onStarted(ZC)
      }
      toView(CC) {
        return {
          coins: CC.mailCoins,
          items: CC.mailItems.map((CC => {
            var zC;
            return {
              itemName: CC.mailItemName,
              amount: CC.mailItemAmount,
              label: null !== (zC = CC.mailItemLabel) && void 0 !== zC ? zC : this.itemName(CC.mailItemName)
            }
          })),
          reasonKey: CC.mailReasonKey,
          reasonParams: CC.mailReasonParams
        }
      }
    }
    const LZ = "skyblockQuestGraphView",
      UZ = "skyblockDevQuestJump";

    function BZ(CC) {
      if (0 === CC.length) return "";
      const zC = [`M ${CC[0].x} ${CC[0].y}`];
      for (let QC = 1; QC < CC.length - 1; QC++) {
        const ZC = CC[QC + 1];
        zC.push(`Q ${CC[QC].x} ${CC[QC].y} ${(CC[QC].x+ZC.x)/2} ${(CC[QC].y+ZC.y)/2}`)
      }
      const ZC = CC[CC.length - 1];
      return zC.push(`L ${ZC.x} ${ZC.y}`), zC.join(" ")
    }

    function OZ(CC, zC) {
      return CC < zC ? `${CC}|${zC}` : `${zC}|${CC}`
    }
    class kZ extends WC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(CC, ZC, QC), this.translate = zC, this.requestJump = wC, this.requestArrive = bC, this.storage = nC, this.now = fC, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = CC => {
          CC !== this.hoveredId && (this.hoveredId = CC, this.emit())
        }, this.jump = CC => {
          this.close(), this.requestJump(CC)
        }
      }
      Ag(CC) {
        if (!this.Sg)
          if ("graph" !== CC.kind) {
            if ("jumping" === CC.kind) {
              const zC = {
                questId: CC.graphQuestId,
                variation: CC.graphVariation,
                completes: CC.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(UZ, zC)
            }
          } else {
            const zC = ++this.graphCount;
            ZC.e(118).then((() => ZC(6445))).then((ZC => {
              let {
                default: QC
              } = ZC;
              this.Sg || zC !== this.graphCount || (this.layout = function(CC, zC, ZC) {
                var QC, wC;
                const bC = new CC.graphlib.Graph;
                bC.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), bC.setDefaultEdgeLabel((() => ({})));
                const nC = new Set;
                for (const FC of zC) nC.add(FC.graphQuestId), bC.setNode(FC.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const fC = ZC.filter((CC => nC.has(CC.graphFromId) && nC.has(CC.graphToId) && CC.graphFromId !== CC.graphToId)),
                  oC = new Map;
                for (const FC of [...fC].sort(((CC, zC) => Number("awaits" === CC.graphEdgeKind) - Number("awaits" === zC.graphEdgeKind)))) {
                  const CC = OZ(FC.graphFromId, FC.graphToId);
                  oC.has(CC) || (oC.set(CC, FC), bC.setEdge(FC.graphFromId, FC.graphToId))
                }
                CC.layout(bC);
                const qC = bC.graph();
                return {
                  width: Math.ceil(null !== (QC = qC.width) && void 0 !== QC ? QC : 0),
                  height: Math.ceil(null !== (wC = qC.height) && void 0 !== wC ? wC : 0),
                  nodes: zC.map((CC => {
                    var zC, ZC;
                    const QC = bC.node(CC.graphQuestId);
                    return {
                      node: CC,
                      left: (null !== (zC = QC.x) && void 0 !== zC ? zC : 0) - 95,
                      top: (null !== (ZC = QC.y) && void 0 !== ZC ? ZC : 0) - 26
                    }
                  })),
                  edges: fC.map((CC => {
                    var zC;
                    const ZC = oC.get(OZ(CC.graphFromId, CC.graphToId)),
                      QC = null !== (zC = bC.edge(ZC.graphFromId, ZC.graphToId).points) && void 0 !== zC ? zC : [];
                    return {
                      edge: CC,
                      key: `${CC.graphFromId}|${CC.graphToId}|${CC.graphEdgeKind}`,
                      path: BZ(ZC.graphFromId === CC.graphFromId ? QC : [...QC].reverse())
                    }
                  })),
                  plans: new Map(zC.map((CC => [CC.graphQuestId, new Set([CC.graphQuestId, ...CC.graphPlanIds])])))
                }
              }(QC, CC.graphNodes, CC.graphEdges), this.show())
            })).catch((CC => {
              console.error("The quest graph could not be laid out", CC)
            }))
          }
      }
      resumeJump(CC) {
        const zC = this.storage.getItem(UZ);
        this.storage.removeItem(UZ), null === zC || zC.variation !== CC || this.now() - zC.departedAt > 6e4 || this.requestArrive(zC.questId, zC.completes)
      }
      setTranslator(CC) {
        this.translate = CC, this.emit()
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
        var CC, zC;
        return null !== (CC = null === this.hoveredId || null === (zC = this.layout) || void 0 === zC ? void 0 : zC.plans.get(this.hoveredId)) && void 0 !== CC ? CC : new Set
      }
      buildSnapshot() {
        const CC = this.layout;
        if (null === CC) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const zC = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: CC.width,
          height: CC.height,
          nodes: CC.nodes.map((CC => {
            let {
              node: ZC,
              left: QC,
              top: wC
            } = CC;
            return {
              id: ZC.graphQuestId,
              name: this.translate(ZC.graphNameKey),
              detail: null === ZC.graphGiverName ? ZC.graphZoneId : `${ZC.graphGiverName} \xb7 ${ZC.graphZoneId}`,
              state: ZC.graphState,
              left: QC,
              top: wC,
              inPlan: zC.has(ZC.graphQuestId),
              hovered: ZC.graphQuestId === this.hoveredId
            }
          })),
          edges: CC.edges.map((CC => {
            let {
              edge: ZC,
              key: QC,
              path: wC
            } = CC;
            return {
              key: QC,
              kind: ZC.graphEdgeKind,
              path: wC,
              inPlan: zC.has(ZC.graphFromId) && zC.has(ZC.graphToId)
            }
          })),
          planning: zC.size > 0
        }
      }
    }
    var VZ = ZC(36932);
    const CQ = 250,
      zQ = 2150,
      ZQ = -2.8,
      QQ = 2.2,
      wQ = -27,
      bQ = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      nQ = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      fQ = Math.round(50 + 1e3 * (nQ.delay + nQ.period / 2)),
      oQ = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      qQ = Array.from({
        length: 26
      }, ((CC, zC) => {
        const ZC = 2.39996 * zC,
          QC = .5 + .618034 * zC % 1 * .23,
          wC = zC % 3 !== 2;
        return {
          rune: wC ? oQ[7 * zC % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(ZC)*QC).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(ZC)*QC).toFixed(3)})`,
            "--spin": 40 * (zC % 5 - 2) + "deg",
            "--size": (wC ? 1 + zC % 4 * .2 : .3 + zC % 2 * .15) + "rem",
            "--duration": `${(1.8+7*zC%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*zC%3).toFixed(2)}s`
          }
        }
      }));

    function FQ(CC, zC) {
      return Array.from({
        length: 30 + 3 * CC + (zC ? 10 : 0)
      }, ((CC, zC) => {
        const ZC = zC < 4,
          QC = ZC ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          wC = ZC ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          bC = ZC ? 2.2 : .6 + Math.random(),
          nC = ZC ? .3 : Math.random() < .5 ? .16 : .24,
          fC = ZC ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": QC,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${wC.toFixed(2)}rem`,
          "--length": `${bC.toFixed(2)}rem`,
          "--width": `${nC}rem`,
          "--duration": `${Math.round(fC)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function WQ(CC) {
      let {
        zeta: zC,
        period: ZC
      } = CC;
      const QC = 2 * Math.PI / ZC;
      return {
        w: QC,
        decay: zC * QC / Math.sqrt(1 - zC * zC)
      }
    }
    let NQ = !1;

    function MQ() {
      if (NQ) return;
      NQ = !0;
      const CC = document.createElement("style");
      CC.textContent = function() {
        const CC = WQ(bQ),
          zC = WQ(nQ),
          ZC = zC => Math.exp(-CC.decay * zC) * Math.sin(CC.w * zC),
          QC = ZC(Math.atan(CC.w / CC.decay) / CC.w),
          wC = .25,
          bC = 2.15,
          nC = Math.round(215),
          fC = [];
        for (let oC = 0; oC <= nC; oC++) {
          const CC = oC / nC * bC;
          let qC = Math.sin(Math.min(CC, wC) / wC * Math.PI / 2) ** 2,
            FC = 0,
            WC = 1,
            NC = 1 - .2 * qC,
            MC = 1;
          if (CC >= wC) {
            const nC = CC - wC,
              fC = Math.max(0, nC - .05);
            qC = Math.exp(-fC / .05), FC = ZC(fC + bQ.lead * (1 - Math.exp(-fC / bQ.rush))) / QC;
            const oC = fC - nQ.delay,
              gC = oC <= 0 ? 0 : 1 - Math.exp(-zC.decay * oC) * (Math.cos(zC.w * oC) + zC.decay / zC.w * Math.sin(zC.w * oC)),
              SC = Math.max(0, (CC - 1.77) / (bC - 1.77));
            WC = (1 + (nQ.to - 1) * gC) * (1 + .08 * SC), NC = 1.1 + 1.5 * Math.exp(-nC / .07) + .3 * Math.exp(-(((1e3 * nC - fQ) / 100) ** 2)) + .8 * SC, MC = 1 - SC ** 1.5
          }
          const gC = .15 * qC + ZQ * FC,
            SC = -.1 * qC + QQ * FC,
            pC = 3 * qC + wQ * FC;
          fC.push(`${(oC/nC*100).toFixed(3)}% { opacity: ${MC.toFixed(3)}; transform: translate(${gC.toFixed(3)}rem, ${SC.toFixed(3)}rem) rotate(${pC.toFixed(2)}deg) scale(${WC.toFixed(3)}); filter: brightness(${NC.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${fC.join(" ")} }`
      }(), document.head.append(CC)
    }
    const gQ = "skyblockForgeView",
      SQ = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class pQ extends WC {
      constructor(CC, zC, ZC, QC, wC) {
        super(CC, ZC, QC), this.translate = zC, this.requestForge = wC, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (CC, zC) => {
          var ZC, QC;
          null !== this.forging || (null !== (ZC = this.owned[(0, VZ.l)(zC, CC)]) && void 0 !== ZC ? ZC : 0) <= 0 || (this.selected[CC] = this.selected[CC] === zC ? null : zC, this.status = null, null === (QC = this.onPartSelected) || void 0 === QC || QC.call(this), this.emit())
        }, this.forge = CC => {
          var zC, ZC;
          const QC = this.selectedParts();
          if (null === QC || this.isPending() || !this.open) return;
          const wC = (0, VZ.j)(QC);
          if (null === wC || wC.coalCost > this.coal) return;
          const bC = this.preview(wC),
            nC = null !== (zC = null === (ZC = this.onForgeStarted) || void 0 === ZC ? void 0 : ZC.call(this, bC.tier, bC.named, CC)) && void 0 !== zC ? zC : () => {};
          if (this.dropArrival(), CC) {
            const CC = {
              id: ++this.forgeId,
              preview: bC,
              timers: [],
              stopSounds: nC,
              landed: !1,
              reply: null
            };
            CC.timers.push(setTimeout((() => {
              CC.landed = !0, null !== CC.reply && (this.apply(CC.reply), CC.reply = null, this.emit())
            }), CQ), setTimeout((() => {
              this.finishForge(CC)
            }), zQ)), this.forging = CC
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(QC)
        }, this.snapshot = this.buildSnapshot()
      }
      Ag(CC) {
        var zC;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === CC.forgeMessageKind) return this.dropForge(), this.apply(CC), this.status = null, this.show(), void(null === (zC = this.onOpened) || void 0 === zC || zC.call(this));
        const ZC = this.forging;
        if (null !== ZC && null !== CC.forgeRefusalKey) this.dropForge();
        else if (null !== ZC && !ZC.landed) return void(ZC.reply = CC);
        this.apply(CC), this.emit()
      }
      apply(CC) {
        if (this.owned = CC.forgeOwnedParts, this.coal = CC.forgeCoalOwned, this.keepSelectionOwned("open" === CC.forgeMessageKind), null !== CC.forgeForgedSwordId) {
          var zC;
          const ZC = (0, VZ.j)(CC.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (zC = null === ZC || void 0 === ZC ? void 0 : ZC.displayName) && void 0 !== zC ? zC : ""
            }
          }
        } else null !== CC.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: CC.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(CC) {
        this.translate = CC, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(CC) {
        var zC;
        this.forging = null;
        const ZC = this.selectedParts(),
          QC = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: CC.id,
          sameSword: null !== ZC && (null === (zC = (0, VZ.j)(ZC)) || void 0 === zC ? void 0 : zC.displayName) === CC.preview.name,
          timer: QC
        }, this.emit()
      }
      dropForge() {
        const CC = this.forging;
        if (null !== CC) {
          this.forging = null;
          for (const zC of CC.timers) clearTimeout(zC);
          CC.stopSounds(), null !== CC.reply && this.apply(CC.reply)
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
        var CC, zC, ZC;
        const QC = this.selectedParts(),
          wC = null === QC ? null : (0, VZ.j)(QC),
          bC = null !== (CC = null === (zC = this.forging) || void 0 === zC ? void 0 : zC.preview) && void 0 !== CC ? CC : null === wC ? null : this.preview(wC);
        return {
          enabled: this.received,
          open: this.open,
          slots: VZ.i.map((CC => ({
            kind: CC,
            label: this.translate(SQ[CC]),
            parts: this.partsFor(CC)
          }))),
          coalOwned: this.coal,
          preview: bC,
          unformedSword: VZ.h[null !== (ZC = this.selected.Blade) && void 0 !== ZC ? ZC : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((CC => CC > 0)),
          canForge: null !== bC && !bC.coalShort && !this.isPending(),
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
      preview(CC) {
        return {
          name: CC.displayName,
          lore: CC.lore,
          baseSword: CC.baseSword,
          enchantmentTier: CC.enchantmentTier,
          tier: Number(CC.enchantmentTier.slice(-1)),
          named: CC.named,
          stats: this.stats(CC),
          effects: CC.effects,
          coalCost: CC.coalCost,
          coalShort: null === this.forging && CC.coalCost > this.coal
        }
      }
      partsFor(CC) {
        const zC = [];
        for (const QC of VZ.g) {
          var ZC;
          const wC = (0, VZ.l)(QC, CC),
            bC = null !== (ZC = this.owned[wC]) && void 0 !== ZC ? ZC : 0;
          bC > 0 && zC.push({
            material: QC,
            itemName: wC,
            owned: bC,
            selected: this.selected[CC] === QC,
            placeholder: !1
          })
        }
        if (0 === zC.length) {
          const ZC = VZ.g[0];
          zC.push({
            material: ZC,
            itemName: (0, VZ.l)(ZC, CC),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return zC
      }
      stats(CC) {
        const zC = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${CC.powerMultiplier.toFixed(2)}`,
          better: CC.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${CC.damageMultiplier.toFixed(2)}`,
          better: CC.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/CC.cooldownMultiplier).toFixed(2)}`,
          better: CC.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${CC.knockbackMultiplier.toFixed(2)}`,
          better: CC.knockbackMultiplier > 1
        }];
        return CC.reachBonus > 0 && zC.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${CC.reachBonus.toFixed(1)}`,
          better: !0
        }), CC.damageReduction > 0 && zC.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*CC.damageReduction)}%`,
          better: !0
        }), zC
      }
      selectedParts() {
        const {
          Blade: CC,
          Guard: zC,
          Handle: ZC
        } = this.selected;
        return null === CC || null === zC || null === ZC ? null : {
          blade: CC,
          guard: zC,
          handle: ZC
        }
      }
      keepSelectionOwned(CC) {
        for (const ZC of VZ.i) {
          var zC;
          const QC = this.selected[ZC];
          if (null !== QC && (null !== (zC = this.owned[(0, VZ.l)(QC, ZC)]) && void 0 !== zC ? zC : 0) > 0) continue;
          if (!CC) {
            this.selected[ZC] = null;
            continue
          }
          const wC = [...VZ.g].reverse().find((CC => {
            var zC;
            return (null !== (zC = this.owned[(0, VZ.l)(CC, ZC)]) && void 0 !== zC ? zC : 0) > 0
          }));
          this.selected[ZC] = null !== wC && void 0 !== wC ? wC : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const PQ = "skyblockSmugglerView",
      GQ = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class RQ extends WC {
      constructor(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(CC, ZC, QC), this.translate = zC, this.requestBuy = wC, this.now = bC, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = CC => CC, this.onBought = null, this.buy = CC => {
          const zC = this.deals[CC];
          void 0 !== zC && !this.isPending() && this.open && !this.soldOut.has(CC) && this.canAfford(zC) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, CC))
        }, this.snapshot = this.buildSnapshot()
      }
      Ag(CC) {
        if (this.received = !0, this.day = CC.smugglerDay, this.deals = CC.smugglerDeals, this.rivets = CC.smugglerRivetsOwned, this.crests = CC.smugglerCrestsOwned, this.soldOut = new Set(CC.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + CC.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === CC.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = CC.smugglerBoughtSlot, null !== CC.smugglerBoughtSlot) {
          var zC, ZC;
          const QC = this.deals[CC.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === QC ? "" : this.dealName(QC),
              amount: String(null !== (zC = null === QC || void 0 === QC ? void 0 : QC.smugglerDealAmount) && void 0 !== zC ? zC : 0)
            }
          }, this.boughtCount++, null === (ZC = this.onBought) || void 0 === ZC || ZC.call(this)
        } else null !== CC.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: CC.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(CC, zC, ZC) {
        this.translate = CC, void 0 !== ZC && (this.itemName = ZC), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(CC) {
        if (null !== CC.smugglerDealUniqueName) return CC.smugglerDealUniqueName;
        const zC = GQ[CC.smugglerDealItem];
        return void 0 === zC ? this.itemName(CC.smugglerDealItem) : this.translate(zC)
      }
      canAfford(CC) {
        return CC.smugglerDealRivets <= this.rivets && CC.smugglerDealCrests <= this.crests
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
        const CC = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return CC <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : CC < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(CC)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(CC / 60)),
          minutes: String(CC % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((CC, zC) => ({
            slot: zC,
            itemName: CC.smugglerDealItem,
            displayName: this.dealName(CC),
            enchantmentTier: CC.smugglerDealEnchantmentTier,
            amount: CC.smugglerDealAmount,
            rivets: CC.smugglerDealRivets,
            crests: CC.smugglerDealCrests,
            affordable: this.canAfford(CC),
            soldOut: this.soldOut.has(zC),
            justBought: this.boughtSlot === zC
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
    const AQ = "skyblockPassageView",
      xQ = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function JQ(CC, zC) {
      return CC(xQ[zC])
    }

    function IQ(CC, zC, ZC, QC) {
      const wC = Math.ceil((ZC - QC) / 864e5),
        bC = JQ(CC, zC);
      return wC > 1 ? CC("skyblockGame:passageNextDays", {
        phase: bC,
        days: String(wC)
      }) : CC("skyblockGame:passageNextSoon", {
        phase: bC
      })
    }
    class iQ extends WC {
      constructor(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(CC, ZC, QC), this.translate = zC, this.now = wC, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = CC => CC, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Ag(CC) {
        this.message = CC, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(CC, zC, ZC) {
        this.translate = CC, void 0 !== ZC && (this.itemName = ZC), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(CC) {
        return {
          itemName: CC.passageFish,
          displayName: this.itemName(CC.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(CC.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const CC = this.message;
        return null === CC ? {
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
          phase: CC.passagePhase,
          phaseName: JQ(this.translate, CC.passagePhase),
          visitors: CC.passageVisitors.map((CC => this.describe(CC))),
          resting: this.describe(CC.passageResting),
          nextPhase: CC.passageNextPhase,
          next: IQ(this.translate, CC.passageNextPhase, CC.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var vQ = ZC(38375);
    const eQ = "skyblockKeepersChairView";
    class hQ extends WC {
      constructor(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new vQ.b;
        super(CC, ZC, QC), this.translate = zC, this.requestAim = wC, this.now = bC, this.pacer = nC, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = CC => CC, this.aim = CC => {
          !this.awaitingReply && this.open && this.atChair && CC !== this.favoured && (null === CC || this.islands.some((zC => zC.keepersChairIslandId === CC && zC.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== CC && void 0 !== CC ? CC : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = nC.subscribe((() => {
          this.emit()
        }))
      }
      Ag(CC) {
        var zC, ZC;
        this.received = !0;
        const QC = this.favoured,
          wC = this.atChair;
        var bC;
        return this.islands = CC.keepersChairIslands, this.favoured = CC.keepersChairFavoured, this.passage = null !== (zC = CC.keepersChairPassage) && void 0 !== zC ? zC : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (ZC = CC.keepersChairAtChair) || void 0 === ZC || ZC, "place" === CC.keepersChairMessageKind ? (!wC && this.atChair && "refused" === (null === (bC = this.status) || void 0 === bC ? void 0 : bC.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === CC.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== CC.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: CC.keepersChairRefusalKey,
          island: null
        } : this.favoured !== QC && (this.status = null === this.favoured ? {
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
      receivePassage(CC) {
        this.received && (this.passage = CC, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(CC, zC, ZC) {
        this.translate = CC, void 0 !== ZC && (this.itemName = ZC), this.emit()
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
      islandName(CC) {
        const zC = this.islands.find((zC => zC.keepersChairIslandId === CC));
        return void 0 === zC ? CC : this.translate(zC.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const CC = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          zC = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((CC => {
            const zC = CC.keepersChairFeaturedFish;
            return {
              id: CC.keepersChairIslandId,
              name: this.translate(CC.keepersChairIslandNameKey),
              relit: CC.keepersChairIslandRelit,
              featuredFish: null === zC ? null : {
                itemName: zC,
                displayName: this.itemName(zC)
              },
              favoured: CC.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === CC ? null : {
            tone: CC.tone,
            text: this.translate(CC.key, null === CC.island ? void 0 : {
              island: this.islandName(CC.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === zC ? null : {
            phase: zC.keepersChairPassagePhase,
            phaseName: JQ(this.translate, zC.keepersChairPassagePhase),
            nextPhase: zC.keepersChairPassageNextPhase,
            next: IQ(this.translate, zC.keepersChairPassageNextPhase, zC.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const KQ = "skyblockReachLogView",
      YQ = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      dQ = "Caught Fish",
      mQ = [1, 2, 4];

    function HQ(CC, zC) {
      return CC.map((CC => ({
        ...CC,
        reachLogPageFish: CC.reachLogPageFish.map((CC => ({
          ...CC,
          reachLogFishFresh: zC(CC)
        })))
      })))
    }
    class EQ extends WC {
      constructor(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new vQ.b;
        super(CC, ZC, QC), this.translate = zC, this.requestOpen = wC, this.pacer = bC, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = CC => CC, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = CC => {
          this.pages.some((zC => zC.reachLogIslandId === CC)) && (this.selected = CC, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = bC.subscribe((() => {
          this.emit()
        }))
      }
      Ag(CC) {
        if (this.received = !0, "status" === CC.reachLogMessageKind) return !0 === CC.reachLogNews && this.markNews(), this.serverFresh = CC.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const zC = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== CC.reachLogMessageKind)
          if (this.pageViews = null, this.pages = HQ(CC.reachLogPages, (CC => CC.reachLogFishFresh || this.heldFresh.has(CC.reachLogFishItem))), this.letGoShown = CC.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, zC) this.showPages();
          else {
            for (const CC of this.pages)
              for (const zC of CC.reachLogPageFish) zC.reachLogFishFresh && this.heldFresh.add(zC.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(CC, zC, ZC) {
        this.translate = CC, this.pageViews = null, void 0 !== ZC && (this.itemName = ZC), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = HQ(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var CC, zC, ZC, QC;
        const wC = this.pages.find((CC => CC.reachLogPageFish.some((CC => CC.reachLogFishFresh))));
        if (void 0 !== wC) return wC.reachLogIslandId;
        if (null !== this.selected && this.pages.some((CC => CC.reachLogIslandId === this.selected))) return this.selected;
        return null !== (CC = null !== (zC = null === (ZC = this.pages.filter((CC => CC.reachLogIslandAwake)).at(-1)) || void 0 === ZC ? void 0 : ZC.reachLogIslandId) && void 0 !== zC ? zC : null === (QC = this.pages[0]) || void 0 === QC ? void 0 : QC.reachLogIslandId) && void 0 !== CC ? CC : null
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
        return this.pages.map((CC => {
          var zC;
          return {
            id: CC.reachLogIslandId,
            name: this.translate(CC.reachLogIslandNameKey),
            awake: CC.reachLogIslandAwake,
            gold: CC.reachLogPageGold,
            caught: CC.reachLogPageFish.filter((CC => CC.reachLogFishCaught && !CC.reachLogFishVisitor)).length,
            total: CC.reachLogPageFish.filter((CC => !CC.reachLogFishVisitor)).length,
            fish: CC.reachLogPageFish.map((CC => {
              const zC = CC.reachLogFishBestKg;
              return {
                itemName: CC.reachLogFishItem,
                name: CC.reachLogFishCaught ? this.itemName(CC.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: CC.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / CC.reachLogFishChance))
                }),
                best: CC.reachLogFishCaught ? null === zC ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: zC.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: CC.reachLogFishMarks,
                ribbons: mQ.map((zC => 0 !== (CC.reachLogFishRibbons & zC))),
                glimmer: 0 !== (8 & CC.reachLogFishRibbons),
                halo: 0 !== (32 & CC.reachLogFishRibbons),
                fresh: CC.reachLogFishFresh,
                visitor: CC.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (zC = CC.reachLogPageReturner) && void 0 !== zC ? zC : null)
          }
        }))
      }
      buildReturner(CC) {
        return null === CC ? null : {
          itemName: CC.reachLogReturnerFishItem,
          line: this.translate(CC.reachLogReturnerLineKey, {
            name: this.translate(CC.reachLogReturnerNameKey),
            trinket: this.translate(CC.reachLogReturnerTrinketKey)
          }),
          back: CC.reachLogReturnerBack
        }
      }
      receivePassagePhase(CC) {
        null !== this.passagePhase && this.passagePhase !== CC && (this.pagesCurrent = !1), this.passagePhase = CC
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const lQ = "skyblockLampLightView";
    class XQ {
      constructor(CC, zC, ZC, QC) {
        this.bp = CC, this.translate = zC, this.requestCommand = ZC, this.pacer = QC, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Sg = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = CC => {
          CC ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = CC => {
          this.send(`buy ${CC}`)
        }, this.socket = CC => {
          this.send(`socket ${null!==CC&&void 0!==CC?CC:lC}`)
        }, this.wearTint = CC => {
          this.send(`tint ${null!==CC&&void 0!==CC?CC:lC}`)
        }, this.setSituation = CC => {
          this.situation = CC, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = QC.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = QC.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Ag(CC) {
        if (this.message = CC, null !== CC.lampLightShop && (this.shop = CC.lampLightShop), "open" === CC.lampLightKind && (this.refusalKey = null), "reply" === CC.lampLightKind) {
          var zC;
          const wC = null !== (zC = CC.lampLightReplyTag) && void 0 !== zC ? zC : null,
            bC = null !== wC && wC === this.offTag;
          var ZC, QC;
          if (bC ? this.settleOff() : null !== wC && wC !== this.awaitingTag || this.settleReply(), this.refusalKey = CC.lampLightRefusalKey, null !== CC.lampLightBought && !bC) this.sparkle = {
            id: CC.lampLightBought,
            count: (null !== (ZC = null === (QC = this.sparkle) || void 0 === QC ? void 0 : QC.count) && void 0 !== ZC ? ZC : 0) + 1
          }
        }
        CC.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === CC.lampLightKind && (this.lastGained = CC.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(CC) {
        CC !== this.atChair && (this.atChair = CC, CC && (this.refusalKey = null), this.emit())
      }
      setTranslator(CC, zC) {
        this.translate = CC, this.locale = null !== zC && void 0 !== zC ? zC : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Sg = !0
      }
      send(CC) {
        var zC;
        if (null !== this.awaitingTag || "ready" !== (null === (zC = this.message) || void 0 === zC ? void 0 : zC.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const ZC = this.nextTag();
        this.awaitingTag = ZC, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${CC} ${ZC}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const CC = this.nextTag();
        this.offTag = CC, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${CC}`)
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
        this.Sg || (this.snapshot = this.buildSnapshot(), this.bp(this.snapshot))
      }
      formatLight(CC) {
        return Math.floor(CC).toLocaleString(this.locale)
      }
      formatPercent(CC) {
        const zC = 100 * CC;
        return zC >= 10 ? Math.round(zC).toLocaleString(this.locale) : zC.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(CC, zC) {
        if ("bite" === CC) return this.translate("skyblockGame:lampLightBite", {
          seconds: (zC.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === CC) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(zC.lampLightRareChance)
        });
        if ("notice" === CC) return null === zC.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(zC.lampLightNoticeChance)
        });
        const ZC = "meter" === CC ? zC.lampLightMeterCatches : zC.lampLightBloomCatches;
        return null === ZC ? null : this.translate("meter" === CC ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(ZC))
        })
      }
      oddsLines(CC, zC) {
        const ZC = (CC, zC) => {
            var ZC;
            return null !== (ZC = {
              bite: zC.lampLightBiteMs,
              rare: zC.lampLightRareChance,
              meter: zC.lampLightMeterCatches,
              bloom: zC.lampLightBloomCatches,
              notice: zC.lampLightNoticeChance
            } [CC]) && void 0 !== ZC ? ZC : 0
          },
          QC = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          wC = [];
        for (const bC of ["bite", "rare", "meter", "bloom", "notice"]) {
          const nC = this.formatOdds(bC, CC),
            fC = this.formatOdds(bC, zC);
          if (null === nC || null === fC || "bite" !== bC && "rare" !== bC && nC === fC) continue;
          const oC = ZC(bC, zC) - ZC(bC, CC),
            qC = QC[bC] ? oC < 0 : oC > 0;
          wC.push({
            label: bC,
            before: nC,
            after: fC,
            tone: nC === fC ? "same" : qC ? "better" : "worse"
          })
        }
        return wC
      }
      charmView(CC, zC, ZC) {
        const QC = CC.lampLightCharmId.charAt(0).toUpperCase() + CC.lampLightCharmId.slice(1),
          wC = "bloom" === this.situation;
        return {
          id: CC.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${QC}`),
          effect: this.translate(`skyblockGame:lampLightCharm${QC}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(CC.lampLightCharmCost)
          }),
          owned: CC.lampLightCharmOwned,
          affordable: ZC >= CC.lampLightCharmCost,
          socketed: zC.lampLightSocketed === CC.lampLightCharmId,
          lines: this.oddsLines(wC ? zC.lampLightBareBloom : zC.lampLightBareOpen, wC ? CC.lampLightCharmBloom : CC.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var CC, zC, ZC, QC;
        const wC = this.message,
          bC = "ready" === (null === wC || void 0 === wC ? void 0 : wC.lampLightStatus) ? this.shop : null,
          nC = null !== (CC = null === wC || void 0 === wC ? void 0 : wC.lampLightBalance) && void 0 !== CC ? CC : 0,
          fC = this.atChair,
          oC = "loading" === (null === wC || void 0 === wC ? void 0 : wC.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === wC || void 0 === wC ? void 0 : wC.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          qC = "ready" !== (null === wC || void 0 === wC ? void 0 : wC.lampLightStatus) || fC ? null !== (zC = this.refusalKey) && void 0 !== zC ? zC : oC : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== wC && "locked" !== wC.lampLightStatus,
          status: null !== (ZC = null === wC || void 0 === wC ? void 0 : wC.lampLightStatus) && void 0 !== ZC ? ZC : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(nC)
          }),
          releasing: null !== (QC = null === wC || void 0 === wC ? void 0 : wC.lampLightReleasing) && void 0 !== QC && QC,
          gained: null === wC || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === wC || void 0 === wC ? void 0 : wC.lampLightStatus) && fC && !this.isPending(),
          situation: this.situation,
          shop: null === bC ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: bC.lampLightOddsRod,
              island: this.translate(bC.lampLightIslandNameKey)
            }),
            heldRod: null !== bC.lampLightHeldRod,
            charms: bC.lampLightCharms.map((CC => this.charmView(CC, bC, nC))),
            tints: bC.lampLightTints.map((CC => {
              const zC = CC.lampLightTintId,
                [ZC, QC, wC] = CC.lampLightTintColour;
              return {
                id: zC,
                name: this.translate(`skyblockGame:lampLightTint${zC.charAt(0).toUpperCase()}${zC.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(CC.lampLightTintCost)
                }),
                owned: CC.lampLightTintOwned,
                affordable: nC >= CC.lampLightTintCost,
                wearing: bC.lampLightTint === zC,
                colour: `rgb(${ZC}, ${QC}, ${wC})`
              }
            })),
            wearingIslandColours: null === bC.lampLightTint
          },
          notice: null === qC ? null : this.translate(qC),
          sparkle: this.sparkle
        }
      }
    }
    const cQ = "skyblockMagmawardView";
    class uQ {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.bp = CC, this.now = zC, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = aC.map((() => 0)), this.wornAt = aC.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Ag(CC) {
        var zC, ZC;
        const QC = aC.map(((zC, ZC) => !0 === CC.magmawardPiecesWorn[ZC]));
        if (!QC.includes(!0)) return this.snapshot = null, void this.bp(null);
        const wC = this.now(),
          bC = this.snapshot;
        null === bC && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const nC = CC.magmawardFuelCarried,
          fC = !QC.includes(!1);
        let oC = null !== (zC = null === bC || void 0 === bC ? void 0 : bC.pulse) && void 0 !== zC ? zC : null,
          qC = null !== (ZC = null === bC || void 0 === bC ? void 0 : bC.flare) && void 0 !== ZC ? ZC : null;
        CC.magmawardFuelBurned ? (oC = "burn", qC = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = wC, this.flareAt = wC) : null !== bC && nC > bC.fuel && (oC = "gain", this.pulseToken++, this.pulseAt = wC), fC && null !== bC && !bC.fullSet && (qC = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = wC, this.setLitAt = wC);
        const FC = aC.map(((CC, zC) => (QC[zC] && null !== bC && !bC.pieces[zC].worn && (this.wornTokens[zC]++, this.wornAt[zC] = wC), {
          itemName: CC,
          worn: QC[zC],
          wornToken: this.wornTokens[zC],
          justWorn: QC[zC] && this.isPlaying(this.wornAt[zC], wC)
        })));
        this.snapshot = {
          pieces: FC,
          wornCount: QC.filter(Boolean).length,
          fullSet: fC,
          fuel: nC,
          fuelState: nC <= 0 ? "empty" : nC <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, wC) ? oC : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, wC) ? qC : null,
          flareToken: this.flareToken,
          setLit: fC && this.isPlaying(this.setLitAt, wC),
          setLitToken: this.setLitToken
        }, this.bp(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.bp(null)
      }
      isPlaying(CC, zC) {
        return zC - CC < 1200
      }
    }
    const rQ = "skyblockGlowtideView";
    class sQ {
      constructor(CC) {
        this.bp = CC, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = CC => {
          this.arrow = CC, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Ag(CC) {
        this.bloom = CC.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.bp(null))
      }
      afterRender(CC, zC) {
        const ZC = this.bloom;
        if (null === ZC || null === CC) return;
        const QC = ZC.glowtideBloomX - CC[0],
          bC = ZC.glowtideBloomZ - CC[2],
          nC = Math.hypot(QC, bC),
          fC = this.snapshot,
          oC = null !== fC && void 0 !== fC && fC.inRange ? 1 : 0,
          qC = nC <= 12.5 + oC && CC[1] - ZC.glowtideBloomY <= 10 + oC;
        !qC || null !== fC && void 0 !== fC && fC.inRange || this.inRangeToken++;
        const FC = {
          colour: ZC.glowtideBloomColour,
          inRange: qC,
          distance: Math.round(nC),
          inRangeToken: this.inRangeToken
        };
        (null === fC || FC.colour !== fC.colour || FC.inRange !== fC.inRange || !qC && FC.distance !== fC.distance) && (this.snapshot = FC, this.bp(FC));
        const WC = wC.c.computeShortestRotation(zC, (0, wC.lb)([QC, 0, bC]));
        null === this.arrow || Math.abs(WC - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${WC}rad)`, this.arrowTurn = WC)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.bp(null)
      }
    }
    const TQ = "skyblockGlowMeterView";
    class aQ {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.bp = CC, this.now = zC, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Ag(CC) {
        const zC = this.now(),
          {
            glowMeterFill: ZC,
            glowMeterCapacity: QC
          } = CC,
          wC = ZC >= QC,
          bC = this.snapshot;
        null !== bC && (wC && !bC.full && (this.fullToken++, this.fullAt = zC), bC.full && !wC ? (this.burstToken++, this.burstAt = zC) : ZC > bC.fill && (this.gainToken++, this.gainAt = zC)), this.snapshot = {
          fill: ZC,
          HW: QC,
          ratio: Math.min(1, Math.max(0, ZC / QC)),
          full: wC,
          rares: CC.glowMeterRares,
          ready: wC && this.isPlaying(this.fullAt, zC),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, zC),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, zC),
          gainToken: this.gainToken
        }, this.bp(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.bp(null)
      }
      isPlaying(CC, zC) {
        return zC - CC < 2e3
      }
    }
    const tQ = "skyblockHushWaitView";
    class DQ {
      constructor(CC) {
        this.bp = CC, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Ag(CC) {
        let {
          hushWaitMs: zC,
          hushWaitTotalMs: ZC,
          hushWaitLines: QC
        } = CC;
        if (this.clearTimers(), this.token++, 0 === QC.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (zC <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: QC[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const wC = Math.max(null !== ZC && void 0 !== ZC ? ZC : zC, zC),
          bC = wC - zC,
          nC = CC => wC * CC / QC.length,
          fC = CC => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: wC,
              elapsedMs: bC,
              line: QC[CC],
              lineIndex: CC
            })
          };
        let oC = 0;
        for (; oC + 1 < QC.length && nC(oC + 1) <= bC;) oC++;
        fC(oC);
        for (let qC = oC + 1; qC < QC.length; qC++) this.later(nC(qC) - bC, (() => {
          fC(qC)
        }));
        this.later(zC, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(CC) {
        this.snapshot = CC, this.bp(CC)
      }
      later(CC, zC) {
        this.timers.push(setTimeout(zC, CC))
      }
      clearTimers() {
        for (const CC of this.timers) clearTimeout(CC);
        this.timers = []
      }
    }
    const jQ = "skyblockTideChartsView",
      yQ = 36e5,
      LQ = 864e5;

    function UQ(CC, zC, ZC) {
      const [QC, wC, bC, nC] = CC.tideChartArea, fC = Math.floor(zC), oC = Math.floor(ZC);
      return fC >= QC && fC <= bC && oC >= wC && oC <= nC
    }

    function BQ(CC, zC, ZC) {
      const [QC, wC, bC, nC] = CC.tideChartWater;
      return function(CC, zC, ZC, QC, wC, bC) {
        const nC = 4 - tC(Math.floor(wC) - (CC - ZC), ZC);
        return 5 * tC(Math.floor(bC) - (zC - QC), QC) + nC
      }(QC, wC, bC, nC, zC, ZC)
    }

    function OQ(CC, zC, ZC) {
      const QC = CC.tideCharts;
      for (let wC = 0; wC < QC.length; wC++)
        if (UQ(QC[wC], zC, ZC)) return QC[wC];
      return null
    }

    function kQ(CC, zC, ZC) {
      const QC = Math.max(0, zC - ZC);
      return QC > LQ ? CC("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(QC / LQ))
      }) : QC > yQ ? CC("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(QC / yQ))
      }) : CC("skyblockGame:tideChartsTurnSoon")
    }
    class VQ extends WC {
      constructor(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(CC, ZC, QC), this.translate = zC, this.now = wC, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.CM = CC => {
          this.picked = CC, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Ag(CC) {
        const zC = this.message;
        if (null !== zC)
          for (const QC of CC.tideCharts) {
            var ZC;
            const CC = zC.tideCharts.find((CC => CC.tideChartIsland === QC.tideChartIsland)),
              wC = QC.tideChartLit & ~(null !== (ZC = null === CC || void 0 === CC ? void 0 : CC.tideChartLit) && void 0 !== ZC ? ZC : 0);
            void 0 !== CC && 0 !== wC && (this.pulse = {
              island: QC.tideChartIsland,
              cells: wC,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = CC, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(CC, zC) {
        var ZC;
        const QC = null === this.message || Number.isNaN(CC) ? null : OQ(this.message, CC, zC),
          wC = null !== (ZC = null === QC || void 0 === QC ? void 0 : QC.tideChartIsland) && void 0 !== ZC ? ZC : null,
          bC = null === QC ? -1 : function(CC, zC, ZC) {
            const [QC, wC, bC, nC] = CC.tideChartWater;
            return function(CC, zC, ZC, QC, wC, bC, nC) {
              return ((wC - CC) / (ZC + nC)) ** 2 + ((bC - zC) / (QC + nC)) ** 2 <= 1
            }(QC, wC, bC, nC, zC, ZC, 2) ? BQ(CC, zC, ZC) : -1
          }(QC, CC, zC);
        return (wC !== this.hereIsland || bC !== this.hereCell) && (this.hereIsland = wC, this.hereCell = bC, null !== wC && (this.lastIsland = wC), !0)
      }
      afterRender(CC) {
        if (null === this.message) return;
        this.lastX = null === CC ? Number.NaN : CC[0], this.lastZ = null === CC ? Number.NaN : CC[2];
        const zC = this.locate(this.lastX, this.lastZ),
          ZC = this.expirePulses();
        (zC || ZC || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const CC = this.now();
        return !(!this.open || CC - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = CC, kQ(this.translate, this.message.tideChartTurnsInMs, CC - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(CC, zC) {
        const ZC = null === this.message ? null : OQ(this.message, CC, zC);
        if (null === ZC) return;
        const QC = BQ(ZC, CC, zC);
        0 === (ZC.tideChartPreBlank & 1 << QC) && (this.cast = {
          island: ZC.tideChartIsland,
          cell: QC,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const CC = this.now();
        let zC = !1;
        return 0 !== this.pulse.cells && CC - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, zC = !0), null !== this.cast && CC - this.cast.atMs >= 1500 && (this.cast = null, zC = !0), zC
      }
      setTranslator(CC) {
        this.translate = CC, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(CC, zC) {
        var ZC;
        return null !== (ZC = CC.tideCharts.find((CC => CC.tideChartIsland === zC))) && void 0 !== ZC ? ZC : null
      }
      describe(CC) {
        var zC, ZC, QC;
        const wC = CC.tideChartIsland,
          bC = [];
        for (let MC = 0; MC < 25; MC++) {
          const zC = 1 << MC;
          0 !== (CC.tideChartLit & zC) ? bC.push("lit") : 0 !== (CC.tideChartClear & zC) ? bC.push("clear") : 0 !== (CC.tideChartPreBlank & zC) ? bC.push("shore") : bC.push("water")
        }
        const nC = function(CC) {
            let zC = 0;
            for (let ZC = CC >>> 0; 0 !== ZC; ZC &= ZC - 1) zC++;
            return zC
          }(CC.tideChartLit),
          fC = CC.tideChartInkCount,
          oC = this.translate(CC.tideChartIslandNameKey),
          qC = this.translate("skyblockGame:tideChartsLit", {
            lit: String(nC),
            ink: String(fC)
          }),
          FC = null === CC.tideChartPictureNameKey ? null : this.translate(CC.tideChartPictureNameKey),
          WC = this.hereIsland === wC && -1 !== this.hereCell ? this.hereCell : null,
          NC = [`${oC}: ${qC}.`];
        if (null !== FC && NC.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: FC
          })), null !== WC) {
          const CC = Math.floor(WC / 5) + 1,
            zC = WC % 5 + 1;
          NC.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(CC),
            column: String(zC)
          }))
        }
        return {
          island: wC,
          islandName: oC,
          cells: bC,
          hereCell: WC,
          lit: nC,
          ink: fC,
          litText: qC,
          pictureName: FC,
          gridLabel: NC.join(" "),
          pulseCells: this.pulse.island === wC ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (zC = this.cast) || void 0 === zC ? void 0 : zC.island) === wC ? this.cast.cell : null,
          castToken: null !== (ZC = null === (QC = this.cast) || void 0 === QC ? void 0 : QC.token) && void 0 !== ZC ? ZC : 0
        }
      }
      buildSnapshot() {
        var CC, zC, ZC;
        const QC = this.message;
        if (null === QC || 0 === QC.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const wC = this.findChart(QC, this.hereIsland),
          bC = null !== (CC = null !== (zC = null !== (ZC = this.findChart(QC, this.open ? this.picked : null)) && void 0 !== ZC ? ZC : wC) && void 0 !== zC ? zC : this.findChart(QC, this.lastIsland)) && void 0 !== CC ? CC : QC.tideCharts[0],
          nC = null === wC ? null : this.describe(wC);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: nC,
          card: bC === wC ? nC : this.describe(bC),
          turnsText: kQ(this.translate, QC.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(QC.tideChartBookCount)
          }),
          tabs: QC.tideCharts.map((CC => ({
            island: CC.tideChartIsland,
            name: this.translate(CC.tideChartIslandNameKey),
            selected: CC.tideChartIsland === bC.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Cw = "skyblockRegularsView",
      zw = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Zw = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Qw(CC, zC) {
      return "given" === CC ? zC.given : "owed" === CC ? zC.owed : zC.goal
    }
    class ww extends WC {
      constructor(CC, zC, ZC, QC) {
        super(CC, ZC, QC), this.translate = zC, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = CC => CC, this.openIsland = CC => {
          this.selected = CC, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = CC => {
          this.selected = CC, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Ag(CC) {
        this.message = CC, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const CC = this.openedFromReachLog;
        return this.openedFromReachLog = !1, CC
      }
      setTranslator(CC, zC, ZC) {
        this.translate = CC, void 0 !== ZC && (this.itemName = ZC), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(CC, zC, ZC) {
        return {
          text: this.translate(Qw(CC, zC), ZC),
          given: "given" === CC
        }
      }
      describeRegular(CC, zC) {
        const ZC = this.translate,
          QC = null !== CC.regularKg,
          wC = CC.regularMeetings,
          bC = QC ? 0 === wC ? ZC("skyblockGame:regularsNotMet") : 1 === wC ? ZC("skyblockGame:regularsMeetingsOne") : ZC("skyblockGame:regularsMeetings", {
            count: wC
          }) : "";
        return {
          id: CC.regularId,
          name: ZC(CC.regularNameKey),
          line: ZC(CC.regularLineKey),
          itemName: CC.regularFishItem,
          fishName: this.itemName(CC.regularFishItem),
          tagged: QC,
          size: null === CC.regularKg ? ZC("skyblockGame:regularsNotTagged") : ZC("skyblockGame:regularsSize", {
            kg: CC.regularKg.toFixed(1)
          }),
          meetings: bC,
          chance: ZC("skyblockGame:regularsChance", {
            count: CC.regularOneInCasts
          }),
          resting: CC.regularRestingToday,
          gifts: [{
            text: ZC("skyblockGame:regularsGiftFlare"),
            given: wC >= 3
          }, this.describeGift(CC.regularTintGift, zw, {
            tint: ZC(CC.regularTintNameKey)
          })],
          history: [...CC.regularHistory].reverse().map((CC => {
            const QC = CC.regularMeetingKg.toFixed(1),
              wC = zC - CC.regularMeetingDay;
            return wC <= 0 ? ZC("skyblockGame:regularsToday", {
              kg: QC
            }) : ZC("skyblockGame:regularsDaysAgo", {
              days: wC,
              kg: QC
            })
          }))
        }
      }
      describeIsland(CC, zC) {
        return {
          id: CC.regularsIslandId,
          name: this.translate(CC.regularsIslandNameKey),
          charm: this.describeGift(CC.regularsCharmGift, Zw, {
            charm: this.translate(CC.regularsCharmNameKey)
          }),
          regulars: CC.regularsList.map((CC => this.describeRegular(CC, zC)))
        }
      }
      buildSnapshot() {
        var CC, zC, ZC, QC;
        const wC = this.message;
        if (null === wC) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const bC = wC.regularsIslands.map((CC => this.describeIsland(CC, wC.regularsToday))),
          nC = null !== (CC = null !== (zC = null === (ZC = bC.find((CC => CC.id === this.selected))) || void 0 === ZC ? void 0 : ZC.id) && void 0 !== zC ? zC : null === (QC = bC[0]) || void 0 === QC ? void 0 : QC.id) && void 0 !== CC ? CC : "";
        return {
          enabled: !0,
          open: this.open,
          selected: nC,
          islands: bC
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const bw = "skyblockHiddenWatersView";
    class nw {
      constructor(CC) {
        this.bp = CC, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Ag(CC) {
        this.snapshot = function(CC) {
          const [zC, ZC] = CC.hiddenWatersMapSize, QC = (CC, QC) => ({
            left: 1 - CC / zC,
            top: QC / ZC
          }), wC = new Map;
          for (const [nC, fC] of CC.hiddenWatersGlimpses) {
            var bC;
            const CC = null !== (bC = wC.get(nC)) && void 0 !== bC ? bC : [];
            CC.push(fC), wC.set(nC, CC)
          }
          return {
            found: CC.hiddenWatersFound,
            total: CC.hiddenWatersTotal,
            aspect: ZC / zC,
            pins: CC.hiddenWatersPins.map((CC => {
              let [zC, ZC] = CC;
              return QC(zC, ZC)
            })),
            islands: CC.hiddenWatersIslands.map((CC => {
              let [wC, bC, nC, fC] = CC;
              const {
                left: oC,
                top: qC
              } = QC(nC + 1, bC);
              return {
                left: oC,
                top: qC,
                width: (nC + 1 - wC) / zC,
                height: (fC + 1 - bC) / ZC
              }
            })),
            glimpses: wC
          }
        }(CC), this.bp(this.snapshot)
      }
    }
    const fw = "skyblockDialogueView";
    class ow extends WC {
      constructor(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(CC, ZC, QC), this.translate = zC, this.requestDialogue = wC, this.now = bC, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = CC => {
          this.selection = {
            kind: "quest",
            questId: CC
          }, this.request(), this.show()
        }, this.selectCharacter = CC => {
          this.selection = {
            kind: "character",
            npcId: CC
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Ag(CC) {
        this.received = !0, this.scripts = CC.questDialogueScripts, this.speakers = new Map(CC.questDialogueSpeakers.map((CC => [CC.dialogueSpeakerId, CC]))), this.emit()
      }
      setTranslator(CC) {
        this.translate = CC, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const CC = this.now();
        CC >= this.requestAvailableAt && (this.requestAvailableAt = CC + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var CC;
        const zC = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...zC,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const ZC = this.selection;
        if ("quest" === ZC.kind) {
          const CC = this.scripts.find((CC => CC.dialogueQuestId === ZC.questId));
          return {
            ...zC,
            characters: [],
            questFocus: ZC.questId,
            conversations: CC ? [this.conversation(CC)] : []
          }
        }
        const QC = [];
        for (let bC = this.scripts.length - 1; bC >= 0; bC--) {
          const CC = this.scripts[bC].dialogueLines;
          for (let zC = CC.length - 1; zC >= 0; zC--) QC.includes(CC[zC].dialogueSpeakerId) || QC.push(CC[zC].dialogueSpeakerId)
        }
        const wC = null !== ZC.npcId && QC.includes(ZC.npcId) ? ZC.npcId : null !== (CC = QC[0]) && void 0 !== CC ? CC : null;
        return {
          ...zC,
          characters: QC.map((CC => {
            var zC, ZC;
            return {
              id: CC,
              styling: null !== (zC = null === (ZC = this.speakers.get(CC)) || void 0 === ZC ? void 0 : ZC.dialogueSpeakerStyling) && void 0 !== zC ? zC : CC,
              selected: CC === wC
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((CC => CC.dialogueLines.some((CC => CC.dialogueSpeakerId === wC)))).map((CC => this.conversation(CC))).reverse()
        }
      }
      conversation(CC) {
        let zC = null;
        return {
          questId: CC.dialogueQuestId,
          questName: this.translate(CC.dialogueQuestNameKey),
          completed: CC.dialogueQuestCompleted,
          lines: CC.dialogueLines.map(((CC, ZC) => {
            var QC;
            const wC = CC.dialogueSpeakerId === zC || null === (QC = this.speakers.get(CC.dialogueSpeakerId)) || void 0 === QC ? void 0 : QC.dialogueSpeakerStyling;
            return zC = CC.dialogueSpeakerId, {
              key: ZC,
              display: {
                line: {
                  translationKey: CC.dialogueLineKey,
                  params: this.params(CC.dialogueLineParams)
                },
                speakerName: wC,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(CC) {
        if (void 0 !== CC) return Object.fromEntries(Object.entries(CC).map((CC => {
          let [zC, ZC] = CC;
          return [zC, "string" === typeof ZC ? ZC : this.translate(ZC.translationKey)]
        })))
      }
    }
    var qw = ZC(583),
      Fw = ZC(1211),
      Ww = ZC(77);
    const Nw = "skyblockAutographsView";

    function Mw(CC) {
      const zC = qw.p[CC];
      return {
        label: zC.chatTag.map((CC => CC.str)).join(""),
        icon: zC.icon,
        colour: zC.mainRGB
      }
    }
    class gw extends WC {
      constructor(CC) {
        let zC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = zC, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Ag(CC) {
        this.signatures = CC.autographSignatures, CC.autographOpen ? this.show() : this.emit()
      }
      setTranslator(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = zC, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var CC;
        const zC = null !== (CC = this.signatures) && void 0 !== CC ? CC : [],
          ZC = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          QC = [...zC].sort(((CC, zC) => Number(null !== zC.autographRank) - Number(null !== CC.autographRank) || zC.autographSignedAtMs - CC.autographSignedAtMs)).map((CC => ({
            key: `${CC.autographSignedAtMs}|${CC.autographSignerName}`,
            name: (0, Fw.b)(CC.autographSignerName, !Ww.featureFlags.canSeeRealPlayerNames),
            rank: null === CC.autographRank ? null : Mw(CC.autographRank),
            signedOn: ZC.format(CC.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: QC,
          total: QC.length,
          rankTotal: QC.filter((CC => null !== CC.rank)).length
        }
      }
    }
    const Sw = "skyblockHudView",
      pw = () => {},
      Pw = {
        getItem: () => null,
        setItem: pw,
        removeItem: pw
      };
    class Gw {
      constructor(CC) {
        let {
          translate: zC,
          translateWithIcons: ZC,
          setMenuOpen: QC = pw,
          dismissMenu: wC = () => {
            QC(!1)
          },
          publishSkills: bC = pw,
          publishQuests: nC = pw,
          publishQuestNotification: fC = pw,
          publishDungeons: oC = pw,
          publishCollections: qC = pw,
          publishMap: FC = pw,
          publishHud: WC = pw,
          publishPortalTransit: NC = pw,
          publishDailyReward: gC = pw,
          publishMailbox: SC = pw,
          publishQuestGraph: pC = pw,
          publishForge: PC = pw,
          publishSmuggler: GC = pw,
          publishKeepersChair: RC = pw,
          publishReachLog: AC = pw,
          publishLampLight: xC = pw,
          publishMagmaward: JC = pw,
          publishGlowtide: iC = pw,
          publishGlowMeter: vC = pw,
          publishHushWait: eC = pw,
          publishPassage: hC = pw,
          publishTideCharts: KC = pw,
          publishRegulars: YC = pw,
          publishHiddenWaters: dC = pw,
          publishDialogue: mC = pw,
          publishAutographs: HC = pw,
          isLoadingScreenUp: EC = () => !1,
          onDailyRewardCoinLanded: lC = pw,
          onDailyRewardStarted: XC = pw,
          onDailyRewardFinished: cC = pw,
          onDailyRewardItemLanded: uC = pw,
          onMailboxStarted: rC = pw,
          journeyStorage: sC = Pw,
          requestTracking: TC = pw,
          requestTravel: aC = pw,
          requestDungeonEnter: tC = pw,
          requestQuestJump: DC = pw,
          requestQuestArrive: jC = pw,
          requestForge: yC = pw,
          requestSmuggle: LC = pw,
          requestKeepersChairAim: UC = pw,
          requestReachLogOpen: BC = pw,
          requestLampLight: OC = pw,
          requestDialogue: kC = pw
        } = CC;
        this.navigation = void 0, this.map = void 0, this.compass = new IC, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new vQ.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = CC => CC, this.close = () => {
          for (const CC of this.panels) CC.close()
        }, this.setMenuOpen = QC, this.publishHud = WC, this.portalTransit = new rZ(NC, sC), this.magmaward = new uQ(JC), this.glowtide = new sQ(iC), this.glowMeter = new aQ(vC), this.hushWait = new DQ(eC), this.dailyReward = new aZ(gC, (() => EC() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (CC => {
          this.quests.setNotificationsHeld(CC)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), lC, XC, cC, uC);
        const VC = CC => {
          this.panels.some((CC => CC.isOpen())) || (CC ? wC() : this.setMenuOpen(!1))
        };
        this.skills = new nZ(bC, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), zC, void 0, void 0, VC), this.quests = new WZ(nC, TC, zC, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, VC, fC), this.dungeons = new gZ(oC, zC, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, VC, tC), this.collections = new XZ(qC, zC, (() => {
          this.beforePanelOpen(this.collections)
        }), VC), this.map = new MC(FC, aC, zC, (() => {
          this.beforePanelOpen(this.map)
        }), VC), this.questGraph = new kZ(pC, zC, (() => {
          this.beforePanelOpen(this.questGraph)
        }), VC, DC, jC, sC), this.forge = new pQ(PC, zC, (() => {
          this.beforePanelOpen(this.forge)
        }), VC, yC), this.smuggler = new RQ(GC, zC, (() => {
          this.beforePanelOpen(this.smuggler)
        }), VC, LC), this.lampLight = new XQ(xC, zC, OC, this.commandPacer), this.keepersChair = new hQ(RC, zC, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (CC => {
          this.lampLight.onChairClosed(), VC(CC)
        }), UC, Date.now, this.commandPacer), this.reachLog = new EQ(AC, zC, (() => {
          this.beforePanelOpen(this.reachLog)
        }), VC, BC, this.commandPacer), this.passage = new iQ(hC, zC, (() => {
          this.beforePanelOpen(this.passage)
        }), VC), this.tideCharts = new VQ(KC, zC, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), VC), this.regulars = new ww(YC, zC, (() => {
          this.beforePanelOpen(this.regulars)
        }), (CC => {
          this.regulars.takeReturnToReachLog() && !CC && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), VC(CC)
        })), this.hiddenWaters = new nw(dC), this.dialogue = new ow(mC, zC, (() => {
          this.beforePanelOpen(this.dialogue)
        }), VC, kC), this.autographs = new gw(HC, (() => {
          this.beforePanelOpen(this.autographs)
        }), VC), this.mailbox = new yZ(SC, (() => EC() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), rC), this.quests.translateWithIcons = null !== ZC && void 0 !== ZC ? ZC : null, this.skills.onLevelUp = CC => {
          this.quests.notify(CC)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new wZ(this.map, this.quests, this.compass, zC)
      }
      getHudSnapshot() {
        const CC = this.hudSnapshot,
          zC = this.dailyReward.getHeldCoins();
        return null === CC || zC <= 0 || !("hudPurseCoins" in CC) ? CC : {
          ...CC,
          hudPurseCoins: Math.max(0, CC.hudPurseCoins - zC)
        }
      }
      receiveHud(CC) {
        this.hudSnapshot = CC, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(CC) {
        this.setMenuOpen(!0);
        const zC = CC === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = CC;
        for (const ZC of this.panels) ZC === CC || zC && ZC === this.reachLog || ZC.close();
        this.openingPanel = null
      }
      setTranslator(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : zC => this.resolveItemName(zC, CC);
        this.quests.translateWithIcons = null !== ZC && void 0 !== ZC ? ZC : null, this.navigation.setTranslator(CC, zC), this.lampLight.setTranslator(CC, zC), this.mailbox.setItemName(QC);
        for (const wC of this.panels) wC.setTranslator(CC, zC, QC)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const CC of this.panels) CC.dispose()
      }
    }
    var Rw = ZC(1002),
      Aw = ZC.n(Rw),
      xw = ZC(20),
      Jw = ZC(36483),
      Iw = ZC(3394),
      iw = ZC(1822),
      vw = ZC(1811),
      ew = ZC(34173),
      hw = ZC(1143),
      Kw = ZC(1383),
      Yw = ZC(1056);

    function dw(CC) {
      let {
        controller: zC,
        minimap: ZC,
        children: QC
      } = CC;
      const bC = (0, Kw.f)(Sw, zC.getHudSnapshot()),
        [nC, fC] = (0, vC.useState)(zC.skills.getSnapshot().overallLevel);
      (0, Kw.c)(bZ, (CC => {
        fC(CC.overallLevel)
      }));
      const oC = (0, vC.useRef)(null);
      (0, Kw.c)(TZ, (CC => {
        ! function(CC, zC) {
          if (null === CC || "function" !== typeof CC.animate) return;
          const ZC = zC ? 1.35 : 1.15;
          CC.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${ZC})`
          }, {
            transform: "scale(1)"
          }], {
            duration: zC ? 320 : 160,
            easing: "ease-out"
          }), CC.classList.toggle("Receiving", !zC), zC && (CC.classList.remove("Shine"), CC.offsetWidth, CC.classList.add("Shine"))
        }(oC.current, CC)
      }));
      const {
        t: qC
      } = (0, hw.y)(), {
        isTouchScreen: FC
      } = (0, xw.k)(["isTouchScreen"]), [WC, NC] = (0, vC.useState)(null);
      return (0, Iw.f)(WC, ".SkyblockRightHud"), null !== bC || ZC ? (0, Yw.jsx)(Jw.c, {
        placement: "topRight",
        children: (0, Yw.jsxs)("div", {
          className: Aw()("SkyblockRightHud", {
            TouchScreen: FC
          }),
          children: [ZC, null !== bC && (0, Yw.jsxs)("div", {
            ref: NC,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in bC ? (0, Yw.jsx)("div", {
              className: "SkyblockHudHelp",
              children: bC.hudHelpText
            }) : (0, Yw.jsxs)(Yw.Fragment, {
              children: [(0, Yw.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Yw.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Yw.jsx)("strong", {
                    style: {
                      color: wC.H.cyanUiText
                    },
                    children: qC(bC.hudZoneNameKey)
                  }), null !== nC && (0, Yw.jsx)("span", {
                    style: {
                      color: wC.H.goldUiText
                    },
                    children: qC("skyblockGame:level", {
                      level: (0, ew.e)(nC)
                    })
                  })]
                }), (0, Yw.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: oC,
                  children: [(0, Yw.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Yw.jsx)(iw.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, ew.e)(bC.hudPurseCoins)]
                })]
              }), bC.hudClockText.length > 0 && (0, Yw.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Yw.jsx)(vw.e, {
                  text: bC.hudClockText
                })
              })]
            }), QC, "hudZoneNameKey" in bC && (0, Yw.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function mw(CC) {
      let {
        icon: zC
      } = CC;
      const ZC = (0, vC.useCallback)((CC => {
        null === CC || void 0 === CC || CC.replaceChildren(jz(zC))
      }), [zC]);
      return (0, Yw.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: ZC
      })
    }

    function Hw(CC) {
      let {
        controller: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)();
      return (0, Yw.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: zC.display.mountPlayer,
        title: ZC("skyblockGame:mapYouAreHere"),
        children: (0, Yw.jsx)(mw, {
          icon: "player"
        })
      })
    }
    const Ew = ZC(38381),
      lw = Object.fromEntries(Ew.keys().map((CC => [CC.replace(/^\.\/(.*)\.png$/, "$1"), Ew(CC)])));

    function Xw(CC, zC) {
      var ZC;
      return null !== (ZC = lw[CC]) && void 0 !== ZC ? ZC : lw[zC]
    }

    function uw(CC) {
      let {
        imageKey: zC,
        fallbackImageKey: ZC,
        geometryKey: QC,
        alt: wC,
        className: bC
      } = CC;
      const [nC, fC] = (0, vC.useState)((() => function(CC, zC) {
        return [{
          id: 0,
          imageKey: CC,
          geometryKey: zC,
          phase: "shown"
        }]
      }(zC, QC))), oC = function(CC, zC, ZC) {
        const QC = CC[CC.length - 1];
        if (QC.imageKey === zC && QC.geometryKey === ZC) return CC;
        const wC = {
          id: QC.id + 1,
          imageKey: zC,
          geometryKey: ZC,
          phase: "entering"
        };
        return QC.geometryKey === ZC ? [{
          ...QC,
          phase: "leaving"
        }, wC] : [wC]
      }(nC, zC, QC);
      return oC !== nC && fC(oC), (0, Yw.jsx)(Yw.Fragment, {
        children: oC.map((CC => (0, Yw.jsx)("img", {
          className: Aw()("SkyblockMapTerrainImage", bC, {
            Entering: "entering" === CC.phase,
            Leaving: "leaving" === CC.phase
          }),
          src: Xw(CC.imageKey, ZC),
          alt: "leaving" === CC.phase ? "" : wC,
          onAnimationEnd: () => {
            fC((zC => function(CC, zC) {
              return CC.flatMap((CC => CC.id !== zC ? [CC] : "leaving" === CC.phase ? [] : [{
                ...CC,
                phase: "shown"
              }]))
            }(zC, CC.id)))
          }
        }, CC.id)))
      })
    }
    var rw = ZC(4469),
      sw = ZC(1388);

    function Tw(CC) {
      if ("Tab" !== CC.key) return;
      const zC = Array.from(CC.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        ZC = zC.indexOf(document.activeElement);
      var QC;
      if (CC.shiftKey && ZC <= 0) CC.preventDefault(), null === (QC = zC.at(-1)) || void 0 === QC || QC.focus();
      else if (!CC.shiftKey && (-1 === ZC || ZC === zC.length - 1)) {
        var wC;
        CC.preventDefault(), null === (wC = zC[0]) || void 0 === wC || wC.focus()
      }
    }

    function aw() {
      const CC = (0, vC.useRef)(null);
      return (0, vC.useCallback)((zC => {
        var ZC;
        zC ? (CC.current = document.activeElement, zC.focus()) : null === (ZC = CC.current) || void 0 === ZC || ZC.focus()
      }), [])
    }

    function tw(CC) {
      let {
        percent: zC,
        label: ZC,
        levelUpToken: QC,
        colour: wC
      } = CC;
      return (0, Yw.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": ZC,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": zC,
        "aria-valuetext": ZC,
        children: [(0, Yw.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${zC/100})`
          }
        }), null !== QC && void 0 !== QC && (0, Yw.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": wC
          }
        }, QC)]
      })
    }

    function Dw(CC) {
      let {
        mount: zC
      } = CC;
      return (0, Yw.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: zC,
        hidden: !0,
        children: (0, Yw.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Yw.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Yw.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function jw(CC, zC, ZC, QC) {
      (0, vC.useLayoutEffect)((() => {
        const wC = CC.current;
        if (!ZC || null === zC || void 0 === zC || !zC.local || !wC) return;
        const bC = Array.from(wC.querySelectorAll(".SkyblockMapNode")),
          nC = [...zC.points, ...zC.portals],
          fC = () => {
            const CC = wC.clientWidth,
              ZC = wC.clientHeight,
              fC = bC.map(((wC, bC) => {
                const fC = nC[bC];
                return {
                  id: fC.id,
                  portal: bC >= zC.points.length,
                  x: fC.position[0] * CC / 100,
                  y: fC.position[1] * ZC / 100,
                  width: wC.offsetWidth / QC,
                  height: wC.offsetHeight / QC
                }
              })),
              oC = new Map(nC.map(((CC, zC) => [CC.id, bC[zC]])));
            for (const zC of function(CC, zC, ZC) {
                const QC = [],
                  wC = [...CC].sort(((CC, zC) => Number(zC.portal) - Number(CC.portal) || CC.id.localeCompare(zC.id)));
                for (const bC of wC) {
                  const CC = CC => Math.max(bC.width / 2, Math.min(zC - bC.width / 2, CC)),
                    wC = CC => Math.max(bC.height / 2, Math.min(ZC - bC.height / 2, CC)),
                    nC = [CC(bC.x)],
                    fC = [wC(bC.y)];
                  for (const zC of QC) nC.push(CC(zC.x - (zC.width + bC.width) / 2 - 4), CC(zC.x + (zC.width + bC.width) / 2 + 4)), fC.push(wC(zC.y - (zC.height + bC.height) / 2 - 4), wC(zC.y + (zC.height + bC.height) / 2 + 4));
                  let oC = {
                      ...bC,
                      x: nC[0],
                      y: fC[0]
                    },
                    qC = 1 / 0,
                    FC = 1 / 0;
                  for (const zC of new Set(nC))
                    for (const CC of new Set(fC)) {
                      let ZC = 0;
                      for (const nC of QC) ZC += Math.max(0, (bC.width + nC.width) / 2 + 4 - Math.abs(zC - nC.x)) * Math.max(0, (bC.height + nC.height) / 2 + 4 - Math.abs(CC - nC.y));
                      const wC = (zC - bC.x) ** 2 + (CC - bC.y) ** 2;
                      (ZC < qC || ZC === qC && wC < FC) && (oC = {
                        ...bC,
                        x: zC,
                        y: CC
                      }, qC = ZC, FC = wC)
                    }
                  QC.push(oC)
                }
                return QC
              }(fC, CC, ZC)) {
              const CC = oC.get(zC.id);
              CC.style.left = `${zC.x}px`, CC.style.top = `${zC.y}px`
            }
          };
        fC();
        const oC = new ResizeObserver(fC);
        oC.observe(wC);
        for (const CC of bC) oC.observe(CC);
        return () => {
          oC.disconnect()
        }
      }), [CC, zC, ZC, QC])
    }
    const yw = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Lw = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Uw(CC, zC, ZC) {
      return Math.min(ZC, Math.max(zC, CC))
    }

    function Bw(CC, zC, ZC) {
      const QC = Math.min(1, ZC * zC / CC),
        wC = Math.min(1, CC / (ZC * zC));
      return {
        x0: (1 - QC) / 2,
        y0: (1 - wC) / 2,
        x1: (1 + QC) / 2,
        y1: (1 + wC) / 2
      }
    }

    function Ow(CC, zC, ZC, QC) {
      const wC = zC * (QC - ZC);
      if (wC <= 1) return .5 - zC * (ZC + QC) / 2;
      const bC = .45 * Math.min(1, wC - 1);
      return Uw(CC, 1 - zC * QC - bC, bC - zC * ZC)
    }

    function kw(CC, zC) {
      const ZC = Uw(CC.zoom, 1, 12);
      return {
        zoom: ZC,
        x: Ow(CC.x, ZC, zC.x0, zC.x1),
        y: Ow(CC.y, ZC, zC.y0, zC.y1)
      }
    }

    function Vw(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Lw;
      const bC = Uw(CC.zoom * zC, 1, 12),
        nC = bC / CC.zoom;
      return kw({
        zoom: bC,
        x: ZC - (ZC - CC.x) * nC,
        y: QC - (QC - CC.y) * nC
      }, wC)
    }

    function Cb(CC, zC, ZC, QC) {
      const [wC, bC] = (0, vC.useState)(yw);
      (0, vC.useEffect)((() => {
        bC(yw)
      }), [ZC]), (0, vC.useEffect)((() => {
        const ZC = CC.current;
        if (!zC || !ZC) return;
        const wC = () => Bw(ZC.clientWidth, ZC.clientHeight, QC),
          nC = CC => {
            const zC = ZC.getBoundingClientRect();
            return {
              x: (CC.clientX - zC.left) / zC.width,
              y: (CC.clientY - zC.top) / zC.height
            }
          },
          fC = new Map;
        let oC = {
            x: 0,
            y: 0
          },
          qC = !1,
          FC = 0;
        const WC = CC => {
            CC.preventDefault();
            const zC = CC.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * CC.deltaY : CC.deltaY,
              ZC = nC(CC);
            bC((CC => Vw(CC, Math.exp(.0015 * -zC), ZC.x, ZC.y, wC())))
          },
          NC = CC => {
            "mouse" === CC.pointerType && 0 !== CC.button || (fC.set(CC.pointerId, nC(CC)), 1 === fC.size && (oC = {
              x: CC.clientX,
              y: CC.clientY
            }, qC = !1), FC = 0)
          },
          MC = CC => {
            const zC = fC.get(CC.pointerId);
            if (!zC) return;
            const QC = nC(CC);
            if (fC.set(CC.pointerId, QC), 2 === fC.size) {
              const [CC, zC] = [...fC.values()], ZC = Math.hypot(CC.x - zC.x, CC.y - zC.y);
              if (FC > 0) {
                const QC = ZC / FC;
                bC((ZC => Vw(ZC, QC, (CC.x + zC.x) / 2, (CC.y + zC.y) / 2, wC())))
              }
              return FC = ZC, void(qC = !0)
            }!qC && Math.hypot(CC.clientX - oC.x, CC.clientY - oC.y) < 4 || (qC || (qC = !0, ZC.setPointerCapture(CC.pointerId)), bC((CC => function(CC, zC, ZC) {
              let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Lw;
              return kw({
                zoom: CC.zoom,
                x: CC.x + zC,
                y: CC.y + ZC
              }, QC)
            }(CC, QC.x - zC.x, QC.y - zC.y, wC()))))
          },
          gC = CC => {
            fC.delete(CC.pointerId), FC = 0
          },
          SC = CC => {
            qC && (CC.stopPropagation(), CC.preventDefault(), qC = !1)
          },
          pC = new ResizeObserver((() => {
            bC((CC => kw(CC, wC())))
          }));
        return pC.observe(ZC), ZC.addEventListener("wheel", WC, {
          passive: !1
        }), ZC.addEventListener("pointerdown", NC), ZC.addEventListener("pointermove", MC), ZC.addEventListener("pointerup", gC), ZC.addEventListener("pointercancel", gC), ZC.addEventListener("click", SC, !0), () => {
          pC.disconnect(), ZC.removeEventListener("wheel", WC), ZC.removeEventListener("pointerdown", NC), ZC.removeEventListener("pointermove", MC), ZC.removeEventListener("pointerup", gC), ZC.removeEventListener("pointercancel", gC), ZC.removeEventListener("click", SC, !0)
        }
      }), [CC, zC, ZC, QC]);
      return {
        view: wC,
        zoomBy: zC => {
          const ZC = CC.current;
          ZC && bC((CC => Vw(CC, zC, .5, .5, Bw(ZC.clientWidth, ZC.clientHeight, QC))))
        }
      }
    }

    function zb(CC) {
      var zC, ZC, QC, wC;
      let {
        controller: bC,
        navigation: nC
      } = CC;
      const fC = (0, Kw.f)(NC, bC.getSnapshot()),
        {
          t: oC
        } = (0, hw.y)(),
        qC = aw(),
        FC = fC.presentation,
        WC = (0, vC.useRef)(null),
        MC = (0, vC.useRef)(null),
        gC = Boolean(fC.open && (null === FC || void 0 === FC ? void 0 : FC.local) && FC.background),
        SC = Cb(WC, gC, `${fC.open}|${fC.tab}|${null===FC||void 0===FC||null===(zC=FC.background)||void 0===zC?void 0:zC.geometryKey}`, null !== (ZC = null === FC || void 0 === FC || null === (QC = FC.background) || void 0 === QC ? void 0 : QC.ratio) && void 0 !== ZC ? ZC : 2);
      if (jw(MC, FC, fC.open, SC.view.zoom), !FC || !fC.open) return null;
      const pC = FC.local ? FC.background : null,
        PC = {
          "--map-ratio": String(null !== (wC = null === pC || void 0 === pC ? void 0 : pC.ratio) && void 0 !== wC ? wC : 2),
          backgroundColor: null === pC || void 0 === pC ? void 0 : pC.colour
        },
        GC = {
          "--map-zoom": String(SC.view.zoom),
          transform: `translate(${100*SC.view.x}%, ${100*SC.view.y}%) scale(${SC.view.zoom})`
        };
      return (0, Yw.jsx)(rw.c, {
        show: fC.open,
        close: bC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: qC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yw.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockMapTitle",
                children: oC("skyblockGame:map")
              }), FC.minimap && (0, Yw.jsx)("p", {
                children: FC.minimap.caption
              })]
            }), (0, Yw.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((CC => (0, Yw.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": CC === fC.tab ? "true" : void 0,
                className: Aw()({
                  Selected: CC === fC.tab
                }),
                "aria-pressed": CC === fC.tab,
                onClick: () => {
                  bC.selectTab(CC)
                },
                children: oC("local" === CC ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, CC)))
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              onClick: bC.dismiss
            })]
          }), (0, Yw.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Yw.jsxs)("div", {
              ref: WC,
              className: Aw()("SkyblockMapCanvas", {
                Local: FC.local,
                Overview: !FC.local,
                Zoomed: SC.view.zoom > 1
              }),
              style: PC,
              children: [(0, Yw.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: gC ? GC : void 0,
                children: (0, Yw.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: MC,
                  children: [pC && (0, Yw.jsx)(uw, {
                    className: "SkyblockMapTerrain",
                    imageKey: pC.imageKey,
                    fallbackImageKey: pC.fallbackImageKey,
                    geometryKey: pC.geometryKey,
                    alt: pC.label
                  }), FC.local && (0, Yw.jsx)(Dw, {
                    mount: nC.display.mountMapSearchArea
                  }), !FC.local && (0, Yw.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: FC.connections.map((CC => (0, Yw.jsx)("line", {
                      className: Aw()({
                        Explored: CC.explored
                      }),
                      x1: CC.start[0],
                      y1: CC.start[1],
                      x2: CC.end[0],
                      y2: CC.end[1]
                    }, CC.id)))
                  }), FC.points.map((CC => {
                    const zC = !FC.local && CC.thumbnail ? lw[CC.thumbnail] : void 0;
                    return (0, Yw.jsxs)("div", {
                      className: Aw()("SkyblockMapNode", {
                        Current: CC.current
                      }),
                      style: {
                        left: `${CC.position[0]}%`,
                        top: `${CC.position[1]}%`
                      },
                      children: [(0, Yw.jsxs)(sw.g, {
                        className: Aw()("SkyblockMapPin", {
                          Unknown: !CC.visited,
                          Current: CC.current
                        }),
                        disabled: fC.pending,
                        onClick: () => {
                          bC.travel(CC.travelKind, CC.travelId)
                        },
                        children: [zC && (0, Yw.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: zC,
                          alt: ""
                        }), !zC && (0, Yw.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Yw.jsx)(mw, {
                            icon: CC.icon
                          })
                        }), (0, Yw.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: CC.name
                        })]
                      }), CC.current && (0, Yw.jsx)("span", {
                        className: Aw()("SkyblockMapHereBadge", {
                          Above: CC.position[1] > 50
                        }),
                        children: oC("skyblockGame:mapYouAreHere")
                      })]
                    }, CC.id)
                  })), FC.portals.map((CC => (0, Yw.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${CC.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${CC.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Yw.jsxs)(sw.g, {
                      className: "SkyblockMapPin",
                      disabled: fC.pending,
                      onClick: () => {
                        bC.travel(CC.travelKind, CC.travelId)
                      },
                      children: [(0, Yw.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: CC.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Yw.jsx)(mw, {
                          icon: CC.icon
                        })
                      }), (0, Yw.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: CC.name
                      })]
                    })
                  }, CC.id))), FC.local && (0, Yw.jsx)(Hw, {
                    controller: nC
                  })]
                })
              }), gC && (0, Yw.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Yw.jsx)("button", {
                  type: "button",
                  "aria-label": oC("skyblockGame:mapZoomIn"),
                  disabled: SC.view.zoom >= 12,
                  onClick: () => {
                    SC.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Yw.jsx)("button", {
                  type: "button",
                  "aria-label": oC("skyblockGame:mapZoomOut"),
                  disabled: SC.view.zoom <= 1,
                  onClick: () => {
                    SC.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Yw.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: fC.feedback
              })]
            })
          }), (0, Yw.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [FC.progress && (0, Yw.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Yw.jsx)("span", {
                children: FC.progress
              }), (0, Yw.jsx)(tw, {
                percent: FC.percent,
                label: FC.progress
              })]
            }), FC.noLandmarks && (0, Yw.jsx)("span", {
              children: oC("skyblockGame:mapNoLandmarks")
            }), FC.canTravel && (0, Yw.jsx)("span", {
              className: "SkyblockMapHint",
              children: oC("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Zb(CC) {
      let {
        view: zC,
        controller: ZC,
        navigation: QC
      } = CC;
      const {
        t: wC
      } = (0, hw.y)(), {
        isTouchScreen: bC
      } = (0, xw.k)(["isTouchScreen"]);
      return (0, Yw.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": wC("skyblockGame:mapLocal"),
        children: [bC && (0, Yw.jsx)(sw.g, {
          className: "SkyblockMinimapOpen",
          onClick: ZC.showLocal,
          children: wC("skyblockGame:map")
        }), (0, Yw.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: zC.colour
          },
          children: [(0, Yw.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: QC.display.mountTerrain,
            style: {
              width: zC.width,
              height: zC.height
            },
            children: [(0, Yw.jsx)(uw, {
              imageKey: zC.imageKey,
              fallbackImageKey: zC.fallbackImageKey,
              geometryKey: zC.geometryKey,
              alt: zC.label
            }), (0, Yw.jsx)(Dw, {
              mount: QC.display.mountMinimapSearchArea
            }), zC.markers.map((CC => (0, Yw.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${CC.position[0]}%`,
                top: `${CC.position[1]}%`,
                color: CC.colour
              },
              title: CC.name,
              children: (0, Yw.jsx)(mw, {
                icon: CC.icon
              })
            }, CC.id)))]
          }), (0, Yw.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: wC("skyblockGame:mapYouAreHere"),
            children: (0, Yw.jsx)(mw, {
              icon: "player"
            })
          })]
        }), (0, Yw.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: zC.caption
        })]
      })
    }

    function Qb(CC) {
      let {
        controller: zC
      } = CC;
      return (0, Yw.jsxs)("div", {
        className: "SkyblockCompass",
        ref: zC.display.mountCompass,
        children: [(0, Yw.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Yw.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Yw.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function wb(CC) {
      let {
        controller: zC,
        surface: ZC
      } = CC;
      const {
        t: QC
      } = (0, hw.y)(), wC = (0, Kw.f)(bZ, zC.getSnapshot()), bC = aw();
      return wC.enabled ? (0, Yw.jsxs)(Yw.Fragment, {
        children: ["hud" === ZC && (0, Yw.jsx)(Jw.c, {
          placement: "statBars",
          children: wC.hud && (0, Yw.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": wC.hud.colour
            },
            children: [(0, Yw.jsx)(tw, {
              percent: wC.hud.skill.percent,
              label: wC.hud.skill.xp,
              levelUpToken: wC.hud.levelUpToken,
              colour: wC.hud.colour
            }), (0, Yw.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Yw.jsxs)("span", {
                children: [wC.hud.skill.label, " \xb7 ", wC.hud.skill.level]
              }), (0, Yw.jsx)("span", {
                children: wC.hud.gain
              })]
            })]
          })
        }), "hud" === ZC && (0, Yw.jsx)(Jw.c, {
          children: wC.hud && (0, Yw.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Yw.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Yw.jsx)("strong", {
                children: wC.hud.skill.label
              }), (0, Yw.jsx)("span", {
                children: wC.hud.gain
              })]
            }), (0, Yw.jsx)(tw, {
              percent: wC.hud.skill.percent,
              label: wC.hud.skill.xp,
              levelUpToken: wC.hud.levelUpToken,
              colour: wC.hud.colour
            }), (0, Yw.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Yw.jsx)("span", {
                children: wC.hud.skill.level
              }), (0, Yw.jsx)("span", {
                children: wC.hud.skill.xp
              })]
            })]
          })
        }), "menu" === ZC && (0, Yw.jsx)(rw.c, {
          show: wC.open,
          close: zC.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Yw.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: bC,
            onKeyDown: Tw,
            children: [(0, Yw.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Yw.jsxs)("div", {
                children: [(0, Yw.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: QC("skyblockGame:skills")
                }), (0, Yw.jsx)("p", {
                  children: QC("skyblockGame:skillsIntro")
                })]
              }), (0, Yw.jsx)(sw.k, {
                padIgnore: !0,
                onClick: zC.dismiss
              })]
            }), (0, Yw.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Yw.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: wC.skills.map((CC => (0, Yw.jsxs)(sw.g, {
                  className: Aw()("SkyblockSkillCard", {
                    Selected: CC.selected
                  }),
                  ariaPressed: CC.selected,
                  onClick: () => {
                    zC.select(CC.id)
                  },
                  children: [(0, Yw.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Yw.jsx)(iw.e, {
                      itemName: CC.icon,
                      amount: 0
                    })
                  }), (0, Yw.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Yw.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Yw.jsx)("strong", {
                        children: CC.label
                      }), (0, Yw.jsx)("span", {
                        children: CC.level
                      })]
                    }), (0, Yw.jsx)(tw, {
                      percent: CC.percent,
                      label: `${CC.label}: ${CC.xp}`
                    }), (0, Yw.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: CC.xp
                    })]
                  })]
                }, CC.id)))
              }), wC.detail && (0, Yw.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Yw.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Yw.jsx)(iw.e, {
                    itemName: wC.detail.icon,
                    amount: 0
                  })
                }), (0, Yw.jsx)("h3", {
                  children: wC.detail.label
                }), (0, Yw.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: wC.detail.level
                }), (0, Yw.jsx)("p", {
                  children: wC.detail.description
                }), (0, Yw.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Yw.jsx)("strong", {
                    children: QC("skyblockGame:currentBenefit")
                  }), (0, Yw.jsx)("span", {
                    children: wC.detail.benefit
                  })]
                }), (0, Yw.jsx)(tw, {
                  percent: wC.detail.percent,
                  label: wC.detail.xp
                }), (0, Yw.jsx)("p", {
                  children: wC.detail.xp
                }), (0, Yw.jsx)("h4", {
                  children: QC("skyblockGame:earnXp")
                }), (0, Yw.jsx)("ul", {
                  children: wC.detail.sources.map((CC => (0, Yw.jsx)("li", {
                    children: CC
                  }, CC)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var bb = ZC(1321),
      nb = ZC(4769),
      fb = ZC(310);

    function ob(CC) {
      let {
        item: zC
      } = CC;
      return (0, Yw.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Yw.jsx)(iw.e, {
          itemName: zC,
          amount: 0
        })
      })
    }

    function qb(CC) {
      let {
        name: zC,
        percent: ZC,
        progress: QC
      } = CC;
      return (0, Yw.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Yw.jsx)(tw, {
          percent: ZC,
          label: `${(0,fb.rb)(zC)}: ${QC}`
        }), (0, Yw.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: QC
        })]
      })
    }

    function Fb(CC) {
      let {
        subquests: zC,
        showDescriptions: ZC = !1
      } = CC;
      return (0, Yw.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: zC.map((CC => {
          const zC = ZC && "completed" === CC.status,
            QC = (0, Yw.jsxs)("li", {
              className: Aw()("SkyblockQuestStep", CC.status, {
                JustFinished: CC.justFinished,
                JustUnlocked: CC.justUnlocked
              }),
              tabIndex: zC ? 0 : void 0,
              children: [null !== CC.iconItem && (0, Yw.jsx)(ob, {
                item: CC.iconItem
              }), null === CC.iconItem && (0, Yw.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === CC.status ? "\u2713" : "skipped" === CC.status ? "\u2212" : "\u25cb"
              }), (0, Yw.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Yw.jsx)("strong", {
                  children: (0, Yw.jsx)(nb.e, {
                    text: CC.name
                  })
                }), ZC && !zC && (0, Yw.jsx)("span", {
                  children: (0, Yw.jsx)(nb.e, {
                    text: CC.description
                  })
                }), null !== CC.barPercent && (0, Yw.jsx)(qb, {
                  name: CC.name,
                  percent: CC.barPercent,
                  progress: CC.progress
                }), null === CC.barPercent && !zC && (0, Yw.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: CC.statusLabel
                })]
              })]
            }, CC.id);
          return zC ? (0, Yw.jsx)(bb.d, {
            delayShow: 200,
            tooltipInner: (0, Yw.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Yw.jsx)("span", {
                children: (0, Yw.jsx)(nb.e, {
                  text: CC.description
                })
              }), (0, Yw.jsx)("strong", {
                children: CC.statusLabel
              })]
            }),
            children: QC
          }, CC.id) : QC
        }))
      })
    }

    function Wb(CC) {
      let {
        quest: zC,
        select: ZC
      } = CC;
      const {
        t: QC
      } = (0, hw.y)(), wC = zC.focusStep;
      return (0, Yw.jsxs)(sw.g, {
        className: Aw()("SkyblockQuestCard", {
          Selected: zC.selected,
          Tracked: zC.tracked
        }),
        onClick: () => {
          ZC(zC.id)
        },
        children: [(0, Yw.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Yw.jsx)("strong", {
            children: (0, Yw.jsx)(nb.e, {
              text: zC.name
            })
          }), zC.tracked && (0, Yw.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: QC("skyblockGame:currentQuest")
          })]
        }), wC && (0, Yw.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== wC.iconItem && (0, Yw.jsx)(ob, {
            item: wC.iconItem
          }), (0, Yw.jsx)(qb, {
            name: wC.name,
            percent: wC.barPercent,
            progress: wC.progress
          })]
        }), (0, Yw.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: zC.progress
        })]
      })
    }

    function Nb(CC) {
      let {
        controller: zC,
        surface: ZC
      } = CC;
      const QC = (0, Kw.f)(qZ, zC.getSnapshot()),
        {
          t: wC
        } = (0, hw.y)(),
        bC = aw();
      return QC.enabled ? (0, Yw.jsxs)(Yw.Fragment, {
        children: ["hud" === ZC && (0, Yw.jsx)(Yw.Fragment, {
          children: QC.tracked && (0, Yw.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: oZ,
            children: (0, Yw.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [QC.trackedStepPulse > 0 && (0, Yw.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, QC.trackedStepPulse), (0, Yw.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: wC("skyblockGame:currentQuest")
              }), (0, Yw.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Yw.jsx)("strong", {
                  children: (0, Yw.jsx)(nb.e, {
                    text: QC.tracked.name
                  })
                }), null !== QC.tracked.clock && (0, Yw.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: QC.tracked.clock
                })]
              }), (0, Yw.jsx)(Fb, {
                subquests: QC.tracked.subquests
              })]
            })
          })
        }), "menu" === ZC && (0, Yw.jsx)(rw.c, {
          show: QC.open,
          close: zC.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Yw.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: bC,
            onKeyDown: Tw,
            children: [(0, Yw.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Yw.jsx)("div", {
                children: (0, Yw.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: wC("skyblockGame:quests")
                })
              }), (0, Yw.jsx)(sw.k, {
                padIgnore: !0,
                onClick: zC.dismiss
              })]
            }), (0, Yw.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Yw.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Yw.jsx)("h3", {
                  children: wC("skyblockGame:current")
                }), 0 === QC.active.length && (0, Yw.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: wC("skyblockGame:noActiveQuests")
                }), QC.active.map((CC => (0, Yw.jsx)(Wb, {
                  quest: CC,
                  select: zC.select
                }, CC.id))), (0, Yw.jsx)("h3", {
                  children: (0, Yw.jsxs)("button", {
                    type: "button",
                    className: Aw()("SkyblockQuestSectionToggle", {
                      Expanded: QC.completedExpanded
                    }),
                    "aria-expanded": QC.completedExpanded,
                    onClick: zC.toggleCompleted,
                    children: [(0, Yw.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), wC("skyblockGame:completed"), (0, Yw.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: QC.completed.length
                    })]
                  })
                }), QC.completedExpanded && 0 === QC.completed.length && (0, Yw.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: wC("skyblockGame:noCompletedQuests")
                }), QC.completedExpanded && QC.completed.map((CC => (0, Yw.jsx)(Wb, {
                  quest: CC,
                  select: zC.select
                }, CC.id)))]
              }), QC.detail && (0, Yw.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [QC.detail.completed && (0, Yw.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: wC("skyblockGame:completedQuest")
                }), (0, Yw.jsx)("h3", {
                  children: (0, Yw.jsx)(nb.e, {
                    text: QC.detail.name
                  })
                }), (0, Yw.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Yw.jsx)(nb.e, {
                    text: QC.detail.description
                  })
                }), (0, Yw.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [QC.detail.progress, null !== QC.detail.clock && (0, Yw.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: QC.detail.clock
                  })]
                }), (0, Yw.jsx)(Fb, {
                  subquests: QC.detail.subquests,
                  showDescriptions: !0
                }), QC.detail.tracked && (0, Yw.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: QC.detail.trackLabel
                }), !QC.detail.completed && !QC.detail.tracked && (0, Yw.jsx)(sw.o, {
                  onClick: zC.trackSelected,
                  disabled: !QC.detail.canTrack,
                  children: QC.detail.trackLabel
                }), QC.detail.canViewDialogue && (0, Yw.jsx)(sw.g, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: zC.viewDialogue,
                  children: wC("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Mb = ZC(1013),
      gb = ZC(2604);

    function Sb(CC, zC, ZC, QC, wC) {
      const bC = CC => "linear" === wC ? CC : {
          nb: wC,
          point: CC
        },
        nC = {};
      for (const [fC, oC] of QC)
        for (const [zC, ZC] of Object.entries(CC(fC, oC, bC))) nC[zC] ??= {
          timeline: []
        }, nC[zC].timeline.push(ZC);
      return {
        Cb: zC,
        loop: ZC,
        Zb: nC
      }
    }
    const pb = .547,
      Pb = .022,
      Gb = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Rb = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Ab(CC, zC, ZC) {
      const {
        drop: QC = 0,
        shift: wC = 0,
        torso: bC = 0,
        nod: nC = 0,
        tilt: fC = 0,
        legs: oC = [0, 0],
        arms: qC = 0,
        spread: FC = 0
      } = zC, WC = pb * Math.cos(bC) - Pb * Math.sin(bC), NC = pb * Math.sin(bC) + Pb * Math.cos(bC), MC = ZC([0, -QC, wC]);
      return {
        LowerBody: {
          timeFraction: CC,
          position: MC,
          rotation: ZC([0, 0, 0])
        },
        UpperBody: {
          timeFraction: CC,
          position: MC,
          rotation: ZC([bC, 0, fC])
        },
        HeadMesh: {
          timeFraction: CC,
          position: ZC([0, WC - pb - QC, NC - Pb + wC]),
          rotation: ZC([bC + nC, 0, fC])
        },
        LegLeftMesh: {
          timeFraction: CC,
          rotation: ZC([oC[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: CC,
          rotation: ZC([oC[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: CC,
          rotation: ZC([qC, 0, FC])
        },
        ArmRightMesh: {
          timeFraction: CC,
          rotation: ZC([qC, 0, -FC])
        }
      }
    }

    function xb(CC, zC, ZC) {
      return Sb(Ab, CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function Jb(CC) {
      return "number" === typeof CC ? [CC, CC] : CC
    }

    function Ib(CC, zC, ZC) {
      const {
        rise: QC = 0,
        shift: wC = 0,
        torso: bC = 0,
        twist: nC = 0,
        tilt: fC = 0,
        nod: oC = 0,
        cock: qC = 0,
        arms: FC = 0,
        spread: WC = 0
      } = zC, [NC, MC] = Jb(FC), [gC, SC] = Jb(WC);
      return {
        TorsoNode: {
          timeFraction: CC,
          position: ZC([0, QC, wC]),
          rotation: ZC([bC, nC, fC])
        },
        HeadMesh: {
          timeFraction: CC,
          rotation: ZC([oC, 0, qC])
        },
        ArmLeftMesh: {
          timeFraction: CC,
          rotation: ZC([NC, 0, gC])
        },
        ArmRightMesh: {
          timeFraction: CC,
          rotation: ZC([MC, 0, -SC])
        }
      }
    }
    const ib = [1.0625, -1, 0];

    function vb(CC) {
      return "number" === typeof CC ? [CC, CC] : CC
    }

    function eb(CC, zC, ZC) {
      const {
        drop: QC = 0,
        shift: wC = 0,
        torso: bC = 0,
        tilt: nC = 0,
        nod: fC = 0,
        cock: oC = 0,
        legs: qC = [0, 0],
        arms: FC = 0,
        spread: WC = 0
      } = zC, [NC, MC] = vb(FC), [gC, SC] = vb(WC), pC = -bC, PC = -nC, [GC, RC, AC] = function(CC, zC) {
        const [ZC, QC, wC] = [-ib[0], ib[1], -ib[2]], bC = ZC * Math.cos(zC) - QC * Math.sin(zC), nC = ZC * Math.sin(zC) + QC * Math.cos(zC);
        return [bC - ZC, -(nC * Math.cos(CC) - wC * Math.sin(CC) - QC), nC * Math.sin(CC) + wC * Math.cos(CC) - wC]
      }(pC, PC), xC = ZC([0, -QC, wC]);
      return {
        TorsoNode: {
          timeFraction: CC,
          position: ZC([GC, RC - QC, AC + wC]),
          rotation: ZC([pC, 0, PC])
        },
        HeadMesh: {
          timeFraction: CC,
          rotation: ZC([-fC, 0, -oC])
        },
        ArmLeftMesh: {
          timeFraction: CC,
          rotation: ZC([-NC, 0, -gC])
        },
        ArmRightMesh: {
          timeFraction: CC,
          rotation: ZC([-MC, 0, SC])
        },
        LegLeftMesh: {
          timeFraction: CC,
          position: xC,
          rotation: ZC([-qC[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: CC,
          position: xC,
          rotation: ZC([-qC[1], 0, 0])
        }
      }
    }
    var hb = ZC(37023),
      Kb = ZC(38300),
      Yb = ZC(38454);

    function db(CC, zC, ZC) {
      var QC, wC;
      const bC = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return CC + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - CC) * ZC
        },
        [nC, fC] = null !== (QC = CC.legs) && void 0 !== QC ? QC : [0, 0],
        [oC, qC] = null !== (wC = zC.legs) && void 0 !== wC ? wC : [0, 0];
      return {
        drop: bC(CC.drop, zC.drop),
        shift: bC(CC.shift, zC.shift),
        torso: bC(CC.torso, zC.torso),
        nod: bC(CC.nod, zC.nod),
        tilt: bC(CC.tilt, zC.tilt),
        legs: [bC(nC, oC), bC(fC, qC)],
        arms: bC(CC.arms, zC.arms),
        spread: bC(CC.spread, zC.spread)
      }
    }
    const mb = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Hb = xb(4400, !0, [
        [0, mb],
        [.16, {
          ...mb,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, mb],
        [.44, {
          ...mb,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, db(mb, Gb, .7)],
        [.66, db(mb, Gb, .78)],
        [.74, db(mb, Rb, .65)],
        [.86, {
          ...mb,
          drop: .14
        }],
        [1, mb]
      ], "catmull-rom-spline"),
      Eb = {
        ...mb,
        drop: .14,
        torso: .3,
        spread: .4
      },
      lb = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      Xb = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      cb = {
        caveGolem: Hb,
        magmaGolem: xb(3600, !0, [
          [0, Eb],
          [.12, {
            ...Eb,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Eb,
            tilt: -.08
          }],
          [.4, {
            ...Eb,
            tilt: .06,
            drop: .11
          }],
          [.52, db(Eb, Gb, .9)],
          [.62, db(Eb, Rb, .8)],
          [.7, db(Eb, Rb, .45)],
          [.78, db(Eb, Rb, .85)],
          [.9, {
            ...Eb,
            drop: .17
          }],
          [1, Eb]
        ], "catmull-rom-spline"),
        frostWraith: function(CC, zC, ZC) {
          return Sb(Ib, CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, lb],
          [.14, {
            ...lb,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...lb,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...lb,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...lb,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...lb,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...lb,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...lb,
            rise: .16,
            tilt: -.04
          }],
          [1, lb]
        ], "catmull-rom-spline"),
        tikiTerror: function(CC, zC, ZC) {
          return Sb(eb, CC, zC, ZC, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, Xb],
          [.16, {
            ...Xb,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, Xb],
          [.44, {
            ...Xb,
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
            ...Xb,
            drop: .1
          }],
          [1, Xb]
        ], "catmull-rom-spline")
      },
      ub = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      rb = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      sb = Object.fromEntries(Object.entries(cb).map((CC => {
        let [zC, ZC] = CC;
        return [zC, (0, Yb.b)((0, hb.f)(ZC), zC)]
      })));

    function Tb(CC) {
      const zC = function(CC) {
        var zC;
        const ZC = (0, Kb.e)(CC).poseRig;
        return null !== (zC = rb[CC]) && void 0 !== zC ? zC : void 0 === ZC ? null : ub[ZC]
      }(CC);
      return null === zC ? null : sb[zC]
    }

    function ab(CC) {
      return {
        "--difficulty-colour": CC
      }
    }
    const tb = (0, vC.lazy)((() => (0, gb.e)(ZC.e(200).then((() => ZC(41321))), (CC => CC.MobPreview))));

    function Db(CC) {
      var zC, ZC, QC;
      let {
        picker: wC,
        controller: bC
      } = CC;
      const {
        t: nC
      } = (0, hw.y)(), fC = aw(), {
        page: oC
      } = wC;
      return (0, Yw.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: fC,
        onKeyDown: CC => {
          "ArrowLeft" === CC.key ? (CC.preventDefault(), CC.stopPropagation(), bC.previous()) : "ArrowRight" === CC.key ? (CC.preventDefault(), CC.stopPropagation(), bC.next()) : Tw(CC)
        },
        style: ab(oC.colour),
        children: [(0, Yw.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Yw.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: wC.dungeonName
          }), (0, Yw.jsx)(sw.k, {
            padIgnore: !0,
            onClick: bC.dismiss
          })]
        }), (0, Yw.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Yw.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Yw.jsx)(sw.g, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !wC.canPrevious,
              onClick: bC.previous,
              children: (0, Yw.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Yw.jsx)(Mb.c, {
                  name: "angle-up"
                })
              })
            }), (0, Yw.jsxs)("div", {
              className: Aw()("SkyblockBossPickerBoss", {
                Locked: !oC.unlocked
              }),
              children: [null !== oC.bossMobType && (0, Yw.jsx)(vC.Suspense, {
                fallback: (0, Yw.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Yw.jsx)(tb, {
                  className: "SkyblockBossPickerModel",
                  mobType: oC.bossMobType,
                  variation: oC.bossMobVariation,
                  animation: null !== (zC = Tb(oC.bossMobType)) && void 0 !== zC ? zC : void 0
                })
              }), null === oC.bossMobType && (0, Yw.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Yw.jsx)(sw.g, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !wC.canNext,
              onClick: bC.next,
              children: (0, Yw.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Yw.jsx)(Mb.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Yw.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [oC.beaten && (0, Yw.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), oC.label]
            }), (0, Yw.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (ZC = oC.bossName) && void 0 !== ZC ? ZC : "???"
            }), (0, Yw.jsxs)("span", {
              className: Aw()("SkyblockBossPickerRecord", {
                Locked: null !== oC.lockedHint
              }),
              children: [null !== oC.lockedHintHighlight && (0, Yw.jsxs)(Yw.Fragment, {
                children: [oC.lockedHintHighlight.before, (0, Yw.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: ab(oC.lockedHintHighlight.colour),
                  children: [null !== oC.lockedHintHighlight.icon && (0, Yw.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Yw.jsx)(iw.e, {
                      itemName: oC.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), oC.lockedHintHighlight.name]
                }), oC.lockedHintHighlight.after]
              }), null === oC.lockedHintHighlight && (null !== (QC = oC.lockedHint) && void 0 !== QC ? QC : oC.summary)]
            })]
          }), (0, Yw.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: wC.pages.map((CC => (0, Yw.jsx)("span", {
              className: Aw()("SkyblockBossPickerDot", {
                Current: CC.current,
                Locked: !CC.unlocked
              }),
              style: ab(CC.colour)
            }, CC.difficulty)))
          }), (0, Yw.jsx)(sw.t, {
            className: "SkyblockBossPickerFight",
            disabled: !oC.unlocked,
            onClick: bC.enter,
            children: nC("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function jb(CC) {
      let {
        dungeon: zC,
        select: ZC
      } = CC;
      return (0, Yw.jsxs)(sw.g, {
        className: Aw()("SkyblockDungeonCard", {
          Selected: zC.selected
        }),
        onClick: () => {
          ZC(zC.id)
        },
        children: [(0, Yw.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Yw.jsx)("strong", {
            children: zC.name
          }), (0, Yw.jsx)("span", {
            children: zC.beatenSummary
          })]
        }), (0, Yw.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: zC.difficulties.map((CC => (0, Yw.jsxs)("span", {
            className: Aw()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: CC.beaten
            }),
            style: ab(CC.colour),
            title: CC.summary,
            children: [CC.beaten && (0, Yw.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), CC.label]
          }, CC.difficulty)))
        })]
      })
    }

    function yb(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(MZ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = aw();
      return ZC.enabled ? (0, Yw.jsxs)(rw.c, {
        show: ZC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [ZC.picker && (0, Yw.jsx)(Db, {
          picker: ZC.picker,
          controller: zC
        }), !ZC.picker && (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: wC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: QC("skyblockGame:dungeons")
              }), (0, Yw.jsx)("p", {
                children: QC("skyblockGame:dungeonsIntro")
              })]
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              onClick: zC.dismiss
            })]
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Yw.jsx)("div", {
              className: "SkyblockDungeonList",
              children: ZC.dungeons.map((CC => (0, Yw.jsx)(jb, {
                dungeon: CC,
                select: zC.select
              }, CC.id)))
            }), ZC.detail && (0, Yw.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Yw.jsx)("h3", {
                children: ZC.detail.name
              }), (0, Yw.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: ZC.detail.difficulties.map((CC => (0, Yw.jsxs)("li", {
                  className: Aw()("SkyblockDungeonRecord", {
                    Beaten: CC.beaten
                  }),
                  children: [(0, Yw.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: ab(CC.colour),
                    children: [CC.beaten && (0, Yw.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), CC.label]
                  }), (0, Yw.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: CC.summary
                  })]
                }, CC.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function Lb(CC) {
      let {
        collection: zC,
        select: ZC
      } = CC;
      return (0, Yw.jsxs)(sw.g, {
        className: Aw()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: zC.selected,
          Locked: zC.locked
        }),
        ariaPressed: zC.selected,
        onClick: () => {
          ZC(zC.id)
        },
        children: [(0, Yw.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Yw.jsx)(iw.e, {
            itemName: zC.icon,
            amount: 0
          })
        }), (0, Yw.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Yw.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Yw.jsx)("strong", {
              children: zC.name
            }), (0, Yw.jsx)("span", {
              children: zC.tier
            })]
          }), (0, Yw.jsx)(tw, {
            percent: zC.percent,
            label: `${zC.name}: ${zC.progress}`
          }), (0, Yw.jsx)("span", {
            className: "SkyblockSkillXp",
            children: zC.progress
          })]
        })]
      })
    }

    function Ub(CC) {
      let {
        collection: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)();
      return (0, Yw.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Yw.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Yw.jsx)(iw.e, {
            itemName: zC.icon,
            amount: 0
          })
        }), (0, Yw.jsx)("h3", {
          children: zC.name
        }), (0, Yw.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: zC.tier
        }), (0, Yw.jsx)("p", {
          children: zC.locked ? ZC("skyblockGame:collectionLocked") : zC.count
        }), null !== zC.nextReward && (0, Yw.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Yw.jsx)("strong", {
            children: ZC("skyblockGame:collectionNextReward")
          }), (0, Yw.jsx)("span", {
            children: zC.nextReward
          })]
        }), (0, Yw.jsx)(tw, {
          percent: zC.percent,
          label: zC.progress
        }), (0, Yw.jsx)("p", {
          children: zC.progress
        })]
      })
    }

    function Bb(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(lZ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = aw();
      return ZC.enabled ? (0, Yw.jsx)(rw.c, {
        show: ZC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: wC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: QC("skyblockGame:collections")
              }), (0, Yw.jsxs)("p", {
                children: [QC("skyblockGame:collectionsIntro"), " ", ZC.tiersUnlocked]
              })]
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              onClick: zC.dismiss
            })]
          }), (0, Yw.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: ZC.categories.map((CC => (0, Yw.jsxs)(sw.g, {
              className: Aw()("SkyblockCollectionCategory", {
                Selected: CC.selected
              }),
              ariaPressed: CC.selected,
              padTabSelected: CC.selected,
              onClick: () => {
                zC.selectCategory(CC.id)
              },
              children: [(0, Yw.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Yw.jsx)(iw.e, {
                  itemName: CC.icon,
                  amount: 0
                })
              }), (0, Yw.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Yw.jsx)("strong", {
                  children: CC.label
                }), (0, Yw.jsx)("span", {
                  children: CC.tiers
                })]
              })]
            }, CC.id)))
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Yw.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: ZC.collections.map((CC => (0, Yw.jsx)(Lb, {
                collection: CC,
                select: zC.select
              }, CC.id)))
            }), ZC.detail && (0, Yw.jsx)(Ub, {
              collection: ZC.detail
            })]
          })]
        })
      }) : null
    }
    const Ob = ["completed", "active", "available", "locked"],
      kb = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Vb(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(LZ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = aw();
      return ZC.enabled ? (0, Yw.jsx)(rw.c, {
        show: ZC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: wC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: QC("skyblockDevQuests:title")
              }), (0, Yw.jsx)("p", {
                children: QC("skyblockDevQuests:intro")
              })]
            }), (0, Yw.jsx)(sw.k, {
              onClick: zC.dismiss
            })]
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Ob.map((CC => (0, Yw.jsx)("span", {
              className: Aw()("SkyblockQuestGraphLegendState", CC),
              children: QC(`skyblockDevQuests:state_${CC}`)
            }, CC))), kb.map((CC => (0, Yw.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Yw.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Yw.jsx)("line", {
                  className: Aw()("SkyblockQuestGraphEdge", CC),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), QC(`skyblockDevQuests:edge_${CC}`)]
            }, CC)))]
          }), (0, Yw.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Yw.jsxs)("div", {
              className: Aw()("SkyblockQuestGraphCanvas", {
                Planning: ZC.planning
              }),
              style: {
                width: ZC.width,
                height: ZC.height
              },
              children: [(0, Yw.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: ZC.width,
                height: ZC.height,
                "aria-hidden": "true",
                children: [(0, Yw.jsx)("defs", {
                  children: (0, Yw.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Yw.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), ZC.edges.map((CC => (0, Yw.jsx)("path", {
                  className: Aw()("SkyblockQuestGraphEdge", CC.kind, {
                    InPlan: CC.inPlan
                  }),
                  d: CC.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, CC.key)))]
              }), ZC.nodes.map((CC => (0, Yw.jsxs)("button", {
                type: "button",
                className: Aw()("SkyblockQuestGraphNode", CC.state, {
                  InPlan: CC.inPlan,
                  Hovered: CC.hovered
                }),
                style: {
                  left: CC.left,
                  top: CC.top,
                  width: 190,
                  height: 52
                },
                title: CC.id,
                onMouseEnter: () => {
                  zC.hover(CC.id)
                },
                onMouseLeave: () => {
                  zC.hover(null)
                },
                onFocus: () => {
                  zC.hover(CC.id)
                },
                onBlur: () => {
                  zC.hover(null)
                },
                onClick: () => {
                  zC.jump(CC.id)
                },
                children: [(0, Yw.jsx)("strong", {
                  children: CC.name
                }), (0, Yw.jsx)("span", {
                  children: CC.detail
                })]
              }, CC.id)))]
            })
          })]
        })
      }) : null
    }
    const Cn = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      zn = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${fQ}ms`,
        "--forge-duration": "2150ms"
      },
      Zn = Array.from({
        length: 18
      }, ((CC, zC) => ({
        "--ember-left": `${(4+92*(.618034*zC%1)).toFixed(1)}%`,
        "--ember-size": 3 + zC % 3 * 2 + "px",
        "--ember-drift": 14 * (zC % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*zC%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*zC%8).toFixed(2)}s`
      })));

    function Qn(CC) {
      if (CC.style.removeProperty("--part-size"), null === CC.parentElement || "wrap" === getComputedStyle(CC.parentElement).flexWrap) return;
      const zC = [...CC.children],
        ZC = getComputedStyle(CC),
        QC = parseFloat(ZC.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        wC = (CC.clientHeight - parseFloat(ZC.rowGap) * (zC.length - 1)) / zC.length,
        bC = zC.map((CC => {
          const zC = getComputedStyle(CC),
            ZC = CC.querySelector("h3"),
            bC = CC.querySelector(".SkyblockForgeParts");
          if (null === ZC || null === bC) return QC;
          const nC = wC - parseFloat(zC.paddingTop) - parseFloat(zC.paddingBottom) - ZC.offsetHeight - parseFloat(getComputedStyle(ZC).marginBottom),
            fC = parseFloat(getComputedStyle(bC).columnGap),
            oC = bC.children.length;
          let qC = 0;
          for (let QC = 1; QC <= oC; QC++) {
            const CC = Math.ceil(oC / QC);
            qC = Math.max(qC, Math.min((bC.clientWidth - fC * (QC - 1)) / QC, (nC - fC * (CC - 1)) / CC))
          }
          return qC
        }));
      CC.style.setProperty("--part-size", `${Math.floor(Math.max(QC,Math.min(...bC)))}px`)
    }

    function wn(CC) {
      var zC, ZC, QC, bC, nC;
      let {
        controller: fC
      } = CC;
      const oC = (0, Kw.f)(gQ, fC.getSnapshot()),
        {
          t: qC
        } = (0, hw.y)(),
        FC = aw(),
        WC = function() {
          const CC = (0, vC.useRef)(null),
            zC = (0, vC.useRef)(null);
          return (0, vC.useLayoutEffect)((() => {
            null !== CC.current && Qn(CC.current)
          })), (0, vC.useCallback)((ZC => {
            var QC;
            null === (QC = zC.current) || void 0 === QC || QC.disconnect(), zC.current = null, CC.current = ZC, null !== ZC && (zC.current = new ResizeObserver((() => {
              Qn(ZC)
            })), zC.current.observe(ZC))
          }), [])
        }(),
        NC = function(CC) {
          const zC = (0, vC.useRef)(null);
          return (0, vC.useLayoutEffect)((() => {
            const CC = zC.current;
            if (null !== CC) {
              CC.style.removeProperty("font-size");
              for (let zC = 1.7; zC > 1.1 && CC.scrollWidth > CC.clientWidth; zC -= .1) CC.style.fontSize = zC - .1 + "rem"
            }
          }), [CC]), (0, vC.useCallback)((CC => {
            zC.current = CC
          }), [])
        }(null === (zC = oC.preview) || void 0 === zC ? void 0 : zC.name),
        MC = (0, vC.useRef)(null),
        gC = (0, vC.useRef)({}),
        SC = oC.forging,
        pC = null !== (ZC = null === SC || void 0 === SC ? void 0 : SC.preview.tier) && void 0 !== ZC ? ZC : 0,
        PC = null !== (QC = null === SC || void 0 === SC ? void 0 : SC.preview.named) && void 0 !== QC && QC,
        GC = (0, vC.useMemo)((() => {
          return null === SC ? null : {
            flames: (CC = pC, zC = PC, Array.from({
              length: 26 + 6 * CC + (zC ? 20 : 0)
            }, ((CC, zC) => {
              const ZC = zC < 6,
                QC = Math.random() * Math.PI * 2,
                wC = ZC ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                bC = Math.cos(QC) * wC,
                nC = Math.sin(QC) * wC - 2 - 3 * Math.random(),
                fC = Math.random(),
                [oC, qC, FC] = ZC ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : fC < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : fC < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [fC < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": oC,
                "--x0": `${(.15*bC).toFixed(2)}rem`,
                "--y0": `${(.15*nC).toFixed(2)}rem`,
                "--x": `${bC.toFixed(2)}rem`,
                "--y": `${nC.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${qC.toFixed(2)}rem`,
                "--duration": `${Math.round(FC)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: FQ(pC, PC)
          };
          var CC, zC
        }), [null === SC || void 0 === SC ? void 0 : SC.id]);
      if (!oC.enabled) return null;
      const RC = oC.preview,
        AC = oC.arriving,
        xC = null !== AC && !AC.sameSword,
        JC = null !== RC && (0, Yw.jsx)(iw.e, {
          itemName: RC.baseSword,
          amount: 0,
          enchantmentTier: RC.enchantmentTier
        });
      return (0, Yw.jsx)(rw.c, {
        show: oC.open,
        close: fC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: FC,
          onKeyDown: Tw,
          children: [(0, Yw.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Zn.map(((CC, zC) => (0, Yw.jsx)("span", {
              style: CC
            }, zC)))
          }), (0, Yw.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: qC("skyblockGame:forgeTitle")
              }), (0, Yw.jsx)("p", {
                children: qC("skyblockGame:forgeIntro")
              })]
            }), (0, Yw.jsx)(sw.k, {
              onClick: fC.dismiss
            })]
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Yw.jsx)("div", {
              ref: WC,
              className: Aw()("SkyblockForgeSlots", {
                Locked: null !== SC
              }),
              children: oC.slots.map((CC => (0, Yw.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Yw.jsx)("h3", {
                  children: CC.label
                }), (0, Yw.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: CC.parts.map((zC => (0, Yw.jsx)("button", {
                    type: "button",
                    className: Aw()("SkyblockForgePart", {
                      Selected: zC.selected,
                      Missing: zC.placeholder
                    }),
                    disabled: zC.placeholder,
                    title: zC.placeholder ? qC("skyblockGame:forgePickParts") : zC.itemName,
                    "aria-pressed": zC.selected,
                    onClick: () => {
                      fC.select(CC.kind, zC.material)
                    },
                    children: (0, Yw.jsx)(iw.e, {
                      itemName: zC.itemName,
                      amount: zC.owned
                    })
                  }, zC.material)))
                })]
              }, CC.kind)))
            }), (0, Yw.jsxs)("div", {
              className: Aw()("SkyblockForgeAnvil", {
                Named: null === RC || void 0 === RC ? void 0 : RC.named
              }),
              style: {
                "--tier": null === RC ? "transparent" : wC.bb[RC.enchantmentTier]
              },
              children: [(0, Yw.jsxs)("div", {
                className: Aw()("SkyblockForgeAltar", {
                  Forging: null !== SC
                }),
                style: null === SC ? void 0 : zn,
                children: [(0, Yw.jsxs)("div", {
                  className: Aw()("SkyblockForgeMount", {
                    Arrive: null !== AC
                  }),
                  children: [null === RC && (0, Yw.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Yw.jsx)(iw.e, {
                      itemName: oC.unformedSword,
                      amount: 0
                    })
                  }), null !== RC && (0, Yw.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== RC && null === SC && (0, Yw.jsx)("div", {
                    ref: MC,
                    className: "SkyblockForgeFloat",
                    children: (0, Yw.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: JC
                    })
                  }), null !== RC && (0, Yw.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: qQ.map(((CC, zC) => (0, Yw.jsx)("span", {
                      className: Aw()({
                        Rune: "" !== CC.rune
                      }),
                      style: CC.style,
                      children: CC.rune
                    }, zC)))
                  }), null !== SC && null !== GC && (0, Yw.jsxs)(Yw.Fragment, {
                    children: [(0, Yw.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Yw.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: GC.flames.map(((CC, zC) => (0, Yw.jsx)("span", {
                        style: CC
                      }, zC)))
                    }), (0, Yw.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: gC.current,
                      children: (0, Yw.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: JC
                      })
                    }), (0, Yw.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Yw.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (pC >= 4 || PC) && (0, Yw.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Yw.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: GC.sparks.map(((CC, zC) => (0, Yw.jsx)("span", {
                        style: CC
                      }, zC)))
                    }), (0, Yw.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Yw.jsx)("p", {
                  className: Aw()("SkyblockForgeStatus", null === (bC = oC.status) || void 0 === bC ? void 0 : bC.tone),
                  children: null === (nC = oC.status) || void 0 === nC ? void 0 : nC.text
                })]
              }), null === RC && (0, Yw.jsx)("p", {
                className: Aw()("SkyblockForgeName Waiting", {
                  ArriveText: xC
                }),
                children: qC(oC.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== RC && (0, Yw.jsx)("h3", {
                ref: NC,
                className: Aw()("SkyblockForgeName", {
                  ArriveText: xC
                }),
                title: RC.name,
                children: RC.name
              }), (null === RC || void 0 === RC ? void 0 : RC.named) && (0, Yw.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: qC("skyblockGame:forgeSecret")
              }), (0, Yw.jsxs)(sw.t, {
                className: "SkyblockForgeButton",
                disabled: !oC.canForge,
                title: null === RC ? void 0 : qC("skyblockGame:forgeCoalOwned", {
                  owned: String(oC.coalOwned)
                }),
                onClick: () => {
                  gC.current = function(CC) {
                    const zC = null === CC ? "none" : getComputedStyle(CC).transform,
                      ZC = new DOMMatrixReadOnly("none" === zC ? void 0 : zC);
                    return {
                      "--settle-y": `${ZC.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(ZC.b,ZC.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(MC.current), MQ(), fC.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [qC("skyblockGame:forgeButton"), null !== RC && (0, Yw.jsxs)("span", {
                  className: Aw()("SkyblockForgeCost", {
                    Short: RC.coalShort
                  }),
                  children: [(0, Yw.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Yw.jsx)(iw.e, {
                      itemName: VZ.e,
                      amount: 0
                    })
                  }), RC.coalCost]
                })]
              })]
            }), (0, Yw.jsxs)("div", {
              className: Aw()("SkyblockForgeDetails", {
                Named: null === RC || void 0 === RC ? void 0 : RC.named
              }),
              children: [(0, Yw.jsx)("p", {
                className: Aw()("SkyblockForgeLore", {
                  ArriveText: xC
                }),
                title: null === RC || void 0 === RC ? void 0 : RC.lore,
                children: null === RC || void 0 === RC ? void 0 : RC.lore
              }), (0, Yw.jsxs)("dl", {
                className: Aw()("SkyblockForgeStats", {
                  ArriveText: xC
                }),
                children: [null === RC && Cn.map((CC => (0, Yw.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Yw.jsx)("dt", {
                    children: qC(CC)
                  }), (0, Yw.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, CC))), null === RC || void 0 === RC ? void 0 : RC.stats.map((CC => (0, Yw.jsxs)("div", {
                  className: Aw()("SkyblockForgeStat", {
                    Better: CC.better
                  }),
                  children: [(0, Yw.jsx)("dt", {
                    children: CC.label
                  }), (0, Yw.jsx)("dd", {
                    children: CC.value
                  })]
                }, CC.label)))]
              }), (0, Yw.jsx)("ul", {
                className: Aw()("SkyblockForgeEffects", {
                  ArriveText: xC
                }),
                children: null === RC || void 0 === RC ? void 0 : RC.effects.map((CC => (0, Yw.jsx)("li", {
                  children: CC
                }, CC)))
              })]
            })]
          })]
        })
      })
    }
    const bn = "Doom Rivet",
      nn = "Doom Crest";

    function fn(CC) {
      let {
        itemName: zC,
        amount: ZC,
        owned: QC
      } = CC;
      return (0, Yw.jsxs)("span", {
        className: Aw()("SkyblockSmugglerPrice", {
          Short: ZC > QC
        }),
        children: [(0, Yw.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Yw.jsx)(iw.e, {
            itemName: zC,
            amount: 0
          })
        }), (0, Yw.jsx)("span", {
          children: ZC
        })]
      })
    }

    function qn(CC) {
      return CC.justBought ? "skyblockGame:smugglerJustBought" : CC.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Fn(CC) {
      let {
        deal: zC,
        view: ZC,
        buy: QC
      } = CC;
      const {
        t: wC
      } = (0, hw.y)();
      return (0, Yw.jsxs)("div", {
        className: Aw()("SkyblockSmugglerPocket", {
          Bought: zC.justBought,
          Unaffordable: !zC.affordable,
          SoldOut: zC.soldOut && !zC.justBought
        }),
        children: [(0, Yw.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Yw.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Yw.jsx)(iw.e, {
            itemName: zC.itemName,
            amount: 0,
            enchantmentTier: zC.enchantmentTier
          }), zC.amount > 1 && (0, Yw.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: wC("skyblockGame:smugglerAmount", {
              amount: zC.amount
            })
          })]
        }), (0, Yw.jsx)("h3", {
          children: zC.displayName
        }), (0, Yw.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Yw.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [zC.rivets > 0 && (0, Yw.jsx)(fn, {
              itemName: bn,
              amount: zC.rivets,
              owned: ZC.rivetsOwned
            }), zC.crests > 0 && (0, Yw.jsx)(fn, {
              itemName: nn,
              amount: zC.crests,
              owned: ZC.crestsOwned
            })]
          }), (0, Yw.jsx)(sw.g, {
            className: "SkyblockSmugglerBuy",
            disabled: zC.soldOut || !zC.affordable || ZC.pending,
            onClick: () => {
              QC(zC.slot)
            },
            children: wC(qn(zC))
          })]
        })]
      }, zC.justBought ? ZC.boughtCount : 0)
    }

    function Wn(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(PQ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = aw();
      return ZC.enabled ? (0, Yw.jsx)(rw.c, {
        show: ZC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: wC,
          onKeyDown: Tw,
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Yw.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Yw.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: QC("skyblockGame:smugglerTitle")
              }), (0, Yw.jsx)("p", {
                children: QC("skyblockGame:smugglerIntro")
              })]
            }), (0, Yw.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Yw.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Yw.jsx)(fn, {
                  itemName: bn,
                  amount: ZC.rivetsOwned,
                  owned: ZC.rivetsOwned
                }), (0, Yw.jsx)(fn, {
                  itemName: nn,
                  amount: ZC.crestsOwned,
                  owned: ZC.crestsOwned
                })]
              }), (0, Yw.jsx)(sw.k, {
                onClick: zC.dismiss
              })]
            })]
          }), (0, Yw.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: ZC.deals.map((CC => (0, Yw.jsx)(Fn, {
              deal: CC,
              view: ZC,
              buy: zC.buy
            }, CC.slot)))
          }), (0, Yw.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Yw.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: ZC.rotatesText
            }), null !== ZC.status && (0, Yw.jsx)("span", {
              className: Aw()("SkyblockSmugglerStatus", ZC.status.tone),
              children: ZC.status.text
            })]
          })]
        })
      }) : null
    }

    function Nn(CC) {
      let {
        phase: zC,
        className: ZC
      } = CC;
      return (0, Yw.jsx)("span", {
        className: Aw()("SkyblockMoon", `Moon-${zC}`, ZC),
        "aria-hidden": "true"
      })
    }

    function Mn(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(AQ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)();
      return ZC.enabled ? (0, Yw.jsx)(Jw.c, {
        placement: "statBars",
        children: (0, Yw.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Aw()("SkyblockPassageChip", ZC.open && "Open"),
          "aria-label": QC("skyblockGame:passageChipLabel", {
            phase: ZC.phaseName
          }),
          title: QC("skyblockGame:passageChipLabel", {
            phase: ZC.phaseName
          }),
          onMouseDown: CC => {
            CC.preventDefault()
          },
          onClick: zC.toggle,
          children: (0, Yw.jsx)(Nn, {
            phase: ZC.phase
          }, ZC.phase)
        })
      }) : null
    }

    function gn(CC) {
      let {
        fish: zC
      } = CC;
      return (0, Yw.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Yw.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Yw.jsx)(iw.e, {
            itemName: zC.itemName,
            amount: 0
          })
        }), (0, Yw.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: zC.displayName
          }), (0, Yw.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: zC.where
          })]
        })]
      })
    }

    function Sn(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(AQ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = aw();
      return ZC.enabled ? (0, Yw.jsx)(rw.c, {
        show: ZC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: wC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Yw.jsx)(Nn, {
              phase: ZC.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: QC("skyblockGame:passageTitle")
              }), (0, Yw.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: ZC.phaseName
              })]
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              onClick: zC.dismiss
            })]
          }), (0, Yw.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: QC("skyblockGame:passageIntro")
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Yw.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Yw.jsx)("h3", {
                children: QC("skyblockGame:passageVisiting")
              }), (0, Yw.jsx)("ul", {
                className: "SkyblockPassageList",
                children: ZC.visitors.map((CC => (0, Yw.jsx)(gn, {
                  fish: CC
                }, CC.itemName)))
              })]
            }), (0, Yw.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== ZC.resting && (0, Yw.jsxs)(Yw.Fragment, {
                children: [(0, Yw.jsx)("h3", {
                  children: QC("skyblockGame:passageResting")
                }), (0, Yw.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Yw.jsx)(gn, {
                    fish: ZC.resting
                  })
                })]
              }), (0, Yw.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Yw.jsx)(Nn, {
                  phase: ZC.nextPhase
                }), (0, Yw.jsx)("span", {
                  children: ZC.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function pn() {
      return (0, Yw.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((CC => (0, Yw.jsx)("i", {
          style: {
            "--sparkle-index": CC
          }
        }, CC)))
      })
    }

    function Pn(CC) {
      var zC;
      let {
        charm: ZC,
        view: QC,
        controller: wC
      } = CC;
      const {
        t: bC
      } = (0, hw.y)(), nC = QC.shop, fC = (null === (zC = QC.sparkle) || void 0 === zC ? void 0 : zC.id) === ZC.id;
      return (0, Yw.jsxs)("li", {
        className: Aw()("SkyblockLampLightCharm", ZC.owned && "Owned", ZC.socketed && "Socketed"),
        children: [fC && (0, Yw.jsx)(pn, {}, QC.sparkle.count), (0, Yw.jsx)("h4", {
          children: ZC.name
        }), (0, Yw.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: ZC.effect
        }), (0, Yw.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: ZC.lines.map((CC => (0, Yw.jsxs)("li", {
            className: Aw()("SkyblockLampLightOddsLine", "better" === CC.tone ? "Better" : "worse" === CC.tone ? "Worse" : "Same"),
            children: [(0, Yw.jsx)("span", {
              className: "Before",
              children: CC.before
            }), (0, Yw.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Yw.jsx)("span", {
              className: "After",
              children: CC.after
            })]
          }, CC.label)))
        }), (0, Yw.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: ZC.owned ? ZC.socketed ? (0, Yw.jsxs)(Yw.Fragment, {
            children: [(0, Yw.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: bC("skyblockGame:lampLightSocketed")
            }), (0, Yw.jsx)(sw.O, {
              disabled: !QC.canCommand,
              ariaLabel: bC("skyblockGame:lampLightRemoveLabel", {
                charm: ZC.name
              }),
              onClick: () => {
                wC.socket(null)
              },
              children: bC("skyblockGame:lampLightRemove")
            })]
          }) : (0, Yw.jsx)(sw.g, {
            disabled: !QC.canCommand || !nC.heldRod,
            ariaLabel: bC("skyblockGame:lampLightSocketLabel", {
              charm: ZC.name
            }),
            onClick: () => {
              wC.socket(ZC.id)
            },
            children: bC("skyblockGame:lampLightSocket")
          }) : (0, Yw.jsx)(sw.g, {
            disabled: !QC.canCommand || !ZC.affordable,
            ariaLabel: bC("skyblockGame:lampLightBuyLabel", {
              item: ZC.name,
              cost: ZC.cost
            }),
            onClick: () => {
              wC.buy(ZC.id)
            },
            children: ZC.cost
          })
        })]
      })
    }

    function Gn(CC) {
      var zC;
      let {
        tint: ZC,
        view: QC,
        controller: wC
      } = CC;
      const {
        t: bC
      } = (0, hw.y)();
      return (0, Yw.jsxs)("li", {
        className: Aw()("SkyblockLampLightTint", ZC.wearing && "Wearing"),
        style: {
          "--tint-colour": ZC.colour
        },
        children: [(null === (zC = QC.sparkle) || void 0 === zC ? void 0 : zC.id) === ZC.id && (0, Yw.jsx)(pn, {}, QC.sparkle.count), (0, Yw.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Yw.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: ZC.name
        }), ZC.wearing ? (0, Yw.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: bC("skyblockGame:lampLightWearing")
        }) : (0, Yw.jsx)(sw.g, {
          disabled: !QC.canCommand || !ZC.owned && !ZC.affordable,
          ariaLabel: ZC.owned ? bC("skyblockGame:lampLightWearLabel", {
            tint: ZC.name
          }) : bC("skyblockGame:lampLightBuyLabel", {
            item: ZC.name,
            cost: ZC.cost
          }),
          onClick: () => {
            ZC.owned ? wC.wearTint(ZC.id) : wC.buy(ZC.id)
          },
          children: ZC.owned ? bC("skyblockGame:lampLightWear") : ZC.cost
        })]
      })
    }

    function Rn(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(lQ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = ZC.shop;
      return (0, Yw.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Yw.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: ZC.balance
          }), (0, Yw.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": ZC.releasing,
            className: Aw()("SkyblockLampLightSwitch", ZC.releasing && "On"),
            disabled: ZC.releasing ? "ready" !== ZC.status : !ZC.canCommand,
            onClick: () => {
              zC.setRelease(!ZC.releasing)
            },
            children: [(0, Yw.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Yw.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), QC("skyblockGame:lampLightRelease")]
          }), (0, Yw.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: QC("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== ZC.notice && (0, Yw.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: ZC.notice
        }), null !== wC && (0, Yw.jsxs)(Yw.Fragment, {
          children: [(0, Yw.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Yw.jsx)("h3", {
              children: QC("skyblockGame:lampLightCharms")
            }), (0, Yw.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: wC.oddsFor
            }), (0, Yw.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((CC => (0, Yw.jsx)("button", {
                type: "button",
                "aria-pressed": ZC.situation === CC,
                className: Aw()("SkyblockLampLightSituation", ZC.situation === CC && "Selected"),
                onClick: () => {
                  zC.setSituation(CC)
                },
                children: QC("open" === CC ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, CC)))
            })]
          }), !wC.heldRod && (0, Yw.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: QC("skyblockGame:lampLightHoldRod")
          }), (0, Yw.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: wC.charms.map((CC => (0, Yw.jsx)(Pn, {
              charm: CC,
              view: ZC,
              controller: zC
            }, CC.id)))
          }), (0, Yw.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Yw.jsx)("h3", {
              children: QC("skyblockGame:lampLightTints")
            })
          }), (0, Yw.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Yw.jsxs)("li", {
              className: Aw()("SkyblockLampLightTint", "Islands", wC.wearingIslandColours && "Wearing"),
              children: [(0, Yw.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Yw.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: QC("skyblockGame:lampLightIslandColours")
              }), wC.wearingIslandColours ? (0, Yw.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: QC("skyblockGame:lampLightWearing")
              }) : (0, Yw.jsx)(sw.g, {
                disabled: !ZC.canCommand,
                ariaLabel: QC("skyblockGame:lampLightWearLabel", {
                  tint: QC("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  zC.wearTint(null)
                },
                children: QC("skyblockGame:lampLightWear")
              })]
            }), wC.tints.map((CC => (0, Yw.jsx)(Gn, {
              tint: CC,
              view: ZC,
              controller: zC
            }, CC.id)))]
          })]
        })]
      })
    }

    function An(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(lQ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)();
      return ZC.releasing ? (0, Yw.jsx)(Jw.c, {
        children: (0, Yw.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            zC.setRelease(!1)
          },
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Yw.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [QC("skyblockGame:lampLightReleasing"), " \xb7 ", ZC.balance]
          }), (0, Yw.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: QC("skyblockGame:lampLightKeepCatches")
          }), null !== ZC.gained && (0, Yw.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: ZC.gained.text
          }, ZC.gained.count)]
        })
      }) : null
    }

    function xn(CC) {
      let {
        island: zC,
        view: ZC,
        aim: QC
      } = CC;
      const {
        t: wC
      } = (0, hw.y)(), bC = zC.featuredFish;
      return (0, Yw.jsxs)("li", {
        className: Aw()("SkyblockKeepersChairIsland", `Island-${zC.id}`, zC.favoured && "Aimed", !zC.relit && "Dark"),
        children: [(0, Yw.jsx)("h3", {
          children: zC.name
        }), zC.relit && null !== bC ? (0, Yw.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: wC("skyblockGame:keepersChairTideNotice")
          }), (0, Yw.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Yw.jsx)(iw.e, {
              itemName: bC.itemName,
              amount: 0
            })
          }), (0, Yw.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: bC.displayName
          })]
        }) : (0, Yw.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Yw.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: wC("skyblockGame:keepersChairDark")
          })
        }), zC.relit && (zC.favoured ? (0, Yw.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: wC("skyblockGame:keepersChairAimed")
        }) : (0, Yw.jsx)(sw.g, {
          className: "SkyblockKeepersChairAim",
          disabled: !ZC.canAim,
          ariaLabel: wC("skyblockGame:keepersChairAimLabel", {
            island: zC.name
          }),
          onClick: () => {
            QC(zC.id)
          },
          children: wC("skyblockGame:keepersChairAim")
        }))]
      }, zC.favoured ? ZC.aimedCount : 0)
    }

    function Jn(CC) {
      let {
        controller: zC,
        lampLight: ZC
      } = CC;
      const QC = (0, Kw.f)(eQ, zC.getSnapshot()),
        wC = (0, Kw.f)(lQ, ZC.getSnapshot()),
        [bC, nC] = (0, vC.useState)("lamp"),
        {
          t: fC
        } = (0, hw.y)(),
        oC = aw();
      if (!QC.enabled) return null;
      const qC = "light" === bC && wC.enabled;
      return (0, Yw.jsx)(rw.c, {
        show: QC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: Aw()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", qC && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: oC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: fC("skyblockGame:keepersChairTitle")
              }), (0, Yw.jsx)("p", {
                children: fC(qC ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              ariaLabel: fC("skyblockGame:keepersChairClose"),
              onClick: zC.dismiss
            })]
          }), wC.enabled && (0, Yw.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((CC => (0, Yw.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === CC === qC,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === CC === qC ? "true" : void 0,
              className: Aw()("SkyblockKeepersChairTab", "light" === CC === qC && "Selected"),
              onClick: () => {
                nC(CC)
              },
              children: [fC("lamp" === CC ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === CC && (0, Yw.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: wC.balance
              })]
            }, CC)))
          }), qC ? (0, Yw.jsx)(Rn, {
            controller: ZC
          }) : (0, Yw.jsx)(In, {
            view: QC,
            controller: zC
          })]
        })
      })
    }

    function In(CC) {
      let {
        view: zC,
        controller: ZC
      } = CC;
      const {
        t: QC
      } = (0, hw.y)();
      return (0, Yw.jsxs)(Yw.Fragment, {
        children: [(0, Yw.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: zC.islands.map((CC => (0, Yw.jsx)(xn, {
            island: CC,
            view: zC,
            aim: ZC.aim
          }, CC.id)))
        }), null !== zC.almanac && (0, Yw.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: QC("skyblockGame:passageTitle")
          }), (0, Yw.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Yw.jsx)(Nn, {
              phase: zC.almanac.phase
            }), zC.almanac.phaseName]
          }), (0, Yw.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Yw.jsx)(Nn, {
              phase: zC.almanac.nextPhase
            }), zC.almanac.next]
          })]
        }), (0, Yw.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: QC("skyblockGame:keepersChairFavour")
          }), zC.aimed && (0, Yw.jsx)(sw.O, {
            className: "SkyblockKeepersChairRest",
            disabled: !zC.canAim,
            onClick: () => {
              ZC.aim(null)
            },
            children: QC("skyblockGame:keepersChairRest")
          })]
        }), null !== zC.status && (0, Yw.jsx)("p", {
          className: Aw()("SkyblockKeepersChairStatus", "refused" === zC.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: zC.status.text
        })]
      })
    }

    function vn(CC) {
      let {
        controller: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)(), QC = (0, Kw.f)(KQ, zC.getSnapshot());
      if (!QC.enabled) return null;
      const wC = QC.freshCount > 0 ? ZC("skyblockGame:reachLogOpenNews", {
        count: QC.freshCount
      }) : ZC("skyblockGame:reachLogOpen");
      return (0, Yw.jsx)(Jw.c, {
        placement: "statBars",
        children: (0, Yw.jsxs)("button", {
          type: "button",
          className: Aw()("SkyblockReachLogButton", QC.freshCount > 0 && "HasNews", QC.pending && "Pending"),
          "aria-label": wC,
          title: wC,
          onClick: zC.ask,
          children: [QC.news && (0, Yw.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${QC.newsToken}`), (0, Yw.jsx)("span", {
            className: Aw()("SkyblockReachLogIcon", QC.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Yw.jsx)(iw.e, {
              itemName: dQ,
              amount: 0
            })
          }, `icon:${QC.newsToken}`), QC.freshCount > 0 && (0, Yw.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: QC.freshCount
          })]
        })
      })
    }

    function en(CC) {
      let {
        gift: zC
      } = CC;
      return (0, Yw.jsx)("li", {
        className: Aw()("SkyblockRegularsGift", zC.given && "Given"),
        children: zC.text
      })
    }

    function hn(CC) {
      let {
        regular: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)();
      return (0, Yw.jsxs)("li", {
        className: Aw()("SkyblockRegularsCard", zC.tagged ? "Tagged" : "Untagged", zC.resting && "Resting"),
        children: [(0, Yw.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: zC.fishName,
            children: (0, Yw.jsx)(iw.e, {
              itemName: zC.itemName,
              amount: 0
            })
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Yw.jsx)("h3", {
              children: zC.name
            }), (0, Yw.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: zC.fishName
            })]
          })]
        }), (0, Yw.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: zC.line
        }), (0, Yw.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: zC.size
          }), zC.tagged && (0, Yw.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: zC.resting ? ZC("skyblockGame:regularsResting") : zC.meetings
          })]
        }), (0, Yw.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: zC.chance
        }), (0, Yw.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: zC.gifts.map((CC => (0, Yw.jsx)(en, {
            gift: CC
          }, CC.text)))
        }), zC.history.length > 0 && (0, Yw.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: zC.history.map(((CC, zC) => (0, Yw.jsx)("li", {
            children: CC
          }, zC)))
        })]
      })
    }

    function Kn(CC) {
      let {
        controller: zC,
        island: ZC
      } = CC;
      const {
        t: QC
      } = (0, hw.y)(), wC = (0, Kw.f)(Cw, zC.getSnapshot()), bC = wC.islands.find((CC => CC.id === ZC));
      if (!wC.enabled || void 0 === bC) return null;
      const nC = QC("skyblockGame:regularsOpen");
      return (0, Yw.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": nC,
        title: nC,
        onClick: () => {
          zC.openIsland(ZC)
        },
        children: [(0, Yw.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: QC("skyblockGame:regularsTitle")
        }), bC.regulars.map((CC => (0, Yw.jsx)("span", {
          className: Aw()("SkyblockRegularsStripIcon", CC.tagged && "Tagged"),
          title: CC.name,
          children: (0, Yw.jsx)(iw.e, {
            itemName: CC.itemName,
            amount: 0
          })
        }, CC.id)))]
      })
    }

    function Yn(CC) {
      var zC;
      let {
        controller: ZC
      } = CC;
      const QC = (0, Kw.f)(Cw, ZC.getSnapshot()),
        {
          t: wC
        } = (0, hw.y)(),
        bC = aw();
      if (!QC.enabled) return null;
      const nC = null !== (zC = QC.islands.find((CC => CC.id === QC.selected))) && void 0 !== zC ? zC : null;
      return (0, Yw.jsx)(rw.c, {
        show: QC.open,
        close: ZC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: bC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: wC("skyblockGame:regularsTitle")
              }), (0, Yw.jsx)("p", {
                children: wC("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              onClick: ZC.dismiss
            })]
          }), (0, Yw.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: QC.islands.map((CC => {
              const zC = CC.id === QC.selected;
              return (0, Yw.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": zC,
                "data-pad-tab": !0,
                "data-pad-selected": zC ? "true" : void 0,
                className: Aw()("SkyblockReachLogTab", `Island-${CC.id}`, zC && "Selected", CC.charm.given && "GoldPage"),
                onClick: () => {
                  ZC.selectIsland(CC.id)
                },
                children: (0, Yw.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: CC.name
                })
              }, CC.id)
            }))
          }), (0, Yw.jsxs)("div", {
            className: Aw()("SkyblockRegularsPage", null !== nC && `Island-${nC.id}`),
            role: "tabpanel",
            children: [(0, Yw.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: wC("skyblockGame:regularsHow")
            }), null !== nC && (0, Yw.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: nC.regulars.map((CC => (0, Yw.jsx)(hn, {
                regular: CC
              }, CC.id)))
            })]
          }), null !== nC && (0, Yw.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Yw.jsx)("span", {
              className: Aw()("SkyblockRegularsCharm", nC.charm.given && "Given"),
              children: nC.charm.text
            })
          })]
        })
      })
    }
    const dn = [{
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
      mn = Array.from({
        length: 6
      }, ((CC, zC) => ({
        "--x": `${(88*(.618034*zC%1)).toFixed(1)}%`,
        "--y": `${(10+37*zC%70).toFixed(1)}%`,
        "--size": 7 + zC % 3 * 3 + "rem",
        "--drift-x": 3 * (zC % 3 - 1) + "rem",
        "--drift-y": 2 * (zC % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + zC % 4 * 3 + "s",
        "--delay": 2.5 * -zC + "s"
      }))),
      Hn = Array.from({
        length: 14
      }, ((CC, zC) => ({
        "--left": `${(3+94*((.618034*zC+.3)%1)).toFixed(1)}%`,
        "--size": 4 + zC % 4 * 2 + "px",
        "--sway": zC % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*zC%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*zC%12).toFixed(2)}s`
      }))),
      En = (0, vC.memo)((function(CC) {
        let {
          island: zC
        } = CC;
        return (0, Yw.jsxs)("div", {
          className: Aw()("SkyblockReachLogDepths", null !== zC && `Island-${zC}`),
          "aria-hidden": "true",
          children: [dn.map(((CC, zC) => (0, Yw.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: CC
          }, `shaft${zC}`))), mn.map(((CC, zC) => (0, Yw.jsx)("span", {
            className: Aw()("SkyblockReachLogMote", zC % 2 === 1 && "Violet"),
            style: CC
          }, `mote${zC}`))), Hn.map(((CC, zC) => (0, Yw.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: CC
          }, `bubble${zC}`)))]
        })
      })),
      Xn = 100;

    function cn(CC) {
      let {
        view: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)();
      if (null === zC || 0 === zC.total) return null;
      const QC = Xn * zC.aspect,
        wC = ZC("skyblockGame:hiddenWatersCount", {
          found: zC.found,
          total: zC.total
        });
      return (0, Yw.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${ZC("skyblockGame:hiddenWatersTitle")}: ${wC}`,
        children: [(0, Yw.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${QC}`,
          "aria-hidden": "true",
          children: [zC.islands.map(((CC, zC) => (0, Yw.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (CC.left + CC.width / 2) * Xn,
            cy: (CC.top + CC.height / 2) * QC,
            rx: CC.width / 2 * Xn,
            ry: CC.height / 2 * QC
          }, zC))), zC.pins.map(((CC, zC) => (0, Yw.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: CC.left * Xn,
            cy: CC.top * QC,
            r: 13
          }, zC)))]
        }), (0, Yw.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: ZC("skyblockGame:hiddenWatersTitle")
          }), (0, Yw.jsx)("span", {
            className: zC.found === zC.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: wC
          })]
        })]
      })
    }

    function un(CC) {
      let {
        view: zC,
        island: ZC
      } = CC;
      const {
        t: QC
      } = (0, hw.y)(), wC = null === zC || void 0 === zC ? void 0 : zC.glimpses.get(ZC);
      return void 0 === wC || 0 === wC.length ? null : (0, Yw.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Yw.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: QC("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Yw.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: wC.map((CC => (0, Yw.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Yw.jsx)(iw.e, {
              itemName: CC,
              amount: 0
            })
          }, CC)))
        })]
      })
    }
    const rn = ["Bronze", "Silver", "Gold"],
      sn = [{
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
      Tn = sn.slice(0, 2);

    function an(CC) {
      return CC ? sn : Tn
    }

    function tn(CC) {
      let {
        fish: zC,
        letGoShown: ZC
      } = CC;
      const {
        t: QC
      } = (0, hw.y)();
      return (0, Yw.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [rn.map(((CC, ZC) => {
          const wC = ZC < zC.marks;
          return (0, Yw.jsx)("span", {
            className: Aw()("SkyblockReachLogPip", CC, wC && "Earned", wC && zC.fresh && ZC === zC.marks - 1 && "Newest"),
            title: QC(YQ[ZC])
          }, CC)
        })), (0, Yw.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), an(ZC).map(((CC, ZC) => (0, Yw.jsx)("span", {
          className: Aw()("SkyblockReachLogRibbon", CC.className, !0 === zC.ribbons[ZC] && "Earned"),
          title: QC(CC.titleKey)
        }, CC.className)))]
      })
    }

    function Dn(CC) {
      let {
        letGoShown: zC,
        haloShown: ZC
      } = CC;
      const {
        t: QC
      } = (0, hw.y)();
      return (0, Yw.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Yw.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: QC("skyblockGame:reachLogMarks"),
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), QC("skyblockGame:reachLogLegendMarks")]
        }), an(zC).map((CC => (0, Yw.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: QC(CC.titleKey),
          children: [(0, Yw.jsx)("span", {
            className: Aw()("SkyblockReachLogRibbon", CC.className, "Earned")
          }), QC(CC.legendKey)]
        }, CC.className))), (0, Yw.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: QC("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), QC("skyblockGame:reachLogLegendGlimmer")]
        }), ZC && (0, Yw.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: QC("skyblockGame:reachLogHaloTitle"),
          children: [(0, Yw.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), QC("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function jn(CC) {
      let {
        returner: zC
      } = CC;
      return (0, Yw.jsxs)("div", {
        className: Aw()("SkyblockReachLogReturner", zC.back && "Back"),
        children: [(0, Yw.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Yw.jsx)(iw.e, {
            itemName: zC.itemName,
            amount: 0
          })
        }), (0, Yw.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: zC.line
        })]
      })
    }

    function yn(CC) {
      let {
        fish: zC,
        letGoShown: ZC
      } = CC;
      const {
        t: QC
      } = (0, hw.y)();
      return (0, Yw.jsxs)("li", {
        className: Aw()("SkyblockReachLogCard", zC.caught ? "Caught" : "Unknown", zC.marks >= 3 && "GoldCard", zC.fresh && "Fresh", zC.visitor && "Visitor"),
        children: [zC.visitor && (0, Yw.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: QC("skyblockGame:reachLogVisitor")
        }), zC.fresh && Array.from({
          length: 4
        }, ((CC, zC) => (0, Yw.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, zC))), (0, Yw.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [zC.halo && (0, Yw.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: QC("skyblockGame:reachLogHaloTitle")
          }), (0, Yw.jsx)(iw.e, {
            itemName: zC.itemName,
            amount: 0
          }), zC.glimmer && (0, Yw.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: QC("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Yw.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: zC.name
        }), (0, Yw.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: zC.chance
        }), (0, Yw.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: zC.best
        }), (0, Yw.jsx)(tn, {
          fish: zC,
          letGoShown: ZC
        })]
      })
    }

    function Ln(CC) {
      let {
        page: zC,
        letGoShown: ZC,
        hiddenWaters: QC
      } = CC;
      const {
        t: wC
      } = (0, hw.y)();
      return zC.awake ? (0, Yw.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: zC.fish.map((CC => (0, Yw.jsx)(yn, {
          fish: CC,
          letGoShown: ZC
        }, CC.itemName)))
      }) : (0, Yw.jsxs)(Yw.Fragment, {
        children: [(0, Yw.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: wC("skyblockGame:reachLogAsleep")
        }), (0, Yw.jsx)(un, {
          view: QC,
          island: zC.id
        })]
      })
    }

    function Un(CC) {
      var zC, ZC;
      let {
        controller: QC,
        regulars: wC,
        hiddenWaters: bC
      } = CC;
      const nC = (0, Kw.f)(KQ, QC.getSnapshot()),
        fC = function(CC) {
          return (0, Kw.f)(bw, CC.getSnapshot())
        }(bC),
        oC = (0, Kw.f)(Cw, wC.getSnapshot()),
        {
          t: qC
        } = (0, hw.y)(),
        FC = aw();
      if (!nC.enabled) return null;
      const WC = null !== (zC = nC.pages.find((CC => CC.id === nC.selected))) && void 0 !== zC ? zC : null;
      return (0, Yw.jsx)(rw.c, {
        show: nC.open,
        close: QC.dismiss,
        togglePointerLock: !1,
        className: Aw()("SkyblockSkillsOverlay", oC.open && "SkyblockReachLogUnderLedger"),
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: FC,
          onKeyDown: Tw,
          children: [(0, Yw.jsx)(En, {
            island: null !== (ZC = null === WC || void 0 === WC ? void 0 : WC.id) && void 0 !== ZC ? ZC : null
          }), (0, Yw.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: qC("skyblockGame:reachLogTitle")
              }), (0, Yw.jsx)("p", {
                children: qC("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Yw.jsx)(cn, {
              view: fC
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              onClick: QC.dismiss
            })]
          }), (0, Yw.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: nC.pages.map((CC => {
              const zC = CC.id === nC.selected,
                ZC = CC.fish.some((CC => CC.fresh));
              return (0, Yw.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": zC,
                "data-pad-tab": !0,
                "data-pad-selected": zC ? "true" : void 0,
                className: Aw()("SkyblockReachLogTab", `Island-${CC.id}`, zC && "Selected", !CC.awake && "Asleep", CC.gold && "GoldPage", ZC && "HasNews"),
                onClick: () => {
                  QC.selectPage(CC.id)
                },
                children: [(0, Yw.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: CC.name
                }), CC.awake && (0, Yw.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: qC("skyblockGame:reachLogCaughtCount", {
                    caught: CC.caught,
                    total: CC.total
                  })
                })]
              }, CC.id)
            }))
          }), (0, Yw.jsxs)("div", {
            className: Aw()("SkyblockReachLogPage", null !== WC && `Island-${WC.id}`),
            role: "tabpanel",
            children: [null !== WC && (0, Yw.jsx)(Ln, {
              page: WC,
              letGoShown: nC.letGoShown,
              hiddenWaters: fC
            }), !0 === (null === WC || void 0 === WC ? void 0 : WC.awake) && null !== WC.returner && (0, Yw.jsx)(jn, {
              returner: WC.returner
            }), !0 === (null === WC || void 0 === WC ? void 0 : WC.awake) && (0, Yw.jsx)(Kn, {
              controller: wC,
              island: WC.id
            })]
          }), (0, Yw.jsx)("footer", {
            className: Aw()("SkyblockReachLogFooter", null !== WC && `Island-${WC.id}`, !0 === (null === WC || void 0 === WC ? void 0 : WC.gold) && "GoldPage"),
            children: !0 === (null === WC || void 0 === WC ? void 0 : WC.gold) ? (0, Yw.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: qC("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Yw.jsxs)(Yw.Fragment, {
              children: [(0, Yw.jsx)(Dn, {
                letGoShown: nC.letGoShown,
                haloShown: !0 === (null === WC || void 0 === WC ? void 0 : WC.fish.some((CC => CC.halo)))
              }), (0, Yw.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: qC("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Bn = ZC(4760);

    function On(CC) {
      let {
        conversation: zC,
        completedLabel: ZC
      } = CC;
      return (0, Yw.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Yw.jsxs)("header", {
          children: [(0, Yw.jsx)("h3", {
            children: zC.questName
          }), zC.completed && (0, Yw.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: ZC
          })]
        }), zC.lines.map((CC => (0, Yw.jsx)(Bn.c, {
          display: CC.display
        }, CC.key)))]
      })
    }

    function kn(CC) {
      let {
        controller: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)(), QC = (0, Kw.f)(fw, zC.getSnapshot()), wC = aw();
      if (!QC.enabled) return null;
      const bC = !QC.loading && 0 === QC.conversations.length;
      return (0, Yw.jsx)(rw.c, {
        show: QC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: wC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: ZC("skyblockDialogue:title")
              }), (0, Yw.jsx)("p", {
                children: ZC("skyblockDialogue:intro")
              })]
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              onClick: zC.dismiss
            })]
          }), (0, Yw.jsxs)("div", {
            className: Aw()("SkyblockDialogueBody", {
              SingleColumn: null !== QC.questFocus || 0 === QC.characters.length
            }),
            children: [null === QC.questFocus && QC.characters.length > 0 && (0, Yw.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: QC.characters.map((CC => (0, Yw.jsx)(sw.g, {
                className: Aw()("SkyblockDialogueCharacter", {
                  Selected: CC.selected
                }),
                onClick: () => {
                  zC.selectCharacter(CC.id)
                },
                children: (0, Yw.jsx)(vw.e, {
                  text: CC.styling
                })
              }, CC.id)))
            }), (0, Yw.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== QC.questFocus && (0, Yw.jsx)(sw.g, {
                className: "SkyblockDialogueBack",
                onClick: zC.showCharacters,
                children: ZC("skyblockDialogue:allCharacters")
              }), QC.loading && (0, Yw.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ZC("skyblockDialogue:loading")
              }), bC && (0, Yw.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ZC(null === QC.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), QC.conversations.map((CC => (0, Yw.jsx)(On, {
                conversation: CC,
                completedLabel: QC.completedLabel
              }, CC.questId)))]
            })]
          })]
        })
      })
    }

    function Vn(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(Nw, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = aw();
      return ZC.enabled ? (0, Yw.jsx)(rw.c, {
        show: ZC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: wC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: QC("skyblockGame:autographBook")
              }), (0, Yw.jsx)("p", {
                children: QC("skyblockGame:autographBookIntro")
              })]
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              onClick: zC.dismiss
            })]
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Yw.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Yw.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Yw.jsx)("strong", {
                  children: ZC.total
                }), (0, Yw.jsx)("span", {
                  children: QC("skyblockGame:autographTotal")
                })]
              }), (0, Yw.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Yw.jsx)("strong", {
                  children: ZC.rankTotal
                }), (0, Yw.jsx)("span", {
                  children: QC("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === ZC.entries.length ? (0, Yw.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: QC("skyblockGame:autographBookEmpty")
            }) : (0, Yw.jsx)("ul", {
              className: "SkyblockAutographList",
              children: ZC.entries.map((CC => (0, Yw.jsxs)("li", {
                className: Aw()("SkyblockAutograph", {
                  Ranked: null !== CC.rank
                }),
                style: null === CC.rank ? void 0 : {
                  color: CC.rank.colour
                },
                children: [null !== CC.rank && (0, Yw.jsx)(Mb.c, {
                  className: "SkyblockAutographRankIcon",
                  name: CC.rank.icon,
                  kit: (0, Mb.g)(CC.rank.icon)
                }), (0, Yw.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Yw.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: CC.name
                  }), (0, Yw.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== CC.rank && (0, Yw.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: CC.rank.label
                    }), (0, Yw.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: CC.signedOn
                    })]
                  })]
                })]
              }, CC.key)))
            })]
          })]
        })
      }) : null
    }
    const Cf = (0, vC.memo)((function(CC) {
        let {
          controller: zC
        } = CC;
        return (0, Yw.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: zC.display.mountWaypoint,
          children: [(0, Yw.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Yw.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Yw.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Yw.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Yw.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Yw.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      zf = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Zf(CC) {
      return "next" === CC.phase ? "\u2192" : zf[CC.kind]
    }
    const Qf = (0, vC.memo)((function(CC) {
      let {
        controller: zC,
        display: ZC
      } = CC;
      const QC = (0, Kw.f)(FZ, zC.getNotificationSnapshot()),
        [wC, bC] = (0, vC.useState)(!1);
      return (0, Kw.c)("qteStateUpdated", (CC => {
        bC(CC.isActive)
      })), (0, Yw.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (wC ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [QC && (0, Yw.jsxs)("div", {
          className: `SkyblockQuestNotification ${QC.kind} ${QC.phase}`,
          style: {
            "--quest-notification-duration": `${QC.durationMs}ms`,
            ...QC.accent && {
              "--quest-notification-accent": QC.accent
            }
          },
          children: [(0, Yw.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (QC.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Yw.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Zf(QC)
            }), QC.iconItem && (0, Yw.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Yw.jsx)(iw.e, {
                itemName: QC.iconItem,
                amount: 0
              })
            })]
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Yw.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: QC.title
            }), (0, Yw.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Yw.jsx)(nb.e, {
                text: QC.name
              })
            }), QC.description && (0, Yw.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Yw.jsx)(nb.e, {
                text: QC.description
              })
            }), QC.reward && (0, Yw.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Yw.jsx)(nb.e, {
                text: QC.reward
              })
            })]
          })]
        }, QC.token), (null === QC || void 0 === QC ? void 0 : QC.waypointNameKey) && (0, Yw.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": QC.waypointNameKey,
          "data-notification-token": QC.token,
          ref: ZC.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${QC.token}`)]
      })
    }));

    function wf(CC) {
      const zC = parseInt(CC.replace("#", ""), 16);
      return `${zC>>16&255}, ${zC>>8&255}, ${255&zC}`
    }
    const bf = (0, vC.memo)((function(CC) {
      let {
        controller: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)(), QC = (0, Kw.f)(cZ, zC.getSnapshot());
      if (!QC) return null;
      const wC = "arrival" === QC.phase;
      return (0, Yw.jsxs)("div", {
        className: Aw()("SkyblockPortalTransit", {
          Departure: !wC,
          Arrival: wC
        }),
        style: {
          "--portal-rgb": wf(QC.colour),
          "--portal-duration": `${QC.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Yw.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Yw.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            zC.finishArrival(QC.token)
          }
        }), (0, Yw.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Yw.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !wC && (0, Yw.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: ZC("skyblockGame:portalTransitHeading")
          }), (0, Yw.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: ZC(QC.zoneNameKey)
          })]
        })]
      }, QC.token)
    }));

    function nf() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function ff() {
      const CC = document.querySelector(".SkyblockHudCoins"),
        zC = null === CC || void 0 === CC ? void 0 : CC.getBoundingClientRect();
      return zC && zC.width > 0 ? {
        x: zC.left + Math.min(zC.width, 24) / 2,
        y: zC.top + zC.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function of(CC) {
      return {
        x: CC.left + CC.width / 2,
        y: CC.top + CC.height / 2
      }
    }

    function qf() {
      var CC;
      const zC = null === (CC = document.querySelector(".HotBar")) || void 0 === CC ? void 0 : CC.getBoundingClientRect();
      return zC && zC.width > 0 ? of(zC) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Ff(CC) {
      let {
        items: zC,
        origins: ZC,
        target: QC
      } = CC;
      return (0, Yw.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: zC.map(((CC, zC) => {
          const wC = ZC[zC];
          return (0, Yw.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${wC.x}px`,
              top: `${wC.y}px`,
              "--item-dx": QC.x - wC.x + "px",
              "--item-dy": QC.y - wC.y + "px",
              "--item-delay": 2e3 + 160 * zC + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Yw.jsx)(iw.e, {
              itemName: CC.dailyRewardItemName,
              amount: 0
            })
          }, CC.dailyRewardItemName)
        }))
      })
    }

    function Wf(CC, zC) {
      const ZC = -Math.PI / 2 + 1.25 * (CC / (zC - 1) * 2 - 1),
        QC = 70 + CC % 3 * 22;
      return {
        x: Math.cos(ZC) * QC,
        y: Math.sin(ZC) * QC * .7
      }
    }

    function Nf(CC) {
      let {
        origin: zC,
        target: ZC,
        count: QC
      } = CC;
      const wC = [];
      for (let bC = 0; bC < QC; bC++) {
        const CC = Wf(bC, QC);
        wC.push((0, Yw.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${zC.x}px`,
            top: `${zC.y}px`,
            "--coin-bx": `${CC.x}px`,
            "--coin-by": `${CC.y}px`,
            "--coin-dx": ZC.x - zC.x + "px",
            "--coin-dy": ZC.y - zC.y + "px",
            "--coin-delay": `${tZ(bC,QC)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Yw.jsx)(iw.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, bC))
      }
      return (0, Yw.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: wC
      })
    }

    function Mf(CC) {
      let {
        day: zC
      } = CC;
      const ZC = eC[zC - 1];
      return (0, Yw.jsxs)(Yw.Fragment, {
        children: [(0, Yw.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Yw.jsx)(iw.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, ew.e)(ZC.dailyRewardCoins)]
        }), ZC.dailyRewardItems.map((CC => (0, Yw.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Yw.jsx)(iw.e, {
            itemName: CC.dailyRewardItemName,
            amount: 0
          }), "\xd7", CC.dailyRewardItemAmount]
        }, CC.dailyRewardItemName)))]
      })
    }

    function gf(CC) {
      let {
        day: zC
      } = CC;
      const ZC = KC(zC);
      return (0, Yw.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: eC.map(((CC, QC) => {
          const wC = QC + 1;
          return (0, Yw.jsxs)("li", {
            className: Aw()("SkyblockDailyRewardTile", {
              Claimed: wC < zC && wC !== ZC,
              Today: wC === zC,
              Tomorrow: wC === ZC,
              Jackpot: wC === hC
            }),
            children: [(0, Yw.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: wC
            }), (0, Yw.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Yw.jsx)(iw.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, ew.e)(CC.dailyRewardCoins)]
            }), CC.dailyRewardItems.map((CC => (0, Yw.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Yw.jsx)(iw.e, {
                itemName: CC.dailyRewardItemName,
                amount: 0
              }), "\xd7", CC.dailyRewardItemAmount]
            }, CC.dailyRewardItemName)))]
          }, wC)
        }))
      })
    }

    function Sf(CC) {
      let {
        view: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)(), QC = (0, vC.useRef)(null), wC = (0, vC.useRef)(null), [bC, nC] = (0, vC.useState)(null);
      (0, vC.useLayoutEffect)((() => {
        var CC;
        const zC = null === (CC = QC.current) || void 0 === CC ? void 0 : CC.getBoundingClientRect();
        if (zC) {
          var ZC, bC;
          const CC = Array.from(null !== (ZC = null === (bC = wC.current) || void 0 === bC ? void 0 : bC.children) && void 0 !== ZC ? ZC : [], (CC => of(CC.getBoundingClientRect())));
          nC({
            origin: of(zC),
            target: ff(),
            itemOrigins: CC,
            itemTarget: qf()
          })
        }
      }), []);
      const fC = KC(zC.day),
        oC = function(CC, zC) {
          const [ZC, QC] = (0, vC.useState)((() => nf() ? CC : 0));
          return (0, vC.useEffect)((() => {
            if (nf()) return;
            const ZC = performance.now();
            let wC = 0;
            const bC = nC => {
              const fC = Math.min(Math.max((nC - ZC) / zC, 0), 1);
              QC(Math.round(CC * (1 - (1 - fC) ** 3))), fC < 1 && (wC = requestAnimationFrame(bC))
            };
            return wC = requestAnimationFrame(bC), () => {
              cancelAnimationFrame(wC)
            }
          }), [CC, zC]), ZC
        }(zC.coins, 450);
      return (0, Yw.jsxs)("div", {
        className: Aw()("SkyblockDailyReward", {
          Jackpot: zC.day === hC
        }),
        style: {
          "--daily-duration": `${zC.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Yw.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Yw.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Yw.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Yw.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: ZC("skyblockGame:dailyRewardTitle")
            }), (0, Yw.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: ZC("skyblockGame:dailyRewardDay", {
                day: String(zC.day)
              })
            })]
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: QC,
            children: [(0, Yw.jsx)(iw.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Yw.jsxs)("span", {
              children: ["+", (0, ew.e)(oC)]
            })]
          }), zC.items.length > 0 && (0, Yw.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: wC,
            children: zC.items.map((CC => (0, Yw.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Yw.jsx)(iw.e, {
                itemName: CC.dailyRewardItemName,
                amount: 0
              }), "\xd7", CC.dailyRewardItemAmount]
            }, CC.dailyRewardItemName)))
          }), (0, Yw.jsx)(gf, {
            day: zC.day
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [ZC("skyblockGame:dailyRewardComeBack"), (0, Yw.jsx)(Mf, {
              day: fC
            })]
          })]
        }), null !== bC && (0, Yw.jsx)(Nf, {
          origin: bC.origin,
          target: bC.target,
          count: zC.flyingCoins
        }), null !== bC && bC.itemOrigins.length === zC.items.length && (0, Yw.jsx)(Ff, {
          items: zC.items,
          origins: bC.itemOrigins,
          target: bC.itemTarget
        })]
      })
    }
    const pf = (0, vC.memo)((function(CC) {
        let {
          controller: zC
        } = CC;
        const ZC = (0, Kw.f)(sZ, zC.getSnapshot());
        return ZC ? (0, Yw.jsx)(Sf, {
          view: ZC
        }, ZC.token) : null
      })),
      Pf = "Gold Coin";

    function Gf(CC) {
      return 650 + 220 * CC
    }

    function Rf(CC) {
      return {
        "--letter-delay": `${Gf(CC)}ms`,
        "--letter-land": `${Gf(CC)+300}ms`
      }
    }

    function Af(CC) {
      let {
        letterCount: zC
      } = CC;
      return (0, Yw.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Yw.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Yw.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Yw.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: zC
        }, ((CC, zC) => (0, Yw.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Rf(zC),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, zC)))]
      })
    }

    function xf(CC) {
      var zC, ZC, QC;
      let {
        letter: wC,
        index: bC
      } = CC;
      const {
        t: nC
      } = (0, hw.y)(), fC = null !== (zC = null === (ZC = wC.items[0]) || void 0 === ZC ? void 0 : ZC.itemName) && void 0 !== zC ? zC : Pf;
      return (0, Yw.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Rf(bC),
        children: [(0, Yw.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Yw.jsx)(iw.e, {
            itemName: fC,
            amount: 0
          })
        }), (0, Yw.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: nC(wC.reasonKey, null !== (QC = wC.reasonParams) && void 0 !== QC ? QC : void 0)
        }), (0, Yw.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [wC.coins > 0 && (0, Yw.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Yw.jsx)(iw.e, {
              itemName: Pf,
              amount: 0
            }), "+", (0, ew.e)(wC.coins)]
          }), wC.items.map(((CC, zC) => (0, Yw.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Yw.jsx)(iw.e, {
              itemName: CC.itemName,
              amount: 0
            }), CC.label, " \xd7", CC.amount]
          }, zC)))]
        })]
      })
    }

    function Jf(CC) {
      let {
        view: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)();
      return (0, Yw.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${zC.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Gf(zC.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Yw.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Yw.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Yw.jsx)(Af, {
              letterCount: zC.letters.length
            }), (0, Yw.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: ZC("skyblockGame:mailboxTitle")
            })]
          }), (0, Yw.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: zC.letters.map(((CC, zC) => (0, Yw.jsx)(xf, {
              letter: CC,
              index: zC
            }, zC)))
          }), zC.more > 0 && (0, Yw.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: ZC("skyblockGame:mailboxMore", {
              count: String(zC.more)
            })
          })]
        })
      })
    }
    const If = (0, vC.memo)((function(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(jZ, zC.getSnapshot());
      return ZC ? (0, Yw.jsx)(Jf, {
        view: ZC
      }, ZC.token) : null
    }));

    function vf(CC) {
      let {
        controller: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)(), QC = (0, Kw.f)(cQ, zC.getSnapshot());
      if (null === QC) return null;
      const wC = QC.fullSet ? "empty" === QC.fuelState ? {
        text: ZC("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: ZC("skyblockGame:magmawardHudFullSet", {
          worn: String(QC.wornCount)
        }),
        tone: "partial"
      };
      return (0, Yw.jsx)(Jw.c, {
        placement: "statBars",
        children: (0, Yw.jsxs)("div", {
          className: Aw()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${QC.fuelState}`, {
            "SkyblockMagmawardHud-partial": !QC.fullSet,
            "SkyblockMagmawardHud-armed": QC.fullSet && "empty" !== QC.fuelState
          }),
          children: [null !== QC.flare && (0, Yw.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${QC.flare}`
          }, `flare:${QC.flareToken}`), (0, Yw.jsx)("div", {
            className: Aw()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: QC.setLit
            }),
            children: QC.pieces.map(((CC, zC) => (0, Yw.jsx)("div", {
              className: Aw()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: CC.worn,
                SkyblockMagmawardPieceJustWorn: CC.justWorn
              }),
              children: (0, Yw.jsx)(iw.e, {
                itemName: CC.itemName,
                amount: 0
              })
            }, `${zC}:${CC.wornToken}`)))
          }, `pieces:${QC.setLitToken}`), (0, Yw.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Yw.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Yw.jsxs)("div", {
              className: Aw()("SkyblockMagmawardFuelCounter", QC.pulse && `SkyblockMagmawardFuelCounter-${QC.pulse}`),
              children: [(0, Yw.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Yw.jsx)(iw.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Yw.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: QC.fuel
              })]
            }, `counter:${QC.pulseToken}`), "burn" === QC.pulse && (0, Yw.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${QC.pulseToken}`)]
          }), wC && (0, Yw.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${wC.tone} SmallTextBold`,
            children: wC.text
          })]
        })
      })
    }

    function ef(CC) {
      let {
        controller: zC
      } = CC;
      const {
        t: ZC,
        selectedLanguage: QC
      } = (0, hw.y)(), wC = (0, Kw.f)(rQ, zC.getSnapshot());
      return null === wC ? null : (0, Yw.jsx)(Jw.c, {
        placement: "statBars",
        children: (0, Yw.jsxs)("div", {
          className: Aw()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: wC.inRange
          }),
          style: {
            "--glowtide-colour": wC.colour
          },
          "aria-label": ZC("skyblockGame:glowtideChipLabel"),
          children: [(0, Yw.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), wC.inRange ? (0, Yw.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: ZC("skyblockGame:glowtideChipInRange")
          }, `call:${wC.inRangeToken}`) : (0, Yw.jsxs)(Yw.Fragment, {
            children: [(0, Yw.jsx)("div", {
              ref: zC.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Yw.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: ZC("skyblockGame:waypointDistance", {
                distance: JC(wC.distance, QC.code)
              })
            })]
          })]
        })
      })
    }

    function hf(CC) {
      let {
        controller: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)(), QC = (0, Kw.f)(TQ, zC.getSnapshot());
      return null === QC ? null : (0, Yw.jsx)(Jw.c, {
        placement: "statBars",
        children: (0, Yw.jsxs)("div", {
          className: Aw()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: QC.full
          }),
          "aria-label": ZC("skyblockGame:glowMeterLabel", {
            fill: String(QC.fill),
            HW: String(QC.HW)
          }),
          children: [QC.burst && (0, Yw.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${QC.burstToken}`), (0, Yw.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Yw.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${QC.ratio})`
              }
            }), QC.gained && (0, Yw.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${QC.gainToken}`), QC.full && Array.from({
              length: 5
            }, ((CC, zC) => (0, Yw.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, zC)))]
          }), QC.full && QC.rares.map((CC => (0, Yw.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Yw.jsx)(iw.e, {
              itemName: CC,
              amount: 0
            })
          }, CC))), QC.ready && (0, Yw.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Yw.jsx)("span", {
              children: ZC("skyblockGame:glowMeterReady")
            })
          }, `ready:${QC.fullToken}`)]
        })
      })
    }

    function Kf(CC) {
      let {
        controller: zC
      } = CC;
      const {
        t: ZC
      } = (0, hw.y)(), QC = (0, Kw.f)(tQ, zC.getSnapshot());
      if (null === QC) return null;
      const wC = "waiting" === QC.phase,
        bC = {
          animationDuration: `${QC.waitMs}ms`,
          animationDelay: -QC.elapsedMs + "ms"
        },
        nC = wC ? void 0 : {
          animationDuration: `${QC.waitMs}ms`
        };
      return (0, Yw.jsxs)("div", {
        className: wC ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [wC && (0, Yw.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((CC, zC) => (0, Yw.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, zC))), (0, Yw.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: bC
          }), (0, Yw.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Yw.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Yw.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: bC
            })]
          }), (0, Yw.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Yw.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: nC,
          children: ZC(QC.line)
        }, QC.lineIndex)]
      }, QC.token)
    }

    function Yf(CC) {
      let {
        chart: zC,
        showHere: ZC,
        className: QC
      } = CC;
      return (0, Yw.jsx)("div", {
        className: Aw()("SkyblockTideChartGrid", QC, null !== zC.pictureName && "Complete"),
        "aria-hidden": "true",
        children: zC.cells.map(((CC, QC) => {
          const wC = 0 !== (zC.pulseCells & 1 << QC),
            bC = zC.castCell === QC;
          return (0, Yw.jsx)("span", {
            className: Aw()("SkyblockTideChartCell", `Cell-${CC}`, wC && "Pulse", bC && "Cast", ZC && zC.hereCell === QC && "Here")
          }, `${QC}:${wC?`p${zC.pulseToken}`:""}:${bC?`c${zC.castToken}`:""}`)
        }))
      })
    }

    function df(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(jQ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = ZC.chip;
      if (!ZC.enabled || null === wC) return null;
      const bC = QC("skyblockGame:tideChartsChipLabel", {
        island: wC.islandName,
        lit: String(wC.lit),
        ink: String(wC.ink)
      });
      return (0, Yw.jsx)(Jw.c, {
        placement: "statBars",
        children: (0, Yw.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Aw()("SkyblockTideChartsChip", ZC.open && "Open", null !== wC.pictureName && "Complete"),
          "aria-label": bC,
          title: bC,
          onMouseDown: CC => {
            CC.preventDefault()
          },
          onClick: zC.toggle,
          children: [(0, Yw.jsx)(Yf, {
            chart: wC,
            showHere: !1,
            className: "Mini"
          }), (0, Yw.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [wC.lit, "/", wC.ink]
          })]
        })
      })
    }

    function mf(CC) {
      let {
        controller: zC
      } = CC;
      const ZC = (0, Kw.f)(jQ, zC.getSnapshot()),
        {
          t: QC
        } = (0, hw.y)(),
        wC = aw(),
        bC = ZC.card;
      return ZC.enabled && null !== bC ? (0, Yw.jsx)(rw.c, {
        show: ZC.open,
        close: zC.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Yw.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: wC,
          onKeyDown: Tw,
          children: [(0, Yw.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Yw.jsxs)("div", {
              children: [(0, Yw.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: QC("skyblockGame:tideChartsTitle")
              }), (0, Yw.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: QC("skyblockGame:tideChartsIntro")
              })]
            }), (0, Yw.jsx)(sw.k, {
              padIgnore: !0,
              ariaLabel: QC("skyblockGame:tideChartsClose"),
              onClick: zC.dismiss
            })]
          }), ZC.tabs.length > 1 && (0, Yw.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": QC("skyblockGame:tideChartsIslands"),
            children: ZC.tabs.map((CC => (0, Yw.jsx)("button", {
              type: "button",
              className: Aw()("SkyblockTideChartsTab", CC.selected && "Selected"),
              "aria-pressed": CC.selected,
              onClick: () => {
                zC.CM(CC.island)
              },
              children: CC.name
            }, CC.island)))
          }), (0, Yw.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Yw.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": bC.gridLabel,
              children: (0, Yw.jsx)(Yf, {
                chart: bC,
                showHere: !0,
                className: "Large"
              })
            }), (0, Yw.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Yw.jsx)("h3", {
                children: bC.islandName
              }), (0, Yw.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: bC.litText
              }), null === bC.pictureName ? (0, Yw.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: QC("skyblockGame:tideChartsPictureHidden")
              }) : (0, Yw.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: QC("skyblockGame:tideChartsPictureRevealed", {
                  picture: bC.pictureName
                })
              }, bC.pictureName), (0, Yw.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Yw.jsxs)("li", {
                  children: [(0, Yw.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), QC("skyblockGame:tideChartsLegendLit")]
                }), (0, Yw.jsxs)("li", {
                  children: [(0, Yw.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), QC("skyblockGame:tideChartsLegendClear")]
                }), null !== bC.hereCell && (0, Yw.jsxs)("li", {
                  children: [(0, Yw.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), QC("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Yw.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Yw.jsx)("span", {
                  children: ZC.turnsText
                }), (0, Yw.jsx)("span", {
                  children: ZC.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Hf(CC) {
      var zC;
      let {
        controller: ZC
      } = CC;
      const {
        selectedLanguage: QC
      } = (0, hw.y)(), wC = QC.code;
      (0, vC.useEffect)((() => {
        ZC.setTranslator(((CC, zC) => (0, hw.u)(wC, CC, zC)), wC, ((CC, zC) => (0, hw.r)(wC, CC, zC)))
      }), [ZC, wC]);
      const bC = (0, Kw.f)(NC, ZC.map.getSnapshot()),
        {
          openInGameMenuName: nC
        } = (0, xw.k)(["openInGameMenuName"]);
      return (0, Yw.jsxs)(Yw.Fragment, {
        children: [(0, Yw.jsx)(Qf, {
          controller: ZC.quests,
          display: ZC.navigation.display
        }), bC.enabled && !nC && (0, Yw.jsx)(Qb, {
          controller: ZC.navigation
        }), (0, Yw.jsx)(dw, {
          controller: ZC,
          minimap: bC.enabled && (null === (zC = bC.presentation) || void 0 === zC ? void 0 : zC.minimap) && (0, Yw.jsx)(Zb, {
            view: bC.presentation.minimap,
            navigation: ZC.navigation,
            controller: ZC.map
          }),
          children: (0, Yw.jsx)(Nb, {
            controller: ZC.quests,
            surface: "hud"
          })
        }), (0, Yw.jsx)(Cf, {
          controller: ZC.navigation
        }), (0, Yw.jsx)(bf, {
          controller: ZC.portalTransit
        }), (0, Yw.jsx)(pf, {
          controller: ZC.dailyReward
        }), (0, Yw.jsx)(If, {
          controller: ZC.mailbox
        }), (0, Yw.jsx)(vf, {
          controller: ZC.magmaward
        }), (0, Yw.jsx)(ef, {
          controller: ZC.glowtide
        }), (0, Yw.jsx)(Mn, {
          controller: ZC.passage
        }), (0, Yw.jsx)(df, {
          controller: ZC.tideCharts
        }), (0, Yw.jsx)(hf, {
          controller: ZC.glowMeter
        }), (0, Yw.jsx)(vn, {
          controller: ZC.reachLog
        }), (0, Yw.jsx)(Kf, {
          controller: ZC.hushWait
        }), (0, Yw.jsx)(An, {
          controller: ZC.lampLight
        }), (0, Yw.jsx)(wb, {
          controller: ZC.skills,
          surface: "hud"
        })]
      })
    }

    function Ef(CC) {
      let {
        controller: zC
      } = CC;
      return (0, Yw.jsxs)(Yw.Fragment, {
        children: [(0, Yw.jsx)(zb, {
          controller: zC.map,
          navigation: zC.navigation
        }), (0, Yw.jsx)(wb, {
          controller: zC.skills,
          surface: "menu"
        }), (0, Yw.jsx)(Nb, {
          controller: zC.quests,
          surface: "menu"
        }), (0, Yw.jsx)(yb, {
          controller: zC.dungeons
        }), (0, Yw.jsx)(Bb, {
          controller: zC.collections
        }), (0, Yw.jsx)(Vb, {
          controller: zC.questGraph
        }), (0, Yw.jsx)(wn, {
          controller: zC.forge
        }), (0, Yw.jsx)(Wn, {
          controller: zC.smuggler
        }), (0, Yw.jsx)(Jn, {
          controller: zC.keepersChair,
          lampLight: zC.lampLight
        }), (0, Yw.jsx)(Un, {
          controller: zC.reachLog,
          regulars: zC.regulars,
          hiddenWaters: zC.hiddenWaters
        }), (0, Yw.jsx)(Yn, {
          controller: zC.regulars
        }), (0, Yw.jsx)(Sn, {
          controller: zC.passage
        }), (0, Yw.jsx)(mf, {
          controller: zC.tideCharts
        }), (0, Yw.jsx)(kn, {
          controller: zC.dialogue
        }), (0, Yw.jsx)(Vn, {
          controller: zC.autographs
        })]
      })
    }
    var lf = ZC(36641);
    const Xf = CQ + fQ;

    function uf(CC, zC, ZC, QC, wC) {
      const bC = [],
        nC = [],
        fC = ZC => {
          const QC = CC.playSound(zC, ZC.sound, ZC.volume, ZC.rate);
          QC && (nC.push(QC), void 0 !== ZC.cutAfter && bC.push(setTimeout((() => {
            QC.fade(QC.getVolume(), 0, 300)
          }), ZC.cutAfter)))
        };
      for (const oC of function(CC, zC) {
          const ZC = [{
            sound: "rpgKnifeSlice1",
            beat: CQ,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: CQ,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: CQ,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: CQ,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: CQ,
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
            sound: (0, lf.g)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Xf + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, lf.g)("bigDrumSwish"),
            beat: Xf + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Xf + 60,
            lead: 180,
            volume: .5 + .06 * CC,
            rate: .82 + .07 * CC
          }];
          return CC >= 4 && ZC.push({
            sound: "exp_levelup",
            beat: Xf + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), zC && ZC.push({
            sound: "trumpetFlare",
            beat: Xf + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), ZC.push({
            sound: "harp_pling",
            beat: zQ,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), ZC
        }(ZC, QC)) wC ? bC.push(setTimeout((() => {
        fC(oC)
      }), Math.max(0, oC.beat - oC.lead / oC.rate))) : oC.beat !== CQ && "magicAccent2" !== oC.sound && "trumpetFlare" !== oC.sound || fC(oC);
      return () => {
        for (const CC of bC) clearTimeout(CC);
        for (const CC of nC) CC.fade(CC.getVolume(), 0, 120)
      }
    }
    class rf {
      constructor(CC) {
        this.deps = CC, this.pending = new Map, this.localHook = null
      }
      hookWaiting(CC, zC) {
        this.pending.delete(CC);
        const ZC = this.deps.now();
        if (null === zC) {
          var QC;
          if ((null === (QC = this.localHook) || void 0 === QC ? void 0 : QC.hookId) === CC) {
            const CC = ZC >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(CC)
          }
          return
        }
        const wC = ZC + zC;
        this.settle(CC, wC) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(CC, {
          untilMs: ZC + 1e3,
          biteAtMs: wC
        }))
      }
      getLocalHook() {
        var CC, zC;
        return null !== (CC = null === (zC = this.localHook) || void 0 === zC ? void 0 : zC.hookId) && void 0 !== CC ? CC : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const CC = this.deps.now();
        for (const [zC, {
            untilMs: ZC,
            biteAtMs: QC
          }] of this.pending)(this.settle(zC, QC) || CC > ZC) && this.pending.delete(zC)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(CC, zC) {
        const ZC = this.deps.getLineOwner(CC);
        if (null === ZC) return !1;
        if (!this.deps.isLocalPlayer(ZC)) return !0;
        if (this.localHook = {
            hookId: CC,
            biteAtMs: zC
          }, !this.deps.isHushWaiting()) {
          const [zC, ZC] = this.deps.getHookPosition(CC);
          this.deps.onCastLanded(zC, ZC)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var sf = ZC(4179);
    const Tf = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      af = {
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
    class tf {
      constructor(CC) {
        this.deps = CC, this.tell = null
      }
      receiveTell(CC) {
        let {
          biteTellTier: zC
        } = CC;
        this.tell = {
          tier: zC,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(CC) {
        const zC = this.tell;
        if (this.tell = null, !CC) return;
        const ZC = null !== zC && this.deps.now() - zC.atMs <= 3e3 ? zC.tier : 0;
        this.deps.vibrate(Tf[ZC])
      }
      burstAtHook() {
        const CC = this.tell,
          zC = this.deps.getLocalHookPosition();
        null === CC || CC.burst || null === zC || (CC.burst = !0, this.deps.playParticles(function(CC, zC) {
          let [ZC, QC, wC] = zC;
          const {
            count: bC,
            rise: nC,
            colour: fC
          } = af[CC], [oC, qC, FC] = fC;
          return {
            texture: "glint",
            pos1: [ZC - .3, QC, wC - .3],
            pos2: [ZC + .3, QC + .2, wC + .3],
            dir1: [-.6, nC, -.6],
            dir2: [.6, 1.4 * nC, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: bC,
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
              minColor: [oC, qC, FC, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [oC, qC, FC, 0],
              maxColor: [oC, qC, FC, 0]
            }],
            blendMode: sf.d.Add,
            hideDist: 48
          }
        }(CC.tier, zC)))
      }
    }
    var Df = ZC(1192),
      jf = ZC(1843),
      yf = ZC(38);

    function Lf(CC, zC) {
      return [{
        timeFraction: 0,
        minColor: [255 * CC[0], 255 * CC[1], 255 * CC[2], 1],
        maxColor: [255 * zC[0], 255 * zC[1], 255 * zC[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Uf = [0, 0, 0],
      Bf = {
        texture: "glint",
        mipmaps: !1,
        HW: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Uf,
        dir2: Uf,
        blendMode: sf.d.OneOne
      },
      Of = {
        ...Bf,
        colorGradients: Lf([1, .88, .38], [1, .65, .15])
      },
      kf = {
        ...Bf,
        colorGradients: Lf([.55, .95, 1], [.9, 1, 1])
      },
      Vf = [.5, .5, .5],
      Co = {
        texture: "glint",
        mipmaps: !1,
        HW: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Lf([1, .12, .12], [1, .35, .2]),
        blendMode: sf.d.OneOne
      };
    class zo {
      constructor() {
        this.drops = new Map
      }
      Ag(CC, zC) {
        if ("overflowFlash" === zC.kind) {
          const [ZC, QC, wC] = zC.position, bC = CC.createParticles(Co, {
            pos: [ZC, QC, wC],
            half: Vf
          });
          return bC.emit(18), void bC.stop()
        }
        this.drops.has(zC.itemId) || this.drops.set(zC.itemId, {
          owner: zC.owner,
          cosmetic: zC.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      ZN(CC) {
        if (0 === this.drops.size) return;
        const zC = performance.now(),
          ZC = CC.getCameraPosition();
        let QC = 0;
        for (const bC of this.drops.values()) null !== bC.particles && QC++;
        for (const [bC, nC] of this.drops) {
          const fC = CC.getPositionView(bC);
          if (null === fC) {
            var wC;
            if (nC.seen || zC - nC.markedAt > 5e3) null !== nC.particles && QC--, null === (wC = nC.particles) || void 0 === wC || wC.stop(), this.drops.delete(bC);
            continue
          }
          nC.cosmetic || !CC.isLocalPlayer(nC.owner) || nC.pickupDelayCleared || (CC.clearPickupDelay(bC), nC.pickupDelayCleared = !0);
          const oC = nC.lastPosition,
            qC = nC.seen && (fC[0] - oC[0]) ** 2 + (fC[1] - oC[1]) ** 2 + (fC[2] - oC[2]) ** 2 > 4e-4,
            FC = (fC[0] - ZC[0]) ** 2 + (fC[1] - ZC[1]) ** 2 + (fC[2] - ZC[2]) ** 2 < 2025;
          nC.seen = !0, oC[0] = fC[0], oC[1] = fC[1], oC[2] = fC[2], qC && (nC.lastMovingAt = zC), null !== nC.particles && (!FC || zC - nC.lastMovingAt > 500) && (nC.particles.stop(), nC.particles = null, QC--), qC && FC && null === nC.particles && QC < 32 && (nC.particles = CC.createParticles(nC.cosmetic ? kf : Of, {
            pos: fC
          }), QC++), null !== nC.particles && (nC.particles.moveTo(fC), nC.particles.setEmitRate(qC ? 12 : 0)), !qC && null === nC.particles && zC - Math.max(nC.lastMovingAt, nC.markedAt) > 2e3 && this.drops.delete(bC)
        }
      }
      dispose() {
        for (const zC of this.drops.values()) {
          var CC;
          null === (CC = zC.particles) || void 0 === CC || CC.stop()
        }
        this.drops.clear()
      }
    }
    var Zo = ZC(184);
    const Qo = Zo.f.Dp * Zo.f.playerEyeToHeightRatio;
    class wo {
      constructor(CC) {
        this.host = CC, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Ag(CC) {
        this.lava = CC, this.nextUpdateAt = 0
      }
      ZN() {
        var CC;
        const zC = this.host.now();
        if (zC < this.nextUpdateAt) return;
        this.nextUpdateAt = zC + 250;
        const ZC = this.host.playerPosition(),
          QC = ZC && this.findNearest([ZC[0], ZC[1] + Qo, ZC[2]]);
        if (!QC || QC.distance >= 40) return void this.stop();
        const wC = .5 * Math.min(1, (40 - QC.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(wC) : this.loop = this.host.play("lavaFlow", wC, QC.position, 40 + Qo, 9, !0), null === (CC = this.loop) || void 0 === CC || CC.setPosition(QC.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var CC;
        null === (CC = this.loop) || void 0 === CC || CC.stop(), this.loop = null
      }
      findNearest(CC) {
        let zC = -1,
          ZC = 1 / 0;
        for (let QC = 0; QC < this.lava.length; QC += 3) {
          const wC = this.lava[QC] - CC[0],
            bC = this.lava[QC + 1] - CC[1],
            nC = this.lava[QC + 2] - CC[2],
            fC = wC * wC + bC * bC + nC * nC;
          fC < ZC && (ZC = fC, zC = QC)
        }
        return zC < 0 ? null : {
          position: [this.lava[zC], this.lava[zC + 1], this.lava[zC + 2]],
          distance: Math.sqrt(ZC)
        }
      }
    }
    var bo = ZC(1815),
      no = ZC(38463);
    const fo = {
      "Grey Portal": "Gray"
    };
    for (const Mo of wC.sc) fo[`${Mo} Portal`] = Mo;
    const oo = Object.keys(fo),
      qo = Object.fromEntries(oo.map((CC => [CC, (0, wC.O)(wC.H[`${(0,wC.ke)(fo[CC])}Team`])])));
    Object.fromEntries(oo.map((CC => [CC, wC.H[`${(0,wC.ke)(fo[CC])}UiText`]])));
    class Fo {
      constructor(CC, zC) {
        this.presentation = CC, this.portal = zC, this.unlocked = void 0
      }
      Ag(CC) {
        const zC = !1 === this.unlocked && CC;
        this.unlocked = CC, this.ZN();
        const {
          min: ZC,
          max: QC,
          unlockedBlock: wC
        } = this.portal;
        if (zC && this.presentation.hasChunk(...ZC)) {
          const [CC, zC, bC] = qo[wC];
          this.presentation.playParticles({
            pos1: [...ZC],
            pos2: QC.map((CC => CC + 1)),
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
              minColor: [CC, zC, bC, 1],
              maxColor: [Math.min(255, CC + 55), Math.min(255, zC + 55), Math.min(255, bC + 90), 1]
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
      ZN() {
        var CC;
        const zC = this.unlocked ? this.portal.unlockedBlock : null !== (CC = this.portal.lockedBlock) && void 0 !== CC ? CC : "Light Gray Portal",
          {
            min: ZC,
            max: QC
          } = this.portal;
        for (let wC = ZC[0]; wC <= QC[0]; wC++)
          for (let CC = ZC[1]; CC <= QC[1]; CC++)
            for (let bC = ZC[2]; bC <= QC[2]; bC++) this.presentation.hasChunk(wC, CC, bC) && this.presentation.rG(wC, CC, bC) !== zC && this.presentation.TY(wC, CC, bC, zC)
      }
    }
    const Wo = {
        farming_1: {
          raises: CC => "NPC" === CC.type && "chef" === CC.variation,
          rise: .4
        },
        fishing_1: {
          raises: CC => "Draugr Warper" === CC.type,
          rise: .4
        }
      },
      No = (CC, zC, ZC, bC) => {
        let {
          localPlayerId: nC
        } = bC;
        const fC = new Gw({
          translate: (CC, zC) => (0, hw.u)(Df.h.get().getCurrentLanguageCode(), CC, zC),
          translateWithIcons: (CC, zC) => (0, hw.r)(Df.h.get().getCurrentLanguageCode(), CC, zC),
          setMenuOpen: CC => {
            CC ? (0, yC.u)() : (0, yC.h)()
          },
          dismissMenu: yC.k,
          publishSkills: CC => {
            LC.o.bp(bZ, CC, !0)
          },
          publishQuests: CC => {
            LC.o.bp(qZ, CC, !0)
          },
          publishQuestNotification: CC => {
            LC.o.bp(FZ, CC, !0)
          },
          publishDungeons: CC => {
            LC.o.bp(MZ, CC, !0)
          },
          publishCollections: CC => {
            LC.o.bp(lZ, CC, !0)
          },
          publishMap: CC => {
            LC.o.bp(NC, CC, !0)
          },
          publishHud: CC => {
            LC.o.bp(Sw, CC, !0)
          },
          publishPortalTransit: CC => {
            LC.o.bp(cZ, CC, !0)
          },
          isLoadingScreenUp: () => xw.b.get("loadingOverlayVisible"),
          publishDailyReward: CC => {
            LC.o.bp(sZ, CC, !0)
          },
          publishMailbox: CC => {
            LC.o.bp(jZ, CC, !0)
          },
          publishQuestGraph: CC => {
            LC.o.bp(LZ, CC, !0)
          },
          publishForge: CC => {
            LC.o.bp(gQ, CC, !0)
          },
          publishSmuggler: CC => {
            LC.o.bp(PQ, CC, !0)
          },
          publishKeepersChair: CC => {
            LC.o.bp(eQ, CC, !0)
          },
          publishReachLog: CC => {
            LC.o.bp(KQ, CC, !0)
          },
          publishLampLight: CC => {
            LC.o.bp(lQ, CC, !0)
          },
          publishMagmaward: CC => {
            LC.o.bp(cQ, CC, !0)
          },
          publishGlowtide: CC => {
            LC.o.bp(rQ, CC, !0)
          },
          publishGlowMeter: CC => {
            LC.o.bp(TQ, CC, !0)
          },
          publishHushWait: CC => {
            LC.o.bp(tQ, CC, !0)
          },
          publishPassage: CC => {
            LC.o.bp(AQ, CC, !0)
          },
          publishTideCharts: CC => {
            LC.o.bp(jQ, CC, !0)
          },
          publishRegulars: CC => {
            LC.o.bp(Cw, CC, !0)
          },
          publishHiddenWaters: CC => {
            LC.o.bp(bw, CC, !0)
          },
          publishDialogue: CC => {
            LC.o.bp(fw, CC, !0)
          },
          publishAutographs: CC => {
            LC.o.bp(Nw, CC, !0)
          },
          onDailyRewardStarted: CC => {
            mC.playSound(nC, CC.day === hC ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (CC, zC) => {
            mC.playSound(nC, "exp_collect", .35, 1 + .6 * CC / (zC - 1)), LC.o.bp(TZ, CC === zC - 1)
          },
          onDailyRewardItemLanded: CC => {
            mC.playSound(nC, "pickUp", .6, 1 + .15 * CC)
          },
          onMailboxStarted: () => {
            mC.playSound(nC, "rpgMetalClick", .6, 1), mC.playSound(nC, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            mC.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: yf.k,
          requestTracking: CC => {
            mC.sendCommand(`quests track ${CC}`)
          },
          requestDungeonEnter: (CC, zC) => {
            mC.sendCommand(`dungeonEnter ${CC} ${zC}`)
          },
          requestQuestJump: CC => {
            mC.sendCommand(`${EC} jump ${CC}`)
          },
          requestQuestArrive: (CC, zC) => {
            const ZC = `${EC} arrive ${CC}`;
            mC.sendCommand(zC ? `${ZC} complete` : ZC)
          },
          requestForge: CC => {
            let {
              blade: zC,
              guard: ZC,
              handle: QC
            } = CC;
            mC.sendCommand(`forge ${zC} ${ZC} ${QC}`)
          },
          requestDialogue: () => {
            mC.sendCommand("quests dialogue")
          },
          requestSmuggle: (CC, zC) => {
            mC.sendCommand(`smuggle ${CC} ${zC}`)
          },
          requestKeepersChairAim: CC => {
            mC.sendCommand(`keeperschair-aim ${CC}`)
          },
          requestReachLogOpen: () => {
            mC.sendCommand("reachlog-open")
          },
          requestLampLight: CC => {
            mC.sendCommand(`${CC}`)
          },
          requestTravel: CC => {
            mC.sendCommand(`map travel ${CC.kind} ${CC.id} ${CC.requestId}`)
          }
        });
        let oC, qC, FC, WC, MC, gC, SC, AC, xC, JC, IC, eC, KC;
        const dC = new zo;
        let mC, HC = null;
        const lC = Wo[null !== ZC && void 0 !== ZC ? ZC : ""],
          rC = (CC, zC) => {
            null !== lC && void 0 !== lC && lC.raises(zC) && mC.setNametagOffset(CC, lC.rise)
          },
          aC = new tf({
            getLocalHookPosition: () => {
              const CC = tC.getLocalHook();
              return null !== CC && mC.checkValid(CC) ? mC.yG(CC) : null
            },
            playParticles: CC => {
              mC.playParticleEffect(CC)
            },
            vibrate: CC => {
              UC.f.play("fishBite", CC)
            },
            now: () => performance.now()
          }),
          tC = new rf({
            getLineOwner: CC => mC.checkValid(CC) ? mC.getLineOwner(CC) : null,
            isLocalPlayer: CC => mC.isLocalPlayer(CC),
            getHookPosition: CC => {
              const [zC, , ZC] = mC.yG(CC);
              return [zC, ZC]
            },
            isHushWaiting: () => {
              var CC;
              return "waiting" === (null === (CC = fC.hushWait.getSnapshot()) || void 0 === CC ? void 0 : CC.phase)
            },
            onCastLanded: (CC, zC) => {
              fC.tideCharts.castLanded(CC, zC)
            },
            onLocalHookSettled: () => {
              aC.onLocalHookSettled()
            },
            onLocalWaitEnded: CC => {
              aC.onLocalWaitEnded(CC)
            },
            now: () => performance.now()
          }),
          BC = new wo({
            now: () => performance.now(),
            playerPosition: () => mC.checkValid(nC) ? mC.yG(nC) : null,
            play: (CC, zC, ZC, QC, wC, bC) => mC.playSound(nC, CC, zC, 1, {
              UQ: ZC,
              maxHearDist: QC,
              refDistance: wC
            }, bC)
          }),
          OC = new Map;
        let kC;
        return {
          onCreate: CC => {
            if (mC = CC, HC = new no.SkyblockEntityFacing(CC, lC ? rC : null), fC.portalTransit.resumeArrival(null !== ZC && void 0 !== ZC ? ZC : null), (null !== ZC && void 0 !== ZC ? ZC : QC) === QC) {
              let CC = -1 / 0;
              kC = LC.o.subscribe("toggleMenu", (zC => {
                const ZC = performance.now();
                "inventory|Workbench" !== zC || "cross_to_hub" !== fC.quests.getTrackedQuestId() || ZC - CC < 1e4 || (CC = ZC, mC.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [QC, wC] of Object.entries(null !== (zC = XC[null !== ZC && void 0 !== ZC ? ZC : ""]) && void 0 !== zC ? zC : {})) {
              var zC;
              OC.set(QC, new Fo({
                hasChunk: (zC, ZC, QC) => CC.isBlockInLoadedChunk(zC, ZC, QC),
                rG: (zC, ZC, QC) => CC.blockIdToBlockName(CC.getBlockId(zC, ZC, QC)),
                TY: (zC, ZC, QC, wC) => {
                  CC.TY(zC, ZC, QC, wC)
                },
                playParticles: zC => {
                  CC.playParticleEffect(zC)
                }
              }, wC))
            }
            KC = (0, bo.g)((CC => function(CC) {
              return Object.hasOwn(tz, CC) || CC.startsWith("npc_")
            }(CC) ? jz(CC) : null)), fC.resolveItemName = (zC, ZC) => {
              const QC = CC.getItemStat(nC, zC, "displayName");
              return QC && "object" === typeof QC && "translationKey" in QC ? ZC(QC.translationKey, (0, hw.q)(QC.params, jf.d.shown)) : "string" === typeof QC ? ZC(QC) : zC
            }, fC.quests.notifications.onShown = CC => {
              "quest" === CC ? mC.playSound(nC, "magicAccent1", 1, 1) : "skillLevel" === CC ? mC.playSound(nC, "magicAccent1", 1, .6) : "landmark" === CC ? mC.playSound(nC, "trumpetFlare", 1, .6) : "npcNote" === CC ? mC.playSound(nC, "magicAccent2", .8, 1.1) : "started" === CC ? mC.playSound(nC, (0, lf.g)("bigDrumSwish"), 1, 1) : mC.playSound(nC, (0, lf.g)("rpgHandleSmallLeather"), 1, 1)
            }, fC.forge.onPartSelected = () => {
              mC.playSound(nC, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, fC.forge.onOpened = () => {
              ! function(CC) {
                CC.preloadSounds([(0, lf.g)("firecracker"), "fireBurn", "magicAccent2"])
              }(CC)
            }, fC.forge.onForgeStarted = (zC, ZC, QC) => uf(CC, nC, zC, ZC, QC), fC.smuggler.onBought = () => {
              mC.playSound(nC, (0, lf.g)("rpgHandleSmallLeather"), 1, 1), mC.playSound(nC, "chestOpen", .6, 1)
            }, fC.compass.register(new pC(fC.map, !0)), fC.compass.register(new pC(fC.map, !1)), fC.compass.register(new GC(fC.map)), fC.compass.register(new RC((() => fC.quests.getSnapshot().compassTarget)));
            for (const ZC of ["enemy", "npc"]) fC.compass.register(new PC(fC.map, ZC, (zC => CC.checkValid(zC) ? CC.yG(zC) : void 0), (zC => CC.isAlive(zC))))
          },
          onAfterRender: (CC, zC) => {
            const ZC = mC.checkValid(nC) ? mC.yG(nC) : null;
            fC.navigation.afterRender(ZC, performance.now(), zC), fC.glowtide.afterRender(ZC, zC.cameraHeading), fC.tideCharts.afterRender(ZC), tC.afterRender()
          },
          onClose: () => {
            var CC, zC, ZC, QC, wC, bC, nC, NC, gC, pC, PC, GC, RC, iC, vC;
            kC && LC.o.unsubscribe(kC), null === (CC = KC) || void 0 === CC || CC(), dC.dispose(), BC.dispose(), null === (zC = HC) || void 0 === zC || zC.dispose(), tC.dispose(), fC.dispose(), null === (ZC = oC) || void 0 === ZC || ZC(), null === (QC = qC) || void 0 === QC || QC(), null === (wC = FC) || void 0 === wC || wC(), null === (bC = WC) || void 0 === bC || bC(), null === (nC = MC) || void 0 === nC || nC(), null === (NC = SC) || void 0 === NC || NC(), null === (gC = undefined) || void 0 === gC || gC(), null === (pC = AC) || void 0 === pC || pC(), null === (PC = xC) || void 0 === PC || PC(), null === (GC = JC) || void 0 === GC || GC(), null === (RC = IC) || void 0 === RC || RC(), null === (iC = undefined) || void 0 === iC || iC(), null === (vC = eC) || void 0 === vC || vC()
          },
          onPlayerChangeBlock: (CC, zC, QC, bC, oC, qC) => {
            if (CC === nC && "Air" === qC) {
              const CC = mC.getClientOption(nC, "creative");
              fC.skills.predictBlock([zC, QC, bC], oC, CC);
              const qC = function(CC, zC) {
                  if ("hub" === zC || "farming_1" === zC || "mining_1" === zC) return !sC.has(CC) || "hub" !== zC && "mining_1" !== zC ? Object.hasOwn(uC, CC) ? uC[CC] : void 0 : cC
                }(oC, ZC),
                FC = ("hub" === ZC || "mining_1" === ZC) && (wC._c.some((CC => CC === oC)) || Object.hasOwn(TC, oC) || "mining_1" === ZC && "Block of Coal" === oC);
              CC || void 0 === qC && !FC || mC.TY(zC, QC, bC, null !== qC && void 0 !== qC ? qC : cC)
            }
          },
          onPlayerAttackEntity: (CC, zC) => {
            if (CC !== nC || "Player" !== mC.getEntityType(zC)) return;
            const [ZC, QC, wC] = mC.yG(zC);
            mC.burstParticlePreset("critical", [ZC, QC + 1, wC], 10)
          },
          onChangeBlockFail: CC => {
            for (const {
                Xb: zC
              }
              of CC) fC.skills.rejectBlock(zC)
          },
          onReceivedMessageFromServer: (CC, zC) => {
            if ("skyblockGatedPortal" === CC) {
              var ZC;
              const [CC, QC] = zC;
              return void(null === (ZC = OC.get(CC)) || void 0 === ZC || ZC.Ag(QC))
            }
            if ("skyblockDailyReward" === CC) return void fC.dailyReward.Ag(zC);
            if ("skyblockMailbox" === CC) return void fC.mailbox.Ag(zC);
            if ("skyblockPortalTransit" === CC) return void fC.portalTransit.Ag(zC);
            if ("skyblockLoot" === CC) return void dC.Ag(mC, zC);
            if ("skyblockLava" === CC) return void BC.Ag(zC);
            if ("skyblockForge" === CC) return void fC.forge.Ag(zC);
            if ("skyblockMagmaward" === CC) return void fC.magmaward.Ag(zC);
            if ("skyblockGlowtide" === CC) return void fC.glowtide.Ag(zC);
            if ("skyblockGlowMeter" === CC) return void fC.glowMeter.Ag(zC);
            if ("skyblockHushWait" === CC) return void fC.hushWait.Ag(zC);
            if ("skyblockPassage" === CC) {
              const CC = zC;
              return fC.passage.Ag(CC), fC.reachLog.receivePassagePhase(CC.passagePhase), JC ??= (0, iC.v)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: fC.passage.show
              }), void fC.keepersChair.receivePassage({
                keepersChairPassagePhase: CC.passagePhase,
                keepersChairPassageNextPhase: CC.passageNextPhase,
                keepersChairPassageTurnsInMs: CC.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === CC) {
              const CC = zC;
              return fC.tideCharts.Ag(CC), void(CC.tideCharts.length > 0 && (IC ??= (0, iC.v)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: fC.tideCharts.show
              })))
            }
            if (CC === DC.B) {
              var QC;
              const {
                hookId: CC,
                waiting: ZC
              } = zC;
              return void tC.hookWaiting(CC, null !== (QC = null === ZC || void 0 === ZC ? void 0 : ZC.remainingMs) && void 0 !== QC ? QC : null)
            }
            if ("skyblockBiteTell" === CC) return void aC.receiveTell(zC);
            if ("skyblockSmuggler" === CC) return void fC.smuggler.Ag(zC);
            if ("skyblockKeepersChair" === CC) return fC.keepersChair.Ag(zC), void fC.lampLight.setAtChair(fC.keepersChair.isAtChair());
            if ("skyblockLampLight" === CC) {
              const CC = zC;
              var wC;
              if (fC.lampLight.Ag(CC), CC.lampLightReleasing) xC ??= (0, iC.v)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  fC.lampLight.setRelease(!1)
                }
              });
              else null === (wC = xC) || void 0 === wC || wC(), xC = void 0;
              return
            }
            if ("skyblockRegulars" === CC) return void fC.regulars.Ag(zC);
            if ("skyblockHiddenWaters" === CC) return void fC.hiddenWaters.Ag(zC);
            if ("skyblockReachLog" === CC) return fC.reachLog.Ag(zC), void(AC ??= (0, iC.v)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: dQ
              },
              onClick: fC.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === CC) {
              for (const [CC, ZC, QC, wC] of zC) mC.TY(CC, ZC, QC, wC);
              return
            }
            if ("skyblockHud" === CC) fC.receiveHud(zC);
            else if ("skyblockMap" === CC) fC.map.Ag(zC);
            else if (CC === jC.g) fC.skills.Ag(zC);
            else if (CC === YC && "dialogue" === zC.kind) fC.dialogue.Ag(zC);
            else if (CC === YC) fC.quests.Ag(zC);
            else if ("skyblockDungeons" === CC) fC.dungeons.Ag(zC);
            else if ("sbCollections" === CC) fC.collections.Ag(zC);
            else if ("skyblockQuestGraph" === CC) fC.questGraph.Ag(zC);
            else {
              if ("skyblockAutographs" !== CC) return;
              fC.autographs.Ag(zC)
            }
            if (!qC && fC.map.getSnapshot().enabled) {
              const CC = (0, iC.v)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: fC.map.show
                }),
                zC = (0, yC.y)(fC.map.show);
              qC = () => {
                CC(), zC()
              }
            }!FC && fC.skills.getSnapshot().enabled && (FC = (0, iC.v)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: fC.skills.show
            })), !SC && fC.collections.getSnapshot().enabled && (SC = (0, iC.v)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: fC.collections.show
            })), !WC && fC.quests.getSnapshot().enabled && (WC = (0, iC.v)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: fC.quests.show
            })), !eC && fC.autographs.getSnapshot().enabled && (eC = (0, iC.v)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: fC.autographs.show
            }));
            const bC = fC.dungeons.getSnapshot().enabled;
            var nC;
            (FC || WC || bC) && gC !== bC && (gC = bC, null === (nC = MC) || void 0 === nC || nC(), MC = (0, iC.v)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Hz
              },
              disabled: !bC,
              panel: !0,
              onClick: fC.dungeons.show
            }));
            oC || (oC = (0, yC.C)((0, vC.createElement)(Hf, {
              controller: fC
            }), {
              content: (0, vC.createElement)(Ef, {
                controller: fC
              }),
              onClose: fC.close
            }))
          },
          ZN: () => {
            var CC;
            for (const zC of OC.values()) zC.ZN();
            dC.ZN(mC), BC.ZN(), null === (CC = HC) || void 0 === CC || CC.ZN(), fC.skills.ZN(), fC.quests.ZN(), fC.dailyReward.ZN(), fC.mailbox.ZN(), fC.map.ZN()
          }
        }
      }
  },
  36247: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC,
      g: () => QC
    });
    const QC = "skyblockSkills",
      wC = "skills_test_gym"
  },
  34173: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC,
      e: () => nC
    });
    const QC = [{
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

    function wC(CC) {
      let zC, ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof CC) {
        if (!Number.isFinite(CC)) return "0";
        if (Math.abs(CC) < 100) {
          const zC = CC < 0 ? "-" : "",
            ZC = Math.abs(CC);
          return ZC >= 10 ? `${zC}${ZC.toFixed(1).replace(/\.0$/,"")}` : `${zC}${ZC.toFixed(2).replace(/\.?0+$/,"")}`
        }
        zC = BigInt(Math.floor(CC))
      } else zC = CC;
      const wC = zC < 0n ? -zC : zC,
        bC = zC < 0n ? "-" : "",
        nC = wC.toString();
      if (nC.length <= ZC) return `${bC}${nC}`;
      const fC = 3 * Math.floor((nC.length - 1) / 3);
      if (fC < 3) return `${bC}${nC}`;
      if (fC > 3 * QC.length) {
        const CC = nC[0],
          zC = nC.slice(1, 3).replace(/0+$/, "");
        return `${bC}${zC?`${CC}.${zC}`:CC}e${nC.length-1}`
      }
      const {
        threshold: oC,
        suffix: qC
      } = QC[QC.length - fC / 3], FC = wC / oC, WC = Number(1000n * (wC % oC) / oC), NC = Number(FC) + WC / 1e3;
      let MC;
      return MC = NC >= 100 ? Math.floor(NC).toString() : NC >= 10 ? NC.toFixed(1).replace(/\.0$/, "") : NC.toFixed(2).replace(/\.?0+$/, ""), `${bC}${MC}${qC}`
    }
    const bC = QC.map((CC => {
      let {
        threshold: zC,
        suffix: ZC
      } = CC;
      return {
        threshold: Number(zC),
        suffix: ZC
      }
    })).filter((CC => {
      let {
        threshold: zC
      } = CC;
      return Number.isFinite(zC)
    }));

    function nC(CC) {
      const zC = Math.abs(CC),
        ZC = CC < 0 ? "-" : "";
      for (const {
          threshold: QC,
          suffix: wC
        }
        of bC)
        if (zC >= QC) {
          const CC = zC / QC;
          if (CC >= 1e3) return `${ZC}${zC.toExponential(2).replace("e+","e")}`;
          let bC;
          return bC = CC >= 100 ? Math.floor(CC).toString() : CC >= 10 ? CC.toFixed(1).replace(/\.0$/, "") : CC.toFixed(2).replace(/\.?0+$/, ""), `${ZC}${bC}${wC}`
        } return `${ZC}${zC}`
    }
  },
  38389: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38394: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38398: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38401: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38403: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38406: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38413: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38420: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38428: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38430: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38435: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38440: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38447: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38450: (CC, zC, ZC) => {
    CC.exports = ZC.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18475: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20522: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22876: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24475: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26191: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26209: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38373: CC => {
    CC.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);