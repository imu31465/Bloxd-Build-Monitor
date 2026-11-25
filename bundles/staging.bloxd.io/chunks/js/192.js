export const id = 192;
export const ids = [52, 192];
export const modules = {
  38677: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      f: () => oB
    });
    const TB = new WeakMap;

    function JB(BB, IB) {
      return TB.set(BB, IB), BB
    }

    function oB(BB) {
      var IB;
      return null !== (IB = TB.get(BB)) && void 0 !== IB ? IB : null
    }
  },
  38578: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      var TB;
      const {
        width: JB,
        height: oB
      } = ZB, GB = null !== (TB = BB.text) && void 0 !== TB ? TB : BB, vB = (GB.x / 100 - .5) * JB, kB = (GB.y / 100 - .5) * oB, cB = JB / 2 - IB.x;
      if (null !== BB.text && Math.abs(vB) <= cB && kB >= IB.top - oB / 2 && kB <= oB / 2 - IB.bottom) return {
        x: GB.x,
        y: GB.y
      };
      const nB = Math.min(0 === vB ? 1 / 0 : cB / Math.abs(vB), kB > 0 ? (oB / 2 - IB.bottom) / kB : kB < 0 ? (IB.top - oB / 2) / kB : 1 / 0);
      return !Number.isFinite(nB) || nB < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + vB * nB / JB * 100,
        y: 50 + kB * nB / oB * 100
      }
    }
    ZB.d(IB, {
      e: () => TB
    })
  },
  38593: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => GB
    });
    const TB = 4,
      JB = 12e3,
      oB = 1e3;
    class GB {
      constructor() {
        let {
          limit: BB = TB,
          windowMs: IB = JB,
          spacingMs: ZB = oB,
          now: GB = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = BB, this.windowMs = IB, this.spacingMs = ZB, this.now = GB
      }
      isPacing() {
        return !this.canSendPriority() || this.isPriorityWaiting()
      }
      canSendPriority() {
        return this.prune(), this.sent.length < this.limit && this.now() - this.lastSentAt >= this.spacingMs
      }
      tryStart() {
        for (const BB of this.priority) BB.flush();
        return !this.isPacing() && (this.start(), !0)
      }
      start() {
        this.prune();
        const BB = this.now();
        this.sent.push(BB), this.lastSentAt = BB, this.schedule(), this.notify()
      }
      addPriority(BB) {
        return this.priority.add(BB), () => {
          this.priority.delete(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
      dispose() {
        this.clearTimer(), this.sent = [], this.listeners.clear(), this.priority.clear()
      }
      isPriorityWaiting() {
        for (const BB of this.priority)
          if (BB.waiting()) return !0;
        return !1
      }
      prune() {
        const BB = this.now() - this.windowMs;
        for (; this.sent.length > 0 && this.sent[0] <= BB;) this.sent.shift()
      }
      schedule() {
        this.clearTimer();
        const BB = this.now(),
          IB = this.lastSentAt + this.spacingMs,
          ZB = Math.min(IB > BB ? IB : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        ZB !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, ZB - BB)))
      }
      notify() {
        for (const BB of this.listeners) BB()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38573: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB
    });
    class TB {
      constructor(BB, IB, ZB) {
        this.Gq = BB, this.beforeOpen = IB, this.afterClose = ZB, this.open = !1, this.WN = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.WN && (this.open = !0, this.beforeOpen(this), this.emit())
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
      closePanel(BB) {
        this.open = !1, this.onClosed(), this.emit(), this.afterClose(BB)
      }
      onClosed() {}
      dispose() {
        this.open = !1, this.emit(), this.WN = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.WN || (this.snapshot = this.buildSnapshot(), this.Gq(this.snapshot))
      }
    }
  },
  38681: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      SkyblockEntityFacing: () => vB,
      needsSkyblockEntityFacing: () => GB
    });
    var TB = ZB(663),
      JB = ZB(4416),
      oB = ZB(38685);

    function GB(BB, IB) {
      if (BB.metaInfo === TB.d || "Iron Guardian" === BB.type || "Gold Guardian" === BB.type) return !0;
      if ("Pig" === BB.type) return "sitting" === BB.pose;
      if ("Person" !== BB.meshKind || void 0 === BB.meshOpts) return !1;
      let ZB = null === IB || void 0 === IB ? void 0 : IB.get(BB.meshOpts);
      if (void 0 === ZB) {
        var oB, GB;
        const TB = (0, JB.h)(BB);
        ZB = !1, "pig_napoleon" === (null === TB || void 0 === TB || null === (oB = TB.opts.textures) || void 0 === oB ? void 0 : oB.head) ? ZB = !0 : "npc_pig_head" === (null === TB || void 0 === TB || null === (GB = TB.opts.textures) || void 0 === GB ? void 0 : GB.head) && (ZB = "sitting" === TB.opts.pose || "sitting"), IB && (IB.size >= 256 && IB.clear(), IB.set(BB.meshOpts, ZB))
      }
      return "sitting" === ZB ? "sitting" === BB.pose : ZB
    }(0, oB.g)("skyblock", ((BB, IB) => {
      IB.setFacingTolerance(GB(BB) ? 0 : null)
    }));
    class vB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = BB, this.alsoVisit = IB, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = BB => {
          var IB;
          const ZB = this.api.getEntityInfo(BB);
          ZB && (GB(ZB, this.meshFacingCache) && (this.api.setFacingTolerance(BB, 0), this.nextFacing.add(BB)), null === (IB = this.alsoVisit) || void 0 === IB || IB.call(this, BB, ZB))
        }
      }
      Iz() {
        const {
          api: BB
        } = this, IB = this.nextFacing;
        BB.forEachEntity(this.visit);
        for (const ZB of this.facing) IB.has(ZB) || BB.setFacingTolerance(ZB, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = IB
      }
      dispose() {
        for (const BB of this.facing) this.api.setFacingTolerance(BB, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38568: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => nk
    });
    const TB = "island";
    var JB = ZB(360);
    const oB = (0, JB.Eb)([0, 0, -1]),
      GB = [{
        name: "S",
        bearing: (0, JB.Eb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, JB.Eb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: oB
      }, {
        name: "W",
        bearing: (0, JB.Eb)([1, 0, 0])
      }];

    function vB(BB, IB, ZB) {
      return [100 * (ZB.mapMaxX - BB) / (ZB.mapMaxX - ZB.mapMinX), 100 * (IB - ZB.mapMinZ) / (ZB.mapMaxZ - ZB.mapMinZ)]
    }

    function kB(BB, IB, ZB) {
      const JB = "local" === IB,
        oB = BB.background,
        GB = IB => oB ? vB(IB[0] - BB.mapOrigin[0], IB[2] - BB.mapOrigin[2], oB.bounds) : [50, 50],
        kB = (BB.insideDungeon ? [] : BB.landmarks).map((BB => {
          var IB, TB;
          return {
            id: BB.id,
            name: ZB(BB.visited && BB.nameKey ? null !== (IB = BB.mapLabelKey) && void 0 !== IB ? IB : BB.nameKey : "skyblockGame:mapUnknown"),
            icon: BB.visited && null !== (TB = BB.icon) && void 0 !== TB ? TB : "unknown",
            visited: BB.visited,
            current: !1,
            position: GB(BB.position),
            travelKind: "landmark",
            travelId: BB.id
          }
        })),
        nB = BB.zones.map((IB => {
          var TB;
          return {
            id: IB.id,
            name: ZB(IB.visited && IB.nameKey ? IB.nameKey : "skyblockGame:mapUnknown"),
            icon: IB.visited && null !== (TB = IB.icon) && void 0 !== TB ? TB : "unknown",
            visited: IB.visited,
            current: IB.id === BB.zoneId,
            position: IB.position,
            thumbnail: IB.visited ? IB.id : void 0,
            travelKind: "zone",
            travelId: IB.id
          }
        })),
        hB = BB.insideDungeon || !oB ? [] : BB.portals.map((BB => {
          var IB;
          return {
            id: BB.id,
            name: ZB(null !== (IB = BB.nameKey) && void 0 !== IB ? IB : "skyblockGame:mapUnknown"),
            icon: BB.visited ? "dungeons" === BB.destination ? "portal_orange" : "portal" : "unknown",
            visited: BB.visited,
            current: !1,
            position: GB(BB.position),
            colour: BB.colour,
            travelKind: "zone",
            travelId: BB.destination
          }
        })),
        zB = JB ? kB : nB,
        FB = zB.filter((BB => BB.visited)).length,
        NB = oB ? (oB.bounds.mapMaxX - oB.bounds.mapMinX) / (oB.bounds.mapMaxZ - oB.bounds.mapMinZ) : 2,
        gB = oB ? JSON.stringify([oB.bounds, BB.mapOrigin]) : "";
      return {
        local: JB,
        points: zB,
        portals: JB ? hB : [],
        progress: zB.length ? ZB("skyblockGame:mapDiscovered", {
          current: String(FB),
          total: String(zB.length)
        }) : null,
        percent: zB.length ? 100 * FB / zB.length : 0,
        canTravel: [...zB, ...JB ? hB : []].some((BB => BB.visited && !BB.current)),
        noLandmarks: JB && !BB.insideDungeon && 0 === kB.length,
        background: oB ? {
          imageKey: oB.imageKey,
          fallbackImageKey: BB.zoneId,
          geometryKey: gB,
          label: ZB(oB.labelKey),
          colour: oB.backgroundColour,
          ratio: NB
        } : null,
        connections: cB(BB.zones),
        minimap: oB ? {
          imageKey: oB.imageKey,
          fallbackImageKey: BB.zoneId,
          geometryKey: gB,
          label: ZB(oB.labelKey),
          colour: oB.backgroundColour,
          caption: ZB(BB.zoneId === TB ? "skyblockGame:zoneIsland" : oB.labelKey),
          width: (oB.bounds.mapMaxX - oB.bounds.mapMinX) / oB.minimapSpan * 100 + "%",
          height: (oB.bounds.mapMaxZ - oB.bounds.mapMinZ) / oB.minimapSpan * 100 + "%",
          markers: [...kB, ...hB]
        } : null
      }
    }

    function cB(BB) {
      const IB = new Set;
      return BB.flatMap((ZB => ZB.connections.flatMap((TB => {
        const JB = BB.find((BB => BB.id === TB)),
          oB = [ZB.id, TB].sort().join("|");
        return !JB || IB.has(oB) ? [] : (IB.add(oB), [{
          id: `${ZB.id}-${TB}`,
          start: ZB.position,
          end: JB.position,
          explored: ZB.visited && JB.visited
        }])
      }))))
    }
    var nB = ZB(38573);
    class hB extends nB.e {}
    const zB = "skyblockMapView";
    class FB extends hB {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, TB, JB), this.requestTravel = IB, this.translate = ZB, this.now = oB, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
          presentation: null,
          enabled: !1,
          open: !1,
          tab: "local",
          map: null,
          pending: !1,
          feedback: ""
        }, this.showLocal = () => {
          this.selectTab("local"), this.show()
        }, this.selectTab = BB => {
          this.tab = BB, this.feedbackKey = "", this.emit()
        }, this.travel = (BB, IB) => {
          if (!this.map || this.pending || this.WN) return;
          const ZB = ("zone" === BB ? this.map.zones : this.map.landmarks).find((BB => BB.id === IB));
          if (ZB) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in ZB && !ZB.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (ZB.visited)
              if ("zone" === BB && IB === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const ZB = ++this.nextRequestId;
                this.pending = {
                  requestId: ZB,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: BB,
                  id: IB,
                  requestId: ZB
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
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      sN(BB) {
        var IB;
        if (!this.WN)
          if ("entities" !== BB.kind)
            if ("open" !== BB.kind) {
              var ZB, TB;
              if ("snapshot" === BB.kind)(null === (ZB = BB.snapshot) || void 0 === ZB ? void 0 : ZB.zoneId) !== (null === (TB = this.map) || void 0 === TB ? void 0 : TB.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = BB.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === BB.kind) {
                var JB;
                BB.requestId === (null === (JB = this.pending) || void 0 === JB ? void 0 : JB.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (BB.requestId === (null === (IB = this.pending) || void 0 === IB ? void 0 : IB.requestId)) {
                var oB;
                this.pending = null, this.feedbackKey = null !== (oB = BB.errorKey) && void 0 !== oB ? oB : "", null === BB.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = BB.entities
      }
      Iz() {
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
          presentation: this.map ? kB(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const NB = 67.5 * Math.PI / 180;

    function gB(BB, IB) {
      const ZB = Math.abs(BB);
      if (ZB > NB || IB.trackHalfWidth <= 0) return null;
      const TB = IB.trackHalfWidth,
        JB = IB.screenHalfWidth / (IB.tanHalfFovX * Math.max(.5, Math.cos(IB.pitch))),
        oB = Math.min(Math.atan(.6 * TB / JB), .75 * NB),
        GB = JB * Math.tan(oB);
      let vB;
      if (ZB <= oB) vB = JB * Math.tan(ZB);
      else {
        const BB = NB - oB,
          IB = Math.max(0, JB * BB / (Math.cos(oB) ** 2 * (TB - GB)) - 1),
          kB = (ZB - oB) / BB;
        vB = GB + (TB - GB) * (1 + IB) * kB / (1 + IB * kB)
      }
      return 50 + Math.sign(BB) * vB * 50 / TB
    }
    class qB {
      constructor(BB, IB) {
        this.map = BB, this.visited = IB, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = IB ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const BB = this.map.getSnapshot().map;
        return !BB || BB.insideDungeon ? [] : BB.landmarks.filter((BB => BB.visited === this.visited)).map((BB => {
          var IB, ZB;
          return {
            id: `landmark:${BB.id}`,
            position: BB.position,
            icon: null !== (IB = BB.icon) && void 0 !== IB ? IB : "unknown",
            nameKey: null !== (ZB = BB.nameKey) && void 0 !== ZB ? ZB : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class yB {
      constructor(BB, IB, ZB, TB) {
        this.map = BB, this.kind = IB, this.position = ZB, this.alive = TB, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = IB, this.range = "enemy" === IB ? 48 : 64, this.limit = 12
      }
      aU(BB) {
        if ("enemy" !== this.kind || this.alive(BB.rT)) return this.position(BB.rT)
      }
      getPoints() {
        const BB = [];
        for (const TB of this.map.getEntities()) {
          if (TB.kind !== this.kind || "enemy" === this.kind && !this.alive(TB.compassEntityId)) continue;
          const JB = this.position(TB.compassEntityId);
          var IB, ZB;
          if (JB) BB.push({
            id: `${this.kind}:${TB.compassEntityId}`,
            rT: TB.compassEntityId,
            kind: this.kind,
            icon: null !== (IB = TB.icon) && void 0 !== IB ? IB : TB.npcSkin ? `npc_${TB.npcSkin}` : this.kind,
            displayName: TB.displayName,
            position: JB,
            nameKey: null !== (ZB = TB.nameKey) && void 0 !== ZB ? ZB : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return BB
      }
    }
    class UB {
      constructor(BB) {
        this.map = BB, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const BB = this.map.getSnapshot().map;
        return !BB || BB.insideDungeon ? [] : BB.portals.map((BB => {
          var IB;
          return {
            id: "portal:" + BB.id,
            kind: "portal",
            position: BB.position,
            nameKey: null !== (IB = BB.nameKey) && void 0 !== IB ? IB : "skyblockGame:compassUnvisitedZone",
            icon: BB.visited ? "dungeons" === BB.destination ? "portal_orange" : "portal" : "unknown",
            colour: BB.colour
          }
        }))
      }
    }
    class WB {
      constructor(BB) {
        this.target = BB, this.id = "quest", this.enabled = !0, this.range = 1 / 0, this.limit = 1
      }
      getPoints() {
        const BB = this.target();
        return BB ? [{
          id: "quest",
          kind: "quest",
          icon: "quest",
          position: BB.position,
          nameKey: BB.nameKey
        }] : []
      }
    }

    function dB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.position;
      const oB = TB[0] - IB[0],
        GB = TB[2] - IB[2];
      return {
        ...BB,
        position: TB,
        offset: JB.e.computeShortestRotation(ZB, (0, JB.Eb)([oB, 0, GB])),
        distance: Math.hypot(oB, TB[1] - IB[1], GB)
      }
    }
    let CB;

    function QB(BB, IB) {
      var ZB;
      return (null === (ZB = CB) || void 0 === ZB ? void 0 : ZB.locale) !== IB && (CB = {
        locale: IB,
        near: new Intl.NumberFormat(IB, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(IB, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (BB < 10 ? CB.near : CB.far).format(BB)
    }
    class sB {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(BB) {
        return this.providers.set(BB.id, BB), this.refreshAt = 0, () => {
          this.providers.get(BB.id) === BB && (this.providers.delete(BB.id), this.refreshAt = 0)
        }
      }
      frame(BB, IB, ZB) {
        if (ZB >= this.refreshAt) {
          this.refreshAt = ZB + 200, this.candidates = [];
          for (const IB of this.providers.values()) {
            if (!IB.enabled) continue;
            const ZB = IB.getPoints().map((IB => {
              const ZB = IB.position;
              return {
                point: IB,
                distance: Math.hypot(ZB[0] - BB[0], ZB[1] - BB[1], ZB[2] - BB[2])
              }
            })).filter((BB => BB.distance <= IB.range)).sort(((BB, IB) => BB.distance - IB.distance)).slice(0, IB.limit);
            for (const {
                point: BB
              }
              of ZB) this.candidates.push({
              provider: IB,
              point: BB
            })
          }
        }
        const TB = [];
        for (const {
            point: JB,
            provider: oB
          }
          of this.candidates) {
          if (!oB.enabled) continue;
          const ZB = oB.aU ? oB.aU(JB) : JB.position;
          if (ZB) {
            const oB = dB(JB, BB, IB, ZB);
            Math.abs(oB.offset) <= NB && TB.push(oB)
          }
        }
        return TB
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var wB = ZB(36625),
      OB = ZB(63);
    const YB = [{
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
      iB = YB.length;

    function pB(BB) {
      return BB >= iB ? 1 : BB + 1
    }
    const aB = "skyblockQuests",
      HB = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      MB = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function jB(BB) {
      let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const ZB = Math.max(0, Math.floor(BB)),
        TB = Math.floor(ZB % 1e3 / 100),
        JB = Math.floor(ZB / 1e3),
        oB = JB % 60,
        GB = Math.floor(JB / 60),
        vB = GB % 60,
        kB = Math.floor(GB / 60),
        cB = BB => BB < 10 ? `0${BB}` : String(BB),
        nB = IB ? `.${TB}` : "";
      return kB > 0 ? `${kB}:${cB(vB)}:${cB(oB)}${nB}` : `${vB}:${cB(oB)}${nB}`
    }
    const PB = "devquests",
      RB = "none",
      rB = {
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
      mB = "Compressed Messy Stone",
      XB = {
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
      LB = ["Stone", "Diorite", "Andesite", "Granite"],
      eB = new Set(LB),
      uB = (Object.keys(XB), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const fB = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function lB(BB, IB) {
      const ZB = Math.floor(5 * BB / (2 * IB + 1));
      return Math.min(4, Math.max(0, ZB))
    }
    var AB = ZB(1300);
    var tB = ZB(36387);
    var bB = ZB(36619),
      xB = ZB(24),
      EB = ZB(8985);
    const DB = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      KB = 1e3;

    function VB(BB) {
      return Math.max(0, BB)
    }

    function SB(BB) {
      return 1 + .01 * VB(BB)
    }

    function BI(BB) {
      return 1 + .005 * VB(BB)
    }

    function II(BB) {
      return 1 + .005 * VB(BB)
    }

    function ZI(BB) {
      return .01 * VB(BB)
    }

    function TI(BB) {
      return 150 / (150 + VB(BB))
    }

    function JI(BB) {
      return 1 + .002 * VB(BB)
    }

    function oI(BB) {
      return Math.round(10 * BB) / 10
    }

    function GI(BB, IB) {
      switch (BB) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: oI(100 * (BI(IB) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: oI(100 * (SB(IB) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: oI(100 * (II(IB) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: oI(100 * ZI(IB))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: oI(100 * (1 - TI(IB)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: oI(100 * (JI(IB) - 1))
          }
      }
    }

    function vI(BB) {
      return "farming" === BB ? 200 : 100
    }

    function kI(BB, IB) {
      if (!Number.isSafeInteger(BB) || BB < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const ZB = vI(IB),
        TB = BB => function(BB, IB) {
          return vI(BB) * IB * (IB + 1) / 2
        }(IB, BB);
      let JB = Math.min(KB, Math.floor((Math.sqrt(8 * BB / ZB + 1) - 1) / 2));
      return JB < KB && TB(JB + 1) <= BB ? JB++ : TB(JB) > BB && JB--, {
        totalXp: BB,
        level: JB,
        xpIntoLevel: BB - TB(JB),
        xpForNextLevel: JB === KB ? null : ZB * (JB + 1)
      }
    }
    const cI = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function nI(BB) {
      return cI.has(BB)
    }
    const hI = new Set(JB.tb);

    function zI(BB) {
      return hI.has(BB)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const FI = {
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
      NI = {
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
      gI = {
        ...NI,
        ...Object.fromEntries(Object.entries(uB).map((BB => {
          let [IB, ZB] = BB;
          return [IB, 9 * NI[ZB]]
        })))
      },
      qI = {
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
      yI = {
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
    const UI = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      WI = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function dI(BB) {
      return `rgb(${WI[BB].join(", ")})`
    }

    function CI(BB, IB, ZB) {
      if (!ZB) return BB(IB);
      const TB = {};
      for (const [JB, oB] of Object.entries(ZB)) TB[JB] = "string" === typeof oB ? oB : BB(oB.translationKey);
      return BB(IB, TB)
    }
    class QI {
      constructor(BB, IB) {
        this.now = BB, this.getJournal = IB, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.sv = !1, this.onShown = () => {}
      }
      enqueue(BB) {
        const IB = sI(BB);
        if (IB) this.pending.push(BB);
        else {
          const IB = this.pending.findIndex(sI);
          this.pending.splice(-1 === IB ? this.pending.length : IB, 0, BB)
        }
        return (null === this.current || null !== this.followUp && !IB) && (this.advance(), !0)
      }
      setHeld(BB) {
        return this.sv = BB, !BB && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Iz() {
        const BB = this.getJournal(),
          IB = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === IB ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === IB || void 0 === IB ? void 0 : IB.kind) && BB && BB.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === IB || void 0 === IB ? void 0 : IB.kind)) {
          const BB = this.findFollowUp(this.current);
          if ("step" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || BB.questId !== IB.questId || BB.step.id !== IB.step.id) return this.showFollowUp(BB, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(BB, IB, ZB) {
        var TB, JB, oB, GB;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, BB, ZB);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, BB);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, BB, IB);
        const {
          questCompletionKind: vB,
          questCompletionNameKey: kB
        } = this.current, cB = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, nB = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, hB = "step" === (null === (TB = this.followUp) || void 0 === TB ? void 0 : TB.kind) ? this.followUp : null, zB = "explore" === (null === (JB = this.followUp) || void 0 === JB ? void 0 : JB.kind);
        let FB;
        return FB = zB ? BB("skyblockGame:questExploreTitle") : null !== hB ? "quest" === vB ? BB("skyblockGame:questNextQuestTitle", {
          quest: BB(hB.questNameKey)
        }) : BB("skyblockGame:questNextStepTitle") : BB("started" === vB ? "skyblockGame:questStartedTitle" : "quest" === vB ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? vB : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: FB,
          name: zB ? IB("skyblockGame:questExploreName") : null !== hB ? CI(IB, hB.step.nameKey, hB.step.nameParams) : CI(IB, kB, cB),
          description: zB ? IB("skyblockGame:questExploreDescription") : null === hB ? null : CI(IB, hB.step.descriptionKey, hB.step.descriptionParams),
          reward: null === this.followUp && nB > 0 ? IB("skyblockGame:questCoinRewardSuffix", {
            amount: nB.toLocaleString(ZB)
          }) : null,
          iconItem: null !== (oB = null === hB || void 0 === hB ? void 0 : hB.step.questIconItem) && void 0 !== oB ? oB : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== hB && (null === (GB = this.getJournal()) || void 0 === GB ? void 0 : GB.trackedQuestId) === hB.questId ? hB.step.nameKey : null
        }
      }
      getSkillLevelView(BB, IB, ZB) {
        let {
          skill: TB,
          beforeLevel: JB,
          level: oB
        } = BB;
        const GB = GI(TB, JB),
          vB = GI(TB, oB);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: IB(`skyblockGame:${TB}`),
          name: IB("skyblockGame:skillLevelUp", {
            to: oB.toLocaleString(ZB)
          }),
          description: GB.percent === vB.percent ? null : IB(`${vB.translationKey}Change`, {
            before: GB.percent.toLocaleString(ZB),
            after: vB.percent.toLocaleString(ZB)
          }),
          reward: null,
          iconItem: UI[TB],
          accent: dI(TB),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(BB, IB) {
        let {
          landmarkNameKey: ZB
        } = BB;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: IB("skyblockGame:landmarkDiscovered"),
          name: IB(ZB),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(BB, IB, ZB) {
        let {
          titleKey: TB,
          textKey: JB,
          params: oB = {},
          nameKeys: GB = {},
          iconItem: vB = null
        } = BB;
        const kB = {
          ...oB
        };
        for (const [cB, nB] of Object.entries(GB)) kB[cB] = IB(nB);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: IB(TB),
          name: ZB(JB, kB),
          description: null,
          reward: null,
          iconItem: vB,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      durationMs() {
        var BB;
        if (null !== this.followUp) return 5600;
        switch (null === (BB = this.current) || void 0 === BB ? void 0 : BB.questCompletionKind) {
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
      showFollowUp(BB, IB) {
        null === BB || this.sv ? this.advance() : (this.followUp = BB, this.token++, this.shownAt = this.now(), this.expiresAt = null !== IB && void 0 !== IB ? IB : this.shownAt + this.durationMs())
      }
      findFollowUp(BB) {
        var IB;
        const ZB = this.getJournal();
        if (!ZB || this.hasPendingQuestPopup() || sI(BB)) return null;
        const TB = "started" === BB.questCompletionKind ? ZB.active.some((IB => IB.id === BB.questCompletionQuestId)) : "quest" === BB.questCompletionKind ? ZB.completed.some((IB => IB.id === BB.questCompletionQuestId)) : [...ZB.active, ...ZB.completed].some((IB => IB.id === BB.questCompletionQuestId && IB.subquests.some((IB => IB.id === BB.questCompletionStepId && "completed" === IB.status))));
        if (!TB) return null;
        if ("quest" === BB.questCompletionKind && 0 === ZB.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const JB = ZB.active.find((BB => BB.id === ZB.trackedQuestId)),
          oB = null !== (IB = null === JB || void 0 === JB ? void 0 : JB.subquests.find((BB => "ready" === BB.status))) && void 0 !== IB ? IB : null === JB || void 0 === JB ? void 0 : JB.subquests.find((BB => "active" === BB.status));
        return oB ? {
          kind: "step",
          questId: JB.id,
          questNameKey: JB.nameKey,
          step: oB
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((BB => !sI(BB)))
      }
      advance() {
        var BB;
        this.current = this.sv ? null : null !== (BB = this.pending.shift()) && void 0 !== BB ? BB : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function sI(BB) {
      return wI(BB.questCompletionKind)
    }

    function wI(BB) {
      return "skillLevel" === BB || "landmark" === BB || "npcNote" === BB
    }
    var OI = ZB(38578);
    const YI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      iI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      pI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      aI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      HI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var MI = ZB(38583);
    var jI = ZB(38590);
    const PI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      RI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const rI = ZB.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const mI = ZB.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      XI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var LI = ZB(18343),
      eI = ZB(20473),
      uI = ZB(22825),
      fI = ZB(24435),
      lI = ZB(26150);
    const AI = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: LI,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: eI,
      cow: HI,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: ZB(26163),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: YI,
      fishing_1: YI,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: iI,
      guardian_iron: pI,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: uI,
      mines: fI,
      mining_1: fI,
      npc: aI,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: HI,
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
      npc_gold_guardian: iI,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: pI,
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
      npc_portal_mage: MI,
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: jI,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: PI,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: rI,
      quest_talk: mI,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: XI,
      watermelon: lI
    };

    function tI(BB, IB) {
      const ZB = document.createElement("img");
      return ZB.className = IB, ZB.src = BB, ZB.alt = "", ZB.draggable = !1, ZB
    }

    function bI(BB) {
      var IB;
      const ZB = null !== (IB = AI[BB]) && void 0 !== IB ? IB : BB.startsWith("npc_") ? aI : XI;
      if ("portal" !== BB) return tI(ZB, "SkyblockMapIcon");
      const TB = document.createElement("span");
      TB.className = "SkyblockMapIcon Portal";
      const JB = document.createElement("span");
      return JB.className = "SkyblockMapIconTint", JB.style.maskImage = JB.style.webkitMaskImage = `url("${RI}")`, TB.append(tI(ZB, "SkyblockMapIconLayer"), JB, tI(RI, "SkyblockMapIconLayer SkyblockMapIconShade")), TB
    }
    var xI = ZB(38557),
      EI = ZB(4428);
    const DI = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function KI(BB) {
      const IB = new EI.j(BB);
      return {
        radius: 45,
        squareness: 3,
        wobbles: DI.map((BB => {
          let {
            lobes: ZB,
            amount: TB
          } = BB;
          return {
            lobes: ZB[Math.floor(IB.next() * ZB.length)],
            amount: TB[0] + IB.next() * (TB[1] - TB[0]),
            phase: 2 * IB.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function VI(BB) {
      let {
        radius: IB,
        squareness: ZB,
        wobbles: TB,
        samples: JB
      } = BB;
      const oB = [];
      for (let GB = 0; GB < JB; GB++) {
        const BB = 2 * Math.PI * GB / JB,
          vB = Math.cos(BB),
          kB = Math.sin(BB),
          cB = IB * (Math.abs(vB) ** ZB + Math.abs(kB) ** ZB) ** (-1 / ZB) * TB.reduce(((IB, ZB) => {
            let {
              lobes: TB,
              amount: JB,
              phase: oB
            } = ZB;
            return IB + JB * Math.sin(TB * BB + oB)
          }), 1);
        oB.push(`${(50+cB*vB).toFixed(2)} ${(50+cB*kB).toFixed(2)}`)
      }
      return `M${oB.join("L")}Z`
    }
    const SI = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class BZ {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.WN = !1, this.mountCompass = BB => {
          var IB;
          if (null === (IB = this.stopLayout) || void 0 === IB || IB.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !BB || this.WN) return;
          const ZB = BB.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: BB,
            track: ZB,
            label: BB.querySelector(".SkyblockCompassLabel")
          }, ZB.replaceChildren();
          for (let JB = 0; JB < 4; JB++) {
            const BB = document.createElement("span");
            BB.className = "SkyblockCompassCardinal", ZB.appendChild(BB), this.cardinals.push(BB)
          }
          const TB = (0, xI.e)(SI, [BB], this.layout);
          this.stopLayout = () => {
            TB(), ZB.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = BB => {
          this.terrain = this.WN ? null : BB, this.render(this.frame)
        }, this.mountMinimapSearchArea = BB => {
          this.mountSearchArea("minimap", BB)
        }, this.mountMapSearchArea = BB => {
          this.mountSearchArea("map", BB)
        }, this.mountPlayer = BB => {
          this.player = this.WN ? null : BB, this.render(this.frame)
        }, this.mountWaypoint = BB => {
          var IB, ZB;
          if (null === (IB = this.stopWaypoint) || void 0 === IB || IB.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !BB || this.WN) return;
          const TB = BB.querySelector(".SkyblockQuestWaypointMarker");
          TB.replaceChildren(bI("quest")), this.markerIcon = "quest", this.waypoint = {
            root: BB,
            marker: TB,
            clip: BB.querySelector(".SkyblockQuestWaypointTextClip"),
            text: BB.querySelector(".SkyblockQuestWaypointText"),
            label: BB.querySelector(".SkyblockQuestWaypointLabel"),
            distance: BB.querySelector(".SkyblockQuestWaypointDistance"),
            hint: BB.querySelector(".SkyblockQuestWaypointHint")
          };
          const JB = () => {
              this.waypointMarkerSize = {
                width: TB.offsetWidth,
                height: TB.offsetHeight
              }, this.waypointInset = {
                x: TB.offsetWidth / 2 + 8,
                top: TB.offsetHeight + 8,
                bottom: 8
              }
            },
            oB = new ResizeObserver((() => {
              JB(), this.render(this.frame)
            }));
          oB.observe(TB, {
            box: "border-box"
          });
          const GB = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", GB), null === (ZB = window.visualViewport) || void 0 === ZB || ZB.addEventListener("resize", GB), this.stopWaypoint = () => {
            var BB;
            oB.disconnect(), window.removeEventListener("resize", GB), null === (BB = window.visualViewport) || void 0 === BB || BB.removeEventListener("resize", GB)
          }, GB(), JB(), this.render(this.frame)
        }, this.mountWaypointOrigin = BB => {
          var IB;
          if (null === (IB = this.stopWaypointOrigin) || void 0 === IB || IB.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = BB && !this.WN ? Number(BB.dataset.notificationToken) : null, BB && !this.WN && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const IB = {
              nameKey: BB.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = IB;
            const ZB = () => {
                const ZB = BB.getBoundingClientRect();
                IB.x = (ZB.left + ZB.width / 2) / window.innerWidth * 100, IB.y = (ZB.top + ZB.height / 2) / window.innerHeight * 100
              },
              TB = new ResizeObserver(ZB);
            TB.observe(BB.parentElement), TB.observe(BB), window.addEventListener("resize", ZB), this.stopWaypointOrigin = () => {
              TB.disconnect(), window.removeEventListener("resize", ZB)
            }, ZB()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const BB = this.compass.root,
            IB = getComputedStyle(BB),
            ZB = getComputedStyle(document.documentElement),
            TB = parseFloat(ZB.fontSize),
            JB = parseFloat(IB.getPropertyValue("--compass-icon-size")) * TB,
            oB = "1" === IB.getPropertyValue("--compass-fit-top").trim(),
            GB = oB ? 1 : 8,
            vB = Array.from(document.querySelectorAll(SI), (BB => {
              var IB;
              return (null !== (IB = BB.querySelector(".MiddleTextTop")) && void 0 !== IB ? IB : BB).getBoundingClientRect()
            })).filter((BB => BB.width > 0 && BB.height > 0));
          let kB = (parseFloat(ZB.getPropertyValue("--notchTop")) || 0) + GB,
            cB = "";
          if (oB) {
            const IB = window.innerWidth / 2,
              ZB = BB.getBoundingClientRect().height,
              oB = [kB, ...vB.map((BB => Math.max(kB, BB.bottom + GB)))].sort(((BB, IB) => BB - IB));
            for (const BB of oB) {
              let oB = IB - 8;
              for (const TB of vB) TB.bottom + GB <= BB || TB.top >= BB + ZB + GB || (oB = Math.min(oB, TB.right <= IB ? IB - TB.right - 8 : TB.left - IB - 8));
              const nB = 2 * oB - JB;
              if (nB >= 16 * TB) {
                cB = `${nB}px`, kB = BB;
                break
              }
            }
          }
          BB.style.maxWidth !== cB && (BB.style.maxWidth = cB);
          const nB = BB.getBoundingClientRect(),
            hB = this.compassSize.trackHalfWidth;
          if (nB.width > 0) {
            const BB = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: BB.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * JB / BB.width
          }
          if (!cB)
            for (const zB of vB) zB.right > nB.left - 8 && zB.left < nB.right + 8 && (kB = Math.max(kB, zB.bottom + GB));
          BB.style.top = `${kB}px`, this.compassSize.trackHalfWidth !== hB && this.render(this.frame)
        }
      }
      mountSearchArea(BB, IB) {
        this.searchAreas[BB] = this.WN ? null : IB, this.render(this.frame)
      }
      render(BB) {
        if (this.WN) return;
        if (this.frame = BB, this.compass && (IZ(this.compass.root, !BB), BB)) {
          const IB = this.compassSize.trackHalfWidth / 50;
          BB.compass.cardinals.forEach(((BB, ZB) => {
            const TB = this.cardinals[ZB];
            TB.textContent !== BB.name && (TB.textContent = BB.name), IZ(TB, BB.hidden), TB.style.translate = BB.left * IB + "px"
          }));
          const ZB = new Set;
          BB.compass.markers.forEach(((TB, JB) => {
            var oB;
            ZB.add(TB.id);
            let GB = this.markers.get(TB.id);
            GB || (GB = document.createElement("span"), GB.className = "SkyblockCompassMarker", this.markers.set(TB.id, GB), this.compass.track.appendChild(GB)), GB.dataset.icon !== TB.icon && (GB.dataset.icon = TB.icon, GB.replaceChildren(bI(TB.icon))), GB.style.color = null !== (oB = TB.colour) && void 0 !== oB ? oB : "", GB.style.translate = TB.left * IB + "px", GB.style.zIndex = String(BB.compass.markers.length - JB), GB.title !== TB.name && (GB.title = TB.name)
          }));
          for (const [BB, TB] of this.markers) ZB.has(BB) || (TB.remove(), this.markers.delete(BB));
          this.compass.label.textContent !== BB.compass.label && (this.compass.label.textContent = BB.compass.label)
        }
        this.terrain && (IZ(this.terrain, !(null !== BB && void 0 !== BB && BB.minimap)), null !== BB && void 0 !== BB && BB.minimap && (this.terrain.style.transform = BB.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", BB.minimap.iconRotation)));
        const IB = null === BB || void 0 === BB ? void 0 : BB.searchArea;
        for (const ZB of [this.searchAreas.minimap, this.searchAreas.map])
          if (ZB && (IZ(ZB, !IB), IB)) {
            if (this.searchAreaPath.seed !== IB.shapeSeed && (this.searchAreaPath = {
                seed: IB.shapeSeed,
                d: VI(KI(IB.shapeSeed))
              }), ZB.dataset.shapeSeed !== IB.shapeSeed) {
              ZB.dataset.shapeSeed = IB.shapeSeed;
              for (const BB of ZB.querySelectorAll("path")) BB.setAttribute("d", this.searchAreaPath.d)
            }
            ZB.style.left = `${IB.left}%`, ZB.style.top = `${IB.top}%`, ZB.style.width = `${IB.width}%`, ZB.style.height = `${IB.height}%`
          } if (this.player && (IZ(this.player, !(null !== BB && void 0 !== BB && BB.player) || BB.player.hidden), null !== BB && void 0 !== BB && BB.player && (this.player.style.left = `${BB.player.left}%`, this.player.style.top = `${BB.player.top}%`, this.player.style.setProperty("--map-player-rotation", BB.player.rotation))), this.waypoint) {
          const {
            root: IB,
            marker: ZB,
            clip: TB,
            text: JB,
            label: oB,
            distance: GB,
            hint: vB
          } = this.waypoint, kB = !(null !== BB && void 0 !== BB && BB.waypoint) || null !== BB.waypoint.popupToken && BB.waypoint.popupToken !== this.waypointOriginToken;
          IZ(IB, kB);
          let cB = 1;
          const nB = this.waypointLaunch;
          if (!kB && nB && BB.waypoint.nameKey === nB.nameKey) {
            const BB = performance.now();
            nB.startedAt ??= BB, cB = Math.min(1, Math.max(0, (BB - nB.startedAt - 450) / 1e3)), ZB.style.opacity = String(Math.min(1, (BB - nB.startedAt) / 150)), 1 === cB && (this.waypointLaunch = null)
          } else ZB.style.opacity = "", nB && null !== nB.startedAt && (this.waypointLaunch = null);
          if (IB.classList.toggle("Launching", cB < 1), null !== BB && void 0 !== BB && BB.waypoint) {
            const IB = this.waypointInset,
              kB = "quest_talk" === BB.waypoint.markerIcon ? function(BB, IB, ZB) {
                if (!BB.text || null === BB.blockHeight || 0 === BB.nearness) return BB;
                const TB = BB.blockHeight / 100 * ZB.height,
                  JB = -BB.nearness * (ZZ * TB + IB.width / 2),
                  oB = BB.nearness * (TZ * TB + IB.height / 2);
                return {
                  ...BB,
                  text: {
                    x: BB.text.x + JB / ZB.width * 100,
                    y: BB.text.y + oB / ZB.height * 100
                  }
                }
              }(BB.waypoint, this.waypointMarkerSize, this.viewport) : BB.waypoint,
              hB = (0, OI.e)(kB, IB, this.viewport),
              zB = cB * cB * (3 - 2 * cB),
              FB = cB < 1 ? nB.x + (hB.x - nB.x) * zB : hB.x,
              NB = cB < 1 ? nB.y + (hB.y - nB.y) * zB : hB.y;
            ZB.style.translate = `${FB}vw ${NB}vh`, TB.style.clipPath = `inset(${IB.top}px ${IB.x}px ${IB.bottom}px)`, IZ(JB, cB < 1 || !BB.waypoint.text), JB.style.opacity = String(1 - BB.waypoint.nearness), BB.waypoint.text && (JB.style.translate = `${BB.waypoint.text.x}vw ${BB.waypoint.text.y}vh`), oB.textContent !== BB.waypoint.name && (oB.textContent = BB.waypoint.name), this.markerIcon !== BB.waypoint.markerIcon && (this.markerIcon = BB.waypoint.markerIcon, ZB.replaceChildren(bI(this.markerIcon))), GB.textContent !== BB.waypoint.distance && (GB.textContent = BB.waypoint.distance), IZ(vB, null === BB.waypoint.hint), null !== BB.waypoint.hint && vB.textContent !== BB.waypoint.hint && (vB.textContent = BB.waypoint.hint)
          }
        }
      }
      dispose() {
        var BB, IB;
        this.mountWaypointOrigin(null), this.render(null), null === (BB = this.stopLayout) || void 0 === BB || BB.call(this), this.stopLayout = null, null === (IB = this.stopWaypoint) || void 0 === IB || IB.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.WN = !0
      }
    }

    function IZ(BB, IB) {
      BB.hidden !== IB && (BB.hidden = IB)
    }
    const ZZ = .55,
      TZ = .6;
    const JZ = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class oZ {
      constructor(BB, IB, ZB, TB) {
        this.map = BB, this.quests = IB, this.compass = ZB, this.display = new BZ, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.WN = !1, this.snapshot = null, this.texts = new Map, this.translate = TB
      }
      setTranslator(BB, IB) {
        this.translate = BB, this.locale = IB, this.metresFormat = new Intl.NumberFormat(IB), this.texts.clear()
      }
      translateCached(BB, IB) {
        const ZB = void 0 === IB ? BB : `${BB} ${IB}`;
        let TB = this.texts.get(ZB);
        return void 0 === TB && (this.texts.size >= 500 && this.texts.clear(), TB = this.translate(BB, void 0 === IB ? void 0 : {
          distance: IB
        }), this.texts.set(ZB, TB)), TB
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(BB, IB, ZB) {
        if (this.WN) return;
        if (!BB) return this.snapshot = null, void this.display.render(null);
        const TB = this.map.getSnapshot().map,
          kB = ZB.cameraHeading,
          cB = {
            ...this.display.compassSize,
            tanHalfFovX: ZB.tanHalfFovX,
            pitch: ZB.cameraPitch
          },
          nB = [];
        if (TB)
          for (const JB of this.compass.frame(BB, kB, IB)) {
            const BB = gB(JB.offset, cB);
            null !== BB && nB.push({
              ...JB,
              left: BB
            })
          }
        const hB = function(BB, IB) {
            const ZB = [],
              TB = BB => "quest" === BB.kind ? BB.distance - 1 : BB.distance,
              JB = [...BB].sort(((BB, IB) => TB(BB) - TB(IB) || BB.id.localeCompare(IB.id)));
            for (const oB of JB) {
              let BB = !1;
              if ("quest" !== oB.kind)
                for (const TB of ZB)
                  if (Math.abs(TB.left - oB.left) < IB) {
                    BB = !0;
                    break
                  } BB || ZB.push(oB)
            }
            return ZB
          }(nB, this.display.compassSpacing),
          zB = function(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              ZB = null;
            for (const TB of BB) Math.abs(TB.offset) <= IB && (!ZB || TB.distance < ZB.distance || TB.distance === ZB.distance && Math.abs(TB.offset) < Math.abs(ZB.offset)) && (ZB = TB);
            return ZB
          }(hB),
          FB = BB => {
            var IB;
            return null !== (IB = BB.displayName) && void 0 !== IB ? IB : this.translateCached(BB.nameKey)
          },
          NB = {
            compass: {
              markers: hB.map((BB => ({
                id: BB.id,
                icon: BB.icon,
                colour: BB.colour,
                name: FB(BB),
                left: BB.left
              }))),
              cardinals: GB.map((BB => {
                let {
                  name: IB,
                  bearing: ZB
                } = BB;
                const TB = gB(JB.e.computeShortestRotation(kB, ZB), cB);
                return {
                  name: IB,
                  left: null !== TB && void 0 !== TB ? TB : 0,
                  hidden: null === TB
                }
              })),
              label: zB ? `${FB(zB)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",QB(zB.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== TB && void 0 !== TB && TB.background) {
          const IB = BB[0] - TB.mapOrigin[0],
            ZB = BB[2] - TB.mapOrigin[2],
            {
              rotation: JB,
              transform: GB
            } = function(BB, IB, ZB, TB) {
              const [JB, GB] = vB(BB, IB, TB), kB = oB - ZB;
              return {
                rotation: kB,
                transform: `rotate(${kB}rad) translate(-${JB}%, -${GB}%)`
              }
            }(IB, ZB, kB, TB.background.bounds);
          NB.minimap = {
            transform: GB,
            iconRotation: -JB + "rad"
          };
          const [cB, nB] = vB(IB, ZB, TB.background.bounds);
          NB.player = {
            left: cB,
            top: nB,
            hidden: cB < 0 || nB < 0 || cB > 100 || nB > 100,
            rotation: -JB + "rad"
          }
        }
        const {
          waypoint: qB
        } = this.quests.getSnapshot();
        if ("search" === (null === qB || void 0 === qB ? void 0 : qB.questMarkerIcon) && null !== TB && void 0 !== TB && TB.background) {
          const {
            bounds: BB
          } = TB.background, [IB, ZB] = vB(qB.position[0] - TB.mapOrigin[0], qB.position[2] - TB.mapOrigin[2], BB);
          NB.searchArea = {
            left: IB,
            top: ZB,
            width: 6400 / (BB.mapMaxX - BB.mapMinX),
            height: 6400 / (BB.mapMaxZ - BB.mapMinZ),
            shapeSeed: qB.nameKey
          }
        }
        const yB = this.quests.getNotificationSnapshot(),
          UB = "completion" === (null === yB || void 0 === yB ? void 0 : yB.phase) && !wI(yB.kind);
        if (qB && !UB) {
          const IB = Math.hypot(...qB.position.map(((IB, ZB) => IB - BB[ZB]))),
            TB = Math.round(IB),
            JB = "talk" === qB.questMarkerIcon ? Math.min(1, Math.max(0, (10 - IB) / 5)) : 0,
            oB = ZB.projectWorldPosToViewport(qB.position),
            GB = oB && ZB.projectWorldPosToViewport([qB.position[0], qB.position[1] - 1, qB.position[2]]);
          NB.waypoint = {
            ...ZB.projectWorldPosToScreenPos(qB.position),
            text: oB,
            nearness: JB * JB * (3 - 2 * JB),
            blockHeight: oB && GB ? GB.y - oB.y : null,
            name: this.translateCached(qB.nameKey),
            nameKey: qB.nameKey,
            markerIcon: qB.questMarkerIcon ? JZ[qB.questMarkerIcon] : "quest",
            popupToken: (null === yB || void 0 === yB ? void 0 : yB.waypointNameKey) === qB.nameKey ? yB.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(TB)),
            hint: "search" === qB.questMarkerIcon && Math.hypot(qB.position[0] - BB[0], qB.position[2] - BB[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = NB, this.display.render(NB)
      }
      dispose() {
        this.WN = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const GZ = "skyblockSkillsView";
    class vZ extends hB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          ZB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB => BB,
          TB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          JB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => BB;
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = IB, this.translate = ZB, this.locale = TB, this.itemName = JB, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
          enabled: !1,
          open: !1,
          skills: [],
          detail: null,
          overallLevel: null,
          hud: null
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }
      }
      setTranslator(BB, IB, ZB) {
        this.translate = BB, this.locale = IB, this.itemName = ZB, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(BB) {
        let IB = this.skillText.get(BB);
        return IB || (IB = {
          label: this.translate(`skyblockGame:${BB}`),
          description: this.translate(`skyblockGame:${BB}Description`)
        }, this.skillText.set(BB, IB)), IB
      }
      sources(BB) {
        if ("mining" === BB || "fishing" === BB) return this.buildSources(BB);
        let IB = this.sourceText.get(BB);
        return IB || (IB = this.buildSources(BB), this.sourceText.set(BB, IB)), IB
      }
      buildSources(BB) {
        const IB = this.translate;
        return "exploration" === BB ? [IB("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), IB("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === BB ? [IB("skyblockGame:logSource", {
          xp: this.number(FI["Maple Log"])
        })] : "combat" === BB ? [IB("skyblockGame:creatureKillSource"), IB("skyblockGame:noEnvironmentalXp")] : "farming" === BB ? [IB("skyblockGame:cropSource", {
          xp: this.number(qI["Wheat|FreshlyGrown"])
        }), IB("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), IB("skyblockGame:noYoungCropXp")] : Object.entries("mining" === BB ? gI : yI).map((BB => {
          let [ZB, TB] = BB;
          return IB("skyblockGame:itemXpSource", {
            item: this.itemName(ZB),
            xp: this.number(TB)
          })
        }))
      }
      number(BB) {
        return BB.toLocaleString(this.locale)
      }
      benefit(BB, IB) {
        const ZB = GI(BB, IB);
        return this.translate(ZB.translationKey, {
          bonus: this.number(ZB.percent)
        })
      }
      sN(BB) {
        if (!this.WN) {
          if ("snapshot" === BB.kind) this.progress = BB.progress, this.pending.clear(), this.recent = null;
          else if ("award" === BB.kind && this.progress) {
            const {
              award: IB
            } = BB;
            this.progress = {
              ...this.progress,
              [IB.skill]: IB.after
            };
            for (const [BB, TB] of this.pending) TB.skill === IB.skill && this.pending.delete(BB);
            const ZB = IB.after.level > IB.before.level;
            this.recordGain(IB.skill, IB.amount, ZB ? ++this.nextLevelUpToken : null), ZB && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: IB.skill,
              beforeLevel: IB.before.level,
              level: IB.after.level
            })
          } else {
            if ("rejectBlock" === BB.kind) return void this.rejectBlock(BB.position);
            if ("open" === BB.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(BB, IB, ZB) {
        if (!this.progress || this.WN || ZB) return;
        const TB = function(BB, IB) {
          const ZB = BB.split("|")[0];
          return "Air" === IB || IB === `Barkless ${BB}` ? Object.hasOwn(FI, ZB) ? {
            skill: "foraging",
            amount: FI[ZB]
          } : "Air" !== IB ? null : Object.hasOwn(gI, BB) ? {
            skill: "mining",
            amount: gI[BB]
          } : nI(BB) ? {
            skill: "farming",
            amount: 10
          } : zI(BB) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(qI, BB) ? {
            skill: "farming",
            amount: qI[BB]
          } : Object.hasOwn(XB, BB) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(IB, "Air");
        if (!TB) return;
        const JB = BB.join(",");
        if (this.pending.has(JB)) return;
        const oB = this.predictedProgress(TB.skill).totalXp + TB.amount;
        Number.isSafeInteger(oB) && (this.pending.set(JB, {
          ...TB,
          expires: this.now() + 2e3
        }), this.recordGain(TB.skill, 0), this.emit())
      }
      rejectBlock(BB) {
        this.pending.delete(BB.join(",")) && this.emit()
      }
      Iz() {
        if (this.WN) return;
        let BB = !1;
        for (const [IB, ZB] of this.pending) ZB.expires <= this.now() && (this.pending.delete(IB), BB = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, BB = !0), BB && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(BB, IB) {
        var ZB, TB;
        let JB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const oB = (null === (ZB = this.recent) || void 0 === ZB ? void 0 : ZB.skill) === BB && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          GB = (null === (TB = this.recent) || void 0 === TB ? void 0 : TB.skill) === BB && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: BB,
          confirmed: oB + IB,
          expires: this.now() + 3e3,
          levelUpToken: null !== JB && void 0 !== JB ? JB : GB
        }
      }
      pendingXp(BB) {
        let IB = 0;
        for (const ZB of this.pending.values()) ZB.skill === BB && (IB += ZB.amount);
        return IB
      }
      predictedProgress(BB) {
        const IB = this.progress[BB],
          ZB = this.pendingXp(BB);
        return ZB ? kI(IB.totalXp + ZB, BB) : IB
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var BB, IB, ZB;
        const TB = this.progress ? DB.map((BB => {
            const IB = this.predictedProgress(BB);
            return {
              ...this.text(BB),
              icon: UI[BB],
              benefit: this.benefit(BB, IB.level),
              sources: this.sources(BB),
              id: BB,
              selected: BB === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(IB.level)
              }),
              xp: null === IB.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(IB.xpIntoLevel),
                target: this.number(IB.xpForNextLevel)
              }),
              percent: null === IB.xpForNextLevel ? 100 : Math.min(100, IB.xpIntoLevel / IB.xpForNextLevel * 100)
            }
          })) : [],
          JB = TB.find((BB => {
            var IB;
            return BB.id === (null === (IB = this.recent) || void 0 === IB ? void 0 : IB.skill)
          })),
          oB = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: TB,
          detail: null !== (BB = TB.find((BB => BB.selected))) && void 0 !== BB ? BB : null,
          overallLevel: this.progress ? DB.reduce(((BB, IB) => BB + this.predictedProgress(IB).level), 0) : null,
          hud: JB && oB > 0 ? {
            skill: JB,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(oB)
            }),
            levelUpToken: null !== (IB = null === (ZB = this.recent) || void 0 === ZB ? void 0 : ZB.levelUpToken) && void 0 !== IB ? IB : null,
            colour: dI(JB.id)
          } : null
        }
      }
    }
    const kZ = Math.max(1600, 600, 950) + 400,
      cZ = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      nZ = "skyblockQuestsView",
      hZ = "skyblockQuestNotificationView";
    class zZ extends hB {
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          GB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(BB, TB, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = IB, this.translate = ZB, this.now = JB, this.locale = oB, this.publishNotification = GB, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var BB, IB;
          this.selected = null !== (BB = null === (IB = this.authoritative) || void 0 === IB ? void 0 : IB.trackedQuestId) && void 0 !== BB ? BB : null, this.show()
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const BB = this.snapshot.detail;
          !this.WN && null !== BB && void 0 !== BB && BB.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(BB.id), this.emit())
        }, this.viewDialogue = () => {
          const BB = this.snapshot.detail;
          var IB;
          BB && (null === (IB = this.onViewDialogue) || void 0 === IB || IB.call(this, BB.id))
        }, this.notifications = new QI(JB, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var BB, IB;
        return null !== (BB = null === (IB = this.authoritative) || void 0 === IB ? void 0 : IB.trackedQuestId) && void 0 !== BB ? BB : null
      }
      notify(BB) {
        !this.WN && this.notifications.enqueue(BB) && this.emitNotification()
      }
      setNotificationsHeld(BB) {
        (this.notifications.setHeld(BB) || BB) && this.emitNotification()
      }
      Iz() {
        var BB, IB;
        if (this.WN) return;
        this.notifications.Iz() && this.emitNotification();
        let ZB = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, ZB = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, ZB = !0);
        const TB = FZ(this.authoritative);
        null !== TB && void 0 !== TB && null !== (BB = TB.questClock) && void 0 !== BB && BB.running && this.clockText(TB) !== (null === (IB = this.snapshot.tracked) || void 0 === IB ? void 0 : IB.clock) && (ZB = !0), ZB && this.emit()
      }
      setTranslator(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = BB, this.locale = IB, this.emitNotification(), this.emit()
      }
      sN(BB) {
        if (!this.WN)
          if ("completion" === BB.kind) this.notify(BB.questCompletion);
          else if ("landmark" === BB.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: BB.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === BB.kind) {
          var IB, ZB, TB;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: BB.npcNoteTitleKey,
            textKey: BB.npcNoteTextKey,
            params: null !== (IB = BB.npcNoteParams) && void 0 !== IB ? IB : {},
            nameKeys: null !== (ZB = BB.npcNoteNameKeys) && void 0 !== ZB ? ZB : {},
            iconItem: null !== (TB = BB.npcNoteIconItem) && void 0 !== TB ? TB : null
          })
        } else if ("open" === BB.kind) this.show();
        else if ("guidance" === BB.kind) this.waypoint = BB.waypoint, this.compassTarget = BB.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === BB.kind) {
          this.authoritative = BB.snapshot, this.notifications.Iz() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const IB = this.trackedStepPulse;
          this.updateTrackedStepPulse(BB.snapshot), this.emit(), this.trackedStepPulse > IB && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.WN || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var BB;
        return null !== (BB = this.translateWithIcons) && void 0 !== BB ? BB : this.translate
      }
      clockText(BB) {
        const IB = BB.questClock;
        if (!IB) return null;
        const ZB = IB.elapsedMs + (IB.running ? this.now() - this.receivedAt : 0);
        return void 0 === IB.countdownFromMs ? jB(ZB, !1) : jB(1e3 * Math.ceil(Math.max(0, IB.countdownFromMs - ZB) / 1e3), !1)
      }
      updateTrackedStepPulse(BB) {
        var IB, ZB, TB;
        const JB = FZ(BB);
        if (!JB) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const oB = BB => JB.subquests.filter((IB => BB(IB.status))).map((BB => BB.id)),
          GB = oB((BB => "completed" === BB || "skipped" === BB)),
          vB = oB((BB => "locked" !== BB)),
          kB = (null === (IB = this.trackedSteps) || void 0 === IB ? void 0 : IB.questId) === JB.id && JB.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (kB) {
          const BB = GB.filter((BB => !kB.finished.has(BB))),
            IB = oB((BB => "active" === BB || "ready" === BB)).filter((BB => !kB.unlocked.has(BB)));
          BB.length > 0 && this.trackedStepPulse++, (BB.length > 0 || IB.length > 0) && (this.trackedChange = {
            finished: new Set(BB),
            unlocked: new Set(IB),
            expiresAt: this.now() + kZ
          })
        } else {
          var cB;
          this.trackedStepPulse = (null === (cB = this.trackedSteps) || void 0 === cB ? void 0 : cB.questId) === JB.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: JB.id,
          progress: JB.progress,
          finished: new Set([...null !== (ZB = null === kB || void 0 === kB ? void 0 : kB.finished) && void 0 !== ZB ? ZB : [], ...GB]),
          unlocked: new Set([...null !== (TB = null === kB || void 0 === kB ? void 0 : kB.unlocked) && void 0 !== TB ? TB : [], ...vB])
        }
      }
      entry(BB, IB) {
        var ZB, TB;
        const JB = BB.id === (null === (ZB = this.authoritative) || void 0 === ZB ? void 0 : ZB.trackedQuestId),
          oB = this.now() < this.trackAvailableAt,
          GB = this.questTextTranslator(),
          vB = BB.subquests.map((IB => {
            var ZB, TB, oB, vB, kB, cB;
            const nB = null !== (ZB = IB.handInNpcName) && void 0 !== ZB ? ZB : BB.giverName,
              hB = this.translate("skyblockGame:progress", {
                current: IB.progress.toLocaleString(this.locale),
                target: IB.target.toLocaleString(this.locale)
              }),
              zB = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: nB ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [IB.status],
              FB = "active" === IB.status || "ready" === IB.status;
            return {
              id: IB.id,
              name: CI(GB, IB.nameKey, IB.nameParams),
              description: CI(GB, IB.descriptionKey, IB.descriptionParams),
              progress: hB,
              status: IB.status,
              statusLabel: zB ? this.translate(zB, {
                npc: nB
              }) : hB,
              iconItem: FB && null !== (TB = IB.questIconItem) && void 0 !== TB ? TB : null,
              barPercent: "active" === IB.status && IB.showsProgressBar ? Math.min(100, 100 * IB.progress / IB.target) : null,
              justFinished: JB && null !== (oB = null === (vB = this.trackedChange) || void 0 === vB ? void 0 : vB.finished.has(IB.id)) && void 0 !== oB && oB,
              justUnlocked: JB && null !== (kB = null === (cB = this.trackedChange) || void 0 === cB ? void 0 : cB.unlocked.has(IB.id)) && void 0 !== kB && kB
            }
          }));
        return {
          id: BB.id,
          name: CI(GB, BB.nameKey, BB.nameParams),
          description: CI(GB, BB.descriptionKey, BB.descriptionParams),
          progress: IB ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: BB.progress.toLocaleString(this.locale),
            target: BB.target.toLocaleString(this.locale)
          }),
          completed: IB,
          tracked: JB,
          selected: BB.id === this.selected,
          canTrack: !IB && !JB && !oB,
          trackLabel: this.translate(JB ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : oB ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== BB.id,
          subquests: vB,
          focusStep: null !== (TB = vB.find((BB => null !== BB.barPercent))) && void 0 !== TB ? TB : null,
          clock: this.clockText(BB)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB;
        const nB = [...null !== (BB = null === (IB = this.authoritative) || void 0 === IB ? void 0 : IB.active) && void 0 !== BB ? BB : [], ...null !== (ZB = null === (TB = this.authoritative) || void 0 === TB ? void 0 : TB.completed) && void 0 !== ZB ? ZB : []];
        var hB, zB, FB, NB;
        nB.some((BB => BB.id === this.selected)) || (this.selected = null !== (hB = null !== (zB = null === (FB = this.authoritative) || void 0 === FB ? void 0 : FB.trackedQuestId) && void 0 !== zB ? zB : null === (NB = nB[0]) || void 0 === NB ? void 0 : NB.id) && void 0 !== hB ? hB : null);
        const gB = null !== (JB = null === (oB = this.authoritative) || void 0 === oB ? void 0 : oB.active.map((BB => this.entry(BB, !1)))) && void 0 !== JB ? JB : [];
        gB.sort(((BB, IB) => Number(IB.tracked) - Number(BB.tracked)));
        const qB = null !== (GB = null === (vB = this.authoritative) || void 0 === vB ? void 0 : vB.completed.map((BB => this.entry(BB, !0)))) && void 0 !== GB ? GB : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: gB,
          completed: qB,
          completedExpanded: this.completedExpanded,
          detail: null !== (kB = [...gB, ...qB].find((BB => BB.selected))) && void 0 !== kB ? kB : null,
          tracked: null !== (cB = gB.find((BB => BB.tracked))) && void 0 !== cB ? cB : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function FZ(BB) {
      var IB;
      return null !== (IB = null === BB || void 0 === BB ? void 0 : BB.active.find((IB => IB.id === BB.trackedQuestId))) && void 0 !== IB ? IB : null
    }
    const NZ = "skyblockDungeonsView";
    class gZ extends hB {
      constructor(BB, IB) {
        let ZB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          TB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = IB, this.locale = ZB, this.requestEnter = TB, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          dungeons: [],
          detail: null,
          picker: null
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }, this.previous = () => {
          this.turnTo(this.pageIndex - 1)
        }, this.next = () => {
          this.turnTo(this.pageIndex + 1)
        }, this.enter = () => {
          const BB = this.pickerEntry(),
            IB = null === BB || void 0 === BB ? void 0 : BB.difficulties[this.pageIndex];
          void 0 !== IB && null !== IB.unlockedBoss && (this.close(), this.requestEnter(BB.id, IB.difficulty))
        }
      }
      setTranslator(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = BB, this.locale = IB, this.emit()
      }
      sN(BB) {
        var IB, ZB;
        if (!this.WN) return "open" === BB.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== BB.kind ? "snapshot" === BB.kind && (this.authoritative = BB.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (IB = null === (ZB = this.pickerEntry()) || void 0 === ZB ? void 0 : ZB.difficulties.length) && void 0 !== IB ? IB : 1) - 1)), null === BB.snapshot && this.open ? this.close() : this.emit()) : this.choose(BB.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(BB) {
        var IB;
        const ZB = null === (IB = this.authoritative) || void 0 === IB ? void 0 : IB.dungeons.find((IB => IB.id === BB));
        void 0 !== ZB ? this.open && this.pickerDungeonId === BB || (this.pickerDungeonId = BB, this.pageIndex = Math.max(0, ZB.difficulties.findLastIndex((BB => null !== BB.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${BB}`)
      }
      turnTo(BB) {
        var IB, ZB;
        const TB = null !== (IB = null === (ZB = this.pickerEntry()) || void 0 === ZB ? void 0 : ZB.difficulties.length) && void 0 !== IB ? IB : 0;
        BB < 0 || BB >= TB || BB === this.pageIndex || (this.pageIndex = BB, this.emit())
      }
      pickerEntry() {
        var BB, IB;
        return null !== (BB = null === (IB = this.authoritative) || void 0 === IB ? void 0 : IB.dungeons.find((BB => BB.id === this.pickerDungeonId))) && void 0 !== BB ? BB : null
      }
      difficulty(BB) {
        const IB = BB.completions > 0,
          ZB = null === BB.bestMs ? null : jB(BB.bestMs);
        return {
          difficulty: BB.difficulty,
          label: this.translate(HB[BB.difficulty]),
          colour: MB[BB.difficulty],
          beaten: IB,
          bestTime: ZB,
          completions: BB.completions,
          summary: IB ? [null === ZB ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: ZB
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: BB.completions.toLocaleString(this.locale)
          })].filter((BB => null !== BB)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(BB) {
        const IB = BB.difficulties.map((BB => this.difficulty(BB))),
          ZB = IB.filter((BB => BB.beaten)).length;
        return {
          id: BB.id,
          name: this.translate(BB.nameKey),
          selected: BB.id === this.selected,
          beatenSummary: `${ZB} / ${IB.length}`,
          difficulties: IB
        }
      }
      picker() {
        const BB = this.pickerEntry();
        if (null === BB || 0 === BB.difficulties.length) return null;
        const IB = BB.difficulties.map(((IB, ZB) => {
          var TB, JB, oB, GB;
          const vB = IB.unlockedBoss,
            kB = null === vB ? this.lockedHint(BB, ZB) : null;
          return {
            ...this.difficulty(IB),
            unlocked: null !== vB,
            bossName: null === vB ? null : this.translate(vB.bossNameKey),
            bossMobType: null !== (TB = null === vB || void 0 === vB ? void 0 : vB.bossMobType) && void 0 !== TB ? TB : null,
            bossMobVariation: null !== (JB = null === vB || void 0 === vB ? void 0 : vB.bossMobVariation) && void 0 !== JB ? JB : null,
            lockedHint: null !== (oB = null === kB || void 0 === kB ? void 0 : kB.text) && void 0 !== oB ? oB : null,
            lockedHintHighlight: null !== (GB = null === kB || void 0 === kB ? void 0 : kB.highlight) && void 0 !== GB ? GB : null,
            current: ZB === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(BB.nameKey),
          pages: IB,
          page: IB[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < IB.length - 1
        }
      }
      lockedHint(BB, IB) {
        var ZB, TB, JB;
        if (0 === IB && "number" === typeof BB.combatLevelLock) {
          const IB = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: BB.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: IB,
            colour: dI("combat"),
            icon: UI.combat
          })
        }
        const oB = null !== (ZB = null === (TB = this.authoritative) || void 0 === TB ? void 0 : TB.dungeons) && void 0 !== ZB ? ZB : [],
          GB = IB > 0 ? BB : null !== (JB = oB[oB.indexOf(BB) - 1]) && void 0 !== JB ? JB : null,
          vB = IB > 0 ? BB.difficulties[IB - 1] : null === GB || void 0 === GB ? void 0 : GB.difficulties[0];
        if (null === GB || void 0 === vB) return null;
        const kB = this.translate(GB.nameKey);
        if (null === vB.unlockedBoss) return GB === BB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, vB.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: kB
        }, vB.difficulty);
        const cB = this.translate(vB.unlockedBoss.bossNameKey);
        return GB === BB ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: cB
        }, vB.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: cB,
            dungeon: kB
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(BB, IB, ZB) {
        return this.hintHighlighting(BB, IB, "difficulty", {
          name: this.translate(HB[ZB]),
          colour: MB[ZB],
          icon: null
        })
      }
      hintHighlighting(BB, IB, ZB, TB) {
        let {
          name: JB,
          colour: oB,
          icon: GB
        } = TB;
        const vB = this.translate(BB, {
          ...IB,
          [ZB]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(BB, {
            ...IB,
            [ZB]: JB
          }),
          highlight: 2 === vB.length ? {
            before: vB[0],
            name: JB,
            after: vB[1],
            colour: oB,
            icon: GB
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var BB, IB, ZB;
        const TB = null !== (BB = null === (IB = this.authoritative) || void 0 === IB ? void 0 : IB.dungeons) && void 0 !== BB ? BB : [];
        var JB, oB;
        TB.some((BB => BB.id === this.selected)) || (this.selected = null !== (JB = null === (oB = TB[0]) || void 0 === oB ? void 0 : oB.id) && void 0 !== JB ? JB : null);
        const GB = TB.map((BB => this.entry(BB)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: GB,
          detail: null !== (ZB = GB.find((BB => BB.selected))) && void 0 !== ZB ? ZB : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const qZ = ["mining", "farming", "foraging", "fishing", "combat"],
      yZ = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      UZ = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function WZ() {
      for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
      return IB.map(((BB, IB) => ({
        amount: BB,
        coins: yZ[IB],
        xp: UZ[IB]
      })))
    }
    const dZ = WZ(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      CZ = WZ(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      QZ = WZ(50, 100, 250, 500, 1e3, 2500, 5e3),
      sZ = WZ(25, 50, 100, 250, 500, 1e3),
      wZ = WZ(10, 25, 50, 100, 250, 500, 1e3),
      OZ = WZ(1, 5, 10, 25, 50);

    function YZ(BB, IB) {
      return {
        id: BB,
        category: "fishing",
        item: IB,
        drops: [IB],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wZ
      }
    }
    const iZ = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: CZ
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: QZ
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: QZ
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: sZ
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: sZ
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: CZ
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: dZ
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: dZ
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: dZ
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: QZ
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: CZ
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: CZ
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: CZ
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: QZ
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: QZ
      }, YZ("wheatfish", "Wheatfish"), YZ("darter", "Darter"), YZ("sunset_minnow", "Sunset Minnow"), YZ("root_flounder", "Root Flounder"), YZ("greenfin_loach", "Greenfin Loach"), YZ("red_strongfish", "Red Strongfish"), YZ("green_strongfish", "Green Strongfish"), YZ("boomerang_fish", "Boomerang Fish"), YZ("seahorse", "Seahorse"), YZ("spined_stickleback", "Spined Stickleback"), YZ("moon_strongfish", "Moon Strongfish"), YZ("boulder_bass", "Boulder Bass"), YZ("grass_snapper", "Grass Snapper"), YZ("crystal_wheatfish", "Crystalized Wheatfish", OZ), YZ("moonstone_pupfish", "Moonstone Pupfish", OZ), YZ("reedglass_minnow", "Reedglass Minnow"), YZ("mangrove_herring", "Mangrove Herring"), YZ("mudline_perch", "Mudline Perch"), YZ("coastal_mullet", "Coastal Mullet"), YZ("reef_sardine", "Reef Sardine"), YZ("root_perch", "Root Perch"), YZ("driftwood_catfish", "Driftwood Catfish"), YZ("aether_minnow", "Aether Minnow"), YZ("needlefish", "Tri-Pointed Needlefish"), YZ("threadfin_bream", "Threadfin Bream"), YZ("mudbelly_tilapia", "Mudbelly Tilapia"), YZ("rotslab_eel", "Rotslab Eel"), YZ("polarflash_electron", "Polarflash Electron"), YZ("mireback_carp", "Mireback Carp"), YZ("blackwater_bream", "Blackwater Bream"), YZ("stone_grouper", "Stone Grouper"), YZ("shadeback_ray", "Shadeback Ray"), YZ("glacial_silverfish", "Glacial Silverfish"), YZ("hatchetfish", "Hatchetfish"), YZ("moonlit_boomerang", "Moonlit Boomerang Fish"), YZ("murkborne_ray", "Murkborne Ray"), YZ("bamboo_catfish", "Bamboo Catfish"), YZ("mossback_arapaima", "Mossback Arapaima"), YZ("murk_stingray", "Murk Stingray"), YZ("channel_sawfish", "Channel Sawfish"), YZ("boned_sturgeon", "Boned Sturgeon"), YZ("oarfish", "Oarfish"), YZ("snakehead", "Snakehead", OZ), YZ("eldertide_leviathan", "Eldertide Leviathan", OZ), YZ("pithead", "Pithead"), YZ("electric_eel", "Electric Eel"), YZ("shadow_darter", "Shadow Darter"), YZ("abyss_carp", "Abyss Carp"), YZ("nomai_moray", "Nomai Moray"), YZ("silver_dragonfish", "Silver Dragonfish"), YZ("giant_moray", "Giant Moray"), YZ("coelacanth", "Coelacanth", OZ), YZ("frost_herring", "Frost Herring"), YZ("permafrost_halibut", "Permafrost Halibut"), YZ("glacial_lanternfish", "Glacial Lanternfish"), YZ("frozen_grenadier", "Frozen Grenadier"), YZ("blackfin_icefish", "Blackfin Icefish"), YZ("moonfish", "Moonfish"), YZ("alpha_strongfish", "Alpha Moon Strongfish"), YZ("deep_lanternfish", "Deepwater Lanternfish", OZ), YZ("pearlescent_moonfish", "Pearlescent Moonfish", OZ), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: CZ
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: sZ
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: sZ
      }],
      pZ = (new Map(iZ.map((BB => [BB.id, BB]))), new Map),
      aZ = new Map;
    for (const hk of iZ) {
      for (const [BB, IB] of Object.entries(null !== (HZ = hk.blocks) && void 0 !== HZ ? HZ : {})) {
        var HZ;
        pZ.set(BB, {
          collection: hk,
          amount: IB
        })
      }
      for (const BB of null !== (MZ = hk.drops) && void 0 !== MZ ? MZ : []) {
        var MZ;
        aZ.set(BB, hk)
      }
    }

    function jZ(BB, IB) {
      let ZB = 0;
      for (; ZB < BB.tiers.length && IB >= BB.tiers[ZB].amount;) ZB++;
      return ZB
    }
    const PZ = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function RZ(BB) {
      return PZ[BB - 1]
    }
    const rZ = "skyblockCollectionsView";
    class mZ extends hB {
      constructor(BB, IB) {
        let ZB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          TB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => BB;
        super(BB, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = IB, this.locale = ZB, this.itemName = TB, this.counts = null, this.category = "mining", this.selected = iZ[0].id, this.snapshot = {
          enabled: !1,
          open: !1,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        }, this.selectCategory = BB => {
          this.category = BB, this.selected = this.inCategory(BB)[0].id, this.emit()
        }, this.select = BB => {
          this.selected = BB, this.emit()
        }
      }
      setTranslator(BB, IB, ZB) {
        this.translate = BB, this.locale = IB, this.itemName = ZB, this.emit()
      }
      sN(BB) {
        if (!this.WN)
          if ("collOpen" !== BB.kind) {
            (BB.collFull || null === this.counts) && (this.counts = new Map);
            for (const [IB, ZB] of BB.collCounts) this.counts.set(IB, ZB);
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
        var BB;
        if (null === this.counts) return {
          enabled: !1,
          open: this.open,
          categories: [],
          collections: [],
          detail: null,
          tiersUnlocked: ""
        };
        const IB = this.inCategory(this.category).map((BB => this.collectionView(BB))),
          ZB = iZ.reduce(((BB, IB) => BB + this.tierOf(IB)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: qZ.map((BB => this.categoryView(BB))),
          collections: IB,
          detail: null !== (BB = IB.find((BB => BB.selected))) && void 0 !== BB ? BB : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(ZB)
          })
        }
      }
      categoryView(BB) {
        const IB = this.inCategory(BB),
          ZB = IB.reduce(((BB, IB) => BB + this.tierOf(IB)), 0),
          TB = IB.reduce(((BB, IB) => BB + IB.tiers.length), 0);
        return {
          id: BB,
          label: this.translate(`skyblockGame:${BB}`),
          icon: UI[BB],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(ZB),
            target: this.number(TB)
          }),
          selected: BB === this.category
        }
      }
      collectionView(BB) {
        var IB, ZB;
        const TB = null !== (IB = this.counts.get(BB.id)) && void 0 !== IB ? IB : 0,
          JB = jZ(BB, TB),
          oB = null !== (ZB = BB.tiers[JB]) && void 0 !== ZB ? ZB : null,
          GB = 0 === JB ? 0 : BB.tiers[JB - 1].amount;
        return {
          id: BB.id,
          name: this.itemName(BB.item),
          icon: BB.item,
          selected: BB.id === this.selected,
          locked: 0 === TB,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(TB)
          }),
          tier: 0 === JB ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(JB),
          percent: null === oB ? 100 : Math.min(100, (TB - GB) / (oB.amount - GB) * 100),
          progress: null === oB ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(TB),
            target: this.number(oB.amount)
          }),
          nextReward: null === oB ? null : this.reward(BB, oB.coins, oB.xp)
        }
      }
      reward(BB, IB, ZB) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(IB),
          xp: this.number(ZB),
          skill: this.translate(`skyblockGame:${BB.category}`)
        })
      }
      tierLabel(BB) {
        return this.translate("skyblockGame:collectionTier", {
          tier: RZ(BB)
        })
      }
      tierOf(BB) {
        var IB;
        return jZ(BB, null !== (IB = this.counts.get(BB.id)) && void 0 !== IB ? IB : 0)
      }
      inCategory(BB) {
        return iZ.filter((IB => IB.category === BB))
      }
      number(BB) {
        return BB.toLocaleString(this.locale)
      }
    }
    const XZ = "skyblockPortalTransitView",
      LZ = "skyblockPortalArrival";
    class eZ {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.Gq = BB, this.storage = IB, this.now = ZB, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      sN(BB) {
        const IB = {
          zoneNameKey: BB.transitZoneNameKey,
          variation: BB.transitZoneVariation,
          colour: BB.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(LZ, IB), this.show("departure", IB.zoneNameKey, IB.colour, BB.transitDurationMs, BB.transitDurationMs + 1500, (() => {
          this.storage.removeItem(LZ)
        }))
      }
      resumeArrival(BB) {
        const IB = this.storage.getItem(LZ);
        this.storage.removeItem(LZ), null === IB || IB.variation !== BB || this.now() - IB.departedAt > 3e4 || this.show("arrival", IB.zoneNameKey, IB.colour, 3200, 2e4)
      }
      finishArrival(BB) {
        var IB;
        "arrival" === (null === (IB = this.view) || void 0 === IB ? void 0 : IB.phase) && this.view.token === BB && (this.clearTimer(), this.view = null, this.Gq(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(BB, IB, ZB, TB, JB, oB) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: BB,
          zoneNameKey: IB,
          colour: ZB,
          durationMs: TB
        }, this.Gq(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.Gq(null), null === oB || void 0 === oB || oB()
        }), JB)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const uZ = "skyblockDailyRewardView",
      fZ = "skyblockDailyRewardCoin";
    class lZ {
      constructor(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          kB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.Gq = BB, this.isBusy = IB, this.holdQuestPopups = ZB, this.onHeldCoinsChanged = TB, this.onCoinLanded = JB, this.onStarted = oB, this.onFinished = GB, this.onItemLanded = vB, this.now = kB, this.sv = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var BB, IB;
        return null !== (BB = null === (IB = this.playing) || void 0 === IB ? void 0 : IB.view) && void 0 !== BB ? BB : null
      }
      getHeldCoins() {
        var BB, IB;
        let ZB = 0;
        for (const TB of this.sv) ZB += TB.coins;
        return ZB - (null !== (BB = null === (IB = this.playing) || void 0 === IB ? void 0 : IB.released) && void 0 !== BB ? BB : 0)
      }
      sN(BB) {
        "dailyRewardClaimed" !== BB.kind ? (this.queue.push(BB), this.Iz()) : this.sv.push({
          coins: BB.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Iz() {
        const BB = this.now();
        if (null === this.playing) return this.releaseUnshown(BB), void this.startNext(BB);
        const IB = this.playing,
          ZB = BB - IB.startedAt,
          TB = IB.view.flyingCoins,
          JB = function(BB, IB) {
            let ZB = 0;
            for (; ZB < IB && tZ(ZB, IB) <= BB;) ZB++;
            return ZB
          }(ZB, TB);
        if (JB !== IB.landed) {
          for (let BB = JB - IB.landed > 2 ? JB - 1 : IB.landed; BB < JB; BB++) this.onCoinLanded(BB, TB);
          IB.landed = JB, IB.released = Math.round(IB.view.coins * JB / TB), this.onHeldCoinsChanged()
        }
        for (; IB.itemsLanded < IB.view.items.length && 2e3 + 160 * IB.itemsLanded + 630 <= ZB;) this.onItemLanded(IB.itemsLanded), IB.itemsLanded++;
        ZB >= IB.view.durationMs && (this.finish(), this.startNext(BB))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.sv = [], this.Gq(null)
      }
      startNext(BB) {
        if (0 === this.queue.length || this.isBusy()) return;
        const IB = this.queue.shift();
        this.token++;
        const ZB = {
          token: this.token,
          day: IB.dailyRewardDay,
          coins: IB.dailyRewardCoins,
          items: IB.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: IB.dailyRewardDay === iB ? 24 : 14
        };
        this.playing = {
          view: ZB,
          startedAt: BB,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.Gq(ZB), this.onStarted(ZB)
      }
      finish() {
        this.sv.shift(), this.playing = null, this.holdQuestPopups(!1), this.Gq(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(BB) {
        if (this.queue.length > 0 || 0 === this.sv.length) return;
        const IB = this.sv.length;
        this.sv = this.sv.filter((IB => BB - IB.receivedAt < 6e4)), this.sv.length !== IB && this.onHeldCoinsChanged()
      }
    }

    function AZ(BB, IB) {
      return 450 + 715 * BB / (IB - 1)
    }

    function tZ(BB, IB) {
      return AZ(BB, IB) + 650
    }
    const bZ = "skyblockMailboxView";
    class xZ {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.Gq = BB, this.isBusy = IB, this.onStarted = ZB, this.now = TB, this.waiting = [], this.playing = null, this.token = 0, this.itemName = BB => BB
      }
      getSnapshot() {
        var BB, IB;
        return null !== (BB = null === (IB = this.playing) || void 0 === IB ? void 0 : IB.view) && void 0 !== BB ? BB : null
      }
      setItemName(BB) {
        this.itemName = BB
      }
      sN(BB) {
        this.waiting.push(...BB.mailLetters), this.Iz()
      }
      Iz() {
        const BB = this.now();
        null !== this.playing && BB - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.Gq(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(BB)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.Gq(null)
      }
      start(BB) {
        const IB = this.waiting.slice(0, 3);
        this.token++;
        const ZB = {
          token: this.token,
          letters: IB.map((BB => this.toView(BB))),
          more: this.waiting.length - IB.length,
          durationMs: 4500 + 700 * IB.length
        };
        this.waiting = [], this.playing = {
          view: ZB,
          startedAt: BB
        }, this.Gq(ZB), this.onStarted(ZB)
      }
      toView(BB) {
        return {
          coins: BB.mailCoins,
          items: BB.mailItems.map((BB => {
            var IB;
            return {
              itemName: BB.mailItemName,
              amount: BB.mailItemAmount,
              label: null !== (IB = BB.mailItemLabel) && void 0 !== IB ? IB : this.itemName(BB.mailItemName)
            }
          })),
          reasonKey: BB.mailReasonKey,
          reasonParams: BB.mailReasonParams
        }
      }
    }
    const EZ = "skyblockQuestGraphView",
      DZ = "skyblockDevQuestJump";

    function KZ(BB) {
      if (0 === BB.length) return "";
      const IB = [`M ${BB[0].x} ${BB[0].y}`];
      for (let TB = 1; TB < BB.length - 1; TB++) {
        const ZB = BB[TB + 1];
        IB.push(`Q ${BB[TB].x} ${BB[TB].y} ${(BB[TB].x+ZB.x)/2} ${(BB[TB].y+ZB.y)/2}`)
      }
      const ZB = BB[BB.length - 1];
      return IB.push(`L ${ZB.x} ${ZB.y}`), IB.join(" ")
    }

    function VZ(BB, IB) {
      return BB < IB ? `${BB}|${IB}` : `${IB}|${BB}`
    }
    class SZ extends hB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(BB, ZB, TB), this.translate = IB, this.requestJump = JB, this.requestArrive = oB, this.storage = GB, this.now = vB, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
          enabled: !1,
          open: !1,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        }, this.hover = BB => {
          BB !== this.hoveredId && (this.hoveredId = BB, this.emit())
        }, this.jump = BB => {
          this.close(), this.requestJump(BB)
        }
      }
      sN(BB) {
        if (!this.WN)
          if ("graph" !== BB.kind) {
            if ("jumping" === BB.kind) {
              const IB = {
                questId: BB.graphQuestId,
                variation: BB.graphVariation,
                completes: BB.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(DZ, IB)
            }
          } else {
            const IB = ++this.graphCount;
            ZB.e(120).then((() => ZB(6591))).then((ZB => {
              let {
                default: TB
              } = ZB;
              this.WN || IB !== this.graphCount || (this.layout = function(BB, IB, ZB) {
                var TB, JB;
                const oB = new BB.graphlib.Graph;
                oB.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), oB.setDefaultEdgeLabel((() => ({})));
                const GB = new Set;
                for (const nB of IB) GB.add(nB.graphQuestId), oB.setNode(nB.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const vB = ZB.filter((BB => GB.has(BB.graphFromId) && GB.has(BB.graphToId) && BB.graphFromId !== BB.graphToId)),
                  kB = new Map;
                for (const nB of [...vB].sort(((BB, IB) => Number("awaits" === BB.graphEdgeKind) - Number("awaits" === IB.graphEdgeKind)))) {
                  const BB = VZ(nB.graphFromId, nB.graphToId);
                  kB.has(BB) || (kB.set(BB, nB), oB.setEdge(nB.graphFromId, nB.graphToId))
                }
                BB.layout(oB);
                const cB = oB.graph();
                return {
                  width: Math.ceil(null !== (TB = cB.width) && void 0 !== TB ? TB : 0),
                  height: Math.ceil(null !== (JB = cB.height) && void 0 !== JB ? JB : 0),
                  nodes: IB.map((BB => {
                    var IB, ZB;
                    const TB = oB.node(BB.graphQuestId);
                    return {
                      node: BB,
                      left: (null !== (IB = TB.x) && void 0 !== IB ? IB : 0) - 95,
                      top: (null !== (ZB = TB.y) && void 0 !== ZB ? ZB : 0) - 26
                    }
                  })),
                  edges: vB.map((BB => {
                    var IB;
                    const ZB = kB.get(VZ(BB.graphFromId, BB.graphToId)),
                      TB = null !== (IB = oB.edge(ZB.graphFromId, ZB.graphToId).points) && void 0 !== IB ? IB : [];
                    return {
                      edge: BB,
                      key: `${BB.graphFromId}|${BB.graphToId}|${BB.graphEdgeKind}`,
                      path: KZ(ZB.graphFromId === BB.graphFromId ? TB : [...TB].reverse())
                    }
                  })),
                  plans: new Map(IB.map((BB => [BB.graphQuestId, new Set([BB.graphQuestId, ...BB.graphPlanIds])])))
                }
              }(TB, BB.graphNodes, BB.graphEdges), this.show())
            })).catch((BB => {
              console.error("The quest graph could not be laid out", BB)
            }))
          }
      }
      resumeJump(BB) {
        const IB = this.storage.getItem(DZ);
        this.storage.removeItem(DZ), null === IB || IB.variation !== BB || this.now() - IB.departedAt > 6e4 || this.requestArrive(IB.questId, IB.completes)
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
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
        var BB, IB;
        return null !== (BB = null === this.hoveredId || null === (IB = this.layout) || void 0 === IB ? void 0 : IB.plans.get(this.hoveredId)) && void 0 !== BB ? BB : new Set
      }
      buildSnapshot() {
        const BB = this.layout;
        if (null === BB) return {
          enabled: !1,
          open: this.open,
          width: 0,
          height: 0,
          nodes: [],
          edges: [],
          planning: !1
        };
        const IB = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: BB.width,
          height: BB.height,
          nodes: BB.nodes.map((BB => {
            let {
              node: ZB,
              left: TB,
              top: JB
            } = BB;
            return {
              id: ZB.graphQuestId,
              name: this.translate(ZB.graphNameKey),
              detail: null === ZB.graphGiverName ? ZB.graphZoneId : `${ZB.graphGiverName} \xb7 ${ZB.graphZoneId}`,
              state: ZB.graphState,
              left: TB,
              top: JB,
              inPlan: IB.has(ZB.graphQuestId),
              hovered: ZB.graphQuestId === this.hoveredId
            }
          })),
          edges: BB.edges.map((BB => {
            let {
              edge: ZB,
              key: TB,
              path: JB
            } = BB;
            return {
              key: TB,
              kind: ZB.graphEdgeKind,
              path: JB,
              inPlan: IB.has(ZB.graphFromId) && IB.has(ZB.graphToId)
            }
          })),
          planning: IB.size > 0
        }
      }
    }
    var BT = ZB(37086);
    const IT = 250,
      ZT = 2150,
      TT = -2.8,
      JT = 2.2,
      oT = -27,
      GT = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      vT = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      kT = Math.round(50 + 1e3 * (vT.delay + vT.period / 2)),
      cT = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      nT = Array.from({
        length: 26
      }, ((BB, IB) => {
        const ZB = 2.39996 * IB,
          TB = .5 + .618034 * IB % 1 * .23,
          JB = IB % 3 !== 2;
        return {
          rune: JB ? cT[7 * IB % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(ZB)*TB).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(ZB)*TB).toFixed(3)})`,
            "--spin": 40 * (IB % 5 - 2) + "deg",
            "--size": (JB ? 1 + IB % 4 * .2 : .3 + IB % 2 * .15) + "rem",
            "--duration": `${(1.8+7*IB%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*IB%3).toFixed(2)}s`
          }
        }
      }));

    function hT(BB, IB) {
      return Array.from({
        length: 30 + 3 * BB + (IB ? 10 : 0)
      }, ((BB, IB) => {
        const ZB = IB < 4,
          TB = ZB ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          JB = ZB ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          oB = ZB ? 2.2 : .6 + Math.random(),
          GB = ZB ? .3 : Math.random() < .5 ? .16 : .24,
          vB = ZB ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": TB,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${JB.toFixed(2)}rem`,
          "--length": `${oB.toFixed(2)}rem`,
          "--width": `${GB}rem`,
          "--duration": `${Math.round(vB)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function zT(BB) {
      let {
        zeta: IB,
        period: ZB
      } = BB;
      const TB = 2 * Math.PI / ZB;
      return {
        w: TB,
        decay: IB * TB / Math.sqrt(1 - IB * IB)
      }
    }
    let FT = !1;

    function NT() {
      if (FT) return;
      FT = !0;
      const BB = document.createElement("style");
      BB.textContent = function() {
        const BB = zT(GT),
          IB = zT(vT),
          ZB = IB => Math.exp(-BB.decay * IB) * Math.sin(BB.w * IB),
          TB = ZB(Math.atan(BB.w / BB.decay) / BB.w),
          JB = .25,
          oB = 2.15,
          GB = Math.round(215),
          vB = [];
        for (let kB = 0; kB <= GB; kB++) {
          const BB = kB / GB * oB;
          let cB = Math.sin(Math.min(BB, JB) / JB * Math.PI / 2) ** 2,
            nB = 0,
            hB = 1,
            zB = 1 - .2 * cB,
            FB = 1;
          if (BB >= JB) {
            const GB = BB - JB,
              vB = Math.max(0, GB - .05);
            cB = Math.exp(-vB / .05), nB = ZB(vB + GT.lead * (1 - Math.exp(-vB / GT.rush))) / TB;
            const kB = vB - vT.delay,
              NB = kB <= 0 ? 0 : 1 - Math.exp(-IB.decay * kB) * (Math.cos(IB.w * kB) + IB.decay / IB.w * Math.sin(IB.w * kB)),
              gB = Math.max(0, (BB - 1.77) / (oB - 1.77));
            hB = (1 + (vT.to - 1) * NB) * (1 + .08 * gB), zB = 1.1 + 1.5 * Math.exp(-GB / .07) + .3 * Math.exp(-(((1e3 * GB - kT) / 100) ** 2)) + .8 * gB, FB = 1 - gB ** 1.5
          }
          const NB = .15 * cB + TT * nB,
            gB = -.1 * cB + JT * nB,
            qB = 3 * cB + oT * nB;
          vB.push(`${(kB/GB*100).toFixed(3)}% { opacity: ${FB.toFixed(3)}; transform: translate(${NB.toFixed(3)}rem, ${gB.toFixed(3)}rem) rotate(${qB.toFixed(2)}deg) scale(${hB.toFixed(3)}); filter: brightness(${zB.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${vB.join(" ")} }`
      }(), document.head.append(BB)
    }
    const gT = "skyblockForgeView",
      qT = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class yT extends hB {
      constructor(BB, IB, ZB, TB, JB) {
        super(BB, ZB, TB), this.translate = IB, this.requestForge = JB, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (BB, IB) => {
          var ZB, TB;
          null !== this.forging || (null !== (ZB = this.owned[(0, BT.o)(IB, BB)]) && void 0 !== ZB ? ZB : 0) <= 0 || (this.selected[BB] = this.selected[BB] === IB ? null : IB, this.status = null, null === (TB = this.onPartSelected) || void 0 === TB || TB.call(this), this.emit())
        }, this.forge = BB => {
          var IB, ZB;
          const TB = this.selectedParts();
          if (null === TB || this.isPending() || !this.open) return;
          const JB = (0, BT.k)(TB);
          if (null === JB || JB.coalCost > this.coal) return;
          const oB = this.preview(JB),
            GB = null !== (IB = null === (ZB = this.onForgeStarted) || void 0 === ZB ? void 0 : ZB.call(this, oB.tier, oB.named, BB)) && void 0 !== IB ? IB : () => {};
          if (this.dropArrival(), BB) {
            const BB = {
              id: ++this.forgeId,
              preview: oB,
              timers: [],
              stopSounds: GB,
              landed: !1,
              reply: null
            };
            BB.timers.push(setTimeout((() => {
              BB.landed = !0, null !== BB.reply && (this.apply(BB.reply), BB.reply = null, this.emit())
            }), IT), setTimeout((() => {
              this.finishForge(BB)
            }), ZT)), this.forging = BB
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(TB)
        }, this.snapshot = this.buildSnapshot()
      }
      sN(BB) {
        var IB;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.forgeMessageKind) return this.dropForge(), this.apply(BB), this.status = null, this.show(), void(null === (IB = this.onOpened) || void 0 === IB || IB.call(this));
        const ZB = this.forging;
        if (null !== ZB && null !== BB.forgeRefusalKey) this.dropForge();
        else if (null !== ZB && !ZB.landed) return void(ZB.reply = BB);
        this.apply(BB), this.emit()
      }
      apply(BB) {
        if (this.owned = BB.forgeOwnedParts, this.coal = BB.forgeCoalOwned, this.keepSelectionOwned("open" === BB.forgeMessageKind), null !== BB.forgeForgedSwordId) {
          var IB;
          const ZB = (0, BT.k)(BB.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.displayName) && void 0 !== IB ? IB : ""
            }
          }
        } else null !== BB.forgeRefusalKey && (this.status = {
          tone: "refused",
          key: BB.forgeRefusalKey,
          params: {}
        })
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.dropForge(), this.dropArrival(), this.status = null, this.awaitingReply = !1, this.clearReplyTimeout()
      }
      finishForge(BB) {
        var IB;
        this.forging = null;
        const ZB = this.selectedParts(),
          TB = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: BB.id,
          sameSword: null !== ZB && (null === (IB = (0, BT.k)(ZB)) || void 0 === IB ? void 0 : IB.displayName) === BB.preview.name,
          timer: TB
        }, this.emit()
      }
      dropForge() {
        const BB = this.forging;
        if (null !== BB) {
          this.forging = null;
          for (const IB of BB.timers) clearTimeout(IB);
          BB.stopSounds(), null !== BB.reply && this.apply(BB.reply)
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
        var BB, IB, ZB;
        const TB = this.selectedParts(),
          JB = null === TB ? null : (0, BT.k)(TB),
          oB = null !== (BB = null === (IB = this.forging) || void 0 === IB ? void 0 : IB.preview) && void 0 !== BB ? BB : null === JB ? null : this.preview(JB);
        return {
          enabled: this.received,
          open: this.open,
          slots: BT.j.map((BB => ({
            kind: BB,
            label: this.translate(qT[BB]),
            parts: this.partsFor(BB)
          }))),
          coalOwned: this.coal,
          preview: oB,
          unformedSword: BT.h[null !== (ZB = this.selected.Blade) && void 0 !== ZB ? ZB : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((BB => BB > 0)),
          canForge: null !== oB && !oB.coalShort && !this.isPending(),
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
      preview(BB) {
        return {
          name: BB.displayName,
          lore: BB.lore,
          baseSword: BB.baseSword,
          enchantmentTier: BB.enchantmentTier,
          tier: Number(BB.enchantmentTier.slice(-1)),
          named: BB.named,
          stats: this.stats(BB),
          effects: BB.effects,
          coalCost: BB.coalCost,
          coalShort: null === this.forging && BB.coalCost > this.coal
        }
      }
      partsFor(BB) {
        const IB = [];
        for (const TB of BT.e) {
          var ZB;
          const JB = (0, BT.o)(TB, BB),
            oB = null !== (ZB = this.owned[JB]) && void 0 !== ZB ? ZB : 0;
          oB > 0 && IB.push({
            material: TB,
            itemName: JB,
            owned: oB,
            selected: this.selected[BB] === TB,
            placeholder: !1
          })
        }
        if (0 === IB.length) {
          const ZB = BT.e[0];
          IB.push({
            material: ZB,
            itemName: (0, BT.o)(ZB, BB),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return IB
      }
      stats(BB) {
        const IB = [{
          label: this.translate("skyblockGame:forgeStatPower"),
          value: `\xd7${BB.powerMultiplier.toFixed(2)}`,
          better: BB.powerMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatDamage"),
          value: `\xd7${BB.damageMultiplier.toFixed(2)}`,
          better: BB.damageMultiplier > 1
        }, {
          label: this.translate("skyblockGame:forgeStatSpeed"),
          value: `\xd7${(1/BB.cooldownMultiplier).toFixed(2)}`,
          better: BB.cooldownMultiplier < 1
        }, {
          label: this.translate("skyblockGame:forgeStatKnockback"),
          value: `\xd7${BB.knockbackMultiplier.toFixed(2)}`,
          better: BB.knockbackMultiplier > 1
        }];
        return BB.reachBonus > 0 && IB.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${BB.reachBonus.toFixed(1)}`,
          better: !0
        }), BB.damageReduction > 0 && IB.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*BB.damageReduction)}%`,
          better: !0
        }), IB
      }
      selectedParts() {
        const {
          Blade: BB,
          Guard: IB,
          Handle: ZB
        } = this.selected;
        return null === BB || null === IB || null === ZB ? null : {
          blade: BB,
          guard: IB,
          handle: ZB
        }
      }
      keepSelectionOwned(BB) {
        for (const ZB of BT.j) {
          var IB;
          const TB = this.selected[ZB];
          if (null !== TB && (null !== (IB = this.owned[(0, BT.o)(TB, ZB)]) && void 0 !== IB ? IB : 0) > 0) continue;
          if (!BB) {
            this.selected[ZB] = null;
            continue
          }
          const JB = [...BT.e].reverse().find((BB => {
            var IB;
            return (null !== (IB = this.owned[(0, BT.o)(BB, ZB)]) && void 0 !== IB ? IB : 0) > 0
          }));
          this.selected[ZB] = null !== JB && void 0 !== JB ? JB : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const UT = "skyblockSmugglerView",
      WT = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class dT extends hB {
      constructor(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, ZB, TB), this.translate = IB, this.requestBuy = JB, this.now = oB, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = BB => BB, this.onBought = null, this.buy = BB => {
          const IB = this.deals[BB];
          void 0 !== IB && !this.isPending() && this.open && !this.soldOut.has(BB) && this.canAfford(IB) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, BB))
        }, this.snapshot = this.buildSnapshot()
      }
      sN(BB) {
        if (this.received = !0, this.day = BB.smugglerDay, this.deals = BB.smugglerDeals, this.rivets = BB.smugglerRivetsOwned, this.crests = BB.smugglerCrestsOwned, this.soldOut = new Set(BB.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + BB.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = BB.smugglerBoughtSlot, null !== BB.smugglerBoughtSlot) {
          var IB, ZB;
          const TB = this.deals[BB.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === TB ? "" : this.dealName(TB),
              amount: String(null !== (IB = null === TB || void 0 === TB ? void 0 : TB.smugglerDealAmount) && void 0 !== IB ? IB : 0)
            }
          }, this.boughtCount++, null === (ZB = this.onBought) || void 0 === ZB || ZB.call(this)
        } else null !== BB.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: BB.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(BB, IB, ZB) {
        this.translate = BB, void 0 !== ZB && (this.itemName = ZB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(BB) {
        if (null !== BB.smugglerDealUniqueName) return BB.smugglerDealUniqueName;
        const IB = WT[BB.smugglerDealItem];
        return void 0 === IB ? this.itemName(BB.smugglerDealItem) : this.translate(IB)
      }
      canAfford(BB) {
        return BB.smugglerDealRivets <= this.rivets && BB.smugglerDealCrests <= this.crests
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
        const BB = Math.ceil((this.rotatesAtMs - this.now()) / 6e4);
        return BB <= 0 ? this.translate("skyblockGame:smugglerRotatesSoon") : BB < 60 ? this.translate("skyblockGame:smugglerRotatesMinutes", {
          minutes: String(BB)
        }) : this.translate("skyblockGame:smugglerRotatesHours", {
          hours: String(Math.floor(BB / 60)),
          minutes: String(BB % 60)
        })
      }
      buildSnapshot() {
        return {
          enabled: this.received,
          open: this.open,
          deals: this.deals.map(((BB, IB) => ({
            slot: IB,
            itemName: BB.smugglerDealItem,
            displayName: this.dealName(BB),
            enchantmentTier: BB.smugglerDealEnchantmentTier,
            amount: BB.smugglerDealAmount,
            rivets: BB.smugglerDealRivets,
            crests: BB.smugglerDealCrests,
            affordable: this.canAfford(BB),
            soldOut: this.soldOut.has(IB),
            justBought: this.boughtSlot === IB
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
    const CT = "skyblockPassageView",
      QT = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function sT(BB, IB) {
      return BB(QT[IB])
    }

    function wT(BB, IB, ZB, TB) {
      const JB = Math.ceil((ZB - TB) / 864e5),
        oB = sT(BB, IB);
      return JB > 1 ? BB("skyblockGame:passageNextDays", {
        phase: oB,
        days: String(JB)
      }) : BB("skyblockGame:passageNextSoon", {
        phase: oB
      })
    }
    class OT extends hB {
      constructor(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(BB, ZB, TB), this.translate = IB, this.now = JB, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = BB => BB, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      sN(BB) {
        this.message = BB, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(BB, IB, ZB) {
        this.translate = BB, void 0 !== ZB && (this.itemName = ZB), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describe(BB) {
        return {
          itemName: BB.passageFish,
          displayName: this.itemName(BB.passageFish),
          where: this.translate("skyblockGame:passageInWater", {
            water: this.translate(BB.passageFishWaterKey)
          })
        }
      }
      buildSnapshot() {
        const BB = this.message;
        return null === BB ? {
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
          phase: BB.passagePhase,
          phaseName: sT(this.translate, BB.passagePhase),
          visitors: BB.passageVisitors.map((BB => this.describe(BB))),
          resting: this.describe(BB.passageResting),
          nextPhase: BB.passageNextPhase,
          next: wT(this.translate, BB.passageNextPhase, BB.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var YT = ZB(38593);
    const iT = "skyblockKeepersChairView";
    class pT extends hB {
      constructor(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new YT.e;
        super(BB, ZB, TB), this.translate = IB, this.requestAim = JB, this.now = oB, this.pacer = GB, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = BB => BB, this.aim = BB => {
          !this.awaitingReply && this.open && this.atChair && BB !== this.favoured && (null === BB || this.islands.some((IB => IB.keepersChairIslandId === BB && IB.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== BB && void 0 !== BB ? BB : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = GB.subscribe((() => {
          this.emit()
        }))
      }
      sN(BB) {
        var IB, ZB;
        this.received = !0;
        const TB = this.favoured,
          JB = this.atChair;
        var oB;
        return this.islands = BB.keepersChairIslands, this.favoured = BB.keepersChairFavoured, this.passage = null !== (IB = BB.keepersChairPassage) && void 0 !== IB ? IB : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (ZB = BB.keepersChairAtChair) || void 0 === ZB || ZB, "place" === BB.keepersChairMessageKind ? (!JB && this.atChair && "refused" === (null === (oB = this.status) || void 0 === oB ? void 0 : oB.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === BB.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== BB.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: BB.keepersChairRefusalKey,
          island: null
        } : this.favoured !== TB && (this.status = null === this.favoured ? {
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
      receivePassage(BB) {
        this.received && (this.passage = BB, this.passageReceivedAtMs = this.now(), this.emit())
      }
      setTranslator(BB, IB, ZB) {
        this.translate = BB, void 0 !== ZB && (this.itemName = ZB), this.emit()
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
      islandName(BB) {
        const IB = this.islands.find((IB => IB.keepersChairIslandId === BB));
        return void 0 === IB ? BB : this.translate(IB.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const BB = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          IB = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((BB => {
            const IB = BB.keepersChairFeaturedFish;
            return {
              id: BB.keepersChairIslandId,
              name: this.translate(BB.keepersChairIslandNameKey),
              relit: BB.keepersChairIslandRelit,
              featuredFish: null === IB ? null : {
                itemName: IB,
                displayName: this.itemName(IB)
              },
              favoured: BB.keepersChairIslandId === this.favoured
            }
          })),
          aimed: null !== this.favoured,
          canAim: this.atChair && !this.isPending(),
          status: null === BB ? null : {
            tone: BB.tone,
            text: this.translate(BB.key, null === BB.island ? void 0 : {
              island: this.islandName(BB.island)
            })
          },
          aimedCount: this.aimedCount,
          almanac: null === IB ? null : {
            phase: IB.keepersChairPassagePhase,
            phaseName: sT(this.translate, IB.keepersChairPassagePhase),
            nextPhase: IB.keepersChairPassageNextPhase,
            next: wT(this.translate, IB.keepersChairPassageNextPhase, IB.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const aT = "skyblockReachLogView",
      HT = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      MT = "Caught Fish",
      jT = [1, 2, 4];

    function PT(BB, IB) {
      return BB.map((BB => ({
        ...BB,
        reachLogPageFish: BB.reachLogPageFish.map((BB => ({
          ...BB,
          reachLogFishFresh: IB(BB)
        })))
      })))
    }
    class RT extends hB {
      constructor(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new YT.e;
        super(BB, ZB, TB), this.translate = IB, this.requestOpen = JB, this.pacer = oB, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = BB => BB, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = BB => {
          this.pages.some((IB => IB.reachLogIslandId === BB)) && (this.selected = BB, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = oB.subscribe((() => {
          this.emit()
        }))
      }
      sN(BB) {
        if (this.received = !0, "status" === BB.reachLogMessageKind) return !0 === BB.reachLogNews && this.markNews(), this.serverFresh = BB.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const IB = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== BB.reachLogMessageKind)
          if (this.pageViews = null, this.pages = PT(BB.reachLogPages, (BB => BB.reachLogFishFresh || this.heldFresh.has(BB.reachLogFishItem))), this.letGoShown = BB.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, IB) this.showPages();
          else {
            for (const BB of this.pages)
              for (const IB of BB.reachLogPageFish) IB.reachLogFishFresh && this.heldFresh.add(IB.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(BB, IB, ZB) {
        this.translate = BB, this.pageViews = null, void 0 !== ZB && (this.itemName = ZB), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = PT(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var BB, IB, ZB, TB;
        const JB = this.pages.find((BB => BB.reachLogPageFish.some((BB => BB.reachLogFishFresh))));
        if (void 0 !== JB) return JB.reachLogIslandId;
        if (null !== this.selected && this.pages.some((BB => BB.reachLogIslandId === this.selected))) return this.selected;
        return null !== (BB = null !== (IB = null === (ZB = this.pages.filter((BB => BB.reachLogIslandAwake)).at(-1)) || void 0 === ZB ? void 0 : ZB.reachLogIslandId) && void 0 !== IB ? IB : null === (TB = this.pages[0]) || void 0 === TB ? void 0 : TB.reachLogIslandId) && void 0 !== BB ? BB : null
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
        return this.pages.map((BB => {
          var IB;
          return {
            id: BB.reachLogIslandId,
            name: this.translate(BB.reachLogIslandNameKey),
            awake: BB.reachLogIslandAwake,
            gold: BB.reachLogPageGold,
            caught: BB.reachLogPageFish.filter((BB => BB.reachLogFishCaught && !BB.reachLogFishVisitor)).length,
            total: BB.reachLogPageFish.filter((BB => !BB.reachLogFishVisitor)).length,
            fish: BB.reachLogPageFish.map((BB => {
              const IB = BB.reachLogFishBestKg;
              return {
                itemName: BB.reachLogFishItem,
                name: BB.reachLogFishCaught ? this.itemName(BB.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: BB.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / BB.reachLogFishChance))
                }),
                best: BB.reachLogFishCaught ? null === IB ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: IB.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: BB.reachLogFishMarks,
                ribbons: jT.map((IB => 0 !== (BB.reachLogFishRibbons & IB))),
                glimmer: 0 !== (8 & BB.reachLogFishRibbons),
                halo: 0 !== (32 & BB.reachLogFishRibbons),
                fresh: BB.reachLogFishFresh,
                visitor: BB.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (IB = BB.reachLogPageReturner) && void 0 !== IB ? IB : null)
          }
        }))
      }
      buildReturner(BB) {
        return null === BB ? null : {
          itemName: BB.reachLogReturnerFishItem,
          line: this.translate(BB.reachLogReturnerLineKey, {
            name: this.translate(BB.reachLogReturnerNameKey),
            trinket: this.translate(BB.reachLogReturnerTrinketKey)
          }),
          back: BB.reachLogReturnerBack
        }
      }
      receivePassagePhase(BB) {
        null !== this.passagePhase && this.passagePhase !== BB && (this.pagesCurrent = !1), this.passagePhase = BB
      }
      dispose() {
        this.received = !1, this.pagesCurrent = !1, this.passagePhase = null, this.heldFresh.clear(), this.clearReplyTimeout(), this.clearNewsTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const rT = "skyblockLampLightView";
    class mT {
      constructor(BB, IB, ZB, TB) {
        this.Gq = BB, this.translate = IB, this.requestCommand = ZB, this.pacer = TB, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.WN = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = BB => {
          BB ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = BB => {
          this.send(`buy ${BB}`)
        }, this.socket = BB => {
          this.send(`socket ${null!==BB&&void 0!==BB?BB:RB}`)
        }, this.wearTint = BB => {
          this.send(`tint ${null!==BB&&void 0!==BB?BB:RB}`)
        }, this.setSituation = BB => {
          this.situation = BB, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = TB.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = TB.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      sN(BB) {
        if (this.message = BB, null !== BB.lampLightShop && (this.shop = BB.lampLightShop), "open" === BB.lampLightKind && (this.refusalKey = null), "reply" === BB.lampLightKind) {
          var IB;
          const JB = null !== (IB = BB.lampLightReplyTag) && void 0 !== IB ? IB : null,
            oB = null !== JB && JB === this.offTag;
          var ZB, TB;
          if (oB ? this.settleOff() : null !== JB && JB !== this.awaitingTag || this.settleReply(), this.refusalKey = BB.lampLightRefusalKey, null !== BB.lampLightBought && !oB) this.sparkle = {
            id: BB.lampLightBought,
            count: (null !== (ZB = null === (TB = this.sparkle) || void 0 === TB ? void 0 : TB.count) && void 0 !== ZB ? ZB : 0) + 1
          }
        }
        BB.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === BB.lampLightKind && (this.lastGained = BB.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(BB) {
        BB !== this.atChair && (this.atChair = BB, BB && (this.refusalKey = null), this.emit())
      }
      setTranslator(BB, IB) {
        this.translate = BB, this.locale = null !== IB && void 0 !== IB ? IB : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.WN = !0
      }
      send(BB) {
        var IB;
        if (null !== this.awaitingTag || "ready" !== (null === (IB = this.message) || void 0 === IB ? void 0 : IB.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const ZB = this.nextTag();
        this.awaitingTag = ZB, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${BB} ${ZB}`), this.emit()
      }
      sendQueuedOff() {
        if (!this.offQueued || !this.pacer.canSendPriority()) return;
        this.offQueued = !1;
        const BB = this.nextTag();
        this.offTag = BB, this.pacer.start(), this.offTimeout = setTimeout((() => {
          this.offTimeout = null, this.awaitingOff = !1, this.offTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-release off ${BB}`)
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
        this.WN || (this.snapshot = this.buildSnapshot(), this.Gq(this.snapshot))
      }
      formatLight(BB) {
        return Math.floor(BB).toLocaleString(this.locale)
      }
      formatPercent(BB) {
        const IB = 100 * BB;
        return IB >= 10 ? Math.round(IB).toLocaleString(this.locale) : IB.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(BB, IB) {
        if ("bite" === BB) return this.translate("skyblockGame:lampLightBite", {
          seconds: (IB.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === BB) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(IB.lampLightRareChance)
        });
        if ("notice" === BB) return null === IB.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(IB.lampLightNoticeChance)
        });
        const ZB = "meter" === BB ? IB.lampLightMeterCatches : IB.lampLightBloomCatches;
        return null === ZB ? null : this.translate("meter" === BB ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(ZB))
        })
      }
      oddsLines(BB, IB) {
        const ZB = (BB, IB) => {
            var ZB;
            return null !== (ZB = {
              bite: IB.lampLightBiteMs,
              rare: IB.lampLightRareChance,
              meter: IB.lampLightMeterCatches,
              bloom: IB.lampLightBloomCatches,
              notice: IB.lampLightNoticeChance
            } [BB]) && void 0 !== ZB ? ZB : 0
          },
          TB = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          JB = [];
        for (const oB of ["bite", "rare", "meter", "bloom", "notice"]) {
          const GB = this.formatOdds(oB, BB),
            vB = this.formatOdds(oB, IB);
          if (null === GB || null === vB || "bite" !== oB && "rare" !== oB && GB === vB) continue;
          const kB = ZB(oB, IB) - ZB(oB, BB),
            cB = TB[oB] ? kB < 0 : kB > 0;
          JB.push({
            label: oB,
            before: GB,
            after: vB,
            tone: GB === vB ? "same" : cB ? "better" : "worse"
          })
        }
        return JB
      }
      charmView(BB, IB, ZB) {
        const TB = BB.lampLightCharmId.charAt(0).toUpperCase() + BB.lampLightCharmId.slice(1),
          JB = "bloom" === this.situation;
        return {
          id: BB.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${TB}`),
          effect: this.translate(`skyblockGame:lampLightCharm${TB}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(BB.lampLightCharmCost)
          }),
          owned: BB.lampLightCharmOwned,
          affordable: ZB >= BB.lampLightCharmCost,
          socketed: IB.lampLightSocketed === BB.lampLightCharmId,
          lines: this.oddsLines(JB ? IB.lampLightBareBloom : IB.lampLightBareOpen, JB ? BB.lampLightCharmBloom : BB.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var BB, IB, ZB, TB;
        const JB = this.message,
          oB = "ready" === (null === JB || void 0 === JB ? void 0 : JB.lampLightStatus) ? this.shop : null,
          GB = null !== (BB = null === JB || void 0 === JB ? void 0 : JB.lampLightBalance) && void 0 !== BB ? BB : 0,
          vB = this.atChair,
          kB = "loading" === (null === JB || void 0 === JB ? void 0 : JB.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === JB || void 0 === JB ? void 0 : JB.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          cB = "ready" !== (null === JB || void 0 === JB ? void 0 : JB.lampLightStatus) || vB ? null !== (IB = this.refusalKey) && void 0 !== IB ? IB : kB : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== JB && "locked" !== JB.lampLightStatus,
          status: null !== (ZB = null === JB || void 0 === JB ? void 0 : JB.lampLightStatus) && void 0 !== ZB ? ZB : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(GB)
          }),
          releasing: null !== (TB = null === JB || void 0 === JB ? void 0 : JB.lampLightReleasing) && void 0 !== TB && TB,
          gained: null === JB || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === JB || void 0 === JB ? void 0 : JB.lampLightStatus) && vB && !this.isPending(),
          situation: this.situation,
          shop: null === oB ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: oB.lampLightOddsRod,
              island: this.translate(oB.lampLightIslandNameKey)
            }),
            heldRod: null !== oB.lampLightHeldRod,
            charms: oB.lampLightCharms.map((BB => this.charmView(BB, oB, GB))),
            tints: oB.lampLightTints.map((BB => {
              const IB = BB.lampLightTintId,
                [ZB, TB, JB] = BB.lampLightTintColour;
              return {
                id: IB,
                name: this.translate(`skyblockGame:lampLightTint${IB.charAt(0).toUpperCase()}${IB.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(BB.lampLightTintCost)
                }),
                owned: BB.lampLightTintOwned,
                affordable: GB >= BB.lampLightTintCost,
                wearing: oB.lampLightTint === IB,
                colour: `rgb(${ZB}, ${TB}, ${JB})`
              }
            })),
            wearingIslandColours: null === oB.lampLightTint
          },
          notice: null === cB ? null : this.translate(cB),
          sparkle: this.sparkle
        }
      }
    }
    const XT = "skyblockMagmawardView";
    class LT {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Gq = BB, this.now = IB, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = fB.map((() => 0)), this.wornAt = fB.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      sN(BB) {
        var IB, ZB;
        const TB = fB.map(((IB, ZB) => !0 === BB.magmawardPiecesWorn[ZB]));
        if (!TB.includes(!0)) return this.snapshot = null, void this.Gq(null);
        const JB = this.now(),
          oB = this.snapshot;
        null === oB && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const GB = BB.magmawardFuelCarried,
          vB = !TB.includes(!1);
        let kB = null !== (IB = null === oB || void 0 === oB ? void 0 : oB.pulse) && void 0 !== IB ? IB : null,
          cB = null !== (ZB = null === oB || void 0 === oB ? void 0 : oB.flare) && void 0 !== ZB ? ZB : null;
        BB.magmawardFuelBurned ? (kB = "burn", cB = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = JB, this.flareAt = JB) : null !== oB && GB > oB.fuel && (kB = "gain", this.pulseToken++, this.pulseAt = JB), vB && null !== oB && !oB.fullSet && (cB = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = JB, this.setLitAt = JB);
        const nB = fB.map(((BB, IB) => (TB[IB] && null !== oB && !oB.pieces[IB].worn && (this.wornTokens[IB]++, this.wornAt[IB] = JB), {
          itemName: BB,
          worn: TB[IB],
          wornToken: this.wornTokens[IB],
          justWorn: TB[IB] && this.isPlaying(this.wornAt[IB], JB)
        })));
        this.snapshot = {
          pieces: nB,
          wornCount: TB.filter(Boolean).length,
          fullSet: vB,
          fuel: GB,
          fuelState: GB <= 0 ? "empty" : GB <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, JB) ? kB : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, JB) ? cB : null,
          flareToken: this.flareToken,
          setLit: vB && this.isPlaying(this.setLitAt, JB),
          setLitToken: this.setLitToken
        }, this.Gq(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Gq(null)
      }
      isPlaying(BB, IB) {
        return IB - BB < 1200
      }
    }
    const eT = "skyblockGlowtideView";
    class uT {
      constructor(BB) {
        this.Gq = BB, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = BB => {
          this.arrow = BB, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      sN(BB) {
        this.bloom = BB.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.Gq(null))
      }
      afterRender(BB, IB) {
        const ZB = this.bloom;
        if (null === ZB || null === BB) return;
        const TB = ZB.glowtideBloomX - BB[0],
          oB = ZB.glowtideBloomZ - BB[2],
          GB = Math.hypot(TB, oB),
          vB = this.snapshot,
          kB = null !== vB && void 0 !== vB && vB.inRange ? 1 : 0,
          cB = GB <= 12.5 + kB && BB[1] - ZB.glowtideBloomY <= 10 + kB;
        !cB || null !== vB && void 0 !== vB && vB.inRange || this.inRangeToken++;
        const nB = {
          colour: ZB.glowtideBloomColour,
          inRange: cB,
          distance: Math.round(GB),
          inRangeToken: this.inRangeToken
        };
        (null === vB || nB.colour !== vB.colour || nB.inRange !== vB.inRange || !cB && nB.distance !== vB.distance) && (this.snapshot = nB, this.Gq(nB));
        const hB = JB.e.computeShortestRotation(IB, (0, JB.Eb)([TB, 0, oB]));
        null === this.arrow || Math.abs(hB - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${hB}rad)`, this.arrowTurn = hB)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.Gq(null)
      }
    }
    const fT = "skyblockGlowMeterView";
    class lT {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.Gq = BB, this.now = IB, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      sN(BB) {
        const IB = this.now(),
          {
            glowMeterFill: ZB,
            glowMeterCapacity: TB
          } = BB,
          JB = ZB >= TB,
          oB = this.snapshot;
        null !== oB && (JB && !oB.full && (this.fullToken++, this.fullAt = IB), oB.full && !JB ? (this.burstToken++, this.burstAt = IB) : ZB > oB.fill && (this.gainToken++, this.gainAt = IB)), this.snapshot = {
          fill: ZB,
          ah: TB,
          ratio: Math.min(1, Math.max(0, ZB / TB)),
          full: JB,
          rares: BB.glowMeterRares,
          ready: JB && this.isPlaying(this.fullAt, IB),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, IB),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, IB),
          gainToken: this.gainToken
        }, this.Gq(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.Gq(null)
      }
      isPlaying(BB, IB) {
        return IB - BB < 2e3
      }
    }
    const AT = "skyblockHushWaitView";
    class tT {
      constructor(BB) {
        this.Gq = BB, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      sN(BB) {
        let {
          hushWaitMs: IB,
          hushWaitTotalMs: ZB,
          hushWaitLines: TB
        } = BB;
        if (this.clearTimers(), this.token++, 0 === TB.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (IB <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: TB[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const JB = Math.max(null !== ZB && void 0 !== ZB ? ZB : IB, IB),
          oB = JB - IB,
          GB = BB => JB * BB / TB.length,
          vB = BB => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: JB,
              elapsedMs: oB,
              line: TB[BB],
              lineIndex: BB
            })
          };
        let kB = 0;
        for (; kB + 1 < TB.length && GB(kB + 1) <= oB;) kB++;
        vB(kB);
        for (let cB = kB + 1; cB < TB.length; cB++) this.later(GB(cB) - oB, (() => {
          vB(cB)
        }));
        this.later(IB, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(BB) {
        this.snapshot = BB, this.Gq(BB)
      }
      later(BB, IB) {
        this.timers.push(setTimeout(IB, BB))
      }
      clearTimers() {
        for (const BB of this.timers) clearTimeout(BB);
        this.timers = []
      }
    }
    const bT = "skyblockTideChartsView",
      xT = 36e5,
      ET = 864e5;

    function DT(BB, IB, ZB) {
      const [TB, JB, oB, GB] = BB.tideChartArea, vB = Math.floor(IB), kB = Math.floor(ZB);
      return vB >= TB && vB <= oB && kB >= JB && kB <= GB
    }

    function KT(BB, IB, ZB) {
      const [TB, JB, oB, GB] = BB.tideChartWater;
      return function(BB, IB, ZB, TB, JB, oB) {
        const GB = 4 - lB(Math.floor(JB) - (BB - ZB), ZB);
        return 5 * lB(Math.floor(oB) - (IB - TB), TB) + GB
      }(TB, JB, oB, GB, IB, ZB)
    }

    function VT(BB, IB, ZB) {
      const TB = BB.tideCharts;
      for (let JB = 0; JB < TB.length; JB++)
        if (DT(TB[JB], IB, ZB)) return TB[JB];
      return null
    }

    function ST(BB, IB, ZB) {
      const TB = Math.max(0, IB - ZB);
      return TB > ET ? BB("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(TB / ET))
      }) : TB > xT ? BB("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(TB / xT))
      }) : BB("skyblockGame:tideChartsTurnSoon")
    }
    class BJ extends hB {
      constructor(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(BB, ZB, TB), this.translate = IB, this.now = JB, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.TF = BB => {
          this.picked = BB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      sN(BB) {
        const IB = this.message;
        if (null !== IB)
          for (const TB of BB.tideCharts) {
            var ZB;
            const BB = IB.tideCharts.find((BB => BB.tideChartIsland === TB.tideChartIsland)),
              JB = TB.tideChartLit & ~(null !== (ZB = null === BB || void 0 === BB ? void 0 : BB.tideChartLit) && void 0 !== ZB ? ZB : 0);
            void 0 !== BB && 0 !== JB && (this.pulse = {
              island: TB.tideChartIsland,
              cells: JB,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = BB, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(BB, IB) {
        var ZB;
        const TB = null === this.message || Number.isNaN(BB) ? null : VT(this.message, BB, IB),
          JB = null !== (ZB = null === TB || void 0 === TB ? void 0 : TB.tideChartIsland) && void 0 !== ZB ? ZB : null,
          oB = null === TB ? -1 : function(BB, IB, ZB) {
            const [TB, JB, oB, GB] = BB.tideChartWater;
            return function(BB, IB, ZB, TB, JB, oB, GB) {
              return ((JB - BB) / (ZB + GB)) ** 2 + ((oB - IB) / (TB + GB)) ** 2 <= 1
            }(TB, JB, oB, GB, IB, ZB, 2) ? KT(BB, IB, ZB) : -1
          }(TB, BB, IB);
        return (JB !== this.hereIsland || oB !== this.hereCell) && (this.hereIsland = JB, this.hereCell = oB, null !== JB && (this.lastIsland = JB), !0)
      }
      afterRender(BB) {
        if (null === this.message) return;
        this.lastX = null === BB ? Number.NaN : BB[0], this.lastZ = null === BB ? Number.NaN : BB[2];
        const IB = this.locate(this.lastX, this.lastZ),
          ZB = this.expirePulses();
        (IB || ZB || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const BB = this.now();
        return !(!this.open || BB - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = BB, ST(this.translate, this.message.tideChartTurnsInMs, BB - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(BB, IB) {
        const ZB = null === this.message ? null : VT(this.message, BB, IB);
        if (null === ZB) return;
        const TB = KT(ZB, BB, IB);
        0 === (ZB.tideChartPreBlank & 1 << TB) && (this.cast = {
          island: ZB.tideChartIsland,
          cell: TB,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const BB = this.now();
        let IB = !1;
        return 0 !== this.pulse.cells && BB - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, IB = !0), null !== this.cast && BB - this.cast.atMs >= 1500 && (this.cast = null, IB = !0), IB
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return null !== this.message && this.message.tideCharts.length > 0
      }
      onClosed() {
        this.picked = null
      }
      findChart(BB, IB) {
        var ZB;
        return null !== (ZB = BB.tideCharts.find((BB => BB.tideChartIsland === IB))) && void 0 !== ZB ? ZB : null
      }
      describe(BB) {
        var IB, ZB, TB;
        const JB = BB.tideChartIsland,
          oB = [];
        for (let FB = 0; FB < 25; FB++) {
          const IB = 1 << FB;
          0 !== (BB.tideChartLit & IB) ? oB.push("lit") : 0 !== (BB.tideChartClear & IB) ? oB.push("clear") : 0 !== (BB.tideChartPreBlank & IB) ? oB.push("shore") : oB.push("water")
        }
        const GB = function(BB) {
            let IB = 0;
            for (let ZB = BB >>> 0; 0 !== ZB; ZB &= ZB - 1) IB++;
            return IB
          }(BB.tideChartLit),
          vB = BB.tideChartInkCount,
          kB = this.translate(BB.tideChartIslandNameKey),
          cB = this.translate("skyblockGame:tideChartsLit", {
            lit: String(GB),
            ink: String(vB)
          }),
          nB = null === BB.tideChartPictureNameKey ? null : this.translate(BB.tideChartPictureNameKey),
          hB = this.hereIsland === JB && -1 !== this.hereCell ? this.hereCell : null,
          zB = [`${kB}: ${cB}.`];
        if (null !== nB && zB.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: nB
          })), null !== hB) {
          const BB = Math.floor(hB / 5) + 1,
            IB = hB % 5 + 1;
          zB.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(BB),
            column: String(IB)
          }))
        }
        return {
          island: JB,
          islandName: kB,
          cells: oB,
          hereCell: hB,
          lit: GB,
          ink: vB,
          litText: cB,
          pictureName: nB,
          gridLabel: zB.join(" "),
          pulseCells: this.pulse.island === JB ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (IB = this.cast) || void 0 === IB ? void 0 : IB.island) === JB ? this.cast.cell : null,
          castToken: null !== (ZB = null === (TB = this.cast) || void 0 === TB ? void 0 : TB.token) && void 0 !== ZB ? ZB : 0
        }
      }
      buildSnapshot() {
        var BB, IB, ZB;
        const TB = this.message;
        if (null === TB || 0 === TB.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const JB = this.findChart(TB, this.hereIsland),
          oB = null !== (BB = null !== (IB = null !== (ZB = this.findChart(TB, this.open ? this.picked : null)) && void 0 !== ZB ? ZB : JB) && void 0 !== IB ? IB : this.findChart(TB, this.lastIsland)) && void 0 !== BB ? BB : TB.tideCharts[0],
          GB = null === JB ? null : this.describe(JB);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: GB,
          card: oB === JB ? GB : this.describe(oB),
          turnsText: ST(this.translate, TB.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(TB.tideChartBookCount)
          }),
          tabs: TB.tideCharts.map((BB => ({
            island: BB.tideChartIsland,
            name: this.translate(BB.tideChartIslandNameKey),
            selected: BB.tideChartIsland === oB.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const IJ = "skyblockRegularsView",
      ZJ = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      TJ = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function JJ(BB, IB) {
      return "given" === BB ? IB.given : "owed" === BB ? IB.owed : IB.goal
    }
    class oJ extends hB {
      constructor(BB, IB, ZB, TB) {
        super(BB, ZB, TB), this.translate = IB, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = BB => BB, this.openIsland = BB => {
          this.selected = BB, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = BB => {
          this.selected = BB, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      sN(BB) {
        this.message = BB, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const BB = this.openedFromReachLog;
        return this.openedFromReachLog = !1, BB
      }
      setTranslator(BB, IB, ZB) {
        this.translate = BB, void 0 !== ZB && (this.itemName = ZB), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(BB, IB, ZB) {
        return {
          text: this.translate(JJ(BB, IB), ZB),
          given: "given" === BB
        }
      }
      describeRegular(BB, IB) {
        const ZB = this.translate,
          TB = null !== BB.regularKg,
          JB = BB.regularMeetings,
          oB = TB ? 0 === JB ? ZB("skyblockGame:regularsNotMet") : 1 === JB ? ZB("skyblockGame:regularsMeetingsOne") : ZB("skyblockGame:regularsMeetings", {
            count: JB
          }) : "";
        return {
          id: BB.regularId,
          name: ZB(BB.regularNameKey),
          line: ZB(BB.regularLineKey),
          itemName: BB.regularFishItem,
          fishName: this.itemName(BB.regularFishItem),
          tagged: TB,
          size: null === BB.regularKg ? ZB("skyblockGame:regularsNotTagged") : ZB("skyblockGame:regularsSize", {
            kg: BB.regularKg.toFixed(1)
          }),
          meetings: oB,
          chance: ZB("skyblockGame:regularsChance", {
            count: BB.regularOneInCasts
          }),
          resting: BB.regularRestingToday,
          gifts: [{
            text: ZB("skyblockGame:regularsGiftFlare"),
            given: JB >= 3
          }, this.describeGift(BB.regularTintGift, ZJ, {
            tint: ZB(BB.regularTintNameKey)
          })],
          history: [...BB.regularHistory].reverse().map((BB => {
            const TB = BB.regularMeetingKg.toFixed(1),
              JB = IB - BB.regularMeetingDay;
            return JB <= 0 ? ZB("skyblockGame:regularsToday", {
              kg: TB
            }) : ZB("skyblockGame:regularsDaysAgo", {
              days: JB,
              kg: TB
            })
          }))
        }
      }
      describeIsland(BB, IB) {
        return {
          id: BB.regularsIslandId,
          name: this.translate(BB.regularsIslandNameKey),
          charm: this.describeGift(BB.regularsCharmGift, TJ, {
            charm: this.translate(BB.regularsCharmNameKey)
          }),
          regulars: BB.regularsList.map((BB => this.describeRegular(BB, IB)))
        }
      }
      buildSnapshot() {
        var BB, IB, ZB, TB;
        const JB = this.message;
        if (null === JB) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const oB = JB.regularsIslands.map((BB => this.describeIsland(BB, JB.regularsToday))),
          GB = null !== (BB = null !== (IB = null === (ZB = oB.find((BB => BB.id === this.selected))) || void 0 === ZB ? void 0 : ZB.id) && void 0 !== IB ? IB : null === (TB = oB[0]) || void 0 === TB ? void 0 : TB.id) && void 0 !== BB ? BB : "";
        return {
          enabled: !0,
          open: this.open,
          selected: GB,
          islands: oB
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const GJ = "skyblockHiddenWatersView";
    class vJ {
      constructor(BB) {
        this.Gq = BB, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      sN(BB) {
        this.snapshot = function(BB) {
          const [IB, ZB] = BB.hiddenWatersMapSize, TB = (BB, TB) => ({
            left: 1 - BB / IB,
            top: TB / ZB
          }), JB = new Map;
          for (const [GB, vB] of BB.hiddenWatersGlimpses) {
            var oB;
            const BB = null !== (oB = JB.get(GB)) && void 0 !== oB ? oB : [];
            BB.push(vB), JB.set(GB, BB)
          }
          return {
            found: BB.hiddenWatersFound,
            total: BB.hiddenWatersTotal,
            aspect: ZB / IB,
            pins: BB.hiddenWatersPins.map((BB => {
              let [IB, ZB] = BB;
              return TB(IB, ZB)
            })),
            islands: BB.hiddenWatersIslands.map((BB => {
              let [JB, oB, GB, vB] = BB;
              const {
                left: kB,
                top: cB
              } = TB(GB + 1, oB);
              return {
                left: kB,
                top: cB,
                width: (GB + 1 - JB) / IB,
                height: (vB + 1 - oB) / ZB
              }
            })),
            glimpses: JB
          }
        }(BB), this.Gq(this.snapshot)
      }
    }
    const kJ = "skyblockDialogueView";
    class cJ extends hB {
      constructor(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(BB, ZB, TB), this.translate = IB, this.requestDialogue = JB, this.now = oB, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
          kind: "character",
          npcId: null
        }, this.requestAvailableAt = 0, this.showCharacters = () => {
          this.selection = {
            kind: "character",
            npcId: "character" === this.selection.kind ? this.selection.npcId : null
          }, this.request(), this.show()
        }, this.showQuest = BB => {
          this.selection = {
            kind: "quest",
            questId: BB
          }, this.request(), this.show()
        }, this.selectCharacter = BB => {
          this.selection = {
            kind: "character",
            npcId: BB
          }, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      sN(BB) {
        this.received = !0, this.scripts = BB.questDialogueScripts, this.speakers = new Map(BB.questDialogueSpeakers.map((BB => [BB.dialogueSpeakerId, BB]))), this.emit()
      }
      setTranslator(BB) {
        this.translate = BB, this.emit()
      }
      isEnabled() {
        return this.enabled
      }
      request() {
        const BB = this.now();
        BB >= this.requestAvailableAt && (this.requestAvailableAt = BB + 3e3, this.requestDialogue())
      }
      buildSnapshot() {
        var BB;
        const IB = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...IB,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const ZB = this.selection;
        if ("quest" === ZB.kind) {
          const BB = this.scripts.find((BB => BB.dialogueQuestId === ZB.questId));
          return {
            ...IB,
            characters: [],
            questFocus: ZB.questId,
            conversations: BB ? [this.conversation(BB)] : []
          }
        }
        const TB = [];
        for (let oB = this.scripts.length - 1; oB >= 0; oB--) {
          const BB = this.scripts[oB].dialogueLines;
          for (let IB = BB.length - 1; IB >= 0; IB--) TB.includes(BB[IB].dialogueSpeakerId) || TB.push(BB[IB].dialogueSpeakerId)
        }
        const JB = null !== ZB.npcId && TB.includes(ZB.npcId) ? ZB.npcId : null !== (BB = TB[0]) && void 0 !== BB ? BB : null;
        return {
          ...IB,
          characters: TB.map((BB => {
            var IB, ZB;
            return {
              id: BB,
              styling: null !== (IB = null === (ZB = this.speakers.get(BB)) || void 0 === ZB ? void 0 : ZB.dialogueSpeakerStyling) && void 0 !== IB ? IB : BB,
              selected: BB === JB
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((BB => BB.dialogueLines.some((BB => BB.dialogueSpeakerId === JB)))).map((BB => this.conversation(BB))).reverse()
        }
      }
      conversation(BB) {
        let IB = null;
        return {
          questId: BB.dialogueQuestId,
          questName: this.translate(BB.dialogueQuestNameKey),
          completed: BB.dialogueQuestCompleted,
          lines: BB.dialogueLines.map(((BB, ZB) => {
            var TB;
            const JB = BB.dialogueSpeakerId === IB || null === (TB = this.speakers.get(BB.dialogueSpeakerId)) || void 0 === TB ? void 0 : TB.dialogueSpeakerStyling;
            return IB = BB.dialogueSpeakerId, {
              key: ZB,
              display: {
                line: {
                  translationKey: BB.dialogueLineKey,
                  params: this.params(BB.dialogueLineParams)
                },
                speakerName: JB,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(BB) {
        if (void 0 !== BB) return Object.fromEntries(Object.entries(BB).map((BB => {
          let [IB, ZB] = BB;
          return [IB, "string" === typeof ZB ? ZB : this.translate(ZB.translationKey)]
        })))
      }
    }
    var nJ = ZB(650),
      hJ = ZB(1333),
      zJ = ZB(105);
    const FJ = "skyblockAutographsView";

    function NJ(BB) {
      const IB = nJ.m[BB];
      return {
        label: IB.chatTag.map((BB => BB.str)).join(""),
        icon: IB.icon,
        colour: IB.mainRGB
      }
    }
    class gJ extends hB {
      constructor(BB) {
        let IB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = IB, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      sN(BB) {
        this.signatures = BB.autographSignatures, BB.autographOpen ? this.show() : this.emit()
      }
      setTranslator(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = IB, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var BB;
        const IB = null !== (BB = this.signatures) && void 0 !== BB ? BB : [],
          ZB = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          TB = [...IB].sort(((BB, IB) => Number(null !== IB.autographRank) - Number(null !== BB.autographRank) || IB.autographSignedAtMs - BB.autographSignedAtMs)).map((BB => ({
            key: `${BB.autographSignedAtMs}|${BB.autographSignerName}`,
            name: (0, hJ.c)(BB.autographSignerName, !zJ.featureFlags.canSeeRealPlayerNames),
            rank: null === BB.autographRank ? null : NJ(BB.autographRank),
            signedOn: ZB.format(BB.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: TB,
          total: TB.length,
          rankTotal: TB.filter((BB => null !== BB.rank)).length
        }
      }
    }
    const qJ = "skyblockHudView",
      yJ = () => {},
      UJ = {
        getItem: () => null,
        setItem: yJ,
        removeItem: yJ
      };
    class WJ {
      constructor(BB) {
        let {
          translate: IB,
          translateWithIcons: ZB,
          setMenuOpen: TB = yJ,
          dismissMenu: JB = () => {
            TB(!1)
          },
          publishSkills: oB = yJ,
          publishQuests: GB = yJ,
          publishQuestNotification: vB = yJ,
          publishDungeons: kB = yJ,
          publishCollections: cB = yJ,
          publishMap: nB = yJ,
          publishHud: hB = yJ,
          publishPortalTransit: zB = yJ,
          publishDailyReward: NB = yJ,
          publishMailbox: gB = yJ,
          publishQuestGraph: qB = yJ,
          publishForge: yB = yJ,
          publishSmuggler: UB = yJ,
          publishKeepersChair: WB = yJ,
          publishReachLog: dB = yJ,
          publishLampLight: CB = yJ,
          publishMagmaward: QB = yJ,
          publishGlowtide: wB = yJ,
          publishGlowMeter: OB = yJ,
          publishHushWait: YB = yJ,
          publishPassage: iB = yJ,
          publishTideCharts: pB = yJ,
          publishRegulars: aB = yJ,
          publishHiddenWaters: HB = yJ,
          publishDialogue: MB = yJ,
          publishAutographs: jB = yJ,
          isLoadingScreenUp: PB = () => !1,
          onDailyRewardCoinLanded: RB = yJ,
          onDailyRewardStarted: rB = yJ,
          onDailyRewardFinished: mB = yJ,
          onDailyRewardItemLanded: XB = yJ,
          onMailboxStarted: LB = yJ,
          journeyStorage: eB = UJ,
          requestTracking: uB = yJ,
          requestTravel: fB = yJ,
          requestDungeonEnter: lB = yJ,
          requestQuestJump: AB = yJ,
          requestQuestArrive: tB = yJ,
          requestForge: bB = yJ,
          requestSmuggle: xB = yJ,
          requestKeepersChairAim: EB = yJ,
          requestReachLogOpen: DB = yJ,
          requestLampLight: KB = yJ,
          requestDialogue: VB = yJ
        } = BB;
        this.navigation = void 0, this.map = void 0, this.compass = new sB, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new YT.e, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = BB => BB, this.close = () => {
          for (const BB of this.panels) BB.close()
        }, this.setMenuOpen = TB, this.publishHud = hB, this.portalTransit = new eZ(zB, eB), this.magmaward = new LT(QB), this.glowtide = new uT(wB), this.glowMeter = new lT(OB), this.hushWait = new tT(YB), this.dailyReward = new lZ(NB, (() => PB() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (BB => {
          this.quests.setNotificationsHeld(BB)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), RB, rB, mB, XB);
        const SB = BB => {
          this.panels.some((BB => BB.isOpen())) || (BB ? JB() : this.setMenuOpen(!1))
        };
        this.skills = new vZ(oB, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), IB, void 0, void 0, SB), this.quests = new zZ(GB, uB, IB, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, SB, vB), this.dungeons = new gZ(kB, IB, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, SB, lB), this.collections = new mZ(cB, IB, (() => {
          this.beforePanelOpen(this.collections)
        }), SB), this.map = new FB(nB, fB, IB, (() => {
          this.beforePanelOpen(this.map)
        }), SB), this.questGraph = new SZ(qB, IB, (() => {
          this.beforePanelOpen(this.questGraph)
        }), SB, AB, tB, eB), this.forge = new yT(yB, IB, (() => {
          this.beforePanelOpen(this.forge)
        }), SB, bB), this.smuggler = new dT(UB, IB, (() => {
          this.beforePanelOpen(this.smuggler)
        }), SB, xB), this.lampLight = new mT(CB, IB, KB, this.commandPacer), this.keepersChair = new pT(WB, IB, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (BB => {
          this.lampLight.onChairClosed(), SB(BB)
        }), EB, Date.now, this.commandPacer), this.reachLog = new RT(dB, IB, (() => {
          this.beforePanelOpen(this.reachLog)
        }), SB, DB, this.commandPacer), this.passage = new OT(iB, IB, (() => {
          this.beforePanelOpen(this.passage)
        }), SB), this.tideCharts = new BJ(pB, IB, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), SB), this.regulars = new oJ(aB, IB, (() => {
          this.beforePanelOpen(this.regulars)
        }), (BB => {
          this.regulars.takeReturnToReachLog() && !BB && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), SB(BB)
        })), this.hiddenWaters = new vJ(HB), this.dialogue = new cJ(MB, IB, (() => {
          this.beforePanelOpen(this.dialogue)
        }), SB, VB), this.autographs = new gJ(jB, (() => {
          this.beforePanelOpen(this.autographs)
        }), SB), this.mailbox = new xZ(gB, (() => PB() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), LB), this.quests.translateWithIcons = null !== ZB && void 0 !== ZB ? ZB : null, this.skills.onLevelUp = BB => {
          this.quests.notify(BB)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new oZ(this.map, this.quests, this.compass, IB)
      }
      getHudSnapshot() {
        const BB = this.hudSnapshot,
          IB = this.dailyReward.getHeldCoins();
        return null === BB || IB <= 0 || !("hudPurseCoins" in BB) ? BB : {
          ...BB,
          hudPurseCoins: Math.max(0, BB.hudPurseCoins - IB)
        }
      }
      receiveHud(BB) {
        this.hudSnapshot = BB, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(BB) {
        this.setMenuOpen(!0);
        const IB = BB === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = BB;
        for (const ZB of this.panels) ZB === BB || IB && ZB === this.reachLog || ZB.close();
        this.openingPanel = null
      }
      setTranslator(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : IB => this.resolveItemName(IB, BB);
        this.quests.translateWithIcons = null !== ZB && void 0 !== ZB ? ZB : null, this.navigation.setTranslator(BB, IB), this.lampLight.setTranslator(BB, IB), this.mailbox.setItemName(TB);
        for (const JB of this.panels) JB.setTranslator(BB, IB, TB)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const BB of this.panels) BB.dispose()
      }
    }
    var dJ = ZB(1091),
      CJ = ZB.n(dJ),
      QJ = ZB(20),
      sJ = ZB(36613),
      wJ = ZB(3589),
      OJ = ZB(1979),
      YJ = ZB(1960),
      iJ = ZB(34220),
      pJ = ZB(1248),
      aJ = ZB(1507),
      HJ = ZB(1153);

    function MJ(BB) {
      let {
        controller: IB,
        minimap: ZB,
        children: TB
      } = BB;
      const oB = (0, aJ.h)(qJ, IB.getHudSnapshot()),
        [GB, vB] = (0, OB.useState)(IB.skills.getSnapshot().overallLevel);
      (0, aJ.d)(GZ, (BB => {
        vB(BB.overallLevel)
      }));
      const kB = (0, OB.useRef)(null);
      (0, aJ.d)(fZ, (BB => {
        ! function(BB, IB) {
          if (null === BB || "function" !== typeof BB.animate) return;
          const ZB = IB ? 1.35 : 1.15;
          BB.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${ZB})`
          }, {
            transform: "scale(1)"
          }], {
            duration: IB ? 320 : 160,
            easing: "ease-out"
          }), BB.classList.toggle("Receiving", !IB), IB && (BB.classList.remove("Shine"), BB.offsetWidth, BB.classList.add("Shine"))
        }(kB.current, BB)
      }));
      const {
        t: cB
      } = (0, pJ.G)(), {
        isTouchScreen: nB
      } = (0, QJ.o)(["isTouchScreen"]), [hB, zB] = (0, OB.useState)(null);
      return (0, wJ.j)(hB, ".SkyblockRightHud"), null !== oB || ZB ? (0, HJ.jsx)(sJ.h, {
        placement: "topRight",
        children: (0, HJ.jsxs)("div", {
          className: CJ()("SkyblockRightHud", {
            TouchScreen: nB
          }),
          children: [ZB, null !== oB && (0, HJ.jsxs)("div", {
            ref: zB,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in oB ? (0, HJ.jsx)("div", {
              className: "SkyblockHudHelp",
              children: oB.hudHelpText
            }) : (0, HJ.jsxs)(HJ.Fragment, {
              children: [(0, HJ.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, HJ.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, HJ.jsx)("strong", {
                    style: {
                      color: JB.P.cyanUiText
                    },
                    children: cB(oB.hudZoneNameKey)
                  }), null !== GB && (0, HJ.jsx)("span", {
                    style: {
                      color: JB.P.goldUiText
                    },
                    children: cB("skyblockGame:level", {
                      level: (0, iJ.e)(GB)
                    })
                  })]
                }), (0, HJ.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: kB,
                  children: [(0, HJ.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, HJ.jsx)(OJ.e, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, iJ.e)(oB.hudPurseCoins)]
                })]
              }), oB.hudClockText.length > 0 && (0, HJ.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, HJ.jsx)(YJ.e, {
                  text: oB.hudClockText
                })
              })]
            }), TB, "hudZoneNameKey" in oB && (0, HJ.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function jJ(BB) {
      let {
        icon: IB
      } = BB;
      const ZB = (0, OB.useCallback)((BB => {
        null === BB || void 0 === BB || BB.replaceChildren(bI(IB))
      }), [IB]);
      return (0, HJ.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: ZB
      })
    }

    function PJ(BB) {
      let {
        controller: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)();
      return (0, HJ.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: IB.display.mountPlayer,
        title: ZB("skyblockGame:mapYouAreHere"),
        children: (0, HJ.jsx)(jJ, {
          icon: "player"
        })
      })
    }
    const RJ = ZB(38600),
      rJ = Object.fromEntries(RJ.keys().map((BB => [BB.replace(/^\.\/(.*)\.png$/, "$1"), RJ(BB)])));

    function mJ(BB, IB) {
      var ZB;
      return null !== (ZB = rJ[BB]) && void 0 !== ZB ? ZB : rJ[IB]
    }

    function XJ(BB) {
      let {
        imageKey: IB,
        fallbackImageKey: ZB,
        geometryKey: TB,
        alt: JB,
        className: oB
      } = BB;
      const [GB, vB] = (0, OB.useState)((() => function(BB, IB) {
        return [{
          id: 0,
          imageKey: BB,
          geometryKey: IB,
          phase: "shown"
        }]
      }(IB, TB))), kB = function(BB, IB, ZB) {
        const TB = BB[BB.length - 1];
        if (TB.imageKey === IB && TB.geometryKey === ZB) return BB;
        const JB = {
          id: TB.id + 1,
          imageKey: IB,
          geometryKey: ZB,
          phase: "entering"
        };
        return TB.geometryKey === ZB ? [{
          ...TB,
          phase: "leaving"
        }, JB] : [JB]
      }(GB, IB, TB);
      return kB !== GB && vB(kB), (0, HJ.jsx)(HJ.Fragment, {
        children: kB.map((BB => (0, HJ.jsx)("img", {
          className: CJ()("SkyblockMapTerrainImage", oB, {
            Entering: "entering" === BB.phase,
            Leaving: "leaving" === BB.phase
          }),
          src: mJ(BB.imageKey, ZB),
          alt: "leaving" === BB.phase ? "" : JB,
          onAnimationEnd: () => {
            vB((IB => function(BB, IB) {
              return BB.flatMap((BB => BB.id !== IB ? [BB] : "leaving" === BB.phase ? [] : [{
                ...BB,
                phase: "shown"
              }]))
            }(IB, BB.id)))
          }
        }, BB.id)))
      })
    }
    var LJ = ZB(4714),
      eJ = ZB(1516);

    function uJ(BB) {
      if ("Tab" !== BB.key) return;
      const IB = Array.from(BB.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        ZB = IB.indexOf(document.activeElement);
      var TB;
      if (BB.shiftKey && ZB <= 0) BB.preventDefault(), null === (TB = IB.at(-1)) || void 0 === TB || TB.focus();
      else if (!BB.shiftKey && (-1 === ZB || ZB === IB.length - 1)) {
        var JB;
        BB.preventDefault(), null === (JB = IB[0]) || void 0 === JB || JB.focus()
      }
    }

    function fJ() {
      const BB = (0, OB.useRef)(null);
      return (0, OB.useCallback)((IB => {
        var ZB;
        IB ? (BB.current = document.activeElement, IB.focus()) : null === (ZB = BB.current) || void 0 === ZB || ZB.focus()
      }), [])
    }

    function lJ(BB) {
      let {
        percent: IB,
        label: ZB,
        levelUpToken: TB,
        colour: JB
      } = BB;
      return (0, HJ.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": ZB,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": IB,
        "aria-valuetext": ZB,
        children: [(0, HJ.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${IB/100})`
          }
        }), null !== TB && void 0 !== TB && (0, HJ.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": JB
          }
        }, TB)]
      })
    }

    function AJ(BB) {
      let {
        mount: IB
      } = BB;
      return (0, HJ.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: IB,
        hidden: !0,
        children: (0, HJ.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, HJ.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, HJ.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function tJ(BB, IB, ZB, TB) {
      (0, OB.useLayoutEffect)((() => {
        const JB = BB.current;
        if (!ZB || null === IB || void 0 === IB || !IB.local || !JB) return;
        const oB = Array.from(JB.querySelectorAll(".SkyblockMapNode")),
          GB = [...IB.points, ...IB.portals],
          vB = () => {
            const BB = JB.clientWidth,
              ZB = JB.clientHeight,
              vB = oB.map(((JB, oB) => {
                const vB = GB[oB];
                return {
                  id: vB.id,
                  portal: oB >= IB.points.length,
                  x: vB.position[0] * BB / 100,
                  y: vB.position[1] * ZB / 100,
                  width: JB.offsetWidth / TB,
                  height: JB.offsetHeight / TB
                }
              })),
              kB = new Map(GB.map(((BB, IB) => [BB.id, oB[IB]])));
            for (const IB of function(BB, IB, ZB) {
                const TB = [],
                  JB = [...BB].sort(((BB, IB) => Number(IB.portal) - Number(BB.portal) || BB.id.localeCompare(IB.id)));
                for (const oB of JB) {
                  const BB = BB => Math.max(oB.width / 2, Math.min(IB - oB.width / 2, BB)),
                    JB = BB => Math.max(oB.height / 2, Math.min(ZB - oB.height / 2, BB)),
                    GB = [BB(oB.x)],
                    vB = [JB(oB.y)];
                  for (const IB of TB) GB.push(BB(IB.x - (IB.width + oB.width) / 2 - 4), BB(IB.x + (IB.width + oB.width) / 2 + 4)), vB.push(JB(IB.y - (IB.height + oB.height) / 2 - 4), JB(IB.y + (IB.height + oB.height) / 2 + 4));
                  let kB = {
                      ...oB,
                      x: GB[0],
                      y: vB[0]
                    },
                    cB = 1 / 0,
                    nB = 1 / 0;
                  for (const IB of new Set(GB))
                    for (const BB of new Set(vB)) {
                      let ZB = 0;
                      for (const GB of TB) ZB += Math.max(0, (oB.width + GB.width) / 2 + 4 - Math.abs(IB - GB.x)) * Math.max(0, (oB.height + GB.height) / 2 + 4 - Math.abs(BB - GB.y));
                      const JB = (IB - oB.x) ** 2 + (BB - oB.y) ** 2;
                      (ZB < cB || ZB === cB && JB < nB) && (kB = {
                        ...oB,
                        x: IB,
                        y: BB
                      }, cB = ZB, nB = JB)
                    }
                  TB.push(kB)
                }
                return TB
              }(vB, BB, ZB)) {
              const BB = kB.get(IB.id);
              BB.style.left = `${IB.x}px`, BB.style.top = `${IB.y}px`
            }
          };
        vB();
        const kB = new ResizeObserver(vB);
        kB.observe(JB);
        for (const BB of oB) kB.observe(BB);
        return () => {
          kB.disconnect()
        }
      }), [BB, IB, ZB, TB])
    }
    const bJ = {
        zoom: 1,
        x: 0,
        y: 0
      },
      xJ = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function EJ(BB, IB, ZB) {
      return Math.min(ZB, Math.max(IB, BB))
    }

    function DJ(BB, IB, ZB) {
      const TB = Math.min(1, ZB * IB / BB),
        JB = Math.min(1, BB / (ZB * IB));
      return {
        x0: (1 - TB) / 2,
        y0: (1 - JB) / 2,
        x1: (1 + TB) / 2,
        y1: (1 + JB) / 2
      }
    }

    function KJ(BB, IB, ZB, TB) {
      const JB = IB * (TB - ZB);
      if (JB <= 1) return .5 - IB * (ZB + TB) / 2;
      const oB = .45 * Math.min(1, JB - 1);
      return EJ(BB, 1 - IB * TB - oB, oB - IB * ZB)
    }

    function VJ(BB, IB) {
      const ZB = EJ(BB.zoom, 1, 12);
      return {
        zoom: ZB,
        x: KJ(BB.x, ZB, IB.x0, IB.x1),
        y: KJ(BB.y, ZB, IB.y0, IB.y1)
      }
    }

    function SJ(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : xJ;
      const oB = EJ(BB.zoom * IB, 1, 12),
        GB = oB / BB.zoom;
      return VJ({
        zoom: oB,
        x: ZB - (ZB - BB.x) * GB,
        y: TB - (TB - BB.y) * GB
      }, JB)
    }

    function Bo(BB, IB, ZB, TB) {
      const [JB, oB] = (0, OB.useState)(bJ);
      (0, OB.useEffect)((() => {
        oB(bJ)
      }), [ZB]), (0, OB.useEffect)((() => {
        const ZB = BB.current;
        if (!IB || !ZB) return;
        const JB = () => DJ(ZB.clientWidth, ZB.clientHeight, TB),
          GB = BB => {
            const IB = ZB.getBoundingClientRect();
            return {
              x: (BB.clientX - IB.left) / IB.width,
              y: (BB.clientY - IB.top) / IB.height
            }
          },
          vB = new Map;
        let kB = {
            x: 0,
            y: 0
          },
          cB = !1,
          nB = 0;
        const hB = BB => {
            BB.preventDefault();
            const IB = BB.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * BB.deltaY : BB.deltaY,
              ZB = GB(BB);
            oB((BB => SJ(BB, Math.exp(.0015 * -IB), ZB.x, ZB.y, JB())))
          },
          zB = BB => {
            "mouse" === BB.pointerType && 0 !== BB.button || (vB.set(BB.pointerId, GB(BB)), 1 === vB.size && (kB = {
              x: BB.clientX,
              y: BB.clientY
            }, cB = !1), nB = 0)
          },
          FB = BB => {
            const IB = vB.get(BB.pointerId);
            if (!IB) return;
            const TB = GB(BB);
            if (vB.set(BB.pointerId, TB), 2 === vB.size) {
              const [BB, IB] = [...vB.values()], ZB = Math.hypot(BB.x - IB.x, BB.y - IB.y);
              if (nB > 0) {
                const TB = ZB / nB;
                oB((ZB => SJ(ZB, TB, (BB.x + IB.x) / 2, (BB.y + IB.y) / 2, JB())))
              }
              return nB = ZB, void(cB = !0)
            }!cB && Math.hypot(BB.clientX - kB.x, BB.clientY - kB.y) < 4 || (cB || (cB = !0, ZB.setPointerCapture(BB.pointerId)), oB((BB => function(BB, IB, ZB) {
              let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : xJ;
              return VJ({
                zoom: BB.zoom,
                x: BB.x + IB,
                y: BB.y + ZB
              }, TB)
            }(BB, TB.x - IB.x, TB.y - IB.y, JB()))))
          },
          NB = BB => {
            vB.delete(BB.pointerId), nB = 0
          },
          gB = BB => {
            cB && (BB.stopPropagation(), BB.preventDefault(), cB = !1)
          },
          qB = new ResizeObserver((() => {
            oB((BB => VJ(BB, JB())))
          }));
        return qB.observe(ZB), ZB.addEventListener("wheel", hB, {
          passive: !1
        }), ZB.addEventListener("pointerdown", zB), ZB.addEventListener("pointermove", FB), ZB.addEventListener("pointerup", NB), ZB.addEventListener("pointercancel", NB), ZB.addEventListener("click", gB, !0), () => {
          qB.disconnect(), ZB.removeEventListener("wheel", hB), ZB.removeEventListener("pointerdown", zB), ZB.removeEventListener("pointermove", FB), ZB.removeEventListener("pointerup", NB), ZB.removeEventListener("pointercancel", NB), ZB.removeEventListener("click", gB, !0)
        }
      }), [BB, IB, ZB, TB]);
      return {
        view: JB,
        zoomBy: IB => {
          const ZB = BB.current;
          ZB && oB((BB => SJ(BB, IB, .5, .5, DJ(ZB.clientWidth, ZB.clientHeight, TB))))
        }
      }
    }

    function Io(BB) {
      var IB, ZB, TB, JB;
      let {
        controller: oB,
        navigation: GB
      } = BB;
      const vB = (0, aJ.h)(zB, oB.getSnapshot()),
        {
          t: kB
        } = (0, pJ.G)(),
        cB = fJ(),
        nB = vB.presentation,
        hB = (0, OB.useRef)(null),
        FB = (0, OB.useRef)(null),
        NB = Boolean(vB.open && (null === nB || void 0 === nB ? void 0 : nB.local) && nB.background),
        gB = Bo(hB, NB, `${vB.open}|${vB.tab}|${null===nB||void 0===nB||null===(IB=nB.background)||void 0===IB?void 0:IB.geometryKey}`, null !== (ZB = null === nB || void 0 === nB || null === (TB = nB.background) || void 0 === TB ? void 0 : TB.ratio) && void 0 !== ZB ? ZB : 2);
      if (tJ(FB, nB, vB.open, gB.view.zoom), !nB || !vB.open) return null;
      const qB = nB.local ? nB.background : null,
        yB = {
          "--map-ratio": String(null !== (JB = null === qB || void 0 === qB ? void 0 : qB.ratio) && void 0 !== JB ? JB : 2),
          backgroundColor: null === qB || void 0 === qB ? void 0 : qB.colour
        },
        UB = {
          "--map-zoom": String(gB.view.zoom),
          transform: `translate(${100*gB.view.x}%, ${100*gB.view.y}%) scale(${gB.view.zoom})`
        };
      return (0, HJ.jsx)(LJ.c, {
        show: vB.open,
        close: oB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: cB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, HJ.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockMapTitle",
                children: kB("skyblockGame:map")
              }), nB.minimap && (0, HJ.jsx)("p", {
                children: nB.minimap.caption
              })]
            }), (0, HJ.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((BB => (0, HJ.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": BB === vB.tab ? "true" : void 0,
                className: CJ()({
                  Selected: BB === vB.tab
                }),
                "aria-pressed": BB === vB.tab,
                onClick: () => {
                  oB.selectTab(BB)
                },
                children: kB("local" === BB ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, BB)))
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              onClick: oB.dismiss
            })]
          }), (0, HJ.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, HJ.jsxs)("div", {
              ref: hB,
              className: CJ()("SkyblockMapCanvas", {
                Local: nB.local,
                Overview: !nB.local,
                Zoomed: gB.view.zoom > 1
              }),
              style: yB,
              children: [(0, HJ.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: NB ? UB : void 0,
                children: (0, HJ.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: FB,
                  children: [qB && (0, HJ.jsx)(XJ, {
                    className: "SkyblockMapTerrain",
                    imageKey: qB.imageKey,
                    fallbackImageKey: qB.fallbackImageKey,
                    geometryKey: qB.geometryKey,
                    alt: qB.label
                  }), nB.local && (0, HJ.jsx)(AJ, {
                    mount: GB.display.mountMapSearchArea
                  }), !nB.local && (0, HJ.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: nB.connections.map((BB => (0, HJ.jsx)("line", {
                      className: CJ()({
                        Explored: BB.explored
                      }),
                      x1: BB.start[0],
                      y1: BB.start[1],
                      x2: BB.end[0],
                      y2: BB.end[1]
                    }, BB.id)))
                  }), nB.points.map((BB => {
                    const IB = !nB.local && BB.thumbnail ? rJ[BB.thumbnail] : void 0;
                    return (0, HJ.jsxs)("div", {
                      className: CJ()("SkyblockMapNode", {
                        Current: BB.current
                      }),
                      style: {
                        left: `${BB.position[0]}%`,
                        top: `${BB.position[1]}%`
                      },
                      children: [(0, HJ.jsxs)(eJ.g, {
                        className: CJ()("SkyblockMapPin", {
                          Unknown: !BB.visited,
                          Current: BB.current
                        }),
                        disabled: vB.pending,
                        onClick: () => {
                          oB.travel(BB.travelKind, BB.travelId)
                        },
                        children: [IB && (0, HJ.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: IB,
                          alt: ""
                        }), !IB && (0, HJ.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, HJ.jsx)(jJ, {
                            icon: BB.icon
                          })
                        }), (0, HJ.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: BB.name
                        })]
                      }), BB.current && (0, HJ.jsx)("span", {
                        className: CJ()("SkyblockMapHereBadge", {
                          Above: BB.position[1] > 50
                        }),
                        children: kB("skyblockGame:mapYouAreHere")
                      })]
                    }, BB.id)
                  })), nB.portals.map((BB => (0, HJ.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${BB.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${BB.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, HJ.jsxs)(eJ.g, {
                      className: "SkyblockMapPin",
                      disabled: vB.pending,
                      onClick: () => {
                        oB.travel(BB.travelKind, BB.travelId)
                      },
                      children: [(0, HJ.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: BB.colour
                        },
                        "aria-hidden": "true",
                        children: (0, HJ.jsx)(jJ, {
                          icon: BB.icon
                        })
                      }), (0, HJ.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: BB.name
                      })]
                    })
                  }, BB.id))), nB.local && (0, HJ.jsx)(PJ, {
                    controller: GB
                  })]
                })
              }), NB && (0, HJ.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, HJ.jsx)("button", {
                  type: "button",
                  "aria-label": kB("skyblockGame:mapZoomIn"),
                  disabled: gB.view.zoom >= 12,
                  onClick: () => {
                    gB.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, HJ.jsx)("button", {
                  type: "button",
                  "aria-label": kB("skyblockGame:mapZoomOut"),
                  disabled: gB.view.zoom <= 1,
                  onClick: () => {
                    gB.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, HJ.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: vB.feedback
              })]
            })
          }), (0, HJ.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [nB.progress && (0, HJ.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, HJ.jsx)("span", {
                children: nB.progress
              }), (0, HJ.jsx)(lJ, {
                percent: nB.percent,
                label: nB.progress
              })]
            }), nB.noLandmarks && (0, HJ.jsx)("span", {
              children: kB("skyblockGame:mapNoLandmarks")
            }), nB.canTravel && (0, HJ.jsx)("span", {
              className: "SkyblockMapHint",
              children: kB("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function Zo(BB) {
      let {
        view: IB,
        controller: ZB,
        navigation: TB
      } = BB;
      const {
        t: JB
      } = (0, pJ.G)(), {
        isTouchScreen: oB
      } = (0, QJ.o)(["isTouchScreen"]);
      return (0, HJ.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": JB("skyblockGame:mapLocal"),
        children: [oB && (0, HJ.jsx)(eJ.g, {
          className: "SkyblockMinimapOpen",
          onClick: ZB.showLocal,
          children: JB("skyblockGame:map")
        }), (0, HJ.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: IB.colour
          },
          children: [(0, HJ.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: TB.display.mountTerrain,
            style: {
              width: IB.width,
              height: IB.height
            },
            children: [(0, HJ.jsx)(XJ, {
              imageKey: IB.imageKey,
              fallbackImageKey: IB.fallbackImageKey,
              geometryKey: IB.geometryKey,
              alt: IB.label
            }), (0, HJ.jsx)(AJ, {
              mount: TB.display.mountMinimapSearchArea
            }), IB.markers.map((BB => (0, HJ.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${BB.position[0]}%`,
                top: `${BB.position[1]}%`,
                color: BB.colour
              },
              title: BB.name,
              children: (0, HJ.jsx)(jJ, {
                icon: BB.icon
              })
            }, BB.id)))]
          }), (0, HJ.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: JB("skyblockGame:mapYouAreHere"),
            children: (0, HJ.jsx)(jJ, {
              icon: "player"
            })
          })]
        }), (0, HJ.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: IB.caption
        })]
      })
    }

    function To(BB) {
      let {
        controller: IB
      } = BB;
      return (0, HJ.jsxs)("div", {
        className: "SkyblockCompass",
        ref: IB.display.mountCompass,
        children: [(0, HJ.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, HJ.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, HJ.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function Jo(BB) {
      let {
        controller: IB,
        surface: ZB
      } = BB;
      const {
        t: TB
      } = (0, pJ.G)(), JB = (0, aJ.h)(GZ, IB.getSnapshot()), oB = fJ();
      return JB.enabled ? (0, HJ.jsxs)(HJ.Fragment, {
        children: ["hud" === ZB && (0, HJ.jsx)(sJ.h, {
          placement: "statBars",
          children: JB.hud && (0, HJ.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": JB.hud.colour
            },
            children: [(0, HJ.jsx)(lJ, {
              percent: JB.hud.skill.percent,
              label: JB.hud.skill.xp,
              levelUpToken: JB.hud.levelUpToken,
              colour: JB.hud.colour
            }), (0, HJ.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, HJ.jsxs)("span", {
                children: [JB.hud.skill.label, " \xb7 ", JB.hud.skill.level]
              }), (0, HJ.jsx)("span", {
                children: JB.hud.gain
              })]
            })]
          })
        }), "hud" === ZB && (0, HJ.jsx)(sJ.h, {
          children: JB.hud && (0, HJ.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, HJ.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, HJ.jsx)("strong", {
                children: JB.hud.skill.label
              }), (0, HJ.jsx)("span", {
                children: JB.hud.gain
              })]
            }), (0, HJ.jsx)(lJ, {
              percent: JB.hud.skill.percent,
              label: JB.hud.skill.xp,
              levelUpToken: JB.hud.levelUpToken,
              colour: JB.hud.colour
            }), (0, HJ.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, HJ.jsx)("span", {
                children: JB.hud.skill.level
              }), (0, HJ.jsx)("span", {
                children: JB.hud.skill.xp
              })]
            })]
          })
        }), "menu" === ZB && (0, HJ.jsx)(LJ.c, {
          show: JB.open,
          close: IB.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, HJ.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: oB,
            onKeyDown: uJ,
            children: [(0, HJ.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, HJ.jsxs)("div", {
                children: [(0, HJ.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: TB("skyblockGame:skills")
                }), (0, HJ.jsx)("p", {
                  children: TB("skyblockGame:skillsIntro")
                })]
              }), (0, HJ.jsx)(eJ.l, {
                padIgnore: !0,
                onClick: IB.dismiss
              })]
            }), (0, HJ.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, HJ.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: JB.skills.map((BB => (0, HJ.jsxs)(eJ.g, {
                  className: CJ()("SkyblockSkillCard", {
                    Selected: BB.selected
                  }),
                  ariaPressed: BB.selected,
                  onClick: () => {
                    IB.select(BB.id)
                  },
                  children: [(0, HJ.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, HJ.jsx)(OJ.e, {
                      itemName: BB.icon,
                      amount: 0
                    })
                  }), (0, HJ.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, HJ.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, HJ.jsx)("strong", {
                        children: BB.label
                      }), (0, HJ.jsx)("span", {
                        children: BB.level
                      })]
                    }), (0, HJ.jsx)(lJ, {
                      percent: BB.percent,
                      label: `${BB.label}: ${BB.xp}`
                    }), (0, HJ.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: BB.xp
                    })]
                  })]
                }, BB.id)))
              }), JB.detail && (0, HJ.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, HJ.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, HJ.jsx)(OJ.e, {
                    itemName: JB.detail.icon,
                    amount: 0
                  })
                }), (0, HJ.jsx)("h3", {
                  children: JB.detail.label
                }), (0, HJ.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: JB.detail.level
                }), (0, HJ.jsx)("p", {
                  children: JB.detail.description
                }), (0, HJ.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, HJ.jsx)("strong", {
                    children: TB("skyblockGame:currentBenefit")
                  }), (0, HJ.jsx)("span", {
                    children: JB.detail.benefit
                  })]
                }), (0, HJ.jsx)(lJ, {
                  percent: JB.detail.percent,
                  label: JB.detail.xp
                }), (0, HJ.jsx)("p", {
                  children: JB.detail.xp
                }), (0, HJ.jsx)("h4", {
                  children: TB("skyblockGame:earnXp")
                }), (0, HJ.jsx)("ul", {
                  children: JB.detail.sources.map((BB => (0, HJ.jsx)("li", {
                    children: BB
                  }, BB)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var oo = ZB(1421),
      Go = ZB(5007),
      vo = ZB(342);

    function ko(BB) {
      let {
        item: IB
      } = BB;
      return (0, HJ.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, HJ.jsx)(OJ.e, {
          itemName: IB,
          amount: 0
        })
      })
    }

    function co(BB) {
      let {
        name: IB,
        percent: ZB,
        progress: TB
      } = BB;
      return (0, HJ.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, HJ.jsx)(lJ, {
          percent: ZB,
          label: `${(0,vo.Ab)(IB)}: ${TB}`
        }), (0, HJ.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: TB
        })]
      })
    }

    function no(BB) {
      let {
        subquests: IB,
        showDescriptions: ZB = !1
      } = BB;
      return (0, HJ.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: IB.map((BB => {
          const IB = ZB && "completed" === BB.status,
            TB = (0, HJ.jsxs)("li", {
              className: CJ()("SkyblockQuestStep", BB.status, {
                JustFinished: BB.justFinished,
                JustUnlocked: BB.justUnlocked
              }),
              tabIndex: IB ? 0 : void 0,
              children: [null !== BB.iconItem && (0, HJ.jsx)(ko, {
                item: BB.iconItem
              }), null === BB.iconItem && (0, HJ.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === BB.status ? "\u2713" : "skipped" === BB.status ? "\u2212" : "\u25cb"
              }), (0, HJ.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, HJ.jsx)("strong", {
                  children: (0, HJ.jsx)(Go.c, {
                    text: BB.name
                  })
                }), ZB && !IB && (0, HJ.jsx)("span", {
                  children: (0, HJ.jsx)(Go.c, {
                    text: BB.description
                  })
                }), null !== BB.barPercent && (0, HJ.jsx)(co, {
                  name: BB.name,
                  percent: BB.barPercent,
                  progress: BB.progress
                }), null === BB.barPercent && !IB && (0, HJ.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: BB.statusLabel
                })]
              })]
            }, BB.id);
          return IB ? (0, HJ.jsx)(oo.e, {
            delayShow: 200,
            tooltipInner: (0, HJ.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, HJ.jsx)("span", {
                children: (0, HJ.jsx)(Go.c, {
                  text: BB.description
                })
              }), (0, HJ.jsx)("strong", {
                children: BB.statusLabel
              })]
            }),
            children: TB
          }, BB.id) : TB
        }))
      })
    }

    function ho(BB) {
      let {
        quest: IB,
        select: ZB
      } = BB;
      const {
        t: TB
      } = (0, pJ.G)(), JB = IB.focusStep;
      return (0, HJ.jsxs)(eJ.g, {
        className: CJ()("SkyblockQuestCard", {
          Selected: IB.selected,
          Tracked: IB.tracked
        }),
        onClick: () => {
          ZB(IB.id)
        },
        children: [(0, HJ.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, HJ.jsx)("strong", {
            children: (0, HJ.jsx)(Go.c, {
              text: IB.name
            })
          }), IB.tracked && (0, HJ.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: TB("skyblockGame:currentQuest")
          })]
        }), JB && (0, HJ.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== JB.iconItem && (0, HJ.jsx)(ko, {
            item: JB.iconItem
          }), (0, HJ.jsx)(co, {
            name: JB.name,
            percent: JB.barPercent,
            progress: JB.progress
          })]
        }), (0, HJ.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: IB.progress
        })]
      })
    }

    function zo(BB) {
      let {
        controller: IB,
        surface: ZB
      } = BB;
      const TB = (0, aJ.h)(nZ, IB.getSnapshot()),
        {
          t: JB
        } = (0, pJ.G)(),
        oB = fJ();
      return TB.enabled ? (0, HJ.jsxs)(HJ.Fragment, {
        children: ["hud" === ZB && (0, HJ.jsx)(HJ.Fragment, {
          children: TB.tracked && (0, HJ.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: cZ,
            children: (0, HJ.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [TB.trackedStepPulse > 0 && (0, HJ.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, TB.trackedStepPulse), (0, HJ.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: JB("skyblockGame:currentQuest")
              }), (0, HJ.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, HJ.jsx)("strong", {
                  children: (0, HJ.jsx)(Go.c, {
                    text: TB.tracked.name
                  })
                }), null !== TB.tracked.clock && (0, HJ.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: TB.tracked.clock
                })]
              }), (0, HJ.jsx)(no, {
                subquests: TB.tracked.subquests
              })]
            })
          })
        }), "menu" === ZB && (0, HJ.jsx)(LJ.c, {
          show: TB.open,
          close: IB.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, HJ.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: oB,
            onKeyDown: uJ,
            children: [(0, HJ.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, HJ.jsx)("div", {
                children: (0, HJ.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: JB("skyblockGame:quests")
                })
              }), (0, HJ.jsx)(eJ.l, {
                padIgnore: !0,
                onClick: IB.dismiss
              })]
            }), (0, HJ.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, HJ.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, HJ.jsx)("h3", {
                  children: JB("skyblockGame:current")
                }), 0 === TB.active.length && (0, HJ.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: JB("skyblockGame:noActiveQuests")
                }), TB.active.map((BB => (0, HJ.jsx)(ho, {
                  quest: BB,
                  select: IB.select
                }, BB.id))), (0, HJ.jsx)("h3", {
                  children: (0, HJ.jsxs)("button", {
                    type: "button",
                    className: CJ()("SkyblockQuestSectionToggle", {
                      Expanded: TB.completedExpanded
                    }),
                    "aria-expanded": TB.completedExpanded,
                    onClick: IB.toggleCompleted,
                    children: [(0, HJ.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), JB("skyblockGame:completed"), (0, HJ.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: TB.completed.length
                    })]
                  })
                }), TB.completedExpanded && 0 === TB.completed.length && (0, HJ.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: JB("skyblockGame:noCompletedQuests")
                }), TB.completedExpanded && TB.completed.map((BB => (0, HJ.jsx)(ho, {
                  quest: BB,
                  select: IB.select
                }, BB.id)))]
              }), TB.detail && (0, HJ.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [TB.detail.completed && (0, HJ.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: JB("skyblockGame:completedQuest")
                }), (0, HJ.jsx)("h3", {
                  children: (0, HJ.jsx)(Go.c, {
                    text: TB.detail.name
                  })
                }), (0, HJ.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, HJ.jsx)(Go.c, {
                    text: TB.detail.description
                  })
                }), (0, HJ.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [TB.detail.progress, null !== TB.detail.clock && (0, HJ.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: TB.detail.clock
                  })]
                }), (0, HJ.jsx)(no, {
                  subquests: TB.detail.subquests,
                  showDescriptions: !0
                }), TB.detail.tracked && (0, HJ.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: TB.detail.trackLabel
                }), !TB.detail.completed && !TB.detail.tracked && (0, HJ.jsx)(eJ.p, {
                  onClick: IB.trackSelected,
                  disabled: !TB.detail.canTrack,
                  children: TB.detail.trackLabel
                }), TB.detail.canViewDialogue && (0, HJ.jsx)(eJ.g, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: IB.viewDialogue,
                  children: JB("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var Fo = ZB(1102),
      No = ZB(2763);

    function go(BB, IB, ZB, TB, JB) {
      const oB = BB => "linear" === JB ? BB : {
          ET: JB,
          point: BB
        },
        GB = {};
      for (const [vB, kB] of TB)
        for (const [IB, ZB] of Object.entries(BB(vB, kB, oB))) GB[IB] ??= {
          timeline: []
        }, GB[IB].timeline.push(ZB);
      return {
        lT: IB,
        loop: ZB,
        tT: GB
      }
    }
    const qo = .547,
      yo = .022,
      Uo = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      Wo = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function Co(BB, IB, ZB) {
      const {
        drop: TB = 0,
        shift: JB = 0,
        torso: oB = 0,
        nod: GB = 0,
        tilt: vB = 0,
        legs: kB = [0, 0],
        arms: cB = 0,
        spread: nB = 0
      } = IB, hB = qo * Math.cos(oB) - yo * Math.sin(oB), zB = qo * Math.sin(oB) + yo * Math.cos(oB), FB = ZB([0, -TB, JB]);
      return {
        LowerBody: {
          timeFraction: BB,
          position: FB,
          rotation: ZB([0, 0, 0])
        },
        UpperBody: {
          timeFraction: BB,
          position: FB,
          rotation: ZB([oB, 0, vB])
        },
        HeadMesh: {
          timeFraction: BB,
          position: ZB([0, hB - qo - TB, zB - yo + JB]),
          rotation: ZB([oB + GB, 0, vB])
        },
        LegLeftMesh: {
          timeFraction: BB,
          rotation: ZB([kB[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: BB,
          rotation: ZB([kB[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: ZB([cB, 0, nB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: ZB([cB, 0, -nB])
        }
      }
    }

    function Qo(BB, IB, ZB) {
      return go(Co, BB, IB, ZB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function so(BB) {
      return "number" === typeof BB ? [BB, BB] : BB
    }

    function wo(BB, IB, ZB) {
      const {
        rise: TB = 0,
        shift: JB = 0,
        torso: oB = 0,
        twist: GB = 0,
        tilt: vB = 0,
        nod: kB = 0,
        cock: cB = 0,
        arms: nB = 0,
        spread: hB = 0
      } = IB, [zB, FB] = so(nB), [NB, gB] = so(hB);
      return {
        TorsoNode: {
          timeFraction: BB,
          position: ZB([0, TB, JB]),
          rotation: ZB([oB, GB, vB])
        },
        HeadMesh: {
          timeFraction: BB,
          rotation: ZB([kB, 0, cB])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: ZB([zB, 0, NB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: ZB([FB, 0, -gB])
        }
      }
    }
    const Oo = [1.0625, -1, 0];

    function Yo(BB) {
      return "number" === typeof BB ? [BB, BB] : BB
    }

    function io(BB, IB, ZB) {
      const {
        drop: TB = 0,
        shift: JB = 0,
        torso: oB = 0,
        tilt: GB = 0,
        nod: vB = 0,
        cock: kB = 0,
        legs: cB = [0, 0],
        arms: nB = 0,
        spread: hB = 0
      } = IB, [zB, FB] = Yo(nB), [NB, gB] = Yo(hB), qB = -oB, yB = -GB, [UB, WB, dB] = function(BB, IB) {
        const [ZB, TB, JB] = [-Oo[0], Oo[1], -Oo[2]], oB = ZB * Math.cos(IB) - TB * Math.sin(IB), GB = ZB * Math.sin(IB) + TB * Math.cos(IB);
        return [oB - ZB, -(GB * Math.cos(BB) - JB * Math.sin(BB) - TB), GB * Math.sin(BB) + JB * Math.cos(BB) - JB]
      }(qB, yB), CB = ZB([0, -TB, JB]);
      return {
        TorsoNode: {
          timeFraction: BB,
          position: ZB([UB, WB - TB, dB + JB]),
          rotation: ZB([qB, 0, yB])
        },
        HeadMesh: {
          timeFraction: BB,
          rotation: ZB([-vB, 0, -kB])
        },
        ArmLeftMesh: {
          timeFraction: BB,
          rotation: ZB([-zB, 0, -NB])
        },
        ArmRightMesh: {
          timeFraction: BB,
          rotation: ZB([-FB, 0, gB])
        },
        LegLeftMesh: {
          timeFraction: BB,
          position: CB,
          rotation: ZB([-cB[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: BB,
          position: CB,
          rotation: ZB([-cB[1], 0, 0])
        }
      }
    }
    var po = ZB(37194),
      ao = ZB(38504),
      Ho = ZB(38677);

    function Mo(BB, IB, ZB) {
      var TB, JB;
      const oB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return BB + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - BB) * ZB
        },
        [GB, vB] = null !== (TB = BB.legs) && void 0 !== TB ? TB : [0, 0],
        [kB, cB] = null !== (JB = IB.legs) && void 0 !== JB ? JB : [0, 0];
      return {
        drop: oB(BB.drop, IB.drop),
        shift: oB(BB.shift, IB.shift),
        torso: oB(BB.torso, IB.torso),
        nod: oB(BB.nod, IB.nod),
        tilt: oB(BB.tilt, IB.tilt),
        legs: [oB(GB, kB), oB(vB, cB)],
        arms: oB(BB.arms, IB.arms),
        spread: oB(BB.spread, IB.spread)
      }
    }
    const jo = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      Po = Qo(4400, !0, [
        [0, jo],
        [.16, {
          ...jo,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, jo],
        [.44, {
          ...jo,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, Mo(jo, Uo, .7)],
        [.66, Mo(jo, Uo, .78)],
        [.74, Mo(jo, Wo, .65)],
        [.86, {
          ...jo,
          drop: .14
        }],
        [1, jo]
      ], "catmull-rom-spline"),
      Ro = {
        ...jo,
        drop: .14,
        torso: .3,
        spread: .4
      },
      ro = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      mo = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      Xo = {
        caveGolem: Po,
        magmaGolem: Qo(3600, !0, [
          [0, Ro],
          [.12, {
            ...Ro,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...Ro,
            tilt: -.08
          }],
          [.4, {
            ...Ro,
            tilt: .06,
            drop: .11
          }],
          [.52, Mo(Ro, Uo, .9)],
          [.62, Mo(Ro, Wo, .8)],
          [.7, Mo(Ro, Wo, .45)],
          [.78, Mo(Ro, Wo, .85)],
          [.9, {
            ...Ro,
            drop: .17
          }],
          [1, Ro]
        ], "catmull-rom-spline"),
        frostWraith: function(BB, IB, ZB) {
          return go(wo, BB, IB, ZB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, ro],
          [.14, {
            ...ro,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...ro,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...ro,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...ro,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...ro,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...ro,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...ro,
            rise: .16,
            tilt: -.04
          }],
          [1, ro]
        ], "catmull-rom-spline"),
        tikiTerror: function(BB, IB, ZB) {
          return go(io, BB, IB, ZB, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, mo],
          [.16, {
            ...mo,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, mo],
          [.44, {
            ...mo,
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
            ...mo,
            drop: .1
          }],
          [1, mo]
        ], "catmull-rom-spline")
      },
      Lo = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      eo = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      uo = Object.fromEntries(Object.entries(Xo).map((BB => {
        let [IB, ZB] = BB;
        return [IB, (0, Ho.e)((0, po.d)(ZB), IB)]
      })));

    function fo(BB) {
      const IB = function(BB) {
        var IB;
        const ZB = (0, ao.c)(BB).poseRig;
        return null !== (IB = eo[BB]) && void 0 !== IB ? IB : void 0 === ZB ? null : Lo[ZB]
      }(BB);
      return null === IB ? null : uo[IB]
    }

    function Ao(BB) {
      return {
        "--difficulty-colour": BB
      }
    }
    const to = (0, OB.lazy)((() => (0, No.b)(ZB.e(203).then((() => ZB(41550))), (BB => BB.MobPreview))));

    function bo(BB) {
      var IB, ZB, TB;
      let {
        picker: JB,
        controller: oB
      } = BB;
      const {
        t: GB
      } = (0, pJ.G)(), vB = fJ(), {
        page: kB
      } = JB;
      return (0, HJ.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: vB,
        onKeyDown: BB => {
          "ArrowLeft" === BB.key ? (BB.preventDefault(), BB.stopPropagation(), oB.previous()) : "ArrowRight" === BB.key ? (BB.preventDefault(), BB.stopPropagation(), oB.next()) : uJ(BB)
        },
        style: Ao(kB.colour),
        children: [(0, HJ.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, HJ.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: JB.dungeonName
          }), (0, HJ.jsx)(eJ.l, {
            padIgnore: !0,
            onClick: oB.dismiss
          })]
        }), (0, HJ.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, HJ.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, HJ.jsx)(eJ.g, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !JB.canPrevious,
              onClick: oB.previous,
              children: (0, HJ.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, HJ.jsx)(Fo.d, {
                  name: "angle-up"
                })
              })
            }), (0, HJ.jsxs)("div", {
              className: CJ()("SkyblockBossPickerBoss", {
                Locked: !kB.unlocked
              }),
              children: [null !== kB.bossMobType && (0, HJ.jsx)(OB.Suspense, {
                fallback: (0, HJ.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, HJ.jsx)(to, {
                  className: "SkyblockBossPickerModel",
                  mobType: kB.bossMobType,
                  variation: kB.bossMobVariation,
                  animation: null !== (IB = fo(kB.bossMobType)) && void 0 !== IB ? IB : void 0
                })
              }), null === kB.bossMobType && (0, HJ.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, HJ.jsx)(eJ.g, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !JB.canNext,
              onClick: oB.next,
              children: (0, HJ.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, HJ.jsx)(Fo.d, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, HJ.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [kB.beaten && (0, HJ.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), kB.label]
            }), (0, HJ.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (ZB = kB.bossName) && void 0 !== ZB ? ZB : "???"
            }), (0, HJ.jsxs)("span", {
              className: CJ()("SkyblockBossPickerRecord", {
                Locked: null !== kB.lockedHint
              }),
              children: [null !== kB.lockedHintHighlight && (0, HJ.jsxs)(HJ.Fragment, {
                children: [kB.lockedHintHighlight.before, (0, HJ.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: Ao(kB.lockedHintHighlight.colour),
                  children: [null !== kB.lockedHintHighlight.icon && (0, HJ.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, HJ.jsx)(OJ.e, {
                      itemName: kB.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), kB.lockedHintHighlight.name]
                }), kB.lockedHintHighlight.after]
              }), null === kB.lockedHintHighlight && (null !== (TB = kB.lockedHint) && void 0 !== TB ? TB : kB.summary)]
            })]
          }), (0, HJ.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: JB.pages.map((BB => (0, HJ.jsx)("span", {
              className: CJ()("SkyblockBossPickerDot", {
                Current: BB.current,
                Locked: !BB.unlocked
              }),
              style: Ao(BB.colour)
            }, BB.difficulty)))
          }), (0, HJ.jsx)(eJ.s, {
            className: "SkyblockBossPickerFight",
            disabled: !kB.unlocked,
            onClick: oB.enter,
            children: GB("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function xo(BB) {
      let {
        dungeon: IB,
        select: ZB
      } = BB;
      return (0, HJ.jsxs)(eJ.g, {
        className: CJ()("SkyblockDungeonCard", {
          Selected: IB.selected
        }),
        onClick: () => {
          ZB(IB.id)
        },
        children: [(0, HJ.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, HJ.jsx)("strong", {
            children: IB.name
          }), (0, HJ.jsx)("span", {
            children: IB.beatenSummary
          })]
        }), (0, HJ.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: IB.difficulties.map((BB => (0, HJ.jsxs)("span", {
            className: CJ()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: BB.beaten
            }),
            style: Ao(BB.colour),
            title: BB.summary,
            children: [BB.beaten && (0, HJ.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), BB.label]
          }, BB.difficulty)))
        })]
      })
    }

    function Eo(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(NZ, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = fJ();
      return ZB.enabled ? (0, HJ.jsxs)(LJ.c, {
        show: ZB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [ZB.picker && (0, HJ.jsx)(bo, {
          picker: ZB.picker,
          controller: IB
        }), !ZB.picker && (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: TB("skyblockGame:dungeons")
              }), (0, HJ.jsx)("p", {
                children: TB("skyblockGame:dungeonsIntro")
              })]
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              onClick: IB.dismiss
            })]
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, HJ.jsx)("div", {
              className: "SkyblockDungeonList",
              children: ZB.dungeons.map((BB => (0, HJ.jsx)(xo, {
                dungeon: BB,
                select: IB.select
              }, BB.id)))
            }), ZB.detail && (0, HJ.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, HJ.jsx)("h3", {
                children: ZB.detail.name
              }), (0, HJ.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: ZB.detail.difficulties.map((BB => (0, HJ.jsxs)("li", {
                  className: CJ()("SkyblockDungeonRecord", {
                    Beaten: BB.beaten
                  }),
                  children: [(0, HJ.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: Ao(BB.colour),
                    children: [BB.beaten && (0, HJ.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), BB.label]
                  }), (0, HJ.jsx)("span", {
                    className: "SkyblockDungeonRecordSummary",
                    children: BB.summary
                  })]
                }, BB.difficulty)))
              })]
            })]
          })]
        })]
      }) : null
    }

    function Do(BB) {
      let {
        collection: IB,
        select: ZB
      } = BB;
      return (0, HJ.jsxs)(eJ.g, {
        className: CJ()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: IB.selected,
          Locked: IB.locked
        }),
        ariaPressed: IB.selected,
        onClick: () => {
          ZB(IB.id)
        },
        children: [(0, HJ.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, HJ.jsx)(OJ.e, {
            itemName: IB.icon,
            amount: 0
          })
        }), (0, HJ.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, HJ.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, HJ.jsx)("strong", {
              children: IB.name
            }), (0, HJ.jsx)("span", {
              children: IB.tier
            })]
          }), (0, HJ.jsx)(lJ, {
            percent: IB.percent,
            label: `${IB.name}: ${IB.progress}`
          }), (0, HJ.jsx)("span", {
            className: "SkyblockSkillXp",
            children: IB.progress
          })]
        })]
      })
    }

    function Ko(BB) {
      let {
        collection: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)();
      return (0, HJ.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, HJ.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, HJ.jsx)(OJ.e, {
            itemName: IB.icon,
            amount: 0
          })
        }), (0, HJ.jsx)("h3", {
          children: IB.name
        }), (0, HJ.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: IB.tier
        }), (0, HJ.jsx)("p", {
          children: IB.locked ? ZB("skyblockGame:collectionLocked") : IB.count
        }), null !== IB.nextReward && (0, HJ.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, HJ.jsx)("strong", {
            children: ZB("skyblockGame:collectionNextReward")
          }), (0, HJ.jsx)("span", {
            children: IB.nextReward
          })]
        }), (0, HJ.jsx)(lJ, {
          percent: IB.percent,
          label: IB.progress
        }), (0, HJ.jsx)("p", {
          children: IB.progress
        })]
      })
    }

    function Vo(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(rZ, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = fJ();
      return ZB.enabled ? (0, HJ.jsx)(LJ.c, {
        show: ZB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: TB("skyblockGame:collections")
              }), (0, HJ.jsxs)("p", {
                children: [TB("skyblockGame:collectionsIntro"), " ", ZB.tiersUnlocked]
              })]
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              onClick: IB.dismiss
            })]
          }), (0, HJ.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: ZB.categories.map((BB => (0, HJ.jsxs)(eJ.g, {
              className: CJ()("SkyblockCollectionCategory", {
                Selected: BB.selected
              }),
              ariaPressed: BB.selected,
              padTabSelected: BB.selected,
              onClick: () => {
                IB.selectCategory(BB.id)
              },
              children: [(0, HJ.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, HJ.jsx)(OJ.e, {
                  itemName: BB.icon,
                  amount: 0
                })
              }), (0, HJ.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, HJ.jsx)("strong", {
                  children: BB.label
                }), (0, HJ.jsx)("span", {
                  children: BB.tiers
                })]
              })]
            }, BB.id)))
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, HJ.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: ZB.collections.map((BB => (0, HJ.jsx)(Do, {
                collection: BB,
                select: IB.select
              }, BB.id)))
            }), ZB.detail && (0, HJ.jsx)(Ko, {
              collection: ZB.detail
            })]
          })]
        })
      }) : null
    }
    const So = ["completed", "active", "available", "locked"],
      BG = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function IG(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(EZ, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = fJ();
      return ZB.enabled ? (0, HJ.jsx)(LJ.c, {
        show: ZB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: TB("skyblockDevQuests:title")
              }), (0, HJ.jsx)("p", {
                children: TB("skyblockDevQuests:intro")
              })]
            }), (0, HJ.jsx)(eJ.l, {
              onClick: IB.dismiss
            })]
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [So.map((BB => (0, HJ.jsx)("span", {
              className: CJ()("SkyblockQuestGraphLegendState", BB),
              children: TB(`skyblockDevQuests:state_${BB}`)
            }, BB))), BG.map((BB => (0, HJ.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, HJ.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, HJ.jsx)("line", {
                  className: CJ()("SkyblockQuestGraphEdge", BB),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), TB(`skyblockDevQuests:edge_${BB}`)]
            }, BB)))]
          }), (0, HJ.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, HJ.jsxs)("div", {
              className: CJ()("SkyblockQuestGraphCanvas", {
                Planning: ZB.planning
              }),
              style: {
                width: ZB.width,
                height: ZB.height
              },
              children: [(0, HJ.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: ZB.width,
                height: ZB.height,
                "aria-hidden": "true",
                children: [(0, HJ.jsx)("defs", {
                  children: (0, HJ.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, HJ.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), ZB.edges.map((BB => (0, HJ.jsx)("path", {
                  className: CJ()("SkyblockQuestGraphEdge", BB.kind, {
                    InPlan: BB.inPlan
                  }),
                  d: BB.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, BB.key)))]
              }), ZB.nodes.map((BB => (0, HJ.jsxs)("button", {
                type: "button",
                className: CJ()("SkyblockQuestGraphNode", BB.state, {
                  InPlan: BB.inPlan,
                  Hovered: BB.hovered
                }),
                style: {
                  left: BB.left,
                  top: BB.top,
                  width: 190,
                  height: 52
                },
                title: BB.id,
                onMouseEnter: () => {
                  IB.hover(BB.id)
                },
                onMouseLeave: () => {
                  IB.hover(null)
                },
                onFocus: () => {
                  IB.hover(BB.id)
                },
                onBlur: () => {
                  IB.hover(null)
                },
                onClick: () => {
                  IB.jump(BB.id)
                },
                children: [(0, HJ.jsx)("strong", {
                  children: BB.name
                }), (0, HJ.jsx)("span", {
                  children: BB.detail
                })]
              }, BB.id)))]
            })
          })]
        })
      }) : null
    }
    const ZG = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      TG = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${kT}ms`,
        "--forge-duration": "2150ms"
      },
      JG = Array.from({
        length: 18
      }, ((BB, IB) => ({
        "--ember-left": `${(4+92*(.618034*IB%1)).toFixed(1)}%`,
        "--ember-size": 3 + IB % 3 * 2 + "px",
        "--ember-drift": 14 * (IB % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*IB%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*IB%8).toFixed(2)}s`
      })));

    function oG(BB) {
      if (BB.style.removeProperty("--part-size"), null === BB.parentElement || "wrap" === getComputedStyle(BB.parentElement).flexWrap) return;
      const IB = [...BB.children],
        ZB = getComputedStyle(BB),
        TB = parseFloat(ZB.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        JB = (BB.clientHeight - parseFloat(ZB.rowGap) * (IB.length - 1)) / IB.length,
        oB = IB.map((BB => {
          const IB = getComputedStyle(BB),
            ZB = BB.querySelector("h3"),
            oB = BB.querySelector(".SkyblockForgeParts");
          if (null === ZB || null === oB) return TB;
          const GB = JB - parseFloat(IB.paddingTop) - parseFloat(IB.paddingBottom) - ZB.offsetHeight - parseFloat(getComputedStyle(ZB).marginBottom),
            vB = parseFloat(getComputedStyle(oB).columnGap),
            kB = oB.children.length;
          let cB = 0;
          for (let TB = 1; TB <= kB; TB++) {
            const BB = Math.ceil(kB / TB);
            cB = Math.max(cB, Math.min((oB.clientWidth - vB * (TB - 1)) / TB, (GB - vB * (BB - 1)) / BB))
          }
          return cB
        }));
      BB.style.setProperty("--part-size", `${Math.floor(Math.max(TB,Math.min(...oB)))}px`)
    }

    function GG(BB) {
      var IB, ZB, TB, oB, GB;
      let {
        controller: vB
      } = BB;
      const kB = (0, aJ.h)(gT, vB.getSnapshot()),
        {
          t: cB
        } = (0, pJ.G)(),
        nB = fJ(),
        hB = function() {
          const BB = (0, OB.useRef)(null),
            IB = (0, OB.useRef)(null);
          return (0, OB.useLayoutEffect)((() => {
            null !== BB.current && oG(BB.current)
          })), (0, OB.useCallback)((ZB => {
            var TB;
            null === (TB = IB.current) || void 0 === TB || TB.disconnect(), IB.current = null, BB.current = ZB, null !== ZB && (IB.current = new ResizeObserver((() => {
              oG(ZB)
            })), IB.current.observe(ZB))
          }), [])
        }(),
        zB = function(BB) {
          const IB = (0, OB.useRef)(null);
          return (0, OB.useLayoutEffect)((() => {
            const BB = IB.current;
            if (null !== BB) {
              BB.style.removeProperty("font-size");
              for (let IB = 1.7; IB > 1.1 && BB.scrollWidth > BB.clientWidth; IB -= .1) BB.style.fontSize = IB - .1 + "rem"
            }
          }), [BB]), (0, OB.useCallback)((BB => {
            IB.current = BB
          }), [])
        }(null === (IB = kB.preview) || void 0 === IB ? void 0 : IB.name),
        FB = (0, OB.useRef)(null),
        NB = (0, OB.useRef)({}),
        gB = kB.forging,
        qB = null !== (ZB = null === gB || void 0 === gB ? void 0 : gB.preview.tier) && void 0 !== ZB ? ZB : 0,
        yB = null !== (TB = null === gB || void 0 === gB ? void 0 : gB.preview.named) && void 0 !== TB && TB,
        UB = (0, OB.useMemo)((() => {
          return null === gB ? null : {
            flames: (BB = qB, IB = yB, Array.from({
              length: 26 + 6 * BB + (IB ? 20 : 0)
            }, ((BB, IB) => {
              const ZB = IB < 6,
                TB = Math.random() * Math.PI * 2,
                JB = ZB ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                oB = Math.cos(TB) * JB,
                GB = Math.sin(TB) * JB - 2 - 3 * Math.random(),
                vB = Math.random(),
                [kB, cB, nB] = ZB ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : vB < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : vB < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [vB < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": kB,
                "--x0": `${(.15*oB).toFixed(2)}rem`,
                "--y0": `${(.15*GB).toFixed(2)}rem`,
                "--x": `${oB.toFixed(2)}rem`,
                "--y": `${GB.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${cB.toFixed(2)}rem`,
                "--duration": `${Math.round(nB)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: hT(qB, yB)
          };
          var BB, IB
        }), [null === gB || void 0 === gB ? void 0 : gB.id]);
      if (!kB.enabled) return null;
      const WB = kB.preview,
        dB = kB.arriving,
        CB = null !== dB && !dB.sameSword,
        QB = null !== WB && (0, HJ.jsx)(OJ.e, {
          itemName: WB.baseSword,
          amount: 0,
          enchantmentTier: WB.enchantmentTier
        });
      return (0, HJ.jsx)(LJ.c, {
        show: kB.open,
        close: vB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: uJ,
          children: [(0, HJ.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: JG.map(((BB, IB) => (0, HJ.jsx)("span", {
              style: BB
            }, IB)))
          }), (0, HJ.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: cB("skyblockGame:forgeTitle")
              }), (0, HJ.jsx)("p", {
                children: cB("skyblockGame:forgeIntro")
              })]
            }), (0, HJ.jsx)(eJ.l, {
              onClick: vB.dismiss
            })]
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, HJ.jsx)("div", {
              ref: hB,
              className: CJ()("SkyblockForgeSlots", {
                Locked: null !== gB
              }),
              children: kB.slots.map((BB => (0, HJ.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, HJ.jsx)("h3", {
                  children: BB.label
                }), (0, HJ.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: BB.parts.map((IB => (0, HJ.jsx)("button", {
                    type: "button",
                    className: CJ()("SkyblockForgePart", {
                      Selected: IB.selected,
                      Missing: IB.placeholder
                    }),
                    disabled: IB.placeholder,
                    title: IB.placeholder ? cB("skyblockGame:forgePickParts") : IB.itemName,
                    "aria-pressed": IB.selected,
                    onClick: () => {
                      vB.select(BB.kind, IB.material)
                    },
                    children: (0, HJ.jsx)(OJ.e, {
                      itemName: IB.itemName,
                      amount: IB.owned
                    })
                  }, IB.material)))
                })]
              }, BB.kind)))
            }), (0, HJ.jsxs)("div", {
              className: CJ()("SkyblockForgeAnvil", {
                Named: null === WB || void 0 === WB ? void 0 : WB.named
              }),
              style: {
                "--tier": null === WB ? "transparent" : JB.qb[WB.enchantmentTier]
              },
              children: [(0, HJ.jsxs)("div", {
                className: CJ()("SkyblockForgeAltar", {
                  Forging: null !== gB
                }),
                style: null === gB ? void 0 : TG,
                children: [(0, HJ.jsxs)("div", {
                  className: CJ()("SkyblockForgeMount", {
                    Arrive: null !== dB
                  }),
                  children: [null === WB && (0, HJ.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, HJ.jsx)(OJ.e, {
                      itemName: kB.unformedSword,
                      amount: 0
                    })
                  }), null !== WB && (0, HJ.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== WB && null === gB && (0, HJ.jsx)("div", {
                    ref: FB,
                    className: "SkyblockForgeFloat",
                    children: (0, HJ.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: QB
                    })
                  }), null !== WB && (0, HJ.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: nT.map(((BB, IB) => (0, HJ.jsx)("span", {
                      className: CJ()({
                        Rune: "" !== BB.rune
                      }),
                      style: BB.style,
                      children: BB.rune
                    }, IB)))
                  }), null !== gB && null !== UB && (0, HJ.jsxs)(HJ.Fragment, {
                    children: [(0, HJ.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, HJ.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: UB.flames.map(((BB, IB) => (0, HJ.jsx)("span", {
                        style: BB
                      }, IB)))
                    }), (0, HJ.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: NB.current,
                      children: (0, HJ.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: QB
                      })
                    }), (0, HJ.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, HJ.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (qB >= 4 || yB) && (0, HJ.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, HJ.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: UB.sparks.map(((BB, IB) => (0, HJ.jsx)("span", {
                        style: BB
                      }, IB)))
                    }), (0, HJ.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, HJ.jsx)("p", {
                  className: CJ()("SkyblockForgeStatus", null === (oB = kB.status) || void 0 === oB ? void 0 : oB.tone),
                  children: null === (GB = kB.status) || void 0 === GB ? void 0 : GB.text
                })]
              }), null === WB && (0, HJ.jsx)("p", {
                className: CJ()("SkyblockForgeName Waiting", {
                  ArriveText: CB
                }),
                children: cB(kB.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== WB && (0, HJ.jsx)("h3", {
                ref: zB,
                className: CJ()("SkyblockForgeName", {
                  ArriveText: CB
                }),
                title: WB.name,
                children: WB.name
              }), (null === WB || void 0 === WB ? void 0 : WB.named) && (0, HJ.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: cB("skyblockGame:forgeSecret")
              }), (0, HJ.jsxs)(eJ.s, {
                className: "SkyblockForgeButton",
                disabled: !kB.canForge,
                title: null === WB ? void 0 : cB("skyblockGame:forgeCoalOwned", {
                  owned: String(kB.coalOwned)
                }),
                onClick: () => {
                  NB.current = function(BB) {
                    const IB = null === BB ? "none" : getComputedStyle(BB).transform,
                      ZB = new DOMMatrixReadOnly("none" === IB ? void 0 : IB);
                    return {
                      "--settle-y": `${ZB.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(ZB.b,ZB.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(FB.current), NT(), vB.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [cB("skyblockGame:forgeButton"), null !== WB && (0, HJ.jsxs)("span", {
                  className: CJ()("SkyblockForgeCost", {
                    Short: WB.coalShort
                  }),
                  children: [(0, HJ.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, HJ.jsx)(OJ.e, {
                      itemName: BT.b,
                      amount: 0
                    })
                  }), WB.coalCost]
                })]
              })]
            }), (0, HJ.jsxs)("div", {
              className: CJ()("SkyblockForgeDetails", {
                Named: null === WB || void 0 === WB ? void 0 : WB.named
              }),
              children: [(0, HJ.jsx)("p", {
                className: CJ()("SkyblockForgeLore", {
                  ArriveText: CB
                }),
                title: null === WB || void 0 === WB ? void 0 : WB.lore,
                children: null === WB || void 0 === WB ? void 0 : WB.lore
              }), (0, HJ.jsxs)("dl", {
                className: CJ()("SkyblockForgeStats", {
                  ArriveText: CB
                }),
                children: [null === WB && ZG.map((BB => (0, HJ.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, HJ.jsx)("dt", {
                    children: cB(BB)
                  }), (0, HJ.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, BB))), null === WB || void 0 === WB ? void 0 : WB.stats.map((BB => (0, HJ.jsxs)("div", {
                  className: CJ()("SkyblockForgeStat", {
                    Better: BB.better
                  }),
                  children: [(0, HJ.jsx)("dt", {
                    children: BB.label
                  }), (0, HJ.jsx)("dd", {
                    children: BB.value
                  })]
                }, BB.label)))]
              }), (0, HJ.jsx)("ul", {
                className: CJ()("SkyblockForgeEffects", {
                  ArriveText: CB
                }),
                children: null === WB || void 0 === WB ? void 0 : WB.effects.map((BB => (0, HJ.jsx)("li", {
                  children: BB
                }, BB)))
              })]
            })]
          })]
        })
      })
    }
    const vG = "Doom Rivet",
      kG = "Doom Crest";

    function cG(BB) {
      let {
        itemName: IB,
        amount: ZB,
        owned: TB
      } = BB;
      return (0, HJ.jsxs)("span", {
        className: CJ()("SkyblockSmugglerPrice", {
          Short: ZB > TB
        }),
        children: [(0, HJ.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, HJ.jsx)(OJ.e, {
            itemName: IB,
            amount: 0
          })
        }), (0, HJ.jsx)("span", {
          children: ZB
        })]
      })
    }

    function nG(BB) {
      return BB.justBought ? "skyblockGame:smugglerJustBought" : BB.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function hG(BB) {
      let {
        deal: IB,
        view: ZB,
        buy: TB
      } = BB;
      const {
        t: JB
      } = (0, pJ.G)();
      return (0, HJ.jsxs)("div", {
        className: CJ()("SkyblockSmugglerPocket", {
          Bought: IB.justBought,
          Unaffordable: !IB.affordable,
          SoldOut: IB.soldOut && !IB.justBought
        }),
        children: [(0, HJ.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, HJ.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, HJ.jsx)(OJ.e, {
            itemName: IB.itemName,
            amount: 0,
            enchantmentTier: IB.enchantmentTier
          }), IB.amount > 1 && (0, HJ.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: JB("skyblockGame:smugglerAmount", {
              amount: IB.amount
            })
          })]
        }), (0, HJ.jsx)("h3", {
          children: IB.displayName
        }), (0, HJ.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, HJ.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [IB.rivets > 0 && (0, HJ.jsx)(cG, {
              itemName: vG,
              amount: IB.rivets,
              owned: ZB.rivetsOwned
            }), IB.crests > 0 && (0, HJ.jsx)(cG, {
              itemName: kG,
              amount: IB.crests,
              owned: ZB.crestsOwned
            })]
          }), (0, HJ.jsx)(eJ.g, {
            className: "SkyblockSmugglerBuy",
            disabled: IB.soldOut || !IB.affordable || ZB.pending,
            onClick: () => {
              TB(IB.slot)
            },
            children: JB(nG(IB))
          })]
        })]
      }, IB.justBought ? ZB.boughtCount : 0)
    }

    function zG(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(UT, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = fJ();
      return ZB.enabled ? (0, HJ.jsx)(LJ.c, {
        show: ZB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: uJ,
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, HJ.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, HJ.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: TB("skyblockGame:smugglerTitle")
              }), (0, HJ.jsx)("p", {
                children: TB("skyblockGame:smugglerIntro")
              })]
            }), (0, HJ.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, HJ.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, HJ.jsx)(cG, {
                  itemName: vG,
                  amount: ZB.rivetsOwned,
                  owned: ZB.rivetsOwned
                }), (0, HJ.jsx)(cG, {
                  itemName: kG,
                  amount: ZB.crestsOwned,
                  owned: ZB.crestsOwned
                })]
              }), (0, HJ.jsx)(eJ.l, {
                onClick: IB.dismiss
              })]
            })]
          }), (0, HJ.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: ZB.deals.map((BB => (0, HJ.jsx)(hG, {
              deal: BB,
              view: ZB,
              buy: IB.buy
            }, BB.slot)))
          }), (0, HJ.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, HJ.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: ZB.rotatesText
            }), null !== ZB.status && (0, HJ.jsx)("span", {
              className: CJ()("SkyblockSmugglerStatus", ZB.status.tone),
              children: ZB.status.text
            })]
          })]
        })
      }) : null
    }

    function FG(BB) {
      let {
        phase: IB,
        className: ZB
      } = BB;
      return (0, HJ.jsx)("span", {
        className: CJ()("SkyblockMoon", `Moon-${IB}`, ZB),
        "aria-hidden": "true"
      })
    }

    function NG(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(CT, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)();
      return ZB.enabled ? (0, HJ.jsx)(sJ.h, {
        placement: "statBars",
        children: (0, HJ.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: CJ()("SkyblockPassageChip", ZB.open && "Open"),
          "aria-label": TB("skyblockGame:passageChipLabel", {
            phase: ZB.phaseName
          }),
          title: TB("skyblockGame:passageChipLabel", {
            phase: ZB.phaseName
          }),
          onMouseDown: BB => {
            BB.preventDefault()
          },
          onClick: IB.toggle,
          children: (0, HJ.jsx)(FG, {
            phase: ZB.phase
          }, ZB.phase)
        })
      }) : null
    }

    function gG(BB) {
      let {
        fish: IB
      } = BB;
      return (0, HJ.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, HJ.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, HJ.jsx)(OJ.e, {
            itemName: IB.itemName,
            amount: 0
          })
        }), (0, HJ.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: IB.displayName
          }), (0, HJ.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: IB.where
          })]
        })]
      })
    }

    function qG(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(CT, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = fJ();
      return ZB.enabled ? (0, HJ.jsx)(LJ.c, {
        show: ZB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, HJ.jsx)(FG, {
              phase: ZB.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: TB("skyblockGame:passageTitle")
              }), (0, HJ.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: ZB.phaseName
              })]
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              onClick: IB.dismiss
            })]
          }), (0, HJ.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: TB("skyblockGame:passageIntro")
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, HJ.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, HJ.jsx)("h3", {
                children: TB("skyblockGame:passageVisiting")
              }), (0, HJ.jsx)("ul", {
                className: "SkyblockPassageList",
                children: ZB.visitors.map((BB => (0, HJ.jsx)(gG, {
                  fish: BB
                }, BB.itemName)))
              })]
            }), (0, HJ.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== ZB.resting && (0, HJ.jsxs)(HJ.Fragment, {
                children: [(0, HJ.jsx)("h3", {
                  children: TB("skyblockGame:passageResting")
                }), (0, HJ.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, HJ.jsx)(gG, {
                    fish: ZB.resting
                  })
                })]
              }), (0, HJ.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, HJ.jsx)(FG, {
                  phase: ZB.nextPhase
                }), (0, HJ.jsx)("span", {
                  children: ZB.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function yG() {
      return (0, HJ.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((BB => (0, HJ.jsx)("i", {
          style: {
            "--sparkle-index": BB
          }
        }, BB)))
      })
    }

    function UG(BB) {
      var IB;
      let {
        charm: ZB,
        view: TB,
        controller: JB
      } = BB;
      const {
        t: oB
      } = (0, pJ.G)(), GB = TB.shop, vB = (null === (IB = TB.sparkle) || void 0 === IB ? void 0 : IB.id) === ZB.id;
      return (0, HJ.jsxs)("li", {
        className: CJ()("SkyblockLampLightCharm", ZB.owned && "Owned", ZB.socketed && "Socketed"),
        children: [vB && (0, HJ.jsx)(yG, {}, TB.sparkle.count), (0, HJ.jsx)("h4", {
          children: ZB.name
        }), (0, HJ.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: ZB.effect
        }), (0, HJ.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: ZB.lines.map((BB => (0, HJ.jsxs)("li", {
            className: CJ()("SkyblockLampLightOddsLine", "better" === BB.tone ? "Better" : "worse" === BB.tone ? "Worse" : "Same"),
            children: [(0, HJ.jsx)("span", {
              className: "Before",
              children: BB.before
            }), (0, HJ.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, HJ.jsx)("span", {
              className: "After",
              children: BB.after
            })]
          }, BB.label)))
        }), (0, HJ.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: ZB.owned ? ZB.socketed ? (0, HJ.jsxs)(HJ.Fragment, {
            children: [(0, HJ.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: oB("skyblockGame:lampLightSocketed")
            }), (0, HJ.jsx)(eJ.V, {
              disabled: !TB.canCommand,
              ariaLabel: oB("skyblockGame:lampLightRemoveLabel", {
                charm: ZB.name
              }),
              onClick: () => {
                JB.socket(null)
              },
              children: oB("skyblockGame:lampLightRemove")
            })]
          }) : (0, HJ.jsx)(eJ.g, {
            disabled: !TB.canCommand || !GB.heldRod,
            ariaLabel: oB("skyblockGame:lampLightSocketLabel", {
              charm: ZB.name
            }),
            onClick: () => {
              JB.socket(ZB.id)
            },
            children: oB("skyblockGame:lampLightSocket")
          }) : (0, HJ.jsx)(eJ.g, {
            disabled: !TB.canCommand || !ZB.affordable,
            ariaLabel: oB("skyblockGame:lampLightBuyLabel", {
              item: ZB.name,
              cost: ZB.cost
            }),
            onClick: () => {
              JB.buy(ZB.id)
            },
            children: ZB.cost
          })
        })]
      })
    }

    function WG(BB) {
      var IB;
      let {
        tint: ZB,
        view: TB,
        controller: JB
      } = BB;
      const {
        t: oB
      } = (0, pJ.G)();
      return (0, HJ.jsxs)("li", {
        className: CJ()("SkyblockLampLightTint", ZB.wearing && "Wearing"),
        style: {
          "--tint-colour": ZB.colour
        },
        children: [(null === (IB = TB.sparkle) || void 0 === IB ? void 0 : IB.id) === ZB.id && (0, HJ.jsx)(yG, {}, TB.sparkle.count), (0, HJ.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, HJ.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: ZB.name
        }), ZB.wearing ? (0, HJ.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: oB("skyblockGame:lampLightWearing")
        }) : (0, HJ.jsx)(eJ.g, {
          disabled: !TB.canCommand || !ZB.owned && !ZB.affordable,
          ariaLabel: ZB.owned ? oB("skyblockGame:lampLightWearLabel", {
            tint: ZB.name
          }) : oB("skyblockGame:lampLightBuyLabel", {
            item: ZB.name,
            cost: ZB.cost
          }),
          onClick: () => {
            ZB.owned ? JB.wearTint(ZB.id) : JB.buy(ZB.id)
          },
          children: ZB.owned ? oB("skyblockGame:lampLightWear") : ZB.cost
        })]
      })
    }

    function dG(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(rT, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = ZB.shop;
      return (0, HJ.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, HJ.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: ZB.balance
          }), (0, HJ.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": ZB.releasing,
            className: CJ()("SkyblockLampLightSwitch", ZB.releasing && "On"),
            disabled: ZB.releasing ? "ready" !== ZB.status : !ZB.canCommand,
            onClick: () => {
              IB.setRelease(!ZB.releasing)
            },
            children: [(0, HJ.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, HJ.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), TB("skyblockGame:lampLightRelease")]
          }), (0, HJ.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: TB("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== ZB.notice && (0, HJ.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: ZB.notice
        }), null !== JB && (0, HJ.jsxs)(HJ.Fragment, {
          children: [(0, HJ.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, HJ.jsx)("h3", {
              children: TB("skyblockGame:lampLightCharms")
            }), (0, HJ.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: JB.oddsFor
            }), (0, HJ.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((BB => (0, HJ.jsx)("button", {
                type: "button",
                "aria-pressed": ZB.situation === BB,
                className: CJ()("SkyblockLampLightSituation", ZB.situation === BB && "Selected"),
                onClick: () => {
                  IB.setSituation(BB)
                },
                children: TB("open" === BB ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, BB)))
            })]
          }), !JB.heldRod && (0, HJ.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: TB("skyblockGame:lampLightHoldRod")
          }), (0, HJ.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: JB.charms.map((BB => (0, HJ.jsx)(UG, {
              charm: BB,
              view: ZB,
              controller: IB
            }, BB.id)))
          }), (0, HJ.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, HJ.jsx)("h3", {
              children: TB("skyblockGame:lampLightTints")
            })
          }), (0, HJ.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, HJ.jsxs)("li", {
              className: CJ()("SkyblockLampLightTint", "Islands", JB.wearingIslandColours && "Wearing"),
              children: [(0, HJ.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, HJ.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: TB("skyblockGame:lampLightIslandColours")
              }), JB.wearingIslandColours ? (0, HJ.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: TB("skyblockGame:lampLightWearing")
              }) : (0, HJ.jsx)(eJ.g, {
                disabled: !ZB.canCommand,
                ariaLabel: TB("skyblockGame:lampLightWearLabel", {
                  tint: TB("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  IB.wearTint(null)
                },
                children: TB("skyblockGame:lampLightWear")
              })]
            }), JB.tints.map((BB => (0, HJ.jsx)(WG, {
              tint: BB,
              view: ZB,
              controller: IB
            }, BB.id)))]
          })]
        })]
      })
    }

    function CG(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(rT, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)();
      return ZB.releasing ? (0, HJ.jsx)(sJ.h, {
        children: (0, HJ.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            IB.setRelease(!1)
          },
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, HJ.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [TB("skyblockGame:lampLightReleasing"), " \xb7 ", ZB.balance]
          }), (0, HJ.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: TB("skyblockGame:lampLightKeepCatches")
          }), null !== ZB.gained && (0, HJ.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: ZB.gained.text
          }, ZB.gained.count)]
        })
      }) : null
    }

    function QG(BB) {
      let {
        island: IB,
        view: ZB,
        aim: TB
      } = BB;
      const {
        t: JB
      } = (0, pJ.G)(), oB = IB.featuredFish;
      return (0, HJ.jsxs)("li", {
        className: CJ()("SkyblockKeepersChairIsland", `Island-${IB.id}`, IB.favoured && "Aimed", !IB.relit && "Dark"),
        children: [(0, HJ.jsx)("h3", {
          children: IB.name
        }), IB.relit && null !== oB ? (0, HJ.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: JB("skyblockGame:keepersChairTideNotice")
          }), (0, HJ.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, HJ.jsx)(OJ.e, {
              itemName: oB.itemName,
              amount: 0
            })
          }), (0, HJ.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: oB.displayName
          })]
        }) : (0, HJ.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, HJ.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: JB("skyblockGame:keepersChairDark")
          })
        }), IB.relit && (IB.favoured ? (0, HJ.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: JB("skyblockGame:keepersChairAimed")
        }) : (0, HJ.jsx)(eJ.g, {
          className: "SkyblockKeepersChairAim",
          disabled: !ZB.canAim,
          ariaLabel: JB("skyblockGame:keepersChairAimLabel", {
            island: IB.name
          }),
          onClick: () => {
            TB(IB.id)
          },
          children: JB("skyblockGame:keepersChairAim")
        }))]
      }, IB.favoured ? ZB.aimedCount : 0)
    }

    function sG(BB) {
      let {
        controller: IB,
        lampLight: ZB
      } = BB;
      const TB = (0, aJ.h)(iT, IB.getSnapshot()),
        JB = (0, aJ.h)(rT, ZB.getSnapshot()),
        [oB, GB] = (0, OB.useState)("lamp"),
        {
          t: vB
        } = (0, pJ.G)(),
        kB = fJ();
      if (!TB.enabled) return null;
      const cB = "light" === oB && JB.enabled;
      return (0, HJ.jsx)(LJ.c, {
        show: TB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: CJ()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", cB && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: kB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: vB("skyblockGame:keepersChairTitle")
              }), (0, HJ.jsx)("p", {
                children: vB(cB ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              ariaLabel: vB("skyblockGame:keepersChairClose"),
              onClick: IB.dismiss
            })]
          }), JB.enabled && (0, HJ.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((BB => (0, HJ.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === BB === cB,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === BB === cB ? "true" : void 0,
              className: CJ()("SkyblockKeepersChairTab", "light" === BB === cB && "Selected"),
              onClick: () => {
                GB(BB)
              },
              children: [vB("lamp" === BB ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === BB && (0, HJ.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: JB.balance
              })]
            }, BB)))
          }), cB ? (0, HJ.jsx)(dG, {
            controller: ZB
          }) : (0, HJ.jsx)(wG, {
            view: TB,
            controller: IB
          })]
        })
      })
    }

    function wG(BB) {
      let {
        view: IB,
        controller: ZB
      } = BB;
      const {
        t: TB
      } = (0, pJ.G)();
      return (0, HJ.jsxs)(HJ.Fragment, {
        children: [(0, HJ.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: IB.islands.map((BB => (0, HJ.jsx)(QG, {
            island: BB,
            view: IB,
            aim: ZB.aim
          }, BB.id)))
        }), null !== IB.almanac && (0, HJ.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: TB("skyblockGame:passageTitle")
          }), (0, HJ.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, HJ.jsx)(FG, {
              phase: IB.almanac.phase
            }), IB.almanac.phaseName]
          }), (0, HJ.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, HJ.jsx)(FG, {
              phase: IB.almanac.nextPhase
            }), IB.almanac.next]
          })]
        }), (0, HJ.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: TB("skyblockGame:keepersChairFavour")
          }), IB.aimed && (0, HJ.jsx)(eJ.V, {
            className: "SkyblockKeepersChairRest",
            disabled: !IB.canAim,
            onClick: () => {
              ZB.aim(null)
            },
            children: TB("skyblockGame:keepersChairRest")
          })]
        }), null !== IB.status && (0, HJ.jsx)("p", {
          className: CJ()("SkyblockKeepersChairStatus", "refused" === IB.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: IB.status.text
        })]
      })
    }

    function OG(BB) {
      let {
        controller: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)(), TB = (0, aJ.h)(aT, IB.getSnapshot());
      if (!TB.enabled) return null;
      const JB = TB.freshCount > 0 ? ZB("skyblockGame:reachLogOpenNews", {
        count: TB.freshCount
      }) : ZB("skyblockGame:reachLogOpen");
      return (0, HJ.jsx)(sJ.h, {
        placement: "statBars",
        children: (0, HJ.jsxs)("button", {
          type: "button",
          className: CJ()("SkyblockReachLogButton", TB.freshCount > 0 && "HasNews", TB.pending && "Pending"),
          "aria-label": JB,
          title: JB,
          onClick: IB.ask,
          children: [TB.news && (0, HJ.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${TB.newsToken}`), (0, HJ.jsx)("span", {
            className: CJ()("SkyblockReachLogIcon", TB.news && "Jump"),
            "aria-hidden": "true",
            children: (0, HJ.jsx)(OJ.e, {
              itemName: MT,
              amount: 0
            })
          }, `icon:${TB.newsToken}`), TB.freshCount > 0 && (0, HJ.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: TB.freshCount
          })]
        })
      })
    }

    function YG(BB) {
      let {
        gift: IB
      } = BB;
      return (0, HJ.jsx)("li", {
        className: CJ()("SkyblockRegularsGift", IB.given && "Given"),
        children: IB.text
      })
    }

    function iG(BB) {
      let {
        regular: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)();
      return (0, HJ.jsxs)("li", {
        className: CJ()("SkyblockRegularsCard", IB.tagged ? "Tagged" : "Untagged", IB.resting && "Resting"),
        children: [(0, HJ.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: IB.fishName,
            children: (0, HJ.jsx)(OJ.e, {
              itemName: IB.itemName,
              amount: 0
            })
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, HJ.jsx)("h3", {
              children: IB.name
            }), (0, HJ.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: IB.fishName
            })]
          })]
        }), (0, HJ.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: IB.line
        }), (0, HJ.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: IB.size
          }), IB.tagged && (0, HJ.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: IB.resting ? ZB("skyblockGame:regularsResting") : IB.meetings
          })]
        }), (0, HJ.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: IB.chance
        }), (0, HJ.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: IB.gifts.map((BB => (0, HJ.jsx)(YG, {
            gift: BB
          }, BB.text)))
        }), IB.history.length > 0 && (0, HJ.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: IB.history.map(((BB, IB) => (0, HJ.jsx)("li", {
            children: BB
          }, IB)))
        })]
      })
    }

    function pG(BB) {
      let {
        controller: IB,
        island: ZB
      } = BB;
      const {
        t: TB
      } = (0, pJ.G)(), JB = (0, aJ.h)(IJ, IB.getSnapshot()), oB = JB.islands.find((BB => BB.id === ZB));
      if (!JB.enabled || void 0 === oB) return null;
      const GB = TB("skyblockGame:regularsOpen");
      return (0, HJ.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": GB,
        title: GB,
        onClick: () => {
          IB.openIsland(ZB)
        },
        children: [(0, HJ.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: TB("skyblockGame:regularsTitle")
        }), oB.regulars.map((BB => (0, HJ.jsx)("span", {
          className: CJ()("SkyblockRegularsStripIcon", BB.tagged && "Tagged"),
          title: BB.name,
          children: (0, HJ.jsx)(OJ.e, {
            itemName: BB.itemName,
            amount: 0
          })
        }, BB.id)))]
      })
    }

    function aG(BB) {
      var IB;
      let {
        controller: ZB
      } = BB;
      const TB = (0, aJ.h)(IJ, ZB.getSnapshot()),
        {
          t: JB
        } = (0, pJ.G)(),
        oB = fJ();
      if (!TB.enabled) return null;
      const GB = null !== (IB = TB.islands.find((BB => BB.id === TB.selected))) && void 0 !== IB ? IB : null;
      return (0, HJ.jsx)(LJ.c, {
        show: TB.open,
        close: ZB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: oB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: JB("skyblockGame:regularsTitle")
              }), (0, HJ.jsx)("p", {
                children: JB("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              onClick: ZB.dismiss
            })]
          }), (0, HJ.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: TB.islands.map((BB => {
              const IB = BB.id === TB.selected;
              return (0, HJ.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": IB,
                "data-pad-tab": !0,
                "data-pad-selected": IB ? "true" : void 0,
                className: CJ()("SkyblockReachLogTab", `Island-${BB.id}`, IB && "Selected", BB.charm.given && "GoldPage"),
                onClick: () => {
                  ZB.selectIsland(BB.id)
                },
                children: (0, HJ.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: BB.name
                })
              }, BB.id)
            }))
          }), (0, HJ.jsxs)("div", {
            className: CJ()("SkyblockRegularsPage", null !== GB && `Island-${GB.id}`),
            role: "tabpanel",
            children: [(0, HJ.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: JB("skyblockGame:regularsHow")
            }), null !== GB && (0, HJ.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: GB.regulars.map((BB => (0, HJ.jsx)(iG, {
                regular: BB
              }, BB.id)))
            })]
          }), null !== GB && (0, HJ.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, HJ.jsx)("span", {
              className: CJ()("SkyblockRegularsCharm", GB.charm.given && "Given"),
              children: GB.charm.text
            })
          })]
        })
      })
    }
    const HG = [{
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
      MG = Array.from({
        length: 6
      }, ((BB, IB) => ({
        "--x": `${(88*(.618034*IB%1)).toFixed(1)}%`,
        "--y": `${(10+37*IB%70).toFixed(1)}%`,
        "--size": 7 + IB % 3 * 3 + "rem",
        "--drift-x": 3 * (IB % 3 - 1) + "rem",
        "--drift-y": 2 * (IB % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + IB % 4 * 3 + "s",
        "--delay": 2.5 * -IB + "s"
      }))),
      jG = Array.from({
        length: 14
      }, ((BB, IB) => ({
        "--left": `${(3+94*((.618034*IB+.3)%1)).toFixed(1)}%`,
        "--size": 4 + IB % 4 * 2 + "px",
        "--sway": IB % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*IB%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*IB%12).toFixed(2)}s`
      }))),
      PG = (0, OB.memo)((function(BB) {
        let {
          island: IB
        } = BB;
        return (0, HJ.jsxs)("div", {
          className: CJ()("SkyblockReachLogDepths", null !== IB && `Island-${IB}`),
          "aria-hidden": "true",
          children: [HG.map(((BB, IB) => (0, HJ.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: BB
          }, `shaft${IB}`))), MG.map(((BB, IB) => (0, HJ.jsx)("span", {
            className: CJ()("SkyblockReachLogMote", IB % 2 === 1 && "Violet"),
            style: BB
          }, `mote${IB}`))), jG.map(((BB, IB) => (0, HJ.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: BB
          }, `bubble${IB}`)))]
        })
      })),
      RG = 100;

    function rG(BB) {
      let {
        view: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)();
      if (null === IB || 0 === IB.total) return null;
      const TB = RG * IB.aspect,
        JB = ZB("skyblockGame:hiddenWatersCount", {
          found: IB.found,
          total: IB.total
        });
      return (0, HJ.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${ZB("skyblockGame:hiddenWatersTitle")}: ${JB}`,
        children: [(0, HJ.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${TB}`,
          "aria-hidden": "true",
          children: [IB.islands.map(((BB, IB) => (0, HJ.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (BB.left + BB.width / 2) * RG,
            cy: (BB.top + BB.height / 2) * TB,
            rx: BB.width / 2 * RG,
            ry: BB.height / 2 * TB
          }, IB))), IB.pins.map(((BB, IB) => (0, HJ.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: BB.left * RG,
            cy: BB.top * TB,
            r: 13
          }, IB)))]
        }), (0, HJ.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: ZB("skyblockGame:hiddenWatersTitle")
          }), (0, HJ.jsx)("span", {
            className: IB.found === IB.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: JB
          })]
        })]
      })
    }

    function mG(BB) {
      let {
        view: IB,
        island: ZB
      } = BB;
      const {
        t: TB
      } = (0, pJ.G)(), JB = null === IB || void 0 === IB ? void 0 : IB.glimpses.get(ZB);
      return void 0 === JB || 0 === JB.length ? null : (0, HJ.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, HJ.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: TB("skyblockGame:hiddenWatersGlimpsed")
        }), (0, HJ.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: JB.map((BB => (0, HJ.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, HJ.jsx)(OJ.e, {
              itemName: BB,
              amount: 0
            })
          }, BB)))
        })]
      })
    }
    const XG = ["Bronze", "Silver", "Gold"],
      LG = [{
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
      eG = LG.slice(0, 2);

    function uG(BB) {
      return BB ? LG : eG
    }

    function fG(BB) {
      let {
        fish: IB,
        letGoShown: ZB
      } = BB;
      const {
        t: TB
      } = (0, pJ.G)();
      return (0, HJ.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [XG.map(((BB, ZB) => {
          const JB = ZB < IB.marks;
          return (0, HJ.jsx)("span", {
            className: CJ()("SkyblockReachLogPip", BB, JB && "Earned", JB && IB.fresh && ZB === IB.marks - 1 && "Newest"),
            title: TB(HT[ZB])
          }, BB)
        })), (0, HJ.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), uG(ZB).map(((BB, ZB) => (0, HJ.jsx)("span", {
          className: CJ()("SkyblockReachLogRibbon", BB.className, !0 === IB.ribbons[ZB] && "Earned"),
          title: TB(BB.titleKey)
        }, BB.className)))]
      })
    }

    function lG(BB) {
      let {
        letGoShown: IB,
        haloShown: ZB
      } = BB;
      const {
        t: TB
      } = (0, pJ.G)();
      return (0, HJ.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, HJ.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: TB("skyblockGame:reachLogMarks"),
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), TB("skyblockGame:reachLogLegendMarks")]
        }), uG(IB).map((BB => (0, HJ.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: TB(BB.titleKey),
          children: [(0, HJ.jsx)("span", {
            className: CJ()("SkyblockReachLogRibbon", BB.className, "Earned")
          }), TB(BB.legendKey)]
        }, BB.className))), (0, HJ.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: TB("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), TB("skyblockGame:reachLogLegendGlimmer")]
        }), ZB && (0, HJ.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: TB("skyblockGame:reachLogHaloTitle"),
          children: [(0, HJ.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), TB("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function AG(BB) {
      let {
        returner: IB
      } = BB;
      return (0, HJ.jsxs)("div", {
        className: CJ()("SkyblockReachLogReturner", IB.back && "Back"),
        children: [(0, HJ.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, HJ.jsx)(OJ.e, {
            itemName: IB.itemName,
            amount: 0
          })
        }), (0, HJ.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: IB.line
        })]
      })
    }

    function tG(BB) {
      let {
        fish: IB,
        letGoShown: ZB
      } = BB;
      const {
        t: TB
      } = (0, pJ.G)();
      return (0, HJ.jsxs)("li", {
        className: CJ()("SkyblockReachLogCard", IB.caught ? "Caught" : "Unknown", IB.marks >= 3 && "GoldCard", IB.fresh && "Fresh", IB.visitor && "Visitor"),
        children: [IB.visitor && (0, HJ.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: TB("skyblockGame:reachLogVisitor")
        }), IB.fresh && Array.from({
          length: 4
        }, ((BB, IB) => (0, HJ.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, IB))), (0, HJ.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [IB.halo && (0, HJ.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: TB("skyblockGame:reachLogHaloTitle")
          }), (0, HJ.jsx)(OJ.e, {
            itemName: IB.itemName,
            amount: 0
          }), IB.glimmer && (0, HJ.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: TB("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, HJ.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: IB.name
        }), (0, HJ.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: IB.chance
        }), (0, HJ.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: IB.best
        }), (0, HJ.jsx)(fG, {
          fish: IB,
          letGoShown: ZB
        })]
      })
    }

    function bG(BB) {
      let {
        page: IB,
        letGoShown: ZB,
        hiddenWaters: TB
      } = BB;
      const {
        t: JB
      } = (0, pJ.G)();
      return IB.awake ? (0, HJ.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: IB.fish.map((BB => (0, HJ.jsx)(tG, {
          fish: BB,
          letGoShown: ZB
        }, BB.itemName)))
      }) : (0, HJ.jsxs)(HJ.Fragment, {
        children: [(0, HJ.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: JB("skyblockGame:reachLogAsleep")
        }), (0, HJ.jsx)(mG, {
          view: TB,
          island: IB.id
        })]
      })
    }

    function xG(BB) {
      var IB, ZB;
      let {
        controller: TB,
        regulars: JB,
        hiddenWaters: oB
      } = BB;
      const GB = (0, aJ.h)(aT, TB.getSnapshot()),
        vB = function(BB) {
          return (0, aJ.h)(GJ, BB.getSnapshot())
        }(oB),
        kB = (0, aJ.h)(IJ, JB.getSnapshot()),
        {
          t: cB
        } = (0, pJ.G)(),
        nB = fJ();
      if (!GB.enabled) return null;
      const hB = null !== (IB = GB.pages.find((BB => BB.id === GB.selected))) && void 0 !== IB ? IB : null;
      return (0, HJ.jsx)(LJ.c, {
        show: GB.open,
        close: TB.dismiss,
        togglePointerLock: !1,
        className: CJ()("SkyblockSkillsOverlay", kB.open && "SkyblockReachLogUnderLedger"),
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: nB,
          onKeyDown: uJ,
          children: [(0, HJ.jsx)(PG, {
            island: null !== (ZB = null === hB || void 0 === hB ? void 0 : hB.id) && void 0 !== ZB ? ZB : null
          }), (0, HJ.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: cB("skyblockGame:reachLogTitle")
              }), (0, HJ.jsx)("p", {
                children: cB("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, HJ.jsx)(rG, {
              view: vB
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              onClick: TB.dismiss
            })]
          }), (0, HJ.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: GB.pages.map((BB => {
              const IB = BB.id === GB.selected,
                ZB = BB.fish.some((BB => BB.fresh));
              return (0, HJ.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": IB,
                "data-pad-tab": !0,
                "data-pad-selected": IB ? "true" : void 0,
                className: CJ()("SkyblockReachLogTab", `Island-${BB.id}`, IB && "Selected", !BB.awake && "Asleep", BB.gold && "GoldPage", ZB && "HasNews"),
                onClick: () => {
                  TB.selectPage(BB.id)
                },
                children: [(0, HJ.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: BB.name
                }), BB.awake && (0, HJ.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: cB("skyblockGame:reachLogCaughtCount", {
                    caught: BB.caught,
                    total: BB.total
                  })
                })]
              }, BB.id)
            }))
          }), (0, HJ.jsxs)("div", {
            className: CJ()("SkyblockReachLogPage", null !== hB && `Island-${hB.id}`),
            role: "tabpanel",
            children: [null !== hB && (0, HJ.jsx)(bG, {
              page: hB,
              letGoShown: GB.letGoShown,
              hiddenWaters: vB
            }), !0 === (null === hB || void 0 === hB ? void 0 : hB.awake) && null !== hB.returner && (0, HJ.jsx)(AG, {
              returner: hB.returner
            }), !0 === (null === hB || void 0 === hB ? void 0 : hB.awake) && (0, HJ.jsx)(pG, {
              controller: JB,
              island: hB.id
            })]
          }), (0, HJ.jsx)("footer", {
            className: CJ()("SkyblockReachLogFooter", null !== hB && `Island-${hB.id}`, !0 === (null === hB || void 0 === hB ? void 0 : hB.gold) && "GoldPage"),
            children: !0 === (null === hB || void 0 === hB ? void 0 : hB.gold) ? (0, HJ.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: cB("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, HJ.jsxs)(HJ.Fragment, {
              children: [(0, HJ.jsx)(lG, {
                letGoShown: GB.letGoShown,
                haloShown: !0 === (null === hB || void 0 === hB ? void 0 : hB.fish.some((BB => BB.halo)))
              }), (0, HJ.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: cB("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var EG = ZB(5001);

    function DG(BB) {
      let {
        conversation: IB,
        completedLabel: ZB
      } = BB;
      return (0, HJ.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, HJ.jsxs)("header", {
          children: [(0, HJ.jsx)("h3", {
            children: IB.questName
          }), IB.completed && (0, HJ.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: ZB
          })]
        }), IB.lines.map((BB => (0, HJ.jsx)(EG.c, {
          display: BB.display
        }, BB.key)))]
      })
    }

    function KG(BB) {
      let {
        controller: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)(), TB = (0, aJ.h)(kJ, IB.getSnapshot()), JB = fJ();
      if (!TB.enabled) return null;
      const oB = !TB.loading && 0 === TB.conversations.length;
      return (0, HJ.jsx)(LJ.c, {
        show: TB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: ZB("skyblockDialogue:title")
              }), (0, HJ.jsx)("p", {
                children: ZB("skyblockDialogue:intro")
              })]
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              onClick: IB.dismiss
            })]
          }), (0, HJ.jsxs)("div", {
            className: CJ()("SkyblockDialogueBody", {
              SingleColumn: null !== TB.questFocus || 0 === TB.characters.length
            }),
            children: [null === TB.questFocus && TB.characters.length > 0 && (0, HJ.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: TB.characters.map((BB => (0, HJ.jsx)(eJ.g, {
                className: CJ()("SkyblockDialogueCharacter", {
                  Selected: BB.selected
                }),
                onClick: () => {
                  IB.selectCharacter(BB.id)
                },
                children: (0, HJ.jsx)(YJ.e, {
                  text: BB.styling
                })
              }, BB.id)))
            }), (0, HJ.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== TB.questFocus && (0, HJ.jsx)(eJ.g, {
                className: "SkyblockDialogueBack",
                onClick: IB.showCharacters,
                children: ZB("skyblockDialogue:allCharacters")
              }), TB.loading && (0, HJ.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ZB("skyblockDialogue:loading")
              }), oB && (0, HJ.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: ZB(null === TB.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), TB.conversations.map((BB => (0, HJ.jsx)(DG, {
                conversation: BB,
                completedLabel: TB.completedLabel
              }, BB.questId)))]
            })]
          })]
        })
      })
    }

    function VG(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(FJ, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = fJ();
      return ZB.enabled ? (0, HJ.jsx)(LJ.c, {
        show: ZB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: TB("skyblockGame:autographBook")
              }), (0, HJ.jsx)("p", {
                children: TB("skyblockGame:autographBookIntro")
              })]
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              onClick: IB.dismiss
            })]
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, HJ.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, HJ.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, HJ.jsx)("strong", {
                  children: ZB.total
                }), (0, HJ.jsx)("span", {
                  children: TB("skyblockGame:autographTotal")
                })]
              }), (0, HJ.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, HJ.jsx)("strong", {
                  children: ZB.rankTotal
                }), (0, HJ.jsx)("span", {
                  children: TB("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === ZB.entries.length ? (0, HJ.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: TB("skyblockGame:autographBookEmpty")
            }) : (0, HJ.jsx)("ul", {
              className: "SkyblockAutographList",
              children: ZB.entries.map((BB => (0, HJ.jsxs)("li", {
                className: CJ()("SkyblockAutograph", {
                  Ranked: null !== BB.rank
                }),
                style: null === BB.rank ? void 0 : {
                  color: BB.rank.colour
                },
                children: [null !== BB.rank && (0, HJ.jsx)(Fo.d, {
                  className: "SkyblockAutographRankIcon",
                  name: BB.rank.icon,
                  kit: (0, Fo.f)(BB.rank.icon)
                }), (0, HJ.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, HJ.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: BB.name
                  }), (0, HJ.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== BB.rank && (0, HJ.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: BB.rank.label
                    }), (0, HJ.jsx)("span", {
                      className: "SkyblockAutographDate",
                      children: BB.signedOn
                    })]
                  })]
                })]
              }, BB.key)))
            })]
          })]
        })
      }) : null
    }
    const SG = (0, OB.memo)((function(BB) {
        let {
          controller: IB
        } = BB;
        return (0, HJ.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: IB.display.mountWaypoint,
          children: [(0, HJ.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, HJ.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, HJ.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, HJ.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, HJ.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, HJ.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Bv = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Iv(BB) {
      return "next" === BB.phase ? "\u2192" : Bv[BB.kind]
    }
    const Zv = (0, OB.memo)((function(BB) {
      let {
        controller: IB,
        display: ZB
      } = BB;
      const TB = (0, aJ.h)(hZ, IB.getNotificationSnapshot()),
        [JB, oB] = (0, OB.useState)(!1);
      return (0, aJ.d)("qteStateUpdated", (BB => {
        oB(BB.isActive)
      })), (0, HJ.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (JB ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [TB && (0, HJ.jsxs)("div", {
          className: `SkyblockQuestNotification ${TB.kind} ${TB.phase}`,
          style: {
            "--quest-notification-duration": `${TB.durationMs}ms`,
            ...TB.accent && {
              "--quest-notification-accent": TB.accent
            }
          },
          children: [(0, HJ.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (TB.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, HJ.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Iv(TB)
            }), TB.iconItem && (0, HJ.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, HJ.jsx)(OJ.e, {
                itemName: TB.iconItem,
                amount: 0
              })
            })]
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, HJ.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: TB.title
            }), (0, HJ.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, HJ.jsx)(Go.c, {
                text: TB.name
              })
            }), TB.description && (0, HJ.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, HJ.jsx)(Go.c, {
                text: TB.description
              })
            }), TB.reward && (0, HJ.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, HJ.jsx)(Go.c, {
                text: TB.reward
              })
            })]
          })]
        }, TB.token), (null === TB || void 0 === TB ? void 0 : TB.waypointNameKey) && (0, HJ.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": TB.waypointNameKey,
          "data-notification-token": TB.token,
          ref: ZB.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${TB.token}`)]
      })
    }));

    function Tv(BB) {
      const IB = parseInt(BB.replace("#", ""), 16);
      return `${IB>>16&255}, ${IB>>8&255}, ${255&IB}`
    }
    const Jv = (0, OB.memo)((function(BB) {
      let {
        controller: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)(), TB = (0, aJ.h)(XZ, IB.getSnapshot());
      if (!TB) return null;
      const JB = "arrival" === TB.phase;
      return (0, HJ.jsxs)("div", {
        className: CJ()("SkyblockPortalTransit", {
          Departure: !JB,
          Arrival: JB
        }),
        style: {
          "--portal-rgb": Tv(TB.colour),
          "--portal-duration": `${TB.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, HJ.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, HJ.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            IB.finishArrival(TB.token)
          }
        }), (0, HJ.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, HJ.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !JB && (0, HJ.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: ZB("skyblockGame:portalTransitHeading")
          }), (0, HJ.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: ZB(TB.zoneNameKey)
          })]
        })]
      }, TB.token)
    }));

    function ov() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Gv() {
      const BB = document.querySelector(".SkyblockHudCoins"),
        IB = null === BB || void 0 === BB ? void 0 : BB.getBoundingClientRect();
      return IB && IB.width > 0 ? {
        x: IB.left + Math.min(IB.width, 24) / 2,
        y: IB.top + IB.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function vv(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2
      }
    }

    function kv() {
      var BB;
      const IB = null === (BB = document.querySelector(".HotBar")) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
      return IB && IB.width > 0 ? vv(IB) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function cv(BB) {
      let {
        items: IB,
        origins: ZB,
        target: TB
      } = BB;
      return (0, HJ.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: IB.map(((BB, IB) => {
          const JB = ZB[IB];
          return (0, HJ.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${JB.x}px`,
              top: `${JB.y}px`,
              "--item-dx": TB.x - JB.x + "px",
              "--item-dy": TB.y - JB.y + "px",
              "--item-delay": 2e3 + 160 * IB + "ms",
              "--item-flight": "700ms"
            },
            children: (0, HJ.jsx)(OJ.e, {
              itemName: BB.dailyRewardItemName,
              amount: 0
            })
          }, BB.dailyRewardItemName)
        }))
      })
    }

    function nv(BB, IB) {
      const ZB = -Math.PI / 2 + 1.25 * (BB / (IB - 1) * 2 - 1),
        TB = 70 + BB % 3 * 22;
      return {
        x: Math.cos(ZB) * TB,
        y: Math.sin(ZB) * TB * .7
      }
    }

    function hv(BB) {
      let {
        origin: IB,
        target: ZB,
        count: TB
      } = BB;
      const JB = [];
      for (let oB = 0; oB < TB; oB++) {
        const BB = nv(oB, TB);
        JB.push((0, HJ.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${IB.x}px`,
            top: `${IB.y}px`,
            "--coin-bx": `${BB.x}px`,
            "--coin-by": `${BB.y}px`,
            "--coin-dx": ZB.x - IB.x + "px",
            "--coin-dy": ZB.y - IB.y + "px",
            "--coin-delay": `${AZ(oB,TB)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, HJ.jsx)(OJ.e, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, oB))
      }
      return (0, HJ.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: JB
      })
    }

    function zv(BB) {
      let {
        day: IB
      } = BB;
      const ZB = YB[IB - 1];
      return (0, HJ.jsxs)(HJ.Fragment, {
        children: [(0, HJ.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, HJ.jsx)(OJ.e, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, iJ.e)(ZB.dailyRewardCoins)]
        }), ZB.dailyRewardItems.map((BB => (0, HJ.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, HJ.jsx)(OJ.e, {
            itemName: BB.dailyRewardItemName,
            amount: 0
          }), "\xd7", BB.dailyRewardItemAmount]
        }, BB.dailyRewardItemName)))]
      })
    }

    function Fv(BB) {
      let {
        day: IB
      } = BB;
      const ZB = pB(IB);
      return (0, HJ.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: YB.map(((BB, TB) => {
          const JB = TB + 1;
          return (0, HJ.jsxs)("li", {
            className: CJ()("SkyblockDailyRewardTile", {
              Claimed: JB < IB && JB !== ZB,
              Today: JB === IB,
              Tomorrow: JB === ZB,
              Jackpot: JB === iB
            }),
            children: [(0, HJ.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: JB
            }), (0, HJ.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, HJ.jsx)(OJ.e, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, iJ.e)(BB.dailyRewardCoins)]
            }), BB.dailyRewardItems.map((BB => (0, HJ.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, HJ.jsx)(OJ.e, {
                itemName: BB.dailyRewardItemName,
                amount: 0
              }), "\xd7", BB.dailyRewardItemAmount]
            }, BB.dailyRewardItemName)))]
          }, JB)
        }))
      })
    }

    function Nv(BB) {
      let {
        view: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)(), TB = (0, OB.useRef)(null), JB = (0, OB.useRef)(null), [oB, GB] = (0, OB.useState)(null);
      (0, OB.useLayoutEffect)((() => {
        var BB;
        const IB = null === (BB = TB.current) || void 0 === BB ? void 0 : BB.getBoundingClientRect();
        if (IB) {
          var ZB, oB;
          const BB = Array.from(null !== (ZB = null === (oB = JB.current) || void 0 === oB ? void 0 : oB.children) && void 0 !== ZB ? ZB : [], (BB => vv(BB.getBoundingClientRect())));
          GB({
            origin: vv(IB),
            target: Gv(),
            itemOrigins: BB,
            itemTarget: kv()
          })
        }
      }), []);
      const vB = pB(IB.day),
        kB = function(BB, IB) {
          const [ZB, TB] = (0, OB.useState)((() => ov() ? BB : 0));
          return (0, OB.useEffect)((() => {
            if (ov()) return;
            const ZB = performance.now();
            let JB = 0;
            const oB = GB => {
              const vB = Math.min(Math.max((GB - ZB) / IB, 0), 1);
              TB(Math.round(BB * (1 - (1 - vB) ** 3))), vB < 1 && (JB = requestAnimationFrame(oB))
            };
            return JB = requestAnimationFrame(oB), () => {
              cancelAnimationFrame(JB)
            }
          }), [BB, IB]), ZB
        }(IB.coins, 450);
      return (0, HJ.jsxs)("div", {
        className: CJ()("SkyblockDailyReward", {
          Jackpot: IB.day === iB
        }),
        style: {
          "--daily-duration": `${IB.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, HJ.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, HJ.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, HJ.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, HJ.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: ZB("skyblockGame:dailyRewardTitle")
            }), (0, HJ.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: ZB("skyblockGame:dailyRewardDay", {
                day: String(IB.day)
              })
            })]
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: TB,
            children: [(0, HJ.jsx)(OJ.e, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, HJ.jsxs)("span", {
              children: ["+", (0, iJ.e)(kB)]
            })]
          }), IB.items.length > 0 && (0, HJ.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: JB,
            children: IB.items.map((BB => (0, HJ.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, HJ.jsx)(OJ.e, {
                itemName: BB.dailyRewardItemName,
                amount: 0
              }), "\xd7", BB.dailyRewardItemAmount]
            }, BB.dailyRewardItemName)))
          }), (0, HJ.jsx)(Fv, {
            day: IB.day
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [ZB("skyblockGame:dailyRewardComeBack"), (0, HJ.jsx)(zv, {
              day: vB
            })]
          })]
        }), null !== oB && (0, HJ.jsx)(hv, {
          origin: oB.origin,
          target: oB.target,
          count: IB.flyingCoins
        }), null !== oB && oB.itemOrigins.length === IB.items.length && (0, HJ.jsx)(cv, {
          items: IB.items,
          origins: oB.itemOrigins,
          target: oB.itemTarget
        })]
      })
    }
    const gv = (0, OB.memo)((function(BB) {
        let {
          controller: IB
        } = BB;
        const ZB = (0, aJ.h)(uZ, IB.getSnapshot());
        return ZB ? (0, HJ.jsx)(Nv, {
          view: ZB
        }, ZB.token) : null
      })),
      qv = "Gold Coin";

    function yv(BB) {
      return 650 + 220 * BB
    }

    function Uv(BB) {
      return {
        "--letter-delay": `${yv(BB)}ms`,
        "--letter-land": `${yv(BB)+300}ms`
      }
    }

    function Wv(BB) {
      let {
        letterCount: IB
      } = BB;
      return (0, HJ.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, HJ.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, HJ.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, HJ.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: IB
        }, ((BB, IB) => (0, HJ.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: Uv(IB),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, IB)))]
      })
    }

    function dv(BB) {
      var IB, ZB, TB;
      let {
        letter: JB,
        index: oB
      } = BB;
      const {
        t: GB
      } = (0, pJ.G)(), vB = null !== (IB = null === (ZB = JB.items[0]) || void 0 === ZB ? void 0 : ZB.itemName) && void 0 !== IB ? IB : qv;
      return (0, HJ.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: Uv(oB),
        children: [(0, HJ.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, HJ.jsx)(OJ.e, {
            itemName: vB,
            amount: 0
          })
        }), (0, HJ.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: GB(JB.reasonKey, null !== (TB = JB.reasonParams) && void 0 !== TB ? TB : void 0)
        }), (0, HJ.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [JB.coins > 0 && (0, HJ.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, HJ.jsx)(OJ.e, {
              itemName: qv,
              amount: 0
            }), "+", (0, iJ.e)(JB.coins)]
          }), JB.items.map(((BB, IB) => (0, HJ.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, HJ.jsx)(OJ.e, {
              itemName: BB.itemName,
              amount: 0
            }), BB.label, " \xd7", BB.amount]
          }, IB)))]
        })]
      })
    }

    function Cv(BB) {
      let {
        view: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)();
      return (0, HJ.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${IB.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${yv(IB.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, HJ.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, HJ.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, HJ.jsx)(Wv, {
              letterCount: IB.letters.length
            }), (0, HJ.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: ZB("skyblockGame:mailboxTitle")
            })]
          }), (0, HJ.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: IB.letters.map(((BB, IB) => (0, HJ.jsx)(dv, {
              letter: BB,
              index: IB
            }, IB)))
          }), IB.more > 0 && (0, HJ.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: ZB("skyblockGame:mailboxMore", {
              count: String(IB.more)
            })
          })]
        })
      })
    }
    const Qv = (0, OB.memo)((function(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(bZ, IB.getSnapshot());
      return ZB ? (0, HJ.jsx)(Cv, {
        view: ZB
      }, ZB.token) : null
    }));

    function sv(BB) {
      let {
        controller: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)(), TB = (0, aJ.h)(XT, IB.getSnapshot());
      if (null === TB) return null;
      const JB = TB.fullSet ? "empty" === TB.fuelState ? {
        text: ZB("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: ZB("skyblockGame:magmawardHudFullSet", {
          worn: String(TB.wornCount)
        }),
        tone: "partial"
      };
      return (0, HJ.jsx)(sJ.h, {
        placement: "statBars",
        children: (0, HJ.jsxs)("div", {
          className: CJ()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${TB.fuelState}`, {
            "SkyblockMagmawardHud-partial": !TB.fullSet,
            "SkyblockMagmawardHud-armed": TB.fullSet && "empty" !== TB.fuelState
          }),
          children: [null !== TB.flare && (0, HJ.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${TB.flare}`
          }, `flare:${TB.flareToken}`), (0, HJ.jsx)("div", {
            className: CJ()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: TB.setLit
            }),
            children: TB.pieces.map(((BB, IB) => (0, HJ.jsx)("div", {
              className: CJ()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: BB.worn,
                SkyblockMagmawardPieceJustWorn: BB.justWorn
              }),
              children: (0, HJ.jsx)(OJ.e, {
                itemName: BB.itemName,
                amount: 0
              })
            }, `${IB}:${BB.wornToken}`)))
          }, `pieces:${TB.setLitToken}`), (0, HJ.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, HJ.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, HJ.jsxs)("div", {
              className: CJ()("SkyblockMagmawardFuelCounter", TB.pulse && `SkyblockMagmawardFuelCounter-${TB.pulse}`),
              children: [(0, HJ.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, HJ.jsx)(OJ.e, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, HJ.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: TB.fuel
              })]
            }, `counter:${TB.pulseToken}`), "burn" === TB.pulse && (0, HJ.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${TB.pulseToken}`)]
          }), JB && (0, HJ.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${JB.tone} SmallTextBold`,
            children: JB.text
          })]
        })
      })
    }

    function wv(BB) {
      let {
        controller: IB
      } = BB;
      const {
        t: ZB,
        selectedLanguage: TB
      } = (0, pJ.G)(), JB = (0, aJ.h)(eT, IB.getSnapshot());
      return null === JB ? null : (0, HJ.jsx)(sJ.h, {
        placement: "statBars",
        children: (0, HJ.jsxs)("div", {
          className: CJ()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: JB.inRange
          }),
          style: {
            "--glowtide-colour": JB.colour
          },
          "aria-label": ZB("skyblockGame:glowtideChipLabel"),
          children: [(0, HJ.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), JB.inRange ? (0, HJ.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: ZB("skyblockGame:glowtideChipInRange")
          }, `call:${JB.inRangeToken}`) : (0, HJ.jsxs)(HJ.Fragment, {
            children: [(0, HJ.jsx)("div", {
              ref: IB.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, HJ.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: ZB("skyblockGame:waypointDistance", {
                distance: QB(JB.distance, TB.code)
              })
            })]
          })]
        })
      })
    }

    function Ov(BB) {
      let {
        controller: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)(), TB = (0, aJ.h)(fT, IB.getSnapshot());
      return null === TB ? null : (0, HJ.jsx)(sJ.h, {
        placement: "statBars",
        children: (0, HJ.jsxs)("div", {
          className: CJ()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: TB.full
          }),
          "aria-label": ZB("skyblockGame:glowMeterLabel", {
            fill: String(TB.fill),
            ah: String(TB.ah)
          }),
          children: [TB.burst && (0, HJ.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${TB.burstToken}`), (0, HJ.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, HJ.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${TB.ratio})`
              }
            }), TB.gained && (0, HJ.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${TB.gainToken}`), TB.full && Array.from({
              length: 5
            }, ((BB, IB) => (0, HJ.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, IB)))]
          }), TB.full && TB.rares.map((BB => (0, HJ.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, HJ.jsx)(OJ.e, {
              itemName: BB,
              amount: 0
            })
          }, BB))), TB.ready && (0, HJ.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, HJ.jsx)("span", {
              children: ZB("skyblockGame:glowMeterReady")
            })
          }, `ready:${TB.fullToken}`)]
        })
      })
    }

    function Yv(BB) {
      let {
        controller: IB
      } = BB;
      const {
        t: ZB
      } = (0, pJ.G)(), TB = (0, aJ.h)(AT, IB.getSnapshot());
      if (null === TB) return null;
      const JB = "waiting" === TB.phase,
        oB = {
          animationDuration: `${TB.waitMs}ms`,
          animationDelay: -TB.elapsedMs + "ms"
        },
        GB = JB ? void 0 : {
          animationDuration: `${TB.waitMs}ms`
        };
      return (0, HJ.jsxs)("div", {
        className: JB ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [JB && (0, HJ.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((BB, IB) => (0, HJ.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, IB))), (0, HJ.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: oB
          }), (0, HJ.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, HJ.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, HJ.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: oB
            })]
          }), (0, HJ.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, HJ.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: GB,
          children: ZB(TB.line)
        }, TB.lineIndex)]
      }, TB.token)
    }

    function iv(BB) {
      let {
        chart: IB,
        showHere: ZB,
        className: TB
      } = BB;
      return (0, HJ.jsx)("div", {
        className: CJ()("SkyblockTideChartGrid", TB, null !== IB.pictureName && "Complete"),
        "aria-hidden": "true",
        children: IB.cells.map(((BB, TB) => {
          const JB = 0 !== (IB.pulseCells & 1 << TB),
            oB = IB.castCell === TB;
          return (0, HJ.jsx)("span", {
            className: CJ()("SkyblockTideChartCell", `Cell-${BB}`, JB && "Pulse", oB && "Cast", ZB && IB.hereCell === TB && "Here")
          }, `${TB}:${JB?`p${IB.pulseToken}`:""}:${oB?`c${IB.castToken}`:""}`)
        }))
      })
    }

    function pv(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(bT, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = ZB.chip;
      if (!ZB.enabled || null === JB) return null;
      const oB = TB("skyblockGame:tideChartsChipLabel", {
        island: JB.islandName,
        lit: String(JB.lit),
        ink: String(JB.ink)
      });
      return (0, HJ.jsx)(sJ.h, {
        placement: "statBars",
        children: (0, HJ.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: CJ()("SkyblockTideChartsChip", ZB.open && "Open", null !== JB.pictureName && "Complete"),
          "aria-label": oB,
          title: oB,
          onMouseDown: BB => {
            BB.preventDefault()
          },
          onClick: IB.toggle,
          children: [(0, HJ.jsx)(iv, {
            chart: JB,
            showHere: !1,
            className: "Mini"
          }), (0, HJ.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [JB.lit, "/", JB.ink]
          })]
        })
      })
    }

    function av(BB) {
      let {
        controller: IB
      } = BB;
      const ZB = (0, aJ.h)(bT, IB.getSnapshot()),
        {
          t: TB
        } = (0, pJ.G)(),
        JB = fJ(),
        oB = ZB.card;
      return ZB.enabled && null !== oB ? (0, HJ.jsx)(LJ.c, {
        show: ZB.open,
        close: IB.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, HJ.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: JB,
          onKeyDown: uJ,
          children: [(0, HJ.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, HJ.jsxs)("div", {
              children: [(0, HJ.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: TB("skyblockGame:tideChartsTitle")
              }), (0, HJ.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: TB("skyblockGame:tideChartsIntro")
              })]
            }), (0, HJ.jsx)(eJ.l, {
              padIgnore: !0,
              ariaLabel: TB("skyblockGame:tideChartsClose"),
              onClick: IB.dismiss
            })]
          }), ZB.tabs.length > 1 && (0, HJ.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": TB("skyblockGame:tideChartsIslands"),
            children: ZB.tabs.map((BB => (0, HJ.jsx)("button", {
              type: "button",
              className: CJ()("SkyblockTideChartsTab", BB.selected && "Selected"),
              "aria-pressed": BB.selected,
              onClick: () => {
                IB.TF(BB.island)
              },
              children: BB.name
            }, BB.island)))
          }), (0, HJ.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, HJ.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": oB.gridLabel,
              children: (0, HJ.jsx)(iv, {
                chart: oB,
                showHere: !0,
                className: "Large"
              })
            }), (0, HJ.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, HJ.jsx)("h3", {
                children: oB.islandName
              }), (0, HJ.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: oB.litText
              }), null === oB.pictureName ? (0, HJ.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: TB("skyblockGame:tideChartsPictureHidden")
              }) : (0, HJ.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: TB("skyblockGame:tideChartsPictureRevealed", {
                  picture: oB.pictureName
                })
              }, oB.pictureName), (0, HJ.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, HJ.jsxs)("li", {
                  children: [(0, HJ.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), TB("skyblockGame:tideChartsLegendLit")]
                }), (0, HJ.jsxs)("li", {
                  children: [(0, HJ.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), TB("skyblockGame:tideChartsLegendClear")]
                }), null !== oB.hereCell && (0, HJ.jsxs)("li", {
                  children: [(0, HJ.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), TB("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, HJ.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, HJ.jsx)("span", {
                  children: ZB.turnsText
                }), (0, HJ.jsx)("span", {
                  children: ZB.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function Hv(BB) {
      var IB;
      let {
        controller: ZB
      } = BB;
      const {
        selectedLanguage: TB
      } = (0, pJ.G)(), JB = TB.code;
      (0, OB.useEffect)((() => {
        ZB.setTranslator(((BB, IB) => (0, pJ.C)(JB, BB, IB)), JB, ((BB, IB) => (0, pJ.w)(JB, BB, IB)))
      }), [ZB, JB]);
      const oB = (0, aJ.h)(zB, ZB.map.getSnapshot()),
        {
          openInGameMenuName: GB
        } = (0, QJ.o)(["openInGameMenuName"]);
      return (0, HJ.jsxs)(HJ.Fragment, {
        children: [(0, HJ.jsx)(Zv, {
          controller: ZB.quests,
          display: ZB.navigation.display
        }), oB.enabled && !GB && (0, HJ.jsx)(To, {
          controller: ZB.navigation
        }), (0, HJ.jsx)(MJ, {
          controller: ZB,
          minimap: oB.enabled && (null === (IB = oB.presentation) || void 0 === IB ? void 0 : IB.minimap) && (0, HJ.jsx)(Zo, {
            view: oB.presentation.minimap,
            navigation: ZB.navigation,
            controller: ZB.map
          }),
          children: (0, HJ.jsx)(zo, {
            controller: ZB.quests,
            surface: "hud"
          })
        }), (0, HJ.jsx)(SG, {
          controller: ZB.navigation
        }), (0, HJ.jsx)(Jv, {
          controller: ZB.portalTransit
        }), (0, HJ.jsx)(gv, {
          controller: ZB.dailyReward
        }), (0, HJ.jsx)(Qv, {
          controller: ZB.mailbox
        }), (0, HJ.jsx)(sv, {
          controller: ZB.magmaward
        }), (0, HJ.jsx)(wv, {
          controller: ZB.glowtide
        }), (0, HJ.jsx)(NG, {
          controller: ZB.passage
        }), (0, HJ.jsx)(pv, {
          controller: ZB.tideCharts
        }), (0, HJ.jsx)(Ov, {
          controller: ZB.glowMeter
        }), (0, HJ.jsx)(OG, {
          controller: ZB.reachLog
        }), (0, HJ.jsx)(Yv, {
          controller: ZB.hushWait
        }), (0, HJ.jsx)(CG, {
          controller: ZB.lampLight
        }), (0, HJ.jsx)(Jo, {
          controller: ZB.skills,
          surface: "hud"
        })]
      })
    }

    function Mv(BB) {
      let {
        controller: IB
      } = BB;
      return (0, HJ.jsxs)(HJ.Fragment, {
        children: [(0, HJ.jsx)(Io, {
          controller: IB.map,
          navigation: IB.navigation
        }), (0, HJ.jsx)(Jo, {
          controller: IB.skills,
          surface: "menu"
        }), (0, HJ.jsx)(zo, {
          controller: IB.quests,
          surface: "menu"
        }), (0, HJ.jsx)(Eo, {
          controller: IB.dungeons
        }), (0, HJ.jsx)(Vo, {
          controller: IB.collections
        }), (0, HJ.jsx)(IG, {
          controller: IB.questGraph
        }), (0, HJ.jsx)(GG, {
          controller: IB.forge
        }), (0, HJ.jsx)(zG, {
          controller: IB.smuggler
        }), (0, HJ.jsx)(sG, {
          controller: IB.keepersChair,
          lampLight: IB.lampLight
        }), (0, HJ.jsx)(xG, {
          controller: IB.reachLog,
          regulars: IB.regulars,
          hiddenWaters: IB.hiddenWaters
        }), (0, HJ.jsx)(aG, {
          controller: IB.regulars
        }), (0, HJ.jsx)(qG, {
          controller: IB.passage
        }), (0, HJ.jsx)(av, {
          controller: IB.tideCharts
        }), (0, HJ.jsx)(KG, {
          controller: IB.dialogue
        }), (0, HJ.jsx)(VG, {
          controller: IB.autographs
        })]
      })
    }
    var jv = ZB(36783);
    const Pv = IT + kT;

    function Rv(BB, IB, ZB, TB, JB) {
      const oB = [],
        GB = [],
        vB = ZB => {
          const TB = BB.playSound(IB, ZB.sound, ZB.volume, ZB.rate);
          TB && (GB.push(TB), void 0 !== ZB.cutAfter && oB.push(setTimeout((() => {
            TB.fade(TB.getVolume(), 0, 300)
          }), ZB.cutAfter)))
        };
      for (const kB of function(BB, IB) {
          const ZB = [{
            sound: "rpgKnifeSlice1",
            beat: IT,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: IT,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: IT,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: IT,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: IT,
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
            sound: (0, jv.f)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Pv + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, jv.f)("bigDrumSwish"),
            beat: Pv + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Pv + 60,
            lead: 180,
            volume: .5 + .06 * BB,
            rate: .82 + .07 * BB
          }];
          return BB >= 4 && ZB.push({
            sound: "exp_levelup",
            beat: Pv + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), IB && ZB.push({
            sound: "trumpetFlare",
            beat: Pv + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), ZB.push({
            sound: "harp_pling",
            beat: ZT,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), ZB
        }(ZB, TB)) JB ? oB.push(setTimeout((() => {
        vB(kB)
      }), Math.max(0, kB.beat - kB.lead / kB.rate))) : kB.beat !== IT && "magicAccent2" !== kB.sound && "trumpetFlare" !== kB.sound || vB(kB);
      return () => {
        for (const BB of oB) clearTimeout(BB);
        for (const BB of GB) BB.fade(BB.getVolume(), 0, 120)
      }
    }
    class rv {
      constructor(BB) {
        this.deps = BB, this.pending = new Map, this.localHook = null
      }
      hookWaiting(BB, IB) {
        this.pending.delete(BB);
        const ZB = this.deps.now();
        if (null === IB) {
          var TB;
          if ((null === (TB = this.localHook) || void 0 === TB ? void 0 : TB.hookId) === BB) {
            const BB = ZB >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(BB)
          }
          return
        }
        const JB = ZB + IB;
        this.settle(BB, JB) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(BB, {
          untilMs: ZB + 1e3,
          biteAtMs: JB
        }))
      }
      getLocalHook() {
        var BB, IB;
        return null !== (BB = null === (IB = this.localHook) || void 0 === IB ? void 0 : IB.hookId) && void 0 !== BB ? BB : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const BB = this.deps.now();
        for (const [IB, {
            untilMs: ZB,
            biteAtMs: TB
          }] of this.pending)(this.settle(IB, TB) || BB > ZB) && this.pending.delete(IB)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(BB, IB) {
        const ZB = this.deps.getLineOwner(BB);
        if (null === ZB) return !1;
        if (!this.deps.isLocalPlayer(ZB)) return !0;
        if (this.localHook = {
            hookId: BB,
            biteAtMs: IB
          }, !this.deps.isHushWaiting()) {
          const [IB, ZB] = this.deps.getHookPosition(BB);
          this.deps.onCastLanded(IB, ZB)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var mv = ZB(4416);
    const Xv = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      Lv = {
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
    class ev {
      constructor(BB) {
        this.deps = BB, this.tell = null
      }
      receiveTell(BB) {
        let {
          biteTellTier: IB
        } = BB;
        this.tell = {
          tier: IB,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(BB) {
        const IB = this.tell;
        if (this.tell = null, !BB) return;
        const ZB = null !== IB && this.deps.now() - IB.atMs <= 3e3 ? IB.tier : 0;
        this.deps.vibrate(Xv[ZB])
      }
      burstAtHook() {
        const BB = this.tell,
          IB = this.deps.getLocalHookPosition();
        null === BB || BB.burst || null === IB || (BB.burst = !0, this.deps.playParticles(function(BB, IB) {
          let [ZB, TB, JB] = IB;
          const {
            count: oB,
            rise: GB,
            colour: vB
          } = Lv[BB], [kB, cB, nB] = vB;
          return {
            texture: "glint",
            pos1: [ZB - .3, TB, JB - .3],
            pos2: [ZB + .3, TB + .2, JB + .3],
            dir1: [-.6, GB, -.6],
            dir2: [.6, 1.4 * GB, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: oB,
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
              minColor: [kB, cB, nB, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [kB, cB, nB, 0],
              maxColor: [kB, cB, nB, 0]
            }],
            blendMode: mv.g.Add,
            hideDist: 48
          }
        }(BB.tier, IB)))
      }
    }
    var uv = ZB(1310),
      fv = ZB(2003),
      lv = ZB(36);

    function Av(BB, IB) {
      return [{
        timeFraction: 0,
        minColor: [255 * BB[0], 255 * BB[1], 255 * BB[2], 1],
        maxColor: [255 * IB[0], 255 * IB[1], 255 * IB[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const tv = [0, 0, 0],
      bv = {
        texture: "glint",
        mipmaps: !1,
        ah: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: tv,
        dir2: tv,
        blendMode: mv.g.OneOne
      },
      xv = {
        ...bv,
        colorGradients: Av([1, .88, .38], [1, .65, .15])
      },
      Ev = {
        ...bv,
        colorGradients: Av([.55, .95, 1], [.9, 1, 1])
      },
      Dv = [.5, .5, .5],
      Kv = {
        texture: "glint",
        mipmaps: !1,
        ah: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Av([1, .12, .12], [1, .35, .2]),
        blendMode: mv.g.OneOne
      };
    class Vv {
      constructor() {
        this.drops = new Map
      }
      sN(BB, IB) {
        if ("overflowFlash" === IB.kind) {
          const [ZB, TB, JB] = IB.position, oB = BB.createParticles(Kv, {
            pos: [ZB, TB, JB],
            half: Dv
          });
          return oB.emit(18), void oB.stop()
        }
        this.drops.has(IB.itemId) || this.drops.set(IB.itemId, {
          owner: IB.owner,
          cosmetic: IB.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Iz(BB) {
        if (0 === this.drops.size) return;
        const IB = performance.now(),
          ZB = BB.getCameraPosition();
        let TB = 0;
        for (const oB of this.drops.values()) null !== oB.particles && TB++;
        for (const [oB, GB] of this.drops) {
          const vB = BB.getPositionView(oB);
          if (null === vB) {
            var JB;
            if (GB.seen || IB - GB.markedAt > 5e3) null !== GB.particles && TB--, null === (JB = GB.particles) || void 0 === JB || JB.stop(), this.drops.delete(oB);
            continue
          }
          GB.cosmetic || !BB.isLocalPlayer(GB.owner) || GB.pickupDelayCleared || (BB.clearPickupDelay(oB), GB.pickupDelayCleared = !0);
          const kB = GB.lastPosition,
            cB = GB.seen && (vB[0] - kB[0]) ** 2 + (vB[1] - kB[1]) ** 2 + (vB[2] - kB[2]) ** 2 > 4e-4,
            nB = (vB[0] - ZB[0]) ** 2 + (vB[1] - ZB[1]) ** 2 + (vB[2] - ZB[2]) ** 2 < 2025;
          GB.seen = !0, kB[0] = vB[0], kB[1] = vB[1], kB[2] = vB[2], cB && (GB.lastMovingAt = IB), null !== GB.particles && (!nB || IB - GB.lastMovingAt > 500) && (GB.particles.stop(), GB.particles = null, TB--), cB && nB && null === GB.particles && TB < 32 && (GB.particles = BB.createParticles(GB.cosmetic ? Ev : xv, {
            pos: vB
          }), TB++), null !== GB.particles && (GB.particles.moveTo(vB), GB.particles.setEmitRate(cB ? 12 : 0)), !cB && null === GB.particles && IB - Math.max(GB.lastMovingAt, GB.markedAt) > 2e3 && this.drops.delete(oB)
        }
      }
      dispose() {
        for (const IB of this.drops.values()) {
          var BB;
          null === (BB = IB.particles) || void 0 === BB || BB.stop()
        }
        this.drops.clear()
      }
    }
    var Sv = ZB(201);
    const Bk = Sv.f.fq * Sv.f.playerEyeToHeightRatio;
    class Ik {
      constructor(BB) {
        this.host = BB, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      sN(BB) {
        this.lava = BB, this.nextUpdateAt = 0
      }
      Iz() {
        var BB;
        const IB = this.host.now();
        if (IB < this.nextUpdateAt) return;
        this.nextUpdateAt = IB + 250;
        const ZB = this.host.playerPosition(),
          TB = ZB && this.findNearest([ZB[0], ZB[1] + Bk, ZB[2]]);
        if (!TB || TB.distance >= 40) return void this.stop();
        const JB = .5 * Math.min(1, (40 - TB.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(JB) : this.loop = this.host.play("lavaFlow", JB, TB.position, 40 + Bk, 9, !0), null === (BB = this.loop) || void 0 === BB || BB.setPosition(TB.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var BB;
        null === (BB = this.loop) || void 0 === BB || BB.stop(), this.loop = null
      }
      findNearest(BB) {
        let IB = -1,
          ZB = 1 / 0;
        for (let TB = 0; TB < this.lava.length; TB += 3) {
          const JB = this.lava[TB] - BB[0],
            oB = this.lava[TB + 1] - BB[1],
            GB = this.lava[TB + 2] - BB[2],
            vB = JB * JB + oB * oB + GB * GB;
          vB < ZB && (ZB = vB, IB = TB)
        }
        return IB < 0 ? null : {
          position: [this.lava[IB], this.lava[IB + 1], this.lava[IB + 2]],
          distance: Math.sqrt(ZB)
        }
      }
    }
    var Zk = ZB(1972),
      Tk = ZB(38681);
    const Jk = {
      "Grey Portal": "Gray"
    };
    for (const hk of JB.Kc) Jk[`${hk} Portal`] = hk;
    const Gk = Object.keys(Jk),
      vk = Object.fromEntries(Gk.map((BB => [BB, (0, JB.cb)(JB.P[`${(0,JB.Ee)(Jk[BB])}Team`])])));
    Object.fromEntries(Gk.map((BB => [BB, JB.P[`${(0,JB.Ee)(Jk[BB])}UiText`]])));
    class kk {
      constructor(BB, IB) {
        this.presentation = BB, this.portal = IB, this.unlocked = void 0
      }
      sN(BB) {
        const IB = !1 === this.unlocked && BB;
        this.unlocked = BB, this.Iz();
        const {
          min: ZB,
          max: TB,
          unlockedBlock: JB
        } = this.portal;
        if (IB && this.presentation.hasChunk(...ZB)) {
          const [BB, IB, oB] = vk[JB];
          this.presentation.playParticles({
            pos1: [...ZB],
            pos2: TB.map((BB => BB + 1)),
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
              minColor: [BB, IB, oB, 1],
              maxColor: [Math.min(255, BB + 55), Math.min(255, IB + 55), Math.min(255, oB + 90), 1]
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
      Iz() {
        var BB;
        const IB = this.unlocked ? this.portal.unlockedBlock : null !== (BB = this.portal.lockedBlock) && void 0 !== BB ? BB : "Light Gray Portal",
          {
            min: ZB,
            max: TB
          } = this.portal;
        for (let JB = ZB[0]; JB <= TB[0]; JB++)
          for (let BB = ZB[1]; BB <= TB[1]; BB++)
            for (let oB = ZB[2]; oB <= TB[2]; oB++) this.presentation.hasChunk(JB, BB, oB) && this.presentation.WU(JB, BB, oB) !== IB && this.presentation.UH(JB, BB, oB, IB)
      }
    }
    const ck = {
        farming_1: {
          raises: BB => "NPC" === BB.type && "chef" === BB.variation,
          rise: .4
        },
        fishing_1: {
          raises: BB => "Draugr Warper" === BB.type,
          rise: .4
        }
      },
      nk = (BB, IB, ZB, oB) => {
        let {
          localPlayerId: GB
        } = oB;
        const vB = new WJ({
          translate: (BB, IB) => (0, pJ.C)(uv.h.get().getCurrentLanguageCode(), BB, IB),
          translateWithIcons: (BB, IB) => (0, pJ.w)(uv.h.get().getCurrentLanguageCode(), BB, IB),
          setMenuOpen: BB => {
            BB ? (0, bB.t)() : (0, bB.f)()
          },
          dismissMenu: bB.i,
          publishSkills: BB => {
            xB.l.Gq(GZ, BB, !0)
          },
          publishQuests: BB => {
            xB.l.Gq(nZ, BB, !0)
          },
          publishQuestNotification: BB => {
            xB.l.Gq(hZ, BB, !0)
          },
          publishDungeons: BB => {
            xB.l.Gq(NZ, BB, !0)
          },
          publishCollections: BB => {
            xB.l.Gq(rZ, BB, !0)
          },
          publishMap: BB => {
            xB.l.Gq(zB, BB, !0)
          },
          publishHud: BB => {
            xB.l.Gq(qJ, BB, !0)
          },
          publishPortalTransit: BB => {
            xB.l.Gq(XZ, BB, !0)
          },
          isLoadingScreenUp: () => QJ.d.get("loadingOverlayVisible"),
          publishDailyReward: BB => {
            xB.l.Gq(uZ, BB, !0)
          },
          publishMailbox: BB => {
            xB.l.Gq(bZ, BB, !0)
          },
          publishQuestGraph: BB => {
            xB.l.Gq(EZ, BB, !0)
          },
          publishForge: BB => {
            xB.l.Gq(gT, BB, !0)
          },
          publishSmuggler: BB => {
            xB.l.Gq(UT, BB, !0)
          },
          publishKeepersChair: BB => {
            xB.l.Gq(iT, BB, !0)
          },
          publishReachLog: BB => {
            xB.l.Gq(aT, BB, !0)
          },
          publishLampLight: BB => {
            xB.l.Gq(rT, BB, !0)
          },
          publishMagmaward: BB => {
            xB.l.Gq(XT, BB, !0)
          },
          publishGlowtide: BB => {
            xB.l.Gq(eT, BB, !0)
          },
          publishGlowMeter: BB => {
            xB.l.Gq(fT, BB, !0)
          },
          publishHushWait: BB => {
            xB.l.Gq(AT, BB, !0)
          },
          publishPassage: BB => {
            xB.l.Gq(CT, BB, !0)
          },
          publishTideCharts: BB => {
            xB.l.Gq(bT, BB, !0)
          },
          publishRegulars: BB => {
            xB.l.Gq(IJ, BB, !0)
          },
          publishHiddenWaters: BB => {
            xB.l.Gq(GJ, BB, !0)
          },
          publishDialogue: BB => {
            xB.l.Gq(kJ, BB, !0)
          },
          publishAutographs: BB => {
            xB.l.Gq(FJ, BB, !0)
          },
          onDailyRewardStarted: BB => {
            MB.playSound(GB, BB.day === iB ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (BB, IB) => {
            MB.playSound(GB, "exp_collect", .35, 1 + .6 * BB / (IB - 1)), xB.l.Gq(fZ, BB === IB - 1)
          },
          onDailyRewardItemLanded: BB => {
            MB.playSound(GB, "pickUp", .6, 1 + .15 * BB)
          },
          onMailboxStarted: () => {
            MB.playSound(GB, "rpgMetalClick", .6, 1), MB.playSound(GB, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            MB.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: lv.n,
          requestTracking: BB => {
            MB.sendCommand(`quests track ${BB}`)
          },
          requestDungeonEnter: (BB, IB) => {
            MB.sendCommand(`dungeonEnter ${BB} ${IB}`)
          },
          requestQuestJump: BB => {
            MB.sendCommand(`${PB} jump ${BB}`)
          },
          requestQuestArrive: (BB, IB) => {
            const ZB = `${PB} arrive ${BB}`;
            MB.sendCommand(IB ? `${ZB} complete` : ZB)
          },
          requestForge: BB => {
            let {
              blade: IB,
              guard: ZB,
              handle: TB
            } = BB;
            MB.sendCommand(`forge ${IB} ${ZB} ${TB}`)
          },
          requestDialogue: () => {
            MB.sendCommand("quests dialogue")
          },
          requestSmuggle: (BB, IB) => {
            MB.sendCommand(`smuggle ${BB} ${IB}`)
          },
          requestKeepersChairAim: BB => {
            MB.sendCommand(`keeperschair-aim ${BB}`)
          },
          requestReachLogOpen: () => {
            MB.sendCommand("reachlog-open")
          },
          requestLampLight: BB => {
            MB.sendCommand(`${BB}`)
          },
          requestTravel: BB => {
            MB.sendCommand(`map travel ${BB.kind} ${BB.id} ${BB.requestId}`)
          }
        });
        let kB, cB, nB, hB, FB, NB, gB, dB, CB, QB, sB, YB, pB;
        const HB = new Vv;
        let MB, jB = null;
        const RB = ck[null !== ZB && void 0 !== ZB ? ZB : ""],
          LB = (BB, IB) => {
            null !== RB && void 0 !== RB && RB.raises(IB) && MB.setNametagOffset(BB, RB.rise)
          },
          fB = new ev({
            getLocalHookPosition: () => {
              const BB = lB.getLocalHook();
              return null !== BB && MB.checkValid(BB) ? MB.aU(BB) : null
            },
            playParticles: BB => {
              MB.playParticleEffect(BB)
            },
            vibrate: BB => {
              EB.d.play("fishBite", BB)
            },
            now: () => performance.now()
          }),
          lB = new rv({
            getLineOwner: BB => MB.checkValid(BB) ? MB.getLineOwner(BB) : null,
            isLocalPlayer: BB => MB.isLocalPlayer(BB),
            getHookPosition: BB => {
              const [IB, , ZB] = MB.aU(BB);
              return [IB, ZB]
            },
            isHushWaiting: () => {
              var BB;
              return "waiting" === (null === (BB = vB.hushWait.getSnapshot()) || void 0 === BB ? void 0 : BB.phase)
            },
            onCastLanded: (BB, IB) => {
              vB.tideCharts.castLanded(BB, IB)
            },
            onLocalHookSettled: () => {
              fB.onLocalHookSettled()
            },
            onLocalWaitEnded: BB => {
              fB.onLocalWaitEnded(BB)
            },
            now: () => performance.now()
          }),
          DB = new Ik({
            now: () => performance.now(),
            playerPosition: () => MB.checkValid(GB) ? MB.aU(GB) : null,
            play: (BB, IB, ZB, TB, JB, oB) => MB.playSound(GB, BB, IB, 1, {
              JB: ZB,
              maxHearDist: TB,
              refDistance: JB
            }, oB)
          }),
          KB = new Map;
        let VB;
        return {
          onCreate: BB => {
            if (MB = BB, jB = new Tk.SkyblockEntityFacing(BB, RB ? LB : null), vB.portalTransit.resumeArrival(null !== ZB && void 0 !== ZB ? ZB : null), (null !== ZB && void 0 !== ZB ? ZB : TB) === TB) {
              let BB = -1 / 0;
              VB = xB.l.subscribe("toggleMenu", (IB => {
                const ZB = performance.now();
                "inventory|Workbench" !== IB || "cross_to_hub" !== vB.quests.getTrackedQuestId() || ZB - BB < 1e4 || (BB = ZB, MB.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [TB, JB] of Object.entries(null !== (IB = rB[null !== ZB && void 0 !== ZB ? ZB : ""]) && void 0 !== IB ? IB : {})) {
              var IB;
              KB.set(TB, new kk({
                hasChunk: (IB, ZB, TB) => BB.isBlockInLoadedChunk(IB, ZB, TB),
                WU: (IB, ZB, TB) => BB.blockIdToBlockName(BB.getBlockId(IB, ZB, TB)),
                UH: (IB, ZB, TB, JB) => {
                  BB.UH(IB, ZB, TB, JB)
                },
                playParticles: IB => {
                  BB.playParticleEffect(IB)
                }
              }, JB))
            }
            pB = (0, Zk.g)((BB => function(BB) {
              return Object.hasOwn(AI, BB) || BB.startsWith("npc_")
            }(BB) ? bI(BB) : null)), vB.resolveItemName = (IB, ZB) => {
              const TB = BB.getItemStat(GB, IB, "displayName");
              return TB && "object" === typeof TB && "translationKey" in TB ? ZB(TB.translationKey, (0, pJ.s)(TB.params, fv.b.shown)) : "string" === typeof TB ? ZB(TB) : IB
            }, vB.quests.notifications.onShown = BB => {
              "quest" === BB ? MB.playSound(GB, "magicAccent1", 1, 1) : "skillLevel" === BB ? MB.playSound(GB, "magicAccent1", 1, .6) : "landmark" === BB ? MB.playSound(GB, "trumpetFlare", 1, .6) : "npcNote" === BB ? MB.playSound(GB, "magicAccent2", .8, 1.1) : "started" === BB ? MB.playSound(GB, (0, jv.f)("bigDrumSwish"), 1, 1) : MB.playSound(GB, (0, jv.f)("rpgHandleSmallLeather"), 1, 1)
            }, vB.forge.onPartSelected = () => {
              MB.playSound(GB, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, vB.forge.onOpened = () => {
              ! function(BB) {
                BB.preloadSounds([(0, jv.f)("firecracker"), "fireBurn", "magicAccent2"])
              }(BB)
            }, vB.forge.onForgeStarted = (IB, ZB, TB) => Rv(BB, GB, IB, ZB, TB), vB.smuggler.onBought = () => {
              MB.playSound(GB, (0, jv.f)("rpgHandleSmallLeather"), 1, 1), MB.playSound(GB, "chestOpen", .6, 1)
            }, vB.compass.register(new qB(vB.map, !0)), vB.compass.register(new qB(vB.map, !1)), vB.compass.register(new UB(vB.map)), vB.compass.register(new WB((() => vB.quests.getSnapshot().compassTarget)));
            for (const ZB of ["enemy", "npc"]) vB.compass.register(new yB(vB.map, ZB, (IB => BB.checkValid(IB) ? BB.aU(IB) : void 0), (IB => BB.isAlive(IB))))
          },
          onAfterRender: (BB, IB) => {
            const ZB = MB.checkValid(GB) ? MB.aU(GB) : null;
            vB.navigation.afterRender(ZB, performance.now(), IB), vB.glowtide.afterRender(ZB, IB.cameraHeading), vB.tideCharts.afterRender(ZB), lB.afterRender()
          },
          onClose: () => {
            var BB, IB, ZB, TB, JB, oB, GB, zB, NB, qB, yB, UB, WB, wB, OB;
            VB && xB.l.unsubscribe(VB), null === (BB = pB) || void 0 === BB || BB(), HB.dispose(), DB.dispose(), null === (IB = jB) || void 0 === IB || IB.dispose(), lB.dispose(), vB.dispose(), null === (ZB = kB) || void 0 === ZB || ZB(), null === (TB = cB) || void 0 === TB || TB(), null === (JB = nB) || void 0 === JB || JB(), null === (oB = hB) || void 0 === oB || oB(), null === (GB = FB) || void 0 === GB || GB(), null === (zB = gB) || void 0 === zB || zB(), null === (NB = undefined) || void 0 === NB || NB(), null === (qB = dB) || void 0 === qB || qB(), null === (yB = CB) || void 0 === yB || yB(), null === (UB = QB) || void 0 === UB || UB(), null === (WB = sB) || void 0 === WB || WB(), null === (wB = undefined) || void 0 === wB || wB(), null === (OB = YB) || void 0 === OB || OB()
          },
          onPlayerChangeBlock: (BB, IB, TB, oB, kB, cB) => {
            if (BB === GB && "Air" === cB) {
              const BB = MB.getClientOption(GB, "creative");
              vB.skills.predictBlock([IB, TB, oB], kB, BB);
              const cB = function(BB, IB) {
                  if ("hub" === IB || "farming_1" === IB || "mining_1" === IB) return !eB.has(BB) || "hub" !== IB && "mining_1" !== IB ? Object.hasOwn(XB, BB) ? XB[BB] : void 0 : mB
                }(kB, ZB),
                nB = ("hub" === ZB || "mining_1" === ZB) && (JB.ud.some((BB => BB === kB)) || Object.hasOwn(uB, kB) || "mining_1" === ZB && "Block of Coal" === kB);
              BB || void 0 === cB && !nB || MB.UH(IB, TB, oB, null !== cB && void 0 !== cB ? cB : mB)
            }
          },
          onPlayerAttackEntity: (BB, IB) => {
            if (BB !== GB || "Player" !== MB.getEntityType(IB)) return;
            const [ZB, TB, JB] = MB.aU(IB);
            MB.burstParticlePreset("critical", [ZB, TB + 1, JB], 10)
          },
          onChangeBlockFail: BB => {
            for (const {
                UB: IB
              }
              of BB) vB.skills.rejectBlock(IB)
          },
          onReceivedMessageFromServer: (BB, IB) => {
            if ("skyblockGatedPortal" === BB) {
              var ZB;
              const [BB, TB] = IB;
              return void(null === (ZB = KB.get(BB)) || void 0 === ZB || ZB.sN(TB))
            }
            if ("skyblockDailyReward" === BB) return void vB.dailyReward.sN(IB);
            if ("skyblockMailbox" === BB) return void vB.mailbox.sN(IB);
            if ("skyblockPortalTransit" === BB) return void vB.portalTransit.sN(IB);
            if ("skyblockLoot" === BB) return void HB.sN(MB, IB);
            if ("skyblockLava" === BB) return void DB.sN(IB);
            if ("skyblockForge" === BB) return void vB.forge.sN(IB);
            if ("skyblockMagmaward" === BB) return void vB.magmaward.sN(IB);
            if ("skyblockGlowtide" === BB) return void vB.glowtide.sN(IB);
            if ("skyblockGlowMeter" === BB) return void vB.glowMeter.sN(IB);
            if ("skyblockHushWait" === BB) return void vB.hushWait.sN(IB);
            if ("skyblockPassage" === BB) {
              const BB = IB;
              return vB.passage.sN(BB), vB.reachLog.receivePassagePhase(BB.passagePhase), QB ??= (0, wB.s)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: vB.passage.show
              }), void vB.keepersChair.receivePassage({
                keepersChairPassagePhase: BB.passagePhase,
                keepersChairPassageNextPhase: BB.passageNextPhase,
                keepersChairPassageTurnsInMs: BB.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === BB) {
              const BB = IB;
              return vB.tideCharts.sN(BB), void(BB.tideCharts.length > 0 && (sB ??= (0, wB.s)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: vB.tideCharts.show
              })))
            }
            if (BB === AB.D) {
              var TB;
              const {
                hookId: BB,
                waiting: ZB
              } = IB;
              return void lB.hookWaiting(BB, null !== (TB = null === ZB || void 0 === ZB ? void 0 : ZB.remainingMs) && void 0 !== TB ? TB : null)
            }
            if ("skyblockBiteTell" === BB) return void fB.receiveTell(IB);
            if ("skyblockSmuggler" === BB) return void vB.smuggler.sN(IB);
            if ("skyblockKeepersChair" === BB) return vB.keepersChair.sN(IB), void vB.lampLight.setAtChair(vB.keepersChair.isAtChair());
            if ("skyblockLampLight" === BB) {
              const BB = IB;
              var JB;
              if (vB.lampLight.sN(BB), BB.lampLightReleasing) CB ??= (0, wB.s)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  vB.lampLight.setRelease(!1)
                }
              });
              else null === (JB = CB) || void 0 === JB || JB(), CB = void 0;
              return
            }
            if ("skyblockRegulars" === BB) return void vB.regulars.sN(IB);
            if ("skyblockHiddenWaters" === BB) return void vB.hiddenWaters.sN(IB);
            if ("skyblockReachLog" === BB) return vB.reachLog.sN(IB), void(dB ??= (0, wB.s)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: MT
              },
              onClick: vB.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === BB) {
              for (const [BB, ZB, TB, JB] of IB) MB.UH(BB, ZB, TB, JB);
              return
            }
            if ("skyblockHud" === BB) vB.receiveHud(IB);
            else if ("skyblockMap" === BB) vB.map.sN(IB);
            else if (BB === tB.f) vB.skills.sN(IB);
            else if (BB === aB && "dialogue" === IB.kind) vB.dialogue.sN(IB);
            else if (BB === aB) vB.quests.sN(IB);
            else if ("skyblockDungeons" === BB) vB.dungeons.sN(IB);
            else if ("sbCollections" === BB) vB.collections.sN(IB);
            else if ("skyblockQuestGraph" === BB) vB.questGraph.sN(IB);
            else {
              if ("skyblockAutographs" !== BB) return;
              vB.autographs.sN(IB)
            }
            if (!cB && vB.map.getSnapshot().enabled) {
              const BB = (0, wB.s)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: vB.map.show
                }),
                IB = (0, bB.v)(vB.map.show);
              cB = () => {
                BB(), IB()
              }
            }!nB && vB.skills.getSnapshot().enabled && (nB = (0, wB.s)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: vB.skills.show
            })), !gB && vB.collections.getSnapshot().enabled && (gB = (0, wB.s)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: vB.collections.show
            })), !hB && vB.quests.getSnapshot().enabled && (hB = (0, wB.s)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: vB.quests.show
            })), !YB && vB.autographs.getSnapshot().enabled && (YB = (0, wB.s)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: vB.autographs.show
            }));
            const oB = vB.dungeons.getSnapshot().enabled;
            var GB;
            (nB || hB || oB) && NB !== oB && (NB = oB, null === (GB = FB) || void 0 === GB || GB(), FB = (0, wB.s)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: PI
              },
              disabled: !oB,
              panel: !0,
              onClick: vB.dungeons.show
            }));
            kB || (kB = (0, bB.x)((0, OB.createElement)(Hv, {
              controller: vB
            }), {
              content: (0, OB.createElement)(Mv, {
                controller: vB
              }),
              onClose: vB.close
            }))
          },
          Iz: () => {
            var BB;
            for (const IB of KB.values()) IB.Iz();
            HB.Iz(MB), DB.Iz(), null === (BB = jB) || void 0 === BB || BB.Iz(), vB.skills.Iz(), vB.quests.Iz(), vB.dailyReward.Iz(), vB.mailbox.Iz(), vB.map.Iz()
          }
        }
      }
  },
  36387: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB,
      f: () => TB
    });
    const TB = "skyblockSkills",
      JB = "skills_test_gym"
  },
  34220: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => JB,
      e: () => GB
    });
    const TB = [{
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

    function JB(BB) {
      let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof BB) {
        if (!Number.isFinite(BB)) return "0";
        if (Math.abs(BB) < 100) {
          const IB = BB < 0 ? "-" : "",
            ZB = Math.abs(BB);
          return ZB >= 10 ? `${IB}${ZB.toFixed(1).replace(/\.0$/,"")}` : `${IB}${ZB.toFixed(2).replace(/\.?0+$/,"")}`
        }
        IB = BigInt(Math.floor(BB))
      } else IB = BB;
      const JB = IB < 0n ? -IB : IB,
        oB = IB < 0n ? "-" : "",
        GB = JB.toString();
      if (GB.length <= ZB) return `${oB}${GB}`;
      const vB = 3 * Math.floor((GB.length - 1) / 3);
      if (vB < 3) return `${oB}${GB}`;
      if (vB > 3 * TB.length) {
        const BB = GB[0],
          IB = GB.slice(1, 3).replace(/0+$/, "");
        return `${oB}${IB?`${BB}.${IB}`:BB}e${GB.length-1}`
      }
      const {
        threshold: kB,
        suffix: cB
      } = TB[TB.length - vB / 3], nB = JB / kB, hB = Number(1000n * (JB % kB) / kB), zB = Number(nB) + hB / 1e3;
      let FB;
      return FB = zB >= 100 ? Math.floor(zB).toString() : zB >= 10 ? zB.toFixed(1).replace(/\.0$/, "") : zB.toFixed(2).replace(/\.?0+$/, ""), `${oB}${FB}${cB}`
    }
    const oB = TB.map((BB => {
      let {
        threshold: IB,
        suffix: ZB
      } = BB;
      return {
        threshold: Number(IB),
        suffix: ZB
      }
    })).filter((BB => {
      let {
        threshold: IB
      } = BB;
      return Number.isFinite(IB)
    }));

    function GB(BB) {
      const IB = Math.abs(BB),
        ZB = BB < 0 ? "-" : "";
      for (const {
          threshold: TB,
          suffix: JB
        }
        of oB)
        if (IB >= TB) {
          const BB = IB / TB;
          if (BB >= 1e3) return `${ZB}${IB.toExponential(2).replace("e+","e")}`;
          let oB;
          return oB = BB >= 100 ? Math.floor(BB).toString() : BB >= 10 ? BB.toFixed(1).replace(/\.0$/, "") : BB.toFixed(2).replace(/\.?0+$/, ""), `${ZB}${oB}${JB}`
        } return `${ZB}${IB}`
    }
  },
  38600: (BB, IB, ZB) => {
    var TB = {
      "./combat_1.png": 38606,
      "./dungeon_crumbling_crypt.png": 38614,
      "./dungeon_frozen_hollow.png": 38617,
      "./dungeon_wildwood_grove.png": 38624,
      "./dungeons.png": 38628,
      "./farming_1.png": 38631,
      "./fishing_1.png": 38637,
      "./hub.png": 38641,
      "./island.png": 38643,
      "./mining_1.png": 38646,
      "./mining_1_bridge.png": 38654,
      "./mining_1_gallery.png": 38661,
      "./mining_1_hollow.png": 38664,
      "./mining_1_village.png": 38673
    };

    function JB(BB) {
      var IB = oB(BB);
      return ZB(IB)
    }

    function oB(BB) {
      if (!ZB.o(TB, BB)) {
        var IB = new Error("Cannot find module '" + BB + "'");
        throw IB.code = "MODULE_NOT_FOUND", IB
      }
      return TB[BB]
    }
    JB.keys = function() {
      return Object.keys(TB)
    }, JB.resolve = oB, BB.exports = JB, JB.id = 38600
  },
  38606: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38614: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38617: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38624: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38628: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38631: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  38637: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38641: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  38643: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  38646: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  38654: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  38661: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  38664: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38673: (BB, IB, ZB) => {
    BB.exports = ZB.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  },
  18343: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20473: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  22825: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24435: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26150: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26163: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38583: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  },
  38590: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);