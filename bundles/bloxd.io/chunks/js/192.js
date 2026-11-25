export const id = 192;
export const ids = [52, 192];
export const modules = {
  39061: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      d: () => LG
    });
    const wG = new WeakMap;

    function SG(GG, bG) {
      return wG.set(GG, bG), GG
    }

    function LG(GG) {
      var bG;
      return null !== (bG = wG.get(GG)) && void 0 !== bG ? bG : null
    }
  },
  38957: (GG, bG, ZG) => {
    function wG(GG, bG, ZG) {
      var wG;
      const {
        width: SG,
        height: LG
      } = ZG, yG = null !== (wG = GG.text) && void 0 !== wG ? wG : GG, kG = (yG.x / 100 - .5) * SG, UG = (yG.y / 100 - .5) * LG, YG = SG / 2 - bG.x;
      if (null !== GG.text && Math.abs(kG) <= YG && UG >= bG.top - LG / 2 && UG <= LG / 2 - bG.bottom) return {
        x: yG.x,
        y: yG.y
      };
      const VG = Math.min(0 === kG ? 1 / 0 : YG / Math.abs(kG), UG > 0 ? (LG / 2 - bG.bottom) / UG : UG < 0 ? (bG.top - LG / 2) / UG : 1 / 0);
      return !Number.isFinite(VG) || VG < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + kG * VG / SG * 100,
        y: 50 + UG * VG / LG * 100
      }
    }
    ZG.d(bG, {
      c: () => wG
    })
  },
  38975: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => yG
    });
    const wG = 4,
      SG = 12e3,
      LG = 1e3;
    class yG {
      constructor() {
        let {
          limit: GG = wG,
          windowMs: bG = SG,
          spacingMs: ZG = LG,
          now: yG = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = GG, this.windowMs = bG, this.spacingMs = ZG, this.now = yG
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const GG of this.priority) GG.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const GG = this.now();
        this.sent.push(GG), this.lastSentAt = GG, this.schedule(), this.notify()
      }
      addPriority(GG) {
        return this.priority.add(GG), () => {
          this.priority.delete(GG)
        }
      }
      subscribe(GG) {
        return this.listeners.add(GG), () => {
          this.listeners.delete(GG)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const GG of this.priority)
          if (GG.waiting()) return !0;
        return !1
      }
      prune() {
        const GG = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= GG;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const GG = this.now(),
          bG = this.lastSentAt + this.spacingMs,
          ZG = Math.min(bG > GG ? bG : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ZG !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ZG - GG)))
      }
      notify() {
        for (const GG of this.listeners) GG()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38950: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      constructor(GG, bG, ZG) {
        this.xh = GG, this.beforeOpen = bG, this.afterClose = ZG, this.open = !1, this.pK = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.pK && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(GG) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(GG)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.pK = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.pK || (this.snapshot = this.buildSnapshot(), this.xh(this.snapshot))
      }
    }
  },
  39066: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      SkyblockEntityFacing: () => kG,
      needsSkyblockEntityFacing: () => yG
    });
    var wG = ZG(595),
      SG = ZG(4255),
      LG = ZG(39068);

    function yG(GG, bG) {
      if (GG.metaInfo === wG.b || "Iron Guardian" === GG.type || "Gold Guardian" === GG.type) return !0;
      if ("Pig" === GG.type) return "sitting" === GG.pose;
      if ("Person" !== GG.meshKind || void 0 === GG.meshOpts) return !1;
      let ZG = null === bG || void 0 === bG ? void 0 : bG.get(GG.meshOpts);
      if (void 0 === ZG) {
        var LG, yG;
        const wG = (0, SG.e)(GG);
        ZG = !1, "pig_napoleon" === (null === wG || void 0 === wG || null === (LG = wG.opts.textures) || void 0 === LG ? void 0 : LG.head) ? ZG = !0 : "npc_pig_head" === (null === wG || void 0 === wG || null === (yG = wG.opts.textures) || void 0 === yG ? void 0 : yG.head) && (ZG = "sitting" === wG.opts.pose || "sitting"), bG && (bG.size >= 256 && bG.clear(), bG.set(GG.meshOpts, ZG))
      }
      return "sitting" === ZG ? "sitting" === GG.pose : ZG
    }(0, LG.h)("skyblock", ((GG, bG) => {
      bG.setFacingTolerance(yG(GG) ? 0 : null)
    }));
    class kG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = GG, this.alsoVisit = bG, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = GG => {
          var bG;
          const ZG = this.api.getEntityInfo(GG);
          ZG && (yG(ZG, this.meshFacingCache) && (this.api.setFacingTolerance(GG, 0), this.nextFacing.add(GG)), null === (bG = this.alsoVisit) || void 0 === bG || bG.call(this, GG, ZG))
        }
      }
      Tp() {
        const {
          api: GG
        } = this, bG = this.nextFacing;
        GG.forEachEntity(this.visit);
        for (const ZG of this.facing) bG.has(ZG) || GG.setFacingTolerance(ZG, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = bG
      }
      dispose() {
        for (const GG of this.facing) this.api.setFacingTolerance(GG, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38941: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => YU
    });
    const wG = "island";
    var SG = ZG(352);
    const LG = (0, SG.Ib)([0, 0, -1]),
      yG = [{
        name: "S",
        bearing: (0, SG.Ib)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, SG.Ib)([-1, 0, 0])
      }, {
        name: "N",
        bearing: LG
      }, {
        name: "W",
        bearing: (0, SG.Ib)([1, 0, 0])
      }];

    function kG(GG, bG, ZG) {
      return [100 * (ZG.mapMaxX - GG) / (ZG.mapMaxX - ZG.mapMinX), 100 * (bG - ZG.mapMinZ) / (ZG.mapMaxZ - ZG.mapMinZ)]
    }

    function UG(GG, bG, ZG) {
      const SG = "local" === bG,
        LG = GG.background,
        yG = bG => LG ? kG(bG[0] - GG.mapOrigin[0], bG[2] - GG.mapOrigin[2], LG.bounds) : [50, 50],
        UG = (GG.insideDungeon ? [] : GG.landmarks).map((GG => {
          var bG, wG;
          return {
            id: GG.id,
            name: ZG(GG.visited && GG.nameKey ? null !== (bG = GG.mapLabelKey) && void 0 !== bG ? bG : GG.nameKey : "skyblockGame:mapUnknown"),
            icon: GG.visited && null !== (wG = GG.icon) && void 0 !== wG ? wG : "unknown",
            visited: GG.visited,
            current: !1,
            position: yG(GG.position),
            travelKind: "landmark",
            travelId: GG.id
          }
        })),
        VG = GG.zones.map((bG => {
          var wG;
          return {
            id: bG.id,
            name: ZG(bG.visited && bG.nameKey ? bG.nameKey : "skyblockGame:mapUnknown"),
            icon: bG.visited && null !== (wG = bG.icon) && void 0 !== wG ? wG : "unknown",
            visited: bG.visited,
            current: bG.id === GG.zoneId,
            position: bG.position,
            thumbnail: bG.visited ? bG.id : void 0,
            travelKind: "zone",
            travelId: bG.id
          }
        })),
        pG = GG.insideDungeon || !LG ? [] : GG.portals.map((GG => {
          var bG;
          return {
            id: GG.id,
            name: ZG(null !== (bG = GG.nameKey) && void 0 !== bG ? bG : "skyblockGame:mapUnknown"),
            icon: GG.visited ? "dungeons" === GG.destination ? "portal_orange" : "portal" : "unknown",
            visited: GG.visited,
            current: !1,
            position: yG(GG.position),
            colour: GG.colour,
            travelKind: "zone",
            travelId: GG.destination
          }
        })),
        fG = SG ? UG : VG,
        QG = fG.filter((GG => GG.visited)).length,
        KG = LG ? (LG.bounds.mapMaxX - LG.bounds.mapMinX) / (LG.bounds.mapMaxZ - LG.bounds.mapMinZ) : 2,
        hG = LG ? JSON.stringify([LG.bounds, GG.mapOrigin]) : "";
      return {
        local: SG,
        points: fG,
        portals: SG ? pG : [],
        progress: fG.length ? ZG("skyblockGame:mapDiscovered", {
          current: String(QG),
          total: String(fG.length)
        }) : null,
        percent: fG.length ? 100 * QG / fG.length : 0,
        canTravel: [...fG, ...SG ? pG : []].some((GG => GG.visited && !GG.current)),
        noLandmarks: SG && !GG.insideDungeon && 0 === UG.length,
        background: LG ? {
          imageKey: LG.imageKey,
          fallbackImageKey: GG.zoneId,
          geometryKey: hG,
          label: ZG(LG.labelKey),
          colour: LG.backgroundColour,
          ratio: KG
        } : null,
        connections: YG(GG.zones),
        minimap: LG ? {
          imageKey: LG.imageKey,
          fallbackImageKey: GG.zoneId,
          geometryKey: hG,
          label: ZG(LG.labelKey),
          colour: LG.backgroundColour,
          caption: ZG(GG.zoneId === wG ? "skyblockGame:zoneIsland" : LG.labelKey),
          width: (LG.bounds.mapMaxX - LG.bounds.mapMinX) / LG.minimapSpan * 100 + "%",
          height: (LG.bounds.mapMaxZ - LG.bounds.mapMinZ) / LG.minimapSpan * 100 + "%",
          markers: [...UG, ...pG]
        } : null
      }
    }

    function YG(GG) {
      const bG = new Set;
      return GG.flatMap((ZG => ZG.connections.flatMap((wG => {
        const SG = GG.find((GG => GG.id === wG)),
          LG = [ZG.id, wG].sort().join("|");
        return !SG || bG.has(LG) ? [] : (bG.add(LG), [{
          id: `${ZG.id}-${wG}`,
          start: ZG.position,
          end: SG.position,
          explored: ZG.visited && SG.visited
        }])
      }))))
    }
    var VG = ZG(38950);
    class pG extends VG.c {}
    const fG = "skyblockMapView";
    class QG extends pG {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(GG, wG, SG), this.requestTravel = bG, this.translate = ZG, this.now = LG, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = GG => {
          this.tab = GG, this.feedbackKey = "", this.emit()
        }, this.travel = (GG, bG) => {
          if (!this.map || this.pending || this.pK) return;
          const ZG = ("zone" === GG ? this.map.zones : this.map.landmarks).find((GG => GG.id === bG));
          if (ZG) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in ZG && !ZG.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (ZG.visited)
              if ("zone" === GG && bG === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const ZG = ++this.nextRequestId;
                this.pending = {
                  requestId: ZG,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: GG,
                  id: bG,
                  requestId: ZG
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
      setTranslator(GG) {
        this.translate = GG, this.emit()
      }
      hK(GG) {
        var bG;
        if (!this.pK)
          if ("entities" !== GG.kind)
            if ("open" !== GG.kind) {
              var ZG, wG;
              if ("snapshot" === GG.kind)(null === (ZG = GG.snapshot) || void 0 === ZG ? void 0 : ZG.zoneId) !== (null === (wG = this.map) || void 0 === wG ? void 0 : wG.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = GG.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === GG.kind) {
                var SG;
                GG.requestId === (null === (SG = this.pending) || void 0 === SG ? void 0 : SG.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (GG.requestId === (null === (bG = this.pending) || void 0 === bG ? void 0 : bG.requestId)) {
                var LG;
                this.pending = null, this.feedbackKey = null !== (LG = GG.errorKey) && void 0 !== LG ? LG : "", null === GG.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = GG.entities
      }
      Tp() {
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
          presentation: this.map ? UG(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const KG = 67.5 * Math.PI / 180;

    function hG(GG, bG) {
      const ZG = Math.abs(GG);
      if (ZG > KG || bG.trackHalfWidth <= 0) return null;
      const wG = bG.trackHalfWidth,
        SG = bG.screenHalfWidth / (bG.tanHalfFovX * Math.max(.5, Math.cos(bG.pitch))),
        LG = Math.min(Math.atan(.6 * wG / SG), .75 * KG),
        yG = SG * Math.tan(LG);
      let kG;
      if (ZG <= LG) kG = SG * Math.tan(ZG);
      else {
        const GG = KG - LG,
          bG = Math.max(0, SG * GG / (Math.cos(LG) ** 2 * (wG - yG)) - 1),
          UG = (ZG - LG) / GG;
        kG = yG + (wG - yG) * (1 + bG) * UG / (1 + bG * UG)
      }
      return 50 + Math.sign(GG) * kG * 50 / wG
    }
    class dG {
      constructor(GG, bG) {
        this.map = GG, this.visited = bG, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = bG ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const GG = this.map.getSnapshot().map;
        return !GG || GG.insideDungeon ? [] : GG.landmarks.filter((GG => GG.visited === this.visited)).map((GG => {
          var bG, ZG;
          return {
            id: `landmark:${GG.id}`,
            position: GG.position,
            icon: null !== (bG = GG.icon) && void 0 !== bG ? bG : "unknown",
            nameKey: null !== (ZG = GG.nameKey) && void 0 !== ZG ? ZG : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class JG {
      constructor(GG, bG, ZG, wG) {
        this.map = GG, this.kind = bG, this.position = ZG, this.alive = wG, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = bG, this.range = "enemy" === bG ? 48 : 64, this.limit = 12
      }
      HJ(GG) {
        if ("enemy" !== this.kind || this.alive(GG.qw)) return this.position(GG.qw)
      }
      getPoints() {
        const GG = [];
        for (const wG of this.map.getEntities()) {
          if (wG.kind !== this.kind || "enemy" === this.kind && !this.alive(wG.compassEntityId)) continue;
          const SG = this.position(wG.compassEntityId);
          var bG, ZG;
          if (SG) GG.push({
            id: `${this.kind}:${wG.compassEntityId}`,
            qw: wG.compassEntityId,
            kind: this.kind,
            icon: null !== (bG = wG.icon) && void 0 !== bG ? bG : wG.npcSkin ? `npc_${wG.npcSkin}` : this.kind,
            displayName: wG.displayName,
            position: SG,
            nameKey: null !== (ZG = wG.nameKey) && void 0 !== ZG ? ZG : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return GG
      }
    }
    class rG {
      constructor(GG) {
        this.map = GG, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const GG = this.map.getSnapshot().map;
        return !GG || GG.insideDungeon ? [] : GG.portals.map((GG => {
          var bG;
          return {
            id: "portal:" + GG.id,
            kind: "portal",
            position: GG.position,
            nameKey: null !== (bG = GG.nameKey) && void 0 !== bG ? bG : "skyblockGame:compassUnvisitedZone",
            icon: GG.visited ? "dungeons" === GG.destination ? "portal_orange" : "portal" : "unknown",
            colour: GG.colour
          }
        }))
      }
    }
    class zG {
      constructor(GG) {
        this.target = GG, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const GG = this.target();
        return GG ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: GG.position,
          nameKey: GG.nameKey
        }] : []
      }
    }

    function EG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG.position;
      const LG = wG[0] - bG[0],
        yG = wG[2] - bG[2];
      return {
        ...GG,
        position: wG,
        offset: SG.c.computeShortestRotation(ZG, (0, SG.Ib)([LG, 0, yG])),
        distance: Math.hypot(LG, wG[1] - bG[1], yG)
      }
    }
    let oG;

    function XG(GG, bG) {
      var ZG;
      return (null === (ZG = oG) || void 0 === ZG ? void 0 : ZG.locale) !== bG && (oG = {
        locale: bG,
        near: new Intl.NumberFormat(bG, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(bG, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (GG < 10 ? oG.near : oG.far).format(GG)
    }
    class uG {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(GG) {
        return this.providers.set(GG.id, GG), this.refreshAt = 0, () => {
          this.providers.get(GG.id) === GG && (this.providers.delete(GG.id), this.refreshAt = 0)
        }
      }
      frame(GG, bG, ZG) {
        if (ZG >= this.refreshAt) {
          this.refreshAt = ZG + 200, this.candidates = [];
          for (const bG of this.providers.values()) {
            if (!bG.enabled) continue;
            const ZG = bG.getPoints().map((bG => {
              const ZG = bG.position;
              return {
                point: bG,
                distance: Math.hypot(ZG[0] - GG[0], ZG[1] - GG[1], ZG[2] - GG[2])
              }
            })).filter((GG => GG.distance <= bG.range)).sort(((GG, bG) => GG.distance - bG.distance)).slice(0, bG.limit);
            for (const {
                point: GG
              }
              of ZG) this.candidates.push({
              provider: bG,
              point: GG
            })
          }
        }
        const wG = [];
        for (const {
            point: SG,
            provider: LG
          }
          of this.candidates) {
          if (!LG.enabled) continue;
          const ZG = LG.HJ ? LG.HJ(SG) : SG.position;
          if (ZG) {
            const LG = EG(SG, GG, bG, ZG);
            Math.abs(LG.offset) <= KG && wG.push(LG)
          }
        }
        return wG
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var iG = ZG(36955),
      CG = ZG(51);
    const WG = [{
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
      mG = WG.length;

    function IG(GG) {
      return GG >= mG ? 1 : GG + 1
    }
    const FG = "skyblockQuests",
      vG = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      aG = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function cG(GG) {
      let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const ZG = Math.max(0, Math.floor(GG)),
        wG = Math.floor(ZG % 1e3 / 100),
        SG = Math.floor(ZG / 1e3),
        LG = SG % 60,
        yG = Math.floor(SG / 60),
        kG = yG % 60,
        UG = Math.floor(yG / 60),
        YG = GG => GG < 10 ? `0${GG}` : String(GG),
        VG = bG ? `.${wG}` : "";
      return UG > 0 ? `${UG}:${YG(kG)}:${YG(LG)}${VG}` : `${kG}:${YG(LG)}${VG}`
    }
    const lG = "devquests",
      jG = "none",
      PG = {
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
      MG = "Compressed Messy Stone",
      AG = {
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
      sG = ["Stone", "Diorite", "Andesite", "Granite"],
      qG = new Set(sG),
      nG = (Object.keys(AG), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const gG = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function eG(GG, bG) {
      const ZG = Math.floor(5 * GG / (2 * bG + 1));
      return Math.min(4, Math.max(0, ZG))
    }
    var RG = ZG(1198);
    var TG = ZG(36693);
    var HG = ZG(36951),
      tG = ZG(19),
      DG = ZG(8926);
    const NG = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      OG = 1e3;

    function xG(GG) {
      return Math.max(0, GG)
    }

    function BG(GG) {
      return 1 + .01 * xG(GG)
    }

    function Gb(GG) {
      return 1 + .005 * xG(GG)
    }

    function bb(GG) {
      return 1 + .005 * xG(GG)
    }

    function Zb(GG) {
      return .01 * xG(GG)
    }

    function wb(GG) {
      return 150 / (150 + xG(GG))
    }

    function Sb(GG) {
      return 1 + .002 * xG(GG)
    }

    function Lb(GG) {
      return Math.round(10 * GG) / 10
    }

    function yb(GG, bG) {
      switch (GG) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Lb(100 * (Gb(bG) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Lb(100 * (BG(bG) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Lb(100 * (bb(bG) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Lb(100 * Zb(bG))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Lb(100 * (1 - wb(bG)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Lb(100 * (Sb(bG) - 1))
          }
      }
    }

    function kb(GG) {
      return "farming" === GG ? 200 : 100
    }

    function Ub(GG, bG) {
      if (!Number.isSafeInteger(GG) || GG < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const ZG = kb(bG),
        wG = GG => function(GG, bG) {
          return kb(GG) * bG * (bG + 1) / 2
        }(bG, GG);
      let SG = Math.min(OG, Math.floor((Math.sqrt(8 * GG / ZG + 1) - 1) / 2));
      return SG < OG && wG(SG + 1) <= GG ? SG++ : wG(SG) > GG && SG--, {
        totalXp: GG,
        level: SG,
        xpIntoLevel: GG - wG(SG),
        xpForNextLevel: SG === OG ? null : ZG * (SG + 1)
      }
    }
    const Yb = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Vb(GG) {
      return Yb.has(GG)
    }
    const pb = new Set(SG.xb);

    function fb(GG) {
      return pb.has(GG)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const Qb = {
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
      Kb = {
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
      hb = {
        ...Kb,
        ...Object.fromEntries(Object.entries(nG).map((GG => {
          let [bG, ZG] = GG;
          return [bG, 9 * Kb[ZG]]
        })))
      },
      db = {
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
      Jb = {
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
    const rb = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      zb = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Eb(GG) {
      return `rgb(${zb[GG].join(", ")})`
    }

    function ob(GG, bG, ZG) {
      if (!ZG) return GG(bG);
      const wG = {};
      for (const [SG, LG] of Object.entries(ZG)) wG[SG] = "string" === typeof LG ? LG : GG(LG.translationKey);
      return GG(bG, wG)
    }
    class Xb {
      constructor(GG, bG) {
        this.now = GG, this.getJournal = bG, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.Ik = !1, this.onShown = () => {}
      }
      enqueue(GG) {
        const bG = ub(GG);
        if (bG) this.pending.push(GG);
        else {
          const bG = this.pending.findIndex(ub);
          this.pending.splice(-1 === bG ? this.pending.length : bG, 0, GG)
        }
        return (null === this.current || null !== this.followUp && !bG) && (this.advance(), !0)
      }
      setHeld(GG) {
        return this.Ik = GG, !GG && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Tp() {
        const GG = this.getJournal(),
          bG = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === bG ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === bG || void 0 === bG ? void 0 : bG.kind) && GG && GG.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === bG || void 0 === bG ? void 0 : bG.kind)) {
          const GG = this.findFollowUp(this.current);
          if ("step" !== (null === GG || void 0 === GG ? void 0 : GG.kind) || GG.questId !== bG.questId || GG.step.id !== bG.step.id) return this.showFollowUp(GG, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(GG, bG, ZG) {
        var wG, SG, LG, yG;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, GG, ZG);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, GG);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, GG, bG);
        const {
          questCompletionKind: kG,
          questCompletionNameKey: UG
        } = this.current, YG = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, VG = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, pG = "step" === (null === (wG = this.followUp) || void 0 === wG ? void 0 : wG.kind) ? this.followUp : null, fG = "explore" === (null === (SG = this.followUp) || void 0 === SG ? void 0 : SG.kind);
        let QG;
        return QG = fG ? GG("skyblockGame:questExploreTitle") : null !== pG ? "quest" === kG ? GG("skyblockGame:questNextQuestTitle", {
          quest: GG(pG.questNameKey)
        }) : GG("skyblockGame:questNextStepTitle") : GG("started" === kG ? "skyblockGame:questStartedTitle" : "quest" === kG ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? kG : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: QG,
          name: fG ? bG("skyblockGame:questExploreName") : null !== pG ? ob(bG, pG.step.nameKey, pG.step.nameParams) : ob(bG, UG, YG),
          description: fG ? bG("skyblockGame:questExploreDescription") : null === pG ? null : ob(bG, pG.step.descriptionKey, pG.step.descriptionParams),
          reward: null === this.followUp && VG > 0 ? bG("skyblockGame:questCoinRewardSuffix", {
            amount: VG.toLocaleString(ZG)
          }) : null,
          iconItem: null !== (LG = null === pG || void 0 === pG ? void 0 : pG.step.questIconItem) && void 0 !== LG ? LG : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== pG && (null === (yG = this.getJournal()) || void 0 === yG ? void 0 : yG.trackedQuestId) === pG.questId ? pG.step.nameKey : null
        }
      }
      getSkillLevelView(GG, bG, ZG) {
        let {
          skill: wG,
          beforeLevel: SG,
          level: LG
        } = GG;
        const yG = yb(wG, SG),
          kG = yb(wG, LG);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: bG(`skyblockGame:${wG}`),
          name: bG("skyblockGame:skillLevelUp", {
            to: LG.toLocaleString(ZG)
          }),
          description: yG.percent === kG.percent ? null : bG(`${kG.translationKey}Change`, {
            before: yG.percent.toLocaleString(ZG),
            after: kG.percent.toLocaleString(ZG)
          }),
          reward: null,
          iconItem: rb[wG],
          accent: Eb(wG),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(GG, bG) {
        let {
          landmarkNameKey: ZG
        } = GG;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: bG("skyblockGame:landmarkDiscovered"),
          name: bG(ZG),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(GG, bG, ZG) {
        let {
          titleKey: wG,
          textKey: SG,
          params: LG = {},
          nameKeys: yG = {},
          iconItem: kG = null
        } = GG;
        const UG = {
          ...LG
        };
        for (const [YG, VG] of Object.entries(yG)) UG[YG] = bG(VG);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: bG(wG),
          name: ZG(SG, UG),
          description: null,
          reward: null,
          iconItem: kG,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var GG;
        if (null !== this.followUp) return 5600;
        switch (null === (GG = this.current) || void 0 === GG ? void 0 : GG.questCompletionKind) {
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
      showFollowUp(GG, bG) {
        null === GG || this.Ik ? this.advance() : (this.followUp = GG, this.token++, this.shownAt = this.now(), this.expiresAt = null !== bG && void 0 !== bG ? bG : this.shownAt + this.durationMs())
      }
      findFollowUp(GG) {
        var bG;
        const ZG = this.getJournal();
        if (!ZG || this.hasPendingQuestPopup() || ub(GG)) return null;
        const wG = "started" === GG.questCompletionKind ? ZG.active.some((bG => bG.id === GG.questCompletionQuestId)) : "quest" === GG.questCompletionKind ? ZG.completed.some((bG => bG.id === GG.questCompletionQuestId)) : [...ZG.active, ...ZG.completed].some((bG => bG.id === GG.questCompletionQuestId && bG.subquests.some((bG => bG.id === GG.questCompletionStepId && "completed" === bG.status))));
        if (!wG) return null;
        if ("quest" === GG.questCompletionKind && 0 === ZG.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const SG = ZG.active.find((GG => GG.id === ZG.trackedQuestId)),
          LG = null !== (bG = null === SG || void 0 === SG ? void 0 : SG.subquests.find((GG => "ready" === GG.status))) && void 0 !== bG ? bG : null === SG || void 0 === SG ? void 0 : SG.subquests.find((GG => "active" === GG.status));
        return LG ? {
          kind: "step",
          questId: SG.id,
          questNameKey: SG.nameKey,
          step: LG
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((GG => !ub(GG)))
      }
      advance() {
        var GG;
        this.current = this.Ik ? null : null !== (GG = this.pending.shift()) && void 0 !== GG ? GG : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function ub(GG) {
      return ib(GG.questCompletionKind)
    }

    function ib(GG) {
      return "skillLevel" === GG || "landmark" === GG || "npcNote" === GG
    }
    var Cb = ZG(38957);
    const Wb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      mb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Ib = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Fb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      vb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var ab = ZG(38966);
    var cb = ZG(38971);
    const lb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      jb = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Pb = ZG.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Mb = ZG.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      Ab = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var sb = ZG(18419),
      qb = ZG(20547),
      nb = ZG(22983),
      gb = ZG(24600),
      eb = ZG(26300);
    const Rb = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: sb,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: qb,
      cow: vb,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: ZG(26318),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: Wb,
      fishing_1: Wb,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: mb,
      guardian_iron: Ib,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: nb,
      mines: gb,
      mining_1: gb,
      npc: Fb,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: vb,
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
      npc_gold_guardian: mb,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Ib,
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
      npc_portal_mage: ab,
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: cb,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: lb,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Pb,
      quest_talk: Mb,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: Ab,
      watermelon: eb
    };

    function Tb(GG, bG) {
      const ZG = document.createElement("img");
      return ZG.className = bG, ZG.src = GG, ZG.alt = "", ZG.draggable = !1, ZG
    }

    function Hb(GG) {
      var bG;
      const ZG = null !== (bG = Rb[GG]) && void 0 !== bG ? bG : GG.startsWith("npc_") ? Fb : Ab;
      if ("portal" !== GG) return Tb(ZG, "SkyblockMapIcon");
      const wG = document.createElement("span");
      wG.className = "SkyblockMapIcon Portal";
      const SG = document.createElement("span");
      return SG.className = "SkyblockMapIconTint", SG.style.maskImage = SG.style.webkitMaskImage = `url("${jb}")`, wG.append(Tb(ZG, "SkyblockMapIconLayer"), SG, Tb(jb, "SkyblockMapIconLayer SkyblockMapIconShade")), wG
    }
    var tb = ZG(38925),
      Db = ZG(4265);
    const Nb = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function Ob(GG) {
      const bG = new Db.f(GG);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Nb.map((GG => {
          let {
            lobes: ZG,
            amount: wG
          } = GG;
          return {
            lobes: ZG[Math.floor(bG.next() * ZG.length)],
            amount: wG[0] + bG.next() * (wG[1] - wG[0]),
            phase: 2 * bG.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function xb(GG) {
      let {
        radius: bG,
        squareness: ZG,
        wobbles: wG,
        samples: SG
      } = GG;
      const LG = [];
      for (let yG = 0; yG < SG; yG++) {
        const GG = 2 * Math.PI * yG / SG,
          kG = Math.cos(GG),
          UG = Math.sin(GG),
          YG = bG * (Math.abs(kG) ** ZG + Math.abs(UG) ** ZG) ** (-1 / ZG) * wG.reduce(((bG, ZG) => {
            let {
              lobes: wG,
              amount: SG,
              phase: LG
            } = ZG;
            return bG + SG * Math.sin(wG * GG + LG)
          }), 1);
        LG.push(`${(50+YG*kG).toFixed(2)} ${(50+YG*UG).toFixed(2)}`)
      }
      return `M${LG.join("L")}Z`
    }
    const Bb = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class GZ {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.pK = !1, this.mountCompass = GG => {
          var bG;
          if (null === (bG = this.stopLayout) || void 0 === bG || bG.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !GG || this.pK) return;
          const ZG = GG.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: GG,
            track: ZG,
            label: GG.querySelector(".SkyblockCompassLabel")
          }, ZG.replaceChildren();
          for (let SG = 0; SG < 4; SG++) {
            const GG = document.createElement("span");
            GG.className = "SkyblockCompassCardinal", ZG.appendChild(GG), this.cardinals.push(GG)
          }
          const wG = (0, tb.c)(Bb, [GG], this.layout);
          this.stopLayout = () => {
            wG(), ZG.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = GG => {
          this.terrain = this.pK ? null : GG, this.render(this.frame)
        }, this.mountMinimapSearchArea = GG => {
          this.mountSearchArea("minimap", GG)
        }, this.mountMapSearchArea = GG => {
          this.mountSearchArea("map", GG)
        }, this.mountPlayer = GG => {
          this.player = this.pK ? null : GG, this.render(this.frame)
        }, this.mountWaypoint = GG => {
          var bG, ZG;
          if (null === (bG = this.stopWaypoint) || void 0 === bG || bG.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !GG || this.pK) return;
          const wG = GG.querySelector(".SkyblockQuestWaypointMarker");
          wG.replaceChildren(Hb("quest")), this.markerIcon = "quest", this.waypoint = {
            root: GG,
            marker: wG,
            clip: GG.querySelector(".SkyblockQuestWaypointTextClip"),
            text: GG.querySelector(".SkyblockQuestWaypointText"),
            label: GG.querySelector(".SkyblockQuestWaypointLabel"),
            distance: GG.querySelector(".SkyblockQuestWaypointDistance"),
            hint: GG.querySelector(".SkyblockQuestWaypointHint")
          };
          const SG = () => {
              this.waypointMarkerSize = {
                width: wG.offsetWidth,
                height: wG.offsetHeight
              }, this.waypointInset = {
                x: wG.offsetWidth / 2 + 8,
                top: wG.offsetHeight + 8,
                bottom: 8
              }
            },
            LG = new ResizeObserver((() => {
              SG(), this.render(this.frame)
            }));
          LG.observe(wG, {
            box: "border-box"
          });
          const yG = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", yG), null === (ZG = window.visualViewport) || void 0 === ZG || ZG.addEventListener("resize", yG), this.stopWaypoint = () => {
            var GG;
            LG.disconnect(), window.removeEventListener("resize", yG), null === (GG = window.visualViewport) || void 0 === GG || GG.removeEventListener("resize", yG)
          }, yG(), SG(), this.render(this.frame)
        }, this.mountWaypointOrigin = GG => {
          var bG;
          if (null === (bG = this.stopWaypointOrigin) || void 0 === bG || bG.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = GG && !this.pK ? Number(GG.dataset.notificationToken) : null, GG && !this.pK && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const bG = {
              nameKey: GG.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = bG;
            const ZG = () => {
                const ZG = GG.getBoundingClientRect();
                bG.x = (ZG.left + ZG.width / 2) / window.innerWidth * 100, bG.y = (ZG.top + ZG.height / 2) / window.innerHeight * 100
              },
              wG = new ResizeObserver(ZG);
            wG.observe(GG.parentElement), wG.observe(GG), window.addEventListener("resize", ZG), this.stopWaypointOrigin = () => {
              wG.disconnect(), window.removeEventListener("resize", ZG)
            }, ZG()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const GG = this.compass.root,
            bG = getComputedStyle(GG),
            ZG = getComputedStyle(document.documentElement),
            wG = parseFloat(ZG.fontSize),
            SG = parseFloat(bG.getPropertyValue("--compass-icon-size")) * wG,
            LG = "1" === bG.getPropertyValue("--compass-fit-top").trim(),
            yG = LG ? 1 : 8,
            kG = Array.from(document.querySelectorAll(Bb), (GG => {
              var bG;
              return (null !== (bG = GG.querySelector(".MiddleTextTop")) && void 0 !== bG ? bG : GG).getBoundingClientRect()
            })).filter((GG => GG.width > 0 && GG.height > 0));
          let UG = (parseFloat(ZG.getPropertyValue("--notchTop")) || 0) + yG,
            YG = "";
          if (LG) {
            const bG = window.innerWidth / 2,
              ZG = GG.getBoundingClientRect().height,
              LG = [UG, ...kG.map((GG => Math.max(UG, GG.bottom + yG)))].sort(((GG, bG) => GG - bG));
            for (const GG of LG) {
              let LG = bG - 8;
              for (const wG of kG) wG.bottom + yG <= GG || wG.top >= GG + ZG + yG || (LG = Math.min(LG, wG.right <= bG ? bG - wG.right - 8 : wG.left - bG - 8));
              const VG = 2 * LG - SG;
              if (VG >= 16 * wG) {
                YG = `${VG}px`, UG = GG;
                break
              }
            }
          }
          GG.style.maxWidth !== YG && (GG.style.maxWidth = YG);
          const VG = GG.getBoundingClientRect(),
            pG = this.compassSize.trackHalfWidth;
          if (VG.width > 0) {
            const GG = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: GG.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * SG / GG.width
          }
          if (!YG)
            for (const fG of kG) fG.right > VG.left - 8 && fG.left < VG.right + 8 && (UG = Math.max(UG, fG.bottom + yG));
          GG.style.top = `${UG}px`, this.compassSize.trackHalfWidth !== pG && this.render(this.frame)
        }
      }
      mountSearchArea(GG, bG) {
        this.searchAreas[GG] = this.pK ? null : bG, this.render(this.frame)
      }
      render(GG) {
        if (this.pK) return;
        if (this.frame = GG, this.compass && (bZ(this.compass.root, !GG), GG)) {
          const bG = this.compassSize.trackHalfWidth / 50;
          GG.compass.cardinals.forEach(((GG, ZG) => {
            const wG = this.cardinals[ZG];
            wG.textContent !== GG.name && (wG.textContent = GG.name), bZ(wG, GG.hidden), wG.style.translate = GG.left * bG + "px"
          }));
          const ZG = new Set;
          GG.compass.markers.forEach(((wG, SG) => {
            var LG;
            ZG.add(wG.id);
            let yG = this.markers.get(wG.id);
            yG || (yG = document.createElement("span"), yG.className = "SkyblockCompassMarker", this.markers.set(wG.id, yG), this.compass.track.appendChild(yG)), yG.dataset.icon !== wG.icon && (yG.dataset.icon = wG.icon, yG.replaceChildren(Hb(wG.icon))), yG.style.color = null !== (LG = wG.colour) && void 0 !== LG ? LG : "", yG.style.translate = wG.left * bG + "px", yG.style.zIndex = String(GG.compass.markers.length - SG), yG.title !== wG.name && (yG.title = wG.name)
          }));
          for (const [GG, wG] of this.markers) ZG.has(GG) || (wG.remove(), this.markers.delete(GG));
          this.compass.label.textContent !== GG.compass.label && (this.compass.label.textContent = GG.compass.label)
        }
        this.terrain && (bZ(this.terrain, !(null !== GG && void 0 !== GG && GG.minimap)), null !== GG && void 0 !== GG && GG.minimap && (this.terrain.style.transform = GG.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", GG.minimap.iconRotation)));
        const bG = null === GG || void 0 === GG ? void 0 : GG.searchArea;
        for (const ZG of [this.searchAreas.minimap, this.searchAreas.map])
          if (ZG && (bZ(ZG, !bG), bG)) {
            if (this.searchAreaPath.seed !== bG.shapeSeed && (this.searchAreaPath = {
                seed: bG.shapeSeed,
                d: xb(Ob(bG.shapeSeed))
              }), ZG.dataset.shapeSeed !== bG.shapeSeed) {
              ZG.dataset.shapeSeed = bG.shapeSeed;
              for (const GG of ZG.querySelectorAll("path")) GG.setAttribute("d", this.searchAreaPath.d)
            }
            ZG.style.left = `${bG.left}%`, ZG.style.top = `${bG.top}%`, ZG.style.width = `${bG.width}%`, ZG.style.height = `${bG.height}%`
          } if (this.player && (bZ(this.player, !(null !== GG && void 0 !== GG && GG.player) || GG.player.hidden), null !== GG && void 0 !== GG && GG.player && (this.player.style.left = `${GG.player.left}%`, this.player.style.top = `${GG.player.top}%`, this.player.style.setProperty("--map-player-rotation", GG.player.rotation))), this.waypoint) {
          const {
            root: bG,
            marker: ZG,
            clip: wG,
            text: SG,
            label: LG,
            distance: yG,
            hint: kG
          } = this.waypoint, UG = !(null !== GG && void 0 !== GG && GG.waypoint) || null !== GG.waypoint.popupToken && GG.waypoint.popupToken !== this.waypointOriginToken;
          bZ(bG, UG);
          let YG = 1;
          const VG = this.waypointLaunch;
          if (!UG && VG && GG.waypoint.nameKey === VG.nameKey) {
            const GG = performance.now();
            VG.startedAt ??= GG, YG = Math.min(1, Math.max(0, (GG - VG.startedAt - 450) / 1e3)), ZG.style.opacity = String(Math.min(1, (GG - VG.startedAt) / 150)), 1 === YG && (this.waypointLaunch = null)
          } else ZG.style.opacity = "", VG && null !== VG.startedAt && (this.waypointLaunch = null);
          if (bG.classList.toggle("Launching", YG < 1), null !== GG && void 0 !== GG && GG.waypoint) {
            const bG = this.waypointInset,
              UG = "quest_talk" === GG.waypoint.markerIcon ? function(GG, bG, ZG) {
                if (!GG.text || null === GG.blockHeight || 0 === GG.nearness) return GG;
                const wG = GG.blockHeight / 100 * ZG.height,
                  SG = -GG.nearness * (ZZ * wG + bG.width / 2),
                  LG = GG.nearness * (wZ * wG + bG.height / 2);
                return {
                  ...GG,
                  text: {
                    x: GG.text.x + SG / ZG.width * 100,
                    y: GG.text.y + LG / ZG.height * 100
                  }
                }
              }(GG.waypoint, this.waypointMarkerSize, this.viewport) : GG.waypoint,
              pG = (0, Cb.c)(UG, bG, this.viewport),
              fG = YG * YG * (3 - 2 * YG),
              QG = YG < 1 ? VG.x + (pG.x - VG.x) * fG : pG.x,
              KG = YG < 1 ? VG.y + (pG.y - VG.y) * fG : pG.y;
            ZG.style.translate = `${QG}vw ${KG}vh`, wG.style.clipPath = `inset(${bG.top}px ${bG.x}px ${bG.bottom}px)`, bZ(SG, YG < 1 || !GG.waypoint.text), SG.style.opacity = String(1 - GG.waypoint.nearness), GG.waypoint.text && (SG.style.translate = `${GG.waypoint.text.x}vw ${GG.waypoint.text.y}vh`), LG.textContent !== GG.waypoint.name && (LG.textContent = GG.waypoint.name), this.markerIcon !== GG.waypoint.markerIcon && (this.markerIcon = GG.waypoint.markerIcon, ZG.replaceChildren(Hb(this.markerIcon))), yG.textContent !== GG.waypoint.distance && (yG.textContent = GG.waypoint.distance), bZ(kG, null === GG.waypoint.hint), null !== GG.waypoint.hint && kG.textContent !== GG.waypoint.hint && (kG.textContent = GG.waypoint.hint)
          }
        }
      }
      dispose() {
        var GG, bG;
        this.mountWaypointOrigin(null), this.render(null), null === (GG = this.stopLayout) || void 0 === GG || GG.call(this), this.stopLayout = null, null === (bG = this.stopWaypoint) || void 0 === bG || bG.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.pK = !0
      }
    }

    function bZ(GG, bG) {
      GG.hidden !== bG && (GG.hidden = bG)
    }
    const ZZ = .55,
      wZ = .6;
    const SZ = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class LZ {
      constructor(GG, bG, ZG, wG) {
        this.map = GG, this.quests = bG, this.compass = ZG, this.display = new GZ, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.pK = !1, this.snapshot = null, this.texts = new Map, this.translate = wG
      }
      setTranslator(GG, bG) {
        this.translate = GG, this.locale = bG, this.metresFormat = new Intl.NumberFormat(bG), this.texts.clear()
      }
      translateCached(GG, bG) {
        const ZG = void 0 === bG ? GG : `${GG} ${bG}`;
        let wG = this.texts.get(ZG);
        return void 0 === wG && (this.texts.size >= 500 && this.texts.clear(), wG = this.translate(GG, void 0 === bG ? void 0 : {
          distance: bG
        }), this.texts.set(ZG, wG)), wG
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(GG, bG, ZG) {
        if (this.pK) return;
        if (!GG) return this.snapshot = null, void this.display.render(null);
        const wG = this.map.getSnapshot().map,
          UG = ZG.cameraHeading,
          YG = {
            ...this.display.compassSize,
            tanHalfFovX: ZG.tanHalfFovX,
            pitch: ZG.cameraPitch
          },
          VG = [];
        if (wG)
          for (const SG of this.compass.frame(GG, UG, bG)) {
            const GG = hG(SG.offset, YG);
            null !== GG && VG.push({
              ...SG,
              left: GG
            })
          }
        const pG = function(GG, bG) {
            const ZG = [],
              wG = GG => "quest" === GG.kind ? GG.distance - 1 : GG.distance,
              SG = [...GG].sort(((GG, bG) => wG(GG) - wG(bG) || GG.id.localeCompare(bG.id)));
            for (const LG of SG) {
              let GG = !1;
              if ("quest" !== LG.kind)
                for (const wG of ZG)
                  if (Math.abs(wG.left - LG.left) < bG) {
                    GG = !0;
                    break
                  } GG || ZG.push(LG)
            }
            return ZG
          }(VG, this.display.compassSpacing),
          fG = function(GG) {
            let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              ZG = null;
            for (const wG of GG) Math.abs(wG.offset) <= bG && (!ZG || wG.distance < ZG.distance || wG.distance === ZG.distance && Math.abs(wG.offset) < Math.abs(ZG.offset)) && (ZG = wG);
            return ZG
          }(pG),
          QG = GG => {
            var bG;
            return null !== (bG = GG.displayName) && void 0 !== bG ? bG : this.translateCached(GG.nameKey)
          },
          KG = {
            compass: {
              markers: pG.map((GG => ({
                id: GG.id,
                icon: GG.icon,
                colour: GG.colour,
                name: QG(GG),
                left: GG.left
              }))),
              cardinals: yG.map((GG => {
                let {
                  name: bG,
                  bearing: ZG
                } = GG;
                const wG = hG(SG.c.computeShortestRotation(UG, ZG), YG);
                return {
                  name: bG,
                  left: null !== wG && void 0 !== wG ? wG : 0,
                  hidden: null === wG
                }
              })),
              label: fG ? `${QG(fG)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",XG(fG.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== wG && void 0 !== wG && wG.background) {
          const bG = GG[0] - wG.mapOrigin[0],
            ZG = GG[2] - wG.mapOrigin[2],
            {
              rotation: SG,
              transform: yG
            } = function(GG, bG, ZG, wG) {
              const [SG, yG] = kG(GG, bG, wG), UG = LG - ZG;
              return {
                rotation: UG,
                transform: `rotate(${UG}rad) translate(-${SG}%, -${yG}%)`
              }
            }(bG, ZG, UG, wG.background.bounds);
          KG.minimap = {
            transform: yG,
            iconRotation: -SG + "rad"
          };
          const [YG, VG] = kG(bG, ZG, wG.background.bounds);
          KG.player = {
            left: YG,
            top: VG,
            hidden: YG < 0 || VG < 0 || YG > 100 || VG > 100,
            rotation: -SG + "rad"
          }
        }
        const {
          waypoint: dG
        } = this.quests.getSnapshot();
        if ("search" === (null === dG || void 0 === dG ? void 0 : dG.questMarkerIcon) && null !== wG && void 0 !== wG && wG.background) {
          const {
            bounds: GG
          } = wG.background, [bG, ZG] = kG(dG.position[0] - wG.mapOrigin[0], dG.position[2] - wG.mapOrigin[2], GG);
          KG.searchArea = {
            left: bG,
            top: ZG,
            width: 6400 / (GG.mapMaxX - GG.mapMinX),
            height: 6400 / (GG.mapMaxZ - GG.mapMinZ),
            shapeSeed: dG.nameKey
          }
        }
        const JG = this.quests.getNotificationSnapshot(),
          rG = "completion" === (null === JG || void 0 === JG ? void 0 : JG.phase) && !ib(JG.kind);
        if (dG && !rG) {
          const bG = Math.hypot(...dG.position.map(((bG, ZG) => bG - GG[ZG]))),
            wG = Math.round(bG),
            SG = "talk" === dG.questMarkerIcon ? Math.min(1, Math.max(0, (10 - bG) / 5)) : 0,
            LG = ZG.projectWorldPosToViewport(dG.position),
            yG = LG && ZG.projectWorldPosToViewport([dG.position[0], dG.position[1] - 1, dG.position[2]]);
          KG.waypoint = {
            ...ZG.projectWorldPosToScreenPos(dG.position),
            text: LG,
            nearness: SG * SG * (3 - 2 * SG),
            blockHeight: LG && yG ? yG.y - LG.y : null,
            name: this.translateCached(dG.nameKey),
            nameKey: dG.nameKey,
            markerIcon: dG.questMarkerIcon ? SZ[dG.questMarkerIcon] : "quest",
            popupToken: (null === JG || void 0 === JG ? void 0 : JG.waypointNameKey) === dG.nameKey ? JG.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(wG)),
            hint: "search" === dG.questMarkerIcon && Math.hypot(dG.position[0] - GG[0], dG.position[2] - GG[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = KG, this.display.render(KG)
      }
      dispose() {
        this.pK = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const yZ = "skyblockSkillsView";
    class kZ extends pG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          ZG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : GG => GG,
          wG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          SG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : GG => GG;
        super(GG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = bG, this.translate = ZG, this.locale = wG, this.itemName = SG, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = GG => {
          this.selected = GG, this.emit()
        }
      }
      setTranslator(GG, bG, ZG) {
        this.translate = GG, this.locale = bG, this.itemName = ZG, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(GG) {
        let bG = this.skillText.get(GG);
        return bG || (bG = {
          label: this.translate(`skyblockGame:${GG}`),
          description: this.translate(`skyblockGame:${GG}Description`)
        }, this.skillText.set(GG, bG)), bG
      }
      sources(GG) {
        if ("mining" === GG || "fishing" === GG) return this.buildSources(GG);
        let bG = this.sourceText.get(GG);
        return bG || (bG = this.buildSources(GG), this.sourceText.set(GG, bG)), bG
      }
      buildSources(GG) {
        const bG = this.translate;
        return "exploration" === GG ? [bG("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), bG("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === GG ? [bG("skyblockGame:logSource", {
          xp: this.number(Qb["Maple Log"])
        })] : "combat" === GG ? [bG("skyblockGame:creatureKillSource"), bG("skyblockGame:noEnvironmentalXp")] : "farming" === GG ? [bG("skyblockGame:cropSource", {
          xp: this.number(db["Wheat|FreshlyGrown"])
        }), bG("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), bG("skyblockGame:noYoungCropXp")] : Object.entries("mining" === GG ? hb : Jb).map((GG => {
          let [ZG, wG] = GG;
          return bG("skyblockGame:itemXpSource", {
            item: this.itemName(ZG),
            xp: this.number(wG)
          })
        }))
      }
      number(GG) {
        return GG.toLocaleString(this.locale)
      }
      benefit(GG, bG) {
        const ZG = yb(GG, bG);
        return this.translate(ZG.translationKey, {
          bonus: this.number(ZG.percent)
        })
      }
      hK(GG) {
        if (!this.pK) {
          if ("snapshot" === GG.kind) this.progress = GG.progress, this.pending.clear(), this.recent = null;
          else if ("award" === GG.kind && this.progress) {
            const {
              award: bG
            } = GG;
            this.progress = {
              ...this.progress,
              [bG.skill]: bG.after
            };
            for (const [GG, wG] of this.pending) wG.skill === bG.skill && this.pending.delete(GG);
            const ZG = bG.after.level > bG.before.level;
            this.recordGain(bG.skill, bG.amount, ZG ? ++this.nextLevelUpToken : null), ZG && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: bG.skill,
              beforeLevel: bG.before.level,
              level: bG.after.level
            })
          } else {
            if ("rejectBlock" === GG.kind) return void this.rejectBlock(GG.position);
            if ("open" === GG.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(GG, bG, ZG) {
        if (!this.progress || this.pK || ZG) return;
        const wG = function(GG, bG) {
          const ZG = GG.split("|")[0];
          return "Air" === bG || bG === `Barkless ${GG}` ? Object.hasOwn(Qb, ZG) ? {
            skill: "foraging",
            amount: Qb[ZG]
          } : "Air" !== bG ? null : Object.hasOwn(hb, GG) ? {
            skill: "mining",
            amount: hb[GG]
          } : Vb(GG) ? {
            skill: "farming",
            amount: 10
          } : fb(GG) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(db, GG) ? {
            skill: "farming",
            amount: db[GG]
          } : Object.hasOwn(AG, GG) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(bG, "Air");
        if (!wG) return;
        const SG = GG.join(",");
        if (this.pending.has(SG)) return;
        const LG = this.predictedProgress(wG.skill).totalXp + wG.amount;
        Number.isSafeInteger(LG) && (this.pending.set(SG, {
          ...wG,
          expires: this.now() + 2e3
        }), this.recordGain(wG.skill, 0), this.emit())
      }
      rejectBlock(GG) {
        this.pending.delete(GG.join(",")) && this.emit()
      }
      Tp() {
        if (this.pK) return;
        let GG = !1;
        for (const [bG, ZG] of this.pending) ZG.expires <= this.now() && (this.pending.delete(bG), GG = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, GG = !0), GG && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(GG, bG) {
        var ZG, wG;
        let SG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const LG = (null === (ZG = this.recent) || void 0 === ZG ? void 0 : ZG.skill) === GG && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          yG = (null === (wG = this.recent) || void 0 === wG ? void 0 : wG.skill) === GG && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: GG,
          confirmed: LG + bG,
          expires: this.now() + 3e3,
          levelUpToken: null !== SG && void 0 !== SG ? SG : yG
        }
      }
      pendingXp(GG) {
        let bG = 0;
        for (const ZG of this.pending.values()) ZG.skill === GG && (bG += ZG.amount);
        return bG
      }
      predictedProgress(GG) {
        const bG = this.progress[GG],
          ZG = this.pendingXp(GG);
        return ZG ? Ub(bG.totalXp + ZG, GG) : bG
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var GG, bG, ZG;
        const wG = this.progress ? NG.map((GG => {
            const bG = this.predictedProgress(GG);
            return {
              ...this.text(GG),
              icon: rb[GG],
              benefit: this.benefit(GG, bG.level),
              sources: this.sources(GG),
              id: GG,
              selected: GG === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(bG.level)
              }),
              xp: null === bG.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(bG.xpIntoLevel),
                target: this.number(bG.xpForNextLevel)
              }),
              percent: null === bG.xpForNextLevel ? 100 : Math.min(100, bG.xpIntoLevel / bG.xpForNextLevel * 100)
            }
          })) : [],
          SG = wG.find((GG => {
            var bG;
            return GG.id === (null === (bG = this.recent) || void 0 === bG ? void 0 : bG.skill)
          })),
          LG = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: wG,
          detail: null !== (GG = wG.find((GG => GG.selected))) && void 0 !== GG ? GG : null,
          overallLevel: this.progress ? NG.reduce(((GG, bG) => GG + this.predictedProgress(bG).level), 0) : null,
          hud: SG && LG > 0 ? {
            skill: SG,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(LG)
            }),
            levelUpToken: null !== (bG = null === (ZG = this.recent) || void 0 === ZG ? void 0 : ZG.levelUpToken) && void 0 !== bG ? bG : null,
            colour: Eb(SG.id)
          } : null
        }
      }
    }
    const UZ = Math.max(1600, 600, 950) + 400,
      YZ = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      VZ = "skyblockQuestsView",
      pZ = "skyblockQuestNotificationView";
    class fZ extends pG {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          yG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(GG, wG, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = bG, this.translate = ZG, this.now = SG, this.locale = LG, this.publishNotification = yG, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var GG, bG;
          this.selected = null !== (GG = null === (bG = this.authoritative) || void 0 === bG ? void 0 : bG.trackedQuestId) && void 0 !== GG ? GG : null, this.show()
        }, this.select = GG => {
          this.selected = GG, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const GG = this.snapshot.detail;
          !this.pK && null !== GG && void 0 !== GG && GG.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(GG.id), this.emit())
        }, this.viewDialogue = () => {
          const GG = this.snapshot.detail;
          var bG;
          GG && (null === (bG = this.onViewDialogue) || void 0 === bG || bG.call(this, GG.id))
        }, this.notifications = new Xb(SG, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var GG, bG;
        return null !== (GG = null === (bG = this.authoritative) || void 0 === bG ? void 0 : bG.trackedQuestId) && void 0 !== GG ? GG : null
      }
      notify(GG) {
        !this.pK && this.notifications.enqueue(GG) && this.emitNotification()
      }
      setNotificationsHeld(GG) {
        (this.notifications.setHeld(GG) || GG) && this.emitNotification()
      }
      Tp() {
        var GG, bG;
        if (this.pK) return;
        this.notifications.Tp() && this.emitNotification();
        let ZG = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, ZG = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, ZG = !0);
        const wG = QZ(this.authoritative);
        null !== wG && void 0 !== wG && null !== (GG = wG.questClock) && void 0 !== GG && GG.running && this.clockText(wG) !== (null === (bG = this.snapshot.tracked) || void 0 === bG ? void 0 : bG.clock) && (ZG = !0), ZG && this.emit()
      }
      setTranslator(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = GG, this.locale = bG, this.emitNotification(), this.emit()
      }
      hK(GG) {
        if (!this.pK)
          if ("completion" === GG.kind) this.notify(GG.questCompletion);
          else if ("landmark" === GG.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: GG.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === GG.kind) {
          var bG, ZG, wG;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: GG.npcNoteTitleKey,
            textKey: GG.npcNoteTextKey,
            params: null !== (bG = GG.npcNoteParams) && void 0 !== bG ? bG : {},
            nameKeys: null !== (ZG = GG.npcNoteNameKeys) && void 0 !== ZG ? ZG : {},
            iconItem: null !== (wG = GG.npcNoteIconItem) && void 0 !== wG ? wG : null
          })
        } else if ("open" === GG.kind) this.show();
        else if ("guidance" === GG.kind) this.waypoint = GG.waypoint, this.compassTarget = GG.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === GG.kind) {
          this.authoritative = GG.snapshot, this.notifications.Tp() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const bG = this.trackedStepPulse;
          this.updateTrackedStepPulse(GG.snapshot), this.emit(), this.trackedStepPulse > bG && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.pK || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var GG;
        return null !== (GG = this.translateWithIcons) && void 0 !== GG ? GG : this.translate
      }
      clockText(GG) {
        const bG = GG.questClock;
        if (!bG) return null;
        const ZG = bG.elapsedMs + (bG.running ? this.now() - this.receivedAt : 0);
        return void 0 === bG.countdownFromMs ? cG(ZG, !1) : cG(1e3 * Math.ceil(Math.max(0, bG.countdownFromMs - ZG) / 1e3), !1)
      }
      updateTrackedStepPulse(GG) {
        var bG, ZG, wG;
        const SG = QZ(GG);
        if (!SG) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const LG = GG => SG.subquests.filter((bG => GG(bG.status))).map((GG => GG.id)),
          yG = LG((GG => "completed" === GG || "skipped" === GG)),
          kG = LG((GG => "locked" !== GG)),
          UG = (null === (bG = this.trackedSteps) || void 0 === bG ? void 0 : bG.questId) === SG.id && SG.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (UG) {
          const GG = yG.filter((GG => !UG.finished.has(GG))),
            bG = LG((GG => "active" === GG || "ready" === GG)).filter((GG => !UG.unlocked.has(GG)));
          GG.length > 0 && this.trackedStepPulse++, (GG.length > 0 || bG.length > 0) && (this.trackedChange = {
            finished: new Set(GG),
            unlocked: new Set(bG),
            expiresAt: this.now() + UZ
          })
        } else {
          var YG;
          this.trackedStepPulse = (null === (YG = this.trackedSteps) || void 0 === YG ? void 0 : YG.questId) === SG.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: SG.id,
          progress: SG.progress,
          finished: new Set([...null !== (ZG = null === UG || void 0 === UG ? void 0 : UG.finished) && void 0 !== ZG ? ZG : [], ...yG]),
          unlocked: new Set([...null !== (wG = null === UG || void 0 === UG ? void 0 : UG.unlocked) && void 0 !== wG ? wG : [], ...kG])
        }
      }
      entry(GG, bG) {
        var ZG, wG;
        const SG = GG.id === (null === (ZG = this.authoritative) || void 0 === ZG ? void 0 : ZG.trackedQuestId),
          LG = this.now() < this.trackAvailableAt,
          yG = this.questTextTranslator(),
          kG = GG.subquests.map((bG => {
            var ZG, wG, LG, kG, UG, YG;
            const VG = null !== (ZG = bG.handInNpcName) && void 0 !== ZG ? ZG : GG.giverName,
              pG = this.translate("skyblockGame:progress", {
                current: bG.progress.toLocaleString(this.locale),
                target: bG.target.toLocaleString(this.locale)
              }),
              fG = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: VG ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [bG.status],
              QG = "active" === bG.status || "ready" === bG.status;
            return {
              id: bG.id,
              name: ob(yG, bG.nameKey, bG.nameParams),
              description: ob(yG, bG.descriptionKey, bG.descriptionParams),
              progress: pG,
              status: bG.status,
              statusLabel: fG ? this.translate(fG, {
                npc: VG
              }) : pG,
              iconItem: QG && null !== (wG = bG.questIconItem) && void 0 !== wG ? wG : null,
              barPercent: "active" === bG.status && bG.showsProgressBar ? Math.min(100, 100 * bG.progress / bG.target) : null,
              justFinished: SG && null !== (LG = null === (kG = this.trackedChange) || void 0 === kG ? void 0 : kG.finished.has(bG.id)) && void 0 !== LG && LG,
              justUnlocked: SG && null !== (UG = null === (YG = this.trackedChange) || void 0 === YG ? void 0 : YG.unlocked.has(bG.id)) && void 0 !== UG && UG
            }
          }));
        return {
          id: GG.id,
          name: ob(yG, GG.nameKey, GG.nameParams),
          description: ob(yG, GG.descriptionKey, GG.descriptionParams),
          progress: bG ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: GG.progress.toLocaleString(this.locale),
            target: GG.target.toLocaleString(this.locale)
          }),
          completed: bG,
          tracked: SG,
          selected: GG.id === this.selected,
          canTrack: !bG && !SG && !LG,
          trackLabel: this.translate(SG ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : LG ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== GG.id,
          subquests: kG,
          focusStep: null !== (wG = kG.find((GG => null !== GG.barPercent))) && void 0 !== wG ? wG : null,
          clock: this.clockText(GG)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG;
        const VG = [...null !== (GG = null === (bG = this.authoritative) || void 0 === bG ? void 0 : bG.active) && void 0 !== GG ? GG : [], ...null !== (ZG = null === (wG = this.authoritative) || void 0 === wG ? void 0 : wG.completed) && void 0 !== ZG ? ZG : []];
        var pG, fG, QG, KG;
        VG.some((GG => GG.id === this.selected)) || (this.selected = null !== (pG = null !== (fG = null === (QG = this.authoritative) || void 0 === QG ? void 0 : QG.trackedQuestId) && void 0 !== fG ? fG : null === (KG = VG[0]) || void 0 === KG ? void 0 : KG.id) && void 0 !== pG ? pG : null);
        const hG = null !== (SG = null === (LG = this.authoritative) || void 0 === LG ? void 0 : LG.active.map((GG => this.entry(GG, !1)))) && void 0 !== SG ? SG : [];
        hG.sort(((GG, bG) => Number(bG.tracked) - Number(GG.tracked)));
        const dG = null !== (yG = null === (kG = this.authoritative) || void 0 === kG ? void 0 : kG.completed.map((GG => this.entry(GG, !0)))) && void 0 !== yG ? yG : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: hG,
          completed: dG,
          completedExpanded: this.completedExpanded,
          detail: null !== (UG = [...hG, ...dG].find((GG => GG.selected))) && void 0 !== UG ? UG : null,
          tracked: null !== (YG = hG.find((GG => GG.tracked))) && void 0 !== YG ? YG : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function QZ(GG) {
      var bG;
      return null !== (bG = null === GG || void 0 === GG ? void 0 : GG.active.find((bG => bG.id === GG.trackedQuestId))) && void 0 !== bG ? bG : null
    }
    const KZ = "skyblockDungeonsView";
    class hZ extends pG {
      constructor(GG, bG) {
        let ZG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          wG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(GG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = bG, this.locale = ZG, this.requestEnter = wG, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = GG => {
          this.selected = GG, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const GG = this.pickerEntry(),
            bG = null === GG || void 0 === GG ? void 0 : GG.difficulties[this.pageIndex];
          void 0 !== bG && null !== bG.unlockedBoss && (this.close(), this.requestEnter(GG.id, bG.difficulty))
        }
      }
      setTranslator(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = GG, this.locale = bG, this.emit()
      }
      hK(GG) {
        var bG, ZG;
        if (!this.pK) return "open" === GG.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== GG.kind ? "snapshot" === GG.kind && (this.authoritative = GG.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (bG = null === (ZG = this.pickerEntry()) || void 0 === ZG ? void 0 : ZG.difficulties.length) && void 0 !== bG ? bG : 1) - 1)), null === GG.snapshot && this.open ? this.close() : this.emit()) : this.choose(GG.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(GG) {
        var bG;
        const ZG = null === (bG = this.authoritative) || void 0 === bG ? void 0 : bG.dungeons.find((bG => bG.id === GG));
        void 0 !== ZG ? this.open && this.pickerDungeonId === GG || (this.pickerDungeonId = GG, this.pageIndex = Math.max(0, ZG.difficulties.findLastIndex((GG => null !== GG.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${GG}`)
      }
      turnTo(GG) {
        var bG, ZG;
        const wG = null !== (bG = null === (ZG = this.pickerEntry()) || void 0 === ZG ? void 0 : ZG.difficulties.length) && void 0 !== bG ? bG : 0;
        GG < 0 || GG >= wG || GG === this.pageIndex || (this.pageIndex = GG, this.emit())
      }
      pickerEntry() {
        var GG, bG;
        return null !== (GG = null === (bG = this.authoritative) || void 0 === bG ? void 0 : bG.dungeons.find((GG => GG.id === this.pickerDungeonId))) && void 0 !== GG ? GG : null
      }
      difficulty(GG) {
        const bG = GG.completions > 0,
          ZG = null === GG.bestMs ? null : cG(GG.bestMs);
        return {
          difficulty: GG.difficulty,
          label: this.translate(vG[GG.difficulty]),
          colour: aG[GG.difficulty],
          beaten: bG,
          bestTime: ZG,
          completions: GG.completions,
          summary: bG ? [null === ZG ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: ZG
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: GG.completions.toLocaleString(this.locale)
          })].filter((GG => null !== GG)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(GG) {
        const bG = GG.difficulties.map((GG => this.difficulty(GG))),
          ZG = bG.filter((GG => GG.beaten)).length;
        return {
          id: GG.id,
          name: this.translate(GG.nameKey),
          selected: GG.id === this.selected,
          beatenSummary: `${ZG} / ${bG.length}`,
          difficulties: bG
        }
      }
      picker() {
        const GG = this.pickerEntry();
        if (null === GG || 0 === GG.difficulties.length) return null;
        const bG = GG.difficulties.map(((bG, ZG) => {
          var wG, SG, LG, yG;
          const kG = bG.unlockedBoss,
            UG = null === kG ? this.lockedHint(GG, ZG) : null;
          return {
            ...this.difficulty(bG),
            unlocked: null !== kG,
            bossName: null === kG ? null : this.translate(kG.bossNameKey),
            bossMobType: null !== (wG = null === kG || void 0 === kG ? void 0 : kG.bossMobType) && void 0 !== wG ? wG : null,
            bossMobVariation: null !== (SG = null === kG || void 0 === kG ? void 0 : kG.bossMobVariation) && void 0 !== SG ? SG : null,
            lockedHint: null !== (LG = null === UG || void 0 === UG ? void 0 : UG.text) && void 0 !== LG ? LG : null,
            lockedHintHighlight: null !== (yG = null === UG || void 0 === UG ? void 0 : UG.highlight) && void 0 !== yG ? yG : null,
            current: ZG === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(GG.nameKey),
          pages: bG,
          page: bG[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < bG.length - 1
        }
      }
      lockedHint(GG, bG) {
        var ZG, wG, SG;
        if (0 === bG && "number" === typeof GG.combatLevelLock) {
          const bG = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: GG.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: bG,
            colour: Eb("combat"),
            icon: rb.combat
          })
        }
        const LG = null !== (ZG = null === (wG = this.authoritative) || void 0 === wG ? void 0 : wG.dungeons) && void 0 !== ZG ? ZG : [],
          yG = bG > 0 ? GG : null !== (SG = LG[LG.indexOf(GG) - 1]) && void 0 !== SG ? SG : null,
          kG = bG > 0 ? GG.difficulties[bG - 1] : null === yG || void 0 === yG ? void 0 : yG.difficulties[0];
        if (null === yG || void 0 === kG) return null;
        const UG = this.translate(yG.nameKey);
        if (null === kG.unlockedBoss) return yG === GG ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, kG.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: UG
        }, kG.difficulty);
        const YG = this.translate(kG.unlockedBoss.bossNameKey);
        return yG === GG ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: YG
        }, kG.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: YG,
            dungeon: UG
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(GG, bG, ZG) {
        return this.hintHighlighting(GG, bG, "difficulty", {
          name: this.translate(vG[ZG]),
          colour: aG[ZG],
          icon: null
        })
      }
      hintHighlighting(GG, bG, ZG, wG) {
        let {
          name: SG,
          colour: LG,
          icon: yG
        } = wG;
        const kG = this.translate(GG, {
          ...bG,
          [ZG]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(GG, {
            ...bG,
            [ZG]: SG
          }),
          highlight: 2 === kG.length ? {
            before: kG[0],
            name: SG,
            after: kG[1],
            colour: LG,
            icon: yG
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var GG, bG, ZG;
        const wG = null !== (GG = null === (bG = this.authoritative) || void 0 === bG ? void 0 : bG.dungeons) && void 0 !== GG ? GG : [];
        var SG, LG;
        wG.some((GG => GG.id === this.selected)) || (this.selected = null !== (SG = null === (LG = wG[0]) || void 0 === LG ? void 0 : LG.id) && void 0 !== SG ? SG : null);
        const yG = wG.map((GG => this.entry(GG)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: yG,
          detail: null !== (ZG = yG.find((GG => GG.selected))) && void 0 !== ZG ? ZG : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const dZ = ["mining", "farming", "foraging", "fishing", "combat"],
      JZ = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      rZ = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function zZ() {
      for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
      return bG.map(((GG, bG) => ({
        amount: GG,
        coins: JZ[bG],
        xp: rZ[bG]
      })))
    }
    const EZ = zZ(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      oZ = zZ(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      XZ = zZ(50, 100, 250, 500, 1e3, 2500, 5e3),
      uZ = zZ(25, 50, 100, 250, 500, 1e3),
      iZ = zZ(10, 25, 50, 100, 250, 500, 1e3),
      CZ = zZ(1, 5, 10, 25, 50);

    function WZ(GG, bG) {
      return {
        id: GG,
        category: "fishing",
        item: bG,
        drops: [bG],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iZ
      }
    }
    const mZ = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: oZ
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: XZ
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: XZ
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: uZ
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: uZ
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: oZ
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: EZ
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: EZ
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: EZ
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: XZ
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: oZ
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: oZ
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: oZ
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: XZ
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: XZ
      }, WZ("wheatfish", "Wheatfish"), WZ("darter", "Darter"), WZ("sunset_minnow", "Sunset Minnow"), WZ("root_flounder", "Root Flounder"), WZ("greenfin_loach", "Greenfin Loach"), WZ("red_strongfish", "Red Strongfish"), WZ("green_strongfish", "Green Strongfish"), WZ("boomerang_fish", "Boomerang Fish"), WZ("seahorse", "Seahorse"), WZ("spined_stickleback", "Spined Stickleback"), WZ("moon_strongfish", "Moon Strongfish"), WZ("boulder_bass", "Boulder Bass"), WZ("grass_snapper", "Grass Snapper"), WZ("crystal_wheatfish", "Crystalized Wheatfish", CZ), WZ("moonstone_pupfish", "Moonstone Pupfish", CZ), WZ("reedglass_minnow", "Reedglass Minnow"), WZ("mangrove_herring", "Mangrove Herring"), WZ("mudline_perch", "Mudline Perch"), WZ("coastal_mullet", "Coastal Mullet"), WZ("reef_sardine", "Reef Sardine"), WZ("root_perch", "Root Perch"), WZ("driftwood_catfish", "Driftwood Catfish"), WZ("aether_minnow", "Aether Minnow"), WZ("needlefish", "Tri-Pointed Needlefish"), WZ("threadfin_bream", "Threadfin Bream"), WZ("mudbelly_tilapia", "Mudbelly Tilapia"), WZ("rotslab_eel", "Rotslab Eel"), WZ("polarflash_electron", "Polarflash Electron"), WZ("mireback_carp", "Mireback Carp"), WZ("blackwater_bream", "Blackwater Bream"), WZ("stone_grouper", "Stone Grouper"), WZ("shadeback_ray", "Shadeback Ray"), WZ("glacial_silverfish", "Glacial Silverfish"), WZ("hatchetfish", "Hatchetfish"), WZ("moonlit_boomerang", "Moonlit Boomerang Fish"), WZ("murkborne_ray", "Murkborne Ray"), WZ("bamboo_catfish", "Bamboo Catfish"), WZ("mossback_arapaima", "Mossback Arapaima"), WZ("murk_stingray", "Murk Stingray"), WZ("channel_sawfish", "Channel Sawfish"), WZ("boned_sturgeon", "Boned Sturgeon"), WZ("oarfish", "Oarfish"), WZ("snakehead", "Snakehead", CZ), WZ("eldertide_leviathan", "Eldertide Leviathan", CZ), WZ("pithead", "Pithead"), WZ("electric_eel", "Electric Eel"), WZ("shadow_darter", "Shadow Darter"), WZ("abyss_carp", "Abyss Carp"), WZ("nomai_moray", "Nomai Moray"), WZ("silver_dragonfish", "Silver Dragonfish"), WZ("giant_moray", "Giant Moray"), WZ("coelacanth", "Coelacanth", CZ), WZ("frost_herring", "Frost Herring"), WZ("permafrost_halibut", "Permafrost Halibut"), WZ("glacial_lanternfish", "Glacial Lanternfish"), WZ("frozen_grenadier", "Frozen Grenadier"), WZ("blackfin_icefish", "Blackfin Icefish"), WZ("moonfish", "Moonfish"), WZ("alpha_strongfish", "Alpha Moon Strongfish"), WZ("deep_lanternfish", "Deepwater Lanternfish", CZ), WZ("pearlescent_moonfish", "Pearlescent Moonfish", CZ), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: oZ
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: uZ
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: uZ
      }],
      IZ = (new Map(mZ.map((GG => [GG.id, GG]))), new Map),
      FZ = new Map;
    for (const VU of mZ) {
      for (const [GG, bG] of Object.entries(null !== (vZ = VU.blocks) && void 0 !== vZ ? vZ : {})) {
        var vZ;
        IZ.set(GG, {
          collection: VU,
          amount: bG
        })
      }
      for (const GG of null !== (aZ = VU.drops) && void 0 !== aZ ? aZ : []) {
        var aZ;
        FZ.set(GG, VU)
      }
    }

    function cZ(GG, bG) {
      let ZG = 0;
      for (; ZG < GG.tiers.length && bG >= GG.tiers[ZG].amount;) ZG++;
      return ZG
    }
    const lZ = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function jZ(GG) {
      return lZ[GG - 1]
    }
    const PZ = "skyblockCollectionsView";
    class MZ extends pG {
      constructor(GG, bG) {
        let ZG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          wG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : GG => GG;
        super(GG, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = bG, this.locale = ZG, this.itemName = wG, this.counts = null, this.category = "mining", this.selected = mZ[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = GG => {
          this.category = GG, this.selected = this.inCategory(GG)[0].id, this.emit()
        }, this.select = GG => {
          this.selected = GG, this.emit()
        }
      }
      setTranslator(GG, bG, ZG) {
        this.translate = GG, this.locale = bG, this.itemName = ZG, this.emit()
      }
      hK(GG) {
        if (!this.pK)
          if ("collOpen" !== GG.kind) {
            (GG.collFull || null === this.counts) && (this.counts = new Map);
            for (const [bG, ZG] of GG.collCounts) this.counts.set(bG, ZG);
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
        var GG;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const bG = this.inCategory(this.category).map((GG => this.collectionView(GG))),
          ZG = mZ.reduce(((GG, bG) => GG + this.tierOf(bG)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: dZ.map((GG => this.categoryView(GG))),
          collections: bG,
          detail: null !== (GG = bG.find((GG => GG.selected))) && void 0 !== GG ? GG : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(ZG)
          })
        }
      }
      categoryView(GG) {
        const bG = this.inCategory(GG),
          ZG = bG.reduce(((GG, bG) => GG + this.tierOf(bG)), 0),
          wG = bG.reduce(((GG, bG) => GG + bG.tiers.length), 0);
        return {
          id: GG,
          label: this.translate(`skyblockGame:${GG}`),
          icon: rb[GG],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(ZG),
            target: this.number(wG)
          }),
          selected: GG === this.category
        }
      }
      collectionView(GG) {
        var bG, ZG;
        const wG = null !== (bG = this.counts.get(GG.id)) && void 0 !== bG ? bG : 0,
          SG = cZ(GG, wG),
          LG = null !== (ZG = GG.tiers[SG]) && void 0 !== ZG ? ZG : null,
          yG = 0 === SG ? 0 : GG.tiers[SG - 1].amount;
        return {
          id: GG.id,
          name: this.itemName(GG.item),
          icon: GG.item,
          selected: GG.id === this.selected,
          locked: 0 === wG,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(wG)
          }),
          tier: 0 === SG ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(SG),
          percent: null === LG ? 100 : Math.min(100, (wG - yG) / (LG.amount - yG) * 100),
          progress: null === LG ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(wG),
            target: this.number(LG.amount)
          }),
          nextReward: null === LG ? null : this.reward(GG, LG.coins, LG.xp)
        }
      }
      reward(GG, bG, ZG) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(bG),
          xp: this.number(ZG),
          skill: this.translate(`skyblockGame:${GG.category}`)
        })
      }
      tierLabel(GG) {
        return this.translate("skyblockGame:collectionTier", {
          tier: jZ(GG)
        })
      }
      tierOf(GG) {
        var bG;
        return cZ(GG, null !== (bG = this.counts.get(GG.id)) && void 0 !== bG ? bG : 0)
      }
      inCategory(GG) {
        return mZ.filter((bG => bG.category === GG))
      }
      number(GG) {
        return GG.toLocaleString(this.locale)
      }
    }
    const AZ = "skyblockPortalTransitView",
      sZ = "skyblockPortalArrival";
    class qZ {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.xh = GG, this.storage = bG, this.now = ZG, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      hK(GG) {
        const bG = {
          zoneNameKey: GG.transitZoneNameKey,
          variation: GG.transitZoneVariation,
          colour: GG.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(sZ, bG), this.show("departure", bG.zoneNameKey, bG.colour, GG.transitDurationMs, GG.transitDurationMs + 1500, (() => {
          this.storage.removeItem(sZ)
        }))
      }
      resumeArrival(GG) {
        const bG = this.storage.getItem(sZ);
        this.storage.removeItem(sZ), null === bG || bG.variation !== GG || this.now() - bG.departedAt > 3e4 || this.show("arrival", bG.zoneNameKey, bG.colour, 3200, 2e4)
      }
      finishArrival(GG) {
        var bG;
        "arrival" === (null === (bG = this.view) || void 0 === bG ? void 0 : bG.phase) && this.view.token === GG && (this.clearTimer(), this.view = null, this.xh(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(GG, bG, ZG, wG, SG, LG) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: GG,
          zoneNameKey: bG,
          colour: ZG,
          durationMs: wG
        }, this.xh(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.xh(null), null === LG || void 0 === LG || LG()
        }), SG)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const nZ = "skyblockDailyRewardView",
      gZ = "skyblockDailyRewardCoin";
    class eZ {
      constructor(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          UG = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.xh = GG, this.isBusy = bG, this.holdQuestPopups = ZG, this.onHeldCoinsChanged = wG, this.onCoinLanded = SG, this.onStarted = LG, this.onFinished = yG, this.onItemLanded = kG, this.now = UG, this.Ik = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var GG, bG;
        return null !== (GG = null === (bG = this.playing) || void 0 === bG ? void 0 : bG.view) && void 0 !== GG ? GG : null
      }
      getHeldCoins() {
        var GG, bG;
        let ZG = 0;
        for (const wG of this.Ik) ZG += wG.coins;
        return ZG - (null !== (GG = null === (bG = this.playing) || void 0 === bG ? void 0 : bG.released) && void 0 !== GG ? GG : 0)
      }
      hK(GG) {
        "dailyRewardClaimed" !== GG.kind ? (this.queue.push(GG), this.Tp()) : this.Ik.push({
          coins: GG.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Tp() {
        const GG = this.now();
        if (null === this.playing) return this.releaseUnshown(GG), void this.startNext(GG);
        const bG = this.playing,
          ZG = GG - bG.startedAt,
          wG = bG.view.flyingCoins,
          SG = function(GG, bG) {
            let ZG = 0;
            for (; ZG < bG && TZ(ZG, bG) <= GG;) ZG++;
            return ZG
          }(ZG, wG);
        if (SG !== bG.landed) {
          for (let GG = SG - bG.landed > 2 ? SG - 1 : bG.landed; GG < SG; GG++) this.onCoinLanded(GG, wG);
          bG.landed = SG, bG.released = Math.round(bG.view.coins * SG / wG), this.onHeldCoinsChanged()
        }
        for (; bG.itemsLanded < bG.view.items.length && 2e3 + 160 * bG.itemsLanded + 630 <= ZG;) this.onItemLanded(bG.itemsLanded), bG.itemsLanded++;
        ZG >= bG.view.durationMs && (this.finish(), this.startNext(GG))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.Ik = [], this.xh(null)
      }
      startNext(GG) {
        if (0 === this.queue.length || this.isBusy()) return;
        const bG = this.queue.shift();
        this.token++;
        const ZG = {
          token: this.token,
          day: bG.dailyRewardDay,
          coins: bG.dailyRewardCoins,
          items: bG.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: bG.dailyRewardDay === mG ? 24 : 14
        };
        this.playing = {
          view: ZG,
          startedAt: GG,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.xh(ZG), this.onStarted(ZG)
      }
      finish() {
        this.Ik.shift(), this.playing = null, this.holdQuestPopups(!1), this.xh(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(GG) {
        if (this.queue.length > 0 || 0 === this.Ik.length) return;
        const bG = this.Ik.length;
        this.Ik = this.Ik.filter((bG => GG - bG.receivedAt < 6e4)), this.Ik.length !== bG && this.onHeldCoinsChanged()
      }
    }

    function RZ(GG, bG) {
      return 450 + 715 * GG / (bG - 1)
    }

    function TZ(GG, bG) {
      return RZ(GG, bG) + 650
    }
    const HZ = "skyblockMailboxView";
    class tZ {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.xh = GG, this.isBusy = bG, this.onStarted = ZG, this.now = wG, this.waiting = [], this.playing = null, this.token = 0, this.itemName = GG => GG
      }
      getSnapshot() {
        var GG, bG;
        return null !== (GG = null === (bG = this.playing) || void 0 === bG ? void 0 : bG.view) && void 0 !== GG ? GG : null
      }
      setItemName(GG) {
        this.itemName = GG
      }
      hK(GG) {
        this.waiting.push(...GG.mailLetters), this.Tp()
      }
      Tp() {
        const GG = this.now();
        null !== this.playing && GG - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.xh(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(GG)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.xh(null)
      }
      start(GG) {
        const bG = this.waiting.slice(0, 3);
        this.token++;
        const ZG = {
          token: this.token,
          letters: bG.map((GG => this.toView(GG))),
          more: this.waiting.length - bG.length,
          durationMs: 4500 + 700 * bG.length
        };
        this.waiting = [], this.playing = {
          view: ZG,
          startedAt: GG
        }, this.xh(ZG), this.onStarted(ZG)
      }
      toView(GG) {
        return {
          coins: GG.mailCoins,
          items: GG.mailItems.map((GG => {
            var bG;
            return {
              itemName: GG.mailItemName,
              amount: GG.mailItemAmount,
              label: null !== (bG = GG.mailItemLabel) && void 0 !== bG ? bG : this.itemName(GG.mailItemName)
            }
          })),
          reasonKey: GG.mailReasonKey,
          reasonParams: GG.mailReasonParams
        }
      }
    }
    const DZ = "skyblockQuestGraphView",
      NZ = "skyblockDevQuestJump";

    function OZ(GG) {
      if (0 === GG.length) return "";
      const bG = [`M ${GG[0].x} ${GG[0].y}`];
      for (let wG = 1; wG < GG.length - 1; wG++) {
        const ZG = GG[wG + 1];
        bG.push(`Q ${GG[wG].x} ${GG[wG].y} ${(GG[wG].x+ZG.x)/2} ${(GG[wG].y+ZG.y)/2}`)
      }
      const ZG = GG[GG.length - 1];
      return bG.push(`L ${ZG.x} ${ZG.y}`), bG.join(" ")
    }

    function xZ(GG, bG) {
      return GG < bG ? `${GG}|${bG}` : `${bG}|${GG}`
    }
    class BZ extends pG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(GG, ZG, wG), this.translate = bG, this.requestJump = SG, this.requestArrive = LG, this.storage = yG, this.now = kG, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = GG => {
          GG !== this.hoveredId && (this.hoveredId = GG, this.emit())
        }, this.jump = GG => {
          this.close(), this.requestJump(GG)
        }
      }
      hK(GG) {
        if (!this.pK)
          if ("graph" !== GG.kind) {
            if ("jumping" === GG.kind) {
              const bG = {
                questId: GG.graphQuestId,
                variation: GG.graphVariation,
                completes: GG.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(NZ, bG)
            }
          } else {
            const bG = ++this.graphCount;
            ZG.e(120).then((() => ZG(6445))).then((ZG => {
              let {
                default: wG
              } = ZG;
              this.pK || bG !== this.graphCount || (this.layout = function(GG, bG, ZG) {
                var wG, SG;
                const LG = new GG.graphlib.Graph;
                LG.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), LG.setDefaultEdgeLabel((() => ({})));
                const yG = new Set;
                for (const VG of bG) yG.add(VG.graphQuestId), LG.setNode(VG.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const kG = ZG.filter((GG => yG.has(GG.graphFromId) && yG.has(GG.graphToId) && GG.graphFromId !== GG.graphToId)),
                  UG = new Map;
                for (const VG of [...kG].sort(((GG, bG) => Number("awaits" === GG.graphEdgeKind) - Number("awaits" === bG.graphEdgeKind)))) {
                  const GG = xZ(VG.graphFromId, VG.graphToId);
                  UG.has(GG) || (UG.set(GG, VG), LG.setEdge(VG.graphFromId, VG.graphToId))
                }
                GG.layout(LG);
                const YG = LG.graph();
                return {
                  width: Math.ceil(null !== (wG = YG.width) && void 0 !== wG ? wG : 0),
                  height: Math.ceil(null !== (SG = YG.height) && void 0 !== SG ? SG : 0),
                  nodes: bG.map((GG => {
                    var bG, ZG;
                    const wG = LG.node(GG.graphQuestId);
                    return {
                      node: GG,
                      left: (null !== (bG = wG.x) && void 0 !== bG ? bG : 0) - 95,
                      top: (null !== (ZG = wG.y) && void 0 !== ZG ? ZG : 0) - 26
                    }
                  })),
                  edges: kG.map((GG => {
                    var bG;
                    const ZG = UG.get(xZ(GG.graphFromId, GG.graphToId)),
                      wG = null !== (bG = LG.edge(ZG.graphFromId, ZG.graphToId).points) && void 0 !== bG ? bG : [];
                    return {
                      edge: GG,
                      key: `${GG.graphFromId}|${GG.graphToId}|${GG.graphEdgeKind}`,
                      path: OZ(ZG.graphFromId === GG.graphFromId ? wG : [...wG].reverse())
                    }
                  })),
                  plans: new Map(bG.map((GG => [GG.graphQuestId, new Set([GG.graphQuestId, ...GG.graphPlanIds])])))
                }
              }(wG, GG.graphNodes, GG.graphEdges), this.show())
            })).catch((GG => {
              console.error("The quest graph could not be laid out", GG)
            }))
          }
      }
      resumeJump(GG) {
        const bG = this.storage.getItem(NZ);
        this.storage.removeItem(NZ), null === bG || bG.variation !== GG || this.now() - bG.departedAt > 6e4 || this.requestArrive(bG.questId, bG.completes)
      }
      setTranslator(GG) {
        this.translate = GG, this.emit()
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
        var GG, bG;
        return null !== (GG = null === this.hoveredId || null === (bG = this.layout) || void 0 === bG ? void 0 : bG.plans.get(this.hoveredId)) && void 0 !== GG ? GG : new Set
      }
      buildSnapshot() {
        const GG = this.layout;
        if (null === GG) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const bG = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: GG.width,
          height: GG.height,
          nodes: GG.nodes.map((GG => {
            let {
              node: ZG,
              left: wG,
              top: SG
            } = GG;
            return {
              id: ZG.graphQuestId,
              name: this.translate(ZG.graphNameKey),
              detail: null === ZG.graphGiverName ? ZG.graphZoneId : `${ZG.graphGiverName} \xb7 ${ZG.graphZoneId}`,
              state: ZG.graphState,
              left: wG,
              top: SG,
              inPlan: bG.has(ZG.graphQuestId),
              hovered: ZG.graphQuestId === this.hoveredId
            }
          })),
          edges: GG.edges.map((GG => {
            let {
              edge: ZG,
              key: wG,
              path: SG
            } = GG;
            return {
              key: wG,
              kind: ZG.graphEdgeKind,
              path: SG,
              inPlan: bG.has(ZG.graphFromId) && bG.has(ZG.graphToId)
            }
          })),
          planning: bG.size > 0
        }
      }
    }
    var Gw = ZG(37415);
    const bw = 250,
      Zw = 2150,
      ww = -2.8,
      Sw = 2.2,
      Lw = -27,
      yw = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      kw = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Uw = Math.round(50 + 1e3 * (kw.delay + kw.period / 2)),
      Yw = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Vw = Array.from({
        length: 26
      }, ((GG, bG) => {
        const ZG = 2.39996 * bG,
          wG = .5 + .618034 * bG % 1 * .23,
          SG = bG % 3 !== 2;
        return {
          rune: SG ? Yw[7 * bG % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(ZG)*wG).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(ZG)*wG).toFixed(3)})`,
            "--spin": 40 * (bG % 5 - 2) + "deg",
            "--size": (SG ? 1 + bG % 4 * .2 : .3 + bG % 2 * .15) + "rem",
            "--duration": `${(1.8+7*bG%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*bG%3).toFixed(2)}s`
          }
        }
      }));

    function pw(GG, bG) {
      return Array.from({
        length: 30 + 3 * GG + (bG ? 10 : 0)
      }, ((GG, bG) => {
        const ZG = bG < 4,
          wG = ZG ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          SG = ZG ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          LG = ZG ? 2.2 : .6 + Math.random(),
          yG = ZG ? .3 : Math.random() < .5 ? .16 : .24,
          kG = ZG ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": wG,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${SG.toFixed(2)}rem`,
          "--length": `${LG.toFixed(2)}rem`,
          "--width": `${yG}rem`,
          "--duration": `${Math.round(kG)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function fw(GG) {
      let {
        zeta: bG,
        period: ZG
      } = GG;
      const wG = 2 * Math.PI / ZG;
      return {
        w: wG,
        decay: bG * wG / Math.sqrt(1 - bG * bG)
      }
    }
    let Qw = !1;

    function Kw() {
      if (Qw) return;
      Qw = !0;
      const GG = document.createElement("style");
      GG.textContent = function() {
        const GG = fw(yw),
          bG = fw(kw),
          ZG = bG => Math.exp(-GG.decay * bG) * Math.sin(GG.w * bG),
          wG = ZG(Math.atan(GG.w / GG.decay) / GG.w),
          SG = .25,
          LG = 2.15,
          yG = Math.round(215),
          kG = [];
        for (let UG = 0; UG <= yG; UG++) {
          const GG = UG / yG * LG;
          let YG = Math.sin(Math.min(GG, SG) / SG * Math.PI / 2) ** 2,
            VG = 0,
            pG = 1,
            fG = 1 - .2 * YG,
            QG = 1;
          if (GG >= SG) {
            const yG = GG - SG,
              kG = Math.max(0, yG - .05);
            YG = Math.exp(-kG / .05), VG = ZG(kG + yw.lead * (1 - Math.exp(-kG / yw.rush))) / wG;
            const UG = kG - kw.delay,
              KG = UG <= 0 ? 0 : 1 - Math.exp(-bG.decay * UG) * (Math.cos(bG.w * UG) + bG.decay / bG.w * Math.sin(bG.w * UG)),
              hG = Math.max(0, (GG - 1.77) / (LG - 1.77));
            pG = (1 + (kw.to - 1) * KG) * (1 + .08 * hG), fG = 1.1 + 1.5 * Math.exp(-yG / .07) + .3 * Math.exp(-(((1e3 * yG - Uw) / 100) ** 2)) + .8 * hG, QG = 1 - hG ** 1.5
          }
          const KG = .15 * YG + ww * VG,
            hG = -.1 * YG + Sw * VG,
            dG = 3 * YG + Lw * VG;
          kG.push(`${(UG/yG*100).toFixed(3)}% { opacity: ${QG.toFixed(3)}; transform: translate(${KG.toFixed(3)}rem, ${hG.toFixed(3)}rem) rotate(${dG.toFixed(2)}deg) scale(${pG.toFixed(3)}); filter: brightness(${fG.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${kG.join(" ")} }`
      }(), document.head.append(GG)
    }
    const hw = "skyblockForgeView",
      dw = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Jw extends pG {
      constructor(GG, bG, ZG, wG, SG) {
        super(GG, ZG, wG), this.translate = bG, this.requestForge = SG, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (GG, bG) => {
          var ZG, wG;
          null !== this.forging || (null !== (ZG = this.owned[(0, Gw.p)(bG, GG)]) && void 0 !== ZG ? ZG : 0) <= 0 || (this.selected[GG] = this.selected[GG] === bG ? null : bG, this.status = null, null === (wG = this.onPartSelected) || void 0 === wG || wG.call(this), this.emit())
        }, this.forge = GG => {
          var bG, ZG;
          const wG = this.selectedParts();
          if (null === wG || this.isPending() || !this.open) return;
          const SG = (0, Gw.m)(wG);
          if (null === SG || SG.coalCost > this.coal) return;
          const LG = this.preview(SG),
            yG = null !== (bG = null === (ZG = this.onForgeStarted) || void 0 === ZG ? void 0 : ZG.call(this, LG.tier, LG.named, GG)) && void 0 !== bG ? bG : () => {};
          if (this.dropArrival(), GG) {
            const GG = {
              id: ++this.forgeId,
              preview: LG,
              timers: [],
              stopSounds: yG,
              landed: !1,
              reply: null
            };
            GG.timers.push(setTimeout((() => {
              GG.landed = !0, null !== GG.reply && (this.apply(GG.reply), GG.reply = null, this.emit())
            }), bw), setTimeout((() => {
              this.finishForge(GG)
            }), Zw)), this.forging = GG
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(wG)
        }, this.snapshot = this.buildSnapshot()
      }
      hK(GG) {
        var bG;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === GG.forgeMessageKind) return this.dropForge(), this.apply(GG), this.status = null, this.show(), void(null === (bG = this.onOpened) || void 0 === bG || bG.call(this));
        const ZG = this.forging;
        if (null !== ZG && null !== GG.forgeRefusalKey) this.dropForge();
        else if (null !== ZG && !ZG.landed) return void(ZG.reply = GG);
        this.apply(GG), this.emit()
      }
      apply(GG) {
        if (this.owned = GG.forgeOwnedParts, this.coal = GG.forgeCoalOwned, this.keepSelectionOwned("open" === GG.forgeMessageKind), null !== GG.forgeForgedSwordId) {
          var bG;
          const ZG = (0, Gw.m)(GG.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (bG = null === ZG || void 0 === ZG ? void 0 : ZG.displayName) && void 0 !== bG ? bG : ""
            }
          }
        } else null !== GG.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: GG.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(GG) {
        this.translate = GG, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(GG) {
        var bG;
        this.forging = null;
        const ZG = this.selectedParts(),
          wG = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: GG.id,
          sameSword: null !== ZG && (null === (bG = (0, Gw.m)(ZG)) || void 0 === bG ? void 0 : bG.displayName) === GG.preview.name,
          timer: wG
        }, this.emit()
      }
      dropForge() {
        const GG = this.forging;
        if (null !== GG) {
          this.forging = null;
          for (const bG of GG.timers) clearTimeout(bG);
          GG.stopSounds(), null !== GG.reply && this.apply(GG.reply)
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
        var GG, bG, ZG;
        const wG = this.selectedParts(),
          SG = null === wG ? null : (0, Gw.m)(wG),
          LG = null !== (GG = null === (bG = this.forging) || void 0 === bG ? void 0 : bG.preview) && void 0 !== GG ? GG : null === SG ? null : this.preview(SG);
        return {
          enabled: this.received,
          open: this.open,
          slots: Gw.l.map((GG => ({
            kind: GG,
            label: this.translate(dw[GG]),
            parts: this.partsFor(GG)
          }))),
          coalOwned: this.coal,
          preview: LG,
          unformedSword: Gw.h[null !== (ZG = this.selected.Blade) && void 0 !== ZG ? ZG : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((GG => GG > 0)),
          canForge: null !== LG && !LG.coalShort && !this.isPending(),
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
      preview(GG) {
        return {
          name: GG.displayName,
          lore: GG.lore,
          baseSword: GG.baseSword,
          enchantmentTier: GG.enchantmentTier,
          tier: Number(GG.enchantmentTier.slice(-1)),
          named: GG.named,
          stats: this.stats(GG),
          effects: GG.effects,
          coalCost: GG.coalCost,
          coalShort: null === this.forging && GG.coalCost > this.coal
        }
      }
      partsFor(GG) {
        const bG = [];
        for (const wG of Gw.e) {
          var ZG;
          const SG = (0, Gw.p)(wG, GG),
            LG = null !== (ZG = this.owned[SG]) && void 0 !== ZG ? ZG : 0;
          LG > 0 && bG.push({
            material: wG,
            itemName: SG,
            owned: LG,
            selected: this.selected[GG] === wG,
            placeholder: !1
          })
        }
        if (0 === bG.length) {
          const ZG = Gw.e[0];
          bG.push({
            material: ZG,
            itemName: (0, Gw.p)(ZG, GG),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return bG
      }
      stats(GG) {
        const bG = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${GG.powerMultiplier.toFixed(2)}`,
          better: GG.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${GG.damageMultiplier.toFixed(2)}`,
          better: GG.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/GG.cooldownMultiplier).toFixed(2)}`,
          better: GG.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${GG.knockbackMultiplier.toFixed(2)}`,
          better: GG.knockbackMultiplier > 1
        }];
        return GG.reachBonus > 0 && bG.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${GG.reachBonus.toFixed(1)}`,
          better: !0
        }), GG.damageReduction > 0 && bG.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*GG.damageReduction)}%`,
          better: !0
        }), bG
      }
      selectedParts() {
        const {
          Blade: GG,
          Guard: bG,
          Handle: ZG
        } = this.selected;
        return null === GG || null === bG || null === ZG ? null : {
          blade: GG,
          guard: bG,
          handle: ZG
        }
      }
      keepSelectionOwned(GG) {
        for (const ZG of Gw.l) {
          var bG;
          const wG = this.selected[ZG];
          if (null !== wG && (null !== (bG = this.owned[(0, Gw.p)(wG, ZG)]) && void 0 !== bG ? bG : 0) > 0) continue;
          if (!GG) {
            this.selected[ZG] = null;
            continue
          }
          const SG = [...Gw.e].reverse().find((GG => {
            var bG;
            return (null !== (bG = this.owned[(0, Gw.p)(GG, ZG)]) && void 0 !== bG ? bG : 0) > 0
          }));
          this.selected[ZG] = null !== SG && void 0 !== SG ? SG : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const rw = "skyblockSmugglerView",
      zw = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Ew extends pG {
      constructor(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(GG, ZG, wG), this.translate = bG, this.requestBuy = SG, this.now = LG, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = GG => GG, this.onBought = null, this.buy = GG => {
          const bG = this.deals[GG];
          void 0 !== bG && !this.isPending() && this.open && !this.soldOut.has(GG) && this.canAfford(bG) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, GG))
        }, this.snapshot = this.buildSnapshot()
      }
      hK(GG) {
        if (this.received = !0, this.day = GG.smugglerDay, this.deals = GG.smugglerDeals, this.rivets = GG.smugglerRivetsOwned, this.crests = GG.smugglerCrestsOwned, this.soldOut = new Set(GG.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + GG.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === GG.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = GG.smugglerBoughtSlot, null !== GG.smugglerBoughtSlot) {
          var bG, ZG;
          const wG = this.deals[GG.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === wG ? "" : this.dealName(wG),
              amount: String(null !== (bG = null === wG || void 0 === wG ? void 0 : wG.smugglerDealAmount) && void 0 !== bG ? bG : 0)
            }
          }, this.boughtCount++, null === (ZG = this.onBought) || void 0 === ZG || ZG.call(this)
        } else null !== GG.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: GG.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(GG, bG, ZG) {
        this.translate = GG, void 0 !== ZG && (this.itemName = ZG), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(GG) {
        if (null !== GG.smugglerDealUniqueName) return GG.smugglerDealUniqueName;
        const bG = zw[GG.smugglerDealItem];
        return void 0 === bG ? this.itemName(GG.smugglerDealItem) : this.translate(bG)
      }
      canAfford(GG) {
        return GG.smugglerDealRivets <= this.rivets && GG.smugglerDealCrests <= this.crests
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
        const GG = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return GG <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : GG < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(GG)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(GG / 60)),
          minutes: String(GG % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((GG, bG) => ({
            slot: bG,
            itemName: GG.smugglerDealItem,
            displayName: this.dealName(GG),
            enchantmentTier: GG.smugglerDealEnchantmentTier,
            amount: GG.smugglerDealAmount,
            rivets: GG.smugglerDealRivets,
            crests: GG.smugglerDealCrests,
            affordable: this.canAfford(GG),
            soldOut: this.soldOut.has(bG),
            justBought: this.boughtSlot === bG
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
    const ow = "skyblockPassageView",
      Xw = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function uw(GG, bG) {
      return GG(Xw[bG])
    }

    function iw(GG, bG, ZG, wG) {
      const SG = Math.ceil((ZG - wG) / 864e5),
        LG = uw(GG, bG);
      return SG > 1 ? GG("skyblockGame:passageNextDays", {
        phase: LG,
        days: String(SG)
      }) : GG("skyblockGame:passageNextSoon", {
        phase: LG
      })
    }
    class Cw extends pG {
      constructor(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(GG, ZG, wG), this.translate = bG, this.now = SG, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = GG => GG, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      hK(GG) {
        this.message = GG, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(GG, bG, ZG) {
        this.translate = GG, void 0 !== ZG && (this.itemName = ZG), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(GG) {
        return {
          itemName: GG.passageFish,
          displayName: this.itemName(GG.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(GG.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const GG = this.message;
        return null === GG ? {
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
          phase: GG.passagePhase,
          phaseName: uw(this.translate, GG.passagePhase),
          visitors: GG.passageVisitors.map((GG => this.describe(GG))),
          resting: this.describe(GG.passageResting),
          nextPhase: GG.passageNextPhase,
          next: iw(this.translate, GG.passageNextPhase, GG.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var Ww = ZG(38975);
    const mw = "skyblockKeepersChairView";
    class Iw extends pG {
      constructor(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new Ww.d;
        super(GG, ZG, wG), this.translate = bG, this.requestAim = SG, this.now = LG, this.pacer = yG, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = GG => GG, this.aim = GG => {
          !this.awaitingReply && this.open && this.atChair && GG !== this.favoured && (null === GG || this.islands.some((bG => bG.keepersChairIslandId === GG && bG.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== GG && void 0 !== GG ? GG : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = yG.subscribe((() => {
          this.emit()
        }))
      }
      hK(GG) {
        var bG, ZG;
        this.received = !0;
        const wG = this.favoured,
          SG = this.atChair;
        var LG;
        return this.islands = GG.keepersChairIslands, this.favoured = GG.keepersChairFavoured, this.passage = null !== (bG = GG.keepersChairPassage) && void 0 !== bG ? bG : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (ZG = GG.keepersChairAtChair) || void 0 === ZG || ZG, "place" === GG.keepersChairMessageKind ? (!SG && this.atChair && "refused" === (null === (LG = this.status) || void 0 === LG ? void 0 : LG.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === GG.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== GG.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: GG.keepersChairRefusalKey,
          island: null
        } : this.favoured !== wG && (this.status = null === this.favoured ? {
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
      receivePassage(GG) {
        this.received && (this.passage = GG, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(GG, bG, ZG) {
        this.translate = GG, void 0 !== ZG && (this.itemName = ZG), this.emit()
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
      islandName(GG) {
        const bG = this.islands.find((bG => bG.keepersChairIslandId === GG));
        return void 0 === bG ? GG : this.translate(bG.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const GG = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          bG = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((GG => {
            const bG = GG.keepersChairFeaturedFish;
            return {
              id: GG.keepersChairIslandId,
              name: this.translate(GG.keepersChairIslandNameKey),
              relit: GG.keepersChairIslandRelit,
              featuredFish: null === bG ? null : {
                itemName: bG,
                displayName: this.itemName(bG)
              },
              favoured: GG.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === GG ? null : {
            tone: GG.tone,
            text: this.translate(GG.key, null === GG.island ? void 0 : {
              island: this.islandName(GG.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === bG ? null : {
            phase: bG.keepersChairPassagePhase,
            phaseName: uw(this.translate, bG.keepersChairPassagePhase),
            nextPhase: bG.keepersChairPassageNextPhase,
            next: iw(this.translate, bG.keepersChairPassageNextPhase, bG.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Fw = "skyblockReachLogView",
      vw = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      aw = "Caught Fish",
      lw = [1, 2, 4];

    function jw(GG, bG) {
      return GG.map((GG => ({
        ...GG,
        reachLogPageFish: GG.reachLogPageFish.map((GG => ({
          ...GG,
          reachLogFishFresh: bG(GG)
        })))
      })))
    }
    class Pw extends pG {
      constructor(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new Ww.d;
        super(GG, ZG, wG), this.translate = bG, this.requestOpen = SG, this.pacer = LG, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = GG => GG, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = GG => {
          this.pages.some((bG => bG.reachLogIslandId === GG)) && (this.selected = GG, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = LG.subscribe((() => {
          this.emit()
        }))
      }
      hK(GG) {
        if (this.received = !0, "status" === GG.reachLogMessageKind) return !0 === GG.reachLogNews && this.markNews(), this.serverFresh = GG.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const bG = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== GG.reachLogMessageKind)
          if (this.pageViews = null, this.pages = jw(GG.reachLogPages, (GG => GG.reachLogFishFresh || this.heldFresh.has(GG.reachLogFishItem))), this.letGoShown = GG.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, bG) this.showPages();
          else {
            for (const GG of this.pages)
              for (const bG of GG.reachLogPageFish) bG.reachLogFishFresh && this.heldFresh.add(bG.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(GG, bG, ZG) {
        this.translate = GG, this.pageViews = null, void 0 !== ZG && (this.itemName = ZG), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = jw(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var GG, bG, ZG, wG;
        const SG = this.pages.find((GG => GG.reachLogPageFish.some((GG => GG.reachLogFishFresh))));
        if (void 0 !== SG) return SG.reachLogIslandId;
        if (null !== this.selected && this.pages.some((GG => GG.reachLogIslandId === this.selected))) return this.selected;
        return null !== (GG = null !== (bG = null === (ZG = this.pages.filter((GG => GG.reachLogIslandAwake)).at(-1)) || void 0 === ZG ? void 0 : ZG.reachLogIslandId) && void 0 !== bG ? bG : null === (wG = this.pages[0]) || void 0 === wG ? void 0 : wG.reachLogIslandId) && void 0 !== GG ? GG : null
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
        return this.pages.map((GG => {
          var bG;
          return {
            id: GG.reachLogIslandId,
            name: this.translate(GG.reachLogIslandNameKey),
            awake: GG.reachLogIslandAwake,
            gold: GG.reachLogPageGold,
            caught: GG.reachLogPageFish.filter((GG => GG.reachLogFishCaught && !GG.reachLogFishVisitor)).length,
            total: GG.reachLogPageFish.filter((GG => !GG.reachLogFishVisitor)).length,
            fish: GG.reachLogPageFish.map((GG => {
              const bG = GG.reachLogFishBestKg;
              return {
                itemName: GG.reachLogFishItem,
                name: GG.reachLogFishCaught ? this.itemName(GG.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: GG.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / GG.reachLogFishChance))
                }),
                best: GG.reachLogFishCaught ? null === bG ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: bG.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: GG.reachLogFishMarks,
                ribbons: lw.map((bG => 0 !== (GG.reachLogFishRibbons & bG))),
                glimmer: 0 !== (8 & GG.reachLogFishRibbons),
                halo: 0 !== (32 & GG.reachLogFishRibbons),
                fresh: GG.reachLogFishFresh,
                visitor: GG.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (bG = GG.reachLogPageReturner) && void 0 !== bG ? bG : null)
          }
        }))
      }
      buildReturner(GG) {
        return null === GG ? null : {
          itemName: GG.reachLogReturnerFishItem,
          line: this.translate(GG.reachLogReturnerLineKey, {
            name: this.translate(GG.reachLogReturnerNameKey),
            trinket: this.translate(GG.reachLogReturnerTrinketKey)
          }),
          back: GG.reachLogReturnerBack
        }
      }
      receivePassagePhase(GG) {
        null !== this.passagePhase && this.passagePhase !== GG && (this.pagesCurrent = !1), this.passagePhase = GG
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Mw = "skyblockLampLightView";
    class Aw {
      constructor(GG, bG, ZG, wG) {
        this.xh = GG, this.translate = bG, this.requestCommand = ZG, this.pacer = wG, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.pK = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = GG => {
          GG ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = GG => {
          this.send(`buy ${GG}`)
        }, this.socket = GG => {
          this.send(`socket ${null!==GG&&void 0!==GG?GG:jG}`)
        }, this.wearTint = GG => {
          this.send(`tint ${null!==GG&&void 0!==GG?GG:jG}`)
        }, this.setSituation = GG => {
          this.situation = GG, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = wG.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = wG.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      hK(GG) {
        if (this.message = GG, null !== GG.lampLightShop && (this.shop = GG.lampLightShop), "open" === GG.lampLightKind && (this.refusalKey = null), "reply" === GG.lampLightKind) {
          var bG;
          const SG = null !== (bG = GG.lampLightReplyTag) && void 0 !== bG ? bG : null,
            LG = null !== SG && SG === this.offTag;
          var ZG, wG;
          if (LG ? this.settleOff() : null !== SG && SG !== this.awaitingTag || this.settleReply(), this.refusalKey = GG.lampLightRefusalKey, null !== GG.lampLightBought && !LG) this.sparkle = {
            id: GG.lampLightBought,
            count: (null !== (ZG = null === (wG = this.sparkle) || void 0 === wG ? void 0 : wG.count) && void 0 !== ZG ? ZG : 0) + 1
          }
        }
        GG.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === GG.lampLightKind && (this.lastGained = GG.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(GG) {
        GG !== this.atChair && (this.atChair = GG, GG && (this.refusalKey = null), this.emit())
      }
      setTranslator(GG, bG) {
        this.translate = GG, this.locale = null !== bG && void 0 !== bG ? bG : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.pK = !0
      }
      send(GG) {
        var bG;
        if (null !== this.awaitingTag || "ready" !== (null === (bG = this.message) || void 0 === bG ? void 0 : bG.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const ZG = this.nextTag();
        this.awaitingTag = ZG, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${GG} ${ZG}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const GG = this.nextTag();
        this.offTag = GG, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${GG}`)
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
        this.pK || (this.snapshot = this.buildSnapshot(), this.xh(this.snapshot))
      }
      formatLight(GG) {
        return Math.floor(GG).toLocaleString(this.locale)
      }
      formatPercent(GG) {
        const bG = 100 * GG;
        return bG >= 10 ? Math.round(bG).toLocaleString(this.locale) : bG.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(GG, bG) {
        if ("bite" === GG) return this.translate("skyblockGame:lampLightBite", {
          seconds: (bG.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === GG) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(bG.lampLightRareChance)
        });
        if ("notice" === GG) return null === bG.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(bG.lampLightNoticeChance)
        });
        const ZG = "meter" === GG ? bG.lampLightMeterCatches : bG.lampLightBloomCatches;
        return null === ZG ? null : this.translate("meter" === GG ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(ZG))
        })
      }
      oddsLines(GG, bG) {
        const ZG = (GG, bG) => {
            var ZG;
            return null !== (ZG = {
              bite: bG.lampLightBiteMs,
              rare: bG.lampLightRareChance,
              meter: bG.lampLightMeterCatches,
              bloom: bG.lampLightBloomCatches,
              notice: bG.lampLightNoticeChance
            } [GG]) && void 0 !== ZG ? ZG : 0
          },
          wG = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          SG = [];
        for (const LG of ["bite", "rare", "meter", "bloom", "notice"]) {
          const yG = this.formatOdds(LG, GG),
            kG = this.formatOdds(LG, bG);
          if (null === yG || null === kG || "bite" !== LG && "rare" !== LG && yG === kG) continue;
          const UG = ZG(LG, bG) - ZG(LG, GG),
            YG = wG[LG] ? UG < 0 : UG > 0;
          SG.push({
            label: LG,
            before: yG,
            after: kG,
            tone: yG === kG ? "same" : YG ? "better" : "worse"
          })
        }
        return SG
      }
      charmView(GG, bG, ZG) {
        const wG = GG.lampLightCharmId.charAt(0).toUpperCase() + GG.lampLightCharmId.slice(1),
          SG = "bloom" === this.situation;
        return {
          id: GG.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${wG}`),
          effect: this.translate(`skyblockGame:lampLightCharm${wG}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(GG.lampLightCharmCost)
          }),
          owned: GG.lampLightCharmOwned,
          affordable: ZG >= GG.lampLightCharmCost,
          socketed: bG.lampLightSocketed === GG.lampLightCharmId,
          lines: this.oddsLines(SG ? bG.lampLightBareBloom : bG.lampLightBareOpen, SG ? GG.lampLightCharmBloom : GG.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var GG, bG, ZG, wG;
        const SG = this.message,
          LG = "ready" === (null === SG || void 0 === SG ? void 0 : SG.lampLightStatus) ? this.shop : null,
          yG = null !== (GG = null === SG || void 0 === SG ? void 0 : SG.lampLightBalance) && void 0 !== GG ? GG : 0,
          kG = this.atChair,
          UG = "loading" === (null === SG || void 0 === SG ? void 0 : SG.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === SG || void 0 === SG ? void 0 : SG.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          YG = "ready" !== (null === SG || void 0 === SG ? void 0 : SG.lampLightStatus) || kG ? null !== (bG = this.refusalKey) && void 0 !== bG ? bG : UG : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== SG && "locked" !== SG.lampLightStatus,
          status: null !== (ZG = null === SG || void 0 === SG ? void 0 : SG.lampLightStatus) && void 0 !== ZG ? ZG : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(yG)
          }),
          releasing: null !== (wG = null === SG || void 0 === SG ? void 0 : SG.lampLightReleasing) && void 0 !== wG && wG,
          gained: null === SG || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === SG || void 0 === SG ? void 0 : SG.lampLightStatus) && kG && !this.isPending(),
          situation: this.situation,
          shop: null === LG ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: LG.lampLightOddsRod,
              island: this.translate(LG.lampLightIslandNameKey)
            }),
            heldRod: null !== LG.lampLightHeldRod,
            charms: LG.lampLightCharms.map((GG => this.charmView(GG, LG, yG))),
            tints: LG.lampLightTints.map((GG => {
              const bG = GG.lampLightTintId,
                [ZG, wG, SG] = GG.lampLightTintColour;
              return {
                id: bG,
                name: this.translate(`skyblockGame:lampLightTint${bG.charAt(0).toUpperCase()}${bG.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(GG.lampLightTintCost)
                }),
                owned: GG.lampLightTintOwned,
                affordable: yG >= GG.lampLightTintCost,
                wearing: LG.lampLightTint === bG,
                colour: `rgb(${ZG}, ${wG}, ${SG})`
              }
            })),
            wearingIslandColours: null === LG.lampLightTint
          },
          notice: null === YG ? null : this.translate(YG),
          sparkle: this.sparkle
        }
      }
    }
    const sw = "skyblockMagmawardView";
    class qw {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.xh = GG, this.now = bG, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = gG.map((() => 0)), this.wornAt = gG.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      hK(GG) {
        var bG, ZG;
        const wG = gG.map(((bG, ZG) => !0 === GG.magmawardPiecesWorn[ZG]));
        if (!wG.includes(!0)) return this.snapshot = null, void this.xh(null);
        const SG = this.now(),
          LG = this.snapshot;
        null === LG && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const yG = GG.magmawardFuelCarried,
          kG = !wG.includes(!1);
        let UG = null !== (bG = null === LG || void 0 === LG ? void 0 : LG.pulse) && void 0 !== bG ? bG : null,
          YG = null !== (ZG = null === LG || void 0 === LG ? void 0 : LG.flare) && void 0 !== ZG ? ZG : null;
        GG.magmawardFuelBurned ? (UG = "burn", YG = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = SG, this.flareAt = SG) : null !== LG && yG > LG.fuel && (UG = "gain", this.pulseToken++, this.pulseAt = SG), kG && null !== LG && !LG.fullSet && (YG = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = SG, this.setLitAt = SG);
        const VG = gG.map(((GG, bG) => (wG[bG] && null !== LG && !LG.pieces[bG].worn && (this.wornTokens[bG]++, this.wornAt[bG] = SG), {
          itemName: GG,
          worn: wG[bG],
          wornToken: this.wornTokens[bG],
          justWorn: wG[bG] && this.isPlaying(this.wornAt[bG], SG)
        })));
        this.snapshot = {
          pieces: VG,
          wornCount: wG.filter(Boolean).length,
          fullSet: kG,
          fuel: yG,
          fuelState: yG <= 0 ? "empty" : yG <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, SG) ? UG : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, SG) ? YG : null,
          flareToken: this.flareToken,
          setLit: kG && this.isPlaying(this.setLitAt, SG),
          setLitToken: this.setLitToken
        }, this.xh(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.xh(null)
      }
      isPlaying(GG, bG) {
        return bG - GG < 1200
      }
    }
    const nw = "skyblockGlowtideView";
    class gw {
      constructor(GG) {
        this.xh = GG, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = GG => {
          this.arrow = GG, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      hK(GG) {
        this.bloom = GG.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.xh(null))
      }
      afterRender(GG, bG) {
        const ZG = this.bloom;
        if (null === ZG || null === GG) return;
        const wG = ZG.glowtideBloomX - GG[0],
          LG = ZG.glowtideBloomZ - GG[2],
          yG = Math.hypot(wG, LG),
          kG = this.snapshot,
          UG = null !== kG && void 0 !== kG && kG.inRange ? 1 : 0,
          YG = yG <= 12.5 + UG && GG[1] - ZG.glowtideBloomY <= 10 + UG;
        !YG || null !== kG && void 0 !== kG && kG.inRange || this.inRangeToken++;
        const VG = {
          colour: ZG.glowtideBloomColour,
          inRange: YG,
          distance: Math.round(yG),
          inRangeToken: this.inRangeToken
        };
        (null === kG || VG.colour !== kG.colour || VG.inRange !== kG.inRange || !YG && VG.distance !== kG.distance) && (this.snapshot = VG, this.xh(VG));
        const pG = SG.c.computeShortestRotation(bG, (0, SG.Ib)([wG, 0, LG]));
        null === this.arrow || Math.abs(pG - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${pG}rad)`, this.arrowTurn = pG)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.xh(null)
      }
    }
    const ew = "skyblockGlowMeterView";
    class Rw {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.xh = GG, this.now = bG, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      hK(GG) {
        const bG = this.now(),
          {
            glowMeterFill: ZG,
            glowMeterCapacity: wG
          } = GG,
          SG = ZG >= wG,
          LG = this.snapshot;
        null !== LG && (SG && !LG.full && (this.fullToken++, this.fullAt = bG), LG.full && !SG ? (this.burstToken++, this.burstAt = bG) : ZG > LG.fill && (this.gainToken++, this.gainAt = bG)), this.snapshot = {
          fill: ZG,
          rp: wG,
          ratio: Math.min(1, Math.max(0, ZG / wG)),
          full: SG,
          rares: GG.glowMeterRares,
          ready: SG && this.isPlaying(this.fullAt, bG),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, bG),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, bG),
          gainToken: this.gainToken
        }, this.xh(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.xh(null)
      }
      isPlaying(GG, bG) {
        return bG - GG < 2e3
      }
    }
    const Tw = "skyblockHushWaitView";
    class Hw {
      constructor(GG) {
        this.xh = GG, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      hK(GG) {
        let {
          hushWaitMs: bG,
          hushWaitTotalMs: ZG,
          hushWaitLines: wG
        } = GG;
        if (this.clearTimers(), this.token++, 0 === wG.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (bG <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: wG[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const SG = Math.max(null !== ZG && void 0 !== ZG ? ZG : bG, bG),
          LG = SG - bG,
          yG = GG => SG * GG / wG.length,
          kG = GG => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: SG,
              elapsedMs: LG,
              line: wG[GG],
              lineIndex: GG
            })
          };
        let UG = 0;
        for (; UG + 1 < wG.length && yG(UG + 1) <= LG;) UG++;
        kG(UG);
        for (let YG = UG + 1; YG < wG.length; YG++) this.later(yG(YG) - LG, (() => {
          kG(YG)
        }));
        this.later(bG, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(GG) {
        this.snapshot = GG, this.xh(GG)
      }
      later(GG, bG) {
        this.timers.push(setTimeout(bG, GG))
      }
      clearTimers() {
        for (const GG of this.timers) clearTimeout(GG);
        this.timers = []
      }
    }
    const tw = "skyblockTideChartsView",
      Dw = 36e5,
      Nw = 864e5;

    function Ow(GG, bG, ZG) {
      const [wG, SG, LG, yG] = GG.tideChartArea, kG = Math.floor(bG), UG = Math.floor(ZG);
      return kG >= wG && kG <= LG && UG >= SG && UG <= yG
    }

    function xw(GG, bG, ZG) {
      const [wG, SG, LG, yG] = GG.tideChartWater;
      return function(GG, bG, ZG, wG, SG, LG) {
        const yG = 4 - eG(Math.floor(SG) - (GG - ZG), ZG);
        return 5 * eG(Math.floor(LG) - (bG - wG), wG) + yG
      }(wG, SG, LG, yG, bG, ZG)
    }

    function Bw(GG, bG, ZG) {
      const wG = GG.tideCharts;
      for (let SG = 0; SG < wG.length; SG++)
        if (Ow(wG[SG], bG, ZG)) return wG[SG];
      return null
    }

    function GS(GG, bG, ZG) {
      const wG = Math.max(0, bG - ZG);
      return wG > Nw ? GG("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(wG / Nw))
      }) : wG > Dw ? GG("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(wG / Dw))
      }) : GG("skyblockGame:tideChartsTurnSoon")
    }
    class bS extends pG {
      constructor(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(GG, ZG, wG), this.translate = bG, this.now = SG, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Df = GG => {
          this.picked = GG, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      hK(GG) {
        const bG = this.message;
        if (null !== bG)
          for (const wG of GG.tideCharts) {
            var ZG;
            const GG = bG.tideCharts.find((GG => GG.tideChartIsland === wG.tideChartIsland)),
              SG = wG.tideChartLit & ~(null !== (ZG = null === GG || void 0 === GG ? void 0 : GG.tideChartLit) && void 0 !== ZG ? ZG : 0);
            void 0 !== GG && 0 !== SG && (this.pulse = {
              island: wG.tideChartIsland,
              cells: SG,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = GG, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(GG, bG) {
        var ZG;
        const wG = null === this.message || Number.isNaN(GG) ? null : Bw(this.message, GG, bG),
          SG = null !== (ZG = null === wG || void 0 === wG ? void 0 : wG.tideChartIsland) && void 0 !== ZG ? ZG : null,
          LG = null === wG ? -1 : function(GG, bG, ZG) {
            const [wG, SG, LG, yG] = GG.tideChartWater;
            return function(GG, bG, ZG, wG, SG, LG, yG) {
              return ((SG - GG) / (ZG + yG)) ** 2 + ((LG - bG) / (wG + yG)) ** 2 <= 1
            }(wG, SG, LG, yG, bG, ZG, 2) ? xw(GG, bG, ZG) : -1
          }(wG, GG, bG);
        return (SG !== this.hereIsland || LG !== this.hereCell) && (this.hereIsland = SG, this.hereCell = LG, null !== SG && (this.lastIsland = SG), !0)
      }
      afterRender(GG) {
        if (null === this.message) return;
        this.lastX = null === GG ? Number.NaN : GG[0], this.lastZ = null === GG ? Number.NaN : GG[2];
        const bG = this.locate(this.lastX, this.lastZ),
          ZG = this.expirePulses();
        (bG || ZG || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const GG = this.now();
        return !(!this.open || GG - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = GG, GS(this.translate, this.message.tideChartTurnsInMs, GG - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(GG, bG) {
        const ZG = null === this.message ? null : Bw(this.message, GG, bG);
        if (null === ZG) return;
        const wG = xw(ZG, GG, bG);
        0 === (ZG.tideChartPreBlank & 1 << wG) && (this.cast = {
          island: ZG.tideChartIsland,
          cell: wG,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const GG = this.now();
        let bG = !1;
        return 0 !== this.pulse.cells && GG - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, bG = !0), null !== this.cast && GG - this.cast.atMs >= 1500 && (this.cast = null, bG = !0), bG
      }
      setTranslator(GG) {
        this.translate = GG, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(GG, bG) {
        var ZG;
        return null !== (ZG = GG.tideCharts.find((GG => GG.tideChartIsland === bG))) && void 0 !== ZG ? ZG : null
      }
      describe(GG) {
        var bG, ZG, wG;
        const SG = GG.tideChartIsland,
          LG = [];
        for (let QG = 0; QG < 25; QG++) {
          const bG = 1 << QG;
          0 !== (GG.tideChartLit & bG) ? LG.push("lit") : 0 !== (GG.tideChartClear & bG) ? LG.push("clear") : 0 !== (GG.tideChartPreBlank & bG) ? LG.push("shore") : LG.push("water")
        }
        const yG = function(GG) {
            let bG = 0;
            for (let ZG = GG >>> 0; 0 !== ZG; ZG &= ZG - 1) bG++;
            return bG
          }(GG.tideChartLit),
          kG = GG.tideChartInkCount,
          UG = this.translate(GG.tideChartIslandNameKey),
          YG = this.translate("skyblockGame:tideChartsLit", {
            lit: String(yG),
            ink: String(kG)
          }),
          VG = null === GG.tideChartPictureNameKey ? null : this.translate(GG.tideChartPictureNameKey),
          pG = this.hereIsland === SG && -1 !== this.hereCell ? this.hereCell : null,
          fG = [`${UG}: ${YG}.`];
        if (null !== VG && fG.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: VG
          })), null !== pG) {
          const GG = Math.floor(pG / 5) + 1,
            bG = pG % 5 + 1;
          fG.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(GG),
            column: String(bG)
          }))
        }
        return {
          island: SG,
          islandName: UG,
          cells: LG,
          hereCell: pG,
          lit: yG,
          ink: kG,
          litText: YG,
          pictureName: VG,
          gridLabel: fG.join(" "),
          pulseCells: this.pulse.island === SG ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (bG = this.cast) || void 0 === bG ? void 0 : bG.island) === SG ? this.cast.cell : null,
          castToken: null !== (ZG = null === (wG = this.cast) || void 0 === wG ? void 0 : wG.token) && void 0 !== ZG ? ZG : 0
        }
      }
      buildSnapshot() {
        var GG, bG, ZG;
        const wG = this.message;
        if (null === wG || 0 === wG.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const SG = this.findChart(wG, this.hereIsland),
          LG = null !== (GG = null !== (bG = null !== (ZG = this.findChart(wG, this.open ? this.picked : null)) && void 0 !== ZG ? ZG : SG) && void 0 !== bG ? bG : this.findChart(wG, this.lastIsland)) && void 0 !== GG ? GG : wG.tideCharts[0],
          yG = null === SG ? null : this.describe(SG);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: yG,
          card: LG === SG ? yG : this.describe(LG),
          turnsText: GS(this.translate, wG.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(wG.tideChartBookCount)
          }),
          tabs: wG.tideCharts.map((GG => ({
            island: GG.tideChartIsland,
            name: this.translate(GG.tideChartIslandNameKey),
            selected: GG.tideChartIsland === LG.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const ZS = "skyblockRegularsView",
      wS = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      SS = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function LS(GG, bG) {
      return "given" === GG ? bG.given : "owed" === GG ? bG.owed : bG.goal
    }
    class yS extends pG {
      constructor(GG, bG, ZG, wG) {
        super(GG, ZG, wG), this.translate = bG, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = GG => GG, this.openIsland = GG => {
          this.selected = GG, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = GG => {
          this.selected = GG, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      hK(GG) {
        this.message = GG, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const GG = this.openedFromReachLog;
        return this.openedFromReachLog = !1, GG
      }
      setTranslator(GG, bG, ZG) {
        this.translate = GG, void 0 !== ZG && (this.itemName = ZG), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(GG, bG, ZG) {
        return {
          text: this.translate(LS(GG, bG), ZG),
          given: "given" === GG
        }
      }
      describeRegular(GG, bG) {
        const ZG = this.translate,
          wG = null !== GG.regularKg,
          SG = GG.regularMeetings,
          LG = wG ? 0 === SG ? ZG("skyblockGame:regularsNotMet") : 1 === SG ? ZG("skyblockGame:regularsMeetingsOne") : ZG("skyblockGame:regularsMeetings", {
            count: SG
          }) : "";
        return {
          id: GG.regularId,
          name: ZG(GG.regularNameKey),
          line: ZG(GG.regularLineKey),
          itemName: GG.regularFishItem,
          fishName: this.itemName(GG.regularFishItem),
          tagged: wG,
          size: null === GG.regularKg ? ZG("skyblockGame:regularsNotTagged") : ZG("skyblockGame:regularsSize", {
            kg: GG.regularKg.toFixed(1)
          }),
          meetings: LG,
          chance: ZG("skyblockGame:regularsChance", {
            count: GG.regularOneInCasts
          }),
          resting: GG.regularRestingToday,
          gifts: [{
            text: ZG("skyblockGame:regularsGiftFlare"),
            given: SG >= 3
          }, this.describeGift(GG.regularTintGift, wS, {
            tint: ZG(GG.regularTintNameKey)
          })],
          history: [...GG.regularHistory].reverse().map((GG => {
            const wG = GG.regularMeetingKg.toFixed(1),
              SG = bG - GG.regularMeetingDay;
            return SG <= 0 ? ZG("skyblockGame:regularsToday", {
              kg: wG
            }) : ZG("skyblockGame:regularsDaysAgo", {
              days: SG,
              kg: wG
            })
          }))
        }
      }
      describeIsland(GG, bG) {
        return {
          id: GG.regularsIslandId,
          name: this.translate(GG.regularsIslandNameKey),
          charm: this.describeGift(GG.regularsCharmGift, SS, {
            charm: this.translate(GG.regularsCharmNameKey)
          }),
          regulars: GG.regularsList.map((GG => this.describeRegular(GG, bG)))
        }
      }
      buildSnapshot() {
        var GG, bG, ZG, wG;
        const SG = this.message;
        if (null === SG) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const LG = SG.regularsIslands.map((GG => this.describeIsland(GG, SG.regularsToday))),
          yG = null !== (GG = null !== (bG = null === (ZG = LG.find((GG => GG.id === this.selected))) || void 0 === ZG ? void 0 : ZG.id) && void 0 !== bG ? bG : null === (wG = LG[0]) || void 0 === wG ? void 0 : wG.id) && void 0 !== GG ? GG : "";
        return {
          enabled: !0,
          open: this.open,
          selected: yG,
          islands: LG
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const kS = "skyblockHiddenWatersView";
    class US {
      constructor(GG) {
        this.xh = GG, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      hK(GG) {
        this.snapshot = function(GG) {
          const [bG, ZG] = GG.hiddenWatersMapSize, wG = (GG, wG) => ({
            left: 1 - GG / bG,
            top: wG / ZG
          }), SG = new Map;
          for (const [yG, kG] of GG.hiddenWatersGlimpses) {
            var LG;
            const GG = null !== (LG = SG.get(yG)) && void 0 !== LG ? LG : [];
            GG.push(kG), SG.set(yG, GG)
          }
          return {
            found: GG.hiddenWatersFound,
            total: GG.hiddenWatersTotal,
            aspect: ZG / bG,
            pins: GG.hiddenWatersPins.map((GG => {
              let [bG, ZG] = GG;
              return wG(bG, ZG)
            })),
            islands: GG.hiddenWatersIslands.map((GG => {
              let [SG, LG, yG, kG] = GG;
              const {
                left: UG,
                top: YG
              } = wG(yG + 1, LG);
              return {
                left: UG,
                top: YG,
                width: (yG + 1 - SG) / bG,
                height: (kG + 1 - LG) / ZG
              }
            })),
            glimpses: SG
          }
        }(GG), this.xh(this.snapshot)
      }
    }
    const YS = "skyblockDialogueView";
    class VS extends pG {
      constructor(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(GG, ZG, wG), this.translate = bG, this.requestDialogue = SG, this.now = LG, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = GG => {
          this.selection = {
            kind: "quest",
            questId: GG
          }, this.request(), this.show()
        }, this.selectCharacter = GG => {
          this.selection = {
            kind: "character",
            npcId: GG
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      hK(GG) {
        this.received = !0, this.scripts = GG.questDialogueScripts, this.speakers = new Map(GG.questDialogueSpeakers.map((GG => [GG.dialogueSpeakerId, GG]))), this.emit()
      }
      setTranslator(GG) {
        this.translate = GG, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const GG = this.now();
        GG >= this.requestAvailableAt && (this.requestAvailableAt = GG + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var GG;
        const bG = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...bG,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const ZG = this.selection;
        if ("quest" === ZG.kind) {
          const GG = this.scripts.find((GG => GG.dialogueQuestId === ZG.questId));
          return {
            ...bG,
            characters: [],
            questFocus: ZG.questId,
            conversations: GG ? [this.conversation(GG)] : []
          }
        }
        const wG = [];
        for (let LG = this.scripts.length - 1; LG >= 0; LG--) {
          const GG = this.scripts[LG].dialogueLines;
          for (let bG = GG.length - 1; bG >= 0; bG--) wG.includes(GG[bG].dialogueSpeakerId) || wG.push(GG[bG].dialogueSpeakerId)
        }
        const SG = null !== ZG.npcId && wG.includes(ZG.npcId) ? ZG.npcId : null !== (GG = wG[0]) && void 0 !== GG ? GG : null;
        return {
          ...bG,
          characters: wG.map((GG => {
            var bG, ZG;
            return {
              id: GG,
              styling: null !== (bG = null === (ZG = this.speakers.get(GG)) || void 0 === ZG ? void 0 : ZG.dialogueSpeakerStyling) && void 0 !== bG ? bG : GG,
              selected: GG === SG
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((GG => GG.dialogueLines.some((GG => GG.dialogueSpeakerId === SG)))).map((GG => this.conversation(GG))).reverse()
        }
      }
      conversation(GG) {
        let bG = null;
        return {
          questId: GG.dialogueQuestId,
          questName: this.translate(GG.dialogueQuestNameKey),
          completed: GG.dialogueQuestCompleted,
          lines: GG.dialogueLines.map(((GG, ZG) => {
            var wG;
            const SG = GG.dialogueSpeakerId === bG || null === (wG = this.speakers.get(GG.dialogueSpeakerId)) || void 0 === wG ? void 0 : wG.dialogueSpeakerStyling;
            return bG = GG.dialogueSpeakerId, {
              key: ZG,
              display: {
                line: {
                  translationKey: GG.dialogueLineKey,
                  params: this.params(GG.dialogueLineParams)
                },
                speakerName: SG,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(GG) {
        if (void 0 !== GG) return Object.fromEntries(Object.entries(GG).map((GG => {
          let [bG, ZG] = GG;
          return [bG, "string" === typeof ZG ? ZG : this.translate(ZG.translationKey)]
        })))
      }
    }
    var pS = ZG(580),
      fS = ZG(1230),
      QS = ZG(80);
    const KS = "skyblockAutographsView";

    function hS(GG) {
      const bG = pS.i[GG];
      return {
        label: bG.chatTag.map((GG => GG.str)).join(""),
        icon: bG.icon,
        colour: bG.mainRGB
      }
    }
    class dS extends pG {
      constructor(GG) {
        let bG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = bG, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      hK(GG) {
        this.signatures = GG.autographSignatures, GG.autographOpen ? this.show() : this.emit()
      }
      setTranslator(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = bG, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var GG;
        const bG = null !== (GG = this.signatures) && void 0 !== GG ? GG : [],
          ZG = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          wG = [...bG].sort(((GG, bG) => Number(null !== bG.autographRank) - Number(null !== GG.autographRank) || bG.autographSignedAtMs - GG.autographSignedAtMs)).map((GG => ({
            key: `${GG.autographSignedAtMs}|${GG.autographSignerName}`,
            name: (0, fS.b)(GG.autographSignerName, !QS.featureFlags.canSeeRealPlayerNames),
            rank: null === GG.autographRank ? null : hS(GG.autographRank),
            signedOn: ZG.format(GG.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: wG,
          total: wG.length,
          rankTotal: wG.filter((GG => null !== GG.rank)).length
        }
      }
    }
    const JS = "skyblockHudView",
      rS = () => {},
      zS = {
        getItem: () => null,
        setItem: rS,
        removeItem: rS
      };
    class ES {
      constructor(GG) {
        let {
          translate: bG,
          translateWithIcons: ZG,
          setMenuOpen: wG = rS,
          dismissMenu: SG = () => {
            wG(!1)
          },
          publishSkills: LG = rS,
          publishQuests: yG = rS,
          publishQuestNotification: kG = rS,
          publishDungeons: UG = rS,
          publishCollections: YG = rS,
          publishMap: VG = rS,
          publishHud: pG = rS,
          publishPortalTransit: fG = rS,
          publishDailyReward: KG = rS,
          publishMailbox: hG = rS,
          publishQuestGraph: dG = rS,
          publishForge: JG = rS,
          publishSmuggler: rG = rS,
          publishKeepersChair: zG = rS,
          publishReachLog: EG = rS,
          publishLampLight: oG = rS,
          publishMagmaward: XG = rS,
          publishGlowtide: iG = rS,
          publishGlowMeter: CG = rS,
          publishHushWait: WG = rS,
          publishPassage: mG = rS,
          publishTideCharts: IG = rS,
          publishRegulars: FG = rS,
          publishHiddenWaters: vG = rS,
          publishDialogue: aG = rS,
          publishAutographs: cG = rS,
          isLoadingScreenUp: lG = () => !1,
          onDailyRewardCoinLanded: jG = rS,
          onDailyRewardStarted: PG = rS,
          onDailyRewardFinished: MG = rS,
          onDailyRewardItemLanded: AG = rS,
          onMailboxStarted: sG = rS,
          journeyStorage: qG = zS,
          requestTracking: nG = rS,
          requestTravel: gG = rS,
          requestDungeonEnter: eG = rS,
          requestQuestJump: RG = rS,
          requestQuestArrive: TG = rS,
          requestForge: HG = rS,
          requestSmuggle: tG = rS,
          requestKeepersChairAim: DG = rS,
          requestReachLogOpen: NG = rS,
          requestLampLight: OG = rS,
          requestDialogue: xG = rS
        } = GG;
        this.navigation = void 0, this.map = void 0, this.compass = new uG, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new Ww.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = GG => GG, this.close = () => {
          for (const GG of this.panels) GG.close()
        }, this.setMenuOpen = wG, this.publishHud = pG, this.portalTransit = new qZ(fG, qG), this.magmaward = new qw(XG), this.glowtide = new gw(iG), this.glowMeter = new Rw(CG), this.hushWait = new Hw(WG), this.dailyReward = new eZ(KG, (() => lG() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (GG => {
          this.quests.setNotificationsHeld(GG)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), jG, PG, MG, AG);
        const BG = GG => {
          this.panels.some((GG => GG.isOpen())) || (GG ? SG() : this.setMenuOpen(!1))
        };
        this.skills = new kZ(LG, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), bG, void 0, void 0, BG), this.quests = new fZ(yG, nG, bG, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, BG, kG), this.dungeons = new hZ(UG, bG, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, BG, eG), this.collections = new MZ(YG, bG, (() => {
          this.beforePanelOpen(this.collections)
        }), BG), this.map = new QG(VG, gG, bG, (() => {
          this.beforePanelOpen(this.map)
        }), BG), this.questGraph = new BZ(dG, bG, (() => {
          this.beforePanelOpen(this.questGraph)
        }), BG, RG, TG, qG), this.forge = new Jw(JG, bG, (() => {
          this.beforePanelOpen(this.forge)
        }), BG, HG), this.smuggler = new Ew(rG, bG, (() => {
          this.beforePanelOpen(this.smuggler)
        }), BG, tG), this.lampLight = new Aw(oG, bG, OG, this.commandPacer), this.keepersChair = new Iw(zG, bG, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (GG => {
          this.lampLight.onChairClosed(), BG(GG)
        }), DG, Date.now, this.commandPacer), this.reachLog = new Pw(EG, bG, (() => {
          this.beforePanelOpen(this.reachLog)
        }), BG, NG, this.commandPacer), this.passage = new Cw(mG, bG, (() => {
          this.beforePanelOpen(this.passage)
        }), BG), this.tideCharts = new bS(IG, bG, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), BG), this.regulars = new yS(FG, bG, (() => {
          this.beforePanelOpen(this.regulars)
        }), (GG => {
          this.regulars.takeReturnToReachLog() && !GG && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), BG(GG)
        })), this.hiddenWaters = new US(vG), this.dialogue = new VS(aG, bG, (() => {
          this.beforePanelOpen(this.dialogue)
        }), BG, xG), this.autographs = new dS(cG, (() => {
          this.beforePanelOpen(this.autographs)
        }), BG), this.mailbox = new tZ(hG, (() => lG() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), sG), this.quests.translateWithIcons = null !== ZG && void 0 !== ZG ? ZG : null, this.skills.onLevelUp = GG => {
          this.quests.notify(GG)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new LZ(this.map, this.quests, this.compass, bG)
      }
      getHudSnapshot() {
        const GG = this.hudSnapshot,
          bG = this.dailyReward.getHeldCoins();
        return null === GG || bG <= 0 || !("hudPurseCoins" in GG) ? GG : {
          ...GG,
          hudPurseCoins: Math.max(0, GG.hudPurseCoins - bG)
        }
      }
      receiveHud(GG) {
        this.hudSnapshot = GG, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(GG) {
        this.setMenuOpen(!0);
        const bG = GG === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = GG;
        for (const ZG of this.panels) ZG === GG || bG && ZG === this.reachLog || ZG.close();
        this.openingPanel = null
      }
      setTranslator(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : bG => this.resolveItemName(bG, GG);
        this.quests.translateWithIcons = null !== ZG && void 0 !== ZG ? ZG : null, this.navigation.setTranslator(GG, bG), this.lampLight.setTranslator(GG, bG), this.mailbox.setItemName(wG);
        for (const SG of this.panels) SG.setTranslator(GG, bG, wG)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const GG of this.panels) GG.dispose()
      }
    }
    var oS = ZG(1006),
      XS = ZG.n(oS),
      uS = ZG(17),
      iS = ZG(36946),
      CS = ZG(3395),
      WS = ZG(1889),
      mS = ZG(1876),
      IS = ZG(34499),
      FS = ZG(1151),
      vS = ZG(1389),
      aS = ZG(1067);

    function cS(GG) {
      let {
        controller: bG,
        minimap: ZG,
        children: wG
      } = GG;
      const LG = (0, vS.j)(JS, bG.getHudSnapshot()),
        [yG, kG] = (0, CG.useState)(bG.skills.getSnapshot().overallLevel);
      (0, vS.g)(yZ, (GG => {
        kG(GG.overallLevel)
      }));
      const UG = (0, CG.useRef)(null);
      (0, vS.g)(gZ, (GG => {
        ! function(GG, bG) {
          if (null === GG || "function" !== typeof GG.animate) return;
          const ZG = bG ? 1.35 : 1.15;
          GG.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${ZG})`
          }, {
            transform: "scale(1)"
          }], {
            duration: bG ? 320 : 160,
            easing: "ease-out"
          }), GG.classList.toggle("Receiving", !bG), bG && (GG.classList.remove("Shine"), GG.offsetWidth, GG.classList.add("Shine"))
        }(UG.current, GG)
      }));
      const {
        t: YG
      } = (0, FS.w)(), {
        isTouchScreen: VG
      } = (0, uS.o)(["isTouchScreen"]), [pG, fG] = (0, CG.useState)(null);
      return (0, CS.g)(pG, ".SkyblockRightHud"), null !== LG || ZG ? (0, aS.jsx)(iS.d, {
        placement: "topRight",
        children: (0, aS.jsxs)("div", {
          className: XS()("SkyblockRightHud", {
            TouchScreen: VG
          }),
          children: [ZG, null !== LG && (0, aS.jsxs)("div", {
            ref: fG,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in LG ? (0, aS.jsx)("div", {
              className: "SkyblockHudHelp",
              children: LG.hudHelpText
            }) : (0, aS.jsxs)(aS.Fragment, {
              children: [(0, aS.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, aS.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, aS.jsx)("strong", {
                    style: {
                      color: SG.O.cyanUiText
                    },
                    children: YG(LG.hudZoneNameKey)
                  }), null !== yG && (0, aS.jsx)("span", {
                    style: {
                      color: SG.O.goldUiText
                    },
                    children: YG("skyblockGame:level", {
                      level: (0, IS.e)(yG)
                    })
                  })]
                }), (0, aS.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: UG,
                  children: [(0, aS.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, aS.jsx)(WS.b, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, IS.e)(LG.hudPurseCoins)]
                })]
              }), LG.hudClockText.length > 0 && (0, aS.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, aS.jsx)(mS.c, {
                  text: LG.hudClockText
                })
              })]
            }), wG, "hudZoneNameKey" in LG && (0, aS.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function lS(GG) {
      let {
        icon: bG
      } = GG;
      const ZG = (0, CG.useCallback)((GG => {
        null === GG || void 0 === GG || GG.replaceChildren(Hb(bG))
      }), [bG]);
      return (0, aS.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: ZG
      })
    }

    function jS(GG) {
      let {
        controller: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)();
      return (0, aS.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: bG.display.mountPlayer,
        title: ZG("skyblockGame:mapYouAreHere"),
        children: (0, aS.jsx)(lS, {
          icon: "player"
        })
      })
    }
    const PS = ZG(38980),
      MS = Object.fromEntries(PS.keys().map((GG => [GG.replace(/^\.\/(.*)\.png$/, "$1"), PS(GG)])));

    function AS(GG, bG) {
      var ZG;
      return null !== (ZG = MS[GG]) && void 0 !== ZG ? ZG : MS[bG]
    }

    function sS(GG) {
      let {
        imageKey: bG,
        fallbackImageKey: ZG,
        geometryKey: wG,
        alt: SG,
        className: LG
      } = GG;
      const [yG, kG] = (0, CG.useState)((() => function(GG, bG) {
        return [{
          id: 0,
          imageKey: GG,
          geometryKey: bG,
          phase: "shown"
        }]
      }(bG, wG))), UG = function(GG, bG, ZG) {
        const wG = GG[GG.length - 1];
        if (wG.imageKey === bG && wG.geometryKey === ZG) return GG;
        const SG = {
          id: wG.id + 1,
          imageKey: bG,
          geometryKey: ZG,
          phase: "entering"
        };
        return wG.geometryKey === ZG ? [{
          ...wG,
          phase: "leaving"
        }, SG] : [SG]
      }(yG, bG, wG);
      return UG !== yG && kG(UG), (0, aS.jsx)(aS.Fragment, {
        children: UG.map((GG => (0, aS.jsx)("img", {
          className: XS()("SkyblockMapTerrainImage", LG, {
            Entering: "entering" === GG.phase,
            Leaving: "leaving" === GG.phase
          }),
          src: AS(GG.imageKey, ZG),
          alt: "leaving" === GG.phase ? "" : SG,
          onAnimationEnd: () => {
            kG((bG => function(GG, bG) {
              return GG.flatMap((GG => GG.id !== bG ? [GG] : "leaving" === GG.phase ? [] : [{
                ...GG,
                phase: "shown"
              }]))
            }(bG, GG.id)))
          }
        }, GG.id)))
      })
    }
    var qS = ZG(4549),
      nS = ZG(1393);

    function gS(GG) {
      if ("Tab" !== GG.key) return;
      const bG = Array.from(GG.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        ZG = bG.indexOf(document.activeElement);
      var wG;
      if (GG.shiftKey && ZG <= 0) GG.preventDefault(), null === (wG = bG.at(-1)) || void 0 === wG || wG.focus();
      else if (!GG.shiftKey && (-1 === ZG || ZG === bG.length - 1)) {
        var SG;
        GG.preventDefault(), null === (SG = bG[0]) || void 0 === SG || SG.focus()
      }
    }

    function eS() {
      const GG = (0, CG.useRef)(null);
      return (0, CG.useCallback)((bG => {
        var ZG;
        bG ? (GG.current = document.activeElement, bG.focus()) : null === (ZG = GG.current) || void 0 === ZG || ZG.focus()
      }), [])
    }

    function RS(GG) {
      let {
        percent: bG,
        label: ZG,
        levelUpToken: wG,
        colour: SG
      } = GG;
      return (0, aS.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": ZG,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": bG,
        "aria-valuetext": ZG,
        children: [(0, aS.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${bG/100})`
          }
        }), null !== wG && void 0 !== wG && (0, aS.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": SG
          }
        }, wG)]
      })
    }

    function TS(GG) {
      let {
        mount: bG
      } = GG;
      return (0, aS.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: bG,
        hidden: !0,
        children: (0, aS.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, aS.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, aS.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function HS(GG, bG, ZG, wG) {
      (0, CG.useLayoutEffect)((() => {
        const SG = GG.current;
        if (!ZG || null === bG || void 0 === bG || !bG.local || !SG) return;
        const LG = Array.from(SG.querySelectorAll(".SkyblockMapNode")),
          yG = [...bG.points, ...bG.portals],
          kG = () => {
            const GG = SG.clientWidth,
              ZG = SG.clientHeight,
              kG = LG.map(((SG, LG) => {
                const kG = yG[LG];
                return {
                  id: kG.id,
                  portal: LG >= bG.points.length,
                  x: kG.position[0] * GG / 100,
                  y: kG.position[1] * ZG / 100,
                  width: SG.offsetWidth / wG,
                  height: SG.offsetHeight / wG
                }
              })),
              UG = new Map(yG.map(((GG, bG) => [GG.id, LG[bG]])));
            for (const bG of function(GG, bG, ZG) {
                const wG = [],
                  SG = [...GG].sort(((GG, bG) => Number(bG.portal) - Number(GG.portal) || GG.id.localeCompare(bG.id)));
                for (const LG of SG) {
                  const GG = GG => Math.max(LG.width / 2, Math.min(bG - LG.width / 2, GG)),
                    SG = GG => Math.max(LG.height / 2, Math.min(ZG - LG.height / 2, GG)),
                    yG = [GG(LG.x)],
                    kG = [SG(LG.y)];
                  for (const bG of wG) yG.push(GG(bG.x - (bG.width + LG.width) / 2 - 4), GG(bG.x + (bG.width + LG.width) / 2 + 4)), kG.push(SG(bG.y - (bG.height + LG.height) / 2 - 4), SG(bG.y + (bG.height + LG.height) / 2 + 4));
                  let UG = {
                      ...LG,
                      x: yG[0],
                      y: kG[0]
                    },
                    YG = 1 / 0,
                    VG = 1 / 0;
                  for (const bG of new Set(yG))
                    for (const GG of new Set(kG)) {
                      let ZG = 0;
                      for (const yG of wG) ZG += Math.max(0, (LG.width + yG.width) / 2 + 4 - Math.abs(bG - yG.x)) * Math.max(0, (LG.height + yG.height) / 2 + 4 - Math.abs(GG - yG.y));
                      const SG = (bG - LG.x) ** 2 + (GG - LG.y) ** 2;
                      (ZG < YG || ZG === YG && SG < VG) && (UG = {
                        ...LG,
                        x: bG,
                        y: GG
                      }, YG = ZG, VG = SG)
                    }
                  wG.push(UG)
                }
                return wG
              }(kG, GG, ZG)) {
              const GG = UG.get(bG.id);
              GG.style.left = `${bG.x}px`, GG.style.top = `${bG.y}px`
            }
          };
        kG();
        const UG = new ResizeObserver(kG);
        UG.observe(SG);
        for (const GG of LG) UG.observe(GG);
        return () => {
          UG.disconnect()
        }
      }), [GG, bG, ZG, wG])
    }
    const tS = {
        zoom: 1,
        x: 0,
        y: 0
      },
      DS = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function NS(GG, bG, ZG) {
      return Math.min(ZG, Math.max(bG, GG))
    }

    function OS(GG, bG, ZG) {
      const wG = Math.min(1, ZG * bG / GG),
        SG = Math.min(1, GG / (ZG * bG));
      return {
        x0: (1 - wG) / 2,
        y0: (1 - SG) / 2,
        x1: (1 + wG) / 2,
        y1: (1 + SG) / 2
      }
    }

    function xS(GG, bG, ZG, wG) {
      const SG = bG * (wG - ZG);
      if (SG <= 1) return .5 - bG * (ZG + wG) / 2;
      const LG = .45 * Math.min(1, SG - 1);
      return NS(GG, 1 - bG * wG - LG, LG - bG * ZG)
    }

    function BS(GG, bG) {
      const ZG = NS(GG.zoom, 1, 12);
      return {
        zoom: ZG,
        x: xS(GG.x, ZG, bG.x0, bG.x1),
        y: xS(GG.y, ZG, bG.y0, bG.y1)
      }
    }

    function GL(GG, bG, ZG, wG) {
      let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : DS;
      const LG = NS(GG.zoom * bG, 1, 12),
        yG = LG / GG.zoom;
      return BS({
        zoom: LG,
        x: ZG - (ZG - GG.x) * yG,
        y: wG - (wG - GG.y) * yG
      }, SG)
    }

    function bL(GG, bG, ZG, wG) {
      const [SG, LG] = (0, CG.useState)(tS);
      (0, CG.useEffect)((() => {
        LG(tS)
      }), [ZG]), (0, CG.useEffect)((() => {
        const ZG = GG.current;
        if (!bG || !ZG) return;
        const SG = () => OS(ZG.clientWidth, ZG.clientHeight, wG),
          yG = GG => {
            const bG = ZG.getBoundingClientRect();
            return {
              x: (GG.clientX - bG.left) / bG.width,
              y: (GG.clientY - bG.top) / bG.height
            }
          },
          kG = new Map;
        let UG = {
            x: 0,
            y: 0
          },
          YG = !1,
          VG = 0;
        const pG = GG => {
            GG.preventDefault();
            const bG = GG.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * GG.deltaY : GG.deltaY,
              ZG = yG(GG);
            LG((GG => GL(GG, Math.exp(.0015 * -bG), ZG.x, ZG.y, SG())))
          },
          fG = GG => {
            "mouse" === GG.pointerType && 0 !== GG.button || (kG.set(GG.pointerId, yG(GG)), 1 === kG.size && (UG = {
              x: GG.clientX,
              y: GG.clientY
            }, YG = !1), VG = 0)
          },
          QG = GG => {
            const bG = kG.get(GG.pointerId);
            if (!bG) return;
            const wG = yG(GG);
            if (kG.set(GG.pointerId, wG), 2 === kG.size) {
              const [GG, bG] = [...kG.values()], ZG = Math.hypot(GG.x - bG.x, GG.y - bG.y);
              if (VG > 0) {
                const wG = ZG / VG;
                LG((ZG => GL(ZG, wG, (GG.x + bG.x) / 2, (GG.y + bG.y) / 2, SG())))
              }
              return VG = ZG, void(YG = !0)
            }!YG && Math.hypot(GG.clientX - UG.x, GG.clientY - UG.y) < 4 || (YG || (YG = !0, ZG.setPointerCapture(GG.pointerId)), LG((GG => function(GG, bG, ZG) {
              let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : DS;
              return BS({
                zoom: GG.zoom,
                x: GG.x + bG,
                y: GG.y + ZG
              }, wG)
            }(GG, wG.x - bG.x, wG.y - bG.y, SG()))))
          },
          KG = GG => {
            kG.delete(GG.pointerId), VG = 0
          },
          hG = GG => {
            YG && (GG.stopPropagation(), GG.preventDefault(), YG = !1)
          },
          dG = new ResizeObserver((() => {
            LG((GG => BS(GG, SG())))
          }));
        return dG.observe(ZG), ZG.addEventListener("wheel", pG, {
          passive: !1
        }), ZG.addEventListener("pointerdown", fG), ZG.addEventListener("pointermove", QG), ZG.addEventListener("pointerup", KG), ZG.addEventListener("pointercancel", KG), ZG.addEventListener("click", hG, !0), () => {
          dG.disconnect(), ZG.removeEventListener("wheel", pG), ZG.removeEventListener("pointerdown", fG), ZG.removeEventListener("pointermove", QG), ZG.removeEventListener("pointerup", KG), ZG.removeEventListener("pointercancel", KG), ZG.removeEventListener("click", hG, !0)
        }
      }), [GG, bG, ZG, wG]);
      return {
        view: SG,
        zoomBy: bG => {
          const ZG = GG.current;
          ZG && LG((GG => GL(GG, bG, .5, .5, OS(ZG.clientWidth, ZG.clientHeight, wG))))
        }
      }
    }

    function ZL(GG) {
      var bG, ZG, wG, SG;
      let {
        controller: LG,
        navigation: yG
      } = GG;
      const kG = (0, vS.j)(fG, LG.getSnapshot()),
        {
          t: UG
        } = (0, FS.w)(),
        YG = eS(),
        VG = kG.presentation,
        pG = (0, CG.useRef)(null),
        QG = (0, CG.useRef)(null),
        KG = Boolean(kG.open && (null === VG || void 0 === VG ? void 0 : VG.local) && VG.background),
        hG = bL(pG, KG, `${kG.open}|${kG.tab}|${null===VG||void 0===VG||null===(bG=VG.background)||void 0===bG?void 0:bG.geometryKey}`, null !== (ZG = null === VG || void 0 === VG || null === (wG = VG.background) || void 0 === wG ? void 0 : wG.ratio) && void 0 !== ZG ? ZG : 2);
      if (HS(QG, VG, kG.open, hG.view.zoom), !VG || !kG.open) return null;
      const dG = VG.local ? VG.background : null,
        JG = {
          "--map-ratio": String(null !== (SG = null === dG || void 0 === dG ? void 0 : dG.ratio) && void 0 !== SG ? SG : 2),
          backgroundColor: null === dG || void 0 === dG ? void 0 : dG.colour
        },
        rG = {
          "--map-zoom": String(hG.view.zoom),
          transform: `translate(${100*hG.view.x}%, ${100*hG.view.y}%) scale(${hG.view.zoom})`
        };
      return (0, aS.jsx)(qS.b, {
        show: kG.open,
        close: LG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: YG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, aS.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, aS.jsx)("h2", {
                id: "skyblockMapTitle",
                children: UG("skyblockGame:map")
              }), VG.minimap && (0, aS.jsx)("p", {
                children: VG.minimap.caption
              })]
            }), (0, aS.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((GG => (0, aS.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": GG === kG.tab ? "true" : void 0,
                className: XS()({
                  Selected: GG === kG.tab
                }),
                "aria-pressed": GG === kG.tab,
                onClick: () => {
                  LG.selectTab(GG)
                },
                children: UG("local" === GG ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, GG)))
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              onClick: LG.dismiss
            })]
          }), (0, aS.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, aS.jsxs)("div", {
              ref: pG,
              className: XS()("SkyblockMapCanvas", {
                Local: VG.local,
                Overview: !VG.local,
                Zoomed: hG.view.zoom > 1
              }),
              style: JG,
              children: [(0, aS.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: KG ? rG : void 0,
                children: (0, aS.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: QG,
                  children: [dG && (0, aS.jsx)(sS, {
                    className: "SkyblockMapTerrain",
                    imageKey: dG.imageKey,
                    fallbackImageKey: dG.fallbackImageKey,
                    geometryKey: dG.geometryKey,
                    alt: dG.label
                  }), VG.local && (0, aS.jsx)(TS, {
                    mount: yG.display.mountMapSearchArea
                  }), !VG.local && (0, aS.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: VG.connections.map((GG => (0, aS.jsx)("line", {
                      className: XS()({
                        Explored: GG.explored
                      }),
                      x1: GG.start[0],
                      y1: GG.start[1],
                      x2: GG.end[0],
                      y2: GG.end[1]
                    }, GG.id)))
                  }), VG.points.map((GG => {
                    const bG = !VG.local && GG.thumbnail ? MS[GG.thumbnail] : void 0;
                    return (0, aS.jsxs)("div", {
                      className: XS()("SkyblockMapNode", {
                        Current: GG.current
                      }),
                      style: {
                        left: `${GG.position[0]}%`,
                        top: `${GG.position[1]}%`
                      },
                      children: [(0, aS.jsxs)(nS.d, {
                        className: XS()("SkyblockMapPin", {
                          Unknown: !GG.visited,
                          Current: GG.current
                        }),
                        disabled: kG.pending,
                        onClick: () => {
                          LG.travel(GG.travelKind, GG.travelId)
                        },
                        children: [bG && (0, aS.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: bG,
                          alt: ""
                        }), !bG && (0, aS.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, aS.jsx)(lS, {
                            icon: GG.icon
                          })
                        }), (0, aS.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: GG.name
                        })]
                      }), GG.current && (0, aS.jsx)("span", {
                        className: XS()("SkyblockMapHereBadge", {
                          Above: GG.position[1] > 50
                        }),
                        children: UG("skyblockGame:mapYouAreHere")
                      })]
                    }, GG.id)
                  })), VG.portals.map((GG => (0, aS.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${GG.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${GG.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, aS.jsxs)(nS.d, {
                      className: "SkyblockMapPin",
                      disabled: kG.pending,
                      onClick: () => {
                        LG.travel(GG.travelKind, GG.travelId)
                      },
                      children: [(0, aS.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: GG.colour
                        },
                        "aria-hidden": "true",
                        children: (0, aS.jsx)(lS, {
                          icon: GG.icon
                        })
                      }), (0, aS.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: GG.name
                      })]
                    })
                  }, GG.id))), VG.local && (0, aS.jsx)(jS, {
                    controller: yG
                  })]
                })
              }), KG && (0, aS.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, aS.jsx)("button", {
                  type: "button",
                  "aria-label": UG("skyblockGame:mapZoomIn"),
                  disabled: hG.view.zoom >= 12,
                  onClick: () => {
                    hG.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, aS.jsx)("button", {
                  type: "button",
                  "aria-label": UG("skyblockGame:mapZoomOut"),
                  disabled: hG.view.zoom <= 1,
                  onClick: () => {
                    hG.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, aS.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: kG.feedback
              })]
            })
          }), (0, aS.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [VG.progress && (0, aS.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, aS.jsx)("span", {
                children: VG.progress
              }), (0, aS.jsx)(RS, {
                percent: VG.percent,
                label: VG.progress
              })]
            }), VG.noLandmarks && (0, aS.jsx)("span", {
              children: UG("skyblockGame:mapNoLandmarks")
            }), VG.canTravel && (0, aS.jsx)("span", {
              className: "SkyblockMapHint",
              children: UG("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function wL(GG) {
      let {
        view: bG,
        controller: ZG,
        navigation: wG
      } = GG;
      const {
        t: SG
      } = (0, FS.w)(), {
        isTouchScreen: LG
      } = (0, uS.o)(["isTouchScreen"]);
      return (0, aS.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": SG("skyblockGame:mapLocal"),
        children: [LG && (0, aS.jsx)(nS.d, {
          className: "SkyblockMinimapOpen",
          onClick: ZG.showLocal,
          children: SG("skyblockGame:map")
        }), (0, aS.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: bG.colour
          },
          children: [(0, aS.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: wG.display.mountTerrain,
            style: {
              width: bG.width,
              height: bG.height
            },
            children: [(0, aS.jsx)(sS, {
              imageKey: bG.imageKey,
              fallbackImageKey: bG.fallbackImageKey,
              geometryKey: bG.geometryKey,
              alt: bG.label
            }), (0, aS.jsx)(TS, {
              mount: wG.display.mountMinimapSearchArea
            }), bG.markers.map((GG => (0, aS.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${GG.position[0]}%`,
                top: `${GG.position[1]}%`,
                color: GG.colour
              },
              title: GG.name,
              children: (0, aS.jsx)(lS, {
                icon: GG.icon
              })
            }, GG.id)))]
          }), (0, aS.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: SG("skyblockGame:mapYouAreHere"),
            children: (0, aS.jsx)(lS, {
              icon: "player"
            })
          })]
        }), (0, aS.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: bG.caption
        })]
      })
    }

    function SL(GG) {
      let {
        controller: bG
      } = GG;
      return (0, aS.jsxs)("div", {
        className: "SkyblockCompass",
        ref: bG.display.mountCompass,
        children: [(0, aS.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, aS.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, aS.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function LL(GG) {
      let {
        controller: bG,
        surface: ZG
      } = GG;
      const {
        t: wG
      } = (0, FS.w)(), SG = (0, vS.j)(yZ, bG.getSnapshot()), LG = eS();
      return SG.enabled ? (0, aS.jsxs)(aS.Fragment, {
        children: ["hud" === ZG && (0, aS.jsx)(iS.d, {
          placement: "statBars",
          children: SG.hud && (0, aS.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": SG.hud.colour
            },
            children: [(0, aS.jsx)(RS, {
              percent: SG.hud.skill.percent,
              label: SG.hud.skill.xp,
              levelUpToken: SG.hud.levelUpToken,
              colour: SG.hud.colour
            }), (0, aS.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, aS.jsxs)("span", {
                children: [SG.hud.skill.label, " \xb7 ", SG.hud.skill.level]
              }), (0, aS.jsx)("span", {
                children: SG.hud.gain
              })]
            })]
          })
        }), "hud" === ZG && (0, aS.jsx)(iS.d, {
          children: SG.hud && (0, aS.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, aS.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, aS.jsx)("strong", {
                children: SG.hud.skill.label
              }), (0, aS.jsx)("span", {
                children: SG.hud.gain
              })]
            }), (0, aS.jsx)(RS, {
              percent: SG.hud.skill.percent,
              label: SG.hud.skill.xp,
              levelUpToken: SG.hud.levelUpToken,
              colour: SG.hud.colour
            }), (0, aS.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, aS.jsx)("span", {
                children: SG.hud.skill.level
              }), (0, aS.jsx)("span", {
                children: SG.hud.skill.xp
              })]
            })]
          })
        }), "menu" === ZG && (0, aS.jsx)(qS.b, {
          show: SG.open,
          close: bG.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, aS.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: LG,
            onKeyDown: gS,
            children: [(0, aS.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, aS.jsxs)("div", {
                children: [(0, aS.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: wG("skyblockGame:skills")
                }), (0, aS.jsx)("p", {
                  children: wG("skyblockGame:skillsIntro")
                })]
              }), (0, aS.jsx)(nS.j, {
                padIgnore: !0,
                onClick: bG.dismiss
              })]
            }), (0, aS.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, aS.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: SG.skills.map((GG => (0, aS.jsxs)(nS.d, {
                  className: XS()("SkyblockSkillCard", {
                    Selected: GG.selected
                  }),
                  ariaPressed: GG.selected,
                  onClick: () => {
                    bG.select(GG.id)
                  },
                  children: [(0, aS.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, aS.jsx)(WS.b, {
                      itemName: GG.icon,
                      amount: 0
                    })
                  }), (0, aS.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, aS.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, aS.jsx)("strong", {
                        children: GG.label
                      }), (0, aS.jsx)("span", {
                        children: GG.level
                      })]
                    }), (0, aS.jsx)(RS, {
                      percent: GG.percent,
                      label: `${GG.label}: ${GG.xp}`
                    }), (0, aS.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: GG.xp
                    })]
                  })]
                }, GG.id)))
              }), SG.detail && (0, aS.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, aS.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, aS.jsx)(WS.b, {
                    itemName: SG.detail.icon,
                    amount: 0
                  })
                }), (0, aS.jsx)("h3", {
                  children: SG.detail.label
                }), (0, aS.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: SG.detail.level
                }), (0, aS.jsx)("p", {
                  children: SG.detail.description
                }), (0, aS.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, aS.jsx)("strong", {
                    children: wG("skyblockGame:currentBenefit")
                  }), (0, aS.jsx)("span", {
                    children: SG.detail.benefit
                  })]
                }), (0, aS.jsx)(RS, {
                  percent: SG.detail.percent,
                  label: SG.detail.xp
                }), (0, aS.jsx)("p", {
                  children: SG.detail.xp
                }), (0, aS.jsx)("h4", {
                  children: wG("skyblockGame:earnXp")
                }), (0, aS.jsx)("ul", {
                  children: SG.detail.sources.map((GG => (0, aS.jsx)("li", {
                    children: GG
                  }, GG)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var yL = ZG(1320),
      kL = ZG(4858),
      UL = ZG(333);

    function YL(GG) {
      let {
        item: bG
      } = GG;
      return (0, aS.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, aS.jsx)(WS.b, {
          itemName: bG,
          amount: 0
        })
      })
    }

    function VL(GG) {
      let {
        name: bG,
        percent: ZG,
        progress: wG
      } = GG;
      return (0, aS.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, aS.jsx)(RS, {
          percent: ZG,
          label: `${(0,UL.Nb)(bG)}: ${wG}`
        }), (0, aS.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: wG
        })]
      })
    }

    function pL(GG) {
      let {
        subquests: bG,
        showDescriptions: ZG = !1
      } = GG;
      return (0, aS.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: bG.map((GG => {
          const bG = ZG && "completed" === GG.status,
            wG = (0, aS.jsxs)("li", {
              className: XS()("SkyblockQuestStep", GG.status, {
                JustFinished: GG.justFinished,
                JustUnlocked: GG.justUnlocked
              }),
              tabIndex: bG ? 0 : void 0,
              children: [null !== GG.iconItem && (0, aS.jsx)(YL, {
                item: GG.iconItem
              }), null === GG.iconItem && (0, aS.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === GG.status ? "\u2713" : "skipped" === GG.status ? "\u2212" : "\u25cb"
              }), (0, aS.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, aS.jsx)("strong", {
                  children: (0, aS.jsx)(kL.b, {
                    text: GG.name
                  })
                }), ZG && !bG && (0, aS.jsx)("span", {
                  children: (0, aS.jsx)(kL.b, {
                    text: GG.description
                  })
                }), null !== GG.barPercent && (0, aS.jsx)(VL, {
                  name: GG.name,
                  percent: GG.barPercent,
                  progress: GG.progress
                }), null === GG.barPercent && !bG && (0, aS.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: GG.statusLabel
                })]
              })]
            }, GG.id);
          return bG ? (0, aS.jsx)(yL.h, {
            delayShow: 200,
            tooltipInner: (0, aS.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, aS.jsx)("span", {
                children: (0, aS.jsx)(kL.b, {
                  text: GG.description
                })
              }), (0, aS.jsx)("strong", {
                children: GG.statusLabel
              })]
            }),
            children: wG
          }, GG.id) : wG
        }))
      })
    }

    function fL(GG) {
      let {
        quest: bG,
        select: ZG
      } = GG;
      const {
        t: wG
      } = (0, FS.w)(), SG = bG.focusStep;
      return (0, aS.jsxs)(nS.d, {
        className: XS()("SkyblockQuestCard", {
          Selected: bG.selected,
          Tracked: bG.tracked
        }),
        onClick: () => {
          ZG(bG.id)
        },
        children: [(0, aS.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, aS.jsx)("strong", {
            children: (0, aS.jsx)(kL.b, {
              text: bG.name
            })
          }), bG.tracked && (0, aS.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: wG("skyblockGame:currentQuest")
          })]
        }), SG && (0, aS.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== SG.iconItem && (0, aS.jsx)(YL, {
            item: SG.iconItem
          }), (0, aS.jsx)(VL, {
            name: SG.name,
            percent: SG.barPercent,
            progress: SG.progress
          })]
        }), (0, aS.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: bG.progress
        })]
      })
    }

    function QL(GG) {
      let {
        controller: bG,
        surface: ZG
      } = GG;
      const wG = (0, vS.j)(VZ, bG.getSnapshot()),
        {
          t: SG
        } = (0, FS.w)(),
        LG = eS();
      return wG.enabled ? (0, aS.jsxs)(aS.Fragment, {
        children: ["hud" === ZG && (0, aS.jsx)(aS.Fragment, {
          children: wG.tracked && (0, aS.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: YZ,
            children: (0, aS.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [wG.trackedStepPulse > 0 && (0, aS.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, wG.trackedStepPulse), (0, aS.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: SG("skyblockGame:currentQuest")
              }), (0, aS.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, aS.jsx)("strong", {
                  children: (0, aS.jsx)(kL.b, {
                    text: wG.tracked.name
                  })
                }), null !== wG.tracked.clock && (0, aS.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: wG.tracked.clock
                })]
              }), (0, aS.jsx)(pL, {
                subquests: wG.tracked.subquests
              })]
            })
          })
        }), "menu" === ZG && (0, aS.jsx)(qS.b, {
          show: wG.open,
          close: bG.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, aS.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: LG,
            onKeyDown: gS,
            children: [(0, aS.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, aS.jsx)("div", {
                children: (0, aS.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: SG("skyblockGame:quests")
                })
              }), (0, aS.jsx)(nS.j, {
                padIgnore: !0,
                onClick: bG.dismiss
              })]
            }), (0, aS.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, aS.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, aS.jsx)("h3", {
                  children: SG("skyblockGame:current")
                }), 0 === wG.active.length && (0, aS.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: SG("skyblockGame:noActiveQuests")
                }), wG.active.map((GG => (0, aS.jsx)(fL, {
                  quest: GG,
                  select: bG.select
                }, GG.id))), (0, aS.jsx)("h3", {
                  children: (0, aS.jsxs)("button", {
                    type: "button",
                    className: XS()("SkyblockQuestSectionToggle", {
                      Expanded: wG.completedExpanded
                    }),
                    "aria-expanded": wG.completedExpanded,
                    onClick: bG.toggleCompleted,
                    children: [(0, aS.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), SG("skyblockGame:completed"), (0, aS.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: wG.completed.length
                    })]
                  })
                }), wG.completedExpanded && 0 === wG.completed.length && (0, aS.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: SG("skyblockGame:noCompletedQuests")
                }), wG.completedExpanded && wG.completed.map((GG => (0, aS.jsx)(fL, {
                  quest: GG,
                  select: bG.select
                }, GG.id)))]
              }), wG.detail && (0, aS.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [wG.detail.completed && (0, aS.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: SG("skyblockGame:completedQuest")
                }), (0, aS.jsx)("h3", {
                  children: (0, aS.jsx)(kL.b, {
                    text: wG.detail.name
                  })
                }), (0, aS.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, aS.jsx)(kL.b, {
                    text: wG.detail.description
                  })
                }), (0, aS.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [wG.detail.progress, null !== wG.detail.clock && (0, aS.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: wG.detail.clock
                  })]
                }), (0, aS.jsx)(pL, {
                  subquests: wG.detail.subquests,
                  showDescriptions: !0
                }), wG.detail.tracked && (0, aS.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: wG.detail.trackLabel
                }), !wG.detail.completed && !wG.detail.tracked && (0, aS.jsx)(nS.k, {
                  onClick: bG.trackSelected,
                  disabled: !wG.detail.canTrack,
                  children: wG.detail.trackLabel
                }), wG.detail.canViewDialogue && (0, aS.jsx)(nS.d, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: bG.viewDialogue,
                  children: SG("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var KL = ZG(1016),
      hL = ZG(2602);

    function dL(GG, bG, ZG, wG, SG) {
      const LG = GG => "linear" === SG ? GG : {
          Bw: SG,
          point: GG
        },
        yG = {};
      for (const [kG, UG] of wG)
        for (const [bG, ZG] of Object.entries(GG(kG, UG, LG))) yG[bG] ??= {
          timeline: []
        }, yG[bG].timeline.push(ZG);
      return {
        tw: bG,
        loop: ZG,
        Nw: yG
      }
    }
    const JL = .547,
      rL = .022,
      zL = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      EL = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function oL(GG, bG, ZG) {
      const {
        drop: wG = 0,
        shift: SG = 0,
        torso: LG = 0,
        nod: yG = 0,
        tilt: kG = 0,
        legs: UG = [0, 0],
        arms: YG = 0,
        spread: VG = 0
      } = bG, pG = JL * Math.cos(LG) - rL * Math.sin(LG), fG = JL * Math.sin(LG) + rL * Math.cos(LG), QG = ZG([0, -wG, SG]);
      return {
        LowerBody: {
          timeFraction: GG,
          position: QG,
          rotation: ZG([0, 0, 0])
        },
        UpperBody: {
          timeFraction: GG,
          position: QG,
          rotation: ZG([LG, 0, kG])
        },
        HeadMesh: {
          timeFraction: GG,
          position: ZG([0, pG - JL - wG, fG - rL + SG]),
          rotation: ZG([LG + yG, 0, kG])
        },
        LegLeftMesh: {
          timeFraction: GG,
          rotation: ZG([UG[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: GG,
          rotation: ZG([UG[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: GG,
          rotation: ZG([YG, 0, VG])
        },
        ArmRightMesh: {
          timeFraction: GG,
          rotation: ZG([YG, 0, -VG])
        }
      }
    }

    function XL(GG, bG, ZG) {
      return dL(oL, GG, bG, ZG, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function uL(GG) {
      return "number" === typeof GG ? [GG, GG] : GG
    }

    function iL(GG, bG, ZG) {
      const {
        rise: wG = 0,
        shift: SG = 0,
        torso: LG = 0,
        twist: yG = 0,
        tilt: kG = 0,
        nod: UG = 0,
        cock: YG = 0,
        arms: VG = 0,
        spread: pG = 0
      } = bG, [fG, QG] = uL(VG), [KG, hG] = uL(pG);
      return {
        TorsoNode: {
          timeFraction: GG,
          position: ZG([0, wG, SG]),
          rotation: ZG([LG, yG, kG])
        },
        HeadMesh: {
          timeFraction: GG,
          rotation: ZG([UG, 0, YG])
        },
        ArmLeftMesh: {
          timeFraction: GG,
          rotation: ZG([fG, 0, KG])
        },
        ArmRightMesh: {
          timeFraction: GG,
          rotation: ZG([QG, 0, -hG])
        }
      }
    }
    const CL = [1.0625, -1, 0];

    function WL(GG) {
      return "number" === typeof GG ? [GG, GG] : GG
    }

    function mL(GG, bG, ZG) {
      const {
        drop: wG = 0,
        shift: SG = 0,
        torso: LG = 0,
        tilt: yG = 0,
        nod: kG = 0,
        cock: UG = 0,
        legs: YG = [0, 0],
        arms: VG = 0,
        spread: pG = 0
      } = bG, [fG, QG] = WL(VG), [KG, hG] = WL(pG), dG = -LG, JG = -yG, [rG, zG, EG] = function(GG, bG) {
        const [ZG, wG, SG] = [-CL[0], CL[1], -CL[2]], LG = ZG * Math.cos(bG) - wG * Math.sin(bG), yG = ZG * Math.sin(bG) + wG * Math.cos(bG);
        return [LG - ZG, -(yG * Math.cos(GG) - SG * Math.sin(GG) - wG), yG * Math.sin(GG) + SG * Math.cos(GG) - SG]
      }(dG, JG), oG = ZG([0, -wG, SG]);
      return {
        TorsoNode: {
          timeFraction: GG,
          position: ZG([rG, zG - wG, EG + SG]),
          rotation: ZG([dG, 0, JG])
        },
        HeadMesh: {
          timeFraction: GG,
          rotation: ZG([-kG, 0, -UG])
        },
        ArmLeftMesh: {
          timeFraction: GG,
          rotation: ZG([-fG, 0, -KG])
        },
        ArmRightMesh: {
          timeFraction: GG,
          rotation: ZG([-QG, 0, hG])
        },
        LegLeftMesh: {
          timeFraction: GG,
          position: oG,
          rotation: ZG([-YG[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: GG,
          position: oG,
          rotation: ZG([-YG[1], 0, 0])
        }
      }
    }
    var IL = ZG(37503),
      FL = ZG(38874),
      vL = ZG(39061);

    function aL(GG, bG, ZG) {
      var wG, SG;
      const LG = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return GG + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - GG) * ZG
        },
        [yG, kG] = null !== (wG = GG.legs) && void 0 !== wG ? wG : [0, 0],
        [UG, YG] = null !== (SG = bG.legs) && void 0 !== SG ? SG : [0, 0];
      return {
        drop: LG(GG.drop, bG.drop),
        shift: LG(GG.shift, bG.shift),
        torso: LG(GG.torso, bG.torso),
        nod: LG(GG.nod, bG.nod),
        tilt: LG(GG.tilt, bG.tilt),
        legs: [LG(yG, UG), LG(kG, YG)],
        arms: LG(GG.arms, bG.arms),
        spread: LG(GG.spread, bG.spread)
      }
    }
    const cL = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      lL = XL(4400, !0, [
        [0, cL],
        [.16, {
          ...cL,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, cL],
        [.44, {
          ...cL,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, aL(cL, zL, .7)],
        [.66, aL(cL, zL, .78)],
        [.74, aL(cL, EL, .65)],
        [.86, {
          ...cL,
          drop: .14
        }],
        [1, cL]
      ], "catmull-rom-spline"),
      jL = {
        ...cL,
        drop: .14,
        torso: .3,
        spread: .4
      },
      PL = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      ML = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      AL = {
        caveGolem: lL,
        magmaGolem: XL(3600, !0, [
          [0, jL],
          [.12, {
            ...jL,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...jL,
            tilt: -.08
          }],
          [.4, {
            ...jL,
            tilt: .06,
            drop: .11
          }],
          [.52, aL(jL, zL, .9)],
          [.62, aL(jL, EL, .8)],
          [.7, aL(jL, EL, .45)],
          [.78, aL(jL, EL, .85)],
          [.9, {
            ...jL,
            drop: .17
          }],
          [1, jL]
        ], "catmull-rom-spline"),
        frostWraith: function(GG, bG, ZG) {
          return dL(iL, GG, bG, ZG, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, PL],
          [.14, {
            ...PL,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...PL,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...PL,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...PL,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...PL,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...PL,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...PL,
            rise: .16,
            tilt: -.04
          }],
          [1, PL]
        ], "catmull-rom-spline"),
        tikiTerror: function(GG, bG, ZG) {
          return dL(mL, GG, bG, ZG, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, ML],
          [.16, {
            ...ML,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, ML],
          [.44, {
            ...ML,
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
            ...ML,
            drop: .1
          }],
          [1, ML]
        ], "catmull-rom-spline")
      },
      sL = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      qL = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      nL = Object.fromEntries(Object.entries(AL).map((GG => {
        let [bG, ZG] = GG;
        return [bG, (0, vL.c)((0, IL.i)(ZG), bG)]
      })));

    function gL(GG) {
      const bG = function(GG) {
        var bG;
        const ZG = (0, FL.e)(GG).poseRig;
        return null !== (bG = qL[GG]) && void 0 !== bG ? bG : void 0 === ZG ? null : sL[ZG]
      }(GG);
      return null === bG ? null : nL[bG]
    }

    function eL(GG) {
      return {
        "--difficulty-colour": GG
      }
    }
    const RL = (0, CG.lazy)((() => (0, hL.e)(ZG.e(203).then((() => ZG(41948))), (GG => GG.MobPreview))));

    function TL(GG) {
      var bG, ZG, wG;
      let {
        picker: SG,
        controller: LG
      } = GG;
      const {
        t: yG
      } = (0, FS.w)(), kG = eS(), {
        page: UG
      } = SG;
      return (0, aS.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: kG,
        onKeyDown: GG => {
          "ArrowLeft" === GG.key ? (GG.preventDefault(), GG.stopPropagation(), LG.previous()) : "ArrowRight" === GG.key ? (GG.preventDefault(), GG.stopPropagation(), LG.next()) : gS(GG)
        },
        style: eL(UG.colour),
        children: [(0, aS.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, aS.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: SG.dungeonName
          }), (0, aS.jsx)(nS.j, {
            padIgnore: !0,
            onClick: LG.dismiss
          })]
        }), (0, aS.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, aS.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, aS.jsx)(nS.d, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !SG.canPrevious,
              onClick: LG.previous,
              children: (0, aS.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, aS.jsx)(KL.c, {
                  name: "angle-up"
                })
              })
            }), (0, aS.jsxs)("div", {
              className: XS()("SkyblockBossPickerBoss", {
                Locked: !UG.unlocked
              }),
              children: [null !== UG.bossMobType && (0, aS.jsx)(CG.Suspense, {
                fallback: (0, aS.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, aS.jsx)(RL, {
                  className: "SkyblockBossPickerModel",
                  mobType: UG.bossMobType,
                  variation: UG.bossMobVariation,
                  animation: null !== (bG = gL(UG.bossMobType)) && void 0 !== bG ? bG : void 0
                })
              }), null === UG.bossMobType && (0, aS.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, aS.jsx)(nS.d, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !SG.canNext,
              onClick: LG.next,
              children: (0, aS.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, aS.jsx)(KL.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, aS.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, aS.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [UG.beaten && (0, aS.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), UG.label]
            }), (0, aS.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (ZG = UG.bossName) && void 0 !== ZG ? ZG : "???"
            }), (0, aS.jsxs)("span", {
              className: XS()("SkyblockBossPickerRecord", {
                Locked: null !== UG.lockedHint
              }),
              children: [null !== UG.lockedHintHighlight && (0, aS.jsxs)(aS.Fragment, {
                children: [UG.lockedHintHighlight.before, (0, aS.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: eL(UG.lockedHintHighlight.colour),
                  children: [null !== UG.lockedHintHighlight.icon && (0, aS.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, aS.jsx)(WS.b, {
                      itemName: UG.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), UG.lockedHintHighlight.name]
                }), UG.lockedHintHighlight.after]
              }), null === UG.lockedHintHighlight && (null !== (wG = UG.lockedHint) && void 0 !== wG ? wG : UG.summary)]
            })]
          }), (0, aS.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: SG.pages.map((GG => (0, aS.jsx)("span", {
              className: XS()("SkyblockBossPickerDot", {
                Current: GG.current,
                Locked: !GG.unlocked
              }),
              style: eL(GG.colour)
            }, GG.difficulty)))
          }), (0, aS.jsx)(nS.n, {
            className: "SkyblockBossPickerFight",
            disabled: !UG.unlocked,
            onClick: LG.enter,
            children: yG("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function HL(GG) {
      let {
        dungeon: bG,
        select: ZG
      } = GG;
      return (0, aS.jsxs)(nS.d, {
        className: XS()("SkyblockDungeonCard", {
          Selected: bG.selected
        }),
        onClick: () => {
          ZG(bG.id)
        },
        children: [(0, aS.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, aS.jsx)("strong", {
            children: bG.name
          }), (0, aS.jsx)("span", {
            children: bG.beatenSummary
          })]
        }), (0, aS.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: bG.difficulties.map((GG => (0, aS.jsxs)("span", {
            className: XS()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: GG.beaten
            }),
            style: eL(GG.colour),
            title: GG.summary,
            children: [GG.beaten && (0, aS.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), GG.label]
          }, GG.difficulty)))
        })]
      })
    }

    function tL(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(KZ, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = eS();
      return ZG.enabled ? (0, aS.jsxs)(qS.b, {
        show: ZG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [ZG.picker && (0, aS.jsx)(TL, {
          picker: ZG.picker,
          controller: bG
        }), !ZG.picker && (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: SG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: wG("skyblockGame:dungeons")
              }), (0, aS.jsx)("p", {
                children: wG("skyblockGame:dungeonsIntro")
              })]
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              onClick: bG.dismiss
            })]
          }), (0, aS.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, aS.jsx)("div", {
              className: "SkyblockDungeonList",
              children: ZG.dungeons.map((GG => (0, aS.jsx)(HL, {
                dungeon: GG,
                select: bG.select
              }, GG.id)))
            }), ZG.detail && (0, aS.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, aS.jsx)("h3", {
                children: ZG.detail.name
              }), (0, aS.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: ZG.detail.difficulties.map((GG => (0, aS.jsxs)("li", {
                  className: XS()("SkyblockDungeonRecord", {
                    Beaten: GG.beaten
                  }),
                  children: [(0, aS.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: eL(GG.colour),
                    children: [GG.beaten && (0, aS.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), GG.label]
                  }), (0, aS.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: GG.summary
                  })]
                }, GG.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function DL(GG) {
      let {
        collection: bG,
        select: ZG
      } = GG;
      return (0, aS.jsxs)(nS.d, {
        className: XS()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: bG.selected,
          Locked: bG.locked
        }),
        ariaPressed: bG.selected,
        onClick: () => {
          ZG(bG.id)
        },
        children: [(0, aS.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, aS.jsx)(WS.b, {
            itemName: bG.icon,
            amount: 0
          })
        }), (0, aS.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, aS.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, aS.jsx)("strong", {
              children: bG.name
            }), (0, aS.jsx)("span", {
              children: bG.tier
            })]
          }), (0, aS.jsx)(RS, {
            percent: bG.percent,
            label: `${bG.name}: ${bG.progress}`
          }), (0, aS.jsx)("span", {
            className: "SkyblockSkillXp",
            children: bG.progress
          })]
        })]
      })
    }

    function NL(GG) {
      let {
        collection: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)();
      return (0, aS.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, aS.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, aS.jsx)(WS.b, {
            itemName: bG.icon,
            amount: 0
          })
        }), (0, aS.jsx)("h3", {
          children: bG.name
        }), (0, aS.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: bG.tier
        }), (0, aS.jsx)("p", {
          children: bG.locked ? ZG("skyblockGame:collectionLocked") : bG.count
        }), null !== bG.nextReward && (0, aS.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, aS.jsx)("strong", {
            children: ZG("skyblockGame:collectionNextReward")
          }), (0, aS.jsx)("span", {
            children: bG.nextReward
          })]
        }), (0, aS.jsx)(RS, {
          percent: bG.percent,
          label: bG.progress
        }), (0, aS.jsx)("p", {
          children: bG.progress
        })]
      })
    }

    function OL(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(PZ, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = eS();
      return ZG.enabled ? (0, aS.jsx)(qS.b, {
        show: ZG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: SG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: wG("skyblockGame:collections")
              }), (0, aS.jsxs)("p", {
                children: [wG("skyblockGame:collectionsIntro"), " ", ZG.tiersUnlocked]
              })]
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              onClick: bG.dismiss
            })]
          }), (0, aS.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: ZG.categories.map((GG => (0, aS.jsxs)(nS.d, {
              className: XS()("SkyblockCollectionCategory", {
                Selected: GG.selected
              }),
              ariaPressed: GG.selected,
              padTabSelected: GG.selected,
              onClick: () => {
                bG.selectCategory(GG.id)
              },
              children: [(0, aS.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, aS.jsx)(WS.b, {
                  itemName: GG.icon,
                  amount: 0
                })
              }), (0, aS.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, aS.jsx)("strong", {
                  children: GG.label
                }), (0, aS.jsx)("span", {
                  children: GG.tiers
                })]
              })]
            }, GG.id)))
          }), (0, aS.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, aS.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: ZG.collections.map((GG => (0, aS.jsx)(DL, {
                collection: GG,
                select: bG.select
              }, GG.id)))
            }), ZG.detail && (0, aS.jsx)(NL, {
              collection: ZG.detail
            })]
          })]
        })
      }) : null
    }
    const xL = ["completed", "active", "available", "locked"],
      BL = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Gy(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(DZ, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = eS();
      return ZG.enabled ? (0, aS.jsx)(qS.b, {
        show: ZG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: SG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: wG("skyblockDevQuests:title")
              }), (0, aS.jsx)("p", {
                children: wG("skyblockDevQuests:intro")
              })]
            }), (0, aS.jsx)(nS.j, {
              onClick: bG.dismiss
            })]
          }), (0, aS.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [xL.map((GG => (0, aS.jsx)("span", {
              className: XS()("SkyblockQuestGraphLegendState", GG),
              children: wG(`skyblockDevQuests:state_${GG}`)
            }, GG))), BL.map((GG => (0, aS.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, aS.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, aS.jsx)("line", {
                  className: XS()("SkyblockQuestGraphEdge", GG),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), wG(`skyblockDevQuests:edge_${GG}`)]
            }, GG)))]
          }), (0, aS.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, aS.jsxs)("div", {
              className: XS()("SkyblockQuestGraphCanvas", {
                Planning: ZG.planning
              }),
              style: {
                width: ZG.width,
                height: ZG.height
              },
              children: [(0, aS.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: ZG.width,
                height: ZG.height,
                "aria-hidden": "true",
                children: [(0, aS.jsx)("defs", {
                  children: (0, aS.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, aS.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), ZG.edges.map((GG => (0, aS.jsx)("path", {
                  className: XS()("SkyblockQuestGraphEdge", GG.kind, {
                    InPlan: GG.inPlan
                  }),
                  d: GG.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, GG.key)))]
              }), ZG.nodes.map((GG => (0, aS.jsxs)("button", {
                type: "button",
                className: XS()("SkyblockQuestGraphNode", GG.state, {
                  InPlan: GG.inPlan,
                  Hovered: GG.hovered
                }),
                style: {
                  left: GG.left,
                  top: GG.top,
                  width: 190,
                  height: 52
                },
                title: GG.id,
                onMouseEnter: () => {
                  bG.hover(GG.id)
                },
                onMouseLeave: () => {
                  bG.hover(null)
                },
                onFocus: () => {
                  bG.hover(GG.id)
                },
                onBlur: () => {
                  bG.hover(null)
                },
                onClick: () => {
                  bG.jump(GG.id)
                },
                children: [(0, aS.jsx)("strong", {
                  children: GG.name
                }), (0, aS.jsx)("span", {
                  children: GG.detail
                })]
              }, GG.id)))]
            })
          })]
        })
      }) : null
    }
    const by = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      Zy = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Uw}ms`,
        "--forge-duration": "2150ms"
      },
      wy = Array.from({
        length: 18
      }, ((GG, bG) => ({
        "--ember-left": `${(4+92*(.618034*bG%1)).toFixed(1)}%`,
        "--ember-size": 3 + bG % 3 * 2 + "px",
        "--ember-drift": 14 * (bG % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*bG%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*bG%8).toFixed(2)}s`
      })));

    function Sy(GG) {
      if (GG.style.removeProperty("--part-size"), null === GG.parentElement || "wrap" === getComputedStyle(GG.parentElement).flexWrap) return;
      const bG = [...GG.children],
        ZG = getComputedStyle(GG),
        wG = parseFloat(ZG.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        SG = (GG.clientHeight - parseFloat(ZG.rowGap) * (bG.length - 1)) / bG.length,
        LG = bG.map((GG => {
          const bG = getComputedStyle(GG),
            ZG = GG.querySelector("h3"),
            LG = GG.querySelector(".SkyblockForgeParts");
          if (null === ZG || null === LG) return wG;
          const yG = SG - parseFloat(bG.paddingTop) - parseFloat(bG.paddingBottom) - ZG.offsetHeight - parseFloat(getComputedStyle(ZG).marginBottom),
            kG = parseFloat(getComputedStyle(LG).columnGap),
            UG = LG.children.length;
          let YG = 0;
          for (let wG = 1; wG <= UG; wG++) {
            const GG = Math.ceil(UG / wG);
            YG = Math.max(YG, Math.min((LG.clientWidth - kG * (wG - 1)) / wG, (yG - kG * (GG - 1)) / GG))
          }
          return YG
        }));
      GG.style.setProperty("--part-size", `${Math.floor(Math.max(wG,Math.min(...LG)))}px`)
    }

    function Ly(GG) {
      var bG, ZG, wG, LG, yG;
      let {
        controller: kG
      } = GG;
      const UG = (0, vS.j)(hw, kG.getSnapshot()),
        {
          t: YG
        } = (0, FS.w)(),
        VG = eS(),
        pG = function() {
          const GG = (0, CG.useRef)(null),
            bG = (0, CG.useRef)(null);
          return (0, CG.useLayoutEffect)((() => {
            null !== GG.current && Sy(GG.current)
          })), (0, CG.useCallback)((ZG => {
            var wG;
            null === (wG = bG.current) || void 0 === wG || wG.disconnect(), bG.current = null, GG.current = ZG, null !== ZG && (bG.current = new ResizeObserver((() => {
              Sy(ZG)
            })), bG.current.observe(ZG))
          }), [])
        }(),
        fG = function(GG) {
          const bG = (0, CG.useRef)(null);
          return (0, CG.useLayoutEffect)((() => {
            const GG = bG.current;
            if (null !== GG) {
              GG.style.removeProperty("font-size");
              for (let bG = 1.7; bG > 1.1 && GG.scrollWidth > GG.clientWidth; bG -= .1) GG.style.fontSize = bG - .1 + "rem"
            }
          }), [GG]), (0, CG.useCallback)((GG => {
            bG.current = GG
          }), [])
        }(null === (bG = UG.preview) || void 0 === bG ? void 0 : bG.name),
        QG = (0, CG.useRef)(null),
        KG = (0, CG.useRef)({}),
        hG = UG.forging,
        dG = null !== (ZG = null === hG || void 0 === hG ? void 0 : hG.preview.tier) && void 0 !== ZG ? ZG : 0,
        JG = null !== (wG = null === hG || void 0 === hG ? void 0 : hG.preview.named) && void 0 !== wG && wG,
        rG = (0, CG.useMemo)((() => {
          return null === hG ? null : {
            flames: (GG = dG, bG = JG, Array.from({
              length: 26 + 6 * GG + (bG ? 20 : 0)
            }, ((GG, bG) => {
              const ZG = bG < 6,
                wG = Math.random() * Math.PI * 2,
                SG = ZG ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                LG = Math.cos(wG) * SG,
                yG = Math.sin(wG) * SG - 2 - 3 * Math.random(),
                kG = Math.random(),
                [UG, YG, VG] = ZG ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : kG < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : kG < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [kG < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": UG,
                "--x0": `${(.15*LG).toFixed(2)}rem`,
                "--y0": `${(.15*yG).toFixed(2)}rem`,
                "--x": `${LG.toFixed(2)}rem`,
                "--y": `${yG.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${YG.toFixed(2)}rem`,
                "--duration": `${Math.round(VG)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: pw(dG, JG)
          };
          var GG, bG
        }), [null === hG || void 0 === hG ? void 0 : hG.id]);
      if (!UG.enabled) return null;
      const zG = UG.preview,
        EG = UG.arriving,
        oG = null !== EG && !EG.sameSword,
        XG = null !== zG && (0, aS.jsx)(WS.b, {
          itemName: zG.baseSword,
          amount: 0,
          enchantmentTier: zG.enchantmentTier
        });
      return (0, aS.jsx)(qS.b, {
        show: UG.open,
        close: kG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: VG,
          onKeyDown: gS,
          children: [(0, aS.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: wy.map(((GG, bG) => (0, aS.jsx)("span", {
              style: GG
            }, bG)))
          }), (0, aS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: YG("skyblockGame:forgeTitle")
              }), (0, aS.jsx)("p", {
                children: YG("skyblockGame:forgeIntro")
              })]
            }), (0, aS.jsx)(nS.j, {
              onClick: kG.dismiss
            })]
          }), (0, aS.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, aS.jsx)("div", {
              ref: pG,
              className: XS()("SkyblockForgeSlots", {
                Locked: null !== hG
              }),
              children: UG.slots.map((GG => (0, aS.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, aS.jsx)("h3", {
                  children: GG.label
                }), (0, aS.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: GG.parts.map((bG => (0, aS.jsx)("button", {
                    type: "button",
                    className: XS()("SkyblockForgePart", {
                      Selected: bG.selected,
                      Missing: bG.placeholder
                    }),
                    disabled: bG.placeholder,
                    title: bG.placeholder ? YG("skyblockGame:forgePickParts") : bG.itemName,
                    "aria-pressed": bG.selected,
                    onClick: () => {
                      kG.select(GG.kind, bG.material)
                    },
                    children: (0, aS.jsx)(WS.b, {
                      itemName: bG.itemName,
                      amount: bG.owned
                    })
                  }, bG.material)))
                })]
              }, GG.kind)))
            }), (0, aS.jsxs)("div", {
              className: XS()("SkyblockForgeAnvil", {
                Named: null === zG || void 0 === zG ? void 0 : zG.named
              }),
              style: {
                "--tier": null === zG ? "transparent" : SG.wb[zG.enchantmentTier]
              },
              children: [(0, aS.jsxs)("div", {
                className: XS()("SkyblockForgeAltar", {
                  Forging: null !== hG
                }),
                style: null === hG ? void 0 : Zy,
                children: [(0, aS.jsxs)("div", {
                  className: XS()("SkyblockForgeMount", {
                    Arrive: null !== EG
                  }),
                  children: [null === zG && (0, aS.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, aS.jsx)(WS.b, {
                      itemName: UG.unformedSword,
                      amount: 0
                    })
                  }), null !== zG && (0, aS.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== zG && null === hG && (0, aS.jsx)("div", {
                    ref: QG,
                    className: "SkyblockForgeFloat",
                    children: (0, aS.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: XG
                    })
                  }), null !== zG && (0, aS.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Vw.map(((GG, bG) => (0, aS.jsx)("span", {
                      className: XS()({
                        Rune: "" !== GG.rune
                      }),
                      style: GG.style,
                      children: GG.rune
                    }, bG)))
                  }), null !== hG && null !== rG && (0, aS.jsxs)(aS.Fragment, {
                    children: [(0, aS.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, aS.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: rG.flames.map(((GG, bG) => (0, aS.jsx)("span", {
                        style: GG
                      }, bG)))
                    }), (0, aS.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: KG.current,
                      children: (0, aS.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: XG
                      })
                    }), (0, aS.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, aS.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (dG >= 4 || JG) && (0, aS.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, aS.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: rG.sparks.map(((GG, bG) => (0, aS.jsx)("span", {
                        style: GG
                      }, bG)))
                    }), (0, aS.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, aS.jsx)("p", {
                  className: XS()("SkyblockForgeStatus", null === (LG = UG.status) || void 0 === LG ? void 0 : LG.tone),
                  children: null === (yG = UG.status) || void 0 === yG ? void 0 : yG.text
                })]
              }), null === zG && (0, aS.jsx)("p", {
                className: XS()("SkyblockForgeName Waiting", {
                  ArriveText: oG
                }),
                children: YG(UG.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== zG && (0, aS.jsx)("h3", {
                ref: fG,
                className: XS()("SkyblockForgeName", {
                  ArriveText: oG
                }),
                title: zG.name,
                children: zG.name
              }), (null === zG || void 0 === zG ? void 0 : zG.named) && (0, aS.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: YG("skyblockGame:forgeSecret")
              }), (0, aS.jsxs)(nS.n, {
                className: "SkyblockForgeButton",
                disabled: !UG.canForge,
                title: null === zG ? void 0 : YG("skyblockGame:forgeCoalOwned", {
                  owned: String(UG.coalOwned)
                }),
                onClick: () => {
                  KG.current = function(GG) {
                    const bG = null === GG ? "none" : getComputedStyle(GG).transform,
                      ZG = new DOMMatrixReadOnly("none" === bG ? void 0 : bG);
                    return {
                      "--settle-y": `${ZG.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(ZG.b,ZG.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(QG.current), Kw(), kG.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [YG("skyblockGame:forgeButton"), null !== zG && (0, aS.jsxs)("span", {
                  className: XS()("SkyblockForgeCost", {
                    Short: zG.coalShort
                  }),
                  children: [(0, aS.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, aS.jsx)(WS.b, {
                      itemName: Gw.d,
                      amount: 0
                    })
                  }), zG.coalCost]
                })]
              })]
            }), (0, aS.jsxs)("div", {
              className: XS()("SkyblockForgeDetails", {
                Named: null === zG || void 0 === zG ? void 0 : zG.named
              }),
              children: [(0, aS.jsx)("p", {
                className: XS()("SkyblockForgeLore", {
                  ArriveText: oG
                }),
                title: null === zG || void 0 === zG ? void 0 : zG.lore,
                children: null === zG || void 0 === zG ? void 0 : zG.lore
              }), (0, aS.jsxs)("dl", {
                className: XS()("SkyblockForgeStats", {
                  ArriveText: oG
                }),
                children: [null === zG && by.map((GG => (0, aS.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, aS.jsx)("dt", {
                    children: YG(GG)
                  }), (0, aS.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, GG))), null === zG || void 0 === zG ? void 0 : zG.stats.map((GG => (0, aS.jsxs)("div", {
                  className: XS()("SkyblockForgeStat", {
                    Better: GG.better
                  }),
                  children: [(0, aS.jsx)("dt", {
                    children: GG.label
                  }), (0, aS.jsx)("dd", {
                    children: GG.value
                  })]
                }, GG.label)))]
              }), (0, aS.jsx)("ul", {
                className: XS()("SkyblockForgeEffects", {
                  ArriveText: oG
                }),
                children: null === zG || void 0 === zG ? void 0 : zG.effects.map((GG => (0, aS.jsx)("li", {
                  children: GG
                }, GG)))
              })]
            })]
          })]
        })
      })
    }
    const yy = "Doom Rivet",
      ky = "Doom Crest";

    function Uy(GG) {
      let {
        itemName: bG,
        amount: ZG,
        owned: wG
      } = GG;
      return (0, aS.jsxs)("span", {
        className: XS()("SkyblockSmugglerPrice", {
          Short: ZG > wG
        }),
        children: [(0, aS.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, aS.jsx)(WS.b, {
            itemName: bG,
            amount: 0
          })
        }), (0, aS.jsx)("span", {
          children: ZG
        })]
      })
    }

    function Yy(GG) {
      return GG.justBought ? "skyblockGame:smugglerJustBought" : GG.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function Vy(GG) {
      let {
        deal: bG,
        view: ZG,
        buy: wG
      } = GG;
      const {
        t: SG
      } = (0, FS.w)();
      return (0, aS.jsxs)("div", {
        className: XS()("SkyblockSmugglerPocket", {
          Bought: bG.justBought,
          Unaffordable: !bG.affordable,
          SoldOut: bG.soldOut && !bG.justBought
        }),
        children: [(0, aS.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, aS.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, aS.jsx)(WS.b, {
            itemName: bG.itemName,
            amount: 0,
            enchantmentTier: bG.enchantmentTier
          }), bG.amount > 1 && (0, aS.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: SG("skyblockGame:smugglerAmount", {
              amount: bG.amount
            })
          })]
        }), (0, aS.jsx)("h3", {
          children: bG.displayName
        }), (0, aS.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, aS.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [bG.rivets > 0 && (0, aS.jsx)(Uy, {
              itemName: yy,
              amount: bG.rivets,
              owned: ZG.rivetsOwned
            }), bG.crests > 0 && (0, aS.jsx)(Uy, {
              itemName: ky,
              amount: bG.crests,
              owned: ZG.crestsOwned
            })]
          }), (0, aS.jsx)(nS.d, {
            className: "SkyblockSmugglerBuy",
            disabled: bG.soldOut || !bG.affordable || ZG.pending,
            onClick: () => {
              wG(bG.slot)
            },
            children: SG(Yy(bG))
          })]
        })]
      }, bG.justBought ? ZG.boughtCount : 0)
    }

    function py(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(rw, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = eS();
      return ZG.enabled ? (0, aS.jsx)(qS.b, {
        show: ZG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: SG,
          onKeyDown: gS,
          children: [(0, aS.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, aS.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, aS.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: wG("skyblockGame:smugglerTitle")
              }), (0, aS.jsx)("p", {
                children: wG("skyblockGame:smugglerIntro")
              })]
            }), (0, aS.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, aS.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, aS.jsx)(Uy, {
                  itemName: yy,
                  amount: ZG.rivetsOwned,
                  owned: ZG.rivetsOwned
                }), (0, aS.jsx)(Uy, {
                  itemName: ky,
                  amount: ZG.crestsOwned,
                  owned: ZG.crestsOwned
                })]
              }), (0, aS.jsx)(nS.j, {
                onClick: bG.dismiss
              })]
            })]
          }), (0, aS.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: ZG.deals.map((GG => (0, aS.jsx)(Vy, {
              deal: GG,
              view: ZG,
              buy: bG.buy
            }, GG.slot)))
          }), (0, aS.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, aS.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: ZG.rotatesText
            }), null !== ZG.status && (0, aS.jsx)("span", {
              className: XS()("SkyblockSmugglerStatus", ZG.status.tone),
              children: ZG.status.text
            })]
          })]
        })
      }) : null
    }

    function fy(GG) {
      let {
        phase: bG,
        className: ZG
      } = GG;
      return (0, aS.jsx)("span", {
        className: XS()("SkyblockMoon", `Moon-${bG}`, ZG),
        "aria-hidden": "true"
      })
    }

    function Qy(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(ow, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)();
      return ZG.enabled ? (0, aS.jsx)(iS.d, {
        placement: "statBars",
        children: (0, aS.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: XS()("SkyblockPassageChip", ZG.open && "Open"),
          "aria-label": wG("skyblockGame:passageChipLabel", {
            phase: ZG.phaseName
          }),
          title: wG("skyblockGame:passageChipLabel", {
            phase: ZG.phaseName
          }),
          onMouseDown: GG => {
            GG.preventDefault()
          },
          onClick: bG.toggle,
          children: (0, aS.jsx)(fy, {
            phase: ZG.phase
          }, ZG.phase)
        })
      }) : null
    }

    function Ky(GG) {
      let {
        fish: bG
      } = GG;
      return (0, aS.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, aS.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, aS.jsx)(WS.b, {
            itemName: bG.itemName,
            amount: 0
          })
        }), (0, aS.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, aS.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: bG.displayName
          }), (0, aS.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: bG.where
          })]
        })]
      })
    }

    function hy(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(ow, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = eS();
      return ZG.enabled ? (0, aS.jsx)(qS.b, {
        show: ZG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: SG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, aS.jsx)(fy, {
              phase: ZG.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: wG("skyblockGame:passageTitle")
              }), (0, aS.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: ZG.phaseName
              })]
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              onClick: bG.dismiss
            })]
          }), (0, aS.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: wG("skyblockGame:passageIntro")
          }), (0, aS.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, aS.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, aS.jsx)("h3", {
                children: wG("skyblockGame:passageVisiting")
              }), (0, aS.jsx)("ul", {
                className: "SkyblockPassageList",
                children: ZG.visitors.map((GG => (0, aS.jsx)(Ky, {
                  fish: GG
                }, GG.itemName)))
              })]
            }), (0, aS.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== ZG.resting && (0, aS.jsxs)(aS.Fragment, {
                children: [(0, aS.jsx)("h3", {
                  children: wG("skyblockGame:passageResting")
                }), (0, aS.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, aS.jsx)(Ky, {
                    fish: ZG.resting
                  })
                })]
              }), (0, aS.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, aS.jsx)(fy, {
                  phase: ZG.nextPhase
                }), (0, aS.jsx)("span", {
                  children: ZG.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function dy() {
      return (0, aS.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((GG => (0, aS.jsx)("i", {
          style: {
            "--sparkle-index": GG
          }
        }, GG)))
      })
    }

    function Jy(GG) {
      var bG;
      let {
        charm: ZG,
        view: wG,
        controller: SG
      } = GG;
      const {
        t: LG
      } = (0, FS.w)(), yG = wG.shop, kG = (null === (bG = wG.sparkle) || void 0 === bG ? void 0 : bG.id) === ZG.id;
      return (0, aS.jsxs)("li", {
        className: XS()("SkyblockLampLightCharm", ZG.owned && "Owned", ZG.socketed && "Socketed"),
        children: [kG && (0, aS.jsx)(dy, {}, wG.sparkle.count), (0, aS.jsx)("h4", {
          children: ZG.name
        }), (0, aS.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: ZG.effect
        }), (0, aS.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: ZG.lines.map((GG => (0, aS.jsxs)("li", {
            className: XS()("SkyblockLampLightOddsLine", "better" === GG.tone ? "Better" : "worse" === GG.tone ? "Worse" : "Same"),
            children: [(0, aS.jsx)("span", {
              className: "Before",
              children: GG.before
            }), (0, aS.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, aS.jsx)("span", {
              className: "After",
              children: GG.after
            })]
          }, GG.label)))
        }), (0, aS.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: ZG.owned ? ZG.socketed ? (0, aS.jsxs)(aS.Fragment, {
            children: [(0, aS.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: LG("skyblockGame:lampLightSocketed")
            }), (0, aS.jsx)(nS.K, {
              disabled: !wG.canCommand,
              ariaLabel: LG("skyblockGame:lampLightRemoveLabel", {
                charm: ZG.name
              }),
              onClick: () => {
                SG.socket(null)
              },
              children: LG("skyblockGame:lampLightRemove")
            })]
          }) : (0, aS.jsx)(nS.d, {
            disabled: !wG.canCommand || !yG.heldRod,
            ariaLabel: LG("skyblockGame:lampLightSocketLabel", {
              charm: ZG.name
            }),
            onClick: () => {
              SG.socket(ZG.id)
            },
            children: LG("skyblockGame:lampLightSocket")
          }) : (0, aS.jsx)(nS.d, {
            disabled: !wG.canCommand || !ZG.affordable,
            ariaLabel: LG("skyblockGame:lampLightBuyLabel", {
              item: ZG.name,
              cost: ZG.cost
            }),
            onClick: () => {
              SG.buy(ZG.id)
            },
            children: ZG.cost
          })
        })]
      })
    }

    function ry(GG) {
      var bG;
      let {
        tint: ZG,
        view: wG,
        controller: SG
      } = GG;
      const {
        t: LG
      } = (0, FS.w)();
      return (0, aS.jsxs)("li", {
        className: XS()("SkyblockLampLightTint", ZG.wearing && "Wearing"),
        style: {
          "--tint-colour": ZG.colour
        },
        children: [(null === (bG = wG.sparkle) || void 0 === bG ? void 0 : bG.id) === ZG.id && (0, aS.jsx)(dy, {}, wG.sparkle.count), (0, aS.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, aS.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: ZG.name
        }), ZG.wearing ? (0, aS.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: LG("skyblockGame:lampLightWearing")
        }) : (0, aS.jsx)(nS.d, {
          disabled: !wG.canCommand || !ZG.owned && !ZG.affordable,
          ariaLabel: ZG.owned ? LG("skyblockGame:lampLightWearLabel", {
            tint: ZG.name
          }) : LG("skyblockGame:lampLightBuyLabel", {
            item: ZG.name,
            cost: ZG.cost
          }),
          onClick: () => {
            ZG.owned ? SG.wearTint(ZG.id) : SG.buy(ZG.id)
          },
          children: ZG.owned ? LG("skyblockGame:lampLightWear") : ZG.cost
        })]
      })
    }

    function zy(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(Mw, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = ZG.shop;
      return (0, aS.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, aS.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, aS.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: ZG.balance
          }), (0, aS.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": ZG.releasing,
            className: XS()("SkyblockLampLightSwitch", ZG.releasing && "On"),
            disabled: ZG.releasing ? "ready" !== ZG.status : !ZG.canCommand,
            onClick: () => {
              bG.setRelease(!ZG.releasing)
            },
            children: [(0, aS.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, aS.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), wG("skyblockGame:lampLightRelease")]
          }), (0, aS.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: wG("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== ZG.notice && (0, aS.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: ZG.notice
        }), null !== SG && (0, aS.jsxs)(aS.Fragment, {
          children: [(0, aS.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, aS.jsx)("h3", {
              children: wG("skyblockGame:lampLightCharms")
            }), (0, aS.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: SG.oddsFor
            }), (0, aS.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((GG => (0, aS.jsx)("button", {
                type: "button",
                "aria-pressed": ZG.situation === GG,
                className: XS()("SkyblockLampLightSituation", ZG.situation === GG && "Selected"),
                onClick: () => {
                  bG.setSituation(GG)
                },
                children: wG("open" === GG ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, GG)))
            })]
          }), !SG.heldRod && (0, aS.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: wG("skyblockGame:lampLightHoldRod")
          }), (0, aS.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: SG.charms.map((GG => (0, aS.jsx)(Jy, {
              charm: GG,
              view: ZG,
              controller: bG
            }, GG.id)))
          }), (0, aS.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, aS.jsx)("h3", {
              children: wG("skyblockGame:lampLightTints")
            })
          }), (0, aS.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, aS.jsxs)("li", {
              className: XS()("SkyblockLampLightTint", "Islands", SG.wearingIslandColours && "Wearing"),
              children: [(0, aS.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, aS.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: wG("skyblockGame:lampLightIslandColours")
              }), SG.wearingIslandColours ? (0, aS.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: wG("skyblockGame:lampLightWearing")
              }) : (0, aS.jsx)(nS.d, {
                disabled: !ZG.canCommand,
                ariaLabel: wG("skyblockGame:lampLightWearLabel", {
                  tint: wG("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  bG.wearTint(null)
                },
                children: wG("skyblockGame:lampLightWear")
              })]
            }), SG.tints.map((GG => (0, aS.jsx)(ry, {
              tint: GG,
              view: ZG,
              controller: bG
            }, GG.id)))]
          })]
        })]
      })
    }

    function Ey(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(Mw, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)();
      return ZG.releasing ? (0, aS.jsx)(iS.d, {
        children: (0, aS.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            bG.setRelease(!1)
          },
          children: [(0, aS.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, aS.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [wG("skyblockGame:lampLightReleasing"), " \xb7 ", ZG.balance]
          }), (0, aS.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: wG("skyblockGame:lampLightKeepCatches")
          }), null !== ZG.gained && (0, aS.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: ZG.gained.text
          }, ZG.gained.count)]
        })
      }) : null
    }

    function oy(GG) {
      let {
        island: bG,
        view: ZG,
        aim: wG
      } = GG;
      const {
        t: SG
      } = (0, FS.w)(), LG = bG.featuredFish;
      return (0, aS.jsxs)("li", {
        className: XS()("SkyblockKeepersChairIsland", `Island-${bG.id}`, bG.favoured && "Aimed", !bG.relit && "Dark"),
        children: [(0, aS.jsx)("h3", {
          children: bG.name
        }), bG.relit && null !== LG ? (0, aS.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, aS.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: SG("skyblockGame:keepersChairTideNotice")
          }), (0, aS.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, aS.jsx)(WS.b, {
              itemName: LG.itemName,
              amount: 0
            })
          }), (0, aS.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: LG.displayName
          })]
        }) : (0, aS.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, aS.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: SG("skyblockGame:keepersChairDark")
          })
        }), bG.relit && (bG.favoured ? (0, aS.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: SG("skyblockGame:keepersChairAimed")
        }) : (0, aS.jsx)(nS.d, {
          className: "SkyblockKeepersChairAim",
          disabled: !ZG.canAim,
          ariaLabel: SG("skyblockGame:keepersChairAimLabel", {
            island: bG.name
          }),
          onClick: () => {
            wG(bG.id)
          },
          children: SG("skyblockGame:keepersChairAim")
        }))]
      }, bG.favoured ? ZG.aimedCount : 0)
    }

    function Xy(GG) {
      let {
        controller: bG,
        lampLight: ZG
      } = GG;
      const wG = (0, vS.j)(mw, bG.getSnapshot()),
        SG = (0, vS.j)(Mw, ZG.getSnapshot()),
        [LG, yG] = (0, CG.useState)("lamp"),
        {
          t: kG
        } = (0, FS.w)(),
        UG = eS();
      if (!wG.enabled) return null;
      const YG = "light" === LG && SG.enabled;
      return (0, aS.jsx)(qS.b, {
        show: wG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: XS()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", YG && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: UG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: kG("skyblockGame:keepersChairTitle")
              }), (0, aS.jsx)("p", {
                children: kG(YG ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              ariaLabel: kG("skyblockGame:keepersChairClose"),
              onClick: bG.dismiss
            })]
          }), SG.enabled && (0, aS.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((GG => (0, aS.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === GG === YG,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === GG === YG ? "true" : void 0,
              className: XS()("SkyblockKeepersChairTab", "light" === GG === YG && "Selected"),
              onClick: () => {
                yG(GG)
              },
              children: [kG("lamp" === GG ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === GG && (0, aS.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: SG.balance
              })]
            }, GG)))
          }), YG ? (0, aS.jsx)(zy, {
            controller: ZG
          }) : (0, aS.jsx)(uy, {
            view: wG,
            controller: bG
          })]
        })
      })
    }

    function uy(GG) {
      let {
        view: bG,
        controller: ZG
      } = GG;
      const {
        t: wG
      } = (0, FS.w)();
      return (0, aS.jsxs)(aS.Fragment, {
        children: [(0, aS.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: bG.islands.map((GG => (0, aS.jsx)(oy, {
            island: GG,
            view: bG,
            aim: ZG.aim
          }, GG.id)))
        }), null !== bG.almanac && (0, aS.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, aS.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: wG("skyblockGame:passageTitle")
          }), (0, aS.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, aS.jsx)(fy, {
              phase: bG.almanac.phase
            }), bG.almanac.phaseName]
          }), (0, aS.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, aS.jsx)(fy, {
              phase: bG.almanac.nextPhase
            }), bG.almanac.next]
          })]
        }), (0, aS.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, aS.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: wG("skyblockGame:keepersChairFavour")
          }), bG.aimed && (0, aS.jsx)(nS.K, {
            className: "SkyblockKeepersChairRest",
            disabled: !bG.canAim,
            onClick: () => {
              ZG.aim(null)
            },
            children: wG("skyblockGame:keepersChairRest")
          })]
        }), null !== bG.status && (0, aS.jsx)("p", {
          className: XS()("SkyblockKeepersChairStatus", "refused" === bG.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: bG.status.text
        })]
      })
    }

    function iy(GG) {
      let {
        controller: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)(), wG = (0, vS.j)(Fw, bG.getSnapshot());
      if (!wG.enabled) return null;
      const SG = wG.freshCount > 0 ? ZG("skyblockGame:reachLogOpenNews", {
        count: wG.freshCount
      }) : ZG("skyblockGame:reachLogOpen");
      return (0, aS.jsx)(iS.d, {
        placement: "statBars",
        children: (0, aS.jsxs)("button", {
          type: "button",
          className: XS()("SkyblockReachLogButton", wG.freshCount > 0 && "HasNews", wG.pending && "Pending"),
          "aria-label": SG,
          title: SG,
          onClick: bG.ask,
          children: [wG.news && (0, aS.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${wG.newsToken}`), (0, aS.jsx)("span", {
            className: XS()("SkyblockReachLogIcon", wG.news && "Jump"),
            "aria-hidden": "true",
            children: (0, aS.jsx)(WS.b, {
              itemName: aw,
              amount: 0
            })
          }, `icon:${wG.newsToken}`), wG.freshCount > 0 && (0, aS.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: wG.freshCount
          })]
        })
      })
    }

    function Cy(GG) {
      let {
        gift: bG
      } = GG;
      return (0, aS.jsx)("li", {
        className: XS()("SkyblockRegularsGift", bG.given && "Given"),
        children: bG.text
      })
    }

    function Wy(GG) {
      let {
        regular: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)();
      return (0, aS.jsxs)("li", {
        className: XS()("SkyblockRegularsCard", bG.tagged ? "Tagged" : "Untagged", bG.resting && "Resting"),
        children: [(0, aS.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, aS.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: bG.fishName,
            children: (0, aS.jsx)(WS.b, {
              itemName: bG.itemName,
              amount: 0
            })
          }), (0, aS.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, aS.jsx)("h3", {
              children: bG.name
            }), (0, aS.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: bG.fishName
            })]
          })]
        }), (0, aS.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: bG.line
        }), (0, aS.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, aS.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: bG.size
          }), bG.tagged && (0, aS.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: bG.resting ? ZG("skyblockGame:regularsResting") : bG.meetings
          })]
        }), (0, aS.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: bG.chance
        }), (0, aS.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: bG.gifts.map((GG => (0, aS.jsx)(Cy, {
            gift: GG
          }, GG.text)))
        }), bG.history.length > 0 && (0, aS.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: bG.history.map(((GG, bG) => (0, aS.jsx)("li", {
            children: GG
          }, bG)))
        })]
      })
    }

    function my(GG) {
      let {
        controller: bG,
        island: ZG
      } = GG;
      const {
        t: wG
      } = (0, FS.w)(), SG = (0, vS.j)(ZS, bG.getSnapshot()), LG = SG.islands.find((GG => GG.id === ZG));
      if (!SG.enabled || void 0 === LG) return null;
      const yG = wG("skyblockGame:regularsOpen");
      return (0, aS.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": yG,
        title: yG,
        onClick: () => {
          bG.openIsland(ZG)
        },
        children: [(0, aS.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: wG("skyblockGame:regularsTitle")
        }), LG.regulars.map((GG => (0, aS.jsx)("span", {
          className: XS()("SkyblockRegularsStripIcon", GG.tagged && "Tagged"),
          title: GG.name,
          children: (0, aS.jsx)(WS.b, {
            itemName: GG.itemName,
            amount: 0
          })
        }, GG.id)))]
      })
    }

    function Iy(GG) {
      var bG;
      let {
        controller: ZG
      } = GG;
      const wG = (0, vS.j)(ZS, ZG.getSnapshot()),
        {
          t: SG
        } = (0, FS.w)(),
        LG = eS();
      if (!wG.enabled) return null;
      const yG = null !== (bG = wG.islands.find((GG => GG.id === wG.selected))) && void 0 !== bG ? bG : null;
      return (0, aS.jsx)(qS.b, {
        show: wG.open,
        close: ZG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: LG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: SG("skyblockGame:regularsTitle")
              }), (0, aS.jsx)("p", {
                children: SG("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              onClick: ZG.dismiss
            })]
          }), (0, aS.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: wG.islands.map((GG => {
              const bG = GG.id === wG.selected;
              return (0, aS.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": bG,
                "data-pad-tab": !0,
                "data-pad-selected": bG ? "true" : void 0,
                className: XS()("SkyblockReachLogTab", `Island-${GG.id}`, bG && "Selected", GG.charm.given && "GoldPage"),
                onClick: () => {
                  ZG.selectIsland(GG.id)
                },
                children: (0, aS.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: GG.name
                })
              }, GG.id)
            }))
          }), (0, aS.jsxs)("div", {
            className: XS()("SkyblockRegularsPage", null !== yG && `Island-${yG.id}`),
            role: "tabpanel",
            children: [(0, aS.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: SG("skyblockGame:regularsHow")
            }), null !== yG && (0, aS.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: yG.regulars.map((GG => (0, aS.jsx)(Wy, {
                regular: GG
              }, GG.id)))
            })]
          }), null !== yG && (0, aS.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, aS.jsx)("span", {
              className: XS()("SkyblockRegularsCharm", yG.charm.given && "Given"),
              children: yG.charm.text
            })
          })]
        })
      })
    }
    const Fy = [{
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
      vy = Array.from({
        length: 6
      }, ((GG, bG) => ({
        "--x": `${(88*(.618034*bG%1)).toFixed(1)}%`,
        "--y": `${(10+37*bG%70).toFixed(1)}%`,
        "--size": 7 + bG % 3 * 3 + "rem",
        "--drift-x": 3 * (bG % 3 - 1) + "rem",
        "--drift-y": 2 * (bG % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + bG % 4 * 3 + "s",
        "--delay": 2.5 * -bG + "s"
      }))),
      ay = Array.from({
        length: 14
      }, ((GG, bG) => ({
        "--left": `${(3+94*((.618034*bG+.3)%1)).toFixed(1)}%`,
        "--size": 4 + bG % 4 * 2 + "px",
        "--sway": bG % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*bG%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*bG%12).toFixed(2)}s`
      }))),
      cy = (0, CG.memo)((function(GG) {
        let {
          island: bG
        } = GG;
        return (0, aS.jsxs)("div", {
          className: XS()("SkyblockReachLogDepths", null !== bG && `Island-${bG}`),
          "aria-hidden": "true",
          children: [Fy.map(((GG, bG) => (0, aS.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: GG
          }, `shaft${bG}`))), vy.map(((GG, bG) => (0, aS.jsx)("span", {
            className: XS()("SkyblockReachLogMote", bG % 2 === 1 && "Violet"),
            style: GG
          }, `mote${bG}`))), ay.map(((GG, bG) => (0, aS.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: GG
          }, `bubble${bG}`)))]
        })
      })),
      ly = 100;

    function jy(GG) {
      let {
        view: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)();
      if (null === bG || 0 === bG.total) return null;
      const wG = ly * bG.aspect,
        SG = ZG("skyblockGame:hiddenWatersCount", {
          found: bG.found,
          total: bG.total
        });
      return (0, aS.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${ZG("skyblockGame:hiddenWatersTitle")}: ${SG}`,
        children: [(0, aS.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${wG}`,
          "aria-hidden": "true",
          children: [bG.islands.map(((GG, bG) => (0, aS.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (GG.left + GG.width / 2) * ly,
            cy: (GG.top + GG.height / 2) * wG,
            rx: GG.width / 2 * ly,
            ry: GG.height / 2 * wG
          }, bG))), bG.pins.map(((GG, bG) => (0, aS.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: GG.left * ly,
            cy: GG.top * wG,
            r: 13
          }, bG)))]
        }), (0, aS.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, aS.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: ZG("skyblockGame:hiddenWatersTitle")
          }), (0, aS.jsx)("span", {
            className: bG.found === bG.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: SG
          })]
        })]
      })
    }

    function Py(GG) {
      let {
        view: bG,
        island: ZG
      } = GG;
      const {
        t: wG
      } = (0, FS.w)(), SG = null === bG || void 0 === bG ? void 0 : bG.glimpses.get(ZG);
      return void 0 === SG || 0 === SG.length ? null : (0, aS.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, aS.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: wG("skyblockGame:hiddenWatersGlimpsed")
        }), (0, aS.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: SG.map((GG => (0, aS.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, aS.jsx)(WS.b, {
              itemName: GG,
              amount: 0
            })
          }, GG)))
        })]
      })
    }
    const My = ["Bronze", "Silver", "Gold"],
      Ay = [{
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
      sy = Ay.slice(0, 2);

    function qy(GG) {
      return GG ? Ay : sy
    }

    function ny(GG) {
      let {
        fish: bG,
        letGoShown: ZG
      } = GG;
      const {
        t: wG
      } = (0, FS.w)();
      return (0, aS.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [My.map(((GG, ZG) => {
          const SG = ZG < bG.marks;
          return (0, aS.jsx)("span", {
            className: XS()("SkyblockReachLogPip", GG, SG && "Earned", SG && bG.fresh && ZG === bG.marks - 1 && "Newest"),
            title: wG(vw[ZG])
          }, GG)
        })), (0, aS.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), qy(ZG).map(((GG, ZG) => (0, aS.jsx)("span", {
          className: XS()("SkyblockReachLogRibbon", GG.className, !0 === bG.ribbons[ZG] && "Earned"),
          title: wG(GG.titleKey)
        }, GG.className)))]
      })
    }

    function gy(GG) {
      let {
        letGoShown: bG,
        haloShown: ZG
      } = GG;
      const {
        t: wG
      } = (0, FS.w)();
      return (0, aS.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, aS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wG("skyblockGame:reachLogMarks"),
          children: [(0, aS.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), wG("skyblockGame:reachLogLegendMarks")]
        }), qy(bG).map((GG => (0, aS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wG(GG.titleKey),
          children: [(0, aS.jsx)("span", {
            className: XS()("SkyblockReachLogRibbon", GG.className, "Earned")
          }), wG(GG.legendKey)]
        }, GG.className))), (0, aS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wG("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, aS.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), wG("skyblockGame:reachLogLegendGlimmer")]
        }), ZG && (0, aS.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: wG("skyblockGame:reachLogHaloTitle"),
          children: [(0, aS.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), wG("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function ey(GG) {
      let {
        returner: bG
      } = GG;
      return (0, aS.jsxs)("div", {
        className: XS()("SkyblockReachLogReturner", bG.back && "Back"),
        children: [(0, aS.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, aS.jsx)(WS.b, {
            itemName: bG.itemName,
            amount: 0
          })
        }), (0, aS.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: bG.line
        })]
      })
    }

    function Ry(GG) {
      let {
        fish: bG,
        letGoShown: ZG
      } = GG;
      const {
        t: wG
      } = (0, FS.w)();
      return (0, aS.jsxs)("li", {
        className: XS()("SkyblockReachLogCard", bG.caught ? "Caught" : "Unknown", bG.marks >= 3 && "GoldCard", bG.fresh && "Fresh", bG.visitor && "Visitor"),
        children: [bG.visitor && (0, aS.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: wG("skyblockGame:reachLogVisitor")
        }), bG.fresh && Array.from({
          length: 4
        }, ((GG, bG) => (0, aS.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, bG))), (0, aS.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [bG.halo && (0, aS.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: wG("skyblockGame:reachLogHaloTitle")
          }), (0, aS.jsx)(WS.b, {
            itemName: bG.itemName,
            amount: 0
          }), bG.glimmer && (0, aS.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: wG("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, aS.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: bG.name
        }), (0, aS.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: bG.chance
        }), (0, aS.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: bG.best
        }), (0, aS.jsx)(ny, {
          fish: bG,
          letGoShown: ZG
        })]
      })
    }

    function Ty(GG) {
      let {
        page: bG,
        letGoShown: ZG,
        hiddenWaters: wG
      } = GG;
      const {
        t: SG
      } = (0, FS.w)();
      return bG.awake ? (0, aS.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: bG.fish.map((GG => (0, aS.jsx)(Ry, {
          fish: GG,
          letGoShown: ZG
        }, GG.itemName)))
      }) : (0, aS.jsxs)(aS.Fragment, {
        children: [(0, aS.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: SG("skyblockGame:reachLogAsleep")
        }), (0, aS.jsx)(Py, {
          view: wG,
          island: bG.id
        })]
      })
    }

    function Hy(GG) {
      var bG, ZG;
      let {
        controller: wG,
        regulars: SG,
        hiddenWaters: LG
      } = GG;
      const yG = (0, vS.j)(Fw, wG.getSnapshot()),
        kG = function(GG) {
          return (0, vS.j)(kS, GG.getSnapshot())
        }(LG),
        UG = (0, vS.j)(ZS, SG.getSnapshot()),
        {
          t: YG
        } = (0, FS.w)(),
        VG = eS();
      if (!yG.enabled) return null;
      const pG = null !== (bG = yG.pages.find((GG => GG.id === yG.selected))) && void 0 !== bG ? bG : null;
      return (0, aS.jsx)(qS.b, {
        show: yG.open,
        close: wG.dismiss,
        togglePointerLock: !1,
        className: XS()("SkyblockSkillsOverlay", UG.open && "SkyblockReachLogUnderLedger"),
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: VG,
          onKeyDown: gS,
          children: [(0, aS.jsx)(cy, {
            island: null !== (ZG = null === pG || void 0 === pG ? void 0 : pG.id) && void 0 !== ZG ? ZG : null
          }), (0, aS.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: YG("skyblockGame:reachLogTitle")
              }), (0, aS.jsx)("p", {
                children: YG("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, aS.jsx)(jy, {
              view: kG
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              onClick: wG.dismiss
            })]
          }), (0, aS.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: yG.pages.map((GG => {
              const bG = GG.id === yG.selected,
                ZG = GG.fish.some((GG => GG.fresh));
              return (0, aS.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": bG,
                "data-pad-tab": !0,
                "data-pad-selected": bG ? "true" : void 0,
                className: XS()("SkyblockReachLogTab", `Island-${GG.id}`, bG && "Selected", !GG.awake && "Asleep", GG.gold && "GoldPage", ZG && "HasNews"),
                onClick: () => {
                  wG.selectPage(GG.id)
                },
                children: [(0, aS.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: GG.name
                }), GG.awake && (0, aS.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: YG("skyblockGame:reachLogCaughtCount", {
                    caught: GG.caught,
                    total: GG.total
                  })
                })]
              }, GG.id)
            }))
          }), (0, aS.jsxs)("div", {
            className: XS()("SkyblockReachLogPage", null !== pG && `Island-${pG.id}`),
            role: "tabpanel",
            children: [null !== pG && (0, aS.jsx)(Ty, {
              page: pG,
              letGoShown: yG.letGoShown,
              hiddenWaters: kG
            }), !0 === (null === pG || void 0 === pG ? void 0 : pG.awake) && null !== pG.returner && (0, aS.jsx)(ey, {
              returner: pG.returner
            }), !0 === (null === pG || void 0 === pG ? void 0 : pG.awake) && (0, aS.jsx)(my, {
              controller: SG,
              island: pG.id
            })]
          }), (0, aS.jsx)("footer", {
            className: XS()("SkyblockReachLogFooter", null !== pG && `Island-${pG.id}`, !0 === (null === pG || void 0 === pG ? void 0 : pG.gold) && "GoldPage"),
            children: !0 === (null === pG || void 0 === pG ? void 0 : pG.gold) ? (0, aS.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: YG("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, aS.jsxs)(aS.Fragment, {
              children: [(0, aS.jsx)(gy, {
                letGoShown: yG.letGoShown,
                haloShown: !0 === (null === pG || void 0 === pG ? void 0 : pG.fish.some((GG => GG.halo)))
              }), (0, aS.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: YG("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var ty = ZG(4851);

    function Dy(GG) {
      let {
        conversation: bG,
        completedLabel: ZG
      } = GG;
      return (0, aS.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, aS.jsxs)("header", {
          children: [(0, aS.jsx)("h3", {
            children: bG.questName
          }), bG.completed && (0, aS.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: ZG
          })]
        }), bG.lines.map((GG => (0, aS.jsx)(ty.d, {
          display: GG.display
        }, GG.key)))]
      })
    }

    function Ny(GG) {
      let {
        controller: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)(), wG = (0, vS.j)(YS, bG.getSnapshot()), SG = eS();
      if (!wG.enabled) return null;
      const LG = !wG.loading && 0 === wG.conversations.length;
      return (0, aS.jsx)(qS.b, {
        show: wG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: SG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: ZG("skyblockDialogue:title")
              }), (0, aS.jsx)("p", {
                children: ZG("skyblockDialogue:intro")
              })]
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              onClick: bG.dismiss
            })]
          }), (0, aS.jsxs)("div", {
            className: XS()("SkyblockDialogueBody", {
              SingleColumn: null !== wG.questFocus || 0 === wG.characters.length
            }),
            children: [null === wG.questFocus && wG.characters.length > 0 && (0, aS.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: wG.characters.map((GG => (0, aS.jsx)(nS.d, {
                className: XS()("SkyblockDialogueCharacter", {
                  Selected: GG.selected
                }),
                onClick: () => {
                  bG.selectCharacter(GG.id)
                },
                children: (0, aS.jsx)(mS.c, {
                  text: GG.styling
                })
              }, GG.id)))
            }), (0, aS.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== wG.questFocus && (0, aS.jsx)(nS.d, {
                className: "SkyblockDialogueBack",
                onClick: bG.showCharacters,
                children: ZG("skyblockDialogue:allCharacters")
              }), wG.loading && (0, aS.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ZG("skyblockDialogue:loading")
              }), LG && (0, aS.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ZG(null === wG.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), wG.conversations.map((GG => (0, aS.jsx)(Dy, {
                conversation: GG,
                completedLabel: wG.completedLabel
              }, GG.questId)))]
            })]
          })]
        })
      })
    }

    function Oy(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(KS, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = eS();
      return ZG.enabled ? (0, aS.jsx)(qS.b, {
        show: ZG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: SG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: wG("skyblockGame:autographBook")
              }), (0, aS.jsx)("p", {
                children: wG("skyblockGame:autographBookIntro")
              })]
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              onClick: bG.dismiss
            })]
          }), (0, aS.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, aS.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, aS.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, aS.jsx)("strong", {
                  children: ZG.total
                }), (0, aS.jsx)("span", {
                  children: wG("skyblockGame:autographTotal")
                })]
              }), (0, aS.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, aS.jsx)("strong", {
                  children: ZG.rankTotal
                }), (0, aS.jsx)("span", {
                  children: wG("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === ZG.entries.length ? (0, aS.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: wG("skyblockGame:autographBookEmpty")
            }) : (0, aS.jsx)("ul", {
              className: "SkyblockAutographList",
              children: ZG.entries.map((GG => (0, aS.jsxs)("li", {
                className: XS()("SkyblockAutograph", {
                  Ranked: null !== GG.rank
                }),
                style: null === GG.rank ? void 0 : {
                  color: GG.rank.colour
                },
                children: [null !== GG.rank && (0, aS.jsx)(KL.c, {
                  className: "SkyblockAutographRankIcon",
                  name: GG.rank.icon,
                  kit: (0, KL.g)(GG.rank.icon)
                }), (0, aS.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, aS.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: GG.name
                  }), (0, aS.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== GG.rank && (0, aS.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: GG.rank.label
                    }), (0, aS.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: GG.signedOn
                    })]
                  })]
                })]
              }, GG.key)))
            })]
          })]
        })
      }) : null
    }
    const xy = (0, CG.memo)((function(GG) {
        let {
          controller: bG
        } = GG;
        return (0, aS.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: bG.display.mountWaypoint,
          children: [(0, aS.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, aS.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, aS.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, aS.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, aS.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, aS.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      By = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Gk(GG) {
      return "next" === GG.phase ? "\u2192" : By[GG.kind]
    }
    const bk = (0, CG.memo)((function(GG) {
      let {
        controller: bG,
        display: ZG
      } = GG;
      const wG = (0, vS.j)(pZ, bG.getNotificationSnapshot()),
        [SG, LG] = (0, CG.useState)(!1);
      return (0, vS.g)("qteStateUpdated", (GG => {
        LG(GG.isActive)
      })), (0, aS.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (SG ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [wG && (0, aS.jsxs)("div", {
          className: `SkyblockQuestNotification ${wG.kind} ${wG.phase}`,
          style: {
            "--quest-notification-duration": `${wG.durationMs}ms`,
            ...wG.accent && {
              "--quest-notification-accent": wG.accent
            }
          },
          children: [(0, aS.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (wG.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, aS.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Gk(wG)
            }), wG.iconItem && (0, aS.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, aS.jsx)(WS.b, {
                itemName: wG.iconItem,
                amount: 0
              })
            })]
          }), (0, aS.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, aS.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: wG.title
            }), (0, aS.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, aS.jsx)(kL.b, {
                text: wG.name
              })
            }), wG.description && (0, aS.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, aS.jsx)(kL.b, {
                text: wG.description
              })
            }), wG.reward && (0, aS.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, aS.jsx)(kL.b, {
                text: wG.reward
              })
            })]
          })]
        }, wG.token), (null === wG || void 0 === wG ? void 0 : wG.waypointNameKey) && (0, aS.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": wG.waypointNameKey,
          "data-notification-token": wG.token,
          ref: ZG.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${wG.token}`)]
      })
    }));

    function Zk(GG) {
      const bG = parseInt(GG.replace("#", ""), 16);
      return `${bG>>16&255}, ${bG>>8&255}, ${255&bG}`
    }
    const wk = (0, CG.memo)((function(GG) {
      let {
        controller: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)(), wG = (0, vS.j)(AZ, bG.getSnapshot());
      if (!wG) return null;
      const SG = "arrival" === wG.phase;
      return (0, aS.jsxs)("div", {
        className: XS()("SkyblockPortalTransit", {
          Departure: !SG,
          Arrival: SG
        }),
        style: {
          "--portal-rgb": Zk(wG.colour),
          "--portal-duration": `${wG.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, aS.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, aS.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            bG.finishArrival(wG.token)
          }
        }), (0, aS.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, aS.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !SG && (0, aS.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: ZG("skyblockGame:portalTransitHeading")
          }), (0, aS.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: ZG(wG.zoneNameKey)
          })]
        })]
      }, wG.token)
    }));

    function Sk() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Lk() {
      const GG = document.querySelector(".SkyblockHudCoins"),
        bG = null === GG || void 0 === GG ? void 0 : GG.getBoundingClientRect();
      return bG && bG.width > 0 ? {
        x: bG.left + Math.min(bG.width, 24) / 2,
        y: bG.top + bG.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function yk(GG) {
      return {
        x: GG.left + GG.width / 2,
        y: GG.top + GG.height / 2
      }
    }

    function kk() {
      var GG;
      const bG = null === (GG = document.querySelector(".HotBar")) || void 0 === GG ? void 0 : GG.getBoundingClientRect();
      return bG && bG.width > 0 ? yk(bG) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Uk(GG) {
      let {
        items: bG,
        origins: ZG,
        target: wG
      } = GG;
      return (0, aS.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: bG.map(((GG, bG) => {
          const SG = ZG[bG];
          return (0, aS.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${SG.x}px`,
              top: `${SG.y}px`,
              "--item-dx": wG.x - SG.x + "px",
              "--item-dy": wG.y - SG.y + "px",
              "--item-delay": 2e3 + 160 * bG + "ms",
              "--item-flight": "700ms"
            },
            children: (0, aS.jsx)(WS.b, {
              itemName: GG.dailyRewardItemName,
              amount: 0
            })
          }, GG.dailyRewardItemName)
        }))
      })
    }

    function Yk(GG, bG) {
      const ZG = -Math.PI / 2 + 1.25 * (GG / (bG - 1) * 2 - 1),
        wG = 70 + GG % 3 * 22;
      return {
        x: Math.cos(ZG) * wG,
        y: Math.sin(ZG) * wG * .7
      }
    }

    function Vk(GG) {
      let {
        origin: bG,
        target: ZG,
        count: wG
      } = GG;
      const SG = [];
      for (let LG = 0; LG < wG; LG++) {
        const GG = Yk(LG, wG);
        SG.push((0, aS.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${bG.x}px`,
            top: `${bG.y}px`,
            "--coin-bx": `${GG.x}px`,
            "--coin-by": `${GG.y}px`,
            "--coin-dx": ZG.x - bG.x + "px",
            "--coin-dy": ZG.y - bG.y + "px",
            "--coin-delay": `${RZ(LG,wG)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, aS.jsx)(WS.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, LG))
      }
      return (0, aS.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: SG
      })
    }

    function pk(GG) {
      let {
        day: bG
      } = GG;
      const ZG = WG[bG - 1];
      return (0, aS.jsxs)(aS.Fragment, {
        children: [(0, aS.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, aS.jsx)(WS.b, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, IS.e)(ZG.dailyRewardCoins)]
        }), ZG.dailyRewardItems.map((GG => (0, aS.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, aS.jsx)(WS.b, {
            itemName: GG.dailyRewardItemName,
            amount: 0
          }), "\xd7", GG.dailyRewardItemAmount]
        }, GG.dailyRewardItemName)))]
      })
    }

    function fk(GG) {
      let {
        day: bG
      } = GG;
      const ZG = IG(bG);
      return (0, aS.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: WG.map(((GG, wG) => {
          const SG = wG + 1;
          return (0, aS.jsxs)("li", {
            className: XS()("SkyblockDailyRewardTile", {
              Claimed: SG < bG && SG !== ZG,
              Today: SG === bG,
              Tomorrow: SG === ZG,
              Jackpot: SG === mG
            }),
            children: [(0, aS.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: SG
            }), (0, aS.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, aS.jsx)(WS.b, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, IS.e)(GG.dailyRewardCoins)]
            }), GG.dailyRewardItems.map((GG => (0, aS.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, aS.jsx)(WS.b, {
                itemName: GG.dailyRewardItemName,
                amount: 0
              }), "\xd7", GG.dailyRewardItemAmount]
            }, GG.dailyRewardItemName)))]
          }, SG)
        }))
      })
    }

    function Qk(GG) {
      let {
        view: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)(), wG = (0, CG.useRef)(null), SG = (0, CG.useRef)(null), [LG, yG] = (0, CG.useState)(null);
      (0, CG.useLayoutEffect)((() => {
        var GG;
        const bG = null === (GG = wG.current) || void 0 === GG ? void 0 : GG.getBoundingClientRect();
        if (bG) {
          var ZG, LG;
          const GG = Array.from(null !== (ZG = null === (LG = SG.current) || void 0 === LG ? void 0 : LG.children) && void 0 !== ZG ? ZG : [], (GG => yk(GG.getBoundingClientRect())));
          yG({
            origin: yk(bG),
            target: Lk(),
            itemOrigins: GG,
            itemTarget: kk()
          })
        }
      }), []);
      const kG = IG(bG.day),
        UG = function(GG, bG) {
          const [ZG, wG] = (0, CG.useState)((() => Sk() ? GG : 0));
          return (0, CG.useEffect)((() => {
            if (Sk()) return;
            const ZG = performance.now();
            let SG = 0;
            const LG = yG => {
              const kG = Math.min(Math.max((yG - ZG) / bG, 0), 1);
              wG(Math.round(GG * (1 - (1 - kG) ** 3))), kG < 1 && (SG = requestAnimationFrame(LG))
            };
            return SG = requestAnimationFrame(LG), () => {
              cancelAnimationFrame(SG)
            }
          }), [GG, bG]), ZG
        }(bG.coins, 450);
      return (0, aS.jsxs)("div", {
        className: XS()("SkyblockDailyReward", {
          Jackpot: bG.day === mG
        }),
        style: {
          "--daily-duration": `${bG.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, aS.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, aS.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, aS.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, aS.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: ZG("skyblockGame:dailyRewardTitle")
            }), (0, aS.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: ZG("skyblockGame:dailyRewardDay", {
                day: String(bG.day)
              })
            })]
          }), (0, aS.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: wG,
            children: [(0, aS.jsx)(WS.b, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, aS.jsxs)("span", {
              children: ["+", (0, IS.e)(UG)]
            })]
          }), bG.items.length > 0 && (0, aS.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: SG,
            children: bG.items.map((GG => (0, aS.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, aS.jsx)(WS.b, {
                itemName: GG.dailyRewardItemName,
                amount: 0
              }), "\xd7", GG.dailyRewardItemAmount]
            }, GG.dailyRewardItemName)))
          }), (0, aS.jsx)(fk, {
            day: bG.day
          }), (0, aS.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [ZG("skyblockGame:dailyRewardComeBack"), (0, aS.jsx)(pk, {
              day: kG
            })]
          })]
        }), null !== LG && (0, aS.jsx)(Vk, {
          origin: LG.origin,
          target: LG.target,
          count: bG.flyingCoins
        }), null !== LG && LG.itemOrigins.length === bG.items.length && (0, aS.jsx)(Uk, {
          items: bG.items,
          origins: LG.itemOrigins,
          target: LG.itemTarget
        })]
      })
    }
    const Kk = (0, CG.memo)((function(GG) {
        let {
          controller: bG
        } = GG;
        const ZG = (0, vS.j)(nZ, bG.getSnapshot());
        return ZG ? (0, aS.jsx)(Qk, {
          view: ZG
        }, ZG.token) : null
      })),
      hk = "Gold Coin";

    function dk(GG) {
      return 650 + 220 * GG
    }

    function Jk(GG) {
      return {
        "--letter-delay": `${dk(GG)}ms`,
        "--letter-land": `${dk(GG)+300}ms`
      }
    }

    function rk(GG) {
      let {
        letterCount: bG
      } = GG;
      return (0, aS.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, aS.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, aS.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, aS.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: bG
        }, ((GG, bG) => (0, aS.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Jk(bG),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, bG)))]
      })
    }

    function zk(GG) {
      var bG, ZG, wG;
      let {
        letter: SG,
        index: LG
      } = GG;
      const {
        t: yG
      } = (0, FS.w)(), kG = null !== (bG = null === (ZG = SG.items[0]) || void 0 === ZG ? void 0 : ZG.itemName) && void 0 !== bG ? bG : hk;
      return (0, aS.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Jk(LG),
        children: [(0, aS.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, aS.jsx)(WS.b, {
            itemName: kG,
            amount: 0
          })
        }), (0, aS.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: yG(SG.reasonKey, null !== (wG = SG.reasonParams) && void 0 !== wG ? wG : void 0)
        }), (0, aS.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [SG.coins > 0 && (0, aS.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, aS.jsx)(WS.b, {
              itemName: hk,
              amount: 0
            }), "+", (0, IS.e)(SG.coins)]
          }), SG.items.map(((GG, bG) => (0, aS.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, aS.jsx)(WS.b, {
              itemName: GG.itemName,
              amount: 0
            }), GG.label, " \xd7", GG.amount]
          }, bG)))]
        })]
      })
    }

    function Ek(GG) {
      let {
        view: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)();
      return (0, aS.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${bG.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${dk(bG.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, aS.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, aS.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, aS.jsx)(rk, {
              letterCount: bG.letters.length
            }), (0, aS.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: ZG("skyblockGame:mailboxTitle")
            })]
          }), (0, aS.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: bG.letters.map(((GG, bG) => (0, aS.jsx)(zk, {
              letter: GG,
              index: bG
            }, bG)))
          }), bG.more > 0 && (0, aS.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: ZG("skyblockGame:mailboxMore", {
              count: String(bG.more)
            })
          })]
        })
      })
    }
    const Xk = (0, CG.memo)((function(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(HZ, bG.getSnapshot());
      return ZG ? (0, aS.jsx)(Ek, {
        view: ZG
      }, ZG.token) : null
    }));

    function uk(GG) {
      let {
        controller: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)(), wG = (0, vS.j)(sw, bG.getSnapshot());
      if (null === wG) return null;
      const SG = wG.fullSet ? "empty" === wG.fuelState ? {
        text: ZG("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: ZG("skyblockGame:magmawardHudFullSet", {
          worn: String(wG.wornCount)
        }),
        tone: "partial"
      };
      return (0, aS.jsx)(iS.d, {
        placement: "statBars",
        children: (0, aS.jsxs)("div", {
          className: XS()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${wG.fuelState}`, {
            "SkyblockMagmawardHud-partial": !wG.fullSet,
            "SkyblockMagmawardHud-armed": wG.fullSet && "empty" !== wG.fuelState
          }),
          children: [null !== wG.flare && (0, aS.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${wG.flare}`
          }, `flare:${wG.flareToken}`), (0, aS.jsx)("div", {
            className: XS()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: wG.setLit
            }),
            children: wG.pieces.map(((GG, bG) => (0, aS.jsx)("div", {
              className: XS()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: GG.worn,
                SkyblockMagmawardPieceJustWorn: GG.justWorn
              }),
              children: (0, aS.jsx)(WS.b, {
                itemName: GG.itemName,
                amount: 0
              })
            }, `${bG}:${GG.wornToken}`)))
          }, `pieces:${wG.setLitToken}`), (0, aS.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, aS.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, aS.jsxs)("div", {
              className: XS()("SkyblockMagmawardFuelCounter", wG.pulse && `SkyblockMagmawardFuelCounter-${wG.pulse}`),
              children: [(0, aS.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, aS.jsx)(WS.b, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, aS.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: wG.fuel
              })]
            }, `counter:${wG.pulseToken}`), "burn" === wG.pulse && (0, aS.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${wG.pulseToken}`)]
          }), SG && (0, aS.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${SG.tone} SmallTextBold`,
            children: SG.text
          })]
        })
      })
    }

    function ik(GG) {
      let {
        controller: bG
      } = GG;
      const {
        t: ZG,
        selectedLanguage: wG
      } = (0, FS.w)(), SG = (0, vS.j)(nw, bG.getSnapshot());
      return null === SG ? null : (0, aS.jsx)(iS.d, {
        placement: "statBars",
        children: (0, aS.jsxs)("div", {
          className: XS()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: SG.inRange
          }),
          style: {
            "--glowtide-colour": SG.colour
          },
          "aria-label": ZG("skyblockGame:glowtideChipLabel"),
          children: [(0, aS.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), SG.inRange ? (0, aS.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: ZG("skyblockGame:glowtideChipInRange")
          }, `call:${SG.inRangeToken}`) : (0, aS.jsxs)(aS.Fragment, {
            children: [(0, aS.jsx)("div", {
              ref: bG.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, aS.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: ZG("skyblockGame:waypointDistance", {
                distance: XG(SG.distance, wG.code)
              })
            })]
          })]
        })
      })
    }

    function Ck(GG) {
      let {
        controller: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)(), wG = (0, vS.j)(ew, bG.getSnapshot());
      return null === wG ? null : (0, aS.jsx)(iS.d, {
        placement: "statBars",
        children: (0, aS.jsxs)("div", {
          className: XS()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: wG.full
          }),
          "aria-label": ZG("skyblockGame:glowMeterLabel", {
            fill: String(wG.fill),
            rp: String(wG.rp)
          }),
          children: [wG.burst && (0, aS.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${wG.burstToken}`), (0, aS.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, aS.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${wG.ratio})`
              }
            }), wG.gained && (0, aS.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${wG.gainToken}`), wG.full && Array.from({
              length: 5
            }, ((GG, bG) => (0, aS.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, bG)))]
          }), wG.full && wG.rares.map((GG => (0, aS.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, aS.jsx)(WS.b, {
              itemName: GG,
              amount: 0
            })
          }, GG))), wG.ready && (0, aS.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, aS.jsx)("span", {
              children: ZG("skyblockGame:glowMeterReady")
            })
          }, `ready:${wG.fullToken}`)]
        })
      })
    }

    function Wk(GG) {
      let {
        controller: bG
      } = GG;
      const {
        t: ZG
      } = (0, FS.w)(), wG = (0, vS.j)(Tw, bG.getSnapshot());
      if (null === wG) return null;
      const SG = "waiting" === wG.phase,
        LG = {
          animationDuration: `${wG.waitMs}ms`,
          animationDelay: -wG.elapsedMs + "ms"
        },
        yG = SG ? void 0 : {
          animationDuration: `${wG.waitMs}ms`
        };
      return (0, aS.jsxs)("div", {
        className: SG ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [SG && (0, aS.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((GG, bG) => (0, aS.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, bG))), (0, aS.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: LG
          }), (0, aS.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, aS.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, aS.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: LG
            })]
          }), (0, aS.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, aS.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: yG,
          children: ZG(wG.line)
        }, wG.lineIndex)]
      }, wG.token)
    }

    function mk(GG) {
      let {
        chart: bG,
        showHere: ZG,
        className: wG
      } = GG;
      return (0, aS.jsx)("div", {
        className: XS()("SkyblockTideChartGrid", wG, null !== bG.pictureName && "Complete"),
        "aria-hidden": "true",
        children: bG.cells.map(((GG, wG) => {
          const SG = 0 !== (bG.pulseCells & 1 << wG),
            LG = bG.castCell === wG;
          return (0, aS.jsx)("span", {
            className: XS()("SkyblockTideChartCell", `Cell-${GG}`, SG && "Pulse", LG && "Cast", ZG && bG.hereCell === wG && "Here")
          }, `${wG}:${SG?`p${bG.pulseToken}`:""}:${LG?`c${bG.castToken}`:""}`)
        }))
      })
    }

    function Ik(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(tw, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = ZG.chip;
      if (!ZG.enabled || null === SG) return null;
      const LG = wG("skyblockGame:tideChartsChipLabel", {
        island: SG.islandName,
        lit: String(SG.lit),
        ink: String(SG.ink)
      });
      return (0, aS.jsx)(iS.d, {
        placement: "statBars",
        children: (0, aS.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: XS()("SkyblockTideChartsChip", ZG.open && "Open", null !== SG.pictureName && "Complete"),
          "aria-label": LG,
          title: LG,
          onMouseDown: GG => {
            GG.preventDefault()
          },
          onClick: bG.toggle,
          children: [(0, aS.jsx)(mk, {
            chart: SG,
            showHere: !1,
            className: "Mini"
          }), (0, aS.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [SG.lit, "/", SG.ink]
          })]
        })
      })
    }

    function Fk(GG) {
      let {
        controller: bG
      } = GG;
      const ZG = (0, vS.j)(tw, bG.getSnapshot()),
        {
          t: wG
        } = (0, FS.w)(),
        SG = eS(),
        LG = ZG.card;
      return ZG.enabled && null !== LG ? (0, aS.jsx)(qS.b, {
        show: ZG.open,
        close: bG.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, aS.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: SG,
          onKeyDown: gS,
          children: [(0, aS.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, aS.jsxs)("div", {
              children: [(0, aS.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: wG("skyblockGame:tideChartsTitle")
              }), (0, aS.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: wG("skyblockGame:tideChartsIntro")
              })]
            }), (0, aS.jsx)(nS.j, {
              padIgnore: !0,
              ariaLabel: wG("skyblockGame:tideChartsClose"),
              onClick: bG.dismiss
            })]
          }), ZG.tabs.length > 1 && (0, aS.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": wG("skyblockGame:tideChartsIslands"),
            children: ZG.tabs.map((GG => (0, aS.jsx)("button", {
              type: "button",
              className: XS()("SkyblockTideChartsTab", GG.selected && "Selected"),
              "aria-pressed": GG.selected,
              onClick: () => {
                bG.Df(GG.island)
              },
              children: GG.name
            }, GG.island)))
          }), (0, aS.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, aS.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": LG.gridLabel,
              children: (0, aS.jsx)(mk, {
                chart: LG,
                showHere: !0,
                className: "Large"
              })
            }), (0, aS.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, aS.jsx)("h3", {
                children: LG.islandName
              }), (0, aS.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: LG.litText
              }), null === LG.pictureName ? (0, aS.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: wG("skyblockGame:tideChartsPictureHidden")
              }) : (0, aS.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: wG("skyblockGame:tideChartsPictureRevealed", {
                  picture: LG.pictureName
                })
              }, LG.pictureName), (0, aS.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, aS.jsxs)("li", {
                  children: [(0, aS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), wG("skyblockGame:tideChartsLegendLit")]
                }), (0, aS.jsxs)("li", {
                  children: [(0, aS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), wG("skyblockGame:tideChartsLegendClear")]
                }), null !== LG.hereCell && (0, aS.jsxs)("li", {
                  children: [(0, aS.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), wG("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, aS.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, aS.jsx)("span", {
                  children: ZG.turnsText
                }), (0, aS.jsx)("span", {
                  children: ZG.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function vk(GG) {
      var bG;
      let {
        controller: ZG
      } = GG;
      const {
        selectedLanguage: wG
      } = (0, FS.w)(), SG = wG.code;
      (0, CG.useEffect)((() => {
        ZG.setTranslator(((GG, bG) => (0, FS.r)(SG, GG, bG)), SG, ((GG, bG) => (0, FS.o)(SG, GG, bG)))
      }), [ZG, SG]);
      const LG = (0, vS.j)(fG, ZG.map.getSnapshot()),
        {
          openInGameMenuName: yG
        } = (0, uS.o)(["openInGameMenuName"]);
      return (0, aS.jsxs)(aS.Fragment, {
        children: [(0, aS.jsx)(bk, {
          controller: ZG.quests,
          display: ZG.navigation.display
        }), LG.enabled && !yG && (0, aS.jsx)(SL, {
          controller: ZG.navigation
        }), (0, aS.jsx)(cS, {
          controller: ZG,
          minimap: LG.enabled && (null === (bG = LG.presentation) || void 0 === bG ? void 0 : bG.minimap) && (0, aS.jsx)(wL, {
            view: LG.presentation.minimap,
            navigation: ZG.navigation,
            controller: ZG.map
          }),
          children: (0, aS.jsx)(QL, {
            controller: ZG.quests,
            surface: "hud"
          })
        }), (0, aS.jsx)(xy, {
          controller: ZG.navigation
        }), (0, aS.jsx)(wk, {
          controller: ZG.portalTransit
        }), (0, aS.jsx)(Kk, {
          controller: ZG.dailyReward
        }), (0, aS.jsx)(Xk, {
          controller: ZG.mailbox
        }), (0, aS.jsx)(uk, {
          controller: ZG.magmaward
        }), (0, aS.jsx)(ik, {
          controller: ZG.glowtide
        }), (0, aS.jsx)(Qy, {
          controller: ZG.passage
        }), (0, aS.jsx)(Ik, {
          controller: ZG.tideCharts
        }), (0, aS.jsx)(Ck, {
          controller: ZG.glowMeter
        }), (0, aS.jsx)(iy, {
          controller: ZG.reachLog
        }), (0, aS.jsx)(Wk, {
          controller: ZG.hushWait
        }), (0, aS.jsx)(Ey, {
          controller: ZG.lampLight
        }), (0, aS.jsx)(LL, {
          controller: ZG.skills,
          surface: "hud"
        })]
      })
    }

    function ak(GG) {
      let {
        controller: bG
      } = GG;
      return (0, aS.jsxs)(aS.Fragment, {
        children: [(0, aS.jsx)(ZL, {
          controller: bG.map,
          navigation: bG.navigation
        }), (0, aS.jsx)(LL, {
          controller: bG.skills,
          surface: "menu"
        }), (0, aS.jsx)(QL, {
          controller: bG.quests,
          surface: "menu"
        }), (0, aS.jsx)(tL, {
          controller: bG.dungeons
        }), (0, aS.jsx)(OL, {
          controller: bG.collections
        }), (0, aS.jsx)(Gy, {
          controller: bG.questGraph
        }), (0, aS.jsx)(Ly, {
          controller: bG.forge
        }), (0, aS.jsx)(py, {
          controller: bG.smuggler
        }), (0, aS.jsx)(Xy, {
          controller: bG.keepersChair,
          lampLight: bG.lampLight
        }), (0, aS.jsx)(Hy, {
          controller: bG.reachLog,
          regulars: bG.regulars,
          hiddenWaters: bG.hiddenWaters
        }), (0, aS.jsx)(Iy, {
          controller: bG.regulars
        }), (0, aS.jsx)(hy, {
          controller: bG.passage
        }), (0, aS.jsx)(Fk, {
          controller: bG.tideCharts
        }), (0, aS.jsx)(Ny, {
          controller: bG.dialogue
        }), (0, aS.jsx)(Oy, {
          controller: bG.autographs
        })]
      })
    }
    var ck = ZG(37105);
    const lk = bw + Uw;

    function jk(GG, bG, ZG, wG, SG) {
      const LG = [],
        yG = [],
        kG = ZG => {
          const wG = GG.playSound(bG, ZG.sound, ZG.volume, ZG.rate);
          wG && (yG.push(wG), void 0 !== ZG.cutAfter && LG.push(setTimeout((() => {
            wG.fade(wG.getVolume(), 0, 300)
          }), ZG.cutAfter)))
        };
      for (const UG of function(GG, bG) {
          const ZG = [{
            sound: "rpgKnifeSlice1",
            beat: bw,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: bw,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: bw,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: bw,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: bw,
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
            sound: (0, ck.g)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: lk + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, ck.g)("bigDrumSwish"),
            beat: lk + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: lk + 60,
            lead: 180,
            volume: .5 + .06 * GG,
            rate: .82 + .07 * GG
          }];
          return GG >= 4 && ZG.push({
            sound: "exp_levelup",
            beat: lk + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), bG && ZG.push({
            sound: "trumpetFlare",
            beat: lk + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), ZG.push({
            sound: "harp_pling",
            beat: Zw,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), ZG
        }(ZG, wG)) SG ? LG.push(setTimeout((() => {
        kG(UG)
      }), Math.max(0, UG.beat - UG.lead / UG.rate))) : UG.beat !== bw && "magicAccent2" !== UG.sound && "trumpetFlare" !== UG.sound || kG(UG);
      return () => {
        for (const GG of LG) clearTimeout(GG);
        for (const GG of yG) GG.fade(GG.getVolume(), 0, 120)
      }
    }
    class Pk {
      constructor(GG) {
        this.deps = GG, this.pending = new Map, this.localHook = null
      }
      hookWaiting(GG, bG) {
        this.pending.delete(GG);
        const ZG = this.deps.now();
        if (null === bG) {
          var wG;
          if ((null === (wG = this.localHook) || void 0 === wG ? void 0 : wG.hookId) === GG) {
            const GG = ZG >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(GG)
          }
          return
        }
        const SG = ZG + bG;
        this.settle(GG, SG) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(GG, {
          untilMs: ZG + 1e3,
          biteAtMs: SG
        }))
      }
      getLocalHook() {
        var GG, bG;
        return null !== (GG = null === (bG = this.localHook) || void 0 === bG ? void 0 : bG.hookId) && void 0 !== GG ? GG : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const GG = this.deps.now();
        for (const [bG, {
            untilMs: ZG,
            biteAtMs: wG
          }] of this.pending)(this.settle(bG, wG) || GG > ZG) && this.pending.delete(bG)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(GG, bG) {
        const ZG = this.deps.getLineOwner(GG);
        if (null === ZG) return !1;
        if (!this.deps.isLocalPlayer(ZG)) return !0;
        if (this.localHook = {
            hookId: GG,
            biteAtMs: bG
          }, !this.deps.isHushWaiting()) {
          const [bG, ZG] = this.deps.getHookPosition(GG);
          this.deps.onCastLanded(bG, ZG)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Mk = ZG(4255);
    const Ak = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      sk = {
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
    class qk {
      constructor(GG) {
        this.deps = GG, this.tell = null
      }
      receiveTell(GG) {
        let {
          biteTellTier: bG
        } = GG;
        this.tell = {
          tier: bG,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(GG) {
        const bG = this.tell;
        if (this.tell = null, !GG) return;
        const ZG = null !== bG && this.deps.now() - bG.atMs <= 3e3 ? bG.tier : 0;
        this.deps.vibrate(Ak[ZG])
      }
      burstAtHook() {
        const GG = this.tell,
          bG = this.deps.getLocalHookPosition();
        null === GG || GG.burst || null === bG || (GG.burst = !0, this.deps.playParticles(function(GG, bG) {
          let [ZG, wG, SG] = bG;
          const {
            count: LG,
            rise: yG,
            colour: kG
          } = sk[GG], [UG, YG, VG] = kG;
          return {
            texture: "glint",
            pos1: [ZG - .3, wG, SG - .3],
            pos2: [ZG + .3, wG + .2, SG + .3],
            dir1: [-.6, yG, -.6],
            dir2: [.6, 1.4 * yG, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: LG,
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
              minColor: [UG, YG, VG, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [UG, YG, VG, 0],
              maxColor: [UG, YG, VG, 0]
            }],
            blendMode: Mk.c.Add,
            hideDist: 48
          }
        }(GG.tier, bG)))
      }
    }
    var nk = ZG(1204),
      gk = ZG(1903),
      ek = ZG(29);

    function Rk(GG, bG) {
      return [{
        timeFraction: 0,
        minColor: [255 * GG[0], 255 * GG[1], 255 * GG[2], 1],
        maxColor: [255 * bG[0], 255 * bG[1], 255 * bG[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Tk = [0, 0, 0],
      Hk = {
        texture: "glint",
        mipmaps: !1,
        rp: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Tk,
        dir2: Tk,
        blendMode: Mk.c.OneOne
      },
      tk = {
        ...Hk,
        colorGradients: Rk([1, .88, .38], [1, .65, .15])
      },
      Dk = {
        ...Hk,
        colorGradients: Rk([.55, .95, 1], [.9, 1, 1])
      },
      Nk = [.5, .5, .5],
      Ok = {
        texture: "glint",
        mipmaps: !1,
        rp: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Rk([1, .12, .12], [1, .35, .2]),
        blendMode: Mk.c.OneOne
      };
    class xk {
      constructor() {
        this.drops = new Map
      }
      hK(GG, bG) {
        if ("overflowFlash" === bG.kind) {
          const [ZG, wG, SG] = bG.position, LG = GG.createParticles(Ok, {
            pos: [ZG, wG, SG],
            half: Nk
          });
          return LG.emit(18), void LG.stop()
        }
        this.drops.has(bG.itemId) || this.drops.set(bG.itemId, {
          owner: bG.owner,
          cosmetic: bG.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Tp(GG) {
        if (0 === this.drops.size) return;
        const bG = performance.now(),
          ZG = GG.getCameraPosition();
        let wG = 0;
        for (const LG of this.drops.values()) null !== LG.particles && wG++;
        for (const [LG, yG] of this.drops) {
          const kG = GG.getPositionView(LG);
          if (null === kG) {
            var SG;
            if (yG.seen || bG - yG.markedAt > 5e3) null !== yG.particles && wG--, null === (SG = yG.particles) || void 0 === SG || SG.stop(), this.drops.delete(LG);
            continue
          }
          yG.cosmetic || !GG.isLocalPlayer(yG.owner) || yG.pickupDelayCleared || (GG.clearPickupDelay(LG), yG.pickupDelayCleared = !0);
          const UG = yG.lastPosition,
            YG = yG.seen && (kG[0] - UG[0]) ** 2 + (kG[1] - UG[1]) ** 2 + (kG[2] - UG[2]) ** 2 > 4e-4,
            VG = (kG[0] - ZG[0]) ** 2 + (kG[1] - ZG[1]) ** 2 + (kG[2] - ZG[2]) ** 2 < 2025;
          yG.seen = !0, UG[0] = kG[0], UG[1] = kG[1], UG[2] = kG[2], YG && (yG.lastMovingAt = bG), null !== yG.particles && (!VG || bG - yG.lastMovingAt > 500) && (yG.particles.stop(), yG.particles = null, wG--), YG && VG && null === yG.particles && wG < 32 && (yG.particles = GG.createParticles(yG.cosmetic ? Dk : tk, {
            pos: kG
          }), wG++), null !== yG.particles && (yG.particles.moveTo(kG), yG.particles.setEmitRate(YG ? 12 : 0)), !YG && null === yG.particles && bG - Math.max(yG.lastMovingAt, yG.markedAt) > 2e3 && this.drops.delete(LG)
        }
      }
      dispose() {
        for (const bG of this.drops.values()) {
          var GG;
          null === (GG = bG.particles) || void 0 === GG || GG.stop()
        }
        this.drops.clear()
      }
    }
    var Bk = ZG(188);
    const GU = Bk.d.td * Bk.d.playerEyeToHeightRatio;
    class bU {
      constructor(GG) {
        this.host = GG, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      hK(GG) {
        this.lava = GG, this.nextUpdateAt = 0
      }
      Tp() {
        var GG;
        const bG = this.host.now();
        if (bG < this.nextUpdateAt) return;
        this.nextUpdateAt = bG + 250;
        const ZG = this.host.playerPosition(),
          wG = ZG && this.findNearest([ZG[0], ZG[1] + GU, ZG[2]]);
        if (!wG || wG.distance >= 40) return void this.stop();
        const SG = .5 * Math.min(1, (40 - wG.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(SG) : this.loop = this.host.play("lavaFlow", SG, wG.position, 40 + GU, 9, !0), null === (GG = this.loop) || void 0 === GG || GG.setPosition(wG.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var GG;
        null === (GG = this.loop) || void 0 === GG || GG.stop(), this.loop = null
      }
      findNearest(GG) {
        let bG = -1,
          ZG = 1 / 0;
        for (let wG = 0; wG < this.lava.length; wG += 3) {
          const SG = this.lava[wG] - GG[0],
            LG = this.lava[wG + 1] - GG[1],
            yG = this.lava[wG + 2] - GG[2],
            kG = SG * SG + LG * LG + yG * yG;
          kG < ZG && (ZG = kG, bG = wG)
        }
        return bG < 0 ? null : {
          position: [this.lava[bG], this.lava[bG + 1], this.lava[bG + 2]],
          distance: Math.sqrt(ZG)
        }
      }
    }
    var ZU = ZG(1887),
      wU = ZG(39066);
    const SU = {
      "Grey Portal": "Gray"
    };
    for (const VU of SG.Sc) SU[`${VU} Portal`] = VU;
    const LU = Object.keys(SU),
      yU = Object.fromEntries(LU.map((GG => [GG, (0, SG.db)(SG.O[`${(0,SG.Se)(SU[GG])}Team`])])));
    Object.fromEntries(LU.map((GG => [GG, SG.O[`${(0,SG.Se)(SU[GG])}UiText`]])));
    class kU {
      constructor(GG, bG) {
        this.presentation = GG, this.portal = bG, this.unlocked = void 0
      }
      hK(GG) {
        const bG = !1 === this.unlocked && GG;
        this.unlocked = GG, this.Tp();
        const {
          min: ZG,
          max: wG,
          unlockedBlock: SG
        } = this.portal;
        if (bG && this.presentation.hasChunk(...ZG)) {
          const [GG, bG, LG] = yU[SG];
          this.presentation.playParticles({
            pos1: [...ZG],
            pos2: wG.map((GG => GG + 1)),
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
              minColor: [GG, bG, LG, 1],
              maxColor: [Math.min(255, GG + 55), Math.min(255, bG + 55), Math.min(255, LG + 90), 1]
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
      Tp() {
        var GG;
        const bG = this.unlocked ? this.portal.unlockedBlock : null !== (GG = this.portal.lockedBlock) && void 0 !== GG ? GG : "Light Gray Portal",
          {
            min: ZG,
            max: wG
          } = this.portal;
        for (let SG = ZG[0]; SG <= wG[0]; SG++)
          for (let GG = ZG[1]; GG <= wG[1]; GG++)
            for (let LG = ZG[2]; LG <= wG[2]; LG++) this.presentation.hasChunk(SG, GG, LG) && this.presentation.qJ(SG, GG, LG) !== bG && this.presentation.HI(SG, GG, LG, bG)
      }
    }
    const UU = {
        farming_1: {
          raises: GG => "NPC" === GG.type && "chef" === GG.variation,
          rise: .4
        },
        fishing_1: {
          raises: GG => "Draugr Warper" === GG.type,
          rise: .4
        }
      },
      YU = (GG, bG, ZG, LG) => {
        let {
          localPlayerId: yG
        } = LG;
        const kG = new ES({
          translate: (GG, bG) => (0, FS.r)(nk.d.get().getCurrentLanguageCode(), GG, bG),
          translateWithIcons: (GG, bG) => (0, FS.o)(nk.d.get().getCurrentLanguageCode(), GG, bG),
          setMenuOpen: GG => {
            GG ? (0, HG.m)() : (0, HG.f)()
          },
          dismissMenu: HG.i,
          publishSkills: GG => {
            tG.l.xh(yZ, GG, !0)
          },
          publishQuests: GG => {
            tG.l.xh(VZ, GG, !0)
          },
          publishQuestNotification: GG => {
            tG.l.xh(pZ, GG, !0)
          },
          publishDungeons: GG => {
            tG.l.xh(KZ, GG, !0)
          },
          publishCollections: GG => {
            tG.l.xh(PZ, GG, !0)
          },
          publishMap: GG => {
            tG.l.xh(fG, GG, !0)
          },
          publishHud: GG => {
            tG.l.xh(JS, GG, !0)
          },
          publishPortalTransit: GG => {
            tG.l.xh(AZ, GG, !0)
          },
          isLoadingScreenUp: () => uS.e.get("loadingOverlayVisible"),
          publishDailyReward: GG => {
            tG.l.xh(nZ, GG, !0)
          },
          publishMailbox: GG => {
            tG.l.xh(HZ, GG, !0)
          },
          publishQuestGraph: GG => {
            tG.l.xh(DZ, GG, !0)
          },
          publishForge: GG => {
            tG.l.xh(hw, GG, !0)
          },
          publishSmuggler: GG => {
            tG.l.xh(rw, GG, !0)
          },
          publishKeepersChair: GG => {
            tG.l.xh(mw, GG, !0)
          },
          publishReachLog: GG => {
            tG.l.xh(Fw, GG, !0)
          },
          publishLampLight: GG => {
            tG.l.xh(Mw, GG, !0)
          },
          publishMagmaward: GG => {
            tG.l.xh(sw, GG, !0)
          },
          publishGlowtide: GG => {
            tG.l.xh(nw, GG, !0)
          },
          publishGlowMeter: GG => {
            tG.l.xh(ew, GG, !0)
          },
          publishHushWait: GG => {
            tG.l.xh(Tw, GG, !0)
          },
          publishPassage: GG => {
            tG.l.xh(ow, GG, !0)
          },
          publishTideCharts: GG => {
            tG.l.xh(tw, GG, !0)
          },
          publishRegulars: GG => {
            tG.l.xh(ZS, GG, !0)
          },
          publishHiddenWaters: GG => {
            tG.l.xh(kS, GG, !0)
          },
          publishDialogue: GG => {
            tG.l.xh(YS, GG, !0)
          },
          publishAutographs: GG => {
            tG.l.xh(KS, GG, !0)
          },
          onDailyRewardStarted: GG => {
            aG.playSound(yG, GG.day === mG ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (GG, bG) => {
            aG.playSound(yG, "exp_collect", .35, 1 + .6 * GG / (bG - 1)), tG.l.xh(gZ, GG === bG - 1)
          },
          onDailyRewardItemLanded: GG => {
            aG.playSound(yG, "pickUp", .6, 1 + .15 * GG)
          },
          onMailboxStarted: () => {
            aG.playSound(yG, "rpgMetalClick", .6, 1), aG.playSound(yG, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            aG.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: ek.l,
          requestTracking: GG => {
            aG.sendCommand(`quests track ${GG}`)
          },
          requestDungeonEnter: (GG, bG) => {
            aG.sendCommand(`dungeonEnter ${GG} ${bG}`)
          },
          requestQuestJump: GG => {
            aG.sendCommand(`${lG} jump ${GG}`)
          },
          requestQuestArrive: (GG, bG) => {
            const ZG = `${lG} arrive ${GG}`;
            aG.sendCommand(bG ? `${ZG} complete` : ZG)
          },
          requestForge: GG => {
            let {
              blade: bG,
              guard: ZG,
              handle: wG
            } = GG;
            aG.sendCommand(`forge ${bG} ${ZG} ${wG}`)
          },
          requestDialogue: () => {
            aG.sendCommand("quests dialogue")
          },
          requestSmuggle: (GG, bG) => {
            aG.sendCommand(`smuggle ${GG} ${bG}`)
          },
          requestKeepersChairAim: GG => {
            aG.sendCommand(`keeperschair-aim ${GG}`)
          },
          requestReachLogOpen: () => {
            aG.sendCommand("reachlog-open")
          },
          requestLampLight: GG => {
            aG.sendCommand(`${GG}`)
          },
          requestTravel: GG => {
            aG.sendCommand(`map travel ${GG.kind} ${GG.id} ${GG.requestId}`)
          }
        });
        let UG, YG, VG, pG, QG, KG, hG, EG, oG, XG, uG, WG, IG;
        const vG = new xk;
        let aG, cG = null;
        const jG = UU[null !== ZG && void 0 !== ZG ? ZG : ""],
          sG = (GG, bG) => {
            null !== jG && void 0 !== jG && jG.raises(bG) && aG.setNametagOffset(GG, jG.rise)
          },
          gG = new qk({
            getLocalHookPosition: () => {
              const GG = eG.getLocalHook();
              return null !== GG && aG.checkValid(GG) ? aG.HJ(GG) : null
            },
            playParticles: GG => {
              aG.playParticleEffect(GG)
            },
            vibrate: GG => {
              DG.i.play("fishBite", GG)
            },
            now: () => performance.now()
          }),
          eG = new Pk({
            getLineOwner: GG => aG.checkValid(GG) ? aG.getLineOwner(GG) : null,
            isLocalPlayer: GG => aG.isLocalPlayer(GG),
            getHookPosition: GG => {
              const [bG, , ZG] = aG.HJ(GG);
              return [bG, ZG]
            },
            isHushWaiting: () => {
              var GG;
              return "waiting" === (null === (GG = kG.hushWait.getSnapshot()) || void 0 === GG ? void 0 : GG.phase)
            },
            onCastLanded: (GG, bG) => {
              kG.tideCharts.castLanded(GG, bG)
            },
            onLocalHookSettled: () => {
              gG.onLocalHookSettled()
            },
            onLocalWaitEnded: GG => {
              gG.onLocalWaitEnded(GG)
            },
            now: () => performance.now()
          }),
          NG = new bU({
            now: () => performance.now(),
            playerPosition: () => aG.checkValid(yG) ? aG.HJ(yG) : null,
            play: (GG, bG, ZG, wG, SG, LG) => aG.playSound(yG, GG, bG, 1, {
              SG: ZG,
              maxHearDist: wG,
              refDistance: SG
            }, LG)
          }),
          OG = new Map;
        let xG;
        return {
          onCreate: GG => {
            if (aG = GG, cG = new wU.SkyblockEntityFacing(GG, jG ? sG : null), kG.portalTransit.resumeArrival(null !== ZG && void 0 !== ZG ? ZG : null), (null !== ZG && void 0 !== ZG ? ZG : wG) === wG) {
              let GG = -1 / 0;
              xG = tG.l.subscribe("toggleMenu", (bG => {
                const ZG = performance.now();
                "inventory|Workbench" !== bG || "cross_to_hub" !== kG.quests.getTrackedQuestId() || ZG - GG < 1e4 || (GG = ZG, aG.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [wG, SG] of Object.entries(null !== (bG = PG[null !== ZG && void 0 !== ZG ? ZG : ""]) && void 0 !== bG ? bG : {})) {
              var bG;
              OG.set(wG, new kU({
                hasChunk: (bG, ZG, wG) => GG.isBlockInLoadedChunk(bG, ZG, wG),
                qJ: (bG, ZG, wG) => GG.blockIdToBlockName(GG.getBlockId(bG, ZG, wG)),
                HI: (bG, ZG, wG, SG) => {
                  GG.HI(bG, ZG, wG, SG)
                },
                playParticles: bG => {
                  GG.playParticleEffect(bG)
                }
              }, SG))
            }
            IG = (0, ZU.g)((GG => function(GG) {
              return Object.hasOwn(Rb, GG) || GG.startsWith("npc_")
            }(GG) ? Hb(GG) : null)), kG.resolveItemName = (bG, ZG) => {
              const wG = GG.getItemStat(yG, bG, "displayName");
              return wG && "object" === typeof wG && "translationKey" in wG ? ZG(wG.translationKey, (0, FS.k)(wG.params, gk.b.shown)) : "string" === typeof wG ? ZG(wG) : bG
            }, kG.quests.notifications.onShown = GG => {
              "quest" === GG ? aG.playSound(yG, "magicAccent1", 1, 1) : "skillLevel" === GG ? aG.playSound(yG, "magicAccent1", 1, .6) : "landmark" === GG ? aG.playSound(yG, "trumpetFlare", 1, .6) : "npcNote" === GG ? aG.playSound(yG, "magicAccent2", .8, 1.1) : "started" === GG ? aG.playSound(yG, (0, ck.g)("bigDrumSwish"), 1, 1) : aG.playSound(yG, (0, ck.g)("rpgHandleSmallLeather"), 1, 1)
            }, kG.forge.onPartSelected = () => {
              aG.playSound(yG, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, kG.forge.onOpened = () => {
              ! function(GG) {
                GG.preloadSounds([(0, ck.g)("firecracker"), "fireBurn", "magicAccent2"])
              }(GG)
            }, kG.forge.onForgeStarted = (bG, ZG, wG) => jk(GG, yG, bG, ZG, wG), kG.smuggler.onBought = () => {
              aG.playSound(yG, (0, ck.g)("rpgHandleSmallLeather"), 1, 1), aG.playSound(yG, "chestOpen", .6, 1)
            }, kG.compass.register(new dG(kG.map, !0)), kG.compass.register(new dG(kG.map, !1)), kG.compass.register(new rG(kG.map)), kG.compass.register(new zG((() => kG.quests.getSnapshot().compassTarget)));
            for (const ZG of ["enemy", "npc"]) kG.compass.register(new JG(kG.map, ZG, (bG => GG.checkValid(bG) ? GG.HJ(bG) : void 0), (bG => GG.isAlive(bG))))
          },
          onAfterRender: (GG, bG) => {
            const ZG = aG.checkValid(yG) ? aG.HJ(yG) : null;
            kG.navigation.afterRender(ZG, performance.now(), bG), kG.glowtide.afterRender(ZG, bG.cameraHeading), kG.tideCharts.afterRender(ZG), eG.afterRender()
          },
          onClose: () => {
            var GG, bG, ZG, wG, SG, LG, yG, fG, KG, dG, JG, rG, zG, iG, CG;
            xG && tG.l.unsubscribe(xG), null === (GG = IG) || void 0 === GG || GG(), vG.dispose(), NG.dispose(), null === (bG = cG) || void 0 === bG || bG.dispose(), eG.dispose(), kG.dispose(), null === (ZG = UG) || void 0 === ZG || ZG(), null === (wG = YG) || void 0 === wG || wG(), null === (SG = VG) || void 0 === SG || SG(), null === (LG = pG) || void 0 === LG || LG(), null === (yG = QG) || void 0 === yG || yG(), null === (fG = hG) || void 0 === fG || fG(), null === (KG = undefined) || void 0 === KG || KG(), null === (dG = EG) || void 0 === dG || dG(), null === (JG = oG) || void 0 === JG || JG(), null === (rG = XG) || void 0 === rG || rG(), null === (zG = uG) || void 0 === zG || zG(), null === (iG = undefined) || void 0 === iG || iG(), null === (CG = WG) || void 0 === CG || CG()
          },
          onPlayerChangeBlock: (GG, bG, wG, LG, UG, YG) => {
            if (GG === yG && "Air" === YG) {
              const GG = aG.getClientOption(yG, "creative");
              kG.skills.predictBlock([bG, wG, LG], UG, GG);
              const YG = function(GG, bG) {
                  if ("hub" === bG || "farming_1" === bG || "mining_1" === bG) return !qG.has(GG) || "hub" !== bG && "mining_1" !== bG ? Object.hasOwn(AG, GG) ? AG[GG] : void 0 : MG
                }(UG, ZG),
                VG = ("hub" === ZG || "mining_1" === ZG) && (SG.Ld.some((GG => GG === UG)) || Object.hasOwn(nG, UG) || "mining_1" === ZG && "Block of Coal" === UG);
              GG || void 0 === YG && !VG || aG.HI(bG, wG, LG, null !== YG && void 0 !== YG ? YG : MG)
            }
          },
          onPlayerAttackEntity: (GG, bG) => {
            if (GG !== yG || "Player" !== aG.getEntityType(bG)) return;
            const [ZG, wG, SG] = aG.HJ(bG);
            aG.burstParticlePreset("critical", [ZG, wG + 1, SG], 10)
          },
          onChangeBlockFail: GG => {
            for (const {
                rG: bG
              }
              of GG) kG.skills.rejectBlock(bG)
          },
          onReceivedMessageFromServer: (GG, bG) => {
            if ("skyblockGatedPortal" === GG) {
              var ZG;
              const [GG, wG] = bG;
              return void(null === (ZG = OG.get(GG)) || void 0 === ZG || ZG.hK(wG))
            }
            if ("skyblockDailyReward" === GG) return void kG.dailyReward.hK(bG);
            if ("skyblockMailbox" === GG) return void kG.mailbox.hK(bG);
            if ("skyblockPortalTransit" === GG) return void kG.portalTransit.hK(bG);
            if ("skyblockLoot" === GG) return void vG.hK(aG, bG);
            if ("skyblockLava" === GG) return void NG.hK(bG);
            if ("skyblockForge" === GG) return void kG.forge.hK(bG);
            if ("skyblockMagmaward" === GG) return void kG.magmaward.hK(bG);
            if ("skyblockGlowtide" === GG) return void kG.glowtide.hK(bG);
            if ("skyblockGlowMeter" === GG) return void kG.glowMeter.hK(bG);
            if ("skyblockHushWait" === GG) return void kG.hushWait.hK(bG);
            if ("skyblockPassage" === GG) {
              const GG = bG;
              return kG.passage.hK(GG), kG.reachLog.receivePassagePhase(GG.passagePhase), XG ??= (0, iG.r)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: kG.passage.show
              }), void kG.keepersChair.receivePassage({
                keepersChairPassagePhase: GG.passagePhase,
                keepersChairPassageNextPhase: GG.passageNextPhase,
                keepersChairPassageTurnsInMs: GG.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === GG) {
              const GG = bG;
              return kG.tideCharts.hK(GG), void(GG.tideCharts.length > 0 && (uG ??= (0, iG.r)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: kG.tideCharts.show
              })))
            }
            if (GG === RG.A) {
              var wG;
              const {
                hookId: GG,
                waiting: ZG
              } = bG;
              return void eG.hookWaiting(GG, null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.remainingMs) && void 0 !== wG ? wG : null)
            }
            if ("skyblockBiteTell" === GG) return void gG.receiveTell(bG);
            if ("skyblockSmuggler" === GG) return void kG.smuggler.hK(bG);
            if ("skyblockKeepersChair" === GG) return kG.keepersChair.hK(bG), void kG.lampLight.setAtChair(kG.keepersChair.isAtChair());
            if ("skyblockLampLight" === GG) {
              const GG = bG;
              var SG;
              if (kG.lampLight.hK(GG), GG.lampLightReleasing) oG ??= (0, iG.r)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  kG.lampLight.setRelease(!1)
                }
              });
              else null === (SG = oG) || void 0 === SG || SG(), oG = void 0;
              return
            }
            if ("skyblockRegulars" === GG) return void kG.regulars.hK(bG);
            if ("skyblockHiddenWaters" === GG) return void kG.hiddenWaters.hK(bG);
            if ("skyblockReachLog" === GG) return kG.reachLog.hK(bG), void(EG ??= (0, iG.r)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: aw
              },
              onClick: kG.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === GG) {
              for (const [GG, ZG, wG, SG] of bG) aG.HI(GG, ZG, wG, SG);
              return
            }
            if ("skyblockHud" === GG) kG.receiveHud(bG);
            else if ("skyblockMap" === GG) kG.map.hK(bG);
            else if (GG === TG.e) kG.skills.hK(bG);
            else if (GG === FG && "dialogue" === bG.kind) kG.dialogue.hK(bG);
            else if (GG === FG) kG.quests.hK(bG);
            else if ("skyblockDungeons" === GG) kG.dungeons.hK(bG);
            else if ("sbCollections" === GG) kG.collections.hK(bG);
            else if ("skyblockQuestGraph" === GG) kG.questGraph.hK(bG);
            else {
              if ("skyblockAutographs" !== GG) return;
              kG.autographs.hK(bG)
            }
            if (!YG && kG.map.getSnapshot().enabled) {
              const GG = (0, iG.r)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: kG.map.show
                }),
                bG = (0, HG.n)(kG.map.show);
              YG = () => {
                GG(), bG()
              }
            }!VG && kG.skills.getSnapshot().enabled && (VG = (0, iG.r)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: kG.skills.show
            })), !hG && kG.collections.getSnapshot().enabled && (hG = (0, iG.r)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: kG.collections.show
            })), !pG && kG.quests.getSnapshot().enabled && (pG = (0, iG.r)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: kG.quests.show
            })), !WG && kG.autographs.getSnapshot().enabled && (WG = (0, iG.r)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: kG.autographs.show
            }));
            const LG = kG.dungeons.getSnapshot().enabled;
            var yG;
            (VG || pG || LG) && KG !== LG && (KG = LG, null === (yG = QG) || void 0 === yG || yG(), QG = (0, iG.r)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: lb
              },
              disabled: !LG,
              panel: !0,
              onClick: kG.dungeons.show
            }));
            UG || (UG = (0, HG.q)((0, CG.createElement)(vk, {
              controller: kG
            }), {
              content: (0, CG.createElement)(ak, {
                controller: kG
              }),
              onClose: kG.close
            }))
          },
          Tp: () => {
            var GG;
            for (const bG of OG.values()) bG.Tp();
            vG.Tp(aG), NG.Tp(), null === (GG = cG) || void 0 === GG || GG.Tp(), kG.skills.Tp(), kG.quests.Tp(), kG.dailyReward.Tp(), kG.mailbox.Tp(), kG.map.Tp()
          }
        }
      }
  },
  36693: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      e: () => wG
    });
    const wG = "skyblockSkills",
      SG = "skills_test_gym"
  },
  34499: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG,
      e: () => yG
    });
    const wG = [{
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

    function SG(GG) {
      let bG, ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof GG) {
        if (!Number.isFinite(GG)) return "0";
        if (Math.abs(GG) < 100) {
          const bG = GG < 0 ? "-" : "",
            ZG = Math.abs(GG);
          return ZG >= 10 ? `${bG}${ZG.toFixed(1).replace(/\.0$/,"")}` : `${bG}${ZG.toFixed(2).replace(/\.?0+$/,"")}`
        }
        bG = BigInt(Math.floor(GG))
      } else bG = GG;
      const SG = bG < 0n ? -bG : bG,
        LG = bG < 0n ? "-" : "",
        yG = SG.toString();
      if (yG.length <= ZG) return `${LG}${yG}`;
      const kG = 3 * Math.floor((yG.length - 1) / 3);
      if (kG < 3) return `${LG}${yG}`;
      if (kG > 3 * wG.length) {
        const GG = yG[0],
          bG = yG.slice(1, 3).replace(/0+$/, "");
        return `${LG}${bG?`${GG}.${bG}`:GG}e${yG.length-1}`
      }
      const {
        threshold: UG,
        suffix: YG
      } = wG[wG.length - kG / 3], VG = SG / UG, pG = Number(1000n * (SG % UG) / UG), fG = Number(VG) + pG / 1e3;
      let QG;
      return QG = fG >= 100 ? Math.floor(fG).toString() : fG >= 10 ? fG.toFixed(1).replace(/\.0$/, "") : fG.toFixed(2).replace(/\.?0+$/, ""), `${LG}${QG}${YG}`
    }
    const LG = wG.map((GG => {
      let {
        threshold: bG,
        suffix: ZG
      } = GG;
      return {
        threshold: Number(bG),
        suffix: ZG
      }
    })).filter((GG => {
      let {
        threshold: bG
      } = GG;
      return Number.isFinite(bG)
    }));

    function yG(GG) {
      const bG = Math.abs(GG),
        ZG = GG < 0 ? "-" : "";
      for (const {
          threshold: wG,
          suffix: SG
        }
        of LG)
        if (bG >= wG) {
          const GG = bG / wG;
          if (GG >= 1e3) return `${ZG}${bG.toExponential(2).replace("e+","e")}`;
          let LG;
          return LG = GG >= 100 ? Math.floor(GG).toString() : GG >= 10 ? GG.toFixed(1).replace(/\.0$/, "") : GG.toFixed(2).replace(/\.?0+$/, ""), `${ZG}${LG}${SG}`
        } return `${ZG}${bG}`
    }
  },
  38980: (GG, bG, ZG) => {
    var wG = {
      "./combat_1.png": 38984,
      "./dungeon_crumbling_crypt.png": 38986,
      "./dungeon_frozen_hollow.png": 38988,
      "./dungeon_wildwood_grove.png": 38995,
      "./dungeons.png": 39003,
      "./farming_1.png": 39007,
      "./fishing_1.png": 39015,
      "./hub.png": 39018,
      "./island.png": 39025,
      "./mining_1.png": 39031,
      "./mining_1_bridge.png": 39038,
      "./mining_1_gallery.png": 39041,
      "./mining_1_hollow.png": 39048,
      "./mining_1_village.png": 39055
    };

    function SG(GG) {
      var bG = LG(GG);
      return ZG(bG)
    }

    function LG(GG) {
      if (!ZG.o(wG, GG)) {
        var bG = new Error("Cannot find module '" + GG + "'");
        throw bG.code = "MODULE_NOT_FOUND", bG
      }
      return wG[GG]
    }
    SG.keys = function() {
      return Object.keys(wG)
    }, SG.resolve = LG, GG.exports = SG, SG.id = 38980
  },
  38984: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38986: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38988: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38995: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  39003: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  39007: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  39015: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  39018: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  39025: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  39031: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  39038: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  39041: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  39048: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  39055: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  },
  18419: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20547: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22983: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24600: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26300: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26318: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38966: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  },
  38971: GG => {
    GG.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);