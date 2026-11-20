export const id = 190;
export const ids = [50, 190];
export const modules = {
  38478: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      f: () => KT
    });
    const lT = new WeakMap;

    function MT(TT, kT) {
      return lT.set(TT, kT), TT
    }

    function KT(TT) {
      var kT;
      return null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : null
    }
  },
  38388: (TT, kT, cT) => {
    function lT(TT, kT, cT) {
      var lT;
      const {
        width: MT,
        height: KT
      } = cT, OT = null !== (lT = TT.text) && void 0 !== lT ? lT : TT, yT = (OT.x / 100 - .5) * MT, fT = (OT.y / 100 - .5) * KT, xT = MT / 2 - kT.x;
      if (null !== TT.text && Math.abs(yT) <= xT && fT >= kT.top - KT / 2 && fT <= KT / 2 - kT.bottom) return {
        x: OT.x,
        y: OT.y
      };
      const IT = Math.min(0 === yT ? 1 / 0 : xT / Math.abs(yT), fT > 0 ? (KT / 2 - kT.bottom) / fT : fT < 0 ? (kT.top - KT / 2) / fT : 1 / 0);
      return !Number.isFinite(IT) || IT < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + yT * IT / MT * 100,
        y: 50 + fT * IT / KT * 100
      }
    }
    cT.d(kT, {
      d: () => lT
    })
  },
  38397: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    const lT = 4,
      MT = 12e3,
      KT = 1e3;
    class OT {
      constructor() {
        let {
          limit: TT = lT,
          windowMs: kT = MT,
          spacingMs: cT = KT,
          now: OT = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = TT, this.windowMs = kT, this.spacingMs = cT, this.now = OT
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const TT of this.priority) TT.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const TT = this.now();
        this.sent.push(TT), this.lastSentAt = TT, this.schedule(), this.notify()
      }
      addPriority(TT) {
        return this.priority.add(TT), () => {
          this.priority.delete(TT)
        }
      }
      subscribe(TT) {
        return this.listeners.add(TT), () => {
          this.listeners.delete(TT)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const TT of this.priority)
          if (TT.waiting()) return !0;
        return !1
      }
      prune() {
        const TT = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= TT;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const TT = this.now(),
          kT = this.lastSentAt + this.spacingMs,
          cT = Math.min(kT > TT ? kT : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        cT !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, cT - TT)))
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38379: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT
    });
    class lT {
      constructor(TT, kT, cT) {
        this.nt = TT, this.beforeOpen = kT, this.afterClose = cT, this.open = !1, this.yv = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.yv && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(TT) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(TT)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.yv = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.yv || (this.snapshot = this.buildSnapshot(), this.nt(this.snapshot))
      }
    }
  },
  38486: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      SkyblockEntityFacing: () => yT,
      needsSkyblockEntityFacing: () => OT
    });
    var lT = cT(608),
      MT = cT(4235),
      KT = cT(38489);

    function OT(TT, kT) {
      if (TT.metaInfo === lT.c || "Iron Guardian" === TT.type || "Gold Guardian" === TT.type) return !0;
      if ("Pig" === TT.type) return "sitting" === TT.pose;
      if ("Person" !== TT.meshKind || void 0 === TT.meshOpts) return !1;
      let cT = null === kT || void 0 === kT ? void 0 : kT.get(TT.meshOpts);
      if (void 0 === cT) {
        var KT, OT;
        const lT = (0, MT.g)(TT);
        cT = !1, "pig_napoleon" === (null === lT || void 0 === lT || null === (KT = lT.opts.textures) || void 0 === KT ? void 0 : KT.head) ? cT = !0 : "npc_pig_head" === (null === lT || void 0 === lT || null === (OT = lT.opts.textures) || void 0 === OT ? void 0 : OT.head) && (cT = "sitting" === lT.opts.pose || "sitting"), kT && (kT.size >= 256 && kT.clear(), kT.set(TT.meshOpts, cT))
      }
      return "sitting" === cT ? "sitting" === TT.pose : cT
    }(0, KT.h)("skyblock", ((TT, kT) => {
      kT.setFacingTolerance(OT(TT) ? 0 : null)
    }));
    class yT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = TT, this.alsoVisit = kT, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = TT => {
          var kT;
          const cT = this.api.getEntityInfo(TT);
          cT && (OT(cT, this.meshFacingCache) && (this.api.setFacingTolerance(TT, 0), this.nextFacing.add(TT)), null === (kT = this.alsoVisit) || void 0 === kT || kT.call(this, TT, cT))
        }
      }
      UA() {
        const {
          api: TT
        } = this, kT = this.nextFacing;
        TT.forEachEntity(this.visit);
        for (const cT of this.facing) kT.has(cT) || TT.setFacingTolerance(cT, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = kT
      }
      dispose() {
        for (const TT of this.facing) this.api.setFacingTolerance(TT, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38372: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => ff
    });
    const lT = "island";
    var MT = cT(339);
    const KT = (0, MT.ub)([0, 0, -1]),
      OT = [{
        name: "S",
        bearing: (0, MT.ub)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, MT.ub)([-1, 0, 0])
      }, {
        name: "N",
        bearing: KT
      }, {
        name: "W",
        bearing: (0, MT.ub)([1, 0, 0])
      }];

    function yT(TT, kT, cT) {
      return [100 * (cT.mapMaxX - TT) / (cT.mapMaxX - cT.mapMinX), 100 * (kT - cT.mapMinZ) / (cT.mapMaxZ - cT.mapMinZ)]
    }

    function fT(TT, kT, cT) {
      const MT = "local" === kT,
        KT = TT.background,
        OT = kT => KT ? yT(kT[0] - TT.mapOrigin[0], kT[2] - TT.mapOrigin[2], KT.bounds) : [50, 50],
        fT = (TT.insideDungeon ? [] : TT.landmarks).map((TT => {
          var kT, lT;
          return {
            id: TT.id,
            name: cT(TT.visited && TT.nameKey ? null !== (kT = TT.mapLabelKey) && void 0 !== kT ? kT : TT.nameKey : "skyblockGame:mapUnknown"),
            icon: TT.visited && null !== (lT = TT.icon) && void 0 !== lT ? lT : "unknown",
            visited: TT.visited,
            current: !1,
            position: OT(TT.position),
            travelKind: "landmark",
            travelId: TT.id
          }
        })),
        IT = TT.zones.map((kT => {
          var lT;
          return {
            id: kT.id,
            name: cT(kT.visited && kT.nameKey ? kT.nameKey : "skyblockGame:mapUnknown"),
            icon: kT.visited && null !== (lT = kT.icon) && void 0 !== lT ? lT : "unknown",
            visited: kT.visited,
            current: kT.id === TT.zoneId,
            position: kT.position,
            thumbnail: kT.visited ? kT.id : void 0,
            travelKind: "zone",
            travelId: kT.id
          }
        })),
        AT = TT.insideDungeon || !KT ? [] : TT.portals.map((TT => {
          var kT;
          return {
            id: TT.id,
            name: cT(null !== (kT = TT.nameKey) && void 0 !== kT ? kT : "skyblockGame:mapUnknown"),
            icon: TT.visited ? "dungeons" === TT.destination ? "portal_orange" : "portal" : "unknown",
            visited: TT.visited,
            current: !1,
            position: OT(TT.position),
            colour: TT.colour,
            travelKind: "zone",
            travelId: TT.destination
          }
        })),
        CT = MT ? fT : IT,
        jT = CT.filter((TT => TT.visited)).length,
        vT = KT ? (KT.bounds.mapMaxX - KT.bounds.mapMinX) / (KT.bounds.mapMaxZ - KT.bounds.mapMinZ) : 2,
        tT = KT ? JSON.stringify([KT.bounds, TT.mapOrigin]) : "";
      return {
        local: MT,
        points: CT,
        portals: MT ? AT : [],
        progress: CT.length ? cT("skyblockGame:mapDiscovered", {
          current: String(jT),
          total: String(CT.length)
        }) : null,
        percent: CT.length ? 100 * jT / CT.length : 0,
        canTravel: [...CT, ...MT ? AT : []].some((TT => TT.visited && !TT.current)),
        noLandmarks: MT && !TT.insideDungeon && 0 === fT.length,
        background: KT ? {
          imageKey: KT.imageKey,
          fallbackImageKey: TT.zoneId,
          geometryKey: tT,
          label: cT(KT.labelKey),
          colour: KT.backgroundColour,
          ratio: vT
        } : null,
        connections: xT(TT.zones),
        minimap: KT ? {
          imageKey: KT.imageKey,
          fallbackImageKey: TT.zoneId,
          geometryKey: tT,
          label: cT(KT.labelKey),
          colour: KT.backgroundColour,
          caption: cT(TT.zoneId === lT ? "skyblockGame:zoneIsland" : KT.labelKey),
          width: (KT.bounds.mapMaxX - KT.bounds.mapMinX) / KT.minimapSpan * 100 + "%",
          height: (KT.bounds.mapMaxZ - KT.bounds.mapMinZ) / KT.minimapSpan * 100 + "%",
          markers: [...fT, ...AT]
        } : null
      }
    }

    function xT(TT) {
      const kT = new Set;
      return TT.flatMap((cT => cT.connections.flatMap((lT => {
        const MT = TT.find((TT => TT.id === lT)),
          KT = [cT.id, lT].sort().join("|");
        return !MT || kT.has(KT) ? [] : (kT.add(KT), [{
          id: `${cT.id}-${lT}`,
          start: cT.position,
          end: MT.position,
          explored: cT.visited && MT.visited
        }])
      }))))
    }
    var IT = cT(38379);
    class AT extends IT.b {}
    const CT = "skyblockMapView";
    class jT extends AT {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, lT, MT), this.requestTravel = kT, this.translate = cT, this.now = KT, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = TT => {
          this.tab = TT, this.feedbackKey = "", this.emit()
        }, this.travel = (TT, kT) => {
          if (!this.map || this.pending || this.yv) return;
          const cT = ("zone" === TT ? this.map.zones : this.map.landmarks).find((TT => TT.id === kT));
          if (cT) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in cT && !cT.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (cT.visited)
              if ("zone" === TT && kT === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const cT = ++this.nextRequestId;
                this.pending = {
                  requestId: cT,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: TT,
                  id: kT,
                  requestId: cT
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
      setTranslator(TT) {
        this.translate = TT, this.emit()
      }
      Av(TT) {
        var kT;
        if (!this.yv)
          if ("entities" !== TT.kind)
            if ("open" !== TT.kind) {
              var cT, lT;
              if ("snapshot" === TT.kind)(null === (cT = TT.snapshot) || void 0 === cT ? void 0 : cT.zoneId) !== (null === (lT = this.map) || void 0 === lT ? void 0 : lT.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = TT.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === TT.kind) {
                var MT;
                TT.requestId === (null === (MT = this.pending) || void 0 === MT ? void 0 : MT.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (TT.requestId === (null === (kT = this.pending) || void 0 === kT ? void 0 : kT.requestId)) {
                var KT;
                this.pending = null, this.feedbackKey = null !== (KT = TT.errorKey) && void 0 !== KT ? KT : "", null === TT.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = TT.entities
      }
      UA() {
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
          presentation: this.map ? fT(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const vT = 67.5 * Math.PI / 180;

    function tT(TT, kT) {
      const cT = Math.abs(TT);
      if (cT > vT || kT.trackHalfWidth <= 0) return null;
      const lT = kT.trackHalfWidth,
        MT = kT.screenHalfWidth / (kT.tanHalfFovX * Math.max(.5, Math.cos(kT.pitch))),
        KT = Math.min(Math.atan(.6 * lT / MT), .75 * vT),
        OT = MT * Math.tan(KT);
      let yT;
      if (cT <= KT) yT = MT * Math.tan(cT);
      else {
        const TT = vT - KT,
          kT = Math.max(0, MT * TT / (Math.cos(KT) ** 2 * (lT - OT)) - 1),
          fT = (cT - KT) / TT;
        yT = OT + (lT - OT) * (1 + kT) * fT / (1 + kT * fT)
      }
      return 50 + Math.sign(TT) * yT * 50 / lT
    }
    class hT {
      constructor(TT, kT) {
        this.map = TT, this.visited = kT, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = kT ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const TT = this.map.getSnapshot().map;
        return !TT || TT.insideDungeon ? [] : TT.landmarks.filter((TT => TT.visited === this.visited)).map((TT => {
          var kT, cT;
          return {
            id: `landmark:${TT.id}`,
            position: TT.position,
            icon: null !== (kT = TT.icon) && void 0 !== kT ? kT : "unknown",
            nameKey: null !== (cT = TT.nameKey) && void 0 !== cT ? cT : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class NT {
      constructor(TT, kT, cT, lT) {
        this.map = TT, this.kind = kT, this.position = cT, this.alive = lT, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = kT, this.range = "enemy" === kT ? 48 : 64, this.limit = 12
      }
      kN(TT) {
        if ("enemy" !== this.kind || this.alive(TT.yM)) return this.position(TT.yM)
      }
      getPoints() {
        const TT = [];
        for (const lT of this.map.getEntities()) {
          if (lT.kind !== this.kind || "enemy" === this.kind && !this.alive(lT.compassEntityId)) continue;
          const MT = this.position(lT.compassEntityId);
          var kT, cT;
          if (MT) TT.push({
            id: `${this.kind}:${lT.compassEntityId}`,
            yM: lT.compassEntityId,
            kind: this.kind,
            icon: null !== (kT = lT.icon) && void 0 !== kT ? kT : lT.npcSkin ? `npc_${lT.npcSkin}` : this.kind,
            displayName: lT.displayName,
            position: MT,
            nameKey: null !== (cT = lT.nameKey) && void 0 !== cT ? cT : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return TT
      }
    }
    class QT {
      constructor(TT) {
        this.map = TT, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const TT = this.map.getSnapshot().map;
        return !TT || TT.insideDungeon ? [] : TT.portals.map((TT => {
          var kT;
          return {
            id: "portal:" + TT.id,
            kind: "portal",
            position: TT.position,
            nameKey: null !== (kT = TT.nameKey) && void 0 !== kT ? kT : "skyblockGame:compassUnvisitedZone",
            icon: TT.visited ? "dungeons" === TT.destination ? "portal_orange" : "portal" : "unknown",
            colour: TT.colour
          }
        }))
      }
    }
    class ST {
      constructor(TT) {
        this.target = TT, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const TT = this.target();
        return TT ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: TT.position,
          nameKey: TT.nameKey
        }] : []
      }
    }

    function DT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.position;
      const KT = lT[0] - kT[0],
        OT = lT[2] - kT[2];
      return {
        ...TT,
        position: lT,
        offset: MT.d.computeShortestRotation(cT, (0, MT.ub)([KT, 0, OT])),
        distance: Math.hypot(KT, lT[1] - kT[1], OT)
      }
    }
    let aT;

    function FT(TT, kT) {
      var cT;
      return (null === (cT = aT) || void 0 === cT ? void 0 : cT.locale) !== kT && (aT = {
        locale: kT,
        near: new Intl.NumberFormat(kT, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(kT, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (TT < 10 ? aT.near : aT.far).format(TT)
    }
    class rT {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(TT) {
        return this.providers.set(TT.id, TT), this.refreshAt = 0, () => {
          this.providers.get(TT.id) === TT && (this.providers.delete(TT.id), this.refreshAt = 0)
        }
      }
      frame(TT, kT, cT) {
        if (cT >= this.refreshAt) {
          this.refreshAt = cT + 200, this.candidates = [];
          for (const kT of this.providers.values()) {
            if (!kT.enabled) continue;
            const cT = kT.getPoints().map((kT => {
              const cT = kT.position;
              return {
                point: kT,
                distance: Math.hypot(cT[0] - TT[0], cT[1] - TT[1], cT[2] - TT[2])
              }
            })).filter((TT => TT.distance <= kT.range)).sort(((TT, kT) => TT.distance - kT.distance)).slice(0, kT.limit);
            for (const {
                point: TT
              }
              of cT) this.candidates.push({
              provider: kT,
              point: TT
            })
          }
        }
        const lT = [];
        for (const {
            point: MT,
            provider: KT
          }
          of this.candidates) {
          if (!KT.enabled) continue;
          const cT = KT.kN ? KT.kN(MT) : MT.position;
          if (cT) {
            const KT = DT(MT, TT, kT, cT);
            Math.abs(KT.offset) <= vT && lT.push(KT)
          }
        }
        return lT
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var PT = cT(36432),
      wT = cT(71);
    const mT = [{
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
      bT = mT.length;

    function zT(TT) {
      return TT >= bT ? 1 : TT + 1
    }
    const JT = "skyblockQuests",
      oT = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      HT = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function eT(TT) {
      let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const cT = Math.max(0, Math.floor(TT)),
        lT = Math.floor(cT % 1e3 / 100),
        MT = Math.floor(cT / 1e3),
        KT = MT % 60,
        OT = Math.floor(MT / 60),
        yT = OT % 60,
        fT = Math.floor(OT / 60),
        xT = TT => TT < 10 ? `0${TT}` : String(TT),
        IT = kT ? `.${lT}` : "";
      return fT > 0 ? `${fT}:${xT(yT)}:${xT(KT)}${IT}` : `${yT}:${xT(KT)}${IT}`
    }
    const GT = "devquests",
      VT = "none",
      ET = {
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
      ZT = "Compressed Messy Stone",
      uT = {
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
      XT = ["Stone", "Diorite", "Andesite", "Granite"],
      dT = new Set(XT),
      LT = (Object.keys(uT), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const RT = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function gT(TT, kT) {
      const cT = Math.floor(5 * TT / (2 * kT + 1));
      return Math.min(4, Math.max(0, cT))
    }
    var UT = cT(1244);
    var YT = cT(36174);
    var BT = cT(36423),
      WT = cT(36),
      nT = cT(8911);
    const pT = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      iT = 1e3;

    function qT(TT) {
      return Math.max(0, TT)
    }

    function sT(TT) {
      return 1 + .01 * qT(TT)
    }

    function Tk(TT) {
      return 1 + .005 * qT(TT)
    }

    function kk(TT) {
      return 1 + .005 * qT(TT)
    }

    function ck(TT) {
      return .01 * qT(TT)
    }

    function lk(TT) {
      return 150 / (150 + qT(TT))
    }

    function Mk(TT) {
      return 1 + .002 * qT(TT)
    }

    function Kk(TT) {
      return Math.round(10 * TT) / 10
    }

    function Ok(TT, kT) {
      switch (TT) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: Kk(100 * (Tk(kT) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: Kk(100 * (sT(kT) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: Kk(100 * (kk(kT) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: Kk(100 * ck(kT))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: Kk(100 * (1 - lk(kT)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: Kk(100 * (Mk(kT) - 1))
          }
      }
    }

    function yk(TT) {
      return "farming" === TT ? 200 : 100
    }

    function fk(TT, kT) {
      if (!Number.isSafeInteger(TT) || TT < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const cT = yk(kT),
        lT = TT => function(TT, kT) {
          return yk(TT) * kT * (kT + 1) / 2
        }(kT, TT);
      let MT = Math.min(iT, Math.floor((Math.sqrt(8 * TT / cT + 1) - 1) / 2));
      return MT < iT && lT(MT + 1) <= TT ? MT++ : lT(MT) > TT && MT--, {
        totalXp: TT,
        level: MT,
        xpIntoLevel: TT - lT(MT),
        xpForNextLevel: MT === iT ? null : cT * (MT + 1)
      }
    }
    const xk = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function Ik(TT) {
      return xk.has(TT)
    }
    const Ak = new Set(MT.gb);

    function Ck(TT) {
      return Ak.has(TT)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const jk = {
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
      vk = {
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
      tk = {
        ...vk,
        ...Object.fromEntries(Object.entries(LT).map((TT => {
          let [kT, cT] = TT;
          return [kT, 9 * vk[cT]]
        })))
      },
      hk = {
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
      Nk = {
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
    const Qk = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      Sk = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function Dk(TT) {
      return `rgb(${Sk[TT].join(", ")})`
    }

    function ak(TT, kT, cT) {
      if (!cT) return TT(kT);
      const lT = {};
      for (const [MT, KT] of Object.entries(cT)) lT[MT] = "string" === typeof KT ? KT : TT(KT.translationKey);
      return TT(kT, lT)
    }
    class Fk {
      constructor(TT, kT) {
        this.now = TT, this.getJournal = kT, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.ty = !1, this.onShown = () => {}
      }
      enqueue(TT) {
        const kT = rk(TT);
        if (kT) this.pending.push(TT);
        else {
          const kT = this.pending.findIndex(rk);
          this.pending.splice(-1 === kT ? this.pending.length : kT, 0, TT)
        }
        return (null === this.current || null !== this.followUp && !kT) && (this.advance(), !0)
      }
      setHeld(TT) {
        return this.ty = TT, !TT && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      UA() {
        const TT = this.getJournal(),
          kT = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === kT ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === kT || void 0 === kT ? void 0 : kT.kind) && TT && TT.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === kT || void 0 === kT ? void 0 : kT.kind)) {
          const TT = this.findFollowUp(this.current);
          if ("step" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || TT.questId !== kT.questId || TT.step.id !== kT.step.id) return this.showFollowUp(TT, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(TT, kT, cT) {
        var lT, MT, KT, OT;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, TT, cT);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, TT);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, TT, kT);
        const {
          questCompletionKind: yT,
          questCompletionNameKey: fT
        } = this.current, xT = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, IT = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, AT = "step" === (null === (lT = this.followUp) || void 0 === lT ? void 0 : lT.kind) ? this.followUp : null, CT = "explore" === (null === (MT = this.followUp) || void 0 === MT ? void 0 : MT.kind);
        let jT;
        return jT = CT ? TT("skyblockGame:questExploreTitle") : null !== AT ? "quest" === yT ? TT("skyblockGame:questNextQuestTitle", {
          quest: TT(AT.questNameKey)
        }) : TT("skyblockGame:questNextStepTitle") : TT("started" === yT ? "skyblockGame:questStartedTitle" : "quest" === yT ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? yT : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: jT,
          name: CT ? kT("skyblockGame:questExploreName") : null !== AT ? ak(kT, AT.step.nameKey, AT.step.nameParams) : ak(kT, fT, xT),
          description: CT ? kT("skyblockGame:questExploreDescription") : null === AT ? null : ak(kT, AT.step.descriptionKey, AT.step.descriptionParams),
          reward: null === this.followUp && IT > 0 ? kT("skyblockGame:questCoinRewardSuffix", {
            amount: IT.toLocaleString(cT)
          }) : null,
          iconItem: null !== (KT = null === AT || void 0 === AT ? void 0 : AT.step.questIconItem) && void 0 !== KT ? KT : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== AT && (null === (OT = this.getJournal()) || void 0 === OT ? void 0 : OT.trackedQuestId) === AT.questId ? AT.step.nameKey : null
        }
      }
      getSkillLevelView(TT, kT, cT) {
        let {
          skill: lT,
          beforeLevel: MT,
          level: KT
        } = TT;
        const OT = Ok(lT, MT),
          yT = Ok(lT, KT);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: kT(`skyblockGame:${lT}`),
          name: kT("skyblockGame:skillLevelUp", {
            to: KT.toLocaleString(cT)
          }),
          description: OT.percent === yT.percent ? null : kT(`${yT.translationKey}Change`, {
            before: OT.percent.toLocaleString(cT),
            after: yT.percent.toLocaleString(cT)
          }),
          reward: null,
          iconItem: Qk[lT],
          accent: Dk(lT),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(TT, kT) {
        let {
          landmarkNameKey: cT
        } = TT;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: kT("skyblockGame:landmarkDiscovered"),
          name: kT(cT),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(TT, kT, cT) {
        let {
          titleKey: lT,
          textKey: MT,
          params: KT = {},
          nameKeys: OT = {},
          iconItem: yT = null
        } = TT;
        const fT = {
          ...KT
        };
        for (const [xT, IT] of Object.entries(OT)) fT[xT] = kT(IT);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: kT(lT),
          name: cT(MT, fT),
          description: null,
          reward: null,
          iconItem: yT,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var TT;
        if (null !== this.followUp) return 5600;
        switch (null === (TT = this.current) || void 0 === TT ? void 0 : TT.questCompletionKind) {
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
      showFollowUp(TT, kT) {
        null === TT || this.ty ? this.advance() : (this.followUp = TT, this.token++, this.shownAt = this.now(), this.expiresAt = null !== kT && void 0 !== kT ? kT : this.shownAt + this.durationMs())
      }
      findFollowUp(TT) {
        var kT;
        const cT = this.getJournal();
        if (!cT || this.hasPendingQuestPopup() || rk(TT)) return null;
        const lT = "started" === TT.questCompletionKind ? cT.active.some((kT => kT.id === TT.questCompletionQuestId)) : "quest" === TT.questCompletionKind ? cT.completed.some((kT => kT.id === TT.questCompletionQuestId)) : [...cT.active, ...cT.completed].some((kT => kT.id === TT.questCompletionQuestId && kT.subquests.some((kT => kT.id === TT.questCompletionStepId && "completed" === kT.status))));
        if (!lT) return null;
        if ("quest" === TT.questCompletionKind && 0 === cT.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const MT = cT.active.find((TT => TT.id === cT.trackedQuestId)),
          KT = null !== (kT = null === MT || void 0 === MT ? void 0 : MT.subquests.find((TT => "ready" === TT.status))) && void 0 !== kT ? kT : null === MT || void 0 === MT ? void 0 : MT.subquests.find((TT => "active" === TT.status));
        return KT ? {
          kind: "step",
          questId: MT.id,
          questNameKey: MT.nameKey,
          step: KT
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((TT => !rk(TT)))
      }
      advance() {
        var TT;
        this.current = this.ty ? null : null !== (TT = this.pending.shift()) && void 0 !== TT ? TT : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function rk(TT) {
      return Pk(TT.questCompletionKind)
    }

    function Pk(TT) {
      return "skillLevel" === TT || "landmark" === TT || "npcNote" === TT
    }
    var wk = cT(38388);
    const mk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      bk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      zk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      Jk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      Hk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var ek = cT(38394);
    const Gk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      Vk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const Ek = cT.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const Zk = cT.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      uk = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var Xk = cT(18538),
      dk = cT(20603),
      Lk = cT(22862),
      Rk = cT(24435),
      gk = cT(26143);
    const Uk = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: Xk,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: dk,
      cow: Hk,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: cT(26162),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: mk,
      fishing_1: mk,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: bk,
      guardian_iron: zk,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: Lk,
      mines: Rk,
      mining_1: Rk,
      npc: Jk,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: Hk,
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
      npc_gold_guardian: bk,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: zk,
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
      npc_tentacle_guy: ek,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: Gk,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: Ek,
      quest_talk: Zk,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: uk,
      watermelon: gk
    };

    function Yk(TT, kT) {
      const cT = document.createElement("img");
      return cT.className = kT, cT.src = TT, cT.alt = "", cT.draggable = !1, cT
    }

    function Bk(TT) {
      var kT;
      const cT = null !== (kT = Uk[TT]) && void 0 !== kT ? kT : TT.startsWith("npc_") ? Jk : uk;
      if ("portal" !== TT) return Yk(cT, "SkyblockMapIcon");
      const lT = document.createElement("span");
      lT.className = "SkyblockMapIcon Portal";
      const MT = document.createElement("span");
      return MT.className = "SkyblockMapIconTint", MT.style.maskImage = MT.style.webkitMaskImage = `url("${Vk}")`, lT.append(Yk(cT, "SkyblockMapIconLayer"), MT, Yk(Vk, "SkyblockMapIconLayer SkyblockMapIconShade")), lT
    }
    var Wk = cT(38359),
      nk = cT(4243);
    const pk = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function ik(TT) {
      const kT = new nk.i(TT);
      return {
        radius: 45,
        squareness: 3,
        wobbles: pk.map((TT => {
          let {
            lobes: cT,
            amount: lT
          } = TT;
          return {
            lobes: cT[Math.floor(kT.next() * cT.length)],
            amount: lT[0] + kT.next() * (lT[1] - lT[0]),
            phase: 2 * kT.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function qk(TT) {
      let {
        radius: kT,
        squareness: cT,
        wobbles: lT,
        samples: MT
      } = TT;
      const KT = [];
      for (let OT = 0; OT < MT; OT++) {
        const TT = 2 * Math.PI * OT / MT,
          yT = Math.cos(TT),
          fT = Math.sin(TT),
          xT = kT * (Math.abs(yT) ** cT + Math.abs(fT) ** cT) ** (-1 / cT) * lT.reduce(((kT, cT) => {
            let {
              lobes: lT,
              amount: MT,
              phase: KT
            } = cT;
            return kT + MT * Math.sin(lT * TT + KT)
          }), 1);
        KT.push(`${(50+xT*yT).toFixed(2)} ${(50+xT*fT).toFixed(2)}`)
      }
      return `M${KT.join("L")}Z`
    }
    const sk = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Tc {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.yv = !1, this.mountCompass = TT => {
          var kT;
          if (null === (kT = this.stopLayout) || void 0 === kT || kT.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !TT || this.yv) return;
          const cT = TT.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: TT,
            track: cT,
            label: TT.querySelector(".SkyblockCompassLabel")
          }, cT.replaceChildren();
          for (let MT = 0; MT < 4; MT++) {
            const TT = document.createElement("span");
            TT.className = "SkyblockCompassCardinal", cT.appendChild(TT), this.cardinals.push(TT)
          }
          const lT = (0, Wk.b)(sk, [TT], this.layout);
          this.stopLayout = () => {
            lT(), cT.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = TT => {
          this.terrain = this.yv ? null : TT, this.render(this.frame)
        }, this.mountMinimapSearchArea = TT => {
          this.mountSearchArea("minimap", TT)
        }, this.mountMapSearchArea = TT => {
          this.mountSearchArea("map", TT)
        }, this.mountPlayer = TT => {
          this.player = this.yv ? null : TT, this.render(this.frame)
        }, this.mountWaypoint = TT => {
          var kT, cT;
          if (null === (kT = this.stopWaypoint) || void 0 === kT || kT.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !TT || this.yv) return;
          const lT = TT.querySelector(".SkyblockQuestWaypointMarker");
          lT.replaceChildren(Bk("quest")), this.markerIcon = "quest", this.waypoint = {
            root: TT,
            marker: lT,
            clip: TT.querySelector(".SkyblockQuestWaypointTextClip"),
            text: TT.querySelector(".SkyblockQuestWaypointText"),
            label: TT.querySelector(".SkyblockQuestWaypointLabel"),
            distance: TT.querySelector(".SkyblockQuestWaypointDistance"),
            hint: TT.querySelector(".SkyblockQuestWaypointHint")
          };
          const MT = () => {
              this.waypointMarkerSize = {
                width: lT.offsetWidth,
                height: lT.offsetHeight
              }, this.waypointInset = {
                x: lT.offsetWidth / 2 + 8,
                top: lT.offsetHeight + 8,
                bottom: 8
              }
            },
            KT = new ResizeObserver((() => {
              MT(), this.render(this.frame)
            }));
          KT.observe(lT, {
            box: "border-box"
          });
          const OT = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", OT), null === (cT = window.visualViewport) || void 0 === cT || cT.addEventListener("resize", OT), this.stopWaypoint = () => {
            var TT;
            KT.disconnect(), window.removeEventListener("resize", OT), null === (TT = window.visualViewport) || void 0 === TT || TT.removeEventListener("resize", OT)
          }, OT(), MT(), this.render(this.frame)
        }, this.mountWaypointOrigin = TT => {
          var kT;
          if (null === (kT = this.stopWaypointOrigin) || void 0 === kT || kT.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = TT && !this.yv ? Number(TT.dataset.notificationToken) : null, TT && !this.yv && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const kT = {
              nameKey: TT.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = kT;
            const cT = () => {
                const cT = TT.getBoundingClientRect();
                kT.x = (cT.left + cT.width / 2) / window.innerWidth * 100, kT.y = (cT.top + cT.height / 2) / window.innerHeight * 100
              },
              lT = new ResizeObserver(cT);
            lT.observe(TT.parentElement), lT.observe(TT), window.addEventListener("resize", cT), this.stopWaypointOrigin = () => {
              lT.disconnect(), window.removeEventListener("resize", cT)
            }, cT()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const TT = this.compass.root,
            kT = getComputedStyle(TT),
            cT = getComputedStyle(document.documentElement),
            lT = parseFloat(cT.fontSize),
            MT = parseFloat(kT.getPropertyValue("--compass-icon-size")) * lT,
            KT = "1" === kT.getPropertyValue("--compass-fit-top").trim(),
            OT = KT ? 1 : 8,
            yT = Array.from(document.querySelectorAll(sk), (TT => {
              var kT;
              return (null !== (kT = TT.querySelector(".MiddleTextTop")) && void 0 !== kT ? kT : TT).getBoundingClientRect()
            })).filter((TT => TT.width > 0 && TT.height > 0));
          let fT = (parseFloat(cT.getPropertyValue("--notchTop")) || 0) + OT,
            xT = "";
          if (KT) {
            const kT = window.innerWidth / 2,
              cT = TT.getBoundingClientRect().height,
              KT = [fT, ...yT.map((TT => Math.max(fT, TT.bottom + OT)))].sort(((TT, kT) => TT - kT));
            for (const TT of KT) {
              let KT = kT - 8;
              for (const lT of yT) lT.bottom + OT <= TT || lT.top >= TT + cT + OT || (KT = Math.min(KT, lT.right <= kT ? kT - lT.right - 8 : lT.left - kT - 8));
              const IT = 2 * KT - MT;
              if (IT >= 16 * lT) {
                xT = `${IT}px`, fT = TT;
                break
              }
            }
          }
          TT.style.maxWidth !== xT && (TT.style.maxWidth = xT);
          const IT = TT.getBoundingClientRect(),
            AT = this.compassSize.trackHalfWidth;
          if (IT.width > 0) {
            const TT = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: TT.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * MT / TT.width
          }
          if (!xT)
            for (const CT of yT) CT.right > IT.left - 8 && CT.left < IT.right + 8 && (fT = Math.max(fT, CT.bottom + OT));
          TT.style.top = `${fT}px`, this.compassSize.trackHalfWidth !== AT && this.render(this.frame)
        }
      }
      mountSearchArea(TT, kT) {
        this.searchAreas[TT] = this.yv ? null : kT, this.render(this.frame)
      }
      render(TT) {
        if (this.yv) return;
        if (this.frame = TT, this.compass && (kc(this.compass.root, !TT), TT)) {
          const kT = this.compassSize.trackHalfWidth / 50;
          TT.compass.cardinals.forEach(((TT, cT) => {
            const lT = this.cardinals[cT];
            lT.textContent !== TT.name && (lT.textContent = TT.name), kc(lT, TT.hidden), lT.style.translate = TT.left * kT + "px"
          }));
          const cT = new Set;
          TT.compass.markers.forEach(((lT, MT) => {
            var KT;
            cT.add(lT.id);
            let OT = this.markers.get(lT.id);
            OT || (OT = document.createElement("span"), OT.className = "SkyblockCompassMarker", this.markers.set(lT.id, OT), this.compass.track.appendChild(OT)), OT.dataset.icon !== lT.icon && (OT.dataset.icon = lT.icon, OT.replaceChildren(Bk(lT.icon))), OT.style.color = null !== (KT = lT.colour) && void 0 !== KT ? KT : "", OT.style.translate = lT.left * kT + "px", OT.style.zIndex = String(TT.compass.markers.length - MT), OT.title !== lT.name && (OT.title = lT.name)
          }));
          for (const [TT, lT] of this.markers) cT.has(TT) || (lT.remove(), this.markers.delete(TT));
          this.compass.label.textContent !== TT.compass.label && (this.compass.label.textContent = TT.compass.label)
        }
        this.terrain && (kc(this.terrain, !(null !== TT && void 0 !== TT && TT.minimap)), null !== TT && void 0 !== TT && TT.minimap && (this.terrain.style.transform = TT.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", TT.minimap.iconRotation)));
        const kT = null === TT || void 0 === TT ? void 0 : TT.searchArea;
        for (const cT of [this.searchAreas.minimap, this.searchAreas.map])
          if (cT && (kc(cT, !kT), kT)) {
            if (this.searchAreaPath.seed !== kT.shapeSeed && (this.searchAreaPath = {
                seed: kT.shapeSeed,
                d: qk(ik(kT.shapeSeed))
              }), cT.dataset.shapeSeed !== kT.shapeSeed) {
              cT.dataset.shapeSeed = kT.shapeSeed;
              for (const TT of cT.querySelectorAll("path")) TT.setAttribute("d", this.searchAreaPath.d)
            }
            cT.style.left = `${kT.left}%`, cT.style.top = `${kT.top}%`, cT.style.width = `${kT.width}%`, cT.style.height = `${kT.height}%`
          } if (this.player && (kc(this.player, !(null !== TT && void 0 !== TT && TT.player) || TT.player.hidden), null !== TT && void 0 !== TT && TT.player && (this.player.style.left = `${TT.player.left}%`, this.player.style.top = `${TT.player.top}%`, this.player.style.setProperty("--map-player-rotation", TT.player.rotation))), this.waypoint) {
          const {
            root: kT,
            marker: cT,
            clip: lT,
            text: MT,
            label: KT,
            distance: OT,
            hint: yT
          } = this.waypoint, fT = !(null !== TT && void 0 !== TT && TT.waypoint) || null !== TT.waypoint.popupToken && TT.waypoint.popupToken !== this.waypointOriginToken;
          kc(kT, fT);
          let xT = 1;
          const IT = this.waypointLaunch;
          if (!fT && IT && TT.waypoint.nameKey === IT.nameKey) {
            const TT = performance.now();
            IT.startedAt ??= TT, xT = Math.min(1, Math.max(0, (TT - IT.startedAt - 450) / 1e3)), cT.style.opacity = String(Math.min(1, (TT - IT.startedAt) / 150)), 1 === xT && (this.waypointLaunch = null)
          } else cT.style.opacity = "", IT && null !== IT.startedAt && (this.waypointLaunch = null);
          if (kT.classList.toggle("Launching", xT < 1), null !== TT && void 0 !== TT && TT.waypoint) {
            const kT = this.waypointInset,
              fT = "quest_talk" === TT.waypoint.markerIcon ? function(TT, kT, cT) {
                if (!TT.text || null === TT.blockHeight || 0 === TT.nearness) return TT;
                const lT = TT.blockHeight / 100 * cT.height,
                  MT = -TT.nearness * (cc * lT + kT.width / 2),
                  KT = TT.nearness * (lc * lT + kT.height / 2);
                return {
                  ...TT,
                  text: {
                    x: TT.text.x + MT / cT.width * 100,
                    y: TT.text.y + KT / cT.height * 100
                  }
                }
              }(TT.waypoint, this.waypointMarkerSize, this.viewport) : TT.waypoint,
              AT = (0, wk.d)(fT, kT, this.viewport),
              CT = xT * xT * (3 - 2 * xT),
              jT = xT < 1 ? IT.x + (AT.x - IT.x) * CT : AT.x,
              vT = xT < 1 ? IT.y + (AT.y - IT.y) * CT : AT.y;
            cT.style.translate = `${jT}vw ${vT}vh`, lT.style.clipPath = `inset(${kT.top}px ${kT.x}px ${kT.bottom}px)`, kc(MT, xT < 1 || !TT.waypoint.text), MT.style.opacity = String(1 - TT.waypoint.nearness), TT.waypoint.text && (MT.style.translate = `${TT.waypoint.text.x}vw ${TT.waypoint.text.y}vh`), KT.textContent !== TT.waypoint.name && (KT.textContent = TT.waypoint.name), this.markerIcon !== TT.waypoint.markerIcon && (this.markerIcon = TT.waypoint.markerIcon, cT.replaceChildren(Bk(this.markerIcon))), OT.textContent !== TT.waypoint.distance && (OT.textContent = TT.waypoint.distance), kc(yT, null === TT.waypoint.hint), null !== TT.waypoint.hint && yT.textContent !== TT.waypoint.hint && (yT.textContent = TT.waypoint.hint)
          }
        }
      }
      dispose() {
        var TT, kT;
        this.mountWaypointOrigin(null), this.render(null), null === (TT = this.stopLayout) || void 0 === TT || TT.call(this), this.stopLayout = null, null === (kT = this.stopWaypoint) || void 0 === kT || kT.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.yv = !0
      }
    }

    function kc(TT, kT) {
      TT.hidden !== kT && (TT.hidden = kT)
    }
    const cc = .55,
      lc = .6;
    const Mc = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Kc {
      constructor(TT, kT, cT, lT) {
        this.map = TT, this.quests = kT, this.compass = cT, this.display = new Tc, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.yv = !1, this.snapshot = null, this.texts = new Map, this.translate = lT
      }
      setTranslator(TT, kT) {
        this.translate = TT, this.locale = kT, this.metresFormat = new Intl.NumberFormat(kT), this.texts.clear()
      }
      translateCached(TT, kT) {
        const cT = void 0 === kT ? TT : `${TT} ${kT}`;
        let lT = this.texts.get(cT);
        return void 0 === lT && (this.texts.size >= 500 && this.texts.clear(), lT = this.translate(TT, void 0 === kT ? void 0 : {
          distance: kT
        }), this.texts.set(cT, lT)), lT
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(TT, kT, cT) {
        if (this.yv) return;
        if (!TT) return this.snapshot = null, void this.display.render(null);
        const lT = this.map.getSnapshot().map,
          fT = cT.cameraHeading,
          xT = {
            ...this.display.compassSize,
            tanHalfFovX: cT.tanHalfFovX,
            pitch: cT.cameraPitch
          },
          IT = [];
        if (lT)
          for (const MT of this.compass.frame(TT, fT, kT)) {
            const TT = tT(MT.offset, xT);
            null !== TT && IT.push({
              ...MT,
              left: TT
            })
          }
        const AT = function(TT, kT) {
            const cT = [],
              lT = TT => "quest" === TT.kind ? TT.distance - 1 : TT.distance,
              MT = [...TT].sort(((TT, kT) => lT(TT) - lT(kT) || TT.id.localeCompare(kT.id)));
            for (const KT of MT) {
              let TT = !1;
              if ("quest" !== KT.kind)
                for (const lT of cT)
                  if (Math.abs(lT.left - KT.left) < kT) {
                    TT = !0;
                    break
                  } TT || cT.push(KT)
            }
            return cT
          }(IT, this.display.compassSpacing),
          CT = function(TT) {
            let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              cT = null;
            for (const lT of TT) Math.abs(lT.offset) <= kT && (!cT || lT.distance < cT.distance || lT.distance === cT.distance && Math.abs(lT.offset) < Math.abs(cT.offset)) && (cT = lT);
            return cT
          }(AT),
          jT = TT => {
            var kT;
            return null !== (kT = TT.displayName) && void 0 !== kT ? kT : this.translateCached(TT.nameKey)
          },
          vT = {
            compass: {
              markers: AT.map((TT => ({
                id: TT.id,
                icon: TT.icon,
                colour: TT.colour,
                name: jT(TT),
                left: TT.left
              }))),
              cardinals: OT.map((TT => {
                let {
                  name: kT,
                  bearing: cT
                } = TT;
                const lT = tT(MT.d.computeShortestRotation(fT, cT), xT);
                return {
                  name: kT,
                  left: null !== lT && void 0 !== lT ? lT : 0,
                  hidden: null === lT
                }
              })),
              label: CT ? `${jT(CT)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",FT(CT.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== lT && void 0 !== lT && lT.background) {
          const kT = TT[0] - lT.mapOrigin[0],
            cT = TT[2] - lT.mapOrigin[2],
            {
              rotation: MT,
              transform: OT
            } = function(TT, kT, cT, lT) {
              const [MT, OT] = yT(TT, kT, lT), fT = KT - cT;
              return {
                rotation: fT,
                transform: `rotate(${fT}rad) translate(-${MT}%, -${OT}%)`
              }
            }(kT, cT, fT, lT.background.bounds);
          vT.minimap = {
            transform: OT,
            iconRotation: -MT + "rad"
          };
          const [xT, IT] = yT(kT, cT, lT.background.bounds);
          vT.player = {
            left: xT,
            top: IT,
            hidden: xT < 0 || IT < 0 || xT > 100 || IT > 100,
            rotation: -MT + "rad"
          }
        }
        const {
          waypoint: hT
        } = this.quests.getSnapshot();
        if ("search" === (null === hT || void 0 === hT ? void 0 : hT.questMarkerIcon) && null !== lT && void 0 !== lT && lT.background) {
          const {
            bounds: TT
          } = lT.background, [kT, cT] = yT(hT.position[0] - lT.mapOrigin[0], hT.position[2] - lT.mapOrigin[2], TT);
          vT.searchArea = {
            left: kT,
            top: cT,
            width: 6400 / (TT.mapMaxX - TT.mapMinX),
            height: 6400 / (TT.mapMaxZ - TT.mapMinZ),
            shapeSeed: hT.nameKey
          }
        }
        const NT = this.quests.getNotificationSnapshot(),
          QT = "completion" === (null === NT || void 0 === NT ? void 0 : NT.phase) && !Pk(NT.kind);
        if (hT && !QT) {
          const kT = Math.hypot(...hT.position.map(((kT, cT) => kT - TT[cT]))),
            lT = Math.round(kT),
            MT = "talk" === hT.questMarkerIcon ? Math.min(1, Math.max(0, (10 - kT) / 5)) : 0,
            KT = cT.projectWorldPosToViewport(hT.position),
            OT = KT && cT.projectWorldPosToViewport([hT.position[0], hT.position[1] - 1, hT.position[2]]);
          vT.waypoint = {
            ...cT.projectWorldPosToScreenPos(hT.position),
            text: KT,
            nearness: MT * MT * (3 - 2 * MT),
            blockHeight: KT && OT ? OT.y - KT.y : null,
            name: this.translateCached(hT.nameKey),
            nameKey: hT.nameKey,
            markerIcon: hT.questMarkerIcon ? Mc[hT.questMarkerIcon] : "quest",
            popupToken: (null === NT || void 0 === NT ? void 0 : NT.waypointNameKey) === hT.nameKey ? NT.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(lT)),
            hint: "search" === hT.questMarkerIcon && Math.hypot(hT.position[0] - TT[0], hT.position[2] - TT[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = vT, this.display.render(vT)
      }
      dispose() {
        this.yv = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const Oc = "skyblockSkillsView";
    class yc extends AT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          cT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT => TT,
          lT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => TT;
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = kT, this.translate = cT, this.locale = lT, this.itemName = MT, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }
      }
      setTranslator(TT, kT, cT) {
        this.translate = TT, this.locale = kT, this.itemName = cT, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(TT) {
        let kT = this.skillText.get(TT);
        return kT || (kT = {
          label: this.translate(`skyblockGame:${TT}`),
          description: this.translate(`skyblockGame:${TT}Description`)
        }, this.skillText.set(TT, kT)), kT
      }
      sources(TT) {
        if ("mining" === TT || "fishing" === TT) return this.buildSources(TT);
        let kT = this.sourceText.get(TT);
        return kT || (kT = this.buildSources(TT), this.sourceText.set(TT, kT)), kT
      }
      buildSources(TT) {
        const kT = this.translate;
        return "exploration" === TT ? [kT("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), kT("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === TT ? [kT("skyblockGame:logSource", {
          xp: this.number(jk["Maple Log"])
        })] : "combat" === TT ? [kT("skyblockGame:creatureKillSource"), kT("skyblockGame:noEnvironmentalXp")] : "farming" === TT ? [kT("skyblockGame:cropSource", {
          xp: this.number(hk["Wheat|FreshlyGrown"])
        }), kT("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), kT("skyblockGame:noYoungCropXp")] : Object.entries("mining" === TT ? tk : Nk).map((TT => {
          let [cT, lT] = TT;
          return kT("skyblockGame:itemXpSource", {
            item: this.itemName(cT),
            xp: this.number(lT)
          })
        }))
      }
      number(TT) {
        return TT.toLocaleString(this.locale)
      }
      benefit(TT, kT) {
        const cT = Ok(TT, kT);
        return this.translate(cT.translationKey, {
          bonus: this.number(cT.percent)
        })
      }
      Av(TT) {
        if (!this.yv) {
          if ("snapshot" === TT.kind) this.progress = TT.progress, this.pending.clear(), this.recent = null;
          else if ("award" === TT.kind && this.progress) {
            const {
              award: kT
            } = TT;
            this.progress = {
              ...this.progress,
              [kT.skill]: kT.after
            };
            for (const [TT, lT] of this.pending) lT.skill === kT.skill && this.pending.delete(TT);
            const cT = kT.after.level > kT.before.level;
            this.recordGain(kT.skill, kT.amount, cT ? ++this.nextLevelUpToken : null), cT && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: kT.skill,
              beforeLevel: kT.before.level,
              level: kT.after.level
            })
          } else {
            if ("rejectBlock" === TT.kind) return void this.rejectBlock(TT.position);
            if ("open" === TT.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(TT, kT, cT) {
        if (!this.progress || this.yv || cT) return;
        const lT = function(TT, kT) {
          const cT = TT.split("|")[0];
          return "Air" === kT || kT === `Barkless ${TT}` ? Object.hasOwn(jk, cT) ? {
            skill: "foraging",
            amount: jk[cT]
          } : "Air" !== kT ? null : Object.hasOwn(tk, TT) ? {
            skill: "mining",
            amount: tk[TT]
          } : Ik(TT) ? {
            skill: "farming",
            amount: 10
          } : Ck(TT) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(hk, TT) ? {
            skill: "farming",
            amount: hk[TT]
          } : Object.hasOwn(uT, TT) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(kT, "Air");
        if (!lT) return;
        const MT = TT.join(",");
        if (this.pending.has(MT)) return;
        const KT = this.predictedProgress(lT.skill).totalXp + lT.amount;
        Number.isSafeInteger(KT) && (this.pending.set(MT, {
          ...lT,
          expires: this.now() + 2e3
        }), this.recordGain(lT.skill, 0), this.emit())
      }
      rejectBlock(TT) {
        this.pending.delete(TT.join(",")) && this.emit()
      }
      UA() {
        if (this.yv) return;
        let TT = !1;
        for (const [kT, cT] of this.pending) cT.expires <= this.now() && (this.pending.delete(kT), TT = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, TT = !0), TT && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(TT, kT) {
        var cT, lT;
        let MT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const KT = (null === (cT = this.recent) || void 0 === cT ? void 0 : cT.skill) === TT && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          OT = (null === (lT = this.recent) || void 0 === lT ? void 0 : lT.skill) === TT && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: TT,
          confirmed: KT + kT,
          expires: this.now() + 3e3,
          levelUpToken: null !== MT && void 0 !== MT ? MT : OT
        }
      }
      pendingXp(TT) {
        let kT = 0;
        for (const cT of this.pending.values()) cT.skill === TT && (kT += cT.amount);
        return kT
      }
      predictedProgress(TT) {
        const kT = this.progress[TT],
          cT = this.pendingXp(TT);
        return cT ? fk(kT.totalXp + cT, TT) : kT
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var TT, kT, cT;
        const lT = this.progress ? pT.map((TT => {
            const kT = this.predictedProgress(TT);
            return {
              ...this.text(TT),
              icon: Qk[TT],
              benefit: this.benefit(TT, kT.level),
              sources: this.sources(TT),
              id: TT,
              selected: TT === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(kT.level)
              }),
              xp: null === kT.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(kT.xpIntoLevel),
                target: this.number(kT.xpForNextLevel)
              }),
              percent: null === kT.xpForNextLevel ? 100 : Math.min(100, kT.xpIntoLevel / kT.xpForNextLevel * 100)
            }
          })) : [],
          MT = lT.find((TT => {
            var kT;
            return TT.id === (null === (kT = this.recent) || void 0 === kT ? void 0 : kT.skill)
          })),
          KT = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: lT,
          detail: null !== (TT = lT.find((TT => TT.selected))) && void 0 !== TT ? TT : null,
          overallLevel: this.progress ? pT.reduce(((TT, kT) => TT + this.predictedProgress(kT).level), 0) : null,
          hud: MT && KT > 0 ? {
            skill: MT,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(KT)
            }),
            levelUpToken: null !== (kT = null === (cT = this.recent) || void 0 === cT ? void 0 : cT.levelUpToken) && void 0 !== kT ? kT : null,
            colour: Dk(MT.id)
          } : null
        }
      }
    }
    const fc = Math.max(1600, 600, 950) + 400,
      xc = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      Ic = "skyblockQuestsView",
      Ac = "skyblockQuestNotificationView";
    class Cc extends AT {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          OT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(TT, lT, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = kT, this.translate = cT, this.now = MT, this.locale = KT, this.publishNotification = OT, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var TT, kT;
          this.selected = null !== (TT = null === (kT = this.authoritative) || void 0 === kT ? void 0 : kT.trackedQuestId) && void 0 !== TT ? TT : null, this.show()
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const TT = this.snapshot.detail;
          !this.yv && null !== TT && void 0 !== TT && TT.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(TT.id), this.emit())
        }, this.viewDialogue = () => {
          const TT = this.snapshot.detail;
          var kT;
          TT && (null === (kT = this.onViewDialogue) || void 0 === kT || kT.call(this, TT.id))
        }, this.notifications = new Fk(MT, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var TT, kT;
        return null !== (TT = null === (kT = this.authoritative) || void 0 === kT ? void 0 : kT.trackedQuestId) && void 0 !== TT ? TT : null
      }
      notify(TT) {
        !this.yv && this.notifications.enqueue(TT) && this.emitNotification()
      }
      setNotificationsHeld(TT) {
        (this.notifications.setHeld(TT) || TT) && this.emitNotification()
      }
      UA() {
        var TT, kT;
        if (this.yv) return;
        this.notifications.UA() && this.emitNotification();
        let cT = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, cT = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, cT = !0);
        const lT = jc(this.authoritative);
        null !== lT && void 0 !== lT && null !== (TT = lT.questClock) && void 0 !== TT && TT.running && this.clockText(lT) !== (null === (kT = this.snapshot.tracked) || void 0 === kT ? void 0 : kT.clock) && (cT = !0), cT && this.emit()
      }
      setTranslator(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = TT, this.locale = kT, this.emitNotification(), this.emit()
      }
      Av(TT) {
        if (!this.yv)
          if ("completion" === TT.kind) this.notify(TT.questCompletion);
          else if ("landmark" === TT.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: TT.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === TT.kind) {
          var kT, cT, lT;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: TT.npcNoteTitleKey,
            textKey: TT.npcNoteTextKey,
            params: null !== (kT = TT.npcNoteParams) && void 0 !== kT ? kT : {},
            nameKeys: null !== (cT = TT.npcNoteNameKeys) && void 0 !== cT ? cT : {},
            iconItem: null !== (lT = TT.npcNoteIconItem) && void 0 !== lT ? lT : null
          })
        } else if ("open" === TT.kind) this.show();
        else if ("guidance" === TT.kind) this.waypoint = TT.waypoint, this.compassTarget = TT.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === TT.kind) {
          this.authoritative = TT.snapshot, this.notifications.UA() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const kT = this.trackedStepPulse;
          this.updateTrackedStepPulse(TT.snapshot), this.emit(), this.trackedStepPulse > kT && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.yv || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var TT;
        return null !== (TT = this.translateWithIcons) && void 0 !== TT ? TT : this.translate
      }
      clockText(TT) {
        const kT = TT.questClock;
        if (!kT) return null;
        const cT = kT.elapsedMs + (kT.running ? this.now() - this.receivedAt : 0);
        return void 0 === kT.countdownFromMs ? eT(cT, !1) : eT(1e3 * Math.ceil(Math.max(0, kT.countdownFromMs - cT) / 1e3), !1)
      }
      updateTrackedStepPulse(TT) {
        var kT, cT, lT;
        const MT = jc(TT);
        if (!MT) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const KT = TT => MT.subquests.filter((kT => TT(kT.status))).map((TT => TT.id)),
          OT = KT((TT => "completed" === TT || "skipped" === TT)),
          yT = KT((TT => "locked" !== TT)),
          fT = (null === (kT = this.trackedSteps) || void 0 === kT ? void 0 : kT.questId) === MT.id && MT.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (fT) {
          const TT = OT.filter((TT => !fT.finished.has(TT))),
            kT = KT((TT => "active" === TT || "ready" === TT)).filter((TT => !fT.unlocked.has(TT)));
          TT.length > 0 && this.trackedStepPulse++, (TT.length > 0 || kT.length > 0) && (this.trackedChange = {
            finished: new Set(TT),
            unlocked: new Set(kT),
            expiresAt: this.now() + fc
          })
        } else {
          var xT;
          this.trackedStepPulse = (null === (xT = this.trackedSteps) || void 0 === xT ? void 0 : xT.questId) === MT.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: MT.id,
          progress: MT.progress,
          finished: new Set([...null !== (cT = null === fT || void 0 === fT ? void 0 : fT.finished) && void 0 !== cT ? cT : [], ...OT]),
          unlocked: new Set([...null !== (lT = null === fT || void 0 === fT ? void 0 : fT.unlocked) && void 0 !== lT ? lT : [], ...yT])
        }
      }
      entry(TT, kT) {
        var cT, lT;
        const MT = TT.id === (null === (cT = this.authoritative) || void 0 === cT ? void 0 : cT.trackedQuestId),
          KT = this.now() < this.trackAvailableAt,
          OT = this.questTextTranslator(),
          yT = TT.subquests.map((kT => {
            var cT, lT, KT, yT, fT, xT;
            const IT = null !== (cT = kT.handInNpcName) && void 0 !== cT ? cT : TT.giverName,
              AT = this.translate("skyblockGame:progress", {
                current: kT.progress.toLocaleString(this.locale),
                target: kT.target.toLocaleString(this.locale)
              }),
              CT = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: IT ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [kT.status],
              jT = "active" === kT.status || "ready" === kT.status;
            return {
              id: kT.id,
              name: ak(OT, kT.nameKey, kT.nameParams),
              description: ak(OT, kT.descriptionKey, kT.descriptionParams),
              progress: AT,
              status: kT.status,
              statusLabel: CT ? this.translate(CT, {
                npc: IT
              }) : AT,
              iconItem: jT && null !== (lT = kT.questIconItem) && void 0 !== lT ? lT : null,
              barPercent: "active" === kT.status && kT.showsProgressBar ? Math.min(100, 100 * kT.progress / kT.target) : null,
              justFinished: MT && null !== (KT = null === (yT = this.trackedChange) || void 0 === yT ? void 0 : yT.finished.has(kT.id)) && void 0 !== KT && KT,
              justUnlocked: MT && null !== (fT = null === (xT = this.trackedChange) || void 0 === xT ? void 0 : xT.unlocked.has(kT.id)) && void 0 !== fT && fT
            }
          }));
        return {
          id: TT.id,
          name: ak(OT, TT.nameKey, TT.nameParams),
          description: ak(OT, TT.descriptionKey, TT.descriptionParams),
          progress: kT ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: TT.progress.toLocaleString(this.locale),
            target: TT.target.toLocaleString(this.locale)
          }),
          completed: kT,
          tracked: MT,
          selected: TT.id === this.selected,
          canTrack: !kT && !MT && !KT,
          trackLabel: this.translate(MT ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : KT ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== TT.id,
          subquests: yT,
          focusStep: null !== (lT = yT.find((TT => null !== TT.barPercent))) && void 0 !== lT ? lT : null,
          clock: this.clockText(TT)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var TT, kT, cT, lT, MT, KT, OT, yT, fT, xT;
        const IT = [...null !== (TT = null === (kT = this.authoritative) || void 0 === kT ? void 0 : kT.active) && void 0 !== TT ? TT : [], ...null !== (cT = null === (lT = this.authoritative) || void 0 === lT ? void 0 : lT.completed) && void 0 !== cT ? cT : []];
        var AT, CT, jT, vT;
        IT.some((TT => TT.id === this.selected)) || (this.selected = null !== (AT = null !== (CT = null === (jT = this.authoritative) || void 0 === jT ? void 0 : jT.trackedQuestId) && void 0 !== CT ? CT : null === (vT = IT[0]) || void 0 === vT ? void 0 : vT.id) && void 0 !== AT ? AT : null);
        const tT = null !== (MT = null === (KT = this.authoritative) || void 0 === KT ? void 0 : KT.active.map((TT => this.entry(TT, !1)))) && void 0 !== MT ? MT : [];
        tT.sort(((TT, kT) => Number(kT.tracked) - Number(TT.tracked)));
        const hT = null !== (OT = null === (yT = this.authoritative) || void 0 === yT ? void 0 : yT.completed.map((TT => this.entry(TT, !0)))) && void 0 !== OT ? OT : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: tT,
          completed: hT,
          completedExpanded: this.completedExpanded,
          detail: null !== (fT = [...tT, ...hT].find((TT => TT.selected))) && void 0 !== fT ? fT : null,
          tracked: null !== (xT = tT.find((TT => TT.tracked))) && void 0 !== xT ? xT : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function jc(TT) {
      var kT;
      return null !== (kT = null === TT || void 0 === TT ? void 0 : TT.active.find((kT => kT.id === TT.trackedQuestId))) && void 0 !== kT ? kT : null
    }
    const vc = "skyblockDungeonsView";
    class tc extends AT {
      constructor(TT, kT) {
        let cT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          lT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = kT, this.locale = cT, this.requestEnter = lT, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const TT = this.pickerEntry(),
            kT = null === TT || void 0 === TT ? void 0 : TT.difficulties[this.pageIndex];
          void 0 !== kT && null !== kT.unlockedBoss && (this.close(), this.requestEnter(TT.id, kT.difficulty))
        }
      }
      setTranslator(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = TT, this.locale = kT, this.emit()
      }
      Av(TT) {
        var kT, cT;
        if (!this.yv) return "open" === TT.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== TT.kind ? "snapshot" === TT.kind && (this.authoritative = TT.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (kT = null === (cT = this.pickerEntry()) || void 0 === cT ? void 0 : cT.difficulties.length) && void 0 !== kT ? kT : 1) - 1)), null === TT.snapshot && this.open ? this.close() : this.emit()) : this.choose(TT.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(TT) {
        var kT;
        const cT = null === (kT = this.authoritative) || void 0 === kT ? void 0 : kT.dungeons.find((kT => kT.id === TT));
        void 0 !== cT ? this.open && this.pickerDungeonId === TT || (this.pickerDungeonId = TT, this.pageIndex = Math.max(0, cT.difficulties.findLastIndex((TT => null !== TT.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${TT}`)
      }
      turnTo(TT) {
        var kT, cT;
        const lT = null !== (kT = null === (cT = this.pickerEntry()) || void 0 === cT ? void 0 : cT.difficulties.length) && void 0 !== kT ? kT : 0;
        TT < 0 || TT >= lT || TT === this.pageIndex || (this.pageIndex = TT, this.emit())
      }
      pickerEntry() {
        var TT, kT;
        return null !== (TT = null === (kT = this.authoritative) || void 0 === kT ? void 0 : kT.dungeons.find((TT => TT.id === this.pickerDungeonId))) && void 0 !== TT ? TT : null
      }
      difficulty(TT) {
        const kT = TT.completions > 0,
          cT = null === TT.bestMs ? null : eT(TT.bestMs);
        return {
          difficulty: TT.difficulty,
          label: this.translate(oT[TT.difficulty]),
          colour: HT[TT.difficulty],
          beaten: kT,
          bestTime: cT,
          completions: TT.completions,
          summary: kT ? [null === cT ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: cT
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: TT.completions.toLocaleString(this.locale)
          })].filter((TT => null !== TT)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(TT) {
        const kT = TT.difficulties.map((TT => this.difficulty(TT))),
          cT = kT.filter((TT => TT.beaten)).length;
        return {
          id: TT.id,
          name: this.translate(TT.nameKey),
          selected: TT.id === this.selected,
          beatenSummary: `${cT} / ${kT.length}`,
          difficulties: kT
        }
      }
      picker() {
        const TT = this.pickerEntry();
        if (null === TT || 0 === TT.difficulties.length) return null;
        const kT = TT.difficulties.map(((kT, cT) => {
          var lT, MT, KT, OT;
          const yT = kT.unlockedBoss,
            fT = null === yT ? this.lockedHint(TT, cT) : null;
          return {
            ...this.difficulty(kT),
            unlocked: null !== yT,
            bossName: null === yT ? null : this.translate(yT.bossNameKey),
            bossMobType: null !== (lT = null === yT || void 0 === yT ? void 0 : yT.bossMobType) && void 0 !== lT ? lT : null,
            bossMobVariation: null !== (MT = null === yT || void 0 === yT ? void 0 : yT.bossMobVariation) && void 0 !== MT ? MT : null,
            lockedHint: null !== (KT = null === fT || void 0 === fT ? void 0 : fT.text) && void 0 !== KT ? KT : null,
            lockedHintHighlight: null !== (OT = null === fT || void 0 === fT ? void 0 : fT.highlight) && void 0 !== OT ? OT : null,
            current: cT === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(TT.nameKey),
          pages: kT,
          page: kT[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < kT.length - 1
        }
      }
      lockedHint(TT, kT) {
        var cT, lT, MT;
        if (0 === kT && "number" === typeof TT.combatLevelLock) {
          const kT = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: TT.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: kT,
            colour: Dk("combat"),
            icon: Qk.combat
          })
        }
        const KT = null !== (cT = null === (lT = this.authoritative) || void 0 === lT ? void 0 : lT.dungeons) && void 0 !== cT ? cT : [],
          OT = kT > 0 ? TT : null !== (MT = KT[KT.indexOf(TT) - 1]) && void 0 !== MT ? MT : null,
          yT = kT > 0 ? TT.difficulties[kT - 1] : null === OT || void 0 === OT ? void 0 : OT.difficulties[0];
        if (null === OT || void 0 === yT) return null;
        const fT = this.translate(OT.nameKey);
        if (null === yT.unlockedBoss) return OT === TT ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, yT.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: fT
        }, yT.difficulty);
        const xT = this.translate(yT.unlockedBoss.bossNameKey);
        return OT === TT ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: xT
        }, yT.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: xT,
            dungeon: fT
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(TT, kT, cT) {
        return this.hintHighlighting(TT, kT, "difficulty", {
          name: this.translate(oT[cT]),
          colour: HT[cT],
          icon: null
        })
      }
      hintHighlighting(TT, kT, cT, lT) {
        let {
          name: MT,
          colour: KT,
          icon: OT
        } = lT;
        const yT = this.translate(TT, {
          ...kT,
          [cT]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(TT, {
            ...kT,
            [cT]: MT
          }),
          highlight: 2 === yT.length ? {
            before: yT[0],
            name: MT,
            after: yT[1],
            colour: KT,
            icon: OT
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var TT, kT, cT;
        const lT = null !== (TT = null === (kT = this.authoritative) || void 0 === kT ? void 0 : kT.dungeons) && void 0 !== TT ? TT : [];
        var MT, KT;
        lT.some((TT => TT.id === this.selected)) || (this.selected = null !== (MT = null === (KT = lT[0]) || void 0 === KT ? void 0 : KT.id) && void 0 !== MT ? MT : null);
        const OT = lT.map((TT => this.entry(TT)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: OT,
          detail: null !== (cT = OT.find((TT => TT.selected))) && void 0 !== cT ? cT : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const hc = ["mining", "farming", "foraging", "fishing", "combat"],
      Nc = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      Qc = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function Sc() {
      for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
      return kT.map(((TT, kT) => ({
        amount: TT,
        coins: Nc[kT],
        xp: Qc[kT]
      })))
    }
    const Dc = Sc(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      ac = Sc(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      Fc = Sc(50, 100, 250, 500, 1e3, 2500, 5e3),
      rc = Sc(25, 50, 100, 250, 500, 1e3),
      Pc = Sc(10, 25, 50, 100, 250, 500, 1e3),
      wc = Sc(1, 5, 10, 25, 50);

    function mc(TT, kT) {
      return {
        id: TT,
        category: "fishing",
        item: kT,
        drops: [kT],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Pc
      }
    }
    const bc = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: ac
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: Fc
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: Fc
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: rc
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: rc
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: ac
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: Dc
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: Dc
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: Dc
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: Fc
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: ac
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: ac
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: ac
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: Fc
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: Fc
      }, mc("wheatfish", "Wheatfish"), mc("darter", "Darter"), mc("sunset_minnow", "Sunset Minnow"), mc("root_flounder", "Root Flounder"), mc("greenfin_loach", "Greenfin Loach"), mc("red_strongfish", "Red Strongfish"), mc("green_strongfish", "Green Strongfish"), mc("boomerang_fish", "Boomerang Fish"), mc("seahorse", "Seahorse"), mc("spined_stickleback", "Spined Stickleback"), mc("moon_strongfish", "Moon Strongfish"), mc("boulder_bass", "Boulder Bass"), mc("grass_snapper", "Grass Snapper"), mc("crystal_wheatfish", "Crystalized Wheatfish", wc), mc("moonstone_pupfish", "Moonstone Pupfish", wc), mc("reedglass_minnow", "Reedglass Minnow"), mc("mangrove_herring", "Mangrove Herring"), mc("mudline_perch", "Mudline Perch"), mc("coastal_mullet", "Coastal Mullet"), mc("reef_sardine", "Reef Sardine"), mc("root_perch", "Root Perch"), mc("driftwood_catfish", "Driftwood Catfish"), mc("aether_minnow", "Aether Minnow"), mc("needlefish", "Tri-Pointed Needlefish"), mc("threadfin_bream", "Threadfin Bream"), mc("mudbelly_tilapia", "Mudbelly Tilapia"), mc("rotslab_eel", "Rotslab Eel"), mc("polarflash_electron", "Polarflash Electron"), mc("mireback_carp", "Mireback Carp"), mc("blackwater_bream", "Blackwater Bream"), mc("stone_grouper", "Stone Grouper"), mc("shadeback_ray", "Shadeback Ray"), mc("glacial_silverfish", "Glacial Silverfish"), mc("hatchetfish", "Hatchetfish"), mc("moonlit_boomerang", "Moonlit Boomerang Fish"), mc("murkborne_ray", "Murkborne Ray"), mc("bamboo_catfish", "Bamboo Catfish"), mc("mossback_arapaima", "Mossback Arapaima"), mc("murk_stingray", "Murk Stingray"), mc("channel_sawfish", "Channel Sawfish"), mc("boned_sturgeon", "Boned Sturgeon"), mc("oarfish", "Oarfish"), mc("snakehead", "Snakehead", wc), mc("eldertide_leviathan", "Eldertide Leviathan", wc), mc("pithead", "Pithead"), mc("electric_eel", "Electric Eel"), mc("shadow_darter", "Shadow Darter"), mc("abyss_carp", "Abyss Carp"), mc("nomai_moray", "Nomai Moray"), mc("silver_dragonfish", "Silver Dragonfish"), mc("giant_moray", "Giant Moray"), mc("coelacanth", "Coelacanth", wc), mc("frost_herring", "Frost Herring"), mc("permafrost_halibut", "Permafrost Halibut"), mc("glacial_lanternfish", "Glacial Lanternfish"), mc("frozen_grenadier", "Frozen Grenadier"), mc("blackfin_icefish", "Blackfin Icefish"), mc("moonfish", "Moonfish"), mc("alpha_strongfish", "Alpha Moon Strongfish"), mc("deep_lanternfish", "Deepwater Lanternfish", wc), mc("pearlescent_moonfish", "Pearlescent Moonfish", wc), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: ac
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: rc
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: rc
      }],
      zc = (new Map(bc.map((TT => [TT.id, TT]))), new Map),
      Jc = new Map;
    for (const xf of bc) {
      for (const [TT, kT] of Object.entries(null !== (oc = xf.blocks) && void 0 !== oc ? oc : {})) {
        var oc;
        zc.set(TT, {
          collection: xf,
          amount: kT
        })
      }
      for (const TT of null !== (Hc = xf.drops) && void 0 !== Hc ? Hc : []) {
        var Hc;
        Jc.set(TT, xf)
      }
    }

    function ec(TT, kT) {
      let cT = 0;
      for (; cT < TT.tiers.length && kT >= TT.tiers[cT].amount;) cT++;
      return cT
    }
    const Gc = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function Vc(TT) {
      return Gc[TT - 1]
    }
    const Ec = "skyblockCollectionsView";
    class Zc extends AT {
      constructor(TT, kT) {
        let cT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          lT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => TT;
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = kT, this.locale = cT, this.itemName = lT, this.counts = null, this.category = "mining", this.selected = bc[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = TT => {
          this.category = TT, this.selected = this.inCategory(TT)[0].id, this.emit()
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }
      }
      setTranslator(TT, kT, cT) {
        this.translate = TT, this.locale = kT, this.itemName = cT, this.emit()
      }
      Av(TT) {
        if (!this.yv)
          if ("collOpen" !== TT.kind) {
            (TT.collFull || null === this.counts) && (this.counts = new Map);
            for (const [kT, cT] of TT.collCounts) this.counts.set(kT, cT);
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
        var TT;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const kT = this.inCategory(this.category).map((TT => this.collectionView(TT))),
          cT = bc.reduce(((TT, kT) => TT + this.tierOf(kT)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: hc.map((TT => this.categoryView(TT))),
          collections: kT,
          detail: null !== (TT = kT.find((TT => TT.selected))) && void 0 !== TT ? TT : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(cT)
          })
        }
      }
      categoryView(TT) {
        const kT = this.inCategory(TT),
          cT = kT.reduce(((TT, kT) => TT + this.tierOf(kT)), 0),
          lT = kT.reduce(((TT, kT) => TT + kT.tiers.length), 0);
        return {
          id: TT,
          label: this.translate(`skyblockGame:${TT}`),
          icon: Qk[TT],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(cT),
            target: this.number(lT)
          }),
          selected: TT === this.category
        }
      }
      collectionView(TT) {
        var kT, cT;
        const lT = null !== (kT = this.counts.get(TT.id)) && void 0 !== kT ? kT : 0,
          MT = ec(TT, lT),
          KT = null !== (cT = TT.tiers[MT]) && void 0 !== cT ? cT : null,
          OT = 0 === MT ? 0 : TT.tiers[MT - 1].amount;
        return {
          id: TT.id,
          name: this.itemName(TT.item),
          icon: TT.item,
          selected: TT.id === this.selected,
          locked: 0 === lT,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(lT)
          }),
          tier: 0 === MT ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(MT),
          percent: null === KT ? 100 : Math.min(100, (lT - OT) / (KT.amount - OT) * 100),
          progress: null === KT ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(lT),
            target: this.number(KT.amount)
          }),
          nextReward: null === KT ? null : this.reward(TT, KT.coins, KT.xp)
        }
      }
      reward(TT, kT, cT) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(kT),
          xp: this.number(cT),
          skill: this.translate(`skyblockGame:${TT.category}`)
        })
      }
      tierLabel(TT) {
        return this.translate("skyblockGame:collectionTier", {
          tier: Vc(TT)
        })
      }
      tierOf(TT) {
        var kT;
        return ec(TT, null !== (kT = this.counts.get(TT.id)) && void 0 !== kT ? kT : 0)
      }
      inCategory(TT) {
        return bc.filter((kT => kT.category === TT))
      }
      number(TT) {
        return TT.toLocaleString(this.locale)
      }
    }
    const uc = "skyblockPortalTransitView",
      Xc = "skyblockPortalArrival";
    class dc {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.nt = TT, this.storage = kT, this.now = cT, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      Av(TT) {
        const kT = {
          zoneNameKey: TT.transitZoneNameKey,
          variation: TT.transitZoneVariation,
          colour: TT.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(Xc, kT), this.show("departure", kT.zoneNameKey, kT.colour, TT.transitDurationMs, TT.transitDurationMs + 1500, (() => {
          this.storage.removeItem(Xc)
        }))
      }
      resumeArrival(TT) {
        const kT = this.storage.getItem(Xc);
        this.storage.removeItem(Xc), null === kT || kT.variation !== TT || this.now() - kT.departedAt > 3e4 || this.show("arrival", kT.zoneNameKey, kT.colour, 3200, 2e4)
      }
      finishArrival(TT) {
        var kT;
        "arrival" === (null === (kT = this.view) || void 0 === kT ? void 0 : kT.phase) && this.view.token === TT && (this.clearTimer(), this.view = null, this.nt(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(TT, kT, cT, lT, MT, KT) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: TT,
          zoneNameKey: kT,
          colour: cT,
          durationMs: lT
        }, this.nt(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.nt(null), null === KT || void 0 === KT || KT()
        }), MT)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const Lc = "skyblockDailyRewardView",
      Rc = "skyblockDailyRewardCoin";
    class gc {
      constructor(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          fT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.nt = TT, this.isBusy = kT, this.holdQuestPopups = cT, this.onHeldCoinsChanged = lT, this.onCoinLanded = MT, this.onStarted = KT, this.onFinished = OT, this.onItemLanded = yT, this.now = fT, this.ty = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var TT, kT;
        return null !== (TT = null === (kT = this.playing) || void 0 === kT ? void 0 : kT.view) && void 0 !== TT ? TT : null
      }
      getHeldCoins() {
        var TT, kT;
        let cT = 0;
        for (const lT of this.ty) cT += lT.coins;
        return cT - (null !== (TT = null === (kT = this.playing) || void 0 === kT ? void 0 : kT.released) && void 0 !== TT ? TT : 0)
      }
      Av(TT) {
        "dailyRewardClaimed" !== TT.kind ? (this.queue.push(TT), this.UA()) : this.ty.push({
          coins: TT.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      UA() {
        const TT = this.now();
        if (null === this.playing) return this.releaseUnshown(TT), void this.startNext(TT);
        const kT = this.playing,
          cT = TT - kT.startedAt,
          lT = kT.view.flyingCoins,
          MT = function(TT, kT) {
            let cT = 0;
            for (; cT < kT && Yc(cT, kT) <= TT;) cT++;
            return cT
          }(cT, lT);
        if (MT !== kT.landed) {
          for (let TT = MT - kT.landed > 2 ? MT - 1 : kT.landed; TT < MT; TT++) this.onCoinLanded(TT, lT);
          kT.landed = MT, kT.released = Math.round(kT.view.coins * MT / lT), this.onHeldCoinsChanged()
        }
        for (; kT.itemsLanded < kT.view.items.length && 2e3 + 160 * kT.itemsLanded + 630 <= cT;) this.onItemLanded(kT.itemsLanded), kT.itemsLanded++;
        cT >= kT.view.durationMs && (this.finish(), this.startNext(TT))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.ty = [], this.nt(null)
      }
      startNext(TT) {
        if (0 === this.queue.length || this.isBusy()) return;
        const kT = this.queue.shift();
        this.token++;
        const cT = {
          token: this.token,
          day: kT.dailyRewardDay,
          coins: kT.dailyRewardCoins,
          items: kT.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: kT.dailyRewardDay === bT ? 24 : 14
        };
        this.playing = {
          view: cT,
          startedAt: TT,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.nt(cT), this.onStarted(cT)
      }
      finish() {
        this.ty.shift(), this.playing = null, this.holdQuestPopups(!1), this.nt(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(TT) {
        if (this.queue.length > 0 || 0 === this.ty.length) return;
        const kT = this.ty.length;
        this.ty = this.ty.filter((kT => TT - kT.receivedAt < 6e4)), this.ty.length !== kT && this.onHeldCoinsChanged()
      }
    }

    function Uc(TT, kT) {
      return 450 + 715 * TT / (kT - 1)
    }

    function Yc(TT, kT) {
      return Uc(TT, kT) + 650
    }
    const Bc = "skyblockMailboxView";
    class Wc {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.nt = TT, this.isBusy = kT, this.onStarted = cT, this.now = lT, this.waiting = [], this.playing = null, this.token = 0, this.itemName = TT => TT
      }
      getSnapshot() {
        var TT, kT;
        return null !== (TT = null === (kT = this.playing) || void 0 === kT ? void 0 : kT.view) && void 0 !== TT ? TT : null
      }
      setItemName(TT) {
        this.itemName = TT
      }
      Av(TT) {
        this.waiting.push(...TT.mailLetters), this.UA()
      }
      UA() {
        const TT = this.now();
        null !== this.playing && TT - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.nt(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(TT)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.nt(null)
      }
      start(TT) {
        const kT = this.waiting.slice(0, 3);
        this.token++;
        const cT = {
          token: this.token,
          letters: kT.map((TT => this.toView(TT))),
          more: this.waiting.length - kT.length,
          durationMs: 4500 + 700 * kT.length
        };
        this.waiting = [], this.playing = {
          view: cT,
          startedAt: TT
        }, this.nt(cT), this.onStarted(cT)
      }
      toView(TT) {
        return {
          coins: TT.mailCoins,
          items: TT.mailItems.map((TT => {
            var kT;
            return {
              itemName: TT.mailItemName,
              amount: TT.mailItemAmount,
              label: null !== (kT = TT.mailItemLabel) && void 0 !== kT ? kT : this.itemName(TT.mailItemName)
            }
          })),
          reasonKey: TT.mailReasonKey,
          reasonParams: TT.mailReasonParams
        }
      }
    }
    const nc = "skyblockQuestGraphView",
      pc = "skyblockDevQuestJump";

    function ic(TT) {
      if (0 === TT.length) return "";
      const kT = [`M ${TT[0].x} ${TT[0].y}`];
      for (let lT = 1; lT < TT.length - 1; lT++) {
        const cT = TT[lT + 1];
        kT.push(`Q ${TT[lT].x} ${TT[lT].y} ${(TT[lT].x+cT.x)/2} ${(TT[lT].y+cT.y)/2}`)
      }
      const cT = TT[TT.length - 1];
      return kT.push(`L ${cT.x} ${cT.y}`), kT.join(" ")
    }

    function qc(TT, kT) {
      return TT < kT ? `${TT}|${kT}` : `${kT}|${TT}`
    }
    class sc extends AT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(TT, cT, lT), this.translate = kT, this.requestJump = MT, this.requestArrive = KT, this.storage = OT, this.now = yT, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = TT => {
          TT !== this.hoveredId && (this.hoveredId = TT, this.emit())
        }, this.jump = TT => {
          this.close(), this.requestJump(TT)
        }
      }
      Av(TT) {
        if (!this.yv)
          if ("graph" !== TT.kind) {
            if ("jumping" === TT.kind) {
              const kT = {
                questId: TT.graphQuestId,
                variation: TT.graphVariation,
                completes: TT.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(pc, kT)
            }
          } else {
            const kT = ++this.graphCount;
            cT.e(112).then((() => cT(6434))).then((cT => {
              let {
                default: lT
              } = cT;
              this.yv || kT !== this.graphCount || (this.layout = function(TT, kT, cT) {
                var lT, MT;
                const KT = new TT.graphlib.Graph;
                KT.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), KT.setDefaultEdgeLabel((() => ({})));
                const OT = new Set;
                for (const IT of kT) OT.add(IT.graphQuestId), KT.setNode(IT.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const yT = cT.filter((TT => OT.has(TT.graphFromId) && OT.has(TT.graphToId) && TT.graphFromId !== TT.graphToId)),
                  fT = new Map;
                for (const IT of [...yT].sort(((TT, kT) => Number("awaits" === TT.graphEdgeKind) - Number("awaits" === kT.graphEdgeKind)))) {
                  const TT = qc(IT.graphFromId, IT.graphToId);
                  fT.has(TT) || (fT.set(TT, IT), KT.setEdge(IT.graphFromId, IT.graphToId))
                }
                TT.layout(KT);
                const xT = KT.graph();
                return {
                  width: Math.ceil(null !== (lT = xT.width) && void 0 !== lT ? lT : 0),
                  height: Math.ceil(null !== (MT = xT.height) && void 0 !== MT ? MT : 0),
                  nodes: kT.map((TT => {
                    var kT, cT;
                    const lT = KT.node(TT.graphQuestId);
                    return {
                      node: TT,
                      left: (null !== (kT = lT.x) && void 0 !== kT ? kT : 0) - 95,
                      top: (null !== (cT = lT.y) && void 0 !== cT ? cT : 0) - 26
                    }
                  })),
                  edges: yT.map((TT => {
                    var kT;
                    const cT = fT.get(qc(TT.graphFromId, TT.graphToId)),
                      lT = null !== (kT = KT.edge(cT.graphFromId, cT.graphToId).points) && void 0 !== kT ? kT : [];
                    return {
                      edge: TT,
                      key: `${TT.graphFromId}|${TT.graphToId}|${TT.graphEdgeKind}`,
                      path: ic(cT.graphFromId === TT.graphFromId ? lT : [...lT].reverse())
                    }
                  })),
                  plans: new Map(kT.map((TT => [TT.graphQuestId, new Set([TT.graphQuestId, ...TT.graphPlanIds])])))
                }
              }(lT, TT.graphNodes, TT.graphEdges), this.show())
            })).catch((TT => {
              console.error("The quest graph could not be laid out", TT)
            }))
          }
      }
      resumeJump(TT) {
        const kT = this.storage.getItem(pc);
        this.storage.removeItem(pc), null === kT || kT.variation !== TT || this.now() - kT.departedAt > 6e4 || this.requestArrive(kT.questId, kT.completes)
      }
      setTranslator(TT) {
        this.translate = TT, this.emit()
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
        var TT, kT;
        return null !== (TT = null === this.hoveredId || null === (kT = this.layout) || void 0 === kT ? void 0 : kT.plans.get(this.hoveredId)) && void 0 !== TT ? TT : new Set
      }
      buildSnapshot() {
        const TT = this.layout;
        if (null === TT) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const kT = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: TT.width,
          height: TT.height,
          nodes: TT.nodes.map((TT => {
            let {
              node: cT,
              left: lT,
              top: MT
            } = TT;
            return {
              id: cT.graphQuestId,
              name: this.translate(cT.graphNameKey),
              detail: null === cT.graphGiverName ? cT.graphZoneId : `${cT.graphGiverName} \xb7 ${cT.graphZoneId}`,
              state: cT.graphState,
              left: lT,
              top: MT,
              inPlan: kT.has(cT.graphQuestId),
              hovered: cT.graphQuestId === this.hoveredId
            }
          })),
          edges: TT.edges.map((TT => {
            let {
              edge: cT,
              key: lT,
              path: MT
            } = TT;
            return {
              key: lT,
              kind: cT.graphEdgeKind,
              path: MT,
              inPlan: kT.has(cT.graphFromId) && kT.has(cT.graphToId)
            }
          })),
          planning: kT.size > 0
        }
      }
    }
    var Tl = cT(36862);
    const kl = 250,
      cl = 2150,
      ll = -2.8,
      Ml = 2.2,
      Kl = -27,
      Ol = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      yl = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      fl = Math.round(50 + 1e3 * (yl.delay + yl.period / 2)),
      xl = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      Il = Array.from({
        length: 26
      }, ((TT, kT) => {
        const cT = 2.39996 * kT,
          lT = .5 + .618034 * kT % 1 * .23,
          MT = kT % 3 !== 2;
        return {
          rune: MT ? xl[7 * kT % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(cT)*lT).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(cT)*lT).toFixed(3)})`,
            "--spin": 40 * (kT % 5 - 2) + "deg",
            "--size": (MT ? 1 + kT % 4 * .2 : .3 + kT % 2 * .15) + "rem",
            "--duration": `${(1.8+7*kT%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*kT%3).toFixed(2)}s`
          }
        }
      }));

    function Al(TT, kT) {
      return Array.from({
        length: 30 + 3 * TT + (kT ? 10 : 0)
      }, ((TT, kT) => {
        const cT = kT < 4,
          lT = cT ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          MT = cT ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          KT = cT ? 2.2 : .6 + Math.random(),
          OT = cT ? .3 : Math.random() < .5 ? .16 : .24,
          yT = cT ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": lT,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${MT.toFixed(2)}rem`,
          "--length": `${KT.toFixed(2)}rem`,
          "--width": `${OT}rem`,
          "--duration": `${Math.round(yT)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function Cl(TT) {
      let {
        zeta: kT,
        period: cT
      } = TT;
      const lT = 2 * Math.PI / cT;
      return {
        w: lT,
        decay: kT * lT / Math.sqrt(1 - kT * kT)
      }
    }
    let jl = !1;

    function vl() {
      if (jl) return;
      jl = !0;
      const TT = document.createElement("style");
      TT.textContent = function() {
        const TT = Cl(Ol),
          kT = Cl(yl),
          cT = kT => Math.exp(-TT.decay * kT) * Math.sin(TT.w * kT),
          lT = cT(Math.atan(TT.w / TT.decay) / TT.w),
          MT = .25,
          KT = 2.15,
          OT = Math.round(215),
          yT = [];
        for (let fT = 0; fT <= OT; fT++) {
          const TT = fT / OT * KT;
          let xT = Math.sin(Math.min(TT, MT) / MT * Math.PI / 2) ** 2,
            IT = 0,
            AT = 1,
            CT = 1 - .2 * xT,
            jT = 1;
          if (TT >= MT) {
            const OT = TT - MT,
              yT = Math.max(0, OT - .05);
            xT = Math.exp(-yT / .05), IT = cT(yT + Ol.lead * (1 - Math.exp(-yT / Ol.rush))) / lT;
            const fT = yT - yl.delay,
              vT = fT <= 0 ? 0 : 1 - Math.exp(-kT.decay * fT) * (Math.cos(kT.w * fT) + kT.decay / kT.w * Math.sin(kT.w * fT)),
              tT = Math.max(0, (TT - 1.77) / (KT - 1.77));
            AT = (1 + (yl.to - 1) * vT) * (1 + .08 * tT), CT = 1.1 + 1.5 * Math.exp(-OT / .07) + .3 * Math.exp(-(((1e3 * OT - fl) / 100) ** 2)) + .8 * tT, jT = 1 - tT ** 1.5
          }
          const vT = .15 * xT + ll * IT,
            tT = -.1 * xT + Ml * IT,
            hT = 3 * xT + Kl * IT;
          yT.push(`${(fT/OT*100).toFixed(3)}% { opacity: ${jT.toFixed(3)}; transform: translate(${vT.toFixed(3)}rem, ${tT.toFixed(3)}rem) rotate(${hT.toFixed(2)}deg) scale(${AT.toFixed(3)}); filter: brightness(${CT.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${yT.join(" ")} }`
      }(), document.head.append(TT)
    }
    const tl = "skyblockForgeView",
      hl = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class Nl extends AT {
      constructor(TT, kT, cT, lT, MT) {
        super(TT, cT, lT), this.translate = kT, this.requestForge = MT, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (TT, kT) => {
          var cT, lT;
          null !== this.forging || (null !== (cT = this.owned[(0, Tl.l)(kT, TT)]) && void 0 !== cT ? cT : 0) <= 0 || (this.selected[TT] = this.selected[TT] === kT ? null : kT, this.status = null, null === (lT = this.onPartSelected) || void 0 === lT || lT.call(this), this.emit())
        }, this.forge = TT => {
          var kT, cT;
          const lT = this.selectedParts();
          if (null === lT || this.isPending() || !this.open) return;
          const MT = (0, Tl.k)(lT);
          if (null === MT || MT.coalCost > this.coal) return;
          const KT = this.preview(MT),
            OT = null !== (kT = null === (cT = this.onForgeStarted) || void 0 === cT ? void 0 : cT.call(this, KT.tier, KT.named, TT)) && void 0 !== kT ? kT : () => {};
          if (this.dropArrival(), TT) {
            const TT = {
              id: ++this.forgeId,
              preview: KT,
              timers: [],
              stopSounds: OT,
              landed: !1,
              reply: null
            };
            TT.timers.push(setTimeout((() => {
              TT.landed = !0, null !== TT.reply && (this.apply(TT.reply), TT.reply = null, this.emit())
            }), kl), setTimeout((() => {
              this.finishForge(TT)
            }), cl)), this.forging = TT
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(lT)
        }, this.snapshot = this.buildSnapshot()
      }
      Av(TT) {
        var kT;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.forgeMessageKind) return this.dropForge(), this.apply(TT), this.status = null, this.show(), void(null === (kT = this.onOpened) || void 0 === kT || kT.call(this));
        const cT = this.forging;
        if (null !== cT && null !== TT.forgeRefusalKey) this.dropForge();
        else if (null !== cT && !cT.landed) return void(cT.reply = TT);
        this.apply(TT), this.emit()
      }
      apply(TT) {
        if (this.owned = TT.forgeOwnedParts, this.coal = TT.forgeCoalOwned, this.keepSelectionOwned("open" === TT.forgeMessageKind), null !== TT.forgeForgedSwordId) {
          var kT;
          const cT = (0, Tl.k)(TT.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (kT = null === cT || void 0 === cT ? void 0 : cT.displayName) && void 0 !== kT ? kT : ""
            }
          }
        } else null !== TT.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: TT.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(TT) {
        this.translate = TT, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(TT) {
        var kT;
        this.forging = null;
        const cT = this.selectedParts(),
          lT = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: TT.id,
          sameSword: null !== cT && (null === (kT = (0, Tl.k)(cT)) || void 0 === kT ? void 0 : kT.displayName) === TT.preview.name,
          timer: lT
        }, this.emit()
      }
      dropForge() {
        const TT = this.forging;
        if (null !== TT) {
          this.forging = null;
          for (const kT of TT.timers) clearTimeout(kT);
          TT.stopSounds(), null !== TT.reply && this.apply(TT.reply)
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
        var TT, kT, cT;
        const lT = this.selectedParts(),
          MT = null === lT ? null : (0, Tl.k)(lT),
          KT = null !== (TT = null === (kT = this.forging) || void 0 === kT ? void 0 : kT.preview) && void 0 !== TT ? TT : null === MT ? null : this.preview(MT);
        return {
          enabled: this.received,
          open: this.open,
          slots: Tl.i.map((TT => ({
            kind: TT,
            label: this.translate(hl[TT]),
            parts: this.partsFor(TT)
          }))),
          coalOwned: this.coal,
          preview: KT,
          unformedSword: Tl.f[null !== (cT = this.selected.Blade) && void 0 !== cT ? cT : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((TT => TT > 0)),
          canForge: null !== KT && !KT.coalShort && !this.isPending(),
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
      preview(TT) {
        return {
          name: TT.displayName,
          lore: TT.lore,
          baseSword: TT.baseSword,
          enchantmentTier: TT.enchantmentTier,
          tier: Number(TT.enchantmentTier.slice(-1)),
          named: TT.named,
          stats: this.stats(TT),
          effects: TT.effects,
          coalCost: TT.coalCost,
          coalShort: null === this.forging && TT.coalCost > this.coal
        }
      }
      partsFor(TT) {
        const kT = [];
        for (const lT of Tl.d) {
          var cT;
          const MT = (0, Tl.l)(lT, TT),
            KT = null !== (cT = this.owned[MT]) && void 0 !== cT ? cT : 0;
          KT > 0 && kT.push({
            material: lT,
            itemName: MT,
            owned: KT,
            selected: this.selected[TT] === lT,
            placeholder: !1
          })
        }
        if (0 === kT.length) {
          const cT = Tl.d[0];
          kT.push({
            material: cT,
            itemName: (0, Tl.l)(cT, TT),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return kT
      }
      stats(TT) {
        const kT = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${TT.powerMultiplier.toFixed(2)}`,
          better: TT.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${TT.damageMultiplier.toFixed(2)}`,
          better: TT.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/TT.cooldownMultiplier).toFixed(2)}`,
          better: TT.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${TT.knockbackMultiplier.toFixed(2)}`,
          better: TT.knockbackMultiplier > 1
        }];
        return TT.reachBonus > 0 && kT.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${TT.reachBonus.toFixed(1)}`,
          better: !0
        }), TT.damageReduction > 0 && kT.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*TT.damageReduction)}%`,
          better: !0
        }), kT
      }
      selectedParts() {
        const {
          Blade: TT,
          Guard: kT,
          Handle: cT
        } = this.selected;
        return null === TT || null === kT || null === cT ? null : {
          blade: TT,
          guard: kT,
          handle: cT
        }
      }
      keepSelectionOwned(TT) {
        for (const cT of Tl.i) {
          var kT;
          const lT = this.selected[cT];
          if (null !== lT && (null !== (kT = this.owned[(0, Tl.l)(lT, cT)]) && void 0 !== kT ? kT : 0) > 0) continue;
          if (!TT) {
            this.selected[cT] = null;
            continue
          }
          const MT = [...Tl.d].reverse().find((TT => {
            var kT;
            return (null !== (kT = this.owned[(0, Tl.l)(TT, cT)]) && void 0 !== kT ? kT : 0) > 0
          }));
          this.selected[cT] = null !== MT && void 0 !== MT ? MT : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const Ql = "skyblockSmugglerView",
      Sl = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class Dl extends AT {
      constructor(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, cT, lT), this.translate = kT, this.requestBuy = MT, this.now = KT, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = TT => TT, this.onBought = null, this.buy = TT => {
          const kT = this.deals[TT];
          void 0 !== kT && !this.isPending() && this.open && !this.soldOut.has(TT) && this.canAfford(kT) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, TT))
        }, this.snapshot = this.buildSnapshot()
      }
      Av(TT) {
        if (this.received = !0, this.day = TT.smugglerDay, this.deals = TT.smugglerDeals, this.rivets = TT.smugglerRivetsOwned, this.crests = TT.smugglerCrestsOwned, this.soldOut = new Set(TT.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + TT.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = TT.smugglerBoughtSlot, null !== TT.smugglerBoughtSlot) {
          var kT, cT;
          const lT = this.deals[TT.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === lT ? "" : this.dealName(lT),
              amount: String(null !== (kT = null === lT || void 0 === lT ? void 0 : lT.smugglerDealAmount) && void 0 !== kT ? kT : 0)
            }
          }, this.boughtCount++, null === (cT = this.onBought) || void 0 === cT || cT.call(this)
        } else null !== TT.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: TT.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(TT, kT, cT) {
        this.translate = TT, void 0 !== cT && (this.itemName = cT), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(TT) {
        if (null !== TT.smugglerDealUniqueName) return TT.smugglerDealUniqueName;
        const kT = Sl[TT.smugglerDealItem];
        return void 0 === kT ? this.itemName(TT.smugglerDealItem) : this.translate(kT)
      }
      canAfford(TT) {
        return TT.smugglerDealRivets <= this.rivets && TT.smugglerDealCrests <= this.crests
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
        const TT = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return TT <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : TT < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(TT)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(TT / 60)),
          minutes: String(TT % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((TT, kT) => ({
            slot: kT,
            itemName: TT.smugglerDealItem,
            displayName: this.dealName(TT),
            enchantmentTier: TT.smugglerDealEnchantmentTier,
            amount: TT.smugglerDealAmount,
            rivets: TT.smugglerDealRivets,
            crests: TT.smugglerDealCrests,
            affordable: this.canAfford(TT),
            soldOut: this.soldOut.has(kT),
            justBought: this.boughtSlot === kT
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
    const al = "skyblockPassageView",
      Fl = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function rl(TT, kT) {
      return TT(Fl[kT])
    }

    function Pl(TT, kT, cT, lT) {
      const MT = Math.ceil((cT - lT) / 864e5),
        KT = rl(TT, kT);
      return MT > 1 ? TT("skyblockGame:passageNextDays", {
        phase: KT,
        days: String(MT)
      }) : TT("skyblockGame:passageNextSoon", {
        phase: KT
      })
    }
    class wl extends AT {
      constructor(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(TT, cT, lT), this.translate = kT, this.now = MT, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = TT => TT, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      Av(TT) {
        this.message = TT, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(TT, kT, cT) {
        this.translate = TT, void 0 !== cT && (this.itemName = cT), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(TT) {
        return {
          itemName: TT.passageFish,
          displayName: this.itemName(TT.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(TT.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const TT = this.message;
        return null === TT ? {
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
          phase: TT.passagePhase,
          phaseName: rl(this.translate, TT.passagePhase),
          visitors: TT.passageVisitors.map((TT => this.describe(TT))),
          resting: this.describe(TT.passageResting),
          nextPhase: TT.passageNextPhase,
          next: Pl(this.translate, TT.passageNextPhase, TT.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var ml = cT(38397);
    const bl = "skyblockKeepersChairView";
    class zl extends AT {
      constructor(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new ml.b;
        super(TT, cT, lT), this.translate = kT, this.requestAim = MT, this.now = KT, this.pacer = OT, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = TT => TT, this.aim = TT => {
          !this.awaitingReply && this.open && this.atChair && TT !== this.favoured && (null === TT || this.islands.some((kT => kT.keepersChairIslandId === TT && kT.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== TT && void 0 !== TT ? TT : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = OT.subscribe((() => {
          this.emit()
        }))
      }
      Av(TT) {
        var kT, cT;
        this.received = !0;
        const lT = this.favoured,
          MT = this.atChair;
        var KT;
        return this.islands = TT.keepersChairIslands, this.favoured = TT.keepersChairFavoured, this.passage = null !== (kT = TT.keepersChairPassage) && void 0 !== kT ? kT : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (cT = TT.keepersChairAtChair) || void 0 === cT || cT, "place" === TT.keepersChairMessageKind ? (!MT && this.atChair && "refused" === (null === (KT = this.status) || void 0 === KT ? void 0 : KT.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== TT.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: TT.keepersChairRefusalKey,
          island: null
        } : this.favoured !== lT && (this.status = null === this.favoured ? {
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
      receivePassage(TT) {
        this.received && (this.passage = TT, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(TT, kT, cT) {
        this.translate = TT, void 0 !== cT && (this.itemName = cT), this.emit()
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
      islandName(TT) {
        const kT = this.islands.find((kT => kT.keepersChairIslandId === TT));
        return void 0 === kT ? TT : this.translate(kT.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const TT = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          kT = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((TT => {
            const kT = TT.keepersChairFeaturedFish;
            return {
              id: TT.keepersChairIslandId,
              name: this.translate(TT.keepersChairIslandNameKey),
              relit: TT.keepersChairIslandRelit,
              featuredFish: null === kT ? null : {
                itemName: kT,
                displayName: this.itemName(kT)
              },
              favoured: TT.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === TT ? null : {
            tone: TT.tone,
            text: this.translate(TT.key, null === TT.island ? void 0 : {
              island: this.islandName(TT.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === kT ? null : {
            phase: kT.keepersChairPassagePhase,
            phaseName: rl(this.translate, kT.keepersChairPassagePhase),
            nextPhase: kT.keepersChairPassageNextPhase,
            next: Pl(this.translate, kT.keepersChairPassageNextPhase, kT.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const Jl = "skyblockReachLogView",
      ol = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      Hl = "Caught Fish",
      el = [1, 2, 4];

    function Gl(TT, kT) {
      return TT.map((TT => ({
        ...TT,
        reachLogPageFish: TT.reachLogPageFish.map((TT => ({
          ...TT,
          reachLogFishFresh: kT(TT)
        })))
      })))
    }
    class Vl extends AT {
      constructor(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new ml.b;
        super(TT, cT, lT), this.translate = kT, this.requestOpen = MT, this.pacer = KT, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = TT => TT, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = TT => {
          this.pages.some((kT => kT.reachLogIslandId === TT)) && (this.selected = TT, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = KT.subscribe((() => {
          this.emit()
        }))
      }
      Av(TT) {
        if (this.received = !0, "status" === TT.reachLogMessageKind) return !0 === TT.reachLogNews && this.markNews(), this.serverFresh = TT.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const kT = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== TT.reachLogMessageKind)
          if (this.pageViews = null, this.pages = Gl(TT.reachLogPages, (TT => TT.reachLogFishFresh || this.heldFresh.has(TT.reachLogFishItem))), this.letGoShown = TT.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, kT) this.showPages();
          else {
            for (const TT of this.pages)
              for (const kT of TT.reachLogPageFish) kT.reachLogFishFresh && this.heldFresh.add(kT.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(TT, kT, cT) {
        this.translate = TT, this.pageViews = null, void 0 !== cT && (this.itemName = cT), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = Gl(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var TT, kT, cT, lT;
        const MT = this.pages.find((TT => TT.reachLogPageFish.some((TT => TT.reachLogFishFresh))));
        if (void 0 !== MT) return MT.reachLogIslandId;
        if (null !== this.selected && this.pages.some((TT => TT.reachLogIslandId === this.selected))) return this.selected;
        return null !== (TT = null !== (kT = null === (cT = this.pages.filter((TT => TT.reachLogIslandAwake)).at(-1)) || void 0 === cT ? void 0 : cT.reachLogIslandId) && void 0 !== kT ? kT : null === (lT = this.pages[0]) || void 0 === lT ? void 0 : lT.reachLogIslandId) && void 0 !== TT ? TT : null
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
        return this.pages.map((TT => {
          var kT;
          return {
            id: TT.reachLogIslandId,
            name: this.translate(TT.reachLogIslandNameKey),
            awake: TT.reachLogIslandAwake,
            gold: TT.reachLogPageGold,
            caught: TT.reachLogPageFish.filter((TT => TT.reachLogFishCaught && !TT.reachLogFishVisitor)).length,
            total: TT.reachLogPageFish.filter((TT => !TT.reachLogFishVisitor)).length,
            fish: TT.reachLogPageFish.map((TT => {
              const kT = TT.reachLogFishBestKg;
              return {
                itemName: TT.reachLogFishItem,
                name: TT.reachLogFishCaught ? this.itemName(TT.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: TT.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / TT.reachLogFishChance))
                }),
                best: TT.reachLogFishCaught ? null === kT ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: kT.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: TT.reachLogFishMarks,
                ribbons: el.map((kT => 0 !== (TT.reachLogFishRibbons & kT))),
                glimmer: 0 !== (8 & TT.reachLogFishRibbons),
                halo: 0 !== (32 & TT.reachLogFishRibbons),
                fresh: TT.reachLogFishFresh,
                visitor: TT.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (kT = TT.reachLogPageReturner) && void 0 !== kT ? kT : null)
          }
        }))
      }
      buildReturner(TT) {
        return null === TT ? null : {
          itemName: TT.reachLogReturnerFishItem,
          line: this.translate(TT.reachLogReturnerLineKey, {
            name: this.translate(TT.reachLogReturnerNameKey),
            trinket: this.translate(TT.reachLogReturnerTrinketKey)
          }),
          back: TT.reachLogReturnerBack
        }
      }
      receivePassagePhase(TT) {
        null !== this.passagePhase && this.passagePhase !== TT && (this.pagesCurrent = !1), this.passagePhase = TT
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const El = "skyblockLampLightView";
    class Zl {
      constructor(TT, kT, cT, lT) {
        this.nt = TT, this.translate = kT, this.requestCommand = cT, this.pacer = lT, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.yv = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = TT => {
          TT ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = TT => {
          this.send(`buy ${TT}`)
        }, this.socket = TT => {
          this.send(`socket ${null!==TT&&void 0!==TT?TT:VT}`)
        }, this.wearTint = TT => {
          this.send(`tint ${null!==TT&&void 0!==TT?TT:VT}`)
        }, this.setSituation = TT => {
          this.situation = TT, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = lT.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = lT.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      Av(TT) {
        if (this.message = TT, null !== TT.lampLightShop && (this.shop = TT.lampLightShop), "open" === TT.lampLightKind && (this.refusalKey = null), "reply" === TT.lampLightKind) {
          var kT;
          const MT = null !== (kT = TT.lampLightReplyTag) && void 0 !== kT ? kT : null,
            KT = null !== MT && MT === this.offTag;
          var cT, lT;
          if (KT ? this.settleOff() : null !== MT && MT !== this.awaitingTag || this.settleReply(), this.refusalKey = TT.lampLightRefusalKey, null !== TT.lampLightBought && !KT) this.sparkle = {
            id: TT.lampLightBought,
            count: (null !== (cT = null === (lT = this.sparkle) || void 0 === lT ? void 0 : lT.count) && void 0 !== cT ? cT : 0) + 1
          }
        }
        TT.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === TT.lampLightKind && (this.lastGained = TT.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(TT) {
        TT !== this.atChair && (this.atChair = TT, TT && (this.refusalKey = null), this.emit())
      }
      setTranslator(TT, kT) {
        this.translate = TT, this.locale = null !== kT && void 0 !== kT ? kT : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.yv = !0
      }
      send(TT) {
        var kT;
        if (null !== this.awaitingTag || "ready" !== (null === (kT = this.message) || void 0 === kT ? void 0 : kT.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const cT = this.nextTag();
        this.awaitingTag = cT, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${TT} ${cT}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const TT = this.nextTag();
        this.offTag = TT, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${TT}`)
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
        this.yv || (this.snapshot = this.buildSnapshot(), this.nt(this.snapshot))
      }
      formatLight(TT) {
        return Math.floor(TT).toLocaleString(this.locale)
      }
      formatPercent(TT) {
        const kT = 100 * TT;
        return kT >= 10 ? Math.round(kT).toLocaleString(this.locale) : kT.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(TT, kT) {
        if ("bite" === TT) return this.translate("skyblockGame:lampLightBite", {
          seconds: (kT.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === TT) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(kT.lampLightRareChance)
        });
        if ("notice" === TT) return null === kT.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(kT.lampLightNoticeChance)
        });
        const cT = "meter" === TT ? kT.lampLightMeterCatches : kT.lampLightBloomCatches;
        return null === cT ? null : this.translate("meter" === TT ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(cT))
        })
      }
      oddsLines(TT, kT) {
        const cT = (TT, kT) => {
            var cT;
            return null !== (cT = {
              bite: kT.lampLightBiteMs,
              rare: kT.lampLightRareChance,
              meter: kT.lampLightMeterCatches,
              bloom: kT.lampLightBloomCatches,
              notice: kT.lampLightNoticeChance
            } [TT]) && void 0 !== cT ? cT : 0
          },
          lT = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          MT = [];
        for (const KT of ["bite", "rare", "meter", "bloom", "notice"]) {
          const OT = this.formatOdds(KT, TT),
            yT = this.formatOdds(KT, kT);
          if (null === OT || null === yT || "bite" !== KT && "rare" !== KT && OT === yT) continue;
          const fT = cT(KT, kT) - cT(KT, TT),
            xT = lT[KT] ? fT < 0 : fT > 0;
          MT.push({
            label: KT,
            before: OT,
            after: yT,
            tone: OT === yT ? "same" : xT ? "better" : "worse"
          })
        }
        return MT
      }
      charmView(TT, kT, cT) {
        const lT = TT.lampLightCharmId.charAt(0).toUpperCase() + TT.lampLightCharmId.slice(1),
          MT = "bloom" === this.situation;
        return {
          id: TT.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${lT}`),
          effect: this.translate(`skyblockGame:lampLightCharm${lT}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(TT.lampLightCharmCost)
          }),
          owned: TT.lampLightCharmOwned,
          affordable: cT >= TT.lampLightCharmCost,
          socketed: kT.lampLightSocketed === TT.lampLightCharmId,
          lines: this.oddsLines(MT ? kT.lampLightBareBloom : kT.lampLightBareOpen, MT ? TT.lampLightCharmBloom : TT.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var TT, kT, cT, lT;
        const MT = this.message,
          KT = "ready" === (null === MT || void 0 === MT ? void 0 : MT.lampLightStatus) ? this.shop : null,
          OT = null !== (TT = null === MT || void 0 === MT ? void 0 : MT.lampLightBalance) && void 0 !== TT ? TT : 0,
          yT = this.atChair,
          fT = "loading" === (null === MT || void 0 === MT ? void 0 : MT.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === MT || void 0 === MT ? void 0 : MT.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          xT = "ready" !== (null === MT || void 0 === MT ? void 0 : MT.lampLightStatus) || yT ? null !== (kT = this.refusalKey) && void 0 !== kT ? kT : fT : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== MT && "locked" !== MT.lampLightStatus,
          status: null !== (cT = null === MT || void 0 === MT ? void 0 : MT.lampLightStatus) && void 0 !== cT ? cT : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(OT)
          }),
          releasing: null !== (lT = null === MT || void 0 === MT ? void 0 : MT.lampLightReleasing) && void 0 !== lT && lT,
          gained: null === MT || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === MT || void 0 === MT ? void 0 : MT.lampLightStatus) && yT && !this.isPending(),
          situation: this.situation,
          shop: null === KT ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: KT.lampLightOddsRod,
              island: this.translate(KT.lampLightIslandNameKey)
            }),
            heldRod: null !== KT.lampLightHeldRod,
            charms: KT.lampLightCharms.map((TT => this.charmView(TT, KT, OT))),
            tints: KT.lampLightTints.map((TT => {
              const kT = TT.lampLightTintId,
                [cT, lT, MT] = TT.lampLightTintColour;
              return {
                id: kT,
                name: this.translate(`skyblockGame:lampLightTint${kT.charAt(0).toUpperCase()}${kT.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(TT.lampLightTintCost)
                }),
                owned: TT.lampLightTintOwned,
                affordable: OT >= TT.lampLightTintCost,
                wearing: KT.lampLightTint === kT,
                colour: `rgb(${cT}, ${lT}, ${MT})`
              }
            })),
            wearingIslandColours: null === KT.lampLightTint
          },
          notice: null === xT ? null : this.translate(xT),
          sparkle: this.sparkle
        }
      }
    }
    const ul = "skyblockMagmawardView";
    class Xl {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.nt = TT, this.now = kT, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = RT.map((() => 0)), this.wornAt = RT.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      Av(TT) {
        var kT, cT;
        const lT = RT.map(((kT, cT) => !0 === TT.magmawardPiecesWorn[cT]));
        if (!lT.includes(!0)) return this.snapshot = null, void this.nt(null);
        const MT = this.now(),
          KT = this.snapshot;
        null === KT && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const OT = TT.magmawardFuelCarried,
          yT = !lT.includes(!1);
        let fT = null !== (kT = null === KT || void 0 === KT ? void 0 : KT.pulse) && void 0 !== kT ? kT : null,
          xT = null !== (cT = null === KT || void 0 === KT ? void 0 : KT.flare) && void 0 !== cT ? cT : null;
        TT.magmawardFuelBurned ? (fT = "burn", xT = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = MT, this.flareAt = MT) : null !== KT && OT > KT.fuel && (fT = "gain", this.pulseToken++, this.pulseAt = MT), yT && null !== KT && !KT.fullSet && (xT = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = MT, this.setLitAt = MT);
        const IT = RT.map(((TT, kT) => (lT[kT] && null !== KT && !KT.pieces[kT].worn && (this.wornTokens[kT]++, this.wornAt[kT] = MT), {
          itemName: TT,
          worn: lT[kT],
          wornToken: this.wornTokens[kT],
          justWorn: lT[kT] && this.isPlaying(this.wornAt[kT], MT)
        })));
        this.snapshot = {
          pieces: IT,
          wornCount: lT.filter(Boolean).length,
          fullSet: yT,
          fuel: OT,
          fuelState: OT <= 0 ? "empty" : OT <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, MT) ? fT : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, MT) ? xT : null,
          flareToken: this.flareToken,
          setLit: yT && this.isPlaying(this.setLitAt, MT),
          setLitToken: this.setLitToken
        }, this.nt(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.nt(null)
      }
      isPlaying(TT, kT) {
        return kT - TT < 1200
      }
    }
    const dl = "skyblockGlowtideView";
    class Ll {
      constructor(TT) {
        this.nt = TT, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = TT => {
          this.arrow = TT, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      Av(TT) {
        this.bloom = TT.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.nt(null))
      }
      afterRender(TT, kT) {
        const cT = this.bloom;
        if (null === cT || null === TT) return;
        const lT = cT.glowtideBloomX - TT[0],
          KT = cT.glowtideBloomZ - TT[2],
          OT = Math.hypot(lT, KT),
          yT = this.snapshot,
          fT = null !== yT && void 0 !== yT && yT.inRange ? 1 : 0,
          xT = OT <= 12.5 + fT && TT[1] - cT.glowtideBloomY <= 10 + fT;
        !xT || null !== yT && void 0 !== yT && yT.inRange || this.inRangeToken++;
        const IT = {
          colour: cT.glowtideBloomColour,
          inRange: xT,
          distance: Math.round(OT),
          inRangeToken: this.inRangeToken
        };
        (null === yT || IT.colour !== yT.colour || IT.inRange !== yT.inRange || !xT && IT.distance !== yT.distance) && (this.snapshot = IT, this.nt(IT));
        const AT = MT.d.computeShortestRotation(kT, (0, MT.ub)([lT, 0, KT]));
        null === this.arrow || Math.abs(AT - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${AT}rad)`, this.arrowTurn = AT)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.nt(null)
      }
    }
    const Rl = "skyblockGlowMeterView";
    class gl {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.nt = TT, this.now = kT, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      Av(TT) {
        const kT = this.now(),
          {
            glowMeterFill: cT,
            glowMeterCapacity: lT
          } = TT,
          MT = cT >= lT,
          KT = this.snapshot;
        null !== KT && (MT && !KT.full && (this.fullToken++, this.fullAt = kT), KT.full && !MT ? (this.burstToken++, this.burstAt = kT) : cT > KT.fill && (this.gainToken++, this.gainAt = kT)), this.snapshot = {
          fill: cT,
          DA: lT,
          ratio: Math.min(1, Math.max(0, cT / lT)),
          full: MT,
          rares: TT.glowMeterRares,
          ready: MT && this.isPlaying(this.fullAt, kT),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, kT),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, kT),
          gainToken: this.gainToken
        }, this.nt(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.nt(null)
      }
      isPlaying(TT, kT) {
        return kT - TT < 2e3
      }
    }
    const Ul = "skyblockHushWaitView";
    class Yl {
      constructor(TT) {
        this.nt = TT, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      Av(TT) {
        let {
          hushWaitMs: kT,
          hushWaitTotalMs: cT,
          hushWaitLines: lT
        } = TT;
        if (this.clearTimers(), this.token++, 0 === lT.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (kT <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: lT[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const MT = Math.max(null !== cT && void 0 !== cT ? cT : kT, kT),
          KT = MT - kT,
          OT = TT => MT * TT / lT.length,
          yT = TT => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: MT,
              elapsedMs: KT,
              line: lT[TT],
              lineIndex: TT
            })
          };
        let fT = 0;
        for (; fT + 1 < lT.length && OT(fT + 1) <= KT;) fT++;
        yT(fT);
        for (let xT = fT + 1; xT < lT.length; xT++) this.later(OT(xT) - KT, (() => {
          yT(xT)
        }));
        this.later(kT, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(TT) {
        this.snapshot = TT, this.nt(TT)
      }
      later(TT, kT) {
        this.timers.push(setTimeout(kT, TT))
      }
      clearTimers() {
        for (const TT of this.timers) clearTimeout(TT);
        this.timers = []
      }
    }
    const Bl = "skyblockTideChartsView",
      Wl = 36e5,
      nl = 864e5;

    function pl(TT, kT, cT) {
      const [lT, MT, KT, OT] = TT.tideChartArea, yT = Math.floor(kT), fT = Math.floor(cT);
      return yT >= lT && yT <= KT && fT >= MT && fT <= OT
    }

    function il(TT, kT, cT) {
      const [lT, MT, KT, OT] = TT.tideChartWater;
      return function(TT, kT, cT, lT, MT, KT) {
        const OT = 4 - gT(Math.floor(MT) - (TT - cT), cT);
        return 5 * gT(Math.floor(KT) - (kT - lT), lT) + OT
      }(lT, MT, KT, OT, kT, cT)
    }

    function ql(TT, kT, cT) {
      const lT = TT.tideCharts;
      for (let MT = 0; MT < lT.length; MT++)
        if (pl(lT[MT], kT, cT)) return lT[MT];
      return null
    }

    function sl(TT, kT, cT) {
      const lT = Math.max(0, kT - cT);
      return lT > nl ? TT("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(lT / nl))
      }) : lT > Wl ? TT("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(lT / Wl))
      }) : TT("skyblockGame:tideChartsTurnSoon")
    }
    class TM extends AT {
      constructor(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(TT, cT, lT), this.translate = kT, this.now = MT, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.gC = TT => {
          this.picked = TT, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Av(TT) {
        const kT = this.message;
        if (null !== kT)
          for (const lT of TT.tideCharts) {
            var cT;
            const TT = kT.tideCharts.find((TT => TT.tideChartIsland === lT.tideChartIsland)),
              MT = lT.tideChartLit & ~(null !== (cT = null === TT || void 0 === TT ? void 0 : TT.tideChartLit) && void 0 !== cT ? cT : 0);
            void 0 !== TT && 0 !== MT && (this.pulse = {
              island: lT.tideChartIsland,
              cells: MT,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = TT, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(TT, kT) {
        var cT;
        const lT = null === this.message || Number.isNaN(TT) ? null : ql(this.message, TT, kT),
          MT = null !== (cT = null === lT || void 0 === lT ? void 0 : lT.tideChartIsland) && void 0 !== cT ? cT : null,
          KT = null === lT ? -1 : function(TT, kT, cT) {
            const [lT, MT, KT, OT] = TT.tideChartWater;
            return function(TT, kT, cT, lT, MT, KT, OT) {
              return ((MT - TT) / (cT + OT)) ** 2 + ((KT - kT) / (lT + OT)) ** 2 <= 1
            }(lT, MT, KT, OT, kT, cT, 2) ? il(TT, kT, cT) : -1
          }(lT, TT, kT);
        return (MT !== this.hereIsland || KT !== this.hereCell) && (this.hereIsland = MT, this.hereCell = KT, null !== MT && (this.lastIsland = MT), !0)
      }
      afterRender(TT) {
        if (null === this.message) return;
        this.lastX = null === TT ? Number.NaN : TT[0], this.lastZ = null === TT ? Number.NaN : TT[2];
        const kT = this.locate(this.lastX, this.lastZ),
          cT = this.expirePulses();
        (kT || cT || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const TT = this.now();
        return !(!this.open || TT - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = TT, sl(this.translate, this.message.tideChartTurnsInMs, TT - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(TT, kT) {
        const cT = null === this.message ? null : ql(this.message, TT, kT);
        if (null === cT) return;
        const lT = il(cT, TT, kT);
        0 === (cT.tideChartPreBlank & 1 << lT) && (this.cast = {
          island: cT.tideChartIsland,
          cell: lT,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const TT = this.now();
        let kT = !1;
        return 0 !== this.pulse.cells && TT - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, kT = !0), null !== this.cast && TT - this.cast.atMs >= 1500 && (this.cast = null, kT = !0), kT
      }
      setTranslator(TT) {
        this.translate = TT, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(TT, kT) {
        var cT;
        return null !== (cT = TT.tideCharts.find((TT => TT.tideChartIsland === kT))) && void 0 !== cT ? cT : null
      }
      describe(TT) {
        var kT, cT, lT;
        const MT = TT.tideChartIsland,
          KT = [];
        for (let jT = 0; jT < 25; jT++) {
          const kT = 1 << jT;
          0 !== (TT.tideChartLit & kT) ? KT.push("lit") : 0 !== (TT.tideChartClear & kT) ? KT.push("clear") : 0 !== (TT.tideChartPreBlank & kT) ? KT.push("shore") : KT.push("water")
        }
        const OT = function(TT) {
            let kT = 0;
            for (let cT = TT >>> 0; 0 !== cT; cT &= cT - 1) kT++;
            return kT
          }(TT.tideChartLit),
          yT = TT.tideChartInkCount,
          fT = this.translate(TT.tideChartIslandNameKey),
          xT = this.translate("skyblockGame:tideChartsLit", {
            lit: String(OT),
            ink: String(yT)
          }),
          IT = null === TT.tideChartPictureNameKey ? null : this.translate(TT.tideChartPictureNameKey),
          AT = this.hereIsland === MT && -1 !== this.hereCell ? this.hereCell : null,
          CT = [`${fT}: ${xT}.`];
        if (null !== IT && CT.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: IT
          })), null !== AT) {
          const TT = Math.floor(AT / 5) + 1,
            kT = AT % 5 + 1;
          CT.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(TT),
            column: String(kT)
          }))
        }
        return {
          island: MT,
          islandName: fT,
          cells: KT,
          hereCell: AT,
          lit: OT,
          ink: yT,
          litText: xT,
          pictureName: IT,
          gridLabel: CT.join(" "),
          pulseCells: this.pulse.island === MT ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (kT = this.cast) || void 0 === kT ? void 0 : kT.island) === MT ? this.cast.cell : null,
          castToken: null !== (cT = null === (lT = this.cast) || void 0 === lT ? void 0 : lT.token) && void 0 !== cT ? cT : 0
        }
      }
      buildSnapshot() {
        var TT, kT, cT;
        const lT = this.message;
        if (null === lT || 0 === lT.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const MT = this.findChart(lT, this.hereIsland),
          KT = null !== (TT = null !== (kT = null !== (cT = this.findChart(lT, this.open ? this.picked : null)) && void 0 !== cT ? cT : MT) && void 0 !== kT ? kT : this.findChart(lT, this.lastIsland)) && void 0 !== TT ? TT : lT.tideCharts[0],
          OT = null === MT ? null : this.describe(MT);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: OT,
          card: KT === MT ? OT : this.describe(KT),
          turnsText: sl(this.translate, lT.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(lT.tideChartBookCount)
          }),
          tabs: lT.tideCharts.map((TT => ({
            island: TT.tideChartIsland,
            name: this.translate(TT.tideChartIslandNameKey),
            selected: TT.tideChartIsland === KT.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const kM = "skyblockRegularsView",
      cM = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      lM = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function MM(TT, kT) {
      return "given" === TT ? kT.given : "owed" === TT ? kT.owed : kT.goal
    }
    class KM extends AT {
      constructor(TT, kT, cT, lT) {
        super(TT, cT, lT), this.translate = kT, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = TT => TT, this.openIsland = TT => {
          this.selected = TT, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = TT => {
          this.selected = TT, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Av(TT) {
        this.message = TT, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const TT = this.openedFromReachLog;
        return this.openedFromReachLog = !1, TT
      }
      setTranslator(TT, kT, cT) {
        this.translate = TT, void 0 !== cT && (this.itemName = cT), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(TT, kT, cT) {
        return {
          text: this.translate(MM(TT, kT), cT),
          given: "given" === TT
        }
      }
      describeRegular(TT, kT) {
        const cT = this.translate,
          lT = null !== TT.regularKg,
          MT = TT.regularMeetings,
          KT = lT ? 0 === MT ? cT("skyblockGame:regularsNotMet") : 1 === MT ? cT("skyblockGame:regularsMeetingsOne") : cT("skyblockGame:regularsMeetings", {
            count: MT
          }) : "";
        return {
          id: TT.regularId,
          name: cT(TT.regularNameKey),
          line: cT(TT.regularLineKey),
          itemName: TT.regularFishItem,
          fishName: this.itemName(TT.regularFishItem),
          tagged: lT,
          size: null === TT.regularKg ? cT("skyblockGame:regularsNotTagged") : cT("skyblockGame:regularsSize", {
            kg: TT.regularKg.toFixed(1)
          }),
          meetings: KT,
          chance: cT("skyblockGame:regularsChance", {
            count: TT.regularOneInCasts
          }),
          resting: TT.regularRestingToday,
          gifts: [{
            text: cT("skyblockGame:regularsGiftFlare"),
            given: MT >= 3
          }, this.describeGift(TT.regularTintGift, cM, {
            tint: cT(TT.regularTintNameKey)
          })],
          history: [...TT.regularHistory].reverse().map((TT => {
            const lT = TT.regularMeetingKg.toFixed(1),
              MT = kT - TT.regularMeetingDay;
            return MT <= 0 ? cT("skyblockGame:regularsToday", {
              kg: lT
            }) : cT("skyblockGame:regularsDaysAgo", {
              days: MT,
              kg: lT
            })
          }))
        }
      }
      describeIsland(TT, kT) {
        return {
          id: TT.regularsIslandId,
          name: this.translate(TT.regularsIslandNameKey),
          charm: this.describeGift(TT.regularsCharmGift, lM, {
            charm: this.translate(TT.regularsCharmNameKey)
          }),
          regulars: TT.regularsList.map((TT => this.describeRegular(TT, kT)))
        }
      }
      buildSnapshot() {
        var TT, kT, cT, lT;
        const MT = this.message;
        if (null === MT) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const KT = MT.regularsIslands.map((TT => this.describeIsland(TT, MT.regularsToday))),
          OT = null !== (TT = null !== (kT = null === (cT = KT.find((TT => TT.id === this.selected))) || void 0 === cT ? void 0 : cT.id) && void 0 !== kT ? kT : null === (lT = KT[0]) || void 0 === lT ? void 0 : lT.id) && void 0 !== TT ? TT : "";
        return {
          enabled: !0,
          open: this.open,
          selected: OT,
          islands: KT
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const OM = "skyblockHiddenWatersView";
    class yM {
      constructor(TT) {
        this.nt = TT, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      Av(TT) {
        this.snapshot = function(TT) {
          const [kT, cT] = TT.hiddenWatersMapSize, lT = (TT, lT) => ({
            left: 1 - TT / kT,
            top: lT / cT
          }), MT = new Map;
          for (const [OT, yT] of TT.hiddenWatersGlimpses) {
            var KT;
            const TT = null !== (KT = MT.get(OT)) && void 0 !== KT ? KT : [];
            TT.push(yT), MT.set(OT, TT)
          }
          return {
            found: TT.hiddenWatersFound,
            total: TT.hiddenWatersTotal,
            aspect: cT / kT,
            pins: TT.hiddenWatersPins.map((TT => {
              let [kT, cT] = TT;
              return lT(kT, cT)
            })),
            islands: TT.hiddenWatersIslands.map((TT => {
              let [MT, KT, OT, yT] = TT;
              const {
                left: fT,
                top: xT
              } = lT(OT + 1, KT);
              return {
                left: fT,
                top: xT,
                width: (OT + 1 - MT) / kT,
                height: (yT + 1 - KT) / cT
              }
            })),
            glimpses: MT
          }
        }(TT), this.nt(this.snapshot)
      }
    }
    const fM = "skyblockDialogueView";
    class xM extends AT {
      constructor(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, cT, lT), this.translate = kT, this.requestDialogue = MT, this.now = KT, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = TT => {
          this.selection = {
            kind: "quest",
            questId: TT
          }, this.request(), this.show()
        }, this.selectCharacter = TT => {
          this.selection = {
            kind: "character",
            npcId: TT
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      Av(TT) {
        this.received = !0, this.scripts = TT.questDialogueScripts, this.speakers = new Map(TT.questDialogueSpeakers.map((TT => [TT.dialogueSpeakerId, TT]))), this.emit()
      }
      setTranslator(TT) {
        this.translate = TT, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const TT = this.now();
        TT >= this.requestAvailableAt && (this.requestAvailableAt = TT + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var TT;
        const kT = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...kT,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const cT = this.selection;
        if ("quest" === cT.kind) {
          const TT = this.scripts.find((TT => TT.dialogueQuestId === cT.questId));
          return {
            ...kT,
            characters: [],
            questFocus: cT.questId,
            conversations: TT ? [this.conversation(TT)] : []
          }
        }
        const lT = [];
        for (let KT = this.scripts.length - 1; KT >= 0; KT--) {
          const TT = this.scripts[KT].dialogueLines;
          for (let kT = TT.length - 1; kT >= 0; kT--) lT.includes(TT[kT].dialogueSpeakerId) || lT.push(TT[kT].dialogueSpeakerId)
        }
        const MT = null !== cT.npcId && lT.includes(cT.npcId) ? cT.npcId : null !== (TT = lT[0]) && void 0 !== TT ? TT : null;
        return {
          ...kT,
          characters: lT.map((TT => {
            var kT, cT;
            return {
              id: TT,
              styling: null !== (kT = null === (cT = this.speakers.get(TT)) || void 0 === cT ? void 0 : cT.dialogueSpeakerStyling) && void 0 !== kT ? kT : TT,
              selected: TT === MT
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((TT => TT.dialogueLines.some((TT => TT.dialogueSpeakerId === MT)))).map((TT => this.conversation(TT))).reverse()
        }
      }
      conversation(TT) {
        let kT = null;
        return {
          questId: TT.dialogueQuestId,
          questName: this.translate(TT.dialogueQuestNameKey),
          completed: TT.dialogueQuestCompleted,
          lines: TT.dialogueLines.map(((TT, cT) => {
            var lT;
            const MT = TT.dialogueSpeakerId === kT || null === (lT = this.speakers.get(TT.dialogueSpeakerId)) || void 0 === lT ? void 0 : lT.dialogueSpeakerStyling;
            return kT = TT.dialogueSpeakerId, {
              key: cT,
              display: {
                line: {
                  translationKey: TT.dialogueLineKey,
                  params: this.params(TT.dialogueLineParams)
                },
                speakerName: MT,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(TT) {
        if (void 0 !== TT) return Object.fromEntries(Object.entries(TT).map((TT => {
          let [kT, cT] = TT;
          return [kT, "string" === typeof cT ? cT : this.translate(cT.translationKey)]
        })))
      }
    }
    var IM = cT(602),
      AM = cT(1279),
      CM = cT(118);
    const jM = "skyblockAutographsView";

    function vM(TT) {
      const kT = IM.m[TT];
      return {
        label: kT.chatTag.map((TT => TT.str)).join(""),
        icon: kT.icon,
        colour: kT.mainRGB
      }
    }
    class tM extends AT {
      constructor(TT) {
        let kT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = kT, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      Av(TT) {
        this.signatures = TT.autographSignatures, TT.autographOpen ? this.show() : this.emit()
      }
      setTranslator(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = kT, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var TT;
        const kT = null !== (TT = this.signatures) && void 0 !== TT ? TT : [],
          cT = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          lT = [...kT].sort(((TT, kT) => Number(null !== kT.autographRank) - Number(null !== TT.autographRank) || kT.autographSignedAtMs - TT.autographSignedAtMs)).map((TT => ({
            key: `${TT.autographSignedAtMs}|${TT.autographSignerName}`,
            name: (0, AM.c)(TT.autographSignerName, !CM.featureFlags.canSeeRealPlayerNames),
            rank: null === TT.autographRank ? null : vM(TT.autographRank),
            signedOn: cT.format(TT.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: lT,
          total: lT.length,
          rankTotal: lT.filter((TT => null !== TT.rank)).length
        }
      }
    }
    const hM = "skyblockHudView",
      NM = () => {},
      QM = {
        getItem: () => null,
        setItem: NM,
        removeItem: NM
      };
    class SM {
      constructor(TT) {
        let {
          translate: kT,
          translateWithIcons: cT,
          setMenuOpen: lT = NM,
          dismissMenu: MT = () => {
            lT(!1)
          },
          publishSkills: KT = NM,
          publishQuests: OT = NM,
          publishQuestNotification: yT = NM,
          publishDungeons: fT = NM,
          publishCollections: xT = NM,
          publishMap: IT = NM,
          publishHud: AT = NM,
          publishPortalTransit: CT = NM,
          publishDailyReward: vT = NM,
          publishMailbox: tT = NM,
          publishQuestGraph: hT = NM,
          publishForge: NT = NM,
          publishSmuggler: QT = NM,
          publishKeepersChair: ST = NM,
          publishReachLog: DT = NM,
          publishLampLight: aT = NM,
          publishMagmaward: FT = NM,
          publishGlowtide: PT = NM,
          publishGlowMeter: wT = NM,
          publishHushWait: mT = NM,
          publishPassage: bT = NM,
          publishTideCharts: zT = NM,
          publishRegulars: JT = NM,
          publishHiddenWaters: oT = NM,
          publishDialogue: HT = NM,
          publishAutographs: eT = NM,
          isLoadingScreenUp: GT = () => !1,
          onDailyRewardCoinLanded: VT = NM,
          onDailyRewardStarted: ET = NM,
          onDailyRewardFinished: ZT = NM,
          onDailyRewardItemLanded: uT = NM,
          onMailboxStarted: XT = NM,
          journeyStorage: dT = QM,
          requestTracking: LT = NM,
          requestTravel: RT = NM,
          requestDungeonEnter: gT = NM,
          requestQuestJump: UT = NM,
          requestQuestArrive: YT = NM,
          requestForge: BT = NM,
          requestSmuggle: WT = NM,
          requestKeepersChairAim: nT = NM,
          requestReachLogOpen: pT = NM,
          requestLampLight: iT = NM,
          requestDialogue: qT = NM
        } = TT;
        this.navigation = void 0, this.map = void 0, this.compass = new rT, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new ml.b, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = TT => TT, this.close = () => {
          for (const TT of this.panels) TT.close()
        }, this.setMenuOpen = lT, this.publishHud = AT, this.portalTransit = new dc(CT, dT), this.magmaward = new Xl(FT), this.glowtide = new Ll(PT), this.glowMeter = new gl(wT), this.hushWait = new Yl(mT), this.dailyReward = new gc(vT, (() => GT() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (TT => {
          this.quests.setNotificationsHeld(TT)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), VT, ET, ZT, uT);
        const sT = TT => {
          this.panels.some((TT => TT.isOpen())) || (TT ? MT() : this.setMenuOpen(!1))
        };
        this.skills = new yc(KT, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), kT, void 0, void 0, sT), this.quests = new Cc(OT, LT, kT, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, sT, yT), this.dungeons = new tc(fT, kT, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, sT, gT), this.collections = new Zc(xT, kT, (() => {
          this.beforePanelOpen(this.collections)
        }), sT), this.map = new jT(IT, RT, kT, (() => {
          this.beforePanelOpen(this.map)
        }), sT), this.questGraph = new sc(hT, kT, (() => {
          this.beforePanelOpen(this.questGraph)
        }), sT, UT, YT, dT), this.forge = new Nl(NT, kT, (() => {
          this.beforePanelOpen(this.forge)
        }), sT, BT), this.smuggler = new Dl(QT, kT, (() => {
          this.beforePanelOpen(this.smuggler)
        }), sT, WT), this.lampLight = new Zl(aT, kT, iT, this.commandPacer), this.keepersChair = new zl(ST, kT, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (TT => {
          this.lampLight.onChairClosed(), sT(TT)
        }), nT, Date.now, this.commandPacer), this.reachLog = new Vl(DT, kT, (() => {
          this.beforePanelOpen(this.reachLog)
        }), sT, pT, this.commandPacer), this.passage = new wl(bT, kT, (() => {
          this.beforePanelOpen(this.passage)
        }), sT), this.tideCharts = new TM(zT, kT, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), sT), this.regulars = new KM(JT, kT, (() => {
          this.beforePanelOpen(this.regulars)
        }), (TT => {
          this.regulars.takeReturnToReachLog() && !TT && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), sT(TT)
        })), this.hiddenWaters = new yM(oT), this.dialogue = new xM(HT, kT, (() => {
          this.beforePanelOpen(this.dialogue)
        }), sT, qT), this.autographs = new tM(eT, (() => {
          this.beforePanelOpen(this.autographs)
        }), sT), this.mailbox = new Wc(tT, (() => GT() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), XT), this.quests.translateWithIcons = null !== cT && void 0 !== cT ? cT : null, this.skills.onLevelUp = TT => {
          this.quests.notify(TT)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Kc(this.map, this.quests, this.compass, kT)
      }
      getHudSnapshot() {
        const TT = this.hudSnapshot,
          kT = this.dailyReward.getHeldCoins();
        return null === TT || kT <= 0 || !("hudPurseCoins" in TT) ? TT : {
          ...TT,
          hudPurseCoins: Math.max(0, TT.hudPurseCoins - kT)
        }
      }
      receiveHud(TT) {
        this.hudSnapshot = TT, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(TT) {
        this.setMenuOpen(!0);
        const kT = TT === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = TT;
        for (const cT of this.panels) cT === TT || kT && cT === this.reachLog || cT.close();
        this.openingPanel = null
      }
      setTranslator(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kT => this.resolveItemName(kT, TT);
        this.quests.translateWithIcons = null !== cT && void 0 !== cT ? cT : null, this.navigation.setTranslator(TT, kT), this.lampLight.setTranslator(TT, kT), this.mailbox.setItemName(lT);
        for (const MT of this.panels) MT.setTranslator(TT, kT, lT)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const TT of this.panels) TT.dispose()
      }
    }
    var DM = cT(1046),
      aM = cT.n(DM),
      FM = cT(31),
      rM = cT(36416),
      PM = cT(3348),
      wM = cT(1943),
      mM = cT(1921),
      bM = cT(9388),
      zM = cT(1195),
      JM = cT(1461),
      oM = cT(1099);

    function HM(TT) {
      let {
        controller: kT,
        minimap: cT,
        children: lT
      } = TT;
      const KT = (0, JM.i)(hM, kT.getHudSnapshot()),
        [OT, yT] = (0, wT.useState)(kT.skills.getSnapshot().overallLevel);
      (0, JM.g)(Oc, (TT => {
        yT(TT.overallLevel)
      }));
      const fT = (0, wT.useRef)(null);
      (0, JM.g)(Rc, (TT => {
        ! function(TT, kT) {
          if (null === TT || "function" !== typeof TT.animate) return;
          const cT = kT ? 1.35 : 1.15;
          TT.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${cT})`
          }, {
            transform: "scale(1)"
          }], {
            duration: kT ? 320 : 160,
            easing: "ease-out"
          }), TT.classList.toggle("Receiving", !kT), kT && (TT.classList.remove("Shine"), TT.offsetWidth, TT.classList.add("Shine"))
        }(fT.current, TT)
      }));
      const {
        t: xT
      } = (0, zM.B)(), {
        isTouchScreen: IT
      } = (0, FM.n)(["isTouchScreen"]), [AT, CT] = (0, wT.useState)(null);
      return (0, PM.j)(AT, ".SkyblockRightHud"), null !== KT || cT ? (0, oM.jsx)(rM.g, {
        placement: "topRight",
        children: (0, oM.jsxs)("div", {
          className: aM()("SkyblockRightHud", {
            TouchScreen: IT
          }),
          children: [cT, null !== KT && (0, oM.jsxs)("div", {
            ref: CT,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in KT ? (0, oM.jsx)("div", {
              className: "SkyblockHudHelp",
              children: KT.hudHelpText
            }) : (0, oM.jsxs)(oM.Fragment, {
              children: [(0, oM.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, oM.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, oM.jsx)("strong", {
                    style: {
                      color: MT.H.cyanUiText
                    },
                    children: xT(KT.hudZoneNameKey)
                  }), null !== OT && (0, oM.jsx)("span", {
                    style: {
                      color: MT.H.goldUiText
                    },
                    children: xT("skyblockGame:level", {
                      level: (0, bM.g)(OT)
                    })
                  })]
                }), (0, oM.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: fT,
                  children: [(0, oM.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, oM.jsx)(wM.d, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, bM.g)(KT.hudPurseCoins)]
                })]
              }), KT.hudClockText.length > 0 && (0, oM.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, oM.jsx)(mM.b, {
                  text: KT.hudClockText
                })
              })]
            }), lT, "hudZoneNameKey" in KT && (0, oM.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function eM(TT) {
      let {
        icon: kT
      } = TT;
      const cT = (0, wT.useCallback)((TT => {
        null === TT || void 0 === TT || TT.replaceChildren(Bk(kT))
      }), [kT]);
      return (0, oM.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: cT
      })
    }

    function GM(TT) {
      let {
        controller: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)();
      return (0, oM.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: kT.display.mountPlayer,
        title: cT("skyblockGame:mapYouAreHere"),
        children: (0, oM.jsx)(eM, {
          icon: "player"
        })
      })
    }
    const VM = cT(38405),
      EM = Object.fromEntries(VM.keys().map((TT => [TT.replace(/^\.\/(.*)\.png$/, "$1"), VM(TT)])));

    function ZM(TT, kT) {
      var cT;
      return null !== (cT = EM[TT]) && void 0 !== cT ? cT : EM[kT]
    }

    function uM(TT) {
      let {
        imageKey: kT,
        fallbackImageKey: cT,
        geometryKey: lT,
        alt: MT,
        className: KT
      } = TT;
      const [OT, yT] = (0, wT.useState)((() => function(TT, kT) {
        return [{
          id: 0,
          imageKey: TT,
          geometryKey: kT,
          phase: "shown"
        }]
      }(kT, lT))), fT = function(TT, kT, cT) {
        const lT = TT[TT.length - 1];
        if (lT.imageKey === kT && lT.geometryKey === cT) return TT;
        const MT = {
          id: lT.id + 1,
          imageKey: kT,
          geometryKey: cT,
          phase: "entering"
        };
        return lT.geometryKey === cT ? [{
          ...lT,
          phase: "leaving"
        }, MT] : [MT]
      }(OT, kT, lT);
      return fT !== OT && yT(fT), (0, oM.jsx)(oM.Fragment, {
        children: fT.map((TT => (0, oM.jsx)("img", {
          className: aM()("SkyblockMapTerrainImage", KT, {
            Entering: "entering" === TT.phase,
            Leaving: "leaving" === TT.phase
          }),
          src: ZM(TT.imageKey, cT),
          alt: "leaving" === TT.phase ? "" : MT,
          onAnimationEnd: () => {
            yT((kT => function(TT, kT) {
              return TT.flatMap((TT => TT.id !== kT ? [TT] : "leaving" === TT.phase ? [] : [{
                ...TT,
                phase: "shown"
              }]))
            }(kT, TT.id)))
          }
        }, TT.id)))
      })
    }
    var XM = cT(4515),
      dM = cT(1470);

    function LM(TT) {
      if ("Tab" !== TT.key) return;
      const kT = Array.from(TT.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        cT = kT.indexOf(document.activeElement);
      var lT;
      if (TT.shiftKey && cT <= 0) TT.preventDefault(), null === (lT = kT.at(-1)) || void 0 === lT || lT.focus();
      else if (!TT.shiftKey && (-1 === cT || cT === kT.length - 1)) {
        var MT;
        TT.preventDefault(), null === (MT = kT[0]) || void 0 === MT || MT.focus()
      }
    }

    function RM() {
      const TT = (0, wT.useRef)(null);
      return (0, wT.useCallback)((kT => {
        var cT;
        kT ? (TT.current = document.activeElement, kT.focus()) : null === (cT = TT.current) || void 0 === cT || cT.focus()
      }), [])
    }

    function gM(TT) {
      let {
        percent: kT,
        label: cT,
        levelUpToken: lT,
        colour: MT
      } = TT;
      return (0, oM.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": cT,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": kT,
        "aria-valuetext": cT,
        children: [(0, oM.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${kT/100})`
          }
        }), null !== lT && void 0 !== lT && (0, oM.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": MT
          }
        }, lT)]
      })
    }

    function UM(TT) {
      let {
        mount: kT
      } = TT;
      return (0, oM.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: kT,
        hidden: !0,
        children: (0, oM.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, oM.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, oM.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function YM(TT, kT, cT, lT) {
      (0, wT.useLayoutEffect)((() => {
        const MT = TT.current;
        if (!cT || null === kT || void 0 === kT || !kT.local || !MT) return;
        const KT = Array.from(MT.querySelectorAll(".SkyblockMapNode")),
          OT = [...kT.points, ...kT.portals],
          yT = () => {
            const TT = MT.clientWidth,
              cT = MT.clientHeight,
              yT = KT.map(((MT, KT) => {
                const yT = OT[KT];
                return {
                  id: yT.id,
                  portal: KT >= kT.points.length,
                  x: yT.position[0] * TT / 100,
                  y: yT.position[1] * cT / 100,
                  width: MT.offsetWidth / lT,
                  height: MT.offsetHeight / lT
                }
              })),
              fT = new Map(OT.map(((TT, kT) => [TT.id, KT[kT]])));
            for (const kT of function(TT, kT, cT) {
                const lT = [],
                  MT = [...TT].sort(((TT, kT) => Number(kT.portal) - Number(TT.portal) || TT.id.localeCompare(kT.id)));
                for (const KT of MT) {
                  const TT = TT => Math.max(KT.width / 2, Math.min(kT - KT.width / 2, TT)),
                    MT = TT => Math.max(KT.height / 2, Math.min(cT - KT.height / 2, TT)),
                    OT = [TT(KT.x)],
                    yT = [MT(KT.y)];
                  for (const kT of lT) OT.push(TT(kT.x - (kT.width + KT.width) / 2 - 4), TT(kT.x + (kT.width + KT.width) / 2 + 4)), yT.push(MT(kT.y - (kT.height + KT.height) / 2 - 4), MT(kT.y + (kT.height + KT.height) / 2 + 4));
                  let fT = {
                      ...KT,
                      x: OT[0],
                      y: yT[0]
                    },
                    xT = 1 / 0,
                    IT = 1 / 0;
                  for (const kT of new Set(OT))
                    for (const TT of new Set(yT)) {
                      let cT = 0;
                      for (const OT of lT) cT += Math.max(0, (KT.width + OT.width) / 2 + 4 - Math.abs(kT - OT.x)) * Math.max(0, (KT.height + OT.height) / 2 + 4 - Math.abs(TT - OT.y));
                      const MT = (kT - KT.x) ** 2 + (TT - KT.y) ** 2;
                      (cT < xT || cT === xT && MT < IT) && (fT = {
                        ...KT,
                        x: kT,
                        y: TT
                      }, xT = cT, IT = MT)
                    }
                  lT.push(fT)
                }
                return lT
              }(yT, TT, cT)) {
              const TT = fT.get(kT.id);
              TT.style.left = `${kT.x}px`, TT.style.top = `${kT.y}px`
            }
          };
        yT();
        const fT = new ResizeObserver(yT);
        fT.observe(MT);
        for (const TT of KT) fT.observe(TT);
        return () => {
          fT.disconnect()
        }
      }), [TT, kT, cT, lT])
    }
    const BM = {
        zoom: 1,
        x: 0,
        y: 0
      },
      WM = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function nM(TT, kT, cT) {
      return Math.min(cT, Math.max(kT, TT))
    }

    function pM(TT, kT, cT) {
      const lT = Math.min(1, cT * kT / TT),
        MT = Math.min(1, TT / (cT * kT));
      return {
        x0: (1 - lT) / 2,
        y0: (1 - MT) / 2,
        x1: (1 + lT) / 2,
        y1: (1 + MT) / 2
      }
    }

    function iM(TT, kT, cT, lT) {
      const MT = kT * (lT - cT);
      if (MT <= 1) return .5 - kT * (cT + lT) / 2;
      const KT = .45 * Math.min(1, MT - 1);
      return nM(TT, 1 - kT * lT - KT, KT - kT * cT)
    }

    function qM(TT, kT) {
      const cT = nM(TT.zoom, 1, 12);
      return {
        zoom: cT,
        x: iM(TT.x, cT, kT.x0, kT.x1),
        y: iM(TT.y, cT, kT.y0, kT.y1)
      }
    }

    function sM(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : WM;
      const KT = nM(TT.zoom * kT, 1, 12),
        OT = KT / TT.zoom;
      return qM({
        zoom: KT,
        x: cT - (cT - TT.x) * OT,
        y: lT - (lT - TT.y) * OT
      }, MT)
    }

    function TK(TT, kT, cT, lT) {
      const [MT, KT] = (0, wT.useState)(BM);
      (0, wT.useEffect)((() => {
        KT(BM)
      }), [cT]), (0, wT.useEffect)((() => {
        const cT = TT.current;
        if (!kT || !cT) return;
        const MT = () => pM(cT.clientWidth, cT.clientHeight, lT),
          OT = TT => {
            const kT = cT.getBoundingClientRect();
            return {
              x: (TT.clientX - kT.left) / kT.width,
              y: (TT.clientY - kT.top) / kT.height
            }
          },
          yT = new Map;
        let fT = {
            x: 0,
            y: 0
          },
          xT = !1,
          IT = 0;
        const AT = TT => {
            TT.preventDefault();
            const kT = TT.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * TT.deltaY : TT.deltaY,
              cT = OT(TT);
            KT((TT => sM(TT, Math.exp(.0015 * -kT), cT.x, cT.y, MT())))
          },
          CT = TT => {
            "mouse" === TT.pointerType && 0 !== TT.button || (yT.set(TT.pointerId, OT(TT)), 1 === yT.size && (fT = {
              x: TT.clientX,
              y: TT.clientY
            }, xT = !1), IT = 0)
          },
          jT = TT => {
            const kT = yT.get(TT.pointerId);
            if (!kT) return;
            const lT = OT(TT);
            if (yT.set(TT.pointerId, lT), 2 === yT.size) {
              const [TT, kT] = [...yT.values()], cT = Math.hypot(TT.x - kT.x, TT.y - kT.y);
              if (IT > 0) {
                const lT = cT / IT;
                KT((cT => sM(cT, lT, (TT.x + kT.x) / 2, (TT.y + kT.y) / 2, MT())))
              }
              return IT = cT, void(xT = !0)
            }!xT && Math.hypot(TT.clientX - fT.x, TT.clientY - fT.y) < 4 || (xT || (xT = !0, cT.setPointerCapture(TT.pointerId)), KT((TT => function(TT, kT, cT) {
              let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WM;
              return qM({
                zoom: TT.zoom,
                x: TT.x + kT,
                y: TT.y + cT
              }, lT)
            }(TT, lT.x - kT.x, lT.y - kT.y, MT()))))
          },
          vT = TT => {
            yT.delete(TT.pointerId), IT = 0
          },
          tT = TT => {
            xT && (TT.stopPropagation(), TT.preventDefault(), xT = !1)
          },
          hT = new ResizeObserver((() => {
            KT((TT => qM(TT, MT())))
          }));
        return hT.observe(cT), cT.addEventListener("wheel", AT, {
          passive: !1
        }), cT.addEventListener("pointerdown", CT), cT.addEventListener("pointermove", jT), cT.addEventListener("pointerup", vT), cT.addEventListener("pointercancel", vT), cT.addEventListener("click", tT, !0), () => {
          hT.disconnect(), cT.removeEventListener("wheel", AT), cT.removeEventListener("pointerdown", CT), cT.removeEventListener("pointermove", jT), cT.removeEventListener("pointerup", vT), cT.removeEventListener("pointercancel", vT), cT.removeEventListener("click", tT, !0)
        }
      }), [TT, kT, cT, lT]);
      return {
        view: MT,
        zoomBy: kT => {
          const cT = TT.current;
          cT && KT((TT => sM(TT, kT, .5, .5, pM(cT.clientWidth, cT.clientHeight, lT))))
        }
      }
    }

    function kK(TT) {
      var kT, cT, lT, MT;
      let {
        controller: KT,
        navigation: OT
      } = TT;
      const yT = (0, JM.i)(CT, KT.getSnapshot()),
        {
          t: fT
        } = (0, zM.B)(),
        xT = RM(),
        IT = yT.presentation,
        AT = (0, wT.useRef)(null),
        jT = (0, wT.useRef)(null),
        vT = Boolean(yT.open && (null === IT || void 0 === IT ? void 0 : IT.local) && IT.background),
        tT = TK(AT, vT, `${yT.open}|${yT.tab}|${null===IT||void 0===IT||null===(kT=IT.background)||void 0===kT?void 0:kT.geometryKey}`, null !== (cT = null === IT || void 0 === IT || null === (lT = IT.background) || void 0 === lT ? void 0 : lT.ratio) && void 0 !== cT ? cT : 2);
      if (YM(jT, IT, yT.open, tT.view.zoom), !IT || !yT.open) return null;
      const hT = IT.local ? IT.background : null,
        NT = {
          "--map-ratio": String(null !== (MT = null === hT || void 0 === hT ? void 0 : hT.ratio) && void 0 !== MT ? MT : 2),
          backgroundColor: null === hT || void 0 === hT ? void 0 : hT.colour
        },
        QT = {
          "--map-zoom": String(tT.view.zoom),
          transform: `translate(${100*tT.view.x}%, ${100*tT.view.y}%) scale(${tT.view.zoom})`
        };
      return (0, oM.jsx)(XM.c, {
        show: yT.open,
        close: KT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: xT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, oM.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, oM.jsx)("h2", {
                id: "skyblockMapTitle",
                children: fT("skyblockGame:map")
              }), IT.minimap && (0, oM.jsx)("p", {
                children: IT.minimap.caption
              })]
            }), (0, oM.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((TT => (0, oM.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": TT === yT.tab ? "true" : void 0,
                className: aM()({
                  Selected: TT === yT.tab
                }),
                "aria-pressed": TT === yT.tab,
                onClick: () => {
                  KT.selectTab(TT)
                },
                children: fT("local" === TT ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, TT)))
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              onClick: KT.dismiss
            })]
          }), (0, oM.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, oM.jsxs)("div", {
              ref: AT,
              className: aM()("SkyblockMapCanvas", {
                Local: IT.local,
                Overview: !IT.local,
                Zoomed: tT.view.zoom > 1
              }),
              style: NT,
              children: [(0, oM.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: vT ? QT : void 0,
                children: (0, oM.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: jT,
                  children: [hT && (0, oM.jsx)(uM, {
                    className: "SkyblockMapTerrain",
                    imageKey: hT.imageKey,
                    fallbackImageKey: hT.fallbackImageKey,
                    geometryKey: hT.geometryKey,
                    alt: hT.label
                  }), IT.local && (0, oM.jsx)(UM, {
                    mount: OT.display.mountMapSearchArea
                  }), !IT.local && (0, oM.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: IT.connections.map((TT => (0, oM.jsx)("line", {
                      className: aM()({
                        Explored: TT.explored
                      }),
                      x1: TT.start[0],
                      y1: TT.start[1],
                      x2: TT.end[0],
                      y2: TT.end[1]
                    }, TT.id)))
                  }), IT.points.map((TT => {
                    const kT = !IT.local && TT.thumbnail ? EM[TT.thumbnail] : void 0;
                    return (0, oM.jsxs)("div", {
                      className: aM()("SkyblockMapNode", {
                        Current: TT.current
                      }),
                      style: {
                        left: `${TT.position[0]}%`,
                        top: `${TT.position[1]}%`
                      },
                      children: [(0, oM.jsxs)(dM.e, {
                        className: aM()("SkyblockMapPin", {
                          Unknown: !TT.visited,
                          Current: TT.current
                        }),
                        disabled: yT.pending,
                        onClick: () => {
                          KT.travel(TT.travelKind, TT.travelId)
                        },
                        children: [kT && (0, oM.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: kT,
                          alt: ""
                        }), !kT && (0, oM.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, oM.jsx)(eM, {
                            icon: TT.icon
                          })
                        }), (0, oM.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: TT.name
                        })]
                      }), TT.current && (0, oM.jsx)("span", {
                        className: aM()("SkyblockMapHereBadge", {
                          Above: TT.position[1] > 50
                        }),
                        children: fT("skyblockGame:mapYouAreHere")
                      })]
                    }, TT.id)
                  })), IT.portals.map((TT => (0, oM.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${TT.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${TT.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, oM.jsxs)(dM.e, {
                      className: "SkyblockMapPin",
                      disabled: yT.pending,
                      onClick: () => {
                        KT.travel(TT.travelKind, TT.travelId)
                      },
                      children: [(0, oM.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: TT.colour
                        },
                        "aria-hidden": "true",
                        children: (0, oM.jsx)(eM, {
                          icon: TT.icon
                        })
                      }), (0, oM.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: TT.name
                      })]
                    })
                  }, TT.id))), IT.local && (0, oM.jsx)(GM, {
                    controller: OT
                  })]
                })
              }), vT && (0, oM.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, oM.jsx)("button", {
                  type: "button",
                  "aria-label": fT("skyblockGame:mapZoomIn"),
                  disabled: tT.view.zoom >= 12,
                  onClick: () => {
                    tT.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, oM.jsx)("button", {
                  type: "button",
                  "aria-label": fT("skyblockGame:mapZoomOut"),
                  disabled: tT.view.zoom <= 1,
                  onClick: () => {
                    tT.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, oM.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: yT.feedback
              })]
            })
          }), (0, oM.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [IT.progress && (0, oM.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, oM.jsx)("span", {
                children: IT.progress
              }), (0, oM.jsx)(gM, {
                percent: IT.percent,
                label: IT.progress
              })]
            }), IT.noLandmarks && (0, oM.jsx)("span", {
              children: fT("skyblockGame:mapNoLandmarks")
            }), IT.canTravel && (0, oM.jsx)("span", {
              className: "SkyblockMapHint",
              children: fT("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function cK(TT) {
      let {
        view: kT,
        controller: cT,
        navigation: lT
      } = TT;
      const {
        t: MT
      } = (0, zM.B)(), {
        isTouchScreen: KT
      } = (0, FM.n)(["isTouchScreen"]);
      return (0, oM.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": MT("skyblockGame:mapLocal"),
        children: [KT && (0, oM.jsx)(dM.e, {
          className: "SkyblockMinimapOpen",
          onClick: cT.showLocal,
          children: MT("skyblockGame:map")
        }), (0, oM.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: kT.colour
          },
          children: [(0, oM.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: lT.display.mountTerrain,
            style: {
              width: kT.width,
              height: kT.height
            },
            children: [(0, oM.jsx)(uM, {
              imageKey: kT.imageKey,
              fallbackImageKey: kT.fallbackImageKey,
              geometryKey: kT.geometryKey,
              alt: kT.label
            }), (0, oM.jsx)(UM, {
              mount: lT.display.mountMinimapSearchArea
            }), kT.markers.map((TT => (0, oM.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${TT.position[0]}%`,
                top: `${TT.position[1]}%`,
                color: TT.colour
              },
              title: TT.name,
              children: (0, oM.jsx)(eM, {
                icon: TT.icon
              })
            }, TT.id)))]
          }), (0, oM.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: MT("skyblockGame:mapYouAreHere"),
            children: (0, oM.jsx)(eM, {
              icon: "player"
            })
          })]
        }), (0, oM.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: kT.caption
        })]
      })
    }

    function lK(TT) {
      let {
        controller: kT
      } = TT;
      return (0, oM.jsxs)("div", {
        className: "SkyblockCompass",
        ref: kT.display.mountCompass,
        children: [(0, oM.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, oM.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, oM.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function MK(TT) {
      let {
        controller: kT,
        surface: cT
      } = TT;
      const {
        t: lT
      } = (0, zM.B)(), MT = (0, JM.i)(Oc, kT.getSnapshot()), KT = RM();
      return MT.enabled ? (0, oM.jsxs)(oM.Fragment, {
        children: ["hud" === cT && (0, oM.jsx)(rM.g, {
          placement: "statBars",
          children: MT.hud && (0, oM.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": MT.hud.colour
            },
            children: [(0, oM.jsx)(gM, {
              percent: MT.hud.skill.percent,
              label: MT.hud.skill.xp,
              levelUpToken: MT.hud.levelUpToken,
              colour: MT.hud.colour
            }), (0, oM.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, oM.jsxs)("span", {
                children: [MT.hud.skill.label, " \xb7 ", MT.hud.skill.level]
              }), (0, oM.jsx)("span", {
                children: MT.hud.gain
              })]
            })]
          })
        }), "hud" === cT && (0, oM.jsx)(rM.g, {
          children: MT.hud && (0, oM.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, oM.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, oM.jsx)("strong", {
                children: MT.hud.skill.label
              }), (0, oM.jsx)("span", {
                children: MT.hud.gain
              })]
            }), (0, oM.jsx)(gM, {
              percent: MT.hud.skill.percent,
              label: MT.hud.skill.xp,
              levelUpToken: MT.hud.levelUpToken,
              colour: MT.hud.colour
            }), (0, oM.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, oM.jsx)("span", {
                children: MT.hud.skill.level
              }), (0, oM.jsx)("span", {
                children: MT.hud.skill.xp
              })]
            })]
          })
        }), "menu" === cT && (0, oM.jsx)(XM.c, {
          show: MT.open,
          close: kT.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, oM.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: KT,
            onKeyDown: LM,
            children: [(0, oM.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, oM.jsxs)("div", {
                children: [(0, oM.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: lT("skyblockGame:skills")
                }), (0, oM.jsx)("p", {
                  children: lT("skyblockGame:skillsIntro")
                })]
              }), (0, oM.jsx)(dM.l, {
                padIgnore: !0,
                onClick: kT.dismiss
              })]
            }), (0, oM.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, oM.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: MT.skills.map((TT => (0, oM.jsxs)(dM.e, {
                  className: aM()("SkyblockSkillCard", {
                    Selected: TT.selected
                  }),
                  ariaPressed: TT.selected,
                  onClick: () => {
                    kT.select(TT.id)
                  },
                  children: [(0, oM.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, oM.jsx)(wM.d, {
                      itemName: TT.icon,
                      amount: 0
                    })
                  }), (0, oM.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, oM.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, oM.jsx)("strong", {
                        children: TT.label
                      }), (0, oM.jsx)("span", {
                        children: TT.level
                      })]
                    }), (0, oM.jsx)(gM, {
                      percent: TT.percent,
                      label: `${TT.label}: ${TT.xp}`
                    }), (0, oM.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: TT.xp
                    })]
                  })]
                }, TT.id)))
              }), MT.detail && (0, oM.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, oM.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, oM.jsx)(wM.d, {
                    itemName: MT.detail.icon,
                    amount: 0
                  })
                }), (0, oM.jsx)("h3", {
                  children: MT.detail.label
                }), (0, oM.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: MT.detail.level
                }), (0, oM.jsx)("p", {
                  children: MT.detail.description
                }), (0, oM.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, oM.jsx)("strong", {
                    children: lT("skyblockGame:currentBenefit")
                  }), (0, oM.jsx)("span", {
                    children: MT.detail.benefit
                  })]
                }), (0, oM.jsx)(gM, {
                  percent: MT.detail.percent,
                  label: MT.detail.xp
                }), (0, oM.jsx)("p", {
                  children: MT.detail.xp
                }), (0, oM.jsx)("h4", {
                  children: lT("skyblockGame:earnXp")
                }), (0, oM.jsx)("ul", {
                  children: MT.detail.sources.map((TT => (0, oM.jsx)("li", {
                    children: TT
                  }, TT)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var KK = cT(1379),
      OK = cT(4800),
      yK = cT(328);

    function fK(TT) {
      let {
        item: kT
      } = TT;
      return (0, oM.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, oM.jsx)(wM.d, {
          itemName: kT,
          amount: 0
        })
      })
    }

    function xK(TT) {
      let {
        name: kT,
        percent: cT,
        progress: lT
      } = TT;
      return (0, oM.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, oM.jsx)(gM, {
          percent: cT,
          label: `${(0,yK.cb)(kT)}: ${lT}`
        }), (0, oM.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: lT
        })]
      })
    }

    function IK(TT) {
      let {
        subquests: kT,
        showDescriptions: cT = !1
      } = TT;
      return (0, oM.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: kT.map((TT => {
          const kT = cT && "completed" === TT.status,
            lT = (0, oM.jsxs)("li", {
              className: aM()("SkyblockQuestStep", TT.status, {
                JustFinished: TT.justFinished,
                JustUnlocked: TT.justUnlocked
              }),
              tabIndex: kT ? 0 : void 0,
              children: [null !== TT.iconItem && (0, oM.jsx)(fK, {
                item: TT.iconItem
              }), null === TT.iconItem && (0, oM.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === TT.status ? "\u2713" : "skipped" === TT.status ? "\u2212" : "\u25cb"
              }), (0, oM.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, oM.jsx)("strong", {
                  children: (0, oM.jsx)(OK.e, {
                    text: TT.name
                  })
                }), cT && !kT && (0, oM.jsx)("span", {
                  children: (0, oM.jsx)(OK.e, {
                    text: TT.description
                  })
                }), null !== TT.barPercent && (0, oM.jsx)(xK, {
                  name: TT.name,
                  percent: TT.barPercent,
                  progress: TT.progress
                }), null === TT.barPercent && !kT && (0, oM.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: TT.statusLabel
                })]
              })]
            }, TT.id);
          return kT ? (0, oM.jsx)(KK.c, {
            delayShow: 200,
            tooltipInner: (0, oM.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, oM.jsx)("span", {
                children: (0, oM.jsx)(OK.e, {
                  text: TT.description
                })
              }), (0, oM.jsx)("strong", {
                children: TT.statusLabel
              })]
            }),
            children: lT
          }, TT.id) : lT
        }))
      })
    }

    function AK(TT) {
      let {
        quest: kT,
        select: cT
      } = TT;
      const {
        t: lT
      } = (0, zM.B)(), MT = kT.focusStep;
      return (0, oM.jsxs)(dM.e, {
        className: aM()("SkyblockQuestCard", {
          Selected: kT.selected,
          Tracked: kT.tracked
        }),
        onClick: () => {
          cT(kT.id)
        },
        children: [(0, oM.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, oM.jsx)("strong", {
            children: (0, oM.jsx)(OK.e, {
              text: kT.name
            })
          }), kT.tracked && (0, oM.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: lT("skyblockGame:currentQuest")
          })]
        }), MT && (0, oM.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== MT.iconItem && (0, oM.jsx)(fK, {
            item: MT.iconItem
          }), (0, oM.jsx)(xK, {
            name: MT.name,
            percent: MT.barPercent,
            progress: MT.progress
          })]
        }), (0, oM.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: kT.progress
        })]
      })
    }

    function CK(TT) {
      let {
        controller: kT,
        surface: cT
      } = TT;
      const lT = (0, JM.i)(Ic, kT.getSnapshot()),
        {
          t: MT
        } = (0, zM.B)(),
        KT = RM();
      return lT.enabled ? (0, oM.jsxs)(oM.Fragment, {
        children: ["hud" === cT && (0, oM.jsx)(oM.Fragment, {
          children: lT.tracked && (0, oM.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: xc,
            children: (0, oM.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [lT.trackedStepPulse > 0 && (0, oM.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, lT.trackedStepPulse), (0, oM.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: MT("skyblockGame:currentQuest")
              }), (0, oM.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, oM.jsx)("strong", {
                  children: (0, oM.jsx)(OK.e, {
                    text: lT.tracked.name
                  })
                }), null !== lT.tracked.clock && (0, oM.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: lT.tracked.clock
                })]
              }), (0, oM.jsx)(IK, {
                subquests: lT.tracked.subquests
              })]
            })
          })
        }), "menu" === cT && (0, oM.jsx)(XM.c, {
          show: lT.open,
          close: kT.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, oM.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: KT,
            onKeyDown: LM,
            children: [(0, oM.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, oM.jsx)("div", {
                children: (0, oM.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: MT("skyblockGame:quests")
                })
              }), (0, oM.jsx)(dM.l, {
                padIgnore: !0,
                onClick: kT.dismiss
              })]
            }), (0, oM.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, oM.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, oM.jsx)("h3", {
                  children: MT("skyblockGame:current")
                }), 0 === lT.active.length && (0, oM.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: MT("skyblockGame:noActiveQuests")
                }), lT.active.map((TT => (0, oM.jsx)(AK, {
                  quest: TT,
                  select: kT.select
                }, TT.id))), (0, oM.jsx)("h3", {
                  children: (0, oM.jsxs)("button", {
                    type: "button",
                    className: aM()("SkyblockQuestSectionToggle", {
                      Expanded: lT.completedExpanded
                    }),
                    "aria-expanded": lT.completedExpanded,
                    onClick: kT.toggleCompleted,
                    children: [(0, oM.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), MT("skyblockGame:completed"), (0, oM.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: lT.completed.length
                    })]
                  })
                }), lT.completedExpanded && 0 === lT.completed.length && (0, oM.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: MT("skyblockGame:noCompletedQuests")
                }), lT.completedExpanded && lT.completed.map((TT => (0, oM.jsx)(AK, {
                  quest: TT,
                  select: kT.select
                }, TT.id)))]
              }), lT.detail && (0, oM.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [lT.detail.completed && (0, oM.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: MT("skyblockGame:completedQuest")
                }), (0, oM.jsx)("h3", {
                  children: (0, oM.jsx)(OK.e, {
                    text: lT.detail.name
                  })
                }), (0, oM.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, oM.jsx)(OK.e, {
                    text: lT.detail.description
                  })
                }), (0, oM.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [lT.detail.progress, null !== lT.detail.clock && (0, oM.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: lT.detail.clock
                  })]
                }), (0, oM.jsx)(IK, {
                  subquests: lT.detail.subquests,
                  showDescriptions: !0
                }), lT.detail.tracked && (0, oM.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: lT.detail.trackLabel
                }), !lT.detail.completed && !lT.detail.tracked && (0, oM.jsx)(dM.m, {
                  onClick: kT.trackSelected,
                  disabled: !lT.detail.canTrack,
                  children: lT.detail.trackLabel
                }), lT.detail.canViewDialogue && (0, oM.jsx)(dM.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: kT.viewDialogue,
                  children: MT("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var jK = cT(1061),
      vK = cT(2623);

    function tK(TT, kT, cT, lT, MT) {
      const KT = TT => "linear" === MT ? TT : {
          SM: MT,
          point: TT
        },
        OT = {};
      for (const [yT, fT] of lT)
        for (const [kT, cT] of Object.entries(TT(yT, fT, KT))) OT[kT] ??= {
          timeline: []
        }, OT[kT].timeline.push(cT);
      return {
        vM: kT,
        loop: cT,
        hM: OT
      }
    }
    const hK = .547,
      NK = .022,
      QK = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      SK = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function DK(TT, kT, cT) {
      const {
        drop: lT = 0,
        shift: MT = 0,
        torso: KT = 0,
        nod: OT = 0,
        tilt: yT = 0,
        legs: fT = [0, 0],
        arms: xT = 0,
        spread: IT = 0
      } = kT, AT = hK * Math.cos(KT) - NK * Math.sin(KT), CT = hK * Math.sin(KT) + NK * Math.cos(KT), jT = cT([0, -lT, MT]);
      return {
        LowerBody: {
          timeFraction: TT,
          position: jT,
          rotation: cT([0, 0, 0])
        },
        UpperBody: {
          timeFraction: TT,
          position: jT,
          rotation: cT([KT, 0, yT])
        },
        HeadMesh: {
          timeFraction: TT,
          position: cT([0, AT - hK - lT, CT - NK + MT]),
          rotation: cT([KT + OT, 0, yT])
        },
        LegLeftMesh: {
          timeFraction: TT,
          rotation: cT([fT[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: TT,
          rotation: cT([fT[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: cT([xT, 0, IT])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: cT([xT, 0, -IT])
        }
      }
    }

    function aK(TT, kT, cT) {
      return tK(DK, TT, kT, cT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function FK(TT) {
      return "number" === typeof TT ? [TT, TT] : TT
    }

    function rK(TT, kT, cT) {
      const {
        rise: lT = 0,
        shift: MT = 0,
        torso: KT = 0,
        twist: OT = 0,
        tilt: yT = 0,
        nod: fT = 0,
        cock: xT = 0,
        arms: IT = 0,
        spread: AT = 0
      } = kT, [CT, jT] = FK(IT), [vT, tT] = FK(AT);
      return {
        TorsoNode: {
          timeFraction: TT,
          position: cT([0, lT, MT]),
          rotation: cT([KT, OT, yT])
        },
        HeadMesh: {
          timeFraction: TT,
          rotation: cT([fT, 0, xT])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: cT([CT, 0, vT])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: cT([jT, 0, -tT])
        }
      }
    }
    const PK = [1.0625, -1, 0];

    function wK(TT) {
      return "number" === typeof TT ? [TT, TT] : TT
    }

    function mK(TT, kT, cT) {
      const {
        drop: lT = 0,
        shift: MT = 0,
        torso: KT = 0,
        tilt: OT = 0,
        nod: yT = 0,
        cock: fT = 0,
        legs: xT = [0, 0],
        arms: IT = 0,
        spread: AT = 0
      } = kT, [CT, jT] = wK(IT), [vT, tT] = wK(AT), hT = -KT, NT = -OT, [QT, ST, DT] = function(TT, kT) {
        const [cT, lT, MT] = [-PK[0], PK[1], -PK[2]], KT = cT * Math.cos(kT) - lT * Math.sin(kT), OT = cT * Math.sin(kT) + lT * Math.cos(kT);
        return [KT - cT, -(OT * Math.cos(TT) - MT * Math.sin(TT) - lT), OT * Math.sin(TT) + MT * Math.cos(TT) - MT]
      }(hT, NT), aT = cT([0, -lT, MT]);
      return {
        TorsoNode: {
          timeFraction: TT,
          position: cT([QT, ST - lT, DT + MT]),
          rotation: cT([hT, 0, NT])
        },
        HeadMesh: {
          timeFraction: TT,
          rotation: cT([-yT, 0, -fT])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: cT([-CT, 0, -vT])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: cT([-jT, 0, tT])
        },
        LegLeftMesh: {
          timeFraction: TT,
          position: aT,
          rotation: cT([-xT[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: TT,
          position: aT,
          rotation: cT([-xT[1], 0, 0])
        }
      }
    }
    var bK = cT(36971),
      zK = cT(38304),
      JK = cT(38478);

    function oK(TT, kT, cT) {
      var lT, MT;
      const KT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return TT + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - TT) * cT
        },
        [OT, yT] = null !== (lT = TT.legs) && void 0 !== lT ? lT : [0, 0],
        [fT, xT] = null !== (MT = kT.legs) && void 0 !== MT ? MT : [0, 0];
      return {
        drop: KT(TT.drop, kT.drop),
        shift: KT(TT.shift, kT.shift),
        torso: KT(TT.torso, kT.torso),
        nod: KT(TT.nod, kT.nod),
        tilt: KT(TT.tilt, kT.tilt),
        legs: [KT(OT, fT), KT(yT, xT)],
        arms: KT(TT.arms, kT.arms),
        spread: KT(TT.spread, kT.spread)
      }
    }
    const HK = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      eK = aK(4400, !0, [
        [0, HK],
        [.16, {
          ...HK,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, HK],
        [.44, {
          ...HK,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, oK(HK, QK, .7)],
        [.66, oK(HK, QK, .78)],
        [.74, oK(HK, SK, .65)],
        [.86, {
          ...HK,
          drop: .14
        }],
        [1, HK]
      ], "catmull-rom-spline"),
      GK = {
        ...HK,
        drop: .14,
        torso: .3,
        spread: .4
      },
      VK = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      EK = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      ZK = {
        caveGolem: eK,
        magmaGolem: aK(3600, !0, [
          [0, GK],
          [.12, {
            ...GK,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...GK,
            tilt: -.08
          }],
          [.4, {
            ...GK,
            tilt: .06,
            drop: .11
          }],
          [.52, oK(GK, QK, .9)],
          [.62, oK(GK, SK, .8)],
          [.7, oK(GK, SK, .45)],
          [.78, oK(GK, SK, .85)],
          [.9, {
            ...GK,
            drop: .17
          }],
          [1, GK]
        ], "catmull-rom-spline"),
        frostWraith: function(TT, kT, cT) {
          return tK(rK, TT, kT, cT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, VK],
          [.14, {
            ...VK,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...VK,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...VK,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...VK,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...VK,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...VK,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...VK,
            rise: .16,
            tilt: -.04
          }],
          [1, VK]
        ], "catmull-rom-spline"),
        tikiTerror: function(TT, kT, cT) {
          return tK(mK, TT, kT, cT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, EK],
          [.16, {
            ...EK,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, EK],
          [.44, {
            ...EK,
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
            ...EK,
            drop: .1
          }],
          [1, EK]
        ], "catmull-rom-spline")
      },
      uK = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      XK = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      dK = Object.fromEntries(Object.entries(ZK).map((TT => {
        let [kT, cT] = TT;
        return [kT, (0, JK.e)((0, bK.g)(cT), kT)]
      })));

    function LK(TT) {
      const kT = function(TT) {
        var kT;
        const cT = (0, zK.d)(TT).poseRig;
        return null !== (kT = XK[TT]) && void 0 !== kT ? kT : void 0 === cT ? null : uK[cT]
      }(TT);
      return null === kT ? null : dK[kT]
    }

    function RK(TT) {
      return {
        "--difficulty-colour": TT
      }
    }
    const gK = (0, wT.lazy)((() => (0, vK.e)(cT.e(192).then((() => cT(41113))), (TT => TT.MobPreview))));

    function UK(TT) {
      var kT, cT, lT;
      let {
        picker: MT,
        controller: KT
      } = TT;
      const {
        t: OT
      } = (0, zM.B)(), yT = RM(), {
        page: fT
      } = MT;
      return (0, oM.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: yT,
        onKeyDown: TT => {
          "ArrowLeft" === TT.key ? (TT.preventDefault(), TT.stopPropagation(), KT.previous()) : "ArrowRight" === TT.key ? (TT.preventDefault(), TT.stopPropagation(), KT.next()) : LM(TT)
        },
        style: RK(fT.colour),
        children: [(0, oM.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, oM.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: MT.dungeonName
          }), (0, oM.jsx)(dM.l, {
            padIgnore: !0,
            onClick: KT.dismiss
          })]
        }), (0, oM.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, oM.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, oM.jsx)(dM.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !MT.canPrevious,
              onClick: KT.previous,
              children: (0, oM.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, oM.jsx)(jK.e, {
                  name: "angle-up"
                })
              })
            }), (0, oM.jsxs)("div", {
              className: aM()("SkyblockBossPickerBoss", {
                Locked: !fT.unlocked
              }),
              children: [null !== fT.bossMobType && (0, oM.jsx)(wT.Suspense, {
                fallback: (0, oM.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, oM.jsx)(gK, {
                  className: "SkyblockBossPickerModel",
                  mobType: fT.bossMobType,
                  variation: fT.bossMobVariation,
                  animation: null !== (kT = LK(fT.bossMobType)) && void 0 !== kT ? kT : void 0
                })
              }), null === fT.bossMobType && (0, oM.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, oM.jsx)(dM.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !MT.canNext,
              onClick: KT.next,
              children: (0, oM.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, oM.jsx)(jK.e, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, oM.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, oM.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [fT.beaten && (0, oM.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), fT.label]
            }), (0, oM.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (cT = fT.bossName) && void 0 !== cT ? cT : "???"
            }), (0, oM.jsxs)("span", {
              className: aM()("SkyblockBossPickerRecord", {
                Locked: null !== fT.lockedHint
              }),
              children: [null !== fT.lockedHintHighlight && (0, oM.jsxs)(oM.Fragment, {
                children: [fT.lockedHintHighlight.before, (0, oM.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: RK(fT.lockedHintHighlight.colour),
                  children: [null !== fT.lockedHintHighlight.icon && (0, oM.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, oM.jsx)(wM.d, {
                      itemName: fT.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), fT.lockedHintHighlight.name]
                }), fT.lockedHintHighlight.after]
              }), null === fT.lockedHintHighlight && (null !== (lT = fT.lockedHint) && void 0 !== lT ? lT : fT.summary)]
            })]
          }), (0, oM.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: MT.pages.map((TT => (0, oM.jsx)("span", {
              className: aM()("SkyblockBossPickerDot", {
                Current: TT.current,
                Locked: !TT.unlocked
              }),
              style: RK(TT.colour)
            }, TT.difficulty)))
          }), (0, oM.jsx)(dM.r, {
            className: "SkyblockBossPickerFight",
            disabled: !fT.unlocked,
            onClick: KT.enter,
            children: OT("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function YK(TT) {
      let {
        dungeon: kT,
        select: cT
      } = TT;
      return (0, oM.jsxs)(dM.e, {
        className: aM()("SkyblockDungeonCard", {
          Selected: kT.selected
        }),
        onClick: () => {
          cT(kT.id)
        },
        children: [(0, oM.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, oM.jsx)("strong", {
            children: kT.name
          }), (0, oM.jsx)("span", {
            children: kT.beatenSummary
          })]
        }), (0, oM.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: kT.difficulties.map((TT => (0, oM.jsxs)("span", {
            className: aM()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: TT.beaten
            }),
            style: RK(TT.colour),
            title: TT.summary,
            children: [TT.beaten && (0, oM.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), TT.label]
          }, TT.difficulty)))
        })]
      })
    }

    function BK(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(vc, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = RM();
      return cT.enabled ? (0, oM.jsxs)(XM.c, {
        show: cT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [cT.picker && (0, oM.jsx)(UK, {
          picker: cT.picker,
          controller: kT
        }), !cT.picker && (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: lT("skyblockGame:dungeons")
              }), (0, oM.jsx)("p", {
                children: lT("skyblockGame:dungeonsIntro")
              })]
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              onClick: kT.dismiss
            })]
          }), (0, oM.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, oM.jsx)("div", {
              className: "SkyblockDungeonList",
              children: cT.dungeons.map((TT => (0, oM.jsx)(YK, {
                dungeon: TT,
                select: kT.select
              }, TT.id)))
            }), cT.detail && (0, oM.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, oM.jsx)("h3", {
                children: cT.detail.name
              }), (0, oM.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: cT.detail.difficulties.map((TT => (0, oM.jsxs)("li", {
                  className: aM()("SkyblockDungeonRecord", {
                    Beaten: TT.beaten
                  }),
                  children: [(0, oM.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: RK(TT.colour),
                    children: [TT.beaten && (0, oM.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), TT.label]
                  }), (0, oM.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: TT.summary
                  })]
                }, TT.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function WK(TT) {
      let {
        collection: kT,
        select: cT
      } = TT;
      return (0, oM.jsxs)(dM.e, {
        className: aM()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: kT.selected,
          Locked: kT.locked
        }),
        ariaPressed: kT.selected,
        onClick: () => {
          cT(kT.id)
        },
        children: [(0, oM.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, oM.jsx)(wM.d, {
            itemName: kT.icon,
            amount: 0
          })
        }), (0, oM.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, oM.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, oM.jsx)("strong", {
              children: kT.name
            }), (0, oM.jsx)("span", {
              children: kT.tier
            })]
          }), (0, oM.jsx)(gM, {
            percent: kT.percent,
            label: `${kT.name}: ${kT.progress}`
          }), (0, oM.jsx)("span", {
            className: "SkyblockSkillXp",
            children: kT.progress
          })]
        })]
      })
    }

    function nK(TT) {
      let {
        collection: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)();
      return (0, oM.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, oM.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, oM.jsx)(wM.d, {
            itemName: kT.icon,
            amount: 0
          })
        }), (0, oM.jsx)("h3", {
          children: kT.name
        }), (0, oM.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: kT.tier
        }), (0, oM.jsx)("p", {
          children: kT.locked ? cT("skyblockGame:collectionLocked") : kT.count
        }), null !== kT.nextReward && (0, oM.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, oM.jsx)("strong", {
            children: cT("skyblockGame:collectionNextReward")
          }), (0, oM.jsx)("span", {
            children: kT.nextReward
          })]
        }), (0, oM.jsx)(gM, {
          percent: kT.percent,
          label: kT.progress
        }), (0, oM.jsx)("p", {
          children: kT.progress
        })]
      })
    }

    function pK(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(Ec, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = RM();
      return cT.enabled ? (0, oM.jsx)(XM.c, {
        show: cT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: lT("skyblockGame:collections")
              }), (0, oM.jsxs)("p", {
                children: [lT("skyblockGame:collectionsIntro"), " ", cT.tiersUnlocked]
              })]
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              onClick: kT.dismiss
            })]
          }), (0, oM.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: cT.categories.map((TT => (0, oM.jsxs)(dM.e, {
              className: aM()("SkyblockCollectionCategory", {
                Selected: TT.selected
              }),
              ariaPressed: TT.selected,
              padTabSelected: TT.selected,
              onClick: () => {
                kT.selectCategory(TT.id)
              },
              children: [(0, oM.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, oM.jsx)(wM.d, {
                  itemName: TT.icon,
                  amount: 0
                })
              }), (0, oM.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, oM.jsx)("strong", {
                  children: TT.label
                }), (0, oM.jsx)("span", {
                  children: TT.tiers
                })]
              })]
            }, TT.id)))
          }), (0, oM.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, oM.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: cT.collections.map((TT => (0, oM.jsx)(WK, {
                collection: TT,
                select: kT.select
              }, TT.id)))
            }), cT.detail && (0, oM.jsx)(nK, {
              collection: cT.detail
            })]
          })]
        })
      }) : null
    }
    const iK = ["completed", "active", "available", "locked"],
      qK = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function sK(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(nc, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = RM();
      return cT.enabled ? (0, oM.jsx)(XM.c, {
        show: cT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: lT("skyblockDevQuests:title")
              }), (0, oM.jsx)("p", {
                children: lT("skyblockDevQuests:intro")
              })]
            }), (0, oM.jsx)(dM.l, {
              onClick: kT.dismiss
            })]
          }), (0, oM.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [iK.map((TT => (0, oM.jsx)("span", {
              className: aM()("SkyblockQuestGraphLegendState", TT),
              children: lT(`skyblockDevQuests:state_${TT}`)
            }, TT))), qK.map((TT => (0, oM.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, oM.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, oM.jsx)("line", {
                  className: aM()("SkyblockQuestGraphEdge", TT),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), lT(`skyblockDevQuests:edge_${TT}`)]
            }, TT)))]
          }), (0, oM.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, oM.jsxs)("div", {
              className: aM()("SkyblockQuestGraphCanvas", {
                Planning: cT.planning
              }),
              style: {
                width: cT.width,
                height: cT.height
              },
              children: [(0, oM.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: cT.width,
                height: cT.height,
                "aria-hidden": "true",
                children: [(0, oM.jsx)("defs", {
                  children: (0, oM.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, oM.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), cT.edges.map((TT => (0, oM.jsx)("path", {
                  className: aM()("SkyblockQuestGraphEdge", TT.kind, {
                    InPlan: TT.inPlan
                  }),
                  d: TT.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, TT.key)))]
              }), cT.nodes.map((TT => (0, oM.jsxs)("button", {
                type: "button",
                className: aM()("SkyblockQuestGraphNode", TT.state, {
                  InPlan: TT.inPlan,
                  Hovered: TT.hovered
                }),
                style: {
                  left: TT.left,
                  top: TT.top,
                  width: 190,
                  height: 52
                },
                title: TT.id,
                onMouseEnter: () => {
                  kT.hover(TT.id)
                },
                onMouseLeave: () => {
                  kT.hover(null)
                },
                onFocus: () => {
                  kT.hover(TT.id)
                },
                onBlur: () => {
                  kT.hover(null)
                },
                onClick: () => {
                  kT.jump(TT.id)
                },
                children: [(0, oM.jsx)("strong", {
                  children: TT.name
                }), (0, oM.jsx)("span", {
                  children: TT.detail
                })]
              }, TT.id)))]
            })
          })]
        })
      }) : null
    }
    const TO = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      kO = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${fl}ms`,
        "--forge-duration": "2150ms"
      },
      cO = Array.from({
        length: 18
      }, ((TT, kT) => ({
        "--ember-left": `${(4+92*(.618034*kT%1)).toFixed(1)}%`,
        "--ember-size": 3 + kT % 3 * 2 + "px",
        "--ember-drift": 14 * (kT % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*kT%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*kT%8).toFixed(2)}s`
      })));

    function lO(TT) {
      if (TT.style.removeProperty("--part-size"), null === TT.parentElement || "wrap" === getComputedStyle(TT.parentElement).flexWrap) return;
      const kT = [...TT.children],
        cT = getComputedStyle(TT),
        lT = parseFloat(cT.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        MT = (TT.clientHeight - parseFloat(cT.rowGap) * (kT.length - 1)) / kT.length,
        KT = kT.map((TT => {
          const kT = getComputedStyle(TT),
            cT = TT.querySelector("h3"),
            KT = TT.querySelector(".SkyblockForgeParts");
          if (null === cT || null === KT) return lT;
          const OT = MT - parseFloat(kT.paddingTop) - parseFloat(kT.paddingBottom) - cT.offsetHeight - parseFloat(getComputedStyle(cT).marginBottom),
            yT = parseFloat(getComputedStyle(KT).columnGap),
            fT = KT.children.length;
          let xT = 0;
          for (let lT = 1; lT <= fT; lT++) {
            const TT = Math.ceil(fT / lT);
            xT = Math.max(xT, Math.min((KT.clientWidth - yT * (lT - 1)) / lT, (OT - yT * (TT - 1)) / TT))
          }
          return xT
        }));
      TT.style.setProperty("--part-size", `${Math.floor(Math.max(lT,Math.min(...KT)))}px`)
    }

    function MO(TT) {
      var kT, cT, lT, KT, OT;
      let {
        controller: yT
      } = TT;
      const fT = (0, JM.i)(tl, yT.getSnapshot()),
        {
          t: xT
        } = (0, zM.B)(),
        IT = RM(),
        AT = function() {
          const TT = (0, wT.useRef)(null),
            kT = (0, wT.useRef)(null);
          return (0, wT.useLayoutEffect)((() => {
            null !== TT.current && lO(TT.current)
          })), (0, wT.useCallback)((cT => {
            var lT;
            null === (lT = kT.current) || void 0 === lT || lT.disconnect(), kT.current = null, TT.current = cT, null !== cT && (kT.current = new ResizeObserver((() => {
              lO(cT)
            })), kT.current.observe(cT))
          }), [])
        }(),
        CT = function(TT) {
          const kT = (0, wT.useRef)(null);
          return (0, wT.useLayoutEffect)((() => {
            const TT = kT.current;
            if (null !== TT) {
              TT.style.removeProperty("font-size");
              for (let kT = 1.7; kT > 1.1 && TT.scrollWidth > TT.clientWidth; kT -= .1) TT.style.fontSize = kT - .1 + "rem"
            }
          }), [TT]), (0, wT.useCallback)((TT => {
            kT.current = TT
          }), [])
        }(null === (kT = fT.preview) || void 0 === kT ? void 0 : kT.name),
        jT = (0, wT.useRef)(null),
        vT = (0, wT.useRef)({}),
        tT = fT.forging,
        hT = null !== (cT = null === tT || void 0 === tT ? void 0 : tT.preview.tier) && void 0 !== cT ? cT : 0,
        NT = null !== (lT = null === tT || void 0 === tT ? void 0 : tT.preview.named) && void 0 !== lT && lT,
        QT = (0, wT.useMemo)((() => {
          return null === tT ? null : {
            flames: (TT = hT, kT = NT, Array.from({
              length: 26 + 6 * TT + (kT ? 20 : 0)
            }, ((TT, kT) => {
              const cT = kT < 6,
                lT = Math.random() * Math.PI * 2,
                MT = cT ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                KT = Math.cos(lT) * MT,
                OT = Math.sin(lT) * MT - 2 - 3 * Math.random(),
                yT = Math.random(),
                [fT, xT, IT] = cT ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : yT < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : yT < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [yT < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": fT,
                "--x0": `${(.15*KT).toFixed(2)}rem`,
                "--y0": `${(.15*OT).toFixed(2)}rem`,
                "--x": `${KT.toFixed(2)}rem`,
                "--y": `${OT.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${xT.toFixed(2)}rem`,
                "--duration": `${Math.round(IT)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: Al(hT, NT)
          };
          var TT, kT
        }), [null === tT || void 0 === tT ? void 0 : tT.id]);
      if (!fT.enabled) return null;
      const ST = fT.preview,
        DT = fT.arriving,
        aT = null !== DT && !DT.sameSword,
        FT = null !== ST && (0, oM.jsx)(wM.d, {
          itemName: ST.baseSword,
          amount: 0,
          enchantmentTier: ST.enchantmentTier
        });
      return (0, oM.jsx)(XM.c, {
        show: fT.open,
        close: yT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: IT,
          onKeyDown: LM,
          children: [(0, oM.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: cO.map(((TT, kT) => (0, oM.jsx)("span", {
              style: TT
            }, kT)))
          }), (0, oM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: xT("skyblockGame:forgeTitle")
              }), (0, oM.jsx)("p", {
                children: xT("skyblockGame:forgeIntro")
              })]
            }), (0, oM.jsx)(dM.l, {
              onClick: yT.dismiss
            })]
          }), (0, oM.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, oM.jsx)("div", {
              ref: AT,
              className: aM()("SkyblockForgeSlots", {
                Locked: null !== tT
              }),
              children: fT.slots.map((TT => (0, oM.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, oM.jsx)("h3", {
                  children: TT.label
                }), (0, oM.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: TT.parts.map((kT => (0, oM.jsx)("button", {
                    type: "button",
                    className: aM()("SkyblockForgePart", {
                      Selected: kT.selected,
                      Missing: kT.placeholder
                    }),
                    disabled: kT.placeholder,
                    title: kT.placeholder ? xT("skyblockGame:forgePickParts") : kT.itemName,
                    "aria-pressed": kT.selected,
                    onClick: () => {
                      yT.select(TT.kind, kT.material)
                    },
                    children: (0, oM.jsx)(wM.d, {
                      itemName: kT.itemName,
                      amount: kT.owned
                    })
                  }, kT.material)))
                })]
              }, TT.kind)))
            }), (0, oM.jsxs)("div", {
              className: aM()("SkyblockForgeAnvil", {
                Named: null === ST || void 0 === ST ? void 0 : ST.named
              }),
              style: {
                "--tier": null === ST ? "transparent" : MT.fb[ST.enchantmentTier]
              },
              children: [(0, oM.jsxs)("div", {
                className: aM()("SkyblockForgeAltar", {
                  Forging: null !== tT
                }),
                style: null === tT ? void 0 : kO,
                children: [(0, oM.jsxs)("div", {
                  className: aM()("SkyblockForgeMount", {
                    Arrive: null !== DT
                  }),
                  children: [null === ST && (0, oM.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, oM.jsx)(wM.d, {
                      itemName: fT.unformedSword,
                      amount: 0
                    })
                  }), null !== ST && (0, oM.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== ST && null === tT && (0, oM.jsx)("div", {
                    ref: jT,
                    className: "SkyblockForgeFloat",
                    children: (0, oM.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: FT
                    })
                  }), null !== ST && (0, oM.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: Il.map(((TT, kT) => (0, oM.jsx)("span", {
                      className: aM()({
                        Rune: "" !== TT.rune
                      }),
                      style: TT.style,
                      children: TT.rune
                    }, kT)))
                  }), null !== tT && null !== QT && (0, oM.jsxs)(oM.Fragment, {
                    children: [(0, oM.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, oM.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: QT.flames.map(((TT, kT) => (0, oM.jsx)("span", {
                        style: TT
                      }, kT)))
                    }), (0, oM.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: vT.current,
                      children: (0, oM.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: FT
                      })
                    }), (0, oM.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, oM.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (hT >= 4 || NT) && (0, oM.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, oM.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: QT.sparks.map(((TT, kT) => (0, oM.jsx)("span", {
                        style: TT
                      }, kT)))
                    }), (0, oM.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, oM.jsx)("p", {
                  className: aM()("SkyblockForgeStatus", null === (KT = fT.status) || void 0 === KT ? void 0 : KT.tone),
                  children: null === (OT = fT.status) || void 0 === OT ? void 0 : OT.text
                })]
              }), null === ST && (0, oM.jsx)("p", {
                className: aM()("SkyblockForgeName Waiting", {
                  ArriveText: aT
                }),
                children: xT(fT.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== ST && (0, oM.jsx)("h3", {
                ref: CT,
                className: aM()("SkyblockForgeName", {
                  ArriveText: aT
                }),
                title: ST.name,
                children: ST.name
              }), (null === ST || void 0 === ST ? void 0 : ST.named) && (0, oM.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: xT("skyblockGame:forgeSecret")
              }), (0, oM.jsxs)(dM.r, {
                className: "SkyblockForgeButton",
                disabled: !fT.canForge,
                title: null === ST ? void 0 : xT("skyblockGame:forgeCoalOwned", {
                  owned: String(fT.coalOwned)
                }),
                onClick: () => {
                  vT.current = function(TT) {
                    const kT = null === TT ? "none" : getComputedStyle(TT).transform,
                      cT = new DOMMatrixReadOnly("none" === kT ? void 0 : kT);
                    return {
                      "--settle-y": `${cT.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(cT.b,cT.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(jT.current), vl(), yT.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [xT("skyblockGame:forgeButton"), null !== ST && (0, oM.jsxs)("span", {
                  className: aM()("SkyblockForgeCost", {
                    Short: ST.coalShort
                  }),
                  children: [(0, oM.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, oM.jsx)(wM.d, {
                      itemName: Tl.b,
                      amount: 0
                    })
                  }), ST.coalCost]
                })]
              })]
            }), (0, oM.jsxs)("div", {
              className: aM()("SkyblockForgeDetails", {
                Named: null === ST || void 0 === ST ? void 0 : ST.named
              }),
              children: [(0, oM.jsx)("p", {
                className: aM()("SkyblockForgeLore", {
                  ArriveText: aT
                }),
                title: null === ST || void 0 === ST ? void 0 : ST.lore,
                children: null === ST || void 0 === ST ? void 0 : ST.lore
              }), (0, oM.jsxs)("dl", {
                className: aM()("SkyblockForgeStats", {
                  ArriveText: aT
                }),
                children: [null === ST && TO.map((TT => (0, oM.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, oM.jsx)("dt", {
                    children: xT(TT)
                  }), (0, oM.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, TT))), null === ST || void 0 === ST ? void 0 : ST.stats.map((TT => (0, oM.jsxs)("div", {
                  className: aM()("SkyblockForgeStat", {
                    Better: TT.better
                  }),
                  children: [(0, oM.jsx)("dt", {
                    children: TT.label
                  }), (0, oM.jsx)("dd", {
                    children: TT.value
                  })]
                }, TT.label)))]
              }), (0, oM.jsx)("ul", {
                className: aM()("SkyblockForgeEffects", {
                  ArriveText: aT
                }),
                children: null === ST || void 0 === ST ? void 0 : ST.effects.map((TT => (0, oM.jsx)("li", {
                  children: TT
                }, TT)))
              })]
            })]
          })]
        })
      })
    }
    const KO = "Doom Rivet",
      OO = "Doom Crest";

    function yO(TT) {
      let {
        itemName: kT,
        amount: cT,
        owned: lT
      } = TT;
      return (0, oM.jsxs)("span", {
        className: aM()("SkyblockSmugglerPrice", {
          Short: cT > lT
        }),
        children: [(0, oM.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, oM.jsx)(wM.d, {
            itemName: kT,
            amount: 0
          })
        }), (0, oM.jsx)("span", {
          children: cT
        })]
      })
    }

    function fO(TT) {
      return TT.justBought ? "skyblockGame:smugglerJustBought" : TT.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function xO(TT) {
      let {
        deal: kT,
        view: cT,
        buy: lT
      } = TT;
      const {
        t: MT
      } = (0, zM.B)();
      return (0, oM.jsxs)("div", {
        className: aM()("SkyblockSmugglerPocket", {
          Bought: kT.justBought,
          Unaffordable: !kT.affordable,
          SoldOut: kT.soldOut && !kT.justBought
        }),
        children: [(0, oM.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, oM.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, oM.jsx)(wM.d, {
            itemName: kT.itemName,
            amount: 0,
            enchantmentTier: kT.enchantmentTier
          }), kT.amount > 1 && (0, oM.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: MT("skyblockGame:smugglerAmount", {
              amount: kT.amount
            })
          })]
        }), (0, oM.jsx)("h3", {
          children: kT.displayName
        }), (0, oM.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, oM.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [kT.rivets > 0 && (0, oM.jsx)(yO, {
              itemName: KO,
              amount: kT.rivets,
              owned: cT.rivetsOwned
            }), kT.crests > 0 && (0, oM.jsx)(yO, {
              itemName: OO,
              amount: kT.crests,
              owned: cT.crestsOwned
            })]
          }), (0, oM.jsx)(dM.e, {
            className: "SkyblockSmugglerBuy",
            disabled: kT.soldOut || !kT.affordable || cT.pending,
            onClick: () => {
              lT(kT.slot)
            },
            children: MT(fO(kT))
          })]
        })]
      }, kT.justBought ? cT.boughtCount : 0)
    }

    function IO(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(Ql, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = RM();
      return cT.enabled ? (0, oM.jsx)(XM.c, {
        show: cT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: LM,
          children: [(0, oM.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, oM.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, oM.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: lT("skyblockGame:smugglerTitle")
              }), (0, oM.jsx)("p", {
                children: lT("skyblockGame:smugglerIntro")
              })]
            }), (0, oM.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, oM.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, oM.jsx)(yO, {
                  itemName: KO,
                  amount: cT.rivetsOwned,
                  owned: cT.rivetsOwned
                }), (0, oM.jsx)(yO, {
                  itemName: OO,
                  amount: cT.crestsOwned,
                  owned: cT.crestsOwned
                })]
              }), (0, oM.jsx)(dM.l, {
                onClick: kT.dismiss
              })]
            })]
          }), (0, oM.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: cT.deals.map((TT => (0, oM.jsx)(xO, {
              deal: TT,
              view: cT,
              buy: kT.buy
            }, TT.slot)))
          }), (0, oM.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, oM.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: cT.rotatesText
            }), null !== cT.status && (0, oM.jsx)("span", {
              className: aM()("SkyblockSmugglerStatus", cT.status.tone),
              children: cT.status.text
            })]
          })]
        })
      }) : null
    }

    function AO(TT) {
      let {
        phase: kT,
        className: cT
      } = TT;
      return (0, oM.jsx)("span", {
        className: aM()("SkyblockMoon", `Moon-${kT}`, cT),
        "aria-hidden": "true"
      })
    }

    function CO(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(al, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)();
      return cT.enabled ? (0, oM.jsx)(rM.g, {
        placement: "statBars",
        children: (0, oM.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: aM()("SkyblockPassageChip", cT.open && "Open"),
          "aria-label": lT("skyblockGame:passageChipLabel", {
            phase: cT.phaseName
          }),
          title: lT("skyblockGame:passageChipLabel", {
            phase: cT.phaseName
          }),
          onMouseDown: TT => {
            TT.preventDefault()
          },
          onClick: kT.toggle,
          children: (0, oM.jsx)(AO, {
            phase: cT.phase
          }, cT.phase)
        })
      }) : null
    }

    function jO(TT) {
      let {
        fish: kT
      } = TT;
      return (0, oM.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, oM.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, oM.jsx)(wM.d, {
            itemName: kT.itemName,
            amount: 0
          })
        }), (0, oM.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, oM.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: kT.displayName
          }), (0, oM.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: kT.where
          })]
        })]
      })
    }

    function vO(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(al, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = RM();
      return cT.enabled ? (0, oM.jsx)(XM.c, {
        show: cT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, oM.jsx)(AO, {
              phase: cT.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: lT("skyblockGame:passageTitle")
              }), (0, oM.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: cT.phaseName
              })]
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              onClick: kT.dismiss
            })]
          }), (0, oM.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: lT("skyblockGame:passageIntro")
          }), (0, oM.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, oM.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, oM.jsx)("h3", {
                children: lT("skyblockGame:passageVisiting")
              }), (0, oM.jsx)("ul", {
                className: "SkyblockPassageList",
                children: cT.visitors.map((TT => (0, oM.jsx)(jO, {
                  fish: TT
                }, TT.itemName)))
              })]
            }), (0, oM.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== cT.resting && (0, oM.jsxs)(oM.Fragment, {
                children: [(0, oM.jsx)("h3", {
                  children: lT("skyblockGame:passageResting")
                }), (0, oM.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, oM.jsx)(jO, {
                    fish: cT.resting
                  })
                })]
              }), (0, oM.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, oM.jsx)(AO, {
                  phase: cT.nextPhase
                }), (0, oM.jsx)("span", {
                  children: cT.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function tO() {
      return (0, oM.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((TT => (0, oM.jsx)("i", {
          style: {
            "--sparkle-index": TT
          }
        }, TT)))
      })
    }

    function hO(TT) {
      var kT;
      let {
        charm: cT,
        view: lT,
        controller: MT
      } = TT;
      const {
        t: KT
      } = (0, zM.B)(), OT = lT.shop, yT = (null === (kT = lT.sparkle) || void 0 === kT ? void 0 : kT.id) === cT.id;
      return (0, oM.jsxs)("li", {
        className: aM()("SkyblockLampLightCharm", cT.owned && "Owned", cT.socketed && "Socketed"),
        children: [yT && (0, oM.jsx)(tO, {}, lT.sparkle.count), (0, oM.jsx)("h4", {
          children: cT.name
        }), (0, oM.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: cT.effect
        }), (0, oM.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: cT.lines.map((TT => (0, oM.jsxs)("li", {
            className: aM()("SkyblockLampLightOddsLine", "better" === TT.tone ? "Better" : "worse" === TT.tone ? "Worse" : "Same"),
            children: [(0, oM.jsx)("span", {
              className: "Before",
              children: TT.before
            }), (0, oM.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, oM.jsx)("span", {
              className: "After",
              children: TT.after
            })]
          }, TT.label)))
        }), (0, oM.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: cT.owned ? cT.socketed ? (0, oM.jsxs)(oM.Fragment, {
            children: [(0, oM.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: KT("skyblockGame:lampLightSocketed")
            }), (0, oM.jsx)(dM.P, {
              disabled: !lT.canCommand,
              ariaLabel: KT("skyblockGame:lampLightRemoveLabel", {
                charm: cT.name
              }),
              onClick: () => {
                MT.socket(null)
              },
              children: KT("skyblockGame:lampLightRemove")
            })]
          }) : (0, oM.jsx)(dM.e, {
            disabled: !lT.canCommand || !OT.heldRod,
            ariaLabel: KT("skyblockGame:lampLightSocketLabel", {
              charm: cT.name
            }),
            onClick: () => {
              MT.socket(cT.id)
            },
            children: KT("skyblockGame:lampLightSocket")
          }) : (0, oM.jsx)(dM.e, {
            disabled: !lT.canCommand || !cT.affordable,
            ariaLabel: KT("skyblockGame:lampLightBuyLabel", {
              item: cT.name,
              cost: cT.cost
            }),
            onClick: () => {
              MT.buy(cT.id)
            },
            children: cT.cost
          })
        })]
      })
    }

    function NO(TT) {
      var kT;
      let {
        tint: cT,
        view: lT,
        controller: MT
      } = TT;
      const {
        t: KT
      } = (0, zM.B)();
      return (0, oM.jsxs)("li", {
        className: aM()("SkyblockLampLightTint", cT.wearing && "Wearing"),
        style: {
          "--tint-colour": cT.colour
        },
        children: [(null === (kT = lT.sparkle) || void 0 === kT ? void 0 : kT.id) === cT.id && (0, oM.jsx)(tO, {}, lT.sparkle.count), (0, oM.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, oM.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: cT.name
        }), cT.wearing ? (0, oM.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: KT("skyblockGame:lampLightWearing")
        }) : (0, oM.jsx)(dM.e, {
          disabled: !lT.canCommand || !cT.owned && !cT.affordable,
          ariaLabel: cT.owned ? KT("skyblockGame:lampLightWearLabel", {
            tint: cT.name
          }) : KT("skyblockGame:lampLightBuyLabel", {
            item: cT.name,
            cost: cT.cost
          }),
          onClick: () => {
            cT.owned ? MT.wearTint(cT.id) : MT.buy(cT.id)
          },
          children: cT.owned ? KT("skyblockGame:lampLightWear") : cT.cost
        })]
      })
    }

    function QO(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(El, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = cT.shop;
      return (0, oM.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, oM.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, oM.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: cT.balance
          }), (0, oM.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": cT.releasing,
            className: aM()("SkyblockLampLightSwitch", cT.releasing && "On"),
            disabled: cT.releasing ? "ready" !== cT.status : !cT.canCommand,
            onClick: () => {
              kT.setRelease(!cT.releasing)
            },
            children: [(0, oM.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, oM.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), lT("skyblockGame:lampLightRelease")]
          }), (0, oM.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: lT("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== cT.notice && (0, oM.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: cT.notice
        }), null !== MT && (0, oM.jsxs)(oM.Fragment, {
          children: [(0, oM.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, oM.jsx)("h3", {
              children: lT("skyblockGame:lampLightCharms")
            }), (0, oM.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: MT.oddsFor
            }), (0, oM.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((TT => (0, oM.jsx)("button", {
                type: "button",
                "aria-pressed": cT.situation === TT,
                className: aM()("SkyblockLampLightSituation", cT.situation === TT && "Selected"),
                onClick: () => {
                  kT.setSituation(TT)
                },
                children: lT("open" === TT ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, TT)))
            })]
          }), !MT.heldRod && (0, oM.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: lT("skyblockGame:lampLightHoldRod")
          }), (0, oM.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: MT.charms.map((TT => (0, oM.jsx)(hO, {
              charm: TT,
              view: cT,
              controller: kT
            }, TT.id)))
          }), (0, oM.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, oM.jsx)("h3", {
              children: lT("skyblockGame:lampLightTints")
            })
          }), (0, oM.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, oM.jsxs)("li", {
              className: aM()("SkyblockLampLightTint", "Islands", MT.wearingIslandColours && "Wearing"),
              children: [(0, oM.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, oM.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: lT("skyblockGame:lampLightIslandColours")
              }), MT.wearingIslandColours ? (0, oM.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: lT("skyblockGame:lampLightWearing")
              }) : (0, oM.jsx)(dM.e, {
                disabled: !cT.canCommand,
                ariaLabel: lT("skyblockGame:lampLightWearLabel", {
                  tint: lT("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  kT.wearTint(null)
                },
                children: lT("skyblockGame:lampLightWear")
              })]
            }), MT.tints.map((TT => (0, oM.jsx)(NO, {
              tint: TT,
              view: cT,
              controller: kT
            }, TT.id)))]
          })]
        })]
      })
    }

    function SO(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(El, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)();
      return cT.releasing ? (0, oM.jsx)(rM.g, {
        children: (0, oM.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            kT.setRelease(!1)
          },
          children: [(0, oM.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, oM.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [lT("skyblockGame:lampLightReleasing"), " \xb7 ", cT.balance]
          }), (0, oM.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: lT("skyblockGame:lampLightKeepCatches")
          }), null !== cT.gained && (0, oM.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: cT.gained.text
          }, cT.gained.count)]
        })
      }) : null
    }

    function DO(TT) {
      let {
        island: kT,
        view: cT,
        aim: lT
      } = TT;
      const {
        t: MT
      } = (0, zM.B)(), KT = kT.featuredFish;
      return (0, oM.jsxs)("li", {
        className: aM()("SkyblockKeepersChairIsland", `Island-${kT.id}`, kT.favoured && "Aimed", !kT.relit && "Dark"),
        children: [(0, oM.jsx)("h3", {
          children: kT.name
        }), kT.relit && null !== KT ? (0, oM.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, oM.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: MT("skyblockGame:keepersChairTideNotice")
          }), (0, oM.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, oM.jsx)(wM.d, {
              itemName: KT.itemName,
              amount: 0
            })
          }), (0, oM.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: KT.displayName
          })]
        }) : (0, oM.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, oM.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: MT("skyblockGame:keepersChairDark")
          })
        }), kT.relit && (kT.favoured ? (0, oM.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: MT("skyblockGame:keepersChairAimed")
        }) : (0, oM.jsx)(dM.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !cT.canAim,
          ariaLabel: MT("skyblockGame:keepersChairAimLabel", {
            island: kT.name
          }),
          onClick: () => {
            lT(kT.id)
          },
          children: MT("skyblockGame:keepersChairAim")
        }))]
      }, kT.favoured ? cT.aimedCount : 0)
    }

    function aO(TT) {
      let {
        controller: kT,
        lampLight: cT
      } = TT;
      const lT = (0, JM.i)(bl, kT.getSnapshot()),
        MT = (0, JM.i)(El, cT.getSnapshot()),
        [KT, OT] = (0, wT.useState)("lamp"),
        {
          t: yT
        } = (0, zM.B)(),
        fT = RM();
      if (!lT.enabled) return null;
      const xT = "light" === KT && MT.enabled;
      return (0, oM.jsx)(XM.c, {
        show: lT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: aM()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", xT && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: fT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: yT("skyblockGame:keepersChairTitle")
              }), (0, oM.jsx)("p", {
                children: yT(xT ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              ariaLabel: yT("skyblockGame:keepersChairClose"),
              onClick: kT.dismiss
            })]
          }), MT.enabled && (0, oM.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((TT => (0, oM.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === TT === xT,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === TT === xT ? "true" : void 0,
              className: aM()("SkyblockKeepersChairTab", "light" === TT === xT && "Selected"),
              onClick: () => {
                OT(TT)
              },
              children: [yT("lamp" === TT ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === TT && (0, oM.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: MT.balance
              })]
            }, TT)))
          }), xT ? (0, oM.jsx)(QO, {
            controller: cT
          }) : (0, oM.jsx)(FO, {
            view: lT,
            controller: kT
          })]
        })
      })
    }

    function FO(TT) {
      let {
        view: kT,
        controller: cT
      } = TT;
      const {
        t: lT
      } = (0, zM.B)();
      return (0, oM.jsxs)(oM.Fragment, {
        children: [(0, oM.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: kT.islands.map((TT => (0, oM.jsx)(DO, {
            island: TT,
            view: kT,
            aim: cT.aim
          }, TT.id)))
        }), null !== kT.almanac && (0, oM.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, oM.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: lT("skyblockGame:passageTitle")
          }), (0, oM.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, oM.jsx)(AO, {
              phase: kT.almanac.phase
            }), kT.almanac.phaseName]
          }), (0, oM.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, oM.jsx)(AO, {
              phase: kT.almanac.nextPhase
            }), kT.almanac.next]
          })]
        }), (0, oM.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, oM.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: lT("skyblockGame:keepersChairFavour")
          }), kT.aimed && (0, oM.jsx)(dM.P, {
            className: "SkyblockKeepersChairRest",
            disabled: !kT.canAim,
            onClick: () => {
              cT.aim(null)
            },
            children: lT("skyblockGame:keepersChairRest")
          })]
        }), null !== kT.status && (0, oM.jsx)("p", {
          className: aM()("SkyblockKeepersChairStatus", "refused" === kT.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: kT.status.text
        })]
      })
    }

    function rO(TT) {
      let {
        controller: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)(), lT = (0, JM.i)(Jl, kT.getSnapshot());
      if (!lT.enabled) return null;
      const MT = lT.freshCount > 0 ? cT("skyblockGame:reachLogOpenNews", {
        count: lT.freshCount
      }) : cT("skyblockGame:reachLogOpen");
      return (0, oM.jsx)(rM.g, {
        placement: "statBars",
        children: (0, oM.jsxs)("button", {
          type: "button",
          className: aM()("SkyblockReachLogButton", lT.freshCount > 0 && "HasNews", lT.pending && "Pending"),
          "aria-label": MT,
          title: MT,
          onClick: kT.ask,
          children: [lT.news && (0, oM.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${lT.newsToken}`), (0, oM.jsx)("span", {
            className: aM()("SkyblockReachLogIcon", lT.news && "Jump"),
            "aria-hidden": "true",
            children: (0, oM.jsx)(wM.d, {
              itemName: Hl,
              amount: 0
            })
          }, `icon:${lT.newsToken}`), lT.freshCount > 0 && (0, oM.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: lT.freshCount
          })]
        })
      })
    }

    function PO(TT) {
      let {
        gift: kT
      } = TT;
      return (0, oM.jsx)("li", {
        className: aM()("SkyblockRegularsGift", kT.given && "Given"),
        children: kT.text
      })
    }

    function wO(TT) {
      let {
        regular: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)();
      return (0, oM.jsxs)("li", {
        className: aM()("SkyblockRegularsCard", kT.tagged ? "Tagged" : "Untagged", kT.resting && "Resting"),
        children: [(0, oM.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, oM.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: kT.fishName,
            children: (0, oM.jsx)(wM.d, {
              itemName: kT.itemName,
              amount: 0
            })
          }), (0, oM.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, oM.jsx)("h3", {
              children: kT.name
            }), (0, oM.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: kT.fishName
            })]
          })]
        }), (0, oM.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: kT.line
        }), (0, oM.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, oM.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: kT.size
          }), kT.tagged && (0, oM.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: kT.resting ? cT("skyblockGame:regularsResting") : kT.meetings
          })]
        }), (0, oM.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: kT.chance
        }), (0, oM.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: kT.gifts.map((TT => (0, oM.jsx)(PO, {
            gift: TT
          }, TT.text)))
        }), kT.history.length > 0 && (0, oM.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: kT.history.map(((TT, kT) => (0, oM.jsx)("li", {
            children: TT
          }, kT)))
        })]
      })
    }

    function mO(TT) {
      let {
        controller: kT,
        island: cT
      } = TT;
      const {
        t: lT
      } = (0, zM.B)(), MT = (0, JM.i)(kM, kT.getSnapshot()), KT = MT.islands.find((TT => TT.id === cT));
      if (!MT.enabled || void 0 === KT) return null;
      const OT = lT("skyblockGame:regularsOpen");
      return (0, oM.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": OT,
        title: OT,
        onClick: () => {
          kT.openIsland(cT)
        },
        children: [(0, oM.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: lT("skyblockGame:regularsTitle")
        }), KT.regulars.map((TT => (0, oM.jsx)("span", {
          className: aM()("SkyblockRegularsStripIcon", TT.tagged && "Tagged"),
          title: TT.name,
          children: (0, oM.jsx)(wM.d, {
            itemName: TT.itemName,
            amount: 0
          })
        }, TT.id)))]
      })
    }

    function bO(TT) {
      var kT;
      let {
        controller: cT
      } = TT;
      const lT = (0, JM.i)(kM, cT.getSnapshot()),
        {
          t: MT
        } = (0, zM.B)(),
        KT = RM();
      if (!lT.enabled) return null;
      const OT = null !== (kT = lT.islands.find((TT => TT.id === lT.selected))) && void 0 !== kT ? kT : null;
      return (0, oM.jsx)(XM.c, {
        show: lT.open,
        close: cT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: KT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: MT("skyblockGame:regularsTitle")
              }), (0, oM.jsx)("p", {
                children: MT("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              onClick: cT.dismiss
            })]
          }), (0, oM.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: lT.islands.map((TT => {
              const kT = TT.id === lT.selected;
              return (0, oM.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": kT,
                "data-pad-tab": !0,
                "data-pad-selected": kT ? "true" : void 0,
                className: aM()("SkyblockReachLogTab", `Island-${TT.id}`, kT && "Selected", TT.charm.given && "GoldPage"),
                onClick: () => {
                  cT.selectIsland(TT.id)
                },
                children: (0, oM.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: TT.name
                })
              }, TT.id)
            }))
          }), (0, oM.jsxs)("div", {
            className: aM()("SkyblockRegularsPage", null !== OT && `Island-${OT.id}`),
            role: "tabpanel",
            children: [(0, oM.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: MT("skyblockGame:regularsHow")
            }), null !== OT && (0, oM.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: OT.regulars.map((TT => (0, oM.jsx)(wO, {
                regular: TT
              }, TT.id)))
            })]
          }), null !== OT && (0, oM.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, oM.jsx)("span", {
              className: aM()("SkyblockRegularsCharm", OT.charm.given && "Given"),
              children: OT.charm.text
            })
          })]
        })
      })
    }
    const zO = [{
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
      JO = Array.from({
        length: 6
      }, ((TT, kT) => ({
        "--x": `${(88*(.618034*kT%1)).toFixed(1)}%`,
        "--y": `${(10+37*kT%70).toFixed(1)}%`,
        "--size": 7 + kT % 3 * 3 + "rem",
        "--drift-x": 3 * (kT % 3 - 1) + "rem",
        "--drift-y": 2 * (kT % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + kT % 4 * 3 + "s",
        "--delay": 2.5 * -kT + "s"
      }))),
      oO = Array.from({
        length: 14
      }, ((TT, kT) => ({
        "--left": `${(3+94*((.618034*kT+.3)%1)).toFixed(1)}%`,
        "--size": 4 + kT % 4 * 2 + "px",
        "--sway": kT % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*kT%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*kT%12).toFixed(2)}s`
      }))),
      HO = (0, wT.memo)((function(TT) {
        let {
          island: kT
        } = TT;
        return (0, oM.jsxs)("div", {
          className: aM()("SkyblockReachLogDepths", null !== kT && `Island-${kT}`),
          "aria-hidden": "true",
          children: [zO.map(((TT, kT) => (0, oM.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: TT
          }, `shaft${kT}`))), JO.map(((TT, kT) => (0, oM.jsx)("span", {
            className: aM()("SkyblockReachLogMote", kT % 2 === 1 && "Violet"),
            style: TT
          }, `mote${kT}`))), oO.map(((TT, kT) => (0, oM.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: TT
          }, `bubble${kT}`)))]
        })
      })),
      eO = 100;

    function GO(TT) {
      let {
        view: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)();
      if (null === kT || 0 === kT.total) return null;
      const lT = eO * kT.aspect,
        MT = cT("skyblockGame:hiddenWatersCount", {
          found: kT.found,
          total: kT.total
        });
      return (0, oM.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${cT("skyblockGame:hiddenWatersTitle")}: ${MT}`,
        children: [(0, oM.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${lT}`,
          "aria-hidden": "true",
          children: [kT.islands.map(((TT, kT) => (0, oM.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (TT.left + TT.width / 2) * eO,
            cy: (TT.top + TT.height / 2) * lT,
            rx: TT.width / 2 * eO,
            ry: TT.height / 2 * lT
          }, kT))), kT.pins.map(((TT, kT) => (0, oM.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: TT.left * eO,
            cy: TT.top * lT,
            r: 13
          }, kT)))]
        }), (0, oM.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, oM.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: cT("skyblockGame:hiddenWatersTitle")
          }), (0, oM.jsx)("span", {
            className: kT.found === kT.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: MT
          })]
        })]
      })
    }

    function VO(TT) {
      let {
        view: kT,
        island: cT
      } = TT;
      const {
        t: lT
      } = (0, zM.B)(), MT = null === kT || void 0 === kT ? void 0 : kT.glimpses.get(cT);
      return void 0 === MT || 0 === MT.length ? null : (0, oM.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, oM.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: lT("skyblockGame:hiddenWatersGlimpsed")
        }), (0, oM.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: MT.map((TT => (0, oM.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, oM.jsx)(wM.d, {
              itemName: TT,
              amount: 0
            })
          }, TT)))
        })]
      })
    }
    const EO = ["Bronze", "Silver", "Gold"],
      ZO = [{
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
      uO = ZO.slice(0, 2);

    function XO(TT) {
      return TT ? ZO : uO
    }

    function dO(TT) {
      let {
        fish: kT,
        letGoShown: cT
      } = TT;
      const {
        t: lT
      } = (0, zM.B)();
      return (0, oM.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [EO.map(((TT, cT) => {
          const MT = cT < kT.marks;
          return (0, oM.jsx)("span", {
            className: aM()("SkyblockReachLogPip", TT, MT && "Earned", MT && kT.fresh && cT === kT.marks - 1 && "Newest"),
            title: lT(ol[cT])
          }, TT)
        })), (0, oM.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), XO(cT).map(((TT, cT) => (0, oM.jsx)("span", {
          className: aM()("SkyblockReachLogRibbon", TT.className, !0 === kT.ribbons[cT] && "Earned"),
          title: lT(TT.titleKey)
        }, TT.className)))]
      })
    }

    function LO(TT) {
      let {
        letGoShown: kT,
        haloShown: cT
      } = TT;
      const {
        t: lT
      } = (0, zM.B)();
      return (0, oM.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, oM.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: lT("skyblockGame:reachLogMarks"),
          children: [(0, oM.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), lT("skyblockGame:reachLogLegendMarks")]
        }), XO(kT).map((TT => (0, oM.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: lT(TT.titleKey),
          children: [(0, oM.jsx)("span", {
            className: aM()("SkyblockReachLogRibbon", TT.className, "Earned")
          }), lT(TT.legendKey)]
        }, TT.className))), (0, oM.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: lT("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, oM.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), lT("skyblockGame:reachLogLegendGlimmer")]
        }), cT && (0, oM.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: lT("skyblockGame:reachLogHaloTitle"),
          children: [(0, oM.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), lT("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function RO(TT) {
      let {
        returner: kT
      } = TT;
      return (0, oM.jsxs)("div", {
        className: aM()("SkyblockReachLogReturner", kT.back && "Back"),
        children: [(0, oM.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, oM.jsx)(wM.d, {
            itemName: kT.itemName,
            amount: 0
          })
        }), (0, oM.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: kT.line
        })]
      })
    }

    function gO(TT) {
      let {
        fish: kT,
        letGoShown: cT
      } = TT;
      const {
        t: lT
      } = (0, zM.B)();
      return (0, oM.jsxs)("li", {
        className: aM()("SkyblockReachLogCard", kT.caught ? "Caught" : "Unknown", kT.marks >= 3 && "GoldCard", kT.fresh && "Fresh", kT.visitor && "Visitor"),
        children: [kT.visitor && (0, oM.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: lT("skyblockGame:reachLogVisitor")
        }), kT.fresh && Array.from({
          length: 4
        }, ((TT, kT) => (0, oM.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, kT))), (0, oM.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [kT.halo && (0, oM.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: lT("skyblockGame:reachLogHaloTitle")
          }), (0, oM.jsx)(wM.d, {
            itemName: kT.itemName,
            amount: 0
          }), kT.glimmer && (0, oM.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: lT("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, oM.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: kT.name
        }), (0, oM.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: kT.chance
        }), (0, oM.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: kT.best
        }), (0, oM.jsx)(dO, {
          fish: kT,
          letGoShown: cT
        })]
      })
    }

    function UO(TT) {
      let {
        page: kT,
        letGoShown: cT,
        hiddenWaters: lT
      } = TT;
      const {
        t: MT
      } = (0, zM.B)();
      return kT.awake ? (0, oM.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: kT.fish.map((TT => (0, oM.jsx)(gO, {
          fish: TT,
          letGoShown: cT
        }, TT.itemName)))
      }) : (0, oM.jsxs)(oM.Fragment, {
        children: [(0, oM.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: MT("skyblockGame:reachLogAsleep")
        }), (0, oM.jsx)(VO, {
          view: lT,
          island: kT.id
        })]
      })
    }

    function YO(TT) {
      var kT, cT;
      let {
        controller: lT,
        regulars: MT,
        hiddenWaters: KT
      } = TT;
      const OT = (0, JM.i)(Jl, lT.getSnapshot()),
        yT = function(TT) {
          return (0, JM.i)(OM, TT.getSnapshot())
        }(KT),
        fT = (0, JM.i)(kM, MT.getSnapshot()),
        {
          t: xT
        } = (0, zM.B)(),
        IT = RM();
      if (!OT.enabled) return null;
      const AT = null !== (kT = OT.pages.find((TT => TT.id === OT.selected))) && void 0 !== kT ? kT : null;
      return (0, oM.jsx)(XM.c, {
        show: OT.open,
        close: lT.dismiss,
        togglePointerLock: !1,
        className: aM()("SkyblockSkillsOverlay", fT.open && "SkyblockReachLogUnderLedger"),
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: IT,
          onKeyDown: LM,
          children: [(0, oM.jsx)(HO, {
            island: null !== (cT = null === AT || void 0 === AT ? void 0 : AT.id) && void 0 !== cT ? cT : null
          }), (0, oM.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: xT("skyblockGame:reachLogTitle")
              }), (0, oM.jsx)("p", {
                children: xT("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, oM.jsx)(GO, {
              view: yT
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              onClick: lT.dismiss
            })]
          }), (0, oM.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: OT.pages.map((TT => {
              const kT = TT.id === OT.selected,
                cT = TT.fish.some((TT => TT.fresh));
              return (0, oM.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": kT,
                "data-pad-tab": !0,
                "data-pad-selected": kT ? "true" : void 0,
                className: aM()("SkyblockReachLogTab", `Island-${TT.id}`, kT && "Selected", !TT.awake && "Asleep", TT.gold && "GoldPage", cT && "HasNews"),
                onClick: () => {
                  lT.selectPage(TT.id)
                },
                children: [(0, oM.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: TT.name
                }), TT.awake && (0, oM.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: xT("skyblockGame:reachLogCaughtCount", {
                    caught: TT.caught,
                    total: TT.total
                  })
                })]
              }, TT.id)
            }))
          }), (0, oM.jsxs)("div", {
            className: aM()("SkyblockReachLogPage", null !== AT && `Island-${AT.id}`),
            role: "tabpanel",
            children: [null !== AT && (0, oM.jsx)(UO, {
              page: AT,
              letGoShown: OT.letGoShown,
              hiddenWaters: yT
            }), !0 === (null === AT || void 0 === AT ? void 0 : AT.awake) && null !== AT.returner && (0, oM.jsx)(RO, {
              returner: AT.returner
            }), !0 === (null === AT || void 0 === AT ? void 0 : AT.awake) && (0, oM.jsx)(mO, {
              controller: MT,
              island: AT.id
            })]
          }), (0, oM.jsx)("footer", {
            className: aM()("SkyblockReachLogFooter", null !== AT && `Island-${AT.id}`, !0 === (null === AT || void 0 === AT ? void 0 : AT.gold) && "GoldPage"),
            children: !0 === (null === AT || void 0 === AT ? void 0 : AT.gold) ? (0, oM.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: xT("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, oM.jsxs)(oM.Fragment, {
              children: [(0, oM.jsx)(LO, {
                letGoShown: OT.letGoShown,
                haloShown: !0 === (null === AT || void 0 === AT ? void 0 : AT.fish.some((TT => TT.halo)))
              }), (0, oM.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: xT("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var BO = cT(4798);

    function WO(TT) {
      let {
        conversation: kT,
        completedLabel: cT
      } = TT;
      return (0, oM.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, oM.jsxs)("header", {
          children: [(0, oM.jsx)("h3", {
            children: kT.questName
          }), kT.completed && (0, oM.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: cT
          })]
        }), kT.lines.map((TT => (0, oM.jsx)(BO.e, {
          display: TT.display
        }, TT.key)))]
      })
    }

    function nO(TT) {
      let {
        controller: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)(), lT = (0, JM.i)(fM, kT.getSnapshot()), MT = RM();
      if (!lT.enabled) return null;
      const KT = !lT.loading && 0 === lT.conversations.length;
      return (0, oM.jsx)(XM.c, {
        show: lT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: cT("skyblockDialogue:title")
              }), (0, oM.jsx)("p", {
                children: cT("skyblockDialogue:intro")
              })]
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              onClick: kT.dismiss
            })]
          }), (0, oM.jsxs)("div", {
            className: aM()("SkyblockDialogueBody", {
              SingleColumn: null !== lT.questFocus || 0 === lT.characters.length
            }),
            children: [null === lT.questFocus && lT.characters.length > 0 && (0, oM.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: lT.characters.map((TT => (0, oM.jsx)(dM.e, {
                className: aM()("SkyblockDialogueCharacter", {
                  Selected: TT.selected
                }),
                onClick: () => {
                  kT.selectCharacter(TT.id)
                },
                children: (0, oM.jsx)(mM.b, {
                  text: TT.styling
                })
              }, TT.id)))
            }), (0, oM.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== lT.questFocus && (0, oM.jsx)(dM.e, {
                className: "SkyblockDialogueBack",
                onClick: kT.showCharacters,
                children: cT("skyblockDialogue:allCharacters")
              }), lT.loading && (0, oM.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: cT("skyblockDialogue:loading")
              }), KT && (0, oM.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: cT(null === lT.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), lT.conversations.map((TT => (0, oM.jsx)(WO, {
                conversation: TT,
                completedLabel: lT.completedLabel
              }, TT.questId)))]
            })]
          })]
        })
      })
    }

    function pO(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(jM, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = RM();
      return cT.enabled ? (0, oM.jsx)(XM.c, {
        show: cT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: lT("skyblockGame:autographBook")
              }), (0, oM.jsx)("p", {
                children: lT("skyblockGame:autographBookIntro")
              })]
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              onClick: kT.dismiss
            })]
          }), (0, oM.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, oM.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, oM.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, oM.jsx)("strong", {
                  children: cT.total
                }), (0, oM.jsx)("span", {
                  children: lT("skyblockGame:autographTotal")
                })]
              }), (0, oM.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, oM.jsx)("strong", {
                  children: cT.rankTotal
                }), (0, oM.jsx)("span", {
                  children: lT("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === cT.entries.length ? (0, oM.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: lT("skyblockGame:autographBookEmpty")
            }) : (0, oM.jsx)("ul", {
              className: "SkyblockAutographList",
              children: cT.entries.map((TT => (0, oM.jsxs)("li", {
                className: aM()("SkyblockAutograph", {
                  Ranked: null !== TT.rank
                }),
                style: null === TT.rank ? void 0 : {
                  color: TT.rank.colour
                },
                children: [null !== TT.rank && (0, oM.jsx)(jK.e, {
                  className: "SkyblockAutographRankIcon",
                  name: TT.rank.icon,
                  kit: (0, jK.f)(TT.rank.icon)
                }), (0, oM.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, oM.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: TT.name
                  }), (0, oM.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== TT.rank && (0, oM.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: TT.rank.label
                    }), (0, oM.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: TT.signedOn
                    })]
                  })]
                })]
              }, TT.key)))
            })]
          })]
        })
      }) : null
    }
    const iO = (0, wT.memo)((function(TT) {
        let {
          controller: kT
        } = TT;
        return (0, oM.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: kT.display.mountWaypoint,
          children: [(0, oM.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, oM.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, oM.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, oM.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, oM.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, oM.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      qO = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function sO(TT) {
      return "next" === TT.phase ? "\u2192" : qO[TT.kind]
    }
    const Ty = (0, wT.memo)((function(TT) {
      let {
        controller: kT,
        display: cT
      } = TT;
      const lT = (0, JM.i)(Ac, kT.getNotificationSnapshot()),
        [MT, KT] = (0, wT.useState)(!1);
      return (0, JM.g)("qteStateUpdated", (TT => {
        KT(TT.isActive)
      })), (0, oM.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (MT ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [lT && (0, oM.jsxs)("div", {
          className: `SkyblockQuestNotification ${lT.kind} ${lT.phase}`,
          style: {
            "--quest-notification-duration": `${lT.durationMs}ms`,
            ...lT.accent && {
              "--quest-notification-accent": lT.accent
            }
          },
          children: [(0, oM.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (lT.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, oM.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: sO(lT)
            }), lT.iconItem && (0, oM.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, oM.jsx)(wM.d, {
                itemName: lT.iconItem,
                amount: 0
              })
            })]
          }), (0, oM.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, oM.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: lT.title
            }), (0, oM.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, oM.jsx)(OK.e, {
                text: lT.name
              })
            }), lT.description && (0, oM.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, oM.jsx)(OK.e, {
                text: lT.description
              })
            }), lT.reward && (0, oM.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, oM.jsx)(OK.e, {
                text: lT.reward
              })
            })]
          })]
        }, lT.token), (null === lT || void 0 === lT ? void 0 : lT.waypointNameKey) && (0, oM.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": lT.waypointNameKey,
          "data-notification-token": lT.token,
          ref: cT.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${lT.token}`)]
      })
    }));

    function ky(TT) {
      const kT = parseInt(TT.replace("#", ""), 16);
      return `${kT>>16&255}, ${kT>>8&255}, ${255&kT}`
    }
    const cy = (0, wT.memo)((function(TT) {
      let {
        controller: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)(), lT = (0, JM.i)(uc, kT.getSnapshot());
      if (!lT) return null;
      const MT = "arrival" === lT.phase;
      return (0, oM.jsxs)("div", {
        className: aM()("SkyblockPortalTransit", {
          Departure: !MT,
          Arrival: MT
        }),
        style: {
          "--portal-rgb": ky(lT.colour),
          "--portal-duration": `${lT.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, oM.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, oM.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            kT.finishArrival(lT.token)
          }
        }), (0, oM.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, oM.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !MT && (0, oM.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: cT("skyblockGame:portalTransitHeading")
          }), (0, oM.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: cT(lT.zoneNameKey)
          })]
        })]
      }, lT.token)
    }));

    function ly() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function My() {
      const TT = document.querySelector(".SkyblockHudCoins"),
        kT = null === TT || void 0 === TT ? void 0 : TT.getBoundingClientRect();
      return kT && kT.width > 0 ? {
        x: kT.left + Math.min(kT.width, 24) / 2,
        y: kT.top + kT.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function Ky(TT) {
      return {
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2
      }
    }

    function Oy() {
      var TT;
      const kT = null === (TT = document.querySelector(".HotBar")) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
      return kT && kT.width > 0 ? Ky(kT) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function yy(TT) {
      let {
        items: kT,
        origins: cT,
        target: lT
      } = TT;
      return (0, oM.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: kT.map(((TT, kT) => {
          const MT = cT[kT];
          return (0, oM.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${MT.x}px`,
              top: `${MT.y}px`,
              "--item-dx": lT.x - MT.x + "px",
              "--item-dy": lT.y - MT.y + "px",
              "--item-delay": 2e3 + 160 * kT + "ms",
              "--item-flight": "700ms"
            },
            children: (0, oM.jsx)(wM.d, {
              itemName: TT.dailyRewardItemName,
              amount: 0
            })
          }, TT.dailyRewardItemName)
        }))
      })
    }

    function fy(TT, kT) {
      const cT = -Math.PI / 2 + 1.25 * (TT / (kT - 1) * 2 - 1),
        lT = 70 + TT % 3 * 22;
      return {
        x: Math.cos(cT) * lT,
        y: Math.sin(cT) * lT * .7
      }
    }

    function xy(TT) {
      let {
        origin: kT,
        target: cT,
        count: lT
      } = TT;
      const MT = [];
      for (let KT = 0; KT < lT; KT++) {
        const TT = fy(KT, lT);
        MT.push((0, oM.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${kT.x}px`,
            top: `${kT.y}px`,
            "--coin-bx": `${TT.x}px`,
            "--coin-by": `${TT.y}px`,
            "--coin-dx": cT.x - kT.x + "px",
            "--coin-dy": cT.y - kT.y + "px",
            "--coin-delay": `${Uc(KT,lT)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, oM.jsx)(wM.d, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, KT))
      }
      return (0, oM.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: MT
      })
    }

    function Iy(TT) {
      let {
        day: kT
      } = TT;
      const cT = mT[kT - 1];
      return (0, oM.jsxs)(oM.Fragment, {
        children: [(0, oM.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, oM.jsx)(wM.d, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, bM.g)(cT.dailyRewardCoins)]
        }), cT.dailyRewardItems.map((TT => (0, oM.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, oM.jsx)(wM.d, {
            itemName: TT.dailyRewardItemName,
            amount: 0
          }), "\xd7", TT.dailyRewardItemAmount]
        }, TT.dailyRewardItemName)))]
      })
    }

    function Ay(TT) {
      let {
        day: kT
      } = TT;
      const cT = zT(kT);
      return (0, oM.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: mT.map(((TT, lT) => {
          const MT = lT + 1;
          return (0, oM.jsxs)("li", {
            className: aM()("SkyblockDailyRewardTile", {
              Claimed: MT < kT && MT !== cT,
              Today: MT === kT,
              Tomorrow: MT === cT,
              Jackpot: MT === bT
            }),
            children: [(0, oM.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: MT
            }), (0, oM.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, oM.jsx)(wM.d, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, bM.g)(TT.dailyRewardCoins)]
            }), TT.dailyRewardItems.map((TT => (0, oM.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, oM.jsx)(wM.d, {
                itemName: TT.dailyRewardItemName,
                amount: 0
              }), "\xd7", TT.dailyRewardItemAmount]
            }, TT.dailyRewardItemName)))]
          }, MT)
        }))
      })
    }

    function Cy(TT) {
      let {
        view: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)(), lT = (0, wT.useRef)(null), MT = (0, wT.useRef)(null), [KT, OT] = (0, wT.useState)(null);
      (0, wT.useLayoutEffect)((() => {
        var TT;
        const kT = null === (TT = lT.current) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
        if (kT) {
          var cT, KT;
          const TT = Array.from(null !== (cT = null === (KT = MT.current) || void 0 === KT ? void 0 : KT.children) && void 0 !== cT ? cT : [], (TT => Ky(TT.getBoundingClientRect())));
          OT({
            origin: Ky(kT),
            target: My(),
            itemOrigins: TT,
            itemTarget: Oy()
          })
        }
      }), []);
      const yT = zT(kT.day),
        fT = function(TT, kT) {
          const [cT, lT] = (0, wT.useState)((() => ly() ? TT : 0));
          return (0, wT.useEffect)((() => {
            if (ly()) return;
            const cT = performance.now();
            let MT = 0;
            const KT = OT => {
              const yT = Math.min(Math.max((OT - cT) / kT, 0), 1);
              lT(Math.round(TT * (1 - (1 - yT) ** 3))), yT < 1 && (MT = requestAnimationFrame(KT))
            };
            return MT = requestAnimationFrame(KT), () => {
              cancelAnimationFrame(MT)
            }
          }), [TT, kT]), cT
        }(kT.coins, 450);
      return (0, oM.jsxs)("div", {
        className: aM()("SkyblockDailyReward", {
          Jackpot: kT.day === bT
        }),
        style: {
          "--daily-duration": `${kT.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, oM.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, oM.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, oM.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, oM.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: cT("skyblockGame:dailyRewardTitle")
            }), (0, oM.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: cT("skyblockGame:dailyRewardDay", {
                day: String(kT.day)
              })
            })]
          }), (0, oM.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: lT,
            children: [(0, oM.jsx)(wM.d, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, oM.jsxs)("span", {
              children: ["+", (0, bM.g)(fT)]
            })]
          }), kT.items.length > 0 && (0, oM.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: MT,
            children: kT.items.map((TT => (0, oM.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, oM.jsx)(wM.d, {
                itemName: TT.dailyRewardItemName,
                amount: 0
              }), "\xd7", TT.dailyRewardItemAmount]
            }, TT.dailyRewardItemName)))
          }), (0, oM.jsx)(Ay, {
            day: kT.day
          }), (0, oM.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [cT("skyblockGame:dailyRewardComeBack"), (0, oM.jsx)(Iy, {
              day: yT
            })]
          })]
        }), null !== KT && (0, oM.jsx)(xy, {
          origin: KT.origin,
          target: KT.target,
          count: kT.flyingCoins
        }), null !== KT && KT.itemOrigins.length === kT.items.length && (0, oM.jsx)(yy, {
          items: kT.items,
          origins: KT.itemOrigins,
          target: KT.itemTarget
        })]
      })
    }
    const jy = (0, wT.memo)((function(TT) {
        let {
          controller: kT
        } = TT;
        const cT = (0, JM.i)(Lc, kT.getSnapshot());
        return cT ? (0, oM.jsx)(Cy, {
          view: cT
        }, cT.token) : null
      })),
      vy = "Gold Coin";

    function ty(TT) {
      return 650 + 220 * TT
    }

    function hy(TT) {
      return {
        "--letter-delay": `${ty(TT)}ms`,
        "--letter-land": `${ty(TT)+300}ms`
      }
    }

    function Ny(TT) {
      let {
        letterCount: kT
      } = TT;
      return (0, oM.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, oM.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, oM.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, oM.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: kT
        }, ((TT, kT) => (0, oM.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: hy(kT),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, kT)))]
      })
    }

    function Qy(TT) {
      var kT, cT, lT;
      let {
        letter: MT,
        index: KT
      } = TT;
      const {
        t: OT
      } = (0, zM.B)(), yT = null !== (kT = null === (cT = MT.items[0]) || void 0 === cT ? void 0 : cT.itemName) && void 0 !== kT ? kT : vy;
      return (0, oM.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: hy(KT),
        children: [(0, oM.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, oM.jsx)(wM.d, {
            itemName: yT,
            amount: 0
          })
        }), (0, oM.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: OT(MT.reasonKey, null !== (lT = MT.reasonParams) && void 0 !== lT ? lT : void 0)
        }), (0, oM.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [MT.coins > 0 && (0, oM.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, oM.jsx)(wM.d, {
              itemName: vy,
              amount: 0
            }), "+", (0, bM.g)(MT.coins)]
          }), MT.items.map(((TT, kT) => (0, oM.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, oM.jsx)(wM.d, {
              itemName: TT.itemName,
              amount: 0
            }), TT.label, " \xd7", TT.amount]
          }, kT)))]
        })]
      })
    }

    function Sy(TT) {
      let {
        view: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)();
      return (0, oM.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${kT.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${ty(kT.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, oM.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, oM.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, oM.jsx)(Ny, {
              letterCount: kT.letters.length
            }), (0, oM.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: cT("skyblockGame:mailboxTitle")
            })]
          }), (0, oM.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: kT.letters.map(((TT, kT) => (0, oM.jsx)(Qy, {
              letter: TT,
              index: kT
            }, kT)))
          }), kT.more > 0 && (0, oM.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: cT("skyblockGame:mailboxMore", {
              count: String(kT.more)
            })
          })]
        })
      })
    }
    const Dy = (0, wT.memo)((function(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(Bc, kT.getSnapshot());
      return cT ? (0, oM.jsx)(Sy, {
        view: cT
      }, cT.token) : null
    }));

    function ay(TT) {
      let {
        controller: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)(), lT = (0, JM.i)(ul, kT.getSnapshot());
      if (null === lT) return null;
      const MT = lT.fullSet ? "empty" === lT.fuelState ? {
        text: cT("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: cT("skyblockGame:magmawardHudFullSet", {
          worn: String(lT.wornCount)
        }),
        tone: "partial"
      };
      return (0, oM.jsx)(rM.g, {
        placement: "statBars",
        children: (0, oM.jsxs)("div", {
          className: aM()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${lT.fuelState}`, {
            "SkyblockMagmawardHud-partial": !lT.fullSet,
            "SkyblockMagmawardHud-armed": lT.fullSet && "empty" !== lT.fuelState
          }),
          children: [null !== lT.flare && (0, oM.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${lT.flare}`
          }, `flare:${lT.flareToken}`), (0, oM.jsx)("div", {
            className: aM()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: lT.setLit
            }),
            children: lT.pieces.map(((TT, kT) => (0, oM.jsx)("div", {
              className: aM()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: TT.worn,
                SkyblockMagmawardPieceJustWorn: TT.justWorn
              }),
              children: (0, oM.jsx)(wM.d, {
                itemName: TT.itemName,
                amount: 0
              })
            }, `${kT}:${TT.wornToken}`)))
          }, `pieces:${lT.setLitToken}`), (0, oM.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, oM.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, oM.jsxs)("div", {
              className: aM()("SkyblockMagmawardFuelCounter", lT.pulse && `SkyblockMagmawardFuelCounter-${lT.pulse}`),
              children: [(0, oM.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, oM.jsx)(wM.d, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, oM.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: lT.fuel
              })]
            }, `counter:${lT.pulseToken}`), "burn" === lT.pulse && (0, oM.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${lT.pulseToken}`)]
          }), MT && (0, oM.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${MT.tone} SmallTextBold`,
            children: MT.text
          })]
        })
      })
    }

    function Fy(TT) {
      let {
        controller: kT
      } = TT;
      const {
        t: cT,
        selectedLanguage: lT
      } = (0, zM.B)(), MT = (0, JM.i)(dl, kT.getSnapshot());
      return null === MT ? null : (0, oM.jsx)(rM.g, {
        placement: "statBars",
        children: (0, oM.jsxs)("div", {
          className: aM()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: MT.inRange
          }),
          style: {
            "--glowtide-colour": MT.colour
          },
          "aria-label": cT("skyblockGame:glowtideChipLabel"),
          children: [(0, oM.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), MT.inRange ? (0, oM.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: cT("skyblockGame:glowtideChipInRange")
          }, `call:${MT.inRangeToken}`) : (0, oM.jsxs)(oM.Fragment, {
            children: [(0, oM.jsx)("div", {
              ref: kT.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, oM.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: cT("skyblockGame:waypointDistance", {
                distance: FT(MT.distance, lT.code)
              })
            })]
          })]
        })
      })
    }

    function ry(TT) {
      let {
        controller: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)(), lT = (0, JM.i)(Rl, kT.getSnapshot());
      return null === lT ? null : (0, oM.jsx)(rM.g, {
        placement: "statBars",
        children: (0, oM.jsxs)("div", {
          className: aM()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: lT.full
          }),
          "aria-label": cT("skyblockGame:glowMeterLabel", {
            fill: String(lT.fill),
            DA: String(lT.DA)
          }),
          children: [lT.burst && (0, oM.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${lT.burstToken}`), (0, oM.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, oM.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${lT.ratio})`
              }
            }), lT.gained && (0, oM.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${lT.gainToken}`), lT.full && Array.from({
              length: 5
            }, ((TT, kT) => (0, oM.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, kT)))]
          }), lT.full && lT.rares.map((TT => (0, oM.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, oM.jsx)(wM.d, {
              itemName: TT,
              amount: 0
            })
          }, TT))), lT.ready && (0, oM.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, oM.jsx)("span", {
              children: cT("skyblockGame:glowMeterReady")
            })
          }, `ready:${lT.fullToken}`)]
        })
      })
    }

    function Py(TT) {
      let {
        controller: kT
      } = TT;
      const {
        t: cT
      } = (0, zM.B)(), lT = (0, JM.i)(Ul, kT.getSnapshot());
      if (null === lT) return null;
      const MT = "waiting" === lT.phase,
        KT = {
          animationDuration: `${lT.waitMs}ms`,
          animationDelay: -lT.elapsedMs + "ms"
        },
        OT = MT ? void 0 : {
          animationDuration: `${lT.waitMs}ms`
        };
      return (0, oM.jsxs)("div", {
        className: MT ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [MT && (0, oM.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((TT, kT) => (0, oM.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, kT))), (0, oM.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: KT
          }), (0, oM.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, oM.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, oM.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: KT
            })]
          }), (0, oM.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, oM.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: OT,
          children: cT(lT.line)
        }, lT.lineIndex)]
      }, lT.token)
    }

    function wy(TT) {
      let {
        chart: kT,
        showHere: cT,
        className: lT
      } = TT;
      return (0, oM.jsx)("div", {
        className: aM()("SkyblockTideChartGrid", lT, null !== kT.pictureName && "Complete"),
        "aria-hidden": "true",
        children: kT.cells.map(((TT, lT) => {
          const MT = 0 !== (kT.pulseCells & 1 << lT),
            KT = kT.castCell === lT;
          return (0, oM.jsx)("span", {
            className: aM()("SkyblockTideChartCell", `Cell-${TT}`, MT && "Pulse", KT && "Cast", cT && kT.hereCell === lT && "Here")
          }, `${lT}:${MT?`p${kT.pulseToken}`:""}:${KT?`c${kT.castToken}`:""}`)
        }))
      })
    }

    function my(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(Bl, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = cT.chip;
      if (!cT.enabled || null === MT) return null;
      const KT = lT("skyblockGame:tideChartsChipLabel", {
        island: MT.islandName,
        lit: String(MT.lit),
        ink: String(MT.ink)
      });
      return (0, oM.jsx)(rM.g, {
        placement: "statBars",
        children: (0, oM.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: aM()("SkyblockTideChartsChip", cT.open && "Open", null !== MT.pictureName && "Complete"),
          "aria-label": KT,
          title: KT,
          onMouseDown: TT => {
            TT.preventDefault()
          },
          onClick: kT.toggle,
          children: [(0, oM.jsx)(wy, {
            chart: MT,
            showHere: !1,
            className: "Mini"
          }), (0, oM.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [MT.lit, "/", MT.ink]
          })]
        })
      })
    }

    function by(TT) {
      let {
        controller: kT
      } = TT;
      const cT = (0, JM.i)(Bl, kT.getSnapshot()),
        {
          t: lT
        } = (0, zM.B)(),
        MT = RM(),
        KT = cT.card;
      return cT.enabled && null !== KT ? (0, oM.jsx)(XM.c, {
        show: cT.open,
        close: kT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, oM.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: LM,
          children: [(0, oM.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, oM.jsxs)("div", {
              children: [(0, oM.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: lT("skyblockGame:tideChartsTitle")
              }), (0, oM.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: lT("skyblockGame:tideChartsIntro")
              })]
            }), (0, oM.jsx)(dM.l, {
              padIgnore: !0,
              ariaLabel: lT("skyblockGame:tideChartsClose"),
              onClick: kT.dismiss
            })]
          }), cT.tabs.length > 1 && (0, oM.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": lT("skyblockGame:tideChartsIslands"),
            children: cT.tabs.map((TT => (0, oM.jsx)("button", {
              type: "button",
              className: aM()("SkyblockTideChartsTab", TT.selected && "Selected"),
              "aria-pressed": TT.selected,
              onClick: () => {
                kT.gC(TT.island)
              },
              children: TT.name
            }, TT.island)))
          }), (0, oM.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, oM.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": KT.gridLabel,
              children: (0, oM.jsx)(wy, {
                chart: KT,
                showHere: !0,
                className: "Large"
              })
            }), (0, oM.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, oM.jsx)("h3", {
                children: KT.islandName
              }), (0, oM.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: KT.litText
              }), null === KT.pictureName ? (0, oM.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: lT("skyblockGame:tideChartsPictureHidden")
              }) : (0, oM.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: lT("skyblockGame:tideChartsPictureRevealed", {
                  picture: KT.pictureName
                })
              }, KT.pictureName), (0, oM.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, oM.jsxs)("li", {
                  children: [(0, oM.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), lT("skyblockGame:tideChartsLegendLit")]
                }), (0, oM.jsxs)("li", {
                  children: [(0, oM.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), lT("skyblockGame:tideChartsLegendClear")]
                }), null !== KT.hereCell && (0, oM.jsxs)("li", {
                  children: [(0, oM.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), lT("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, oM.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, oM.jsx)("span", {
                  children: cT.turnsText
                }), (0, oM.jsx)("span", {
                  children: cT.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function zy(TT) {
      var kT;
      let {
        controller: cT
      } = TT;
      const {
        selectedLanguage: lT
      } = (0, zM.B)(), MT = lT.code;
      (0, wT.useEffect)((() => {
        cT.setTranslator(((TT, kT) => (0, zM.w)(MT, TT, kT)), MT, ((TT, kT) => (0, zM.p)(MT, TT, kT)))
      }), [cT, MT]);
      const KT = (0, JM.i)(CT, cT.map.getSnapshot()),
        {
          openInGameMenuName: OT
        } = (0, FM.n)(["openInGameMenuName"]);
      return (0, oM.jsxs)(oM.Fragment, {
        children: [(0, oM.jsx)(Ty, {
          controller: cT.quests,
          display: cT.navigation.display
        }), KT.enabled && !OT && (0, oM.jsx)(lK, {
          controller: cT.navigation
        }), (0, oM.jsx)(HM, {
          controller: cT,
          minimap: KT.enabled && (null === (kT = KT.presentation) || void 0 === kT ? void 0 : kT.minimap) && (0, oM.jsx)(cK, {
            view: KT.presentation.minimap,
            navigation: cT.navigation,
            controller: cT.map
          }),
          children: (0, oM.jsx)(CK, {
            controller: cT.quests,
            surface: "hud"
          })
        }), (0, oM.jsx)(iO, {
          controller: cT.navigation
        }), (0, oM.jsx)(cy, {
          controller: cT.portalTransit
        }), (0, oM.jsx)(jy, {
          controller: cT.dailyReward
        }), (0, oM.jsx)(Dy, {
          controller: cT.mailbox
        }), (0, oM.jsx)(ay, {
          controller: cT.magmaward
        }), (0, oM.jsx)(Fy, {
          controller: cT.glowtide
        }), (0, oM.jsx)(CO, {
          controller: cT.passage
        }), (0, oM.jsx)(my, {
          controller: cT.tideCharts
        }), (0, oM.jsx)(ry, {
          controller: cT.glowMeter
        }), (0, oM.jsx)(rO, {
          controller: cT.reachLog
        }), (0, oM.jsx)(Py, {
          controller: cT.hushWait
        }), (0, oM.jsx)(SO, {
          controller: cT.lampLight
        }), (0, oM.jsx)(MK, {
          controller: cT.skills,
          surface: "hud"
        })]
      })
    }

    function Jy(TT) {
      let {
        controller: kT
      } = TT;
      return (0, oM.jsxs)(oM.Fragment, {
        children: [(0, oM.jsx)(kK, {
          controller: kT.map,
          navigation: kT.navigation
        }), (0, oM.jsx)(MK, {
          controller: kT.skills,
          surface: "menu"
        }), (0, oM.jsx)(CK, {
          controller: kT.quests,
          surface: "menu"
        }), (0, oM.jsx)(BK, {
          controller: kT.dungeons
        }), (0, oM.jsx)(pK, {
          controller: kT.collections
        }), (0, oM.jsx)(sK, {
          controller: kT.questGraph
        }), (0, oM.jsx)(MO, {
          controller: kT.forge
        }), (0, oM.jsx)(IO, {
          controller: kT.smuggler
        }), (0, oM.jsx)(aO, {
          controller: kT.keepersChair,
          lampLight: kT.lampLight
        }), (0, oM.jsx)(YO, {
          controller: kT.reachLog,
          regulars: kT.regulars,
          hiddenWaters: kT.hiddenWaters
        }), (0, oM.jsx)(bO, {
          controller: kT.regulars
        }), (0, oM.jsx)(vO, {
          controller: kT.passage
        }), (0, oM.jsx)(by, {
          controller: kT.tideCharts
        }), (0, oM.jsx)(nO, {
          controller: kT.dialogue
        }), (0, oM.jsx)(pO, {
          controller: kT.autographs
        })]
      })
    }
    var oy = cT(36580);
    const Hy = kl + fl;

    function ey(TT, kT, cT, lT, MT) {
      const KT = [],
        OT = [],
        yT = cT => {
          const lT = TT.playSound(kT, cT.sound, cT.volume, cT.rate);
          lT && (OT.push(lT), void 0 !== cT.cutAfter && KT.push(setTimeout((() => {
            lT.fade(lT.getVolume(), 0, 300)
          }), cT.cutAfter)))
        };
      for (const fT of function(TT, kT) {
          const cT = [{
            sound: "rpgKnifeSlice1",
            beat: kl,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: kl,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: kl,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: kl,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: kl,
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
            sound: (0, oy.h)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Hy + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, oy.h)("bigDrumSwish"),
            beat: Hy + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Hy + 60,
            lead: 180,
            volume: .5 + .06 * TT,
            rate: .82 + .07 * TT
          }];
          return TT >= 4 && cT.push({
            sound: "exp_levelup",
            beat: Hy + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), kT && cT.push({
            sound: "trumpetFlare",
            beat: Hy + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), cT.push({
            sound: "harp_pling",
            beat: cl,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), cT
        }(cT, lT)) MT ? KT.push(setTimeout((() => {
        yT(fT)
      }), Math.max(0, fT.beat - fT.lead / fT.rate))) : fT.beat !== kl && "magicAccent2" !== fT.sound && "trumpetFlare" !== fT.sound || yT(fT);
      return () => {
        for (const TT of KT) clearTimeout(TT);
        for (const TT of OT) TT.fade(TT.getVolume(), 0, 120)
      }
    }
    class Gy {
      constructor(TT) {
        this.deps = TT, this.pending = new Map, this.localHook = null
      }
      hookWaiting(TT, kT) {
        this.pending.delete(TT);
        const cT = this.deps.now();
        if (null === kT) {
          var lT;
          if ((null === (lT = this.localHook) || void 0 === lT ? void 0 : lT.hookId) === TT) {
            const TT = cT >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(TT)
          }
          return
        }
        const MT = cT + kT;
        this.settle(TT, MT) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(TT, {
          untilMs: cT + 1e3,
          biteAtMs: MT
        }))
      }
      getLocalHook() {
        var TT, kT;
        return null !== (TT = null === (kT = this.localHook) || void 0 === kT ? void 0 : kT.hookId) && void 0 !== TT ? TT : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const TT = this.deps.now();
        for (const [kT, {
            untilMs: cT,
            biteAtMs: lT
          }] of this.pending)(this.settle(kT, lT) || TT > cT) && this.pending.delete(kT)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(TT, kT) {
        const cT = this.deps.getLineOwner(TT);
        if (null === cT) return !1;
        if (!this.deps.isLocalPlayer(cT)) return !0;
        if (this.localHook = {
            hookId: TT,
            biteAtMs: kT
          }, !this.deps.isHushWaiting()) {
          const [kT, cT] = this.deps.getHookPosition(TT);
          this.deps.onCastLanded(kT, cT)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Vy = cT(4235);
    const Ey = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Zy = {
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
    class uy {
      constructor(TT) {
        this.deps = TT, this.tell = null
      }
      receiveTell(TT) {
        let {
          biteTellTier: kT
        } = TT;
        this.tell = {
          tier: kT,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(TT) {
        const kT = this.tell;
        if (this.tell = null, !TT) return;
        const cT = null !== kT && this.deps.now() - kT.atMs <= 3e3 ? kT.tier : 0;
        this.deps.vibrate(Ey[cT])
      }
      burstAtHook() {
        const TT = this.tell,
          kT = this.deps.getLocalHookPosition();
        null === TT || TT.burst || null === kT || (TT.burst = !0, this.deps.playParticles(function(TT, kT) {
          let [cT, lT, MT] = kT;
          const {
            count: KT,
            rise: OT,
            colour: yT
          } = Zy[TT], [fT, xT, IT] = yT;
          return {
            texture: "glint",
            pos1: [cT - .3, lT, MT - .3],
            pos2: [cT + .3, lT + .2, MT + .3],
            dir1: [-.6, OT, -.6],
            dir2: [.6, 1.4 * OT, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: KT,
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
              minColor: [fT, xT, IT, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [fT, xT, IT, 0],
              maxColor: [fT, xT, IT, 0]
            }],
            blendMode: Vy.f.Add,
            hideDist: 48
          }
        }(TT.tier, kT)))
      }
    }
    var Xy = cT(1261),
      dy = cT(1960),
      Ly = cT(47);

    function Ry(TT, kT) {
      return [{
        timeFraction: 0,
        minColor: [255 * TT[0], 255 * TT[1], 255 * TT[2], 1],
        maxColor: [255 * kT[0], 255 * kT[1], 255 * kT[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const gy = [0, 0, 0],
      Uy = {
        texture: "glint",
        mipmaps: !1,
        DA: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: gy,
        dir2: gy,
        blendMode: Vy.f.OneOne
      },
      Yy = {
        ...Uy,
        colorGradients: Ry([1, .88, .38], [1, .65, .15])
      },
      By = {
        ...Uy,
        colorGradients: Ry([.55, .95, 1], [.9, 1, 1])
      },
      Wy = [.5, .5, .5],
      ny = {
        texture: "glint",
        mipmaps: !1,
        DA: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Ry([1, .12, .12], [1, .35, .2]),
        blendMode: Vy.f.OneOne
      };
    class py {
      constructor() {
        this.drops = new Map
      }
      Av(TT, kT) {
        if ("overflowFlash" === kT.kind) {
          const [cT, lT, MT] = kT.position, KT = TT.createParticles(ny, {
            pos: [cT, lT, MT],
            half: Wy
          });
          return KT.emit(18), void KT.stop()
        }
        this.drops.has(kT.itemId) || this.drops.set(kT.itemId, {
          owner: kT.owner,
          cosmetic: kT.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      UA(TT) {
        if (0 === this.drops.size) return;
        const kT = performance.now(),
          cT = TT.getCameraPosition();
        let lT = 0;
        for (const KT of this.drops.values()) null !== KT.particles && lT++;
        for (const [KT, OT] of this.drops) {
          const yT = TT.getPositionView(KT);
          if (null === yT) {
            var MT;
            if (OT.seen || kT - OT.markedAt > 5e3) null !== OT.particles && lT--, null === (MT = OT.particles) || void 0 === MT || MT.stop(), this.drops.delete(KT);
            continue
          }
          OT.cosmetic || !TT.isLocalPlayer(OT.owner) || OT.pickupDelayCleared || (TT.clearPickupDelay(KT), OT.pickupDelayCleared = !0);
          const fT = OT.lastPosition,
            xT = OT.seen && (yT[0] - fT[0]) ** 2 + (yT[1] - fT[1]) ** 2 + (yT[2] - fT[2]) ** 2 > 4e-4,
            IT = (yT[0] - cT[0]) ** 2 + (yT[1] - cT[1]) ** 2 + (yT[2] - cT[2]) ** 2 < 2025;
          OT.seen = !0, fT[0] = yT[0], fT[1] = yT[1], fT[2] = yT[2], xT && (OT.lastMovingAt = kT), null !== OT.particles && (!IT || kT - OT.lastMovingAt > 500) && (OT.particles.stop(), OT.particles = null, lT--), xT && IT && null === OT.particles && lT < 32 && (OT.particles = TT.createParticles(OT.cosmetic ? By : Yy, {
            pos: yT
          }), lT++), null !== OT.particles && (OT.particles.moveTo(yT), OT.particles.setEmitRate(xT ? 12 : 0)), !xT && null === OT.particles && kT - Math.max(OT.lastMovingAt, OT.markedAt) > 2e3 && this.drops.delete(KT)
        }
      }
      dispose() {
        for (const kT of this.drops.values()) {
          var TT;
          null === (TT = kT.particles) || void 0 === TT || TT.stop()
        }
        this.drops.clear()
      }
    }
    var iy = cT(218);
    const qy = iy.f.Iw * iy.f.playerEyeToHeightRatio;
    class sy {
      constructor(TT) {
        this.host = TT, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      Av(TT) {
        this.lava = TT, this.nextUpdateAt = 0
      }
      UA() {
        var TT;
        const kT = this.host.now();
        if (kT < this.nextUpdateAt) return;
        this.nextUpdateAt = kT + 250;
        const cT = this.host.playerPosition(),
          lT = cT && this.findNearest([cT[0], cT[1] + qy, cT[2]]);
        if (!lT || lT.distance >= 40) return void this.stop();
        const MT = .5 * Math.min(1, (40 - lT.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(MT) : this.loop = this.host.play("lavaFlow", MT, lT.position, 40 + qy, 9, !0), null === (TT = this.loop) || void 0 === TT || TT.setPosition(lT.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var TT;
        null === (TT = this.loop) || void 0 === TT || TT.stop(), this.loop = null
      }
      findNearest(TT) {
        let kT = -1,
          cT = 1 / 0;
        for (let lT = 0; lT < this.lava.length; lT += 3) {
          const MT = this.lava[lT] - TT[0],
            KT = this.lava[lT + 1] - TT[1],
            OT = this.lava[lT + 2] - TT[2],
            yT = MT * MT + KT * KT + OT * OT;
          yT < cT && (cT = yT, kT = lT)
        }
        return kT < 0 ? null : {
          position: [this.lava[kT], this.lava[kT + 1], this.lava[kT + 2]],
          distance: Math.sqrt(cT)
        }
      }
    }
    var Tf = cT(1936),
      kf = cT(38486);
    const lf = {
      "Grey Portal": "Gray"
    };
    for (const xf of MT.Bc) lf[`${xf} Portal`] = xf;
    const Mf = Object.keys(lf),
      Kf = Object.fromEntries(Mf.map((TT => [TT, (0, MT.Q)(MT.H[`${(0,MT.ve)(lf[TT])}Team`])])));
    Object.fromEntries(Mf.map((TT => [TT, MT.H[`${(0,MT.ve)(lf[TT])}UiText`]])));
    class Of {
      constructor(TT, kT) {
        this.presentation = TT, this.portal = kT, this.unlocked = void 0
      }
      Av(TT) {
        const kT = !1 === this.unlocked && TT;
        this.unlocked = TT, this.UA();
        const {
          min: cT,
          max: lT,
          unlockedBlock: MT
        } = this.portal;
        if (kT && this.presentation.hasChunk(...cT)) {
          const [TT, kT, KT] = Kf[MT];
          this.presentation.playParticles({
            pos1: [...cT],
            pos2: lT.map((TT => TT + 1)),
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
              minColor: [TT, kT, KT, 1],
              maxColor: [Math.min(255, TT + 55), Math.min(255, kT + 55), Math.min(255, KT + 90), 1]
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
      UA() {
        var TT;
        const kT = this.unlocked ? this.portal.unlockedBlock : null !== (TT = this.portal.lockedBlock) && void 0 !== TT ? TT : "Light Gray Portal",
          {
            min: cT,
            max: lT
          } = this.portal;
        for (let MT = cT[0]; MT <= lT[0]; MT++)
          for (let TT = cT[1]; TT <= lT[1]; TT++)
            for (let KT = cT[2]; KT <= lT[2]; KT++) this.presentation.hasChunk(MT, TT, KT) && this.presentation.Tm(MT, TT, KT) !== kT && this.presentation.Qm(MT, TT, KT, kT)
      }
    }
    const yf = {
        farming_1: {
          raises: TT => "NPC" === TT.type && "chef" === TT.variation,
          rise: .4
        },
        fishing_1: {
          raises: TT => "Draugr Warper" === TT.type,
          rise: .4
        }
      },
      ff = (TT, kT, cT, KT) => {
        let {
          localPlayerId: OT
        } = KT;
        const yT = new SM({
          translate: (TT, kT) => (0, zM.w)(Xy.f.get().getCurrentLanguageCode(), TT, kT),
          translateWithIcons: (TT, kT) => (0, zM.p)(Xy.f.get().getCurrentLanguageCode(), TT, kT),
          setMenuOpen: TT => {
            TT ? (0, BT.m)() : (0, BT.d)()
          },
          dismissMenu: BT.f,
          publishSkills: TT => {
            WT.k.nt(Oc, TT, !0)
          },
          publishQuests: TT => {
            WT.k.nt(Ic, TT, !0)
          },
          publishQuestNotification: TT => {
            WT.k.nt(Ac, TT, !0)
          },
          publishDungeons: TT => {
            WT.k.nt(vc, TT, !0)
          },
          publishCollections: TT => {
            WT.k.nt(Ec, TT, !0)
          },
          publishMap: TT => {
            WT.k.nt(CT, TT, !0)
          },
          publishHud: TT => {
            WT.k.nt(hM, TT, !0)
          },
          publishPortalTransit: TT => {
            WT.k.nt(uc, TT, !0)
          },
          isLoadingScreenUp: () => FM.e.get("loadingOverlayVisible"),
          publishDailyReward: TT => {
            WT.k.nt(Lc, TT, !0)
          },
          publishMailbox: TT => {
            WT.k.nt(Bc, TT, !0)
          },
          publishQuestGraph: TT => {
            WT.k.nt(nc, TT, !0)
          },
          publishForge: TT => {
            WT.k.nt(tl, TT, !0)
          },
          publishSmuggler: TT => {
            WT.k.nt(Ql, TT, !0)
          },
          publishKeepersChair: TT => {
            WT.k.nt(bl, TT, !0)
          },
          publishReachLog: TT => {
            WT.k.nt(Jl, TT, !0)
          },
          publishLampLight: TT => {
            WT.k.nt(El, TT, !0)
          },
          publishMagmaward: TT => {
            WT.k.nt(ul, TT, !0)
          },
          publishGlowtide: TT => {
            WT.k.nt(dl, TT, !0)
          },
          publishGlowMeter: TT => {
            WT.k.nt(Rl, TT, !0)
          },
          publishHushWait: TT => {
            WT.k.nt(Ul, TT, !0)
          },
          publishPassage: TT => {
            WT.k.nt(al, TT, !0)
          },
          publishTideCharts: TT => {
            WT.k.nt(Bl, TT, !0)
          },
          publishRegulars: TT => {
            WT.k.nt(kM, TT, !0)
          },
          publishHiddenWaters: TT => {
            WT.k.nt(OM, TT, !0)
          },
          publishDialogue: TT => {
            WT.k.nt(fM, TT, !0)
          },
          publishAutographs: TT => {
            WT.k.nt(jM, TT, !0)
          },
          onDailyRewardStarted: TT => {
            HT.playSound(OT, TT.day === bT ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (TT, kT) => {
            HT.playSound(OT, "exp_collect", .35, 1 + .6 * TT / (kT - 1)), WT.k.nt(Rc, TT === kT - 1)
          },
          onDailyRewardItemLanded: TT => {
            HT.playSound(OT, "pickUp", .6, 1 + .15 * TT)
          },
          onMailboxStarted: () => {
            HT.playSound(OT, "rpgMetalClick", .6, 1), HT.playSound(OT, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            HT.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Ly.g,
          requestTracking: TT => {
            HT.sendCommand(`quests track ${TT}`)
          },
          requestDungeonEnter: (TT, kT) => {
            HT.sendCommand(`dungeonEnter ${TT} ${kT}`)
          },
          requestQuestJump: TT => {
            HT.sendCommand(`${GT} jump ${TT}`)
          },
          requestQuestArrive: (TT, kT) => {
            const cT = `${GT} arrive ${TT}`;
            HT.sendCommand(kT ? `${cT} complete` : cT)
          },
          requestForge: TT => {
            let {
              blade: kT,
              guard: cT,
              handle: lT
            } = TT;
            HT.sendCommand(`forge ${kT} ${cT} ${lT}`)
          },
          requestDialogue: () => {
            HT.sendCommand("quests dialogue")
          },
          requestSmuggle: (TT, kT) => {
            HT.sendCommand(`smuggle ${TT} ${kT}`)
          },
          requestKeepersChairAim: TT => {
            HT.sendCommand(`keeperschair-aim ${TT}`)
          },
          requestReachLogOpen: () => {
            HT.sendCommand("reachlog-open")
          },
          requestLampLight: TT => {
            HT.sendCommand(`${TT}`)
          },
          requestTravel: TT => {
            HT.sendCommand(`map travel ${TT.kind} ${TT.id} ${TT.requestId}`)
          }
        });
        let fT, xT, IT, AT, jT, vT, tT, DT, aT, FT, rT, mT, zT;
        const oT = new py;
        let HT, eT = null;
        const VT = yf[null !== cT && void 0 !== cT ? cT : ""],
          XT = (TT, kT) => {
            null !== VT && void 0 !== VT && VT.raises(kT) && HT.setNametagOffset(TT, VT.rise)
          },
          RT = new uy({
            getLocalHookPosition: () => {
              const TT = gT.getLocalHook();
              return null !== TT && HT.checkValid(TT) ? HT.kN(TT) : null
            },
            playParticles: TT => {
              HT.playParticleEffect(TT)
            },
            vibrate: TT => {
              nT.f.play("fishBite", TT)
            },
            now: () => performance.now()
          }),
          gT = new Gy({
            getLineOwner: TT => HT.checkValid(TT) ? HT.getLineOwner(TT) : null,
            isLocalPlayer: TT => HT.isLocalPlayer(TT),
            getHookPosition: TT => {
              const [kT, , cT] = HT.kN(TT);
              return [kT, cT]
            },
            isHushWaiting: () => {
              var TT;
              return "waiting" === (null === (TT = yT.hushWait.getSnapshot()) || void 0 === TT ? void 0 : TT.phase)
            },
            onCastLanded: (TT, kT) => {
              yT.tideCharts.castLanded(TT, kT)
            },
            onLocalHookSettled: () => {
              RT.onLocalHookSettled()
            },
            onLocalWaitEnded: TT => {
              RT.onLocalWaitEnded(TT)
            },
            now: () => performance.now()
          }),
          pT = new sy({
            now: () => performance.now(),
            playerPosition: () => HT.checkValid(OT) ? HT.kN(OT) : null,
            play: (TT, kT, cT, lT, MT, KT) => HT.playSound(OT, TT, kT, 1, {
              ec: cT,
              maxHearDist: lT,
              refDistance: MT
            }, KT)
          }),
          iT = new Map;
        let qT;
        return {
          onCreate: TT => {
            if (HT = TT, eT = new kf.SkyblockEntityFacing(TT, VT ? XT : null), yT.portalTransit.resumeArrival(null !== cT && void 0 !== cT ? cT : null), (null !== cT && void 0 !== cT ? cT : lT) === lT) {
              let TT = -1 / 0;
              qT = WT.k.subscribe("toggleMenu", (kT => {
                const cT = performance.now();
                "inventory|Workbench" !== kT || "cross_to_hub" !== yT.quests.getTrackedQuestId() || cT - TT < 1e4 || (TT = cT, HT.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [lT, MT] of Object.entries(null !== (kT = ET[null !== cT && void 0 !== cT ? cT : ""]) && void 0 !== kT ? kT : {})) {
              var kT;
              iT.set(lT, new Of({
                hasChunk: (kT, cT, lT) => TT.isBlockInLoadedChunk(kT, cT, lT),
                Tm: (kT, cT, lT) => TT.blockIdToBlockName(TT.getBlockId(kT, cT, lT)),
                Qm: (kT, cT, lT, MT) => {
                  TT.Qm(kT, cT, lT, MT)
                },
                playParticles: kT => {
                  TT.playParticleEffect(kT)
                }
              }, MT))
            }
            zT = (0, Tf.h)((TT => function(TT) {
              return Object.hasOwn(Uk, TT) || TT.startsWith("npc_")
            }(TT) ? Bk(TT) : null)), yT.resolveItemName = (kT, cT) => {
              const lT = TT.getItemStat(OT, kT, "displayName");
              return lT && "object" === typeof lT && "translationKey" in lT ? cT(lT.translationKey, (0, zM.m)(lT.params, dy.c.shown)) : "string" === typeof lT ? cT(lT) : kT
            }, yT.quests.notifications.onShown = TT => {
              "quest" === TT ? HT.playSound(OT, "magicAccent1", 1, 1) : "skillLevel" === TT ? HT.playSound(OT, "magicAccent1", 1, .6) : "landmark" === TT ? HT.playSound(OT, "trumpetFlare", 1, .6) : "npcNote" === TT ? HT.playSound(OT, "magicAccent2", .8, 1.1) : "started" === TT ? HT.playSound(OT, (0, oy.h)("bigDrumSwish"), 1, 1) : HT.playSound(OT, (0, oy.h)("rpgHandleSmallLeather"), 1, 1)
            }, yT.forge.onPartSelected = () => {
              HT.playSound(OT, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, yT.forge.onOpened = () => {
              ! function(TT) {
                TT.preloadSounds([(0, oy.h)("firecracker"), "fireBurn", "magicAccent2"])
              }(TT)
            }, yT.forge.onForgeStarted = (kT, cT, lT) => ey(TT, OT, kT, cT, lT), yT.smuggler.onBought = () => {
              HT.playSound(OT, (0, oy.h)("rpgHandleSmallLeather"), 1, 1), HT.playSound(OT, "chestOpen", .6, 1)
            }, yT.compass.register(new hT(yT.map, !0)), yT.compass.register(new hT(yT.map, !1)), yT.compass.register(new QT(yT.map)), yT.compass.register(new ST((() => yT.quests.getSnapshot().compassTarget)));
            for (const cT of ["enemy", "npc"]) yT.compass.register(new NT(yT.map, cT, (kT => TT.checkValid(kT) ? TT.kN(kT) : void 0), (kT => TT.isAlive(kT))))
          },
          onAfterRender: (TT, kT) => {
            const cT = HT.checkValid(OT) ? HT.kN(OT) : null;
            yT.navigation.afterRender(cT, performance.now(), kT), yT.glowtide.afterRender(cT, kT.cameraHeading), yT.tideCharts.afterRender(cT), gT.afterRender()
          },
          onClose: () => {
            var TT, kT, cT, lT, MT, KT, OT, CT, vT, hT, NT, QT, ST, PT, wT;
            qT && WT.k.unsubscribe(qT), null === (TT = zT) || void 0 === TT || TT(), oT.dispose(), pT.dispose(), null === (kT = eT) || void 0 === kT || kT.dispose(), gT.dispose(), yT.dispose(), null === (cT = fT) || void 0 === cT || cT(), null === (lT = xT) || void 0 === lT || lT(), null === (MT = IT) || void 0 === MT || MT(), null === (KT = AT) || void 0 === KT || KT(), null === (OT = jT) || void 0 === OT || OT(), null === (CT = tT) || void 0 === CT || CT(), null === (vT = undefined) || void 0 === vT || vT(), null === (hT = DT) || void 0 === hT || hT(), null === (NT = aT) || void 0 === NT || NT(), null === (QT = FT) || void 0 === QT || QT(), null === (ST = rT) || void 0 === ST || ST(), null === (PT = undefined) || void 0 === PT || PT(), null === (wT = mT) || void 0 === wT || wT()
          },
          onPlayerChangeBlock: (TT, kT, lT, KT, fT, xT) => {
            if (TT === OT && "Air" === xT) {
              const TT = HT.getClientOption(OT, "creative");
              yT.skills.predictBlock([kT, lT, KT], fT, TT);
              const xT = function(TT, kT) {
                  if ("hub" === kT || "farming_1" === kT || "mining_1" === kT) return !dT.has(TT) || "hub" !== kT && "mining_1" !== kT ? Object.hasOwn(uT, TT) ? uT[TT] : void 0 : ZT
                }(fT, cT),
                IT = ("hub" === cT || "mining_1" === cT) && (MT.qd.some((TT => TT === fT)) || Object.hasOwn(LT, fT) || "mining_1" === cT && "Block of Coal" === fT);
              TT || void 0 === xT && !IT || HT.Qm(kT, lT, KT, null !== xT && void 0 !== xT ? xT : ZT)
            }
          },
          onPlayerAttackEntity: (TT, kT) => {
            if (TT !== OT || "Player" !== HT.getEntityType(kT)) return;
            const [cT, lT, MT] = HT.kN(kT);
            HT.burstParticlePreset("critical", [cT, lT + 1, MT], 10)
          },
          onChangeBlockFail: TT => {
            for (const {
                qc: kT
              }
              of TT) yT.skills.rejectBlock(kT)
          },
          onReceivedMessageFromServer: (TT, kT) => {
            if ("skyblockGatedPortal" === TT) {
              var cT;
              const [TT, lT] = kT;
              return void(null === (cT = iT.get(TT)) || void 0 === cT || cT.Av(lT))
            }
            if ("skyblockDailyReward" === TT) return void yT.dailyReward.Av(kT);
            if ("skyblockMailbox" === TT) return void yT.mailbox.Av(kT);
            if ("skyblockPortalTransit" === TT) return void yT.portalTransit.Av(kT);
            if ("skyblockLoot" === TT) return void oT.Av(HT, kT);
            if ("skyblockLava" === TT) return void pT.Av(kT);
            if ("skyblockForge" === TT) return void yT.forge.Av(kT);
            if ("skyblockMagmaward" === TT) return void yT.magmaward.Av(kT);
            if ("skyblockGlowtide" === TT) return void yT.glowtide.Av(kT);
            if ("skyblockGlowMeter" === TT) return void yT.glowMeter.Av(kT);
            if ("skyblockHushWait" === TT) return void yT.hushWait.Av(kT);
            if ("skyblockPassage" === TT) {
              const TT = kT;
              return yT.passage.Av(TT), yT.reachLog.receivePassagePhase(TT.passagePhase), FT ??= (0, PT.w)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: yT.passage.show
              }), void yT.keepersChair.receivePassage({
                keepersChairPassagePhase: TT.passagePhase,
                keepersChairPassageNextPhase: TT.passageNextPhase,
                keepersChairPassageTurnsInMs: TT.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === TT) {
              const TT = kT;
              return yT.tideCharts.Av(TT), void(TT.tideCharts.length > 0 && (rT ??= (0, PT.w)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: yT.tideCharts.show
              })))
            }
            if (TT === UT.x) {
              var lT;
              const {
                hookId: TT,
                waiting: cT
              } = kT;
              return void gT.hookWaiting(TT, null !== (lT = null === cT || void 0 === cT ? void 0 : cT.remainingMs) && void 0 !== lT ? lT : null)
            }
            if ("skyblockBiteTell" === TT) return void RT.receiveTell(kT);
            if ("skyblockSmuggler" === TT) return void yT.smuggler.Av(kT);
            if ("skyblockKeepersChair" === TT) return yT.keepersChair.Av(kT), void yT.lampLight.setAtChair(yT.keepersChair.isAtChair());
            if ("skyblockLampLight" === TT) {
              const TT = kT;
              var MT;
              if (yT.lampLight.Av(TT), TT.lampLightReleasing) aT ??= (0, PT.w)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  yT.lampLight.setRelease(!1)
                }
              });
              else null === (MT = aT) || void 0 === MT || MT(), aT = void 0;
              return
            }
            if ("skyblockRegulars" === TT) return void yT.regulars.Av(kT);
            if ("skyblockHiddenWaters" === TT) return void yT.hiddenWaters.Av(kT);
            if ("skyblockReachLog" === TT) return yT.reachLog.Av(kT), void(DT ??= (0, PT.w)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: Hl
              },
              onClick: yT.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === TT) {
              for (const [TT, cT, lT, MT] of kT) HT.Qm(TT, cT, lT, MT);
              return
            }
            if ("skyblockHud" === TT) yT.receiveHud(kT);
            else if ("skyblockMap" === TT) yT.map.Av(kT);
            else if (TT === YT.f) yT.skills.Av(kT);
            else if (TT === JT && "dialogue" === kT.kind) yT.dialogue.Av(kT);
            else if (TT === JT) yT.quests.Av(kT);
            else if ("skyblockDungeons" === TT) yT.dungeons.Av(kT);
            else if ("sbCollections" === TT) yT.collections.Av(kT);
            else if ("skyblockQuestGraph" === TT) yT.questGraph.Av(kT);
            else {
              if ("skyblockAutographs" !== TT) return;
              yT.autographs.Av(kT)
            }
            if (!xT && yT.map.getSnapshot().enabled) {
              const TT = (0, PT.w)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: yT.map.show
                }),
                kT = (0, BT.p)(yT.map.show);
              xT = () => {
                TT(), kT()
              }
            }!IT && yT.skills.getSnapshot().enabled && (IT = (0, PT.w)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: yT.skills.show
            })), !tT && yT.collections.getSnapshot().enabled && (tT = (0, PT.w)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: yT.collections.show
            })), !AT && yT.quests.getSnapshot().enabled && (AT = (0, PT.w)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: yT.quests.show
            })), !mT && yT.autographs.getSnapshot().enabled && (mT = (0, PT.w)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: yT.autographs.show
            }));
            const KT = yT.dungeons.getSnapshot().enabled;
            var OT;
            (IT || AT || KT) && vT !== KT && (vT = KT, null === (OT = jT) || void 0 === OT || OT(), jT = (0, PT.w)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: Gk
              },
              disabled: !KT,
              panel: !0,
              onClick: yT.dungeons.show
            }));
            fT || (fT = (0, BT.q)((0, wT.createElement)(zy, {
              controller: yT
            }), {
              content: (0, wT.createElement)(Jy, {
                controller: yT
              }),
              onClose: yT.close
            }))
          },
          UA: () => {
            var TT;
            for (const kT of iT.values()) kT.UA();
            oT.UA(HT), pT.UA(), null === (TT = eT) || void 0 === TT || TT.UA(), yT.skills.UA(), yT.quests.UA(), yT.dailyReward.UA(), yT.mailbox.UA(), yT.map.UA()
          }
        }
      }
  },
  36174: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT,
      f: () => lT
    });
    const lT = "skyblockSkills",
      MT = "skills_test_gym"
  },
  9388: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT,
      g: () => OT
    });
    const lT = [{
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

    function MT(TT) {
      let kT, cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const kT = TT < 0 ? "-" : "",
            cT = Math.abs(TT);
          return cT >= 10 ? `${kT}${cT.toFixed(1).replace(/\.0$/,"")}` : `${kT}${cT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        kT = BigInt(Math.floor(TT))
      } else kT = TT;
      const MT = kT < 0n ? -kT : kT,
        KT = kT < 0n ? "-" : "",
        OT = MT.toString();
      if (OT.length <= cT) return `${KT}${OT}`;
      const yT = 3 * Math.floor((OT.length - 1) / 3);
      if (yT < 3) return `${KT}${OT}`;
      if (yT > 3 * lT.length) {
        const TT = OT[0],
          kT = OT.slice(1, 3).replace(/0+$/, "");
        return `${KT}${kT?`${TT}.${kT}`:TT}e${OT.length-1}`
      }
      const {
        threshold: fT,
        suffix: xT
      } = lT[lT.length - yT / 3], IT = MT / fT, AT = Number(1000n * (MT % fT) / fT), CT = Number(IT) + AT / 1e3;
      let jT;
      return jT = CT >= 100 ? Math.floor(CT).toString() : CT >= 10 ? CT.toFixed(1).replace(/\.0$/, "") : CT.toFixed(2).replace(/\.?0+$/, ""), `${KT}${jT}${xT}`
    }
    const KT = lT.map((TT => {
      let {
        threshold: kT,
        suffix: cT
      } = TT;
      return {
        threshold: Number(kT),
        suffix: cT
      }
    })).filter((TT => {
      let {
        threshold: kT
      } = TT;
      return Number.isFinite(kT)
    }));

    function OT(TT) {
      const kT = Math.abs(TT),
        cT = TT < 0 ? "-" : "";
      for (const {
          threshold: lT,
          suffix: MT
        }
        of KT)
        if (kT >= lT) {
          const TT = kT / lT;
          if (TT >= 1e3) return `${cT}${kT.toExponential(2).replace("e+","e")}`;
          let KT;
          return KT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${cT}${KT}${MT}`
        } return `${cT}${kT}`
    }
  },
  38405: (TT, kT, cT) => {
    var lT = {
      "./combat_1.png": 38408,
      "./dungeon_crumbling_crypt.png": 38411,
      "./dungeon_frozen_hollow.png": 38413,
      "./dungeon_wildwood_grove.png": 38421,
      "./dungeons.png": 38430,
      "./farming_1.png": 38433,
      "./fishing_1.png": 38438,
      "./hub.png": 38441,
      "./island.png": 38445,
      "./mining_1.png": 38451,
      "./mining_1_bridge.png": 38453,
      "./mining_1_gallery.png": 38456,
      "./mining_1_hollow.png": 38462,
      "./mining_1_village.png": 38469
    };

    function MT(TT) {
      var kT = KT(TT);
      return cT(kT)
    }

    function KT(TT) {
      if (!cT.o(lT, TT)) {
        var kT = new Error("Cannot find module '" + TT + "'");
        throw kT.code = "MODULE_NOT_FOUND", kT
      }
      return lT[TT]
    }
    MT.keys = function() {
      return Object.keys(lT)
    }, MT.resolve = KT, TT.exports = MT, MT.id = 38405
  },
  38408: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38411: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38413: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38421: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38430: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38433: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/farming_1.08302e28e41bf98474fe.png"
  },
  38438: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38441: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/hub.8b20a64678134496251d.png"
  },
  38445: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/island.113e20c7bd7db93fe1ce.png"
  },
  38451: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/mining_1.68cac4bdadc5ef809ae5.png"
  },
  38453: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/mining_1_bridge.56ff82ba845db0b52726.png"
  },
  38456: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/mining_1_gallery.4e799e6329dbc66249ce.png"
  },
  38462: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38469: (TT, kT, cT) => {
    TT.exports = cT.p + "static/media/mining_1_village.c2a625c1c4541a1fbe65.png"
  },
  18538: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20603: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22862: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24435: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26143: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26162: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38394: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);