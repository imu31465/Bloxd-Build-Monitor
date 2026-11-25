export const id = 194;
export const ids = [54, 194];
export const modules = {
  38840: (QQ, WQ, XQ) => {
    var wQ = {
      "./combat_1.png": 38849,
      "./dungeon_crumbling_crypt.png": 38854,
      "./dungeon_frozen_hollow.png": 38863,
      "./dungeon_wildwood_grove.png": 38870,
      "./dungeons.png": 38878,
      "./farming_1.png": 38880,
      "./fishing_1.png": 38884,
      "./hub.png": 38889,
      "./island.png": 38893,
      "./mining_1.png": 38896,
      "./mining_1_bridge.png": 38905,
      "./mining_1_gallery.png": 38908,
      "./mining_1_hollow.png": 38910,
      "./mining_1_village.png": 38913
    };

    function qQ(QQ) {
      var WQ = TQ(QQ);
      return XQ(WQ)
    }

    function TQ(QQ) {
      if (!XQ.o(wQ, QQ)) {
        var WQ = new Error("Cannot find module '" + QQ + "'");
        throw WQ.code = "MODULE_NOT_FOUND", WQ
      }
      return wQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(wQ)
    }, qQ.resolve = TQ, QQ.exports = qQ, qQ.id = 38840
  },
  38918: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      f: () => TQ
    });
    const wQ = new WeakMap;

    function qQ(QQ, WQ) {
      return wQ.set(QQ, WQ), QQ
    }

    function TQ(QQ) {
      var WQ;
      return null !== (WQ = wQ.get(QQ)) && void 0 !== WQ ? WQ : null
    }
  },
  38816: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ) {
      var wQ;
      const {
        width: qQ,
        height: TQ
      } = XQ, zQ = null !== (wQ = QQ.text) && void 0 !== wQ ? wQ : QQ, sQ = (zQ.x / 100 - .5) * qQ, FQ = (zQ.y / 100 - .5) * TQ, PQ = qQ / 2 - WQ.x;
      if (null !== QQ.text && Math.abs(sQ) <= PQ && FQ >= WQ.top - TQ / 2 && FQ <= TQ / 2 - WQ.bottom) return {
        x: zQ.x,
        y: zQ.y
      };
      const gQ = Math.min(0 === sQ ? 1 / 0 : PQ / Math.abs(sQ), FQ > 0 ? (TQ / 2 - WQ.bottom) / FQ : FQ < 0 ? (WQ.top - TQ / 2) / FQ : 1 / 0);
      return !Number.isFinite(gQ) || gQ < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + sQ * gQ / qQ * 100,
        y: 50 + FQ * gQ / TQ * 100
      }
    }
    XQ.d(WQ, {
      c: () => wQ
    })
  },
  38831: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ
    });
    const wQ = 4,
      qQ = 12e3,
      TQ = 1e3;
    class zQ {
      constructor() {
        let {
          limit: QQ = wQ,
          windowMs: WQ = qQ,
          spacingMs: XQ = TQ,
          now: zQ = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = QQ, this.windowMs = WQ, this.spacingMs = XQ, this.now = zQ
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const QQ of this.priority) QQ.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const QQ = this.now();
        this.sent.push(QQ), this.lastSentAt = QQ, this.schedule(), this.notify()
      }
      addPriority(QQ) {
        return this.priority.add(QQ), () => {
          this.priority.delete(QQ)
        }
      }
      subscribe(QQ) {
        return this.listeners.add(QQ), () => {
          this.listeners.delete(QQ)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const QQ of this.priority)
          if (QQ.waiting()) return !0;
        return !1
      }
      prune() {
        const QQ = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= QQ;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const QQ = this.now(),
          WQ = this.lastSentAt + this.spacingMs,
          XQ = Math.min(WQ > QQ ? WQ : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        XQ !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, XQ - QQ)))
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38813: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      constructor(QQ, WQ, XQ) {
        this.mB = QQ, this.beforeOpen = WQ, this.afterClose = XQ, this.open = !1, this.zj = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.zj && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(QQ) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(QQ)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.zj = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.zj || (this.snapshot = this.buildSnapshot(), this.mB(this.snapshot))
      }
    }
  },
  38926: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      SkyblockEntityFacing: () => sQ,
      needsSkyblockEntityFacing: () => zQ
    });
    var wQ = XQ(658),
      qQ = XQ(4534),
      TQ = XQ(38928);

    function zQ(QQ, WQ) {
      if (QQ.metaInfo === wQ.b || "Iron Guardian" === QQ.type || "Gold Guardian" === QQ.type) return !0;
      if ("Pig" === QQ.type) return "sitting" === QQ.pose;
      if ("Person" !== QQ.meshKind || void 0 === QQ.meshOpts) return !1;
      let XQ = null === WQ || void 0 === WQ ? void 0 : WQ.get(QQ.meshOpts);
      if (void 0 === XQ) {
        var TQ, zQ;
        const wQ = (0, qQ.e)(QQ);
        XQ = !1, "pig_napoleon" === (null === wQ || void 0 === wQ || null === (TQ = wQ.opts.textures) || void 0 === TQ ? void 0 : TQ.head) ? XQ = !0 : "npc_pig_head" === (null === wQ || void 0 === wQ || null === (zQ = wQ.opts.textures) || void 0 === zQ ? void 0 : zQ.head) && (XQ = "sitting" === wQ.opts.pose || "sitting"), WQ && (WQ.size >= 256 && WQ.clear(), WQ.set(QQ.meshOpts, XQ))
      }
      return "sitting" === XQ ? "sitting" === QQ.pose : XQ
    }(0, TQ.e)("skyblock", ((QQ, WQ) => {
      WQ.setFacingTolerance(zQ(QQ) ? 0 : null)
    }));
    class sQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = QQ, this.alsoVisit = WQ, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = QQ => {
          var WQ;
          const XQ = this.api.getEntityInfo(QQ);
          XQ && (zQ(XQ, this.meshFacingCache) && (this.api.setFacingTolerance(QQ, 0), this.nextFacing.add(QQ)), null === (WQ = this.alsoVisit) || void 0 === WQ || WQ.call(this, QQ, XQ))
        }
      }
      fJ() {
        const {
          api: QQ
        } = this, WQ = this.nextFacing;
        QQ.forEachEntity(this.visit);
        for (const XQ of this.facing) WQ.has(XQ) || QQ.setFacingTolerance(XQ, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = WQ
      }
      dispose() {
        for (const QQ of this.facing) this.api.setFacingTolerance(QQ, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38809: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => gF
    });
    const wQ = "island";
    var qQ = XQ(402);
    const TQ = (0, qQ.ub)([0, 0, -1]),
      zQ = [{
        name: "S",
        bearing: (0, qQ.ub)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, qQ.ub)([-1, 0, 0])
      }, {
        name: "N",
        bearing: TQ
      }, {
        name: "W",
        bearing: (0, qQ.ub)([1, 0, 0])
      }];

    function sQ(QQ, WQ, XQ) {
      return [100 * (XQ.mapMaxX - QQ) / (XQ.mapMaxX - XQ.mapMinX), 100 * (WQ - XQ.mapMinZ) / (XQ.mapMaxZ - XQ.mapMinZ)]
    }

    function FQ(QQ, WQ, XQ) {
      const qQ = "local" === WQ,
        TQ = QQ.background,
        zQ = WQ => TQ ? sQ(WQ[0] - QQ.mapOrigin[0], WQ[2] - QQ.mapOrigin[2], TQ.bounds) : [50, 50],
        FQ = (QQ.insideDungeon ? [] : QQ.landmarks).map((QQ => {
          var WQ, wQ;
          return {
            id: QQ.id,
            name: XQ(QQ.visited && QQ.nameKey ? null !== (WQ = QQ.mapLabelKey) && void 0 !== WQ ? WQ : QQ.nameKey : "skyblockGame:mapUnknown"),
            icon: QQ.visited && null !== (wQ = QQ.icon) && void 0 !== wQ ? wQ : "unknown",
            visited: QQ.visited,
            current: !1,
            position: zQ(QQ.position),
            travelKind: "landmark",
            travelId: QQ.id
          }
        })),
        gQ = QQ.zones.map((WQ => {
          var wQ;
          return {
            id: WQ.id,
            name: XQ(WQ.visited && WQ.nameKey ? WQ.nameKey : "skyblockGame:mapUnknown"),
            icon: WQ.visited && null !== (wQ = WQ.icon) && void 0 !== wQ ? wQ : "unknown",
            visited: WQ.visited,
            current: WQ.id === QQ.zoneId,
            position: WQ.position,
            thumbnail: WQ.visited ? WQ.id : void 0,
            travelKind: "zone",
            travelId: WQ.id
          }
        })),
        JQ = QQ.insideDungeon || !TQ ? [] : QQ.portals.map((QQ => {
          var WQ;
          return {
            id: QQ.id,
            name: XQ(null !== (WQ = QQ.nameKey) && void 0 !== WQ ? WQ : "skyblockGame:mapUnknown"),
            icon: QQ.visited ? "dungeons" === QQ.destination ? "portal_orange" : "portal" : "unknown",
            visited: QQ.visited,
            current: !1,
            position: zQ(QQ.position),
            colour: QQ.colour,
            travelKind: "zone",
            travelId: QQ.destination
          }
        })),
        rQ = qQ ? FQ : gQ,
        IQ = rQ.filter((QQ => QQ.visited)).length,
        jQ = TQ ? (TQ.bounds.mapMaxX - TQ.bounds.mapMinX) / (TQ.bounds.mapMaxZ - TQ.bounds.mapMinZ) : 2,
        BQ = TQ ? JSON.stringify([TQ.bounds, QQ.mapOrigin]) : "";
      return {
        local: qQ,
        points: rQ,
        portals: qQ ? JQ : [],
        progress: rQ.length ? XQ("skyblockGame:mapDiscovered", {
          current: String(IQ),
          total: String(rQ.length)
        }) : null,
        percent: rQ.length ? 100 * IQ / rQ.length : 0,
        canTravel: [...rQ, ...qQ ? JQ : []].some((QQ => QQ.visited && !QQ.current)),
        noLandmarks: qQ && !QQ.insideDungeon && 0 === FQ.length,
        background: TQ ? {
          imageKey: TQ.imageKey,
          fallbackImageKey: QQ.zoneId,
          geometryKey: BQ,
          label: XQ(TQ.labelKey),
          colour: TQ.backgroundColour,
          ratio: jQ
        } : null,
        connections: PQ(QQ.zones),
        minimap: TQ ? {
          imageKey: TQ.imageKey,
          fallbackImageKey: QQ.zoneId,
          geometryKey: BQ,
          label: XQ(TQ.labelKey),
          colour: TQ.backgroundColour,
          caption: XQ(QQ.zoneId === wQ ? "skyblockGame:zoneIsland" : TQ.labelKey),
          width: (TQ.bounds.mapMaxX - TQ.bounds.mapMinX) / TQ.minimapSpan * 100 + "%",
          height: (TQ.bounds.mapMaxZ - TQ.bounds.mapMinZ) / TQ.minimapSpan * 100 + "%",
          markers: [...FQ, ...JQ]
        } : null
      }
    }

    function PQ(QQ) {
      const WQ = new Set;
      return QQ.flatMap((XQ => XQ.connections.flatMap((wQ => {
        const qQ = QQ.find((QQ => QQ.id === wQ)),
          TQ = [XQ.id, wQ].sort().join("|");
        return !qQ || WQ.has(TQ) ? [] : (WQ.add(TQ), [{
          id: `${XQ.id}-${wQ}`,
          start: XQ.position,
          end: qQ.position,
          explored: XQ.visited && qQ.visited
        }])
      }))))
    }
    var gQ = XQ(38813);
    class JQ extends gQ.e {}
    const rQ = "skyblockMapView";
    class IQ extends JQ {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(QQ, wQ, qQ), this.requestTravel = WQ, this.translate = XQ, this.now = TQ, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = QQ => {
          this.tab = QQ, this.feedbackKey = "", this.emit()
        }, this.travel = (QQ, WQ) => {
          if (!this.map || this.pending || this.zj) return;
          const XQ = ("zone" === QQ ? this.map.zones : this.map.landmarks).find((QQ => QQ.id === WQ));
          if (XQ) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in XQ && !XQ.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (XQ.visited)
              if ("zone" === QQ && WQ === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const XQ = ++this.nextRequestId;
                this.pending = {
                  requestId: XQ,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: QQ,
                  id: WQ,
                  requestId: XQ
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
      setTranslator(QQ) {
        this.translate = QQ, this.emit()
      }
      gj(QQ) {
        var WQ;
        if (!this.zj)
          if ("entities" !== QQ.kind)
            if ("open" !== QQ.kind) {
              var XQ, wQ;
              if ("snapshot" === QQ.kind)(null === (XQ = QQ.snapshot) || void 0 === XQ ? void 0 : XQ.zoneId) !== (null === (wQ = this.map) || void 0 === wQ ? void 0 : wQ.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = QQ.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === QQ.kind) {
                var qQ;
                QQ.requestId === (null === (qQ = this.pending) || void 0 === qQ ? void 0 : qQ.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (QQ.requestId === (null === (WQ = this.pending) || void 0 === WQ ? void 0 : WQ.requestId)) {
                var TQ;
                this.pending = null, this.feedbackKey = null !== (TQ = QQ.errorKey) && void 0 !== TQ ? TQ : "", null === QQ.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = QQ.entities
      }
      fJ() {
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
          presentation: this.map ? FQ(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const jQ = 67.5 * Math.PI / 180;

    function BQ(QQ, WQ) {
      const XQ = Math.abs(QQ);
      if (XQ > jQ || WQ.trackHalfWidth <= 0) return null;
      const wQ = WQ.trackHalfWidth,
        qQ = WQ.screenHalfWidth / (WQ.tanHalfFovX * Math.max(.5, Math.cos(WQ.pitch))),
        TQ = Math.min(Math.atan(.6 * wQ / qQ), .75 * jQ),
        zQ = qQ * Math.tan(TQ);
      let sQ;
      if (XQ <= TQ) sQ = qQ * Math.tan(XQ);
      else {
        const QQ = jQ - TQ,
          WQ = Math.max(0, qQ * QQ / (Math.cos(TQ) ** 2 * (wQ - zQ)) - 1),
          FQ = (XQ - TQ) / QQ;
        sQ = zQ + (wQ - zQ) * (1 + WQ) * FQ / (1 + WQ * FQ)
      }
      return 50 + Math.sign(QQ) * sQ * 50 / wQ
    }
    class yQ {
      constructor(QQ, WQ) {
        this.map = QQ, this.visited = WQ, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = WQ ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const QQ = this.map.getSnapshot().map;
        return !QQ || QQ.insideDungeon ? [] : QQ.landmarks.filter((QQ => QQ.visited === this.visited)).map((QQ => {
          var WQ, XQ;
          return {
            id: `landmark:${QQ.id}`,
            position: QQ.position,
            icon: null !== (WQ = QQ.icon) && void 0 !== WQ ? WQ : "unknown",
            nameKey: null !== (XQ = QQ.nameKey) && void 0 !== XQ ? XQ : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class VQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.map = QQ, this.kind = WQ, this.position = XQ, this.alive = wQ, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = WQ, this.range = "enemy" === WQ ? 48 : 64, this.limit = 12
      }
      xV(QQ) {
        if ("enemy" !== this.kind || this.alive(QQ.uw)) return this.position(QQ.uw)
      }
      getPoints() {
        const QQ = [];
        for (const wQ of this.map.getEntities()) {
          if (wQ.kind !== this.kind || "enemy" === this.kind && !this.alive(wQ.compassEntityId)) continue;
          const qQ = this.position(wQ.compassEntityId);
          var WQ, XQ;
          if (qQ) QQ.push({
            id: `${this.kind}:${wQ.compassEntityId}`,
            uw: wQ.compassEntityId,
            kind: this.kind,
            icon: null !== (WQ = wQ.icon) && void 0 !== WQ ? WQ : wQ.npcSkin ? `npc_${wQ.npcSkin}` : this.kind,
            displayName: wQ.displayName,
            position: qQ,
            nameKey: null !== (XQ = wQ.nameKey) && void 0 !== XQ ? XQ : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return QQ
      }
    }
    class DQ {
      constructor(QQ) {
        this.map = QQ, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const QQ = this.map.getSnapshot().map;
        return !QQ || QQ.insideDungeon ? [] : QQ.portals.map((QQ => {
          var WQ;
          return {
            id: "portal:" + QQ.id,
            kind: "portal",
            position: QQ.position,
            nameKey: null !== (WQ = QQ.nameKey) && void 0 !== WQ ? WQ : "skyblockGame:compassUnvisitedZone",
            icon: QQ.visited ? "dungeons" === QQ.destination ? "portal_orange" : "portal" : "unknown",
            colour: QQ.colour
          }
        }))
      }
    }
    class pQ {
      constructor(QQ) {
        this.target = QQ, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const QQ = this.target();
        return QQ ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: QQ.position,
          nameKey: QQ.nameKey
        }] : []
      }
    }

    function GQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.position;
      const TQ = wQ[0] - WQ[0],
        zQ = wQ[2] - WQ[2];
      return {
        ...QQ,
        position: wQ,
        offset: qQ.b.computeShortestRotation(XQ, (0, qQ.ub)([TQ, 0, zQ])),
        distance: Math.hypot(TQ, wQ[1] - WQ[1], zQ)
      }
    }
    let UQ;

    function bQ(QQ, WQ) {
      var XQ;
      return (null === (XQ = UQ) || void 0 === XQ ? void 0 : XQ.locale) !== WQ && (UQ = {
        locale: WQ,
        near: new Intl.NumberFormat(WQ, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(WQ, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (QQ < 10 ? UQ.near : UQ.far).format(QQ)
    }
    class vQ {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(QQ) {
        return this.providers.set(QQ.id, QQ), this.refreshAt = 0, () => {
          this.providers.get(QQ.id) === QQ && (this.providers.delete(QQ.id), this.refreshAt = 0)
        }
      }
      frame(QQ, WQ, XQ) {
        if (XQ >= this.refreshAt) {
          this.refreshAt = XQ + 200, this.candidates = [];
          for (const WQ of this.providers.values()) {
            if (!WQ.enabled) continue;
            const XQ = WQ.getPoints().map((WQ => {
              const XQ = WQ.position;
              return {
                point: WQ,
                distance: Math.hypot(XQ[0] - QQ[0], XQ[1] - QQ[1], XQ[2] - QQ[2])
              }
            })).filter((QQ => QQ.distance <= WQ.range)).sort(((QQ, WQ) => QQ.distance - WQ.distance)).slice(0, WQ.limit);
            for (const {
                point: QQ
              }
              of XQ) this.candidates.push({
              provider: WQ,
              point: QQ
            })
          }
        }
        const wQ = [];
        for (const {
            point: qQ,
            provider: TQ
          }
          of this.candidates) {
          if (!TQ.enabled) continue;
          const XQ = TQ.xV ? TQ.xV(qQ) : qQ.position;
          if (XQ) {
            const TQ = GQ(qQ, QQ, WQ, XQ);
            Math.abs(TQ.offset) <= jQ && wQ.push(TQ)
          }
        }
        return wQ
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var dQ = XQ(36906),
      HQ = XQ(61);
    const aQ = [{
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
      lQ = aQ.length;

    function hQ(QQ) {
      return QQ >= lQ ? 1 : QQ + 1
    }
    const iQ = "skyblockQuests",
      cQ = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      AQ = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function RQ(QQ) {
      let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const XQ = Math.max(0, Math.floor(QQ)),
        wQ = Math.floor(XQ % 1e3 / 100),
        qQ = Math.floor(XQ / 1e3),
        TQ = qQ % 60,
        zQ = Math.floor(qQ / 60),
        sQ = zQ % 60,
        FQ = Math.floor(zQ / 60),
        PQ = QQ => QQ < 10 ? `0${QQ}` : String(QQ),
        gQ = WQ ? `.${wQ}` : "";
      return FQ > 0 ? `${FQ}:${PQ(sQ)}:${PQ(TQ)}${gQ}` : `${sQ}:${PQ(TQ)}${gQ}`
    }
    const EQ = "devquests",
      CQ = "none",
      uQ = {
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
      LQ = "Compressed Messy Stone",
      kQ = {
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
      fQ = ["Stone", "Diorite", "Andesite", "Granite"],
      SQ = new Set(fQ),
      tQ = (Object.keys(kQ), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const oQ = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function eQ(QQ, WQ) {
      const XQ = Math.floor(5 * QQ / (2 * WQ + 1));
      return Math.min(4, Math.max(0, XQ))
    }
    var nQ = XQ(1273);
    var xQ = XQ(36661);
    var YQ = XQ(36900),
      NQ = XQ(31),
      ZQ = XQ(9246);
    const OQ = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      KQ = 1e3;

    function mQ(QQ) {
      return Math.max(0, QQ)
    }

    function MQ(QQ) {
      return 1 + .01 * mQ(QQ)
    }

    function QW(QQ) {
      return 1 + .005 * mQ(QQ)
    }

    function WW(QQ) {
      return 1 + .005 * mQ(QQ)
    }

    function XW(QQ) {
      return .01 * mQ(QQ)
    }

    function wW(QQ) {
      return 150 / (150 + mQ(QQ))
    }

    function qW(QQ) {
      return 1 + .002 * mQ(QQ)
    }

    function TW(QQ) {
      return Math.round(10 * QQ) / 10
    }

    function zW(QQ, WQ) {
      switch (QQ) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: TW(100 * (QW(WQ) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: TW(100 * (MQ(WQ) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: TW(100 * (WW(WQ) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: TW(100 * XW(WQ))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: TW(100 * (1 - wW(WQ)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: TW(100 * (qW(WQ) - 1))
          }
      }
    }

    function sW(QQ) {
      return "farming" === QQ ? 200 : 100
    }

    function FW(QQ, WQ) {
      if (!Number.isSafeInteger(QQ) || QQ < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const XQ = sW(WQ),
        wQ = QQ => function(QQ, WQ) {
          return sW(QQ) * WQ * (WQ + 1) / 2
        }(WQ, QQ);
      let qQ = Math.min(KQ, Math.floor((Math.sqrt(8 * QQ / XQ + 1) - 1) / 2));
      return qQ < KQ && wQ(qQ + 1) <= QQ ? qQ++ : wQ(qQ) > QQ && qQ--, {
        totalXp: QQ,
        level: qQ,
        xpIntoLevel: QQ - wQ(qQ),
        xpForNextLevel: qQ === KQ ? null : XQ * (qQ + 1)
      }
    }
    const PW = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function gW(QQ) {
      return PW.has(QQ)
    }
    const JW = new Set(qQ.lb);

    function rW(QQ) {
      return JW.has(QQ)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const IW = {
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
      jW = {
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
      BW = {
        ...jW,
        ...Object.fromEntries(Object.entries(tQ).map((QQ => {
          let [WQ, XQ] = QQ;
          return [WQ, 9 * jW[XQ]]
        })))
      },
      yW = {
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
      VW = {
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
    const DW = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      pW = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function GW(QQ) {
      return `rgb(${pW[QQ].join(", ")})`
    }

    function UW(QQ, WQ, XQ) {
      if (!XQ) return QQ(WQ);
      const wQ = {};
      for (const [qQ, TQ] of Object.entries(XQ)) wQ[qQ] = "string" === typeof TQ ? TQ : QQ(TQ.translationKey);
      return QQ(WQ, wQ)
    }
    class bW {
      constructor(QQ, WQ) {
        this.now = QQ, this.getJournal = WQ, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Ds = !1, this.onShown = () => {}
      }
      enqueue(QQ) {
        const WQ = vW(QQ);
        if (WQ) this.pending.push(QQ);
        else {
          const WQ = this.pending.findIndex(vW);
          this.pending.splice(-1 === WQ ? this.pending.length : WQ, 0, QQ)
        }
        return (null === this.current || null !== this.followUp && !WQ) && (this.advance(), !0)
      }
      setHeld(QQ) {
        return this.Ds = QQ, !QQ && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      fJ() {
        const QQ = this.getJournal(),
          WQ = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === WQ ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === WQ || void 0 === WQ ? void 0 : WQ.kind) && QQ && QQ.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === WQ || void 0 === WQ ? void 0 : WQ.kind)) {
          const QQ = this.findFollowUp(this.current);
          if ("step" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || QQ.questId !== WQ.questId || QQ.step.id !== WQ.step.id) return this.showFollowUp(QQ, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(QQ, WQ, XQ) {
        var wQ, qQ, TQ, zQ;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, QQ, XQ);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, QQ);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, QQ, WQ);
        const {
          questCompletionKind: sQ,
          questCompletionNameKey: FQ
        } = this.current, PQ = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, gQ = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, JQ = "step" === (null === (wQ = this.followUp) || void 0 === wQ ? void 0 : wQ.kind) ? this.followUp : null, rQ = "explore" === (null === (qQ = this.followUp) || void 0 === qQ ? void 0 : qQ.kind);
        let IQ;
        return IQ = rQ ? QQ("skyblockGame:questExploreTitle") : null !== JQ ? "quest" === sQ ? QQ("skyblockGame:questNextQuestTitle", {
          quest: QQ(JQ.questNameKey)
        }) : QQ("skyblockGame:questNextStepTitle") : QQ("started" === sQ ? "skyblockGame:questStartedTitle" : "quest" === sQ ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? sQ : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: IQ,
          name: rQ ? WQ("skyblockGame:questExploreName") : null !== JQ ? UW(WQ, JQ.step.nameKey, JQ.step.nameParams) : UW(WQ, FQ, PQ),
          description: rQ ? WQ("skyblockGame:questExploreDescription") : null === JQ ? null : UW(WQ, JQ.step.descriptionKey, JQ.step.descriptionParams),
          reward: null === this.followUp && gQ > 0 ? WQ("skyblockGame:questCoinRewardSuffix", {
            amount: gQ.toLocaleString(XQ)
          }) : null,
          iconItem: null !== (TQ = null === JQ || void 0 === JQ ? void 0 : JQ.step.questIconItem) && void 0 !== TQ ? TQ : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== JQ && (null === (zQ = this.getJournal()) || void 0 === zQ ? void 0 : zQ.trackedQuestId) === JQ.questId ? JQ.step.nameKey : null
        }
      }
      getSkillLevelView(QQ, WQ, XQ) {
        let {
          skill: wQ,
          beforeLevel: qQ,
          level: TQ
        } = QQ;
        const zQ = zW(wQ, qQ),
          sQ = zW(wQ, TQ);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: WQ(`skyblockGame:${wQ}`),
          name: WQ("skyblockGame:skillLevelUp", {
            to: TQ.toLocaleString(XQ)
          }),
          description: zQ.percent === sQ.percent ? null : WQ(`${sQ.translationKey}Change`, {
            before: zQ.percent.toLocaleString(XQ),
            after: sQ.percent.toLocaleString(XQ)
          }),
          reward: null,
          iconItem: DW[wQ],
          accent: GW(wQ),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(QQ, WQ) {
        let {
          landmarkNameKey: XQ
        } = QQ;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: WQ("skyblockGame:landmarkDiscovered"),
          name: WQ(XQ),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(QQ, WQ, XQ) {
        let {
          titleKey: wQ,
          textKey: qQ,
          params: TQ = {},
          nameKeys: zQ = {},
          iconItem: sQ = null
        } = QQ;
        const FQ = {
          ...TQ
        };
        for (const [PQ, gQ] of Object.entries(zQ)) FQ[PQ] = WQ(gQ);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: WQ(wQ),
          name: XQ(qQ, FQ),
          description: null,
          reward: null,
          iconItem: sQ,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var QQ;
        if (null !== this.followUp) return 5600;
        switch (null === (QQ = this.current) || void 0 === QQ ? void 0 : QQ.questCompletionKind) {
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
      showFollowUp(QQ, WQ) {
        null === QQ || this.Ds ? this.advance() : (this.followUp = QQ, this.token++, this.shownAt = this.now(), this.expiresAt = null !== WQ && void 0 !== WQ ? WQ : this.shownAt + this.durationMs())
      }
      findFollowUp(QQ) {
        var WQ;
        const XQ = this.getJournal();
        if (!XQ || this.hasPendingQuestPopup() || vW(QQ)) return null;
        const wQ = "started" === QQ.questCompletionKind ? XQ.active.some((WQ => WQ.id === QQ.questCompletionQuestId)) : "quest" === QQ.questCompletionKind ? XQ.completed.some((WQ => WQ.id === QQ.questCompletionQuestId)) : [...XQ.active, ...XQ.completed].some((WQ => WQ.id === QQ.questCompletionQuestId && WQ.subquests.some((WQ => WQ.id === QQ.questCompletionStepId && "completed" === WQ.status))));
        if (!wQ) return null;
        if ("quest" === QQ.questCompletionKind && 0 === XQ.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const qQ = XQ.active.find((QQ => QQ.id === XQ.trackedQuestId)),
          TQ = null !== (WQ = null === qQ || void 0 === qQ ? void 0 : qQ.subquests.find((QQ => "ready" === QQ.status))) && void 0 !== WQ ? WQ : null === qQ || void 0 === qQ ? void 0 : qQ.subquests.find((QQ => "active" === QQ.status));
        return TQ ? {
          kind: "step",
          questId: qQ.id,
          questNameKey: qQ.nameKey,
          step: TQ
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((QQ => !vW(QQ)))
      }
      advance() {
        var QQ;
        this.current = this.Ds ? null : null !== (QQ = this.pending.shift()) && void 0 !== QQ ? QQ : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function vW(QQ) {
      return dW(QQ.questCompletionKind)
    }

    function dW(QQ) {
      return "skillLevel" === QQ || "landmark" === QQ || "npcNote" === QQ
    }
    var HW = XQ(38816);
    const aW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      lW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      hW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      iW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      cW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var AW = XQ(38821);
    var RW = XQ(38825);
    const EW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      CW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const uW = XQ.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const LW = XQ.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      kW = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var fW = XQ(18922),
      SW = XQ(21024),
      tW = XQ(23343),
      oW = XQ(24890),
      eW = XQ(26595);
    const nW = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: fW,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: SW,
      cow: cW,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: XQ(26609),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: aW,
      fishing_1: aW,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: lW,
      guardian_iron: hW,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: tW,
      mines: oW,
      mining_1: oW,
      npc: iW,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: cW,
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
      npc_gold_guardian: lW,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: hW,
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
      npc_portal_mage: AW,
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: RW,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: EW,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: uW,
      quest_talk: LW,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: kW,
      watermelon: eW
    };

    function xW(QQ, WQ) {
      const XQ = document.createElement("img");
      return XQ.className = WQ, XQ.src = QQ, XQ.alt = "", XQ.draggable = !1, XQ
    }

    function YW(QQ) {
      var WQ;
      const XQ = null !== (WQ = nW[QQ]) && void 0 !== WQ ? WQ : QQ.startsWith("npc_") ? iW : kW;
      if ("portal" !== QQ) return xW(XQ, "SkyblockMapIcon");
      const wQ = document.createElement("span");
      wQ.className = "SkyblockMapIcon Portal";
      const qQ = document.createElement("span");
      return qQ.className = "SkyblockMapIconTint", qQ.style.maskImage = qQ.style.webkitMaskImage = `url("${CW}")`, wQ.append(xW(XQ, "SkyblockMapIconLayer"), qQ, xW(CW, "SkyblockMapIconLayer SkyblockMapIconShade")), wQ
    }
    var NW = XQ(38797),
      ZW = XQ(4545);
    const OW = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function KW(QQ) {
      const WQ = new ZW.e(QQ);
      return {
        radius: 45,
        squareness: 3,
        wobbles: OW.map((QQ => {
          let {
            lobes: XQ,
            amount: wQ
          } = QQ;
          return {
            lobes: XQ[Math.floor(WQ.next() * XQ.length)],
            amount: wQ[0] + WQ.next() * (wQ[1] - wQ[0]),
            phase: 2 * WQ.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function mW(QQ) {
      let {
        radius: WQ,
        squareness: XQ,
        wobbles: wQ,
        samples: qQ
      } = QQ;
      const TQ = [];
      for (let zQ = 0; zQ < qQ; zQ++) {
        const QQ = 2 * Math.PI * zQ / qQ,
          sQ = Math.cos(QQ),
          FQ = Math.sin(QQ),
          PQ = WQ * (Math.abs(sQ) ** XQ + Math.abs(FQ) ** XQ) ** (-1 / XQ) * wQ.reduce(((WQ, XQ) => {
            let {
              lobes: wQ,
              amount: qQ,
              phase: TQ
            } = XQ;
            return WQ + qQ * Math.sin(wQ * QQ + TQ)
          }), 1);
        TQ.push(`${(50+PQ*sQ).toFixed(2)} ${(50+PQ*FQ).toFixed(2)}`)
      }
      return `M${TQ.join("L")}Z`
    }
    const MW = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class QX {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.zj = !1, this.mountCompass = QQ => {
          var WQ;
          if (null === (WQ = this.stopLayout) || void 0 === WQ || WQ.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !QQ || this.zj) return;
          const XQ = QQ.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: QQ,
            track: XQ,
            label: QQ.querySelector(".SkyblockCompassLabel")
          }, XQ.replaceChildren();
          for (let qQ = 0; qQ < 4; qQ++) {
            const QQ = document.createElement("span");
            QQ.className = "SkyblockCompassCardinal", XQ.appendChild(QQ), this.cardinals.push(QQ)
          }
          const wQ = (0, NW.c)(MW, [QQ], this.layout);
          this.stopLayout = () => {
            wQ(), XQ.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = QQ => {
          this.terrain = this.zj ? null : QQ, this.render(this.frame)
        }, this.mountMinimapSearchArea = QQ => {
          this.mountSearchArea("minimap", QQ)
        }, this.mountMapSearchArea = QQ => {
          this.mountSearchArea("map", QQ)
        }, this.mountPlayer = QQ => {
          this.player = this.zj ? null : QQ, this.render(this.frame)
        }, this.mountWaypoint = QQ => {
          var WQ, XQ;
          if (null === (WQ = this.stopWaypoint) || void 0 === WQ || WQ.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !QQ || this.zj) return;
          const wQ = QQ.querySelector(".SkyblockQuestWaypointMarker");
          wQ.replaceChildren(YW("quest")), this.markerIcon = "quest", this.waypoint = {
            root: QQ,
            marker: wQ,
            clip: QQ.querySelector(".SkyblockQuestWaypointTextClip"),
            text: QQ.querySelector(".SkyblockQuestWaypointText"),
            label: QQ.querySelector(".SkyblockQuestWaypointLabel"),
            distance: QQ.querySelector(".SkyblockQuestWaypointDistance"),
            hint: QQ.querySelector(".SkyblockQuestWaypointHint")
          };
          const qQ = () => {
              this.waypointMarkerSize = {
                width: wQ.offsetWidth,
                height: wQ.offsetHeight
              }, this.waypointInset = {
                x: wQ.offsetWidth / 2 + 8,
                top: wQ.offsetHeight + 8,
                bottom: 8
              }
            },
            TQ = new ResizeObserver((() => {
              qQ(), this.render(this.frame)
            }));
          TQ.observe(wQ, {
            box: "border-box"
          });
          const zQ = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", zQ), null === (XQ = window.visualViewport) || void 0 === XQ || XQ.addEventListener("resize", zQ), this.stopWaypoint = () => {
            var QQ;
            TQ.disconnect(), window.removeEventListener("resize", zQ), null === (QQ = window.visualViewport) || void 0 === QQ || QQ.removeEventListener("resize", zQ)
          }, zQ(), qQ(), this.render(this.frame)
        }, this.mountWaypointOrigin = QQ => {
          var WQ;
          if (null === (WQ = this.stopWaypointOrigin) || void 0 === WQ || WQ.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = QQ && !this.zj ? Number(QQ.dataset.notificationToken) : null, QQ && !this.zj && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const WQ = {
              nameKey: QQ.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = WQ;
            const XQ = () => {
                const XQ = QQ.getBoundingClientRect();
                WQ.x = (XQ.left + XQ.width / 2) / window.innerWidth * 100, WQ.y = (XQ.top + XQ.height / 2) / window.innerHeight * 100
              },
              wQ = new ResizeObserver(XQ);
            wQ.observe(QQ.parentElement), wQ.observe(QQ), window.addEventListener("resize", XQ), this.stopWaypointOrigin = () => {
              wQ.disconnect(), window.removeEventListener("resize", XQ)
            }, XQ()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const QQ = this.compass.root,
            WQ = getComputedStyle(QQ),
            XQ = getComputedStyle(document.documentElement),
            wQ = parseFloat(XQ.fontSize),
            qQ = parseFloat(WQ.getPropertyValue("--compass-icon-size")) * wQ,
            TQ = "1" === WQ.getPropertyValue("--compass-fit-top").trim(),
            zQ = TQ ? 1 : 8,
            sQ = Array.from(document.querySelectorAll(MW), (QQ => {
              var WQ;
              return (null !== (WQ = QQ.querySelector(".MiddleTextTop")) && void 0 !== WQ ? WQ : QQ).getBoundingClientRect()
            })).filter((QQ => QQ.width > 0 && QQ.height > 0));
          let FQ = (parseFloat(XQ.getPropertyValue("--notchTop")) || 0) + zQ,
            PQ = "";
          if (TQ) {
            const WQ = window.innerWidth / 2,
              XQ = QQ.getBoundingClientRect().height,
              TQ = [FQ, ...sQ.map((QQ => Math.max(FQ, QQ.bottom + zQ)))].sort(((QQ, WQ) => QQ - WQ));
            for (const QQ of TQ) {
              let TQ = WQ - 8;
              for (const wQ of sQ) wQ.bottom + zQ <= QQ || wQ.top >= QQ + XQ + zQ || (TQ = Math.min(TQ, wQ.right <= WQ ? WQ - wQ.right - 8 : wQ.left - WQ - 8));
              const gQ = 2 * TQ - qQ;
              if (gQ >= 16 * wQ) {
                PQ = `${gQ}px`, FQ = QQ;
                break
              }
            }
          }
          QQ.style.maxWidth !== PQ && (QQ.style.maxWidth = PQ);
          const gQ = QQ.getBoundingClientRect(),
            JQ = this.compassSize.trackHalfWidth;
          if (gQ.width > 0) {
            const QQ = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: QQ.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * qQ / QQ.width
          }
          if (!PQ)
            for (const rQ of sQ) rQ.right > gQ.left - 8 && rQ.left < gQ.right + 8 && (FQ = Math.max(FQ, rQ.bottom + zQ));
          QQ.style.top = `${FQ}px`, this.compassSize.trackHalfWidth !== JQ && this.render(this.frame)
        }
      }
      mountSearchArea(QQ, WQ) {
        this.searchAreas[QQ] = this.zj ? null : WQ, this.render(this.frame)
      }
      render(QQ) {
        if (this.zj) return;
        if (this.frame = QQ, this.compass && (WX(this.compass.root, !QQ), QQ)) {
          const WQ = this.compassSize.trackHalfWidth / 50;
          QQ.compass.cardinals.forEach(((QQ, XQ) => {
            const wQ = this.cardinals[XQ];
            wQ.textContent !== QQ.name && (wQ.textContent = QQ.name), WX(wQ, QQ.hidden), wQ.style.translate = QQ.left * WQ + "px"
          }));
          const XQ = new Set;
          QQ.compass.markers.forEach(((wQ, qQ) => {
            var TQ;
            XQ.add(wQ.id);
            let zQ = this.markers.get(wQ.id);
            zQ || (zQ = document.createElement("span"), zQ.className = "SkyblockCompassMarker", this.markers.set(wQ.id, zQ), this.compass.track.appendChild(zQ)), zQ.dataset.icon !== wQ.icon && (zQ.dataset.icon = wQ.icon, zQ.replaceChildren(YW(wQ.icon))), zQ.style.color = null !== (TQ = wQ.colour) && void 0 !== TQ ? TQ : "", zQ.style.translate = wQ.left * WQ + "px", zQ.style.zIndex = String(QQ.compass.markers.length - qQ), zQ.title !== wQ.name && (zQ.title = wQ.name)
          }));
          for (const [QQ, wQ] of this.markers) XQ.has(QQ) || (wQ.remove(), this.markers.delete(QQ));
          this.compass.label.textContent !== QQ.compass.label && (this.compass.label.textContent = QQ.compass.label)
        }
        this.terrain && (WX(this.terrain, !(null !== QQ && void 0 !== QQ && QQ.minimap)), null !== QQ && void 0 !== QQ && QQ.minimap && (this.terrain.style.transform = QQ.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", QQ.minimap.iconRotation)));
        const WQ = null === QQ || void 0 === QQ ? void 0 : QQ.searchArea;
        for (const XQ of [this.searchAreas.minimap, this.searchAreas.map])
          if (XQ && (WX(XQ, !WQ), WQ)) {
            if (this.searchAreaPath.seed !== WQ.shapeSeed && (this.searchAreaPath = {
                seed: WQ.shapeSeed,
                d: mW(KW(WQ.shapeSeed))
              }), XQ.dataset.shapeSeed !== WQ.shapeSeed) {
              XQ.dataset.shapeSeed = WQ.shapeSeed;
              for (const QQ of XQ.querySelectorAll("path")) QQ.setAttribute("d", this.searchAreaPath.d)
            }
            XQ.style.left = `${WQ.left}%`, XQ.style.top = `${WQ.top}%`, XQ.style.width = `${WQ.width}%`, XQ.style.height = `${WQ.height}%`
          } if (this.player && (WX(this.player, !(null !== QQ && void 0 !== QQ && QQ.player) || QQ.player.hidden), null !== QQ && void 0 !== QQ && QQ.player && (this.player.style.left = `${QQ.player.left}%`, this.player.style.top = `${QQ.player.top}%`, this.player.style.setProperty("--map-player-rotation", QQ.player.rotation))), this.waypoint) {
          const {
            root: WQ,
            marker: XQ,
            clip: wQ,
            text: qQ,
            label: TQ,
            distance: zQ,
            hint: sQ
          } = this.waypoint, FQ = !(null !== QQ && void 0 !== QQ && QQ.waypoint) || null !== QQ.waypoint.popupToken && QQ.waypoint.popupToken !== this.waypointOriginToken;
          WX(WQ, FQ);
          let PQ = 1;
          const gQ = this.waypointLaunch;
          if (!FQ && gQ && QQ.waypoint.nameKey === gQ.nameKey) {
            const QQ = performance.now();
            gQ.startedAt ??= QQ, PQ = Math.min(1, Math.max(0, (QQ - gQ.startedAt - 450) / 1e3)), XQ.style.opacity = String(Math.min(1, (QQ - gQ.startedAt) / 150)), 1 === PQ && (this.waypointLaunch = null)
          } else XQ.style.opacity = "", gQ && null !== gQ.startedAt && (this.waypointLaunch = null);
          if (WQ.classList.toggle("Launching", PQ < 1), null !== QQ && void 0 !== QQ && QQ.waypoint) {
            const WQ = this.waypointInset,
              FQ = "quest_talk" === QQ.waypoint.markerIcon ? function(QQ, WQ, XQ) {
                if (!QQ.text || null === QQ.blockHeight || 0 === QQ.nearness) return QQ;
                const wQ = QQ.blockHeight / 100 * XQ.height,
                  qQ = -QQ.nearness * (XX * wQ + WQ.width / 2),
                  TQ = QQ.nearness * (wX * wQ + WQ.height / 2);
                return {
                  ...QQ,
                  text: {
                    x: QQ.text.x + qQ / XQ.width * 100,
                    y: QQ.text.y + TQ / XQ.height * 100
                  }
                }
              }(QQ.waypoint, this.waypointMarkerSize, this.viewport) : QQ.waypoint,
              JQ = (0, HW.c)(FQ, WQ, this.viewport),
              rQ = PQ * PQ * (3 - 2 * PQ),
              IQ = PQ < 1 ? gQ.x + (JQ.x - gQ.x) * rQ : JQ.x,
              jQ = PQ < 1 ? gQ.y + (JQ.y - gQ.y) * rQ : JQ.y;
            XQ.style.translate = `${IQ}vw ${jQ}vh`, wQ.style.clipPath = `inset(${WQ.top}px ${WQ.x}px ${WQ.bottom}px)`, WX(qQ, PQ < 1 || !QQ.waypoint.text), qQ.style.opacity = String(1 - QQ.waypoint.nearness), QQ.waypoint.text && (qQ.style.translate = `${QQ.waypoint.text.x}vw ${QQ.waypoint.text.y}vh`), TQ.textContent !== QQ.waypoint.name && (TQ.textContent = QQ.waypoint.name), this.markerIcon !== QQ.waypoint.markerIcon && (this.markerIcon = QQ.waypoint.markerIcon, XQ.replaceChildren(YW(this.markerIcon))), zQ.textContent !== QQ.waypoint.distance && (zQ.textContent = QQ.waypoint.distance), WX(sQ, null === QQ.waypoint.hint), null !== QQ.waypoint.hint && sQ.textContent !== QQ.waypoint.hint && (sQ.textContent = QQ.waypoint.hint)
          }
        }
      }
      dispose() {
        var QQ, WQ;
        this.mountWaypointOrigin(null), this.render(null), null === (QQ = this.stopLayout) || void 0 === QQ || QQ.call(this), this.stopLayout = null, null === (WQ = this.stopWaypoint) || void 0 === WQ || WQ.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.zj = !0
      }
    }

    function WX(QQ, WQ) {
      QQ.hidden !== WQ && (QQ.hidden = WQ)
    }
    const XX = .55,
      wX = .6;
    const qX = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class TX {
      constructor(QQ, WQ, XQ, wQ) {
        this.map = QQ, this.quests = WQ, this.compass = XQ, this.display = new QX, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.zj = !1, this.snapshot = null, this.texts = new Map, this.translate = wQ
      }
      setTranslator(QQ, WQ) {
        this.translate = QQ, this.locale = WQ, this.metresFormat = new Intl.NumberFormat(WQ), this.texts.clear()
      }
      translateCached(QQ, WQ) {
        const XQ = void 0 === WQ ? QQ : `${QQ} ${WQ}`;
        let wQ = this.texts.get(XQ);
        return void 0 === wQ && (this.texts.size >= 500 && this.texts.clear(), wQ = this.translate(QQ, void 0 === WQ ? void 0 : {
          distance: WQ
        }), this.texts.set(XQ, wQ)), wQ
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(QQ, WQ, XQ) {
        if (this.zj) return;
        if (!QQ) return this.snapshot = null, void this.display.render(null);
        const wQ = this.map.getSnapshot().map,
          FQ = XQ.cameraHeading,
          PQ = {
            ...this.display.compassSize,
            tanHalfFovX: XQ.tanHalfFovX,
            pitch: XQ.cameraPitch
          },
          gQ = [];
        if (wQ)
          for (const qQ of this.compass.frame(QQ, FQ, WQ)) {
            const QQ = BQ(qQ.offset, PQ);
            null !== QQ && gQ.push({
              ...qQ,
              left: QQ
            })
          }
        const JQ = function(QQ, WQ) {
            const XQ = [],
              wQ = QQ => "quest" === QQ.kind ? QQ.distance - 1 : QQ.distance,
              qQ = [...QQ].sort(((QQ, WQ) => wQ(QQ) - wQ(WQ) || QQ.id.localeCompare(WQ.id)));
            for (const TQ of qQ) {
              let QQ = !1;
              if ("quest" !== TQ.kind)
                for (const wQ of XQ)
                  if (Math.abs(wQ.left - TQ.left) < WQ) {
                    QQ = !0;
                    break
                  } QQ || XQ.push(TQ)
            }
            return XQ
          }(gQ, this.display.compassSpacing),
          rQ = function(QQ) {
            let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              XQ = null;
            for (const wQ of QQ) Math.abs(wQ.offset) <= WQ && (!XQ || wQ.distance < XQ.distance || wQ.distance === XQ.distance && Math.abs(wQ.offset) < Math.abs(XQ.offset)) && (XQ = wQ);
            return XQ
          }(JQ),
          IQ = QQ => {
            var WQ;
            return null !== (WQ = QQ.displayName) && void 0 !== WQ ? WQ : this.translateCached(QQ.nameKey)
          },
          jQ = {
            compass: {
              markers: JQ.map((QQ => ({
                id: QQ.id,
                icon: QQ.icon,
                colour: QQ.colour,
                name: IQ(QQ),
                left: QQ.left
              }))),
              cardinals: zQ.map((QQ => {
                let {
                  name: WQ,
                  bearing: XQ
                } = QQ;
                const wQ = BQ(qQ.b.computeShortestRotation(FQ, XQ), PQ);
                return {
                  name: WQ,
                  left: null !== wQ && void 0 !== wQ ? wQ : 0,
                  hidden: null === wQ
                }
              })),
              label: rQ ? `${IQ(rQ)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",bQ(rQ.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== wQ && void 0 !== wQ && wQ.background) {
          const WQ = QQ[0] - wQ.mapOrigin[0],
            XQ = QQ[2] - wQ.mapOrigin[2],
            {
              rotation: qQ,
              transform: zQ
            } = function(QQ, WQ, XQ, wQ) {
              const [qQ, zQ] = sQ(QQ, WQ, wQ), FQ = TQ - XQ;
              return {
                rotation: FQ,
                transform: `rotate(${FQ}rad) translate(-${qQ}%, -${zQ}%)`
              }
            }(WQ, XQ, FQ, wQ.background.bounds);
          jQ.minimap = {
            transform: zQ,
            iconRotation: -qQ + "rad"
          };
          const [PQ, gQ] = sQ(WQ, XQ, wQ.background.bounds);
          jQ.player = {
            left: PQ,
            top: gQ,
            hidden: PQ < 0 || gQ < 0 || PQ > 100 || gQ > 100,
            rotation: -qQ + "rad"
          }
        }
        const {
          waypoint: yQ
        } = this.quests.getSnapshot();
        if ("search" === (null === yQ || void 0 === yQ ? void 0 : yQ.questMarkerIcon) && null !== wQ && void 0 !== wQ && wQ.background) {
          const {
            bounds: QQ
          } = wQ.background, [WQ, XQ] = sQ(yQ.position[0] - wQ.mapOrigin[0], yQ.position[2] - wQ.mapOrigin[2], QQ);
          jQ.searchArea = {
            left: WQ,
            top: XQ,
            width: 6400 / (QQ.mapMaxX - QQ.mapMinX),
            height: 6400 / (QQ.mapMaxZ - QQ.mapMinZ),
            shapeSeed: yQ.nameKey
          }
        }
        const VQ = this.quests.getNotificationSnapshot(),
          DQ = "completion" === (null === VQ || void 0 === VQ ? void 0 : VQ.phase) && !dW(VQ.kind);
        if (yQ && !DQ) {
          const WQ = Math.hypot(...yQ.position.map(((WQ, XQ) => WQ - QQ[XQ]))),
            wQ = Math.round(WQ),
            qQ = "talk" === yQ.questMarkerIcon ? Math.min(1, Math.max(0, (10 - WQ) / 5)) : 0,
            TQ = XQ.projectWorldPosToViewport(yQ.position),
            zQ = TQ && XQ.projectWorldPosToViewport([yQ.position[0], yQ.position[1] - 1, yQ.position[2]]);
          jQ.waypoint = {
            ...XQ.projectWorldPosToScreenPos(yQ.position),
            text: TQ,
            nearness: qQ * qQ * (3 - 2 * qQ),
            blockHeight: TQ && zQ ? zQ.y - TQ.y : null,
            name: this.translateCached(yQ.nameKey),
            nameKey: yQ.nameKey,
            markerIcon: yQ.questMarkerIcon ? qX[yQ.questMarkerIcon] : "quest",
            popupToken: (null === VQ || void 0 === VQ ? void 0 : VQ.waypointNameKey) === yQ.nameKey ? VQ.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(wQ)),
            hint: "search" === yQ.questMarkerIcon && Math.hypot(yQ.position[0] - QQ[0], yQ.position[2] - QQ[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = jQ, this.display.render(jQ)
      }
      dispose() {
        this.zj = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const zX = "skyblockSkillsView";
    class sX extends JQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          XQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ => QQ,
          wQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          qQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ => QQ;
        super(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = WQ, this.translate = XQ, this.locale = wQ, this.itemName = qQ, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = QQ => {
          this.selected = QQ, this.emit()
        }
      }
      setTranslator(QQ, WQ, XQ) {
        this.translate = QQ, this.locale = WQ, this.itemName = XQ, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(QQ) {
        let WQ = this.skillText.get(QQ);
        return WQ || (WQ = {
          label: this.translate(`skyblockGame:${QQ}`),
          description: this.translate(`skyblockGame:${QQ}Description`)
        }, this.skillText.set(QQ, WQ)), WQ
      }
      sources(QQ) {
        if ("mining" === QQ || "fishing" === QQ) return this.buildSources(QQ);
        let WQ = this.sourceText.get(QQ);
        return WQ || (WQ = this.buildSources(QQ), this.sourceText.set(QQ, WQ)), WQ
      }
      buildSources(QQ) {
        const WQ = this.translate;
        return "exploration" === QQ ? [WQ("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), WQ("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === QQ ? [WQ("skyblockGame:logSource", {
          xp: this.number(IW["Maple Log"])
        })] : "combat" === QQ ? [WQ("skyblockGame:creatureKillSource"), WQ("skyblockGame:noEnvironmentalXp")] : "farming" === QQ ? [WQ("skyblockGame:cropSource", {
          xp: this.number(yW["Wheat|FreshlyGrown"])
        }), WQ("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), WQ("skyblockGame:noYoungCropXp")] : Object.entries("mining" === QQ ? BW : VW).map((QQ => {
          let [XQ, wQ] = QQ;
          return WQ("skyblockGame:itemXpSource", {
            item: this.itemName(XQ),
            xp: this.number(wQ)
          })
        }))
      }
      number(QQ) {
        return QQ.toLocaleString(this.locale)
      }
      benefit(QQ, WQ) {
        const XQ = zW(QQ, WQ);
        return this.translate(XQ.translationKey, {
          bonus: this.number(XQ.percent)
        })
      }
      gj(QQ) {
        if (!this.zj) {
          if ("snapshot" === QQ.kind) this.progress = QQ.progress, this.pending.clear(), this.recent = null;
          else if ("award" === QQ.kind && this.progress) {
            const {
              award: WQ
            } = QQ;
            this.progress = {
              ...this.progress,
              [WQ.skill]: WQ.after
            };
            for (const [QQ, wQ] of this.pending) wQ.skill === WQ.skill && this.pending.delete(QQ);
            const XQ = WQ.after.level > WQ.before.level;
            this.recordGain(WQ.skill, WQ.amount, XQ ? ++this.nextLevelUpToken : null), XQ && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: WQ.skill,
              beforeLevel: WQ.before.level,
              level: WQ.after.level
            })
          } else {
            if ("rejectBlock" === QQ.kind) return void this.rejectBlock(QQ.position);
            if ("open" === QQ.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(QQ, WQ, XQ) {
        if (!this.progress || this.zj || XQ) return;
        const wQ = function(QQ, WQ) {
          const XQ = QQ.split("|")[0];
          return "Air" === WQ || WQ === `Barkless ${QQ}` ? Object.hasOwn(IW, XQ) ? {
            skill: "foraging",
            amount: IW[XQ]
          } : "Air" !== WQ ? null : Object.hasOwn(BW, QQ) ? {
            skill: "mining",
            amount: BW[QQ]
          } : gW(QQ) ? {
            skill: "farming",
            amount: 10
          } : rW(QQ) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(yW, QQ) ? {
            skill: "farming",
            amount: yW[QQ]
          } : Object.hasOwn(kQ, QQ) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(WQ, "Air");
        if (!wQ) return;
        const qQ = QQ.join(",");
        if (this.pending.has(qQ)) return;
        const TQ = this.predictedProgress(wQ.skill).totalXp + wQ.amount;
        Number.isSafeInteger(TQ) && (this.pending.set(qQ, {
          ...wQ,
          expires: this.now() + 2e3
        }), this.recordGain(wQ.skill, 0), this.emit())
      }
      rejectBlock(QQ) {
        this.pending.delete(QQ.join(",")) && this.emit()
      }
      fJ() {
        if (this.zj) return;
        let QQ = !1;
        for (const [WQ, XQ] of this.pending) XQ.expires <= this.now() && (this.pending.delete(WQ), QQ = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, QQ = !0), QQ && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(QQ, WQ) {
        var XQ, wQ;
        let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const TQ = (null === (XQ = this.recent) || void 0 === XQ ? void 0 : XQ.skill) === QQ && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          zQ = (null === (wQ = this.recent) || void 0 === wQ ? void 0 : wQ.skill) === QQ && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: QQ,
          confirmed: TQ + WQ,
          expires: this.now() + 3e3,
          levelUpToken: null !== qQ && void 0 !== qQ ? qQ : zQ
        }
      }
      pendingXp(QQ) {
        let WQ = 0;
        for (const XQ of this.pending.values()) XQ.skill === QQ && (WQ += XQ.amount);
        return WQ
      }
      predictedProgress(QQ) {
        const WQ = this.progress[QQ],
          XQ = this.pendingXp(QQ);
        return XQ ? FW(WQ.totalXp + XQ, QQ) : WQ
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var QQ, WQ, XQ;
        const wQ = this.progress ? OQ.map((QQ => {
            const WQ = this.predictedProgress(QQ);
            return {
              ...this.text(QQ),
              icon: DW[QQ],
              benefit: this.benefit(QQ, WQ.level),
              sources: this.sources(QQ),
              id: QQ,
              selected: QQ === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(WQ.level)
              }),
              xp: null === WQ.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(WQ.xpIntoLevel),
                target: this.number(WQ.xpForNextLevel)
              }),
              percent: null === WQ.xpForNextLevel ? 100 : Math.min(100, WQ.xpIntoLevel / WQ.xpForNextLevel * 100)
            }
          })) : [],
          qQ = wQ.find((QQ => {
            var WQ;
            return QQ.id === (null === (WQ = this.recent) || void 0 === WQ ? void 0 : WQ.skill)
          })),
          TQ = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: wQ,
          detail: null !== (QQ = wQ.find((QQ => QQ.selected))) && void 0 !== QQ ? QQ : null,
          overallLevel: this.progress ? OQ.reduce(((QQ, WQ) => QQ + this.predictedProgress(WQ).level), 0) : null,
          hud: qQ && TQ > 0 ? {
            skill: qQ,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(TQ)
            }),
            levelUpToken: null !== (WQ = null === (XQ = this.recent) || void 0 === XQ ? void 0 : XQ.levelUpToken) && void 0 !== WQ ? WQ : null,
            colour: GW(qQ.id)
          } : null
        }
      }
    }
    const FX = Math.max(1600, 600, 950) + 400,
      PX = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      gX = "skyblockQuestsView",
      JX = "skyblockQuestNotificationView";
    class rX extends JQ {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          zQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(QQ, wQ, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = WQ, this.translate = XQ, this.now = qQ, this.locale = TQ, this.publishNotification = zQ, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var QQ, WQ;
          this.selected = null !== (QQ = null === (WQ = this.authoritative) || void 0 === WQ ? void 0 : WQ.trackedQuestId) && void 0 !== QQ ? QQ : null, this.show()
        }, this.select = QQ => {
          this.selected = QQ, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const QQ = this.snapshot.detail;
          !this.zj && null !== QQ && void 0 !== QQ && QQ.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(QQ.id), this.emit())
        }, this.viewDialogue = () => {
          const QQ = this.snapshot.detail;
          var WQ;
          QQ && (null === (WQ = this.onViewDialogue) || void 0 === WQ || WQ.call(this, QQ.id))
        }, this.notifications = new bW(qQ, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.authoritative) || void 0 === WQ ? void 0 : WQ.trackedQuestId) && void 0 !== QQ ? QQ : null
      }
      notify(QQ) {
        !this.zj && this.notifications.enqueue(QQ) && this.emitNotification()
      }
      setNotificationsHeld(QQ) {
        (this.notifications.setHeld(QQ) || QQ) && this.emitNotification()
      }
      fJ() {
        var QQ, WQ;
        if (this.zj) return;
        this.notifications.fJ() && this.emitNotification();
        let XQ = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, XQ = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, XQ = !0);
        const wQ = IX(this.authoritative);
        null !== wQ && void 0 !== wQ && null !== (QQ = wQ.questClock) && void 0 !== QQ && QQ.running && this.clockText(wQ) !== (null === (WQ = this.snapshot.tracked) || void 0 === WQ ? void 0 : WQ.clock) && (XQ = !0), XQ && this.emit()
      }
      setTranslator(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = QQ, this.locale = WQ, this.emitNotification(), this.emit()
      }
      gj(QQ) {
        if (!this.zj)
          if ("completion" === QQ.kind) this.notify(QQ.questCompletion);
          else if ("landmark" === QQ.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: QQ.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === QQ.kind) {
          var WQ, XQ, wQ;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: QQ.npcNoteTitleKey,
            textKey: QQ.npcNoteTextKey,
            params: null !== (WQ = QQ.npcNoteParams) && void 0 !== WQ ? WQ : {},
            nameKeys: null !== (XQ = QQ.npcNoteNameKeys) && void 0 !== XQ ? XQ : {},
            iconItem: null !== (wQ = QQ.npcNoteIconItem) && void 0 !== wQ ? wQ : null
          })
        } else if ("open" === QQ.kind) this.show();
        else if ("guidance" === QQ.kind) this.waypoint = QQ.waypoint, this.compassTarget = QQ.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === QQ.kind) {
          this.authoritative = QQ.snapshot, this.notifications.fJ() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const WQ = this.trackedStepPulse;
          this.updateTrackedStepPulse(QQ.snapshot), this.emit(), this.trackedStepPulse > WQ && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.zj || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var QQ;
        return null !== (QQ = this.translateWithIcons) && void 0 !== QQ ? QQ : this.translate
      }
      clockText(QQ) {
        const WQ = QQ.questClock;
        if (!WQ) return null;
        const XQ = WQ.elapsedMs + (WQ.running ? this.now() - this.receivedAt : 0);
        return void 0 === WQ.countdownFromMs ? RQ(XQ, !1) : RQ(1e3 * Math.ceil(Math.max(0, WQ.countdownFromMs - XQ) / 1e3), !1)
      }
      updateTrackedStepPulse(QQ) {
        var WQ, XQ, wQ;
        const qQ = IX(QQ);
        if (!qQ) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const TQ = QQ => qQ.subquests.filter((WQ => QQ(WQ.status))).map((QQ => QQ.id)),
          zQ = TQ((QQ => "completed" === QQ || "skipped" === QQ)),
          sQ = TQ((QQ => "locked" !== QQ)),
          FQ = (null === (WQ = this.trackedSteps) || void 0 === WQ ? void 0 : WQ.questId) === qQ.id && qQ.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (FQ) {
          const QQ = zQ.filter((QQ => !FQ.finished.has(QQ))),
            WQ = TQ((QQ => "active" === QQ || "ready" === QQ)).filter((QQ => !FQ.unlocked.has(QQ)));
          QQ.length > 0 && this.trackedStepPulse++, (QQ.length > 0 || WQ.length > 0) && (this.trackedChange = {
            finished: new Set(QQ),
            unlocked: new Set(WQ),
            expiresAt: this.now() + FX
          })
        } else {
          var PQ;
          this.trackedStepPulse = (null === (PQ = this.trackedSteps) || void 0 === PQ ? void 0 : PQ.questId) === qQ.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: qQ.id,
          progress: qQ.progress,
          finished: new Set([...null !== (XQ = null === FQ || void 0 === FQ ? void 0 : FQ.finished) && void 0 !== XQ ? XQ : [], ...zQ]),
          unlocked: new Set([...null !== (wQ = null === FQ || void 0 === FQ ? void 0 : FQ.unlocked) && void 0 !== wQ ? wQ : [], ...sQ])
        }
      }
      entry(QQ, WQ) {
        var XQ, wQ;
        const qQ = QQ.id === (null === (XQ = this.authoritative) || void 0 === XQ ? void 0 : XQ.trackedQuestId),
          TQ = this.now() < this.trackAvailableAt,
          zQ = this.questTextTranslator(),
          sQ = QQ.subquests.map((WQ => {
            var XQ, wQ, TQ, sQ, FQ, PQ;
            const gQ = null !== (XQ = WQ.handInNpcName) && void 0 !== XQ ? XQ : QQ.giverName,
              JQ = this.translate("skyblockGame:progress", {
                current: WQ.progress.toLocaleString(this.locale),
                target: WQ.target.toLocaleString(this.locale)
              }),
              rQ = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: gQ ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [WQ.status],
              IQ = "active" === WQ.status || "ready" === WQ.status;
            return {
              id: WQ.id,
              name: UW(zQ, WQ.nameKey, WQ.nameParams),
              description: UW(zQ, WQ.descriptionKey, WQ.descriptionParams),
              progress: JQ,
              status: WQ.status,
              statusLabel: rQ ? this.translate(rQ, {
                npc: gQ
              }) : JQ,
              iconItem: IQ && null !== (wQ = WQ.questIconItem) && void 0 !== wQ ? wQ : null,
              barPercent: "active" === WQ.status && WQ.showsProgressBar ? Math.min(100, 100 * WQ.progress / WQ.target) : null,
              justFinished: qQ && null !== (TQ = null === (sQ = this.trackedChange) || void 0 === sQ ? void 0 : sQ.finished.has(WQ.id)) && void 0 !== TQ && TQ,
              justUnlocked: qQ && null !== (FQ = null === (PQ = this.trackedChange) || void 0 === PQ ? void 0 : PQ.unlocked.has(WQ.id)) && void 0 !== FQ && FQ
            }
          }));
        return {
          id: QQ.id,
          name: UW(zQ, QQ.nameKey, QQ.nameParams),
          description: UW(zQ, QQ.descriptionKey, QQ.descriptionParams),
          progress: WQ ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: QQ.progress.toLocaleString(this.locale),
            target: QQ.target.toLocaleString(this.locale)
          }),
          completed: WQ,
          tracked: qQ,
          selected: QQ.id === this.selected,
          canTrack: !WQ && !qQ && !TQ,
          trackLabel: this.translate(qQ ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : TQ ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== QQ.id,
          subquests: sQ,
          focusStep: null !== (wQ = sQ.find((QQ => null !== QQ.barPercent))) && void 0 !== wQ ? wQ : null,
          clock: this.clockText(QQ)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ;
        const gQ = [...null !== (QQ = null === (WQ = this.authoritative) || void 0 === WQ ? void 0 : WQ.active) && void 0 !== QQ ? QQ : [], ...null !== (XQ = null === (wQ = this.authoritative) || void 0 === wQ ? void 0 : wQ.completed) && void 0 !== XQ ? XQ : []];
        var JQ, rQ, IQ, jQ;
        gQ.some((QQ => QQ.id === this.selected)) || (this.selected = null !== (JQ = null !== (rQ = null === (IQ = this.authoritative) || void 0 === IQ ? void 0 : IQ.trackedQuestId) && void 0 !== rQ ? rQ : null === (jQ = gQ[0]) || void 0 === jQ ? void 0 : jQ.id) && void 0 !== JQ ? JQ : null);
        const BQ = null !== (qQ = null === (TQ = this.authoritative) || void 0 === TQ ? void 0 : TQ.active.map((QQ => this.entry(QQ, !1)))) && void 0 !== qQ ? qQ : [];
        BQ.sort(((QQ, WQ) => Number(WQ.tracked) - Number(QQ.tracked)));
        const yQ = null !== (zQ = null === (sQ = this.authoritative) || void 0 === sQ ? void 0 : sQ.completed.map((QQ => this.entry(QQ, !0)))) && void 0 !== zQ ? zQ : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: BQ,
          completed: yQ,
          completedExpanded: this.completedExpanded,
          detail: null !== (FQ = [...BQ, ...yQ].find((QQ => QQ.selected))) && void 0 !== FQ ? FQ : null,
          tracked: null !== (PQ = BQ.find((QQ => QQ.tracked))) && void 0 !== PQ ? PQ : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function IX(QQ) {
      var WQ;
      return null !== (WQ = null === QQ || void 0 === QQ ? void 0 : QQ.active.find((WQ => WQ.id === QQ.trackedQuestId))) && void 0 !== WQ ? WQ : null
    }
    const jX = "skyblockDungeonsView";
    class BX extends JQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          wQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = WQ, this.locale = XQ, this.requestEnter = wQ, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = QQ => {
          this.selected = QQ, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const QQ = this.pickerEntry(),
            WQ = null === QQ || void 0 === QQ ? void 0 : QQ.difficulties[this.pageIndex];
          void 0 !== WQ && null !== WQ.unlockedBoss && (this.close(), this.requestEnter(QQ.id, WQ.difficulty))
        }
      }
      setTranslator(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = QQ, this.locale = WQ, this.emit()
      }
      gj(QQ) {
        var WQ, XQ;
        if (!this.zj) return "open" === QQ.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== QQ.kind ? "snapshot" === QQ.kind && (this.authoritative = QQ.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (WQ = null === (XQ = this.pickerEntry()) || void 0 === XQ ? void 0 : XQ.difficulties.length) && void 0 !== WQ ? WQ : 1) - 1)), null === QQ.snapshot && this.open ? this.close() : this.emit()) : this.choose(QQ.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(QQ) {
        var WQ;
        const XQ = null === (WQ = this.authoritative) || void 0 === WQ ? void 0 : WQ.dungeons.find((WQ => WQ.id === QQ));
        void 0 !== XQ ? this.open && this.pickerDungeonId === QQ || (this.pickerDungeonId = QQ, this.pageIndex = Math.max(0, XQ.difficulties.findLastIndex((QQ => null !== QQ.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${QQ}`)
      }
      turnTo(QQ) {
        var WQ, XQ;
        const wQ = null !== (WQ = null === (XQ = this.pickerEntry()) || void 0 === XQ ? void 0 : XQ.difficulties.length) && void 0 !== WQ ? WQ : 0;
        QQ < 0 || QQ >= wQ || QQ === this.pageIndex || (this.pageIndex = QQ, this.emit())
      }
      pickerEntry() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.authoritative) || void 0 === WQ ? void 0 : WQ.dungeons.find((QQ => QQ.id === this.pickerDungeonId))) && void 0 !== QQ ? QQ : null
      }
      difficulty(QQ) {
        const WQ = QQ.completions > 0,
          XQ = null === QQ.bestMs ? null : RQ(QQ.bestMs);
        return {
          difficulty: QQ.difficulty,
          label: this.translate(cQ[QQ.difficulty]),
          colour: AQ[QQ.difficulty],
          beaten: WQ,
          bestTime: XQ,
          completions: QQ.completions,
          summary: WQ ? [null === XQ ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: XQ
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: QQ.completions.toLocaleString(this.locale)
          })].filter((QQ => null !== QQ)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(QQ) {
        const WQ = QQ.difficulties.map((QQ => this.difficulty(QQ))),
          XQ = WQ.filter((QQ => QQ.beaten)).length;
        return {
          id: QQ.id,
          name: this.translate(QQ.nameKey),
          selected: QQ.id === this.selected,
          beatenSummary: `${XQ} / ${WQ.length}`,
          difficulties: WQ
        }
      }
      picker() {
        const QQ = this.pickerEntry();
        if (null === QQ || 0 === QQ.difficulties.length) return null;
        const WQ = QQ.difficulties.map(((WQ, XQ) => {
          var wQ, qQ, TQ, zQ;
          const sQ = WQ.unlockedBoss,
            FQ = null === sQ ? this.lockedHint(QQ, XQ) : null;
          return {
            ...this.difficulty(WQ),
            unlocked: null !== sQ,
            bossName: null === sQ ? null : this.translate(sQ.bossNameKey),
            bossMobType: null !== (wQ = null === sQ || void 0 === sQ ? void 0 : sQ.bossMobType) && void 0 !== wQ ? wQ : null,
            bossMobVariation: null !== (qQ = null === sQ || void 0 === sQ ? void 0 : sQ.bossMobVariation) && void 0 !== qQ ? qQ : null,
            lockedHint: null !== (TQ = null === FQ || void 0 === FQ ? void 0 : FQ.text) && void 0 !== TQ ? TQ : null,
            lockedHintHighlight: null !== (zQ = null === FQ || void 0 === FQ ? void 0 : FQ.highlight) && void 0 !== zQ ? zQ : null,
            current: XQ === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(QQ.nameKey),
          pages: WQ,
          page: WQ[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < WQ.length - 1
        }
      }
      lockedHint(QQ, WQ) {
        var XQ, wQ, qQ;
        if (0 === WQ && "number" === typeof QQ.combatLevelLock) {
          const WQ = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: QQ.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: WQ,
            colour: GW("combat"),
            icon: DW.combat
          })
        }
        const TQ = null !== (XQ = null === (wQ = this.authoritative) || void 0 === wQ ? void 0 : wQ.dungeons) && void 0 !== XQ ? XQ : [],
          zQ = WQ > 0 ? QQ : null !== (qQ = TQ[TQ.indexOf(QQ) - 1]) && void 0 !== qQ ? qQ : null,
          sQ = WQ > 0 ? QQ.difficulties[WQ - 1] : null === zQ || void 0 === zQ ? void 0 : zQ.difficulties[0];
        if (null === zQ || void 0 === sQ) return null;
        const FQ = this.translate(zQ.nameKey);
        if (null === sQ.unlockedBoss) return zQ === QQ ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, sQ.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: FQ
        }, sQ.difficulty);
        const PQ = this.translate(sQ.unlockedBoss.bossNameKey);
        return zQ === QQ ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: PQ
        }, sQ.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: PQ,
            dungeon: FQ
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(QQ, WQ, XQ) {
        return this.hintHighlighting(QQ, WQ, "difficulty", {
          name: this.translate(cQ[XQ]),
          colour: AQ[XQ],
          icon: null
        })
      }
      hintHighlighting(QQ, WQ, XQ, wQ) {
        let {
          name: qQ,
          colour: TQ,
          icon: zQ
        } = wQ;
        const sQ = this.translate(QQ, {
          ...WQ,
          [XQ]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(QQ, {
            ...WQ,
            [XQ]: qQ
          }),
          highlight: 2 === sQ.length ? {
            before: sQ[0],
            name: qQ,
            after: sQ[1],
            colour: TQ,
            icon: zQ
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var QQ, WQ, XQ;
        const wQ = null !== (QQ = null === (WQ = this.authoritative) || void 0 === WQ ? void 0 : WQ.dungeons) && void 0 !== QQ ? QQ : [];
        var qQ, TQ;
        wQ.some((QQ => QQ.id === this.selected)) || (this.selected = null !== (qQ = null === (TQ = wQ[0]) || void 0 === TQ ? void 0 : TQ.id) && void 0 !== qQ ? qQ : null);
        const zQ = wQ.map((QQ => this.entry(QQ)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: zQ,
          detail: null !== (XQ = zQ.find((QQ => QQ.selected))) && void 0 !== XQ ? XQ : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const yX = ["mining", "farming", "foraging", "fishing", "combat"],
      VX = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      DX = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function pX() {
      for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
      return WQ.map(((QQ, WQ) => ({
        amount: QQ,
        coins: VX[WQ],
        xp: DX[WQ]
      })))
    }
    const GX = pX(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      UX = pX(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      bX = pX(50, 100, 250, 500, 1e3, 2500, 5e3),
      vX = pX(25, 50, 100, 250, 500, 1e3),
      dX = pX(10, 25, 50, 100, 250, 500, 1e3),
      HX = pX(1, 5, 10, 25, 50);

    function aX(QQ, WQ) {
      return {
        id: QQ,
        category: "fishing",
        item: WQ,
        drops: [WQ],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : dX
      }
    }
    const lX = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: UX
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: bX
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: bX
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: vX
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: vX
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: UX
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: GX
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: GX
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: GX
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: bX
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: UX
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: UX
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: UX
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: bX
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: bX
      }, aX("wheatfish", "Wheatfish"), aX("darter", "Darter"), aX("sunset_minnow", "Sunset Minnow"), aX("root_flounder", "Root Flounder"), aX("greenfin_loach", "Greenfin Loach"), aX("red_strongfish", "Red Strongfish"), aX("green_strongfish", "Green Strongfish"), aX("boomerang_fish", "Boomerang Fish"), aX("seahorse", "Seahorse"), aX("spined_stickleback", "Spined Stickleback"), aX("moon_strongfish", "Moon Strongfish"), aX("boulder_bass", "Boulder Bass"), aX("grass_snapper", "Grass Snapper"), aX("crystal_wheatfish", "Crystalized Wheatfish", HX), aX("moonstone_pupfish", "Moonstone Pupfish", HX), aX("reedglass_minnow", "Reedglass Minnow"), aX("mangrove_herring", "Mangrove Herring"), aX("mudline_perch", "Mudline Perch"), aX("coastal_mullet", "Coastal Mullet"), aX("reef_sardine", "Reef Sardine"), aX("root_perch", "Root Perch"), aX("driftwood_catfish", "Driftwood Catfish"), aX("aether_minnow", "Aether Minnow"), aX("needlefish", "Tri-Pointed Needlefish"), aX("threadfin_bream", "Threadfin Bream"), aX("mudbelly_tilapia", "Mudbelly Tilapia"), aX("rotslab_eel", "Rotslab Eel"), aX("polarflash_electron", "Polarflash Electron"), aX("mireback_carp", "Mireback Carp"), aX("blackwater_bream", "Blackwater Bream"), aX("stone_grouper", "Stone Grouper"), aX("shadeback_ray", "Shadeback Ray"), aX("glacial_silverfish", "Glacial Silverfish"), aX("hatchetfish", "Hatchetfish"), aX("moonlit_boomerang", "Moonlit Boomerang Fish"), aX("murkborne_ray", "Murkborne Ray"), aX("bamboo_catfish", "Bamboo Catfish"), aX("mossback_arapaima", "Mossback Arapaima"), aX("murk_stingray", "Murk Stingray"), aX("channel_sawfish", "Channel Sawfish"), aX("boned_sturgeon", "Boned Sturgeon"), aX("oarfish", "Oarfish"), aX("snakehead", "Snakehead", HX), aX("eldertide_leviathan", "Eldertide Leviathan", HX), aX("pithead", "Pithead"), aX("electric_eel", "Electric Eel"), aX("shadow_darter", "Shadow Darter"), aX("abyss_carp", "Abyss Carp"), aX("nomai_moray", "Nomai Moray"), aX("silver_dragonfish", "Silver Dragonfish"), aX("giant_moray", "Giant Moray"), aX("coelacanth", "Coelacanth", HX), aX("frost_herring", "Frost Herring"), aX("permafrost_halibut", "Permafrost Halibut"), aX("glacial_lanternfish", "Glacial Lanternfish"), aX("frozen_grenadier", "Frozen Grenadier"), aX("blackfin_icefish", "Blackfin Icefish"), aX("moonfish", "Moonfish"), aX("alpha_strongfish", "Alpha Moon Strongfish"), aX("deep_lanternfish", "Deepwater Lanternfish", HX), aX("pearlescent_moonfish", "Pearlescent Moonfish", HX), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: UX
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: vX
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: vX
      }],
      hX = (new Map(lX.map((QQ => [QQ.id, QQ]))), new Map),
      iX = new Map;
    for (const JF of lX) {
      for (const [QQ, WQ] of Object.entries(null !== (cX = JF.blocks) && void 0 !== cX ? cX : {})) {
        var cX;
        hX.set(QQ, {
          collection: JF,
          amount: WQ
        })
      }
      for (const QQ of null !== (AX = JF.drops) && void 0 !== AX ? AX : []) {
        var AX;
        iX.set(QQ, JF)
      }
    }

    function RX(QQ, WQ) {
      let XQ = 0;
      for (; XQ < QQ.tiers.length && WQ >= QQ.tiers[XQ].amount;) XQ++;
      return XQ
    }
    const EX = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function CX(QQ) {
      return EX[QQ - 1]
    }
    const uX = "skyblockCollectionsView";
    class LX extends JQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          wQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ => QQ;
        super(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = WQ, this.locale = XQ, this.itemName = wQ, this.counts = null, this.category = "mining", this.selected = lX[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = QQ => {
          this.category = QQ, this.selected = this.inCategory(QQ)[0].id, this.emit()
        }, this.select = QQ => {
          this.selected = QQ, this.emit()
        }
      }
      setTranslator(QQ, WQ, XQ) {
        this.translate = QQ, this.locale = WQ, this.itemName = XQ, this.emit()
      }
      gj(QQ) {
        if (!this.zj)
          if ("collOpen" !== QQ.kind) {
            (QQ.collFull || null === this.counts) && (this.counts = new Map);
            for (const [WQ, XQ] of QQ.collCounts) this.counts.set(WQ, XQ);
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
        var QQ;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const WQ = this.inCategory(this.category).map((QQ => this.collectionView(QQ))),
          XQ = lX.reduce(((QQ, WQ) => QQ + this.tierOf(WQ)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: yX.map((QQ => this.categoryView(QQ))),
          collections: WQ,
          detail: null !== (QQ = WQ.find((QQ => QQ.selected))) && void 0 !== QQ ? QQ : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(XQ)
          })
        }
      }
      categoryView(QQ) {
        const WQ = this.inCategory(QQ),
          XQ = WQ.reduce(((QQ, WQ) => QQ + this.tierOf(WQ)), 0),
          wQ = WQ.reduce(((QQ, WQ) => QQ + WQ.tiers.length), 0);
        return {
          id: QQ,
          label: this.translate(`skyblockGame:${QQ}`),
          icon: DW[QQ],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(XQ),
            target: this.number(wQ)
          }),
          selected: QQ === this.category
        }
      }
      collectionView(QQ) {
        var WQ, XQ;
        const wQ = null !== (WQ = this.counts.get(QQ.id)) && void 0 !== WQ ? WQ : 0,
          qQ = RX(QQ, wQ),
          TQ = null !== (XQ = QQ.tiers[qQ]) && void 0 !== XQ ? XQ : null,
          zQ = 0 === qQ ? 0 : QQ.tiers[qQ - 1].amount;
        return {
          id: QQ.id,
          name: this.itemName(QQ.item),
          icon: QQ.item,
          selected: QQ.id === this.selected,
          locked: 0 === wQ,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(wQ)
          }),
          tier: 0 === qQ ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(qQ),
          percent: null === TQ ? 100 : Math.min(100, (wQ - zQ) / (TQ.amount - zQ) * 100),
          progress: null === TQ ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(wQ),
            target: this.number(TQ.amount)
          }),
          nextReward: null === TQ ? null : this.reward(QQ, TQ.coins, TQ.xp)
        }
      }
      reward(QQ, WQ, XQ) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(WQ),
          xp: this.number(XQ),
          skill: this.translate(`skyblockGame:${QQ.category}`)
        })
      }
      tierLabel(QQ) {
        return this.translate("skyblockGame:collectionTier", {
          tier: CX(QQ)
        })
      }
      tierOf(QQ) {
        var WQ;
        return RX(QQ, null !== (WQ = this.counts.get(QQ.id)) && void 0 !== WQ ? WQ : 0)
      }
      inCategory(QQ) {
        return lX.filter((WQ => WQ.category === QQ))
      }
      number(QQ) {
        return QQ.toLocaleString(this.locale)
      }
    }
    const kX = "skyblockPortalTransitView",
      fX = "skyblockPortalArrival";
    class SX {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.mB = QQ, this.storage = WQ, this.now = XQ, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      gj(QQ) {
        const WQ = {
          zoneNameKey: QQ.transitZoneNameKey,
          variation: QQ.transitZoneVariation,
          colour: QQ.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(fX, WQ), this.show("departure", WQ.zoneNameKey, WQ.colour, QQ.transitDurationMs, QQ.transitDurationMs + 1500, (() => {
          this.storage.removeItem(fX)
        }))
      }
      resumeArrival(QQ) {
        const WQ = this.storage.getItem(fX);
        this.storage.removeItem(fX), null === WQ || WQ.variation !== QQ || this.now() - WQ.departedAt > 3e4 || this.show("arrival", WQ.zoneNameKey, WQ.colour, 3200, 2e4)
      }
      finishArrival(QQ) {
        var WQ;
        "arrival" === (null === (WQ = this.view) || void 0 === WQ ? void 0 : WQ.phase) && this.view.token === QQ && (this.clearTimer(), this.view = null, this.mB(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: QQ,
          zoneNameKey: WQ,
          colour: XQ,
          durationMs: wQ
        }, this.mB(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.mB(null), null === TQ || void 0 === TQ || TQ()
        }), qQ)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const tX = "skyblockDailyRewardView",
      oX = "skyblockDailyRewardCoin";
    class eX {
      constructor(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          FQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.mB = QQ, this.isBusy = WQ, this.holdQuestPopups = XQ, this.onHeldCoinsChanged = wQ, this.onCoinLanded = qQ, this.onStarted = TQ, this.onFinished = zQ, this.onItemLanded = sQ, this.now = FQ, this.Ds = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.playing) || void 0 === WQ ? void 0 : WQ.view) && void 0 !== QQ ? QQ : null
      }
      getHeldCoins() {
        var QQ, WQ;
        let XQ = 0;
        for (const wQ of this.Ds) XQ += wQ.coins;
        return XQ - (null !== (QQ = null === (WQ = this.playing) || void 0 === WQ ? void 0 : WQ.released) && void 0 !== QQ ? QQ : 0)
      }
      gj(QQ) {
        "dailyRewardClaimed" !== QQ.kind ? (this.queue.push(QQ), this.fJ()) : this.Ds.push({
          coins: QQ.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      fJ() {
        const QQ = this.now();
        if (null === this.playing) return this.releaseUnshown(QQ), void this.startNext(QQ);
        const WQ = this.playing,
          XQ = QQ - WQ.startedAt,
          wQ = WQ.view.flyingCoins,
          qQ = function(QQ, WQ) {
            let XQ = 0;
            for (; XQ < WQ && xX(XQ, WQ) <= QQ;) XQ++;
            return XQ
          }(XQ, wQ);
        if (qQ !== WQ.landed) {
          for (let QQ = qQ - WQ.landed > 2 ? qQ - 1 : WQ.landed; QQ < qQ; QQ++) this.onCoinLanded(QQ, wQ);
          WQ.landed = qQ, WQ.released = Math.round(WQ.view.coins * qQ / wQ), this.onHeldCoinsChanged()
        }
        for (; WQ.itemsLanded < WQ.view.items.length && 2e3 + 160 * WQ.itemsLanded + 630 <= XQ;) this.onItemLanded(WQ.itemsLanded), WQ.itemsLanded++;
        XQ >= WQ.view.durationMs && (this.finish(), this.startNext(QQ))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Ds = [], this.mB(null)
      }
      startNext(QQ) {
        if (0 === this.queue.length || this.isBusy()) return;
        const WQ = this.queue.shift();
        this.token++;
        const XQ = {
          token: this.token,
          day: WQ.dailyRewardDay,
          coins: WQ.dailyRewardCoins,
          items: WQ.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: WQ.dailyRewardDay === lQ ? 24 : 14
        };
        this.playing = {
          view: XQ,
          startedAt: QQ,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.mB(XQ), this.onStarted(XQ)
      }
      finish() {
        this.Ds.shift(), this.playing = null, this.holdQuestPopups(!1), this.mB(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(QQ) {
        if (this.queue.length > 0 || 0 === this.Ds.length) return;
        const WQ = this.Ds.length;
        this.Ds = this.Ds.filter((WQ => QQ - WQ.receivedAt < 6e4)), this.Ds.length !== WQ && this.onHeldCoinsChanged()
      }
    }

    function nX(QQ, WQ) {
      return 450 + 715 * QQ / (WQ - 1)
    }

    function xX(QQ, WQ) {
      return nX(QQ, WQ) + 650
    }
    const YX = "skyblockMailboxView";
    class NX {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.mB = QQ, this.isBusy = WQ, this.onStarted = XQ, this.now = wQ, this.waiting = [], this.playing = null, this.token = 0, this.itemName = QQ => QQ
      }
      getSnapshot() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.playing) || void 0 === WQ ? void 0 : WQ.view) && void 0 !== QQ ? QQ : null
      }
      setItemName(QQ) {
        this.itemName = QQ
      }
      gj(QQ) {
        this.waiting.push(...QQ.mailLetters), this.fJ()
      }
      fJ() {
        const QQ = this.now();
        null !== this.playing && QQ - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.mB(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(QQ)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.mB(null)
      }
      start(QQ) {
        const WQ = this.waiting.slice(0, 3);
        this.token++;
        const XQ = {
          token: this.token,
          letters: WQ.map((QQ => this.toView(QQ))),
          more: this.waiting.length - WQ.length,
          durationMs: 4500 + 700 * WQ.length
        };
        this.waiting = [], this.playing = {
          view: XQ,
          startedAt: QQ
        }, this.mB(XQ), this.onStarted(XQ)
      }
      toView(QQ) {
        return {
          coins: QQ.mailCoins,
          items: QQ.mailItems.map((QQ => {
            var WQ;
            return {
              itemName: QQ.mailItemName,
              amount: QQ.mailItemAmount,
              label: null !== (WQ = QQ.mailItemLabel) && void 0 !== WQ ? WQ : this.itemName(QQ.mailItemName)
            }
          })),
          reasonKey: QQ.mailReasonKey,
          reasonParams: QQ.mailReasonParams
        }
      }
    }
    const ZX = "skyblockQuestGraphView",
      OX = "skyblockDevQuestJump";

    function KX(QQ) {
      if (0 === QQ.length) return "";
      const WQ = [`M ${QQ[0].x} ${QQ[0].y}`];
      for (let wQ = 1; wQ < QQ.length - 1; wQ++) {
        const XQ = QQ[wQ + 1];
        WQ.push(`Q ${QQ[wQ].x} ${QQ[wQ].y} ${(QQ[wQ].x+XQ.x)/2} ${(QQ[wQ].y+XQ.y)/2}`)
      }
      const XQ = QQ[QQ.length - 1];
      return WQ.push(`L ${XQ.x} ${XQ.y}`), WQ.join(" ")
    }

    function mX(QQ, WQ) {
      return QQ < WQ ? `${QQ}|${WQ}` : `${WQ}|${QQ}`
    }
    class MX extends JQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(QQ, XQ, wQ), this.translate = WQ, this.requestJump = qQ, this.requestArrive = TQ, this.storage = zQ, this.now = sQ, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = QQ => {
          QQ !== this.hoveredId && (this.hoveredId = QQ, this.emit())
        }, this.jump = QQ => {
          this.close(), this.requestJump(QQ)
        }
      }
      gj(QQ) {
        if (!this.zj)
          if ("graph" !== QQ.kind) {
            if ("jumping" === QQ.kind) {
              const WQ = {
                questId: QQ.graphQuestId,
                variation: QQ.graphVariation,
                completes: QQ.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(OX, WQ)
            }
          } else {
            const WQ = ++this.graphCount;
            XQ.e(122).then((() => XQ(6830))).then((XQ => {
              let {
                default: wQ
              } = XQ;
              this.zj || WQ !== this.graphCount || (this.layout = function(QQ, WQ, XQ) {
                var wQ, qQ;
                const TQ = new QQ.graphlib.Graph;
                TQ.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), TQ.setDefaultEdgeLabel((() => ({})));
                const zQ = new Set;
                for (const gQ of WQ) zQ.add(gQ.graphQuestId), TQ.setNode(gQ.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const sQ = XQ.filter((QQ => zQ.has(QQ.graphFromId) && zQ.has(QQ.graphToId) && QQ.graphFromId !== QQ.graphToId)),
                  FQ = new Map;
                for (const gQ of [...sQ].sort(((QQ, WQ) => Number("awaits" === QQ.graphEdgeKind) - Number("awaits" === WQ.graphEdgeKind)))) {
                  const QQ = mX(gQ.graphFromId, gQ.graphToId);
                  FQ.has(QQ) || (FQ.set(QQ, gQ), TQ.setEdge(gQ.graphFromId, gQ.graphToId))
                }
                QQ.layout(TQ);
                const PQ = TQ.graph();
                return {
                  width: Math.ceil(null !== (wQ = PQ.width) && void 0 !== wQ ? wQ : 0),
                  height: Math.ceil(null !== (qQ = PQ.height) && void 0 !== qQ ? qQ : 0),
                  nodes: WQ.map((QQ => {
                    var WQ, XQ;
                    const wQ = TQ.node(QQ.graphQuestId);
                    return {
                      node: QQ,
                      left: (null !== (WQ = wQ.x) && void 0 !== WQ ? WQ : 0) - 95,
                      top: (null !== (XQ = wQ.y) && void 0 !== XQ ? XQ : 0) - 26
                    }
                  })),
                  edges: sQ.map((QQ => {
                    var WQ;
                    const XQ = FQ.get(mX(QQ.graphFromId, QQ.graphToId)),
                      wQ = null !== (WQ = TQ.edge(XQ.graphFromId, XQ.graphToId).points) && void 0 !== WQ ? WQ : [];
                    return {
                      edge: QQ,
                      key: `${QQ.graphFromId}|${QQ.graphToId}|${QQ.graphEdgeKind}`,
                      path: KX(XQ.graphFromId === QQ.graphFromId ? wQ : [...wQ].reverse())
                    }
                  })),
                  plans: new Map(WQ.map((QQ => [QQ.graphQuestId, new Set([QQ.graphQuestId, ...QQ.graphPlanIds])])))
                }
              }(wQ, QQ.graphNodes, QQ.graphEdges), this.show())
            })).catch((QQ => {
              console.error("The quest graph could not be laid out", QQ)
            }))
          }
      }
      resumeJump(QQ) {
        const WQ = this.storage.getItem(OX);
        this.storage.removeItem(OX), null === WQ || WQ.variation !== QQ || this.now() - WQ.departedAt > 6e4 || this.requestArrive(WQ.questId, WQ.completes)
      }
      setTranslator(QQ) {
        this.translate = QQ, this.emit()
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
        var QQ, WQ;
        return null !== (QQ = null === this.hoveredId || null === (WQ = this.layout) || void 0 === WQ ? void 0 : WQ.plans.get(this.hoveredId)) && void 0 !== QQ ? QQ : new Set
      }
      buildSnapshot() {
        const QQ = this.layout;
        if (null === QQ) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const WQ = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: QQ.width,
          height: QQ.height,
          nodes: QQ.nodes.map((QQ => {
            let {
              node: XQ,
              left: wQ,
              top: qQ
            } = QQ;
            return {
              id: XQ.graphQuestId,
              name: this.translate(XQ.graphNameKey),
              detail: null === XQ.graphGiverName ? XQ.graphZoneId : `${XQ.graphGiverName} \xb7 ${XQ.graphZoneId}`,
              state: XQ.graphState,
              left: wQ,
              top: qQ,
              inPlan: WQ.has(XQ.graphQuestId),
              hovered: XQ.graphQuestId === this.hoveredId
            }
          })),
          edges: QQ.edges.map((QQ => {
            let {
              edge: XQ,
              key: wQ,
              path: qQ
            } = QQ;
            return {
              key: wQ,
              kind: XQ.graphEdgeKind,
              path: qQ,
              inPlan: WQ.has(XQ.graphFromId) && WQ.has(XQ.graphToId)
            }
          })),
          planning: WQ.size > 0
        }
      }
    }
    var Qw = XQ(37334);
    const Ww = 250,
      Xw = 2150,
      ww = -2.8,
      qw = 2.2,
      Tw = -27,
      zw = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      sw = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Fw = Math.round(50 + 1e3 * (sw.delay + sw.period / 2)),
      Pw = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      gw = Array.from({
        length: 26
      }, ((QQ, WQ) => {
        const XQ = 2.39996 * WQ,
          wQ = .5 + .618034 * WQ % 1 * .23,
          qQ = WQ % 3 !== 2;
        return {
          rune: qQ ? Pw[7 * WQ % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(XQ)*wQ).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(XQ)*wQ).toFixed(3)})`,
            "--spin": 40 * (WQ % 5 - 2) + "deg",
            "--size": (qQ ? 1 + WQ % 4 * .2 : .3 + WQ % 2 * .15) + "rem",
            "--duration": `${(1.8+7*WQ%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*WQ%3).toFixed(2)}s`
          }
        }
      }));

    function Jw(QQ, WQ) {
      return Array.from({
        length: 30 + 3 * QQ + (WQ ? 10 : 0)
      }, ((QQ, WQ) => {
        const XQ = WQ < 4,
          wQ = XQ ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          qQ = XQ ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          TQ = XQ ? 2.2 : .6 + Math.random(),
          zQ = XQ ? .3 : Math.random() < .5 ? .16 : .24,
          sQ = XQ ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": wQ,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${qQ.toFixed(2)}rem`,
          "--length": `${TQ.toFixed(2)}rem`,
          "--width": `${zQ}rem`,
          "--duration": `${Math.round(sQ)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function rw(QQ) {
      let {
        zeta: WQ,
        period: XQ
      } = QQ;
      const wQ = 2 * Math.PI / XQ;
      return {
        w: wQ,
        decay: WQ * wQ / Math.sqrt(1 - WQ * WQ)
      }
    }
    let Iw = !1;

    function jw() {
      if (Iw) return;
      Iw = !0;
      const QQ = document.createElement("style");
      QQ.textContent = function() {
        const QQ = rw(zw),
          WQ = rw(sw),
          XQ = WQ => Math.exp(-QQ.decay * WQ) * Math.sin(QQ.w * WQ),
          wQ = XQ(Math.atan(QQ.w / QQ.decay) / QQ.w),
          qQ = .25,
          TQ = 2.15,
          zQ = Math.round(215),
          sQ = [];
        for (let FQ = 0; FQ <= zQ; FQ++) {
          const QQ = FQ / zQ * TQ;
          let PQ = Math.sin(Math.min(QQ, qQ) / qQ * Math.PI / 2) ** 2,
            gQ = 0,
            JQ = 1,
            rQ = 1 - .2 * PQ,
            IQ = 1;
          if (QQ >= qQ) {
            const zQ = QQ - qQ,
              sQ = Math.max(0, zQ - .05);
            PQ = Math.exp(-sQ / .05), gQ = XQ(sQ + zw.lead * (1 - Math.exp(-sQ / zw.rush))) / wQ;
            const FQ = sQ - sw.delay,
              jQ = FQ <= 0 ? 0 : 1 - Math.exp(-WQ.decay * FQ) * (Math.cos(WQ.w * FQ) + WQ.decay / WQ.w * Math.sin(WQ.w * FQ)),
              BQ = Math.max(0, (QQ - 1.77) / (TQ - 1.77));
            JQ = (1 + (sw.to - 1) * jQ) * (1 + .08 * BQ), rQ = 1.1 + 1.5 * Math.exp(-zQ / .07) + .3 * Math.exp(-(((1e3 * zQ - Fw) / 100) ** 2)) + .8 * BQ, IQ = 1 - BQ ** 1.5
          }
          const jQ = .15 * PQ + ww * gQ,
            BQ = -.1 * PQ + qw * gQ,
            yQ = 3 * PQ + Tw * gQ;
          sQ.push(`${(FQ/zQ*100).toFixed(3)}% { opacity: ${IQ.toFixed(3)}; transform: translate(${jQ.toFixed(3)}rem, ${BQ.toFixed(3)}rem) rotate(${yQ.toFixed(2)}deg) scale(${JQ.toFixed(3)}); filter: brightness(${rQ.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${sQ.join(" ")} }`
      }(), document.head.append(QQ)
    }
    const Bw = "skyblockForgeView",
      yw = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Vw extends JQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        super(QQ, XQ, wQ), this.translate = WQ, this.requestForge = qQ, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (QQ, WQ) => {
          var XQ, wQ;
          null !== this.forging || (null !== (XQ = this.owned[(0, Qw.m)(WQ, QQ)]) && void 0 !== XQ ? XQ : 0) <= 0 || (this.selected[QQ] = this.selected[QQ] === WQ ? null : WQ, this.status = null, null === (wQ = this.onPartSelected) || void 0 === wQ || wQ.call(this), this.emit())
        }, this.forge = QQ => {
          var WQ, XQ;
          const wQ = this.selectedParts();
          if (null === wQ || this.isPending() || !this.open) return;
          const qQ = (0, Qw.l)(wQ);
          if (null === qQ || qQ.coalCost > this.coal) return;
          const TQ = this.preview(qQ),
            zQ = null !== (WQ = null === (XQ = this.onForgeStarted) || void 0 === XQ ? void 0 : XQ.call(this, TQ.tier, TQ.named, QQ)) && void 0 !== WQ ? WQ : () => {};
          if (this.dropArrival(), QQ) {
            const QQ = {
              id: ++this.forgeId,
              preview: TQ,
              timers: [],
              stopSounds: zQ,
              landed: !1,
              reply: null
            };
            QQ.timers.push(setTimeout((() => {
              QQ.landed = !0, null !== QQ.reply && (this.apply(QQ.reply), QQ.reply = null, this.emit())
            }), Ww), setTimeout((() => {
              this.finishForge(QQ)
            }), Xw)), this.forging = QQ
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(wQ)
        }, this.snapshot = this.buildSnapshot()
      }
      gj(QQ) {
        var WQ;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === QQ.forgeMessageKind) return this.dropForge(), this.apply(QQ), this.status = null, this.show(), void(null === (WQ = this.onOpened) || void 0 === WQ || WQ.call(this));
        const XQ = this.forging;
        if (null !== XQ && null !== QQ.forgeRefusalKey) this.dropForge();
        else if (null !== XQ && !XQ.landed) return void(XQ.reply = QQ);
        this.apply(QQ), this.emit()
      }
      apply(QQ) {
        if (this.owned = QQ.forgeOwnedParts, this.coal = QQ.forgeCoalOwned, this.keepSelectionOwned("open" === QQ.forgeMessageKind), null !== QQ.forgeForgedSwordId) {
          var WQ;
          const XQ = (0, Qw.l)(QQ.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.displayName) && void 0 !== WQ ? WQ : ""
            }
          }
        } else null !== QQ.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: QQ.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(QQ) {
        this.translate = QQ, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(QQ) {
        var WQ;
        this.forging = null;
        const XQ = this.selectedParts(),
          wQ = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: QQ.id,
          sameSword: null !== XQ && (null === (WQ = (0, Qw.l)(XQ)) || void 0 === WQ ? void 0 : WQ.displayName) === QQ.preview.name,
          timer: wQ
        }, this.emit()
      }
      dropForge() {
        const QQ = this.forging;
        if (null !== QQ) {
          this.forging = null;
          for (const WQ of QQ.timers) clearTimeout(WQ);
          QQ.stopSounds(), null !== QQ.reply && this.apply(QQ.reply)
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
        var QQ, WQ, XQ;
        const wQ = this.selectedParts(),
          qQ = null === wQ ? null : (0, Qw.l)(wQ),
          TQ = null !== (QQ = null === (WQ = this.forging) || void 0 === WQ ? void 0 : WQ.preview) && void 0 !== QQ ? QQ : null === qQ ? null : this.preview(qQ);
        return {
          enabled: this.received,
          open: this.open,
          slots: Qw.i.map((QQ => ({
            kind: QQ,
            label: this.translate(yw[QQ]),
            parts: this.partsFor(QQ)
          }))),
          coalOwned: this.coal,
          preview: TQ,
          unformedSword: Qw.h[null !== (XQ = this.selected.Blade) && void 0 !== XQ ? XQ : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((QQ => QQ > 0)),
          canForge: null !== TQ && !TQ.coalShort && !this.isPending(),
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
      preview(QQ) {
        return {
          name: QQ.displayName,
          lore: QQ.lore,
          baseSword: QQ.baseSword,
          enchantmentTier: QQ.enchantmentTier,
          tier: Number(QQ.enchantmentTier.slice(-1)),
          named: QQ.named,
          stats: this.stats(QQ),
          effects: QQ.effects,
          coalCost: QQ.coalCost,
          coalShort: null === this.forging && QQ.coalCost > this.coal
        }
      }
      partsFor(QQ) {
        const WQ = [];
        for (const wQ of Qw.e) {
          var XQ;
          const qQ = (0, Qw.m)(wQ, QQ),
            TQ = null !== (XQ = this.owned[qQ]) && void 0 !== XQ ? XQ : 0;
          TQ > 0 && WQ.push({
            material: wQ,
            itemName: qQ,
            owned: TQ,
            selected: this.selected[QQ] === wQ,
            placeholder: !1
          })
        }
        if (0 === WQ.length) {
          const XQ = Qw.e[0];
          WQ.push({
            material: XQ,
            itemName: (0, Qw.m)(XQ, QQ),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return WQ
      }
      stats(QQ) {
        const WQ = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${QQ.powerMultiplier.toFixed(2)}`,
          better: QQ.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${QQ.damageMultiplier.toFixed(2)}`,
          better: QQ.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/QQ.cooldownMultiplier).toFixed(2)}`,
          better: QQ.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${QQ.knockbackMultiplier.toFixed(2)}`,
          better: QQ.knockbackMultiplier > 1
        }];
        return QQ.reachBonus > 0 && WQ.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${QQ.reachBonus.toFixed(1)}`,
          better: !0
        }), QQ.damageReduction > 0 && WQ.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*QQ.damageReduction)}%`,
          better: !0
        }), WQ
      }
      selectedParts() {
        const {
          Blade: QQ,
          Guard: WQ,
          Handle: XQ
        } = this.selected;
        return null === QQ || null === WQ || null === XQ ? null : {
          blade: QQ,
          guard: WQ,
          handle: XQ
        }
      }
      keepSelectionOwned(QQ) {
        for (const XQ of Qw.i) {
          var WQ;
          const wQ = this.selected[XQ];
          if (null !== wQ && (null !== (WQ = this.owned[(0, Qw.m)(wQ, XQ)]) && void 0 !== WQ ? WQ : 0) > 0) continue;
          if (!QQ) {
            this.selected[XQ] = null;
            continue
          }
          const qQ = [...Qw.e].reverse().find((QQ => {
            var WQ;
            return (null !== (WQ = this.owned[(0, Qw.m)(QQ, XQ)]) && void 0 !== WQ ? WQ : 0) > 0
          }));
          this.selected[XQ] = null !== qQ && void 0 !== qQ ? qQ : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Dw = "skyblockSmugglerView",
      pw = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Gw extends JQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(QQ, XQ, wQ), this.translate = WQ, this.requestBuy = qQ, this.now = TQ, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = QQ => QQ, this.onBought = null, this.buy = QQ => {
          const WQ = this.deals[QQ];
          void 0 !== WQ && !this.isPending() && this.open && !this.soldOut.has(QQ) && this.canAfford(WQ) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, QQ))
        }, this.snapshot = this.buildSnapshot()
      }
      gj(QQ) {
        if (this.received = !0, this.day = QQ.smugglerDay, this.deals = QQ.smugglerDeals, this.rivets = QQ.smugglerRivetsOwned, this.crests = QQ.smugglerCrestsOwned, this.soldOut = new Set(QQ.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + QQ.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === QQ.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = QQ.smugglerBoughtSlot, null !== QQ.smugglerBoughtSlot) {
          var WQ, XQ;
          const wQ = this.deals[QQ.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === wQ ? "" : this.dealName(wQ),
              amount: String(null !== (WQ = null === wQ || void 0 === wQ ? void 0 : wQ.smugglerDealAmount) && void 0 !== WQ ? WQ : 0)
            }
          }, this.boughtCount++, null === (XQ = this.onBought) || void 0 === XQ || XQ.call(this)
        } else null !== QQ.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: QQ.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(QQ, WQ, XQ) {
        this.translate = QQ, void 0 !== XQ && (this.itemName = XQ), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(QQ) {
        if (null !== QQ.smugglerDealUniqueName) return QQ.smugglerDealUniqueName;
        const WQ = pw[QQ.smugglerDealItem];
        return void 0 === WQ ? this.itemName(QQ.smugglerDealItem) : this.translate(WQ)
      }
      canAfford(QQ) {
        return QQ.smugglerDealRivets <= this.rivets && QQ.smugglerDealCrests <= this.crests
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
        const QQ = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return QQ <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : QQ < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(QQ)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(QQ / 60)),
          minutes: String(QQ % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((QQ, WQ) => ({
            slot: WQ,
            itemName: QQ.smugglerDealItem,
            displayName: this.dealName(QQ),
            enchantmentTier: QQ.smugglerDealEnchantmentTier,
            amount: QQ.smugglerDealAmount,
            rivets: QQ.smugglerDealRivets,
            crests: QQ.smugglerDealCrests,
            affordable: this.canAfford(QQ),
            soldOut: this.soldOut.has(WQ),
            justBought: this.boughtSlot === WQ
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
    const Uw = "skyblockPassageView",
      bw = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function vw(QQ, WQ) {
      return QQ(bw[WQ])
    }

    function dw(QQ, WQ, XQ, wQ) {
      const qQ = Math.ceil((XQ - wQ) / 864e5),
        TQ = vw(QQ, WQ);
      return qQ > 1 ? QQ("skyblockGame:passageNextDays", {
        phase: TQ,
        days: String(qQ)
      }) : QQ("skyblockGame:passageNextSoon", {
        phase: TQ
      })
    }
    class Hw extends JQ {
      constructor(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(QQ, XQ, wQ), this.translate = WQ, this.now = qQ, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = QQ => QQ, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      gj(QQ) {
        this.message = QQ, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(QQ, WQ, XQ) {
        this.translate = QQ, void 0 !== XQ && (this.itemName = XQ), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(QQ) {
        return {
          itemName: QQ.passageFish,
          displayName: this.itemName(QQ.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(QQ.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const QQ = this.message;
        return null === QQ ? {
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
          phase: QQ.passagePhase,
          phaseName: vw(this.translate, QQ.passagePhase),
          visitors: QQ.passageVisitors.map((QQ => this.describe(QQ))),
          resting: this.describe(QQ.passageResting),
          nextPhase: QQ.passageNextPhase,
          next: dw(this.translate, QQ.passageNextPhase, QQ.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var aw = XQ(38831);
    const lw = "skyblockKeepersChairView";
    class hw extends JQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new aw.d;
        super(QQ, XQ, wQ), this.translate = WQ, this.requestAim = qQ, this.now = TQ, this.pacer = zQ, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = QQ => QQ, this.aim = QQ => {
          !this.awaitingReply && this.open && this.atChair && QQ !== this.favoured && (null === QQ || this.islands.some((WQ => WQ.keepersChairIslandId === QQ && WQ.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== QQ && void 0 !== QQ ? QQ : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = zQ.subscribe((() => {
          this.emit()
        }))
      }
      gj(QQ) {
        var WQ, XQ;
        this.received = !0;
        const wQ = this.favoured,
          qQ = this.atChair;
        var TQ;
        return this.islands = QQ.keepersChairIslands, this.favoured = QQ.keepersChairFavoured, this.passage = null !== (WQ = QQ.keepersChairPassage) && void 0 !== WQ ? WQ : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (XQ = QQ.keepersChairAtChair) || void 0 === XQ || XQ, "place" === QQ.keepersChairMessageKind ? (!qQ && this.atChair && "refused" === (null === (TQ = this.status) || void 0 === TQ ? void 0 : TQ.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === QQ.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== QQ.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: QQ.keepersChairRefusalKey,
          island: null
        } : this.favoured !== wQ && (this.status = null === this.favoured ? {
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
      receivePassage(QQ) {
        this.received && (this.passage = QQ, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(QQ, WQ, XQ) {
        this.translate = QQ, void 0 !== XQ && (this.itemName = XQ), this.emit()
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
      islandName(QQ) {
        const WQ = this.islands.find((WQ => WQ.keepersChairIslandId === QQ));
        return void 0 === WQ ? QQ : this.translate(WQ.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const QQ = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          WQ = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((QQ => {
            const WQ = QQ.keepersChairFeaturedFish;
            return {
              id: QQ.keepersChairIslandId,
              name: this.translate(QQ.keepersChairIslandNameKey),
              relit: QQ.keepersChairIslandRelit,
              featuredFish: null === WQ ? null : {
                itemName: WQ,
                displayName: this.itemName(WQ)
              },
              favoured: QQ.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === QQ ? null : {
            tone: QQ.tone,
            text: this.translate(QQ.key, null === QQ.island ? void 0 : {
              island: this.islandName(QQ.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === WQ ? null : {
            phase: WQ.keepersChairPassagePhase,
            phaseName: vw(this.translate, WQ.keepersChairPassagePhase),
            nextPhase: WQ.keepersChairPassageNextPhase,
            next: dw(this.translate, WQ.keepersChairPassageNextPhase, WQ.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const iw = "skyblockReachLogView",
      Aw = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Rw = "Caught Fish",
      Ew = [1, 2, 4];

    function Cw(QQ, WQ) {
      return QQ.map((QQ => ({
        ...QQ,
        reachLogPageFish: QQ.reachLogPageFish.map((QQ => ({
          ...QQ,
          reachLogFishFresh: WQ(QQ)
        })))
      })))
    }
    class uw extends JQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new aw.d;
        super(QQ, XQ, wQ), this.translate = WQ, this.requestOpen = qQ, this.pacer = TQ, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = QQ => QQ, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = QQ => {
          this.pages.some((WQ => WQ.reachLogIslandId === QQ)) && (this.selected = QQ, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = TQ.subscribe((() => {
          this.emit()
        }))
      }
      gj(QQ) {
        if (this.received = !0, "status" === QQ.reachLogMessageKind) return !0 === QQ.reachLogNews && this.markNews(), this.serverFresh = QQ.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const WQ = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== QQ.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Cw(QQ.reachLogPages, (QQ => QQ.reachLogFishFresh || this.heldFresh.has(QQ.reachLogFishItem))), this.letGoShown = QQ.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, WQ) this.showPages();
          else {
            for (const QQ of this.pages)
              for (const WQ of QQ.reachLogPageFish) WQ.reachLogFishFresh && this.heldFresh.add(WQ.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(QQ, WQ, XQ) {
        this.translate = QQ, this.pageViews = null, void 0 !== XQ && (this.itemName = XQ), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Cw(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var QQ, WQ, XQ, wQ;
        const qQ = this.pages.find((QQ => QQ.reachLogPageFish.some((QQ => QQ.reachLogFishFresh))));
        if (void 0 !== qQ) return qQ.reachLogIslandId;
        if (null !== this.selected && this.pages.some((QQ => QQ.reachLogIslandId === this.selected))) return this.selected;
        return null !== (QQ = null !== (WQ = null === (XQ = this.pages.filter((QQ => QQ.reachLogIslandAwake)).at(-1)) || void 0 === XQ ? void 0 : XQ.reachLogIslandId) && void 0 !== WQ ? WQ : null === (wQ = this.pages[0]) || void 0 === wQ ? void 0 : wQ.reachLogIslandId) && void 0 !== QQ ? QQ : null
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
        return this.pages.map((QQ => {
          var WQ;
          return {
            id: QQ.reachLogIslandId,
            name: this.translate(QQ.reachLogIslandNameKey),
            awake: QQ.reachLogIslandAwake,
            gold: QQ.reachLogPageGold,
            caught: QQ.reachLogPageFish.filter((QQ => QQ.reachLogFishCaught && !QQ.reachLogFishVisitor)).length,
            total: QQ.reachLogPageFish.filter((QQ => !QQ.reachLogFishVisitor)).length,
            fish: QQ.reachLogPageFish.map((QQ => {
              const WQ = QQ.reachLogFishBestKg;
              return {
                itemName: QQ.reachLogFishItem,
                name: QQ.reachLogFishCaught ? this.itemName(QQ.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: QQ.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / QQ.reachLogFishChance))
                }),
                best: QQ.reachLogFishCaught ? null === WQ ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: WQ.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: QQ.reachLogFishMarks,
                ribbons: Ew.map((WQ => 0 !== (QQ.reachLogFishRibbons & WQ))),
                glimmer: 0 !== (8 & QQ.reachLogFishRibbons),
                halo: 0 !== (32 & QQ.reachLogFishRibbons),
                fresh: QQ.reachLogFishFresh,
                visitor: QQ.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (WQ = QQ.reachLogPageReturner) && void 0 !== WQ ? WQ : null)
          }
        }))
      }
      buildReturner(QQ) {
        return null === QQ ? null : {
          itemName: QQ.reachLogReturnerFishItem,
          line: this.translate(QQ.reachLogReturnerLineKey, {
            name: this.translate(QQ.reachLogReturnerNameKey),
            trinket: this.translate(QQ.reachLogReturnerTrinketKey)
          }),
          back: QQ.reachLogReturnerBack
        }
      }
      receivePassagePhase(QQ) {
        null !== this.passagePhase && this.passagePhase !== QQ && (this.pagesCurrent = !1), this.passagePhase = QQ
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Lw = "skyblockLampLightView";
    class kw {
      constructor(QQ, WQ, XQ, wQ) {
        this.mB = QQ, this.translate = WQ, this.requestCommand = XQ, this.pacer = wQ, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.zj = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = QQ => {
          QQ ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = QQ => {
          this.send(`buy ${QQ}`)
        }, this.socket = QQ => {
          this.send(`socket ${null!==QQ&&void 0!==QQ?QQ:CQ}`)
        }, this.wearTint = QQ => {
          this.send(`tint ${null!==QQ&&void 0!==QQ?QQ:CQ}`)
        }, this.setSituation = QQ => {
          this.situation = QQ, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = wQ.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = wQ.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      gj(QQ) {
        if (this.message = QQ, null !== QQ.lampLightShop && (this.shop = QQ.lampLightShop), "open" === QQ.lampLightKind && (this.refusalKey = null), "reply" === QQ.lampLightKind) {
          var WQ;
          const qQ = null !== (WQ = QQ.lampLightReplyTag) && void 0 !== WQ ? WQ : null,
            TQ = null !== qQ && qQ === this.offTag;
          var XQ, wQ;
          if (TQ ? this.settleOff() : null !== qQ && qQ !== this.awaitingTag || this.settleReply(), this.refusalKey = QQ.lampLightRefusalKey, null !== QQ.lampLightBought && !TQ) this.sparkle = {
            id: QQ.lampLightBought,
            count: (null !== (XQ = null === (wQ = this.sparkle) || void 0 === wQ ? void 0 : wQ.count) && void 0 !== XQ ? XQ : 0) + 1
          }
        }
        QQ.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === QQ.lampLightKind && (this.lastGained = QQ.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(QQ) {
        QQ !== this.atChair && (this.atChair = QQ, QQ && (this.refusalKey = null), this.emit())
      }
      setTranslator(QQ, WQ) {
        this.translate = QQ, this.locale = null !== WQ && void 0 !== WQ ? WQ : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.zj = !0
      }
      send(QQ) {
        var WQ;
        if (null !== this.awaitingTag || "ready" !== (null === (WQ = this.message) || void 0 === WQ ? void 0 : WQ.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const XQ = this.nextTag();
        this.awaitingTag = XQ, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${QQ} ${XQ}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const QQ = this.nextTag();
        this.offTag = QQ, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${QQ}`)
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
        this.zj || (this.snapshot = this.buildSnapshot(), this.mB(this.snapshot))
      }
      formatLight(QQ) {
        return Math.floor(QQ).toLocaleString(this.locale)
      }
      formatPercent(QQ) {
        const WQ = 100 * QQ;
        return WQ >= 10 ? Math.round(WQ).toLocaleString(this.locale) : WQ.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(QQ, WQ) {
        if ("bite" === QQ) return this.translate("skyblockGame:lampLightBite", {
          seconds: (WQ.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === QQ) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(WQ.lampLightRareChance)
        });
        if ("notice" === QQ) return null === WQ.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(WQ.lampLightNoticeChance)
        });
        const XQ = "meter" === QQ ? WQ.lampLightMeterCatches : WQ.lampLightBloomCatches;
        return null === XQ ? null : this.translate("meter" === QQ ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(XQ))
        })
      }
      oddsLines(QQ, WQ) {
        const XQ = (QQ, WQ) => {
            var XQ;
            return null !== (XQ = {
              bite: WQ.lampLightBiteMs,
              rare: WQ.lampLightRareChance,
              meter: WQ.lampLightMeterCatches,
              bloom: WQ.lampLightBloomCatches,
              notice: WQ.lampLightNoticeChance
            } [QQ]) && void 0 !== XQ ? XQ : 0
          },
          wQ = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          qQ = [];
        for (const TQ of ["bite", "rare", "meter", "bloom", "notice"]) {
          const zQ = this.formatOdds(TQ, QQ),
            sQ = this.formatOdds(TQ, WQ);
          if (null === zQ || null === sQ || "bite" !== TQ && "rare" !== TQ && zQ === sQ) continue;
          const FQ = XQ(TQ, WQ) - XQ(TQ, QQ),
            PQ = wQ[TQ] ? FQ < 0 : FQ > 0;
          qQ.push({
            label: TQ,
            before: zQ,
            after: sQ,
            tone: zQ === sQ ? "same" : PQ ? "better" : "worse"
          })
        }
        return qQ
      }
      charmView(QQ, WQ, XQ) {
        const wQ = QQ.lampLightCharmId.charAt(0).toUpperCase() + QQ.lampLightCharmId.slice(1),
          qQ = "bloom" === this.situation;
        return {
          id: QQ.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${wQ}`),
          effect: this.translate(`skyblockGame:lampLightCharm${wQ}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(QQ.lampLightCharmCost)
          }),
          owned: QQ.lampLightCharmOwned,
          affordable: XQ >= QQ.lampLightCharmCost,
          socketed: WQ.lampLightSocketed === QQ.lampLightCharmId,
          lines: this.oddsLines(qQ ? WQ.lampLightBareBloom : WQ.lampLightBareOpen, qQ ? QQ.lampLightCharmBloom : QQ.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var QQ, WQ, XQ, wQ;
        const qQ = this.message,
          TQ = "ready" === (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) ? this.shop : null,
          zQ = null !== (QQ = null === qQ || void 0 === qQ ? void 0 : qQ.lampLightBalance) && void 0 !== QQ ? QQ : 0,
          sQ = this.atChair,
          FQ = "loading" === (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          PQ = "ready" !== (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) || sQ ? null !== (WQ = this.refusalKey) && void 0 !== WQ ? WQ : FQ : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== qQ && "locked" !== qQ.lampLightStatus,
          status: null !== (XQ = null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) && void 0 !== XQ ? XQ : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(zQ)
          }),
          releasing: null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.lampLightReleasing) && void 0 !== wQ && wQ,
          gained: null === qQ || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) && sQ && !this.isPending(),
          situation: this.situation,
          shop: null === TQ ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: TQ.lampLightOddsRod,
              island: this.translate(TQ.lampLightIslandNameKey)
            }),
            heldRod: null !== TQ.lampLightHeldRod,
            charms: TQ.lampLightCharms.map((QQ => this.charmView(QQ, TQ, zQ))),
            tints: TQ.lampLightTints.map((QQ => {
              const WQ = QQ.lampLightTintId,
                [XQ, wQ, qQ] = QQ.lampLightTintColour;
              return {
                id: WQ,
                name: this.translate(`skyblockGame:lampLightTint${WQ.charAt(0).toUpperCase()}${WQ.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(QQ.lampLightTintCost)
                }),
                owned: QQ.lampLightTintOwned,
                affordable: zQ >= QQ.lampLightTintCost,
                wearing: TQ.lampLightTint === WQ,
                colour: `rgb(${XQ}, ${wQ}, ${qQ})`
              }
            })),
            wearingIslandColours: null === TQ.lampLightTint
          },
          notice: null === PQ ? null : this.translate(PQ),
          sparkle: this.sparkle
        }
      }
    }
    const fw = "skyblockMagmawardView";
    class Sw {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.mB = QQ, this.now = WQ, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = oQ.map((() => 0)), this.wornAt = oQ.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      gj(QQ) {
        var WQ, XQ;
        const wQ = oQ.map(((WQ, XQ) => !0 === QQ.magmawardPiecesWorn[XQ]));
        if (!wQ.includes(!0)) return this.snapshot = null, void this.mB(null);
        const qQ = this.now(),
          TQ = this.snapshot;
        null === TQ && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const zQ = QQ.magmawardFuelCarried,
          sQ = !wQ.includes(!1);
        let FQ = null !== (WQ = null === TQ || void 0 === TQ ? void 0 : TQ.pulse) && void 0 !== WQ ? WQ : null,
          PQ = null !== (XQ = null === TQ || void 0 === TQ ? void 0 : TQ.flare) && void 0 !== XQ ? XQ : null;
        QQ.magmawardFuelBurned ? (FQ = "burn", PQ = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = qQ, this.flareAt = qQ) : null !== TQ && zQ > TQ.fuel && (FQ = "gain", this.pulseToken++, this.pulseAt = qQ), sQ && null !== TQ && !TQ.fullSet && (PQ = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = qQ, this.setLitAt = qQ);
        const gQ = oQ.map(((QQ, WQ) => (wQ[WQ] && null !== TQ && !TQ.pieces[WQ].worn && (this.wornTokens[WQ]++, this.wornAt[WQ] = qQ), {
          itemName: QQ,
          worn: wQ[WQ],
          wornToken: this.wornTokens[WQ],
          justWorn: wQ[WQ] && this.isPlaying(this.wornAt[WQ], qQ)
        })));
        this.snapshot = {
          pieces: gQ,
          wornCount: wQ.filter(Boolean).length,
          fullSet: sQ,
          fuel: zQ,
          fuelState: zQ <= 0 ? "empty" : zQ <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, qQ) ? FQ : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, qQ) ? PQ : null,
          flareToken: this.flareToken,
          setLit: sQ && this.isPlaying(this.setLitAt, qQ),
          setLitToken: this.setLitToken
        }, this.mB(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.mB(null)
      }
      isPlaying(QQ, WQ) {
        return WQ - QQ < 1200
      }
    }
    const tw = "skyblockGlowtideView";
    class ow {
      constructor(QQ) {
        this.mB = QQ, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = QQ => {
          this.arrow = QQ, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      gj(QQ) {
        this.bloom = QQ.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.mB(null))
      }
      afterRender(QQ, WQ) {
        const XQ = this.bloom;
        if (null === XQ || null === QQ) return;
        const wQ = XQ.glowtideBloomX - QQ[0],
          TQ = XQ.glowtideBloomZ - QQ[2],
          zQ = Math.hypot(wQ, TQ),
          sQ = this.snapshot,
          FQ = null !== sQ && void 0 !== sQ && sQ.inRange ? 1 : 0,
          PQ = zQ <= 12.5 + FQ && QQ[1] - XQ.glowtideBloomY <= 10 + FQ;
        !PQ || null !== sQ && void 0 !== sQ && sQ.inRange || this.inRangeToken++;
        const gQ = {
          colour: XQ.glowtideBloomColour,
          inRange: PQ,
          distance: Math.round(zQ),
          inRangeToken: this.inRangeToken
        };
        (null === sQ || gQ.colour !== sQ.colour || gQ.inRange !== sQ.inRange || !PQ && gQ.distance !== sQ.distance) && (this.snapshot = gQ, this.mB(gQ));
        const JQ = qQ.b.computeShortestRotation(WQ, (0, qQ.ub)([wQ, 0, TQ]));
        null === this.arrow || Math.abs(JQ - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${JQ}rad)`, this.arrowTurn = JQ)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.mB(null)
      }
    }
    const ew = "skyblockGlowMeterView";
    class nw {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.mB = QQ, this.now = WQ, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      gj(QQ) {
        const WQ = this.now(),
          {
            glowMeterFill: XQ,
            glowMeterCapacity: wQ
          } = QQ,
          qQ = XQ >= wQ,
          TQ = this.snapshot;
        null !== TQ && (qQ && !TQ.full && (this.fullToken++, this.fullAt = WQ), TQ.full && !qQ ? (this.burstToken++, this.burstAt = WQ) : XQ > TQ.fill && (this.gainToken++, this.gainAt = WQ)), this.snapshot = {
          fill: XQ,
          yJ: wQ,
          ratio: Math.min(1, Math.max(0, XQ / wQ)),
          full: qQ,
          rares: QQ.glowMeterRares,
          ready: qQ && this.isPlaying(this.fullAt, WQ),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, WQ),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, WQ),
          gainToken: this.gainToken
        }, this.mB(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.mB(null)
      }
      isPlaying(QQ, WQ) {
        return WQ - QQ < 2e3
      }
    }
    const xw = "skyblockHushWaitView";
    class Yw {
      constructor(QQ) {
        this.mB = QQ, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      gj(QQ) {
        let {
          hushWaitMs: WQ,
          hushWaitTotalMs: XQ,
          hushWaitLines: wQ
        } = QQ;
        if (this.clearTimers(), this.token++, 0 === wQ.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (WQ <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: wQ[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const qQ = Math.max(null !== XQ && void 0 !== XQ ? XQ : WQ, WQ),
          TQ = qQ - WQ,
          zQ = QQ => qQ * QQ / wQ.length,
          sQ = QQ => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: qQ,
              elapsedMs: TQ,
              line: wQ[QQ],
              lineIndex: QQ
            })
          };
        let FQ = 0;
        for (; FQ + 1 < wQ.length && zQ(FQ + 1) <= TQ;) FQ++;
        sQ(FQ);
        for (let PQ = FQ + 1; PQ < wQ.length; PQ++) this.later(zQ(PQ) - TQ, (() => {
          sQ(PQ)
        }));
        this.later(WQ, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(QQ) {
        this.snapshot = QQ, this.mB(QQ)
      }
      later(QQ, WQ) {
        this.timers.push(setTimeout(WQ, QQ))
      }
      clearTimers() {
        for (const QQ of this.timers) clearTimeout(QQ);
        this.timers = []
      }
    }
    const Nw = "skyblockTideChartsView",
      Zw = 36e5,
      Ow = 864e5;

    function Kw(QQ, WQ, XQ) {
      const [wQ, qQ, TQ, zQ] = QQ.tideChartArea, sQ = Math.floor(WQ), FQ = Math.floor(XQ);
      return sQ >= wQ && sQ <= TQ && FQ >= qQ && FQ <= zQ
    }

    function mw(QQ, WQ, XQ) {
      const [wQ, qQ, TQ, zQ] = QQ.tideChartWater;
      return function(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = 4 - eQ(Math.floor(qQ) - (QQ - XQ), XQ);
        return 5 * eQ(Math.floor(TQ) - (WQ - wQ), wQ) + zQ
      }(wQ, qQ, TQ, zQ, WQ, XQ)
    }

    function Mw(QQ, WQ, XQ) {
      const wQ = QQ.tideCharts;
      for (let qQ = 0; qQ < wQ.length; qQ++)
        if (Kw(wQ[qQ], WQ, XQ)) return wQ[qQ];
      return null
    }

    function Qq(QQ, WQ, XQ) {
      const wQ = Math.max(0, WQ - XQ);
      return wQ > Ow ? QQ("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(wQ / Ow))
      }) : wQ > Zw ? QQ("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(wQ / Zw))
      }) : QQ("skyblockGame:tideChartsTurnSoon")
    }
    class Wq extends JQ {
      constructor(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(QQ, XQ, wQ), this.translate = WQ, this.now = qQ, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.tr = QQ => {
          this.picked = QQ, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      gj(QQ) {
        const WQ = this.message;
        if (null !== WQ)
          for (const wQ of QQ.tideCharts) {
            var XQ;
            const QQ = WQ.tideCharts.find((QQ => QQ.tideChartIsland === wQ.tideChartIsland)),
              qQ = wQ.tideChartLit & ~(null !== (XQ = null === QQ || void 0 === QQ ? void 0 : QQ.tideChartLit) && void 0 !== XQ ? XQ : 0);
            void 0 !== QQ && 0 !== qQ && (this.pulse = {
              island: wQ.tideChartIsland,
              cells: qQ,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = QQ, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(QQ, WQ) {
        var XQ;
        const wQ = null === this.message || Number.isNaN(QQ) ? null : Mw(this.message, QQ, WQ),
          qQ = null !== (XQ = null === wQ || void 0 === wQ ? void 0 : wQ.tideChartIsland) && void 0 !== XQ ? XQ : null,
          TQ = null === wQ ? -1 : function(QQ, WQ, XQ) {
            const [wQ, qQ, TQ, zQ] = QQ.tideChartWater;
            return function(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
              return ((qQ - QQ) / (XQ + zQ)) ** 2 + ((TQ - WQ) / (wQ + zQ)) ** 2 <= 1
            }(wQ, qQ, TQ, zQ, WQ, XQ, 2) ? mw(QQ, WQ, XQ) : -1
          }(wQ, QQ, WQ);
        return (qQ !== this.hereIsland || TQ !== this.hereCell) && (this.hereIsland = qQ, this.hereCell = TQ, null !== qQ && (this.lastIsland = qQ), !0)
      }
      afterRender(QQ) {
        if (null === this.message) return;
        this.lastX = null === QQ ? Number.NaN : QQ[0], this.lastZ = null === QQ ? Number.NaN : QQ[2];
        const WQ = this.locate(this.lastX, this.lastZ),
          XQ = this.expirePulses();
        (WQ || XQ || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const QQ = this.now();
        return !(!this.open || QQ - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = QQ, Qq(this.translate, this.message.tideChartTurnsInMs, QQ - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(QQ, WQ) {
        const XQ = null === this.message ? null : Mw(this.message, QQ, WQ);
        if (null === XQ) return;
        const wQ = mw(XQ, QQ, WQ);
        0 === (XQ.tideChartPreBlank & 1 << wQ) && (this.cast = {
          island: XQ.tideChartIsland,
          cell: wQ,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const QQ = this.now();
        let WQ = !1;
        return 0 !== this.pulse.cells && QQ - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, WQ = !0), null !== this.cast && QQ - this.cast.atMs >= 1500 && (this.cast = null, WQ = !0), WQ
      }
      setTranslator(QQ) {
        this.translate = QQ, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(QQ, WQ) {
        var XQ;
        return null !== (XQ = QQ.tideCharts.find((QQ => QQ.tideChartIsland === WQ))) && void 0 !== XQ ? XQ : null
      }
      describe(QQ) {
        var WQ, XQ, wQ;
        const qQ = QQ.tideChartIsland,
          TQ = [];
        for (let IQ = 0; IQ < 25; IQ++) {
          const WQ = 1 << IQ;
          0 !== (QQ.tideChartLit & WQ) ? TQ.push("lit") : 0 !== (QQ.tideChartClear & WQ) ? TQ.push("clear") : 0 !== (QQ.tideChartPreBlank & WQ) ? TQ.push("shore") : TQ.push("water")
        }
        const zQ = function(QQ) {
            let WQ = 0;
            for (let XQ = QQ >>> 0; 0 !== XQ; XQ &= XQ - 1) WQ++;
            return WQ
          }(QQ.tideChartLit),
          sQ = QQ.tideChartInkCount,
          FQ = this.translate(QQ.tideChartIslandNameKey),
          PQ = this.translate("skyblockGame:tideChartsLit", {
            lit: String(zQ),
            ink: String(sQ)
          }),
          gQ = null === QQ.tideChartPictureNameKey ? null : this.translate(QQ.tideChartPictureNameKey),
          JQ = this.hereIsland === qQ && -1 !== this.hereCell ? this.hereCell : null,
          rQ = [`${FQ}: ${PQ}.`];
        if (null !== gQ && rQ.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: gQ
          })), null !== JQ) {
          const QQ = Math.floor(JQ / 5) + 1,
            WQ = JQ % 5 + 1;
          rQ.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(QQ),
            column: String(WQ)
          }))
        }
        return {
          island: qQ,
          islandName: FQ,
          cells: TQ,
          hereCell: JQ,
          lit: zQ,
          ink: sQ,
          litText: PQ,
          pictureName: gQ,
          gridLabel: rQ.join(" "),
          pulseCells: this.pulse.island === qQ ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (WQ = this.cast) || void 0 === WQ ? void 0 : WQ.island) === qQ ? this.cast.cell : null,
          castToken: null !== (XQ = null === (wQ = this.cast) || void 0 === wQ ? void 0 : wQ.token) && void 0 !== XQ ? XQ : 0
        }
      }
      buildSnapshot() {
        var QQ, WQ, XQ;
        const wQ = this.message;
        if (null === wQ || 0 === wQ.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const qQ = this.findChart(wQ, this.hereIsland),
          TQ = null !== (QQ = null !== (WQ = null !== (XQ = this.findChart(wQ, this.open ? this.picked : null)) && void 0 !== XQ ? XQ : qQ) && void 0 !== WQ ? WQ : this.findChart(wQ, this.lastIsland)) && void 0 !== QQ ? QQ : wQ.tideCharts[0],
          zQ = null === qQ ? null : this.describe(qQ);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: zQ,
          card: TQ === qQ ? zQ : this.describe(TQ),
          turnsText: Qq(this.translate, wQ.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(wQ.tideChartBookCount)
          }),
          tabs: wQ.tideCharts.map((QQ => ({
            island: QQ.tideChartIsland,
            name: this.translate(QQ.tideChartIslandNameKey),
            selected: QQ.tideChartIsland === TQ.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Xq = "skyblockRegularsView",
      wq = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      qq = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Tq(QQ, WQ) {
      return "given" === QQ ? WQ.given : "owed" === QQ ? WQ.owed : WQ.goal
    }
    class zq extends JQ {
      constructor(QQ, WQ, XQ, wQ) {
        super(QQ, XQ, wQ), this.translate = WQ, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = QQ => QQ, this.openIsland = QQ => {
          this.selected = QQ, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = QQ => {
          this.selected = QQ, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      gj(QQ) {
        this.message = QQ, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const QQ = this.openedFromReachLog;
        return this.openedFromReachLog = !1, QQ
      }
      setTranslator(QQ, WQ, XQ) {
        this.translate = QQ, void 0 !== XQ && (this.itemName = XQ), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(QQ, WQ, XQ) {
        return {
          text: this.translate(Tq(QQ, WQ), XQ),
          given: "given" === QQ
        }
      }
      describeRegular(QQ, WQ) {
        const XQ = this.translate,
          wQ = null !== QQ.regularKg,
          qQ = QQ.regularMeetings,
          TQ = wQ ? 0 === qQ ? XQ("skyblockGame:regularsNotMet") : 1 === qQ ? XQ("skyblockGame:regularsMeetingsOne") : XQ("skyblockGame:regularsMeetings", {
            count: qQ
          }) : "";
        return {
          id: QQ.regularId,
          name: XQ(QQ.regularNameKey),
          line: XQ(QQ.regularLineKey),
          itemName: QQ.regularFishItem,
          fishName: this.itemName(QQ.regularFishItem),
          tagged: wQ,
          size: null === QQ.regularKg ? XQ("skyblockGame:regularsNotTagged") : XQ("skyblockGame:regularsSize", {
            kg: QQ.regularKg.toFixed(1)
          }),
          meetings: TQ,
          chance: XQ("skyblockGame:regularsChance", {
            count: QQ.regularOneInCasts
          }),
          resting: QQ.regularRestingToday,
          gifts: [{
            text: XQ("skyblockGame:regularsGiftFlare"),
            given: qQ >= 3
          }, this.describeGift(QQ.regularTintGift, wq, {
            tint: XQ(QQ.regularTintNameKey)
          })],
          history: [...QQ.regularHistory].reverse().map((QQ => {
            const wQ = QQ.regularMeetingKg.toFixed(1),
              qQ = WQ - QQ.regularMeetingDay;
            return qQ <= 0 ? XQ("skyblockGame:regularsToday", {
              kg: wQ
            }) : XQ("skyblockGame:regularsDaysAgo", {
              days: qQ,
              kg: wQ
            })
          }))
        }
      }
      describeIsland(QQ, WQ) {
        return {
          id: QQ.regularsIslandId,
          name: this.translate(QQ.regularsIslandNameKey),
          charm: this.describeGift(QQ.regularsCharmGift, qq, {
            charm: this.translate(QQ.regularsCharmNameKey)
          }),
          regulars: QQ.regularsList.map((QQ => this.describeRegular(QQ, WQ)))
        }
      }
      buildSnapshot() {
        var QQ, WQ, XQ, wQ;
        const qQ = this.message;
        if (null === qQ) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const TQ = qQ.regularsIslands.map((QQ => this.describeIsland(QQ, qQ.regularsToday))),
          zQ = null !== (QQ = null !== (WQ = null === (XQ = TQ.find((QQ => QQ.id === this.selected))) || void 0 === XQ ? void 0 : XQ.id) && void 0 !== WQ ? WQ : null === (wQ = TQ[0]) || void 0 === wQ ? void 0 : wQ.id) && void 0 !== QQ ? QQ : "";
        return {
          enabled: !0,
          open: this.open,
          selected: zQ,
          islands: TQ
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const sq = "skyblockHiddenWatersView";
    class Fq {
      constructor(QQ) {
        this.mB = QQ, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      gj(QQ) {
        this.snapshot = function(QQ) {
          const [WQ, XQ] = QQ.hiddenWatersMapSize, wQ = (QQ, wQ) => ({
            left: 1 - QQ / WQ,
            top: wQ / XQ
          }), qQ = new Map;
          for (const [zQ, sQ] of QQ.hiddenWatersGlimpses) {
            var TQ;
            const QQ = null !== (TQ = qQ.get(zQ)) && void 0 !== TQ ? TQ : [];
            QQ.push(sQ), qQ.set(zQ, QQ)
          }
          return {
            found: QQ.hiddenWatersFound,
            total: QQ.hiddenWatersTotal,
            aspect: XQ / WQ,
            pins: QQ.hiddenWatersPins.map((QQ => {
              let [WQ, XQ] = QQ;
              return wQ(WQ, XQ)
            })),
            islands: QQ.hiddenWatersIslands.map((QQ => {
              let [qQ, TQ, zQ, sQ] = QQ;
              const {
                left: FQ,
                top: PQ
              } = wQ(zQ + 1, TQ);
              return {
                left: FQ,
                top: PQ,
                width: (zQ + 1 - qQ) / WQ,
                height: (sQ + 1 - TQ) / XQ
              }
            })),
            glimpses: qQ
          }
        }(QQ), this.mB(this.snapshot)
      }
    }
    const Pq = "skyblockDialogueView";
    class gq extends JQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(QQ, XQ, wQ), this.translate = WQ, this.requestDialogue = qQ, this.now = TQ, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = QQ => {
          this.selection = {
            kind: "quest",
            questId: QQ
          }, this.request(), this.show()
        }, this.selectCharacter = QQ => {
          this.selection = {
            kind: "character",
            npcId: QQ
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      gj(QQ) {
        this.received = !0, this.scripts = QQ.questDialogueScripts, this.speakers = new Map(QQ.questDialogueSpeakers.map((QQ => [QQ.dialogueSpeakerId, QQ]))), this.emit()
      }
      setTranslator(QQ) {
        this.translate = QQ, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const QQ = this.now();
        QQ >= this.requestAvailableAt && (this.requestAvailableAt = QQ + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var QQ;
        const WQ = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...WQ,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const XQ = this.selection;
        if ("quest" === XQ.kind) {
          const QQ = this.scripts.find((QQ => QQ.dialogueQuestId === XQ.questId));
          return {
            ...WQ,
            characters: [],
            questFocus: XQ.questId,
            conversations: QQ ? [this.conversation(QQ)] : []
          }
        }
        const wQ = [];
        for (let TQ = this.scripts.length - 1; TQ >= 0; TQ--) {
          const QQ = this.scripts[TQ].dialogueLines;
          for (let WQ = QQ.length - 1; WQ >= 0; WQ--) wQ.includes(QQ[WQ].dialogueSpeakerId) || wQ.push(QQ[WQ].dialogueSpeakerId)
        }
        const qQ = null !== XQ.npcId && wQ.includes(XQ.npcId) ? XQ.npcId : null !== (QQ = wQ[0]) && void 0 !== QQ ? QQ : null;
        return {
          ...WQ,
          characters: wQ.map((QQ => {
            var WQ, XQ;
            return {
              id: QQ,
              styling: null !== (WQ = null === (XQ = this.speakers.get(QQ)) || void 0 === XQ ? void 0 : XQ.dialogueSpeakerStyling) && void 0 !== WQ ? WQ : QQ,
              selected: QQ === qQ
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((QQ => QQ.dialogueLines.some((QQ => QQ.dialogueSpeakerId === qQ)))).map((QQ => this.conversation(QQ))).reverse()
        }
      }
      conversation(QQ) {
        let WQ = null;
        return {
          questId: QQ.dialogueQuestId,
          questName: this.translate(QQ.dialogueQuestNameKey),
          completed: QQ.dialogueQuestCompleted,
          lines: QQ.dialogueLines.map(((QQ, XQ) => {
            var wQ;
            const qQ = QQ.dialogueSpeakerId === WQ || null === (wQ = this.speakers.get(QQ.dialogueSpeakerId)) || void 0 === wQ ? void 0 : wQ.dialogueSpeakerStyling;
            return WQ = QQ.dialogueSpeakerId, {
              key: XQ,
              display: {
                line: {
                  translationKey: QQ.dialogueLineKey,
                  params: this.params(QQ.dialogueLineParams)
                },
                speakerName: qQ,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(QQ) {
        if (void 0 !== QQ) return Object.fromEntries(Object.entries(QQ).map((QQ => {
          let [WQ, XQ] = QQ;
          return [WQ, "string" === typeof XQ ? XQ : this.translate(XQ.translationKey)]
        })))
      }
    }
    var Jq = XQ(646),
      rq = XQ(1302),
      Iq = XQ(105);
    const jq = "skyblockAutographsView";

    function Bq(QQ) {
      const WQ = Jq.i[QQ];
      return {
        label: WQ.chatTag.map((QQ => QQ.str)).join(""),
        icon: WQ.icon,
        colour: WQ.mainRGB
      }
    }
    class yq extends JQ {
      constructor(QQ) {
        let WQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = WQ, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      gj(QQ) {
        this.signatures = QQ.autographSignatures, QQ.autographOpen ? this.show() : this.emit()
      }
      setTranslator(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = WQ, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var QQ;
        const WQ = null !== (QQ = this.signatures) && void 0 !== QQ ? QQ : [],
          XQ = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          wQ = [...WQ].sort(((QQ, WQ) => Number(null !== WQ.autographRank) - Number(null !== QQ.autographRank) || WQ.autographSignedAtMs - QQ.autographSignedAtMs)).map((QQ => ({
            key: `${QQ.autographSignedAtMs}|${QQ.autographSignerName}`,
            name: (0, rq.c)(QQ.autographSignerName, !Iq.featureFlags.canSeeRealPlayerNames),
            rank: null === QQ.autographRank ? null : Bq(QQ.autographRank),
            signedOn: XQ.format(QQ.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: wQ,
          total: wQ.length,
          rankTotal: wQ.filter((QQ => null !== QQ.rank)).length
        }
      }
    }
    const Vq = "skyblockHudView",
      Dq = () => {},
      pq = {
        getItem: () => null,
        setItem: Dq,
        removeItem: Dq
      };
    class Gq {
      constructor(QQ) {
        let {
          translate: WQ,
          translateWithIcons: XQ,
          setMenuOpen: wQ = Dq,
          dismissMenu: qQ = () => {
            wQ(!1)
          },
          publishSkills: TQ = Dq,
          publishQuests: zQ = Dq,
          publishQuestNotification: sQ = Dq,
          publishDungeons: FQ = Dq,
          publishCollections: PQ = Dq,
          publishMap: gQ = Dq,
          publishHud: JQ = Dq,
          publishPortalTransit: rQ = Dq,
          publishDailyReward: jQ = Dq,
          publishMailbox: BQ = Dq,
          publishQuestGraph: yQ = Dq,
          publishForge: VQ = Dq,
          publishSmuggler: DQ = Dq,
          publishKeepersChair: pQ = Dq,
          publishReachLog: GQ = Dq,
          publishLampLight: UQ = Dq,
          publishMagmaward: bQ = Dq,
          publishGlowtide: dQ = Dq,
          publishGlowMeter: HQ = Dq,
          publishHushWait: aQ = Dq,
          publishPassage: lQ = Dq,
          publishTideCharts: hQ = Dq,
          publishRegulars: iQ = Dq,
          publishHiddenWaters: cQ = Dq,
          publishDialogue: AQ = Dq,
          publishAutographs: RQ = Dq,
          isLoadingScreenUp: EQ = () => !1,
          onDailyRewardCoinLanded: CQ = Dq,
          onDailyRewardStarted: uQ = Dq,
          onDailyRewardFinished: LQ = Dq,
          onDailyRewardItemLanded: kQ = Dq,
          onMailboxStarted: fQ = Dq,
          journeyStorage: SQ = pq,
          requestTracking: tQ = Dq,
          requestTravel: oQ = Dq,
          requestDungeonEnter: eQ = Dq,
          requestQuestJump: nQ = Dq,
          requestQuestArrive: xQ = Dq,
          requestForge: YQ = Dq,
          requestSmuggle: NQ = Dq,
          requestKeepersChairAim: ZQ = Dq,
          requestReachLogOpen: OQ = Dq,
          requestLampLight: KQ = Dq,
          requestDialogue: mQ = Dq
        } = QQ;
        this.navigation = void 0, this.map = void 0, this.compass = new vQ, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new aw.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = QQ => QQ, this.close = () => {
          for (const QQ of this.panels) QQ.close()
        }, this.setMenuOpen = wQ, this.publishHud = JQ, this.portalTransit = new SX(rQ, SQ), this.magmaward = new Sw(bQ), this.glowtide = new ow(dQ), this.glowMeter = new nw(HQ), this.hushWait = new Yw(aQ), this.dailyReward = new eX(jQ, (() => EQ() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (QQ => {
          this.quests.setNotificationsHeld(QQ)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), CQ, uQ, LQ, kQ);
        const MQ = QQ => {
          this.panels.some((QQ => QQ.isOpen())) || (QQ ? qQ() : this.setMenuOpen(!1))
        };
        this.skills = new sX(TQ, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), WQ, void 0, void 0, MQ), this.quests = new rX(zQ, tQ, WQ, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, MQ, sQ), this.dungeons = new BX(FQ, WQ, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, MQ, eQ), this.collections = new LX(PQ, WQ, (() => {
          this.beforePanelOpen(this.collections)
        }), MQ), this.map = new IQ(gQ, oQ, WQ, (() => {
          this.beforePanelOpen(this.map)
        }), MQ), this.questGraph = new MX(yQ, WQ, (() => {
          this.beforePanelOpen(this.questGraph)
        }), MQ, nQ, xQ, SQ), this.forge = new Vw(VQ, WQ, (() => {
          this.beforePanelOpen(this.forge)
        }), MQ, YQ), this.smuggler = new Gw(DQ, WQ, (() => {
          this.beforePanelOpen(this.smuggler)
        }), MQ, NQ), this.lampLight = new kw(UQ, WQ, KQ, this.commandPacer), this.keepersChair = new hw(pQ, WQ, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (QQ => {
          this.lampLight.onChairClosed(), MQ(QQ)
        }), ZQ, Date.now, this.commandPacer), this.reachLog = new uw(GQ, WQ, (() => {
          this.beforePanelOpen(this.reachLog)
        }), MQ, OQ, this.commandPacer), this.passage = new Hw(lQ, WQ, (() => {
          this.beforePanelOpen(this.passage)
        }), MQ), this.tideCharts = new Wq(hQ, WQ, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), MQ), this.regulars = new zq(iQ, WQ, (() => {
          this.beforePanelOpen(this.regulars)
        }), (QQ => {
          this.regulars.takeReturnToReachLog() && !QQ && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), MQ(QQ)
        })), this.hiddenWaters = new Fq(cQ), this.dialogue = new gq(AQ, WQ, (() => {
          this.beforePanelOpen(this.dialogue)
        }), MQ, mQ), this.autographs = new yq(RQ, (() => {
          this.beforePanelOpen(this.autographs)
        }), MQ), this.mailbox = new NX(BQ, (() => EQ() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), fQ), this.quests.translateWithIcons = null !== XQ && void 0 !== XQ ? XQ : null, this.skills.onLevelUp = QQ => {
          this.quests.notify(QQ)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new TX(this.map, this.quests, this.compass, WQ)
      }
      getHudSnapshot() {
        const QQ = this.hudSnapshot,
          WQ = this.dailyReward.getHeldCoins();
        return null === QQ || WQ <= 0 || !("hudPurseCoins" in QQ) ? QQ : {
          ...QQ,
          hudPurseCoins: Math.max(0, QQ.hudPurseCoins - WQ)
        }
      }
      receiveHud(QQ) {
        this.hudSnapshot = QQ, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(QQ) {
        this.setMenuOpen(!0);
        const WQ = QQ === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = QQ;
        for (const XQ of this.panels) XQ === QQ || WQ && XQ === this.reachLog || XQ.close();
        this.openingPanel = null
      }
      setTranslator(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WQ => this.resolveItemName(WQ, QQ);
        this.quests.translateWithIcons = null !== XQ && void 0 !== XQ ? XQ : null, this.navigation.setTranslator(QQ, WQ), this.lampLight.setTranslator(QQ, WQ), this.mailbox.setItemName(wQ);
        for (const qQ of this.panels) qQ.setTranslator(QQ, WQ, wQ)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const QQ of this.panels) QQ.dispose()
      }
    }
    var Uq = XQ(1081),
      bq = XQ.n(Uq),
      vq = XQ(26),
      dq = XQ(36891),
      Hq = XQ(3678),
      aq = XQ(1988),
      lq = XQ(1975),
      hq = XQ(34536),
      iq = XQ(1226),
      cq = XQ(1498),
      Aq = XQ(1145);

    function Rq(QQ) {
      let {
        controller: WQ,
        minimap: XQ,
        children: wQ
      } = QQ;
      const TQ = (0, cq.j)(Vq, WQ.getHudSnapshot()),
        [zQ, sQ] = (0, HQ.useState)(WQ.skills.getSnapshot().overallLevel);
      (0, cq.f)(zX, (QQ => {
        sQ(QQ.overallLevel)
      }));
      const FQ = (0, HQ.useRef)(null);
      (0, cq.f)(oX, (QQ => {
        ! function(QQ, WQ) {
          if (null === QQ || "function" !== typeof QQ.animate) return;
          const XQ = WQ ? 1.35 : 1.15;
          QQ.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${XQ})`
          }, {
            transform: "scale(1)"
          }], {
            duration: WQ ? 320 : 160,
            easing: "ease-out"
          }), QQ.classList.toggle("Receiving", !WQ), WQ && (QQ.classList.remove("Shine"), QQ.offsetWidth, QQ.classList.add("Shine"))
        }(FQ.current, QQ)
      }));
      const {
        t: PQ
      } = (0, iq.C)(), {
        isTouchScreen: gQ
      } = (0, vq.n)(["isTouchScreen"]), [JQ, rQ] = (0, HQ.useState)(null);
      return (0, Hq.i)(JQ, ".SkyblockRightHud"), null !== TQ || XQ ? (0, Aq.jsx)(dq.g, {
        placement: "topRight",
        children: (0, Aq.jsxs)("div", {
          className: bq()("SkyblockRightHud", {
            TouchScreen: gQ
          }),
          children: [XQ, null !== TQ && (0, Aq.jsxs)("div", {
            ref: rQ,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in TQ ? (0, Aq.jsx)("div", {
              className: "SkyblockHudHelp",
              children: TQ.hudHelpText
            }) : (0, Aq.jsxs)(Aq.Fragment, {
              children: [(0, Aq.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Aq.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Aq.jsx)("strong", {
                    style: {
                      color: qQ.N.cyanUiText
                    },
                    children: PQ(TQ.hudZoneNameKey)
                  }), null !== zQ && (0, Aq.jsx)("span", {
                    style: {
                      color: qQ.N.goldUiText
                    },
                    children: PQ("skyblockGame:level", {
                      level: (0, hq.f)(zQ)
                    })
                  })]
                }), (0, Aq.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: FQ,
                  children: [(0, Aq.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Aq.jsx)(aq.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, hq.f)(TQ.hudPurseCoins)]
                })]
              }), TQ.hudClockText.length > 0 && (0, Aq.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Aq.jsx)(lq.e, {
                  text: TQ.hudClockText
                })
              })]
            }), wQ, "hudZoneNameKey" in TQ && (0, Aq.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function Eq(QQ) {
      let {
        icon: WQ
      } = QQ;
      const XQ = (0, HQ.useCallback)((QQ => {
        null === QQ || void 0 === QQ || QQ.replaceChildren(YW(WQ))
      }), [WQ]);
      return (0, Aq.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: XQ
      })
    }

    function Cq(QQ) {
      let {
        controller: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)();
      return (0, Aq.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: WQ.display.mountPlayer,
        title: XQ("skyblockGame:mapYouAreHere"),
        children: (0, Aq.jsx)(Eq, {
          icon: "player"
        })
      })
    }
    const uq = XQ(38840),
      Lq = Object.fromEntries(uq.keys().map((QQ => [QQ.replace(/^\.\/(.*)\.png$/, "$1"), uq(QQ)])));

    function kq(QQ, WQ) {
      var XQ;
      return null !== (XQ = Lq[QQ]) && void 0 !== XQ ? XQ : Lq[WQ]
    }

    function fq(QQ) {
      let {
        imageKey: WQ,
        fallbackImageKey: XQ,
        geometryKey: wQ,
        alt: qQ,
        className: TQ
      } = QQ;
      const [zQ, sQ] = (0, HQ.useState)((() => function(QQ, WQ) {
        return [{
          id: 0,
          imageKey: QQ,
          geometryKey: WQ,
          phase: "shown"
        }]
      }(WQ, wQ))), FQ = function(QQ, WQ, XQ) {
        const wQ = QQ[QQ.length - 1];
        if (wQ.imageKey === WQ && wQ.geometryKey === XQ) return QQ;
        const qQ = {
          id: wQ.id + 1,
          imageKey: WQ,
          geometryKey: XQ,
          phase: "entering"
        };
        return wQ.geometryKey === XQ ? [{
          ...wQ,
          phase: "leaving"
        }, qQ] : [qQ]
      }(zQ, WQ, wQ);
      return FQ !== zQ && sQ(FQ), (0, Aq.jsx)(Aq.Fragment, {
        children: FQ.map((QQ => (0, Aq.jsx)("img", {
          className: bq()("SkyblockMapTerrainImage", TQ, {
            Entering: "entering" === QQ.phase,
            Leaving: "leaving" === QQ.phase
          }),
          src: kq(QQ.imageKey, XQ),
          alt: "leaving" === QQ.phase ? "" : qQ,
          onAnimationEnd: () => {
            sQ((WQ => function(QQ, WQ) {
              return QQ.flatMap((QQ => QQ.id !== WQ ? [QQ] : "leaving" === QQ.phase ? [] : [{
                ...QQ,
                phase: "shown"
              }]))
            }(WQ, QQ.id)))
          }
        }, QQ.id)))
      })
    }
    var Sq = XQ(4851),
      tq = XQ(1507);

    function oq(QQ) {
      if ("Tab" !== QQ.key) return;
      const WQ = Array.from(QQ.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        XQ = WQ.indexOf(document.activeElement);
      var wQ;
      if (QQ.shiftKey && XQ <= 0) QQ.preventDefault(), null === (wQ = WQ.at(-1)) || void 0 === wQ || wQ.focus();
      else if (!QQ.shiftKey && (-1 === XQ || XQ === WQ.length - 1)) {
        var qQ;
        QQ.preventDefault(), null === (qQ = WQ[0]) || void 0 === qQ || qQ.focus()
      }
    }

    function eq() {
      const QQ = (0, HQ.useRef)(null);
      return (0, HQ.useCallback)((WQ => {
        var XQ;
        WQ ? (QQ.current = document.activeElement, WQ.focus()) : null === (XQ = QQ.current) || void 0 === XQ || XQ.focus()
      }), [])
    }

    function nq(QQ) {
      let {
        percent: WQ,
        label: XQ,
        levelUpToken: wQ,
        colour: qQ
      } = QQ;
      return (0, Aq.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": XQ,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": WQ,
        "aria-valuetext": XQ,
        children: [(0, Aq.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${WQ/100})`
          }
        }), null !== wQ && void 0 !== wQ && (0, Aq.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": qQ
          }
        }, wQ)]
      })
    }

    function xq(QQ) {
      let {
        mount: WQ
      } = QQ;
      return (0, Aq.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: WQ,
        hidden: !0,
        children: (0, Aq.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Aq.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Aq.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Yq(QQ, WQ, XQ, wQ) {
      (0, HQ.useLayoutEffect)((() => {
        const qQ = QQ.current;
        if (!XQ || null === WQ || void 0 === WQ || !WQ.local || !qQ) return;
        const TQ = Array.from(qQ.querySelectorAll(".SkyblockMapNode")),
          zQ = [...WQ.points, ...WQ.portals],
          sQ = () => {
            const QQ = qQ.clientWidth,
              XQ = qQ.clientHeight,
              sQ = TQ.map(((qQ, TQ) => {
                const sQ = zQ[TQ];
                return {
                  id: sQ.id,
                  portal: TQ >= WQ.points.length,
                  x: sQ.position[0] * QQ / 100,
                  y: sQ.position[1] * XQ / 100,
                  width: qQ.offsetWidth / wQ,
                  height: qQ.offsetHeight / wQ
                }
              })),
              FQ = new Map(zQ.map(((QQ, WQ) => [QQ.id, TQ[WQ]])));
            for (const WQ of function(QQ, WQ, XQ) {
                const wQ = [],
                  qQ = [...QQ].sort(((QQ, WQ) => Number(WQ.portal) - Number(QQ.portal) || QQ.id.localeCompare(WQ.id)));
                for (const TQ of qQ) {
                  const QQ = QQ => Math.max(TQ.width / 2, Math.min(WQ - TQ.width / 2, QQ)),
                    qQ = QQ => Math.max(TQ.height / 2, Math.min(XQ - TQ.height / 2, QQ)),
                    zQ = [QQ(TQ.x)],
                    sQ = [qQ(TQ.y)];
                  for (const WQ of wQ) zQ.push(QQ(WQ.x - (WQ.width + TQ.width) / 2 - 4), QQ(WQ.x + (WQ.width + TQ.width) / 2 + 4)), sQ.push(qQ(WQ.y - (WQ.height + TQ.height) / 2 - 4), qQ(WQ.y + (WQ.height + TQ.height) / 2 + 4));
                  let FQ = {
                      ...TQ,
                      x: zQ[0],
                      y: sQ[0]
                    },
                    PQ = 1 / 0,
                    gQ = 1 / 0;
                  for (const WQ of new Set(zQ))
                    for (const QQ of new Set(sQ)) {
                      let XQ = 0;
                      for (const zQ of wQ) XQ += Math.max(0, (TQ.width + zQ.width) / 2 + 4 - Math.abs(WQ - zQ.x)) * Math.max(0, (TQ.height + zQ.height) / 2 + 4 - Math.abs(QQ - zQ.y));
                      const qQ = (WQ - TQ.x) ** 2 + (QQ - TQ.y) ** 2;
                      (XQ < PQ || XQ === PQ && qQ < gQ) && (FQ = {
                        ...TQ,
                        x: WQ,
                        y: QQ
                      }, PQ = XQ, gQ = qQ)
                    }
                  wQ.push(FQ)
                }
                return wQ
              }(sQ, QQ, XQ)) {
              const QQ = FQ.get(WQ.id);
              QQ.style.left = `${WQ.x}px`, QQ.style.top = `${WQ.y}px`
            }
          };
        sQ();
        const FQ = new ResizeObserver(sQ);
        FQ.observe(qQ);
        for (const QQ of TQ) FQ.observe(QQ);
        return () => {
          FQ.disconnect()
        }
      }), [QQ, WQ, XQ, wQ])
    }
    const Nq = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Zq = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Oq(QQ, WQ, XQ) {
      return Math.min(XQ, Math.max(WQ, QQ))
    }

    function Kq(QQ, WQ, XQ) {
      const wQ = Math.min(1, XQ * WQ / QQ),
        qQ = Math.min(1, QQ / (XQ * WQ));
      return {
        x0: (1 - wQ) / 2,
        y0: (1 - qQ) / 2,
        x1: (1 + wQ) / 2,
        y1: (1 + qQ) / 2
      }
    }

    function mq(QQ, WQ, XQ, wQ) {
      const qQ = WQ * (wQ - XQ);
      if (qQ <= 1) return .5 - WQ * (XQ + wQ) / 2;
      const TQ = .45 * Math.min(1, qQ - 1);
      return Oq(QQ, 1 - WQ * wQ - TQ, TQ - WQ * XQ)
    }

    function Mq(QQ, WQ) {
      const XQ = Oq(QQ.zoom, 1, 12);
      return {
        zoom: XQ,
        x: mq(QQ.x, XQ, WQ.x0, WQ.x1),
        y: mq(QQ.y, XQ, WQ.y0, WQ.y1)
      }
    }

    function QT(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Zq;
      const TQ = Oq(QQ.zoom * WQ, 1, 12),
        zQ = TQ / QQ.zoom;
      return Mq({
        zoom: TQ,
        x: XQ - (XQ - QQ.x) * zQ,
        y: wQ - (wQ - QQ.y) * zQ
      }, qQ)
    }

    function WT(QQ, WQ, XQ, wQ) {
      const [qQ, TQ] = (0, HQ.useState)(Nq);
      (0, HQ.useEffect)((() => {
        TQ(Nq)
      }), [XQ]), (0, HQ.useEffect)((() => {
        const XQ = QQ.current;
        if (!WQ || !XQ) return;
        const qQ = () => Kq(XQ.clientWidth, XQ.clientHeight, wQ),
          zQ = QQ => {
            const WQ = XQ.getBoundingClientRect();
            return {
              x: (QQ.clientX - WQ.left) / WQ.width,
              y: (QQ.clientY - WQ.top) / WQ.height
            }
          },
          sQ = new Map;
        let FQ = {
            x: 0,
            y: 0
          },
          PQ = !1,
          gQ = 0;
        const JQ = QQ => {
            QQ.preventDefault();
            const WQ = QQ.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * QQ.deltaY : QQ.deltaY,
              XQ = zQ(QQ);
            TQ((QQ => QT(QQ, Math.exp(.0015 * -WQ), XQ.x, XQ.y, qQ())))
          },
          rQ = QQ => {
            "mouse" === QQ.pointerType && 0 !== QQ.button || (sQ.set(QQ.pointerId, zQ(QQ)), 1 === sQ.size && (FQ = {
              x: QQ.clientX,
              y: QQ.clientY
            }, PQ = !1), gQ = 0)
          },
          IQ = QQ => {
            const WQ = sQ.get(QQ.pointerId);
            if (!WQ) return;
            const wQ = zQ(QQ);
            if (sQ.set(QQ.pointerId, wQ), 2 === sQ.size) {
              const [QQ, WQ] = [...sQ.values()], XQ = Math.hypot(QQ.x - WQ.x, QQ.y - WQ.y);
              if (gQ > 0) {
                const wQ = XQ / gQ;
                TQ((XQ => QT(XQ, wQ, (QQ.x + WQ.x) / 2, (QQ.y + WQ.y) / 2, qQ())))
              }
              return gQ = XQ, void(PQ = !0)
            }!PQ && Math.hypot(QQ.clientX - FQ.x, QQ.clientY - FQ.y) < 4 || (PQ || (PQ = !0, XQ.setPointerCapture(QQ.pointerId)), TQ((QQ => function(QQ, WQ, XQ) {
              let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zq;
              return Mq({
                zoom: QQ.zoom,
                x: QQ.x + WQ,
                y: QQ.y + XQ
              }, wQ)
            }(QQ, wQ.x - WQ.x, wQ.y - WQ.y, qQ()))))
          },
          jQ = QQ => {
            sQ.delete(QQ.pointerId), gQ = 0
          },
          BQ = QQ => {
            PQ && (QQ.stopPropagation(), QQ.preventDefault(), PQ = !1)
          },
          yQ = new ResizeObserver((() => {
            TQ((QQ => Mq(QQ, qQ())))
          }));
        return yQ.observe(XQ), XQ.addEventListener("wheel", JQ, {
          passive: !1
        }), XQ.addEventListener("pointerdown", rQ), XQ.addEventListener("pointermove", IQ), XQ.addEventListener("pointerup", jQ), XQ.addEventListener("pointercancel", jQ), XQ.addEventListener("click", BQ, !0), () => {
          yQ.disconnect(), XQ.removeEventListener("wheel", JQ), XQ.removeEventListener("pointerdown", rQ), XQ.removeEventListener("pointermove", IQ), XQ.removeEventListener("pointerup", jQ), XQ.removeEventListener("pointercancel", jQ), XQ.removeEventListener("click", BQ, !0)
        }
      }), [QQ, WQ, XQ, wQ]);
      return {
        view: qQ,
        zoomBy: WQ => {
          const XQ = QQ.current;
          XQ && TQ((QQ => QT(QQ, WQ, .5, .5, Kq(XQ.clientWidth, XQ.clientHeight, wQ))))
        }
      }
    }

    function XT(QQ) {
      var WQ, XQ, wQ, qQ;
      let {
        controller: TQ,
        navigation: zQ
      } = QQ;
      const sQ = (0, cq.j)(rQ, TQ.getSnapshot()),
        {
          t: FQ
        } = (0, iq.C)(),
        PQ = eq(),
        gQ = sQ.presentation,
        JQ = (0, HQ.useRef)(null),
        IQ = (0, HQ.useRef)(null),
        jQ = Boolean(sQ.open && (null === gQ || void 0 === gQ ? void 0 : gQ.local) && gQ.background),
        BQ = WT(JQ, jQ, `${sQ.open}|${sQ.tab}|${null===gQ||void 0===gQ||null===(WQ=gQ.background)||void 0===WQ?void 0:WQ.geometryKey}`, null !== (XQ = null === gQ || void 0 === gQ || null === (wQ = gQ.background) || void 0 === wQ ? void 0 : wQ.ratio) && void 0 !== XQ ? XQ : 2);
      if (Yq(IQ, gQ, sQ.open, BQ.view.zoom), !gQ || !sQ.open) return null;
      const yQ = gQ.local ? gQ.background : null,
        VQ = {
          "--map-ratio": String(null !== (qQ = null === yQ || void 0 === yQ ? void 0 : yQ.ratio) && void 0 !== qQ ? qQ : 2),
          backgroundColor: null === yQ || void 0 === yQ ? void 0 : yQ.colour
        },
        DQ = {
          "--map-zoom": String(BQ.view.zoom),
          transform: `translate(${100*BQ.view.x}%, ${100*BQ.view.y}%) scale(${BQ.view.zoom})`
        };
      return (0, Aq.jsx)(Sq.b, {
        show: sQ.open,
        close: TQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: PQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Aq.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockMapTitle",
                children: FQ("skyblockGame:map")
              }), gQ.minimap && (0, Aq.jsx)("p", {
                children: gQ.minimap.caption
              })]
            }), (0, Aq.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((QQ => (0, Aq.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": QQ === sQ.tab ? "true" : void 0,
                className: bq()({
                  Selected: QQ === sQ.tab
                }),
                "aria-pressed": QQ === sQ.tab,
                onClick: () => {
                  TQ.selectTab(QQ)
                },
                children: FQ("local" === QQ ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, QQ)))
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              onClick: TQ.dismiss
            })]
          }), (0, Aq.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Aq.jsxs)("div", {
              ref: JQ,
              className: bq()("SkyblockMapCanvas", {
                Local: gQ.local,
                Overview: !gQ.local,
                Zoomed: BQ.view.zoom > 1
              }),
              style: VQ,
              children: [(0, Aq.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: jQ ? DQ : void 0,
                children: (0, Aq.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: IQ,
                  children: [yQ && (0, Aq.jsx)(fq, {
                    className: "SkyblockMapTerrain",
                    imageKey: yQ.imageKey,
                    fallbackImageKey: yQ.fallbackImageKey,
                    geometryKey: yQ.geometryKey,
                    alt: yQ.label
                  }), gQ.local && (0, Aq.jsx)(xq, {
                    mount: zQ.display.mountMapSearchArea
                  }), !gQ.local && (0, Aq.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: gQ.connections.map((QQ => (0, Aq.jsx)("line", {
                      className: bq()({
                        Explored: QQ.explored
                      }),
                      x1: QQ.start[0],
                      y1: QQ.start[1],
                      x2: QQ.end[0],
                      y2: QQ.end[1]
                    }, QQ.id)))
                  }), gQ.points.map((QQ => {
                    const WQ = !gQ.local && QQ.thumbnail ? Lq[QQ.thumbnail] : void 0;
                    return (0, Aq.jsxs)("div", {
                      className: bq()("SkyblockMapNode", {
                        Current: QQ.current
                      }),
                      style: {
                        left: `${QQ.position[0]}%`,
                        top: `${QQ.position[1]}%`
                      },
                      children: [(0, Aq.jsxs)(tq.h, {
                        className: bq()("SkyblockMapPin", {
                          Unknown: !QQ.visited,
                          Current: QQ.current
                        }),
                        disabled: sQ.pending,
                        onClick: () => {
                          TQ.travel(QQ.travelKind, QQ.travelId)
                        },
                        children: [WQ && (0, Aq.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: WQ,
                          alt: ""
                        }), !WQ && (0, Aq.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Aq.jsx)(Eq, {
                            icon: QQ.icon
                          })
                        }), (0, Aq.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: QQ.name
                        })]
                      }), QQ.current && (0, Aq.jsx)("span", {
                        className: bq()("SkyblockMapHereBadge", {
                          Above: QQ.position[1] > 50
                        }),
                        children: FQ("skyblockGame:mapYouAreHere")
                      })]
                    }, QQ.id)
                  })), gQ.portals.map((QQ => (0, Aq.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${QQ.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${QQ.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Aq.jsxs)(tq.h, {
                      className: "SkyblockMapPin",
                      disabled: sQ.pending,
                      onClick: () => {
                        TQ.travel(QQ.travelKind, QQ.travelId)
                      },
                      children: [(0, Aq.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: QQ.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Aq.jsx)(Eq, {
                          icon: QQ.icon
                        })
                      }), (0, Aq.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: QQ.name
                      })]
                    })
                  }, QQ.id))), gQ.local && (0, Aq.jsx)(Cq, {
                    controller: zQ
                  })]
                })
              }), jQ && (0, Aq.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Aq.jsx)("button", {
                  type: "button",
                  "aria-label": FQ("skyblockGame:mapZoomIn"),
                  disabled: BQ.view.zoom >= 12,
                  onClick: () => {
                    BQ.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Aq.jsx)("button", {
                  type: "button",
                  "aria-label": FQ("skyblockGame:mapZoomOut"),
                  disabled: BQ.view.zoom <= 1,
                  onClick: () => {
                    BQ.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Aq.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: sQ.feedback
              })]
            })
          }), (0, Aq.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [gQ.progress && (0, Aq.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Aq.jsx)("span", {
                children: gQ.progress
              }), (0, Aq.jsx)(nq, {
                percent: gQ.percent,
                label: gQ.progress
              })]
            }), gQ.noLandmarks && (0, Aq.jsx)("span", {
              children: FQ("skyblockGame:mapNoLandmarks")
            }), gQ.canTravel && (0, Aq.jsx)("span", {
              className: "SkyblockMapHint",
              children: FQ("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function wT(QQ) {
      let {
        view: WQ,
        controller: XQ,
        navigation: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, iq.C)(), {
        isTouchScreen: TQ
      } = (0, vq.n)(["isTouchScreen"]);
      return (0, Aq.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": qQ("skyblockGame:mapLocal"),
        children: [TQ && (0, Aq.jsx)(tq.h, {
          className: "SkyblockMinimapOpen",
          onClick: XQ.showLocal,
          children: qQ("skyblockGame:map")
        }), (0, Aq.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: WQ.colour
          },
          children: [(0, Aq.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: wQ.display.mountTerrain,
            style: {
              width: WQ.width,
              height: WQ.height
            },
            children: [(0, Aq.jsx)(fq, {
              imageKey: WQ.imageKey,
              fallbackImageKey: WQ.fallbackImageKey,
              geometryKey: WQ.geometryKey,
              alt: WQ.label
            }), (0, Aq.jsx)(xq, {
              mount: wQ.display.mountMinimapSearchArea
            }), WQ.markers.map((QQ => (0, Aq.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${QQ.position[0]}%`,
                top: `${QQ.position[1]}%`,
                color: QQ.colour
              },
              title: QQ.name,
              children: (0, Aq.jsx)(Eq, {
                icon: QQ.icon
              })
            }, QQ.id)))]
          }), (0, Aq.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: qQ("skyblockGame:mapYouAreHere"),
            children: (0, Aq.jsx)(Eq, {
              icon: "player"
            })
          })]
        }), (0, Aq.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: WQ.caption
        })]
      })
    }

    function qT(QQ) {
      let {
        controller: WQ
      } = QQ;
      return (0, Aq.jsxs)("div", {
        className: "SkyblockCompass",
        ref: WQ.display.mountCompass,
        children: [(0, Aq.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Aq.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Aq.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function TT(QQ) {
      let {
        controller: WQ,
        surface: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, iq.C)(), qQ = (0, cq.j)(zX, WQ.getSnapshot()), TQ = eq();
      return qQ.enabled ? (0, Aq.jsxs)(Aq.Fragment, {
        children: ["hud" === XQ && (0, Aq.jsx)(dq.g, {
          placement: "statBars",
          children: qQ.hud && (0, Aq.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": qQ.hud.colour
            },
            children: [(0, Aq.jsx)(nq, {
              percent: qQ.hud.skill.percent,
              label: qQ.hud.skill.xp,
              levelUpToken: qQ.hud.levelUpToken,
              colour: qQ.hud.colour
            }), (0, Aq.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Aq.jsxs)("span", {
                children: [qQ.hud.skill.label, " \xb7 ", qQ.hud.skill.level]
              }), (0, Aq.jsx)("span", {
                children: qQ.hud.gain
              })]
            })]
          })
        }), "hud" === XQ && (0, Aq.jsx)(dq.g, {
          children: qQ.hud && (0, Aq.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Aq.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Aq.jsx)("strong", {
                children: qQ.hud.skill.label
              }), (0, Aq.jsx)("span", {
                children: qQ.hud.gain
              })]
            }), (0, Aq.jsx)(nq, {
              percent: qQ.hud.skill.percent,
              label: qQ.hud.skill.xp,
              levelUpToken: qQ.hud.levelUpToken,
              colour: qQ.hud.colour
            }), (0, Aq.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Aq.jsx)("span", {
                children: qQ.hud.skill.level
              }), (0, Aq.jsx)("span", {
                children: qQ.hud.skill.xp
              })]
            })]
          })
        }), "menu" === XQ && (0, Aq.jsx)(Sq.b, {
          show: qQ.open,
          close: WQ.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Aq.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: TQ,
            onKeyDown: oq,
            children: [(0, Aq.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Aq.jsxs)("div", {
                children: [(0, Aq.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: wQ("skyblockGame:skills")
                }), (0, Aq.jsx)("p", {
                  children: wQ("skyblockGame:skillsIntro")
                })]
              }), (0, Aq.jsx)(tq.o, {
                padIgnore: !0,
                onClick: WQ.dismiss
              })]
            }), (0, Aq.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Aq.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: qQ.skills.map((QQ => (0, Aq.jsxs)(tq.h, {
                  className: bq()("SkyblockSkillCard", {
                    Selected: QQ.selected
                  }),
                  ariaPressed: QQ.selected,
                  onClick: () => {
                    WQ.select(QQ.id)
                  },
                  children: [(0, Aq.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Aq.jsx)(aq.d, {
                      itemName: QQ.icon,
                      amount: 0
                    })
                  }), (0, Aq.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Aq.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Aq.jsx)("strong", {
                        children: QQ.label
                      }), (0, Aq.jsx)("span", {
                        children: QQ.level
                      })]
                    }), (0, Aq.jsx)(nq, {
                      percent: QQ.percent,
                      label: `${QQ.label}: ${QQ.xp}`
                    }), (0, Aq.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: QQ.xp
                    })]
                  })]
                }, QQ.id)))
              }), qQ.detail && (0, Aq.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Aq.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Aq.jsx)(aq.d, {
                    itemName: qQ.detail.icon,
                    amount: 0
                  })
                }), (0, Aq.jsx)("h3", {
                  children: qQ.detail.label
                }), (0, Aq.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: qQ.detail.level
                }), (0, Aq.jsx)("p", {
                  children: qQ.detail.description
                }), (0, Aq.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Aq.jsx)("strong", {
                    children: wQ("skyblockGame:currentBenefit")
                  }), (0, Aq.jsx)("span", {
                    children: qQ.detail.benefit
                  })]
                }), (0, Aq.jsx)(nq, {
                  percent: qQ.detail.percent,
                  label: qQ.detail.xp
                }), (0, Aq.jsx)("p", {
                  children: qQ.detail.xp
                }), (0, Aq.jsx)("h4", {
                  children: wQ("skyblockGame:earnXp")
                }), (0, Aq.jsx)("ul", {
                  children: qQ.detail.sources.map((QQ => (0, Aq.jsx)("li", {
                    children: QQ
                  }, QQ)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var zT = XQ(1416),
      sT = XQ(5181),
      FT = XQ(382);

    function PT(QQ) {
      let {
        item: WQ
      } = QQ;
      return (0, Aq.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Aq.jsx)(aq.d, {
          itemName: WQ,
          amount: 0
        })
      })
    }

    function gT(QQ) {
      let {
        name: WQ,
        percent: XQ,
        progress: wQ
      } = QQ;
      return (0, Aq.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Aq.jsx)(nq, {
          percent: XQ,
          label: `${(0,FT.wb)(WQ)}: ${wQ}`
        }), (0, Aq.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: wQ
        })]
      })
    }

    function JT(QQ) {
      let {
        subquests: WQ,
        showDescriptions: XQ = !1
      } = QQ;
      return (0, Aq.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: WQ.map((QQ => {
          const WQ = XQ && "completed" === QQ.status,
            wQ = (0, Aq.jsxs)("li", {
              className: bq()("SkyblockQuestStep", QQ.status, {
                JustFinished: QQ.justFinished,
                JustUnlocked: QQ.justUnlocked
              }),
              tabIndex: WQ ? 0 : void 0,
              children: [null !== QQ.iconItem && (0, Aq.jsx)(PT, {
                item: QQ.iconItem
              }), null === QQ.iconItem && (0, Aq.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === QQ.status ? "\u2713" : "skipped" === QQ.status ? "\u2212" : "\u25cb"
              }), (0, Aq.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Aq.jsx)("strong", {
                  children: (0, Aq.jsx)(sT.e, {
                    text: QQ.name
                  })
                }), XQ && !WQ && (0, Aq.jsx)("span", {
                  children: (0, Aq.jsx)(sT.e, {
                    text: QQ.description
                  })
                }), null !== QQ.barPercent && (0, Aq.jsx)(gT, {
                  name: QQ.name,
                  percent: QQ.barPercent,
                  progress: QQ.progress
                }), null === QQ.barPercent && !WQ && (0, Aq.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: QQ.statusLabel
                })]
              })]
            }, QQ.id);
          return WQ ? (0, Aq.jsx)(zT.e, {
            delayShow: 200,
            tooltipInner: (0, Aq.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Aq.jsx)("span", {
                children: (0, Aq.jsx)(sT.e, {
                  text: QQ.description
                })
              }), (0, Aq.jsx)("strong", {
                children: QQ.statusLabel
              })]
            }),
            children: wQ
          }, QQ.id) : wQ
        }))
      })
    }

    function rT(QQ) {
      let {
        quest: WQ,
        select: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, iq.C)(), qQ = WQ.focusStep;
      return (0, Aq.jsxs)(tq.h, {
        className: bq()("SkyblockQuestCard", {
          Selected: WQ.selected,
          Tracked: WQ.tracked
        }),
        onClick: () => {
          XQ(WQ.id)
        },
        children: [(0, Aq.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Aq.jsx)("strong", {
            children: (0, Aq.jsx)(sT.e, {
              text: WQ.name
            })
          }), WQ.tracked && (0, Aq.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: wQ("skyblockGame:currentQuest")
          })]
        }), qQ && (0, Aq.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== qQ.iconItem && (0, Aq.jsx)(PT, {
            item: qQ.iconItem
          }), (0, Aq.jsx)(gT, {
            name: qQ.name,
            percent: qQ.barPercent,
            progress: qQ.progress
          })]
        }), (0, Aq.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: WQ.progress
        })]
      })
    }

    function IT(QQ) {
      let {
        controller: WQ,
        surface: XQ
      } = QQ;
      const wQ = (0, cq.j)(gX, WQ.getSnapshot()),
        {
          t: qQ
        } = (0, iq.C)(),
        TQ = eq();
      return wQ.enabled ? (0, Aq.jsxs)(Aq.Fragment, {
        children: ["hud" === XQ && (0, Aq.jsx)(Aq.Fragment, {
          children: wQ.tracked && (0, Aq.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: PX,
            children: (0, Aq.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [wQ.trackedStepPulse > 0 && (0, Aq.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, wQ.trackedStepPulse), (0, Aq.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: qQ("skyblockGame:currentQuest")
              }), (0, Aq.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Aq.jsx)("strong", {
                  children: (0, Aq.jsx)(sT.e, {
                    text: wQ.tracked.name
                  })
                }), null !== wQ.tracked.clock && (0, Aq.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: wQ.tracked.clock
                })]
              }), (0, Aq.jsx)(JT, {
                subquests: wQ.tracked.subquests
              })]
            })
          })
        }), "menu" === XQ && (0, Aq.jsx)(Sq.b, {
          show: wQ.open,
          close: WQ.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Aq.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: TQ,
            onKeyDown: oq,
            children: [(0, Aq.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Aq.jsx)("div", {
                children: (0, Aq.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: qQ("skyblockGame:quests")
                })
              }), (0, Aq.jsx)(tq.o, {
                padIgnore: !0,
                onClick: WQ.dismiss
              })]
            }), (0, Aq.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Aq.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Aq.jsx)("h3", {
                  children: qQ("skyblockGame:current")
                }), 0 === wQ.active.length && (0, Aq.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: qQ("skyblockGame:noActiveQuests")
                }), wQ.active.map((QQ => (0, Aq.jsx)(rT, {
                  quest: QQ,
                  select: WQ.select
                }, QQ.id))), (0, Aq.jsx)("h3", {
                  children: (0, Aq.jsxs)("button", {
                    type: "button",
                    className: bq()("SkyblockQuestSectionToggle", {
                      Expanded: wQ.completedExpanded
                    }),
                    "aria-expanded": wQ.completedExpanded,
                    onClick: WQ.toggleCompleted,
                    children: [(0, Aq.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), qQ("skyblockGame:completed"), (0, Aq.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: wQ.completed.length
                    })]
                  })
                }), wQ.completedExpanded && 0 === wQ.completed.length && (0, Aq.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: qQ("skyblockGame:noCompletedQuests")
                }), wQ.completedExpanded && wQ.completed.map((QQ => (0, Aq.jsx)(rT, {
                  quest: QQ,
                  select: WQ.select
                }, QQ.id)))]
              }), wQ.detail && (0, Aq.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [wQ.detail.completed && (0, Aq.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: qQ("skyblockGame:completedQuest")
                }), (0, Aq.jsx)("h3", {
                  children: (0, Aq.jsx)(sT.e, {
                    text: wQ.detail.name
                  })
                }), (0, Aq.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Aq.jsx)(sT.e, {
                    text: wQ.detail.description
                  })
                }), (0, Aq.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [wQ.detail.progress, null !== wQ.detail.clock && (0, Aq.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: wQ.detail.clock
                  })]
                }), (0, Aq.jsx)(JT, {
                  subquests: wQ.detail.subquests,
                  showDescriptions: !0
                }), wQ.detail.tracked && (0, Aq.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: wQ.detail.trackLabel
                }), !wQ.detail.completed && !wQ.detail.tracked && (0, Aq.jsx)(tq.s, {
                  onClick: WQ.trackSelected,
                  disabled: !wQ.detail.canTrack,
                  children: wQ.detail.trackLabel
                }), wQ.detail.canViewDialogue && (0, Aq.jsx)(tq.h, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: WQ.viewDialogue,
                  children: qQ("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var jT = XQ(1094),
      BT = XQ(2780);

    function yT(QQ, WQ, XQ, wQ, qQ) {
      const TQ = QQ => "linear" === qQ ? QQ : {
          Zw: qQ,
          point: QQ
        },
        zQ = {};
      for (const [sQ, FQ] of wQ)
        for (const [WQ, XQ] of Object.entries(QQ(sQ, FQ, TQ))) zQ[WQ] ??= {
          timeline: []
        }, zQ[WQ].timeline.push(XQ);
      return {
        ew: WQ,
        loop: XQ,
        xw: zQ
      }
    }
    const VT = .547,
      DT = .022,
      pT = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      GT = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function UT(QQ, WQ, XQ) {
      const {
        drop: wQ = 0,
        shift: qQ = 0,
        torso: TQ = 0,
        nod: zQ = 0,
        tilt: sQ = 0,
        legs: FQ = [0, 0],
        arms: PQ = 0,
        spread: gQ = 0
      } = WQ, JQ = VT * Math.cos(TQ) - DT * Math.sin(TQ), rQ = VT * Math.sin(TQ) + DT * Math.cos(TQ), IQ = XQ([0, -wQ, qQ]);
      return {
        LowerBody: {
          timeFraction: QQ,
          position: IQ,
          rotation: XQ([0, 0, 0])
        },
        UpperBody: {
          timeFraction: QQ,
          position: IQ,
          rotation: XQ([TQ, 0, sQ])
        },
        HeadMesh: {
          timeFraction: QQ,
          position: XQ([0, JQ - VT - wQ, rQ - DT + qQ]),
          rotation: XQ([TQ + zQ, 0, sQ])
        },
        LegLeftMesh: {
          timeFraction: QQ,
          rotation: XQ([FQ[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: QQ,
          rotation: XQ([FQ[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: QQ,
          rotation: XQ([PQ, 0, gQ])
        },
        ArmRightMesh: {
          timeFraction: QQ,
          rotation: XQ([PQ, 0, -gQ])
        }
      }
    }

    function bT(QQ, WQ, XQ) {
      return yT(UT, QQ, WQ, XQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function vT(QQ) {
      return "number" === typeof QQ ? [QQ, QQ] : QQ
    }

    function dT(QQ, WQ, XQ) {
      const {
        rise: wQ = 0,
        shift: qQ = 0,
        torso: TQ = 0,
        twist: zQ = 0,
        tilt: sQ = 0,
        nod: FQ = 0,
        cock: PQ = 0,
        arms: gQ = 0,
        spread: JQ = 0
      } = WQ, [rQ, IQ] = vT(gQ), [jQ, BQ] = vT(JQ);
      return {
        TorsoNode: {
          timeFraction: QQ,
          position: XQ([0, wQ, qQ]),
          rotation: XQ([TQ, zQ, sQ])
        },
        HeadMesh: {
          timeFraction: QQ,
          rotation: XQ([FQ, 0, PQ])
        },
        ArmLeftMesh: {
          timeFraction: QQ,
          rotation: XQ([rQ, 0, jQ])
        },
        ArmRightMesh: {
          timeFraction: QQ,
          rotation: XQ([IQ, 0, -BQ])
        }
      }
    }
    const HT = [1.0625, -1, 0];

    function aT(QQ) {
      return "number" === typeof QQ ? [QQ, QQ] : QQ
    }

    function lT(QQ, WQ, XQ) {
      const {
        drop: wQ = 0,
        shift: qQ = 0,
        torso: TQ = 0,
        tilt: zQ = 0,
        nod: sQ = 0,
        cock: FQ = 0,
        legs: PQ = [0, 0],
        arms: gQ = 0,
        spread: JQ = 0
      } = WQ, [rQ, IQ] = aT(gQ), [jQ, BQ] = aT(JQ), yQ = -TQ, VQ = -zQ, [DQ, pQ, GQ] = function(QQ, WQ) {
        const [XQ, wQ, qQ] = [-HT[0], HT[1], -HT[2]], TQ = XQ * Math.cos(WQ) - wQ * Math.sin(WQ), zQ = XQ * Math.sin(WQ) + wQ * Math.cos(WQ);
        return [TQ - XQ, -(zQ * Math.cos(QQ) - qQ * Math.sin(QQ) - wQ), zQ * Math.sin(QQ) + qQ * Math.cos(QQ) - qQ]
      }(yQ, VQ), UQ = XQ([0, -wQ, qQ]);
      return {
        TorsoNode: {
          timeFraction: QQ,
          position: XQ([DQ, pQ - wQ, GQ + qQ]),
          rotation: XQ([yQ, 0, VQ])
        },
        HeadMesh: {
          timeFraction: QQ,
          rotation: XQ([-sQ, 0, -FQ])
        },
        ArmLeftMesh: {
          timeFraction: QQ,
          rotation: XQ([-rQ, 0, -jQ])
        },
        ArmRightMesh: {
          timeFraction: QQ,
          rotation: XQ([-IQ, 0, BQ])
        },
        LegLeftMesh: {
          timeFraction: QQ,
          position: UQ,
          rotation: XQ([-PQ[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: QQ,
          position: UQ,
          rotation: XQ([-PQ[1], 0, 0])
        }
      }
    }
    var hT = XQ(37437),
      iT = XQ(38756),
      cT = XQ(38918);

    function AT(QQ, WQ, XQ) {
      var wQ, qQ;
      const TQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return QQ + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - QQ) * XQ
        },
        [zQ, sQ] = null !== (wQ = QQ.legs) && void 0 !== wQ ? wQ : [0, 0],
        [FQ, PQ] = null !== (qQ = WQ.legs) && void 0 !== qQ ? qQ : [0, 0];
      return {
        drop: TQ(QQ.drop, WQ.drop),
        shift: TQ(QQ.shift, WQ.shift),
        torso: TQ(QQ.torso, WQ.torso),
        nod: TQ(QQ.nod, WQ.nod),
        tilt: TQ(QQ.tilt, WQ.tilt),
        legs: [TQ(zQ, FQ), TQ(sQ, PQ)],
        arms: TQ(QQ.arms, WQ.arms),
        spread: TQ(QQ.spread, WQ.spread)
      }
    }
    const RT = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      ET = bT(4400, !0, [
        [0, RT],
        [.16, {
          ...RT,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, RT],
        [.44, {
          ...RT,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, AT(RT, pT, .7)],
        [.66, AT(RT, pT, .78)],
        [.74, AT(RT, GT, .65)],
        [.86, {
          ...RT,
          drop: .14
        }],
        [1, RT]
      ], "catmull-rom-spline"),
      CT = {
        ...RT,
        drop: .14,
        torso: .3,
        spread: .4
      },
      uT = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      LT = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      kT = {
        caveGolem: ET,
        magmaGolem: bT(3600, !0, [
          [0, CT],
          [.12, {
            ...CT,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...CT,
            tilt: -.08
          }],
          [.4, {
            ...CT,
            tilt: .06,
            drop: .11
          }],
          [.52, AT(CT, pT, .9)],
          [.62, AT(CT, GT, .8)],
          [.7, AT(CT, GT, .45)],
          [.78, AT(CT, GT, .85)],
          [.9, {
            ...CT,
            drop: .17
          }],
          [1, CT]
        ], "catmull-rom-spline"),
        frostWraith: function(QQ, WQ, XQ) {
          return yT(dT, QQ, WQ, XQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, uT],
          [.14, {
            ...uT,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...uT,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...uT,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...uT,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...uT,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...uT,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...uT,
            rise: .16,
            tilt: -.04
          }],
          [1, uT]
        ], "catmull-rom-spline"),
        tikiTerror: function(QQ, WQ, XQ) {
          return yT(lT, QQ, WQ, XQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, LT],
          [.16, {
            ...LT,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, LT],
          [.44, {
            ...LT,
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
            ...LT,
            drop: .1
          }],
          [1, LT]
        ], "catmull-rom-spline")
      },
      fT = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      ST = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      tT = Object.fromEntries(Object.entries(kT).map((QQ => {
        let [WQ, XQ] = QQ;
        return [WQ, (0, cT.e)((0, hT.f)(XQ), WQ)]
      })));

    function oT(QQ) {
      const WQ = function(QQ) {
        var WQ;
        const XQ = (0, iT.c)(QQ).poseRig;
        return null !== (WQ = ST[QQ]) && void 0 !== WQ ? WQ : void 0 === XQ ? null : fT[XQ]
      }(QQ);
      return null === WQ ? null : tT[WQ]
    }

    function eT(QQ) {
      return {
        "--difficulty-colour": QQ
      }
    }
    const nT = (0, HQ.lazy)((() => (0, BT.b)(XQ.e(208).then((() => XQ(41766))), (QQ => QQ.MobPreview))));

    function xT(QQ) {
      var WQ, XQ, wQ;
      let {
        picker: qQ,
        controller: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, iq.C)(), sQ = eq(), {
        page: FQ
      } = qQ;
      return (0, Aq.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: sQ,
        onKeyDown: QQ => {
          "ArrowLeft" === QQ.key ? (QQ.preventDefault(), QQ.stopPropagation(), TQ.previous()) : "ArrowRight" === QQ.key ? (QQ.preventDefault(), QQ.stopPropagation(), TQ.next()) : oq(QQ)
        },
        style: eT(FQ.colour),
        children: [(0, Aq.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Aq.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: qQ.dungeonName
          }), (0, Aq.jsx)(tq.o, {
            padIgnore: !0,
            onClick: TQ.dismiss
          })]
        }), (0, Aq.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Aq.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Aq.jsx)(tq.h, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !qQ.canPrevious,
              onClick: TQ.previous,
              children: (0, Aq.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Aq.jsx)(jT.d, {
                  name: "angle-up"
                })
              })
            }), (0, Aq.jsxs)("div", {
              className: bq()("SkyblockBossPickerBoss", {
                Locked: !FQ.unlocked
              }),
              children: [null !== FQ.bossMobType && (0, Aq.jsx)(HQ.Suspense, {
                fallback: (0, Aq.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Aq.jsx)(nT, {
                  className: "SkyblockBossPickerModel",
                  mobType: FQ.bossMobType,
                  variation: FQ.bossMobVariation,
                  animation: null !== (WQ = oT(FQ.bossMobType)) && void 0 !== WQ ? WQ : void 0
                })
              }), null === FQ.bossMobType && (0, Aq.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Aq.jsx)(tq.h, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !qQ.canNext,
              onClick: TQ.next,
              children: (0, Aq.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Aq.jsx)(jT.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Aq.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [FQ.beaten && (0, Aq.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), FQ.label]
            }), (0, Aq.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (XQ = FQ.bossName) && void 0 !== XQ ? XQ : "???"
            }), (0, Aq.jsxs)("span", {
              className: bq()("SkyblockBossPickerRecord", {
                Locked: null !== FQ.lockedHint
              }),
              children: [null !== FQ.lockedHintHighlight && (0, Aq.jsxs)(Aq.Fragment, {
                children: [FQ.lockedHintHighlight.before, (0, Aq.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: eT(FQ.lockedHintHighlight.colour),
                  children: [null !== FQ.lockedHintHighlight.icon && (0, Aq.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Aq.jsx)(aq.d, {
                      itemName: FQ.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), FQ.lockedHintHighlight.name]
                }), FQ.lockedHintHighlight.after]
              }), null === FQ.lockedHintHighlight && (null !== (wQ = FQ.lockedHint) && void 0 !== wQ ? wQ : FQ.summary)]
            })]
          }), (0, Aq.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: qQ.pages.map((QQ => (0, Aq.jsx)("span", {
              className: bq()("SkyblockBossPickerDot", {
                Current: QQ.current,
                Locked: !QQ.unlocked
              }),
              style: eT(QQ.colour)
            }, QQ.difficulty)))
          }), (0, Aq.jsx)(tq.y, {
            className: "SkyblockBossPickerFight",
            disabled: !FQ.unlocked,
            onClick: TQ.enter,
            children: zQ("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function YT(QQ) {
      let {
        dungeon: WQ,
        select: XQ
      } = QQ;
      return (0, Aq.jsxs)(tq.h, {
        className: bq()("SkyblockDungeonCard", {
          Selected: WQ.selected
        }),
        onClick: () => {
          XQ(WQ.id)
        },
        children: [(0, Aq.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Aq.jsx)("strong", {
            children: WQ.name
          }), (0, Aq.jsx)("span", {
            children: WQ.beatenSummary
          })]
        }), (0, Aq.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: WQ.difficulties.map((QQ => (0, Aq.jsxs)("span", {
            className: bq()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: QQ.beaten
            }),
            style: eT(QQ.colour),
            title: QQ.summary,
            children: [QQ.beaten && (0, Aq.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), QQ.label]
          }, QQ.difficulty)))
        })]
      })
    }

    function NT(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(jX, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = eq();
      return XQ.enabled ? (0, Aq.jsxs)(Sq.b, {
        show: XQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [XQ.picker && (0, Aq.jsx)(xT, {
          picker: XQ.picker,
          controller: WQ
        }), !XQ.picker && (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: wQ("skyblockGame:dungeons")
              }), (0, Aq.jsx)("p", {
                children: wQ("skyblockGame:dungeonsIntro")
              })]
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              onClick: WQ.dismiss
            })]
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Aq.jsx)("div", {
              className: "SkyblockDungeonList",
              children: XQ.dungeons.map((QQ => (0, Aq.jsx)(YT, {
                dungeon: QQ,
                select: WQ.select
              }, QQ.id)))
            }), XQ.detail && (0, Aq.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Aq.jsx)("h3", {
                children: XQ.detail.name
              }), (0, Aq.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: XQ.detail.difficulties.map((QQ => (0, Aq.jsxs)("li", {
                  className: bq()("SkyblockDungeonRecord", {
                    Beaten: QQ.beaten
                  }),
                  children: [(0, Aq.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: eT(QQ.colour),
                    children: [QQ.beaten && (0, Aq.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), QQ.label]
                  }), (0, Aq.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: QQ.summary
                  })]
                }, QQ.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function ZT(QQ) {
      let {
        collection: WQ,
        select: XQ
      } = QQ;
      return (0, Aq.jsxs)(tq.h, {
        className: bq()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: WQ.selected,
          Locked: WQ.locked
        }),
        ariaPressed: WQ.selected,
        onClick: () => {
          XQ(WQ.id)
        },
        children: [(0, Aq.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Aq.jsx)(aq.d, {
            itemName: WQ.icon,
            amount: 0
          })
        }), (0, Aq.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Aq.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Aq.jsx)("strong", {
              children: WQ.name
            }), (0, Aq.jsx)("span", {
              children: WQ.tier
            })]
          }), (0, Aq.jsx)(nq, {
            percent: WQ.percent,
            label: `${WQ.name}: ${WQ.progress}`
          }), (0, Aq.jsx)("span", {
            className: "SkyblockSkillXp",
            children: WQ.progress
          })]
        })]
      })
    }

    function OT(QQ) {
      let {
        collection: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)();
      return (0, Aq.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Aq.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Aq.jsx)(aq.d, {
            itemName: WQ.icon,
            amount: 0
          })
        }), (0, Aq.jsx)("h3", {
          children: WQ.name
        }), (0, Aq.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: WQ.tier
        }), (0, Aq.jsx)("p", {
          children: WQ.locked ? XQ("skyblockGame:collectionLocked") : WQ.count
        }), null !== WQ.nextReward && (0, Aq.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Aq.jsx)("strong", {
            children: XQ("skyblockGame:collectionNextReward")
          }), (0, Aq.jsx)("span", {
            children: WQ.nextReward
          })]
        }), (0, Aq.jsx)(nq, {
          percent: WQ.percent,
          label: WQ.progress
        }), (0, Aq.jsx)("p", {
          children: WQ.progress
        })]
      })
    }

    function KT(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(uX, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = eq();
      return XQ.enabled ? (0, Aq.jsx)(Sq.b, {
        show: XQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: wQ("skyblockGame:collections")
              }), (0, Aq.jsxs)("p", {
                children: [wQ("skyblockGame:collectionsIntro"), " ", XQ.tiersUnlocked]
              })]
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              onClick: WQ.dismiss
            })]
          }), (0, Aq.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: XQ.categories.map((QQ => (0, Aq.jsxs)(tq.h, {
              className: bq()("SkyblockCollectionCategory", {
                Selected: QQ.selected
              }),
              ariaPressed: QQ.selected,
              padTabSelected: QQ.selected,
              onClick: () => {
                WQ.selectCategory(QQ.id)
              },
              children: [(0, Aq.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Aq.jsx)(aq.d, {
                  itemName: QQ.icon,
                  amount: 0
                })
              }), (0, Aq.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Aq.jsx)("strong", {
                  children: QQ.label
                }), (0, Aq.jsx)("span", {
                  children: QQ.tiers
                })]
              })]
            }, QQ.id)))
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Aq.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: XQ.collections.map((QQ => (0, Aq.jsx)(ZT, {
                collection: QQ,
                select: WQ.select
              }, QQ.id)))
            }), XQ.detail && (0, Aq.jsx)(OT, {
              collection: XQ.detail
            })]
          })]
        })
      }) : null
    }
    const mT = ["completed", "active", "available", "locked"],
      MT = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Qz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(ZX, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = eq();
      return XQ.enabled ? (0, Aq.jsx)(Sq.b, {
        show: XQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: wQ("skyblockDevQuests:title")
              }), (0, Aq.jsx)("p", {
                children: wQ("skyblockDevQuests:intro")
              })]
            }), (0, Aq.jsx)(tq.o, {
              onClick: WQ.dismiss
            })]
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [mT.map((QQ => (0, Aq.jsx)("span", {
              className: bq()("SkyblockQuestGraphLegendState", QQ),
              children: wQ(`skyblockDevQuests:state_${QQ}`)
            }, QQ))), MT.map((QQ => (0, Aq.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Aq.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Aq.jsx)("line", {
                  className: bq()("SkyblockQuestGraphEdge", QQ),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), wQ(`skyblockDevQuests:edge_${QQ}`)]
            }, QQ)))]
          }), (0, Aq.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Aq.jsxs)("div", {
              className: bq()("SkyblockQuestGraphCanvas", {
                Planning: XQ.planning
              }),
              style: {
                width: XQ.width,
                height: XQ.height
              },
              children: [(0, Aq.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: XQ.width,
                height: XQ.height,
                "aria-hidden": "true",
                children: [(0, Aq.jsx)("defs", {
                  children: (0, Aq.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Aq.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), XQ.edges.map((QQ => (0, Aq.jsx)("path", {
                  className: bq()("SkyblockQuestGraphEdge", QQ.kind, {
                    InPlan: QQ.inPlan
                  }),
                  d: QQ.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, QQ.key)))]
              }), XQ.nodes.map((QQ => (0, Aq.jsxs)("button", {
                type: "button",
                className: bq()("SkyblockQuestGraphNode", QQ.state, {
                  InPlan: QQ.inPlan,
                  Hovered: QQ.hovered
                }),
                style: {
                  left: QQ.left,
                  top: QQ.top,
                  width: 190,
                  height: 52
                },
                title: QQ.id,
                onMouseEnter: () => {
                  WQ.hover(QQ.id)
                },
                onMouseLeave: () => {
                  WQ.hover(null)
                },
                onFocus: () => {
                  WQ.hover(QQ.id)
                },
                onBlur: () => {
                  WQ.hover(null)
                },
                onClick: () => {
                  WQ.jump(QQ.id)
                },
                children: [(0, Aq.jsx)("strong", {
                  children: QQ.name
                }), (0, Aq.jsx)("span", {
                  children: QQ.detail
                })]
              }, QQ.id)))]
            })
          })]
        })
      }) : null
    }
    const Wz = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Xz = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Fw}ms`,
        "--forge-duration": "2150ms"
      },
      wz = Array.from({
        length: 18
      }, ((QQ, WQ) => ({
        "--ember-left": `${(4+92*(.618034*WQ%1)).toFixed(1)}%`,
        "--ember-size": 3 + WQ % 3 * 2 + "px",
        "--ember-drift": 14 * (WQ % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*WQ%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*WQ%8).toFixed(2)}s`
      })));

    function qz(QQ) {
      if (QQ.style.removeProperty("--part-size"), null === QQ.parentElement || "wrap" === getComputedStyle(QQ.parentElement).flexWrap) return;
      const WQ = [...QQ.children],
        XQ = getComputedStyle(QQ),
        wQ = parseFloat(XQ.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        qQ = (QQ.clientHeight - parseFloat(XQ.rowGap) * (WQ.length - 1)) / WQ.length,
        TQ = WQ.map((QQ => {
          const WQ = getComputedStyle(QQ),
            XQ = QQ.querySelector("h3"),
            TQ = QQ.querySelector(".SkyblockForgeParts");
          if (null === XQ || null === TQ) return wQ;
          const zQ = qQ - parseFloat(WQ.paddingTop) - parseFloat(WQ.paddingBottom) - XQ.offsetHeight - parseFloat(getComputedStyle(XQ).marginBottom),
            sQ = parseFloat(getComputedStyle(TQ).columnGap),
            FQ = TQ.children.length;
          let PQ = 0;
          for (let wQ = 1; wQ <= FQ; wQ++) {
            const QQ = Math.ceil(FQ / wQ);
            PQ = Math.max(PQ, Math.min((TQ.clientWidth - sQ * (wQ - 1)) / wQ, (zQ - sQ * (QQ - 1)) / QQ))
          }
          return PQ
        }));
      QQ.style.setProperty("--part-size", `${Math.floor(Math.max(wQ,Math.min(...TQ)))}px`)
    }

    function Tz(QQ) {
      var WQ, XQ, wQ, TQ, zQ;
      let {
        controller: sQ
      } = QQ;
      const FQ = (0, cq.j)(Bw, sQ.getSnapshot()),
        {
          t: PQ
        } = (0, iq.C)(),
        gQ = eq(),
        JQ = function() {
          const QQ = (0, HQ.useRef)(null),
            WQ = (0, HQ.useRef)(null);
          return (0, HQ.useLayoutEffect)((() => {
            null !== QQ.current && qz(QQ.current)
          })), (0, HQ.useCallback)((XQ => {
            var wQ;
            null === (wQ = WQ.current) || void 0 === wQ || wQ.disconnect(), WQ.current = null, QQ.current = XQ, null !== XQ && (WQ.current = new ResizeObserver((() => {
              qz(XQ)
            })), WQ.current.observe(XQ))
          }), [])
        }(),
        rQ = function(QQ) {
          const WQ = (0, HQ.useRef)(null);
          return (0, HQ.useLayoutEffect)((() => {
            const QQ = WQ.current;
            if (null !== QQ) {
              QQ.style.removeProperty("font-size");
              for (let WQ = 1.7; WQ > 1.1 && QQ.scrollWidth > QQ.clientWidth; WQ -= .1) QQ.style.fontSize = WQ - .1 + "rem"
            }
          }), [QQ]), (0, HQ.useCallback)((QQ => {
            WQ.current = QQ
          }), [])
        }(null === (WQ = FQ.preview) || void 0 === WQ ? void 0 : WQ.name),
        IQ = (0, HQ.useRef)(null),
        jQ = (0, HQ.useRef)({}),
        BQ = FQ.forging,
        yQ = null !== (XQ = null === BQ || void 0 === BQ ? void 0 : BQ.preview.tier) && void 0 !== XQ ? XQ : 0,
        VQ = null !== (wQ = null === BQ || void 0 === BQ ? void 0 : BQ.preview.named) && void 0 !== wQ && wQ,
        DQ = (0, HQ.useMemo)((() => {
          return null === BQ ? null : {
            flames: (QQ = yQ, WQ = VQ, Array.from({
              length: 26 + 6 * QQ + (WQ ? 20 : 0)
            }, ((QQ, WQ) => {
              const XQ = WQ < 6,
                wQ = Math.random() * Math.PI * 2,
                qQ = XQ ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                TQ = Math.cos(wQ) * qQ,
                zQ = Math.sin(wQ) * qQ - 2 - 3 * Math.random(),
                sQ = Math.random(),
                [FQ, PQ, gQ] = XQ ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : sQ < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : sQ < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [sQ < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": FQ,
                "--x0": `${(.15*TQ).toFixed(2)}rem`,
                "--y0": `${(.15*zQ).toFixed(2)}rem`,
                "--x": `${TQ.toFixed(2)}rem`,
                "--y": `${zQ.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${PQ.toFixed(2)}rem`,
                "--duration": `${Math.round(gQ)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: Jw(yQ, VQ)
          };
          var QQ, WQ
        }), [null === BQ || void 0 === BQ ? void 0 : BQ.id]);
      if (!FQ.enabled) return null;
      const pQ = FQ.preview,
        GQ = FQ.arriving,
        UQ = null !== GQ && !GQ.sameSword,
        bQ = null !== pQ && (0, Aq.jsx)(aq.d, {
          itemName: pQ.baseSword,
          amount: 0,
          enchantmentTier: pQ.enchantmentTier
        });
      return (0, Aq.jsx)(Sq.b, {
        show: FQ.open,
        close: sQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: gQ,
          onKeyDown: oq,
          children: [(0, Aq.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: wz.map(((QQ, WQ) => (0, Aq.jsx)("span", {
              style: QQ
            }, WQ)))
          }), (0, Aq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: PQ("skyblockGame:forgeTitle")
              }), (0, Aq.jsx)("p", {
                children: PQ("skyblockGame:forgeIntro")
              })]
            }), (0, Aq.jsx)(tq.o, {
              onClick: sQ.dismiss
            })]
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Aq.jsx)("div", {
              ref: JQ,
              className: bq()("SkyblockForgeSlots", {
                Locked: null !== BQ
              }),
              children: FQ.slots.map((QQ => (0, Aq.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Aq.jsx)("h3", {
                  children: QQ.label
                }), (0, Aq.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: QQ.parts.map((WQ => (0, Aq.jsx)("button", {
                    type: "button",
                    className: bq()("SkyblockForgePart", {
                      Selected: WQ.selected,
                      Missing: WQ.placeholder
                    }),
                    disabled: WQ.placeholder,
                    title: WQ.placeholder ? PQ("skyblockGame:forgePickParts") : WQ.itemName,
                    "aria-pressed": WQ.selected,
                    onClick: () => {
                      sQ.select(QQ.kind, WQ.material)
                    },
                    children: (0, Aq.jsx)(aq.d, {
                      itemName: WQ.itemName,
                      amount: WQ.owned
                    })
                  }, WQ.material)))
                })]
              }, QQ.kind)))
            }), (0, Aq.jsxs)("div", {
              className: bq()("SkyblockForgeAnvil", {
                Named: null === pQ || void 0 === pQ ? void 0 : pQ.named
              }),
              style: {
                "--tier": null === pQ ? "transparent" : qQ.kb[pQ.enchantmentTier]
              },
              children: [(0, Aq.jsxs)("div", {
                className: bq()("SkyblockForgeAltar", {
                  Forging: null !== BQ
                }),
                style: null === BQ ? void 0 : Xz,
                children: [(0, Aq.jsxs)("div", {
                  className: bq()("SkyblockForgeMount", {
                    Arrive: null !== GQ
                  }),
                  children: [null === pQ && (0, Aq.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Aq.jsx)(aq.d, {
                      itemName: FQ.unformedSword,
                      amount: 0
                    })
                  }), null !== pQ && (0, Aq.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== pQ && null === BQ && (0, Aq.jsx)("div", {
                    ref: IQ,
                    className: "SkyblockForgeFloat",
                    children: (0, Aq.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: bQ
                    })
                  }), null !== pQ && (0, Aq.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: gw.map(((QQ, WQ) => (0, Aq.jsx)("span", {
                      className: bq()({
                        Rune: "" !== QQ.rune
                      }),
                      style: QQ.style,
                      children: QQ.rune
                    }, WQ)))
                  }), null !== BQ && null !== DQ && (0, Aq.jsxs)(Aq.Fragment, {
                    children: [(0, Aq.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Aq.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: DQ.flames.map(((QQ, WQ) => (0, Aq.jsx)("span", {
                        style: QQ
                      }, WQ)))
                    }), (0, Aq.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: jQ.current,
                      children: (0, Aq.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: bQ
                      })
                    }), (0, Aq.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Aq.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (yQ >= 4 || VQ) && (0, Aq.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Aq.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: DQ.sparks.map(((QQ, WQ) => (0, Aq.jsx)("span", {
                        style: QQ
                      }, WQ)))
                    }), (0, Aq.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Aq.jsx)("p", {
                  className: bq()("SkyblockForgeStatus", null === (TQ = FQ.status) || void 0 === TQ ? void 0 : TQ.tone),
                  children: null === (zQ = FQ.status) || void 0 === zQ ? void 0 : zQ.text
                })]
              }), null === pQ && (0, Aq.jsx)("p", {
                className: bq()("SkyblockForgeName Waiting", {
                  ArriveText: UQ
                }),
                children: PQ(FQ.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== pQ && (0, Aq.jsx)("h3", {
                ref: rQ,
                className: bq()("SkyblockForgeName", {
                  ArriveText: UQ
                }),
                title: pQ.name,
                children: pQ.name
              }), (null === pQ || void 0 === pQ ? void 0 : pQ.named) && (0, Aq.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: PQ("skyblockGame:forgeSecret")
              }), (0, Aq.jsxs)(tq.y, {
                className: "SkyblockForgeButton",
                disabled: !FQ.canForge,
                title: null === pQ ? void 0 : PQ("skyblockGame:forgeCoalOwned", {
                  owned: String(FQ.coalOwned)
                }),
                onClick: () => {
                  jQ.current = function(QQ) {
                    const WQ = null === QQ ? "none" : getComputedStyle(QQ).transform,
                      XQ = new DOMMatrixReadOnly("none" === WQ ? void 0 : WQ);
                    return {
                      "--settle-y": `${XQ.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(XQ.b,XQ.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(IQ.current), jw(), sQ.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [PQ("skyblockGame:forgeButton"), null !== pQ && (0, Aq.jsxs)("span", {
                  className: bq()("SkyblockForgeCost", {
                    Short: pQ.coalShort
                  }),
                  children: [(0, Aq.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Aq.jsx)(aq.d, {
                      itemName: Qw.c,
                      amount: 0
                    })
                  }), pQ.coalCost]
                })]
              })]
            }), (0, Aq.jsxs)("div", {
              className: bq()("SkyblockForgeDetails", {
                Named: null === pQ || void 0 === pQ ? void 0 : pQ.named
              }),
              children: [(0, Aq.jsx)("p", {
                className: bq()("SkyblockForgeLore", {
                  ArriveText: UQ
                }),
                title: null === pQ || void 0 === pQ ? void 0 : pQ.lore,
                children: null === pQ || void 0 === pQ ? void 0 : pQ.lore
              }), (0, Aq.jsxs)("dl", {
                className: bq()("SkyblockForgeStats", {
                  ArriveText: UQ
                }),
                children: [null === pQ && Wz.map((QQ => (0, Aq.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Aq.jsx)("dt", {
                    children: PQ(QQ)
                  }), (0, Aq.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, QQ))), null === pQ || void 0 === pQ ? void 0 : pQ.stats.map((QQ => (0, Aq.jsxs)("div", {
                  className: bq()("SkyblockForgeStat", {
                    Better: QQ.better
                  }),
                  children: [(0, Aq.jsx)("dt", {
                    children: QQ.label
                  }), (0, Aq.jsx)("dd", {
                    children: QQ.value
                  })]
                }, QQ.label)))]
              }), (0, Aq.jsx)("ul", {
                className: bq()("SkyblockForgeEffects", {
                  ArriveText: UQ
                }),
                children: null === pQ || void 0 === pQ ? void 0 : pQ.effects.map((QQ => (0, Aq.jsx)("li", {
                  children: QQ
                }, QQ)))
              })]
            })]
          })]
        })
      })
    }
    const zz = "Doom Rivet",
      sz = "Doom Crest";

    function Fz(QQ) {
      let {
        itemName: WQ,
        amount: XQ,
        owned: wQ
      } = QQ;
      return (0, Aq.jsxs)("span", {
        className: bq()("SkyblockSmugglerPrice", {
          Short: XQ > wQ
        }),
        children: [(0, Aq.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Aq.jsx)(aq.d, {
            itemName: WQ,
            amount: 0
          })
        }), (0, Aq.jsx)("span", {
          children: XQ
        })]
      })
    }

    function Pz(QQ) {
      return QQ.justBought ? "skyblockGame:smugglerJustBought" : QQ.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function gz(QQ) {
      let {
        deal: WQ,
        view: XQ,
        buy: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, iq.C)();
      return (0, Aq.jsxs)("div", {
        className: bq()("SkyblockSmugglerPocket", {
          Bought: WQ.justBought,
          Unaffordable: !WQ.affordable,
          SoldOut: WQ.soldOut && !WQ.justBought
        }),
        children: [(0, Aq.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Aq.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Aq.jsx)(aq.d, {
            itemName: WQ.itemName,
            amount: 0,
            enchantmentTier: WQ.enchantmentTier
          }), WQ.amount > 1 && (0, Aq.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: qQ("skyblockGame:smugglerAmount", {
              amount: WQ.amount
            })
          })]
        }), (0, Aq.jsx)("h3", {
          children: WQ.displayName
        }), (0, Aq.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Aq.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [WQ.rivets > 0 && (0, Aq.jsx)(Fz, {
              itemName: zz,
              amount: WQ.rivets,
              owned: XQ.rivetsOwned
            }), WQ.crests > 0 && (0, Aq.jsx)(Fz, {
              itemName: sz,
              amount: WQ.crests,
              owned: XQ.crestsOwned
            })]
          }), (0, Aq.jsx)(tq.h, {
            className: "SkyblockSmugglerBuy",
            disabled: WQ.soldOut || !WQ.affordable || XQ.pending,
            onClick: () => {
              wQ(WQ.slot)
            },
            children: qQ(Pz(WQ))
          })]
        })]
      }, WQ.justBought ? XQ.boughtCount : 0)
    }

    function Jz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(Dw, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = eq();
      return XQ.enabled ? (0, Aq.jsx)(Sq.b, {
        show: XQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: oq,
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Aq.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Aq.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: wQ("skyblockGame:smugglerTitle")
              }), (0, Aq.jsx)("p", {
                children: wQ("skyblockGame:smugglerIntro")
              })]
            }), (0, Aq.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Aq.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Aq.jsx)(Fz, {
                  itemName: zz,
                  amount: XQ.rivetsOwned,
                  owned: XQ.rivetsOwned
                }), (0, Aq.jsx)(Fz, {
                  itemName: sz,
                  amount: XQ.crestsOwned,
                  owned: XQ.crestsOwned
                })]
              }), (0, Aq.jsx)(tq.o, {
                onClick: WQ.dismiss
              })]
            })]
          }), (0, Aq.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: XQ.deals.map((QQ => (0, Aq.jsx)(gz, {
              deal: QQ,
              view: XQ,
              buy: WQ.buy
            }, QQ.slot)))
          }), (0, Aq.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Aq.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: XQ.rotatesText
            }), null !== XQ.status && (0, Aq.jsx)("span", {
              className: bq()("SkyblockSmugglerStatus", XQ.status.tone),
              children: XQ.status.text
            })]
          })]
        })
      }) : null
    }

    function rz(QQ) {
      let {
        phase: WQ,
        className: XQ
      } = QQ;
      return (0, Aq.jsx)("span", {
        className: bq()("SkyblockMoon", `Moon-${WQ}`, XQ),
        "aria-hidden": "true"
      })
    }

    function Iz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(Uw, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)();
      return XQ.enabled ? (0, Aq.jsx)(dq.g, {
        placement: "statBars",
        children: (0, Aq.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: bq()("SkyblockPassageChip", XQ.open && "Open"),
          "aria-label": wQ("skyblockGame:passageChipLabel", {
            phase: XQ.phaseName
          }),
          title: wQ("skyblockGame:passageChipLabel", {
            phase: XQ.phaseName
          }),
          onMouseDown: QQ => {
            QQ.preventDefault()
          },
          onClick: WQ.toggle,
          children: (0, Aq.jsx)(rz, {
            phase: XQ.phase
          }, XQ.phase)
        })
      }) : null
    }

    function jz(QQ) {
      let {
        fish: WQ
      } = QQ;
      return (0, Aq.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Aq.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Aq.jsx)(aq.d, {
            itemName: WQ.itemName,
            amount: 0
          })
        }), (0, Aq.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: WQ.displayName
          }), (0, Aq.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: WQ.where
          })]
        })]
      })
    }

    function Bz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(Uw, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = eq();
      return XQ.enabled ? (0, Aq.jsx)(Sq.b, {
        show: XQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Aq.jsx)(rz, {
              phase: XQ.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: wQ("skyblockGame:passageTitle")
              }), (0, Aq.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: XQ.phaseName
              })]
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              onClick: WQ.dismiss
            })]
          }), (0, Aq.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: wQ("skyblockGame:passageIntro")
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Aq.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Aq.jsx)("h3", {
                children: wQ("skyblockGame:passageVisiting")
              }), (0, Aq.jsx)("ul", {
                className: "SkyblockPassageList",
                children: XQ.visitors.map((QQ => (0, Aq.jsx)(jz, {
                  fish: QQ
                }, QQ.itemName)))
              })]
            }), (0, Aq.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== XQ.resting && (0, Aq.jsxs)(Aq.Fragment, {
                children: [(0, Aq.jsx)("h3", {
                  children: wQ("skyblockGame:passageResting")
                }), (0, Aq.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Aq.jsx)(jz, {
                    fish: XQ.resting
                  })
                })]
              }), (0, Aq.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Aq.jsx)(rz, {
                  phase: XQ.nextPhase
                }), (0, Aq.jsx)("span", {
                  children: XQ.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function yz() {
      return (0, Aq.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((QQ => (0, Aq.jsx)("i", {
          style: {
            "--sparkle-index": QQ
          }
        }, QQ)))
      })
    }

    function Vz(QQ) {
      var WQ;
      let {
        charm: XQ,
        view: wQ,
        controller: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, iq.C)(), zQ = wQ.shop, sQ = (null === (WQ = wQ.sparkle) || void 0 === WQ ? void 0 : WQ.id) === XQ.id;
      return (0, Aq.jsxs)("li", {
        className: bq()("SkyblockLampLightCharm", XQ.owned && "Owned", XQ.socketed && "Socketed"),
        children: [sQ && (0, Aq.jsx)(yz, {}, wQ.sparkle.count), (0, Aq.jsx)("h4", {
          children: XQ.name
        }), (0, Aq.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: XQ.effect
        }), (0, Aq.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: XQ.lines.map((QQ => (0, Aq.jsxs)("li", {
            className: bq()("SkyblockLampLightOddsLine", "better" === QQ.tone ? "Better" : "worse" === QQ.tone ? "Worse" : "Same"),
            children: [(0, Aq.jsx)("span", {
              className: "Before",
              children: QQ.before
            }), (0, Aq.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Aq.jsx)("span", {
              className: "After",
              children: QQ.after
            })]
          }, QQ.label)))
        }), (0, Aq.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: XQ.owned ? XQ.socketed ? (0, Aq.jsxs)(Aq.Fragment, {
            children: [(0, Aq.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: TQ("skyblockGame:lampLightSocketed")
            }), (0, Aq.jsx)(tq.T, {
              disabled: !wQ.canCommand,
              ariaLabel: TQ("skyblockGame:lampLightRemoveLabel", {
                charm: XQ.name
              }),
              onClick: () => {
                qQ.socket(null)
              },
              children: TQ("skyblockGame:lampLightRemove")
            })]
          }) : (0, Aq.jsx)(tq.h, {
            disabled: !wQ.canCommand || !zQ.heldRod,
            ariaLabel: TQ("skyblockGame:lampLightSocketLabel", {
              charm: XQ.name
            }),
            onClick: () => {
              qQ.socket(XQ.id)
            },
            children: TQ("skyblockGame:lampLightSocket")
          }) : (0, Aq.jsx)(tq.h, {
            disabled: !wQ.canCommand || !XQ.affordable,
            ariaLabel: TQ("skyblockGame:lampLightBuyLabel", {
              item: XQ.name,
              cost: XQ.cost
            }),
            onClick: () => {
              qQ.buy(XQ.id)
            },
            children: XQ.cost
          })
        })]
      })
    }

    function Dz(QQ) {
      var WQ;
      let {
        tint: XQ,
        view: wQ,
        controller: qQ
      } = QQ;
      const {
        t: TQ
      } = (0, iq.C)();
      return (0, Aq.jsxs)("li", {
        className: bq()("SkyblockLampLightTint", XQ.wearing && "Wearing"),
        style: {
          "--tint-colour": XQ.colour
        },
        children: [(null === (WQ = wQ.sparkle) || void 0 === WQ ? void 0 : WQ.id) === XQ.id && (0, Aq.jsx)(yz, {}, wQ.sparkle.count), (0, Aq.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Aq.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: XQ.name
        }), XQ.wearing ? (0, Aq.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: TQ("skyblockGame:lampLightWearing")
        }) : (0, Aq.jsx)(tq.h, {
          disabled: !wQ.canCommand || !XQ.owned && !XQ.affordable,
          ariaLabel: XQ.owned ? TQ("skyblockGame:lampLightWearLabel", {
            tint: XQ.name
          }) : TQ("skyblockGame:lampLightBuyLabel", {
            item: XQ.name,
            cost: XQ.cost
          }),
          onClick: () => {
            XQ.owned ? qQ.wearTint(XQ.id) : qQ.buy(XQ.id)
          },
          children: XQ.owned ? TQ("skyblockGame:lampLightWear") : XQ.cost
        })]
      })
    }

    function pz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(Lw, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = XQ.shop;
      return (0, Aq.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Aq.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: XQ.balance
          }), (0, Aq.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": XQ.releasing,
            className: bq()("SkyblockLampLightSwitch", XQ.releasing && "On"),
            disabled: XQ.releasing ? "ready" !== XQ.status : !XQ.canCommand,
            onClick: () => {
              WQ.setRelease(!XQ.releasing)
            },
            children: [(0, Aq.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Aq.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), wQ("skyblockGame:lampLightRelease")]
          }), (0, Aq.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: wQ("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== XQ.notice && (0, Aq.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: XQ.notice
        }), null !== qQ && (0, Aq.jsxs)(Aq.Fragment, {
          children: [(0, Aq.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Aq.jsx)("h3", {
              children: wQ("skyblockGame:lampLightCharms")
            }), (0, Aq.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: qQ.oddsFor
            }), (0, Aq.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((QQ => (0, Aq.jsx)("button", {
                type: "button",
                "aria-pressed": XQ.situation === QQ,
                className: bq()("SkyblockLampLightSituation", XQ.situation === QQ && "Selected"),
                onClick: () => {
                  WQ.setSituation(QQ)
                },
                children: wQ("open" === QQ ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, QQ)))
            })]
          }), !qQ.heldRod && (0, Aq.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: wQ("skyblockGame:lampLightHoldRod")
          }), (0, Aq.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: qQ.charms.map((QQ => (0, Aq.jsx)(Vz, {
              charm: QQ,
              view: XQ,
              controller: WQ
            }, QQ.id)))
          }), (0, Aq.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Aq.jsx)("h3", {
              children: wQ("skyblockGame:lampLightTints")
            })
          }), (0, Aq.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Aq.jsxs)("li", {
              className: bq()("SkyblockLampLightTint", "Islands", qQ.wearingIslandColours && "Wearing"),
              children: [(0, Aq.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Aq.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: wQ("skyblockGame:lampLightIslandColours")
              }), qQ.wearingIslandColours ? (0, Aq.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: wQ("skyblockGame:lampLightWearing")
              }) : (0, Aq.jsx)(tq.h, {
                disabled: !XQ.canCommand,
                ariaLabel: wQ("skyblockGame:lampLightWearLabel", {
                  tint: wQ("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  WQ.wearTint(null)
                },
                children: wQ("skyblockGame:lampLightWear")
              })]
            }), qQ.tints.map((QQ => (0, Aq.jsx)(Dz, {
              tint: QQ,
              view: XQ,
              controller: WQ
            }, QQ.id)))]
          })]
        })]
      })
    }

    function Gz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(Lw, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)();
      return XQ.releasing ? (0, Aq.jsx)(dq.g, {
        children: (0, Aq.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            WQ.setRelease(!1)
          },
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Aq.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [wQ("skyblockGame:lampLightReleasing"), " \xb7 ", XQ.balance]
          }), (0, Aq.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: wQ("skyblockGame:lampLightKeepCatches")
          }), null !== XQ.gained && (0, Aq.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: XQ.gained.text
          }, XQ.gained.count)]
        })
      }) : null
    }

    function Uz(QQ) {
      let {
        island: WQ,
        view: XQ,
        aim: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, iq.C)(), TQ = WQ.featuredFish;
      return (0, Aq.jsxs)("li", {
        className: bq()("SkyblockKeepersChairIsland", `Island-${WQ.id}`, WQ.favoured && "Aimed", !WQ.relit && "Dark"),
        children: [(0, Aq.jsx)("h3", {
          children: WQ.name
        }), WQ.relit && null !== TQ ? (0, Aq.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: qQ("skyblockGame:keepersChairTideNotice")
          }), (0, Aq.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Aq.jsx)(aq.d, {
              itemName: TQ.itemName,
              amount: 0
            })
          }), (0, Aq.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: TQ.displayName
          })]
        }) : (0, Aq.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Aq.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: qQ("skyblockGame:keepersChairDark")
          })
        }), WQ.relit && (WQ.favoured ? (0, Aq.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: qQ("skyblockGame:keepersChairAimed")
        }) : (0, Aq.jsx)(tq.h, {
          className: "SkyblockKeepersChairAim",
          disabled: !XQ.canAim,
          ariaLabel: qQ("skyblockGame:keepersChairAimLabel", {
            island: WQ.name
          }),
          onClick: () => {
            wQ(WQ.id)
          },
          children: qQ("skyblockGame:keepersChairAim")
        }))]
      }, WQ.favoured ? XQ.aimedCount : 0)
    }

    function bz(QQ) {
      let {
        controller: WQ,
        lampLight: XQ
      } = QQ;
      const wQ = (0, cq.j)(lw, WQ.getSnapshot()),
        qQ = (0, cq.j)(Lw, XQ.getSnapshot()),
        [TQ, zQ] = (0, HQ.useState)("lamp"),
        {
          t: sQ
        } = (0, iq.C)(),
        FQ = eq();
      if (!wQ.enabled) return null;
      const PQ = "light" === TQ && qQ.enabled;
      return (0, Aq.jsx)(Sq.b, {
        show: wQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: bq()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", PQ && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: FQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: sQ("skyblockGame:keepersChairTitle")
              }), (0, Aq.jsx)("p", {
                children: sQ(PQ ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              ariaLabel: sQ("skyblockGame:keepersChairClose"),
              onClick: WQ.dismiss
            })]
          }), qQ.enabled && (0, Aq.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((QQ => (0, Aq.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === QQ === PQ,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === QQ === PQ ? "true" : void 0,
              className: bq()("SkyblockKeepersChairTab", "light" === QQ === PQ && "Selected"),
              onClick: () => {
                zQ(QQ)
              },
              children: [sQ("lamp" === QQ ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === QQ && (0, Aq.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: qQ.balance
              })]
            }, QQ)))
          }), PQ ? (0, Aq.jsx)(pz, {
            controller: XQ
          }) : (0, Aq.jsx)(vz, {
            view: wQ,
            controller: WQ
          })]
        })
      })
    }

    function vz(QQ) {
      let {
        view: WQ,
        controller: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, iq.C)();
      return (0, Aq.jsxs)(Aq.Fragment, {
        children: [(0, Aq.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: WQ.islands.map((QQ => (0, Aq.jsx)(Uz, {
            island: QQ,
            view: WQ,
            aim: XQ.aim
          }, QQ.id)))
        }), null !== WQ.almanac && (0, Aq.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: wQ("skyblockGame:passageTitle")
          }), (0, Aq.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Aq.jsx)(rz, {
              phase: WQ.almanac.phase
            }), WQ.almanac.phaseName]
          }), (0, Aq.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Aq.jsx)(rz, {
              phase: WQ.almanac.nextPhase
            }), WQ.almanac.next]
          })]
        }), (0, Aq.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: wQ("skyblockGame:keepersChairFavour")
          }), WQ.aimed && (0, Aq.jsx)(tq.T, {
            className: "SkyblockKeepersChairRest",
            disabled: !WQ.canAim,
            onClick: () => {
              XQ.aim(null)
            },
            children: wQ("skyblockGame:keepersChairRest")
          })]
        }), null !== WQ.status && (0, Aq.jsx)("p", {
          className: bq()("SkyblockKeepersChairStatus", "refused" === WQ.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: WQ.status.text
        })]
      })
    }

    function dz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)(), wQ = (0, cq.j)(iw, WQ.getSnapshot());
      if (!wQ.enabled) return null;
      const qQ = wQ.freshCount > 0 ? XQ("skyblockGame:reachLogOpenNews", {
        count: wQ.freshCount
      }) : XQ("skyblockGame:reachLogOpen");
      return (0, Aq.jsx)(dq.g, {
        placement: "statBars",
        children: (0, Aq.jsxs)("button", {
          type: "button",
          className: bq()("SkyblockReachLogButton", wQ.freshCount > 0 && "HasNews", wQ.pending && "Pending"),
          "aria-label": qQ,
          title: qQ,
          onClick: WQ.ask,
          children: [wQ.news && (0, Aq.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${wQ.newsToken}`), (0, Aq.jsx)("span", {
            className: bq()("SkyblockReachLogIcon", wQ.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Aq.jsx)(aq.d, {
              itemName: Rw,
              amount: 0
            })
          }, `icon:${wQ.newsToken}`), wQ.freshCount > 0 && (0, Aq.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: wQ.freshCount
          })]
        })
      })
    }

    function Hz(QQ) {
      let {
        gift: WQ
      } = QQ;
      return (0, Aq.jsx)("li", {
        className: bq()("SkyblockRegularsGift", WQ.given && "Given"),
        children: WQ.text
      })
    }

    function az(QQ) {
      let {
        regular: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)();
      return (0, Aq.jsxs)("li", {
        className: bq()("SkyblockRegularsCard", WQ.tagged ? "Tagged" : "Untagged", WQ.resting && "Resting"),
        children: [(0, Aq.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: WQ.fishName,
            children: (0, Aq.jsx)(aq.d, {
              itemName: WQ.itemName,
              amount: 0
            })
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Aq.jsx)("h3", {
              children: WQ.name
            }), (0, Aq.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: WQ.fishName
            })]
          })]
        }), (0, Aq.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: WQ.line
        }), (0, Aq.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: WQ.size
          }), WQ.tagged && (0, Aq.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: WQ.resting ? XQ("skyblockGame:regularsResting") : WQ.meetings
          })]
        }), (0, Aq.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: WQ.chance
        }), (0, Aq.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: WQ.gifts.map((QQ => (0, Aq.jsx)(Hz, {
            gift: QQ
          }, QQ.text)))
        }), WQ.history.length > 0 && (0, Aq.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: WQ.history.map(((QQ, WQ) => (0, Aq.jsx)("li", {
            children: QQ
          }, WQ)))
        })]
      })
    }

    function lz(QQ) {
      let {
        controller: WQ,
        island: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, iq.C)(), qQ = (0, cq.j)(Xq, WQ.getSnapshot()), TQ = qQ.islands.find((QQ => QQ.id === XQ));
      if (!qQ.enabled || void 0 === TQ) return null;
      const zQ = wQ("skyblockGame:regularsOpen");
      return (0, Aq.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": zQ,
        title: zQ,
        onClick: () => {
          WQ.openIsland(XQ)
        },
        children: [(0, Aq.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: wQ("skyblockGame:regularsTitle")
        }), TQ.regulars.map((QQ => (0, Aq.jsx)("span", {
          className: bq()("SkyblockRegularsStripIcon", QQ.tagged && "Tagged"),
          title: QQ.name,
          children: (0, Aq.jsx)(aq.d, {
            itemName: QQ.itemName,
            amount: 0
          })
        }, QQ.id)))]
      })
    }

    function hz(QQ) {
      var WQ;
      let {
        controller: XQ
      } = QQ;
      const wQ = (0, cq.j)(Xq, XQ.getSnapshot()),
        {
          t: qQ
        } = (0, iq.C)(),
        TQ = eq();
      if (!wQ.enabled) return null;
      const zQ = null !== (WQ = wQ.islands.find((QQ => QQ.id === wQ.selected))) && void 0 !== WQ ? WQ : null;
      return (0, Aq.jsx)(Sq.b, {
        show: wQ.open,
        close: XQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: TQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: qQ("skyblockGame:regularsTitle")
              }), (0, Aq.jsx)("p", {
                children: qQ("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              onClick: XQ.dismiss
            })]
          }), (0, Aq.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: wQ.islands.map((QQ => {
              const WQ = QQ.id === wQ.selected;
              return (0, Aq.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": WQ,
                "data-pad-tab": !0,
                "data-pad-selected": WQ ? "true" : void 0,
                className: bq()("SkyblockReachLogTab", `Island-${QQ.id}`, WQ && "Selected", QQ.charm.given && "GoldPage"),
                onClick: () => {
                  XQ.selectIsland(QQ.id)
                },
                children: (0, Aq.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: QQ.name
                })
              }, QQ.id)
            }))
          }), (0, Aq.jsxs)("div", {
            className: bq()("SkyblockRegularsPage", null !== zQ && `Island-${zQ.id}`),
            role: "tabpanel",
            children: [(0, Aq.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: qQ("skyblockGame:regularsHow")
            }), null !== zQ && (0, Aq.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: zQ.regulars.map((QQ => (0, Aq.jsx)(az, {
                regular: QQ
              }, QQ.id)))
            })]
          }), null !== zQ && (0, Aq.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Aq.jsx)("span", {
              className: bq()("SkyblockRegularsCharm", zQ.charm.given && "Given"),
              children: zQ.charm.text
            })
          })]
        })
      })
    }
    const iz = [{
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
      cz = Array.from({
        length: 6
      }, ((QQ, WQ) => ({
        "--x": `${(88*(.618034*WQ%1)).toFixed(1)}%`,
        "--y": `${(10+37*WQ%70).toFixed(1)}%`,
        "--size": 7 + WQ % 3 * 3 + "rem",
        "--drift-x": 3 * (WQ % 3 - 1) + "rem",
        "--drift-y": 2 * (WQ % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + WQ % 4 * 3 + "s",
        "--delay": 2.5 * -WQ + "s"
      }))),
      Az = Array.from({
        length: 14
      }, ((QQ, WQ) => ({
        "--left": `${(3+94*((.618034*WQ+.3)%1)).toFixed(1)}%`,
        "--size": 4 + WQ % 4 * 2 + "px",
        "--sway": WQ % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*WQ%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*WQ%12).toFixed(2)}s`
      }))),
      Rz = (0, HQ.memo)((function(QQ) {
        let {
          island: WQ
        } = QQ;
        return (0, Aq.jsxs)("div", {
          className: bq()("SkyblockReachLogDepths", null !== WQ && `Island-${WQ}`),
          "aria-hidden": "true",
          children: [iz.map(((QQ, WQ) => (0, Aq.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: QQ
          }, `shaft${WQ}`))), cz.map(((QQ, WQ) => (0, Aq.jsx)("span", {
            className: bq()("SkyblockReachLogMote", WQ % 2 === 1 && "Violet"),
            style: QQ
          }, `mote${WQ}`))), Az.map(((QQ, WQ) => (0, Aq.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: QQ
          }, `bubble${WQ}`)))]
        })
      })),
      Ez = 100;

    function Cz(QQ) {
      let {
        view: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)();
      if (null === WQ || 0 === WQ.total) return null;
      const wQ = Ez * WQ.aspect,
        qQ = XQ("skyblockGame:hiddenWatersCount", {
          found: WQ.found,
          total: WQ.total
        });
      return (0, Aq.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${XQ("skyblockGame:hiddenWatersTitle")}: ${qQ}`,
        children: [(0, Aq.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${wQ}`,
          "aria-hidden": "true",
          children: [WQ.islands.map(((QQ, WQ) => (0, Aq.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (QQ.left + QQ.width / 2) * Ez,
            cy: (QQ.top + QQ.height / 2) * wQ,
            rx: QQ.width / 2 * Ez,
            ry: QQ.height / 2 * wQ
          }, WQ))), WQ.pins.map(((QQ, WQ) => (0, Aq.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: QQ.left * Ez,
            cy: QQ.top * wQ,
            r: 13
          }, WQ)))]
        }), (0, Aq.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: XQ("skyblockGame:hiddenWatersTitle")
          }), (0, Aq.jsx)("span", {
            className: WQ.found === WQ.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: qQ
          })]
        })]
      })
    }

    function uz(QQ) {
      let {
        view: WQ,
        island: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, iq.C)(), qQ = null === WQ || void 0 === WQ ? void 0 : WQ.glimpses.get(XQ);
      return void 0 === qQ || 0 === qQ.length ? null : (0, Aq.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Aq.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: wQ("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Aq.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: qQ.map((QQ => (0, Aq.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Aq.jsx)(aq.d, {
              itemName: QQ,
              amount: 0
            })
          }, QQ)))
        })]
      })
    }
    const Lz = ["Bronze", "Silver", "Gold"],
      kz = [{
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
      fz = kz.slice(0, 2);

    function Sz(QQ) {
      return QQ ? kz : fz
    }

    function tz(QQ) {
      let {
        fish: WQ,
        letGoShown: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, iq.C)();
      return (0, Aq.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Lz.map(((QQ, XQ) => {
          const qQ = XQ < WQ.marks;
          return (0, Aq.jsx)("span", {
            className: bq()("SkyblockReachLogPip", QQ, qQ && "Earned", qQ && WQ.fresh && XQ === WQ.marks - 1 && "Newest"),
            title: wQ(Aw[XQ])
          }, QQ)
        })), (0, Aq.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), Sz(XQ).map(((QQ, XQ) => (0, Aq.jsx)("span", {
          className: bq()("SkyblockReachLogRibbon", QQ.className, !0 === WQ.ribbons[XQ] && "Earned"),
          title: wQ(QQ.titleKey)
        }, QQ.className)))]
      })
    }

    function oz(QQ) {
      let {
        letGoShown: WQ,
        haloShown: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, iq.C)();
      return (0, Aq.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Aq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wQ("skyblockGame:reachLogMarks"),
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), wQ("skyblockGame:reachLogLegendMarks")]
        }), Sz(WQ).map((QQ => (0, Aq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wQ(QQ.titleKey),
          children: [(0, Aq.jsx)("span", {
            className: bq()("SkyblockReachLogRibbon", QQ.className, "Earned")
          }), wQ(QQ.legendKey)]
        }, QQ.className))), (0, Aq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wQ("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), wQ("skyblockGame:reachLogLegendGlimmer")]
        }), XQ && (0, Aq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wQ("skyblockGame:reachLogHaloTitle"),
          children: [(0, Aq.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), wQ("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function ez(QQ) {
      let {
        returner: WQ
      } = QQ;
      return (0, Aq.jsxs)("div", {
        className: bq()("SkyblockReachLogReturner", WQ.back && "Back"),
        children: [(0, Aq.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Aq.jsx)(aq.d, {
            itemName: WQ.itemName,
            amount: 0
          })
        }), (0, Aq.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: WQ.line
        })]
      })
    }

    function nz(QQ) {
      let {
        fish: WQ,
        letGoShown: XQ
      } = QQ;
      const {
        t: wQ
      } = (0, iq.C)();
      return (0, Aq.jsxs)("li", {
        className: bq()("SkyblockReachLogCard", WQ.caught ? "Caught" : "Unknown", WQ.marks >= 3 && "GoldCard", WQ.fresh && "Fresh", WQ.visitor && "Visitor"),
        children: [WQ.visitor && (0, Aq.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: wQ("skyblockGame:reachLogVisitor")
        }), WQ.fresh && Array.from({
          length: 4
        }, ((QQ, WQ) => (0, Aq.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, WQ))), (0, Aq.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [WQ.halo && (0, Aq.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: wQ("skyblockGame:reachLogHaloTitle")
          }), (0, Aq.jsx)(aq.d, {
            itemName: WQ.itemName,
            amount: 0
          }), WQ.glimmer && (0, Aq.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: wQ("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Aq.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: WQ.name
        }), (0, Aq.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: WQ.chance
        }), (0, Aq.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: WQ.best
        }), (0, Aq.jsx)(tz, {
          fish: WQ,
          letGoShown: XQ
        })]
      })
    }

    function xz(QQ) {
      let {
        page: WQ,
        letGoShown: XQ,
        hiddenWaters: wQ
      } = QQ;
      const {
        t: qQ
      } = (0, iq.C)();
      return WQ.awake ? (0, Aq.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: WQ.fish.map((QQ => (0, Aq.jsx)(nz, {
          fish: QQ,
          letGoShown: XQ
        }, QQ.itemName)))
      }) : (0, Aq.jsxs)(Aq.Fragment, {
        children: [(0, Aq.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: qQ("skyblockGame:reachLogAsleep")
        }), (0, Aq.jsx)(uz, {
          view: wQ,
          island: WQ.id
        })]
      })
    }

    function Yz(QQ) {
      var WQ, XQ;
      let {
        controller: wQ,
        regulars: qQ,
        hiddenWaters: TQ
      } = QQ;
      const zQ = (0, cq.j)(iw, wQ.getSnapshot()),
        sQ = function(QQ) {
          return (0, cq.j)(sq, QQ.getSnapshot())
        }(TQ),
        FQ = (0, cq.j)(Xq, qQ.getSnapshot()),
        {
          t: PQ
        } = (0, iq.C)(),
        gQ = eq();
      if (!zQ.enabled) return null;
      const JQ = null !== (WQ = zQ.pages.find((QQ => QQ.id === zQ.selected))) && void 0 !== WQ ? WQ : null;
      return (0, Aq.jsx)(Sq.b, {
        show: zQ.open,
        close: wQ.dismiss,
        togglePointerLock: !1,
        className: bq()("SkyblockSkillsOverlay", FQ.open && "SkyblockReachLogUnderLedger"),
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: gQ,
          onKeyDown: oq,
          children: [(0, Aq.jsx)(Rz, {
            island: null !== (XQ = null === JQ || void 0 === JQ ? void 0 : JQ.id) && void 0 !== XQ ? XQ : null
          }), (0, Aq.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: PQ("skyblockGame:reachLogTitle")
              }), (0, Aq.jsx)("p", {
                children: PQ("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Aq.jsx)(Cz, {
              view: sQ
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              onClick: wQ.dismiss
            })]
          }), (0, Aq.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: zQ.pages.map((QQ => {
              const WQ = QQ.id === zQ.selected,
                XQ = QQ.fish.some((QQ => QQ.fresh));
              return (0, Aq.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": WQ,
                "data-pad-tab": !0,
                "data-pad-selected": WQ ? "true" : void 0,
                className: bq()("SkyblockReachLogTab", `Island-${QQ.id}`, WQ && "Selected", !QQ.awake && "Asleep", QQ.gold && "GoldPage", XQ && "HasNews"),
                onClick: () => {
                  wQ.selectPage(QQ.id)
                },
                children: [(0, Aq.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: QQ.name
                }), QQ.awake && (0, Aq.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: PQ("skyblockGame:reachLogCaughtCount", {
                    caught: QQ.caught,
                    total: QQ.total
                  })
                })]
              }, QQ.id)
            }))
          }), (0, Aq.jsxs)("div", {
            className: bq()("SkyblockReachLogPage", null !== JQ && `Island-${JQ.id}`),
            role: "tabpanel",
            children: [null !== JQ && (0, Aq.jsx)(xz, {
              page: JQ,
              letGoShown: zQ.letGoShown,
              hiddenWaters: sQ
            }), !0 === (null === JQ || void 0 === JQ ? void 0 : JQ.awake) && null !== JQ.returner && (0, Aq.jsx)(ez, {
              returner: JQ.returner
            }), !0 === (null === JQ || void 0 === JQ ? void 0 : JQ.awake) && (0, Aq.jsx)(lz, {
              controller: qQ,
              island: JQ.id
            })]
          }), (0, Aq.jsx)("footer", {
            className: bq()("SkyblockReachLogFooter", null !== JQ && `Island-${JQ.id}`, !0 === (null === JQ || void 0 === JQ ? void 0 : JQ.gold) && "GoldPage"),
            children: !0 === (null === JQ || void 0 === JQ ? void 0 : JQ.gold) ? (0, Aq.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: PQ("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Aq.jsxs)(Aq.Fragment, {
              children: [(0, Aq.jsx)(oz, {
                letGoShown: zQ.letGoShown,
                haloShown: !0 === (null === JQ || void 0 === JQ ? void 0 : JQ.fish.some((QQ => QQ.halo)))
              }), (0, Aq.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: PQ("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Nz = XQ(5178);

    function Zz(QQ) {
      let {
        conversation: WQ,
        completedLabel: XQ
      } = QQ;
      return (0, Aq.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Aq.jsxs)("header", {
          children: [(0, Aq.jsx)("h3", {
            children: WQ.questName
          }), WQ.completed && (0, Aq.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: XQ
          })]
        }), WQ.lines.map((QQ => (0, Aq.jsx)(Nz.c, {
          display: QQ.display
        }, QQ.key)))]
      })
    }

    function Oz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)(), wQ = (0, cq.j)(Pq, WQ.getSnapshot()), qQ = eq();
      if (!wQ.enabled) return null;
      const TQ = !wQ.loading && 0 === wQ.conversations.length;
      return (0, Aq.jsx)(Sq.b, {
        show: wQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: XQ("skyblockDialogue:title")
              }), (0, Aq.jsx)("p", {
                children: XQ("skyblockDialogue:intro")
              })]
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              onClick: WQ.dismiss
            })]
          }), (0, Aq.jsxs)("div", {
            className: bq()("SkyblockDialogueBody", {
              SingleColumn: null !== wQ.questFocus || 0 === wQ.characters.length
            }),
            children: [null === wQ.questFocus && wQ.characters.length > 0 && (0, Aq.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: wQ.characters.map((QQ => (0, Aq.jsx)(tq.h, {
                className: bq()("SkyblockDialogueCharacter", {
                  Selected: QQ.selected
                }),
                onClick: () => {
                  WQ.selectCharacter(QQ.id)
                },
                children: (0, Aq.jsx)(lq.e, {
                  text: QQ.styling
                })
              }, QQ.id)))
            }), (0, Aq.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== wQ.questFocus && (0, Aq.jsx)(tq.h, {
                className: "SkyblockDialogueBack",
                onClick: WQ.showCharacters,
                children: XQ("skyblockDialogue:allCharacters")
              }), wQ.loading && (0, Aq.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: XQ("skyblockDialogue:loading")
              }), TQ && (0, Aq.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: XQ(null === wQ.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), wQ.conversations.map((QQ => (0, Aq.jsx)(Zz, {
                conversation: QQ,
                completedLabel: wQ.completedLabel
              }, QQ.questId)))]
            })]
          })]
        })
      })
    }

    function Kz(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(jq, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = eq();
      return XQ.enabled ? (0, Aq.jsx)(Sq.b, {
        show: XQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: wQ("skyblockGame:autographBook")
              }), (0, Aq.jsx)("p", {
                children: wQ("skyblockGame:autographBookIntro")
              })]
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              onClick: WQ.dismiss
            })]
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Aq.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Aq.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Aq.jsx)("strong", {
                  children: XQ.total
                }), (0, Aq.jsx)("span", {
                  children: wQ("skyblockGame:autographTotal")
                })]
              }), (0, Aq.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Aq.jsx)("strong", {
                  children: XQ.rankTotal
                }), (0, Aq.jsx)("span", {
                  children: wQ("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === XQ.entries.length ? (0, Aq.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: wQ("skyblockGame:autographBookEmpty")
            }) : (0, Aq.jsx)("ul", {
              className: "SkyblockAutographList",
              children: XQ.entries.map((QQ => (0, Aq.jsxs)("li", {
                className: bq()("SkyblockAutograph", {
                  Ranked: null !== QQ.rank
                }),
                style: null === QQ.rank ? void 0 : {
                  color: QQ.rank.colour
                },
                children: [null !== QQ.rank && (0, Aq.jsx)(jT.d, {
                  className: "SkyblockAutographRankIcon",
                  name: QQ.rank.icon,
                  kit: (0, jT.e)(QQ.rank.icon)
                }), (0, Aq.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Aq.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: QQ.name
                  }), (0, Aq.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== QQ.rank && (0, Aq.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: QQ.rank.label
                    }), (0, Aq.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: QQ.signedOn
                    })]
                  })]
                })]
              }, QQ.key)))
            })]
          })]
        })
      }) : null
    }
    const mz = (0, HQ.memo)((function(QQ) {
        let {
          controller: WQ
        } = QQ;
        return (0, Aq.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: WQ.display.mountWaypoint,
          children: [(0, Aq.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Aq.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Aq.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Aq.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Aq.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Aq.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Mz = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Qs(QQ) {
      return "next" === QQ.phase ? "\u2192" : Mz[QQ.kind]
    }
    const Ws = (0, HQ.memo)((function(QQ) {
      let {
        controller: WQ,
        display: XQ
      } = QQ;
      const wQ = (0, cq.j)(JX, WQ.getNotificationSnapshot()),
        [qQ, TQ] = (0, HQ.useState)(!1);
      return (0, cq.f)("qteStateUpdated", (QQ => {
        TQ(QQ.isActive)
      })), (0, Aq.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (qQ ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [wQ && (0, Aq.jsxs)("div", {
          className: `SkyblockQuestNotification ${wQ.kind} ${wQ.phase}`,
          style: {
            "--quest-notification-duration": `${wQ.durationMs}ms`,
            ...wQ.accent && {
              "--quest-notification-accent": wQ.accent
            }
          },
          children: [(0, Aq.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (wQ.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Aq.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Qs(wQ)
            }), wQ.iconItem && (0, Aq.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Aq.jsx)(aq.d, {
                itemName: wQ.iconItem,
                amount: 0
              })
            })]
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Aq.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: wQ.title
            }), (0, Aq.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Aq.jsx)(sT.e, {
                text: wQ.name
              })
            }), wQ.description && (0, Aq.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Aq.jsx)(sT.e, {
                text: wQ.description
              })
            }), wQ.reward && (0, Aq.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Aq.jsx)(sT.e, {
                text: wQ.reward
              })
            })]
          })]
        }, wQ.token), (null === wQ || void 0 === wQ ? void 0 : wQ.waypointNameKey) && (0, Aq.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": wQ.waypointNameKey,
          "data-notification-token": wQ.token,
          ref: XQ.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${wQ.token}`)]
      })
    }));

    function Xs(QQ) {
      const WQ = parseInt(QQ.replace("#", ""), 16);
      return `${WQ>>16&255}, ${WQ>>8&255}, ${255&WQ}`
    }
    const ws = (0, HQ.memo)((function(QQ) {
      let {
        controller: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)(), wQ = (0, cq.j)(kX, WQ.getSnapshot());
      if (!wQ) return null;
      const qQ = "arrival" === wQ.phase;
      return (0, Aq.jsxs)("div", {
        className: bq()("SkyblockPortalTransit", {
          Departure: !qQ,
          Arrival: qQ
        }),
        style: {
          "--portal-rgb": Xs(wQ.colour),
          "--portal-duration": `${wQ.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Aq.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Aq.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            WQ.finishArrival(wQ.token)
          }
        }), (0, Aq.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Aq.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !qQ && (0, Aq.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: XQ("skyblockGame:portalTransitHeading")
          }), (0, Aq.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: XQ(wQ.zoneNameKey)
          })]
        })]
      }, wQ.token)
    }));

    function qs() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Ts() {
      const QQ = document.querySelector(".SkyblockHudCoins"),
        WQ = null === QQ || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
      return WQ && WQ.width > 0 ? {
        x: WQ.left + Math.min(WQ.width, 24) / 2,
        y: WQ.top + WQ.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function zs(QQ) {
      return {
        x: QQ.left + QQ.width / 2,
        y: QQ.top + QQ.height / 2
      }
    }

    function ss() {
      var QQ;
      const WQ = null === (QQ = document.querySelector(".HotBar")) || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
      return WQ && WQ.width > 0 ? zs(WQ) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Fs(QQ) {
      let {
        items: WQ,
        origins: XQ,
        target: wQ
      } = QQ;
      return (0, Aq.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: WQ.map(((QQ, WQ) => {
          const qQ = XQ[WQ];
          return (0, Aq.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${qQ.x}px`,
              top: `${qQ.y}px`,
              "--item-dx": wQ.x - qQ.x + "px",
              "--item-dy": wQ.y - qQ.y + "px",
              "--item-delay": 2e3 + 160 * WQ + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Aq.jsx)(aq.d, {
              itemName: QQ.dailyRewardItemName,
              amount: 0
            })
          }, QQ.dailyRewardItemName)
        }))
      })
    }

    function Ps(QQ, WQ) {
      const XQ = -Math.PI / 2 + 1.25 * (QQ / (WQ - 1) * 2 - 1),
        wQ = 70 + QQ % 3 * 22;
      return {
        x: Math.cos(XQ) * wQ,
        y: Math.sin(XQ) * wQ * .7
      }
    }

    function gs(QQ) {
      let {
        origin: WQ,
        target: XQ,
        count: wQ
      } = QQ;
      const qQ = [];
      for (let TQ = 0; TQ < wQ; TQ++) {
        const QQ = Ps(TQ, wQ);
        qQ.push((0, Aq.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${WQ.x}px`,
            top: `${WQ.y}px`,
            "--coin-bx": `${QQ.x}px`,
            "--coin-by": `${QQ.y}px`,
            "--coin-dx": XQ.x - WQ.x + "px",
            "--coin-dy": XQ.y - WQ.y + "px",
            "--coin-delay": `${nX(TQ,wQ)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Aq.jsx)(aq.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, TQ))
      }
      return (0, Aq.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: qQ
      })
    }

    function rs(QQ) {
      let {
        day: WQ
      } = QQ;
      const XQ = aQ[WQ - 1];
      return (0, Aq.jsxs)(Aq.Fragment, {
        children: [(0, Aq.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Aq.jsx)(aq.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, hq.f)(XQ.dailyRewardCoins)]
        }), XQ.dailyRewardItems.map((QQ => (0, Aq.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Aq.jsx)(aq.d, {
            itemName: QQ.dailyRewardItemName,
            amount: 0
          }), "\xd7", QQ.dailyRewardItemAmount]
        }, QQ.dailyRewardItemName)))]
      })
    }

    function Is(QQ) {
      let {
        day: WQ
      } = QQ;
      const XQ = hQ(WQ);
      return (0, Aq.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: aQ.map(((QQ, wQ) => {
          const qQ = wQ + 1;
          return (0, Aq.jsxs)("li", {
            className: bq()("SkyblockDailyRewardTile", {
              Claimed: qQ < WQ && qQ !== XQ,
              Today: qQ === WQ,
              Tomorrow: qQ === XQ,
              Jackpot: qQ === lQ
            }),
            children: [(0, Aq.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: qQ
            }), (0, Aq.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Aq.jsx)(aq.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, hq.f)(QQ.dailyRewardCoins)]
            }), QQ.dailyRewardItems.map((QQ => (0, Aq.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Aq.jsx)(aq.d, {
                itemName: QQ.dailyRewardItemName,
                amount: 0
              }), "\xd7", QQ.dailyRewardItemAmount]
            }, QQ.dailyRewardItemName)))]
          }, qQ)
        }))
      })
    }

    function Bs(QQ) {
      let {
        view: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)(), wQ = (0, HQ.useRef)(null), qQ = (0, HQ.useRef)(null), [TQ, zQ] = (0, HQ.useState)(null);
      (0, HQ.useLayoutEffect)((() => {
        var QQ;
        const WQ = null === (QQ = wQ.current) || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
        if (WQ) {
          var XQ, TQ;
          const QQ = Array.from(null !== (XQ = null === (TQ = qQ.current) || void 0 === TQ ? void 0 : TQ.children) && void 0 !== XQ ? XQ : [], (QQ => zs(QQ.getBoundingClientRect())));
          zQ({
            origin: zs(WQ),
            target: Ts(),
            itemOrigins: QQ,
            itemTarget: ss()
          })
        }
      }), []);
      const sQ = hQ(WQ.day),
        FQ = function(QQ, WQ) {
          const [XQ, wQ] = (0, HQ.useState)((() => qs() ? QQ : 0));
          return (0, HQ.useEffect)((() => {
            if (qs()) return;
            const XQ = performance.now();
            let qQ = 0;
            const TQ = zQ => {
              const sQ = Math.min(Math.max((zQ - XQ) / WQ, 0), 1);
              wQ(Math.round(QQ * (1 - (1 - sQ) ** 3))), sQ < 1 && (qQ = requestAnimationFrame(TQ))
            };
            return qQ = requestAnimationFrame(TQ), () => {
              cancelAnimationFrame(qQ)
            }
          }), [QQ, WQ]), XQ
        }(WQ.coins, 450);
      return (0, Aq.jsxs)("div", {
        className: bq()("SkyblockDailyReward", {
          Jackpot: WQ.day === lQ
        }),
        style: {
          "--daily-duration": `${WQ.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Aq.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Aq.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Aq.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Aq.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: XQ("skyblockGame:dailyRewardTitle")
            }), (0, Aq.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: XQ("skyblockGame:dailyRewardDay", {
                day: String(WQ.day)
              })
            })]
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: wQ,
            children: [(0, Aq.jsx)(aq.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Aq.jsxs)("span", {
              children: ["+", (0, hq.f)(FQ)]
            })]
          }), WQ.items.length > 0 && (0, Aq.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: qQ,
            children: WQ.items.map((QQ => (0, Aq.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Aq.jsx)(aq.d, {
                itemName: QQ.dailyRewardItemName,
                amount: 0
              }), "\xd7", QQ.dailyRewardItemAmount]
            }, QQ.dailyRewardItemName)))
          }), (0, Aq.jsx)(Is, {
            day: WQ.day
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [XQ("skyblockGame:dailyRewardComeBack"), (0, Aq.jsx)(rs, {
              day: sQ
            })]
          })]
        }), null !== TQ && (0, Aq.jsx)(gs, {
          origin: TQ.origin,
          target: TQ.target,
          count: WQ.flyingCoins
        }), null !== TQ && TQ.itemOrigins.length === WQ.items.length && (0, Aq.jsx)(Fs, {
          items: WQ.items,
          origins: TQ.itemOrigins,
          target: TQ.itemTarget
        })]
      })
    }
    const ys = (0, HQ.memo)((function(QQ) {
        let {
          controller: WQ
        } = QQ;
        const XQ = (0, cq.j)(tX, WQ.getSnapshot());
        return XQ ? (0, Aq.jsx)(Bs, {
          view: XQ
        }, XQ.token) : null
      })),
      Vs = "Gold Coin";

    function Ds(QQ) {
      return 650 + 220 * QQ
    }

    function ps(QQ) {
      return {
        "--letter-delay": `${Ds(QQ)}ms`,
        "--letter-land": `${Ds(QQ)+300}ms`
      }
    }

    function Gs(QQ) {
      let {
        letterCount: WQ
      } = QQ;
      return (0, Aq.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Aq.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Aq.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Aq.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: WQ
        }, ((QQ, WQ) => (0, Aq.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: ps(WQ),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, WQ)))]
      })
    }

    function Us(QQ) {
      var WQ, XQ, wQ;
      let {
        letter: qQ,
        index: TQ
      } = QQ;
      const {
        t: zQ
      } = (0, iq.C)(), sQ = null !== (WQ = null === (XQ = qQ.items[0]) || void 0 === XQ ? void 0 : XQ.itemName) && void 0 !== WQ ? WQ : Vs;
      return (0, Aq.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: ps(TQ),
        children: [(0, Aq.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Aq.jsx)(aq.d, {
            itemName: sQ,
            amount: 0
          })
        }), (0, Aq.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: zQ(qQ.reasonKey, null !== (wQ = qQ.reasonParams) && void 0 !== wQ ? wQ : void 0)
        }), (0, Aq.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [qQ.coins > 0 && (0, Aq.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Aq.jsx)(aq.d, {
              itemName: Vs,
              amount: 0
            }), "+", (0, hq.f)(qQ.coins)]
          }), qQ.items.map(((QQ, WQ) => (0, Aq.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Aq.jsx)(aq.d, {
              itemName: QQ.itemName,
              amount: 0
            }), QQ.label, " \xd7", QQ.amount]
          }, WQ)))]
        })]
      })
    }

    function bs(QQ) {
      let {
        view: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)();
      return (0, Aq.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${WQ.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Ds(WQ.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Aq.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Aq.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Aq.jsx)(Gs, {
              letterCount: WQ.letters.length
            }), (0, Aq.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: XQ("skyblockGame:mailboxTitle")
            })]
          }), (0, Aq.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: WQ.letters.map(((QQ, WQ) => (0, Aq.jsx)(Us, {
              letter: QQ,
              index: WQ
            }, WQ)))
          }), WQ.more > 0 && (0, Aq.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: XQ("skyblockGame:mailboxMore", {
              count: String(WQ.more)
            })
          })]
        })
      })
    }
    const vs = (0, HQ.memo)((function(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(YX, WQ.getSnapshot());
      return XQ ? (0, Aq.jsx)(bs, {
        view: XQ
      }, XQ.token) : null
    }));

    function ds(QQ) {
      let {
        controller: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)(), wQ = (0, cq.j)(fw, WQ.getSnapshot());
      if (null === wQ) return null;
      const qQ = wQ.fullSet ? "empty" === wQ.fuelState ? {
        text: XQ("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: XQ("skyblockGame:magmawardHudFullSet", {
          worn: String(wQ.wornCount)
        }),
        tone: "partial"
      };
      return (0, Aq.jsx)(dq.g, {
        placement: "statBars",
        children: (0, Aq.jsxs)("div", {
          className: bq()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${wQ.fuelState}`, {
            "SkyblockMagmawardHud-partial": !wQ.fullSet,
            "SkyblockMagmawardHud-armed": wQ.fullSet && "empty" !== wQ.fuelState
          }),
          children: [null !== wQ.flare && (0, Aq.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${wQ.flare}`
          }, `flare:${wQ.flareToken}`), (0, Aq.jsx)("div", {
            className: bq()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: wQ.setLit
            }),
            children: wQ.pieces.map(((QQ, WQ) => (0, Aq.jsx)("div", {
              className: bq()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: QQ.worn,
                SkyblockMagmawardPieceJustWorn: QQ.justWorn
              }),
              children: (0, Aq.jsx)(aq.d, {
                itemName: QQ.itemName,
                amount: 0
              })
            }, `${WQ}:${QQ.wornToken}`)))
          }, `pieces:${wQ.setLitToken}`), (0, Aq.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Aq.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Aq.jsxs)("div", {
              className: bq()("SkyblockMagmawardFuelCounter", wQ.pulse && `SkyblockMagmawardFuelCounter-${wQ.pulse}`),
              children: [(0, Aq.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Aq.jsx)(aq.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Aq.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: wQ.fuel
              })]
            }, `counter:${wQ.pulseToken}`), "burn" === wQ.pulse && (0, Aq.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${wQ.pulseToken}`)]
          }), qQ && (0, Aq.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${qQ.tone} SmallTextBold`,
            children: qQ.text
          })]
        })
      })
    }

    function Hs(QQ) {
      let {
        controller: WQ
      } = QQ;
      const {
        t: XQ,
        selectedLanguage: wQ
      } = (0, iq.C)(), qQ = (0, cq.j)(tw, WQ.getSnapshot());
      return null === qQ ? null : (0, Aq.jsx)(dq.g, {
        placement: "statBars",
        children: (0, Aq.jsxs)("div", {
          className: bq()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: qQ.inRange
          }),
          style: {
            "--glowtide-colour": qQ.colour
          },
          "aria-label": XQ("skyblockGame:glowtideChipLabel"),
          children: [(0, Aq.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), qQ.inRange ? (0, Aq.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: XQ("skyblockGame:glowtideChipInRange")
          }, `call:${qQ.inRangeToken}`) : (0, Aq.jsxs)(Aq.Fragment, {
            children: [(0, Aq.jsx)("div", {
              ref: WQ.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Aq.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: XQ("skyblockGame:waypointDistance", {
                distance: bQ(qQ.distance, wQ.code)
              })
            })]
          })]
        })
      })
    }

    function as(QQ) {
      let {
        controller: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)(), wQ = (0, cq.j)(ew, WQ.getSnapshot());
      return null === wQ ? null : (0, Aq.jsx)(dq.g, {
        placement: "statBars",
        children: (0, Aq.jsxs)("div", {
          className: bq()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: wQ.full
          }),
          "aria-label": XQ("skyblockGame:glowMeterLabel", {
            fill: String(wQ.fill),
            yJ: String(wQ.yJ)
          }),
          children: [wQ.burst && (0, Aq.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${wQ.burstToken}`), (0, Aq.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Aq.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${wQ.ratio})`
              }
            }), wQ.gained && (0, Aq.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${wQ.gainToken}`), wQ.full && Array.from({
              length: 5
            }, ((QQ, WQ) => (0, Aq.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, WQ)))]
          }), wQ.full && wQ.rares.map((QQ => (0, Aq.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Aq.jsx)(aq.d, {
              itemName: QQ,
              amount: 0
            })
          }, QQ))), wQ.ready && (0, Aq.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Aq.jsx)("span", {
              children: XQ("skyblockGame:glowMeterReady")
            })
          }, `ready:${wQ.fullToken}`)]
        })
      })
    }

    function ls(QQ) {
      let {
        controller: WQ
      } = QQ;
      const {
        t: XQ
      } = (0, iq.C)(), wQ = (0, cq.j)(xw, WQ.getSnapshot());
      if (null === wQ) return null;
      const qQ = "waiting" === wQ.phase,
        TQ = {
          animationDuration: `${wQ.waitMs}ms`,
          animationDelay: -wQ.elapsedMs + "ms"
        },
        zQ = qQ ? void 0 : {
          animationDuration: `${wQ.waitMs}ms`
        };
      return (0, Aq.jsxs)("div", {
        className: qQ ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [qQ && (0, Aq.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((QQ, WQ) => (0, Aq.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, WQ))), (0, Aq.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: TQ
          }), (0, Aq.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Aq.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Aq.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: TQ
            })]
          }), (0, Aq.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Aq.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: zQ,
          children: XQ(wQ.line)
        }, wQ.lineIndex)]
      }, wQ.token)
    }

    function hs(QQ) {
      let {
        chart: WQ,
        showHere: XQ,
        className: wQ
      } = QQ;
      return (0, Aq.jsx)("div", {
        className: bq()("SkyblockTideChartGrid", wQ, null !== WQ.pictureName && "Complete"),
        "aria-hidden": "true",
        children: WQ.cells.map(((QQ, wQ) => {
          const qQ = 0 !== (WQ.pulseCells & 1 << wQ),
            TQ = WQ.castCell === wQ;
          return (0, Aq.jsx)("span", {
            className: bq()("SkyblockTideChartCell", `Cell-${QQ}`, qQ && "Pulse", TQ && "Cast", XQ && WQ.hereCell === wQ && "Here")
          }, `${wQ}:${qQ?`p${WQ.pulseToken}`:""}:${TQ?`c${WQ.castToken}`:""}`)
        }))
      })
    }

    function is(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(Nw, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = XQ.chip;
      if (!XQ.enabled || null === qQ) return null;
      const TQ = wQ("skyblockGame:tideChartsChipLabel", {
        island: qQ.islandName,
        lit: String(qQ.lit),
        ink: String(qQ.ink)
      });
      return (0, Aq.jsx)(dq.g, {
        placement: "statBars",
        children: (0, Aq.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: bq()("SkyblockTideChartsChip", XQ.open && "Open", null !== qQ.pictureName && "Complete"),
          "aria-label": TQ,
          title: TQ,
          onMouseDown: QQ => {
            QQ.preventDefault()
          },
          onClick: WQ.toggle,
          children: [(0, Aq.jsx)(hs, {
            chart: qQ,
            showHere: !1,
            className: "Mini"
          }), (0, Aq.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [qQ.lit, "/", qQ.ink]
          })]
        })
      })
    }

    function cs(QQ) {
      let {
        controller: WQ
      } = QQ;
      const XQ = (0, cq.j)(Nw, WQ.getSnapshot()),
        {
          t: wQ
        } = (0, iq.C)(),
        qQ = eq(),
        TQ = XQ.card;
      return XQ.enabled && null !== TQ ? (0, Aq.jsx)(Sq.b, {
        show: XQ.open,
        close: WQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Aq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: oq,
          children: [(0, Aq.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Aq.jsxs)("div", {
              children: [(0, Aq.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: wQ("skyblockGame:tideChartsTitle")
              }), (0, Aq.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: wQ("skyblockGame:tideChartsIntro")
              })]
            }), (0, Aq.jsx)(tq.o, {
              padIgnore: !0,
              ariaLabel: wQ("skyblockGame:tideChartsClose"),
              onClick: WQ.dismiss
            })]
          }), XQ.tabs.length > 1 && (0, Aq.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": wQ("skyblockGame:tideChartsIslands"),
            children: XQ.tabs.map((QQ => (0, Aq.jsx)("button", {
              type: "button",
              className: bq()("SkyblockTideChartsTab", QQ.selected && "Selected"),
              "aria-pressed": QQ.selected,
              onClick: () => {
                WQ.tr(QQ.island)
              },
              children: QQ.name
            }, QQ.island)))
          }), (0, Aq.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Aq.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": TQ.gridLabel,
              children: (0, Aq.jsx)(hs, {
                chart: TQ,
                showHere: !0,
                className: "Large"
              })
            }), (0, Aq.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Aq.jsx)("h3", {
                children: TQ.islandName
              }), (0, Aq.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: TQ.litText
              }), null === TQ.pictureName ? (0, Aq.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: wQ("skyblockGame:tideChartsPictureHidden")
              }) : (0, Aq.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: wQ("skyblockGame:tideChartsPictureRevealed", {
                  picture: TQ.pictureName
                })
              }, TQ.pictureName), (0, Aq.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Aq.jsxs)("li", {
                  children: [(0, Aq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), wQ("skyblockGame:tideChartsLegendLit")]
                }), (0, Aq.jsxs)("li", {
                  children: [(0, Aq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), wQ("skyblockGame:tideChartsLegendClear")]
                }), null !== TQ.hereCell && (0, Aq.jsxs)("li", {
                  children: [(0, Aq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), wQ("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Aq.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Aq.jsx)("span", {
                  children: XQ.turnsText
                }), (0, Aq.jsx)("span", {
                  children: XQ.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function As(QQ) {
      var WQ;
      let {
        controller: XQ
      } = QQ;
      const {
        selectedLanguage: wQ
      } = (0, iq.C)(), qQ = wQ.code;
      (0, HQ.useEffect)((() => {
        XQ.setTranslator(((QQ, WQ) => (0, iq.x)(qQ, QQ, WQ)), qQ, ((QQ, WQ) => (0, iq.t)(qQ, QQ, WQ)))
      }), [XQ, qQ]);
      const TQ = (0, cq.j)(rQ, XQ.map.getSnapshot()),
        {
          openInGameMenuName: zQ
        } = (0, vq.n)(["openInGameMenuName"]);
      return (0, Aq.jsxs)(Aq.Fragment, {
        children: [(0, Aq.jsx)(Ws, {
          controller: XQ.quests,
          display: XQ.navigation.display
        }), TQ.enabled && !zQ && (0, Aq.jsx)(qT, {
          controller: XQ.navigation
        }), (0, Aq.jsx)(Rq, {
          controller: XQ,
          minimap: TQ.enabled && (null === (WQ = TQ.presentation) || void 0 === WQ ? void 0 : WQ.minimap) && (0, Aq.jsx)(wT, {
            view: TQ.presentation.minimap,
            navigation: XQ.navigation,
            controller: XQ.map
          }),
          children: (0, Aq.jsx)(IT, {
            controller: XQ.quests,
            surface: "hud"
          })
        }), (0, Aq.jsx)(mz, {
          controller: XQ.navigation
        }), (0, Aq.jsx)(ws, {
          controller: XQ.portalTransit
        }), (0, Aq.jsx)(ys, {
          controller: XQ.dailyReward
        }), (0, Aq.jsx)(vs, {
          controller: XQ.mailbox
        }), (0, Aq.jsx)(ds, {
          controller: XQ.magmaward
        }), (0, Aq.jsx)(Hs, {
          controller: XQ.glowtide
        }), (0, Aq.jsx)(Iz, {
          controller: XQ.passage
        }), (0, Aq.jsx)(is, {
          controller: XQ.tideCharts
        }), (0, Aq.jsx)(as, {
          controller: XQ.glowMeter
        }), (0, Aq.jsx)(dz, {
          controller: XQ.reachLog
        }), (0, Aq.jsx)(ls, {
          controller: XQ.hushWait
        }), (0, Aq.jsx)(Gz, {
          controller: XQ.lampLight
        }), (0, Aq.jsx)(TT, {
          controller: XQ.skills,
          surface: "hud"
        })]
      })
    }

    function Rs(QQ) {
      let {
        controller: WQ
      } = QQ;
      return (0, Aq.jsxs)(Aq.Fragment, {
        children: [(0, Aq.jsx)(XT, {
          controller: WQ.map,
          navigation: WQ.navigation
        }), (0, Aq.jsx)(TT, {
          controller: WQ.skills,
          surface: "menu"
        }), (0, Aq.jsx)(IT, {
          controller: WQ.quests,
          surface: "menu"
        }), (0, Aq.jsx)(NT, {
          controller: WQ.dungeons
        }), (0, Aq.jsx)(KT, {
          controller: WQ.collections
        }), (0, Aq.jsx)(Qz, {
          controller: WQ.questGraph
        }), (0, Aq.jsx)(Tz, {
          controller: WQ.forge
        }), (0, Aq.jsx)(Jz, {
          controller: WQ.smuggler
        }), (0, Aq.jsx)(bz, {
          controller: WQ.keepersChair,
          lampLight: WQ.lampLight
        }), (0, Aq.jsx)(Yz, {
          controller: WQ.reachLog,
          regulars: WQ.regulars,
          hiddenWaters: WQ.hiddenWaters
        }), (0, Aq.jsx)(hz, {
          controller: WQ.regulars
        }), (0, Aq.jsx)(Bz, {
          controller: WQ.passage
        }), (0, Aq.jsx)(cs, {
          controller: WQ.tideCharts
        }), (0, Aq.jsx)(Oz, {
          controller: WQ.dialogue
        }), (0, Aq.jsx)(Kz, {
          controller: WQ.autographs
        })]
      })
    }
    var Es = XQ(37049);
    const Cs = Ww + Fw;

    function us(QQ, WQ, XQ, wQ, qQ) {
      const TQ = [],
        zQ = [],
        sQ = XQ => {
          const wQ = QQ.playSound(WQ, XQ.sound, XQ.volume, XQ.rate);
          wQ && (zQ.push(wQ), void 0 !== XQ.cutAfter && TQ.push(setTimeout((() => {
            wQ.fade(wQ.getVolume(), 0, 300)
          }), XQ.cutAfter)))
        };
      for (const FQ of function(QQ, WQ) {
          const XQ = [{
            sound: "rpgKnifeSlice1",
            beat: Ww,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: Ww,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: Ww,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: Ww,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: Ww,
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
            sound: (0, Es.d)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Cs + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Es.d)("bigDrumSwish"),
            beat: Cs + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Cs + 60,
            lead: 180,
            volume: .5 + .06 * QQ,
            rate: .82 + .07 * QQ
          }];
          return QQ >= 4 && XQ.push({
            sound: "exp_levelup",
            beat: Cs + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), WQ && XQ.push({
            sound: "trumpetFlare",
            beat: Cs + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), XQ.push({
            sound: "harp_pling",
            beat: Xw,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), XQ
        }(XQ, wQ)) qQ ? TQ.push(setTimeout((() => {
        sQ(FQ)
      }), Math.max(0, FQ.beat - FQ.lead / FQ.rate))) : FQ.beat !== Ww && "magicAccent2" !== FQ.sound && "trumpetFlare" !== FQ.sound || sQ(FQ);
      return () => {
        for (const QQ of TQ) clearTimeout(QQ);
        for (const QQ of zQ) QQ.fade(QQ.getVolume(), 0, 120)
      }
    }
    class Ls {
      constructor(QQ) {
        this.deps = QQ, this.pending = new Map, this.localHook = null
      }
      hookWaiting(QQ, WQ) {
        this.pending.delete(QQ);
        const XQ = this.deps.now();
        if (null === WQ) {
          var wQ;
          if ((null === (wQ = this.localHook) || void 0 === wQ ? void 0 : wQ.hookId) === QQ) {
            const QQ = XQ >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(QQ)
          }
          return
        }
        const qQ = XQ + WQ;
        this.settle(QQ, qQ) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(QQ, {
          untilMs: XQ + 1e3,
          biteAtMs: qQ
        }))
      }
      getLocalHook() {
        var QQ, WQ;
        return null !== (QQ = null === (WQ = this.localHook) || void 0 === WQ ? void 0 : WQ.hookId) && void 0 !== QQ ? QQ : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const QQ = this.deps.now();
        for (const [WQ, {
            untilMs: XQ,
            biteAtMs: wQ
          }] of this.pending)(this.settle(WQ, wQ) || QQ > XQ) && this.pending.delete(WQ)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(QQ, WQ) {
        const XQ = this.deps.getLineOwner(QQ);
        if (null === XQ) return !1;
        if (!this.deps.isLocalPlayer(XQ)) return !0;
        if (this.localHook = {
            hookId: QQ,
            biteAtMs: WQ
          }, !this.deps.isHushWaiting()) {
          const [WQ, XQ] = this.deps.getHookPosition(QQ);
          this.deps.onCastLanded(WQ, XQ)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var ks = XQ(4534);
    const fs = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Ss = {
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
    class ts {
      constructor(QQ) {
        this.deps = QQ, this.tell = null
      }
      receiveTell(QQ) {
        let {
          biteTellTier: WQ
        } = QQ;
        this.tell = {
          tier: WQ,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(QQ) {
        const WQ = this.tell;
        if (this.tell = null, !QQ) return;
        const XQ = null !== WQ && this.deps.now() - WQ.atMs <= 3e3 ? WQ.tier : 0;
        this.deps.vibrate(fs[XQ])
      }
      burstAtHook() {
        const QQ = this.tell,
          WQ = this.deps.getLocalHookPosition();
        null === QQ || QQ.burst || null === WQ || (QQ.burst = !0, this.deps.playParticles(function(QQ, WQ) {
          let [XQ, wQ, qQ] = WQ;
          const {
            count: TQ,
            rise: zQ,
            colour: sQ
          } = Ss[QQ], [FQ, PQ, gQ] = sQ;
          return {
            texture: "glint",
            pos1: [XQ - .3, wQ, qQ - .3],
            pos2: [XQ + .3, wQ + .2, qQ + .3],
            dir1: [-.6, zQ, -.6],
            dir2: [.6, 1.4 * zQ, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: TQ,
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
              minColor: [FQ, PQ, gQ, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [FQ, PQ, gQ, 0],
              maxColor: [FQ, PQ, gQ, 0]
            }],
            blendMode: ks.c.Add,
            hideDist: 48
          }
        }(QQ.tier, WQ)))
      }
    }
    var os = XQ(1285),
      es = XQ(2010),
      ns = XQ(43);

    function xs(QQ, WQ) {
      return [{
        timeFraction: 0,
        minColor: [255 * QQ[0], 255 * QQ[1], 255 * QQ[2], 1],
        maxColor: [255 * WQ[0], 255 * WQ[1], 255 * WQ[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Ys = [0, 0, 0],
      Ns = {
        texture: "glint",
        mipmaps: !1,
        yJ: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Ys,
        dir2: Ys,
        blendMode: ks.c.OneOne
      },
      Zs = {
        ...Ns,
        colorGradients: xs([1, .88, .38], [1, .65, .15])
      },
      Os = {
        ...Ns,
        colorGradients: xs([.55, .95, 1], [.9, 1, 1])
      },
      Ks = [.5, .5, .5],
      ms = {
        texture: "glint",
        mipmaps: !1,
        yJ: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: xs([1, .12, .12], [1, .35, .2]),
        blendMode: ks.c.OneOne
      };
    class Ms {
      constructor() {
        this.drops = new Map
      }
      gj(QQ, WQ) {
        if ("overflowFlash" === WQ.kind) {
          const [XQ, wQ, qQ] = WQ.position, TQ = QQ.createParticles(ms, {
            pos: [XQ, wQ, qQ],
            half: Ks
          });
          return TQ.emit(18), void TQ.stop()
        }
        this.drops.has(WQ.itemId) || this.drops.set(WQ.itemId, {
          owner: WQ.owner,
          cosmetic: WQ.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      fJ(QQ) {
        if (0 === this.drops.size) return;
        const WQ = performance.now(),
          XQ = QQ.getCameraPosition();
        let wQ = 0;
        for (const TQ of this.drops.values()) null !== TQ.particles && wQ++;
        for (const [TQ, zQ] of this.drops) {
          const sQ = QQ.getPositionView(TQ);
          if (null === sQ) {
            var qQ;
            if (zQ.seen || WQ - zQ.markedAt > 5e3) null !== zQ.particles && wQ--, null === (qQ = zQ.particles) || void 0 === qQ || qQ.stop(), this.drops.delete(TQ);
            continue
          }
          zQ.cosmetic || !QQ.isLocalPlayer(zQ.owner) || zQ.pickupDelayCleared || (QQ.clearPickupDelay(TQ), zQ.pickupDelayCleared = !0);
          const FQ = zQ.lastPosition,
            PQ = zQ.seen && (sQ[0] - FQ[0]) ** 2 + (sQ[1] - FQ[1]) ** 2 + (sQ[2] - FQ[2]) ** 2 > 4e-4,
            gQ = (sQ[0] - XQ[0]) ** 2 + (sQ[1] - XQ[1]) ** 2 + (sQ[2] - XQ[2]) ** 2 < 2025;
          zQ.seen = !0, FQ[0] = sQ[0], FQ[1] = sQ[1], FQ[2] = sQ[2], PQ && (zQ.lastMovingAt = WQ), null !== zQ.particles && (!gQ || WQ - zQ.lastMovingAt > 500) && (zQ.particles.stop(), zQ.particles = null, wQ--), PQ && gQ && null === zQ.particles && wQ < 32 && (zQ.particles = QQ.createParticles(zQ.cosmetic ? Os : Zs, {
            pos: sQ
          }), wQ++), null !== zQ.particles && (zQ.particles.moveTo(sQ), zQ.particles.setEmitRate(PQ ? 12 : 0)), !PQ && null === zQ.particles && WQ - Math.max(zQ.lastMovingAt, zQ.markedAt) > 2e3 && this.drops.delete(TQ)
        }
      }
      dispose() {
        for (const WQ of this.drops.values()) {
          var QQ;
          null === (QQ = WQ.particles) || void 0 === QQ || QQ.stop()
        }
        this.drops.clear()
      }
    }
    var QF = XQ(231);
    const WF = QF.h.xy * QF.h.playerEyeToHeightRatio;
    class XF {
      constructor(QQ) {
        this.host = QQ, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      gj(QQ) {
        this.lava = QQ, this.nextUpdateAt = 0
      }
      fJ() {
        var QQ;
        const WQ = this.host.now();
        if (WQ < this.nextUpdateAt) return;
        this.nextUpdateAt = WQ + 250;
        const XQ = this.host.playerPosition(),
          wQ = XQ && this.findNearest([XQ[0], XQ[1] + WF, XQ[2]]);
        if (!wQ || wQ.distance >= 40) return void this.stop();
        const qQ = .5 * Math.min(1, (40 - wQ.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(qQ) : this.loop = this.host.play("lavaFlow", qQ, wQ.position, 40 + WF, 9, !0), null === (QQ = this.loop) || void 0 === QQ || QQ.setPosition(wQ.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var QQ;
        null === (QQ = this.loop) || void 0 === QQ || QQ.stop(), this.loop = null
      }
      findNearest(QQ) {
        let WQ = -1,
          XQ = 1 / 0;
        for (let wQ = 0; wQ < this.lava.length; wQ += 3) {
          const qQ = this.lava[wQ] - QQ[0],
            TQ = this.lava[wQ + 1] - QQ[1],
            zQ = this.lava[wQ + 2] - QQ[2],
            sQ = qQ * qQ + TQ * TQ + zQ * zQ;
          sQ < XQ && (XQ = sQ, WQ = wQ)
        }
        return WQ < 0 ? null : {
          position: [this.lava[WQ], this.lava[WQ + 1], this.lava[WQ + 2]],
          distance: Math.sqrt(XQ)
        }
      }
    }
    var wF = XQ(1983),
      qF = XQ(38926);
    const TF = {
      "Grey Portal": "Gray"
    };
    for (const JF of qQ.Fc) TF[`${JF} Portal`] = JF;
    const zF = Object.keys(TF),
      sF = Object.fromEntries(zF.map((QQ => [QQ, (0, qQ.W)(qQ.N[`${(0,qQ.ne)(TF[QQ])}Team`])])));
    Object.fromEntries(zF.map((QQ => [QQ, qQ.N[`${(0,qQ.ne)(TF[QQ])}UiText`]])));
    class FF {
      constructor(QQ, WQ) {
        this.presentation = QQ, this.portal = WQ, this.unlocked = void 0
      }
      gj(QQ) {
        const WQ = !1 === this.unlocked && QQ;
        this.unlocked = QQ, this.fJ();
        const {
          min: XQ,
          max: wQ,
          unlockedBlock: qQ
        } = this.portal;
        if (WQ && this.presentation.hasChunk(...XQ)) {
          const [QQ, WQ, TQ] = sF[qQ];
          this.presentation.playParticles({
            pos1: [...XQ],
            pos2: wQ.map((QQ => QQ + 1)),
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
              minColor: [QQ, WQ, TQ, 1],
              maxColor: [Math.min(255, QQ + 55), Math.min(255, WQ + 55), Math.min(255, TQ + 90), 1]
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
      fJ() {
        var QQ;
        const WQ = this.unlocked ? this.portal.unlockedBlock : null !== (QQ = this.portal.lockedBlock) && void 0 !== QQ ? QQ : "Light Gray Portal",
          {
            min: XQ,
            max: wQ
          } = this.portal;
        for (let qQ = XQ[0]; qQ <= wQ[0]; qQ++)
          for (let QQ = XQ[1]; QQ <= wQ[1]; QQ++)
            for (let TQ = XQ[2]; TQ <= wQ[2]; TQ++) this.presentation.hasChunk(qQ, QQ, TQ) && this.presentation.fV(qQ, QQ, TQ) !== WQ && this.presentation.hA(qQ, QQ, TQ, WQ)
      }
    }
    const PF = {
        farming_1: {
          raises: QQ => "NPC" === QQ.type && "chef" === QQ.variation,
          rise: .4
        },
        fishing_1: {
          raises: QQ => "Draugr Warper" === QQ.type,
          rise: .4
        }
      },
      gF = (QQ, WQ, XQ, TQ) => {
        let {
          localPlayerId: zQ
        } = TQ;
        const sQ = new Gq({
          translate: (QQ, WQ) => (0, iq.x)(os.h.get().getCurrentLanguageCode(), QQ, WQ),
          translateWithIcons: (QQ, WQ) => (0, iq.t)(os.h.get().getCurrentLanguageCode(), QQ, WQ),
          setMenuOpen: QQ => {
            QQ ? (0, YQ.u)() : (0, YQ.j)()
          },
          dismissMenu: YQ.n,
          publishSkills: QQ => {
            NQ.k.mB(zX, QQ, !0)
          },
          publishQuests: QQ => {
            NQ.k.mB(gX, QQ, !0)
          },
          publishQuestNotification: QQ => {
            NQ.k.mB(JX, QQ, !0)
          },
          publishDungeons: QQ => {
            NQ.k.mB(jX, QQ, !0)
          },
          publishCollections: QQ => {
            NQ.k.mB(uX, QQ, !0)
          },
          publishMap: QQ => {
            NQ.k.mB(rQ, QQ, !0)
          },
          publishHud: QQ => {
            NQ.k.mB(Vq, QQ, !0)
          },
          publishPortalTransit: QQ => {
            NQ.k.mB(kX, QQ, !0)
          },
          isLoadingScreenUp: () => vq.b.get("loadingOverlayVisible"),
          publishDailyReward: QQ => {
            NQ.k.mB(tX, QQ, !0)
          },
          publishMailbox: QQ => {
            NQ.k.mB(YX, QQ, !0)
          },
          publishQuestGraph: QQ => {
            NQ.k.mB(ZX, QQ, !0)
          },
          publishForge: QQ => {
            NQ.k.mB(Bw, QQ, !0)
          },
          publishSmuggler: QQ => {
            NQ.k.mB(Dw, QQ, !0)
          },
          publishKeepersChair: QQ => {
            NQ.k.mB(lw, QQ, !0)
          },
          publishReachLog: QQ => {
            NQ.k.mB(iw, QQ, !0)
          },
          publishLampLight: QQ => {
            NQ.k.mB(Lw, QQ, !0)
          },
          publishMagmaward: QQ => {
            NQ.k.mB(fw, QQ, !0)
          },
          publishGlowtide: QQ => {
            NQ.k.mB(tw, QQ, !0)
          },
          publishGlowMeter: QQ => {
            NQ.k.mB(ew, QQ, !0)
          },
          publishHushWait: QQ => {
            NQ.k.mB(xw, QQ, !0)
          },
          publishPassage: QQ => {
            NQ.k.mB(Uw, QQ, !0)
          },
          publishTideCharts: QQ => {
            NQ.k.mB(Nw, QQ, !0)
          },
          publishRegulars: QQ => {
            NQ.k.mB(Xq, QQ, !0)
          },
          publishHiddenWaters: QQ => {
            NQ.k.mB(sq, QQ, !0)
          },
          publishDialogue: QQ => {
            NQ.k.mB(Pq, QQ, !0)
          },
          publishAutographs: QQ => {
            NQ.k.mB(jq, QQ, !0)
          },
          onDailyRewardStarted: QQ => {
            AQ.playSound(zQ, QQ.day === lQ ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (QQ, WQ) => {
            AQ.playSound(zQ, "exp_collect", .35, 1 + .6 * QQ / (WQ - 1)), NQ.k.mB(oX, QQ === WQ - 1)
          },
          onDailyRewardItemLanded: QQ => {
            AQ.playSound(zQ, "pickUp", .6, 1 + .15 * QQ)
          },
          onMailboxStarted: () => {
            AQ.playSound(zQ, "rpgMetalClick", .6, 1), AQ.playSound(zQ, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            AQ.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: ns.m,
          requestTracking: QQ => {
            AQ.sendCommand(`quests track ${QQ}`)
          },
          requestDungeonEnter: (QQ, WQ) => {
            AQ.sendCommand(`dungeonEnter ${QQ} ${WQ}`)
          },
          requestQuestJump: QQ => {
            AQ.sendCommand(`${EQ} jump ${QQ}`)
          },
          requestQuestArrive: (QQ, WQ) => {
            const XQ = `${EQ} arrive ${QQ}`;
            AQ.sendCommand(WQ ? `${XQ} complete` : XQ)
          },
          requestForge: QQ => {
            let {
              blade: WQ,
              guard: XQ,
              handle: wQ
            } = QQ;
            AQ.sendCommand(`forge ${WQ} ${XQ} ${wQ}`)
          },
          requestDialogue: () => {
            AQ.sendCommand("quests dialogue")
          },
          requestSmuggle: (QQ, WQ) => {
            AQ.sendCommand(`smuggle ${QQ} ${WQ}`)
          },
          requestKeepersChairAim: QQ => {
            AQ.sendCommand(`keeperschair-aim ${QQ}`)
          },
          requestReachLogOpen: () => {
            AQ.sendCommand("reachlog-open")
          },
          requestLampLight: QQ => {
            AQ.sendCommand(`${QQ}`)
          },
          requestTravel: QQ => {
            AQ.sendCommand(`map travel ${QQ.kind} ${QQ.id} ${QQ.requestId}`)
          }
        });
        let FQ, PQ, gQ, JQ, IQ, jQ, BQ, GQ, UQ, bQ, vQ, aQ, hQ;
        const cQ = new Ms;
        let AQ, RQ = null;
        const CQ = PF[null !== XQ && void 0 !== XQ ? XQ : ""],
          fQ = (QQ, WQ) => {
            null !== CQ && void 0 !== CQ && CQ.raises(WQ) && AQ.setNametagOffset(QQ, CQ.rise)
          },
          oQ = new ts({
            getLocalHookPosition: () => {
              const QQ = eQ.getLocalHook();
              return null !== QQ && AQ.checkValid(QQ) ? AQ.xV(QQ) : null
            },
            playParticles: QQ => {
              AQ.playParticleEffect(QQ)
            },
            vibrate: QQ => {
              ZQ.e.play("fishBite", QQ)
            },
            now: () => performance.now()
          }),
          eQ = new Ls({
            getLineOwner: QQ => AQ.checkValid(QQ) ? AQ.getLineOwner(QQ) : null,
            isLocalPlayer: QQ => AQ.isLocalPlayer(QQ),
            getHookPosition: QQ => {
              const [WQ, , XQ] = AQ.xV(QQ);
              return [WQ, XQ]
            },
            isHushWaiting: () => {
              var QQ;
              return "waiting" === (null === (QQ = sQ.hushWait.getSnapshot()) || void 0 === QQ ? void 0 : QQ.phase)
            },
            onCastLanded: (QQ, WQ) => {
              sQ.tideCharts.castLanded(QQ, WQ)
            },
            onLocalHookSettled: () => {
              oQ.onLocalHookSettled()
            },
            onLocalWaitEnded: QQ => {
              oQ.onLocalWaitEnded(QQ)
            },
            now: () => performance.now()
          }),
          OQ = new XF({
            now: () => performance.now(),
            playerPosition: () => AQ.checkValid(zQ) ? AQ.xV(zQ) : null,
            play: (QQ, WQ, XQ, wQ, qQ, TQ) => AQ.playSound(zQ, QQ, WQ, 1, {
              qQ: XQ,
              maxHearDist: wQ,
              refDistance: qQ
            }, TQ)
          }),
          KQ = new Map;
        let mQ;
        return {
          onCreate: QQ => {
            if (AQ = QQ, RQ = new qF.SkyblockEntityFacing(QQ, CQ ? fQ : null), sQ.portalTransit.resumeArrival(null !== XQ && void 0 !== XQ ? XQ : null), (null !== XQ && void 0 !== XQ ? XQ : wQ) === wQ) {
              let QQ = -1 / 0;
              mQ = NQ.k.subscribe("toggleMenu", (WQ => {
                const XQ = performance.now();
                "inventory|Workbench" !== WQ || "cross_to_hub" !== sQ.quests.getTrackedQuestId() || XQ - QQ < 1e4 || (QQ = XQ, AQ.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [wQ, qQ] of Object.entries(null !== (WQ = uQ[null !== XQ && void 0 !== XQ ? XQ : ""]) && void 0 !== WQ ? WQ : {})) {
              var WQ;
              KQ.set(wQ, new FF({
                hasChunk: (WQ, XQ, wQ) => QQ.isBlockInLoadedChunk(WQ, XQ, wQ),
                fV: (WQ, XQ, wQ) => QQ.blockIdToBlockName(QQ.getBlockId(WQ, XQ, wQ)),
                hA: (WQ, XQ, wQ, qQ) => {
                  QQ.hA(WQ, XQ, wQ, qQ)
                },
                playParticles: WQ => {
                  QQ.playParticleEffect(WQ)
                }
              }, qQ))
            }
            hQ = (0, wF.d)((QQ => function(QQ) {
              return Object.hasOwn(nW, QQ) || QQ.startsWith("npc_")
            }(QQ) ? YW(QQ) : null)), sQ.resolveItemName = (WQ, XQ) => {
              const wQ = QQ.getItemStat(zQ, WQ, "displayName");
              return wQ && "object" === typeof wQ && "translationKey" in wQ ? XQ(wQ.translationKey, (0, iq.r)(wQ.params, es.e.shown)) : "string" === typeof wQ ? XQ(wQ) : WQ
            }, sQ.quests.notifications.onShown = QQ => {
              "quest" === QQ ? AQ.playSound(zQ, "magicAccent1", 1, 1) : "skillLevel" === QQ ? AQ.playSound(zQ, "magicAccent1", 1, .6) : "landmark" === QQ ? AQ.playSound(zQ, "trumpetFlare", 1, .6) : "npcNote" === QQ ? AQ.playSound(zQ, "magicAccent2", .8, 1.1) : "started" === QQ ? AQ.playSound(zQ, (0, Es.d)("bigDrumSwish"), 1, 1) : AQ.playSound(zQ, (0, Es.d)("rpgHandleSmallLeather"), 1, 1)
            }, sQ.forge.onPartSelected = () => {
              AQ.playSound(zQ, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, sQ.forge.onOpened = () => {
              ! function(QQ) {
                QQ.preloadSounds([(0, Es.d)("firecracker"), "fireBurn", "magicAccent2"])
              }(QQ)
            }, sQ.forge.onForgeStarted = (WQ, XQ, wQ) => us(QQ, zQ, WQ, XQ, wQ), sQ.smuggler.onBought = () => {
              AQ.playSound(zQ, (0, Es.d)("rpgHandleSmallLeather"), 1, 1), AQ.playSound(zQ, "chestOpen", .6, 1)
            }, sQ.compass.register(new yQ(sQ.map, !0)), sQ.compass.register(new yQ(sQ.map, !1)), sQ.compass.register(new DQ(sQ.map)), sQ.compass.register(new pQ((() => sQ.quests.getSnapshot().compassTarget)));
            for (const XQ of ["enemy", "npc"]) sQ.compass.register(new VQ(sQ.map, XQ, (WQ => QQ.checkValid(WQ) ? QQ.xV(WQ) : void 0), (WQ => QQ.isAlive(WQ))))
          },
          onAfterRender: (QQ, WQ) => {
            const XQ = AQ.checkValid(zQ) ? AQ.xV(zQ) : null;
            sQ.navigation.afterRender(XQ, performance.now(), WQ), sQ.glowtide.afterRender(XQ, WQ.cameraHeading), sQ.tideCharts.afterRender(XQ), eQ.afterRender()
          },
          onClose: () => {
            var QQ, WQ, XQ, wQ, qQ, TQ, zQ, rQ, jQ, yQ, VQ, DQ, pQ, dQ, HQ;
            mQ && NQ.k.unsubscribe(mQ), null === (QQ = hQ) || void 0 === QQ || QQ(), cQ.dispose(), OQ.dispose(), null === (WQ = RQ) || void 0 === WQ || WQ.dispose(), eQ.dispose(), sQ.dispose(), null === (XQ = FQ) || void 0 === XQ || XQ(), null === (wQ = PQ) || void 0 === wQ || wQ(), null === (qQ = gQ) || void 0 === qQ || qQ(), null === (TQ = JQ) || void 0 === TQ || TQ(), null === (zQ = IQ) || void 0 === zQ || zQ(), null === (rQ = BQ) || void 0 === rQ || rQ(), null === (jQ = undefined) || void 0 === jQ || jQ(), null === (yQ = GQ) || void 0 === yQ || yQ(), null === (VQ = UQ) || void 0 === VQ || VQ(), null === (DQ = bQ) || void 0 === DQ || DQ(), null === (pQ = vQ) || void 0 === pQ || pQ(), null === (dQ = undefined) || void 0 === dQ || dQ(), null === (HQ = aQ) || void 0 === HQ || HQ()
          },
          onPlayerChangeBlock: (QQ, WQ, wQ, TQ, FQ, PQ) => {
            if (QQ === zQ && "Air" === PQ) {
              const QQ = AQ.getClientOption(zQ, "creative");
              sQ.skills.predictBlock([WQ, wQ, TQ], FQ, QQ);
              const PQ = function(QQ, WQ) {
                  if ("hub" === WQ || "farming_1" === WQ || "mining_1" === WQ) return !SQ.has(QQ) || "hub" !== WQ && "mining_1" !== WQ ? Object.hasOwn(kQ, QQ) ? kQ[QQ] : void 0 : LQ
                }(FQ, XQ),
                gQ = ("hub" === XQ || "mining_1" === XQ) && (qQ.md.some((QQ => QQ === FQ)) || Object.hasOwn(tQ, FQ) || "mining_1" === XQ && "Block of Coal" === FQ);
              QQ || void 0 === PQ && !gQ || AQ.hA(WQ, wQ, TQ, null !== PQ && void 0 !== PQ ? PQ : LQ)
            }
          },
          onPlayerAttackEntity: (QQ, WQ) => {
            if (QQ !== zQ || "Player" !== AQ.getEntityType(WQ)) return;
            const [XQ, wQ, qQ] = AQ.xV(WQ);
            AQ.burstParticlePreset("critical", [XQ, wQ + 1, qQ], 10)
          },
          onChangeBlockFail: QQ => {
            for (const {
                DQ: WQ
              }
              of QQ) sQ.skills.rejectBlock(WQ)
          },
          onReceivedMessageFromServer: (QQ, WQ) => {
            if ("skyblockGatedPortal" === QQ) {
              var XQ;
              const [QQ, wQ] = WQ;
              return void(null === (XQ = KQ.get(QQ)) || void 0 === XQ || XQ.gj(wQ))
            }
            if ("skyblockDailyReward" === QQ) return void sQ.dailyReward.gj(WQ);
            if ("skyblockMailbox" === QQ) return void sQ.mailbox.gj(WQ);
            if ("skyblockPortalTransit" === QQ) return void sQ.portalTransit.gj(WQ);
            if ("skyblockLoot" === QQ) return void cQ.gj(AQ, WQ);
            if ("skyblockLava" === QQ) return void OQ.gj(WQ);
            if ("skyblockForge" === QQ) return void sQ.forge.gj(WQ);
            if ("skyblockMagmaward" === QQ) return void sQ.magmaward.gj(WQ);
            if ("skyblockGlowtide" === QQ) return void sQ.glowtide.gj(WQ);
            if ("skyblockGlowMeter" === QQ) return void sQ.glowMeter.gj(WQ);
            if ("skyblockHushWait" === QQ) return void sQ.hushWait.gj(WQ);
            if ("skyblockPassage" === QQ) {
              const QQ = WQ;
              return sQ.passage.gj(QQ), sQ.reachLog.receivePassagePhase(QQ.passagePhase), bQ ??= (0, dQ.u)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: sQ.passage.show
              }), void sQ.keepersChair.receivePassage({
                keepersChairPassagePhase: QQ.passagePhase,
                keepersChairPassageNextPhase: QQ.passageNextPhase,
                keepersChairPassageTurnsInMs: QQ.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === QQ) {
              const QQ = WQ;
              return sQ.tideCharts.gj(QQ), void(QQ.tideCharts.length > 0 && (vQ ??= (0, dQ.u)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: sQ.tideCharts.show
              })))
            }
            if (QQ === nQ.D) {
              var wQ;
              const {
                hookId: QQ,
                waiting: XQ
              } = WQ;
              return void eQ.hookWaiting(QQ, null !== (wQ = null === XQ || void 0 === XQ ? void 0 : XQ.remainingMs) && void 0 !== wQ ? wQ : null)
            }
            if ("skyblockBiteTell" === QQ) return void oQ.receiveTell(WQ);
            if ("skyblockSmuggler" === QQ) return void sQ.smuggler.gj(WQ);
            if ("skyblockKeepersChair" === QQ) return sQ.keepersChair.gj(WQ), void sQ.lampLight.setAtChair(sQ.keepersChair.isAtChair());
            if ("skyblockLampLight" === QQ) {
              const QQ = WQ;
              var qQ;
              if (sQ.lampLight.gj(QQ), QQ.lampLightReleasing) UQ ??= (0, dQ.u)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  sQ.lampLight.setRelease(!1)
                }
              });
              else null === (qQ = UQ) || void 0 === qQ || qQ(), UQ = void 0;
              return
            }
            if ("skyblockRegulars" === QQ) return void sQ.regulars.gj(WQ);
            if ("skyblockHiddenWaters" === QQ) return void sQ.hiddenWaters.gj(WQ);
            if ("skyblockReachLog" === QQ) return sQ.reachLog.gj(WQ), void(GQ ??= (0, dQ.u)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Rw
              },
              onClick: sQ.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === QQ) {
              for (const [QQ, XQ, wQ, qQ] of WQ) AQ.hA(QQ, XQ, wQ, qQ);
              return
            }
            if ("skyblockHud" === QQ) sQ.receiveHud(WQ);
            else if ("skyblockMap" === QQ) sQ.map.gj(WQ);
            else if (QQ === xQ.i) sQ.skills.gj(WQ);
            else if (QQ === iQ && "dialogue" === WQ.kind) sQ.dialogue.gj(WQ);
            else if (QQ === iQ) sQ.quests.gj(WQ);
            else if ("skyblockDungeons" === QQ) sQ.dungeons.gj(WQ);
            else if ("sbCollections" === QQ) sQ.collections.gj(WQ);
            else if ("skyblockQuestGraph" === QQ) sQ.questGraph.gj(WQ);
            else {
              if ("skyblockAutographs" !== QQ) return;
              sQ.autographs.gj(WQ)
            }
            if (!PQ && sQ.map.getSnapshot().enabled) {
              const QQ = (0, dQ.u)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: sQ.map.show
                }),
                WQ = (0, YQ.y)(sQ.map.show);
              PQ = () => {
                QQ(), WQ()
              }
            }!gQ && sQ.skills.getSnapshot().enabled && (gQ = (0, dQ.u)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: sQ.skills.show
            })), !BQ && sQ.collections.getSnapshot().enabled && (BQ = (0, dQ.u)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: sQ.collections.show
            })), !JQ && sQ.quests.getSnapshot().enabled && (JQ = (0, dQ.u)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: sQ.quests.show
            })), !aQ && sQ.autographs.getSnapshot().enabled && (aQ = (0, dQ.u)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: sQ.autographs.show
            }));
            const TQ = sQ.dungeons.getSnapshot().enabled;
            var zQ;
            (gQ || JQ || TQ) && jQ !== TQ && (jQ = TQ, null === (zQ = IQ) || void 0 === zQ || zQ(), IQ = (0, dQ.u)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: EW
              },
              disabled: !TQ,
              panel: !0,
              onClick: sQ.dungeons.show
            }));
            FQ || (FQ = (0, YQ.A)((0, HQ.createElement)(As, {
              controller: sQ
            }), {
              content: (0, HQ.createElement)(Rs, {
                controller: sQ
              }),
              onClose: sQ.close
            }))
          },
          fJ: () => {
            var QQ;
            for (const WQ of KQ.values()) WQ.fJ();
            cQ.fJ(AQ), OQ.fJ(), null === (QQ = RQ) || void 0 === QQ || QQ.fJ(), sQ.skills.fJ(), sQ.quests.fJ(), sQ.dailyReward.fJ(), sQ.mailbox.fJ(), sQ.map.fJ()
          }
        }
      }
  },
  36661: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ,
      i: () => wQ
    });
    const wQ = "skyblockSkills",
      qQ = "skills_test_gym"
  },
  34536: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      f: () => zQ
    });
    const wQ = [{
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

    function qQ(QQ) {
      let WQ, XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof QQ) {
        if (!Number.isFinite(QQ)) return "0";
        if (Math.abs(QQ) < 100) {
          const WQ = QQ < 0 ? "-" : "",
            XQ = Math.abs(QQ);
          return XQ >= 10 ? `${WQ}${XQ.toFixed(1).replace(/\.0$/,"")}` : `${WQ}${XQ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        WQ = BigInt(Math.floor(QQ))
      } else WQ = QQ;
      const qQ = WQ < 0n ? -WQ : WQ,
        TQ = WQ < 0n ? "-" : "",
        zQ = qQ.toString();
      if (zQ.length <= XQ) return `${TQ}${zQ}`;
      const sQ = 3 * Math.floor((zQ.length - 1) / 3);
      if (sQ < 3) return `${TQ}${zQ}`;
      if (sQ > 3 * wQ.length) {
        const QQ = zQ[0],
          WQ = zQ.slice(1, 3).replace(/0+$/, "");
        return `${TQ}${WQ?`${QQ}.${WQ}`:QQ}e${zQ.length-1}`
      }
      const {
        threshold: FQ,
        suffix: PQ
      } = wQ[wQ.length - sQ / 3], gQ = qQ / FQ, JQ = Number(1000n * (qQ % FQ) / FQ), rQ = Number(gQ) + JQ / 1e3;
      let IQ;
      return IQ = rQ >= 100 ? Math.floor(rQ).toString() : rQ >= 10 ? rQ.toFixed(1).replace(/\.0$/, "") : rQ.toFixed(2).replace(/\.?0+$/, ""), `${TQ}${IQ}${PQ}`
    }
    const TQ = wQ.map((QQ => {
      let {
        threshold: WQ,
        suffix: XQ
      } = QQ;
      return {
        threshold: Number(WQ),
        suffix: XQ
      }
    })).filter((QQ => {
      let {
        threshold: WQ
      } = QQ;
      return Number.isFinite(WQ)
    }));

    function zQ(QQ) {
      const WQ = Math.abs(QQ),
        XQ = QQ < 0 ? "-" : "";
      for (const {
          threshold: wQ,
          suffix: qQ
        }
        of TQ)
        if (WQ >= wQ) {
          const QQ = WQ / wQ;
          if (QQ >= 1e3) return `${XQ}${WQ.toExponential(2).replace("e+","e")}`;
          let TQ;
          return TQ = QQ >= 100 ? Math.floor(QQ).toString() : QQ >= 10 ? QQ.toFixed(1).replace(/\.0$/, "") : QQ.toFixed(2).replace(/\.?0+$/, ""), `${XQ}${TQ}${qQ}`
        } return `${XQ}${WQ}`
    }
  },
  38849: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38854: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38863: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38870: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38878: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38880: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  38884: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38889: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  38893: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  38896: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  38905: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  38908: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  38910: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38913: (QQ, WQ, XQ) => {
    QQ.exports = XQ.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  },
  18922: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  21024: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  23343: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24890: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26595: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26609: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38821: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  },
  38825: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);