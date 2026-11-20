export const id = 190;
export const ids = [49, 190];
export const modules = {
  38186: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      e: () => EU
    });
    const tU = new WeakMap;

    function pU(UU, RU) {
      return tU.set(UU, RU), UU
    }

    function EU(UU) {
      var RU;
      return null !== (RU = tU.get(UU)) && void 0 !== RU ? RU : null
    }
  },
  38083: (UU, RU, gU) => {
    function tU(UU, RU, gU) {
      var tU;
      const {
        width: pU,
        height: EU
      } = gU, PU = null !== (tU = UU.text) && void 0 !== tU ? tU : UU, TU = (PU.x / 100 - .5) * pU, qU = (PU.y / 100 - .5) * EU, KU = pU / 2 - RU.x;
      if (null !== UU.text && Math.abs(TU) <= KU && qU >= RU.top - EU / 2 && qU <= EU / 2 - RU.bottom) return {
        x: PU.x,
        y: PU.y
      };
      const cU = Math.min(0 === TU ? 1 / 0 : KU / Math.abs(TU), qU > 0 ? (EU / 2 - RU.bottom) / qU : qU < 0 ? (RU.top - EU / 2) / qU : 1 / 0);
      return !Number.isFinite(cU) || cU < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + TU * cU / pU * 100,
        y: 50 + qU * cU / EU * 100
      }
    }
    gU.d(RU, {
      e: () => tU
    })
  },
  38092: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    const tU = 4,
      pU = 12e3,
      EU = 1e3;
    class PU {
      constructor() {
        let {
          limit: UU = tU,
          windowMs: RU = pU,
          spacingMs: gU = EU,
          now: PU = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = UU, this.windowMs = RU, this.spacingMs = gU, this.now = PU
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const UU of this.priority) UU.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const UU = this.now();
        this.sent.push(UU), this.lastSentAt = UU, this.schedule(), this.notify()
      }
      addPriority(UU) {
        return this.priority.add(UU), () => {
          this.priority.delete(UU)
        }
      }
      subscribe(UU) {
        return this.listeners.add(UU), () => {
          this.listeners.delete(UU)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const UU of this.priority)
          if (UU.waiting()) return !0;
        return !1
      }
      prune() {
        const UU = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= UU;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const UU = this.now(),
          RU = this.lastSentAt + this.spacingMs,
          gU = Math.min(RU > UU ? RU : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        gU !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, gU - UU)))
      }
      notify() {
        for (const UU of this.listeners) UU()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38076: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      constructor(UU, RU, gU) {
        this.yh = UU, this.beforeOpen = RU, this.afterClose = gU, this.open = !1, this.pC = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.pC && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(UU) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(UU)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.pC = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.pC || (this.snapshot = this.buildSnapshot(), this.yh(this.snapshot))
      }
    }
  },
  38190: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      SkyblockEntityFacing: () => TU,
      needsSkyblockEntityFacing: () => PU
    });
    var tU = gU(572),
      pU = gU(3937),
      EU = gU(38198);

    function PU(UU, RU) {
      if (UU.metaInfo === tU.c || "Iron Guardian" === UU.type || "Gold Guardian" === UU.type) return !0;
      if ("Pig" === UU.type) return "sitting" === UU.pose;
      if ("Person" !== UU.meshKind || void 0 === UU.meshOpts) return !1;
      let gU = null === RU || void 0 === RU ? void 0 : RU.get(UU.meshOpts);
      if (void 0 === gU) {
        var EU, PU;
        const tU = (0, pU.j)(UU);
        gU = !1, "pig_napoleon" === (null === tU || void 0 === tU || null === (EU = tU.opts.textures) || void 0 === EU ? void 0 : EU.head) ? gU = !0 : "npc_pig_head" === (null === tU || void 0 === tU || null === (PU = tU.opts.textures) || void 0 === PU ? void 0 : PU.head) && (gU = "sitting" === tU.opts.pose || "sitting"), RU && (RU.size >= 256 && RU.clear(), RU.set(UU.meshOpts, gU))
      }
      return "sitting" === gU ? "sitting" === UU.pose : gU
    }(0, EU.d)("skyblock", ((UU, RU) => {
      RU.setFacingTolerance(PU(UU) ? 0 : null)
    }));
    class TU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = UU, this.alsoVisit = RU, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = UU => {
          var RU;
          const gU = this.api.getEntityInfo(UU);
          gU && (PU(gU, this.meshFacingCache) && (this.api.setFacingTolerance(UU, 0), this.nextFacing.add(UU)), null === (RU = this.alsoVisit) || void 0 === RU || RU.call(this, UU, gU))
        }
      }
      HG() {
        const {
          api: UU
        } = this, RU = this.nextFacing;
        UU.forEachEntity(this.visit);
        for (const gU of this.facing) RU.has(gU) || UU.setFacingTolerance(gU, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = RU
      }
      dispose() {
        for (const UU of this.facing) this.api.setFacingTolerance(UU, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38073: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => qq
    });
    const tU = "island";
    var pU = gU(311);
    const EU = (0, pU.Ib)([0, 0, -1]),
      PU = [{
        name: "S",
        bearing: (0, pU.Ib)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, pU.Ib)([-1, 0, 0])
      }, {
        name: "N",
        bearing: EU
      }, {
        name: "W",
        bearing: (0, pU.Ib)([1, 0, 0])
      }];

    function TU(UU, RU, gU) {
      return [100 * (gU.mapMaxX - UU) / (gU.mapMaxX - gU.mapMinX), 100 * (RU - gU.mapMinZ) / (gU.mapMaxZ - gU.mapMinZ)]
    }

    function qU(UU, RU, gU) {
      const pU = "local" === RU,
        EU = UU.background,
        PU = RU => EU ? TU(RU[0] - UU.mapOrigin[0], RU[2] - UU.mapOrigin[2], EU.bounds) : [50, 50],
        qU = (UU.insideDungeon ? [] : UU.landmarks).map((UU => {
          var RU, tU;
          return {
            id: UU.id,
            name: gU(UU.visited && UU.nameKey ? null !== (RU = UU.mapLabelKey) && void 0 !== RU ? RU : UU.nameKey : "skyblockGame:mapUnknown"),
            icon: UU.visited && null !== (tU = UU.icon) && void 0 !== tU ? tU : "unknown",
            visited: UU.visited,
            current: !1,
            position: PU(UU.position),
            travelKind: "landmark",
            travelId: UU.id
          }
        })),
        cU = UU.zones.map((RU => {
          var tU;
          return {
            id: RU.id,
            name: gU(RU.visited && RU.nameKey ? RU.nameKey : "skyblockGame:mapUnknown"),
            icon: RU.visited && null !== (tU = RU.icon) && void 0 !== tU ? tU : "unknown",
            visited: RU.visited,
            current: RU.id === UU.zoneId,
            position: RU.position,
            thumbnail: RU.visited ? RU.id : void 0,
            travelKind: "zone",
            travelId: RU.id
          }
        })),
        GU = UU.insideDungeon || !EU ? [] : UU.portals.map((UU => {
          var RU;
          return {
            id: UU.id,
            name: gU(null !== (RU = UU.nameKey) && void 0 !== RU ? RU : "skyblockGame:mapUnknown"),
            icon: UU.visited ? "dungeons" === UU.destination ? "portal_orange" : "portal" : "unknown",
            visited: UU.visited,
            current: !1,
            position: PU(UU.position),
            colour: UU.colour,
            travelKind: "zone",
            travelId: UU.destination
          }
        })),
        jU = pU ? qU : cU,
        uU = jU.filter((UU => UU.visited)).length,
        CU = EU ? (EU.bounds.mapMaxX - EU.bounds.mapMinX) / (EU.bounds.mapMaxZ - EU.bounds.mapMinZ) : 2,
        hU = EU ? JSON.stringify([EU.bounds, UU.mapOrigin]) : "";
      return {
        local: pU,
        points: jU,
        portals: pU ? GU : [],
        progress: jU.length ? gU("skyblockGame:mapDiscovered", {
          current: String(uU),
          total: String(jU.length)
        }) : null,
        percent: jU.length ? 100 * uU / jU.length : 0,
        canTravel: [...jU, ...pU ? GU : []].some((UU => UU.visited && !UU.current)),
        noLandmarks: pU && !UU.insideDungeon && 0 === qU.length,
        background: EU ? {
          imageKey: EU.imageKey,
          fallbackImageKey: UU.zoneId,
          geometryKey: hU,
          label: gU(EU.labelKey),
          colour: EU.backgroundColour,
          ratio: CU
        } : null,
        connections: KU(UU.zones),
        minimap: EU ? {
          imageKey: EU.imageKey,
          fallbackImageKey: UU.zoneId,
          geometryKey: hU,
          label: gU(EU.labelKey),
          colour: EU.backgroundColour,
          caption: gU(UU.zoneId === tU ? "skyblockGame:zoneIsland" : EU.labelKey),
          width: (EU.bounds.mapMaxX - EU.bounds.mapMinX) / EU.minimapSpan * 100 + "%",
          height: (EU.bounds.mapMaxZ - EU.bounds.mapMinZ) / EU.minimapSpan * 100 + "%",
          markers: [...qU, ...GU]
        } : null
      }
    }

    function KU(UU) {
      const RU = new Set;
      return UU.flatMap((gU => gU.connections.flatMap((tU => {
        const pU = UU.find((UU => UU.id === tU)),
          EU = [gU.id, tU].sort().join("|");
        return !pU || RU.has(EU) ? [] : (RU.add(EU), [{
          id: `${gU.id}-${tU}`,
          start: gU.position,
          end: pU.position,
          explored: gU.visited && pU.visited
        }])
      }))))
    }
    var cU = gU(38076);
    class GU extends cU.b {}
    const jU = "skyblockMapView";
    class uU extends GU {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(UU, tU, pU), this.requestTravel = RU, this.translate = gU, this.now = EU, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = UU => {
          this.tab = UU, this.feedbackKey = "", this.emit()
        }, this.travel = (UU, RU) => {
          if (!this.map || this.pending || this.pC) return;
          const gU = ("zone" === UU ? this.map.zones : this.map.landmarks).find((UU => UU.id === RU));
          if (gU) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in gU && !gU.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (gU.visited)
              if ("zone" === UU && RU === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const gU = ++this.nextRequestId;
                this.pending = {
                  requestId: gU,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: UU,
                  id: RU,
                  requestId: gU
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
      setTranslator(UU) {
        this.translate = UU, this.emit()
      }
      qC(UU) {
        var RU;
        if (!this.pC)
          if ("entities" !== UU.kind)
            if ("open" !== UU.kind) {
              var gU, tU;
              if ("snapshot" === UU.kind)(null === (gU = UU.snapshot) || void 0 === gU ? void 0 : gU.zoneId) !== (null === (tU = this.map) || void 0 === tU ? void 0 : tU.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = UU.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === UU.kind) {
                var pU;
                UU.requestId === (null === (pU = this.pending) || void 0 === pU ? void 0 : pU.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (UU.requestId === (null === (RU = this.pending) || void 0 === RU ? void 0 : RU.requestId)) {
                var EU;
                this.pending = null, this.feedbackKey = null !== (EU = UU.errorKey) && void 0 !== EU ? EU : "", null === UU.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = UU.entities
      }
      HG() {
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
          presentation: this.map ? qU(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const CU = 67.5 * Math.PI / 180;

    function hU(UU, RU) {
      const gU = Math.abs(UU);
      if (gU > CU || RU.trackHalfWidth <= 0) return null;
      const tU = RU.trackHalfWidth,
        pU = RU.screenHalfWidth / (RU.tanHalfFovX * Math.max(.5, Math.cos(RU.pitch))),
        EU = Math.min(Math.atan(.6 * tU / pU), .75 * CU),
        PU = pU * Math.tan(EU);
      let TU;
      if (gU <= EU) TU = pU * Math.tan(gU);
      else {
        const UU = CU - EU,
          RU = Math.max(0, pU * UU / (Math.cos(EU) ** 2 * (tU - PU)) - 1),
          qU = (gU - EU) / UU;
        TU = PU + (tU - PU) * (1 + RU) * qU / (1 + RU * qU)
      }
      return 50 + Math.sign(UU) * TU * 50 / tU
    }
    class QU {
      constructor(UU, RU) {
        this.map = UU, this.visited = RU, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = RU ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const UU = this.map.getSnapshot().map;
        return !UU || UU.insideDungeon ? [] : UU.landmarks.filter((UU => UU.visited === this.visited)).map((UU => {
          var RU, gU;
          return {
            id: `landmark:${UU.id}`,
            position: UU.position,
            icon: null !== (RU = UU.icon) && void 0 !== RU ? RU : "unknown",
            nameKey: null !== (gU = UU.nameKey) && void 0 !== gU ? gU : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class eU {
      constructor(UU, RU, gU, tU) {
        this.map = UU, this.kind = RU, this.position = gU, this.alive = tU, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = RU, this.range = "enemy" === RU ? 48 : 64, this.limit = 12
      }
      Hx(UU) {
        if ("enemy" !== this.kind || this.alive(UU.uE)) return this.position(UU.uE)
      }
      getPoints() {
        const UU = [];
        for (const tU of this.map.getEntities()) {
          if (tU.kind !== this.kind || "enemy" === this.kind && !this.alive(tU.compassEntityId)) continue;
          const pU = this.position(tU.compassEntityId);
          var RU, gU;
          if (pU) UU.push({
            id: `${this.kind}:${tU.compassEntityId}`,
            uE: tU.compassEntityId,
            kind: this.kind,
            icon: null !== (RU = tU.icon) && void 0 !== RU ? RU : tU.npcSkin ? `npc_${tU.npcSkin}` : this.kind,
            displayName: tU.displayName,
            position: pU,
            nameKey: null !== (gU = tU.nameKey) && void 0 !== gU ? gU : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return UU
      }
    }
    class WU {
      constructor(UU) {
        this.map = UU, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const UU = this.map.getSnapshot().map;
        return !UU || UU.insideDungeon ? [] : UU.portals.map((UU => {
          var RU;
          return {
            id: "portal:" + UU.id,
            kind: "portal",
            position: UU.position,
            nameKey: null !== (RU = UU.nameKey) && void 0 !== RU ? RU : "skyblockGame:compassUnvisitedZone",
            icon: UU.visited ? "dungeons" === UU.destination ? "portal_orange" : "portal" : "unknown",
            colour: UU.colour
          }
        }))
      }
    }
    class fU {
      constructor(UU) {
        this.target = UU, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const UU = this.target();
        return UU ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: UU.position,
          nameKey: UU.nameKey
        }] : []
      }
    }

    function xU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU.position;
      const EU = tU[0] - RU[0],
        PU = tU[2] - RU[2];
      return {
        ...UU,
        position: tU,
        offset: pU.c.computeShortestRotation(gU, (0, pU.Ib)([EU, 0, PU])),
        distance: Math.hypot(EU, tU[1] - RU[1], PU)
      }
    }
    let mU;

    function IU(UU, RU) {
      var gU;
      return (null === (gU = mU) || void 0 === gU ? void 0 : gU.locale) !== RU && (mU = {
        locale: RU,
        near: new Intl.NumberFormat(RU, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(RU, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (UU < 10 ? mU.near : mU.far).format(UU)
    }
    class JU {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(UU) {
        return this.providers.set(UU.id, UU), this.refreshAt = 0, () => {
          this.providers.get(UU.id) === UU && (this.providers.delete(UU.id), this.refreshAt = 0)
        }
      }
      frame(UU, RU, gU) {
        if (gU >= this.refreshAt) {
          this.refreshAt = gU + 200, this.candidates = [];
          for (const RU of this.providers.values()) {
            if (!RU.enabled) continue;
            const gU = RU.getPoints().map((RU => {
              const gU = RU.position;
              return {
                point: RU,
                distance: Math.hypot(gU[0] - UU[0], gU[1] - UU[1], gU[2] - UU[2])
              }
            })).filter((UU => UU.distance <= RU.range)).sort(((UU, RU) => UU.distance - RU.distance)).slice(0, RU.limit);
            for (const {
                point: UU
              }
              of gU) this.candidates.push({
              provider: RU,
              point: UU
            })
          }
        }
        const tU = [];
        for (const {
            point: pU,
            provider: EU
          }
          of this.candidates) {
          if (!EU.enabled) continue;
          const gU = EU.Hx ? EU.Hx(pU) : pU.position;
          if (gU) {
            const EU = xU(pU, UU, RU, gU);
            Math.abs(EU.offset) <= CU && tU.push(EU)
          }
        }
        return tU
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var wU = gU(36197),
      nU = gU(56);
    const bU = [{
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
      oU = bU.length;

    function ZU(UU) {
      return UU >= oU ? 1 : UU + 1
    }
    const aU = "skyblockQuests",
      YU = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      BU = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function VU(UU) {
      let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const gU = Math.max(0, Math.floor(UU)),
        tU = Math.floor(gU % 1e3 / 100),
        pU = Math.floor(gU / 1e3),
        EU = pU % 60,
        PU = Math.floor(pU / 60),
        TU = PU % 60,
        qU = Math.floor(PU / 60),
        KU = UU => UU < 10 ? `0${UU}` : String(UU),
        cU = RU ? `.${tU}` : "";
      return qU > 0 ? `${qU}:${KU(TU)}:${KU(EU)}${cU}` : `${TU}:${KU(EU)}${cU}`
    }
    const rU = "devquests",
      XU = "none",
      vU = {
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
      dU = "Compressed Messy Stone",
      HU = {
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
      SU = ["Stone", "Diorite", "Andesite", "Granite"],
      sU = new Set(SU),
      yU = (Object.keys(HU), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const kU = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function FU(UU, RU) {
      const gU = Math.floor(5 * UU / (2 * RU + 1));
      return Math.min(4, Math.max(0, gU))
    }
    var iU = gU(1238);
    var AU = gU(35963);
    var zU = gU(36191),
      MU = gU(24),
      DU = gU(8512);
    const LU = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      NU = 1e3;

    function lU(UU) {
      return Math.max(0, UU)
    }

    function OU(UU) {
      return 1 + .01 * lU(UU)
    }

    function UR(UU) {
      return 1 + .005 * lU(UU)
    }

    function RR(UU) {
      return 1 + .005 * lU(UU)
    }

    function gR(UU) {
      return .01 * lU(UU)
    }

    function tR(UU) {
      return 150 / (150 + lU(UU))
    }

    function pR(UU) {
      return 1 + .002 * lU(UU)
    }

    function ER(UU) {
      return Math.round(10 * UU) / 10
    }

    function PR(UU, RU) {
      switch (UU) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: ER(100 * (UR(RU) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: ER(100 * (OU(RU) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: ER(100 * (RR(RU) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: ER(100 * gR(RU))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: ER(100 * (1 - tR(RU)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: ER(100 * (pR(RU) - 1))
          }
      }
    }

    function TR(UU) {
      return "farming" === UU ? 200 : 100
    }

    function qR(UU, RU) {
      if (!Number.isSafeInteger(UU) || UU < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const gU = TR(RU),
        tU = UU => function(UU, RU) {
          return TR(UU) * RU * (RU + 1) / 2
        }(RU, UU);
      let pU = Math.min(NU, Math.floor((Math.sqrt(8 * UU / gU + 1) - 1) / 2));
      return pU < NU && tU(pU + 1) <= UU ? pU++ : tU(pU) > UU && pU--, {
        totalXp: UU,
        level: pU,
        xpIntoLevel: UU - tU(pU),
        xpForNextLevel: pU === NU ? null : gU * (pU + 1)
      }
    }
    const KR = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function cR(UU) {
      return KR.has(UU)
    }
    const GR = new Set(pU.wb);

    function jR(UU) {
      return GR.has(UU)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const uR = {
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
      CR = {
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
      hR = {
        ...CR,
        ...Object.fromEntries(Object.entries(yU).map((UU => {
          let [RU, gU] = UU;
          return [RU, 9 * CR[gU]]
        })))
      },
      QR = {
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
      eR = {
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
    const WR = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      fR = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function xR(UU) {
      return `rgb(${fR[UU].join(", ")})`
    }

    function mR(UU, RU, gU) {
      if (!gU) return UU(RU);
      const tU = {};
      for (const [pU, EU] of Object.entries(gU)) tU[pU] = "string" === typeof EU ? EU : UU(EU.translationKey);
      return UU(RU, tU)
    }
    class IR {
      constructor(UU, RU) {
        this.now = UU, this.getJournal = RU, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.WT = !1, this.onShown = () => {}
      }
      enqueue(UU) {
        const RU = JR(UU);
        if (RU) this.pending.push(UU);
        else {
          const RU = this.pending.findIndex(JR);
          this.pending.splice(-1 === RU ? this.pending.length : RU, 0, UU)
        }
        return (null === this.current || null !== this.followUp && !RU) && (this.advance(), !0)
      }
      setHeld(UU) {
        return this.WT = UU, !UU && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      HG() {
        const UU = this.getJournal(),
          RU = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === RU ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === RU || void 0 === RU ? void 0 : RU.kind) && UU && UU.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === RU || void 0 === RU ? void 0 : RU.kind)) {
          const UU = this.findFollowUp(this.current);
          if ("step" !== (null === UU || void 0 === UU ? void 0 : UU.kind) || UU.questId !== RU.questId || UU.step.id !== RU.step.id) return this.showFollowUp(UU, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(UU, RU, gU) {
        var tU, pU, EU, PU;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, UU, gU);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, UU);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, UU, RU);
        const {
          questCompletionKind: TU,
          questCompletionNameKey: qU
        } = this.current, KU = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, cU = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, GU = "step" === (null === (tU = this.followUp) || void 0 === tU ? void 0 : tU.kind) ? this.followUp : null, jU = "explore" === (null === (pU = this.followUp) || void 0 === pU ? void 0 : pU.kind);
        let uU;
        return uU = jU ? UU("skyblockGame:questExploreTitle") : null !== GU ? "quest" === TU ? UU("skyblockGame:questNextQuestTitle", {
          quest: UU(GU.questNameKey)
        }) : UU("skyblockGame:questNextStepTitle") : UU("started" === TU ? "skyblockGame:questStartedTitle" : "quest" === TU ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? TU : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: uU,
          name: jU ? RU("skyblockGame:questExploreName") : null !== GU ? mR(RU, GU.step.nameKey, GU.step.nameParams) : mR(RU, qU, KU),
          description: jU ? RU("skyblockGame:questExploreDescription") : null === GU ? null : mR(RU, GU.step.descriptionKey, GU.step.descriptionParams),
          reward: null === this.followUp && cU > 0 ? RU("skyblockGame:questCoinRewardSuffix", {
            amount: cU.toLocaleString(gU)
          }) : null,
          iconItem: null !== (EU = null === GU || void 0 === GU ? void 0 : GU.step.questIconItem) && void 0 !== EU ? EU : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== GU && (null === (PU = this.getJournal()) || void 0 === PU ? void 0 : PU.trackedQuestId) === GU.questId ? GU.step.nameKey : null
        }
      }
      getSkillLevelView(UU, RU, gU) {
        let {
          skill: tU,
          beforeLevel: pU,
          level: EU
        } = UU;
        const PU = PR(tU, pU),
          TU = PR(tU, EU);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: RU(`skyblockGame:${tU}`),
          name: RU("skyblockGame:skillLevelUp", {
            to: EU.toLocaleString(gU)
          }),
          description: PU.percent === TU.percent ? null : RU(`${TU.translationKey}Change`, {
            before: PU.percent.toLocaleString(gU),
            after: TU.percent.toLocaleString(gU)
          }),
          reward: null,
          iconItem: WR[tU],
          accent: xR(tU),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(UU, RU) {
        let {
          landmarkNameKey: gU
        } = UU;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: RU("skyblockGame:landmarkDiscovered"),
          name: RU(gU),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(UU, RU, gU) {
        let {
          titleKey: tU,
          textKey: pU,
          params: EU = {},
          nameKeys: PU = {},
          iconItem: TU = null
        } = UU;
        const qU = {
          ...EU
        };
        for (const [KU, cU] of Object.entries(PU)) qU[KU] = RU(cU);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: RU(tU),
          name: gU(pU, qU),
          description: null,
          reward: null,
          iconItem: TU,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var UU;
        if (null !== this.followUp) return 5600;
        switch (null === (UU = this.current) || void 0 === UU ? void 0 : UU.questCompletionKind) {
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
      showFollowUp(UU, RU) {
        null === UU || this.WT ? this.advance() : (this.followUp = UU, this.token++, this.shownAt = this.now(), this.expiresAt = null !== RU && void 0 !== RU ? RU : this.shownAt + this.durationMs())
      }
      findFollowUp(UU) {
        var RU;
        const gU = this.getJournal();
        if (!gU || this.hasPendingQuestPopup() || JR(UU)) return null;
        const tU = "started" === UU.questCompletionKind ? gU.active.some((RU => RU.id === UU.questCompletionQuestId)) : "quest" === UU.questCompletionKind ? gU.completed.some((RU => RU.id === UU.questCompletionQuestId)) : [...gU.active, ...gU.completed].some((RU => RU.id === UU.questCompletionQuestId && RU.subquests.some((RU => RU.id === UU.questCompletionStepId && "completed" === RU.status))));
        if (!tU) return null;
        if ("quest" === UU.questCompletionKind && 0 === gU.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const pU = gU.active.find((UU => UU.id === gU.trackedQuestId)),
          EU = null !== (RU = null === pU || void 0 === pU ? void 0 : pU.subquests.find((UU => "ready" === UU.status))) && void 0 !== RU ? RU : null === pU || void 0 === pU ? void 0 : pU.subquests.find((UU => "active" === UU.status));
        return EU ? {
          kind: "step",
          questId: pU.id,
          questNameKey: pU.nameKey,
          step: EU
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((UU => !JR(UU)))
      }
      advance() {
        var UU;
        this.current = this.WT ? null : null !== (UU = this.pending.shift()) && void 0 !== UU ? UU : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function JR(UU) {
      return wR(UU.questCompletionKind)
    }

    function wR(UU) {
      return "skillLevel" === UU || "landmark" === UU || "npcNote" === UU
    }
    var nR = gU(38083);
    const bR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      oR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      ZR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      aR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      YR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var BR = gU(38090);
    const VR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      rR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const XR = gU.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const vR = gU.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      dR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var HR = gU(18285),
      SR = gU(20283),
      sR = gU(22656),
      yR = gU(24216),
      kR = gU(25936);
    const FR = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: HR,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: SR,
      cow: YR,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: gU(25955),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: bR,
      fishing_1: bR,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: oR,
      guardian_iron: ZR,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: sR,
      mines: yR,
      mining_1: yR,
      npc: aR,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: YR,
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
      npc_gold_guardian: oR,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: ZR,
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
      npc_tentacle_guy: BR,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: VR,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: XR,
      quest_talk: vR,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: dR,
      watermelon: kR
    };

    function iR(UU, RU) {
      const gU = document.createElement("img");
      return gU.className = RU, gU.src = UU, gU.alt = "", gU.draggable = !1, gU
    }

    function AR(UU) {
      var RU;
      const gU = null !== (RU = FR[UU]) && void 0 !== RU ? RU : UU.startsWith("npc_") ? aR : dR;
      if ("portal" !== UU) return iR(gU, "SkyblockMapIcon");
      const tU = document.createElement("span");
      tU.className = "SkyblockMapIcon Portal";
      const pU = document.createElement("span");
      return pU.className = "SkyblockMapIconTint", pU.style.maskImage = pU.style.webkitMaskImage = `url("${rR}")`, tU.append(iR(gU, "SkyblockMapIconLayer"), pU, iR(rR, "SkyblockMapIconLayer SkyblockMapIconShade")), tU
    }
    var zR = gU(38061),
      MR = gU(3942);
    const DR = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function LR(UU) {
      const RU = new MR.m(UU);
      return {
        radius: 45,
        squareness: 3,
        wobbles: DR.map((UU => {
          let {
            lobes: gU,
            amount: tU
          } = UU;
          return {
            lobes: gU[Math.floor(RU.next() * gU.length)],
            amount: tU[0] + RU.next() * (tU[1] - tU[0]),
            phase: 2 * RU.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function NR(UU) {
      let {
        radius: RU,
        squareness: gU,
        wobbles: tU,
        samples: pU
      } = UU;
      const EU = [];
      for (let PU = 0; PU < pU; PU++) {
        const UU = 2 * Math.PI * PU / pU,
          TU = Math.cos(UU),
          qU = Math.sin(UU),
          KU = RU * (Math.abs(TU) ** gU + Math.abs(qU) ** gU) ** (-1 / gU) * tU.reduce(((RU, gU) => {
            let {
              lobes: tU,
              amount: pU,
              phase: EU
            } = gU;
            return RU + pU * Math.sin(tU * UU + EU)
          }), 1);
        EU.push(`${(50+KU*TU).toFixed(2)} ${(50+KU*qU).toFixed(2)}`)
      }
      return `M${EU.join("L")}Z`
    }
    const lR = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class OR {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.pC = !1, this.mountCompass = UU => {
          var RU;
          if (null === (RU = this.stopLayout) || void 0 === RU || RU.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !UU || this.pC) return;
          const gU = UU.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: UU,
            track: gU,
            label: UU.querySelector(".SkyblockCompassLabel")
          }, gU.replaceChildren();
          for (let pU = 0; pU < 4; pU++) {
            const UU = document.createElement("span");
            UU.className = "SkyblockCompassCardinal", gU.appendChild(UU), this.cardinals.push(UU)
          }
          const tU = (0, zR.b)(lR, [UU], this.layout);
          this.stopLayout = () => {
            tU(), gU.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = UU => {
          this.terrain = this.pC ? null : UU, this.render(this.frame)
        }, this.mountMinimapSearchArea = UU => {
          this.mountSearchArea("minimap", UU)
        }, this.mountMapSearchArea = UU => {
          this.mountSearchArea("map", UU)
        }, this.mountPlayer = UU => {
          this.player = this.pC ? null : UU, this.render(this.frame)
        }, this.mountWaypoint = UU => {
          var RU, gU;
          if (null === (RU = this.stopWaypoint) || void 0 === RU || RU.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !UU || this.pC) return;
          const tU = UU.querySelector(".SkyblockQuestWaypointMarker");
          tU.replaceChildren(AR("quest")), this.markerIcon = "quest", this.waypoint = {
            root: UU,
            marker: tU,
            clip: UU.querySelector(".SkyblockQuestWaypointTextClip"),
            text: UU.querySelector(".SkyblockQuestWaypointText"),
            label: UU.querySelector(".SkyblockQuestWaypointLabel"),
            distance: UU.querySelector(".SkyblockQuestWaypointDistance"),
            hint: UU.querySelector(".SkyblockQuestWaypointHint")
          };
          const pU = () => {
              this.waypointMarkerSize = {
                width: tU.offsetWidth,
                height: tU.offsetHeight
              }, this.waypointInset = {
                x: tU.offsetWidth / 2 + 8,
                top: tU.offsetHeight + 8,
                bottom: 8
              }
            },
            EU = new ResizeObserver((() => {
              pU(), this.render(this.frame)
            }));
          EU.observe(tU, {
            box: "border-box"
          });
          const PU = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", PU), null === (gU = window.visualViewport) || void 0 === gU || gU.addEventListener("resize", PU), this.stopWaypoint = () => {
            var UU;
            EU.disconnect(), window.removeEventListener("resize", PU), null === (UU = window.visualViewport) || void 0 === UU || UU.removeEventListener("resize", PU)
          }, PU(), pU(), this.render(this.frame)
        }, this.mountWaypointOrigin = UU => {
          var RU;
          if (null === (RU = this.stopWaypointOrigin) || void 0 === RU || RU.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = UU && !this.pC ? Number(UU.dataset.notificationToken) : null, UU && !this.pC && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const RU = {
              nameKey: UU.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = RU;
            const gU = () => {
                const gU = UU.getBoundingClientRect();
                RU.x = (gU.left + gU.width / 2) / window.innerWidth * 100, RU.y = (gU.top + gU.height / 2) / window.innerHeight * 100
              },
              tU = new ResizeObserver(gU);
            tU.observe(UU.parentElement), tU.observe(UU), window.addEventListener("resize", gU), this.stopWaypointOrigin = () => {
              tU.disconnect(), window.removeEventListener("resize", gU)
            }, gU()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const UU = this.compass.root,
            RU = getComputedStyle(UU),
            gU = getComputedStyle(document.documentElement),
            tU = parseFloat(gU.fontSize),
            pU = parseFloat(RU.getPropertyValue("--compass-icon-size")) * tU,
            EU = "1" === RU.getPropertyValue("--compass-fit-top").trim(),
            PU = EU ? 1 : 8,
            TU = Array.from(document.querySelectorAll(lR), (UU => {
              var RU;
              return (null !== (RU = UU.querySelector(".MiddleTextTop")) && void 0 !== RU ? RU : UU).getBoundingClientRect()
            })).filter((UU => UU.width > 0 && UU.height > 0));
          let qU = (parseFloat(gU.getPropertyValue("--notchTop")) || 0) + PU,
            KU = "";
          if (EU) {
            const RU = window.innerWidth / 2,
              gU = UU.getBoundingClientRect().height,
              EU = [qU, ...TU.map((UU => Math.max(qU, UU.bottom + PU)))].sort(((UU, RU) => UU - RU));
            for (const UU of EU) {
              let EU = RU - 8;
              for (const tU of TU) tU.bottom + PU <= UU || tU.top >= UU + gU + PU || (EU = Math.min(EU, tU.right <= RU ? RU - tU.right - 8 : tU.left - RU - 8));
              const cU = 2 * EU - pU;
              if (cU >= 16 * tU) {
                KU = `${cU}px`, qU = UU;
                break
              }
            }
          }
          UU.style.maxWidth !== KU && (UU.style.maxWidth = KU);
          const cU = UU.getBoundingClientRect(),
            GU = this.compassSize.trackHalfWidth;
          if (cU.width > 0) {
            const UU = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: UU.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * pU / UU.width
          }
          if (!KU)
            for (const jU of TU) jU.right > cU.left - 8 && jU.left < cU.right + 8 && (qU = Math.max(qU, jU.bottom + PU));
          UU.style.top = `${qU}px`, this.compassSize.trackHalfWidth !== GU && this.render(this.frame)
        }
      }
      mountSearchArea(UU, RU) {
        this.searchAreas[UU] = this.pC ? null : RU, this.render(this.frame)
      }
      render(UU) {
        if (this.pC) return;
        if (this.frame = UU, this.compass && (Ug(this.compass.root, !UU), UU)) {
          const RU = this.compassSize.trackHalfWidth / 50;
          UU.compass.cardinals.forEach(((UU, gU) => {
            const tU = this.cardinals[gU];
            tU.textContent !== UU.name && (tU.textContent = UU.name), Ug(tU, UU.hidden), tU.style.translate = UU.left * RU + "px"
          }));
          const gU = new Set;
          UU.compass.markers.forEach(((tU, pU) => {
            var EU;
            gU.add(tU.id);
            let PU = this.markers.get(tU.id);
            PU || (PU = document.createElement("span"), PU.className = "SkyblockCompassMarker", this.markers.set(tU.id, PU), this.compass.track.appendChild(PU)), PU.dataset.icon !== tU.icon && (PU.dataset.icon = tU.icon, PU.replaceChildren(AR(tU.icon))), PU.style.color = null !== (EU = tU.colour) && void 0 !== EU ? EU : "", PU.style.translate = tU.left * RU + "px", PU.style.zIndex = String(UU.compass.markers.length - pU), PU.title !== tU.name && (PU.title = tU.name)
          }));
          for (const [UU, tU] of this.markers) gU.has(UU) || (tU.remove(), this.markers.delete(UU));
          this.compass.label.textContent !== UU.compass.label && (this.compass.label.textContent = UU.compass.label)
        }
        this.terrain && (Ug(this.terrain, !(null !== UU && void 0 !== UU && UU.minimap)), null !== UU && void 0 !== UU && UU.minimap && (this.terrain.style.transform = UU.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", UU.minimap.iconRotation)));
        const RU = null === UU || void 0 === UU ? void 0 : UU.searchArea;
        for (const gU of [this.searchAreas.minimap, this.searchAreas.map])
          if (gU && (Ug(gU, !RU), RU)) {
            if (this.searchAreaPath.seed !== RU.shapeSeed && (this.searchAreaPath = {
                seed: RU.shapeSeed,
                d: NR(LR(RU.shapeSeed))
              }), gU.dataset.shapeSeed !== RU.shapeSeed) {
              gU.dataset.shapeSeed = RU.shapeSeed;
              for (const UU of gU.querySelectorAll("path")) UU.setAttribute("d", this.searchAreaPath.d)
            }
            gU.style.left = `${RU.left}%`, gU.style.top = `${RU.top}%`, gU.style.width = `${RU.width}%`, gU.style.height = `${RU.height}%`
          } if (this.player && (Ug(this.player, !(null !== UU && void 0 !== UU && UU.player) || UU.player.hidden), null !== UU && void 0 !== UU && UU.player && (this.player.style.left = `${UU.player.left}%`, this.player.style.top = `${UU.player.top}%`, this.player.style.setProperty("--map-player-rotation", UU.player.rotation))), this.waypoint) {
          const {
            root: RU,
            marker: gU,
            clip: tU,
            text: pU,
            label: EU,
            distance: PU,
            hint: TU
          } = this.waypoint, qU = !(null !== UU && void 0 !== UU && UU.waypoint) || null !== UU.waypoint.popupToken && UU.waypoint.popupToken !== this.waypointOriginToken;
          Ug(RU, qU);
          let KU = 1;
          const cU = this.waypointLaunch;
          if (!qU && cU && UU.waypoint.nameKey === cU.nameKey) {
            const UU = performance.now();
            cU.startedAt ??= UU, KU = Math.min(1, Math.max(0, (UU - cU.startedAt - 450) / 1e3)), gU.style.opacity = String(Math.min(1, (UU - cU.startedAt) / 150)), 1 === KU && (this.waypointLaunch = null)
          } else gU.style.opacity = "", cU && null !== cU.startedAt && (this.waypointLaunch = null);
          if (RU.classList.toggle("Launching", KU < 1), null !== UU && void 0 !== UU && UU.waypoint) {
            const RU = this.waypointInset,
              qU = "quest_talk" === UU.waypoint.markerIcon ? function(UU, RU, gU) {
                if (!UU.text || null === UU.blockHeight || 0 === UU.nearness) return UU;
                const tU = UU.blockHeight / 100 * gU.height,
                  pU = -UU.nearness * (Rg * tU + RU.width / 2),
                  EU = UU.nearness * (gg * tU + RU.height / 2);
                return {
                  ...UU,
                  text: {
                    x: UU.text.x + pU / gU.width * 100,
                    y: UU.text.y + EU / gU.height * 100
                  }
                }
              }(UU.waypoint, this.waypointMarkerSize, this.viewport) : UU.waypoint,
              GU = (0, nR.e)(qU, RU, this.viewport),
              jU = KU * KU * (3 - 2 * KU),
              uU = KU < 1 ? cU.x + (GU.x - cU.x) * jU : GU.x,
              CU = KU < 1 ? cU.y + (GU.y - cU.y) * jU : GU.y;
            gU.style.translate = `${uU}vw ${CU}vh`, tU.style.clipPath = `inset(${RU.top}px ${RU.x}px ${RU.bottom}px)`, Ug(pU, KU < 1 || !UU.waypoint.text), pU.style.opacity = String(1 - UU.waypoint.nearness), UU.waypoint.text && (pU.style.translate = `${UU.waypoint.text.x}vw ${UU.waypoint.text.y}vh`), EU.textContent !== UU.waypoint.name && (EU.textContent = UU.waypoint.name), this.markerIcon !== UU.waypoint.markerIcon && (this.markerIcon = UU.waypoint.markerIcon, gU.replaceChildren(AR(this.markerIcon))), PU.textContent !== UU.waypoint.distance && (PU.textContent = UU.waypoint.distance), Ug(TU, null === UU.waypoint.hint), null !== UU.waypoint.hint && TU.textContent !== UU.waypoint.hint && (TU.textContent = UU.waypoint.hint)
          }
        }
      }
      dispose() {
        var UU, RU;
        this.mountWaypointOrigin(null), this.render(null), null === (UU = this.stopLayout) || void 0 === UU || UU.call(this), this.stopLayout = null, null === (RU = this.stopWaypoint) || void 0 === RU || RU.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.pC = !0
      }
    }

    function Ug(UU, RU) {
      UU.hidden !== RU && (UU.hidden = RU)
    }
    const Rg = .55,
      gg = .6;
    const tg = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class pg {
      constructor(UU, RU, gU, tU) {
        this.map = UU, this.quests = RU, this.compass = gU, this.display = new OR, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.pC = !1, this.snapshot = null, this.texts = new Map, this.translate = tU
      }
      setTranslator(UU, RU) {
        this.translate = UU, this.locale = RU, this.metresFormat = new Intl.NumberFormat(RU), this.texts.clear()
      }
      translateCached(UU, RU) {
        const gU = void 0 === RU ? UU : `${UU} ${RU}`;
        let tU = this.texts.get(gU);
        return void 0 === tU && (this.texts.size >= 500 && this.texts.clear(), tU = this.translate(UU, void 0 === RU ? void 0 : {
          distance: RU
        }), this.texts.set(gU, tU)), tU
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(UU, RU, gU) {
        if (this.pC) return;
        if (!UU) return this.snapshot = null, void this.display.render(null);
        const tU = this.map.getSnapshot().map,
          qU = gU.cameraHeading,
          KU = {
            ...this.display.compassSize,
            tanHalfFovX: gU.tanHalfFovX,
            pitch: gU.cameraPitch
          },
          cU = [];
        if (tU)
          for (const pU of this.compass.frame(UU, qU, RU)) {
            const UU = hU(pU.offset, KU);
            null !== UU && cU.push({
              ...pU,
              left: UU
            })
          }
        const GU = function(UU, RU) {
            const gU = [],
              tU = UU => "quest" === UU.kind ? UU.distance - 1 : UU.distance,
              pU = [...UU].sort(((UU, RU) => tU(UU) - tU(RU) || UU.id.localeCompare(RU.id)));
            for (const EU of pU) {
              let UU = !1;
              if ("quest" !== EU.kind)
                for (const tU of gU)
                  if (Math.abs(tU.left - EU.left) < RU) {
                    UU = !0;
                    break
                  } UU || gU.push(EU)
            }
            return gU
          }(cU, this.display.compassSpacing),
          jU = function(UU) {
            let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              gU = null;
            for (const tU of UU) Math.abs(tU.offset) <= RU && (!gU || tU.distance < gU.distance || tU.distance === gU.distance && Math.abs(tU.offset) < Math.abs(gU.offset)) && (gU = tU);
            return gU
          }(GU),
          uU = UU => {
            var RU;
            return null !== (RU = UU.displayName) && void 0 !== RU ? RU : this.translateCached(UU.nameKey)
          },
          CU = {
            compass: {
              markers: GU.map((UU => ({
                id: UU.id,
                icon: UU.icon,
                colour: UU.colour,
                name: uU(UU),
                left: UU.left
              }))),
              cardinals: PU.map((UU => {
                let {
                  name: RU,
                  bearing: gU
                } = UU;
                const tU = hU(pU.c.computeShortestRotation(qU, gU), KU);
                return {
                  name: RU,
                  left: null !== tU && void 0 !== tU ? tU : 0,
                  hidden: null === tU
                }
              })),
              label: jU ? `${uU(jU)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",IU(jU.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== tU && void 0 !== tU && tU.background) {
          const RU = UU[0] - tU.mapOrigin[0],
            gU = UU[2] - tU.mapOrigin[2],
            {
              rotation: pU,
              transform: PU
            } = function(UU, RU, gU, tU) {
              const [pU, PU] = TU(UU, RU, tU), qU = EU - gU;
              return {
                rotation: qU,
                transform: `rotate(${qU}rad) translate(-${pU}%, -${PU}%)`
              }
            }(RU, gU, qU, tU.background.bounds);
          CU.minimap = {
            transform: PU,
            iconRotation: -pU + "rad"
          };
          const [KU, cU] = TU(RU, gU, tU.background.bounds);
          CU.player = {
            left: KU,
            top: cU,
            hidden: KU < 0 || cU < 0 || KU > 100 || cU > 100,
            rotation: -pU + "rad"
          }
        }
        const {
          waypoint: QU
        } = this.quests.getSnapshot();
        if ("search" === (null === QU || void 0 === QU ? void 0 : QU.questMarkerIcon) && null !== tU && void 0 !== tU && tU.background) {
          const {
            bounds: UU
          } = tU.background, [RU, gU] = TU(QU.position[0] - tU.mapOrigin[0], QU.position[2] - tU.mapOrigin[2], UU);
          CU.searchArea = {
            left: RU,
            top: gU,
            width: 6400 / (UU.mapMaxX - UU.mapMinX),
            height: 6400 / (UU.mapMaxZ - UU.mapMinZ),
            shapeSeed: QU.nameKey
          }
        }
        const eU = this.quests.getNotificationSnapshot(),
          WU = "completion" === (null === eU || void 0 === eU ? void 0 : eU.phase) && !wR(eU.kind);
        if (QU && !WU) {
          const RU = Math.hypot(...QU.position.map(((RU, gU) => RU - UU[gU]))),
            tU = Math.round(RU),
            pU = "talk" === QU.questMarkerIcon ? Math.min(1, Math.max(0, (10 - RU) / 5)) : 0,
            EU = gU.projectWorldPosToViewport(QU.position),
            PU = EU && gU.projectWorldPosToViewport([QU.position[0], QU.position[1] - 1, QU.position[2]]);
          CU.waypoint = {
            ...gU.projectWorldPosToScreenPos(QU.position),
            text: EU,
            nearness: pU * pU * (3 - 2 * pU),
            blockHeight: EU && PU ? PU.y - EU.y : null,
            name: this.translateCached(QU.nameKey),
            nameKey: QU.nameKey,
            markerIcon: QU.questMarkerIcon ? tg[QU.questMarkerIcon] : "quest",
            popupToken: (null === eU || void 0 === eU ? void 0 : eU.waypointNameKey) === QU.nameKey ? eU.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(tU)),
            hint: "search" === QU.questMarkerIcon && Math.hypot(QU.position[0] - UU[0], QU.position[2] - UU[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = CU, this.display.render(CU)
      }
      dispose() {
        this.pC = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Eg = "skyblockSkillsView";
    class Pg extends GU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          gU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UU => UU,
          tU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          pU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU => UU;
        super(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = RU, this.translate = gU, this.locale = tU, this.itemName = pU, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = UU => {
          this.selected = UU, this.emit()
        }
      }
      setTranslator(UU, RU, gU) {
        this.translate = UU, this.locale = RU, this.itemName = gU, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(UU) {
        let RU = this.skillText.get(UU);
        return RU || (RU = {
          label: this.translate(`skyblockGame:${UU}`),
          description: this.translate(`skyblockGame:${UU}Description`)
        }, this.skillText.set(UU, RU)), RU
      }
      sources(UU) {
        if ("mining" === UU || "fishing" === UU) return this.buildSources(UU);
        let RU = this.sourceText.get(UU);
        return RU || (RU = this.buildSources(UU), this.sourceText.set(UU, RU)), RU
      }
      buildSources(UU) {
        const RU = this.translate;
        return "exploration" === UU ? [RU("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), RU("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === UU ? [RU("skyblockGame:logSource", {
          xp: this.number(uR["Maple Log"])
        })] : "combat" === UU ? [RU("skyblockGame:creatureKillSource"), RU("skyblockGame:noEnvironmentalXp")] : "farming" === UU ? [RU("skyblockGame:cropSource", {
          xp: this.number(QR["Wheat|FreshlyGrown"])
        }), RU("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), RU("skyblockGame:noYoungCropXp")] : Object.entries("mining" === UU ? hR : eR).map((UU => {
          let [gU, tU] = UU;
          return RU("skyblockGame:itemXpSource", {
            item: this.itemName(gU),
            xp: this.number(tU)
          })
        }))
      }
      number(UU) {
        return UU.toLocaleString(this.locale)
      }
      benefit(UU, RU) {
        const gU = PR(UU, RU);
        return this.translate(gU.translationKey, {
          bonus: this.number(gU.percent)
        })
      }
      qC(UU) {
        if (!this.pC) {
          if ("snapshot" === UU.kind) this.progress = UU.progress, this.pending.clear(), this.recent = null;
          else if ("award" === UU.kind && this.progress) {
            const {
              award: RU
            } = UU;
            this.progress = {
              ...this.progress,
              [RU.skill]: RU.after
            };
            for (const [UU, tU] of this.pending) tU.skill === RU.skill && this.pending.delete(UU);
            const gU = RU.after.level > RU.before.level;
            this.recordGain(RU.skill, RU.amount, gU ? ++this.nextLevelUpToken : null), gU && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: RU.skill,
              beforeLevel: RU.before.level,
              level: RU.after.level
            })
          } else {
            if ("rejectBlock" === UU.kind) return void this.rejectBlock(UU.position);
            if ("open" === UU.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(UU, RU, gU) {
        if (!this.progress || this.pC || gU) return;
        const tU = function(UU, RU) {
          const gU = UU.split("|")[0];
          return "Air" === RU || RU === `Barkless ${UU}` ? Object.hasOwn(uR, gU) ? {
            skill: "foraging",
            amount: uR[gU]
          } : "Air" !== RU ? null : Object.hasOwn(hR, UU) ? {
            skill: "mining",
            amount: hR[UU]
          } : cR(UU) ? {
            skill: "farming",
            amount: 10
          } : jR(UU) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(QR, UU) ? {
            skill: "farming",
            amount: QR[UU]
          } : Object.hasOwn(HU, UU) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(RU, "Air");
        if (!tU) return;
        const pU = UU.join(",");
        if (this.pending.has(pU)) return;
        const EU = this.predictedProgress(tU.skill).totalXp + tU.amount;
        Number.isSafeInteger(EU) && (this.pending.set(pU, {
          ...tU,
          expires: this.now() + 2e3
        }), this.recordGain(tU.skill, 0), this.emit())
      }
      rejectBlock(UU) {
        this.pending.delete(UU.join(",")) && this.emit()
      }
      HG() {
        if (this.pC) return;
        let UU = !1;
        for (const [RU, gU] of this.pending) gU.expires <= this.now() && (this.pending.delete(RU), UU = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, UU = !0), UU && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(UU, RU) {
        var gU, tU;
        let pU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const EU = (null === (gU = this.recent) || void 0 === gU ? void 0 : gU.skill) === UU && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          PU = (null === (tU = this.recent) || void 0 === tU ? void 0 : tU.skill) === UU && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: UU,
          confirmed: EU + RU,
          expires: this.now() + 3e3,
          levelUpToken: null !== pU && void 0 !== pU ? pU : PU
        }
      }
      pendingXp(UU) {
        let RU = 0;
        for (const gU of this.pending.values()) gU.skill === UU && (RU += gU.amount);
        return RU
      }
      predictedProgress(UU) {
        const RU = this.progress[UU],
          gU = this.pendingXp(UU);
        return gU ? qR(RU.totalXp + gU, UU) : RU
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var UU, RU, gU;
        const tU = this.progress ? LU.map((UU => {
            const RU = this.predictedProgress(UU);
            return {
              ...this.text(UU),
              icon: WR[UU],
              benefit: this.benefit(UU, RU.level),
              sources: this.sources(UU),
              id: UU,
              selected: UU === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(RU.level)
              }),
              xp: null === RU.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(RU.xpIntoLevel),
                target: this.number(RU.xpForNextLevel)
              }),
              percent: null === RU.xpForNextLevel ? 100 : Math.min(100, RU.xpIntoLevel / RU.xpForNextLevel * 100)
            }
          })) : [],
          pU = tU.find((UU => {
            var RU;
            return UU.id === (null === (RU = this.recent) || void 0 === RU ? void 0 : RU.skill)
          })),
          EU = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: tU,
          detail: null !== (UU = tU.find((UU => UU.selected))) && void 0 !== UU ? UU : null,
          overallLevel: this.progress ? LU.reduce(((UU, RU) => UU + this.predictedProgress(RU).level), 0) : null,
          hud: pU && EU > 0 ? {
            skill: pU,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(EU)
            }),
            levelUpToken: null !== (RU = null === (gU = this.recent) || void 0 === gU ? void 0 : gU.levelUpToken) && void 0 !== RU ? RU : null,
            colour: xR(pU.id)
          } : null
        }
      }
    }
    const Tg = Math.max(1600, 600, 950) + 400,
      qg = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Kg = "skyblockQuestsView",
      cg = "skyblockQuestNotificationView";
    class Gg extends GU {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          PU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(UU, tU, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = RU, this.translate = gU, this.now = pU, this.locale = EU, this.publishNotification = PU, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var UU, RU;
          this.selected = null !== (UU = null === (RU = this.authoritative) || void 0 === RU ? void 0 : RU.trackedQuestId) && void 0 !== UU ? UU : null, this.show()
        }, this.select = UU => {
          this.selected = UU, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const UU = this.snapshot.detail;
          !this.pC && null !== UU && void 0 !== UU && UU.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(UU.id), this.emit())
        }, this.viewDialogue = () => {
          const UU = this.snapshot.detail;
          var RU;
          UU && (null === (RU = this.onViewDialogue) || void 0 === RU || RU.call(this, UU.id))
        }, this.notifications = new IR(pU, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var UU, RU;
        return null !== (UU = null === (RU = this.authoritative) || void 0 === RU ? void 0 : RU.trackedQuestId) && void 0 !== UU ? UU : null
      }
      notify(UU) {
        !this.pC && this.notifications.enqueue(UU) && this.emitNotification()
      }
      setNotificationsHeld(UU) {
        (this.notifications.setHeld(UU) || UU) && this.emitNotification()
      }
      HG() {
        var UU, RU;
        if (this.pC) return;
        this.notifications.HG() && this.emitNotification();
        let gU = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, gU = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, gU = !0);
        const tU = jg(this.authoritative);
        null !== tU && void 0 !== tU && null !== (UU = tU.questClock) && void 0 !== UU && UU.running && this.clockText(tU) !== (null === (RU = this.snapshot.tracked) || void 0 === RU ? void 0 : RU.clock) && (gU = !0), gU && this.emit()
      }
      setTranslator(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = UU, this.locale = RU, this.emitNotification(), this.emit()
      }
      qC(UU) {
        if (!this.pC)
          if ("completion" === UU.kind) this.notify(UU.questCompletion);
          else if ("landmark" === UU.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: UU.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === UU.kind) {
          var RU, gU, tU;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: UU.npcNoteTitleKey,
            textKey: UU.npcNoteTextKey,
            params: null !== (RU = UU.npcNoteParams) && void 0 !== RU ? RU : {},
            nameKeys: null !== (gU = UU.npcNoteNameKeys) && void 0 !== gU ? gU : {},
            iconItem: null !== (tU = UU.npcNoteIconItem) && void 0 !== tU ? tU : null
          })
        } else if ("open" === UU.kind) this.show();
        else if ("guidance" === UU.kind) this.waypoint = UU.waypoint, this.compassTarget = UU.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === UU.kind) {
          this.authoritative = UU.snapshot, this.notifications.HG() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const RU = this.trackedStepPulse;
          this.updateTrackedStepPulse(UU.snapshot), this.emit(), this.trackedStepPulse > RU && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.pC || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var UU;
        return null !== (UU = this.translateWithIcons) && void 0 !== UU ? UU : this.translate
      }
      clockText(UU) {
        const RU = UU.questClock;
        if (!RU) return null;
        const gU = RU.elapsedMs + (RU.running ? this.now() - this.receivedAt : 0);
        return void 0 === RU.countdownFromMs ? VU(gU, !1) : VU(1e3 * Math.ceil(Math.max(0, RU.countdownFromMs - gU) / 1e3), !1)
      }
      updateTrackedStepPulse(UU) {
        var RU, gU, tU;
        const pU = jg(UU);
        if (!pU) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const EU = UU => pU.subquests.filter((RU => UU(RU.status))).map((UU => UU.id)),
          PU = EU((UU => "completed" === UU || "skipped" === UU)),
          TU = EU((UU => "locked" !== UU)),
          qU = (null === (RU = this.trackedSteps) || void 0 === RU ? void 0 : RU.questId) === pU.id && pU.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (qU) {
          const UU = PU.filter((UU => !qU.finished.has(UU))),
            RU = EU((UU => "active" === UU || "ready" === UU)).filter((UU => !qU.unlocked.has(UU)));
          UU.length > 0 && this.trackedStepPulse++, (UU.length > 0 || RU.length > 0) && (this.trackedChange = {
            finished: new Set(UU),
            unlocked: new Set(RU),
            expiresAt: this.now() + Tg
          })
        } else {
          var KU;
          this.trackedStepPulse = (null === (KU = this.trackedSteps) || void 0 === KU ? void 0 : KU.questId) === pU.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: pU.id,
          progress: pU.progress,
          finished: new Set([...null !== (gU = null === qU || void 0 === qU ? void 0 : qU.finished) && void 0 !== gU ? gU : [], ...PU]),
          unlocked: new Set([...null !== (tU = null === qU || void 0 === qU ? void 0 : qU.unlocked) && void 0 !== tU ? tU : [], ...TU])
        }
      }
      entry(UU, RU) {
        var gU, tU;
        const pU = UU.id === (null === (gU = this.authoritative) || void 0 === gU ? void 0 : gU.trackedQuestId),
          EU = this.now() < this.trackAvailableAt,
          PU = this.questTextTranslator(),
          TU = UU.subquests.map((RU => {
            var gU, tU, EU, TU, qU, KU;
            const cU = null !== (gU = RU.handInNpcName) && void 0 !== gU ? gU : UU.giverName,
              GU = this.translate("skyblockGame:progress", {
                current: RU.progress.toLocaleString(this.locale),
                target: RU.target.toLocaleString(this.locale)
              }),
              jU = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: cU ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [RU.status],
              uU = "active" === RU.status || "ready" === RU.status;
            return {
              id: RU.id,
              name: mR(PU, RU.nameKey, RU.nameParams),
              description: mR(PU, RU.descriptionKey, RU.descriptionParams),
              progress: GU,
              status: RU.status,
              statusLabel: jU ? this.translate(jU, {
                npc: cU
              }) : GU,
              iconItem: uU && null !== (tU = RU.questIconItem) && void 0 !== tU ? tU : null,
              barPercent: "active" === RU.status && RU.showsProgressBar ? Math.min(100, 100 * RU.progress / RU.target) : null,
              justFinished: pU && null !== (EU = null === (TU = this.trackedChange) || void 0 === TU ? void 0 : TU.finished.has(RU.id)) && void 0 !== EU && EU,
              justUnlocked: pU && null !== (qU = null === (KU = this.trackedChange) || void 0 === KU ? void 0 : KU.unlocked.has(RU.id)) && void 0 !== qU && qU
            }
          }));
        return {
          id: UU.id,
          name: mR(PU, UU.nameKey, UU.nameParams),
          description: mR(PU, UU.descriptionKey, UU.descriptionParams),
          progress: RU ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: UU.progress.toLocaleString(this.locale),
            target: UU.target.toLocaleString(this.locale)
          }),
          completed: RU,
          tracked: pU,
          selected: UU.id === this.selected,
          canTrack: !RU && !pU && !EU,
          trackLabel: this.translate(pU ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : EU ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== UU.id,
          subquests: TU,
          focusStep: null !== (tU = TU.find((UU => null !== UU.barPercent))) && void 0 !== tU ? tU : null,
          clock: this.clockText(UU)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var UU, RU, gU, tU, pU, EU, PU, TU, qU, KU;
        const cU = [...null !== (UU = null === (RU = this.authoritative) || void 0 === RU ? void 0 : RU.active) && void 0 !== UU ? UU : [], ...null !== (gU = null === (tU = this.authoritative) || void 0 === tU ? void 0 : tU.completed) && void 0 !== gU ? gU : []];
        var GU, jU, uU, CU;
        cU.some((UU => UU.id === this.selected)) || (this.selected = null !== (GU = null !== (jU = null === (uU = this.authoritative) || void 0 === uU ? void 0 : uU.trackedQuestId) && void 0 !== jU ? jU : null === (CU = cU[0]) || void 0 === CU ? void 0 : CU.id) && void 0 !== GU ? GU : null);
        const hU = null !== (pU = null === (EU = this.authoritative) || void 0 === EU ? void 0 : EU.active.map((UU => this.entry(UU, !1)))) && void 0 !== pU ? pU : [];
        hU.sort(((UU, RU) => Number(RU.tracked) - Number(UU.tracked)));
        const QU = null !== (PU = null === (TU = this.authoritative) || void 0 === TU ? void 0 : TU.completed.map((UU => this.entry(UU, !0)))) && void 0 !== PU ? PU : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: hU,
          completed: QU,
          completedExpanded: this.completedExpanded,
          detail: null !== (qU = [...hU, ...QU].find((UU => UU.selected))) && void 0 !== qU ? qU : null,
          tracked: null !== (KU = hU.find((UU => UU.tracked))) && void 0 !== KU ? KU : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function jg(UU) {
      var RU;
      return null !== (RU = null === UU || void 0 === UU ? void 0 : UU.active.find((RU => RU.id === UU.trackedQuestId))) && void 0 !== RU ? RU : null
    }
    const ug = "skyblockDungeonsView";
    class Cg extends GU {
      constructor(UU, RU) {
        let gU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          tU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = RU, this.locale = gU, this.requestEnter = tU, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = UU => {
          this.selected = UU, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const UU = this.pickerEntry(),
            RU = null === UU || void 0 === UU ? void 0 : UU.difficulties[this.pageIndex];
          void 0 !== RU && null !== RU.unlockedBoss && (this.close(), this.requestEnter(UU.id, RU.difficulty))
        }
      }
      setTranslator(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = UU, this.locale = RU, this.emit()
      }
      qC(UU) {
        var RU, gU;
        if (!this.pC) return "open" === UU.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== UU.kind ? "snapshot" === UU.kind && (this.authoritative = UU.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (RU = null === (gU = this.pickerEntry()) || void 0 === gU ? void 0 : gU.difficulties.length) && void 0 !== RU ? RU : 1) - 1)), null === UU.snapshot && this.open ? this.close() : this.emit()) : this.choose(UU.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(UU) {
        var RU;
        const gU = null === (RU = this.authoritative) || void 0 === RU ? void 0 : RU.dungeons.find((RU => RU.id === UU));
        void 0 !== gU ? this.open && this.pickerDungeonId === UU || (this.pickerDungeonId = UU, this.pageIndex = Math.max(0, gU.difficulties.findLastIndex((UU => null !== UU.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${UU}`)
      }
      turnTo(UU) {
        var RU, gU;
        const tU = null !== (RU = null === (gU = this.pickerEntry()) || void 0 === gU ? void 0 : gU.difficulties.length) && void 0 !== RU ? RU : 0;
        UU < 0 || UU >= tU || UU === this.pageIndex || (this.pageIndex = UU, this.emit())
      }
      pickerEntry() {
        var UU, RU;
        return null !== (UU = null === (RU = this.authoritative) || void 0 === RU ? void 0 : RU.dungeons.find((UU => UU.id === this.pickerDungeonId))) && void 0 !== UU ? UU : null
      }
      difficulty(UU) {
        const RU = UU.completions > 0,
          gU = null === UU.bestMs ? null : VU(UU.bestMs);
        return {
          difficulty: UU.difficulty,
          label: this.translate(YU[UU.difficulty]),
          colour: BU[UU.difficulty],
          beaten: RU,
          bestTime: gU,
          completions: UU.completions,
          summary: RU ? [null === gU ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: gU
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: UU.completions.toLocaleString(this.locale)
          })].filter((UU => null !== UU)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(UU) {
        const RU = UU.difficulties.map((UU => this.difficulty(UU))),
          gU = RU.filter((UU => UU.beaten)).length;
        return {
          id: UU.id,
          name: this.translate(UU.nameKey),
          selected: UU.id === this.selected,
          beatenSummary: `${gU} / ${RU.length}`,
          difficulties: RU
        }
      }
      picker() {
        const UU = this.pickerEntry();
        if (null === UU || 0 === UU.difficulties.length) return null;
        const RU = UU.difficulties.map(((RU, gU) => {
          var tU, pU, EU, PU;
          const TU = RU.unlockedBoss,
            qU = null === TU ? this.lockedHint(UU, gU) : null;
          return {
            ...this.difficulty(RU),
            unlocked: null !== TU,
            bossName: null === TU ? null : this.translate(TU.bossNameKey),
            bossMobType: null !== (tU = null === TU || void 0 === TU ? void 0 : TU.bossMobType) && void 0 !== tU ? tU : null,
            bossMobVariation: null !== (pU = null === TU || void 0 === TU ? void 0 : TU.bossMobVariation) && void 0 !== pU ? pU : null,
            lockedHint: null !== (EU = null === qU || void 0 === qU ? void 0 : qU.text) && void 0 !== EU ? EU : null,
            lockedHintHighlight: null !== (PU = null === qU || void 0 === qU ? void 0 : qU.highlight) && void 0 !== PU ? PU : null,
            current: gU === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(UU.nameKey),
          pages: RU,
          page: RU[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < RU.length - 1
        }
      }
      lockedHint(UU, RU) {
        var gU, tU, pU;
        if (0 === RU && "number" === typeof UU.combatLevelLock) {
          const RU = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: UU.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: RU,
            colour: xR("combat"),
            icon: WR.combat
          })
        }
        const EU = null !== (gU = null === (tU = this.authoritative) || void 0 === tU ? void 0 : tU.dungeons) && void 0 !== gU ? gU : [],
          PU = RU > 0 ? UU : null !== (pU = EU[EU.indexOf(UU) - 1]) && void 0 !== pU ? pU : null,
          TU = RU > 0 ? UU.difficulties[RU - 1] : null === PU || void 0 === PU ? void 0 : PU.difficulties[0];
        if (null === PU || void 0 === TU) return null;
        const qU = this.translate(PU.nameKey);
        if (null === TU.unlockedBoss) return PU === UU ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, TU.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: qU
        }, TU.difficulty);
        const KU = this.translate(TU.unlockedBoss.bossNameKey);
        return PU === UU ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: KU
        }, TU.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: KU,
            dungeon: qU
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(UU, RU, gU) {
        return this.hintHighlighting(UU, RU, "difficulty", {
          name: this.translate(YU[gU]),
          colour: BU[gU],
          icon: null
        })
      }
      hintHighlighting(UU, RU, gU, tU) {
        let {
          name: pU,
          colour: EU,
          icon: PU
        } = tU;
        const TU = this.translate(UU, {
          ...RU,
          [gU]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(UU, {
            ...RU,
            [gU]: pU
          }),
          highlight: 2 === TU.length ? {
            before: TU[0],
            name: pU,
            after: TU[1],
            colour: EU,
            icon: PU
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var UU, RU, gU;
        const tU = null !== (UU = null === (RU = this.authoritative) || void 0 === RU ? void 0 : RU.dungeons) && void 0 !== UU ? UU : [];
        var pU, EU;
        tU.some((UU => UU.id === this.selected)) || (this.selected = null !== (pU = null === (EU = tU[0]) || void 0 === EU ? void 0 : EU.id) && void 0 !== pU ? pU : null);
        const PU = tU.map((UU => this.entry(UU)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: PU,
          detail: null !== (gU = PU.find((UU => UU.selected))) && void 0 !== gU ? gU : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const hg = ["mining", "farming", "foraging", "fishing", "combat"],
      Qg = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      eg = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Wg() {
      for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
      return RU.map(((UU, RU) => ({
        amount: UU,
        coins: Qg[RU],
        xp: eg[RU]
      })))
    }
    const fg = Wg(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      xg = Wg(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      mg = Wg(50, 100, 250, 500, 1e3, 2500, 5e3),
      Ig = Wg(25, 50, 100, 250, 500, 1e3),
      Jg = Wg(10, 25, 50, 100, 250, 500, 1e3),
      wg = Wg(1, 5, 10, 25, 50);

    function ng(UU, RU) {
      return {
        id: UU,
        category: "fishing",
        item: RU,
        drops: [RU],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jg
      }
    }
    const bg = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: xg
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: mg
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: mg
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Ig
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Ig
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: xg
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: fg
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: fg
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: fg
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: mg
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: xg
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: xg
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: xg
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: mg
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: mg
      }, ng("wheatfish", "Wheatfish"), ng("darter", "Darter"), ng("sunset_minnow", "Sunset Minnow"), ng("root_flounder", "Root Flounder"), ng("greenfin_loach", "Greenfin Loach"), ng("red_strongfish", "Red Strongfish"), ng("green_strongfish", "Green Strongfish"), ng("boomerang_fish", "Boomerang Fish"), ng("seahorse", "Seahorse"), ng("spined_stickleback", "Spined Stickleback"), ng("moon_strongfish", "Moon Strongfish"), ng("boulder_bass", "Boulder Bass"), ng("grass_snapper", "Grass Snapper"), ng("crystal_wheatfish", "Crystalized Wheatfish", wg), ng("moonstone_pupfish", "Moonstone Pupfish", wg), ng("reedglass_minnow", "Reedglass Minnow"), ng("mangrove_herring", "Mangrove Herring"), ng("mudline_perch", "Mudline Perch"), ng("coastal_mullet", "Coastal Mullet"), ng("reef_sardine", "Reef Sardine"), ng("root_perch", "Root Perch"), ng("driftwood_catfish", "Driftwood Catfish"), ng("aether_minnow", "Aether Minnow"), ng("needlefish", "Tri-Pointed Needlefish"), ng("threadfin_bream", "Threadfin Bream"), ng("mudbelly_tilapia", "Mudbelly Tilapia"), ng("rotslab_eel", "Rotslab Eel"), ng("polarflash_electron", "Polarflash Electron"), ng("mireback_carp", "Mireback Carp"), ng("blackwater_bream", "Blackwater Bream"), ng("stone_grouper", "Stone Grouper"), ng("shadeback_ray", "Shadeback Ray"), ng("glacial_silverfish", "Glacial Silverfish"), ng("hatchetfish", "Hatchetfish"), ng("moonlit_boomerang", "Moonlit Boomerang Fish"), ng("murkborne_ray", "Murkborne Ray"), ng("bamboo_catfish", "Bamboo Catfish"), ng("mossback_arapaima", "Mossback Arapaima"), ng("murk_stingray", "Murk Stingray"), ng("channel_sawfish", "Channel Sawfish"), ng("boned_sturgeon", "Boned Sturgeon"), ng("oarfish", "Oarfish"), ng("snakehead", "Snakehead", wg), ng("eldertide_leviathan", "Eldertide Leviathan", wg), ng("pithead", "Pithead"), ng("electric_eel", "Electric Eel"), ng("shadow_darter", "Shadow Darter"), ng("abyss_carp", "Abyss Carp"), ng("nomai_moray", "Nomai Moray"), ng("silver_dragonfish", "Silver Dragonfish"), ng("giant_moray", "Giant Moray"), ng("coelacanth", "Coelacanth", wg), ng("frost_herring", "Frost Herring"), ng("permafrost_halibut", "Permafrost Halibut"), ng("glacial_lanternfish", "Glacial Lanternfish"), ng("frozen_grenadier", "Frozen Grenadier"), ng("blackfin_icefish", "Blackfin Icefish"), ng("moonfish", "Moonfish"), ng("alpha_strongfish", "Alpha Moon Strongfish"), ng("deep_lanternfish", "Deepwater Lanternfish", wg), ng("pearlescent_moonfish", "Pearlescent Moonfish", wg), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: xg
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Ig
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Ig
      }],
      og = (new Map(bg.map((UU => [UU.id, UU]))), new Map),
      Zg = new Map;
    for (const Kq of bg) {
      for (const [UU, RU] of Object.entries(null !== (ag = Kq.blocks) && void 0 !== ag ? ag : {})) {
        var ag;
        og.set(UU, {
          collection: Kq,
          amount: RU
        })
      }
      for (const UU of null !== (Yg = Kq.drops) && void 0 !== Yg ? Yg : []) {
        var Yg;
        Zg.set(UU, Kq)
      }
    }

    function Bg(UU, RU) {
      let gU = 0;
      for (; gU < UU.tiers.length && RU >= UU.tiers[gU].amount;) gU++;
      return gU
    }
    const Vg = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function rg(UU) {
      return Vg[UU - 1]
    }
    const Xg = "skyblockCollectionsView";
    class vg extends GU {
      constructor(UU, RU) {
        let gU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          tU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : UU => UU;
        super(UU, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = RU, this.locale = gU, this.itemName = tU, this.counts = null, this.category = "mining", this.selected = bg[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = UU => {
          this.category = UU, this.selected = this.inCategory(UU)[0].id, this.emit()
        }, this.select = UU => {
          this.selected = UU, this.emit()
        }
      }
      setTranslator(UU, RU, gU) {
        this.translate = UU, this.locale = RU, this.itemName = gU, this.emit()
      }
      qC(UU) {
        if (!this.pC)
          if ("collOpen" !== UU.kind) {
            (UU.collFull || null === this.counts) && (this.counts = new Map);
            for (const [RU, gU] of UU.collCounts) this.counts.set(RU, gU);
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
        var UU;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const RU = this.inCategory(this.category).map((UU => this.collectionView(UU))),
          gU = bg.reduce(((UU, RU) => UU + this.tierOf(RU)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: hg.map((UU => this.categoryView(UU))),
          collections: RU,
          detail: null !== (UU = RU.find((UU => UU.selected))) && void 0 !== UU ? UU : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(gU)
          })
        }
      }
      categoryView(UU) {
        const RU = this.inCategory(UU),
          gU = RU.reduce(((UU, RU) => UU + this.tierOf(RU)), 0),
          tU = RU.reduce(((UU, RU) => UU + RU.tiers.length), 0);
        return {
          id: UU,
          label: this.translate(`skyblockGame:${UU}`),
          icon: WR[UU],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(gU),
            target: this.number(tU)
          }),
          selected: UU === this.category
        }
      }
      collectionView(UU) {
        var RU, gU;
        const tU = null !== (RU = this.counts.get(UU.id)) && void 0 !== RU ? RU : 0,
          pU = Bg(UU, tU),
          EU = null !== (gU = UU.tiers[pU]) && void 0 !== gU ? gU : null,
          PU = 0 === pU ? 0 : UU.tiers[pU - 1].amount;
        return {
          id: UU.id,
          name: this.itemName(UU.item),
          icon: UU.item,
          selected: UU.id === this.selected,
          locked: 0 === tU,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(tU)
          }),
          tier: 0 === pU ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(pU),
          percent: null === EU ? 100 : Math.min(100, (tU - PU) / (EU.amount - PU) * 100),
          progress: null === EU ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(tU),
            target: this.number(EU.amount)
          }),
          nextReward: null === EU ? null : this.reward(UU, EU.coins, EU.xp)
        }
      }
      reward(UU, RU, gU) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(RU),
          xp: this.number(gU),
          skill: this.translate(`skyblockGame:${UU.category}`)
        })
      }
      tierLabel(UU) {
        return this.translate("skyblockGame:collectionTier", {
          tier: rg(UU)
        })
      }
      tierOf(UU) {
        var RU;
        return Bg(UU, null !== (RU = this.counts.get(UU.id)) && void 0 !== RU ? RU : 0)
      }
      inCategory(UU) {
        return bg.filter((RU => RU.category === UU))
      }
      number(UU) {
        return UU.toLocaleString(this.locale)
      }
    }
    const dg = "skyblockPortalTransitView",
      Hg = "skyblockPortalArrival";
    class Sg {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.yh = UU, this.storage = RU, this.now = gU, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      qC(UU) {
        const RU = {
          zoneNameKey: UU.transitZoneNameKey,
          variation: UU.transitZoneVariation,
          colour: UU.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Hg, RU), this.show("departure", RU.zoneNameKey, RU.colour, UU.transitDurationMs, UU.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Hg)
        }))
      }
      resumeArrival(UU) {
        const RU = this.storage.getItem(Hg);
        this.storage.removeItem(Hg), null === RU || RU.variation !== UU || this.now() - RU.departedAt > 3e4 || this.show("arrival", RU.zoneNameKey, RU.colour, 3200, 2e4)
      }
      finishArrival(UU) {
        var RU;
        "arrival" === (null === (RU = this.view) || void 0 === RU ? void 0 : RU.phase) && this.view.token === UU && (this.clearTimer(), this.view = null, this.yh(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(UU, RU, gU, tU, pU, EU) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: UU,
          zoneNameKey: RU,
          colour: gU,
          durationMs: tU
        }, this.yh(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.yh(null), null === EU || void 0 === EU || EU()
        }), pU)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const sg = "skyblockDailyRewardView",
      yg = "skyblockDailyRewardCoin";
    class kg {
      constructor(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          qU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.yh = UU, this.isBusy = RU, this.holdQuestPopups = gU, this.onHeldCoinsChanged = tU, this.onCoinLanded = pU, this.onStarted = EU, this.onFinished = PU, this.onItemLanded = TU, this.now = qU, this.WT = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var UU, RU;
        return null !== (UU = null === (RU = this.playing) || void 0 === RU ? void 0 : RU.view) && void 0 !== UU ? UU : null
      }
      getHeldCoins() {
        var UU, RU;
        let gU = 0;
        for (const tU of this.WT) gU += tU.coins;
        return gU - (null !== (UU = null === (RU = this.playing) || void 0 === RU ? void 0 : RU.released) && void 0 !== UU ? UU : 0)
      }
      qC(UU) {
        "dailyRewardClaimed" !== UU.kind ? (this.queue.push(UU), this.HG()) : this.WT.push({
          coins: UU.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      HG() {
        const UU = this.now();
        if (null === this.playing) return this.releaseUnshown(UU), void this.startNext(UU);
        const RU = this.playing,
          gU = UU - RU.startedAt,
          tU = RU.view.flyingCoins,
          pU = function(UU, RU) {
            let gU = 0;
            for (; gU < RU && ig(gU, RU) <= UU;) gU++;
            return gU
          }(gU, tU);
        if (pU !== RU.landed) {
          for (let UU = pU - RU.landed > 2 ? pU - 1 : RU.landed; UU < pU; UU++) this.onCoinLanded(UU, tU);
          RU.landed = pU, RU.released = Math.round(RU.view.coins * pU / tU), this.onHeldCoinsChanged()
        }
        for (; RU.itemsLanded < RU.view.items.length && 2e3 + 160 * RU.itemsLanded + 630 <= gU;) this.onItemLanded(RU.itemsLanded), RU.itemsLanded++;
        gU >= RU.view.durationMs && (this.finish(), this.startNext(UU))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.WT = [], this.yh(null)
      }
      startNext(UU) {
        if (0 === this.queue.length || this.isBusy()) return;
        const RU = this.queue.shift();
        this.token++;
        const gU = {
          token: this.token,
          day: RU.dailyRewardDay,
          coins: RU.dailyRewardCoins,
          items: RU.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: RU.dailyRewardDay === oU ? 24 : 14
        };
        this.playing = {
          view: gU,
          startedAt: UU,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.yh(gU), this.onStarted(gU)
      }
      finish() {
        this.WT.shift(), this.playing = null, this.holdQuestPopups(!1), this.yh(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(UU) {
        if (this.queue.length > 0 || 0 === this.WT.length) return;
        const RU = this.WT.length;
        this.WT = this.WT.filter((RU => UU - RU.receivedAt < 6e4)), this.WT.length !== RU && this.onHeldCoinsChanged()
      }
    }

    function Fg(UU, RU) {
      return 450 + 715 * UU / (RU - 1)
    }

    function ig(UU, RU) {
      return Fg(UU, RU) + 650
    }
    const Ag = "skyblockMailboxView";
    class zg {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.yh = UU, this.isBusy = RU, this.onStarted = gU, this.now = tU, this.waiting = [], this.playing = null, this.token = 0, this.itemName = UU => UU
      }
      getSnapshot() {
        var UU, RU;
        return null !== (UU = null === (RU = this.playing) || void 0 === RU ? void 0 : RU.view) && void 0 !== UU ? UU : null
      }
      setItemName(UU) {
        this.itemName = UU
      }
      qC(UU) {
        this.waiting.push(...UU.mailLetters), this.HG()
      }
      HG() {
        const UU = this.now();
        null !== this.playing && UU - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.yh(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(UU)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.yh(null)
      }
      start(UU) {
        const RU = this.waiting.slice(0, 3);
        this.token++;
        const gU = {
          token: this.token,
          letters: RU.map((UU => this.toView(UU))),
          more: this.waiting.length - RU.length,
          durationMs: 4500 + 700 * RU.length
        };
        this.waiting = [], this.playing = {
          view: gU,
          startedAt: UU
        }, this.yh(gU), this.onStarted(gU)
      }
      toView(UU) {
        return {
          coins: UU.mailCoins,
          items: UU.mailItems.map((UU => {
            var RU;
            return {
              itemName: UU.mailItemName,
              amount: UU.mailItemAmount,
              label: null !== (RU = UU.mailItemLabel) && void 0 !== RU ? RU : this.itemName(UU.mailItemName)
            }
          })),
          reasonKey: UU.mailReasonKey,
          reasonParams: UU.mailReasonParams
        }
      }
    }
    const Mg = "skyblockQuestGraphView",
      Dg = "skyblockDevQuestJump";

    function Lg(UU) {
      if (0 === UU.length) return "";
      const RU = [`M ${UU[0].x} ${UU[0].y}`];
      for (let tU = 1; tU < UU.length - 1; tU++) {
        const gU = UU[tU + 1];
        RU.push(`Q ${UU[tU].x} ${UU[tU].y} ${(UU[tU].x+gU.x)/2} ${(UU[tU].y+gU.y)/2}`)
      }
      const gU = UU[UU.length - 1];
      return RU.push(`L ${gU.x} ${gU.y}`), RU.join(" ")
    }

    function Ng(UU, RU) {
      return UU < RU ? `${UU}|${RU}` : `${RU}|${UU}`
    }
    class lg extends GU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(UU, gU, tU), this.translate = RU, this.requestJump = pU, this.requestArrive = EU, this.storage = PU, this.now = TU, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = UU => {
          UU !== this.hoveredId && (this.hoveredId = UU, this.emit())
        }, this.jump = UU => {
          this.close(), this.requestJump(UU)
        }
      }
      qC(UU) {
        if (!this.pC)
          if ("graph" !== UU.kind) {
            if ("jumping" === UU.kind) {
              const RU = {
                questId: UU.graphQuestId,
                variation: UU.graphVariation,
                completes: UU.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(Dg, RU)
            }
          } else {
            const RU = ++this.graphCount;
            gU.e(111).then((() => gU(6123))).then((gU => {
              let {
                default: tU
              } = gU;
              this.pC || RU !== this.graphCount || (this.layout = function(UU, RU, gU) {
                var tU, pU;
                const EU = new UU.graphlib.Graph;
                EU.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), EU.setDefaultEdgeLabel((() => ({})));
                const PU = new Set;
                for (const cU of RU) PU.add(cU.graphQuestId), EU.setNode(cU.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const TU = gU.filter((UU => PU.has(UU.graphFromId) && PU.has(UU.graphToId) && UU.graphFromId !== UU.graphToId)),
                  qU = new Map;
                for (const cU of [...TU].sort(((UU, RU) => Number("awaits" === UU.graphEdgeKind) - Number("awaits" === RU.graphEdgeKind)))) {
                  const UU = Ng(cU.graphFromId, cU.graphToId);
                  qU.has(UU) || (qU.set(UU, cU), EU.setEdge(cU.graphFromId, cU.graphToId))
                }
                UU.layout(EU);
                const KU = EU.graph();
                return {
                  width: Math.ceil(null !== (tU = KU.width) && void 0 !== tU ? tU : 0),
                  height: Math.ceil(null !== (pU = KU.height) && void 0 !== pU ? pU : 0),
                  nodes: RU.map((UU => {
                    var RU, gU;
                    const tU = EU.node(UU.graphQuestId);
                    return {
                      node: UU,
                      left: (null !== (RU = tU.x) && void 0 !== RU ? RU : 0) - 95,
                      top: (null !== (gU = tU.y) && void 0 !== gU ? gU : 0) - 26
                    }
                  })),
                  edges: TU.map((UU => {
                    var RU;
                    const gU = qU.get(Ng(UU.graphFromId, UU.graphToId)),
                      tU = null !== (RU = EU.edge(gU.graphFromId, gU.graphToId).points) && void 0 !== RU ? RU : [];
                    return {
                      edge: UU,
                      key: `${UU.graphFromId}|${UU.graphToId}|${UU.graphEdgeKind}`,
                      path: Lg(gU.graphFromId === UU.graphFromId ? tU : [...tU].reverse())
                    }
                  })),
                  plans: new Map(RU.map((UU => [UU.graphQuestId, new Set([UU.graphQuestId, ...UU.graphPlanIds])])))
                }
              }(tU, UU.graphNodes, UU.graphEdges), this.show())
            })).catch((UU => {
              console.error("The quest graph could not be laid out", UU)
            }))
          }
      }
      resumeJump(UU) {
        const RU = this.storage.getItem(Dg);
        this.storage.removeItem(Dg), null === RU || RU.variation !== UU || this.now() - RU.departedAt > 6e4 || this.requestArrive(RU.questId, RU.completes)
      }
      setTranslator(UU) {
        this.translate = UU, this.emit()
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
        var UU, RU;
        return null !== (UU = null === this.hoveredId || null === (RU = this.layout) || void 0 === RU ? void 0 : RU.plans.get(this.hoveredId)) && void 0 !== UU ? UU : new Set
      }
      buildSnapshot() {
        const UU = this.layout;
        if (null === UU) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const RU = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: UU.width,
          height: UU.height,
          nodes: UU.nodes.map((UU => {
            let {
              node: gU,
              left: tU,
              top: pU
            } = UU;
            return {
              id: gU.graphQuestId,
              name: this.translate(gU.graphNameKey),
              detail: null === gU.graphGiverName ? gU.graphZoneId : `${gU.graphGiverName} \xb7 ${gU.graphZoneId}`,
              state: gU.graphState,
              left: tU,
              top: pU,
              inPlan: RU.has(gU.graphQuestId),
              hovered: gU.graphQuestId === this.hoveredId
            }
          })),
          edges: UU.edges.map((UU => {
            let {
              edge: gU,
              key: tU,
              path: pU
            } = UU;
            return {
              key: tU,
              kind: gU.graphEdgeKind,
              path: pU,
              inPlan: RU.has(gU.graphFromId) && RU.has(gU.graphToId)
            }
          })),
          planning: RU.size > 0
        }
      }
    }
    var Og = gU(36569);
    const Ut = 250,
      Rt = 2150,
      gt = -2.8,
      tt = 2.2,
      pt = -27,
      Et = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      Pt = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      Tt = Math.round(50 + 1e3 * (Pt.delay + Pt.period / 2)),
      qt = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Kt = Array.from({
        length: 26
      }, ((UU, RU) => {
        const gU = 2.39996 * RU,
          tU = .5 + .618034 * RU % 1 * .23,
          pU = RU % 3 !== 2;
        return {
          rune: pU ? qt[7 * RU % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(gU)*tU).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(gU)*tU).toFixed(3)})`,
            "--spin": 40 * (RU % 5 - 2) + "deg",
            "--size": (pU ? 1 + RU % 4 * .2 : .3 + RU % 2 * .15) + "rem",
            "--duration": `${(1.8+7*RU%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*RU%3).toFixed(2)}s`
          }
        }
      }));

    function ct(UU, RU) {
      return Array.from({
        length: 30 + 3 * UU + (RU ? 10 : 0)
      }, ((UU, RU) => {
        const gU = RU < 4,
          tU = gU ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          pU = gU ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          EU = gU ? 2.2 : .6 + Math.random(),
          PU = gU ? .3 : Math.random() < .5 ? .16 : .24,
          TU = gU ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": tU,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${pU.toFixed(2)}rem`,
          "--length": `${EU.toFixed(2)}rem`,
          "--width": `${PU}rem`,
          "--duration": `${Math.round(TU)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Gt(UU) {
      let {
        zeta: RU,
        period: gU
      } = UU;
      const tU = 2 * Math.PI / gU;
      return {
        w: tU,
        decay: RU * tU / Math.sqrt(1 - RU * RU)
      }
    }
    let jt = !1;

    function ut() {
      if (jt) return;
      jt = !0;
      const UU = document.createElement("style");
      UU.textContent = function() {
        const UU = Gt(Et),
          RU = Gt(Pt),
          gU = RU => Math.exp(-UU.decay * RU) * Math.sin(UU.w * RU),
          tU = gU(Math.atan(UU.w / UU.decay) / UU.w),
          pU = .25,
          EU = 2.15,
          PU = Math.round(215),
          TU = [];
        for (let qU = 0; qU <= PU; qU++) {
          const UU = qU / PU * EU;
          let KU = Math.sin(Math.min(UU, pU) / pU * Math.PI / 2) ** 2,
            cU = 0,
            GU = 1,
            jU = 1 - .2 * KU,
            uU = 1;
          if (UU >= pU) {
            const PU = UU - pU,
              TU = Math.max(0, PU - .05);
            KU = Math.exp(-TU / .05), cU = gU(TU + Et.lead * (1 - Math.exp(-TU / Et.rush))) / tU;
            const qU = TU - Pt.delay,
              CU = qU <= 0 ? 0 : 1 - Math.exp(-RU.decay * qU) * (Math.cos(RU.w * qU) + RU.decay / RU.w * Math.sin(RU.w * qU)),
              hU = Math.max(0, (UU - 1.77) / (EU - 1.77));
            GU = (1 + (Pt.to - 1) * CU) * (1 + .08 * hU), jU = 1.1 + 1.5 * Math.exp(-PU / .07) + .3 * Math.exp(-(((1e3 * PU - Tt) / 100) ** 2)) + .8 * hU, uU = 1 - hU ** 1.5
          }
          const CU = .15 * KU + gt * cU,
            hU = -.1 * KU + tt * cU,
            QU = 3 * KU + pt * cU;
          TU.push(`${(qU/PU*100).toFixed(3)}% { opacity: ${uU.toFixed(3)}; transform: translate(${CU.toFixed(3)}rem, ${hU.toFixed(3)}rem) rotate(${QU.toFixed(2)}deg) scale(${GU.toFixed(3)}); filter: brightness(${jU.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${TU.join(" ")} }`
      }(), document.head.append(UU)
    }
    const Ct = "skyblockForgeView",
      ht = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Qt extends GU {
      constructor(UU, RU, gU, tU, pU) {
        super(UU, gU, tU), this.translate = RU, this.requestForge = pU, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.select = (UU, RU) => {
          var gU, tU;
          null !== this.forging || (null !== (gU = this.owned[(0, Og.m)(RU, UU)]) && void 0 !== gU ? gU : 0) <= 0 || (this.selected[UU] = this.selected[UU] === RU ? null : RU, this.status = null, null === (tU = this.onPartSelected) || void 0 === tU || tU.call(this), this.emit())
        }, this.forge = UU => {
          var RU, gU;
          const tU = this.selectedParts();
          if (null === tU || this.isPending() || !this.open) return;
          const pU = (0, Og.j)(tU);
          if (null === pU || pU.coalCost > this.coal) return;
          const EU = this.preview(pU),
            PU = null !== (RU = null === (gU = this.onForgeStarted) || void 0 === gU ? void 0 : gU.call(this, EU.tier, EU.named, UU)) && void 0 !== RU ? RU : () => {};
          if (this.dropArrival(), UU) {
            const UU = {
              id: ++this.forgeId,
              preview: EU,
              timers: [],
              stopSounds: PU,
              landed: !1,
              reply: null
            };
            UU.timers.push(setTimeout((() => {
              UU.landed = !0, null !== UU.reply && (this.apply(UU.reply), UU.reply = null, this.emit())
            }), Ut), setTimeout((() => {
              this.finishForge(UU)
            }), Rt)), this.forging = UU
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(tU)
        }, this.snapshot = this.buildSnapshot()
      }
      qC(UU) {
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === UU.forgeMessageKind) return this.dropForge(), this.apply(UU), this.status = null, void this.show();
        const RU = this.forging;
        if (null !== RU && null !== UU.forgeRefusalKey) this.dropForge();
        else if (null !== RU && !RU.landed) return void(RU.reply = UU);
        this.apply(UU), this.emit()
      }
      apply(UU) {
        if (this.owned = UU.forgeOwnedParts, this.coal = UU.forgeCoalOwned, this.keepSelectionOwned("open" === UU.forgeMessageKind), null !== UU.forgeForgedSwordId) {
          var RU;
          const gU = (0, Og.j)(UU.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (RU = null === gU || void 0 === gU ? void 0 : gU.displayName) && void 0 !== RU ? RU : ""
            }
          }
        } else null !== UU.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: UU.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(UU) {
        this.translate = UU, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(UU) {
        var RU;
        this.forging = null;
        const gU = this.selectedParts(),
          tU = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: UU.id,
          sameSword: null !== gU && (null === (RU = (0, Og.j)(gU)) || void 0 === RU ? void 0 : RU.displayName) === UU.preview.name,
          timer: tU
        }, this.emit()
      }
      dropForge() {
        const UU = this.forging;
        if (null !== UU) {
          this.forging = null;
          for (const RU of UU.timers) clearTimeout(RU);
          UU.stopSounds(), null !== UU.reply && this.apply(UU.reply)
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
        var UU, RU, gU;
        const tU = this.selectedParts(),
          pU = null === tU ? null : (0, Og.j)(tU),
          EU = null !== (UU = null === (RU = this.forging) || void 0 === RU ? void 0 : RU.preview) && void 0 !== UU ? UU : null === pU ? null : this.preview(pU);
        return {
          enabled: this.received,
          open: this.open,
          slots: Og.i.map((UU => ({
            kind: UU,
            label: this.translate(ht[UU]),
            parts: this.partsFor(UU)
          }))),
          coalOwned: this.coal,
          preview: EU,
          unformedSword: Og.h[null !== (gU = this.selected.Blade) && void 0 !== gU ? gU : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((UU => UU > 0)),
          canForge: null !== EU && !EU.coalShort && !this.isPending(),
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
      preview(UU) {
        return {
          name: UU.displayName,
          lore: UU.lore,
          baseSword: UU.baseSword,
          enchantmentTier: UU.enchantmentTier,
          tier: Number(UU.enchantmentTier.slice(-1)),
          named: UU.named,
          stats: this.stats(UU),
          effects: UU.effects,
          coalCost: UU.coalCost,
          coalShort: null === this.forging && UU.coalCost > this.coal
        }
      }
      partsFor(UU) {
        const RU = [];
        for (const tU of Og.f) {
          var gU;
          const pU = (0, Og.m)(tU, UU),
            EU = null !== (gU = this.owned[pU]) && void 0 !== gU ? gU : 0;
          EU > 0 && RU.push({
            material: tU,
            itemName: pU,
            owned: EU,
            selected: this.selected[UU] === tU,
            placeholder: !1
          })
        }
        if (0 === RU.length) {
          const gU = Og.f[0];
          RU.push({
            material: gU,
            itemName: (0, Og.m)(gU, UU),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return RU
      }
      stats(UU) {
        const RU = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${UU.powerMultiplier.toFixed(2)}`,
          better: UU.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${UU.damageMultiplier.toFixed(2)}`,
          better: UU.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/UU.cooldownMultiplier).toFixed(2)}`,
          better: UU.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${UU.knockbackMultiplier.toFixed(2)}`,
          better: UU.knockbackMultiplier > 1
        }];
        return UU.reachBonus > 0 && RU.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${UU.reachBonus.toFixed(1)}`,
          better: !0
        }), UU.damageReduction > 0 && RU.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*UU.damageReduction)}%`,
          better: !0
        }), RU
      }
      selectedParts() {
        const {
          Blade: UU,
          Guard: RU,
          Handle: gU
        } = this.selected;
        return null === UU || null === RU || null === gU ? null : {
          blade: UU,
          guard: RU,
          handle: gU
        }
      }
      keepSelectionOwned(UU) {
        for (const gU of Og.i) {
          var RU;
          const tU = this.selected[gU];
          if (null !== tU && (null !== (RU = this.owned[(0, Og.m)(tU, gU)]) && void 0 !== RU ? RU : 0) > 0) continue;
          if (!UU) {
            this.selected[gU] = null;
            continue
          }
          const pU = [...Og.f].reverse().find((UU => {
            var RU;
            return (null !== (RU = this.owned[(0, Og.m)(UU, gU)]) && void 0 !== RU ? RU : 0) > 0
          }));
          this.selected[gU] = null !== pU && void 0 !== pU ? pU : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const et = "skyblockSmugglerView",
      Wt = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class ft extends GU {
      constructor(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(UU, gU, tU), this.translate = RU, this.requestBuy = pU, this.now = EU, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = UU => UU, this.onBought = null, this.buy = UU => {
          const RU = this.deals[UU];
          void 0 !== RU && !this.isPending() && this.open && !this.soldOut.has(UU) && this.canAfford(RU) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, UU))
        }, this.snapshot = this.buildSnapshot()
      }
      qC(UU) {
        if (this.received = !0, this.day = UU.smugglerDay, this.deals = UU.smugglerDeals, this.rivets = UU.smugglerRivetsOwned, this.crests = UU.smugglerCrestsOwned, this.soldOut = new Set(UU.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + UU.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === UU.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = UU.smugglerBoughtSlot, null !== UU.smugglerBoughtSlot) {
          var RU, gU;
          const tU = this.deals[UU.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === tU ? "" : this.dealName(tU),
              amount: String(null !== (RU = null === tU || void 0 === tU ? void 0 : tU.smugglerDealAmount) && void 0 !== RU ? RU : 0)
            }
          }, this.boughtCount++, null === (gU = this.onBought) || void 0 === gU || gU.call(this)
        } else null !== UU.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: UU.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(UU, RU, gU) {
        this.translate = UU, void 0 !== gU && (this.itemName = gU), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(UU) {
        if (null !== UU.smugglerDealUniqueName) return UU.smugglerDealUniqueName;
        const RU = Wt[UU.smugglerDealItem];
        return void 0 === RU ? this.itemName(UU.smugglerDealItem) : this.translate(RU)
      }
      canAfford(UU) {
        return UU.smugglerDealRivets <= this.rivets && UU.smugglerDealCrests <= this.crests
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
        const UU = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return UU <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : UU < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(UU)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(UU / 60)),
          minutes: String(UU % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((UU, RU) => ({
            slot: RU,
            itemName: UU.smugglerDealItem,
            displayName: this.dealName(UU),
            enchantmentTier: UU.smugglerDealEnchantmentTier,
            amount: UU.smugglerDealAmount,
            rivets: UU.smugglerDealRivets,
            crests: UU.smugglerDealCrests,
            affordable: this.canAfford(UU),
            soldOut: this.soldOut.has(RU),
            justBought: this.boughtSlot === RU
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
    const xt = "skyblockPassageView",
      mt = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function It(UU, RU) {
      return UU(mt[RU])
    }

    function Jt(UU, RU, gU, tU) {
      const pU = Math.ceil((gU - tU) / 864e5),
        EU = It(UU, RU);
      return pU > 1 ? UU("skyblockGame:passageNextDays", {
        phase: EU,
        days: String(pU)
      }) : UU("skyblockGame:passageNextSoon", {
        phase: EU
      })
    }
    class wt extends GU {
      constructor(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(UU, gU, tU), this.translate = RU, this.now = pU, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = UU => UU, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      qC(UU) {
        this.message = UU, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(UU, RU, gU) {
        this.translate = UU, void 0 !== gU && (this.itemName = gU), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(UU) {
        return {
          itemName: UU.passageFish,
          displayName: this.itemName(UU.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(UU.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const UU = this.message;
        return null === UU ? {
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
          phase: UU.passagePhase,
          phaseName: It(this.translate, UU.passagePhase),
          visitors: UU.passageVisitors.map((UU => this.describe(UU))),
          resting: this.describe(UU.passageResting),
          nextPhase: UU.passageNextPhase,
          next: Jt(this.translate, UU.passageNextPhase, UU.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var nt = gU(38092);
    const bt = "skyblockKeepersChairView";
    class ot extends GU {
      constructor(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new nt.d;
        super(UU, gU, tU), this.translate = RU, this.requestAim = pU, this.now = EU, this.pacer = PU, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = UU => UU, this.aim = UU => {
          !this.awaitingReply && this.open && this.atChair && UU !== this.favoured && (null === UU || this.islands.some((RU => RU.keepersChairIslandId === UU && RU.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== UU && void 0 !== UU ? UU : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = PU.subscribe((() => {
          this.emit()
        }))
      }
      qC(UU) {
        var RU, gU;
        this.received = !0;
        const tU = this.favoured,
          pU = this.atChair;
        var EU;
        return this.islands = UU.keepersChairIslands, this.favoured = UU.keepersChairFavoured, this.passage = null !== (RU = UU.keepersChairPassage) && void 0 !== RU ? RU : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (gU = UU.keepersChairAtChair) || void 0 === gU || gU, "place" === UU.keepersChairMessageKind ? (!pU && this.atChair && "refused" === (null === (EU = this.status) || void 0 === EU ? void 0 : EU.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === UU.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== UU.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: UU.keepersChairRefusalKey,
          island: null
        } : this.favoured !== tU && (this.status = null === this.favoured ? {
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
      receivePassage(UU) {
        this.received && (this.passage = UU, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(UU, RU, gU) {
        this.translate = UU, void 0 !== gU && (this.itemName = gU), this.emit()
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
      islandName(UU) {
        const RU = this.islands.find((RU => RU.keepersChairIslandId === UU));
        return void 0 === RU ? UU : this.translate(RU.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const UU = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          RU = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((UU => {
            const RU = UU.keepersChairFeaturedFish;
            return {
              id: UU.keepersChairIslandId,
              name: this.translate(UU.keepersChairIslandNameKey),
              relit: UU.keepersChairIslandRelit,
              featuredFish: null === RU ? null : {
                itemName: RU,
                displayName: this.itemName(RU)
              },
              favoured: UU.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === UU ? null : {
            tone: UU.tone,
            text: this.translate(UU.key, null === UU.island ? void 0 : {
              island: this.islandName(UU.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === RU ? null : {
            phase: RU.keepersChairPassagePhase,
            phaseName: It(this.translate, RU.keepersChairPassagePhase),
            nextPhase: RU.keepersChairPassageNextPhase,
            next: Jt(this.translate, RU.keepersChairPassageNextPhase, RU.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Zt = "skyblockReachLogView",
      Yt = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Bt = "Caught Fish",
      Vt = [1, 2, 4];

    function rt(UU, RU) {
      return UU.map((UU => ({
        ...UU,
        reachLogPageFish: UU.reachLogPageFish.map((UU => ({
          ...UU,
          reachLogFishFresh: RU(UU)
        })))
      })))
    }
    class Xt extends GU {
      constructor(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new nt.d;
        super(UU, gU, tU), this.translate = RU, this.requestOpen = pU, this.pacer = EU, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = UU => UU, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = UU => {
          this.pages.some((RU => RU.reachLogIslandId === UU)) && (this.selected = UU, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = EU.subscribe((() => {
          this.emit()
        }))
      }
      qC(UU) {
        if (this.received = !0, "status" === UU.reachLogMessageKind) return !0 === UU.reachLogNews && this.markNews(), this.serverFresh = UU.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const RU = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== UU.reachLogMessageKind)
          if (this.pageViews = null, this.pages = rt(UU.reachLogPages, (UU => UU.reachLogFishFresh || this.heldFresh.has(UU.reachLogFishItem))), this.letGoShown = UU.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, RU) this.showPages();
          else {
            for (const UU of this.pages)
              for (const RU of UU.reachLogPageFish) RU.reachLogFishFresh && this.heldFresh.add(RU.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(UU, RU, gU) {
        this.translate = UU, this.pageViews = null, void 0 !== gU && (this.itemName = gU), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = rt(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var UU, RU, gU, tU;
        const pU = this.pages.find((UU => UU.reachLogPageFish.some((UU => UU.reachLogFishFresh))));
        if (void 0 !== pU) return pU.reachLogIslandId;
        if (null !== this.selected && this.pages.some((UU => UU.reachLogIslandId === this.selected))) return this.selected;
        return null !== (UU = null !== (RU = null === (gU = this.pages.filter((UU => UU.reachLogIslandAwake)).at(-1)) || void 0 === gU ? void 0 : gU.reachLogIslandId) && void 0 !== RU ? RU : null === (tU = this.pages[0]) || void 0 === tU ? void 0 : tU.reachLogIslandId) && void 0 !== UU ? UU : null
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
        return this.pages.map((UU => {
          var RU;
          return {
            id: UU.reachLogIslandId,
            name: this.translate(UU.reachLogIslandNameKey),
            awake: UU.reachLogIslandAwake,
            gold: UU.reachLogPageGold,
            caught: UU.reachLogPageFish.filter((UU => UU.reachLogFishCaught && !UU.reachLogFishVisitor)).length,
            total: UU.reachLogPageFish.filter((UU => !UU.reachLogFishVisitor)).length,
            fish: UU.reachLogPageFish.map((UU => {
              const RU = UU.reachLogFishBestKg;
              return {
                itemName: UU.reachLogFishItem,
                name: UU.reachLogFishCaught ? this.itemName(UU.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: UU.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / UU.reachLogFishChance))
                }),
                best: UU.reachLogFishCaught ? null === RU ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: RU.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: UU.reachLogFishMarks,
                ribbons: Vt.map((RU => 0 !== (UU.reachLogFishRibbons & RU))),
                glimmer: 0 !== (8 & UU.reachLogFishRibbons),
                halo: 0 !== (32 & UU.reachLogFishRibbons),
                fresh: UU.reachLogFishFresh,
                visitor: UU.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (RU = UU.reachLogPageReturner) && void 0 !== RU ? RU : null)
          }
        }))
      }
      buildReturner(UU) {
        return null === UU ? null : {
          itemName: UU.reachLogReturnerFishItem,
          line: this.translate(UU.reachLogReturnerLineKey, {
            name: this.translate(UU.reachLogReturnerNameKey),
            trinket: this.translate(UU.reachLogReturnerTrinketKey)
          }),
          back: UU.reachLogReturnerBack
        }
      }
      receivePassagePhase(UU) {
        null !== this.passagePhase && this.passagePhase !== UU && (this.pagesCurrent = !1), this.passagePhase = UU
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const vt = "skyblockLampLightView";
    class dt {
      constructor(UU, RU, gU, tU) {
        this.yh = UU, this.translate = RU, this.requestCommand = gU, this.pacer = tU, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.pC = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = UU => {
          UU ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = UU => {
          this.send(`buy ${UU}`)
        }, this.socket = UU => {
          this.send(`socket ${null!==UU&&void 0!==UU?UU:XU}`)
        }, this.wearTint = UU => {
          this.send(`tint ${null!==UU&&void 0!==UU?UU:XU}`)
        }, this.setSituation = UU => {
          this.situation = UU, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = tU.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = tU.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      qC(UU) {
        if (this.message = UU, null !== UU.lampLightShop && (this.shop = UU.lampLightShop), "open" === UU.lampLightKind && (this.refusalKey = null), "reply" === UU.lampLightKind) {
          var RU;
          const pU = null !== (RU = UU.lampLightReplyTag) && void 0 !== RU ? RU : null,
            EU = null !== pU && pU === this.offTag;
          var gU, tU;
          if (EU ? this.settleOff() : null !== pU && pU !== this.awaitingTag || this.settleReply(), this.refusalKey = UU.lampLightRefusalKey, null !== UU.lampLightBought && !EU) this.sparkle = {
            id: UU.lampLightBought,
            count: (null !== (gU = null === (tU = this.sparkle) || void 0 === tU ? void 0 : tU.count) && void 0 !== gU ? gU : 0) + 1
          }
        }
        UU.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === UU.lampLightKind && (this.lastGained = UU.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(UU) {
        UU !== this.atChair && (this.atChair = UU, UU && (this.refusalKey = null), this.emit())
      }
      setTranslator(UU, RU) {
        this.translate = UU, this.locale = null !== RU && void 0 !== RU ? RU : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.pC = !0
      }
      send(UU) {
        var RU;
        if (null !== this.awaitingTag || "ready" !== (null === (RU = this.message) || void 0 === RU ? void 0 : RU.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const gU = this.nextTag();
        this.awaitingTag = gU, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${UU} ${gU}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const UU = this.nextTag();
        this.offTag = UU, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${UU}`)
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
        this.pC || (this.snapshot = this.buildSnapshot(), this.yh(this.snapshot))
      }
      formatLight(UU) {
        return Math.floor(UU).toLocaleString(this.locale)
      }
      formatPercent(UU) {
        const RU = 100 * UU;
        return RU >= 10 ? Math.round(RU).toLocaleString(this.locale) : RU.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(UU, RU) {
        if ("bite" === UU) return this.translate("skyblockGame:lampLightBite", {
          seconds: (RU.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === UU) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(RU.lampLightRareChance)
        });
        if ("notice" === UU) return null === RU.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(RU.lampLightNoticeChance)
        });
        const gU = "meter" === UU ? RU.lampLightMeterCatches : RU.lampLightBloomCatches;
        return null === gU ? null : this.translate("meter" === UU ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(gU))
        })
      }
      oddsLines(UU, RU) {
        const gU = (UU, RU) => {
            var gU;
            return null !== (gU = {
              bite: RU.lampLightBiteMs,
              rare: RU.lampLightRareChance,
              meter: RU.lampLightMeterCatches,
              bloom: RU.lampLightBloomCatches,
              notice: RU.lampLightNoticeChance
            } [UU]) && void 0 !== gU ? gU : 0
          },
          tU = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          pU = [];
        for (const EU of ["bite", "rare", "meter", "bloom", "notice"]) {
          const PU = this.formatOdds(EU, UU),
            TU = this.formatOdds(EU, RU);
          if (null === PU || null === TU || "bite" !== EU && "rare" !== EU && PU === TU) continue;
          const qU = gU(EU, RU) - gU(EU, UU),
            KU = tU[EU] ? qU < 0 : qU > 0;
          pU.push({
            label: EU,
            before: PU,
            after: TU,
            tone: PU === TU ? "same" : KU ? "better" : "worse"
          })
        }
        return pU
      }
      charmView(UU, RU, gU) {
        const tU = UU.lampLightCharmId.charAt(0).toUpperCase() + UU.lampLightCharmId.slice(1),
          pU = "bloom" === this.situation;
        return {
          id: UU.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${tU}`),
          effect: this.translate(`skyblockGame:lampLightCharm${tU}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(UU.lampLightCharmCost)
          }),
          owned: UU.lampLightCharmOwned,
          affordable: gU >= UU.lampLightCharmCost,
          socketed: RU.lampLightSocketed === UU.lampLightCharmId,
          lines: this.oddsLines(pU ? RU.lampLightBareBloom : RU.lampLightBareOpen, pU ? UU.lampLightCharmBloom : UU.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var UU, RU, gU, tU;
        const pU = this.message,
          EU = "ready" === (null === pU || void 0 === pU ? void 0 : pU.lampLightStatus) ? this.shop : null,
          PU = null !== (UU = null === pU || void 0 === pU ? void 0 : pU.lampLightBalance) && void 0 !== UU ? UU : 0,
          TU = this.atChair,
          qU = "loading" === (null === pU || void 0 === pU ? void 0 : pU.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === pU || void 0 === pU ? void 0 : pU.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          KU = "ready" !== (null === pU || void 0 === pU ? void 0 : pU.lampLightStatus) || TU ? null !== (RU = this.refusalKey) && void 0 !== RU ? RU : qU : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== pU && "locked" !== pU.lampLightStatus,
          status: null !== (gU = null === pU || void 0 === pU ? void 0 : pU.lampLightStatus) && void 0 !== gU ? gU : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(PU)
          }),
          releasing: null !== (tU = null === pU || void 0 === pU ? void 0 : pU.lampLightReleasing) && void 0 !== tU && tU,
          gained: null === pU || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === pU || void 0 === pU ? void 0 : pU.lampLightStatus) && TU && !this.isPending(),
          situation: this.situation,
          shop: null === EU ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: EU.lampLightOddsRod,
              island: this.translate(EU.lampLightIslandNameKey)
            }),
            heldRod: null !== EU.lampLightHeldRod,
            charms: EU.lampLightCharms.map((UU => this.charmView(UU, EU, PU))),
            tints: EU.lampLightTints.map((UU => {
              const RU = UU.lampLightTintId,
                [gU, tU, pU] = UU.lampLightTintColour;
              return {
                id: RU,
                name: this.translate(`skyblockGame:lampLightTint${RU.charAt(0).toUpperCase()}${RU.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(UU.lampLightTintCost)
                }),
                owned: UU.lampLightTintOwned,
                affordable: PU >= UU.lampLightTintCost,
                wearing: EU.lampLightTint === RU,
                colour: `rgb(${gU}, ${tU}, ${pU})`
              }
            })),
            wearingIslandColours: null === EU.lampLightTint
          },
          notice: null === KU ? null : this.translate(KU),
          sparkle: this.sparkle
        }
      }
    }
    const Ht = "skyblockMagmawardView";
    class St {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.yh = UU, this.now = RU, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = kU.map((() => 0)), this.wornAt = kU.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      qC(UU) {
        var RU, gU;
        const tU = kU.map(((RU, gU) => !0 === UU.magmawardPiecesWorn[gU]));
        if (!tU.includes(!0)) return this.snapshot = null, void this.yh(null);
        const pU = this.now(),
          EU = this.snapshot;
        null === EU && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const PU = UU.magmawardFuelCarried,
          TU = !tU.includes(!1);
        let qU = null !== (RU = null === EU || void 0 === EU ? void 0 : EU.pulse) && void 0 !== RU ? RU : null,
          KU = null !== (gU = null === EU || void 0 === EU ? void 0 : EU.flare) && void 0 !== gU ? gU : null;
        UU.magmawardFuelBurned ? (qU = "burn", KU = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = pU, this.flareAt = pU) : null !== EU && PU > EU.fuel && (qU = "gain", this.pulseToken++, this.pulseAt = pU), TU && null !== EU && !EU.fullSet && (KU = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = pU, this.setLitAt = pU);
        const cU = kU.map(((UU, RU) => (tU[RU] && null !== EU && !EU.pieces[RU].worn && (this.wornTokens[RU]++, this.wornAt[RU] = pU), {
          itemName: UU,
          worn: tU[RU],
          wornToken: this.wornTokens[RU],
          justWorn: tU[RU] && this.isPlaying(this.wornAt[RU], pU)
        })));
        this.snapshot = {
          pieces: cU,
          wornCount: tU.filter(Boolean).length,
          fullSet: TU,
          fuel: PU,
          fuelState: PU <= 0 ? "empty" : PU <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, pU) ? qU : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, pU) ? KU : null,
          flareToken: this.flareToken,
          setLit: TU && this.isPlaying(this.setLitAt, pU),
          setLitToken: this.setLitToken
        }, this.yh(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.yh(null)
      }
      isPlaying(UU, RU) {
        return RU - UU < 1200
      }
    }
    const st = "skyblockGlowtideView";
    class yt {
      constructor(UU) {
        this.yh = UU, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = UU => {
          this.arrow = UU, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      qC(UU) {
        this.bloom = UU.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.yh(null))
      }
      afterRender(UU, RU) {
        const gU = this.bloom;
        if (null === gU || null === UU) return;
        const tU = gU.glowtideBloomX - UU[0],
          EU = gU.glowtideBloomZ - UU[2],
          PU = Math.hypot(tU, EU),
          TU = this.snapshot,
          qU = null !== TU && void 0 !== TU && TU.inRange ? 1 : 0,
          KU = PU <= 12.5 + qU && UU[1] - gU.glowtideBloomY <= 10 + qU;
        !KU || null !== TU && void 0 !== TU && TU.inRange || this.inRangeToken++;
        const cU = {
          colour: gU.glowtideBloomColour,
          inRange: KU,
          distance: Math.round(PU),
          inRangeToken: this.inRangeToken
        };
        (null === TU || cU.colour !== TU.colour || cU.inRange !== TU.inRange || !KU && cU.distance !== TU.distance) && (this.snapshot = cU, this.yh(cU));
        const GU = pU.c.computeShortestRotation(RU, (0, pU.Ib)([tU, 0, EU]));
        null === this.arrow || Math.abs(GU - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${GU}rad)`, this.arrowTurn = GU)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.yh(null)
      }
    }
    const kt = "skyblockGlowMeterView";
    class Ft {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.yh = UU, this.now = RU, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      qC(UU) {
        const RU = this.now(),
          {
            glowMeterFill: gU,
            glowMeterCapacity: tU
          } = UU,
          pU = gU >= tU,
          EU = this.snapshot;
        null !== EU && (pU && !EU.full && (this.fullToken++, this.fullAt = RU), EU.full && !pU ? (this.burstToken++, this.burstAt = RU) : gU > EU.fill && (this.gainToken++, this.gainAt = RU)), this.snapshot = {
          fill: gU,
          hG: tU,
          ratio: Math.min(1, Math.max(0, gU / tU)),
          full: pU,
          rares: UU.glowMeterRares,
          ready: pU && this.isPlaying(this.fullAt, RU),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, RU),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, RU),
          gainToken: this.gainToken
        }, this.yh(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.yh(null)
      }
      isPlaying(UU, RU) {
        return RU - UU < 2e3
      }
    }
    const it = "skyblockHushWaitView";
    class At {
      constructor(UU) {
        this.yh = UU, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      qC(UU) {
        let {
          hushWaitMs: RU,
          hushWaitTotalMs: gU,
          hushWaitLines: tU
        } = UU;
        if (this.clearTimers(), this.token++, 0 === tU.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (RU <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: tU[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const pU = Math.max(null !== gU && void 0 !== gU ? gU : RU, RU),
          EU = pU - RU,
          PU = UU => pU * UU / tU.length,
          TU = UU => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: pU,
              elapsedMs: EU,
              line: tU[UU],
              lineIndex: UU
            })
          };
        let qU = 0;
        for (; qU + 1 < tU.length && PU(qU + 1) <= EU;) qU++;
        TU(qU);
        for (let KU = qU + 1; KU < tU.length; KU++) this.later(PU(KU) - EU, (() => {
          TU(KU)
        }));
        this.later(RU, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(UU) {
        this.snapshot = UU, this.yh(UU)
      }
      later(UU, RU) {
        this.timers.push(setTimeout(RU, UU))
      }
      clearTimers() {
        for (const UU of this.timers) clearTimeout(UU);
        this.timers = []
      }
    }
    const zt = "skyblockTideChartsView",
      Mt = 36e5,
      Dt = 864e5;

    function Lt(UU, RU, gU) {
      const [tU, pU, EU, PU] = UU.tideChartArea, TU = Math.floor(RU), qU = Math.floor(gU);
      return TU >= tU && TU <= EU && qU >= pU && qU <= PU
    }

    function Nt(UU, RU, gU) {
      const [tU, pU, EU, PU] = UU.tideChartWater;
      return function(UU, RU, gU, tU, pU, EU) {
        const PU = 4 - FU(Math.floor(pU) - (UU - gU), gU);
        return 5 * FU(Math.floor(EU) - (RU - tU), tU) + PU
      }(tU, pU, EU, PU, RU, gU)
    }

    function lt(UU, RU, gU) {
      const tU = UU.tideCharts;
      for (let pU = 0; pU < tU.length; pU++)
        if (Lt(tU[pU], RU, gU)) return tU[pU];
      return null
    }

    function Ot(UU, RU, gU) {
      const tU = Math.max(0, RU - gU);
      return tU > Dt ? UU("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(tU / Dt))
      }) : tU > Mt ? UU("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(tU / Mt))
      }) : UU("skyblockGame:tideChartsTurnSoon")
    }
    class Up extends GU {
      constructor(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(UU, gU, tU), this.translate = RU, this.now = pU, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.Hj = UU => {
          this.picked = UU, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      qC(UU) {
        const RU = this.message;
        if (null !== RU)
          for (const tU of UU.tideCharts) {
            var gU;
            const UU = RU.tideCharts.find((UU => UU.tideChartIsland === tU.tideChartIsland)),
              pU = tU.tideChartLit & ~(null !== (gU = null === UU || void 0 === UU ? void 0 : UU.tideChartLit) && void 0 !== gU ? gU : 0);
            void 0 !== UU && 0 !== pU && (this.pulse = {
              island: tU.tideChartIsland,
              cells: pU,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = UU, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(UU, RU) {
        var gU;
        const tU = null === this.message || Number.isNaN(UU) ? null : lt(this.message, UU, RU),
          pU = null !== (gU = null === tU || void 0 === tU ? void 0 : tU.tideChartIsland) && void 0 !== gU ? gU : null,
          EU = null === tU ? -1 : function(UU, RU, gU) {
            const [tU, pU, EU, PU] = UU.tideChartWater;
            return function(UU, RU, gU, tU, pU, EU, PU) {
              return ((pU - UU) / (gU + PU)) ** 2 + ((EU - RU) / (tU + PU)) ** 2 <= 1
            }(tU, pU, EU, PU, RU, gU, 2) ? Nt(UU, RU, gU) : -1
          }(tU, UU, RU);
        return (pU !== this.hereIsland || EU !== this.hereCell) && (this.hereIsland = pU, this.hereCell = EU, null !== pU && (this.lastIsland = pU), !0)
      }
      afterRender(UU) {
        if (null === this.message) return;
        this.lastX = null === UU ? Number.NaN : UU[0], this.lastZ = null === UU ? Number.NaN : UU[2];
        const RU = this.locate(this.lastX, this.lastZ),
          gU = this.expirePulses();
        (RU || gU || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const UU = this.now();
        return !(!this.open || UU - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = UU, Ot(this.translate, this.message.tideChartTurnsInMs, UU - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(UU, RU) {
        const gU = null === this.message ? null : lt(this.message, UU, RU);
        if (null === gU) return;
        const tU = Nt(gU, UU, RU);
        0 === (gU.tideChartPreBlank & 1 << tU) && (this.cast = {
          island: gU.tideChartIsland,
          cell: tU,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const UU = this.now();
        let RU = !1;
        return 0 !== this.pulse.cells && UU - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, RU = !0), null !== this.cast && UU - this.cast.atMs >= 1500 && (this.cast = null, RU = !0), RU
      }
      setTranslator(UU) {
        this.translate = UU, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(UU, RU) {
        var gU;
        return null !== (gU = UU.tideCharts.find((UU => UU.tideChartIsland === RU))) && void 0 !== gU ? gU : null
      }
      describe(UU) {
        var RU, gU, tU;
        const pU = UU.tideChartIsland,
          EU = [];
        for (let uU = 0; uU < 25; uU++) {
          const RU = 1 << uU;
          0 !== (UU.tideChartLit & RU) ? EU.push("lit") : 0 !== (UU.tideChartClear & RU) ? EU.push("clear") : 0 !== (UU.tideChartPreBlank & RU) ? EU.push("shore") : EU.push("water")
        }
        const PU = function(UU) {
            let RU = 0;
            for (let gU = UU >>> 0; 0 !== gU; gU &= gU - 1) RU++;
            return RU
          }(UU.tideChartLit),
          TU = UU.tideChartInkCount,
          qU = this.translate(UU.tideChartIslandNameKey),
          KU = this.translate("skyblockGame:tideChartsLit", {
            lit: String(PU),
            ink: String(TU)
          }),
          cU = null === UU.tideChartPictureNameKey ? null : this.translate(UU.tideChartPictureNameKey),
          GU = this.hereIsland === pU && -1 !== this.hereCell ? this.hereCell : null,
          jU = [`${qU}: ${KU}.`];
        if (null !== cU && jU.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: cU
          })), null !== GU) {
          const UU = Math.floor(GU / 5) + 1,
            RU = GU % 5 + 1;
          jU.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(UU),
            column: String(RU)
          }))
        }
        return {
          island: pU,
          islandName: qU,
          cells: EU,
          hereCell: GU,
          lit: PU,
          ink: TU,
          litText: KU,
          pictureName: cU,
          gridLabel: jU.join(" "),
          pulseCells: this.pulse.island === pU ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (RU = this.cast) || void 0 === RU ? void 0 : RU.island) === pU ? this.cast.cell : null,
          castToken: null !== (gU = null === (tU = this.cast) || void 0 === tU ? void 0 : tU.token) && void 0 !== gU ? gU : 0
        }
      }
      buildSnapshot() {
        var UU, RU, gU;
        const tU = this.message;
        if (null === tU || 0 === tU.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const pU = this.findChart(tU, this.hereIsland),
          EU = null !== (UU = null !== (RU = null !== (gU = this.findChart(tU, this.open ? this.picked : null)) && void 0 !== gU ? gU : pU) && void 0 !== RU ? RU : this.findChart(tU, this.lastIsland)) && void 0 !== UU ? UU : tU.tideCharts[0],
          PU = null === pU ? null : this.describe(pU);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: PU,
          card: EU === pU ? PU : this.describe(EU),
          turnsText: Ot(this.translate, tU.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(tU.tideChartBookCount)
          }),
          tabs: tU.tideCharts.map((UU => ({
            island: UU.tideChartIsland,
            name: this.translate(UU.tideChartIslandNameKey),
            selected: UU.tideChartIsland === EU.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const Rp = "skyblockRegularsView",
      gp = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      tp = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function pp(UU, RU) {
      return "given" === UU ? RU.given : "owed" === UU ? RU.owed : RU.goal
    }
    class Ep extends GU {
      constructor(UU, RU, gU, tU) {
        super(UU, gU, tU), this.translate = RU, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = UU => UU, this.openIsland = UU => {
          this.selected = UU, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = UU => {
          this.selected = UU, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      qC(UU) {
        this.message = UU, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const UU = this.openedFromReachLog;
        return this.openedFromReachLog = !1, UU
      }
      setTranslator(UU, RU, gU) {
        this.translate = UU, void 0 !== gU && (this.itemName = gU), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(UU, RU, gU) {
        return {
          text: this.translate(pp(UU, RU), gU),
          given: "given" === UU
        }
      }
      describeRegular(UU, RU) {
        const gU = this.translate,
          tU = null !== UU.regularKg,
          pU = UU.regularMeetings,
          EU = tU ? 0 === pU ? gU("skyblockGame:regularsNotMet") : 1 === pU ? gU("skyblockGame:regularsMeetingsOne") : gU("skyblockGame:regularsMeetings", {
            count: pU
          }) : "";
        return {
          id: UU.regularId,
          name: gU(UU.regularNameKey),
          line: gU(UU.regularLineKey),
          itemName: UU.regularFishItem,
          fishName: this.itemName(UU.regularFishItem),
          tagged: tU,
          size: null === UU.regularKg ? gU("skyblockGame:regularsNotTagged") : gU("skyblockGame:regularsSize", {
            kg: UU.regularKg.toFixed(1)
          }),
          meetings: EU,
          chance: gU("skyblockGame:regularsChance", {
            count: UU.regularOneInCasts
          }),
          resting: UU.regularRestingToday,
          gifts: [{
            text: gU("skyblockGame:regularsGiftFlare"),
            given: pU >= 3
          }, this.describeGift(UU.regularTintGift, gp, {
            tint: gU(UU.regularTintNameKey)
          })],
          history: [...UU.regularHistory].reverse().map((UU => {
            const tU = UU.regularMeetingKg.toFixed(1),
              pU = RU - UU.regularMeetingDay;
            return pU <= 0 ? gU("skyblockGame:regularsToday", {
              kg: tU
            }) : gU("skyblockGame:regularsDaysAgo", {
              days: pU,
              kg: tU
            })
          }))
        }
      }
      describeIsland(UU, RU) {
        return {
          id: UU.regularsIslandId,
          name: this.translate(UU.regularsIslandNameKey),
          charm: this.describeGift(UU.regularsCharmGift, tp, {
            charm: this.translate(UU.regularsCharmNameKey)
          }),
          regulars: UU.regularsList.map((UU => this.describeRegular(UU, RU)))
        }
      }
      buildSnapshot() {
        var UU, RU, gU, tU;
        const pU = this.message;
        if (null === pU) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const EU = pU.regularsIslands.map((UU => this.describeIsland(UU, pU.regularsToday))),
          PU = null !== (UU = null !== (RU = null === (gU = EU.find((UU => UU.id === this.selected))) || void 0 === gU ? void 0 : gU.id) && void 0 !== RU ? RU : null === (tU = EU[0]) || void 0 === tU ? void 0 : tU.id) && void 0 !== UU ? UU : "";
        return {
          enabled: !0,
          open: this.open,
          selected: PU,
          islands: EU
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const Pp = "skyblockHiddenWatersView";
    class Tp {
      constructor(UU) {
        this.yh = UU, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      qC(UU) {
        this.snapshot = function(UU) {
          const [RU, gU] = UU.hiddenWatersMapSize, tU = (UU, tU) => ({
            left: 1 - UU / RU,
            top: tU / gU
          }), pU = new Map;
          for (const [PU, TU] of UU.hiddenWatersGlimpses) {
            var EU;
            const UU = null !== (EU = pU.get(PU)) && void 0 !== EU ? EU : [];
            UU.push(TU), pU.set(PU, UU)
          }
          return {
            found: UU.hiddenWatersFound,
            total: UU.hiddenWatersTotal,
            aspect: gU / RU,
            pins: UU.hiddenWatersPins.map((UU => {
              let [RU, gU] = UU;
              return tU(RU, gU)
            })),
            islands: UU.hiddenWatersIslands.map((UU => {
              let [pU, EU, PU, TU] = UU;
              const {
                left: qU,
                top: KU
              } = tU(PU + 1, EU);
              return {
                left: qU,
                top: KU,
                width: (PU + 1 - pU) / RU,
                height: (TU + 1 - EU) / gU
              }
            })),
            glimpses: pU
          }
        }(UU), this.yh(this.snapshot)
      }
    }
    const qp = "skyblockDialogueView";
    class Kp extends GU {
      constructor(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(UU, gU, tU), this.translate = RU, this.requestDialogue = pU, this.now = EU, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = UU => {
          this.selection = {
            kind: "quest",
            questId: UU
          }, this.request(), this.show()
        }, this.selectCharacter = UU => {
          this.selection = {
            kind: "character",
            npcId: UU
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      qC(UU) {
        this.received = !0, this.scripts = UU.questDialogueScripts, this.speakers = new Map(UU.questDialogueSpeakers.map((UU => [UU.dialogueSpeakerId, UU]))), this.emit()
      }
      setTranslator(UU) {
        this.translate = UU, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const UU = this.now();
        UU >= this.requestAvailableAt && (this.requestAvailableAt = UU + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var UU;
        const RU = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...RU,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const gU = this.selection;
        if ("quest" === gU.kind) {
          const UU = this.scripts.find((UU => UU.dialogueQuestId === gU.questId));
          return {
            ...RU,
            characters: [],
            questFocus: gU.questId,
            conversations: UU ? [this.conversation(UU)] : []
          }
        }
        const tU = [];
        for (let EU = this.scripts.length - 1; EU >= 0; EU--) {
          const UU = this.scripts[EU].dialogueLines;
          for (let RU = UU.length - 1; RU >= 0; RU--) tU.includes(UU[RU].dialogueSpeakerId) || tU.push(UU[RU].dialogueSpeakerId)
        }
        const pU = null !== gU.npcId && tU.includes(gU.npcId) ? gU.npcId : null !== (UU = tU[0]) && void 0 !== UU ? UU : null;
        return {
          ...RU,
          characters: tU.map((UU => {
            var RU, gU;
            return {
              id: UU,
              styling: null !== (RU = null === (gU = this.speakers.get(UU)) || void 0 === gU ? void 0 : gU.dialogueSpeakerStyling) && void 0 !== RU ? RU : UU,
              selected: UU === pU
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((UU => UU.dialogueLines.some((UU => UU.dialogueSpeakerId === pU)))).map((UU => this.conversation(UU))).reverse()
        }
      }
      conversation(UU) {
        let RU = null;
        return {
          questId: UU.dialogueQuestId,
          questName: this.translate(UU.dialogueQuestNameKey),
          completed: UU.dialogueQuestCompleted,
          lines: UU.dialogueLines.map(((UU, gU) => {
            var tU;
            const pU = UU.dialogueSpeakerId === RU || null === (tU = this.speakers.get(UU.dialogueSpeakerId)) || void 0 === tU ? void 0 : tU.dialogueSpeakerStyling;
            return RU = UU.dialogueSpeakerId, {
              key: gU,
              display: {
                line: {
                  translationKey: UU.dialogueLineKey,
                  params: this.params(UU.dialogueLineParams)
                },
                speakerName: pU,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(UU) {
        if (void 0 !== UU) return Object.fromEntries(Object.entries(UU).map((UU => {
          let [RU, gU] = UU;
          return [RU, "string" === typeof gU ? gU : this.translate(gU.translationKey)]
        })))
      }
    }
    var cp = gU(562),
      Gp = gU(1271),
      jp = gU(96);
    const Cp = "skyblockAutographsView";

    function hp(UU) {
      const RU = cp.h[UU];
      return {
        label: RU.chatTag.map((UU => UU.str)).join(""),
        icon: RU.icon,
        colour: RU.mainRGB
      }
    }
    class Qp extends GU {
      constructor(UU) {
        let RU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = RU, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      qC(UU) {
        this.signatures = UU.autographSignatures, UU.autographOpen ? this.show() : this.emit()
      }
      setTranslator(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = RU, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var UU;
        const RU = null !== (UU = this.signatures) && void 0 !== UU ? UU : [],
          gU = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          tU = [...RU].sort(((UU, RU) => Number(null !== RU.autographRank) - Number(null !== UU.autographRank) || RU.autographSignedAtMs - UU.autographSignedAtMs)).map((UU => ({
            key: `${UU.autographSignedAtMs}|${UU.autographSignerName}`,
            name: (0, Gp.c)(UU.autographSignerName, !jp.featureFlags.canSeeRealPlayerNames),
            rank: null === UU.autographRank ? null : hp(UU.autographRank),
            signedOn: gU.format(UU.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: tU,
          total: tU.length,
          rankTotal: tU.filter((UU => null !== UU.rank)).length
        }
      }
    }
    const ep = "skyblockHudView",
      Wp = () => {},
      fp = {
        getItem: () => null,
        setItem: Wp,
        removeItem: Wp
      };
    class xp {
      constructor(UU) {
        let {
          translate: RU,
          translateWithIcons: gU,
          setMenuOpen: tU = Wp,
          dismissMenu: pU = () => {
            tU(!1)
          },
          publishSkills: EU = Wp,
          publishQuests: PU = Wp,
          publishQuestNotification: TU = Wp,
          publishDungeons: qU = Wp,
          publishCollections: KU = Wp,
          publishMap: cU = Wp,
          publishHud: GU = Wp,
          publishPortalTransit: jU = Wp,
          publishDailyReward: CU = Wp,
          publishMailbox: hU = Wp,
          publishQuestGraph: QU = Wp,
          publishForge: eU = Wp,
          publishSmuggler: WU = Wp,
          publishKeepersChair: fU = Wp,
          publishReachLog: xU = Wp,
          publishLampLight: mU = Wp,
          publishMagmaward: IU = Wp,
          publishGlowtide: wU = Wp,
          publishGlowMeter: nU = Wp,
          publishHushWait: bU = Wp,
          publishPassage: oU = Wp,
          publishTideCharts: ZU = Wp,
          publishRegulars: aU = Wp,
          publishHiddenWaters: YU = Wp,
          publishDialogue: BU = Wp,
          publishAutographs: VU = Wp,
          isLoadingScreenUp: rU = () => !1,
          onDailyRewardCoinLanded: XU = Wp,
          onDailyRewardStarted: vU = Wp,
          onDailyRewardFinished: dU = Wp,
          onDailyRewardItemLanded: HU = Wp,
          onMailboxStarted: SU = Wp,
          journeyStorage: sU = fp,
          requestTracking: yU = Wp,
          requestTravel: kU = Wp,
          requestDungeonEnter: FU = Wp,
          requestQuestJump: iU = Wp,
          requestQuestArrive: AU = Wp,
          requestForge: zU = Wp,
          requestSmuggle: MU = Wp,
          requestKeepersChairAim: DU = Wp,
          requestReachLogOpen: LU = Wp,
          requestLampLight: NU = Wp,
          requestDialogue: lU = Wp
        } = UU;
        this.navigation = void 0, this.map = void 0, this.compass = new JU, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new nt.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = UU => UU, this.close = () => {
          for (const UU of this.panels) UU.close()
        }, this.setMenuOpen = tU, this.publishHud = GU, this.portalTransit = new Sg(jU, sU), this.magmaward = new St(IU), this.glowtide = new yt(wU), this.glowMeter = new Ft(nU), this.hushWait = new At(bU), this.dailyReward = new kg(CU, (() => rU() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (UU => {
          this.quests.setNotificationsHeld(UU)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), XU, vU, dU, HU);
        const OU = UU => {
          this.panels.some((UU => UU.isOpen())) || (UU ? pU() : this.setMenuOpen(!1))
        };
        this.skills = new Pg(EU, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), RU, void 0, void 0, OU), this.quests = new Gg(PU, yU, RU, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, OU, TU), this.dungeons = new Cg(qU, RU, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, OU, FU), this.collections = new vg(KU, RU, (() => {
          this.beforePanelOpen(this.collections)
        }), OU), this.map = new uU(cU, kU, RU, (() => {
          this.beforePanelOpen(this.map)
        }), OU), this.questGraph = new lg(QU, RU, (() => {
          this.beforePanelOpen(this.questGraph)
        }), OU, iU, AU, sU), this.forge = new Qt(eU, RU, (() => {
          this.beforePanelOpen(this.forge)
        }), OU, zU), this.smuggler = new ft(WU, RU, (() => {
          this.beforePanelOpen(this.smuggler)
        }), OU, MU), this.lampLight = new dt(mU, RU, NU, this.commandPacer), this.keepersChair = new ot(fU, RU, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (UU => {
          this.lampLight.onChairClosed(), OU(UU)
        }), DU, Date.now, this.commandPacer), this.reachLog = new Xt(xU, RU, (() => {
          this.beforePanelOpen(this.reachLog)
        }), OU, LU, this.commandPacer), this.passage = new wt(oU, RU, (() => {
          this.beforePanelOpen(this.passage)
        }), OU), this.tideCharts = new Up(ZU, RU, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), OU), this.regulars = new Ep(aU, RU, (() => {
          this.beforePanelOpen(this.regulars)
        }), (UU => {
          this.regulars.takeReturnToReachLog() && !UU && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), OU(UU)
        })), this.hiddenWaters = new Tp(YU), this.dialogue = new Kp(BU, RU, (() => {
          this.beforePanelOpen(this.dialogue)
        }), OU, lU), this.autographs = new Qp(VU, (() => {
          this.beforePanelOpen(this.autographs)
        }), OU), this.mailbox = new zg(hU, (() => rU() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), SU), this.quests.translateWithIcons = null !== gU && void 0 !== gU ? gU : null, this.skills.onLevelUp = UU => {
          this.quests.notify(UU)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new pg(this.map, this.quests, this.compass, RU)
      }
      getHudSnapshot() {
        const UU = this.hudSnapshot,
          RU = this.dailyReward.getHeldCoins();
        return null === UU || RU <= 0 || !("hudPurseCoins" in UU) ? UU : {
          ...UU,
          hudPurseCoins: Math.max(0, UU.hudPurseCoins - RU)
        }
      }
      receiveHud(UU) {
        this.hudSnapshot = UU, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(UU) {
        this.setMenuOpen(!0);
        const RU = UU === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = UU;
        for (const gU of this.panels) gU === UU || RU && gU === this.reachLog || gU.close();
        this.openingPanel = null
      }
      setTranslator(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : RU => this.resolveItemName(RU, UU);
        this.quests.translateWithIcons = null !== gU && void 0 !== gU ? gU : null, this.navigation.setTranslator(UU, RU), this.lampLight.setTranslator(UU, RU), this.mailbox.setItemName(tU);
        for (const pU of this.panels) pU.setTranslator(UU, RU, tU)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const UU of this.panels) UU.dispose()
      }
    }
    var mp = gU(1037),
      Ip = gU.n(mp),
      Jp = gU(21),
      wp = gU(36187),
      np = gU(3108),
      bp = gU(1790),
      op = gU(1777),
      Zp = gU(9012),
      ap = gU(1181),
      Yp = gU(1410),
      Bp = gU(1090);

    function Vp(UU) {
      let {
        controller: RU,
        minimap: gU,
        children: tU
      } = UU;
      const EU = (0, Yp.h)(ep, RU.getHudSnapshot()),
        [PU, TU] = (0, nU.useState)(RU.skills.getSnapshot().overallLevel);
      (0, Yp.e)(Eg, (UU => {
        TU(UU.overallLevel)
      }));
      const qU = (0, nU.useRef)(null);
      (0, Yp.e)(yg, (UU => {
        ! function(UU, RU) {
          if (null === UU || "function" !== typeof UU.animate) return;
          const gU = RU ? 1.35 : 1.15;
          UU.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${gU})`
          }, {
            transform: "scale(1)"
          }], {
            duration: RU ? 320 : 160,
            easing: "ease-out"
          }), UU.classList.toggle("Receiving", !RU), RU && (UU.classList.remove("Shine"), UU.offsetWidth, UU.classList.add("Shine"))
        }(qU.current, UU)
      }));
      const {
        t: KU
      } = (0, ap.B)(), {
        isTouchScreen: cU
      } = (0, Jp.l)(["isTouchScreen"]), [GU, jU] = (0, nU.useState)(null);
      return (0, np.g)(GU, ".SkyblockRightHud"), null !== EU || gU ? (0, Bp.jsx)(wp.e, {
        placement: "topRight",
        children: (0, Bp.jsxs)("div", {
          className: Ip()("SkyblockRightHud", {
            TouchScreen: cU
          }),
          children: [gU, null !== EU && (0, Bp.jsxs)("div", {
            ref: jU,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in EU ? (0, Bp.jsx)("div", {
              className: "SkyblockHudHelp",
              children: EU.hudHelpText
            }) : (0, Bp.jsxs)(Bp.Fragment, {
              children: [(0, Bp.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, Bp.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, Bp.jsx)("strong", {
                    style: {
                      color: pU.N.cyanUiText
                    },
                    children: KU(EU.hudZoneNameKey)
                  }), null !== PU && (0, Bp.jsx)("span", {
                    style: {
                      color: pU.N.goldUiText
                    },
                    children: KU("skyblockGame:level", {
                      level: (0, Zp.d)(PU)
                    })
                  })]
                }), (0, Bp.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: qU,
                  children: [(0, Bp.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, Bp.jsx)(bp.c, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, Zp.d)(EU.hudPurseCoins)]
                })]
              }), EU.hudClockText.length > 0 && (0, Bp.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, Bp.jsx)(op.e, {
                  text: EU.hudClockText
                })
              })]
            }), tU, "hudZoneNameKey" in EU && (0, Bp.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function rp(UU) {
      let {
        icon: RU
      } = UU;
      const gU = (0, nU.useCallback)((UU => {
        null === UU || void 0 === UU || UU.replaceChildren(AR(RU))
      }), [RU]);
      return (0, Bp.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: gU
      })
    }

    function Xp(UU) {
      let {
        controller: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)();
      return (0, Bp.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: RU.display.mountPlayer,
        title: gU("skyblockGame:mapYouAreHere"),
        children: (0, Bp.jsx)(rp, {
          icon: "player"
        })
      })
    }
    const vp = gU(38101),
      dp = Object.fromEntries(vp.keys().map((UU => [UU.replace(/^\.\/(.*)\.png$/, "$1"), vp(UU)])));

    function Hp(UU, RU) {
      var gU;
      return null !== (gU = dp[UU]) && void 0 !== gU ? gU : dp[RU]
    }

    function Sp(UU) {
      let {
        imageKey: RU,
        fallbackImageKey: gU,
        geometryKey: tU,
        alt: pU,
        className: EU
      } = UU;
      const [PU, TU] = (0, nU.useState)((() => function(UU, RU) {
        return [{
          id: 0,
          imageKey: UU,
          geometryKey: RU,
          phase: "shown"
        }]
      }(RU, tU))), qU = function(UU, RU, gU) {
        const tU = UU[UU.length - 1];
        if (tU.imageKey === RU && tU.geometryKey === gU) return UU;
        const pU = {
          id: tU.id + 1,
          imageKey: RU,
          geometryKey: gU,
          phase: "entering"
        };
        return tU.geometryKey === gU ? [{
          ...tU,
          phase: "leaving"
        }, pU] : [pU]
      }(PU, RU, tU);
      return qU !== PU && TU(qU), (0, Bp.jsx)(Bp.Fragment, {
        children: qU.map((UU => (0, Bp.jsx)("img", {
          className: Ip()("SkyblockMapTerrainImage", EU, {
            Entering: "entering" === UU.phase,
            Leaving: "leaving" === UU.phase
          }),
          src: Hp(UU.imageKey, gU),
          alt: "leaving" === UU.phase ? "" : pU,
          onAnimationEnd: () => {
            TU((RU => function(UU, RU) {
              return UU.flatMap((UU => UU.id !== RU ? [UU] : "leaving" === UU.phase ? [] : [{
                ...UU,
                phase: "shown"
              }]))
            }(RU, UU.id)))
          }
        }, UU.id)))
      })
    }
    var sp = gU(4195),
      yp = gU(1412);

    function kp(UU) {
      if ("Tab" !== UU.key) return;
      const RU = Array.from(UU.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        gU = RU.indexOf(document.activeElement);
      var tU;
      if (UU.shiftKey && gU <= 0) UU.preventDefault(), null === (tU = RU.at(-1)) || void 0 === tU || tU.focus();
      else if (!UU.shiftKey && (-1 === gU || gU === RU.length - 1)) {
        var pU;
        UU.preventDefault(), null === (pU = RU[0]) || void 0 === pU || pU.focus()
      }
    }

    function Fp() {
      const UU = (0, nU.useRef)(null);
      return (0, nU.useCallback)((RU => {
        var gU;
        RU ? (UU.current = document.activeElement, RU.focus()) : null === (gU = UU.current) || void 0 === gU || gU.focus()
      }), [])
    }

    function ip(UU) {
      let {
        percent: RU,
        label: gU,
        levelUpToken: tU,
        colour: pU
      } = UU;
      return (0, Bp.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": gU,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": RU,
        "aria-valuetext": gU,
        children: [(0, Bp.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${RU/100})`
          }
        }), null !== tU && void 0 !== tU && (0, Bp.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": pU
          }
        }, tU)]
      })
    }

    function Ap(UU) {
      let {
        mount: RU
      } = UU;
      return (0, Bp.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: RU,
        hidden: !0,
        children: (0, Bp.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, Bp.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, Bp.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function zp(UU, RU, gU, tU) {
      (0, nU.useLayoutEffect)((() => {
        const pU = UU.current;
        if (!gU || null === RU || void 0 === RU || !RU.local || !pU) return;
        const EU = Array.from(pU.querySelectorAll(".SkyblockMapNode")),
          PU = [...RU.points, ...RU.portals],
          TU = () => {
            const UU = pU.clientWidth,
              gU = pU.clientHeight,
              TU = EU.map(((pU, EU) => {
                const TU = PU[EU];
                return {
                  id: TU.id,
                  portal: EU >= RU.points.length,
                  x: TU.position[0] * UU / 100,
                  y: TU.position[1] * gU / 100,
                  width: pU.offsetWidth / tU,
                  height: pU.offsetHeight / tU
                }
              })),
              qU = new Map(PU.map(((UU, RU) => [UU.id, EU[RU]])));
            for (const RU of function(UU, RU, gU) {
                const tU = [],
                  pU = [...UU].sort(((UU, RU) => Number(RU.portal) - Number(UU.portal) || UU.id.localeCompare(RU.id)));
                for (const EU of pU) {
                  const UU = UU => Math.max(EU.width / 2, Math.min(RU - EU.width / 2, UU)),
                    pU = UU => Math.max(EU.height / 2, Math.min(gU - EU.height / 2, UU)),
                    PU = [UU(EU.x)],
                    TU = [pU(EU.y)];
                  for (const RU of tU) PU.push(UU(RU.x - (RU.width + EU.width) / 2 - 4), UU(RU.x + (RU.width + EU.width) / 2 + 4)), TU.push(pU(RU.y - (RU.height + EU.height) / 2 - 4), pU(RU.y + (RU.height + EU.height) / 2 + 4));
                  let qU = {
                      ...EU,
                      x: PU[0],
                      y: TU[0]
                    },
                    KU = 1 / 0,
                    cU = 1 / 0;
                  for (const RU of new Set(PU))
                    for (const UU of new Set(TU)) {
                      let gU = 0;
                      for (const PU of tU) gU += Math.max(0, (EU.width + PU.width) / 2 + 4 - Math.abs(RU - PU.x)) * Math.max(0, (EU.height + PU.height) / 2 + 4 - Math.abs(UU - PU.y));
                      const pU = (RU - EU.x) ** 2 + (UU - EU.y) ** 2;
                      (gU < KU || gU === KU && pU < cU) && (qU = {
                        ...EU,
                        x: RU,
                        y: UU
                      }, KU = gU, cU = pU)
                    }
                  tU.push(qU)
                }
                return tU
              }(TU, UU, gU)) {
              const UU = qU.get(RU.id);
              UU.style.left = `${RU.x}px`, UU.style.top = `${RU.y}px`
            }
          };
        TU();
        const qU = new ResizeObserver(TU);
        qU.observe(pU);
        for (const UU of EU) qU.observe(UU);
        return () => {
          qU.disconnect()
        }
      }), [UU, RU, gU, tU])
    }
    const Mp = {
        zoom: 1,
        x: 0,
        y: 0
      },
      Dp = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Lp(UU, RU, gU) {
      return Math.min(gU, Math.max(RU, UU))
    }

    function Np(UU, RU, gU) {
      const tU = Math.min(1, gU * RU / UU),
        pU = Math.min(1, UU / (gU * RU));
      return {
        x0: (1 - tU) / 2,
        y0: (1 - pU) / 2,
        x1: (1 + tU) / 2,
        y1: (1 + pU) / 2
      }
    }

    function lp(UU, RU, gU, tU) {
      const pU = RU * (tU - gU);
      if (pU <= 1) return .5 - RU * (gU + tU) / 2;
      const EU = .45 * Math.min(1, pU - 1);
      return Lp(UU, 1 - RU * tU - EU, EU - RU * gU)
    }

    function Op(UU, RU) {
      const gU = Lp(UU.zoom, 1, 12);
      return {
        zoom: gU,
        x: lp(UU.x, gU, RU.x0, RU.x1),
        y: lp(UU.y, gU, RU.y0, RU.y1)
      }
    }

    function UE(UU, RU, gU, tU) {
      let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Dp;
      const EU = Lp(UU.zoom * RU, 1, 12),
        PU = EU / UU.zoom;
      return Op({
        zoom: EU,
        x: gU - (gU - UU.x) * PU,
        y: tU - (tU - UU.y) * PU
      }, pU)
    }

    function RE(UU, RU, gU, tU) {
      const [pU, EU] = (0, nU.useState)(Mp);
      (0, nU.useEffect)((() => {
        EU(Mp)
      }), [gU]), (0, nU.useEffect)((() => {
        const gU = UU.current;
        if (!RU || !gU) return;
        const pU = () => Np(gU.clientWidth, gU.clientHeight, tU),
          PU = UU => {
            const RU = gU.getBoundingClientRect();
            return {
              x: (UU.clientX - RU.left) / RU.width,
              y: (UU.clientY - RU.top) / RU.height
            }
          },
          TU = new Map;
        let qU = {
            x: 0,
            y: 0
          },
          KU = !1,
          cU = 0;
        const GU = UU => {
            UU.preventDefault();
            const RU = UU.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * UU.deltaY : UU.deltaY,
              gU = PU(UU);
            EU((UU => UE(UU, Math.exp(.0015 * -RU), gU.x, gU.y, pU())))
          },
          jU = UU => {
            "mouse" === UU.pointerType && 0 !== UU.button || (TU.set(UU.pointerId, PU(UU)), 1 === TU.size && (qU = {
              x: UU.clientX,
              y: UU.clientY
            }, KU = !1), cU = 0)
          },
          uU = UU => {
            const RU = TU.get(UU.pointerId);
            if (!RU) return;
            const tU = PU(UU);
            if (TU.set(UU.pointerId, tU), 2 === TU.size) {
              const [UU, RU] = [...TU.values()], gU = Math.hypot(UU.x - RU.x, UU.y - RU.y);
              if (cU > 0) {
                const tU = gU / cU;
                EU((gU => UE(gU, tU, (UU.x + RU.x) / 2, (UU.y + RU.y) / 2, pU())))
              }
              return cU = gU, void(KU = !0)
            }!KU && Math.hypot(UU.clientX - qU.x, UU.clientY - qU.y) < 4 || (KU || (KU = !0, gU.setPointerCapture(UU.pointerId)), EU((UU => function(UU, RU, gU) {
              let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dp;
              return Op({
                zoom: UU.zoom,
                x: UU.x + RU,
                y: UU.y + gU
              }, tU)
            }(UU, tU.x - RU.x, tU.y - RU.y, pU()))))
          },
          CU = UU => {
            TU.delete(UU.pointerId), cU = 0
          },
          hU = UU => {
            KU && (UU.stopPropagation(), UU.preventDefault(), KU = !1)
          },
          QU = new ResizeObserver((() => {
            EU((UU => Op(UU, pU())))
          }));
        return QU.observe(gU), gU.addEventListener("wheel", GU, {
          passive: !1
        }), gU.addEventListener("pointerdown", jU), gU.addEventListener("pointermove", uU), gU.addEventListener("pointerup", CU), gU.addEventListener("pointercancel", CU), gU.addEventListener("click", hU, !0), () => {
          QU.disconnect(), gU.removeEventListener("wheel", GU), gU.removeEventListener("pointerdown", jU), gU.removeEventListener("pointermove", uU), gU.removeEventListener("pointerup", CU), gU.removeEventListener("pointercancel", CU), gU.removeEventListener("click", hU, !0)
        }
      }), [UU, RU, gU, tU]);
      return {
        view: pU,
        zoomBy: RU => {
          const gU = UU.current;
          gU && EU((UU => UE(UU, RU, .5, .5, Np(gU.clientWidth, gU.clientHeight, tU))))
        }
      }
    }

    function gE(UU) {
      var RU, gU, tU, pU;
      let {
        controller: EU,
        navigation: PU
      } = UU;
      const TU = (0, Yp.h)(jU, EU.getSnapshot()),
        {
          t: qU
        } = (0, ap.B)(),
        KU = Fp(),
        cU = TU.presentation,
        GU = (0, nU.useRef)(null),
        uU = (0, nU.useRef)(null),
        CU = Boolean(TU.open && (null === cU || void 0 === cU ? void 0 : cU.local) && cU.background),
        hU = RE(GU, CU, `${TU.open}|${TU.tab}|${null===cU||void 0===cU||null===(RU=cU.background)||void 0===RU?void 0:RU.geometryKey}`, null !== (gU = null === cU || void 0 === cU || null === (tU = cU.background) || void 0 === tU ? void 0 : tU.ratio) && void 0 !== gU ? gU : 2);
      if (zp(uU, cU, TU.open, hU.view.zoom), !cU || !TU.open) return null;
      const QU = cU.local ? cU.background : null,
        eU = {
          "--map-ratio": String(null !== (pU = null === QU || void 0 === QU ? void 0 : QU.ratio) && void 0 !== pU ? pU : 2),
          backgroundColor: null === QU || void 0 === QU ? void 0 : QU.colour
        },
        WU = {
          "--map-zoom": String(hU.view.zoom),
          transform: `translate(${100*hU.view.x}%, ${100*hU.view.y}%) scale(${hU.view.zoom})`
        };
      return (0, Bp.jsx)(sp.d, {
        show: TU.open,
        close: EU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: KU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bp.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockMapTitle",
                children: qU("skyblockGame:map")
              }), cU.minimap && (0, Bp.jsx)("p", {
                children: cU.minimap.caption
              })]
            }), (0, Bp.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((UU => (0, Bp.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": UU === TU.tab ? "true" : void 0,
                className: Ip()({
                  Selected: UU === TU.tab
                }),
                "aria-pressed": UU === TU.tab,
                onClick: () => {
                  EU.selectTab(UU)
                },
                children: qU("local" === UU ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, UU)))
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              onClick: EU.dismiss
            })]
          }), (0, Bp.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, Bp.jsxs)("div", {
              ref: GU,
              className: Ip()("SkyblockMapCanvas", {
                Local: cU.local,
                Overview: !cU.local,
                Zoomed: hU.view.zoom > 1
              }),
              style: eU,
              children: [(0, Bp.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: CU ? WU : void 0,
                children: (0, Bp.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: uU,
                  children: [QU && (0, Bp.jsx)(Sp, {
                    className: "SkyblockMapTerrain",
                    imageKey: QU.imageKey,
                    fallbackImageKey: QU.fallbackImageKey,
                    geometryKey: QU.geometryKey,
                    alt: QU.label
                  }), cU.local && (0, Bp.jsx)(Ap, {
                    mount: PU.display.mountMapSearchArea
                  }), !cU.local && (0, Bp.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: cU.connections.map((UU => (0, Bp.jsx)("line", {
                      className: Ip()({
                        Explored: UU.explored
                      }),
                      x1: UU.start[0],
                      y1: UU.start[1],
                      x2: UU.end[0],
                      y2: UU.end[1]
                    }, UU.id)))
                  }), cU.points.map((UU => {
                    const RU = !cU.local && UU.thumbnail ? dp[UU.thumbnail] : void 0;
                    return (0, Bp.jsxs)("div", {
                      className: Ip()("SkyblockMapNode", {
                        Current: UU.current
                      }),
                      style: {
                        left: `${UU.position[0]}%`,
                        top: `${UU.position[1]}%`
                      },
                      children: [(0, Bp.jsxs)(yp.e, {
                        className: Ip()("SkyblockMapPin", {
                          Unknown: !UU.visited,
                          Current: UU.current
                        }),
                        disabled: TU.pending,
                        onClick: () => {
                          EU.travel(UU.travelKind, UU.travelId)
                        },
                        children: [RU && (0, Bp.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: RU,
                          alt: ""
                        }), !RU && (0, Bp.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, Bp.jsx)(rp, {
                            icon: UU.icon
                          })
                        }), (0, Bp.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: UU.name
                        })]
                      }), UU.current && (0, Bp.jsx)("span", {
                        className: Ip()("SkyblockMapHereBadge", {
                          Above: UU.position[1] > 50
                        }),
                        children: qU("skyblockGame:mapYouAreHere")
                      })]
                    }, UU.id)
                  })), cU.portals.map((UU => (0, Bp.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${UU.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${UU.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, Bp.jsxs)(yp.e, {
                      className: "SkyblockMapPin",
                      disabled: TU.pending,
                      onClick: () => {
                        EU.travel(UU.travelKind, UU.travelId)
                      },
                      children: [(0, Bp.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: UU.colour
                        },
                        "aria-hidden": "true",
                        children: (0, Bp.jsx)(rp, {
                          icon: UU.icon
                        })
                      }), (0, Bp.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: UU.name
                      })]
                    })
                  }, UU.id))), cU.local && (0, Bp.jsx)(Xp, {
                    controller: PU
                  })]
                })
              }), CU && (0, Bp.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, Bp.jsx)("button", {
                  type: "button",
                  "aria-label": qU("skyblockGame:mapZoomIn"),
                  disabled: hU.view.zoom >= 12,
                  onClick: () => {
                    hU.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, Bp.jsx)("button", {
                  type: "button",
                  "aria-label": qU("skyblockGame:mapZoomOut"),
                  disabled: hU.view.zoom <= 1,
                  onClick: () => {
                    hU.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, Bp.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: TU.feedback
              })]
            })
          }), (0, Bp.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [cU.progress && (0, Bp.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, Bp.jsx)("span", {
                children: cU.progress
              }), (0, Bp.jsx)(ip, {
                percent: cU.percent,
                label: cU.progress
              })]
            }), cU.noLandmarks && (0, Bp.jsx)("span", {
              children: qU("skyblockGame:mapNoLandmarks")
            }), cU.canTravel && (0, Bp.jsx)("span", {
              className: "SkyblockMapHint",
              children: qU("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function tE(UU) {
      let {
        view: RU,
        controller: gU,
        navigation: tU
      } = UU;
      const {
        t: pU
      } = (0, ap.B)(), {
        isTouchScreen: EU
      } = (0, Jp.l)(["isTouchScreen"]);
      return (0, Bp.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": pU("skyblockGame:mapLocal"),
        children: [EU && (0, Bp.jsx)(yp.e, {
          className: "SkyblockMinimapOpen",
          onClick: gU.showLocal,
          children: pU("skyblockGame:map")
        }), (0, Bp.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: RU.colour
          },
          children: [(0, Bp.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: tU.display.mountTerrain,
            style: {
              width: RU.width,
              height: RU.height
            },
            children: [(0, Bp.jsx)(Sp, {
              imageKey: RU.imageKey,
              fallbackImageKey: RU.fallbackImageKey,
              geometryKey: RU.geometryKey,
              alt: RU.label
            }), (0, Bp.jsx)(Ap, {
              mount: tU.display.mountMinimapSearchArea
            }), RU.markers.map((UU => (0, Bp.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${UU.position[0]}%`,
                top: `${UU.position[1]}%`,
                color: UU.colour
              },
              title: UU.name,
              children: (0, Bp.jsx)(rp, {
                icon: UU.icon
              })
            }, UU.id)))]
          }), (0, Bp.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: pU("skyblockGame:mapYouAreHere"),
            children: (0, Bp.jsx)(rp, {
              icon: "player"
            })
          })]
        }), (0, Bp.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: RU.caption
        })]
      })
    }

    function pE(UU) {
      let {
        controller: RU
      } = UU;
      return (0, Bp.jsxs)("div", {
        className: "SkyblockCompass",
        ref: RU.display.mountCompass,
        children: [(0, Bp.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, Bp.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, Bp.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function EE(UU) {
      let {
        controller: RU,
        surface: gU
      } = UU;
      const {
        t: tU
      } = (0, ap.B)(), pU = (0, Yp.h)(Eg, RU.getSnapshot()), EU = Fp();
      return pU.enabled ? (0, Bp.jsxs)(Bp.Fragment, {
        children: ["hud" === gU && (0, Bp.jsx)(wp.e, {
          placement: "statBars",
          children: pU.hud && (0, Bp.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": pU.hud.colour
            },
            children: [(0, Bp.jsx)(ip, {
              percent: pU.hud.skill.percent,
              label: pU.hud.skill.xp,
              levelUpToken: pU.hud.levelUpToken,
              colour: pU.hud.colour
            }), (0, Bp.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, Bp.jsxs)("span", {
                children: [pU.hud.skill.label, " \xb7 ", pU.hud.skill.level]
              }), (0, Bp.jsx)("span", {
                children: pU.hud.gain
              })]
            })]
          })
        }), "hud" === gU && (0, Bp.jsx)(wp.e, {
          children: pU.hud && (0, Bp.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, Bp.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, Bp.jsx)("strong", {
                children: pU.hud.skill.label
              }), (0, Bp.jsx)("span", {
                children: pU.hud.gain
              })]
            }), (0, Bp.jsx)(ip, {
              percent: pU.hud.skill.percent,
              label: pU.hud.skill.xp,
              levelUpToken: pU.hud.levelUpToken,
              colour: pU.hud.colour
            }), (0, Bp.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, Bp.jsx)("span", {
                children: pU.hud.skill.level
              }), (0, Bp.jsx)("span", {
                children: pU.hud.skill.xp
              })]
            })]
          })
        }), "menu" === gU && (0, Bp.jsx)(sp.d, {
          show: pU.open,
          close: RU.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Bp.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: EU,
            onKeyDown: kp,
            children: [(0, Bp.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Bp.jsxs)("div", {
                children: [(0, Bp.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: tU("skyblockGame:skills")
                }), (0, Bp.jsx)("p", {
                  children: tU("skyblockGame:skillsIntro")
                })]
              }), (0, Bp.jsx)(yp.h, {
                padIgnore: !0,
                onClick: RU.dismiss
              })]
            }), (0, Bp.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, Bp.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: pU.skills.map((UU => (0, Bp.jsxs)(yp.e, {
                  className: Ip()("SkyblockSkillCard", {
                    Selected: UU.selected
                  }),
                  ariaPressed: UU.selected,
                  onClick: () => {
                    RU.select(UU.id)
                  },
                  children: [(0, Bp.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, Bp.jsx)(bp.c, {
                      itemName: UU.icon,
                      amount: 0
                    })
                  }), (0, Bp.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, Bp.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, Bp.jsx)("strong", {
                        children: UU.label
                      }), (0, Bp.jsx)("span", {
                        children: UU.level
                      })]
                    }), (0, Bp.jsx)(ip, {
                      percent: UU.percent,
                      label: `${UU.label}: ${UU.xp}`
                    }), (0, Bp.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: UU.xp
                    })]
                  })]
                }, UU.id)))
              }), pU.detail && (0, Bp.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, Bp.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, Bp.jsx)(bp.c, {
                    itemName: pU.detail.icon,
                    amount: 0
                  })
                }), (0, Bp.jsx)("h3", {
                  children: pU.detail.label
                }), (0, Bp.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: pU.detail.level
                }), (0, Bp.jsx)("p", {
                  children: pU.detail.description
                }), (0, Bp.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, Bp.jsx)("strong", {
                    children: tU("skyblockGame:currentBenefit")
                  }), (0, Bp.jsx)("span", {
                    children: pU.detail.benefit
                  })]
                }), (0, Bp.jsx)(ip, {
                  percent: pU.detail.percent,
                  label: pU.detail.xp
                }), (0, Bp.jsx)("p", {
                  children: pU.detail.xp
                }), (0, Bp.jsx)("h4", {
                  children: tU("skyblockGame:earnXp")
                }), (0, Bp.jsx)("ul", {
                  children: pU.detail.sources.map((UU => (0, Bp.jsx)("li", {
                    children: UU
                  }, UU)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var PE = gU(1344),
      TE = gU(4495),
      qE = gU(299);

    function KE(UU) {
      let {
        item: RU
      } = UU;
      return (0, Bp.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, Bp.jsx)(bp.c, {
          itemName: RU,
          amount: 0
        })
      })
    }

    function cE(UU) {
      let {
        name: RU,
        percent: gU,
        progress: tU
      } = UU;
      return (0, Bp.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, Bp.jsx)(ip, {
          percent: gU,
          label: `${(0,qE.tb)(RU)}: ${tU}`
        }), (0, Bp.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: tU
        })]
      })
    }

    function GE(UU) {
      let {
        subquests: RU,
        showDescriptions: gU = !1
      } = UU;
      return (0, Bp.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: RU.map((UU => {
          const RU = gU && "completed" === UU.status,
            tU = (0, Bp.jsxs)("li", {
              className: Ip()("SkyblockQuestStep", UU.status, {
                JustFinished: UU.justFinished,
                JustUnlocked: UU.justUnlocked
              }),
              tabIndex: RU ? 0 : void 0,
              children: [null !== UU.iconItem && (0, Bp.jsx)(KE, {
                item: UU.iconItem
              }), null === UU.iconItem && (0, Bp.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === UU.status ? "\u2713" : "skipped" === UU.status ? "\u2212" : "\u25cb"
              }), (0, Bp.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, Bp.jsx)("strong", {
                  children: (0, Bp.jsx)(TE.c, {
                    text: UU.name
                  })
                }), gU && !RU && (0, Bp.jsx)("span", {
                  children: (0, Bp.jsx)(TE.c, {
                    text: UU.description
                  })
                }), null !== UU.barPercent && (0, Bp.jsx)(cE, {
                  name: UU.name,
                  percent: UU.barPercent,
                  progress: UU.progress
                }), null === UU.barPercent && !RU && (0, Bp.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: UU.statusLabel
                })]
              })]
            }, UU.id);
          return RU ? (0, Bp.jsx)(PE.g, {
            delayShow: 200,
            tooltipInner: (0, Bp.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, Bp.jsx)("span", {
                children: (0, Bp.jsx)(TE.c, {
                  text: UU.description
                })
              }), (0, Bp.jsx)("strong", {
                children: UU.statusLabel
              })]
            }),
            children: tU
          }, UU.id) : tU
        }))
      })
    }

    function jE(UU) {
      let {
        quest: RU,
        select: gU
      } = UU;
      const {
        t: tU
      } = (0, ap.B)(), pU = RU.focusStep;
      return (0, Bp.jsxs)(yp.e, {
        className: Ip()("SkyblockQuestCard", {
          Selected: RU.selected,
          Tracked: RU.tracked
        }),
        onClick: () => {
          gU(RU.id)
        },
        children: [(0, Bp.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, Bp.jsx)("strong", {
            children: (0, Bp.jsx)(TE.c, {
              text: RU.name
            })
          }), RU.tracked && (0, Bp.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: tU("skyblockGame:currentQuest")
          })]
        }), pU && (0, Bp.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== pU.iconItem && (0, Bp.jsx)(KE, {
            item: pU.iconItem
          }), (0, Bp.jsx)(cE, {
            name: pU.name,
            percent: pU.barPercent,
            progress: pU.progress
          })]
        }), (0, Bp.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: RU.progress
        })]
      })
    }

    function uE(UU) {
      let {
        controller: RU,
        surface: gU
      } = UU;
      const tU = (0, Yp.h)(Kg, RU.getSnapshot()),
        {
          t: pU
        } = (0, ap.B)(),
        EU = Fp();
      return tU.enabled ? (0, Bp.jsxs)(Bp.Fragment, {
        children: ["hud" === gU && (0, Bp.jsx)(Bp.Fragment, {
          children: tU.tracked && (0, Bp.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: qg,
            children: (0, Bp.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [tU.trackedStepPulse > 0 && (0, Bp.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, tU.trackedStepPulse), (0, Bp.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: pU("skyblockGame:currentQuest")
              }), (0, Bp.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, Bp.jsx)("strong", {
                  children: (0, Bp.jsx)(TE.c, {
                    text: tU.tracked.name
                  })
                }), null !== tU.tracked.clock && (0, Bp.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: tU.tracked.clock
                })]
              }), (0, Bp.jsx)(GE, {
                subquests: tU.tracked.subquests
              })]
            })
          })
        }), "menu" === gU && (0, Bp.jsx)(sp.d, {
          show: tU.open,
          close: RU.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, Bp.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: EU,
            onKeyDown: kp,
            children: [(0, Bp.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, Bp.jsx)("div", {
                children: (0, Bp.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: pU("skyblockGame:quests")
                })
              }), (0, Bp.jsx)(yp.h, {
                padIgnore: !0,
                onClick: RU.dismiss
              })]
            }), (0, Bp.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, Bp.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, Bp.jsx)("h3", {
                  children: pU("skyblockGame:current")
                }), 0 === tU.active.length && (0, Bp.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: pU("skyblockGame:noActiveQuests")
                }), tU.active.map((UU => (0, Bp.jsx)(jE, {
                  quest: UU,
                  select: RU.select
                }, UU.id))), (0, Bp.jsx)("h3", {
                  children: (0, Bp.jsxs)("button", {
                    type: "button",
                    className: Ip()("SkyblockQuestSectionToggle", {
                      Expanded: tU.completedExpanded
                    }),
                    "aria-expanded": tU.completedExpanded,
                    onClick: RU.toggleCompleted,
                    children: [(0, Bp.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), pU("skyblockGame:completed"), (0, Bp.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: tU.completed.length
                    })]
                  })
                }), tU.completedExpanded && 0 === tU.completed.length && (0, Bp.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: pU("skyblockGame:noCompletedQuests")
                }), tU.completedExpanded && tU.completed.map((UU => (0, Bp.jsx)(jE, {
                  quest: UU,
                  select: RU.select
                }, UU.id)))]
              }), tU.detail && (0, Bp.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [tU.detail.completed && (0, Bp.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: pU("skyblockGame:completedQuest")
                }), (0, Bp.jsx)("h3", {
                  children: (0, Bp.jsx)(TE.c, {
                    text: tU.detail.name
                  })
                }), (0, Bp.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, Bp.jsx)(TE.c, {
                    text: tU.detail.description
                  })
                }), (0, Bp.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [tU.detail.progress, null !== tU.detail.clock && (0, Bp.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: tU.detail.clock
                  })]
                }), (0, Bp.jsx)(GE, {
                  subquests: tU.detail.subquests,
                  showDescriptions: !0
                }), tU.detail.tracked && (0, Bp.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: tU.detail.trackLabel
                }), !tU.detail.completed && !tU.detail.tracked && (0, Bp.jsx)(yp.j, {
                  onClick: RU.trackSelected,
                  disabled: !tU.detail.canTrack,
                  children: tU.detail.trackLabel
                }), tU.detail.canViewDialogue && (0, Bp.jsx)(yp.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: RU.viewDialogue,
                  children: pU("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var CE = gU(1049),
      hE = gU(2401);

    function QE(UU, RU, gU, tU, pU) {
      const EU = UU => "linear" === pU ? UU : {
          nE: pU,
          point: UU
        },
        PU = {};
      for (const [TU, qU] of tU)
        for (const [RU, gU] of Object.entries(UU(TU, qU, EU))) PU[RU] ??= {
          timeline: []
        }, PU[RU].timeline.push(gU);
      return {
        xE: RU,
        loop: gU,
        IE: PU
      }
    }
    const eE = .547,
      WE = .022,
      fE = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      xE = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function mE(UU, RU, gU) {
      const {
        drop: tU = 0,
        shift: pU = 0,
        torso: EU = 0,
        nod: PU = 0,
        tilt: TU = 0,
        legs: qU = [0, 0],
        arms: KU = 0,
        spread: cU = 0
      } = RU, GU = eE * Math.cos(EU) - WE * Math.sin(EU), jU = eE * Math.sin(EU) + WE * Math.cos(EU), uU = gU([0, -tU, pU]);
      return {
        LowerBody: {
          timeFraction: UU,
          position: uU,
          rotation: gU([0, 0, 0])
        },
        UpperBody: {
          timeFraction: UU,
          position: uU,
          rotation: gU([EU, 0, TU])
        },
        HeadMesh: {
          timeFraction: UU,
          position: gU([0, GU - eE - tU, jU - WE + pU]),
          rotation: gU([EU + PU, 0, TU])
        },
        LegLeftMesh: {
          timeFraction: UU,
          rotation: gU([qU[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: UU,
          rotation: gU([qU[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: UU,
          rotation: gU([KU, 0, cU])
        },
        ArmRightMesh: {
          timeFraction: UU,
          rotation: gU([KU, 0, -cU])
        }
      }
    }

    function IE(UU, RU, gU) {
      return QE(mE, UU, RU, gU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function JE(UU) {
      return "number" === typeof UU ? [UU, UU] : UU
    }

    function wE(UU, RU, gU) {
      const {
        rise: tU = 0,
        shift: pU = 0,
        torso: EU = 0,
        twist: PU = 0,
        tilt: TU = 0,
        nod: qU = 0,
        cock: KU = 0,
        arms: cU = 0,
        spread: GU = 0
      } = RU, [jU, uU] = JE(cU), [CU, hU] = JE(GU);
      return {
        TorsoNode: {
          timeFraction: UU,
          position: gU([0, tU, pU]),
          rotation: gU([EU, PU, TU])
        },
        HeadMesh: {
          timeFraction: UU,
          rotation: gU([qU, 0, KU])
        },
        ArmLeftMesh: {
          timeFraction: UU,
          rotation: gU([jU, 0, CU])
        },
        ArmRightMesh: {
          timeFraction: UU,
          rotation: gU([uU, 0, -hU])
        }
      }
    }
    const nE = [1.0625, -1, 0];

    function bE(UU) {
      return "number" === typeof UU ? [UU, UU] : UU
    }

    function oE(UU, RU, gU) {
      const {
        drop: tU = 0,
        shift: pU = 0,
        torso: EU = 0,
        tilt: PU = 0,
        nod: TU = 0,
        cock: qU = 0,
        legs: KU = [0, 0],
        arms: cU = 0,
        spread: GU = 0
      } = RU, [jU, uU] = bE(cU), [CU, hU] = bE(GU), QU = -EU, eU = -PU, [WU, fU, xU] = function(UU, RU) {
        const [gU, tU, pU] = [-nE[0], nE[1], -nE[2]], EU = gU * Math.cos(RU) - tU * Math.sin(RU), PU = gU * Math.sin(RU) + tU * Math.cos(RU);
        return [EU - gU, -(PU * Math.cos(UU) - pU * Math.sin(UU) - tU), PU * Math.sin(UU) + pU * Math.cos(UU) - pU]
      }(QU, eU), mU = gU([0, -tU, pU]);
      return {
        TorsoNode: {
          timeFraction: UU,
          position: gU([WU, fU - tU, xU + pU]),
          rotation: gU([QU, 0, eU])
        },
        HeadMesh: {
          timeFraction: UU,
          rotation: gU([-TU, 0, -qU])
        },
        ArmLeftMesh: {
          timeFraction: UU,
          rotation: gU([-jU, 0, -CU])
        },
        ArmRightMesh: {
          timeFraction: UU,
          rotation: gU([-uU, 0, hU])
        },
        LegLeftMesh: {
          timeFraction: UU,
          position: mU,
          rotation: gU([-KU[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: UU,
          position: mU,
          rotation: gU([-KU[1], 0, 0])
        }
      }
    }
    var ZE = gU(36664),
      aE = gU(38027),
      YE = gU(38186);

    function BE(UU, RU, gU) {
      var tU, pU;
      const EU = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return UU + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - UU) * gU
        },
        [PU, TU] = null !== (tU = UU.legs) && void 0 !== tU ? tU : [0, 0],
        [qU, KU] = null !== (pU = RU.legs) && void 0 !== pU ? pU : [0, 0];
      return {
        drop: EU(UU.drop, RU.drop),
        shift: EU(UU.shift, RU.shift),
        torso: EU(UU.torso, RU.torso),
        nod: EU(UU.nod, RU.nod),
        tilt: EU(UU.tilt, RU.tilt),
        legs: [EU(PU, qU), EU(TU, KU)],
        arms: EU(UU.arms, RU.arms),
        spread: EU(UU.spread, RU.spread)
      }
    }
    const VE = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      rE = IE(4400, !0, [
        [0, VE],
        [.16, {
          ...VE,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, VE],
        [.44, {
          ...VE,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, BE(VE, fE, .7)],
        [.66, BE(VE, fE, .78)],
        [.74, BE(VE, xE, .65)],
        [.86, {
          ...VE,
          drop: .14
        }],
        [1, VE]
      ], "catmull-rom-spline"),
      XE = {
        ...VE,
        drop: .14,
        torso: .3,
        spread: .4
      },
      vE = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      dE = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      HE = {
        caveGolem: rE,
        magmaGolem: IE(3600, !0, [
          [0, XE],
          [.12, {
            ...XE,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...XE,
            tilt: -.08
          }],
          [.4, {
            ...XE,
            tilt: .06,
            drop: .11
          }],
          [.52, BE(XE, fE, .9)],
          [.62, BE(XE, xE, .8)],
          [.7, BE(XE, xE, .45)],
          [.78, BE(XE, xE, .85)],
          [.9, {
            ...XE,
            drop: .17
          }],
          [1, XE]
        ], "catmull-rom-spline"),
        frostWraith: function(UU, RU, gU) {
          return QE(wE, UU, RU, gU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, vE],
          [.14, {
            ...vE,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...vE,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...vE,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...vE,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...vE,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...vE,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...vE,
            rise: .16,
            tilt: -.04
          }],
          [1, vE]
        ], "catmull-rom-spline"),
        tikiTerror: function(UU, RU, gU) {
          return QE(oE, UU, RU, gU, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, dE],
          [.16, {
            ...dE,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, dE],
          [.44, {
            ...dE,
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
            ...dE,
            drop: .1
          }],
          [1, dE]
        ], "catmull-rom-spline")
      },
      SE = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      sE = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      yE = Object.fromEntries(Object.entries(HE).map((UU => {
        let [RU, gU] = UU;
        return [RU, (0, YE.d)((0, ZE.f)(gU), RU)]
      })));

    function kE(UU) {
      const RU = function(UU) {
        var RU;
        const gU = (0, aE.d)(UU).poseRig;
        return null !== (RU = sE[UU]) && void 0 !== RU ? RU : void 0 === gU ? null : SE[gU]
      }(UU);
      return null === RU ? null : yE[RU]
    }

    function FE(UU) {
      return {
        "--difficulty-colour": UU
      }
    }
    const iE = (0, nU.lazy)((() => (0, hE.e)(gU.e(192).then((() => gU(40902))), (UU => UU.MobPreview))));

    function AE(UU) {
      var RU, gU, tU;
      let {
        picker: pU,
        controller: EU
      } = UU;
      const {
        t: PU
      } = (0, ap.B)(), TU = Fp(), {
        page: qU
      } = pU;
      return (0, Bp.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: TU,
        onKeyDown: UU => {
          "ArrowLeft" === UU.key ? (UU.preventDefault(), UU.stopPropagation(), EU.previous()) : "ArrowRight" === UU.key ? (UU.preventDefault(), UU.stopPropagation(), EU.next()) : kp(UU)
        },
        style: FE(qU.colour),
        children: [(0, Bp.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, Bp.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: pU.dungeonName
          }), (0, Bp.jsx)(yp.h, {
            padIgnore: !0,
            onClick: EU.dismiss
          })]
        }), (0, Bp.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, Bp.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, Bp.jsx)(yp.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !pU.canPrevious,
              onClick: EU.previous,
              children: (0, Bp.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Bp.jsx)(CE.c, {
                  name: "angle-up"
                })
              })
            }), (0, Bp.jsxs)("div", {
              className: Ip()("SkyblockBossPickerBoss", {
                Locked: !qU.unlocked
              }),
              children: [null !== qU.bossMobType && (0, Bp.jsx)(nU.Suspense, {
                fallback: (0, Bp.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, Bp.jsx)(iE, {
                  className: "SkyblockBossPickerModel",
                  mobType: qU.bossMobType,
                  variation: qU.bossMobVariation,
                  animation: null !== (RU = kE(qU.bossMobType)) && void 0 !== RU ? RU : void 0
                })
              }), null === qU.bossMobType && (0, Bp.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, Bp.jsx)(yp.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !pU.canNext,
              onClick: EU.next,
              children: (0, Bp.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, Bp.jsx)(CE.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, Bp.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [qU.beaten && (0, Bp.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), qU.label]
            }), (0, Bp.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (gU = qU.bossName) && void 0 !== gU ? gU : "???"
            }), (0, Bp.jsxs)("span", {
              className: Ip()("SkyblockBossPickerRecord", {
                Locked: null !== qU.lockedHint
              }),
              children: [null !== qU.lockedHintHighlight && (0, Bp.jsxs)(Bp.Fragment, {
                children: [qU.lockedHintHighlight.before, (0, Bp.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: FE(qU.lockedHintHighlight.colour),
                  children: [null !== qU.lockedHintHighlight.icon && (0, Bp.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, Bp.jsx)(bp.c, {
                      itemName: qU.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), qU.lockedHintHighlight.name]
                }), qU.lockedHintHighlight.after]
              }), null === qU.lockedHintHighlight && (null !== (tU = qU.lockedHint) && void 0 !== tU ? tU : qU.summary)]
            })]
          }), (0, Bp.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: pU.pages.map((UU => (0, Bp.jsx)("span", {
              className: Ip()("SkyblockBossPickerDot", {
                Current: UU.current,
                Locked: !UU.unlocked
              }),
              style: FE(UU.colour)
            }, UU.difficulty)))
          }), (0, Bp.jsx)(yp.p, {
            className: "SkyblockBossPickerFight",
            disabled: !qU.unlocked,
            onClick: EU.enter,
            children: PU("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function zE(UU) {
      let {
        dungeon: RU,
        select: gU
      } = UU;
      return (0, Bp.jsxs)(yp.e, {
        className: Ip()("SkyblockDungeonCard", {
          Selected: RU.selected
        }),
        onClick: () => {
          gU(RU.id)
        },
        children: [(0, Bp.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, Bp.jsx)("strong", {
            children: RU.name
          }), (0, Bp.jsx)("span", {
            children: RU.beatenSummary
          })]
        }), (0, Bp.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: RU.difficulties.map((UU => (0, Bp.jsxs)("span", {
            className: Ip()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: UU.beaten
            }),
            style: FE(UU.colour),
            title: UU.summary,
            children: [UU.beaten && (0, Bp.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), UU.label]
          }, UU.difficulty)))
        })]
      })
    }

    function ME(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(ug, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = Fp();
      return gU.enabled ? (0, Bp.jsxs)(sp.d, {
        show: gU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [gU.picker && (0, Bp.jsx)(AE, {
          picker: gU.picker,
          controller: RU
        }), !gU.picker && (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: pU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: tU("skyblockGame:dungeons")
              }), (0, Bp.jsx)("p", {
                children: tU("skyblockGame:dungeonsIntro")
              })]
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              onClick: RU.dismiss
            })]
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, Bp.jsx)("div", {
              className: "SkyblockDungeonList",
              children: gU.dungeons.map((UU => (0, Bp.jsx)(zE, {
                dungeon: UU,
                select: RU.select
              }, UU.id)))
            }), gU.detail && (0, Bp.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, Bp.jsx)("h3", {
                children: gU.detail.name
              }), (0, Bp.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: gU.detail.difficulties.map((UU => (0, Bp.jsxs)("li", {
                  className: Ip()("SkyblockDungeonRecord", {
                    Beaten: UU.beaten
                  }),
                  children: [(0, Bp.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: FE(UU.colour),
                    children: [UU.beaten && (0, Bp.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), UU.label]
                  }), (0, Bp.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: UU.summary
                  })]
                }, UU.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function DE(UU) {
      let {
        collection: RU,
        select: gU
      } = UU;
      return (0, Bp.jsxs)(yp.e, {
        className: Ip()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: RU.selected,
          Locked: RU.locked
        }),
        ariaPressed: RU.selected,
        onClick: () => {
          gU(RU.id)
        },
        children: [(0, Bp.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, Bp.jsx)(bp.c, {
            itemName: RU.icon,
            amount: 0
          })
        }), (0, Bp.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, Bp.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, Bp.jsx)("strong", {
              children: RU.name
            }), (0, Bp.jsx)("span", {
              children: RU.tier
            })]
          }), (0, Bp.jsx)(ip, {
            percent: RU.percent,
            label: `${RU.name}: ${RU.progress}`
          }), (0, Bp.jsx)("span", {
            className: "SkyblockSkillXp",
            children: RU.progress
          })]
        })]
      })
    }

    function LE(UU) {
      let {
        collection: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)();
      return (0, Bp.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, Bp.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, Bp.jsx)(bp.c, {
            itemName: RU.icon,
            amount: 0
          })
        }), (0, Bp.jsx)("h3", {
          children: RU.name
        }), (0, Bp.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: RU.tier
        }), (0, Bp.jsx)("p", {
          children: RU.locked ? gU("skyblockGame:collectionLocked") : RU.count
        }), null !== RU.nextReward && (0, Bp.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, Bp.jsx)("strong", {
            children: gU("skyblockGame:collectionNextReward")
          }), (0, Bp.jsx)("span", {
            children: RU.nextReward
          })]
        }), (0, Bp.jsx)(ip, {
          percent: RU.percent,
          label: RU.progress
        }), (0, Bp.jsx)("p", {
          children: RU.progress
        })]
      })
    }

    function NE(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(Xg, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = Fp();
      return gU.enabled ? (0, Bp.jsx)(sp.d, {
        show: gU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: pU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: tU("skyblockGame:collections")
              }), (0, Bp.jsxs)("p", {
                children: [tU("skyblockGame:collectionsIntro"), " ", gU.tiersUnlocked]
              })]
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              onClick: RU.dismiss
            })]
          }), (0, Bp.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: gU.categories.map((UU => (0, Bp.jsxs)(yp.e, {
              className: Ip()("SkyblockCollectionCategory", {
                Selected: UU.selected
              }),
              ariaPressed: UU.selected,
              padTabSelected: UU.selected,
              onClick: () => {
                RU.selectCategory(UU.id)
              },
              children: [(0, Bp.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, Bp.jsx)(bp.c, {
                  itemName: UU.icon,
                  amount: 0
                })
              }), (0, Bp.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, Bp.jsx)("strong", {
                  children: UU.label
                }), (0, Bp.jsx)("span", {
                  children: UU.tiers
                })]
              })]
            }, UU.id)))
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, Bp.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: gU.collections.map((UU => (0, Bp.jsx)(DE, {
                collection: UU,
                select: RU.select
              }, UU.id)))
            }), gU.detail && (0, Bp.jsx)(LE, {
              collection: gU.detail
            })]
          })]
        })
      }) : null
    }
    const lE = ["completed", "active", "available", "locked"],
      OE = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function UP(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(Mg, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = Fp();
      return gU.enabled ? (0, Bp.jsx)(sp.d, {
        show: gU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: pU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: tU("skyblockDevQuests:title")
              }), (0, Bp.jsx)("p", {
                children: tU("skyblockDevQuests:intro")
              })]
            }), (0, Bp.jsx)(yp.h, {
              onClick: RU.dismiss
            })]
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [lE.map((UU => (0, Bp.jsx)("span", {
              className: Ip()("SkyblockQuestGraphLegendState", UU),
              children: tU(`skyblockDevQuests:state_${UU}`)
            }, UU))), OE.map((UU => (0, Bp.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, Bp.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, Bp.jsx)("line", {
                  className: Ip()("SkyblockQuestGraphEdge", UU),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), tU(`skyblockDevQuests:edge_${UU}`)]
            }, UU)))]
          }), (0, Bp.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, Bp.jsxs)("div", {
              className: Ip()("SkyblockQuestGraphCanvas", {
                Planning: gU.planning
              }),
              style: {
                width: gU.width,
                height: gU.height
              },
              children: [(0, Bp.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: gU.width,
                height: gU.height,
                "aria-hidden": "true",
                children: [(0, Bp.jsx)("defs", {
                  children: (0, Bp.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, Bp.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), gU.edges.map((UU => (0, Bp.jsx)("path", {
                  className: Ip()("SkyblockQuestGraphEdge", UU.kind, {
                    InPlan: UU.inPlan
                  }),
                  d: UU.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, UU.key)))]
              }), gU.nodes.map((UU => (0, Bp.jsxs)("button", {
                type: "button",
                className: Ip()("SkyblockQuestGraphNode", UU.state, {
                  InPlan: UU.inPlan,
                  Hovered: UU.hovered
                }),
                style: {
                  left: UU.left,
                  top: UU.top,
                  width: 190,
                  height: 52
                },
                title: UU.id,
                onMouseEnter: () => {
                  RU.hover(UU.id)
                },
                onMouseLeave: () => {
                  RU.hover(null)
                },
                onFocus: () => {
                  RU.hover(UU.id)
                },
                onBlur: () => {
                  RU.hover(null)
                },
                onClick: () => {
                  RU.jump(UU.id)
                },
                children: [(0, Bp.jsx)("strong", {
                  children: UU.name
                }), (0, Bp.jsx)("span", {
                  children: UU.detail
                })]
              }, UU.id)))]
            })
          })]
        })
      }) : null
    }
    const RP = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      gP = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${Tt}ms`,
        "--forge-duration": "2150ms"
      },
      tP = Array.from({
        length: 18
      }, ((UU, RU) => ({
        "--ember-left": `${(4+92*(.618034*RU%1)).toFixed(1)}%`,
        "--ember-size": 3 + RU % 3 * 2 + "px",
        "--ember-drift": 14 * (RU % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*RU%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*RU%8).toFixed(2)}s`
      })));

    function pP(UU) {
      if (UU.style.removeProperty("--part-size"), null === UU.parentElement || "wrap" === getComputedStyle(UU.parentElement).flexWrap) return;
      const RU = [...UU.children],
        gU = getComputedStyle(UU),
        tU = parseFloat(gU.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        pU = (UU.clientHeight - parseFloat(gU.rowGap) * (RU.length - 1)) / RU.length,
        EU = RU.map((UU => {
          const RU = getComputedStyle(UU),
            gU = UU.querySelector("h3"),
            EU = UU.querySelector(".SkyblockForgeParts");
          if (null === gU || null === EU) return tU;
          const PU = pU - parseFloat(RU.paddingTop) - parseFloat(RU.paddingBottom) - gU.offsetHeight - parseFloat(getComputedStyle(gU).marginBottom),
            TU = parseFloat(getComputedStyle(EU).columnGap),
            qU = EU.children.length;
          let KU = 0;
          for (let tU = 1; tU <= qU; tU++) {
            const UU = Math.ceil(qU / tU);
            KU = Math.max(KU, Math.min((EU.clientWidth - TU * (tU - 1)) / tU, (PU - TU * (UU - 1)) / UU))
          }
          return KU
        }));
      UU.style.setProperty("--part-size", `${Math.floor(Math.max(tU,Math.min(...EU)))}px`)
    }

    function EP(UU) {
      var RU, gU, tU, EU, PU;
      let {
        controller: TU
      } = UU;
      const qU = (0, Yp.h)(Ct, TU.getSnapshot()),
        {
          t: KU
        } = (0, ap.B)(),
        cU = Fp(),
        GU = function() {
          const UU = (0, nU.useRef)(null),
            RU = (0, nU.useRef)(null);
          return (0, nU.useLayoutEffect)((() => {
            null !== UU.current && pP(UU.current)
          })), (0, nU.useCallback)((gU => {
            var tU;
            null === (tU = RU.current) || void 0 === tU || tU.disconnect(), RU.current = null, UU.current = gU, null !== gU && (RU.current = new ResizeObserver((() => {
              pP(gU)
            })), RU.current.observe(gU))
          }), [])
        }(),
        jU = function(UU) {
          const RU = (0, nU.useRef)(null);
          return (0, nU.useLayoutEffect)((() => {
            const UU = RU.current;
            if (null !== UU) {
              UU.style.removeProperty("font-size");
              for (let RU = 1.7; RU > 1.1 && UU.scrollWidth > UU.clientWidth; RU -= .1) UU.style.fontSize = RU - .1 + "rem"
            }
          }), [UU]), (0, nU.useCallback)((UU => {
            RU.current = UU
          }), [])
        }(null === (RU = qU.preview) || void 0 === RU ? void 0 : RU.name),
        uU = (0, nU.useRef)(null),
        CU = (0, nU.useRef)({}),
        hU = qU.forging,
        QU = null !== (gU = null === hU || void 0 === hU ? void 0 : hU.preview.tier) && void 0 !== gU ? gU : 0,
        eU = null !== (tU = null === hU || void 0 === hU ? void 0 : hU.preview.named) && void 0 !== tU && tU,
        WU = (0, nU.useMemo)((() => {
          return null === hU ? null : {
            flames: (UU = QU, RU = eU, Array.from({
              length: 26 + 6 * UU + (RU ? 20 : 0)
            }, ((UU, RU) => {
              const gU = RU < 6,
                tU = Math.random() * Math.PI * 2,
                pU = gU ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                EU = Math.cos(tU) * pU,
                PU = Math.sin(tU) * pU - 2 - 3 * Math.random(),
                TU = Math.random(),
                [qU, KU, cU] = gU ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : TU < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : TU < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [TU < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": qU,
                "--x0": `${(.15*EU).toFixed(2)}rem`,
                "--y0": `${(.15*PU).toFixed(2)}rem`,
                "--x": `${EU.toFixed(2)}rem`,
                "--y": `${PU.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${KU.toFixed(2)}rem`,
                "--duration": `${Math.round(cU)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: ct(QU, eU)
          };
          var UU, RU
        }), [null === hU || void 0 === hU ? void 0 : hU.id]);
      if (!qU.enabled) return null;
      const fU = qU.preview,
        xU = qU.arriving,
        mU = null !== xU && !xU.sameSword,
        IU = null !== fU && (0, Bp.jsx)(bp.c, {
          itemName: fU.baseSword,
          amount: 0,
          enchantmentTier: fU.enchantmentTier
        });
      return (0, Bp.jsx)(sp.d, {
        show: qU.open,
        close: TU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: cU,
          onKeyDown: kp,
          children: [(0, Bp.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: tP.map(((UU, RU) => (0, Bp.jsx)("span", {
              style: UU
            }, RU)))
          }), (0, Bp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: KU("skyblockGame:forgeTitle")
              }), (0, Bp.jsx)("p", {
                children: KU("skyblockGame:forgeIntro")
              })]
            }), (0, Bp.jsx)(yp.h, {
              onClick: TU.dismiss
            })]
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, Bp.jsx)("div", {
              ref: GU,
              className: Ip()("SkyblockForgeSlots", {
                Locked: null !== hU
              }),
              children: qU.slots.map((UU => (0, Bp.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, Bp.jsx)("h3", {
                  children: UU.label
                }), (0, Bp.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: UU.parts.map((RU => (0, Bp.jsx)("button", {
                    type: "button",
                    className: Ip()("SkyblockForgePart", {
                      Selected: RU.selected,
                      Missing: RU.placeholder
                    }),
                    disabled: RU.placeholder,
                    title: RU.placeholder ? KU("skyblockGame:forgePickParts") : RU.itemName,
                    "aria-pressed": RU.selected,
                    onClick: () => {
                      TU.select(UU.kind, RU.material)
                    },
                    children: (0, Bp.jsx)(bp.c, {
                      itemName: RU.itemName,
                      amount: RU.owned
                    })
                  }, RU.material)))
                })]
              }, UU.kind)))
            }), (0, Bp.jsxs)("div", {
              className: Ip()("SkyblockForgeAnvil", {
                Named: null === fU || void 0 === fU ? void 0 : fU.named
              }),
              style: {
                "--tier": null === fU ? "transparent" : pU.sb[fU.enchantmentTier]
              },
              children: [(0, Bp.jsxs)("div", {
                className: Ip()("SkyblockForgeAltar", {
                  Forging: null !== hU
                }),
                style: null === hU ? void 0 : gP,
                children: [(0, Bp.jsxs)("div", {
                  className: Ip()("SkyblockForgeMount", {
                    Arrive: null !== xU
                  }),
                  children: [null === fU && (0, Bp.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, Bp.jsx)(bp.c, {
                      itemName: qU.unformedSword,
                      amount: 0
                    })
                  }), null !== fU && (0, Bp.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== fU && null === hU && (0, Bp.jsx)("div", {
                    ref: uU,
                    className: "SkyblockForgeFloat",
                    children: (0, Bp.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: IU
                    })
                  }), null !== fU && (0, Bp.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Kt.map(((UU, RU) => (0, Bp.jsx)("span", {
                      className: Ip()({
                        Rune: "" !== UU.rune
                      }),
                      style: UU.style,
                      children: UU.rune
                    }, RU)))
                  }), null !== hU && null !== WU && (0, Bp.jsxs)(Bp.Fragment, {
                    children: [(0, Bp.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, Bp.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: WU.flames.map(((UU, RU) => (0, Bp.jsx)("span", {
                        style: UU
                      }, RU)))
                    }), (0, Bp.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: CU.current,
                      children: (0, Bp.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: IU
                      })
                    }), (0, Bp.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, Bp.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (QU >= 4 || eU) && (0, Bp.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, Bp.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: WU.sparks.map(((UU, RU) => (0, Bp.jsx)("span", {
                        style: UU
                      }, RU)))
                    }), (0, Bp.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, Bp.jsx)("p", {
                  className: Ip()("SkyblockForgeStatus", null === (EU = qU.status) || void 0 === EU ? void 0 : EU.tone),
                  children: null === (PU = qU.status) || void 0 === PU ? void 0 : PU.text
                })]
              }), null === fU && (0, Bp.jsx)("p", {
                className: Ip()("SkyblockForgeName Waiting", {
                  ArriveText: mU
                }),
                children: KU(qU.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== fU && (0, Bp.jsx)("h3", {
                ref: jU,
                className: Ip()("SkyblockForgeName", {
                  ArriveText: mU
                }),
                title: fU.name,
                children: fU.name
              }), (null === fU || void 0 === fU ? void 0 : fU.named) && (0, Bp.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: KU("skyblockGame:forgeSecret")
              }), (0, Bp.jsxs)(yp.p, {
                className: "SkyblockForgeButton",
                disabled: !qU.canForge,
                title: null === fU ? void 0 : KU("skyblockGame:forgeCoalOwned", {
                  owned: String(qU.coalOwned)
                }),
                onClick: () => {
                  CU.current = function(UU) {
                    const RU = null === UU ? "none" : getComputedStyle(UU).transform,
                      gU = new DOMMatrixReadOnly("none" === RU ? void 0 : RU);
                    return {
                      "--settle-y": `${gU.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(gU.b,gU.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(uU.current), ut(), TU.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [KU("skyblockGame:forgeButton"), null !== fU && (0, Bp.jsxs)("span", {
                  className: Ip()("SkyblockForgeCost", {
                    Short: fU.coalShort
                  }),
                  children: [(0, Bp.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, Bp.jsx)(bp.c, {
                      itemName: Og.e,
                      amount: 0
                    })
                  }), fU.coalCost]
                })]
              })]
            }), (0, Bp.jsxs)("div", {
              className: Ip()("SkyblockForgeDetails", {
                Named: null === fU || void 0 === fU ? void 0 : fU.named
              }),
              children: [(0, Bp.jsx)("p", {
                className: Ip()("SkyblockForgeLore", {
                  ArriveText: mU
                }),
                title: null === fU || void 0 === fU ? void 0 : fU.lore,
                children: null === fU || void 0 === fU ? void 0 : fU.lore
              }), (0, Bp.jsxs)("dl", {
                className: Ip()("SkyblockForgeStats", {
                  ArriveText: mU
                }),
                children: [null === fU && RP.map((UU => (0, Bp.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, Bp.jsx)("dt", {
                    children: KU(UU)
                  }), (0, Bp.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, UU))), null === fU || void 0 === fU ? void 0 : fU.stats.map((UU => (0, Bp.jsxs)("div", {
                  className: Ip()("SkyblockForgeStat", {
                    Better: UU.better
                  }),
                  children: [(0, Bp.jsx)("dt", {
                    children: UU.label
                  }), (0, Bp.jsx)("dd", {
                    children: UU.value
                  })]
                }, UU.label)))]
              }), (0, Bp.jsx)("ul", {
                className: Ip()("SkyblockForgeEffects", {
                  ArriveText: mU
                }),
                children: null === fU || void 0 === fU ? void 0 : fU.effects.map((UU => (0, Bp.jsx)("li", {
                  children: UU
                }, UU)))
              })]
            })]
          })]
        })
      })
    }
    const PP = "Doom Rivet",
      TP = "Doom Crest";

    function qP(UU) {
      let {
        itemName: RU,
        amount: gU,
        owned: tU
      } = UU;
      return (0, Bp.jsxs)("span", {
        className: Ip()("SkyblockSmugglerPrice", {
          Short: gU > tU
        }),
        children: [(0, Bp.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, Bp.jsx)(bp.c, {
            itemName: RU,
            amount: 0
          })
        }), (0, Bp.jsx)("span", {
          children: gU
        })]
      })
    }

    function KP(UU) {
      return UU.justBought ? "skyblockGame:smugglerJustBought" : UU.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function cP(UU) {
      let {
        deal: RU,
        view: gU,
        buy: tU
      } = UU;
      const {
        t: pU
      } = (0, ap.B)();
      return (0, Bp.jsxs)("div", {
        className: Ip()("SkyblockSmugglerPocket", {
          Bought: RU.justBought,
          Unaffordable: !RU.affordable,
          SoldOut: RU.soldOut && !RU.justBought
        }),
        children: [(0, Bp.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, Bp.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, Bp.jsx)(bp.c, {
            itemName: RU.itemName,
            amount: 0,
            enchantmentTier: RU.enchantmentTier
          }), RU.amount > 1 && (0, Bp.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: pU("skyblockGame:smugglerAmount", {
              amount: RU.amount
            })
          })]
        }), (0, Bp.jsx)("h3", {
          children: RU.displayName
        }), (0, Bp.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, Bp.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [RU.rivets > 0 && (0, Bp.jsx)(qP, {
              itemName: PP,
              amount: RU.rivets,
              owned: gU.rivetsOwned
            }), RU.crests > 0 && (0, Bp.jsx)(qP, {
              itemName: TP,
              amount: RU.crests,
              owned: gU.crestsOwned
            })]
          }), (0, Bp.jsx)(yp.e, {
            className: "SkyblockSmugglerBuy",
            disabled: RU.soldOut || !RU.affordable || gU.pending,
            onClick: () => {
              tU(RU.slot)
            },
            children: pU(KP(RU))
          })]
        })]
      }, RU.justBought ? gU.boughtCount : 0)
    }

    function GP(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(et, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = Fp();
      return gU.enabled ? (0, Bp.jsx)(sp.d, {
        show: gU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: pU,
          onKeyDown: kp,
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, Bp.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, Bp.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: tU("skyblockGame:smugglerTitle")
              }), (0, Bp.jsx)("p", {
                children: tU("skyblockGame:smugglerIntro")
              })]
            }), (0, Bp.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, Bp.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, Bp.jsx)(qP, {
                  itemName: PP,
                  amount: gU.rivetsOwned,
                  owned: gU.rivetsOwned
                }), (0, Bp.jsx)(qP, {
                  itemName: TP,
                  amount: gU.crestsOwned,
                  owned: gU.crestsOwned
                })]
              }), (0, Bp.jsx)(yp.h, {
                onClick: RU.dismiss
              })]
            })]
          }), (0, Bp.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: gU.deals.map((UU => (0, Bp.jsx)(cP, {
              deal: UU,
              view: gU,
              buy: RU.buy
            }, UU.slot)))
          }), (0, Bp.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, Bp.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: gU.rotatesText
            }), null !== gU.status && (0, Bp.jsx)("span", {
              className: Ip()("SkyblockSmugglerStatus", gU.status.tone),
              children: gU.status.text
            })]
          })]
        })
      }) : null
    }

    function jP(UU) {
      let {
        phase: RU,
        className: gU
      } = UU;
      return (0, Bp.jsx)("span", {
        className: Ip()("SkyblockMoon", `Moon-${RU}`, gU),
        "aria-hidden": "true"
      })
    }

    function uP(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(xt, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)();
      return gU.enabled ? (0, Bp.jsx)(wp.e, {
        placement: "statBars",
        children: (0, Bp.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Ip()("SkyblockPassageChip", gU.open && "Open"),
          "aria-label": tU("skyblockGame:passageChipLabel", {
            phase: gU.phaseName
          }),
          title: tU("skyblockGame:passageChipLabel", {
            phase: gU.phaseName
          }),
          onMouseDown: UU => {
            UU.preventDefault()
          },
          onClick: RU.toggle,
          children: (0, Bp.jsx)(jP, {
            phase: gU.phase
          }, gU.phase)
        })
      }) : null
    }

    function CP(UU) {
      let {
        fish: RU
      } = UU;
      return (0, Bp.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, Bp.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, Bp.jsx)(bp.c, {
            itemName: RU.itemName,
            amount: 0
          })
        }), (0, Bp.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: RU.displayName
          }), (0, Bp.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: RU.where
          })]
        })]
      })
    }

    function hP(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(xt, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = Fp();
      return gU.enabled ? (0, Bp.jsx)(sp.d, {
        show: gU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: pU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, Bp.jsx)(jP, {
              phase: gU.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: tU("skyblockGame:passageTitle")
              }), (0, Bp.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: gU.phaseName
              })]
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              onClick: RU.dismiss
            })]
          }), (0, Bp.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: tU("skyblockGame:passageIntro")
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, Bp.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, Bp.jsx)("h3", {
                children: tU("skyblockGame:passageVisiting")
              }), (0, Bp.jsx)("ul", {
                className: "SkyblockPassageList",
                children: gU.visitors.map((UU => (0, Bp.jsx)(CP, {
                  fish: UU
                }, UU.itemName)))
              })]
            }), (0, Bp.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== gU.resting && (0, Bp.jsxs)(Bp.Fragment, {
                children: [(0, Bp.jsx)("h3", {
                  children: tU("skyblockGame:passageResting")
                }), (0, Bp.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, Bp.jsx)(CP, {
                    fish: gU.resting
                  })
                })]
              }), (0, Bp.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, Bp.jsx)(jP, {
                  phase: gU.nextPhase
                }), (0, Bp.jsx)("span", {
                  children: gU.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function QP() {
      return (0, Bp.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((UU => (0, Bp.jsx)("i", {
          style: {
            "--sparkle-index": UU
          }
        }, UU)))
      })
    }

    function eP(UU) {
      var RU;
      let {
        charm: gU,
        view: tU,
        controller: pU
      } = UU;
      const {
        t: EU
      } = (0, ap.B)(), PU = tU.shop, TU = (null === (RU = tU.sparkle) || void 0 === RU ? void 0 : RU.id) === gU.id;
      return (0, Bp.jsxs)("li", {
        className: Ip()("SkyblockLampLightCharm", gU.owned && "Owned", gU.socketed && "Socketed"),
        children: [TU && (0, Bp.jsx)(QP, {}, tU.sparkle.count), (0, Bp.jsx)("h4", {
          children: gU.name
        }), (0, Bp.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: gU.effect
        }), (0, Bp.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: gU.lines.map((UU => (0, Bp.jsxs)("li", {
            className: Ip()("SkyblockLampLightOddsLine", "better" === UU.tone ? "Better" : "worse" === UU.tone ? "Worse" : "Same"),
            children: [(0, Bp.jsx)("span", {
              className: "Before",
              children: UU.before
            }), (0, Bp.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, Bp.jsx)("span", {
              className: "After",
              children: UU.after
            })]
          }, UU.label)))
        }), (0, Bp.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: gU.owned ? gU.socketed ? (0, Bp.jsxs)(Bp.Fragment, {
            children: [(0, Bp.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: EU("skyblockGame:lampLightSocketed")
            }), (0, Bp.jsx)(yp.M, {
              disabled: !tU.canCommand,
              ariaLabel: EU("skyblockGame:lampLightRemoveLabel", {
                charm: gU.name
              }),
              onClick: () => {
                pU.socket(null)
              },
              children: EU("skyblockGame:lampLightRemove")
            })]
          }) : (0, Bp.jsx)(yp.e, {
            disabled: !tU.canCommand || !PU.heldRod,
            ariaLabel: EU("skyblockGame:lampLightSocketLabel", {
              charm: gU.name
            }),
            onClick: () => {
              pU.socket(gU.id)
            },
            children: EU("skyblockGame:lampLightSocket")
          }) : (0, Bp.jsx)(yp.e, {
            disabled: !tU.canCommand || !gU.affordable,
            ariaLabel: EU("skyblockGame:lampLightBuyLabel", {
              item: gU.name,
              cost: gU.cost
            }),
            onClick: () => {
              pU.buy(gU.id)
            },
            children: gU.cost
          })
        })]
      })
    }

    function WP(UU) {
      var RU;
      let {
        tint: gU,
        view: tU,
        controller: pU
      } = UU;
      const {
        t: EU
      } = (0, ap.B)();
      return (0, Bp.jsxs)("li", {
        className: Ip()("SkyblockLampLightTint", gU.wearing && "Wearing"),
        style: {
          "--tint-colour": gU.colour
        },
        children: [(null === (RU = tU.sparkle) || void 0 === RU ? void 0 : RU.id) === gU.id && (0, Bp.jsx)(QP, {}, tU.sparkle.count), (0, Bp.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, Bp.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: gU.name
        }), gU.wearing ? (0, Bp.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: EU("skyblockGame:lampLightWearing")
        }) : (0, Bp.jsx)(yp.e, {
          disabled: !tU.canCommand || !gU.owned && !gU.affordable,
          ariaLabel: gU.owned ? EU("skyblockGame:lampLightWearLabel", {
            tint: gU.name
          }) : EU("skyblockGame:lampLightBuyLabel", {
            item: gU.name,
            cost: gU.cost
          }),
          onClick: () => {
            gU.owned ? pU.wearTint(gU.id) : pU.buy(gU.id)
          },
          children: gU.owned ? EU("skyblockGame:lampLightWear") : gU.cost
        })]
      })
    }

    function fP(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(vt, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = gU.shop;
      return (0, Bp.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, Bp.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: gU.balance
          }), (0, Bp.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": gU.releasing,
            className: Ip()("SkyblockLampLightSwitch", gU.releasing && "On"),
            disabled: gU.releasing ? "ready" !== gU.status : !gU.canCommand,
            onClick: () => {
              RU.setRelease(!gU.releasing)
            },
            children: [(0, Bp.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, Bp.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), tU("skyblockGame:lampLightRelease")]
          }), (0, Bp.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: tU("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== gU.notice && (0, Bp.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: gU.notice
        }), null !== pU && (0, Bp.jsxs)(Bp.Fragment, {
          children: [(0, Bp.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, Bp.jsx)("h3", {
              children: tU("skyblockGame:lampLightCharms")
            }), (0, Bp.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: pU.oddsFor
            }), (0, Bp.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((UU => (0, Bp.jsx)("button", {
                type: "button",
                "aria-pressed": gU.situation === UU,
                className: Ip()("SkyblockLampLightSituation", gU.situation === UU && "Selected"),
                onClick: () => {
                  RU.setSituation(UU)
                },
                children: tU("open" === UU ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, UU)))
            })]
          }), !pU.heldRod && (0, Bp.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: tU("skyblockGame:lampLightHoldRod")
          }), (0, Bp.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: pU.charms.map((UU => (0, Bp.jsx)(eP, {
              charm: UU,
              view: gU,
              controller: RU
            }, UU.id)))
          }), (0, Bp.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, Bp.jsx)("h3", {
              children: tU("skyblockGame:lampLightTints")
            })
          }), (0, Bp.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, Bp.jsxs)("li", {
              className: Ip()("SkyblockLampLightTint", "Islands", pU.wearingIslandColours && "Wearing"),
              children: [(0, Bp.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, Bp.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: tU("skyblockGame:lampLightIslandColours")
              }), pU.wearingIslandColours ? (0, Bp.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: tU("skyblockGame:lampLightWearing")
              }) : (0, Bp.jsx)(yp.e, {
                disabled: !gU.canCommand,
                ariaLabel: tU("skyblockGame:lampLightWearLabel", {
                  tint: tU("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  RU.wearTint(null)
                },
                children: tU("skyblockGame:lampLightWear")
              })]
            }), pU.tints.map((UU => (0, Bp.jsx)(WP, {
              tint: UU,
              view: gU,
              controller: RU
            }, UU.id)))]
          })]
        })]
      })
    }

    function xP(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(vt, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)();
      return gU.releasing ? (0, Bp.jsx)(wp.e, {
        children: (0, Bp.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            RU.setRelease(!1)
          },
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, Bp.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [tU("skyblockGame:lampLightReleasing"), " \xb7 ", gU.balance]
          }), (0, Bp.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: tU("skyblockGame:lampLightKeepCatches")
          }), null !== gU.gained && (0, Bp.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: gU.gained.text
          }, gU.gained.count)]
        })
      }) : null
    }

    function mP(UU) {
      let {
        island: RU,
        view: gU,
        aim: tU
      } = UU;
      const {
        t: pU
      } = (0, ap.B)(), EU = RU.featuredFish;
      return (0, Bp.jsxs)("li", {
        className: Ip()("SkyblockKeepersChairIsland", `Island-${RU.id}`, RU.favoured && "Aimed", !RU.relit && "Dark"),
        children: [(0, Bp.jsx)("h3", {
          children: RU.name
        }), RU.relit && null !== EU ? (0, Bp.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: pU("skyblockGame:keepersChairTideNotice")
          }), (0, Bp.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, Bp.jsx)(bp.c, {
              itemName: EU.itemName,
              amount: 0
            })
          }), (0, Bp.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: EU.displayName
          })]
        }) : (0, Bp.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, Bp.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: pU("skyblockGame:keepersChairDark")
          })
        }), RU.relit && (RU.favoured ? (0, Bp.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: pU("skyblockGame:keepersChairAimed")
        }) : (0, Bp.jsx)(yp.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !gU.canAim,
          ariaLabel: pU("skyblockGame:keepersChairAimLabel", {
            island: RU.name
          }),
          onClick: () => {
            tU(RU.id)
          },
          children: pU("skyblockGame:keepersChairAim")
        }))]
      }, RU.favoured ? gU.aimedCount : 0)
    }

    function IP(UU) {
      let {
        controller: RU,
        lampLight: gU
      } = UU;
      const tU = (0, Yp.h)(bt, RU.getSnapshot()),
        pU = (0, Yp.h)(vt, gU.getSnapshot()),
        [EU, PU] = (0, nU.useState)("lamp"),
        {
          t: TU
        } = (0, ap.B)(),
        qU = Fp();
      if (!tU.enabled) return null;
      const KU = "light" === EU && pU.enabled;
      return (0, Bp.jsx)(sp.d, {
        show: tU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: Ip()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", KU && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: qU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: TU("skyblockGame:keepersChairTitle")
              }), (0, Bp.jsx)("p", {
                children: TU(KU ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              ariaLabel: TU("skyblockGame:keepersChairClose"),
              onClick: RU.dismiss
            })]
          }), pU.enabled && (0, Bp.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((UU => (0, Bp.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === UU === KU,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === UU === KU ? "true" : void 0,
              className: Ip()("SkyblockKeepersChairTab", "light" === UU === KU && "Selected"),
              onClick: () => {
                PU(UU)
              },
              children: [TU("lamp" === UU ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === UU && (0, Bp.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: pU.balance
              })]
            }, UU)))
          }), KU ? (0, Bp.jsx)(fP, {
            controller: gU
          }) : (0, Bp.jsx)(JP, {
            view: tU,
            controller: RU
          })]
        })
      })
    }

    function JP(UU) {
      let {
        view: RU,
        controller: gU
      } = UU;
      const {
        t: tU
      } = (0, ap.B)();
      return (0, Bp.jsxs)(Bp.Fragment, {
        children: [(0, Bp.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: RU.islands.map((UU => (0, Bp.jsx)(mP, {
            island: UU,
            view: RU,
            aim: gU.aim
          }, UU.id)))
        }), null !== RU.almanac && (0, Bp.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: tU("skyblockGame:passageTitle")
          }), (0, Bp.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, Bp.jsx)(jP, {
              phase: RU.almanac.phase
            }), RU.almanac.phaseName]
          }), (0, Bp.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, Bp.jsx)(jP, {
              phase: RU.almanac.nextPhase
            }), RU.almanac.next]
          })]
        }), (0, Bp.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: tU("skyblockGame:keepersChairFavour")
          }), RU.aimed && (0, Bp.jsx)(yp.M, {
            className: "SkyblockKeepersChairRest",
            disabled: !RU.canAim,
            onClick: () => {
              gU.aim(null)
            },
            children: tU("skyblockGame:keepersChairRest")
          })]
        }), null !== RU.status && (0, Bp.jsx)("p", {
          className: Ip()("SkyblockKeepersChairStatus", "refused" === RU.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: RU.status.text
        })]
      })
    }

    function wP(UU) {
      let {
        controller: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)(), tU = (0, Yp.h)(Zt, RU.getSnapshot());
      if (!tU.enabled) return null;
      const pU = tU.freshCount > 0 ? gU("skyblockGame:reachLogOpenNews", {
        count: tU.freshCount
      }) : gU("skyblockGame:reachLogOpen");
      return (0, Bp.jsx)(wp.e, {
        placement: "statBars",
        children: (0, Bp.jsxs)("button", {
          type: "button",
          className: Ip()("SkyblockReachLogButton", tU.freshCount > 0 && "HasNews", tU.pending && "Pending"),
          "aria-label": pU,
          title: pU,
          onClick: RU.ask,
          children: [tU.news && (0, Bp.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${tU.newsToken}`), (0, Bp.jsx)("span", {
            className: Ip()("SkyblockReachLogIcon", tU.news && "Jump"),
            "aria-hidden": "true",
            children: (0, Bp.jsx)(bp.c, {
              itemName: Bt,
              amount: 0
            })
          }, `icon:${tU.newsToken}`), tU.freshCount > 0 && (0, Bp.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: tU.freshCount
          })]
        })
      })
    }

    function nP(UU) {
      let {
        gift: RU
      } = UU;
      return (0, Bp.jsx)("li", {
        className: Ip()("SkyblockRegularsGift", RU.given && "Given"),
        children: RU.text
      })
    }

    function bP(UU) {
      let {
        regular: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)();
      return (0, Bp.jsxs)("li", {
        className: Ip()("SkyblockRegularsCard", RU.tagged ? "Tagged" : "Untagged", RU.resting && "Resting"),
        children: [(0, Bp.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: RU.fishName,
            children: (0, Bp.jsx)(bp.c, {
              itemName: RU.itemName,
              amount: 0
            })
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, Bp.jsx)("h3", {
              children: RU.name
            }), (0, Bp.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: RU.fishName
            })]
          })]
        }), (0, Bp.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: RU.line
        }), (0, Bp.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: RU.size
          }), RU.tagged && (0, Bp.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: RU.resting ? gU("skyblockGame:regularsResting") : RU.meetings
          })]
        }), (0, Bp.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: RU.chance
        }), (0, Bp.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: RU.gifts.map((UU => (0, Bp.jsx)(nP, {
            gift: UU
          }, UU.text)))
        }), RU.history.length > 0 && (0, Bp.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: RU.history.map(((UU, RU) => (0, Bp.jsx)("li", {
            children: UU
          }, RU)))
        })]
      })
    }

    function oP(UU) {
      let {
        controller: RU,
        island: gU
      } = UU;
      const {
        t: tU
      } = (0, ap.B)(), pU = (0, Yp.h)(Rp, RU.getSnapshot()), EU = pU.islands.find((UU => UU.id === gU));
      if (!pU.enabled || void 0 === EU) return null;
      const PU = tU("skyblockGame:regularsOpen");
      return (0, Bp.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": PU,
        title: PU,
        onClick: () => {
          RU.openIsland(gU)
        },
        children: [(0, Bp.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: tU("skyblockGame:regularsTitle")
        }), EU.regulars.map((UU => (0, Bp.jsx)("span", {
          className: Ip()("SkyblockRegularsStripIcon", UU.tagged && "Tagged"),
          title: UU.name,
          children: (0, Bp.jsx)(bp.c, {
            itemName: UU.itemName,
            amount: 0
          })
        }, UU.id)))]
      })
    }

    function ZP(UU) {
      var RU;
      let {
        controller: gU
      } = UU;
      const tU = (0, Yp.h)(Rp, gU.getSnapshot()),
        {
          t: pU
        } = (0, ap.B)(),
        EU = Fp();
      if (!tU.enabled) return null;
      const PU = null !== (RU = tU.islands.find((UU => UU.id === tU.selected))) && void 0 !== RU ? RU : null;
      return (0, Bp.jsx)(sp.d, {
        show: tU.open,
        close: gU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: EU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: pU("skyblockGame:regularsTitle")
              }), (0, Bp.jsx)("p", {
                children: pU("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              onClick: gU.dismiss
            })]
          }), (0, Bp.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: tU.islands.map((UU => {
              const RU = UU.id === tU.selected;
              return (0, Bp.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": RU,
                "data-pad-tab": !0,
                "data-pad-selected": RU ? "true" : void 0,
                className: Ip()("SkyblockReachLogTab", `Island-${UU.id}`, RU && "Selected", UU.charm.given && "GoldPage"),
                onClick: () => {
                  gU.selectIsland(UU.id)
                },
                children: (0, Bp.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: UU.name
                })
              }, UU.id)
            }))
          }), (0, Bp.jsxs)("div", {
            className: Ip()("SkyblockRegularsPage", null !== PU && `Island-${PU.id}`),
            role: "tabpanel",
            children: [(0, Bp.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: pU("skyblockGame:regularsHow")
            }), null !== PU && (0, Bp.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: PU.regulars.map((UU => (0, Bp.jsx)(bP, {
                regular: UU
              }, UU.id)))
            })]
          }), null !== PU && (0, Bp.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, Bp.jsx)("span", {
              className: Ip()("SkyblockRegularsCharm", PU.charm.given && "Given"),
              children: PU.charm.text
            })
          })]
        })
      })
    }
    const aP = [{
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
      YP = Array.from({
        length: 6
      }, ((UU, RU) => ({
        "--x": `${(88*(.618034*RU%1)).toFixed(1)}%`,
        "--y": `${(10+37*RU%70).toFixed(1)}%`,
        "--size": 7 + RU % 3 * 3 + "rem",
        "--drift-x": 3 * (RU % 3 - 1) + "rem",
        "--drift-y": 2 * (RU % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + RU % 4 * 3 + "s",
        "--delay": 2.5 * -RU + "s"
      }))),
      BP = Array.from({
        length: 14
      }, ((UU, RU) => ({
        "--left": `${(3+94*((.618034*RU+.3)%1)).toFixed(1)}%`,
        "--size": 4 + RU % 4 * 2 + "px",
        "--sway": RU % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*RU%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*RU%12).toFixed(2)}s`
      }))),
      VP = (0, nU.memo)((function(UU) {
        let {
          island: RU
        } = UU;
        return (0, Bp.jsxs)("div", {
          className: Ip()("SkyblockReachLogDepths", null !== RU && `Island-${RU}`),
          "aria-hidden": "true",
          children: [aP.map(((UU, RU) => (0, Bp.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: UU
          }, `shaft${RU}`))), YP.map(((UU, RU) => (0, Bp.jsx)("span", {
            className: Ip()("SkyblockReachLogMote", RU % 2 === 1 && "Violet"),
            style: UU
          }, `mote${RU}`))), BP.map(((UU, RU) => (0, Bp.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: UU
          }, `bubble${RU}`)))]
        })
      })),
      rP = 100;

    function XP(UU) {
      let {
        view: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)();
      if (null === RU || 0 === RU.total) return null;
      const tU = rP * RU.aspect,
        pU = gU("skyblockGame:hiddenWatersCount", {
          found: RU.found,
          total: RU.total
        });
      return (0, Bp.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${gU("skyblockGame:hiddenWatersTitle")}: ${pU}`,
        children: [(0, Bp.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${tU}`,
          "aria-hidden": "true",
          children: [RU.islands.map(((UU, RU) => (0, Bp.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (UU.left + UU.width / 2) * rP,
            cy: (UU.top + UU.height / 2) * tU,
            rx: UU.width / 2 * rP,
            ry: UU.height / 2 * tU
          }, RU))), RU.pins.map(((UU, RU) => (0, Bp.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: UU.left * rP,
            cy: UU.top * tU,
            r: 13
          }, RU)))]
        }), (0, Bp.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: gU("skyblockGame:hiddenWatersTitle")
          }), (0, Bp.jsx)("span", {
            className: RU.found === RU.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: pU
          })]
        })]
      })
    }

    function vP(UU) {
      let {
        view: RU,
        island: gU
      } = UU;
      const {
        t: tU
      } = (0, ap.B)(), pU = null === RU || void 0 === RU ? void 0 : RU.glimpses.get(gU);
      return void 0 === pU || 0 === pU.length ? null : (0, Bp.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, Bp.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: tU("skyblockGame:hiddenWatersGlimpsed")
        }), (0, Bp.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: pU.map((UU => (0, Bp.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, Bp.jsx)(bp.c, {
              itemName: UU,
              amount: 0
            })
          }, UU)))
        })]
      })
    }
    const dP = ["Bronze", "Silver", "Gold"],
      HP = [{
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
      SP = HP.slice(0, 2);

    function sP(UU) {
      return UU ? HP : SP
    }

    function yP(UU) {
      let {
        fish: RU,
        letGoShown: gU
      } = UU;
      const {
        t: tU
      } = (0, ap.B)();
      return (0, Bp.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [dP.map(((UU, gU) => {
          const pU = gU < RU.marks;
          return (0, Bp.jsx)("span", {
            className: Ip()("SkyblockReachLogPip", UU, pU && "Earned", pU && RU.fresh && gU === RU.marks - 1 && "Newest"),
            title: tU(Yt[gU])
          }, UU)
        })), (0, Bp.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), sP(gU).map(((UU, gU) => (0, Bp.jsx)("span", {
          className: Ip()("SkyblockReachLogRibbon", UU.className, !0 === RU.ribbons[gU] && "Earned"),
          title: tU(UU.titleKey)
        }, UU.className)))]
      })
    }

    function kP(UU) {
      let {
        letGoShown: RU,
        haloShown: gU
      } = UU;
      const {
        t: tU
      } = (0, ap.B)();
      return (0, Bp.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, Bp.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: tU("skyblockGame:reachLogMarks"),
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), tU("skyblockGame:reachLogLegendMarks")]
        }), sP(RU).map((UU => (0, Bp.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: tU(UU.titleKey),
          children: [(0, Bp.jsx)("span", {
            className: Ip()("SkyblockReachLogRibbon", UU.className, "Earned")
          }), tU(UU.legendKey)]
        }, UU.className))), (0, Bp.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: tU("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), tU("skyblockGame:reachLogLegendGlimmer")]
        }), gU && (0, Bp.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: tU("skyblockGame:reachLogHaloTitle"),
          children: [(0, Bp.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), tU("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function FP(UU) {
      let {
        returner: RU
      } = UU;
      return (0, Bp.jsxs)("div", {
        className: Ip()("SkyblockReachLogReturner", RU.back && "Back"),
        children: [(0, Bp.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, Bp.jsx)(bp.c, {
            itemName: RU.itemName,
            amount: 0
          })
        }), (0, Bp.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: RU.line
        })]
      })
    }

    function iP(UU) {
      let {
        fish: RU,
        letGoShown: gU
      } = UU;
      const {
        t: tU
      } = (0, ap.B)();
      return (0, Bp.jsxs)("li", {
        className: Ip()("SkyblockReachLogCard", RU.caught ? "Caught" : "Unknown", RU.marks >= 3 && "GoldCard", RU.fresh && "Fresh", RU.visitor && "Visitor"),
        children: [RU.visitor && (0, Bp.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: tU("skyblockGame:reachLogVisitor")
        }), RU.fresh && Array.from({
          length: 4
        }, ((UU, RU) => (0, Bp.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, RU))), (0, Bp.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [RU.halo && (0, Bp.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: tU("skyblockGame:reachLogHaloTitle")
          }), (0, Bp.jsx)(bp.c, {
            itemName: RU.itemName,
            amount: 0
          }), RU.glimmer && (0, Bp.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: tU("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, Bp.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: RU.name
        }), (0, Bp.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: RU.chance
        }), (0, Bp.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: RU.best
        }), (0, Bp.jsx)(yP, {
          fish: RU,
          letGoShown: gU
        })]
      })
    }

    function AP(UU) {
      let {
        page: RU,
        letGoShown: gU,
        hiddenWaters: tU
      } = UU;
      const {
        t: pU
      } = (0, ap.B)();
      return RU.awake ? (0, Bp.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: RU.fish.map((UU => (0, Bp.jsx)(iP, {
          fish: UU,
          letGoShown: gU
        }, UU.itemName)))
      }) : (0, Bp.jsxs)(Bp.Fragment, {
        children: [(0, Bp.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: pU("skyblockGame:reachLogAsleep")
        }), (0, Bp.jsx)(vP, {
          view: tU,
          island: RU.id
        })]
      })
    }

    function zP(UU) {
      var RU, gU;
      let {
        controller: tU,
        regulars: pU,
        hiddenWaters: EU
      } = UU;
      const PU = (0, Yp.h)(Zt, tU.getSnapshot()),
        TU = function(UU) {
          return (0, Yp.h)(Pp, UU.getSnapshot())
        }(EU),
        qU = (0, Yp.h)(Rp, pU.getSnapshot()),
        {
          t: KU
        } = (0, ap.B)(),
        cU = Fp();
      if (!PU.enabled) return null;
      const GU = null !== (RU = PU.pages.find((UU => UU.id === PU.selected))) && void 0 !== RU ? RU : null;
      return (0, Bp.jsx)(sp.d, {
        show: PU.open,
        close: tU.dismiss,
        togglePointerLock: !1,
        className: Ip()("SkyblockSkillsOverlay", qU.open && "SkyblockReachLogUnderLedger"),
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: cU,
          onKeyDown: kp,
          children: [(0, Bp.jsx)(VP, {
            island: null !== (gU = null === GU || void 0 === GU ? void 0 : GU.id) && void 0 !== gU ? gU : null
          }), (0, Bp.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: KU("skyblockGame:reachLogTitle")
              }), (0, Bp.jsx)("p", {
                children: KU("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, Bp.jsx)(XP, {
              view: TU
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              onClick: tU.dismiss
            })]
          }), (0, Bp.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: PU.pages.map((UU => {
              const RU = UU.id === PU.selected,
                gU = UU.fish.some((UU => UU.fresh));
              return (0, Bp.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": RU,
                "data-pad-tab": !0,
                "data-pad-selected": RU ? "true" : void 0,
                className: Ip()("SkyblockReachLogTab", `Island-${UU.id}`, RU && "Selected", !UU.awake && "Asleep", UU.gold && "GoldPage", gU && "HasNews"),
                onClick: () => {
                  tU.selectPage(UU.id)
                },
                children: [(0, Bp.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: UU.name
                }), UU.awake && (0, Bp.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: KU("skyblockGame:reachLogCaughtCount", {
                    caught: UU.caught,
                    total: UU.total
                  })
                })]
              }, UU.id)
            }))
          }), (0, Bp.jsxs)("div", {
            className: Ip()("SkyblockReachLogPage", null !== GU && `Island-${GU.id}`),
            role: "tabpanel",
            children: [null !== GU && (0, Bp.jsx)(AP, {
              page: GU,
              letGoShown: PU.letGoShown,
              hiddenWaters: TU
            }), !0 === (null === GU || void 0 === GU ? void 0 : GU.awake) && null !== GU.returner && (0, Bp.jsx)(FP, {
              returner: GU.returner
            }), !0 === (null === GU || void 0 === GU ? void 0 : GU.awake) && (0, Bp.jsx)(oP, {
              controller: pU,
              island: GU.id
            })]
          }), (0, Bp.jsx)("footer", {
            className: Ip()("SkyblockReachLogFooter", null !== GU && `Island-${GU.id}`, !0 === (null === GU || void 0 === GU ? void 0 : GU.gold) && "GoldPage"),
            children: !0 === (null === GU || void 0 === GU ? void 0 : GU.gold) ? (0, Bp.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: KU("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, Bp.jsxs)(Bp.Fragment, {
              children: [(0, Bp.jsx)(kP, {
                letGoShown: PU.letGoShown,
                haloShown: !0 === (null === GU || void 0 === GU ? void 0 : GU.fish.some((UU => UU.halo)))
              }), (0, Bp.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: KU("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var MP = gU(4487);

    function DP(UU) {
      let {
        conversation: RU,
        completedLabel: gU
      } = UU;
      return (0, Bp.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, Bp.jsxs)("header", {
          children: [(0, Bp.jsx)("h3", {
            children: RU.questName
          }), RU.completed && (0, Bp.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: gU
          })]
        }), RU.lines.map((UU => (0, Bp.jsx)(MP.d, {
          display: UU.display
        }, UU.key)))]
      })
    }

    function LP(UU) {
      let {
        controller: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)(), tU = (0, Yp.h)(qp, RU.getSnapshot()), pU = Fp();
      if (!tU.enabled) return null;
      const EU = !tU.loading && 0 === tU.conversations.length;
      return (0, Bp.jsx)(sp.d, {
        show: tU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: pU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: gU("skyblockDialogue:title")
              }), (0, Bp.jsx)("p", {
                children: gU("skyblockDialogue:intro")
              })]
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              onClick: RU.dismiss
            })]
          }), (0, Bp.jsxs)("div", {
            className: Ip()("SkyblockDialogueBody", {
              SingleColumn: null !== tU.questFocus || 0 === tU.characters.length
            }),
            children: [null === tU.questFocus && tU.characters.length > 0 && (0, Bp.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: tU.characters.map((UU => (0, Bp.jsx)(yp.e, {
                className: Ip()("SkyblockDialogueCharacter", {
                  Selected: UU.selected
                }),
                onClick: () => {
                  RU.selectCharacter(UU.id)
                },
                children: (0, Bp.jsx)(op.e, {
                  text: UU.styling
                })
              }, UU.id)))
            }), (0, Bp.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== tU.questFocus && (0, Bp.jsx)(yp.e, {
                className: "SkyblockDialogueBack",
                onClick: RU.showCharacters,
                children: gU("skyblockDialogue:allCharacters")
              }), tU.loading && (0, Bp.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: gU("skyblockDialogue:loading")
              }), EU && (0, Bp.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: gU(null === tU.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), tU.conversations.map((UU => (0, Bp.jsx)(DP, {
                conversation: UU,
                completedLabel: tU.completedLabel
              }, UU.questId)))]
            })]
          })]
        })
      })
    }

    function NP(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(Cp, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = Fp();
      return gU.enabled ? (0, Bp.jsx)(sp.d, {
        show: gU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: pU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: tU("skyblockGame:autographBook")
              }), (0, Bp.jsx)("p", {
                children: tU("skyblockGame:autographBookIntro")
              })]
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              onClick: RU.dismiss
            })]
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, Bp.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, Bp.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, Bp.jsx)("strong", {
                  children: gU.total
                }), (0, Bp.jsx)("span", {
                  children: tU("skyblockGame:autographTotal")
                })]
              }), (0, Bp.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, Bp.jsx)("strong", {
                  children: gU.rankTotal
                }), (0, Bp.jsx)("span", {
                  children: tU("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === gU.entries.length ? (0, Bp.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: tU("skyblockGame:autographBookEmpty")
            }) : (0, Bp.jsx)("ul", {
              className: "SkyblockAutographList",
              children: gU.entries.map((UU => (0, Bp.jsxs)("li", {
                className: Ip()("SkyblockAutograph", {
                  Ranked: null !== UU.rank
                }),
                style: null === UU.rank ? void 0 : {
                  color: UU.rank.colour
                },
                children: [null !== UU.rank && (0, Bp.jsx)(CE.c, {
                  className: "SkyblockAutographRankIcon",
                  name: UU.rank.icon,
                  kit: (0, CE.g)(UU.rank.icon)
                }), (0, Bp.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, Bp.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: UU.name
                  }), (0, Bp.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== UU.rank && (0, Bp.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: UU.rank.label
                    }), (0, Bp.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: UU.signedOn
                    })]
                  })]
                })]
              }, UU.key)))
            })]
          })]
        })
      }) : null
    }
    const lP = (0, nU.memo)((function(UU) {
        let {
          controller: RU
        } = UU;
        return (0, Bp.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: RU.display.mountWaypoint,
          children: [(0, Bp.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, Bp.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, Bp.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, Bp.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, Bp.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, Bp.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      OP = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function UT(UU) {
      return "next" === UU.phase ? "\u2192" : OP[UU.kind]
    }
    const RT = (0, nU.memo)((function(UU) {
      let {
        controller: RU,
        display: gU
      } = UU;
      const tU = (0, Yp.h)(cg, RU.getNotificationSnapshot()),
        [pU, EU] = (0, nU.useState)(!1);
      return (0, Yp.e)("qteStateUpdated", (UU => {
        EU(UU.isActive)
      })), (0, Bp.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (pU ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [tU && (0, Bp.jsxs)("div", {
          className: `SkyblockQuestNotification ${tU.kind} ${tU.phase}`,
          style: {
            "--quest-notification-duration": `${tU.durationMs}ms`,
            ...tU.accent && {
              "--quest-notification-accent": tU.accent
            }
          },
          children: [(0, Bp.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (tU.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, Bp.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: UT(tU)
            }), tU.iconItem && (0, Bp.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, Bp.jsx)(bp.c, {
                itemName: tU.iconItem,
                amount: 0
              })
            })]
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, Bp.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: tU.title
            }), (0, Bp.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, Bp.jsx)(TE.c, {
                text: tU.name
              })
            }), tU.description && (0, Bp.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, Bp.jsx)(TE.c, {
                text: tU.description
              })
            }), tU.reward && (0, Bp.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, Bp.jsx)(TE.c, {
                text: tU.reward
              })
            })]
          })]
        }, tU.token), (null === tU || void 0 === tU ? void 0 : tU.waypointNameKey) && (0, Bp.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": tU.waypointNameKey,
          "data-notification-token": tU.token,
          ref: gU.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${tU.token}`)]
      })
    }));

    function gT(UU) {
      const RU = parseInt(UU.replace("#", ""), 16);
      return `${RU>>16&255}, ${RU>>8&255}, ${255&RU}`
    }
    const tT = (0, nU.memo)((function(UU) {
      let {
        controller: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)(), tU = (0, Yp.h)(dg, RU.getSnapshot());
      if (!tU) return null;
      const pU = "arrival" === tU.phase;
      return (0, Bp.jsxs)("div", {
        className: Ip()("SkyblockPortalTransit", {
          Departure: !pU,
          Arrival: pU
        }),
        style: {
          "--portal-rgb": gT(tU.colour),
          "--portal-duration": `${tU.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Bp.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, Bp.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            RU.finishArrival(tU.token)
          }
        }), (0, Bp.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, Bp.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !pU && (0, Bp.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: gU("skyblockGame:portalTransitHeading")
          }), (0, Bp.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: gU(tU.zoneNameKey)
          })]
        })]
      }, tU.token)
    }));

    function pT() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function ET() {
      const UU = document.querySelector(".SkyblockHudCoins"),
        RU = null === UU || void 0 === UU ? void 0 : UU.getBoundingClientRect();
      return RU && RU.width > 0 ? {
        x: RU.left + Math.min(RU.width, 24) / 2,
        y: RU.top + RU.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function PT(UU) {
      return {
        x: UU.left + UU.width / 2,
        y: UU.top + UU.height / 2
      }
    }

    function TT() {
      var UU;
      const RU = null === (UU = document.querySelector(".HotBar")) || void 0 === UU ? void 0 : UU.getBoundingClientRect();
      return RU && RU.width > 0 ? PT(RU) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function qT(UU) {
      let {
        items: RU,
        origins: gU,
        target: tU
      } = UU;
      return (0, Bp.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: RU.map(((UU, RU) => {
          const pU = gU[RU];
          return (0, Bp.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${pU.x}px`,
              top: `${pU.y}px`,
              "--item-dx": tU.x - pU.x + "px",
              "--item-dy": tU.y - pU.y + "px",
              "--item-delay": 2e3 + 160 * RU + "ms",
              "--item-flight": "700ms"
            },
            children: (0, Bp.jsx)(bp.c, {
              itemName: UU.dailyRewardItemName,
              amount: 0
            })
          }, UU.dailyRewardItemName)
        }))
      })
    }

    function KT(UU, RU) {
      const gU = -Math.PI / 2 + 1.25 * (UU / (RU - 1) * 2 - 1),
        tU = 70 + UU % 3 * 22;
      return {
        x: Math.cos(gU) * tU,
        y: Math.sin(gU) * tU * .7
      }
    }

    function cT(UU) {
      let {
        origin: RU,
        target: gU,
        count: tU
      } = UU;
      const pU = [];
      for (let EU = 0; EU < tU; EU++) {
        const UU = KT(EU, tU);
        pU.push((0, Bp.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${RU.x}px`,
            top: `${RU.y}px`,
            "--coin-bx": `${UU.x}px`,
            "--coin-by": `${UU.y}px`,
            "--coin-dx": gU.x - RU.x + "px",
            "--coin-dy": gU.y - RU.y + "px",
            "--coin-delay": `${Fg(EU,tU)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, Bp.jsx)(bp.c, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, EU))
      }
      return (0, Bp.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: pU
      })
    }

    function GT(UU) {
      let {
        day: RU
      } = UU;
      const gU = bU[RU - 1];
      return (0, Bp.jsxs)(Bp.Fragment, {
        children: [(0, Bp.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Bp.jsx)(bp.c, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, Zp.d)(gU.dailyRewardCoins)]
        }), gU.dailyRewardItems.map((UU => (0, Bp.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, Bp.jsx)(bp.c, {
            itemName: UU.dailyRewardItemName,
            amount: 0
          }), "\xd7", UU.dailyRewardItemAmount]
        }, UU.dailyRewardItemName)))]
      })
    }

    function jT(UU) {
      let {
        day: RU
      } = UU;
      const gU = ZU(RU);
      return (0, Bp.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: bU.map(((UU, tU) => {
          const pU = tU + 1;
          return (0, Bp.jsxs)("li", {
            className: Ip()("SkyblockDailyRewardTile", {
              Claimed: pU < RU && pU !== gU,
              Today: pU === RU,
              Tomorrow: pU === gU,
              Jackpot: pU === oU
            }),
            children: [(0, Bp.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: pU
            }), (0, Bp.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, Bp.jsx)(bp.c, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, Zp.d)(UU.dailyRewardCoins)]
            }), UU.dailyRewardItems.map((UU => (0, Bp.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, Bp.jsx)(bp.c, {
                itemName: UU.dailyRewardItemName,
                amount: 0
              }), "\xd7", UU.dailyRewardItemAmount]
            }, UU.dailyRewardItemName)))]
          }, pU)
        }))
      })
    }

    function uT(UU) {
      let {
        view: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)(), tU = (0, nU.useRef)(null), pU = (0, nU.useRef)(null), [EU, PU] = (0, nU.useState)(null);
      (0, nU.useLayoutEffect)((() => {
        var UU;
        const RU = null === (UU = tU.current) || void 0 === UU ? void 0 : UU.getBoundingClientRect();
        if (RU) {
          var gU, EU;
          const UU = Array.from(null !== (gU = null === (EU = pU.current) || void 0 === EU ? void 0 : EU.children) && void 0 !== gU ? gU : [], (UU => PT(UU.getBoundingClientRect())));
          PU({
            origin: PT(RU),
            target: ET(),
            itemOrigins: UU,
            itemTarget: TT()
          })
        }
      }), []);
      const TU = ZU(RU.day),
        qU = function(UU, RU) {
          const [gU, tU] = (0, nU.useState)((() => pT() ? UU : 0));
          return (0, nU.useEffect)((() => {
            if (pT()) return;
            const gU = performance.now();
            let pU = 0;
            const EU = PU => {
              const TU = Math.min(Math.max((PU - gU) / RU, 0), 1);
              tU(Math.round(UU * (1 - (1 - TU) ** 3))), TU < 1 && (pU = requestAnimationFrame(EU))
            };
            return pU = requestAnimationFrame(EU), () => {
              cancelAnimationFrame(pU)
            }
          }), [UU, RU]), gU
        }(RU.coins, 450);
      return (0, Bp.jsxs)("div", {
        className: Ip()("SkyblockDailyReward", {
          Jackpot: RU.day === oU
        }),
        style: {
          "--daily-duration": `${RU.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, Bp.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, Bp.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, Bp.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, Bp.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: gU("skyblockGame:dailyRewardTitle")
            }), (0, Bp.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: gU("skyblockGame:dailyRewardDay", {
                day: String(RU.day)
              })
            })]
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: tU,
            children: [(0, Bp.jsx)(bp.c, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, Bp.jsxs)("span", {
              children: ["+", (0, Zp.d)(qU)]
            })]
          }), RU.items.length > 0 && (0, Bp.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: pU,
            children: RU.items.map((UU => (0, Bp.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, Bp.jsx)(bp.c, {
                itemName: UU.dailyRewardItemName,
                amount: 0
              }), "\xd7", UU.dailyRewardItemAmount]
            }, UU.dailyRewardItemName)))
          }), (0, Bp.jsx)(jT, {
            day: RU.day
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [gU("skyblockGame:dailyRewardComeBack"), (0, Bp.jsx)(GT, {
              day: TU
            })]
          })]
        }), null !== EU && (0, Bp.jsx)(cT, {
          origin: EU.origin,
          target: EU.target,
          count: RU.flyingCoins
        }), null !== EU && EU.itemOrigins.length === RU.items.length && (0, Bp.jsx)(qT, {
          items: RU.items,
          origins: EU.itemOrigins,
          target: EU.itemTarget
        })]
      })
    }
    const CT = (0, nU.memo)((function(UU) {
        let {
          controller: RU
        } = UU;
        const gU = (0, Yp.h)(sg, RU.getSnapshot());
        return gU ? (0, Bp.jsx)(uT, {
          view: gU
        }, gU.token) : null
      })),
      hT = "Gold Coin";

    function QT(UU) {
      return 650 + 220 * UU
    }

    function eT(UU) {
      return {
        "--letter-delay": `${QT(UU)}ms`,
        "--letter-land": `${QT(UU)+300}ms`
      }
    }

    function WT(UU) {
      let {
        letterCount: RU
      } = UU;
      return (0, Bp.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, Bp.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Bp.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, Bp.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: RU
        }, ((UU, RU) => (0, Bp.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: eT(RU),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, RU)))]
      })
    }

    function fT(UU) {
      var RU, gU, tU;
      let {
        letter: pU,
        index: EU
      } = UU;
      const {
        t: PU
      } = (0, ap.B)(), TU = null !== (RU = null === (gU = pU.items[0]) || void 0 === gU ? void 0 : gU.itemName) && void 0 !== RU ? RU : hT;
      return (0, Bp.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: eT(EU),
        children: [(0, Bp.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, Bp.jsx)(bp.c, {
            itemName: TU,
            amount: 0
          })
        }), (0, Bp.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: PU(pU.reasonKey, null !== (tU = pU.reasonParams) && void 0 !== tU ? tU : void 0)
        }), (0, Bp.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [pU.coins > 0 && (0, Bp.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, Bp.jsx)(bp.c, {
              itemName: hT,
              amount: 0
            }), "+", (0, Zp.d)(pU.coins)]
          }), pU.items.map(((UU, RU) => (0, Bp.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, Bp.jsx)(bp.c, {
              itemName: UU.itemName,
              amount: 0
            }), UU.label, " \xd7", UU.amount]
          }, RU)))]
        })]
      })
    }

    function xT(UU) {
      let {
        view: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)();
      return (0, Bp.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${RU.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${QT(RU.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, Bp.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, Bp.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, Bp.jsx)(WT, {
              letterCount: RU.letters.length
            }), (0, Bp.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: gU("skyblockGame:mailboxTitle")
            })]
          }), (0, Bp.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: RU.letters.map(((UU, RU) => (0, Bp.jsx)(fT, {
              letter: UU,
              index: RU
            }, RU)))
          }), RU.more > 0 && (0, Bp.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: gU("skyblockGame:mailboxMore", {
              count: String(RU.more)
            })
          })]
        })
      })
    }
    const mT = (0, nU.memo)((function(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(Ag, RU.getSnapshot());
      return gU ? (0, Bp.jsx)(xT, {
        view: gU
      }, gU.token) : null
    }));

    function IT(UU) {
      let {
        controller: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)(), tU = (0, Yp.h)(Ht, RU.getSnapshot());
      if (null === tU) return null;
      const pU = tU.fullSet ? "empty" === tU.fuelState ? {
        text: gU("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: gU("skyblockGame:magmawardHudFullSet", {
          worn: String(tU.wornCount)
        }),
        tone: "partial"
      };
      return (0, Bp.jsx)(wp.e, {
        placement: "statBars",
        children: (0, Bp.jsxs)("div", {
          className: Ip()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${tU.fuelState}`, {
            "SkyblockMagmawardHud-partial": !tU.fullSet,
            "SkyblockMagmawardHud-armed": tU.fullSet && "empty" !== tU.fuelState
          }),
          children: [null !== tU.flare && (0, Bp.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${tU.flare}`
          }, `flare:${tU.flareToken}`), (0, Bp.jsx)("div", {
            className: Ip()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: tU.setLit
            }),
            children: tU.pieces.map(((UU, RU) => (0, Bp.jsx)("div", {
              className: Ip()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: UU.worn,
                SkyblockMagmawardPieceJustWorn: UU.justWorn
              }),
              children: (0, Bp.jsx)(bp.c, {
                itemName: UU.itemName,
                amount: 0
              })
            }, `${RU}:${UU.wornToken}`)))
          }, `pieces:${tU.setLitToken}`), (0, Bp.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, Bp.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, Bp.jsxs)("div", {
              className: Ip()("SkyblockMagmawardFuelCounter", tU.pulse && `SkyblockMagmawardFuelCounter-${tU.pulse}`),
              children: [(0, Bp.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, Bp.jsx)(bp.c, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, Bp.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: tU.fuel
              })]
            }, `counter:${tU.pulseToken}`), "burn" === tU.pulse && (0, Bp.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${tU.pulseToken}`)]
          }), pU && (0, Bp.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${pU.tone} SmallTextBold`,
            children: pU.text
          })]
        })
      })
    }

    function JT(UU) {
      let {
        controller: RU
      } = UU;
      const {
        t: gU,
        selectedLanguage: tU
      } = (0, ap.B)(), pU = (0, Yp.h)(st, RU.getSnapshot());
      return null === pU ? null : (0, Bp.jsx)(wp.e, {
        placement: "statBars",
        children: (0, Bp.jsxs)("div", {
          className: Ip()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: pU.inRange
          }),
          style: {
            "--glowtide-colour": pU.colour
          },
          "aria-label": gU("skyblockGame:glowtideChipLabel"),
          children: [(0, Bp.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), pU.inRange ? (0, Bp.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: gU("skyblockGame:glowtideChipInRange")
          }, `call:${pU.inRangeToken}`) : (0, Bp.jsxs)(Bp.Fragment, {
            children: [(0, Bp.jsx)("div", {
              ref: RU.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, Bp.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: gU("skyblockGame:waypointDistance", {
                distance: IU(pU.distance, tU.code)
              })
            })]
          })]
        })
      })
    }

    function wT(UU) {
      let {
        controller: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)(), tU = (0, Yp.h)(kt, RU.getSnapshot());
      return null === tU ? null : (0, Bp.jsx)(wp.e, {
        placement: "statBars",
        children: (0, Bp.jsxs)("div", {
          className: Ip()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: tU.full
          }),
          "aria-label": gU("skyblockGame:glowMeterLabel", {
            fill: String(tU.fill),
            hG: String(tU.hG)
          }),
          children: [tU.burst && (0, Bp.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${tU.burstToken}`), (0, Bp.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, Bp.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${tU.ratio})`
              }
            }), tU.gained && (0, Bp.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${tU.gainToken}`), tU.full && Array.from({
              length: 5
            }, ((UU, RU) => (0, Bp.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, RU)))]
          }), tU.full && tU.rares.map((UU => (0, Bp.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, Bp.jsx)(bp.c, {
              itemName: UU,
              amount: 0
            })
          }, UU))), tU.ready && (0, Bp.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, Bp.jsx)("span", {
              children: gU("skyblockGame:glowMeterReady")
            })
          }, `ready:${tU.fullToken}`)]
        })
      })
    }

    function nT(UU) {
      let {
        controller: RU
      } = UU;
      const {
        t: gU
      } = (0, ap.B)(), tU = (0, Yp.h)(it, RU.getSnapshot());
      if (null === tU) return null;
      const pU = "waiting" === tU.phase,
        EU = {
          animationDuration: `${tU.waitMs}ms`,
          animationDelay: -tU.elapsedMs + "ms"
        },
        PU = pU ? void 0 : {
          animationDuration: `${tU.waitMs}ms`
        };
      return (0, Bp.jsxs)("div", {
        className: pU ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [pU && (0, Bp.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((UU, RU) => (0, Bp.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, RU))), (0, Bp.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: EU
          }), (0, Bp.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, Bp.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, Bp.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: EU
            })]
          }), (0, Bp.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, Bp.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: PU,
          children: gU(tU.line)
        }, tU.lineIndex)]
      }, tU.token)
    }

    function bT(UU) {
      let {
        chart: RU,
        showHere: gU,
        className: tU
      } = UU;
      return (0, Bp.jsx)("div", {
        className: Ip()("SkyblockTideChartGrid", tU, null !== RU.pictureName && "Complete"),
        "aria-hidden": "true",
        children: RU.cells.map(((UU, tU) => {
          const pU = 0 !== (RU.pulseCells & 1 << tU),
            EU = RU.castCell === tU;
          return (0, Bp.jsx)("span", {
            className: Ip()("SkyblockTideChartCell", `Cell-${UU}`, pU && "Pulse", EU && "Cast", gU && RU.hereCell === tU && "Here")
          }, `${tU}:${pU?`p${RU.pulseToken}`:""}:${EU?`c${RU.castToken}`:""}`)
        }))
      })
    }

    function oT(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(zt, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = gU.chip;
      if (!gU.enabled || null === pU) return null;
      const EU = tU("skyblockGame:tideChartsChipLabel", {
        island: pU.islandName,
        lit: String(pU.lit),
        ink: String(pU.ink)
      });
      return (0, Bp.jsx)(wp.e, {
        placement: "statBars",
        children: (0, Bp.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Ip()("SkyblockTideChartsChip", gU.open && "Open", null !== pU.pictureName && "Complete"),
          "aria-label": EU,
          title: EU,
          onMouseDown: UU => {
            UU.preventDefault()
          },
          onClick: RU.toggle,
          children: [(0, Bp.jsx)(bT, {
            chart: pU,
            showHere: !1,
            className: "Mini"
          }), (0, Bp.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [pU.lit, "/", pU.ink]
          })]
        })
      })
    }

    function ZT(UU) {
      let {
        controller: RU
      } = UU;
      const gU = (0, Yp.h)(zt, RU.getSnapshot()),
        {
          t: tU
        } = (0, ap.B)(),
        pU = Fp(),
        EU = gU.card;
      return gU.enabled && null !== EU ? (0, Bp.jsx)(sp.d, {
        show: gU.open,
        close: RU.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, Bp.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: pU,
          onKeyDown: kp,
          children: [(0, Bp.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, Bp.jsxs)("div", {
              children: [(0, Bp.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: tU("skyblockGame:tideChartsTitle")
              }), (0, Bp.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: tU("skyblockGame:tideChartsIntro")
              })]
            }), (0, Bp.jsx)(yp.h, {
              padIgnore: !0,
              ariaLabel: tU("skyblockGame:tideChartsClose"),
              onClick: RU.dismiss
            })]
          }), gU.tabs.length > 1 && (0, Bp.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": tU("skyblockGame:tideChartsIslands"),
            children: gU.tabs.map((UU => (0, Bp.jsx)("button", {
              type: "button",
              className: Ip()("SkyblockTideChartsTab", UU.selected && "Selected"),
              "aria-pressed": UU.selected,
              onClick: () => {
                RU.Hj(UU.island)
              },
              children: UU.name
            }, UU.island)))
          }), (0, Bp.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, Bp.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": EU.gridLabel,
              children: (0, Bp.jsx)(bT, {
                chart: EU,
                showHere: !0,
                className: "Large"
              })
            }), (0, Bp.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, Bp.jsx)("h3", {
                children: EU.islandName
              }), (0, Bp.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: EU.litText
              }), null === EU.pictureName ? (0, Bp.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: tU("skyblockGame:tideChartsPictureHidden")
              }) : (0, Bp.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: tU("skyblockGame:tideChartsPictureRevealed", {
                  picture: EU.pictureName
                })
              }, EU.pictureName), (0, Bp.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, Bp.jsxs)("li", {
                  children: [(0, Bp.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), tU("skyblockGame:tideChartsLegendLit")]
                }), (0, Bp.jsxs)("li", {
                  children: [(0, Bp.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), tU("skyblockGame:tideChartsLegendClear")]
                }), null !== EU.hereCell && (0, Bp.jsxs)("li", {
                  children: [(0, Bp.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), tU("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, Bp.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, Bp.jsx)("span", {
                  children: gU.turnsText
                }), (0, Bp.jsx)("span", {
                  children: gU.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function aT(UU) {
      var RU;
      let {
        controller: gU
      } = UU;
      const {
        selectedLanguage: tU
      } = (0, ap.B)(), pU = tU.code;
      (0, nU.useEffect)((() => {
        gU.setTranslator(((UU, RU) => (0, ap.x)(pU, UU, RU)), pU, ((UU, RU) => (0, ap.s)(pU, UU, RU)))
      }), [gU, pU]);
      const EU = (0, Yp.h)(jU, gU.map.getSnapshot()),
        {
          openInGameMenuName: PU
        } = (0, Jp.l)(["openInGameMenuName"]);
      return (0, Bp.jsxs)(Bp.Fragment, {
        children: [(0, Bp.jsx)(RT, {
          controller: gU.quests,
          display: gU.navigation.display
        }), EU.enabled && !PU && (0, Bp.jsx)(pE, {
          controller: gU.navigation
        }), (0, Bp.jsx)(Vp, {
          controller: gU,
          minimap: EU.enabled && (null === (RU = EU.presentation) || void 0 === RU ? void 0 : RU.minimap) && (0, Bp.jsx)(tE, {
            view: EU.presentation.minimap,
            navigation: gU.navigation,
            controller: gU.map
          }),
          children: (0, Bp.jsx)(uE, {
            controller: gU.quests,
            surface: "hud"
          })
        }), (0, Bp.jsx)(lP, {
          controller: gU.navigation
        }), (0, Bp.jsx)(tT, {
          controller: gU.portalTransit
        }), (0, Bp.jsx)(CT, {
          controller: gU.dailyReward
        }), (0, Bp.jsx)(mT, {
          controller: gU.mailbox
        }), (0, Bp.jsx)(IT, {
          controller: gU.magmaward
        }), (0, Bp.jsx)(JT, {
          controller: gU.glowtide
        }), (0, Bp.jsx)(uP, {
          controller: gU.passage
        }), (0, Bp.jsx)(oT, {
          controller: gU.tideCharts
        }), (0, Bp.jsx)(wT, {
          controller: gU.glowMeter
        }), (0, Bp.jsx)(wP, {
          controller: gU.reachLog
        }), (0, Bp.jsx)(nT, {
          controller: gU.hushWait
        }), (0, Bp.jsx)(xP, {
          controller: gU.lampLight
        }), (0, Bp.jsx)(EE, {
          controller: gU.skills,
          surface: "hud"
        })]
      })
    }

    function YT(UU) {
      let {
        controller: RU
      } = UU;
      return (0, Bp.jsxs)(Bp.Fragment, {
        children: [(0, Bp.jsx)(gE, {
          controller: RU.map,
          navigation: RU.navigation
        }), (0, Bp.jsx)(EE, {
          controller: RU.skills,
          surface: "menu"
        }), (0, Bp.jsx)(uE, {
          controller: RU.quests,
          surface: "menu"
        }), (0, Bp.jsx)(ME, {
          controller: RU.dungeons
        }), (0, Bp.jsx)(NE, {
          controller: RU.collections
        }), (0, Bp.jsx)(UP, {
          controller: RU.questGraph
        }), (0, Bp.jsx)(EP, {
          controller: RU.forge
        }), (0, Bp.jsx)(GP, {
          controller: RU.smuggler
        }), (0, Bp.jsx)(IP, {
          controller: RU.keepersChair,
          lampLight: RU.lampLight
        }), (0, Bp.jsx)(zP, {
          controller: RU.reachLog,
          regulars: RU.regulars,
          hiddenWaters: RU.hiddenWaters
        }), (0, Bp.jsx)(ZP, {
          controller: RU.regulars
        }), (0, Bp.jsx)(hP, {
          controller: RU.passage
        }), (0, Bp.jsx)(ZT, {
          controller: RU.tideCharts
        }), (0, Bp.jsx)(LP, {
          controller: RU.dialogue
        }), (0, Bp.jsx)(NP, {
          controller: RU.autographs
        })]
      })
    }
    var BT = gU(36311);
    const VT = Ut + Tt;

    function rT(UU, RU, gU, tU, pU) {
      const EU = [],
        PU = [],
        TU = gU => {
          const tU = UU.playSound(RU, gU.sound, gU.volume, gU.rate);
          tU && (PU.push(tU), void 0 !== gU.cutAfter && EU.push(setTimeout((() => {
            tU.fade(tU.getVolume(), 0, 300)
          }), gU.cutAfter)))
        };
      for (const qU of function(UU, RU) {
          const gU = [{
            sound: "rpgKnifeSlice1",
            beat: Ut,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: Ut,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: Ut,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: Ut,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: Ut,
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
            sound: (0, BT.d)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: VT + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, BT.d)("bigDrumSwish"),
            beat: VT + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: VT + 60,
            lead: 180,
            volume: .5 + .06 * UU,
            rate: .82 + .07 * UU
          }];
          return UU >= 4 && gU.push({
            sound: "exp_levelup",
            beat: VT + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), RU && gU.push({
            sound: "trumpetFlare",
            beat: VT + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), gU.push({
            sound: "harp_pling",
            beat: Rt,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), gU
        }(gU, tU)) pU ? EU.push(setTimeout((() => {
        TU(qU)
      }), Math.max(0, qU.beat - qU.lead / qU.rate))) : qU.beat !== Ut && "magicAccent2" !== qU.sound && "trumpetFlare" !== qU.sound || TU(qU);
      return () => {
        for (const UU of EU) clearTimeout(UU);
        for (const UU of PU) UU.fade(UU.getVolume(), 0, 120)
      }
    }
    class XT {
      constructor(UU) {
        this.deps = UU, this.pending = new Map, this.localHook = null
      }
      hookWaiting(UU, RU) {
        this.pending.delete(UU);
        const gU = this.deps.now();
        if (null === RU) {
          var tU;
          if ((null === (tU = this.localHook) || void 0 === tU ? void 0 : tU.hookId) === UU) {
            const UU = gU >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(UU)
          }
          return
        }
        const pU = gU + RU;
        this.settle(UU, pU) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(UU, {
          untilMs: gU + 1e3,
          biteAtMs: pU
        }))
      }
      getLocalHook() {
        var UU, RU;
        return null !== (UU = null === (RU = this.localHook) || void 0 === RU ? void 0 : RU.hookId) && void 0 !== UU ? UU : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const UU = this.deps.now();
        for (const [RU, {
            untilMs: gU,
            biteAtMs: tU
          }] of this.pending)(this.settle(RU, tU) || UU > gU) && this.pending.delete(RU)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(UU, RU) {
        const gU = this.deps.getLineOwner(UU);
        if (null === gU) return !1;
        if (!this.deps.isLocalPlayer(gU)) return !0;
        if (this.localHook = {
            hookId: UU,
            biteAtMs: RU
          }, !this.deps.isHushWaiting()) {
          const [RU, gU] = this.deps.getHookPosition(UU);
          this.deps.onCastLanded(RU, gU)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var vT = gU(3937);
    const dT = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      HT = {
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
    class ST {
      constructor(UU) {
        this.deps = UU, this.tell = null
      }
      receiveTell(UU) {
        let {
          biteTellTier: RU
        } = UU;
        this.tell = {
          tier: RU,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(UU) {
        const RU = this.tell;
        if (this.tell = null, !UU) return;
        const gU = null !== RU && this.deps.now() - RU.atMs <= 3e3 ? RU.tier : 0;
        this.deps.vibrate(dT[gU])
      }
      burstAtHook() {
        const UU = this.tell,
          RU = this.deps.getLocalHookPosition();
        null === UU || UU.burst || null === RU || (UU.burst = !0, this.deps.playParticles(function(UU, RU) {
          let [gU, tU, pU] = RU;
          const {
            count: EU,
            rise: PU,
            colour: TU
          } = HT[UU], [qU, KU, cU] = TU;
          return {
            texture: "glint",
            pos1: [gU - .3, tU, pU - .3],
            pos2: [gU + .3, tU + .2, pU + .3],
            dir1: [-.6, PU, -.6],
            dir2: [.6, 1.4 * PU, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: EU,
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
              minColor: [qU, KU, cU, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [qU, KU, cU, 0],
              maxColor: [qU, KU, cU, 0]
            }],
            blendMode: vT.g.Add,
            hideDist: 48
          }
        }(UU.tier, RU)))
      }
    }
    var sT = gU(1249),
      yT = gU(1802),
      kT = gU(34);

    function FT(UU, RU) {
      return [{
        timeFraction: 0,
        minColor: [255 * UU[0], 255 * UU[1], 255 * UU[2], 1],
        maxColor: [255 * RU[0], 255 * RU[1], 255 * RU[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const iT = [0, 0, 0],
      AT = {
        texture: "glint",
        mipmaps: !1,
        hG: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: iT,
        dir2: iT,
        blendMode: vT.g.OneOne
      },
      zT = {
        ...AT,
        colorGradients: FT([1, .88, .38], [1, .65, .15])
      },
      MT = {
        ...AT,
        colorGradients: FT([.55, .95, 1], [.9, 1, 1])
      },
      DT = [.5, .5, .5],
      LT = {
        texture: "glint",
        mipmaps: !1,
        hG: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: FT([1, .12, .12], [1, .35, .2]),
        blendMode: vT.g.OneOne
      };
    class NT {
      constructor() {
        this.drops = new Map
      }
      qC(UU, RU) {
        if ("overflowFlash" === RU.kind) {
          const [gU, tU, pU] = RU.position, EU = UU.createParticles(LT, {
            pos: [gU, tU, pU],
            half: DT
          });
          return EU.emit(18), void EU.stop()
        }
        this.drops.has(RU.itemId) || this.drops.set(RU.itemId, {
          owner: RU.owner,
          cosmetic: RU.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      HG(UU) {
        if (0 === this.drops.size) return;
        const RU = performance.now(),
          gU = UU.getCameraPosition();
        let tU = 0;
        for (const EU of this.drops.values()) null !== EU.particles && tU++;
        for (const [EU, PU] of this.drops) {
          const TU = UU.getPositionView(EU);
          if (null === TU) {
            var pU;
            if (PU.seen || RU - PU.markedAt > 5e3) null !== PU.particles && tU--, null === (pU = PU.particles) || void 0 === pU || pU.stop(), this.drops.delete(EU);
            continue
          }
          PU.cosmetic || !UU.isLocalPlayer(PU.owner) || PU.pickupDelayCleared || (UU.clearPickupDelay(EU), PU.pickupDelayCleared = !0);
          const qU = PU.lastPosition,
            KU = PU.seen && (TU[0] - qU[0]) ** 2 + (TU[1] - qU[1]) ** 2 + (TU[2] - qU[2]) ** 2 > 4e-4,
            cU = (TU[0] - gU[0]) ** 2 + (TU[1] - gU[1]) ** 2 + (TU[2] - gU[2]) ** 2 < 2025;
          PU.seen = !0, qU[0] = TU[0], qU[1] = TU[1], qU[2] = TU[2], KU && (PU.lastMovingAt = RU), null !== PU.particles && (!cU || RU - PU.lastMovingAt > 500) && (PU.particles.stop(), PU.particles = null, tU--), KU && cU && null === PU.particles && tU < 32 && (PU.particles = UU.createParticles(PU.cosmetic ? MT : zT, {
            pos: TU
          }), tU++), null !== PU.particles && (PU.particles.moveTo(TU), PU.particles.setEmitRate(KU ? 12 : 0)), !KU && null === PU.particles && RU - Math.max(PU.lastMovingAt, PU.markedAt) > 2e3 && this.drops.delete(EU)
        }
      }
      dispose() {
        for (const RU of this.drops.values()) {
          var UU;
          null === (UU = RU.particles) || void 0 === UU || UU.stop()
        }
        this.drops.clear()
      }
    }
    var lT = gU(189);
    const OT = lT.e.FW * lT.e.playerEyeToHeightRatio;
    class Uq {
      constructor(UU) {
        this.host = UU, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      qC(UU) {
        this.lava = UU, this.nextUpdateAt = 0
      }
      HG() {
        var UU;
        const RU = this.host.now();
        if (RU < this.nextUpdateAt) return;
        this.nextUpdateAt = RU + 250;
        const gU = this.host.playerPosition(),
          tU = gU && this.findNearest([gU[0], gU[1] + OT, gU[2]]);
        if (!tU || tU.distance >= 40) return void this.stop();
        const pU = .5 * Math.min(1, (40 - tU.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(pU) : this.loop = this.host.play("lavaFlow", pU, tU.position, 40 + OT, 9, !0), null === (UU = this.loop) || void 0 === UU || UU.setPosition(tU.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var UU;
        null === (UU = this.loop) || void 0 === UU || UU.stop(), this.loop = null
      }
      findNearest(UU) {
        let RU = -1,
          gU = 1 / 0;
        for (let tU = 0; tU < this.lava.length; tU += 3) {
          const pU = this.lava[tU] - UU[0],
            EU = this.lava[tU + 1] - UU[1],
            PU = this.lava[tU + 2] - UU[2],
            TU = pU * pU + EU * EU + PU * PU;
          TU < gU && (gU = TU, RU = tU)
        }
        return RU < 0 ? null : {
          position: [this.lava[RU], this.lava[RU + 1], this.lava[RU + 2]],
          distance: Math.sqrt(gU)
        }
      }
    }
    var Rq = gU(1786),
      gq = gU(38190);
    const tq = {
      "Grey Portal": "Gray"
    };
    for (const Kq of pU.Gc) tq[`${Kq} Portal`] = Kq;
    const pq = Object.keys(tq),
      Eq = Object.fromEntries(pq.map((UU => [UU, (0, pU.ab)(pU.N[`${(0,pU.Ne)(tq[UU])}Team`])])));
    Object.fromEntries(pq.map((UU => [UU, pU.N[`${(0,pU.Ne)(tq[UU])}UiText`]])));
    class Pq {
      constructor(UU, RU) {
        this.presentation = UU, this.portal = RU, this.unlocked = void 0
      }
      qC(UU) {
        const RU = !1 === this.unlocked && UU;
        this.unlocked = UU, this.HG();
        const {
          min: gU,
          max: tU,
          unlockedBlock: pU
        } = this.portal;
        if (RU && this.presentation.hasChunk(...gU)) {
          const [UU, RU, EU] = Eq[pU];
          this.presentation.playParticles({
            pos1: [...gU],
            pos2: tU.map((UU => UU + 1)),
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
              minColor: [UU, RU, EU, 1],
              maxColor: [Math.min(255, UU + 55), Math.min(255, RU + 55), Math.min(255, EU + 90), 1]
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
      HG() {
        var UU;
        const RU = this.unlocked ? this.portal.unlockedBlock : null !== (UU = this.portal.lockedBlock) && void 0 !== UU ? UU : "Light Gray Portal",
          {
            min: gU,
            max: tU
          } = this.portal;
        for (let pU = gU[0]; pU <= tU[0]; pU++)
          for (let UU = gU[1]; UU <= tU[1]; UU++)
            for (let EU = gU[2]; EU <= tU[2]; EU++) this.presentation.hasChunk(pU, UU, EU) && this.presentation.Zx(pU, UU, EU) !== RU && this.presentation.mw(pU, UU, EU, RU)
      }
    }
    const Tq = {
        farming_1: {
          raises: UU => "NPC" === UU.type && "chef" === UU.variation,
          rise: .4
        },
        fishing_1: {
          raises: UU => "Draugr Warper" === UU.type,
          rise: .4
        }
      },
      qq = (UU, RU, gU, EU) => {
        let {
          localPlayerId: PU
        } = EU;
        const TU = new xp({
          translate: (UU, RU) => (0, ap.x)(sT.g.get().getCurrentLanguageCode(), UU, RU),
          translateWithIcons: (UU, RU) => (0, ap.s)(sT.g.get().getCurrentLanguageCode(), UU, RU),
          setMenuOpen: UU => {
            UU ? (0, zU.w)() : (0, zU.h)()
          },
          dismissMenu: zU.l,
          publishSkills: UU => {
            MU.p.yh(Eg, UU, !0)
          },
          publishQuests: UU => {
            MU.p.yh(Kg, UU, !0)
          },
          publishQuestNotification: UU => {
            MU.p.yh(cg, UU, !0)
          },
          publishDungeons: UU => {
            MU.p.yh(ug, UU, !0)
          },
          publishCollections: UU => {
            MU.p.yh(Xg, UU, !0)
          },
          publishMap: UU => {
            MU.p.yh(jU, UU, !0)
          },
          publishHud: UU => {
            MU.p.yh(ep, UU, !0)
          },
          publishPortalTransit: UU => {
            MU.p.yh(dg, UU, !0)
          },
          isLoadingScreenUp: () => Jp.b.get("loadingOverlayVisible"),
          publishDailyReward: UU => {
            MU.p.yh(sg, UU, !0)
          },
          publishMailbox: UU => {
            MU.p.yh(Ag, UU, !0)
          },
          publishQuestGraph: UU => {
            MU.p.yh(Mg, UU, !0)
          },
          publishForge: UU => {
            MU.p.yh(Ct, UU, !0)
          },
          publishSmuggler: UU => {
            MU.p.yh(et, UU, !0)
          },
          publishKeepersChair: UU => {
            MU.p.yh(bt, UU, !0)
          },
          publishReachLog: UU => {
            MU.p.yh(Zt, UU, !0)
          },
          publishLampLight: UU => {
            MU.p.yh(vt, UU, !0)
          },
          publishMagmaward: UU => {
            MU.p.yh(Ht, UU, !0)
          },
          publishGlowtide: UU => {
            MU.p.yh(st, UU, !0)
          },
          publishGlowMeter: UU => {
            MU.p.yh(kt, UU, !0)
          },
          publishHushWait: UU => {
            MU.p.yh(it, UU, !0)
          },
          publishPassage: UU => {
            MU.p.yh(xt, UU, !0)
          },
          publishTideCharts: UU => {
            MU.p.yh(zt, UU, !0)
          },
          publishRegulars: UU => {
            MU.p.yh(Rp, UU, !0)
          },
          publishHiddenWaters: UU => {
            MU.p.yh(Pp, UU, !0)
          },
          publishDialogue: UU => {
            MU.p.yh(qp, UU, !0)
          },
          publishAutographs: UU => {
            MU.p.yh(Cp, UU, !0)
          },
          onDailyRewardStarted: UU => {
            BU.playSound(PU, UU.day === oU ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (UU, RU) => {
            BU.playSound(PU, "exp_collect", .35, 1 + .6 * UU / (RU - 1)), MU.p.yh(yg, UU === RU - 1)
          },
          onDailyRewardItemLanded: UU => {
            BU.playSound(PU, "pickUp", .6, 1 + .15 * UU)
          },
          onMailboxStarted: () => {
            BU.playSound(PU, "rpgMetalClick", .6, 1), BU.playSound(PU, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            BU.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: kT.l,
          requestTracking: UU => {
            BU.sendCommand(`quests track ${UU}`)
          },
          requestDungeonEnter: (UU, RU) => {
            BU.sendCommand(`dungeonEnter ${UU} ${RU}`)
          },
          requestQuestJump: UU => {
            BU.sendCommand(`${rU} jump ${UU}`)
          },
          requestQuestArrive: (UU, RU) => {
            const gU = `${rU} arrive ${UU}`;
            BU.sendCommand(RU ? `${gU} complete` : gU)
          },
          requestForge: UU => {
            let {
              blade: RU,
              guard: gU,
              handle: tU
            } = UU;
            BU.sendCommand(`forge ${RU} ${gU} ${tU}`)
          },
          requestDialogue: () => {
            BU.sendCommand("quests dialogue")
          },
          requestSmuggle: (UU, RU) => {
            BU.sendCommand(`smuggle ${UU} ${RU}`)
          },
          requestKeepersChairAim: UU => {
            BU.sendCommand(`keeperschair-aim ${UU}`)
          },
          requestReachLogOpen: () => {
            BU.sendCommand("reachlog-open")
          },
          requestLampLight: UU => {
            BU.sendCommand(`${UU}`)
          },
          requestTravel: UU => {
            BU.sendCommand(`map travel ${UU.kind} ${UU.id} ${UU.requestId}`)
          }
        });
        let qU, KU, cU, GU, uU, CU, hU, xU, mU, IU, JU, bU, ZU;
        const YU = new NT;
        let BU, VU = null;
        const XU = Tq[null !== gU && void 0 !== gU ? gU : ""],
          SU = (UU, RU) => {
            null !== XU && void 0 !== XU && XU.raises(RU) && BU.setNametagOffset(UU, XU.rise)
          },
          kU = new ST({
            getLocalHookPosition: () => {
              const UU = FU.getLocalHook();
              return null !== UU && BU.checkValid(UU) ? BU.Hx(UU) : null
            },
            playParticles: UU => {
              BU.playParticleEffect(UU)
            },
            vibrate: UU => {
              DU.d.play("fishBite", UU)
            },
            now: () => performance.now()
          }),
          FU = new XT({
            getLineOwner: UU => BU.checkValid(UU) ? BU.getLineOwner(UU) : null,
            isLocalPlayer: UU => BU.isLocalPlayer(UU),
            getHookPosition: UU => {
              const [RU, , gU] = BU.Hx(UU);
              return [RU, gU]
            },
            isHushWaiting: () => {
              var UU;
              return "waiting" === (null === (UU = TU.hushWait.getSnapshot()) || void 0 === UU ? void 0 : UU.phase)
            },
            onCastLanded: (UU, RU) => {
              TU.tideCharts.castLanded(UU, RU)
            },
            onLocalHookSettled: () => {
              kU.onLocalHookSettled()
            },
            onLocalWaitEnded: UU => {
              kU.onLocalWaitEnded(UU)
            },
            now: () => performance.now()
          }),
          LU = new Uq({
            now: () => performance.now(),
            playerPosition: () => BU.checkValid(PU) ? BU.Hx(PU) : null,
            play: (UU, RU, gU, tU, pU, EU) => BU.playSound(PU, UU, RU, 1, {
              Xp: gU,
              maxHearDist: tU,
              refDistance: pU
            }, EU)
          }),
          NU = new Map;
        let lU;
        return {
          onCreate: UU => {
            if (BU = UU, VU = new gq.SkyblockEntityFacing(UU, XU ? SU : null), TU.portalTransit.resumeArrival(null !== gU && void 0 !== gU ? gU : null), (null !== gU && void 0 !== gU ? gU : tU) === tU) {
              let UU = -1 / 0;
              lU = MU.p.subscribe("toggleMenu", (RU => {
                const gU = performance.now();
                "inventory|Workbench" !== RU || "cross_to_hub" !== TU.quests.getTrackedQuestId() || gU - UU < 1e4 || (UU = gU, BU.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [tU, pU] of Object.entries(null !== (RU = vU[null !== gU && void 0 !== gU ? gU : ""]) && void 0 !== RU ? RU : {})) {
              var RU;
              NU.set(tU, new Pq({
                hasChunk: (RU, gU, tU) => UU.isBlockInLoadedChunk(RU, gU, tU),
                Zx: (RU, gU, tU) => UU.blockIdToBlockName(UU.getBlockId(RU, gU, tU)),
                mw: (RU, gU, tU, pU) => {
                  UU.mw(RU, gU, tU, pU)
                },
                playParticles: RU => {
                  UU.playParticleEffect(RU)
                }
              }, pU))
            }
            ZU = (0, Rq.h)((UU => function(UU) {
              return Object.hasOwn(FR, UU) || UU.startsWith("npc_")
            }(UU) ? AR(UU) : null)), TU.resolveItemName = (RU, gU) => {
              const tU = UU.getItemStat(PU, RU, "displayName");
              return tU && "object" === typeof tU && "translationKey" in tU ? gU(tU.translationKey, (0, ap.r)(tU.params, yT.b.shown)) : "string" === typeof tU ? gU(tU) : RU
            }, TU.quests.notifications.onShown = UU => {
              "quest" === UU ? BU.playSound(PU, "magicAccent1", 1, 1) : "skillLevel" === UU ? BU.playSound(PU, "magicAccent1", 1, .6) : "landmark" === UU ? BU.playSound(PU, "trumpetFlare", 1, .6) : "npcNote" === UU ? BU.playSound(PU, "magicAccent2", .8, 1.1) : "started" === UU ? BU.playSound(PU, (0, BT.d)("bigDrumSwish"), 1, 1) : BU.playSound(PU, (0, BT.d)("rpgHandleSmallLeather"), 1, 1)
            }, TU.forge.onPartSelected = () => {
              BU.playSound(PU, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, TU.forge.onForgeStarted = (RU, gU, tU) => rT(UU, PU, RU, gU, tU), TU.smuggler.onBought = () => {
              BU.playSound(PU, (0, BT.d)("rpgHandleSmallLeather"), 1, 1), BU.playSound(PU, "chestOpen", .6, 1)
            }, TU.compass.register(new QU(TU.map, !0)), TU.compass.register(new QU(TU.map, !1)), TU.compass.register(new WU(TU.map)), TU.compass.register(new fU((() => TU.quests.getSnapshot().compassTarget)));
            for (const gU of ["enemy", "npc"]) TU.compass.register(new eU(TU.map, gU, (RU => UU.checkValid(RU) ? UU.Hx(RU) : void 0), (RU => UU.isAlive(RU))))
          },
          onAfterRender: (UU, RU) => {
            const gU = BU.checkValid(PU) ? BU.Hx(PU) : null;
            TU.navigation.afterRender(gU, performance.now(), RU), TU.glowtide.afterRender(gU, RU.cameraHeading), TU.tideCharts.afterRender(gU), FU.afterRender()
          },
          onClose: () => {
            var UU, RU, gU, tU, pU, EU, PU, jU, CU, QU, eU, WU, fU, wU, nU;
            lU && MU.p.unsubscribe(lU), null === (UU = ZU) || void 0 === UU || UU(), YU.dispose(), LU.dispose(), null === (RU = VU) || void 0 === RU || RU.dispose(), FU.dispose(), TU.dispose(), null === (gU = qU) || void 0 === gU || gU(), null === (tU = KU) || void 0 === tU || tU(), null === (pU = cU) || void 0 === pU || pU(), null === (EU = GU) || void 0 === EU || EU(), null === (PU = uU) || void 0 === PU || PU(), null === (jU = hU) || void 0 === jU || jU(), null === (CU = undefined) || void 0 === CU || CU(), null === (QU = xU) || void 0 === QU || QU(), null === (eU = mU) || void 0 === eU || eU(), null === (WU = IU) || void 0 === WU || WU(), null === (fU = JU) || void 0 === fU || fU(), null === (wU = undefined) || void 0 === wU || wU(), null === (nU = bU) || void 0 === nU || nU()
          },
          onPlayerChangeBlock: (UU, RU, tU, EU, qU, KU) => {
            if (UU === PU && "Air" === KU) {
              const UU = BU.getClientOption(PU, "creative");
              TU.skills.predictBlock([RU, tU, EU], qU, UU);
              const KU = function(UU, RU) {
                  if ("hub" === RU || "farming_1" === RU || "mining_1" === RU) return !sU.has(UU) || "hub" !== RU && "mining_1" !== RU ? Object.hasOwn(HU, UU) ? HU[UU] : void 0 : dU
                }(qU, gU),
                cU = ("hub" === gU || "mining_1" === gU) && (pU.yd.some((UU => UU === qU)) || Object.hasOwn(yU, qU) || "mining_1" === gU && "Block of Coal" === qU);
              UU || void 0 === KU && !cU || BU.mw(RU, tU, EU, null !== KU && void 0 !== KU ? KU : dU)
            }
          },
          onPlayerAttackEntity: (UU, RU) => {
            if (UU !== PU || "Player" !== BU.getEntityType(RU)) return;
            const [gU, tU, pU] = BU.Hx(RU);
            BU.burstParticlePreset("critical", [gU, tU + 1, pU], 10)
          },
          onChangeBlockFail: UU => {
            for (const {
                HE: RU
              }
              of UU) TU.skills.rejectBlock(RU)
          },
          onReceivedMessageFromServer: (UU, RU) => {
            if ("skyblockGatedPortal" === UU) {
              var gU;
              const [UU, tU] = RU;
              return void(null === (gU = NU.get(UU)) || void 0 === gU || gU.qC(tU))
            }
            if ("skyblockDailyReward" === UU) return void TU.dailyReward.qC(RU);
            if ("skyblockMailbox" === UU) return void TU.mailbox.qC(RU);
            if ("skyblockPortalTransit" === UU) return void TU.portalTransit.qC(RU);
            if ("skyblockLoot" === UU) return void YU.qC(BU, RU);
            if ("skyblockLava" === UU) return void LU.qC(RU);
            if ("skyblockForge" === UU) return void TU.forge.qC(RU);
            if ("skyblockMagmaward" === UU) return void TU.magmaward.qC(RU);
            if ("skyblockGlowtide" === UU) return void TU.glowtide.qC(RU);
            if ("skyblockGlowMeter" === UU) return void TU.glowMeter.qC(RU);
            if ("skyblockHushWait" === UU) return void TU.hushWait.qC(RU);
            if ("skyblockPassage" === UU) {
              const UU = RU;
              return TU.passage.qC(UU), TU.reachLog.receivePassagePhase(UU.passagePhase), IU ??= (0, wU.t)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: TU.passage.show
              }), void TU.keepersChair.receivePassage({
                keepersChairPassagePhase: UU.passagePhase,
                keepersChairPassageNextPhase: UU.passageNextPhase,
                keepersChairPassageTurnsInMs: UU.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === UU) {
              const UU = RU;
              return TU.tideCharts.qC(UU), void(UU.tideCharts.length > 0 && (JU ??= (0, wU.t)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: TU.tideCharts.show
              })))
            }
            if (UU === iU.w) {
              var tU;
              const {
                hookId: UU,
                waiting: gU
              } = RU;
              return void FU.hookWaiting(UU, null !== (tU = null === gU || void 0 === gU ? void 0 : gU.remainingMs) && void 0 !== tU ? tU : null)
            }
            if ("skyblockBiteTell" === UU) return void kU.receiveTell(RU);
            if ("skyblockSmuggler" === UU) return void TU.smuggler.qC(RU);
            if ("skyblockKeepersChair" === UU) return TU.keepersChair.qC(RU), void TU.lampLight.setAtChair(TU.keepersChair.isAtChair());
            if ("skyblockLampLight" === UU) {
              const UU = RU;
              var pU;
              if (TU.lampLight.qC(UU), UU.lampLightReleasing) mU ??= (0, wU.t)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  TU.lampLight.setRelease(!1)
                }
              });
              else null === (pU = mU) || void 0 === pU || pU(), mU = void 0;
              return
            }
            if ("skyblockRegulars" === UU) return void TU.regulars.qC(RU);
            if ("skyblockHiddenWaters" === UU) return void TU.hiddenWaters.qC(RU);
            if ("skyblockReachLog" === UU) return TU.reachLog.qC(RU), void(xU ??= (0, wU.t)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Bt
              },
              onClick: TU.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === UU) {
              for (const [UU, gU, tU, pU] of RU) BU.mw(UU, gU, tU, pU);
              return
            }
            if ("skyblockHud" === UU) TU.receiveHud(RU);
            else if ("skyblockMap" === UU) TU.map.qC(RU);
            else if (UU === AU.f) TU.skills.qC(RU);
            else if (UU === aU && "dialogue" === RU.kind) TU.dialogue.qC(RU);
            else if (UU === aU) TU.quests.qC(RU);
            else if ("skyblockDungeons" === UU) TU.dungeons.qC(RU);
            else if ("sbCollections" === UU) TU.collections.qC(RU);
            else if ("skyblockQuestGraph" === UU) TU.questGraph.qC(RU);
            else {
              if ("skyblockAutographs" !== UU) return;
              TU.autographs.qC(RU)
            }
            if (!KU && TU.map.getSnapshot().enabled) {
              const UU = (0, wU.t)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: TU.map.show
                }),
                RU = (0, zU.x)(TU.map.show);
              KU = () => {
                UU(), RU()
              }
            }!cU && TU.skills.getSnapshot().enabled && (cU = (0, wU.t)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: TU.skills.show
            })), !hU && TU.collections.getSnapshot().enabled && (hU = (0, wU.t)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: TU.collections.show
            })), !GU && TU.quests.getSnapshot().enabled && (GU = (0, wU.t)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: TU.quests.show
            })), !bU && TU.autographs.getSnapshot().enabled && (bU = (0, wU.t)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: TU.autographs.show
            }));
            const EU = TU.dungeons.getSnapshot().enabled;
            var PU;
            (cU || GU || EU) && CU !== EU && (CU = EU, null === (PU = uU) || void 0 === PU || PU(), uU = (0, wU.t)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: VR
              },
              disabled: !EU,
              panel: !0,
              onClick: TU.dungeons.show
            }));
            qU || (qU = (0, zU.y)((0, nU.createElement)(aT, {
              controller: TU
            }), {
              content: (0, nU.createElement)(YT, {
                controller: TU
              }),
              onClose: TU.close
            }))
          },
          HG: () => {
            var UU;
            for (const RU of NU.values()) RU.HG();
            YU.HG(BU), LU.HG(), null === (UU = VU) || void 0 === UU || UU.HG(), TU.skills.HG(), TU.quests.HG(), TU.dailyReward.HG(), TU.mailbox.HG(), TU.map.HG()
          }
        }
      }
  },
  35963: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      f: () => tU
    });
    const tU = "skyblockSkills",
      pU = "skills_test_gym"
  },
  9012: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU,
      d: () => PU
    });
    const tU = [{
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

    function pU(UU) {
      let RU, gU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof UU) {
        if (!Number.isFinite(UU)) return "0";
        if (Math.abs(UU) < 100) {
          const RU = UU < 0 ? "-" : "",
            gU = Math.abs(UU);
          return gU >= 10 ? `${RU}${gU.toFixed(1).replace(/\.0$/,"")}` : `${RU}${gU.toFixed(2).replace(/\.?0+$/,"")}`
        }
        RU = BigInt(Math.floor(UU))
      } else RU = UU;
      const pU = RU < 0n ? -RU : RU,
        EU = RU < 0n ? "-" : "",
        PU = pU.toString();
      if (PU.length <= gU) return `${EU}${PU}`;
      const TU = 3 * Math.floor((PU.length - 1) / 3);
      if (TU < 3) return `${EU}${PU}`;
      if (TU > 3 * tU.length) {
        const UU = PU[0],
          RU = PU.slice(1, 3).replace(/0+$/, "");
        return `${EU}${RU?`${UU}.${RU}`:UU}e${PU.length-1}`
      }
      const {
        threshold: qU,
        suffix: KU
      } = tU[tU.length - TU / 3], cU = pU / qU, GU = Number(1000n * (pU % qU) / qU), jU = Number(cU) + GU / 1e3;
      let uU;
      return uU = jU >= 100 ? Math.floor(jU).toString() : jU >= 10 ? jU.toFixed(1).replace(/\.0$/, "") : jU.toFixed(2).replace(/\.?0+$/, ""), `${EU}${uU}${KU}`
    }
    const EU = tU.map((UU => {
      let {
        threshold: RU,
        suffix: gU
      } = UU;
      return {
        threshold: Number(RU),
        suffix: gU
      }
    })).filter((UU => {
      let {
        threshold: RU
      } = UU;
      return Number.isFinite(RU)
    }));

    function PU(UU) {
      const RU = Math.abs(UU),
        gU = UU < 0 ? "-" : "";
      for (const {
          threshold: tU,
          suffix: pU
        }
        of EU)
        if (RU >= tU) {
          const UU = RU / tU;
          if (UU >= 1e3) return `${gU}${RU.toExponential(2).replace("e+","e")}`;
          let EU;
          return EU = UU >= 100 ? Math.floor(UU).toString() : UU >= 10 ? UU.toFixed(1).replace(/\.0$/, "") : UU.toFixed(2).replace(/\.?0+$/, ""), `${gU}${EU}${pU}`
        } return `${gU}${RU}`
    }
  },
  38101: (UU, RU, gU) => {
    var tU = {
      "./combat_1.png": 38110,
      "./dungeon_crumbling_crypt.png": 38114,
      "./dungeon_frozen_hollow.png": 38119,
      "./dungeon_wildwood_grove.png": 38123,
      "./dungeons.png": 38131,
      "./farming_1.png": 38138,
      "./fishing_1.png": 38145,
      "./hub.png": 38148,
      "./island.png": 38156,
      "./mining_1.png": 38159,
      "./mining_1_bridge.png": 38162,
      "./mining_1_gallery.png": 38166,
      "./mining_1_hollow.png": 38173,
      "./mining_1_village.png": 38179
    };

    function pU(UU) {
      var RU = EU(UU);
      return gU(RU)
    }

    function EU(UU) {
      if (!gU.o(tU, UU)) {
        var RU = new Error("Cannot find module '" + UU + "'");
        throw RU.code = "MODULE_NOT_FOUND", RU
      }
      return tU[UU]
    }
    pU.keys = function() {
      return Object.keys(tU)
    }, pU.resolve = EU, UU.exports = pU, pU.id = 38101
  },
  38110: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38114: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38119: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38123: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38131: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38138: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38145: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38148: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38156: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38159: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38162: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38166: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38173: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38179: (UU, RU, gU) => {
    UU.exports = gU.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18285: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20283: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22656: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24216: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  25936: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  25955: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38090: UU => {
    UU.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);