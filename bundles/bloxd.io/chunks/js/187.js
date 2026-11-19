export const id = 187;
export const ids = [49, 187];
export const modules = {
  37929: (YY, rY, DY) => {
    var FY = {
      "./combat_1.png": 37934,
      "./dungeon_crumbling_crypt.png": 37936,
      "./dungeon_frozen_hollow.png": 37938,
      "./dungeon_wildwood_grove.png": 37940,
      "./dungeons.png": 37946,
      "./farming_1.png": 37950,
      "./fishing_1.png": 37958,
      "./hub.png": 37963,
      "./island.png": 37970,
      "./mining_1.png": 37975,
      "./mining_1_bridge.png": 37980,
      "./mining_1_gallery.png": 37982,
      "./mining_1_hollow.png": 37990,
      "./mining_1_village.png": 37995
    };

    function AY(YY) {
      var rY = IY(YY);
      return DY(rY)
    }

    function IY(YY) {
      if (!DY.o(FY, YY)) {
        var rY = new Error("Cannot find module '" + YY + "'");
        throw rY.code = "MODULE_NOT_FOUND", rY
      }
      return FY[YY]
    }
    AY.keys = function() {
      return Object.keys(FY)
    }, AY.resolve = IY, YY.exports = AY, AY.id = 37929
  },
  38003: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY,
      e: () => IY
    });
    const FY = new WeakMap;

    function AY(YY, rY) {
      return FY.set(YY, rY), YY
    }

    function IY(YY) {
      var rY;
      return null !== (rY = FY.get(YY)) && void 0 !== rY ? rY : null
    }
  },
  37914: (YY, rY, DY) => {
    function FY(YY, rY, DY) {
      var FY;
      const {
        width: AY,
        height: IY
      } = DY, RY = null !== (FY = YY.text) && void 0 !== FY ? FY : YY, OY = (RY.x / 100 - .5) * AY, gY = (RY.y / 100 - .5) * IY, aY = AY / 2 - rY.x;
      if (null !== YY.text && Math.abs(OY) <= aY && gY >= rY.top - IY / 2 && gY <= IY / 2 - rY.bottom) return {
        x: RY.x,
        y: RY.y
      };
      const vY = Math.min(0 === OY ? 1 / 0 : aY / Math.abs(OY), gY > 0 ? (IY / 2 - rY.bottom) / gY : gY < 0 ? (rY.top - IY / 2) / gY : 1 / 0);
      return !Number.isFinite(vY) || vY < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + OY * vY / AY * 100,
        y: 50 + gY * vY / IY * 100
      }
    }
    DY.d(rY, {
      b: () => FY
    })
  },
  37926: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    const FY = 4,
      AY = 12e3,
      IY = 1e3;
    class RY {
      constructor() {
        let {
          limit: YY = FY,
          windowMs: rY = AY,
          spacingMs: DY = IY,
          now: RY = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = YY, this.windowMs = rY, this.spacingMs = DY, this.now = RY
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const YY of this.priority) YY.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const YY = this.now();
        this.sent.push(YY), this.lastSentAt = YY, this.schedule(), this.notify()
      }
      addPriority(YY) {
        return this.priority.add(YY), () => {
          this.priority.delete(YY)
        }
      }
      subscribe(YY) {
        return this.listeners.add(YY), () => {
          this.listeners.delete(YY)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const YY of this.priority)
          if (YY.waiting()) return !0;
        return !1
      }
      prune() {
        const YY = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= YY;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const YY = this.now(),
          rY = this.lastSentAt + this.spacingMs,
          DY = Math.min(rY > YY ? rY : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        DY !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, DY - YY)))
      }
      notify() {
        for (const YY of this.listeners) YY()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  37910: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    class FY {
      constructor(YY, rY, DY) {
        this.vo = YY, this.beforeOpen = rY, this.afterClose = DY, this.open = !1, this.Ky = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.Ky && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(YY) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(YY)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.Ky = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.Ky || (this.snapshot = this.buildSnapshot(), this.vo(this.snapshot))
      }
    }
  },
  38005: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      SkyblockEntityFacing: () => OY,
      needsSkyblockEntityFacing: () => RY
    });
    var FY = DY(37921),
      AY = DY(3815),
      IY = DY(38011);

    function RY(YY, rY) {
      if (YY.metaInfo === FY.n || "Iron Guardian" === YY.type || "Gold Guardian" === YY.type) return !0;
      if ("Pig" === YY.type) return "sitting" === YY.pose;
      if ("Person" !== YY.meshKind || void 0 === YY.meshOpts) return !1;
      let DY = null === rY || void 0 === rY ? void 0 : rY.get(YY.meshOpts);
      if (void 0 === DY) {
        var IY, RY;
        const FY = (0, AY.j)(YY);
        DY = !1, "pig_napoleon" === (null === FY || void 0 === FY || null === (IY = FY.opts.textures) || void 0 === IY ? void 0 : IY.head) ? DY = !0 : "npc_pig_head" === (null === FY || void 0 === FY || null === (RY = FY.opts.textures) || void 0 === RY ? void 0 : RY.head) && (DY = "sitting" === FY.opts.pose || "sitting"), rY && (rY.size >= 256 && rY.clear(), rY.set(YY.meshOpts, DY))
      }
      return "sitting" === DY ? "sitting" === YY.pose : DY
    }(0, IY.f)("skyblock", ((YY, rY) => {
      rY.setFacingTolerance(RY(YY) ? 0 : null)
    }));
    class OY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = YY, this.alsoVisit = rY, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = YY => {
          var rY;
          const DY = this.api.getEntityInfo(YY);
          DY && (RY(DY, this.meshFacingCache) && (this.api.setFacingTolerance(YY, 0), this.nextFacing.add(YY)), null === (rY = this.alsoVisit) || void 0 === rY || rY.call(this, YY, DY))
        }
      }
      Zu() {
        const {
          api: YY
        } = this, rY = this.nextFacing;
        YY.forEachEntity(this.visit);
        for (const DY of this.facing) rY.has(DY) || YY.setFacingTolerance(DY, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = rY
      }
      dispose() {
        for (const YY of this.facing) this.api.setFacingTolerance(YY, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  37903: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => Ag
    });
    const FY = "island";
    var AY = DY(341);
    const IY = (0, AY.Bb)([0, 0, -1]),
      RY = [{
        name: "S",
        bearing: (0, AY.Bb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, AY.Bb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: IY
      }, {
        name: "W",
        bearing: (0, AY.Bb)([1, 0, 0])
      }];

    function OY(YY, rY, DY) {
      return [100 * (DY.mapMaxX - YY) / (DY.mapMaxX - DY.mapMinX), 100 * (rY - DY.mapMinZ) / (DY.mapMaxZ - DY.mapMinZ)]
    }

    function gY(YY, rY, DY) {
      const AY = "local" === rY,
        IY = YY.background,
        RY = rY => IY ? OY(rY[0] - YY.mapOrigin[0], rY[2] - YY.mapOrigin[2], IY.bounds) : [50, 50],
        gY = (YY.insideDungeon ? [] : YY.landmarks).map((YY => {
          var rY, FY;
          return {
            id: YY.id,
            name: DY(YY.visited && YY.nameKey ? null !== (rY = YY.mapLabelKey) && void 0 !== rY ? rY : YY.nameKey : "skyblockGame:mapUnknown"),
            icon: YY.visited && null !== (FY = YY.icon) && void 0 !== FY ? FY : "unknown",
            visited: YY.visited,
            current: !1,
            position: RY(YY.position),
            travelKind: "landmark",
            travelId: YY.id
          }
        })),
        vY = YY.zones.map((rY => {
          var FY;
          return {
            id: rY.id,
            name: DY(rY.visited && rY.nameKey ? rY.nameKey : "skyblockGame:mapUnknown"),
            icon: rY.visited && null !== (FY = rY.icon) && void 0 !== FY ? FY : "unknown",
            visited: rY.visited,
            current: rY.id === YY.zoneId,
            position: rY.position,
            thumbnail: rY.visited ? rY.id : void 0,
            travelKind: "zone",
            travelId: rY.id
          }
        })),
        uY = YY.insideDungeon || !IY ? [] : YY.portals.map((YY => {
          var rY;
          return {
            id: YY.id,
            name: DY(null !== (rY = YY.nameKey) && void 0 !== rY ? rY : "skyblockGame:mapUnknown"),
            icon: YY.visited ? "dungeons" === YY.destination ? "portal_orange" : "portal" : "unknown",
            visited: YY.visited,
            current: !1,
            position: RY(YY.position),
            colour: YY.colour,
            travelKind: "zone",
            travelId: YY.destination
          }
        })),
        sY = AY ? gY : vY,
        iY = sY.filter((YY => YY.visited)).length,
        yY = IY ? (IY.bounds.mapMaxX - IY.bounds.mapMinX) / (IY.bounds.mapMaxZ - IY.bounds.mapMinZ) : 2,
        QY = IY ? JSON.stringify([IY.bounds, YY.mapOrigin]) : "";
      return {
        local: AY,
        points: sY,
        portals: AY ? uY : [],
        progress: sY.length ? DY("skyblockGame:mapDiscovered", {
          current: String(iY),
          total: String(sY.length)
        }) : null,
        percent: sY.length ? 100 * iY / sY.length : 0,
        canTravel: [...sY, ...AY ? uY : []].some((YY => YY.visited && !YY.current)),
        noLandmarks: AY && !YY.insideDungeon && 0 === gY.length,
        background: IY ? {
          imageKey: IY.imageKey,
          fallbackImageKey: YY.zoneId,
          geometryKey: QY,
          label: DY(IY.labelKey),
          colour: IY.backgroundColour,
          ratio: yY
        } : null,
        connections: aY(YY.zones),
        minimap: IY ? {
          imageKey: IY.imageKey,
          fallbackImageKey: YY.zoneId,
          geometryKey: QY,
          label: DY(IY.labelKey),
          colour: IY.backgroundColour,
          caption: DY(YY.zoneId === FY ? "skyblockGame:zoneIsland" : IY.labelKey),
          width: (IY.bounds.mapMaxX - IY.bounds.mapMinX) / IY.minimapSpan * 100 + "%",
          height: (IY.bounds.mapMaxZ - IY.bounds.mapMinZ) / IY.minimapSpan * 100 + "%",
          markers: [...gY, ...uY]
        } : null
      }
    }

    function aY(YY) {
      const rY = new Set;
      return YY.flatMap((DY => DY.connections.flatMap((FY => {
        const AY = YY.find((YY => YY.id === FY)),
          IY = [DY.id, FY].sort().join("|");
        return !AY || rY.has(IY) ? [] : (rY.add(IY), [{
          id: `${DY.id}-${FY}`,
          start: DY.position,
          end: AY.position,
          explored: DY.visited && AY.visited
        }])
      }))))
    }
    var vY = DY(37910);
    class uY extends vY.c {}
    const sY = "skyblockMapView";
    class iY extends uY {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(YY, FY, AY), this.requestTravel = rY, this.translate = DY, this.now = IY, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = YY => {
          this.tab = YY, this.feedbackKey = "", this.emit()
        }, this.travel = (YY, rY) => {
          if (!this.map || this.pending || this.Ky) return;
          const DY = ("zone" === YY ? this.map.zones : this.map.landmarks).find((YY => YY.id === rY));
          if (DY) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in DY && !DY.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (DY.visited)
              if ("zone" === YY && rY === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const DY = ++this.nextRequestId;
                this.pending = {
                  requestId: DY,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: YY,
                  id: rY,
                  requestId: DY
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
      setTranslator(YY) {
        this.translate = YY, this.emit()
      }
      Cy(YY) {
        var rY;
        if (!this.Ky)
          if ("entities" !== YY.kind)
            if ("open" !== YY.kind) {
              var DY, FY;
              if ("snapshot" === YY.kind)(null === (DY = YY.snapshot) || void 0 === DY ? void 0 : DY.zoneId) !== (null === (FY = this.map) || void 0 === FY ? void 0 : FY.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = YY.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === YY.kind) {
                var AY;
                YY.requestId === (null === (AY = this.pending) || void 0 === AY ? void 0 : AY.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (YY.requestId === (null === (rY = this.pending) || void 0 === rY ? void 0 : rY.requestId)) {
                var IY;
                this.pending = null, this.feedbackKey = null !== (IY = YY.errorKey) && void 0 !== IY ? IY : "", null === YY.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = YY.entities
      }
      Zu() {
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
          presentation: this.map ? gY(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const yY = 67.5 * Math.PI / 180;

    function QY(YY, rY) {
      const DY = Math.abs(YY);
      if (DY > yY || rY.trackHalfWidth <= 0) return null;
      const FY = rY.trackHalfWidth,
        AY = rY.screenHalfWidth / (rY.tanHalfFovX * Math.max(.5, Math.cos(rY.pitch))),
        IY = Math.min(Math.atan(.6 * FY / AY), .75 * yY),
        RY = AY * Math.tan(IY);
      let OY;
      if (DY <= IY) OY = AY * Math.tan(DY);
      else {
        const YY = yY - IY,
          rY = Math.max(0, AY * YY / (Math.cos(IY) ** 2 * (FY - RY)) - 1),
          gY = (DY - IY) / YY;
        OY = RY + (FY - RY) * (1 + rY) * gY / (1 + rY * gY)
      }
      return 50 + Math.sign(YY) * OY * 50 / FY
    }
    class oY {
      constructor(YY, rY) {
        this.map = YY, this.visited = rY, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = rY ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const YY = this.map.getSnapshot().map;
        return !YY || YY.insideDungeon ? [] : YY.landmarks.filter((YY => YY.visited === this.visited)).map((YY => {
          var rY, DY;
          return {
            id: `landmark:${YY.id}`,
            position: YY.position,
            icon: null !== (rY = YY.icon) && void 0 !== rY ? rY : "unknown",
            nameKey: null !== (DY = YY.nameKey) && void 0 !== DY ? DY : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class WY {
      constructor(YY, rY, DY, FY) {
        this.map = YY, this.kind = rY, this.position = DY, this.alive = FY, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = rY, this.range = "enemy" === rY ? 48 : 64, this.limit = 12
      }
      lE(YY) {
        if ("enemy" !== this.kind || this.alive(YY.pF)) return this.position(YY.pF)
      }
      getPoints() {
        const YY = [];
        for (const FY of this.map.getEntities()) {
          if (FY.kind !== this.kind || "enemy" === this.kind && !this.alive(FY.compassEntityId)) continue;
          const AY = this.position(FY.compassEntityId);
          var rY, DY;
          if (AY) YY.push({
            id: `${this.kind}:${FY.compassEntityId}`,
            pF: FY.compassEntityId,
            kind: this.kind,
            icon: null !== (rY = FY.icon) && void 0 !== rY ? rY : FY.npcSkin ? `npc_${FY.npcSkin}` : this.kind,
            displayName: FY.displayName,
            position: AY,
            nameKey: null !== (DY = FY.nameKey) && void 0 !== DY ? DY : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return YY
      }
    }
    class EY {
      constructor(YY) {
        this.map = YY, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const YY = this.map.getSnapshot().map;
        return !YY || YY.insideDungeon ? [] : YY.portals.map((YY => {
          var rY;
          return {
            id: "portal:" + YY.id,
            kind: "portal",
            position: YY.position,
            nameKey: null !== (rY = YY.nameKey) && void 0 !== rY ? rY : "skyblockGame:compassUnvisitedZone",
            icon: YY.visited ? "dungeons" === YY.destination ? "portal_orange" : "portal" : "unknown",
            colour: YY.colour
          }
        }))
      }
    }
    class mY {
      constructor(YY) {
        this.target = YY, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const YY = this.target();
        return YY ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: YY.position,
          nameKey: YY.nameKey
        }] : []
      }
    }

    function VY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY.position;
      const IY = FY[0] - rY[0],
        RY = FY[2] - rY[2];
      return {
        ...YY,
        position: FY,
        offset: AY.c.computeShortestRotation(DY, (0, AY.Bb)([IY, 0, RY])),
        distance: Math.hypot(IY, FY[1] - rY[1], RY)
      }
    }
    let SY;

    function lY(YY, rY) {
      var DY;
      return (null === (DY = SY) || void 0 === DY ? void 0 : DY.locale) !== rY && (SY = {
        locale: rY,
        near: new Intl.NumberFormat(rY, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(rY, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (YY < 10 ? SY.near : SY.far).format(YY)
    }
    class TY {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(YY) {
        return this.providers.set(YY.id, YY), this.refreshAt = 0, () => {
          this.providers.get(YY.id) === YY && (this.providers.delete(YY.id), this.refreshAt = 0)
        }
      }
      frame(YY, rY, DY) {
        if (DY >= this.refreshAt) {
          this.refreshAt = DY + 200, this.candidates = [];
          for (const rY of this.providers.values()) {
            if (!rY.enabled) continue;
            const DY = rY.getPoints().map((rY => {
              const DY = rY.position;
              return {
                point: rY,
                distance: Math.hypot(DY[0] - YY[0], DY[1] - YY[1], DY[2] - YY[2])
              }
            })).filter((YY => YY.distance <= rY.range)).sort(((YY, rY) => YY.distance - rY.distance)).slice(0, rY.limit);
            for (const {
                point: YY
              }
              of DY) this.candidates.push({
              provider: rY,
              point: YY
            })
          }
        }
        const FY = [];
        for (const {
            point: AY,
            provider: IY
          }
          of this.candidates) {
          if (!IY.enabled) continue;
          const DY = IY.lE ? IY.lE(AY) : AY.position;
          if (DY) {
            const IY = VY(AY, YY, rY, DY);
            Math.abs(IY.offset) <= yY && FY.push(IY)
          }
        }
        return FY
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var eY = DY(36034),
      NY = DY(61);
    const BY = [{
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
      cY = BY.length;

    function KY(YY) {
      return YY >= cY ? 1 : YY + 1
    }
    const HY = "skyblockQuests";
    var zY = DY(37921);
    const ZY = "devquests",
      CY = "none",
      fY = {
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
      jY = "Compressed Messy Stone",
      hY = {
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
      dY = ["Stone", "Diorite", "Andesite", "Granite"],
      JY = new Set(dY),
      MY = (Object.keys(hY), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const wY = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function bY(YY, rY) {
      const DY = Math.floor(5 * YY / (2 * rY + 1));
      return Math.min(4, Math.max(0, DY))
    }
    var XY = DY(1244);
    var qY = DY(35799);
    var pY = DY(36032),
      kY = DY(25),
      GY = DY(8287);
    const xY = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      nY = 1e3;

    function PY(YY) {
      return Math.max(0, YY)
    }

    function UY(YY) {
      return 1 + .01 * PY(YY)
    }

    function LY(YY) {
      return 1 + .005 * PY(YY)
    }

    function tY(YY) {
      return 1 + .005 * PY(YY)
    }

    function Yr(YY) {
      return .01 * PY(YY)
    }

    function rr(YY) {
      return 150 / (150 + PY(YY))
    }

    function Dr(YY) {
      return 1 + .002 * PY(YY)
    }

    function Fr(YY) {
      return Math.round(10 * YY) / 10
    }

    function Ar(YY, rY) {
      switch (YY) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Fr(100 * (LY(rY) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Fr(100 * (UY(rY) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Fr(100 * (tY(rY) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Fr(100 * Yr(rY))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Fr(100 * (1 - rr(rY)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Fr(100 * (Dr(rY) - 1))
          }
      }
    }

    function Ir(YY) {
      return "farming" === YY ? 200 : 100
    }

    function Rr(YY, rY) {
      if (!Number.isSafeInteger(YY) || YY < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const DY = Ir(rY),
        FY = YY => function(YY, rY) {
          return Ir(YY) * rY * (rY + 1) / 2
        }(rY, YY);
      let AY = Math.min(nY, Math.floor((Math.sqrt(8 * YY / DY + 1) - 1) / 2));
      return AY < nY && FY(AY + 1) <= YY ? AY++ : FY(AY) > YY && AY--, {
        totalXp: YY,
        level: AY,
        xpIntoLevel: YY - FY(AY),
        xpForNextLevel: AY === nY ? null : DY * (AY + 1)
      }
    }
    const Or = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function gr(YY) {
      return Or.has(YY)
    }
    const ar = new Set(AY.ob);

    function vr(YY) {
      return ar.has(YY)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const ur = {
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
      sr = {
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
      ir = {
        ...sr,
        ...Object.fromEntries(Object.entries(MY).map((YY => {
          let [rY, DY] = YY;
          return [rY, 9 * sr[DY]]
        })))
      },
      yr = {
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
      Qr = {
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
    const or = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Wr = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Er(YY) {
      return `rgb(${Wr[YY].join(", ")})`
    }

    function mr(YY, rY, DY) {
      if (!DY) return YY(rY);
      const FY = {};
      for (const [AY, IY] of Object.entries(DY)) FY[AY] = "string" === typeof IY ? IY : YY(IY.translationKey);
      return YY(rY, FY)
    }
    class Vr {
      constructor(YY, rY) {
        this.now = YY, this.getJournal = rY, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.ja = !1, this.onShown = () => {}
      }
      enqueue(YY) {
        const rY = Sr(YY);
        if (rY) this.pending.push(YY);
        else {
          const rY = this.pending.findIndex(Sr);
          this.pending.splice(-1 === rY ? this.pending.length : rY, 0, YY)
        }
        return (null === this.current || null !== this.followUp && !rY) && (this.advance(), !0)
      }
      setHeld(YY) {
        return this.ja = YY, !YY && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Zu() {
        const YY = this.getJournal(),
          rY = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === rY ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === rY || void 0 === rY ? void 0 : rY.kind) && YY && YY.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === rY || void 0 === rY ? void 0 : rY.kind)) {
          const YY = this.findFollowUp(this.current);
          if ("step" !== (null === YY || void 0 === YY ? void 0 : YY.kind) || YY.questId !== rY.questId || YY.step.id !== rY.step.id) return this.showFollowUp(YY, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(YY, rY, DY) {
        var FY, AY, IY, RY;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, YY, DY);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, YY);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, YY, rY);
        const {
          questCompletionKind: OY,
          questCompletionNameKey: gY
        } = this.current, aY = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, vY = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, uY = "step" === (null === (FY = this.followUp) || void 0 === FY ? void 0 : FY.kind) ? this.followUp : null, sY = "explore" === (null === (AY = this.followUp) || void 0 === AY ? void 0 : AY.kind);
        let iY;
        return iY = sY ? YY("skyblockGame:questExploreTitle") : null !== uY ? "quest" === OY ? YY("skyblockGame:questNextQuestTitle", {
          quest: YY(uY.questNameKey)
        }) : YY("skyblockGame:questNextStepTitle") : YY("started" === OY ? "skyblockGame:questStartedTitle" : "quest" === OY ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? OY : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: iY,
          name: sY ? rY("skyblockGame:questExploreName") : null !== uY ? mr(rY, uY.step.nameKey, uY.step.nameParams) : mr(rY, gY, aY),
          description: sY ? rY("skyblockGame:questExploreDescription") : null === uY ? null : mr(rY, uY.step.descriptionKey, uY.step.descriptionParams),
          reward: null === this.followUp && vY > 0 ? rY("skyblockGame:questCoinRewardSuffix", {
            amount: vY.toLocaleString(DY)
          }) : null,
          iconItem: null !== (IY = null === uY || void 0 === uY ? void 0 : uY.step.questIconItem) && void 0 !== IY ? IY : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== uY && (null === (RY = this.getJournal()) || void 0 === RY ? void 0 : RY.trackedQuestId) === uY.questId ? uY.step.nameKey : null
        }
      }
      getSkillLevelView(YY, rY, DY) {
        let {
          skill: FY,
          beforeLevel: AY,
          level: IY
        } = YY;
        const RY = Ar(FY, AY),
          OY = Ar(FY, IY);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: rY(`skyblockGame:${FY}`),
          name: rY("skyblockGame:skillLevelUp", {
            to: IY.toLocaleString(DY)
          }),
          description: RY.percent === OY.percent ? null : rY(`${OY.translationKey}Change`, {
            before: RY.percent.toLocaleString(DY),
            after: OY.percent.toLocaleString(DY)
          }),
          reward: null,
          iconItem: or[FY],
          accent: Er(FY),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(YY, rY) {
        let {
          landmarkNameKey: DY
        } = YY;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: rY("skyblockGame:landmarkDiscovered"),
          name: rY(DY),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(YY, rY, DY) {
        let {
          titleKey: FY,
          textKey: AY,
          params: IY = {},
          nameKeys: RY = {},
          iconItem: OY = null
        } = YY;
        const gY = {
          ...IY
        };
        for (const [aY, vY] of Object.entries(RY)) gY[aY] = rY(vY);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: rY(FY),
          name: DY(AY, gY),
          description: null,
          reward: null,
          iconItem: OY,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var YY;
        if (null !== this.followUp) return 5600;
        switch (null === (YY = this.current) || void 0 === YY ? void 0 : YY.questCompletionKind) {
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
      showFollowUp(YY, rY) {
        null === YY || this.ja ? this.advance() : (this.followUp = YY, this.token++, this.shownAt = this.now(), this.expiresAt = null !== rY && void 0 !== rY ? rY : this.shownAt + this.durationMs())
      }
      findFollowUp(YY) {
        var rY;
        const DY = this.getJournal();
        if (!DY || this.hasPendingQuestPopup() || Sr(YY)) return null;
        const FY = "started" === YY.questCompletionKind ? DY.active.some((rY => rY.id === YY.questCompletionQuestId)) : "quest" === YY.questCompletionKind ? DY.completed.some((rY => rY.id === YY.questCompletionQuestId)) : [...DY.active, ...DY.completed].some((rY => rY.id === YY.questCompletionQuestId && rY.subquests.some((rY => rY.id === YY.questCompletionStepId && "completed" === rY.status))));
        if (!FY) return null;
        if ("quest" === YY.questCompletionKind && 0 === DY.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const AY = DY.active.find((YY => YY.id === DY.trackedQuestId)),
          IY = null !== (rY = null === AY || void 0 === AY ? void 0 : AY.subquests.find((YY => "ready" === YY.status))) && void 0 !== rY ? rY : null === AY || void 0 === AY ? void 0 : AY.subquests.find((YY => "active" === YY.status));
        return IY ? {
          kind: "step",
          questId: AY.id,
          questNameKey: AY.nameKey,
          step: IY
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((YY => !Sr(YY)))
      }
      advance() {
        var YY;
        this.current = this.ja ? null : null !== (YY = this.pending.shift()) && void 0 !== YY ? YY : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function Sr(YY) {
      return lr(YY.questCompletionKind)
    }

    function lr(YY) {
      return "skillLevel" === YY || "landmark" === YY || "npcNote" === YY
    }
    var Tr = DY(37914);
    const er = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      Nr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      Br = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Kr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var Hr = DY(37918);
    const zr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Zr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Cr = DY.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const fr = DY.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var hr = DY(18131),
      dr = DY(20222),
      Jr = DY(22651),
      Mr = DY(24164),
      wr = DY(25837);
    const br = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: hr,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: dr,
      cow: Kr,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: DY(25858),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: er,
      fishing_1: er,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: Nr,
      guardian_iron: Br,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Jr,
      mines: Mr,
      mining_1: Mr,
      npc: cr,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Kr,
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
      npc_gold_guardian: Nr,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: Br,
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
      npc_tentacle_guy: Hr,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: zr,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Cr,
      quest_talk: fr,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: jr,
      watermelon: wr
    };

    function Xr(YY, rY) {
      const DY = document.createElement("img");
      return DY.className = rY, DY.src = YY, DY.alt = "", DY.draggable = !1, DY
    }

    function qr(YY) {
      var rY;
      const DY = null !== (rY = br[YY]) && void 0 !== rY ? rY : YY.startsWith("npc_") ? cr : jr;
      if ("portal" !== YY) return Xr(DY, "SkyblockMapIcon");
      const FY = document.createElement("span");
      FY.className = "SkyblockMapIcon Portal";
      const AY = document.createElement("span");
      return AY.className = "SkyblockMapIconTint", AY.style.maskImage = AY.style.webkitMaskImage = `url("${Zr}")`, FY.append(Xr(DY, "SkyblockMapIconLayer"), AY, Xr(Zr, "SkyblockMapIconLayer SkyblockMapIconShade")), FY
    }
    var pr = DY(37888),
      kr = DY(3828);
    const Gr = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function xr(YY) {
      const rY = new kr.g(YY);
      return {
        radius: 45,
        squareness: 3,
        wobbles: Gr.map((YY => {
          let {
            lobes: DY,
            amount: FY
          } = YY;
          return {
            lobes: DY[Math.floor(rY.next() * DY.length)],
            amount: FY[0] + rY.next() * (FY[1] - FY[0]),
            phase: 2 * rY.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function nr(YY) {
      let {
        radius: rY,
        squareness: DY,
        wobbles: FY,
        samples: AY
      } = YY;
      const IY = [];
      for (let RY = 0; RY < AY; RY++) {
        const YY = 2 * Math.PI * RY / AY,
          OY = Math.cos(YY),
          gY = Math.sin(YY),
          aY = rY * (Math.abs(OY) ** DY + Math.abs(gY) ** DY) ** (-1 / DY) * FY.reduce(((rY, DY) => {
            let {
              lobes: FY,
              amount: AY,
              phase: IY
            } = DY;
            return rY + AY * Math.sin(FY * YY + IY)
          }), 1);
        IY.push(`${(50+aY*OY).toFixed(2)} ${(50+aY*gY).toFixed(2)}`)
      }
      return `M${IY.join("L")}Z`
    }
    const Pr = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Ur {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.Ky = !1, this.mountCompass = YY => {
          var rY;
          if (null === (rY = this.stopLayout) || void 0 === rY || rY.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !YY || this.Ky) return;
          const DY = YY.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: YY,
            track: DY,
            label: YY.querySelector(".SkyblockCompassLabel")
          }, DY.replaceChildren();
          for (let AY = 0; AY < 4; AY++) {
            const YY = document.createElement("span");
            YY.className = "SkyblockCompassCardinal", DY.appendChild(YY), this.cardinals.push(YY)
          }
          const FY = (0, pr.c)(Pr, [YY], this.layout);
          this.stopLayout = () => {
            FY(), DY.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = YY => {
          this.terrain = this.Ky ? null : YY, this.render(this.frame)
        }, this.mountMinimapSearchArea = YY => {
          this.mountSearchArea("minimap", YY)
        }, this.mountMapSearchArea = YY => {
          this.mountSearchArea("map", YY)
        }, this.mountPlayer = YY => {
          this.player = this.Ky ? null : YY, this.render(this.frame)
        }, this.mountWaypoint = YY => {
          var rY, DY;
          if (null === (rY = this.stopWaypoint) || void 0 === rY || rY.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !YY || this.Ky) return;
          const FY = YY.querySelector(".SkyblockQuestWaypointMarker");
          FY.replaceChildren(qr("quest")), this.markerIcon = "quest", this.waypoint = {
            root: YY,
            marker: FY,
            clip: YY.querySelector(".SkyblockQuestWaypointTextClip"),
            text: YY.querySelector(".SkyblockQuestWaypointText"),
            label: YY.querySelector(".SkyblockQuestWaypointLabel"),
            distance: YY.querySelector(".SkyblockQuestWaypointDistance"),
            hint: YY.querySelector(".SkyblockQuestWaypointHint")
          };
          const AY = () => {
              this.waypointMarkerSize = {
                width: FY.offsetWidth,
                height: FY.offsetHeight
              }, this.waypointInset = {
                x: FY.offsetWidth / 2 + 8,
                top: FY.offsetHeight + 8,
                bottom: 8
              }
            },
            IY = new ResizeObserver((() => {
              AY(), this.render(this.frame)
            }));
          IY.observe(FY, {
            box: "border-box"
          });
          const RY = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", RY), null === (DY = window.visualViewport) || void 0 === DY || DY.addEventListener("resize", RY), this.stopWaypoint = () => {
            var YY;
            IY.disconnect(), window.removeEventListener("resize", RY), null === (YY = window.visualViewport) || void 0 === YY || YY.removeEventListener("resize", RY)
          }, RY(), AY(), this.render(this.frame)
        }, this.mountWaypointOrigin = YY => {
          var rY;
          if (null === (rY = this.stopWaypointOrigin) || void 0 === rY || rY.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = YY && !this.Ky ? Number(YY.dataset.notificationToken) : null, YY && !this.Ky && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const rY = {
              nameKey: YY.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = rY;
            const DY = () => {
                const DY = YY.getBoundingClientRect();
                rY.x = (DY.left + DY.width / 2) / window.innerWidth * 100, rY.y = (DY.top + DY.height / 2) / window.innerHeight * 100
              },
              FY = new ResizeObserver(DY);
            FY.observe(YY.parentElement), FY.observe(YY), window.addEventListener("resize", DY), this.stopWaypointOrigin = () => {
              FY.disconnect(), window.removeEventListener("resize", DY)
            }, DY()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const YY = this.compass.root,
            rY = getComputedStyle(YY),
            DY = getComputedStyle(document.documentElement),
            FY = parseFloat(DY.fontSize),
            AY = parseFloat(rY.getPropertyValue("--compass-icon-size")) * FY,
            IY = "1" === rY.getPropertyValue("--compass-fit-top").trim(),
            RY = IY ? 1 : 8,
            OY = Array.from(document.querySelectorAll(Pr), (YY => {
              var rY;
              return (null !== (rY = YY.querySelector(".MiddleTextTop")) && void 0 !== rY ? rY : YY).getBoundingClientRect()
            })).filter((YY => YY.width > 0 && YY.height > 0));
          let gY = (parseFloat(DY.getPropertyValue("--notchTop")) || 0) + RY,
            aY = "";
          if (IY) {
            const rY = window.innerWidth / 2,
              DY = YY.getBoundingClientRect().height,
              IY = [gY, ...OY.map((YY => Math.max(gY, YY.bottom + RY)))].sort(((YY, rY) => YY - rY));
            for (const YY of IY) {
              let IY = rY - 8;
              for (const FY of OY) FY.bottom + RY <= YY || FY.top >= YY + DY + RY || (IY = Math.min(IY, FY.right <= rY ? rY - FY.right - 8 : FY.left - rY - 8));
              const vY = 2 * IY - AY;
              if (vY >= 16 * FY) {
                aY = `${vY}px`, gY = YY;
                break
              }
            }
          }
          YY.style.maxWidth !== aY && (YY.style.maxWidth = aY);
          const vY = YY.getBoundingClientRect(),
            uY = this.compassSize.trackHalfWidth;
          if (vY.width > 0) {
            const YY = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: YY.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * AY / YY.width
          }
          if (!aY)
            for (const sY of OY) sY.right > vY.left - 8 && sY.left < vY.right + 8 && (gY = Math.max(gY, sY.bottom + RY));
          YY.style.top = `${gY}px`, this.compassSize.trackHalfWidth !== uY && this.render(this.frame)
        }
      }
      mountSearchArea(YY, rY) {
        this.searchAreas[YY] = this.Ky ? null : rY, this.render(this.frame)
      }
      render(YY) {
        if (this.Ky) return;
        if (this.frame = YY, this.compass && (Lr(this.compass.root, !YY), YY)) {
          const rY = this.compassSize.trackHalfWidth / 50;
          YY.compass.cardinals.forEach(((YY, DY) => {
            const FY = this.cardinals[DY];
            FY.textContent !== YY.name && (FY.textContent = YY.name), Lr(FY, YY.hidden), FY.style.translate = YY.left * rY + "px"
          }));
          const DY = new Set;
          YY.compass.markers.forEach(((FY, AY) => {
            var IY;
            DY.add(FY.id);
            let RY = this.markers.get(FY.id);
            RY || (RY = document.createElement("span"), RY.className = "SkyblockCompassMarker", this.markers.set(FY.id, RY), this.compass.track.appendChild(RY)), RY.dataset.icon !== FY.icon && (RY.dataset.icon = FY.icon, RY.replaceChildren(qr(FY.icon))), RY.style.color = null !== (IY = FY.colour) && void 0 !== IY ? IY : "", RY.style.translate = FY.left * rY + "px", RY.style.zIndex = String(YY.compass.markers.length - AY), RY.title !== FY.name && (RY.title = FY.name)
          }));
          for (const [YY, FY] of this.markers) DY.has(YY) || (FY.remove(), this.markers.delete(YY));
          this.compass.label.textContent !== YY.compass.label && (this.compass.label.textContent = YY.compass.label)
        }
        this.terrain && (Lr(this.terrain, !(null !== YY && void 0 !== YY && YY.minimap)), null !== YY && void 0 !== YY && YY.minimap && (this.terrain.style.transform = YY.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", YY.minimap.iconRotation)));
        const rY = null === YY || void 0 === YY ? void 0 : YY.searchArea;
        for (const DY of [this.searchAreas.minimap, this.searchAreas.map])
          if (DY && (Lr(DY, !rY), rY)) {
            if (this.searchAreaPath.seed !== rY.shapeSeed && (this.searchAreaPath = {
                seed: rY.shapeSeed,
                d: nr(xr(rY.shapeSeed))
              }), DY.dataset.shapeSeed !== rY.shapeSeed) {
              DY.dataset.shapeSeed = rY.shapeSeed;
              for (const YY of DY.querySelectorAll("path")) YY.setAttribute("d", this.searchAreaPath.d)
            }
            DY.style.left = `${rY.left}%`, DY.style.top = `${rY.top}%`, DY.style.width = `${rY.width}%`, DY.style.height = `${rY.height}%`
          } if (this.player && (Lr(this.player, !(null !== YY && void 0 !== YY && YY.player) || YY.player.hidden), null !== YY && void 0 !== YY && YY.player && (this.player.style.left = `${YY.player.left}%`, this.player.style.top = `${YY.player.top}%`, this.player.style.setProperty("--map-player-rotation", YY.player.rotation))), this.waypoint) {
          const {
            root: rY,
            marker: DY,
            clip: FY,
            text: AY,
            label: IY,
            distance: RY,
            hint: OY
          } = this.waypoint, gY = !(null !== YY && void 0 !== YY && YY.waypoint) || null !== YY.waypoint.popupToken && YY.waypoint.popupToken !== this.waypointOriginToken;
          Lr(rY, gY);
          let aY = 1;
          const vY = this.waypointLaunch;
          if (!gY && vY && YY.waypoint.nameKey === vY.nameKey) {
            const YY = performance.now();
            vY.startedAt ??= YY, aY = Math.min(1, Math.max(0, (YY - vY.startedAt - 450) / 1e3)), DY.style.opacity = String(Math.min(1, (YY - vY.startedAt) / 150)), 1 === aY && (this.waypointLaunch = null)
          } else DY.style.opacity = "", vY && null !== vY.startedAt && (this.waypointLaunch = null);
          if (rY.classList.toggle("Launching", aY < 1), null !== YY && void 0 !== YY && YY.waypoint) {
            const rY = this.waypointInset,
              gY = "quest_talk" === YY.waypoint.markerIcon ? function(YY, rY, DY) {
                if (!YY.text || null === YY.blockHeight || 0 === YY.nearness) return YY;
                const FY = YY.blockHeight / 100 * DY.height,
                  AY = -YY.nearness * (tr * FY + rY.width / 2),
                  IY = YY.nearness * (YD * FY + rY.height / 2);
                return {
                  ...YY,
                  text: {
                    x: YY.text.x + AY / DY.width * 100,
                    y: YY.text.y + IY / DY.height * 100
                  }
                }
              }(YY.waypoint, this.waypointMarkerSize, this.viewport) : YY.waypoint,
              uY = (0, Tr.b)(gY, rY, this.viewport),
              sY = aY * aY * (3 - 2 * aY),
              iY = aY < 1 ? vY.x + (uY.x - vY.x) * sY : uY.x,
              yY = aY < 1 ? vY.y + (uY.y - vY.y) * sY : uY.y;
            DY.style.translate = `${iY}vw ${yY}vh`, FY.style.clipPath = `inset(${rY.top}px ${rY.x}px ${rY.bottom}px)`, Lr(AY, aY < 1 || !YY.waypoint.text), AY.style.opacity = String(1 - YY.waypoint.nearness), YY.waypoint.text && (AY.style.translate = `${YY.waypoint.text.x}vw ${YY.waypoint.text.y}vh`), IY.textContent !== YY.waypoint.name && (IY.textContent = YY.waypoint.name), this.markerIcon !== YY.waypoint.markerIcon && (this.markerIcon = YY.waypoint.markerIcon, DY.replaceChildren(qr(this.markerIcon))), RY.textContent !== YY.waypoint.distance && (RY.textContent = YY.waypoint.distance), Lr(OY, null === YY.waypoint.hint), null !== YY.waypoint.hint && OY.textContent !== YY.waypoint.hint && (OY.textContent = YY.waypoint.hint)
          }
        }
      }
      dispose() {
        var YY, rY;
        this.mountWaypointOrigin(null), this.render(null), null === (YY = this.stopLayout) || void 0 === YY || YY.call(this), this.stopLayout = null, null === (rY = this.stopWaypoint) || void 0 === rY || rY.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.Ky = !0
      }
    }

    function Lr(YY, rY) {
      YY.hidden !== rY && (YY.hidden = rY)
    }
    const tr = .55,
      YD = .6;
    const rD = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class DD {
      constructor(YY, rY, DY, FY) {
        this.map = YY, this.quests = rY, this.compass = DY, this.display = new Ur, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.Ky = !1, this.snapshot = null, this.texts = new Map, this.translate = FY
      }
      setTranslator(YY, rY) {
        this.translate = YY, this.locale = rY, this.metresFormat = new Intl.NumberFormat(rY), this.texts.clear()
      }
      translateCached(YY, rY) {
        const DY = void 0 === rY ? YY : `${YY} ${rY}`;
        let FY = this.texts.get(DY);
        return void 0 === FY && (this.texts.size >= 500 && this.texts.clear(), FY = this.translate(YY, void 0 === rY ? void 0 : {
          distance: rY
        }), this.texts.set(DY, FY)), FY
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(YY, rY, DY) {
        if (this.Ky) return;
        if (!YY) return this.snapshot = null, void this.display.render(null);
        const FY = this.map.getSnapshot().map,
          gY = DY.cameraHeading,
          aY = {
            ...this.display.compassSize,
            tanHalfFovX: DY.tanHalfFovX,
            pitch: DY.cameraPitch
          },
          vY = [];
        if (FY)
          for (const AY of this.compass.frame(YY, gY, rY)) {
            const YY = QY(AY.offset, aY);
            null !== YY && vY.push({
              ...AY,
              left: YY
            })
          }
        const uY = function(YY, rY) {
            const DY = [],
              FY = YY => "quest" === YY.kind ? YY.distance - 1 : YY.distance,
              AY = [...YY].sort(((YY, rY) => FY(YY) - FY(rY) || YY.id.localeCompare(rY.id)));
            for (const IY of AY) {
              let YY = !1;
              if ("quest" !== IY.kind)
                for (const FY of DY)
                  if (Math.abs(FY.left - IY.left) < rY) {
                    YY = !0;
                    break
                  } YY || DY.push(IY)
            }
            return DY
          }(vY, this.display.compassSpacing),
          sY = function(YY) {
            let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              DY = null;
            for (const FY of YY) Math.abs(FY.offset) <= rY && (!DY || FY.distance < DY.distance || FY.distance === DY.distance && Math.abs(FY.offset) < Math.abs(DY.offset)) && (DY = FY);
            return DY
          }(uY),
          iY = YY => {
            var rY;
            return null !== (rY = YY.displayName) && void 0 !== rY ? rY : this.translateCached(YY.nameKey)
          },
          yY = {
            compass: {
              markers: uY.map((YY => ({
                id: YY.id,
                icon: YY.icon,
                colour: YY.colour,
                name: iY(YY),
                left: YY.left
              }))),
              cardinals: RY.map((YY => {
                let {
                  name: rY,
                  bearing: DY
                } = YY;
                const FY = QY(AY.c.computeShortestRotation(gY, DY), aY);
                return {
                  name: rY,
                  left: null !== FY && void 0 !== FY ? FY : 0,
                  hidden: null === FY
                }
              })),
              label: sY ? `${iY(sY)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",lY(sY.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== FY && void 0 !== FY && FY.background) {
          const rY = YY[0] - FY.mapOrigin[0],
            DY = YY[2] - FY.mapOrigin[2],
            {
              rotation: AY,
              transform: RY
            } = function(YY, rY, DY, FY) {
              const [AY, RY] = OY(YY, rY, FY), gY = IY - DY;
              return {
                rotation: gY,
                transform: `rotate(${gY}rad) translate(-${AY}%, -${RY}%)`
              }
            }(rY, DY, gY, FY.background.bounds);
          yY.minimap = {
            transform: RY,
            iconRotation: -AY + "rad"
          };
          const [aY, vY] = OY(rY, DY, FY.background.bounds);
          yY.player = {
            left: aY,
            top: vY,
            hidden: aY < 0 || vY < 0 || aY > 100 || vY > 100,
            rotation: -AY + "rad"
          }
        }
        const {
          waypoint: oY
        } = this.quests.getSnapshot();
        if ("search" === (null === oY || void 0 === oY ? void 0 : oY.questMarkerIcon) && null !== FY && void 0 !== FY && FY.background) {
          const {
            bounds: YY
          } = FY.background, [rY, DY] = OY(oY.position[0] - FY.mapOrigin[0], oY.position[2] - FY.mapOrigin[2], YY);
          yY.searchArea = {
            left: rY,
            top: DY,
            width: 6400 / (YY.mapMaxX - YY.mapMinX),
            height: 6400 / (YY.mapMaxZ - YY.mapMinZ),
            shapeSeed: oY.nameKey
          }
        }
        const WY = this.quests.getNotificationSnapshot(),
          EY = "completion" === (null === WY || void 0 === WY ? void 0 : WY.phase) && !lr(WY.kind);
        if (oY && !EY) {
          const rY = Math.hypot(...oY.position.map(((rY, DY) => rY - YY[DY]))),
            FY = Math.round(rY),
            AY = "talk" === oY.questMarkerIcon ? Math.min(1, Math.max(0, (10 - rY) / 5)) : 0,
            IY = DY.projectWorldPosToViewport(oY.position),
            RY = IY && DY.projectWorldPosToViewport([oY.position[0], oY.position[1] - 1, oY.position[2]]);
          yY.waypoint = {
            ...DY.projectWorldPosToScreenPos(oY.position),
            text: IY,
            nearness: AY * AY * (3 - 2 * AY),
            blockHeight: IY && RY ? RY.y - IY.y : null,
            name: this.translateCached(oY.nameKey),
            nameKey: oY.nameKey,
            markerIcon: oY.questMarkerIcon ? rD[oY.questMarkerIcon] : "quest",
            popupToken: (null === WY || void 0 === WY ? void 0 : WY.waypointNameKey) === oY.nameKey ? WY.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(FY)),
            hint: "search" === oY.questMarkerIcon && Math.hypot(oY.position[0] - YY[0], oY.position[2] - YY[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = yY, this.display.render(yY)
      }
      dispose() {
        this.Ky = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const FD = "skyblockSkillsView";
    class AD extends uY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          DY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YY => YY,
          FY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          AY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : YY => YY;
        super(YY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = rY, this.translate = DY, this.locale = FY, this.itemName = AY, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = YY => {
          this.selected = YY, this.emit()
        }
      }
      setTranslator(YY, rY, DY) {
        this.translate = YY, this.locale = rY, this.itemName = DY, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(YY) {
        let rY = this.skillText.get(YY);
        return rY || (rY = {
          label: this.translate(`skyblockGame:${YY}`),
          description: this.translate(`skyblockGame:${YY}Description`)
        }, this.skillText.set(YY, rY)), rY
      }
      sources(YY) {
        if ("mining" === YY || "fishing" === YY) return this.buildSources(YY);
        let rY = this.sourceText.get(YY);
        return rY || (rY = this.buildSources(YY), this.sourceText.set(YY, rY)), rY
      }
      buildSources(YY) {
        const rY = this.translate;
        return "exploration" === YY ? [rY("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), rY("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === YY ? [rY("skyblockGame:logSource", {
          xp: this.number(ur["Maple Log"])
        })] : "combat" === YY ? [rY("skyblockGame:creatureKillSource"), rY("skyblockGame:noEnvironmentalXp")] : "farming" === YY ? [rY("skyblockGame:cropSource", {
          xp: this.number(yr["Wheat|FreshlyGrown"])
        }), rY("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), rY("skyblockGame:noYoungCropXp")] : Object.entries("mining" === YY ? ir : Qr).map((YY => {
          let [DY, FY] = YY;
          return rY("skyblockGame:itemXpSource", {
            item: this.itemName(DY),
            xp: this.number(FY)
          })
        }))
      }
      number(YY) {
        return YY.toLocaleString(this.locale)
      }
      benefit(YY, rY) {
        const DY = Ar(YY, rY);
        return this.translate(DY.translationKey, {
          bonus: this.number(DY.percent)
        })
      }
      Cy(YY) {
        if (!this.Ky) {
          if ("snapshot" === YY.kind) this.progress = YY.progress, this.pending.clear(), this.recent = null;
          else if ("award" === YY.kind && this.progress) {
            const {
              award: rY
            } = YY;
            this.progress = {
              ...this.progress,
              [rY.skill]: rY.after
            };
            for (const [YY, FY] of this.pending) FY.skill === rY.skill && this.pending.delete(YY);
            const DY = rY.after.level > rY.before.level;
            this.recordGain(rY.skill, rY.amount, DY ? ++this.nextLevelUpToken : null), DY && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: rY.skill,
              beforeLevel: rY.before.level,
              level: rY.after.level
            })
          } else {
            if ("rejectBlock" === YY.kind) return void this.rejectBlock(YY.position);
            if ("open" === YY.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(YY, rY, DY) {
        if (!this.progress || this.Ky || DY) return;
        const FY = function(YY, rY) {
          const DY = YY.split("|")[0];
          return "Air" === rY || rY === `Barkless ${YY}` ? Object.hasOwn(ur, DY) ? {
            skill: "foraging",
            amount: ur[DY]
          } : "Air" !== rY ? null : Object.hasOwn(ir, YY) ? {
            skill: "mining",
            amount: ir[YY]
          } : gr(YY) ? {
            skill: "farming",
            amount: 10
          } : vr(YY) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(yr, YY) ? {
            skill: "farming",
            amount: yr[YY]
          } : Object.hasOwn(hY, YY) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(rY, "Air");
        if (!FY) return;
        const AY = YY.join(",");
        if (this.pending.has(AY)) return;
        const IY = this.predictedProgress(FY.skill).totalXp + FY.amount;
        Number.isSafeInteger(IY) && (this.pending.set(AY, {
          ...FY,
          expires: this.now() + 2e3
        }), this.recordGain(FY.skill, 0), this.emit())
      }
      rejectBlock(YY) {
        this.pending.delete(YY.join(",")) && this.emit()
      }
      Zu() {
        if (this.Ky) return;
        let YY = !1;
        for (const [rY, DY] of this.pending) DY.expires <= this.now() && (this.pending.delete(rY), YY = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, YY = !0), YY && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(YY, rY) {
        var DY, FY;
        let AY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const IY = (null === (DY = this.recent) || void 0 === DY ? void 0 : DY.skill) === YY && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          RY = (null === (FY = this.recent) || void 0 === FY ? void 0 : FY.skill) === YY && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: YY,
          confirmed: IY + rY,
          expires: this.now() + 3e3,
          levelUpToken: null !== AY && void 0 !== AY ? AY : RY
        }
      }
      pendingXp(YY) {
        let rY = 0;
        for (const DY of this.pending.values()) DY.skill === YY && (rY += DY.amount);
        return rY
      }
      predictedProgress(YY) {
        const rY = this.progress[YY],
          DY = this.pendingXp(YY);
        return DY ? Rr(rY.totalXp + DY, YY) : rY
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var YY, rY, DY;
        const FY = this.progress ? xY.map((YY => {
            const rY = this.predictedProgress(YY);
            return {
              ...this.text(YY),
              icon: or[YY],
              benefit: this.benefit(YY, rY.level),
              sources: this.sources(YY),
              id: YY,
              selected: YY === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(rY.level)
              }),
              xp: null === rY.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(rY.xpIntoLevel),
                target: this.number(rY.xpForNextLevel)
              }),
              percent: null === rY.xpForNextLevel ? 100 : Math.min(100, rY.xpIntoLevel / rY.xpForNextLevel * 100)
            }
          })) : [],
          AY = FY.find((YY => {
            var rY;
            return YY.id === (null === (rY = this.recent) || void 0 === rY ? void 0 : rY.skill)
          })),
          IY = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: FY,
          detail: null !== (YY = FY.find((YY => YY.selected))) && void 0 !== YY ? YY : null,
          overallLevel: this.progress ? xY.reduce(((YY, rY) => YY + this.predictedProgress(rY).level), 0) : null,
          hud: AY && IY > 0 ? {
            skill: AY,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(IY)
            }),
            levelUpToken: null !== (rY = null === (DY = this.recent) || void 0 === DY ? void 0 : DY.levelUpToken) && void 0 !== rY ? rY : null,
            colour: Er(AY.id)
          } : null
        }
      }
    }
    const ID = Math.max(1600, 600, 950) + 400,
      RD = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      OD = "skyblockQuestsView",
      gD = "skyblockQuestNotificationView";
    class aD extends uY {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          RY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(YY, FY, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = rY, this.translate = DY, this.now = AY, this.locale = IY, this.publishNotification = RY, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var YY, rY;
          this.selected = null !== (YY = null === (rY = this.authoritative) || void 0 === rY ? void 0 : rY.trackedQuestId) && void 0 !== YY ? YY : null, this.show()
        }, this.select = YY => {
          this.selected = YY, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const YY = this.snapshot.detail;
          !this.Ky && null !== YY && void 0 !== YY && YY.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(YY.id), this.emit())
        }, this.viewDialogue = () => {
          const YY = this.snapshot.detail;
          var rY;
          YY && (null === (rY = this.onViewDialogue) || void 0 === rY || rY.call(this, YY.id))
        }, this.notifications = new Vr(AY, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var YY, rY;
        return null !== (YY = null === (rY = this.authoritative) || void 0 === rY ? void 0 : rY.trackedQuestId) && void 0 !== YY ? YY : null
      }
      notify(YY) {
        !this.Ky && this.notifications.enqueue(YY) && this.emitNotification()
      }
      setNotificationsHeld(YY) {
        (this.notifications.setHeld(YY) || YY) && this.emitNotification()
      }
      Zu() {
        var YY, rY;
        if (this.Ky) return;
        this.notifications.Zu() && this.emitNotification();
        let DY = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, DY = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, DY = !0);
        const FY = vD(this.authoritative);
        null !== FY && void 0 !== FY && null !== (YY = FY.questClock) && void 0 !== YY && YY.running && this.clockText(FY) !== (null === (rY = this.snapshot.tracked) || void 0 === rY ? void 0 : rY.clock) && (DY = !0), DY && this.emit()
      }
      setTranslator(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = YY, this.locale = rY, this.emitNotification(), this.emit()
      }
      Cy(YY) {
        if (!this.Ky)
          if ("completion" === YY.kind) this.notify(YY.questCompletion);
          else if ("landmark" === YY.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: YY.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === YY.kind) {
          var rY, DY, FY;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: YY.npcNoteTitleKey,
            textKey: YY.npcNoteTextKey,
            params: null !== (rY = YY.npcNoteParams) && void 0 !== rY ? rY : {},
            nameKeys: null !== (DY = YY.npcNoteNameKeys) && void 0 !== DY ? DY : {},
            iconItem: null !== (FY = YY.npcNoteIconItem) && void 0 !== FY ? FY : null
          })
        } else if ("open" === YY.kind) this.show();
        else if ("guidance" === YY.kind) this.waypoint = YY.waypoint, this.compassTarget = YY.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === YY.kind) {
          this.authoritative = YY.snapshot, this.notifications.Zu() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const rY = this.trackedStepPulse;
          this.updateTrackedStepPulse(YY.snapshot), this.emit(), this.trackedStepPulse > rY && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.Ky || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var YY;
        return null !== (YY = this.translateWithIcons) && void 0 !== YY ? YY : this.translate
      }
      clockText(YY) {
        const rY = YY.questClock;
        if (!rY) return null;
        const DY = rY.elapsedMs + (rY.running ? this.now() - this.receivedAt : 0);
        return void 0 === rY.countdownFromMs ? (0, zY.q)(DY, !1) : (0, zY.q)(1e3 * Math.ceil(Math.max(0, rY.countdownFromMs - DY) / 1e3), !1)
      }
      updateTrackedStepPulse(YY) {
        var rY, DY, FY;
        const AY = vD(YY);
        if (!AY) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const IY = YY => AY.subquests.filter((rY => YY(rY.status))).map((YY => YY.id)),
          RY = IY((YY => "completed" === YY || "skipped" === YY)),
          OY = IY((YY => "locked" !== YY)),
          gY = (null === (rY = this.trackedSteps) || void 0 === rY ? void 0 : rY.questId) === AY.id && AY.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (gY) {
          const YY = RY.filter((YY => !gY.finished.has(YY))),
            rY = IY((YY => "active" === YY || "ready" === YY)).filter((YY => !gY.unlocked.has(YY)));
          YY.length > 0 && this.trackedStepPulse++, (YY.length > 0 || rY.length > 0) && (this.trackedChange = {
            finished: new Set(YY),
            unlocked: new Set(rY),
            expiresAt: this.now() + ID
          })
        } else {
          var aY;
          this.trackedStepPulse = (null === (aY = this.trackedSteps) || void 0 === aY ? void 0 : aY.questId) === AY.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: AY.id,
          progress: AY.progress,
          finished: new Set([...null !== (DY = null === gY || void 0 === gY ? void 0 : gY.finished) && void 0 !== DY ? DY : [], ...RY]),
          unlocked: new Set([...null !== (FY = null === gY || void 0 === gY ? void 0 : gY.unlocked) && void 0 !== FY ? FY : [], ...OY])
        }
      }
      entry(YY, rY) {
        var DY, FY;
        const AY = YY.id === (null === (DY = this.authoritative) || void 0 === DY ? void 0 : DY.trackedQuestId),
          IY = this.now() < this.trackAvailableAt,
          RY = this.questTextTranslator(),
          OY = YY.subquests.map((rY => {
            var DY, FY, IY, OY, gY, aY;
            const vY = null !== (DY = rY.handInNpcName) && void 0 !== DY ? DY : YY.giverName,
              uY = this.translate("skyblockGame:progress", {
                current: rY.progress.toLocaleString(this.locale),
                target: rY.target.toLocaleString(this.locale)
              }),
              sY = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: vY ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [rY.status],
              iY = "active" === rY.status || "ready" === rY.status;
            return {
              id: rY.id,
              name: mr(RY, rY.nameKey, rY.nameParams),
              description: mr(RY, rY.descriptionKey, rY.descriptionParams),
              progress: uY,
              status: rY.status,
              statusLabel: sY ? this.translate(sY, {
                npc: vY
              }) : uY,
              iconItem: iY && null !== (FY = rY.questIconItem) && void 0 !== FY ? FY : null,
              barPercent: "active" === rY.status && rY.showsProgressBar ? Math.min(100, 100 * rY.progress / rY.target) : null,
              justFinished: AY && null !== (IY = null === (OY = this.trackedChange) || void 0 === OY ? void 0 : OY.finished.has(rY.id)) && void 0 !== IY && IY,
              justUnlocked: AY && null !== (gY = null === (aY = this.trackedChange) || void 0 === aY ? void 0 : aY.unlocked.has(rY.id)) && void 0 !== gY && gY
            }
          }));
        return {
          id: YY.id,
          name: mr(RY, YY.nameKey, YY.nameParams),
          description: mr(RY, YY.descriptionKey, YY.descriptionParams),
          progress: rY ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: YY.progress.toLocaleString(this.locale),
            target: YY.target.toLocaleString(this.locale)
          }),
          completed: rY,
          tracked: AY,
          selected: YY.id === this.selected,
          canTrack: !rY && !AY && !IY,
          trackLabel: this.translate(AY ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : IY ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== YY.id,
          subquests: OY,
          focusStep: null !== (FY = OY.find((YY => null !== YY.barPercent))) && void 0 !== FY ? FY : null,
          clock: this.clockText(YY)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var YY, rY, DY, FY, AY, IY, RY, OY, gY, aY;
        const vY = [...null !== (YY = null === (rY = this.authoritative) || void 0 === rY ? void 0 : rY.active) && void 0 !== YY ? YY : [], ...null !== (DY = null === (FY = this.authoritative) || void 0 === FY ? void 0 : FY.completed) && void 0 !== DY ? DY : []];
        var uY, sY, iY, yY;
        vY.some((YY => YY.id === this.selected)) || (this.selected = null !== (uY = null !== (sY = null === (iY = this.authoritative) || void 0 === iY ? void 0 : iY.trackedQuestId) && void 0 !== sY ? sY : null === (yY = vY[0]) || void 0 === yY ? void 0 : yY.id) && void 0 !== uY ? uY : null);
        const QY = null !== (AY = null === (IY = this.authoritative) || void 0 === IY ? void 0 : IY.active.map((YY => this.entry(YY, !1)))) && void 0 !== AY ? AY : [];
        QY.sort(((YY, rY) => Number(rY.tracked) - Number(YY.tracked)));
        const oY = null !== (RY = null === (OY = this.authoritative) || void 0 === OY ? void 0 : OY.completed.map((YY => this.entry(YY, !0)))) && void 0 !== RY ? RY : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: QY,
          completed: oY,
          completedExpanded: this.completedExpanded,
          detail: null !== (gY = [...QY, ...oY].find((YY => YY.selected))) && void 0 !== gY ? gY : null,
          tracked: null !== (aY = QY.find((YY => YY.tracked))) && void 0 !== aY ? aY : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function vD(YY) {
      var rY;
      return null !== (rY = null === YY || void 0 === YY ? void 0 : YY.active.find((rY => rY.id === YY.trackedQuestId))) && void 0 !== rY ? rY : null
    }
    const uD = "skyblockDungeonsView";
    class sD extends uY {
      constructor(YY, rY) {
        let DY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          FY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(YY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = rY, this.locale = DY, this.requestEnter = FY, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = YY => {
          this.selected = YY, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const YY = this.pickerEntry(),
            rY = null === YY || void 0 === YY ? void 0 : YY.difficulties[this.pageIndex];
          void 0 !== rY && null !== rY.unlockedBoss && (this.close(), this.requestEnter(YY.id, rY.difficulty))
        }
      }
      setTranslator(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = YY, this.locale = rY, this.emit()
      }
      Cy(YY) {
        var rY, DY;
        if (!this.Ky) return "open" === YY.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== YY.kind ? "snapshot" === YY.kind && (this.authoritative = YY.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (rY = null === (DY = this.pickerEntry()) || void 0 === DY ? void 0 : DY.difficulties.length) && void 0 !== rY ? rY : 1) - 1)), null === YY.snapshot && this.open ? this.close() : this.emit()) : this.choose(YY.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(YY) {
        var rY;
        const DY = null === (rY = this.authoritative) || void 0 === rY ? void 0 : rY.dungeons.find((rY => rY.id === YY));
        void 0 !== DY ? this.open && this.pickerDungeonId === YY || (this.pickerDungeonId = YY, this.pageIndex = Math.max(0, DY.difficulties.findLastIndex((YY => null !== YY.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${YY}`)
      }
      turnTo(YY) {
        var rY, DY;
        const FY = null !== (rY = null === (DY = this.pickerEntry()) || void 0 === DY ? void 0 : DY.difficulties.length) && void 0 !== rY ? rY : 0;
        YY < 0 || YY >= FY || YY === this.pageIndex || (this.pageIndex = YY, this.emit())
      }
      pickerEntry() {
        var YY, rY;
        return null !== (YY = null === (rY = this.authoritative) || void 0 === rY ? void 0 : rY.dungeons.find((YY => YY.id === this.pickerDungeonId))) && void 0 !== YY ? YY : null
      }
      difficulty(YY) {
        const rY = YY.completions > 0,
          DY = null === YY.bestMs ? null : (0, zY.q)(YY.bestMs);
        return {
          difficulty: YY.difficulty,
          label: this.translate(zY.c[YY.difficulty]),
          colour: zY.g[YY.difficulty],
          beaten: rY,
          bestTime: DY,
          completions: YY.completions,
          summary: rY ? [null === DY ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: DY
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: YY.completions.toLocaleString(this.locale)
          })].filter((YY => null !== YY)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(YY) {
        const rY = YY.difficulties.map((YY => this.difficulty(YY))),
          DY = rY.filter((YY => YY.beaten)).length;
        return {
          id: YY.id,
          name: this.translate(YY.nameKey),
          selected: YY.id === this.selected,
          beatenSummary: `${DY} / ${rY.length}`,
          difficulties: rY
        }
      }
      picker() {
        const YY = this.pickerEntry();
        if (null === YY || 0 === YY.difficulties.length) return null;
        const rY = YY.difficulties.map(((rY, DY) => {
          var FY, AY, IY, RY;
          const OY = rY.unlockedBoss,
            gY = null === OY ? this.lockedHint(YY, DY) : null;
          return {
            ...this.difficulty(rY),
            unlocked: null !== OY,
            bossName: null === OY ? null : this.translate(OY.bossNameKey),
            bossMobType: null !== (FY = null === OY || void 0 === OY ? void 0 : OY.bossMobType) && void 0 !== FY ? FY : null,
            bossMobVariation: null !== (AY = null === OY || void 0 === OY ? void 0 : OY.bossMobVariation) && void 0 !== AY ? AY : null,
            lockedHint: null !== (IY = null === gY || void 0 === gY ? void 0 : gY.text) && void 0 !== IY ? IY : null,
            lockedHintHighlight: null !== (RY = null === gY || void 0 === gY ? void 0 : gY.highlight) && void 0 !== RY ? RY : null,
            current: DY === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(YY.nameKey),
          pages: rY,
          page: rY[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < rY.length - 1
        }
      }
      lockedHint(YY, rY) {
        var DY, FY, AY;
        if (0 === rY && "number" === typeof YY.combatLevelLock) {
          const rY = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: YY.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: rY,
            colour: Er("combat"),
            icon: or.combat
          })
        }
        const IY = null !== (DY = null === (FY = this.authoritative) || void 0 === FY ? void 0 : FY.dungeons) && void 0 !== DY ? DY : [],
          RY = rY > 0 ? YY : null !== (AY = IY[IY.indexOf(YY) - 1]) && void 0 !== AY ? AY : null,
          OY = rY > 0 ? YY.difficulties[rY - 1] : null === RY || void 0 === RY ? void 0 : RY.difficulties[0];
        if (null === RY || void 0 === OY) return null;
        const gY = this.translate(RY.nameKey);
        if (null === OY.unlockedBoss) return RY === YY ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, OY.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: gY
        }, OY.difficulty);
        const aY = this.translate(OY.unlockedBoss.bossNameKey);
        return RY === YY ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: aY
        }, OY.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: aY,
            dungeon: gY
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(YY, rY, DY) {
        return this.hintHighlighting(YY, rY, "difficulty", {
          name: this.translate(zY.c[DY]),
          colour: zY.g[DY],
          icon: null
        })
      }
      hintHighlighting(YY, rY, DY, FY) {
        let {
          name: AY,
          colour: IY,
          icon: RY
        } = FY;
        const OY = this.translate(YY, {
          ...rY,
          [DY]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(YY, {
            ...rY,
            [DY]: AY
          }),
          highlight: 2 === OY.length ? {
            before: OY[0],
            name: AY,
            after: OY[1],
            colour: IY,
            icon: RY
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var YY, rY, DY;
        const FY = null !== (YY = null === (rY = this.authoritative) || void 0 === rY ? void 0 : rY.dungeons) && void 0 !== YY ? YY : [];
        var AY, IY;
        FY.some((YY => YY.id === this.selected)) || (this.selected = null !== (AY = null === (IY = FY[0]) || void 0 === IY ? void 0 : IY.id) && void 0 !== AY ? AY : null);
        const RY = FY.map((YY => this.entry(YY)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: RY,
          detail: null !== (DY = RY.find((YY => YY.selected))) && void 0 !== DY ? DY : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const iD = ["mining", "farming", "foraging", "fishing", "combat"],
      yD = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      QD = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function oD() {
      for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
      return rY.map(((YY, rY) => ({
        amount: YY,
        coins: yD[rY],
        xp: QD[rY]
      })))
    }
    const WD = oD(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      ED = oD(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      mD = oD(50, 100, 250, 500, 1e3, 2500, 5e3),
      VD = oD(25, 50, 100, 250, 500, 1e3),
      SD = oD(10, 25, 50, 100, 250, 500, 1e3),
      lD = oD(1, 5, 10, 25, 50);

    function TD(YY, rY) {
      return {
        id: YY,
        category: "fishing",
        item: rY,
        drops: [rY],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : SD
      }
    }
    const eD = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: ED
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: mD
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: mD
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: VD
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: VD
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: ED
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: WD
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: WD
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: WD
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: mD
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: ED
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: ED
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: ED
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: mD
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: mD
      }, TD("wheatfish", "Wheatfish"), TD("darter", "Darter"), TD("sunset_minnow", "Sunset Minnow"), TD("root_flounder", "Root Flounder"), TD("greenfin_loach", "Greenfin Loach"), TD("red_strongfish", "Red Strongfish"), TD("green_strongfish", "Green Strongfish"), TD("boomerang_fish", "Boomerang Fish"), TD("seahorse", "Seahorse"), TD("spined_stickleback", "Spined Stickleback"), TD("moon_strongfish", "Moon Strongfish"), TD("boulder_bass", "Boulder Bass"), TD("grass_snapper", "Grass Snapper"), TD("crystal_wheatfish", "Crystalized Wheatfish", lD), TD("moonstone_pupfish", "Moonstone Pupfish", lD), TD("reedglass_minnow", "Reedglass Minnow"), TD("mangrove_herring", "Mangrove Herring"), TD("mudline_perch", "Mudline Perch"), TD("coastal_mullet", "Coastal Mullet"), TD("reef_sardine", "Reef Sardine"), TD("root_perch", "Root Perch"), TD("driftwood_catfish", "Driftwood Catfish"), TD("aether_minnow", "Aether Minnow"), TD("needlefish", "Tri-Pointed Needlefish"), TD("threadfin_bream", "Threadfin Bream"), TD("mudbelly_tilapia", "Mudbelly Tilapia"), TD("rotslab_eel", "Rotslab Eel"), TD("polarflash_electron", "Polarflash Electron"), TD("mireback_carp", "Mireback Carp"), TD("blackwater_bream", "Blackwater Bream"), TD("stone_grouper", "Stone Grouper"), TD("shadeback_ray", "Shadeback Ray"), TD("glacial_silverfish", "Glacial Silverfish"), TD("hatchetfish", "Hatchetfish"), TD("moonlit_boomerang", "Moonlit Boomerang Fish"), TD("murkborne_ray", "Murkborne Ray"), TD("bamboo_catfish", "Bamboo Catfish"), TD("mossback_arapaima", "Mossback Arapaima"), TD("murk_stingray", "Murk Stingray"), TD("channel_sawfish", "Channel Sawfish"), TD("boned_sturgeon", "Boned Sturgeon"), TD("oarfish", "Oarfish"), TD("snakehead", "Snakehead", lD), TD("eldertide_leviathan", "Eldertide Leviathan", lD), TD("pithead", "Pithead"), TD("electric_eel", "Electric Eel"), TD("shadow_darter", "Shadow Darter"), TD("abyss_carp", "Abyss Carp"), TD("nomai_moray", "Nomai Moray"), TD("silver_dragonfish", "Silver Dragonfish"), TD("giant_moray", "Giant Moray"), TD("coelacanth", "Coelacanth", lD), TD("frost_herring", "Frost Herring"), TD("permafrost_halibut", "Permafrost Halibut"), TD("glacial_lanternfish", "Glacial Lanternfish"), TD("frozen_grenadier", "Frozen Grenadier"), TD("blackfin_icefish", "Blackfin Icefish"), TD("moonfish", "Moonfish"), TD("alpha_strongfish", "Alpha Moon Strongfish"), TD("deep_lanternfish", "Deepwater Lanternfish", lD), TD("pearlescent_moonfish", "Pearlescent Moonfish", lD), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: ED
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: VD
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: VD
      }],
      ND = (new Map(eD.map((YY => [YY.id, YY]))), new Map),
      BD = new Map;
    for (const Ig of eD) {
      for (const [YY, rY] of Object.entries(null !== (cD = Ig.blocks) && void 0 !== cD ? cD : {})) {
        var cD;
        ND.set(YY, {
          collection: Ig,
          amount: rY
        })
      }
      for (const YY of null !== (KD = Ig.drops) && void 0 !== KD ? KD : []) {
        var KD;
        BD.set(YY, Ig)
      }
    }

    function HD(YY, rY) {
      let DY = 0;
      for (; DY < YY.tiers.length && rY >= YY.tiers[DY].amount;) DY++;
      return DY
    }
    const zD = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function ZD(YY) {
      return zD[YY - 1]
    }
    const CD = "skyblockCollectionsView";
    class fD extends uY {
      constructor(YY, rY) {
        let DY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          FY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : YY => YY;
        super(YY, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = rY, this.locale = DY, this.itemName = FY, this.counts = null, this.category = "mining", this.selected = eD[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = YY => {
          this.category = YY, this.selected = this.inCategory(YY)[0].id, this.emit()
        }, this.select = YY => {
          this.selected = YY, this.emit()
        }
      }
      setTranslator(YY, rY, DY) {
        this.translate = YY, this.locale = rY, this.itemName = DY, this.emit()
      }
      Cy(YY) {
        if (!this.Ky)
          if ("collOpen" !== YY.kind) {
            (YY.collFull || null === this.counts) && (this.counts = new Map);
            for (const [rY, DY] of YY.collCounts) this.counts.set(rY, DY);
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
        var YY;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const rY = this.inCategory(this.category).map((YY => this.collectionView(YY))),
          DY = eD.reduce(((YY, rY) => YY + this.tierOf(rY)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: iD.map((YY => this.categoryView(YY))),
          collections: rY,
          detail: null !== (YY = rY.find((YY => YY.selected))) && void 0 !== YY ? YY : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(DY)
          })
        }
      }
      categoryView(YY) {
        const rY = this.inCategory(YY),
          DY = rY.reduce(((YY, rY) => YY + this.tierOf(rY)), 0),
          FY = rY.reduce(((YY, rY) => YY + rY.tiers.length), 0);
        return {
          id: YY,
          label: this.translate(`skyblockGame:${YY}`),
          icon: or[YY],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(DY),
            target: this.number(FY)
          }),
          selected: YY === this.category
        }
      }
      collectionView(YY) {
        var rY, DY;
        const FY = null !== (rY = this.counts.get(YY.id)) && void 0 !== rY ? rY : 0,
          AY = HD(YY, FY),
          IY = null !== (DY = YY.tiers[AY]) && void 0 !== DY ? DY : null,
          RY = 0 === AY ? 0 : YY.tiers[AY - 1].amount;
        return {
          id: YY.id,
          name: this.itemName(YY.item),
          icon: YY.item,
          selected: YY.id === this.selected,
          locked: 0 === FY,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(FY)
          }),
          tier: 0 === AY ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(AY),
          percent: null === IY ? 100 : Math.min(100, (FY - RY) / (IY.amount - RY) * 100),
          progress: null === IY ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(FY),
            target: this.number(IY.amount)
          }),
          nextReward: null === IY ? null : this.reward(YY, IY.coins, IY.xp)
        }
      }
      reward(YY, rY, DY) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(rY),
          xp: this.number(DY),
          skill: this.translate(`skyblockGame:${YY.category}`)
        })
      }
      tierLabel(YY) {
        return this.translate("skyblockGame:collectionTier", {
          tier: ZD(YY)
        })
      }
      tierOf(YY) {
        var rY;
        return HD(YY, null !== (rY = this.counts.get(YY.id)) && void 0 !== rY ? rY : 0)
      }
      inCategory(YY) {
        return eD.filter((rY => rY.category === YY))
      }
      number(YY) {
        return YY.toLocaleString(this.locale)
      }
    }
    const jD = "skyblockPortalTransitView",
      hD = "skyblockPortalArrival";
    class dD {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.vo = YY, this.storage = rY, this.now = DY, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Cy(YY) {
        const rY = {
          zoneNameKey: YY.transitZoneNameKey,
          variation: YY.transitZoneVariation,
          colour: YY.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(hD, rY), this.show("departure", rY.zoneNameKey, rY.colour, YY.transitDurationMs, YY.transitDurationMs + 1500, (() => {
          this.storage.removeItem(hD)
        }))
      }
      resumeArrival(YY) {
        const rY = this.storage.getItem(hD);
        this.storage.removeItem(hD), null === rY || rY.variation !== YY || this.now() - rY.departedAt > 3e4 || this.show("arrival", rY.zoneNameKey, rY.colour, 3200, 2e4)
      }
      finishArrival(YY) {
        var rY;
        "arrival" === (null === (rY = this.view) || void 0 === rY ? void 0 : rY.phase) && this.view.token === YY && (this.clearTimer(), this.view = null, this.vo(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(YY, rY, DY, FY, AY, IY) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: YY,
          zoneNameKey: rY,
          colour: DY,
          durationMs: FY
        }, this.vo(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.vo(null), null === IY || void 0 === IY || IY()
        }), AY)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const JD = "skyblockDailyRewardView",
      MD = "skyblockDailyRewardCoin";
    class wD {
      constructor(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          gY = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.vo = YY, this.isBusy = rY, this.holdQuestPopups = DY, this.onHeldCoinsChanged = FY, this.onCoinLanded = AY, this.onStarted = IY, this.onFinished = RY, this.onItemLanded = OY, this.now = gY, this.ja = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var YY, rY;
        return null !== (YY = null === (rY = this.playing) || void 0 === rY ? void 0 : rY.view) && void 0 !== YY ? YY : null
      }
      getHeldCoins() {
        var YY, rY;
        let DY = 0;
        for (const FY of this.ja) DY += FY.coins;
        return DY - (null !== (YY = null === (rY = this.playing) || void 0 === rY ? void 0 : rY.released) && void 0 !== YY ? YY : 0)
      }
      Cy(YY) {
        "dailyRewardClaimed" !== YY.kind ? (this.queue.push(YY), this.Zu()) : this.ja.push({
          coins: YY.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Zu() {
        const YY = this.now();
        if (null === this.playing) return this.releaseUnshown(YY), void this.startNext(YY);
        const rY = this.playing,
          DY = YY - rY.startedAt,
          FY = rY.view.flyingCoins,
          AY = function(YY, rY) {
            let DY = 0;
            for (; DY < rY && XD(DY, rY) <= YY;) DY++;
            return DY
          }(DY, FY);
        if (AY !== rY.landed) {
          for (let YY = AY - rY.landed > 2 ? AY - 1 : rY.landed; YY < AY; YY++) this.onCoinLanded(YY, FY);
          rY.landed = AY, rY.released = Math.round(rY.view.coins * AY / FY), this.onHeldCoinsChanged()
        }
        for (; rY.itemsLanded < rY.view.items.length && 2e3 + 160 * rY.itemsLanded + 630 <= DY;) this.onItemLanded(rY.itemsLanded), rY.itemsLanded++;
        DY >= rY.view.durationMs && (this.finish(), this.startNext(YY))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.ja = [], this.vo(null)
      }
      startNext(YY) {
        if (0 === this.queue.length || this.isBusy()) return;
        const rY = this.queue.shift();
        this.token++;
        const DY = {
          token: this.token,
          day: rY.dailyRewardDay,
          coins: rY.dailyRewardCoins,
          items: rY.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: rY.dailyRewardDay === cY ? 24 : 14
        };
        this.playing = {
          view: DY,
          startedAt: YY,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.vo(DY), this.onStarted(DY)
      }
      finish() {
        this.ja.shift(), this.playing = null, this.holdQuestPopups(!1), this.vo(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(YY) {
        if (this.queue.length > 0 || 0 === this.ja.length) return;
        const rY = this.ja.length;
        this.ja = this.ja.filter((rY => YY - rY.receivedAt < 6e4)), this.ja.length !== rY && this.onHeldCoinsChanged()
      }
    }

    function bD(YY, rY) {
      return 450 + 715 * YY / (rY - 1)
    }

    function XD(YY, rY) {
      return bD(YY, rY) + 650
    }
    const qD = "skyblockMailboxView";
    class pD {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.vo = YY, this.isBusy = rY, this.onStarted = DY, this.now = FY, this.waiting = [], this.playing = null, this.token = 0, this.itemName = YY => YY
      }
      getSnapshot() {
        var YY, rY;
        return null !== (YY = null === (rY = this.playing) || void 0 === rY ? void 0 : rY.view) && void 0 !== YY ? YY : null
      }
      setItemName(YY) {
        this.itemName = YY
      }
      Cy(YY) {
        this.waiting.push(...YY.mailLetters), this.Zu()
      }
      Zu() {
        const YY = this.now();
        null !== this.playing && YY - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.vo(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(YY)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.vo(null)
      }
      start(YY) {
        const rY = this.waiting.slice(0, 3);
        this.token++;
        const DY = {
          token: this.token,
          letters: rY.map((YY => this.toView(YY))),
          more: this.waiting.length - rY.length,
          durationMs: 4500 + 700 * rY.length
        };
        this.waiting = [], this.playing = {
          view: DY,
          startedAt: YY
        }, this.vo(DY), this.onStarted(DY)
      }
      toView(YY) {
        return {
          coins: YY.mailCoins,
          items: YY.mailItems.map((YY => {
            var rY;
            return {
              itemName: YY.mailItemName,
              amount: YY.mailItemAmount,
              label: null !== (rY = YY.mailItemLabel) && void 0 !== rY ? rY : this.itemName(YY.mailItemName)
            }
          })),
          reasonKey: YY.mailReasonKey,
          reasonParams: YY.mailReasonParams
        }
      }
    }
    const kD = "skyblockQuestGraphView",
      GD = "skyblockDevQuestJump";

    function xD(YY) {
      if (0 === YY.length) return "";
      const rY = [`M ${YY[0].x} ${YY[0].y}`];
      for (let FY = 1; FY < YY.length - 1; FY++) {
        const DY = YY[FY + 1];
        rY.push(`Q ${YY[FY].x} ${YY[FY].y} ${(YY[FY].x+DY.x)/2} ${(YY[FY].y+DY.y)/2}`)
      }
      const DY = YY[YY.length - 1];
      return rY.push(`L ${DY.x} ${DY.y}`), rY.join(" ")
    }

    function nD(YY, rY) {
      return YY < rY ? `${YY}|${rY}` : `${rY}|${YY}`
    }
    class PD extends uY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(YY, DY, FY), this.translate = rY, this.requestJump = AY, this.requestArrive = IY, this.storage = RY, this.now = OY, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = YY => {
          YY !== this.hoveredId && (this.hoveredId = YY, this.emit())
        }, this.jump = YY => {
          this.close(), this.requestJump(YY)
        }
      }
      Cy(YY) {
        if (!this.Ky)
          if ("graph" !== YY.kind) {
            if ("jumping" === YY.kind) {
              const rY = {
                questId: YY.graphQuestId,
                variation: YY.graphVariation,
                completes: YY.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(GD, rY)
            }
          } else {
            const rY = ++this.graphCount;
            DY.e(112).then((() => DY(5998))).then((DY => {
              let {
                default: FY
              } = DY;
              this.Ky || rY !== this.graphCount || (this.layout = function(YY, rY, DY) {
                var FY, AY;
                const IY = new YY.graphlib.Graph;
                IY.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), IY.setDefaultEdgeLabel((() => ({})));
                const RY = new Set;
                for (const vY of rY) RY.add(vY.graphQuestId), IY.setNode(vY.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const OY = DY.filter((YY => RY.has(YY.graphFromId) && RY.has(YY.graphToId) && YY.graphFromId !== YY.graphToId)),
                  gY = new Map;
                for (const vY of [...OY].sort(((YY, rY) => Number("awaits" === YY.graphEdgeKind) - Number("awaits" === rY.graphEdgeKind)))) {
                  const YY = nD(vY.graphFromId, vY.graphToId);
                  gY.has(YY) || (gY.set(YY, vY), IY.setEdge(vY.graphFromId, vY.graphToId))
                }
                YY.layout(IY);
                const aY = IY.graph();
                return {
                  width: Math.ceil(null !== (FY = aY.width) && void 0 !== FY ? FY : 0),
                  height: Math.ceil(null !== (AY = aY.height) && void 0 !== AY ? AY : 0),
                  nodes: rY.map((YY => {
                    var rY, DY;
                    const FY = IY.node(YY.graphQuestId);
                    return {
                      node: YY,
                      left: (null !== (rY = FY.x) && void 0 !== rY ? rY : 0) - 95,
                      top: (null !== (DY = FY.y) && void 0 !== DY ? DY : 0) - 26
                    }
                  })),
                  edges: OY.map((YY => {
                    var rY;
                    const DY = gY.get(nD(YY.graphFromId, YY.graphToId)),
                      FY = null !== (rY = IY.edge(DY.graphFromId, DY.graphToId).points) && void 0 !== rY ? rY : [];
                    return {
                      edge: YY,
                      key: `${YY.graphFromId}|${YY.graphToId}|${YY.graphEdgeKind}`,
                      path: xD(DY.graphFromId === YY.graphFromId ? FY : [...FY].reverse())
                    }
                  })),
                  plans: new Map(rY.map((YY => [YY.graphQuestId, new Set([YY.graphQuestId, ...YY.graphPlanIds])])))
                }
              }(FY, YY.graphNodes, YY.graphEdges), this.show())
            })).catch((YY => {
              console.error("The quest graph could not be laid out", YY)
            }))
          }
      }
      resumeJump(YY) {
        const rY = this.storage.getItem(GD);
        this.storage.removeItem(GD), null === rY || rY.variation !== YY || this.now() - rY.departedAt > 6e4 || this.requestArrive(rY.questId, rY.completes)
      }
      setTranslator(YY) {
        this.translate = YY, this.emit()
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
        var YY, rY;
        return null !== (YY = null === this.hoveredId || null === (rY = this.layout) || void 0 === rY ? void 0 : rY.plans.get(this.hoveredId)) && void 0 !== YY ? YY : new Set
      }
      buildSnapshot() {
        const YY = this.layout;
        if (null === YY) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const rY = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: YY.width,
          height: YY.height,
          nodes: YY.nodes.map((YY => {
            let {
              node: DY,
              left: FY,
              top: AY
            } = YY;
            return {
              id: DY.graphQuestId,
              name: this.translate(DY.graphNameKey),
              detail: null === DY.graphGiverName ? DY.graphZoneId : `${DY.graphGiverName} \xb7 ${DY.graphZoneId}`,
              state: DY.graphState,
              left: FY,
              top: AY,
              inPlan: rY.has(DY.graphQuestId),
              hovered: DY.graphQuestId === this.hoveredId
            }
          })),
          edges: YY.edges.map((YY => {
            let {
              edge: DY,
              key: FY,
              path: AY
            } = YY;
            return {
              key: FY,
              kind: DY.graphEdgeKind,
              path: AY,
              inPlan: rY.has(DY.graphFromId) && rY.has(DY.graphToId)
            }
          })),
          planning: rY.size > 0
        }
      }
    }
    var UD = DY(36421);
    const LD = 250,
      tD = 2150,
      YF = -2.8,
      rF = 2.2,
      DF = -27,
      FF = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      AF = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      IF = Math.round(50 + 1e3 * (AF.delay + AF.period / 2)),
      RF = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      OF = Array.from({
        length: 26
      }, ((YY, rY) => {
        const DY = 2.39996 * rY,
          FY = .5 + .618034 * rY % 1 * .23,
          AY = rY % 3 !== 2;
        return {
          rune: AY ? RF[7 * rY % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(DY)*FY).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(DY)*FY).toFixed(3)})`,
            "--spin": 40 * (rY % 5 - 2) + "deg",
            "--size": (AY ? 1 + rY % 4 * .2 : .3 + rY % 2 * .15) + "rem",
            "--duration": `${(1.8+7*rY%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*rY%3).toFixed(2)}s`
          }
        }
      }));

    function gF(YY, rY) {
      return Array.from({
        length: 30 + 3 * YY + (rY ? 10 : 0)
      }, ((YY, rY) => {
        const DY = rY < 4,
          FY = DY ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          AY = DY ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          IY = DY ? 2.2 : .6 + Math.random(),
          RY = DY ? .3 : Math.random() < .5 ? .16 : .24,
          OY = DY ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": FY,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${AY.toFixed(2)}rem`,
          "--length": `${IY.toFixed(2)}rem`,
          "--width": `${RY}rem`,
          "--duration": `${Math.round(OY)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function aF(YY) {
      let {
        zeta: rY,
        period: DY
      } = YY;
      const FY = 2 * Math.PI / DY;
      return {
        w: FY,
        decay: rY * FY / Math.sqrt(1 - rY * rY)
      }
    }
    let vF = !1;

    function uF() {
      if (vF) return;
      vF = !0;
      const YY = document.createElement("style");
      YY.textContent = function() {
        const YY = aF(FF),
          rY = aF(AF),
          DY = rY => Math.exp(-YY.decay * rY) * Math.sin(YY.w * rY),
          FY = DY(Math.atan(YY.w / YY.decay) / YY.w),
          AY = .25,
          IY = 2.15,
          RY = Math.round(215),
          OY = [];
        for (let gY = 0; gY <= RY; gY++) {
          const YY = gY / RY * IY;
          let aY = Math.sin(Math.min(YY, AY) / AY * Math.PI / 2) ** 2,
            vY = 0,
            uY = 1,
            sY = 1 - .2 * aY,
            iY = 1;
          if (YY >= AY) {
            const RY = YY - AY,
              OY = Math.max(0, RY - .05);
            aY = Math.exp(-OY / .05), vY = DY(OY + FF.lead * (1 - Math.exp(-OY / FF.rush))) / FY;
            const gY = OY - AF.delay,
              yY = gY <= 0 ? 0 : 1 - Math.exp(-rY.decay * gY) * (Math.cos(rY.w * gY) + rY.decay / rY.w * Math.sin(rY.w * gY)),
              QY = Math.max(0, (YY - 1.77) / (IY - 1.77));
            uY = (1 + (AF.to - 1) * yY) * (1 + .08 * QY), sY = 1.1 + 1.5 * Math.exp(-RY / .07) + .3 * Math.exp(-(((1e3 * RY - IF) / 100) ** 2)) + .8 * QY, iY = 1 - QY ** 1.5
          }
          const yY = .15 * aY + YF * vY,
            QY = -.1 * aY + rF * vY,
            oY = 3 * aY + DF * vY;
          OY.push(`${(gY/RY*100).toFixed(3)}% { opacity: ${iY.toFixed(3)}; transform: translate(${yY.toFixed(3)}rem, ${QY.toFixed(3)}rem) rotate(${oY.toFixed(2)}deg) scale(${uY.toFixed(3)}); filter: brightness(${sY.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${OY.join(" ")} }`
      }(), document.head.append(YY)
    }
    const sF = "skyblockForgeView",
      iF = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class yF extends uY {
      constructor(YY, rY, DY, FY, AY) {
        super(YY, DY, FY), this.translate = rY, this.requestForge = AY, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (YY, rY) => {
          var DY, FY;
          null !== this.forging || (null !== (DY = this.owned[(0, UD.q)(rY, YY)]) && void 0 !== DY ? DY : 0) <= 0 || (this.selected[YY] = this.selected[YY] === rY ? null : rY, this.status = null, null === (FY = this.onPartSelected) || void 0 === FY || FY.call(this), this.emit())
        }, this.forge = YY => {
          var rY, DY;
          const FY = this.selectedParts();
          if (null === FY || this.isPending() || !this.open) return;
          const AY = (0, UD.m)(FY);
          if (null === AY || AY.coalCost > this.coal) return;
          const IY = this.preview(AY),
            RY = null !== (rY = null === (DY = this.onForgeStarted) || void 0 === DY ? void 0 : DY.call(this, IY.tier, IY.named, YY)) && void 0 !== rY ? rY : () => {};
          if (this.dropArrival(), YY) {
            const YY = {
              id: ++this.forgeId,
              preview: IY,
              timers: [],
              stopSounds: RY,
              landed: !1,
              reply: null
            };
            YY.timers.push(setTimeout((() => {
              YY.landed = !0, null !== YY.reply && (this.apply(YY.reply), YY.reply = null, this.emit())
            }), LD), setTimeout((() => {
              this.finishForge(YY)
            }), tD)), this.forging = YY
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(FY)
        }, this.snapshot = this.buildSnapshot()
      }
      Cy(YY) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === YY.forgeMessageKind) return this.dropForge(), this.apply(YY), this.status = null, void this.show();
        const rY = this.forging;
        if (null !== rY && null !== YY.forgeRefusalKey) this.dropForge();
        else if (null !== rY && !rY.landed) return void(rY.reply = YY);
        this.apply(YY), this.emit()
      }
      apply(YY) {
        if (this.owned = YY.forgeOwnedParts, this.coal = YY.forgeCoalOwned, this.keepSelectionOwned("open" === YY.forgeMessageKind), null !== YY.forgeForgedSwordId) {
          var rY;
          const DY = (0, UD.m)(YY.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (rY = null === DY || void 0 === DY ? void 0 : DY.displayName) && void 0 !== rY ? rY : ""
            }
          }
        } else null !== YY.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: YY.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(YY) {
        this.translate = YY, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(YY) {
        var rY;
        this.forging = null;
        const DY = this.selectedParts(),
          FY = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: YY.id,
          sameSword: null !== DY && (null === (rY = (0, UD.m)(DY)) || void 0 === rY ? void 0 : rY.displayName) === YY.preview.name,
          timer: FY
        }, this.emit()
      }
      dropForge() {
        const YY = this.forging;
        if (null !== YY) {
          this.forging = null;
          for (const rY of YY.timers) clearTimeout(rY);
          YY.stopSounds(), null !== YY.reply && this.apply(YY.reply)
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
        var YY, rY, DY;
        const FY = this.selectedParts(),
          AY = null === FY ? null : (0, UD.m)(FY),
          IY = null !== (YY = null === (rY = this.forging) || void 0 === rY ? void 0 : rY.preview) && void 0 !== YY ? YY : null === AY ? null : this.preview(AY);
        return {
          enabled: this.received,
          open: this.open,
          slots: UD.i.map((YY => ({
            kind: YY,
            label: this.translate(iF[YY]),
            parts: this.partsFor(YY)
          }))),
          coalOwned: this.coal,
          preview: IY,
          unformedSword: UD.h[null !== (DY = this.selected.Blade) && void 0 !== DY ? DY : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((YY => YY > 0)),
          canForge: null !== IY && !IY.coalShort && !this.isPending(),
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
      preview(YY) {
        return {
          name: YY.displayName,
          lore: YY.lore,
          baseSword: YY.baseSword,
          enchantmentTier: YY.enchantmentTier,
          tier: Number(YY.enchantmentTier.slice(-1)),
          named: YY.named,
          stats: this.stats(YY),
          effects: YY.effects,
          coalCost: YY.coalCost,
          coalShort: null === this.forging && YY.coalCost > this.coal
        }
      }
      partsFor(YY) {
        const rY = [];
        for (const FY of UD.e) {
          var DY;
          const AY = (0, UD.q)(FY, YY),
            IY = null !== (DY = this.owned[AY]) && void 0 !== DY ? DY : 0;
          IY > 0 && rY.push({
            material: FY,
            itemName: AY,
            owned: IY,
            selected: this.selected[YY] === FY,
            placeholder: !1
          })
        }
        if (0 === rY.length) {
          const DY = UD.e[0];
          rY.push({
            material: DY,
            itemName: (0, UD.q)(DY, YY),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return rY
      }
      stats(YY) {
        const rY = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${YY.powerMultiplier.toFixed(2)}`,
          better: YY.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${YY.damageMultiplier.toFixed(2)}`,
          better: YY.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/YY.cooldownMultiplier).toFixed(2)}`,
          better: YY.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${YY.knockbackMultiplier.toFixed(2)}`,
          better: YY.knockbackMultiplier > 1
        }];
        return YY.reachBonus > 0 && rY.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${YY.reachBonus.toFixed(1)}`,
          better: !0
        }), YY.damageReduction > 0 && rY.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*YY.damageReduction)}%`,
          better: !0
        }), rY
      }
      selectedParts() {
        const {
          Blade: YY,
          Guard: rY,
          Handle: DY
        } = this.selected;
        return null === YY || null === rY || null === DY ? null : {
          blade: YY,
          guard: rY,
          handle: DY
        }
      }
      keepSelectionOwned(YY) {
        for (const DY of UD.i) {
          var rY;
          const FY = this.selected[DY];
          if (null !== FY && (null !== (rY = this.owned[(0, UD.q)(FY, DY)]) && void 0 !== rY ? rY : 0) > 0) continue;
          if (!YY) {
            this.selected[DY] = null;
            continue
          }
          const AY = [...UD.e].reverse().find((YY => {
            var rY;
            return (null !== (rY = this.owned[(0, UD.q)(YY, DY)]) && void 0 !== rY ? rY : 0) > 0
          }));
          this.selected[DY] = null !== AY && void 0 !== AY ? AY : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const QF = "skyblockSmugglerView",
      oF = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class WF extends uY {
      constructor(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(YY, DY, FY), this.translate = rY, this.requestBuy = AY, this.now = IY, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = YY => YY, this.onBought = null, this.buy = YY => {
          const rY = this.deals[YY];
          void 0 !== rY && !this.isPending() && this.open && !this.soldOut.has(YY) && this.canAfford(rY) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, YY))
        }, this.snapshot = this.buildSnapshot()
      }
      Cy(YY) {
        if (this.received = !0, this.day = YY.smugglerDay, this.deals = YY.smugglerDeals, this.rivets = YY.smugglerRivetsOwned, this.crests = YY.smugglerCrestsOwned, this.soldOut = new Set(YY.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + YY.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === YY.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = YY.smugglerBoughtSlot, null !== YY.smugglerBoughtSlot) {
          var rY, DY;
          const FY = this.deals[YY.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === FY ? "" : this.dealName(FY),
              amount: String(null !== (rY = null === FY || void 0 === FY ? void 0 : FY.smugglerDealAmount) && void 0 !== rY ? rY : 0)
            }
          }, this.boughtCount++, null === (DY = this.onBought) || void 0 === DY || DY.call(this)
        } else null !== YY.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: YY.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(YY, rY, DY) {
        this.translate = YY, void 0 !== DY && (this.itemName = DY), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(YY) {
        if (null !== YY.smugglerDealUniqueName) return YY.smugglerDealUniqueName;
        const rY = oF[YY.smugglerDealItem];
        return void 0 === rY ? this.itemName(YY.smugglerDealItem) : this.translate(rY)
      }
      canAfford(YY) {
        return YY.smugglerDealRivets <= this.rivets && YY.smugglerDealCrests <= this.crests
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
        const YY = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return YY <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : YY < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(YY)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(YY / 60)),
          minutes: String(YY % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((YY, rY) => ({
            slot: rY,
            itemName: YY.smugglerDealItem,
            displayName: this.dealName(YY),
            enchantmentTier: YY.smugglerDealEnchantmentTier,
            amount: YY.smugglerDealAmount,
            rivets: YY.smugglerDealRivets,
            crests: YY.smugglerDealCrests,
            affordable: this.canAfford(YY),
            soldOut: this.soldOut.has(rY),
            justBought: this.boughtSlot === rY
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
    const EF = "skyblockPassageView",
      mF = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function VF(YY, rY) {
      return YY(mF[rY])
    }

    function SF(YY, rY, DY, FY) {
      const AY = Math.ceil((DY - FY) / 864e5),
        IY = VF(YY, rY);
      return AY > 1 ? YY("skyblockGame:passageNextDays", {
        phase: IY,
        days: String(AY)
      }) : YY("skyblockGame:passageNextSoon", {
        phase: IY
      })
    }
    class lF extends uY {
      constructor(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(YY, DY, FY), this.translate = rY, this.now = AY, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = YY => YY, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Cy(YY) {
        this.message = YY, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(YY, rY, DY) {
        this.translate = YY, void 0 !== DY && (this.itemName = DY), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(YY) {
        return {
          itemName: YY.passageFish,
          displayName: this.itemName(YY.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(YY.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const YY = this.message;
        return null === YY ? {
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
          phase: YY.passagePhase,
          phaseName: VF(this.translate, YY.passagePhase),
          visitors: YY.passageVisitors.map((YY => this.describe(YY))),
          resting: this.describe(YY.passageResting),
          nextPhase: YY.passageNextPhase,
          next: SF(this.translate, YY.passageNextPhase, YY.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var TF = DY(37926);
    const eF = "skyblockKeepersChairView";
    class NF extends uY {
      constructor(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new TF.e;
        super(YY, DY, FY), this.translate = rY, this.requestAim = AY, this.now = IY, this.pacer = RY, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = YY => YY, this.aim = YY => {
          !this.awaitingReply && this.open && this.atChair && YY !== this.favoured && (null === YY || this.islands.some((rY => rY.keepersChairIslandId === YY && rY.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== YY && void 0 !== YY ? YY : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = RY.subscribe((() => {
          this.emit()
        }))
      }
      Cy(YY) {
        var rY, DY;
        this.received = !0;
        const FY = this.favoured,
          AY = this.atChair;
        var IY;
        return this.islands = YY.keepersChairIslands, this.favoured = YY.keepersChairFavoured, this.passage = null !== (rY = YY.keepersChairPassage) && void 0 !== rY ? rY : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (DY = YY.keepersChairAtChair) || void 0 === DY || DY, "place" === YY.keepersChairMessageKind ? (!AY && this.atChair && "refused" === (null === (IY = this.status) || void 0 === IY ? void 0 : IY.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === YY.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== YY.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: YY.keepersChairRefusalKey,
          island: null
        } : this.favoured !== FY && (this.status = null === this.favoured ? {
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
      receivePassage(YY) {
        this.received && (this.passage = YY, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(YY, rY, DY) {
        this.translate = YY, void 0 !== DY && (this.itemName = DY), this.emit()
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
      islandName(YY) {
        const rY = this.islands.find((rY => rY.keepersChairIslandId === YY));
        return void 0 === rY ? YY : this.translate(rY.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const YY = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          rY = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((YY => {
            const rY = YY.keepersChairFeaturedFish;
            return {
              id: YY.keepersChairIslandId,
              name: this.translate(YY.keepersChairIslandNameKey),
              relit: YY.keepersChairIslandRelit,
              featuredFish: null === rY ? null : {
                itemName: rY,
                displayName: this.itemName(rY)
              },
              favoured: YY.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === YY ? null : {
            tone: YY.tone,
            text: this.translate(YY.key, null === YY.island ? void 0 : {
              island: this.islandName(YY.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === rY ? null : {
            phase: rY.keepersChairPassagePhase,
            phaseName: VF(this.translate, rY.keepersChairPassagePhase),
            nextPhase: rY.keepersChairPassageNextPhase,
            next: SF(this.translate, rY.keepersChairPassageNextPhase, rY.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const BF = "skyblockReachLogView",
      cF = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      KF = "Caught Fish",
      HF = [1, 2, 4];

    function zF(YY, rY) {
      return YY.map((YY => ({
        ...YY,
        reachLogPageFish: YY.reachLogPageFish.map((YY => ({
          ...YY,
          reachLogFishFresh: rY(YY)
        })))
      })))
    }
    class ZF extends uY {
      constructor(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new TF.e;
        super(YY, DY, FY), this.translate = rY, this.requestOpen = AY, this.pacer = IY, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = YY => YY, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = YY => {
          this.pages.some((rY => rY.reachLogIslandId === YY)) && (this.selected = YY, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = IY.subscribe((() => {
          this.emit()
        }))
      }
      Cy(YY) {
        if (this.received = !0, "status" === YY.reachLogMessageKind) return !0 === YY.reachLogNews && this.markNews(), this.serverFresh = YY.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const rY = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== YY.reachLogMessageKind)
          if (this.pageViews = null, this.pages = zF(YY.reachLogPages, (YY => YY.reachLogFishFresh || this.heldFresh.has(YY.reachLogFishItem))), this.letGoShown = YY.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, rY) this.showPages();
          else {
            for (const YY of this.pages)
              for (const rY of YY.reachLogPageFish) rY.reachLogFishFresh && this.heldFresh.add(rY.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(YY, rY, DY) {
        this.translate = YY, this.pageViews = null, void 0 !== DY && (this.itemName = DY), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = zF(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var YY, rY, DY, FY;
        const AY = this.pages.find((YY => YY.reachLogPageFish.some((YY => YY.reachLogFishFresh))));
        if (void 0 !== AY) return AY.reachLogIslandId;
        if (null !== this.selected && this.pages.some((YY => YY.reachLogIslandId === this.selected))) return this.selected;
        return null !== (YY = null !== (rY = null === (DY = this.pages.filter((YY => YY.reachLogIslandAwake)).at(-1)) || void 0 === DY ? void 0 : DY.reachLogIslandId) && void 0 !== rY ? rY : null === (FY = this.pages[0]) || void 0 === FY ? void 0 : FY.reachLogIslandId) && void 0 !== YY ? YY : null
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
        return this.pages.map((YY => {
          var rY;
          return {
            id: YY.reachLogIslandId,
            name: this.translate(YY.reachLogIslandNameKey),
            awake: YY.reachLogIslandAwake,
            gold: YY.reachLogPageGold,
            caught: YY.reachLogPageFish.filter((YY => YY.reachLogFishCaught && !YY.reachLogFishVisitor)).length,
            total: YY.reachLogPageFish.filter((YY => !YY.reachLogFishVisitor)).length,
            fish: YY.reachLogPageFish.map((YY => {
              const rY = YY.reachLogFishBestKg;
              return {
                itemName: YY.reachLogFishItem,
                name: YY.reachLogFishCaught ? this.itemName(YY.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: YY.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / YY.reachLogFishChance))
                }),
                best: YY.reachLogFishCaught ? null === rY ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: rY.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: YY.reachLogFishMarks,
                ribbons: HF.map((rY => 0 !== (YY.reachLogFishRibbons & rY))),
                glimmer: 0 !== (8 & YY.reachLogFishRibbons),
                halo: 0 !== (32 & YY.reachLogFishRibbons),
                fresh: YY.reachLogFishFresh,
                visitor: YY.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (rY = YY.reachLogPageReturner) && void 0 !== rY ? rY : null)
          }
        }))
      }
      buildReturner(YY) {
        return null === YY ? null : {
          itemName: YY.reachLogReturnerFishItem,
          line: this.translate(YY.reachLogReturnerLineKey, {
            name: this.translate(YY.reachLogReturnerNameKey),
            trinket: this.translate(YY.reachLogReturnerTrinketKey)
          }),
          back: YY.reachLogReturnerBack
        }
      }
      receivePassagePhase(YY) {
        null !== this.passagePhase && this.passagePhase !== YY && (this.pagesCurrent = !1), this.passagePhase = YY
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const CF = "skyblockLampLightView";
    class fF {
      constructor(YY, rY, DY, FY) {
        this.vo = YY, this.translate = rY, this.requestCommand = DY, this.pacer = FY, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.Ky = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = YY => {
          YY ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = YY => {
          this.send(`buy ${YY}`)
        }, this.socket = YY => {
          this.send(`socket ${null!==YY&&void 0!==YY?YY:CY}`)
        }, this.wearTint = YY => {
          this.send(`tint ${null!==YY&&void 0!==YY?YY:CY}`)
        }, this.setSituation = YY => {
          this.situation = YY, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = FY.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = FY.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Cy(YY) {
        if (this.message = YY, null !== YY.lampLightShop && (this.shop = YY.lampLightShop), "open" === YY.lampLightKind && (this.refusalKey = null), "reply" === YY.lampLightKind) {
          var rY;
          const AY = null !== (rY = YY.lampLightReplyTag) && void 0 !== rY ? rY : null,
            IY = null !== AY && AY === this.offTag;
          var DY, FY;
          if (IY ? this.settleOff() : null !== AY && AY !== this.awaitingTag || this.settleReply(), this.refusalKey = YY.lampLightRefusalKey, null !== YY.lampLightBought && !IY) this.sparkle = {
            id: YY.lampLightBought,
            count: (null !== (DY = null === (FY = this.sparkle) || void 0 === FY ? void 0 : FY.count) && void 0 !== DY ? DY : 0) + 1
          }
        }
        YY.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === YY.lampLightKind && (this.lastGained = YY.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(YY) {
        YY !== this.atChair && (this.atChair = YY, YY && (this.refusalKey = null), this.emit())
      }
      setTranslator(YY, rY) {
        this.translate = YY, this.locale = null !== rY && void 0 !== rY ? rY : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.Ky = !0
      }
      send(YY) {
        var rY;
        if (null !== this.awaitingTag || "ready" !== (null === (rY = this.message) || void 0 === rY ? void 0 : rY.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const DY = this.nextTag();
        this.awaitingTag = DY, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${YY} ${DY}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const YY = this.nextTag();
        this.offTag = YY, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${YY}`)
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
        this.Ky || (this.snapshot = this.buildSnapshot(), this.vo(this.snapshot))
      }
      formatLight(YY) {
        return Math.floor(YY).toLocaleString(this.locale)
      }
      formatPercent(YY) {
        const rY = 100 * YY;
        return rY >= 10 ? Math.round(rY).toLocaleString(this.locale) : rY.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(YY, rY) {
        if ("bite" === YY) return this.translate("skyblockGame:lampLightBite", {
          seconds: (rY.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === YY) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(rY.lampLightRareChance)
        });
        if ("notice" === YY) return null === rY.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(rY.lampLightNoticeChance)
        });
        const DY = "meter" === YY ? rY.lampLightMeterCatches : rY.lampLightBloomCatches;
        return null === DY ? null : this.translate("meter" === YY ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(DY))
        })
      }
      oddsLines(YY, rY) {
        const DY = (YY, rY) => {
            var DY;
            return null !== (DY = {
              bite: rY.lampLightBiteMs,
              rare: rY.lampLightRareChance,
              meter: rY.lampLightMeterCatches,
              bloom: rY.lampLightBloomCatches,
              notice: rY.lampLightNoticeChance
            } [YY]) && void 0 !== DY ? DY : 0
          },
          FY = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          AY = [];
        for (const IY of ["bite", "rare", "meter", "bloom", "notice"]) {
          const RY = this.formatOdds(IY, YY),
            OY = this.formatOdds(IY, rY);
          if (null === RY || null === OY || "bite" !== IY && "rare" !== IY && RY === OY) continue;
          const gY = DY(IY, rY) - DY(IY, YY),
            aY = FY[IY] ? gY < 0 : gY > 0;
          AY.push({
            label: IY,
            before: RY,
            after: OY,
            tone: RY === OY ? "same" : aY ? "better" : "worse"
          })
        }
        return AY
      }
      charmView(YY, rY, DY) {
        const FY = YY.lampLightCharmId.charAt(0).toUpperCase() + YY.lampLightCharmId.slice(1),
          AY = "bloom" === this.situation;
        return {
          id: YY.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${FY}`),
          effect: this.translate(`skyblockGame:lampLightCharm${FY}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(YY.lampLightCharmCost)
          }),
          owned: YY.lampLightCharmOwned,
          affordable: DY >= YY.lampLightCharmCost,
          socketed: rY.lampLightSocketed === YY.lampLightCharmId,
          lines: this.oddsLines(AY ? rY.lampLightBareBloom : rY.lampLightBareOpen, AY ? YY.lampLightCharmBloom : YY.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var YY, rY, DY, FY;
        const AY = this.message,
          IY = "ready" === (null === AY || void 0 === AY ? void 0 : AY.lampLightStatus) ? this.shop : null,
          RY = null !== (YY = null === AY || void 0 === AY ? void 0 : AY.lampLightBalance) && void 0 !== YY ? YY : 0,
          OY = this.atChair,
          gY = "loading" === (null === AY || void 0 === AY ? void 0 : AY.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === AY || void 0 === AY ? void 0 : AY.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          aY = "ready" !== (null === AY || void 0 === AY ? void 0 : AY.lampLightStatus) || OY ? null !== (rY = this.refusalKey) && void 0 !== rY ? rY : gY : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== AY && "locked" !== AY.lampLightStatus,
          status: null !== (DY = null === AY || void 0 === AY ? void 0 : AY.lampLightStatus) && void 0 !== DY ? DY : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(RY)
          }),
          releasing: null !== (FY = null === AY || void 0 === AY ? void 0 : AY.lampLightReleasing) && void 0 !== FY && FY,
          gained: null === AY || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === AY || void 0 === AY ? void 0 : AY.lampLightStatus) && OY && !this.isPending(),
          situation: this.situation,
          shop: null === IY ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: IY.lampLightOddsRod,
              island: this.translate(IY.lampLightIslandNameKey)
            }),
            heldRod: null !== IY.lampLightHeldRod,
            charms: IY.lampLightCharms.map((YY => this.charmView(YY, IY, RY))),
            tints: IY.lampLightTints.map((YY => {
              const rY = YY.lampLightTintId,
                [DY, FY, AY] = YY.lampLightTintColour;
              return {
                id: rY,
                name: this.translate(`skyblockGame:lampLightTint${rY.charAt(0).toUpperCase()}${rY.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(YY.lampLightTintCost)
                }),
                owned: YY.lampLightTintOwned,
                affordable: RY >= YY.lampLightTintCost,
                wearing: IY.lampLightTint === rY,
                colour: `rgb(${DY}, ${FY}, ${AY})`
              }
            })),
            wearingIslandColours: null === IY.lampLightTint
          },
          notice: null === aY ? null : this.translate(aY),
          sparkle: this.sparkle
        }
      }
    }
    const jF = "skyblockMagmawardView";
    class hF {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.vo = YY, this.now = rY, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = wY.map((() => 0)), this.wornAt = wY.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Cy(YY) {
        var rY, DY;
        const FY = wY.map(((rY, DY) => !0 === YY.magmawardPiecesWorn[DY]));
        if (!FY.includes(!0)) return this.snapshot = null, void this.vo(null);
        const AY = this.now(),
          IY = this.snapshot;
        null === IY && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const RY = YY.magmawardFuelCarried,
          OY = !FY.includes(!1);
        let gY = null !== (rY = null === IY || void 0 === IY ? void 0 : IY.pulse) && void 0 !== rY ? rY : null,
          aY = null !== (DY = null === IY || void 0 === IY ? void 0 : IY.flare) && void 0 !== DY ? DY : null;
        YY.magmawardFuelBurned ? (gY = "burn", aY = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = AY, this.flareAt = AY) : null !== IY && RY > IY.fuel && (gY = "gain", this.pulseToken++, this.pulseAt = AY), OY && null !== IY && !IY.fullSet && (aY = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = AY, this.setLitAt = AY);
        const vY = wY.map(((YY, rY) => (FY[rY] && null !== IY && !IY.pieces[rY].worn && (this.wornTokens[rY]++, this.wornAt[rY] = AY), {
          itemName: YY,
          worn: FY[rY],
          wornToken: this.wornTokens[rY],
          justWorn: FY[rY] && this.isPlaying(this.wornAt[rY], AY)
        })));
        this.snapshot = {
          pieces: vY,
          wornCount: FY.filter(Boolean).length,
          fullSet: OY,
          fuel: RY,
          fuelState: RY <= 0 ? "empty" : RY <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, AY) ? gY : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, AY) ? aY : null,
          flareToken: this.flareToken,
          setLit: OY && this.isPlaying(this.setLitAt, AY),
          setLitToken: this.setLitToken
        }, this.vo(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.vo(null)
      }
      isPlaying(YY, rY) {
        return rY - YY < 1200
      }
    }
    const dF = "skyblockGlowtideView";
    class JF {
      constructor(YY) {
        this.vo = YY, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = YY => {
          this.arrow = YY, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Cy(YY) {
        this.bloom = YY.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.vo(null))
      }
      afterRender(YY, rY) {
        const DY = this.bloom;
        if (null === DY || null === YY) return;
        const FY = DY.glowtideBloomX - YY[0],
          IY = DY.glowtideBloomZ - YY[2],
          RY = Math.hypot(FY, IY),
          OY = this.snapshot,
          gY = null !== OY && void 0 !== OY && OY.inRange ? 1 : 0,
          aY = RY <= 12.5 + gY && YY[1] - DY.glowtideBloomY <= 10 + gY;
        !aY || null !== OY && void 0 !== OY && OY.inRange || this.inRangeToken++;
        const vY = {
          colour: DY.glowtideBloomColour,
          inRange: aY,
          distance: Math.round(RY),
          inRangeToken: this.inRangeToken
        };
        (null === OY || vY.colour !== OY.colour || vY.inRange !== OY.inRange || !aY && vY.distance !== OY.distance) && (this.snapshot = vY, this.vo(vY));
        const uY = AY.c.computeShortestRotation(rY, (0, AY.Bb)([FY, 0, IY]));
        null === this.arrow || Math.abs(uY - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${uY}rad)`, this.arrowTurn = uY)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.vo(null)
      }
    }
    const MF = "skyblockGlowMeterView";
    class wF {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.vo = YY, this.now = rY, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Cy(YY) {
        const rY = this.now(),
          {
            glowMeterFill: DY,
            glowMeterCapacity: FY
          } = YY,
          AY = DY >= FY,
          IY = this.snapshot;
        null !== IY && (AY && !IY.full && (this.fullToken++, this.fullAt = rY), IY.full && !AY ? (this.burstToken++, this.burstAt = rY) : DY > IY.fill && (this.gainToken++, this.gainAt = rY)), this.snapshot = {
          fill: DY,
          gu: FY,
          ratio: Math.min(1, Math.max(0, DY / FY)),
          full: AY,
          rares: YY.glowMeterRares,
          ready: AY && this.isPlaying(this.fullAt, rY),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, rY),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, rY),
          gainToken: this.gainToken
        }, this.vo(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.vo(null)
      }
      isPlaying(YY, rY) {
        return rY - YY < 2e3
      }
    }
    const bF = "skyblockHushWaitView";
    class XF {
      constructor(YY) {
        this.vo = YY, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Cy(YY) {
        let {
          hushWaitMs: rY,
          hushWaitTotalMs: DY,
          hushWaitLines: FY
        } = YY;
        if (this.clearTimers(), this.token++, 0 === FY.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (rY <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: FY[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const AY = Math.max(null !== DY && void 0 !== DY ? DY : rY, rY),
          IY = AY - rY,
          RY = YY => AY * YY / FY.length,
          OY = YY => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: AY,
              elapsedMs: IY,
              line: FY[YY],
              lineIndex: YY
            })
          };
        let gY = 0;
        for (; gY + 1 < FY.length && RY(gY + 1) <= IY;) gY++;
        OY(gY);
        for (let aY = gY + 1; aY < FY.length; aY++) this.later(RY(aY) - IY, (() => {
          OY(aY)
        }));
        this.later(rY, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(YY) {
        this.snapshot = YY, this.vo(YY)
      }
      later(YY, rY) {
        this.timers.push(setTimeout(rY, YY))
      }
      clearTimers() {
        for (const YY of this.timers) clearTimeout(YY);
        this.timers = []
      }
    }
    const qF = "skyblockTideChartsView",
      pF = 36e5,
      kF = 864e5;

    function GF(YY, rY, DY) {
      const [FY, AY, IY, RY] = YY.tideChartArea, OY = Math.floor(rY), gY = Math.floor(DY);
      return OY >= FY && OY <= IY && gY >= AY && gY <= RY
    }

    function xF(YY, rY, DY) {
      const [FY, AY, IY, RY] = YY.tideChartWater;
      return function(YY, rY, DY, FY, AY, IY) {
        const RY = 4 - bY(Math.floor(AY) - (YY - DY), DY);
        return 5 * bY(Math.floor(IY) - (rY - FY), FY) + RY
      }(FY, AY, IY, RY, rY, DY)
    }

    function nF(YY, rY, DY) {
      const FY = YY.tideCharts;
      for (let AY = 0; AY < FY.length; AY++)
        if (GF(FY[AY], rY, DY)) return FY[AY];
      return null
    }

    function PF(YY, rY, DY) {
      const FY = Math.max(0, rY - DY);
      return FY > kF ? YY("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(FY / kF))
      }) : FY > pF ? YY("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(FY / pF))
      }) : YY("skyblockGame:tideChartsTurnSoon")
    }
    class UF extends uY {
      constructor(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(YY, DY, FY), this.translate = rY, this.now = AY, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Ps = YY => {
          this.picked = YY, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Cy(YY) {
        const rY = this.message;
        if (null !== rY)
          for (const FY of YY.tideCharts) {
            var DY;
            const YY = rY.tideCharts.find((YY => YY.tideChartIsland === FY.tideChartIsland)),
              AY = FY.tideChartLit & ~(null !== (DY = null === YY || void 0 === YY ? void 0 : YY.tideChartLit) && void 0 !== DY ? DY : 0);
            void 0 !== YY && 0 !== AY && (this.pulse = {
              island: FY.tideChartIsland,
              cells: AY,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = YY, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(YY, rY) {
        var DY;
        const FY = null === this.message || Number.isNaN(YY) ? null : nF(this.message, YY, rY),
          AY = null !== (DY = null === FY || void 0 === FY ? void 0 : FY.tideChartIsland) && void 0 !== DY ? DY : null,
          IY = null === FY ? -1 : function(YY, rY, DY) {
            const [FY, AY, IY, RY] = YY.tideChartWater;
            return function(YY, rY, DY, FY, AY, IY, RY) {
              return ((AY - YY) / (DY + RY)) ** 2 + ((IY - rY) / (FY + RY)) ** 2 <= 1
            }(FY, AY, IY, RY, rY, DY, 2) ? xF(YY, rY, DY) : -1
          }(FY, YY, rY);
        return (AY !== this.hereIsland || IY !== this.hereCell) && (this.hereIsland = AY, this.hereCell = IY, null !== AY && (this.lastIsland = AY), !0)
      }
      afterRender(YY) {
        if (null === this.message) return;
        this.lastX = null === YY ? Number.NaN : YY[0], this.lastZ = null === YY ? Number.NaN : YY[2];
        const rY = this.locate(this.lastX, this.lastZ),
          DY = this.expirePulses();
        (rY || DY || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const YY = this.now();
        return !(!this.open || YY - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = YY, PF(this.translate, this.message.tideChartTurnsInMs, YY - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(YY, rY) {
        const DY = null === this.message ? null : nF(this.message, YY, rY);
        if (null === DY) return;
        const FY = xF(DY, YY, rY);
        0 === (DY.tideChartPreBlank & 1 << FY) && (this.cast = {
          island: DY.tideChartIsland,
          cell: FY,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const YY = this.now();
        let rY = !1;
        return 0 !== this.pulse.cells && YY - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, rY = !0), null !== this.cast && YY - this.cast.atMs >= 1500 && (this.cast = null, rY = !0), rY
      }
      setTranslator(YY) {
        this.translate = YY, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(YY, rY) {
        var DY;
        return null !== (DY = YY.tideCharts.find((YY => YY.tideChartIsland === rY))) && void 0 !== DY ? DY : null
      }
      describe(YY) {
        var rY, DY, FY;
        const AY = YY.tideChartIsland,
          IY = [];
        for (let iY = 0; iY < 25; iY++) {
          const rY = 1 << iY;
          0 !== (YY.tideChartLit & rY) ? IY.push("lit") : 0 !== (YY.tideChartClear & rY) ? IY.push("clear") : 0 !== (YY.tideChartPreBlank & rY) ? IY.push("shore") : IY.push("water")
        }
        const RY = function(YY) {
            let rY = 0;
            for (let DY = YY >>> 0; 0 !== DY; DY &= DY - 1) rY++;
            return rY
          }(YY.tideChartLit),
          OY = YY.tideChartInkCount,
          gY = this.translate(YY.tideChartIslandNameKey),
          aY = this.translate("skyblockGame:tideChartsLit", {
            lit: String(RY),
            ink: String(OY)
          }),
          vY = null === YY.tideChartPictureNameKey ? null : this.translate(YY.tideChartPictureNameKey),
          uY = this.hereIsland === AY && -1 !== this.hereCell ? this.hereCell : null,
          sY = [`${gY}: ${aY}.`];
        if (null !== vY && sY.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: vY
          })), null !== uY) {
          const YY = Math.floor(uY / 5) + 1,
            rY = uY % 5 + 1;
          sY.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(YY),
            column: String(rY)
          }))
        }
        return {
          island: AY,
          islandName: gY,
          cells: IY,
          hereCell: uY,
          lit: RY,
          ink: OY,
          litText: aY,
          pictureName: vY,
          gridLabel: sY.join(" "),
          pulseCells: this.pulse.island === AY ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (rY = this.cast) || void 0 === rY ? void 0 : rY.island) === AY ? this.cast.cell : null,
          castToken: null !== (DY = null === (FY = this.cast) || void 0 === FY ? void 0 : FY.token) && void 0 !== DY ? DY : 0
        }
      }
      buildSnapshot() {
        var YY, rY, DY;
        const FY = this.message;
        if (null === FY || 0 === FY.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const AY = this.findChart(FY, this.hereIsland),
          IY = null !== (YY = null !== (rY = null !== (DY = this.findChart(FY, this.open ? this.picked : null)) && void 0 !== DY ? DY : AY) && void 0 !== rY ? rY : this.findChart(FY, this.lastIsland)) && void 0 !== YY ? YY : FY.tideCharts[0],
          RY = null === AY ? null : this.describe(AY);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: RY,
          card: IY === AY ? RY : this.describe(IY),
          turnsText: PF(this.translate, FY.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(FY.tideChartBookCount)
          }),
          tabs: FY.tideCharts.map((YY => ({
            island: YY.tideChartIsland,
            name: this.translate(YY.tideChartIslandNameKey),
            selected: YY.tideChartIsland === IY.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const LF = "skyblockRegularsView",
      tF = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      YA = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function rA(YY, rY) {
      return "given" === YY ? rY.given : "owed" === YY ? rY.owed : rY.goal
    }
    class DA extends uY {
      constructor(YY, rY, DY, FY) {
        super(YY, DY, FY), this.translate = rY, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = YY => YY, this.openIsland = YY => {
          this.selected = YY, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = YY => {
          this.selected = YY, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Cy(YY) {
        this.message = YY, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const YY = this.openedFromReachLog;
        return this.openedFromReachLog = !1, YY
      }
      setTranslator(YY, rY, DY) {
        this.translate = YY, void 0 !== DY && (this.itemName = DY), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(YY, rY, DY) {
        return {
          text: this.translate(rA(YY, rY), DY),
          given: "given" === YY
        }
      }
      describeRegular(YY, rY) {
        const DY = this.translate,
          FY = null !== YY.regularKg,
          AY = YY.regularMeetings,
          IY = FY ? 0 === AY ? DY("skyblockGame:regularsNotMet") : 1 === AY ? DY("skyblockGame:regularsMeetingsOne") : DY("skyblockGame:regularsMeetings", {
            count: AY
          }) : "";
        return {
          id: YY.regularId,
          name: DY(YY.regularNameKey),
          line: DY(YY.regularLineKey),
          itemName: YY.regularFishItem,
          fishName: this.itemName(YY.regularFishItem),
          tagged: FY,
          size: null === YY.regularKg ? DY("skyblockGame:regularsNotTagged") : DY("skyblockGame:regularsSize", {
            kg: YY.regularKg.toFixed(1)
          }),
          meetings: IY,
          chance: DY("skyblockGame:regularsChance", {
            count: YY.regularOneInCasts
          }),
          resting: YY.regularRestingToday,
          gifts: [{
            text: DY("skyblockGame:regularsGiftFlare"),
            given: AY >= 3
          }, this.describeGift(YY.regularTintGift, tF, {
            tint: DY(YY.regularTintNameKey)
          })],
          history: [...YY.regularHistory].reverse().map((YY => {
            const FY = YY.regularMeetingKg.toFixed(1),
              AY = rY - YY.regularMeetingDay;
            return AY <= 0 ? DY("skyblockGame:regularsToday", {
              kg: FY
            }) : DY("skyblockGame:regularsDaysAgo", {
              days: AY,
              kg: FY
            })
          }))
        }
      }
      describeIsland(YY, rY) {
        return {
          id: YY.regularsIslandId,
          name: this.translate(YY.regularsIslandNameKey),
          charm: this.describeGift(YY.regularsCharmGift, YA, {
            charm: this.translate(YY.regularsCharmNameKey)
          }),
          regulars: YY.regularsList.map((YY => this.describeRegular(YY, rY)))
        }
      }
      buildSnapshot() {
        var YY, rY, DY, FY;
        const AY = this.message;
        if (null === AY) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const IY = AY.regularsIslands.map((YY => this.describeIsland(YY, AY.regularsToday))),
          RY = null !== (YY = null !== (rY = null === (DY = IY.find((YY => YY.id === this.selected))) || void 0 === DY ? void 0 : DY.id) && void 0 !== rY ? rY : null === (FY = IY[0]) || void 0 === FY ? void 0 : FY.id) && void 0 !== YY ? YY : "";
        return {
          enabled: !0,
          open: this.open,
          selected: RY,
          islands: IY
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const FA = "skyblockHiddenWatersView";
    class AA {
      constructor(YY) {
        this.vo = YY, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Cy(YY) {
        this.snapshot = function(YY) {
          const [rY, DY] = YY.hiddenWatersMapSize, FY = (YY, FY) => ({
            left: 1 - YY / rY,
            top: FY / DY
          }), AY = new Map;
          for (const [RY, OY] of YY.hiddenWatersGlimpses) {
            var IY;
            const YY = null !== (IY = AY.get(RY)) && void 0 !== IY ? IY : [];
            YY.push(OY), AY.set(RY, YY)
          }
          return {
            found: YY.hiddenWatersFound,
            total: YY.hiddenWatersTotal,
            aspect: DY / rY,
            pins: YY.hiddenWatersPins.map((YY => {
              let [rY, DY] = YY;
              return FY(rY, DY)
            })),
            islands: YY.hiddenWatersIslands.map((YY => {
              let [AY, IY, RY, OY] = YY;
              const {
                left: gY,
                top: aY
              } = FY(RY + 1, IY);
              return {
                left: gY,
                top: aY,
                width: (RY + 1 - AY) / rY,
                height: (OY + 1 - IY) / DY
              }
            })),
            glimpses: AY
          }
        }(YY), this.vo(this.snapshot)
      }
    }
    const IA = "skyblockDialogueView";
    class RA extends uY {
      constructor(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(YY, DY, FY), this.translate = rY, this.requestDialogue = AY, this.now = IY, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = YY => {
          this.selection = {
            kind: "quest",
            questId: YY
          }, this.request(), this.show()
        }, this.selectCharacter = YY => {
          this.selection = {
            kind: "character",
            npcId: YY
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Cy(YY) {
        this.received = !0, this.scripts = YY.questDialogueScripts, this.speakers = new Map(YY.questDialogueSpeakers.map((YY => [YY.dialogueSpeakerId, YY]))), this.emit()
      }
      setTranslator(YY) {
        this.translate = YY, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const YY = this.now();
        YY >= this.requestAvailableAt && (this.requestAvailableAt = YY + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var YY;
        const rY = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...rY,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const DY = this.selection;
        if ("quest" === DY.kind) {
          const YY = this.scripts.find((YY => YY.dialogueQuestId === DY.questId));
          return {
            ...rY,
            characters: [],
            questFocus: DY.questId,
            conversations: YY ? [this.conversation(YY)] : []
          }
        }
        const FY = [];
        for (let IY = this.scripts.length - 1; IY >= 0; IY--) {
          const YY = this.scripts[IY].dialogueLines;
          for (let rY = YY.length - 1; rY >= 0; rY--) FY.includes(YY[rY].dialogueSpeakerId) || FY.push(YY[rY].dialogueSpeakerId)
        }
        const AY = null !== DY.npcId && FY.includes(DY.npcId) ? DY.npcId : null !== (YY = FY[0]) && void 0 !== YY ? YY : null;
        return {
          ...rY,
          characters: FY.map((YY => {
            var rY, DY;
            return {
              id: YY,
              styling: null !== (rY = null === (DY = this.speakers.get(YY)) || void 0 === DY ? void 0 : DY.dialogueSpeakerStyling) && void 0 !== rY ? rY : YY,
              selected: YY === AY
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((YY => YY.dialogueLines.some((YY => YY.dialogueSpeakerId === AY)))).map((YY => this.conversation(YY))).reverse()
        }
      }
      conversation(YY) {
        let rY = null;
        return {
          questId: YY.dialogueQuestId,
          questName: this.translate(YY.dialogueQuestNameKey),
          completed: YY.dialogueQuestCompleted,
          lines: YY.dialogueLines.map(((YY, DY) => {
            var FY;
            const AY = YY.dialogueSpeakerId === rY || null === (FY = this.speakers.get(YY.dialogueSpeakerId)) || void 0 === FY ? void 0 : FY.dialogueSpeakerStyling;
            return rY = YY.dialogueSpeakerId, {
              key: DY,
              display: {
                line: {
                  translationKey: YY.dialogueLineKey,
                  params: this.params(YY.dialogueLineParams)
                },
                speakerName: AY,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(YY) {
        if (void 0 !== YY) return Object.fromEntries(Object.entries(YY).map((YY => {
          let [rY, DY] = YY;
          return [rY, "string" === typeof DY ? DY : this.translate(DY.translationKey)]
        })))
      }
    }
    var OA = DY(605),
      gA = DY(1270),
      aA = DY(99);
    const vA = "skyblockAutographsView";

    function uA(YY) {
      const rY = OA.m[YY];
      return {
        label: rY.chatTag.map((YY => YY.str)).join(""),
        icon: rY.icon,
        colour: rY.mainRGB
      }
    }
    class sA extends uY {
      constructor(YY) {
        let rY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = rY, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Cy(YY) {
        this.signatures = YY.autographSignatures, YY.autographOpen ? this.show() : this.emit()
      }
      setTranslator(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = rY, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var YY;
        const rY = null !== (YY = this.signatures) && void 0 !== YY ? YY : [],
          DY = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          FY = [...rY].sort(((YY, rY) => Number(null !== rY.autographRank) - Number(null !== YY.autographRank) || rY.autographSignedAtMs - YY.autographSignedAtMs)).map((YY => ({
            key: `${YY.autographSignedAtMs}|${YY.autographSignerName}`,
            name: (0, gA.d)(YY.autographSignerName, !aA.featureFlags.canSeeRealPlayerNames),
            rank: null === YY.autographRank ? null : uA(YY.autographRank),
            signedOn: DY.format(YY.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: FY,
          total: FY.length,
          rankTotal: FY.filter((YY => null !== YY.rank)).length
        }
      }
    }
    const iA = "skyblockHudView",
      yA = () => {},
      QA = {
        getItem: () => null,
        setItem: yA,
        removeItem: yA
      };
    class oA {
      constructor(YY) {
        let {
          translate: rY,
          translateWithIcons: DY,
          setMenuOpen: FY = yA,
          dismissMenu: AY = () => {
            FY(!1)
          },
          publishSkills: IY = yA,
          publishQuests: RY = yA,
          publishQuestNotification: OY = yA,
          publishDungeons: gY = yA,
          publishCollections: aY = yA,
          publishMap: vY = yA,
          publishHud: uY = yA,
          publishPortalTransit: sY = yA,
          publishDailyReward: yY = yA,
          publishMailbox: QY = yA,
          publishQuestGraph: oY = yA,
          publishForge: WY = yA,
          publishSmuggler: EY = yA,
          publishKeepersChair: mY = yA,
          publishReachLog: VY = yA,
          publishLampLight: SY = yA,
          publishMagmaward: lY = yA,
          publishGlowtide: eY = yA,
          publishGlowMeter: NY = yA,
          publishHushWait: BY = yA,
          publishPassage: cY = yA,
          publishTideCharts: KY = yA,
          publishRegulars: HY = yA,
          publishHiddenWaters: zY = yA,
          publishDialogue: ZY = yA,
          publishAutographs: CY = yA,
          isLoadingScreenUp: fY = () => !1,
          onDailyRewardCoinLanded: jY = yA,
          onDailyRewardStarted: hY = yA,
          onDailyRewardFinished: dY = yA,
          onDailyRewardItemLanded: JY = yA,
          onMailboxStarted: MY = yA,
          journeyStorage: wY = QA,
          requestTracking: bY = yA,
          requestTravel: XY = yA,
          requestDungeonEnter: qY = yA,
          requestQuestJump: pY = yA,
          requestQuestArrive: kY = yA,
          requestForge: GY = yA,
          requestSmuggle: xY = yA,
          requestKeepersChairAim: nY = yA,
          requestReachLogOpen: PY = yA,
          requestLampLight: UY = yA,
          requestDialogue: LY = yA
        } = YY;
        this.navigation = void 0, this.map = void 0, this.compass = new TY, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new TF.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = YY => YY, this.close = () => {
          for (const YY of this.panels) YY.close()
        }, this.setMenuOpen = FY, this.publishHud = uY, this.portalTransit = new dD(sY, wY), this.magmaward = new hF(lY), this.glowtide = new JF(eY), this.glowMeter = new wF(NY), this.hushWait = new XF(BY), this.dailyReward = new wD(yY, (() => fY() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (YY => {
          this.quests.setNotificationsHeld(YY)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), jY, hY, dY, JY);
        const tY = YY => {
          this.panels.some((YY => YY.isOpen())) || (YY ? AY() : this.setMenuOpen(!1))
        };
        this.skills = new AD(IY, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), rY, void 0, void 0, tY), this.quests = new aD(RY, bY, rY, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, tY, OY), this.dungeons = new sD(gY, rY, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, tY, qY), this.collections = new fD(aY, rY, (() => {
          this.beforePanelOpen(this.collections)
        }), tY), this.map = new iY(vY, XY, rY, (() => {
          this.beforePanelOpen(this.map)
        }), tY), this.questGraph = new PD(oY, rY, (() => {
          this.beforePanelOpen(this.questGraph)
        }), tY, pY, kY, wY), this.forge = new yF(WY, rY, (() => {
          this.beforePanelOpen(this.forge)
        }), tY, GY), this.smuggler = new WF(EY, rY, (() => {
          this.beforePanelOpen(this.smuggler)
        }), tY, xY), this.lampLight = new fF(SY, rY, UY, this.commandPacer), this.keepersChair = new NF(mY, rY, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (YY => {
          this.lampLight.onChairClosed(), tY(YY)
        }), nY, Date.now, this.commandPacer), this.reachLog = new ZF(VY, rY, (() => {
          this.beforePanelOpen(this.reachLog)
        }), tY, PY, this.commandPacer), this.passage = new lF(cY, rY, (() => {
          this.beforePanelOpen(this.passage)
        }), tY), this.tideCharts = new UF(KY, rY, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), tY), this.regulars = new DA(HY, rY, (() => {
          this.beforePanelOpen(this.regulars)
        }), (YY => {
          this.regulars.takeReturnToReachLog() && !YY && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), tY(YY)
        })), this.hiddenWaters = new AA(zY), this.dialogue = new RA(ZY, rY, (() => {
          this.beforePanelOpen(this.dialogue)
        }), tY, LY), this.autographs = new sA(CY, (() => {
          this.beforePanelOpen(this.autographs)
        }), tY), this.mailbox = new pD(QY, (() => fY() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), MY), this.quests.translateWithIcons = null !== DY && void 0 !== DY ? DY : null, this.skills.onLevelUp = YY => {
          this.quests.notify(YY)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new DD(this.map, this.quests, this.compass, rY)
      }
      getHudSnapshot() {
        const YY = this.hudSnapshot,
          rY = this.dailyReward.getHeldCoins();
        return null === YY || rY <= 0 || !("hudPurseCoins" in YY) ? YY : {
          ...YY,
          hudPurseCoins: Math.max(0, YY.hudPurseCoins - rY)
        }
      }
      receiveHud(YY) {
        this.hudSnapshot = YY, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(YY) {
        this.setMenuOpen(!0);
        const rY = YY === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = YY;
        for (const DY of this.panels) DY === YY || rY && DY === this.reachLog || DY.close();
        this.openingPanel = null
      }
      setTranslator(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rY => this.resolveItemName(rY, YY);
        this.quests.translateWithIcons = null !== DY && void 0 !== DY ? DY : null, this.navigation.setTranslator(YY, rY), this.lampLight.setTranslator(YY, rY), this.mailbox.setItemName(FY);
        for (const AY of this.panels) AY.setTranslator(YY, rY, FY)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const YY of this.panels) YY.dispose()
      }
    }
    var WA = DY(1092),
      EA = DY.n(WA),
      mA = DY(19),
      VA = DY(36025),
      SA = DY(2971),
      lA = DY(1793),
      TA = DY(1778),
      eA = DY(8774),
      NA = DY(1211),
      BA = DY(1430),
      cA = DY(1125);

    function KA(YY) {
      let {
        controller: rY,
        minimap: DY,
        children: FY
      } = YY;
      const IY = (0, BA.k)(iA, rY.getHudSnapshot()),
        [RY, OY] = (0, NY.useState)(rY.skills.getSnapshot().overallLevel);
      (0, BA.g)(FD, (YY => {
        OY(YY.overallLevel)
      }));
      const gY = (0, NY.useRef)(null);
      (0, BA.g)(MD, (YY => {
        ! function(YY, rY) {
          if (null === YY || "function" !== typeof YY.animate) return;
          const DY = rY ? 1.35 : 1.15;
          YY.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${DY})`
          }, {
            transform: "scale(1)"
          }], {
            duration: rY ? 320 : 160,
            easing: "ease-out"
          }), YY.classList.toggle("Receiving", !rY), rY && (YY.classList.remove("Shine"), YY.offsetWidth, YY.classList.add("Shine"))
        }(gY.current, YY)
      }));
      const {
        t: aY
      } = (0, NA.C)(), {
        isTouchScreen: vY
      } = (0, mA.j)(["isTouchScreen"]), [uY, sY] = (0, NY.useState)(null);
      return (0, SA.l)(uY, ".SkyblockRightHud"), null !== IY || DY ? (0, cA.jsx)(VA.e, {
        placement: "topRight",
        children: (0, cA.jsxs)("div", {
          className: EA()("SkyblockRightHud", {
            TouchScreen: vY
          }),
          children: [DY, null !== IY && (0, cA.jsxs)("div", {
            ref: sY,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in IY ? (0, cA.jsx)("div", {
              className: "SkyblockHudHelp",
              children: IY.hudHelpText
            }) : (0, cA.jsxs)(cA.Fragment, {
              children: [(0, cA.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, cA.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, cA.jsx)("strong", {
                    style: {
                      color: AY.K.cyanUiText
                    },
                    children: aY(IY.hudZoneNameKey)
                  }), null !== RY && (0, cA.jsx)("span", {
                    style: {
                      color: AY.K.goldUiText
                    },
                    children: aY("skyblockGame:level", {
                      level: (0, eA.g)(RY)
                    })
                  })]
                }), (0, cA.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: gY,
                  children: [(0, cA.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, cA.jsx)(lA.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, eA.g)(IY.hudPurseCoins)]
                })]
              }), IY.hudClockText.length > 0 && (0, cA.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, cA.jsx)(TA.b, {
                  text: IY.hudClockText
                })
              })]
            }), FY, "hudZoneNameKey" in IY && (0, cA.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function HA(YY) {
      let {
        icon: rY
      } = YY;
      const DY = (0, NY.useCallback)((YY => {
        null === YY || void 0 === YY || YY.replaceChildren(qr(rY))
      }), [rY]);
      return (0, cA.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: DY
      })
    }

    function zA(YY) {
      let {
        controller: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)();
      return (0, cA.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: rY.display.mountPlayer,
        title: DY("skyblockGame:mapYouAreHere"),
        children: (0, cA.jsx)(HA, {
          icon: "player"
        })
      })
    }
    const ZA = DY(37929),
      CA = Object.fromEntries(ZA.keys().map((YY => [YY.replace(/^\.\/(.*)\.png$/, "$1"), ZA(YY)])));

    function fA(YY, rY) {
      var DY;
      return null !== (DY = CA[YY]) && void 0 !== DY ? DY : CA[rY]
    }

    function jA(YY) {
      let {
        imageKey: rY,
        fallbackImageKey: DY,
        geometryKey: FY,
        alt: AY,
        className: IY
      } = YY;
      const [RY, OY] = (0, NY.useState)((() => function(YY, rY) {
        return [{
          id: 0,
          imageKey: YY,
          geometryKey: rY,
          phase: "shown"
        }]
      }(rY, FY))), gY = function(YY, rY, DY) {
        const FY = YY[YY.length - 1];
        if (FY.imageKey === rY && FY.geometryKey === DY) return YY;
        const AY = {
          id: FY.id + 1,
          imageKey: rY,
          geometryKey: DY,
          phase: "entering"
        };
        return FY.geometryKey === DY ? [{
          ...FY,
          phase: "leaving"
        }, AY] : [AY]
      }(RY, rY, FY);
      return gY !== RY && OY(gY), (0, cA.jsx)(cA.Fragment, {
        children: gY.map((YY => (0, cA.jsx)("img", {
          className: EA()("SkyblockMapTerrainImage", IY, {
            Entering: "entering" === YY.phase,
            Leaving: "leaving" === YY.phase
          }),
          src: fA(YY.imageKey, DY),
          alt: "leaving" === YY.phase ? "" : AY,
          onAnimationEnd: () => {
            OY((rY => function(YY, rY) {
              return YY.flatMap((YY => YY.id !== rY ? [YY] : "leaving" === YY.phase ? [] : [{
                ...YY,
                phase: "shown"
              }]))
            }(rY, YY.id)))
          }
        }, YY.id)))
      })
    }
    var hA = DY(4086),
      dA = DY(1437);

    function JA(YY) {
      if ("Tab" !== YY.key) return;
      const rY = Array.from(YY.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        DY = rY.indexOf(document.activeElement);
      var FY;
      if (YY.shiftKey && DY <= 0) YY.preventDefault(), null === (FY = rY.at(-1)) || void 0 === FY || FY.focus();
      else if (!YY.shiftKey && (-1 === DY || DY === rY.length - 1)) {
        var AY;
        YY.preventDefault(), null === (AY = rY[0]) || void 0 === AY || AY.focus()
      }
    }

    function MA() {
      const YY = (0, NY.useRef)(null);
      return (0, NY.useCallback)((rY => {
        var DY;
        rY ? (YY.current = document.activeElement, rY.focus()) : null === (DY = YY.current) || void 0 === DY || DY.focus()
      }), [])
    }

    function wA(YY) {
      let {
        percent: rY,
        label: DY,
        levelUpToken: FY,
        colour: AY
      } = YY;
      return (0, cA.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": DY,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": rY,
        "aria-valuetext": DY,
        children: [(0, cA.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${rY/100})`
          }
        }), null !== FY && void 0 !== FY && (0, cA.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": AY
          }
        }, FY)]
      })
    }

    function bA(YY) {
      let {
        mount: rY
      } = YY;
      return (0, cA.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: rY,
        hidden: !0,
        children: (0, cA.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, cA.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, cA.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function XA(YY, rY, DY, FY) {
      (0, NY.useLayoutEffect)((() => {
        const AY = YY.current;
        if (!DY || null === rY || void 0 === rY || !rY.local || !AY) return;
        const IY = Array.from(AY.querySelectorAll(".SkyblockMapNode")),
          RY = [...rY.points, ...rY.portals],
          OY = () => {
            const YY = AY.clientWidth,
              DY = AY.clientHeight,
              OY = IY.map(((AY, IY) => {
                const OY = RY[IY];
                return {
                  id: OY.id,
                  portal: IY >= rY.points.length,
                  x: OY.position[0] * YY / 100,
                  y: OY.position[1] * DY / 100,
                  width: AY.offsetWidth / FY,
                  height: AY.offsetHeight / FY
                }
              })),
              gY = new Map(RY.map(((YY, rY) => [YY.id, IY[rY]])));
            for (const rY of function(YY, rY, DY) {
                const FY = [],
                  AY = [...YY].sort(((YY, rY) => Number(rY.portal) - Number(YY.portal) || YY.id.localeCompare(rY.id)));
                for (const IY of AY) {
                  const YY = YY => Math.max(IY.width / 2, Math.min(rY - IY.width / 2, YY)),
                    AY = YY => Math.max(IY.height / 2, Math.min(DY - IY.height / 2, YY)),
                    RY = [YY(IY.x)],
                    OY = [AY(IY.y)];
                  for (const rY of FY) RY.push(YY(rY.x - (rY.width + IY.width) / 2 - 4), YY(rY.x + (rY.width + IY.width) / 2 + 4)), OY.push(AY(rY.y - (rY.height + IY.height) / 2 - 4), AY(rY.y + (rY.height + IY.height) / 2 + 4));
                  let gY = {
                      ...IY,
                      x: RY[0],
                      y: OY[0]
                    },
                    aY = 1 / 0,
                    vY = 1 / 0;
                  for (const rY of new Set(RY))
                    for (const YY of new Set(OY)) {
                      let DY = 0;
                      for (const RY of FY) DY += Math.max(0, (IY.width + RY.width) / 2 + 4 - Math.abs(rY - RY.x)) * Math.max(0, (IY.height + RY.height) / 2 + 4 - Math.abs(YY - RY.y));
                      const AY = (rY - IY.x) ** 2 + (YY - IY.y) ** 2;
                      (DY < aY || DY === aY && AY < vY) && (gY = {
                        ...IY,
                        x: rY,
                        y: YY
                      }, aY = DY, vY = AY)
                    }
                  FY.push(gY)
                }
                return FY
              }(OY, YY, DY)) {
              const YY = gY.get(rY.id);
              YY.style.left = `${rY.x}px`, YY.style.top = `${rY.y}px`
            }
          };
        OY();
        const gY = new ResizeObserver(OY);
        gY.observe(AY);
        for (const YY of IY) gY.observe(YY);
        return () => {
          gY.disconnect()
        }
      }), [YY, rY, DY, FY])
    }
    const qA = {
        zoom: 1,
        x: 0,
        y: 0
      },
      pA = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function kA(YY, rY, DY) {
      return Math.min(DY, Math.max(rY, YY))
    }

    function GA(YY, rY, DY) {
      const FY = Math.min(1, DY * rY / YY),
        AY = Math.min(1, YY / (DY * rY));
      return {
        x0: (1 - FY) / 2,
        y0: (1 - AY) / 2,
        x1: (1 + FY) / 2,
        y1: (1 + AY) / 2
      }
    }

    function xA(YY, rY, DY, FY) {
      const AY = rY * (FY - DY);
      if (AY <= 1) return .5 - rY * (DY + FY) / 2;
      const IY = .45 * Math.min(1, AY - 1);
      return kA(YY, 1 - rY * FY - IY, IY - rY * DY)
    }

    function nA(YY, rY) {
      const DY = kA(YY.zoom, 1, 12);
      return {
        zoom: DY,
        x: xA(YY.x, DY, rY.x0, rY.x1),
        y: xA(YY.y, DY, rY.y0, rY.y1)
      }
    }

    function PA(YY, rY, DY, FY) {
      let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : pA;
      const IY = kA(YY.zoom * rY, 1, 12),
        RY = IY / YY.zoom;
      return nA({
        zoom: IY,
        x: DY - (DY - YY.x) * RY,
        y: FY - (FY - YY.y) * RY
      }, AY)
    }

    function UA(YY, rY, DY, FY) {
      const [AY, IY] = (0, NY.useState)(qA);
      (0, NY.useEffect)((() => {
        IY(qA)
      }), [DY]), (0, NY.useEffect)((() => {
        const DY = YY.current;
        if (!rY || !DY) return;
        const AY = () => GA(DY.clientWidth, DY.clientHeight, FY),
          RY = YY => {
            const rY = DY.getBoundingClientRect();
            return {
              x: (YY.clientX - rY.left) / rY.width,
              y: (YY.clientY - rY.top) / rY.height
            }
          },
          OY = new Map;
        let gY = {
            x: 0,
            y: 0
          },
          aY = !1,
          vY = 0;
        const uY = YY => {
            YY.preventDefault();
            const rY = YY.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * YY.deltaY : YY.deltaY,
              DY = RY(YY);
            IY((YY => PA(YY, Math.exp(.0015 * -rY), DY.x, DY.y, AY())))
          },
          sY = YY => {
            "mouse" === YY.pointerType && 0 !== YY.button || (OY.set(YY.pointerId, RY(YY)), 1 === OY.size && (gY = {
              x: YY.clientX,
              y: YY.clientY
            }, aY = !1), vY = 0)
          },
          iY = YY => {
            const rY = OY.get(YY.pointerId);
            if (!rY) return;
            const FY = RY(YY);
            if (OY.set(YY.pointerId, FY), 2 === OY.size) {
              const [YY, rY] = [...OY.values()], DY = Math.hypot(YY.x - rY.x, YY.y - rY.y);
              if (vY > 0) {
                const FY = DY / vY;
                IY((DY => PA(DY, FY, (YY.x + rY.x) / 2, (YY.y + rY.y) / 2, AY())))
              }
              return vY = DY, void(aY = !0)
            }!aY && Math.hypot(YY.clientX - gY.x, YY.clientY - gY.y) < 4 || (aY || (aY = !0, DY.setPointerCapture(YY.pointerId)), IY((YY => function(YY, rY, DY) {
              let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pA;
              return nA({
                zoom: YY.zoom,
                x: YY.x + rY,
                y: YY.y + DY
              }, FY)
            }(YY, FY.x - rY.x, FY.y - rY.y, AY()))))
          },
          yY = YY => {
            OY.delete(YY.pointerId), vY = 0
          },
          QY = YY => {
            aY && (YY.stopPropagation(), YY.preventDefault(), aY = !1)
          },
          oY = new ResizeObserver((() => {
            IY((YY => nA(YY, AY())))
          }));
        return oY.observe(DY), DY.addEventListener("wheel", uY, {
          passive: !1
        }), DY.addEventListener("pointerdown", sY), DY.addEventListener("pointermove", iY), DY.addEventListener("pointerup", yY), DY.addEventListener("pointercancel", yY), DY.addEventListener("click", QY, !0), () => {
          oY.disconnect(), DY.removeEventListener("wheel", uY), DY.removeEventListener("pointerdown", sY), DY.removeEventListener("pointermove", iY), DY.removeEventListener("pointerup", yY), DY.removeEventListener("pointercancel", yY), DY.removeEventListener("click", QY, !0)
        }
      }), [YY, rY, DY, FY]);
      return {
        view: AY,
        zoomBy: rY => {
          const DY = YY.current;
          DY && IY((YY => PA(YY, rY, .5, .5, GA(DY.clientWidth, DY.clientHeight, FY))))
        }
      }
    }

    function LA(YY) {
      var rY, DY, FY, AY;
      let {
        controller: IY,
        navigation: RY
      } = YY;
      const OY = (0, BA.k)(sY, IY.getSnapshot()),
        {
          t: gY
        } = (0, NA.C)(),
        aY = MA(),
        vY = OY.presentation,
        uY = (0, NY.useRef)(null),
        iY = (0, NY.useRef)(null),
        yY = Boolean(OY.open && (null === vY || void 0 === vY ? void 0 : vY.local) && vY.background),
        QY = UA(uY, yY, `${OY.open}|${OY.tab}|${null===vY||void 0===vY||null===(rY=vY.background)||void 0===rY?void 0:rY.geometryKey}`, null !== (DY = null === vY || void 0 === vY || null === (FY = vY.background) || void 0 === FY ? void 0 : FY.ratio) && void 0 !== DY ? DY : 2);
      if (XA(iY, vY, OY.open, QY.view.zoom), !vY || !OY.open) return null;
      const oY = vY.local ? vY.background : null,
        WY = {
          "--map-ratio": String(null !== (AY = null === oY || void 0 === oY ? void 0 : oY.ratio) && void 0 !== AY ? AY : 2),
          backgroundColor: null === oY || void 0 === oY ? void 0 : oY.colour
        },
        EY = {
          "--map-zoom": String(QY.view.zoom),
          transform: `translate(${100*QY.view.x}%, ${100*QY.view.y}%) scale(${QY.view.zoom})`
        };
      return (0, cA.jsx)(hA.e, {
        show: OY.open,
        close: IY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: aY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, cA.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, cA.jsx)("h2", {
                id: "skyblockMapTitle",
                children: gY("skyblockGame:map")
              }), vY.minimap && (0, cA.jsx)("p", {
                children: vY.minimap.caption
              })]
            }), (0, cA.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((YY => (0, cA.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": YY === OY.tab ? "true" : void 0,
                className: EA()({
                  Selected: YY === OY.tab
                }),
                "aria-pressed": YY === OY.tab,
                onClick: () => {
                  IY.selectTab(YY)
                },
                children: gY("local" === YY ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, YY)))
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              onClick: IY.dismiss
            })]
          }), (0, cA.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, cA.jsxs)("div", {
              ref: uY,
              className: EA()("SkyblockMapCanvas", {
                Local: vY.local,
                Overview: !vY.local,
                Zoomed: QY.view.zoom > 1
              }),
              style: WY,
              children: [(0, cA.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: yY ? EY : void 0,
                children: (0, cA.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: iY,
                  children: [oY && (0, cA.jsx)(jA, {
                    className: "SkyblockMapTerrain",
                    imageKey: oY.imageKey,
                    fallbackImageKey: oY.fallbackImageKey,
                    geometryKey: oY.geometryKey,
                    alt: oY.label
                  }), vY.local && (0, cA.jsx)(bA, {
                    mount: RY.display.mountMapSearchArea
                  }), !vY.local && (0, cA.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: vY.connections.map((YY => (0, cA.jsx)("line", {
                      className: EA()({
                        Explored: YY.explored
                      }),
                      x1: YY.start[0],
                      y1: YY.start[1],
                      x2: YY.end[0],
                      y2: YY.end[1]
                    }, YY.id)))
                  }), vY.points.map((YY => {
                    const rY = !vY.local && YY.thumbnail ? CA[YY.thumbnail] : void 0;
                    return (0, cA.jsxs)("div", {
                      className: EA()("SkyblockMapNode", {
                        Current: YY.current
                      }),
                      style: {
                        left: `${YY.position[0]}%`,
                        top: `${YY.position[1]}%`
                      },
                      children: [(0, cA.jsxs)(dA.f, {
                        className: EA()("SkyblockMapPin", {
                          Unknown: !YY.visited,
                          Current: YY.current
                        }),
                        disabled: OY.pending,
                        onClick: () => {
                          IY.travel(YY.travelKind, YY.travelId)
                        },
                        children: [rY && (0, cA.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: rY,
                          alt: ""
                        }), !rY && (0, cA.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, cA.jsx)(HA, {
                            icon: YY.icon
                          })
                        }), (0, cA.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: YY.name
                        })]
                      }), YY.current && (0, cA.jsx)("span", {
                        className: EA()("SkyblockMapHereBadge", {
                          Above: YY.position[1] > 50
                        }),
                        children: gY("skyblockGame:mapYouAreHere")
                      })]
                    }, YY.id)
                  })), vY.portals.map((YY => (0, cA.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${YY.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${YY.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, cA.jsxs)(dA.f, {
                      className: "SkyblockMapPin",
                      disabled: OY.pending,
                      onClick: () => {
                        IY.travel(YY.travelKind, YY.travelId)
                      },
                      children: [(0, cA.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: YY.colour
                        },
                        "aria-hidden": "true",
                        children: (0, cA.jsx)(HA, {
                          icon: YY.icon
                        })
                      }), (0, cA.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: YY.name
                      })]
                    })
                  }, YY.id))), vY.local && (0, cA.jsx)(zA, {
                    controller: RY
                  })]
                })
              }), yY && (0, cA.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, cA.jsx)("button", {
                  type: "button",
                  "aria-label": gY("skyblockGame:mapZoomIn"),
                  disabled: QY.view.zoom >= 12,
                  onClick: () => {
                    QY.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, cA.jsx)("button", {
                  type: "button",
                  "aria-label": gY("skyblockGame:mapZoomOut"),
                  disabled: QY.view.zoom <= 1,
                  onClick: () => {
                    QY.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, cA.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: OY.feedback
              })]
            })
          }), (0, cA.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [vY.progress && (0, cA.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, cA.jsx)("span", {
                children: vY.progress
              }), (0, cA.jsx)(wA, {
                percent: vY.percent,
                label: vY.progress
              })]
            }), vY.noLandmarks && (0, cA.jsx)("span", {
              children: gY("skyblockGame:mapNoLandmarks")
            }), vY.canTravel && (0, cA.jsx)("span", {
              className: "SkyblockMapHint",
              children: gY("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function tA(YY) {
      let {
        view: rY,
        controller: DY,
        navigation: FY
      } = YY;
      const {
        t: AY
      } = (0, NA.C)(), {
        isTouchScreen: IY
      } = (0, mA.j)(["isTouchScreen"]);
      return (0, cA.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": AY("skyblockGame:mapLocal"),
        children: [IY && (0, cA.jsx)(dA.f, {
          className: "SkyblockMinimapOpen",
          onClick: DY.showLocal,
          children: AY("skyblockGame:map")
        }), (0, cA.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: rY.colour
          },
          children: [(0, cA.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: FY.display.mountTerrain,
            style: {
              width: rY.width,
              height: rY.height
            },
            children: [(0, cA.jsx)(jA, {
              imageKey: rY.imageKey,
              fallbackImageKey: rY.fallbackImageKey,
              geometryKey: rY.geometryKey,
              alt: rY.label
            }), (0, cA.jsx)(bA, {
              mount: FY.display.mountMinimapSearchArea
            }), rY.markers.map((YY => (0, cA.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${YY.position[0]}%`,
                top: `${YY.position[1]}%`,
                color: YY.colour
              },
              title: YY.name,
              children: (0, cA.jsx)(HA, {
                icon: YY.icon
              })
            }, YY.id)))]
          }), (0, cA.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: AY("skyblockGame:mapYouAreHere"),
            children: (0, cA.jsx)(HA, {
              icon: "player"
            })
          })]
        }), (0, cA.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: rY.caption
        })]
      })
    }

    function YI(YY) {
      let {
        controller: rY
      } = YY;
      return (0, cA.jsxs)("div", {
        className: "SkyblockCompass",
        ref: rY.display.mountCompass,
        children: [(0, cA.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, cA.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, cA.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function rI(YY) {
      let {
        controller: rY,
        surface: DY
      } = YY;
      const {
        t: FY
      } = (0, NA.C)(), AY = (0, BA.k)(FD, rY.getSnapshot()), IY = MA();
      return AY.enabled ? (0, cA.jsxs)(cA.Fragment, {
        children: ["hud" === DY && (0, cA.jsx)(VA.e, {
          placement: "statBars",
          children: AY.hud && (0, cA.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": AY.hud.colour
            },
            children: [(0, cA.jsx)(wA, {
              percent: AY.hud.skill.percent,
              label: AY.hud.skill.xp,
              levelUpToken: AY.hud.levelUpToken,
              colour: AY.hud.colour
            }), (0, cA.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, cA.jsxs)("span", {
                children: [AY.hud.skill.label, " \xb7 ", AY.hud.skill.level]
              }), (0, cA.jsx)("span", {
                children: AY.hud.gain
              })]
            })]
          })
        }), "hud" === DY && (0, cA.jsx)(VA.e, {
          children: AY.hud && (0, cA.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, cA.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, cA.jsx)("strong", {
                children: AY.hud.skill.label
              }), (0, cA.jsx)("span", {
                children: AY.hud.gain
              })]
            }), (0, cA.jsx)(wA, {
              percent: AY.hud.skill.percent,
              label: AY.hud.skill.xp,
              levelUpToken: AY.hud.levelUpToken,
              colour: AY.hud.colour
            }), (0, cA.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, cA.jsx)("span", {
                children: AY.hud.skill.level
              }), (0, cA.jsx)("span", {
                children: AY.hud.skill.xp
              })]
            })]
          })
        }), "menu" === DY && (0, cA.jsx)(hA.e, {
          show: AY.open,
          close: rY.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, cA.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: IY,
            onKeyDown: JA,
            children: [(0, cA.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, cA.jsxs)("div", {
                children: [(0, cA.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: FY("skyblockGame:skills")
                }), (0, cA.jsx)("p", {
                  children: FY("skyblockGame:skillsIntro")
                })]
              }), (0, cA.jsx)(dA.k, {
                padIgnore: !0,
                onClick: rY.dismiss
              })]
            }), (0, cA.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, cA.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: AY.skills.map((YY => (0, cA.jsxs)(dA.f, {
                  className: EA()("SkyblockSkillCard", {
                    Selected: YY.selected
                  }),
                  ariaPressed: YY.selected,
                  onClick: () => {
                    rY.select(YY.id)
                  },
                  children: [(0, cA.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, cA.jsx)(lA.c, {
                      itemName: YY.icon,
                      amount: 0
                    })
                  }), (0, cA.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, cA.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, cA.jsx)("strong", {
                        children: YY.label
                      }), (0, cA.jsx)("span", {
                        children: YY.level
                      })]
                    }), (0, cA.jsx)(wA, {
                      percent: YY.percent,
                      label: `${YY.label}: ${YY.xp}`
                    }), (0, cA.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: YY.xp
                    })]
                  })]
                }, YY.id)))
              }), AY.detail && (0, cA.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, cA.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, cA.jsx)(lA.c, {
                    itemName: AY.detail.icon,
                    amount: 0
                  })
                }), (0, cA.jsx)("h3", {
                  children: AY.detail.label
                }), (0, cA.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: AY.detail.level
                }), (0, cA.jsx)("p", {
                  children: AY.detail.description
                }), (0, cA.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, cA.jsx)("strong", {
                    children: FY("skyblockGame:currentBenefit")
                  }), (0, cA.jsx)("span", {
                    children: AY.detail.benefit
                  })]
                }), (0, cA.jsx)(wA, {
                  percent: AY.detail.percent,
                  label: AY.detail.xp
                }), (0, cA.jsx)("p", {
                  children: AY.detail.xp
                }), (0, cA.jsx)("h4", {
                  children: FY("skyblockGame:earnXp")
                }), (0, cA.jsx)("ul", {
                  children: AY.detail.sources.map((YY => (0, cA.jsx)("li", {
                    children: YY
                  }, YY)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var DI = DY(1354),
      FI = DY(4410),
      AI = DY(332);

    function II(YY) {
      let {
        item: rY
      } = YY;
      return (0, cA.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, cA.jsx)(lA.c, {
          itemName: rY,
          amount: 0
        })
      })
    }

    function RI(YY) {
      let {
        name: rY,
        percent: DY,
        progress: FY
      } = YY;
      return (0, cA.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, cA.jsx)(wA, {
          percent: DY,
          label: `${(0,AI.tb)(rY)}: ${FY}`
        }), (0, cA.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: FY
        })]
      })
    }

    function OI(YY) {
      let {
        subquests: rY,
        showDescriptions: DY = !1
      } = YY;
      return (0, cA.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: rY.map((YY => {
          const rY = DY && "completed" === YY.status,
            FY = (0, cA.jsxs)("li", {
              className: EA()("SkyblockQuestStep", YY.status, {
                JustFinished: YY.justFinished,
                JustUnlocked: YY.justUnlocked
              }),
              tabIndex: rY ? 0 : void 0,
              children: [null !== YY.iconItem && (0, cA.jsx)(II, {
                item: YY.iconItem
              }), null === YY.iconItem && (0, cA.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === YY.status ? "\u2713" : "skipped" === YY.status ? "\u2212" : "\u25cb"
              }), (0, cA.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, cA.jsx)("strong", {
                  children: (0, cA.jsx)(FI.c, {
                    text: YY.name
                  })
                }), DY && !rY && (0, cA.jsx)("span", {
                  children: (0, cA.jsx)(FI.c, {
                    text: YY.description
                  })
                }), null !== YY.barPercent && (0, cA.jsx)(RI, {
                  name: YY.name,
                  percent: YY.barPercent,
                  progress: YY.progress
                }), null === YY.barPercent && !rY && (0, cA.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: YY.statusLabel
                })]
              })]
            }, YY.id);
          return rY ? (0, cA.jsx)(DI.g, {
            delayShow: 200,
            tooltipInner: (0, cA.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, cA.jsx)("span", {
                children: (0, cA.jsx)(FI.c, {
                  text: YY.description
                })
              }), (0, cA.jsx)("strong", {
                children: YY.statusLabel
              })]
            }),
            children: FY
          }, YY.id) : FY
        }))
      })
    }

    function gI(YY) {
      let {
        quest: rY,
        select: DY
      } = YY;
      const {
        t: FY
      } = (0, NA.C)(), AY = rY.focusStep;
      return (0, cA.jsxs)(dA.f, {
        className: EA()("SkyblockQuestCard", {
          Selected: rY.selected,
          Tracked: rY.tracked
        }),
        onClick: () => {
          DY(rY.id)
        },
        children: [(0, cA.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, cA.jsx)("strong", {
            children: (0, cA.jsx)(FI.c, {
              text: rY.name
            })
          }), rY.tracked && (0, cA.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: FY("skyblockGame:currentQuest")
          })]
        }), AY && (0, cA.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== AY.iconItem && (0, cA.jsx)(II, {
            item: AY.iconItem
          }), (0, cA.jsx)(RI, {
            name: AY.name,
            percent: AY.barPercent,
            progress: AY.progress
          })]
        }), (0, cA.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: rY.progress
        })]
      })
    }

    function aI(YY) {
      let {
        controller: rY,
        surface: DY
      } = YY;
      const FY = (0, BA.k)(OD, rY.getSnapshot()),
        {
          t: AY
        } = (0, NA.C)(),
        IY = MA();
      return FY.enabled ? (0, cA.jsxs)(cA.Fragment, {
        children: ["hud" === DY && (0, cA.jsx)(cA.Fragment, {
          children: FY.tracked && (0, cA.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: RD,
            children: (0, cA.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [FY.trackedStepPulse > 0 && (0, cA.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, FY.trackedStepPulse), (0, cA.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: AY("skyblockGame:currentQuest")
              }), (0, cA.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, cA.jsx)("strong", {
                  children: (0, cA.jsx)(FI.c, {
                    text: FY.tracked.name
                  })
                }), null !== FY.tracked.clock && (0, cA.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: FY.tracked.clock
                })]
              }), (0, cA.jsx)(OI, {
                subquests: FY.tracked.subquests
              })]
            })
          })
        }), "menu" === DY && (0, cA.jsx)(hA.e, {
          show: FY.open,
          close: rY.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, cA.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: IY,
            onKeyDown: JA,
            children: [(0, cA.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, cA.jsx)("div", {
                children: (0, cA.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: AY("skyblockGame:quests")
                })
              }), (0, cA.jsx)(dA.k, {
                padIgnore: !0,
                onClick: rY.dismiss
              })]
            }), (0, cA.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, cA.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, cA.jsx)("h3", {
                  children: AY("skyblockGame:current")
                }), 0 === FY.active.length && (0, cA.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: AY("skyblockGame:noActiveQuests")
                }), FY.active.map((YY => (0, cA.jsx)(gI, {
                  quest: YY,
                  select: rY.select
                }, YY.id))), (0, cA.jsx)("h3", {
                  children: (0, cA.jsxs)("button", {
                    type: "button",
                    className: EA()("SkyblockQuestSectionToggle", {
                      Expanded: FY.completedExpanded
                    }),
                    "aria-expanded": FY.completedExpanded,
                    onClick: rY.toggleCompleted,
                    children: [(0, cA.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), AY("skyblockGame:completed"), (0, cA.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: FY.completed.length
                    })]
                  })
                }), FY.completedExpanded && 0 === FY.completed.length && (0, cA.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: AY("skyblockGame:noCompletedQuests")
                }), FY.completedExpanded && FY.completed.map((YY => (0, cA.jsx)(gI, {
                  quest: YY,
                  select: rY.select
                }, YY.id)))]
              }), FY.detail && (0, cA.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [FY.detail.completed && (0, cA.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: AY("skyblockGame:completedQuest")
                }), (0, cA.jsx)("h3", {
                  children: (0, cA.jsx)(FI.c, {
                    text: FY.detail.name
                  })
                }), (0, cA.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, cA.jsx)(FI.c, {
                    text: FY.detail.description
                  })
                }), (0, cA.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [FY.detail.progress, null !== FY.detail.clock && (0, cA.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: FY.detail.clock
                  })]
                }), (0, cA.jsx)(OI, {
                  subquests: FY.detail.subquests,
                  showDescriptions: !0
                }), FY.detail.tracked && (0, cA.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: FY.detail.trackLabel
                }), !FY.detail.completed && !FY.detail.tracked && (0, cA.jsx)(dA.n, {
                  onClick: rY.trackSelected,
                  disabled: !FY.detail.canTrack,
                  children: FY.detail.trackLabel
                }), FY.detail.canViewDialogue && (0, cA.jsx)(dA.f, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: rY.viewDialogue,
                  children: AY("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var vI = DY(1098),
      uI = DY(2368);

    function sI(YY, rY, DY, FY, AY) {
      const IY = YY => "linear" === AY ? YY : {
          AA: AY,
          point: YY
        },
        RY = {};
      for (const [OY, gY] of FY)
        for (const [rY, DY] of Object.entries(YY(OY, gY, IY))) RY[rY] ??= {
          timeline: []
        }, RY[rY].timeline.push(DY);
      return {
        tF: rY,
        loop: DY,
        rA: RY
      }
    }
    const iI = .547,
      yI = .022,
      QI = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      oI = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function WI(YY, rY, DY) {
      const {
        drop: FY = 0,
        shift: AY = 0,
        torso: IY = 0,
        nod: RY = 0,
        tilt: OY = 0,
        legs: gY = [0, 0],
        arms: aY = 0,
        spread: vY = 0
      } = rY, uY = iI * Math.cos(IY) - yI * Math.sin(IY), sY = iI * Math.sin(IY) + yI * Math.cos(IY), iY = DY([0, -FY, AY]);
      return {
        LowerBody: {
          timeFraction: YY,
          position: iY,
          rotation: DY([0, 0, 0])
        },
        UpperBody: {
          timeFraction: YY,
          position: iY,
          rotation: DY([IY, 0, OY])
        },
        HeadMesh: {
          timeFraction: YY,
          position: DY([0, uY - iI - FY, sY - yI + AY]),
          rotation: DY([IY + RY, 0, OY])
        },
        LegLeftMesh: {
          timeFraction: YY,
          rotation: DY([gY[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: YY,
          rotation: DY([gY[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: YY,
          rotation: DY([aY, 0, vY])
        },
        ArmRightMesh: {
          timeFraction: YY,
          rotation: DY([aY, 0, -vY])
        }
      }
    }

    function EI(YY, rY, DY) {
      return sI(WI, YY, rY, DY, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function mI(YY) {
      return "number" === typeof YY ? [YY, YY] : YY
    }

    function VI(YY, rY, DY) {
      const {
        rise: FY = 0,
        shift: AY = 0,
        torso: IY = 0,
        twist: RY = 0,
        tilt: OY = 0,
        nod: gY = 0,
        cock: aY = 0,
        arms: vY = 0,
        spread: uY = 0
      } = rY, [sY, iY] = mI(vY), [yY, QY] = mI(uY);
      return {
        TorsoNode: {
          timeFraction: YY,
          position: DY([0, FY, AY]),
          rotation: DY([IY, RY, OY])
        },
        HeadMesh: {
          timeFraction: YY,
          rotation: DY([gY, 0, aY])
        },
        ArmLeftMesh: {
          timeFraction: YY,
          rotation: DY([sY, 0, yY])
        },
        ArmRightMesh: {
          timeFraction: YY,
          rotation: DY([iY, 0, -QY])
        }
      }
    }
    const SI = [1.0625, -1, 0];

    function lI(YY) {
      return "number" === typeof YY ? [YY, YY] : YY
    }

    function TI(YY, rY, DY) {
      const {
        drop: FY = 0,
        shift: AY = 0,
        torso: IY = 0,
        tilt: RY = 0,
        nod: OY = 0,
        cock: gY = 0,
        legs: aY = [0, 0],
        arms: vY = 0,
        spread: uY = 0
      } = rY, [sY, iY] = lI(vY), [yY, QY] = lI(uY), oY = -IY, WY = -RY, [EY, mY, VY] = function(YY, rY) {
        const [DY, FY, AY] = [-SI[0], SI[1], -SI[2]], IY = DY * Math.cos(rY) - FY * Math.sin(rY), RY = DY * Math.sin(rY) + FY * Math.cos(rY);
        return [IY - DY, -(RY * Math.cos(YY) - AY * Math.sin(YY) - FY), RY * Math.sin(YY) + AY * Math.cos(YY) - AY]
      }(oY, WY), SY = DY([0, -FY, AY]);
      return {
        TorsoNode: {
          timeFraction: YY,
          position: DY([EY, mY - FY, VY + AY]),
          rotation: DY([oY, 0, WY])
        },
        HeadMesh: {
          timeFraction: YY,
          rotation: DY([-OY, 0, -gY])
        },
        ArmLeftMesh: {
          timeFraction: YY,
          rotation: DY([-sY, 0, -yY])
        },
        ArmRightMesh: {
          timeFraction: YY,
          rotation: DY([-iY, 0, QY])
        },
        LegLeftMesh: {
          timeFraction: YY,
          position: SY,
          rotation: DY([-aY[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: YY,
          position: SY,
          rotation: DY([-aY[1], 0, 0])
        }
      }
    }
    var eI = DY(36896),
      NI = DY(37858),
      BI = DY(38003);

    function cI(YY, rY, DY) {
      var FY, AY;
      const IY = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return YY + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - YY) * DY
        },
        [RY, OY] = null !== (FY = YY.legs) && void 0 !== FY ? FY : [0, 0],
        [gY, aY] = null !== (AY = rY.legs) && void 0 !== AY ? AY : [0, 0];
      return {
        drop: IY(YY.drop, rY.drop),
        shift: IY(YY.shift, rY.shift),
        torso: IY(YY.torso, rY.torso),
        nod: IY(YY.nod, rY.nod),
        tilt: IY(YY.tilt, rY.tilt),
        legs: [IY(RY, gY), IY(OY, aY)],
        arms: IY(YY.arms, rY.arms),
        spread: IY(YY.spread, rY.spread)
      }
    }
    const KI = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      HI = EI(4400, !0, [
        [0, KI],
        [.16, {
          ...KI,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, KI],
        [.44, {
          ...KI,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, cI(KI, QI, .7)],
        [.66, cI(KI, QI, .78)],
        [.74, cI(KI, oI, .65)],
        [.86, {
          ...KI,
          drop: .14
        }],
        [1, KI]
      ], "catmull-rom-spline"),
      zI = {
        ...KI,
        drop: .14,
        torso: .3,
        spread: .4
      },
      ZI = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      CI = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      fI = {
        caveGolem: HI,
        magmaGolem: EI(3600, !0, [
          [0, zI],
          [.12, {
            ...zI,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...zI,
            tilt: -.08
          }],
          [.4, {
            ...zI,
            tilt: .06,
            drop: .11
          }],
          [.52, cI(zI, QI, .9)],
          [.62, cI(zI, oI, .8)],
          [.7, cI(zI, oI, .45)],
          [.78, cI(zI, oI, .85)],
          [.9, {
            ...zI,
            drop: .17
          }],
          [1, zI]
        ], "catmull-rom-spline"),
        frostWraith: function(YY, rY, DY) {
          return sI(VI, YY, rY, DY, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, ZI],
          [.14, {
            ...ZI,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...ZI,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...ZI,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...ZI,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...ZI,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...ZI,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...ZI,
            rise: .16,
            tilt: -.04
          }],
          [1, ZI]
        ], "catmull-rom-spline"),
        tikiTerror: function(YY, rY, DY) {
          return sI(TI, YY, rY, DY, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, CI],
          [.16, {
            ...CI,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, CI],
          [.44, {
            ...CI,
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
            ...CI,
            drop: .1
          }],
          [1, CI]
        ], "catmull-rom-spline")
      },
      jI = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      hI = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      dI = Object.fromEntries(Object.entries(fI).map((YY => {
        let [rY, DY] = YY;
        return [rY, (0, BI.c)((0, eI.f)(DY), rY)]
      })));

    function JI(YY) {
      const rY = function(YY) {
        var rY;
        const DY = (0, NI.e)(YY).poseRig;
        return null !== (rY = hI[YY]) && void 0 !== rY ? rY : void 0 === DY ? null : jI[DY]
      }(YY);
      return null === rY ? null : dI[rY]
    }

    function MI(YY) {
      return {
        "--difficulty-colour": YY
      }
    }
    const wI = (0, NY.lazy)((() => (0, uI.d)(DY.e(213).then((() => DY(40578))), (YY => YY.MobPreview))));

    function bI(YY) {
      var rY, DY, FY;
      let {
        picker: AY,
        controller: IY
      } = YY;
      const {
        t: RY
      } = (0, NA.C)(), OY = MA(), {
        page: gY
      } = AY;
      return (0, cA.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: OY,
        onKeyDown: YY => {
          "ArrowLeft" === YY.key ? (YY.preventDefault(), YY.stopPropagation(), IY.previous()) : "ArrowRight" === YY.key ? (YY.preventDefault(), YY.stopPropagation(), IY.next()) : JA(YY)
        },
        style: MI(gY.colour),
        children: [(0, cA.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, cA.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: AY.dungeonName
          }), (0, cA.jsx)(dA.k, {
            padIgnore: !0,
            onClick: IY.dismiss
          })]
        }), (0, cA.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, cA.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, cA.jsx)(dA.f, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !AY.canPrevious,
              onClick: IY.previous,
              children: (0, cA.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, cA.jsx)(vI.e, {
                  name: "angle-up"
                })
              })
            }), (0, cA.jsxs)("div", {
              className: EA()("SkyblockBossPickerBoss", {
                Locked: !gY.unlocked
              }),
              children: [null !== gY.bossMobType && (0, cA.jsx)(NY.Suspense, {
                fallback: (0, cA.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, cA.jsx)(wI, {
                  className: "SkyblockBossPickerModel",
                  mobType: gY.bossMobType,
                  variation: gY.bossMobVariation,
                  animation: null !== (rY = JI(gY.bossMobType)) && void 0 !== rY ? rY : void 0
                })
              }), null === gY.bossMobType && (0, cA.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, cA.jsx)(dA.f, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !AY.canNext,
              onClick: IY.next,
              children: (0, cA.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, cA.jsx)(vI.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, cA.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, cA.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [gY.beaten && (0, cA.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), gY.label]
            }), (0, cA.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (DY = gY.bossName) && void 0 !== DY ? DY : "???"
            }), (0, cA.jsxs)("span", {
              className: EA()("SkyblockBossPickerRecord", {
                Locked: null !== gY.lockedHint
              }),
              children: [null !== gY.lockedHintHighlight && (0, cA.jsxs)(cA.Fragment, {
                children: [gY.lockedHintHighlight.before, (0, cA.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: MI(gY.lockedHintHighlight.colour),
                  children: [null !== gY.lockedHintHighlight.icon && (0, cA.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, cA.jsx)(lA.c, {
                      itemName: gY.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), gY.lockedHintHighlight.name]
                }), gY.lockedHintHighlight.after]
              }), null === gY.lockedHintHighlight && (null !== (FY = gY.lockedHint) && void 0 !== FY ? FY : gY.summary)]
            })]
          }), (0, cA.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: AY.pages.map((YY => (0, cA.jsx)("span", {
              className: EA()("SkyblockBossPickerDot", {
                Current: YY.current,
                Locked: !YY.unlocked
              }),
              style: MI(YY.colour)
            }, YY.difficulty)))
          }), (0, cA.jsx)(dA.p, {
            className: "SkyblockBossPickerFight",
            disabled: !gY.unlocked,
            onClick: IY.enter,
            children: RY("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function XI(YY) {
      let {
        dungeon: rY,
        select: DY
      } = YY;
      return (0, cA.jsxs)(dA.f, {
        className: EA()("SkyblockDungeonCard", {
          Selected: rY.selected
        }),
        onClick: () => {
          DY(rY.id)
        },
        children: [(0, cA.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, cA.jsx)("strong", {
            children: rY.name
          }), (0, cA.jsx)("span", {
            children: rY.beatenSummary
          })]
        }), (0, cA.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: rY.difficulties.map((YY => (0, cA.jsxs)("span", {
            className: EA()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: YY.beaten
            }),
            style: MI(YY.colour),
            title: YY.summary,
            children: [YY.beaten && (0, cA.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), YY.label]
          }, YY.difficulty)))
        })]
      })
    }

    function qI(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(uD, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = MA();
      return DY.enabled ? (0, cA.jsxs)(hA.e, {
        show: DY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [DY.picker && (0, cA.jsx)(bI, {
          picker: DY.picker,
          controller: rY
        }), !DY.picker && (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: AY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: FY("skyblockGame:dungeons")
              }), (0, cA.jsx)("p", {
                children: FY("skyblockGame:dungeonsIntro")
              })]
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              onClick: rY.dismiss
            })]
          }), (0, cA.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, cA.jsx)("div", {
              className: "SkyblockDungeonList",
              children: DY.dungeons.map((YY => (0, cA.jsx)(XI, {
                dungeon: YY,
                select: rY.select
              }, YY.id)))
            }), DY.detail && (0, cA.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, cA.jsx)("h3", {
                children: DY.detail.name
              }), (0, cA.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: DY.detail.difficulties.map((YY => (0, cA.jsxs)("li", {
                  className: EA()("SkyblockDungeonRecord", {
                    Beaten: YY.beaten
                  }),
                  children: [(0, cA.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: MI(YY.colour),
                    children: [YY.beaten && (0, cA.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), YY.label]
                  }), (0, cA.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: YY.summary
                  })]
                }, YY.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function pI(YY) {
      let {
        collection: rY,
        select: DY
      } = YY;
      return (0, cA.jsxs)(dA.f, {
        className: EA()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: rY.selected,
          Locked: rY.locked
        }),
        ariaPressed: rY.selected,
        onClick: () => {
          DY(rY.id)
        },
        children: [(0, cA.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, cA.jsx)(lA.c, {
            itemName: rY.icon,
            amount: 0
          })
        }), (0, cA.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, cA.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, cA.jsx)("strong", {
              children: rY.name
            }), (0, cA.jsx)("span", {
              children: rY.tier
            })]
          }), (0, cA.jsx)(wA, {
            percent: rY.percent,
            label: `${rY.name}: ${rY.progress}`
          }), (0, cA.jsx)("span", {
            className: "SkyblockSkillXp",
            children: rY.progress
          })]
        })]
      })
    }

    function kI(YY) {
      let {
        collection: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)();
      return (0, cA.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, cA.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, cA.jsx)(lA.c, {
            itemName: rY.icon,
            amount: 0
          })
        }), (0, cA.jsx)("h3", {
          children: rY.name
        }), (0, cA.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: rY.tier
        }), (0, cA.jsx)("p", {
          children: rY.locked ? DY("skyblockGame:collectionLocked") : rY.count
        }), null !== rY.nextReward && (0, cA.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, cA.jsx)("strong", {
            children: DY("skyblockGame:collectionNextReward")
          }), (0, cA.jsx)("span", {
            children: rY.nextReward
          })]
        }), (0, cA.jsx)(wA, {
          percent: rY.percent,
          label: rY.progress
        }), (0, cA.jsx)("p", {
          children: rY.progress
        })]
      })
    }

    function GI(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(CD, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = MA();
      return DY.enabled ? (0, cA.jsx)(hA.e, {
        show: DY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: AY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: FY("skyblockGame:collections")
              }), (0, cA.jsxs)("p", {
                children: [FY("skyblockGame:collectionsIntro"), " ", DY.tiersUnlocked]
              })]
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              onClick: rY.dismiss
            })]
          }), (0, cA.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: DY.categories.map((YY => (0, cA.jsxs)(dA.f, {
              className: EA()("SkyblockCollectionCategory", {
                Selected: YY.selected
              }),
              ariaPressed: YY.selected,
              padTabSelected: YY.selected,
              onClick: () => {
                rY.selectCategory(YY.id)
              },
              children: [(0, cA.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, cA.jsx)(lA.c, {
                  itemName: YY.icon,
                  amount: 0
                })
              }), (0, cA.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, cA.jsx)("strong", {
                  children: YY.label
                }), (0, cA.jsx)("span", {
                  children: YY.tiers
                })]
              })]
            }, YY.id)))
          }), (0, cA.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, cA.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: DY.collections.map((YY => (0, cA.jsx)(pI, {
                collection: YY,
                select: rY.select
              }, YY.id)))
            }), DY.detail && (0, cA.jsx)(kI, {
              collection: DY.detail
            })]
          })]
        })
      }) : null
    }
    const xI = ["completed", "active", "available", "locked"],
      nI = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function PI(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(kD, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = MA();
      return DY.enabled ? (0, cA.jsx)(hA.e, {
        show: DY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: AY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: FY("skyblockDevQuests:title")
              }), (0, cA.jsx)("p", {
                children: FY("skyblockDevQuests:intro")
              })]
            }), (0, cA.jsx)(dA.k, {
              onClick: rY.dismiss
            })]
          }), (0, cA.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [xI.map((YY => (0, cA.jsx)("span", {
              className: EA()("SkyblockQuestGraphLegendState", YY),
              children: FY(`skyblockDevQuests:state_${YY}`)
            }, YY))), nI.map((YY => (0, cA.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, cA.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, cA.jsx)("line", {
                  className: EA()("SkyblockQuestGraphEdge", YY),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), FY(`skyblockDevQuests:edge_${YY}`)]
            }, YY)))]
          }), (0, cA.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, cA.jsxs)("div", {
              className: EA()("SkyblockQuestGraphCanvas", {
                Planning: DY.planning
              }),
              style: {
                width: DY.width,
                height: DY.height
              },
              children: [(0, cA.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: DY.width,
                height: DY.height,
                "aria-hidden": "true",
                children: [(0, cA.jsx)("defs", {
                  children: (0, cA.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, cA.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), DY.edges.map((YY => (0, cA.jsx)("path", {
                  className: EA()("SkyblockQuestGraphEdge", YY.kind, {
                    InPlan: YY.inPlan
                  }),
                  d: YY.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, YY.key)))]
              }), DY.nodes.map((YY => (0, cA.jsxs)("button", {
                type: "button",
                className: EA()("SkyblockQuestGraphNode", YY.state, {
                  InPlan: YY.inPlan,
                  Hovered: YY.hovered
                }),
                style: {
                  left: YY.left,
                  top: YY.top,
                  width: 190,
                  height: 52
                },
                title: YY.id,
                onMouseEnter: () => {
                  rY.hover(YY.id)
                },
                onMouseLeave: () => {
                  rY.hover(null)
                },
                onFocus: () => {
                  rY.hover(YY.id)
                },
                onBlur: () => {
                  rY.hover(null)
                },
                onClick: () => {
                  rY.jump(YY.id)
                },
                children: [(0, cA.jsx)("strong", {
                  children: YY.name
                }), (0, cA.jsx)("span", {
                  children: YY.detail
                })]
              }, YY.id)))]
            })
          })]
        })
      }) : null
    }
    const UI = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      LI = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${IF}ms`,
        "--forge-duration": "2150ms"
      },
      tI = Array.from({
        length: 18
      }, ((YY, rY) => ({
        "--ember-left": `${(4+92*(.618034*rY%1)).toFixed(1)}%`,
        "--ember-size": 3 + rY % 3 * 2 + "px",
        "--ember-drift": 14 * (rY % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*rY%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*rY%8).toFixed(2)}s`
      })));

    function YR(YY) {
      if (YY.style.removeProperty("--part-size"), null === YY.parentElement || "wrap" === getComputedStyle(YY.parentElement).flexWrap) return;
      const rY = [...YY.children],
        DY = getComputedStyle(YY),
        FY = parseFloat(DY.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        AY = (YY.clientHeight - parseFloat(DY.rowGap) * (rY.length - 1)) / rY.length,
        IY = rY.map((YY => {
          const rY = getComputedStyle(YY),
            DY = YY.querySelector("h3"),
            IY = YY.querySelector(".SkyblockForgeParts");
          if (null === DY || null === IY) return FY;
          const RY = AY - parseFloat(rY.paddingTop) - parseFloat(rY.paddingBottom) - DY.offsetHeight - parseFloat(getComputedStyle(DY).marginBottom),
            OY = parseFloat(getComputedStyle(IY).columnGap),
            gY = IY.children.length;
          let aY = 0;
          for (let FY = 1; FY <= gY; FY++) {
            const YY = Math.ceil(gY / FY);
            aY = Math.max(aY, Math.min((IY.clientWidth - OY * (FY - 1)) / FY, (RY - OY * (YY - 1)) / YY))
          }
          return aY
        }));
      YY.style.setProperty("--part-size", `${Math.floor(Math.max(FY,Math.min(...IY)))}px`)
    }

    function rR(YY) {
      var rY, DY, FY, IY, RY;
      let {
        controller: OY
      } = YY;
      const gY = (0, BA.k)(sF, OY.getSnapshot()),
        {
          t: aY
        } = (0, NA.C)(),
        vY = MA(),
        uY = function() {
          const YY = (0, NY.useRef)(null),
            rY = (0, NY.useRef)(null);
          return (0, NY.useLayoutEffect)((() => {
            null !== YY.current && YR(YY.current)
          })), (0, NY.useCallback)((DY => {
            var FY;
            null === (FY = rY.current) || void 0 === FY || FY.disconnect(), rY.current = null, YY.current = DY, null !== DY && (rY.current = new ResizeObserver((() => {
              YR(DY)
            })), rY.current.observe(DY))
          }), [])
        }(),
        sY = function(YY) {
          const rY = (0, NY.useRef)(null);
          return (0, NY.useLayoutEffect)((() => {
            const YY = rY.current;
            if (null !== YY) {
              YY.style.removeProperty("font-size");
              for (let rY = 1.7; rY > 1.1 && YY.scrollWidth > YY.clientWidth; rY -= .1) YY.style.fontSize = rY - .1 + "rem"
            }
          }), [YY]), (0, NY.useCallback)((YY => {
            rY.current = YY
          }), [])
        }(null === (rY = gY.preview) || void 0 === rY ? void 0 : rY.name),
        iY = (0, NY.useRef)(null),
        yY = (0, NY.useRef)({}),
        QY = gY.forging,
        oY = null !== (DY = null === QY || void 0 === QY ? void 0 : QY.preview.tier) && void 0 !== DY ? DY : 0,
        WY = null !== (FY = null === QY || void 0 === QY ? void 0 : QY.preview.named) && void 0 !== FY && FY,
        EY = (0, NY.useMemo)((() => {
          return null === QY ? null : {
            flames: (YY = oY, rY = WY, Array.from({
              length: 26 + 6 * YY + (rY ? 20 : 0)
            }, ((YY, rY) => {
              const DY = rY < 6,
                FY = Math.random() * Math.PI * 2,
                AY = DY ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                IY = Math.cos(FY) * AY,
                RY = Math.sin(FY) * AY - 2 - 3 * Math.random(),
                OY = Math.random(),
                [gY, aY, vY] = DY ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : OY < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : OY < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [OY < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": gY,
                "--x0": `${(.15*IY).toFixed(2)}rem`,
                "--y0": `${(.15*RY).toFixed(2)}rem`,
                "--x": `${IY.toFixed(2)}rem`,
                "--y": `${RY.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${aY.toFixed(2)}rem`,
                "--duration": `${Math.round(vY)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: gF(oY, WY)
          };
          var YY, rY
        }), [null === QY || void 0 === QY ? void 0 : QY.id]);
      if (!gY.enabled) return null;
      const mY = gY.preview,
        VY = gY.arriving,
        SY = null !== VY && !VY.sameSword,
        lY = null !== mY && (0, cA.jsx)(lA.c, {
          itemName: mY.baseSword,
          amount: 0,
          enchantmentTier: mY.enchantmentTier
        });
      return (0, cA.jsx)(hA.e, {
        show: gY.open,
        close: OY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: vY,
          onKeyDown: JA,
          children: [(0, cA.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: tI.map(((YY, rY) => (0, cA.jsx)("span", {
              style: YY
            }, rY)))
          }), (0, cA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: aY("skyblockGame:forgeTitle")
              }), (0, cA.jsx)("p", {
                children: aY("skyblockGame:forgeIntro")
              })]
            }), (0, cA.jsx)(dA.k, {
              onClick: OY.dismiss
            })]
          }), (0, cA.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, cA.jsx)("div", {
              ref: uY,
              className: EA()("SkyblockForgeSlots", {
                Locked: null !== QY
              }),
              children: gY.slots.map((YY => (0, cA.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, cA.jsx)("h3", {
                  children: YY.label
                }), (0, cA.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: YY.parts.map((rY => (0, cA.jsx)("button", {
                    type: "button",
                    className: EA()("SkyblockForgePart", {
                      Selected: rY.selected,
                      Missing: rY.placeholder
                    }),
                    disabled: rY.placeholder,
                    title: rY.placeholder ? aY("skyblockGame:forgePickParts") : rY.itemName,
                    "aria-pressed": rY.selected,
                    onClick: () => {
                      OY.select(YY.kind, rY.material)
                    },
                    children: (0, cA.jsx)(lA.c, {
                      itemName: rY.itemName,
                      amount: rY.owned
                    })
                  }, rY.material)))
                })]
              }, YY.kind)))
            }), (0, cA.jsxs)("div", {
              className: EA()("SkyblockForgeAnvil", {
                Named: null === mY || void 0 === mY ? void 0 : mY.named
              }),
              style: {
                "--tier": null === mY ? "transparent" : AY.nb[mY.enchantmentTier]
              },
              children: [(0, cA.jsxs)("div", {
                className: EA()("SkyblockForgeAltar", {
                  Forging: null !== QY
                }),
                style: null === QY ? void 0 : LI,
                children: [(0, cA.jsxs)("div", {
                  className: EA()("SkyblockForgeMount", {
                    Arrive: null !== VY
                  }),
                  children: [null === mY && (0, cA.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, cA.jsx)(lA.c, {
                      itemName: gY.unformedSword,
                      amount: 0
                    })
                  }), null !== mY && (0, cA.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== mY && null === QY && (0, cA.jsx)("div", {
                    ref: iY,
                    className: "SkyblockForgeFloat",
                    children: (0, cA.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: lY
                    })
                  }), null !== mY && (0, cA.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: OF.map(((YY, rY) => (0, cA.jsx)("span", {
                      className: EA()({
                        Rune: "" !== YY.rune
                      }),
                      style: YY.style,
                      children: YY.rune
                    }, rY)))
                  }), null !== QY && null !== EY && (0, cA.jsxs)(cA.Fragment, {
                    children: [(0, cA.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, cA.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: EY.flames.map(((YY, rY) => (0, cA.jsx)("span", {
                        style: YY
                      }, rY)))
                    }), (0, cA.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: yY.current,
                      children: (0, cA.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: lY
                      })
                    }), (0, cA.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, cA.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (oY >= 4 || WY) && (0, cA.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, cA.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: EY.sparks.map(((YY, rY) => (0, cA.jsx)("span", {
                        style: YY
                      }, rY)))
                    }), (0, cA.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, cA.jsx)("p", {
                  className: EA()("SkyblockForgeStatus", null === (IY = gY.status) || void 0 === IY ? void 0 : IY.tone),
                  children: null === (RY = gY.status) || void 0 === RY ? void 0 : RY.text
                })]
              }), null === mY && (0, cA.jsx)("p", {
                className: EA()("SkyblockForgeName Waiting", {
                  ArriveText: SY
                }),
                children: aY(gY.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== mY && (0, cA.jsx)("h3", {
                ref: sY,
                className: EA()("SkyblockForgeName", {
                  ArriveText: SY
                }),
                title: mY.name,
                children: mY.name
              }), (null === mY || void 0 === mY ? void 0 : mY.named) && (0, cA.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: aY("skyblockGame:forgeSecret")
              }), (0, cA.jsxs)(dA.p, {
                className: "SkyblockForgeButton",
                disabled: !gY.canForge,
                title: null === mY ? void 0 : aY("skyblockGame:forgeCoalOwned", {
                  owned: String(gY.coalOwned)
                }),
                onClick: () => {
                  yY.current = function(YY) {
                    const rY = null === YY ? "none" : getComputedStyle(YY).transform,
                      DY = new DOMMatrixReadOnly("none" === rY ? void 0 : rY);
                    return {
                      "--settle-y": `${DY.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(DY.b,DY.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(iY.current), uF(), OY.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [aY("skyblockGame:forgeButton"), null !== mY && (0, cA.jsxs)("span", {
                  className: EA()("SkyblockForgeCost", {
                    Short: mY.coalShort
                  }),
                  children: [(0, cA.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, cA.jsx)(lA.c, {
                      itemName: UD.d,
                      amount: 0
                    })
                  }), mY.coalCost]
                })]
              })]
            }), (0, cA.jsxs)("div", {
              className: EA()("SkyblockForgeDetails", {
                Named: null === mY || void 0 === mY ? void 0 : mY.named
              }),
              children: [(0, cA.jsx)("p", {
                className: EA()("SkyblockForgeLore", {
                  ArriveText: SY
                }),
                title: null === mY || void 0 === mY ? void 0 : mY.lore,
                children: null === mY || void 0 === mY ? void 0 : mY.lore
              }), (0, cA.jsxs)("dl", {
                className: EA()("SkyblockForgeStats", {
                  ArriveText: SY
                }),
                children: [null === mY && UI.map((YY => (0, cA.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, cA.jsx)("dt", {
                    children: aY(YY)
                  }), (0, cA.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, YY))), null === mY || void 0 === mY ? void 0 : mY.stats.map((YY => (0, cA.jsxs)("div", {
                  className: EA()("SkyblockForgeStat", {
                    Better: YY.better
                  }),
                  children: [(0, cA.jsx)("dt", {
                    children: YY.label
                  }), (0, cA.jsx)("dd", {
                    children: YY.value
                  })]
                }, YY.label)))]
              }), (0, cA.jsx)("ul", {
                className: EA()("SkyblockForgeEffects", {
                  ArriveText: SY
                }),
                children: null === mY || void 0 === mY ? void 0 : mY.effects.map((YY => (0, cA.jsx)("li", {
                  children: YY
                }, YY)))
              })]
            })]
          })]
        })
      })
    }
    const DR = "Doom Rivet",
      FR = "Doom Crest";

    function AR(YY) {
      let {
        itemName: rY,
        amount: DY,
        owned: FY
      } = YY;
      return (0, cA.jsxs)("span", {
        className: EA()("SkyblockSmugglerPrice", {
          Short: DY > FY
        }),
        children: [(0, cA.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, cA.jsx)(lA.c, {
            itemName: rY,
            amount: 0
          })
        }), (0, cA.jsx)("span", {
          children: DY
        })]
      })
    }

    function IR(YY) {
      return YY.justBought ? "skyblockGame:smugglerJustBought" : YY.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function RR(YY) {
      let {
        deal: rY,
        view: DY,
        buy: FY
      } = YY;
      const {
        t: AY
      } = (0, NA.C)();
      return (0, cA.jsxs)("div", {
        className: EA()("SkyblockSmugglerPocket", {
          Bought: rY.justBought,
          Unaffordable: !rY.affordable,
          SoldOut: rY.soldOut && !rY.justBought
        }),
        children: [(0, cA.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, cA.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, cA.jsx)(lA.c, {
            itemName: rY.itemName,
            amount: 0,
            enchantmentTier: rY.enchantmentTier
          }), rY.amount > 1 && (0, cA.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: AY("skyblockGame:smugglerAmount", {
              amount: rY.amount
            })
          })]
        }), (0, cA.jsx)("h3", {
          children: rY.displayName
        }), (0, cA.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, cA.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [rY.rivets > 0 && (0, cA.jsx)(AR, {
              itemName: DR,
              amount: rY.rivets,
              owned: DY.rivetsOwned
            }), rY.crests > 0 && (0, cA.jsx)(AR, {
              itemName: FR,
              amount: rY.crests,
              owned: DY.crestsOwned
            })]
          }), (0, cA.jsx)(dA.f, {
            className: "SkyblockSmugglerBuy",
            disabled: rY.soldOut || !rY.affordable || DY.pending,
            onClick: () => {
              FY(rY.slot)
            },
            children: AY(IR(rY))
          })]
        })]
      }, rY.justBought ? DY.boughtCount : 0)
    }

    function OR(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(QF, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = MA();
      return DY.enabled ? (0, cA.jsx)(hA.e, {
        show: DY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: AY,
          onKeyDown: JA,
          children: [(0, cA.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, cA.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, cA.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: FY("skyblockGame:smugglerTitle")
              }), (0, cA.jsx)("p", {
                children: FY("skyblockGame:smugglerIntro")
              })]
            }), (0, cA.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, cA.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, cA.jsx)(AR, {
                  itemName: DR,
                  amount: DY.rivetsOwned,
                  owned: DY.rivetsOwned
                }), (0, cA.jsx)(AR, {
                  itemName: FR,
                  amount: DY.crestsOwned,
                  owned: DY.crestsOwned
                })]
              }), (0, cA.jsx)(dA.k, {
                onClick: rY.dismiss
              })]
            })]
          }), (0, cA.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: DY.deals.map((YY => (0, cA.jsx)(RR, {
              deal: YY,
              view: DY,
              buy: rY.buy
            }, YY.slot)))
          }), (0, cA.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, cA.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: DY.rotatesText
            }), null !== DY.status && (0, cA.jsx)("span", {
              className: EA()("SkyblockSmugglerStatus", DY.status.tone),
              children: DY.status.text
            })]
          })]
        })
      }) : null
    }

    function gR(YY) {
      let {
        phase: rY,
        className: DY
      } = YY;
      return (0, cA.jsx)("span", {
        className: EA()("SkyblockMoon", `Moon-${rY}`, DY),
        "aria-hidden": "true"
      })
    }

    function aR(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(EF, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)();
      return DY.enabled ? (0, cA.jsx)(VA.e, {
        placement: "statBars",
        children: (0, cA.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: EA()("SkyblockPassageChip", DY.open && "Open"),
          "aria-label": FY("skyblockGame:passageChipLabel", {
            phase: DY.phaseName
          }),
          title: FY("skyblockGame:passageChipLabel", {
            phase: DY.phaseName
          }),
          onMouseDown: YY => {
            YY.preventDefault()
          },
          onClick: rY.toggle,
          children: (0, cA.jsx)(gR, {
            phase: DY.phase
          }, DY.phase)
        })
      }) : null
    }

    function vR(YY) {
      let {
        fish: rY
      } = YY;
      return (0, cA.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, cA.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, cA.jsx)(lA.c, {
            itemName: rY.itemName,
            amount: 0
          })
        }), (0, cA.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, cA.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: rY.displayName
          }), (0, cA.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: rY.where
          })]
        })]
      })
    }

    function uR(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(EF, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = MA();
      return DY.enabled ? (0, cA.jsx)(hA.e, {
        show: DY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: AY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, cA.jsx)(gR, {
              phase: DY.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: FY("skyblockGame:passageTitle")
              }), (0, cA.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: DY.phaseName
              })]
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              onClick: rY.dismiss
            })]
          }), (0, cA.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: FY("skyblockGame:passageIntro")
          }), (0, cA.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, cA.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, cA.jsx)("h3", {
                children: FY("skyblockGame:passageVisiting")
              }), (0, cA.jsx)("ul", {
                className: "SkyblockPassageList",
                children: DY.visitors.map((YY => (0, cA.jsx)(vR, {
                  fish: YY
                }, YY.itemName)))
              })]
            }), (0, cA.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== DY.resting && (0, cA.jsxs)(cA.Fragment, {
                children: [(0, cA.jsx)("h3", {
                  children: FY("skyblockGame:passageResting")
                }), (0, cA.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, cA.jsx)(vR, {
                    fish: DY.resting
                  })
                })]
              }), (0, cA.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, cA.jsx)(gR, {
                  phase: DY.nextPhase
                }), (0, cA.jsx)("span", {
                  children: DY.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function sR() {
      return (0, cA.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((YY => (0, cA.jsx)("i", {
          style: {
            "--sparkle-index": YY
          }
        }, YY)))
      })
    }

    function iR(YY) {
      var rY;
      let {
        charm: DY,
        view: FY,
        controller: AY
      } = YY;
      const {
        t: IY
      } = (0, NA.C)(), RY = FY.shop, OY = (null === (rY = FY.sparkle) || void 0 === rY ? void 0 : rY.id) === DY.id;
      return (0, cA.jsxs)("li", {
        className: EA()("SkyblockLampLightCharm", DY.owned && "Owned", DY.socketed && "Socketed"),
        children: [OY && (0, cA.jsx)(sR, {}, FY.sparkle.count), (0, cA.jsx)("h4", {
          children: DY.name
        }), (0, cA.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: DY.effect
        }), (0, cA.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: DY.lines.map((YY => (0, cA.jsxs)("li", {
            className: EA()("SkyblockLampLightOddsLine", "better" === YY.tone ? "Better" : "worse" === YY.tone ? "Worse" : "Same"),
            children: [(0, cA.jsx)("span", {
              className: "Before",
              children: YY.before
            }), (0, cA.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, cA.jsx)("span", {
              className: "After",
              children: YY.after
            })]
          }, YY.label)))
        }), (0, cA.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: DY.owned ? DY.socketed ? (0, cA.jsxs)(cA.Fragment, {
            children: [(0, cA.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: IY("skyblockGame:lampLightSocketed")
            }), (0, cA.jsx)(dA.J, {
              disabled: !FY.canCommand,
              ariaLabel: IY("skyblockGame:lampLightRemoveLabel", {
                charm: DY.name
              }),
              onClick: () => {
                AY.socket(null)
              },
              children: IY("skyblockGame:lampLightRemove")
            })]
          }) : (0, cA.jsx)(dA.f, {
            disabled: !FY.canCommand || !RY.heldRod,
            ariaLabel: IY("skyblockGame:lampLightSocketLabel", {
              charm: DY.name
            }),
            onClick: () => {
              AY.socket(DY.id)
            },
            children: IY("skyblockGame:lampLightSocket")
          }) : (0, cA.jsx)(dA.f, {
            disabled: !FY.canCommand || !DY.affordable,
            ariaLabel: IY("skyblockGame:lampLightBuyLabel", {
              item: DY.name,
              cost: DY.cost
            }),
            onClick: () => {
              AY.buy(DY.id)
            },
            children: DY.cost
          })
        })]
      })
    }

    function yR(YY) {
      var rY;
      let {
        tint: DY,
        view: FY,
        controller: AY
      } = YY;
      const {
        t: IY
      } = (0, NA.C)();
      return (0, cA.jsxs)("li", {
        className: EA()("SkyblockLampLightTint", DY.wearing && "Wearing"),
        style: {
          "--tint-colour": DY.colour
        },
        children: [(null === (rY = FY.sparkle) || void 0 === rY ? void 0 : rY.id) === DY.id && (0, cA.jsx)(sR, {}, FY.sparkle.count), (0, cA.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, cA.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: DY.name
        }), DY.wearing ? (0, cA.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: IY("skyblockGame:lampLightWearing")
        }) : (0, cA.jsx)(dA.f, {
          disabled: !FY.canCommand || !DY.owned && !DY.affordable,
          ariaLabel: DY.owned ? IY("skyblockGame:lampLightWearLabel", {
            tint: DY.name
          }) : IY("skyblockGame:lampLightBuyLabel", {
            item: DY.name,
            cost: DY.cost
          }),
          onClick: () => {
            DY.owned ? AY.wearTint(DY.id) : AY.buy(DY.id)
          },
          children: DY.owned ? IY("skyblockGame:lampLightWear") : DY.cost
        })]
      })
    }

    function QR(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(CF, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = DY.shop;
      return (0, cA.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, cA.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, cA.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: DY.balance
          }), (0, cA.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": DY.releasing,
            className: EA()("SkyblockLampLightSwitch", DY.releasing && "On"),
            disabled: DY.releasing ? "ready" !== DY.status : !DY.canCommand,
            onClick: () => {
              rY.setRelease(!DY.releasing)
            },
            children: [(0, cA.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, cA.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), FY("skyblockGame:lampLightRelease")]
          }), (0, cA.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: FY("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== DY.notice && (0, cA.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: DY.notice
        }), null !== AY && (0, cA.jsxs)(cA.Fragment, {
          children: [(0, cA.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, cA.jsx)("h3", {
              children: FY("skyblockGame:lampLightCharms")
            }), (0, cA.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: AY.oddsFor
            }), (0, cA.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((YY => (0, cA.jsx)("button", {
                type: "button",
                "aria-pressed": DY.situation === YY,
                className: EA()("SkyblockLampLightSituation", DY.situation === YY && "Selected"),
                onClick: () => {
                  rY.setSituation(YY)
                },
                children: FY("open" === YY ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, YY)))
            })]
          }), !AY.heldRod && (0, cA.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: FY("skyblockGame:lampLightHoldRod")
          }), (0, cA.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: AY.charms.map((YY => (0, cA.jsx)(iR, {
              charm: YY,
              view: DY,
              controller: rY
            }, YY.id)))
          }), (0, cA.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, cA.jsx)("h3", {
              children: FY("skyblockGame:lampLightTints")
            })
          }), (0, cA.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, cA.jsxs)("li", {
              className: EA()("SkyblockLampLightTint", "Islands", AY.wearingIslandColours && "Wearing"),
              children: [(0, cA.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, cA.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: FY("skyblockGame:lampLightIslandColours")
              }), AY.wearingIslandColours ? (0, cA.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: FY("skyblockGame:lampLightWearing")
              }) : (0, cA.jsx)(dA.f, {
                disabled: !DY.canCommand,
                ariaLabel: FY("skyblockGame:lampLightWearLabel", {
                  tint: FY("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  rY.wearTint(null)
                },
                children: FY("skyblockGame:lampLightWear")
              })]
            }), AY.tints.map((YY => (0, cA.jsx)(yR, {
              tint: YY,
              view: DY,
              controller: rY
            }, YY.id)))]
          })]
        })]
      })
    }

    function oR(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(CF, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)();
      return DY.releasing ? (0, cA.jsx)(VA.e, {
        children: (0, cA.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            rY.setRelease(!1)
          },
          children: [(0, cA.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, cA.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [FY("skyblockGame:lampLightReleasing"), " \xb7 ", DY.balance]
          }), (0, cA.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: FY("skyblockGame:lampLightKeepCatches")
          }), null !== DY.gained && (0, cA.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: DY.gained.text
          }, DY.gained.count)]
        })
      }) : null
    }

    function WR(YY) {
      let {
        island: rY,
        view: DY,
        aim: FY
      } = YY;
      const {
        t: AY
      } = (0, NA.C)(), IY = rY.featuredFish;
      return (0, cA.jsxs)("li", {
        className: EA()("SkyblockKeepersChairIsland", `Island-${rY.id}`, rY.favoured && "Aimed", !rY.relit && "Dark"),
        children: [(0, cA.jsx)("h3", {
          children: rY.name
        }), rY.relit && null !== IY ? (0, cA.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, cA.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: AY("skyblockGame:keepersChairTideNotice")
          }), (0, cA.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, cA.jsx)(lA.c, {
              itemName: IY.itemName,
              amount: 0
            })
          }), (0, cA.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: IY.displayName
          })]
        }) : (0, cA.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, cA.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: AY("skyblockGame:keepersChairDark")
          })
        }), rY.relit && (rY.favoured ? (0, cA.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: AY("skyblockGame:keepersChairAimed")
        }) : (0, cA.jsx)(dA.f, {
          className: "SkyblockKeepersChairAim",
          disabled: !DY.canAim,
          ariaLabel: AY("skyblockGame:keepersChairAimLabel", {
            island: rY.name
          }),
          onClick: () => {
            FY(rY.id)
          },
          children: AY("skyblockGame:keepersChairAim")
        }))]
      }, rY.favoured ? DY.aimedCount : 0)
    }

    function ER(YY) {
      let {
        controller: rY,
        lampLight: DY
      } = YY;
      const FY = (0, BA.k)(eF, rY.getSnapshot()),
        AY = (0, BA.k)(CF, DY.getSnapshot()),
        [IY, RY] = (0, NY.useState)("lamp"),
        {
          t: OY
        } = (0, NA.C)(),
        gY = MA();
      if (!FY.enabled) return null;
      const aY = "light" === IY && AY.enabled;
      return (0, cA.jsx)(hA.e, {
        show: FY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: EA()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", aY && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: gY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: OY("skyblockGame:keepersChairTitle")
              }), (0, cA.jsx)("p", {
                children: OY(aY ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              ariaLabel: OY("skyblockGame:keepersChairClose"),
              onClick: rY.dismiss
            })]
          }), AY.enabled && (0, cA.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((YY => (0, cA.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === YY === aY,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === YY === aY ? "true" : void 0,
              className: EA()("SkyblockKeepersChairTab", "light" === YY === aY && "Selected"),
              onClick: () => {
                RY(YY)
              },
              children: [OY("lamp" === YY ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === YY && (0, cA.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: AY.balance
              })]
            }, YY)))
          }), aY ? (0, cA.jsx)(QR, {
            controller: DY
          }) : (0, cA.jsx)(mR, {
            view: FY,
            controller: rY
          })]
        })
      })
    }

    function mR(YY) {
      let {
        view: rY,
        controller: DY
      } = YY;
      const {
        t: FY
      } = (0, NA.C)();
      return (0, cA.jsxs)(cA.Fragment, {
        children: [(0, cA.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: rY.islands.map((YY => (0, cA.jsx)(WR, {
            island: YY,
            view: rY,
            aim: DY.aim
          }, YY.id)))
        }), null !== rY.almanac && (0, cA.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, cA.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: FY("skyblockGame:passageTitle")
          }), (0, cA.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, cA.jsx)(gR, {
              phase: rY.almanac.phase
            }), rY.almanac.phaseName]
          }), (0, cA.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, cA.jsx)(gR, {
              phase: rY.almanac.nextPhase
            }), rY.almanac.next]
          })]
        }), (0, cA.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, cA.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: FY("skyblockGame:keepersChairFavour")
          }), rY.aimed && (0, cA.jsx)(dA.J, {
            className: "SkyblockKeepersChairRest",
            disabled: !rY.canAim,
            onClick: () => {
              DY.aim(null)
            },
            children: FY("skyblockGame:keepersChairRest")
          })]
        }), null !== rY.status && (0, cA.jsx)("p", {
          className: EA()("SkyblockKeepersChairStatus", "refused" === rY.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: rY.status.text
        })]
      })
    }

    function VR(YY) {
      let {
        controller: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)(), FY = (0, BA.k)(BF, rY.getSnapshot());
      if (!FY.enabled) return null;
      const AY = FY.freshCount > 0 ? DY("skyblockGame:reachLogOpenNews", {
        count: FY.freshCount
      }) : DY("skyblockGame:reachLogOpen");
      return (0, cA.jsx)(VA.e, {
        placement: "statBars",
        children: (0, cA.jsxs)("button", {
          type: "button",
          className: EA()("SkyblockReachLogButton", FY.freshCount > 0 && "HasNews", FY.pending && "Pending"),
          "aria-label": AY,
          title: AY,
          onClick: rY.ask,
          children: [FY.news && (0, cA.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${FY.newsToken}`), (0, cA.jsx)("span", {
            className: EA()("SkyblockReachLogIcon", FY.news && "Jump"),
            "aria-hidden": "true",
            children: (0, cA.jsx)(lA.c, {
              itemName: KF,
              amount: 0
            })
          }, `icon:${FY.newsToken}`), FY.freshCount > 0 && (0, cA.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: FY.freshCount
          })]
        })
      })
    }

    function SR(YY) {
      let {
        gift: rY
      } = YY;
      return (0, cA.jsx)("li", {
        className: EA()("SkyblockRegularsGift", rY.given && "Given"),
        children: rY.text
      })
    }

    function lR(YY) {
      let {
        regular: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)();
      return (0, cA.jsxs)("li", {
        className: EA()("SkyblockRegularsCard", rY.tagged ? "Tagged" : "Untagged", rY.resting && "Resting"),
        children: [(0, cA.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, cA.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: rY.fishName,
            children: (0, cA.jsx)(lA.c, {
              itemName: rY.itemName,
              amount: 0
            })
          }), (0, cA.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, cA.jsx)("h3", {
              children: rY.name
            }), (0, cA.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: rY.fishName
            })]
          })]
        }), (0, cA.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: rY.line
        }), (0, cA.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, cA.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: rY.size
          }), rY.tagged && (0, cA.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: rY.resting ? DY("skyblockGame:regularsResting") : rY.meetings
          })]
        }), (0, cA.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: rY.chance
        }), (0, cA.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: rY.gifts.map((YY => (0, cA.jsx)(SR, {
            gift: YY
          }, YY.text)))
        }), rY.history.length > 0 && (0, cA.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: rY.history.map(((YY, rY) => (0, cA.jsx)("li", {
            children: YY
          }, rY)))
        })]
      })
    }

    function TR(YY) {
      let {
        controller: rY,
        island: DY
      } = YY;
      const {
        t: FY
      } = (0, NA.C)(), AY = (0, BA.k)(LF, rY.getSnapshot()), IY = AY.islands.find((YY => YY.id === DY));
      if (!AY.enabled || void 0 === IY) return null;
      const RY = FY("skyblockGame:regularsOpen");
      return (0, cA.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": RY,
        title: RY,
        onClick: () => {
          rY.openIsland(DY)
        },
        children: [(0, cA.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: FY("skyblockGame:regularsTitle")
        }), IY.regulars.map((YY => (0, cA.jsx)("span", {
          className: EA()("SkyblockRegularsStripIcon", YY.tagged && "Tagged"),
          title: YY.name,
          children: (0, cA.jsx)(lA.c, {
            itemName: YY.itemName,
            amount: 0
          })
        }, YY.id)))]
      })
    }

    function eR(YY) {
      var rY;
      let {
        controller: DY
      } = YY;
      const FY = (0, BA.k)(LF, DY.getSnapshot()),
        {
          t: AY
        } = (0, NA.C)(),
        IY = MA();
      if (!FY.enabled) return null;
      const RY = null !== (rY = FY.islands.find((YY => YY.id === FY.selected))) && void 0 !== rY ? rY : null;
      return (0, cA.jsx)(hA.e, {
        show: FY.open,
        close: DY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: IY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: AY("skyblockGame:regularsTitle")
              }), (0, cA.jsx)("p", {
                children: AY("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              onClick: DY.dismiss
            })]
          }), (0, cA.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: FY.islands.map((YY => {
              const rY = YY.id === FY.selected;
              return (0, cA.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": rY,
                "data-pad-tab": !0,
                "data-pad-selected": rY ? "true" : void 0,
                className: EA()("SkyblockReachLogTab", `Island-${YY.id}`, rY && "Selected", YY.charm.given && "GoldPage"),
                onClick: () => {
                  DY.selectIsland(YY.id)
                },
                children: (0, cA.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: YY.name
                })
              }, YY.id)
            }))
          }), (0, cA.jsxs)("div", {
            className: EA()("SkyblockRegularsPage", null !== RY && `Island-${RY.id}`),
            role: "tabpanel",
            children: [(0, cA.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: AY("skyblockGame:regularsHow")
            }), null !== RY && (0, cA.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: RY.regulars.map((YY => (0, cA.jsx)(lR, {
                regular: YY
              }, YY.id)))
            })]
          }), null !== RY && (0, cA.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, cA.jsx)("span", {
              className: EA()("SkyblockRegularsCharm", RY.charm.given && "Given"),
              children: RY.charm.text
            })
          })]
        })
      })
    }
    const NR = [{
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
      BR = Array.from({
        length: 6
      }, ((YY, rY) => ({
        "--x": `${(88*(.618034*rY%1)).toFixed(1)}%`,
        "--y": `${(10+37*rY%70).toFixed(1)}%`,
        "--size": 7 + rY % 3 * 3 + "rem",
        "--drift-x": 3 * (rY % 3 - 1) + "rem",
        "--drift-y": 2 * (rY % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + rY % 4 * 3 + "s",
        "--delay": 2.5 * -rY + "s"
      }))),
      cR = Array.from({
        length: 14
      }, ((YY, rY) => ({
        "--left": `${(3+94*((.618034*rY+.3)%1)).toFixed(1)}%`,
        "--size": 4 + rY % 4 * 2 + "px",
        "--sway": rY % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*rY%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*rY%12).toFixed(2)}s`
      }))),
      KR = (0, NY.memo)((function(YY) {
        let {
          island: rY
        } = YY;
        return (0, cA.jsxs)("div", {
          className: EA()("SkyblockReachLogDepths", null !== rY && `Island-${rY}`),
          "aria-hidden": "true",
          children: [NR.map(((YY, rY) => (0, cA.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: YY
          }, `shaft${rY}`))), BR.map(((YY, rY) => (0, cA.jsx)("span", {
            className: EA()("SkyblockReachLogMote", rY % 2 === 1 && "Violet"),
            style: YY
          }, `mote${rY}`))), cR.map(((YY, rY) => (0, cA.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: YY
          }, `bubble${rY}`)))]
        })
      })),
      HR = 100;

    function zR(YY) {
      let {
        view: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)();
      if (null === rY || 0 === rY.total) return null;
      const FY = HR * rY.aspect,
        AY = DY("skyblockGame:hiddenWatersCount", {
          found: rY.found,
          total: rY.total
        });
      return (0, cA.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${DY("skyblockGame:hiddenWatersTitle")}: ${AY}`,
        children: [(0, cA.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${FY}`,
          "aria-hidden": "true",
          children: [rY.islands.map(((YY, rY) => (0, cA.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (YY.left + YY.width / 2) * HR,
            cy: (YY.top + YY.height / 2) * FY,
            rx: YY.width / 2 * HR,
            ry: YY.height / 2 * FY
          }, rY))), rY.pins.map(((YY, rY) => (0, cA.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: YY.left * HR,
            cy: YY.top * FY,
            r: 13
          }, rY)))]
        }), (0, cA.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, cA.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: DY("skyblockGame:hiddenWatersTitle")
          }), (0, cA.jsx)("span", {
            className: rY.found === rY.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: AY
          })]
        })]
      })
    }

    function ZR(YY) {
      let {
        view: rY,
        island: DY
      } = YY;
      const {
        t: FY
      } = (0, NA.C)(), AY = null === rY || void 0 === rY ? void 0 : rY.glimpses.get(DY);
      return void 0 === AY || 0 === AY.length ? null : (0, cA.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, cA.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: FY("skyblockGame:hiddenWatersGlimpsed")
        }), (0, cA.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: AY.map((YY => (0, cA.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, cA.jsx)(lA.c, {
              itemName: YY,
              amount: 0
            })
          }, YY)))
        })]
      })
    }
    const CR = ["Bronze", "Silver", "Gold"],
      fR = [{
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
      jR = fR.slice(0, 2);

    function hR(YY) {
      return YY ? fR : jR
    }

    function dR(YY) {
      let {
        fish: rY,
        letGoShown: DY
      } = YY;
      const {
        t: FY
      } = (0, NA.C)();
      return (0, cA.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [CR.map(((YY, DY) => {
          const AY = DY < rY.marks;
          return (0, cA.jsx)("span", {
            className: EA()("SkyblockReachLogPip", YY, AY && "Earned", AY && rY.fresh && DY === rY.marks - 1 && "Newest"),
            title: FY(cF[DY])
          }, YY)
        })), (0, cA.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), hR(DY).map(((YY, DY) => (0, cA.jsx)("span", {
          className: EA()("SkyblockReachLogRibbon", YY.className, !0 === rY.ribbons[DY] && "Earned"),
          title: FY(YY.titleKey)
        }, YY.className)))]
      })
    }

    function JR(YY) {
      let {
        letGoShown: rY,
        haloShown: DY
      } = YY;
      const {
        t: FY
      } = (0, NA.C)();
      return (0, cA.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, cA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: FY("skyblockGame:reachLogMarks"),
          children: [(0, cA.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), FY("skyblockGame:reachLogLegendMarks")]
        }), hR(rY).map((YY => (0, cA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: FY(YY.titleKey),
          children: [(0, cA.jsx)("span", {
            className: EA()("SkyblockReachLogRibbon", YY.className, "Earned")
          }), FY(YY.legendKey)]
        }, YY.className))), (0, cA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: FY("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, cA.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), FY("skyblockGame:reachLogLegendGlimmer")]
        }), DY && (0, cA.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: FY("skyblockGame:reachLogHaloTitle"),
          children: [(0, cA.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), FY("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function MR(YY) {
      let {
        returner: rY
      } = YY;
      return (0, cA.jsxs)("div", {
        className: EA()("SkyblockReachLogReturner", rY.back && "Back"),
        children: [(0, cA.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, cA.jsx)(lA.c, {
            itemName: rY.itemName,
            amount: 0
          })
        }), (0, cA.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: rY.line
        })]
      })
    }

    function wR(YY) {
      let {
        fish: rY,
        letGoShown: DY
      } = YY;
      const {
        t: FY
      } = (0, NA.C)();
      return (0, cA.jsxs)("li", {
        className: EA()("SkyblockReachLogCard", rY.caught ? "Caught" : "Unknown", rY.marks >= 3 && "GoldCard", rY.fresh && "Fresh", rY.visitor && "Visitor"),
        children: [rY.visitor && (0, cA.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: FY("skyblockGame:reachLogVisitor")
        }), rY.fresh && Array.from({
          length: 4
        }, ((YY, rY) => (0, cA.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, rY))), (0, cA.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [rY.halo && (0, cA.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: FY("skyblockGame:reachLogHaloTitle")
          }), (0, cA.jsx)(lA.c, {
            itemName: rY.itemName,
            amount: 0
          }), rY.glimmer && (0, cA.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: FY("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, cA.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: rY.name
        }), (0, cA.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: rY.chance
        }), (0, cA.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: rY.best
        }), (0, cA.jsx)(dR, {
          fish: rY,
          letGoShown: DY
        })]
      })
    }

    function bR(YY) {
      let {
        page: rY,
        letGoShown: DY,
        hiddenWaters: FY
      } = YY;
      const {
        t: AY
      } = (0, NA.C)();
      return rY.awake ? (0, cA.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: rY.fish.map((YY => (0, cA.jsx)(wR, {
          fish: YY,
          letGoShown: DY
        }, YY.itemName)))
      }) : (0, cA.jsxs)(cA.Fragment, {
        children: [(0, cA.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: AY("skyblockGame:reachLogAsleep")
        }), (0, cA.jsx)(ZR, {
          view: FY,
          island: rY.id
        })]
      })
    }

    function XR(YY) {
      var rY, DY;
      let {
        controller: FY,
        regulars: AY,
        hiddenWaters: IY
      } = YY;
      const RY = (0, BA.k)(BF, FY.getSnapshot()),
        OY = function(YY) {
          return (0, BA.k)(FA, YY.getSnapshot())
        }(IY),
        gY = (0, BA.k)(LF, AY.getSnapshot()),
        {
          t: aY
        } = (0, NA.C)(),
        vY = MA();
      if (!RY.enabled) return null;
      const uY = null !== (rY = RY.pages.find((YY => YY.id === RY.selected))) && void 0 !== rY ? rY : null;
      return (0, cA.jsx)(hA.e, {
        show: RY.open,
        close: FY.dismiss,
        togglePointerLock: !1,
        className: EA()("SkyblockSkillsOverlay", gY.open && "SkyblockReachLogUnderLedger"),
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: vY,
          onKeyDown: JA,
          children: [(0, cA.jsx)(KR, {
            island: null !== (DY = null === uY || void 0 === uY ? void 0 : uY.id) && void 0 !== DY ? DY : null
          }), (0, cA.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: aY("skyblockGame:reachLogTitle")
              }), (0, cA.jsx)("p", {
                children: aY("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, cA.jsx)(zR, {
              view: OY
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              onClick: FY.dismiss
            })]
          }), (0, cA.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: RY.pages.map((YY => {
              const rY = YY.id === RY.selected,
                DY = YY.fish.some((YY => YY.fresh));
              return (0, cA.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": rY,
                "data-pad-tab": !0,
                "data-pad-selected": rY ? "true" : void 0,
                className: EA()("SkyblockReachLogTab", `Island-${YY.id}`, rY && "Selected", !YY.awake && "Asleep", YY.gold && "GoldPage", DY && "HasNews"),
                onClick: () => {
                  FY.selectPage(YY.id)
                },
                children: [(0, cA.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: YY.name
                }), YY.awake && (0, cA.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: aY("skyblockGame:reachLogCaughtCount", {
                    caught: YY.caught,
                    total: YY.total
                  })
                })]
              }, YY.id)
            }))
          }), (0, cA.jsxs)("div", {
            className: EA()("SkyblockReachLogPage", null !== uY && `Island-${uY.id}`),
            role: "tabpanel",
            children: [null !== uY && (0, cA.jsx)(bR, {
              page: uY,
              letGoShown: RY.letGoShown,
              hiddenWaters: OY
            }), !0 === (null === uY || void 0 === uY ? void 0 : uY.awake) && null !== uY.returner && (0, cA.jsx)(MR, {
              returner: uY.returner
            }), !0 === (null === uY || void 0 === uY ? void 0 : uY.awake) && (0, cA.jsx)(TR, {
              controller: AY,
              island: uY.id
            })]
          }), (0, cA.jsx)("footer", {
            className: EA()("SkyblockReachLogFooter", null !== uY && `Island-${uY.id}`, !0 === (null === uY || void 0 === uY ? void 0 : uY.gold) && "GoldPage"),
            children: !0 === (null === uY || void 0 === uY ? void 0 : uY.gold) ? (0, cA.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: aY("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, cA.jsxs)(cA.Fragment, {
              children: [(0, cA.jsx)(JR, {
                letGoShown: RY.letGoShown,
                haloShown: !0 === (null === uY || void 0 === uY ? void 0 : uY.fish.some((YY => YY.halo)))
              }), (0, cA.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: aY("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var qR = DY(4408);

    function pR(YY) {
      let {
        conversation: rY,
        completedLabel: DY
      } = YY;
      return (0, cA.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, cA.jsxs)("header", {
          children: [(0, cA.jsx)("h3", {
            children: rY.questName
          }), rY.completed && (0, cA.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: DY
          })]
        }), rY.lines.map((YY => (0, cA.jsx)(qR.b, {
          display: YY.display
        }, YY.key)))]
      })
    }

    function kR(YY) {
      let {
        controller: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)(), FY = (0, BA.k)(IA, rY.getSnapshot()), AY = MA();
      if (!FY.enabled) return null;
      const IY = !FY.loading && 0 === FY.conversations.length;
      return (0, cA.jsx)(hA.e, {
        show: FY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: AY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: DY("skyblockDialogue:title")
              }), (0, cA.jsx)("p", {
                children: DY("skyblockDialogue:intro")
              })]
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              onClick: rY.dismiss
            })]
          }), (0, cA.jsxs)("div", {
            className: EA()("SkyblockDialogueBody", {
              SingleColumn: null !== FY.questFocus || 0 === FY.characters.length
            }),
            children: [null === FY.questFocus && FY.characters.length > 0 && (0, cA.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: FY.characters.map((YY => (0, cA.jsx)(dA.f, {
                className: EA()("SkyblockDialogueCharacter", {
                  Selected: YY.selected
                }),
                onClick: () => {
                  rY.selectCharacter(YY.id)
                },
                children: (0, cA.jsx)(TA.b, {
                  text: YY.styling
                })
              }, YY.id)))
            }), (0, cA.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== FY.questFocus && (0, cA.jsx)(dA.f, {
                className: "SkyblockDialogueBack",
                onClick: rY.showCharacters,
                children: DY("skyblockDialogue:allCharacters")
              }), FY.loading && (0, cA.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: DY("skyblockDialogue:loading")
              }), IY && (0, cA.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: DY(null === FY.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), FY.conversations.map((YY => (0, cA.jsx)(pR, {
                conversation: YY,
                completedLabel: FY.completedLabel
              }, YY.questId)))]
            })]
          })]
        })
      })
    }

    function GR(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(vA, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = MA();
      return DY.enabled ? (0, cA.jsx)(hA.e, {
        show: DY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: AY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: FY("skyblockGame:autographBook")
              }), (0, cA.jsx)("p", {
                children: FY("skyblockGame:autographBookIntro")
              })]
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              onClick: rY.dismiss
            })]
          }), (0, cA.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, cA.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, cA.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, cA.jsx)("strong", {
                  children: DY.total
                }), (0, cA.jsx)("span", {
                  children: FY("skyblockGame:autographTotal")
                })]
              }), (0, cA.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, cA.jsx)("strong", {
                  children: DY.rankTotal
                }), (0, cA.jsx)("span", {
                  children: FY("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === DY.entries.length ? (0, cA.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: FY("skyblockGame:autographBookEmpty")
            }) : (0, cA.jsx)("ul", {
              className: "SkyblockAutographList",
              children: DY.entries.map((YY => (0, cA.jsxs)("li", {
                className: EA()("SkyblockAutograph", {
                  Ranked: null !== YY.rank
                }),
                style: null === YY.rank ? void 0 : {
                  color: YY.rank.colour
                },
                children: [null !== YY.rank && (0, cA.jsx)(vI.e, {
                  className: "SkyblockAutographRankIcon",
                  name: YY.rank.icon,
                  kit: (0, vI.h)(YY.rank.icon)
                }), (0, cA.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, cA.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: YY.name
                  }), (0, cA.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== YY.rank && (0, cA.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: YY.rank.label
                    }), (0, cA.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: YY.signedOn
                    })]
                  })]
                })]
              }, YY.key)))
            })]
          })]
        })
      }) : null
    }
    const xR = (0, NY.memo)((function(YY) {
        let {
          controller: rY
        } = YY;
        return (0, cA.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: rY.display.mountWaypoint,
          children: [(0, cA.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, cA.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, cA.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, cA.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, cA.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, cA.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      nR = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function PR(YY) {
      return "next" === YY.phase ? "\u2192" : nR[YY.kind]
    }
    const UR = (0, NY.memo)((function(YY) {
      let {
        controller: rY,
        display: DY
      } = YY;
      const FY = (0, BA.k)(gD, rY.getNotificationSnapshot()),
        [AY, IY] = (0, NY.useState)(!1);
      return (0, BA.g)("qteStateUpdated", (YY => {
        IY(YY.isActive)
      })), (0, cA.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (AY ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [FY && (0, cA.jsxs)("div", {
          className: `SkyblockQuestNotification ${FY.kind} ${FY.phase}`,
          style: {
            "--quest-notification-duration": `${FY.durationMs}ms`,
            ...FY.accent && {
              "--quest-notification-accent": FY.accent
            }
          },
          children: [(0, cA.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (FY.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, cA.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: PR(FY)
            }), FY.iconItem && (0, cA.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, cA.jsx)(lA.c, {
                itemName: FY.iconItem,
                amount: 0
              })
            })]
          }), (0, cA.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, cA.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: FY.title
            }), (0, cA.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, cA.jsx)(FI.c, {
                text: FY.name
              })
            }), FY.description && (0, cA.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, cA.jsx)(FI.c, {
                text: FY.description
              })
            }), FY.reward && (0, cA.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, cA.jsx)(FI.c, {
                text: FY.reward
              })
            })]
          })]
        }, FY.token), (null === FY || void 0 === FY ? void 0 : FY.waypointNameKey) && (0, cA.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": FY.waypointNameKey,
          "data-notification-token": FY.token,
          ref: DY.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${FY.token}`)]
      })
    }));

    function LR(YY) {
      const rY = parseInt(YY.replace("#", ""), 16);
      return `${rY>>16&255}, ${rY>>8&255}, ${255&rY}`
    }
    const tR = (0, NY.memo)((function(YY) {
      let {
        controller: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)(), FY = (0, BA.k)(jD, rY.getSnapshot());
      if (!FY) return null;
      const AY = "arrival" === FY.phase;
      return (0, cA.jsxs)("div", {
        className: EA()("SkyblockPortalTransit", {
          Departure: !AY,
          Arrival: AY
        }),
        style: {
          "--portal-rgb": LR(FY.colour),
          "--portal-duration": `${FY.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, cA.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, cA.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            rY.finishArrival(FY.token)
          }
        }), (0, cA.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, cA.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !AY && (0, cA.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: DY("skyblockGame:portalTransitHeading")
          }), (0, cA.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: DY(FY.zoneNameKey)
          })]
        })]
      }, FY.token)
    }));

    function YO() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function rO() {
      const YY = document.querySelector(".SkyblockHudCoins"),
        rY = null === YY || void 0 === YY ? void 0 : YY.getBoundingClientRect();
      return rY && rY.width > 0 ? {
        x: rY.left + Math.min(rY.width, 24) / 2,
        y: rY.top + rY.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function DO(YY) {
      return {
        x: YY.left + YY.width / 2,
        y: YY.top + YY.height / 2
      }
    }

    function FO() {
      var YY;
      const rY = null === (YY = document.querySelector(".HotBar")) || void 0 === YY ? void 0 : YY.getBoundingClientRect();
      return rY && rY.width > 0 ? DO(rY) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function AO(YY) {
      let {
        items: rY,
        origins: DY,
        target: FY
      } = YY;
      return (0, cA.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: rY.map(((YY, rY) => {
          const AY = DY[rY];
          return (0, cA.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${AY.x}px`,
              top: `${AY.y}px`,
              "--item-dx": FY.x - AY.x + "px",
              "--item-dy": FY.y - AY.y + "px",
              "--item-delay": 2e3 + 160 * rY + "ms",
              "--item-flight": "700ms"
            },
            children: (0, cA.jsx)(lA.c, {
              itemName: YY.dailyRewardItemName,
              amount: 0
            })
          }, YY.dailyRewardItemName)
        }))
      })
    }

    function IO(YY, rY) {
      const DY = -Math.PI / 2 + 1.25 * (YY / (rY - 1) * 2 - 1),
        FY = 70 + YY % 3 * 22;
      return {
        x: Math.cos(DY) * FY,
        y: Math.sin(DY) * FY * .7
      }
    }

    function RO(YY) {
      let {
        origin: rY,
        target: DY,
        count: FY
      } = YY;
      const AY = [];
      for (let IY = 0; IY < FY; IY++) {
        const YY = IO(IY, FY);
        AY.push((0, cA.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${rY.x}px`,
            top: `${rY.y}px`,
            "--coin-bx": `${YY.x}px`,
            "--coin-by": `${YY.y}px`,
            "--coin-dx": DY.x - rY.x + "px",
            "--coin-dy": DY.y - rY.y + "px",
            "--coin-delay": `${bD(IY,FY)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, cA.jsx)(lA.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, IY))
      }
      return (0, cA.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: AY
      })
    }

    function OO(YY) {
      let {
        day: rY
      } = YY;
      const DY = BY[rY - 1];
      return (0, cA.jsxs)(cA.Fragment, {
        children: [(0, cA.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, cA.jsx)(lA.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, eA.g)(DY.dailyRewardCoins)]
        }), DY.dailyRewardItems.map((YY => (0, cA.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, cA.jsx)(lA.c, {
            itemName: YY.dailyRewardItemName,
            amount: 0
          }), "\xd7", YY.dailyRewardItemAmount]
        }, YY.dailyRewardItemName)))]
      })
    }

    function gO(YY) {
      let {
        day: rY
      } = YY;
      const DY = KY(rY);
      return (0, cA.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: BY.map(((YY, FY) => {
          const AY = FY + 1;
          return (0, cA.jsxs)("li", {
            className: EA()("SkyblockDailyRewardTile", {
              Claimed: AY < rY && AY !== DY,
              Today: AY === rY,
              Tomorrow: AY === DY,
              Jackpot: AY === cY
            }),
            children: [(0, cA.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: AY
            }), (0, cA.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, cA.jsx)(lA.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, eA.g)(YY.dailyRewardCoins)]
            }), YY.dailyRewardItems.map((YY => (0, cA.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, cA.jsx)(lA.c, {
                itemName: YY.dailyRewardItemName,
                amount: 0
              }), "\xd7", YY.dailyRewardItemAmount]
            }, YY.dailyRewardItemName)))]
          }, AY)
        }))
      })
    }

    function aO(YY) {
      let {
        view: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)(), FY = (0, NY.useRef)(null), AY = (0, NY.useRef)(null), [IY, RY] = (0, NY.useState)(null);
      (0, NY.useLayoutEffect)((() => {
        var YY;
        const rY = null === (YY = FY.current) || void 0 === YY ? void 0 : YY.getBoundingClientRect();
        if (rY) {
          var DY, IY;
          const YY = Array.from(null !== (DY = null === (IY = AY.current) || void 0 === IY ? void 0 : IY.children) && void 0 !== DY ? DY : [], (YY => DO(YY.getBoundingClientRect())));
          RY({
            origin: DO(rY),
            target: rO(),
            itemOrigins: YY,
            itemTarget: FO()
          })
        }
      }), []);
      const OY = KY(rY.day),
        gY = function(YY, rY) {
          const [DY, FY] = (0, NY.useState)((() => YO() ? YY : 0));
          return (0, NY.useEffect)((() => {
            if (YO()) return;
            const DY = performance.now();
            let AY = 0;
            const IY = RY => {
              const OY = Math.min(Math.max((RY - DY) / rY, 0), 1);
              FY(Math.round(YY * (1 - (1 - OY) ** 3))), OY < 1 && (AY = requestAnimationFrame(IY))
            };
            return AY = requestAnimationFrame(IY), () => {
              cancelAnimationFrame(AY)
            }
          }), [YY, rY]), DY
        }(rY.coins, 450);
      return (0, cA.jsxs)("div", {
        className: EA()("SkyblockDailyReward", {
          Jackpot: rY.day === cY
        }),
        style: {
          "--daily-duration": `${rY.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, cA.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, cA.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, cA.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, cA.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: DY("skyblockGame:dailyRewardTitle")
            }), (0, cA.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: DY("skyblockGame:dailyRewardDay", {
                day: String(rY.day)
              })
            })]
          }), (0, cA.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: FY,
            children: [(0, cA.jsx)(lA.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, cA.jsxs)("span", {
              children: ["+", (0, eA.g)(gY)]
            })]
          }), rY.items.length > 0 && (0, cA.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: AY,
            children: rY.items.map((YY => (0, cA.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, cA.jsx)(lA.c, {
                itemName: YY.dailyRewardItemName,
                amount: 0
              }), "\xd7", YY.dailyRewardItemAmount]
            }, YY.dailyRewardItemName)))
          }), (0, cA.jsx)(gO, {
            day: rY.day
          }), (0, cA.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [DY("skyblockGame:dailyRewardComeBack"), (0, cA.jsx)(OO, {
              day: OY
            })]
          })]
        }), null !== IY && (0, cA.jsx)(RO, {
          origin: IY.origin,
          target: IY.target,
          count: rY.flyingCoins
        }), null !== IY && IY.itemOrigins.length === rY.items.length && (0, cA.jsx)(AO, {
          items: rY.items,
          origins: IY.itemOrigins,
          target: IY.itemTarget
        })]
      })
    }
    const vO = (0, NY.memo)((function(YY) {
        let {
          controller: rY
        } = YY;
        const DY = (0, BA.k)(JD, rY.getSnapshot());
        return DY ? (0, cA.jsx)(aO, {
          view: DY
        }, DY.token) : null
      })),
      uO = "Gold Coin";

    function sO(YY) {
      return 650 + 220 * YY
    }

    function iO(YY) {
      return {
        "--letter-delay": `${sO(YY)}ms`,
        "--letter-land": `${sO(YY)+300}ms`
      }
    }

    function yO(YY) {
      let {
        letterCount: rY
      } = YY;
      return (0, cA.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, cA.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, cA.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, cA.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: rY
        }, ((YY, rY) => (0, cA.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: iO(rY),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, rY)))]
      })
    }

    function QO(YY) {
      var rY, DY, FY;
      let {
        letter: AY,
        index: IY
      } = YY;
      const {
        t: RY
      } = (0, NA.C)(), OY = null !== (rY = null === (DY = AY.items[0]) || void 0 === DY ? void 0 : DY.itemName) && void 0 !== rY ? rY : uO;
      return (0, cA.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: iO(IY),
        children: [(0, cA.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, cA.jsx)(lA.c, {
            itemName: OY,
            amount: 0
          })
        }), (0, cA.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: RY(AY.reasonKey, null !== (FY = AY.reasonParams) && void 0 !== FY ? FY : void 0)
        }), (0, cA.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [AY.coins > 0 && (0, cA.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, cA.jsx)(lA.c, {
              itemName: uO,
              amount: 0
            }), "+", (0, eA.g)(AY.coins)]
          }), AY.items.map(((YY, rY) => (0, cA.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, cA.jsx)(lA.c, {
              itemName: YY.itemName,
              amount: 0
            }), YY.label, " \xd7", YY.amount]
          }, rY)))]
        })]
      })
    }

    function oO(YY) {
      let {
        view: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)();
      return (0, cA.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${rY.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${sO(rY.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, cA.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, cA.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, cA.jsx)(yO, {
              letterCount: rY.letters.length
            }), (0, cA.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: DY("skyblockGame:mailboxTitle")
            })]
          }), (0, cA.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: rY.letters.map(((YY, rY) => (0, cA.jsx)(QO, {
              letter: YY,
              index: rY
            }, rY)))
          }), rY.more > 0 && (0, cA.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: DY("skyblockGame:mailboxMore", {
              count: String(rY.more)
            })
          })]
        })
      })
    }
    const WO = (0, NY.memo)((function(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(qD, rY.getSnapshot());
      return DY ? (0, cA.jsx)(oO, {
        view: DY
      }, DY.token) : null
    }));

    function EO(YY) {
      let {
        controller: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)(), FY = (0, BA.k)(jF, rY.getSnapshot());
      if (null === FY) return null;
      const AY = FY.fullSet ? "empty" === FY.fuelState ? {
        text: DY("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: DY("skyblockGame:magmawardHudFullSet", {
          worn: String(FY.wornCount)
        }),
        tone: "partial"
      };
      return (0, cA.jsx)(VA.e, {
        placement: "statBars",
        children: (0, cA.jsxs)("div", {
          className: EA()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${FY.fuelState}`, {
            "SkyblockMagmawardHud-partial": !FY.fullSet,
            "SkyblockMagmawardHud-armed": FY.fullSet && "empty" !== FY.fuelState
          }),
          children: [null !== FY.flare && (0, cA.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${FY.flare}`
          }, `flare:${FY.flareToken}`), (0, cA.jsx)("div", {
            className: EA()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: FY.setLit
            }),
            children: FY.pieces.map(((YY, rY) => (0, cA.jsx)("div", {
              className: EA()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: YY.worn,
                SkyblockMagmawardPieceJustWorn: YY.justWorn
              }),
              children: (0, cA.jsx)(lA.c, {
                itemName: YY.itemName,
                amount: 0
              })
            }, `${rY}:${YY.wornToken}`)))
          }, `pieces:${FY.setLitToken}`), (0, cA.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, cA.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, cA.jsxs)("div", {
              className: EA()("SkyblockMagmawardFuelCounter", FY.pulse && `SkyblockMagmawardFuelCounter-${FY.pulse}`),
              children: [(0, cA.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, cA.jsx)(lA.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, cA.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: FY.fuel
              })]
            }, `counter:${FY.pulseToken}`), "burn" === FY.pulse && (0, cA.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${FY.pulseToken}`)]
          }), AY && (0, cA.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${AY.tone} SmallTextBold`,
            children: AY.text
          })]
        })
      })
    }

    function mO(YY) {
      let {
        controller: rY
      } = YY;
      const {
        t: DY,
        selectedLanguage: FY
      } = (0, NA.C)(), AY = (0, BA.k)(dF, rY.getSnapshot());
      return null === AY ? null : (0, cA.jsx)(VA.e, {
        placement: "statBars",
        children: (0, cA.jsxs)("div", {
          className: EA()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: AY.inRange
          }),
          style: {
            "--glowtide-colour": AY.colour
          },
          "aria-label": DY("skyblockGame:glowtideChipLabel"),
          children: [(0, cA.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), AY.inRange ? (0, cA.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: DY("skyblockGame:glowtideChipInRange")
          }, `call:${AY.inRangeToken}`) : (0, cA.jsxs)(cA.Fragment, {
            children: [(0, cA.jsx)("div", {
              ref: rY.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, cA.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: DY("skyblockGame:waypointDistance", {
                distance: lY(AY.distance, FY.code)
              })
            })]
          })]
        })
      })
    }

    function VO(YY) {
      let {
        controller: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)(), FY = (0, BA.k)(MF, rY.getSnapshot());
      return null === FY ? null : (0, cA.jsx)(VA.e, {
        placement: "statBars",
        children: (0, cA.jsxs)("div", {
          className: EA()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: FY.full
          }),
          "aria-label": DY("skyblockGame:glowMeterLabel", {
            fill: String(FY.fill),
            gu: String(FY.gu)
          }),
          children: [FY.burst && (0, cA.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${FY.burstToken}`), (0, cA.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, cA.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${FY.ratio})`
              }
            }), FY.gained && (0, cA.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${FY.gainToken}`), FY.full && Array.from({
              length: 5
            }, ((YY, rY) => (0, cA.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, rY)))]
          }), FY.full && FY.rares.map((YY => (0, cA.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, cA.jsx)(lA.c, {
              itemName: YY,
              amount: 0
            })
          }, YY))), FY.ready && (0, cA.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, cA.jsx)("span", {
              children: DY("skyblockGame:glowMeterReady")
            })
          }, `ready:${FY.fullToken}`)]
        })
      })
    }

    function SO(YY) {
      let {
        controller: rY
      } = YY;
      const {
        t: DY
      } = (0, NA.C)(), FY = (0, BA.k)(bF, rY.getSnapshot());
      if (null === FY) return null;
      const AY = "waiting" === FY.phase,
        IY = {
          animationDuration: `${FY.waitMs}ms`,
          animationDelay: -FY.elapsedMs + "ms"
        },
        RY = AY ? void 0 : {
          animationDuration: `${FY.waitMs}ms`
        };
      return (0, cA.jsxs)("div", {
        className: AY ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [AY && (0, cA.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((YY, rY) => (0, cA.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, rY))), (0, cA.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: IY
          }), (0, cA.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, cA.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, cA.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: IY
            })]
          }), (0, cA.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, cA.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: RY,
          children: DY(FY.line)
        }, FY.lineIndex)]
      }, FY.token)
    }

    function lO(YY) {
      let {
        chart: rY,
        showHere: DY,
        className: FY
      } = YY;
      return (0, cA.jsx)("div", {
        className: EA()("SkyblockTideChartGrid", FY, null !== rY.pictureName && "Complete"),
        "aria-hidden": "true",
        children: rY.cells.map(((YY, FY) => {
          const AY = 0 !== (rY.pulseCells & 1 << FY),
            IY = rY.castCell === FY;
          return (0, cA.jsx)("span", {
            className: EA()("SkyblockTideChartCell", `Cell-${YY}`, AY && "Pulse", IY && "Cast", DY && rY.hereCell === FY && "Here")
          }, `${FY}:${AY?`p${rY.pulseToken}`:""}:${IY?`c${rY.castToken}`:""}`)
        }))
      })
    }

    function TO(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(qF, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = DY.chip;
      if (!DY.enabled || null === AY) return null;
      const IY = FY("skyblockGame:tideChartsChipLabel", {
        island: AY.islandName,
        lit: String(AY.lit),
        ink: String(AY.ink)
      });
      return (0, cA.jsx)(VA.e, {
        placement: "statBars",
        children: (0, cA.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: EA()("SkyblockTideChartsChip", DY.open && "Open", null !== AY.pictureName && "Complete"),
          "aria-label": IY,
          title: IY,
          onMouseDown: YY => {
            YY.preventDefault()
          },
          onClick: rY.toggle,
          children: [(0, cA.jsx)(lO, {
            chart: AY,
            showHere: !1,
            className: "Mini"
          }), (0, cA.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [AY.lit, "/", AY.ink]
          })]
        })
      })
    }

    function eO(YY) {
      let {
        controller: rY
      } = YY;
      const DY = (0, BA.k)(qF, rY.getSnapshot()),
        {
          t: FY
        } = (0, NA.C)(),
        AY = MA(),
        IY = DY.card;
      return DY.enabled && null !== IY ? (0, cA.jsx)(hA.e, {
        show: DY.open,
        close: rY.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, cA.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: AY,
          onKeyDown: JA,
          children: [(0, cA.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, cA.jsxs)("div", {
              children: [(0, cA.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: FY("skyblockGame:tideChartsTitle")
              }), (0, cA.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: FY("skyblockGame:tideChartsIntro")
              })]
            }), (0, cA.jsx)(dA.k, {
              padIgnore: !0,
              ariaLabel: FY("skyblockGame:tideChartsClose"),
              onClick: rY.dismiss
            })]
          }), DY.tabs.length > 1 && (0, cA.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": FY("skyblockGame:tideChartsIslands"),
            children: DY.tabs.map((YY => (0, cA.jsx)("button", {
              type: "button",
              className: EA()("SkyblockTideChartsTab", YY.selected && "Selected"),
              "aria-pressed": YY.selected,
              onClick: () => {
                rY.Ps(YY.island)
              },
              children: YY.name
            }, YY.island)))
          }), (0, cA.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, cA.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": IY.gridLabel,
              children: (0, cA.jsx)(lO, {
                chart: IY,
                showHere: !0,
                className: "Large"
              })
            }), (0, cA.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, cA.jsx)("h3", {
                children: IY.islandName
              }), (0, cA.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: IY.litText
              }), null === IY.pictureName ? (0, cA.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: FY("skyblockGame:tideChartsPictureHidden")
              }) : (0, cA.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: FY("skyblockGame:tideChartsPictureRevealed", {
                  picture: IY.pictureName
                })
              }, IY.pictureName), (0, cA.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, cA.jsxs)("li", {
                  children: [(0, cA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), FY("skyblockGame:tideChartsLegendLit")]
                }), (0, cA.jsxs)("li", {
                  children: [(0, cA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), FY("skyblockGame:tideChartsLegendClear")]
                }), null !== IY.hereCell && (0, cA.jsxs)("li", {
                  children: [(0, cA.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), FY("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, cA.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, cA.jsx)("span", {
                  children: DY.turnsText
                }), (0, cA.jsx)("span", {
                  children: DY.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function NO(YY) {
      var rY;
      let {
        controller: DY
      } = YY;
      const {
        selectedLanguage: FY
      } = (0, NA.C)(), AY = FY.code;
      (0, NY.useEffect)((() => {
        DY.setTranslator(((YY, rY) => (0, NA.y)(AY, YY, rY)), AY, ((YY, rY) => (0, NA.u)(AY, YY, rY)))
      }), [DY, AY]);
      const IY = (0, BA.k)(sY, DY.map.getSnapshot()),
        {
          openInGameMenuName: RY
        } = (0, mA.j)(["openInGameMenuName"]);
      return (0, cA.jsxs)(cA.Fragment, {
        children: [(0, cA.jsx)(UR, {
          controller: DY.quests,
          display: DY.navigation.display
        }), IY.enabled && !RY && (0, cA.jsx)(YI, {
          controller: DY.navigation
        }), (0, cA.jsx)(KA, {
          controller: DY,
          minimap: IY.enabled && (null === (rY = IY.presentation) || void 0 === rY ? void 0 : rY.minimap) && (0, cA.jsx)(tA, {
            view: IY.presentation.minimap,
            navigation: DY.navigation,
            controller: DY.map
          }),
          children: (0, cA.jsx)(aI, {
            controller: DY.quests,
            surface: "hud"
          })
        }), (0, cA.jsx)(xR, {
          controller: DY.navigation
        }), (0, cA.jsx)(tR, {
          controller: DY.portalTransit
        }), (0, cA.jsx)(vO, {
          controller: DY.dailyReward
        }), (0, cA.jsx)(WO, {
          controller: DY.mailbox
        }), (0, cA.jsx)(EO, {
          controller: DY.magmaward
        }), (0, cA.jsx)(mO, {
          controller: DY.glowtide
        }), (0, cA.jsx)(aR, {
          controller: DY.passage
        }), (0, cA.jsx)(TO, {
          controller: DY.tideCharts
        }), (0, cA.jsx)(VO, {
          controller: DY.glowMeter
        }), (0, cA.jsx)(VR, {
          controller: DY.reachLog
        }), (0, cA.jsx)(SO, {
          controller: DY.hushWait
        }), (0, cA.jsx)(oR, {
          controller: DY.lampLight
        }), (0, cA.jsx)(rI, {
          controller: DY.skills,
          surface: "hud"
        })]
      })
    }

    function BO(YY) {
      let {
        controller: rY
      } = YY;
      return (0, cA.jsxs)(cA.Fragment, {
        children: [(0, cA.jsx)(LA, {
          controller: rY.map,
          navigation: rY.navigation
        }), (0, cA.jsx)(rI, {
          controller: rY.skills,
          surface: "menu"
        }), (0, cA.jsx)(aI, {
          controller: rY.quests,
          surface: "menu"
        }), (0, cA.jsx)(qI, {
          controller: rY.dungeons
        }), (0, cA.jsx)(GI, {
          controller: rY.collections
        }), (0, cA.jsx)(PI, {
          controller: rY.questGraph
        }), (0, cA.jsx)(rR, {
          controller: rY.forge
        }), (0, cA.jsx)(OR, {
          controller: rY.smuggler
        }), (0, cA.jsx)(ER, {
          controller: rY.keepersChair,
          lampLight: rY.lampLight
        }), (0, cA.jsx)(XR, {
          controller: rY.reachLog,
          regulars: rY.regulars,
          hiddenWaters: rY.hiddenWaters
        }), (0, cA.jsx)(eR, {
          controller: rY.regulars
        }), (0, cA.jsx)(uR, {
          controller: rY.passage
        }), (0, cA.jsx)(eO, {
          controller: rY.tideCharts
        }), (0, cA.jsx)(kR, {
          controller: rY.dialogue
        }), (0, cA.jsx)(GR, {
          controller: rY.autographs
        })]
      })
    }
    var cO = DY(36151);
    const KO = LD + IF;

    function HO(YY, rY, DY, FY, AY) {
      const IY = [],
        RY = [],
        OY = DY => {
          const FY = YY.playSound(rY, DY.sound, DY.volume, DY.rate);
          FY && (RY.push(FY), void 0 !== DY.cutAfter && IY.push(setTimeout((() => {
            FY.fade(FY.getVolume(), 0, 300)
          }), DY.cutAfter)))
        };
      for (const gY of function(YY, rY) {
          const DY = [{
            sound: "rpgKnifeSlice1",
            beat: LD,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: LD,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: LD,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: LD,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: LD,
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
            sound: (0, cO.d)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: KO + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, cO.d)("bigDrumSwish"),
            beat: KO + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: KO + 60,
            lead: 180,
            volume: .5 + .06 * YY,
            rate: .82 + .07 * YY
          }];
          return YY >= 4 && DY.push({
            sound: "exp_levelup",
            beat: KO + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), rY && DY.push({
            sound: "trumpetFlare",
            beat: KO + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), DY.push({
            sound: "harp_pling",
            beat: tD,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), DY
        }(DY, FY)) AY ? IY.push(setTimeout((() => {
        OY(gY)
      }), Math.max(0, gY.beat - gY.lead / gY.rate))) : gY.beat !== LD && "magicAccent2" !== gY.sound && "trumpetFlare" !== gY.sound || OY(gY);
      return () => {
        for (const YY of IY) clearTimeout(YY);
        for (const YY of RY) YY.fade(YY.getVolume(), 0, 120)
      }
    }
    class zO {
      constructor(YY) {
        this.deps = YY, this.pending = new Map, this.localHook = null
      }
      hookWaiting(YY, rY) {
        this.pending.delete(YY);
        const DY = this.deps.now();
        if (null === rY) {
          var FY;
          if ((null === (FY = this.localHook) || void 0 === FY ? void 0 : FY.hookId) === YY) {
            const YY = DY >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(YY)
          }
          return
        }
        const AY = DY + rY;
        this.settle(YY, AY) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(YY, {
          untilMs: DY + 1e3,
          biteAtMs: AY
        }))
      }
      getLocalHook() {
        var YY, rY;
        return null !== (YY = null === (rY = this.localHook) || void 0 === rY ? void 0 : rY.hookId) && void 0 !== YY ? YY : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const YY = this.deps.now();
        for (const [rY, {
            untilMs: DY,
            biteAtMs: FY
          }] of this.pending)(this.settle(rY, FY) || YY > DY) && this.pending.delete(rY)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(YY, rY) {
        const DY = this.deps.getLineOwner(YY);
        if (null === DY) return !1;
        if (!this.deps.isLocalPlayer(DY)) return !0;
        if (this.localHook = {
            hookId: YY,
            biteAtMs: rY
          }, !this.deps.isHushWaiting()) {
          const [rY, DY] = this.deps.getHookPosition(YY);
          this.deps.onCastLanded(rY, DY)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var ZO = DY(3815);
    const CO = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      fO = {
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
    class jO {
      constructor(YY) {
        this.deps = YY, this.tell = null
      }
      receiveTell(YY) {
        let {
          biteTellTier: rY
        } = YY;
        this.tell = {
          tier: rY,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(YY) {
        const rY = this.tell;
        if (this.tell = null, !YY) return;
        const DY = null !== rY && this.deps.now() - rY.atMs <= 3e3 ? rY.tier : 0;
        this.deps.vibrate(CO[DY])
      }
      burstAtHook() {
        const YY = this.tell,
          rY = this.deps.getLocalHookPosition();
        null === YY || YY.burst || null === rY || (YY.burst = !0, this.deps.playParticles(function(YY, rY) {
          let [DY, FY, AY] = rY;
          const {
            count: IY,
            rise: RY,
            colour: OY
          } = fO[YY], [gY, aY, vY] = OY;
          return {
            texture: "glint",
            pos1: [DY - .3, FY, AY - .3],
            pos2: [DY + .3, FY + .2, AY + .3],
            dir1: [-.6, RY, -.6],
            dir2: [.6, 1.4 * RY, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: IY,
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
              minColor: [gY, aY, vY, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [gY, aY, vY, 0],
              maxColor: [gY, aY, vY, 0]
            }],
            blendMode: ZO.g.Add,
            hideDist: 48
          }
        }(YY.tier, rY)))
      }
    }
    var hO = DY(1256),
      dO = DY(1816),
      JO = DY(40);

    function MO(YY, rY) {
      return [{
        timeFraction: 0,
        minColor: [255 * YY[0], 255 * YY[1], 255 * YY[2], 1],
        maxColor: [255 * rY[0], 255 * rY[1], 255 * rY[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const wO = [0, 0, 0],
      bO = {
        texture: "glint",
        mipmaps: !1,
        gu: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: wO,
        dir2: wO,
        blendMode: ZO.g.OneOne
      },
      XO = {
        ...bO,
        colorGradients: MO([1, .88, .38], [1, .65, .15])
      },
      qO = {
        ...bO,
        colorGradients: MO([.55, .95, 1], [.9, 1, 1])
      },
      pO = [.5, .5, .5],
      kO = {
        texture: "glint",
        mipmaps: !1,
        gu: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: MO([1, .12, .12], [1, .35, .2]),
        blendMode: ZO.g.OneOne
      };
    class GO {
      constructor() {
        this.drops = new Map
      }
      Cy(YY, rY) {
        if ("overflowFlash" === rY.kind) {
          const [DY, FY, AY] = rY.position, IY = YY.createParticles(kO, {
            pos: [DY, FY, AY],
            half: pO
          });
          return IY.emit(18), void IY.stop()
        }
        this.drops.has(rY.itemId) || this.drops.set(rY.itemId, {
          owner: rY.owner,
          cosmetic: rY.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Zu(YY) {
        if (0 === this.drops.size) return;
        const rY = performance.now(),
          DY = YY.getCameraPosition();
        let FY = 0;
        for (const IY of this.drops.values()) null !== IY.particles && FY++;
        for (const [IY, RY] of this.drops) {
          const OY = YY.getPositionView(IY);
          if (null === OY) {
            var AY;
            if (RY.seen || rY - RY.markedAt > 5e3) null !== RY.particles && FY--, null === (AY = RY.particles) || void 0 === AY || AY.stop(), this.drops.delete(IY);
            continue
          }
          RY.cosmetic || !YY.isLocalPlayer(RY.owner) || RY.pickupDelayCleared || (YY.clearPickupDelay(IY), RY.pickupDelayCleared = !0);
          const gY = RY.lastPosition,
            aY = RY.seen && (OY[0] - gY[0]) ** 2 + (OY[1] - gY[1]) ** 2 + (OY[2] - gY[2]) ** 2 > 4e-4,
            vY = (OY[0] - DY[0]) ** 2 + (OY[1] - DY[1]) ** 2 + (OY[2] - DY[2]) ** 2 < 2025;
          RY.seen = !0, gY[0] = OY[0], gY[1] = OY[1], gY[2] = OY[2], aY && (RY.lastMovingAt = rY), null !== RY.particles && (!vY || rY - RY.lastMovingAt > 500) && (RY.particles.stop(), RY.particles = null, FY--), aY && vY && null === RY.particles && FY < 32 && (RY.particles = YY.createParticles(RY.cosmetic ? qO : XO, {
            pos: OY
          }), FY++), null !== RY.particles && (RY.particles.moveTo(OY), RY.particles.setEmitRate(aY ? 12 : 0)), !aY && null === RY.particles && rY - Math.max(RY.lastMovingAt, RY.markedAt) > 2e3 && this.drops.delete(IY)
        }
      }
      dispose() {
        for (const rY of this.drops.values()) {
          var YY;
          null === (YY = rY.particles) || void 0 === YY || YY.stop()
        }
        this.drops.clear()
      }
    }
    var xO = DY(213);
    const nO = xO.d.jW * xO.d.playerEyeToHeightRatio;
    class PO {
      constructor(YY) {
        this.host = YY, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Cy(YY) {
        this.lava = YY, this.nextUpdateAt = 0
      }
      Zu() {
        var YY;
        const rY = this.host.now();
        if (rY < this.nextUpdateAt) return;
        this.nextUpdateAt = rY + 250;
        const DY = this.host.playerPosition(),
          FY = DY && this.findNearest([DY[0], DY[1] + nO, DY[2]]);
        if (!FY || FY.distance >= 40) return void this.stop();
        const AY = .5 * Math.min(1, (40 - FY.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(AY) : this.loop = this.host.play("lavaFlow", AY, FY.position, 40 + nO, 9, !0), null === (YY = this.loop) || void 0 === YY || YY.setPosition(FY.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var YY;
        null === (YY = this.loop) || void 0 === YY || YY.stop(), this.loop = null
      }
      findNearest(YY) {
        let rY = -1,
          DY = 1 / 0;
        for (let FY = 0; FY < this.lava.length; FY += 3) {
          const AY = this.lava[FY] - YY[0],
            IY = this.lava[FY + 1] - YY[1],
            RY = this.lava[FY + 2] - YY[2],
            OY = AY * AY + IY * IY + RY * RY;
          OY < DY && (DY = OY, rY = FY)
        }
        return rY < 0 ? null : {
          position: [this.lava[rY], this.lava[rY + 1], this.lava[rY + 2]],
          distance: Math.sqrt(DY)
        }
      }
    }
    var UO = DY(1786),
      LO = DY(38005);
    const tO = {
      "Grey Portal": "Gray"
    };
    for (const Ig of AY.Fc) tO[`${Ig} Portal`] = Ig;
    const Yg = Object.keys(tO),
      rg = Object.fromEntries(Yg.map((YY => [YY, (0, AY.Y)(AY.K[`${(0,AY.te)(tO[YY])}Team`])])));
    Object.fromEntries(Yg.map((YY => [YY, AY.K[`${(0,AY.te)(tO[YY])}UiText`]])));
    class Dg {
      constructor(YY, rY) {
        this.presentation = YY, this.portal = rY, this.unlocked = void 0
      }
      Cy(YY) {
        const rY = !1 === this.unlocked && YY;
        this.unlocked = YY, this.Zu();
        const {
          min: DY,
          max: FY,
          unlockedBlock: AY
        } = this.portal;
        if (rY && this.presentation.hasChunk(...DY)) {
          const [YY, rY, IY] = rg[AY];
          this.presentation.playParticles({
            pos1: [...DY],
            pos2: FY.map((YY => YY + 1)),
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
              minColor: [YY, rY, IY, 1],
              maxColor: [Math.min(255, YY + 55), Math.min(255, rY + 55), Math.min(255, IY + 90), 1]
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
      Zu() {
        var YY;
        const rY = this.unlocked ? this.portal.unlockedBlock : null !== (YY = this.portal.lockedBlock) && void 0 !== YY ? YY : "Light Gray Portal",
          {
            min: DY,
            max: FY
          } = this.portal;
        for (let AY = DY[0]; AY <= FY[0]; AY++)
          for (let YY = DY[1]; YY <= FY[1]; YY++)
            for (let IY = DY[2]; IY <= FY[2]; IY++) this.presentation.hasChunk(AY, YY, IY) && this.presentation.sE(AY, YY, IY) !== rY && this.presentation.Rl(AY, YY, IY, rY)
      }
    }
    const Fg = {
        farming_1: {
          raises: YY => "NPC" === YY.type && "chef" === YY.variation,
          rise: .4
        },
        fishing_1: {
          raises: YY => "Draugr Warper" === YY.type,
          rise: .4
        }
      },
      Ag = (YY, rY, DY, IY) => {
        let {
          localPlayerId: RY
        } = IY;
        const OY = new oA({
          translate: (YY, rY) => (0, NA.y)(hO.h.get().getCurrentLanguageCode(), YY, rY),
          translateWithIcons: (YY, rY) => (0, NA.u)(hO.h.get().getCurrentLanguageCode(), YY, rY),
          setMenuOpen: YY => {
            YY ? (0, pY.o)() : (0, pY.f)()
          },
          dismissMenu: pY.h,
          publishSkills: YY => {
            kY.g.vo(FD, YY, !0)
          },
          publishQuests: YY => {
            kY.g.vo(OD, YY, !0)
          },
          publishQuestNotification: YY => {
            kY.g.vo(gD, YY, !0)
          },
          publishDungeons: YY => {
            kY.g.vo(uD, YY, !0)
          },
          publishCollections: YY => {
            kY.g.vo(CD, YY, !0)
          },
          publishMap: YY => {
            kY.g.vo(sY, YY, !0)
          },
          publishHud: YY => {
            kY.g.vo(iA, YY, !0)
          },
          publishPortalTransit: YY => {
            kY.g.vo(jD, YY, !0)
          },
          isLoadingScreenUp: () => mA.b.get("loadingOverlayVisible"),
          publishDailyReward: YY => {
            kY.g.vo(JD, YY, !0)
          },
          publishMailbox: YY => {
            kY.g.vo(qD, YY, !0)
          },
          publishQuestGraph: YY => {
            kY.g.vo(kD, YY, !0)
          },
          publishForge: YY => {
            kY.g.vo(sF, YY, !0)
          },
          publishSmuggler: YY => {
            kY.g.vo(QF, YY, !0)
          },
          publishKeepersChair: YY => {
            kY.g.vo(eF, YY, !0)
          },
          publishReachLog: YY => {
            kY.g.vo(BF, YY, !0)
          },
          publishLampLight: YY => {
            kY.g.vo(CF, YY, !0)
          },
          publishMagmaward: YY => {
            kY.g.vo(jF, YY, !0)
          },
          publishGlowtide: YY => {
            kY.g.vo(dF, YY, !0)
          },
          publishGlowMeter: YY => {
            kY.g.vo(MF, YY, !0)
          },
          publishHushWait: YY => {
            kY.g.vo(bF, YY, !0)
          },
          publishPassage: YY => {
            kY.g.vo(EF, YY, !0)
          },
          publishTideCharts: YY => {
            kY.g.vo(qF, YY, !0)
          },
          publishRegulars: YY => {
            kY.g.vo(LF, YY, !0)
          },
          publishHiddenWaters: YY => {
            kY.g.vo(FA, YY, !0)
          },
          publishDialogue: YY => {
            kY.g.vo(IA, YY, !0)
          },
          publishAutographs: YY => {
            kY.g.vo(vA, YY, !0)
          },
          onDailyRewardStarted: YY => {
            dY.playSound(RY, YY.day === cY ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (YY, rY) => {
            dY.playSound(RY, "exp_collect", .35, 1 + .6 * YY / (rY - 1)), kY.g.vo(MD, YY === rY - 1)
          },
          onDailyRewardItemLanded: YY => {
            dY.playSound(RY, "pickUp", .6, 1 + .15 * YY)
          },
          onMailboxStarted: () => {
            dY.playSound(RY, "rpgMetalClick", .6, 1), dY.playSound(RY, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            dY.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: JO.q,
          requestTracking: YY => {
            dY.sendCommand(`quests track ${YY}`)
          },
          requestDungeonEnter: (YY, rY) => {
            dY.sendCommand(`${zY.m}${YY} ${rY}`)
          },
          requestQuestJump: YY => {
            dY.sendCommand(`${ZY} jump ${YY}`)
          },
          requestQuestArrive: (YY, rY) => {
            const DY = `${ZY} arrive ${YY}`;
            dY.sendCommand(rY ? `${DY} complete` : DY)
          },
          requestForge: YY => {
            let {
              blade: rY,
              guard: DY,
              handle: FY
            } = YY;
            dY.sendCommand(`forge ${rY} ${DY} ${FY}`)
          },
          requestDialogue: () => {
            dY.sendCommand("quests dialogue")
          },
          requestSmuggle: (YY, rY) => {
            dY.sendCommand(`smuggle ${YY} ${rY}`)
          },
          requestKeepersChairAim: YY => {
            dY.sendCommand(`keeperschair-aim ${YY}`)
          },
          requestReachLogOpen: () => {
            dY.sendCommand("reachlog-open")
          },
          requestLampLight: YY => {
            dY.sendCommand(`${YY}`)
          },
          requestTravel: YY => {
            dY.sendCommand(`map travel ${YY.kind} ${YY.id} ${YY.requestId}`)
          }
        });
        let gY, aY, vY, uY, iY, yY, QY, VY, SY, lY, TY, BY, KY;
        const CY = new GO;
        let dY, wY = null;
        const bY = Fg[null !== DY && void 0 !== DY ? DY : ""],
          xY = (YY, rY) => {
            null !== bY && void 0 !== bY && bY.raises(rY) && dY.setNametagOffset(YY, bY.rise)
          },
          nY = new jO({
            getLocalHookPosition: () => {
              const YY = PY.getLocalHook();
              return null !== YY && dY.checkValid(YY) ? dY.lE(YY) : null
            },
            playParticles: YY => {
              dY.playParticleEffect(YY)
            },
            vibrate: YY => {
              GY.f.play("fishBite", YY)
            },
            now: () => performance.now()
          }),
          PY = new zO({
            getLineOwner: YY => dY.checkValid(YY) ? dY.getLineOwner(YY) : null,
            isLocalPlayer: YY => dY.isLocalPlayer(YY),
            getHookPosition: YY => {
              const [rY, , DY] = dY.lE(YY);
              return [rY, DY]
            },
            isHushWaiting: () => {
              var YY;
              return "waiting" === (null === (YY = OY.hushWait.getSnapshot()) || void 0 === YY ? void 0 : YY.phase)
            },
            onCastLanded: (YY, rY) => {
              OY.tideCharts.castLanded(YY, rY)
            },
            onLocalHookSettled: () => {
              nY.onLocalHookSettled()
            },
            onLocalWaitEnded: YY => {
              nY.onLocalWaitEnded(YY)
            },
            now: () => performance.now()
          }),
          UY = new PO({
            now: () => performance.now(),
            playerPosition: () => dY.checkValid(RY) ? dY.lE(RY) : null,
            play: (YY, rY, DY, FY, AY, IY) => dY.playSound(RY, YY, rY, 1, {
              zY: DY,
              maxHearDist: FY,
              refDistance: AY
            }, IY)
          }),
          LY = new Map;
        let tY;
        return {
          onCreate: YY => {
            if (dY = YY, wY = new LO.SkyblockEntityFacing(YY, bY ? xY : null), OY.portalTransit.resumeArrival(null !== DY && void 0 !== DY ? DY : null), (null !== DY && void 0 !== DY ? DY : FY) === FY) {
              let YY = -1 / 0;
              tY = kY.g.subscribe("toggleMenu", (rY => {
                const DY = performance.now();
                "inventory|Workbench" !== rY || "cross_to_hub" !== OY.quests.getTrackedQuestId() || DY - YY < 1e4 || (YY = DY, dY.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [FY, AY] of Object.entries(null !== (rY = fY[null !== DY && void 0 !== DY ? DY : ""]) && void 0 !== rY ? rY : {})) {
              var rY;
              LY.set(FY, new Dg({
                hasChunk: (rY, DY, FY) => YY.isBlockInLoadedChunk(rY, DY, FY),
                sE: (rY, DY, FY) => YY.blockIdToBlockName(YY.getBlockId(rY, DY, FY)),
                Rl: (rY, DY, FY, AY) => {
                  YY.Rl(rY, DY, FY, AY)
                },
                playParticles: rY => {
                  YY.playParticleEffect(rY)
                }
              }, AY))
            }
            KY = (0, UO.c)((YY => function(YY) {
              return Object.hasOwn(br, YY) || YY.startsWith("npc_")
            }(YY) ? qr(YY) : null)), OY.resolveItemName = (rY, DY) => {
              const FY = YY.getItemStat(RY, rY, "displayName");
              return FY && "object" === typeof FY && "translationKey" in FY ? DY(FY.translationKey, (0, NA.r)(FY.params, dO.e.shown)) : "string" === typeof FY ? DY(FY) : rY
            }, OY.quests.notifications.onShown = YY => {
              "quest" === YY ? dY.playSound(RY, "magicAccent1", 1, 1) : "skillLevel" === YY ? dY.playSound(RY, "magicAccent1", 1, .6) : "landmark" === YY ? dY.playSound(RY, "trumpetFlare", 1, .6) : "npcNote" === YY ? dY.playSound(RY, "magicAccent2", .8, 1.1) : "started" === YY ? dY.playSound(RY, (0, cO.d)("bigDrumSwish"), 1, 1) : dY.playSound(RY, (0, cO.d)("rpgHandleSmallLeather"), 1, 1)
            }, OY.forge.onPartSelected = () => {
              dY.playSound(RY, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, OY.forge.onForgeStarted = (rY, DY, FY) => HO(YY, RY, rY, DY, FY), OY.smuggler.onBought = () => {
              dY.playSound(RY, (0, cO.d)("rpgHandleSmallLeather"), 1, 1), dY.playSound(RY, "chestOpen", .6, 1)
            }, OY.compass.register(new oY(OY.map, !0)), OY.compass.register(new oY(OY.map, !1)), OY.compass.register(new EY(OY.map)), OY.compass.register(new mY((() => OY.quests.getSnapshot().compassTarget)));
            for (const DY of ["enemy", "npc"]) OY.compass.register(new WY(OY.map, DY, (rY => YY.checkValid(rY) ? YY.lE(rY) : void 0), (rY => YY.isAlive(rY))))
          },
          onAfterRender: (YY, rY) => {
            const DY = dY.checkValid(RY) ? dY.lE(RY) : null;
            OY.navigation.afterRender(DY, performance.now(), rY), OY.glowtide.afterRender(DY, rY.cameraHeading), OY.tideCharts.afterRender(DY), PY.afterRender()
          },
          onClose: () => {
            var YY, rY, DY, FY, AY, IY, RY, sY, yY, oY, WY, EY, mY, eY, NY;
            tY && kY.g.unsubscribe(tY), null === (YY = KY) || void 0 === YY || YY(), CY.dispose(), UY.dispose(), null === (rY = wY) || void 0 === rY || rY.dispose(), PY.dispose(), OY.dispose(), null === (DY = gY) || void 0 === DY || DY(), null === (FY = aY) || void 0 === FY || FY(), null === (AY = vY) || void 0 === AY || AY(), null === (IY = uY) || void 0 === IY || IY(), null === (RY = iY) || void 0 === RY || RY(), null === (sY = QY) || void 0 === sY || sY(), null === (yY = undefined) || void 0 === yY || yY(), null === (oY = VY) || void 0 === oY || oY(), null === (WY = SY) || void 0 === WY || WY(), null === (EY = lY) || void 0 === EY || EY(), null === (mY = TY) || void 0 === mY || mY(), null === (eY = undefined) || void 0 === eY || eY(), null === (NY = BY) || void 0 === NY || NY()
          },
          onPlayerChangeBlock: (YY, rY, FY, IY, gY, aY) => {
            if (YY === RY && "Air" === aY) {
              const YY = dY.getClientOption(RY, "creative");
              OY.skills.predictBlock([rY, FY, IY], gY, YY);
              const aY = function(YY, rY) {
                  if ("hub" === rY || "farming_1" === rY || "mining_1" === rY) return !JY.has(YY) || "hub" !== rY && "mining_1" !== rY ? Object.hasOwn(hY, YY) ? hY[YY] : void 0 : jY
                }(gY, DY),
                vY = ("hub" === DY || "mining_1" === DY) && (AY.jd.some((YY => YY === gY)) || Object.hasOwn(MY, gY) || "mining_1" === DY && "Block of Coal" === gY);
              YY || void 0 === aY && !vY || dY.Rl(rY, FY, IY, null !== aY && void 0 !== aY ? aY : jY)
            }
          },
          onPlayerAttackEntity: (YY, rY) => {
            if (YY !== RY || "Player" !== dY.getEntityType(rY)) return;
            const [DY, FY, AY] = dY.lE(rY);
            dY.burstParticlePreset("critical", [DY, FY + 1, AY], 10)
          },
          onChangeBlockFail: YY => {
            for (const {
                oD: rY
              }
              of YY) OY.skills.rejectBlock(rY)
          },
          onReceivedMessageFromServer: (YY, rY) => {
            if ("skyblockGatedPortal" === YY) {
              var DY;
              const [YY, FY] = rY;
              return void(null === (DY = LY.get(YY)) || void 0 === DY || DY.Cy(FY))
            }
            if ("skyblockDailyReward" === YY) return void OY.dailyReward.Cy(rY);
            if ("skyblockMailbox" === YY) return void OY.mailbox.Cy(rY);
            if ("skyblockPortalTransit" === YY) return void OY.portalTransit.Cy(rY);
            if ("skyblockLoot" === YY) return void CY.Cy(dY, rY);
            if ("skyblockLava" === YY) return void UY.Cy(rY);
            if ("skyblockForge" === YY) return void OY.forge.Cy(rY);
            if ("skyblockMagmaward" === YY) return void OY.magmaward.Cy(rY);
            if ("skyblockGlowtide" === YY) return void OY.glowtide.Cy(rY);
            if ("skyblockGlowMeter" === YY) return void OY.glowMeter.Cy(rY);
            if ("skyblockHushWait" === YY) return void OY.hushWait.Cy(rY);
            if ("skyblockPassage" === YY) {
              const YY = rY;
              return OY.passage.Cy(YY), OY.reachLog.receivePassagePhase(YY.passagePhase), lY ??= (0, eY.x)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: OY.passage.show
              }), void OY.keepersChair.receivePassage({
                keepersChairPassagePhase: YY.passagePhase,
                keepersChairPassageNextPhase: YY.passageNextPhase,
                keepersChairPassageTurnsInMs: YY.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === YY) {
              const YY = rY;
              return OY.tideCharts.Cy(YY), void(YY.tideCharts.length > 0 && (TY ??= (0, eY.x)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: OY.tideCharts.show
              })))
            }
            if (YY === XY.z) {
              var FY;
              const {
                hookId: YY,
                waiting: DY
              } = rY;
              return void PY.hookWaiting(YY, null !== (FY = null === DY || void 0 === DY ? void 0 : DY.remainingMs) && void 0 !== FY ? FY : null)
            }
            if ("skyblockBiteTell" === YY) return void nY.receiveTell(rY);
            if ("skyblockSmuggler" === YY) return void OY.smuggler.Cy(rY);
            if ("skyblockKeepersChair" === YY) return OY.keepersChair.Cy(rY), void OY.lampLight.setAtChair(OY.keepersChair.isAtChair());
            if ("skyblockLampLight" === YY) {
              const YY = rY;
              var AY;
              if (OY.lampLight.Cy(YY), YY.lampLightReleasing) SY ??= (0, eY.x)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  OY.lampLight.setRelease(!1)
                }
              });
              else null === (AY = SY) || void 0 === AY || AY(), SY = void 0;
              return
            }
            if ("skyblockRegulars" === YY) return void OY.regulars.Cy(rY);
            if ("skyblockHiddenWaters" === YY) return void OY.hiddenWaters.Cy(rY);
            if ("skyblockReachLog" === YY) return OY.reachLog.Cy(rY), void(VY ??= (0, eY.x)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: KF
              },
              onClick: OY.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === YY) {
              for (const [YY, DY, FY, AY] of rY) dY.Rl(YY, DY, FY, AY);
              return
            }
            if ("skyblockHud" === YY) OY.receiveHud(rY);
            else if ("skyblockMap" === YY) OY.map.Cy(rY);
            else if (YY === qY.e) OY.skills.Cy(rY);
            else if (YY === HY && "dialogue" === rY.kind) OY.dialogue.Cy(rY);
            else if (YY === HY) OY.quests.Cy(rY);
            else if (YY === zY.i) OY.dungeons.Cy(rY);
            else if ("sbCollections" === YY) OY.collections.Cy(rY);
            else if ("skyblockQuestGraph" === YY) OY.questGraph.Cy(rY);
            else {
              if ("skyblockAutographs" !== YY) return;
              OY.autographs.Cy(rY)
            }
            if (!aY && OY.map.getSnapshot().enabled) {
              const YY = (0, eY.x)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: OY.map.show
                }),
                rY = (0, pY.p)(OY.map.show);
              aY = () => {
                YY(), rY()
              }
            }!vY && OY.skills.getSnapshot().enabled && (vY = (0, eY.x)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: OY.skills.show
            })), !QY && OY.collections.getSnapshot().enabled && (QY = (0, eY.x)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: OY.collections.show
            })), !uY && OY.quests.getSnapshot().enabled && (uY = (0, eY.x)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: OY.quests.show
            })), !BY && OY.autographs.getSnapshot().enabled && (BY = (0, eY.x)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: OY.autographs.show
            }));
            const IY = OY.dungeons.getSnapshot().enabled;
            var RY;
            (vY || uY || IY) && yY !== IY && (yY = IY, null === (RY = iY) || void 0 === RY || RY(), iY = (0, eY.x)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: zr
              },
              disabled: !IY,
              panel: !0,
              onClick: OY.dungeons.show
            }));
            gY || (gY = (0, pY.q)((0, NY.createElement)(NO, {
              controller: OY
            }), {
              content: (0, NY.createElement)(BO, {
                controller: OY
              }),
              onClose: OY.close
            }))
          },
          Zu: () => {
            var YY;
            for (const rY of LY.values()) rY.Zu();
            CY.Zu(dY), UY.Zu(), null === (YY = wY) || void 0 === YY || YY.Zu(), OY.skills.Zu(), OY.quests.Zu(), OY.dailyReward.Zu(), OY.mailbox.Zu(), OY.map.Zu()
          }
        }
      }
  },
  37921: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => RY,
      g: () => OY,
      i: () => FY,
      m: () => IY,
      n: () => AY,
      q: () => gY
    });
    const FY = "skyblockDungeons",
      AY = "skyblockHeldBoss",
      IY = "dungeonEnter ",
      RY = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      OY = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function gY(YY) {
      let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const DY = Math.max(0, Math.floor(YY)),
        FY = Math.floor(DY % 1e3 / 100),
        AY = Math.floor(DY / 1e3),
        IY = AY % 60,
        RY = Math.floor(AY / 60),
        OY = RY % 60,
        gY = Math.floor(RY / 60),
        aY = YY => YY < 10 ? `0${YY}` : String(YY),
        vY = rY ? `.${FY}` : "";
      return gY > 0 ? `${gY}:${aY(OY)}:${aY(IY)}${vY}` : `${OY}:${aY(IY)}${vY}`
    }
  },
  35799: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => AY,
      e: () => FY
    });
    const FY = "skyblockSkills",
      AY = "skills_test_gym"
  },
  8774: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => AY,
      g: () => RY
    });
    const FY = [{
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

    function AY(YY) {
      let rY, DY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof YY) {
        if (!Number.isFinite(YY)) return "0";
        if (Math.abs(YY) < 100) {
          const rY = YY < 0 ? "-" : "",
            DY = Math.abs(YY);
          return DY >= 10 ? `${rY}${DY.toFixed(1).replace(/\.0$/,"")}` : `${rY}${DY.toFixed(2).replace(/\.?0+$/,"")}`
        }
        rY = BigInt(Math.floor(YY))
      } else rY = YY;
      const AY = rY < 0n ? -rY : rY,
        IY = rY < 0n ? "-" : "",
        RY = AY.toString();
      if (RY.length <= DY) return `${IY}${RY}`;
      const OY = 3 * Math.floor((RY.length - 1) / 3);
      if (OY < 3) return `${IY}${RY}`;
      if (OY > 3 * FY.length) {
        const YY = RY[0],
          rY = RY.slice(1, 3).replace(/0+$/, "");
        return `${IY}${rY?`${YY}.${rY}`:YY}e${RY.length-1}`
      }
      const {
        threshold: gY,
        suffix: aY
      } = FY[FY.length - OY / 3], vY = AY / gY, uY = Number(1000n * (AY % gY) / gY), sY = Number(vY) + uY / 1e3;
      let iY;
      return iY = sY >= 100 ? Math.floor(sY).toString() : sY >= 10 ? sY.toFixed(1).replace(/\.0$/, "") : sY.toFixed(2).replace(/\.?0+$/, ""), `${IY}${iY}${aY}`
    }
    const IY = FY.map((YY => {
      let {
        threshold: rY,
        suffix: DY
      } = YY;
      return {
        threshold: Number(rY),
        suffix: DY
      }
    })).filter((YY => {
      let {
        threshold: rY
      } = YY;
      return Number.isFinite(rY)
    }));

    function RY(YY) {
      const rY = Math.abs(YY),
        DY = YY < 0 ? "-" : "";
      for (const {
          threshold: FY,
          suffix: AY
        }
        of IY)
        if (rY >= FY) {
          const YY = rY / FY;
          if (YY >= 1e3) return `${DY}${rY.toExponential(2).replace("e+","e")}`;
          let IY;
          return IY = YY >= 100 ? Math.floor(YY).toString() : YY >= 10 ? YY.toFixed(1).replace(/\.0$/, "") : YY.toFixed(2).replace(/\.?0+$/, ""), `${DY}${IY}${AY}`
        } return `${DY}${rY}`
    }
  },
  37934: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  37936: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  37938: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  37940: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  37946: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  37950: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  37958: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  37963: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/hub.8b20a64678134496251d.png"
  },
  37970: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  37975: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  37980: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  37982: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  37990: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  37995: (YY, rY, DY) => {
    YY.exports = DY.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18131: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20222: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22651: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24164: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25837: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25858: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  37918: YY => {
    YY.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);