export const id = 191;
export const ids = [50, 191];
export const modules = {
  38164: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      f: () => oQ
    });
    const LQ = new WeakMap;

    function qQ(QQ, FQ) {
      return LQ.set(QQ, FQ), QQ
    }

    function oQ(QQ) {
      var FQ;
      return null !== (FQ = LQ.get(QQ)) && void 0 !== FQ ? FQ : null
    }
  },
  38066: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ) {
      var LQ;
      const {
        width: qQ,
        height: oQ
      } = wQ, DQ = null !== (LQ = QQ.text) && void 0 !== LQ ? LQ : QQ, kQ = (DQ.x / 100 - .5) * qQ, vQ = (DQ.y / 100 - .5) * oQ, mQ = qQ / 2 - FQ.x;
      if (null !== QQ.text && Math.abs(kQ) <= mQ && vQ >= FQ.top - oQ / 2 && vQ <= oQ / 2 - FQ.bottom) return {
        x: DQ.x,
        y: DQ.y
      };
      const uQ = Math.min(0 === kQ ? 1 / 0 : mQ / Math.abs(kQ), vQ > 0 ? (oQ / 2 - FQ.bottom) / vQ : vQ < 0 ? (FQ.top - oQ / 2) / vQ : 1 / 0);
      return !Number.isFinite(uQ) || uQ < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + kQ * uQ / qQ * 100,
        y: 50 + vQ * uQ / oQ * 100
      }
    }
    wQ.d(FQ, {
      c: () => LQ
    })
  },
  38077: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ
    });
    const LQ = 4,
      qQ = 12e3,
      oQ = 1e3;
    class DQ {
      constructor() {
        let {
          limit: QQ = LQ,
          windowMs: FQ = qQ,
          spacingMs: wQ = oQ,
          now: DQ = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = QQ, this.windowMs = FQ, this.spacingMs = wQ, this.now = DQ
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
          FQ = this.lastSentAt + this.spacingMs,
          wQ = Math.min(FQ > QQ ? FQ : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        wQ !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, wQ - QQ)))
      }
      notify() {
        for (const QQ of this.listeners) QQ()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38060: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      constructor(QQ, FQ, wQ) {
        this.GA = QQ, this.beforeOpen = FQ, this.afterClose = wQ, this.open = !1, this.kx = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.kx && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.kx = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.kx || (this.snapshot = this.buildSnapshot(), this.GA(this.snapshot))
      }
    }
  },
  38166: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      SkyblockEntityFacing: () => kQ,
      needsSkyblockEntityFacing: () => DQ
    });
    var LQ = wQ(617),
      qQ = wQ(4119),
      oQ = wQ(38174);

    function DQ(QQ, FQ) {
      if (QQ.metaInfo === LQ.c || "Iron Guardian" === QQ.type || "Gold Guardian" === QQ.type) return !0;
      if ("Pig" === QQ.type) return "sitting" === QQ.pose;
      if ("Person" !== QQ.meshKind || void 0 === QQ.meshOpts) return !1;
      let wQ = null === FQ || void 0 === FQ ? void 0 : FQ.get(QQ.meshOpts);
      if (void 0 === wQ) {
        var oQ, DQ;
        const LQ = (0, qQ.i)(QQ);
        wQ = !1, "pig_napoleon" === (null === LQ || void 0 === LQ || null === (oQ = LQ.opts.textures) || void 0 === oQ ? void 0 : oQ.head) ? wQ = !0 : "npc_pig_head" === (null === LQ || void 0 === LQ || null === (DQ = LQ.opts.textures) || void 0 === DQ ? void 0 : DQ.head) && (wQ = "sitting" === LQ.opts.pose || "sitting"), FQ && (FQ.size >= 256 && FQ.clear(), FQ.set(QQ.meshOpts, wQ))
      }
      return "sitting" === wQ ? "sitting" === QQ.pose : wQ
    }(0, oQ.f)("skyblock", ((QQ, FQ) => {
      FQ.setFacingTolerance(DQ(QQ) ? 0 : null)
    }));
    class kQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = QQ, this.alsoVisit = FQ, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = QQ => {
          var FQ;
          const wQ = this.api.getEntityInfo(QQ);
          wQ && (DQ(wQ, this.meshFacingCache) && (this.api.setFacingTolerance(QQ, 0), this.nextFacing.add(QQ)), null === (FQ = this.alsoVisit) || void 0 === FQ || FQ.call(this, QQ, wQ))
        }
      }
      fH() {
        const {
          api: QQ
        } = this, FQ = this.nextFacing;
        QQ.forEachEntity(this.visit);
        for (const wQ of this.facing) FQ.has(wQ) || QQ.setFacingTolerance(wQ, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = FQ
      }
      dispose() {
        for (const QQ of this.facing) this.api.setFacingTolerance(QQ, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38053: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => uv
    });
    const LQ = "island";
    var qQ = wQ(317);
    const oQ = (0, qQ.Eb)([0, 0, -1]),
      DQ = [{
        name: "S",
        bearing: (0, qQ.Eb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, qQ.Eb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: oQ
      }, {
        name: "W",
        bearing: (0, qQ.Eb)([1, 0, 0])
      }];

    function kQ(QQ, FQ, wQ) {
      return [100 * (wQ.mapMaxX - QQ) / (wQ.mapMaxX - wQ.mapMinX), 100 * (FQ - wQ.mapMinZ) / (wQ.mapMaxZ - wQ.mapMinZ)]
    }

    function vQ(QQ, FQ, wQ) {
      const qQ = "local" === FQ,
        oQ = QQ.background,
        DQ = FQ => oQ ? kQ(FQ[0] - QQ.mapOrigin[0], FQ[2] - QQ.mapOrigin[2], oQ.bounds) : [50, 50],
        vQ = (QQ.insideDungeon ? [] : QQ.landmarks).map((QQ => {
          var FQ, LQ;
          return {
            id: QQ.id,
            name: wQ(QQ.visited && QQ.nameKey ? null !== (FQ = QQ.mapLabelKey) && void 0 !== FQ ? FQ : QQ.nameKey : "skyblockGame:mapUnknown"),
            icon: QQ.visited && null !== (LQ = QQ.icon) && void 0 !== LQ ? LQ : "unknown",
            visited: QQ.visited,
            current: !1,
            position: DQ(QQ.position),
            travelKind: "landmark",
            travelId: QQ.id
          }
        })),
        uQ = QQ.zones.map((FQ => {
          var LQ;
          return {
            id: FQ.id,
            name: wQ(FQ.visited && FQ.nameKey ? FQ.nameKey : "skyblockGame:mapUnknown"),
            icon: FQ.visited && null !== (LQ = FQ.icon) && void 0 !== LQ ? LQ : "unknown",
            visited: FQ.visited,
            current: FQ.id === QQ.zoneId,
            position: FQ.position,
            thumbnail: FQ.visited ? FQ.id : void 0,
            travelKind: "zone",
            travelId: FQ.id
          }
        })),
        HQ = QQ.insideDungeon || !oQ ? [] : QQ.portals.map((QQ => {
          var FQ;
          return {
            id: QQ.id,
            name: wQ(null !== (FQ = QQ.nameKey) && void 0 !== FQ ? FQ : "skyblockGame:mapUnknown"),
            icon: QQ.visited ? "dungeons" === QQ.destination ? "portal_orange" : "portal" : "unknown",
            visited: QQ.visited,
            current: !1,
            position: DQ(QQ.position),
            colour: QQ.colour,
            travelKind: "zone",
            travelId: QQ.destination
          }
        })),
        bQ = qQ ? vQ : uQ,
        YQ = bQ.filter((QQ => QQ.visited)).length,
        xQ = oQ ? (oQ.bounds.mapMaxX - oQ.bounds.mapMinX) / (oQ.bounds.mapMaxZ - oQ.bounds.mapMinZ) : 2,
        AQ = oQ ? JSON.stringify([oQ.bounds, QQ.mapOrigin]) : "";
      return {
        local: qQ,
        points: bQ,
        portals: qQ ? HQ : [],
        progress: bQ.length ? wQ("skyblockGame:mapDiscovered", {
          current: String(YQ),
          total: String(bQ.length)
        }) : null,
        percent: bQ.length ? 100 * YQ / bQ.length : 0,
        canTravel: [...bQ, ...qQ ? HQ : []].some((QQ => QQ.visited && !QQ.current)),
        noLandmarks: qQ && !QQ.insideDungeon && 0 === vQ.length,
        background: oQ ? {
          imageKey: oQ.imageKey,
          fallbackImageKey: QQ.zoneId,
          geometryKey: AQ,
          label: wQ(oQ.labelKey),
          colour: oQ.backgroundColour,
          ratio: xQ
        } : null,
        connections: mQ(QQ.zones),
        minimap: oQ ? {
          imageKey: oQ.imageKey,
          fallbackImageKey: QQ.zoneId,
          geometryKey: AQ,
          label: wQ(oQ.labelKey),
          colour: oQ.backgroundColour,
          caption: wQ(QQ.zoneId === LQ ? "skyblockGame:zoneIsland" : oQ.labelKey),
          width: (oQ.bounds.mapMaxX - oQ.bounds.mapMinX) / oQ.minimapSpan * 100 + "%",
          height: (oQ.bounds.mapMaxZ - oQ.bounds.mapMinZ) / oQ.minimapSpan * 100 + "%",
          markers: [...vQ, ...HQ]
        } : null
      }
    }

    function mQ(QQ) {
      const FQ = new Set;
      return QQ.flatMap((wQ => wQ.connections.flatMap((LQ => {
        const qQ = QQ.find((QQ => QQ.id === LQ)),
          oQ = [wQ.id, LQ].sort().join("|");
        return !qQ || FQ.has(oQ) ? [] : (FQ.add(oQ), [{
          id: `${wQ.id}-${LQ}`,
          start: wQ.position,
          end: qQ.position,
          explored: wQ.visited && qQ.visited
        }])
      }))))
    }
    var uQ = wQ(38060);
    class HQ extends uQ.c {}
    const bQ = "skyblockMapView";
    class YQ extends HQ {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(QQ, LQ, qQ), this.requestTravel = FQ, this.translate = wQ, this.now = oQ, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (QQ, FQ) => {
          if (!this.map || this.pending || this.kx) return;
          const wQ = ("zone" === QQ ? this.map.zones : this.map.landmarks).find((QQ => QQ.id === FQ));
          if (wQ) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in wQ && !wQ.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (wQ.visited)
              if ("zone" === QQ && FQ === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const wQ = ++this.nextRequestId;
                this.pending = {
                  requestId: wQ,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: QQ,
                  id: FQ,
                  requestId: wQ
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
      bx(QQ) {
        var FQ;
        if (!this.kx)
          if ("entities" !== QQ.kind)
            if ("open" !== QQ.kind) {
              var wQ, LQ;
              if ("snapshot" === QQ.kind)(null === (wQ = QQ.snapshot) || void 0 === wQ ? void 0 : wQ.zoneId) !== (null === (LQ = this.map) || void 0 === LQ ? void 0 : LQ.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = QQ.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === QQ.kind) {
                var qQ;
                QQ.requestId === (null === (qQ = this.pending) || void 0 === qQ ? void 0 : qQ.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (QQ.requestId === (null === (FQ = this.pending) || void 0 === FQ ? void 0 : FQ.requestId)) {
                var oQ;
                this.pending = null, this.feedbackKey = null !== (oQ = QQ.errorKey) && void 0 !== oQ ? oQ : "", null === QQ.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = QQ.entities
      }
      fH() {
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
          presentation: this.map ? vQ(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const xQ = 67.5 * Math.PI / 180;

    function AQ(QQ, FQ) {
      const wQ = Math.abs(QQ);
      if (wQ > xQ || FQ.trackHalfWidth <= 0) return null;
      const LQ = FQ.trackHalfWidth,
        qQ = FQ.screenHalfWidth / (FQ.tanHalfFovX * Math.max(.5, Math.cos(FQ.pitch))),
        oQ = Math.min(Math.atan(.6 * LQ / qQ), .75 * xQ),
        DQ = qQ * Math.tan(oQ);
      let kQ;
      if (wQ <= oQ) kQ = qQ * Math.tan(wQ);
      else {
        const QQ = xQ - oQ,
          FQ = Math.max(0, qQ * QQ / (Math.cos(oQ) ** 2 * (LQ - DQ)) - 1),
          vQ = (wQ - oQ) / QQ;
        kQ = DQ + (LQ - DQ) * (1 + FQ) * vQ / (1 + FQ * vQ)
      }
      return 50 + Math.sign(QQ) * kQ * 50 / LQ
    }
    class tQ {
      constructor(QQ, FQ) {
        this.map = QQ, this.visited = FQ, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = FQ ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const QQ = this.map.getSnapshot().map;
        return !QQ || QQ.insideDungeon ? [] : QQ.landmarks.filter((QQ => QQ.visited === this.visited)).map((QQ => {
          var FQ, wQ;
          return {
            id: `landmark:${QQ.id}`,
            position: QQ.position,
            icon: null !== (FQ = QQ.icon) && void 0 !== FQ ? FQ : "unknown",
            nameKey: null !== (wQ = QQ.nameKey) && void 0 !== wQ ? wQ : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class eQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.map = QQ, this.kind = FQ, this.position = wQ, this.alive = LQ, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = FQ, this.range = "enemy" === FQ ? 48 : 64, this.limit = 12
      }
      Qp(QQ) {
        if ("enemy" !== this.kind || this.alive(QQ.DQ)) return this.position(QQ.DQ)
      }
      getPoints() {
        const QQ = [];
        for (const LQ of this.map.getEntities()) {
          if (LQ.kind !== this.kind || "enemy" === this.kind && !this.alive(LQ.compassEntityId)) continue;
          const qQ = this.position(LQ.compassEntityId);
          var FQ, wQ;
          if (qQ) QQ.push({
            id: `${this.kind}:${LQ.compassEntityId}`,
            DQ: LQ.compassEntityId,
            kind: this.kind,
            icon: null !== (FQ = LQ.icon) && void 0 !== FQ ? FQ : LQ.npcSkin ? `npc_${LQ.npcSkin}` : this.kind,
            displayName: LQ.displayName,
            position: qQ,
            nameKey: null !== (wQ = LQ.nameKey) && void 0 !== wQ ? wQ : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return QQ
      }
    }
    class MQ {
      constructor(QQ) {
        this.map = QQ, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const QQ = this.map.getSnapshot().map;
        return !QQ || QQ.insideDungeon ? [] : QQ.portals.map((QQ => {
          var FQ;
          return {
            id: "portal:" + QQ.id,
            kind: "portal",
            position: QQ.position,
            nameKey: null !== (FQ = QQ.nameKey) && void 0 !== FQ ? FQ : "skyblockGame:compassUnvisitedZone",
            icon: QQ.visited ? "dungeons" === QQ.destination ? "portal_orange" : "portal" : "unknown",
            colour: QQ.colour
          }
        }))
      }
    }
    class GQ {
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

    function pQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ.position;
      const oQ = LQ[0] - FQ[0],
        DQ = LQ[2] - FQ[2];
      return {
        ...QQ,
        position: LQ,
        offset: qQ.e.computeShortestRotation(wQ, (0, qQ.Eb)([oQ, 0, DQ])),
        distance: Math.hypot(oQ, LQ[1] - FQ[1], DQ)
      }
    }
    let cQ;

    function CQ(QQ, FQ) {
      var wQ;
      return (null === (wQ = cQ) || void 0 === wQ ? void 0 : wQ.locale) !== FQ && (cQ = {
        locale: FQ,
        near: new Intl.NumberFormat(FQ, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(FQ, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (QQ < 10 ? cQ.near : cQ.far).format(QQ)
    }
    class SQ {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(QQ) {
        return this.providers.set(QQ.id, QQ), this.refreshAt = 0, () => {
          this.providers.get(QQ.id) === QQ && (this.providers.delete(QQ.id), this.refreshAt = 0)
        }
      }
      frame(QQ, FQ, wQ) {
        if (wQ >= this.refreshAt) {
          this.refreshAt = wQ + 200, this.candidates = [];
          for (const FQ of this.providers.values()) {
            if (!FQ.enabled) continue;
            const wQ = FQ.getPoints().map((FQ => {
              const wQ = FQ.position;
              return {
                point: FQ,
                distance: Math.hypot(wQ[0] - QQ[0], wQ[1] - QQ[1], wQ[2] - QQ[2])
              }
            })).filter((QQ => QQ.distance <= FQ.range)).sort(((QQ, FQ) => QQ.distance - FQ.distance)).slice(0, FQ.limit);
            for (const {
                point: QQ
              }
              of wQ) this.candidates.push({
              provider: FQ,
              point: QQ
            })
          }
        }
        const LQ = [];
        for (const {
            point: qQ,
            provider: oQ
          }
          of this.candidates) {
          if (!oQ.enabled) continue;
          const wQ = oQ.Qp ? oQ.Qp(qQ) : qQ.position;
          if (wQ) {
            const oQ = pQ(qQ, QQ, FQ, wQ);
            Math.abs(oQ.offset) <= xQ && LQ.push(oQ)
          }
        }
        return LQ
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var iQ = wQ(36238),
      WQ = wQ(53);
    const RQ = [{
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
      OQ = RQ.length;

    function sQ(QQ) {
      return QQ >= OQ ? 1 : QQ + 1
    }
    const rQ = "skyblockQuests",
      IQ = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      UQ = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function NQ(QQ) {
      let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const wQ = Math.max(0, Math.floor(QQ)),
        LQ = Math.floor(wQ % 1e3 / 100),
        qQ = Math.floor(wQ / 1e3),
        oQ = qQ % 60,
        DQ = Math.floor(qQ / 60),
        kQ = DQ % 60,
        vQ = Math.floor(DQ / 60),
        mQ = QQ => QQ < 10 ? `0${QQ}` : String(QQ),
        uQ = FQ ? `.${LQ}` : "";
      return vQ > 0 ? `${vQ}:${mQ(kQ)}:${mQ(oQ)}${uQ}` : `${kQ}:${mQ(oQ)}${uQ}`
    }
    const TQ = "devquests",
      KQ = "none",
      zQ = {
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
      lQ = "Compressed Messy Stone",
      jQ = {
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
      aQ = ["Stone", "Diorite", "Andesite", "Granite"],
      XQ = new Set(aQ),
      fQ = (Object.keys(jQ), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const VQ = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function hQ(QQ, FQ) {
      const wQ = Math.floor(5 * QQ / (2 * FQ + 1));
      return Math.min(4, Math.max(0, wQ))
    }
    var JQ = wQ(1254);
    var EQ = wQ(36021);
    var nQ = wQ(36235),
      gQ = wQ(22),
      PQ = wQ(8644);
    const ZQ = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      yQ = 1e3;

    function BQ(QQ) {
      return Math.max(0, QQ)
    }

    function dQ(QQ) {
      return 1 + .01 * BQ(QQ)
    }

    function QF(QQ) {
      return 1 + .005 * BQ(QQ)
    }

    function FF(QQ) {
      return 1 + .005 * BQ(QQ)
    }

    function wF(QQ) {
      return .01 * BQ(QQ)
    }

    function LF(QQ) {
      return 150 / (150 + BQ(QQ))
    }

    function qF(QQ) {
      return 1 + .002 * BQ(QQ)
    }

    function oF(QQ) {
      return Math.round(10 * QQ) / 10
    }

    function DF(QQ, FQ) {
      switch (QQ) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: oF(100 * (QF(FQ) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: oF(100 * (dQ(FQ) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: oF(100 * (FF(FQ) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: oF(100 * wF(FQ))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: oF(100 * (1 - LF(FQ)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: oF(100 * (qF(FQ) - 1))
          }
      }
    }

    function kF(QQ) {
      return "farming" === QQ ? 200 : 100
    }

    function vF(QQ, FQ) {
      if (!Number.isSafeInteger(QQ) || QQ < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const wQ = kF(FQ),
        LQ = QQ => function(QQ, FQ) {
          return kF(QQ) * FQ * (FQ + 1) / 2
        }(FQ, QQ);
      let qQ = Math.min(yQ, Math.floor((Math.sqrt(8 * QQ / wQ + 1) - 1) / 2));
      return qQ < yQ && LQ(qQ + 1) <= QQ ? qQ++ : LQ(qQ) > QQ && qQ--, {
        totalXp: QQ,
        level: qQ,
        xpIntoLevel: QQ - LQ(qQ),
        xpForNextLevel: qQ === yQ ? null : wQ * (qQ + 1)
      }
    }
    const mF = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function uF(QQ) {
      return mF.has(QQ)
    }
    const HF = new Set(qQ.qb);

    function bF(QQ) {
      return HF.has(QQ)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const YF = {
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
      xF = {
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
      AF = {
        ...xF,
        ...Object.fromEntries(Object.entries(fQ).map((QQ => {
          let [FQ, wQ] = QQ;
          return [FQ, 9 * xF[wQ]]
        })))
      },
      tF = {
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
      eF = {
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
    const MF = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      GF = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function pF(QQ) {
      return `rgb(${GF[QQ].join(", ")})`
    }

    function cF(QQ, FQ, wQ) {
      if (!wQ) return QQ(FQ);
      const LQ = {};
      for (const [qQ, oQ] of Object.entries(wQ)) LQ[qQ] = "string" === typeof oQ ? oQ : QQ(oQ.translationKey);
      return QQ(FQ, LQ)
    }
    class CF {
      constructor(QQ, FQ) {
        this.now = QQ, this.getJournal = FQ, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.ym = !1, this.onShown = () => {}
      }
      enqueue(QQ) {
        const FQ = SF(QQ);
        if (FQ) this.pending.push(QQ);
        else {
          const FQ = this.pending.findIndex(SF);
          this.pending.splice(-1 === FQ ? this.pending.length : FQ, 0, QQ)
        }
        return (null === this.current || null !== this.followUp && !FQ) && (this.advance(), !0)
      }
      setHeld(QQ) {
        return this.ym = QQ, !QQ && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      fH() {
        const QQ = this.getJournal(),
          FQ = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === FQ ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === FQ || void 0 === FQ ? void 0 : FQ.kind) && QQ && QQ.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === FQ || void 0 === FQ ? void 0 : FQ.kind)) {
          const QQ = this.findFollowUp(this.current);
          if ("step" !== (null === QQ || void 0 === QQ ? void 0 : QQ.kind) || QQ.questId !== FQ.questId || QQ.step.id !== FQ.step.id) return this.showFollowUp(QQ, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(QQ, FQ, wQ) {
        var LQ, qQ, oQ, DQ;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, QQ, wQ);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, QQ);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, QQ, FQ);
        const {
          questCompletionKind: kQ,
          questCompletionNameKey: vQ
        } = this.current, mQ = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, uQ = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, HQ = "step" === (null === (LQ = this.followUp) || void 0 === LQ ? void 0 : LQ.kind) ? this.followUp : null, bQ = "explore" === (null === (qQ = this.followUp) || void 0 === qQ ? void 0 : qQ.kind);
        let YQ;
        return YQ = bQ ? QQ("skyblockGame:questExploreTitle") : null !== HQ ? "quest" === kQ ? QQ("skyblockGame:questNextQuestTitle", {
          quest: QQ(HQ.questNameKey)
        }) : QQ("skyblockGame:questNextStepTitle") : QQ("started" === kQ ? "skyblockGame:questStartedTitle" : "quest" === kQ ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? kQ : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: YQ,
          name: bQ ? FQ("skyblockGame:questExploreName") : null !== HQ ? cF(FQ, HQ.step.nameKey, HQ.step.nameParams) : cF(FQ, vQ, mQ),
          description: bQ ? FQ("skyblockGame:questExploreDescription") : null === HQ ? null : cF(FQ, HQ.step.descriptionKey, HQ.step.descriptionParams),
          reward: null === this.followUp && uQ > 0 ? FQ("skyblockGame:questCoinRewardSuffix", {
            amount: uQ.toLocaleString(wQ)
          }) : null,
          iconItem: null !== (oQ = null === HQ || void 0 === HQ ? void 0 : HQ.step.questIconItem) && void 0 !== oQ ? oQ : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== HQ && (null === (DQ = this.getJournal()) || void 0 === DQ ? void 0 : DQ.trackedQuestId) === HQ.questId ? HQ.step.nameKey : null
        }
      }
      getSkillLevelView(QQ, FQ, wQ) {
        let {
          skill: LQ,
          beforeLevel: qQ,
          level: oQ
        } = QQ;
        const DQ = DF(LQ, qQ),
          kQ = DF(LQ, oQ);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: FQ(`skyblockGame:${LQ}`),
          name: FQ("skyblockGame:skillLevelUp", {
            to: oQ.toLocaleString(wQ)
          }),
          description: DQ.percent === kQ.percent ? null : FQ(`${kQ.translationKey}Change`, {
            before: DQ.percent.toLocaleString(wQ),
            after: kQ.percent.toLocaleString(wQ)
          }),
          reward: null,
          iconItem: MF[LQ],
          accent: pF(LQ),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(QQ, FQ) {
        let {
          landmarkNameKey: wQ
        } = QQ;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: FQ("skyblockGame:landmarkDiscovered"),
          name: FQ(wQ),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(QQ, FQ, wQ) {
        let {
          titleKey: LQ,
          textKey: qQ,
          params: oQ = {},
          nameKeys: DQ = {},
          iconItem: kQ = null
        } = QQ;
        const vQ = {
          ...oQ
        };
        for (const [mQ, uQ] of Object.entries(DQ)) vQ[mQ] = FQ(uQ);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: FQ(LQ),
          name: wQ(qQ, vQ),
          description: null,
          reward: null,
          iconItem: kQ,
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
      showFollowUp(QQ, FQ) {
        null === QQ || this.ym ? this.advance() : (this.followUp = QQ, this.token++, this.shownAt = this.now(), this.expiresAt = null !== FQ && void 0 !== FQ ? FQ : this.shownAt + this.durationMs())
      }
      findFollowUp(QQ) {
        var FQ;
        const wQ = this.getJournal();
        if (!wQ || this.hasPendingQuestPopup() || SF(QQ)) return null;
        const LQ = "started" === QQ.questCompletionKind ? wQ.active.some((FQ => FQ.id === QQ.questCompletionQuestId)) : "quest" === QQ.questCompletionKind ? wQ.completed.some((FQ => FQ.id === QQ.questCompletionQuestId)) : [...wQ.active, ...wQ.completed].some((FQ => FQ.id === QQ.questCompletionQuestId && FQ.subquests.some((FQ => FQ.id === QQ.questCompletionStepId && "completed" === FQ.status))));
        if (!LQ) return null;
        if ("quest" === QQ.questCompletionKind && 0 === wQ.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const qQ = wQ.active.find((QQ => QQ.id === wQ.trackedQuestId)),
          oQ = null !== (FQ = null === qQ || void 0 === qQ ? void 0 : qQ.subquests.find((QQ => "ready" === QQ.status))) && void 0 !== FQ ? FQ : null === qQ || void 0 === qQ ? void 0 : qQ.subquests.find((QQ => "active" === QQ.status));
        return oQ ? {
          kind: "step",
          questId: qQ.id,
          questNameKey: qQ.nameKey,
          step: oQ
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((QQ => !SF(QQ)))
      }
      advance() {
        var QQ;
        this.current = this.ym ? null : null !== (QQ = this.pending.shift()) && void 0 !== QQ ? QQ : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function SF(QQ) {
      return iF(QQ.questCompletionKind)
    }

    function iF(QQ) {
      return "skillLevel" === QQ || "landmark" === QQ || "npcNote" === QQ
    }
    var WF = wQ(38066);
    const RF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      OF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      sF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      rF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      IF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var UF = wQ(38072);
    const NF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      TF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const KF = wQ.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const zF = wQ.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      lF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var jF = wQ(18442),
      aF = wQ(20487),
      XF = wQ(22892),
      fF = wQ(24459),
      VF = wQ(26092);
    const hF = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: jF,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: aF,
      cow: IF,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: wQ(26105),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: RF,
      fishing_1: RF,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: OF,
      guardian_iron: sF,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: XF,
      mines: fF,
      mining_1: fF,
      npc: rF,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: IF,
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
      npc_gold_guardian: OF,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: sF,
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
      npc_tentacle_guy: UF,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: NF,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: KF,
      quest_talk: zF,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: lF,
      watermelon: VF
    };

    function JF(QQ, FQ) {
      const wQ = document.createElement("img");
      return wQ.className = FQ, wQ.src = QQ, wQ.alt = "", wQ.draggable = !1, wQ
    }

    function EF(QQ) {
      var FQ;
      const wQ = null !== (FQ = hF[QQ]) && void 0 !== FQ ? FQ : QQ.startsWith("npc_") ? rF : lF;
      if ("portal" !== QQ) return JF(wQ, "SkyblockMapIcon");
      const LQ = document.createElement("span");
      LQ.className = "SkyblockMapIcon Portal";
      const qQ = document.createElement("span");
      return qQ.className = "SkyblockMapIconTint", qQ.style.maskImage = qQ.style.webkitMaskImage = `url("${TF}")`, LQ.append(JF(wQ, "SkyblockMapIconLayer"), qQ, JF(TF, "SkyblockMapIconLayer SkyblockMapIconShade")), LQ
    }
    var nF = wQ(38044),
      gF = wQ(4136);
    const PF = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function ZF(QQ) {
      const FQ = new gF.e(QQ);
      return {
        radius: 45,
        squareness: 3,
        wobbles: PF.map((QQ => {
          let {
            lobes: wQ,
            amount: LQ
          } = QQ;
          return {
            lobes: wQ[Math.floor(FQ.next() * wQ.length)],
            amount: LQ[0] + FQ.next() * (LQ[1] - LQ[0]),
            phase: 2 * FQ.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function yF(QQ) {
      let {
        radius: FQ,
        squareness: wQ,
        wobbles: LQ,
        samples: qQ
      } = QQ;
      const oQ = [];
      for (let DQ = 0; DQ < qQ; DQ++) {
        const QQ = 2 * Math.PI * DQ / qQ,
          kQ = Math.cos(QQ),
          vQ = Math.sin(QQ),
          mQ = FQ * (Math.abs(kQ) ** wQ + Math.abs(vQ) ** wQ) ** (-1 / wQ) * LQ.reduce(((FQ, wQ) => {
            let {
              lobes: LQ,
              amount: qQ,
              phase: oQ
            } = wQ;
            return FQ + qQ * Math.sin(LQ * QQ + oQ)
          }), 1);
        oQ.push(`${(50+mQ*kQ).toFixed(2)} ${(50+mQ*vQ).toFixed(2)}`)
      }
      return `M${oQ.join("L")}Z`
    }
    const BF = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class dF {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.kx = !1, this.mountCompass = QQ => {
          var FQ;
          if (null === (FQ = this.stopLayout) || void 0 === FQ || FQ.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !QQ || this.kx) return;
          const wQ = QQ.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: QQ,
            track: wQ,
            label: QQ.querySelector(".SkyblockCompassLabel")
          }, wQ.replaceChildren();
          for (let qQ = 0; qQ < 4; qQ++) {
            const QQ = document.createElement("span");
            QQ.className = "SkyblockCompassCardinal", wQ.appendChild(QQ), this.cardinals.push(QQ)
          }
          const LQ = (0, nF.e)(BF, [QQ], this.layout);
          this.stopLayout = () => {
            LQ(), wQ.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = QQ => {
          this.terrain = this.kx ? null : QQ, this.render(this.frame)
        }, this.mountMinimapSearchArea = QQ => {
          this.mountSearchArea("minimap", QQ)
        }, this.mountMapSearchArea = QQ => {
          this.mountSearchArea("map", QQ)
        }, this.mountPlayer = QQ => {
          this.player = this.kx ? null : QQ, this.render(this.frame)
        }, this.mountWaypoint = QQ => {
          var FQ, wQ;
          if (null === (FQ = this.stopWaypoint) || void 0 === FQ || FQ.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !QQ || this.kx) return;
          const LQ = QQ.querySelector(".SkyblockQuestWaypointMarker");
          LQ.replaceChildren(EF("quest")), this.markerIcon = "quest", this.waypoint = {
            root: QQ,
            marker: LQ,
            clip: QQ.querySelector(".SkyblockQuestWaypointTextClip"),
            text: QQ.querySelector(".SkyblockQuestWaypointText"),
            label: QQ.querySelector(".SkyblockQuestWaypointLabel"),
            distance: QQ.querySelector(".SkyblockQuestWaypointDistance"),
            hint: QQ.querySelector(".SkyblockQuestWaypointHint")
          };
          const qQ = () => {
              this.waypointMarkerSize = {
                width: LQ.offsetWidth,
                height: LQ.offsetHeight
              }, this.waypointInset = {
                x: LQ.offsetWidth / 2 + 8,
                top: LQ.offsetHeight + 8,
                bottom: 8
              }
            },
            oQ = new ResizeObserver((() => {
              qQ(), this.render(this.frame)
            }));
          oQ.observe(LQ, {
            box: "border-box"
          });
          const DQ = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", DQ), null === (wQ = window.visualViewport) || void 0 === wQ || wQ.addEventListener("resize", DQ), this.stopWaypoint = () => {
            var QQ;
            oQ.disconnect(), window.removeEventListener("resize", DQ), null === (QQ = window.visualViewport) || void 0 === QQ || QQ.removeEventListener("resize", DQ)
          }, DQ(), qQ(), this.render(this.frame)
        }, this.mountWaypointOrigin = QQ => {
          var FQ;
          if (null === (FQ = this.stopWaypointOrigin) || void 0 === FQ || FQ.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = QQ && !this.kx ? Number(QQ.dataset.notificationToken) : null, QQ && !this.kx && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const FQ = {
              nameKey: QQ.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = FQ;
            const wQ = () => {
                const wQ = QQ.getBoundingClientRect();
                FQ.x = (wQ.left + wQ.width / 2) / window.innerWidth * 100, FQ.y = (wQ.top + wQ.height / 2) / window.innerHeight * 100
              },
              LQ = new ResizeObserver(wQ);
            LQ.observe(QQ.parentElement), LQ.observe(QQ), window.addEventListener("resize", wQ), this.stopWaypointOrigin = () => {
              LQ.disconnect(), window.removeEventListener("resize", wQ)
            }, wQ()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const QQ = this.compass.root,
            FQ = getComputedStyle(QQ),
            wQ = getComputedStyle(document.documentElement),
            LQ = parseFloat(wQ.fontSize),
            qQ = parseFloat(FQ.getPropertyValue("--compass-icon-size")) * LQ,
            oQ = "1" === FQ.getPropertyValue("--compass-fit-top").trim(),
            DQ = oQ ? 1 : 8,
            kQ = Array.from(document.querySelectorAll(BF), (QQ => {
              var FQ;
              return (null !== (FQ = QQ.querySelector(".MiddleTextTop")) && void 0 !== FQ ? FQ : QQ).getBoundingClientRect()
            })).filter((QQ => QQ.width > 0 && QQ.height > 0));
          let vQ = (parseFloat(wQ.getPropertyValue("--notchTop")) || 0) + DQ,
            mQ = "";
          if (oQ) {
            const FQ = window.innerWidth / 2,
              wQ = QQ.getBoundingClientRect().height,
              oQ = [vQ, ...kQ.map((QQ => Math.max(vQ, QQ.bottom + DQ)))].sort(((QQ, FQ) => QQ - FQ));
            for (const QQ of oQ) {
              let oQ = FQ - 8;
              for (const LQ of kQ) LQ.bottom + DQ <= QQ || LQ.top >= QQ + wQ + DQ || (oQ = Math.min(oQ, LQ.right <= FQ ? FQ - LQ.right - 8 : LQ.left - FQ - 8));
              const uQ = 2 * oQ - qQ;
              if (uQ >= 16 * LQ) {
                mQ = `${uQ}px`, vQ = QQ;
                break
              }
            }
          }
          QQ.style.maxWidth !== mQ && (QQ.style.maxWidth = mQ);
          const uQ = QQ.getBoundingClientRect(),
            HQ = this.compassSize.trackHalfWidth;
          if (uQ.width > 0) {
            const QQ = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: QQ.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * qQ / QQ.width
          }
          if (!mQ)
            for (const bQ of kQ) bQ.right > uQ.left - 8 && bQ.left < uQ.right + 8 && (vQ = Math.max(vQ, bQ.bottom + DQ));
          QQ.style.top = `${vQ}px`, this.compassSize.trackHalfWidth !== HQ && this.render(this.frame)
        }
      }
      mountSearchArea(QQ, FQ) {
        this.searchAreas[QQ] = this.kx ? null : FQ, this.render(this.frame)
      }
      render(QQ) {
        if (this.kx) return;
        if (this.frame = QQ, this.compass && (Qw(this.compass.root, !QQ), QQ)) {
          const FQ = this.compassSize.trackHalfWidth / 50;
          QQ.compass.cardinals.forEach(((QQ, wQ) => {
            const LQ = this.cardinals[wQ];
            LQ.textContent !== QQ.name && (LQ.textContent = QQ.name), Qw(LQ, QQ.hidden), LQ.style.translate = QQ.left * FQ + "px"
          }));
          const wQ = new Set;
          QQ.compass.markers.forEach(((LQ, qQ) => {
            var oQ;
            wQ.add(LQ.id);
            let DQ = this.markers.get(LQ.id);
            DQ || (DQ = document.createElement("span"), DQ.className = "SkyblockCompassMarker", this.markers.set(LQ.id, DQ), this.compass.track.appendChild(DQ)), DQ.dataset.icon !== LQ.icon && (DQ.dataset.icon = LQ.icon, DQ.replaceChildren(EF(LQ.icon))), DQ.style.color = null !== (oQ = LQ.colour) && void 0 !== oQ ? oQ : "", DQ.style.translate = LQ.left * FQ + "px", DQ.style.zIndex = String(QQ.compass.markers.length - qQ), DQ.title !== LQ.name && (DQ.title = LQ.name)
          }));
          for (const [QQ, LQ] of this.markers) wQ.has(QQ) || (LQ.remove(), this.markers.delete(QQ));
          this.compass.label.textContent !== QQ.compass.label && (this.compass.label.textContent = QQ.compass.label)
        }
        this.terrain && (Qw(this.terrain, !(null !== QQ && void 0 !== QQ && QQ.minimap)), null !== QQ && void 0 !== QQ && QQ.minimap && (this.terrain.style.transform = QQ.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", QQ.minimap.iconRotation)));
        const FQ = null === QQ || void 0 === QQ ? void 0 : QQ.searchArea;
        for (const wQ of [this.searchAreas.minimap, this.searchAreas.map])
          if (wQ && (Qw(wQ, !FQ), FQ)) {
            if (this.searchAreaPath.seed !== FQ.shapeSeed && (this.searchAreaPath = {
                seed: FQ.shapeSeed,
                d: yF(ZF(FQ.shapeSeed))
              }), wQ.dataset.shapeSeed !== FQ.shapeSeed) {
              wQ.dataset.shapeSeed = FQ.shapeSeed;
              for (const QQ of wQ.querySelectorAll("path")) QQ.setAttribute("d", this.searchAreaPath.d)
            }
            wQ.style.left = `${FQ.left}%`, wQ.style.top = `${FQ.top}%`, wQ.style.width = `${FQ.width}%`, wQ.style.height = `${FQ.height}%`
          } if (this.player && (Qw(this.player, !(null !== QQ && void 0 !== QQ && QQ.player) || QQ.player.hidden), null !== QQ && void 0 !== QQ && QQ.player && (this.player.style.left = `${QQ.player.left}%`, this.player.style.top = `${QQ.player.top}%`, this.player.style.setProperty("--map-player-rotation", QQ.player.rotation))), this.waypoint) {
          const {
            root: FQ,
            marker: wQ,
            clip: LQ,
            text: qQ,
            label: oQ,
            distance: DQ,
            hint: kQ
          } = this.waypoint, vQ = !(null !== QQ && void 0 !== QQ && QQ.waypoint) || null !== QQ.waypoint.popupToken && QQ.waypoint.popupToken !== this.waypointOriginToken;
          Qw(FQ, vQ);
          let mQ = 1;
          const uQ = this.waypointLaunch;
          if (!vQ && uQ && QQ.waypoint.nameKey === uQ.nameKey) {
            const QQ = performance.now();
            uQ.startedAt ??= QQ, mQ = Math.min(1, Math.max(0, (QQ - uQ.startedAt - 450) / 1e3)), wQ.style.opacity = String(Math.min(1, (QQ - uQ.startedAt) / 150)), 1 === mQ && (this.waypointLaunch = null)
          } else wQ.style.opacity = "", uQ && null !== uQ.startedAt && (this.waypointLaunch = null);
          if (FQ.classList.toggle("Launching", mQ < 1), null !== QQ && void 0 !== QQ && QQ.waypoint) {
            const FQ = this.waypointInset,
              vQ = "quest_talk" === QQ.waypoint.markerIcon ? function(QQ, FQ, wQ) {
                if (!QQ.text || null === QQ.blockHeight || 0 === QQ.nearness) return QQ;
                const LQ = QQ.blockHeight / 100 * wQ.height,
                  qQ = -QQ.nearness * (Fw * LQ + FQ.width / 2),
                  oQ = QQ.nearness * (ww * LQ + FQ.height / 2);
                return {
                  ...QQ,
                  text: {
                    x: QQ.text.x + qQ / wQ.width * 100,
                    y: QQ.text.y + oQ / wQ.height * 100
                  }
                }
              }(QQ.waypoint, this.waypointMarkerSize, this.viewport) : QQ.waypoint,
              HQ = (0, WF.c)(vQ, FQ, this.viewport),
              bQ = mQ * mQ * (3 - 2 * mQ),
              YQ = mQ < 1 ? uQ.x + (HQ.x - uQ.x) * bQ : HQ.x,
              xQ = mQ < 1 ? uQ.y + (HQ.y - uQ.y) * bQ : HQ.y;
            wQ.style.translate = `${YQ}vw ${xQ}vh`, LQ.style.clipPath = `inset(${FQ.top}px ${FQ.x}px ${FQ.bottom}px)`, Qw(qQ, mQ < 1 || !QQ.waypoint.text), qQ.style.opacity = String(1 - QQ.waypoint.nearness), QQ.waypoint.text && (qQ.style.translate = `${QQ.waypoint.text.x}vw ${QQ.waypoint.text.y}vh`), oQ.textContent !== QQ.waypoint.name && (oQ.textContent = QQ.waypoint.name), this.markerIcon !== QQ.waypoint.markerIcon && (this.markerIcon = QQ.waypoint.markerIcon, wQ.replaceChildren(EF(this.markerIcon))), DQ.textContent !== QQ.waypoint.distance && (DQ.textContent = QQ.waypoint.distance), Qw(kQ, null === QQ.waypoint.hint), null !== QQ.waypoint.hint && kQ.textContent !== QQ.waypoint.hint && (kQ.textContent = QQ.waypoint.hint)
          }
        }
      }
      dispose() {
        var QQ, FQ;
        this.mountWaypointOrigin(null), this.render(null), null === (QQ = this.stopLayout) || void 0 === QQ || QQ.call(this), this.stopLayout = null, null === (FQ = this.stopWaypoint) || void 0 === FQ || FQ.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.kx = !0
      }
    }

    function Qw(QQ, FQ) {
      QQ.hidden !== FQ && (QQ.hidden = FQ)
    }
    const Fw = .55,
      ww = .6;
    const Lw = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class qw {
      constructor(QQ, FQ, wQ, LQ) {
        this.map = QQ, this.quests = FQ, this.compass = wQ, this.display = new dF, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.kx = !1, this.snapshot = null, this.texts = new Map, this.translate = LQ
      }
      setTranslator(QQ, FQ) {
        this.translate = QQ, this.locale = FQ, this.metresFormat = new Intl.NumberFormat(FQ), this.texts.clear()
      }
      translateCached(QQ, FQ) {
        const wQ = void 0 === FQ ? QQ : `${QQ} ${FQ}`;
        let LQ = this.texts.get(wQ);
        return void 0 === LQ && (this.texts.size >= 500 && this.texts.clear(), LQ = this.translate(QQ, void 0 === FQ ? void 0 : {
          distance: FQ
        }), this.texts.set(wQ, LQ)), LQ
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(QQ, FQ, wQ) {
        if (this.kx) return;
        if (!QQ) return this.snapshot = null, void this.display.render(null);
        const LQ = this.map.getSnapshot().map,
          vQ = wQ.cameraHeading,
          mQ = {
            ...this.display.compassSize,
            tanHalfFovX: wQ.tanHalfFovX,
            pitch: wQ.cameraPitch
          },
          uQ = [];
        if (LQ)
          for (const qQ of this.compass.frame(QQ, vQ, FQ)) {
            const QQ = AQ(qQ.offset, mQ);
            null !== QQ && uQ.push({
              ...qQ,
              left: QQ
            })
          }
        const HQ = function(QQ, FQ) {
            const wQ = [],
              LQ = QQ => "quest" === QQ.kind ? QQ.distance - 1 : QQ.distance,
              qQ = [...QQ].sort(((QQ, FQ) => LQ(QQ) - LQ(FQ) || QQ.id.localeCompare(FQ.id)));
            for (const oQ of qQ) {
              let QQ = !1;
              if ("quest" !== oQ.kind)
                for (const LQ of wQ)
                  if (Math.abs(LQ.left - oQ.left) < FQ) {
                    QQ = !0;
                    break
                  } QQ || wQ.push(oQ)
            }
            return wQ
          }(uQ, this.display.compassSpacing),
          bQ = function(QQ) {
            let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              wQ = null;
            for (const LQ of QQ) Math.abs(LQ.offset) <= FQ && (!wQ || LQ.distance < wQ.distance || LQ.distance === wQ.distance && Math.abs(LQ.offset) < Math.abs(wQ.offset)) && (wQ = LQ);
            return wQ
          }(HQ),
          YQ = QQ => {
            var FQ;
            return null !== (FQ = QQ.displayName) && void 0 !== FQ ? FQ : this.translateCached(QQ.nameKey)
          },
          xQ = {
            compass: {
              markers: HQ.map((QQ => ({
                id: QQ.id,
                icon: QQ.icon,
                colour: QQ.colour,
                name: YQ(QQ),
                left: QQ.left
              }))),
              cardinals: DQ.map((QQ => {
                let {
                  name: FQ,
                  bearing: wQ
                } = QQ;
                const LQ = AQ(qQ.e.computeShortestRotation(vQ, wQ), mQ);
                return {
                  name: FQ,
                  left: null !== LQ && void 0 !== LQ ? LQ : 0,
                  hidden: null === LQ
                }
              })),
              label: bQ ? `${YQ(bQ)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",CQ(bQ.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== LQ && void 0 !== LQ && LQ.background) {
          const FQ = QQ[0] - LQ.mapOrigin[0],
            wQ = QQ[2] - LQ.mapOrigin[2],
            {
              rotation: qQ,
              transform: DQ
            } = function(QQ, FQ, wQ, LQ) {
              const [qQ, DQ] = kQ(QQ, FQ, LQ), vQ = oQ - wQ;
              return {
                rotation: vQ,
                transform: `rotate(${vQ}rad) translate(-${qQ}%, -${DQ}%)`
              }
            }(FQ, wQ, vQ, LQ.background.bounds);
          xQ.minimap = {
            transform: DQ,
            iconRotation: -qQ + "rad"
          };
          const [mQ, uQ] = kQ(FQ, wQ, LQ.background.bounds);
          xQ.player = {
            left: mQ,
            top: uQ,
            hidden: mQ < 0 || uQ < 0 || mQ > 100 || uQ > 100,
            rotation: -qQ + "rad"
          }
        }
        const {
          waypoint: tQ
        } = this.quests.getSnapshot();
        if ("search" === (null === tQ || void 0 === tQ ? void 0 : tQ.questMarkerIcon) && null !== LQ && void 0 !== LQ && LQ.background) {
          const {
            bounds: QQ
          } = LQ.background, [FQ, wQ] = kQ(tQ.position[0] - LQ.mapOrigin[0], tQ.position[2] - LQ.mapOrigin[2], QQ);
          xQ.searchArea = {
            left: FQ,
            top: wQ,
            width: 6400 / (QQ.mapMaxX - QQ.mapMinX),
            height: 6400 / (QQ.mapMaxZ - QQ.mapMinZ),
            shapeSeed: tQ.nameKey
          }
        }
        const eQ = this.quests.getNotificationSnapshot(),
          MQ = "completion" === (null === eQ || void 0 === eQ ? void 0 : eQ.phase) && !iF(eQ.kind);
        if (tQ && !MQ) {
          const FQ = Math.hypot(...tQ.position.map(((FQ, wQ) => FQ - QQ[wQ]))),
            LQ = Math.round(FQ),
            qQ = "talk" === tQ.questMarkerIcon ? Math.min(1, Math.max(0, (10 - FQ) / 5)) : 0,
            oQ = wQ.projectWorldPosToViewport(tQ.position),
            DQ = oQ && wQ.projectWorldPosToViewport([tQ.position[0], tQ.position[1] - 1, tQ.position[2]]);
          xQ.waypoint = {
            ...wQ.projectWorldPosToScreenPos(tQ.position),
            text: oQ,
            nearness: qQ * qQ * (3 - 2 * qQ),
            blockHeight: oQ && DQ ? DQ.y - oQ.y : null,
            name: this.translateCached(tQ.nameKey),
            nameKey: tQ.nameKey,
            markerIcon: tQ.questMarkerIcon ? Lw[tQ.questMarkerIcon] : "quest",
            popupToken: (null === eQ || void 0 === eQ ? void 0 : eQ.waypointNameKey) === tQ.nameKey ? eQ.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(LQ)),
            hint: "search" === tQ.questMarkerIcon && Math.hypot(tQ.position[0] - QQ[0], tQ.position[2] - QQ[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = xQ, this.display.render(xQ)
      }
      dispose() {
        this.kx = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const ow = "skyblockSkillsView";
    class Dw extends HQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QQ => QQ,
          LQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          qQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ => QQ;
        super(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = FQ, this.translate = wQ, this.locale = LQ, this.itemName = qQ, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(QQ, FQ, wQ) {
        this.translate = QQ, this.locale = FQ, this.itemName = wQ, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(QQ) {
        let FQ = this.skillText.get(QQ);
        return FQ || (FQ = {
          label: this.translate(`skyblockGame:${QQ}`),
          description: this.translate(`skyblockGame:${QQ}Description`)
        }, this.skillText.set(QQ, FQ)), FQ
      }
      sources(QQ) {
        if ("mining" === QQ || "fishing" === QQ) return this.buildSources(QQ);
        let FQ = this.sourceText.get(QQ);
        return FQ || (FQ = this.buildSources(QQ), this.sourceText.set(QQ, FQ)), FQ
      }
      buildSources(QQ) {
        const FQ = this.translate;
        return "exploration" === QQ ? [FQ("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), FQ("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === QQ ? [FQ("skyblockGame:logSource", {
          xp: this.number(YF["Maple Log"])
        })] : "combat" === QQ ? [FQ("skyblockGame:creatureKillSource"), FQ("skyblockGame:noEnvironmentalXp")] : "farming" === QQ ? [FQ("skyblockGame:cropSource", {
          xp: this.number(tF["Wheat|FreshlyGrown"])
        }), FQ("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), FQ("skyblockGame:noYoungCropXp")] : Object.entries("mining" === QQ ? AF : eF).map((QQ => {
          let [wQ, LQ] = QQ;
          return FQ("skyblockGame:itemXpSource", {
            item: this.itemName(wQ),
            xp: this.number(LQ)
          })
        }))
      }
      number(QQ) {
        return QQ.toLocaleString(this.locale)
      }
      benefit(QQ, FQ) {
        const wQ = DF(QQ, FQ);
        return this.translate(wQ.translationKey, {
          bonus: this.number(wQ.percent)
        })
      }
      bx(QQ) {
        if (!this.kx) {
          if ("snapshot" === QQ.kind) this.progress = QQ.progress, this.pending.clear(), this.recent = null;
          else if ("award" === QQ.kind && this.progress) {
            const {
              award: FQ
            } = QQ;
            this.progress = {
              ...this.progress,
              [FQ.skill]: FQ.after
            };
            for (const [QQ, LQ] of this.pending) LQ.skill === FQ.skill && this.pending.delete(QQ);
            const wQ = FQ.after.level > FQ.before.level;
            this.recordGain(FQ.skill, FQ.amount, wQ ? ++this.nextLevelUpToken : null), wQ && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: FQ.skill,
              beforeLevel: FQ.before.level,
              level: FQ.after.level
            })
          } else {
            if ("rejectBlock" === QQ.kind) return void this.rejectBlock(QQ.position);
            if ("open" === QQ.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(QQ, FQ, wQ) {
        if (!this.progress || this.kx || wQ) return;
        const LQ = function(QQ, FQ) {
          const wQ = QQ.split("|")[0];
          return "Air" === FQ || FQ === `Barkless ${QQ}` ? Object.hasOwn(YF, wQ) ? {
            skill: "foraging",
            amount: YF[wQ]
          } : "Air" !== FQ ? null : Object.hasOwn(AF, QQ) ? {
            skill: "mining",
            amount: AF[QQ]
          } : uF(QQ) ? {
            skill: "farming",
            amount: 10
          } : bF(QQ) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(tF, QQ) ? {
            skill: "farming",
            amount: tF[QQ]
          } : Object.hasOwn(jQ, QQ) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(FQ, "Air");
        if (!LQ) return;
        const qQ = QQ.join(",");
        if (this.pending.has(qQ)) return;
        const oQ = this.predictedProgress(LQ.skill).totalXp + LQ.amount;
        Number.isSafeInteger(oQ) && (this.pending.set(qQ, {
          ...LQ,
          expires: this.now() + 2e3
        }), this.recordGain(LQ.skill, 0), this.emit())
      }
      rejectBlock(QQ) {
        this.pending.delete(QQ.join(",")) && this.emit()
      }
      fH() {
        if (this.kx) return;
        let QQ = !1;
        for (const [FQ, wQ] of this.pending) wQ.expires <= this.now() && (this.pending.delete(FQ), QQ = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, QQ = !0), QQ && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(QQ, FQ) {
        var wQ, LQ;
        let qQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const oQ = (null === (wQ = this.recent) || void 0 === wQ ? void 0 : wQ.skill) === QQ && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          DQ = (null === (LQ = this.recent) || void 0 === LQ ? void 0 : LQ.skill) === QQ && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: QQ,
          confirmed: oQ + FQ,
          expires: this.now() + 3e3,
          levelUpToken: null !== qQ && void 0 !== qQ ? qQ : DQ
        }
      }
      pendingXp(QQ) {
        let FQ = 0;
        for (const wQ of this.pending.values()) wQ.skill === QQ && (FQ += wQ.amount);
        return FQ
      }
      predictedProgress(QQ) {
        const FQ = this.progress[QQ],
          wQ = this.pendingXp(QQ);
        return wQ ? vF(FQ.totalXp + wQ, QQ) : FQ
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var QQ, FQ, wQ;
        const LQ = this.progress ? ZQ.map((QQ => {
            const FQ = this.predictedProgress(QQ);
            return {
              ...this.text(QQ),
              icon: MF[QQ],
              benefit: this.benefit(QQ, FQ.level),
              sources: this.sources(QQ),
              id: QQ,
              selected: QQ === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(FQ.level)
              }),
              xp: null === FQ.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(FQ.xpIntoLevel),
                target: this.number(FQ.xpForNextLevel)
              }),
              percent: null === FQ.xpForNextLevel ? 100 : Math.min(100, FQ.xpIntoLevel / FQ.xpForNextLevel * 100)
            }
          })) : [],
          qQ = LQ.find((QQ => {
            var FQ;
            return QQ.id === (null === (FQ = this.recent) || void 0 === FQ ? void 0 : FQ.skill)
          })),
          oQ = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: LQ,
          detail: null !== (QQ = LQ.find((QQ => QQ.selected))) && void 0 !== QQ ? QQ : null,
          overallLevel: this.progress ? ZQ.reduce(((QQ, FQ) => QQ + this.predictedProgress(FQ).level), 0) : null,
          hud: qQ && oQ > 0 ? {
            skill: qQ,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(oQ)
            }),
            levelUpToken: null !== (FQ = null === (wQ = this.recent) || void 0 === wQ ? void 0 : wQ.levelUpToken) && void 0 !== FQ ? FQ : null,
            colour: pF(qQ.id)
          } : null
        }
      }
    }
    const kw = Math.max(1600, 600, 950) + 400,
      vw = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      mw = "skyblockQuestsView",
      uw = "skyblockQuestNotificationView";
    class Hw extends HQ {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          DQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(QQ, LQ, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = FQ, this.translate = wQ, this.now = qQ, this.locale = oQ, this.publishNotification = DQ, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var QQ, FQ;
          this.selected = null !== (QQ = null === (FQ = this.authoritative) || void 0 === FQ ? void 0 : FQ.trackedQuestId) && void 0 !== QQ ? QQ : null, this.show()
        }, this.select = QQ => {
          this.selected = QQ, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const QQ = this.snapshot.detail;
          !this.kx && null !== QQ && void 0 !== QQ && QQ.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(QQ.id), this.emit())
        }, this.viewDialogue = () => {
          const QQ = this.snapshot.detail;
          var FQ;
          QQ && (null === (FQ = this.onViewDialogue) || void 0 === FQ || FQ.call(this, QQ.id))
        }, this.notifications = new CF(qQ, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.authoritative) || void 0 === FQ ? void 0 : FQ.trackedQuestId) && void 0 !== QQ ? QQ : null
      }
      notify(QQ) {
        !this.kx && this.notifications.enqueue(QQ) && this.emitNotification()
      }
      setNotificationsHeld(QQ) {
        (this.notifications.setHeld(QQ) || QQ) && this.emitNotification()
      }
      fH() {
        var QQ, FQ;
        if (this.kx) return;
        this.notifications.fH() && this.emitNotification();
        let wQ = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, wQ = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, wQ = !0);
        const LQ = bw(this.authoritative);
        null !== LQ && void 0 !== LQ && null !== (QQ = LQ.questClock) && void 0 !== QQ && QQ.running && this.clockText(LQ) !== (null === (FQ = this.snapshot.tracked) || void 0 === FQ ? void 0 : FQ.clock) && (wQ = !0), wQ && this.emit()
      }
      setTranslator(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = QQ, this.locale = FQ, this.emitNotification(), this.emit()
      }
      bx(QQ) {
        if (!this.kx)
          if ("completion" === QQ.kind) this.notify(QQ.questCompletion);
          else if ("landmark" === QQ.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: QQ.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === QQ.kind) {
          var FQ, wQ, LQ;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: QQ.npcNoteTitleKey,
            textKey: QQ.npcNoteTextKey,
            params: null !== (FQ = QQ.npcNoteParams) && void 0 !== FQ ? FQ : {},
            nameKeys: null !== (wQ = QQ.npcNoteNameKeys) && void 0 !== wQ ? wQ : {},
            iconItem: null !== (LQ = QQ.npcNoteIconItem) && void 0 !== LQ ? LQ : null
          })
        } else if ("open" === QQ.kind) this.show();
        else if ("guidance" === QQ.kind) this.waypoint = QQ.waypoint, this.compassTarget = QQ.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === QQ.kind) {
          this.authoritative = QQ.snapshot, this.notifications.fH() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const FQ = this.trackedStepPulse;
          this.updateTrackedStepPulse(QQ.snapshot), this.emit(), this.trackedStepPulse > FQ && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.kx || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var QQ;
        return null !== (QQ = this.translateWithIcons) && void 0 !== QQ ? QQ : this.translate
      }
      clockText(QQ) {
        const FQ = QQ.questClock;
        if (!FQ) return null;
        const wQ = FQ.elapsedMs + (FQ.running ? this.now() - this.receivedAt : 0);
        return void 0 === FQ.countdownFromMs ? NQ(wQ, !1) : NQ(1e3 * Math.ceil(Math.max(0, FQ.countdownFromMs - wQ) / 1e3), !1)
      }
      updateTrackedStepPulse(QQ) {
        var FQ, wQ, LQ;
        const qQ = bw(QQ);
        if (!qQ) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const oQ = QQ => qQ.subquests.filter((FQ => QQ(FQ.status))).map((QQ => QQ.id)),
          DQ = oQ((QQ => "completed" === QQ || "skipped" === QQ)),
          kQ = oQ((QQ => "locked" !== QQ)),
          vQ = (null === (FQ = this.trackedSteps) || void 0 === FQ ? void 0 : FQ.questId) === qQ.id && qQ.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (vQ) {
          const QQ = DQ.filter((QQ => !vQ.finished.has(QQ))),
            FQ = oQ((QQ => "active" === QQ || "ready" === QQ)).filter((QQ => !vQ.unlocked.has(QQ)));
          QQ.length > 0 && this.trackedStepPulse++, (QQ.length > 0 || FQ.length > 0) && (this.trackedChange = {
            finished: new Set(QQ),
            unlocked: new Set(FQ),
            expiresAt: this.now() + kw
          })
        } else {
          var mQ;
          this.trackedStepPulse = (null === (mQ = this.trackedSteps) || void 0 === mQ ? void 0 : mQ.questId) === qQ.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: qQ.id,
          progress: qQ.progress,
          finished: new Set([...null !== (wQ = null === vQ || void 0 === vQ ? void 0 : vQ.finished) && void 0 !== wQ ? wQ : [], ...DQ]),
          unlocked: new Set([...null !== (LQ = null === vQ || void 0 === vQ ? void 0 : vQ.unlocked) && void 0 !== LQ ? LQ : [], ...kQ])
        }
      }
      entry(QQ, FQ) {
        var wQ, LQ;
        const qQ = QQ.id === (null === (wQ = this.authoritative) || void 0 === wQ ? void 0 : wQ.trackedQuestId),
          oQ = this.now() < this.trackAvailableAt,
          DQ = this.questTextTranslator(),
          kQ = QQ.subquests.map((FQ => {
            var wQ, LQ, oQ, kQ, vQ, mQ;
            const uQ = null !== (wQ = FQ.handInNpcName) && void 0 !== wQ ? wQ : QQ.giverName,
              HQ = this.translate("skyblockGame:progress", {
                current: FQ.progress.toLocaleString(this.locale),
                target: FQ.target.toLocaleString(this.locale)
              }),
              bQ = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: uQ ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [FQ.status],
              YQ = "active" === FQ.status || "ready" === FQ.status;
            return {
              id: FQ.id,
              name: cF(DQ, FQ.nameKey, FQ.nameParams),
              description: cF(DQ, FQ.descriptionKey, FQ.descriptionParams),
              progress: HQ,
              status: FQ.status,
              statusLabel: bQ ? this.translate(bQ, {
                npc: uQ
              }) : HQ,
              iconItem: YQ && null !== (LQ = FQ.questIconItem) && void 0 !== LQ ? LQ : null,
              barPercent: "active" === FQ.status && FQ.showsProgressBar ? Math.min(100, 100 * FQ.progress / FQ.target) : null,
              justFinished: qQ && null !== (oQ = null === (kQ = this.trackedChange) || void 0 === kQ ? void 0 : kQ.finished.has(FQ.id)) && void 0 !== oQ && oQ,
              justUnlocked: qQ && null !== (vQ = null === (mQ = this.trackedChange) || void 0 === mQ ? void 0 : mQ.unlocked.has(FQ.id)) && void 0 !== vQ && vQ
            }
          }));
        return {
          id: QQ.id,
          name: cF(DQ, QQ.nameKey, QQ.nameParams),
          description: cF(DQ, QQ.descriptionKey, QQ.descriptionParams),
          progress: FQ ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: QQ.progress.toLocaleString(this.locale),
            target: QQ.target.toLocaleString(this.locale)
          }),
          completed: FQ,
          tracked: qQ,
          selected: QQ.id === this.selected,
          canTrack: !FQ && !qQ && !oQ,
          trackLabel: this.translate(qQ ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : oQ ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== QQ.id,
          subquests: kQ,
          focusStep: null !== (LQ = kQ.find((QQ => null !== QQ.barPercent))) && void 0 !== LQ ? LQ : null,
          clock: this.clockText(QQ)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ;
        const uQ = [...null !== (QQ = null === (FQ = this.authoritative) || void 0 === FQ ? void 0 : FQ.active) && void 0 !== QQ ? QQ : [], ...null !== (wQ = null === (LQ = this.authoritative) || void 0 === LQ ? void 0 : LQ.completed) && void 0 !== wQ ? wQ : []];
        var HQ, bQ, YQ, xQ;
        uQ.some((QQ => QQ.id === this.selected)) || (this.selected = null !== (HQ = null !== (bQ = null === (YQ = this.authoritative) || void 0 === YQ ? void 0 : YQ.trackedQuestId) && void 0 !== bQ ? bQ : null === (xQ = uQ[0]) || void 0 === xQ ? void 0 : xQ.id) && void 0 !== HQ ? HQ : null);
        const AQ = null !== (qQ = null === (oQ = this.authoritative) || void 0 === oQ ? void 0 : oQ.active.map((QQ => this.entry(QQ, !1)))) && void 0 !== qQ ? qQ : [];
        AQ.sort(((QQ, FQ) => Number(FQ.tracked) - Number(QQ.tracked)));
        const tQ = null !== (DQ = null === (kQ = this.authoritative) || void 0 === kQ ? void 0 : kQ.completed.map((QQ => this.entry(QQ, !0)))) && void 0 !== DQ ? DQ : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: AQ,
          completed: tQ,
          completedExpanded: this.completedExpanded,
          detail: null !== (vQ = [...AQ, ...tQ].find((QQ => QQ.selected))) && void 0 !== vQ ? vQ : null,
          tracked: null !== (mQ = AQ.find((QQ => QQ.tracked))) && void 0 !== mQ ? mQ : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function bw(QQ) {
      var FQ;
      return null !== (FQ = null === QQ || void 0 === QQ ? void 0 : QQ.active.find((FQ => FQ.id === QQ.trackedQuestId))) && void 0 !== FQ ? FQ : null
    }
    const Yw = "skyblockDungeonsView";
    class xw extends HQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          LQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = FQ, this.locale = wQ, this.requestEnter = LQ, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            FQ = null === QQ || void 0 === QQ ? void 0 : QQ.difficulties[this.pageIndex];
          void 0 !== FQ && null !== FQ.unlockedBoss && (this.close(), this.requestEnter(QQ.id, FQ.difficulty))
        }
      }
      setTranslator(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = QQ, this.locale = FQ, this.emit()
      }
      bx(QQ) {
        var FQ, wQ;
        if (!this.kx) return "open" === QQ.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== QQ.kind ? "snapshot" === QQ.kind && (this.authoritative = QQ.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (FQ = null === (wQ = this.pickerEntry()) || void 0 === wQ ? void 0 : wQ.difficulties.length) && void 0 !== FQ ? FQ : 1) - 1)), null === QQ.snapshot && this.open ? this.close() : this.emit()) : this.choose(QQ.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(QQ) {
        var FQ;
        const wQ = null === (FQ = this.authoritative) || void 0 === FQ ? void 0 : FQ.dungeons.find((FQ => FQ.id === QQ));
        void 0 !== wQ ? this.open && this.pickerDungeonId === QQ || (this.pickerDungeonId = QQ, this.pageIndex = Math.max(0, wQ.difficulties.findLastIndex((QQ => null !== QQ.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${QQ}`)
      }
      turnTo(QQ) {
        var FQ, wQ;
        const LQ = null !== (FQ = null === (wQ = this.pickerEntry()) || void 0 === wQ ? void 0 : wQ.difficulties.length) && void 0 !== FQ ? FQ : 0;
        QQ < 0 || QQ >= LQ || QQ === this.pageIndex || (this.pageIndex = QQ, this.emit())
      }
      pickerEntry() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.authoritative) || void 0 === FQ ? void 0 : FQ.dungeons.find((QQ => QQ.id === this.pickerDungeonId))) && void 0 !== QQ ? QQ : null
      }
      difficulty(QQ) {
        const FQ = QQ.completions > 0,
          wQ = null === QQ.bestMs ? null : NQ(QQ.bestMs);
        return {
          difficulty: QQ.difficulty,
          label: this.translate(IQ[QQ.difficulty]),
          colour: UQ[QQ.difficulty],
          beaten: FQ,
          bestTime: wQ,
          completions: QQ.completions,
          summary: FQ ? [null === wQ ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: wQ
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: QQ.completions.toLocaleString(this.locale)
          })].filter((QQ => null !== QQ)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(QQ) {
        const FQ = QQ.difficulties.map((QQ => this.difficulty(QQ))),
          wQ = FQ.filter((QQ => QQ.beaten)).length;
        return {
          id: QQ.id,
          name: this.translate(QQ.nameKey),
          selected: QQ.id === this.selected,
          beatenSummary: `${wQ} / ${FQ.length}`,
          difficulties: FQ
        }
      }
      picker() {
        const QQ = this.pickerEntry();
        if (null === QQ || 0 === QQ.difficulties.length) return null;
        const FQ = QQ.difficulties.map(((FQ, wQ) => {
          var LQ, qQ, oQ, DQ;
          const kQ = FQ.unlockedBoss,
            vQ = null === kQ ? this.lockedHint(QQ, wQ) : null;
          return {
            ...this.difficulty(FQ),
            unlocked: null !== kQ,
            bossName: null === kQ ? null : this.translate(kQ.bossNameKey),
            bossMobType: null !== (LQ = null === kQ || void 0 === kQ ? void 0 : kQ.bossMobType) && void 0 !== LQ ? LQ : null,
            bossMobVariation: null !== (qQ = null === kQ || void 0 === kQ ? void 0 : kQ.bossMobVariation) && void 0 !== qQ ? qQ : null,
            lockedHint: null !== (oQ = null === vQ || void 0 === vQ ? void 0 : vQ.text) && void 0 !== oQ ? oQ : null,
            lockedHintHighlight: null !== (DQ = null === vQ || void 0 === vQ ? void 0 : vQ.highlight) && void 0 !== DQ ? DQ : null,
            current: wQ === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(QQ.nameKey),
          pages: FQ,
          page: FQ[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < FQ.length - 1
        }
      }
      lockedHint(QQ, FQ) {
        var wQ, LQ, qQ;
        if (0 === FQ && "number" === typeof QQ.combatLevelLock) {
          const FQ = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: QQ.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: FQ,
            colour: pF("combat"),
            icon: MF.combat
          })
        }
        const oQ = null !== (wQ = null === (LQ = this.authoritative) || void 0 === LQ ? void 0 : LQ.dungeons) && void 0 !== wQ ? wQ : [],
          DQ = FQ > 0 ? QQ : null !== (qQ = oQ[oQ.indexOf(QQ) - 1]) && void 0 !== qQ ? qQ : null,
          kQ = FQ > 0 ? QQ.difficulties[FQ - 1] : null === DQ || void 0 === DQ ? void 0 : DQ.difficulties[0];
        if (null === DQ || void 0 === kQ) return null;
        const vQ = this.translate(DQ.nameKey);
        if (null === kQ.unlockedBoss) return DQ === QQ ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, kQ.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: vQ
        }, kQ.difficulty);
        const mQ = this.translate(kQ.unlockedBoss.bossNameKey);
        return DQ === QQ ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: mQ
        }, kQ.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: mQ,
            dungeon: vQ
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(QQ, FQ, wQ) {
        return this.hintHighlighting(QQ, FQ, "difficulty", {
          name: this.translate(IQ[wQ]),
          colour: UQ[wQ],
          icon: null
        })
      }
      hintHighlighting(QQ, FQ, wQ, LQ) {
        let {
          name: qQ,
          colour: oQ,
          icon: DQ
        } = LQ;
        const kQ = this.translate(QQ, {
          ...FQ,
          [wQ]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(QQ, {
            ...FQ,
            [wQ]: qQ
          }),
          highlight: 2 === kQ.length ? {
            before: kQ[0],
            name: qQ,
            after: kQ[1],
            colour: oQ,
            icon: DQ
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var QQ, FQ, wQ;
        const LQ = null !== (QQ = null === (FQ = this.authoritative) || void 0 === FQ ? void 0 : FQ.dungeons) && void 0 !== QQ ? QQ : [];
        var qQ, oQ;
        LQ.some((QQ => QQ.id === this.selected)) || (this.selected = null !== (qQ = null === (oQ = LQ[0]) || void 0 === oQ ? void 0 : oQ.id) && void 0 !== qQ ? qQ : null);
        const DQ = LQ.map((QQ => this.entry(QQ)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: DQ,
          detail: null !== (wQ = DQ.find((QQ => QQ.selected))) && void 0 !== wQ ? wQ : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const Aw = ["mining", "farming", "foraging", "fishing", "combat"],
      tw = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      ew = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Mw() {
      for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
      return FQ.map(((QQ, FQ) => ({
        amount: QQ,
        coins: tw[FQ],
        xp: ew[FQ]
      })))
    }
    const Gw = Mw(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      pw = Mw(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Cw = Mw(50, 100, 250, 500, 1e3, 2500, 5e3),
      Sw = Mw(25, 50, 100, 250, 500, 1e3),
      iw = Mw(10, 25, 50, 100, 250, 500, 1e3),
      Ww = Mw(1, 5, 10, 25, 50);

    function Rw(QQ, FQ) {
      return {
        id: QQ,
        category: "fishing",
        item: FQ,
        drops: [FQ],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iw
      }
    }
    const Ow = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: pw
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Cw
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Cw
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Sw
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Sw
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: pw
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Gw
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Gw
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Gw
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Cw
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: pw
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: pw
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: pw
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Cw
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Cw
      }, Rw("wheatfish", "Wheatfish"), Rw("darter", "Darter"), Rw("sunset_minnow", "Sunset Minnow"), Rw("root_flounder", "Root Flounder"), Rw("greenfin_loach", "Greenfin Loach"), Rw("red_strongfish", "Red Strongfish"), Rw("green_strongfish", "Green Strongfish"), Rw("boomerang_fish", "Boomerang Fish"), Rw("seahorse", "Seahorse"), Rw("spined_stickleback", "Spined Stickleback"), Rw("moon_strongfish", "Moon Strongfish"), Rw("boulder_bass", "Boulder Bass"), Rw("grass_snapper", "Grass Snapper"), Rw("crystal_wheatfish", "Crystalized Wheatfish", Ww), Rw("moonstone_pupfish", "Moonstone Pupfish", Ww), Rw("reedglass_minnow", "Reedglass Minnow"), Rw("mangrove_herring", "Mangrove Herring"), Rw("mudline_perch", "Mudline Perch"), Rw("coastal_mullet", "Coastal Mullet"), Rw("reef_sardine", "Reef Sardine"), Rw("root_perch", "Root Perch"), Rw("driftwood_catfish", "Driftwood Catfish"), Rw("aether_minnow", "Aether Minnow"), Rw("needlefish", "Tri-Pointed Needlefish"), Rw("threadfin_bream", "Threadfin Bream"), Rw("mudbelly_tilapia", "Mudbelly Tilapia"), Rw("rotslab_eel", "Rotslab Eel"), Rw("polarflash_electron", "Polarflash Electron"), Rw("mireback_carp", "Mireback Carp"), Rw("blackwater_bream", "Blackwater Bream"), Rw("stone_grouper", "Stone Grouper"), Rw("shadeback_ray", "Shadeback Ray"), Rw("glacial_silverfish", "Glacial Silverfish"), Rw("hatchetfish", "Hatchetfish"), Rw("moonlit_boomerang", "Moonlit Boomerang Fish"), Rw("murkborne_ray", "Murkborne Ray"), Rw("bamboo_catfish", "Bamboo Catfish"), Rw("mossback_arapaima", "Mossback Arapaima"), Rw("murk_stingray", "Murk Stingray"), Rw("channel_sawfish", "Channel Sawfish"), Rw("boned_sturgeon", "Boned Sturgeon"), Rw("oarfish", "Oarfish"), Rw("snakehead", "Snakehead", Ww), Rw("eldertide_leviathan", "Eldertide Leviathan", Ww), Rw("pithead", "Pithead"), Rw("electric_eel", "Electric Eel"), Rw("shadow_darter", "Shadow Darter"), Rw("abyss_carp", "Abyss Carp"), Rw("nomai_moray", "Nomai Moray"), Rw("silver_dragonfish", "Silver Dragonfish"), Rw("giant_moray", "Giant Moray"), Rw("coelacanth", "Coelacanth", Ww), Rw("frost_herring", "Frost Herring"), Rw("permafrost_halibut", "Permafrost Halibut"), Rw("glacial_lanternfish", "Glacial Lanternfish"), Rw("frozen_grenadier", "Frozen Grenadier"), Rw("blackfin_icefish", "Blackfin Icefish"), Rw("moonfish", "Moonfish"), Rw("alpha_strongfish", "Alpha Moon Strongfish"), Rw("deep_lanternfish", "Deepwater Lanternfish", Ww), Rw("pearlescent_moonfish", "Pearlescent Moonfish", Ww), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: pw
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Sw
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Sw
      }],
      sw = (new Map(Ow.map((QQ => [QQ.id, QQ]))), new Map),
      rw = new Map;
    for (const Hv of Ow) {
      for (const [QQ, FQ] of Object.entries(null !== (Iw = Hv.blocks) && void 0 !== Iw ? Iw : {})) {
        var Iw;
        sw.set(QQ, {
          collection: Hv,
          amount: FQ
        })
      }
      for (const QQ of null !== (Uw = Hv.drops) && void 0 !== Uw ? Uw : []) {
        var Uw;
        rw.set(QQ, Hv)
      }
    }

    function Nw(QQ, FQ) {
      let wQ = 0;
      for (; wQ < QQ.tiers.length && FQ >= QQ.tiers[wQ].amount;) wQ++;
      return wQ
    }
    const Tw = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Kw(QQ) {
      return Tw[QQ - 1]
    }
    const zw = "skyblockCollectionsView";
    class lw extends HQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          LQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : QQ => QQ;
        super(QQ, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = FQ, this.locale = wQ, this.itemName = LQ, this.counts = null, this.category = "mining", this.selected = Ow[0].id, this.snapshot = {
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
      setTranslator(QQ, FQ, wQ) {
        this.translate = QQ, this.locale = FQ, this.itemName = wQ, this.emit()
      }
      bx(QQ) {
        if (!this.kx)
          if ("collOpen" !== QQ.kind) {
            (QQ.collFull || null === this.counts) && (this.counts = new Map);
            for (const [FQ, wQ] of QQ.collCounts) this.counts.set(FQ, wQ);
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
        const FQ = this.inCategory(this.category).map((QQ => this.collectionView(QQ))),
          wQ = Ow.reduce(((QQ, FQ) => QQ + this.tierOf(FQ)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: Aw.map((QQ => this.categoryView(QQ))),
          collections: FQ,
          detail: null !== (QQ = FQ.find((QQ => QQ.selected))) && void 0 !== QQ ? QQ : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(wQ)
          })
        }
      }
      categoryView(QQ) {
        const FQ = this.inCategory(QQ),
          wQ = FQ.reduce(((QQ, FQ) => QQ + this.tierOf(FQ)), 0),
          LQ = FQ.reduce(((QQ, FQ) => QQ + FQ.tiers.length), 0);
        return {
          id: QQ,
          label: this.translate(`skyblockGame:${QQ}`),
          icon: MF[QQ],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(wQ),
            target: this.number(LQ)
          }),
          selected: QQ === this.category
        }
      }
      collectionView(QQ) {
        var FQ, wQ;
        const LQ = null !== (FQ = this.counts.get(QQ.id)) && void 0 !== FQ ? FQ : 0,
          qQ = Nw(QQ, LQ),
          oQ = null !== (wQ = QQ.tiers[qQ]) && void 0 !== wQ ? wQ : null,
          DQ = 0 === qQ ? 0 : QQ.tiers[qQ - 1].amount;
        return {
          id: QQ.id,
          name: this.itemName(QQ.item),
          icon: QQ.item,
          selected: QQ.id === this.selected,
          locked: 0 === LQ,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(LQ)
          }),
          tier: 0 === qQ ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(qQ),
          percent: null === oQ ? 100 : Math.min(100, (LQ - DQ) / (oQ.amount - DQ) * 100),
          progress: null === oQ ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(LQ),
            target: this.number(oQ.amount)
          }),
          nextReward: null === oQ ? null : this.reward(QQ, oQ.coins, oQ.xp)
        }
      }
      reward(QQ, FQ, wQ) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(FQ),
          xp: this.number(wQ),
          skill: this.translate(`skyblockGame:${QQ.category}`)
        })
      }
      tierLabel(QQ) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Kw(QQ)
        })
      }
      tierOf(QQ) {
        var FQ;
        return Nw(QQ, null !== (FQ = this.counts.get(QQ.id)) && void 0 !== FQ ? FQ : 0)
      }
      inCategory(QQ) {
        return Ow.filter((FQ => FQ.category === QQ))
      }
      number(QQ) {
        return QQ.toLocaleString(this.locale)
      }
    }
    const jw = "skyblockPortalTransitView",
      aw = "skyblockPortalArrival";
    class Xw {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.GA = QQ, this.storage = FQ, this.now = wQ, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      bx(QQ) {
        const FQ = {
          zoneNameKey: QQ.transitZoneNameKey,
          variation: QQ.transitZoneVariation,
          colour: QQ.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(aw, FQ), this.show("departure", FQ.zoneNameKey, FQ.colour, QQ.transitDurationMs, QQ.transitDurationMs + 1500, (() => {
          this.storage.removeItem(aw)
        }))
      }
      resumeArrival(QQ) {
        const FQ = this.storage.getItem(aw);
        this.storage.removeItem(aw), null === FQ || FQ.variation !== QQ || this.now() - FQ.departedAt > 3e4 || this.show("arrival", FQ.zoneNameKey, FQ.colour, 3200, 2e4)
      }
      finishArrival(QQ) {
        var FQ;
        "arrival" === (null === (FQ = this.view) || void 0 === FQ ? void 0 : FQ.phase) && this.view.token === QQ && (this.clearTimer(), this.view = null, this.GA(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: QQ,
          zoneNameKey: FQ,
          colour: wQ,
          durationMs: LQ
        }, this.GA(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.GA(null), null === oQ || void 0 === oQ || oQ()
        }), qQ)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const fw = "skyblockDailyRewardView",
      Vw = "skyblockDailyRewardCoin";
    class hw {
      constructor(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          vQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.GA = QQ, this.isBusy = FQ, this.holdQuestPopups = wQ, this.onHeldCoinsChanged = LQ, this.onCoinLanded = qQ, this.onStarted = oQ, this.onFinished = DQ, this.onItemLanded = kQ, this.now = vQ, this.ym = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.playing) || void 0 === FQ ? void 0 : FQ.view) && void 0 !== QQ ? QQ : null
      }
      getHeldCoins() {
        var QQ, FQ;
        let wQ = 0;
        for (const LQ of this.ym) wQ += LQ.coins;
        return wQ - (null !== (QQ = null === (FQ = this.playing) || void 0 === FQ ? void 0 : FQ.released) && void 0 !== QQ ? QQ : 0)
      }
      bx(QQ) {
        "dailyRewardClaimed" !== QQ.kind ? (this.queue.push(QQ), this.fH()) : this.ym.push({
          coins: QQ.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      fH() {
        const QQ = this.now();
        if (null === this.playing) return this.releaseUnshown(QQ), void this.startNext(QQ);
        const FQ = this.playing,
          wQ = QQ - FQ.startedAt,
          LQ = FQ.view.flyingCoins,
          qQ = function(QQ, FQ) {
            let wQ = 0;
            for (; wQ < FQ && Ew(wQ, FQ) <= QQ;) wQ++;
            return wQ
          }(wQ, LQ);
        if (qQ !== FQ.landed) {
          for (let QQ = qQ - FQ.landed > 2 ? qQ - 1 : FQ.landed; QQ < qQ; QQ++) this.onCoinLanded(QQ, LQ);
          FQ.landed = qQ, FQ.released = Math.round(FQ.view.coins * qQ / LQ), this.onHeldCoinsChanged()
        }
        for (; FQ.itemsLanded < FQ.view.items.length && 2e3 + 160 * FQ.itemsLanded + 630 <= wQ;) this.onItemLanded(FQ.itemsLanded), FQ.itemsLanded++;
        wQ >= FQ.view.durationMs && (this.finish(), this.startNext(QQ))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.ym = [], this.GA(null)
      }
      startNext(QQ) {
        if (0 === this.queue.length || this.isBusy()) return;
        const FQ = this.queue.shift();
        this.token++;
        const wQ = {
          token: this.token,
          day: FQ.dailyRewardDay,
          coins: FQ.dailyRewardCoins,
          items: FQ.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: FQ.dailyRewardDay === OQ ? 24 : 14
        };
        this.playing = {
          view: wQ,
          startedAt: QQ,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.GA(wQ), this.onStarted(wQ)
      }
      finish() {
        this.ym.shift(), this.playing = null, this.holdQuestPopups(!1), this.GA(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(QQ) {
        if (this.queue.length > 0 || 0 === this.ym.length) return;
        const FQ = this.ym.length;
        this.ym = this.ym.filter((FQ => QQ - FQ.receivedAt < 6e4)), this.ym.length !== FQ && this.onHeldCoinsChanged()
      }
    }

    function Jw(QQ, FQ) {
      return 450 + 715 * QQ / (FQ - 1)
    }

    function Ew(QQ, FQ) {
      return Jw(QQ, FQ) + 650
    }
    const nw = "skyblockMailboxView";
    class gw {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.GA = QQ, this.isBusy = FQ, this.onStarted = wQ, this.now = LQ, this.waiting = [], this.playing = null, this.token = 0, this.itemName = QQ => QQ
      }
      getSnapshot() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.playing) || void 0 === FQ ? void 0 : FQ.view) && void 0 !== QQ ? QQ : null
      }
      setItemName(QQ) {
        this.itemName = QQ
      }
      bx(QQ) {
        this.waiting.push(...QQ.mailLetters), this.fH()
      }
      fH() {
        const QQ = this.now();
        null !== this.playing && QQ - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.GA(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(QQ)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.GA(null)
      }
      start(QQ) {
        const FQ = this.waiting.slice(0, 3);
        this.token++;
        const wQ = {
          token: this.token,
          letters: FQ.map((QQ => this.toView(QQ))),
          more: this.waiting.length - FQ.length,
          durationMs: 4500 + 700 * FQ.length
        };
        this.waiting = [], this.playing = {
          view: wQ,
          startedAt: QQ
        }, this.GA(wQ), this.onStarted(wQ)
      }
      toView(QQ) {
        return {
          coins: QQ.mailCoins,
          items: QQ.mailItems.map((QQ => {
            var FQ;
            return {
              itemName: QQ.mailItemName,
              amount: QQ.mailItemAmount,
              label: null !== (FQ = QQ.mailItemLabel) && void 0 !== FQ ? FQ : this.itemName(QQ.mailItemName)
            }
          })),
          reasonKey: QQ.mailReasonKey,
          reasonParams: QQ.mailReasonParams
        }
      }
    }
    const Pw = "skyblockQuestGraphView",
      Zw = "skyblockDevQuestJump";

    function yw(QQ) {
      if (0 === QQ.length) return "";
      const FQ = [`M ${QQ[0].x} ${QQ[0].y}`];
      for (let LQ = 1; LQ < QQ.length - 1; LQ++) {
        const wQ = QQ[LQ + 1];
        FQ.push(`Q ${QQ[LQ].x} ${QQ[LQ].y} ${(QQ[LQ].x+wQ.x)/2} ${(QQ[LQ].y+wQ.y)/2}`)
      }
      const wQ = QQ[QQ.length - 1];
      return FQ.push(`L ${wQ.x} ${wQ.y}`), FQ.join(" ")
    }

    function Bw(QQ, FQ) {
      return QQ < FQ ? `${QQ}|${FQ}` : `${FQ}|${QQ}`
    }
    class dw extends HQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(QQ, wQ, LQ), this.translate = FQ, this.requestJump = qQ, this.requestArrive = oQ, this.storage = DQ, this.now = kQ, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      bx(QQ) {
        if (!this.kx)
          if ("graph" !== QQ.kind) {
            if ("jumping" === QQ.kind) {
              const FQ = {
                questId: QQ.graphQuestId,
                variation: QQ.graphVariation,
                completes: QQ.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Zw, FQ)
            }
          } else {
            const FQ = ++this.graphCount;
            wQ.e(112).then((() => wQ(6280))).then((wQ => {
              let {
                default: LQ
              } = wQ;
              this.kx || FQ !== this.graphCount || (this.layout = function(QQ, FQ, wQ) {
                var LQ, qQ;
                const oQ = new QQ.graphlib.Graph;
                oQ.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), oQ.setDefaultEdgeLabel((() => ({})));
                const DQ = new Set;
                for (const uQ of FQ) DQ.add(uQ.graphQuestId), oQ.setNode(uQ.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const kQ = wQ.filter((QQ => DQ.has(QQ.graphFromId) && DQ.has(QQ.graphToId) && QQ.graphFromId !== QQ.graphToId)),
                  vQ = new Map;
                for (const uQ of [...kQ].sort(((QQ, FQ) => Number("awaits" === QQ.graphEdgeKind) - Number("awaits" === FQ.graphEdgeKind)))) {
                  const QQ = Bw(uQ.graphFromId, uQ.graphToId);
                  vQ.has(QQ) || (vQ.set(QQ, uQ), oQ.setEdge(uQ.graphFromId, uQ.graphToId))
                }
                QQ.layout(oQ);
                const mQ = oQ.graph();
                return {
                  width: Math.ceil(null !== (LQ = mQ.width) && void 0 !== LQ ? LQ : 0),
                  height: Math.ceil(null !== (qQ = mQ.height) && void 0 !== qQ ? qQ : 0),
                  nodes: FQ.map((QQ => {
                    var FQ, wQ;
                    const LQ = oQ.node(QQ.graphQuestId);
                    return {
                      node: QQ,
                      left: (null !== (FQ = LQ.x) && void 0 !== FQ ? FQ : 0) - 95,
                      top: (null !== (wQ = LQ.y) && void 0 !== wQ ? wQ : 0) - 26
                    }
                  })),
                  edges: kQ.map((QQ => {
                    var FQ;
                    const wQ = vQ.get(Bw(QQ.graphFromId, QQ.graphToId)),
                      LQ = null !== (FQ = oQ.edge(wQ.graphFromId, wQ.graphToId).points) && void 0 !== FQ ? FQ : [];
                    return {
                      edge: QQ,
                      key: `${QQ.graphFromId}|${QQ.graphToId}|${QQ.graphEdgeKind}`,
                      path: yw(wQ.graphFromId === QQ.graphFromId ? LQ : [...LQ].reverse())
                    }
                  })),
                  plans: new Map(FQ.map((QQ => [QQ.graphQuestId, new Set([QQ.graphQuestId, ...QQ.graphPlanIds])])))
                }
              }(LQ, QQ.graphNodes, QQ.graphEdges), this.show())
            })).catch((QQ => {
              console.error("The quest graph could not be laid out", QQ)
            }))
          }
      }
      resumeJump(QQ) {
        const FQ = this.storage.getItem(Zw);
        this.storage.removeItem(Zw), null === FQ || FQ.variation !== QQ || this.now() - FQ.departedAt > 6e4 || this.requestArrive(FQ.questId, FQ.completes)
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
        var QQ, FQ;
        return null !== (QQ = null === this.hoveredId || null === (FQ = this.layout) || void 0 === FQ ? void 0 : FQ.plans.get(this.hoveredId)) && void 0 !== QQ ? QQ : new Set
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
        const FQ = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: QQ.width,
          height: QQ.height,
          nodes: QQ.nodes.map((QQ => {
            let {
              node: wQ,
              left: LQ,
              top: qQ
            } = QQ;
            return {
              id: wQ.graphQuestId,
              name: this.translate(wQ.graphNameKey),
              detail: null === wQ.graphGiverName ? wQ.graphZoneId : `${wQ.graphGiverName} \xb7 ${wQ.graphZoneId}`,
              state: wQ.graphState,
              left: LQ,
              top: qQ,
              inPlan: FQ.has(wQ.graphQuestId),
              hovered: wQ.graphQuestId === this.hoveredId
            }
          })),
          edges: QQ.edges.map((QQ => {
            let {
              edge: wQ,
              key: LQ,
              path: qQ
            } = QQ;
            return {
              key: LQ,
              kind: wQ.graphEdgeKind,
              path: qQ,
              inPlan: FQ.has(wQ.graphFromId) && FQ.has(wQ.graphToId)
            }
          })),
          planning: FQ.size > 0
        }
      }
    }
    var QL = wQ(36665);
    const FL = 250,
      wL = 2150,
      LL = -2.8,
      qL = 2.2,
      oL = -27,
      DL = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      kL = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      vL = Math.round(50 + 1e3 * (kL.delay + kL.period / 2)),
      mL = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      uL = Array.from({
        length: 26
      }, ((QQ, FQ) => {
        const wQ = 2.39996 * FQ,
          LQ = .5 + .618034 * FQ % 1 * .23,
          qQ = FQ % 3 !== 2;
        return {
          rune: qQ ? mL[7 * FQ % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(wQ)*LQ).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(wQ)*LQ).toFixed(3)})`,
            "--spin": 40 * (FQ % 5 - 2) + "deg",
            "--size": (qQ ? 1 + FQ % 4 * .2 : .3 + FQ % 2 * .15) + "rem",
            "--duration": `${(1.8+7*FQ%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*FQ%3).toFixed(2)}s`
          }
        }
      }));

    function HL(QQ, FQ) {
      return Array.from({
        length: 30 + 3 * QQ + (FQ ? 10 : 0)
      }, ((QQ, FQ) => {
        const wQ = FQ < 4,
          LQ = wQ ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          qQ = wQ ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          oQ = wQ ? 2.2 : .6 + Math.random(),
          DQ = wQ ? .3 : Math.random() < .5 ? .16 : .24,
          kQ = wQ ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": LQ,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${qQ.toFixed(2)}rem`,
          "--length": `${oQ.toFixed(2)}rem`,
          "--width": `${DQ}rem`,
          "--duration": `${Math.round(kQ)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function bL(QQ) {
      let {
        zeta: FQ,
        period: wQ
      } = QQ;
      const LQ = 2 * Math.PI / wQ;
      return {
        w: LQ,
        decay: FQ * LQ / Math.sqrt(1 - FQ * FQ)
      }
    }
    let YL = !1;

    function xL() {
      if (YL) return;
      YL = !0;
      const QQ = document.createElement("style");
      QQ.textContent = function() {
        const QQ = bL(DL),
          FQ = bL(kL),
          wQ = FQ => Math.exp(-QQ.decay * FQ) * Math.sin(QQ.w * FQ),
          LQ = wQ(Math.atan(QQ.w / QQ.decay) / QQ.w),
          qQ = .25,
          oQ = 2.15,
          DQ = Math.round(215),
          kQ = [];
        for (let vQ = 0; vQ <= DQ; vQ++) {
          const QQ = vQ / DQ * oQ;
          let mQ = Math.sin(Math.min(QQ, qQ) / qQ * Math.PI / 2) ** 2,
            uQ = 0,
            HQ = 1,
            bQ = 1 - .2 * mQ,
            YQ = 1;
          if (QQ >= qQ) {
            const DQ = QQ - qQ,
              kQ = Math.max(0, DQ - .05);
            mQ = Math.exp(-kQ / .05), uQ = wQ(kQ + DL.lead * (1 - Math.exp(-kQ / DL.rush))) / LQ;
            const vQ = kQ - kL.delay,
              xQ = vQ <= 0 ? 0 : 1 - Math.exp(-FQ.decay * vQ) * (Math.cos(FQ.w * vQ) + FQ.decay / FQ.w * Math.sin(FQ.w * vQ)),
              AQ = Math.max(0, (QQ - 1.77) / (oQ - 1.77));
            HQ = (1 + (kL.to - 1) * xQ) * (1 + .08 * AQ), bQ = 1.1 + 1.5 * Math.exp(-DQ / .07) + .3 * Math.exp(-(((1e3 * DQ - vL) / 100) ** 2)) + .8 * AQ, YQ = 1 - AQ ** 1.5
          }
          const xQ = .15 * mQ + LL * uQ,
            AQ = -.1 * mQ + qL * uQ,
            tQ = 3 * mQ + oL * uQ;
          kQ.push(`${(vQ/DQ*100).toFixed(3)}% { opacity: ${YQ.toFixed(3)}; transform: translate(${xQ.toFixed(3)}rem, ${AQ.toFixed(3)}rem) rotate(${tQ.toFixed(2)}deg) scale(${HQ.toFixed(3)}); filter: brightness(${bQ.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${kQ.join(" ")} }`
      }(), document.head.append(QQ)
    }
    const AL = "skyblockForgeView",
      tL = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class eL extends HQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        super(QQ, wQ, LQ), this.translate = FQ, this.requestForge = qQ, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (QQ, FQ) => {
          var wQ, LQ;
          null !== this.forging || (null !== (wQ = this.owned[(0, QL.t)(FQ, QQ)]) && void 0 !== wQ ? wQ : 0) <= 0 || (this.selected[QQ] = this.selected[QQ] === FQ ? null : FQ, this.status = null, null === (LQ = this.onPartSelected) || void 0 === LQ || LQ.call(this), this.emit())
        }, this.forge = QQ => {
          var FQ, wQ;
          const LQ = this.selectedParts();
          if (null === LQ || this.isPending() || !this.open) return;
          const qQ = (0, QL.q)(LQ);
          if (null === qQ || qQ.coalCost > this.coal) return;
          const oQ = this.preview(qQ),
            DQ = null !== (FQ = null === (wQ = this.onForgeStarted) || void 0 === wQ ? void 0 : wQ.call(this, oQ.tier, oQ.named, QQ)) && void 0 !== FQ ? FQ : () => {};
          if (this.dropArrival(), QQ) {
            const QQ = {
              id: ++this.forgeId,
              preview: oQ,
              timers: [],
              stopSounds: DQ,
              landed: !1,
              reply: null
            };
            QQ.timers.push(setTimeout((() => {
              QQ.landed = !0, null !== QQ.reply && (this.apply(QQ.reply), QQ.reply = null, this.emit())
            }), FL), setTimeout((() => {
              this.finishForge(QQ)
            }), wL)), this.forging = QQ
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(LQ)
        }, this.snapshot = this.buildSnapshot()
      }
      bx(QQ) {
        var FQ;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === QQ.forgeMessageKind) return this.dropForge(), this.apply(QQ), this.status = null, this.show(), void(null === (FQ = this.onOpened) || void 0 === FQ || FQ.call(this));
        const wQ = this.forging;
        if (null !== wQ && null !== QQ.forgeRefusalKey) this.dropForge();
        else if (null !== wQ && !wQ.landed) return void(wQ.reply = QQ);
        this.apply(QQ), this.emit()
      }
      apply(QQ) {
        if (this.owned = QQ.forgeOwnedParts, this.coal = QQ.forgeCoalOwned, this.keepSelectionOwned("open" === QQ.forgeMessageKind), null !== QQ.forgeForgedSwordId) {
          var FQ;
          const wQ = (0, QL.q)(QQ.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (FQ = null === wQ || void 0 === wQ ? void 0 : wQ.displayName) && void 0 !== FQ ? FQ : ""
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
        var FQ;
        this.forging = null;
        const wQ = this.selectedParts(),
          LQ = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: QQ.id,
          sameSword: null !== wQ && (null === (FQ = (0, QL.q)(wQ)) || void 0 === FQ ? void 0 : FQ.displayName) === QQ.preview.name,
          timer: LQ
        }, this.emit()
      }
      dropForge() {
        const QQ = this.forging;
        if (null !== QQ) {
          this.forging = null;
          for (const FQ of QQ.timers) clearTimeout(FQ);
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
        var QQ, FQ, wQ;
        const LQ = this.selectedParts(),
          qQ = null === LQ ? null : (0, QL.q)(LQ),
          oQ = null !== (QQ = null === (FQ = this.forging) || void 0 === FQ ? void 0 : FQ.preview) && void 0 !== QQ ? QQ : null === qQ ? null : this.preview(qQ);
        return {
          enabled: this.received,
          open: this.open,
          slots: QL.n.map((QQ => ({
            kind: QQ,
            label: this.translate(tL[QQ]),
            parts: this.partsFor(QQ)
          }))),
          coalOwned: this.coal,
          preview: oQ,
          unformedSword: QL.l[null !== (wQ = this.selected.Blade) && void 0 !== wQ ? wQ : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((QQ => QQ > 0)),
          canForge: null !== oQ && !oQ.coalShort && !this.isPending(),
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
        const FQ = [];
        for (const LQ of QL.i) {
          var wQ;
          const qQ = (0, QL.t)(LQ, QQ),
            oQ = null !== (wQ = this.owned[qQ]) && void 0 !== wQ ? wQ : 0;
          oQ > 0 && FQ.push({
            material: LQ,
            itemName: qQ,
            owned: oQ,
            selected: this.selected[QQ] === LQ,
            placeholder: !1
          })
        }
        if (0 === FQ.length) {
          const wQ = QL.i[0];
          FQ.push({
            material: wQ,
            itemName: (0, QL.t)(wQ, QQ),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return FQ
      }
      stats(QQ) {
        const FQ = [{
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
        return QQ.reachBonus > 0 && FQ.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${QQ.reachBonus.toFixed(1)}`,
          better: !0
        }), QQ.damageReduction > 0 && FQ.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*QQ.damageReduction)}%`,
          better: !0
        }), FQ
      }
      selectedParts() {
        const {
          Blade: QQ,
          Guard: FQ,
          Handle: wQ
        } = this.selected;
        return null === QQ || null === FQ || null === wQ ? null : {
          blade: QQ,
          guard: FQ,
          handle: wQ
        }
      }
      keepSelectionOwned(QQ) {
        for (const wQ of QL.n) {
          var FQ;
          const LQ = this.selected[wQ];
          if (null !== LQ && (null !== (FQ = this.owned[(0, QL.t)(LQ, wQ)]) && void 0 !== FQ ? FQ : 0) > 0) continue;
          if (!QQ) {
            this.selected[wQ] = null;
            continue
          }
          const qQ = [...QL.i].reverse().find((QQ => {
            var FQ;
            return (null !== (FQ = this.owned[(0, QL.t)(QQ, wQ)]) && void 0 !== FQ ? FQ : 0) > 0
          }));
          this.selected[wQ] = null !== qQ && void 0 !== qQ ? qQ : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const ML = "skyblockSmugglerView",
      GL = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class pL extends HQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(QQ, wQ, LQ), this.translate = FQ, this.requestBuy = qQ, this.now = oQ, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = QQ => QQ, this.onBought = null, this.buy = QQ => {
          const FQ = this.deals[QQ];
          void 0 !== FQ && !this.isPending() && this.open && !this.soldOut.has(QQ) && this.canAfford(FQ) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, QQ))
        }, this.snapshot = this.buildSnapshot()
      }
      bx(QQ) {
        if (this.received = !0, this.day = QQ.smugglerDay, this.deals = QQ.smugglerDeals, this.rivets = QQ.smugglerRivetsOwned, this.crests = QQ.smugglerCrestsOwned, this.soldOut = new Set(QQ.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + QQ.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === QQ.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = QQ.smugglerBoughtSlot, null !== QQ.smugglerBoughtSlot) {
          var FQ, wQ;
          const LQ = this.deals[QQ.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === LQ ? "" : this.dealName(LQ),
              amount: String(null !== (FQ = null === LQ || void 0 === LQ ? void 0 : LQ.smugglerDealAmount) && void 0 !== FQ ? FQ : 0)
            }
          }, this.boughtCount++, null === (wQ = this.onBought) || void 0 === wQ || wQ.call(this)
        } else null !== QQ.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: QQ.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(QQ, FQ, wQ) {
        this.translate = QQ, void 0 !== wQ && (this.itemName = wQ), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(QQ) {
        if (null !== QQ.smugglerDealUniqueName) return QQ.smugglerDealUniqueName;
        const FQ = GL[QQ.smugglerDealItem];
        return void 0 === FQ ? this.itemName(QQ.smugglerDealItem) : this.translate(FQ)
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
          deals: this.deals.map(((QQ, FQ) => ({
            slot: FQ,
            itemName: QQ.smugglerDealItem,
            displayName: this.dealName(QQ),
            enchantmentTier: QQ.smugglerDealEnchantmentTier,
            amount: QQ.smugglerDealAmount,
            rivets: QQ.smugglerDealRivets,
            crests: QQ.smugglerDealCrests,
            affordable: this.canAfford(QQ),
            soldOut: this.soldOut.has(FQ),
            justBought: this.boughtSlot === FQ
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
    const cL = "skyblockPassageView",
      CL = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function SL(QQ, FQ) {
      return QQ(CL[FQ])
    }

    function iL(QQ, FQ, wQ, LQ) {
      const qQ = Math.ceil((wQ - LQ) / 864e5),
        oQ = SL(QQ, FQ);
      return qQ > 1 ? QQ("skyblockGame:passageNextDays", {
        phase: oQ,
        days: String(qQ)
      }) : QQ("skyblockGame:passageNextSoon", {
        phase: oQ
      })
    }
    class WL extends HQ {
      constructor(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(QQ, wQ, LQ), this.translate = FQ, this.now = qQ, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = QQ => QQ, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      bx(QQ) {
        this.message = QQ, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(QQ, FQ, wQ) {
        this.translate = QQ, void 0 !== wQ && (this.itemName = wQ), this.emit()
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
          phaseName: SL(this.translate, QQ.passagePhase),
          visitors: QQ.passageVisitors.map((QQ => this.describe(QQ))),
          resting: this.describe(QQ.passageResting),
          nextPhase: QQ.passageNextPhase,
          next: iL(this.translate, QQ.passageNextPhase, QQ.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var RL = wQ(38077);
    const OL = "skyblockKeepersChairView";
    class sL extends HQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new RL.b;
        super(QQ, wQ, LQ), this.translate = FQ, this.requestAim = qQ, this.now = oQ, this.pacer = DQ, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = QQ => QQ, this.aim = QQ => {
          !this.awaitingReply && this.open && this.atChair && QQ !== this.favoured && (null === QQ || this.islands.some((FQ => FQ.keepersChairIslandId === QQ && FQ.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== QQ && void 0 !== QQ ? QQ : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = DQ.subscribe((() => {
          this.emit()
        }))
      }
      bx(QQ) {
        var FQ, wQ;
        this.received = !0;
        const LQ = this.favoured,
          qQ = this.atChair;
        var oQ;
        return this.islands = QQ.keepersChairIslands, this.favoured = QQ.keepersChairFavoured, this.passage = null !== (FQ = QQ.keepersChairPassage) && void 0 !== FQ ? FQ : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (wQ = QQ.keepersChairAtChair) || void 0 === wQ || wQ, "place" === QQ.keepersChairMessageKind ? (!qQ && this.atChair && "refused" === (null === (oQ = this.status) || void 0 === oQ ? void 0 : oQ.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === QQ.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== QQ.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: QQ.keepersChairRefusalKey,
          island: null
        } : this.favoured !== LQ && (this.status = null === this.favoured ? {
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
      setTranslator(QQ, FQ, wQ) {
        this.translate = QQ, void 0 !== wQ && (this.itemName = wQ), this.emit()
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
        const FQ = this.islands.find((FQ => FQ.keepersChairIslandId === QQ));
        return void 0 === FQ ? QQ : this.translate(FQ.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const QQ = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          FQ = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((QQ => {
            const FQ = QQ.keepersChairFeaturedFish;
            return {
              id: QQ.keepersChairIslandId,
              name: this.translate(QQ.keepersChairIslandNameKey),
              relit: QQ.keepersChairIslandRelit,
              featuredFish: null === FQ ? null : {
                itemName: FQ,
                displayName: this.itemName(FQ)
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
          almanac: null === FQ ? null : {
            phase: FQ.keepersChairPassagePhase,
            phaseName: SL(this.translate, FQ.keepersChairPassagePhase),
            nextPhase: FQ.keepersChairPassageNextPhase,
            next: iL(this.translate, FQ.keepersChairPassageNextPhase, FQ.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const rL = "skyblockReachLogView",
      IL = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      UL = "Caught Fish",
      NL = [1, 2, 4];

    function TL(QQ, FQ) {
      return QQ.map((QQ => ({
        ...QQ,
        reachLogPageFish: QQ.reachLogPageFish.map((QQ => ({
          ...QQ,
          reachLogFishFresh: FQ(QQ)
        })))
      })))
    }
    class KL extends HQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new RL.b;
        super(QQ, wQ, LQ), this.translate = FQ, this.requestOpen = qQ, this.pacer = oQ, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = QQ => QQ, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = QQ => {
          this.pages.some((FQ => FQ.reachLogIslandId === QQ)) && (this.selected = QQ, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = oQ.subscribe((() => {
          this.emit()
        }))
      }
      bx(QQ) {
        if (this.received = !0, "status" === QQ.reachLogMessageKind) return !0 === QQ.reachLogNews && this.markNews(), this.serverFresh = QQ.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const FQ = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== QQ.reachLogMessageKind)
          if (this.pageViews = null, this.pages = TL(QQ.reachLogPages, (QQ => QQ.reachLogFishFresh || this.heldFresh.has(QQ.reachLogFishItem))), this.letGoShown = QQ.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, FQ) this.showPages();
          else {
            for (const QQ of this.pages)
              for (const FQ of QQ.reachLogPageFish) FQ.reachLogFishFresh && this.heldFresh.add(FQ.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(QQ, FQ, wQ) {
        this.translate = QQ, this.pageViews = null, void 0 !== wQ && (this.itemName = wQ), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = TL(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var QQ, FQ, wQ, LQ;
        const qQ = this.pages.find((QQ => QQ.reachLogPageFish.some((QQ => QQ.reachLogFishFresh))));
        if (void 0 !== qQ) return qQ.reachLogIslandId;
        if (null !== this.selected && this.pages.some((QQ => QQ.reachLogIslandId === this.selected))) return this.selected;
        return null !== (QQ = null !== (FQ = null === (wQ = this.pages.filter((QQ => QQ.reachLogIslandAwake)).at(-1)) || void 0 === wQ ? void 0 : wQ.reachLogIslandId) && void 0 !== FQ ? FQ : null === (LQ = this.pages[0]) || void 0 === LQ ? void 0 : LQ.reachLogIslandId) && void 0 !== QQ ? QQ : null
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
          var FQ;
          return {
            id: QQ.reachLogIslandId,
            name: this.translate(QQ.reachLogIslandNameKey),
            awake: QQ.reachLogIslandAwake,
            gold: QQ.reachLogPageGold,
            caught: QQ.reachLogPageFish.filter((QQ => QQ.reachLogFishCaught && !QQ.reachLogFishVisitor)).length,
            total: QQ.reachLogPageFish.filter((QQ => !QQ.reachLogFishVisitor)).length,
            fish: QQ.reachLogPageFish.map((QQ => {
              const FQ = QQ.reachLogFishBestKg;
              return {
                itemName: QQ.reachLogFishItem,
                name: QQ.reachLogFishCaught ? this.itemName(QQ.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: QQ.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / QQ.reachLogFishChance))
                }),
                best: QQ.reachLogFishCaught ? null === FQ ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: FQ.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: QQ.reachLogFishMarks,
                ribbons: NL.map((FQ => 0 !== (QQ.reachLogFishRibbons & FQ))),
                glimmer: 0 !== (8 & QQ.reachLogFishRibbons),
                halo: 0 !== (32 & QQ.reachLogFishRibbons),
                fresh: QQ.reachLogFishFresh,
                visitor: QQ.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (FQ = QQ.reachLogPageReturner) && void 0 !== FQ ? FQ : null)
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
    const zL = "skyblockLampLightView";
    class lL {
      constructor(QQ, FQ, wQ, LQ) {
        this.GA = QQ, this.translate = FQ, this.requestCommand = wQ, this.pacer = LQ, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.kx = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = QQ => {
          QQ ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = QQ => {
          this.send(`buy ${QQ}`)
        }, this.socket = QQ => {
          this.send(`socket ${null!==QQ&&void 0!==QQ?QQ:KQ}`)
        }, this.wearTint = QQ => {
          this.send(`tint ${null!==QQ&&void 0!==QQ?QQ:KQ}`)
        }, this.setSituation = QQ => {
          this.situation = QQ, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = LQ.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = LQ.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      bx(QQ) {
        if (this.message = QQ, null !== QQ.lampLightShop && (this.shop = QQ.lampLightShop), "open" === QQ.lampLightKind && (this.refusalKey = null), "reply" === QQ.lampLightKind) {
          var FQ;
          const qQ = null !== (FQ = QQ.lampLightReplyTag) && void 0 !== FQ ? FQ : null,
            oQ = null !== qQ && qQ === this.offTag;
          var wQ, LQ;
          if (oQ ? this.settleOff() : null !== qQ && qQ !== this.awaitingTag || this.settleReply(), this.refusalKey = QQ.lampLightRefusalKey, null !== QQ.lampLightBought && !oQ) this.sparkle = {
            id: QQ.lampLightBought,
            count: (null !== (wQ = null === (LQ = this.sparkle) || void 0 === LQ ? void 0 : LQ.count) && void 0 !== wQ ? wQ : 0) + 1
          }
        }
        QQ.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === QQ.lampLightKind && (this.lastGained = QQ.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(QQ) {
        QQ !== this.atChair && (this.atChair = QQ, QQ && (this.refusalKey = null), this.emit())
      }
      setTranslator(QQ, FQ) {
        this.translate = QQ, this.locale = null !== FQ && void 0 !== FQ ? FQ : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.kx = !0
      }
      send(QQ) {
        var FQ;
        if (null !== this.awaitingTag || "ready" !== (null === (FQ = this.message) || void 0 === FQ ? void 0 : FQ.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const wQ = this.nextTag();
        this.awaitingTag = wQ, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${QQ} ${wQ}`), this.emit()
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
        this.kx || (this.snapshot = this.buildSnapshot(), this.GA(this.snapshot))
      }
      formatLight(QQ) {
        return Math.floor(QQ).toLocaleString(this.locale)
      }
      formatPercent(QQ) {
        const FQ = 100 * QQ;
        return FQ >= 10 ? Math.round(FQ).toLocaleString(this.locale) : FQ.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(QQ, FQ) {
        if ("bite" === QQ) return this.translate("skyblockGame:lampLightBite", {
          seconds: (FQ.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === QQ) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(FQ.lampLightRareChance)
        });
        if ("notice" === QQ) return null === FQ.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(FQ.lampLightNoticeChance)
        });
        const wQ = "meter" === QQ ? FQ.lampLightMeterCatches : FQ.lampLightBloomCatches;
        return null === wQ ? null : this.translate("meter" === QQ ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(wQ))
        })
      }
      oddsLines(QQ, FQ) {
        const wQ = (QQ, FQ) => {
            var wQ;
            return null !== (wQ = {
              bite: FQ.lampLightBiteMs,
              rare: FQ.lampLightRareChance,
              meter: FQ.lampLightMeterCatches,
              bloom: FQ.lampLightBloomCatches,
              notice: FQ.lampLightNoticeChance
            } [QQ]) && void 0 !== wQ ? wQ : 0
          },
          LQ = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          qQ = [];
        for (const oQ of ["bite", "rare", "meter", "bloom", "notice"]) {
          const DQ = this.formatOdds(oQ, QQ),
            kQ = this.formatOdds(oQ, FQ);
          if (null === DQ || null === kQ || "bite" !== oQ && "rare" !== oQ && DQ === kQ) continue;
          const vQ = wQ(oQ, FQ) - wQ(oQ, QQ),
            mQ = LQ[oQ] ? vQ < 0 : vQ > 0;
          qQ.push({
            label: oQ,
            before: DQ,
            after: kQ,
            tone: DQ === kQ ? "same" : mQ ? "better" : "worse"
          })
        }
        return qQ
      }
      charmView(QQ, FQ, wQ) {
        const LQ = QQ.lampLightCharmId.charAt(0).toUpperCase() + QQ.lampLightCharmId.slice(1),
          qQ = "bloom" === this.situation;
        return {
          id: QQ.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${LQ}`),
          effect: this.translate(`skyblockGame:lampLightCharm${LQ}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(QQ.lampLightCharmCost)
          }),
          owned: QQ.lampLightCharmOwned,
          affordable: wQ >= QQ.lampLightCharmCost,
          socketed: FQ.lampLightSocketed === QQ.lampLightCharmId,
          lines: this.oddsLines(qQ ? FQ.lampLightBareBloom : FQ.lampLightBareOpen, qQ ? QQ.lampLightCharmBloom : QQ.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var QQ, FQ, wQ, LQ;
        const qQ = this.message,
          oQ = "ready" === (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) ? this.shop : null,
          DQ = null !== (QQ = null === qQ || void 0 === qQ ? void 0 : qQ.lampLightBalance) && void 0 !== QQ ? QQ : 0,
          kQ = this.atChair,
          vQ = "loading" === (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          mQ = "ready" !== (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) || kQ ? null !== (FQ = this.refusalKey) && void 0 !== FQ ? FQ : vQ : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== qQ && "locked" !== qQ.lampLightStatus,
          status: null !== (wQ = null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) && void 0 !== wQ ? wQ : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(DQ)
          }),
          releasing: null !== (LQ = null === qQ || void 0 === qQ ? void 0 : qQ.lampLightReleasing) && void 0 !== LQ && LQ,
          gained: null === qQ || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === qQ || void 0 === qQ ? void 0 : qQ.lampLightStatus) && kQ && !this.isPending(),
          situation: this.situation,
          shop: null === oQ ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: oQ.lampLightOddsRod,
              island: this.translate(oQ.lampLightIslandNameKey)
            }),
            heldRod: null !== oQ.lampLightHeldRod,
            charms: oQ.lampLightCharms.map((QQ => this.charmView(QQ, oQ, DQ))),
            tints: oQ.lampLightTints.map((QQ => {
              const FQ = QQ.lampLightTintId,
                [wQ, LQ, qQ] = QQ.lampLightTintColour;
              return {
                id: FQ,
                name: this.translate(`skyblockGame:lampLightTint${FQ.charAt(0).toUpperCase()}${FQ.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(QQ.lampLightTintCost)
                }),
                owned: QQ.lampLightTintOwned,
                affordable: DQ >= QQ.lampLightTintCost,
                wearing: oQ.lampLightTint === FQ,
                colour: `rgb(${wQ}, ${LQ}, ${qQ})`
              }
            })),
            wearingIslandColours: null === oQ.lampLightTint
          },
          notice: null === mQ ? null : this.translate(mQ),
          sparkle: this.sparkle
        }
      }
    }
    const jL = "skyblockMagmawardView";
    class aL {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.GA = QQ, this.now = FQ, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = VQ.map((() => 0)), this.wornAt = VQ.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      bx(QQ) {
        var FQ, wQ;
        const LQ = VQ.map(((FQ, wQ) => !0 === QQ.magmawardPiecesWorn[wQ]));
        if (!LQ.includes(!0)) return this.snapshot = null, void this.GA(null);
        const qQ = this.now(),
          oQ = this.snapshot;
        null === oQ && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const DQ = QQ.magmawardFuelCarried,
          kQ = !LQ.includes(!1);
        let vQ = null !== (FQ = null === oQ || void 0 === oQ ? void 0 : oQ.pulse) && void 0 !== FQ ? FQ : null,
          mQ = null !== (wQ = null === oQ || void 0 === oQ ? void 0 : oQ.flare) && void 0 !== wQ ? wQ : null;
        QQ.magmawardFuelBurned ? (vQ = "burn", mQ = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = qQ, this.flareAt = qQ) : null !== oQ && DQ > oQ.fuel && (vQ = "gain", this.pulseToken++, this.pulseAt = qQ), kQ && null !== oQ && !oQ.fullSet && (mQ = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = qQ, this.setLitAt = qQ);
        const uQ = VQ.map(((QQ, FQ) => (LQ[FQ] && null !== oQ && !oQ.pieces[FQ].worn && (this.wornTokens[FQ]++, this.wornAt[FQ] = qQ), {
          itemName: QQ,
          worn: LQ[FQ],
          wornToken: this.wornTokens[FQ],
          justWorn: LQ[FQ] && this.isPlaying(this.wornAt[FQ], qQ)
        })));
        this.snapshot = {
          pieces: uQ,
          wornCount: LQ.filter(Boolean).length,
          fullSet: kQ,
          fuel: DQ,
          fuelState: DQ <= 0 ? "empty" : DQ <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, qQ) ? vQ : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, qQ) ? mQ : null,
          flareToken: this.flareToken,
          setLit: kQ && this.isPlaying(this.setLitAt, qQ),
          setLitToken: this.setLitToken
        }, this.GA(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.GA(null)
      }
      isPlaying(QQ, FQ) {
        return FQ - QQ < 1200
      }
    }
    const XL = "skyblockGlowtideView";
    class fL {
      constructor(QQ) {
        this.GA = QQ, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = QQ => {
          this.arrow = QQ, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      bx(QQ) {
        this.bloom = QQ.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.GA(null))
      }
      afterRender(QQ, FQ) {
        const wQ = this.bloom;
        if (null === wQ || null === QQ) return;
        const LQ = wQ.glowtideBloomX - QQ[0],
          oQ = wQ.glowtideBloomZ - QQ[2],
          DQ = Math.hypot(LQ, oQ),
          kQ = this.snapshot,
          vQ = null !== kQ && void 0 !== kQ && kQ.inRange ? 1 : 0,
          mQ = DQ <= 12.5 + vQ && QQ[1] - wQ.glowtideBloomY <= 10 + vQ;
        !mQ || null !== kQ && void 0 !== kQ && kQ.inRange || this.inRangeToken++;
        const uQ = {
          colour: wQ.glowtideBloomColour,
          inRange: mQ,
          distance: Math.round(DQ),
          inRangeToken: this.inRangeToken
        };
        (null === kQ || uQ.colour !== kQ.colour || uQ.inRange !== kQ.inRange || !mQ && uQ.distance !== kQ.distance) && (this.snapshot = uQ, this.GA(uQ));
        const HQ = qQ.e.computeShortestRotation(FQ, (0, qQ.Eb)([LQ, 0, oQ]));
        null === this.arrow || Math.abs(HQ - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${HQ}rad)`, this.arrowTurn = HQ)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.GA(null)
      }
    }
    const VL = "skyblockGlowMeterView";
    class hL {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.GA = QQ, this.now = FQ, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      bx(QQ) {
        const FQ = this.now(),
          {
            glowMeterFill: wQ,
            glowMeterCapacity: LQ
          } = QQ,
          qQ = wQ >= LQ,
          oQ = this.snapshot;
        null !== oQ && (qQ && !oQ.full && (this.fullToken++, this.fullAt = FQ), oQ.full && !qQ ? (this.burstToken++, this.burstAt = FQ) : wQ > oQ.fill && (this.gainToken++, this.gainAt = FQ)), this.snapshot = {
          fill: wQ,
          MH: LQ,
          ratio: Math.min(1, Math.max(0, wQ / LQ)),
          full: qQ,
          rares: QQ.glowMeterRares,
          ready: qQ && this.isPlaying(this.fullAt, FQ),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, FQ),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, FQ),
          gainToken: this.gainToken
        }, this.GA(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.GA(null)
      }
      isPlaying(QQ, FQ) {
        return FQ - QQ < 2e3
      }
    }
    const JL = "skyblockHushWaitView";
    class EL {
      constructor(QQ) {
        this.GA = QQ, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      bx(QQ) {
        let {
          hushWaitMs: FQ,
          hushWaitTotalMs: wQ,
          hushWaitLines: LQ
        } = QQ;
        if (this.clearTimers(), this.token++, 0 === LQ.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (FQ <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: LQ[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const qQ = Math.max(null !== wQ && void 0 !== wQ ? wQ : FQ, FQ),
          oQ = qQ - FQ,
          DQ = QQ => qQ * QQ / LQ.length,
          kQ = QQ => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: qQ,
              elapsedMs: oQ,
              line: LQ[QQ],
              lineIndex: QQ
            })
          };
        let vQ = 0;
        for (; vQ + 1 < LQ.length && DQ(vQ + 1) <= oQ;) vQ++;
        kQ(vQ);
        for (let mQ = vQ + 1; mQ < LQ.length; mQ++) this.later(DQ(mQ) - oQ, (() => {
          kQ(mQ)
        }));
        this.later(FQ, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(QQ) {
        this.snapshot = QQ, this.GA(QQ)
      }
      later(QQ, FQ) {
        this.timers.push(setTimeout(FQ, QQ))
      }
      clearTimers() {
        for (const QQ of this.timers) clearTimeout(QQ);
        this.timers = []
      }
    }
    const nL = "skyblockTideChartsView",
      gL = 36e5,
      PL = 864e5;

    function ZL(QQ, FQ, wQ) {
      const [LQ, qQ, oQ, DQ] = QQ.tideChartArea, kQ = Math.floor(FQ), vQ = Math.floor(wQ);
      return kQ >= LQ && kQ <= oQ && vQ >= qQ && vQ <= DQ
    }

    function yL(QQ, FQ, wQ) {
      const [LQ, qQ, oQ, DQ] = QQ.tideChartWater;
      return function(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = 4 - hQ(Math.floor(qQ) - (QQ - wQ), wQ);
        return 5 * hQ(Math.floor(oQ) - (FQ - LQ), LQ) + DQ
      }(LQ, qQ, oQ, DQ, FQ, wQ)
    }

    function BL(QQ, FQ, wQ) {
      const LQ = QQ.tideCharts;
      for (let qQ = 0; qQ < LQ.length; qQ++)
        if (ZL(LQ[qQ], FQ, wQ)) return LQ[qQ];
      return null
    }

    function dL(QQ, FQ, wQ) {
      const LQ = Math.max(0, FQ - wQ);
      return LQ > PL ? QQ("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(LQ / PL))
      }) : LQ > gL ? QQ("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(LQ / gL))
      }) : QQ("skyblockGame:tideChartsTurnSoon")
    }
    class Qq extends HQ {
      constructor(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(QQ, wQ, LQ), this.translate = FQ, this.now = qQ, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Vb = QQ => {
          this.picked = QQ, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      bx(QQ) {
        const FQ = this.message;
        if (null !== FQ)
          for (const LQ of QQ.tideCharts) {
            var wQ;
            const QQ = FQ.tideCharts.find((QQ => QQ.tideChartIsland === LQ.tideChartIsland)),
              qQ = LQ.tideChartLit & ~(null !== (wQ = null === QQ || void 0 === QQ ? void 0 : QQ.tideChartLit) && void 0 !== wQ ? wQ : 0);
            void 0 !== QQ && 0 !== qQ && (this.pulse = {
              island: LQ.tideChartIsland,
              cells: qQ,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = QQ, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(QQ, FQ) {
        var wQ;
        const LQ = null === this.message || Number.isNaN(QQ) ? null : BL(this.message, QQ, FQ),
          qQ = null !== (wQ = null === LQ || void 0 === LQ ? void 0 : LQ.tideChartIsland) && void 0 !== wQ ? wQ : null,
          oQ = null === LQ ? -1 : function(QQ, FQ, wQ) {
            const [LQ, qQ, oQ, DQ] = QQ.tideChartWater;
            return function(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
              return ((qQ - QQ) / (wQ + DQ)) ** 2 + ((oQ - FQ) / (LQ + DQ)) ** 2 <= 1
            }(LQ, qQ, oQ, DQ, FQ, wQ, 2) ? yL(QQ, FQ, wQ) : -1
          }(LQ, QQ, FQ);
        return (qQ !== this.hereIsland || oQ !== this.hereCell) && (this.hereIsland = qQ, this.hereCell = oQ, null !== qQ && (this.lastIsland = qQ), !0)
      }
      afterRender(QQ) {
        if (null === this.message) return;
        this.lastX = null === QQ ? Number.NaN : QQ[0], this.lastZ = null === QQ ? Number.NaN : QQ[2];
        const FQ = this.locate(this.lastX, this.lastZ),
          wQ = this.expirePulses();
        (FQ || wQ || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const QQ = this.now();
        return !(!this.open || QQ - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = QQ, dL(this.translate, this.message.tideChartTurnsInMs, QQ - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(QQ, FQ) {
        const wQ = null === this.message ? null : BL(this.message, QQ, FQ);
        if (null === wQ) return;
        const LQ = yL(wQ, QQ, FQ);
        0 === (wQ.tideChartPreBlank & 1 << LQ) && (this.cast = {
          island: wQ.tideChartIsland,
          cell: LQ,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const QQ = this.now();
        let FQ = !1;
        return 0 !== this.pulse.cells && QQ - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, FQ = !0), null !== this.cast && QQ - this.cast.atMs >= 1500 && (this.cast = null, FQ = !0), FQ
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
      findChart(QQ, FQ) {
        var wQ;
        return null !== (wQ = QQ.tideCharts.find((QQ => QQ.tideChartIsland === FQ))) && void 0 !== wQ ? wQ : null
      }
      describe(QQ) {
        var FQ, wQ, LQ;
        const qQ = QQ.tideChartIsland,
          oQ = [];
        for (let YQ = 0; YQ < 25; YQ++) {
          const FQ = 1 << YQ;
          0 !== (QQ.tideChartLit & FQ) ? oQ.push("lit") : 0 !== (QQ.tideChartClear & FQ) ? oQ.push("clear") : 0 !== (QQ.tideChartPreBlank & FQ) ? oQ.push("shore") : oQ.push("water")
        }
        const DQ = function(QQ) {
            let FQ = 0;
            for (let wQ = QQ >>> 0; 0 !== wQ; wQ &= wQ - 1) FQ++;
            return FQ
          }(QQ.tideChartLit),
          kQ = QQ.tideChartInkCount,
          vQ = this.translate(QQ.tideChartIslandNameKey),
          mQ = this.translate("skyblockGame:tideChartsLit", {
            lit: String(DQ),
            ink: String(kQ)
          }),
          uQ = null === QQ.tideChartPictureNameKey ? null : this.translate(QQ.tideChartPictureNameKey),
          HQ = this.hereIsland === qQ && -1 !== this.hereCell ? this.hereCell : null,
          bQ = [`${vQ}: ${mQ}.`];
        if (null !== uQ && bQ.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: uQ
          })), null !== HQ) {
          const QQ = Math.floor(HQ / 5) + 1,
            FQ = HQ % 5 + 1;
          bQ.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(QQ),
            column: String(FQ)
          }))
        }
        return {
          island: qQ,
          islandName: vQ,
          cells: oQ,
          hereCell: HQ,
          lit: DQ,
          ink: kQ,
          litText: mQ,
          pictureName: uQ,
          gridLabel: bQ.join(" "),
          pulseCells: this.pulse.island === qQ ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (FQ = this.cast) || void 0 === FQ ? void 0 : FQ.island) === qQ ? this.cast.cell : null,
          castToken: null !== (wQ = null === (LQ = this.cast) || void 0 === LQ ? void 0 : LQ.token) && void 0 !== wQ ? wQ : 0
        }
      }
      buildSnapshot() {
        var QQ, FQ, wQ;
        const LQ = this.message;
        if (null === LQ || 0 === LQ.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const qQ = this.findChart(LQ, this.hereIsland),
          oQ = null !== (QQ = null !== (FQ = null !== (wQ = this.findChart(LQ, this.open ? this.picked : null)) && void 0 !== wQ ? wQ : qQ) && void 0 !== FQ ? FQ : this.findChart(LQ, this.lastIsland)) && void 0 !== QQ ? QQ : LQ.tideCharts[0],
          DQ = null === qQ ? null : this.describe(qQ);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: DQ,
          card: oQ === qQ ? DQ : this.describe(oQ),
          turnsText: dL(this.translate, LQ.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(LQ.tideChartBookCount)
          }),
          tabs: LQ.tideCharts.map((QQ => ({
            island: QQ.tideChartIsland,
            name: this.translate(QQ.tideChartIslandNameKey),
            selected: QQ.tideChartIsland === oQ.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Fq = "skyblockRegularsView",
      wq = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      Lq = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function qq(QQ, FQ) {
      return "given" === QQ ? FQ.given : "owed" === QQ ? FQ.owed : FQ.goal
    }
    class oq extends HQ {
      constructor(QQ, FQ, wQ, LQ) {
        super(QQ, wQ, LQ), this.translate = FQ, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = QQ => QQ, this.openIsland = QQ => {
          this.selected = QQ, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = QQ => {
          this.selected = QQ, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      bx(QQ) {
        this.message = QQ, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const QQ = this.openedFromReachLog;
        return this.openedFromReachLog = !1, QQ
      }
      setTranslator(QQ, FQ, wQ) {
        this.translate = QQ, void 0 !== wQ && (this.itemName = wQ), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(QQ, FQ, wQ) {
        return {
          text: this.translate(qq(QQ, FQ), wQ),
          given: "given" === QQ
        }
      }
      describeRegular(QQ, FQ) {
        const wQ = this.translate,
          LQ = null !== QQ.regularKg,
          qQ = QQ.regularMeetings,
          oQ = LQ ? 0 === qQ ? wQ("skyblockGame:regularsNotMet") : 1 === qQ ? wQ("skyblockGame:regularsMeetingsOne") : wQ("skyblockGame:regularsMeetings", {
            count: qQ
          }) : "";
        return {
          id: QQ.regularId,
          name: wQ(QQ.regularNameKey),
          line: wQ(QQ.regularLineKey),
          itemName: QQ.regularFishItem,
          fishName: this.itemName(QQ.regularFishItem),
          tagged: LQ,
          size: null === QQ.regularKg ? wQ("skyblockGame:regularsNotTagged") : wQ("skyblockGame:regularsSize", {
            kg: QQ.regularKg.toFixed(1)
          }),
          meetings: oQ,
          chance: wQ("skyblockGame:regularsChance", {
            count: QQ.regularOneInCasts
          }),
          resting: QQ.regularRestingToday,
          gifts: [{
            text: wQ("skyblockGame:regularsGiftFlare"),
            given: qQ >= 3
          }, this.describeGift(QQ.regularTintGift, wq, {
            tint: wQ(QQ.regularTintNameKey)
          })],
          history: [...QQ.regularHistory].reverse().map((QQ => {
            const LQ = QQ.regularMeetingKg.toFixed(1),
              qQ = FQ - QQ.regularMeetingDay;
            return qQ <= 0 ? wQ("skyblockGame:regularsToday", {
              kg: LQ
            }) : wQ("skyblockGame:regularsDaysAgo", {
              days: qQ,
              kg: LQ
            })
          }))
        }
      }
      describeIsland(QQ, FQ) {
        return {
          id: QQ.regularsIslandId,
          name: this.translate(QQ.regularsIslandNameKey),
          charm: this.describeGift(QQ.regularsCharmGift, Lq, {
            charm: this.translate(QQ.regularsCharmNameKey)
          }),
          regulars: QQ.regularsList.map((QQ => this.describeRegular(QQ, FQ)))
        }
      }
      buildSnapshot() {
        var QQ, FQ, wQ, LQ;
        const qQ = this.message;
        if (null === qQ) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const oQ = qQ.regularsIslands.map((QQ => this.describeIsland(QQ, qQ.regularsToday))),
          DQ = null !== (QQ = null !== (FQ = null === (wQ = oQ.find((QQ => QQ.id === this.selected))) || void 0 === wQ ? void 0 : wQ.id) && void 0 !== FQ ? FQ : null === (LQ = oQ[0]) || void 0 === LQ ? void 0 : LQ.id) && void 0 !== QQ ? QQ : "";
        return {
          enabled: !0,
          open: this.open,
          selected: DQ,
          islands: oQ
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Dq = "skyblockHiddenWatersView";
    class kq {
      constructor(QQ) {
        this.GA = QQ, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      bx(QQ) {
        this.snapshot = function(QQ) {
          const [FQ, wQ] = QQ.hiddenWatersMapSize, LQ = (QQ, LQ) => ({
            left: 1 - QQ / FQ,
            top: LQ / wQ
          }), qQ = new Map;
          for (const [DQ, kQ] of QQ.hiddenWatersGlimpses) {
            var oQ;
            const QQ = null !== (oQ = qQ.get(DQ)) && void 0 !== oQ ? oQ : [];
            QQ.push(kQ), qQ.set(DQ, QQ)
          }
          return {
            found: QQ.hiddenWatersFound,
            total: QQ.hiddenWatersTotal,
            aspect: wQ / FQ,
            pins: QQ.hiddenWatersPins.map((QQ => {
              let [FQ, wQ] = QQ;
              return LQ(FQ, wQ)
            })),
            islands: QQ.hiddenWatersIslands.map((QQ => {
              let [qQ, oQ, DQ, kQ] = QQ;
              const {
                left: vQ,
                top: mQ
              } = LQ(DQ + 1, oQ);
              return {
                left: vQ,
                top: mQ,
                width: (DQ + 1 - qQ) / FQ,
                height: (kQ + 1 - oQ) / wQ
              }
            })),
            glimpses: qQ
          }
        }(QQ), this.GA(this.snapshot)
      }
    }
    const vq = "skyblockDialogueView";
    class mq extends HQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(QQ, wQ, LQ), this.translate = FQ, this.requestDialogue = qQ, this.now = oQ, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      bx(QQ) {
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
        const FQ = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...FQ,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const wQ = this.selection;
        if ("quest" === wQ.kind) {
          const QQ = this.scripts.find((QQ => QQ.dialogueQuestId === wQ.questId));
          return {
            ...FQ,
            characters: [],
            questFocus: wQ.questId,
            conversations: QQ ? [this.conversation(QQ)] : []
          }
        }
        const LQ = [];
        for (let oQ = this.scripts.length - 1; oQ >= 0; oQ--) {
          const QQ = this.scripts[oQ].dialogueLines;
          for (let FQ = QQ.length - 1; FQ >= 0; FQ--) LQ.includes(QQ[FQ].dialogueSpeakerId) || LQ.push(QQ[FQ].dialogueSpeakerId)
        }
        const qQ = null !== wQ.npcId && LQ.includes(wQ.npcId) ? wQ.npcId : null !== (QQ = LQ[0]) && void 0 !== QQ ? QQ : null;
        return {
          ...FQ,
          characters: LQ.map((QQ => {
            var FQ, wQ;
            return {
              id: QQ,
              styling: null !== (FQ = null === (wQ = this.speakers.get(QQ)) || void 0 === wQ ? void 0 : wQ.dialogueSpeakerStyling) && void 0 !== FQ ? FQ : QQ,
              selected: QQ === qQ
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((QQ => QQ.dialogueLines.some((QQ => QQ.dialogueSpeakerId === qQ)))).map((QQ => this.conversation(QQ))).reverse()
        }
      }
      conversation(QQ) {
        let FQ = null;
        return {
          questId: QQ.dialogueQuestId,
          questName: this.translate(QQ.dialogueQuestNameKey),
          completed: QQ.dialogueQuestCompleted,
          lines: QQ.dialogueLines.map(((QQ, wQ) => {
            var LQ;
            const qQ = QQ.dialogueSpeakerId === FQ || null === (LQ = this.speakers.get(QQ.dialogueSpeakerId)) || void 0 === LQ ? void 0 : LQ.dialogueSpeakerStyling;
            return FQ = QQ.dialogueSpeakerId, {
              key: wQ,
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
          let [FQ, wQ] = QQ;
          return [FQ, "string" === typeof wQ ? wQ : this.translate(wQ.translationKey)]
        })))
      }
    }
    var uq = wQ(600),
      Hq = wQ(1282),
      bq = wQ(96);
    const Yq = "skyblockAutographsView";

    function xq(QQ) {
      const FQ = uq.m[QQ];
      return {
        label: FQ.chatTag.map((QQ => QQ.str)).join(""),
        icon: FQ.icon,
        colour: FQ.mainRGB
      }
    }
    class Aq extends HQ {
      constructor(QQ) {
        let FQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = FQ, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      bx(QQ) {
        this.signatures = QQ.autographSignatures, QQ.autographOpen ? this.show() : this.emit()
      }
      setTranslator(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = FQ, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var QQ;
        const FQ = null !== (QQ = this.signatures) && void 0 !== QQ ? QQ : [],
          wQ = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          LQ = [...FQ].sort(((QQ, FQ) => Number(null !== FQ.autographRank) - Number(null !== QQ.autographRank) || FQ.autographSignedAtMs - QQ.autographSignedAtMs)).map((QQ => ({
            key: `${QQ.autographSignedAtMs}|${QQ.autographSignerName}`,
            name: (0, Hq.e)(QQ.autographSignerName, !bq.featureFlags.canSeeRealPlayerNames),
            rank: null === QQ.autographRank ? null : xq(QQ.autographRank),
            signedOn: wQ.format(QQ.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: LQ,
          total: LQ.length,
          rankTotal: LQ.filter((QQ => null !== QQ.rank)).length
        }
      }
    }
    const tq = "skyblockHudView",
      eq = () => {},
      Mq = {
        getItem: () => null,
        setItem: eq,
        removeItem: eq
      };
    class Gq {
      constructor(QQ) {
        let {
          translate: FQ,
          translateWithIcons: wQ,
          setMenuOpen: LQ = eq,
          dismissMenu: qQ = () => {
            LQ(!1)
          },
          publishSkills: oQ = eq,
          publishQuests: DQ = eq,
          publishQuestNotification: kQ = eq,
          publishDungeons: vQ = eq,
          publishCollections: mQ = eq,
          publishMap: uQ = eq,
          publishHud: HQ = eq,
          publishPortalTransit: bQ = eq,
          publishDailyReward: xQ = eq,
          publishMailbox: AQ = eq,
          publishQuestGraph: tQ = eq,
          publishForge: eQ = eq,
          publishSmuggler: MQ = eq,
          publishKeepersChair: GQ = eq,
          publishReachLog: pQ = eq,
          publishLampLight: cQ = eq,
          publishMagmaward: CQ = eq,
          publishGlowtide: iQ = eq,
          publishGlowMeter: WQ = eq,
          publishHushWait: RQ = eq,
          publishPassage: OQ = eq,
          publishTideCharts: sQ = eq,
          publishRegulars: rQ = eq,
          publishHiddenWaters: IQ = eq,
          publishDialogue: UQ = eq,
          publishAutographs: NQ = eq,
          isLoadingScreenUp: TQ = () => !1,
          onDailyRewardCoinLanded: KQ = eq,
          onDailyRewardStarted: zQ = eq,
          onDailyRewardFinished: lQ = eq,
          onDailyRewardItemLanded: jQ = eq,
          onMailboxStarted: aQ = eq,
          journeyStorage: XQ = Mq,
          requestTracking: fQ = eq,
          requestTravel: VQ = eq,
          requestDungeonEnter: hQ = eq,
          requestQuestJump: JQ = eq,
          requestQuestArrive: EQ = eq,
          requestForge: nQ = eq,
          requestSmuggle: gQ = eq,
          requestKeepersChairAim: PQ = eq,
          requestReachLogOpen: ZQ = eq,
          requestLampLight: yQ = eq,
          requestDialogue: BQ = eq
        } = QQ;
        this.navigation = void 0, this.map = void 0, this.compass = new SQ, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new RL.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = QQ => QQ, this.close = () => {
          for (const QQ of this.panels) QQ.close()
        }, this.setMenuOpen = LQ, this.publishHud = HQ, this.portalTransit = new Xw(bQ, XQ), this.magmaward = new aL(CQ), this.glowtide = new fL(iQ), this.glowMeter = new hL(WQ), this.hushWait = new EL(RQ), this.dailyReward = new hw(xQ, (() => TQ() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (QQ => {
          this.quests.setNotificationsHeld(QQ)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), KQ, zQ, lQ, jQ);
        const dQ = QQ => {
          this.panels.some((QQ => QQ.isOpen())) || (QQ ? qQ() : this.setMenuOpen(!1))
        };
        this.skills = new Dw(oQ, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), FQ, void 0, void 0, dQ), this.quests = new Hw(DQ, fQ, FQ, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, dQ, kQ), this.dungeons = new xw(vQ, FQ, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, dQ, hQ), this.collections = new lw(mQ, FQ, (() => {
          this.beforePanelOpen(this.collections)
        }), dQ), this.map = new YQ(uQ, VQ, FQ, (() => {
          this.beforePanelOpen(this.map)
        }), dQ), this.questGraph = new dw(tQ, FQ, (() => {
          this.beforePanelOpen(this.questGraph)
        }), dQ, JQ, EQ, XQ), this.forge = new eL(eQ, FQ, (() => {
          this.beforePanelOpen(this.forge)
        }), dQ, nQ), this.smuggler = new pL(MQ, FQ, (() => {
          this.beforePanelOpen(this.smuggler)
        }), dQ, gQ), this.lampLight = new lL(cQ, FQ, yQ, this.commandPacer), this.keepersChair = new sL(GQ, FQ, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (QQ => {
          this.lampLight.onChairClosed(), dQ(QQ)
        }), PQ, Date.now, this.commandPacer), this.reachLog = new KL(pQ, FQ, (() => {
          this.beforePanelOpen(this.reachLog)
        }), dQ, ZQ, this.commandPacer), this.passage = new WL(OQ, FQ, (() => {
          this.beforePanelOpen(this.passage)
        }), dQ), this.tideCharts = new Qq(sQ, FQ, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), dQ), this.regulars = new oq(rQ, FQ, (() => {
          this.beforePanelOpen(this.regulars)
        }), (QQ => {
          this.regulars.takeReturnToReachLog() && !QQ && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), dQ(QQ)
        })), this.hiddenWaters = new kq(IQ), this.dialogue = new mq(UQ, FQ, (() => {
          this.beforePanelOpen(this.dialogue)
        }), dQ, BQ), this.autographs = new Aq(NQ, (() => {
          this.beforePanelOpen(this.autographs)
        }), dQ), this.mailbox = new gw(AQ, (() => TQ() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), aQ), this.quests.translateWithIcons = null !== wQ && void 0 !== wQ ? wQ : null, this.skills.onLevelUp = QQ => {
          this.quests.notify(QQ)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new qw(this.map, this.quests, this.compass, FQ)
      }
      getHudSnapshot() {
        const QQ = this.hudSnapshot,
          FQ = this.dailyReward.getHeldCoins();
        return null === QQ || FQ <= 0 || !("hudPurseCoins" in QQ) ? QQ : {
          ...QQ,
          hudPurseCoins: Math.max(0, QQ.hudPurseCoins - FQ)
        }
      }
      receiveHud(QQ) {
        this.hudSnapshot = QQ, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(QQ) {
        this.setMenuOpen(!0);
        const FQ = QQ === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = QQ;
        for (const wQ of this.panels) wQ === QQ || FQ && wQ === this.reachLog || wQ.close();
        this.openingPanel = null
      }
      setTranslator(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FQ => this.resolveItemName(FQ, QQ);
        this.quests.translateWithIcons = null !== wQ && void 0 !== wQ ? wQ : null, this.navigation.setTranslator(QQ, FQ), this.lampLight.setTranslator(QQ, FQ), this.mailbox.setItemName(LQ);
        for (const qQ of this.panels) qQ.setTranslator(QQ, FQ, LQ)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const QQ of this.panels) QQ.dispose()
      }
    }
    var pq = wQ(1070),
      cq = wQ.n(pq),
      Cq = wQ(17),
      Sq = wQ(36228),
      iq = wQ(3268),
      Wq = wQ(1887),
      Rq = wQ(1873),
      Oq = wQ(9127),
      sq = wQ(1207),
      rq = wQ(1447),
      Iq = wQ(1107);

    function Uq(QQ) {
      let {
        controller: FQ,
        minimap: wQ,
        children: LQ
      } = QQ;
      const oQ = (0, rq.i)(tq, FQ.getHudSnapshot()),
        [DQ, kQ] = (0, WQ.useState)(FQ.skills.getSnapshot().overallLevel);
      (0, rq.g)(ow, (QQ => {
        kQ(QQ.overallLevel)
      }));
      const vQ = (0, WQ.useRef)(null);
      (0, rq.g)(Vw, (QQ => {
        ! function(QQ, FQ) {
          if (null === QQ || "function" !== typeof QQ.animate) return;
          const wQ = FQ ? 1.35 : 1.15;
          QQ.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${wQ})`
          }, {
            transform: "scale(1)"
          }], {
            duration: FQ ? 320 : 160,
            easing: "ease-out"
          }), QQ.classList.toggle("Receiving", !FQ), FQ && (QQ.classList.remove("Shine"), QQ.offsetWidth, QQ.classList.add("Shine"))
        }(vQ.current, QQ)
      }));
      const {
        t: mQ
      } = (0, sq.y)(), {
        isTouchScreen: uQ
      } = (0, Cq.l)(["isTouchScreen"]), [HQ, bQ] = (0, WQ.useState)(null);
      return (0, iq.j)(HQ, ".SkyblockRightHud"), null !== oQ || wQ ? (0, Iq.jsx)(Sq.d, {
        placement: "topRight",
        children: (0, Iq.jsxs)("div", {
          className: cq()("SkyblockRightHud", {
            TouchScreen: uQ
          }),
          children: [wQ, null !== oQ && (0, Iq.jsxs)("div", {
            ref: bQ,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in oQ ? (0, Iq.jsx)("div", {
              className: "SkyblockHudHelp",
              children: oQ.hudHelpText
            }) : (0, Iq.jsxs)(Iq.Fragment, {
              children: [(0, Iq.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Iq.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Iq.jsx)("strong", {
                    style: {
                      color: qQ.K.cyanUiText
                    },
                    children: mQ(oQ.hudZoneNameKey)
                  }), null !== DQ && (0, Iq.jsx)("span", {
                    style: {
                      color: qQ.K.goldUiText
                    },
                    children: mQ("skyblockGame:level", {
                      level: (0, Oq.d)(DQ)
                    })
                  })]
                }), (0, Iq.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: vQ,
                  children: [(0, Iq.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Iq.jsx)(Wq.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Oq.d)(oQ.hudPurseCoins)]
                })]
              }), oQ.hudClockText.length > 0 && (0, Iq.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Iq.jsx)(Rq.e, {
                  text: oQ.hudClockText
                })
              })]
            }), LQ, "hudZoneNameKey" in oQ && (0, Iq.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function Nq(QQ) {
      let {
        icon: FQ
      } = QQ;
      const wQ = (0, WQ.useCallback)((QQ => {
        null === QQ || void 0 === QQ || QQ.replaceChildren(EF(FQ))
      }), [FQ]);
      return (0, Iq.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: wQ
      })
    }

    function Tq(QQ) {
      let {
        controller: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)();
      return (0, Iq.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: FQ.display.mountPlayer,
        title: wQ("skyblockGame:mapYouAreHere"),
        children: (0, Iq.jsx)(Nq, {
          icon: "player"
        })
      })
    }
    const Kq = wQ(38085),
      zq = Object.fromEntries(Kq.keys().map((QQ => [QQ.replace(/^\.\/(.*)\.png$/, "$1"), Kq(QQ)])));

    function lq(QQ, FQ) {
      var wQ;
      return null !== (wQ = zq[QQ]) && void 0 !== wQ ? wQ : zq[FQ]
    }

    function jq(QQ) {
      let {
        imageKey: FQ,
        fallbackImageKey: wQ,
        geometryKey: LQ,
        alt: qQ,
        className: oQ
      } = QQ;
      const [DQ, kQ] = (0, WQ.useState)((() => function(QQ, FQ) {
        return [{
          id: 0,
          imageKey: QQ,
          geometryKey: FQ,
          phase: "shown"
        }]
      }(FQ, LQ))), vQ = function(QQ, FQ, wQ) {
        const LQ = QQ[QQ.length - 1];
        if (LQ.imageKey === FQ && LQ.geometryKey === wQ) return QQ;
        const qQ = {
          id: LQ.id + 1,
          imageKey: FQ,
          geometryKey: wQ,
          phase: "entering"
        };
        return LQ.geometryKey === wQ ? [{
          ...LQ,
          phase: "leaving"
        }, qQ] : [qQ]
      }(DQ, FQ, LQ);
      return vQ !== DQ && kQ(vQ), (0, Iq.jsx)(Iq.Fragment, {
        children: vQ.map((QQ => (0, Iq.jsx)("img", {
          className: cq()("SkyblockMapTerrainImage", oQ, {
            Entering: "entering" === QQ.phase,
            Leaving: "leaving" === QQ.phase
          }),
          src: lq(QQ.imageKey, wQ),
          alt: "leaving" === QQ.phase ? "" : qQ,
          onAnimationEnd: () => {
            kQ((FQ => function(QQ, FQ) {
              return QQ.flatMap((QQ => QQ.id !== FQ ? [QQ] : "leaving" === QQ.phase ? [] : [{
                ...QQ,
                phase: "shown"
              }]))
            }(FQ, QQ.id)))
          }
        }, QQ.id)))
      })
    }
    var aq = wQ(4376),
      Xq = wQ(1451);

    function fq(QQ) {
      if ("Tab" !== QQ.key) return;
      const FQ = Array.from(QQ.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        wQ = FQ.indexOf(document.activeElement);
      var LQ;
      if (QQ.shiftKey && wQ <= 0) QQ.preventDefault(), null === (LQ = FQ.at(-1)) || void 0 === LQ || LQ.focus();
      else if (!QQ.shiftKey && (-1 === wQ || wQ === FQ.length - 1)) {
        var qQ;
        QQ.preventDefault(), null === (qQ = FQ[0]) || void 0 === qQ || qQ.focus()
      }
    }

    function Vq() {
      const QQ = (0, WQ.useRef)(null);
      return (0, WQ.useCallback)((FQ => {
        var wQ;
        FQ ? (QQ.current = document.activeElement, FQ.focus()) : null === (wQ = QQ.current) || void 0 === wQ || wQ.focus()
      }), [])
    }

    function hq(QQ) {
      let {
        percent: FQ,
        label: wQ,
        levelUpToken: LQ,
        colour: qQ
      } = QQ;
      return (0, Iq.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": wQ,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": FQ,
        "aria-valuetext": wQ,
        children: [(0, Iq.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${FQ/100})`
          }
        }), null !== LQ && void 0 !== LQ && (0, Iq.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": qQ
          }
        }, LQ)]
      })
    }

    function Jq(QQ) {
      let {
        mount: FQ
      } = QQ;
      return (0, Iq.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: FQ,
        hidden: !0,
        children: (0, Iq.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Iq.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Iq.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Eq(QQ, FQ, wQ, LQ) {
      (0, WQ.useLayoutEffect)((() => {
        const qQ = QQ.current;
        if (!wQ || null === FQ || void 0 === FQ || !FQ.local || !qQ) return;
        const oQ = Array.from(qQ.querySelectorAll(".SkyblockMapNode")),
          DQ = [...FQ.points, ...FQ.portals],
          kQ = () => {
            const QQ = qQ.clientWidth,
              wQ = qQ.clientHeight,
              kQ = oQ.map(((qQ, oQ) => {
                const kQ = DQ[oQ];
                return {
                  id: kQ.id,
                  portal: oQ >= FQ.points.length,
                  x: kQ.position[0] * QQ / 100,
                  y: kQ.position[1] * wQ / 100,
                  width: qQ.offsetWidth / LQ,
                  height: qQ.offsetHeight / LQ
                }
              })),
              vQ = new Map(DQ.map(((QQ, FQ) => [QQ.id, oQ[FQ]])));
            for (const FQ of function(QQ, FQ, wQ) {
                const LQ = [],
                  qQ = [...QQ].sort(((QQ, FQ) => Number(FQ.portal) - Number(QQ.portal) || QQ.id.localeCompare(FQ.id)));
                for (const oQ of qQ) {
                  const QQ = QQ => Math.max(oQ.width / 2, Math.min(FQ - oQ.width / 2, QQ)),
                    qQ = QQ => Math.max(oQ.height / 2, Math.min(wQ - oQ.height / 2, QQ)),
                    DQ = [QQ(oQ.x)],
                    kQ = [qQ(oQ.y)];
                  for (const FQ of LQ) DQ.push(QQ(FQ.x - (FQ.width + oQ.width) / 2 - 4), QQ(FQ.x + (FQ.width + oQ.width) / 2 + 4)), kQ.push(qQ(FQ.y - (FQ.height + oQ.height) / 2 - 4), qQ(FQ.y + (FQ.height + oQ.height) / 2 + 4));
                  let vQ = {
                      ...oQ,
                      x: DQ[0],
                      y: kQ[0]
                    },
                    mQ = 1 / 0,
                    uQ = 1 / 0;
                  for (const FQ of new Set(DQ))
                    for (const QQ of new Set(kQ)) {
                      let wQ = 0;
                      for (const DQ of LQ) wQ += Math.max(0, (oQ.width + DQ.width) / 2 + 4 - Math.abs(FQ - DQ.x)) * Math.max(0, (oQ.height + DQ.height) / 2 + 4 - Math.abs(QQ - DQ.y));
                      const qQ = (FQ - oQ.x) ** 2 + (QQ - oQ.y) ** 2;
                      (wQ < mQ || wQ === mQ && qQ < uQ) && (vQ = {
                        ...oQ,
                        x: FQ,
                        y: QQ
                      }, mQ = wQ, uQ = qQ)
                    }
                  LQ.push(vQ)
                }
                return LQ
              }(kQ, QQ, wQ)) {
              const QQ = vQ.get(FQ.id);
              QQ.style.left = `${FQ.x}px`, QQ.style.top = `${FQ.y}px`
            }
          };
        kQ();
        const vQ = new ResizeObserver(kQ);
        vQ.observe(qQ);
        for (const QQ of oQ) vQ.observe(QQ);
        return () => {
          vQ.disconnect()
        }
      }), [QQ, FQ, wQ, LQ])
    }
    const nq = {
        zoom: 1,
        x: 0,
        y: 0
      },
      gq = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Pq(QQ, FQ, wQ) {
      return Math.min(wQ, Math.max(FQ, QQ))
    }

    function Zq(QQ, FQ, wQ) {
      const LQ = Math.min(1, wQ * FQ / QQ),
        qQ = Math.min(1, QQ / (wQ * FQ));
      return {
        x0: (1 - LQ) / 2,
        y0: (1 - qQ) / 2,
        x1: (1 + LQ) / 2,
        y1: (1 + qQ) / 2
      }
    }

    function yq(QQ, FQ, wQ, LQ) {
      const qQ = FQ * (LQ - wQ);
      if (qQ <= 1) return .5 - FQ * (wQ + LQ) / 2;
      const oQ = .45 * Math.min(1, qQ - 1);
      return Pq(QQ, 1 - FQ * LQ - oQ, oQ - FQ * wQ)
    }

    function Bq(QQ, FQ) {
      const wQ = Pq(QQ.zoom, 1, 12);
      return {
        zoom: wQ,
        x: yq(QQ.x, wQ, FQ.x0, FQ.x1),
        y: yq(QQ.y, wQ, FQ.y0, FQ.y1)
      }
    }

    function dq(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : gq;
      const oQ = Pq(QQ.zoom * FQ, 1, 12),
        DQ = oQ / QQ.zoom;
      return Bq({
        zoom: oQ,
        x: wQ - (wQ - QQ.x) * DQ,
        y: LQ - (LQ - QQ.y) * DQ
      }, qQ)
    }

    function Qo(QQ, FQ, wQ, LQ) {
      const [qQ, oQ] = (0, WQ.useState)(nq);
      (0, WQ.useEffect)((() => {
        oQ(nq)
      }), [wQ]), (0, WQ.useEffect)((() => {
        const wQ = QQ.current;
        if (!FQ || !wQ) return;
        const qQ = () => Zq(wQ.clientWidth, wQ.clientHeight, LQ),
          DQ = QQ => {
            const FQ = wQ.getBoundingClientRect();
            return {
              x: (QQ.clientX - FQ.left) / FQ.width,
              y: (QQ.clientY - FQ.top) / FQ.height
            }
          },
          kQ = new Map;
        let vQ = {
            x: 0,
            y: 0
          },
          mQ = !1,
          uQ = 0;
        const HQ = QQ => {
            QQ.preventDefault();
            const FQ = QQ.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * QQ.deltaY : QQ.deltaY,
              wQ = DQ(QQ);
            oQ((QQ => dq(QQ, Math.exp(.0015 * -FQ), wQ.x, wQ.y, qQ())))
          },
          bQ = QQ => {
            "mouse" === QQ.pointerType && 0 !== QQ.button || (kQ.set(QQ.pointerId, DQ(QQ)), 1 === kQ.size && (vQ = {
              x: QQ.clientX,
              y: QQ.clientY
            }, mQ = !1), uQ = 0)
          },
          YQ = QQ => {
            const FQ = kQ.get(QQ.pointerId);
            if (!FQ) return;
            const LQ = DQ(QQ);
            if (kQ.set(QQ.pointerId, LQ), 2 === kQ.size) {
              const [QQ, FQ] = [...kQ.values()], wQ = Math.hypot(QQ.x - FQ.x, QQ.y - FQ.y);
              if (uQ > 0) {
                const LQ = wQ / uQ;
                oQ((wQ => dq(wQ, LQ, (QQ.x + FQ.x) / 2, (QQ.y + FQ.y) / 2, qQ())))
              }
              return uQ = wQ, void(mQ = !0)
            }!mQ && Math.hypot(QQ.clientX - vQ.x, QQ.clientY - vQ.y) < 4 || (mQ || (mQ = !0, wQ.setPointerCapture(QQ.pointerId)), oQ((QQ => function(QQ, FQ, wQ) {
              let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gq;
              return Bq({
                zoom: QQ.zoom,
                x: QQ.x + FQ,
                y: QQ.y + wQ
              }, LQ)
            }(QQ, LQ.x - FQ.x, LQ.y - FQ.y, qQ()))))
          },
          xQ = QQ => {
            kQ.delete(QQ.pointerId), uQ = 0
          },
          AQ = QQ => {
            mQ && (QQ.stopPropagation(), QQ.preventDefault(), mQ = !1)
          },
          tQ = new ResizeObserver((() => {
            oQ((QQ => Bq(QQ, qQ())))
          }));
        return tQ.observe(wQ), wQ.addEventListener("wheel", HQ, {
          passive: !1
        }), wQ.addEventListener("pointerdown", bQ), wQ.addEventListener("pointermove", YQ), wQ.addEventListener("pointerup", xQ), wQ.addEventListener("pointercancel", xQ), wQ.addEventListener("click", AQ, !0), () => {
          tQ.disconnect(), wQ.removeEventListener("wheel", HQ), wQ.removeEventListener("pointerdown", bQ), wQ.removeEventListener("pointermove", YQ), wQ.removeEventListener("pointerup", xQ), wQ.removeEventListener("pointercancel", xQ), wQ.removeEventListener("click", AQ, !0)
        }
      }), [QQ, FQ, wQ, LQ]);
      return {
        view: qQ,
        zoomBy: FQ => {
          const wQ = QQ.current;
          wQ && oQ((QQ => dq(QQ, FQ, .5, .5, Zq(wQ.clientWidth, wQ.clientHeight, LQ))))
        }
      }
    }

    function Fo(QQ) {
      var FQ, wQ, LQ, qQ;
      let {
        controller: oQ,
        navigation: DQ
      } = QQ;
      const kQ = (0, rq.i)(bQ, oQ.getSnapshot()),
        {
          t: vQ
        } = (0, sq.y)(),
        mQ = Vq(),
        uQ = kQ.presentation,
        HQ = (0, WQ.useRef)(null),
        YQ = (0, WQ.useRef)(null),
        xQ = Boolean(kQ.open && (null === uQ || void 0 === uQ ? void 0 : uQ.local) && uQ.background),
        AQ = Qo(HQ, xQ, `${kQ.open}|${kQ.tab}|${null===uQ||void 0===uQ||null===(FQ=uQ.background)||void 0===FQ?void 0:FQ.geometryKey}`, null !== (wQ = null === uQ || void 0 === uQ || null === (LQ = uQ.background) || void 0 === LQ ? void 0 : LQ.ratio) && void 0 !== wQ ? wQ : 2);
      if (Eq(YQ, uQ, kQ.open, AQ.view.zoom), !uQ || !kQ.open) return null;
      const tQ = uQ.local ? uQ.background : null,
        eQ = {
          "--map-ratio": String(null !== (qQ = null === tQ || void 0 === tQ ? void 0 : tQ.ratio) && void 0 !== qQ ? qQ : 2),
          backgroundColor: null === tQ || void 0 === tQ ? void 0 : tQ.colour
        },
        MQ = {
          "--map-zoom": String(AQ.view.zoom),
          transform: `translate(${100*AQ.view.x}%, ${100*AQ.view.y}%) scale(${AQ.view.zoom})`
        };
      return (0, Iq.jsx)(aq.d, {
        show: kQ.open,
        close: oQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: mQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockMapTitle",
                children: vQ("skyblockGame:map")
              }), uQ.minimap && (0, Iq.jsx)("p", {
                children: uQ.minimap.caption
              })]
            }), (0, Iq.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((QQ => (0, Iq.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": QQ === kQ.tab ? "true" : void 0,
                className: cq()({
                  Selected: QQ === kQ.tab
                }),
                "aria-pressed": QQ === kQ.tab,
                onClick: () => {
                  oQ.selectTab(QQ)
                },
                children: vQ("local" === QQ ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, QQ)))
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              onClick: oQ.dismiss
            })]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Iq.jsxs)("div", {
              ref: HQ,
              className: cq()("SkyblockMapCanvas", {
                Local: uQ.local,
                Overview: !uQ.local,
                Zoomed: AQ.view.zoom > 1
              }),
              style: eQ,
              children: [(0, Iq.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: xQ ? MQ : void 0,
                children: (0, Iq.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: YQ,
                  children: [tQ && (0, Iq.jsx)(jq, {
                    className: "SkyblockMapTerrain",
                    imageKey: tQ.imageKey,
                    fallbackImageKey: tQ.fallbackImageKey,
                    geometryKey: tQ.geometryKey,
                    alt: tQ.label
                  }), uQ.local && (0, Iq.jsx)(Jq, {
                    mount: DQ.display.mountMapSearchArea
                  }), !uQ.local && (0, Iq.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: uQ.connections.map((QQ => (0, Iq.jsx)("line", {
                      className: cq()({
                        Explored: QQ.explored
                      }),
                      x1: QQ.start[0],
                      y1: QQ.start[1],
                      x2: QQ.end[0],
                      y2: QQ.end[1]
                    }, QQ.id)))
                  }), uQ.points.map((QQ => {
                    const FQ = !uQ.local && QQ.thumbnail ? zq[QQ.thumbnail] : void 0;
                    return (0, Iq.jsxs)("div", {
                      className: cq()("SkyblockMapNode", {
                        Current: QQ.current
                      }),
                      style: {
                        left: `${QQ.position[0]}%`,
                        top: `${QQ.position[1]}%`
                      },
                      children: [(0, Iq.jsxs)(Xq.f, {
                        className: cq()("SkyblockMapPin", {
                          Unknown: !QQ.visited,
                          Current: QQ.current
                        }),
                        disabled: kQ.pending,
                        onClick: () => {
                          oQ.travel(QQ.travelKind, QQ.travelId)
                        },
                        children: [FQ && (0, Iq.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: FQ,
                          alt: ""
                        }), !FQ && (0, Iq.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Iq.jsx)(Nq, {
                            icon: QQ.icon
                          })
                        }), (0, Iq.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: QQ.name
                        })]
                      }), QQ.current && (0, Iq.jsx)("span", {
                        className: cq()("SkyblockMapHereBadge", {
                          Above: QQ.position[1] > 50
                        }),
                        children: vQ("skyblockGame:mapYouAreHere")
                      })]
                    }, QQ.id)
                  })), uQ.portals.map((QQ => (0, Iq.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${QQ.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${QQ.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Iq.jsxs)(Xq.f, {
                      className: "SkyblockMapPin",
                      disabled: kQ.pending,
                      onClick: () => {
                        oQ.travel(QQ.travelKind, QQ.travelId)
                      },
                      children: [(0, Iq.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: QQ.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Iq.jsx)(Nq, {
                          icon: QQ.icon
                        })
                      }), (0, Iq.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: QQ.name
                      })]
                    })
                  }, QQ.id))), uQ.local && (0, Iq.jsx)(Tq, {
                    controller: DQ
                  })]
                })
              }), xQ && (0, Iq.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Iq.jsx)("button", {
                  type: "button",
                  "aria-label": vQ("skyblockGame:mapZoomIn"),
                  disabled: AQ.view.zoom >= 12,
                  onClick: () => {
                    AQ.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Iq.jsx)("button", {
                  type: "button",
                  "aria-label": vQ("skyblockGame:mapZoomOut"),
                  disabled: AQ.view.zoom <= 1,
                  onClick: () => {
                    AQ.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Iq.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: kQ.feedback
              })]
            })
          }), (0, Iq.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [uQ.progress && (0, Iq.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Iq.jsx)("span", {
                children: uQ.progress
              }), (0, Iq.jsx)(hq, {
                percent: uQ.percent,
                label: uQ.progress
              })]
            }), uQ.noLandmarks && (0, Iq.jsx)("span", {
              children: vQ("skyblockGame:mapNoLandmarks")
            }), uQ.canTravel && (0, Iq.jsx)("span", {
              className: "SkyblockMapHint",
              children: vQ("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function wo(QQ) {
      let {
        view: FQ,
        controller: wQ,
        navigation: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, sq.y)(), {
        isTouchScreen: oQ
      } = (0, Cq.l)(["isTouchScreen"]);
      return (0, Iq.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": qQ("skyblockGame:mapLocal"),
        children: [oQ && (0, Iq.jsx)(Xq.f, {
          className: "SkyblockMinimapOpen",
          onClick: wQ.showLocal,
          children: qQ("skyblockGame:map")
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: FQ.colour
          },
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: LQ.display.mountTerrain,
            style: {
              width: FQ.width,
              height: FQ.height
            },
            children: [(0, Iq.jsx)(jq, {
              imageKey: FQ.imageKey,
              fallbackImageKey: FQ.fallbackImageKey,
              geometryKey: FQ.geometryKey,
              alt: FQ.label
            }), (0, Iq.jsx)(Jq, {
              mount: LQ.display.mountMinimapSearchArea
            }), FQ.markers.map((QQ => (0, Iq.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${QQ.position[0]}%`,
                top: `${QQ.position[1]}%`,
                color: QQ.colour
              },
              title: QQ.name,
              children: (0, Iq.jsx)(Nq, {
                icon: QQ.icon
              })
            }, QQ.id)))]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: qQ("skyblockGame:mapYouAreHere"),
            children: (0, Iq.jsx)(Nq, {
              icon: "player"
            })
          })]
        }), (0, Iq.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: FQ.caption
        })]
      })
    }

    function Lo(QQ) {
      let {
        controller: FQ
      } = QQ;
      return (0, Iq.jsxs)("div", {
        className: "SkyblockCompass",
        ref: FQ.display.mountCompass,
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Iq.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Iq.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function qo(QQ) {
      let {
        controller: FQ,
        surface: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, sq.y)(), qQ = (0, rq.i)(ow, FQ.getSnapshot()), oQ = Vq();
      return qQ.enabled ? (0, Iq.jsxs)(Iq.Fragment, {
        children: ["hud" === wQ && (0, Iq.jsx)(Sq.d, {
          placement: "statBars",
          children: qQ.hud && (0, Iq.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": qQ.hud.colour
            },
            children: [(0, Iq.jsx)(hq, {
              percent: qQ.hud.skill.percent,
              label: qQ.hud.skill.xp,
              levelUpToken: qQ.hud.levelUpToken,
              colour: qQ.hud.colour
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Iq.jsxs)("span", {
                children: [qQ.hud.skill.label, " \xb7 ", qQ.hud.skill.level]
              }), (0, Iq.jsx)("span", {
                children: qQ.hud.gain
              })]
            })]
          })
        }), "hud" === wQ && (0, Iq.jsx)(Sq.d, {
          children: qQ.hud && (0, Iq.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Iq.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Iq.jsx)("strong", {
                children: qQ.hud.skill.label
              }), (0, Iq.jsx)("span", {
                children: qQ.hud.gain
              })]
            }), (0, Iq.jsx)(hq, {
              percent: qQ.hud.skill.percent,
              label: qQ.hud.skill.xp,
              levelUpToken: qQ.hud.levelUpToken,
              colour: qQ.hud.colour
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Iq.jsx)("span", {
                children: qQ.hud.skill.level
              }), (0, Iq.jsx)("span", {
                children: qQ.hud.skill.xp
              })]
            })]
          })
        }), "menu" === wQ && (0, Iq.jsx)(aq.d, {
          show: qQ.open,
          close: FQ.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Iq.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: oQ,
            onKeyDown: fq,
            children: [(0, Iq.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Iq.jsxs)("div", {
                children: [(0, Iq.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: LQ("skyblockGame:skills")
                }), (0, Iq.jsx)("p", {
                  children: LQ("skyblockGame:skillsIntro")
                })]
              }), (0, Iq.jsx)(Xq.j, {
                padIgnore: !0,
                onClick: FQ.dismiss
              })]
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Iq.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: qQ.skills.map((QQ => (0, Iq.jsxs)(Xq.f, {
                  className: cq()("SkyblockSkillCard", {
                    Selected: QQ.selected
                  }),
                  ariaPressed: QQ.selected,
                  onClick: () => {
                    FQ.select(QQ.id)
                  },
                  children: [(0, Iq.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Iq.jsx)(Wq.e, {
                      itemName: QQ.icon,
                      amount: 0
                    })
                  }), (0, Iq.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Iq.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Iq.jsx)("strong", {
                        children: QQ.label
                      }), (0, Iq.jsx)("span", {
                        children: QQ.level
                      })]
                    }), (0, Iq.jsx)(hq, {
                      percent: QQ.percent,
                      label: `${QQ.label}: ${QQ.xp}`
                    }), (0, Iq.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: QQ.xp
                    })]
                  })]
                }, QQ.id)))
              }), qQ.detail && (0, Iq.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Iq.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Iq.jsx)(Wq.e, {
                    itemName: qQ.detail.icon,
                    amount: 0
                  })
                }), (0, Iq.jsx)("h3", {
                  children: qQ.detail.label
                }), (0, Iq.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: qQ.detail.level
                }), (0, Iq.jsx)("p", {
                  children: qQ.detail.description
                }), (0, Iq.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Iq.jsx)("strong", {
                    children: LQ("skyblockGame:currentBenefit")
                  }), (0, Iq.jsx)("span", {
                    children: qQ.detail.benefit
                  })]
                }), (0, Iq.jsx)(hq, {
                  percent: qQ.detail.percent,
                  label: qQ.detail.xp
                }), (0, Iq.jsx)("p", {
                  children: qQ.detail.xp
                }), (0, Iq.jsx)("h4", {
                  children: LQ("skyblockGame:earnXp")
                }), (0, Iq.jsx)("ul", {
                  children: qQ.detail.sources.map((QQ => (0, Iq.jsx)("li", {
                    children: QQ
                  }, QQ)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var oo = wQ(1367),
      Do = wQ(4674),
      ko = wQ(307);

    function vo(QQ) {
      let {
        item: FQ
      } = QQ;
      return (0, Iq.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Iq.jsx)(Wq.e, {
          itemName: FQ,
          amount: 0
        })
      })
    }

    function mo(QQ) {
      let {
        name: FQ,
        percent: wQ,
        progress: LQ
      } = QQ;
      return (0, Iq.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Iq.jsx)(hq, {
          percent: wQ,
          label: `${(0,ko.ib)(FQ)}: ${LQ}`
        }), (0, Iq.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: LQ
        })]
      })
    }

    function uo(QQ) {
      let {
        subquests: FQ,
        showDescriptions: wQ = !1
      } = QQ;
      return (0, Iq.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: FQ.map((QQ => {
          const FQ = wQ && "completed" === QQ.status,
            LQ = (0, Iq.jsxs)("li", {
              className: cq()("SkyblockQuestStep", QQ.status, {
                JustFinished: QQ.justFinished,
                JustUnlocked: QQ.justUnlocked
              }),
              tabIndex: FQ ? 0 : void 0,
              children: [null !== QQ.iconItem && (0, Iq.jsx)(vo, {
                item: QQ.iconItem
              }), null === QQ.iconItem && (0, Iq.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === QQ.status ? "\u2713" : "skipped" === QQ.status ? "\u2212" : "\u25cb"
              }), (0, Iq.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Iq.jsx)("strong", {
                  children: (0, Iq.jsx)(Do.d, {
                    text: QQ.name
                  })
                }), wQ && !FQ && (0, Iq.jsx)("span", {
                  children: (0, Iq.jsx)(Do.d, {
                    text: QQ.description
                  })
                }), null !== QQ.barPercent && (0, Iq.jsx)(mo, {
                  name: QQ.name,
                  percent: QQ.barPercent,
                  progress: QQ.progress
                }), null === QQ.barPercent && !FQ && (0, Iq.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: QQ.statusLabel
                })]
              })]
            }, QQ.id);
          return FQ ? (0, Iq.jsx)(oo.f, {
            delayShow: 200,
            tooltipInner: (0, Iq.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Iq.jsx)("span", {
                children: (0, Iq.jsx)(Do.d, {
                  text: QQ.description
                })
              }), (0, Iq.jsx)("strong", {
                children: QQ.statusLabel
              })]
            }),
            children: LQ
          }, QQ.id) : LQ
        }))
      })
    }

    function Ho(QQ) {
      let {
        quest: FQ,
        select: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, sq.y)(), qQ = FQ.focusStep;
      return (0, Iq.jsxs)(Xq.f, {
        className: cq()("SkyblockQuestCard", {
          Selected: FQ.selected,
          Tracked: FQ.tracked
        }),
        onClick: () => {
          wQ(FQ.id)
        },
        children: [(0, Iq.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Iq.jsx)("strong", {
            children: (0, Iq.jsx)(Do.d, {
              text: FQ.name
            })
          }), FQ.tracked && (0, Iq.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: LQ("skyblockGame:currentQuest")
          })]
        }), qQ && (0, Iq.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== qQ.iconItem && (0, Iq.jsx)(vo, {
            item: qQ.iconItem
          }), (0, Iq.jsx)(mo, {
            name: qQ.name,
            percent: qQ.barPercent,
            progress: qQ.progress
          })]
        }), (0, Iq.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: FQ.progress
        })]
      })
    }

    function bo(QQ) {
      let {
        controller: FQ,
        surface: wQ
      } = QQ;
      const LQ = (0, rq.i)(mw, FQ.getSnapshot()),
        {
          t: qQ
        } = (0, sq.y)(),
        oQ = Vq();
      return LQ.enabled ? (0, Iq.jsxs)(Iq.Fragment, {
        children: ["hud" === wQ && (0, Iq.jsx)(Iq.Fragment, {
          children: LQ.tracked && (0, Iq.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: vw,
            children: (0, Iq.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [LQ.trackedStepPulse > 0 && (0, Iq.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, LQ.trackedStepPulse), (0, Iq.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: qQ("skyblockGame:currentQuest")
              }), (0, Iq.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Iq.jsx)("strong", {
                  children: (0, Iq.jsx)(Do.d, {
                    text: LQ.tracked.name
                  })
                }), null !== LQ.tracked.clock && (0, Iq.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: LQ.tracked.clock
                })]
              }), (0, Iq.jsx)(uo, {
                subquests: LQ.tracked.subquests
              })]
            })
          })
        }), "menu" === wQ && (0, Iq.jsx)(aq.d, {
          show: LQ.open,
          close: FQ.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Iq.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: oQ,
            onKeyDown: fq,
            children: [(0, Iq.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Iq.jsx)("div", {
                children: (0, Iq.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: qQ("skyblockGame:quests")
                })
              }), (0, Iq.jsx)(Xq.j, {
                padIgnore: !0,
                onClick: FQ.dismiss
              })]
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Iq.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Iq.jsx)("h3", {
                  children: qQ("skyblockGame:current")
                }), 0 === LQ.active.length && (0, Iq.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: qQ("skyblockGame:noActiveQuests")
                }), LQ.active.map((QQ => (0, Iq.jsx)(Ho, {
                  quest: QQ,
                  select: FQ.select
                }, QQ.id))), (0, Iq.jsx)("h3", {
                  children: (0, Iq.jsxs)("button", {
                    type: "button",
                    className: cq()("SkyblockQuestSectionToggle", {
                      Expanded: LQ.completedExpanded
                    }),
                    "aria-expanded": LQ.completedExpanded,
                    onClick: FQ.toggleCompleted,
                    children: [(0, Iq.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), qQ("skyblockGame:completed"), (0, Iq.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: LQ.completed.length
                    })]
                  })
                }), LQ.completedExpanded && 0 === LQ.completed.length && (0, Iq.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: qQ("skyblockGame:noCompletedQuests")
                }), LQ.completedExpanded && LQ.completed.map((QQ => (0, Iq.jsx)(Ho, {
                  quest: QQ,
                  select: FQ.select
                }, QQ.id)))]
              }), LQ.detail && (0, Iq.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [LQ.detail.completed && (0, Iq.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: qQ("skyblockGame:completedQuest")
                }), (0, Iq.jsx)("h3", {
                  children: (0, Iq.jsx)(Do.d, {
                    text: LQ.detail.name
                  })
                }), (0, Iq.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Iq.jsx)(Do.d, {
                    text: LQ.detail.description
                  })
                }), (0, Iq.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [LQ.detail.progress, null !== LQ.detail.clock && (0, Iq.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: LQ.detail.clock
                  })]
                }), (0, Iq.jsx)(uo, {
                  subquests: LQ.detail.subquests,
                  showDescriptions: !0
                }), LQ.detail.tracked && (0, Iq.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: LQ.detail.trackLabel
                }), !LQ.detail.completed && !LQ.detail.tracked && (0, Iq.jsx)(Xq.m, {
                  onClick: FQ.trackSelected,
                  disabled: !LQ.detail.canTrack,
                  children: LQ.detail.trackLabel
                }), LQ.detail.canViewDialogue && (0, Iq.jsx)(Xq.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: FQ.viewDialogue,
                  children: qQ("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Yo = wQ(1079),
      xo = wQ(2511);

    function Ao(QQ, FQ, wQ, LQ, qQ) {
      const oQ = QQ => "linear" === qQ ? QQ : {
          MQ: qQ,
          point: QQ
        },
        DQ = {};
      for (const [kQ, vQ] of LQ)
        for (const [FQ, wQ] of Object.entries(QQ(kQ, vQ, oQ))) DQ[FQ] ??= {
          timeline: []
        }, DQ[FQ].timeline.push(wQ);
      return {
        YQ: FQ,
        loop: wQ,
        AQ: DQ
      }
    }
    const to = .547,
      eo = .022,
      Mo = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Go = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function po(QQ, FQ, wQ) {
      const {
        drop: LQ = 0,
        shift: qQ = 0,
        torso: oQ = 0,
        nod: DQ = 0,
        tilt: kQ = 0,
        legs: vQ = [0, 0],
        arms: mQ = 0,
        spread: uQ = 0
      } = FQ, HQ = to * Math.cos(oQ) - eo * Math.sin(oQ), bQ = to * Math.sin(oQ) + eo * Math.cos(oQ), YQ = wQ([0, -LQ, qQ]);
      return {
        LowerBody: {
          timeFraction: QQ,
          position: YQ,
          rotation: wQ([0, 0, 0])
        },
        UpperBody: {
          timeFraction: QQ,
          position: YQ,
          rotation: wQ([oQ, 0, kQ])
        },
        HeadMesh: {
          timeFraction: QQ,
          position: wQ([0, HQ - to - LQ, bQ - eo + qQ]),
          rotation: wQ([oQ + DQ, 0, kQ])
        },
        LegLeftMesh: {
          timeFraction: QQ,
          rotation: wQ([vQ[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: QQ,
          rotation: wQ([vQ[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: QQ,
          rotation: wQ([mQ, 0, uQ])
        },
        ArmRightMesh: {
          timeFraction: QQ,
          rotation: wQ([mQ, 0, -uQ])
        }
      }
    }

    function co(QQ, FQ, wQ) {
      return Ao(po, QQ, FQ, wQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function Co(QQ) {
      return "number" === typeof QQ ? [QQ, QQ] : QQ
    }

    function So(QQ, FQ, wQ) {
      const {
        rise: LQ = 0,
        shift: qQ = 0,
        torso: oQ = 0,
        twist: DQ = 0,
        tilt: kQ = 0,
        nod: vQ = 0,
        cock: mQ = 0,
        arms: uQ = 0,
        spread: HQ = 0
      } = FQ, [bQ, YQ] = Co(uQ), [xQ, AQ] = Co(HQ);
      return {
        TorsoNode: {
          timeFraction: QQ,
          position: wQ([0, LQ, qQ]),
          rotation: wQ([oQ, DQ, kQ])
        },
        HeadMesh: {
          timeFraction: QQ,
          rotation: wQ([vQ, 0, mQ])
        },
        ArmLeftMesh: {
          timeFraction: QQ,
          rotation: wQ([bQ, 0, xQ])
        },
        ArmRightMesh: {
          timeFraction: QQ,
          rotation: wQ([YQ, 0, -AQ])
        }
      }
    }
    const io = [1.0625, -1, 0];

    function Wo(QQ) {
      return "number" === typeof QQ ? [QQ, QQ] : QQ
    }

    function Ro(QQ, FQ, wQ) {
      const {
        drop: LQ = 0,
        shift: qQ = 0,
        torso: oQ = 0,
        tilt: DQ = 0,
        nod: kQ = 0,
        cock: vQ = 0,
        legs: mQ = [0, 0],
        arms: uQ = 0,
        spread: HQ = 0
      } = FQ, [bQ, YQ] = Wo(uQ), [xQ, AQ] = Wo(HQ), tQ = -oQ, eQ = -DQ, [MQ, GQ, pQ] = function(QQ, FQ) {
        const [wQ, LQ, qQ] = [-io[0], io[1], -io[2]], oQ = wQ * Math.cos(FQ) - LQ * Math.sin(FQ), DQ = wQ * Math.sin(FQ) + LQ * Math.cos(FQ);
        return [oQ - wQ, -(DQ * Math.cos(QQ) - qQ * Math.sin(QQ) - LQ), DQ * Math.sin(QQ) + qQ * Math.cos(QQ) - qQ]
      }(tQ, eQ), cQ = wQ([0, -LQ, qQ]);
      return {
        TorsoNode: {
          timeFraction: QQ,
          position: wQ([MQ, GQ - LQ, pQ + qQ]),
          rotation: wQ([tQ, 0, eQ])
        },
        HeadMesh: {
          timeFraction: QQ,
          rotation: wQ([-kQ, 0, -vQ])
        },
        ArmLeftMesh: {
          timeFraction: QQ,
          rotation: wQ([-bQ, 0, -xQ])
        },
        ArmRightMesh: {
          timeFraction: QQ,
          rotation: wQ([-YQ, 0, AQ])
        },
        LegLeftMesh: {
          timeFraction: QQ,
          position: cQ,
          rotation: wQ([-mQ[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: QQ,
          position: cQ,
          rotation: wQ([-mQ[1], 0, 0])
        }
      }
    }
    var Oo = wQ(36768),
      so = wQ(38009),
      ro = wQ(38164);

    function Io(QQ, FQ, wQ) {
      var LQ, qQ;
      const oQ = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return QQ + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - QQ) * wQ
        },
        [DQ, kQ] = null !== (LQ = QQ.legs) && void 0 !== LQ ? LQ : [0, 0],
        [vQ, mQ] = null !== (qQ = FQ.legs) && void 0 !== qQ ? qQ : [0, 0];
      return {
        drop: oQ(QQ.drop, FQ.drop),
        shift: oQ(QQ.shift, FQ.shift),
        torso: oQ(QQ.torso, FQ.torso),
        nod: oQ(QQ.nod, FQ.nod),
        tilt: oQ(QQ.tilt, FQ.tilt),
        legs: [oQ(DQ, vQ), oQ(kQ, mQ)],
        arms: oQ(QQ.arms, FQ.arms),
        spread: oQ(QQ.spread, FQ.spread)
      }
    }
    const Uo = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      No = co(4400, !0, [
        [0, Uo],
        [.16, {
          ...Uo,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, Uo],
        [.44, {
          ...Uo,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Io(Uo, Mo, .7)],
        [.66, Io(Uo, Mo, .78)],
        [.74, Io(Uo, Go, .65)],
        [.86, {
          ...Uo,
          drop: .14
        }],
        [1, Uo]
      ], "catmull-rom-spline"),
      To = {
        ...Uo,
        drop: .14,
        torso: .3,
        spread: .4
      },
      Ko = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      zo = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      jo = {
        caveGolem: No,
        magmaGolem: co(3600, !0, [
          [0, To],
          [.12, {
            ...To,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...To,
            tilt: -.08
          }],
          [.4, {
            ...To,
            tilt: .06,
            drop: .11
          }],
          [.52, Io(To, Mo, .9)],
          [.62, Io(To, Go, .8)],
          [.7, Io(To, Go, .45)],
          [.78, Io(To, Go, .85)],
          [.9, {
            ...To,
            drop: .17
          }],
          [1, To]
        ], "catmull-rom-spline"),
        frostWraith: function(QQ, FQ, wQ) {
          return Ao(So, QQ, FQ, wQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, Ko],
          [.14, {
            ...Ko,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...Ko,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...Ko,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...Ko,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...Ko,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...Ko,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...Ko,
            rise: .16,
            tilt: -.04
          }],
          [1, Ko]
        ], "catmull-rom-spline"),
        tikiTerror: function(QQ, FQ, wQ) {
          return Ao(Ro, QQ, FQ, wQ, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, zo],
          [.16, {
            ...zo,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, zo],
          [.44, {
            ...zo,
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
            ...zo,
            drop: .1
          }],
          [1, zo]
        ], "catmull-rom-spline")
      },
      ao = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      Xo = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      fo = Object.fromEntries(Object.entries(jo).map((QQ => {
        let [FQ, wQ] = QQ;
        return [FQ, (0, ro.d)((0, Oo.h)(wQ), FQ)]
      })));

    function Vo(QQ) {
      const FQ = function(QQ) {
        var FQ;
        const wQ = (0, so.b)(QQ).poseRig;
        return null !== (FQ = Xo[QQ]) && void 0 !== FQ ? FQ : void 0 === wQ ? null : ao[wQ]
      }(QQ);
      return null === FQ ? null : fo[FQ]
    }

    function ho(QQ) {
      return {
        "--difficulty-colour": QQ
      }
    }
    const Jo = (0, WQ.lazy)((() => (0, xo.b)(wQ.e(193).then((() => wQ(40922))), (QQ => QQ.MobPreview))));

    function Eo(QQ) {
      var FQ, wQ, LQ;
      let {
        picker: qQ,
        controller: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, sq.y)(), kQ = Vq(), {
        page: vQ
      } = qQ;
      return (0, Iq.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: kQ,
        onKeyDown: QQ => {
          "ArrowLeft" === QQ.key ? (QQ.preventDefault(), QQ.stopPropagation(), oQ.previous()) : "ArrowRight" === QQ.key ? (QQ.preventDefault(), QQ.stopPropagation(), oQ.next()) : fq(QQ)
        },
        style: ho(vQ.colour),
        children: [(0, Iq.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Iq.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: qQ.dungeonName
          }), (0, Iq.jsx)(Xq.j, {
            padIgnore: !0,
            onClick: oQ.dismiss
          })]
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Iq.jsx)(Xq.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !qQ.canPrevious,
              onClick: oQ.previous,
              children: (0, Iq.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Iq.jsx)(Yo.c, {
                  name: "angle-up"
                })
              })
            }), (0, Iq.jsxs)("div", {
              className: cq()("SkyblockBossPickerBoss", {
                Locked: !vQ.unlocked
              }),
              children: [null !== vQ.bossMobType && (0, Iq.jsx)(WQ.Suspense, {
                fallback: (0, Iq.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Iq.jsx)(Jo, {
                  className: "SkyblockBossPickerModel",
                  mobType: vQ.bossMobType,
                  variation: vQ.bossMobVariation,
                  animation: null !== (FQ = Vo(vQ.bossMobType)) && void 0 !== FQ ? FQ : void 0
                })
              }), null === vQ.bossMobType && (0, Iq.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Iq.jsx)(Xq.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !qQ.canNext,
              onClick: oQ.next,
              children: (0, Iq.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Iq.jsx)(Yo.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Iq.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [vQ.beaten && (0, Iq.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), vQ.label]
            }), (0, Iq.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (wQ = vQ.bossName) && void 0 !== wQ ? wQ : "???"
            }), (0, Iq.jsxs)("span", {
              className: cq()("SkyblockBossPickerRecord", {
                Locked: null !== vQ.lockedHint
              }),
              children: [null !== vQ.lockedHintHighlight && (0, Iq.jsxs)(Iq.Fragment, {
                children: [vQ.lockedHintHighlight.before, (0, Iq.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: ho(vQ.lockedHintHighlight.colour),
                  children: [null !== vQ.lockedHintHighlight.icon && (0, Iq.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Iq.jsx)(Wq.e, {
                      itemName: vQ.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), vQ.lockedHintHighlight.name]
                }), vQ.lockedHintHighlight.after]
              }), null === vQ.lockedHintHighlight && (null !== (LQ = vQ.lockedHint) && void 0 !== LQ ? LQ : vQ.summary)]
            })]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: qQ.pages.map((QQ => (0, Iq.jsx)("span", {
              className: cq()("SkyblockBossPickerDot", {
                Current: QQ.current,
                Locked: !QQ.unlocked
              }),
              style: ho(QQ.colour)
            }, QQ.difficulty)))
          }), (0, Iq.jsx)(Xq.s, {
            className: "SkyblockBossPickerFight",
            disabled: !vQ.unlocked,
            onClick: oQ.enter,
            children: DQ("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function no(QQ) {
      let {
        dungeon: FQ,
        select: wQ
      } = QQ;
      return (0, Iq.jsxs)(Xq.f, {
        className: cq()("SkyblockDungeonCard", {
          Selected: FQ.selected
        }),
        onClick: () => {
          wQ(FQ.id)
        },
        children: [(0, Iq.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Iq.jsx)("strong", {
            children: FQ.name
          }), (0, Iq.jsx)("span", {
            children: FQ.beatenSummary
          })]
        }), (0, Iq.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: FQ.difficulties.map((QQ => (0, Iq.jsxs)("span", {
            className: cq()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: QQ.beaten
            }),
            style: ho(QQ.colour),
            title: QQ.summary,
            children: [QQ.beaten && (0, Iq.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), QQ.label]
          }, QQ.difficulty)))
        })]
      })
    }

    function go(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(Yw, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = Vq();
      return wQ.enabled ? (0, Iq.jsxs)(aq.d, {
        show: wQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [wQ.picker && (0, Iq.jsx)(Eo, {
          picker: wQ.picker,
          controller: FQ
        }), !wQ.picker && (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: LQ("skyblockGame:dungeons")
              }), (0, Iq.jsx)("p", {
                children: LQ("skyblockGame:dungeonsIntro")
              })]
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              onClick: FQ.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockDungeonList",
              children: wQ.dungeons.map((QQ => (0, Iq.jsx)(no, {
                dungeon: QQ,
                select: FQ.select
              }, QQ.id)))
            }), wQ.detail && (0, Iq.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Iq.jsx)("h3", {
                children: wQ.detail.name
              }), (0, Iq.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: wQ.detail.difficulties.map((QQ => (0, Iq.jsxs)("li", {
                  className: cq()("SkyblockDungeonRecord", {
                    Beaten: QQ.beaten
                  }),
                  children: [(0, Iq.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: ho(QQ.colour),
                    children: [QQ.beaten && (0, Iq.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), QQ.label]
                  }), (0, Iq.jsx)("span", {
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

    function Po(QQ) {
      let {
        collection: FQ,
        select: wQ
      } = QQ;
      return (0, Iq.jsxs)(Xq.f, {
        className: cq()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: FQ.selected,
          Locked: FQ.locked
        }),
        ariaPressed: FQ.selected,
        onClick: () => {
          wQ(FQ.id)
        },
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Iq.jsx)(Wq.e, {
            itemName: FQ.icon,
            amount: 0
          })
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Iq.jsx)("strong", {
              children: FQ.name
            }), (0, Iq.jsx)("span", {
              children: FQ.tier
            })]
          }), (0, Iq.jsx)(hq, {
            percent: FQ.percent,
            label: `${FQ.name}: ${FQ.progress}`
          }), (0, Iq.jsx)("span", {
            className: "SkyblockSkillXp",
            children: FQ.progress
          })]
        })]
      })
    }

    function Zo(QQ) {
      let {
        collection: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)();
      return (0, Iq.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Iq.jsx)(Wq.e, {
            itemName: FQ.icon,
            amount: 0
          })
        }), (0, Iq.jsx)("h3", {
          children: FQ.name
        }), (0, Iq.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: FQ.tier
        }), (0, Iq.jsx)("p", {
          children: FQ.locked ? wQ("skyblockGame:collectionLocked") : FQ.count
        }), null !== FQ.nextReward && (0, Iq.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Iq.jsx)("strong", {
            children: wQ("skyblockGame:collectionNextReward")
          }), (0, Iq.jsx)("span", {
            children: FQ.nextReward
          })]
        }), (0, Iq.jsx)(hq, {
          percent: FQ.percent,
          label: FQ.progress
        }), (0, Iq.jsx)("p", {
          children: FQ.progress
        })]
      })
    }

    function yo(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(zw, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = Vq();
      return wQ.enabled ? (0, Iq.jsx)(aq.d, {
        show: wQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: LQ("skyblockGame:collections")
              }), (0, Iq.jsxs)("p", {
                children: [LQ("skyblockGame:collectionsIntro"), " ", wQ.tiersUnlocked]
              })]
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              onClick: FQ.dismiss
            })]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: wQ.categories.map((QQ => (0, Iq.jsxs)(Xq.f, {
              className: cq()("SkyblockCollectionCategory", {
                Selected: QQ.selected
              }),
              ariaPressed: QQ.selected,
              padTabSelected: QQ.selected,
              onClick: () => {
                FQ.selectCategory(QQ.id)
              },
              children: [(0, Iq.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Iq.jsx)(Wq.e, {
                  itemName: QQ.icon,
                  amount: 0
                })
              }), (0, Iq.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Iq.jsx)("strong", {
                  children: QQ.label
                }), (0, Iq.jsx)("span", {
                  children: QQ.tiers
                })]
              })]
            }, QQ.id)))
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: wQ.collections.map((QQ => (0, Iq.jsx)(Po, {
                collection: QQ,
                select: FQ.select
              }, QQ.id)))
            }), wQ.detail && (0, Iq.jsx)(Zo, {
              collection: wQ.detail
            })]
          })]
        })
      }) : null
    }
    const Bo = ["completed", "active", "available", "locked"],
      QD = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function FD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(Pw, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = Vq();
      return wQ.enabled ? (0, Iq.jsx)(aq.d, {
        show: wQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: LQ("skyblockDevQuests:title")
              }), (0, Iq.jsx)("p", {
                children: LQ("skyblockDevQuests:intro")
              })]
            }), (0, Iq.jsx)(Xq.j, {
              onClick: FQ.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [Bo.map((QQ => (0, Iq.jsx)("span", {
              className: cq()("SkyblockQuestGraphLegendState", QQ),
              children: LQ(`skyblockDevQuests:state_${QQ}`)
            }, QQ))), QD.map((QQ => (0, Iq.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Iq.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Iq.jsx)("line", {
                  className: cq()("SkyblockQuestGraphEdge", QQ),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), LQ(`skyblockDevQuests:edge_${QQ}`)]
            }, QQ)))]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Iq.jsxs)("div", {
              className: cq()("SkyblockQuestGraphCanvas", {
                Planning: wQ.planning
              }),
              style: {
                width: wQ.width,
                height: wQ.height
              },
              children: [(0, Iq.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: wQ.width,
                height: wQ.height,
                "aria-hidden": "true",
                children: [(0, Iq.jsx)("defs", {
                  children: (0, Iq.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Iq.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), wQ.edges.map((QQ => (0, Iq.jsx)("path", {
                  className: cq()("SkyblockQuestGraphEdge", QQ.kind, {
                    InPlan: QQ.inPlan
                  }),
                  d: QQ.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, QQ.key)))]
              }), wQ.nodes.map((QQ => (0, Iq.jsxs)("button", {
                type: "button",
                className: cq()("SkyblockQuestGraphNode", QQ.state, {
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
                  FQ.hover(QQ.id)
                },
                onMouseLeave: () => {
                  FQ.hover(null)
                },
                onFocus: () => {
                  FQ.hover(QQ.id)
                },
                onBlur: () => {
                  FQ.hover(null)
                },
                onClick: () => {
                  FQ.jump(QQ.id)
                },
                children: [(0, Iq.jsx)("strong", {
                  children: QQ.name
                }), (0, Iq.jsx)("span", {
                  children: QQ.detail
                })]
              }, QQ.id)))]
            })
          })]
        })
      }) : null
    }
    const wD = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      LD = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${vL}ms`,
        "--forge-duration": "2150ms"
      },
      qD = Array.from({
        length: 18
      }, ((QQ, FQ) => ({
        "--ember-left": `${(4+92*(.618034*FQ%1)).toFixed(1)}%`,
        "--ember-size": 3 + FQ % 3 * 2 + "px",
        "--ember-drift": 14 * (FQ % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*FQ%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*FQ%8).toFixed(2)}s`
      })));

    function oD(QQ) {
      if (QQ.style.removeProperty("--part-size"), null === QQ.parentElement || "wrap" === getComputedStyle(QQ.parentElement).flexWrap) return;
      const FQ = [...QQ.children],
        wQ = getComputedStyle(QQ),
        LQ = parseFloat(wQ.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        qQ = (QQ.clientHeight - parseFloat(wQ.rowGap) * (FQ.length - 1)) / FQ.length,
        oQ = FQ.map((QQ => {
          const FQ = getComputedStyle(QQ),
            wQ = QQ.querySelector("h3"),
            oQ = QQ.querySelector(".SkyblockForgeParts");
          if (null === wQ || null === oQ) return LQ;
          const DQ = qQ - parseFloat(FQ.paddingTop) - parseFloat(FQ.paddingBottom) - wQ.offsetHeight - parseFloat(getComputedStyle(wQ).marginBottom),
            kQ = parseFloat(getComputedStyle(oQ).columnGap),
            vQ = oQ.children.length;
          let mQ = 0;
          for (let LQ = 1; LQ <= vQ; LQ++) {
            const QQ = Math.ceil(vQ / LQ);
            mQ = Math.max(mQ, Math.min((oQ.clientWidth - kQ * (LQ - 1)) / LQ, (DQ - kQ * (QQ - 1)) / QQ))
          }
          return mQ
        }));
      QQ.style.setProperty("--part-size", `${Math.floor(Math.max(LQ,Math.min(...oQ)))}px`)
    }

    function DD(QQ) {
      var FQ, wQ, LQ, oQ, DQ;
      let {
        controller: kQ
      } = QQ;
      const vQ = (0, rq.i)(AL, kQ.getSnapshot()),
        {
          t: mQ
        } = (0, sq.y)(),
        uQ = Vq(),
        HQ = function() {
          const QQ = (0, WQ.useRef)(null),
            FQ = (0, WQ.useRef)(null);
          return (0, WQ.useLayoutEffect)((() => {
            null !== QQ.current && oD(QQ.current)
          })), (0, WQ.useCallback)((wQ => {
            var LQ;
            null === (LQ = FQ.current) || void 0 === LQ || LQ.disconnect(), FQ.current = null, QQ.current = wQ, null !== wQ && (FQ.current = new ResizeObserver((() => {
              oD(wQ)
            })), FQ.current.observe(wQ))
          }), [])
        }(),
        bQ = function(QQ) {
          const FQ = (0, WQ.useRef)(null);
          return (0, WQ.useLayoutEffect)((() => {
            const QQ = FQ.current;
            if (null !== QQ) {
              QQ.style.removeProperty("font-size");
              for (let FQ = 1.7; FQ > 1.1 && QQ.scrollWidth > QQ.clientWidth; FQ -= .1) QQ.style.fontSize = FQ - .1 + "rem"
            }
          }), [QQ]), (0, WQ.useCallback)((QQ => {
            FQ.current = QQ
          }), [])
        }(null === (FQ = vQ.preview) || void 0 === FQ ? void 0 : FQ.name),
        YQ = (0, WQ.useRef)(null),
        xQ = (0, WQ.useRef)({}),
        AQ = vQ.forging,
        tQ = null !== (wQ = null === AQ || void 0 === AQ ? void 0 : AQ.preview.tier) && void 0 !== wQ ? wQ : 0,
        eQ = null !== (LQ = null === AQ || void 0 === AQ ? void 0 : AQ.preview.named) && void 0 !== LQ && LQ,
        MQ = (0, WQ.useMemo)((() => {
          return null === AQ ? null : {
            flames: (QQ = tQ, FQ = eQ, Array.from({
              length: 26 + 6 * QQ + (FQ ? 20 : 0)
            }, ((QQ, FQ) => {
              const wQ = FQ < 6,
                LQ = Math.random() * Math.PI * 2,
                qQ = wQ ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                oQ = Math.cos(LQ) * qQ,
                DQ = Math.sin(LQ) * qQ - 2 - 3 * Math.random(),
                kQ = Math.random(),
                [vQ, mQ, uQ] = wQ ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : kQ < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : kQ < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [kQ < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": vQ,
                "--x0": `${(.15*oQ).toFixed(2)}rem`,
                "--y0": `${(.15*DQ).toFixed(2)}rem`,
                "--x": `${oQ.toFixed(2)}rem`,
                "--y": `${DQ.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${mQ.toFixed(2)}rem`,
                "--duration": `${Math.round(uQ)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: HL(tQ, eQ)
          };
          var QQ, FQ
        }), [null === AQ || void 0 === AQ ? void 0 : AQ.id]);
      if (!vQ.enabled) return null;
      const GQ = vQ.preview,
        pQ = vQ.arriving,
        cQ = null !== pQ && !pQ.sameSword,
        CQ = null !== GQ && (0, Iq.jsx)(Wq.e, {
          itemName: GQ.baseSword,
          amount: 0,
          enchantmentTier: GQ.enchantmentTier
        });
      return (0, Iq.jsx)(aq.d, {
        show: vQ.open,
        close: kQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: uQ,
          onKeyDown: fq,
          children: [(0, Iq.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: qD.map(((QQ, FQ) => (0, Iq.jsx)("span", {
              style: QQ
            }, FQ)))
          }), (0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: mQ("skyblockGame:forgeTitle")
              }), (0, Iq.jsx)("p", {
                children: mQ("skyblockGame:forgeIntro")
              })]
            }), (0, Iq.jsx)(Xq.j, {
              onClick: kQ.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Iq.jsx)("div", {
              ref: HQ,
              className: cq()("SkyblockForgeSlots", {
                Locked: null !== AQ
              }),
              children: vQ.slots.map((QQ => (0, Iq.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Iq.jsx)("h3", {
                  children: QQ.label
                }), (0, Iq.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: QQ.parts.map((FQ => (0, Iq.jsx)("button", {
                    type: "button",
                    className: cq()("SkyblockForgePart", {
                      Selected: FQ.selected,
                      Missing: FQ.placeholder
                    }),
                    disabled: FQ.placeholder,
                    title: FQ.placeholder ? mQ("skyblockGame:forgePickParts") : FQ.itemName,
                    "aria-pressed": FQ.selected,
                    onClick: () => {
                      kQ.select(QQ.kind, FQ.material)
                    },
                    children: (0, Iq.jsx)(Wq.e, {
                      itemName: FQ.itemName,
                      amount: FQ.owned
                    })
                  }, FQ.material)))
                })]
              }, QQ.kind)))
            }), (0, Iq.jsxs)("div", {
              className: cq()("SkyblockForgeAnvil", {
                Named: null === GQ || void 0 === GQ ? void 0 : GQ.named
              }),
              style: {
                "--tier": null === GQ ? "transparent" : qQ.pb[GQ.enchantmentTier]
              },
              children: [(0, Iq.jsxs)("div", {
                className: cq()("SkyblockForgeAltar", {
                  Forging: null !== AQ
                }),
                style: null === AQ ? void 0 : LD,
                children: [(0, Iq.jsxs)("div", {
                  className: cq()("SkyblockForgeMount", {
                    Arrive: null !== pQ
                  }),
                  children: [null === GQ && (0, Iq.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Iq.jsx)(Wq.e, {
                      itemName: vQ.unformedSword,
                      amount: 0
                    })
                  }), null !== GQ && (0, Iq.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== GQ && null === AQ && (0, Iq.jsx)("div", {
                    ref: YQ,
                    className: "SkyblockForgeFloat",
                    children: (0, Iq.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: CQ
                    })
                  }), null !== GQ && (0, Iq.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: uL.map(((QQ, FQ) => (0, Iq.jsx)("span", {
                      className: cq()({
                        Rune: "" !== QQ.rune
                      }),
                      style: QQ.style,
                      children: QQ.rune
                    }, FQ)))
                  }), null !== AQ && null !== MQ && (0, Iq.jsxs)(Iq.Fragment, {
                    children: [(0, Iq.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: MQ.flames.map(((QQ, FQ) => (0, Iq.jsx)("span", {
                        style: QQ
                      }, FQ)))
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: xQ.current,
                      children: (0, Iq.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: CQ
                      })
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (tQ >= 4 || eQ) && (0, Iq.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: MQ.sparks.map(((QQ, FQ) => (0, Iq.jsx)("span", {
                        style: QQ
                      }, FQ)))
                    }), (0, Iq.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Iq.jsx)("p", {
                  className: cq()("SkyblockForgeStatus", null === (oQ = vQ.status) || void 0 === oQ ? void 0 : oQ.tone),
                  children: null === (DQ = vQ.status) || void 0 === DQ ? void 0 : DQ.text
                })]
              }), null === GQ && (0, Iq.jsx)("p", {
                className: cq()("SkyblockForgeName Waiting", {
                  ArriveText: cQ
                }),
                children: mQ(vQ.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== GQ && (0, Iq.jsx)("h3", {
                ref: bQ,
                className: cq()("SkyblockForgeName", {
                  ArriveText: cQ
                }),
                title: GQ.name,
                children: GQ.name
              }), (null === GQ || void 0 === GQ ? void 0 : GQ.named) && (0, Iq.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: mQ("skyblockGame:forgeSecret")
              }), (0, Iq.jsxs)(Xq.s, {
                className: "SkyblockForgeButton",
                disabled: !vQ.canForge,
                title: null === GQ ? void 0 : mQ("skyblockGame:forgeCoalOwned", {
                  owned: String(vQ.coalOwned)
                }),
                onClick: () => {
                  xQ.current = function(QQ) {
                    const FQ = null === QQ ? "none" : getComputedStyle(QQ).transform,
                      wQ = new DOMMatrixReadOnly("none" === FQ ? void 0 : FQ);
                    return {
                      "--settle-y": `${wQ.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(wQ.b,wQ.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(YQ.current), xL(), kQ.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [mQ("skyblockGame:forgeButton"), null !== GQ && (0, Iq.jsxs)("span", {
                  className: cq()("SkyblockForgeCost", {
                    Short: GQ.coalShort
                  }),
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Iq.jsx)(Wq.e, {
                      itemName: QL.e,
                      amount: 0
                    })
                  }), GQ.coalCost]
                })]
              })]
            }), (0, Iq.jsxs)("div", {
              className: cq()("SkyblockForgeDetails", {
                Named: null === GQ || void 0 === GQ ? void 0 : GQ.named
              }),
              children: [(0, Iq.jsx)("p", {
                className: cq()("SkyblockForgeLore", {
                  ArriveText: cQ
                }),
                title: null === GQ || void 0 === GQ ? void 0 : GQ.lore,
                children: null === GQ || void 0 === GQ ? void 0 : GQ.lore
              }), (0, Iq.jsxs)("dl", {
                className: cq()("SkyblockForgeStats", {
                  ArriveText: cQ
                }),
                children: [null === GQ && wD.map((QQ => (0, Iq.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Iq.jsx)("dt", {
                    children: mQ(QQ)
                  }), (0, Iq.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, QQ))), null === GQ || void 0 === GQ ? void 0 : GQ.stats.map((QQ => (0, Iq.jsxs)("div", {
                  className: cq()("SkyblockForgeStat", {
                    Better: QQ.better
                  }),
                  children: [(0, Iq.jsx)("dt", {
                    children: QQ.label
                  }), (0, Iq.jsx)("dd", {
                    children: QQ.value
                  })]
                }, QQ.label)))]
              }), (0, Iq.jsx)("ul", {
                className: cq()("SkyblockForgeEffects", {
                  ArriveText: cQ
                }),
                children: null === GQ || void 0 === GQ ? void 0 : GQ.effects.map((QQ => (0, Iq.jsx)("li", {
                  children: QQ
                }, QQ)))
              })]
            })]
          })]
        })
      })
    }
    const kD = "Doom Rivet",
      vD = "Doom Crest";

    function mD(QQ) {
      let {
        itemName: FQ,
        amount: wQ,
        owned: LQ
      } = QQ;
      return (0, Iq.jsxs)("span", {
        className: cq()("SkyblockSmugglerPrice", {
          Short: wQ > LQ
        }),
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Iq.jsx)(Wq.e, {
            itemName: FQ,
            amount: 0
          })
        }), (0, Iq.jsx)("span", {
          children: wQ
        })]
      })
    }

    function uD(QQ) {
      return QQ.justBought ? "skyblockGame:smugglerJustBought" : QQ.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function HD(QQ) {
      let {
        deal: FQ,
        view: wQ,
        buy: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, sq.y)();
      return (0, Iq.jsxs)("div", {
        className: cq()("SkyblockSmugglerPocket", {
          Bought: FQ.justBought,
          Unaffordable: !FQ.affordable,
          SoldOut: FQ.soldOut && !FQ.justBought
        }),
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Iq.jsx)(Wq.e, {
            itemName: FQ.itemName,
            amount: 0,
            enchantmentTier: FQ.enchantmentTier
          }), FQ.amount > 1 && (0, Iq.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: qQ("skyblockGame:smugglerAmount", {
              amount: FQ.amount
            })
          })]
        }), (0, Iq.jsx)("h3", {
          children: FQ.displayName
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [FQ.rivets > 0 && (0, Iq.jsx)(mD, {
              itemName: kD,
              amount: FQ.rivets,
              owned: wQ.rivetsOwned
            }), FQ.crests > 0 && (0, Iq.jsx)(mD, {
              itemName: vD,
              amount: FQ.crests,
              owned: wQ.crestsOwned
            })]
          }), (0, Iq.jsx)(Xq.f, {
            className: "SkyblockSmugglerBuy",
            disabled: FQ.soldOut || !FQ.affordable || wQ.pending,
            onClick: () => {
              LQ(FQ.slot)
            },
            children: qQ(uD(FQ))
          })]
        })]
      }, FQ.justBought ? wQ.boughtCount : 0)
    }

    function bD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(ML, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = Vq();
      return wQ.enabled ? (0, Iq.jsx)(aq.d, {
        show: wQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: fq,
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Iq.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Iq.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: LQ("skyblockGame:smugglerTitle")
              }), (0, Iq.jsx)("p", {
                children: LQ("skyblockGame:smugglerIntro")
              })]
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Iq.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Iq.jsx)(mD, {
                  itemName: kD,
                  amount: wQ.rivetsOwned,
                  owned: wQ.rivetsOwned
                }), (0, Iq.jsx)(mD, {
                  itemName: vD,
                  amount: wQ.crestsOwned,
                  owned: wQ.crestsOwned
                })]
              }), (0, Iq.jsx)(Xq.j, {
                onClick: FQ.dismiss
              })]
            })]
          }), (0, Iq.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: wQ.deals.map((QQ => (0, Iq.jsx)(HD, {
              deal: QQ,
              view: wQ,
              buy: FQ.buy
            }, QQ.slot)))
          }), (0, Iq.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: wQ.rotatesText
            }), null !== wQ.status && (0, Iq.jsx)("span", {
              className: cq()("SkyblockSmugglerStatus", wQ.status.tone),
              children: wQ.status.text
            })]
          })]
        })
      }) : null
    }

    function YD(QQ) {
      let {
        phase: FQ,
        className: wQ
      } = QQ;
      return (0, Iq.jsx)("span", {
        className: cq()("SkyblockMoon", `Moon-${FQ}`, wQ),
        "aria-hidden": "true"
      })
    }

    function xD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(cL, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)();
      return wQ.enabled ? (0, Iq.jsx)(Sq.d, {
        placement: "statBars",
        children: (0, Iq.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: cq()("SkyblockPassageChip", wQ.open && "Open"),
          "aria-label": LQ("skyblockGame:passageChipLabel", {
            phase: wQ.phaseName
          }),
          title: LQ("skyblockGame:passageChipLabel", {
            phase: wQ.phaseName
          }),
          onMouseDown: QQ => {
            QQ.preventDefault()
          },
          onClick: FQ.toggle,
          children: (0, Iq.jsx)(YD, {
            phase: wQ.phase
          }, wQ.phase)
        })
      }) : null
    }

    function AD(QQ) {
      let {
        fish: FQ
      } = QQ;
      return (0, Iq.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Iq.jsx)(Wq.e, {
            itemName: FQ.itemName,
            amount: 0
          })
        }), (0, Iq.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: FQ.displayName
          }), (0, Iq.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: FQ.where
          })]
        })]
      })
    }

    function tD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(cL, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = Vq();
      return wQ.enabled ? (0, Iq.jsx)(aq.d, {
        show: wQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Iq.jsx)(YD, {
              phase: wQ.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: LQ("skyblockGame:passageTitle")
              }), (0, Iq.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: wQ.phaseName
              })]
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              onClick: FQ.dismiss
            })]
          }), (0, Iq.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: LQ("skyblockGame:passageIntro")
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Iq.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Iq.jsx)("h3", {
                children: LQ("skyblockGame:passageVisiting")
              }), (0, Iq.jsx)("ul", {
                className: "SkyblockPassageList",
                children: wQ.visitors.map((QQ => (0, Iq.jsx)(AD, {
                  fish: QQ
                }, QQ.itemName)))
              })]
            }), (0, Iq.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== wQ.resting && (0, Iq.jsxs)(Iq.Fragment, {
                children: [(0, Iq.jsx)("h3", {
                  children: LQ("skyblockGame:passageResting")
                }), (0, Iq.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Iq.jsx)(AD, {
                    fish: wQ.resting
                  })
                })]
              }), (0, Iq.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Iq.jsx)(YD, {
                  phase: wQ.nextPhase
                }), (0, Iq.jsx)("span", {
                  children: wQ.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function eD() {
      return (0, Iq.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((QQ => (0, Iq.jsx)("i", {
          style: {
            "--sparkle-index": QQ
          }
        }, QQ)))
      })
    }

    function MD(QQ) {
      var FQ;
      let {
        charm: wQ,
        view: LQ,
        controller: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, sq.y)(), DQ = LQ.shop, kQ = (null === (FQ = LQ.sparkle) || void 0 === FQ ? void 0 : FQ.id) === wQ.id;
      return (0, Iq.jsxs)("li", {
        className: cq()("SkyblockLampLightCharm", wQ.owned && "Owned", wQ.socketed && "Socketed"),
        children: [kQ && (0, Iq.jsx)(eD, {}, LQ.sparkle.count), (0, Iq.jsx)("h4", {
          children: wQ.name
        }), (0, Iq.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: wQ.effect
        }), (0, Iq.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: wQ.lines.map((QQ => (0, Iq.jsxs)("li", {
            className: cq()("SkyblockLampLightOddsLine", "better" === QQ.tone ? "Better" : "worse" === QQ.tone ? "Worse" : "Same"),
            children: [(0, Iq.jsx)("span", {
              className: "Before",
              children: QQ.before
            }), (0, Iq.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Iq.jsx)("span", {
              className: "After",
              children: QQ.after
            })]
          }, QQ.label)))
        }), (0, Iq.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: wQ.owned ? wQ.socketed ? (0, Iq.jsxs)(Iq.Fragment, {
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: oQ("skyblockGame:lampLightSocketed")
            }), (0, Iq.jsx)(Xq.L, {
              disabled: !LQ.canCommand,
              ariaLabel: oQ("skyblockGame:lampLightRemoveLabel", {
                charm: wQ.name
              }),
              onClick: () => {
                qQ.socket(null)
              },
              children: oQ("skyblockGame:lampLightRemove")
            })]
          }) : (0, Iq.jsx)(Xq.f, {
            disabled: !LQ.canCommand || !DQ.heldRod,
            ariaLabel: oQ("skyblockGame:lampLightSocketLabel", {
              charm: wQ.name
            }),
            onClick: () => {
              qQ.socket(wQ.id)
            },
            children: oQ("skyblockGame:lampLightSocket")
          }) : (0, Iq.jsx)(Xq.f, {
            disabled: !LQ.canCommand || !wQ.affordable,
            ariaLabel: oQ("skyblockGame:lampLightBuyLabel", {
              item: wQ.name,
              cost: wQ.cost
            }),
            onClick: () => {
              qQ.buy(wQ.id)
            },
            children: wQ.cost
          })
        })]
      })
    }

    function GD(QQ) {
      var FQ;
      let {
        tint: wQ,
        view: LQ,
        controller: qQ
      } = QQ;
      const {
        t: oQ
      } = (0, sq.y)();
      return (0, Iq.jsxs)("li", {
        className: cq()("SkyblockLampLightTint", wQ.wearing && "Wearing"),
        style: {
          "--tint-colour": wQ.colour
        },
        children: [(null === (FQ = LQ.sparkle) || void 0 === FQ ? void 0 : FQ.id) === wQ.id && (0, Iq.jsx)(eD, {}, LQ.sparkle.count), (0, Iq.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Iq.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: wQ.name
        }), wQ.wearing ? (0, Iq.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: oQ("skyblockGame:lampLightWearing")
        }) : (0, Iq.jsx)(Xq.f, {
          disabled: !LQ.canCommand || !wQ.owned && !wQ.affordable,
          ariaLabel: wQ.owned ? oQ("skyblockGame:lampLightWearLabel", {
            tint: wQ.name
          }) : oQ("skyblockGame:lampLightBuyLabel", {
            item: wQ.name,
            cost: wQ.cost
          }),
          onClick: () => {
            wQ.owned ? qQ.wearTint(wQ.id) : qQ.buy(wQ.id)
          },
          children: wQ.owned ? oQ("skyblockGame:lampLightWear") : wQ.cost
        })]
      })
    }

    function pD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(zL, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = wQ.shop;
      return (0, Iq.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Iq.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: wQ.balance
          }), (0, Iq.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": wQ.releasing,
            className: cq()("SkyblockLampLightSwitch", wQ.releasing && "On"),
            disabled: wQ.releasing ? "ready" !== wQ.status : !wQ.canCommand,
            onClick: () => {
              FQ.setRelease(!wQ.releasing)
            },
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Iq.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), LQ("skyblockGame:lampLightRelease")]
          }), (0, Iq.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: LQ("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== wQ.notice && (0, Iq.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: wQ.notice
        }), null !== qQ && (0, Iq.jsxs)(Iq.Fragment, {
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Iq.jsx)("h3", {
              children: LQ("skyblockGame:lampLightCharms")
            }), (0, Iq.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: qQ.oddsFor
            }), (0, Iq.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((QQ => (0, Iq.jsx)("button", {
                type: "button",
                "aria-pressed": wQ.situation === QQ,
                className: cq()("SkyblockLampLightSituation", wQ.situation === QQ && "Selected"),
                onClick: () => {
                  FQ.setSituation(QQ)
                },
                children: LQ("open" === QQ ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, QQ)))
            })]
          }), !qQ.heldRod && (0, Iq.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: LQ("skyblockGame:lampLightHoldRod")
          }), (0, Iq.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: qQ.charms.map((QQ => (0, Iq.jsx)(MD, {
              charm: QQ,
              view: wQ,
              controller: FQ
            }, QQ.id)))
          }), (0, Iq.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Iq.jsx)("h3", {
              children: LQ("skyblockGame:lampLightTints")
            })
          }), (0, Iq.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Iq.jsxs)("li", {
              className: cq()("SkyblockLampLightTint", "Islands", qQ.wearingIslandColours && "Wearing"),
              children: [(0, Iq.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Iq.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: LQ("skyblockGame:lampLightIslandColours")
              }), qQ.wearingIslandColours ? (0, Iq.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: LQ("skyblockGame:lampLightWearing")
              }) : (0, Iq.jsx)(Xq.f, {
                disabled: !wQ.canCommand,
                ariaLabel: LQ("skyblockGame:lampLightWearLabel", {
                  tint: LQ("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  FQ.wearTint(null)
                },
                children: LQ("skyblockGame:lampLightWear")
              })]
            }), qQ.tints.map((QQ => (0, Iq.jsx)(GD, {
              tint: QQ,
              view: wQ,
              controller: FQ
            }, QQ.id)))]
          })]
        })]
      })
    }

    function cD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(zL, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)();
      return wQ.releasing ? (0, Iq.jsx)(Sq.d, {
        children: (0, Iq.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            FQ.setRelease(!1)
          },
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Iq.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [LQ("skyblockGame:lampLightReleasing"), " \xb7 ", wQ.balance]
          }), (0, Iq.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: LQ("skyblockGame:lampLightKeepCatches")
          }), null !== wQ.gained && (0, Iq.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: wQ.gained.text
          }, wQ.gained.count)]
        })
      }) : null
    }

    function CD(QQ) {
      let {
        island: FQ,
        view: wQ,
        aim: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, sq.y)(), oQ = FQ.featuredFish;
      return (0, Iq.jsxs)("li", {
        className: cq()("SkyblockKeepersChairIsland", `Island-${FQ.id}`, FQ.favoured && "Aimed", !FQ.relit && "Dark"),
        children: [(0, Iq.jsx)("h3", {
          children: FQ.name
        }), FQ.relit && null !== oQ ? (0, Iq.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: qQ("skyblockGame:keepersChairTideNotice")
          }), (0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Iq.jsx)(Wq.e, {
              itemName: oQ.itemName,
              amount: 0
            })
          }), (0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: oQ.displayName
          })]
        }) : (0, Iq.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: qQ("skyblockGame:keepersChairDark")
          })
        }), FQ.relit && (FQ.favoured ? (0, Iq.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: qQ("skyblockGame:keepersChairAimed")
        }) : (0, Iq.jsx)(Xq.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !wQ.canAim,
          ariaLabel: qQ("skyblockGame:keepersChairAimLabel", {
            island: FQ.name
          }),
          onClick: () => {
            LQ(FQ.id)
          },
          children: qQ("skyblockGame:keepersChairAim")
        }))]
      }, FQ.favoured ? wQ.aimedCount : 0)
    }

    function SD(QQ) {
      let {
        controller: FQ,
        lampLight: wQ
      } = QQ;
      const LQ = (0, rq.i)(OL, FQ.getSnapshot()),
        qQ = (0, rq.i)(zL, wQ.getSnapshot()),
        [oQ, DQ] = (0, WQ.useState)("lamp"),
        {
          t: kQ
        } = (0, sq.y)(),
        vQ = Vq();
      if (!LQ.enabled) return null;
      const mQ = "light" === oQ && qQ.enabled;
      return (0, Iq.jsx)(aq.d, {
        show: LQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: cq()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", mQ && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: vQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: kQ("skyblockGame:keepersChairTitle")
              }), (0, Iq.jsx)("p", {
                children: kQ(mQ ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              ariaLabel: kQ("skyblockGame:keepersChairClose"),
              onClick: FQ.dismiss
            })]
          }), qQ.enabled && (0, Iq.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((QQ => (0, Iq.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === QQ === mQ,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === QQ === mQ ? "true" : void 0,
              className: cq()("SkyblockKeepersChairTab", "light" === QQ === mQ && "Selected"),
              onClick: () => {
                DQ(QQ)
              },
              children: [kQ("lamp" === QQ ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === QQ && (0, Iq.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: qQ.balance
              })]
            }, QQ)))
          }), mQ ? (0, Iq.jsx)(pD, {
            controller: wQ
          }) : (0, Iq.jsx)(iD, {
            view: LQ,
            controller: FQ
          })]
        })
      })
    }

    function iD(QQ) {
      let {
        view: FQ,
        controller: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, sq.y)();
      return (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: FQ.islands.map((QQ => (0, Iq.jsx)(CD, {
            island: QQ,
            view: FQ,
            aim: wQ.aim
          }, QQ.id)))
        }), null !== FQ.almanac && (0, Iq.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: LQ("skyblockGame:passageTitle")
          }), (0, Iq.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Iq.jsx)(YD, {
              phase: FQ.almanac.phase
            }), FQ.almanac.phaseName]
          }), (0, Iq.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Iq.jsx)(YD, {
              phase: FQ.almanac.nextPhase
            }), FQ.almanac.next]
          })]
        }), (0, Iq.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: LQ("skyblockGame:keepersChairFavour")
          }), FQ.aimed && (0, Iq.jsx)(Xq.L, {
            className: "SkyblockKeepersChairRest",
            disabled: !FQ.canAim,
            onClick: () => {
              wQ.aim(null)
            },
            children: LQ("skyblockGame:keepersChairRest")
          })]
        }), null !== FQ.status && (0, Iq.jsx)("p", {
          className: cq()("SkyblockKeepersChairStatus", "refused" === FQ.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: FQ.status.text
        })]
      })
    }

    function WD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)(), LQ = (0, rq.i)(rL, FQ.getSnapshot());
      if (!LQ.enabled) return null;
      const qQ = LQ.freshCount > 0 ? wQ("skyblockGame:reachLogOpenNews", {
        count: LQ.freshCount
      }) : wQ("skyblockGame:reachLogOpen");
      return (0, Iq.jsx)(Sq.d, {
        placement: "statBars",
        children: (0, Iq.jsxs)("button", {
          type: "button",
          className: cq()("SkyblockReachLogButton", LQ.freshCount > 0 && "HasNews", LQ.pending && "Pending"),
          "aria-label": qQ,
          title: qQ,
          onClick: FQ.ask,
          children: [LQ.news && (0, Iq.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${LQ.newsToken}`), (0, Iq.jsx)("span", {
            className: cq()("SkyblockReachLogIcon", LQ.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Iq.jsx)(Wq.e, {
              itemName: UL,
              amount: 0
            })
          }, `icon:${LQ.newsToken}`), LQ.freshCount > 0 && (0, Iq.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: LQ.freshCount
          })]
        })
      })
    }

    function RD(QQ) {
      let {
        gift: FQ
      } = QQ;
      return (0, Iq.jsx)("li", {
        className: cq()("SkyblockRegularsGift", FQ.given && "Given"),
        children: FQ.text
      })
    }

    function OD(QQ) {
      let {
        regular: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)();
      return (0, Iq.jsxs)("li", {
        className: cq()("SkyblockRegularsCard", FQ.tagged ? "Tagged" : "Untagged", FQ.resting && "Resting"),
        children: [(0, Iq.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: FQ.fishName,
            children: (0, Iq.jsx)(Wq.e, {
              itemName: FQ.itemName,
              amount: 0
            })
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Iq.jsx)("h3", {
              children: FQ.name
            }), (0, Iq.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: FQ.fishName
            })]
          })]
        }), (0, Iq.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: FQ.line
        }), (0, Iq.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: FQ.size
          }), FQ.tagged && (0, Iq.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: FQ.resting ? wQ("skyblockGame:regularsResting") : FQ.meetings
          })]
        }), (0, Iq.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: FQ.chance
        }), (0, Iq.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: FQ.gifts.map((QQ => (0, Iq.jsx)(RD, {
            gift: QQ
          }, QQ.text)))
        }), FQ.history.length > 0 && (0, Iq.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: FQ.history.map(((QQ, FQ) => (0, Iq.jsx)("li", {
            children: QQ
          }, FQ)))
        })]
      })
    }

    function sD(QQ) {
      let {
        controller: FQ,
        island: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, sq.y)(), qQ = (0, rq.i)(Fq, FQ.getSnapshot()), oQ = qQ.islands.find((QQ => QQ.id === wQ));
      if (!qQ.enabled || void 0 === oQ) return null;
      const DQ = LQ("skyblockGame:regularsOpen");
      return (0, Iq.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": DQ,
        title: DQ,
        onClick: () => {
          FQ.openIsland(wQ)
        },
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: LQ("skyblockGame:regularsTitle")
        }), oQ.regulars.map((QQ => (0, Iq.jsx)("span", {
          className: cq()("SkyblockRegularsStripIcon", QQ.tagged && "Tagged"),
          title: QQ.name,
          children: (0, Iq.jsx)(Wq.e, {
            itemName: QQ.itemName,
            amount: 0
          })
        }, QQ.id)))]
      })
    }

    function rD(QQ) {
      var FQ;
      let {
        controller: wQ
      } = QQ;
      const LQ = (0, rq.i)(Fq, wQ.getSnapshot()),
        {
          t: qQ
        } = (0, sq.y)(),
        oQ = Vq();
      if (!LQ.enabled) return null;
      const DQ = null !== (FQ = LQ.islands.find((QQ => QQ.id === LQ.selected))) && void 0 !== FQ ? FQ : null;
      return (0, Iq.jsx)(aq.d, {
        show: LQ.open,
        close: wQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: oQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: qQ("skyblockGame:regularsTitle")
              }), (0, Iq.jsx)("p", {
                children: qQ("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              onClick: wQ.dismiss
            })]
          }), (0, Iq.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: LQ.islands.map((QQ => {
              const FQ = QQ.id === LQ.selected;
              return (0, Iq.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": FQ,
                "data-pad-tab": !0,
                "data-pad-selected": FQ ? "true" : void 0,
                className: cq()("SkyblockReachLogTab", `Island-${QQ.id}`, FQ && "Selected", QQ.charm.given && "GoldPage"),
                onClick: () => {
                  wQ.selectIsland(QQ.id)
                },
                children: (0, Iq.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: QQ.name
                })
              }, QQ.id)
            }))
          }), (0, Iq.jsxs)("div", {
            className: cq()("SkyblockRegularsPage", null !== DQ && `Island-${DQ.id}`),
            role: "tabpanel",
            children: [(0, Iq.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: qQ("skyblockGame:regularsHow")
            }), null !== DQ && (0, Iq.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: DQ.regulars.map((QQ => (0, Iq.jsx)(OD, {
                regular: QQ
              }, QQ.id)))
            })]
          }), null !== DQ && (0, Iq.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Iq.jsx)("span", {
              className: cq()("SkyblockRegularsCharm", DQ.charm.given && "Given"),
              children: DQ.charm.text
            })
          })]
        })
      })
    }
    const ID = [{
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
      UD = Array.from({
        length: 6
      }, ((QQ, FQ) => ({
        "--x": `${(88*(.618034*FQ%1)).toFixed(1)}%`,
        "--y": `${(10+37*FQ%70).toFixed(1)}%`,
        "--size": 7 + FQ % 3 * 3 + "rem",
        "--drift-x": 3 * (FQ % 3 - 1) + "rem",
        "--drift-y": 2 * (FQ % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + FQ % 4 * 3 + "s",
        "--delay": 2.5 * -FQ + "s"
      }))),
      ND = Array.from({
        length: 14
      }, ((QQ, FQ) => ({
        "--left": `${(3+94*((.618034*FQ+.3)%1)).toFixed(1)}%`,
        "--size": 4 + FQ % 4 * 2 + "px",
        "--sway": FQ % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*FQ%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*FQ%12).toFixed(2)}s`
      }))),
      TD = (0, WQ.memo)((function(QQ) {
        let {
          island: FQ
        } = QQ;
        return (0, Iq.jsxs)("div", {
          className: cq()("SkyblockReachLogDepths", null !== FQ && `Island-${FQ}`),
          "aria-hidden": "true",
          children: [ID.map(((QQ, FQ) => (0, Iq.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: QQ
          }, `shaft${FQ}`))), UD.map(((QQ, FQ) => (0, Iq.jsx)("span", {
            className: cq()("SkyblockReachLogMote", FQ % 2 === 1 && "Violet"),
            style: QQ
          }, `mote${FQ}`))), ND.map(((QQ, FQ) => (0, Iq.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: QQ
          }, `bubble${FQ}`)))]
        })
      })),
      KD = 100;

    function zD(QQ) {
      let {
        view: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)();
      if (null === FQ || 0 === FQ.total) return null;
      const LQ = KD * FQ.aspect,
        qQ = wQ("skyblockGame:hiddenWatersCount", {
          found: FQ.found,
          total: FQ.total
        });
      return (0, Iq.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${wQ("skyblockGame:hiddenWatersTitle")}: ${qQ}`,
        children: [(0, Iq.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${LQ}`,
          "aria-hidden": "true",
          children: [FQ.islands.map(((QQ, FQ) => (0, Iq.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (QQ.left + QQ.width / 2) * KD,
            cy: (QQ.top + QQ.height / 2) * LQ,
            rx: QQ.width / 2 * KD,
            ry: QQ.height / 2 * LQ
          }, FQ))), FQ.pins.map(((QQ, FQ) => (0, Iq.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: QQ.left * KD,
            cy: QQ.top * LQ,
            r: 13
          }, FQ)))]
        }), (0, Iq.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: wQ("skyblockGame:hiddenWatersTitle")
          }), (0, Iq.jsx)("span", {
            className: FQ.found === FQ.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: qQ
          })]
        })]
      })
    }

    function lD(QQ) {
      let {
        view: FQ,
        island: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, sq.y)(), qQ = null === FQ || void 0 === FQ ? void 0 : FQ.glimpses.get(wQ);
      return void 0 === qQ || 0 === qQ.length ? null : (0, Iq.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: LQ("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Iq.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: qQ.map((QQ => (0, Iq.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Iq.jsx)(Wq.e, {
              itemName: QQ,
              amount: 0
            })
          }, QQ)))
        })]
      })
    }
    const jD = ["Bronze", "Silver", "Gold"],
      aD = [{
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
      XD = aD.slice(0, 2);

    function fD(QQ) {
      return QQ ? aD : XD
    }

    function VD(QQ) {
      let {
        fish: FQ,
        letGoShown: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, sq.y)();
      return (0, Iq.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [jD.map(((QQ, wQ) => {
          const qQ = wQ < FQ.marks;
          return (0, Iq.jsx)("span", {
            className: cq()("SkyblockReachLogPip", QQ, qQ && "Earned", qQ && FQ.fresh && wQ === FQ.marks - 1 && "Newest"),
            title: LQ(IL[wQ])
          }, QQ)
        })), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), fD(wQ).map(((QQ, wQ) => (0, Iq.jsx)("span", {
          className: cq()("SkyblockReachLogRibbon", QQ.className, !0 === FQ.ribbons[wQ] && "Earned"),
          title: LQ(QQ.titleKey)
        }, QQ.className)))]
      })
    }

    function hD(QQ) {
      let {
        letGoShown: FQ,
        haloShown: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, sq.y)();
      return (0, Iq.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Iq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: LQ("skyblockGame:reachLogMarks"),
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), LQ("skyblockGame:reachLogLegendMarks")]
        }), fD(FQ).map((QQ => (0, Iq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: LQ(QQ.titleKey),
          children: [(0, Iq.jsx)("span", {
            className: cq()("SkyblockReachLogRibbon", QQ.className, "Earned")
          }), LQ(QQ.legendKey)]
        }, QQ.className))), (0, Iq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: LQ("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), LQ("skyblockGame:reachLogLegendGlimmer")]
        }), wQ && (0, Iq.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: LQ("skyblockGame:reachLogHaloTitle"),
          children: [(0, Iq.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), LQ("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function JD(QQ) {
      let {
        returner: FQ
      } = QQ;
      return (0, Iq.jsxs)("div", {
        className: cq()("SkyblockReachLogReturner", FQ.back && "Back"),
        children: [(0, Iq.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Iq.jsx)(Wq.e, {
            itemName: FQ.itemName,
            amount: 0
          })
        }), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: FQ.line
        })]
      })
    }

    function ED(QQ) {
      let {
        fish: FQ,
        letGoShown: wQ
      } = QQ;
      const {
        t: LQ
      } = (0, sq.y)();
      return (0, Iq.jsxs)("li", {
        className: cq()("SkyblockReachLogCard", FQ.caught ? "Caught" : "Unknown", FQ.marks >= 3 && "GoldCard", FQ.fresh && "Fresh", FQ.visitor && "Visitor"),
        children: [FQ.visitor && (0, Iq.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: LQ("skyblockGame:reachLogVisitor")
        }), FQ.fresh && Array.from({
          length: 4
        }, ((QQ, FQ) => (0, Iq.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, FQ))), (0, Iq.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [FQ.halo && (0, Iq.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: LQ("skyblockGame:reachLogHaloTitle")
          }), (0, Iq.jsx)(Wq.e, {
            itemName: FQ.itemName,
            amount: 0
          }), FQ.glimmer && (0, Iq.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: LQ("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: FQ.name
        }), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: FQ.chance
        }), (0, Iq.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: FQ.best
        }), (0, Iq.jsx)(VD, {
          fish: FQ,
          letGoShown: wQ
        })]
      })
    }

    function nD(QQ) {
      let {
        page: FQ,
        letGoShown: wQ,
        hiddenWaters: LQ
      } = QQ;
      const {
        t: qQ
      } = (0, sq.y)();
      return FQ.awake ? (0, Iq.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: FQ.fish.map((QQ => (0, Iq.jsx)(ED, {
          fish: QQ,
          letGoShown: wQ
        }, QQ.itemName)))
      }) : (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: qQ("skyblockGame:reachLogAsleep")
        }), (0, Iq.jsx)(lD, {
          view: LQ,
          island: FQ.id
        })]
      })
    }

    function gD(QQ) {
      var FQ, wQ;
      let {
        controller: LQ,
        regulars: qQ,
        hiddenWaters: oQ
      } = QQ;
      const DQ = (0, rq.i)(rL, LQ.getSnapshot()),
        kQ = function(QQ) {
          return (0, rq.i)(Dq, QQ.getSnapshot())
        }(oQ),
        vQ = (0, rq.i)(Fq, qQ.getSnapshot()),
        {
          t: mQ
        } = (0, sq.y)(),
        uQ = Vq();
      if (!DQ.enabled) return null;
      const HQ = null !== (FQ = DQ.pages.find((QQ => QQ.id === DQ.selected))) && void 0 !== FQ ? FQ : null;
      return (0, Iq.jsx)(aq.d, {
        show: DQ.open,
        close: LQ.dismiss,
        togglePointerLock: !1,
        className: cq()("SkyblockSkillsOverlay", vQ.open && "SkyblockReachLogUnderLedger"),
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: uQ,
          onKeyDown: fq,
          children: [(0, Iq.jsx)(TD, {
            island: null !== (wQ = null === HQ || void 0 === HQ ? void 0 : HQ.id) && void 0 !== wQ ? wQ : null
          }), (0, Iq.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: mQ("skyblockGame:reachLogTitle")
              }), (0, Iq.jsx)("p", {
                children: mQ("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Iq.jsx)(zD, {
              view: kQ
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              onClick: LQ.dismiss
            })]
          }), (0, Iq.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: DQ.pages.map((QQ => {
              const FQ = QQ.id === DQ.selected,
                wQ = QQ.fish.some((QQ => QQ.fresh));
              return (0, Iq.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": FQ,
                "data-pad-tab": !0,
                "data-pad-selected": FQ ? "true" : void 0,
                className: cq()("SkyblockReachLogTab", `Island-${QQ.id}`, FQ && "Selected", !QQ.awake && "Asleep", QQ.gold && "GoldPage", wQ && "HasNews"),
                onClick: () => {
                  LQ.selectPage(QQ.id)
                },
                children: [(0, Iq.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: QQ.name
                }), QQ.awake && (0, Iq.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: mQ("skyblockGame:reachLogCaughtCount", {
                    caught: QQ.caught,
                    total: QQ.total
                  })
                })]
              }, QQ.id)
            }))
          }), (0, Iq.jsxs)("div", {
            className: cq()("SkyblockReachLogPage", null !== HQ && `Island-${HQ.id}`),
            role: "tabpanel",
            children: [null !== HQ && (0, Iq.jsx)(nD, {
              page: HQ,
              letGoShown: DQ.letGoShown,
              hiddenWaters: kQ
            }), !0 === (null === HQ || void 0 === HQ ? void 0 : HQ.awake) && null !== HQ.returner && (0, Iq.jsx)(JD, {
              returner: HQ.returner
            }), !0 === (null === HQ || void 0 === HQ ? void 0 : HQ.awake) && (0, Iq.jsx)(sD, {
              controller: qQ,
              island: HQ.id
            })]
          }), (0, Iq.jsx)("footer", {
            className: cq()("SkyblockReachLogFooter", null !== HQ && `Island-${HQ.id}`, !0 === (null === HQ || void 0 === HQ ? void 0 : HQ.gold) && "GoldPage"),
            children: !0 === (null === HQ || void 0 === HQ ? void 0 : HQ.gold) ? (0, Iq.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: mQ("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Iq.jsxs)(Iq.Fragment, {
              children: [(0, Iq.jsx)(hD, {
                letGoShown: DQ.letGoShown,
                haloShown: !0 === (null === HQ || void 0 === HQ ? void 0 : HQ.fish.some((QQ => QQ.halo)))
              }), (0, Iq.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: mQ("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var PD = wQ(4665);

    function ZD(QQ) {
      let {
        conversation: FQ,
        completedLabel: wQ
      } = QQ;
      return (0, Iq.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Iq.jsxs)("header", {
          children: [(0, Iq.jsx)("h3", {
            children: FQ.questName
          }), FQ.completed && (0, Iq.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: wQ
          })]
        }), FQ.lines.map((QQ => (0, Iq.jsx)(PD.c, {
          display: QQ.display
        }, QQ.key)))]
      })
    }

    function yD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)(), LQ = (0, rq.i)(vq, FQ.getSnapshot()), qQ = Vq();
      if (!LQ.enabled) return null;
      const oQ = !LQ.loading && 0 === LQ.conversations.length;
      return (0, Iq.jsx)(aq.d, {
        show: LQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: wQ("skyblockDialogue:title")
              }), (0, Iq.jsx)("p", {
                children: wQ("skyblockDialogue:intro")
              })]
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              onClick: FQ.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: cq()("SkyblockDialogueBody", {
              SingleColumn: null !== LQ.questFocus || 0 === LQ.characters.length
            }),
            children: [null === LQ.questFocus && LQ.characters.length > 0 && (0, Iq.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: LQ.characters.map((QQ => (0, Iq.jsx)(Xq.f, {
                className: cq()("SkyblockDialogueCharacter", {
                  Selected: QQ.selected
                }),
                onClick: () => {
                  FQ.selectCharacter(QQ.id)
                },
                children: (0, Iq.jsx)(Rq.e, {
                  text: QQ.styling
                })
              }, QQ.id)))
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== LQ.questFocus && (0, Iq.jsx)(Xq.f, {
                className: "SkyblockDialogueBack",
                onClick: FQ.showCharacters,
                children: wQ("skyblockDialogue:allCharacters")
              }), LQ.loading && (0, Iq.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: wQ("skyblockDialogue:loading")
              }), oQ && (0, Iq.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: wQ(null === LQ.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), LQ.conversations.map((QQ => (0, Iq.jsx)(ZD, {
                conversation: QQ,
                completedLabel: LQ.completedLabel
              }, QQ.questId)))]
            })]
          })]
        })
      })
    }

    function BD(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(Yq, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = Vq();
      return wQ.enabled ? (0, Iq.jsx)(aq.d, {
        show: wQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: LQ("skyblockGame:autographBook")
              }), (0, Iq.jsx)("p", {
                children: LQ("skyblockGame:autographBookIntro")
              })]
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              onClick: FQ.dismiss
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Iq.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Iq.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Iq.jsx)("strong", {
                  children: wQ.total
                }), (0, Iq.jsx)("span", {
                  children: LQ("skyblockGame:autographTotal")
                })]
              }), (0, Iq.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Iq.jsx)("strong", {
                  children: wQ.rankTotal
                }), (0, Iq.jsx)("span", {
                  children: LQ("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === wQ.entries.length ? (0, Iq.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: LQ("skyblockGame:autographBookEmpty")
            }) : (0, Iq.jsx)("ul", {
              className: "SkyblockAutographList",
              children: wQ.entries.map((QQ => (0, Iq.jsxs)("li", {
                className: cq()("SkyblockAutograph", {
                  Ranked: null !== QQ.rank
                }),
                style: null === QQ.rank ? void 0 : {
                  color: QQ.rank.colour
                },
                children: [null !== QQ.rank && (0, Iq.jsx)(Yo.c, {
                  className: "SkyblockAutographRankIcon",
                  name: QQ.rank.icon,
                  kit: (0, Yo.d)(QQ.rank.icon)
                }), (0, Iq.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: QQ.name
                  }), (0, Iq.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== QQ.rank && (0, Iq.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: QQ.rank.label
                    }), (0, Iq.jsx)("span", {
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
    const dD = (0, WQ.memo)((function(QQ) {
        let {
          controller: FQ
        } = QQ;
        return (0, Iq.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: FQ.display.mountWaypoint,
          children: [(0, Iq.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Iq.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Iq.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Iq.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Iq.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Iq.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Qk = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Fk(QQ) {
      return "next" === QQ.phase ? "\u2192" : Qk[QQ.kind]
    }
    const wk = (0, WQ.memo)((function(QQ) {
      let {
        controller: FQ,
        display: wQ
      } = QQ;
      const LQ = (0, rq.i)(uw, FQ.getNotificationSnapshot()),
        [qQ, oQ] = (0, WQ.useState)(!1);
      return (0, rq.g)("qteStateUpdated", (QQ => {
        oQ(QQ.isActive)
      })), (0, Iq.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (qQ ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [LQ && (0, Iq.jsxs)("div", {
          className: `SkyblockQuestNotification ${LQ.kind} ${LQ.phase}`,
          style: {
            "--quest-notification-duration": `${LQ.durationMs}ms`,
            ...LQ.accent && {
              "--quest-notification-accent": LQ.accent
            }
          },
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (LQ.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Fk(LQ)
            }), LQ.iconItem && (0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Iq.jsx)(Wq.e, {
                itemName: LQ.iconItem,
                amount: 0
              })
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: LQ.title
            }), (0, Iq.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Iq.jsx)(Do.d, {
                text: LQ.name
              })
            }), LQ.description && (0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Iq.jsx)(Do.d, {
                text: LQ.description
              })
            }), LQ.reward && (0, Iq.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Iq.jsx)(Do.d, {
                text: LQ.reward
              })
            })]
          })]
        }, LQ.token), (null === LQ || void 0 === LQ ? void 0 : LQ.waypointNameKey) && (0, Iq.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": LQ.waypointNameKey,
          "data-notification-token": LQ.token,
          ref: wQ.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${LQ.token}`)]
      })
    }));

    function Lk(QQ) {
      const FQ = parseInt(QQ.replace("#", ""), 16);
      return `${FQ>>16&255}, ${FQ>>8&255}, ${255&FQ}`
    }
    const qk = (0, WQ.memo)((function(QQ) {
      let {
        controller: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)(), LQ = (0, rq.i)(jw, FQ.getSnapshot());
      if (!LQ) return null;
      const qQ = "arrival" === LQ.phase;
      return (0, Iq.jsxs)("div", {
        className: cq()("SkyblockPortalTransit", {
          Departure: !qQ,
          Arrival: qQ
        }),
        style: {
          "--portal-rgb": Lk(LQ.colour),
          "--portal-duration": `${LQ.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Iq.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            FQ.finishArrival(LQ.token)
          }
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Iq.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !qQ && (0, Iq.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: wQ("skyblockGame:portalTransitHeading")
          }), (0, Iq.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: wQ(LQ.zoneNameKey)
          })]
        })]
      }, LQ.token)
    }));

    function Dk() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function kk() {
      const QQ = document.querySelector(".SkyblockHudCoins"),
        FQ = null === QQ || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
      return FQ && FQ.width > 0 ? {
        x: FQ.left + Math.min(FQ.width, 24) / 2,
        y: FQ.top + FQ.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function vk(QQ) {
      return {
        x: QQ.left + QQ.width / 2,
        y: QQ.top + QQ.height / 2
      }
    }

    function mk() {
      var QQ;
      const FQ = null === (QQ = document.querySelector(".HotBar")) || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
      return FQ && FQ.width > 0 ? vk(FQ) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function uk(QQ) {
      let {
        items: FQ,
        origins: wQ,
        target: LQ
      } = QQ;
      return (0, Iq.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: FQ.map(((QQ, FQ) => {
          const qQ = wQ[FQ];
          return (0, Iq.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${qQ.x}px`,
              top: `${qQ.y}px`,
              "--item-dx": LQ.x - qQ.x + "px",
              "--item-dy": LQ.y - qQ.y + "px",
              "--item-delay": 2e3 + 160 * FQ + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Iq.jsx)(Wq.e, {
              itemName: QQ.dailyRewardItemName,
              amount: 0
            })
          }, QQ.dailyRewardItemName)
        }))
      })
    }

    function Hk(QQ, FQ) {
      const wQ = -Math.PI / 2 + 1.25 * (QQ / (FQ - 1) * 2 - 1),
        LQ = 70 + QQ % 3 * 22;
      return {
        x: Math.cos(wQ) * LQ,
        y: Math.sin(wQ) * LQ * .7
      }
    }

    function bk(QQ) {
      let {
        origin: FQ,
        target: wQ,
        count: LQ
      } = QQ;
      const qQ = [];
      for (let oQ = 0; oQ < LQ; oQ++) {
        const QQ = Hk(oQ, LQ);
        qQ.push((0, Iq.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${FQ.x}px`,
            top: `${FQ.y}px`,
            "--coin-bx": `${QQ.x}px`,
            "--coin-by": `${QQ.y}px`,
            "--coin-dx": wQ.x - FQ.x + "px",
            "--coin-dy": wQ.y - FQ.y + "px",
            "--coin-delay": `${Jw(oQ,LQ)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Iq.jsx)(Wq.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, oQ))
      }
      return (0, Iq.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: qQ
      })
    }

    function Yk(QQ) {
      let {
        day: FQ
      } = QQ;
      const wQ = RQ[FQ - 1];
      return (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Iq.jsx)(Wq.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Oq.d)(wQ.dailyRewardCoins)]
        }), wQ.dailyRewardItems.map((QQ => (0, Iq.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Iq.jsx)(Wq.e, {
            itemName: QQ.dailyRewardItemName,
            amount: 0
          }), "\xd7", QQ.dailyRewardItemAmount]
        }, QQ.dailyRewardItemName)))]
      })
    }

    function xk(QQ) {
      let {
        day: FQ
      } = QQ;
      const wQ = sQ(FQ);
      return (0, Iq.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: RQ.map(((QQ, LQ) => {
          const qQ = LQ + 1;
          return (0, Iq.jsxs)("li", {
            className: cq()("SkyblockDailyRewardTile", {
              Claimed: qQ < FQ && qQ !== wQ,
              Today: qQ === FQ,
              Tomorrow: qQ === wQ,
              Jackpot: qQ === OQ
            }),
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: qQ
            }), (0, Iq.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Iq.jsx)(Wq.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Oq.d)(QQ.dailyRewardCoins)]
            }), QQ.dailyRewardItems.map((QQ => (0, Iq.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Iq.jsx)(Wq.e, {
                itemName: QQ.dailyRewardItemName,
                amount: 0
              }), "\xd7", QQ.dailyRewardItemAmount]
            }, QQ.dailyRewardItemName)))]
          }, qQ)
        }))
      })
    }

    function Ak(QQ) {
      let {
        view: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)(), LQ = (0, WQ.useRef)(null), qQ = (0, WQ.useRef)(null), [oQ, DQ] = (0, WQ.useState)(null);
      (0, WQ.useLayoutEffect)((() => {
        var QQ;
        const FQ = null === (QQ = LQ.current) || void 0 === QQ ? void 0 : QQ.getBoundingClientRect();
        if (FQ) {
          var wQ, oQ;
          const QQ = Array.from(null !== (wQ = null === (oQ = qQ.current) || void 0 === oQ ? void 0 : oQ.children) && void 0 !== wQ ? wQ : [], (QQ => vk(QQ.getBoundingClientRect())));
          DQ({
            origin: vk(FQ),
            target: kk(),
            itemOrigins: QQ,
            itemTarget: mk()
          })
        }
      }), []);
      const kQ = sQ(FQ.day),
        vQ = function(QQ, FQ) {
          const [wQ, LQ] = (0, WQ.useState)((() => Dk() ? QQ : 0));
          return (0, WQ.useEffect)((() => {
            if (Dk()) return;
            const wQ = performance.now();
            let qQ = 0;
            const oQ = DQ => {
              const kQ = Math.min(Math.max((DQ - wQ) / FQ, 0), 1);
              LQ(Math.round(QQ * (1 - (1 - kQ) ** 3))), kQ < 1 && (qQ = requestAnimationFrame(oQ))
            };
            return qQ = requestAnimationFrame(oQ), () => {
              cancelAnimationFrame(qQ)
            }
          }), [QQ, FQ]), wQ
        }(FQ.coins, 450);
      return (0, Iq.jsxs)("div", {
        className: cq()("SkyblockDailyReward", {
          Jackpot: FQ.day === OQ
        }),
        style: {
          "--daily-duration": `${FQ.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Iq.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: wQ("skyblockGame:dailyRewardTitle")
            }), (0, Iq.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: wQ("skyblockGame:dailyRewardDay", {
                day: String(FQ.day)
              })
            })]
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: LQ,
            children: [(0, Iq.jsx)(Wq.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Iq.jsxs)("span", {
              children: ["+", (0, Oq.d)(vQ)]
            })]
          }), FQ.items.length > 0 && (0, Iq.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: qQ,
            children: FQ.items.map((QQ => (0, Iq.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Iq.jsx)(Wq.e, {
                itemName: QQ.dailyRewardItemName,
                amount: 0
              }), "\xd7", QQ.dailyRewardItemAmount]
            }, QQ.dailyRewardItemName)))
          }), (0, Iq.jsx)(xk, {
            day: FQ.day
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [wQ("skyblockGame:dailyRewardComeBack"), (0, Iq.jsx)(Yk, {
              day: kQ
            })]
          })]
        }), null !== oQ && (0, Iq.jsx)(bk, {
          origin: oQ.origin,
          target: oQ.target,
          count: FQ.flyingCoins
        }), null !== oQ && oQ.itemOrigins.length === FQ.items.length && (0, Iq.jsx)(uk, {
          items: FQ.items,
          origins: oQ.itemOrigins,
          target: oQ.itemTarget
        })]
      })
    }
    const tk = (0, WQ.memo)((function(QQ) {
        let {
          controller: FQ
        } = QQ;
        const wQ = (0, rq.i)(fw, FQ.getSnapshot());
        return wQ ? (0, Iq.jsx)(Ak, {
          view: wQ
        }, wQ.token) : null
      })),
      ek = "Gold Coin";

    function Mk(QQ) {
      return 650 + 220 * QQ
    }

    function Gk(QQ) {
      return {
        "--letter-delay": `${Mk(QQ)}ms`,
        "--letter-land": `${Mk(QQ)+300}ms`
      }
    }

    function pk(QQ) {
      let {
        letterCount: FQ
      } = QQ;
      return (0, Iq.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Iq.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Iq.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Iq.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: FQ
        }, ((QQ, FQ) => (0, Iq.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Gk(FQ),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, FQ)))]
      })
    }

    function ck(QQ) {
      var FQ, wQ, LQ;
      let {
        letter: qQ,
        index: oQ
      } = QQ;
      const {
        t: DQ
      } = (0, sq.y)(), kQ = null !== (FQ = null === (wQ = qQ.items[0]) || void 0 === wQ ? void 0 : wQ.itemName) && void 0 !== FQ ? FQ : ek;
      return (0, Iq.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Gk(oQ),
        children: [(0, Iq.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Iq.jsx)(Wq.e, {
            itemName: kQ,
            amount: 0
          })
        }), (0, Iq.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: DQ(qQ.reasonKey, null !== (LQ = qQ.reasonParams) && void 0 !== LQ ? LQ : void 0)
        }), (0, Iq.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [qQ.coins > 0 && (0, Iq.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Iq.jsx)(Wq.e, {
              itemName: ek,
              amount: 0
            }), "+", (0, Oq.d)(qQ.coins)]
          }), qQ.items.map(((QQ, FQ) => (0, Iq.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Iq.jsx)(Wq.e, {
              itemName: QQ.itemName,
              amount: 0
            }), QQ.label, " \xd7", QQ.amount]
          }, FQ)))]
        })]
      })
    }

    function Ck(QQ) {
      let {
        view: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)();
      return (0, Iq.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${FQ.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${Mk(FQ.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Iq.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Iq.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Iq.jsx)(pk, {
              letterCount: FQ.letters.length
            }), (0, Iq.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: wQ("skyblockGame:mailboxTitle")
            })]
          }), (0, Iq.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: FQ.letters.map(((QQ, FQ) => (0, Iq.jsx)(ck, {
              letter: QQ,
              index: FQ
            }, FQ)))
          }), FQ.more > 0 && (0, Iq.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: wQ("skyblockGame:mailboxMore", {
              count: String(FQ.more)
            })
          })]
        })
      })
    }
    const Sk = (0, WQ.memo)((function(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(nw, FQ.getSnapshot());
      return wQ ? (0, Iq.jsx)(Ck, {
        view: wQ
      }, wQ.token) : null
    }));

    function ik(QQ) {
      let {
        controller: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)(), LQ = (0, rq.i)(jL, FQ.getSnapshot());
      if (null === LQ) return null;
      const qQ = LQ.fullSet ? "empty" === LQ.fuelState ? {
        text: wQ("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: wQ("skyblockGame:magmawardHudFullSet", {
          worn: String(LQ.wornCount)
        }),
        tone: "partial"
      };
      return (0, Iq.jsx)(Sq.d, {
        placement: "statBars",
        children: (0, Iq.jsxs)("div", {
          className: cq()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${LQ.fuelState}`, {
            "SkyblockMagmawardHud-partial": !LQ.fullSet,
            "SkyblockMagmawardHud-armed": LQ.fullSet && "empty" !== LQ.fuelState
          }),
          children: [null !== LQ.flare && (0, Iq.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${LQ.flare}`
          }, `flare:${LQ.flareToken}`), (0, Iq.jsx)("div", {
            className: cq()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: LQ.setLit
            }),
            children: LQ.pieces.map(((QQ, FQ) => (0, Iq.jsx)("div", {
              className: cq()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: QQ.worn,
                SkyblockMagmawardPieceJustWorn: QQ.justWorn
              }),
              children: (0, Iq.jsx)(Wq.e, {
                itemName: QQ.itemName,
                amount: 0
              })
            }, `${FQ}:${QQ.wornToken}`)))
          }, `pieces:${LQ.setLitToken}`), (0, Iq.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Iq.jsxs)("div", {
              className: cq()("SkyblockMagmawardFuelCounter", LQ.pulse && `SkyblockMagmawardFuelCounter-${LQ.pulse}`),
              children: [(0, Iq.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Iq.jsx)(Wq.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Iq.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: LQ.fuel
              })]
            }, `counter:${LQ.pulseToken}`), "burn" === LQ.pulse && (0, Iq.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${LQ.pulseToken}`)]
          }), qQ && (0, Iq.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${qQ.tone} SmallTextBold`,
            children: qQ.text
          })]
        })
      })
    }

    function Wk(QQ) {
      let {
        controller: FQ
      } = QQ;
      const {
        t: wQ,
        selectedLanguage: LQ
      } = (0, sq.y)(), qQ = (0, rq.i)(XL, FQ.getSnapshot());
      return null === qQ ? null : (0, Iq.jsx)(Sq.d, {
        placement: "statBars",
        children: (0, Iq.jsxs)("div", {
          className: cq()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: qQ.inRange
          }),
          style: {
            "--glowtide-colour": qQ.colour
          },
          "aria-label": wQ("skyblockGame:glowtideChipLabel"),
          children: [(0, Iq.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), qQ.inRange ? (0, Iq.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: wQ("skyblockGame:glowtideChipInRange")
          }, `call:${qQ.inRangeToken}`) : (0, Iq.jsxs)(Iq.Fragment, {
            children: [(0, Iq.jsx)("div", {
              ref: FQ.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Iq.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: wQ("skyblockGame:waypointDistance", {
                distance: CQ(qQ.distance, LQ.code)
              })
            })]
          })]
        })
      })
    }

    function Rk(QQ) {
      let {
        controller: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)(), LQ = (0, rq.i)(VL, FQ.getSnapshot());
      return null === LQ ? null : (0, Iq.jsx)(Sq.d, {
        placement: "statBars",
        children: (0, Iq.jsxs)("div", {
          className: cq()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: LQ.full
          }),
          "aria-label": wQ("skyblockGame:glowMeterLabel", {
            fill: String(LQ.fill),
            MH: String(LQ.MH)
          }),
          children: [LQ.burst && (0, Iq.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${LQ.burstToken}`), (0, Iq.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${LQ.ratio})`
              }
            }), LQ.gained && (0, Iq.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${LQ.gainToken}`), LQ.full && Array.from({
              length: 5
            }, ((QQ, FQ) => (0, Iq.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, FQ)))]
          }), LQ.full && LQ.rares.map((QQ => (0, Iq.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Iq.jsx)(Wq.e, {
              itemName: QQ,
              amount: 0
            })
          }, QQ))), LQ.ready && (0, Iq.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Iq.jsx)("span", {
              children: wQ("skyblockGame:glowMeterReady")
            })
          }, `ready:${LQ.fullToken}`)]
        })
      })
    }

    function Ok(QQ) {
      let {
        controller: FQ
      } = QQ;
      const {
        t: wQ
      } = (0, sq.y)(), LQ = (0, rq.i)(JL, FQ.getSnapshot());
      if (null === LQ) return null;
      const qQ = "waiting" === LQ.phase,
        oQ = {
          animationDuration: `${LQ.waitMs}ms`,
          animationDelay: -LQ.elapsedMs + "ms"
        },
        DQ = qQ ? void 0 : {
          animationDuration: `${LQ.waitMs}ms`
        };
      return (0, Iq.jsxs)("div", {
        className: qQ ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [qQ && (0, Iq.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((QQ, FQ) => (0, Iq.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, FQ))), (0, Iq.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: oQ
          }), (0, Iq.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Iq.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Iq.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: oQ
            })]
          }), (0, Iq.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Iq.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: DQ,
          children: wQ(LQ.line)
        }, LQ.lineIndex)]
      }, LQ.token)
    }

    function sk(QQ) {
      let {
        chart: FQ,
        showHere: wQ,
        className: LQ
      } = QQ;
      return (0, Iq.jsx)("div", {
        className: cq()("SkyblockTideChartGrid", LQ, null !== FQ.pictureName && "Complete"),
        "aria-hidden": "true",
        children: FQ.cells.map(((QQ, LQ) => {
          const qQ = 0 !== (FQ.pulseCells & 1 << LQ),
            oQ = FQ.castCell === LQ;
          return (0, Iq.jsx)("span", {
            className: cq()("SkyblockTideChartCell", `Cell-${QQ}`, qQ && "Pulse", oQ && "Cast", wQ && FQ.hereCell === LQ && "Here")
          }, `${LQ}:${qQ?`p${FQ.pulseToken}`:""}:${oQ?`c${FQ.castToken}`:""}`)
        }))
      })
    }

    function rk(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(nL, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = wQ.chip;
      if (!wQ.enabled || null === qQ) return null;
      const oQ = LQ("skyblockGame:tideChartsChipLabel", {
        island: qQ.islandName,
        lit: String(qQ.lit),
        ink: String(qQ.ink)
      });
      return (0, Iq.jsx)(Sq.d, {
        placement: "statBars",
        children: (0, Iq.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: cq()("SkyblockTideChartsChip", wQ.open && "Open", null !== qQ.pictureName && "Complete"),
          "aria-label": oQ,
          title: oQ,
          onMouseDown: QQ => {
            QQ.preventDefault()
          },
          onClick: FQ.toggle,
          children: [(0, Iq.jsx)(sk, {
            chart: qQ,
            showHere: !1,
            className: "Mini"
          }), (0, Iq.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [qQ.lit, "/", qQ.ink]
          })]
        })
      })
    }

    function Ik(QQ) {
      let {
        controller: FQ
      } = QQ;
      const wQ = (0, rq.i)(nL, FQ.getSnapshot()),
        {
          t: LQ
        } = (0, sq.y)(),
        qQ = Vq(),
        oQ = wQ.card;
      return wQ.enabled && null !== oQ ? (0, Iq.jsx)(aq.d, {
        show: wQ.open,
        close: FQ.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Iq.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: qQ,
          onKeyDown: fq,
          children: [(0, Iq.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Iq.jsxs)("div", {
              children: [(0, Iq.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: LQ("skyblockGame:tideChartsTitle")
              }), (0, Iq.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: LQ("skyblockGame:tideChartsIntro")
              })]
            }), (0, Iq.jsx)(Xq.j, {
              padIgnore: !0,
              ariaLabel: LQ("skyblockGame:tideChartsClose"),
              onClick: FQ.dismiss
            })]
          }), wQ.tabs.length > 1 && (0, Iq.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": LQ("skyblockGame:tideChartsIslands"),
            children: wQ.tabs.map((QQ => (0, Iq.jsx)("button", {
              type: "button",
              className: cq()("SkyblockTideChartsTab", QQ.selected && "Selected"),
              "aria-pressed": QQ.selected,
              onClick: () => {
                FQ.Vb(QQ.island)
              },
              children: QQ.name
            }, QQ.island)))
          }), (0, Iq.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Iq.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": oQ.gridLabel,
              children: (0, Iq.jsx)(sk, {
                chart: oQ,
                showHere: !0,
                className: "Large"
              })
            }), (0, Iq.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Iq.jsx)("h3", {
                children: oQ.islandName
              }), (0, Iq.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: oQ.litText
              }), null === oQ.pictureName ? (0, Iq.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: LQ("skyblockGame:tideChartsPictureHidden")
              }) : (0, Iq.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: LQ("skyblockGame:tideChartsPictureRevealed", {
                  picture: oQ.pictureName
                })
              }, oQ.pictureName), (0, Iq.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Iq.jsxs)("li", {
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), LQ("skyblockGame:tideChartsLegendLit")]
                }), (0, Iq.jsxs)("li", {
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), LQ("skyblockGame:tideChartsLegendClear")]
                }), null !== oQ.hereCell && (0, Iq.jsxs)("li", {
                  children: [(0, Iq.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), LQ("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Iq.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Iq.jsx)("span", {
                  children: wQ.turnsText
                }), (0, Iq.jsx)("span", {
                  children: wQ.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Uk(QQ) {
      var FQ;
      let {
        controller: wQ
      } = QQ;
      const {
        selectedLanguage: LQ
      } = (0, sq.y)(), qQ = LQ.code;
      (0, WQ.useEffect)((() => {
        wQ.setTranslator(((QQ, FQ) => (0, sq.u)(qQ, QQ, FQ)), qQ, ((QQ, FQ) => (0, sq.o)(qQ, QQ, FQ)))
      }), [wQ, qQ]);
      const oQ = (0, rq.i)(bQ, wQ.map.getSnapshot()),
        {
          openInGameMenuName: DQ
        } = (0, Cq.l)(["openInGameMenuName"]);
      return (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsx)(wk, {
          controller: wQ.quests,
          display: wQ.navigation.display
        }), oQ.enabled && !DQ && (0, Iq.jsx)(Lo, {
          controller: wQ.navigation
        }), (0, Iq.jsx)(Uq, {
          controller: wQ,
          minimap: oQ.enabled && (null === (FQ = oQ.presentation) || void 0 === FQ ? void 0 : FQ.minimap) && (0, Iq.jsx)(wo, {
            view: oQ.presentation.minimap,
            navigation: wQ.navigation,
            controller: wQ.map
          }),
          children: (0, Iq.jsx)(bo, {
            controller: wQ.quests,
            surface: "hud"
          })
        }), (0, Iq.jsx)(dD, {
          controller: wQ.navigation
        }), (0, Iq.jsx)(qk, {
          controller: wQ.portalTransit
        }), (0, Iq.jsx)(tk, {
          controller: wQ.dailyReward
        }), (0, Iq.jsx)(Sk, {
          controller: wQ.mailbox
        }), (0, Iq.jsx)(ik, {
          controller: wQ.magmaward
        }), (0, Iq.jsx)(Wk, {
          controller: wQ.glowtide
        }), (0, Iq.jsx)(xD, {
          controller: wQ.passage
        }), (0, Iq.jsx)(rk, {
          controller: wQ.tideCharts
        }), (0, Iq.jsx)(Rk, {
          controller: wQ.glowMeter
        }), (0, Iq.jsx)(WD, {
          controller: wQ.reachLog
        }), (0, Iq.jsx)(Ok, {
          controller: wQ.hushWait
        }), (0, Iq.jsx)(cD, {
          controller: wQ.lampLight
        }), (0, Iq.jsx)(qo, {
          controller: wQ.skills,
          surface: "hud"
        })]
      })
    }

    function Nk(QQ) {
      let {
        controller: FQ
      } = QQ;
      return (0, Iq.jsxs)(Iq.Fragment, {
        children: [(0, Iq.jsx)(Fo, {
          controller: FQ.map,
          navigation: FQ.navigation
        }), (0, Iq.jsx)(qo, {
          controller: FQ.skills,
          surface: "menu"
        }), (0, Iq.jsx)(bo, {
          controller: FQ.quests,
          surface: "menu"
        }), (0, Iq.jsx)(go, {
          controller: FQ.dungeons
        }), (0, Iq.jsx)(yo, {
          controller: FQ.collections
        }), (0, Iq.jsx)(FD, {
          controller: FQ.questGraph
        }), (0, Iq.jsx)(DD, {
          controller: FQ.forge
        }), (0, Iq.jsx)(bD, {
          controller: FQ.smuggler
        }), (0, Iq.jsx)(SD, {
          controller: FQ.keepersChair,
          lampLight: FQ.lampLight
        }), (0, Iq.jsx)(gD, {
          controller: FQ.reachLog,
          regulars: FQ.regulars,
          hiddenWaters: FQ.hiddenWaters
        }), (0, Iq.jsx)(rD, {
          controller: FQ.regulars
        }), (0, Iq.jsx)(tD, {
          controller: FQ.passage
        }), (0, Iq.jsx)(Ik, {
          controller: FQ.tideCharts
        }), (0, Iq.jsx)(yD, {
          controller: FQ.dialogue
        }), (0, Iq.jsx)(BD, {
          controller: FQ.autographs
        })]
      })
    }
    var Tk = wQ(36388);
    const Kk = FL + vL;

    function zk(QQ, FQ, wQ, LQ, qQ) {
      const oQ = [],
        DQ = [],
        kQ = wQ => {
          const LQ = QQ.playSound(FQ, wQ.sound, wQ.volume, wQ.rate);
          LQ && (DQ.push(LQ), void 0 !== wQ.cutAfter && oQ.push(setTimeout((() => {
            LQ.fade(LQ.getVolume(), 0, 300)
          }), wQ.cutAfter)))
        };
      for (const vQ of function(QQ, FQ) {
          const wQ = [{
            sound: "rpgKnifeSlice1",
            beat: FL,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: FL,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: FL,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: FL,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: FL,
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
            sound: (0, Tk.c)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Kk + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, Tk.c)("bigDrumSwish"),
            beat: Kk + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Kk + 60,
            lead: 180,
            volume: .5 + .06 * QQ,
            rate: .82 + .07 * QQ
          }];
          return QQ >= 4 && wQ.push({
            sound: "exp_levelup",
            beat: Kk + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), FQ && wQ.push({
            sound: "trumpetFlare",
            beat: Kk + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), wQ.push({
            sound: "harp_pling",
            beat: wL,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), wQ
        }(wQ, LQ)) qQ ? oQ.push(setTimeout((() => {
        kQ(vQ)
      }), Math.max(0, vQ.beat - vQ.lead / vQ.rate))) : vQ.beat !== FL && "magicAccent2" !== vQ.sound && "trumpetFlare" !== vQ.sound || kQ(vQ);
      return () => {
        for (const QQ of oQ) clearTimeout(QQ);
        for (const QQ of DQ) QQ.fade(QQ.getVolume(), 0, 120)
      }
    }
    class lk {
      constructor(QQ) {
        this.deps = QQ, this.pending = new Map, this.localHook = null
      }
      hookWaiting(QQ, FQ) {
        this.pending.delete(QQ);
        const wQ = this.deps.now();
        if (null === FQ) {
          var LQ;
          if ((null === (LQ = this.localHook) || void 0 === LQ ? void 0 : LQ.hookId) === QQ) {
            const QQ = wQ >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(QQ)
          }
          return
        }
        const qQ = wQ + FQ;
        this.settle(QQ, qQ) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(QQ, {
          untilMs: wQ + 1e3,
          biteAtMs: qQ
        }))
      }
      getLocalHook() {
        var QQ, FQ;
        return null !== (QQ = null === (FQ = this.localHook) || void 0 === FQ ? void 0 : FQ.hookId) && void 0 !== QQ ? QQ : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const QQ = this.deps.now();
        for (const [FQ, {
            untilMs: wQ,
            biteAtMs: LQ
          }] of this.pending)(this.settle(FQ, LQ) || QQ > wQ) && this.pending.delete(FQ)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(QQ, FQ) {
        const wQ = this.deps.getLineOwner(QQ);
        if (null === wQ) return !1;
        if (!this.deps.isLocalPlayer(wQ)) return !0;
        if (this.localHook = {
            hookId: QQ,
            biteAtMs: FQ
          }, !this.deps.isHushWaiting()) {
          const [FQ, wQ] = this.deps.getHookPosition(QQ);
          this.deps.onCastLanded(FQ, wQ)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var jk = wQ(4119);
    const ak = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Xk = {
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
    class fk {
      constructor(QQ) {
        this.deps = QQ, this.tell = null
      }
      receiveTell(QQ) {
        let {
          biteTellTier: FQ
        } = QQ;
        this.tell = {
          tier: FQ,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(QQ) {
        const FQ = this.tell;
        if (this.tell = null, !QQ) return;
        const wQ = null !== FQ && this.deps.now() - FQ.atMs <= 3e3 ? FQ.tier : 0;
        this.deps.vibrate(ak[wQ])
      }
      burstAtHook() {
        const QQ = this.tell,
          FQ = this.deps.getLocalHookPosition();
        null === QQ || QQ.burst || null === FQ || (QQ.burst = !0, this.deps.playParticles(function(QQ, FQ) {
          let [wQ, LQ, qQ] = FQ;
          const {
            count: oQ,
            rise: DQ,
            colour: kQ
          } = Xk[QQ], [vQ, mQ, uQ] = kQ;
          return {
            texture: "glint",
            pos1: [wQ - .3, LQ, qQ - .3],
            pos2: [wQ + .3, LQ + .2, qQ + .3],
            dir1: [-.6, DQ, -.6],
            dir2: [.6, 1.4 * DQ, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: oQ,
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
              minColor: [vQ, mQ, uQ, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [vQ, mQ, uQ, 0],
              maxColor: [vQ, mQ, uQ, 0]
            }],
            blendMode: jk.f.Add,
            hideDist: 48
          }
        }(QQ.tier, FQ)))
      }
    }
    var Vk = wQ(1265),
      hk = wQ(1899),
      Jk = wQ(27);

    function Ek(QQ, FQ) {
      return [{
        timeFraction: 0,
        minColor: [255 * QQ[0], 255 * QQ[1], 255 * QQ[2], 1],
        maxColor: [255 * FQ[0], 255 * FQ[1], 255 * FQ[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const nk = [0, 0, 0],
      gk = {
        texture: "glint",
        mipmaps: !1,
        MH: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: nk,
        dir2: nk,
        blendMode: jk.f.OneOne
      },
      Pk = {
        ...gk,
        colorGradients: Ek([1, .88, .38], [1, .65, .15])
      },
      Zk = {
        ...gk,
        colorGradients: Ek([.55, .95, 1], [.9, 1, 1])
      },
      yk = [.5, .5, .5],
      Bk = {
        texture: "glint",
        mipmaps: !1,
        MH: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Ek([1, .12, .12], [1, .35, .2]),
        blendMode: jk.f.OneOne
      };
    class dk {
      constructor() {
        this.drops = new Map
      }
      bx(QQ, FQ) {
        if ("overflowFlash" === FQ.kind) {
          const [wQ, LQ, qQ] = FQ.position, oQ = QQ.createParticles(Bk, {
            pos: [wQ, LQ, qQ],
            half: yk
          });
          return oQ.emit(18), void oQ.stop()
        }
        this.drops.has(FQ.itemId) || this.drops.set(FQ.itemId, {
          owner: FQ.owner,
          cosmetic: FQ.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      fH(QQ) {
        if (0 === this.drops.size) return;
        const FQ = performance.now(),
          wQ = QQ.getCameraPosition();
        let LQ = 0;
        for (const oQ of this.drops.values()) null !== oQ.particles && LQ++;
        for (const [oQ, DQ] of this.drops) {
          const kQ = QQ.getPositionView(oQ);
          if (null === kQ) {
            var qQ;
            if (DQ.seen || FQ - DQ.markedAt > 5e3) null !== DQ.particles && LQ--, null === (qQ = DQ.particles) || void 0 === qQ || qQ.stop(), this.drops.delete(oQ);
            continue
          }
          DQ.cosmetic || !QQ.isLocalPlayer(DQ.owner) || DQ.pickupDelayCleared || (QQ.clearPickupDelay(oQ), DQ.pickupDelayCleared = !0);
          const vQ = DQ.lastPosition,
            mQ = DQ.seen && (kQ[0] - vQ[0]) ** 2 + (kQ[1] - vQ[1]) ** 2 + (kQ[2] - vQ[2]) ** 2 > 4e-4,
            uQ = (kQ[0] - wQ[0]) ** 2 + (kQ[1] - wQ[1]) ** 2 + (kQ[2] - wQ[2]) ** 2 < 2025;
          DQ.seen = !0, vQ[0] = kQ[0], vQ[1] = kQ[1], vQ[2] = kQ[2], mQ && (DQ.lastMovingAt = FQ), null !== DQ.particles && (!uQ || FQ - DQ.lastMovingAt > 500) && (DQ.particles.stop(), DQ.particles = null, LQ--), mQ && uQ && null === DQ.particles && LQ < 32 && (DQ.particles = QQ.createParticles(DQ.cosmetic ? Zk : Pk, {
            pos: kQ
          }), LQ++), null !== DQ.particles && (DQ.particles.moveTo(kQ), DQ.particles.setEmitRate(mQ ? 12 : 0)), !mQ && null === DQ.particles && FQ - Math.max(DQ.lastMovingAt, DQ.markedAt) > 2e3 && this.drops.delete(oQ)
        }
      }
      dispose() {
        for (const FQ of this.drops.values()) {
          var QQ;
          null === (QQ = FQ.particles) || void 0 === QQ || QQ.stop()
        }
        this.drops.clear()
      }
    }
    var Qv = wQ(201);
    const Fv = Qv.e.iG * Qv.e.playerEyeToHeightRatio;
    class wv {
      constructor(QQ) {
        this.host = QQ, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      bx(QQ) {
        this.lava = QQ, this.nextUpdateAt = 0
      }
      fH() {
        var QQ;
        const FQ = this.host.now();
        if (FQ < this.nextUpdateAt) return;
        this.nextUpdateAt = FQ + 250;
        const wQ = this.host.playerPosition(),
          LQ = wQ && this.findNearest([wQ[0], wQ[1] + Fv, wQ[2]]);
        if (!LQ || LQ.distance >= 40) return void this.stop();
        const qQ = .5 * Math.min(1, (40 - LQ.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(qQ) : this.loop = this.host.play("lavaFlow", qQ, LQ.position, 40 + Fv, 9, !0), null === (QQ = this.loop) || void 0 === QQ || QQ.setPosition(LQ.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var QQ;
        null === (QQ = this.loop) || void 0 === QQ || QQ.stop(), this.loop = null
      }
      findNearest(QQ) {
        let FQ = -1,
          wQ = 1 / 0;
        for (let LQ = 0; LQ < this.lava.length; LQ += 3) {
          const qQ = this.lava[LQ] - QQ[0],
            oQ = this.lava[LQ + 1] - QQ[1],
            DQ = this.lava[LQ + 2] - QQ[2],
            kQ = qQ * qQ + oQ * oQ + DQ * DQ;
          kQ < wQ && (wQ = kQ, FQ = LQ)
        }
        return FQ < 0 ? null : {
          position: [this.lava[FQ], this.lava[FQ + 1], this.lava[FQ + 2]],
          distance: Math.sqrt(wQ)
        }
      }
    }
    var Lv = wQ(1880),
      qv = wQ(38166);
    const ov = {
      "Grey Portal": "Gray"
    };
    for (const Hv of qQ.Kc) ov[`${Hv} Portal`] = Hv;
    const Dv = Object.keys(ov),
      kv = Object.fromEntries(Dv.map((QQ => [QQ, (0, qQ.Z)(qQ.K[`${(0,qQ.He)(ov[QQ])}Team`])])));
    Object.fromEntries(Dv.map((QQ => [QQ, qQ.K[`${(0,qQ.He)(ov[QQ])}UiText`]])));
    class vv {
      constructor(QQ, FQ) {
        this.presentation = QQ, this.portal = FQ, this.unlocked = void 0
      }
      bx(QQ) {
        const FQ = !1 === this.unlocked && QQ;
        this.unlocked = QQ, this.fH();
        const {
          min: wQ,
          max: LQ,
          unlockedBlock: qQ
        } = this.portal;
        if (FQ && this.presentation.hasChunk(...wQ)) {
          const [QQ, FQ, oQ] = kv[qQ];
          this.presentation.playParticles({
            pos1: [...wQ],
            pos2: LQ.map((QQ => QQ + 1)),
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
              minColor: [QQ, FQ, oQ, 1],
              maxColor: [Math.min(255, QQ + 55), Math.min(255, FQ + 55), Math.min(255, oQ + 90), 1]
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
      fH() {
        var QQ;
        const FQ = this.unlocked ? this.portal.unlockedBlock : null !== (QQ = this.portal.lockedBlock) && void 0 !== QQ ? QQ : "Light Gray Portal",
          {
            min: wQ,
            max: LQ
          } = this.portal;
        for (let qQ = wQ[0]; qQ <= LQ[0]; qQ++)
          for (let QQ = wQ[1]; QQ <= LQ[1]; QQ++)
            for (let oQ = wQ[2]; oQ <= LQ[2]; oQ++) this.presentation.hasChunk(qQ, QQ, oQ) && this.presentation.JG(qQ, QQ, oQ) !== FQ && this.presentation.KU(qQ, QQ, oQ, FQ)
      }
    }
    const mv = {
        farming_1: {
          raises: QQ => "NPC" === QQ.type && "chef" === QQ.variation,
          rise: .4
        },
        fishing_1: {
          raises: QQ => "Draugr Warper" === QQ.type,
          rise: .4
        }
      },
      uv = (QQ, FQ, wQ, oQ) => {
        let {
          localPlayerId: DQ
        } = oQ;
        const kQ = new Gq({
          translate: (QQ, FQ) => (0, sq.u)(Vk.e.get().getCurrentLanguageCode(), QQ, FQ),
          translateWithIcons: (QQ, FQ) => (0, sq.o)(Vk.e.get().getCurrentLanguageCode(), QQ, FQ),
          setMenuOpen: QQ => {
            QQ ? (0, nQ.o)() : (0, nQ.f)()
          },
          dismissMenu: nQ.i,
          publishSkills: QQ => {
            gQ.l.GA(ow, QQ, !0)
          },
          publishQuests: QQ => {
            gQ.l.GA(mw, QQ, !0)
          },
          publishQuestNotification: QQ => {
            gQ.l.GA(uw, QQ, !0)
          },
          publishDungeons: QQ => {
            gQ.l.GA(Yw, QQ, !0)
          },
          publishCollections: QQ => {
            gQ.l.GA(zw, QQ, !0)
          },
          publishMap: QQ => {
            gQ.l.GA(bQ, QQ, !0)
          },
          publishHud: QQ => {
            gQ.l.GA(tq, QQ, !0)
          },
          publishPortalTransit: QQ => {
            gQ.l.GA(jw, QQ, !0)
          },
          isLoadingScreenUp: () => Cq.c.get("loadingOverlayVisible"),
          publishDailyReward: QQ => {
            gQ.l.GA(fw, QQ, !0)
          },
          publishMailbox: QQ => {
            gQ.l.GA(nw, QQ, !0)
          },
          publishQuestGraph: QQ => {
            gQ.l.GA(Pw, QQ, !0)
          },
          publishForge: QQ => {
            gQ.l.GA(AL, QQ, !0)
          },
          publishSmuggler: QQ => {
            gQ.l.GA(ML, QQ, !0)
          },
          publishKeepersChair: QQ => {
            gQ.l.GA(OL, QQ, !0)
          },
          publishReachLog: QQ => {
            gQ.l.GA(rL, QQ, !0)
          },
          publishLampLight: QQ => {
            gQ.l.GA(zL, QQ, !0)
          },
          publishMagmaward: QQ => {
            gQ.l.GA(jL, QQ, !0)
          },
          publishGlowtide: QQ => {
            gQ.l.GA(XL, QQ, !0)
          },
          publishGlowMeter: QQ => {
            gQ.l.GA(VL, QQ, !0)
          },
          publishHushWait: QQ => {
            gQ.l.GA(JL, QQ, !0)
          },
          publishPassage: QQ => {
            gQ.l.GA(cL, QQ, !0)
          },
          publishTideCharts: QQ => {
            gQ.l.GA(nL, QQ, !0)
          },
          publishRegulars: QQ => {
            gQ.l.GA(Fq, QQ, !0)
          },
          publishHiddenWaters: QQ => {
            gQ.l.GA(Dq, QQ, !0)
          },
          publishDialogue: QQ => {
            gQ.l.GA(vq, QQ, !0)
          },
          publishAutographs: QQ => {
            gQ.l.GA(Yq, QQ, !0)
          },
          onDailyRewardStarted: QQ => {
            UQ.playSound(DQ, QQ.day === OQ ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (QQ, FQ) => {
            UQ.playSound(DQ, "exp_collect", .35, 1 + .6 * QQ / (FQ - 1)), gQ.l.GA(Vw, QQ === FQ - 1)
          },
          onDailyRewardItemLanded: QQ => {
            UQ.playSound(DQ, "pickUp", .6, 1 + .15 * QQ)
          },
          onMailboxStarted: () => {
            UQ.playSound(DQ, "rpgMetalClick", .6, 1), UQ.playSound(DQ, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            UQ.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Jk.m,
          requestTracking: QQ => {
            UQ.sendCommand(`quests track ${QQ}`)
          },
          requestDungeonEnter: (QQ, FQ) => {
            UQ.sendCommand(`dungeonEnter ${QQ} ${FQ}`)
          },
          requestQuestJump: QQ => {
            UQ.sendCommand(`${TQ} jump ${QQ}`)
          },
          requestQuestArrive: (QQ, FQ) => {
            const wQ = `${TQ} arrive ${QQ}`;
            UQ.sendCommand(FQ ? `${wQ} complete` : wQ)
          },
          requestForge: QQ => {
            let {
              blade: FQ,
              guard: wQ,
              handle: LQ
            } = QQ;
            UQ.sendCommand(`forge ${FQ} ${wQ} ${LQ}`)
          },
          requestDialogue: () => {
            UQ.sendCommand("quests dialogue")
          },
          requestSmuggle: (QQ, FQ) => {
            UQ.sendCommand(`smuggle ${QQ} ${FQ}`)
          },
          requestKeepersChairAim: QQ => {
            UQ.sendCommand(`keeperschair-aim ${QQ}`)
          },
          requestReachLogOpen: () => {
            UQ.sendCommand("reachlog-open")
          },
          requestLampLight: QQ => {
            UQ.sendCommand(`${QQ}`)
          },
          requestTravel: QQ => {
            UQ.sendCommand(`map travel ${QQ.kind} ${QQ.id} ${QQ.requestId}`)
          }
        });
        let vQ, mQ, uQ, HQ, YQ, xQ, AQ, pQ, cQ, CQ, SQ, RQ, sQ;
        const IQ = new dk;
        let UQ, NQ = null;
        const KQ = mv[null !== wQ && void 0 !== wQ ? wQ : ""],
          aQ = (QQ, FQ) => {
            null !== KQ && void 0 !== KQ && KQ.raises(FQ) && UQ.setNametagOffset(QQ, KQ.rise)
          },
          VQ = new fk({
            getLocalHookPosition: () => {
              const QQ = hQ.getLocalHook();
              return null !== QQ && UQ.checkValid(QQ) ? UQ.Qp(QQ) : null
            },
            playParticles: QQ => {
              UQ.playParticleEffect(QQ)
            },
            vibrate: QQ => {
              PQ.f.play("fishBite", QQ)
            },
            now: () => performance.now()
          }),
          hQ = new lk({
            getLineOwner: QQ => UQ.checkValid(QQ) ? UQ.getLineOwner(QQ) : null,
            isLocalPlayer: QQ => UQ.isLocalPlayer(QQ),
            getHookPosition: QQ => {
              const [FQ, , wQ] = UQ.Qp(QQ);
              return [FQ, wQ]
            },
            isHushWaiting: () => {
              var QQ;
              return "waiting" === (null === (QQ = kQ.hushWait.getSnapshot()) || void 0 === QQ ? void 0 : QQ.phase)
            },
            onCastLanded: (QQ, FQ) => {
              kQ.tideCharts.castLanded(QQ, FQ)
            },
            onLocalHookSettled: () => {
              VQ.onLocalHookSettled()
            },
            onLocalWaitEnded: QQ => {
              VQ.onLocalWaitEnded(QQ)
            },
            now: () => performance.now()
          }),
          ZQ = new wv({
            now: () => performance.now(),
            playerPosition: () => UQ.checkValid(DQ) ? UQ.Qp(DQ) : null,
            play: (QQ, FQ, wQ, LQ, qQ, oQ) => UQ.playSound(DQ, QQ, FQ, 1, {
              BF: wQ,
              maxHearDist: LQ,
              refDistance: qQ
            }, oQ)
          }),
          yQ = new Map;
        let BQ;
        return {
          onCreate: QQ => {
            if (UQ = QQ, NQ = new qv.SkyblockEntityFacing(QQ, KQ ? aQ : null), kQ.portalTransit.resumeArrival(null !== wQ && void 0 !== wQ ? wQ : null), (null !== wQ && void 0 !== wQ ? wQ : LQ) === LQ) {
              let QQ = -1 / 0;
              BQ = gQ.l.subscribe("toggleMenu", (FQ => {
                const wQ = performance.now();
                "inventory|Workbench" !== FQ || "cross_to_hub" !== kQ.quests.getTrackedQuestId() || wQ - QQ < 1e4 || (QQ = wQ, UQ.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [LQ, qQ] of Object.entries(null !== (FQ = zQ[null !== wQ && void 0 !== wQ ? wQ : ""]) && void 0 !== FQ ? FQ : {})) {
              var FQ;
              yQ.set(LQ, new vv({
                hasChunk: (FQ, wQ, LQ) => QQ.isBlockInLoadedChunk(FQ, wQ, LQ),
                JG: (FQ, wQ, LQ) => QQ.blockIdToBlockName(QQ.getBlockId(FQ, wQ, LQ)),
                KU: (FQ, wQ, LQ, qQ) => {
                  QQ.KU(FQ, wQ, LQ, qQ)
                },
                playParticles: FQ => {
                  QQ.playParticleEffect(FQ)
                }
              }, qQ))
            }
            sQ = (0, Lv.g)((QQ => function(QQ) {
              return Object.hasOwn(hF, QQ) || QQ.startsWith("npc_")
            }(QQ) ? EF(QQ) : null)), kQ.resolveItemName = (FQ, wQ) => {
              const LQ = QQ.getItemStat(DQ, FQ, "displayName");
              return LQ && "object" === typeof LQ && "translationKey" in LQ ? wQ(LQ.translationKey, (0, sq.m)(LQ.params, hk.b.shown)) : "string" === typeof LQ ? wQ(LQ) : FQ
            }, kQ.quests.notifications.onShown = QQ => {
              "quest" === QQ ? UQ.playSound(DQ, "magicAccent1", 1, 1) : "skillLevel" === QQ ? UQ.playSound(DQ, "magicAccent1", 1, .6) : "landmark" === QQ ? UQ.playSound(DQ, "trumpetFlare", 1, .6) : "npcNote" === QQ ? UQ.playSound(DQ, "magicAccent2", .8, 1.1) : "started" === QQ ? UQ.playSound(DQ, (0, Tk.c)("bigDrumSwish"), 1, 1) : UQ.playSound(DQ, (0, Tk.c)("rpgHandleSmallLeather"), 1, 1)
            }, kQ.forge.onPartSelected = () => {
              UQ.playSound(DQ, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, kQ.forge.onOpened = () => {
              ! function(QQ) {
                QQ.preloadSounds([(0, Tk.c)("firecracker"), "fireBurn", "magicAccent2"])
              }(QQ)
            }, kQ.forge.onForgeStarted = (FQ, wQ, LQ) => zk(QQ, DQ, FQ, wQ, LQ), kQ.smuggler.onBought = () => {
              UQ.playSound(DQ, (0, Tk.c)("rpgHandleSmallLeather"), 1, 1), UQ.playSound(DQ, "chestOpen", .6, 1)
            }, kQ.compass.register(new tQ(kQ.map, !0)), kQ.compass.register(new tQ(kQ.map, !1)), kQ.compass.register(new MQ(kQ.map)), kQ.compass.register(new GQ((() => kQ.quests.getSnapshot().compassTarget)));
            for (const wQ of ["enemy", "npc"]) kQ.compass.register(new eQ(kQ.map, wQ, (FQ => QQ.checkValid(FQ) ? QQ.Qp(FQ) : void 0), (FQ => QQ.isAlive(FQ))))
          },
          onAfterRender: (QQ, FQ) => {
            const wQ = UQ.checkValid(DQ) ? UQ.Qp(DQ) : null;
            kQ.navigation.afterRender(wQ, performance.now(), FQ), kQ.glowtide.afterRender(wQ, FQ.cameraHeading), kQ.tideCharts.afterRender(wQ), hQ.afterRender()
          },
          onClose: () => {
            var QQ, FQ, wQ, LQ, qQ, oQ, DQ, bQ, xQ, tQ, eQ, MQ, GQ, iQ, WQ;
            BQ && gQ.l.unsubscribe(BQ), null === (QQ = sQ) || void 0 === QQ || QQ(), IQ.dispose(), ZQ.dispose(), null === (FQ = NQ) || void 0 === FQ || FQ.dispose(), hQ.dispose(), kQ.dispose(), null === (wQ = vQ) || void 0 === wQ || wQ(), null === (LQ = mQ) || void 0 === LQ || LQ(), null === (qQ = uQ) || void 0 === qQ || qQ(), null === (oQ = HQ) || void 0 === oQ || oQ(), null === (DQ = YQ) || void 0 === DQ || DQ(), null === (bQ = AQ) || void 0 === bQ || bQ(), null === (xQ = undefined) || void 0 === xQ || xQ(), null === (tQ = pQ) || void 0 === tQ || tQ(), null === (eQ = cQ) || void 0 === eQ || eQ(), null === (MQ = CQ) || void 0 === MQ || MQ(), null === (GQ = SQ) || void 0 === GQ || GQ(), null === (iQ = undefined) || void 0 === iQ || iQ(), null === (WQ = RQ) || void 0 === WQ || WQ()
          },
          onPlayerChangeBlock: (QQ, FQ, LQ, oQ, vQ, mQ) => {
            if (QQ === DQ && "Air" === mQ) {
              const QQ = UQ.getClientOption(DQ, "creative");
              kQ.skills.predictBlock([FQ, LQ, oQ], vQ, QQ);
              const mQ = function(QQ, FQ) {
                  if ("hub" === FQ || "farming_1" === FQ || "mining_1" === FQ) return !XQ.has(QQ) || "hub" !== FQ && "mining_1" !== FQ ? Object.hasOwn(jQ, QQ) ? jQ[QQ] : void 0 : lQ
                }(vQ, wQ),
                uQ = ("hub" === wQ || "mining_1" === wQ) && (qQ.zd.some((QQ => QQ === vQ)) || Object.hasOwn(fQ, vQ) || "mining_1" === wQ && "Block of Coal" === vQ);
              QQ || void 0 === mQ && !uQ || UQ.KU(FQ, LQ, oQ, null !== mQ && void 0 !== mQ ? mQ : lQ)
            }
          },
          onPlayerAttackEntity: (QQ, FQ) => {
            if (QQ !== DQ || "Player" !== UQ.getEntityType(FQ)) return;
            const [wQ, LQ, qQ] = UQ.Qp(FQ);
            UQ.burstParticlePreset("critical", [wQ, LQ + 1, qQ], 10)
          },
          onChangeBlockFail: QQ => {
            for (const {
                Vo: FQ
              }
              of QQ) kQ.skills.rejectBlock(FQ)
          },
          onReceivedMessageFromServer: (QQ, FQ) => {
            if ("skyblockGatedPortal" === QQ) {
              var wQ;
              const [QQ, LQ] = FQ;
              return void(null === (wQ = yQ.get(QQ)) || void 0 === wQ || wQ.bx(LQ))
            }
            if ("skyblockDailyReward" === QQ) return void kQ.dailyReward.bx(FQ);
            if ("skyblockMailbox" === QQ) return void kQ.mailbox.bx(FQ);
            if ("skyblockPortalTransit" === QQ) return void kQ.portalTransit.bx(FQ);
            if ("skyblockLoot" === QQ) return void IQ.bx(UQ, FQ);
            if ("skyblockLava" === QQ) return void ZQ.bx(FQ);
            if ("skyblockForge" === QQ) return void kQ.forge.bx(FQ);
            if ("skyblockMagmaward" === QQ) return void kQ.magmaward.bx(FQ);
            if ("skyblockGlowtide" === QQ) return void kQ.glowtide.bx(FQ);
            if ("skyblockGlowMeter" === QQ) return void kQ.glowMeter.bx(FQ);
            if ("skyblockHushWait" === QQ) return void kQ.hushWait.bx(FQ);
            if ("skyblockPassage" === QQ) {
              const QQ = FQ;
              return kQ.passage.bx(QQ), kQ.reachLog.receivePassagePhase(QQ.passagePhase), CQ ??= (0, iQ.u)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: kQ.passage.show
              }), void kQ.keepersChair.receivePassage({
                keepersChairPassagePhase: QQ.passagePhase,
                keepersChairPassageNextPhase: QQ.passageNextPhase,
                keepersChairPassageTurnsInMs: QQ.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === QQ) {
              const QQ = FQ;
              return kQ.tideCharts.bx(QQ), void(QQ.tideCharts.length > 0 && (SQ ??= (0, iQ.u)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: kQ.tideCharts.show
              })))
            }
            if (QQ === JQ.C) {
              var LQ;
              const {
                hookId: QQ,
                waiting: wQ
              } = FQ;
              return void hQ.hookWaiting(QQ, null !== (LQ = null === wQ || void 0 === wQ ? void 0 : wQ.remainingMs) && void 0 !== LQ ? LQ : null)
            }
            if ("skyblockBiteTell" === QQ) return void VQ.receiveTell(FQ);
            if ("skyblockSmuggler" === QQ) return void kQ.smuggler.bx(FQ);
            if ("skyblockKeepersChair" === QQ) return kQ.keepersChair.bx(FQ), void kQ.lampLight.setAtChair(kQ.keepersChair.isAtChair());
            if ("skyblockLampLight" === QQ) {
              const QQ = FQ;
              var qQ;
              if (kQ.lampLight.bx(QQ), QQ.lampLightReleasing) cQ ??= (0, iQ.u)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  kQ.lampLight.setRelease(!1)
                }
              });
              else null === (qQ = cQ) || void 0 === qQ || qQ(), cQ = void 0;
              return
            }
            if ("skyblockRegulars" === QQ) return void kQ.regulars.bx(FQ);
            if ("skyblockHiddenWaters" === QQ) return void kQ.hiddenWaters.bx(FQ);
            if ("skyblockReachLog" === QQ) return kQ.reachLog.bx(FQ), void(pQ ??= (0, iQ.u)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: UL
              },
              onClick: kQ.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === QQ) {
              for (const [QQ, wQ, LQ, qQ] of FQ) UQ.KU(QQ, wQ, LQ, qQ);
              return
            }
            if ("skyblockHud" === QQ) kQ.receiveHud(FQ);
            else if ("skyblockMap" === QQ) kQ.map.bx(FQ);
            else if (QQ === EQ.e) kQ.skills.bx(FQ);
            else if (QQ === rQ && "dialogue" === FQ.kind) kQ.dialogue.bx(FQ);
            else if (QQ === rQ) kQ.quests.bx(FQ);
            else if ("skyblockDungeons" === QQ) kQ.dungeons.bx(FQ);
            else if ("sbCollections" === QQ) kQ.collections.bx(FQ);
            else if ("skyblockQuestGraph" === QQ) kQ.questGraph.bx(FQ);
            else {
              if ("skyblockAutographs" !== QQ) return;
              kQ.autographs.bx(FQ)
            }
            if (!mQ && kQ.map.getSnapshot().enabled) {
              const QQ = (0, iQ.u)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: kQ.map.show
                }),
                FQ = (0, nQ.q)(kQ.map.show);
              mQ = () => {
                QQ(), FQ()
              }
            }!uQ && kQ.skills.getSnapshot().enabled && (uQ = (0, iQ.u)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: kQ.skills.show
            })), !AQ && kQ.collections.getSnapshot().enabled && (AQ = (0, iQ.u)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: kQ.collections.show
            })), !HQ && kQ.quests.getSnapshot().enabled && (HQ = (0, iQ.u)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: kQ.quests.show
            })), !RQ && kQ.autographs.getSnapshot().enabled && (RQ = (0, iQ.u)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: kQ.autographs.show
            }));
            const oQ = kQ.dungeons.getSnapshot().enabled;
            var DQ;
            (uQ || HQ || oQ) && xQ !== oQ && (xQ = oQ, null === (DQ = YQ) || void 0 === DQ || DQ(), YQ = (0, iQ.u)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: NF
              },
              disabled: !oQ,
              panel: !0,
              onClick: kQ.dungeons.show
            }));
            vQ || (vQ = (0, nQ.u)((0, WQ.createElement)(Uk, {
              controller: kQ
            }), {
              content: (0, WQ.createElement)(Nk, {
                controller: kQ
              }),
              onClose: kQ.close
            }))
          },
          fH: () => {
            var QQ;
            for (const FQ of yQ.values()) FQ.fH();
            IQ.fH(UQ), ZQ.fH(), null === (QQ = NQ) || void 0 === QQ || QQ.fH(), kQ.skills.fH(), kQ.quests.fH(), kQ.dailyReward.fH(), kQ.mailbox.fH(), kQ.map.fH()
          }
        }
      }
  },
  36021: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ,
      e: () => LQ
    });
    const LQ = "skyblockSkills",
      qQ = "skills_test_gym"
  },
  9127: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      d: () => DQ
    });
    const LQ = [{
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
      let FQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof QQ) {
        if (!Number.isFinite(QQ)) return "0";
        if (Math.abs(QQ) < 100) {
          const FQ = QQ < 0 ? "-" : "",
            wQ = Math.abs(QQ);
          return wQ >= 10 ? `${FQ}${wQ.toFixed(1).replace(/\.0$/,"")}` : `${FQ}${wQ.toFixed(2).replace(/\.?0+$/,"")}`
        }
        FQ = BigInt(Math.floor(QQ))
      } else FQ = QQ;
      const qQ = FQ < 0n ? -FQ : FQ,
        oQ = FQ < 0n ? "-" : "",
        DQ = qQ.toString();
      if (DQ.length <= wQ) return `${oQ}${DQ}`;
      const kQ = 3 * Math.floor((DQ.length - 1) / 3);
      if (kQ < 3) return `${oQ}${DQ}`;
      if (kQ > 3 * LQ.length) {
        const QQ = DQ[0],
          FQ = DQ.slice(1, 3).replace(/0+$/, "");
        return `${oQ}${FQ?`${QQ}.${FQ}`:QQ}e${DQ.length-1}`
      }
      const {
        threshold: vQ,
        suffix: mQ
      } = LQ[LQ.length - kQ / 3], uQ = qQ / vQ, HQ = Number(1000n * (qQ % vQ) / vQ), bQ = Number(uQ) + HQ / 1e3;
      let YQ;
      return YQ = bQ >= 100 ? Math.floor(bQ).toString() : bQ >= 10 ? bQ.toFixed(1).replace(/\.0$/, "") : bQ.toFixed(2).replace(/\.?0+$/, ""), `${oQ}${YQ}${mQ}`
    }
    const oQ = LQ.map((QQ => {
      let {
        threshold: FQ,
        suffix: wQ
      } = QQ;
      return {
        threshold: Number(FQ),
        suffix: wQ
      }
    })).filter((QQ => {
      let {
        threshold: FQ
      } = QQ;
      return Number.isFinite(FQ)
    }));

    function DQ(QQ) {
      const FQ = Math.abs(QQ),
        wQ = QQ < 0 ? "-" : "";
      for (const {
          threshold: LQ,
          suffix: qQ
        }
        of oQ)
        if (FQ >= LQ) {
          const QQ = FQ / LQ;
          if (QQ >= 1e3) return `${wQ}${FQ.toExponential(2).replace("e+","e")}`;
          let oQ;
          return oQ = QQ >= 100 ? Math.floor(QQ).toString() : QQ >= 10 ? QQ.toFixed(1).replace(/\.0$/, "") : QQ.toFixed(2).replace(/\.?0+$/, ""), `${wQ}${oQ}${qQ}`
        } return `${wQ}${FQ}`
    }
  },
  38085: (QQ, FQ, wQ) => {
    var LQ = {
      "./combat_1.png": 38090,
      "./dungeon_crumbling_crypt.png": 38093,
      "./dungeon_frozen_hollow.png": 38099,
      "./dungeon_wildwood_grove.png": 38103,
      "./dungeons.png": 38109,
      "./farming_1.png": 38116,
      "./fishing_1.png": 38124,
      "./hub.png": 38126,
      "./island.png": 38134,
      "./mining_1.png": 38140,
      "./mining_1_bridge.png": 38143,
      "./mining_1_gallery.png": 38148,
      "./mining_1_hollow.png": 38151,
      "./mining_1_village.png": 38156
    };

    function qQ(QQ) {
      var FQ = oQ(QQ);
      return wQ(FQ)
    }

    function oQ(QQ) {
      if (!wQ.o(LQ, QQ)) {
        var FQ = new Error("Cannot find module '" + QQ + "'");
        throw FQ.code = "MODULE_NOT_FOUND", FQ
      }
      return LQ[QQ]
    }
    qQ.keys = function() {
      return Object.keys(LQ)
    }, qQ.resolve = oQ, QQ.exports = qQ, qQ.id = 38085
  },
  38090: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38093: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38099: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38103: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38109: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38116: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38124: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38126: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38134: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38140: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38143: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38148: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38151: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38156: (QQ, FQ, wQ) => {
    QQ.exports = wQ.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18442: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20487: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22892: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24459: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26092: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26105: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38072: QQ => {
    QQ.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);