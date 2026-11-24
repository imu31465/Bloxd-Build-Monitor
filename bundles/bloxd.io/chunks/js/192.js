export const id = 192;
export const ids = [52, 192];
export const modules = {
  38762: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      f: () => MT
    });
    const WT = new WeakMap;

    function zT(TT, UT) {
      return WT.set(TT, UT), TT
    }

    function MT(TT) {
      var UT;
      return null !== (UT = WT.get(TT)) && void 0 !== UT ? UT : null
    }
  },
  38669: (TT, UT, mT) => {
    function WT(TT, UT, mT) {
      var WT;
      const {
        width: zT,
        height: MT
      } = mT, gT = null !== (WT = TT.text) && void 0 !== WT ? WT : TT, nT = (gT.x / 100 - .5) * zT, HT = (gT.y / 100 - .5) * MT, kT = zT / 2 - UT.x;
      if (null !== TT.text && Math.abs(nT) <= kT && HT >= UT.top - MT / 2 && HT <= MT / 2 - UT.bottom) return {
        x: gT.x,
        y: gT.y
      };
      const jT = Math.min(0 === nT ? 1 / 0 : kT / Math.abs(nT), HT > 0 ? (MT / 2 - UT.bottom) / HT : HT < 0 ? (UT.top - MT / 2) / HT : 1 / 0);
      return !Number.isFinite(jT) || jT < 0 ? {
        x: 50,
        y: 50
      } : {
        x: 50 + nT * jT / zT * 100,
        y: 50 + HT * jT / MT * 100
      }
    }
    mT.d(UT, {
      e: () => WT
    })
  },
  38693: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    const WT = 4,
      zT = 12e3,
      MT = 1e3;
    class gT {
      constructor() {
        let {
          limit: TT = WT,
          windowMs: UT = zT,
          spacingMs: mT = MT,
          now: gT = Date.now
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        this.sent = [], this.lastSentAt = -1 / 0, this.timer = null, this.listeners = new Set, this.priority = new Set, this.limit = void 0, this.windowMs = void 0, this.spacingMs = void 0, this.now = void 0, this.limit = TT, this.windowMs = UT, this.spacingMs = mT, this.now = gT
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
          UT = this.lastSentAt + this.spacingMs,
          mT = Math.min(UT > TT ? UT : 1 / 0, this.sent.length > 0 ? this.sent[0] + this.windowMs : 1 / 0);
        mT !== 1 / 0 && (this.timer = setTimeout((() => {
          this.timer = null, this.prune(), this.schedule(), this.notify()
        }), Math.max(0, mT - TT)))
      }
      notify() {
        for (const TT of this.listeners) TT()
      }
      clearTimer() {
        null !== this.timer && (clearTimeout(this.timer), this.timer = null)
      }
    }
  },
  38667: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT
    });
    class WT {
      constructor(TT, UT, mT) {
        this.EZ = TT, this.beforeOpen = UT, this.afterClose = mT, this.open = !1, this.kB = !1, this.snapshot = void 0, this.getSnapshot = () => this.snapshot, this.show = () => {
          this.isEnabled() && !this.kB && (this.open = !0, this.beforeOpen(this), this.emit())
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
        this.open = !1, this.emit(), this.kB = !0
      }
      isEnabled() {
        return !0
      }
      emit() {
        this.kB || (this.snapshot = this.buildSnapshot(), this.EZ(this.snapshot))
      }
    }
  },
  38764: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      SkyblockEntityFacing: () => nT,
      needsSkyblockEntityFacing: () => gT
    });
    var WT = mT(649),
      zT = mT(4328),
      MT = mT(38770);

    function gT(TT, UT) {
      if (TT.metaInfo === WT.c || "Iron Guardian" === TT.type || "Gold Guardian" === TT.type) return !0;
      if ("Pig" === TT.type) return "sitting" === TT.pose;
      if ("Person" !== TT.meshKind || void 0 === TT.meshOpts) return !1;
      let mT = null === UT || void 0 === UT ? void 0 : UT.get(TT.meshOpts);
      if (void 0 === mT) {
        var MT, gT;
        const WT = (0, zT.g)(TT);
        mT = !1, "pig_napoleon" === (null === WT || void 0 === WT || null === (MT = WT.opts.textures) || void 0 === MT ? void 0 : MT.head) ? mT = !0 : "npc_pig_head" === (null === WT || void 0 === WT || null === (gT = WT.opts.textures) || void 0 === gT ? void 0 : gT.head) && (mT = "sitting" === WT.opts.pose || "sitting"), UT && (UT.size >= 256 && UT.clear(), UT.set(TT.meshOpts, mT))
      }
      return "sitting" === mT ? "sitting" === TT.pose : mT
    }(0, MT.d)("skyblock", ((TT, UT) => {
      UT.setFacingTolerance(gT(TT) ? 0 : null)
    }));
    class nT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this.api = TT, this.alsoVisit = UT, this.facing = new Set, this.nextFacing = new Set, this.meshFacingCache = new Map, this.visit = TT => {
          var UT;
          const mT = this.api.getEntityInfo(TT);
          mT && (gT(mT, this.meshFacingCache) && (this.api.setFacingTolerance(TT, 0), this.nextFacing.add(TT)), null === (UT = this.alsoVisit) || void 0 === UT || UT.call(this, TT, mT))
        }
      }
      Cl() {
        const {
          api: TT
        } = this, UT = this.nextFacing;
        TT.forEachEntity(this.visit);
        for (const mT of this.facing) UT.has(mT) || TT.setFacingTolerance(mT, null);
        this.facing.clear(), this.nextFacing = this.facing, this.facing = UT
      }
      dispose() {
        for (const TT of this.facing) this.api.setFacingTolerance(TT, null);
        this.facing.clear(), this.meshFacingCache.clear()
      }
    }
  },
  38663: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => lH
    });
    const WT = "island";
    var zT = mT(366);
    const MT = (0, zT.Nb)([0, 0, -1]),
      gT = [{
        name: "S",
        bearing: (0, zT.Nb)([0, 0, 1])
      }, {
        name: "E",
        bearing: (0, zT.Nb)([-1, 0, 0])
      }, {
        name: "N",
        bearing: MT
      }, {
        name: "W",
        bearing: (0, zT.Nb)([1, 0, 0])
      }];

    function nT(TT, UT, mT) {
      return [100 * (mT.mapMaxX - TT) / (mT.mapMaxX - mT.mapMinX), 100 * (UT - mT.mapMinZ) / (mT.mapMaxZ - mT.mapMinZ)]
    }

    function HT(TT, UT, mT) {
      const zT = "local" === UT,
        MT = TT.background,
        gT = UT => MT ? nT(UT[0] - TT.mapOrigin[0], UT[2] - TT.mapOrigin[2], MT.bounds) : [50, 50],
        HT = (TT.insideDungeon ? [] : TT.landmarks).map((TT => {
          var UT, WT;
          return {
            id: TT.id,
            name: mT(TT.visited && TT.nameKey ? null !== (UT = TT.mapLabelKey) && void 0 !== UT ? UT : TT.nameKey : "skyblockGame:mapUnknown"),
            icon: TT.visited && null !== (WT = TT.icon) && void 0 !== WT ? WT : "unknown",
            visited: TT.visited,
            current: !1,
            position: gT(TT.position),
            travelKind: "landmark",
            travelId: TT.id
          }
        })),
        jT = TT.zones.map((UT => {
          var WT;
          return {
            id: UT.id,
            name: mT(UT.visited && UT.nameKey ? UT.nameKey : "skyblockGame:mapUnknown"),
            icon: UT.visited && null !== (WT = UT.icon) && void 0 !== WT ? WT : "unknown",
            visited: UT.visited,
            current: UT.id === TT.zoneId,
            position: UT.position,
            thumbnail: UT.visited ? UT.id : void 0,
            travelKind: "zone",
            travelId: UT.id
          }
        })),
        lT = TT.insideDungeon || !MT ? [] : TT.portals.map((TT => {
          var UT;
          return {
            id: TT.id,
            name: mT(null !== (UT = TT.nameKey) && void 0 !== UT ? UT : "skyblockGame:mapUnknown"),
            icon: TT.visited ? "dungeons" === TT.destination ? "portal_orange" : "portal" : "unknown",
            visited: TT.visited,
            current: !1,
            position: gT(TT.position),
            colour: TT.colour,
            travelKind: "zone",
            travelId: TT.destination
          }
        })),
        LT = zT ? HT : jT,
        pT = LT.filter((TT => TT.visited)).length,
        BT = MT ? (MT.bounds.mapMaxX - MT.bounds.mapMinX) / (MT.bounds.mapMaxZ - MT.bounds.mapMinZ) : 2,
        ZT = MT ? JSON.stringify([MT.bounds, TT.mapOrigin]) : "";
      return {
        local: zT,
        points: LT,
        portals: zT ? lT : [],
        progress: LT.length ? mT("skyblockGame:mapDiscovered", {
          current: String(pT),
          total: String(LT.length)
        }) : null,
        percent: LT.length ? 100 * pT / LT.length : 0,
        canTravel: [...LT, ...zT ? lT : []].some((TT => TT.visited && !TT.current)),
        noLandmarks: zT && !TT.insideDungeon && 0 === HT.length,
        background: MT ? {
          imageKey: MT.imageKey,
          fallbackImageKey: TT.zoneId,
          geometryKey: ZT,
          label: mT(MT.labelKey),
          colour: MT.backgroundColour,
          ratio: BT
        } : null,
        connections: kT(TT.zones),
        minimap: MT ? {
          imageKey: MT.imageKey,
          fallbackImageKey: TT.zoneId,
          geometryKey: ZT,
          label: mT(MT.labelKey),
          colour: MT.backgroundColour,
          caption: mT(TT.zoneId === WT ? "skyblockGame:zoneIsland" : MT.labelKey),
          width: (MT.bounds.mapMaxX - MT.bounds.mapMinX) / MT.minimapSpan * 100 + "%",
          height: (MT.bounds.mapMaxZ - MT.bounds.mapMinZ) / MT.minimapSpan * 100 + "%",
          markers: [...HT, ...lT]
        } : null
      }
    }

    function kT(TT) {
      const UT = new Set;
      return TT.flatMap((mT => mT.connections.flatMap((WT => {
        const zT = TT.find((TT => TT.id === WT)),
          MT = [mT.id, WT].sort().join("|");
        return !zT || UT.has(MT) ? [] : (UT.add(MT), [{
          id: `${mT.id}-${WT}`,
          start: mT.position,
          end: zT.position,
          explored: mT.visited && zT.visited
        }])
      }))))
    }
    var jT = mT(38667);
    class lT extends jT.e {}
    const LT = "skyblockMapView";
    class pT extends lT {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, WT, zT), this.requestTravel = UT, this.translate = mT, this.now = MT, this.entities = [], this.map = null, this.tab = "local", this.pending = null, this.nextRequestId = 0, this.feedbackKey = "", this.snapshot = {
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
        }, this.travel = (TT, UT) => {
          if (!this.map || this.pending || this.kB) return;
          const mT = ("zone" === TT ? this.map.zones : this.map.landmarks).find((TT => TT.id === UT));
          if (mT) {
            if (this.map.insideDungeon) this.feedbackKey = "skyblockGame:mapDungeonTravelDisabled";
            else if ("fastTravelEnabled" in mT && !mT.fastTravelEnabled) this.feedbackKey = "skyblockGame:mapLandmarkTravelDisabled";
            else if (mT.visited)
              if ("zone" === TT && UT === this.map.zoneId) this.feedbackKey = "skyblockGame:mapAlreadyHere";
              else {
                const mT = ++this.nextRequestId;
                this.pending = {
                  requestId: mT,
                  expiresAt: this.now() + 1e4
                }, this.feedbackKey = "skyblockGame:mapTravelling", this.requestTravel({
                  kind: TT,
                  id: UT,
                  requestId: mT
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
      pB(TT) {
        var UT;
        if (!this.kB)
          if ("entities" !== TT.kind)
            if ("open" !== TT.kind) {
              var mT, WT;
              if ("snapshot" === TT.kind)(null === (mT = TT.snapshot) || void 0 === mT ? void 0 : mT.zoneId) !== (null === (WT = this.map) || void 0 === WT ? void 0 : WT.zoneId) && (this.pending = null, this.feedbackKey = ""), this.map = TT.snapshot, !this.map && this.open && this.close();
              else if ("travelQueued" === TT.kind) {
                var zT;
                TT.requestId === (null === (zT = this.pending) || void 0 === zT ? void 0 : zT.requestId) && (this.pending.expiresAt = 1 / 0, this.close())
              } else if (TT.requestId === (null === (UT = this.pending) || void 0 === UT ? void 0 : UT.requestId)) {
                var MT;
                this.pending = null, this.feedbackKey = null !== (MT = TT.errorKey) && void 0 !== MT ? MT : "", null === TT.errorKey && this.close()
              }
              this.emit()
            } else this.show();
        else this.entities = TT.entities
      }
      Cl() {
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
          presentation: this.map ? HT(this.map, this.tab, this.translate) : null,
          enabled: this.isEnabled(),
          open: this.open,
          tab: this.tab,
          map: this.map,
          pending: null !== this.pending,
          feedback: this.feedbackKey ? this.translate(this.feedbackKey) : ""
        }
      }
    }
    const BT = 67.5 * Math.PI / 180;

    function ZT(TT, UT) {
      const mT = Math.abs(TT);
      if (mT > BT || UT.trackHalfWidth <= 0) return null;
      const WT = UT.trackHalfWidth,
        zT = UT.screenHalfWidth / (UT.tanHalfFovX * Math.max(.5, Math.cos(UT.pitch))),
        MT = Math.min(Math.atan(.6 * WT / zT), .75 * BT),
        gT = zT * Math.tan(MT);
      let nT;
      if (mT <= MT) nT = zT * Math.tan(mT);
      else {
        const TT = BT - MT,
          UT = Math.max(0, zT * TT / (Math.cos(MT) ** 2 * (WT - gT)) - 1),
          HT = (mT - MT) / TT;
        nT = gT + (WT - gT) * (1 + UT) * HT / (1 + UT * HT)
      }
      return 50 + Math.sign(TT) * nT * 50 / WT
    }
    class cT {
      constructor(TT, UT) {
        this.map = TT, this.visited = UT, this.id = void 0, this.enabled = !0, this.range = 96, this.limit = 40, this.id = UT ? "landmarks" : "unknownLandmarks"
      }
      getPoints() {
        const TT = this.map.getSnapshot().map;
        return !TT || TT.insideDungeon ? [] : TT.landmarks.filter((TT => TT.visited === this.visited)).map((TT => {
          var UT, mT;
          return {
            id: `landmark:${TT.id}`,
            position: TT.position,
            icon: null !== (UT = TT.icon) && void 0 !== UT ? UT : "unknown",
            nameKey: null !== (mT = TT.nameKey) && void 0 !== mT ? mT : "skyblockGame:compassUnknown",
            kind: this.visited ? "landmark" : "unknown"
          }
        }))
      }
    }
    class vT {
      constructor(TT, UT, mT, WT) {
        this.map = TT, this.kind = UT, this.position = mT, this.alive = WT, this.id = void 0, this.enabled = !0, this.range = void 0, this.limit = void 0, this.id = UT, this.range = "enemy" === UT ? 48 : 64, this.limit = 12
      }
      Aq(TT) {
        if ("enemy" !== this.kind || this.alive(TT.FW)) return this.position(TT.FW)
      }
      getPoints() {
        const TT = [];
        for (const WT of this.map.getEntities()) {
          if (WT.kind !== this.kind || "enemy" === this.kind && !this.alive(WT.compassEntityId)) continue;
          const zT = this.position(WT.compassEntityId);
          var UT, mT;
          if (zT) TT.push({
            id: `${this.kind}:${WT.compassEntityId}`,
            FW: WT.compassEntityId,
            kind: this.kind,
            icon: null !== (UT = WT.icon) && void 0 !== UT ? UT : WT.npcSkin ? `npc_${WT.npcSkin}` : this.kind,
            displayName: WT.displayName,
            position: zT,
            nameKey: null !== (mT = WT.nameKey) && void 0 !== mT ? mT : "enemy" === this.kind ? "skyblockGame:compassEnemy" : "skyblockGame:compassNpc"
          })
        }
        return TT
      }
    }
    class fT {
      constructor(TT) {
        this.map = TT, this.id = "portals", this.enabled = !0, this.range = 96, this.limit = 12
      }
      getPoints() {
        const TT = this.map.getSnapshot().map;
        return !TT || TT.insideDungeon ? [] : TT.portals.map((TT => {
          var UT;
          return {
            id: "portal:" + TT.id,
            kind: "portal",
            position: TT.position,
            nameKey: null !== (UT = TT.nameKey) && void 0 !== UT ? UT : "skyblockGame:compassUnvisitedZone",
            icon: TT.visited ? "dungeons" === TT.destination ? "portal_orange" : "portal" : "unknown",
            colour: TT.colour
          }
        }))
      }
    }
    class qT {
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

    function iT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT.position;
      const MT = WT[0] - UT[0],
        gT = WT[2] - UT[2];
      return {
        ...TT,
        position: WT,
        offset: zT.e.computeShortestRotation(mT, (0, zT.Nb)([MT, 0, gT])),
        distance: Math.hypot(MT, WT[1] - UT[1], gT)
      }
    }
    let bT;

    function OT(TT, UT) {
      var mT;
      return (null === (mT = bT) || void 0 === mT ? void 0 : mT.locale) !== UT && (bT = {
        locale: UT,
        near: new Intl.NumberFormat(UT, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        }),
        far: new Intl.NumberFormat(UT, {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        })
      }), (TT < 10 ? bT.near : bT.far).format(TT)
    }
    class eT {
      constructor() {
        this.providers = new Map, this.candidates = [], this.refreshAt = 0
      }
      register(TT) {
        return this.providers.set(TT.id, TT), this.refreshAt = 0, () => {
          this.providers.get(TT.id) === TT && (this.providers.delete(TT.id), this.refreshAt = 0)
        }
      }
      frame(TT, UT, mT) {
        if (mT >= this.refreshAt) {
          this.refreshAt = mT + 200, this.candidates = [];
          for (const UT of this.providers.values()) {
            if (!UT.enabled) continue;
            const mT = UT.getPoints().map((UT => {
              const mT = UT.position;
              return {
                point: UT,
                distance: Math.hypot(mT[0] - TT[0], mT[1] - TT[1], mT[2] - TT[2])
              }
            })).filter((TT => TT.distance <= UT.range)).sort(((TT, UT) => TT.distance - UT.distance)).slice(0, UT.limit);
            for (const {
                point: TT
              }
              of mT) this.candidates.push({
              provider: UT,
              point: TT
            })
          }
        }
        const WT = [];
        for (const {
            point: zT,
            provider: MT
          }
          of this.candidates) {
          if (!MT.enabled) continue;
          const mT = MT.Aq ? MT.Aq(zT) : zT.position;
          if (mT) {
            const MT = iT(zT, TT, UT, mT);
            Math.abs(MT.offset) <= BT && WT.push(MT)
          }
        }
        return WT
      }
      dispose() {
        this.providers.clear(), this.candidates = []
      }
    }
    var YT = mT(36698),
      JT = mT(63);
    const xT = [{
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
      dT = xT.length;

    function wT(TT) {
      return TT >= dT ? 1 : TT + 1
    }
    const tT = "skyblockQuests",
      aT = Object.freeze({
        easy: "skyblockGame:difficultyEasy",
        medium: "skyblockGame:difficultyMedium",
        hard: "skyblockGame:difficultyHard",
        insane: "skyblockGame:difficultyInsane"
      }),
      yT = Object.freeze({
        easy: "#77b326",
        medium: "#eac03d",
        hard: "#df7622",
        insane: "#e74d4d"
      });

    function XT(TT) {
      let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      const mT = Math.max(0, Math.floor(TT)),
        WT = Math.floor(mT % 1e3 / 100),
        zT = Math.floor(mT / 1e3),
        MT = zT % 60,
        gT = Math.floor(zT / 60),
        nT = gT % 60,
        HT = Math.floor(gT / 60),
        kT = TT => TT < 10 ? `0${TT}` : String(TT),
        jT = UT ? `.${WT}` : "";
      return HT > 0 ? `${HT}:${kT(nT)}:${kT(MT)}${jT}` : `${nT}:${kT(MT)}${jT}`
    }
    const IT = "devquests",
      QT = "none",
      sT = {
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
      FT = "Compressed Messy Stone",
      PT = {
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
      VT = ["Stone", "Diorite", "Andesite", "Granite"],
      uT = new Set(VT),
      CT = (Object.keys(PT), {
        "Pure Coal Ore": "Coal Ore",
        "Pure Iron Ore": "Iron Ore",
        "Pure Gold Ore": "Gold Ore",
        "Pure Diamond Ore": "Diamond Ore",
        "Pure Moonstone Ore": "Moonstone Ore"
      });
    const rT = ["Magmasteel Helmet", "Magmasteel Chestplate", "Magmasteel Gauntlets", "Magmasteel Leggings", "Magmasteel Boots"];

    function KT(TT, UT) {
      const mT = Math.floor(5 * TT / (2 * UT + 1));
      return Math.min(4, Math.max(0, mT))
    }
    var ST = mT(1336);
    var GT = mT(36437);
    var NT = mT(36693),
      ET = mT(31),
      hT = mT(8986);
    const DT = ["foraging", "combat", "mining", "farming", "fishing", "exploration"],
      oT = 1e3;

    function AT(TT) {
      return Math.max(0, TT)
    }

    function RT(TT) {
      return 1 + .01 * AT(TT)
    }

    function TU(TT) {
      return 1 + .005 * AT(TT)
    }

    function UU(TT) {
      return 1 + .005 * AT(TT)
    }

    function mU(TT) {
      return .01 * AT(TT)
    }

    function WU(TT) {
      return 150 / (150 + AT(TT))
    }

    function zU(TT) {
      return 1 + .002 * AT(TT)
    }

    function MU(TT) {
      return Math.round(10 * TT) / 10
    }

    function gU(TT, UT) {
      switch (TT) {
        case "foraging":
          return {
            translationKey: "skyblockGame:foragingBenefit", percent: MU(100 * (TU(UT) - 1))
          };
        case "combat":
          return {
            translationKey: "skyblockGame:combatBenefit", percent: MU(100 * (RT(UT) - 1))
          };
        case "mining":
          return {
            translationKey: "skyblockGame:miningBenefit", percent: MU(100 * (UU(UT) - 1))
          };
        case "farming":
          return {
            translationKey: "skyblockGame:farmingBenefit", percent: MU(100 * mU(UT))
          };
        case "fishing":
          return {
            translationKey: "skyblockGame:fishingBenefit", percent: MU(100 * (1 - WU(UT)))
          };
        case "exploration":
          return {
            translationKey: "skyblockGame:explorationBenefit", percent: MU(100 * (zU(UT) - 1))
          }
      }
    }

    function nU(TT) {
      return "farming" === TT ? 200 : 100
    }

    function HU(TT, UT) {
      if (!Number.isSafeInteger(TT) || TT < 0) throw new Error("Skill XP must be a non-negative safe integer");
      const mT = nU(UT),
        WT = TT => function(TT, UT) {
          return nU(TT) * UT * (UT + 1) / 2
        }(UT, TT);
      let zT = Math.min(oT, Math.floor((Math.sqrt(8 * TT / mT + 1) - 1) / 2));
      return zT < oT && WT(zT + 1) <= TT ? zT++ : WT(zT) > TT && zT--, {
        totalXp: TT,
        level: zT,
        xpIntoLevel: TT - WT(zT),
        xpForNextLevel: zT === oT ? null : mT * (zT + 1)
      }
    }
    const kU = new Set(["Apple Block", "Plum Block", "Coconut Block", "Pear Block", "Cherry Block", "Mango Block", "Banana Block"]);

    function jU(TT) {
      return kU.has(TT)
    }
    const lU = new Set(zT.Fb);

    function LU(TT) {
      return lU.has(TT)
    }
    new Set(["Watermelon", "Melon", "Wheat|FreshlyGrown", "Rice|FreshlyGrown", "Corn Plant|FreshlyGrown", "Chili Pepper Plant|FreshlyGrown", "Chili Pepper Plant|Lava|FreshlyGrown", "Tomato Plant|FreshlyGrown", "Tomato Plant|Top|FreshlyGrown", "Carrot Plant|FreshlyGrown", "Potato Plant|FreshlyGrown", "Sugar Cane Plant|FreshlyGrown", "Sugar Cane Plant|Top|FreshlyGrown", "Coffee Plant|FreshlyGrown", "Lettuce Plant|FreshlyGrown", "Cauliflower Plant|FreshlyGrown", "Parsnip Plant|FreshlyGrown", "Red Cabbage Plant|FreshlyGrown", "Beetroot Plant|FreshlyGrown"]);
    const pU = {
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
      BU = {
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
      ZU = {
        ...BU,
        ...Object.fromEntries(Object.entries(CT).map((TT => {
          let [UT, mT] = TT;
          return [UT, 9 * BU[mT]]
        })))
      },
      cU = {
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
      vU = {
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
    const fU = {
        foraging: "Iron Axe",
        combat: "Iron Sword",
        mining: "Iron Pickaxe",
        farming: "Iron Hoe",
        fishing: "Rusty Rod",
        exploration: "Compass"
      },
      qU = {
        foraging: [80, 220, 100],
        combat: [240, 70, 70],
        mining: [60, 220, 240],
        farming: [245, 220, 60],
        fishing: [70, 120, 245],
        exploration: [255, 180, 70]
      };

    function iU(TT) {
      return `rgb(${qU[TT].join(", ")})`
    }

    function bU(TT, UT, mT) {
      if (!mT) return TT(UT);
      const WT = {};
      for (const [zT, MT] of Object.entries(mT)) WT[zT] = "string" === typeof MT ? MT : TT(MT.translationKey);
      return TT(UT, WT)
    }
    class OU {
      constructor(TT, UT) {
        this.now = TT, this.getJournal = UT, this.pending = [], this.current = null, this.followUp = null, this.shownAt = 0, this.expiresAt = 0, this.token = 0, this.fn = !1, this.onShown = () => {}
      }
      enqueue(TT) {
        const UT = eU(TT);
        if (UT) this.pending.push(TT);
        else {
          const UT = this.pending.findIndex(eU);
          this.pending.splice(-1 === UT ? this.pending.length : UT, 0, TT)
        }
        return (null === this.current || null !== this.followUp && !UT) && (this.advance(), !0)
      }
      setHeld(TT) {
        return this.fn = TT, !TT && null === this.current && this.pending.length > 0 && (this.advance(), !0)
      }
      Cl() {
        const TT = this.getJournal(),
          UT = this.followUp;
        if (null !== this.current && this.now() >= this.expiresAt) return this.showFollowUp(null === UT ? this.findFollowUp(this.current) : null), !0;
        if ("explore" === (null === UT || void 0 === UT ? void 0 : UT.kind) && TT && TT.active.length > 0) return this.showFollowUp(this.findFollowUp(this.current)), !0;
        if ("step" === (null === UT || void 0 === UT ? void 0 : UT.kind)) {
          const TT = this.findFollowUp(this.current);
          if ("step" !== (null === TT || void 0 === TT ? void 0 : TT.kind) || TT.questId !== UT.questId || TT.step.id !== UT.step.id) return this.showFollowUp(TT, this.expiresAt), !0
        }
        return !1
      }
      clear() {
        this.pending = [], this.current = null, this.followUp = null, this.expiresAt = 0
      }
      getView(TT, UT, mT) {
        var WT, zT, MT, gT;
        if (null === this.current) return null;
        if ("skillLevel" === this.current.questCompletionKind) return this.getSkillLevelView(this.current, TT, mT);
        if ("landmark" === this.current.questCompletionKind) return this.getLandmarkView(this.current, TT);
        if ("npcNote" === this.current.questCompletionKind) return this.getNpcNoteView(this.current, TT, UT);
        const {
          questCompletionKind: nT,
          questCompletionNameKey: HT
        } = this.current, kT = "step" === this.current.questCompletionKind ? this.current.questCompletionNameParams : void 0, jT = "quest" === this.current.questCompletionKind ? this.current.questCompletionCoins : 0, lT = "step" === (null === (WT = this.followUp) || void 0 === WT ? void 0 : WT.kind) ? this.followUp : null, LT = "explore" === (null === (zT = this.followUp) || void 0 === zT ? void 0 : zT.kind);
        let pT;
        return pT = LT ? TT("skyblockGame:questExploreTitle") : null !== lT ? "quest" === nT ? TT("skyblockGame:questNextQuestTitle", {
          quest: TT(lT.questNameKey)
        }) : TT("skyblockGame:questNextStepTitle") : TT("started" === nT ? "skyblockGame:questStartedTitle" : "quest" === nT ? "skyblockGame:questCompletedTitle" : "skyblockGame:subquestCompletedTitle"), {
          token: this.token,
          kind: null === this.followUp ? nT : "step",
          phase: null === this.followUp ? "completion" : "next",
          title: pT,
          name: LT ? UT("skyblockGame:questExploreName") : null !== lT ? bU(UT, lT.step.nameKey, lT.step.nameParams) : bU(UT, HT, kT),
          description: LT ? UT("skyblockGame:questExploreDescription") : null === lT ? null : bU(UT, lT.step.descriptionKey, lT.step.descriptionParams),
          reward: null === this.followUp && jT > 0 ? UT("skyblockGame:questCoinRewardSuffix", {
            amount: jT.toLocaleString(mT)
          }) : null,
          iconItem: null !== (MT = null === lT || void 0 === lT ? void 0 : lT.step.questIconItem) && void 0 !== MT ? MT : null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null !== lT && (null === (gT = this.getJournal()) || void 0 === gT ? void 0 : gT.trackedQuestId) === lT.questId ? lT.step.nameKey : null
        }
      }
      getSkillLevelView(TT, UT, mT) {
        let {
          skill: WT,
          beforeLevel: zT,
          level: MT
        } = TT;
        const gT = gU(WT, zT),
          nT = gU(WT, MT);
        return {
          token: this.token,
          kind: "skillLevel",
          phase: "completion",
          title: UT(`skyblockGame:${WT}`),
          name: UT("skyblockGame:skillLevelUp", {
            to: MT.toLocaleString(mT)
          }),
          description: gT.percent === nT.percent ? null : UT(`${nT.translationKey}Change`, {
            before: gT.percent.toLocaleString(mT),
            after: nT.percent.toLocaleString(mT)
          }),
          reward: null,
          iconItem: fU[WT],
          accent: iU(WT),
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getLandmarkView(TT, UT) {
        let {
          landmarkNameKey: mT
        } = TT;
        return {
          token: this.token,
          kind: "landmark",
          phase: "completion",
          title: UT("skyblockGame:landmarkDiscovered"),
          name: UT(mT),
          description: null,
          reward: null,
          iconItem: null,
          accent: null,
          durationMs: this.expiresAt - this.shownAt,
          waypointNameKey: null
        }
      }
      getNpcNoteView(TT, UT, mT) {
        let {
          titleKey: WT,
          textKey: zT,
          params: MT = {},
          nameKeys: gT = {},
          iconItem: nT = null
        } = TT;
        const HT = {
          ...MT
        };
        for (const [kT, jT] of Object.entries(gT)) HT[kT] = UT(jT);
        return {
          token: this.token,
          kind: "npcNote",
          phase: "completion",
          title: UT(WT),
          name: mT(zT, HT),
          description: null,
          reward: null,
          iconItem: nT,
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
      showFollowUp(TT, UT) {
        null === TT || this.fn ? this.advance() : (this.followUp = TT, this.token++, this.shownAt = this.now(), this.expiresAt = null !== UT && void 0 !== UT ? UT : this.shownAt + this.durationMs())
      }
      findFollowUp(TT) {
        var UT;
        const mT = this.getJournal();
        if (!mT || this.hasPendingQuestPopup() || eU(TT)) return null;
        const WT = "started" === TT.questCompletionKind ? mT.active.some((UT => UT.id === TT.questCompletionQuestId)) : "quest" === TT.questCompletionKind ? mT.completed.some((UT => UT.id === TT.questCompletionQuestId)) : [...mT.active, ...mT.completed].some((UT => UT.id === TT.questCompletionQuestId && UT.subquests.some((UT => UT.id === TT.questCompletionStepId && "completed" === UT.status))));
        if (!WT) return null;
        if ("quest" === TT.questCompletionKind && 0 === mT.active.length && !this.hasPendingQuestPopup()) return {
          kind: "explore"
        };
        const zT = mT.active.find((TT => TT.id === mT.trackedQuestId)),
          MT = null !== (UT = null === zT || void 0 === zT ? void 0 : zT.subquests.find((TT => "ready" === TT.status))) && void 0 !== UT ? UT : null === zT || void 0 === zT ? void 0 : zT.subquests.find((TT => "active" === TT.status));
        return MT ? {
          kind: "step",
          questId: zT.id,
          questNameKey: zT.nameKey,
          step: MT
        } : null
      }
      hasPendingQuestPopup() {
        return this.pending.some((TT => !eU(TT)))
      }
      advance() {
        var TT;
        this.current = this.fn ? null : null !== (TT = this.pending.shift()) && void 0 !== TT ? TT : null, this.followUp = null, null !== this.current && (this.token++, this.shownAt = this.now(), this.expiresAt = this.shownAt + this.durationMs(), this.onShown(this.current.questCompletionKind))
      }
    }

    function eU(TT) {
      return YU(TT.questCompletionKind)
    }

    function YU(TT) {
      return "skillLevel" === TT || "landmark" === TT || "npcNote" === TT
    }
    var JU = mT(38669);
    const xU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoAD8h2L8Cqz6T4IxLsVwyZwTb+CYAZ9imCI5Gx+cisEK73/7jYLRFcKtxqcIwzPE+BymgXwAABikVOyJwpyoAAAAAElFTkSuQmCC",
      dU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIAP8x4FRwH8w+OqOim+LYyiGSLzQR8G/DipgKgy2Vvqfc+INmEZm4zQRphCniTA3wRXeFseuECQIwlfbmMEYxsfqc2KChyAAANDbei83hMJpAAAAAElFTkSuQmCC",
      wU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIAP8x4FRwH8QePfuFQq+dO44hmKwxOMHN1Hw4b3bMRW6unv/zznxBkwjs3GaCFOI00SYm2AKQWysCkGCILxm6TwwhvGx+pyY4CEIAG45h2BiJfmeAAAAAElFTkSuQmCC",
      tU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIAP8x4FRwP9sF+X/XVEGKDjbRRlDMVjww44uFHyyKw5TIUjC2n4BXBGIjVMh0SaSpHBBkC0Y41IIVkxM8BAEAGLKe3rsiWx2AAAAAElFTkSuQmCC",
      aU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIAP8J0bs//M750GCKPg5Qgyh8OT2Vf870vxR8MntqzAVysnL/wcBmCIQAIlhVQjCMIUwPobCjAC7/+XZSSgYJIZVoZGWKlwRiI1NISwosGHSAAAPvV+9cOwRMQAAAABJRU5ErkJggg==";
    var yU = mT(38676);
    var XU = mT(38684);
    const IU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAT0lEQVR4nGNgIAP8h2JcfDD4X2lg/D9RRhQmCWbnq6piKAYrRMf52BSCTHAU54QrArGRbEA18ev3X3CFIDZOq2GmwkzDqxAdY/U5DkwaAACgalVtqFSm5wAAAABJRU5ErkJggg==",
      QU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAf0lEQVR4nO3VsQkEIRCG0ek/MbwWbMXk4u1kOBi4bWANhA0U3oM/9zOZCAAAAAAm8lf/Nza+1+NiNym4BKfgEjxOCR6Th7ZPX9rsI2I3Q/AluAnugvOU4Fw8M6vnKnaTgkvwEFyC8/TgtniWZovdpOAS3AR3we2UYAAAAIDYxQ2IeNNWBgNQ/AAAAABJRU5ErkJggg==";
    const sU = mT.p + "static/media/quest_search.b4f00072d5f134fdf189ecb8a48edc99.svg";
    const FU = mT.p + "static/media/quest_talk.7d2326c7bdb6bc060cc0cde294f4fa89.svg",
      PU = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANklEQVR4nGNgIBP8R8NYwX8QuH7nGRwzYFEMVwQzDcSetXgHdsXEKIIrJkYRusn4FVHdRJwAALfWRnO5uwepAAAAAElFTkSuQmCC";
    var VU = mT(18581),
      uU = mT(20728),
      CU = mT(23141),
      rU = mT(24670),
      KU = mT(26292);
    const SU = {
      ashen_fort: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgIAP8R6PR2RCBzRu2/kemQbirvQ/GRlUIwyAFIJyUkIFbobyUHhjjVAiSgCmM1p9HWCFI0YKYD/gVgjDMapAibAphQYENkwYAeH1pEdiBhHAAAAAASUVORK5CYII=",
      auction: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+kApf/vw4qEFT8H6SoJsr8/5quIMKKg62VwIrxmfx/apEbWBKkCOQMbArhimB8YhThBUQpIggAQqYxE90Y9BMAAAAASUVORK5CYII=",
      bank: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgIBP8R8NYwX8w+OoOwbfFcSr+/+ugAhi/X8zz/0gVD1aFCNNui6Ow0RWDBWGmIbPJVwhzFwgjs7G6EwcmDQAAuONyKxIgH/AAAAAASUVORK5CYII=",
      carrot: VU,
      castle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgoAD8R8I4wf+pRW7/n2nrgzEDDsX/YQrxmfr/yIHdYAkQDWNP6uvDUAxXAMIgBSCcm5mJqRAkAVIUbK0ExgQV1kSZgzEuhXDPYMGkAQC0sV3YpEV43gAAAABJRU5ErkJggg==",
      cinderfall: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATUlEQVR4nGNgoAD8h2K84P//N/5gjE/x/78dLHCFIDYuxWDJxqys/362tjgVwhXBFOJS/P+yCROKImNNbbAYhkJ000AKQRir9TgwaQAA9pxTDDdv+r4AAAAASUVORK5CYII=",
      combat_1: uU,
      cow: aU,
      craft: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPklEQVR4nGNgIAH8JxIz/L+2JA2Mp6VZYGUzwBSCBPFhBphCYq0GKy7w0kARwCGGIgjHhBTiNxHdLTjECAMAZEReU1MzQpcAAAAASUVORK5CYII=",
      dungeons: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQUlEQVR4nGNgIBP8R8NYwf++KbPhOKewHKtiuAJ5KT0wBinEphis6L+1AVwhiA0Sw6oQpgiGKVdIjBvBinFg0gAAOOVdfOFyr7kAAAAASUVORK5CYII=",
      emberwatch: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgoAD8h2L8Cv6/8f//t4PlPy4N/48c2A2WACm6bMIEZk/q68NQDFYIwyAFIJybmYnbVJCJ+BTBFRIyjSSFcJ8TE0Q4AQDqiVfWwMcDkgAAAABJRU5ErkJggg==",
      enemy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIBP8R8NYwf///W3/n3r4wjEDFsUYikB4s4o2hmKwhDY3L1wRiI1ToQgLK1whiI1TIQjnCYqBMUgRNoVgxSAJmCIQjdfnxAQPXgAAraZYPXKBMfkAAAAASUVORK5CYII=",
      farm: mT(26309),
      farming_1: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAR0lEQVR4nGNgoAD8h2K84P+nbP//87SU8Cr+D1J0w1H///9LXjgV/4cpQsbYFIMlPjw+hILxKqyJMv8fbK1EuUKwYhyYNAAAbaVgzAUMTa8AAAAASUVORK5CYII=",
      fishing: xU,
      fishing_1: xU,
      forest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8R8NYwf+c/TZgbN+jA8YMWBRjKAJhg3JlDMUoikAKQFgxWgi7qcQogiuuiTL/H2ythFcRSQrBiolRhBMAAJ9tQRoOB1rEAAAAAElFTkSuQmCC",
      guardian_gold: dU,
      guardian_iron: wU,
      hub: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgoAL4T5SirGUf/uNTDJa0r78GxjpRK7Aq/v8p2x8s8eHxIThGVwhWdMNR//88LSWwgv+XvLArhJlwcnMXfhNBgjVR5nCFIDY2hXCPYMGkAQDGNGSEX91FFwAAAABJRU5ErkJggg==",
      island: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUElEQVR4nGNgoAD8h2K84L//OlcwxqcYrECvyQKOGXAohkn870pxgLMxFC17FgfGOfut4Ni7Xwe74u60ADDO8rIC03jdCVIEwkT5nBhFOAEAI1k9HXZqyYAAAAAASUVORK5CYII=",
      melon: CU,
      mines: rU,
      mining_1: rU,
      npc: tU,
      npc_beaver_lumberjack: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASUlEQVR4nGNgIAP8h2JcfDD4XxQVCMYwBSB2nJsbhmKwhJKyMlwDiI1TYUVyMFgBCIPYeBX+/3zt/6vbJ6moEBljUwhWjAOTBgAZSmJ9XCb2zAAAAABJRU5ErkJggg==",
      npc_chef: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8R8NYwf+v33/B8f1nH7AqRlEEU3gfi+L/RVGB/y/feQlXAGKDxLAqlJDX//9pfycYg9g4FYIUxLm5gfHJvgz8Cl9vaQFjkEIQxuohHJg0AACncHuimGgHPgAAAABJRU5ErkJggg==",
      npc_cow: aU,
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
      npc_gold_guardian: dU,
      npc_gold_watermelon_stag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAWElEQVR4nGNgIAP8R6KR2Sjg/5sH4f9hNDKbAZ9ifIoYQIKfV6nAFSKxURVt8jH7f1+R9//ZVH8wBrFBYuiKwZIgiS27w8AYxAaJ4TQVWSEuN4IVo2HSAQCFHFiN1+WGFAAAAABJRU5ErkJggg==",
      npc_head_8_0: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAdElEQVR4nGNgIBIwIrH/41PDCFO06sIzMMNbQ5Jh643ncFVhBlJgdXCFSnJqDBJiMgwvXj1BMe7eo1tghSzIgrPqMlAU+eXUwNlMyBINs7gYZJTkwBjERgYoCud0iGBlYygEgStrdoAxVq/DPIQhi6mGMAAAMzccpadovTMAAAAASUVORK5CYII=",
      npc_human_archer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAc0lEQVR4nGNkQID/DNgBI5wAKTqwtAOrKofoCrA6FmTBvinLUBQV5UTB2SgKf//5i8N2BoTVX7//YuC2VmfwZOYCC2z/+43h69GbDNycbGB1cIWHXBywmmS35wBYIRNOu9AA3I1ffnzFqxBmNdh6ItQQBgAsaRzpv2C9aQAAAABJRU5ErkJggg==",
      npc_human_desert_guard: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAfklEQVR4nGNkQID/DNgBI5wAKfpxdztWVRzKnmB1LDCBdReZGUSEhVAUvXn7Ds6GKwSB23MnoigUDIiFs5lgDH9PB4Zll+7DJUBskBiKQ0FunBoXy/D9xw8UEzk5OBiyFy1GdSPHpTMM+rw8KApvfv6CaTUhALMabD0RaggDACCpH2oXfV//AAAAAElFTkSuQmCC",
      npc_human_sentry: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYUlEQVR4nGNgIBIwIrH/41PDCFOkqamJVdX169fB6liQBXNMTVAUTTl9BkPj/6/ff4Gs/j81LhaMkcVQrO4JC2Xg5OBA0f39xw+GklWrUa2edvYcTh+DABNeWSRAdPAQDQAzViKkGPwLjwAAAABJRU5ErkJggg==",
      npc_iron_guardian: wU,
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
      npc_portal_mage: yU,
      npc_rabbit_aristocrat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAXklEQVR4nGNgIAP8h2JcfDD4P3fB+v/3csphkmB2S/tUDMX/+yYuIE7h3AXrwYqRMU4TlZSV4YpAbJwKYe4EYRC7prYLU6GLocX/ODe3/1+//wJjEBskhtXnODBpAAD3lm2BX81XrwAAAABJRU5ErkJggg==",
      npc_smuglyn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAASklEQVR42mNgIAP8x4FRFWlqamLF6IrBgj1hoSgYq8Kv33/9txBi/z81LhaMQWyQGIbC5VmZcEUwDBLDUIiuCIRB1pOtkOjgIQgAhutlSTAZTWcAAAAASUVORK5CYII=",
      npc_tentacle_boy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiElEQVR4nGNkQID/DNgBI5wAKXJw8Wb48vkjhqozJ4+A1bHABKI0arEad+akBdzY/ybmNgw/f/3CqpCdjQ1sKthEM4scHM5DsZ7hf23T3v9fv//6z8srAmaj80FqmGC6JMSkUExB54Ot1ubgYSgoXQkWuHXrKpiG8UFyMAA3HkbjEIMoRqMxxABOskezGUlSqQAAAABJRU5ErkJggg==",
      npc_tentacle_girl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAgklEQVR4nGNgwA3+QzEYMOGQ/H9viS7Dp4N+MDEGFmRFO8PqGYTFRBjevnrDwMCwjuHN4/twSRZsikD07U1BUKnLKArBQExYAIxh7OvX78DlUNzoMbEWKxtDYb11MFY2htXPPr5nOH7mApiW4hdECxAkX/fbJIGDYqV3MYwND0eiAQAf4TQGGrZ+tQAAAABJRU5ErkJggg==",
      npc_tentacle_guy: XU,
      npc_tentacle_guy_fisherman: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVElEQVR4nGNgIBP8R8NYwX9XD7//JuY2cMyARTFcUtfQDIxxKf4fHFaFgRPjWzAVVpXP/K+krAymYWycCrMzeuEKQWycCmE0jI1NIVgxEo3MJg0AAIJsWIj/ilEbAAAAAElFTkSuQmCC",
      npc_wolf_in_suit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8h2JcfDD47+0X/N/a1gEmCWY7u3piKAYrRMfOuBQqKSvDFYHYOBV+/f4LbCUIg9g4FYIUgEwCYbxu/P/5GtxEEBubQrBiHJg0AAB07Vx5G7sqWQAAAABJRU5ErkJggg==",
      npc_wolf_security: IU,
      player: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAQElEQVR4nGNgoAD8h2K84D8M4FP8/9HLz3CFIDYuxUQpBEugK8SmGCy4cttpmASYjVUhkiJ8YhAJbO7GGT64AACb2mXTEt92cwAAAABJRU5ErkJggg==",
      portal: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAU0lEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOL7zz9wfPLcDdwKQZL901eAMUixrowDpkKQbphJMFPxKoSZCMI4FYIkQBiZjdXnxAQPQQAAOtFywhRvXJwAAAAASUVORK5CYII=",
      portal_orange: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAVUlEQVR4nGNgIAP8x4FRwP9YmzYwtlOJAWMYG10xWOLzJAs4/tSkglshSPJjldT/D4UCYMW6Mg6YCkG6YSbBTMWrEGQiDONUCJIAYWQ2Vp8TEzwEAQAA6GVEbqZ9DwAAAABJRU5ErkJggg==",
      quest: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgoAD8h2K84P//Xwf+/35tSFDxf+or/P3a8P/nVSrEuZMoRVQ3EScAAIINMAfVJxmxAAAAAElFTkSuQmCC",
      quest_search: sU,
      quest_talk: FU,
      scorched_flats: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAUUlEQVR4nGNgIBP8R8NYwf8HT+6jYAYsisES/vIicEUg9t4TuzAUY5gGUoRNIVwxSBJGY1W0wF0LjKuMFcAYxsewGiYJchtMAzaFYMU4MGkAADMzb36mUd86AAAAAElFTkSuQmCC",
      scorp_pit: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgoAD8R8I4wf//l6rA+MUCG5yK/z/T1kc27T8uxeiCWBXCrUQ2cUOCHHYTQRIgU2BuxKYQxUSYApwmIgmi08QDAPP+Ttl2n8EbAAAAAElFTkSuQmCC",
      shooting_gallery: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAASElEQVR4nGNgIBP8x4IxwP9n2vpw/P+SFxijK4ZIIoGaKHP8CkE0WNH///83q2jjVwhj41WIDLAphCsGScIwLl+DFRMKGoIAAPFdcuGHeG5wAAAAAElFTkSuQmCC",
      smelt: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgIBH8J4DB4P+8efPwYgaoYjCnoKAAK56HTSG6lXgV/n5t+P9zhQphhSBFeBUS4xmwYmKChygAADFjjqm4UTd5AAAAAElFTkSuQmCC",
      talk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAANElEQVR4nGNgIBH8x4Ph4D8+wICkGC6Ai2Yg2cRdx67hxBjuhGnA5xkUk3FJYphKSBFBAACXuoGa4rCq3AAAAABJRU5ErkJggg==",
      tower_of_doom: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgIAP8J0bsf1VBG0gQBduaucHYmAr/X/L6/9/aAKdCBpjiqKAkMMaliPoKwYrQFeJUjAOTBgBhWEzjnMiaVwAAAABJRU5ErkJggg==",
      unknown: PU,
      watermelon: KU
    };

    function GU(TT, UT) {
      const mT = document.createElement("img");
      return mT.className = UT, mT.src = TT, mT.alt = "", mT.draggable = !1, mT
    }

    function NU(TT) {
      var UT;
      const mT = null !== (UT = SU[TT]) && void 0 !== UT ? UT : TT.startsWith("npc_") ? tU : PU;
      if ("portal" !== TT) return GU(mT, "SkyblockMapIcon");
      const WT = document.createElement("span");
      WT.className = "SkyblockMapIcon Portal";
      const zT = document.createElement("span");
      return zT.className = "SkyblockMapIconTint", zT.style.maskImage = zT.style.webkitMaskImage = `url("${QU}")`, WT.append(GU(mT, "SkyblockMapIconLayer"), zT, GU(QU, "SkyblockMapIconLayer SkyblockMapIconShade")), WT
    }
    var EU = mT(38649),
      hU = mT(4333);
    const DU = [{
      lobes: [3, 4],
      amount: [.04, .055]
    }, {
      lobes: [5, 6, 7],
      amount: [.025, .035]
    }];

    function oU(TT) {
      const UT = new hU.k(TT);
      return {
        radius: 45,
        squareness: 3,
        wobbles: DU.map((TT => {
          let {
            lobes: mT,
            amount: WT
          } = TT;
          return {
            lobes: mT[Math.floor(UT.next() * mT.length)],
            amount: WT[0] + UT.next() * (WT[1] - WT[0]),
            phase: 2 * UT.next() * Math.PI
          }
        })),
        samples: 160
      }
    }

    function AU(TT) {
      let {
        radius: UT,
        squareness: mT,
        wobbles: WT,
        samples: zT
      } = TT;
      const MT = [];
      for (let gT = 0; gT < zT; gT++) {
        const TT = 2 * Math.PI * gT / zT,
          nT = Math.cos(TT),
          HT = Math.sin(TT),
          kT = UT * (Math.abs(nT) ** mT + Math.abs(HT) ** mT) ** (-1 / mT) * WT.reduce(((UT, mT) => {
            let {
              lobes: WT,
              amount: zT,
              phase: MT
            } = mT;
            return UT + zT * Math.sin(WT * TT + MT)
          }), 1);
        MT.push(`${(50+kT*nT).toFixed(2)} ${(50+kT*HT).toFixed(2)}`)
      }
      return `M${MT.join("L")}Z`
    }
    const RU = ".InGameHeaderContainer, .TopRightElementsLeft > *, .TopRightElementsRight > *, .MiddleTextTopContainer";
    class Tm {
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
        }, this.stopLayout = null, this.stopWaypoint = null, this.stopWaypointOrigin = null, this.waypointOriginToken = null, this.waypointLaunch = null, this.markers = new Map, this.cardinals = [], this.frame = null, this.kB = !1, this.mountCompass = TT => {
          var UT;
          if (null === (UT = this.stopLayout) || void 0 === UT || UT.call(this), this.stopLayout = null, this.markers.clear(), this.cardinals = [], this.compass = null, !TT || this.kB) return;
          const mT = TT.querySelector(".SkyblockCompassTrack");
          this.compass = {
            root: TT,
            track: mT,
            label: TT.querySelector(".SkyblockCompassLabel")
          }, mT.replaceChildren();
          for (let zT = 0; zT < 4; zT++) {
            const TT = document.createElement("span");
            TT.className = "SkyblockCompassCardinal", mT.appendChild(TT), this.cardinals.push(TT)
          }
          const WT = (0, EU.d)(RU, [TT], this.layout);
          this.stopLayout = () => {
            WT(), mT.replaceChildren()
          }, this.render(this.frame)
        }, this.mountTerrain = TT => {
          this.terrain = this.kB ? null : TT, this.render(this.frame)
        }, this.mountMinimapSearchArea = TT => {
          this.mountSearchArea("minimap", TT)
        }, this.mountMapSearchArea = TT => {
          this.mountSearchArea("map", TT)
        }, this.mountPlayer = TT => {
          this.player = this.kB ? null : TT, this.render(this.frame)
        }, this.mountWaypoint = TT => {
          var UT, mT;
          if (null === (UT = this.stopWaypoint) || void 0 === UT || UT.call(this), this.stopWaypoint = null, this.waypoint = null, this.markerIcon = null, !TT || this.kB) return;
          const WT = TT.querySelector(".SkyblockQuestWaypointMarker");
          WT.replaceChildren(NU("quest")), this.markerIcon = "quest", this.waypoint = {
            root: TT,
            marker: WT,
            clip: TT.querySelector(".SkyblockQuestWaypointTextClip"),
            text: TT.querySelector(".SkyblockQuestWaypointText"),
            label: TT.querySelector(".SkyblockQuestWaypointLabel"),
            distance: TT.querySelector(".SkyblockQuestWaypointDistance"),
            hint: TT.querySelector(".SkyblockQuestWaypointHint")
          };
          const zT = () => {
              this.waypointMarkerSize = {
                width: WT.offsetWidth,
                height: WT.offsetHeight
              }, this.waypointInset = {
                x: WT.offsetWidth / 2 + 8,
                top: WT.offsetHeight + 8,
                bottom: 8
              }
            },
            MT = new ResizeObserver((() => {
              zT(), this.render(this.frame)
            }));
          MT.observe(WT, {
            box: "border-box"
          });
          const gT = () => {
            this.viewport = {
              width: window.innerWidth,
              height: window.innerHeight
            }
          };
          window.addEventListener("resize", gT), null === (mT = window.visualViewport) || void 0 === mT || mT.addEventListener("resize", gT), this.stopWaypoint = () => {
            var TT;
            MT.disconnect(), window.removeEventListener("resize", gT), null === (TT = window.visualViewport) || void 0 === TT || TT.removeEventListener("resize", gT)
          }, gT(), zT(), this.render(this.frame)
        }, this.mountWaypointOrigin = TT => {
          var UT;
          if (null === (UT = this.stopWaypointOrigin) || void 0 === UT || UT.call(this), this.stopWaypointOrigin = null, this.waypointLaunch = null, this.waypointOriginToken = TT && !this.kB ? Number(TT.dataset.notificationToken) : null, TT && !this.kB && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            const UT = {
              nameKey: TT.dataset.waypointNameKey,
              x: 0,
              y: 0,
              startedAt: null
            };
            this.waypointLaunch = UT;
            const mT = () => {
                const mT = TT.getBoundingClientRect();
                UT.x = (mT.left + mT.width / 2) / window.innerWidth * 100, UT.y = (mT.top + mT.height / 2) / window.innerHeight * 100
              },
              WT = new ResizeObserver(mT);
            WT.observe(TT.parentElement), WT.observe(TT), window.addEventListener("resize", mT), this.stopWaypointOrigin = () => {
              WT.disconnect(), window.removeEventListener("resize", mT)
            }, mT()
          }
          this.render(this.frame)
        }, this.layout = () => {
          if (!this.compass) return;
          const TT = this.compass.root,
            UT = getComputedStyle(TT),
            mT = getComputedStyle(document.documentElement),
            WT = parseFloat(mT.fontSize),
            zT = parseFloat(UT.getPropertyValue("--compass-icon-size")) * WT,
            MT = "1" === UT.getPropertyValue("--compass-fit-top").trim(),
            gT = MT ? 1 : 8,
            nT = Array.from(document.querySelectorAll(RU), (TT => {
              var UT;
              return (null !== (UT = TT.querySelector(".MiddleTextTop")) && void 0 !== UT ? UT : TT).getBoundingClientRect()
            })).filter((TT => TT.width > 0 && TT.height > 0));
          let HT = (parseFloat(mT.getPropertyValue("--notchTop")) || 0) + gT,
            kT = "";
          if (MT) {
            const UT = window.innerWidth / 2,
              mT = TT.getBoundingClientRect().height,
              MT = [HT, ...nT.map((TT => Math.max(HT, TT.bottom + gT)))].sort(((TT, UT) => TT - UT));
            for (const TT of MT) {
              let MT = UT - 8;
              for (const WT of nT) WT.bottom + gT <= TT || WT.top >= TT + mT + gT || (MT = Math.min(MT, WT.right <= UT ? UT - WT.right - 8 : WT.left - UT - 8));
              const jT = 2 * MT - zT;
              if (jT >= 16 * WT) {
                kT = `${jT}px`, HT = TT;
                break
              }
            }
          }
          TT.style.maxWidth !== kT && (TT.style.maxWidth = kT);
          const jT = TT.getBoundingClientRect(),
            lT = this.compassSize.trackHalfWidth;
          if (jT.width > 0) {
            const TT = this.compass.track.getBoundingClientRect();
            this.compassSize = {
              trackHalfWidth: TT.width / 2,
              screenHalfWidth: window.innerWidth / 2
            }, this.compassSpacing = 4 * zT / TT.width
          }
          if (!kT)
            for (const LT of nT) LT.right > jT.left - 8 && LT.left < jT.right + 8 && (HT = Math.max(HT, LT.bottom + gT));
          TT.style.top = `${HT}px`, this.compassSize.trackHalfWidth !== lT && this.render(this.frame)
        }
      }
      mountSearchArea(TT, UT) {
        this.searchAreas[TT] = this.kB ? null : UT, this.render(this.frame)
      }
      render(TT) {
        if (this.kB) return;
        if (this.frame = TT, this.compass && (Um(this.compass.root, !TT), TT)) {
          const UT = this.compassSize.trackHalfWidth / 50;
          TT.compass.cardinals.forEach(((TT, mT) => {
            const WT = this.cardinals[mT];
            WT.textContent !== TT.name && (WT.textContent = TT.name), Um(WT, TT.hidden), WT.style.translate = TT.left * UT + "px"
          }));
          const mT = new Set;
          TT.compass.markers.forEach(((WT, zT) => {
            var MT;
            mT.add(WT.id);
            let gT = this.markers.get(WT.id);
            gT || (gT = document.createElement("span"), gT.className = "SkyblockCompassMarker", this.markers.set(WT.id, gT), this.compass.track.appendChild(gT)), gT.dataset.icon !== WT.icon && (gT.dataset.icon = WT.icon, gT.replaceChildren(NU(WT.icon))), gT.style.color = null !== (MT = WT.colour) && void 0 !== MT ? MT : "", gT.style.translate = WT.left * UT + "px", gT.style.zIndex = String(TT.compass.markers.length - zT), gT.title !== WT.name && (gT.title = WT.name)
          }));
          for (const [TT, WT] of this.markers) mT.has(TT) || (WT.remove(), this.markers.delete(TT));
          this.compass.label.textContent !== TT.compass.label && (this.compass.label.textContent = TT.compass.label)
        }
        this.terrain && (Um(this.terrain, !(null !== TT && void 0 !== TT && TT.minimap)), null !== TT && void 0 !== TT && TT.minimap && (this.terrain.style.transform = TT.minimap.transform, this.terrain.style.setProperty("--minimap-icon-rotation", TT.minimap.iconRotation)));
        const UT = null === TT || void 0 === TT ? void 0 : TT.searchArea;
        for (const mT of [this.searchAreas.minimap, this.searchAreas.map])
          if (mT && (Um(mT, !UT), UT)) {
            if (this.searchAreaPath.seed !== UT.shapeSeed && (this.searchAreaPath = {
                seed: UT.shapeSeed,
                d: AU(oU(UT.shapeSeed))
              }), mT.dataset.shapeSeed !== UT.shapeSeed) {
              mT.dataset.shapeSeed = UT.shapeSeed;
              for (const TT of mT.querySelectorAll("path")) TT.setAttribute("d", this.searchAreaPath.d)
            }
            mT.style.left = `${UT.left}%`, mT.style.top = `${UT.top}%`, mT.style.width = `${UT.width}%`, mT.style.height = `${UT.height}%`
          } if (this.player && (Um(this.player, !(null !== TT && void 0 !== TT && TT.player) || TT.player.hidden), null !== TT && void 0 !== TT && TT.player && (this.player.style.left = `${TT.player.left}%`, this.player.style.top = `${TT.player.top}%`, this.player.style.setProperty("--map-player-rotation", TT.player.rotation))), this.waypoint) {
          const {
            root: UT,
            marker: mT,
            clip: WT,
            text: zT,
            label: MT,
            distance: gT,
            hint: nT
          } = this.waypoint, HT = !(null !== TT && void 0 !== TT && TT.waypoint) || null !== TT.waypoint.popupToken && TT.waypoint.popupToken !== this.waypointOriginToken;
          Um(UT, HT);
          let kT = 1;
          const jT = this.waypointLaunch;
          if (!HT && jT && TT.waypoint.nameKey === jT.nameKey) {
            const TT = performance.now();
            jT.startedAt ??= TT, kT = Math.min(1, Math.max(0, (TT - jT.startedAt - 450) / 1e3)), mT.style.opacity = String(Math.min(1, (TT - jT.startedAt) / 150)), 1 === kT && (this.waypointLaunch = null)
          } else mT.style.opacity = "", jT && null !== jT.startedAt && (this.waypointLaunch = null);
          if (UT.classList.toggle("Launching", kT < 1), null !== TT && void 0 !== TT && TT.waypoint) {
            const UT = this.waypointInset,
              HT = "quest_talk" === TT.waypoint.markerIcon ? function(TT, UT, mT) {
                if (!TT.text || null === TT.blockHeight || 0 === TT.nearness) return TT;
                const WT = TT.blockHeight / 100 * mT.height,
                  zT = -TT.nearness * (mm * WT + UT.width / 2),
                  MT = TT.nearness * (Wm * WT + UT.height / 2);
                return {
                  ...TT,
                  text: {
                    x: TT.text.x + zT / mT.width * 100,
                    y: TT.text.y + MT / mT.height * 100
                  }
                }
              }(TT.waypoint, this.waypointMarkerSize, this.viewport) : TT.waypoint,
              lT = (0, JU.e)(HT, UT, this.viewport),
              LT = kT * kT * (3 - 2 * kT),
              pT = kT < 1 ? jT.x + (lT.x - jT.x) * LT : lT.x,
              BT = kT < 1 ? jT.y + (lT.y - jT.y) * LT : lT.y;
            mT.style.translate = `${pT}vw ${BT}vh`, WT.style.clipPath = `inset(${UT.top}px ${UT.x}px ${UT.bottom}px)`, Um(zT, kT < 1 || !TT.waypoint.text), zT.style.opacity = String(1 - TT.waypoint.nearness), TT.waypoint.text && (zT.style.translate = `${TT.waypoint.text.x}vw ${TT.waypoint.text.y}vh`), MT.textContent !== TT.waypoint.name && (MT.textContent = TT.waypoint.name), this.markerIcon !== TT.waypoint.markerIcon && (this.markerIcon = TT.waypoint.markerIcon, mT.replaceChildren(NU(this.markerIcon))), gT.textContent !== TT.waypoint.distance && (gT.textContent = TT.waypoint.distance), Um(nT, null === TT.waypoint.hint), null !== TT.waypoint.hint && nT.textContent !== TT.waypoint.hint && (nT.textContent = TT.waypoint.hint)
          }
        }
      }
      dispose() {
        var TT, UT;
        this.mountWaypointOrigin(null), this.render(null), null === (TT = this.stopLayout) || void 0 === TT || TT.call(this), this.stopLayout = null, null === (UT = this.stopWaypoint) || void 0 === UT || UT.call(this), this.stopWaypoint = null, this.compass = null, this.terrain = null, this.searchAreas = {
          minimap: null,
          map: null
        }, this.player = null, this.waypoint = null, this.markers.clear(), this.cardinals = [], this.kB = !0
      }
    }

    function Um(TT, UT) {
      TT.hidden !== UT && (TT.hidden = UT)
    }
    const mm = .55,
      Wm = .6;
    const zm = {
      talk: "quest_talk",
      search: "quest_search"
    };
    class Mm {
      constructor(TT, UT, mT, WT) {
        this.map = TT, this.quests = UT, this.compass = mT, this.display = new Tm, this.translate = void 0, this.locale = "en-GB", this.metresFormat = new Intl.NumberFormat(this.locale), this.kB = !1, this.snapshot = null, this.texts = new Map, this.translate = WT
      }
      setTranslator(TT, UT) {
        this.translate = TT, this.locale = UT, this.metresFormat = new Intl.NumberFormat(UT), this.texts.clear()
      }
      translateCached(TT, UT) {
        const mT = void 0 === UT ? TT : `${TT} ${UT}`;
        let WT = this.texts.get(mT);
        return void 0 === WT && (this.texts.size >= 500 && this.texts.clear(), WT = this.translate(TT, void 0 === UT ? void 0 : {
          distance: UT
        }), this.texts.set(mT, WT)), WT
      }
      getSnapshot() {
        return this.snapshot
      }
      afterRender(TT, UT, mT) {
        if (this.kB) return;
        if (!TT) return this.snapshot = null, void this.display.render(null);
        const WT = this.map.getSnapshot().map,
          HT = mT.cameraHeading,
          kT = {
            ...this.display.compassSize,
            tanHalfFovX: mT.tanHalfFovX,
            pitch: mT.cameraPitch
          },
          jT = [];
        if (WT)
          for (const zT of this.compass.frame(TT, HT, UT)) {
            const TT = ZT(zT.offset, kT);
            null !== TT && jT.push({
              ...zT,
              left: TT
            })
          }
        const lT = function(TT, UT) {
            const mT = [],
              WT = TT => "quest" === TT.kind ? TT.distance - 1 : TT.distance,
              zT = [...TT].sort(((TT, UT) => WT(TT) - WT(UT) || TT.id.localeCompare(UT.id)));
            for (const MT of zT) {
              let TT = !1;
              if ("quest" !== MT.kind)
                for (const WT of mT)
                  if (Math.abs(WT.left - MT.left) < UT) {
                    TT = !0;
                    break
                  } TT || mT.push(MT)
            }
            return mT
          }(jT, this.display.compassSpacing),
          LT = function(TT) {
            let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.PI / 36,
              mT = null;
            for (const WT of TT) Math.abs(WT.offset) <= UT && (!mT || WT.distance < mT.distance || WT.distance === mT.distance && Math.abs(WT.offset) < Math.abs(mT.offset)) && (mT = WT);
            return mT
          }(lT),
          pT = TT => {
            var UT;
            return null !== (UT = TT.displayName) && void 0 !== UT ? UT : this.translateCached(TT.nameKey)
          },
          BT = {
            compass: {
              markers: lT.map((TT => ({
                id: TT.id,
                icon: TT.icon,
                colour: TT.colour,
                name: pT(TT),
                left: TT.left
              }))),
              cardinals: gT.map((TT => {
                let {
                  name: UT,
                  bearing: mT
                } = TT;
                const WT = ZT(zT.e.computeShortestRotation(HT, mT), kT);
                return {
                  name: UT,
                  left: null !== WT && void 0 !== WT ? WT : 0,
                  hidden: null === WT
                }
              })),
              label: LT ? `${pT(LT)} \xb7 ${this.translateCached("skyblockGame:waypointDistance",OT(LT.distance,this.locale))}` : ""
            },
            minimap: null,
            searchArea: null,
            player: null,
            waypoint: null
          };
        if (null !== WT && void 0 !== WT && WT.background) {
          const UT = TT[0] - WT.mapOrigin[0],
            mT = TT[2] - WT.mapOrigin[2],
            {
              rotation: zT,
              transform: gT
            } = function(TT, UT, mT, WT) {
              const [zT, gT] = nT(TT, UT, WT), HT = MT - mT;
              return {
                rotation: HT,
                transform: `rotate(${HT}rad) translate(-${zT}%, -${gT}%)`
              }
            }(UT, mT, HT, WT.background.bounds);
          BT.minimap = {
            transform: gT,
            iconRotation: -zT + "rad"
          };
          const [kT, jT] = nT(UT, mT, WT.background.bounds);
          BT.player = {
            left: kT,
            top: jT,
            hidden: kT < 0 || jT < 0 || kT > 100 || jT > 100,
            rotation: -zT + "rad"
          }
        }
        const {
          waypoint: cT
        } = this.quests.getSnapshot();
        if ("search" === (null === cT || void 0 === cT ? void 0 : cT.questMarkerIcon) && null !== WT && void 0 !== WT && WT.background) {
          const {
            bounds: TT
          } = WT.background, [UT, mT] = nT(cT.position[0] - WT.mapOrigin[0], cT.position[2] - WT.mapOrigin[2], TT);
          BT.searchArea = {
            left: UT,
            top: mT,
            width: 6400 / (TT.mapMaxX - TT.mapMinX),
            height: 6400 / (TT.mapMaxZ - TT.mapMinZ),
            shapeSeed: cT.nameKey
          }
        }
        const vT = this.quests.getNotificationSnapshot(),
          fT = "completion" === (null === vT || void 0 === vT ? void 0 : vT.phase) && !YU(vT.kind);
        if (cT && !fT) {
          const UT = Math.hypot(...cT.position.map(((UT, mT) => UT - TT[mT]))),
            WT = Math.round(UT),
            zT = "talk" === cT.questMarkerIcon ? Math.min(1, Math.max(0, (10 - UT) / 5)) : 0,
            MT = mT.projectWorldPosToViewport(cT.position),
            gT = MT && mT.projectWorldPosToViewport([cT.position[0], cT.position[1] - 1, cT.position[2]]);
          BT.waypoint = {
            ...mT.projectWorldPosToScreenPos(cT.position),
            text: MT,
            nearness: zT * zT * (3 - 2 * zT),
            blockHeight: MT && gT ? gT.y - MT.y : null,
            name: this.translateCached(cT.nameKey),
            nameKey: cT.nameKey,
            markerIcon: cT.questMarkerIcon ? zm[cT.questMarkerIcon] : "quest",
            popupToken: (null === vT || void 0 === vT ? void 0 : vT.waypointNameKey) === cT.nameKey ? vT.token : null,
            distance: this.translateCached("skyblockGame:waypointDistance", this.metresFormat.format(WT)),
            hint: "search" === cT.questMarkerIcon && Math.hypot(cT.position[0] - TT[0], cT.position[2] - TT[2]) <= 32 ? this.translateCached("skyblockGame:waypointSearchHint") : null
          }
        }
        this.snapshot = BT, this.display.render(BT)
      }
      dispose() {
        this.kB = !0, this.snapshot = null, this.display.dispose()
      }
    }
    const gm = "skyblockSkillsView";
    class nm extends lT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now,
          mT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TT => TT,
          WT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          zT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => TT;
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.now = UT, this.translate = mT, this.locale = WT, this.itemName = zT, this.progress = null, this.selected = "foraging", this.pending = new Map, this.recent = null, this.nextLevelUpToken = 0, this.onLevelUp = () => {}, this.skillText = new Map, this.sourceText = new Map, this.snapshot = {
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
      setTranslator(TT, UT, mT) {
        this.translate = TT, this.locale = UT, this.itemName = mT, this.skillText.clear(), this.sourceText.clear(), this.emit()
      }
      text(TT) {
        let UT = this.skillText.get(TT);
        return UT || (UT = {
          label: this.translate(`skyblockGame:${TT}`),
          description: this.translate(`skyblockGame:${TT}Description`)
        }, this.skillText.set(TT, UT)), UT
      }
      sources(TT) {
        if ("mining" === TT || "fishing" === TT) return this.buildSources(TT);
        let UT = this.sourceText.get(TT);
        return UT || (UT = this.buildSources(TT), this.sourceText.set(TT, UT)), UT
      }
      buildSources(TT) {
        const UT = this.translate;
        return "exploration" === TT ? [UT("skyblockGame:explorationZoneSource", {
          xp: this.number(100)
        }), UT("skyblockGame:explorationLandmarkSource", {
          xp: this.number(50)
        })] : "foraging" === TT ? [UT("skyblockGame:logSource", {
          xp: this.number(pU["Maple Log"])
        })] : "combat" === TT ? [UT("skyblockGame:creatureKillSource"), UT("skyblockGame:noEnvironmentalXp")] : "farming" === TT ? [UT("skyblockGame:cropSource", {
          xp: this.number(cU["Wheat|FreshlyGrown"])
        }), UT("skyblockGame:terrainFarmingSource", {
          xp: this.number(2)
        }), UT("skyblockGame:noYoungCropXp")] : Object.entries("mining" === TT ? ZU : vU).map((TT => {
          let [mT, WT] = TT;
          return UT("skyblockGame:itemXpSource", {
            item: this.itemName(mT),
            xp: this.number(WT)
          })
        }))
      }
      number(TT) {
        return TT.toLocaleString(this.locale)
      }
      benefit(TT, UT) {
        const mT = gU(TT, UT);
        return this.translate(mT.translationKey, {
          bonus: this.number(mT.percent)
        })
      }
      pB(TT) {
        if (!this.kB) {
          if ("snapshot" === TT.kind) this.progress = TT.progress, this.pending.clear(), this.recent = null;
          else if ("award" === TT.kind && this.progress) {
            const {
              award: UT
            } = TT;
            this.progress = {
              ...this.progress,
              [UT.skill]: UT.after
            };
            for (const [TT, WT] of this.pending) WT.skill === UT.skill && this.pending.delete(TT);
            const mT = UT.after.level > UT.before.level;
            this.recordGain(UT.skill, UT.amount, mT ? ++this.nextLevelUpToken : null), mT && this.onLevelUp({
              questCompletionKind: "skillLevel",
              skill: UT.skill,
              beforeLevel: UT.before.level,
              level: UT.after.level
            })
          } else {
            if ("rejectBlock" === TT.kind) return void this.rejectBlock(TT.position);
            if ("open" === TT.kind) return void this.show()
          }
          this.emit()
        }
      }
      predictBlock(TT, UT, mT) {
        if (!this.progress || this.kB || mT) return;
        const WT = function(TT, UT) {
          const mT = TT.split("|")[0];
          return "Air" === UT || UT === `Barkless ${TT}` ? Object.hasOwn(pU, mT) ? {
            skill: "foraging",
            amount: pU[mT]
          } : "Air" !== UT ? null : Object.hasOwn(ZU, TT) ? {
            skill: "mining",
            amount: ZU[TT]
          } : jU(TT) ? {
            skill: "farming",
            amount: 10
          } : LU(TT) ? {
            skill: "foraging",
            amount: 2
          } : Object.hasOwn(cU, TT) ? {
            skill: "farming",
            amount: cU[TT]
          } : Object.hasOwn(PT, TT) ? {
            skill: "farming",
            amount: 2
          } : null : null
        }(UT, "Air");
        if (!WT) return;
        const zT = TT.join(",");
        if (this.pending.has(zT)) return;
        const MT = this.predictedProgress(WT.skill).totalXp + WT.amount;
        Number.isSafeInteger(MT) && (this.pending.set(zT, {
          ...WT,
          expires: this.now() + 2e3
        }), this.recordGain(WT.skill, 0), this.emit())
      }
      rejectBlock(TT) {
        this.pending.delete(TT.join(",")) && this.emit()
      }
      Cl() {
        if (this.kB) return;
        let TT = !1;
        for (const [UT, mT] of this.pending) mT.expires <= this.now() && (this.pending.delete(UT), TT = !0);
        this.recent && this.recent.expires <= this.now() && (this.recent = null, TT = !0), TT && this.emit()
      }
      dispose() {
        this.progress = null, this.pending.clear(), this.recent = null, super.dispose()
      }
      recordGain(TT, UT) {
        var mT, WT;
        let zT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        const MT = (null === (mT = this.recent) || void 0 === mT ? void 0 : mT.skill) === TT && this.recent.expires > this.now() ? this.recent.confirmed : 0,
          gT = (null === (WT = this.recent) || void 0 === WT ? void 0 : WT.skill) === TT && this.recent.expires > this.now() ? this.recent.levelUpToken : null;
        this.recent = {
          skill: TT,
          confirmed: MT + UT,
          expires: this.now() + 3e3,
          levelUpToken: null !== zT && void 0 !== zT ? zT : gT
        }
      }
      pendingXp(TT) {
        let UT = 0;
        for (const mT of this.pending.values()) mT.skill === TT && (UT += mT.amount);
        return UT
      }
      predictedProgress(TT) {
        const UT = this.progress[TT],
          mT = this.pendingXp(TT);
        return mT ? HU(UT.totalXp + mT, TT) : UT
      }
      isEnabled() {
        return null !== this.progress
      }
      buildSnapshot() {
        var TT, UT, mT;
        const WT = this.progress ? DT.map((TT => {
            const UT = this.predictedProgress(TT);
            return {
              ...this.text(TT),
              icon: fU[TT],
              benefit: this.benefit(TT, UT.level),
              sources: this.sources(TT),
              id: TT,
              selected: TT === this.selected,
              level: this.translate("skyblockGame:level", {
                level: this.number(UT.level)
              }),
              xp: null === UT.xpForNextLevel ? this.translate("skyblockGame:max") : this.translate("skyblockGame:xpProgress", {
                current: this.number(UT.xpIntoLevel),
                target: this.number(UT.xpForNextLevel)
              }),
              percent: null === UT.xpForNextLevel ? 100 : Math.min(100, UT.xpIntoLevel / UT.xpForNextLevel * 100)
            }
          })) : [],
          zT = WT.find((TT => {
            var UT;
            return TT.id === (null === (UT = this.recent) || void 0 === UT ? void 0 : UT.skill)
          })),
          MT = this.recent ? this.recent.confirmed + this.pendingXp(this.recent.skill) : 0;
        return {
          enabled: this.isEnabled(),
          open: this.open,
          skills: WT,
          detail: null !== (TT = WT.find((TT => TT.selected))) && void 0 !== TT ? TT : null,
          overallLevel: this.progress ? DT.reduce(((TT, UT) => TT + this.predictedProgress(UT).level), 0) : null,
          hud: zT && MT > 0 ? {
            skill: zT,
            gain: this.translate("skyblockGame:xpGain", {
              xp: this.number(MT)
            }),
            levelUpToken: null !== (UT = null === (mT = this.recent) || void 0 === mT ? void 0 : mT.levelUpToken) && void 0 !== UT ? UT : null,
            colour: iU(zT.id)
          } : null
        }
      }
    }
    const Hm = Math.max(1600, 600, 950) + 400,
      km = {
        "--quest-step-flash": "1600ms",
        "--quest-step-pop": "600ms",
        "--quest-step-unlock": "500ms",
        "--quest-step-unlock-delay": "450ms"
      },
      jm = "skyblockQuestsView",
      lm = "skyblockQuestNotificationView";
    class Lm extends lT {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now,
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "en-GB",
          gT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {};
        super(TT, WT, arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {}), this.requestTracking = UT, this.translate = mT, this.now = zT, this.locale = MT, this.publishNotification = gT, this.notifications = void 0, this.notificationSnapshot = null, this.authoritative = null, this.receivedAt = 0, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.compassTarget = null, this.waypoint = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, this.onTrackedStepFinished = () => {}, this.onViewDialogue = null, this.translateWithIcons = null, this.snapshot = {
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
          var TT, UT;
          this.selected = null !== (TT = null === (UT = this.authoritative) || void 0 === UT ? void 0 : UT.trackedQuestId) && void 0 !== TT ? TT : null, this.show()
        }, this.select = TT => {
          this.selected = TT, this.emit()
        }, this.toggleCompleted = () => {
          this.completedExpanded = !this.completedExpanded, this.emit()
        }, this.trackSelected = () => {
          const TT = this.snapshot.detail;
          !this.kB && null !== TT && void 0 !== TT && TT.canTrack && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = this.now() + 2500, this.waitingForTrack = !0, this.requestTracking(TT.id), this.emit())
        }, this.viewDialogue = () => {
          const TT = this.snapshot.detail;
          var UT;
          TT && (null === (UT = this.onViewDialogue) || void 0 === UT || UT.call(this, TT.id))
        }, this.notifications = new OU(zT, (() => this.authoritative))
      }
      getTrackedQuestId() {
        var TT, UT;
        return null !== (TT = null === (UT = this.authoritative) || void 0 === UT ? void 0 : UT.trackedQuestId) && void 0 !== TT ? TT : null
      }
      notify(TT) {
        !this.kB && this.notifications.enqueue(TT) && this.emitNotification()
      }
      setNotificationsHeld(TT) {
        (this.notifications.setHeld(TT) || TT) && this.emitNotification()
      }
      Cl() {
        var TT, UT;
        if (this.kB) return;
        this.notifications.Cl() && this.emitNotification();
        let mT = !1;
        this.trackAvailableAt && this.now() >= this.trackAvailableAt && (this.trackAvailableAt = 0, this.waitingForTrack = !1, mT = !0), this.trackedChange && this.now() >= this.trackedChange.expiresAt && (this.trackedChange = null, mT = !0);
        const WT = pm(this.authoritative);
        null !== WT && void 0 !== WT && null !== (TT = WT.questClock) && void 0 !== TT && TT.running && this.clockText(WT) !== (null === (UT = this.snapshot.tracked) || void 0 === UT ? void 0 : UT.clock) && (mT = !0), mT && this.emit()
      }
      setTranslator(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = TT, this.locale = UT, this.emitNotification(), this.emit()
      }
      pB(TT) {
        if (!this.kB)
          if ("completion" === TT.kind) this.notify(TT.questCompletion);
          else if ("landmark" === TT.kind) this.notify({
          questCompletionKind: "landmark",
          landmarkNameKey: TT.landmarkDiscoveredNameKey
        });
        else if ("npcNote" === TT.kind) {
          var UT, mT, WT;
          this.notify({
            questCompletionKind: "npcNote",
            titleKey: TT.npcNoteTitleKey,
            textKey: TT.npcNoteTextKey,
            params: null !== (UT = TT.npcNoteParams) && void 0 !== UT ? UT : {},
            nameKeys: null !== (mT = TT.npcNoteNameKeys) && void 0 !== mT ? mT : {},
            iconItem: null !== (WT = TT.npcNoteIconItem) && void 0 !== WT ? WT : null
          })
        } else if ("open" === TT.kind) this.show();
        else if ("guidance" === TT.kind) this.waypoint = TT.waypoint, this.compassTarget = TT.compassTarget, this.snapshot = {
          ...this.snapshot,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        };
        else if ("snapshot" === TT.kind) {
          this.authoritative = TT.snapshot, this.notifications.Cl() && this.emitNotification(), this.receivedAt = this.now(), this.waitingForTrack = !1;
          const UT = this.trackedStepPulse;
          this.updateTrackedStepPulse(TT.snapshot), this.emit(), this.trackedStepPulse > UT && this.onTrackedStepFinished()
        }
      }
      dispose() {
        this.notifications.clear(), this.emitNotification(), this.authoritative = null, this.selected = null, this.completedExpanded = !1, this.trackAvailableAt = 0, this.waitingForTrack = !1, this.waypoint = null, this.compassTarget = null, this.trackedSteps = null, this.trackedStepPulse = 0, this.trackedChange = null, super.dispose()
      }
      emitNotification() {
        this.kB || (this.notificationSnapshot = this.notifications.getView(this.translate, this.questTextTranslator(), this.locale), this.publishNotification(this.notificationSnapshot))
      }
      questTextTranslator() {
        var TT;
        return null !== (TT = this.translateWithIcons) && void 0 !== TT ? TT : this.translate
      }
      clockText(TT) {
        const UT = TT.questClock;
        if (!UT) return null;
        const mT = UT.elapsedMs + (UT.running ? this.now() - this.receivedAt : 0);
        return void 0 === UT.countdownFromMs ? XT(mT, !1) : XT(1e3 * Math.ceil(Math.max(0, UT.countdownFromMs - mT) / 1e3), !1)
      }
      updateTrackedStepPulse(TT) {
        var UT, mT, WT;
        const zT = pm(TT);
        if (!zT) return this.trackedSteps = null, this.trackedStepPulse = 0, void(this.trackedChange = null);
        const MT = TT => zT.subquests.filter((UT => TT(UT.status))).map((TT => TT.id)),
          gT = MT((TT => "completed" === TT || "skipped" === TT)),
          nT = MT((TT => "locked" !== TT)),
          HT = (null === (UT = this.trackedSteps) || void 0 === UT ? void 0 : UT.questId) === zT.id && zT.progress >= this.trackedSteps.progress ? this.trackedSteps : null;
        if (HT) {
          const TT = gT.filter((TT => !HT.finished.has(TT))),
            UT = MT((TT => "active" === TT || "ready" === TT)).filter((TT => !HT.unlocked.has(TT)));
          TT.length > 0 && this.trackedStepPulse++, (TT.length > 0 || UT.length > 0) && (this.trackedChange = {
            finished: new Set(TT),
            unlocked: new Set(UT),
            expiresAt: this.now() + Hm
          })
        } else {
          var kT;
          this.trackedStepPulse = (null === (kT = this.trackedSteps) || void 0 === kT ? void 0 : kT.questId) === zT.id ? this.trackedStepPulse : 0, this.trackedChange = null
        }
        this.trackedSteps = {
          questId: zT.id,
          progress: zT.progress,
          finished: new Set([...null !== (mT = null === HT || void 0 === HT ? void 0 : HT.finished) && void 0 !== mT ? mT : [], ...gT]),
          unlocked: new Set([...null !== (WT = null === HT || void 0 === HT ? void 0 : HT.unlocked) && void 0 !== WT ? WT : [], ...nT])
        }
      }
      entry(TT, UT) {
        var mT, WT;
        const zT = TT.id === (null === (mT = this.authoritative) || void 0 === mT ? void 0 : mT.trackedQuestId),
          MT = this.now() < this.trackAvailableAt,
          gT = this.questTextTranslator(),
          nT = TT.subquests.map((UT => {
            var mT, WT, MT, nT, HT, kT;
            const jT = null !== (mT = UT.handInNpcName) && void 0 !== mT ? mT : TT.giverName,
              lT = this.translate("skyblockGame:progress", {
                current: UT.progress.toLocaleString(this.locale),
                target: UT.target.toLocaleString(this.locale)
              }),
              LT = {
                active: null,
                locked: "skyblockGame:subquestLocked",
                ready: jT ? "skyblockGame:subquestReady" : "skyblockGame:subquestReadyNoNpc",
                completed: "skyblockGame:completed",
                skipped: "skyblockGame:subquestSkipped"
              } [UT.status],
              pT = "active" === UT.status || "ready" === UT.status;
            return {
              id: UT.id,
              name: bU(gT, UT.nameKey, UT.nameParams),
              description: bU(gT, UT.descriptionKey, UT.descriptionParams),
              progress: lT,
              status: UT.status,
              statusLabel: LT ? this.translate(LT, {
                npc: jT
              }) : lT,
              iconItem: pT && null !== (WT = UT.questIconItem) && void 0 !== WT ? WT : null,
              barPercent: "active" === UT.status && UT.showsProgressBar ? Math.min(100, 100 * UT.progress / UT.target) : null,
              justFinished: zT && null !== (MT = null === (nT = this.trackedChange) || void 0 === nT ? void 0 : nT.finished.has(UT.id)) && void 0 !== MT && MT,
              justUnlocked: zT && null !== (HT = null === (kT = this.trackedChange) || void 0 === kT ? void 0 : kT.unlocked.has(UT.id)) && void 0 !== HT && HT
            }
          }));
        return {
          id: TT.id,
          name: bU(gT, TT.nameKey, TT.nameParams),
          description: bU(gT, TT.descriptionKey, TT.descriptionParams),
          progress: UT ? this.translate("skyblockGame:completed") : this.translate("skyblockGame:stepsProgress", {
            current: TT.progress.toLocaleString(this.locale),
            target: TT.target.toLocaleString(this.locale)
          }),
          completed: UT,
          tracked: zT,
          selected: TT.id === this.selected,
          canTrack: !UT && !zT && !MT,
          trackLabel: this.translate(zT ? "skyblockGame:trackingQuest" : this.waitingForTrack ? "skyblockGame:updating" : MT ? "skyblockGame:pleaseWait" : "skyblockGame:trackQuest"),
          canViewDialogue: null !== this.onViewDialogue && "dungeon_run" !== TT.id,
          subquests: nT,
          focusStep: null !== (WT = nT.find((TT => null !== TT.barPercent))) && void 0 !== WT ? WT : null,
          clock: this.clockText(TT)
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var TT, UT, mT, WT, zT, MT, gT, nT, HT, kT;
        const jT = [...null !== (TT = null === (UT = this.authoritative) || void 0 === UT ? void 0 : UT.active) && void 0 !== TT ? TT : [], ...null !== (mT = null === (WT = this.authoritative) || void 0 === WT ? void 0 : WT.completed) && void 0 !== mT ? mT : []];
        var lT, LT, pT, BT;
        jT.some((TT => TT.id === this.selected)) || (this.selected = null !== (lT = null !== (LT = null === (pT = this.authoritative) || void 0 === pT ? void 0 : pT.trackedQuestId) && void 0 !== LT ? LT : null === (BT = jT[0]) || void 0 === BT ? void 0 : BT.id) && void 0 !== lT ? lT : null);
        const ZT = null !== (zT = null === (MT = this.authoritative) || void 0 === MT ? void 0 : MT.active.map((TT => this.entry(TT, !1)))) && void 0 !== zT ? zT : [];
        ZT.sort(((TT, UT) => Number(UT.tracked) - Number(TT.tracked)));
        const cT = null !== (gT = null === (nT = this.authoritative) || void 0 === nT ? void 0 : nT.completed.map((TT => this.entry(TT, !0)))) && void 0 !== gT ? gT : [];
        return {
          enabled: this.isEnabled(),
          open: this.open,
          active: ZT,
          completed: cT,
          completedExpanded: this.completedExpanded,
          detail: null !== (HT = [...ZT, ...cT].find((TT => TT.selected))) && void 0 !== HT ? HT : null,
          tracked: null !== (kT = ZT.find((TT => TT.tracked))) && void 0 !== kT ? kT : null,
          trackedStepPulse: this.trackedStepPulse,
          waypoint: this.waypoint,
          compassTarget: this.compassTarget
        }
      }
    }

    function pm(TT) {
      var UT;
      return null !== (UT = null === TT || void 0 === TT ? void 0 : TT.active.find((UT => UT.id === TT.trackedQuestId))) && void 0 !== UT ? UT : null
    }
    const Bm = "skyblockDungeonsView";
    class Zm extends lT {
      constructor(TT, UT) {
        let mT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB",
          WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {};
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {}), this.translate = UT, this.locale = mT, this.requestEnter = WT, this.authoritative = null, this.selected = null, this.pickerDungeonId = null, this.pageIndex = 0, this.snapshot = {
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
            UT = null === TT || void 0 === TT ? void 0 : TT.difficulties[this.pageIndex];
          void 0 !== UT && null !== UT.unlockedBoss && (this.close(), this.requestEnter(TT.id, UT.difficulty))
        }
      }
      setTranslator(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.translate = TT, this.locale = UT, this.emit()
      }
      pB(TT) {
        var UT, mT;
        if (!this.kB) return "open" === TT.kind ? (this.pickerDungeonId = null, void this.show()) : void("choose" !== TT.kind ? "snapshot" === TT.kind && (this.authoritative = TT.snapshot, this.pageIndex = Math.min(this.pageIndex, Math.max(0, (null !== (UT = null === (mT = this.pickerEntry()) || void 0 === mT ? void 0 : mT.difficulties.length) && void 0 !== UT ? UT : 1) - 1)), null === TT.snapshot && this.open ? this.close() : this.emit()) : this.choose(TT.chooseDungeonId))
      }
      dispose() {
        this.authoritative = null, this.selected = null, this.pickerDungeonId = null, super.dispose()
      }
      onClosed() {
        this.pickerDungeonId = null
      }
      choose(TT) {
        var UT;
        const mT = null === (UT = this.authoritative) || void 0 === UT ? void 0 : UT.dungeons.find((UT => UT.id === TT));
        void 0 !== mT ? this.open && this.pickerDungeonId === TT || (this.pickerDungeonId = TT, this.pageIndex = Math.max(0, mT.difficulties.findLastIndex((TT => null !== TT.unlockedBoss))), this.showOrRefresh()) : console.warn(`Skyblock dungeons: asked to choose a boss in unknown dungeon ${TT}`)
      }
      turnTo(TT) {
        var UT, mT;
        const WT = null !== (UT = null === (mT = this.pickerEntry()) || void 0 === mT ? void 0 : mT.difficulties.length) && void 0 !== UT ? UT : 0;
        TT < 0 || TT >= WT || TT === this.pageIndex || (this.pageIndex = TT, this.emit())
      }
      pickerEntry() {
        var TT, UT;
        return null !== (TT = null === (UT = this.authoritative) || void 0 === UT ? void 0 : UT.dungeons.find((TT => TT.id === this.pickerDungeonId))) && void 0 !== TT ? TT : null
      }
      difficulty(TT) {
        const UT = TT.completions > 0,
          mT = null === TT.bestMs ? null : XT(TT.bestMs);
        return {
          difficulty: TT.difficulty,
          label: this.translate(aT[TT.difficulty]),
          colour: yT[TT.difficulty],
          beaten: UT,
          bestTime: mT,
          completions: TT.completions,
          summary: UT ? [null === mT ? null : this.translate("skyblockGame:dungeonBestTime", {
            time: mT
          }), this.translate("skyblockGame:dungeonCompletions", {
            completions: TT.completions.toLocaleString(this.locale)
          })].filter((TT => null !== TT)).join(" \xb7 ") : this.translate("skyblockGame:dungeonNotCompleted")
        }
      }
      entry(TT) {
        const UT = TT.difficulties.map((TT => this.difficulty(TT))),
          mT = UT.filter((TT => TT.beaten)).length;
        return {
          id: TT.id,
          name: this.translate(TT.nameKey),
          selected: TT.id === this.selected,
          beatenSummary: `${mT} / ${UT.length}`,
          difficulties: UT
        }
      }
      picker() {
        const TT = this.pickerEntry();
        if (null === TT || 0 === TT.difficulties.length) return null;
        const UT = TT.difficulties.map(((UT, mT) => {
          var WT, zT, MT, gT;
          const nT = UT.unlockedBoss,
            HT = null === nT ? this.lockedHint(TT, mT) : null;
          return {
            ...this.difficulty(UT),
            unlocked: null !== nT,
            bossName: null === nT ? null : this.translate(nT.bossNameKey),
            bossMobType: null !== (WT = null === nT || void 0 === nT ? void 0 : nT.bossMobType) && void 0 !== WT ? WT : null,
            bossMobVariation: null !== (zT = null === nT || void 0 === nT ? void 0 : nT.bossMobVariation) && void 0 !== zT ? zT : null,
            lockedHint: null !== (MT = null === HT || void 0 === HT ? void 0 : HT.text) && void 0 !== MT ? MT : null,
            lockedHintHighlight: null !== (gT = null === HT || void 0 === HT ? void 0 : HT.highlight) && void 0 !== gT ? gT : null,
            current: mT === this.pageIndex
          }
        }));
        return {
          dungeonName: this.translate(TT.nameKey),
          pages: UT,
          page: UT[this.pageIndex],
          canPrevious: this.pageIndex > 0,
          canNext: this.pageIndex < UT.length - 1
        }
      }
      lockedHint(TT, UT) {
        var mT, WT, zT;
        if (0 === UT && "number" === typeof TT.combatLevelLock) {
          const UT = this.translate("skyblockGame:dungeonBossLockedCombatLevel", {
            level: TT.combatLevelLock
          });
          return this.hintHighlighting("skyblockGame:dungeonBossLockedCombat", {}, "skill", {
            name: UT,
            colour: iU("combat"),
            icon: fU.combat
          })
        }
        const MT = null !== (mT = null === (WT = this.authoritative) || void 0 === WT ? void 0 : WT.dungeons) && void 0 !== mT ? mT : [],
          gT = UT > 0 ? TT : null !== (zT = MT[MT.indexOf(TT) - 1]) && void 0 !== zT ? zT : null,
          nT = UT > 0 ? TT.difficulties[UT - 1] : null === gT || void 0 === gT ? void 0 : gT.difficulties[0];
        if (null === gT || void 0 === nT) return null;
        const HT = this.translate(gT.nameKey);
        if (null === nT.unlockedBoss) return gT === TT ? this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseen", {}, nT.difficulty) : this.hintNamingDifficulty("skyblockGame:dungeonBossLockedUnseenElsewhere", {
          dungeon: HT
        }, nT.difficulty);
        const kT = this.translate(nT.unlockedBoss.bossNameKey);
        return gT === TT ? this.hintNamingDifficulty("skyblockGame:dungeonBossLocked", {
          boss: kT
        }, nT.difficulty) : {
          text: this.translate("skyblockGame:dungeonBossLockedElsewhere", {
            boss: kT,
            dungeon: HT
          }),
          highlight: null
        }
      }
      hintNamingDifficulty(TT, UT, mT) {
        return this.hintHighlighting(TT, UT, "difficulty", {
          name: this.translate(aT[mT]),
          colour: yT[mT],
          icon: null
        })
      }
      hintHighlighting(TT, UT, mT, WT) {
        let {
          name: zT,
          colour: MT,
          icon: gT
        } = WT;
        const nT = this.translate(TT, {
          ...UT,
          [mT]: "\x01"
        }).split("\x01");
        return {
          text: this.translate(TT, {
            ...UT,
            [mT]: zT
          }),
          highlight: 2 === nT.length ? {
            before: nT[0],
            name: zT,
            after: nT[1],
            colour: MT,
            icon: gT
          } : null
        }
      }
      isEnabled() {
        return null !== this.authoritative
      }
      buildSnapshot() {
        var TT, UT, mT;
        const WT = null !== (TT = null === (UT = this.authoritative) || void 0 === UT ? void 0 : UT.dungeons) && void 0 !== TT ? TT : [];
        var zT, MT;
        WT.some((TT => TT.id === this.selected)) || (this.selected = null !== (zT = null === (MT = WT[0]) || void 0 === MT ? void 0 : MT.id) && void 0 !== zT ? zT : null);
        const gT = WT.map((TT => this.entry(TT)));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          dungeons: gT,
          detail: null !== (mT = gT.find((TT => TT.selected))) && void 0 !== mT ? mT : null,
          picker: null === this.pickerDungeonId ? null : this.picker()
        }
      }
    }
    const cm = ["mining", "farming", "foraging", "fishing", "combat"],
      fm = [25, 50, 100, 200, 400, 750, 1250, 2e3, 3e3],
      qm = [20, 40, 80, 150, 300, 500, 800, 1200, 2e3];

    function im() {
      for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
      return UT.map(((TT, UT) => ({
        amount: TT,
        coins: fm[UT],
        xp: qm[UT]
      })))
    }
    const bm = im(100, 250, 500, 1e3, 2500, 5e3, 1e4, 25e3, 5e4),
      Om = im(50, 100, 250, 1e3, 2500, 5e3, 1e4, 25e3),
      em = im(50, 100, 250, 500, 1e3, 2500, 5e3),
      Ym = im(25, 50, 100, 250, 500, 1e3),
      Jm = im(10, 25, 50, 100, 250, 500, 1e3),
      xm = im(1, 5, 10, 25, 50);

    function dm(TT, UT) {
      return {
        id: TT,
        category: "fishing",
        item: UT,
        drops: [UT],
        tiers: arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Jm
      }
    }
    const wm = [{
        id: "coal",
        category: "mining",
        item: "Coal",
        blocks: {
          "Coal Ore": 1,
          "Pure Coal Ore": 9,
          "Block of Coal": 3
        },
        tiers: Om
      }, {
        id: "iron",
        category: "mining",
        item: "Raw Iron",
        blocks: {
          "Iron Ore": 1,
          "Pure Iron Ore": 9
        },
        tiers: em
      }, {
        id: "gold",
        category: "mining",
        item: "Raw Gold",
        blocks: {
          "Gold Ore": 1,
          "Pure Gold Ore": 9
        },
        tiers: em
      }, {
        id: "diamond",
        category: "mining",
        item: "Diamond",
        blocks: {
          "Diamond Ore": 1,
          "Pure Diamond Ore": 9
        },
        tiers: Ym
      }, {
        id: "moonstone",
        category: "mining",
        item: "Moonstone",
        blocks: {
          "Moonstone Ore": 1,
          "Pure Moonstone Ore": 9
        },
        tiers: Ym
      }, {
        id: "stone",
        category: "mining",
        item: "Stone",
        blocks: {
          Stone: 1
        },
        tiers: Om
      }, {
        id: "wheat",
        category: "farming",
        item: "Wheat",
        blocks: {
          "Wheat|FreshlyGrown": 1
        },
        tiers: bm
      }, {
        id: "carrot",
        category: "farming",
        item: "Carrot",
        blocks: {
          "Carrot Plant|FreshlyGrown": 1
        },
        tiers: bm
      }, {
        id: "potato",
        category: "farming",
        item: "Raw Potato",
        blocks: {
          "Potato Plant|FreshlyGrown": 1
        },
        tiers: bm
      }, {
        id: "beetroot",
        category: "farming",
        item: "Beetroot",
        blocks: {
          "Beetroot Plant|FreshlyGrown": 1
        },
        tiers: em
      }, {
        id: "melon",
        category: "farming",
        item: "Melon",
        blocks: {
          Melon: 1
        },
        tiers: Om
      }, {
        id: "watermelon",
        category: "farming",
        item: "Watermelon",
        blocks: {
          Watermelon: 1
        },
        tiers: Om
      }, {
        id: "maple_log",
        category: "foraging",
        item: "Maple Log",
        blocks: {
          "Maple Log": 1
        },
        tiers: Om
      }, {
        id: "pear_log",
        category: "foraging",
        item: "Pear Log",
        blocks: {
          "Pear Log": 1
        },
        tiers: em
      }, {
        id: "palm_log",
        category: "foraging",
        item: "Palm Log",
        blocks: {
          "Palm Log": 1
        },
        tiers: em
      }, dm("wheatfish", "Wheatfish"), dm("darter", "Darter"), dm("sunset_minnow", "Sunset Minnow"), dm("root_flounder", "Root Flounder"), dm("greenfin_loach", "Greenfin Loach"), dm("red_strongfish", "Red Strongfish"), dm("green_strongfish", "Green Strongfish"), dm("boomerang_fish", "Boomerang Fish"), dm("seahorse", "Seahorse"), dm("spined_stickleback", "Spined Stickleback"), dm("moon_strongfish", "Moon Strongfish"), dm("boulder_bass", "Boulder Bass"), dm("grass_snapper", "Grass Snapper"), dm("crystal_wheatfish", "Crystalized Wheatfish", xm), dm("moonstone_pupfish", "Moonstone Pupfish", xm), dm("reedglass_minnow", "Reedglass Minnow"), dm("mangrove_herring", "Mangrove Herring"), dm("mudline_perch", "Mudline Perch"), dm("coastal_mullet", "Coastal Mullet"), dm("reef_sardine", "Reef Sardine"), dm("root_perch", "Root Perch"), dm("driftwood_catfish", "Driftwood Catfish"), dm("aether_minnow", "Aether Minnow"), dm("needlefish", "Tri-Pointed Needlefish"), dm("threadfin_bream", "Threadfin Bream"), dm("mudbelly_tilapia", "Mudbelly Tilapia"), dm("rotslab_eel", "Rotslab Eel"), dm("polarflash_electron", "Polarflash Electron"), dm("mireback_carp", "Mireback Carp"), dm("blackwater_bream", "Blackwater Bream"), dm("stone_grouper", "Stone Grouper"), dm("shadeback_ray", "Shadeback Ray"), dm("glacial_silverfish", "Glacial Silverfish"), dm("hatchetfish", "Hatchetfish"), dm("moonlit_boomerang", "Moonlit Boomerang Fish"), dm("murkborne_ray", "Murkborne Ray"), dm("bamboo_catfish", "Bamboo Catfish"), dm("mossback_arapaima", "Mossback Arapaima"), dm("murk_stingray", "Murk Stingray"), dm("channel_sawfish", "Channel Sawfish"), dm("boned_sturgeon", "Boned Sturgeon"), dm("oarfish", "Oarfish"), dm("snakehead", "Snakehead", xm), dm("eldertide_leviathan", "Eldertide Leviathan", xm), dm("pithead", "Pithead"), dm("electric_eel", "Electric Eel"), dm("shadow_darter", "Shadow Darter"), dm("abyss_carp", "Abyss Carp"), dm("nomai_moray", "Nomai Moray"), dm("silver_dragonfish", "Silver Dragonfish"), dm("giant_moray", "Giant Moray"), dm("coelacanth", "Coelacanth", xm), dm("frost_herring", "Frost Herring"), dm("permafrost_halibut", "Permafrost Halibut"), dm("glacial_lanternfish", "Glacial Lanternfish"), dm("frozen_grenadier", "Frozen Grenadier"), dm("blackfin_icefish", "Blackfin Icefish"), dm("moonfish", "Moonfish"), dm("alpha_strongfish", "Alpha Moon Strongfish"), dm("deep_lanternfish", "Deepwater Lanternfish", xm), dm("pearlescent_moonfish", "Pearlescent Moonfish", xm), {
        id: "rotten_flesh",
        category: "combat",
        item: "Rotten Flesh",
        drops: ["Rotten Flesh"],
        tiers: Om
      }, {
        id: "rotten_brain",
        category: "combat",
        item: "Rotten Brain",
        drops: ["Rotten Brain"],
        tiers: Ym
      }, {
        id: "iron_fragment",
        category: "combat",
        item: "Iron Fragment",
        drops: ["Iron Fragment"],
        tiers: Ym
      }],
      tm = (new Map(wm.map((TT => [TT.id, TT]))), new Map),
      am = new Map;
    for (const LH of wm) {
      for (const [TT, UT] of Object.entries(null !== (ym = LH.blocks) && void 0 !== ym ? ym : {})) {
        var ym;
        tm.set(TT, {
          collection: LH,
          amount: UT
        })
      }
      for (const TT of null !== (Xm = LH.drops) && void 0 !== Xm ? Xm : []) {
        var Xm;
        am.set(TT, LH)
      }
    }

    function Im(TT, UT) {
      let mT = 0;
      for (; mT < TT.tiers.length && UT >= TT.tiers[mT].amount;) mT++;
      return mT
    }
    const Qm = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    function sm(TT) {
      return Qm[TT - 1]
    }
    const Fm = "skyblockCollectionsView";
    class Pm extends lT {
      constructor(TT, UT) {
        let mT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "en-GB",
          WT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : TT => TT;
        super(TT, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {}), this.translate = UT, this.locale = mT, this.itemName = WT, this.counts = null, this.category = "mining", this.selected = wm[0].id, this.snapshot = {
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
      setTranslator(TT, UT, mT) {
        this.translate = TT, this.locale = UT, this.itemName = mT, this.emit()
      }
      pB(TT) {
        if (!this.kB)
          if ("collOpen" !== TT.kind) {
            (TT.collFull || null === this.counts) && (this.counts = new Map);
            for (const [UT, mT] of TT.collCounts) this.counts.set(UT, mT);
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
        const UT = this.inCategory(this.category).map((TT => this.collectionView(TT))),
          mT = wm.reduce(((TT, UT) => TT + this.tierOf(UT)), 0);
        return {
          enabled: !0,
          open: this.open,
          categories: cm.map((TT => this.categoryView(TT))),
          collections: UT,
          detail: null !== (TT = UT.find((TT => TT.selected))) && void 0 !== TT ? TT : null,
          tiersUnlocked: this.translate("skyblockGame:collectionTiersUnlocked", {
            count: this.number(mT)
          })
        }
      }
      categoryView(TT) {
        const UT = this.inCategory(TT),
          mT = UT.reduce(((TT, UT) => TT + this.tierOf(UT)), 0),
          WT = UT.reduce(((TT, UT) => TT + UT.tiers.length), 0);
        return {
          id: TT,
          label: this.translate(`skyblockGame:${TT}`),
          icon: fU[TT],
          tiers: this.translate("skyblockGame:collectionProgress", {
            current: this.number(mT),
            target: this.number(WT)
          }),
          selected: TT === this.category
        }
      }
      collectionView(TT) {
        var UT, mT;
        const WT = null !== (UT = this.counts.get(TT.id)) && void 0 !== UT ? UT : 0,
          zT = Im(TT, WT),
          MT = null !== (mT = TT.tiers[zT]) && void 0 !== mT ? mT : null,
          gT = 0 === zT ? 0 : TT.tiers[zT - 1].amount;
        return {
          id: TT.id,
          name: this.itemName(TT.item),
          icon: TT.item,
          selected: TT.id === this.selected,
          locked: 0 === WT,
          count: this.translate("skyblockGame:collectionCount", {
            count: this.number(WT)
          }),
          tier: 0 === zT ? this.translate("skyblockGame:collectionNoTier") : this.tierLabel(zT),
          percent: null === MT ? 100 : Math.min(100, (WT - gT) / (MT.amount - gT) * 100),
          progress: null === MT ? this.translate("skyblockGame:max") : this.translate("skyblockGame:collectionProgress", {
            current: this.number(WT),
            target: this.number(MT.amount)
          }),
          nextReward: null === MT ? null : this.reward(TT, MT.coins, MT.xp)
        }
      }
      reward(TT, UT, mT) {
        return this.translate("skyblockGame:collectionReward", {
          coins: this.number(UT),
          xp: this.number(mT),
          skill: this.translate(`skyblockGame:${TT.category}`)
        })
      }
      tierLabel(TT) {
        return this.translate("skyblockGame:collectionTier", {
          tier: sm(TT)
        })
      }
      tierOf(TT) {
        var UT;
        return Im(TT, null !== (UT = this.counts.get(TT.id)) && void 0 !== UT ? UT : 0)
      }
      inCategory(TT) {
        return wm.filter((UT => UT.category === TT))
      }
      number(TT) {
        return TT.toLocaleString(this.locale)
      }
    }
    const Vm = "skyblockPortalTransitView",
      um = "skyblockPortalArrival";
    class Cm {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now;
        this.EZ = TT, this.storage = UT, this.now = mT, this.view = null, this.token = 0, this.hideTimer = null
      }
      getSnapshot() {
        return this.view
      }
      pB(TT) {
        const UT = {
          zoneNameKey: TT.transitZoneNameKey,
          variation: TT.transitZoneVariation,
          colour: TT.transitColour,
          departedAt: this.now()
        };
        this.storage.setItem(um, UT), this.show("departure", UT.zoneNameKey, UT.colour, TT.transitDurationMs, TT.transitDurationMs + 1500, (() => {
          this.storage.removeItem(um)
        }))
      }
      resumeArrival(TT) {
        const UT = this.storage.getItem(um);
        this.storage.removeItem(um), null === UT || UT.variation !== TT || this.now() - UT.departedAt > 3e4 || this.show("arrival", UT.zoneNameKey, UT.colour, 3200, 2e4)
      }
      finishArrival(TT) {
        var UT;
        "arrival" === (null === (UT = this.view) || void 0 === UT ? void 0 : UT.phase) && this.view.token === TT && (this.clearTimer(), this.view = null, this.EZ(null))
      }
      dispose() {
        this.clearTimer()
      }
      show(TT, UT, mT, WT, zT, MT) {
        this.clearTimer(), this.view = {
          token: ++this.token,
          phase: TT,
          zoneNameKey: UT,
          colour: mT,
          durationMs: WT
        }, this.EZ(this.view), this.hideTimer = setTimeout((() => {
          this.hideTimer = null, this.view = null, this.EZ(null), null === MT || void 0 === MT || MT()
        }), zT)
      }
      clearTimer() {
        null !== this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null)
      }
    }
    const rm = "skyblockDailyRewardView",
      Km = "skyblockDailyRewardCoin";
    class Sm {
      constructor(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => {},
          nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : () => {},
          HT = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : performance.now.bind(performance);
        this.EZ = TT, this.isBusy = UT, this.holdQuestPopups = mT, this.onHeldCoinsChanged = WT, this.onCoinLanded = zT, this.onStarted = MT, this.onFinished = gT, this.onItemLanded = nT, this.now = HT, this.fn = [], this.queue = [], this.playing = null, this.token = 0
      }
      getSnapshot() {
        var TT, UT;
        return null !== (TT = null === (UT = this.playing) || void 0 === UT ? void 0 : UT.view) && void 0 !== TT ? TT : null
      }
      getHeldCoins() {
        var TT, UT;
        let mT = 0;
        for (const WT of this.fn) mT += WT.coins;
        return mT - (null !== (TT = null === (UT = this.playing) || void 0 === UT ? void 0 : UT.released) && void 0 !== TT ? TT : 0)
      }
      pB(TT) {
        "dailyRewardClaimed" !== TT.kind ? (this.queue.push(TT), this.Cl()) : this.fn.push({
          coins: TT.dailyRewardCoins,
          receivedAt: this.now()
        })
      }
      Cl() {
        const TT = this.now();
        if (null === this.playing) return this.releaseUnshown(TT), void this.startNext(TT);
        const UT = this.playing,
          mT = TT - UT.startedAt,
          WT = UT.view.flyingCoins,
          zT = function(TT, UT) {
            let mT = 0;
            for (; mT < UT && Nm(mT, UT) <= TT;) mT++;
            return mT
          }(mT, WT);
        if (zT !== UT.landed) {
          for (let TT = zT - UT.landed > 2 ? zT - 1 : UT.landed; TT < zT; TT++) this.onCoinLanded(TT, WT);
          UT.landed = zT, UT.released = Math.round(UT.view.coins * zT / WT), this.onHeldCoinsChanged()
        }
        for (; UT.itemsLanded < UT.view.items.length && 2e3 + 160 * UT.itemsLanded + 630 <= mT;) this.onItemLanded(UT.itemsLanded), UT.itemsLanded++;
        mT >= UT.view.durationMs && (this.finish(), this.startNext(TT))
      }
      dispose() {
        null !== this.playing && this.holdQuestPopups(!1), this.playing = null, this.queue = [], this.fn = [], this.EZ(null)
      }
      startNext(TT) {
        if (0 === this.queue.length || this.isBusy()) return;
        const UT = this.queue.shift();
        this.token++;
        const mT = {
          token: this.token,
          day: UT.dailyRewardDay,
          coins: UT.dailyRewardCoins,
          items: UT.dailyRewardItems,
          durationMs: 5e3,
          flyingCoins: UT.dailyRewardDay === dT ? 24 : 14
        };
        this.playing = {
          view: mT,
          startedAt: TT,
          landed: 0,
          released: 0,
          itemsLanded: 0
        }, this.holdQuestPopups(!0), this.EZ(mT), this.onStarted(mT)
      }
      finish() {
        this.fn.shift(), this.playing = null, this.holdQuestPopups(!1), this.EZ(null), this.onHeldCoinsChanged(), this.onFinished()
      }
      releaseUnshown(TT) {
        if (this.queue.length > 0 || 0 === this.fn.length) return;
        const UT = this.fn.length;
        this.fn = this.fn.filter((UT => TT - UT.receivedAt < 6e4)), this.fn.length !== UT && this.onHeldCoinsChanged()
      }
    }

    function Gm(TT, UT) {
      return 450 + 715 * TT / (UT - 1)
    }

    function Nm(TT, UT) {
      return Gm(TT, UT) + 650
    }
    const Em = "skyblockMailboxView";
    class hm {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : performance.now.bind(performance);
        this.EZ = TT, this.isBusy = UT, this.onStarted = mT, this.now = WT, this.waiting = [], this.playing = null, this.token = 0, this.itemName = TT => TT
      }
      getSnapshot() {
        var TT, UT;
        return null !== (TT = null === (UT = this.playing) || void 0 === UT ? void 0 : UT.view) && void 0 !== TT ? TT : null
      }
      setItemName(TT) {
        this.itemName = TT
      }
      pB(TT) {
        this.waiting.push(...TT.mailLetters), this.Cl()
      }
      Cl() {
        const TT = this.now();
        null !== this.playing && TT - this.playing.startedAt >= this.playing.view.durationMs && (this.playing = null, this.EZ(null)), null === this.playing && this.waiting.length > 0 && !this.isBusy() && this.start(TT)
      }
      dispose() {
        this.playing = null, this.waiting = [], this.EZ(null)
      }
      start(TT) {
        const UT = this.waiting.slice(0, 3);
        this.token++;
        const mT = {
          token: this.token,
          letters: UT.map((TT => this.toView(TT))),
          more: this.waiting.length - UT.length,
          durationMs: 4500 + 700 * UT.length
        };
        this.waiting = [], this.playing = {
          view: mT,
          startedAt: TT
        }, this.EZ(mT), this.onStarted(mT)
      }
      toView(TT) {
        return {
          coins: TT.mailCoins,
          items: TT.mailItems.map((TT => {
            var UT;
            return {
              itemName: TT.mailItemName,
              amount: TT.mailItemAmount,
              label: null !== (UT = TT.mailItemLabel) && void 0 !== UT ? UT : this.itemName(TT.mailItemName)
            }
          })),
          reasonKey: TT.mailReasonKey,
          reasonParams: TT.mailReasonParams
        }
      }
    }
    const Dm = "skyblockQuestGraphView",
      om = "skyblockDevQuestJump";

    function Am(TT) {
      if (0 === TT.length) return "";
      const UT = [`M ${TT[0].x} ${TT[0].y}`];
      for (let WT = 1; WT < TT.length - 1; WT++) {
        const mT = TT[WT + 1];
        UT.push(`Q ${TT[WT].x} ${TT[WT].y} ${(TT[WT].x+mT.x)/2} ${(TT[WT].y+mT.y)/2}`)
      }
      const mT = TT[TT.length - 1];
      return UT.push(`L ${mT.x} ${mT.y}`), UT.join(" ")
    }

    function Rm(TT, UT) {
      return TT < UT ? `${TT}|${UT}` : `${UT}|${TT}`
    }
    class TW extends lT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {},
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {},
          zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
          MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => {},
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {
            getItem: () => null,
            setItem: () => {},
            removeItem: () => {}
          },
          nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Date.now;
        super(TT, mT, WT), this.translate = UT, this.requestJump = zT, this.requestArrive = MT, this.storage = gT, this.now = nT, this.layout = null, this.hoveredId = null, this.graphCount = 0, this.snapshot = {
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
      pB(TT) {
        if (!this.kB)
          if ("graph" !== TT.kind) {
            if ("jumping" === TT.kind) {
              const UT = {
                questId: TT.graphQuestId,
                variation: TT.graphVariation,
                completes: TT.graphCompletesOnArrival,
                departedAt: this.now()
              };
              this.storage.setItem(om, UT)
            }
          } else {
            const UT = ++this.graphCount;
            mT.e(120).then((() => mT(6499))).then((mT => {
              let {
                default: WT
              } = mT;
              this.kB || UT !== this.graphCount || (this.layout = function(TT, UT, mT) {
                var WT, zT;
                const MT = new TT.graphlib.Graph;
                MT.setGraph({
                  rankdir: "LR",
                  ranksep: 70,
                  nodesep: 14,
                  marginx: 24,
                  marginy: 24
                }), MT.setDefaultEdgeLabel((() => ({})));
                const gT = new Set;
                for (const jT of UT) gT.add(jT.graphQuestId), MT.setNode(jT.graphQuestId, {
                  width: 190,
                  height: 52
                });
                const nT = mT.filter((TT => gT.has(TT.graphFromId) && gT.has(TT.graphToId) && TT.graphFromId !== TT.graphToId)),
                  HT = new Map;
                for (const jT of [...nT].sort(((TT, UT) => Number("awaits" === TT.graphEdgeKind) - Number("awaits" === UT.graphEdgeKind)))) {
                  const TT = Rm(jT.graphFromId, jT.graphToId);
                  HT.has(TT) || (HT.set(TT, jT), MT.setEdge(jT.graphFromId, jT.graphToId))
                }
                TT.layout(MT);
                const kT = MT.graph();
                return {
                  width: Math.ceil(null !== (WT = kT.width) && void 0 !== WT ? WT : 0),
                  height: Math.ceil(null !== (zT = kT.height) && void 0 !== zT ? zT : 0),
                  nodes: UT.map((TT => {
                    var UT, mT;
                    const WT = MT.node(TT.graphQuestId);
                    return {
                      node: TT,
                      left: (null !== (UT = WT.x) && void 0 !== UT ? UT : 0) - 95,
                      top: (null !== (mT = WT.y) && void 0 !== mT ? mT : 0) - 26
                    }
                  })),
                  edges: nT.map((TT => {
                    var UT;
                    const mT = HT.get(Rm(TT.graphFromId, TT.graphToId)),
                      WT = null !== (UT = MT.edge(mT.graphFromId, mT.graphToId).points) && void 0 !== UT ? UT : [];
                    return {
                      edge: TT,
                      key: `${TT.graphFromId}|${TT.graphToId}|${TT.graphEdgeKind}`,
                      path: Am(mT.graphFromId === TT.graphFromId ? WT : [...WT].reverse())
                    }
                  })),
                  plans: new Map(UT.map((TT => [TT.graphQuestId, new Set([TT.graphQuestId, ...TT.graphPlanIds])])))
                }
              }(WT, TT.graphNodes, TT.graphEdges), this.show())
            })).catch((TT => {
              console.error("The quest graph could not be laid out", TT)
            }))
          }
      }
      resumeJump(TT) {
        const UT = this.storage.getItem(om);
        this.storage.removeItem(om), null === UT || UT.variation !== TT || this.now() - UT.departedAt > 6e4 || this.requestArrive(UT.questId, UT.completes)
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
        var TT, UT;
        return null !== (TT = null === this.hoveredId || null === (UT = this.layout) || void 0 === UT ? void 0 : UT.plans.get(this.hoveredId)) && void 0 !== TT ? TT : new Set
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
        const UT = this.getPlan();
        return {
          enabled: !0,
          open: this.open,
          width: TT.width,
          height: TT.height,
          nodes: TT.nodes.map((TT => {
            let {
              node: mT,
              left: WT,
              top: zT
            } = TT;
            return {
              id: mT.graphQuestId,
              name: this.translate(mT.graphNameKey),
              detail: null === mT.graphGiverName ? mT.graphZoneId : `${mT.graphGiverName} \xb7 ${mT.graphZoneId}`,
              state: mT.graphState,
              left: WT,
              top: zT,
              inPlan: UT.has(mT.graphQuestId),
              hovered: mT.graphQuestId === this.hoveredId
            }
          })),
          edges: TT.edges.map((TT => {
            let {
              edge: mT,
              key: WT,
              path: zT
            } = TT;
            return {
              key: WT,
              kind: mT.graphEdgeKind,
              path: zT,
              inPlan: UT.has(mT.graphFromId) && UT.has(mT.graphToId)
            }
          })),
          planning: UT.size > 0
        }
      }
    }
    var UW = mT(37156);
    const mW = 250,
      WW = 2150,
      zW = -2.8,
      MW = 2.2,
      gW = -27,
      nW = {
        zeta: .34,
        period: .7,
        lead: .1,
        rush: .04
      },
      HW = {
        zeta: .45,
        period: .55,
        delay: .12,
        to: 1.25
      },
      kW = Math.round(50 + 1e3 * (HW.delay + HW.period / 2)),
      jW = "\u16a0\u16a2\u16a6\u16a8\u16b1\u16b2\u16b7\u16b9\u16ba\u16be\u16c1\u16c3\u16c7\u16c8\u16c9\u16ca\u16cf\u16d2\u16d6\u16d7\u16da\u16dc\u16de\u16df",
      lW = Array.from({
        length: 26
      }, ((TT, UT) => {
        const mT = 2.39996 * UT,
          WT = .5 + .618034 * UT % 1 * .23,
          zT = UT % 3 !== 2;
        return {
          rune: zT ? jW[7 * UT % 24] : "",
          style: {
            "--from-x": `calc(var(--sword-size) * ${(Math.cos(mT)*WT).toFixed(3)})`,
            "--from-y": `calc(var(--sword-size) * ${(Math.sin(mT)*WT).toFixed(3)})`,
            "--spin": 40 * (UT % 5 - 2) + "deg",
            "--size": (zT ? 1 + UT % 4 * .2 : .3 + UT % 2 * .15) + "rem",
            "--duration": `${(1.8+7*UT%5*.35).toFixed(2)}s`,
            "--delay": `${(-.83*UT%3).toFixed(2)}s`
          }
        }
      }));

    function LW(TT, UT) {
      return Array.from({
        length: 30 + 3 * TT + (UT ? 10 : 0)
      }, ((TT, UT) => {
        const mT = UT < 4,
          WT = mT ? "#fff" : Math.random() < .25 ? "#ff922b" : "#ffe08a",
          zT = mT ? 7 + 3 * Math.random() : 3.5 + 5 * Math.random(),
          MT = mT ? 2.2 : .6 + Math.random(),
          gT = mT ? .3 : Math.random() < .5 ? .16 : .24,
          nT = mT ? 600 + 100 * Math.random() : 280 + 280 * Math.random();
        return {
          "--c": WT,
          "--angle": `${Math.round(220*(Math.random()-.5)+15)}deg`,
          "--distance": `${zT.toFixed(2)}rem`,
          "--length": `${MT.toFixed(2)}rem`,
          "--width": `${gT}rem`,
          "--duration": `${Math.round(nT)}ms`,
          "--delay": `${Math.round(40*Math.random())}ms`,
          "--fall": `${(1+Math.random()).toFixed(2)}rem`
        }
      }))
    }

    function pW(TT) {
      let {
        zeta: UT,
        period: mT
      } = TT;
      const WT = 2 * Math.PI / mT;
      return {
        w: WT,
        decay: UT * WT / Math.sqrt(1 - UT * UT)
      }
    }
    let BW = !1;

    function ZW() {
      if (BW) return;
      BW = !0;
      const TT = document.createElement("style");
      TT.textContent = function() {
        const TT = pW(nW),
          UT = pW(HW),
          mT = UT => Math.exp(-TT.decay * UT) * Math.sin(TT.w * UT),
          WT = mT(Math.atan(TT.w / TT.decay) / TT.w),
          zT = .25,
          MT = 2.15,
          gT = Math.round(215),
          nT = [];
        for (let HT = 0; HT <= gT; HT++) {
          const TT = HT / gT * MT;
          let kT = Math.sin(Math.min(TT, zT) / zT * Math.PI / 2) ** 2,
            jT = 0,
            lT = 1,
            LT = 1 - .2 * kT,
            pT = 1;
          if (TT >= zT) {
            const gT = TT - zT,
              nT = Math.max(0, gT - .05);
            kT = Math.exp(-nT / .05), jT = mT(nT + nW.lead * (1 - Math.exp(-nT / nW.rush))) / WT;
            const HT = nT - HW.delay,
              BT = HT <= 0 ? 0 : 1 - Math.exp(-UT.decay * HT) * (Math.cos(UT.w * HT) + UT.decay / UT.w * Math.sin(UT.w * HT)),
              ZT = Math.max(0, (TT - 1.77) / (MT - 1.77));
            lT = (1 + (HW.to - 1) * BT) * (1 + .08 * ZT), LT = 1.1 + 1.5 * Math.exp(-gT / .07) + .3 * Math.exp(-(((1e3 * gT - kW) / 100) ** 2)) + .8 * ZT, pT = 1 - ZT ** 1.5
          }
          const BT = .15 * kT + zW * jT,
            ZT = -.1 * kT + MW * jT,
            cT = 3 * kT + gW * jT;
          nT.push(`${(HT/gT*100).toFixed(3)}% { opacity: ${pT.toFixed(3)}; transform: translate(${BT.toFixed(3)}rem, ${ZT.toFixed(3)}rem) rotate(${cT.toFixed(2)}deg) scale(${lT.toFixed(3)}); filter: brightness(${LT.toFixed(2)}) drop-shadow(0 0 0.8rem color-mix(in srgb, var(--tier) 55%, transparent)); }`)
        }
        return `@keyframes SkyblockForgeSwordBurst { ${nT.join(" ")} }`
      }(), document.head.append(TT)
    }
    const cW = "skyblockForgeView",
      vW = {
        Blade: "skyblockGame:forgeSlotBlade",
        Guard: "skyblockGame:forgeSlotGuard",
        Handle: "skyblockGame:forgeSlotHandle"
      };
    class fW extends lT {
      constructor(TT, UT, mT, WT, zT) {
        super(TT, mT, WT), this.translate = UT, this.requestForge = zT, this.snapshot = void 0, this.owned = {}, this.coal = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.status = null, this.forging = null, this.forgeId = 0, this.arriving = null, this.selected = {
          Blade: null,
          Guard: null,
          Handle: null
        }, this.onForgeStarted = null, this.onPartSelected = null, this.onOpened = null, this.select = (TT, UT) => {
          var mT, WT;
          null !== this.forging || (null !== (mT = this.owned[(0, UW.n)(UT, TT)]) && void 0 !== mT ? mT : 0) <= 0 || (this.selected[TT] = this.selected[TT] === UT ? null : UT, this.status = null, null === (WT = this.onPartSelected) || void 0 === WT || WT.call(this), this.emit())
        }, this.forge = TT => {
          var UT, mT;
          const WT = this.selectedParts();
          if (null === WT || this.isPending() || !this.open) return;
          const zT = (0, UW.k)(WT);
          if (null === zT || zT.coalCost > this.coal) return;
          const MT = this.preview(zT),
            gT = null !== (UT = null === (mT = this.onForgeStarted) || void 0 === mT ? void 0 : mT.call(this, MT.tier, MT.named, TT)) && void 0 !== UT ? UT : () => {};
          if (this.dropArrival(), TT) {
            const TT = {
              id: ++this.forgeId,
              preview: MT,
              timers: [],
              stopSounds: gT,
              landed: !1,
              reply: null
            };
            TT.timers.push(setTimeout((() => {
              TT.landed = !0, null !== TT.reply && (this.apply(TT.reply), TT.reply = null, this.emit())
            }), mW), setTimeout((() => {
              this.finishForge(TT)
            }), WW)), this.forging = TT
          }
          this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestForge(WT)
        }, this.snapshot = this.buildSnapshot()
      }
      pB(TT) {
        var UT;
        if (this.received = !0, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.forgeMessageKind) return this.dropForge(), this.apply(TT), this.status = null, this.show(), void(null === (UT = this.onOpened) || void 0 === UT || UT.call(this));
        const mT = this.forging;
        if (null !== mT && null !== TT.forgeRefusalKey) this.dropForge();
        else if (null !== mT && !mT.landed) return void(mT.reply = TT);
        this.apply(TT), this.emit()
      }
      apply(TT) {
        if (this.owned = TT.forgeOwnedParts, this.coal = TT.forgeCoalOwned, this.keepSelectionOwned("open" === TT.forgeMessageKind), null !== TT.forgeForgedSwordId) {
          var UT;
          const mT = (0, UW.k)(TT.forgeForgedSwordId);
          this.status = {
            tone: "forged",
            key: "skyblockGame:forgeForged",
            params: {
              sword: null !== (UT = null === mT || void 0 === mT ? void 0 : mT.displayName) && void 0 !== UT ? UT : ""
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
        var UT;
        this.forging = null;
        const mT = this.selectedParts(),
          WT = setTimeout((() => {
            this.arriving = null, this.emit()
          }), 400);
        this.arriving = {
          id: TT.id,
          sameSword: null !== mT && (null === (UT = (0, UW.k)(mT)) || void 0 === UT ? void 0 : UT.displayName) === TT.preview.name,
          timer: WT
        }, this.emit()
      }
      dropForge() {
        const TT = this.forging;
        if (null !== TT) {
          this.forging = null;
          for (const UT of TT.timers) clearTimeout(UT);
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
        var TT, UT, mT;
        const WT = this.selectedParts(),
          zT = null === WT ? null : (0, UW.k)(WT),
          MT = null !== (TT = null === (UT = this.forging) || void 0 === UT ? void 0 : UT.preview) && void 0 !== TT ? TT : null === zT ? null : this.preview(zT);
        return {
          enabled: this.received,
          open: this.open,
          slots: UW.j.map((TT => ({
            kind: TT,
            label: this.translate(vW[TT]),
            parts: this.partsFor(TT)
          }))),
          coalOwned: this.coal,
          preview: MT,
          unformedSword: UW.h[null !== (mT = this.selected.Blade) && void 0 !== mT ? mT : "Iron"].baseSword,
          anyParts: Object.values(this.owned).some((TT => TT > 0)),
          canForge: null !== MT && !MT.coalShort && !this.isPending(),
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
        const UT = [];
        for (const WT of UW.e) {
          var mT;
          const zT = (0, UW.n)(WT, TT),
            MT = null !== (mT = this.owned[zT]) && void 0 !== mT ? mT : 0;
          MT > 0 && UT.push({
            material: WT,
            itemName: zT,
            owned: MT,
            selected: this.selected[TT] === WT,
            placeholder: !1
          })
        }
        if (0 === UT.length) {
          const mT = UW.e[0];
          UT.push({
            material: mT,
            itemName: (0, UW.n)(mT, TT),
            owned: 0,
            selected: !1,
            placeholder: !0
          })
        }
        return UT
      }
      stats(TT) {
        const UT = [{
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
        return TT.reachBonus > 0 && UT.push({
          label: this.translate("skyblockGame:forgeStatReach"),
          value: `+${TT.reachBonus.toFixed(1)}`,
          better: !0
        }), TT.damageReduction > 0 && UT.push({
          label: this.translate("skyblockGame:forgeStatDefence"),
          value: `${Math.round(100*TT.damageReduction)}%`,
          better: !0
        }), UT
      }
      selectedParts() {
        const {
          Blade: TT,
          Guard: UT,
          Handle: mT
        } = this.selected;
        return null === TT || null === UT || null === mT ? null : {
          blade: TT,
          guard: UT,
          handle: mT
        }
      }
      keepSelectionOwned(TT) {
        for (const mT of UW.j) {
          var UT;
          const WT = this.selected[mT];
          if (null !== WT && (null !== (UT = this.owned[(0, UW.n)(WT, mT)]) && void 0 !== UT ? UT : 0) > 0) continue;
          if (!TT) {
            this.selected[mT] = null;
            continue
          }
          const zT = [...UW.e].reverse().find((TT => {
            var UT;
            return (null !== (UT = this.owned[(0, UW.n)(TT, mT)]) && void 0 !== UT ? UT : 0) > 0
          }));
          this.selected[mT] = null !== zT && void 0 !== zT ? zT : null
        }
      }
      dispose() {
        this.received = !1, this.dropForge(), this.dropArrival(), this.clearReplyTimeout(), null !== this.pacing && (clearTimeout(this.pacing), this.pacing = null), super.dispose()
      }
    }
    const qW = "skyblockSmugglerView",
      iW = {
        "Red Firecracker Pebble": "skyblockGame:mortarStrike",
        "Purple Firecracker Pebble": "skyblockGame:interdimensionalStrike"
      };
    class bW extends lT {
      constructor(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, mT, WT), this.translate = UT, this.requestBuy = zT, this.now = MT, this.snapshot = void 0, this.day = 0, this.deals = [], this.rivets = 0, this.crests = 0, this.soldOut = new Set, this.rotatesAtMs = 0, this.received = !1, this.awaitingReply = !1, this.pacing = null, this.replyTimeout = null, this.countdown = null, this.status = null, this.boughtSlot = null, this.boughtCount = 0, this.itemName = TT => TT, this.onBought = null, this.buy = TT => {
          const UT = this.deals[TT];
          void 0 !== UT && !this.isPending() && this.open && !this.soldOut.has(TT) && this.canAfford(UT) && (this.awaitingReply = !0, this.pacing = setTimeout((() => {
            this.pacing = null, this.emit()
          }), 2500), this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestBuy(this.day, TT))
        }, this.snapshot = this.buildSnapshot()
      }
      pB(TT) {
        if (this.received = !0, this.day = TT.smugglerDay, this.deals = TT.smugglerDeals, this.rivets = TT.smugglerRivetsOwned, this.crests = TT.smugglerCrestsOwned, this.soldOut = new Set(TT.smugglerSoldOutSlots), this.rotatesAtMs = this.now() + TT.smugglerRotatesInMs, this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.smugglerMessageKind) return this.status = null, this.boughtSlot = null, this.show(), void this.startCountdown();
        if (this.boughtSlot = TT.smugglerBoughtSlot, null !== TT.smugglerBoughtSlot) {
          var UT, mT;
          const WT = this.deals[TT.smugglerBoughtSlot];
          this.status = {
            tone: "bought",
            key: "skyblockGame:smugglerBought",
            params: {
              item: void 0 === WT ? "" : this.dealName(WT),
              amount: String(null !== (UT = null === WT || void 0 === WT ? void 0 : WT.smugglerDealAmount) && void 0 !== UT ? UT : 0)
            }
          }, this.boughtCount++, null === (mT = this.onBought) || void 0 === mT || mT.call(this)
        } else null !== TT.smugglerRefusalKey && (this.status = {
          tone: "refused",
          key: TT.smugglerRefusalKey,
          params: {}
        });
        this.emit()
      }
      setTranslator(TT, UT, mT) {
        this.translate = TT, void 0 !== mT && (this.itemName = mT), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.status = null, this.boughtSlot = null, this.awaitingReply = !1, this.clearReplyTimeout(), this.stopCountdown(), this.boughtCount = 0
      }
      dealName(TT) {
        if (null !== TT.smugglerDealUniqueName) return TT.smugglerDealUniqueName;
        const UT = iW[TT.smugglerDealItem];
        return void 0 === UT ? this.itemName(TT.smugglerDealItem) : this.translate(UT)
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
          deals: this.deals.map(((TT, UT) => ({
            slot: UT,
            itemName: TT.smugglerDealItem,
            displayName: this.dealName(TT),
            enchantmentTier: TT.smugglerDealEnchantmentTier,
            amount: TT.smugglerDealAmount,
            rivets: TT.smugglerDealRivets,
            crests: TT.smugglerDealCrests,
            affordable: this.canAfford(TT),
            soldOut: this.soldOut.has(UT),
            justBought: this.boughtSlot === UT
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
    const OW = "skyblockPassageView",
      eW = {
        new: "skyblockGame:passagePhaseNew",
        waxing: "skyblockGame:passagePhaseWaxing",
        full: "skyblockGame:passagePhaseFull",
        waning: "skyblockGame:passagePhaseWaning"
      };

    function YW(TT, UT) {
      return TT(eW[UT])
    }

    function JW(TT, UT, mT, WT) {
      const zT = Math.ceil((mT - WT) / 864e5),
        MT = YW(TT, UT);
      return zT > 1 ? TT("skyblockGame:passageNextDays", {
        phase: MT,
        days: String(zT)
      }) : TT("skyblockGame:passageNextSoon", {
        phase: MT
      })
    }
    class xW extends lT {
      constructor(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(TT, mT, WT), this.translate = UT, this.now = zT, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.itemName = TT => TT, this.toggle = () => {
          this.open ? this.dismiss() : this.show()
        }, this.snapshot = this.buildSnapshot()
      }
      pB(TT) {
        this.message = TT, this.receivedAtMs = this.now(), this.emit()
      }
      setTranslator(TT, UT, mT) {
        this.translate = TT, void 0 !== mT && (this.itemName = mT), this.emit()
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
          phaseName: YW(this.translate, TT.passagePhase),
          visitors: TT.passageVisitors.map((TT => this.describe(TT))),
          resting: this.describe(TT.passageResting),
          nextPhase: TT.passageNextPhase,
          next: JW(this.translate, TT.passageNextPhase, TT.passageTurnsInMs, this.now() - this.receivedAtMs)
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    var dW = mT(38693);
    const wW = "skyblockKeepersChairView";
    class tW extends lT {
      constructor(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now,
          gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new dW.d;
        super(TT, mT, WT), this.translate = UT, this.requestAim = zT, this.now = MT, this.pacer = gT, this.snapshot = void 0, this.islands = [], this.favoured = null, this.received = !1, this.awaitingReply = !1, this.unsubscribePacer = void 0, this.replyTimeout = null, this.status = null, this.aimedCount = 0, this.passage = null, this.passageReceivedAtMs = 0, this.atChair = !0, this.itemName = TT => TT, this.aim = TT => {
          !this.awaitingReply && this.open && this.atChair && TT !== this.favoured && (null === TT || this.islands.some((UT => UT.keepersChairIslandId === TT && UT.keepersChairIslandRelit))) && this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestAim(null !== TT && void 0 !== TT ? TT : "none"))
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = gT.subscribe((() => {
          this.emit()
        }))
      }
      pB(TT) {
        var UT, mT;
        this.received = !0;
        const WT = this.favoured,
          zT = this.atChair;
        var MT;
        return this.islands = TT.keepersChairIslands, this.favoured = TT.keepersChairFavoured, this.passage = null !== (UT = TT.keepersChairPassage) && void 0 !== UT ? UT : null, this.passageReceivedAtMs = this.now(), this.atChair = null === (mT = TT.keepersChairAtChair) || void 0 === mT || mT, "place" === TT.keepersChairMessageKind ? (!zT && this.atChair && "refused" === (null === (MT = this.status) || void 0 === MT ? void 0 : MT.tone) && (this.status = null), void this.emit()) : (this.awaitingReply = !1, this.clearReplyTimeout(), "open" === TT.keepersChairMessageKind ? (this.status = null, void this.show()) : void(this.open ? (null !== TT.keepersChairRefusalKey ? this.status = {
          tone: "refused",
          key: TT.keepersChairRefusalKey,
          island: null
        } : this.favoured !== WT && (this.status = null === this.favoured ? {
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
      setTranslator(TT, UT, mT) {
        this.translate = TT, void 0 !== mT && (this.itemName = mT), this.emit()
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
        const UT = this.islands.find((UT => UT.keepersChairIslandId === TT));
        return void 0 === UT ? TT : this.translate(UT.keepersChairIslandNameKey)
      }
      buildSnapshot() {
        const TT = this.atChair ? this.status : {
            tone: "refused",
            key: "skyblockGame:keepersChairTooFar",
            island: null
          },
          UT = this.passage;
        return {
          enabled: this.received,
          open: this.open,
          islands: this.islands.map((TT => {
            const UT = TT.keepersChairFeaturedFish;
            return {
              id: TT.keepersChairIslandId,
              name: this.translate(TT.keepersChairIslandNameKey),
              relit: TT.keepersChairIslandRelit,
              featuredFish: null === UT ? null : {
                itemName: UT,
                displayName: this.itemName(UT)
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
          almanac: null === UT ? null : {
            phase: UT.keepersChairPassagePhase,
            phaseName: YW(this.translate, UT.keepersChairPassagePhase),
            nextPhase: UT.keepersChairPassageNextPhase,
            next: JW(this.translate, UT.keepersChairPassageNextPhase, UT.keepersChairPassageTurnsInMs, this.now() - this.passageReceivedAtMs)
          }
        }
      }
      dispose() {
        this.received = !1, this.passage = null, this.atChair = !0, this.clearReplyTimeout(), this.unsubscribePacer(), super.dispose()
      }
    }
    const aW = "skyblockReachLogView",
      yW = ["skyblockGame:reachLogBronze", "skyblockGame:reachLogSilver", "skyblockGame:reachLogGold"],
      XW = "Caught Fish",
      IW = [1, 2, 4];

    function QW(TT, UT) {
      return TT.map((TT => ({
        ...TT,
        reachLogPageFish: TT.reachLogPageFish.map((TT => ({
          ...TT,
          reachLogFishFresh: UT(TT)
        })))
      })))
    }
    class sW extends lT {
      constructor(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : new dW.d;
        super(TT, mT, WT), this.translate = UT, this.requestOpen = zT, this.pacer = MT, this.snapshot = void 0, this.pages = [], this.pagesCurrent = !1, this.serverFresh = 0, this.passagePhase = null, this.heldFresh = new Set, this.shown = !1, this.received = !1, this.selected = null, this.letGoShown = !1, this.awaitingReply = !1, this.replyTimeout = null, this.newsToken = 0, this.news = !1, this.pageViews = null, this.newsTimeout = null, this.unsubscribePacer = void 0, this.itemName = TT => TT, this.ask = () => {
          !this.received || this.open || this.awaitingReply || (this.pagesCurrent && 0 === this.serverFresh ? this.showPages() : this.pacer.tryStart() && (this.awaitingReply = !0, this.replyTimeout = setTimeout((() => {
            this.replyTimeout = null, this.awaitingReply = !1, this.emit()
          }), 8e3), this.emit(), this.requestOpen()))
        }, this.selectPage = TT => {
          this.pages.some((UT => UT.reachLogIslandId === TT)) && (this.selected = TT, this.emit())
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = MT.subscribe((() => {
          this.emit()
        }))
      }
      pB(TT) {
        if (this.received = !0, "status" === TT.reachLogMessageKind) return !0 === TT.reachLogNews && this.markNews(), this.serverFresh = TT.reachLogFreshCount, this.pagesCurrent = !1, void this.emit();
        const UT = this.awaitingReply;
        if (this.awaitingReply = !1, this.clearReplyTimeout(), "unavailable" !== TT.reachLogMessageKind)
          if (this.pageViews = null, this.pages = QW(TT.reachLogPages, (TT => TT.reachLogFishFresh || this.heldFresh.has(TT.reachLogFishItem))), this.letGoShown = TT.reachLogLetGoRibbonShown, this.pagesCurrent = !0, this.serverFresh = 0, UT) this.showPages();
          else {
            for (const TT of this.pages)
              for (const UT of TT.reachLogPageFish) UT.reachLogFishFresh && this.heldFresh.add(UT.reachLogFishItem);
            this.emit()
          }
        else this.emit()
      }
      setTranslator(TT, UT, mT) {
        this.translate = TT, this.pageViews = null, void 0 !== mT && (this.itemName = mT), this.emit()
      }
      isEnabled() {
        return this.received
      }
      onClosed() {
        this.shown && (this.shown = !1, this.pageViews = null, this.pages = QW(this.pages, (() => !1)))
      }
      showPages() {
        this.heldFresh.clear(), this.selected = this.pickPage(), this.show(), this.shown = this.isOpen()
      }
      pickPage() {
        var TT, UT, mT, WT;
        const zT = this.pages.find((TT => TT.reachLogPageFish.some((TT => TT.reachLogFishFresh))));
        if (void 0 !== zT) return zT.reachLogIslandId;
        if (null !== this.selected && this.pages.some((TT => TT.reachLogIslandId === this.selected))) return this.selected;
        return null !== (TT = null !== (UT = null === (mT = this.pages.filter((TT => TT.reachLogIslandAwake)).at(-1)) || void 0 === mT ? void 0 : mT.reachLogIslandId) && void 0 !== UT ? UT : null === (WT = this.pages[0]) || void 0 === WT ? void 0 : WT.reachLogIslandId) && void 0 !== TT ? TT : null
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
          var UT;
          return {
            id: TT.reachLogIslandId,
            name: this.translate(TT.reachLogIslandNameKey),
            awake: TT.reachLogIslandAwake,
            gold: TT.reachLogPageGold,
            caught: TT.reachLogPageFish.filter((TT => TT.reachLogFishCaught && !TT.reachLogFishVisitor)).length,
            total: TT.reachLogPageFish.filter((TT => !TT.reachLogFishVisitor)).length,
            fish: TT.reachLogPageFish.map((TT => {
              const UT = TT.reachLogFishBestKg;
              return {
                itemName: TT.reachLogFishItem,
                name: TT.reachLogFishCaught ? this.itemName(TT.reachLogFishItem) : this.translate("skyblockGame:reachLogUnknownFish"),
                caught: TT.reachLogFishCaught,
                chance: this.translate("skyblockGame:reachLogChance", {
                  count: Math.max(1, Math.round(1 / TT.reachLogFishChance))
                }),
                best: TT.reachLogFishCaught ? null === UT ? this.translate("skyblockGame:reachLogNoSize") : this.translate("skyblockGame:reachLogBest", {
                  kg: UT.toFixed(1)
                }) : this.translate("skyblockGame:reachLogNotCaught"),
                marks: TT.reachLogFishMarks,
                ribbons: IW.map((UT => 0 !== (TT.reachLogFishRibbons & UT))),
                glimmer: 0 !== (8 & TT.reachLogFishRibbons),
                halo: 0 !== (32 & TT.reachLogFishRibbons),
                fresh: TT.reachLogFishFresh,
                visitor: TT.reachLogFishVisitor
              }
            })),
            returner: this.buildReturner(null !== (UT = TT.reachLogPageReturner) && void 0 !== UT ? UT : null)
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
    const FW = "skyblockLampLightView";
    class PW {
      constructor(TT, UT, mT, WT) {
        this.EZ = TT, this.translate = UT, this.requestCommand = mT, this.pacer = WT, this.snapshot = void 0, this.message = null, this.shop = null, this.situation = "open", this.awaitingTag = null, this.awaitingOff = !1, this.offQueued = !1, this.offTag = null, this.lastTag = 0, this.replyTimeout = null, this.offTimeout = null, this.refusalKey = null, this.gainedCount = 0, this.lastGained = 0, this.atChair = !0, this.sparkle = null, this.locale = "en", this.kB = !1, this.unsubscribePacer = void 0, this.removePriority = void 0, this.getSnapshot = () => this.snapshot, this.setRelease = TT => {
          TT ? this.send("release on") : this.awaitingOff || (this.awaitingOff = !0, this.offQueued = !0, this.sendQueuedOff(), this.emit())
        }, this.buy = TT => {
          this.send(`buy ${TT}`)
        }, this.socket = TT => {
          this.send(`socket ${null!==TT&&void 0!==TT?TT:QT}`)
        }, this.wearTint = TT => {
          this.send(`tint ${null!==TT&&void 0!==TT?TT:QT}`)
        }, this.setSituation = TT => {
          this.situation = TT, this.emit()
        }, this.snapshot = this.buildSnapshot(), this.unsubscribePacer = WT.subscribe((() => {
          this.sendQueuedOff(), this.emit()
        })), this.removePriority = WT.addPriority({
          waiting: () => this.offQueued,
          flush: () => {
            this.sendQueuedOff()
          }
        })
      }
      pB(TT) {
        if (this.message = TT, null !== TT.lampLightShop && (this.shop = TT.lampLightShop), "open" === TT.lampLightKind && (this.refusalKey = null), "reply" === TT.lampLightKind) {
          var UT;
          const zT = null !== (UT = TT.lampLightReplyTag) && void 0 !== UT ? UT : null,
            MT = null !== zT && zT === this.offTag;
          var mT, WT;
          if (MT ? this.settleOff() : null !== zT && zT !== this.awaitingTag || this.settleReply(), this.refusalKey = TT.lampLightRefusalKey, null !== TT.lampLightBought && !MT) this.sparkle = {
            id: TT.lampLightBought,
            count: (null !== (mT = null === (WT = this.sparkle) || void 0 === WT ? void 0 : WT.count) && void 0 !== mT ? mT : 0) + 1
          }
        }
        TT.lampLightReleasing || (this.settleOff(), this.gainedCount = 0), "released" === TT.lampLightKind && (this.lastGained = TT.lampLightGained, this.gainedCount++), this.emit()
      }
      setAtChair(TT) {
        TT !== this.atChair && (this.atChair = TT, TT && (this.refusalKey = null), this.emit())
      }
      setTranslator(TT, UT) {
        this.translate = TT, this.locale = null !== UT && void 0 !== UT ? UT : this.locale, this.emit()
      }
      onChairClosed() {
        this.refusalKey = null, this.emit()
      }
      dispose() {
        this.clearReplyTimeout(), this.settleOff(), this.unsubscribePacer(), this.removePriority(), this.message = null, this.shop = null, this.emit(), this.kB = !0
      }
      send(TT) {
        var UT;
        if (null !== this.awaitingTag || "ready" !== (null === (UT = this.message) || void 0 === UT ? void 0 : UT.lampLightStatus) || !this.atChair) return;
        if (this.sendQueuedOff(), this.offQueued || !this.pacer.tryStart()) return;
        const mT = this.nextTag();
        this.awaitingTag = mT, this.replyTimeout = setTimeout((() => {
          this.replyTimeout = null, this.awaitingTag = null, this.emit()
        }), 8e3), this.requestCommand(`lamplight-${TT} ${mT}`), this.emit()
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
        this.kB || (this.snapshot = this.buildSnapshot(), this.EZ(this.snapshot))
      }
      formatLight(TT) {
        return Math.floor(TT).toLocaleString(this.locale)
      }
      formatPercent(TT) {
        const UT = 100 * TT;
        return UT >= 10 ? Math.round(UT).toLocaleString(this.locale) : UT.toLocaleString(this.locale, {
          maximumFractionDigits: 1
        })
      }
      formatOdds(TT, UT) {
        if ("bite" === TT) return this.translate("skyblockGame:lampLightBite", {
          seconds: (UT.lampLightBiteMs / 1e3).toLocaleString(this.locale, {
            maximumFractionDigits: 1
          })
        });
        if ("rare" === TT) return this.translate("skyblockGame:lampLightRare", {
          percent: this.formatPercent(UT.lampLightRareChance)
        });
        if ("notice" === TT) return null === UT.lampLightNoticeChance ? null : this.translate("skyblockGame:lampLightNotice", {
          percent: this.formatPercent(UT.lampLightNoticeChance)
        });
        const mT = "meter" === TT ? UT.lampLightMeterCatches : UT.lampLightBloomCatches;
        return null === mT ? null : this.translate("meter" === TT ? "skyblockGame:lampLightMeter" : "skyblockGame:lampLightBloomLasts", {
          catches: String(Math.round(mT))
        })
      }
      oddsLines(TT, UT) {
        const mT = (TT, UT) => {
            var mT;
            return null !== (mT = {
              bite: UT.lampLightBiteMs,
              rare: UT.lampLightRareChance,
              meter: UT.lampLightMeterCatches,
              bloom: UT.lampLightBloomCatches,
              notice: UT.lampLightNoticeChance
            } [TT]) && void 0 !== mT ? mT : 0
          },
          WT = {
            bite: !0,
            rare: !1,
            meter: !0,
            bloom: !1,
            notice: !1
          },
          zT = [];
        for (const MT of ["bite", "rare", "meter", "bloom", "notice"]) {
          const gT = this.formatOdds(MT, TT),
            nT = this.formatOdds(MT, UT);
          if (null === gT || null === nT || "bite" !== MT && "rare" !== MT && gT === nT) continue;
          const HT = mT(MT, UT) - mT(MT, TT),
            kT = WT[MT] ? HT < 0 : HT > 0;
          zT.push({
            label: MT,
            before: gT,
            after: nT,
            tone: gT === nT ? "same" : kT ? "better" : "worse"
          })
        }
        return zT
      }
      charmView(TT, UT, mT) {
        const WT = TT.lampLightCharmId.charAt(0).toUpperCase() + TT.lampLightCharmId.slice(1),
          zT = "bloom" === this.situation;
        return {
          id: TT.lampLightCharmId,
          name: this.translate(`skyblockGame:lampLightCharm${WT}`),
          effect: this.translate(`skyblockGame:lampLightCharm${WT}Effect`),
          cost: this.translate("skyblockGame:lampLightCost", {
            light: this.formatLight(TT.lampLightCharmCost)
          }),
          owned: TT.lampLightCharmOwned,
          affordable: mT >= TT.lampLightCharmCost,
          socketed: UT.lampLightSocketed === TT.lampLightCharmId,
          lines: this.oddsLines(zT ? UT.lampLightBareBloom : UT.lampLightBareOpen, zT ? TT.lampLightCharmBloom : TT.lampLightCharmOpen)
        }
      }
      buildSnapshot() {
        var TT, UT, mT, WT;
        const zT = this.message,
          MT = "ready" === (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) ? this.shop : null,
          gT = null !== (TT = null === zT || void 0 === zT ? void 0 : zT.lampLightBalance) && void 0 !== TT ? TT : 0,
          nT = this.atChair,
          HT = "loading" === (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) ? "skyblockGame:lampLightLoading" : "unreadable" === (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) ? "skyblockGame:lampLightUnreadable" : null,
          kT = "ready" !== (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) || nT ? null !== (UT = this.refusalKey) && void 0 !== UT ? UT : HT : "skyblockGame:lampLightTooFar";
        return {
          enabled: null !== zT && "locked" !== zT.lampLightStatus,
          status: null !== (mT = null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) && void 0 !== mT ? mT : "loading",
          balance: this.translate("skyblockGame:lampLightBalance", {
            light: this.formatLight(gT)
          }),
          releasing: null !== (WT = null === zT || void 0 === zT ? void 0 : zT.lampLightReleasing) && void 0 !== WT && WT,
          gained: null === zT || 0 === this.gainedCount ? null : {
            text: this.translate("skyblockGame:lampLightGained", {
              light: this.formatLight(this.lastGained)
            }),
            count: this.gainedCount
          },
          canCommand: "ready" === (null === zT || void 0 === zT ? void 0 : zT.lampLightStatus) && nT && !this.isPending(),
          situation: this.situation,
          shop: null === MT ? null : {
            oddsFor: this.translate("skyblockGame:lampLightOddsFor", {
              rod: MT.lampLightOddsRod,
              island: this.translate(MT.lampLightIslandNameKey)
            }),
            heldRod: null !== MT.lampLightHeldRod,
            charms: MT.lampLightCharms.map((TT => this.charmView(TT, MT, gT))),
            tints: MT.lampLightTints.map((TT => {
              const UT = TT.lampLightTintId,
                [mT, WT, zT] = TT.lampLightTintColour;
              return {
                id: UT,
                name: this.translate(`skyblockGame:lampLightTint${UT.charAt(0).toUpperCase()}${UT.slice(1)}`),
                cost: this.translate("skyblockGame:lampLightCost", {
                  light: this.formatLight(TT.lampLightTintCost)
                }),
                owned: TT.lampLightTintOwned,
                affordable: gT >= TT.lampLightTintCost,
                wearing: MT.lampLightTint === UT,
                colour: `rgb(${mT}, ${WT}, ${zT})`
              }
            })),
            wearingIslandColours: null === MT.lampLightTint
          },
          notice: null === kT ? null : this.translate(kT),
          sparkle: this.sparkle
        }
      }
    }
    const VW = "skyblockMagmawardView";
    class uW {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.EZ = TT, this.now = UT, this.snapshot = null, this.pulseToken = 0, this.pulseAt = -1 / 0, this.flareToken = 0, this.flareAt = -1 / 0, this.setLitToken = 0, this.setLitAt = -1 / 0, this.wornTokens = rT.map((() => 0)), this.wornAt = rT.map((() => -1 / 0))
      }
      getSnapshot() {
        return this.snapshot
      }
      pB(TT) {
        var UT, mT;
        const WT = rT.map(((UT, mT) => !0 === TT.magmawardPiecesWorn[mT]));
        if (!WT.includes(!0)) return this.snapshot = null, void this.EZ(null);
        const zT = this.now(),
          MT = this.snapshot;
        null === MT && (this.wornTokens.fill(0), this.wornAt.fill(-1 / 0), this.setLitAt = -1 / 0);
        const gT = TT.magmawardFuelCarried,
          nT = !WT.includes(!1);
        let HT = null !== (UT = null === MT || void 0 === MT ? void 0 : MT.pulse) && void 0 !== UT ? UT : null,
          kT = null !== (mT = null === MT || void 0 === MT ? void 0 : MT.flare) && void 0 !== mT ? mT : null;
        TT.magmawardFuelBurned ? (HT = "burn", kT = "burn", this.pulseToken++, this.flareToken++, this.pulseAt = zT, this.flareAt = zT) : null !== MT && gT > MT.fuel && (HT = "gain", this.pulseToken++, this.pulseAt = zT), nT && null !== MT && !MT.fullSet && (kT = "fullSet", this.flareToken++, this.setLitToken++, this.flareAt = zT, this.setLitAt = zT);
        const jT = rT.map(((TT, UT) => (WT[UT] && null !== MT && !MT.pieces[UT].worn && (this.wornTokens[UT]++, this.wornAt[UT] = zT), {
          itemName: TT,
          worn: WT[UT],
          wornToken: this.wornTokens[UT],
          justWorn: WT[UT] && this.isPlaying(this.wornAt[UT], zT)
        })));
        this.snapshot = {
          pieces: jT,
          wornCount: WT.filter(Boolean).length,
          fullSet: nT,
          fuel: gT,
          fuelState: gT <= 0 ? "empty" : gT <= 3 ? "low" : "ok",
          pulse: this.isPlaying(this.pulseAt, zT) ? HT : null,
          pulseToken: this.pulseToken,
          flare: this.isPlaying(this.flareAt, zT) ? kT : null,
          flareToken: this.flareToken,
          setLit: nT && this.isPlaying(this.setLitAt, zT),
          setLitToken: this.setLitToken
        }, this.EZ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.EZ(null)
      }
      isPlaying(TT, UT) {
        return UT - TT < 1200
      }
    }
    const CW = "skyblockGlowtideView";
    class rW {
      constructor(TT) {
        this.EZ = TT, this.bloom = null, this.snapshot = null, this.inRangeToken = 0, this.arrow = null, this.arrowTurn = NaN, this.mountArrow = TT => {
          this.arrow = TT, this.arrowTurn = NaN
        }
      }
      getSnapshot() {
        return this.snapshot
      }
      pB(TT) {
        this.bloom = TT.glowtideBloom, null === this.bloom && null !== this.snapshot && (this.snapshot = null, this.EZ(null))
      }
      afterRender(TT, UT) {
        const mT = this.bloom;
        if (null === mT || null === TT) return;
        const WT = mT.glowtideBloomX - TT[0],
          MT = mT.glowtideBloomZ - TT[2],
          gT = Math.hypot(WT, MT),
          nT = this.snapshot,
          HT = null !== nT && void 0 !== nT && nT.inRange ? 1 : 0,
          kT = gT <= 12.5 + HT && TT[1] - mT.glowtideBloomY <= 10 + HT;
        !kT || null !== nT && void 0 !== nT && nT.inRange || this.inRangeToken++;
        const jT = {
          colour: mT.glowtideBloomColour,
          inRange: kT,
          distance: Math.round(gT),
          inRangeToken: this.inRangeToken
        };
        (null === nT || jT.colour !== nT.colour || jT.inRange !== nT.inRange || !kT && jT.distance !== nT.distance) && (this.snapshot = jT, this.EZ(jT));
        const lT = zT.e.computeShortestRotation(UT, (0, zT.Nb)([WT, 0, MT]));
        null === this.arrow || Math.abs(lT - this.arrowTurn) < .01 || (this.arrow.style.transform = `rotate(${lT}rad)`, this.arrowTurn = lT)
      }
      dispose() {
        this.bloom = null, this.arrow = null, this.snapshot = null, this.EZ(null)
      }
    }
    const KW = "skyblockGlowMeterView";
    class SW {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now;
        this.EZ = TT, this.now = UT, this.snapshot = null, this.fullToken = 0, this.fullAt = -1 / 0, this.burstToken = 0, this.burstAt = -1 / 0, this.gainToken = 0, this.gainAt = -1 / 0
      }
      getSnapshot() {
        return this.snapshot
      }
      pB(TT) {
        const UT = this.now(),
          {
            glowMeterFill: mT,
            glowMeterCapacity: WT
          } = TT,
          zT = mT >= WT,
          MT = this.snapshot;
        null !== MT && (zT && !MT.full && (this.fullToken++, this.fullAt = UT), MT.full && !zT ? (this.burstToken++, this.burstAt = UT) : mT > MT.fill && (this.gainToken++, this.gainAt = UT)), this.snapshot = {
          fill: mT,
          fl: WT,
          ratio: Math.min(1, Math.max(0, mT / WT)),
          full: zT,
          rares: TT.glowMeterRares,
          ready: zT && this.isPlaying(this.fullAt, UT),
          fullToken: this.fullToken,
          burst: this.isPlaying(this.burstAt, UT),
          burstToken: this.burstToken,
          gained: this.isPlaying(this.gainAt, UT),
          gainToken: this.gainToken
        }, this.EZ(this.snapshot)
      }
      dispose() {
        this.snapshot = null, this.EZ(null)
      }
      isPlaying(TT, UT) {
        return UT - TT < 2e3
      }
    }
    const GW = "skyblockHushWaitView";
    class NW {
      constructor(TT) {
        this.EZ = TT, this.snapshot = null, this.token = 0, this.timers = []
      }
      getSnapshot() {
        return this.snapshot
      }
      pB(TT) {
        let {
          hushWaitMs: UT,
          hushWaitTotalMs: mT,
          hushWaitLines: WT
        } = TT;
        if (this.clearTimers(), this.token++, 0 === WT.length) return console.warn("Skyblock: a Hush wait message came without a line"), void this.show(null);
        if (UT <= 0) return this.show({
          token: this.token,
          phase: "abandoned",
          waitMs: 3500,
          elapsedMs: 0,
          line: WT[0],
          lineIndex: 0
        }), void this.later(3500, (() => {
          this.show(null)
        }));
        const zT = Math.max(null !== mT && void 0 !== mT ? mT : UT, UT),
          MT = zT - UT,
          gT = TT => zT * TT / WT.length,
          nT = TT => {
            this.show({
              token: this.token,
              phase: "waiting",
              waitMs: zT,
              elapsedMs: MT,
              line: WT[TT],
              lineIndex: TT
            })
          };
        let HT = 0;
        for (; HT + 1 < WT.length && gT(HT + 1) <= MT;) HT++;
        nT(HT);
        for (let kT = HT + 1; kT < WT.length; kT++) this.later(gT(kT) - MT, (() => {
          nT(kT)
        }));
        this.later(UT, (() => {
          this.show(null)
        }))
      }
      dispose() {
        this.clearTimers(), this.show(null)
      }
      show(TT) {
        this.snapshot = TT, this.EZ(TT)
      }
      later(TT, UT) {
        this.timers.push(setTimeout(UT, TT))
      }
      clearTimers() {
        for (const TT of this.timers) clearTimeout(TT);
        this.timers = []
      }
    }
    const EW = "skyblockTideChartsView",
      hW = 36e5,
      DW = 864e5;

    function oW(TT, UT, mT) {
      const [WT, zT, MT, gT] = TT.tideChartArea, nT = Math.floor(UT), HT = Math.floor(mT);
      return nT >= WT && nT <= MT && HT >= zT && HT <= gT
    }

    function AW(TT, UT, mT) {
      const [WT, zT, MT, gT] = TT.tideChartWater;
      return function(TT, UT, mT, WT, zT, MT) {
        const gT = 4 - KT(Math.floor(zT) - (TT - mT), mT);
        return 5 * KT(Math.floor(MT) - (UT - WT), WT) + gT
      }(WT, zT, MT, gT, UT, mT)
    }

    function RW(TT, UT, mT) {
      const WT = TT.tideCharts;
      for (let zT = 0; zT < WT.length; zT++)
        if (oW(WT[zT], UT, mT)) return WT[zT];
      return null
    }

    function Tz(TT, UT, mT) {
      const WT = Math.max(0, UT - mT);
      return WT > DW ? TT("skyblockGame:tideChartsTurnDays", {
        days: String(Math.ceil(WT / DW))
      }) : WT > hW ? TT("skyblockGame:tideChartsTurnHours", {
        hours: String(Math.ceil(WT / hW))
      }) : TT("skyblockGame:tideChartsTurnSoon")
    }
    class Uz extends lT {
      constructor(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now;
        super(TT, mT, WT), this.translate = UT, this.now = zT, this.snapshot = void 0, this.message = null, this.receivedAtMs = 0, this.hereIsland = null, this.hereCell = -1, this.lastX = Number.NaN, this.lastZ = Number.NaN, this.picked = null, this.lastIsland = null, this.pulse = {
          island: "",
          cells: 0,
          token: 0,
          atMs: 0
        }, this.cast = null, this.castToken = 0, this.turnsCheckedAtMs = 0, this.toggle = () => {
          this.open ? this.dismiss() : (this.picked = null, this.show())
        }, this.VL = TT => {
          this.picked = TT, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      pB(TT) {
        const UT = this.message;
        if (null !== UT)
          for (const WT of TT.tideCharts) {
            var mT;
            const TT = UT.tideCharts.find((TT => TT.tideChartIsland === WT.tideChartIsland)),
              zT = WT.tideChartLit & ~(null !== (mT = null === TT || void 0 === TT ? void 0 : TT.tideChartLit) && void 0 !== mT ? mT : 0);
            void 0 !== TT && 0 !== zT && (this.pulse = {
              island: WT.tideChartIsland,
              cells: zT,
              token: this.pulse.token + 1,
              atMs: this.now()
            })
          }
        this.message = TT, this.receivedAtMs = this.now(), this.locate(this.lastX, this.lastZ), this.emit()
      }
      locate(TT, UT) {
        var mT;
        const WT = null === this.message || Number.isNaN(TT) ? null : RW(this.message, TT, UT),
          zT = null !== (mT = null === WT || void 0 === WT ? void 0 : WT.tideChartIsland) && void 0 !== mT ? mT : null,
          MT = null === WT ? -1 : function(TT, UT, mT) {
            const [WT, zT, MT, gT] = TT.tideChartWater;
            return function(TT, UT, mT, WT, zT, MT, gT) {
              return ((zT - TT) / (mT + gT)) ** 2 + ((MT - UT) / (WT + gT)) ** 2 <= 1
            }(WT, zT, MT, gT, UT, mT, 2) ? AW(TT, UT, mT) : -1
          }(WT, TT, UT);
        return (zT !== this.hereIsland || MT !== this.hereCell) && (this.hereIsland = zT, this.hereCell = MT, null !== zT && (this.lastIsland = zT), !0)
      }
      afterRender(TT) {
        if (null === this.message) return;
        this.lastX = null === TT ? Number.NaN : TT[0], this.lastZ = null === TT ? Number.NaN : TT[2];
        const UT = this.locate(this.lastX, this.lastZ),
          mT = this.expirePulses();
        (UT || mT || this.turnsChanged()) && this.emit()
      }
      turnsChanged() {
        const TT = this.now();
        return !(!this.open || TT - this.turnsCheckedAtMs < 3e4 || null === this.message) && (this.turnsCheckedAtMs = TT, Tz(this.translate, this.message.tideChartTurnsInMs, TT - this.receivedAtMs) !== this.snapshot.turnsText)
      }
      castLanded(TT, UT) {
        const mT = null === this.message ? null : RW(this.message, TT, UT);
        if (null === mT) return;
        const WT = AW(mT, TT, UT);
        0 === (mT.tideChartPreBlank & 1 << WT) && (this.cast = {
          island: mT.tideChartIsland,
          cell: WT,
          token: ++this.castToken,
          atMs: this.now()
        }, this.emit())
      }
      expirePulses() {
        const TT = this.now();
        let UT = !1;
        return 0 !== this.pulse.cells && TT - this.pulse.atMs >= 1500 && (this.pulse = {
          ...this.pulse,
          cells: 0
        }, UT = !0), null !== this.cast && TT - this.cast.atMs >= 1500 && (this.cast = null, UT = !0), UT
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
      findChart(TT, UT) {
        var mT;
        return null !== (mT = TT.tideCharts.find((TT => TT.tideChartIsland === UT))) && void 0 !== mT ? mT : null
      }
      describe(TT) {
        var UT, mT, WT;
        const zT = TT.tideChartIsland,
          MT = [];
        for (let pT = 0; pT < 25; pT++) {
          const UT = 1 << pT;
          0 !== (TT.tideChartLit & UT) ? MT.push("lit") : 0 !== (TT.tideChartClear & UT) ? MT.push("clear") : 0 !== (TT.tideChartPreBlank & UT) ? MT.push("shore") : MT.push("water")
        }
        const gT = function(TT) {
            let UT = 0;
            for (let mT = TT >>> 0; 0 !== mT; mT &= mT - 1) UT++;
            return UT
          }(TT.tideChartLit),
          nT = TT.tideChartInkCount,
          HT = this.translate(TT.tideChartIslandNameKey),
          kT = this.translate("skyblockGame:tideChartsLit", {
            lit: String(gT),
            ink: String(nT)
          }),
          jT = null === TT.tideChartPictureNameKey ? null : this.translate(TT.tideChartPictureNameKey),
          lT = this.hereIsland === zT && -1 !== this.hereCell ? this.hereCell : null,
          LT = [`${HT}: ${kT}.`];
        if (null !== jT && LT.push(this.translate("skyblockGame:tideChartsPictureRevealed", {
            picture: jT
          })), null !== lT) {
          const TT = Math.floor(lT / 5) + 1,
            UT = lT % 5 + 1;
          LT.push(this.translate("skyblockGame:tideChartsHereCell", {
            row: String(TT),
            column: String(UT)
          }))
        }
        return {
          island: zT,
          islandName: HT,
          cells: MT,
          hereCell: lT,
          lit: gT,
          ink: nT,
          litText: kT,
          pictureName: jT,
          gridLabel: LT.join(" "),
          pulseCells: this.pulse.island === zT ? this.pulse.cells : 0,
          pulseToken: this.pulse.token,
          castCell: (null === (UT = this.cast) || void 0 === UT ? void 0 : UT.island) === zT ? this.cast.cell : null,
          castToken: null !== (mT = null === (WT = this.cast) || void 0 === WT ? void 0 : WT.token) && void 0 !== mT ? mT : 0
        }
      }
      buildSnapshot() {
        var TT, UT, mT;
        const WT = this.message;
        if (null === WT || 0 === WT.tideCharts.length) return {
          enabled: !1,
          open: !1,
          chip: null,
          card: null,
          turnsText: "",
          bookText: "",
          tabs: []
        };
        const zT = this.findChart(WT, this.hereIsland),
          MT = null !== (TT = null !== (UT = null !== (mT = this.findChart(WT, this.open ? this.picked : null)) && void 0 !== mT ? mT : zT) && void 0 !== UT ? UT : this.findChart(WT, this.lastIsland)) && void 0 !== TT ? TT : WT.tideCharts[0],
          gT = null === zT ? null : this.describe(zT);
        return this.turnsCheckedAtMs = this.now(), {
          enabled: !0,
          open: this.open,
          chip: gT,
          card: MT === zT ? gT : this.describe(MT),
          turnsText: Tz(this.translate, WT.tideChartTurnsInMs, this.now() - this.receivedAtMs),
          bookText: this.translate("skyblockGame:tideChartsBook", {
            count: String(WT.tideChartBookCount)
          }),
          tabs: WT.tideCharts.map((TT => ({
            island: TT.tideChartIsland,
            name: this.translate(TT.tideChartIslandNameKey),
            selected: TT.tideChartIsland === MT.tideChartIsland
          })))
        }
      }
      dispose() {
        this.message = null, this.hereIsland = null, this.hereCell = -1, this.cast = null, super.dispose()
      }
    }
    const mz = "skyblockRegularsView",
      Wz = {
        goal: "skyblockGame:regularsGiftTint",
        given: "skyblockGame:regularsGiftTint",
        owed: "skyblockGame:regularsGiftTintOwed"
      },
      zz = {
        goal: "skyblockGame:regularsCharmGoal",
        given: "skyblockGame:regularsCharmGiven",
        owed: "skyblockGame:regularsCharmOwed"
      };

    function Mz(TT, UT) {
      return "given" === TT ? UT.given : "owed" === TT ? UT.owed : UT.goal
    }
    class gz extends lT {
      constructor(TT, UT, mT, WT) {
        super(TT, mT, WT), this.translate = UT, this.snapshot = void 0, this.message = null, this.selected = "", this.openedFromReachLog = !1, this.itemName = TT => TT, this.openIsland = TT => {
          this.selected = TT, this.openedFromReachLog = !0, this.show()
        }, this.selectIsland = TT => {
          this.selected = TT, this.emit()
        }, this.snapshot = this.buildSnapshot()
      }
      pB(TT) {
        this.message = TT, this.emit()
      }
      isOverReachLog() {
        return this.open && this.openedFromReachLog
      }
      takeReturnToReachLog() {
        const TT = this.openedFromReachLog;
        return this.openedFromReachLog = !1, TT
      }
      setTranslator(TT, UT, mT) {
        this.translate = TT, void 0 !== mT && (this.itemName = mT), this.emit()
      }
      isEnabled() {
        return null !== this.message
      }
      describeGift(TT, UT, mT) {
        return {
          text: this.translate(Mz(TT, UT), mT),
          given: "given" === TT
        }
      }
      describeRegular(TT, UT) {
        const mT = this.translate,
          WT = null !== TT.regularKg,
          zT = TT.regularMeetings,
          MT = WT ? 0 === zT ? mT("skyblockGame:regularsNotMet") : 1 === zT ? mT("skyblockGame:regularsMeetingsOne") : mT("skyblockGame:regularsMeetings", {
            count: zT
          }) : "";
        return {
          id: TT.regularId,
          name: mT(TT.regularNameKey),
          line: mT(TT.regularLineKey),
          itemName: TT.regularFishItem,
          fishName: this.itemName(TT.regularFishItem),
          tagged: WT,
          size: null === TT.regularKg ? mT("skyblockGame:regularsNotTagged") : mT("skyblockGame:regularsSize", {
            kg: TT.regularKg.toFixed(1)
          }),
          meetings: MT,
          chance: mT("skyblockGame:regularsChance", {
            count: TT.regularOneInCasts
          }),
          resting: TT.regularRestingToday,
          gifts: [{
            text: mT("skyblockGame:regularsGiftFlare"),
            given: zT >= 3
          }, this.describeGift(TT.regularTintGift, Wz, {
            tint: mT(TT.regularTintNameKey)
          })],
          history: [...TT.regularHistory].reverse().map((TT => {
            const WT = TT.regularMeetingKg.toFixed(1),
              zT = UT - TT.regularMeetingDay;
            return zT <= 0 ? mT("skyblockGame:regularsToday", {
              kg: WT
            }) : mT("skyblockGame:regularsDaysAgo", {
              days: zT,
              kg: WT
            })
          }))
        }
      }
      describeIsland(TT, UT) {
        return {
          id: TT.regularsIslandId,
          name: this.translate(TT.regularsIslandNameKey),
          charm: this.describeGift(TT.regularsCharmGift, zz, {
            charm: this.translate(TT.regularsCharmNameKey)
          }),
          regulars: TT.regularsList.map((TT => this.describeRegular(TT, UT)))
        }
      }
      buildSnapshot() {
        var TT, UT, mT, WT;
        const zT = this.message;
        if (null === zT) return {
          enabled: !1,
          open: !1,
          selected: "",
          islands: []
        };
        const MT = zT.regularsIslands.map((TT => this.describeIsland(TT, zT.regularsToday))),
          gT = null !== (TT = null !== (UT = null === (mT = MT.find((TT => TT.id === this.selected))) || void 0 === mT ? void 0 : mT.id) && void 0 !== UT ? UT : null === (WT = MT[0]) || void 0 === WT ? void 0 : WT.id) && void 0 !== TT ? TT : "";
        return {
          enabled: !0,
          open: this.open,
          selected: gT,
          islands: MT
        }
      }
      dispose() {
        this.message = null, super.dispose()
      }
    }
    const nz = "skyblockHiddenWatersView";
    class Hz {
      constructor(TT) {
        this.EZ = TT, this.snapshot = null
      }
      getSnapshot() {
        return this.snapshot
      }
      pB(TT) {
        this.snapshot = function(TT) {
          const [UT, mT] = TT.hiddenWatersMapSize, WT = (TT, WT) => ({
            left: 1 - TT / UT,
            top: WT / mT
          }), zT = new Map;
          for (const [gT, nT] of TT.hiddenWatersGlimpses) {
            var MT;
            const TT = null !== (MT = zT.get(gT)) && void 0 !== MT ? MT : [];
            TT.push(nT), zT.set(gT, TT)
          }
          return {
            found: TT.hiddenWatersFound,
            total: TT.hiddenWatersTotal,
            aspect: mT / UT,
            pins: TT.hiddenWatersPins.map((TT => {
              let [UT, mT] = TT;
              return WT(UT, mT)
            })),
            islands: TT.hiddenWatersIslands.map((TT => {
              let [zT, MT, gT, nT] = TT;
              const {
                left: HT,
                top: kT
              } = WT(gT + 1, MT);
              return {
                left: HT,
                top: kT,
                width: (gT + 1 - zT) / UT,
                height: (nT + 1 - MT) / mT
              }
            })),
            glimpses: zT
          }
        }(TT), this.EZ(this.snapshot)
      }
    }
    const kz = "skyblockDialogueView";
    class jz extends lT {
      constructor(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Date.now;
        super(TT, mT, WT), this.translate = UT, this.requestDialogue = zT, this.now = MT, this.snapshot = void 0, this.enabled = !1, this.scripts = [], this.speakers = new Map, this.received = !1, this.selection = {
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
      pB(TT) {
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
        const UT = {
          enabled: this.enabled,
          open: this.open,
          loading: !this.received,
          completedLabel: this.translate("skyblockDialogue:completed")
        };
        if (!this.open) return {
          ...UT,
          characters: [],
          questFocus: null,
          conversations: []
        };
        const mT = this.selection;
        if ("quest" === mT.kind) {
          const TT = this.scripts.find((TT => TT.dialogueQuestId === mT.questId));
          return {
            ...UT,
            characters: [],
            questFocus: mT.questId,
            conversations: TT ? [this.conversation(TT)] : []
          }
        }
        const WT = [];
        for (let MT = this.scripts.length - 1; MT >= 0; MT--) {
          const TT = this.scripts[MT].dialogueLines;
          for (let UT = TT.length - 1; UT >= 0; UT--) WT.includes(TT[UT].dialogueSpeakerId) || WT.push(TT[UT].dialogueSpeakerId)
        }
        const zT = null !== mT.npcId && WT.includes(mT.npcId) ? mT.npcId : null !== (TT = WT[0]) && void 0 !== TT ? TT : null;
        return {
          ...UT,
          characters: WT.map((TT => {
            var UT, mT;
            return {
              id: TT,
              styling: null !== (UT = null === (mT = this.speakers.get(TT)) || void 0 === mT ? void 0 : mT.dialogueSpeakerStyling) && void 0 !== UT ? UT : TT,
              selected: TT === zT
            }
          })),
          questFocus: null,
          conversations: this.scripts.filter((TT => TT.dialogueLines.some((TT => TT.dialogueSpeakerId === zT)))).map((TT => this.conversation(TT))).reverse()
        }
      }
      conversation(TT) {
        let UT = null;
        return {
          questId: TT.dialogueQuestId,
          questName: this.translate(TT.dialogueQuestNameKey),
          completed: TT.dialogueQuestCompleted,
          lines: TT.dialogueLines.map(((TT, mT) => {
            var WT;
            const zT = TT.dialogueSpeakerId === UT || null === (WT = this.speakers.get(TT.dialogueSpeakerId)) || void 0 === WT ? void 0 : WT.dialogueSpeakerStyling;
            return UT = TT.dialogueSpeakerId, {
              key: mT,
              display: {
                line: {
                  translationKey: TT.dialogueLineKey,
                  params: this.params(TT.dialogueLineParams)
                },
                speakerName: zT,
                animateIn: !1
              }
            }
          }))
        }
      }
      params(TT) {
        if (void 0 !== TT) return Object.fromEntries(Object.entries(TT).map((TT => {
          let [UT, mT] = TT;
          return [UT, "string" === typeof mT ? mT : this.translate(mT.translationKey)]
        })))
      }
    }
    var lz = mT(641),
      Lz = mT(1367),
      pz = mT(102);
    const Bz = "skyblockAutographsView";

    function Zz(TT) {
      const UT = lz.l[TT];
      return {
        label: UT.chatTag.map((TT => TT.str)).join(""),
        icon: UT.icon,
        colour: UT.mainRGB
      }
    }
    class cz extends lT {
      constructor(TT) {
        let UT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en-GB";
        super(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {}, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {}), this.locale = UT, this.signatures = null, this.snapshot = {
          enabled: !1,
          open: !1,
          entries: [],
          total: 0,
          rankTotal: 0
        }
      }
      pB(TT) {
        this.signatures = TT.autographSignatures, TT.autographOpen ? this.show() : this.emit()
      }
      setTranslator(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.locale;
        this.locale = UT, this.emit()
      }
      dispose() {
        this.signatures = null, super.dispose()
      }
      isEnabled() {
        return null !== this.signatures
      }
      buildSnapshot() {
        var TT;
        const UT = null !== (TT = this.signatures) && void 0 !== TT ? TT : [],
          mT = new Intl.DateTimeFormat(this.locale, {
            dateStyle: "medium"
          }),
          WT = [...UT].sort(((TT, UT) => Number(null !== UT.autographRank) - Number(null !== TT.autographRank) || UT.autographSignedAtMs - TT.autographSignedAtMs)).map((TT => ({
            key: `${TT.autographSignedAtMs}|${TT.autographSignerName}`,
            name: (0, Lz.d)(TT.autographSignerName, !pz.featureFlags.canSeeRealPlayerNames),
            rank: null === TT.autographRank ? null : Zz(TT.autographRank),
            signedOn: mT.format(TT.autographSignedAtMs)
          })));
        return {
          enabled: this.isEnabled(),
          open: this.open,
          entries: WT,
          total: WT.length,
          rankTotal: WT.filter((TT => null !== TT.rank)).length
        }
      }
    }
    const vz = "skyblockHudView",
      fz = () => {},
      qz = {
        getItem: () => null,
        setItem: fz,
        removeItem: fz
      };
    class iz {
      constructor(TT) {
        let {
          translate: UT,
          translateWithIcons: mT,
          setMenuOpen: WT = fz,
          dismissMenu: zT = () => {
            WT(!1)
          },
          publishSkills: MT = fz,
          publishQuests: gT = fz,
          publishQuestNotification: nT = fz,
          publishDungeons: HT = fz,
          publishCollections: kT = fz,
          publishMap: jT = fz,
          publishHud: lT = fz,
          publishPortalTransit: LT = fz,
          publishDailyReward: BT = fz,
          publishMailbox: ZT = fz,
          publishQuestGraph: cT = fz,
          publishForge: vT = fz,
          publishSmuggler: fT = fz,
          publishKeepersChair: qT = fz,
          publishReachLog: iT = fz,
          publishLampLight: bT = fz,
          publishMagmaward: OT = fz,
          publishGlowtide: YT = fz,
          publishGlowMeter: JT = fz,
          publishHushWait: xT = fz,
          publishPassage: dT = fz,
          publishTideCharts: wT = fz,
          publishRegulars: tT = fz,
          publishHiddenWaters: aT = fz,
          publishDialogue: yT = fz,
          publishAutographs: XT = fz,
          isLoadingScreenUp: IT = () => !1,
          onDailyRewardCoinLanded: QT = fz,
          onDailyRewardStarted: sT = fz,
          onDailyRewardFinished: FT = fz,
          onDailyRewardItemLanded: PT = fz,
          onMailboxStarted: VT = fz,
          journeyStorage: uT = qz,
          requestTracking: CT = fz,
          requestTravel: rT = fz,
          requestDungeonEnter: KT = fz,
          requestQuestJump: ST = fz,
          requestQuestArrive: GT = fz,
          requestForge: NT = fz,
          requestSmuggle: ET = fz,
          requestKeepersChairAim: hT = fz,
          requestReachLogOpen: DT = fz,
          requestLampLight: oT = fz,
          requestDialogue: AT = fz
        } = TT;
        this.navigation = void 0, this.map = void 0, this.compass = new eT, this.skills = void 0, this.quests = void 0, this.dungeons = void 0, this.collections = void 0, this.questGraph = void 0, this.forge = void 0, this.smuggler = void 0, this.keepersChair = void 0, this.reachLog = void 0, this.lampLight = void 0, this.commandPacer = new dW.d, this.passage = void 0, this.tideCharts = void 0, this.regulars = void 0, this.hiddenWaters = void 0, this.autographs = void 0, this.portalTransit = void 0, this.dailyReward = void 0, this.mailbox = void 0, this.magmaward = void 0, this.glowtide = void 0, this.glowMeter = void 0, this.hushWait = void 0, this.dialogue = void 0, this.panels = void 0, this.setMenuOpen = void 0, this.hudSnapshot = null, this.openingPanel = null, this.publishHud = void 0, this.resolveItemName = TT => TT, this.close = () => {
          for (const TT of this.panels) TT.close()
        }, this.setMenuOpen = WT, this.publishHud = lT, this.portalTransit = new Cm(LT, uT), this.magmaward = new uW(OT), this.glowtide = new rW(YT), this.glowMeter = new SW(JT), this.hushWait = new NW(xT), this.dailyReward = new Sm(BT, (() => IT() || null !== this.portalTransit.getSnapshot() || null !== this.quests.getNotificationSnapshot() || null !== this.mailbox.getSnapshot()), (TT => {
          this.quests.setNotificationsHeld(TT)
        }), (() => {
          null !== this.hudSnapshot && this.publishHud(this.getHudSnapshot())
        }), QT, sT, FT, PT);
        const RT = TT => {
          this.panels.some((TT => TT.isOpen())) || (TT ? zT() : this.setMenuOpen(!1))
        };
        this.skills = new nm(MT, Date.now, (() => {
          this.beforePanelOpen(this.skills)
        }), UT, void 0, void 0, RT), this.quests = new Lm(gT, CT, UT, (() => {
          this.beforePanelOpen(this.quests)
        }), void 0, void 0, RT, nT), this.dungeons = new Zm(HT, UT, (() => {
          this.beforePanelOpen(this.dungeons)
        }), void 0, RT, KT), this.collections = new Pm(kT, UT, (() => {
          this.beforePanelOpen(this.collections)
        }), RT), this.map = new pT(jT, rT, UT, (() => {
          this.beforePanelOpen(this.map)
        }), RT), this.questGraph = new TW(cT, UT, (() => {
          this.beforePanelOpen(this.questGraph)
        }), RT, ST, GT, uT), this.forge = new fW(vT, UT, (() => {
          this.beforePanelOpen(this.forge)
        }), RT, NT), this.smuggler = new bW(fT, UT, (() => {
          this.beforePanelOpen(this.smuggler)
        }), RT, ET), this.lampLight = new PW(bT, UT, oT, this.commandPacer), this.keepersChair = new tW(qT, UT, (() => {
          this.beforePanelOpen(this.keepersChair)
        }), (TT => {
          this.lampLight.onChairClosed(), RT(TT)
        }), hT, Date.now, this.commandPacer), this.reachLog = new sW(iT, UT, (() => {
          this.beforePanelOpen(this.reachLog)
        }), RT, DT, this.commandPacer), this.passage = new xW(dT, UT, (() => {
          this.beforePanelOpen(this.passage)
        }), RT), this.tideCharts = new Uz(wT, UT, (() => {
          this.beforePanelOpen(this.tideCharts)
        }), RT), this.regulars = new gz(tT, UT, (() => {
          this.beforePanelOpen(this.regulars)
        }), (TT => {
          this.regulars.takeReturnToReachLog() && !TT && null === this.openingPanel && this.reachLog.isOpen() && this.reachLog.close(), RT(TT)
        })), this.hiddenWaters = new Hz(aT), this.dialogue = new jz(yT, UT, (() => {
          this.beforePanelOpen(this.dialogue)
        }), RT, AT), this.autographs = new cz(XT, (() => {
          this.beforePanelOpen(this.autographs)
        }), RT), this.mailbox = new hm(ZT, (() => IT() || null !== this.portalTransit.getSnapshot() || null !== this.dailyReward.getSnapshot()), VT), this.quests.translateWithIcons = null !== mT && void 0 !== mT ? mT : null, this.skills.onLevelUp = TT => {
          this.quests.notify(TT)
        }, this.panels = [this.map, this.skills, this.quests, this.dungeons, this.collections, this.questGraph, this.forge, this.smuggler, this.keepersChair, this.reachLog, this.passage, this.tideCharts, this.regulars, this.dialogue, this.autographs], this.navigation = new Mm(this.map, this.quests, this.compass, UT)
      }
      getHudSnapshot() {
        const TT = this.hudSnapshot,
          UT = this.dailyReward.getHeldCoins();
        return null === TT || UT <= 0 || !("hudPurseCoins" in TT) ? TT : {
          ...TT,
          hudPurseCoins: Math.max(0, TT.hudPurseCoins - UT)
        }
      }
      receiveHud(TT) {
        this.hudSnapshot = TT, this.publishHud(this.getHudSnapshot())
      }
      beforePanelOpen(TT) {
        this.setMenuOpen(!0);
        const UT = TT === this.regulars && this.regulars.isOverReachLog();
        this.openingPanel = TT;
        for (const mT of this.panels) mT === TT || UT && mT === this.reachLog || mT.close();
        this.openingPanel = null
      }
      setTranslator(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : UT => this.resolveItemName(UT, TT);
        this.quests.translateWithIcons = null !== mT && void 0 !== mT ? mT : null, this.navigation.setTranslator(TT, UT), this.lampLight.setTranslator(TT, UT), this.mailbox.setItemName(WT);
        for (const zT of this.panels) zT.setTranslator(TT, UT, WT)
      }
      dispose() {
        this.navigation.dispose(), this.compass.dispose(), this.portalTransit.dispose(), this.dailyReward.dispose(), this.mailbox.dispose(), this.magmaward.dispose(), this.glowtide.dispose(), this.glowMeter.dispose(), this.hushWait.dispose(), this.lampLight.dispose(), this.commandPacer.dispose();
        for (const TT of this.panels) TT.dispose()
      }
    }
    var bz = mT(1126),
      Oz = mT.n(bz),
      ez = mT(25),
      Yz = mT(36687),
      Jz = mT(3511),
      xz = mT(2034),
      dz = mT(2023),
      wz = mT(34298),
      tz = mT(1288),
      az = mT(1567),
      yz = mT(1188);

    function Xz(TT) {
      let {
        controller: UT,
        minimap: mT,
        children: WT
      } = TT;
      const MT = (0, az.j)(vz, UT.getHudSnapshot()),
        [gT, nT] = (0, JT.useState)(UT.skills.getSnapshot().overallLevel);
      (0, az.g)(gm, (TT => {
        nT(TT.overallLevel)
      }));
      const HT = (0, JT.useRef)(null);
      (0, az.g)(Km, (TT => {
        ! function(TT, UT) {
          if (null === TT || "function" !== typeof TT.animate) return;
          const mT = UT ? 1.35 : 1.15;
          TT.animate([{
            transform: "scale(1)"
          }, {
            transform: `scale(${mT})`
          }, {
            transform: "scale(1)"
          }], {
            duration: UT ? 320 : 160,
            easing: "ease-out"
          }), TT.classList.toggle("Receiving", !UT), UT && (TT.classList.remove("Shine"), TT.offsetWidth, TT.classList.add("Shine"))
        }(HT.current, TT)
      }));
      const {
        t: kT
      } = (0, tz.z)(), {
        isTouchScreen: jT
      } = (0, ez.h)(["isTouchScreen"]), [lT, LT] = (0, JT.useState)(null);
      return (0, Jz.f)(lT, ".SkyblockRightHud"), null !== MT || mT ? (0, yz.jsx)(Yz.d, {
        placement: "topRight",
        children: (0, yz.jsxs)("div", {
          className: Oz()("SkyblockRightHud", {
            TouchScreen: jT
          }),
          children: [mT, null !== MT && (0, yz.jsxs)("div", {
            ref: LT,
            className: "SkyblockRightHudCard",
            children: ["hudHelpText" in MT ? (0, yz.jsx)("div", {
              className: "SkyblockHudHelp",
              children: MT.hudHelpText
            }) : (0, yz.jsxs)(yz.Fragment, {
              children: [(0, yz.jsxs)("div", {
                className: "SkyblockHudStatus",
                children: [(0, yz.jsxs)("span", {
                  className: "SkyblockHudIdentity",
                  children: [(0, yz.jsx)("strong", {
                    style: {
                      color: zT.R.cyanUiText
                    },
                    children: kT(MT.hudZoneNameKey)
                  }), null !== gT && (0, yz.jsx)("span", {
                    style: {
                      color: zT.R.goldUiText
                    },
                    children: kT("skyblockGame:level", {
                      level: (0, wz.h)(gT)
                    })
                  })]
                }), (0, yz.jsxs)("span", {
                  className: "SkyblockHudCoins",
                  ref: HT,
                  children: [(0, yz.jsx)("span", {
                    "aria-hidden": "true",
                    children: (0, yz.jsx)(xz.b, {
                      itemName: "Gold Coin",
                      amount: 0
                    })
                  }), (0, wz.h)(MT.hudPurseCoins)]
                })]
              }), MT.hudClockText.length > 0 && (0, yz.jsx)("div", {
                className: "SkyblockHudClock",
                children: (0, yz.jsx)(dz.e, {
                  text: MT.hudClockText
                })
              })]
            }), WT, "hudZoneNameKey" in MT && (0, yz.jsx)("div", {
              className: "SkyblockHudAddress",
              children: "www.bloxd.io"
            })]
          })]
        })
      }) : null
    }

    function Iz(TT) {
      let {
        icon: UT
      } = TT;
      const mT = (0, JT.useCallback)((TT => {
        null === TT || void 0 === TT || TT.replaceChildren(NU(UT))
      }), [UT]);
      return (0, yz.jsx)("span", {
        className: "SkyblockMapIconSlot",
        ref: mT
      })
    }

    function Qz(TT) {
      let {
        controller: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)();
      return (0, yz.jsx)("div", {
        className: "SkyblockMapPlayer",
        ref: UT.display.mountPlayer,
        title: mT("skyblockGame:mapYouAreHere"),
        children: (0, yz.jsx)(Iz, {
          icon: "player"
        })
      })
    }
    const sz = mT(38702),
      Fz = Object.fromEntries(sz.keys().map((TT => [TT.replace(/^\.\/(.*)\.png$/, "$1"), sz(TT)])));

    function Pz(TT, UT) {
      var mT;
      return null !== (mT = Fz[TT]) && void 0 !== mT ? mT : Fz[UT]
    }

    function Vz(TT) {
      let {
        imageKey: UT,
        fallbackImageKey: mT,
        geometryKey: WT,
        alt: zT,
        className: MT
      } = TT;
      const [gT, nT] = (0, JT.useState)((() => function(TT, UT) {
        return [{
          id: 0,
          imageKey: TT,
          geometryKey: UT,
          phase: "shown"
        }]
      }(UT, WT))), HT = function(TT, UT, mT) {
        const WT = TT[TT.length - 1];
        if (WT.imageKey === UT && WT.geometryKey === mT) return TT;
        const zT = {
          id: WT.id + 1,
          imageKey: UT,
          geometryKey: mT,
          phase: "entering"
        };
        return WT.geometryKey === mT ? [{
          ...WT,
          phase: "leaving"
        }, zT] : [zT]
      }(gT, UT, WT);
      return HT !== gT && nT(HT), (0, yz.jsx)(yz.Fragment, {
        children: HT.map((TT => (0, yz.jsx)("img", {
          className: Oz()("SkyblockMapTerrainImage", MT, {
            Entering: "entering" === TT.phase,
            Leaving: "leaving" === TT.phase
          }),
          src: Pz(TT.imageKey, mT),
          alt: "leaving" === TT.phase ? "" : zT,
          onAnimationEnd: () => {
            nT((UT => function(TT, UT) {
              return TT.flatMap((TT => TT.id !== UT ? [TT] : "leaving" === TT.phase ? [] : [{
                ...TT,
                phase: "shown"
              }]))
            }(UT, TT.id)))
          }
        }, TT.id)))
      })
    }
    var uz = mT(4639),
      Cz = mT(1569);

    function rz(TT) {
      if ("Tab" !== TT.key) return;
      const UT = Array.from(TT.currentTarget.querySelectorAll('[role="button"][tabindex="0"], button:not(:disabled)')),
        mT = UT.indexOf(document.activeElement);
      var WT;
      if (TT.shiftKey && mT <= 0) TT.preventDefault(), null === (WT = UT.at(-1)) || void 0 === WT || WT.focus();
      else if (!TT.shiftKey && (-1 === mT || mT === UT.length - 1)) {
        var zT;
        TT.preventDefault(), null === (zT = UT[0]) || void 0 === zT || zT.focus()
      }
    }

    function Kz() {
      const TT = (0, JT.useRef)(null);
      return (0, JT.useCallback)((UT => {
        var mT;
        UT ? (TT.current = document.activeElement, UT.focus()) : null === (mT = TT.current) || void 0 === mT || mT.focus()
      }), [])
    }

    function Sz(TT) {
      let {
        percent: UT,
        label: mT,
        levelUpToken: WT,
        colour: zT
      } = TT;
      return (0, yz.jsxs)("div", {
        className: "SkillProgressBar",
        role: "progressbar",
        "aria-label": mT,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": UT,
        "aria-valuetext": mT,
        children: [(0, yz.jsx)("div", {
          className: "SkillProgressBarFill",
          style: {
            transform: `scaleX(${UT/100})`
          }
        }), null !== WT && void 0 !== WT && (0, yz.jsx)("div", {
          className: "SkillProgressBarLevelUp",
          style: {
            "--skill-colour": zT
          }
        }, WT)]
      })
    }

    function Gz(TT) {
      let {
        mount: UT
      } = TT;
      return (0, yz.jsx)("div", {
        className: "SkyblockSearchArea",
        ref: UT,
        hidden: !0,
        children: (0, yz.jsxs)("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          children: [(0, yz.jsx)("path", {
            className: "SkyblockSearchAreaShadow"
          }), (0, yz.jsx)("path", {
            className: "SkyblockSearchAreaDashes"
          })]
        })
      })
    }

    function Nz(TT, UT, mT, WT) {
      (0, JT.useLayoutEffect)((() => {
        const zT = TT.current;
        if (!mT || null === UT || void 0 === UT || !UT.local || !zT) return;
        const MT = Array.from(zT.querySelectorAll(".SkyblockMapNode")),
          gT = [...UT.points, ...UT.portals],
          nT = () => {
            const TT = zT.clientWidth,
              mT = zT.clientHeight,
              nT = MT.map(((zT, MT) => {
                const nT = gT[MT];
                return {
                  id: nT.id,
                  portal: MT >= UT.points.length,
                  x: nT.position[0] * TT / 100,
                  y: nT.position[1] * mT / 100,
                  width: zT.offsetWidth / WT,
                  height: zT.offsetHeight / WT
                }
              })),
              HT = new Map(gT.map(((TT, UT) => [TT.id, MT[UT]])));
            for (const UT of function(TT, UT, mT) {
                const WT = [],
                  zT = [...TT].sort(((TT, UT) => Number(UT.portal) - Number(TT.portal) || TT.id.localeCompare(UT.id)));
                for (const MT of zT) {
                  const TT = TT => Math.max(MT.width / 2, Math.min(UT - MT.width / 2, TT)),
                    zT = TT => Math.max(MT.height / 2, Math.min(mT - MT.height / 2, TT)),
                    gT = [TT(MT.x)],
                    nT = [zT(MT.y)];
                  for (const UT of WT) gT.push(TT(UT.x - (UT.width + MT.width) / 2 - 4), TT(UT.x + (UT.width + MT.width) / 2 + 4)), nT.push(zT(UT.y - (UT.height + MT.height) / 2 - 4), zT(UT.y + (UT.height + MT.height) / 2 + 4));
                  let HT = {
                      ...MT,
                      x: gT[0],
                      y: nT[0]
                    },
                    kT = 1 / 0,
                    jT = 1 / 0;
                  for (const UT of new Set(gT))
                    for (const TT of new Set(nT)) {
                      let mT = 0;
                      for (const gT of WT) mT += Math.max(0, (MT.width + gT.width) / 2 + 4 - Math.abs(UT - gT.x)) * Math.max(0, (MT.height + gT.height) / 2 + 4 - Math.abs(TT - gT.y));
                      const zT = (UT - MT.x) ** 2 + (TT - MT.y) ** 2;
                      (mT < kT || mT === kT && zT < jT) && (HT = {
                        ...MT,
                        x: UT,
                        y: TT
                      }, kT = mT, jT = zT)
                    }
                  WT.push(HT)
                }
                return WT
              }(nT, TT, mT)) {
              const TT = HT.get(UT.id);
              TT.style.left = `${UT.x}px`, TT.style.top = `${UT.y}px`
            }
          };
        nT();
        const HT = new ResizeObserver(nT);
        HT.observe(zT);
        for (const TT of MT) HT.observe(TT);
        return () => {
          HT.disconnect()
        }
      }), [TT, UT, mT, WT])
    }
    const Ez = {
        zoom: 1,
        x: 0,
        y: 0
      },
      hz = {
        x0: 0,
        y0: 0,
        x1: 1,
        y1: 1
      };

    function Dz(TT, UT, mT) {
      return Math.min(mT, Math.max(UT, TT))
    }

    function oz(TT, UT, mT) {
      const WT = Math.min(1, mT * UT / TT),
        zT = Math.min(1, TT / (mT * UT));
      return {
        x0: (1 - WT) / 2,
        y0: (1 - zT) / 2,
        x1: (1 + WT) / 2,
        y1: (1 + zT) / 2
      }
    }

    function Az(TT, UT, mT, WT) {
      const zT = UT * (WT - mT);
      if (zT <= 1) return .5 - UT * (mT + WT) / 2;
      const MT = .45 * Math.min(1, zT - 1);
      return Dz(TT, 1 - UT * WT - MT, MT - UT * mT)
    }

    function Rz(TT, UT) {
      const mT = Dz(TT.zoom, 1, 12);
      return {
        zoom: mT,
        x: Az(TT.x, mT, UT.x0, UT.x1),
        y: Az(TT.y, mT, UT.y0, UT.y1)
      }
    }

    function TM(TT, UT, mT, WT) {
      let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : hz;
      const MT = Dz(TT.zoom * UT, 1, 12),
        gT = MT / TT.zoom;
      return Rz({
        zoom: MT,
        x: mT - (mT - TT.x) * gT,
        y: WT - (WT - TT.y) * gT
      }, zT)
    }

    function UM(TT, UT, mT, WT) {
      const [zT, MT] = (0, JT.useState)(Ez);
      (0, JT.useEffect)((() => {
        MT(Ez)
      }), [mT]), (0, JT.useEffect)((() => {
        const mT = TT.current;
        if (!UT || !mT) return;
        const zT = () => oz(mT.clientWidth, mT.clientHeight, WT),
          gT = TT => {
            const UT = mT.getBoundingClientRect();
            return {
              x: (TT.clientX - UT.left) / UT.width,
              y: (TT.clientY - UT.top) / UT.height
            }
          },
          nT = new Map;
        let HT = {
            x: 0,
            y: 0
          },
          kT = !1,
          jT = 0;
        const lT = TT => {
            TT.preventDefault();
            const UT = TT.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 * TT.deltaY : TT.deltaY,
              mT = gT(TT);
            MT((TT => TM(TT, Math.exp(.0015 * -UT), mT.x, mT.y, zT())))
          },
          LT = TT => {
            "mouse" === TT.pointerType && 0 !== TT.button || (nT.set(TT.pointerId, gT(TT)), 1 === nT.size && (HT = {
              x: TT.clientX,
              y: TT.clientY
            }, kT = !1), jT = 0)
          },
          pT = TT => {
            const UT = nT.get(TT.pointerId);
            if (!UT) return;
            const WT = gT(TT);
            if (nT.set(TT.pointerId, WT), 2 === nT.size) {
              const [TT, UT] = [...nT.values()], mT = Math.hypot(TT.x - UT.x, TT.y - UT.y);
              if (jT > 0) {
                const WT = mT / jT;
                MT((mT => TM(mT, WT, (TT.x + UT.x) / 2, (TT.y + UT.y) / 2, zT())))
              }
              return jT = mT, void(kT = !0)
            }!kT && Math.hypot(TT.clientX - HT.x, TT.clientY - HT.y) < 4 || (kT || (kT = !0, mT.setPointerCapture(TT.pointerId)), MT((TT => function(TT, UT, mT) {
              let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hz;
              return Rz({
                zoom: TT.zoom,
                x: TT.x + UT,
                y: TT.y + mT
              }, WT)
            }(TT, WT.x - UT.x, WT.y - UT.y, zT()))))
          },
          BT = TT => {
            nT.delete(TT.pointerId), jT = 0
          },
          ZT = TT => {
            kT && (TT.stopPropagation(), TT.preventDefault(), kT = !1)
          },
          cT = new ResizeObserver((() => {
            MT((TT => Rz(TT, zT())))
          }));
        return cT.observe(mT), mT.addEventListener("wheel", lT, {
          passive: !1
        }), mT.addEventListener("pointerdown", LT), mT.addEventListener("pointermove", pT), mT.addEventListener("pointerup", BT), mT.addEventListener("pointercancel", BT), mT.addEventListener("click", ZT, !0), () => {
          cT.disconnect(), mT.removeEventListener("wheel", lT), mT.removeEventListener("pointerdown", LT), mT.removeEventListener("pointermove", pT), mT.removeEventListener("pointerup", BT), mT.removeEventListener("pointercancel", BT), mT.removeEventListener("click", ZT, !0)
        }
      }), [TT, UT, mT, WT]);
      return {
        view: zT,
        zoomBy: UT => {
          const mT = TT.current;
          mT && MT((TT => TM(TT, UT, .5, .5, oz(mT.clientWidth, mT.clientHeight, WT))))
        }
      }
    }

    function mM(TT) {
      var UT, mT, WT, zT;
      let {
        controller: MT,
        navigation: gT
      } = TT;
      const nT = (0, az.j)(LT, MT.getSnapshot()),
        {
          t: HT
        } = (0, tz.z)(),
        kT = Kz(),
        jT = nT.presentation,
        lT = (0, JT.useRef)(null),
        pT = (0, JT.useRef)(null),
        BT = Boolean(nT.open && (null === jT || void 0 === jT ? void 0 : jT.local) && jT.background),
        ZT = UM(lT, BT, `${nT.open}|${nT.tab}|${null===jT||void 0===jT||null===(UT=jT.background)||void 0===UT?void 0:UT.geometryKey}`, null !== (mT = null === jT || void 0 === jT || null === (WT = jT.background) || void 0 === WT ? void 0 : WT.ratio) && void 0 !== mT ? mT : 2);
      if (Nz(pT, jT, nT.open, ZT.view.zoom), !jT || !nT.open) return null;
      const cT = jT.local ? jT.background : null,
        vT = {
          "--map-ratio": String(null !== (zT = null === cT || void 0 === cT ? void 0 : cT.ratio) && void 0 !== zT ? zT : 2),
          backgroundColor: null === cT || void 0 === cT ? void 0 : cT.colour
        },
        fT = {
          "--map-zoom": String(ZT.view.zoom),
          transform: `translate(${100*ZT.view.x}%, ${100*ZT.view.y}%) scale(${ZT.view.zoom})`
        };
      return (0, yz.jsx)(uz.e, {
        show: nT.open,
        close: MT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockMapPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockMapTitle",
          tabIndex: -1,
          ref: kT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, yz.jsxs)("div", {
              className: "SkyblockMapTitle",
              children: [(0, yz.jsx)("h2", {
                id: "skyblockMapTitle",
                children: HT("skyblockGame:map")
              }), jT.minimap && (0, yz.jsx)("p", {
                children: jT.minimap.caption
              })]
            }), (0, yz.jsx)("div", {
              className: "SkyblockMapTabs",
              "data-pad-tabs": "1",
              children: ["local", "world"].map((TT => (0, yz.jsx)("button", {
                type: "button",
                "data-pad-tab": !0,
                "data-pad-selected": TT === nT.tab ? "true" : void 0,
                className: Oz()({
                  Selected: TT === nT.tab
                }),
                "aria-pressed": TT === nT.tab,
                onClick: () => {
                  MT.selectTab(TT)
                },
                children: HT("local" === TT ? "skyblockGame:mapLocal" : "skyblockGame:mapWorld")
              }, TT)))
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              onClick: MT.dismiss
            })]
          }), (0, yz.jsx)("div", {
            className: "SkyblockMapBody",
            children: (0, yz.jsxs)("div", {
              ref: lT,
              className: Oz()("SkyblockMapCanvas", {
                Local: jT.local,
                Overview: !jT.local,
                Zoomed: ZT.view.zoom > 1
              }),
              style: vT,
              children: [(0, yz.jsx)("div", {
                className: "SkyblockMapZoomLayer",
                style: BT ? fT : void 0,
                children: (0, yz.jsxs)("div", {
                  className: "SkyblockMapArea",
                  ref: pT,
                  children: [cT && (0, yz.jsx)(Vz, {
                    className: "SkyblockMapTerrain",
                    imageKey: cT.imageKey,
                    fallbackImageKey: cT.fallbackImageKey,
                    geometryKey: cT.geometryKey,
                    alt: cT.label
                  }), jT.local && (0, yz.jsx)(Gz, {
                    mount: gT.display.mountMapSearchArea
                  }), !jT.local && (0, yz.jsx)("svg", {
                    className: "SkyblockMapConnections",
                    viewBox: "0 0 100 100",
                    preserveAspectRatio: "none",
                    "aria-hidden": "true",
                    children: jT.connections.map((TT => (0, yz.jsx)("line", {
                      className: Oz()({
                        Explored: TT.explored
                      }),
                      x1: TT.start[0],
                      y1: TT.start[1],
                      x2: TT.end[0],
                      y2: TT.end[1]
                    }, TT.id)))
                  }), jT.points.map((TT => {
                    const UT = !jT.local && TT.thumbnail ? Fz[TT.thumbnail] : void 0;
                    return (0, yz.jsxs)("div", {
                      className: Oz()("SkyblockMapNode", {
                        Current: TT.current
                      }),
                      style: {
                        left: `${TT.position[0]}%`,
                        top: `${TT.position[1]}%`
                      },
                      children: [(0, yz.jsxs)(Cz.e, {
                        className: Oz()("SkyblockMapPin", {
                          Unknown: !TT.visited,
                          Current: TT.current
                        }),
                        disabled: nT.pending,
                        onClick: () => {
                          MT.travel(TT.travelKind, TT.travelId)
                        },
                        children: [UT && (0, yz.jsx)("img", {
                          className: "SkyblockMapZoneThumbnail",
                          src: UT,
                          alt: ""
                        }), !UT && (0, yz.jsx)("span", {
                          className: "SkyblockMapPinSymbol",
                          "aria-hidden": "true",
                          children: (0, yz.jsx)(Iz, {
                            icon: TT.icon
                          })
                        }), (0, yz.jsx)("span", {
                          className: "SkyblockMapPinName",
                          children: TT.name
                        })]
                      }), TT.current && (0, yz.jsx)("span", {
                        className: Oz()("SkyblockMapHereBadge", {
                          Above: TT.position[1] > 50
                        }),
                        children: HT("skyblockGame:mapYouAreHere")
                      })]
                    }, TT.id)
                  })), jT.portals.map((TT => (0, yz.jsx)("div", {
                    className: "SkyblockMapNode",
                    style: {
                      left: `clamp(3rem, ${TT.position[0]}%, calc(100% - 3rem))`,
                      top: `clamp(2rem, ${TT.position[1]}%, calc(100% - 2rem))`
                    },
                    children: (0, yz.jsxs)(Cz.e, {
                      className: "SkyblockMapPin",
                      disabled: nT.pending,
                      onClick: () => {
                        MT.travel(TT.travelKind, TT.travelId)
                      },
                      children: [(0, yz.jsx)("span", {
                        className: "SkyblockMapPinSymbol",
                        style: {
                          color: TT.colour
                        },
                        "aria-hidden": "true",
                        children: (0, yz.jsx)(Iz, {
                          icon: TT.icon
                        })
                      }), (0, yz.jsx)("span", {
                        className: "SkyblockMapPinName",
                        children: TT.name
                      })]
                    })
                  }, TT.id))), jT.local && (0, yz.jsx)(Qz, {
                    controller: gT
                  })]
                })
              }), BT && (0, yz.jsxs)("div", {
                className: "SkyblockMapZoomControls",
                children: [(0, yz.jsx)("button", {
                  type: "button",
                  "aria-label": HT("skyblockGame:mapZoomIn"),
                  disabled: ZT.view.zoom >= 12,
                  onClick: () => {
                    ZT.zoomBy(1.5)
                  },
                  children: "+"
                }), (0, yz.jsx)("button", {
                  type: "button",
                  "aria-label": HT("skyblockGame:mapZoomOut"),
                  disabled: ZT.view.zoom <= 1,
                  onClick: () => {
                    ZT.zoomBy(1 / 1.5)
                  },
                  children: "\u2212"
                })]
              }), (0, yz.jsx)("div", {
                className: "SkyblockMapFeedback",
                role: "status",
                "aria-live": "polite",
                children: nT.feedback
              })]
            })
          }), (0, yz.jsxs)("footer", {
            className: "SkyblockMapFooter",
            children: [jT.progress && (0, yz.jsxs)("div", {
              className: "SkyblockMapProgress",
              children: [(0, yz.jsx)("span", {
                children: jT.progress
              }), (0, yz.jsx)(Sz, {
                percent: jT.percent,
                label: jT.progress
              })]
            }), jT.noLandmarks && (0, yz.jsx)("span", {
              children: HT("skyblockGame:mapNoLandmarks")
            }), jT.canTravel && (0, yz.jsx)("span", {
              className: "SkyblockMapHint",
              children: HT("skyblockGame:mapTravelHint")
            })]
          })]
        })
      })
    }

    function WM(TT) {
      let {
        view: UT,
        controller: mT,
        navigation: WT
      } = TT;
      const {
        t: zT
      } = (0, tz.z)(), {
        isTouchScreen: MT
      } = (0, ez.h)(["isTouchScreen"]);
      return (0, yz.jsxs)("aside", {
        className: "SkyblockMinimap",
        "aria-label": zT("skyblockGame:mapLocal"),
        children: [MT && (0, yz.jsx)(Cz.e, {
          className: "SkyblockMinimapOpen",
          onClick: mT.showLocal,
          children: zT("skyblockGame:map")
        }), (0, yz.jsxs)("div", {
          className: "SkyblockMinimapFrame",
          style: {
            backgroundColor: UT.colour
          },
          children: [(0, yz.jsxs)("div", {
            className: "SkyblockMinimapTerrain",
            ref: WT.display.mountTerrain,
            style: {
              width: UT.width,
              height: UT.height
            },
            children: [(0, yz.jsx)(Vz, {
              imageKey: UT.imageKey,
              fallbackImageKey: UT.fallbackImageKey,
              geometryKey: UT.geometryKey,
              alt: UT.label
            }), (0, yz.jsx)(Gz, {
              mount: WT.display.mountMinimapSearchArea
            }), UT.markers.map((TT => (0, yz.jsx)("span", {
              className: "SkyblockMinimapLandmark",
              style: {
                left: `${TT.position[0]}%`,
                top: `${TT.position[1]}%`,
                color: TT.colour
              },
              title: TT.name,
              children: (0, yz.jsx)(Iz, {
                icon: TT.icon
              })
            }, TT.id)))]
          }), (0, yz.jsx)("div", {
            className: "SkyblockMinimapPlayer",
            title: zT("skyblockGame:mapYouAreHere"),
            children: (0, yz.jsx)(Iz, {
              icon: "player"
            })
          })]
        }), (0, yz.jsx)("div", {
          className: "SkyblockMinimapCaption",
          children: UT.caption
        })]
      })
    }

    function zM(TT) {
      let {
        controller: UT
      } = TT;
      return (0, yz.jsxs)("div", {
        className: "SkyblockCompass",
        ref: UT.display.mountCompass,
        children: [(0, yz.jsx)("span", {
          className: "SkyblockCompassArrow",
          "aria-hidden": "true",
          children: "\u25bc"
        }), (0, yz.jsx)("div", {
          className: "SkyblockCompassTrack",
          "aria-hidden": "true"
        }), (0, yz.jsx)("div", {
          className: "SkyblockCompassLabel"
        })]
      })
    }

    function MM(TT) {
      let {
        controller: UT,
        surface: mT
      } = TT;
      const {
        t: WT
      } = (0, tz.z)(), zT = (0, az.j)(gm, UT.getSnapshot()), MT = Kz();
      return zT.enabled ? (0, yz.jsxs)(yz.Fragment, {
        children: ["hud" === mT && (0, yz.jsx)(Yz.d, {
          placement: "statBars",
          children: zT.hud && (0, yz.jsxs)("div", {
            className: "SkyblockSkillsHudCompact",
            style: {
              "--skill-colour": zT.hud.colour
            },
            children: [(0, yz.jsx)(Sz, {
              percent: zT.hud.skill.percent,
              label: zT.hud.skill.xp,
              levelUpToken: zT.hud.levelUpToken,
              colour: zT.hud.colour
            }), (0, yz.jsxs)("div", {
              className: "SkyblockSkillsHudCompactText SmallTextBold",
              children: [(0, yz.jsxs)("span", {
                children: [zT.hud.skill.label, " \xb7 ", zT.hud.skill.level]
              }), (0, yz.jsx)("span", {
                children: zT.hud.gain
              })]
            })]
          })
        }), "hud" === mT && (0, yz.jsx)(Yz.d, {
          children: zT.hud && (0, yz.jsxs)("div", {
            className: "SkyblockSkillsHud",
            children: [(0, yz.jsxs)("div", {
              className: "SkyblockSkillsHudHeading",
              children: [(0, yz.jsx)("strong", {
                children: zT.hud.skill.label
              }), (0, yz.jsx)("span", {
                children: zT.hud.gain
              })]
            }), (0, yz.jsx)(Sz, {
              percent: zT.hud.skill.percent,
              label: zT.hud.skill.xp,
              levelUpToken: zT.hud.levelUpToken,
              colour: zT.hud.colour
            }), (0, yz.jsxs)("div", {
              className: "SkyblockSkillsHudProgress",
              children: [(0, yz.jsx)("span", {
                children: zT.hud.skill.level
              }), (0, yz.jsx)("span", {
                children: zT.hud.skill.xp
              })]
            })]
          })
        }), "menu" === mT && (0, yz.jsx)(uz.e, {
          show: zT.open,
          close: UT.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, yz.jsxs)("section", {
            className: "SkyblockSkillsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockSkillsTitle",
            tabIndex: -1,
            ref: MT,
            onKeyDown: rz,
            children: [(0, yz.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, yz.jsxs)("div", {
                children: [(0, yz.jsx)("h2", {
                  id: "skyblockSkillsTitle",
                  children: WT("skyblockGame:skills")
                }), (0, yz.jsx)("p", {
                  children: WT("skyblockGame:skillsIntro")
                })]
              }), (0, yz.jsx)(Cz.k, {
                padIgnore: !0,
                onClick: UT.dismiss
              })]
            }), (0, yz.jsxs)("div", {
              className: "SkyblockSkillsBody",
              children: [(0, yz.jsx)("div", {
                className: "SkyblockSkillsList",
                "data-pad-select-on-focus": !0,
                children: zT.skills.map((TT => (0, yz.jsxs)(Cz.e, {
                  className: Oz()("SkyblockSkillCard", {
                    Selected: TT.selected
                  }),
                  ariaPressed: TT.selected,
                  onClick: () => {
                    UT.select(TT.id)
                  },
                  children: [(0, yz.jsx)("div", {
                    className: "SkyblockSkillIcon",
                    children: (0, yz.jsx)(xz.b, {
                      itemName: TT.icon,
                      amount: 0
                    })
                  }), (0, yz.jsxs)("div", {
                    className: "SkyblockSkillSummary",
                    children: [(0, yz.jsxs)("div", {
                      className: "SkyblockSkillTitle",
                      children: [(0, yz.jsx)("strong", {
                        children: TT.label
                      }), (0, yz.jsx)("span", {
                        children: TT.level
                      })]
                    }), (0, yz.jsx)(Sz, {
                      percent: TT.percent,
                      label: `${TT.label}: ${TT.xp}`
                    }), (0, yz.jsx)("span", {
                      className: "SkyblockSkillXp",
                      children: TT.xp
                    })]
                  })]
                }, TT.id)))
              }), zT.detail && (0, yz.jsxs)("div", {
                className: "SkyblockSkillDetail",
                children: [(0, yz.jsx)("div", {
                  className: "SkyblockSkillDetailIcon",
                  children: (0, yz.jsx)(xz.b, {
                    itemName: zT.detail.icon,
                    amount: 0
                  })
                }), (0, yz.jsx)("h3", {
                  children: zT.detail.label
                }), (0, yz.jsx)("strong", {
                  className: "SkyblockSkillDetailLevel",
                  children: zT.detail.level
                }), (0, yz.jsx)("p", {
                  children: zT.detail.description
                }), (0, yz.jsxs)("div", {
                  className: "SkyblockSkillBenefit",
                  children: [(0, yz.jsx)("strong", {
                    children: WT("skyblockGame:currentBenefit")
                  }), (0, yz.jsx)("span", {
                    children: zT.detail.benefit
                  })]
                }), (0, yz.jsx)(Sz, {
                  percent: zT.detail.percent,
                  label: zT.detail.xp
                }), (0, yz.jsx)("p", {
                  children: zT.detail.xp
                }), (0, yz.jsx)("h4", {
                  children: WT("skyblockGame:earnXp")
                }), (0, yz.jsx)("ul", {
                  children: zT.detail.sources.map((TT => (0, yz.jsx)("li", {
                    children: TT
                  }, TT)))
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var gM = mT(1475),
      nM = mT(4936),
      HM = mT(351);

    function kM(TT) {
      let {
        item: UT
      } = TT;
      return (0, yz.jsx)("span", {
        className: "SkyblockQuestStepIcon",
        "aria-hidden": "true",
        children: (0, yz.jsx)(xz.b, {
          itemName: UT,
          amount: 0
        })
      })
    }

    function jM(TT) {
      let {
        name: UT,
        percent: mT,
        progress: WT
      } = TT;
      return (0, yz.jsxs)("span", {
        className: "SkyblockQuestStepBar",
        children: [(0, yz.jsx)(Sz, {
          percent: mT,
          label: `${(0,HM.fb)(UT)}: ${WT}`
        }), (0, yz.jsx)("span", {
          className: "SkyblockQuestStepBarLabel",
          children: WT
        })]
      })
    }

    function lM(TT) {
      let {
        subquests: UT,
        showDescriptions: mT = !1
      } = TT;
      return (0, yz.jsx)("ul", {
        className: "SkyblockQuestChecklist",
        children: UT.map((TT => {
          const UT = mT && "completed" === TT.status,
            WT = (0, yz.jsxs)("li", {
              className: Oz()("SkyblockQuestStep", TT.status, {
                JustFinished: TT.justFinished,
                JustUnlocked: TT.justUnlocked
              }),
              tabIndex: UT ? 0 : void 0,
              children: [null !== TT.iconItem && (0, yz.jsx)(kM, {
                item: TT.iconItem
              }), null === TT.iconItem && (0, yz.jsx)("span", {
                className: "SkyblockQuestStepMark",
                "aria-hidden": "true",
                children: "completed" === TT.status ? "\u2713" : "skipped" === TT.status ? "\u2212" : "\u25cb"
              }), (0, yz.jsxs)("span", {
                className: "SkyblockQuestStepBody",
                children: [(0, yz.jsx)("strong", {
                  children: (0, yz.jsx)(nM.b, {
                    text: TT.name
                  })
                }), mT && !UT && (0, yz.jsx)("span", {
                  children: (0, yz.jsx)(nM.b, {
                    text: TT.description
                  })
                }), null !== TT.barPercent && (0, yz.jsx)(jM, {
                  name: TT.name,
                  percent: TT.barPercent,
                  progress: TT.progress
                }), null === TT.barPercent && !UT && (0, yz.jsx)("span", {
                  className: "SkyblockQuestStepStatus",
                  children: TT.statusLabel
                })]
              })]
            }, TT.id);
          return UT ? (0, yz.jsx)(gM.e, {
            delayShow: 200,
            tooltipInner: (0, yz.jsxs)("div", {
              className: "SkyblockQuestStepTooltip",
              children: [(0, yz.jsx)("span", {
                children: (0, yz.jsx)(nM.b, {
                  text: TT.description
                })
              }), (0, yz.jsx)("strong", {
                children: TT.statusLabel
              })]
            }),
            children: WT
          }, TT.id) : WT
        }))
      })
    }

    function LM(TT) {
      let {
        quest: UT,
        select: mT
      } = TT;
      const {
        t: WT
      } = (0, tz.z)(), zT = UT.focusStep;
      return (0, yz.jsxs)(Cz.e, {
        className: Oz()("SkyblockQuestCard", {
          Selected: UT.selected,
          Tracked: UT.tracked
        }),
        onClick: () => {
          mT(UT.id)
        },
        children: [(0, yz.jsxs)("div", {
          className: "SkyblockQuestCardTitle",
          children: [(0, yz.jsx)("strong", {
            children: (0, yz.jsx)(nM.b, {
              text: UT.name
            })
          }), UT.tracked && (0, yz.jsx)("span", {
            className: "SkyblockQuestTrackingBadge",
            children: WT("skyblockGame:currentQuest")
          })]
        }), zT && (0, yz.jsxs)("div", {
          className: "SkyblockQuestCardStep",
          children: [null !== zT.iconItem && (0, yz.jsx)(kM, {
            item: zT.iconItem
          }), (0, yz.jsx)(jM, {
            name: zT.name,
            percent: zT.barPercent,
            progress: zT.progress
          })]
        }), (0, yz.jsx)("span", {
          className: "SkyblockQuestProgress",
          children: UT.progress
        })]
      })
    }

    function pM(TT) {
      let {
        controller: UT,
        surface: mT
      } = TT;
      const WT = (0, az.j)(jm, UT.getSnapshot()),
        {
          t: zT
        } = (0, tz.z)(),
        MT = Kz();
      return WT.enabled ? (0, yz.jsxs)(yz.Fragment, {
        children: ["hud" === mT && (0, yz.jsx)(yz.Fragment, {
          children: WT.tracked && (0, yz.jsx)("div", {
            className: "SkyblockQuestTracker",
            style: km,
            children: (0, yz.jsxs)("div", {
              className: "SkyblockQuestTrackerBody",
              children: [WT.trackedStepPulse > 0 && (0, yz.jsx)("span", {
                className: "SkyblockQuestTrackerPulse",
                "aria-hidden": "true"
              }, WT.trackedStepPulse), (0, yz.jsx)("span", {
                className: "SkyblockQuestEyebrow",
                children: zT("skyblockGame:currentQuest")
              }), (0, yz.jsxs)("span", {
                className: "SkyblockQuestTrackerTitle",
                children: [(0, yz.jsx)("strong", {
                  children: (0, yz.jsx)(nM.b, {
                    text: WT.tracked.name
                  })
                }), null !== WT.tracked.clock && (0, yz.jsx)("span", {
                  className: "SkyblockQuestClock",
                  children: WT.tracked.clock
                })]
              }), (0, yz.jsx)(lM, {
                subquests: WT.tracked.subquests
              })]
            })
          })
        }), "menu" === mT && (0, yz.jsx)(uz.e, {
          show: WT.open,
          close: UT.dismiss,
          togglePointerLock: !1,
          className: "SkyblockSkillsOverlay",
          children: (0, yz.jsxs)("section", {
            className: "SkyblockSkillsPanel SkyblockQuestsPanel",
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "skyblockQuestsTitle",
            tabIndex: -1,
            ref: MT,
            onKeyDown: rz,
            children: [(0, yz.jsxs)("header", {
              className: "SkyblockSkillsHeader",
              children: [(0, yz.jsx)("div", {
                children: (0, yz.jsx)("h2", {
                  id: "skyblockQuestsTitle",
                  children: zT("skyblockGame:quests")
                })
              }), (0, yz.jsx)(Cz.k, {
                padIgnore: !0,
                onClick: UT.dismiss
              })]
            }), (0, yz.jsxs)("div", {
              className: "SkyblockSkillsBody SkyblockQuestsBody",
              children: [(0, yz.jsxs)("div", {
                className: "SkyblockQuestList",
                children: [(0, yz.jsx)("h3", {
                  children: zT("skyblockGame:current")
                }), 0 === WT.active.length && (0, yz.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: zT("skyblockGame:noActiveQuests")
                }), WT.active.map((TT => (0, yz.jsx)(LM, {
                  quest: TT,
                  select: UT.select
                }, TT.id))), (0, yz.jsx)("h3", {
                  children: (0, yz.jsxs)("button", {
                    type: "button",
                    className: Oz()("SkyblockQuestSectionToggle", {
                      Expanded: WT.completedExpanded
                    }),
                    "aria-expanded": WT.completedExpanded,
                    onClick: UT.toggleCompleted,
                    children: [(0, yz.jsx)("span", {
                      className: "SkyblockQuestSectionCaret",
                      "aria-hidden": "true"
                    }), zT("skyblockGame:completed"), (0, yz.jsx)("span", {
                      className: "SkyblockQuestSectionCount",
                      children: WT.completed.length
                    })]
                  })
                }), WT.completedExpanded && 0 === WT.completed.length && (0, yz.jsx)("p", {
                  className: "SkyblockQuestEmpty",
                  children: zT("skyblockGame:noCompletedQuests")
                }), WT.completedExpanded && WT.completed.map((TT => (0, yz.jsx)(LM, {
                  quest: TT,
                  select: UT.select
                }, TT.id)))]
              }), WT.detail && (0, yz.jsxs)("div", {
                className: "SkyblockQuestDetail",
                children: [WT.detail.completed && (0, yz.jsx)("span", {
                  className: "SkyblockQuestEyebrow",
                  children: zT("skyblockGame:completedQuest")
                }), (0, yz.jsx)("h3", {
                  children: (0, yz.jsx)(nM.b, {
                    text: WT.detail.name
                  })
                }), (0, yz.jsx)("p", {
                  className: "SkyblockQuestDescription",
                  children: (0, yz.jsx)(nM.b, {
                    text: WT.detail.description
                  })
                }), (0, yz.jsxs)("p", {
                  className: "SkyblockQuestProgress",
                  children: [WT.detail.progress, null !== WT.detail.clock && (0, yz.jsx)("span", {
                    className: "SkyblockQuestClock",
                    children: WT.detail.clock
                  })]
                }), (0, yz.jsx)(lM, {
                  subquests: WT.detail.subquests,
                  showDescriptions: !0
                }), WT.detail.tracked && (0, yz.jsx)("p", {
                  className: "SkyblockQuestTrackingStatus",
                  children: WT.detail.trackLabel
                }), !WT.detail.completed && !WT.detail.tracked && (0, yz.jsx)(Cz.l, {
                  onClick: UT.trackSelected,
                  disabled: !WT.detail.canTrack,
                  children: WT.detail.trackLabel
                }), WT.detail.canViewDialogue && (0, yz.jsx)(Cz.e, {
                  className: "SkyblockQuestViewDialogue",
                  onClick: UT.viewDialogue,
                  children: zT("skyblockDialogue:viewDialogue")
                })]
              })]
            })]
          })
        })]
      }) : null
    }
    var BM = mT(1135),
      ZM = mT(2731);

    function cM(TT, UT, mT, WT, zT) {
      const MT = TT => "linear" === zT ? TT : {
          oW: zT,
          point: TT
        },
        gT = {};
      for (const [nT, HT] of WT)
        for (const [UT, mT] of Object.entries(TT(nT, HT, MT))) gT[UT] ??= {
          timeline: []
        }, gT[UT].timeline.push(mT);
      return {
        GW: UT,
        loop: mT,
        EW: gT
      }
    }
    const vM = .547,
      fM = .022,
      qM = {
        drop: -.03,
        torso: -.28,
        nod: -.4,
        arms: -2.85,
        spread: .18
      },
      iM = {
        drop: .22,
        torso: .7,
        nod: -.25,
        legs: [-.35, .25],
        arms: -1.05,
        spread: .12
      };

    function bM(TT, UT, mT) {
      const {
        drop: WT = 0,
        shift: zT = 0,
        torso: MT = 0,
        nod: gT = 0,
        tilt: nT = 0,
        legs: HT = [0, 0],
        arms: kT = 0,
        spread: jT = 0
      } = UT, lT = vM * Math.cos(MT) - fM * Math.sin(MT), LT = vM * Math.sin(MT) + fM * Math.cos(MT), pT = mT([0, -WT, zT]);
      return {
        LowerBody: {
          timeFraction: TT,
          position: pT,
          rotation: mT([0, 0, 0])
        },
        UpperBody: {
          timeFraction: TT,
          position: pT,
          rotation: mT([MT, 0, nT])
        },
        HeadMesh: {
          timeFraction: TT,
          position: mT([0, lT - vM - WT, LT - fM + zT]),
          rotation: mT([MT + gT, 0, nT])
        },
        LegLeftMesh: {
          timeFraction: TT,
          rotation: mT([HT[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: TT,
          rotation: mT([HT[1], 0, 0])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: mT([kT, 0, jT])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: mT([kT, 0, -jT])
        }
      }
    }

    function OM(TT, UT, mT) {
      return cM(bM, TT, UT, mT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
    }

    function eM(TT) {
      return "number" === typeof TT ? [TT, TT] : TT
    }

    function YM(TT, UT, mT) {
      const {
        rise: WT = 0,
        shift: zT = 0,
        torso: MT = 0,
        twist: gT = 0,
        tilt: nT = 0,
        nod: HT = 0,
        cock: kT = 0,
        arms: jT = 0,
        spread: lT = 0
      } = UT, [LT, pT] = eM(jT), [BT, ZT] = eM(lT);
      return {
        TorsoNode: {
          timeFraction: TT,
          position: mT([0, WT, zT]),
          rotation: mT([MT, gT, nT])
        },
        HeadMesh: {
          timeFraction: TT,
          rotation: mT([HT, 0, kT])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: mT([LT, 0, BT])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: mT([pT, 0, -ZT])
        }
      }
    }
    const JM = [1.0625, -1, 0];

    function xM(TT) {
      return "number" === typeof TT ? [TT, TT] : TT
    }

    function dM(TT, UT, mT) {
      const {
        drop: WT = 0,
        shift: zT = 0,
        torso: MT = 0,
        tilt: gT = 0,
        nod: nT = 0,
        cock: HT = 0,
        legs: kT = [0, 0],
        arms: jT = 0,
        spread: lT = 0
      } = UT, [LT, pT] = xM(jT), [BT, ZT] = xM(lT), cT = -MT, vT = -gT, [fT, qT, iT] = function(TT, UT) {
        const [mT, WT, zT] = [-JM[0], JM[1], -JM[2]], MT = mT * Math.cos(UT) - WT * Math.sin(UT), gT = mT * Math.sin(UT) + WT * Math.cos(UT);
        return [MT - mT, -(gT * Math.cos(TT) - zT * Math.sin(TT) - WT), gT * Math.sin(TT) + zT * Math.cos(TT) - zT]
      }(cT, vT), bT = mT([0, -WT, zT]);
      return {
        TorsoNode: {
          timeFraction: TT,
          position: mT([fT, qT - WT, iT + zT]),
          rotation: mT([cT, 0, vT])
        },
        HeadMesh: {
          timeFraction: TT,
          rotation: mT([-nT, 0, -HT])
        },
        ArmLeftMesh: {
          timeFraction: TT,
          rotation: mT([-LT, 0, -BT])
        },
        ArmRightMesh: {
          timeFraction: TT,
          rotation: mT([-pT, 0, ZT])
        },
        LegLeftMesh: {
          timeFraction: TT,
          position: bT,
          rotation: mT([-kT[0], 0, 0])
        },
        LegRightMesh: {
          timeFraction: TT,
          position: bT,
          rotation: mT([-kT[1], 0, 0])
        }
      }
    }
    var wM = mT(37266),
      tM = mT(38598),
      aM = mT(38762);

    function yM(TT, UT, mT) {
      var WT, zT;
      const MT = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return TT + ((arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0) - TT) * mT
        },
        [gT, nT] = null !== (WT = TT.legs) && void 0 !== WT ? WT : [0, 0],
        [HT, kT] = null !== (zT = UT.legs) && void 0 !== zT ? zT : [0, 0];
      return {
        drop: MT(TT.drop, UT.drop),
        shift: MT(TT.shift, UT.shift),
        torso: MT(TT.torso, UT.torso),
        nod: MT(TT.nod, UT.nod),
        tilt: MT(TT.tilt, UT.tilt),
        legs: [MT(gT, HT), MT(nT, kT)],
        arms: MT(TT.arms, UT.arms),
        spread: MT(TT.spread, UT.spread)
      }
    }
    const XM = {
        drop: .1,
        torso: .22,
        nod: -.32,
        legs: [-.2, .18],
        arms: -.75,
        spread: .32
      },
      IM = OM(4400, !0, [
        [0, XM],
        [.16, {
          ...XM,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.3, XM],
        [.44, {
          ...XM,
          drop: .06,
          torso: .16,
          arms: -.85
        }],
        [.56, yM(XM, qM, .7)],
        [.66, yM(XM, qM, .78)],
        [.74, yM(XM, iM, .65)],
        [.86, {
          ...XM,
          drop: .14
        }],
        [1, XM]
      ], "catmull-rom-spline"),
      QM = {
        ...XM,
        drop: .14,
        torso: .3,
        spread: .4
      },
      sM = {
        rise: .15,
        torso: .15,
        nod: -.25,
        arms: -.6,
        spread: .35
      },
      FM = {
        drop: .06,
        torso: .18,
        nod: -.25,
        legs: [-.12, .1],
        arms: -.45,
        spread: .45
      },
      PM = {
        caveGolem: IM,
        magmaGolem: OM(3600, !0, [
          [0, QM],
          [.12, {
            ...QM,
            tilt: .08,
            drop: .11
          }],
          [.26, {
            ...QM,
            tilt: -.08
          }],
          [.4, {
            ...QM,
            tilt: .06,
            drop: .11
          }],
          [.52, yM(QM, qM, .9)],
          [.62, yM(QM, iM, .8)],
          [.7, yM(QM, iM, .45)],
          [.78, yM(QM, iM, .85)],
          [.9, {
            ...QM,
            drop: .17
          }],
          [1, QM]
        ], "catmull-rom-spline"),
        frostWraith: function(TT, UT, mT) {
          return cM(YM, TT, UT, mT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4800, !0, [
          [0, sM],
          [.14, {
            ...sM,
            rise: .25,
            tilt: .06
          }],
          [.28, {
            ...sM,
            rise: .12,
            tilt: -.04
          }],
          [.42, {
            ...sM,
            rise: .24,
            tilt: .04
          }],
          [.54, {
            ...sM,
            rise: .22,
            twist: .2,
            arms: [-.3, -1.6],
            spread: [.4, .05]
          }],
          [.64, {
            ...sM,
            rise: .26,
            twist: .2,
            torso: .05,
            arms: [-.3, -1.9],
            spread: [.4, .05]
          }],
          [.72, {
            ...sM,
            rise: .1,
            twist: .22,
            torso: .35,
            nod: -.1,
            arms: [-.25, -1.1],
            spread: [.4, -.05]
          }],
          [.86, {
            ...sM,
            rise: .16,
            tilt: -.04
          }],
          [1, sM]
        ], "catmull-rom-spline"),
        tikiTerror: function(TT, UT, mT) {
          return cM(dM, TT, UT, mT, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "linear")
        }(4400, !0, [
          [0, FM],
          [.16, {
            ...FM,
            drop: .02,
            torso: .12,
            arms: -.55,
            spread: .52
          }],
          [.3, FM],
          [.44, {
            ...FM,
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
            ...FM,
            drop: .1
          }],
          [1, FM]
        ], "catmull-rom-spline")
      },
      VM = {
        golem: "caveGolem",
        wraith: "frostWraith",
        tiki: "tikiTerror"
      },
      uM = {
        "Cave Golem": "caveGolem",
        "Magma Golem": "magmaGolem"
      },
      CM = Object.fromEntries(Object.entries(PM).map((TT => {
        let [UT, mT] = TT;
        return [UT, (0, aM.c)((0, wM.f)(mT), UT)]
      })));

    function rM(TT) {
      const UT = function(TT) {
        var UT;
        const mT = (0, tM.d)(TT).poseRig;
        return null !== (UT = uM[TT]) && void 0 !== UT ? UT : void 0 === mT ? null : VM[mT]
      }(TT);
      return null === UT ? null : CM[UT]
    }

    function KM(TT) {
      return {
        "--difficulty-colour": TT
      }
    }
    const SM = (0, JT.lazy)((() => (0, ZM.b)(mT.e(203).then((() => mT(41655))), (TT => TT.MobPreview))));

    function GM(TT) {
      var UT, mT, WT;
      let {
        picker: zT,
        controller: MT
      } = TT;
      const {
        t: gT
      } = (0, tz.z)(), nT = Kz(), {
        page: HT
      } = zT;
      return (0, yz.jsxs)("section", {
        className: "SkyblockSkillsPanel SkyblockBossPicker",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "skyblockBossPickerTitle",
        tabIndex: -1,
        ref: nT,
        onKeyDown: TT => {
          "ArrowLeft" === TT.key ? (TT.preventDefault(), TT.stopPropagation(), MT.previous()) : "ArrowRight" === TT.key ? (TT.preventDefault(), TT.stopPropagation(), MT.next()) : rz(TT)
        },
        style: KM(HT.colour),
        children: [(0, yz.jsxs)("header", {
          className: "SkyblockSkillsHeader",
          children: [(0, yz.jsx)("h2", {
            id: "skyblockBossPickerTitle",
            children: zT.dungeonName
          }), (0, yz.jsx)(Cz.k, {
            padIgnore: !0,
            onClick: MT.dismiss
          })]
        }), (0, yz.jsxs)("div", {
          className: "SkyblockBossPickerBody",
          children: [(0, yz.jsxs)("div", {
            className: "SkyblockBossPickerStage",
            children: [(0, yz.jsx)(Cz.e, {
              className: "SkyblockBossPickerTurn Previous",
              disabled: !zT.canPrevious,
              onClick: MT.previous,
              children: (0, yz.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, yz.jsx)(BM.c, {
                  name: "angle-up"
                })
              })
            }), (0, yz.jsxs)("div", {
              className: Oz()("SkyblockBossPickerBoss", {
                Locked: !HT.unlocked
              }),
              children: [null !== HT.bossMobType && (0, yz.jsx)(JT.Suspense, {
                fallback: (0, yz.jsx)("div", {
                  className: "SkyblockBossPickerModel"
                }),
                children: (0, yz.jsx)(SM, {
                  className: "SkyblockBossPickerModel",
                  mobType: HT.bossMobType,
                  variation: HT.bossMobVariation,
                  animation: null !== (UT = rM(HT.bossMobType)) && void 0 !== UT ? UT : void 0
                })
              }), null === HT.bossMobType && (0, yz.jsx)("div", {
                className: "SkyblockBossPickerModel SkyblockBossPickerUnknown",
                "aria-hidden": "true",
                children: "?"
              })]
            }), (0, yz.jsx)(Cz.e, {
              className: "SkyblockBossPickerTurn Next",
              disabled: !zT.canNext,
              onClick: MT.next,
              children: (0, yz.jsx)("span", {
                className: "SkyblockBossPickerChevron",
                children: (0, yz.jsx)(BM.c, {
                  name: "angle-up"
                })
              })
            })]
          }), (0, yz.jsxs)("div", {
            className: "SkyblockBossPickerCaption",
            children: [(0, yz.jsxs)("span", {
              className: "SkyblockBossPickerDifficulty",
              children: [HT.beaten && (0, yz.jsx)("span", {
                "aria-hidden": "true",
                children: "\u2713 "
              }), HT.label]
            }), (0, yz.jsx)("strong", {
              className: "SkyblockBossPickerName",
              children: null !== (mT = HT.bossName) && void 0 !== mT ? mT : "???"
            }), (0, yz.jsxs)("span", {
              className: Oz()("SkyblockBossPickerRecord", {
                Locked: null !== HT.lockedHint
              }),
              children: [null !== HT.lockedHintHighlight && (0, yz.jsxs)(yz.Fragment, {
                children: [HT.lockedHintHighlight.before, (0, yz.jsxs)("span", {
                  className: "SkyblockDifficulty",
                  style: KM(HT.lockedHintHighlight.colour),
                  children: [null !== HT.lockedHintHighlight.icon && (0, yz.jsx)("span", {
                    className: "SkyblockBossPickerHintIcon",
                    "aria-hidden": "true",
                    children: (0, yz.jsx)(xz.b, {
                      itemName: HT.lockedHintHighlight.icon,
                      amount: 0
                    })
                  }), HT.lockedHintHighlight.name]
                }), HT.lockedHintHighlight.after]
              }), null === HT.lockedHintHighlight && (null !== (WT = HT.lockedHint) && void 0 !== WT ? WT : HT.summary)]
            })]
          }), (0, yz.jsx)("div", {
            className: "SkyblockBossPickerDots",
            "aria-hidden": "true",
            children: zT.pages.map((TT => (0, yz.jsx)("span", {
              className: Oz()("SkyblockBossPickerDot", {
                Current: TT.current,
                Locked: !TT.unlocked
              }),
              style: KM(TT.colour)
            }, TT.difficulty)))
          }), (0, yz.jsx)(Cz.s, {
            className: "SkyblockBossPickerFight",
            disabled: !HT.unlocked,
            onClick: MT.enter,
            children: gT("skyblockGame:dungeonFight")
          })]
        })]
      })
    }

    function NM(TT) {
      let {
        dungeon: UT,
        select: mT
      } = TT;
      return (0, yz.jsxs)(Cz.e, {
        className: Oz()("SkyblockDungeonCard", {
          Selected: UT.selected
        }),
        onClick: () => {
          mT(UT.id)
        },
        children: [(0, yz.jsxs)("div", {
          className: "SkyblockDungeonCardTitle",
          children: [(0, yz.jsx)("strong", {
            children: UT.name
          }), (0, yz.jsx)("span", {
            children: UT.beatenSummary
          })]
        }), (0, yz.jsx)("div", {
          className: "SkyblockDungeonChips",
          children: UT.difficulties.map((TT => (0, yz.jsxs)("span", {
            className: Oz()("SkyblockDungeonChip", "SkyblockDifficulty", {
              Beaten: TT.beaten
            }),
            style: KM(TT.colour),
            title: TT.summary,
            children: [TT.beaten && (0, yz.jsx)("span", {
              "aria-hidden": "true",
              children: "\u2713 "
            }), TT.label]
          }, TT.difficulty)))
        })]
      })
    }

    function EM(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(Bm, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = Kz();
      return mT.enabled ? (0, yz.jsxs)(uz.e, {
        show: mT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: [mT.picker && (0, yz.jsx)(GM, {
          picker: mT.picker,
          controller: UT
        }), !mT.picker && (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDungeonsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDungeonsTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockDungeonsTitle",
                children: WT("skyblockGame:dungeons")
              }), (0, yz.jsx)("p", {
                children: WT("skyblockGame:dungeonsIntro")
              })]
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              onClick: UT.dismiss
            })]
          }), (0, yz.jsxs)("div", {
            className: "SkyblockSkillsBody SkyblockDungeonsBody",
            children: [(0, yz.jsx)("div", {
              className: "SkyblockDungeonList",
              children: mT.dungeons.map((TT => (0, yz.jsx)(NM, {
                dungeon: TT,
                select: UT.select
              }, TT.id)))
            }), mT.detail && (0, yz.jsxs)("div", {
              className: "SkyblockDungeonDetail",
              children: [(0, yz.jsx)("h3", {
                children: mT.detail.name
              }), (0, yz.jsx)("ul", {
                className: "SkyblockDungeonRecords",
                children: mT.detail.difficulties.map((TT => (0, yz.jsxs)("li", {
                  className: Oz()("SkyblockDungeonRecord", {
                    Beaten: TT.beaten
                  }),
                  children: [(0, yz.jsxs)("span", {
                    className: "SkyblockDungeonRecordName SkyblockDifficulty",
                    style: KM(TT.colour),
                    children: [TT.beaten && (0, yz.jsx)("span", {
                      "aria-hidden": "true",
                      children: "\u2713 "
                    }), TT.label]
                  }), (0, yz.jsx)("span", {
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

    function hM(TT) {
      let {
        collection: UT,
        select: mT
      } = TT;
      return (0, yz.jsxs)(Cz.e, {
        className: Oz()("SkyblockSkillCard", "SkyblockCollectionCard", {
          Selected: UT.selected,
          Locked: UT.locked
        }),
        ariaPressed: UT.selected,
        onClick: () => {
          mT(UT.id)
        },
        children: [(0, yz.jsx)("div", {
          className: "SkyblockSkillIcon",
          children: (0, yz.jsx)(xz.b, {
            itemName: UT.icon,
            amount: 0
          })
        }), (0, yz.jsxs)("div", {
          className: "SkyblockSkillSummary",
          children: [(0, yz.jsxs)("div", {
            className: "SkyblockSkillTitle",
            children: [(0, yz.jsx)("strong", {
              children: UT.name
            }), (0, yz.jsx)("span", {
              children: UT.tier
            })]
          }), (0, yz.jsx)(Sz, {
            percent: UT.percent,
            label: `${UT.name}: ${UT.progress}`
          }), (0, yz.jsx)("span", {
            className: "SkyblockSkillXp",
            children: UT.progress
          })]
        })]
      })
    }

    function DM(TT) {
      let {
        collection: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)();
      return (0, yz.jsxs)("div", {
        className: "SkyblockSkillDetail SkyblockCollectionDetail",
        children: [(0, yz.jsx)("div", {
          className: "SkyblockSkillDetailIcon",
          children: (0, yz.jsx)(xz.b, {
            itemName: UT.icon,
            amount: 0
          })
        }), (0, yz.jsx)("h3", {
          children: UT.name
        }), (0, yz.jsx)("strong", {
          className: "SkyblockSkillDetailLevel",
          children: UT.tier
        }), (0, yz.jsx)("p", {
          children: UT.locked ? mT("skyblockGame:collectionLocked") : UT.count
        }), null !== UT.nextReward && (0, yz.jsxs)("div", {
          className: "SkyblockSkillBenefit",
          children: [(0, yz.jsx)("strong", {
            children: mT("skyblockGame:collectionNextReward")
          }), (0, yz.jsx)("span", {
            children: UT.nextReward
          })]
        }), (0, yz.jsx)(Sz, {
          percent: UT.percent,
          label: UT.progress
        }), (0, yz.jsx)("p", {
          children: UT.progress
        })]
      })
    }

    function oM(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(Fm, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = Kz();
      return mT.enabled ? (0, yz.jsx)(uz.e, {
        show: mT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockCollectionsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockCollectionsTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockCollectionsTitle",
                children: WT("skyblockGame:collections")
              }), (0, yz.jsxs)("p", {
                children: [WT("skyblockGame:collectionsIntro"), " ", mT.tiersUnlocked]
              })]
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              onClick: UT.dismiss
            })]
          }), (0, yz.jsx)("div", {
            className: "SkyblockCollectionCategories",
            "data-pad-tabs": "1",
            children: mT.categories.map((TT => (0, yz.jsxs)(Cz.e, {
              className: Oz()("SkyblockCollectionCategory", {
                Selected: TT.selected
              }),
              ariaPressed: TT.selected,
              padTabSelected: TT.selected,
              onClick: () => {
                UT.selectCategory(TT.id)
              },
              children: [(0, yz.jsx)("span", {
                className: "SkyblockCollectionCategoryIcon",
                children: (0, yz.jsx)(xz.b, {
                  itemName: TT.icon,
                  amount: 0
                })
              }), (0, yz.jsxs)("span", {
                className: "SkyblockCollectionCategoryText",
                children: [(0, yz.jsx)("strong", {
                  children: TT.label
                }), (0, yz.jsx)("span", {
                  children: TT.tiers
                })]
              })]
            }, TT.id)))
          }), (0, yz.jsxs)("div", {
            className: "SkyblockSkillsBody",
            children: [(0, yz.jsx)("div", {
              className: "SkyblockSkillsList",
              "data-pad-select-on-focus": !0,
              children: mT.collections.map((TT => (0, yz.jsx)(hM, {
                collection: TT,
                select: UT.select
              }, TT.id)))
            }), mT.detail && (0, yz.jsx)(DM, {
              collection: mT.detail
            })]
          })]
        })
      }) : null
    }
    const AM = ["completed", "active", "available", "locked"],
      RM = ["prerequisite", "acceptFirst", "sends", "awaits"];

    function Tg(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(Dm, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = Kz();
      return mT.enabled ? (0, yz.jsx)(uz.e, {
        show: mT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockQuestGraphPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockQuestGraphTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockQuestGraphTitle",
                children: WT("skyblockDevQuests:title")
              }), (0, yz.jsx)("p", {
                children: WT("skyblockDevQuests:intro")
              })]
            }), (0, yz.jsx)(Cz.k, {
              onClick: UT.dismiss
            })]
          }), (0, yz.jsxs)("div", {
            className: "SkyblockQuestGraphLegend",
            children: [AM.map((TT => (0, yz.jsx)("span", {
              className: Oz()("SkyblockQuestGraphLegendState", TT),
              children: WT(`skyblockDevQuests:state_${TT}`)
            }, TT))), RM.map((TT => (0, yz.jsxs)("span", {
              className: "SkyblockQuestGraphLegendEdge",
              children: [(0, yz.jsx)("svg", {
                width: "28",
                height: "8",
                "aria-hidden": "true",
                children: (0, yz.jsx)("line", {
                  className: Oz()("SkyblockQuestGraphEdge", TT),
                  x1: "0",
                  y1: "4",
                  x2: "28",
                  y2: "4"
                })
              }), WT(`skyblockDevQuests:edge_${TT}`)]
            }, TT)))]
          }), (0, yz.jsx)("div", {
            className: "SkyblockQuestGraphScroll",
            children: (0, yz.jsxs)("div", {
              className: Oz()("SkyblockQuestGraphCanvas", {
                Planning: mT.planning
              }),
              style: {
                width: mT.width,
                height: mT.height
              },
              children: [(0, yz.jsxs)("svg", {
                className: "SkyblockQuestGraphEdges",
                width: mT.width,
                height: mT.height,
                "aria-hidden": "true",
                children: [(0, yz.jsx)("defs", {
                  children: (0, yz.jsx)("marker", {
                    id: "skyblockQuestGraphArrow",
                    viewBox: "0 0 8 8",
                    refX: "7",
                    refY: "4",
                    markerWidth: "6",
                    markerHeight: "6",
                    orient: "auto-start-reverse",
                    children: (0, yz.jsx)("path", {
                      className: "SkyblockQuestGraphArrow",
                      d: "M 0 0 L 8 4 L 0 8 z"
                    })
                  })
                }), mT.edges.map((TT => (0, yz.jsx)("path", {
                  className: Oz()("SkyblockQuestGraphEdge", TT.kind, {
                    InPlan: TT.inPlan
                  }),
                  d: TT.path,
                  markerEnd: "url(#skyblockQuestGraphArrow)"
                }, TT.key)))]
              }), mT.nodes.map((TT => (0, yz.jsxs)("button", {
                type: "button",
                className: Oz()("SkyblockQuestGraphNode", TT.state, {
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
                  UT.hover(TT.id)
                },
                onMouseLeave: () => {
                  UT.hover(null)
                },
                onFocus: () => {
                  UT.hover(TT.id)
                },
                onBlur: () => {
                  UT.hover(null)
                },
                onClick: () => {
                  UT.jump(TT.id)
                },
                children: [(0, yz.jsx)("strong", {
                  children: TT.name
                }), (0, yz.jsx)("span", {
                  children: TT.detail
                })]
              }, TT.id)))]
            })
          })]
        })
      }) : null
    }
    const Ug = ["skyblockGame:forgeStatPower", "skyblockGame:forgeStatDamage", "skyblockGame:forgeStatSpeed", "skyblockGame:forgeStatKnockback"],
      mg = {
        "--impact": "250ms",
        "--hold": "50ms",
        "--pop-at": `${kW}ms`,
        "--forge-duration": "2150ms"
      },
      Wg = Array.from({
        length: 18
      }, ((TT, UT) => ({
        "--ember-left": `${(4+92*(.618034*UT%1)).toFixed(1)}%`,
        "--ember-size": 3 + UT % 3 * 2 + "px",
        "--ember-drift": 14 * (UT % 5 - 2) + "px",
        "--ember-duration": `${(5.5+7*UT%5*.9).toFixed(1)}s`,
        "--ember-delay": `${(-1.37*UT%8).toFixed(2)}s`
      })));

    function zg(TT) {
      if (TT.style.removeProperty("--part-size"), null === TT.parentElement || "wrap" === getComputedStyle(TT.parentElement).flexWrap) return;
      const UT = [...TT.children],
        mT = getComputedStyle(TT),
        WT = parseFloat(mT.getPropertyValue("--part-size")) * parseFloat(getComputedStyle(document.documentElement).fontSize),
        zT = (TT.clientHeight - parseFloat(mT.rowGap) * (UT.length - 1)) / UT.length,
        MT = UT.map((TT => {
          const UT = getComputedStyle(TT),
            mT = TT.querySelector("h3"),
            MT = TT.querySelector(".SkyblockForgeParts");
          if (null === mT || null === MT) return WT;
          const gT = zT - parseFloat(UT.paddingTop) - parseFloat(UT.paddingBottom) - mT.offsetHeight - parseFloat(getComputedStyle(mT).marginBottom),
            nT = parseFloat(getComputedStyle(MT).columnGap),
            HT = MT.children.length;
          let kT = 0;
          for (let WT = 1; WT <= HT; WT++) {
            const TT = Math.ceil(HT / WT);
            kT = Math.max(kT, Math.min((MT.clientWidth - nT * (WT - 1)) / WT, (gT - nT * (TT - 1)) / TT))
          }
          return kT
        }));
      TT.style.setProperty("--part-size", `${Math.floor(Math.max(WT,Math.min(...MT)))}px`)
    }

    function Mg(TT) {
      var UT, mT, WT, MT, gT;
      let {
        controller: nT
      } = TT;
      const HT = (0, az.j)(cW, nT.getSnapshot()),
        {
          t: kT
        } = (0, tz.z)(),
        jT = Kz(),
        lT = function() {
          const TT = (0, JT.useRef)(null),
            UT = (0, JT.useRef)(null);
          return (0, JT.useLayoutEffect)((() => {
            null !== TT.current && zg(TT.current)
          })), (0, JT.useCallback)((mT => {
            var WT;
            null === (WT = UT.current) || void 0 === WT || WT.disconnect(), UT.current = null, TT.current = mT, null !== mT && (UT.current = new ResizeObserver((() => {
              zg(mT)
            })), UT.current.observe(mT))
          }), [])
        }(),
        LT = function(TT) {
          const UT = (0, JT.useRef)(null);
          return (0, JT.useLayoutEffect)((() => {
            const TT = UT.current;
            if (null !== TT) {
              TT.style.removeProperty("font-size");
              for (let UT = 1.7; UT > 1.1 && TT.scrollWidth > TT.clientWidth; UT -= .1) TT.style.fontSize = UT - .1 + "rem"
            }
          }), [TT]), (0, JT.useCallback)((TT => {
            UT.current = TT
          }), [])
        }(null === (UT = HT.preview) || void 0 === UT ? void 0 : UT.name),
        pT = (0, JT.useRef)(null),
        BT = (0, JT.useRef)({}),
        ZT = HT.forging,
        cT = null !== (mT = null === ZT || void 0 === ZT ? void 0 : ZT.preview.tier) && void 0 !== mT ? mT : 0,
        vT = null !== (WT = null === ZT || void 0 === ZT ? void 0 : ZT.preview.named) && void 0 !== WT && WT,
        fT = (0, JT.useMemo)((() => {
          return null === ZT ? null : {
            flames: (TT = cT, UT = vT, Array.from({
              length: 26 + 6 * TT + (UT ? 20 : 0)
            }, ((TT, UT) => {
              const mT = UT < 6,
                WT = Math.random() * Math.PI * 2,
                zT = mT ? 5 + 3 * Math.random() : 6 + Math.random() ** 1.3 * 8,
                MT = Math.cos(WT) * zT,
                gT = Math.sin(WT) * zT - 2 - 3 * Math.random(),
                nT = Math.random(),
                [HT, kT, jT] = mT ? ["var(--ember-glow)", .8 + .2 * Math.random(), 1100 + 200 * Math.random()] : nT < .15 ? ["#fff6c2", .3 + .2 * Math.random(), 350 + 150 * Math.random()] : nT < .45 ? ["var(--tier)", .35 + .45 * Math.random(), 500 + 300 * Math.random()] : [nT < .7 ? "var(--ember)" : "var(--ember-glow)", .35 + .5 * Math.random(), 500 + 300 * Math.random()];
              return {
                "--c": HT,
                "--x0": `${(.15*MT).toFixed(2)}rem`,
                "--y0": `${(.15*gT).toFixed(2)}rem`,
                "--x": `${MT.toFixed(2)}rem`,
                "--y": `${gT.toFixed(2)}rem`,
                "--spin": `${Math.round(360*(Math.random()-.5))}deg`,
                "--size": `${kT.toFixed(2)}rem`,
                "--duration": `${Math.round(jT)}ms`,
                "--delay": `${Math.round(80*Math.random())}ms`
              }
            }))),
            sparks: LW(cT, vT)
          };
          var TT, UT
        }), [null === ZT || void 0 === ZT ? void 0 : ZT.id]);
      if (!HT.enabled) return null;
      const qT = HT.preview,
        iT = HT.arriving,
        bT = null !== iT && !iT.sameSword,
        OT = null !== qT && (0, yz.jsx)(xz.b, {
          itemName: qT.baseSword,
          amount: 0,
          enchantmentTier: qT.enchantmentTier
        });
      return (0, yz.jsx)(uz.e, {
        show: HT.open,
        close: nT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockForgePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockForgeTitle",
          tabIndex: -1,
          ref: jT,
          onKeyDown: rz,
          children: [(0, yz.jsx)("div", {
            className: "SkyblockForgeEmbers",
            "aria-hidden": "true",
            children: Wg.map(((TT, UT) => (0, yz.jsx)("span", {
              style: TT
            }, UT)))
          }), (0, yz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockForgeTitle",
                children: kT("skyblockGame:forgeTitle")
              }), (0, yz.jsx)("p", {
                children: kT("skyblockGame:forgeIntro")
              })]
            }), (0, yz.jsx)(Cz.k, {
              onClick: nT.dismiss
            })]
          }), (0, yz.jsxs)("div", {
            className: "SkyblockForgeBody",
            children: [(0, yz.jsx)("div", {
              ref: lT,
              className: Oz()("SkyblockForgeSlots", {
                Locked: null !== ZT
              }),
              children: HT.slots.map((TT => (0, yz.jsxs)("div", {
                className: "SkyblockForgeSlot",
                children: [(0, yz.jsx)("h3", {
                  children: TT.label
                }), (0, yz.jsx)("div", {
                  className: "SkyblockForgeParts",
                  children: TT.parts.map((UT => (0, yz.jsx)("button", {
                    type: "button",
                    className: Oz()("SkyblockForgePart", {
                      Selected: UT.selected,
                      Missing: UT.placeholder
                    }),
                    disabled: UT.placeholder,
                    title: UT.placeholder ? kT("skyblockGame:forgePickParts") : UT.itemName,
                    "aria-pressed": UT.selected,
                    onClick: () => {
                      nT.select(TT.kind, UT.material)
                    },
                    children: (0, yz.jsx)(xz.b, {
                      itemName: UT.itemName,
                      amount: UT.owned
                    })
                  }, UT.material)))
                })]
              }, TT.kind)))
            }), (0, yz.jsxs)("div", {
              className: Oz()("SkyblockForgeAnvil", {
                Named: null === qT || void 0 === qT ? void 0 : qT.named
              }),
              style: {
                "--tier": null === qT ? "transparent" : zT.Cb[qT.enchantmentTier]
              },
              children: [(0, yz.jsxs)("div", {
                className: Oz()("SkyblockForgeAltar", {
                  Forging: null !== ZT
                }),
                style: null === ZT ? void 0 : mg,
                children: [(0, yz.jsxs)("div", {
                  className: Oz()("SkyblockForgeMount", {
                    Arrive: null !== iT
                  }),
                  children: [null === qT && (0, yz.jsx)("div", {
                    className: "SkyblockForgeSword Unformed",
                    children: (0, yz.jsx)(xz.b, {
                      itemName: HT.unformedSword,
                      amount: 0
                    })
                  }), null !== qT && (0, yz.jsx)("div", {
                    className: "SkyblockForgeGlow"
                  }), null !== qT && null === ZT && (0, yz.jsx)("div", {
                    ref: pT,
                    className: "SkyblockForgeFloat",
                    children: (0, yz.jsx)("div", {
                      className: "SkyblockForgeSword",
                      children: OT
                    })
                  }), null !== qT && (0, yz.jsx)("div", {
                    className: "SkyblockForgeAura",
                    "aria-hidden": "true",
                    children: lW.map(((TT, UT) => (0, yz.jsx)("span", {
                      className: Oz()({
                        Rune: "" !== TT.rune
                      }),
                      style: TT.style,
                      children: TT.rune
                    }, UT)))
                  }), null !== ZT && null !== fT && (0, yz.jsxs)(yz.Fragment, {
                    children: [(0, yz.jsx)("div", {
                      className: "SkyblockForgeFlash"
                    }), (0, yz.jsx)("div", {
                      className: "SkyblockForgeFlames",
                      children: fT.flames.map(((TT, UT) => (0, yz.jsx)("span", {
                        style: TT
                      }, UT)))
                    }), (0, yz.jsx)("div", {
                      className: "SkyblockForgeSettle",
                      style: BT.current,
                      children: (0, yz.jsx)("div", {
                        className: "SkyblockForgeSword",
                        children: OT
                      })
                    }), (0, yz.jsx)("div", {
                      className: "SkyblockForgeHitFlash"
                    }), (0, yz.jsx)("div", {
                      className: "SkyblockForgeShock"
                    }), (cT >= 4 || vT) && (0, yz.jsx)("div", {
                      className: "SkyblockForgeShock Echo"
                    }), (0, yz.jsx)("div", {
                      className: "SkyblockForgeSparks",
                      children: fT.sparks.map(((TT, UT) => (0, yz.jsx)("span", {
                        style: TT
                      }, UT)))
                    }), (0, yz.jsx)("div", {
                      className: "SkyblockForgeSwing"
                    })]
                  })]
                }), (0, yz.jsx)("p", {
                  className: Oz()("SkyblockForgeStatus", null === (MT = HT.status) || void 0 === MT ? void 0 : MT.tone),
                  children: null === (gT = HT.status) || void 0 === gT ? void 0 : gT.text
                })]
              }), null === qT && (0, yz.jsx)("p", {
                className: Oz()("SkyblockForgeName Waiting", {
                  ArriveText: bT
                }),
                children: kT(HT.anyParts ? "skyblockGame:forgePickToPreview" : "skyblockGame:forgePickParts")
              }), null !== qT && (0, yz.jsx)("h3", {
                ref: LT,
                className: Oz()("SkyblockForgeName", {
                  ArriveText: bT
                }),
                title: qT.name,
                children: qT.name
              }), (null === qT || void 0 === qT ? void 0 : qT.named) && (0, yz.jsx)("span", {
                className: "SkyblockForgeSecret",
                children: kT("skyblockGame:forgeSecret")
              }), (0, yz.jsxs)(Cz.s, {
                className: "SkyblockForgeButton",
                disabled: !HT.canForge,
                title: null === qT ? void 0 : kT("skyblockGame:forgeCoalOwned", {
                  owned: String(HT.coalOwned)
                }),
                onClick: () => {
                  BT.current = function(TT) {
                    const UT = null === TT ? "none" : getComputedStyle(TT).transform,
                      mT = new DOMMatrixReadOnly("none" === UT ? void 0 : UT);
                    return {
                      "--settle-y": `${mT.f.toFixed(2)}px`,
                      "--settle-turn": `${(180*Math.atan2(mT.b,mT.a)/Math.PI).toFixed(2)}deg`
                    }
                  }(pT.current), ZW(), nT.forge(!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                },
                children: [kT("skyblockGame:forgeButton"), null !== qT && (0, yz.jsxs)("span", {
                  className: Oz()("SkyblockForgeCost", {
                    Short: qT.coalShort
                  }),
                  children: [(0, yz.jsx)("span", {
                    className: "SkyblockForgeCoal",
                    children: (0, yz.jsx)(xz.b, {
                      itemName: UW.c,
                      amount: 0
                    })
                  }), qT.coalCost]
                })]
              })]
            }), (0, yz.jsxs)("div", {
              className: Oz()("SkyblockForgeDetails", {
                Named: null === qT || void 0 === qT ? void 0 : qT.named
              }),
              children: [(0, yz.jsx)("p", {
                className: Oz()("SkyblockForgeLore", {
                  ArriveText: bT
                }),
                title: null === qT || void 0 === qT ? void 0 : qT.lore,
                children: null === qT || void 0 === qT ? void 0 : qT.lore
              }), (0, yz.jsxs)("dl", {
                className: Oz()("SkyblockForgeStats", {
                  ArriveText: bT
                }),
                children: [null === qT && Ug.map((TT => (0, yz.jsxs)("div", {
                  className: "SkyblockForgeStat Empty",
                  children: [(0, yz.jsx)("dt", {
                    children: kT(TT)
                  }), (0, yz.jsx)("dd", {
                    children: "\u2013"
                  })]
                }, TT))), null === qT || void 0 === qT ? void 0 : qT.stats.map((TT => (0, yz.jsxs)("div", {
                  className: Oz()("SkyblockForgeStat", {
                    Better: TT.better
                  }),
                  children: [(0, yz.jsx)("dt", {
                    children: TT.label
                  }), (0, yz.jsx)("dd", {
                    children: TT.value
                  })]
                }, TT.label)))]
              }), (0, yz.jsx)("ul", {
                className: Oz()("SkyblockForgeEffects", {
                  ArriveText: bT
                }),
                children: null === qT || void 0 === qT ? void 0 : qT.effects.map((TT => (0, yz.jsx)("li", {
                  children: TT
                }, TT)))
              })]
            })]
          })]
        })
      })
    }
    const gg = "Doom Rivet",
      ng = "Doom Crest";

    function Hg(TT) {
      let {
        itemName: UT,
        amount: mT,
        owned: WT
      } = TT;
      return (0, yz.jsxs)("span", {
        className: Oz()("SkyblockSmugglerPrice", {
          Short: mT > WT
        }),
        children: [(0, yz.jsx)("span", {
          className: "SkyblockSmugglerPriceIcon",
          children: (0, yz.jsx)(xz.b, {
            itemName: UT,
            amount: 0
          })
        }), (0, yz.jsx)("span", {
          children: mT
        })]
      })
    }

    function kg(TT) {
      return TT.justBought ? "skyblockGame:smugglerJustBought" : TT.soldOut ? "skyblockGame:smugglerSoldOut" : "skyblockGame:smugglerBuy"
    }

    function jg(TT) {
      let {
        deal: UT,
        view: mT,
        buy: WT
      } = TT;
      const {
        t: zT
      } = (0, tz.z)();
      return (0, yz.jsxs)("div", {
        className: Oz()("SkyblockSmugglerPocket", {
          Bought: UT.justBought,
          Unaffordable: !UT.affordable,
          SoldOut: UT.soldOut && !UT.justBought
        }),
        children: [(0, yz.jsx)("span", {
          className: "SkyblockSmugglerBuckle",
          "aria-hidden": "true"
        }), (0, yz.jsxs)("div", {
          className: "SkyblockSmugglerGoods",
          children: [(0, yz.jsx)(xz.b, {
            itemName: UT.itemName,
            amount: 0,
            enchantmentTier: UT.enchantmentTier
          }), UT.amount > 1 && (0, yz.jsx)("span", {
            className: "SkyblockSmugglerAmount",
            children: zT("skyblockGame:smugglerAmount", {
              amount: UT.amount
            })
          })]
        }), (0, yz.jsx)("h3", {
          children: UT.displayName
        }), (0, yz.jsxs)("div", {
          className: "SkyblockSmugglerDeal",
          children: [(0, yz.jsxs)("div", {
            className: "SkyblockSmugglerPrices",
            children: [UT.rivets > 0 && (0, yz.jsx)(Hg, {
              itemName: gg,
              amount: UT.rivets,
              owned: mT.rivetsOwned
            }), UT.crests > 0 && (0, yz.jsx)(Hg, {
              itemName: ng,
              amount: UT.crests,
              owned: mT.crestsOwned
            })]
          }), (0, yz.jsx)(Cz.e, {
            className: "SkyblockSmugglerBuy",
            disabled: UT.soldOut || !UT.affordable || mT.pending,
            onClick: () => {
              WT(UT.slot)
            },
            children: zT(kg(UT))
          })]
        })]
      }, UT.justBought ? mT.boughtCount : 0)
    }

    function lg(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(qW, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = Kz();
      return mT.enabled ? (0, yz.jsx)(uz.e, {
        show: mT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockSmugglerPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockSmugglerTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: rz,
          children: [(0, yz.jsx)("span", {
            className: "SkyblockSmugglerStrap Left",
            "aria-hidden": "true"
          }), (0, yz.jsx)("span", {
            className: "SkyblockSmugglerStrap Right",
            "aria-hidden": "true"
          }), (0, yz.jsxs)("header", {
            className: "SkyblockSmugglerFlap",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockSmugglerTitle",
                children: WT("skyblockGame:smugglerTitle")
              }), (0, yz.jsx)("p", {
                children: WT("skyblockGame:smugglerIntro")
              })]
            }), (0, yz.jsxs)("div", {
              className: "SkyblockSmugglerFlapActions",
              children: [(0, yz.jsxs)("div", {
                className: "SkyblockSmugglerWallet",
                children: [(0, yz.jsx)(Hg, {
                  itemName: gg,
                  amount: mT.rivetsOwned,
                  owned: mT.rivetsOwned
                }), (0, yz.jsx)(Hg, {
                  itemName: ng,
                  amount: mT.crestsOwned,
                  owned: mT.crestsOwned
                })]
              }), (0, yz.jsx)(Cz.k, {
                onClick: UT.dismiss
              })]
            })]
          }), (0, yz.jsx)("div", {
            className: "SkyblockSmugglerPockets",
            children: mT.deals.map((TT => (0, yz.jsx)(jg, {
              deal: TT,
              view: mT,
              buy: UT.buy
            }, TT.slot)))
          }), (0, yz.jsxs)("footer", {
            className: "SkyblockSmugglerBedroll",
            children: [(0, yz.jsx)("span", {
              className: "SkyblockSmugglerRotates",
              children: mT.rotatesText
            }), null !== mT.status && (0, yz.jsx)("span", {
              className: Oz()("SkyblockSmugglerStatus", mT.status.tone),
              children: mT.status.text
            })]
          })]
        })
      }) : null
    }

    function Lg(TT) {
      let {
        phase: UT,
        className: mT
      } = TT;
      return (0, yz.jsx)("span", {
        className: Oz()("SkyblockMoon", `Moon-${UT}`, mT),
        "aria-hidden": "true"
      })
    }

    function pg(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(OW, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)();
      return mT.enabled ? (0, yz.jsx)(Yz.d, {
        placement: "statBars",
        children: (0, yz.jsx)("button", {
          type: "button",
          tabIndex: -1,
          className: Oz()("SkyblockPassageChip", mT.open && "Open"),
          "aria-label": WT("skyblockGame:passageChipLabel", {
            phase: mT.phaseName
          }),
          title: WT("skyblockGame:passageChipLabel", {
            phase: mT.phaseName
          }),
          onMouseDown: TT => {
            TT.preventDefault()
          },
          onClick: UT.toggle,
          children: (0, yz.jsx)(Lg, {
            phase: mT.phase
          }, mT.phase)
        })
      }) : null
    }

    function Bg(TT) {
      let {
        fish: UT
      } = TT;
      return (0, yz.jsxs)("li", {
        className: "SkyblockPassageFish",
        children: [(0, yz.jsx)("span", {
          className: "SkyblockPassageFishIcon",
          children: (0, yz.jsx)(xz.b, {
            itemName: UT.itemName,
            amount: 0
          })
        }), (0, yz.jsxs)("span", {
          className: "SkyblockPassageFishText",
          children: [(0, yz.jsx)("span", {
            className: "SkyblockPassageFishName",
            children: UT.displayName
          }), (0, yz.jsx)("span", {
            className: "SkyblockPassageFishWhere",
            children: UT.where
          })]
        })]
      })
    }

    function Zg(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(OW, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = Kz();
      return mT.enabled ? (0, yz.jsx)(uz.e, {
        show: mT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockPassagePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockPassageTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockPassageHeader",
            children: [(0, yz.jsx)(Lg, {
              phase: mT.phase,
              className: "SkyblockPassageHeaderMoon"
            }), (0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockPassageTitle",
                children: WT("skyblockGame:passageTitle")
              }), (0, yz.jsx)("p", {
                className: "SkyblockPassagePhase",
                children: mT.phaseName
              })]
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              onClick: UT.dismiss
            })]
          }), (0, yz.jsx)("p", {
            className: "SkyblockPassageIntro",
            children: WT("skyblockGame:passageIntro")
          }), (0, yz.jsxs)("div", {
            className: "SkyblockPassageBody",
            children: [(0, yz.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [(0, yz.jsx)("h3", {
                children: WT("skyblockGame:passageVisiting")
              }), (0, yz.jsx)("ul", {
                className: "SkyblockPassageList",
                children: mT.visitors.map((TT => (0, yz.jsx)(Bg, {
                  fish: TT
                }, TT.itemName)))
              })]
            }), (0, yz.jsxs)("section", {
              className: "SkyblockPassageColumn",
              children: [null !== mT.resting && (0, yz.jsxs)(yz.Fragment, {
                children: [(0, yz.jsx)("h3", {
                  children: WT("skyblockGame:passageResting")
                }), (0, yz.jsx)("ul", {
                  className: "SkyblockPassageList Resting",
                  children: (0, yz.jsx)(Bg, {
                    fish: mT.resting
                  })
                })]
              }), (0, yz.jsxs)("p", {
                className: "SkyblockPassageNext",
                children: [(0, yz.jsx)(Lg, {
                  phase: mT.nextPhase
                }), (0, yz.jsx)("span", {
                  children: mT.next
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function cg() {
      return (0, yz.jsx)("span", {
        className: "SkyblockLampLightSparkle",
        "aria-hidden": "true",
        children: [0, 1, 2, 3, 4, 5].map((TT => (0, yz.jsx)("i", {
          style: {
            "--sparkle-index": TT
          }
        }, TT)))
      })
    }

    function vg(TT) {
      var UT;
      let {
        charm: mT,
        view: WT,
        controller: zT
      } = TT;
      const {
        t: MT
      } = (0, tz.z)(), gT = WT.shop, nT = (null === (UT = WT.sparkle) || void 0 === UT ? void 0 : UT.id) === mT.id;
      return (0, yz.jsxs)("li", {
        className: Oz()("SkyblockLampLightCharm", mT.owned && "Owned", mT.socketed && "Socketed"),
        children: [nT && (0, yz.jsx)(cg, {}, WT.sparkle.count), (0, yz.jsx)("h4", {
          children: mT.name
        }), (0, yz.jsx)("p", {
          className: "SkyblockLampLightEffect",
          children: mT.effect
        }), (0, yz.jsx)("ul", {
          className: "SkyblockLampLightOdds",
          children: mT.lines.map((TT => (0, yz.jsxs)("li", {
            className: Oz()("SkyblockLampLightOddsLine", "better" === TT.tone ? "Better" : "worse" === TT.tone ? "Worse" : "Same"),
            children: [(0, yz.jsx)("span", {
              className: "Before",
              children: TT.before
            }), (0, yz.jsx)("span", {
              className: "Arrow",
              children: "\u2192"
            }), (0, yz.jsx)("span", {
              className: "After",
              children: TT.after
            })]
          }, TT.label)))
        }), (0, yz.jsx)("div", {
          className: "SkyblockLampLightCharmAction",
          children: mT.owned ? mT.socketed ? (0, yz.jsxs)(yz.Fragment, {
            children: [(0, yz.jsx)("span", {
              className: "SkyblockLampLightBadge",
              children: MT("skyblockGame:lampLightSocketed")
            }), (0, yz.jsx)(Cz.L, {
              disabled: !WT.canCommand,
              ariaLabel: MT("skyblockGame:lampLightRemoveLabel", {
                charm: mT.name
              }),
              onClick: () => {
                zT.socket(null)
              },
              children: MT("skyblockGame:lampLightRemove")
            })]
          }) : (0, yz.jsx)(Cz.e, {
            disabled: !WT.canCommand || !gT.heldRod,
            ariaLabel: MT("skyblockGame:lampLightSocketLabel", {
              charm: mT.name
            }),
            onClick: () => {
              zT.socket(mT.id)
            },
            children: MT("skyblockGame:lampLightSocket")
          }) : (0, yz.jsx)(Cz.e, {
            disabled: !WT.canCommand || !mT.affordable,
            ariaLabel: MT("skyblockGame:lampLightBuyLabel", {
              item: mT.name,
              cost: mT.cost
            }),
            onClick: () => {
              zT.buy(mT.id)
            },
            children: mT.cost
          })
        })]
      })
    }

    function fg(TT) {
      var UT;
      let {
        tint: mT,
        view: WT,
        controller: zT
      } = TT;
      const {
        t: MT
      } = (0, tz.z)();
      return (0, yz.jsxs)("li", {
        className: Oz()("SkyblockLampLightTint", mT.wearing && "Wearing"),
        style: {
          "--tint-colour": mT.colour
        },
        children: [(null === (UT = WT.sparkle) || void 0 === UT ? void 0 : UT.id) === mT.id && (0, yz.jsx)(cg, {}, WT.sparkle.count), (0, yz.jsx)("span", {
          className: "SkyblockLampLightSwatch",
          "aria-hidden": "true"
        }), (0, yz.jsx)("span", {
          className: "SkyblockLampLightTintName",
          children: mT.name
        }), mT.wearing ? (0, yz.jsx)("span", {
          className: "SkyblockLampLightBadge",
          children: MT("skyblockGame:lampLightWearing")
        }) : (0, yz.jsx)(Cz.e, {
          disabled: !WT.canCommand || !mT.owned && !mT.affordable,
          ariaLabel: mT.owned ? MT("skyblockGame:lampLightWearLabel", {
            tint: mT.name
          }) : MT("skyblockGame:lampLightBuyLabel", {
            item: mT.name,
            cost: mT.cost
          }),
          onClick: () => {
            mT.owned ? zT.wearTint(mT.id) : zT.buy(mT.id)
          },
          children: mT.owned ? MT("skyblockGame:lampLightWear") : mT.cost
        })]
      })
    }

    function qg(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(FW, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = mT.shop;
      return (0, yz.jsxs)("div", {
        className: "SkyblockLampLightTab",
        children: [(0, yz.jsxs)("div", {
          className: "SkyblockLampLightTop",
          children: [(0, yz.jsx)("span", {
            className: "SkyblockLampLightBalance",
            children: mT.balance
          }), (0, yz.jsxs)("button", {
            type: "button",
            role: "switch",
            "aria-checked": mT.releasing,
            className: Oz()("SkyblockLampLightSwitch", mT.releasing && "On"),
            disabled: mT.releasing ? "ready" !== mT.status : !mT.canCommand,
            onClick: () => {
              UT.setRelease(!mT.releasing)
            },
            children: [(0, yz.jsx)("span", {
              className: "SkyblockLampLightSwitchTrack",
              "aria-hidden": "true",
              children: (0, yz.jsx)("span", {
                className: "SkyblockLampLightSwitchKnob"
              })
            }), WT("skyblockGame:lampLightRelease")]
          }), (0, yz.jsx)("span", {
            className: "SkyblockLampLightHint",
            children: WT("skyblockGame:lampLightReleaseHint")
          })]
        }), null !== mT.notice && (0, yz.jsx)("p", {
          className: "SkyblockLampLightNotice",
          role: "status",
          children: mT.notice
        }), null !== zT && (0, yz.jsxs)(yz.Fragment, {
          children: [(0, yz.jsxs)("div", {
            className: "SkyblockLampLightSectionHead",
            children: [(0, yz.jsx)("h3", {
              children: WT("skyblockGame:lampLightCharms")
            }), (0, yz.jsx)("span", {
              className: "SkyblockLampLightOddsFor",
              children: zT.oddsFor
            }), (0, yz.jsx)("div", {
              className: "SkyblockLampLightSituations",
              role: "group",
              children: ["open", "bloom"].map((TT => (0, yz.jsx)("button", {
                type: "button",
                "aria-pressed": mT.situation === TT,
                className: Oz()("SkyblockLampLightSituation", mT.situation === TT && "Selected"),
                onClick: () => {
                  UT.setSituation(TT)
                },
                children: WT("open" === TT ? "skyblockGame:lampLightOpenWater" : "skyblockGame:lampLightInBloom")
              }, TT)))
            })]
          }), !zT.heldRod && (0, yz.jsx)("p", {
            className: "SkyblockLampLightHoldRod",
            children: WT("skyblockGame:lampLightHoldRod")
          }), (0, yz.jsx)("ul", {
            className: "SkyblockLampLightCharms",
            children: zT.charms.map((TT => (0, yz.jsx)(vg, {
              charm: TT,
              view: mT,
              controller: UT
            }, TT.id)))
          }), (0, yz.jsx)("div", {
            className: "SkyblockLampLightSectionHead",
            children: (0, yz.jsx)("h3", {
              children: WT("skyblockGame:lampLightTints")
            })
          }), (0, yz.jsxs)("ul", {
            className: "SkyblockLampLightTints",
            children: [(0, yz.jsxs)("li", {
              className: Oz()("SkyblockLampLightTint", "Islands", zT.wearingIslandColours && "Wearing"),
              children: [(0, yz.jsx)("span", {
                className: "SkyblockLampLightSwatch",
                "aria-hidden": "true"
              }), (0, yz.jsx)("span", {
                className: "SkyblockLampLightTintName",
                children: WT("skyblockGame:lampLightIslandColours")
              }), zT.wearingIslandColours ? (0, yz.jsx)("span", {
                className: "SkyblockLampLightBadge",
                children: WT("skyblockGame:lampLightWearing")
              }) : (0, yz.jsx)(Cz.e, {
                disabled: !mT.canCommand,
                ariaLabel: WT("skyblockGame:lampLightWearLabel", {
                  tint: WT("skyblockGame:lampLightIslandColours")
                }),
                onClick: () => {
                  UT.wearTint(null)
                },
                children: WT("skyblockGame:lampLightWear")
              })]
            }), zT.tints.map((TT => (0, yz.jsx)(fg, {
              tint: TT,
              view: mT,
              controller: UT
            }, TT.id)))]
          })]
        })]
      })
    }

    function ig(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(FW, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)();
      return mT.releasing ? (0, yz.jsx)(Yz.d, {
        children: (0, yz.jsxs)("button", {
          type: "button",
          className: "SkyblockLampLightPill",
          onClick: () => {
            UT.setRelease(!1)
          },
          children: [(0, yz.jsx)("span", {
            className: "SkyblockLampLightPillOrb",
            "aria-hidden": "true"
          }), (0, yz.jsxs)("span", {
            className: "SkyblockLampLightPillText SmallTextBold",
            children: [WT("skyblockGame:lampLightReleasing"), " \xb7 ", mT.balance]
          }), (0, yz.jsx)("span", {
            className: "SkyblockLampLightPillStop SmallTextBold",
            children: WT("skyblockGame:lampLightKeepCatches")
          }), null !== mT.gained && (0, yz.jsx)("span", {
            className: "SkyblockLampLightPillGain SmallTextBold",
            "aria-hidden": "true",
            children: mT.gained.text
          }, mT.gained.count)]
        })
      }) : null
    }

    function bg(TT) {
      let {
        island: UT,
        view: mT,
        aim: WT
      } = TT;
      const {
        t: zT
      } = (0, tz.z)(), MT = UT.featuredFish;
      return (0, yz.jsxs)("li", {
        className: Oz()("SkyblockKeepersChairIsland", `Island-${UT.id}`, UT.favoured && "Aimed", !UT.relit && "Dark"),
        children: [(0, yz.jsx)("h3", {
          children: UT.name
        }), UT.relit && null !== MT ? (0, yz.jsxs)("div", {
          className: "SkyblockKeepersChairNotice",
          children: [(0, yz.jsx)("span", {
            className: "SkyblockKeepersChairNoticeLabel",
            children: zT("skyblockGame:keepersChairTideNotice")
          }), (0, yz.jsx)("span", {
            className: "SkyblockKeepersChairFish",
            children: (0, yz.jsx)(xz.b, {
              itemName: MT.itemName,
              amount: 0
            })
          }), (0, yz.jsx)("span", {
            className: "SkyblockKeepersChairFishName",
            children: MT.displayName
          })]
        }) : (0, yz.jsx)("div", {
          className: "SkyblockKeepersChairNotice",
          children: (0, yz.jsx)("span", {
            className: "SkyblockKeepersChairDarkLens",
            children: zT("skyblockGame:keepersChairDark")
          })
        }), UT.relit && (UT.favoured ? (0, yz.jsx)("span", {
          className: "SkyblockKeepersChairAimedBadge",
          children: zT("skyblockGame:keepersChairAimed")
        }) : (0, yz.jsx)(Cz.e, {
          className: "SkyblockKeepersChairAim",
          disabled: !mT.canAim,
          ariaLabel: zT("skyblockGame:keepersChairAimLabel", {
            island: UT.name
          }),
          onClick: () => {
            WT(UT.id)
          },
          children: zT("skyblockGame:keepersChairAim")
        }))]
      }, UT.favoured ? mT.aimedCount : 0)
    }

    function Og(TT) {
      let {
        controller: UT,
        lampLight: mT
      } = TT;
      const WT = (0, az.j)(wW, UT.getSnapshot()),
        zT = (0, az.j)(FW, mT.getSnapshot()),
        [MT, gT] = (0, JT.useState)("lamp"),
        {
          t: nT
        } = (0, tz.z)(),
        HT = Kz();
      if (!WT.enabled) return null;
      const kT = "light" === MT && zT.enabled;
      return (0, yz.jsx)(uz.e, {
        show: WT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: Oz()("SkyblockSkillsPanel", "SkyblockKeepersChairPanel", kT && "OnLampLight"),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockKeepersChairTitle",
          tabIndex: -1,
          ref: HT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockKeepersChairHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockKeepersChairTitle",
                children: nT("skyblockGame:keepersChairTitle")
              }), (0, yz.jsx)("p", {
                children: nT(kT ? "skyblockGame:keeperWickLampLightWelcome" : "skyblockGame:keeperWickKeepersChairWelcome")
              })]
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              ariaLabel: nT("skyblockGame:keepersChairClose"),
              onClick: UT.dismiss
            })]
          }), zT.enabled && (0, yz.jsx)("div", {
            className: "SkyblockKeepersChairTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: ["lamp", "light"].map((TT => (0, yz.jsxs)("button", {
              type: "button",
              role: "tab",
              "aria-selected": "light" === TT === kT,
              "data-pad-tab": !0,
              "data-pad-selected": "light" === TT === kT ? "true" : void 0,
              className: Oz()("SkyblockKeepersChairTab", "light" === TT === kT && "Selected"),
              onClick: () => {
                gT(TT)
              },
              children: [nT("lamp" === TT ? "skyblockGame:lampLightChairTab" : "skyblockGame:lampLightTab"), "light" === TT && (0, yz.jsx)("span", {
                className: "SkyblockKeepersChairTabBalance",
                children: zT.balance
              })]
            }, TT)))
          }), kT ? (0, yz.jsx)(qg, {
            controller: mT
          }) : (0, yz.jsx)(eg, {
            view: WT,
            controller: UT
          })]
        })
      })
    }

    function eg(TT) {
      let {
        view: UT,
        controller: mT
      } = TT;
      const {
        t: WT
      } = (0, tz.z)();
      return (0, yz.jsxs)(yz.Fragment, {
        children: [(0, yz.jsx)("ul", {
          className: "SkyblockKeepersChairIslands",
          children: UT.islands.map((TT => (0, yz.jsx)(bg, {
            island: TT,
            view: UT,
            aim: mT.aim
          }, TT.id)))
        }), null !== UT.almanac && (0, yz.jsxs)("div", {
          className: "SkyblockKeepersChairAlmanac",
          children: [(0, yz.jsx)("span", {
            className: "SkyblockKeepersChairAlmanacLabel",
            children: WT("skyblockGame:passageTitle")
          }), (0, yz.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek",
            children: [(0, yz.jsx)(Lg, {
              phase: UT.almanac.phase
            }), UT.almanac.phaseName]
          }), (0, yz.jsxs)("span", {
            className: "SkyblockKeepersChairAlmanacWeek Next",
            children: [(0, yz.jsx)(Lg, {
              phase: UT.almanac.nextPhase
            }), UT.almanac.next]
          })]
        }), (0, yz.jsxs)("footer", {
          className: "SkyblockKeepersChairFooter",
          children: [(0, yz.jsx)("span", {
            className: "SkyblockKeepersChairFavour",
            children: WT("skyblockGame:keepersChairFavour")
          }), UT.aimed && (0, yz.jsx)(Cz.L, {
            className: "SkyblockKeepersChairRest",
            disabled: !UT.canAim,
            onClick: () => {
              mT.aim(null)
            },
            children: WT("skyblockGame:keepersChairRest")
          })]
        }), null !== UT.status && (0, yz.jsx)("p", {
          className: Oz()("SkyblockKeepersChairStatus", "refused" === UT.status.tone ? "Refused" : "Shines"),
          role: "status",
          children: UT.status.text
        })]
      })
    }

    function Yg(TT) {
      let {
        controller: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)(), WT = (0, az.j)(aW, UT.getSnapshot());
      if (!WT.enabled) return null;
      const zT = WT.freshCount > 0 ? mT("skyblockGame:reachLogOpenNews", {
        count: WT.freshCount
      }) : mT("skyblockGame:reachLogOpen");
      return (0, yz.jsx)(Yz.d, {
        placement: "statBars",
        children: (0, yz.jsxs)("button", {
          type: "button",
          className: Oz()("SkyblockReachLogButton", WT.freshCount > 0 && "HasNews", WT.pending && "Pending"),
          "aria-label": zT,
          title: zT,
          onClick: UT.ask,
          children: [WT.news && (0, yz.jsx)("span", {
            className: "SkyblockReachLogPulse",
            "aria-hidden": "true"
          }, `pulse:${WT.newsToken}`), (0, yz.jsx)("span", {
            className: Oz()("SkyblockReachLogIcon", WT.news && "Jump"),
            "aria-hidden": "true",
            children: (0, yz.jsx)(xz.b, {
              itemName: XW,
              amount: 0
            })
          }, `icon:${WT.newsToken}`), WT.freshCount > 0 && (0, yz.jsx)("span", {
            className: "SkyblockReachLogBadge",
            children: WT.freshCount
          })]
        })
      })
    }

    function Jg(TT) {
      let {
        gift: UT
      } = TT;
      return (0, yz.jsx)("li", {
        className: Oz()("SkyblockRegularsGift", UT.given && "Given"),
        children: UT.text
      })
    }

    function xg(TT) {
      let {
        regular: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)();
      return (0, yz.jsxs)("li", {
        className: Oz()("SkyblockRegularsCard", UT.tagged ? "Tagged" : "Untagged", UT.resting && "Resting"),
        children: [(0, yz.jsxs)("div", {
          className: "SkyblockRegularsCardTop",
          children: [(0, yz.jsx)("span", {
            className: "SkyblockRegularsIcon",
            title: UT.fishName,
            children: (0, yz.jsx)(xz.b, {
              itemName: UT.itemName,
              amount: 0
            })
          }), (0, yz.jsxs)("div", {
            className: "SkyblockRegularsNames",
            children: [(0, yz.jsx)("h3", {
              children: UT.name
            }), (0, yz.jsx)("span", {
              className: "SkyblockRegularsFish",
              children: UT.fishName
            })]
          })]
        }), (0, yz.jsx)("p", {
          className: "SkyblockRegularsLine",
          children: UT.line
        }), (0, yz.jsxs)("p", {
          className: "SkyblockRegularsStats",
          children: [(0, yz.jsx)("span", {
            className: "SkyblockRegularsSize",
            children: UT.size
          }), UT.tagged && (0, yz.jsx)("span", {
            className: "SkyblockRegularsMeetings",
            children: UT.resting ? mT("skyblockGame:regularsResting") : UT.meetings
          })]
        }), (0, yz.jsx)("p", {
          className: "SkyblockRegularsChance",
          children: UT.chance
        }), (0, yz.jsx)("ul", {
          className: "SkyblockRegularsGifts",
          children: UT.gifts.map((TT => (0, yz.jsx)(Jg, {
            gift: TT
          }, TT.text)))
        }), UT.history.length > 0 && (0, yz.jsx)("ul", {
          className: "SkyblockRegularsHistory",
          children: UT.history.map(((TT, UT) => (0, yz.jsx)("li", {
            children: TT
          }, UT)))
        })]
      })
    }

    function dg(TT) {
      let {
        controller: UT,
        island: mT
      } = TT;
      const {
        t: WT
      } = (0, tz.z)(), zT = (0, az.j)(mz, UT.getSnapshot()), MT = zT.islands.find((TT => TT.id === mT));
      if (!zT.enabled || void 0 === MT) return null;
      const gT = WT("skyblockGame:regularsOpen");
      return (0, yz.jsxs)("button", {
        type: "button",
        className: "SkyblockRegularsStrip",
        "aria-label": gT,
        title: gT,
        onClick: () => {
          UT.openIsland(mT)
        },
        children: [(0, yz.jsx)("span", {
          className: "SkyblockRegularsStripTitle",
          children: WT("skyblockGame:regularsTitle")
        }), MT.regulars.map((TT => (0, yz.jsx)("span", {
          className: Oz()("SkyblockRegularsStripIcon", TT.tagged && "Tagged"),
          title: TT.name,
          children: (0, yz.jsx)(xz.b, {
            itemName: TT.itemName,
            amount: 0
          })
        }, TT.id)))]
      })
    }

    function wg(TT) {
      var UT;
      let {
        controller: mT
      } = TT;
      const WT = (0, az.j)(mz, mT.getSnapshot()),
        {
          t: zT
        } = (0, tz.z)(),
        MT = Kz();
      if (!WT.enabled) return null;
      const gT = null !== (UT = WT.islands.find((TT => TT.id === WT.selected))) && void 0 !== UT ? UT : null;
      return (0, yz.jsx)(uz.e, {
        show: WT.open,
        close: mT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel SkyblockRegularsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockRegularsTitle",
          tabIndex: -1,
          ref: MT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockRegularsTitle",
                children: zT("skyblockGame:regularsTitle")
              }), (0, yz.jsx)("p", {
                children: zT("skyblockGame:pimRegularsLedgerWelcome")
              })]
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              onClick: mT.dismiss
            })]
          }), (0, yz.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: WT.islands.map((TT => {
              const UT = TT.id === WT.selected;
              return (0, yz.jsx)("button", {
                type: "button",
                role: "tab",
                "aria-selected": UT,
                "data-pad-tab": !0,
                "data-pad-selected": UT ? "true" : void 0,
                className: Oz()("SkyblockReachLogTab", `Island-${TT.id}`, UT && "Selected", TT.charm.given && "GoldPage"),
                onClick: () => {
                  mT.selectIsland(TT.id)
                },
                children: (0, yz.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: TT.name
                })
              }, TT.id)
            }))
          }), (0, yz.jsxs)("div", {
            className: Oz()("SkyblockRegularsPage", null !== gT && `Island-${gT.id}`),
            role: "tabpanel",
            children: [(0, yz.jsx)("p", {
              className: "SkyblockRegularsHow",
              children: zT("skyblockGame:regularsHow")
            }), null !== gT && (0, yz.jsx)("ul", {
              className: "SkyblockRegularsGrid",
              children: gT.regulars.map((TT => (0, yz.jsx)(xg, {
                regular: TT
              }, TT.id)))
            })]
          }), null !== gT && (0, yz.jsx)("footer", {
            className: "SkyblockRegularsFooter",
            children: (0, yz.jsx)("span", {
              className: Oz()("SkyblockRegularsCharm", gT.charm.given && "Given"),
              children: gT.charm.text
            })
          })]
        })
      })
    }
    const tg = [{
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
      ag = Array.from({
        length: 6
      }, ((TT, UT) => ({
        "--x": `${(88*(.618034*UT%1)).toFixed(1)}%`,
        "--y": `${(10+37*UT%70).toFixed(1)}%`,
        "--size": 7 + UT % 3 * 3 + "rem",
        "--drift-x": 3 * (UT % 3 - 1) + "rem",
        "--drift-y": 2 * (UT % 2 === 0 ? -1 : 1) + "rem",
        "--duration": 14 + UT % 4 * 3 + "s",
        "--delay": 2.5 * -UT + "s"
      }))),
      yg = Array.from({
        length: 14
      }, ((TT, UT) => ({
        "--left": `${(3+94*((.618034*UT+.3)%1)).toFixed(1)}%`,
        "--size": 4 + UT % 4 * 2 + "px",
        "--sway": UT % 3 * 3 + 3 + "px",
        "--duration": `${(8+7*UT%6*1.1).toFixed(1)}s`,
        "--delay": `${(-1.73*UT%12).toFixed(2)}s`
      }))),
      Xg = (0, JT.memo)((function(TT) {
        let {
          island: UT
        } = TT;
        return (0, yz.jsxs)("div", {
          className: Oz()("SkyblockReachLogDepths", null !== UT && `Island-${UT}`),
          "aria-hidden": "true",
          children: [tg.map(((TT, UT) => (0, yz.jsx)("span", {
            className: "SkyblockReachLogShaft",
            style: TT
          }, `shaft${UT}`))), ag.map(((TT, UT) => (0, yz.jsx)("span", {
            className: Oz()("SkyblockReachLogMote", UT % 2 === 1 && "Violet"),
            style: TT
          }, `mote${UT}`))), yg.map(((TT, UT) => (0, yz.jsx)("span", {
            className: "SkyblockReachLogBubble",
            style: TT
          }, `bubble${UT}`)))]
        })
      })),
      Ig = 100;

    function Qg(TT) {
      let {
        view: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)();
      if (null === UT || 0 === UT.total) return null;
      const WT = Ig * UT.aspect,
        zT = mT("skyblockGame:hiddenWatersCount", {
          found: UT.found,
          total: UT.total
        });
      return (0, yz.jsxs)("div", {
        className: "SkyblockHiddenWatersStrip",
        title: `${mT("skyblockGame:hiddenWatersTitle")}: ${zT}`,
        children: [(0, yz.jsxs)("svg", {
          className: "SkyblockHiddenWatersOutline",
          viewBox: `0 0 100 ${WT}`,
          "aria-hidden": "true",
          children: [UT.islands.map(((TT, UT) => (0, yz.jsx)("ellipse", {
            className: "SkyblockHiddenWatersIsland",
            cx: (TT.left + TT.width / 2) * Ig,
            cy: (TT.top + TT.height / 2) * WT,
            rx: TT.width / 2 * Ig,
            ry: TT.height / 2 * WT
          }, UT))), UT.pins.map(((TT, UT) => (0, yz.jsx)("circle", {
            className: "SkyblockHiddenWatersPin",
            cx: TT.left * Ig,
            cy: TT.top * WT,
            r: 13
          }, UT)))]
        }), (0, yz.jsxs)("span", {
          className: "SkyblockHiddenWatersText",
          children: [(0, yz.jsx)("span", {
            className: "SkyblockHiddenWatersTitle",
            children: mT("skyblockGame:hiddenWatersTitle")
          }), (0, yz.jsx)("span", {
            className: UT.found === UT.total ? "SkyblockHiddenWatersCount AllFound" : "SkyblockHiddenWatersCount",
            children: zT
          })]
        })]
      })
    }

    function sg(TT) {
      let {
        view: UT,
        island: mT
      } = TT;
      const {
        t: WT
      } = (0, tz.z)(), zT = null === UT || void 0 === UT ? void 0 : UT.glimpses.get(mT);
      return void 0 === zT || 0 === zT.length ? null : (0, yz.jsxs)("div", {
        className: "SkyblockHiddenWatersGlimpses",
        children: [(0, yz.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesTitle",
          children: WT("skyblockGame:hiddenWatersGlimpsed")
        }), (0, yz.jsx)("span", {
          className: "SkyblockHiddenWatersGlimpsesRow",
          children: zT.map((TT => (0, yz.jsx)("span", {
            className: "SkyblockHiddenWatersSilhouette",
            "aria-hidden": "true",
            children: (0, yz.jsx)(xz.b, {
              itemName: TT,
              amount: 0
            })
          }, TT)))
        })]
      })
    }
    const Fg = ["Bronze", "Silver", "Gold"],
      Pg = [{
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
      Vg = Pg.slice(0, 2);

    function ug(TT) {
      return TT ? Pg : Vg
    }

    function Cg(TT) {
      let {
        fish: UT,
        letGoShown: mT
      } = TT;
      const {
        t: WT
      } = (0, tz.z)();
      return (0, yz.jsxs)("span", {
        className: "SkyblockReachLogMarks",
        children: [Fg.map(((TT, mT) => {
          const zT = mT < UT.marks;
          return (0, yz.jsx)("span", {
            className: Oz()("SkyblockReachLogPip", TT, zT && "Earned", zT && UT.fresh && mT === UT.marks - 1 && "Newest"),
            title: WT(yW[mT])
          }, TT)
        })), (0, yz.jsx)("span", {
          className: "SkyblockReachLogDivider"
        }), ug(mT).map(((TT, mT) => (0, yz.jsx)("span", {
          className: Oz()("SkyblockReachLogRibbon", TT.className, !0 === UT.ribbons[mT] && "Earned"),
          title: WT(TT.titleKey)
        }, TT.className)))]
      })
    }

    function rg(TT) {
      let {
        letGoShown: UT,
        haloShown: mT
      } = TT;
      const {
        t: WT
      } = (0, tz.z)();
      return (0, yz.jsxs)("span", {
        className: "SkyblockReachLogLegend",
        children: [(0, yz.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: WT("skyblockGame:reachLogMarks"),
          children: [(0, yz.jsx)("span", {
            className: "SkyblockReachLogPip Gold Earned"
          }), WT("skyblockGame:reachLogLegendMarks")]
        }), ug(UT).map((TT => (0, yz.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: WT(TT.titleKey),
          children: [(0, yz.jsx)("span", {
            className: Oz()("SkyblockReachLogRibbon", TT.className, "Earned")
          }), WT(TT.legendKey)]
        }, TT.className))), (0, yz.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: WT("skyblockGame:reachLogGlimmerTitle"),
          children: [(0, yz.jsx)("span", {
            className: "SkyblockReachLogGlimmer"
          }), WT("skyblockGame:reachLogLegendGlimmer")]
        }), mT && (0, yz.jsxs)("span", {
          className: "SkyblockReachLogLegendItem",
          title: WT("skyblockGame:reachLogHaloTitle"),
          children: [(0, yz.jsx)("span", {
            className: "SkyblockReachLogHalo"
          }), WT("skyblockGame:reachLogLegendHalo")]
        })]
      })
    }

    function Kg(TT) {
      let {
        returner: UT
      } = TT;
      return (0, yz.jsxs)("div", {
        className: Oz()("SkyblockReachLogReturner", UT.back && "Back"),
        children: [(0, yz.jsx)("span", {
          className: "SkyblockReachLogReturnerIcon",
          "aria-hidden": "true",
          children: (0, yz.jsx)(xz.b, {
            itemName: UT.itemName,
            amount: 0
          })
        }), (0, yz.jsx)("span", {
          className: "SkyblockReachLogReturnerLine",
          children: UT.line
        })]
      })
    }

    function Sg(TT) {
      let {
        fish: UT,
        letGoShown: mT
      } = TT;
      const {
        t: WT
      } = (0, tz.z)();
      return (0, yz.jsxs)("li", {
        className: Oz()("SkyblockReachLogCard", UT.caught ? "Caught" : "Unknown", UT.marks >= 3 && "GoldCard", UT.fresh && "Fresh", UT.visitor && "Visitor"),
        children: [UT.visitor && (0, yz.jsx)("span", {
          className: "SkyblockReachLogVisitorTag",
          children: WT("skyblockGame:reachLogVisitor")
        }), UT.fresh && Array.from({
          length: 4
        }, ((TT, UT) => (0, yz.jsx)("span", {
          className: "SkyblockReachLogSparkle"
        }, UT))), (0, yz.jsxs)("span", {
          className: "SkyblockReachLogFishIcon",
          "aria-hidden": "true",
          children: [UT.halo && (0, yz.jsx)("span", {
            className: "SkyblockReachLogHalo",
            title: WT("skyblockGame:reachLogHaloTitle")
          }), (0, yz.jsx)(xz.b, {
            itemName: UT.itemName,
            amount: 0
          }), UT.glimmer && (0, yz.jsx)("span", {
            className: "SkyblockReachLogGlimmer",
            title: WT("skyblockGame:reachLogGlimmerTitle")
          })]
        }), (0, yz.jsx)("span", {
          className: "SkyblockReachLogFishName",
          children: UT.name
        }), (0, yz.jsx)("span", {
          className: "SkyblockReachLogFishChance",
          children: UT.chance
        }), (0, yz.jsx)("span", {
          className: "SkyblockReachLogFishBest",
          children: UT.best
        }), (0, yz.jsx)(Cg, {
          fish: UT,
          letGoShown: mT
        })]
      })
    }

    function Gg(TT) {
      let {
        page: UT,
        letGoShown: mT,
        hiddenWaters: WT
      } = TT;
      const {
        t: zT
      } = (0, tz.z)();
      return UT.awake ? (0, yz.jsx)("ul", {
        className: "SkyblockReachLogGrid",
        children: UT.fish.map((TT => (0, yz.jsx)(Sg, {
          fish: TT,
          letGoShown: mT
        }, TT.itemName)))
      }) : (0, yz.jsxs)(yz.Fragment, {
        children: [(0, yz.jsx)("p", {
          className: "SkyblockReachLogAsleep",
          children: zT("skyblockGame:reachLogAsleep")
        }), (0, yz.jsx)(sg, {
          view: WT,
          island: UT.id
        })]
      })
    }

    function Ng(TT) {
      var UT, mT;
      let {
        controller: WT,
        regulars: zT,
        hiddenWaters: MT
      } = TT;
      const gT = (0, az.j)(aW, WT.getSnapshot()),
        nT = function(TT) {
          return (0, az.j)(nz, TT.getSnapshot())
        }(MT),
        HT = (0, az.j)(mz, zT.getSnapshot()),
        {
          t: kT
        } = (0, tz.z)(),
        jT = Kz();
      if (!gT.enabled) return null;
      const lT = null !== (UT = gT.pages.find((TT => TT.id === gT.selected))) && void 0 !== UT ? UT : null;
      return (0, yz.jsx)(uz.e, {
        show: gT.open,
        close: WT.dismiss,
        togglePointerLock: !1,
        className: Oz()("SkyblockSkillsOverlay", HT.open && "SkyblockReachLogUnderLedger"),
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockReachLogPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockReachLogTitle",
          tabIndex: -1,
          ref: jT,
          onKeyDown: rz,
          children: [(0, yz.jsx)(Xg, {
            island: null !== (mT = null === lT || void 0 === lT ? void 0 : lT.id) && void 0 !== mT ? mT : null
          }), (0, yz.jsxs)("header", {
            className: "SkyblockReachLogHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockReachLogTitle",
                children: kT("skyblockGame:reachLogTitle")
              }), (0, yz.jsx)("p", {
                children: kT("skyblockGame:keeperWickReachLogWelcome")
              })]
            }), (0, yz.jsx)(Qg, {
              view: nT
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              onClick: WT.dismiss
            })]
          }), (0, yz.jsx)("nav", {
            className: "SkyblockReachLogTabs",
            role: "tablist",
            "data-pad-tabs": "1",
            children: gT.pages.map((TT => {
              const UT = TT.id === gT.selected,
                mT = TT.fish.some((TT => TT.fresh));
              return (0, yz.jsxs)("button", {
                type: "button",
                role: "tab",
                "aria-selected": UT,
                "data-pad-tab": !0,
                "data-pad-selected": UT ? "true" : void 0,
                className: Oz()("SkyblockReachLogTab", `Island-${TT.id}`, UT && "Selected", !TT.awake && "Asleep", TT.gold && "GoldPage", mT && "HasNews"),
                onClick: () => {
                  WT.selectPage(TT.id)
                },
                children: [(0, yz.jsx)("span", {
                  className: "SkyblockReachLogTabName",
                  children: TT.name
                }), TT.awake && (0, yz.jsx)("span", {
                  className: "SkyblockReachLogTabCount",
                  children: kT("skyblockGame:reachLogCaughtCount", {
                    caught: TT.caught,
                    total: TT.total
                  })
                })]
              }, TT.id)
            }))
          }), (0, yz.jsxs)("div", {
            className: Oz()("SkyblockReachLogPage", null !== lT && `Island-${lT.id}`),
            role: "tabpanel",
            children: [null !== lT && (0, yz.jsx)(Gg, {
              page: lT,
              letGoShown: gT.letGoShown,
              hiddenWaters: nT
            }), !0 === (null === lT || void 0 === lT ? void 0 : lT.awake) && null !== lT.returner && (0, yz.jsx)(Kg, {
              returner: lT.returner
            }), !0 === (null === lT || void 0 === lT ? void 0 : lT.awake) && (0, yz.jsx)(dg, {
              controller: zT,
              island: lT.id
            })]
          }), (0, yz.jsx)("footer", {
            className: Oz()("SkyblockReachLogFooter", null !== lT && `Island-${lT.id}`, !0 === (null === lT || void 0 === lT ? void 0 : lT.gold) && "GoldPage"),
            children: !0 === (null === lT || void 0 === lT ? void 0 : lT.gold) ? (0, yz.jsx)("span", {
              className: "SkyblockReachLogGoldLine",
              children: kT("skyblockGame:keeperWickReachLogPageGold")
            }) : (0, yz.jsxs)(yz.Fragment, {
              children: [(0, yz.jsx)(rg, {
                letGoShown: gT.letGoShown,
                haloShown: !0 === (null === lT || void 0 === lT ? void 0 : lT.fish.some((TT => TT.halo)))
              }), (0, yz.jsx)("span", {
                className: "SkyblockReachLogReward",
                children: kT("skyblockGame:reachLogPageReward")
              })]
            })
          })]
        })
      })
    }
    var Eg = mT(4932);

    function hg(TT) {
      let {
        conversation: UT,
        completedLabel: mT
      } = TT;
      return (0, yz.jsxs)("article", {
        className: "SkyblockDialogueConversation",
        children: [(0, yz.jsxs)("header", {
          children: [(0, yz.jsx)("h3", {
            children: UT.questName
          }), UT.completed && (0, yz.jsx)("span", {
            className: "SkyblockDialogueCompleted",
            children: mT
          })]
        }), UT.lines.map((TT => (0, yz.jsx)(Eg.d, {
          display: TT.display
        }, TT.key)))]
      })
    }

    function Dg(TT) {
      let {
        controller: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)(), WT = (0, az.j)(kz, UT.getSnapshot()), zT = Kz();
      if (!WT.enabled) return null;
      const MT = !WT.loading && 0 === WT.conversations.length;
      return (0, yz.jsx)(uz.e, {
        show: WT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockDialoguePanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockDialogueTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockDialogueTitle",
                children: mT("skyblockDialogue:title")
              }), (0, yz.jsx)("p", {
                children: mT("skyblockDialogue:intro")
              })]
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              onClick: UT.dismiss
            })]
          }), (0, yz.jsxs)("div", {
            className: Oz()("SkyblockDialogueBody", {
              SingleColumn: null !== WT.questFocus || 0 === WT.characters.length
            }),
            children: [null === WT.questFocus && WT.characters.length > 0 && (0, yz.jsx)("nav", {
              className: "SkyblockDialogueCharacters",
              children: WT.characters.map((TT => (0, yz.jsx)(Cz.e, {
                className: Oz()("SkyblockDialogueCharacter", {
                  Selected: TT.selected
                }),
                onClick: () => {
                  UT.selectCharacter(TT.id)
                },
                children: (0, yz.jsx)(dz.e, {
                  text: TT.styling
                })
              }, TT.id)))
            }), (0, yz.jsxs)("div", {
              className: "SkyblockDialogueConversations",
              children: [null !== WT.questFocus && (0, yz.jsx)(Cz.e, {
                className: "SkyblockDialogueBack",
                onClick: UT.showCharacters,
                children: mT("skyblockDialogue:allCharacters")
              }), WT.loading && (0, yz.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: mT("skyblockDialogue:loading")
              }), MT && (0, yz.jsx)("p", {
                className: "SkyblockDialogueEmpty",
                children: mT(null === WT.questFocus ? "skyblockDialogue:empty" : "skyblockDialogue:questEmpty")
              }), WT.conversations.map((TT => (0, yz.jsx)(hg, {
                conversation: TT,
                completedLabel: WT.completedLabel
              }, TT.questId)))]
            })]
          })]
        })
      })
    }

    function og(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(Bz, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = Kz();
      return mT.enabled ? (0, yz.jsx)(uz.e, {
        show: mT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockAutographsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockAutographsTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockSkillsHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockAutographsTitle",
                children: WT("skyblockGame:autographBook")
              }), (0, yz.jsx)("p", {
                children: WT("skyblockGame:autographBookIntro")
              })]
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              onClick: UT.dismiss
            })]
          }), (0, yz.jsxs)("div", {
            className: "SkyblockAutographsBody",
            children: [(0, yz.jsxs)("div", {
              className: "SkyblockAutographTotals",
              children: [(0, yz.jsxs)("div", {
                className: "SkyblockAutographTotal",
                children: [(0, yz.jsx)("strong", {
                  children: mT.total
                }), (0, yz.jsx)("span", {
                  children: WT("skyblockGame:autographTotal")
                })]
              }), (0, yz.jsxs)("div", {
                className: "SkyblockAutographTotal Ranked",
                children: [(0, yz.jsx)("strong", {
                  children: mT.rankTotal
                }), (0, yz.jsx)("span", {
                  children: WT("skyblockGame:autographRankTotal")
                })]
              })]
            }), 0 === mT.entries.length ? (0, yz.jsx)("p", {
              className: "SkyblockAutographsEmpty",
              children: WT("skyblockGame:autographBookEmpty")
            }) : (0, yz.jsx)("ul", {
              className: "SkyblockAutographList",
              children: mT.entries.map((TT => (0, yz.jsxs)("li", {
                className: Oz()("SkyblockAutograph", {
                  Ranked: null !== TT.rank
                }),
                style: null === TT.rank ? void 0 : {
                  color: TT.rank.colour
                },
                children: [null !== TT.rank && (0, yz.jsx)(BM.c, {
                  className: "SkyblockAutographRankIcon",
                  name: TT.rank.icon,
                  kit: (0, BM.d)(TT.rank.icon)
                }), (0, yz.jsxs)("div", {
                  className: "SkyblockAutographText",
                  children: [(0, yz.jsx)("span", {
                    className: "SkyblockAutographName",
                    children: TT.name
                  }), (0, yz.jsxs)("span", {
                    className: "SkyblockAutographDetails",
                    children: [null !== TT.rank && (0, yz.jsx)("span", {
                      className: "SkyblockAutographRank",
                      children: TT.rank.label
                    }), (0, yz.jsx)("span", {
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
    const Ag = (0, JT.memo)((function(TT) {
        let {
          controller: UT
        } = TT;
        return (0, yz.jsxs)("div", {
          className: "SkyblockQuestWaypoint",
          ref: UT.display.mountWaypoint,
          children: [(0, yz.jsx)("div", {
            className: "SkyblockQuestWaypointMarker"
          }), (0, yz.jsx)("div", {
            className: "SkyblockQuestWaypointTextClip",
            children: (0, yz.jsxs)("div", {
              className: "SkyblockQuestWaypointText",
              children: [(0, yz.jsx)("span", {
                className: "SkyblockQuestWaypointLabel"
              }), (0, yz.jsx)("span", {
                className: "SkyblockQuestWaypointDistance"
              }), (0, yz.jsx)("span", {
                className: "SkyblockQuestWaypointHint",
                hidden: !0
              })]
            })
          })]
        })
      })),
      Rg = {
        started: "!",
        quest: "\u2605",
        step: "\u2713",
        skillLevel: "\u25b2",
        landmark: "\u25c6",
        npcNote: "\u2709\ufe0e"
      };

    function Tn(TT) {
      return "next" === TT.phase ? "\u2192" : Rg[TT.kind]
    }
    const Un = (0, JT.memo)((function(TT) {
      let {
        controller: UT,
        display: mT
      } = TT;
      const WT = (0, az.j)(lm, UT.getNotificationSnapshot()),
        [zT, MT] = (0, JT.useState)(!1);
      return (0, az.g)("qteStateUpdated", (TT => {
        MT(TT.isActive)
      })), (0, yz.jsxs)("div", {
        className: "SkyblockQuestNotificationAnchor" + (zT ? " UnderQte" : ""),
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [WT && (0, yz.jsxs)("div", {
          className: `SkyblockQuestNotification ${WT.kind} ${WT.phase}`,
          style: {
            "--quest-notification-duration": `${WT.durationMs}ms`,
            ...WT.accent && {
              "--quest-notification-accent": WT.accent
            }
          },
          children: [(0, yz.jsxs)("div", {
            className: "SkyblockQuestNotificationSymbols" + (WT.iconItem ? " WithIcon" : ""),
            "aria-hidden": "true",
            children: [(0, yz.jsx)("span", {
              className: "SkyblockQuestNotificationMark",
              children: Tn(WT)
            }), WT.iconItem && (0, yz.jsx)("span", {
              className: "SkyblockQuestNotificationIcon",
              children: (0, yz.jsx)(xz.b, {
                itemName: WT.iconItem,
                amount: 0
              })
            })]
          }), (0, yz.jsxs)("div", {
            className: "SkyblockQuestNotificationText",
            children: [(0, yz.jsx)("span", {
              className: "SkyblockQuestNotificationTitle",
              children: WT.title
            }), (0, yz.jsx)("strong", {
              className: "SkyblockQuestNotificationName",
              children: (0, yz.jsx)(nM.b, {
                text: WT.name
              })
            }), WT.description && (0, yz.jsx)("span", {
              className: "SkyblockQuestNotificationDescription",
              children: (0, yz.jsx)(nM.b, {
                text: WT.description
              })
            }), WT.reward && (0, yz.jsx)("span", {
              className: "SkyblockQuestNotificationReward",
              children: (0, yz.jsx)(nM.b, {
                text: WT.reward
              })
            })]
          })]
        }, WT.token), (null === WT || void 0 === WT ? void 0 : WT.waypointNameKey) && (0, yz.jsx)("div", {
          className: "SkyblockQuestNotificationWaypointOrigin",
          "data-waypoint-name-key": WT.waypointNameKey,
          "data-notification-token": WT.token,
          ref: mT.mountWaypointOrigin,
          "aria-hidden": "true"
        }, `waypoint-${WT.token}`)]
      })
    }));

    function mn(TT) {
      const UT = parseInt(TT.replace("#", ""), 16);
      return `${UT>>16&255}, ${UT>>8&255}, ${255&UT}`
    }
    const Wn = (0, JT.memo)((function(TT) {
      let {
        controller: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)(), WT = (0, az.j)(Vm, UT.getSnapshot());
      if (!WT) return null;
      const zT = "arrival" === WT.phase;
      return (0, yz.jsxs)("div", {
        className: Oz()("SkyblockPortalTransit", {
          Departure: !zT,
          Arrival: zT
        }),
        style: {
          "--portal-rgb": mn(WT.colour),
          "--portal-duration": `${WT.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, yz.jsx)("div", {
          className: "SkyblockPortalTransitVeil",
          "aria-hidden": "true"
        }), (0, yz.jsx)("div", {
          className: "SkyblockPortalTransitRim",
          "aria-hidden": "true",
          onAnimationEnd: () => {
            UT.finishArrival(WT.token)
          }
        }), (0, yz.jsxs)("div", {
          className: "SkyblockPortalTransitTitle",
          children: [(0, yz.jsx)("div", {
            className: "SkyblockPortalTransitBand",
            "aria-hidden": "true"
          }), !zT && (0, yz.jsx)("span", {
            className: "SkyblockPortalTransitEyebrow",
            children: mT("skyblockGame:portalTransitHeading")
          }), (0, yz.jsx)("strong", {
            className: "SkyblockPortalTransitZone",
            children: mT(WT.zoneNameKey)
          })]
        })]
      }, WT.token)
    }));

    function zn() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    }

    function Mn() {
      const TT = document.querySelector(".SkyblockHudCoins"),
        UT = null === TT || void 0 === TT ? void 0 : TT.getBoundingClientRect();
      return UT && UT.width > 0 ? {
        x: UT.left + Math.min(UT.width, 24) / 2,
        y: UT.top + UT.height / 2
      } : {
        x: window.innerWidth - 48,
        y: 48
      }
    }

    function gn(TT) {
      return {
        x: TT.left + TT.width / 2,
        y: TT.top + TT.height / 2
      }
    }

    function nn() {
      var TT;
      const UT = null === (TT = document.querySelector(".HotBar")) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
      return UT && UT.width > 0 ? gn(UT) : {
        x: window.innerWidth / 2,
        y: window.innerHeight - 40
      }
    }

    function Hn(TT) {
      let {
        items: UT,
        origins: mT,
        target: WT
      } = TT;
      return (0, yz.jsx)("div", {
        className: "SkyblockDailyRewardFlyingItems",
        children: UT.map(((TT, UT) => {
          const zT = mT[UT];
          return (0, yz.jsx)("span", {
            className: "SkyblockDailyRewardFlyingItem",
            style: {
              left: `${zT.x}px`,
              top: `${zT.y}px`,
              "--item-dx": WT.x - zT.x + "px",
              "--item-dy": WT.y - zT.y + "px",
              "--item-delay": 2e3 + 160 * UT + "ms",
              "--item-flight": "700ms"
            },
            children: (0, yz.jsx)(xz.b, {
              itemName: TT.dailyRewardItemName,
              amount: 0
            })
          }, TT.dailyRewardItemName)
        }))
      })
    }

    function kn(TT, UT) {
      const mT = -Math.PI / 2 + 1.25 * (TT / (UT - 1) * 2 - 1),
        WT = 70 + TT % 3 * 22;
      return {
        x: Math.cos(mT) * WT,
        y: Math.sin(mT) * WT * .7
      }
    }

    function jn(TT) {
      let {
        origin: UT,
        target: mT,
        count: WT
      } = TT;
      const zT = [];
      for (let MT = 0; MT < WT; MT++) {
        const TT = kn(MT, WT);
        zT.push((0, yz.jsx)("span", {
          className: "SkyblockDailyRewardCoin",
          style: {
            left: `${UT.x}px`,
            top: `${UT.y}px`,
            "--coin-bx": `${TT.x}px`,
            "--coin-by": `${TT.y}px`,
            "--coin-dx": mT.x - UT.x + "px",
            "--coin-dy": mT.y - UT.y + "px",
            "--coin-delay": `${Gm(MT,WT)}ms`,
            "--coin-flight": "650ms"
          },
          children: (0, yz.jsx)(xz.b, {
            itemName: "Gold Coin",
            amount: 0
          })
        }, MT))
      }
      return (0, yz.jsx)("div", {
        className: "SkyblockDailyRewardCoins",
        children: zT
      })
    }

    function Ln(TT) {
      let {
        day: UT
      } = TT;
      const mT = xT[UT - 1];
      return (0, yz.jsxs)(yz.Fragment, {
        children: [(0, yz.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, yz.jsx)(xz.b, {
            itemName: "Gold Coin",
            amount: 0
          }), (0, wz.h)(mT.dailyRewardCoins)]
        }), mT.dailyRewardItems.map((TT => (0, yz.jsxs)("span", {
          className: "SkyblockDailyRewardFooterReward",
          children: [(0, yz.jsx)(xz.b, {
            itemName: TT.dailyRewardItemName,
            amount: 0
          }), "\xd7", TT.dailyRewardItemAmount]
        }, TT.dailyRewardItemName)))]
      })
    }

    function pn(TT) {
      let {
        day: UT
      } = TT;
      const mT = wT(UT);
      return (0, yz.jsx)("ol", {
        className: "SkyblockDailyRewardStrip",
        children: xT.map(((TT, WT) => {
          const zT = WT + 1;
          return (0, yz.jsxs)("li", {
            className: Oz()("SkyblockDailyRewardTile", {
              Claimed: zT < UT && zT !== mT,
              Today: zT === UT,
              Tomorrow: zT === mT,
              Jackpot: zT === dT
            }),
            children: [(0, yz.jsx)("span", {
              className: "SkyblockDailyRewardTileDay",
              children: zT
            }), (0, yz.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward SkyblockDailyRewardTileCoins",
              children: [(0, yz.jsx)(xz.b, {
                itemName: "Gold Coin",
                amount: 0
              }), (0, wz.h)(TT.dailyRewardCoins)]
            }), TT.dailyRewardItems.map((TT => (0, yz.jsxs)("span", {
              className: "SkyblockDailyRewardTileReward",
              children: [(0, yz.jsx)(xz.b, {
                itemName: TT.dailyRewardItemName,
                amount: 0
              }), "\xd7", TT.dailyRewardItemAmount]
            }, TT.dailyRewardItemName)))]
          }, zT)
        }))
      })
    }

    function Bn(TT) {
      let {
        view: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)(), WT = (0, JT.useRef)(null), zT = (0, JT.useRef)(null), [MT, gT] = (0, JT.useState)(null);
      (0, JT.useLayoutEffect)((() => {
        var TT;
        const UT = null === (TT = WT.current) || void 0 === TT ? void 0 : TT.getBoundingClientRect();
        if (UT) {
          var mT, MT;
          const TT = Array.from(null !== (mT = null === (MT = zT.current) || void 0 === MT ? void 0 : MT.children) && void 0 !== mT ? mT : [], (TT => gn(TT.getBoundingClientRect())));
          gT({
            origin: gn(UT),
            target: Mn(),
            itemOrigins: TT,
            itemTarget: nn()
          })
        }
      }), []);
      const nT = wT(UT.day),
        HT = function(TT, UT) {
          const [mT, WT] = (0, JT.useState)((() => zn() ? TT : 0));
          return (0, JT.useEffect)((() => {
            if (zn()) return;
            const mT = performance.now();
            let zT = 0;
            const MT = gT => {
              const nT = Math.min(Math.max((gT - mT) / UT, 0), 1);
              WT(Math.round(TT * (1 - (1 - nT) ** 3))), nT < 1 && (zT = requestAnimationFrame(MT))
            };
            return zT = requestAnimationFrame(MT), () => {
              cancelAnimationFrame(zT)
            }
          }), [TT, UT]), mT
        }(UT.coins, 450);
      return (0, yz.jsxs)("div", {
        className: Oz()("SkyblockDailyReward", {
          Jackpot: UT.day === dT
        }),
        style: {
          "--daily-duration": `${UT.durationMs}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: [(0, yz.jsx)("div", {
          className: "SkyblockDailyRewardGlow",
          "aria-hidden": "true"
        }), (0, yz.jsxs)("div", {
          className: "SkyblockDailyRewardCard",
          children: [(0, yz.jsxs)("div", {
            className: "SkyblockDailyRewardHeading",
            children: [(0, yz.jsx)("span", {
              className: "SkyblockDailyRewardTitle",
              children: mT("skyblockGame:dailyRewardTitle")
            }), (0, yz.jsx)("span", {
              className: "SkyblockDailyRewardDay",
              children: mT("skyblockGame:dailyRewardDay", {
                day: String(UT.day)
              })
            })]
          }), (0, yz.jsxs)("div", {
            className: "SkyblockDailyRewardAmount",
            ref: WT,
            children: [(0, yz.jsx)(xz.b, {
              itemName: "Gold Coin",
              amount: 0
            }), (0, yz.jsxs)("span", {
              children: ["+", (0, wz.h)(HT)]
            })]
          }), UT.items.length > 0 && (0, yz.jsx)("div", {
            className: "SkyblockDailyRewardItems",
            ref: zT,
            children: UT.items.map((TT => (0, yz.jsxs)("span", {
              className: "SkyblockDailyRewardItem",
              children: [(0, yz.jsx)(xz.b, {
                itemName: TT.dailyRewardItemName,
                amount: 0
              }), "\xd7", TT.dailyRewardItemAmount]
            }, TT.dailyRewardItemName)))
          }), (0, yz.jsx)(pn, {
            day: UT.day
          }), (0, yz.jsxs)("div", {
            className: "SkyblockDailyRewardFooter",
            children: [mT("skyblockGame:dailyRewardComeBack"), (0, yz.jsx)(Ln, {
              day: nT
            })]
          })]
        }), null !== MT && (0, yz.jsx)(jn, {
          origin: MT.origin,
          target: MT.target,
          count: UT.flyingCoins
        }), null !== MT && MT.itemOrigins.length === UT.items.length && (0, yz.jsx)(Hn, {
          items: UT.items,
          origins: MT.itemOrigins,
          target: MT.itemTarget
        })]
      })
    }
    const Zn = (0, JT.memo)((function(TT) {
        let {
          controller: UT
        } = TT;
        const mT = (0, az.j)(rm, UT.getSnapshot());
        return mT ? (0, yz.jsx)(Bn, {
          view: mT
        }, mT.token) : null
      })),
      cn = "Gold Coin";

    function vn(TT) {
      return 650 + 220 * TT
    }

    function fn(TT) {
      return {
        "--letter-delay": `${vn(TT)}ms`,
        "--letter-land": `${vn(TT)+300}ms`
      }
    }

    function qn(TT) {
      let {
        letterCount: UT
      } = TT;
      return (0, yz.jsxs)("div", {
        className: "SkyblockMailboxArt",
        "aria-hidden": "true",
        children: [(0, yz.jsx)("img", {
          className: "SkyblockMailboxFrame",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAPUlEQVR4nGNgGBTgPxbMgKHoU7Y/Cr7hqI9VMVji8yqV//8veYHxPC0l7ApBEugYp/UgXBNljteN6BrIBwC4hzWhsgbVSgAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, yz.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameFlag",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAATElEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEU/H/T9n+YIUgGoRvOOpjVQyWACkE0SA8T0sJu0KQBDrGaT0I10SZ43UjugbyAQAsw0ABFINz6QAAAABJRU5ErkJggg==",
          alt: ""
        }), (0, yz.jsx)("img", {
          className: "SkyblockMailboxFrame SkyblockMailboxFrameOpen",
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAW0lEQVR4nGNgIBP8h2L8iv5f8gJjQor/f16lAlOEjBlQFH3K9gcrBNEgHGyt9P//rwMYiv/fcNQHKwTRIPzh8SEwxlA4T0sJBYNMBJmM1XoQrokyx+tGdA3kAwD3jUzPjfodhAAAAABJRU5ErkJggg==",
          alt: ""
        }), Array.from({
          length: UT
        }, ((TT, UT) => (0, yz.jsx)("img", {
          className: "SkyblockMailboxFlyingLetter",
          style: fn(UT),
          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAP0lEQVR4nGNgoCX4jwOjgP//fx1AwZ+y/f/fcNTHUPz/w+NDKBikaJ6WEnaFa7qCwBhZA0ETcSkEKybGM9QDAOtbYxX7UuH5AAAAAElFTkSuQmCC",
          alt: ""
        }, UT)))]
      })
    }

    function bn(TT) {
      var UT, mT, WT;
      let {
        letter: zT,
        index: MT
      } = TT;
      const {
        t: gT
      } = (0, tz.z)(), nT = null !== (UT = null === (mT = zT.items[0]) || void 0 === mT ? void 0 : mT.itemName) && void 0 !== UT ? UT : cn;
      return (0, yz.jsxs)("li", {
        className: "SkyblockMailboxLetter",
        style: fn(MT),
        children: [(0, yz.jsx)("div", {
          className: "SkyblockMailboxStamp",
          "aria-hidden": "true",
          children: (0, yz.jsx)(xz.b, {
            itemName: nT,
            amount: 0
          })
        }), (0, yz.jsx)("div", {
          className: "SkyblockMailboxReason",
          children: gT(zT.reasonKey, null !== (WT = zT.reasonParams) && void 0 !== WT ? WT : void 0)
        }), (0, yz.jsxs)("div", {
          className: "SkyblockMailboxContents",
          children: [zT.coins > 0 && (0, yz.jsxs)("span", {
            className: "SkyblockMailboxGift SkyblockMailboxCoins",
            children: [(0, yz.jsx)(xz.b, {
              itemName: cn,
              amount: 0
            }), "+", (0, wz.h)(zT.coins)]
          }), zT.items.map(((TT, UT) => (0, yz.jsxs)("span", {
            className: "SkyblockMailboxGift",
            children: [(0, yz.jsx)(xz.b, {
              itemName: TT.itemName,
              amount: 0
            }), TT.label, " \xd7", TT.amount]
          }, UT)))]
        })]
      })
    }

    function On(TT) {
      let {
        view: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)();
      return (0, yz.jsx)("div", {
        className: "SkyblockMailbox",
        style: {
          "--mail-duration": `${UT.durationMs}ms`,
          "--flag-up": "300ms",
          "--door-open": "500ms",
          "--more-land": `${vn(UT.letters.length)+300}ms`
        },
        role: "status",
        "aria-live": "polite",
        children: (0, yz.jsxs)("div", {
          className: "SkyblockMailboxCard",
          children: [(0, yz.jsxs)("div", {
            className: "SkyblockMailboxHeading",
            children: [(0, yz.jsx)(qn, {
              letterCount: UT.letters.length
            }), (0, yz.jsx)("span", {
              className: "SkyblockMailboxTitle",
              children: mT("skyblockGame:mailboxTitle")
            })]
          }), (0, yz.jsx)("ol", {
            className: "SkyblockMailboxLetters",
            children: UT.letters.map(((TT, UT) => (0, yz.jsx)(bn, {
              letter: TT,
              index: UT
            }, UT)))
          }), UT.more > 0 && (0, yz.jsx)("div", {
            className: "SkyblockMailboxMore",
            children: mT("skyblockGame:mailboxMore", {
              count: String(UT.more)
            })
          })]
        })
      })
    }
    const en = (0, JT.memo)((function(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(Em, UT.getSnapshot());
      return mT ? (0, yz.jsx)(On, {
        view: mT
      }, mT.token) : null
    }));

    function Yn(TT) {
      let {
        controller: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)(), WT = (0, az.j)(VW, UT.getSnapshot());
      if (null === WT) return null;
      const zT = WT.fullSet ? "empty" === WT.fuelState ? {
        text: mT("skyblockGame:magmawardHudNoFuel"),
        tone: "empty"
      } : null : {
        text: mT("skyblockGame:magmawardHudFullSet", {
          worn: String(WT.wornCount)
        }),
        tone: "partial"
      };
      return (0, yz.jsx)(Yz.d, {
        placement: "statBars",
        children: (0, yz.jsxs)("div", {
          className: Oz()("SkyblockMagmawardHud", `SkyblockMagmawardHud-${WT.fuelState}`, {
            "SkyblockMagmawardHud-partial": !WT.fullSet,
            "SkyblockMagmawardHud-armed": WT.fullSet && "empty" !== WT.fuelState
          }),
          children: [null !== WT.flare && (0, yz.jsx)("div", {
            className: `SkyblockMagmawardFlare SkyblockMagmawardFlare-${WT.flare}`
          }, `flare:${WT.flareToken}`), (0, yz.jsx)("div", {
            className: Oz()("SkyblockMagmawardPieces", {
              SkyblockMagmawardPiecesComplete: WT.setLit
            }),
            children: WT.pieces.map(((TT, UT) => (0, yz.jsx)("div", {
              className: Oz()("SkyblockMagmawardPiece", {
                SkyblockMagmawardPieceWorn: TT.worn,
                SkyblockMagmawardPieceJustWorn: TT.justWorn
              }),
              children: (0, yz.jsx)(xz.b, {
                itemName: TT.itemName,
                amount: 0
              })
            }, `${UT}:${TT.wornToken}`)))
          }, `pieces:${WT.setLitToken}`), (0, yz.jsxs)("div", {
            className: "SkyblockMagmawardFuel",
            children: [(0, yz.jsx)("div", {
              className: "SkyblockMagmawardLowGlow"
            }), (0, yz.jsxs)("div", {
              className: Oz()("SkyblockMagmawardFuelCounter", WT.pulse && `SkyblockMagmawardFuelCounter-${WT.pulse}`),
              children: [(0, yz.jsx)("div", {
                className: "SkyblockMagmawardFuelIcon",
                children: (0, yz.jsx)(xz.b, {
                  itemName: "Magmaward Fuel",
                  amount: 0
                })
              }), (0, yz.jsx)("span", {
                className: "SkyblockMagmawardFuelCount SmallTextBold",
                children: WT.fuel
              })]
            }, `counter:${WT.pulseToken}`), "burn" === WT.pulse && (0, yz.jsx)("span", {
              className: "SkyblockMagmawardEmber SmallTextBold",
              children: "-1"
            }, `ember:${WT.pulseToken}`)]
          }), zT && (0, yz.jsx)("div", {
            className: `SkyblockMagmawardCaption SkyblockMagmawardCaption-${zT.tone} SmallTextBold`,
            children: zT.text
          })]
        })
      })
    }

    function Jn(TT) {
      let {
        controller: UT
      } = TT;
      const {
        t: mT,
        selectedLanguage: WT
      } = (0, tz.z)(), zT = (0, az.j)(CW, UT.getSnapshot());
      return null === zT ? null : (0, yz.jsx)(Yz.d, {
        placement: "statBars",
        children: (0, yz.jsxs)("div", {
          className: Oz()("SkyblockGlowtideChip", {
            SkyblockGlowtideChipInRange: zT.inRange
          }),
          style: {
            "--glowtide-colour": zT.colour
          },
          "aria-label": mT("skyblockGame:glowtideChipLabel"),
          children: [(0, yz.jsx)("div", {
            className: "SkyblockGlowtideChipOrb"
          }), zT.inRange ? (0, yz.jsx)("span", {
            className: "SkyblockGlowtideChipCall SmallTextBold",
            children: mT("skyblockGame:glowtideChipInRange")
          }, `call:${zT.inRangeToken}`) : (0, yz.jsxs)(yz.Fragment, {
            children: [(0, yz.jsx)("div", {
              ref: UT.mountArrow,
              className: "SkyblockGlowtideChipArrow"
            }), (0, yz.jsx)("span", {
              className: "SkyblockGlowtideChipDistance SmallTextBold",
              children: mT("skyblockGame:waypointDistance", {
                distance: OT(zT.distance, WT.code)
              })
            })]
          })]
        })
      })
    }

    function xn(TT) {
      let {
        controller: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)(), WT = (0, az.j)(KW, UT.getSnapshot());
      return null === WT ? null : (0, yz.jsx)(Yz.d, {
        placement: "statBars",
        children: (0, yz.jsxs)("div", {
          className: Oz()("SkyblockGlowMeter", {
            SkyblockGlowMeterFull: WT.full
          }),
          "aria-label": mT("skyblockGame:glowMeterLabel", {
            fill: String(WT.fill),
            fl: String(WT.fl)
          }),
          children: [WT.burst && (0, yz.jsx)("div", {
            className: "SkyblockGlowMeterBurst"
          }, `burst:${WT.burstToken}`), (0, yz.jsxs)("div", {
            className: "SkyblockGlowMeterVial",
            children: [(0, yz.jsx)("div", {
              className: "SkyblockGlowMeterLiquid",
              style: {
                transform: `scaleX(${WT.ratio})`
              }
            }), WT.gained && (0, yz.jsx)("div", {
              className: "SkyblockGlowMeterGlint"
            }, `gain:${WT.gainToken}`), WT.full && Array.from({
              length: 5
            }, ((TT, UT) => (0, yz.jsx)("span", {
              className: "SkyblockGlowMeterSparkle"
            }, UT)))]
          }), WT.full && WT.rares.map((TT => (0, yz.jsx)("div", {
            className: "SkyblockGlowMeterRare",
            children: (0, yz.jsx)(xz.b, {
              itemName: TT,
              amount: 0
            })
          }, TT))), WT.ready && (0, yz.jsx)("div", {
            className: "SkyblockGlowMeterReady SmallTextBold",
            children: (0, yz.jsx)("span", {
              children: mT("skyblockGame:glowMeterReady")
            })
          }, `ready:${WT.fullToken}`)]
        })
      })
    }

    function dn(TT) {
      let {
        controller: UT
      } = TT;
      const {
        t: mT
      } = (0, tz.z)(), WT = (0, az.j)(GW, UT.getSnapshot());
      if (null === WT) return null;
      const zT = "waiting" === WT.phase,
        MT = {
          animationDuration: `${WT.waitMs}ms`,
          animationDelay: -WT.elapsedMs + "ms"
        },
        gT = zT ? void 0 : {
          animationDuration: `${WT.waitMs}ms`
        };
      return (0, yz.jsxs)("div", {
        className: zT ? "SkyblockHushWait" : "SkyblockHushWait SkyblockHushWaitAbandoned",
        children: [zT && (0, yz.jsxs)("div", {
          className: "SkyblockHushWaitRing",
          children: [Array.from({
            length: 3
          }, ((TT, UT) => (0, yz.jsx)("span", {
            className: "SkyblockHushWaitRipple"
          }, UT))), (0, yz.jsx)("span", {
            className: "SkyblockHushWaitClosing",
            style: MT
          }), (0, yz.jsxs)("svg", {
            className: "SkyblockHushWaitProgress",
            viewBox: "0 0 100 100",
            children: [(0, yz.jsx)("circle", {
              className: "SkyblockHushWaitTrack",
              cx: "50",
              cy: "50",
              r: 46
            }), (0, yz.jsx)("circle", {
              className: "SkyblockHushWaitArc",
              cx: "50",
              cy: "50",
              r: 46,
              pathLength: 100,
              style: MT
            })]
          }), (0, yz.jsx)("span", {
            className: "SkyblockHushWaitMoon"
          })]
        }), (0, yz.jsx)("div", {
          className: "SkyblockHushWaitLine SmallTextBold",
          style: gT,
          children: mT(WT.line)
        }, WT.lineIndex)]
      }, WT.token)
    }

    function wn(TT) {
      let {
        chart: UT,
        showHere: mT,
        className: WT
      } = TT;
      return (0, yz.jsx)("div", {
        className: Oz()("SkyblockTideChartGrid", WT, null !== UT.pictureName && "Complete"),
        "aria-hidden": "true",
        children: UT.cells.map(((TT, WT) => {
          const zT = 0 !== (UT.pulseCells & 1 << WT),
            MT = UT.castCell === WT;
          return (0, yz.jsx)("span", {
            className: Oz()("SkyblockTideChartCell", `Cell-${TT}`, zT && "Pulse", MT && "Cast", mT && UT.hereCell === WT && "Here")
          }, `${WT}:${zT?`p${UT.pulseToken}`:""}:${MT?`c${UT.castToken}`:""}`)
        }))
      })
    }

    function tn(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(EW, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = mT.chip;
      if (!mT.enabled || null === zT) return null;
      const MT = WT("skyblockGame:tideChartsChipLabel", {
        island: zT.islandName,
        lit: String(zT.lit),
        ink: String(zT.ink)
      });
      return (0, yz.jsx)(Yz.d, {
        placement: "statBars",
        children: (0, yz.jsxs)("button", {
          type: "button",
          tabIndex: -1,
          className: Oz()("SkyblockTideChartsChip", mT.open && "Open", null !== zT.pictureName && "Complete"),
          "aria-label": MT,
          title: MT,
          onMouseDown: TT => {
            TT.preventDefault()
          },
          onClick: UT.toggle,
          children: [(0, yz.jsx)(wn, {
            chart: zT,
            showHere: !1,
            className: "Mini"
          }), (0, yz.jsxs)("span", {
            className: "SkyblockTideChartsChipCount SmallTextBold",
            children: [zT.lit, "/", zT.ink]
          })]
        })
      })
    }

    function an(TT) {
      let {
        controller: UT
      } = TT;
      const mT = (0, az.j)(EW, UT.getSnapshot()),
        {
          t: WT
        } = (0, tz.z)(),
        zT = Kz(),
        MT = mT.card;
      return mT.enabled && null !== MT ? (0, yz.jsx)(uz.e, {
        show: mT.open,
        close: UT.dismiss,
        togglePointerLock: !1,
        className: "SkyblockSkillsOverlay",
        children: (0, yz.jsxs)("section", {
          className: "SkyblockSkillsPanel SkyblockTideChartsPanel",
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "skyblockTideChartsTitle",
          tabIndex: -1,
          ref: zT,
          onKeyDown: rz,
          children: [(0, yz.jsxs)("header", {
            className: "SkyblockTideChartsHeader",
            children: [(0, yz.jsxs)("div", {
              children: [(0, yz.jsx)("h2", {
                id: "skyblockTideChartsTitle",
                children: WT("skyblockGame:tideChartsTitle")
              }), (0, yz.jsx)("p", {
                className: "SkyblockTideChartsIntro",
                children: WT("skyblockGame:tideChartsIntro")
              })]
            }), (0, yz.jsx)(Cz.k, {
              padIgnore: !0,
              ariaLabel: WT("skyblockGame:tideChartsClose"),
              onClick: UT.dismiss
            })]
          }), mT.tabs.length > 1 && (0, yz.jsx)("div", {
            className: "SkyblockTideChartsTabs",
            role: "group",
            "aria-label": WT("skyblockGame:tideChartsIslands"),
            children: mT.tabs.map((TT => (0, yz.jsx)("button", {
              type: "button",
              className: Oz()("SkyblockTideChartsTab", TT.selected && "Selected"),
              "aria-pressed": TT.selected,
              onClick: () => {
                UT.VL(TT.island)
              },
              children: TT.name
            }, TT.island)))
          }), (0, yz.jsxs)("div", {
            className: "SkyblockTideChartsBody",
            children: [(0, yz.jsx)("div", {
              className: "SkyblockTideChartsMap",
              role: "img",
              "aria-label": MT.gridLabel,
              children: (0, yz.jsx)(wn, {
                chart: MT,
                showHere: !0,
                className: "Large"
              })
            }), (0, yz.jsxs)("div", {
              className: "SkyblockTideChartsInfo",
              children: [(0, yz.jsx)("h3", {
                children: MT.islandName
              }), (0, yz.jsx)("p", {
                className: "SkyblockTideChartsLit",
                children: MT.litText
              }), null === MT.pictureName ? (0, yz.jsx)("p", {
                className: "SkyblockTideChartsPicture",
                children: WT("skyblockGame:tideChartsPictureHidden")
              }) : (0, yz.jsx)("p", {
                className: "SkyblockTideChartsPicture Revealed",
                children: WT("skyblockGame:tideChartsPictureRevealed", {
                  picture: MT.pictureName
                })
              }, MT.pictureName), (0, yz.jsxs)("ul", {
                className: "SkyblockTideChartsLegend",
                "aria-hidden": "true",
                children: [(0, yz.jsxs)("li", {
                  children: [(0, yz.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-lit"
                  }), WT("skyblockGame:tideChartsLegendLit")]
                }), (0, yz.jsxs)("li", {
                  children: [(0, yz.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-clear"
                  }), WT("skyblockGame:tideChartsLegendClear")]
                }), null !== MT.hereCell && (0, yz.jsxs)("li", {
                  children: [(0, yz.jsx)("span", {
                    className: "SkyblockTideChartCell Cell-water Here"
                  }), WT("skyblockGame:tideChartsLegendHere")]
                })]
              }), (0, yz.jsxs)("p", {
                className: "SkyblockTideChartsFooter",
                children: [(0, yz.jsx)("span", {
                  children: mT.turnsText
                }), (0, yz.jsx)("span", {
                  children: mT.bookText
                })]
              })]
            })]
          })]
        })
      }) : null
    }

    function yn(TT) {
      var UT;
      let {
        controller: mT
      } = TT;
      const {
        selectedLanguage: WT
      } = (0, tz.z)(), zT = WT.code;
      (0, JT.useEffect)((() => {
        mT.setTranslator(((TT, UT) => (0, tz.v)(zT, TT, UT)), zT, ((TT, UT) => (0, tz.r)(zT, TT, UT)))
      }), [mT, zT]);
      const MT = (0, az.j)(LT, mT.map.getSnapshot()),
        {
          openInGameMenuName: gT
        } = (0, ez.h)(["openInGameMenuName"]);
      return (0, yz.jsxs)(yz.Fragment, {
        children: [(0, yz.jsx)(Un, {
          controller: mT.quests,
          display: mT.navigation.display
        }), MT.enabled && !gT && (0, yz.jsx)(zM, {
          controller: mT.navigation
        }), (0, yz.jsx)(Xz, {
          controller: mT,
          minimap: MT.enabled && (null === (UT = MT.presentation) || void 0 === UT ? void 0 : UT.minimap) && (0, yz.jsx)(WM, {
            view: MT.presentation.minimap,
            navigation: mT.navigation,
            controller: mT.map
          }),
          children: (0, yz.jsx)(pM, {
            controller: mT.quests,
            surface: "hud"
          })
        }), (0, yz.jsx)(Ag, {
          controller: mT.navigation
        }), (0, yz.jsx)(Wn, {
          controller: mT.portalTransit
        }), (0, yz.jsx)(Zn, {
          controller: mT.dailyReward
        }), (0, yz.jsx)(en, {
          controller: mT.mailbox
        }), (0, yz.jsx)(Yn, {
          controller: mT.magmaward
        }), (0, yz.jsx)(Jn, {
          controller: mT.glowtide
        }), (0, yz.jsx)(pg, {
          controller: mT.passage
        }), (0, yz.jsx)(tn, {
          controller: mT.tideCharts
        }), (0, yz.jsx)(xn, {
          controller: mT.glowMeter
        }), (0, yz.jsx)(Yg, {
          controller: mT.reachLog
        }), (0, yz.jsx)(dn, {
          controller: mT.hushWait
        }), (0, yz.jsx)(ig, {
          controller: mT.lampLight
        }), (0, yz.jsx)(MM, {
          controller: mT.skills,
          surface: "hud"
        })]
      })
    }

    function Xn(TT) {
      let {
        controller: UT
      } = TT;
      return (0, yz.jsxs)(yz.Fragment, {
        children: [(0, yz.jsx)(mM, {
          controller: UT.map,
          navigation: UT.navigation
        }), (0, yz.jsx)(MM, {
          controller: UT.skills,
          surface: "menu"
        }), (0, yz.jsx)(pM, {
          controller: UT.quests,
          surface: "menu"
        }), (0, yz.jsx)(EM, {
          controller: UT.dungeons
        }), (0, yz.jsx)(oM, {
          controller: UT.collections
        }), (0, yz.jsx)(Tg, {
          controller: UT.questGraph
        }), (0, yz.jsx)(Mg, {
          controller: UT.forge
        }), (0, yz.jsx)(lg, {
          controller: UT.smuggler
        }), (0, yz.jsx)(Og, {
          controller: UT.keepersChair,
          lampLight: UT.lampLight
        }), (0, yz.jsx)(Ng, {
          controller: UT.reachLog,
          regulars: UT.regulars,
          hiddenWaters: UT.hiddenWaters
        }), (0, yz.jsx)(wg, {
          controller: UT.regulars
        }), (0, yz.jsx)(Zg, {
          controller: UT.passage
        }), (0, yz.jsx)(an, {
          controller: UT.tideCharts
        }), (0, yz.jsx)(Dg, {
          controller: UT.dialogue
        }), (0, yz.jsx)(og, {
          controller: UT.autographs
        })]
      })
    }
    var In = mT(36855);
    const Qn = mW + kW;

    function sn(TT, UT, mT, WT, zT) {
      const MT = [],
        gT = [],
        nT = mT => {
          const WT = TT.playSound(UT, mT.sound, mT.volume, mT.rate);
          WT && (gT.push(WT), void 0 !== mT.cutAfter && MT.push(setTimeout((() => {
            WT.fade(WT.getVolume(), 0, 300)
          }), mT.cutAfter)))
        };
      for (const HT of function(TT, UT) {
          const mT = [{
            sound: "rpgKnifeSlice1",
            beat: mW,
            lead: 260,
            volume: .5,
            rate: 1
          }, {
            sound: "sweep6",
            beat: mW,
            lead: 140,
            volume: .35,
            rate: .85
          }, {
            sound: "rpgMetalPot1",
            beat: mW,
            lead: 100,
            volume: 1,
            rate: .78 + .04 * Math.random()
          }, {
            sound: "hit1",
            beat: mW,
            lead: 0,
            volume: .8,
            rate: .7
          }, {
            sound: "lowDrum1",
            beat: mW,
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
            sound: (0, In.d)("firecracker"),
            beat: 420,
            lead: 160,
            volume: .25,
            rate: 1.4,
            cutAfter: 500
          }, {
            sound: "fireBurn",
            beat: Qn + 150,
            lead: 400,
            volume: .6,
            rate: 1.2
          }, {
            sound: (0, In.d)("bigDrumSwish"),
            beat: Qn + 80,
            lead: 480,
            volume: .35,
            rate: 1,
            cutAfter: 1400
          }, {
            sound: "magicAccent2",
            beat: Qn + 60,
            lead: 180,
            volume: .5 + .06 * TT,
            rate: .82 + .07 * TT
          }];
          return TT >= 4 && mT.push({
            sound: "exp_levelup",
            beat: Qn + 120,
            lead: 60,
            volume: .35,
            rate: 1
          }), UT && mT.push({
            sound: "trumpetFlare",
            beat: Qn + 40,
            lead: 20,
            volume: .8,
            rate: 1
          }), mT.push({
            sound: "harp_pling",
            beat: WW,
            lead: 40,
            volume: .2,
            rate: 1.5
          }), mT
        }(mT, WT)) zT ? MT.push(setTimeout((() => {
        nT(HT)
      }), Math.max(0, HT.beat - HT.lead / HT.rate))) : HT.beat !== mW && "magicAccent2" !== HT.sound && "trumpetFlare" !== HT.sound || nT(HT);
      return () => {
        for (const TT of MT) clearTimeout(TT);
        for (const TT of gT) TT.fade(TT.getVolume(), 0, 120)
      }
    }
    class Fn {
      constructor(TT) {
        this.deps = TT, this.pending = new Map, this.localHook = null
      }
      hookWaiting(TT, UT) {
        this.pending.delete(TT);
        const mT = this.deps.now();
        if (null === UT) {
          var WT;
          if ((null === (WT = this.localHook) || void 0 === WT ? void 0 : WT.hookId) === TT) {
            const TT = mT >= this.localHook.biteAtMs - 300;
            this.localHook = null, this.deps.onLocalWaitEnded(TT)
          }
          return
        }
        const zT = mT + UT;
        this.settle(TT, zT) || (this.pending.size >= 16 && this.pending.delete(this.pending.keys().next().value), this.pending.set(TT, {
          untilMs: mT + 1e3,
          biteAtMs: zT
        }))
      }
      getLocalHook() {
        var TT, UT;
        return null !== (TT = null === (UT = this.localHook) || void 0 === UT ? void 0 : UT.hookId) && void 0 !== TT ? TT : null
      }
      afterRender() {
        if (0 === this.pending.size) return;
        const TT = this.deps.now();
        for (const [UT, {
            untilMs: mT,
            biteAtMs: WT
          }] of this.pending)(this.settle(UT, WT) || TT > mT) && this.pending.delete(UT)
      }
      dispose() {
        this.pending.clear(), this.localHook = null
      }
      settle(TT, UT) {
        const mT = this.deps.getLineOwner(TT);
        if (null === mT) return !1;
        if (!this.deps.isLocalPlayer(mT)) return !0;
        if (this.localHook = {
            hookId: TT,
            biteAtMs: UT
          }, !this.deps.isHushWaiting()) {
          const [UT, mT] = this.deps.getHookPosition(TT);
          this.deps.onCastLanded(UT, mT)
        }
        return this.deps.onLocalHookSettled(), !0
      }
    }
    var Pn = mT(4328);
    const Vn = {
        0: [15],
        1: [40, 60, 40],
        2: [40, 60, 40, 60, 60],
        3: [30, 50, 30, 50, 90]
      },
      un = {
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
    class Cn {
      constructor(TT) {
        this.deps = TT, this.tell = null
      }
      receiveTell(TT) {
        let {
          biteTellTier: UT
        } = TT;
        this.tell = {
          tier: UT,
          atMs: this.deps.now(),
          burst: !1
        }, this.burstAtHook()
      }
      onLocalHookSettled() {
        null !== this.tell && this.deps.now() - this.tell.atMs <= 500 && this.burstAtHook()
      }
      onLocalWaitEnded(TT) {
        const UT = this.tell;
        if (this.tell = null, !TT) return;
        const mT = null !== UT && this.deps.now() - UT.atMs <= 3e3 ? UT.tier : 0;
        this.deps.vibrate(Vn[mT])
      }
      burstAtHook() {
        const TT = this.tell,
          UT = this.deps.getLocalHookPosition();
        null === TT || TT.burst || null === UT || (TT.burst = !0, this.deps.playParticles(function(TT, UT) {
          let [mT, WT, zT] = UT;
          const {
            count: MT,
            rise: gT,
            colour: nT
          } = un[TT], [HT, kT, jT] = nT;
          return {
            texture: "glint",
            pos1: [mT - .3, WT, zT - .3],
            pos2: [mT + .3, WT + .2, zT + .3],
            dir1: [-.6, gT, -.6],
            dir2: [.6, 1.4 * gT, .6],
            minLifeTime: .5,
            maxLifeTime: .9,
            minEmitPower: 1,
            maxEmitPower: 1.6,
            minSize: .12,
            maxSize: .3,
            manualEmitCount: MT,
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
              minColor: [HT, kT, jT, 1],
              maxColor: [255, 255, 255, 1]
            }, {
              timeFraction: 1,
              minColor: [HT, kT, jT, 0],
              maxColor: [HT, kT, jT, 0]
            }],
            blendMode: Pn.e.Add,
            hideDist: 48
          }
        }(TT.tier, UT)))
      }
    }
    var rn = mT(1345),
      Kn = mT(2054),
      Sn = mT(44);

    function Gn(TT, UT) {
      return [{
        timeFraction: 0,
        minColor: [255 * TT[0], 255 * TT[1], 255 * TT[2], 1],
        maxColor: [255 * UT[0], 255 * UT[1], 255 * UT[2], 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }]
    }
    const Nn = [0, 0, 0],
      En = {
        texture: "glint",
        mipmaps: !1,
        fl: 24,
        minLifeTime: .18,
        maxLifeTime: .35,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 12,
        dir1: Nn,
        dir2: Nn,
        blendMode: Pn.e.OneOne
      },
      hn = {
        ...En,
        colorGradients: Gn([1, .88, .38], [1, .65, .15])
      },
      Dn = {
        ...En,
        colorGradients: Gn([.55, .95, 1], [.9, 1, 1])
      },
      An = [.5, .5, .5],
      Rn = {
        texture: "glint",
        mipmaps: !1,
        fl: 24,
        minLifeTime: .2,
        maxLifeTime: .4,
        minSize: .12,
        maxSize: .22,
        minEmitPower: .5,
        maxEmitPower: 1.5,
        emitRate: 0,
        colorGradients: Gn([1, .12, .12], [1, .35, .2]),
        blendMode: Pn.e.OneOne
      };
    class TH {
      constructor() {
        this.drops = new Map
      }
      pB(TT, UT) {
        if ("overflowFlash" === UT.kind) {
          const [mT, WT, zT] = UT.position, MT = TT.createParticles(Rn, {
            pos: [mT, WT, zT],
            half: An
          });
          return MT.emit(18), void MT.stop()
        }
        this.drops.has(UT.itemId) || this.drops.set(UT.itemId, {
          owner: UT.owner,
          cosmetic: UT.cosmetic,
          pickupDelayCleared: !1,
          seen: !1,
          markedAt: performance.now(),
          lastMovingAt: 0,
          lastPosition: [0, 0, 0],
          particles: null
        })
      }
      Cl(TT) {
        if (0 === this.drops.size) return;
        const UT = performance.now(),
          mT = TT.getCameraPosition();
        let WT = 0;
        for (const MT of this.drops.values()) null !== MT.particles && WT++;
        for (const [MT, gT] of this.drops) {
          const nT = TT.getPositionView(MT);
          if (null === nT) {
            var zT;
            if (gT.seen || UT - gT.markedAt > 5e3) null !== gT.particles && WT--, null === (zT = gT.particles) || void 0 === zT || zT.stop(), this.drops.delete(MT);
            continue
          }
          gT.cosmetic || !TT.isLocalPlayer(gT.owner) || gT.pickupDelayCleared || (TT.clearPickupDelay(MT), gT.pickupDelayCleared = !0);
          const HT = gT.lastPosition,
            kT = gT.seen && (nT[0] - HT[0]) ** 2 + (nT[1] - HT[1]) ** 2 + (nT[2] - HT[2]) ** 2 > 4e-4,
            jT = (nT[0] - mT[0]) ** 2 + (nT[1] - mT[1]) ** 2 + (nT[2] - mT[2]) ** 2 < 2025;
          gT.seen = !0, HT[0] = nT[0], HT[1] = nT[1], HT[2] = nT[2], kT && (gT.lastMovingAt = UT), null !== gT.particles && (!jT || UT - gT.lastMovingAt > 500) && (gT.particles.stop(), gT.particles = null, WT--), kT && jT && null === gT.particles && WT < 32 && (gT.particles = TT.createParticles(gT.cosmetic ? Dn : hn, {
            pos: nT
          }), WT++), null !== gT.particles && (gT.particles.moveTo(nT), gT.particles.setEmitRate(kT ? 12 : 0)), !kT && null === gT.particles && UT - Math.max(gT.lastMovingAt, gT.markedAt) > 2e3 && this.drops.delete(MT)
        }
      }
      dispose() {
        for (const UT of this.drops.values()) {
          var TT;
          null === (TT = UT.particles) || void 0 === TT || TT.stop()
        }
        this.drops.clear()
      }
    }
    var UH = mT(208);
    const mH = UH.f.Fc * UH.f.playerEyeToHeightRatio;
    class WH {
      constructor(TT) {
        this.host = TT, this.lava = [], this.loop = null, this.nextUpdateAt = 0
      }
      pB(TT) {
        this.lava = TT, this.nextUpdateAt = 0
      }
      Cl() {
        var TT;
        const UT = this.host.now();
        if (UT < this.nextUpdateAt) return;
        this.nextUpdateAt = UT + 250;
        const mT = this.host.playerPosition(),
          WT = mT && this.findNearest([mT[0], mT[1] + mH, mT[2]]);
        if (!WT || WT.distance >= 40) return void this.stop();
        const zT = .5 * Math.min(1, (40 - WT.distance) / 8);
        this.loop ? this.loop.setRelativeVolume(zT) : this.loop = this.host.play("lavaFlow", zT, WT.position, 40 + mH, 9, !0), null === (TT = this.loop) || void 0 === TT || TT.setPosition(WT.position)
      }
      dispose() {
        this.stop(), this.lava = []
      }
      stop() {
        var TT;
        null === (TT = this.loop) || void 0 === TT || TT.stop(), this.loop = null
      }
      findNearest(TT) {
        let UT = -1,
          mT = 1 / 0;
        for (let WT = 0; WT < this.lava.length; WT += 3) {
          const zT = this.lava[WT] - TT[0],
            MT = this.lava[WT + 1] - TT[1],
            gT = this.lava[WT + 2] - TT[2],
            nT = zT * zT + MT * MT + gT * gT;
          nT < mT && (mT = nT, UT = WT)
        }
        return UT < 0 ? null : {
          position: [this.lava[UT], this.lava[UT + 1], this.lava[UT + 2]],
          distance: Math.sqrt(mT)
        }
      }
    }
    var zH = mT(2031),
      MH = mT(38764);
    const gH = {
      "Grey Portal": "Gray"
    };
    for (const LH of zT._c) gH[`${LH} Portal`] = LH;
    const nH = Object.keys(gH),
      HH = Object.fromEntries(nH.map((TT => [TT, (0, zT.eb)(zT.R[`${(0,zT._e)(gH[TT])}Team`])])));
    Object.fromEntries(nH.map((TT => [TT, zT.R[`${(0,zT._e)(gH[TT])}UiText`]])));
    class kH {
      constructor(TT, UT) {
        this.presentation = TT, this.portal = UT, this.unlocked = void 0
      }
      pB(TT) {
        const UT = !1 === this.unlocked && TT;
        this.unlocked = TT, this.Cl();
        const {
          min: mT,
          max: WT,
          unlockedBlock: zT
        } = this.portal;
        if (UT && this.presentation.hasChunk(...mT)) {
          const [TT, UT, MT] = HH[zT];
          this.presentation.playParticles({
            pos1: [...mT],
            pos2: WT.map((TT => TT + 1)),
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
              minColor: [TT, UT, MT, 1],
              maxColor: [Math.min(255, TT + 55), Math.min(255, UT + 55), Math.min(255, MT + 90), 1]
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
      Cl() {
        var TT;
        const UT = this.unlocked ? this.portal.unlockedBlock : null !== (TT = this.portal.lockedBlock) && void 0 !== TT ? TT : "Light Gray Portal",
          {
            min: mT,
            max: WT
          } = this.portal;
        for (let zT = mT[0]; zT <= WT[0]; zT++)
          for (let TT = mT[1]; TT <= WT[1]; TT++)
            for (let MT = mT[2]; MT <= WT[2]; MT++) this.presentation.hasChunk(zT, TT, MT) && this.presentation.uq(zT, TT, MT) !== UT && this.presentation.EQ(zT, TT, MT, UT)
      }
    }
    const jH = {
        farming_1: {
          raises: TT => "NPC" === TT.type && "chef" === TT.variation,
          rise: .4
        },
        fishing_1: {
          raises: TT => "Draugr Warper" === TT.type,
          rise: .4
        }
      },
      lH = (TT, UT, mT, MT) => {
        let {
          localPlayerId: gT
        } = MT;
        const nT = new iz({
          translate: (TT, UT) => (0, tz.v)(rn.f.get().getCurrentLanguageCode(), TT, UT),
          translateWithIcons: (TT, UT) => (0, tz.r)(rn.f.get().getCurrentLanguageCode(), TT, UT),
          setMenuOpen: TT => {
            TT ? (0, NT.l)() : (0, NT.d)()
          },
          dismissMenu: NT.f,
          publishSkills: TT => {
            ET.j.EZ(gm, TT, !0)
          },
          publishQuests: TT => {
            ET.j.EZ(jm, TT, !0)
          },
          publishQuestNotification: TT => {
            ET.j.EZ(lm, TT, !0)
          },
          publishDungeons: TT => {
            ET.j.EZ(Bm, TT, !0)
          },
          publishCollections: TT => {
            ET.j.EZ(Fm, TT, !0)
          },
          publishMap: TT => {
            ET.j.EZ(LT, TT, !0)
          },
          publishHud: TT => {
            ET.j.EZ(vz, TT, !0)
          },
          publishPortalTransit: TT => {
            ET.j.EZ(Vm, TT, !0)
          },
          isLoadingScreenUp: () => ez.b.get("loadingOverlayVisible"),
          publishDailyReward: TT => {
            ET.j.EZ(rm, TT, !0)
          },
          publishMailbox: TT => {
            ET.j.EZ(Em, TT, !0)
          },
          publishQuestGraph: TT => {
            ET.j.EZ(Dm, TT, !0)
          },
          publishForge: TT => {
            ET.j.EZ(cW, TT, !0)
          },
          publishSmuggler: TT => {
            ET.j.EZ(qW, TT, !0)
          },
          publishKeepersChair: TT => {
            ET.j.EZ(wW, TT, !0)
          },
          publishReachLog: TT => {
            ET.j.EZ(aW, TT, !0)
          },
          publishLampLight: TT => {
            ET.j.EZ(FW, TT, !0)
          },
          publishMagmaward: TT => {
            ET.j.EZ(VW, TT, !0)
          },
          publishGlowtide: TT => {
            ET.j.EZ(CW, TT, !0)
          },
          publishGlowMeter: TT => {
            ET.j.EZ(KW, TT, !0)
          },
          publishHushWait: TT => {
            ET.j.EZ(GW, TT, !0)
          },
          publishPassage: TT => {
            ET.j.EZ(OW, TT, !0)
          },
          publishTideCharts: TT => {
            ET.j.EZ(EW, TT, !0)
          },
          publishRegulars: TT => {
            ET.j.EZ(mz, TT, !0)
          },
          publishHiddenWaters: TT => {
            ET.j.EZ(nz, TT, !0)
          },
          publishDialogue: TT => {
            ET.j.EZ(kz, TT, !0)
          },
          publishAutographs: TT => {
            ET.j.EZ(Bz, TT, !0)
          },
          onDailyRewardStarted: TT => {
            yT.playSound(gT, TT.day === dT ? "trumpetFlare" : "chestOpen", .8, 1)
          },
          onDailyRewardCoinLanded: (TT, UT) => {
            yT.playSound(gT, "exp_collect", .35, 1 + .6 * TT / (UT - 1)), ET.j.EZ(Km, TT === UT - 1)
          },
          onDailyRewardItemLanded: TT => {
            yT.playSound(gT, "pickUp", .6, 1 + .15 * TT)
          },
          onMailboxStarted: () => {
            yT.playSound(gT, "rpgMetalClick", .6, 1), yT.playSound(gT, "rpgBookFlip1", .7, 1)
          },
          onDailyRewardFinished: () => {
            yT.sendCommand("skyblockDailyRewardDone")
          },
          journeyStorage: Sn.m,
          requestTracking: TT => {
            yT.sendCommand(`quests track ${TT}`)
          },
          requestDungeonEnter: (TT, UT) => {
            yT.sendCommand(`dungeonEnter ${TT} ${UT}`)
          },
          requestQuestJump: TT => {
            yT.sendCommand(`${IT} jump ${TT}`)
          },
          requestQuestArrive: (TT, UT) => {
            const mT = `${IT} arrive ${TT}`;
            yT.sendCommand(UT ? `${mT} complete` : mT)
          },
          requestForge: TT => {
            let {
              blade: UT,
              guard: mT,
              handle: WT
            } = TT;
            yT.sendCommand(`forge ${UT} ${mT} ${WT}`)
          },
          requestDialogue: () => {
            yT.sendCommand("quests dialogue")
          },
          requestSmuggle: (TT, UT) => {
            yT.sendCommand(`smuggle ${TT} ${UT}`)
          },
          requestKeepersChairAim: TT => {
            yT.sendCommand(`keeperschair-aim ${TT}`)
          },
          requestReachLogOpen: () => {
            yT.sendCommand("reachlog-open")
          },
          requestLampLight: TT => {
            yT.sendCommand(`${TT}`)
          },
          requestTravel: TT => {
            yT.sendCommand(`map travel ${TT.kind} ${TT.id} ${TT.requestId}`)
          }
        });
        let HT, kT, jT, lT, pT, BT, ZT, iT, bT, OT, eT, xT, wT;
        const aT = new TH;
        let yT, XT = null;
        const QT = jH[null !== mT && void 0 !== mT ? mT : ""],
          VT = (TT, UT) => {
            null !== QT && void 0 !== QT && QT.raises(UT) && yT.setNametagOffset(TT, QT.rise)
          },
          rT = new Cn({
            getLocalHookPosition: () => {
              const TT = KT.getLocalHook();
              return null !== TT && yT.checkValid(TT) ? yT.Aq(TT) : null
            },
            playParticles: TT => {
              yT.playParticleEffect(TT)
            },
            vibrate: TT => {
              hT.g.play("fishBite", TT)
            },
            now: () => performance.now()
          }),
          KT = new Fn({
            getLineOwner: TT => yT.checkValid(TT) ? yT.getLineOwner(TT) : null,
            isLocalPlayer: TT => yT.isLocalPlayer(TT),
            getHookPosition: TT => {
              const [UT, , mT] = yT.Aq(TT);
              return [UT, mT]
            },
            isHushWaiting: () => {
              var TT;
              return "waiting" === (null === (TT = nT.hushWait.getSnapshot()) || void 0 === TT ? void 0 : TT.phase)
            },
            onCastLanded: (TT, UT) => {
              nT.tideCharts.castLanded(TT, UT)
            },
            onLocalHookSettled: () => {
              rT.onLocalHookSettled()
            },
            onLocalWaitEnded: TT => {
              rT.onLocalWaitEnded(TT)
            },
            now: () => performance.now()
          }),
          DT = new WH({
            now: () => performance.now(),
            playerPosition: () => yT.checkValid(gT) ? yT.Aq(gT) : null,
            play: (TT, UT, mT, WT, zT, MT) => yT.playSound(gT, TT, UT, 1, {
              zT: mT,
              maxHearDist: WT,
              refDistance: zT
            }, MT)
          }),
          oT = new Map;
        let AT;
        return {
          onCreate: TT => {
            if (yT = TT, XT = new MH.SkyblockEntityFacing(TT, QT ? VT : null), nT.portalTransit.resumeArrival(null !== mT && void 0 !== mT ? mT : null), (null !== mT && void 0 !== mT ? mT : WT) === WT) {
              let TT = -1 / 0;
              AT = ET.j.subscribe("toggleMenu", (UT => {
                const mT = performance.now();
                "inventory|Workbench" !== UT || "cross_to_hub" !== nT.quests.getTrackedQuestId() || mT - TT < 1e4 || (TT = mT, yT.sendCommand("skyblockWorkbenchOpened"))
              }))
            }
            for (const [WT, zT] of Object.entries(null !== (UT = sT[null !== mT && void 0 !== mT ? mT : ""]) && void 0 !== UT ? UT : {})) {
              var UT;
              oT.set(WT, new kH({
                hasChunk: (UT, mT, WT) => TT.isBlockInLoadedChunk(UT, mT, WT),
                uq: (UT, mT, WT) => TT.blockIdToBlockName(TT.getBlockId(UT, mT, WT)),
                EQ: (UT, mT, WT, zT) => {
                  TT.EQ(UT, mT, WT, zT)
                },
                playParticles: UT => {
                  TT.playParticleEffect(UT)
                }
              }, zT))
            }
            wT = (0, zH.i)((TT => function(TT) {
              return Object.hasOwn(SU, TT) || TT.startsWith("npc_")
            }(TT) ? NU(TT) : null)), nT.resolveItemName = (UT, mT) => {
              const WT = TT.getItemStat(gT, UT, "displayName");
              return WT && "object" === typeof WT && "translationKey" in WT ? mT(WT.translationKey, (0, tz.o)(WT.params, Kn.d.shown)) : "string" === typeof WT ? mT(WT) : UT
            }, nT.quests.notifications.onShown = TT => {
              "quest" === TT ? yT.playSound(gT, "magicAccent1", 1, 1) : "skillLevel" === TT ? yT.playSound(gT, "magicAccent1", 1, .6) : "landmark" === TT ? yT.playSound(gT, "trumpetFlare", 1, .6) : "npcNote" === TT ? yT.playSound(gT, "magicAccent2", .8, 1.1) : "started" === TT ? yT.playSound(gT, (0, In.d)("bigDrumSwish"), 1, 1) : yT.playSound(gT, (0, In.d)("rpgHandleSmallLeather"), 1, 1)
            }, nT.forge.onPartSelected = () => {
              yT.playSound(gT, "rpgMetalClick", .6, .9 + .2 * Math.random())
            }, nT.forge.onOpened = () => {
              ! function(TT) {
                TT.preloadSounds([(0, In.d)("firecracker"), "fireBurn", "magicAccent2"])
              }(TT)
            }, nT.forge.onForgeStarted = (UT, mT, WT) => sn(TT, gT, UT, mT, WT), nT.smuggler.onBought = () => {
              yT.playSound(gT, (0, In.d)("rpgHandleSmallLeather"), 1, 1), yT.playSound(gT, "chestOpen", .6, 1)
            }, nT.compass.register(new cT(nT.map, !0)), nT.compass.register(new cT(nT.map, !1)), nT.compass.register(new fT(nT.map)), nT.compass.register(new qT((() => nT.quests.getSnapshot().compassTarget)));
            for (const mT of ["enemy", "npc"]) nT.compass.register(new vT(nT.map, mT, (UT => TT.checkValid(UT) ? TT.Aq(UT) : void 0), (UT => TT.isAlive(UT))))
          },
          onAfterRender: (TT, UT) => {
            const mT = yT.checkValid(gT) ? yT.Aq(gT) : null;
            nT.navigation.afterRender(mT, performance.now(), UT), nT.glowtide.afterRender(mT, UT.cameraHeading), nT.tideCharts.afterRender(mT), KT.afterRender()
          },
          onClose: () => {
            var TT, UT, mT, WT, zT, MT, gT, LT, BT, cT, vT, fT, qT, YT, JT;
            AT && ET.j.unsubscribe(AT), null === (TT = wT) || void 0 === TT || TT(), aT.dispose(), DT.dispose(), null === (UT = XT) || void 0 === UT || UT.dispose(), KT.dispose(), nT.dispose(), null === (mT = HT) || void 0 === mT || mT(), null === (WT = kT) || void 0 === WT || WT(), null === (zT = jT) || void 0 === zT || zT(), null === (MT = lT) || void 0 === MT || MT(), null === (gT = pT) || void 0 === gT || gT(), null === (LT = ZT) || void 0 === LT || LT(), null === (BT = undefined) || void 0 === BT || BT(), null === (cT = iT) || void 0 === cT || cT(), null === (vT = bT) || void 0 === vT || vT(), null === (fT = OT) || void 0 === fT || fT(), null === (qT = eT) || void 0 === qT || qT(), null === (YT = undefined) || void 0 === YT || YT(), null === (JT = xT) || void 0 === JT || JT()
          },
          onPlayerChangeBlock: (TT, UT, WT, MT, HT, kT) => {
            if (TT === gT && "Air" === kT) {
              const TT = yT.getClientOption(gT, "creative");
              nT.skills.predictBlock([UT, WT, MT], HT, TT);
              const kT = function(TT, UT) {
                  if ("hub" === UT || "farming_1" === UT || "mining_1" === UT) return !uT.has(TT) || "hub" !== UT && "mining_1" !== UT ? Object.hasOwn(PT, TT) ? PT[TT] : void 0 : FT
                }(HT, mT),
                jT = ("hub" === mT || "mining_1" === mT) && (zT.Id.some((TT => TT === HT)) || Object.hasOwn(CT, HT) || "mining_1" === mT && "Block of Coal" === HT);
              TT || void 0 === kT && !jT || yT.EQ(UT, WT, MT, null !== kT && void 0 !== kT ? kT : FT)
            }
          },
          onPlayerAttackEntity: (TT, UT) => {
            if (TT !== gT || "Player" !== yT.getEntityType(UT)) return;
            const [mT, WT, zT] = yT.Aq(UT);
            yT.burstParticlePreset("critical", [mT, WT + 1, zT], 10)
          },
          onChangeBlockFail: TT => {
            for (const {
                fT: UT
              }
              of TT) nT.skills.rejectBlock(UT)
          },
          onReceivedMessageFromServer: (TT, UT) => {
            if ("skyblockGatedPortal" === TT) {
              var mT;
              const [TT, WT] = UT;
              return void(null === (mT = oT.get(TT)) || void 0 === mT || mT.pB(WT))
            }
            if ("skyblockDailyReward" === TT) return void nT.dailyReward.pB(UT);
            if ("skyblockMailbox" === TT) return void nT.mailbox.pB(UT);
            if ("skyblockPortalTransit" === TT) return void nT.portalTransit.pB(UT);
            if ("skyblockLoot" === TT) return void aT.pB(yT, UT);
            if ("skyblockLava" === TT) return void DT.pB(UT);
            if ("skyblockForge" === TT) return void nT.forge.pB(UT);
            if ("skyblockMagmaward" === TT) return void nT.magmaward.pB(UT);
            if ("skyblockGlowtide" === TT) return void nT.glowtide.pB(UT);
            if ("skyblockGlowMeter" === TT) return void nT.glowMeter.pB(UT);
            if ("skyblockHushWait" === TT) return void nT.hushWait.pB(UT);
            if ("skyblockPassage" === TT) {
              const TT = UT;
              return nT.passage.pB(TT), nT.reachLog.receivePassagePhase(TT.passagePhase), OT ??= (0, YT.r)({
                id: "skyblockPassage",
                order: 5,
                labelKey: "skyblockGame:passageButton",
                icon: {
                  kind: "item",
                  name: "Moonfish"
                },
                panel: !0,
                onClick: nT.passage.show
              }), void nT.keepersChair.receivePassage({
                keepersChairPassagePhase: TT.passagePhase,
                keepersChairPassageNextPhase: TT.passageNextPhase,
                keepersChairPassageTurnsInMs: TT.passageTurnsInMs
              })
            }
            if ("skyblockTideCharts" === TT) {
              const TT = UT;
              return nT.tideCharts.pB(TT), void(TT.tideCharts.length > 0 && (eT ??= (0, YT.r)({
                id: "skyblockTideCharts",
                order: 8,
                labelKey: "skyblockGame:tideChartsTitle",
                icon: {
                  kind: "item",
                  name: "Chunk Map"
                },
                panel: !0,
                onClick: nT.tideCharts.show
              })))
            }
            if (TT === ST.w) {
              var WT;
              const {
                hookId: TT,
                waiting: mT
              } = UT;
              return void KT.hookWaiting(TT, null !== (WT = null === mT || void 0 === mT ? void 0 : mT.remainingMs) && void 0 !== WT ? WT : null)
            }
            if ("skyblockBiteTell" === TT) return void rT.receiveTell(UT);
            if ("skyblockSmuggler" === TT) return void nT.smuggler.pB(UT);
            if ("skyblockKeepersChair" === TT) return nT.keepersChair.pB(UT), void nT.lampLight.setAtChair(nT.keepersChair.isAtChair());
            if ("skyblockLampLight" === TT) {
              const TT = UT;
              var zT;
              if (nT.lampLight.pB(TT), TT.lampLightReleasing) bT ??= (0, YT.r)({
                id: "skyblockLampLightKeepCatches",
                order: 7,
                labelKey: "skyblockGame:lampLightKeepCatches",
                icon: {
                  kind: "item",
                  name: "Bucket"
                },
                onClick: () => {
                  nT.lampLight.setRelease(!1)
                }
              });
              else null === (zT = bT) || void 0 === zT || zT(), bT = void 0;
              return
            }
            if ("skyblockRegulars" === TT) return void nT.regulars.pB(UT);
            if ("skyblockHiddenWaters" === TT) return void nT.hiddenWaters.pB(UT);
            if ("skyblockReachLog" === TT) return nT.reachLog.pB(UT), void(iT ??= (0, YT.r)({
              id: "skyblockReachLog",
              order: 6,
              labelKey: "skyblockGame:reachLogTitle",
              icon: {
                kind: "item",
                name: XW
              },
              onClick: nT.reachLog.ask
            }));
            if ("skyblockBurrowDoor" === TT) {
              for (const [TT, mT, WT, zT] of UT) yT.EQ(TT, mT, WT, zT);
              return
            }
            if ("skyblockHud" === TT) nT.receiveHud(UT);
            else if ("skyblockMap" === TT) nT.map.pB(UT);
            else if (TT === GT.e) nT.skills.pB(UT);
            else if (TT === tT && "dialogue" === UT.kind) nT.dialogue.pB(UT);
            else if (TT === tT) nT.quests.pB(UT);
            else if ("skyblockDungeons" === TT) nT.dungeons.pB(UT);
            else if ("sbCollections" === TT) nT.collections.pB(UT);
            else if ("skyblockQuestGraph" === TT) nT.questGraph.pB(UT);
            else {
              if ("skyblockAutographs" !== TT) return;
              nT.autographs.pB(UT)
            }
            if (!kT && nT.map.getSnapshot().enabled) {
              const TT = (0, YT.r)({
                  id: "skyblockMap",
                  order: 3,
                  labelKey: "skyblockGame:map",
                  icon: {
                    kind: "item",
                    name: "Compass"
                  },
                  panel: !0,
                  onClick: nT.map.show
                }),
                UT = (0, NT.n)(nT.map.show);
              kT = () => {
                TT(), UT()
              }
            }!jT && nT.skills.getSnapshot().enabled && (jT = (0, YT.r)({
              id: "skyblockSkills",
              order: 0,
              labelKey: "skyblockGame:skills",
              icon: {
                kind: "item",
                name: "Iron Sword"
              },
              panel: !0,
              onClick: nT.skills.show
            })), !ZT && nT.collections.getSnapshot().enabled && (ZT = (0, YT.r)({
              id: "skyblockCollections",
              order: 2.5,
              labelKey: "skyblockGame:collections",
              icon: {
                kind: "item",
                name: "Coal"
              },
              panel: !0,
              onClick: nT.collections.show
            })), !lT && nT.quests.getSnapshot().enabled && (lT = (0, YT.r)({
              id: "skyblockQuests",
              order: 1,
              labelKey: "skyblockGame:quests",
              icon: {
                kind: "item",
                name: "Book"
              },
              panel: !0,
              onClick: nT.quests.show
            })), !xT && nT.autographs.getSnapshot().enabled && (xT = (0, YT.r)({
              id: "skyblockAutographs",
              order: 5,
              labelKey: "skyblockGame:autographs",
              icon: {
                kind: "item",
                name: "Name Tag"
              },
              panel: !0,
              onClick: nT.autographs.show
            }));
            const MT = nT.dungeons.getSnapshot().enabled;
            var gT;
            (jT || lT || MT) && BT !== MT && (BT = MT, null === (gT = pT) || void 0 === gT || gT(), pT = (0, YT.r)({
              id: "skyblockDungeons",
              order: 2,
              labelKey: "skyblockGame:dungeons",
              icon: {
                kind: "image",
                src: IU
              },
              disabled: !MT,
              panel: !0,
              onClick: nT.dungeons.show
            }));
            HT || (HT = (0, NT.q)((0, JT.createElement)(yn, {
              controller: nT
            }), {
              content: (0, JT.createElement)(Xn, {
                controller: nT
              }),
              onClose: nT.close
            }))
          },
          Cl: () => {
            var TT;
            for (const UT of oT.values()) UT.Cl();
            aT.Cl(yT), DT.Cl(), null === (TT = XT) || void 0 === TT || TT.Cl(), nT.skills.Cl(), nT.quests.Cl(), nT.dailyReward.Cl(), nT.mailbox.Cl(), nT.map.Cl()
          }
        }
      }
  },
  36437: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT,
      e: () => WT
    });
    const WT = "skyblockSkills",
      zT = "skills_test_gym"
  },
  34298: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT,
      h: () => gT
    });
    const WT = [{
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

    function zT(TT) {
      let UT, mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
      if ("number" === typeof TT) {
        if (!Number.isFinite(TT)) return "0";
        if (Math.abs(TT) < 100) {
          const UT = TT < 0 ? "-" : "",
            mT = Math.abs(TT);
          return mT >= 10 ? `${UT}${mT.toFixed(1).replace(/\.0$/,"")}` : `${UT}${mT.toFixed(2).replace(/\.?0+$/,"")}`
        }
        UT = BigInt(Math.floor(TT))
      } else UT = TT;
      const zT = UT < 0n ? -UT : UT,
        MT = UT < 0n ? "-" : "",
        gT = zT.toString();
      if (gT.length <= mT) return `${MT}${gT}`;
      const nT = 3 * Math.floor((gT.length - 1) / 3);
      if (nT < 3) return `${MT}${gT}`;
      if (nT > 3 * WT.length) {
        const TT = gT[0],
          UT = gT.slice(1, 3).replace(/0+$/, "");
        return `${MT}${UT?`${TT}.${UT}`:TT}e${gT.length-1}`
      }
      const {
        threshold: HT,
        suffix: kT
      } = WT[WT.length - nT / 3], jT = zT / HT, lT = Number(1000n * (zT % HT) / HT), LT = Number(jT) + lT / 1e3;
      let pT;
      return pT = LT >= 100 ? Math.floor(LT).toString() : LT >= 10 ? LT.toFixed(1).replace(/\.0$/, "") : LT.toFixed(2).replace(/\.?0+$/, ""), `${MT}${pT}${kT}`
    }
    const MT = WT.map((TT => {
      let {
        threshold: UT,
        suffix: mT
      } = TT;
      return {
        threshold: Number(UT),
        suffix: mT
      }
    })).filter((TT => {
      let {
        threshold: UT
      } = TT;
      return Number.isFinite(UT)
    }));

    function gT(TT) {
      const UT = Math.abs(TT),
        mT = TT < 0 ? "-" : "";
      for (const {
          threshold: WT,
          suffix: zT
        }
        of MT)
        if (UT >= WT) {
          const TT = UT / WT;
          if (TT >= 1e3) return `${mT}${UT.toExponential(2).replace("e+","e")}`;
          let MT;
          return MT = TT >= 100 ? Math.floor(TT).toString() : TT >= 10 ? TT.toFixed(1).replace(/\.0$/, "") : TT.toFixed(2).replace(/\.?0+$/, ""), `${mT}${MT}${zT}`
        } return `${mT}${UT}`
    }
  },
  38702: (TT, UT, mT) => {
    var WT = {
      "./combat_1.png": 38705,
      "./dungeon_crumbling_crypt.png": 38710,
      "./dungeon_frozen_hollow.png": 38713,
      "./dungeon_wildwood_grove.png": 38715,
      "./dungeons.png": 38722,
      "./farming_1.png": 38725,
      "./fishing_1.png": 38727,
      "./hub.png": 38731,
      "./island.png": 38736,
      "./mining_1.png": 38745,
      "./mining_1_bridge.png": 38748,
      "./mining_1_gallery.png": 38751,
      "./mining_1_hollow.png": 38755,
      "./mining_1_village.png": 38758
    };

    function zT(TT) {
      var UT = MT(TT);
      return mT(UT)
    }

    function MT(TT) {
      if (!mT.o(WT, TT)) {
        var UT = new Error("Cannot find module '" + TT + "'");
        throw UT.code = "MODULE_NOT_FOUND", UT
      }
      return WT[TT]
    }
    zT.keys = function() {
      return Object.keys(WT)
    }, zT.resolve = MT, TT.exports = zT, zT.id = 38702
  },
  38705: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/combat_1.72ac23641446e4f80923.png"
  },
  38710: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/dungeon_crumbling_crypt.39389aef74bd36e64180.png"
  },
  38713: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/dungeon_frozen_hollow.042bf06d2cfd2c68c7e6.png"
  },
  38715: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/dungeon_wildwood_grove.d5115bf7a4d3fc811ff4.png"
  },
  38722: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/dungeons.6836b40c30687755a545.png"
  },
  38725: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/farming_1.88c6a10630aed3ef8195.png"
  },
  38727: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/fishing_1.c63e97744abce5bb9af7.png"
  },
  38731: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/hub.2531ead8f8a327f34b1c.png"
  },
  38736: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/island.205bb9973a65f87b60a3.png"
  },
  38745: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/mining_1.98c7a7e3424532a89b98.png"
  },
  38748: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/mining_1_bridge.65d4e676030492359993.png"
  },
  38751: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/mining_1_gallery.f9f2baffc0a921cd9ffe.png"
  },
  38755: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/mining_1_hollow.82ed2e9c753519918230.png"
  },
  38758: (TT, UT, mT) => {
    TT.exports = mT.p + "static/media/mining_1_village.855cb5fdab046ca65e04.png"
  },
  18581: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAFT2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMTAiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTAiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMDY6MDg6MTMtMDQ6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPlBsYW5rczwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC42IgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDA2OjA4OjEzLTA0OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz5RDOytAAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kbtLA0EQhz9PxTcRtLAQDKJWKlEhaGOR4AvUIp7gq0kul0RI4nEXkWAr2AoKoo2vQv8CbQVrQVAUQay1VbTRcM7lAhExs8zOt7/dGXZnQVGTWsqq8EEqnTFDYwHv3PyCt+qVGuqoRaEtrFnG1MyoSkn7vKfMibc9Tq3S5/61uqhuaVBWLTysGWZGeFx4ci1jOLwj3KwlwlHhM+FuUy4ofOfoEZdfHI67/O2wqYaCoDQKe+O/OPKLtYSZEpaX05FKrmqF+zgvqdfTszMS28VbsQgxRgAvE4wQxE8fQzL76aGfXllRIt+Xz59mRXI1mQ2ymCwTJ0GGblFXpbouMSa6LiNJ1un/375asYF+t3p9ACqfbfu9E6q2Ibdl219Htp07hvInuEwX81cOYfBD9K2i1nEAng04vypqkV242ISWRyNshvNSubgSi8HbKTTMQ9MN1C66PSvsc/IA6rp81TXs7UOXnPcs/QAlUWfIbV2y+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAG9JREFUGJVjYKAQ/IdiOGDEpqh6jiYDAwMDQ2vKdbgaJnzG5nSqwEzHUPj/1WJThpZPDxg+vv2N212vFpv+/9/H+f9yFi/MjXB3wtz4/38fJwMDAwPDlTssDLrTPmO4nwXGuHIHwsSmCMVELGLkAQBi0iUZsdoC/wAAAABJRU5ErkJggg=="
  },
  20728: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABgWlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kc8rRFEUxz9miMYIsbCweGlYDflREymLmRgKizHKYPPmmTejZsbrvZFkq2wVJTZ+LfgL2CprpYiUbFkTG/ScZ6Zmkjm3c8/nfu89p3vPBVc0rWWsym7IZHNmJBxUZmKzSvUzNbTSyCAeVbOMiamRKGXt444KJ950OrXKn/vXahcSlgYVNcJDmmHmhEeFx1dyhsPbws1aSl0QPhX2m3JB4VtHj+f5xeFknr8cNqORELgahJVkCcdLWEuZGWF5Ob5Melkr3Md5iTeRnZ6S2CbeikWEMEEUxhgmRIAeBmQO0EkvXbKiTH73b/4kS5KryWywiskiSVLk8Iu6LNUTEnXREzLSrDr9/9tXS+/rzVf3BqHqybbf2qF6C743bfvz0La/j8D9CBfZYv7SAfS/i75Z1Hz7UL8OZ5dFLb4D5xvQ8mCopvorucVdug6vJ1AXg6Zr8Mzle1bY5/geomvyVVewuwcdcr5+/gejEmgBy3n7uAAAAGRJREFUGJWVkDEOgCAMRZ+Eu5iQeBtu6MpRnNkYuUZhULQwKP7lN+n7bVOY1HJ5+eJsq8q+AiA5ARCDALAdpxsdk5yIQYhBcL5rPWCDmka4j73oBscJzptug9UpDWsIfrxn9kQqJZUnE6phAjUAAAAASUVORK5CYII="
  },
  23141: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAGtJREFUGJVjYKAC+A/FDAwMDAxMuBR9fr6D4esduAasCv9/fr6D4cX7yyiC6Ar/f36+g4GBgYFBQlAXp0K4InTTGBgYGBjRrYOZxPTVg4FbBUUNROHXO6iYgYHhv3eYEHafImMXfz6siggCADC+M1RlDaxOAAAAAElFTkSuQmCC"
  },
  24670: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAE9JREFUGJVjYCASMKLx/+OSR1b4/z9PMqqqL3OxGcbwHxl3MXj9/8+T/B+LLQgNNVHm/6E24FT4f2qRG9xUXAqRFTHgUoiuCNnNWD1COQAAFWcvZJ927BwAAAAASUVORK5CYII="
  },
  26292: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAH1JREFUGJVjYKAC+A/FDAwMDAxMuBSdyDdkWLzBGKYBq8L/J+wNGR4se4IiiK7w/wl7QwYGBgYGBS0ZnArhih5cQzUNWeH/E/mGcAUKWjIMtwuZGGIDzjIwMDAwwgkGBob/UIfDQWzAWQbvMCHGraveYXoCGbv482HxJxEAAJssJtLET2YfAAAAAElFTkSuQmCC"
  },
  26309: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAItJREFUGJVjYKAA/Ifh3nJb/Arv7E79X+Mp+p+BgeH/1EYX7Ir299n8v7M79f/+PhuYyQwMDAwMTOgqZXU1GR5fvs4gq6vJcGd3KswpDCzoCmGKHl++zrB3901UybBACwYGBob/NZ6icLfBMFSOgRHJbQwMDAwMjkVHGMICLRiRDVq1/gTCE+gmkA0A4Aw5D/wQUU0AAAAASUVORK5CYII="
  },
  38676: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  },
  38684: TT => {
    TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAYElEQVR4nGNgIBIwovH/45JnRFaUGN+Comr+whq4GiZ0RVycnGAMAlAxsC0sMN2fvn9DodEBzEQGdUV5hvNnV4JpGJuPkwtTIQh4umZhZWMonDqjGCsbHcCCBkQjs0kDAPeaHpfX1eroAAAAAElFTkSuQmCC"
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);