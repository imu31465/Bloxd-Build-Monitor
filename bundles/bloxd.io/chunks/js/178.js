export const id = 178;
export const ids = [45, 178];
export const modules = {
  37538: (JJ, cJ, ZJ) => {
    var FJ = {
      "./combat_1.png": 37544,
      "./dungeon_crumbling_crypt.png": 37551,
      "./dungeon_frozen_hollow.png": 37560,
      "./dungeon_wildwood_grove.png": 37565,
      "./dungeons.png": 37573,
      "./farming_1.png": 37581,
      "./fishing_1.png": 37586,
      "./hub.png": 37590,
      "./island.png": 37595,
      "./mining_1.png": 37602,
      "./mining_1_bridge.png": 37606,
      "./mining_1_gallery.png": 37613,
      "./mining_1_hollow.png": 37617,
      "./mining_1_village.png": 37619
    };

    function UJ(JJ) {
      var cJ = eJ(JJ);
      return ZJ(cJ)
    }

    function eJ(JJ) {
      if (!ZJ.o(FJ, JJ)) {
        var cJ = new Error("Cannot find module '" + JJ + "'");
        throw cJ.code = "MODULE_NOT_FOUND", cJ
      }
      return FJ[JJ]
    }
    UJ.keys = function() {
      return Object.keys(FJ)
    }, UJ.resolve = eJ, JJ.exports = UJ, UJ.id = 37538
  },
  37623: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      c: () => eJ
    });
    const FJ = new WeakMap;

    function UJ(JJ, cJ) {
      return FJ.set(JJ, cJ), JJ
    }

    function eJ(JJ) {
      var cJ;
      return null !== (cJ = FJ.get(JJ)) && void 0 !== cJ ? cJ : null
    }
  },
  37517: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ, ZJ) {
      var FJ;
      const {
        width: UJ,
        height: eJ
      } = ZJ, XJ = null !== (FJ = JJ.text) && void 0 !== FJ ? FJ : JJ, AJ = (XJ.x / 100 - .5) * UJ, qJ = (XJ.y / 100 - .5) * eJ, jJ = UJ / 2 - cJ.x;
      if (null !== JJ.text && Math.abs(AJ) <= jJ && qJ >= cJ.top - eJ / 2 && qJ <= eJ / 2 - cJ.bottom) return {
        x: XJ.x,
        y: XJ.y
      };
      const YJ = Math.min(0 === AJ ? 1 / 0 : jJ / Math.abs(AJ), qJ > 0 ? (eJ / 2 - cJ.bottom) / qJ : qJ < 0 ? (cJ.top - eJ / 2) / qJ : 1 / 0);
      return !Number.isFinite(YJ) || YJ < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + AJ * YJ / UJ * 100,
        y: 50 + qJ * YJ / eJ * 100
      }
    }
    ZJ.d(cJ, {
      c: () => FJ
    })
  },
  37529: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => XJ
    });
    const FJ = 4,
      UJ = 12e3,
      eJ = 1e3;
    class XJ {
      constructor() {
        let {
          limit: JJ = FJ,
          windowMs: cJ = UJ,
          spacingMs: ZJ = eJ,
          now: XJ = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = JJ, this.windowMs = cJ, this.spacingMs = ZJ, this.now = XJ
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const JJ of this.priority) JJ.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const JJ = this.now();
        this.sent.push(JJ), this.lastSentAt = JJ, this.schedule(), this.notify()
      }
      addPriority(JJ) {
        return this.priority.add(JJ), () => {
          this.priority.delete(JJ)
        }
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const JJ of this.priority)
          if (JJ.waiting()) return !0;
        return !1
      }
      prune() {
        const JJ = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= JJ;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const JJ = this.now(),
          cJ = this.lastSentAt + this.spacingMs,
          ZJ = Math.min(cJ > JJ ? cJ : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ZJ !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ZJ - JJ)))
      }
      notify() {
        for (const JJ of this.listeners) JJ()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37515: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ
    });
    class FJ {
      constructor(JJ, cJ, ZJ) {
        this.Uf = JJ, this.beforeOpen = cJ, this.afterClose = ZJ, this.open = !1, this.xn = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.xn && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(JJ) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(JJ)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.xn = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.xn || (this.snapshot = this.buildSnapshot(), this.Uf(this.snapshot))
      }
    }
  },
  37626: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      SkyblockEntityFacing: () => AJ,
      needsSkyblockEntityFacing: () => XJ
    });
    var FJ = ZJ(37524),
      UJ = ZJ(3726),
      eJ = ZJ(37633);

    function XJ(JJ, cJ) {
      if (JJ.metaInfo === FJ.n || "Iron Guardian" === JJ.type || "Gold Guardian" === JJ.type) return !0;
      if ("Pig" === JJ.type) return "sitting" === JJ.pose;
      if ("Person" !== JJ.meshKind || void 0 === JJ.meshOpts) return !1;
      let ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.get(JJ.meshOpts);
      if (void 0 === ZJ) {
        var eJ, XJ;
        const FJ = (0, UJ.i)(JJ);
        ZJ = !1, "pig_napoleon" === (null === FJ || void 0 === FJ || null === (eJ = FJ.opts.textures) || void 0 === eJ ? void 0 : eJ.head) ? ZJ = !0 : "npc_pig_head" === (null === FJ || void 0 === FJ || null === (XJ = FJ.opts.textures) || void 0 === XJ ? void 0 : XJ.head) && (ZJ = "sitting" === FJ.opts.pose || "sitting"), cJ && (cJ.size >= 256 && cJ.clear(), cJ.set(JJ.meshOpts, ZJ))
      }
      return "sitting" === ZJ ? "sitting" === JJ.pose : ZJ
    }(0, eJ.g)("skyblock", ((JJ, cJ) => {
      cJ.setFacingTolerance(XJ(JJ) ? 0 : null)
    }));
    class AJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = JJ, this.alsoVisit = cJ, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = JJ => {
          var cJ;
          const ZJ = this.api.getEntityInfo(JJ);
          ZJ && (XJ(ZJ, this.meshFacingCache) && (this.api.setFacingTolerance(JJ, 0), this.nextFacing.add(JJ)), null === (cJ = this.alsoVisit) || void 0 === cJ || cJ.call(this, JJ, ZJ))
        }
      }
      Hh() {
        const {
          api: JJ
        } = this, cJ = this.nextFacing;
        JJ.forEachEntity(this.visit);
        for (const ZJ of this.facing) cJ.has(ZJ) || JJ.setFacingTolerance(ZJ, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = cJ
      }
      dispose() {
        for (const JJ of this.facing) this.api.setFacingTolerance(JJ, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37508: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => Uq
    });
    const FJ = "island";
    var UJ = ZJ(235);
    const eJ = (0, UJ.vb)([0, 0, -1]),
      XJ = [{
        name: "S",
        bearing: (0, UJ.vb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, UJ.vb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: eJ
      }, {
        name: "W",
        bearing: (0, UJ.vb)([1, 0, 0])
      }];

    function AJ(JJ, cJ, ZJ) {
      return [100 * (ZJ.mapMaxX - JJ) / (ZJ.mapMaxX - ZJ.mapMinX), 100 * (cJ - ZJ.mapMinZ) / (ZJ.mapMaxZ - ZJ.mapMinZ)]
    }

    function qJ(JJ, cJ, ZJ) {
      const UJ = "local" === cJ,
        eJ = JJ.background,
        XJ = cJ => eJ ? AJ(cJ[0] - JJ.mapOrigin[0], cJ[2] - JJ.mapOrigin[2], eJ.bounds) : [50, 50],
        qJ = (JJ.insideDungeon ? [] : JJ.landmarks).map((JJ => {
          var cJ, FJ;
          return {
            id: JJ.id,
            name: ZJ(JJ.visited && JJ.nameKey ? null !== (cJ = JJ.mapLabelKey) && void 0 !== cJ ? cJ : JJ.nameKey : "skyblockGame:mapUnknown"),
            icon: JJ.visited && null !== (FJ = JJ.icon) && void 0 !== FJ ? FJ : "unknown",
            visited: JJ.visited,
            current: !1,
            position: XJ(JJ.position),
            travelKind: "landmark",
            travelId: JJ.id
          }
        })),
        YJ = JJ.zones.map((cJ => {
          var FJ;
          return {
            id: cJ.id,
            name: ZJ(cJ.visited && cJ.nameKey ? cJ.nameKey : "skyblockGame:mapUnknown"),
            icon: cJ.visited && null !== (FJ = cJ.icon) && void 0 !== FJ ? FJ : "unknown",
            visited: cJ.visited,
            current: cJ.id === JJ.zoneId,
            position: cJ.position,
            thumbnail: cJ.visited ? cJ.id : void 0,
            travelKind: "zone",
            travelId: cJ.id
          }
        })),
        hJ = JJ.insideDungeon || !eJ ? [] : JJ.portals.map((JJ => {
          var cJ;
          return {
            id: JJ.id,
            name: ZJ(null !== (cJ = JJ.nameKey) && void 0 !== cJ ? cJ : "skyblockGame:mapUnknown"),
            icon: JJ.visited ? "dungeons" === JJ.destination ? "portal_orange" : "portal" : "unknown",
            visited: JJ.visited,
            current: !1,
            position: XJ(JJ.position),
            colour: JJ.colour,
            travelKind: "zone",
            travelId: JJ.destination
          }
        })),
        DJ = UJ ? qJ : YJ,
        sJ = DJ.filter((JJ => JJ.visited)).length,
        nJ = eJ ? (eJ.bounds.mapMaxX - eJ.bounds.mapMinX) / (eJ.bounds.mapMaxZ - eJ.bounds.mapMinZ) : 2,
        GJ = eJ ? JSON.stringify([eJ.bounds, JJ.mapOrigin]) : "";
      return {
        local: UJ,
        points: DJ,
        portals: UJ ? hJ : [],
        progress: DJ.length ? ZJ("skyblockGame:mapDiscovered", {
          current: String(sJ),
          total: String(DJ.length)
        }) : null,
        percent: DJ.length ? 100 * sJ / DJ.length : 0,
        canTravel: [...DJ, ...UJ ? hJ : []].some((JJ => JJ.visited && !JJ.current)),
        noLandmarks: UJ && !JJ.insideDungeon && 0 === qJ.length,
        background: eJ ? {
          imageKey: eJ.imageKey,
          fallbackImageKey: JJ.zoneId,
          geometryKey: GJ,
          label: ZJ(eJ.labelKey),
          colour: eJ.backgroundColour,
          ratio: nJ
        } : null,
        connections: jJ(JJ.zones),
        minimap: eJ ? {
          imageKey: eJ.imageKey,
          fallbackImageKey: JJ.zoneId,
          geometryKey: GJ,
          label: ZJ(eJ.labelKey),
          colour: eJ.backgroundColour,
          caption: ZJ(JJ.zoneId === FJ ? "skyblockGame:zoneIsland" : eJ.labelKey),
          width: (eJ.bounds.mapMaxX - eJ.bounds.mapMinX) / eJ.minimapSpan * 100 + "%",
          height: (eJ.bounds.mapMaxZ - eJ.bounds.mapMinZ) / eJ.minimapSpan * 100 + "%",
          markers: [...qJ, ...hJ]
        } : null
      }
    }

    function jJ(JJ) {
      const cJ = new Set;
      return JJ.flatMap((ZJ => ZJ.connections.flatMap((FJ => {
        const UJ = JJ.find((JJ => JJ.id === FJ)),
          eJ = [ZJ.id, FJ].sort().join("|");
        return !UJ || cJ.has(eJ) ? [] : (cJ.add(eJ), [{
          id: `${ZJ.id}-${FJ}`,
          start: ZJ.position,
          end: UJ.position,
          explored: ZJ.visited && UJ.visited
        }])
      }))))
    }
    var YJ = ZJ(37515);
    class hJ extends YJ.b {}
    const DJ = "skyblockMapView";
    class sJ extends hJ {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(JJ, FJ, UJ), this.requestTravel = cJ, this.translate = ZJ, this.now = eJ, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = JJ => {
          this.tab = JJ, this.feedbackKey = "", this.emit()
        }, this.travel = (JJ, cJ) => {
          if (!this.map || this.pending || this.xn) return;
          const ZJ = ("zone" === JJ ? this.map.zones : this.map.landmarks).find((JJ => JJ.id === cJ));
          if (ZJ) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in ZJ && !ZJ.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (ZJ.visited)
              if ("zone" === JJ && cJ === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const ZJ = ++this.nextRequestId;
                this.pending = {
                  requestId: ZJ,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: JJ,
                  id: cJ,
                  requestId: ZJ
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
      setTranslator(JJ) {
        this.translate = JJ, this.emit()
      }
      Qn(JJ) {
        var cJ;
        if (!this.xn)
          if ("entities" !== JJ.kind)
            if ("open" !== JJ.kind) {
              var ZJ, FJ;
              if ("snapshot" === JJ.kind)(null === (ZJ = JJ.snapshot) || void 0 === ZJ ? void 0 : ZJ.zoneId) !== (null === (FJ = this.map) || void 0 === FJ ? void 0 : FJ.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = JJ.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === JJ.kind) {
                var UJ;
                JJ.requestId === (null === (UJ = this.pending) || void 0 === UJ ? void 0 : UJ.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (JJ.requestId === (null === (cJ = this.pending) || void 0 === cJ ? void 0 : cJ.requestId)) {
                var eJ;
                this.pending = null, this.feedbackKey = null !== (eJ = JJ.errorKey) && void 0 !== eJ ? eJ : "", null === JJ.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = JJ.entities
      }
      Hh() {
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
          presentation: this.map ? qJ(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const nJ = 67.5 * Math.PI / 180;

    function GJ(JJ, cJ) {
      const ZJ = Math.abs(JJ);
      if (ZJ > nJ || cJ.trackHalfWidth <= 0) return null;
      const FJ = cJ.trackHalfWidth,
        UJ = cJ.screenHalfWidth / (cJ.tanHalfFovX * Math.max(.5, Math.cos(cJ.pitch))),
        eJ = Math.min(Math.atan(.6 * FJ / UJ), .75 * nJ),
        XJ = UJ * Math.tan(eJ);
      let AJ;
      if (ZJ <= eJ) AJ = UJ * Math.tan(ZJ);
      else {
        const JJ = nJ - eJ,
          cJ = Math.max(0, UJ * JJ / (Math.cos(eJ) ** 2 * (FJ - XJ)) - 1),
          qJ = (ZJ - eJ) / JJ;
        AJ = XJ + (FJ - XJ) * (1 + cJ) * qJ / (1 + cJ * qJ)
      }
      return 50 + Math.sign(JJ) * AJ * 50 / FJ
    }
    class fJ {
      constructor(JJ, cJ) {
        this.map = JJ, this.visited = cJ, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = cJ ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const JJ = this.map.getSnapshot().map;
        return !JJ || JJ.insideDungeon ? [] : JJ.landmarks.filter((JJ => JJ.visited === this.visited)).map((JJ => {
          var cJ, ZJ;
          return {
            id: `landmark:${JJ.id}`,
            position: JJ.position,
            icon: null !== (cJ = JJ.icon) && void 0 !== cJ ? cJ : "unknown",
            nameKey: null !== (ZJ = JJ.nameKey) && void 0 !== ZJ ? ZJ : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class xJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.map = JJ, this.kind = cJ, this.position = ZJ, this.alive = FJ, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = cJ, this.range = "enemy" === cJ ? 48 : 64, this.limit = 12
      }
      Om(JJ) {
        if ("enemy" !== this.kind || this.alive(JJ.mc)) return this.position(JJ.mc)
      }
      getPoints() {
        const JJ = [];
        for (const FJ of this.map.getEntities()) {
          if (FJ.kind !== this.kind || "enemy" === this.kind && !this.alive(FJ.compassEntityId)) continue;
          const UJ = this.position(FJ.compassEntityId);
          var cJ, ZJ;
          if (UJ) JJ.push({
            id: `${this.kind}:${FJ.compassEntityId}`,
            mc: FJ.compassEntityId,
            kind: this.kind,
            icon: null !== (cJ = FJ.icon) && void 0 !== cJ ? cJ : FJ.npcSkin ? `npc_${FJ.npcSkin}` : this.kind,
            displayName: FJ.displayName,
            position: UJ,
            nameKey: null !== (ZJ = FJ.nameKey) && void 0 !== ZJ ? ZJ : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return JJ
      }
    }
    class rJ {
      constructor(JJ) {
        this.map = JJ, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const JJ = this.map.getSnapshot().map;
        return !JJ || JJ.insideDungeon ? [] : JJ.portals.map((JJ => {
          var cJ;
          return {
            id: "portal:" + JJ.id,
            kind: "portal",
            position: JJ.position,
            nameKey: null !== (cJ = JJ.nameKey) && void 0 !== cJ ? cJ : "skyblockGame:compassUnvisitedZone",
            icon: JJ.visited ? "dungeons" === JJ.destination ? "portal_orange" : "portal" : "unknown",
            colour: JJ.colour
          }
        }))
      }
    }
    class vJ {
      constructor(JJ) {
        this.target = JJ, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const JJ = this.target();
        return JJ ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: JJ.position,
          nameKey: JJ.nameKey
        }] : []
      }
    }

    function mJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ.position;
      const eJ = FJ[0] - cJ[0],
        XJ = FJ[2] - cJ[2];
      return {
        ...JJ,
        position: FJ,
        offset: UJ.c.computeShortestRotation(ZJ, (0, UJ.vb)([eJ, 0, XJ])),
        distance: Math.hypot(eJ, FJ[1] - cJ[1], XJ)
      }
    }
    let QJ;

    function EJ(JJ, cJ) {
      var ZJ;
      return (null === (ZJ = QJ) || void 0 === ZJ ? void 0 : ZJ.locale) !== cJ && (QJ = {
        locale: cJ,
        near: new Intl.NumberFormat(cJ, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(cJ, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (JJ < 10 ? QJ.near : QJ.far).format(JJ)
    }
    class VJ {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(JJ) {
        return this.providers.set(JJ.id, JJ), this.refreshAt = 0, () => {
          this.providers.get(JJ.id) === JJ && (this.providers.delete(JJ.id), this.refreshAt = 0)
        }
      }
      frame(JJ, cJ, ZJ) {
        if (ZJ >= this.refreshAt) {
          this.refreshAt = ZJ + 200, this.candidates = [];
          for (const cJ of this.providers.values()) {
            if (!cJ.enabled) continue;
            const ZJ = cJ.getPoints().map((cJ => {
              const ZJ = cJ.position;
              return {
                point: cJ,
                distance: Math.hypot(ZJ[0] - JJ[0], ZJ[1] - JJ[1], ZJ[2] - JJ[2])
              }
            })).filter((JJ => JJ.distance <= cJ.range)).sort(((JJ, cJ) => JJ.distance - cJ.distance)).slice(0, cJ.limit);
            for (const {
                point: JJ
              }
              of ZJ) this.candidates.push({
              provider: cJ,
              point: JJ
            })
          }
        }
        const FJ = [];
        for (const {
            point: UJ,
            provider: eJ
          }
          of this.candidates) {
          if (!eJ.enabled) continue;
          const ZJ = eJ.Om ? eJ.Om(UJ) : UJ.position;
          if (ZJ) {
            const eJ = mJ(UJ, JJ, cJ, ZJ);
            Math.abs(eJ.offset) <= nJ && FJ.push(eJ)
          }
        }
        return FJ
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var KJ = ZJ(35665),
      yJ = ZJ(47);
    const SJ = [{
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
      IJ = SJ.length;

    function MJ(JJ) {
      return JJ >= IJ ? 1 : JJ + 1
    }
    const bJ = "skyblockQuests";
    var wJ = ZJ(37524);
    const WJ = "devquests",
      gJ = "none",
      HJ = {
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
      PJ = "Compressed Messy Stone",
      kJ = {
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
      pJ = ["Stone", "Diorite", "Andesite", "Granite"],
      dJ = new Set(pJ),
      zJ = (Object.keys(kJ), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const NJ = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function OJ(JJ, cJ) {
      const ZJ = Math.floor(5 * JJ / (2 * cJ + 1));
      return Math.min(4, Math.max(0, ZJ))
    }
    var TJ = ZJ(1137);
    var CJ = ZJ(35494);
    var uJ = ZJ(35661),
      iJ = ZJ(17),
      RJ = ZJ(8178);
    const LJ = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      aJ = 1e3;

    function BJ(JJ) {
      return Math.max(0, JJ)
    }

    function tJ(JJ) {
      return 1 + .01 * BJ(JJ)
    }

    function oJ(JJ) {
      return 1 + .005 * BJ(JJ)
    }

    function lJ(JJ) {
      return 1 + .005 * BJ(JJ)
    }

    function Jc(JJ) {
      return .01 * BJ(JJ)
    }

    function cc(JJ) {
      return 150 / (150 + BJ(JJ))
    }

    function Zc(JJ) {
      return 1 + .002 * BJ(JJ)
    }

    function Fc(JJ) {
      return Math.round(10 * JJ) / 10
    }

    function Uc(JJ, cJ) {
      switch (JJ) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Fc(100 * (oJ(cJ) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Fc(100 * (tJ(cJ) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Fc(100 * (lJ(cJ) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Fc(100 * Jc(cJ))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Fc(100 * (1 - cc(cJ)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Fc(100 * (Zc(cJ) - 1))
          }
      }
    }

    function ec(JJ) {
      return "farming" === JJ ? 200 : 100
    }

    function Xc(JJ, cJ) {
      if (!Number.isSafeInteger(JJ) || JJ < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const ZJ = ec(cJ),
        FJ = JJ => function(JJ, cJ) {
          return ec(JJ) * cJ * (cJ + 1) / 2
        }(cJ, JJ);
      let UJ = Math.min(aJ, Math.floor((Math.sqrt(8 * JJ / ZJ + 1) - 1) / 2));
      return UJ < aJ && FJ(UJ + 1) <= JJ ? UJ++ : FJ(UJ) > JJ && UJ--, {
        totalXp: JJ,
        level: UJ,
        xpIntoLevel: JJ - FJ(UJ),
        xpForNextLevel: UJ === aJ ? null : ZJ * (UJ + 1)
      }
    }
    const Ac = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function qc(JJ) {
      return Ac.has(JJ)
    }
    const jc = new Set(UJ.jb);

    function Yc(JJ) {
      return jc.has(JJ)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const hc = {
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
      Dc = {
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
      sc = {
        ...Dc,
        ...Object.fromEntries(Object.entries(zJ).map((JJ => {
          let [cJ, ZJ] = JJ;
          return [cJ, 9 * Dc[ZJ]]
        })))
      },
      nc = {
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
      Gc = {
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
    const fc = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      xc = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function rc(JJ) {
      return `rgb(${xc[JJ].join(", ")})`
    }

    function vc(JJ, cJ, ZJ) {
      if (!ZJ) return JJ(cJ);
      const FJ = {};
      for (const [UJ, eJ] of Object.entries(ZJ)) FJ[UJ] = "string" === typeof eJ ? eJ : JJ(eJ.translationKey);
      return JJ(cJ, FJ)
    }
    class mc {
      constructor(JJ, cJ) {
        this.now = JJ, this.getJournal = cJ, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.hj = !1, this.onShown = () => {}
      }
      enqueue(JJ) {
        const cJ = Qc(JJ);
        if (cJ) this.pending.push(JJ);
        else {
          const cJ = this.pending.findIndex(Qc);
          this.pending.splice(-1 === cJ ? this.pending.length : cJ, 0, JJ)
        }
        return (null === this.current || null !== this.followUp && !cJ) && (this.advance(), !0)
      }
      setHeld(JJ) {
        return this.hj = JJ, !JJ && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Hh() {
        const JJ = this.getJournal(),
          cJ = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === cJ ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === cJ || void 0 === cJ ? void 0 : cJ.kind) && JJ && JJ.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === cJ || void 0 === cJ ? void 0 : cJ.kind)) {
          const JJ = this.findFollowUp(this.current);
          if ("step" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) || JJ.questId !== cJ.questId || JJ.step.id !== cJ.step.id) return this.showFollowUp(JJ, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(JJ, cJ, ZJ) {
        var FJ, UJ, eJ, XJ;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, JJ, ZJ);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, JJ);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, JJ, cJ);
        const {
          questCompletionKind: AJ,
          questCompletionNameKey: qJ
        } = this.current, jJ = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, YJ = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, hJ = "step" === (null === (FJ = this.followUp) || void 0 === FJ ? void 0 : FJ.kind) ? this.followUp : null, DJ = "explore" === (null === (UJ = this.followUp) || void 0 === UJ ? void 0 : UJ.kind);
        let sJ;
        return sJ = DJ ? JJ("skyblockGame:questExploreTitle") : null !== hJ ? "quest" === AJ ? JJ("skyblockGame:questNextQuestTitle", {
          quest: JJ(hJ.questNameKey)
        }) : JJ("skyblockGame:questNextStepTitle") : JJ("started" === AJ ? "skyblockGame:questStartedTitle" : "quest" === AJ ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? AJ : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: sJ,
          name: DJ ? cJ("skyblockGame:questExploreName") : null !== hJ ? vc(cJ, hJ.step.nameKey, hJ.step.nameParams) : vc(cJ, qJ, jJ),
          description: DJ ? cJ("skyblockGame:questExploreDescription") : null === hJ ? null : vc(cJ, hJ.step.descriptionKey, hJ.step.descriptionParams),
          reward: null === this.followUp && YJ > 0 ? cJ("skyblockGame:questCoinRewardSuffix", {
            amount: YJ.toLocaleString(ZJ)
          }) : null,
          iconItem: null !== (eJ = null === hJ || void 0 === hJ ? void 0 : hJ.step.questIconItem) && void 0 !== eJ ? eJ : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== hJ && (null === (XJ = this.getJournal()) || void 0 === XJ ? void 0 : XJ.trackedQuestId) === hJ.questId ? hJ.step.nameKey : null
        }
      }
      getSkillLevelView(JJ, cJ, ZJ) {
        let {
          skill: FJ,
          beforeLevel: UJ,
          level: eJ
        } = JJ;
        const XJ = Uc(FJ, UJ),
          AJ = Uc(FJ, eJ);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: cJ(`skyblockGame:${FJ}`),
          name: cJ("skyblockGame:skillLevelUp", {
            to: eJ.toLocaleString(ZJ)
          }),
          description: XJ.percent === AJ.percent ? null : cJ(`${AJ.translationKey}Change`, {
            before: XJ.percent.toLocaleString(ZJ),
            after: AJ.percent.toLocaleString(ZJ)
          }),
          reward: null,
          iconItem: fc[FJ],
          accent: rc(FJ),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(JJ, cJ) {
        let {
          landmarkNameKey: ZJ
        } = JJ;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: cJ("skyblockGame:landmarkDiscovered"),
          name: cJ(ZJ),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(JJ, cJ, ZJ) {
        let {
          titleKey: FJ,
          textKey: UJ,
          params: eJ = {},
          nameKeys: XJ = {},
          iconItem: AJ = null
        } = JJ;
        const qJ = {
          ...eJ
        };
        for (const [jJ, YJ] of Object.entries(XJ)) qJ[jJ] = cJ(YJ);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: cJ(FJ),
          name: ZJ(UJ, qJ),
          description: null,
          reward: null,
          iconItem: AJ,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var JJ;
        if (null !== this.followUp) return 5600;
        switch (null === (JJ = this.current) || void 0 === JJ ? void 0 : JJ.questCompletionKind) {
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
      showFollowUp(JJ, cJ) {
        null === JJ || this.hj ? this.advance() : (this.followUp = JJ, this.token++, this.shownAt = this.now(), this.expiresAt = null !== cJ && void 0 !== cJ ? cJ : this.shownAt + this.durationMs())
      }
      findFollowUp(JJ) {
        var cJ;
        const ZJ = this.getJournal();
        if (!ZJ || this.hasPendingQuestPopup() || Qc(JJ)) return null;
        const FJ = "started" === JJ.questCompletionKind ? ZJ.active.some((cJ => cJ.id === JJ.questCompletionQuestId)) : "quest" === JJ.questCompletionKind ? ZJ.completed.some((cJ => cJ.id === JJ.questCompletionQuestId)) : [...ZJ.active, ...ZJ.completed].some((cJ => cJ.id === JJ.questCompletionQuestId && cJ.subquests.some((cJ => cJ.id === JJ.questCompletionStepId && "completed" === cJ.status))));
        if (!FJ) return null;
        if ("quest" === JJ.questCompletionKind && 0 === ZJ.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const UJ = ZJ.active.find((JJ => JJ.id === ZJ.trackedQuestId)),
          eJ = null !== (cJ = null === UJ || void 0 === UJ ? void 0 : UJ.subquests.find((JJ => "ready" === JJ.status))) && void 0 !== cJ ? cJ : null === UJ || void 0 === UJ ? void 0 : UJ.subquests.find((JJ => "active" === JJ.status));
        return eJ ? {
          kind: "step",
          questId: UJ.id,
          questNameKey: UJ.nameKey,
          step: eJ
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((JJ => !Qc(JJ)))
      }
      advance() {
        var JJ;
        this.current = this.hj ? null : null !== (JJ = this.pending.shift()) && void 0 !== JJ ? JJ : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Qc(JJ) {
      return Ec(JJ.questCompletionKind)
    }

    function Ec(JJ) {
      return "skillLevel" === JJ || "landmark" === JJ || "npcNote" === JJ
    }
    var Vc = ZJ(37517);
    const Kc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      yc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Sc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Ic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Mc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var bc = ZJ(37519);
    const wc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Wc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const gc = ZJ.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Hc = ZJ.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      Pc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var kc = ZJ(17759),
      pc = ZJ(19883),
      dc = ZJ(22292),
      zc = ZJ(23818),
      Nc = ZJ(25498);
    const Oc = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: kc,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: pc,
      cow: Mc,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: ZJ(25508),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Kc,
      fishing_1: Kc,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: yc,
      guardian_iron: Sc,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: dc,
      mines: zc,
      mining_1: zc,
      npc: Ic,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Mc,
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
      npc_gold_guardian: yc,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Sc,
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
      npc_tentacle_guy: bc,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: wc,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: gc,
      quest_talk: Hc,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: Pc,
      watermelon: Nc
    };

    function Tc(JJ, cJ) {
      const ZJ = document.createElement("img");
      return ZJ.className = cJ, ZJ.src = JJ, ZJ.alt = "", ZJ.draggable = !1, ZJ
    }

    function Cc(JJ) {
      var cJ;
      const ZJ = null !== (cJ = Oc[JJ]) && void 0 !== cJ ? cJ : JJ.startsWith("npc_") ? Ic : Pc;
      if ("portal" !== JJ) return Tc(ZJ, "SkyblockMapIcon");
      const FJ = document.createElement("span");
      FJ.className = "SkyblockMapIcon Portal";
      const UJ = document.createElement("span");
      return UJ.className = "SkyblockMapIconTint", UJ.style.maskImage = UJ.style.webkitMaskImage = `url("${Wc}")`, FJ.append(Tc(ZJ, "SkyblockMapIconLayer"), UJ, Tc(Wc, "SkyblockMapIconLayer SkyblockMapIconShade")), FJ
    }
    var uc = ZJ(37499),
      ic = ZJ(3735);
    const Rc = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Lc(JJ) {
      const cJ = new ic.g(JJ);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Rc.map((JJ => {
          let {
            lobes: ZJ,
            amount: FJ
          } = JJ;
          return {
            lobes: ZJ[Math.floor(cJ.next() * ZJ.length)],
            amount: FJ[0] + cJ.next() * (FJ[1] - FJ[0]),
            phase: 2 * cJ.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function ac(JJ) {
      let {
        radius: cJ,
        squareness: ZJ,
        wobbles: FJ,
        samples: UJ
      } = JJ;
      const eJ = [];
      for (let XJ = 0; XJ < UJ; XJ++) {
        const JJ = 2 * Math.PI * XJ / UJ,
          AJ = Math.cos(JJ),
          qJ = Math.sin(JJ),
          jJ = cJ * (Math.abs(AJ) ** ZJ + Math.abs(qJ) ** ZJ) ** (-1 / ZJ) * FJ.reduce(((cJ, ZJ) => {
            let {
              lobes: FJ,
              amount: UJ,
              phase: eJ
            } = ZJ;
            return cJ + UJ * Math.sin(FJ * JJ + eJ)
          }), 1);
        eJ.push(`${(50+jJ*AJ).toFixed(2)} ${(50+jJ*qJ).toFixed(2)}`)
      }
      return `M${eJ.join("L")}Z`
    }
    const Bc = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class tc {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.xn = !1, this.mountCompass = JJ => {
          var cJ;
          if (null === (cJ = this.stopLayout) || void 0 === cJ || cJ.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !JJ || this.xn) return;
          const ZJ = JJ.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: JJ,
            track: ZJ,
            label: JJ.querySelector(".SkyblockCompassLabel")
          }, ZJ.replaceChildren();
          for (let UJ = 0; UJ < 4; UJ++) {
            const JJ = document.createElement("span");
            JJ.className = "SkyblockCompassCardinal", ZJ.appendChild(JJ), this.cardinals.push(JJ)
          }
          const FJ = (0, uc.d)(Bc, [JJ], this.layout);
          this.stopLayout = () => {
            FJ(), ZJ.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = JJ => {
          this.terrain = this.xn ? null : JJ, this.render(this.frame)
        }, this.mountMinimapSearchArea = JJ => {
          this.mountSearchArea("minimap", JJ)
        }, this.mountMapSearchArea = JJ => {
          this.mountSearchArea("map", JJ)
        }, this.mountPlayer = JJ => {
          this.player = this.xn ? null : JJ, this.render(this.frame)
        }, this.mountWaypoint = JJ => {
          var cJ, ZJ;
          if (null === (cJ = this.stopWaypoint) || void 0 === cJ || cJ.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !JJ || this.xn) return;
          const FJ = JJ.querySelector(".SkyblockQuestWaypointMarker");
          FJ.replaceChildren(Cc("quest")), this.markerIcon = "quest", this.waypoint = {
            root: JJ,
            marker: FJ,
            clip: JJ.querySelector(".SkyblockQuestWaypointTextClip"),
            text: JJ.querySelector(".SkyblockQuestWaypointText"),
            label: JJ.querySelector(".SkyblockQuestWaypointLabel"),
            distance: JJ.querySelector(".SkyblockQuestWaypointDistance"),
            hint: JJ.querySelector(".SkyblockQuestWaypointHint")
          };
          const UJ = () => {
              this.waypointMarkerSize = {
                width: FJ.offsetWidth,
                height: FJ.offsetHeight
              }, this.waypointInset = {
                x: FJ.offsetWidth / 2 + 8,
                top: FJ.offsetHeight + 8,
                bottom: 8
              }
            },
            eJ = new ResizeObserver((() => {
              UJ(), this.render(this.frame)
            }));
          eJ.observe(FJ, {
            box: "border-box"
          });
          const XJ = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", XJ), null === (ZJ = window.visualViewport) || void 0 === ZJ || ZJ.addEventListener("resize", XJ), this.stopWaypoint = () => {
            var JJ;
            eJ.disconnect(), window.removeEventListener("resize", XJ), null === (JJ = window.visualViewport) || void 0 === JJ || JJ.removeEventListener("resize", XJ)
          }, XJ(), UJ(), this.render(this.frame)
        }, this.mountWaypointOrigin = JJ => {
          var cJ;
          if (null === (cJ = this.stopWaypointOrigin) || void 0 === cJ || cJ.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = JJ && !this.xn ? Number(JJ.dataset.notificationToken) : null, JJ && !this.xn && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const cJ = {
              nameKey: JJ.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = cJ;
            const ZJ = () => {
                const ZJ = JJ.getBoundingClientRect();
                cJ.x = (ZJ.left + ZJ.width / 2) / window.innerWidth * 100, cJ.y = (ZJ.top + ZJ.height / 2) / window.innerHeight * 100
              },
              FJ = new ResizeObserver(ZJ);
            FJ.observe(JJ.parentElement), FJ.observe(JJ), window.addEventListener("resize", ZJ), this.stopWaypointOrigin = () => {
              FJ.disconnect(), window.removeEventListener("resize", ZJ)
            }, ZJ()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const JJ = this.compass.root,
            cJ = getComputedStyle(JJ),
            ZJ = getComputedStyle(document.documentElement),
            FJ = parseFloat(ZJ.fontSize),
            UJ = parseFloat(cJ.getPropertyValue("--compass-icon-size")) * FJ,
            eJ = "1" === cJ.getPropertyValue("--compass-fit-top").trim(),
            XJ = eJ ? 1 : 8,
            AJ = Array.from(document.querySelectorAll(Bc), (JJ => {
              var cJ;
              return (null !== (cJ = JJ.querySelector(".MiddleTextTop")) && void 0 !== cJ ? cJ : JJ).getBoundingClientRect()
            })).filter((JJ => JJ.width > 0 && JJ.height > 0));
          let qJ = (parseFloat(ZJ.getPropertyValue("--notchTop")) || 0) + XJ,
            jJ = "";
          if (eJ) {
            const cJ = window.innerWidth / 2,
              ZJ = JJ.getBoundingClientRect().height,
              eJ = [qJ, ...AJ.map((JJ => Math.max(qJ, JJ.bottom + XJ)))].sort(((JJ, cJ) => JJ - cJ));
            for (const JJ of eJ) {
              let eJ = cJ - 8;
              for (const FJ of AJ) FJ.bottom + XJ <= JJ || FJ.top >= JJ + ZJ + XJ || (eJ = Math.min(eJ, FJ.right <= cJ ? cJ - FJ.right - 8 : FJ.left - cJ - 8));
              const YJ = 2 * eJ - UJ;
              if (YJ >= 16 * FJ) {
                jJ = `${YJ}px`, qJ = JJ;
                break
              }
            }
          }
          JJ.style.maxWidth !== jJ && (JJ.style.maxWidth = jJ);
          const YJ = JJ.getBoundingClientRect(),
            hJ = this.compassSize.trackHalfWidth;
          if (YJ.width > 0) {
            const JJ = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: JJ.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * UJ / JJ.width
          }
          if (!jJ)
            for (const DJ of AJ) DJ.right > YJ.left - 8 && DJ.left < YJ.right + 8 && (qJ = Math.max(qJ, DJ.bottom + XJ));
          JJ.style.top = `${qJ}px`, this.compassSize.trackHalfWidth !== hJ && this.render(this.frame)
        }
      }
      mountSearchArea(JJ, cJ) {
        this.searchAreas[JJ] = this.xn ? null : cJ, this.render(this.frame)
      }
      render(JJ) {
        if (this.xn) return;
        if (this.frame = JJ, this.compass && (oc(this.compass.root, !JJ), JJ)) {
          const cJ = this.compassSize.trackHalfWidth / 50;
          JJ.compass.cardinals.forEach(((JJ, ZJ) => {
            const FJ = this.cardinals[ZJ];
            FJ.textContent !== JJ.name && (FJ.textContent = JJ.name), oc(FJ, JJ.hidden), FJ.style.translate = JJ.left * cJ + "px"
          }));
          const ZJ = new Set;
          JJ.compass.markers.forEach(((FJ, UJ) => {
            var eJ;
            ZJ.add(FJ.id);
            let XJ = this.markers.get(FJ.id);
            XJ || (XJ = document.createElement("span"), XJ.className = "SkyblockCompassMarker", this.markers.set(FJ.id, XJ), this.compass.track.appendChild(XJ)), XJ.dataset.icon !== FJ.icon && (XJ.dataset.icon = FJ.icon, XJ.replaceChildren(Cc(FJ.icon))), XJ.style.color = null !== (eJ = FJ.colour) && void 0 !== eJ ? eJ : "", XJ.style.translate = FJ.left * cJ + "px", XJ.style.zIndex = String(JJ.compass.markers.length - UJ), XJ.title !== FJ.name && (XJ.title = FJ.name)
          }));
          for (const [JJ, FJ] of this.markers) ZJ.has(JJ) || (FJ.remove(), this.markers.delete(JJ));
          this.compass.label.textContent !== JJ.compass.label && (this.compass.label.textContent = JJ.compass.label)
        }
        this.terrain && (oc(this.terrain, !(null !== JJ && void 0 !== JJ && JJ.minimap)), null !== JJ && void 0 !== JJ && JJ.minimap && (this.terrain.style.transform = JJ.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", JJ.minimap.iconRotation)));
        const cJ = null === JJ || void 0 === JJ ? void 0 : JJ.searchArea;
        for (const ZJ of [this.searchAreas.minimap, this.searchAreas.map])
          if (ZJ && (oc(ZJ, !cJ), cJ)) {
            if (this.searchAreaPath.seed !== cJ.shapeSeed && (this.searchAreaPath = {
                seed: cJ.shapeSeed,
                d: ac(Lc(cJ.shapeSeed))
              }), ZJ.dataset.shapeSeed !== cJ.shapeSeed) {
              ZJ.dataset.shapeSeed = cJ.shapeSeed;
              for (const JJ of ZJ.querySelectorAll("path")) JJ.setAttribute("d", this.searchAreaPath.d)
            }
            ZJ.style.left = `${cJ.left}%`, ZJ.style.top = `${cJ.top}%`, ZJ.style.width = `${cJ.width}%`, ZJ.style.height = `${cJ.height}%`
          } if (this.player && (oc(this.player, !(null !== JJ && void 0 !== JJ && JJ.player) || JJ.player.hidden), null !== JJ && void 0 !== JJ && JJ.player && (this.player.style.left = `${JJ.player.left}%`, this.player.style.top = `${JJ.player.top}%`, this.player.style.setProperty("--map-player-rotation", JJ.player.rotation))), this.waypoint) {
          const {
            root: cJ,
            marker: ZJ,
            clip: FJ,
            text: UJ,
            label: eJ,
            distance: XJ,
            hint: AJ
          } = this.waypoint, qJ = !(null !== JJ && void 0 !== JJ && JJ.waypoint) || null !== JJ.waypoint.popupToken && JJ.waypoint.popupToken !== this.waypointOriginToken;
          oc(cJ, qJ);
          let jJ = 1;
          const YJ = this.waypointLaunch;
          if (!qJ && YJ && JJ.waypoint.nameKey === YJ.nameKey) {
            const JJ = performance.now();
            YJ.startedAt ??= JJ, jJ = Math.min(1, Math.max(0, (JJ - YJ.startedAt - 450) / 1e3)), ZJ.style.opacity = String(Math.min(1, (JJ - YJ.startedAt) / 150)), 1 === jJ && (this.waypointLaunch = null)
          } else ZJ.style.opacity = "", YJ && null !== YJ.startedAt && (this.waypointLaunch = null);
          if (cJ.classList.toggle("Launching", jJ < 1), null !== JJ && void 0 !== JJ && JJ.waypoint) {
            const cJ = this.waypointInset,
              qJ = "quest_talk" === JJ.waypoint.markerIcon ? function(JJ, cJ, ZJ) {
                if (!JJ.text || null === JJ.blockHeight || 0 === JJ.nearness) return JJ;
                const FJ = JJ.blockHeight / 100 * ZJ.height,
                  UJ = -JJ.nearness * (lc * FJ + cJ.width / 2),
                  eJ = JJ.nearness * (JZ * FJ + cJ.height / 2);
                return {
                  ...JJ,
                  text: {
                    x: JJ.text.x + UJ / ZJ.width * 100,
                    y: JJ.text.y + eJ / ZJ.height * 100
                  }
                }
              }(JJ.waypoint, this.waypointMarkerSize, this.viewport) : JJ.waypoint,
              hJ = (0, Vc.c)(qJ, cJ, this.viewport),
              DJ = jJ * jJ * (3 - 2 * jJ),
              sJ = jJ < 1 ? YJ.x + (hJ.x - YJ.x) * DJ : hJ.x,
              nJ = jJ < 1 ? YJ.y + (hJ.y - YJ.y) * DJ : hJ.y;
            ZJ.style.translate = `${sJ}vw ${nJ}vh`, FJ.style.clipPath = `inset(${cJ.top}px ${cJ.x}px ${cJ.bottom}px)`, oc(UJ, jJ < 1 || !JJ.waypoint.text), UJ.style.opacity = String(1 - JJ.waypoint.nearness), JJ.waypoint.text && (UJ.style.translate = `${JJ.waypoint.text.x}vw ${JJ.waypoint.text.y}vh`), eJ.textContent !== JJ.waypoint.name && (eJ.textContent = JJ.waypoint.name), this.markerIcon !== JJ.waypoint.markerIcon && (this.markerIcon = JJ.waypoint.markerIcon, ZJ.replaceChildren(Cc(this.markerIcon))), XJ.textContent !== JJ.waypoint.distance && (XJ.textContent = JJ.waypoint.distance), oc(AJ, null === JJ.waypoint.hint), null !== JJ.waypoint.hint && AJ.textContent !== JJ.waypoint.hint && (AJ.textContent = JJ.waypoint.hint)
          }
        }
      }
      dispose() {
        var JJ, cJ;
        this.mountWaypointOrigin(null), this.render(null), null === (JJ = this.stopLayout) || void 0 === JJ || JJ.call(this), this.stopLayout = null, null === (cJ = this.stopWaypoint) || void 0 === cJ || cJ.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.xn = !0
      }
    }

    function oc(JJ, cJ) {
      JJ.hidden !== cJ && (JJ.hidden = cJ)
    }
    const lc = .55,
      JZ = .6;
    const cZ = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class ZZ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.map = JJ, this.quests = cJ, this.compass = ZJ, this.display = new tc, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.xn = !1, this.snapshot = null, this.texts = new Map, this.translate = FJ
      }
      setTranslator(JJ, cJ) {
        this.translate = JJ, this.locale = cJ, this.metresFormat = new Intl.NumberFormat(cJ), this.texts.clear()
      }
      translateCached(JJ, cJ) {
        const ZJ = void 0 === cJ ? JJ : `${JJ} ${cJ}`;
        let FJ = this.texts.get(ZJ);
        return void 0 === FJ && (this.texts.size >= 500 && this.texts.clear(), FJ = this.translate(JJ, void 0 === cJ ? void 0 : {
          distance: cJ
        }), this.texts.set(ZJ, FJ)), FJ
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(JJ, cJ, ZJ) {
        if (this.xn) return;
        if (!JJ) return this.snapshot = null, void this.display.render(null);
        const FJ = this.map.getSnapshot().map,
          qJ = ZJ.cameraHeading,
          jJ = {
            ...this.display.compassSize,
            tanHalfFovX: ZJ.tanHalfFovX,
            pitch: ZJ.cameraPitch
          },
          YJ = [];
        if (FJ)
          for (const UJ of this.compass.frame(JJ, qJ, cJ)) {
            const JJ = GJ(UJ.offset, jJ);
            null !== JJ && YJ.push({
              ...UJ,
              left: JJ
            })
          }
        const hJ = function(JJ, cJ) {
            const ZJ = [],
              FJ = JJ => "quest" === JJ.kind ? JJ.distance - 1 : JJ.distance,
              UJ = [...JJ].sort(((JJ, cJ) => FJ(JJ) - FJ(cJ) || JJ.id.localeCompare(cJ.id)));
            for (const eJ of UJ) {
              let JJ = !1;
              if ("quest" !== eJ.kind)
                for (const FJ of ZJ)
                  if (Math.abs(FJ.left - eJ.left) < cJ) {
                    JJ = !0;
                    break
                  } JJ || ZJ.push(eJ)
            }
            return ZJ
          }(YJ, this.display.compassSpacing),
          DJ = function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              ZJ = null;
            for (const FJ of JJ) Math.abs(FJ.offset) <= cJ && (!ZJ || FJ.distance < ZJ.distance || FJ.distance === ZJ.distance && Math.abs(FJ.offset) < Math.abs(ZJ.offset)) && (ZJ = FJ);
            return ZJ
          }(hJ),
          sJ = JJ => {
            var cJ;
            return null !== (cJ = JJ.displayName) && void 0 !== cJ ? cJ : this.translateCached(JJ.nameKey)
          },
          nJ = {
            compass: {
              markers: hJ.map((JJ => ({
                id: JJ.id,
                icon: JJ.icon,
                colour: JJ.colour,
                name: sJ(JJ),
                left: JJ.left
              }))),
              cardinals: XJ.map((JJ => {
                let {
                  name: cJ,
                  bearing: ZJ
                } = JJ;
                const FJ = GJ(UJ.c.computeShortestRotation(qJ, ZJ), jJ);
                return {
                  name: cJ,
                  left: null !== FJ && void 0 !== FJ ? FJ : 0,
                  hidden: null === FJ
                }
              })),
              label: DJ ? `${sJ(DJ)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",EJ(DJ.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== FJ && void 0 !== FJ && FJ.background) {
          const cJ = JJ[0] - FJ.mapOrigin[0],
            ZJ = JJ[2] - FJ.mapOrigin[2],
            {
              rotation: UJ,
              transform: XJ
            } = function(JJ, cJ, ZJ, FJ) {
              const [UJ, XJ] = AJ(JJ, cJ, FJ), qJ = eJ - ZJ;
              return {
                rotation: qJ,
                transform: `rotate(${qJ}rad) translate(-${UJ}%, -${XJ}%)`
              }
            }(cJ, ZJ, qJ, FJ.background.bounds);
          nJ.minimap = {
            transform: XJ,
            iconRotation: -UJ + "rad"
          };
          const [jJ, YJ] = AJ(cJ, ZJ, FJ.background.bounds);
          nJ.player = {
            left: jJ,
            top: YJ,
            hidden: jJ < 0 || YJ < 0 || jJ > 100 || YJ > 100,
            rotation: -UJ + "rad"
          }
        }
        const {
          waypoint: fJ
        } = this.quests.getSnapshot();
        if ("search" === (null === fJ || void 0 === fJ ? void 0 : fJ.questMarkerIcon) && null !== FJ && void 0 !== FJ && FJ.background) {
          const {
            bounds: JJ
          } = FJ.background, [cJ, ZJ] = AJ(fJ.position[0] - FJ.mapOrigin[0], fJ.position[2] - FJ.mapOrigin[2], JJ);
          nJ.searchArea = {
            left: cJ,
            top: ZJ,
            width: 6400 / (JJ.mapMaxX - JJ.mapMinX),
            height: 6400 / (JJ.mapMaxZ - JJ.mapMinZ),
            shapeSeed: fJ.nameKey
          }
        }
        const xJ = this.quests.getNotificationSnapshot(),
          rJ = "completion" === (null === xJ || void 0 === xJ ? void 0 : xJ.phase) && !Ec(xJ.kind);
        if (fJ && !rJ) {
          const cJ = Math.hypot(...fJ.position.map(((cJ, ZJ) => cJ - JJ[ZJ]))),
            FJ = Math.round(cJ),
            UJ = "talk" === fJ.questMarkerIcon ? Math.min(1, Math.max(0, (10 - cJ) / 5)) : 0,
            eJ = ZJ.projectWorldPosToViewport(fJ.position),
            XJ = eJ && ZJ.projectWorldPosToViewport([fJ.position[0], fJ.position[1] - 1, fJ.position[2]]);
          nJ.waypoint = {
            ...ZJ.projectWorldPosToScreenPos(fJ.position),
            text: eJ,
            nearness: UJ * UJ * (3 - 2 * UJ),
            blockHeight: eJ && XJ ? XJ.y - eJ.y : null,
            name: this.translateCached(fJ.nameKey),
            nameKey: fJ.nameKey,
            markerIcon: fJ.questMarkerIcon ? cZ[fJ.questMarkerIcon] : "quest",
            popupToken: (null === xJ || void 0 === xJ ? void 0 : xJ.waypointNameKey) === fJ.nameKey ? xJ.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(FJ)),
            hint: "search" === fJ.questMarkerIcon && Math.hypot(fJ.position[0] - JJ[0], fJ.position[2] - JJ[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = nJ, this.display.render(nJ)
      }
      dispose() {
        this.xn = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const FZ = "skyblockSkillsView";
    class UZ extends hJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          ZJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JJ => JJ,
          FJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          UJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : JJ => JJ;
        super(JJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = cJ, this.translate = ZJ, this.locale = FJ, this.itemName = UJ, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = JJ => {
          this.selected = JJ, this.emit()
        }
      }
      setTranslator(JJ, cJ, ZJ) {
        this.translate = JJ, this.locale = cJ, this.itemName = ZJ, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(JJ) {
        let cJ = this.skillText.get(JJ);
        return cJ || (cJ = {
          label: this.translate(`skyblockGame:${JJ}`),
          description: this.translate(`skyblockGame:${JJ}Description`)
        }, this.skillText.set(JJ, cJ)), cJ
      }
      sources(JJ) {
        if ("mining" === JJ || "fishing" === JJ) return this.buildSources(JJ);
        let cJ = this.sourceText.get(JJ);
        return cJ || (cJ = this.buildSources(JJ), this.sourceText.set(JJ, cJ)), cJ
      }
      buildSources(JJ) {
        const cJ = this.translate;
        return "exploration" === JJ ? [cJ("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), cJ("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === JJ ? [cJ("skyblockGame:logSource", {
          xp: this.number(hc["Maple Log"])
        })] : "combat" === JJ ? [cJ("skyblockGame:creatureKillSource"), cJ("skyblockGame:noEnvironmentalXp")] : "farming" === JJ ? [cJ("skyblockGame:cropSource", {
          xp: this.number(nc["Wheat|FreshlyGrown"])
        }), cJ("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), cJ("skyblockGame:noYoungCropXp")] : Object.entries("mining" === JJ ? sc : Gc).map((JJ => {
          let [ZJ, FJ] = JJ;
          return cJ("skyblockGame:itemXpSource", {
            item: this.itemName(ZJ),
            xp: this.number(FJ)
          })
        }))
      }
      number(JJ) {
        return JJ.toLocaleString(this.locale)
      }
      benefit(JJ, cJ) {
        const ZJ = Uc(JJ, cJ);
        return this.translate(ZJ.translationKey, {
          bonus: this.number(ZJ.percent)
        })
      }
      Qn(JJ) {
        if (!this.xn) {
          if ("snapshot" === JJ.kind) this.progress = JJ.progress, this.pending.clear(), this.recent = null;
          else if ("award" === JJ.kind && this.progress) {
            const {
              award: cJ
            } = JJ;
            this.progress = {
              ...this.progress,
              [cJ.skill]: cJ.after
            };
            for (const [JJ, FJ] of this.pending) FJ.skill === cJ.skill && this.pending.delete(JJ);
            const ZJ = cJ.after.level > cJ.before.level;
            this.recordGain(cJ.skill, cJ.amount, ZJ ? ++this.nextLevelUpToken : null), ZJ && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: cJ.skill,
              beforeLevel: cJ.before.level,
              level: cJ.after.level
            })
          } else {
            if ("rejectBlock" === JJ.kind) return void this.rejectBlock(JJ.position);
            if ("open" === JJ.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(JJ, cJ, ZJ) {
        if (!this.progress || this.xn || ZJ) return;
        const FJ = function(JJ, cJ) {
          const ZJ = JJ.split("|")[0];
          return "Air" === cJ || cJ === `Barkless ${JJ}` ? Object.hasOwn(hc, ZJ) ? {
            skill: "foraging",
            amount: hc[ZJ]
          } : "Air" !== cJ ? null : Object.hasOwn(sc, JJ) ? {
            skill: "mining",
            amount: sc[JJ]
          } : qc(JJ) ? {
            skill: "farming",
            amount: 10
          } : Yc(JJ) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(nc, JJ) ? {
            skill: "farming",
            amount: nc[JJ]
          } : Object.hasOwn(kJ, JJ) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(cJ, "Air");
        if (!FJ) return;
        const UJ = JJ.join(",");
        if (this.pending.has(UJ)) return;
        const eJ = this.predictedProgress(FJ.skill).totalXp + FJ.amount;
        Number.isSafeInteger(eJ) && (this.pending.set(UJ, {
          ...FJ,
          expires: this.now() + 2e3
        }), this.recordGain(FJ.skill, 0), this.emit())
      }
      rejectBlock(JJ) {
        this.pending.delete(JJ.join(",")) && this.emit()
      }
      Hh() {
        if (this.xn) return;
        let JJ = !1;
        for (const [cJ, ZJ] of this.pending) ZJ.expires <= this.now() && (this.pending.delete(cJ), JJ = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, JJ = !0), JJ && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(JJ, cJ) {
        var ZJ, FJ;
        let UJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const eJ = (null === (ZJ = this.recent) || void 0 === ZJ ? void 0 : ZJ.skill) === JJ && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          XJ = (null === (FJ = this.recent) || void 0 === FJ ? void 0 : FJ.skill) === JJ && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: JJ,
          confirmed: eJ + cJ,
          expires: this.now() + 3e3,
          levelUpToken: null !== UJ && void 0 !== UJ ? UJ : XJ
        }
      }
      pendingXp(JJ) {
        let cJ = 0;
        for (const ZJ of this.pending.values()) ZJ.skill === JJ && (cJ += ZJ.amount);
        return cJ
      }
      predictedProgress(JJ) {
        const cJ = this.progress[JJ],
          ZJ = this.pendingXp(JJ);
        return ZJ ? Xc(cJ.totalXp + ZJ, JJ) : cJ
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var JJ, cJ, ZJ;
        const FJ = this.progress ? LJ.map((JJ => {
            const cJ = this.predictedProgress(JJ);
            return {
              ...this.text(JJ),
              icon: fc[JJ],
              benefit: this.benefit(JJ, cJ.level),
              sources: this.sources(JJ),
              id: JJ,
              selected: JJ === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(cJ.level)
              }),
              xp: null === cJ.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(cJ.xpIntoLevel),
                target: this.number(cJ.xpForNextLevel)
              }),
              percent: null === cJ.xpForNextLevel ? 100 : Math.min(100, cJ.xpIntoLevel / cJ.xpForNextLevel * 100)
            }
          })) : [],
          UJ = FJ.find((JJ => {
            var cJ;
            return JJ.id === (null === (cJ = this.recent) || void 0 === cJ ? void 0 : cJ.skill)
          })),
          eJ = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: FJ,
          detail: null !== (JJ = FJ.find((JJ => JJ.selected))) && void 0 !== JJ ? JJ : null,
          overallLevel: this.progress ? LJ.reduce(((JJ, cJ) => JJ + this.predictedProgress(cJ).level), 0) : null,
          hud: UJ && eJ > 0 ? {
            skill: UJ,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(eJ)
            }),
            levelUpToken: null !== (cJ = null === (ZJ = this.recent) || void 0 === ZJ ? void 0 : ZJ.levelUpToken) && void 0 !== cJ ? cJ : null,
            colour: rc(UJ.id)
          } : null
        }
      }
    }
    const eZ = Math.max(1600, 600, 950) + 400,
      XZ = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      AZ = "skyblockQuestsView",
      qZ = "skyblockQuestNotificationView";
    class jZ extends hJ {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          XJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(JJ, FJ, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = cJ, this.translate = ZJ, this.now = UJ, this.locale = eJ, this.publishNotification = XJ, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var JJ, cJ;
          this.selected = null !== (JJ = null === (cJ = this.authoritative) || void 0 === cJ ? void 0 : cJ.trackedQuestId) && void 0 !== JJ ? JJ : null, this.show()
        }, this.select = JJ => {
          this.selected = JJ, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const JJ = this.snapshot.detail;
          !this.xn && null !== JJ && void 0 !== JJ && JJ.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(JJ.id), this.emit())
        }, this.viewDialogue = () => {
          const JJ = this.snapshot.detail;
          var cJ;
          JJ && (null === (cJ = this.onViewDialogue) || void 0 === cJ || cJ.call(this, JJ.id))
        }, this.notifications = new mc(UJ, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.authoritative) || void 0 === cJ ? void 0 : cJ.trackedQuestId) && void 0 !== JJ ? JJ : null
      }
      notify(JJ) {
        !this.xn && this.notifications.enqueue(JJ) && this.emitNotification()
      }
      setNotificationsHeld(JJ) {
        (this.notifications.setHeld(JJ) || JJ) && this.emitNotification()
      }
      Hh() {
        var JJ, cJ;
        if (this.xn) return;
        this.notifications.Hh() && this.emitNotification();
        let ZJ = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, ZJ = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, ZJ = !0);
        const FJ = YZ(this.authoritative);
        null !== FJ && void 0 !== FJ && null !== (JJ = FJ.questClock) && void 0 !== JJ && JJ.running && this.clockText(FJ) !== (null === (cJ = this.snapshot.tracked) || void 0 === cJ ? void 0 : cJ.clock) && (ZJ = !0), ZJ && this.emit()
      }
      setTranslator(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = JJ, this.locale = cJ, this.emitNotification(), this.emit()
      }
      Qn(JJ) {
        if (!this.xn)
          if ("completion" === JJ.kind) this.notify(JJ.questCompletion);
          else if ("landmark" === JJ.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: JJ.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === JJ.kind) {
          var cJ, ZJ, FJ;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: JJ.npcNoteTitleKey,
            textKey: JJ.npcNoteTextKey,
            params: null !== (cJ = JJ.npcNoteParams) && void 0 !== cJ ? cJ : {},
            nameKeys: null !== (ZJ = JJ.npcNoteNameKeys) && void 0 !== ZJ ? ZJ : {},
            iconItem: null !== (FJ = JJ.npcNoteIconItem) && void 0 !== FJ ? FJ : null
          })
        } else if ("open" === JJ.kind) this.show();
        else if ("guidance" === JJ.kind) this.waypoint = JJ.waypoint, this.compassTarget = JJ.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === JJ.kind) {
          this.authoritative = JJ.snapshot, this.notifications.Hh() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const cJ = this.trackedStepPulse;
          this.updateTrackedStepPulse(JJ.snapshot), this.emit(), this.trackedStepPulse > cJ && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.xn || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var JJ;
        return null !== (JJ = this.translateWithIcons) && void 0 !== JJ ? JJ : this.translate
      }
      clockText(JJ) {
        const cJ = JJ.questClock;
        if (!cJ) return null;
        const ZJ = cJ.elapsedMs + (cJ.running ? this.now() - this.receivedAt : 0);
        return void 0 === cJ.countdownFromMs ? (0, wJ.o)(ZJ, !1) : (0, wJ.o)(1e3 * Math.ceil(Math.max(0, cJ.countdownFromMs - ZJ) / 1e3), !1)
      }
      updateTrackedStepPulse(JJ) {
        var cJ, ZJ, FJ;
        const UJ = YZ(JJ);
        if (!UJ) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const eJ = JJ => UJ.subquests.filter((cJ => JJ(cJ.status))).map((JJ => JJ.id)),
          XJ = eJ((JJ => "completed" === JJ || "skipped" === JJ)),
          AJ = eJ((JJ => "locked" !== JJ)),
          qJ = (null === (cJ = this.trackedSteps) || void 0 === cJ ? void 0 : cJ.questId) === UJ.id && UJ.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (qJ) {
          const JJ = XJ.filter((JJ => !qJ.finished.has(JJ))),
            cJ = eJ((JJ => "active" === JJ || "ready" === JJ)).filter((JJ => !qJ.unlocked.has(JJ)));
          JJ.length > 0 && this.trackedStepPulse++, (JJ.length > 0 || cJ.length > 0) && (this.trackedChange = {
            finished: new Set(JJ),
            unlocked: new Set(cJ),
            expiresAt: this.now() + eZ
          })
        } else {
          var jJ;
          this.trackedStepPulse = (null === (jJ = this.trackedSteps) || void 0 === jJ ? void 0 : jJ.questId) === UJ.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: UJ.id,
          progress: UJ.progress,
          finished: new Set([...null !== (ZJ = null === qJ || void 0 === qJ ? void 0 : qJ.finished) && void 0 !== ZJ ? ZJ : [], ...XJ]),
          unlocked: new Set([...null !== (FJ = null === qJ || void 0 === qJ ? void 0 : qJ.unlocked) && void 0 !== FJ ? FJ : [], ...AJ])
        }
      }
      entry(JJ, cJ) {
        var ZJ, FJ;
        const UJ = JJ.id === (null === (ZJ = this.authoritative) || void 0 === ZJ ? void 0 : ZJ.trackedQuestId),
          eJ = this.now() < this.trackAvailableAt,
          XJ = this.questTextTranslator(),
          AJ = JJ.subquests.map((cJ => {
            var ZJ, FJ, eJ, AJ, qJ, jJ;
            const YJ = null !== (ZJ = cJ.handInNpcName) && void 0 !== ZJ ? ZJ : JJ.giverName,
              hJ = this.translate("skyblockGame:progress", {
                current: cJ.progress.toLocaleString(this.locale),
                target: cJ.target.toLocaleString(this.locale)
              }),
              DJ = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: YJ ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [cJ.status],
              sJ = "active" === cJ.status || "ready" === cJ.status;
            return {
              id: cJ.id,
              name: vc(XJ, cJ.nameKey, cJ.nameParams),
              description: vc(XJ, cJ.descriptionKey, cJ.descriptionParams),
              progress: hJ,
              status: cJ.status,
              statusLabel: DJ ? this.translate(DJ, {
                npc: YJ
              }) : hJ,
              iconItem: sJ && null !== (FJ = cJ.questIconItem) && void 0 !== FJ ? FJ : null,
              barPercent: "active" === cJ.status && cJ.showsProgressBar ? Math.min(100, 100 * cJ.progress / cJ.target) : null,
              justFinished: UJ && null !== (eJ = null === (AJ = this.trackedChange) || void 0 === AJ ? void 0 : AJ.finished.has(cJ.id)) && void 0 !== eJ && eJ,
              justUnlocked: UJ && null !== (qJ = null === (jJ = this.trackedChange) || void 0 === jJ ? void 0 : jJ.unlocked.has(cJ.id)) && void 0 !== qJ && qJ
            }
          }));
        return {
          id: JJ.id,
          name: vc(XJ, JJ.nameKey, JJ.nameParams),
          description: vc(XJ, JJ.descriptionKey, JJ.descriptionParams),
          progress: cJ ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: JJ.progress.toLocaleString(this.locale),
            target: JJ.target.toLocaleString(this.locale)
          }),
          completed: cJ,
          tracked: UJ,
          selected: JJ.id === this.selected,
          canTrack: !cJ && !UJ && !eJ,
          trackLabel: this.translate(UJ ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : eJ ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== JJ.id,
          subquests: AJ,
          focusStep: null !== (FJ = AJ.find((JJ => null !== JJ.barPercent))) && void 0 !== FJ ? FJ : null,
          clock: this.clockText(JJ)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ;
        const YJ = [...null !== (JJ = null === (cJ = this.authoritative) || void 0 === cJ ? void 0 : cJ.active) && void 0 !== JJ ? JJ : [], ...null !== (ZJ = null === (FJ = this.authoritative) || void 0 === FJ ? void 0 : FJ.completed) && void 0 !== ZJ ? ZJ : []];
        var hJ, DJ, sJ, nJ;
        YJ.some((JJ => JJ.id === this.selected)) || (this.selected = null !== (hJ = null !== (DJ = null === (sJ = this.authoritative) || void 0 === sJ ? void 0 : sJ.trackedQuestId) && void 0 !== DJ ? DJ : null === (nJ = YJ[0]) || void 0 === nJ ? void 0 : nJ.id) && void 0 !== hJ ? hJ : null);
        const GJ = null !== (UJ = null === (eJ = this.authoritative) || void 0 === eJ ? void 0 : eJ.active.map((JJ => this.entry(JJ, !1)))) && void 0 !== UJ ? UJ : [];
        GJ.sort(((JJ, cJ) => Number(cJ.tracked) - Number(JJ.tracked)));
        const fJ = null !== (XJ = null === (AJ = this.authoritative) || void 0 === AJ ? void 0 : AJ.completed.map((JJ => this.entry(JJ, !0)))) && void 0 !== XJ ? XJ : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: GJ,
          completed: fJ,
          completedExpanded: this.completedExpanded,
          detail: null !== (qJ = [...GJ, ...fJ].find((JJ => JJ.selected))) && void 0 !== qJ ? qJ : null,
          tracked: null !== (jJ = GJ.find((JJ => JJ.tracked))) && void 0 !== jJ ? jJ : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function YZ(JJ) {
      var cJ;
      return null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.active.find((cJ => cJ.id === JJ.trackedQuestId))) && void 0 !== cJ ? cJ : null
    }
    const hZ = "skyblockDungeonsView";
    class DZ extends hJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          FJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(JJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = cJ, this.locale = ZJ, this.requestEnter = FJ, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = JJ => {
          this.selected = JJ, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const JJ = this.pickerEntry(),
            cJ = null === JJ || void 0 === JJ ? void 0 : JJ.difficulties[this.pageIndex];
          void 0 !== cJ && null !== cJ.unlockedBoss && (this.close(), this.requestEnter(JJ.id, cJ.difficulty))
        }
      }
      setTranslator(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = JJ, this.locale = cJ, this.emit()
      }
      Qn(JJ) {
        var cJ, ZJ;
        if (!this.xn) return "open" === JJ.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== JJ.kind ? "snapshot" === JJ.kind && (this.authoritative = JJ.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (cJ = null === (ZJ = this.pickerEntry()) || void 0 === ZJ ? void 0 : ZJ.difficulties.length) && void 0 !== cJ ? cJ : 1) - 1)), null === JJ.snapshot && this.open ? this.close() : this.emit()) : this.choose(JJ.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(JJ) {
        var cJ;
        const ZJ = null === (cJ = this.authoritative) || void 0 === cJ ? void 0 : cJ.dungeons.find((cJ => cJ.id === JJ));
        void 0 !== ZJ ? this.open && this.pickerDungeonId === JJ || (this.pickerDungeonId = JJ, this.pageIndex = Math.max(0, ZJ.difficulties.findLastIndex((JJ => null !== JJ.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${JJ}`)
      }
      turnTo(JJ) {
        var cJ, ZJ;
        const FJ = null !== (cJ = null === (ZJ = this.pickerEntry()) || void 0 === ZJ ? void 0 : ZJ.difficulties.length) && void 0 !== cJ ? cJ : 0;
        JJ < 0 || JJ >= FJ || JJ === this.pageIndex || (this.pageIndex = JJ, this.emit())
      }
      pickerEntry() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.authoritative) || void 0 === cJ ? void 0 : cJ.dungeons.find((JJ => JJ.id === this.pickerDungeonId))) && void 0 !== JJ ? JJ : null
      }
      difficulty(JJ) {
        const cJ = JJ.completions > 0,
          ZJ = null === JJ.bestMs ? null : (0, wJ.o)(JJ.bestMs);
        return {
          difficulty: JJ.difficulty,
          label: this.translate(wJ.d[JJ.difficulty]),
          colour: wJ.g[JJ.difficulty],
          beaten: cJ,
          bestTime: ZJ,
          completions: JJ.completions,
          summary: cJ ? [null === ZJ ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: ZJ
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: JJ.completions.toLocaleString(this.locale)
          })].filter((JJ => null !== JJ)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(JJ) {
        const cJ = JJ.difficulties.map((JJ => this.difficulty(JJ))),
          ZJ = cJ.filter((JJ => JJ.beaten)).length;
        return {
          id: JJ.id,
          name: this.translate(JJ.nameKey),
          selected: JJ.id === this.selected,
          beatenSummary: `${ZJ} / ${cJ.length}`,
          difficulties: cJ
        }
      }
      picker() {
        const JJ = this.pickerEntry();
        if (null === JJ || 0 === JJ.difficulties.length) return null;
        const cJ = JJ.difficulties.map(((cJ, ZJ) => {
          var FJ, UJ, eJ, XJ;
          const AJ = cJ.unlockedBoss,
            qJ = null === AJ ? this.lockedHint(JJ, ZJ) : null;
          return {
            ...this.difficulty(cJ),
            unlocked: null !== AJ,
            bossName: null === AJ ? null : this.translate(AJ.bossNameKey),
            bossMobType: null !== (FJ = null === AJ || void 0 === AJ ? void 0 : AJ.bossMobType) && void 0 !== FJ ? FJ : null,
            bossMobVariation: null !== (UJ = null === AJ || void 0 === AJ ? void 0 : AJ.bossMobVariation) && void 0 !== UJ ? UJ : null,
            lockedHint: null !== (eJ = null === qJ || void 0 === qJ ? void 0 : qJ.text) && void 0 !== eJ ? eJ : null,
            lockedHintHighlight: null !== (XJ = null === qJ || void 0 === qJ ? void 0 : qJ.highlight) && void 0 !== XJ ? XJ : null,
            current: ZJ === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(JJ.nameKey),
          pages: cJ,
          page: cJ[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < cJ.length - 1
        }
      }
      lockedHint(JJ, cJ) {
        var ZJ, FJ, UJ;
        if (0 === cJ && "number" === typeof JJ.combatLevelLock) {
          const cJ = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: JJ.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: cJ,
            colour: rc("combat"),
            icon: fc.combat
          })
        }
        const eJ = null !== (ZJ = null === (FJ = this.authoritative) || void 0 === FJ ? void 0 : FJ.dungeons) && void 0 !== ZJ ? ZJ : [],
          XJ = cJ > 0 ? JJ : null !== (UJ = eJ[eJ.indexOf(JJ) - 1]) && void 0 !== UJ ? UJ : null,
          AJ = cJ > 0 ? JJ.difficulties[cJ - 1] : null === XJ || void 0 === XJ ? void 0 : XJ.difficulties[0];
        if (null === XJ || void 0 === AJ) return null;
        const qJ = this.translate(XJ.nameKey);
        if (null === AJ.unlockedBoss) return XJ === JJ ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, AJ.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: qJ
        }, AJ.difficulty);
        const jJ = this.translate(AJ.unlockedBoss.bossNameKey);
        return XJ === JJ ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: jJ
        }, AJ.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: jJ,
            dungeon: qJ
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(JJ, cJ, ZJ) {
        return this.hintHighlighting(JJ, cJ, "difficulty", {
          name: this.translate(wJ.d[ZJ]),
          colour: wJ.g[ZJ],
          icon: null
        })
      }
      hintHighlighting(JJ, cJ, ZJ, FJ) {
        let {
          name: UJ,
          colour: eJ,
          icon: XJ
        } = FJ;
        const AJ = this.translate(JJ, {
          ...cJ,
          [ZJ]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(JJ, {
            ...cJ,
            [ZJ]: UJ
          }),
          highlight: 2 === AJ.length ? {
            before: AJ[0],
            name: UJ,
            after: AJ[1],
            colour: eJ,
            icon: XJ
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var JJ, cJ, ZJ;
        const FJ = null !== (JJ = null === (cJ = this.authoritative) || void 0 === cJ ? void 0 : cJ.dungeons) && void 0 !== JJ ? JJ : [];
        var UJ, eJ;
        FJ.some((JJ => JJ.id === this.selected)) || (this.selected = null !== (UJ = null === (eJ = FJ[0]) || void 0 === eJ ? void 0 : eJ.id) && void 0 !== UJ ? UJ : null);
        const XJ = FJ.map((JJ => this.entry(JJ)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: XJ,
          detail: null !== (ZJ = XJ.find((JJ => JJ.selected))) && void 0 !== ZJ ? ZJ : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const sZ = ["mining", "farming", "foraging", "fishing", "combat"],
      nZ = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      GZ = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function fZ() {
      for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
      return cJ.map(((JJ, cJ) => ({
        amount: JJ,
        coins: nZ[cJ],
        xp: GZ[cJ]
      })))
    }
    const xZ = fZ(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      rZ = fZ(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      vZ = fZ(50, 100, 250, 500, 1e3, 2500, 5e3),
      mZ = fZ(25, 50, 100, 250, 500, 1e3),
      QZ = fZ(10, 25, 50, 100, 250, 500, 1e3),
      EZ = fZ(1, 5, 10, 25, 50);

    function VZ(JJ, cJ) {
      return {
        id: JJ,
        category: "fishing",
        item: cJ,
        drops: [cJ],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QZ
      }
    }
    const KZ = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: rZ
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: vZ
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: vZ
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: mZ
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: mZ
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: rZ
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: xZ
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: xZ
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: xZ
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: vZ
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: rZ
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: rZ
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: rZ
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: vZ
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: vZ
      }, VZ("wheatfish", "Wheatfish"), VZ("darter", "Darter"), VZ("sunset_minnow", "Sunset Minnow"), VZ("root_flounder", "Root Flounder"), VZ("greenfin_loach", "Greenfin Loach"), VZ("red_strongfish", "Red Strongfish"), VZ("green_strongfish", "Green Strongfish"), VZ("boomerang_fish", "Boomerang Fish"), VZ("seahorse", "Seahorse"), VZ("spined_stickleback", "Spined Stickleback"), VZ("moon_strongfish", "Moon Strongfish"), VZ("boulder_bass", "Boulder Bass"), VZ("grass_snapper", "Grass Snapper"), VZ("crystal_wheatfish", "Crystalized Wheatfish", EZ), VZ("moonstone_pupfish", "Moonstone Pupfish", EZ), VZ("reedglass_minnow", "Reedglass Minnow"), VZ("mangrove_herring", "Mangrove Herring"), VZ("mudline_perch", "Mudline Perch"), VZ("coastal_mullet", "Coastal Mullet"), VZ("reef_sardine", "Reef Sardine"), VZ("root_perch", "Root Perch"), VZ("driftwood_catfish", "Driftwood Catfish"), VZ("aether_minnow", "Aether Minnow"), VZ("needlefish", "Tri-Pointed Needlefish"), VZ("threadfin_bream", "Threadfin Bream"), VZ("mudbelly_tilapia", "Mudbelly Tilapia"), VZ("rotslab_eel", "Rotslab Eel"), VZ("polarflash_electron", "Polarflash Electron"), VZ("mireback_carp", "Mireback Carp"), VZ("blackwater_bream", "Blackwater Bream"), VZ("stone_grouper", "Stone Grouper"), VZ("shadeback_ray", "Shadeback Ray"), VZ("glacial_silverfish", "Glacial Silverfish"), VZ("hatchetfish", "Hatchetfish"), VZ("moonlit_boomerang", "Moonlit Boomerang Fish"), VZ("murkborne_ray", "Murkborne Ray"), VZ("bamboo_catfish", "Bamboo Catfish"), VZ("mossback_arapaima", "Mossback Arapaima"), VZ("murk_stingray", "Murk Stingray"), VZ("channel_sawfish", "Channel Sawfish"), VZ("boned_sturgeon", "Boned Sturgeon"), VZ("oarfish", "Oarfish"), VZ("snakehead", "Snakehead", EZ), VZ("eldertide_leviathan", "Eldertide Leviathan", EZ), VZ("pithead", "Pithead"), VZ("electric_eel", "Electric Eel"), VZ("shadow_darter", "Shadow Darter"), VZ("abyss_carp", "Abyss Carp"), VZ("nomai_moray", "Nomai Moray"), VZ("silver_dragonfish", "Silver Dragonfish"), VZ("giant_moray", "Giant Moray"), VZ("coelacanth", "Coelacanth", EZ), VZ("frost_herring", "Frost Herring"), VZ("permafrost_halibut", "Permafrost Halibut"), VZ("glacial_lanternfish", "Glacial Lanternfish"), VZ("frozen_grenadier", "Frozen Grenadier"), VZ("blackfin_icefish", "Blackfin Icefish"), VZ("moonfish", "Moonfish"), VZ("alpha_strongfish", "Alpha Moon Strongfish"), VZ("deep_lanternfish", "Deepwater Lanternfish", EZ), VZ("pearlescent_moonfish", "Pearlescent Moonfish", EZ), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: rZ
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: mZ
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: mZ
      }],
      yZ = (new Map(KZ.map((JJ => [JJ.id, JJ]))), new Map),
      SZ = new Map;
    for (const eq of KZ) {
      for (const [JJ, cJ] of Object.entries(null !== (IZ = eq.blocks) && void 0 !== IZ ? IZ : {})) {
        var IZ;
        yZ.set(JJ, {
          collection: eq,
          amount: cJ
        })
      }
      for (const JJ of null !== (MZ = eq.drops) && void 0 !== MZ ? MZ : []) {
        var MZ;
        SZ.set(JJ, eq)
      }
    }

    function bZ(JJ, cJ) {
      let ZJ = 0;
      for (; ZJ < JJ.tiers.length && cJ >= JJ.tiers[ZJ].amount;) ZJ++;
      return ZJ
    }
    const wZ = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function WZ(JJ) {
      return wZ[JJ - 1]
    }
    const gZ = "skyblockCollectionsView";
    class HZ extends hJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          FJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : JJ => JJ;
        super(JJ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = cJ, this.locale = ZJ, this.itemName = FJ, this.counts = null, this.category = "mining", this.selected = KZ[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = JJ => {
          this.category = JJ, this.selected = this.inCategory(JJ)[0].id, this.emit()
        }, this.select = JJ => {
          this.selected = JJ, this.emit()
        }
      }
      setTranslator(JJ, cJ, ZJ) {
        this.translate = JJ, this.locale = cJ, this.itemName = ZJ, this.emit()
      }
      Qn(JJ) {
        if (!this.xn)
          if ("collOpen" !== JJ.kind) {
            (JJ.collFull || null === this.counts) && (this.counts = new Map);
            for (const [cJ, ZJ] of JJ.collCounts) this.counts.set(cJ, ZJ);
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
        var JJ;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const cJ = this.inCategory(this.category).map((JJ => this.collectionView(JJ))),
          ZJ = KZ.reduce(((JJ, cJ) => JJ + this.tierOf(cJ)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: sZ.map((JJ => this.categoryView(JJ))),
          collections: cJ,
          detail: null !== (JJ = cJ.find((JJ => JJ.selected))) && void 0 !== JJ ? JJ : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(ZJ)
          })
        }
      }
      categoryView(JJ) {
        const cJ = this.inCategory(JJ),
          ZJ = cJ.reduce(((JJ, cJ) => JJ + this.tierOf(cJ)), 0),
          FJ = cJ.reduce(((JJ, cJ) => JJ + cJ.tiers.length), 0);
        return {
          id: JJ,
          label: this.translate(`skyblockGame:${JJ}`),
          icon: fc[JJ],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(ZJ),
            target: this.number(FJ)
          }),
          selected: JJ === this.category
        }
      }
      collectionView(JJ) {
        var cJ, ZJ;
        const FJ = null !== (cJ = this.counts.get(JJ.id)) && void 0 !== cJ ? cJ : 0,
          UJ = bZ(JJ, FJ),
          eJ = null !== (ZJ = JJ.tiers[UJ]) && void 0 !== ZJ ? ZJ : null,
          XJ = 0 === UJ ? 0 : JJ.tiers[UJ - 1].amount;
        return {
          id: JJ.id,
          name: this.itemName(JJ.item),
          icon: JJ.item,
          selected: JJ.id === this.selected,
          locked: 0 === FJ,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(FJ)
          }),
          tier: 0 === UJ ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(UJ),
          percent: null === eJ ? 100 : Math.min(100, (FJ - XJ) / (eJ.amount - XJ) * 100),
          progress: null === eJ ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(FJ),
            target: this.number(eJ.amount)
          }),
          nextReward: null === eJ ? null : this.reward(JJ, eJ.coins, eJ.xp)
        }
      }
      reward(JJ, cJ, ZJ) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(cJ),
          xp: this.number(ZJ),
          skill: this.translate(`skyblockGame:${JJ.category}`)
        })
      }
      tierLabel(JJ) {
        return this.translate("skyblockGame:collectionTier", {
          tier: WZ(JJ)
        })
      }
      tierOf(JJ) {
        var cJ;
        return bZ(JJ, null !== (cJ = this.counts.get(JJ.id)) && void 0 !== cJ ? cJ : 0)
      }
      inCategory(JJ) {
        return KZ.filter((cJ => cJ.category === JJ))
      }
      number(JJ) {
        return JJ.toLocaleString(this.locale)
      }
    }
    const PZ = "skyblockPortalTransitView",
      kZ = "skyblockPortalArrival";
    class pZ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Uf = JJ, this.storage = cJ, this.now = ZJ, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Qn(JJ) {
        const cJ = {
          zoneNameKey: JJ.transitZoneNameKey,
          variation: JJ.transitZoneVariation,
          colour: JJ.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(kZ, cJ), this.show("departure", cJ.zoneNameKey, cJ.colour, JJ.transitDurationMs, JJ.transitDurationMs + 1500, (() => {
          this.storage.removeItem(kZ)
        }))
      }
      resumeArrival(JJ) {
        const cJ = this.storage.getItem(kZ);
        this.storage.removeItem(kZ), null === cJ || cJ.variation !== JJ || this.now() - cJ.departedAt > 3e4 || this.show("arrival", cJ.zoneNameKey, cJ.colour, 3200, 2e4)
      }
      finishArrival(JJ) {
        var cJ;
        "arrival" === (null === (cJ = this.view) || void 0 === cJ ? void 0 : cJ.phase) && this.view.token === JJ && (this.clearTimer(), this.view = null, this.Uf(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: JJ,
          zoneNameKey: cJ,
          colour: ZJ,
          durationMs: FJ
        }, this.Uf(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Uf(null), null === eJ || void 0 === eJ || eJ()
        }), UJ)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const dZ = "skyblockDailyRewardView",
      zZ = "skyblockDailyRewardCoin";
    class NZ {
      constructor(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          qJ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Uf = JJ, this.isBusy = cJ, this.holdQuestPopups = ZJ, this.onHeldCoinsChanged = FJ, this.onCoinLanded = UJ, this.onStarted = eJ, this.onFinished = XJ, this.onItemLanded = AJ, this.now = qJ, this.hj = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.playing) || void 0 === cJ ? void 0 : cJ.view) && void 0 !== JJ ? JJ : null
      }
      getHeldCoins() {
        var JJ, cJ;
        let ZJ = 0;
        for (const FJ of this.hj) ZJ += FJ.coins;
        return ZJ - (null !== (JJ = null === (cJ = this.playing) || void 0 === cJ ? void 0 : cJ.released) && void 0 !== JJ ? JJ : 0)
      }
      Qn(JJ) {
        "dailyRewardClaimed" !== JJ.kind ? (this.queue.push(JJ), this.Hh()) : this.hj.push({
          coins: JJ.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Hh() {
        const JJ = this.now();
        if (null === this.playing) return this.releaseUnshown(JJ), void this.startNext(JJ);
        const cJ = this.playing,
          ZJ = JJ - cJ.startedAt,
          FJ = cJ.view.flyingCoins,
          UJ = function(JJ, cJ) {
            let ZJ = 0;
            for (; ZJ < cJ && TZ(ZJ, cJ) <= JJ;) ZJ++;
            return ZJ
          }(ZJ, FJ);
        if (UJ !== cJ.landed) {
          for (let JJ = UJ - cJ.landed > 2 ? UJ - 1 : cJ.landed; JJ < UJ; JJ++) this.onCoinLanded(JJ, FJ);
          cJ.landed = UJ, cJ.released = Math.round(cJ.view.coins * UJ / FJ), this.onHeldCoinsChanged()
        }
        for (; cJ.itemsLanded < cJ.view.items.length && 2e3 + 160 * cJ.itemsLanded + 630 <= ZJ;) this.onItemLanded(cJ.itemsLanded), cJ.itemsLanded++;
        ZJ >= cJ.view.durationMs && (this.finish(), this.startNext(JJ))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.hj = [], this.Uf(null)
      }
      startNext(JJ) {
        if (0 === this.queue.length || this.isBusy()) return;
        const cJ = this.queue.shift();
        this.token++;
        const ZJ = {
          token: this.token,
          day: cJ.dailyRewardDay,
          coins: cJ.dailyRewardCoins,
          items: cJ.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: cJ.dailyRewardDay === IJ ? 24 : 14
        };
        this.playing = {
          view: ZJ,
          startedAt: JJ,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Uf(ZJ), this.onStarted(ZJ)
      }
      finish() {
        this.hj.shift(), this.playing = null, this.holdQuestPopups(!1), this.Uf(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(JJ) {
        if (this.queue.length > 0 || 0 === this.hj.length) return;
        const cJ = this.hj.length;
        this.hj = this.hj.filter((cJ => JJ - cJ.receivedAt < 6e4)), this.hj.length !== cJ && this.onHeldCoinsChanged()
      }
    }

    function OZ(JJ, cJ) {
      return 450 + 715 * JJ / (cJ - 1)
    }

    function TZ(JJ, cJ) {
      return OZ(JJ, cJ) + 650
    }
    const CZ = "skyblockMailboxView";
    class uZ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Uf = JJ, this.isBusy = cJ, this.onStarted = ZJ, this.now = FJ, this.waiting = [], this.playing = null, this.token = 0, this.itemName = JJ => JJ
      }
      getSnapshot() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.playing) || void 0 === cJ ? void 0 : cJ.view) && void 0 !== JJ ? JJ : null
      }
      setItemName(JJ) {
        this.itemName = JJ
      }
      Qn(JJ) {
        this.waiting.push(...JJ.mailLetters), this.Hh()
      }
      Hh() {
        const JJ = this.now();
        null !== this.playing && JJ - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Uf(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(JJ)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Uf(null)
      }
      start(JJ) {
        const cJ = this.waiting.slice(0, 3);
        this.token++;
        const ZJ = {
          token: this.token,
          letters: cJ.map((JJ => this.toView(JJ))),
          more: this.waiting.length - cJ.length,
          durationMs: 4500 + 700 * cJ.length
        };
        this.waiting = [], this.playing = {
          view: ZJ,
          startedAt: JJ
        }, this.Uf(ZJ), this.onStarted(ZJ)
      }
      toView(JJ) {
        return {
          coins: JJ.mailCoins,
          items: JJ.mailItems.map((JJ => {
            var cJ;
            return {
              itemName: JJ.mailItemName,
              amount: JJ.mailItemAmount,
              label: null !== (cJ = JJ.mailItemLabel) && void 0 !== cJ ? cJ : this.itemName(JJ.mailItemName)
            }
          })),
          reasonKey: JJ.mailReasonKey,
          reasonParams: JJ.mailReasonParams
        }
      }
    }
    const iZ = "skyblockQuestGraphView",
      RZ = "skyblockDevQuestJump";

    function LZ(JJ) {
      if (0 === JJ.length) return "";
      const cJ = [`M ${JJ[0].x} ${JJ[0].y}`];
      for (let FJ = 1; FJ < JJ.length - 1; FJ++) {
        const ZJ = JJ[FJ + 1];
        cJ.push(`Q ${JJ[FJ].x} ${JJ[FJ].y} ${(JJ[FJ].x+ZJ.x)/2} ${(JJ[FJ].y+ZJ.y)/2}`)
      }
      const ZJ = JJ[JJ.length - 1];
      return cJ.push(`L ${ZJ.x} ${ZJ.y}`), cJ.join(" ")
    }

    function aZ(JJ, cJ) {
      return JJ < cJ ? `${JJ}|${cJ}` : `${cJ}|${JJ}`
    }
    class BZ extends hJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(JJ, ZJ, FJ), this.translate = cJ, this.requestJump = UJ, this.requestArrive = eJ, this.storage = XJ, this.now = AJ, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = JJ => {
          JJ !== this.hoveredId && (this.hoveredId = JJ, this.emit())
        }, this.jump = JJ => {
          this.close(), this.requestJump(JJ)
        }
      }
      Qn(JJ) {
        if (!this.xn)
          if ("graph" !== JJ.kind) {
            if ("jumping" === JJ.kind) {
              const cJ = {
                questId: JJ.graphQuestId,
                variation: JJ.graphVariation,
                completes: JJ.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(RZ, cJ)
            }
          } else {
            const cJ = ++this.graphCount;
            ZJ.e(105).then((() => ZJ(5783))).then((ZJ => {
              let {
                default: FJ
              } = ZJ;
              this.xn || cJ !== this.graphCount || (this.layout = function(JJ, cJ, ZJ) {
                var FJ, UJ;
                const eJ = new JJ.graphlib.Graph;
                eJ.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), eJ.setDefaultEdgeLabel((() => ({})));
                const XJ = new Set;
                for (const YJ of cJ) XJ.add(YJ.graphQuestId), eJ.setNode(YJ.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const AJ = ZJ.filter((JJ => XJ.has(JJ.graphFromId) && XJ.has(JJ.graphToId) && JJ.graphFromId !== JJ.graphToId)),
                  qJ = new Map;
                for (const YJ of [...AJ].sort(((JJ, cJ) => Number("awaits" === JJ.graphEdgeKind) - Number("awaits" === cJ.graphEdgeKind)))) {
                  const JJ = aZ(YJ.graphFromId, YJ.graphToId);
                  qJ.has(JJ) || (qJ.set(JJ, YJ), eJ.setEdge(YJ.graphFromId, YJ.graphToId))
                }
                JJ.layout(eJ);
                const jJ = eJ.graph();
                return {
                  width: Math.ceil(null !== (FJ = jJ.width) && void 0 !== FJ ? FJ : 0),
                  height: Math.ceil(null !== (UJ = jJ.height) && void 0 !== UJ ? UJ : 0),
                  nodes: cJ.map((JJ => {
                    var cJ, ZJ;
                    const FJ = eJ.node(JJ.graphQuestId);
                    return {
                      node: JJ,
                      left: (null !== (cJ = FJ.x) && void 0 !== cJ ? cJ : 0) - 95,
                      top: (null !== (ZJ = FJ.y) && void 0 !== ZJ ? ZJ : 0) - 26
                    }
                  })),
                  edges: AJ.map((JJ => {
                    var cJ;
                    const ZJ = qJ.get(aZ(JJ.graphFromId, JJ.graphToId)),
                      FJ = null !== (cJ = eJ.edge(ZJ.graphFromId, ZJ.graphToId).points) && void 0 !== cJ ? cJ : [];
                    return {
                      edge: JJ,
                      key: `${JJ.graphFromId}|${JJ.graphToId}|${JJ.graphEdgeKind}`,
                      path: LZ(ZJ.graphFromId === JJ.graphFromId ? FJ : [...FJ].reverse())
                    }
                  })),
                  plans: new Map(cJ.map((JJ => [JJ.graphQuestId, new Set([JJ.graphQuestId, ...JJ.graphPlanIds])])))
                }
              }(FJ, JJ.graphNodes, JJ.graphEdges), this.show())
            })).catch((JJ => {
              console.error("The quest graph could not be laid out", JJ)
            }))
          }
      }
      resumeJump(JJ) {
        const cJ = this.storage.getItem(RZ);
        this.storage.removeItem(RZ), null === cJ || cJ.variation !== JJ || this.now() - cJ.departedAt > 6e4 || this.requestArrive(cJ.questId, cJ.completes)
      }
      setTranslator(JJ) {
        this.translate = JJ, this.emit()
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
        var JJ, cJ;
        return null !== (JJ = null === this.hoveredId || null === (cJ = this.layout) || void 0 === cJ ? void 0 : cJ.plans.get(this.hoveredId)) && void 0 !== JJ ? JJ : new Set
      }
      buildSnapshot() {
        const JJ = this.layout;
        if (null === JJ) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const cJ = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: JJ.width,
          height: JJ.height,
          nodes: JJ.nodes.map((JJ => {
            let {
              node: ZJ,
              left: FJ,
              top: UJ
            } = JJ;
            return {
              id: ZJ.graphQuestId,
              name: this.translate(ZJ.graphNameKey),
              detail: null === ZJ.graphGiverName ? ZJ.graphZoneId : `${ZJ.graphGiverName} \xb7 ${ZJ.graphZoneId}`,
              state: ZJ.graphState,
              left: FJ,
              top: UJ,
              inPlan: cJ.has(ZJ.graphQuestId),
              hovered: ZJ.graphQuestId === this.hoveredId
            }
          })),
          edges: JJ.edges.map((JJ => {
            let {
              edge: ZJ,
              key: FJ,
              path: UJ
            } = JJ;
            return {
              key: FJ,
              kind: ZJ.graphEdgeKind,
              path: UJ,
              inPlan: cJ.has(ZJ.graphFromId) && cJ.has(ZJ.graphToId)
            }
          })),
          planning: cJ.size > 0
        }
      }
    }
    var tZ = ZJ(36065);
    const oZ = 250,
      lZ = 2150,
      JF = -2.8,
      cF = 2.2,
      ZF = -27,
      FF = {
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
      eF = Math.round(50 + 1e3 * (UF.delay + UF.period / 2)),
      XF = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      AF = Array.from({
        length: 26
      }, ((JJ, cJ) => {
        const ZJ = 2.39996 * cJ,
          FJ = .5 + .618034 * cJ % 1 * .23,
          UJ = cJ % 3 !== 2;
        return {
          rune: UJ ? XF[7 * cJ % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(ZJ)*FJ).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(ZJ)*FJ).toFixed(3)})`,
            "--spin": 40 * (cJ % 5 - 2) + "deg",
            "--size": (UJ ? 1 + cJ % 4 * .2 : .3 + cJ % 2 * .15) + "rem",
            "--duration": `${(1.8+7*cJ%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*cJ%3).toFixed(2)}s`
          }
        }
      }));

    function qF(JJ, cJ) {
      return Array.from({
        length: 30 + 3 * JJ + (cJ ? 10 : 0)
      }, ((JJ, cJ) => {
        const ZJ = cJ < 4,
          FJ = ZJ ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          UJ = ZJ ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          eJ = ZJ ? 2.2 : .6 + Math.random(),
          XJ = ZJ ? .3 : Math.random() < .5 ? .16 : .24,
          AJ = ZJ ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": FJ,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${UJ.toFixed(2)}rem`,
          "--length": `${eJ.toFixed(2)}rem`,
          "--width": `${XJ}rem`,
          "--duration": `${Math.round(AJ)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function jF(JJ) {
      let {
        zeta: cJ,
        period: ZJ
      } = JJ;
      const FJ = 2 * Math.PI / ZJ;
      return {
        w: FJ,
        decay: cJ * FJ / Math.sqrt(1 - cJ * cJ)
      }
    }
    let YF = !1;

    function hF() {
      if (YF) return;
      YF = !0;
      const JJ = document.createElement("style");
      JJ.textContent = function() {
        const JJ = jF(FF),
          cJ = jF(UF),
          ZJ = cJ => Math.exp(-JJ.decay * cJ) * Math.sin(JJ.w * cJ),
          FJ = ZJ(Math.atan(JJ.w / JJ.decay) / JJ.w),
          UJ = .25,
          eJ = 2.15,
          XJ = Math.round(215),
          AJ = [];
        for (let qJ = 0; qJ <= XJ; qJ++) {
          const JJ = qJ / XJ * eJ;
          let jJ = Math.sin(Math.min(JJ, UJ) / UJ * Math.PI / 2) ** 2,
            YJ = 0,
            hJ = 1,
            DJ = 1 - .2 * jJ,
            sJ = 1;
          if (JJ >= UJ) {
            const XJ = JJ - UJ,
              AJ = Math.max(0, XJ - .05);
            jJ = Math.exp(-AJ / .05), YJ = ZJ(AJ + FF.lead * (1 - Math.exp(-AJ / FF.rush))) / FJ;
            const qJ = AJ - UF.delay,
              nJ = qJ <= 0 ? 0 : 1 - Math.exp(-cJ.decay * qJ) * (Math.cos(cJ.w * qJ) + cJ.decay / cJ.w * Math.sin(cJ.w * qJ)),
              GJ = Math.max(0, (JJ - 1.77) / (eJ - 1.77));
            hJ = (1 + (UF.to - 1) * nJ) * (1 + .08 * GJ), DJ = 1.1 + 1.5 * Math.exp(-XJ / .07) + .3 * Math.exp(-(((1e3 * XJ - eF) / 100) ** 2)) + .8 * GJ, sJ = 1 - GJ ** 1.5
          }
          const nJ = .15 * jJ + JF * YJ,
            GJ = -.1 * jJ + cF * YJ,
            fJ = 3 * jJ + ZF * YJ;
          AJ.push(`${(qJ/XJ*100).toFixed(3)}% { opacity: ${sJ.toFixed(3)}; transform: translate(${nJ.toFixed(3)}rem, ${GJ.toFixed(3)}rem) rotate(${fJ.toFixed(2)}deg) scale(${hJ.toFixed(3)}); filter: brightness(${DJ.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${AJ.join(" ")} }`
      }(), document.head.append(JJ)
    }
    const DF = "skyblockForgeView",
      sF = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class nF extends hJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        super(JJ, ZJ, FJ), this.translate = cJ, this.requestForge = UJ, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (JJ, cJ) => {
          var ZJ, FJ;
          null !== this.forging || (null !== (ZJ = this.owned[(0, tZ.o)(cJ, JJ)]) && void 0 !== ZJ ? ZJ : 0) <= 0 || (this.selected[JJ] = this.selected[JJ] === cJ ? null : cJ, this.status = null, null === (FJ = this.onPartSelected) || void 0 === FJ || FJ.call(this), this.emit())
        }, this.forge = JJ => {
          var cJ, ZJ;
          const FJ = this.selectedParts();
          if (null === FJ || this.isPending() || !this.open) return;
          const UJ = (0, tZ.m)(FJ);
          if (null === UJ || UJ.coalCost > this.coal) return;
          const eJ = this.preview(UJ),
            XJ = null !== (cJ = null === (ZJ = this.onForgeStarted) || void 0 === ZJ ? void 0 : ZJ.call(this, eJ.tier, eJ.named, JJ)) && void 0 !== cJ ? cJ : () => {};
          if (this.dropArrival(), JJ) {
            const JJ = {
              id: ++this.forgeId,
              preview: eJ,
              timers: [],
              stopSounds: XJ,
              landed: !1,
              reply: null
            };
            JJ.timers.push(setTimeout((() => {
              JJ.landed = !0, null !== JJ.reply && (this.apply(JJ.reply), JJ.reply = null, this.emit())
            }), oZ), setTimeout((() => {
              this.finishForge(JJ)
            }), lZ)), this.forging = JJ
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(FJ)
        }, this.snapshot = this.buildSnapshot()
      }
      Qn(JJ) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === JJ.forgeMessageKind) return this.dropForge(), this.apply(JJ), this.status = null, void this.show();
        const cJ = this.forging;
        if (null !== cJ && null !== JJ.forgeRefusalKey) this.dropForge();
        else if (null !== cJ && !cJ.landed) return void(cJ.reply = JJ);
        this.apply(JJ), this.emit()
      }
      apply(JJ) {
        if (this.owned = JJ.forgeOwnedParts, this.coal = JJ.forgeCoalOwned, this.keepSelectionOwned("open" === JJ.forgeMessageKind), null !== JJ.forgeForgedSwordId) {
          var cJ;
          const ZJ = (0, tZ.m)(JJ.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.displayName) && void 0 !== cJ ? cJ : ""
            }
          }
        } else null !== JJ.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: JJ.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(JJ) {
        this.translate = JJ, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(JJ) {
        var cJ;
        this.forging = null;
        const ZJ = this.selectedParts(),
          FJ = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: JJ.id,
          sameSword: null !== ZJ && (null === (cJ = (0, tZ.m)(ZJ)) || void 0 === cJ ? void 0 : cJ.displayName) === JJ.preview.name,
          timer: FJ
        }, this.emit()
      }
      dropForge() {
        const JJ = this.forging;
        if (null !== JJ) {
          this.forging = null;
          for (const cJ of JJ.timers) clearTimeout(cJ);
          JJ.stopSounds(), null !== JJ.reply && this.apply(JJ.reply)
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
        var JJ, cJ, ZJ;
        const FJ = this.selectedParts(),
          UJ = null === FJ ? null : (0, tZ.m)(FJ),
          eJ = null !== (JJ = null === (cJ = this.forging) || void 0 === cJ ? void 0 : cJ.preview) && void 0 !== JJ ? JJ : null === UJ ? null : this.preview(UJ);
        return {
          enabled: this.received,
          open: this.open,
          slots: tZ.k.map((JJ => ({
            kind: JJ,
            label: this.translate(sF[JJ]),
            parts: this.partsFor(JJ)
          }))),
          coalOwned: this.coal,
          preview: eJ,
          unformedSword: tZ.g[null !== (ZJ = this.selected.Blade) && void 0 !== ZJ ? ZJ : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((JJ => JJ > 0)),
          canForge: null !== eJ && !eJ.coalShort && !this.isPending(),
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
      preview(JJ) {
        return {
          name: JJ.displayName,
          lore: JJ.lore,
          baseSword: JJ.baseSword,
          enchantmentTier: JJ.enchantmentTier,
          tier: Number(JJ.enchantmentTier.slice(-1)),
          named: JJ.named,
          stats: this.stats(JJ),
          effects: JJ.effects,
          coalCost: JJ.coalCost,
          coalShort: null === this.forging && JJ.coalCost > this.coal
        }
      }
      partsFor(JJ) {
        const cJ = [];
        for (const FJ of tZ.d) {
          var ZJ;
          const UJ = (0, tZ.o)(FJ, JJ),
            eJ = null !== (ZJ = this.owned[UJ]) && void 0 !== ZJ ? ZJ : 0;
          eJ > 0 && cJ.push({
            material: FJ,
            itemName: UJ,
            owned: eJ,
            selected: this.selected[JJ] === FJ,
            placeholder: !1
          })
        }
        if (0 === cJ.length) {
          const ZJ = tZ.d[0];
          cJ.push({
            material: ZJ,
            itemName: (0, tZ.o)(ZJ, JJ),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return cJ
      }
      stats(JJ) {
        const cJ = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${JJ.powerMultiplier.toFixed(2)}`,
          better: JJ.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${JJ.damageMultiplier.toFixed(2)}`,
          better: JJ.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/JJ.cooldownMultiplier).toFixed(2)}`,
          better: JJ.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${JJ.knockbackMultiplier.toFixed(2)}`,
          better: JJ.knockbackMultiplier > 1
        }];
        return JJ.reachBonus > 0 && cJ.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${JJ.reachBonus.toFixed(1)}`,
          better: !0
        }), JJ.damageReduction > 0 && cJ.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*JJ.damageReduction)}%`,
          better: !0
        }), cJ
      }
      selectedParts() {
        const {
          Blade: JJ,
          Guard: cJ,
          Handle: ZJ
        } = this.selected;
        return null === JJ || null === cJ || null === ZJ ? null : {
          blade: JJ,
          guard: cJ,
          handle: ZJ
        }
      }
      keepSelectionOwned(JJ) {
        for (const ZJ of tZ.k) {
          var cJ;
          const FJ = this.selected[ZJ];
          if (null !== FJ && (null !== (cJ = this.owned[(0, tZ.o)(FJ, ZJ)]) && void 0 !== cJ ? cJ : 0) > 0) continue;
          if (!JJ) {
            this.selected[ZJ] = null;
            continue
          }
          const UJ = [...tZ.d].reverse().find((JJ => {
            var cJ;
            return (null !== (cJ = this.owned[(0, tZ.o)(JJ, ZJ)]) && void 0 !== cJ ? cJ : 0) > 0
          }));
          this.selected[ZJ] = null !== UJ && void 0 !== UJ ? UJ : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const GF = "skyblockSmugglerView",
      fF = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class xF extends hJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(JJ, ZJ, FJ), this.translate = cJ, this.requestBuy = UJ, this.now = eJ, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = JJ => JJ, this.onBought = null, this.buy = JJ => {
          const cJ = this.deals[JJ];
          void 0 !== cJ && !this.isPending() && this.open && !this.soldOut.has(JJ) && this.canAfford(cJ) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, JJ))
        }, this.snapshot = this.buildSnapshot()
      }
      Qn(JJ) {
        if (this.received = !0, this.day = JJ.smugglerDay, this.deals = JJ.smugglerDeals, this.rivets = JJ.smugglerRivetsOwned, this.crests = JJ.smugglerCrestsOwned, this.soldOut = new Set(JJ.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + JJ.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === JJ.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = JJ.smugglerBoughtSlot, null !== JJ.smugglerBoughtSlot) {
          var cJ, ZJ;
          const FJ = this.deals[JJ.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === FJ ? "" : this.dealName(FJ),
              amount: String(null !== (cJ = null === FJ || void 0 === FJ ? void 0 : FJ.smugglerDealAmount) && void 0 !== cJ ? cJ : 0)
            }
          }, this.boughtCount++, null === (ZJ = this.onBought) || void 0 === ZJ || ZJ.call(this)
        } else null !== JJ.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: JJ.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(JJ, cJ, ZJ) {
        this.translate = JJ, void 0 !== ZJ && (this.itemName = ZJ), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(JJ) {
        if (null !== JJ.smugglerDealUniqueName) return JJ.smugglerDealUniqueName;
        const cJ = fF[JJ.smugglerDealItem];
        return void 0 === cJ ? this.itemName(JJ.smugglerDealItem) : this.translate(cJ)
      }
      canAfford(JJ) {
        return JJ.smugglerDealRivets <= this.rivets && JJ.smugglerDealCrests <= this.crests
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
        const JJ = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return JJ <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : JJ < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(JJ)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(JJ / 60)),
          minutes: String(JJ % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((JJ, cJ) => ({
            slot: cJ,
            itemName: JJ.smugglerDealItem,
            displayName: this.dealName(JJ),
            enchantmentTier: JJ.smugglerDealEnchantmentTier,
            amount: JJ.smugglerDealAmount,
            rivets: JJ.smugglerDealRivets,
            crests: JJ.smugglerDealCrests,
            affordable: this.canAfford(JJ),
            soldOut: this.soldOut.has(cJ),
            justBought: this.boughtSlot === cJ
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
    const rF = "skyblockPassageView",
      vF = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function mF(JJ, cJ) {
      return JJ(vF[cJ])
    }

    function QF(JJ, cJ, ZJ, FJ) {
      const UJ = Math.ceil((ZJ - FJ) / 864e5),
        eJ = mF(JJ, cJ);
      return UJ > 1 ? JJ("skyblockGame:passageNextDays", {
        phase: eJ,
        days: String(UJ)
      }) : JJ("skyblockGame:passageNextSoon", {
        phase: eJ
      })
    }
    class EF extends hJ {
      constructor(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(JJ, ZJ, FJ), this.translate = cJ, this.now = UJ, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = JJ => JJ, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Qn(JJ) {
        this.message = JJ, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(JJ, cJ, ZJ) {
        this.translate = JJ, void 0 !== ZJ && (this.itemName = ZJ), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(JJ) {
        return {
          itemName: JJ.passageFish,
          displayName: this.itemName(JJ.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(JJ.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const JJ = this.message;
        return null === JJ ? {
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
          phase: JJ.passagePhase,
          phaseName: mF(this.translate, JJ.passagePhase),
          visitors: JJ.passageVisitors.map((JJ => this.describe(JJ))),
          resting: this.describe(JJ.passageResting),
          nextPhase: JJ.passageNextPhase,
          next: QF(this.translate, JJ.passageNextPhase, JJ.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var VF = ZJ(37529);
    const KF = "skyblockKeepersChairView";
    class yF extends hJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new VF.e;
        super(JJ, ZJ, FJ), this.translate = cJ, this.requestAim = UJ, this.now = eJ, this.pacer = XJ, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = JJ => JJ, this.aim = JJ => {
          !this.awaitingReply && this.open && this.atChair && JJ !== this.favoured && (null === JJ || this.islands.some((cJ => cJ.keepersChairIslandId === JJ && cJ.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== JJ && void 0 !== JJ ? JJ : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = XJ.subscribe((() => {
          this.emit()
        }))
      }
      Qn(JJ) {
        var cJ, ZJ;
        this.received = !0;
        const FJ = this.favoured,
          UJ = this.atChair;
        var eJ;
        return this.islands = JJ.keepersChairIslands, this.favoured = JJ.keepersChairFavoured, this.passage = null !== (cJ = JJ.keepersChairPassage) && void 0 !== cJ ? cJ : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (ZJ = JJ.keepersChairAtChair) || void 0 === ZJ || ZJ, "place" === JJ.keepersChairMessageKind ? (!UJ && this.atChair && "refused" === (null === (eJ = this.status) || void 0 === eJ ? void 0 : eJ.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === JJ.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== JJ.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: JJ.keepersChairRefusalKey,
          island: null
        } : this.favoured !== FJ && (this.status = null === this.favoured ? {
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
      receivePassage(JJ) {
        this.received && (this.passage = JJ, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(JJ, cJ, ZJ) {
        this.translate = JJ, void 0 !== ZJ && (this.itemName = ZJ), this.emit()
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
      islandName(JJ) {
        const cJ = this.islands.find((cJ => cJ.keepersChairIslandId === JJ));
        return void 0 === cJ ? JJ : this.translate(cJ.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const JJ = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          cJ = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((JJ => {
            const cJ = JJ.keepersChairFeaturedFish;
            return {
              id: JJ.keepersChairIslandId,
              name: this.translate(JJ.keepersChairIslandNameKey),
              relit: JJ.keepersChairIslandRelit,
              featuredFish: null === cJ ? null : {
                itemName: cJ,
                displayName: this.itemName(cJ)
              },
              favoured: JJ.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === JJ ? null : {
            tone: JJ.tone,
            text: this.translate(JJ.key, null === JJ.island ? void 0 : {
              island: this.islandName(JJ.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === cJ ? null : {
            phase: cJ.keepersChairPassagePhase,
            phaseName: mF(this.translate, cJ.keepersChairPassagePhase),
            nextPhase: cJ.keepersChairPassageNextPhase,
            next: QF(this.translate, cJ.keepersChairPassageNextPhase, cJ.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const SF = "skyblockReachLogView",
      IF = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      MF = "Caught Fish",
      bF = [1, 2, 4];

    function wF(JJ, cJ) {
      return JJ.map((JJ => ({
        ...JJ,
        reachLogPageFish: JJ.reachLogPageFish.map((JJ => ({
          ...JJ,
          reachLogFishFresh: cJ(JJ)
        })))
      })))
    }
    class WF extends hJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new VF.e;
        super(JJ, ZJ, FJ), this.translate = cJ, this.requestOpen = UJ, this.pacer = eJ, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = JJ => JJ, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = JJ => {
          this.pages.some((cJ => cJ.reachLogIslandId === JJ)) && (this.selected = JJ, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = eJ.subscribe((() => {
          this.emit()
        }))
      }
      Qn(JJ) {
        if (this.received = !0, "status" === JJ.reachLogMessageKind) return !0 === JJ.reachLogNews && this.markNews(), this.serverFresh = JJ.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const cJ = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== JJ.reachLogMessageKind)
          if (this.pageViews = null, this.pages = wF(JJ.reachLogPages, (JJ => JJ.reachLogFishFresh || this.heldFresh.has(JJ.reachLogFishItem))), this.letGoShown = JJ.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, cJ) this.showPages();
          else {
            for (const JJ of this.pages)
              for (const cJ of JJ.reachLogPageFish) cJ.reachLogFishFresh && this.heldFresh.add(cJ.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(JJ, cJ, ZJ) {
        this.translate = JJ, this.pageViews = null, void 0 !== ZJ && (this.itemName = ZJ), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = wF(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var JJ, cJ, ZJ, FJ;
        const UJ = this.pages.find((JJ => JJ.reachLogPageFish.some((JJ => JJ.reachLogFishFresh))));
        if (void 0 !== UJ) return UJ.reachLogIslandId;
        if (null !== this.selected && this.pages.some((JJ => JJ.reachLogIslandId === this.selected))) return this.selected;
        return null !== (JJ = null !== (cJ = null === (ZJ = this.pages.filter((JJ => JJ.reachLogIslandAwake)).at(-1)) || void 0 === ZJ ? void 0 : ZJ.reachLogIslandId) && void 0 !== cJ ? cJ : null === (FJ = this.pages[0]) || void 0 === FJ ? void 0 : FJ.reachLogIslandId) && void 0 !== JJ ? JJ : null
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
        return this.pages.map((JJ => {
          var cJ;
          return {
            id: JJ.reachLogIslandId,
            name: this.translate(JJ.reachLogIslandNameKey),
            awake: JJ.reachLogIslandAwake,
            gold: JJ.reachLogPageGold,
            caught: JJ.reachLogPageFish.filter((JJ => JJ.reachLogFishCaught && !JJ.reachLogFishVisitor)).length,
            total: JJ.reachLogPageFish.filter((JJ => !JJ.reachLogFishVisitor)).length,
            fish: JJ.reachLogPageFish.map((JJ => {
              const cJ = JJ.reachLogFishBestKg;
              return {
                itemName: JJ.reachLogFishItem,
                name: JJ.reachLogFishCaught ? this.itemName(JJ.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: JJ.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / JJ.reachLogFishChance))
                }),
                best: JJ.reachLogFishCaught ? null === cJ ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: cJ.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: JJ.reachLogFishMarks,
                ribbons: bF.map((cJ => 0 !== (JJ.reachLogFishRibbons & cJ))),
                glimmer: 0 !== (8 & JJ.reachLogFishRibbons),
                halo: 0 !== (32 & JJ.reachLogFishRibbons),
                fresh: JJ.reachLogFishFresh,
                visitor: JJ.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (cJ = JJ.reachLogPageReturner) && void 0 !== cJ ? cJ : null)
          }
        }))
      }
      buildReturner(JJ) {
        return null === JJ ? null : {
          itemName: JJ.reachLogReturnerFishItem,
          line: this.translate(JJ.reachLogReturnerLineKey, {
            name: this.translate(JJ.reachLogReturnerNameKey),
            trinket: this.translate(JJ.reachLogReturnerTrinketKey)
          }),
          back: JJ.reachLogReturnerBack
        }
      }
      receivePassagePhase(JJ) {
        null !== this.passagePhase && this.passagePhase !== JJ && (this.pagesCurrent = !1), this.passagePhase = JJ
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const gF = "skyblockLampLightView";
    class HF {
      constructor(JJ, cJ, ZJ, FJ) {
        this.Uf = JJ, this.translate = cJ, this.requestCommand = ZJ, this.pacer = FJ, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.xn = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = JJ => {
          JJ ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = JJ => {
          this.send(`buy ${JJ}`)
        }, this.socket = JJ => {
          this.send(`socket ${null!==JJ&&void 0!==JJ?JJ:gJ}`)
        }, this.wearTint = JJ => {
          this.send(`tint ${null!==JJ&&void 0!==JJ?JJ:gJ}`)
        }, this.setSituation = JJ => {
          this.situation = JJ, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = FJ.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = FJ.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Qn(JJ) {
        if (this.message = JJ, null !== JJ.lampLightShop && (this.shop = JJ.lampLightShop), "open" === JJ.lampLightKind && (this.refusalKey = null), "reply" === JJ.lampLightKind) {
          var cJ;
          const UJ = null !== (cJ = JJ.lampLightReplyTag) && void 0 !== cJ ? cJ : null,
            eJ = null !== UJ && UJ === this.offTag;
          var ZJ, FJ;
          if (eJ ? this.settleOff() : null !== UJ && UJ !== this.awaitingTag || this.settleReply(), this.refusalKey = JJ.lampLightRefusalKey, null !== JJ.lampLightBought && !eJ) this.sparkle = {
            id: JJ.lampLightBought,
            count: (null !== (ZJ = null === (FJ = this.sparkle) || void 0 === FJ ? void 0 : FJ.count) && void 0 !== ZJ ? ZJ : 0) + 1
          }
        }
        JJ.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === JJ.lampLightKind && (this.lastGained = JJ.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(JJ) {
        JJ !== this.atChair && (this.atChair = JJ, JJ && (this.refusalKey = null), this.emit())
      }
      setTranslator(JJ, cJ) {
        this.translate = JJ, this.locale = null !== cJ && void 0 !== cJ ? cJ : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.xn = !0
      }
      send(JJ) {
        var cJ;
        if (null !== this.awaitingTag || "ready" !== (null === (cJ = this.message) || void 0 === cJ ? void 0 : cJ.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const ZJ = this.nextTag();
        this.awaitingTag = ZJ, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${JJ} ${ZJ}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const JJ = this.nextTag();
        this.offTag = JJ, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${JJ}`)
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
        this.xn || (this.snapshot = this.buildSnapshot(), this.Uf(this.snapshot))
      }
      formatLight(JJ) {
        return Math.floor(JJ).toLocaleString(this.locale)
      }
      formatPercent(JJ) {
        const cJ = 100 * JJ;
        return cJ >= 10 ? Math.round(cJ).toLocaleString(this.locale) : cJ.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(JJ, cJ) {
        if ("bite" === JJ) return this.translate("skyblockGame:lampLightBite", {
          seconds: (cJ.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === JJ) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(cJ.lampLightRareChance)
        });
        if ("notice" === JJ) return null === cJ.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(cJ.lampLightNoticeChance)
        });
        const ZJ = "meter" === JJ ? cJ.lampLightMeterCatches : cJ.lampLightBloomCatches;
        return null === ZJ ? null : this.translate("meter" === JJ ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(ZJ))
        })
      }
      oddsLines(JJ, cJ) {
        const ZJ = (JJ, cJ) => {
            var ZJ;
            return null !== (ZJ = {
              bite: cJ.lampLightBiteMs,
              rare: cJ.lampLightRareChance,
              meter: cJ.lampLightMeterCatches,
              bloom: cJ.lampLightBloomCatches,
              notice: cJ.lampLightNoticeChance
            } [JJ]) && void 0 !== ZJ ? ZJ : 0
          },
          FJ = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          UJ = [];
        for (const eJ of ["bite", "rare", "meter", "bloom", "notice"]) {
          const XJ = this.formatOdds(eJ, JJ),
            AJ = this.formatOdds(eJ, cJ);
          if (null === XJ || null === AJ || "bite" !== eJ && "rare" !== eJ && XJ === AJ) continue;
          const qJ = ZJ(eJ, cJ) - ZJ(eJ, JJ),
            jJ = FJ[eJ] ? qJ < 0 : qJ > 0;
          UJ.push({
            label: eJ,
            before: XJ,
            after: AJ,
            tone: XJ === AJ ? "same" : jJ ? "better" : "worse"
          })
        }
        return UJ
      }
      charmView(JJ, cJ, ZJ) {
        const FJ = JJ.lampLightCharmId.charAt(0).toUpperCase() + JJ.lampLightCharmId.slice(1),
          UJ = "bloom" === this.situation;
        return {
          id: JJ.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${FJ}`),
          effect: this.translate(`skyblockGame:lampLightCharm${FJ}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(JJ.lampLightCharmCost)
          }),
          owned: JJ.lampLightCharmOwned,
          affordable: ZJ >= JJ.lampLightCharmCost,
          socketed: cJ.lampLightSocketed === JJ.lampLightCharmId,
          lines: this.oddsLines(UJ ? cJ.lampLightBareBloom : cJ.lampLightBareOpen, UJ ? JJ.lampLightCharmBloom : JJ.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var JJ, cJ, ZJ, FJ;
        const UJ = this.message,
          eJ = "ready" === (null === UJ || void 0 === UJ ? void 0 : UJ.lampLightStatus) ? this.shop : null,
          XJ = null !== (JJ = null === UJ || void 0 === UJ ? void 0 : UJ.lampLightBalance) && void 0 !== JJ ? JJ : 0,
          AJ = this.atChair,
          qJ = "loading" === (null === UJ || void 0 === UJ ? void 0 : UJ.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === UJ || void 0 === UJ ? void 0 : UJ.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          jJ = "ready" !== (null === UJ || void 0 === UJ ? void 0 : UJ.lampLightStatus) || AJ ? null !== (cJ = this.refusalKey) && void 0 !== cJ ? cJ : qJ : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== UJ && "locked" !== UJ.lampLightStatus,
          status: null !== (ZJ = null === UJ || void 0 === UJ ? void 0 : UJ.lampLightStatus) && void 0 !== ZJ ? ZJ : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(XJ)
          }),
          releasing: null !== (FJ = null === UJ || void 0 === UJ ? void 0 : UJ.lampLightReleasing) && void 0 !== FJ && FJ,
          gained: null === UJ || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === UJ || void 0 === UJ ? void 0 : UJ.lampLightStatus) && AJ && !this.isPending(),
          situation: this.situation,
          shop: null === eJ ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: eJ.lampLightOddsRod,
              island: this.translate(eJ.lampLightIslandNameKey)
            }),
            heldRod: null !== eJ.lampLightHeldRod,
            charms: eJ.lampLightCharms.map((JJ => this.charmView(JJ, eJ, XJ))),
            tints: eJ.lampLightTints.map((JJ => {
              const cJ = JJ.lampLightTintId,
                [ZJ, FJ, UJ] = JJ.lampLightTintColour;
              return {
                id: cJ,
                name: this.translate(`skyblockGame:lampLightTint${cJ.charAt(0).toUpperCase()}${cJ.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(JJ.lampLightTintCost)
                }),
                owned: JJ.lampLightTintOwned,
                affordable: XJ >= JJ.lampLightTintCost,
                wearing: eJ.lampLightTint === cJ,
                colour: `rgb(${ZJ}, ${FJ}, ${UJ})`
              }
            })),
            wearingIslandColours: null === eJ.lampLightTint
          },
          notice: null === jJ ? null : this.translate(jJ),
          sparkle: this.sparkle
        }
      }
    }
    const PF = "skyblockMagmawardView";
    class kF {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Uf = JJ, this.now = cJ, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = NJ.map((() => 0)), this.wornAt = NJ.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Qn(JJ) {
        var cJ, ZJ;
        const FJ = NJ.map(((cJ, ZJ) => !0 === JJ.magmawardPiecesWorn[ZJ]));
        if (!FJ.includes(!0)) return this.snapshot = null, void this.Uf(null);
        const UJ = this.now(),
          eJ = this.snapshot;
        null === eJ && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const XJ = JJ.magmawardFuelCarried,
          AJ = !FJ.includes(!1);
        let qJ = null !== (cJ = null === eJ || void 0 === eJ ? void 0 : eJ.pulse) && void 0 !== cJ ? cJ : null,
          jJ = null !== (ZJ = null === eJ || void 0 === eJ ? void 0 : eJ.flare) && void 0 !== ZJ ? ZJ : null;
        JJ.magmawardFuelBurned ? (qJ = "burn", jJ = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = UJ, this.flareAt = UJ) : null !== eJ && XJ > eJ.fuel && (qJ = "gain", this.pulseToken++, this.pulseAt = UJ), AJ && null !== eJ && !eJ.fullSet && (jJ = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = UJ, this.setLitAt = UJ);
        const YJ = NJ.map(((JJ, cJ) => (FJ[cJ] && null !== eJ && !eJ.pieces[cJ].worn && (this.wornTokens[cJ]++, this.wornAt[cJ] = UJ), {
          itemName: JJ,
          worn: FJ[cJ],
          wornToken: this.wornTokens[cJ],
          justWorn: FJ[cJ] && this.isPlaying(this.wornAt[cJ], UJ)
        })));
        this.snapshot = {
          pieces: YJ,
          wornCount: FJ.filter(Boolean).length,
          fullSet: AJ,
          fuel: XJ,
          fuelState: XJ <= 0 ? "empty" : XJ <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, UJ) ? qJ : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, UJ) ? jJ : null,
          flareToken: this.flareToken,
          setLit: AJ && this.isPlaying(this.setLitAt, UJ),
          setLitToken: this.setLitToken
        }, this.Uf(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Uf(null)
      }
      isPlaying(JJ, cJ) {
        return cJ - JJ < 1200
      }
    }
    const pF = "skyblockGlowtideView";
    class dF {
      constructor(JJ) {
        this.Uf = JJ, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = JJ => {
          this.arrow = JJ, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Qn(JJ) {
        this.bloom = JJ.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Uf(null))
      }
      afterRender(JJ, cJ) {
        const ZJ = this.bloom;
        if (null === ZJ || null === JJ) return;
        const FJ = ZJ.glowtideBloomX - JJ[0],
          eJ = ZJ.glowtideBloomZ - JJ[2],
          XJ = Math.hypot(FJ, eJ),
          AJ = this.snapshot,
          qJ = null !== AJ && void 0 !== AJ && AJ.inRange ? 1 : 0,
          jJ = XJ <= 12.5 + qJ && JJ[1] - ZJ.glowtideBloomY <= 10 + qJ;
        !jJ || null !== AJ && void 0 !== AJ && AJ.inRange || this.inRangeToken++;
        const YJ = {
          colour: ZJ.glowtideBloomColour,
          inRange: jJ,
          distance: Math.round(XJ),
          inRangeToken: this.inRangeToken
        };
        (null === AJ || YJ.colour !== AJ.colour || YJ.inRange !== AJ.inRange || !jJ && YJ.distance !== AJ.distance) && (this.snapshot = YJ, this.Uf(YJ));
        const hJ = UJ.c.computeShortestRotation(cJ, (0, UJ.vb)([FJ, 0, eJ]));
        null === this.arrow || Math.abs(hJ - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${hJ}rad)`, this.arrowTurn = hJ)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Uf(null)
      }
    }
    const zF = "skyblockGlowMeterView";
    class NF {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Uf = JJ, this.now = cJ, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Qn(JJ) {
        const cJ = this.now(),
          {
            glowMeterFill: ZJ,
            glowMeterCapacity: FJ
          } = JJ,
          UJ = ZJ >= FJ,
          eJ = this.snapshot;
        null !== eJ && (UJ && !eJ.full && (this.fullToken++, this.fullAt = cJ), eJ.full && !UJ ? (this.burstToken++, this.burstAt = cJ) : ZJ > eJ.fill && (this.gainToken++, this.gainAt = cJ)), this.snapshot = {
          fill: ZJ,
          qh: FJ,
          ratio: Math.min(1, Math.max(0, ZJ / FJ)),
          full: UJ,
          rares: JJ.glowMeterRares,
          ready: UJ && this.isPlaying(this.fullAt, cJ),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, cJ),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, cJ),
          gainToken: this.gainToken
        }, this.Uf(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Uf(null)
      }
      isPlaying(JJ, cJ) {
        return cJ - JJ < 2e3
      }
    }
    const OF = "skyblockHushWaitView";
    class TF {
      constructor(JJ) {
        this.Uf = JJ, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Qn(JJ) {
        let {
          hushWaitMs: cJ,
          hushWaitTotalMs: ZJ,
          hushWaitLines: FJ
        } = JJ;
        if (this.clearTimers(), this.token++, 0 === FJ.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (cJ <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: FJ[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const UJ = Math.max(null !== ZJ && void 0 !== ZJ ? ZJ : cJ, cJ),
          eJ = UJ - cJ,
          XJ = JJ => UJ * JJ / FJ.length,
          AJ = JJ => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: UJ,
              elapsedMs: eJ,
              line: FJ[JJ],
              lineIndex: JJ
            })
          };
        let qJ = 0;
        for (; qJ + 1 < FJ.length && XJ(qJ + 1) <= eJ;) qJ++;
        AJ(qJ);
        for (let jJ = qJ + 1; jJ < FJ.length; jJ++) this.later(XJ(jJ) - eJ, (() => {
          AJ(jJ)
        }));
        this.later(cJ, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(JJ) {
        this.snapshot = JJ, this.Uf(JJ)
      }
      later(JJ, cJ) {
        this.timers.push(setTimeout(cJ, JJ))
      }
      clearTimers() {
        for (const JJ of this.timers) clearTimeout(JJ);
        this.timers = []
      }
    }
    const CF = "skyblockTideChartsView",
      uF = 36e5,
      iF = 864e5;

    function RF(JJ, cJ, ZJ) {
      const [FJ, UJ, eJ, XJ] = JJ.tideChartArea, AJ = Math.floor(cJ), qJ = Math.floor(ZJ);
      return AJ >= FJ && AJ <= eJ && qJ >= UJ && qJ <= XJ
    }

    function LF(JJ, cJ, ZJ) {
      const [FJ, UJ, eJ, XJ] = JJ.tideChartWater;
      return function(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = 4 - OJ(Math.floor(UJ) - (JJ - ZJ), ZJ);
        return 5 * OJ(Math.floor(eJ) - (cJ - FJ), FJ) + XJ
      }(FJ, UJ, eJ, XJ, cJ, ZJ)
    }

    function aF(JJ, cJ, ZJ) {
      const FJ = JJ.tideCharts;
      for (let UJ = 0; UJ < FJ.length; UJ++)
        if (RF(FJ[UJ], cJ, ZJ)) return FJ[UJ];
      return null
    }

    function BF(JJ, cJ, ZJ) {
      const FJ = Math.max(0, cJ - ZJ);
      return FJ > iF ? JJ("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(FJ / iF))
      }) : FJ > uF ? JJ("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(FJ / uF))
      }) : JJ("skyblockGame:tideChartsTurnSoon")
    }
    class tF extends hJ {
      constructor(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(JJ, ZJ, FJ), this.translate = cJ, this.now = UJ, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.PD = JJ => {
          this.picked = JJ, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Qn(JJ) {
        const cJ = this.message;
        if (null !== cJ)
          for (const FJ of JJ.tideCharts) {
            var ZJ;
            const JJ = cJ.tideCharts.find((JJ => JJ.tideChartIsland === FJ.tideChartIsland)),
              UJ = FJ.tideChartLit & ~(null !== (ZJ = null === JJ || void 0 === JJ ? void 0 : JJ.tideChartLit) && void 0 !== ZJ ? ZJ : 0);
            void 0 !== JJ && 0 !== UJ && (this.pulse = {
              island: FJ.tideChartIsland,
              cells: UJ,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = JJ, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(JJ, cJ) {
        var ZJ;
        const FJ = null === this.message || Number.isNaN(JJ) ? null : aF(this.message, JJ, cJ),
          UJ = null !== (ZJ = null === FJ || void 0 === FJ ? void 0 : FJ.tideChartIsland) && void 0 !== ZJ ? ZJ : null,
          eJ = null === FJ ? -1 : function(JJ, cJ, ZJ) {
            const [FJ, UJ, eJ, XJ] = JJ.tideChartWater;
            return function(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
              return ((UJ - JJ) / (ZJ + XJ)) ** 2 + ((eJ - cJ) / (FJ + XJ)) ** 2 <= 1
            }(FJ, UJ, eJ, XJ, cJ, ZJ, 2) ? LF(JJ, cJ, ZJ) : -1
          }(FJ, JJ, cJ);
        return (UJ !== this.hereIsland || eJ !== this.hereCell) && (this.hereIsland = UJ, this.hereCell = eJ, null !== UJ && (this.lastIsland = UJ), !0)
      }
      afterRender(JJ) {
        if (null === this.message) return;
        this.lastX = null === JJ ? Number.NaN : JJ[0], this.lastZ = null === JJ ? Number.NaN : JJ[2];
        const cJ = this.locate(this.lastX, this.lastZ),
          ZJ = this.expirePulses();
        (cJ || ZJ || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const JJ = this.now();
        return !(!this.open || JJ - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = JJ, BF(this.translate, this.message.tideChartTurnsInMs, JJ - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(JJ, cJ) {
        const ZJ = null === this.message ? null : aF(this.message, JJ, cJ);
        if (null === ZJ) return;
        const FJ = LF(ZJ, JJ, cJ);
        0 === (ZJ.tideChartPreBlank & 1 << FJ) && (this.cast = {
          island: ZJ.tideChartIsland,
          cell: FJ,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const JJ = this.now();
        let cJ = !1;
        return 0 !== this.pulse.cells && JJ - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, cJ = !0), null !== this.cast && JJ - this.cast.atMs >= 1500 && (this.cast = null, cJ = !0), cJ
      }
      setTranslator(JJ) {
        this.translate = JJ, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(JJ, cJ) {
        var ZJ;
        return null !== (ZJ = JJ.tideCharts.find((JJ => JJ.tideChartIsland === cJ))) && void 0 !== ZJ ? ZJ : null
      }
      describe(JJ) {
        var cJ, ZJ, FJ;
        const UJ = JJ.tideChartIsland,
          eJ = [];
        for (let sJ = 0; sJ < 25; sJ++) {
          const cJ = 1 << sJ;
          0 !== (JJ.tideChartLit & cJ) ? eJ.push("lit") : 0 !== (JJ.tideChartClear & cJ) ? eJ.push("clear") : 0 !== (JJ.tideChartPreBlank & cJ) ? eJ.push("shore") : eJ.push("water")
        }
        const XJ = function(JJ) {
            let cJ = 0;
            for (let ZJ = JJ >>> 0; 0 !== ZJ; ZJ &= ZJ - 1) cJ++;
            return cJ
          }(JJ.tideChartLit),
          AJ = JJ.tideChartInkCount,
          qJ = this.translate(JJ.tideChartIslandNameKey),
          jJ = this.translate("skyblockGame:tideChartsLit", {
            lit: String(XJ),
            ink: String(AJ)
          }),
          YJ = null === JJ.tideChartPictureNameKey ? null : this.translate(JJ.tideChartPictureNameKey),
          hJ = this.hereIsland === UJ && -1 !== this.hereCell ? this.hereCell : null,
          DJ = [`${qJ}: ${jJ}.`];
        if (null !== YJ && DJ.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: YJ
          })), null !== hJ) {
          const JJ = Math.floor(hJ / 5) + 1,
            cJ = hJ % 5 + 1;
          DJ.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(JJ),
            column: String(cJ)
          }))
        }
        return {
          island: UJ,
          islandName: qJ,
          cells: eJ,
          hereCell: hJ,
          lit: XJ,
          ink: AJ,
          litText: jJ,
          pictureName: YJ,
          gridLabel: DJ.join(" "),
          pulseCells: this.pulse.island === UJ ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (cJ = this.cast) || void 0 === cJ ? void 0 : cJ.island) === UJ ? this.cast.cell : null,
          castToken: null !== (ZJ = null === (FJ = this.cast) || void 0 === FJ ? void 0 : FJ.token) && void 0 !== ZJ ? ZJ : 0
        }
      }
      buildSnapshot() {
        var JJ, cJ, ZJ;
        const FJ = this.message;
        if (null === FJ || 0 === FJ.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const UJ = this.findChart(FJ, this.hereIsland),
          eJ = null !== (JJ = null !== (cJ = null !== (ZJ = this.findChart(FJ, this.open ? this.picked : null)) && void 0 !== ZJ ? ZJ : UJ) && void 0 !== cJ ? cJ : this.findChart(FJ, this.lastIsland)) && void 0 !== JJ ? JJ : FJ.tideCharts[0],
          XJ = null === UJ ? null : this.describe(UJ);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: XJ,
          card: eJ === UJ ? XJ : this.describe(eJ),
          turnsText: BF(this.translate, FJ.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(FJ.tideChartBookCount)
          }),
          tabs: FJ.tideCharts.map((JJ => ({
            island: JJ.tideChartIsland,
            name: this.translate(JJ.tideChartIslandNameKey),
            selected: JJ.tideChartIsland === eJ.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const oF = "skyblockRegularsView",
      lF = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      JU = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function cU(JJ, cJ) {
      return "given" === JJ ? cJ.given : "owed" === JJ ? cJ.owed : cJ.goal
    }
    class ZU extends hJ {
      constructor(JJ, cJ, ZJ, FJ) {
        super(JJ, ZJ, FJ), this.translate = cJ, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = JJ => JJ, this.openIsland = JJ => {
          this.selected = JJ, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = JJ => {
          this.selected = JJ, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Qn(JJ) {
        this.message = JJ, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const JJ = this.openedFromReachLog;
        return this.openedFromReachLog = !1, JJ
      }
      setTranslator(JJ, cJ, ZJ) {
        this.translate = JJ, void 0 !== ZJ && (this.itemName = ZJ), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(JJ, cJ, ZJ) {
        return {
          text: this.translate(cU(JJ, cJ), ZJ),
          given: "given" === JJ
        }
      }
      describeRegular(JJ, cJ) {
        const ZJ = this.translate,
          FJ = null !== JJ.regularKg,
          UJ = JJ.regularMeetings,
          eJ = FJ ? 0 === UJ ? ZJ("skyblockGame:regularsNotMet") : 1 === UJ ? ZJ("skyblockGame:regularsMeetingsOne") : ZJ("skyblockGame:regularsMeetings", {
            count: UJ
          }) : "";
        return {
          id: JJ.regularId,
          name: ZJ(JJ.regularNameKey),
          line: ZJ(JJ.regularLineKey),
          itemName: JJ.regularFishItem,
          fishName: this.itemName(JJ.regularFishItem),
          tagged: FJ,
          size: null === JJ.regularKg ? ZJ("skyblockGame:regularsNotTagged") : ZJ("skyblockGame:regularsSize", {
            kg: JJ.regularKg.toFixed(1)
          }),
          meetings: eJ,
          chance: ZJ("skyblockGame:regularsChance", {
            count: JJ.regularOneInCasts
          }),
          resting: JJ.regularRestingToday,
          gifts: [{
            text: ZJ("skyblockGame:regularsGiftFlare"),
            given: UJ >= 3
          }, this.describeGift(JJ.regularTintGift, lF, {
            tint: ZJ(JJ.regularTintNameKey)
          })],
          history: [...JJ.regularHistory].reverse().map((JJ => {
            const FJ = JJ.regularMeetingKg.toFixed(1),
              UJ = cJ - JJ.regularMeetingDay;
            return UJ <= 0 ? ZJ("skyblockGame:regularsToday", {
              kg: FJ
            }) : ZJ("skyblockGame:regularsDaysAgo", {
              days: UJ,
              kg: FJ
            })
          }))
        }
      }
      describeIsland(JJ, cJ) {
        return {
          id: JJ.regularsIslandId,
          name: this.translate(JJ.regularsIslandNameKey),
          charm: this.describeGift(JJ.regularsCharmGift, JU, {
            charm: this.translate(JJ.regularsCharmNameKey)
          }),
          regulars: JJ.regularsList.map((JJ => this.describeRegular(JJ, cJ)))
        }
      }
      buildSnapshot() {
        var JJ, cJ, ZJ, FJ;
        const UJ = this.message;
        if (null === UJ) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const eJ = UJ.regularsIslands.map((JJ => this.describeIsland(JJ, UJ.regularsToday))),
          XJ = null !== (JJ = null !== (cJ = null === (ZJ = eJ.find((JJ => JJ.id === this.selected))) || void 0 === ZJ ? void 0 : ZJ.id) && void 0 !== cJ ? cJ : null === (FJ = eJ[0]) || void 0 === FJ ? void 0 : FJ.id) && void 0 !== JJ ? JJ : "";
        return {
          enabled: !0,
          open: this.open,
          selected: XJ,
          islands: eJ
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const FU = "skyblockHiddenWatersView";
    class UU {
      constructor(JJ) {
        this.Uf = JJ, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Qn(JJ) {
        this.snapshot = function(JJ) {
          const [cJ, ZJ] = JJ.hiddenWatersMapSize, FJ = (JJ, FJ) => ({
            left: 1 - JJ / cJ,
            top: FJ / ZJ
          }), UJ = new Map;
          for (const [XJ, AJ] of JJ.hiddenWatersGlimpses) {
            var eJ;
            const JJ = null !== (eJ = UJ.get(XJ)) && void 0 !== eJ ? eJ : [];
            JJ.push(AJ), UJ.set(XJ, JJ)
          }
          return {
            found: JJ.hiddenWatersFound,
            total: JJ.hiddenWatersTotal,
            aspect: ZJ / cJ,
            pins: JJ.hiddenWatersPins.map((JJ => {
              let [cJ, ZJ] = JJ;
              return FJ(cJ, ZJ)
            })),
            islands: JJ.hiddenWatersIslands.map((JJ => {
              let [UJ, eJ, XJ, AJ] = JJ;
              const {
                left: qJ,
                top: jJ
              } = FJ(XJ + 1, eJ);
              return {
                left: qJ,
                top: jJ,
                width: (XJ + 1 - UJ) / cJ,
                height: (AJ + 1 - eJ) / ZJ
              }
            })),
            glimpses: UJ
          }
        }(JJ), this.Uf(this.snapshot)
      }
    }
    const eU = "skyblockDialogueView";
    class XU extends hJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(JJ, ZJ, FJ), this.translate = cJ, this.requestDialogue = UJ, this.now = eJ, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = JJ => {
          this.selection = {
            kind: "quest",
            questId: JJ
          }, this.request(), this.show()
        }, this.selectCharacter = JJ => {
          this.selection = {
            kind: "character",
            npcId: JJ
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Qn(JJ) {
        this.received = !0, this.scripts = JJ.questDialogueScripts, this.speakers = new Map(JJ.questDialogueSpeakers.map((JJ => [JJ.dialogueSpeakerId, JJ]))), this.emit()
      }
      setTranslator(JJ) {
        this.translate = JJ, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const JJ = this.now();
        JJ >= this.requestAvailableAt && (this.requestAvailableAt = JJ + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var JJ;
        const cJ = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...cJ,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const ZJ = this.selection;
        if ("quest" === ZJ.kind) {
          const JJ = this.scripts.find((JJ => JJ.dialogueQuestId === ZJ.questId));
          return {
            ...cJ,
            characters: [],
            questFocus: ZJ.questId,
            conversations: JJ ? [this.conversation(JJ)] : []
          }
        }
        const FJ = [];
        for (let eJ = this.scripts.length - 1; eJ >= 0; eJ--) {
          const JJ = this.scripts[eJ].dialogueLines;
          for (let cJ = JJ.length - 1; cJ >= 0; cJ--) FJ.includes(JJ[cJ].dialogueSpeakerId) || FJ.push(JJ[cJ].dialogueSpeakerId)
        }
        const UJ = null !== ZJ.npcId && FJ.includes(ZJ.npcId) ? ZJ.npcId : null !== (JJ = FJ[0]) && void 0 !== JJ ? JJ : null;
        return {
          ...cJ,
          characters: FJ.map((JJ => {
            var cJ, ZJ;
            return {
              id: JJ,
              styling: null !== (cJ = null === (ZJ = this.speakers.get(JJ)) || void 0 === ZJ ? void 0 : ZJ.dialogueSpeakerStyling) && void 0 !== cJ ? cJ : JJ,
              selected: JJ === UJ
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((JJ => JJ.dialogueLines.some((JJ => JJ.dialogueSpeakerId === UJ)))).map((JJ => this.conversation(JJ))).reverse()
        }
      }
      conversation(JJ) {
        let cJ = null;
        return {
          questId: JJ.dialogueQuestId,
          questName: this.translate(JJ.dialogueQuestNameKey),
          completed: JJ.dialogueQuestCompleted,
          lines: JJ.dialogueLines.map(((JJ, ZJ) => {
            var FJ;
            const UJ = JJ.dialogueSpeakerId === cJ || null === (FJ = this.speakers.get(JJ.dialogueSpeakerId)) || void 0 === FJ ? void 0 : FJ.dialogueSpeakerStyling;
            return cJ = JJ.dialogueSpeakerId, {
              key: ZJ,
              display: {
                line: {
                  translationKey: JJ.dialogueLineKey,
                  params: this.params(JJ.dialogueLineParams)
                },
                speakerName: UJ,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(JJ) {
        if (void 0 !== JJ) return Object.fromEntries(Object.entries(JJ).map((JJ => {
          let [cJ, ZJ] = JJ;
          return [cJ, "string" === typeof ZJ ? ZJ : this.translate(ZJ.translationKey)]
        })))
      }
    }
    var AU = ZJ(521),
      qU = ZJ(1168),
      jU = ZJ(80);
    const YU = "skyblockAutographsView";

    function hU(JJ) {
      const cJ = AU.n[JJ];
      return {
        label: cJ.chatTag.map((JJ => JJ.str)).join(""),
        icon: cJ.icon,
        colour: cJ.mainRGB
      }
    }
    class DU extends hJ {
      constructor(JJ) {
        let cJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = cJ, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Qn(JJ) {
        this.signatures = JJ.autographSignatures, JJ.autographOpen ? this.show() : this.emit()
      }
      setTranslator(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = cJ, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var JJ;
        const cJ = null !== (JJ = this.signatures) && void 0 !== JJ ? JJ : [],
          ZJ = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          FJ = [...cJ].sort(((JJ, cJ) => Number(null !== cJ.autographRank) - Number(null !== JJ.autographRank) || cJ.autographSignedAtMs - JJ.autographSignedAtMs)).map((JJ => ({
            key: `${JJ.autographSignedAtMs}|${JJ.autographSignerName}`,
            name: (0, qU.d)(JJ.autographSignerName, !jU.featureFlags.canSeeRealPlayerNames),
            rank: null === JJ.autographRank ? null : hU(JJ.autographRank),
            signedOn: ZJ.format(JJ.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: FJ,
          total: FJ.length,
          rankTotal: FJ.filter((JJ => null !== JJ.rank)).length
        }
      }
    }
    const sU = "skyblockHudView",
      nU = () => {},
      GU = {
        getItem: () => null,
        setItem: nU,
        removeItem: nU
      };
    class fU {
      constructor(JJ) {
        let {
          translate: cJ,
          translateWithIcons: ZJ,
          setMenuOpen: FJ = nU,
          dismissMenu: UJ = () => {
            FJ(!1)
          },
          publishSkills: eJ = nU,
          publishQuests: XJ = nU,
          publishQuestNotification: AJ = nU,
          publishDungeons: qJ = nU,
          publishCollections: jJ = nU,
          publishMap: YJ = nU,
          publishHud: hJ = nU,
          publishPortalTransit: DJ = nU,
          publishDailyReward: nJ = nU,
          publishMailbox: GJ = nU,
          publishQuestGraph: fJ = nU,
          publishForge: xJ = nU,
          publishSmuggler: rJ = nU,
          publishKeepersChair: vJ = nU,
          publishReachLog: mJ = nU,
          publishLampLight: QJ = nU,
          publishMagmaward: EJ = nU,
          publishGlowtide: KJ = nU,
          publishGlowMeter: yJ = nU,
          publishHushWait: SJ = nU,
          publishPassage: IJ = nU,
          publishTideCharts: MJ = nU,
          publishRegulars: bJ = nU,
          publishHiddenWaters: wJ = nU,
          publishDialogue: WJ = nU,
          publishAutographs: gJ = nU,
          isLoadingScreenUp: HJ = () => !1,
          onDailyRewardCoinLanded: PJ = nU,
          onDailyRewardStarted: kJ = nU,
          onDailyRewardFinished: pJ = nU,
          onDailyRewardItemLanded: dJ = nU,
          onMailboxStarted: zJ = nU,
          journeyStorage: NJ = GU,
          requestTracking: OJ = nU,
          requestTravel: TJ = nU,
          requestDungeonEnter: CJ = nU,
          requestQuestJump: uJ = nU,
          requestQuestArrive: iJ = nU,
          requestForge: RJ = nU,
          requestSmuggle: LJ = nU,
          requestKeepersChairAim: aJ = nU,
          requestReachLogOpen: BJ = nU,
          requestLampLight: tJ = nU,
          requestDialogue: oJ = nU
        } = JJ;
        this.navigation = void 0, this.map = void 0, this.compass = new VJ, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new VF.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = JJ => JJ, this.close = () => {
          for (const JJ of this.panels) JJ.close()
        }, this.setMenuOpen = FJ, this.publishHud = hJ, this.portalTransit = new pZ(DJ, NJ), this.magmaward = new kF(EJ), this.glowtide = new dF(KJ), this.glowMeter = new NF(yJ), this.hushWait = new TF(SJ), this.dailyReward = new NZ(nJ, (() => HJ() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (JJ => {
          this.quests.setNotificationsHeld(JJ)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), PJ, kJ, pJ, dJ);
        const lJ = JJ => {
          this.panels.some((JJ => JJ.isOpen())) || (JJ ? UJ() : this.setMenuOpen(!1))
        };
        this.skills = new UZ(eJ, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), cJ, void 0, void 0, lJ), this.quests = new jZ(XJ, OJ, cJ, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, lJ, AJ), this.dungeons = new DZ(qJ, cJ, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, lJ, CJ), this.collections = new HZ(jJ, cJ, (() => {
          this.beforePanelOpen(this.collections)
        }), lJ), this.map = new sJ(YJ, TJ, cJ, (() => {
          this.beforePanelOpen(this.map)
        }), lJ), this.questGraph = new BZ(fJ, cJ, (() => {
          this.beforePanelOpen(this.questGraph)
        }), lJ, uJ, iJ, NJ), this.forge = new nF(xJ, cJ, (() => {
          this.beforePanelOpen(this.forge)
        }), lJ, RJ), this.smuggler = new xF(rJ, cJ, (() => {
          this.beforePanelOpen(this.smuggler)
        }), lJ, LJ), this.lampLight = new HF(QJ, cJ, tJ, this.commandPacer), this.keepersChair = new yF(vJ, cJ, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (JJ => {
          this.lampLight.onChairClosed(), lJ(JJ)
        }), aJ, Date.now, this.commandPacer), this.reachLog = new WF(mJ, cJ, (() => {
          this.beforePanelOpen(this.reachLog)
        }), lJ, BJ, this.commandPacer), this.passage = new EF(IJ, cJ, (() => {
          this.beforePanelOpen(this.passage)
        }), lJ), this.tideCharts = new tF(MJ, cJ, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), lJ), this.regulars = new ZU(bJ, cJ, (() => {
          this.beforePanelOpen(this.regulars)
        }), (JJ => {
          this.regulars.takeReturnToReachLog() && !JJ && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), lJ(JJ)
        })), this.hiddenWaters = new UU(wJ), this.dialogue = new XU(WJ, cJ, (() => {
          this.beforePanelOpen(this.dialogue)
        }), lJ, oJ), this.autographs = new DU(gJ, (() => {
          this.beforePanelOpen(this.autographs)
        }), lJ), this.mailbox = new uZ(GJ, (() => HJ() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), zJ), this.quests.translateWithIcons = null !== ZJ && void 0 !== ZJ ? ZJ : null, this.skills.onLevelUp = JJ => {
          this.quests.notify(JJ)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new ZZ(this.map, this.quests, this.compass, cJ)
      }
      getHudSnapshot() {
        const JJ = this.hudSnapshot,
          cJ = this.dailyReward.getHeldCoins();
        return null === JJ || cJ <= 0 || !("hudPurseCoins" in JJ) ? JJ : {
          ...JJ,
          hudPurseCoins: Math.max(0, JJ.hudPurseCoins - cJ)
        }
      }
      receiveHud(JJ) {
        this.hudSnapshot = JJ, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(JJ) {
        this.setMenuOpen(!0);
        const cJ = JJ === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = JJ;
        for (const ZJ of this.panels) ZJ === JJ || cJ && ZJ === this.reachLog || ZJ.close();
        this.openingPanel = null
      }
      setTranslator(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cJ => this.resolveItemName(cJ, JJ);
        this.quests.translateWithIcons = null !== ZJ && void 0 !== ZJ ? ZJ : null, this.navigation.setTranslator(JJ, cJ), this.lampLight.setTranslator(JJ, cJ), this.mailbox.setItemName(FJ);
        for (const UJ of this.panels) UJ.setTranslator(JJ, cJ, FJ)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const JJ of this.panels) JJ.dispose()
      }
    }
    var xU = ZJ(926),
      rU = ZJ.n(xU),
      vU = ZJ(13),
      mU = ZJ(35658),
      QU = ZJ(2900),
      EU = ZJ(1688),
      VU = ZJ(1675),
      KU = ZJ(8580),
      yU = ZJ(1086),
      SU = ZJ(1326),
      IU = ZJ(990);

    function MU(JJ) {
      let {
        controller: cJ,
        minimap: ZJ,
        children: FJ
      } = JJ;
      const eJ = (0, SU.m)(sU, cJ.getHudSnapshot()),
        [XJ, AJ] = (0, yJ.useState)(cJ.skills.getSnapshot().overallLevel);
      (0, SU.i)(FZ, (JJ => {
        AJ(JJ.overallLevel)
      }));
      const qJ = (0, yJ.useRef)(null);
      (0, SU.i)(zZ, (JJ => {
        ! function(JJ, cJ) {
          if (null === JJ || "function" !== typeof JJ.animate) return;
          const ZJ = cJ ? 1.35 : 1.15;
          JJ.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${ZJ})`
          }, {
            transform: "scale(1)"
          }], {
            duration: cJ ? 320 : 160,
            easing: "ease-out"
          }), JJ.classList.toggle("Receiving", !cJ), cJ && (JJ.classList.remove("Shine"), JJ.offsetWidth, JJ.classList.add("Shine"))
        }(qJ.current, JJ)
      }));
      const {
        t: jJ
      } = (0, yU.F)(), {
        isTouchScreen: YJ
      } = (0, vU.j)(["isTouchScreen"]), [hJ, DJ] = (0, yJ.useState)(null);
      return (0, QU.h)(hJ, ".SkyblockRightHud"), null !== eJ || ZJ ? (0, IU.jsx)(mU.f, {
        placement: "topRight",
        children: (0, IU.jsxs)("div", {
          className: rU()("SkyblockRightHud", {
            TouchScreen: YJ
          }),
          children: [ZJ, null !== eJ && (0, IU.jsxs)("div", {
            ref: DJ,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in eJ ? (0, IU.jsx)("div", {
              className: "SkyblockHudHelp",
              children: eJ.hudHelpText
            }) : (0, IU.jsxs)(IU.Fragment, {
              children: [(0, IU.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, IU.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, IU.jsx)("strong", {
                    style: {
                      color: UJ.D.cyanUiText
                    },
                    children: jJ(eJ.hudZoneNameKey)
                  }), null !== XJ && (0, IU.jsx)("span", {
                    style: {
                      color: UJ.D.goldUiText
                    },
                    children: jJ("skyblockGame:level", {
                      level: (0, KU.e)(XJ)
                    })
                  })]
                }), (0, IU.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: qJ,
                  children: [(0, IU.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, IU.jsx)(EU.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, KU.e)(eJ.hudPurseCoins)]
                })]
              }), eJ.hudClockText.length > 0 && (0, IU.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, IU.jsx)(VU.d, {
                  text: eJ.hudClockText
                })
              })]
            }), FJ, "hudZoneNameKey" in eJ && (0, IU.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function bU(JJ) {
      let {
        icon: cJ
      } = JJ;
      const ZJ = (0, yJ.useCallback)((JJ => {
        null === JJ || void 0 === JJ || JJ.replaceChildren(Cc(cJ))
      }), [cJ]);
      return (0, IU.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: ZJ
      })
    }

    function wU(JJ) {
      let {
        controller: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)();
      return (0, IU.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: cJ.display.mountPlayer,
        title: ZJ("skyblockGame:mapYouAreHere"),
        children: (0, IU.jsx)(bU, {
          icon: "player"
        })
      })
    }
    const WU = ZJ(37538),
      gU = Object.fromEntries(WU.keys().map((JJ => [JJ.replace(/^\.\/(.*)\.png$/, "$1"), WU(JJ)])));

    function HU(JJ, cJ) {
      var ZJ;
      return null !== (ZJ = gU[JJ]) && void 0 !== ZJ ? ZJ : gU[cJ]
    }

    function PU(JJ) {
      let {
        imageKey: cJ,
        fallbackImageKey: ZJ,
        geometryKey: FJ,
        alt: UJ,
        className: eJ
      } = JJ;
      const [XJ, AJ] = (0, yJ.useState)((() => function(JJ, cJ) {
        return [{
          id: 0,
          imageKey: JJ,
          geometryKey: cJ,
          phase: "shown"
        }]
      }(cJ, FJ))), qJ = function(JJ, cJ, ZJ) {
        const FJ = JJ[JJ.length - 1];
        if (FJ.imageKey === cJ && FJ.geometryKey === ZJ) return JJ;
        const UJ = {
          id: FJ.id + 1,
          imageKey: cJ,
          geometryKey: ZJ,
          phase: "entering"
        };
        return FJ.geometryKey === ZJ ? [{
          ...FJ,
          phase: "leaving"
        }, UJ] : [UJ]
      }(XJ, cJ, FJ);
      return qJ !== XJ && AJ(qJ), (0, IU.jsx)(IU.Fragment, {
        children: qJ.map((JJ => (0, IU.jsx)("img", {
          className: rU()("SkyblockMapTerrainImage", eJ, {
            Entering: "entering" === JJ.phase,
            Leaving: "leaving" === JJ.phase
          }),
          src: HU(JJ.imageKey, ZJ),
          alt: "leaving" === JJ.phase ? "" : UJ,
          onAnimationEnd: () => {
            AJ((cJ => function(JJ, cJ) {
              return JJ.flatMap((JJ => JJ.id !== cJ ? [JJ] : "leaving" === JJ.phase ? [] : [{
                ...JJ,
                phase: "shown"
              }]))
            }(cJ, JJ.id)))
          }
        }, JJ.id)))
      })
    }
    var kU = ZJ(3950),
      pU = ZJ(1329);

    function dU(JJ) {
      if ("Tab" !== JJ.key) return;
      const cJ = Array.from(JJ.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        ZJ = cJ.indexOf(document.activeElement);
      var FJ;
      if (JJ.shiftKey && ZJ <= 0) JJ.preventDefault(), null === (FJ = cJ.at(-1)) || void 0 === FJ || FJ.focus();
      else if (!JJ.shiftKey && (-1 === ZJ || ZJ === cJ.length - 1)) {
        var UJ;
        JJ.preventDefault(), null === (UJ = cJ[0]) || void 0 === UJ || UJ.focus()
      }
    }

    function zU() {
      const JJ = (0, yJ.useRef)(null);
      return (0, yJ.useCallback)((cJ => {
        var ZJ;
        cJ ? (JJ.current = document.activeElement, cJ.focus()) : null === (ZJ = JJ.current) || void 0 === ZJ || ZJ.focus()
      }), [])
    }

    function NU(JJ) {
      let {
        percent: cJ,
        label: ZJ,
        levelUpToken: FJ,
        colour: UJ
      } = JJ;
      return (0, IU.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": ZJ,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": cJ,
        "aria-valuetext": ZJ,
        children: [(0, IU.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${cJ/100})`
          }
        }), null !== FJ && void 0 !== FJ && (0, IU.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": UJ
          }
        }, FJ)]
      })
    }

    function OU(JJ) {
      let {
        mount: cJ
      } = JJ;
      return (0, IU.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: cJ,
        hidden: !0,
        children: (0, IU.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, IU.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, IU.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function TU(JJ, cJ, ZJ, FJ) {
      (0, yJ.useLayoutEffect)((() => {
        const UJ = JJ.current;
        if (!ZJ || null === cJ || void 0 === cJ || !cJ.local || !UJ) return;
        const eJ = Array.from(UJ.querySelectorAll(".SkyblockMapNode")),
          XJ = [...cJ.points, ...cJ.portals],
          AJ = () => {
            const JJ = UJ.clientWidth,
              ZJ = UJ.clientHeight,
              AJ = eJ.map(((UJ, eJ) => {
                const AJ = XJ[eJ];
                return {
                  id: AJ.id,
                  portal: eJ >= cJ.points.length,
                  x: AJ.position[0] * JJ / 100,
                  y: AJ.position[1] * ZJ / 100,
                  width: UJ.offsetWidth / FJ,
                  height: UJ.offsetHeight / FJ
                }
              })),
              qJ = new Map(XJ.map(((JJ, cJ) => [JJ.id, eJ[cJ]])));
            for (const cJ of function(JJ, cJ, ZJ) {
                const FJ = [],
                  UJ = [...JJ].sort(((JJ, cJ) => Number(cJ.portal) - Number(JJ.portal) || JJ.id.localeCompare(cJ.id)));
                for (const eJ of UJ) {
                  const JJ = JJ => Math.max(eJ.width / 2, Math.min(cJ - eJ.width / 2, JJ)),
                    UJ = JJ => Math.max(eJ.height / 2, Math.min(ZJ - eJ.height / 2, JJ)),
                    XJ = [JJ(eJ.x)],
                    AJ = [UJ(eJ.y)];
                  for (const cJ of FJ) XJ.push(JJ(cJ.x - (cJ.width + eJ.width) / 2 - 4), JJ(cJ.x + (cJ.width + eJ.width) / 2 + 4)), AJ.push(UJ(cJ.y - (cJ.height + eJ.height) / 2 - 4), UJ(cJ.y + (cJ.height + eJ.height) / 2 + 4));
                  let qJ = {
                      ...eJ,
                      x: XJ[0],
                      y: AJ[0]
                    },
                    jJ = 1 / 0,
                    YJ = 1 / 0;
                  for (const cJ of new Set(XJ))
                    for (const JJ of new Set(AJ)) {
                      let ZJ = 0;
                      for (const XJ of FJ) ZJ += Math.max(0, (eJ.width + XJ.width) / 2 + 4 - Math.abs(cJ - XJ.x)) * Math.max(0, (eJ.height + XJ.height) / 2 + 4 - Math.abs(JJ - XJ.y));
                      const UJ = (cJ - eJ.x) ** 2 + (JJ - eJ.y) ** 2;
                      (ZJ < jJ || ZJ === jJ && UJ < YJ) && (qJ = {
                        ...eJ,
                        x: cJ,
                        y: JJ
                      }, jJ = ZJ, YJ = UJ)
                    }
                  FJ.push(qJ)
                }
                return FJ
              }(AJ, JJ, ZJ)) {
              const JJ = qJ.get(cJ.id);
              JJ.style.left = `${cJ.x}px`, JJ.style.top = `${cJ.y}px`
            }
          };
        AJ();
        const qJ = new ResizeObserver(AJ);
        qJ.observe(UJ);
        for (const JJ of eJ) qJ.observe(JJ);
        return () => {
          qJ.disconnect()
        }
      }), [JJ, cJ, ZJ, FJ])
    }
    const CU = {
        zoom: 1,
        x: 0,
        y: 0
      },
      uU = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function iU(JJ, cJ, ZJ) {
      return Math.min(ZJ, Math.max(cJ, JJ))
    }

    function RU(JJ, cJ, ZJ) {
      const FJ = Math.min(1, ZJ * cJ / JJ),
        UJ = Math.min(1, JJ / (ZJ * cJ));
      return {
        x0: (1 - FJ) / 2,
        y0: (1 - UJ) / 2,
        x1: (1 + FJ) / 2,
        y1: (1 + UJ) / 2
      }
    }

    function LU(JJ, cJ, ZJ, FJ) {
      const UJ = cJ * (FJ - ZJ);
      if (UJ <= 1) return .5 - cJ * (ZJ + FJ) / 2;
      const eJ = .45 * Math.min(1, UJ - 1);
      return iU(JJ, 1 - cJ * FJ - eJ, eJ - cJ * ZJ)
    }

    function aU(JJ, cJ) {
      const ZJ = iU(JJ.zoom, 1, 12);
      return {
        zoom: ZJ,
        x: LU(JJ.x, ZJ, cJ.x0, cJ.x1),
        y: LU(JJ.y, ZJ, cJ.y0, cJ.y1)
      }
    }

    function BU(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uU;
      const eJ = iU(JJ.zoom * cJ, 1, 12),
        XJ = eJ / JJ.zoom;
      return aU({
        zoom: eJ,
        x: ZJ - (ZJ - JJ.x) * XJ,
        y: FJ - (FJ - JJ.y) * XJ
      }, UJ)
    }

    function tU(JJ, cJ, ZJ, FJ) {
      const [UJ, eJ] = (0, yJ.useState)(CU);
      (0, yJ.useEffect)((() => {
        eJ(CU)
      }), [ZJ]), (0, yJ.useEffect)((() => {
        const ZJ = JJ.current;
        if (!cJ || !ZJ) return;
        const UJ = () => RU(ZJ.clientWidth, ZJ.clientHeight, FJ),
          XJ = JJ => {
            const cJ = ZJ.getBoundingClientRect();
            return {
              x: (JJ.clientX - cJ.left) / cJ.width,
              y: (JJ.clientY - cJ.top) / cJ.height
            }
          },
          AJ = new Map;
        let qJ = {
            x: 0,
            y: 0
          },
          jJ = !1,
          YJ = 0;
        const hJ = JJ => {
            JJ.preventDefault();
            const cJ = JJ.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * JJ.deltaY : JJ.deltaY,
              ZJ = XJ(JJ);
            eJ((JJ => BU(JJ, Math.exp(.0015 * -cJ), ZJ.x, ZJ.y, UJ())))
          },
          DJ = JJ => {
            "mouse" === JJ.pointerType && 0 !== JJ.button || (AJ.set(JJ.pointerId, XJ(JJ)), 1 === AJ.size && (qJ = {
              x: JJ.clientX,
              y: JJ.clientY
            }, jJ = !1), YJ = 0)
          },
          sJ = JJ => {
            const cJ = AJ.get(JJ.pointerId);
            if (!cJ) return;
            const FJ = XJ(JJ);
            if (AJ.set(JJ.pointerId, FJ), 2 === AJ.size) {
              const [JJ, cJ] = [...AJ.values()], ZJ = Math.hypot(JJ.x - cJ.x, JJ.y - cJ.y);
              if (YJ > 0) {
                const FJ = ZJ / YJ;
                eJ((ZJ => BU(ZJ, FJ, (JJ.x + cJ.x) / 2, (JJ.y + cJ.y) / 2, UJ())))
              }
              return YJ = ZJ, void(jJ = !0)
            }!jJ && Math.hypot(JJ.clientX - qJ.x, JJ.clientY - qJ.y) < 4 || (jJ || (jJ = !0, ZJ.setPointerCapture(JJ.pointerId)), eJ((JJ => function(JJ, cJ, ZJ) {
              let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : uU;
              return aU({
                zoom: JJ.zoom,
                x: JJ.x + cJ,
                y: JJ.y + ZJ
              }, FJ)
            }(JJ, FJ.x - cJ.x, FJ.y - cJ.y, UJ()))))
          },
          nJ = JJ => {
            AJ.delete(JJ.pointerId), YJ = 0
          },
          GJ = JJ => {
            jJ && (JJ.stopPropagation(), JJ.preventDefault(), jJ = !1)
          },
          fJ = new ResizeObserver((() => {
            eJ((JJ => aU(JJ, UJ())))
          }));
        return fJ.observe(ZJ), ZJ.addEventListener("wheel", hJ, {
          passive: !1
        }), ZJ.addEventListener("pointerdown", DJ), ZJ.addEventListener("pointermove", sJ), ZJ.addEventListener("pointerup", nJ), ZJ.addEventListener("pointercancel", nJ), ZJ.addEventListener("click", GJ, !0), () => {
          fJ.disconnect(), ZJ.removeEventListener("wheel", hJ), ZJ.removeEventListener("pointerdown", DJ), ZJ.removeEventListener("pointermove", sJ), ZJ.removeEventListener("pointerup", nJ), ZJ.removeEventListener("pointercancel", nJ), ZJ.removeEventListener("click", GJ, !0)
        }
      }), [JJ, cJ, ZJ, FJ]);
      return {
        view: UJ,
        zoomBy: cJ => {
          const ZJ = JJ.current;
          ZJ && eJ((JJ => BU(JJ, cJ, .5, .5, RU(ZJ.clientWidth, ZJ.clientHeight, FJ))))
        }
      }
    }

    function oU(JJ) {
      var cJ, ZJ, FJ, UJ;
      let {
        controller: eJ,
        navigation: XJ
      } = JJ;
      const AJ = (0, SU.m)(DJ, eJ.getSnapshot()),
        {
          t: qJ
        } = (0, yU.F)(),
        jJ = zU(),
        YJ = AJ.presentation,
        hJ = (0, yJ.useRef)(null),
        sJ = (0, yJ.useRef)(null),
        nJ = Boolean(AJ.open && (null === YJ || void 0 === YJ ? void 0 : YJ.local) && YJ.background),
        GJ = tU(hJ, nJ, `${AJ.open}|${AJ.tab}|${null===YJ||void 0===YJ||null===(cJ=YJ.background)||void 0===cJ?void 0:cJ.geometryKey}`, null !== (ZJ = null === YJ || void 0 === YJ || null === (FJ = YJ.background) || void 0 === FJ ? void 0 : FJ.ratio) && void 0 !== ZJ ? ZJ : 2);
      if (TU(sJ, YJ, AJ.open, GJ.view.zoom), !YJ || !AJ.open) return null;
      const fJ = YJ.local ? YJ.background : null,
        xJ = {
          "--map-ratio": String(null !== (UJ = null === fJ || void 0 === fJ ? void 0 : fJ.ratio) && void 0 !== UJ ? UJ : 2),
          backgroundColor: null === fJ || void 0 === fJ ? void 0 : fJ.colour
        },
        rJ = {
          "--map-zoom": String(GJ.view.zoom),
          transform: `translate(${100*GJ.view.x}%, ${100*GJ.view.y}%) scale(${GJ.view.zoom})`
        };
      return (0, IU.jsx)(kU.c, {
        show: AJ.open,
        close: eJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: jJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IU.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, IU.jsx)("h2", {
                id: "skyblockMapTitle",
                children: qJ("skyblockGame:map")
              }), YJ.minimap && (0, IU.jsx)("p", {
                children: YJ.minimap.caption
              })]
            }), (0, IU.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((JJ => (0, IU.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": JJ === AJ.tab ? "true" : void 0,
                className: rU()({
                  Selected: JJ === AJ.tab
                }),
                "aria-pressed": JJ === AJ.tab,
                onClick: () => {
                  eJ.selectTab(JJ)
                },
                children: qJ("local" === JJ ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, JJ)))
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              onClick: eJ.dismiss
            })]
          }), (0, IU.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, IU.jsxs)("div", {
              ref: hJ,
              className: rU()("SkyblockMapCanvas", {
                Local: YJ.local,
                Overview: !YJ.local,
                Zoomed: GJ.view.zoom > 1
              }),
              style: xJ,
              children: [(0, IU.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: nJ ? rJ : void 0,
                children: (0, IU.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: sJ,
                  children: [fJ && (0, IU.jsx)(PU, {
                    className: "SkyblockMapTerrain",
                    imageKey: fJ.imageKey,
                    fallbackImageKey: fJ.fallbackImageKey,
                    geometryKey: fJ.geometryKey,
                    alt: fJ.label
                  }), YJ.local && (0, IU.jsx)(OU, {
                    mount: XJ.display.mountMapSearchArea
                  }), !YJ.local && (0, IU.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: YJ.connections.map((JJ => (0, IU.jsx)("line", {
                      className: rU()({
                        Explored: JJ.explored
                      }),
                      x1: JJ.start[0],
                      y1: JJ.start[1],
                      x2: JJ.end[0],
                      y2: JJ.end[1]
                    }, JJ.id)))
                  }), YJ.points.map((JJ => {
                    const cJ = !YJ.local && JJ.thumbnail ? gU[JJ.thumbnail] : void 0;
                    return (0, IU.jsxs)("div", {
                      className: rU()("SkyblockMapNode", {
                        Current: JJ.current
                      }),
                      style: {
                        left: `${JJ.position[0]}%`,
                        top: `${JJ.position[1]}%`
                      },
                      children: [(0, IU.jsxs)(pU.d, {
                        className: rU()("SkyblockMapPin", {
                          Unknown: !JJ.visited,
                          Current: JJ.current
                        }),
                        disabled: AJ.pending,
                        onClick: () => {
                          eJ.travel(JJ.travelKind, JJ.travelId)
                        },
                        children: [cJ && (0, IU.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: cJ,
                          alt: ""
                        }), !cJ && (0, IU.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, IU.jsx)(bU, {
                            icon: JJ.icon
                          })
                        }), (0, IU.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: JJ.name
                        })]
                      }), JJ.current && (0, IU.jsx)("span", {
                        className: rU()("SkyblockMapHereBadge", {
                          Above: JJ.position[1] > 50
                        }),
                        children: qJ("skyblockGame:mapYouAreHere")
                      })]
                    }, JJ.id)
                  })), YJ.portals.map((JJ => (0, IU.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${JJ.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${JJ.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, IU.jsxs)(pU.d, {
                      className: "SkyblockMapPin",
                      disabled: AJ.pending,
                      onClick: () => {
                        eJ.travel(JJ.travelKind, JJ.travelId)
                      },
                      children: [(0, IU.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: JJ.colour
                        },
                        "aria-hidden": "true",
                        children: (0, IU.jsx)(bU, {
                          icon: JJ.icon
                        })
                      }), (0, IU.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: JJ.name
                      })]
                    })
                  }, JJ.id))), YJ.local && (0, IU.jsx)(wU, {
                    controller: XJ
                  })]
                })
              }), nJ && (0, IU.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, IU.jsx)("button", {
                  type: "button",
                  "aria-label": qJ("skyblockGame:mapZoomIn"),
                  disabled: GJ.view.zoom >= 12,
                  onClick: () => {
                    GJ.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, IU.jsx)("button", {
                  type: "button",
                  "aria-label": qJ("skyblockGame:mapZoomOut"),
                  disabled: GJ.view.zoom <= 1,
                  onClick: () => {
                    GJ.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, IU.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: AJ.feedback
              })]
            })
          }), (0, IU.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [YJ.progress && (0, IU.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, IU.jsx)("span", {
                children: YJ.progress
              }), (0, IU.jsx)(NU, {
                percent: YJ.percent,
                label: YJ.progress
              })]
            }), YJ.noLandmarks && (0, IU.jsx)("span", {
              children: qJ("skyblockGame:mapNoLandmarks")
            }), YJ.canTravel && (0, IU.jsx)("span", {
              className: "SkyblockMapHint",
              children: qJ("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function lU(JJ) {
      let {
        view: cJ,
        controller: ZJ,
        navigation: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, yU.F)(), {
        isTouchScreen: eJ
      } = (0, vU.j)(["isTouchScreen"]);
      return (0, IU.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": UJ("skyblockGame:mapLocal"),
        children: [eJ && (0, IU.jsx)(pU.d, {
          className: "SkyblockMinimapOpen",
          onClick: ZJ.showLocal,
          children: UJ("skyblockGame:map")
        }), (0, IU.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: cJ.colour
          },
          children: [(0, IU.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: FJ.display.mountTerrain,
            style: {
              width: cJ.width,
              height: cJ.height
            },
            children: [(0, IU.jsx)(PU, {
              imageKey: cJ.imageKey,
              fallbackImageKey: cJ.fallbackImageKey,
              geometryKey: cJ.geometryKey,
              alt: cJ.label
            }), (0, IU.jsx)(OU, {
              mount: FJ.display.mountMinimapSearchArea
            }), cJ.markers.map((JJ => (0, IU.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${JJ.position[0]}%`,
                top: `${JJ.position[1]}%`,
                color: JJ.colour
              },
              title: JJ.name,
              children: (0, IU.jsx)(bU, {
                icon: JJ.icon
              })
            }, JJ.id)))]
          }), (0, IU.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: UJ("skyblockGame:mapYouAreHere"),
            children: (0, IU.jsx)(bU, {
              icon: "player"
            })
          })]
        }), (0, IU.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: cJ.caption
        })]
      })
    }

    function Je(JJ) {
      let {
        controller: cJ
      } = JJ;
      return (0, IU.jsxs)("div", {
        className: "SkyblockCompass",
        ref: cJ.display.mountCompass,
        children: [(0, IU.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, IU.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, IU.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function ce(JJ) {
      let {
        controller: cJ,
        surface: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, yU.F)(), UJ = (0, SU.m)(FZ, cJ.getSnapshot()), eJ = zU();
      return UJ.enabled ? (0, IU.jsxs)(IU.Fragment, {
        children: ["hud" === ZJ && (0, IU.jsx)(mU.f, {
          placement: "statBars",
          children: UJ.hud && (0, IU.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": UJ.hud.colour
            },
            children: [(0, IU.jsx)(NU, {
              percent: UJ.hud.skill.percent,
              label: UJ.hud.skill.xp,
              levelUpToken: UJ.hud.levelUpToken,
              colour: UJ.hud.colour
            }), (0, IU.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, IU.jsxs)("span", {
                children: [UJ.hud.skill.label, " \xb7 ", UJ.hud.skill.level]
              }), (0, IU.jsx)("span", {
                children: UJ.hud.gain
              })]
            })]
          })
        }), "hud" === ZJ && (0, IU.jsx)(mU.f, {
          children: UJ.hud && (0, IU.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, IU.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, IU.jsx)("strong", {
                children: UJ.hud.skill.label
              }), (0, IU.jsx)("span", {
                children: UJ.hud.gain
              })]
            }), (0, IU.jsx)(NU, {
              percent: UJ.hud.skill.percent,
              label: UJ.hud.skill.xp,
              levelUpToken: UJ.hud.levelUpToken,
              colour: UJ.hud.colour
            }), (0, IU.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, IU.jsx)("span", {
                children: UJ.hud.skill.level
              }), (0, IU.jsx)("span", {
                children: UJ.hud.skill.xp
              })]
            })]
          })
        }), "menu" === ZJ && (0, IU.jsx)(kU.c, {
          show: UJ.open,
          close: cJ.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, IU.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: eJ,
            onKeyDown: dU,
            children: [(0, IU.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, IU.jsxs)("div", {
                children: [(0, IU.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: FJ("skyblockGame:skills")
                }), (0, IU.jsx)("p", {
                  children: FJ("skyblockGame:skillsIntro")
                })]
              }), (0, IU.jsx)(pU.j, {
                padIgnore: !0,
                onClick: cJ.dismiss
              })]
            }), (0, IU.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, IU.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: UJ.skills.map((JJ => (0, IU.jsxs)(pU.d, {
                  className: rU()("SkyblockSkillCard", {
                    Selected: JJ.selected
                  }),
                  ariaPressed: JJ.selected,
                  onClick: () => {
                    cJ.select(JJ.id)
                  },
                  children: [(0, IU.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, IU.jsx)(EU.d, {
                      itemName: JJ.icon,
                      amount: 0
                    })
                  }), (0, IU.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, IU.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, IU.jsx)("strong", {
                        children: JJ.label
                      }), (0, IU.jsx)("span", {
                        children: JJ.level
                      })]
                    }), (0, IU.jsx)(NU, {
                      percent: JJ.percent,
                      label: `${JJ.label}: ${JJ.xp}`
                    }), (0, IU.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: JJ.xp
                    })]
                  })]
                }, JJ.id)))
              }), UJ.detail && (0, IU.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, IU.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, IU.jsx)(EU.d, {
                    itemName: UJ.detail.icon,
                    amount: 0
                  })
                }), (0, IU.jsx)("h3", {
                  children: UJ.detail.label
                }), (0, IU.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: UJ.detail.level
                }), (0, IU.jsx)("p", {
                  children: UJ.detail.description
                }), (0, IU.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, IU.jsx)("strong", {
                    children: FJ("skyblockGame:currentBenefit")
                  }), (0, IU.jsx)("span", {
                    children: UJ.detail.benefit
                  })]
                }), (0, IU.jsx)(NU, {
                  percent: UJ.detail.percent,
                  label: UJ.detail.xp
                }), (0, IU.jsx)("p", {
                  children: UJ.detail.xp
                }), (0, IU.jsx)("h4", {
                  children: FJ("skyblockGame:earnXp")
                }), (0, IU.jsx)("ul", {
                  children: UJ.detail.sources.map((JJ => (0, IU.jsx)("li", {
                    children: JJ
                  }, JJ)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Ze = ZJ(1259),
      Fe = ZJ(4233),
      Ue = ZJ(227);

    function ee(JJ) {
      let {
        item: cJ
      } = JJ;
      return (0, IU.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, IU.jsx)(EU.d, {
          itemName: cJ,
          amount: 0
        })
      })
    }

    function Xe(JJ) {
      let {
        name: cJ,
        percent: ZJ,
        progress: FJ
      } = JJ;
      return (0, IU.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, IU.jsx)(NU, {
          percent: ZJ,
          label: `${(0,Ue.eb)(cJ)}: ${FJ}`
        }), (0, IU.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: FJ
        })]
      })
    }

    function Ae(JJ) {
      let {
        subquests: cJ,
        showDescriptions: ZJ = !1
      } = JJ;
      return (0, IU.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: cJ.map((JJ => {
          const cJ = ZJ && "completed" === JJ.status,
            FJ = (0, IU.jsxs)("li", {
              className: rU()("SkyblockQuestStep", JJ.status, {
                JustFinished: JJ.justFinished,
                JustUnlocked: JJ.justUnlocked
              }),
              tabIndex: cJ ? 0 : void 0,
              children: [null !== JJ.iconItem && (0, IU.jsx)(ee, {
                item: JJ.iconItem
              }), null === JJ.iconItem && (0, IU.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === JJ.status ? "\u2713" : "skipped" === JJ.status ? "\u2212" : "\u25cb"
              }), (0, IU.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, IU.jsx)("strong", {
                  children: (0, IU.jsx)(Fe.c, {
                    text: JJ.name
                  })
                }), ZJ && !cJ && (0, IU.jsx)("span", {
                  children: (0, IU.jsx)(Fe.c, {
                    text: JJ.description
                  })
                }), null !== JJ.barPercent && (0, IU.jsx)(Xe, {
                  name: JJ.name,
                  percent: JJ.barPercent,
                  progress: JJ.progress
                }), null === JJ.barPercent && !cJ && (0, IU.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: JJ.statusLabel
                })]
              })]
            }, JJ.id);
          return cJ ? (0, IU.jsx)(Ze.g, {
            delayShow: 200,
            tooltipInner: (0, IU.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, IU.jsx)("span", {
                children: (0, IU.jsx)(Fe.c, {
                  text: JJ.description
                })
              }), (0, IU.jsx)("strong", {
                children: JJ.statusLabel
              })]
            }),
            children: FJ
          }, JJ.id) : FJ
        }))
      })
    }

    function qe(JJ) {
      let {
        quest: cJ,
        select: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, yU.F)(), UJ = cJ.focusStep;
      return (0, IU.jsxs)(pU.d, {
        className: rU()("SkyblockQuestCard", {
          Selected: cJ.selected,
          Tracked: cJ.tracked
        }),
        onClick: () => {
          ZJ(cJ.id)
        },
        children: [(0, IU.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, IU.jsx)("strong", {
            children: (0, IU.jsx)(Fe.c, {
              text: cJ.name
            })
          }), cJ.tracked && (0, IU.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: FJ("skyblockGame:currentQuest")
          })]
        }), UJ && (0, IU.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== UJ.iconItem && (0, IU.jsx)(ee, {
            item: UJ.iconItem
          }), (0, IU.jsx)(Xe, {
            name: UJ.name,
            percent: UJ.barPercent,
            progress: UJ.progress
          })]
        }), (0, IU.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: cJ.progress
        })]
      })
    }

    function je(JJ) {
      let {
        controller: cJ,
        surface: ZJ
      } = JJ;
      const FJ = (0, SU.m)(AZ, cJ.getSnapshot()),
        {
          t: UJ
        } = (0, yU.F)(),
        eJ = zU();
      return FJ.enabled ? (0, IU.jsxs)(IU.Fragment, {
        children: ["hud" === ZJ && (0, IU.jsx)(IU.Fragment, {
          children: FJ.tracked && (0, IU.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: XZ,
            children: (0, IU.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [FJ.trackedStepPulse > 0 && (0, IU.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, FJ.trackedStepPulse), (0, IU.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: UJ("skyblockGame:currentQuest")
              }), (0, IU.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, IU.jsx)("strong", {
                  children: (0, IU.jsx)(Fe.c, {
                    text: FJ.tracked.name
                  })
                }), null !== FJ.tracked.clock && (0, IU.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: FJ.tracked.clock
                })]
              }), (0, IU.jsx)(Ae, {
                subquests: FJ.tracked.subquests
              })]
            })
          })
        }), "menu" === ZJ && (0, IU.jsx)(kU.c, {
          show: FJ.open,
          close: cJ.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, IU.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: eJ,
            onKeyDown: dU,
            children: [(0, IU.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, IU.jsx)("div", {
                children: (0, IU.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: UJ("skyblockGame:quests")
                })
              }), (0, IU.jsx)(pU.j, {
                padIgnore: !0,
                onClick: cJ.dismiss
              })]
            }), (0, IU.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, IU.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, IU.jsx)("h3", {
                  children: UJ("skyblockGame:current")
                }), 0 === FJ.active.length && (0, IU.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: UJ("skyblockGame:noActiveQuests")
                }), FJ.active.map((JJ => (0, IU.jsx)(qe, {
                  quest: JJ,
                  select: cJ.select
                }, JJ.id))), (0, IU.jsx)("h3", {
                  children: (0, IU.jsxs)("button", {
                    type: "button",
                    className: rU()("SkyblockQuestSectionToggle", {
                      Expanded: FJ.completedExpanded
                    }),
                    "aria-expanded": FJ.completedExpanded,
                    onClick: cJ.toggleCompleted,
                    children: [(0, IU.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), UJ("skyblockGame:completed"), (0, IU.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: FJ.completed.length
                    })]
                  })
                }), FJ.completedExpanded && 0 === FJ.completed.length && (0, IU.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: UJ("skyblockGame:noCompletedQuests")
                }), FJ.completedExpanded && FJ.completed.map((JJ => (0, IU.jsx)(qe, {
                  quest: JJ,
                  select: cJ.select
                }, JJ.id)))]
              }), FJ.detail && (0, IU.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [FJ.detail.completed && (0, IU.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: UJ("skyblockGame:completedQuest")
                }), (0, IU.jsx)("h3", {
                  children: (0, IU.jsx)(Fe.c, {
                    text: FJ.detail.name
                  })
                }), (0, IU.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, IU.jsx)(Fe.c, {
                    text: FJ.detail.description
                  })
                }), (0, IU.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [FJ.detail.progress, null !== FJ.detail.clock && (0, IU.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: FJ.detail.clock
                  })]
                }), (0, IU.jsx)(Ae, {
                  subquests: FJ.detail.subquests,
                  showDescriptions: !0
                }), FJ.detail.tracked && (0, IU.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: FJ.detail.trackLabel
                }), !FJ.detail.completed && !FJ.detail.tracked && (0, IU.jsx)(pU.m, {
                  onClick: cJ.trackSelected,
                  disabled: !FJ.detail.canTrack,
                  children: FJ.detail.trackLabel
                }), FJ.detail.canViewDialogue && (0, IU.jsx)(pU.d, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: cJ.viewDialogue,
                  children: UJ("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Ye = ZJ(942),
      he = ZJ(2260);

    function De(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ => "linear" === UJ ? JJ : {
          Hc: UJ,
          point: JJ
        },
        XJ = {};
      for (const [AJ, qJ] of FJ)
        for (const [cJ, ZJ] of Object.entries(JJ(AJ, qJ, eJ))) XJ[cJ] ??= {
          timeline: []
        }, XJ[cJ].timeline.push(ZJ);
      return {
        Ic: cJ,
        loop: ZJ,
        bc: XJ
      }
    }
    const se = .547,
      ne = .022,
      Ge = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      fe = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function xe(JJ, cJ, ZJ) {
      const {
        drop: FJ = 0,
        shift: UJ = 0,
        torso: eJ = 0,
        nod: XJ = 0,
        tilt: AJ = 0,
        legs: qJ = [0, 0],
        arms: jJ = 0,
        spread: YJ = 0
      } = cJ, hJ = se * Math.cos(eJ) - ne * Math.sin(eJ), DJ = se * Math.sin(eJ) + ne * Math.cos(eJ), sJ = ZJ([0, -FJ, UJ]);
      return {
        LowerBody: {
          timeFraction: JJ,
          position: sJ,
          rotation: ZJ([0, 0, 0])
        },
        UpperBody: {
          timeFraction: JJ,
          position: sJ,
          rotation: ZJ([eJ, 0, AJ])
        },
        HeadMesh: {
          timeFraction: JJ,
          position: ZJ([0, hJ - se - FJ, DJ - ne + UJ]),
          rotation: ZJ([eJ + XJ, 0, AJ])
        },
        LegLeftMesh: {
          timeFraction: JJ,
          rotation: ZJ([qJ[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: JJ,
          rotation: ZJ([qJ[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: JJ,
          rotation: ZJ([jJ, 0, YJ])
        },
        ArmRightMesh: {
          timeFraction: JJ,
          rotation: ZJ([jJ, 0, -YJ])
        }
      }
    }

    function re(JJ, cJ, ZJ) {
      return De(xe, JJ, cJ, ZJ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function ve(JJ) {
      return "number" === typeof JJ ? [JJ, JJ] : JJ
    }

    function me(JJ, cJ, ZJ) {
      const {
        rise: FJ = 0,
        shift: UJ = 0,
        torso: eJ = 0,
        twist: XJ = 0,
        tilt: AJ = 0,
        nod: qJ = 0,
        cock: jJ = 0,
        arms: YJ = 0,
        spread: hJ = 0
      } = cJ, [DJ, sJ] = ve(YJ), [nJ, GJ] = ve(hJ);
      return {
        TorsoNode: {
          timeFraction: JJ,
          position: ZJ([0, FJ, UJ]),
          rotation: ZJ([eJ, XJ, AJ])
        },
        HeadMesh: {
          timeFraction: JJ,
          rotation: ZJ([qJ, 0, jJ])
        },
        ArmLeftMesh: {
          timeFraction: JJ,
          rotation: ZJ([DJ, 0, nJ])
        },
        ArmRightMesh: {
          timeFraction: JJ,
          rotation: ZJ([sJ, 0, -GJ])
        }
      }
    }
    const Qe = [1.0625, -1, 0];

    function Ee(JJ) {
      return "number" === typeof JJ ? [JJ, JJ] : JJ
    }

    function Ve(JJ, cJ, ZJ) {
      const {
        drop: FJ = 0,
        shift: UJ = 0,
        torso: eJ = 0,
        tilt: XJ = 0,
        nod: AJ = 0,
        cock: qJ = 0,
        legs: jJ = [0, 0],
        arms: YJ = 0,
        spread: hJ = 0
      } = cJ, [DJ, sJ] = Ee(YJ), [nJ, GJ] = Ee(hJ), fJ = -eJ, xJ = -XJ, [rJ, vJ, mJ] = function(JJ, cJ) {
        const [ZJ, FJ, UJ] = [-Qe[0], Qe[1], -Qe[2]], eJ = ZJ * Math.cos(cJ) - FJ * Math.sin(cJ), XJ = ZJ * Math.sin(cJ) + FJ * Math.cos(cJ);
        return [eJ - ZJ, -(XJ * Math.cos(JJ) - UJ * Math.sin(JJ) - FJ), XJ * Math.sin(JJ) + UJ * Math.cos(JJ) - UJ]
      }(fJ, xJ), QJ = ZJ([0, -FJ, UJ]);
      return {
        TorsoNode: {
          timeFraction: JJ,
          position: ZJ([rJ, vJ - FJ, mJ + UJ]),
          rotation: ZJ([fJ, 0, xJ])
        },
        HeadMesh: {
          timeFraction: JJ,
          rotation: ZJ([-AJ, 0, -qJ])
        },
        ArmLeftMesh: {
          timeFraction: JJ,
          rotation: ZJ([-DJ, 0, -nJ])
        },
        ArmRightMesh: {
          timeFraction: JJ,
          rotation: ZJ([-sJ, 0, GJ])
        },
        LegLeftMesh: {
          timeFraction: JJ,
          position: QJ,
          rotation: ZJ([-jJ[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: JJ,
          position: QJ,
          rotation: ZJ([-jJ[1], 0, 0])
        }
      }
    }
    var Ke = ZJ(36562),
      ye = ZJ(37458),
      Se = ZJ(37623);

    function Ie(JJ, cJ, ZJ) {
      var FJ, UJ;
      const eJ = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return JJ + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - JJ) * ZJ
        },
        [XJ, AJ] = null !== (FJ = JJ.legs) && void 0 !== FJ ? FJ : [0, 0],
        [qJ, jJ] = null !== (UJ = cJ.legs) && void 0 !== UJ ? UJ : [0, 0];
      return {
        drop: eJ(JJ.drop, cJ.drop),
        shift: eJ(JJ.shift, cJ.shift),
        torso: eJ(JJ.torso, cJ.torso),
        nod: eJ(JJ.nod, cJ.nod),
        tilt: eJ(JJ.tilt, cJ.tilt),
        legs: [eJ(XJ, qJ), eJ(AJ, jJ)],
        arms: eJ(JJ.arms, cJ.arms),
        spread: eJ(JJ.spread, cJ.spread)
      }
    }
    const Me = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      be = re(4400, !0, [
        [0, Me],
        [.16, {
          ...Me,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Me],
        [.44, {
          ...Me,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Ie(Me, Ge, .7)],
        [.66, Ie(Me, Ge, .78)],
        [.74, Ie(Me, fe, .65)],
        [.86, {
          ...Me,
          drop: .14
        }],
        [1, Me]
      ], "catmull-rom-spline"),
      we = {
        ...Me,
        drop: .14,
        torso: .3,
        spread: .4
      },
      We = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      ge = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      He = {
        caveGolem: be,
        magmaGolem: re(3600, !0, [
          [0, we],
          [.12, {
            ...we,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...we,
            tilt: -.08
          }],
          [.4, {
            ...we,
            tilt: .06,
            drop: .11
          }],
          [.52, Ie(we, Ge, .9)],
          [.62, Ie(we, fe, .8)],
          [.7, Ie(we, fe, .45)],
          [.78, Ie(we, fe, .85)],
          [.9, {
            ...we,
            drop: .17
          }],
          [1, we]
        ], "catmull-rom-spline"),
        frostWraith: function(JJ, cJ, ZJ) {
          return De(me, JJ, cJ, ZJ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, We],
          [.14, {
            ...We,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...We,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...We,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...We,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...We,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...We,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...We,
            rise: .16,
            tilt: -.04
          }],
          [1, We]
        ], "catmull-rom-spline"),
        tikiTerror: function(JJ, cJ, ZJ) {
          return De(Ve, JJ, cJ, ZJ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, ge],
          [.16, {
            ...ge,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, ge],
          [.44, {
            ...ge,
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
            ...ge,
            drop: .1
          }],
          [1, ge]
        ], "catmull-rom-spline")
      },
      Pe = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      ke = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      pe = Object.fromEntries(Object.entries(He).map((JJ => {
        let [cJ, ZJ] = JJ;
        return [cJ, (0, Se.b)((0, Ke.g)(ZJ), cJ)]
      })));

    function de(JJ) {
      const cJ = function(JJ) {
        var cJ;
        const ZJ = (0, ye.c)(JJ).poseRig;
        return null !== (cJ = ke[JJ]) && void 0 !== cJ ? cJ : void 0 === ZJ ? null : Pe[ZJ]
      }(JJ);
      return null === cJ ? null : pe[cJ]
    }

    function ze(JJ) {
      return {
        "--difficulty-colour": JJ
      }
    }
    const Ne = (0, yJ.lazy)((() => (0, he.e)(ZJ.e(204).then((() => ZJ(40254))), (JJ => JJ.MobPreview))));

    function Oe(JJ) {
      var cJ, ZJ, FJ;
      let {
        picker: UJ,
        controller: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, yU.F)(), AJ = zU(), {
        page: qJ
      } = UJ;
      return (0, IU.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: AJ,
        onKeyDown: JJ => {
          "ArrowLeft" === JJ.key ? (JJ.preventDefault(), JJ.stopPropagation(), eJ.previous()) : "ArrowRight" === JJ.key ? (JJ.preventDefault(), JJ.stopPropagation(), eJ.next()) : dU(JJ)
        },
        style: ze(qJ.colour),
        children: [(0, IU.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, IU.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: UJ.dungeonName
          }), (0, IU.jsx)(pU.j, {
            padIgnore: !0,
            onClick: eJ.dismiss
          })]
        }), (0, IU.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, IU.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, IU.jsx)(pU.d, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !UJ.canPrevious,
              onClick: eJ.previous,
              children: (0, IU.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, IU.jsx)(Ye.c, {
                  name: "angle-up"
                })
              })
            }), (0, IU.jsxs)("div", {
              className: rU()("SkyblockBossPickerBoss", {
                Locked: !qJ.unlocked
              }),
              children: [null !== qJ.bossMobType && (0, IU.jsx)(yJ.Suspense, {
                fallback: (0, IU.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, IU.jsx)(Ne, {
                  className: "SkyblockBossPickerModel",
                  mobType: qJ.bossMobType,
                  variation: qJ.bossMobVariation,
                  animation: null !== (cJ = de(qJ.bossMobType)) && void 0 !== cJ ? cJ : void 0
                })
              }), null === qJ.bossMobType && (0, IU.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, IU.jsx)(pU.d, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !UJ.canNext,
              onClick: eJ.next,
              children: (0, IU.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, IU.jsx)(Ye.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, IU.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, IU.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [qJ.beaten && (0, IU.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), qJ.label]
            }), (0, IU.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (ZJ = qJ.bossName) && void 0 !== ZJ ? ZJ : "???"
            }), (0, IU.jsxs)("span", {
              className: rU()("SkyblockBossPickerRecord", {
                Locked: null !== qJ.lockedHint
              }),
              children: [null !== qJ.lockedHintHighlight && (0, IU.jsxs)(IU.Fragment, {
                children: [qJ.lockedHintHighlight.before, (0, IU.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: ze(qJ.lockedHintHighlight.colour),
                  children: [null !== qJ.lockedHintHighlight.icon && (0, IU.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, IU.jsx)(EU.d, {
                      itemName: qJ.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), qJ.lockedHintHighlight.name]
                }), qJ.lockedHintHighlight.after]
              }), null === qJ.lockedHintHighlight && (null !== (FJ = qJ.lockedHint) && void 0 !== FJ ? FJ : qJ.summary)]
            })]
          }), (0, IU.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: UJ.pages.map((JJ => (0, IU.jsx)("span", {
              className: rU()("SkyblockBossPickerDot", {
                Current: JJ.current,
                Locked: !JJ.unlocked
              }),
              style: ze(JJ.colour)
            }, JJ.difficulty)))
          }), (0, IU.jsx)(pU.r, {
            className: "SkyblockBossPickerFight",
            disabled: !qJ.unlocked,
            onClick: eJ.enter,
            children: XJ("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function Te(JJ) {
      let {
        dungeon: cJ,
        select: ZJ
      } = JJ;
      return (0, IU.jsxs)(pU.d, {
        className: rU()("SkyblockDungeonCard", {
          Selected: cJ.selected
        }),
        onClick: () => {
          ZJ(cJ.id)
        },
        children: [(0, IU.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, IU.jsx)("strong", {
            children: cJ.name
          }), (0, IU.jsx)("span", {
            children: cJ.beatenSummary
          })]
        }), (0, IU.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: cJ.difficulties.map((JJ => (0, IU.jsxs)("span", {
            className: rU()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: JJ.beaten
            }),
            style: ze(JJ.colour),
            title: JJ.summary,
            children: [JJ.beaten && (0, IU.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), JJ.label]
          }, JJ.difficulty)))
        })]
      })
    }

    function Ce(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(hZ, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = zU();
      return ZJ.enabled ? (0, IU.jsxs)(kU.c, {
        show: ZJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [ZJ.picker && (0, IU.jsx)(Oe, {
          picker: ZJ.picker,
          controller: cJ
        }), !ZJ.picker && (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: UJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: FJ("skyblockGame:dungeons")
              }), (0, IU.jsx)("p", {
                children: FJ("skyblockGame:dungeonsIntro")
              })]
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              onClick: cJ.dismiss
            })]
          }), (0, IU.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, IU.jsx)("div", {
              className: "SkyblockDungeonList",
              children: ZJ.dungeons.map((JJ => (0, IU.jsx)(Te, {
                dungeon: JJ,
                select: cJ.select
              }, JJ.id)))
            }), ZJ.detail && (0, IU.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, IU.jsx)("h3", {
                children: ZJ.detail.name
              }), (0, IU.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: ZJ.detail.difficulties.map((JJ => (0, IU.jsxs)("li", {
                  className: rU()("SkyblockDungeonRecord", {
                    Beaten: JJ.beaten
                  }),
                  children: [(0, IU.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: ze(JJ.colour),
                    children: [JJ.beaten && (0, IU.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), JJ.label]
                  }), (0, IU.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: JJ.summary
                  })]
                }, JJ.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function ue(JJ) {
      let {
        collection: cJ,
        select: ZJ
      } = JJ;
      return (0, IU.jsxs)(pU.d, {
        className: rU()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: cJ.selected,
          Locked: cJ.locked
        }),
        ariaPressed: cJ.selected,
        onClick: () => {
          ZJ(cJ.id)
        },
        children: [(0, IU.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, IU.jsx)(EU.d, {
            itemName: cJ.icon,
            amount: 0
          })
        }), (0, IU.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, IU.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, IU.jsx)("strong", {
              children: cJ.name
            }), (0, IU.jsx)("span", {
              children: cJ.tier
            })]
          }), (0, IU.jsx)(NU, {
            percent: cJ.percent,
            label: `${cJ.name}: ${cJ.progress}`
          }), (0, IU.jsx)("span", {
            className: "SkyblockSkillXp",
            children: cJ.progress
          })]
        })]
      })
    }

    function ie(JJ) {
      let {
        collection: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)();
      return (0, IU.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, IU.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, IU.jsx)(EU.d, {
            itemName: cJ.icon,
            amount: 0
          })
        }), (0, IU.jsx)("h3", {
          children: cJ.name
        }), (0, IU.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: cJ.tier
        }), (0, IU.jsx)("p", {
          children: cJ.locked ? ZJ("skyblockGame:collectionLocked") : cJ.count
        }), null !== cJ.nextReward && (0, IU.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, IU.jsx)("strong", {
            children: ZJ("skyblockGame:collectionNextReward")
          }), (0, IU.jsx)("span", {
            children: cJ.nextReward
          })]
        }), (0, IU.jsx)(NU, {
          percent: cJ.percent,
          label: cJ.progress
        }), (0, IU.jsx)("p", {
          children: cJ.progress
        })]
      })
    }

    function Re(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(gZ, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = zU();
      return ZJ.enabled ? (0, IU.jsx)(kU.c, {
        show: ZJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: UJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: FJ("skyblockGame:collections")
              }), (0, IU.jsxs)("p", {
                children: [FJ("skyblockGame:collectionsIntro"), " ", ZJ.tiersUnlocked]
              })]
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              onClick: cJ.dismiss
            })]
          }), (0, IU.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: ZJ.categories.map((JJ => (0, IU.jsxs)(pU.d, {
              className: rU()("SkyblockCollectionCategory", {
                Selected: JJ.selected
              }),
              ariaPressed: JJ.selected,
              padTabSelected: JJ.selected,
              onClick: () => {
                cJ.selectCategory(JJ.id)
              },
              children: [(0, IU.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, IU.jsx)(EU.d, {
                  itemName: JJ.icon,
                  amount: 0
                })
              }), (0, IU.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, IU.jsx)("strong", {
                  children: JJ.label
                }), (0, IU.jsx)("span", {
                  children: JJ.tiers
                })]
              })]
            }, JJ.id)))
          }), (0, IU.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, IU.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: ZJ.collections.map((JJ => (0, IU.jsx)(ue, {
                collection: JJ,
                select: cJ.select
              }, JJ.id)))
            }), ZJ.detail && (0, IU.jsx)(ie, {
              collection: ZJ.detail
            })]
          })]
        })
      }) : null
    }
    const Le = ["completed", "active", "available", "locked"],
      ae = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Be(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(iZ, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = zU();
      return ZJ.enabled ? (0, IU.jsx)(kU.c, {
        show: ZJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: UJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: FJ("skyblockDevQuests:title")
              }), (0, IU.jsx)("p", {
                children: FJ("skyblockDevQuests:intro")
              })]
            }), (0, IU.jsx)(pU.j, {
              onClick: cJ.dismiss
            })]
          }), (0, IU.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Le.map((JJ => (0, IU.jsx)("span", {
              className: rU()("SkyblockQuestGraphLegendState", JJ),
              children: FJ(`skyblockDevQuests:state_${JJ}`)
            }, JJ))), ae.map((JJ => (0, IU.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, IU.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, IU.jsx)("line", {
                  className: rU()("SkyblockQuestGraphEdge", JJ),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), FJ(`skyblockDevQuests:edge_${JJ}`)]
            }, JJ)))]
          }), (0, IU.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, IU.jsxs)("div", {
              className: rU()("SkyblockQuestGraphCanvas", {
                Planning: ZJ.planning
              }),
              style: {
                width: ZJ.width,
                height: ZJ.height
              },
              children: [(0, IU.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: ZJ.width,
                height: ZJ.height,
                "aria-hidden": "true",
                children: [(0, IU.jsx)("defs", {
                  children: (0, IU.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, IU.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), ZJ.edges.map((JJ => (0, IU.jsx)("path", {
                  className: rU()("SkyblockQuestGraphEdge", JJ.kind, {
                    InPlan: JJ.inPlan
                  }),
                  d: JJ.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, JJ.key)))]
              }), ZJ.nodes.map((JJ => (0, IU.jsxs)("button", {
                type: "button",
                className: rU()("SkyblockQuestGraphNode", JJ.state, {
                  InPlan: JJ.inPlan,
                  Hovered: JJ.hovered
                }),
                style: {
                  left: JJ.left,
                  top: JJ.top,
                  width: 190,
                  height: 52
                },
                title: JJ.id,
                onMouseEnter: () => {
                  cJ.hover(JJ.id)
                },
                onMouseLeave: () => {
                  cJ.hover(null)
                },
                onFocus: () => {
                  cJ.hover(JJ.id)
                },
                onBlur: () => {
                  cJ.hover(null)
                },
                onClick: () => {
                  cJ.jump(JJ.id)
                },
                children: [(0, IU.jsx)("strong", {
                  children: JJ.name
                }), (0, IU.jsx)("span", {
                  children: JJ.detail
                })]
              }, JJ.id)))]
            })
          })]
        })
      }) : null
    }
    const te = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      oe = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${eF}ms`,
        "--forge-duration": "2150ms"
      },
      le = Array.from({
        length: 18
      }, ((JJ, cJ) => ({
        "--ember-left": `${(4+92*(.618034*cJ%1)).toFixed(1)}%`,
        "--ember-size": 3 + cJ % 3 * 2 + "px",
        "--ember-drift": 14 * (cJ % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*cJ%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*cJ%8).toFixed(2)}s`
      })));

    function JX(JJ) {
      if (JJ.style.removeProperty("--part-size"), null === JJ.parentElement || "wrap" === getComputedStyle(JJ.parentElement).flexWrap) return;
      const cJ = [...JJ.children],
        ZJ = getComputedStyle(JJ),
        FJ = parseFloat(ZJ.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        UJ = (JJ.clientHeight - parseFloat(ZJ.rowGap) * (cJ.length - 1)) / cJ.length,
        eJ = cJ.map((JJ => {
          const cJ = getComputedStyle(JJ),
            ZJ = JJ.querySelector("h3"),
            eJ = JJ.querySelector(".SkyblockForgeParts");
          if (null === ZJ || null === eJ) return FJ;
          const XJ = UJ - parseFloat(cJ.paddingTop) - parseFloat(cJ.paddingBottom) - ZJ.offsetHeight - parseFloat(getComputedStyle(ZJ).marginBottom),
            AJ = parseFloat(getComputedStyle(eJ).columnGap),
            qJ = eJ.children.length;
          let jJ = 0;
          for (let FJ = 1; FJ <= qJ; FJ++) {
            const JJ = Math.ceil(qJ / FJ);
            jJ = Math.max(jJ, Math.min((eJ.clientWidth - AJ * (FJ - 1)) / FJ, (XJ - AJ * (JJ - 1)) / JJ))
          }
          return jJ
        }));
      JJ.style.setProperty("--part-size", `${Math.floor(Math.max(FJ,Math.min(...eJ)))}px`)
    }

    function cX(JJ) {
      var cJ, ZJ, FJ, eJ, XJ;
      let {
        controller: AJ
      } = JJ;
      const qJ = (0, SU.m)(DF, AJ.getSnapshot()),
        {
          t: jJ
        } = (0, yU.F)(),
        YJ = zU(),
        hJ = function() {
          const JJ = (0, yJ.useRef)(null),
            cJ = (0, yJ.useRef)(null);
          return (0, yJ.useLayoutEffect)((() => {
            null !== JJ.current && JX(JJ.current)
          })), (0, yJ.useCallback)((ZJ => {
            var FJ;
            null === (FJ = cJ.current) || void 0 === FJ || FJ.disconnect(), cJ.current = null, JJ.current = ZJ, null !== ZJ && (cJ.current = new ResizeObserver((() => {
              JX(ZJ)
            })), cJ.current.observe(ZJ))
          }), [])
        }(),
        DJ = function(JJ) {
          const cJ = (0, yJ.useRef)(null);
          return (0, yJ.useLayoutEffect)((() => {
            const JJ = cJ.current;
            if (null !== JJ) {
              JJ.style.removeProperty("font-size");
              for (let cJ = 1.7; cJ > 1.1 && JJ.scrollWidth > JJ.clientWidth; cJ -= .1) JJ.style.fontSize = cJ - .1 + "rem"
            }
          }), [JJ]), (0, yJ.useCallback)((JJ => {
            cJ.current = JJ
          }), [])
        }(null === (cJ = qJ.preview) || void 0 === cJ ? void 0 : cJ.name),
        sJ = (0, yJ.useRef)(null),
        nJ = (0, yJ.useRef)({}),
        GJ = qJ.forging,
        fJ = null !== (ZJ = null === GJ || void 0 === GJ ? void 0 : GJ.preview.tier) && void 0 !== ZJ ? ZJ : 0,
        xJ = null !== (FJ = null === GJ || void 0 === GJ ? void 0 : GJ.preview.named) && void 0 !== FJ && FJ,
        rJ = (0, yJ.useMemo)((() => {
          return null === GJ ? null : {
            flames: (JJ = fJ, cJ = xJ, Array.from({
              length: 26 + 6 * JJ + (cJ ? 20 : 0)
            }, ((JJ, cJ) => {
              const ZJ = cJ < 6,
                FJ = Math.random() * Math.PI * 2,
                UJ = ZJ ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                eJ = Math.cos(FJ) * UJ,
                XJ = Math.sin(FJ) * UJ - 2 - 3 * Math.random(),
                AJ = Math.random(),
                [qJ, jJ, YJ] = ZJ ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : AJ < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : AJ < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [AJ < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": qJ,
                "--x0": `${(.15*eJ).toFixed(2)}rem`,
                "--y0": `${(.15*XJ).toFixed(2)}rem`,
                "--x": `${eJ.toFixed(2)}rem`,
                "--y": `${XJ.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${jJ.toFixed(2)}rem`,
                "--duration": `${Math.round(YJ)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: qF(fJ, xJ)
          };
          var JJ, cJ
        }), [null === GJ || void 0 === GJ ? void 0 : GJ.id]);
      if (!qJ.enabled) return null;
      const vJ = qJ.preview,
        mJ = qJ.arriving,
        QJ = null !== mJ && !mJ.sameSword,
        EJ = null !== vJ && (0, IU.jsx)(EU.d, {
          itemName: vJ.baseSword,
          amount: 0,
          enchantmentTier: vJ.enchantmentTier
        });
      return (0, IU.jsx)(kU.c, {
        show: qJ.open,
        close: AJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: YJ,
          onKeyDown: dU,
          children: [(0, IU.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: le.map(((JJ, cJ) => (0, IU.jsx)("span", {
              style: JJ
            }, cJ)))
          }), (0, IU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: jJ("skyblockGame:forgeTitle")
              }), (0, IU.jsx)("p", {
                children: jJ("skyblockGame:forgeIntro")
              })]
            }), (0, IU.jsx)(pU.j, {
              onClick: AJ.dismiss
            })]
          }), (0, IU.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, IU.jsx)("div", {
              ref: hJ,
              className: rU()("SkyblockForgeSlots", {
                Locked: null !== GJ
              }),
              children: qJ.slots.map((JJ => (0, IU.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, IU.jsx)("h3", {
                  children: JJ.label
                }), (0, IU.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: JJ.parts.map((cJ => (0, IU.jsx)("button", {
                    type: "button",
                    className: rU()("SkyblockForgePart", {
                      Selected: cJ.selected,
                      Missing: cJ.placeholder
                    }),
                    disabled: cJ.placeholder,
                    title: cJ.placeholder ? jJ("skyblockGame:forgePickParts") : cJ.itemName,
                    "aria-pressed": cJ.selected,
                    onClick: () => {
                      AJ.select(JJ.kind, cJ.material)
                    },
                    children: (0, IU.jsx)(EU.d, {
                      itemName: cJ.itemName,
                      amount: cJ.owned
                    })
                  }, cJ.material)))
                })]
              }, JJ.kind)))
            }), (0, IU.jsxs)("div", {
              className: rU()("SkyblockForgeAnvil", {
                Named: null === vJ || void 0 === vJ ? void 0 : vJ.named
              }),
              style: {
                "--tier": null === vJ ? "transparent" : UJ.gb[vJ.enchantmentTier]
              },
              children: [(0, IU.jsxs)("div", {
                className: rU()("SkyblockForgeAltar", {
                  Forging: null !== GJ
                }),
                style: null === GJ ? void 0 : oe,
                children: [(0, IU.jsxs)("div", {
                  className: rU()("SkyblockForgeMount", {
                    Arrive: null !== mJ
                  }),
                  children: [null === vJ && (0, IU.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, IU.jsx)(EU.d, {
                      itemName: qJ.unformedSword,
                      amount: 0
                    })
                  }), null !== vJ && (0, IU.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== vJ && null === GJ && (0, IU.jsx)("div", {
                    ref: sJ,
                    className: "SkyblockForgeFloat",
                    children: (0, IU.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: EJ
                    })
                  }), null !== vJ && (0, IU.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: AF.map(((JJ, cJ) => (0, IU.jsx)("span", {
                      className: rU()({
                        Rune: "" !== JJ.rune
                      }),
                      style: JJ.style,
                      children: JJ.rune
                    }, cJ)))
                  }), null !== GJ && null !== rJ && (0, IU.jsxs)(IU.Fragment, {
                    children: [(0, IU.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, IU.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: rJ.flames.map(((JJ, cJ) => (0, IU.jsx)("span", {
                        style: JJ
                      }, cJ)))
                    }), (0, IU.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: nJ.current,
                      children: (0, IU.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: EJ
                      })
                    }), (0, IU.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, IU.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (fJ >= 4 || xJ) && (0, IU.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, IU.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: rJ.sparks.map(((JJ, cJ) => (0, IU.jsx)("span", {
                        style: JJ
                      }, cJ)))
                    }), (0, IU.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, IU.jsx)("p", {
                  className: rU()("SkyblockForgeStatus", null === (eJ = qJ.status) || void 0 === eJ ? void 0 : eJ.tone),
                  children: null === (XJ = qJ.status) || void 0 === XJ ? void 0 : XJ.text
                })]
              }), null === vJ && (0, IU.jsx)("p", {
                className: rU()("SkyblockForgeName Waiting", {
                  ArriveText: QJ
                }),
                children: jJ(qJ.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== vJ && (0, IU.jsx)("h3", {
                ref: DJ,
                className: rU()("SkyblockForgeName", {
                  ArriveText: QJ
                }),
                title: vJ.name,
                children: vJ.name
              }), (null === vJ || void 0 === vJ ? void 0 : vJ.named) && (0, IU.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: jJ("skyblockGame:forgeSecret")
              }), (0, IU.jsxs)(pU.r, {
                className: "SkyblockForgeButton",
                disabled: !qJ.canForge,
                title: null === vJ ? void 0 : jJ("skyblockGame:forgeCoalOwned", {
                  owned: String(qJ.coalOwned)
                }),
                onClick: () => {
                  nJ.current = function(JJ) {
                    const cJ = null === JJ ? "none" : getComputedStyle(JJ).transform,
                      ZJ = new DOMMatrixReadOnly("none" === cJ ? void 0 : cJ);
                    return {
                      "--settle-y": `${ZJ.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(ZJ.b,ZJ.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(sJ.current), hF(), AJ.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [jJ("skyblockGame:forgeButton"), null !== vJ && (0, IU.jsxs)("span", {
                  className: rU()("SkyblockForgeCost", {
                    Short: vJ.coalShort
                  }),
                  children: [(0, IU.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, IU.jsx)(EU.d, {
                      itemName: tZ.b,
                      amount: 0
                    })
                  }), vJ.coalCost]
                })]
              })]
            }), (0, IU.jsxs)("div", {
              className: rU()("SkyblockForgeDetails", {
                Named: null === vJ || void 0 === vJ ? void 0 : vJ.named
              }),
              children: [(0, IU.jsx)("p", {
                className: rU()("SkyblockForgeLore", {
                  ArriveText: QJ
                }),
                title: null === vJ || void 0 === vJ ? void 0 : vJ.lore,
                children: null === vJ || void 0 === vJ ? void 0 : vJ.lore
              }), (0, IU.jsxs)("dl", {
                className: rU()("SkyblockForgeStats", {
                  ArriveText: QJ
                }),
                children: [null === vJ && te.map((JJ => (0, IU.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, IU.jsx)("dt", {
                    children: jJ(JJ)
                  }), (0, IU.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, JJ))), null === vJ || void 0 === vJ ? void 0 : vJ.stats.map((JJ => (0, IU.jsxs)("div", {
                  className: rU()("SkyblockForgeStat", {
                    Better: JJ.better
                  }),
                  children: [(0, IU.jsx)("dt", {
                    children: JJ.label
                  }), (0, IU.jsx)("dd", {
                    children: JJ.value
                  })]
                }, JJ.label)))]
              }), (0, IU.jsx)("ul", {
                className: rU()("SkyblockForgeEffects", {
                  ArriveText: QJ
                }),
                children: null === vJ || void 0 === vJ ? void 0 : vJ.effects.map((JJ => (0, IU.jsx)("li", {
                  children: JJ
                }, JJ)))
              })]
            })]
          })]
        })
      })
    }
    const ZX = "Doom Rivet",
      FX = "Doom Crest";

    function UX(JJ) {
      let {
        itemName: cJ,
        amount: ZJ,
        owned: FJ
      } = JJ;
      return (0, IU.jsxs)("span", {
        className: rU()("SkyblockSmugglerPrice", {
          Short: ZJ > FJ
        }),
        children: [(0, IU.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, IU.jsx)(EU.d, {
            itemName: cJ,
            amount: 0
          })
        }), (0, IU.jsx)("span", {
          children: ZJ
        })]
      })
    }

    function eX(JJ) {
      return JJ.justBought ? "skyblockGame:smugglerJustBought" : JJ.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function XX(JJ) {
      let {
        deal: cJ,
        view: ZJ,
        buy: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, yU.F)();
      return (0, IU.jsxs)("div", {
        className: rU()("SkyblockSmugglerPocket", {
          Bought: cJ.justBought,
          Unaffordable: !cJ.affordable,
          SoldOut: cJ.soldOut && !cJ.justBought
        }),
        children: [(0, IU.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, IU.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, IU.jsx)(EU.d, {
            itemName: cJ.itemName,
            amount: 0,
            enchantmentTier: cJ.enchantmentTier
          }), cJ.amount > 1 && (0, IU.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: UJ("skyblockGame:smugglerAmount", {
              amount: cJ.amount
            })
          })]
        }), (0, IU.jsx)("h3", {
          children: cJ.displayName
        }), (0, IU.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, IU.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [cJ.rivets > 0 && (0, IU.jsx)(UX, {
              itemName: ZX,
              amount: cJ.rivets,
              owned: ZJ.rivetsOwned
            }), cJ.crests > 0 && (0, IU.jsx)(UX, {
              itemName: FX,
              amount: cJ.crests,
              owned: ZJ.crestsOwned
            })]
          }), (0, IU.jsx)(pU.d, {
            className: "SkyblockSmugglerBuy",
            disabled: cJ.soldOut || !cJ.affordable || ZJ.pending,
            onClick: () => {
              FJ(cJ.slot)
            },
            children: UJ(eX(cJ))
          })]
        })]
      }, cJ.justBought ? ZJ.boughtCount : 0)
    }

    function AX(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(GF, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = zU();
      return ZJ.enabled ? (0, IU.jsx)(kU.c, {
        show: ZJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: UJ,
          onKeyDown: dU,
          children: [(0, IU.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, IU.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, IU.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: FJ("skyblockGame:smugglerTitle")
              }), (0, IU.jsx)("p", {
                children: FJ("skyblockGame:smugglerIntro")
              })]
            }), (0, IU.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, IU.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, IU.jsx)(UX, {
                  itemName: ZX,
                  amount: ZJ.rivetsOwned,
                  owned: ZJ.rivetsOwned
                }), (0, IU.jsx)(UX, {
                  itemName: FX,
                  amount: ZJ.crestsOwned,
                  owned: ZJ.crestsOwned
                })]
              }), (0, IU.jsx)(pU.j, {
                onClick: cJ.dismiss
              })]
            })]
          }), (0, IU.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: ZJ.deals.map((JJ => (0, IU.jsx)(XX, {
              deal: JJ,
              view: ZJ,
              buy: cJ.buy
            }, JJ.slot)))
          }), (0, IU.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, IU.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: ZJ.rotatesText
            }), null !== ZJ.status && (0, IU.jsx)("span", {
              className: rU()("SkyblockSmugglerStatus", ZJ.status.tone),
              children: ZJ.status.text
            })]
          })]
        })
      }) : null
    }

    function qX(JJ) {
      let {
        phase: cJ,
        className: ZJ
      } = JJ;
      return (0, IU.jsx)("span", {
        className: rU()("SkyblockMoon", `Moon-${cJ}`, ZJ),
        "aria-hidden": "true"
      })
    }

    function jX(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(rF, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)();
      return ZJ.enabled ? (0, IU.jsx)(mU.f, {
        placement: "statBars",
        children: (0, IU.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: rU()("SkyblockPassageChip", ZJ.open && "Open"),
          "aria-label": FJ("skyblockGame:passageChipLabel", {
            phase: ZJ.phaseName
          }),
          title: FJ("skyblockGame:passageChipLabel", {
            phase: ZJ.phaseName
          }),
          onMouseDown: JJ => {
            JJ.preventDefault()
          },
          onClick: cJ.toggle,
          children: (0, IU.jsx)(qX, {
            phase: ZJ.phase
          }, ZJ.phase)
        })
      }) : null
    }

    function YX(JJ) {
      let {
        fish: cJ
      } = JJ;
      return (0, IU.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, IU.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, IU.jsx)(EU.d, {
            itemName: cJ.itemName,
            amount: 0
          })
        }), (0, IU.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, IU.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: cJ.displayName
          }), (0, IU.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: cJ.where
          })]
        })]
      })
    }

    function hX(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(rF, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = zU();
      return ZJ.enabled ? (0, IU.jsx)(kU.c, {
        show: ZJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: UJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, IU.jsx)(qX, {
              phase: ZJ.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: FJ("skyblockGame:passageTitle")
              }), (0, IU.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: ZJ.phaseName
              })]
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              onClick: cJ.dismiss
            })]
          }), (0, IU.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: FJ("skyblockGame:passageIntro")
          }), (0, IU.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, IU.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, IU.jsx)("h3", {
                children: FJ("skyblockGame:passageVisiting")
              }), (0, IU.jsx)("ul", {
                className: "SkyblockPassageList",
                children: ZJ.visitors.map((JJ => (0, IU.jsx)(YX, {
                  fish: JJ
                }, JJ.itemName)))
              })]
            }), (0, IU.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== ZJ.resting && (0, IU.jsxs)(IU.Fragment, {
                children: [(0, IU.jsx)("h3", {
                  children: FJ("skyblockGame:passageResting")
                }), (0, IU.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, IU.jsx)(YX, {
                    fish: ZJ.resting
                  })
                })]
              }), (0, IU.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, IU.jsx)(qX, {
                  phase: ZJ.nextPhase
                }), (0, IU.jsx)("span", {
                  children: ZJ.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function DX() {
      return (0, IU.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((JJ => (0, IU.jsx)("i", {
          style: {
            "--sparkle-index": JJ
          }
        }, JJ)))
      })
    }

    function sX(JJ) {
      var cJ;
      let {
        charm: ZJ,
        view: FJ,
        controller: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, yU.F)(), XJ = FJ.shop, AJ = (null === (cJ = FJ.sparkle) || void 0 === cJ ? void 0 : cJ.id) === ZJ.id;
      return (0, IU.jsxs)("li", {
        className: rU()("SkyblockLampLightCharm", ZJ.owned && "Owned", ZJ.socketed && "Socketed"),
        children: [AJ && (0, IU.jsx)(DX, {}, FJ.sparkle.count), (0, IU.jsx)("h4", {
          children: ZJ.name
        }), (0, IU.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: ZJ.effect
        }), (0, IU.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: ZJ.lines.map((JJ => (0, IU.jsxs)("li", {
            className: rU()("SkyblockLampLightOddsLine", "better" === JJ.tone ? "Better" : "worse" === JJ.tone ? "Worse" : "Same"),
            children: [(0, IU.jsx)("span", {
              className: "Before",
              children: JJ.before
            }), (0, IU.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, IU.jsx)("span", {
              className: "After",
              children: JJ.after
            })]
          }, JJ.label)))
        }), (0, IU.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: ZJ.owned ? ZJ.socketed ? (0, IU.jsxs)(IU.Fragment, {
            children: [(0, IU.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: eJ("skyblockGame:lampLightSocketed")
            }), (0, IU.jsx)(pU.O, {
              disabled: !FJ.canCommand,
              ariaLabel: eJ("skyblockGame:lampLightRemoveLabel", {
                charm: ZJ.name
              }),
              onClick: () => {
                UJ.socket(null)
              },
              children: eJ("skyblockGame:lampLightRemove")
            })]
          }) : (0, IU.jsx)(pU.d, {
            disabled: !FJ.canCommand || !XJ.heldRod,
            ariaLabel: eJ("skyblockGame:lampLightSocketLabel", {
              charm: ZJ.name
            }),
            onClick: () => {
              UJ.socket(ZJ.id)
            },
            children: eJ("skyblockGame:lampLightSocket")
          }) : (0, IU.jsx)(pU.d, {
            disabled: !FJ.canCommand || !ZJ.affordable,
            ariaLabel: eJ("skyblockGame:lampLightBuyLabel", {
              item: ZJ.name,
              cost: ZJ.cost
            }),
            onClick: () => {
              UJ.buy(ZJ.id)
            },
            children: ZJ.cost
          })
        })]
      })
    }

    function nX(JJ) {
      var cJ;
      let {
        tint: ZJ,
        view: FJ,
        controller: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, yU.F)();
      return (0, IU.jsxs)("li", {
        className: rU()("SkyblockLampLightTint", ZJ.wearing && "Wearing"),
        style: {
          "--tint-colour": ZJ.colour
        },
        children: [(null === (cJ = FJ.sparkle) || void 0 === cJ ? void 0 : cJ.id) === ZJ.id && (0, IU.jsx)(DX, {}, FJ.sparkle.count), (0, IU.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, IU.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: ZJ.name
        }), ZJ.wearing ? (0, IU.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: eJ("skyblockGame:lampLightWearing")
        }) : (0, IU.jsx)(pU.d, {
          disabled: !FJ.canCommand || !ZJ.owned && !ZJ.affordable,
          ariaLabel: ZJ.owned ? eJ("skyblockGame:lampLightWearLabel", {
            tint: ZJ.name
          }) : eJ("skyblockGame:lampLightBuyLabel", {
            item: ZJ.name,
            cost: ZJ.cost
          }),
          onClick: () => {
            ZJ.owned ? UJ.wearTint(ZJ.id) : UJ.buy(ZJ.id)
          },
          children: ZJ.owned ? eJ("skyblockGame:lampLightWear") : ZJ.cost
        })]
      })
    }

    function GX(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(gF, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = ZJ.shop;
      return (0, IU.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, IU.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, IU.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: ZJ.balance
          }), (0, IU.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": ZJ.releasing,
            className: rU()("SkyblockLampLightSwitch", ZJ.releasing && "On"),
            disabled: ZJ.releasing ? "ready" !== ZJ.status : !ZJ.canCommand,
            onClick: () => {
              cJ.setRelease(!ZJ.releasing)
            },
            children: [(0, IU.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, IU.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), FJ("skyblockGame:lampLightRelease")]
          }), (0, IU.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: FJ("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== ZJ.notice && (0, IU.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: ZJ.notice
        }), null !== UJ && (0, IU.jsxs)(IU.Fragment, {
          children: [(0, IU.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, IU.jsx)("h3", {
              children: FJ("skyblockGame:lampLightCharms")
            }), (0, IU.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: UJ.oddsFor
            }), (0, IU.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((JJ => (0, IU.jsx)("button", {
                type: "button",
                "aria-pressed": ZJ.situation === JJ,
                className: rU()("SkyblockLampLightSituation", ZJ.situation === JJ && "Selected"),
                onClick: () => {
                  cJ.setSituation(JJ)
                },
                children: FJ("open" === JJ ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, JJ)))
            })]
          }), !UJ.heldRod && (0, IU.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: FJ("skyblockGame:lampLightHoldRod")
          }), (0, IU.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: UJ.charms.map((JJ => (0, IU.jsx)(sX, {
              charm: JJ,
              view: ZJ,
              controller: cJ
            }, JJ.id)))
          }), (0, IU.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, IU.jsx)("h3", {
              children: FJ("skyblockGame:lampLightTints")
            })
          }), (0, IU.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, IU.jsxs)("li", {
              className: rU()("SkyblockLampLightTint", "Islands", UJ.wearingIslandColours && "Wearing"),
              children: [(0, IU.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, IU.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: FJ("skyblockGame:lampLightIslandColours")
              }), UJ.wearingIslandColours ? (0, IU.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: FJ("skyblockGame:lampLightWearing")
              }) : (0, IU.jsx)(pU.d, {
                disabled: !ZJ.canCommand,
                ariaLabel: FJ("skyblockGame:lampLightWearLabel", {
                  tint: FJ("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  cJ.wearTint(null)
                },
                children: FJ("skyblockGame:lampLightWear")
              })]
            }), UJ.tints.map((JJ => (0, IU.jsx)(nX, {
              tint: JJ,
              view: ZJ,
              controller: cJ
            }, JJ.id)))]
          })]
        })]
      })
    }

    function fX(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(gF, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)();
      return ZJ.releasing ? (0, IU.jsx)(mU.f, {
        children: (0, IU.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            cJ.setRelease(!1)
          },
          children: [(0, IU.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, IU.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [FJ("skyblockGame:lampLightReleasing"), " \xb7 ", ZJ.balance]
          }), (0, IU.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: FJ("skyblockGame:lampLightKeepCatches")
          }), null !== ZJ.gained && (0, IU.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: ZJ.gained.text
          }, ZJ.gained.count)]
        })
      }) : null
    }

    function xX(JJ) {
      let {
        island: cJ,
        view: ZJ,
        aim: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, yU.F)(), eJ = cJ.featuredFish;
      return (0, IU.jsxs)("li", {
        className: rU()("SkyblockKeepersChairIsland", `Island-${cJ.id}`, cJ.favoured && "Aimed", !cJ.relit && "Dark"),
        children: [(0, IU.jsx)("h3", {
          children: cJ.name
        }), cJ.relit && null !== eJ ? (0, IU.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, IU.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: UJ("skyblockGame:keepersChairTideNotice")
          }), (0, IU.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, IU.jsx)(EU.d, {
              itemName: eJ.itemName,
              amount: 0
            })
          }), (0, IU.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: eJ.displayName
          })]
        }) : (0, IU.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, IU.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: UJ("skyblockGame:keepersChairDark")
          })
        }), cJ.relit && (cJ.favoured ? (0, IU.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: UJ("skyblockGame:keepersChairAimed")
        }) : (0, IU.jsx)(pU.d, {
          className: "SkyblockKeepersChairAim",
          disabled: !ZJ.canAim,
          ariaLabel: UJ("skyblockGame:keepersChairAimLabel", {
            island: cJ.name
          }),
          onClick: () => {
            FJ(cJ.id)
          },
          children: UJ("skyblockGame:keepersChairAim")
        }))]
      }, cJ.favoured ? ZJ.aimedCount : 0)
    }

    function rX(JJ) {
      let {
        controller: cJ,
        lampLight: ZJ
      } = JJ;
      const FJ = (0, SU.m)(KF, cJ.getSnapshot()),
        UJ = (0, SU.m)(gF, ZJ.getSnapshot()),
        [eJ, XJ] = (0, yJ.useState)("lamp"),
        {
          t: AJ
        } = (0, yU.F)(),
        qJ = zU();
      if (!FJ.enabled) return null;
      const jJ = "light" === eJ && UJ.enabled;
      return (0, IU.jsx)(kU.c, {
        show: FJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: rU()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", jJ && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: qJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: AJ("skyblockGame:keepersChairTitle")
              }), (0, IU.jsx)("p", {
                children: AJ(jJ ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              ariaLabel: AJ("skyblockGame:keepersChairClose"),
              onClick: cJ.dismiss
            })]
          }), UJ.enabled && (0, IU.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((JJ => (0, IU.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === JJ === jJ,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === JJ === jJ ? "true" : void 0,
              className: rU()("SkyblockKeepersChairTab", "light" === JJ === jJ && "Selected"),
              onClick: () => {
                XJ(JJ)
              },
              children: [AJ("lamp" === JJ ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === JJ && (0, IU.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: UJ.balance
              })]
            }, JJ)))
          }), jJ ? (0, IU.jsx)(GX, {
            controller: ZJ
          }) : (0, IU.jsx)(vX, {
            view: FJ,
            controller: cJ
          })]
        })
      })
    }

    function vX(JJ) {
      let {
        view: cJ,
        controller: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, yU.F)();
      return (0, IU.jsxs)(IU.Fragment, {
        children: [(0, IU.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: cJ.islands.map((JJ => (0, IU.jsx)(xX, {
            island: JJ,
            view: cJ,
            aim: ZJ.aim
          }, JJ.id)))
        }), null !== cJ.almanac && (0, IU.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, IU.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: FJ("skyblockGame:passageTitle")
          }), (0, IU.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, IU.jsx)(qX, {
              phase: cJ.almanac.phase
            }), cJ.almanac.phaseName]
          }), (0, IU.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, IU.jsx)(qX, {
              phase: cJ.almanac.nextPhase
            }), cJ.almanac.next]
          })]
        }), (0, IU.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, IU.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: FJ("skyblockGame:keepersChairFavour")
          }), cJ.aimed && (0, IU.jsx)(pU.O, {
            className: "SkyblockKeepersChairRest",
            disabled: !cJ.canAim,
            onClick: () => {
              ZJ.aim(null)
            },
            children: FJ("skyblockGame:keepersChairRest")
          })]
        }), null !== cJ.status && (0, IU.jsx)("p", {
          className: rU()("SkyblockKeepersChairStatus", "refused" === cJ.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: cJ.status.text
        })]
      })
    }

    function mX(JJ) {
      let {
        controller: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)(), FJ = (0, SU.m)(SF, cJ.getSnapshot());
      if (!FJ.enabled) return null;
      const UJ = FJ.freshCount > 0 ? ZJ("skyblockGame:reachLogOpenNews", {
        count: FJ.freshCount
      }) : ZJ("skyblockGame:reachLogOpen");
      return (0, IU.jsx)(mU.f, {
        placement: "statBars",
        children: (0, IU.jsxs)("button", {
          type: "button",
          className: rU()("SkyblockReachLogButton", FJ.freshCount > 0 && "HasNews", FJ.pending && "Pending"),
          "aria-label": UJ,
          title: UJ,
          onClick: cJ.ask,
          children: [FJ.news && (0, IU.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${FJ.newsToken}`), (0, IU.jsx)("span", {
            className: rU()("SkyblockReachLogIcon", FJ.news && "Jump"),
            "aria-hidden": "true",
            children: (0, IU.jsx)(EU.d, {
              itemName: MF,
              amount: 0
            })
          }, `icon:${FJ.newsToken}`), FJ.freshCount > 0 && (0, IU.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: FJ.freshCount
          })]
        })
      })
    }

    function QX(JJ) {
      let {
        gift: cJ
      } = JJ;
      return (0, IU.jsx)("li", {
        className: rU()("SkyblockRegularsGift", cJ.given && "Given"),
        children: cJ.text
      })
    }

    function EX(JJ) {
      let {
        regular: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)();
      return (0, IU.jsxs)("li", {
        className: rU()("SkyblockRegularsCard", cJ.tagged ? "Tagged" : "Untagged", cJ.resting && "Resting"),
        children: [(0, IU.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, IU.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: cJ.fishName,
            children: (0, IU.jsx)(EU.d, {
              itemName: cJ.itemName,
              amount: 0
            })
          }), (0, IU.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, IU.jsx)("h3", {
              children: cJ.name
            }), (0, IU.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: cJ.fishName
            })]
          })]
        }), (0, IU.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: cJ.line
        }), (0, IU.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, IU.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: cJ.size
          }), cJ.tagged && (0, IU.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: cJ.resting ? ZJ("skyblockGame:regularsResting") : cJ.meetings
          })]
        }), (0, IU.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: cJ.chance
        }), (0, IU.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: cJ.gifts.map((JJ => (0, IU.jsx)(QX, {
            gift: JJ
          }, JJ.text)))
        }), cJ.history.length > 0 && (0, IU.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: cJ.history.map(((JJ, cJ) => (0, IU.jsx)("li", {
            children: JJ
          }, cJ)))
        })]
      })
    }

    function VX(JJ) {
      let {
        controller: cJ,
        island: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, yU.F)(), UJ = (0, SU.m)(oF, cJ.getSnapshot()), eJ = UJ.islands.find((JJ => JJ.id === ZJ));
      if (!UJ.enabled || void 0 === eJ) return null;
      const XJ = FJ("skyblockGame:regularsOpen");
      return (0, IU.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": XJ,
        title: XJ,
        onClick: () => {
          cJ.openIsland(ZJ)
        },
        children: [(0, IU.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: FJ("skyblockGame:regularsTitle")
        }), eJ.regulars.map((JJ => (0, IU.jsx)("span", {
          className: rU()("SkyblockRegularsStripIcon", JJ.tagged && "Tagged"),
          title: JJ.name,
          children: (0, IU.jsx)(EU.d, {
            itemName: JJ.itemName,
            amount: 0
          })
        }, JJ.id)))]
      })
    }

    function KX(JJ) {
      var cJ;
      let {
        controller: ZJ
      } = JJ;
      const FJ = (0, SU.m)(oF, ZJ.getSnapshot()),
        {
          t: UJ
        } = (0, yU.F)(),
        eJ = zU();
      if (!FJ.enabled) return null;
      const XJ = null !== (cJ = FJ.islands.find((JJ => JJ.id === FJ.selected))) && void 0 !== cJ ? cJ : null;
      return (0, IU.jsx)(kU.c, {
        show: FJ.open,
        close: ZJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: eJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: UJ("skyblockGame:regularsTitle")
              }), (0, IU.jsx)("p", {
                children: UJ("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              onClick: ZJ.dismiss
            })]
          }), (0, IU.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: FJ.islands.map((JJ => {
              const cJ = JJ.id === FJ.selected;
              return (0, IU.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": cJ,
                "data-pad-tab": !0,
                "data-pad-selected": cJ ? "true" : void 0,
                className: rU()("SkyblockReachLogTab", `Island-${JJ.id}`, cJ && "Selected", JJ.charm.given && "GoldPage"),
                onClick: () => {
                  ZJ.selectIsland(JJ.id)
                },
                children: (0, IU.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: JJ.name
                })
              }, JJ.id)
            }))
          }), (0, IU.jsxs)("div", {
            className: rU()("SkyblockRegularsPage", null !== XJ && `Island-${XJ.id}`),
            role: "tabpanel",
            children: [(0, IU.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: UJ("skyblockGame:regularsHow")
            }), null !== XJ && (0, IU.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: XJ.regulars.map((JJ => (0, IU.jsx)(EX, {
                regular: JJ
              }, JJ.id)))
            })]
          }), null !== XJ && (0, IU.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, IU.jsx)("span", {
              className: rU()("SkyblockRegularsCharm", XJ.charm.given && "Given"),
              children: XJ.charm.text
            })
          })]
        })
      })
    }
    const yX = [{
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
      SX = Array.from({
        length: 6
      }, ((JJ, cJ) => ({
        "--x": `${(88*(.618034*cJ%1)).toFixed(1)}%`,
        "--y": `${(10+37*cJ%70).toFixed(1)}%`,
        "--size": 7 + cJ % 3 * 3 + "rem",
        "--drift-x": 3 * (cJ % 3 - 1) + "rem",
        "--drift-y": 2 * (cJ % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + cJ % 4 * 3 + "s",
        "--delay": 2.5 * -cJ + "s"
      }))),
      IX = Array.from({
        length: 14
      }, ((JJ, cJ) => ({
        "--left": `${(3+94*((.618034*cJ+.3)%1)).toFixed(1)}%`,
        "--size": 4 + cJ % 4 * 2 + "px",
        "--sway": cJ % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*cJ%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*cJ%12).toFixed(2)}s`
      }))),
      MX = (0, yJ.memo)((function(JJ) {
        let {
          island: cJ
        } = JJ;
        return (0, IU.jsxs)("div", {
          className: rU()("SkyblockReachLogDepths", null !== cJ && `Island-${cJ}`),
          "aria-hidden": "true",
          children: [yX.map(((JJ, cJ) => (0, IU.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: JJ
          }, `shaft${cJ}`))), SX.map(((JJ, cJ) => (0, IU.jsx)("span", {
            className: rU()("SkyblockReachLogMote", cJ % 2 === 1 && "Violet"),
            style: JJ
          }, `mote${cJ}`))), IX.map(((JJ, cJ) => (0, IU.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: JJ
          }, `bubble${cJ}`)))]
        })
      })),
      bX = 100;

    function wX(JJ) {
      let {
        view: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)();
      if (null === cJ || 0 === cJ.total) return null;
      const FJ = bX * cJ.aspect,
        UJ = ZJ("skyblockGame:hiddenWatersCount", {
          found: cJ.found,
          total: cJ.total
        });
      return (0, IU.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${ZJ("skyblockGame:hiddenWatersTitle")}: ${UJ}`,
        children: [(0, IU.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${FJ}`,
          "aria-hidden": "true",
          children: [cJ.islands.map(((JJ, cJ) => (0, IU.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (JJ.left + JJ.width / 2) * bX,
            cy: (JJ.top + JJ.height / 2) * FJ,
            rx: JJ.width / 2 * bX,
            ry: JJ.height / 2 * FJ
          }, cJ))), cJ.pins.map(((JJ, cJ) => (0, IU.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: JJ.left * bX,
            cy: JJ.top * FJ,
            r: 13
          }, cJ)))]
        }), (0, IU.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, IU.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: ZJ("skyblockGame:hiddenWatersTitle")
          }), (0, IU.jsx)("span", {
            className: cJ.found === cJ.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: UJ
          })]
        })]
      })
    }

    function WX(JJ) {
      let {
        view: cJ,
        island: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, yU.F)(), UJ = null === cJ || void 0 === cJ ? void 0 : cJ.glimpses.get(ZJ);
      return void 0 === UJ || 0 === UJ.length ? null : (0, IU.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, IU.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: FJ("skyblockGame:hiddenWatersGlimpsed")
        }), (0, IU.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: UJ.map((JJ => (0, IU.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, IU.jsx)(EU.d, {
              itemName: JJ,
              amount: 0
            })
          }, JJ)))
        })]
      })
    }
    const gX = ["Bronze", "Silver", "Gold"],
      HX = [{
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
      PX = HX.slice(0, 2);

    function kX(JJ) {
      return JJ ? HX : PX
    }

    function pX(JJ) {
      let {
        fish: cJ,
        letGoShown: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, yU.F)();
      return (0, IU.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [gX.map(((JJ, ZJ) => {
          const UJ = ZJ < cJ.marks;
          return (0, IU.jsx)("span", {
            className: rU()("SkyblockReachLogPip", JJ, UJ && "Earned", UJ && cJ.fresh && ZJ === cJ.marks - 1 && "Newest"),
            title: FJ(IF[ZJ])
          }, JJ)
        })), (0, IU.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), kX(ZJ).map(((JJ, ZJ) => (0, IU.jsx)("span", {
          className: rU()("SkyblockReachLogRibbon", JJ.className, !0 === cJ.ribbons[ZJ] && "Earned"),
          title: FJ(JJ.titleKey)
        }, JJ.className)))]
      })
    }

    function dX(JJ) {
      let {
        letGoShown: cJ,
        haloShown: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, yU.F)();
      return (0, IU.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, IU.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: FJ("skyblockGame:reachLogMarks"),
          children: [(0, IU.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), FJ("skyblockGame:reachLogLegendMarks")]
        }), kX(cJ).map((JJ => (0, IU.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: FJ(JJ.titleKey),
          children: [(0, IU.jsx)("span", {
            className: rU()("SkyblockReachLogRibbon", JJ.className, "Earned")
          }), FJ(JJ.legendKey)]
        }, JJ.className))), (0, IU.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: FJ("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, IU.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), FJ("skyblockGame:reachLogLegendGlimmer")]
        }), ZJ && (0, IU.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: FJ("skyblockGame:reachLogHaloTitle"),
          children: [(0, IU.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), FJ("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function zX(JJ) {
      let {
        returner: cJ
      } = JJ;
      return (0, IU.jsxs)("div", {
        className: rU()("SkyblockReachLogReturner", cJ.back && "Back"),
        children: [(0, IU.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, IU.jsx)(EU.d, {
            itemName: cJ.itemName,
            amount: 0
          })
        }), (0, IU.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: cJ.line
        })]
      })
    }

    function NX(JJ) {
      let {
        fish: cJ,
        letGoShown: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, yU.F)();
      return (0, IU.jsxs)("li", {
        className: rU()("SkyblockReachLogCard", cJ.caught ? "Caught" : "Unknown", cJ.marks >= 3 && "GoldCard", cJ.fresh && "Fresh", cJ.visitor && "Visitor"),
        children: [cJ.visitor && (0, IU.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: FJ("skyblockGame:reachLogVisitor")
        }), cJ.fresh && Array.from({
          length: 4
        }, ((JJ, cJ) => (0, IU.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, cJ))), (0, IU.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [cJ.halo && (0, IU.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: FJ("skyblockGame:reachLogHaloTitle")
          }), (0, IU.jsx)(EU.d, {
            itemName: cJ.itemName,
            amount: 0
          }), cJ.glimmer && (0, IU.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: FJ("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, IU.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: cJ.name
        }), (0, IU.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: cJ.chance
        }), (0, IU.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: cJ.best
        }), (0, IU.jsx)(pX, {
          fish: cJ,
          letGoShown: ZJ
        })]
      })
    }

    function OX(JJ) {
      let {
        page: cJ,
        letGoShown: ZJ,
        hiddenWaters: FJ
      } = JJ;
      const {
        t: UJ
      } = (0, yU.F)();
      return cJ.awake ? (0, IU.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: cJ.fish.map((JJ => (0, IU.jsx)(NX, {
          fish: JJ,
          letGoShown: ZJ
        }, JJ.itemName)))
      }) : (0, IU.jsxs)(IU.Fragment, {
        children: [(0, IU.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: UJ("skyblockGame:reachLogAsleep")
        }), (0, IU.jsx)(WX, {
          view: FJ,
          island: cJ.id
        })]
      })
    }

    function TX(JJ) {
      var cJ, ZJ;
      let {
        controller: FJ,
        regulars: UJ,
        hiddenWaters: eJ
      } = JJ;
      const XJ = (0, SU.m)(SF, FJ.getSnapshot()),
        AJ = function(JJ) {
          return (0, SU.m)(FU, JJ.getSnapshot())
        }(eJ),
        qJ = (0, SU.m)(oF, UJ.getSnapshot()),
        {
          t: jJ
        } = (0, yU.F)(),
        YJ = zU();
      if (!XJ.enabled) return null;
      const hJ = null !== (cJ = XJ.pages.find((JJ => JJ.id === XJ.selected))) && void 0 !== cJ ? cJ : null;
      return (0, IU.jsx)(kU.c, {
        show: XJ.open,
        close: FJ.dismiss,
        togglePointerLock: !1,
        className: rU()("SkyblockSkillsOverlay", qJ.open && "SkyblockReachLogUnderLedger"),
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: YJ,
          onKeyDown: dU,
          children: [(0, IU.jsx)(MX, {
            island: null !== (ZJ = null === hJ || void 0 === hJ ? void 0 : hJ.id) && void 0 !== ZJ ? ZJ : null
          }), (0, IU.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: jJ("skyblockGame:reachLogTitle")
              }), (0, IU.jsx)("p", {
                children: jJ("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, IU.jsx)(wX, {
              view: AJ
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              onClick: FJ.dismiss
            })]
          }), (0, IU.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: XJ.pages.map((JJ => {
              const cJ = JJ.id === XJ.selected,
                ZJ = JJ.fish.some((JJ => JJ.fresh));
              return (0, IU.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": cJ,
                "data-pad-tab": !0,
                "data-pad-selected": cJ ? "true" : void 0,
                className: rU()("SkyblockReachLogTab", `Island-${JJ.id}`, cJ && "Selected", !JJ.awake && "Asleep", JJ.gold && "GoldPage", ZJ && "HasNews"),
                onClick: () => {
                  FJ.selectPage(JJ.id)
                },
                children: [(0, IU.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: JJ.name
                }), JJ.awake && (0, IU.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: jJ("skyblockGame:reachLogCaughtCount", {
                    caught: JJ.caught,
                    total: JJ.total
                  })
                })]
              }, JJ.id)
            }))
          }), (0, IU.jsxs)("div", {
            className: rU()("SkyblockReachLogPage", null !== hJ && `Island-${hJ.id}`),
            role: "tabpanel",
            children: [null !== hJ && (0, IU.jsx)(OX, {
              page: hJ,
              letGoShown: XJ.letGoShown,
              hiddenWaters: AJ
            }), !0 === (null === hJ || void 0 === hJ ? void 0 : hJ.awake) && null !== hJ.returner && (0, IU.jsx)(zX, {
              returner: hJ.returner
            }), !0 === (null === hJ || void 0 === hJ ? void 0 : hJ.awake) && (0, IU.jsx)(VX, {
              controller: UJ,
              island: hJ.id
            })]
          }), (0, IU.jsx)("footer", {
            className: rU()("SkyblockReachLogFooter", null !== hJ && `Island-${hJ.id}`, !0 === (null === hJ || void 0 === hJ ? void 0 : hJ.gold) && "GoldPage"),
            children: !0 === (null === hJ || void 0 === hJ ? void 0 : hJ.gold) ? (0, IU.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: jJ("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, IU.jsxs)(IU.Fragment, {
              children: [(0, IU.jsx)(dX, {
                letGoShown: XJ.letGoShown,
                haloShown: !0 === (null === hJ || void 0 === hJ ? void 0 : hJ.fish.some((JJ => JJ.halo)))
              }), (0, IU.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: jJ("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var CX = ZJ(4225);

    function uX(JJ) {
      let {
        conversation: cJ,
        completedLabel: ZJ
      } = JJ;
      return (0, IU.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, IU.jsxs)("header", {
          children: [(0, IU.jsx)("h3", {
            children: cJ.questName
          }), cJ.completed && (0, IU.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: ZJ
          })]
        }), cJ.lines.map((JJ => (0, IU.jsx)(CX.c, {
          display: JJ.display
        }, JJ.key)))]
      })
    }

    function iX(JJ) {
      let {
        controller: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)(), FJ = (0, SU.m)(eU, cJ.getSnapshot()), UJ = zU();
      if (!FJ.enabled) return null;
      const eJ = !FJ.loading && 0 === FJ.conversations.length;
      return (0, IU.jsx)(kU.c, {
        show: FJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: UJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: ZJ("skyblockDialogue:title")
              }), (0, IU.jsx)("p", {
                children: ZJ("skyblockDialogue:intro")
              })]
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              onClick: cJ.dismiss
            })]
          }), (0, IU.jsxs)("div", {
            className: rU()("SkyblockDialogueBody", {
              SingleColumn: null !== FJ.questFocus || 0 === FJ.characters.length
            }),
            children: [null === FJ.questFocus && FJ.characters.length > 0 && (0, IU.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: FJ.characters.map((JJ => (0, IU.jsx)(pU.d, {
                className: rU()("SkyblockDialogueCharacter", {
                  Selected: JJ.selected
                }),
                onClick: () => {
                  cJ.selectCharacter(JJ.id)
                },
                children: (0, IU.jsx)(VU.d, {
                  text: JJ.styling
                })
              }, JJ.id)))
            }), (0, IU.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== FJ.questFocus && (0, IU.jsx)(pU.d, {
                className: "SkyblockDialogueBack",
                onClick: cJ.showCharacters,
                children: ZJ("skyblockDialogue:allCharacters")
              }), FJ.loading && (0, IU.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ZJ("skyblockDialogue:loading")
              }), eJ && (0, IU.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ZJ(null === FJ.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), FJ.conversations.map((JJ => (0, IU.jsx)(uX, {
                conversation: JJ,
                completedLabel: FJ.completedLabel
              }, JJ.questId)))]
            })]
          })]
        })
      })
    }

    function RX(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(YU, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = zU();
      return ZJ.enabled ? (0, IU.jsx)(kU.c, {
        show: ZJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: UJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: FJ("skyblockGame:autographBook")
              }), (0, IU.jsx)("p", {
                children: FJ("skyblockGame:autographBookIntro")
              })]
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              onClick: cJ.dismiss
            })]
          }), (0, IU.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, IU.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, IU.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, IU.jsx)("strong", {
                  children: ZJ.total
                }), (0, IU.jsx)("span", {
                  children: FJ("skyblockGame:autographTotal")
                })]
              }), (0, IU.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, IU.jsx)("strong", {
                  children: ZJ.rankTotal
                }), (0, IU.jsx)("span", {
                  children: FJ("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === ZJ.entries.length ? (0, IU.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: FJ("skyblockGame:autographBookEmpty")
            }) : (0, IU.jsx)("ul", {
              className: "SkyblockAutographList",
              children: ZJ.entries.map((JJ => (0, IU.jsxs)("li", {
                className: rU()("SkyblockAutograph", {
                  Ranked: null !== JJ.rank
                }),
                style: null === JJ.rank ? void 0 : {
                  color: JJ.rank.colour
                },
                children: [null !== JJ.rank && (0, IU.jsx)(Ye.c, {
                  className: "SkyblockAutographRankIcon",
                  name: JJ.rank.icon,
                  kit: (0, Ye.f)(JJ.rank.icon)
                }), (0, IU.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, IU.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: JJ.name
                  }), (0, IU.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== JJ.rank && (0, IU.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: JJ.rank.label
                    }), (0, IU.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: JJ.signedOn
                    })]
                  })]
                })]
              }, JJ.key)))
            })]
          })]
        })
      }) : null
    }
    const LX = (0, yJ.memo)((function(JJ) {
        let {
          controller: cJ
        } = JJ;
        return (0, IU.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: cJ.display.mountWaypoint,
          children: [(0, IU.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, IU.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, IU.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, IU.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, IU.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, IU.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      aX = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function BX(JJ) {
      return "next" === JJ.phase ? "\u2192" : aX[JJ.kind]
    }
    const tX = (0, yJ.memo)((function(JJ) {
      let {
        controller: cJ,
        display: ZJ
      } = JJ;
      const FJ = (0, SU.m)(qZ, cJ.getNotificationSnapshot()),
        [UJ, eJ] = (0, yJ.useState)(!1);
      return (0, SU.i)("qteStateUpdated", (JJ => {
        eJ(JJ.isActive)
      })), (0, IU.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (UJ ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [FJ && (0, IU.jsxs)("div", {
          className: `SkyblockQuestNotification ${FJ.kind} ${FJ.phase}`,
          style: {
            "--quest-notification-duration": `${FJ.durationMs}ms`,
            ...FJ.accent && {
              "--quest-notification-accent": FJ.accent
            }
          },
          children: [(0, IU.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (FJ.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, IU.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: BX(FJ)
            }), FJ.iconItem && (0, IU.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, IU.jsx)(EU.d, {
                itemName: FJ.iconItem,
                amount: 0
              })
            })]
          }), (0, IU.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, IU.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: FJ.title
            }), (0, IU.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, IU.jsx)(Fe.c, {
                text: FJ.name
              })
            }), FJ.description && (0, IU.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, IU.jsx)(Fe.c, {
                text: FJ.description
              })
            }), FJ.reward && (0, IU.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, IU.jsx)(Fe.c, {
                text: FJ.reward
              })
            })]
          })]
        }, FJ.token), (null === FJ || void 0 === FJ ? void 0 : FJ.waypointNameKey) && (0, IU.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": FJ.waypointNameKey,
          "data-notification-token": FJ.token,
          ref: ZJ.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${FJ.token}`)]
      })
    }));

    function oX(JJ) {
      const cJ = parseInt(JJ.replace("#", ""), 16);
      return `${cJ>>16&255}, ${cJ>>8&255}, ${255&cJ}`
    }
    const lX = (0, yJ.memo)((function(JJ) {
      let {
        controller: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)(), FJ = (0, SU.m)(PZ, cJ.getSnapshot());
      if (!FJ) return null;
      const UJ = "arrival" === FJ.phase;
      return (0, IU.jsxs)("div", {
        className: rU()("SkyblockPortalTransit", {
          Departure: !UJ,
          Arrival: UJ
        }),
        style: {
          "--portal-rgb": oX(FJ.colour),
          "--portal-duration": `${FJ.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, IU.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, IU.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            cJ.finishArrival(FJ.token)
          }
        }), (0, IU.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, IU.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !UJ && (0, IU.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: ZJ("skyblockGame:portalTransitHeading")
          }), (0, IU.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: ZJ(FJ.zoneNameKey)
          })]
        })]
      }, FJ.token)
    }));

    function JA() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function cA() {
      const JJ = document.querySelector(".SkyblockHudCoins"),
        cJ = null === JJ || void 0 === JJ ? void 0 : JJ.getBoundingClientRect();
      return cJ && cJ.width > 0 ? {
        x: cJ.left + Math.min(cJ.width, 24) / 2,
        y: cJ.top + cJ.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function ZA(JJ) {
      return {
        x: JJ.left + JJ.width / 2,
        y: JJ.top + JJ.height / 2
      }
    }

    function FA() {
      var JJ;
      const cJ = null === (JJ = document.querySelector(".HotBar")) || void 0 === JJ ? void 0 : JJ.getBoundingClientRect();
      return cJ && cJ.width > 0 ? ZA(cJ) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function UA(JJ) {
      let {
        items: cJ,
        origins: ZJ,
        target: FJ
      } = JJ;
      return (0, IU.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: cJ.map(((JJ, cJ) => {
          const UJ = ZJ[cJ];
          return (0, IU.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${UJ.x}px`,
              top: `${UJ.y}px`,
              "--item-dx": FJ.x - UJ.x + "px",
              "--item-dy": FJ.y - UJ.y + "px",
              "--item-delay": 2e3 + 160 * cJ + "ms",
              "--item-flight": "700ms"
            },
            children: (0, IU.jsx)(EU.d, {
              itemName: JJ.dailyRewardItemName,
              amount: 0
            })
          }, JJ.dailyRewardItemName)
        }))
      })
    }

    function eA(JJ, cJ) {
      const ZJ = -Math.PI / 2 + 1.25 * (JJ / (cJ - 1) * 2 - 1),
        FJ = 70 + JJ % 3 * 22;
      return {
        x: Math.cos(ZJ) * FJ,
        y: Math.sin(ZJ) * FJ * .7
      }
    }

    function XA(JJ) {
      let {
        origin: cJ,
        target: ZJ,
        count: FJ
      } = JJ;
      const UJ = [];
      for (let eJ = 0; eJ < FJ; eJ++) {
        const JJ = eA(eJ, FJ);
        UJ.push((0, IU.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${cJ.x}px`,
            top: `${cJ.y}px`,
            "--coin-bx": `${JJ.x}px`,
            "--coin-by": `${JJ.y}px`,
            "--coin-dx": ZJ.x - cJ.x + "px",
            "--coin-dy": ZJ.y - cJ.y + "px",
            "--coin-delay": `${OZ(eJ,FJ)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, IU.jsx)(EU.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, eJ))
      }
      return (0, IU.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: UJ
      })
    }

    function AA(JJ) {
      let {
        day: cJ
      } = JJ;
      const ZJ = SJ[cJ - 1];
      return (0, IU.jsxs)(IU.Fragment, {
        children: [(0, IU.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, IU.jsx)(EU.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, KU.e)(ZJ.dailyRewardCoins)]
        }), ZJ.dailyRewardItems.map((JJ => (0, IU.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, IU.jsx)(EU.d, {
            itemName: JJ.dailyRewardItemName,
            amount: 0
          }), "\xd7", JJ.dailyRewardItemAmount]
        }, JJ.dailyRewardItemName)))]
      })
    }

    function qA(JJ) {
      let {
        day: cJ
      } = JJ;
      const ZJ = MJ(cJ);
      return (0, IU.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: SJ.map(((JJ, FJ) => {
          const UJ = FJ + 1;
          return (0, IU.jsxs)("li", {
            className: rU()("SkyblockDailyRewardTile", {
              Claimed: UJ < cJ && UJ !== ZJ,
              Today: UJ === cJ,
              Tomorrow: UJ === ZJ,
              Jackpot: UJ === IJ
            }),
            children: [(0, IU.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: UJ
            }), (0, IU.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, IU.jsx)(EU.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, KU.e)(JJ.dailyRewardCoins)]
            }), JJ.dailyRewardItems.map((JJ => (0, IU.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, IU.jsx)(EU.d, {
                itemName: JJ.dailyRewardItemName,
                amount: 0
              }), "\xd7", JJ.dailyRewardItemAmount]
            }, JJ.dailyRewardItemName)))]
          }, UJ)
        }))
      })
    }

    function jA(JJ) {
      let {
        view: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)(), FJ = (0, yJ.useRef)(null), UJ = (0, yJ.useRef)(null), [eJ, XJ] = (0, yJ.useState)(null);
      (0, yJ.useLayoutEffect)((() => {
        var JJ;
        const cJ = null === (JJ = FJ.current) || void 0 === JJ ? void 0 : JJ.getBoundingClientRect();
        if (cJ) {
          var ZJ, eJ;
          const JJ = Array.from(null !== (ZJ = null === (eJ = UJ.current) || void 0 === eJ ? void 0 : eJ.children) && void 0 !== ZJ ? ZJ : [], (JJ => ZA(JJ.getBoundingClientRect())));
          XJ({
            origin: ZA(cJ),
            target: cA(),
            itemOrigins: JJ,
            itemTarget: FA()
          })
        }
      }), []);
      const AJ = MJ(cJ.day),
        qJ = function(JJ, cJ) {
          const [ZJ, FJ] = (0, yJ.useState)((() => JA() ? JJ : 0));
          return (0, yJ.useEffect)((() => {
            if (JA()) return;
            const ZJ = performance.now();
            let UJ = 0;
            const eJ = XJ => {
              const AJ = Math.min(Math.max((XJ - ZJ) / cJ, 0), 1);
              FJ(Math.round(JJ * (1 - (1 - AJ) ** 3))), AJ < 1 && (UJ = requestAnimationFrame(eJ))
            };
            return UJ = requestAnimationFrame(eJ), () => {
              cancelAnimationFrame(UJ)
            }
          }), [JJ, cJ]), ZJ
        }(cJ.coins, 450);
      return (0, IU.jsxs)("div", {
        className: rU()("SkyblockDailyReward", {
          Jackpot: cJ.day === IJ
        }),
        style: {
          "--daily-duration": `${cJ.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, IU.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, IU.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, IU.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, IU.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: ZJ("skyblockGame:dailyRewardTitle")
            }), (0, IU.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: ZJ("skyblockGame:dailyRewardDay", {
                day: String(cJ.day)
              })
            })]
          }), (0, IU.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: FJ,
            children: [(0, IU.jsx)(EU.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, IU.jsxs)("span", {
              children: ["+", (0, KU.e)(qJ)]
            })]
          }), cJ.items.length > 0 && (0, IU.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: UJ,
            children: cJ.items.map((JJ => (0, IU.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, IU.jsx)(EU.d, {
                itemName: JJ.dailyRewardItemName,
                amount: 0
              }), "\xd7", JJ.dailyRewardItemAmount]
            }, JJ.dailyRewardItemName)))
          }), (0, IU.jsx)(qA, {
            day: cJ.day
          }), (0, IU.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [ZJ("skyblockGame:dailyRewardComeBack"), (0, IU.jsx)(AA, {
              day: AJ
            })]
          })]
        }), null !== eJ && (0, IU.jsx)(XA, {
          origin: eJ.origin,
          target: eJ.target,
          count: cJ.flyingCoins
        }), null !== eJ && eJ.itemOrigins.length === cJ.items.length && (0, IU.jsx)(UA, {
          items: cJ.items,
          origins: eJ.itemOrigins,
          target: eJ.itemTarget
        })]
      })
    }
    const YA = (0, yJ.memo)((function(JJ) {
        let {
          controller: cJ
        } = JJ;
        const ZJ = (0, SU.m)(dZ, cJ.getSnapshot());
        return ZJ ? (0, IU.jsx)(jA, {
          view: ZJ
        }, ZJ.token) : null
      })),
      hA = "Gold Coin";

    function DA(JJ) {
      return 650 + 220 * JJ
    }

    function sA(JJ) {
      return {
        "--letter-delay": `${DA(JJ)}ms`,
        "--letter-land": `${DA(JJ)+300}ms`
      }
    }

    function nA(JJ) {
      let {
        letterCount: cJ
      } = JJ;
      return (0, IU.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, IU.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, IU.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, IU.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: cJ
        }, ((JJ, cJ) => (0, IU.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: sA(cJ),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, cJ)))]
      })
    }

    function GA(JJ) {
      var cJ, ZJ, FJ;
      let {
        letter: UJ,
        index: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, yU.F)(), AJ = null !== (cJ = null === (ZJ = UJ.items[0]) || void 0 === ZJ ? void 0 : ZJ.itemName) && void 0 !== cJ ? cJ : hA;
      return (0, IU.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: sA(eJ),
        children: [(0, IU.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, IU.jsx)(EU.d, {
            itemName: AJ,
            amount: 0
          })
        }), (0, IU.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: XJ(UJ.reasonKey, null !== (FJ = UJ.reasonParams) && void 0 !== FJ ? FJ : void 0)
        }), (0, IU.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [UJ.coins > 0 && (0, IU.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, IU.jsx)(EU.d, {
              itemName: hA,
              amount: 0
            }), "+", (0, KU.e)(UJ.coins)]
          }), UJ.items.map(((JJ, cJ) => (0, IU.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, IU.jsx)(EU.d, {
              itemName: JJ.itemName,
              amount: 0
            }), JJ.label, " \xd7", JJ.amount]
          }, cJ)))]
        })]
      })
    }

    function fA(JJ) {
      let {
        view: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)();
      return (0, IU.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${cJ.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${DA(cJ.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, IU.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, IU.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, IU.jsx)(nA, {
              letterCount: cJ.letters.length
            }), (0, IU.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: ZJ("skyblockGame:mailboxTitle")
            })]
          }), (0, IU.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: cJ.letters.map(((JJ, cJ) => (0, IU.jsx)(GA, {
              letter: JJ,
              index: cJ
            }, cJ)))
          }), cJ.more > 0 && (0, IU.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: ZJ("skyblockGame:mailboxMore", {
              count: String(cJ.more)
            })
          })]
        })
      })
    }
    const xA = (0, yJ.memo)((function(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(CZ, cJ.getSnapshot());
      return ZJ ? (0, IU.jsx)(fA, {
        view: ZJ
      }, ZJ.token) : null
    }));

    function rA(JJ) {
      let {
        controller: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)(), FJ = (0, SU.m)(PF, cJ.getSnapshot());
      if (null === FJ) return null;
      const UJ = FJ.fullSet ? "empty" === FJ.fuelState ? {
        text: ZJ("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: ZJ("skyblockGame:magmawardHudFullSet", {
          worn: String(FJ.wornCount)
        }),
        tone: "partial"
      };
      return (0, IU.jsx)(mU.f, {
        placement: "statBars",
        children: (0, IU.jsxs)("div", {
          className: rU()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${FJ.fuelState}`, {
            "SkyblockMagmawardHud-partial": !FJ.fullSet,
            "SkyblockMagmawardHud-armed": FJ.fullSet && "empty" !== FJ.fuelState
          }),
          children: [null !== FJ.flare && (0, IU.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${FJ.flare}`
          }, `flare:${FJ.flareToken}`), (0, IU.jsx)("div", {
            className: rU()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: FJ.setLit
            }),
            children: FJ.pieces.map(((JJ, cJ) => (0, IU.jsx)("div", {
              className: rU()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: JJ.worn,
                SkyblockMagmawardPieceJustWorn: JJ.justWorn
              }),
              children: (0, IU.jsx)(EU.d, {
                itemName: JJ.itemName,
                amount: 0
              })
            }, `${cJ}:${JJ.wornToken}`)))
          }, `pieces:${FJ.setLitToken}`), (0, IU.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, IU.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, IU.jsxs)("div", {
              className: rU()("SkyblockMagmawardFuelCounter", FJ.pulse && `SkyblockMagmawardFuelCounter-${FJ.pulse}`),
              children: [(0, IU.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, IU.jsx)(EU.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, IU.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: FJ.fuel
              })]
            }, `counter:${FJ.pulseToken}`), "burn" === FJ.pulse && (0, IU.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${FJ.pulseToken}`)]
          }), UJ && (0, IU.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${UJ.tone} SmallTextBold`,
            children: UJ.text
          })]
        })
      })
    }

    function vA(JJ) {
      let {
        controller: cJ
      } = JJ;
      const {
        t: ZJ,
        selectedLanguage: FJ
      } = (0, yU.F)(), UJ = (0, SU.m)(pF, cJ.getSnapshot());
      return null === UJ ? null : (0, IU.jsx)(mU.f, {
        placement: "statBars",
        children: (0, IU.jsxs)("div", {
          className: rU()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: UJ.inRange
          }),
          style: {
            "--glowtide-colour": UJ.colour
          },
          "aria-label": ZJ("skyblockGame:glowtideChipLabel"),
          children: [(0, IU.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), UJ.inRange ? (0, IU.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: ZJ("skyblockGame:glowtideChipInRange")
          }, `call:${UJ.inRangeToken}`) : (0, IU.jsxs)(IU.Fragment, {
            children: [(0, IU.jsx)("div", {
              ref: cJ.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, IU.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: ZJ("skyblockGame:waypointDistance", {
                distance: EJ(UJ.distance, FJ.code)
              })
            })]
          })]
        })
      })
    }

    function mA(JJ) {
      let {
        controller: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)(), FJ = (0, SU.m)(zF, cJ.getSnapshot());
      return null === FJ ? null : (0, IU.jsx)(mU.f, {
        placement: "statBars",
        children: (0, IU.jsxs)("div", {
          className: rU()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: FJ.full
          }),
          "aria-label": ZJ("skyblockGame:glowMeterLabel", {
            fill: String(FJ.fill),
            qh: String(FJ.qh)
          }),
          children: [FJ.burst && (0, IU.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${FJ.burstToken}`), (0, IU.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, IU.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${FJ.ratio})`
              }
            }), FJ.gained && (0, IU.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${FJ.gainToken}`), FJ.full && Array.from({
              length: 5
            }, ((JJ, cJ) => (0, IU.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, cJ)))]
          }), FJ.full && FJ.rares.map((JJ => (0, IU.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, IU.jsx)(EU.d, {
              itemName: JJ,
              amount: 0
            })
          }, JJ))), FJ.ready && (0, IU.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, IU.jsx)("span", {
              children: ZJ("skyblockGame:glowMeterReady")
            })
          }, `ready:${FJ.fullToken}`)]
        })
      })
    }

    function QA(JJ) {
      let {
        controller: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, yU.F)(), FJ = (0, SU.m)(OF, cJ.getSnapshot());
      if (null === FJ) return null;
      const UJ = "waiting" === FJ.phase,
        eJ = {
          animationDuration: `${FJ.waitMs}ms`,
          animationDelay: -FJ.elapsedMs + "ms"
        },
        XJ = UJ ? void 0 : {
          animationDuration: `${FJ.waitMs}ms`
        };
      return (0, IU.jsxs)("div", {
        className: UJ ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [UJ && (0, IU.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((JJ, cJ) => (0, IU.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, cJ))), (0, IU.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: eJ
          }), (0, IU.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, IU.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, IU.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: eJ
            })]
          }), (0, IU.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, IU.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: XJ,
          children: ZJ(FJ.line)
        }, FJ.lineIndex)]
      }, FJ.token)
    }

    function EA(JJ) {
      let {
        chart: cJ,
        showHere: ZJ,
        className: FJ
      } = JJ;
      return (0, IU.jsx)("div", {
        className: rU()("SkyblockTideChartGrid", FJ, null !== cJ.pictureName && "Complete"),
        "aria-hidden": "true",
        children: cJ.cells.map(((JJ, FJ) => {
          const UJ = 0 !== (cJ.pulseCells & 1 << FJ),
            eJ = cJ.castCell === FJ;
          return (0, IU.jsx)("span", {
            className: rU()("SkyblockTideChartCell", `Cell-${JJ}`, UJ && "Pulse", eJ && "Cast", ZJ && cJ.hereCell === FJ && "Here")
          }, `${FJ}:${UJ?`p${cJ.pulseToken}`:""}:${eJ?`c${cJ.castToken}`:""}`)
        }))
      })
    }

    function VA(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(CF, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = ZJ.chip;
      if (!ZJ.enabled || null === UJ) return null;
      const eJ = FJ("skyblockGame:tideChartsChipLabel", {
        island: UJ.islandName,
        lit: String(UJ.lit),
        ink: String(UJ.ink)
      });
      return (0, IU.jsx)(mU.f, {
        placement: "statBars",
        children: (0, IU.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: rU()("SkyblockTideChartsChip", ZJ.open && "Open", null !== UJ.pictureName && "Complete"),
          "aria-label": eJ,
          title: eJ,
          onMouseDown: JJ => {
            JJ.preventDefault()
          },
          onClick: cJ.toggle,
          children: [(0, IU.jsx)(EA, {
            chart: UJ,
            showHere: !1,
            className: "Mini"
          }), (0, IU.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [UJ.lit, "/", UJ.ink]
          })]
        })
      })
    }

    function KA(JJ) {
      let {
        controller: cJ
      } = JJ;
      const ZJ = (0, SU.m)(CF, cJ.getSnapshot()),
        {
          t: FJ
        } = (0, yU.F)(),
        UJ = zU(),
        eJ = ZJ.card;
      return ZJ.enabled && null !== eJ ? (0, IU.jsx)(kU.c, {
        show: ZJ.open,
        close: cJ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, IU.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: UJ,
          onKeyDown: dU,
          children: [(0, IU.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, IU.jsxs)("div", {
              children: [(0, IU.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: FJ("skyblockGame:tideChartsTitle")
              }), (0, IU.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: FJ("skyblockGame:tideChartsIntro")
              })]
            }), (0, IU.jsx)(pU.j, {
              padIgnore: !0,
              ariaLabel: FJ("skyblockGame:tideChartsClose"),
              onClick: cJ.dismiss
            })]
          }), ZJ.tabs.length > 1 && (0, IU.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": FJ("skyblockGame:tideChartsIslands"),
            children: ZJ.tabs.map((JJ => (0, IU.jsx)("button", {
              type: "button",
              className: rU()("SkyblockTideChartsTab", JJ.selected && "Selected"),
              "aria-pressed": JJ.selected,
              onClick: () => {
                cJ.PD(JJ.island)
              },
              children: JJ.name
            }, JJ.island)))
          }), (0, IU.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, IU.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": eJ.gridLabel,
              children: (0, IU.jsx)(EA, {
                chart: eJ,
                showHere: !0,
                className: "Large"
              })
            }), (0, IU.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, IU.jsx)("h3", {
                children: eJ.islandName
              }), (0, IU.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: eJ.litText
              }), null === eJ.pictureName ? (0, IU.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: FJ("skyblockGame:tideChartsPictureHidden")
              }) : (0, IU.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: FJ("skyblockGame:tideChartsPictureRevealed", {
                  picture: eJ.pictureName
                })
              }, eJ.pictureName), (0, IU.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, IU.jsxs)("li", {
                  children: [(0, IU.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), FJ("skyblockGame:tideChartsLegendLit")]
                }), (0, IU.jsxs)("li", {
                  children: [(0, IU.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), FJ("skyblockGame:tideChartsLegendClear")]
                }), null !== eJ.hereCell && (0, IU.jsxs)("li", {
                  children: [(0, IU.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), FJ("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, IU.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, IU.jsx)("span", {
                  children: ZJ.turnsText
                }), (0, IU.jsx)("span", {
                  children: ZJ.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function yA(JJ) {
      var cJ;
      let {
        controller: ZJ
      } = JJ;
      const {
        selectedLanguage: FJ
      } = (0, yU.F)(), UJ = FJ.code;
      (0, yJ.useEffect)((() => {
        ZJ.setTranslator(((JJ, cJ) => (0, yU.z)(UJ, JJ, cJ)), UJ, ((JJ, cJ) => (0, yU.t)(UJ, JJ, cJ)))
      }), [ZJ, UJ]);
      const eJ = (0, SU.m)(DJ, ZJ.map.getSnapshot()),
        {
          openInGameMenuName: XJ
        } = (0, vU.j)(["openInGameMenuName"]);
      return (0, IU.jsxs)(IU.Fragment, {
        children: [(0, IU.jsx)(tX, {
          controller: ZJ.quests,
          display: ZJ.navigation.display
        }), eJ.enabled && !XJ && (0, IU.jsx)(Je, {
          controller: ZJ.navigation
        }), (0, IU.jsx)(MU, {
          controller: ZJ,
          minimap: eJ.enabled && (null === (cJ = eJ.presentation) || void 0 === cJ ? void 0 : cJ.minimap) && (0, IU.jsx)(lU, {
            view: eJ.presentation.minimap,
            navigation: ZJ.navigation,
            controller: ZJ.map
          }),
          children: (0, IU.jsx)(je, {
            controller: ZJ.quests,
            surface: "hud"
          })
        }), (0, IU.jsx)(LX, {
          controller: ZJ.navigation
        }), (0, IU.jsx)(lX, {
          controller: ZJ.portalTransit
        }), (0, IU.jsx)(YA, {
          controller: ZJ.dailyReward
        }), (0, IU.jsx)(xA, {
          controller: ZJ.mailbox
        }), (0, IU.jsx)(rA, {
          controller: ZJ.magmaward
        }), (0, IU.jsx)(vA, {
          controller: ZJ.glowtide
        }), (0, IU.jsx)(jX, {
          controller: ZJ.passage
        }), (0, IU.jsx)(VA, {
          controller: ZJ.tideCharts
        }), (0, IU.jsx)(mA, {
          controller: ZJ.glowMeter
        }), (0, IU.jsx)(mX, {
          controller: ZJ.reachLog
        }), (0, IU.jsx)(QA, {
          controller: ZJ.hushWait
        }), (0, IU.jsx)(fX, {
          controller: ZJ.lampLight
        }), (0, IU.jsx)(ce, {
          controller: ZJ.skills,
          surface: "hud"
        })]
      })
    }

    function SA(JJ) {
      let {
        controller: cJ
      } = JJ;
      return (0, IU.jsxs)(IU.Fragment, {
        children: [(0, IU.jsx)(oU, {
          controller: cJ.map,
          navigation: cJ.navigation
        }), (0, IU.jsx)(ce, {
          controller: cJ.skills,
          surface: "menu"
        }), (0, IU.jsx)(je, {
          controller: cJ.quests,
          surface: "menu"
        }), (0, IU.jsx)(Ce, {
          controller: cJ.dungeons
        }), (0, IU.jsx)(Re, {
          controller: cJ.collections
        }), (0, IU.jsx)(Be, {
          controller: cJ.questGraph
        }), (0, IU.jsx)(cX, {
          controller: cJ.forge
        }), (0, IU.jsx)(AX, {
          controller: cJ.smuggler
        }), (0, IU.jsx)(rX, {
          controller: cJ.keepersChair,
          lampLight: cJ.lampLight
        }), (0, IU.jsx)(TX, {
          controller: cJ.reachLog,
          regulars: cJ.regulars,
          hiddenWaters: cJ.hiddenWaters
        }), (0, IU.jsx)(KX, {
          controller: cJ.regulars
        }), (0, IU.jsx)(hX, {
          controller: cJ.passage
        }), (0, IU.jsx)(KA, {
          controller: cJ.tideCharts
        }), (0, IU.jsx)(iX, {
          controller: cJ.dialogue
        }), (0, IU.jsx)(RX, {
          controller: cJ.autographs
        })]
      })
    }
    var IA = ZJ(35789);
    const MA = oZ + eF;

    function bA(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = [],
        XJ = [],
        AJ = ZJ => {
          const FJ = JJ.playSound(cJ, ZJ.sound, ZJ.volume, ZJ.rate);
          FJ && (XJ.push(FJ), void 0 !== ZJ.cutAfter && eJ.push(setTimeout((() => {
            FJ.fade(FJ.getVolume(), 0, 300)
          }), ZJ.cutAfter)))
        };
      for (const qJ of function(JJ, cJ) {
          const ZJ = [{
            sound: "rpgKnifeSlice1",
            beat: oZ,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: oZ,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: oZ,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: oZ,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: oZ,
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
            sound: (0, IA.e)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: MA + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, IA.e)("bigDrumSwish"),
            beat: MA + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: MA + 60,
            lead: 180,
            volume: .5 + .06 * JJ,
            rate: .82 + .07 * JJ
          }];
          return JJ >= 4 && ZJ.push({
            sound: "exp_levelup",
            beat: MA + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), cJ && ZJ.push({
            sound: "trumpetFlare",
            beat: MA + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), ZJ.push({
            sound: "harp_pling",
            beat: lZ,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), ZJ
        }(ZJ, FJ)) UJ ? eJ.push(setTimeout((() => {
        AJ(qJ)
      }), Math.max(0, qJ.beat - qJ.lead / qJ.rate))) : qJ.beat !== oZ && "magicAccent2" !== qJ.sound && "trumpetFlare" !== qJ.sound || AJ(qJ);
      return () => {
        for (const JJ of eJ) clearTimeout(JJ);
        for (const JJ of XJ) JJ.fade(JJ.getVolume(), 0, 120)
      }
    }
    class wA {
      constructor(JJ) {
        this.deps = JJ, this.pending = new Map, this.localHook = null
      }
      hookWaiting(JJ, cJ) {
        this.pending.delete(JJ);
        const ZJ = this.deps.now();
        if (null === cJ) {
          var FJ;
          if ((null === (FJ = this.localHook) || void 0 === FJ ? void 0 : FJ.hookId) === JJ) {
            const JJ = ZJ >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(JJ)
          }
          return
        }
        const UJ = ZJ + cJ;
        this.settle(JJ, UJ) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(JJ, {
          untilMs: ZJ + 1e3,
          biteAtMs: UJ
        }))
      }
      getLocalHook() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.localHook) || void 0 === cJ ? void 0 : cJ.hookId) && void 0 !== JJ ? JJ : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const JJ = this.deps.now();
        for (const [cJ, {
            untilMs: ZJ,
            biteAtMs: FJ
          }] of this.pending)(this.settle(cJ, FJ) || JJ > ZJ) && this.pending.delete(cJ)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(JJ, cJ) {
        const ZJ = this.deps.getLineOwner(JJ);
        if (null === ZJ) return !1;
        if (!this.deps.isLocalPlayer(ZJ)) return !0;
        if (this.localHook = {
            hookId: JJ,
            biteAtMs: cJ
          }, !this.deps.isHushWaiting()) {
          const [cJ, ZJ] = this.deps.getHookPosition(JJ);
          this.deps.onCastLanded(cJ, ZJ)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var WA = ZJ(3726);
    const gA = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      HA = {
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
    class PA {
      constructor(JJ) {
        this.deps = JJ, this.tell = null
      }
      receiveTell(JJ) {
        let {
          biteTellTier: cJ
        } = JJ;
        this.tell = {
          tier: cJ,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(JJ) {
        const cJ = this.tell;
        if (this.tell = null, !JJ) return;
        const ZJ = null !== cJ && this.deps.now() - cJ.atMs <= 3e3 ? cJ.tier : 0;
        this.deps.vibrate(gA[ZJ])
      }
      burstAtHook() {
        const JJ = this.tell,
          cJ = this.deps.getLocalHookPosition();
        null === JJ || JJ.burst || null === cJ || (JJ.burst = !0, this.deps.playParticles(function(JJ, cJ) {
          let [ZJ, FJ, UJ] = cJ;
          const {
            count: eJ,
            rise: XJ,
            colour: AJ
          } = HA[JJ], [qJ, jJ, YJ] = AJ;
          return {
            texture: "glint",
            pos1: [ZJ - .3, FJ, UJ - .3],
            pos2: [ZJ + .3, FJ + .2, UJ + .3],
            dir1: [-.6, XJ, -.6],
            dir2: [.6, 1.4 * XJ, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: eJ,
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
              minColor: [qJ, jJ, YJ, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [qJ, jJ, YJ, 0],
              maxColor: [qJ, jJ, YJ, 0]
            }],
            blendMode: WA.g.Add,
            hideDist: 48
          }
        }(JJ.tier, cJ)))
      }
    }
    var kA = ZJ(1151),
      pA = ZJ(1712),
      dA = ZJ(29);

    function zA(JJ, cJ) {
      return [{
        timeFraction: 0,
        minColor: [255 * JJ[0], 255 * JJ[1], 255 * JJ[2], 1],
        maxColor: [255 * cJ[0], 255 * cJ[1], 255 * cJ[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const NA = [0, 0, 0],
      OA = {
        texture: "glint",
        mipmaps: !1,
        qh: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: NA,
        dir2: NA,
        blendMode: WA.g.OneOne
      },
      TA = {
        ...OA,
        colorGradients: zA([1, .88, .38], [1, .65, .15])
      },
      CA = {
        ...OA,
        colorGradients: zA([.55, .95, 1], [.9, 1, 1])
      },
      uA = [.5, .5, .5],
      iA = {
        texture: "glint",
        mipmaps: !1,
        qh: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: zA([1, .12, .12], [1, .35, .2]),
        blendMode: WA.g.OneOne
      };
    class RA {
      constructor() {
        this.drops = new Map
      }
      Qn(JJ, cJ) {
        if ("overflowFlash" === cJ.kind) {
          const [ZJ, FJ, UJ] = cJ.position, eJ = JJ.createParticles(iA, {
            pos: [ZJ, FJ, UJ],
            half: uA
          });
          return eJ.emit(18), void eJ.stop()
        }
        this.drops.has(cJ.itemId) || this.drops.set(cJ.itemId, {
          owner: cJ.owner,
          cosmetic: cJ.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Hh(JJ) {
        if (0 === this.drops.size) return;
        const cJ = performance.now(),
          ZJ = JJ.getCameraPosition();
        let FJ = 0;
        for (const eJ of this.drops.values()) null !== eJ.particles && FJ++;
        for (const [eJ, XJ] of this.drops) {
          const AJ = JJ.getPositionView(eJ);
          if (null === AJ) {
            var UJ;
            if (XJ.seen || cJ - XJ.markedAt > 5e3) null !== XJ.particles && FJ--, null === (UJ = XJ.particles) || void 0 === UJ || UJ.stop(), this.drops.delete(eJ);
            continue
          }
          XJ.cosmetic || !JJ.isLocalPlayer(XJ.owner) || XJ.pickupDelayCleared || (JJ.clearPickupDelay(eJ), XJ.pickupDelayCleared = !0);
          const qJ = XJ.lastPosition,
            jJ = XJ.seen && (AJ[0] - qJ[0]) ** 2 + (AJ[1] - qJ[1]) ** 2 + (AJ[2] - qJ[2]) ** 2 > 4e-4,
            YJ = (AJ[0] - ZJ[0]) ** 2 + (AJ[1] - ZJ[1]) ** 2 + (AJ[2] - ZJ[2]) ** 2 < 2025;
          XJ.seen = !0, qJ[0] = AJ[0], qJ[1] = AJ[1], qJ[2] = AJ[2], jJ && (XJ.lastMovingAt = cJ), null !== XJ.particles && (!YJ || cJ - XJ.lastMovingAt > 500) && (XJ.particles.stop(), XJ.particles = null, FJ--), jJ && YJ && null === XJ.particles && FJ < 32 && (XJ.particles = JJ.createParticles(XJ.cosmetic ? CA : TA, {
            pos: AJ
          }), FJ++), null !== XJ.particles && (XJ.particles.moveTo(AJ), XJ.particles.setEmitRate(jJ ? 12 : 0)), !jJ && null === XJ.particles && cJ - Math.max(XJ.lastMovingAt, XJ.markedAt) > 2e3 && this.drops.delete(eJ)
        }
      }
      dispose() {
        for (const cJ of this.drops.values()) {
          var JJ;
          null === (JJ = cJ.particles) || void 0 === JJ || JJ.stop()
        }
        this.drops.clear()
      }
    }
    var LA = ZJ(157);
    const aA = LA.c.Dv * LA.c.playerEyeToHeightRatio;
    class BA {
      constructor(JJ) {
        this.host = JJ, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Qn(JJ) {
        this.lava = JJ, this.nextUpdateAt = 0
      }
      Hh() {
        var JJ;
        const cJ = this.host.now();
        if (cJ < this.nextUpdateAt) return;
        this.nextUpdateAt = cJ + 250;
        const ZJ = this.host.playerPosition(),
          FJ = ZJ && this.findNearest([ZJ[0], ZJ[1] + aA, ZJ[2]]);
        if (!FJ || FJ.distance >= 40) return void this.stop();
        const UJ = .5 * Math.min(1, (40 - FJ.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(UJ) : this.loop = this.host.play("lavaFlow", UJ, FJ.position, 40 + aA, 9, !0), null === (JJ = this.loop) || void 0 === JJ || JJ.setPosition(FJ.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var JJ;
        null === (JJ = this.loop) || void 0 === JJ || JJ.stop(), this.loop = null
      }
      findNearest(JJ) {
        let cJ = -1,
          ZJ = 1 / 0;
        for (let FJ = 0; FJ < this.lava.length; FJ += 3) {
          const UJ = this.lava[FJ] - JJ[0],
            eJ = this.lava[FJ + 1] - JJ[1],
            XJ = this.lava[FJ + 2] - JJ[2],
            AJ = UJ * UJ + eJ * eJ + XJ * XJ;
          AJ < ZJ && (ZJ = AJ, cJ = FJ)
        }
        return cJ < 0 ? null : {
          position: [this.lava[cJ], this.lava[cJ + 1], this.lava[cJ + 2]],
          distance: Math.sqrt(ZJ)
        }
      }
    }
    var tA = ZJ(1685),
      oA = ZJ(37626);
    const lA = {
      "Grey Portal": "Gray"
    };
    for (const eq of UJ.pc) lA[`${eq} Portal`] = eq;
    const Jq = Object.keys(lA),
      cq = Object.fromEntries(Jq.map((JJ => [JJ, (0, UJ.V)(UJ.D[`${(0,UJ.be)(lA[JJ])}Team`])])));
    Object.fromEntries(Jq.map((JJ => [JJ, UJ.D[`${(0,UJ.be)(lA[JJ])}UiText`]])));
    class Zq {
      constructor(JJ, cJ) {
        this.presentation = JJ, this.portal = cJ, this.unlocked = void 0
      }
      Qn(JJ) {
        const cJ = !1 === this.unlocked && JJ;
        this.unlocked = JJ, this.Hh();
        const {
          min: ZJ,
          max: FJ,
          unlockedBlock: UJ
        } = this.portal;
        if (cJ && this.presentation.hasChunk(...ZJ)) {
          const [JJ, cJ, eJ] = cq[UJ];
          this.presentation.playParticles({
            pos1: [...ZJ],
            pos2: FJ.map((JJ => JJ + 1)),
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
              minColor: [JJ, cJ, eJ, 1],
              maxColor: [Math.min(255, JJ + 55), Math.min(255, cJ + 55), Math.min(255, eJ + 90), 1]
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
      Hh() {
        var JJ;
        const cJ = this.unlocked ? this.portal.unlockedBlock : null !== (JJ = this.portal.lockedBlock) && void 0 !== JJ ? JJ : "Light Gray Portal",
          {
            min: ZJ,
            max: FJ
          } = this.portal;
        for (let UJ = ZJ[0]; UJ <= FJ[0]; UJ++)
          for (let JJ = ZJ[1]; JJ <= FJ[1]; JJ++)
            for (let eJ = ZJ[2]; eJ <= FJ[2]; eJ++) this.presentation.hasChunk(UJ, JJ, eJ) && this.presentation.Qm(UJ, JJ, eJ) !== cJ && this.presentation.fK(UJ, JJ, eJ, cJ)
      }
    }
    const Fq = {
        farming_1: {
          raises: JJ => "NPC" === JJ.type && "chef" === JJ.variation,
          rise: .4
        },
        fishing_1: {
          raises: JJ => "Draugr Warper" === JJ.type,
          rise: .4
        }
      },
      Uq = (JJ, cJ, ZJ, eJ) => {
        let {
          localPlayerId: XJ
        } = eJ;
        const AJ = new fU({
          translate: (JJ, cJ) => (0, yU.z)(kA.e.get().getCurrentLanguageCode(), JJ, cJ),
          translateWithIcons: (JJ, cJ) => (0, yU.t)(kA.e.get().getCurrentLanguageCode(), JJ, cJ),
          setMenuOpen: JJ => {
            JJ ? (0, uJ.n)() : (0, uJ.f)()
          },
          dismissMenu: uJ.j,
          publishSkills: JJ => {
            iJ.i.Uf(FZ, JJ, !0)
          },
          publishQuests: JJ => {
            iJ.i.Uf(AZ, JJ, !0)
          },
          publishQuestNotification: JJ => {
            iJ.i.Uf(qZ, JJ, !0)
          },
          publishDungeons: JJ => {
            iJ.i.Uf(hZ, JJ, !0)
          },
          publishCollections: JJ => {
            iJ.i.Uf(gZ, JJ, !0)
          },
          publishMap: JJ => {
            iJ.i.Uf(DJ, JJ, !0)
          },
          publishHud: JJ => {
            iJ.i.Uf(sU, JJ, !0)
          },
          publishPortalTransit: JJ => {
            iJ.i.Uf(PZ, JJ, !0)
          },
          isLoadingScreenUp: () => vU.d.get("loadingOverlayVisible"),
          publishDailyReward: JJ => {
            iJ.i.Uf(dZ, JJ, !0)
          },
          publishMailbox: JJ => {
            iJ.i.Uf(CZ, JJ, !0)
          },
          publishQuestGraph: JJ => {
            iJ.i.Uf(iZ, JJ, !0)
          },
          publishForge: JJ => {
            iJ.i.Uf(DF, JJ, !0)
          },
          publishSmuggler: JJ => {
            iJ.i.Uf(GF, JJ, !0)
          },
          publishKeepersChair: JJ => {
            iJ.i.Uf(KF, JJ, !0)
          },
          publishReachLog: JJ => {
            iJ.i.Uf(SF, JJ, !0)
          },
          publishLampLight: JJ => {
            iJ.i.Uf(gF, JJ, !0)
          },
          publishMagmaward: JJ => {
            iJ.i.Uf(PF, JJ, !0)
          },
          publishGlowtide: JJ => {
            iJ.i.Uf(pF, JJ, !0)
          },
          publishGlowMeter: JJ => {
            iJ.i.Uf(zF, JJ, !0)
          },
          publishHushWait: JJ => {
            iJ.i.Uf(OF, JJ, !0)
          },
          publishPassage: JJ => {
            iJ.i.Uf(rF, JJ, !0)
          },
          publishTideCharts: JJ => {
            iJ.i.Uf(CF, JJ, !0)
          },
          publishRegulars: JJ => {
            iJ.i.Uf(oF, JJ, !0)
          },
          publishHiddenWaters: JJ => {
            iJ.i.Uf(FU, JJ, !0)
          },
          publishDialogue: JJ => {
            iJ.i.Uf(eU, JJ, !0)
          },
          publishAutographs: JJ => {
            iJ.i.Uf(YU, JJ, !0)
          },
          onDailyRewardStarted: JJ => {
            pJ.playSound(XJ, JJ.day === IJ ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (JJ, cJ) => {
            pJ.playSound(XJ, "exp_collect", .35, 1 + .6 * JJ / (cJ - 1)), iJ.i.Uf(zZ, JJ === cJ - 1)
          },
          onDailyRewardItemLanded: JJ => {
            pJ.playSound(XJ, "pickUp", .6, 1 + .15 * JJ)
          },
          onMailboxStarted: () => {
            pJ.playSound(XJ, "rpgMetalClick", .6, 1), pJ.playSound(XJ, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            pJ.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: dA.k,
          requestTracking: JJ => {
            pJ.sendCommand(`quests track ${JJ}`)
          },
          requestDungeonEnter: (JJ, cJ) => {
            pJ.sendCommand(`${wJ.l}${JJ} ${cJ}`)
          },
          requestQuestJump: JJ => {
            pJ.sendCommand(`${WJ} jump ${JJ}`)
          },
          requestQuestArrive: (JJ, cJ) => {
            const ZJ = `${WJ} arrive ${JJ}`;
            pJ.sendCommand(cJ ? `${ZJ} complete` : ZJ)
          },
          requestForge: JJ => {
            let {
              blade: cJ,
              guard: ZJ,
              handle: FJ
            } = JJ;
            pJ.sendCommand(`forge ${cJ} ${ZJ} ${FJ}`)
          },
          requestDialogue: () => {
            pJ.sendCommand("quests dialogue")
          },
          requestSmuggle: (JJ, cJ) => {
            pJ.sendCommand(`smuggle ${JJ} ${cJ}`)
          },
          requestKeepersChairAim: JJ => {
            pJ.sendCommand(`keeperschair-aim ${JJ}`)
          },
          requestReachLogOpen: () => {
            pJ.sendCommand("reachlog-open")
          },
          requestLampLight: JJ => {
            pJ.sendCommand(`${JJ}`)
          },
          requestTravel: JJ => {
            pJ.sendCommand(`map travel ${JJ.kind} ${JJ.id} ${JJ.requestId}`)
          }
        });
        let qJ, jJ, YJ, hJ, sJ, nJ, GJ, mJ, QJ, EJ, VJ, SJ, MJ;
        const gJ = new RA;
        let pJ, NJ = null;
        const OJ = Fq[null !== ZJ && void 0 !== ZJ ? ZJ : ""],
          LJ = (JJ, cJ) => {
            null !== OJ && void 0 !== OJ && OJ.raises(cJ) && pJ.setNametagOffset(JJ, OJ.rise)
          },
          aJ = new PA({
            getLocalHookPosition: () => {
              const JJ = BJ.getLocalHook();
              return null !== JJ && pJ.checkValid(JJ) ? pJ.Om(JJ) : null
            },
            playParticles: JJ => {
              pJ.playParticleEffect(JJ)
            },
            vibrate: JJ => {
              RJ.g.play("fishBite", JJ)
            },
            now: () => performance.now()
          }),
          BJ = new wA({
            getLineOwner: JJ => pJ.checkValid(JJ) ? pJ.getLineOwner(JJ) : null,
            isLocalPlayer: JJ => pJ.isLocalPlayer(JJ),
            getHookPosition: JJ => {
              const [cJ, , ZJ] = pJ.Om(JJ);
              return [cJ, ZJ]
            },
            isHushWaiting: () => {
              var JJ;
              return "waiting" === (null === (JJ = AJ.hushWait.getSnapshot()) || void 0 === JJ ? void 0 : JJ.phase)
            },
            onCastLanded: (JJ, cJ) => {
              AJ.tideCharts.castLanded(JJ, cJ)
            },
            onLocalHookSettled: () => {
              aJ.onLocalHookSettled()
            },
            onLocalWaitEnded: JJ => {
              aJ.onLocalWaitEnded(JJ)
            },
            now: () => performance.now()
          }),
          tJ = new BA({
            now: () => performance.now(),
            playerPosition: () => pJ.checkValid(XJ) ? pJ.Om(XJ) : null,
            play: (JJ, cJ, ZJ, FJ, UJ, eJ) => pJ.playSound(XJ, JJ, cJ, 1, {
              lF: ZJ,
              maxHearDist: FJ,
              refDistance: UJ
            }, eJ)
          }),
          oJ = new Map;
        let lJ;
        return {
          onCreate: JJ => {
            if (pJ = JJ, NJ = new oA.SkyblockEntityFacing(JJ, OJ ? LJ : null), AJ.portalTransit.resumeArrival(null !== ZJ && void 0 !== ZJ ? ZJ : null), (null !== ZJ && void 0 !== ZJ ? ZJ : FJ) === FJ) {
              let JJ = -1 / 0;
              lJ = iJ.i.subscribe("toggleMenu", (cJ => {
                const ZJ = performance.now();
                "inventory|Workbench" !== cJ || "cross_to_hub" !== AJ.quests.getTrackedQuestId() || ZJ - JJ < 1e4 || (JJ = ZJ, pJ.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [FJ, UJ] of Object.entries(null !== (cJ = HJ[null !== ZJ && void 0 !== ZJ ? ZJ : ""]) && void 0 !== cJ ? cJ : {})) {
              var cJ;
              oJ.set(FJ, new Zq({
                hasChunk: (cJ, ZJ, FJ) => JJ.isBlockInLoadedChunk(cJ, ZJ, FJ),
                Qm: (cJ, ZJ, FJ) => JJ.blockIdToBlockName(JJ.getBlockId(cJ, ZJ, FJ)),
                fK: (cJ, ZJ, FJ, UJ) => {
                  JJ.fK(cJ, ZJ, FJ, UJ)
                },
                playParticles: cJ => {
                  JJ.playParticleEffect(cJ)
                }
              }, UJ))
            }
            MJ = (0, tA.f)((JJ => function(JJ) {
              return Object.hasOwn(Oc, JJ) || JJ.startsWith("npc_")
            }(JJ) ? Cc(JJ) : null)), AJ.resolveItemName = (cJ, ZJ) => {
              const FJ = JJ.getItemStat(XJ, cJ, "displayName");
              return FJ && "object" === typeof FJ && "translationKey" in FJ ? ZJ(FJ.translationKey, (0, yU.s)(FJ.params, pA.d.shown)) : "string" === typeof FJ ? ZJ(FJ) : cJ
            }, AJ.quests.notifications.onShown = JJ => {
              "quest" === JJ ? pJ.playSound(XJ, "magicAccent1", 1, 1) : "skillLevel" === JJ ? pJ.playSound(XJ, "magicAccent1", 1, .6) : "landmark" === JJ ? pJ.playSound(XJ, "trumpetFlare", 1, .6) : "npcNote" === JJ ? pJ.playSound(XJ, "magicAccent2", .8, 1.1) : "started" === JJ ? pJ.playSound(XJ, (0, IA.e)("bigDrumSwish"), 1, 1) : pJ.playSound(XJ, (0, IA.e)("rpgHandleSmallLeather"), 1, 1)
            }, AJ.forge.onPartSelected = () => {
              pJ.playSound(XJ, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, AJ.forge.onForgeStarted = (cJ, ZJ, FJ) => bA(JJ, XJ, cJ, ZJ, FJ), AJ.smuggler.onBought = () => {
              pJ.playSound(XJ, (0, IA.e)("rpgHandleSmallLeather"), 1, 1), pJ.playSound(XJ, "chestOpen", .6, 1)
            }, AJ.compass.register(new fJ(AJ.map, !0)), AJ.compass.register(new fJ(AJ.map, !1)), AJ.compass.register(new rJ(AJ.map)), AJ.compass.register(new vJ((() => AJ.quests.getSnapshot().compassTarget)));
            for (const ZJ of ["enemy", "npc"]) AJ.compass.register(new xJ(AJ.map, ZJ, (cJ => JJ.checkValid(cJ) ? JJ.Om(cJ) : void 0), (cJ => JJ.isAlive(cJ))))
          },
          onAfterRender: (JJ, cJ) => {
            const ZJ = pJ.checkValid(XJ) ? pJ.Om(XJ) : null;
            AJ.navigation.afterRender(ZJ, performance.now(), cJ), AJ.glowtide.afterRender(ZJ, cJ.cameraHeading), AJ.tideCharts.afterRender(ZJ), BJ.afterRender()
          },
          onClose: () => {
            var JJ, cJ, ZJ, FJ, UJ, eJ, XJ, DJ, nJ, fJ, xJ, rJ, vJ, KJ, yJ;
            lJ && iJ.i.unsubscribe(lJ), null === (JJ = MJ) || void 0 === JJ || JJ(), gJ.dispose(), tJ.dispose(), null === (cJ = NJ) || void 0 === cJ || cJ.dispose(), BJ.dispose(), AJ.dispose(), null === (ZJ = qJ) || void 0 === ZJ || ZJ(), null === (FJ = jJ) || void 0 === FJ || FJ(), null === (UJ = YJ) || void 0 === UJ || UJ(), null === (eJ = hJ) || void 0 === eJ || eJ(), null === (XJ = sJ) || void 0 === XJ || XJ(), null === (DJ = GJ) || void 0 === DJ || DJ(), null === (nJ = undefined) || void 0 === nJ || nJ(), null === (fJ = mJ) || void 0 === fJ || fJ(), null === (xJ = QJ) || void 0 === xJ || xJ(), null === (rJ = EJ) || void 0 === rJ || rJ(), null === (vJ = VJ) || void 0 === vJ || vJ(), null === (KJ = undefined) || void 0 === KJ || KJ(), null === (yJ = SJ) || void 0 === yJ || yJ()
          },
          onPlayerChangeBlock: (JJ, cJ, FJ, eJ, qJ, jJ) => {
            if (JJ === XJ && "Air" === jJ) {
              const JJ = pJ.getClientOption(XJ, "creative");
              AJ.skills.predictBlock([cJ, FJ, eJ], qJ, JJ);
              const jJ = function(JJ, cJ) {
                  if ("hub" === cJ || "farming_1" === cJ || "mining_1" === cJ) return !dJ.has(JJ) || "hub" !== cJ && "mining_1" !== cJ ? Object.hasOwn(kJ, JJ) ? kJ[JJ] : void 0 : PJ
                }(qJ, ZJ),
                YJ = ("hub" === ZJ || "mining_1" === ZJ) && (UJ.ad.some((JJ => JJ === qJ)) || Object.hasOwn(zJ, qJ) || "mining_1" === ZJ && "Block of Coal" === qJ);
              JJ || void 0 === jJ && !YJ || pJ.fK(cJ, FJ, eJ, null !== jJ && void 0 !== jJ ? jJ : PJ)
            }
          },
          onPlayerAttackEntity: (JJ, cJ) => {
            if (JJ !== XJ || "Player" !== pJ.getEntityType(cJ)) return;
            const [ZJ, FJ, UJ] = pJ.Om(cJ);
            pJ.burstParticlePreset("critical", [ZJ, FJ + 1, UJ], 10)
          },
          onChangeBlockFail: JJ => {
            for (const {
                iF: cJ
              }
              of JJ) AJ.skills.rejectBlock(cJ)
          },
          onReceivedMessageFromServer: (JJ, cJ) => {
            if ("skyblockGatedPortal" === JJ) {
              var ZJ;
              const [JJ, FJ] = cJ;
              return void(null === (ZJ = oJ.get(JJ)) || void 0 === ZJ || ZJ.Qn(FJ))
            }
            if ("skyblockDailyReward" === JJ) return void AJ.dailyReward.Qn(cJ);
            if ("skyblockMailbox" === JJ) return void AJ.mailbox.Qn(cJ);
            if ("skyblockPortalTransit" === JJ) return void AJ.portalTransit.Qn(cJ);
            if ("skyblockLoot" === JJ) return void gJ.Qn(pJ, cJ);
            if ("skyblockLava" === JJ) return void tJ.Qn(cJ);
            if ("skyblockForge" === JJ) return void AJ.forge.Qn(cJ);
            if ("skyblockMagmaward" === JJ) return void AJ.magmaward.Qn(cJ);
            if ("skyblockGlowtide" === JJ) return void AJ.glowtide.Qn(cJ);
            if ("skyblockGlowMeter" === JJ) return void AJ.glowMeter.Qn(cJ);
            if ("skyblockHushWait" === JJ) return void AJ.hushWait.Qn(cJ);
            if ("skyblockPassage" === JJ) {
              const JJ = cJ;
              return AJ.passage.Qn(JJ), AJ.reachLog.receivePassagePhase(JJ.passagePhase), EJ ??= (0, KJ.t)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: AJ.passage.show
              }), void AJ.keepersChair.receivePassage({
                keepersChairPassagePhase: JJ.passagePhase,
                keepersChairPassageNextPhase: JJ.passageNextPhase,
                keepersChairPassageTurnsInMs: JJ.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === JJ) {
              const JJ = cJ;
              return AJ.tideCharts.Qn(JJ), void(JJ.tideCharts.length > 0 && (VJ ??= (0, KJ.t)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: AJ.tideCharts.show
              })))
            }
            if (JJ === TJ.y) {
              var FJ;
              const {
                hookId: JJ,
                waiting: ZJ
              } = cJ;
              return void BJ.hookWaiting(JJ, null !== (FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.remainingMs) && void 0 !== FJ ? FJ : null)
            }
            if ("skyblockBiteTell" === JJ) return void aJ.receiveTell(cJ);
            if ("skyblockSmuggler" === JJ) return void AJ.smuggler.Qn(cJ);
            if ("skyblockKeepersChair" === JJ) return AJ.keepersChair.Qn(cJ), void AJ.lampLight.setAtChair(AJ.keepersChair.isAtChair());
            if ("skyblockLampLight" === JJ) {
              const JJ = cJ;
              var UJ;
              if (AJ.lampLight.Qn(JJ), JJ.lampLightReleasing) QJ ??= (0, KJ.t)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  AJ.lampLight.setRelease(!1)
                }
              });
              else null === (UJ = QJ) || void 0 === UJ || UJ(), QJ = void 0;
              return
            }
            if ("skyblockRegulars" === JJ) return void AJ.regulars.Qn(cJ);
            if ("skyblockHiddenWaters" === JJ) return void AJ.hiddenWaters.Qn(cJ);
            if ("skyblockReachLog" === JJ) return AJ.reachLog.Qn(cJ), void(mJ ??= (0, KJ.t)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: MF
              },
              onClick: AJ.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === JJ) {
              for (const [JJ, ZJ, FJ, UJ] of cJ) pJ.fK(JJ, ZJ, FJ, UJ);
              return
            }
            if ("skyblockHud" === JJ) AJ.receiveHud(cJ);
            else if ("skyblockMap" === JJ) AJ.map.Qn(cJ);
            else if (JJ === CJ.e) AJ.skills.Qn(cJ);
            else if (JJ === bJ && "dialogue" === cJ.kind) AJ.dialogue.Qn(cJ);
            else if (JJ === bJ) AJ.quests.Qn(cJ);
            else if (JJ === wJ.j) AJ.dungeons.Qn(cJ);
            else if ("sbCollections" === JJ) AJ.collections.Qn(cJ);
            else if ("skyblockQuestGraph" === JJ) AJ.questGraph.Qn(cJ);
            else {
              if ("skyblockAutographs" !== JJ) return;
              AJ.autographs.Qn(cJ)
            }
            if (!jJ && AJ.map.getSnapshot().enabled) {
              const JJ = (0, KJ.t)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: AJ.map.show
                }),
                cJ = (0, uJ.r)(AJ.map.show);
              jJ = () => {
                JJ(), cJ()
              }
            }!YJ && AJ.skills.getSnapshot().enabled && (YJ = (0, KJ.t)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: AJ.skills.show
            })), !GJ && AJ.collections.getSnapshot().enabled && (GJ = (0, KJ.t)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: AJ.collections.show
            })), !hJ && AJ.quests.getSnapshot().enabled && (hJ = (0, KJ.t)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: AJ.quests.show
            })), !SJ && AJ.autographs.getSnapshot().enabled && (SJ = (0, KJ.t)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: AJ.autographs.show
            }));
            const eJ = AJ.dungeons.getSnapshot().enabled;
            var XJ;
            (YJ || hJ || eJ) && nJ !== eJ && (nJ = eJ, null === (XJ = sJ) || void 0 === XJ || XJ(), sJ = (0, KJ.t)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: wc
              },
              disabled: !eJ,
              panel: !0,
              onClick: AJ.dungeons.show
            }));
            qJ || (qJ = (0, uJ.u)((0, yJ.createElement)(yA, {
              controller: AJ
            }), {
              content: (0, yJ.createElement)(SA, {
                controller: AJ
              }),
              onClose: AJ.close
            }))
          },
          Hh: () => {
            var JJ;
            for (const cJ of oJ.values()) cJ.Hh();
            gJ.Hh(pJ), tJ.Hh(), null === (JJ = NJ) || void 0 === JJ || JJ.Hh(), AJ.skills.Hh(), AJ.quests.Hh(), AJ.dailyReward.Hh(), AJ.mailbox.Hh(), AJ.map.Hh()
          }
        }
      }
  },
  37524: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      g: () => AJ,
      j: () => FJ,
      l: () => eJ,
      n: () => UJ,
      o: () => qJ
    });
    const FJ = "skyblockDungeons",
      UJ = "skyblockHeldBoss",
      eJ = "dungeonEnter ",
      XJ = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      AJ = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function qJ(JJ) {
      let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const ZJ = Math.max(0, Math.floor(JJ)),
        FJ = Math.floor(ZJ % 1e3 / 100),
        UJ = Math.floor(ZJ / 1e3),
        eJ = UJ % 60,
        XJ = Math.floor(UJ / 60),
        AJ = XJ % 60,
        qJ = Math.floor(XJ / 60),
        jJ = JJ => JJ < 10 ? `0${JJ}` : String(JJ),
        YJ = cJ ? `.${FJ}` : "";
      return qJ > 0 ? `${qJ}:${jJ(AJ)}:${jJ(eJ)}${YJ}` : `${AJ}:${jJ(eJ)}${YJ}`
    }
  },
  35494: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => UJ,
      e: () => FJ
    });
    const FJ = "skyblockSkills",
      UJ = "skills_test_gym"
  },
  8580: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => UJ,
      e: () => XJ
    });
    const FJ = [{
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

    function UJ(JJ) {
      let cJ, ZJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof JJ) {
        if (!Number.isFinite(JJ)) return "0";
        if (Math.abs(JJ) < 100) {
          const cJ = JJ < 0 ? "-" : "",
            ZJ = Math.abs(JJ);
          return ZJ >= 10 ? `${cJ}${ZJ.toFixed(1).replace(/\.0$/,"")}` : `${cJ}${ZJ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        cJ = BigInt(Math.floor(JJ))
      } else cJ = JJ;
      const UJ = cJ < 0n ? -cJ : cJ,
        eJ = cJ < 0n ? "-" : "",
        XJ = UJ.toString();
      if (XJ.length <= ZJ) return `${eJ}${XJ}`;
      const AJ = 3 * Math.floor((XJ.length - 1) / 3);
      if (AJ < 3) return `${eJ}${XJ}`;
      if (AJ > 3 * FJ.length) {
        const JJ = XJ[0],
          cJ = XJ.slice(1, 3).replace(/0+$/, "");
        return `${eJ}${cJ?`${JJ}.${cJ}`:JJ}e${XJ.length-1}`
      }
      const {
        threshold: qJ,
        suffix: jJ
      } = FJ[FJ.length - AJ / 3], YJ = UJ / qJ, hJ = Number(1000n * (UJ % qJ) / qJ), DJ = Number(YJ) + hJ / 1e3;
      let sJ;
      return sJ = DJ >= 100 ? Math.floor(DJ).toString() : DJ >= 10 ? DJ.toFixed(1).replace(/\.0$/, "") : DJ.toFixed(2).replace(/\.?0+$/, ""), `${eJ}${sJ}${jJ}`
    }
    const eJ = FJ.map((JJ => {
      let {
        threshold: cJ,
        suffix: ZJ
      } = JJ;
      return {
        threshold: Number(cJ),
        suffix: ZJ
      }
    })).filter((JJ => {
      let {
        threshold: cJ
      } = JJ;
      return Number.isFinite(cJ)
    }));

    function XJ(JJ) {
      const cJ = Math.abs(JJ),
        ZJ = JJ < 0 ? "-" : "";
      for (const {
          threshold: FJ,
          suffix: UJ
        }
        of eJ)
        if (cJ >= FJ) {
          const JJ = cJ / FJ;
          if (JJ >= 1e3) return `${ZJ}${cJ.toExponential(2).replace("e+","e")}`;
          let eJ;
          return eJ = JJ >= 100 ? Math.floor(JJ).toString() : JJ >= 10 ? JJ.toFixed(1).replace(/\.0$/, "") : JJ.toFixed(2).replace(/\.?0+$/, ""), `${ZJ}${eJ}${UJ}`
        } return `${ZJ}${cJ}`
    }
  },
  37544: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37551: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37560: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37565: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37573: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37581: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  37586: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37590: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37595: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37602: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37606: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37613: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37617: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  37619: (JJ, cJ, ZJ) => {
    JJ.exports = ZJ.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  17759: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  19883: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22292: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  23818: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25498: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25508: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37519: JJ => {
    JJ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);